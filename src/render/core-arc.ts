import * as THREE from "three";
import type { AudioLevels, CoreState } from "../types";
import { GLYPHS } from "../data/defaults";
import { TAU, clamp, damp, lerp } from "../utils/math";

/* ============================================================
   THE MONUMENTAL MECHANICAL ARC
   Obsidian nano-metal frame · neon-cyan plasma conduits · gyro rings
   magnetic containment beams · iris shutters · data conduits ·
   holographic glyph columns · mirror obsidian platform with
   liquid-light ripples. NOT a planet. NOT a flat ring.
   ============================================================ */

interface StateParams {
  spin: number;
  plasma: number;
  beam: number;
  iris: number;
  flicker: number;
}

const STATE_PARAMS: Record<CoreState, StateParams> = {
  IDLE: { spin: 0.16, plasma: 1.0, beam: 0.22, iris: 0.08, flicker: 0.1 },
  LISTENING: { spin: 0.34, plasma: 1.5, beam: 0.5, iris: 0.28, flicker: 0.2 },
  THINKING: { spin: 0.95, plasma: 2.5, beam: 0.85, iris: 1.0, flicker: 0.55 },
  TOOL_USE: { spin: 1.7, plasma: 2.9, beam: 1.0, iris: 0.82, flicker: 0.7 },
  SPEAKING: { spin: 0.72, plasma: 2.3, beam: 0.9, iris: 0.6, flicker: 0.45 },
  ERROR: { spin: 2.3, plasma: 3.4, beam: 1.0, iris: 1.0, flicker: 1.0 },
  SUCCESS: { spin: 0.5, plasma: 2.7, beam: 1.0, iris: 0.5, flicker: 0.28 },
};

const CYAN = new THREE.Color("#00f0ff");
const GOLD = new THREE.Color("#d4af37");
const RED = new THREE.Color("#ff3333");
const GREEN = new THREE.Color("#00ff66");

export class CoreArc {
  readonly group = new THREE.Group();
  readonly platform = new THREE.Group();

  private orbCenter = new THREE.Vector3(0, 2.6, 0);
  private arc = new THREE.Group();
  private rings: THREE.Mesh[] = [];
  private irisBlades: THREE.Mesh[] = [];
  private sidePanels: Array<{ mesh: THREE.Mesh; base: THREE.Vector3; tangent: THREE.Vector3 }> = [];
  private servoLights: THREE.InstancedMesh | null = null;
  private plasmaMat: THREE.MeshStandardMaterial;
  private plasmaGlowMat: THREE.MeshBasicMaterial;
  private goldConduitMat: THREE.MeshStandardMaterial;
  private beamMats: THREE.MeshBasicMaterial[] = [];
  private orbMat: THREE.ShaderMaterial;
  private orbLight: THREE.PointLight;
  private rippleMat: THREE.ShaderMaterial;
  private flashRing: THREE.Mesh;
  private flashMat: THREE.MeshBasicMaterial;
  private flashT = -1;
  private glyphCols: Array<{ tex: THREE.CanvasTexture; ctx: CanvasRenderingContext2D; acc: number }> = [];
  private glyphRing: THREE.Points;
  private conduitPulses: Array<{ mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; offset: number }> = [];
  private movingPanels: Array<{ mesh: THREE.Mesh; base: THREE.Vector3; radial: THREE.Vector3; phase: number }> = [];

  /* Orion Mark V interlock construct */
  private interlock!: THREE.Mesh;
  private tickRing!: THREE.InstancedMesh;
  private tickMat!: THREE.MeshBasicMaterial;

  private spinVel = 0;
  private plasmaCur = 1;
  private beamCur = 0.2;
  private irisCur = 0.1;
  private flickerCur = 0.1;
  private tint = new THREE.Color("#00f0ff");
  private tintTarget = new THREE.Color("#00f0ff");
  private userTint = new THREE.Color("#00f0ff");
  private emissiveScale = 1;
  private successGlow = 0;

  /** Core Control Lab — live plasma tint (conduits, orb, beams, rings) */
  setTint(hex: string): void {
    this.userTint.set(hex);
    this.tintTarget.copy(this.userTint);
  }

  /** Core Control Lab — emissive multiplier (glare-safe tuning) */
  setEmissive(v: number): void {
    this.emissiveScale = v;
  }

