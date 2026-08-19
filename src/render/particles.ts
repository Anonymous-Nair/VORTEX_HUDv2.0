import * as THREE from "three";
import type { AudioLevels } from "../types";
import { TAU, clamp, damp, mulberry32 } from "../utils/math";

/* ============================================================
   GPU PARTICLE POPULATIONS
   · AmbientParticles — background dust + intelligence orbiters
     + event spark bursts
   · HumanoidParticles — 65k population morphing from energy cloud
     into a coherent humanoid lattice (SDF-sampled), synchronized
     to live audio envelopes (head/torso/talk).
   ============================================================ */

const DUST = 13000;
const ORBITERS = 5500;
export const AMBIENT_TOTAL = DUST + ORBITERS;
export const HUMANOID_COUNT = 65000;
const SPARK_CAP = 1500;

const AMBIENT_VERT = `
  attribute vec4 aData;   /* orbiters: radius, speed, phase, y */
  attribute float aSeed;
  attribute float aMode;
  uniform float uTime;
  uniform float uTurb;
  uniform float uAudio;
  varying float vSeed;
  varying float vFade;
  void main(){
    vec3 p;
    if (aMode < 0.5) {
      p = position;
      float t = uTime * 0.12 + aSeed * 19.0;
      p += (0.4 + uTurb * 1.4) * vec3(sin(t * 1.3 + p.y * 0.4), cos(t * 0.9 + p.x * 0.3), sin(t * 1.1 + p.z * 0.4));
    } else {
      float ang = aData.z + uTime * aData.y * (1.0 + uAudio * 1.6 + uTurb);
      p = vec3(cos(ang) * aData.x, 2.6 + aData.w + sin(uTime * 0.7 + aSeed * 9.0) * 0.25, sin(ang) * aData.x);
    }
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = (aMode < 0.5 ? 1.3 : 1.7) * (1.0 + aSeed * 0.9) * (150.0 / d) * (1.0 + uAudio * 0.5);
    vFade = smoothstep(55.0, 9.0, d);
    vSeed = aSeed;
    gl_Position = projectionMatrix * mv;
  }
`;

const AMBIENT_FRAG = `
  uniform vec3 uColA; uniform vec3 uColB; uniform float uAudio;
  varying float vSeed; varying float vFade;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    float a = smoothstep(0.5, 0.05, r);
    a *= a;
    vec3 col = mix(uColA, uColB, step(0.9, fract(vSeed * 7.31)));
    gl_FragColor = vec4(col * (0.65 + uAudio * 0.8), a * vFade * 0.75);
  }
`;

export class AmbientParticles {
  readonly group = new THREE.Group();
  private points: THREE.Points;
  private mat: THREE.ShaderMaterial;
  private sparks: THREE.Points;
  private sparkMat: THREE.ShaderMaterial;
  private sparkPos: Float32Array;
  private sparkVel: Float32Array;
  private sparkLife: Float32Array;
  private sparkColor: Float32Array;
  private sparkHead = 0;
  private turb = 0;

