import * as THREE from "three";
import type { AudioLevels, CoreState } from "../types";
import { TAU, damp } from "../utils/math";

interface StateParams { spin: number; plasma: number; beam: number; iris: number; flicker: number; turbulence: number; pulseRate: number; glowIntensity: number; signalSpeed: number; }
const STATE_PARAMS: Record<CoreState, StateParams> = {
  IDLE:       { spin: 0.08, plasma: 0.6, beam: 0.15, iris: 0.05, flicker: 0.08, turbulence: 0.03, pulseRate: 0.25, glowIntensity: 0.5, signalSpeed: 0.15 },
  LISTENING:  { spin: 0.18, plasma: 0.9, beam: 0.35, iris: 0.15, flicker: 0.15, turbulence: 0.08, pulseRate: 0.45, glowIntensity: 0.65, signalSpeed: 0.28 },
  THINKING:   { spin: 0.55, plasma: 1.6, beam: 0.7, iris: 0.5, flicker: 0.4, turbulence: 0.35, pulseRate: 0.9, glowIntensity: 0.85, signalSpeed: 0.65 },
  TOOL_USE:   { spin: 0.95, plasma: 2.0, beam: 0.95, iris: 0.7, flicker: 0.55, turbulence: 0.5, pulseRate: 1.2, glowIntensity: 0.95, signalSpeed: 0.95 },
  SPEAKING:   { spin: 0.42, plasma: 1.4, beam: 0.6, iris: 0.4, flicker: 0.32, turbulence: 0.18, pulseRate: 0.7, glowIntensity: 0.75, signalSpeed: 0.45 },
  ERROR:      { spin: 1.4, plasma: 2.4, beam: 1.0, iris: 0.85, flicker: 0.9, turbulence: 0.75, pulseRate: 1.6, glowIntensity: 1.0, signalSpeed: 1.2 },
  SUCCESS:    { spin: 0.28, plasma: 1.9, beam: 0.8, iris: 0.3, flicker: 0.18, turbulence: 0.08, pulseRate: 0.4, glowIntensity: 1.1, signalSpeed: 0.5 },
};
const CYAN = new THREE.Color("#00f0ff"); const GOLD = new THREE.Color("#d4af37"); const RED = new THREE.Color("#ff3333"); const DIM_CYAN = new THREE.Color("#004455");

export class CoreArc {
  readonly group = new THREE.Group(); readonly platform = new THREE.Group();
  private primaryArc!: THREE.Line; private primaryArcMat!: THREE.ShaderMaterial; private arcCount = 3;
  private orbitRings: Array<{ mesh: THREE.Line; radius: number; speed: number; angle: number; tiltX: number; tiltZ: number }> = [];
  private signalParticles!: THREE.Points; private signalPositions!: Float32Array; private signalTimes!: Float32Array; private signalCount = 24;
  private tickRing!: THREE.InstancedMesh; private tickMat!: THREE.MeshBasicMaterial; private radialLines!: THREE.LineSegments; private radialMat!: THREE.ShaderMaterial; private tickCount = 96; private radialCount = 64;
  private centralNode!: THREE.Mesh; private nodeMat!: THREE.ShaderMaterial; private nodeGlow!: THREE.Mesh; private nodeGlowMat!: THREE.MeshBasicMaterial; private interferenceRing!: THREE.Line; private interferenceMat!: THREE.ShaderMaterial;
  private waveRing!: THREE.Mesh; private waveMat!: THREE.MeshBasicMaterial; private waveT = -1;
  private cascadeParticles!: THREE.Points; private cascadePositions!: Float32Array; private cascadeVelocities!: Float32Array; private cascadeActive = false;
  private stateParamsCur = { ...STATE_PARAMS.IDLE }; private targetParams = { ...STATE_PARAMS.IDLE };
  private spinVel = 0; private plasmaCur = 0.6; private irisCur = 0.05; private turbulenceCur = 0.03; private pulseRateCur = 0.25; private glowIntensityCur = 0.5; private signalSpeedCur = 0.15;
  private tint = new THREE.Color("#00f0ff"); private tintTarget = new THREE.Color("#00f0ff"); private userTint = new THREE.Color("#00f0ff");
  private microPulsePhase = 0; private breathPhase = 0; private flashT = -1; private successGlow = 0;

