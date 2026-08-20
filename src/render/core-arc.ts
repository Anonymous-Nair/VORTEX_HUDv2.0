import * as THREE from "three";
import type { AudioLevels, CoreState } from "../types";
import { TAU, damp } from "../utils/math";

/**
 * VORTEX 2D RADIAL COMPUTATIONAL CORE
 * Front-facing intelligence instrument — NOT a 3D reactor
 * Built with Three.js Line/Points for GPU efficiency but rendered as flat 2D HUD
 */

interface StateParams {
  activity: number;
  signalSpeed: number;
  glowIntensity: number;
  turbulence: number;
  pulseRate: number;
}

const STATE_PARAMS: Record<CoreState, StateParams> = {
  IDLE:       { activity: 0.15, signalSpeed: 0.2, glowIntensity: 0.4, turbulence: 0.02, pulseRate: 0.3 },
  LISTENING:  { activity: 0.35, signalSpeed: 0.4, glowIntensity: 0.55, turbulence: 0.05, pulseRate: 0.5 },
  THINKING:   { activity: 0.85, signalSpeed: 0.9, glowIntensity: 0.8, turbulence: 0.25, pulseRate: 1.1 },
  TOOL_USE:   { activity: 0.95, signalSpeed: 1.0, glowIntensity: 0.9, turbulence: 0.35, pulseRate: 1.3 },
  SPEAKING:   { activity: 0.6, signalSpeed: 0.55, glowIntensity: 0.65, turbulence: 0.12, pulseRate: 0.75 },
  ERROR:      { activity: 0.7, signalSpeed: 0.8, glowIntensity: 0.75, turbulence: 0.6, pulseRate: 1.5 },
  SUCCESS:    { activity: 0.8, signalSpeed: 0.7, glowIntensity: 0.95, turbulence: 0.08, pulseRate: 0.5 },
};

const CYAN = new THREE.Color("#00f0ff");
const GOLD = new THREE.Color("#d4af37");
const RED = new THREE.Color("#ff3333");
const DIM_CYAN = new THREE.Color("#003344");
const WHITE = new THREE.Color("#aaccff");

export class CoreArc {
  readonly group = new THREE.Group();
  readonly platform = new THREE.Group(); // kept for API compatibility

  // Layer A: Primary Arc (outer command boundary)
  private outerRing!: THREE.Line;
  private outerRingMat!: THREE.ShaderMaterial;
  
  // Layer B: Segmented instrumentation rings (multiple)
  private segmentRings: Array<{ mesh: THREE.Line; mat: THREE.ShaderMaterial; segments: number[] }> = [];
  
  // Layer C: Radial sectors with tick marks
  private tickRing!: THREE.InstancedMesh;
  private tickMat!: THREE.MeshBasicMaterial;
  private tickCount = 128;
  
  // Layer D: Signal orbit paths (thin orbital lines with traveling pulses)
  private signalPaths: Array<{ ring: THREE.Line; mat: THREE.ShaderMaterial; signals: Float32Array }> = [];
  private signalCount = 18;
  
  // Layer E: Inner computational field (radial lines + micro segments)
  private innerFieldLines!: THREE.LineSegments;
  private innerFieldMat!: THREE.ShaderMaterial;
  
  // Layer F: Central intelligence nucleus (2D computational core, NOT a sphere)
  private nucleusGroup!: THREE.Group;
  private nucleusRings: THREE.Line[] = [];
  private nucleusCrosshair!: THREE.LineSegments;
  private nucleusMat!: THREE.ShaderMaterial;
  
  // Layer G: Micro typography markers (represented as small geometry clusters)
  private markerPoints!: THREE.Points;
  private markerPositions!: Float32Array;
  
  // State & animation
  private stateParamsCur = { ...STATE_PARAMS.IDLE };
  private targetParams = { ...STATE_PARAMS.IDLE };
  private time = 0;
  private breathPhase = 0;
  private pulsePhase = 0;
  private flashT = -1;
  private errorShake = 0;
  
  // Color control
  private tint = new THREE.Color("#00f0ff");
  private userTint = new THREE.Color("#00f0ff");

  constructor() {
    this._buildOuterRing();
    this._buildSegmentRings();
    this._buildTickRing();
    this._buildSignalPaths();
    this._buildInnerField();
    this._buildNucleus();
    this._buildMarkers();
  }