  constructor() {
    const rng = mulberry32(1337);
    const total = DUST + ORBITERS;
    const pos = new Float32Array(total * 3);
    const data = new Float32Array(total * 4);
    const seed = new Float32Array(total);
    const mode = new Float32Array(total);

    for (let i = 0; i < DUST; i++) {
      const r = 4 + rng() * 22;
      const a = rng() * TAU;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = (rng() - 0.35) * 14;
      pos[i * 3 + 2] = Math.sin(a) * r;
      seed[i] = rng();
      mode[i] = 0;
    }
    for (let i = 0; i < ORBITERS; i++) {
      const idx = DUST + i;
      data[idx * 4] = 2.2 + rng() * 3.4; // radius
      data[idx * 4 + 1] = (0.1 + rng() * 0.5) * (rng() < 0.5 ? 1 : -1); // speed
      data[idx * 4 + 2] = rng() * TAU; // phase
      data[idx * 4 + 3] = (rng() - 0.5) * 3.4; // y offset around orb plane
      seed[idx] = rng();
      mode[idx] = 1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aData", new THREE.BufferAttribute(data, 4));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    geo.setAttribute("aMode", new THREE.BufferAttribute(mode, 1));

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTurb: { value: 0 },
        uAudio: { value: 0 },
        uColA: { value: new THREE.Color("#1e6f7a") },
        uColB: { value: new THREE.Color("#d4af37") },
      },
      vertexShader: AMBIENT_VERT,
      fragmentShader: AMBIENT_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.group.add(this.points);

    /* ---------- sparks ---------- */
    this.sparkPos = new Float32Array(SPARK_CAP * 3);
    this.sparkVel = new Float32Array(SPARK_CAP * 3);
    this.sparkLife = new Float32Array(SPARK_CAP);
    this.sparkColor = new Float32Array(SPARK_CAP * 3);
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(this.sparkPos, 3).setUsage(THREE.DynamicDrawUsage));
    sparkGeo.setAttribute("aLife", new THREE.BufferAttribute(this.sparkLife, 1).setUsage(THREE.DynamicDrawUsage));
    sparkGeo.setAttribute("aColor", new THREE.BufferAttribute(this.sparkColor, 3).setUsage(THREE.DynamicDrawUsage));
    this.sparkMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aLife; attribute vec3 aColor;
        varying float vLife; varying vec3 vColor;
        void main(){
          vLife = aLife; vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (2.0 + aLife * 4.5) * (140.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vLife; varying vec3 vColor;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(c)) * vLife;
          gl_FragColor = vec4(vColor * (0.7 + vLife), a);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.sparks = new THREE.Points(sparkGeo, this.sparkMat);
    this.sparks.frustumCulled = false;
    this.group.add(this.sparks);
  }

  burstAt(count: number, hex: string, origin?: THREE.Vector3): void {
    const c = new THREE.Color(hex);
    const o = origin ?? new THREE.Vector3(0, 2.6, 0);
    for (let n = 0; n < count; n++) {
      const i = this.sparkHead;
      this.sparkHead = (this.sparkHead + 1) % SPARK_CAP;
      this.sparkPos[i * 3] = o.x + (Math.random() - 0.5) * 0.3;
      this.sparkPos[i * 3 + 1] = o.y + (Math.random() - 0.5) * 0.3;
      this.sparkPos[i * 3 + 2] = o.z + (Math.random() - 0.5) * 0.3;
      const a = Math.random() * TAU;
      const b = (Math.random() - 0.5) * Math.PI;
      const sp = 1.5 + Math.random() * 3.5;
      this.sparkVel[i * 3] = Math.cos(a) * Math.cos(b) * sp;
      this.sparkVel[i * 3 + 1] = Math.sin(b) * sp * 0.9 + 0.8;
      this.sparkVel[i * 3 + 2] = Math.sin(a) * Math.cos(b) * sp;
      this.sparkLife[i] = 1;
      this.sparkColor[i * 3] = c.r;
      this.sparkColor[i * 3 + 1] = c.g;
      this.sparkColor[i * 3 + 2] = c.b;
    }
  }

  /** turbulence kick (network events, warnings) */
  stir(): void {
    this.turb = 1;
  }

  activeSparks(): number {
    let n = 0;
    for (let i = 0; i < SPARK_CAP; i++) if (this.sparkLife[i] > 0) n++;
    return n;
  }

