import * as THREE from "three";
import type { AudioLevels, CoreState } from "../types";
import { TAU, damp } from "../utils/math";

interface StateParams {
  activity: number;
  signalSpeed: number;
  glowIntensity: number;
  turbulence: number;
  pulseRate: number;
  rotationSpeed: number;
  stepLockSpeed: number;
}

const STATE_PARAMS: Record<CoreState, StateParams> = {
  IDLE:       { activity: 0.15, signalSpeed: 0.2, glowIntensity: 0.4, turbulence: 0.02, pulseRate: 0.3, rotationSpeed: 0.3, stepLockSpeed: 0.02 },
  LISTENING:  { activity: 0.35, signalSpeed: 0.4, glowIntensity: 0.55, turbulence: 0.05, pulseRate: 0.5, rotationSpeed: 0.5, stepLockSpeed: 0.04 },
  THINKING:   { activity: 0.85, signalSpeed: 0.9, glowIntensity: 0.8, turbulence: 0.25, pulseRate: 1.1, rotationSpeed: 1.0, stepLockSpeed: 0.12 },
  TOOL_USE:   { activity: 0.95, signalSpeed: 1.0, glowIntensity: 0.9, turbulence: 0.35, pulseRate: 1.3, rotationSpeed: 1.3, stepLockSpeed: 0.18 },
  SPEAKING:   { activity: 0.6, signalSpeed: 0.55, glowIntensity: 0.65, turbulence: 0.12, pulseRate: 0.75, rotationSpeed: 0.6, stepLockSpeed: 0.06 },
  ERROR:      { activity: 0.7, signalSpeed: 0.8, glowIntensity: 0.75, turbulence: 0.6, pulseRate: 1.5, rotationSpeed: 0.2, stepLockSpeed: 0.08 },
  SUCCESS:    { activity: 0.8, signalSpeed: 0.7, glowIntensity: 0.95, turbulence: 0.08, pulseRate: 0.5, rotationSpeed: 0.8, stepLockSpeed: 0.1 },
};

const CYAN = new THREE.Color("#00f0ff");
const GOLD = new THREE.Color("#d4af37");
const RED = new THREE.Color("#ff3333");
const DIM_CYAN = new THREE.Color("#003344");
const WHITE = new THREE.Color("#aaccff");
const TEAL = new THREE.Color("#1a9fb0");
const GREEN = new THREE.Color("#2ee6a6");

export class CoreArc {
  readonly group = new THREE.Group();
  readonly platform = new THREE.Group();

  private outerRing!: THREE.Line;
  private outerRingMat!: THREE.ShaderMaterial;
  private stepLockRing!: THREE.Line;
  private stepLockMat!: THREE.ShaderMaterial;
  private radarSweep!: THREE.Mesh;
  private radarSweepMat!: THREE.ShaderMaterial;
  private innerTickRing!: THREE.LineSegments;
  private innerTickMat!: THREE.ShaderMaterial;
  private centerGaugeGroup!: THREE.Group;
  private centerGaugeMat!: THREE.ShaderMaterial;
  private sectorLines!: THREE.LineSegments;
  private sectorMat!: THREE.ShaderMaterial;
  private signalParticles!: THREE.Points;
  private signalParticleMat!: THREE.PointsMaterial;
  private signalParticlePositions!: Float32Array;
  private signalParticleTimes!: Float32Array;
  private pingRing!: THREE.LineLoop;
  private pingRingMat!: THREE.ShaderMaterial;

  private stepLockAngle = 0;
  private stepLockTarget = 0;
  private stepLockTimer = 0;
  private centerValue = 0;
  private centerTargetValue = 50;
  private signalCount = 24;
  private pingRingScale = 0;
  private pingRingActive = false;
  private stateParamsCur = { ...STATE_PARAMS.IDLE };
  private targetParams = { ...STATE_PARAMS.IDLE };
  private time = 0;
  private breathPhase = 0;
  private flashT = -1;
  private errorShake = 0;
  private outerRotation = 0;
  private radarRotation = 0;
  private tint = new THREE.Color("#00f0ff");
  private userTint = new THREE.Color("#00f0ff");

