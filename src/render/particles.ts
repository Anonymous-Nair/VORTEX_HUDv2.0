import * as THREE from "three";
import type { AudioLevels } from "../types";
import { TAU, clamp, damp, mulberry32 } from "../utils/math";

/* ============================================================
   GPU PARTICLE POPULATIONS
   · AmbientParticles — background dust + intelligence orbiters
     + event spark bursts · density/scale tunable at runtime
   · HumanoidParticles — 65,000-particle population morphing from
     an energy cloud into a coherent humanoid lattice sampled on
     the SHELL of a procedural SDF body (depth-layer facial bias),
     synchronized per-skeletal-band to the live audio spectrum:
     head/bass · shoulders/mid · arms+highs · jaw/talk.
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
  uniform float uDustDensity;
  uniform float uStreamDensity;
  uniform float uDustScale;
  uniform float uStreamScale;
  varying float vSeed;
  varying float vFade;
  varying float vVis;
  void main(){
    vec3 p;
    float vis;
    float size;
    if (aMode < 0.5) {
      p = position;
      float t = uTime * 0.12 + aSeed * 19.0;
      p += (0.4 + uTurb * 1.4) * vec3(sin(t * 1.3 + p.y * 0.4), cos(t * 0.9 + p.x * 0.3), sin(t * 1.1 + p.z * 0.4));
      vis = step(aSeed, uDustDensity);
      size = 1.3 * uDustScale;
    } else {
      float ang = aData.z + uTime * aData.y * (1.0 + uAudio * 1.6 + uTurb);
      p = vec3(cos(ang) * aData.x, 2.6 + aData.w + sin(uTime * 0.7 + aSeed * 9.0) * 0.25, sin(ang) * aData.x);
      vis = step(fract(aSeed * 5.17), uStreamDensity);
      size = 1.7 * uStreamScale;
    }
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = size * (1.0 + aSeed * 0.9) * (150.0 / d) * (1.0 + uAudio * 0.5) * vis;
    vFade = smoothstep(55.0, 9.0, d);
    vSeed = aSeed;
    vVis = vis;
    gl_Position = projectionMatrix * mv;
  }
`;

const AMBIENT_FRAG = `
  uniform vec3 uColA; uniform vec3 uColB; uniform float uAudio;
  varying float vSeed; varying float vFade; varying float vVis;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    float a = smoothstep(0.5, 0.05, r);
    a *= a;
    vec3 col = mix(uColA, uColB, step(0.9, fract(vSeed * 7.31)));
    gl_FragColor = vec4(col * (0.65 + uAudio * 0.8), a * vFade * 0.75 * vVis);
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
        uDustDensity: { value: 0.85 },
        uStreamDensity: { value: 1 },
        uDustScale: { value: 1 },
        uStreamScale: { value: 1 },
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

  /** runtime density control (0..1 fractions of each population) */
  setDensity(dust: number, stream: number): void {
    this.mat.uniforms.uDustDensity.value = clamp(dust, 0, 1);
    this.mat.uniforms.uStreamDensity.value = clamp(stream, 0, 1);
  }

  /** runtime point-size scale (0.2..3) */
  setScale(dust: number, stream: number): void {
    this.mat.uniforms.uDustScale.value = clamp(dust, 0.2, 3);
    this.mat.uniforms.uStreamScale.value = clamp(stream, 0.2, 3);
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

    /* micro-pulse breathing for orbiters — subtle intelligence field effect */
    const microPulse = Math.sin(time * 2.3) * 0.3 + Math.cos(time * 4.7) * 0.2;
    this.mat.uniforms.uStreamScale.value = 1 + microPulse * 0.15 * (1 + this.turb * 0.5);

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
   HUMANOID LATTICE — procedural SDF body, shell-sampled
   ============================================================ */

interface Ellipsoid {
  kind: "e";
  c: [number, number, number];
  r: [number, number, number];
  w: number;
}
interface Capsule {
  kind: "c";
  a: [number, number, number];
  b: [number, number, number];
  r: number;
  w: number;
}
type Part = Ellipsoid | Capsule;

const PARTS: Part[] = [
  { kind: "e", c: [0, 1.62, 0], r: [0.155, 0.185, 0.165], w: 0.16 }, // cranium
  { kind: "e", c: [0, 1.63, 0.13], r: [0.028, 0.034, 0.03], w: 0.012 }, // nose
  { kind: "e", c: [0, 1.715, 0.125], r: [0.1, 0.02, 0.028], w: 0.012 }, // brow ridge
  { kind: "e", c: [0.15, 1.63, 0.01], r: [0.018, 0.04, 0.028], w: 0.008 }, // ear R
  { kind: "e", c: [-0.15, 1.63, 0.01], r: [0.018, 0.04, 0.028], w: 0.008 }, // ear L
  { kind: "c", a: [0, 1.47, 0], b: [0, 1.39, 0], r: 0.058, w: 0.02 }, // neck
  { kind: "e", c: [0, 1.13, 0], r: [0.205, 0.29, 0.128], w: 0.24 }, // torso
  { kind: "e", c: [0, 1.24, 0.09], r: [0.15, 0.13, 0.05], w: 0.05 }, // chest plate
  { kind: "e", c: [0, 0.95, 0], r: [0.175, 0.05, 0.115], w: 0.03 }, // belt
  { kind: "e", c: [0, 0.8, 0], r: [0.165, 0.115, 0.105], w: 0.07 }, // pelvis
  { kind: "e", c: [0.27, 1.36, 0], r: [0.075, 0.06, 0.07], w: 0.035 }, // shoulder R
  { kind: "e", c: [-0.27, 1.36, 0], r: [0.075, 0.06, 0.07], w: 0.035 }, // shoulder L
  { kind: "c", a: [0.285, 1.34, 0], b: [0.35, 1.06, 0.03], r: 0.052, w: 0.05 }, // upper arm R
  { kind: "c", a: [-0.285, 1.34, 0], b: [-0.35, 1.06, 0.03], r: 0.052, w: 0.05 }, // upper arm L
  { kind: "c", a: [0.35, 1.06, 0.03], b: [0.3, 0.8, 0.06], r: 0.042, w: 0.045 }, // forearm R
  { kind: "c", a: [-0.35, 1.06, 0.03], b: [-0.3, 0.8, 0.06], r: 0.042, w: 0.045 }, // forearm L
  { kind: "e", c: [0.3, 0.74, 0.07], r: [0.045, 0.065, 0.04], w: 0.02 }, // hand R
  { kind: "e", c: [-0.3, 0.74, 0.07], r: [0.045, 0.065, 0.04], w: 0.02 }, // hand L
  { kind: "c", a: [0.1, 0.73, 0], b: [0.115, 0.4, 0.02], r: 0.068, w: 0.08 }, // thigh R
  { kind: "c", a: [-0.1, 0.73, 0], b: [-0.115, 0.4, 0.02], r: 0.068, w: 0.08 }, // thigh L
  { kind: "c", a: [0.115, 0.4, 0.02], b: [0.11, 0.09, 0], r: 0.048, w: 0.07 }, // shin R
  { kind: "c", a: [-0.115, 0.4, 0.02], b: [-0.11, 0.09, 0], r: 0.048, w: 0.07 }, // shin L
  { kind: "e", c: [0.11, 0.05, 0.045], r: [0.055, 0.042, 0.11], w: 0.02 }, // foot R
  { kind: "e", c: [-0.11, 0.05, 0.045], r: [0.055, 0.042, 0.11], w: 0.02 }, // foot L
];

const HEAD_C: [number, number, number] = [0, 1.62, 0];

function sdEllipsoid(p: [number, number, number], e: Ellipsoid): number {
  const qx = (p[0] - e.c[0]) / e.r[0];
  const qy = (p[1] - e.c[1]) / e.r[1];
  const qz = (p[2] - e.c[2]) / e.r[2];
  const l = Math.sqrt(qx * qx + qy * qy + qz * qz);
  const rMin = Math.min(e.r[0], Math.min(e.r[1], e.r[2]));
  return (l - 1) * rMin;
}

function sdCapsule(p: [number, number, number], c: Capsule): number {
  const pax = p[0] - c.a[0];
  const pay = p[1] - c.a[1];
  const paz = p[2] - c.a[2];
  const bax = c.b[0] - c.a[0];
  const bay = c.b[1] - c.a[1];
  const baz = c.b[2] - c.a[2];
  const bb = bax * bax + bay * bay + baz * baz;
  const h = clamp((pax * bax + pay * bay + paz * baz) / Math.max(1e-6, bb), 0, 1);
  const dx = pax - bax * h;
  const dy = pay - bay * h;
  const dz = paz - baz * h;
  return Math.sqrt(dx * dx + dy * dy + dz * dz) - c.r;
}

function sdBody(p: [number, number, number]): number {
  let d = Infinity;
  for (const part of PARTS) {
    const s = part.kind === "e" ? sdEllipsoid(p, part) : sdCapsule(p, part);
    if (s < d) d = s;
  }
  return d;
}

/**
 * Shell-biased rejection sampler — particles settle on the surface
 * of the SDF union (coherent silhouette) with a sparse interior fill
 * and an extra acceptance band over the facial hemisphere
 * (depth-layer density).
 */
function sampleHumanoid(count: number, rng: () => number): Float32Array {
  const out = new Float32Array(count * 3);
  const totalW = PARTS.reduce((s, p) => s + p.w, 0);
  const SHELL = 0.026;
  const p: [number, number, number] = [0, 0, 0];

  const pickPart = (): Part => {
    let w = rng() * totalW;
    for (const part of PARTS) {
      w -= part.w;
      if (w <= 0) return part;
    }
    return PARTS[0];
  };

  for (let i = 0; i < count; i++) {
    let placed = false;
    for (let attempt = 0; attempt < 12 && !placed; attempt++) {
      if (rng() < 0.72) {
        // sample near a weighted part → high shell-hit rate
        const part = pickPart();
        if (part.kind === "e") {
          p[0] = part.c[0] + (rng() * 2 - 1) * part.r[0] * 1.45;
          p[1] = part.c[1] + (rng() * 2 - 1) * part.r[1] * 1.45;
          p[2] = part.c[2] + (rng() * 2 - 1) * part.r[2] * 1.45;
        } else {
          const t = rng();
          p[0] = part.a[0] + (part.b[0] - part.a[0]) * t + (rng() * 2 - 1) * part.r * 1.9;
          p[1] = part.a[1] + (part.b[1] - part.a[1]) * t + (rng() * 2 - 1) * part.r * 1.9;
          p[2] = part.a[2] + (part.b[2] - part.a[2]) * t + (rng() * 2 - 1) * part.r * 1.9;
        }
      } else {
        p[0] = (rng() * 2 - 1) * 0.72;
        p[1] = rng() * 2.02 - 0.02;
        p[2] = (rng() * 2 - 1) * 0.42;
      }
      const s = sdBody(p);
      const onShell = Math.abs(s) < SHELL;
      const inFill = s < 0 && rng() < 0.16;
      const onFace =
        p[2] > 0.02 &&
        (p[0] - HEAD_C[0]) ** 2 + (p[1] - HEAD_C[1]) ** 2 + (p[2] - HEAD_C[2]) ** 2 < 0.03 &&
        s < 0.05;
      if (onShell || inFill || onFace) {
        out[i * 3] = p[0] * 1.22;
        out[i * 3 + 1] = p[1] * 1.22;
        out[i * 3 + 2] = p[2] * 1.22;
        placed = true;
      }
    }
    if (!placed) {
      // guaranteed fallback: direct interior sample of a weighted part
      const part = pickPart();
      if (part.kind === "e") {
        const u = rng() * 2 - 1;
        const phi = rng() * TAU;
        const rr = Math.cbrt(rng());
        const sq = Math.sqrt(1 - u * u);
        out[i * 3] = (part.c[0] + sq * Math.cos(phi) * rr * part.r[0]) * 1.22;
        out[i * 3 + 1] = (part.c[1] + u * rr * part.r[1]) * 1.22;
        out[i * 3 + 2] = (part.c[2] + sq * Math.sin(phi) * rr * part.r[2]) * 1.22;
      } else {
        const t = rng();
        const a2 = rng() * TAU;
        const rr = Math.sqrt(rng()) * part.r;
        out[i * 3] = (part.a[0] + (part.b[0] - part.a[0]) * t + Math.cos(a2) * rr) * 1.22;
        out[i * 3 + 1] = (part.a[1] + (part.b[1] - part.a[1]) * t) * 1.22;
        out[i * 3 + 2] = (part.a[2] + (part.b[2] - part.a[2]) * t + Math.sin(a2) * rr) * 1.22;
      }
    }
  }
  return out;
}

const HUMAN_VERT = `
  attribute vec3 aTarget;
  attribute float aSeed;
  uniform float uMorph;
  uniform float uTime;
  uniform float uBass;
  uniform float uMid;
  uniform float uHigh;
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

    /* skeletal audio binding — per body band */
    float headMask = smoothstep(1.7, 1.95, aTarget.y);
    float shoulderMask = smoothstep(1.55, 1.62, aTarget.y) * (1.0 - smoothstep(1.9, 2.05, aTarget.y));
    float armMask = step(0.36, abs(aTarget.x)) * smoothstep(0.85, 1.2, aTarget.y);
    float torsoMask = smoothstep(0.9, 1.1, aTarget.y) * (1.0 - smoothstep(1.7, 1.9, aTarget.y));

    /* bass → torso breathing + head nod */
    float breath = uBass * 0.045 * sin(uTime * 3.0 + aTarget.y * 2.0);
    human.xz *= 1.0 + breath * torsoMask;
    human.y += uBass * 0.02 * headMask * sin(uTime * 2.2);

    /* mid → shoulder shrug */
    human.y += uMid * 0.035 * shoulderMask * (0.5 + 0.5 * sin(uTime * 3.4));

    /* highs → arm flare + hand shimmer */
    human.x += sign(aTarget.x) * uHigh * 0.07 * armMask;

    /* talk → jaw articulation on the facial hemisphere */
    float jaw = step(0.0, aTarget.z) * step(aTarget.y, 2.15) * headMask;
    human.y += uTalk * 0.05 * jaw * sin(uTime * 19.0 + aSeed * 40.0);

    vec3 p = mix(cloud, human, m);
    p += 0.02 * (0.3 + 0.7 * m) * vec3(
      sin(uTime * 2.0 + aSeed * 91.0),
      cos(uTime * 1.7 + aSeed * 57.0),
      sin(uTime * 2.3 + aSeed * 31.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = (1.1 + aSeed * 1.4) * (m * 1.5 + 0.65) * (150.0 / d);
    vGlow = m * (0.5 + 0.5 * sin(uTime * 2.0 + aSeed * 40.0))
      + uBass * 0.45 * torsoMask
      + uHigh * 0.9 * armMask * m;
    vMix = aSeed;
    gl_Position = projectionMatrix * mv;
  }
`;

const HUMAN_FRAG = `
  uniform float uMorph;
  uniform float uHigh;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.02, length(c));
    a *= a;
    vec3 cyan = vec3(0.0, 0.94, 1.0);
    vec3 gold = vec3(1.0, 0.72, 0.0);
    vec3 col = mix(cyan, gold, step(0.93, fract(vMix * 5.17)));
    col = mix(col * 0.55, col * (1.15 + vGlow) * (1.0 + uHigh * 0.3), uMorph);
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
        uMid: { value: 0 },
        uHigh: { value: 0 },
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
      [0, 2.42, 0], [0, 2.2, 0], [0, 1.98, 0], [0, 1.72, 0], [0, 1.46, 0], [0, 1.16, 0], [0, 0.92, 0],
      [0.41, 1.98, 0], [-0.41, 1.98, 0],
      [0.52, 1.56, 0.05], [-0.52, 1.56, 0.05],
      [0.45, 1.16, 0.09], [-0.45, 1.16, 0.09],
      [0.17, 0.62, 0.02], [-0.17, 0.62, 0.02],
      [0.16, 0.12, 0], [-0.16, 0.12, 0],
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
    // surface cross-links sampled from the SDF shell itself
    for (let i = 0; i < 300; i++) {
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
    this.mat.uniforms.uMid.value = levels.mid;
    this.mat.uniforms.uHigh.value = levels.high;
    this.mat.uniforms.uTalk.value = levels.talk;
    this.beamMat.opacity = this.morphValue() * (0.16 + levels.level * 0.22);
    this.group.rotation.y = Math.sin(time * 0.23) * 0.3 * this.morphValue();
  }
}