  update(dt: number, time: number, levels: AudioLevels): void {
    this.mat.uniforms.uTime.value = time;
    this.mat.uniforms.uAudio.value = levels.level;
    this.turb = damp(this.turb, 0, 1.6, dt);
    this.mat.uniforms.uTurb.value = this.turb;

    let anyAlive = false;
    for (let i = 0; i < SPARK_CAP; i++) {
      if (this.sparkLife[i] <= 0) continue;
      anyAlive = true;
      this.sparkLife[i] = Math.max(0, this.sparkLife[i] - dt * 0.9);
      this.sparkVel[i * 3 + 1] -= dt * 2.4;
      this.sparkPos[i * 3] += this.sparkVel[i * 3] * dt;
      this.sparkPos[i * 3 + 1] += this.sparkVel[i * 3 + 1] * dt;
      this.sparkPos[i * 3 + 2] += this.sparkVel[i * 3 + 2] * dt;
      if (this.sparkLife[i] <= 0) this.sparkPos[i * 3 + 1] = -999;
    }
    if (anyAlive) {
      (this.sparks.geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
      (this.sparks.geometry.getAttribute("aLife") as THREE.BufferAttribute).needsUpdate = true;
      (this.sparks.geometry.getAttribute("aColor") as THREE.BufferAttribute).needsUpdate = true;
    }
  }
}

/* ============================================================
   HUMANOID LATTICE — procedural SDF-style sampling
   ============================================================ */

interface Part {
  kind: "ellipsoid" | "capsule";
  c?: [number, number, number];
  r?: [number, number, number];
  a?: [number, number, number];
  b?: [number, number, number];
  rad?: number;
  w: number;
  face?: boolean;
}

const PARTS: Part[] = [
  { kind: "ellipsoid", c: [0, 1.62, 0], r: [0.16, 0.19, 0.17], w: 0.17, face: true },
  { kind: "capsule", a: [0, 1.47, 0], b: [0, 1.4, 0], rad: 0.06, w: 0.02 },
  { kind: "ellipsoid", c: [0, 1.1, 0], r: [0.21, 0.3, 0.13], w: 0.26 },
  { kind: "ellipsoid", c: [0, 0.78, 0], r: [0.17, 0.12, 0.11], w: 0.08 },
  { kind: "capsule", a: [0.28, 1.34, 0], b: [0.35, 1.05, 0.03], rad: 0.055, w: 0.055 },
  { kind: "capsule", a: [0.35, 1.05, 0.03], b: [0.3, 0.78, 0.06], rad: 0.045, w: 0.05 },
  { kind: "capsule", a: [-0.28, 1.34, 0], b: [-0.35, 1.05, 0.03], rad: 0.055, w: 0.055 },
  { kind: "capsule", a: [-0.35, 1.05, 0.03], b: [-0.3, 0.78, 0.06], rad: 0.045, w: 0.05 },
  { kind: "capsule", a: [0.1, 0.72, 0], b: [0.115, 0.4, 0.02], rad: 0.07, w: 0.085 },
  { kind: "capsule", a: [0.115, 0.4, 0.02], b: [0.11, 0.08, 0], rad: 0.05, w: 0.075 },
  { kind: "capsule", a: [-0.1, 0.72, 0], b: [-0.115, 0.4, 0.02], rad: 0.07, w: 0.085 },
  { kind: "capsule", a: [-0.115, 0.4, 0.02], b: [-0.11, 0.08, 0], rad: 0.05, w: 0.075 },
];

function sampleHumanoid(count: number, rng: () => number): Float32Array {
  const out = new Float32Array(count * 3);
  const totalW = PARTS.reduce((s, p) => s + p.w, 0);
  for (let i = 0; i < count; i++) {
    let pickW = rng() * totalW;
    let part: Part = PARTS[0];
    for (const p of PARTS) {
      pickW -= p.w;
      if (pickW <= 0) {
        part = p;
        break;
      }
    }
    let x = 0, y = 0, z = 0;
    if (part.kind === "ellipsoid" && part.c && part.r) {
      // random point in unit ball → ellipsoid
      const u = rng() * 2 - 1;
      const phi = rng() * TAU;
      const rr = Math.cbrt(rng());
      const s = Math.sqrt(1 - u * u);
      x = part.c[0] + s * Math.cos(phi) * rr * part.r[0];
      y = part.c[1] + u * rr * part.r[1];
      z = part.c[2] + s * Math.sin(phi) * rr * part.r[2];
      if (part.face && rng() < 0.4) {
        // facial density bias on the front hemisphere
        z = Math.abs(z) * 0.55 + 0.07;
        y = part.c[1] + (rng() - 0.42) * part.r[1] * 1.2;
      }
    } else if (part.kind === "capsule" && part.a && part.b && part.rad) {
      const t = rng();
      const bx = part.a[0] + (part.b[0] - part.a[0]) * t;
      const by = part.a[1] + (part.b[1] - part.a[1]) * t;
      const bz = part.a[2] + (part.b[2] - part.a[2]) * t;
      const a2 = rng() * TAU;
      const rr = Math.sqrt(rng()) * part.rad;
      x = bx + Math.cos(a2) * rr;
      y = by + (rng() - 0.5) * part.rad * 0.6;
      z = bz + Math.sin(a2) * rr;
    }
    out[i * 3] = x * 1.22;
    out[i * 3 + 1] = y * 1.22;
    out[i * 3 + 2] = z * 1.22;
  }
  return out;
}

const HUMAN_VERT = `
  attribute vec3 aTarget;
  attribute float aSeed;
  uniform float uMorph;
  uniform float uTime;
  uniform float uBass;
  uniform float uTalk;
  varying float vGlow;
  varying float vMix;
  float ez(float x){ return x * x * (3.0 - 2.0 * x); }
  void main(){
    float m = clamp(uMorph * 1.35 - aSeed * 0.35, 0.0, 1.0);
    m = ez(m);
    vec3 cloud = position;
    float t = uTime * 0.4 + aSeed * 23.0;
    cloud += 0.55 * vec3(sin(t), cos(t * 0.8), sin(t * 0.6));
    vec3 human = aTarget;
    float bodyPulse = uBass * 0.05 * sin(uTime * 3.0 + aTarget.y * 2.0);
    human.xz *= 1.0 + bodyPulse * smoothstep(0.4, 1.4, aTarget.y);
    float headMask = smoothstep(1.5, 1.62, aTarget.y) * (1.0 - smoothstep(1.95, 2.1, aTarget.y));
    float jaw = step(0.0, aTarget.z) * step(aTarget.y, 1.85);
    human.y += uTalk * 0.045 * headMask * jaw * sin(uTime * 19.0 + aSeed * 40.0);
    human.y += uTalk * uBass * 0.02 * headMask;
    vec3 p = mix(cloud, human, m);
    p += 0.02 * (0.3 + 0.7 * m) * vec3(
      sin(uTime * 2.0 + aSeed * 91.0),
      cos(uTime * 1.7 + aSeed * 57.0),
      sin(uTime * 2.3 + aSeed * 31.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = (1.1 + aSeed * 1.4) * (m * 1.5 + 0.65) * (150.0 / d);
    vGlow = m * (0.5 + 0.5 * sin(uTime * 2.0 + aSeed * 40.0)) + uBass * 0.45;
    vMix = aSeed;
    gl_Position = projectionMatrix * mv;
  }
`;

const HUMAN_FRAG = `
  uniform float uMorph;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.02, length(c));
    a *= a;
    vec3 cyan = vec3(0.0, 0.94, 1.0);
    vec3 gold = vec3(1.0, 0.72, 0.0);
    vec3 col = mix(cyan, gold, step(0.93, fract(vMix * 5.17)));
    col = mix(col * 0.55, col * (1.15 + vGlow), uMorph);
    gl_FragColor = vec4(col, a * (0.34 + 0.5 * uMorph) * (0.7 + vGlow * 0.5));
  }
`;

export class HumanoidParticles {
  readonly group = new THREE.Group();
  private mat: THREE.ShaderMaterial;
  private beams: THREE.LineSegments;
  private beamMat: THREE.LineBasicMaterial;
  private morphTarget = 0;