  constructor() { this._buildPrimaryArc(); this._buildSignalOrbits(); this._buildComputationalField(); this._buildCentralNode(); this._buildEnergyEvents(); }

  private _buildPrimaryArc(): void {
    for (let layer = 0; layer < this.arcCount; layer++) {
      const points = new Float32Array(128 * 3); const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: layer === 1 ? GOLD : CYAN }, uIntensity: { value: 0.6 - layer * 0.15 }, uDashOffset: { value: layer * 0.3 } },
        vertexShader: "uniform float uTime;varying vec3 vColor;uniform vec3 uColor;void main(){vec3 pos=position;float breathe=sin(uTime*0.5)*0.02;pos*=1.0+breathe;float angle=atan(pos.z,pos.x);if(angle>1.8&&angle<2.4)pos*=0.001;vColor=uColor;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",
        fragmentShader: "uniform vec3 uColor;uniform float uIntensity;uniform float uDashOffset;varying vec3 vColor;void main(){float dash=mod(gl_FragCoord.x*0.02+uDashOffset,0.15);float alpha=uIntensity*(dash>0.05?1.0:0.3);gl_FragColor=vec4(vColor,alpha);}",
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const baseRadius = 2.8 - layer * 0.35, arcAngle = Math.PI * 1.8, startAngle = Math.PI * 0.6;
      for (let i = 0; i < 128; i++) { const t = i / 127, angle = startAngle + t * arcAngle, r = baseRadius * (1.0 + 0.03 * Math.sin(t * Math.PI * 6)); points[i * 3] = Math.cos(angle) * r; points[i * 3 + 1] = Math.sin(t * Math.PI) * 0.15 * (layer + 1); points[i * 3 + 2] = Math.sin(angle) * r; }
      geometry.attributes.position.needsUpdate = true; const line = new THREE.Line(geometry, mat); this.group.add(line);
      if (layer === 0) { this.primaryArc = line; this.primaryArcMat = mat; }
    }
  }

  private _buildSignalOrbits(): void {
    const configs = [{ radius: 3.4, speed: 0.12, tiltX: 0.3, tiltZ: 0.1 }, { radius: 3.8, speed: -0.08, tiltX: -0.2, tiltZ: 0.3 }, { radius: 4.2, speed: 0.05, tiltX: 0.5, tiltZ: -0.2 }, { radius: 4.6, speed: -0.04, tiltX: -0.4, tiltZ: 0.4 }, { radius: 5.0, speed: 0.03, tiltX: 0.1, tiltZ: -0.3 }];
    for (const cfg of configs) {
      const points = new Float32Array(64 * 3); for (let i = 0; i < 64; i++) { const a = (i / 64) * TAU; points[i * 3] = Math.cos(a) * cfg.radius; points[i * 3 + 1] = Math.sin(a) * cfg.radius * 0.02; points[i * 3 + 2] = Math.sin(a) * cfg.radius; }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: DIM_CYAN }, uOpacity: { value: 0.15 } },
        vertexShader: "uniform float uTime;varying float vAlpha;void main(){float alpha=0.1+0.1*sin(uTime*2.0+position.x);vAlpha=alpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
        fragmentShader: "uniform vec3 uColor;uniform float uOpacity;varying float vAlpha;void main(){gl_FragColor=vec4(uColor,uOpacity*vAlpha);}",
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Line(geo, mat); ring.rotation.x = cfg.tiltX; ring.rotation.z = cfg.tiltZ; this.group.add(ring);
      this.orbitRings.push({ mesh: ring, radius: cfg.radius, speed: cfg.speed, angle: Math.random() * TAU, tiltX: cfg.tiltX, tiltZ: cfg.tiltZ });
    }
    this.signalPositions = new Float32Array(this.signalCount * 3); this.signalTimes = new Float32Array(this.signalCount);
    for (let i = 0; i < this.signalCount; i++) this.signalTimes[i] = Math.random();
    const sigGeo = new THREE.BufferGeometry(); sigGeo.setAttribute("position", new THREE.BufferAttribute(this.signalPositions, 3));
    const sigMat = new THREE.PointsMaterial({ color: CYAN, size: 0.08, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    this.signalParticles = new THREE.Points(sigGeo, sigMat); this.group.add(this.signalParticles);
  }

  private _buildComputationalField(): void {
    const tickGeo = new THREE.BoxGeometry(0.008, 0.08, 0.008);
    this.tickMat = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
    this.tickRing = new THREE.InstancedMesh(tickGeo, this.tickMat, this.tickCount);
    const tm = new THREE.Matrix4();
    for (let i = 0; i < this.tickCount; i++) { const a = (i / this.tickCount) * TAU, major = i % 8 === 0, r = 1.6; const pos = new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r); const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a); tm.compose(pos, rot, new THREE.Vector3(1, major ? 1.8 : 1, 1)); this.tickRing.setMatrixAt(i, tm); }
    this.tickRing.instanceMatrix.needsUpdate = true; this.group.add(this.tickRing);
    const radialPositions = new Float32Array(this.radialCount * 2 * 3);
    for (let i = 0; i < this.radialCount; i++) { const a = (i / this.radialCount) * TAU; radialPositions[i * 6] = Math.cos(a) * 1.2; radialPositions[i * 6 + 1] = 0.02 * Math.sin(i * 0.5); radialPositions[i * 6 + 2] = Math.sin(a) * 1.2; radialPositions[i * 6 + 3] = Math.cos(a) * 1.5; radialPositions[i * 6 + 4] = 0.02 * Math.sin(i * 0.5 + 0.3); radialPositions[i * 6 + 5] = Math.sin(a) * 1.5; }
    const radialGeo = new THREE.BufferGeometry(); radialGeo.setAttribute("position", new THREE.BufferAttribute(radialPositions, 3));
    this.radialMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, uColor: { value: DIM_CYAN }, uIntensity: { value: 0.3 } }, vertexShader: "uniform float uTime;varying vec3 vColor;uniform vec3 uColor;void main(){float flicker=0.7+0.3*sin(uTime*3.0+position.x*10.0);vColor=uColor*flicker;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", fragmentShader: "varying vec3 vColor;void main(){gl_FragColor=vec4(vColor,0.5);}", transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.radialLines = new THREE.LineSegments(radialGeo, this.radialMat); this.group.add(this.radialLines);
  }

  private _buildCentralNode(): void {
    this.nodeMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, uColor: { value: CYAN }, uIntensity: { value: 0.8 }, uAudio: { value: 0 }, uPulsePhase: { value: 0 } }, vertexShader: "varying vec3 vN;varying vec3 vV;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}", fragmentShader: "uniform float uTime;uniform vec3 uColor;uniform float uIntensity;uniform float uAudio;uniform float uPulsePhase;varying vec3 vN;varying vec3 vV;void main(){float fr=pow(1.0-abs(dot(normalize(vN),normalize(vV))),1.5);float core=0.6+0.4*sin(uTime*2.0+uPulsePhase);vec3 col=uColor*(fr*2.0+core*0.7)*uIntensity*(1.0+uAudio*0.8);col=col/(1.0+0.3*col);gl_FragColor=vec4(col,1.0);}", transparent: true, depthWrite: false });
    this.centralNode = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), this.nodeMat); this.group.add(this.centralNode);
    this.nodeGlowMat = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false });
    this.nodeGlow = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 24), this.nodeGlowMat); this.group.add(this.nodeGlow);
    const intPoints = new Float32Array(48 * 3); for (let i = 0; i < 48; i++) { const a = (i / 48) * TAU, r = 0.7 + 0.02 * Math.sin(i * 3); intPoints[i * 3] = Math.cos(a) * r; intPoints[i * 3 + 1] = 0.01 * Math.sin(i * 5); intPoints[i * 3 + 2] = Math.sin(a) * r; }
    const intGeo = new THREE.BufferGeometry(); intGeo.setAttribute("position", new THREE.BufferAttribute(intPoints, 3));
    this.interferenceMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, uColor: { value: DIM_CYAN } }, vertexShader: "uniform float uTime;varying float vAlpha;void main(){float wave=0.5+0.5*sin(uTime*4.0+position.x*8.0);vAlpha=0.2*wave;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", fragmentShader: "uniform vec3 uColor;varying float vAlpha;void main(){gl_FragColor=vec4(uColor,vAlpha);}", transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.interferenceRing = new THREE.Line(intGeo, this.interferenceMat); this.group.add(this.interferenceRing);
  }

  private _buildEnergyEvents(): void {
    const waveGeo = new THREE.RingGeometry(0.5, 0.52, 48);
    this.waveMat = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    this.waveRing = new THREE.Mesh(waveGeo, this.waveMat); this.waveRing.rotation.x = Math.PI / 2; this.group.add(this.waveRing);
    this.cascadePositions = new Float32Array(48 * 3); this.cascadeVelocities = new Float32Array(48 * 3);
    const cascadeGeo = new THREE.BufferGeometry(); cascadeGeo.setAttribute("position", new THREE.BufferAttribute(this.cascadePositions, 3));
    const cascadeMat = new THREE.PointsMaterial({ color: GOLD, size: 0.06, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.cascadeParticles = new THREE.Points(cascadeGeo, cascadeMat); this.group.add(this.cascadeParticles);
  }

  setTint(hex: string): void { this.userTint.set(hex); this.tintTarget.copy(this.userTint); }
  setEmissive(): void {}
  setArcVisible(v: boolean): void { this.group.visible = v; }
  setState(state: CoreState): void { this.targetParams = { ...STATE_PARAMS[state] }; if (state === "SUCCESS") { this.flashT = 0; this.successGlow = 1; this._triggerCascade(CYAN); } else if (state === "ERROR") { this.flashT = 0; this._triggerCascade(RED); } }
  pulse(): void { this.flashT = 0.3; }
  private _triggerCascade(color: THREE.Color): void { this.cascadeActive = true; for (let i = 0; i < 48; i++) { const a = (i / 48) * TAU, r = 0.4; this.cascadePositions[i * 3] = Math.cos(a) * r; this.cascadePositions[i * 3 + 1] = 0.01; this.cascadePositions[i * 3 + 2] = Math.sin(a) * r; const speed = 2.0 + Math.random() * 1.5; this.cascadeVelocities[i * 3] = Math.cos(a) * speed; this.cascadeVelocities[i * 3 + 1] = 0.3 + Math.random() * 0.2; this.cascadeVelocities[i * 3 + 2] = Math.sin(a) * speed; } (this.cascadeParticles.material as THREE.PointsMaterial).color.copy(color); (this.cascadeParticles.material as THREE.PointsMaterial).opacity = 0.8; }

  update(dt: number, time: number, levels: AudioLevels, state: CoreState): void {
    const target = this.targetParams;
    this.stateParamsCur.spin = damp(this.stateParamsCur.spin, target.spin, 2.5, dt); this.stateParamsCur.plasma = damp(this.stateParamsCur.plasma, target.plasma, 2.0, dt); this.stateParamsCur.iris = damp(this.stateParamsCur.iris, target.iris, 1.8, dt); this.stateParamsCur.turbulence = damp(this.stateParamsCur.turbulence, target.turbulence, 2.2, dt); this.stateParamsCur.pulseRate = damp(this.stateParamsCur.pulseRate, target.pulseRate, 2.5, dt); this.stateParamsCur.glowIntensity = damp(this.stateParamsCur.glowIntensity, target.glowIntensity, 2.0, dt); this.stateParamsCur.signalSpeed = damp(this.stateParamsCur.signalSpeed, target.signalSpeed, 3.5, dt);
    this.spinVel = damp(this.spinVel, target.spin * 0.5, 1.5, dt); this.plasmaCur = damp(this.plasmaCur, target.plasma, 2.0, dt); this.irisCur = damp(this.irisCur, target.iris, 1.8, dt); this.turbulenceCur = damp(this.turbulenceCur, target.turbulence, 2.2, dt); this.pulseRateCur = damp(this.pulseRateCur, target.pulseRate, 2.5, dt); this.glowIntensityCur = damp(this.glowIntensityCur, target.glowIntensity, 2.0, dt); this.signalSpeedCur = damp(this.signalSpeedCur, target.signalSpeed, 3.5, dt);
    this.tint.lerp(this.tintTarget, Math.min(1, dt * 0.3)); this.breathPhase += dt * (0.5 + this.pulseRateCur * 2.0); this.microPulsePhase += dt * (4.0 + this.pulseRateCur * 8.0);
    if (this.primaryArcMat) { this.primaryArcMat.uniforms.uTime.value = time; this.primaryArcMat.uniforms.uIntensity.value = 0.5 + this.plasmaCur * 0.3; }
    for (const orbit of this.orbitRings) { orbit.angle += dt * orbit.speed * (1.0 + this.signalSpeedCur * 2.0); orbit.mesh.rotation.y = orbit.angle; (orbit.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value = time; (orbit.mesh.material as THREE.ShaderMaterial).uniforms.uOpacity.value = 0.1 + 0.1 * this.glowIntensityCur; }
    for (let i = 0; i < this.signalCount; i++) { this.signalTimes[i] += dt * (0.15 + this.signalSpeedCur * 0.5); if (this.signalTimes[i] > 1) this.signalTimes[i] -= 1; const orbitIdx = i % this.orbitRings.length, orbit = this.orbitRings[orbitIdx], t = this.signalTimes[i] * TAU, r = orbit.radius, x = Math.cos(t + orbit.angle) * r, y = Math.sin(t) * r * 0.02, z = Math.sin(t + orbit.angle) * r; this.signalPositions[i * 3] = x; this.signalPositions[i * 3 + 1] = y * Math.cos(orbit.tiltX) - z * Math.sin(orbit.tiltX); this.signalPositions[i * 3 + 2] = y * Math.sin(orbit.tiltX) + z * Math.cos(orbit.tiltX); }
    (this.signalParticles.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
    this.tickRing.rotation.y += dt * this.spinVel * 0.3; this.tickMat.opacity = 0.4 + this.glowIntensityCur * 0.3;
    this.radialMat.uniforms.uTime.value = time; this.radialMat.uniforms.uIntensity.value = 0.2 + this.stateParamsCur.flicker * 0.2;
    this.nodeMat.uniforms.uTime.value = time; this.nodeMat.uniforms.uIntensity.value = 0.6 + this.plasmaCur * 0.4; this.nodeMat.uniforms.uAudio.value = levels.talk; this.nodeMat.uniforms.uPulsePhase.value = this.microPulsePhase;
    this.nodeGlow.scale.setScalar(1.0 + Math.sin(this.breathPhase) * 0.08 * this.irisCur); this.nodeGlowMat.opacity = 0.08 + this.glowIntensityCur * 0.06;
    this.interferenceMat.uniforms.uTime.value = time; this.interferenceRing.rotation.z -= dt * 0.1 * (1.0 + this.turbulenceCur);
    if (this.flashT >= 0) { this.flashT -= dt; const alpha = Math.max(0, this.flashT / 0.3); this.waveMat.opacity = alpha * 0.6; const scale = 1.0 + (1.0 - alpha) * 2.5; this.waveRing.scale.set(scale, scale, 1); }
    if (this.cascadeActive) { for (let i = 0; i < 48; i++) { this.cascadePositions[i * 3] += this.cascadeVelocities[i * 3] * dt; this.cascadePositions[i * 3 + 1] += this.cascadeVelocities[i * 3 + 1] * dt; this.cascadePositions[i * 3 + 2] += this.cascadeVelocities[i * 3 + 2] * dt; const dist = Math.sqrt(this.cascadePositions[i * 3] ** 2 + this.cascadePositions[i * 3 + 1] ** 2 + this.cascadePositions[i * 3 + 2] ** 2), fade = Math.max(0, 1.0 - dist / 3.0); (this.cascadeParticles.material as THREE.PointsMaterial).opacity = 0.8 * fade; } (this.cascadeParticles.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true; if ((this.cascadeParticles.material as THREE.PointsMaterial).opacity < 0.05) this.cascadeActive = false; }
    if (this.successGlow > 0) this.successGlow = Math.max(0, this.successGlow - dt * 0.8);
  }
  dispose(): void { this.group.clear(); }
}