  constructor() {
    const metal = new THREE.MeshStandardMaterial({ color: 0x131318, metalness: 0.94, roughness: 0.3 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x0b0b10, metalness: 0.9, roughness: 0.42 });
    this.plasmaMat = new THREE.MeshStandardMaterial({
      color: 0x06282c,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.2,
      metalness: 0.4,
      roughness: 0.35,
    });
    this.plasmaGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.09,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.goldConduitMat = new THREE.MeshStandardMaterial({
      color: 0x2c2208,
      emissive: 0xd4af37,
      emissiveIntensity: 0.9,
      metalness: 0.85,
      roughness: 0.3,
    });

    /* ---------- primary arc frame (240° obsidian torus) ---------- */
    const ARC = (Math.PI * 4) / 3;
    const centerRot = Math.PI / 2 - ARC / 2;

    const mainGeo = new THREE.TorusGeometry(3.2, 0.42, 22, 140, ARC);
    mainGeo.rotateZ(centerRot);
    this.arc.add(new THREE.Mesh(mainGeo, metal));

    const plasmaGeo = new THREE.TorusGeometry(3.2, 0.14, 14, 140, ARC * 0.96);
    plasmaGeo.rotateZ(Math.PI / 2 - (ARC * 0.96) / 2);
    this.arc.add(new THREE.Mesh(plasmaGeo, this.plasmaMat));

    const glowGeo = new THREE.TorusGeometry(3.2, 0.34, 10, 100, ARC);
    glowGeo.rotateZ(centerRot);
    this.arc.add(new THREE.Mesh(glowGeo, this.plasmaGlowMat));

    const goldGeo = new THREE.TorusGeometry(3.2, 0.045, 8, 120, ARC * 0.9);
    goldGeo.rotateZ(Math.PI / 2 - (ARC * 0.9) / 2);
    this.arc.add(new THREE.Mesh(goldGeo, this.goldConduitMat));

    /* ---------- structural ribs + actuator lights (instanced) ---------- */
    const ribCount = 26;
    const ribGeo = new THREE.BoxGeometry(0.64, 0.3, 0.98);
    const ribs = new THREE.InstancedMesh(ribGeo, dark, ribCount);
    const stripGeo = new THREE.BoxGeometry(0.06, 0.16, 0.72);
    const stripMat = new THREE.MeshStandardMaterial({
      color: 0x04252a,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.4,
      metalness: 0.4,
      roughness: 0.4,
    });
    this.servoLights = new THREE.InstancedMesh(stripGeo, stripMat, ribCount);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const zAxis = new THREE.Vector3(0, 0, 1);
    const spread = ARC * 0.94;
    for (let i = 0; i < ribCount; i++) {
      const theta = Math.PI / 2 - spread / 2 + (i / (ribCount - 1)) * spread;
      const dir = new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0);
      q.setFromAxisAngle(zAxis, theta);
      m4.compose(dir.clone().multiplyScalar(3.2), q, new THREE.Vector3(1, 1, 1));
      ribs.setMatrixAt(i, m4);
      m4.compose(dir.clone().multiplyScalar(3.68), q, new THREE.Vector3(1, 1, 1));
      this.servoLights.setMatrixAt(i, m4);
    }
    ribs.instanceMatrix.needsUpdate = true;
    this.servoLights.instanceMatrix.needsUpdate = true;
    this.arc.add(ribs, this.servoLights);