  constructor() {
    const rng = mulberry32(777);
    const targets = sampleHumanoid(HUMANOID_COUNT, rng);
    const cloud = new Float32Array(HUMANOID_COUNT * 3);
    const seed = new Float32Array(HUMANOID_COUNT);
    for (let i = 0; i < HUMANOID_COUNT; i++) {
      const r = 2.6 + rng() * 4.6;
      const a = rng() * TAU;
      const swirl = a + r * 0.35;
      cloud[i * 3] = Math.cos(swirl) * r;
      cloud[i * 3 + 1] = 1.1 + (rng() - 0.5) * 3.2;
      cloud[i * 3 + 2] = Math.sin(swirl) * r;
      seed[i] = rng();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(cloud, 3));
    geo.setAttribute("aTarget", new THREE.BufferAttribute(targets, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uMorph: { value: 0 },
        uTime: { value: 0 },
        uBass: { value: 0 },
        uTalk: { value: 0 },
      },
      vertexShader: HUMAN_VERT,
      fragmentShader: HUMAN_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(geo, this.mat);
    pts.frustumCulled = false;
    this.group.add(pts);

    /* energy beam network along the skeleton */
    const anchors: Array<[number, number, number]> = [
      [0, 2.05, 0], [0, 1.85, 0], [0, 1.62, 0], [0, 1.42, 0], [0, 1.2, 0], [0, 0.95, 0], [0, 0.75, 0],
      [0.34, 1.62, 0], [-0.34, 1.62, 0],
      [0.43, 1.28, 0.04], [-0.43, 1.28, 0.04],
      [0.37, 0.95, 0.07], [-0.37, 0.95, 0.07],
      [0.14, 0.5, 0.02], [-0.14, 0.5, 0.02],
      [0.13, 0.1, 0], [-0.13, 0.1, 0],
    ];
    const pairs: Array<[number, number]> = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
      [2, 7], [2, 8], [7, 9], [8, 10], [9, 11], [10, 12],
      [6, 13], [6, 14], [13, 15], [14, 16], [13, 14], [3, 4],
    ];
    const beamPos: number[] = [];
    for (const [ia, ib] of pairs) {
      const a = anchors[ia];
      const b = anchors[ib];
      const steps = 6;
      for (let s = 0; s < steps; s++) {
        const t1 = s / steps;
        const t2 = (s + 1) / steps;
        beamPos.push(
          a[0] + (b[0] - a[0]) * t1, a[1] + (b[1] - a[1]) * t1, a[2] + (b[2] - a[2]) * t1,
          a[0] + (b[0] - a[0]) * t2, a[1] + (b[1] - a[1]) * t2, a[2] + (b[2] - a[2]) * t2
        );
      }
    }
    // sprinkle cross-links sampled from the body itself
    for (let i = 0; i < 260; i++) {
      const ia = Math.floor(rng() * HUMANOID_COUNT) * 3;
      const ib = Math.floor(rng() * HUMANOID_COUNT) * 3;
      const ax = targets[ia], ay = targets[ia + 1], az = targets[ia + 2];
      const bx = targets[ib], by = targets[ib + 1], bz = targets[ib + 2];
      const d = (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2;
      if (d < 0.09 && d > 0.004) beamPos.push(ax, ay, az, bx, by, bz);
    }
    const beamGeo = new THREE.BufferGeometry();
    beamGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(beamPos), 3));
    this.beamMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    this.beams = new THREE.LineSegments(beamGeo, this.beamMat);
    this.beams.frustumCulled = false;
    this.group.add(this.beams);
    this.group.position.y = 0.02;
  }

  setMorphTarget(v: number): void {
    this.morphTarget = clamp(v, 0, 1);
  }

  morphValue(): number {
    return this.mat.uniforms.uMorph.value as number;
  }

  update(dt: number, time: number, levels: AudioLevels): void {
    this.mat.uniforms.uMorph.value = damp(
      this.mat.uniforms.uMorph.value as number,
      this.morphTarget,
      1.7,
      dt
    );
    this.mat.uniforms.uTime.value = time;
    this.mat.uniforms.uBass.value = levels.bass;
    this.mat.uniforms.uTalk.value = levels.talk;
    this.beamMat.opacity = this.morphValue() * (0.16 + levels.level * 0.22);
    this.group.rotation.y = Math.sin(time * 0.23) * 0.3 * this.morphValue();
  }
}
