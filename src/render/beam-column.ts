import * as THREE from "three";
import type { AudioLevels, CoreState } from "../types";
import { TAU, clamp, damp, mulberry32 } from "../utils/math";

/* ============================================================
   ENERGY BEAM MODE — LIVING INTELLIGENCE COLUMN
   A giant layered column of intelligence: 48k rising particles
   arranged into interweaving plasma strands, a volumetric
   energy core, six intersecting helical sub-beams, a turbulence
   noise field and persistent particle streak trails — all
   reactive to the audio spectrum and core state.
   ============================================================ */

const BEAM_PARTICLES = 48000;
const STREAKS = 800;
const BEAM_HEIGHT = 15;

const STATE_INTENSITY: Record<CoreState, number> = {
  IDLE: 0.55,
  LISTENING: 0.8,
  THINKING: 1.25,
  TOOL_USE: 1.5,
  SPEAKING: 1.15,
  ERROR: 1.7,
  SUCCESS: 1.45,
};

const BEAM_VERT = `
  attribute float aSeed;
  attribute float aStrand;
  uniform float uTime;
  uniform float uAudio;
  uniform float uMid;
  uniform float uIntensity;
  uniform float uDensity;
  uniform float uScale;
  varying float vGlow;
  varying float vMix;
  void main(){
    float vis = step(aSeed, uDensity);
    float t = fract(aSeed * 3.71 + uTime * (0.03 + aStrand * 0.012) * uIntensity);
    float y = t * ${BEAM_HEIGHT.toFixed(1)};

    /* strand radius — tapered, breathing with bass */
    float taper = 0.55 + 0.45 * sin(t * 3.14159);
    float radius = (0.5 + aStrand * 0.42) * taper * (1.0 + uAudio * 0.5);

    /* interweaving helix + turbulence noise field */
    float twist = aStrand * 2.39996 + uTime * (0.35 + aStrand * 0.06) * uIntensity + y * 0.28;
    float turb = sin(y * 1.7 + uTime * 2.1 + aSeed * 40.0)
               * cos(y * 0.9 - uTime * 1.4 + aStrand * 5.0);
    radius += turb * 0.34 * (0.4 + uMid);

    vec3 p = vec3(cos(twist) * radius, y, sin(twist) * radius);
    /* axial wobble */
    p.x += sin(uTime * 0.8 + y * 0.35) * 0.16;
    p.z += cos(uTime * 0.7 + y * 0.3) * 0.16;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    gl_PointSize = uScale * (1.1 + aSeed * 1.5) * (1.0 + uAudio * 0.8) * vis * (150.0 / d);
    vGlow = (0.4 + 0.6 * sin(uTime * 3.0 + aSeed * 61.0)) * uIntensity * (0.4 + uAudio);
    vMix = fract(aSeed * 9.77 + aStrand);
    gl_Position = projectionMatrix * mv;
  }
`;

const BEAM_FRAG = `
  uniform vec3 uTint;
  uniform float uIntensity;
  varying float vGlow;
  varying float vMix;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.02, length(c));
    a *= a;
    vec3 gold = vec3(1.0, 0.72, 0.0);
    vec3 col = mix(uTint, gold, step(0.9, vMix));
    col *= 0.5 + vGlow;
    gl_FragColor = vec4(col, a * 0.6 * clamp(uIntensity, 0.2, 1.6));
  }
`;

const CORE_FRAG = `
  uniform float uTime;
  uniform vec3 uTint;
  uniform float uAudio;
  uniform float uIntensity;
  varying vec3 vN;
  varying vec3 vV;
  varying vec2 vUv;
  void main(){
    float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 1.6);
    float flow = 0.5 + 0.5 * sin(vUv.y * 42.0 - uTime * 7.0);
    float flick = 0.82 + 0.18 * sin(uTime * 23.0 + vUv.y * 90.0);
    float bands = smoothstep(0.4, 0.9, flow);
    float alpha = (fr * 0.5 + bands * 0.22) * flick * (0.5 + uAudio * 0.8);
    vec3 col = uTint * (0.7 + uIntensity * 0.5) * (1.0 + bands);
    gl_FragColor = vec4(col, alpha * 0.55);
  }
`;

