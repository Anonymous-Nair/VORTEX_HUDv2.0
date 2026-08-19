import * as THREE from "three";
import type { AgentDef, AgentRole, AgentRuntime, AgentStatus } from "../types";
import { TASK_POOLS } from "../data/defaults";
import { TAU, clamp, damp, pick, randRange } from "../utils/math";
import { bus } from "../store/event-bus";
import { useVortex } from "../store/vortex-store";

/* ============================================================
   SECRET AGENT HQ — autonomous AI operations office
   Waypoint graph navigation · Dijkstra path planning · steering
   with arrival + separation · per-role behaviors · procedural
   low-poly agent bodies · live holographic workstation screens.
   ============================================================ */

interface Waypoint {
  id: number;
  pos: THREE.Vector3;
}

interface AgentBody {
  group: THREE.Group;
  thighL: THREE.Group; thighR: THREE.Group;
  shinL: THREE.Group; shinR: THREE.Group;
  armL: THREE.Group; armR: THREE.Group;
  foreL: THREE.Group; foreR: THREE.Group;
  head: THREE.Mesh;
  visorMat: THREE.MeshStandardMaterial;
  phase: number;
}

type AgentMode = "WORKING" | "TRANSIT" | "BRIEFING" | "SCANNING" | "STANDBY";

interface OfficeAgent {
  def: AgentDef;
  body: AgentBody;
  mode: AgentMode;
  modeAfterTransit: AgentMode;
  path: THREE.Vector3[];
  pathIdx: number;
  velocity: THREE.Vector3;
  yaw: number;
  task: string;
  progress: number;
  dwell: number;
  scanAng: number;
  briefTimer: number;
  moveAmount: number;
}

const DESK_ANGLES = Array.from({ length: 8 }, (_, i) => (i / 8) * TAU + TAU / 16);
const CORRIDOR_R = 4.6;
const DESK_R = 6.4;

export class OfficeScene {
  readonly group = new THREE.Group();
  private agentsGroup = new THREE.Group();
  private wp: Waypoint[] = [];
  private adj: Map<number, number[]> = new Map();
  private agents: OfficeAgent[] = [];
  private screens: Array<{ ctx: CanvasRenderingContext2D; tex: THREE.CanvasTexture; role: AgentRole; acc: number; seed: number }> = [];
  private tableHolo: THREE.Mesh;
  private tableGlow: THREE.MeshBasicMaterial;
  private sweep: THREE.Mesh | null = null;
  private briefing = 0;
  private schedAcc = 0;
  private syncAcc = 0;
  private warnPulse = 0;
  private rosterVersion = -1;

  /* Visual Control Lab proxies — engine-bound scene lights + holo/particle knobs */
  private hemi: THREE.HemisphereLight | null = null;
  private key: THREE.DirectionalLight | null = null;
  private rim: THREE.DirectionalLight | null = null;
  private lightMul = 1;
  private holoMul = 1;
  private screenMats: THREE.MeshBasicMaterial[] = [];
  private glowMats: THREE.MeshStandardMaterial[] = [];
  private localMat: THREE.ShaderMaterial | null = null;

  constructor() {
    this.buildGraph();
    this.buildEnvironment();
    this.tableHolo = new THREE.Mesh();
    this.tableGlow = new THREE.MeshBasicMaterial();
    this.buildTable();
    this.group.add(this.agentsGroup);
    bus.on("SYSTEM_WARNING", () => {
      this.warnPulse = 1;
    });
    bus.on("AGENT_TASK_ASSIGNED", ({ agentId, task }) => {
      const ag = this.agents.find((a) => a.def.id === agentId);
      if (ag) {
        ag.task = task;
        ag.progress = 0;
      }
    });
  }

  /* ---------------- engine proxy API (guarded, never throws) ---------------- */

  /** engine hands over the scene lights so HQ lighting can own them */
  bindLights(hemi: THREE.HemisphereLight, key: THREE.DirectionalLight, rim: THREE.DirectionalLight): void {
    this.hemi = hemi;
    this.key = key;
    this.rim = rim;
  }

  /** HQ lighting scalar 0..3 — environment brightness, haze feel, agent visibility */
  setLighting(v: number): void {
    this.lightMul = clamp(v, 0, 3);
    if (this.hemi) this.hemi.intensity = 0.75 * this.lightMul;
    if (this.key) this.key.intensity = 1.5 * this.lightMul;
    if (this.rim) this.rim.intensity = 0.8 * this.lightMul;
  }

  /** obsidian surface / holographic-glass shader scalar */
  setMaterials(p: { holoOpacity: number }): void {
    this.holoMul = clamp(p.holoOpacity, 0, 1);
    for (const m of this.screenMats) m.opacity = 0.96 * Math.max(0.08, this.holoMul);
    for (const m of this.glowMats) m.emissiveIntensity = 1.5 * (0.35 + this.holoMul);
  }