  private _buildOuterRing(): void {
    // Large circular boundary with segmented appearance
    const points = new Float32Array(256 * 3);
    const radius = 3.8;
    
    for (let i = 0; i < 256; i++) {
      const angle = (i / 256) * TAU;
      // Create subtle gaps and variations
      let r = radius;
      const segmentIdx = Math.floor(i / 16);
      if (segmentIdx % 7 === 0 || segmentIdx % 11 === 0) {
        r *= 0.97; // subtle gap
      }
      // Add micro-variations for technical feel
      r += Math.sin(angle * 24) * 0.015;
      
      points[i * 3] = Math.cos(angle) * r;
      points[i * 3 + 1] = 0; // flat 2D
      points[i * 3 + 2] = Math.sin(angle) * r;
    }
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
    
    this.outerRingMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: CYAN },
        uIntensity: { value: 0.5 },
        uDashOffset: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec3 vColor;
        uniform vec3 uColor;
        void main() {
          vColor = uColor;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        uniform float uDashOffset;
        varying vec3 vColor;
        void main() {
          float dash = mod(gl_FragCoord.x * 0.03 + uDashOffset, 0.12);
          float alpha = uIntensity * (dash > 0.04 ? 1.0 : 0.2);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    this.outerRing = new THREE.Line(geo, this.outerRingMat);
    this.group.add(this.outerRing);
  }

  private _buildSegmentRings(): void {
    // Multiple nested segmented rings at different radii
    const configs = [
      { radius: 3.5, segments: 8, thickness: 0.025, color: CYAN, speed: 0.02 },
      { radius: 3.2, segments: 12, thickness: 0.02, color: WHITE, speed: -0.015 },
      { radius: 2.9, segments: 6, thickness: 0.03, color: GOLD, speed: 0.01 },
      { radius: 2.6, segments: 16, thickness: 0.018, color: CYAN, speed: -0.025 },
      { radius: 2.3, segments: 10, thickness: 0.022, color: DIM_CYAN, speed: 0.008 },
    ];
    
    for (const cfg of configs) {
      const segmentAngles: number[] = [];
      const points: number[] = [];
      
      for (let s = 0; s < cfg.segments; s++) {
        const baseAngle = (s / cfg.segments) * TAU;
        const segLength = (TAU / cfg.segments) * 0.7; // 70% coverage
        const startAngle = baseAngle + (TAU / cfg.segments) * 0.15;
        
        // Generate arc points for this segment
        const arcPoints = 32;
        for (let i = 0; i < arcPoints; i++) {
          const t = i / arcPoints;
          const angle = startAngle + t * segLength;
          points.push(Math.cos(angle) * cfg.radius);
          points.push(0);
          points.push(Math.sin(angle) * cfg.radius);
          segmentAngles.push(angle);
        }
      }
      
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
      
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: cfg.color },
          uIntensity: { value: 0.4 },
          uRotation: { value: 0 },
        },
        vertexShader: `
          uniform float uRotation;
          varying vec3 vColor;
          uniform vec3 uColor;
          void main() {
            float c = cos(uRotation);
            float s = sin(uRotation);
            vec3 pos = position;
            pos.xz = vec2(pos.x * c - pos.z * s, pos.x * s + pos.z * c);
            vColor = uColor;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, uIntensity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      
      const ring = new THREE.Line(geo, mat);
      this.group.add(ring);
      this.segmentRings.push({ mesh: ring, mat, segments: segmentAngles });
    }
  }

  private _buildTickRing(): void {
    // Dense ring of tick marks around the computational field
    const tickGeo = new THREE.BoxGeometry(0.006, 0.06, 0.006);
    this.tickMat = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    this.tickRing = new THREE.InstancedMesh(tickGeo, this.tickMat, this.tickCount);
    const tm = new THREE.Matrix4();
    
    for (let i = 0; i < this.tickCount; i++) {
      const angle = (i / this.tickCount) * TAU;
      const r = 2.0;
      const isMajor = i % 16 === 0;
      const scale = isMajor ? 2.0 : 1.0;
      
      const pos = new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r);
      const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -angle);
      tm.compose(pos, rot, new THREE.Vector3(1, scale, 1));
      this.tickRing.setMatrixAt(i, tm);
    }
    
    this.tickRing.instanceMatrix.needsUpdate = true;
    this.group.add(this.tickRing);
  }

  private _buildSignalPaths(): void {
    // Thin orbital paths with traveling signal pulses
    const configs = [
      { radius: 1.85, speed: 0.15, tilt: 0 },
      { radius: 1.75, speed: -0.12, tilt: 0 },
      { radius: 1.65, speed: 0.18, tilt: 0 },
      { radius: 1.55, speed: -0.1, tilt: 0 },
    ];
    
    for (const cfg of configs) {
      const points = new Float32Array(128 * 3);
      for (let i = 0; i < 128; i++) {
        const angle = (i / 128) * TAU;
        points[i * 3] = Math.cos(angle) * cfg.radius;
        points[i * 3 + 1] = 0;
        points[i * 3 + 2] = Math.sin(angle) * cfg.radius;
      }
      
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(points, 3));
      
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: DIM_CYAN },
          uOpacity: { value: 0.15 },
        },
        vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          void main() {
            gl_FragColor = vec4(uColor, uOpacity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      
      const ring = new THREE.Line(geo, mat);
      this.group.add(ring);
      
      // Signal particles for this path
      const signals = new Float32Array(this.signalCount * 3);
      this.signalPaths.push({ ring, mat, signals });
    }
  }

  private _buildInnerField(): void {
    // Radial lines creating computational field texture
    const positions = new Float32Array(96 * 2 * 3);
    
    for (let i = 0; i < 96; i++) {
      const angle = (i / 96) * TAU;
      const innerR = 1.2;
      const outerR = 1.5;
      
      positions[i * 6] = Math.cos(angle) * innerR;
      positions[i * 6 + 1] = 0;
      positions[i * 6 + 2] = Math.sin(angle) * innerR;
      
      positions[i * 6 + 3] = Math.cos(angle) * outerR;
      positions[i * 6 + 4] = 0;
      positions[i * 6 + 5] = Math.sin(angle) * outerR;
    }
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    this.innerFieldMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: DIM_CYAN },
        uIntensity: { value: 0.25 },
      },
      vertexShader: `
        uniform float uTime;
        varying float vAlpha;
        void main() {
          float flicker = 0.6 + 0.4 * sin(uTime * 2.0 + position.x * 8.0);
          vAlpha = flicker;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(uColor, uIntensity * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    this.innerFieldLines = new THREE.LineSegments(geo, this.innerFieldMat);
    this.group.add(this.innerFieldLines);
  }

  private _buildNucleus(): void {
    // Central computational nucleus — 2D layered structure
    this.nucleusGroup = new THREE.Group();
    
    // Concentric rings
    const ringConfigs = [
      { radius: 0.55, segments: 32, color: CYAN },
      { radius: 0.45, segments: 24, color: WHITE },
      { radius: 0.35, segments: 16, color: GOLD },
    ];
    
    for (const cfg of ringConfigs) {
      const points: number[] = [];
      for (let i = 0; i < cfg.segments; i++) {
        const angle = (i / cfg.segments) * TAU;
        // Create segmented ring
        if (i % 3 !== 0) {
          points.push(Math.cos(angle) * cfg.radius);
          points.push(0);
          points.push(Math.sin(angle) * cfg.radius);
        }
      }
      
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(points), 3));
      
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: cfg.color },
          uIntensity: { value: 0.6 },
          uPulse: { value: 0 },
        },
        vertexShader: `
          uniform float uPulse;
          varying vec3 vColor;
          uniform vec3 uColor;
          void main() {
            vec3 pos = position * (1.0 + uPulse * 0.1);
            vColor = uColor;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uIntensity;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, uIntensity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      
      const ring = new THREE.Line(geo, mat);
      this.nucleusGroup.add(ring);
      this.nucleusRings.push(ring);
      this.nucleusMat = mat;
    }
    
    // Crosshair
    const crossPoints = new Float32Array([
      -0.6, 0, 0,  0.6, 0, 0,
      0, 0, -0.6,  0, 0, 0.6,
    ]);
    const crossGeo = new THREE.BufferGeometry();
    crossGeo.setAttribute("position", new THREE.BufferAttribute(crossPoints, 3));
    const crossMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: DIM_CYAN }, uIntensity: { value: 0.3 } },
      vertexShader: `varying vec3 vColor; uniform vec3 uColor; void main() { vColor = uColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec3 vColor; uniform float uIntensity; void main() { gl_FragColor = vec4(vColor, uIntensity); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.nucleusCrosshair = new THREE.LineSegments(crossGeo, crossMat);
    this.nucleusGroup.add(this.nucleusCrosshair);
    
    this.group.add(this.nucleusGroup);
  }

  private _buildMarkers(): void {
    // Small marker points representing micro-data positions
    this.markerPositions = new Float32Array(48 * 3);
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * TAU;
      const r = 2.1 + (i % 3) * 0.05;
      this.markerPositions[i * 3] = Math.cos(angle) * r;
      this.markerPositions[i * 3 + 1] = 0;
      this.markerPositions[i * 3 + 2] = Math.sin(angle) * r;
    }
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(this.markerPositions, 3));
    const mat = new THREE.PointsMaterial({
      color: CYAN,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    this.markerPoints = new THREE.Points(geo, mat);
    this.group.add(this.markerPoints);
  }

  setTint(hex: string): void {
    this.userTint.set(hex);
    this.tint.copy(this.userTint);
  }

  setEmissive(): void {
    // No-op for API compatibility
  }

  setArcVisible(v: boolean): void {
    this.group.visible = v;
  }

  setState(state: CoreState): void {
    this.targetParams = { ...STATE_PARAMS[state] };
    if (state === "SUCCESS") {
      this.flashT = 0.4;
    } else if (state === "ERROR") {
      this.flashT = 0.4;
      this.errorShake = 0.5;
    }
  }

  pulse(): void {
    this.flashT = 0.2;
  }

  update(dt: number, time: number, levels: AudioLevels, state: CoreState): void {
    this.time = time;
    
    // Smooth state parameter interpolation
    const target = this.targetParams;
    this.stateParamsCur.activity = damp(this.stateParamsCur.activity, target.activity, 2.5, dt);
    this.stateParamsCur.signalSpeed = damp(this.stateParamsCur.signalSpeed, target.signalSpeed, 3.0, dt);
    this.stateParamsCur.glowIntensity = damp(this.stateParamsCur.glowIntensity, target.glowIntensity, 2.0, dt);
    this.stateParamsCur.turbulence = damp(this.stateParamsCur.turbulence, target.turbulence, 2.2, dt);
    this.stateParamsCur.pulseRate = damp(this.stateParamsCur.pulseRate, target.pulseRate, 2.5, dt);
    
    // Animation phases
    this.breathPhase += dt * (0.5 + this.stateParamsCur.pulseRate * 1.5);
    this.pulsePhase += dt * (3.0 + this.stateParamsCur.pulseRate * 6.0);
    
    // Update outer ring
    if (this.outerRingMat) {
      this.outerRingMat.uniforms.uTime.value = time;
      this.outerRingMat.uniforms.uIntensity.value = 0.4 + this.stateParamsCur.glowIntensity * 0.3;
      this.outerRingMat.uniforms.uDashOffset.value = time * 0.1;
    }
    
    // Update segment rings
    for (let i = 0; i < this.segmentRings.length; i++) {
      const seg = this.segmentRings[i];
      const speedMult = 1.0 + this.stateParamsCur.signalSpeed * 2.0;
      seg.mat.uniforms.uTime.value = time;
      seg.mat.uniforms.uRotation.value += dt * seg.mesh.userData.speed * speedMult;
      seg.mat.uniforms.uIntensity.value = 0.3 + this.stateParamsCur.activity * 0.4;
    }
    
    // Update tick ring
    this.tickRing.rotation.y += dt * 0.02 * (1.0 + this.stateParamsCur.signalSpeed);
    this.tickMat.opacity = 0.4 + this.stateParamsCur.glowIntensity * 0.2;
    
    // Update signal paths
    for (let i = 0; i < this.signalPaths.length; i++) {
      const path = this.signalPaths[i];
      path.mat.uniforms.uTime.value = time;
      path.mat.uniforms.uOpacity.value = 0.1 + this.stateParamsCur.activity * 0.15;
      
      // Animate signal particles along paths
      for (let s = 0; s < this.signalCount; s++) {
        const signalT = ((time * (0.2 + this.stateParamsCur.signalSpeed * 0.5) + s * 0.15) % 1);
        const angle = signalT * TAU;
        const r = 1.85 - i * 0.1;
        path.signals[s * 3] = Math.cos(angle) * r;
        path.signals[s * 3 + 1] = 0;
        path.signals[s * 3 + 2] = Math.sin(angle) * r;
      }
    }
    
    // Update inner field
    this.innerFieldMat.uniforms.uTime.value = time;
    this.innerFieldMat.uniforms.uIntensity.value = 0.2 + this.stateParamsCur.activity * 0.3;
    
    // Update nucleus
    const pulseVal = Math.sin(this.pulsePhase) * 0.1 * this.stateParamsCur.activity;
    for (const ring of this.nucleusRings) {
      (ring.material as THREE.ShaderMaterial).uniforms.uPulse.value = pulseVal;
      (ring.material as THREE.ShaderMaterial).uniforms.uIntensity.value = 0.5 + this.stateParamsCur.glowIntensity * 0.3;
    }
    this.nucleusGroup.scale.setScalar(1.0 + Math.sin(this.breathPhase) * 0.05 * this.stateParamsCur.activity);
    
    // Update markers
    (this.markerPoints.material as THREE.PointsMaterial).opacity = 0.4 + this.stateParamsCur.activity * 0.3;
    
    // Flash effect
    if (this.flashT >= 0) {
      this.flashT -= dt;
      const flashAlpha = Math.max(0, this.flashT / 0.4);
      for (const ring of this.nucleusRings) {
        (ring.material as THREE.ShaderMaterial).uniforms.uIntensity.value = 0.5 + flashAlpha * 0.8;
      }
    }
    
    // Error shake
    if (this.errorShake > 0) {
      this.errorShake -= dt;
      const shakeAmt = this.errorShake * 0.1;
      this.group.position.x = (Math.random() - 0.5) * shakeAmt;
      this.group.position.y = (Math.random() - 0.5) * shakeAmt;
    } else {
      this.group.position.x = 0;
      this.group.position.y = 0;
    }
  }

  dispose(): void {
    this.group.clear();
  }
}