  constructor() {
    this._buildOuterRing();
    this._buildStepLockRing();
    this._buildRadarSweep();
    this._buildInnerTickRing();
    this._buildCenterGauge();
    this._buildSectorLines();
    this._buildSignalParticles();
    this._buildPingRing();
  }

  private _buildOuterRing(): void {
    const points = new Float32Array(512 * 3);
    const radius = 3.8;
    for (let i = 0; i < 512; i++) {
      const angle = (i / 512) * TAU;
      const segmentIdx = Math.floor(i / 8);
      const withinSegment = i % 8;
      let r: number;
      if (segmentIdx % 7 === 0) {
        const gapProgress = withinSegment / 8;
        r = radius * (0.92 + 0.08 * Math.sin(gapProgress * Math.PI));
      } else {
        r = radius + Math.sin(angle * 32) * 0.02 + Math.sin(angle * 8) * 0.01;
      }
      points[i * 3] = Math.cos(angle) * r;
      points[i * 3 + 1] = 0;
      points[i * 3 + 2] = Math.sin(angle) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
    this.outerRingMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: CYAN }, uIntensity: { value: 0.6 }, uRotation: { value: 0 } },
      vertexShader: `uniform float uRotation; varying vec3 vColor; uniform vec3 uColor; void main() { float c = cos(uRotation), s = sin(uRotation); vec3 pos = position; pos.xz = vec2(pos.x * c - pos.z * s, pos.x * s + pos.z * c); vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uIntensity; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, uIntensity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.outerRing = new THREE.Line(geo, this.outerRingMat);
    this.group.add(this.outerRing);
  }

  private _buildStepLockRing(): void {
    const segments = 48;
    const radius = 3.2;
    const points: number[] = [];
    for (let s = 0; s < segments; s++) {
      const baseAngle = (s / segments) * TAU;
      if (s < segments * 0.75) {
        const segLength = (TAU / segments) * 0.6;
        const startAngle = baseAngle + (TAU / segments) * 0.2;
        for (let i = 0; i < 8; i++) {
          const t = i / 8;
          const angle = startAngle + t * segLength;
          const r = radius + Math.sin(t * Math.PI) * 0.03;
          points.push(Math.cos(angle) * r, 0, Math.sin(angle) * r);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
    this.stepLockMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: GOLD }, uIntensity: { value: 0.5 }, uRotation: { value: 0 } },
      vertexShader: `uniform float uRotation; varying vec3 vColor; uniform vec3 uColor; void main() { float c = cos(uRotation), s = sin(uRotation); vec3 pos = position; pos.xz = vec2(pos.x * c - pos.z * s, pos.x * s + pos.z * c); vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uIntensity; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, uIntensity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.stepLockRing = new THREE.Line(geo, this.stepLockMat);
    this.group.add(this.stepLockRing);
  }