  /** local desk / agent ember-and-dust density matrix */
  setParticles(p: { density: number }): void {
    if (this.localMat) this.localMat.uniforms.uDensity.value = clamp(p.density, 0, 1);
  }

  /* ---------------- waypoint navigation graph ---------------- */

  private buildGraph(): void {
    let id = 0;
    const add = (x: number, z: number): number => {
      this.wp.push({ id, pos: new THREE.Vector3(x, 0, z) });
      this.adj.set(id, []);
      return id++;
    };
    const link = (a: number, b: number) => {
      this.adj.get(a)?.push(b);
      this.adj.get(b)?.push(a);
    };
    // 16-node ring corridor
    const corridor: number[] = [];
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      corridor.push(add(Math.cos(a) * CORRIDOR_R, Math.sin(a) * CORRIDOR_R));
    }
    for (let i = 0; i < 16; i++) link(corridor[i], corridor[(i + 1) % 16]);
    // approach nodes per desk (between corridor and desk)
    this.approachNodes = [];
    for (let i = 0; i < 8; i++) {
      const a = DESK_ANGLES[i];
      const ap = add(Math.cos(a) * (CORRIDOR_R + 0.95), Math.sin(a) * (CORRIDOR_R + 0.95));
      this.approachNodes.push(ap);
      // connect to two nearest corridor nodes
      const idx = Math.round((a / TAU) * 16) % 16;
      link(ap, corridor[idx]);
      link(ap, corridor[(idx + 15) % 16]);
    }
    // center table triad
    this.centerNodes = [];
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * TAU + 0.5;
      const c = add(Math.cos(a) * 1.15, Math.sin(a) * 1.15);
      this.centerNodes.push(c);
    }
    link(this.centerNodes[0], this.centerNodes[1]);
    link(this.centerNodes[1], this.centerNodes[2]);
    link(this.centerNodes[2], this.centerNodes[0]);
    // spokes: center ↔ corridor (4 directions)
    for (let i = 0; i < 3; i++) {
      link(this.centerNodes[i], corridor[(i * 5 + 2) % 16]);
      link(this.centerNodes[i], corridor[(i * 5 + 3) % 16]);
    }
    this.corridorNodes = corridor;
  }

  private corridorNodes: number[] = [];
  private approachNodes: number[] = [];
  private centerNodes: number[] = [];
  private patrolIdx = 0;

  private findPath(from: number, to: number): THREE.Vector3[] {
    if (from === to) return [this.wp[to].pos.clone()];
    const dist = new Map<number, number>();
    const prev = new Map<number, number>();
    const visited = new Set<number>();
    dist.set(from, 0);
    for (let iter = 0; iter < this.wp.length * 4; iter++) {
      let cur = -1;
      let best = Infinity;
      for (const [node, d] of dist) {
        if (!visited.has(node) && d < best) {
          best = d;
          cur = node;
        }
      }
      if (cur === -1 || cur === to) break;
      visited.add(cur);
      for (const nxt of this.adj.get(cur) ?? []) {
        const w = this.wp[cur].pos.distanceTo(this.wp[nxt].pos);
        const nd = best + w;
        if (nd < (dist.get(nxt) ?? Infinity)) {
          dist.set(nxt, nd);
          prev.set(nxt, cur);
        }
      }
    }
    const path: THREE.Vector3[] = [];
    let node: number | undefined = to;
    while (node !== undefined && node !== from) {
      path.push(this.wp[node].pos.clone());
      node = prev.get(node);
    }
    return path.reverse();
  }

  private nearestNode(p: THREE.Vector3): number {
    let best = 0;
    let bd = Infinity;
    for (const w of this.wp) {
      const d = w.pos.distanceToSquared(p);
      if (d < bd) {
        bd = d;
        best = w.id;
      }
    }
    return best;
  }

  /* ---------------- environment ---------------- */

  private buildEnvironment(): void {
    // shader grid floor
    const floorMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec2 vP;
        void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; varying vec2 vP;
        void main(){
          float d = length(vP);
          vec2 g = abs(fract(vP * 0.5) - 0.5);
          float minor = smoothstep(0.03, 0.0, min(g.x, g.y)) * 0.16;
          vec2 gm = abs(fract(vP * 0.1) - 0.5);
          float major = smoothstep(0.02, 0.0, min(gm.x, gm.y)) * 0.3;
          float ring = smoothstep(0.06, 0.0, abs(d - mod(uTime * 1.4, 17.0))) * 0.22;
          float fade = 1.0 - smoothstep(9.0, 15.5, d);
          vec3 col = vec3(0.043, 0.043, 0.055)
            + vec3(0.0, 0.94, 1.0) * (minor + ring) * fade
            + vec3(0.83, 0.69, 0.22) * major * fade * 0.55;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(34, 34), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    this.group.add(floor);
    this.floorMat = floorMat;

    // perimeter pylons
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      const pylon = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 2.7, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x101016, metalness: 0.9, roughness: 0.35 })
      );
      pylon.position.set(Math.cos(a) * 8.8, 1.35, Math.sin(a) * 8.8);
      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.09, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x04252a, emissive: 0x00f0ff, emissiveIntensity: 1.6, metalness: 0.4, roughness: 0.4 })
      );
      cap.position.set(Math.cos(a) * 8.8, 2.72, Math.sin(a) * 8.8);
      this.group.add(pylon, cap);
    }
    const ringPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * TAU;
      ringPts.push(new THREE.Vector3(Math.cos(a) * 8.8, 0.03, Math.sin(a) * 8.8));
    }
    const ringLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(ringPts),
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending })
    );
    this.group.add(ringLine);

    // workstations
    for (let i = 0; i < 8; i++) this.buildDesk(i);

    this.buildLocalParticles();
  }

  /** rising embers + idle dust above the HQ floor — density-matrix driven */
  private buildLocalParticles(): void {
    const N = 1400;
    const pos = new Float32Array(N * 3);
    const seed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = Math.random() * TAU;
      const r = 1.2 + Math.random() * 8.4;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.random() * 3.4;
      pos[i * 3 + 2] = Math.sin(a) * r;
      seed[i] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    this.localMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uDensity: { value: 0.85 } },
      vertexShader: `
        attribute float aSeed;
        uniform float uTime; uniform float uDensity;
        varying float vA;
        void main(){
          vec3 p = position;
          float speed = 0.15 + aSeed * 0.35;
          p.y = mod(p.y + uTime * speed, 3.4);
          p.x += sin(uTime * 0.6 + aSeed * 40.0) * 0.25;
          p.z += cos(uTime * 0.5 + aSeed * 31.0) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (1.0 + aSeed * 1.6) * (120.0 / -mv.z);
          vA = step(aSeed, uDensity) * (0.35 + 0.65 * aSeed) * smoothstep(3.4, 2.6, p.y);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.05, length(c));
          gl_FragColor = vec4(vec3(0.0, 0.9, 1.0) * 0.8 + vec3(0.83, 0.69, 0.22) * 0.4, a * a * vA * 0.5);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(geo, this.localMat);
    pts.frustumCulled = false;
    this.group.add(pts);
  }

  private floorMat: THREE.ShaderMaterial | null = null;
  private deskPositions: THREE.Vector3[] = [];

  private buildDesk(i: number): void {
    const a = DESK_ANGLES[i];
    const g = new THREE.Group();
    const px = Math.cos(a) * DESK_R;
    const pz = Math.sin(a) * DESK_R;
    g.position.set(px, 0, pz);
    g.lookAt(0, 0, 0);
    const dark = new THREE.MeshStandardMaterial({ color: 0x12121a, metalness: 0.88, roughness: 0.34 });

    const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 0.72), dark);
    top.position.y = 0.94;
    const legL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.94, 0.6), dark);
    legL.position.set(-0.72, 0.47, 0);
    const legR = legL.clone();
    legR.position.x = 0.72;
    g.add(top, legL, legR);

    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 150;
    const ctx = canvas.getContext("2d");
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const role = (useVortex.getState().agentDefs[i]?.role ?? "CODER") as AgentRole;
    if (ctx) {
      this.screens.push({ ctx, tex, role, acc: Math.random() * 0.2, seed: Math.random() * 100 });
    }
    const screenMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.96, toneMapped: false, side: THREE.DoubleSide });
    this.screenMats.push(screenMat);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.24, 0.72), screenMat);
    screen.position.set(0, 1.62, -0.12);
    screen.rotation.x = -0.12;
    g.add(screen);

    const glowMat = new THREE.MeshStandardMaterial({ color: 0x04252a, emissive: 0x00f0ff, emissiveIntensity: 1.5, metalness: 0.4, roughness: 0.4 });
    this.glowMats.push(glowMat);
    const underglow = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.02, 0.05), glowMat);
    underglow.position.set(0, 0.975, 0.34);
    g.add(underglow);

    this.group.add(g);
    this.deskPositions.push(new THREE.Vector3(px, 0, pz));
  }

  private buildTable(): void {
    const dark = new THREE.MeshStandardMaterial({ color: 0x12121a, metalness: 0.9, roughness: 0.3 });
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.2, 0.1, 32), dark);
    top.position.y = 0.88;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.4, 0.85, 16), dark);
    stem.position.y = 0.42;
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(1.06, 0.025, 8, 48),
      new THREE.MeshStandardMaterial({ color: 0x2c2208, emissive: 0xd4af37, emissiveIntensity: 1.4, metalness: 0.85, roughness: 0.3 })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.93;
    this.tableGlow = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.tableHolo = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 1), this.tableGlow);
    this.tableHolo.position.y = 1.75;
    this.group.add(top, stem, rim, this.tableHolo);
  }

  /* ---------------- roster ---------------- */

  buildRoster(defs: AgentDef[]): void {
    this.rosterVersion++;
    while (this.agentsGroup.children.length > 0) {
      const c = this.agentsGroup.children[0];
      this.agentsGroup.remove(c);
    }
    this.agents = [];
    this.sweep = null;
    // hot-sync holographic screen roles after roster edits
    defs.forEach((d, i) => {
      const s = this.screens[i];
      if (s) s.role = d.role;
    });
    defs.forEach((def, i) => {
      const body = this.buildBody(def);
      const wpIdx = this.approachNodes[def.workstation % this.approachNodes.length];
      body.group.position.copy(this.wp[wpIdx].pos);
      this.agentsGroup.add(body.group);
      const ag: OfficeAgent = {
        def,
        body,
        mode: "WORKING",
        modeAfterTransit: "WORKING",
        path: [],
        pathIdx: 0,
        velocity: new THREE.Vector3(),
        yaw: Math.atan2(-body.group.position.x, -body.group.position.z),
        task: pick(TASK_POOLS[def.role]),
        progress: Math.random() * 55,
        dwell: 0,
        scanAng: 0,
        briefTimer: 0,
        moveAmount: 0,
      };
      body.group.rotation.y = ag.yaw;
      this.agents.push(ag);
      if (def.role === "SECURITY") {
        const cone = new THREE.Mesh(
          new THREE.ConeGeometry(1.5, 4.4, 24, 1, true),
          new THREE.MeshBasicMaterial({ color: 0xff3333, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
        );
        cone.rotation.x = Math.PI / 2;
        cone.position.set(0, 1.1, 2.2);
        body.group.add(cone);
        this.sweep = cone;
        // security starts on patrol
        ag.mode = "SCANNING";
        this.sendToPatrol(ag);
      }
      if (i === 0) {
        // strategist opens with a slow system-scan posture
        ag.dwell = 3;
      }
    });
  }

  private buildBody(def: AgentDef): AgentBody {
    const g = new THREE.Group();
    const accent = new THREE.Color(def.color);
    const hull = new THREE.MeshStandardMaterial({ color: 0x17171f, metalness: 0.62, roughness: 0.46, flatShading: true });
    const hullDark = new THREE.MeshStandardMaterial({ color: 0x0e0e14, metalness: 0.7, roughness: 0.4, flatShading: true });
    const trim = new THREE.MeshStandardMaterial({ color: 0x0a0a0e, emissive: accent, emissiveIntensity: 2.0, metalness: 0.4, roughness: 0.4 });
    const visorMat = new THREE.MeshStandardMaterial({ color: 0x050508, emissive: accent, emissiveIntensity: 2.6, metalness: 0.2, roughness: 0.3 });

    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.2, 0.2), hullDark);
    pelvis.position.y = 0.92;
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.52, 0.24), hull);
    torso.position.y = 1.3;
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.03), trim);
    chest.position.set(0, 1.38, 0.13);
    const head = new THREE.Mesh(new THREE.DodecahedronGeometry(0.15, 0), hull);
    head.position.y = 1.76;
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.03), visorMat);
    visor.position.set(0, 1.77, 0.13);
    g.add(pelvis, torso, chest, head, visor);

    const mkLimb = (w: number, len: number, mat: THREE.Material): THREE.Mesh => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, len, w), mat);
      m.position.y = -len / 2;
      return m;
    };
    const mkPivot = (x: number, y: number): THREE.Group => {
      const p = new THREE.Group();
      p.position.set(x, y, 0);
      g.add(p);
      return p;
    };

    const thighL = mkPivot(0.1, 0.86);
    thighL.add(mkLimb(0.11, 0.42, hullDark));
    const shinL = new THREE.Group();
    shinL.position.y = -0.42;
    thighL.add(shinL);
    shinL.add(mkLimb(0.09, 0.4, hull));
    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.24), hullDark);
    footL.position.set(0, -0.42, 0.05);
    shinL.add(footL);

    const thighR = mkPivot(-0.1, 0.86);
    thighR.add(mkLimb(0.11, 0.42, hullDark));
    const shinR = new THREE.Group();
    shinR.position.y = -0.42;
    thighR.add(shinR);
    shinR.add(mkLimb(0.09, 0.4, hull));
    const footR = footL.clone();
    footR.position.set(0, -0.42, 0.05);
    shinR.add(footR);

    const armL = mkPivot(0.27, 1.52);
    armL.add(mkLimb(0.09, 0.3, hull));
    const foreL = new THREE.Group();
    foreL.position.y = -0.3;
    armL.add(foreL);
    foreL.add(mkLimb(0.08, 0.28, hullDark));
    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.1, 0.09), trim);
    handL.position.y = -0.3;
    foreL.add(handL);

    const armR = mkPivot(-0.27, 1.52);
    armR.add(mkLimb(0.09, 0.3, hull));
    const foreR = new THREE.Group();
    foreR.position.y = -0.3;
    armR.add(foreR);
    foreR.add(mkLimb(0.08, 0.28, hullDark));
    const handR = handL.clone();
    handR.position.y = -0.3;
    foreR.add(handR);

    const shoulderL = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.1, 0.16), trim);
    shoulderL.position.set(0.26, 1.53, 0);
    const shoulderR = shoulderL.clone();
    shoulderR.position.x = -0.26;
    g.add(shoulderL, shoulderR);

    return { group: g, thighL, thighR, shinL, shinR, armL, armR, foreL, foreR, head, visorMat, phase: Math.random() * TAU };
  }

  /* ---------------- behavior ---------------- */

  private sendToDesk(ag: OfficeAgent): void {
    const from = this.nearestNode(ag.body.group.position);
    const to = this.approachNodes[ag.def.workstation % this.approachNodes.length];
    ag.path = this.findPath(from, to);
    ag.pathIdx = 0;
    ag.mode = "TRANSIT";
    ag.modeAfterTransit = "WORKING";
    this.announce(ag, "TRANSIT");
  }

  private sendToBriefing(ag: OfficeAgent): void {
    const from = this.nearestNode(ag.body.group.position);
    const to = this.centerNodes[Math.floor(Math.random() * this.centerNodes.length)];
    ag.path = this.findPath(from, to);
    ag.pathIdx = 0;
    ag.mode = "TRANSIT";
    ag.modeAfterTransit = "BRIEFING";
    ag.briefTimer = randRange(6, 10);
    this.announce(ag, "TRANSIT");
  }

  private sendToPatrol(ag: OfficeAgent): void {
    this.patrolIdx = (this.patrolIdx + 3) % this.corridorNodes.length;
    const from = this.nearestNode(ag.body.group.position);
    ag.path = this.findPath(from, this.corridorNodes[this.patrolIdx]);
    ag.pathIdx = 0;
    ag.mode = "TRANSIT";
    ag.modeAfterTransit = "SCANNING";
  }

  private announce(ag: OfficeAgent, status: AgentStatus): void {
    bus.emit("AGENT_STATUS_CHANGED", { agentId: ag.def.id, status });
  }

  triggerBriefing(): void {
    this.briefing = 9;
    for (const ag of this.agents) {
      if (ag.def.role === "SECURITY") continue;
      this.sendToBriefing(ag);
    }
    const st = useVortex.getState();
    st.pushLog("info", "SWARM", "briefing convened — mission synthesis at the strategy table");
  }

  getAgentPosition(id: string): THREE.Vector3 | null {
    const ag = this.agents.find((a) => a.def.id === id);
    return ag ? ag.body.group.position : null;
  }

  getDeskPosition(id: string): THREE.Vector3 | null {
    const ag = this.agents.find((a) => a.def.id === id);
    if (!ag) return null;
    return this.deskPositions[ag.def.workstation % this.deskPositions.length] ?? null;
  }

  getAgentMode(id: string): AgentMode | null {
    const ag = this.agents.find((a) => a.def.id === id);
    return ag ? ag.mode : null;
  }

  /* ---------------- frame update ---------------- */

  /** keeps the swarm alive while the floor is off-screen */
  updateSimOnly(dt: number): void {
    this.update(dt, 0);
  }

  update(dt: number, time: number): void {
    const st = useVortex.getState();
    if (st.agentDefs.length !== this.agents.length || st.agentDefs.some((d, i) => this.agents[i]?.def.id !== d.id)) {
      this.buildRoster(st.agentDefs);
    }
    if (this.floorMat) this.floorMat.uniforms.uTime.value = time;
    if (this.localMat) this.localMat.uniforms.uTime.value = time;
    this.tableHolo.rotation.y += dt * 0.5;
    this.tableHolo.rotation.x = Math.sin(time * 0.4) * 0.2;
    this.tableGlow.opacity = 0.3 + (this.briefing > 0 ? 0.45 : 0) + Math.sin(time * 2) * 0.05;
    this.briefing = Math.max(0, this.briefing - dt);
    this.warnPulse = Math.max(0, this.warnPulse - dt * 0.5);

    /* scheduler */
    this.schedAcc += dt;
    if (this.schedAcc > 1.6) {
      this.schedAcc = 0;
      const candidates = this.agents.filter((a) => a.mode === "WORKING");
      if (candidates.length > 0 && this.briefing <= 0) {
        const ag = pick(candidates);
        const roll = Math.random();
        if (ag.def.role === "SECURITY") {
          this.sendToPatrol(ag);
        } else if (roll < ag.def.personality.sociability * 0.14) {
          this.sendToBriefing(ag);
        } else if (ag.def.role === "RESEARCHER" && roll < 0.3) {
          // rapid information scan — dash to another desk approach node
          const from = this.nearestNode(ag.body.group.position);
          const to = this.approachNodes[Math.floor(Math.random() * this.approachNodes.length)];
          ag.path = this.findPath(from, to);
          ag.pathIdx = 0;
          ag.mode = "TRANSIT";
          ag.modeAfterTransit = "WORKING";
        }
      }
      const scanning = this.agents.filter((a) => a.mode === "SCANNING");
      for (const ag of scanning) {
        if (ag.path.length === 0 && Math.random() < 0.5) this.sendToPatrol(ag);
        if (Math.random() < 0.12) this.sendToDesk(ag);
      }
    }

    /* agents */
    for (const ag of this.agents) {
      const speedBase = 1.9 * ag.def.speed;
      const pos = ag.body.group.position;

      if (ag.mode === "TRANSIT") {
        const target = ag.path[ag.pathIdx];
        if (!target) {
          ag.mode = ag.modeAfterTransit;
          this.announce(ag, ag.mode as AgentStatus);
          continue;
        }
        const toT = target.clone().sub(pos);
        toT.y = 0;
        const dist = toT.length();
        const desired = Math.min(speedBase, dist * 2.4 + 0.15);
        if (dist > 0.001) toT.normalize();
        const desiredVel = toT.multiplyScalar(desired);
        const lam = desired > speedBase * 0.7 ? 5 : 8;
        ag.velocity.x = damp(ag.velocity.x, desiredVel.x, lam, dt);
        ag.velocity.z = damp(ag.velocity.z, desiredVel.z, lam, dt);

        // separation from other agents
        for (const other of this.agents) {
          if (other === ag) continue;
          const dx = pos.x - other.body.group.position.x;
          const dz = pos.z - other.body.group.position.z;
          const d2 = dx * dx + dz * dz;
          if (d2 < 0.81 && d2 > 0.0001) {
            const d = Math.sqrt(d2);
            const push = ((0.9 - d) / d) * 1.6;
            ag.velocity.x += dx * push * dt * 8;
            ag.velocity.z += dz * push * dt * 8;
          }
        }

        pos.addScaledVector(ag.velocity, dt);
        if (ag.velocity.lengthSq() > 0.01) {
          const targetYaw = Math.atan2(ag.velocity.x, ag.velocity.z);
          let dy = targetYaw - ag.yaw;
          while (dy > Math.PI) dy -= TAU;
          while (dy < -Math.PI) dy += TAU;
          ag.yaw += dy * Math.min(1, dt * 9);
        }
        ag.moveAmount = clamp(ag.velocity.length() / speedBase, 0, 1);
        if (dist < 0.14) {
          ag.pathIdx++;
          if (ag.pathIdx >= ag.path.length) {
            ag.mode = ag.modeAfterTransit;
            ag.velocity.set(0, 0, 0);
            this.announce(ag, ag.mode as AgentStatus);
            if (ag.mode === "WORKING") {
              ag.task = pick(TASK_POOLS[ag.def.role]);
              bus.emit("AGENT_TASK_ASSIGNED", { agentId: ag.def.id, task: ag.task });
            }
          }
        }
      } else {
        ag.moveAmount = damp(ag.moveAmount, 0, 8, dt);

        if (ag.mode === "WORKING") {
          // face desk
          const desk = this.deskPositions[ag.def.workstation % this.deskPositions.length];
          if (desk) {
            const ty = Math.atan2(desk.x - pos.x, desk.z - pos.z);
            let dy = ty - ag.yaw;
            while (dy > Math.PI) dy -= TAU;
            while (dy < -Math.PI) dy += TAU;
            ag.yaw += dy * Math.min(1, dt * 5);
          }
          ag.progress += dt * (3.2 + ag.def.personality.drive * 4.5);
          if (ag.progress >= 100) {
            ag.progress = 0;
            ag.task = pick(TASK_POOLS[ag.def.role]);
            bus.emit("AGENT_TASK_ASSIGNED", { agentId: ag.def.id, task: ag.task });
            ag.dwell += 1;
            if (this.briefing <= 0 && Math.random() < ag.def.personality.sociability * 0.2) {
              this.sendToBriefing(ag);
            }
          }
        } else if (ag.mode === "BRIEFING") {
          const ty = Math.atan2(-pos.x, -pos.z);
          let dy = ty - ag.yaw;
          while (dy > Math.PI) dy -= TAU;
          while (dy < -Math.PI) dy += TAU;
          ag.yaw += dy * Math.min(1, dt * 4);
          ag.briefTimer -= dt;
          if (ag.briefTimer <= 0 && this.briefing <= 0) this.sendToDesk(ag);
        } else if (ag.mode === "SCANNING") {
          ag.scanAng += dt * (1.4 + this.warnPulse * 3);
          ag.yaw = Math.atan2(Math.sin(ag.scanAng), Math.cos(ag.scanAng)) * 0 + ag.scanAng * 0 + this.patrolYaw(ag);
          if (this.sweep && ag.def.role === "SECURITY") {
            (this.sweep.material as THREE.MeshBasicMaterial).opacity = 0.08 + this.warnPulse * 0.16 + Math.sin(time * 3) * 0.02;
          }
          if (ag.path.length === 0) this.sendToPatrol(ag);
        }
      }

      /* pose animation */
      const b = ag.body;
      b.group.rotation.y = ag.yaw;
      b.phase += dt * (4 + ag.moveAmount * 7);
      const mv = ag.moveAmount;
      const swing = Math.sin(b.phase) * 0.6 * mv;
      b.thighL.rotation.x = swing;
      b.thighR.rotation.x = -swing;
      b.shinL.rotation.x = Math.max(0, -Math.sin(b.phase)) * 0.7 * mv;
      b.shinR.rotation.x = Math.max(0, Math.sin(b.phase)) * 0.7 * mv;

      if (ag.mode === "WORKING") {
        b.armL.rotation.x = damp(b.armL.rotation.x, -1.15 + Math.sin(time * 21 + b.phase) * 0.07, 8, dt);
        b.armR.rotation.x = damp(b.armR.rotation.x, -1.15 + Math.cos(time * 19 + b.phase) * 0.07, 8, dt);
        b.foreL.rotation.x = damp(b.foreL.rotation.x, -0.5, 8, dt);
        b.foreR.rotation.x = damp(b.foreR.rotation.x, -0.5, 8, dt);
      } else if (ag.mode === "BRIEFING") {
        b.armL.rotation.x = damp(b.armL.rotation.x, 0.25, 6, dt);
        b.armR.rotation.x = damp(b.armR.rotation.x, 0.25, 6, dt);
        b.foreL.rotation.x = damp(b.foreL.rotation.x, 0.3, 6, dt);
        b.foreR.rotation.x = damp(b.foreR.rotation.x, 0.3, 6, dt);
        if (ag.def.role === "EXECUTIVE") b.head.rotation.x = Math.sin(time * 2.2) * 0.12;
      } else {
        b.armL.rotation.x = damp(b.armL.rotation.x, Math.sin(b.phase) * 0.35 * mv, 8, dt);
        b.armR.rotation.x = damp(b.armR.rotation.x, -Math.sin(b.phase) * 0.35 * mv, 8, dt);
        b.foreL.rotation.x = damp(b.foreL.rotation.x, -0.12, 8, dt);
        b.foreR.rotation.x = damp(b.foreR.rotation.x, -0.12, 8, dt);
      }
      b.group.position.y = Math.abs(Math.sin(b.phase)) * 0.05 * mv + (ag.mode === "WORKING" ? Math.sin(time * 1.4 + b.phase) * 0.008 : 0);
      b.visorMat.emissiveIntensity = 2.2 + (ag.mode === "SCANNING" ? this.warnPulse * 2.5 + Math.sin(time * 6) * 0.5 : 0);
    }

    /* screens */
    for (let i = 0; i < this.screens.length; i++) {
      const s = this.screens[i];
      const ag = this.agents[i];
      s.acc += dt;
      if (s.acc > 0.16) {
        s.acc = 0;
        const active = ag ? (ag.mode === "WORKING" ? 1 : 0.45) : 0.45;
        this.drawScreen(s, time, active);
        s.tex.needsUpdate = true;
      }
    }

    /* runtime sync → store (throttled) */
    this.syncAcc += dt;
    if (this.syncAcc > 0.35) {
      this.syncAcc = 0;
      const list: AgentRuntime[] = this.agents.map((ag) => ({
        ...ag.def,
        personality: { ...ag.def.personality },
        status: ag.mode as AgentStatus,
        task: ag.task,
        progress: Math.floor(ag.progress),
        load: Math.floor(clamp(25 + ag.progress * 0.5 + ag.def.personality.drive * 30 + (ag.mode === "TRANSIT" ? 12 : 0), 5, 99)),
        mood: ag.mode === "SCANNING" ? "VIGILANT" : ag.progress > 75 ? "INTENSE" : ag.mode === "BRIEFING" ? "ALIGNED" : ag.def.personality.focus > 0.75 ? "FOCUSED" : "NOMINAL",
      }));
      st.setRosterRuntime(list);
    }
  }

  private patrolYaw(ag: OfficeAgent): number {
    const target = ag.path[ag.pathIdx];
    if (!target) return ag.yaw;
    return Math.atan2(target.x - ag.body.group.position.x, target.z - ag.body.group.position.z);
  }

  private drawScreen(s: { ctx: CanvasRenderingContext2D; role: AgentRole; seed: number }, time: number, active: number): void {
    const { ctx } = s;
    const W = 256;
    const H = 150;
    ctx.fillStyle = "rgba(4, 8, 12, 0.94)";
    ctx.fillRect(0, 0, W, H);
    const t = time + s.seed;
    ctx.globalAlpha = 0.25 + active * 0.75;
    switch (s.role) {
      case "CODER": {
        ctx.font = "8px monospace";
        for (let i = 0; i < 14; i++) {
          const y = 14 + i * 10;
          const w = 40 + ((Math.sin(t * 3 + i * 7.3) + 1) / 2) * 160;
          ctx.fillStyle = i % 5 === 0 ? "#d4af37" : "#00f0ff";
          ctx.globalAlpha = (0.2 + active * 0.7) * (0.4 + 0.6 * Math.abs(Math.sin(i * 3.1 + t)));
          ctx.fillRect(10 + (i % 3) * 8, y - 6, w, 4);
        }
        break;
      }
      case "ANALYST": {
        ctx.strokeStyle = "#7ad7ff";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 6) {
          const y = H / 2 + Math.sin(x * 0.05 + t * 2) * 26 + Math.sin(x * 0.013 + t) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.fillStyle = "#00ff66";
        for (let i = 0; i < 9; i++) {
          const h = 8 + ((Math.sin(t * 1.7 + i * 2.4) + 1) / 2) * 40;
          ctx.fillRect(16 + i * 26, H - 16 - h, 12, h);
        }
        break;
      }
      case "SECURITY": {
        ctx.strokeStyle = "#ff3333";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, 52, 0, TAU);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, 30, 0, TAU);
        ctx.stroke();
        const a = t * 2.4;
        ctx.fillStyle = "#ff3333";
        ctx.beginPath();
        ctx.moveTo(W / 2, H / 2);
        ctx.arc(W / 2, H / 2, 52, a, a + 0.7);
        ctx.closePath();
        ctx.globalAlpha = 0.3 * active;
        ctx.fill();
        ctx.globalAlpha = 0.9;
        ctx.fillRect(W / 2 + Math.cos(a) * 40 - 2, H / 2 + Math.sin(a) * 40 - 2, 4, 4);
        break;
      }
      case "RESEARCHER": {
        ctx.font = "8px monospace";
        ctx.fillStyle = "#00f0ff";
        for (let c = 0; c < 3; c++) {
          for (let i = 0; i < 12; i++) {
            const w2 = 20 + ((Math.sin(t * 5 + i * 4.7 + c * 9) + 1) / 2) * 46;
            ctx.globalAlpha = 0.25 + active * 0.6;
            ctx.fillRect(12 + c * 82, 14 + i * 11, w2, 4);
          }
        }
        break;
      }
      case "CREATIVE": {
        ctx.strokeStyle = "#ff7ad9";
        ctx.lineWidth = 1.3;
        const cx = W / 2;
        const cy = H / 2;
        const r = 34;
        for (let i = 0; i < 8; i++) {
          const a1 = t + (i / 8) * TAU;
          const a2 = t + ((i + 3) / 8) * TAU;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a1) * r, cy + Math.sin(a1) * r * 0.7);
          ctx.lineTo(cx + Math.cos(a2) * r, cy + Math.sin(a2) * r * 0.7);
          ctx.stroke();
        }
        break;
      }
      case "AUTOMATION": {
        ctx.strokeStyle = "#ffb700";
        ctx.fillStyle = "#ffb700";
        for (let i = 0; i < 5; i++) {
          const x = 26 + i * 50;
          ctx.strokeRect(x, 60, 26, 26);
          if (i < 4) {
            ctx.beginPath();
            ctx.moveTo(x + 26, 73);
            ctx.lineTo(x + 50, 73);
            ctx.stroke();
          }
          const px = x + ((t * 40 + i * 20) % 24);
          ctx.globalAlpha = 0.9 * active;
          ctx.fillRect(px + 1, 71, 5, 5);
          ctx.globalAlpha = 0.25 + active * 0.7;
        }
        break;
      }
      case "STRATEGIST": {
        ctx.strokeStyle = "#d4af37";
        ctx.fillStyle = "#d4af37";
        const nodes = [
          [W / 2, 30], [70, 80], [W / 2, 95], [W - 70, 80], [100, 128], [W - 100, 128],
        ] as const;
        for (let i = 1; i < nodes.length; i++) {
          ctx.beginPath();
          ctx.moveTo(nodes[0][0], nodes[0][1]);
          ctx.lineTo(nodes[i][0], nodes[i][1]);
          ctx.globalAlpha = 0.3;
          ctx.stroke();
        }
        for (let i = 0; i < nodes.length; i++) {
          ctx.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * 2 + i));
          ctx.fillRect(nodes[i][0] - 3, nodes[i][1] - 3, 6, 6);
        }
        break;
      }
      case "EXECUTIVE": {
        ctx.font = "bold 17px monospace";
        ctx.fillStyle = "#e0e6ed";
        ctx.globalAlpha = 0.9;
        ctx.fillText(`${Math.floor(87 + Math.sin(t) * 6)}%`, 20, 44);
        ctx.font = "8px monospace";
        ctx.fillStyle = "#d4af37";
        for (let i = 0; i < 4; i++) {
          const w3 = 60 + ((Math.sin(t * 1.2 + i * 2) + 1) / 2) * 120;
          ctx.fillRect(20, 66 + i * 20, w3, 8);
        }
        break;
      }
    }
    ctx.globalAlpha = 1;
    // scanline
    ctx.fillStyle = "rgba(0, 240, 255, 0.05)";
    ctx.fillRect(0, (t * 60) % H, W, 2);
  }
}