    /* ---------- moving armor panels on the frame ---------- */
    for (let i = 0; i < 4; i++) {
      const theta = Math.PI / 2 + (i - 1.5) * 0.62;
      const dir = new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0);
      const geo = new THREE.BoxGeometry(0.9, 0.1, 0.62);
      const mesh = new THREE.Mesh(geo, metal);
      const base = dir.clone().multiplyScalar(3.2).add(new THREE.Vector3(0, 2.6, 0)).add(dir.clone().multiplyScalar(0.42));
      mesh.position.copy(base);
      mesh.quaternion.setFromAxisAngle(zAxis, theta);
      this.movingPanels.push({ mesh, base, radial: dir, phase: i * 1.7 });
      this.arc.add(mesh);
    }

    /* ---------- side shutter panels (slide along tangent) ---------- */
    for (const s of [-1, 1]) {
      const theta = Math.PI / 2 + s * 1.05;
      const dir = new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0);
      const tangent = new THREE.Vector3(-Math.sin(theta), Math.cos(theta), 0);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.5, 0.14), dark);
      const base = dir.clone().multiplyScalar(3.2).add(new THREE.Vector3(0, 2.6, 0)).add(dir.clone().multiplyScalar(0.5));
      mesh.position.copy(base);
      mesh.quaternion.setFromAxisAngle(zAxis, theta);
      this.sidePanels.push({ mesh, base, tangent });
      this.arc.add(mesh);
    }

    this.group.add(this.arc);

    /* [FORENSIC DEBUG — temporary] undeniable render proof at the core root */
    console.log("[DEBUG CORE] CoreArc instantiated and added to scene at", performance.now());
    const debugMat = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
      toneMapped: false,
      depthTest: false,
    });
    const debugCube = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 2.4), debugMat);
    debugCube.position.copy(this.orbCenter);
    debugCube.renderOrder = 999;
    debugCube.name = "FORENSIC_DEBUG_CUBE";
    this.group.add(debugCube);

    /* ---------- gyro rings around the orb ---------- */
    const ringDefs: Array<[number, number, THREE.Material]> = [
      [1.02, 0.035, new THREE.MeshStandardMaterial({ color: 0x241d08, emissive: 0xd4af37, emissiveIntensity: 1.1, metalness: 0.9, roughness: 0.3 })],
      [1.38, 0.022, new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })],
      [1.72, 0.05, metal.clone()],
    ];
    for (const [r, tube, mat] of ringDefs) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 10, 90), mat);
      ring.position.copy(this.orbCenter);
      this.rings.push(ring);
      this.group.add(ring);
    }

    /* ---------- Orion interlock: counter-tilted gold ring ---------- */
    this.interlock = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.014, 8, 110),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    );
    this.interlock.position.copy(this.orbCenter);
    this.interlock.rotation.x = Math.PI / 2.6;
    this.group.add(this.interlock);

    /* ---------- 3D targeting tick ring — 128 radial razor ticks ---------- */
    const TICKS = 128;
    this.tickMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.tickRing = new THREE.InstancedMesh(new THREE.BoxGeometry(0.013, 0.11, 0.013), this.tickMat, TICKS);
    const tm = new THREE.Matrix4();
    const qZ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    for (let i = 0; i < TICKS; i++) {
      const a = (i / TICKS) * TAU;
      const major = i % 8 === 0;
      const pos = new THREE.Vector3(Math.cos(a) * 1.56, this.orbCenter.y, Math.sin(a) * 1.56);
      const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a).multiply(qZ.clone());
      tm.compose(pos, rot, new THREE.Vector3(1, major ? 2.2 : 1, 1));
      this.tickRing.setMatrixAt(i, tm);
    }
    this.tickRing.instanceMatrix.needsUpdate = true;
    this.group.add(this.tickRing);

    /* ---------- iris shutter blades around the orb ---------- */
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.24), dark.clone());
      const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
      blade.position.copy(this.orbCenter).add(dir.clone().multiplyScalar(0.74));
      blade.lookAt(this.orbCenter);
      blade.userData.dir = dir;
      this.irisBlades.push(blade);
      this.group.add(blade);
    }

    /* ---------- plasma orb (fresnel shader) ---------- */
    this.orbMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#00f0ff") },
        uIntensity: { value: 1 },
        uAudio: { value: 0 },
      },
      vertexShader: `
        varying vec3 vN; varying vec3 vV;
        void main(){
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform float uTime; uniform vec3 uColor; uniform float uIntensity; uniform float uAudio;
        varying vec3 vN; varying vec3 vV;
        void main(){
          float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
          float core = 0.72 + 0.28 * sin(uTime * 3.1) * sin(uTime * 1.7 + 1.0);
          vec3 col = uColor * (fr * 2.6 + core * 0.9) * uIntensity * (1.0 + uAudio * 1.2);
          col = col / (1.0 + 0.24 * col); /* filmic knee — no white-out feed to bloom */
          gl_FragColor = vec4(col, 1.0);
        }`,
      toneMapped: false,
    });
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.5, 48, 48), this.orbMat);
    orb.position.copy(this.orbCenter);
    this.group.add(orb);
    const inner = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xbfffff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, toneMapped: false, depthWrite: false })
    );
    inner.position.copy(this.orbCenter);
    this.group.add(inner);

    this.orbLight = new THREE.PointLight(0x00f0ff, 30, 16, 1.8);
    this.orbLight.position.copy(this.orbCenter);
    this.group.add(this.orbLight);

    /* ---------- containment beams: arc feet → orb ---------- */
    for (const s of [-1, 1]) {
      const foot = new THREE.Vector3(s * 2.77, 1.0, 0);
      const dirv = this.orbCenter.clone().sub(foot);
      const len = dirv.length();
      const mat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.09, len, 8, 1, true), mat);
      beam.position.copy(foot).add(dirv.clone().multiplyScalar(0.5));
      beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirv.normalize());
      this.beamMats.push(mat);
      this.group.add(beam);
    }

    /* ---------- legs / feet ---------- */
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.36, 1.0, 0.5), dark);
      leg.position.set(s * 2.77, 0.5, 0);
      const footm = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.12, 0.84), metal);
      footm.position.set(s * 2.77, 0.06, 0);
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.05, 0.54),
        new THREE.MeshStandardMaterial({ color: 0x2c2208, emissive: 0xd4af37, emissiveIntensity: 1.0, metalness: 0.8, roughness: 0.35 })
      );
      strip.position.set(s * 2.77, 0.98, 0);
      this.group.add(leg, footm, strip);
    }

    /* ---------- data conduits with traveling pulses ---------- */
    const conduitAngles = [0.6, Math.PI / 2, Math.PI - 0.6];
    for (const a of conduitAngles) {
      const start = new THREE.Vector3(Math.cos(a) * 5.0, 0.08, Math.sin(a) * 2.2);
      const end = new THREE.Vector3(Math.cos(a) * 3.3, 2.6 + Math.sin(a) * 1.9, 0);
      const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 1.1, 0));
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const pts = curve.getPoints(40);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(
        lineGeo,
        new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      this.group.add(line);
      for (const off of [0, 0.5]) {
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(0.045, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x9ff8ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
        );
        this.conduitPulses.push({ mesh: pulse, curve, offset: off });
        this.group.add(pulse);
      }
    }

    /* ---------- holographic glyph columns ---------- */
    for (const s of [-1, 1]) {
      const canvas = document.createElement("canvas");
      canvas.width = 96;
      canvas.height = 384;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 96, 384);
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 4.6), mat);
      plane.position.set(s * 4.7, 2.4, -0.6);
      plane.rotation.y = -s * 0.35;
      this.group.add(plane);
      this.glyphCols.push({ tex, ctx, acc: Math.random() });
    }

    /* ---------- orbiting glyph motes ---------- */
    const moteCount = 700;
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      const a = Math.random() * TAU;
      const r = 1.9 + Math.random() * 0.55;
      motePos[i * 3] = Math.cos(a) * r;
      motePos[i * 3 + 1] = (Math.random() - 0.5) * 0.7;
      motePos[i * 3 + 2] = Math.sin(a) * r;
    }
    const moteGeo = new THREE.BufferGeometry();
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
    this.glyphRing = new THREE.Points(
      moteGeo,
      new THREE.PointsMaterial({
        color: 0x7df4ff,
        size: 0.045,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
        toneMapped: false,
      })
    );
    this.glyphRing.position.copy(this.orbCenter);
    this.glyphRing.frustumCulled = false;
    this.group.add(this.glyphRing);

    /* ---------- flash ring (success / error shockwave) ---------- */
    this.flashMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    this.flashRing = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 8, 64), this.flashMat);
    this.flashRing.position.copy(this.orbCenter);
    this.flashRing.rotation.x = Math.PI / 2;
    this.group.add(this.flashRing);

    /* ---------- obsidian platform + liquid light ripples ---------- */
    const plat = new THREE.Mesh(
      new THREE.CylinderGeometry(5.2, 5.5, 0.3, 72),
      new THREE.MeshStandardMaterial({ color: 0x0c0c11, metalness: 0.96, roughness: 0.16 })
    );
    plat.position.y = -0.15;
    this.platform.add(plat);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(5.32, 0.035, 8, 120),
      new THREE.MeshStandardMaterial({ color: 0x2c2208, emissive: 0xd4af37, emissiveIntensity: 1.2, metalness: 0.85, roughness: 0.3 })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.02;
    this.platform.add(rim);

    this.rippleMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPulse: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform float uPulse; varying vec2 vUv;
        void main(){
          vec2 p = vUv - 0.5;
          float d = length(p) * 2.0;
          float ripple = sin(d * 22.0 - uTime * 2.6);
          float ring = smoothstep(0.9, 1.0, ripple) * (1.0 - smoothstep(0.0, 1.0, d));
          float wave = smoothstep(0.05, 0.0, abs(d - fract(uTime * 0.16) * 1.15)) * 0.5;
          float grid = smoothstep(0.965, 1.0, max(
            abs(sin(atan(p.y, p.x) * 36.0)),
            smoothstep(0.012, 0.0, abs(fract(d * 9.0) - 0.5) - 0.488)
          )) * 0.22;
          vec3 col = vec3(0.0, 0.94, 1.0) * (ring * 0.22 + wave + grid) * (0.75 + uPulse);
          col += vec3(1.0, 0.85, 0.4) * smoothstep(0.02, 0.0, abs(d - 0.965)) * 0.5;
          float alpha = clamp(ring * 0.25 + wave + grid, 0.0, 1.0) * smoothstep(1.0, 0.92, d);
          gl_FragColor = vec4(col, alpha);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    const ripple = new THREE.Mesh(new THREE.CircleGeometry(5.2, 72), this.rippleMat);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.y = 0.03;
    this.platform.add(ripple);

    this.group.add(this.platform);
  }

  /** hides the monumental frame (keeps orb, rings, platform) */
  setArcVisible(v: boolean): void {
    this.arc.visible = v;
  }

  setState(state: CoreState): void {
    if (state === "SUCCESS") {
      this.tintTarget.copy(GREEN);
      this.successGlow = 1;
      this.flash("#00ff66");
    } else if (state === "ERROR") {
      this.tintTarget.copy(RED);
      this.flash("#ff3333");
    } else {
      this.tintTarget.copy(this.userTint);
    }
  }

  flash(hex: string): void {
    this.flashT = 0;
    this.flashMat.color.set(hex);
  }

  pulse(): void {
    this.successGlow = Math.max(this.successGlow, 0.6);
  }

  getSparkOrigin(): THREE.Vector3 {
    return this.orbCenter.clone();
  }

  update(dt: number, time: number, levels: AudioLevels, state: CoreState): void {
    const p = STATE_PARAMS[state];
    const k = Math.min(dt * 3.2, 1);
    this.spinVel = damp(this.spinVel, p.spin, 3, dt);
    this.plasmaCur = damp(this.plasmaCur, p.plasma + levels.bass * 0.9, 4, dt);
    this.beamCur = damp(this.beamCur, p.beam, 3, dt);
    this.irisCur = damp(this.irisCur, p.iris, 3, dt);
    this.flickerCur = damp(this.flickerCur, p.flicker, 3, dt);
    this.successGlow = Math.max(0, this.successGlow - dt * 0.9);
    this.tint.lerp(this.tintTarget, k);

    const flick = 1 + this.flickerCur * 0.45 * Math.sin(time * 31 + Math.sin(time * 7.3) * 4);

    /* plasma conduits */
    this.plasmaMat.emissiveIntensity = this.plasmaCur * flick * this.emissiveScale;
    this.plasmaMat.emissive.copy(this.tint);
    this.plasmaGlowMat.opacity = 0.05 + 0.06 * this.plasmaCur * 0.4 * flick;
    this.plasmaGlowMat.color.copy(this.tint);
    this.goldConduitMat.emissiveIntensity = 0.7 + levels.mid * 1.6;

    if (this.servoLights) {
      const mat = this.servoLights.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.8 + this.plasmaCur * 0.5 * flick + levels.high * 1.2;
    }

    /* rings gyro */
    const spin = this.spinVel;
    this.rings[0].rotation.x += dt * spin * 1.4;
    this.rings[0].rotation.y += dt * spin * 0.9;
    this.rings[1].rotation.y -= dt * spin * 1.9;
    this.rings[1].rotation.z += dt * spin * 0.6;
    this.rings[2].rotation.z += dt * spin * 1.1;
    this.rings[2].rotation.x -= dt * spin * 0.4;
    this.rings[1].scale.setScalar(1 + levels.bass * 0.08);

    /* Orion interlock — counter-rotating gold construct, breathes with the core */
    this.interlock.rotation.y -= dt * spin * 2.3;
    this.interlock.rotation.z = Math.sin(time * 0.9) * 0.16 * (0.3 + this.irisCur);
    const interlockMat = this.interlock.material as THREE.MeshBasicMaterial;
    interlockMat.opacity = 0.45 + this.plasmaCur * 0.14 + levels.mid * 0.3;
    this.interlock.scale.setScalar(1 + levels.bass * 0.05 + this.successGlow * 0.12);

    /* targeting tick ring — razor ticks orbit + shimmer on the high band */
    this.tickRing.rotation.y += dt * (0.25 + spin * 1.1);
    this.tickMat.opacity = 0.5 + levels.high * 0.45 + this.irisCur * 0.2 + this.successGlow * 0.3;
    this.tickMat.color.copy(this.tint).lerp(GOLD, this.successGlow * 0.8);

    /* iris shutters */
    for (const blade of this.irisBlades) {
      const dir = blade.userData.dir as THREE.Vector3;
      const r = 0.74 + this.irisCur * 0.42;
      blade.position.copy(this.orbCenter).add(dir.clone().multiplyScalar(r));
      blade.position.y += Math.sin(time * 2.2 + r * 9) * 0.02 * this.irisCur;
      blade.lookAt(this.orbCenter);
      blade.rotateY(this.irisCur * 0.6);
    }

    /* side panels slide */
    for (const sp of this.sidePanels) {
      const off = Math.sin(time * 1.4 * (0.4 + spin)) * 0.3 * this.irisCur;
      sp.mesh.position.copy(sp.base).add(sp.tangent.clone().multiplyScalar(off));
    }
    for (const mp of this.movingPanels) {
      const off = Math.sin(time * 1.8 + mp.phase) * 0.1 * (0.25 + this.irisCur);
      mp.mesh.position.copy(mp.base).add(mp.radial.clone().multiplyScalar(off));
    }

    /* orb + beams + light */
    this.orbMat.uniforms.uTime.value = time;
    this.orbMat.uniforms.uIntensity.value = 0.7 + this.plasmaCur * 0.35 + this.successGlow * 1.4;
    this.orbMat.uniforms.uAudio.value = levels.level;
    (this.orbMat.uniforms.uColor.value as THREE.Color).copy(this.tint).lerp(GOLD, this.successGlow * 0.7);
    for (const bm of this.beamMats) {
      bm.opacity = this.beamCur * (0.24 + 0.2 * Math.sin(time * 9) * this.flickerCur + levels.bass * 0.25);
      bm.color.copy(this.tint);
    }
    this.orbLight.intensity = 10 + this.plasmaCur * 8 + levels.bass * 10 + this.successGlow * 20;
    this.orbLight.color.copy(this.tint).lerp(GOLD, this.successGlow * 0.6);

    /* glyph columns scroll */
    for (const gc of this.glyphCols) {
      gc.acc += dt;
      if (gc.acc > 0.11) {
        gc.acc = 0;
        const { ctx } = gc;
        ctx.drawImage(ctx.canvas, 0, -24);
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.fillRect(0, 360, 96, 24);
        ctx.font = "17px monospace";
        let row = "";
        for (let i = 0; i < 5; i++) row += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = Math.random() < 0.22 ? "#ffb700" : "#00f0ff";
        ctx.fillText(row, 4, 378);
        gc.tex.needsUpdate = true;
      }
    }

    /* glyph motes orbit */
    this.glyphRing.rotation.y += dt * (0.25 + spin * 0.8);
    (this.glyphRing.material as THREE.PointsMaterial).opacity = 0.4 + levels.high * 0.5 + this.irisCur * 0.25;

    /* conduit pulses */
    for (const cp of this.conduitPulses) {
      const t = (time * (0.22 + spin * 0.25) + cp.offset) % 1;
      cp.curve.getPoint(t, cp.mesh.position);
    }

    /* ripple platform */
    this.rippleMat.uniforms.uTime.value = time;
    this.rippleMat.uniforms.uPulse.value = levels.bass * 1.4 + this.successGlow;

    /* flash shockwave */
    if (this.flashT >= 0) {
      this.flashT += dt * 1.6;
      const t = clamp(this.flashT, 0, 1);
      this.flashRing.scale.setScalar(1 + t * 7);
      this.flashMat.opacity = (1 - t) * 0.85;
      if (t >= 1) this.flashT = -1;
    }

    /* error stutter */
    if (state === "ERROR") {
      this.arc.rotation.z = Math.sin(time * 42) * 0.012;
    } else {
      this.arc.rotation.z = damp(this.arc.rotation.z, 0, 6, dt);
    }
  }
}

export { CYAN, GOLD, GREEN, RED };
export const lerpColor = (a: THREE.Color, b: THREE.Color, t: number) => a.clone().lerp(b, clamp(t, 0, 1));
export { lerp };
