import * as THREE from "three";
import { LAYER_COUNTS, LAYER_NAMES } from "../data/defaults";
import { TAU, clamp, mulberry32 } from "../utils/math";

/* ============================================================
   REAL-TIME AI NEURAL CORTEX — 10 monumental layers
   INPUT → TOKENIZATION → EMBEDDING → CONTEXT → ATTENTION →
   REASONING → MEMORY → TOOL ROUTING → ORCHESTRATION → OUTPUT
   Tokens propagate, attention weights illuminate, telemetry lives.
   ============================================================ */

interface Packet {
  edge: number;
  t: number;
  speed: number;
}

const PACKET_CAP = 1400;

export class NetworkViz {
  readonly group = new THREE.Group();
  private nodePos: THREE.Vector3[] = [];
  private nodeLayer: number[] = [];
  private edges: Array<[number, number]> = [];
  private outEdges: Map<number, number[]> = new Map();
  private nodes: THREE.InstancedMesh;
  private activation: Float32Array;
  private baseColors: THREE.Color[] = [];
  private edgeLines: THREE.LineSegments;
  private edgeColors: Float32Array;
  private packets: Packet[] = [];
  private packetPoints: THREE.Points;
  private packetPos: Float32Array;
  private packetCol: Float32Array;
  private arrivals = 0;
  private arrivalWindow: number[] = [];
  private tmpColor = new THREE.Color();
  private gold = new THREE.Color("#ffb700");
  private cyan = new THREE.Color("#00f0ff");