export class EnergyBeam {
  readonly group = new THREE.Group();
  private mat: THREE.ShaderMaterial;
  private coreMat: THREE.ShaderMaterial;
  private streakMat: THREE.LineBasicMaterial;
  private streakGeo: THREE.BufferGeometry;
  private streakData: Float32Array; // x,y,z, speed, seed
  private rings: THREE.Mesh[] = [];
  private ringMats: THREE.MeshBasicMaterial[] = [];
  private subBeams = new THREE.Group();
  private intensity = 0.55;
  private tint = new THREE.Color("#00f0ff");

  constructor() {
    const rng = mulberry32(4242);
    const pos = new Float32Array(BEAM_PARTICLES * 3);
    const seed = new Float32Array(BEAM_PARTICLES);
    const strand = new Float32Array(BEAM_PARTICLES);
    const STRANDS = 9;
    for (let i = 0; i < BEAM_PARTICLES; i++) {
      seed[i] = rng();
      strand[i] = Math.floor(rng() * STRANDS);
      pos[i * 3 + 1] = rng() * BEAM_HEIGHT;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    geo.setAttribute("aStrand", new THREE.BufferAttribute(strand, 1));

    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAudio: { value: 0 },
        uMid: { value: 0 },
        uIntensity: { value: 1 },
        uDensity: { value: 1 },
        uScale: { value: 1 },
        uTint: { value: this.tint },
      },
      vertexShader: BEAM_VERT,
      fragmentShader: BEAM_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(geo, this.mat);
    pts.frustumCulled = false;
    this.group.add(pts);

    /* volumetric energy core */
    this.coreMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTint: { value: this.tint },
        uAudio: { value: 0 },
        uIntensity: { value: 1 },
      },
      vertexShader: `
        varying vec3 vN; varying vec3 vV; varying vec2 vUv;
        void main(){
          vUv = uv;
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: CORE_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.62, BEAM_HEIGHT, 28, 40, true), this.coreMat);
    core.position.y = BEAM_HEIGHT / 2;
    this.group.add(core);

    /* intersecting helical sub-beams */
    for (let s = 0; s < 6; s++) {
      const curve: THREE.Vector3[] = [];
      const phase = (s / 6) * TAU;
      for (let i = 0; i <= 90; i++) {
        const y = (i / 90) * BEAM_HEIGHT;
        const a = phase + y * 0.9;
        const r = 1.15 + 0.5 * Math.sin(y * 0.5 + phase);
        curve.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
      }
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve),
        new THREE.LineBasicMaterial({
          color: s % 2 === 0 ? 0x00f0ff : 0xd4af37,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          toneMapped: false,
        })
      );
      this.subBeams.add(line);
    }
    this.group.add(this.subBeams);

    /* containment rings at intervals */
    for (let i = 0; i < 5; i++) {
      const m = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5 - i * 0.06, 0.02, 8, 64), m);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.4 + i * (BEAM_HEIGHT / 5);
      this.rings.push(ring);
      this.ringMats.push(m);
      this.group.add(ring);
    }

    /* persistent streak trails */
    this.streakData = new Float32Array(STREAKS * 5);
    const streakPos = new Float32Array(STREAKS * 6);
    for (let i = 0; i < STREAKS; i++) {
      this.streakData[i * 5] = (rng() * 2 - 1) * 1.6;
      this.streakData[i * 5 + 1] = rng() * BEAM_HEIGHT;
      this.streakData[i * 5 + 2] = (rng() * 2 - 1) * 1.6;
      this.streakData[i * 5 + 3] = 2.5 + rng() * 5;
      this.streakData[i * 5 + 4] = rng();
    }
    this.streakGeo = new THREE.BufferGeometry();
    this.streakGeo.setAttribute("position", new THREE.BufferAttribute(streakPos, 3).setUsage(THREE.DynamicDrawUsage));
    this.streakMat = new THREE.LineBasicMaterial({
      color: 0x7ad7ff,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    const streaks = new THREE.LineSegments(this.streakGeo, this.streakMat);
    streaks.frustumCulled = false;
    this.group.add(streaks);

    /* base + crown emitter glows */
    const baseMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    const base = new THREE.Mesh(new THREE.CircleGeometry(2.2, 48), baseMat);
    base.rotation.x = -Math.PI / 2;
    base.position.y = 0.03;
    this.group.add(base);
    this.baseMat = baseMat;
  }

  private baseMat: THREE.MeshBasicMaterial;

  setState(state: CoreState): void {
    this.targetIntensity = STATE_INTENSITY[state];
    if (state === "ERROR") this.tintTarget.set("#ff5533");
    else if (state === "SUCCESS") this.tintTarget.set("#00ff66");
    else this.tintTarget.copy(this.userTint);
  }

  private targetIntensity = 0.55;
  private userTint = new THREE.Color("#00f0ff");
  private tintTarget = new THREE.Color("#00f0ff");

  setTint(hex: string): void {
    this.userTint.set(hex);
    this.tintTarget.set(hex);
  }

  setDensity(d: number): void {
    this.mat.uniforms.uDensity.value = clamp(d, 0.05, 1);
  }

  setScale(s: number): void {
    this.mat.uniforms.uScale.value = clamp(s, 0.3, 3);
  }

  setIntensityScale(s: number): void {
    this.intensityScale = clamp(s, 0.2, 3);
  }
  private intensityScale = 1;

  update(dt: number, time: number, levels: AudioLevels): void {
    this.intensity = damp(this.intensity, this.targetIntensity * this.intensityScale, 2.2, dt);
    this.tint.lerp(this.tintTarget, Math.min(1, dt * 2.4));

    this.mat.uniforms.uTime.value = time;
    this.mat.uniforms.uAudio.value = levels.bass;
    this.mat.uniforms.uMid.value = levels.mid;
    this.mat.uniforms.uIntensity.value = this.intensity;
    this.coreMat.uniforms.uTime.value = time;
    this.coreMat.uniforms.uAudio.value = levels.level;
    this.coreMat.uniforms.uIntensity.value = this.intensity;
    (this.mat.uniforms.uTint.value as THREE.Color).copy(this.tint);
    (this.coreMat.uniforms.uTint.value as THREE.Color).copy(this.tint);

    this.subBeams.rotation.y += dt * 0.5 * this.intensity;
    for (let i = 0; i < this.rings.length; i++) {
      const r = this.rings[i];
      r.rotation.z += dt * (i % 2 === 0 ? 0.7 : -0.5) * this.intensity;
      const s = 1 + levels.bass * 0.25 + Math.sin(time * 2 + i) * 0.03;
      r.scale.setScalar(s);
      this.ringMats[i].opacity = 0.14 + levels.high * 0.3 + Math.sin(time * 3 + i * 2) * 0.05;
      this.ringMats[i].color.copy(this.tint);
    }
    this.baseMat.opacity = 0.25 + levels.bass * 0.4;
    this.baseMat.color.copy(this.tint);

    /* streak trails */
    const posAttr = this.streakGeo.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < STREAKS; i++) {
      const d = this.streakData;
      let y = d[i * 5 + 1] + d[i * 5 + 3] * dt * this.intensity;
      if (y > BEAM_HEIGHT) y -= BEAM_HEIGHT;
      d[i * 5 + 1] = y;
      const spin = time * 0.6 + d[i * 5 + 4] * TAU + y * 0.3;
      const x = d[i * 5] * Math.cos(spin) * 0.4;
      const z = d[i * 5 + 2] * Math.sin(spin) * 0.4;
      arr[i * 6] = x;
      arr[i * 6 + 1] = y;
      arr[i * 6 + 2] = z;
      arr[i * 6 + 3] = x;
      arr[i * 6 + 4] = Math.max(0, y - 0.55 - levels.bass * 0.4);
      arr[i * 6 + 5] = z;
    }
    posAttr.needsUpdate = true;
    this.streakMat.color.copy(this.tint);
  }
}