  private _buildRadarSweep(): void {
    const sweepAngle = Math.PI / 6;
    const radius = 2.8;
    const positions = new Float32Array(102);
    positions[0] = 0; positions[1] = 0; positions[2] = 0;
    for (let i = 0; i <= 32; i++) {
      const angle = -sweepAngle / 2 + (i / 32) * sweepAngle;
      positions[i * 3 + 3] = Math.cos(angle) * radius;
      positions[i * 3 + 4] = 0;
      positions[i * 3 + 5] = Math.sin(angle) * radius;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setDrawRange(0, 34);
    this.radarSweepMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: TEAL }, uOpacity: { value: 0.3 }, uRotation: { value: 0 } },
      vertexShader: `uniform float uRotation; varying float vAlpha; void main() { float c = cos(uRotation), s = sin(uRotation); vec3 pos = position; pos.xz = vec2(pos.x * c - pos.z * s, pos.x * s + pos.z * c); float angle = atan(pos.z, pos.x); vAlpha = 0.2 + 0.8 * smoothstep(-0.5, 0.5, angle); gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, uOpacity * vAlpha); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.radarSweep = new THREE.Mesh(geo, this.radarSweepMat);
    this.radarSweep.frustumCulled = false;
    this.group.add(this.radarSweep);
  }

  private _buildInnerTickRing(): void {
    const tickCount = 96;
    const radius = 2.4;
    const points: number[] = [];
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * TAU;
      const isMajor = i % 12 === 0;
      const tickLength = isMajor ? 0.15 : 0.06;
      const innerR = radius - tickLength / 2;
      const outerR = radius + tickLength / 2;
      points.push(Math.cos(angle) * innerR, 0, Math.sin(angle) * innerR);
      points.push(Math.cos(angle) * outerR, 0, Math.sin(angle) * outerR);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
    this.innerTickMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: CYAN }, uIntensity: { value: 0.4 } },
      vertexShader: `uniform float uTime; varying float vAlpha; void main() { float idx = float(gl_VertexID); float isMajor = mod(idx / 2.0, 12.0); float pulse = 0.5 + 0.5 * sin(uTime * 2.0 + idx * 0.1); vAlpha = isMajor < 0.5 || isMajor > 11.5 ? 0.6 + 0.4 * pulse : 0.3; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uIntensity; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, uIntensity * vAlpha); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.innerTickRing = new THREE.LineSegments(geo, this.innerTickMat);
    this.group.add(this.innerTickRing);
  }

  private _buildCenterGauge(): void {
    this.centerGaugeGroup = new THREE.Group();
    const ringConfigs = [{ radius: 0.65, segments: 24, color: CYAN }, { radius: 0.5, segments: 16, color: WHITE }, { radius: 0.35, segments: 12, color: GOLD }];
    for (const cfg of ringConfigs) {
      const points: number[] = [];
      for (let i = 0; i < cfg.segments; i++) {
        const angle = (i / cfg.segments) * TAU;
        if (i % 4 !== 0) points.push(Math.cos(angle) * cfg.radius, 0, Math.sin(angle) * cfg.radius);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: cfg.color }, uIntensity: { value: 0.7 }, uPulse: { value: 0 } },
        vertexShader: `uniform float uPulse; varying vec3 vColor; uniform vec3 uColor; void main() { vec3 pos = position * (1.0 + uPulse * 0.15); vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
        fragmentShader: `uniform vec3 uColor; uniform float uIntensity; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, uIntensity); }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Line(geo, mat);
      this.centerGaugeGroup.add(ring);
      if (cfg.radius === 0.5) this.centerGaugeMat = mat;
    }
    const crossPoints = new Float32Array([-0.7, 0, 0, 0.7, 0, 0, 0, 0, -0.7, 0, 0, 0.7]);
    const crossGeo = new THREE.BufferGeometry();
    crossGeo.setAttribute("position", new THREE.BufferAttribute(crossPoints, 3));
    const crossMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: DIM_CYAN }, uIntensity: { value: 0.4 } },
      vertexShader: `varying vec3 vColor; uniform vec3 uColor; void main() { vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec3 vColor; uniform float uIntensity; void main() { gl_FragColor = vec4(vColor, uIntensity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.centerGaugeGroup.add(new THREE.LineSegments(crossGeo, crossMat));
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.centerGaugeGroup.add(dot);
    this.group.add(this.centerGaugeGroup);
  }

  private _buildSectorLines(): void {
    const sectorCount = 8;
    const innerR = 1.0, outerR = 2.2;
    const points = new Float32Array(sectorCount * 2 * 3);
    for (let i = 0; i < sectorCount; i++) {
      const angle = (i / sectorCount) * TAU;
      points[i * 6] = Math.cos(angle) * innerR;
      points[i * 6 + 1] = 0;
      points[i * 6 + 2] = Math.sin(angle) * innerR;
      points[i * 6 + 3] = Math.cos(angle) * outerR;
      points[i * 6 + 4] = 0;
      points[i * 6 + 5] = Math.sin(angle) * outerR;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
    this.sectorMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: DIM_CYAN }, uIntensity: { value: 0.25 } },
      vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uIntensity; void main() { gl_FragColor = vec4(uColor, uIntensity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.sectorLines = new THREE.LineSegments(geo, this.sectorMat);
    this.group.add(this.sectorLines);
  }

  private _buildSignalParticles(): void {
    const positions = new Float32Array(this.signalCount * 3);
    const times = new Float32Array(this.signalCount);
    for (let i = 0; i < this.signalCount; i++) {
      positions[i * 3] = 0; positions[i * 3 + 1] = 0; positions[i * 3 + 2] = 0;
      times[i] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.signalParticleMat = new THREE.PointsMaterial({ color: CYAN, size: 0.06, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    this.signalParticles = new THREE.Points(geo, this.signalParticleMat);
    this.signalParticlePositions = positions;
    this.signalParticleTimes = times;
    this.group.add(this.signalParticles);
  }

  private _buildPingRing(): void {
    const points = new Float32Array(64 * 3);
    for (let i = 0; i < 64; i++) {
      const angle = (i / 64) * TAU;
      points[i * 3] = Math.cos(angle); points[i * 3 + 1] = 0; points[i * 3 + 2] = Math.sin(angle);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: CYAN }, uScale: { value: 0 }, uOpacity: { value: 0 } },
      vertexShader: `uniform float uScale; void main() { vec3 pos = position * uScale; gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.pingRing = new THREE.LineLoop(geo, mat);
    this.pingRing.visible = false;
    this.pingRingMat = mat;
    this.group.add(this.pingRing);
  }

  setTint(hex: string): void { this.userTint.set(hex); this.tint.copy(this.userTint); }
  setEmissive(): void {}
  setArcVisible(v: boolean): void { this.group.visible = v; }

  setState(state: CoreState): void {
    this.targetParams = { ...STATE_PARAMS[state] };
    if (state === "SUCCESS") {
      this.flashT = 0.4; this.pingRingActive = true; this.pingRingScale = 0.5; this.pingRing.visible = true;
      this.pingRingMat.uniforms.uColor.value = GREEN;
    } else if (state === "ERROR") {
      this.flashT = 0.4; this.errorShake = 0.5; this.pingRingActive = true; this.pingRingScale = 0.5; this.pingRing.visible = true;
      this.pingRingMat.uniforms.uColor.value = RED;
    }
  }

  pulse(): void { this.centerTargetValue = 75 + Math.random() * 20; }

  update(dt: number, time: number, audioLevels?: AudioLevels, state?: CoreState): void {
    this.time = time;
    for (const key in this.stateParamsCur) {
      const k = key as keyof StateParams;
      this.stateParamsCur[k] = damp(this.stateParamsCur[k], this.targetParams[k], 2.5, dt);
    }
    const params = this.stateParamsCur;
    this.outerRotation += params.rotationSpeed * dt * 0.5;
    this.outerRingMat.uniforms.uRotation.value = this.outerRotation;
    this.outerRingMat.uniforms.uTime.value = time;
    this.outerRingMat.uniforms.uIntensity.value = params.glowIntensity * 0.6;
    this.stepLockTimer += dt;
    const stepPeriod = 2.0 / Math.max(params.stepLockSpeed, 0.01);
    if (this.stepLockTimer > stepPeriod) { this.stepLockTimer = 0; this.stepLockTarget = (Math.random() - 0.5) * 0.8; }
    this.stepLockAngle = damp(this.stepLockAngle, this.stepLockTarget, 8, dt);
    this.stepLockMat.uniforms.uRotation.value = this.stepLockAngle;
    this.stepLockMat.uniforms.uTime.value = time;
    this.stepLockMat.uniforms.uIntensity.value = params.activity * 0.5;
    this.radarRotation += params.signalSpeed * dt * 2.0;
    this.radarSweepMat.uniforms.uRotation.value = this.radarRotation;
    this.radarSweepMat.uniforms.uTime.value = time;
    this.radarSweepMat.uniforms.uOpacity.value = 0.2 + params.activity * 0.2;
    this.innerTickMat.uniforms.uTime.value = time;
    this.innerTickMat.uniforms.uIntensity.value = params.activity * 0.4;
    this.breathPhase += params.pulseRate * dt;
    const breath = Math.sin(this.breathPhase) * 0.5 + 0.5;
    this.centerValue = damp(this.centerValue, this.centerTargetValue, 2, dt);
    if (this.centerGaugeMat) this.centerGaugeMat.uniforms.uPulse.value = breath * 0.3;
    this.sectorMat.uniforms.uTime.value = time;
    this.sectorMat.uniforms.uIntensity.value = params.turbulence * 0.25;
    const radii = [1.8, 1.6, 1.4, 1.2];
    const speeds = [0.8, -0.6, 1.0, -0.4];
    for (let i = 0; i < this.signalCount; i++) {
      this.signalParticleTimes[i] += params.signalSpeed * dt * 0.5;
      const t = this.signalParticleTimes[i] % 1.0;
      const ringIdx = i % radii.length;
      const angle = t * TAU * (speeds[ringIdx] > 0 ? 1 : -1);
      const r = radii[ringIdx];
      this.signalParticlePositions[i * 3] = Math.cos(angle) * r;
      this.signalParticlePositions[i * 3 + 1] = 0;
      this.signalParticlePositions[i * 3 + 2] = Math.sin(angle) * r;
    }
    this.signalParticles.geometry.attributes.position.needsUpdate = true;
    this.signalParticleMat.opacity = 0.5 + params.activity * 0.4;
    if (this.pingRingActive) {
      this.pingRingScale += dt * 2.5;
      const fade = 1.0 - this.pingRingScale;
      if (fade <= 0) { this.pingRingActive = false; this.pingRing.visible = false; }
      else { this.pingRingMat.uniforms.uScale.value = this.pingRingScale; this.pingRingMat.uniforms.uOpacity.value = fade * 0.8; }
    }
    if (this.flashT > 0) {
      this.flashT -= dt;
      const flashIntensity = this.flashT / 0.4;
      this.outerRingMat.uniforms.uIntensity.value = params.glowIntensity * (0.6 + flashIntensity * 0.4);
    }
    if (this.errorShake > 0) {
      this.errorShake -= dt;
      if (this.errorShake > 0) { this.group.position.x = (Math.random() - 0.5) * this.errorShake * 0.3; this.group.position.z = (Math.random() - 0.5) * this.errorShake * 0.3; }
      else { this.group.position.x = 0; this.group.position.z = 0; }
    }
    if (audioLevels) {
      const level = Math.min((audioLevels.level || 0) * 2.0, 1.0);
      this.centerGaugeGroup.scale.setScalar(1.0 + level * 0.15);
    }
  }

  dispose(): void {
    this.outerRing.geometry.dispose(); this.outerRingMat.dispose();
    this.stepLockRing.geometry.dispose(); this.stepLockMat.dispose();
    this.radarSweep.geometry.dispose(); this.radarSweepMat.dispose();
    this.innerTickRing.geometry.dispose(); this.innerTickMat.dispose();
    this.centerGaugeGroup.traverse((obj) => { if ((obj as THREE.Mesh).geometry) { (obj as THREE.Mesh).geometry.dispose(); if ((obj as THREE.Mesh).material) ((obj as THREE.Mesh).material as THREE.Material).dispose(); } });
    this.sectorLines.geometry.dispose(); this.sectorMat.dispose();
    this.signalParticles.geometry.dispose(); this.signalParticleMat.dispose();
    this.pingRing.geometry.dispose(); this.pingRingMat.dispose();
  }
}