  constructor() {
    const rng = mulberry32(4242);

    /* ---------- node layout along the corridor ---------- */
    for (let l = 0; l < LAYER_COUNTS.length; l++) {
      const count = LAYER_COUNTS[l];
      const x = -10 + (l / (LAYER_COUNTS.length - 1)) * 20;
      for (let i = 0; i < count; i++) {
        const a = i * 2.399963; // golden angle
        const r = 0.42 + 1.75 * Math.sqrt((i + 0.5) / count);
        const y = 1.7 + Math.cos(a) * r * 0.82;
        const z = Math.sin(a) * r + Math.sin(x * 0.22) * 0.8;
        this.nodePos.push(new THREE.Vector3(x, y, z));
        this.nodeLayer.push(l);
      }
    }
    const N = this.nodePos.length;
    this.activation = new Float32Array(N);

    /* ---------- edges to next layer ---------- */
    let offset = 0;
    for (let l = 0; l < LAYER_COUNTS.length - 1; l++) {
      const next = LAYER_COUNTS[l + 1];
      for (let i = 0; i < LAYER_COUNTS[l]; i++) {
        const idx = offset + i;
        const links = 2 + Math.floor(rng() * 2);
        for (let k = 0; k < links; k++) {
          const target = offset + LAYER_COUNTS[l] + Math.floor(rng() * next);
          this.edges.push([idx, target]);
          const list = this.outEdges.get(idx);
          if (list) list.push(this.edges.length - 1);
          else this.outEdges.set(idx, [this.edges.length - 1]);
        }
      }
      offset += LAYER_COUNTS[l];
    }

    /* ---------- instanced nodes ---------- */
    this.nodes = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.115, 12, 12),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
      N
    );
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < N; i++) {
      m4.setPosition(this.nodePos[i]);
      this.nodes.setMatrixAt(i, m4);
      const t = this.nodeLayer[i] / 9;
      const c = this.cyan.clone().lerp(this.gold, t * 0.85);
      this.baseColors.push(c);
      this.nodes.setColorAt(i, c);
    }
    this.nodes.instanceMatrix.needsUpdate = true;
    this.group.add(this.nodes);

    /* ---------- edge lines with live colors ---------- */
    const ePos = new Float32Array(this.edges.length * 6);
    this.edgeColors = new Float32Array(this.edges.length * 6);
    for (let e = 0; e < this.edges.length; e++) {
      const [a, b] = this.edges[e];
      const pa = this.nodePos[a];
      const pb = this.nodePos[b];
      ePos.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], e * 6);
    }
    const eGeo = new THREE.BufferGeometry();
    eGeo.setAttribute("position", new THREE.BufferAttribute(ePos, 3));
    eGeo.setAttribute("color", new THREE.BufferAttribute(this.edgeColors, 3).setUsage(THREE.DynamicDrawUsage));
    this.edgeLines = new THREE.LineSegments(
      eGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    );
    this.edgeLines.frustumCulled = false;
    this.group.add(this.edgeLines);

    /* ---------- packets ---------- */
    this.packetPos = new Float32Array(PACKET_CAP * 3);
    this.packetCol = new Float32Array(PACKET_CAP * 3);
    this.packetPos.fill(-999);
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(this.packetPos, 3).setUsage(THREE.DynamicDrawUsage));
    pGeo.setAttribute("aColor", new THREE.BufferAttribute(this.packetCol, 3).setUsage(THREE.DynamicDrawUsage));
    this.packetPoints = new THREE.Points(
      pGeo,
      new THREE.ShaderMaterial({
        vertexShader: `
          attribute vec3 aColor; varying vec3 vC;
          void main(){
            vC = aColor;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 5.5 * (120.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          varying vec3 vC;
          void main(){
            vec2 c = gl_PointCoord - 0.5;
            float a = smoothstep(0.5, 0.0, length(c));
            gl_FragColor = vec4(vC * 1.6, a * a);
          }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    this.packetPoints.frustumCulled = false;
    this.group.add(this.packetPoints);

    /* ---------- layer pylons + labels ---------- */
    for (let l = 0; l < LAYER_COUNTS.length; l++) {
      const x = -10 + (l / 9) * 20;
      const pylon = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 5.6, 0.05),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
      );
      pylon.position.set(x, 1.9, -3.1);
      this.group.add(pylon);
      const capM = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.05, 0.16),
        new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.8, toneMapped: false })
      );
      capM.position.set(x, 4.72, -3.1);
      this.group.add(capM);

      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.font = "bold 24px Orbitron, monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "#d4af37";
        ctx.fillText(String(l + 1).padStart(2, "0"), 34, 30);
        ctx.font = "bold 19px Orbitron, monospace";
        ctx.fillStyle = "#e0e6ed";
        ctx.fillText(LAYER_NAMES[l], 156, 30);
        ctx.fillStyle = "rgba(0,240,255,0.7)";
        ctx.fillRect(14, 42, 228, 2);
        const tex = new THREE.CanvasTexture(canvas);
        tex.colorSpace = THREE.SRGBColorSpace;
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false })
        );
        sprite.position.set(x, -0.75, 0);
        sprite.scale.set(3.4, 0.85, 1);
        this.group.add(sprite);
      }
    }
  }

  private spawnPacket(edgeIdx: number): void {
    if (this.packets.length >= PACKET_CAP) return;
    this.packets.push({ edge: edgeIdx, t: 0, speed: 0.55 + Math.random() * 0.7 });
  }

  private density = 1;

  /** Visual Control Lab — network traffic density & behavior */
  setDensity(d: number): void {
    this.density = Math.max(0.1, Math.min(3, d));
  }

  /** inject tokens at the INPUT layer */
  burst(n: number): void {
    const layer0Edges = this.edges.map((e, i) => ({ e, i })).filter(({ e }) => this.nodeLayer[e[0]] === 0);
    for (let i = 0; i < n; i++) {
      if (layer0Edges.length === 0) break;
      const pickE = layer0Edges[Math.floor(Math.random() * layer0Edges.length)];
      this.spawnPacket(pickE.i);
    }
  }

  cascade(): void {
    this.burst(46);
  }

  getStats(): { active: number; throughput: number } {
    const now = performance.now();
    this.arrivalWindow = this.arrivalWindow.filter((t) => now - t < 1500);
    return { active: this.packets.length, throughput: this.arrivalWindow.length / 1.5 };
  }

  update(dt: number, time: number): void {
    /* packets — speed modulated by subtle intelligence pulse */
    const intelligencePulse = 1 + Math.sin(time * 1.7) * 0.15 + Math.cos(time * 3.4) * 0.1;
    const next: Packet[] = [];
    for (const p of this.packets) {
      p.t += dt * p.speed * 1.35 * intelligencePulse;
      if (p.t >= 1) {
        const [a, b] = this.edges[p.edge];
        this.activation[b] = 1;
        this.arrivals++;
        this.arrivalWindow.push(performance.now());
        const out = this.outEdges.get(b);
        if (out && this.nodeLayer[b] < 9) {
          const spawns = Math.random() < Math.min(0.97, 0.85 * this.density) ? 1 + (Math.random() < 0.3 * this.density ? 1 : 0) : 0;
          for (let s = 0; s < spawns; s++) {
            const ne = out[Math.floor(Math.random() * out.length)];
            if (this.packets.length + next.length < PACKET_CAP) {
              next.push({ edge: ne, t: 0, speed: 0.55 + Math.random() * 0.7 });
            }
          }
        }
      } else {
        next.push(p);
      }
    }
    this.packets = next;

    /* write packet buffers */
    for (let i = 0; i < PACKET_CAP; i++) {
      if (i < this.packets.length) {
        const p = this.packets[i];
        const [a, b] = this.edges[p.edge];
        const pa = this.nodePos[a];
        const pb = this.nodePos[b];
        const t = p.t;
        const bump = Math.sin(t * Math.PI) * 0.22 * intelligencePulse;
        this.packetPos[i * 3] = pa.x + (pb.x - pa.x) * t;
        this.packetPos[i * 3 + 1] = pa.y + (pb.y - pa.y) * t + bump;
        this.packetPos[i * 3 + 2] = pa.z + (pb.z - pa.z) * t;
        const layerT = this.nodeLayer[b] / 9;
        this.tmpColor.copy(this.cyan).lerp(this.gold, layerT);
        this.packetCol[i * 3] = this.tmpColor.r;
        this.packetCol[i * 3 + 1] = this.tmpColor.g;
        this.packetCol[i * 3 + 2] = this.tmpColor.b;
      } else {
        this.packetPos[i * 3 + 1] = -999;
      }
    }
    (this.packetPoints.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    (this.packetPoints.geometry.getAttribute("aColor") as THREE.BufferAttribute).needsUpdate = true;

    /* node activation decay + colors */
    const decay = Math.exp(-dt * 1.7);
    for (let i = 0; i < this.activation.length; i++) {
      this.activation[i] *= decay;
      const act = this.activation[i];
      if (act > 0.02) {
        this.tmpColor.copy(this.baseColors[i]).lerp(this.gold, clamp(act, 0, 1));
        this.tmpColor.multiplyScalar(1 + act * 2.2);
        this.nodes.setColorAt(i, this.tmpColor);
      } else if (act <= 0.02 && this.activation[i] !== 0) {
        this.activation[i] = 0;
        this.nodes.setColorAt(i, this.baseColors[i]);
      }
    }
    if (this.nodes.instanceColor) this.nodes.instanceColor.needsUpdate = true;

    /* edge colors follow endpoint activation with micro-pulse shimmer */
    const edgeShimmer = 0.05 + Math.sin(time * 1.3) * 0.015 + Math.cos(time * 2.7) * 0.008;
    for (let e = 0; e < this.edges.length; e++) {
      const [a, b] = this.edges[e];
      const heat = clamp(Math.max(this.activation[a], this.activation[b]), 0, 1);
      const r = this.cyan.r * edgeShimmer + this.gold.r * heat * 0.9;
      const g = this.cyan.g * edgeShimmer + this.gold.g * heat * 0.9;
      const bl = this.cyan.b * edgeShimmer + this.gold.b * heat * 0.9;
      this.edgeColors[e * 6] = r;
      this.edgeColors[e * 6 + 1] = g;
      this.edgeColors[e * 6 + 2] = bl;
      this.edgeColors[e * 6 + 3] = r;
      this.edgeColors[e * 6 + 4] = g;
      this.edgeColors[e * 6 + 5] = bl;
    }
    (this.edgeLines.geometry.getAttribute("color") as THREE.BufferAttribute).needsUpdate = true;
  }
}

export const NET_TAU = TAU;
