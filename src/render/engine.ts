import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { CameraMode, DirectorShot, TabId } from "../types";
import { useVortex } from "../store/vortex-store";
import { useCoreSettings } from "../store/settings";
import { bus } from "../store/event-bus";
import { synth } from "../audio/synth";
import { CoreArc } from "./core-arc";
import { AmbientParticles, AMBIENT_TOTAL, HUMANOID_COUNT, HumanoidParticles } from "./particles";
import { OfficeScene } from "./office";
import { NetworkViz } from "./network";
import { CAMERA_KEYS } from "../data/defaults";
import { FpsMeter } from "../utils/perf";
import { clamp, damp, lerp, smoothstep } from "../utils/math";

/* ============================================================
   VORTEX RENDER ENGINE
   Single WebGL2 pipeline · filmic tonemapping · UnrealBloom ·
   Bokeh depth-of-field · adaptive resolution scaling ·
   live Core Control Lab parameter feed · Cinematic Director
   Camera AI (FREE / ORBIT / TACTICAL / AGENT_FOLLOW /
   WORKSTATION_FOCUS / TASK_TRACK / DIRECTOR / CINEMATIC).
   ============================================================ */

interface TabFrame {
  center: THREE.Vector3;
  dist: number;
  pitch: number;
}

const TAB_FRAMES: Record<TabId, TabFrame> = {
  core: { center: new THREE.Vector3(0, 2.4, 0), dist: 10.2, pitch: 0.32 },
  agents: { center: new THREE.Vector3(0, 0.8, 0), dist: 12.6, pitch: 0.74 },
  intel: { center: new THREE.Vector3(0, 1.35, 0), dist: 5.8, pitch: 0.12 },
  network: { center: new THREE.Vector3(0, 1.8, 0), dist: 15.5, pitch: 0.2 },
  missions: { center: new THREE.Vector3(0, 2.2, 0), dist: 12.5, pitch: 0.42 },
  memory: { center: new THREE.Vector3(0, 2.2, 0), dist: 12.5, pitch: 0.42 },
};

export class VortexEngine {
  readonly arc: CoreArc;
  readonly ambient: AmbientParticles;
  readonly humanoid: HumanoidParticles;
  readonly office: OfficeScene;
  readonly net: NetworkViz;

  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private bloom: UnrealBloomPass;
  private bokeh: BokehPass | null = null;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private clock = new THREE.Clock();
  private time = 0;
  private simTime = 0;
  private raf = 0;
  private fps = new FpsMeter();
  private statsAcc = 0;
  private resScale = 1;
  private resAcc = 0;
  private disposed = false;

  private pos = new THREE.Vector3(0, 3.4, 10.8);
  private look = new THREE.Vector3(0, 2.4, 0);
  private fov = 50;
  private yaw = 0;
  private pitch = 0.32;
  private dist = 10.2;
  private center = new THREE.Vector3(0, 2.4, 0);
  private shake = 0;
  private shotOverride: { mode: CameraMode; until: number } | null = null;
  private lastCoreState = "";
  private lastTab: TabId = "core";
  private dragging = false;
  private lastPointer = { x: 0, y: 0 };
  private canvas: HTMLCanvasElement;
  private unsubscribers: Array<() => void> = [];

  /* control-lab caches */
  private lastTint = "";
  private lastEmissive = -1;

  onFrame: ((dt: number) => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 220);
    this.camera.position.copy(this.pos);

    this.scene.fog = new THREE.FogExp2(0x050507, 0.024);
    this.scene.background = new THREE.Color(0x050507);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new RoomEnvironment();
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    pmrem.dispose();
    this.scene.environmentIntensity = 0.42;

    /* lights */
    const hemi = new THREE.HemisphereLight(0x25324a, 0x050507, 0.75);
    const key = new THREE.DirectionalLight(0xffe3b0, 1.5);
    key.position.set(7, 11, 5);
    const rim = new THREE.DirectionalLight(0x00f0ff, 0.8);
    rim.position.set(-8, 4, -7);
    this.scene.add(hemi, key, rim);

    /* subsystems */
    this.arc = new CoreArc();
    this.ambient = new AmbientParticles();
    this.humanoid = new HumanoidParticles();
    this.office = new OfficeScene();
    this.net = new NetworkViz();
    this.scene.add(this.arc.group, this.ambient.group, this.humanoid.group, this.office.group, this.net.group);
    this.humanoid.group.visible = false;
    this.office.group.visible = false;
    this.net.group.visible = false;

    /* post — bloom matrix + depth-of-field */
    const rt = new THREE.WebGLRenderTarget(2, 2, { samples: 4, type: THREE.HalfFloatType });
    this.composer = new EffectComposer(this.renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    try {
      this.bokeh = new BokehPass(this.scene, this.camera, {
        focus: 10,
        aperture: 0.00016,
        maxblur: 0.0045,
      });
      this.bokeh.enabled = false;
      this.composer.addPass(this.bokeh);
    } catch (err) {
      console.warn("[vortex] BokehPass unavailable — DoF disabled.", err);
      this.bokeh = null;
    }
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1024, 1024), 0.85, 0.55, 0.3);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.applySettings(true);
    this.applyTab(useVortex.getState().tab, true);
    this.resize();
    this.bindPointer();

    this.unsubscribers.push(
      bus.on("NETWORK_SPIKE", ({ magnitude }) => {
        this.shake = Math.max(this.shake, 0.5 + magnitude * 0.5);
      }),
      bus.on("AUDIO_PEAK", () => {
        this.arc.pulse();
      }),
      bus.on("CORE_STATE_CHANGED", ({ next }) => {
        this.arc.setState(next);
      })
    );

    this.clock.start();
    const loop = () => {
      if (this.disposed) return;
      this.raf = requestAnimationFrame(loop);
      this.update();
    };
    loop();
  }

  /* ---------------- public API ---------------- */

  setTab(tab: TabId): void {
    this.applyTab(tab, false);
  }

  private applyTab(tab: TabId, instant: boolean): void {
    this.arc.group.visible = tab === "core" || tab === "intel";
    this.arc.setArcVisible(tab === "core");
    this.office.group.visible = tab === "agents";
    this.net.group.visible = tab === "network";
    this.humanoid.group.visible = tab === "intel";
    this.humanoid.setMorphTarget(tab === "intel" ? 1 : 0);

    const frame = TAB_FRAMES[tab];
    this.center.copy(frame.center);
    this.dist = frame.dist;
    this.pitch = frame.pitch;
    if (tab === "network") this.yaw = -0.55;
    if (instant) {
      this.pos.set(frame.center.x, frame.center.y + Math.sin(frame.pitch) * frame.dist, frame.center.z + Math.cos(frame.pitch) * frame.dist * Math.cos(this.yaw));
      this.look.copy(frame.center);
    }
  }

  requestShot(shot: DirectorShot): void {
    const st = useVortex.getState();
    switch (shot.kind) {
      case "tactical-swoop":
        this.shotOverride = { mode: "TACTICAL", until: this.time + 3 };
        break;
      case "agent-focus":
        st.selectAgent(shot.agentId);
        st.setCameraMode("AGENT_FOLLOW");
        break;
      case "workstation":
        st.selectAgent(shot.agentId);
        st.setCameraMode("WORKSTATION_FOCUS");
        break;
      case "network-run":
        st.setCameraMode("TASK_TRACK");
        break;
    }
  }

  /** pushes Core Control Lab parameters into the live pipeline */
  private applySettings(force = false): void {
    const s = useCoreSettings.getState();
    this.bloom.strength = s.bloomStrength;
    this.bloom.threshold = s.bloomThreshold;
    this.bloom.radius = s.bloomRadius;
    this.renderer.toneMappingExposure = s.exposure;
    this.ambient.setDensity(s.dustDensity, s.streamDensity);
    this.ambient.setScale(s.dustScale, s.streamScale);
    if (force || s.tint !== this.lastTint) {
      this.lastTint = s.tint;
      this.arc.setTint(s.tint);
    }
    if (force || s.emissive !== this.lastEmissive) {
      this.lastEmissive = s.emissive;
      this.arc.setEmissive(s.emissive);
    }
  }

  private bindPointer(): void {
    const c = this.canvas;
    c.addEventListener("pointerdown", (e) => {
      this.dragging = true;
      this.lastPointer = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("pointermove", (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      this.lastPointer = { x: e.clientX, y: e.clientY };
      this.yaw -= dx * 0.005;
      this.pitch = clamp(this.pitch + dy * 0.004, -0.2, 1.35);
      const st = useVortex.getState();
      if (st.cameraMode !== "FREE" && st.cameraMode !== "ORBIT") {
        st.setCameraMode("FREE");
        st.pushLog("info", "DIRECTOR", "operator seized camera authority → FREE");
      }
    });
    window.addEventListener("pointerup", () => {
      this.dragging = false;
    });
    c.addEventListener("wheel", (e) => {
      e.preventDefault();
      this.dist = clamp(this.dist * (1 + e.deltaY * 0.0011), 3.2, 34);
    }, { passive: false });
  }

  /* ---------------- camera director ---------------- */

  private cameraKeyAt(t: number): { pos: THREE.Vector3; look: THREE.Vector3; fov: number } {
    const keys = CAMERA_KEYS;
    if (t <= keys[0].t) {
      const k = keys[0];
      return { pos: new THREE.Vector3(...k.pos), look: new THREE.Vector3(...k.look), fov: k.fov };
    }
    for (let i = 0; i < keys.length - 1; i++) {
      const a = keys[i];
      const b = keys[i + 1];
      if (t >= a.t && t <= b.t) {
        const u = smoothstep((t - a.t) / Math.max(0.001, b.t - a.t));
        return {
          pos: new THREE.Vector3(...a.pos).lerp(new THREE.Vector3(...b.pos), u),
          look: new THREE.Vector3(...a.look).lerp(new THREE.Vector3(...b.look), u),
          fov: lerp(a.fov, b.fov, u),
        };
      }
    }
    const k = keys[keys.length - 1];
    return { pos: new THREE.Vector3(...k.pos), look: new THREE.Vector3(...k.look), fov: k.fov };
  }

  private updateCamera(dt: number): void {
    const st = useVortex.getState();
    const s = useCoreSettings.getState();
    let mode: CameraMode = st.cameraMode;
    if (st.tlPlaying) mode = "DIRECTOR";
    else if (this.shotOverride) {
      if (this.time < this.shotOverride.until) mode = this.shotOverride.mode;
      else this.shotOverride = null;
    }

    const goalPos = new THREE.Vector3();
    const goalLook = new THREE.Vector3();
    let goalFov = this.fov;

    switch (mode) {
      case "FREE":
      case "ORBIT": {
        if (mode === "ORBIT") this.yaw += dt * 0.1;
        goalPos.set(
          this.center.x + Math.cos(this.pitch) * Math.sin(this.yaw) * this.dist,
          this.center.y + Math.sin(this.pitch) * this.dist,
          this.center.z + Math.cos(this.pitch) * Math.cos(this.yaw) * this.dist
        );
        goalLook.copy(this.center);
        goalFov = st.tab === "intel" ? 42 : 50;
        break;
      }
      case "TACTICAL": {
        const f = TAB_FRAMES[st.tab];
        goalPos.set(f.center.x + 2.5, f.center.y + f.dist * 0.85, f.center.z + f.dist * 0.55);
        goalLook.copy(f.center);
        goalFov = 55;
        break;
      }
      case "AGENT_FOLLOW": {
        const p = st.selectedAgentId ? this.office.getAgentPosition(st.selectedAgentId) : null;
        if (p) {
          goalPos.set(p.x + 2.6, p.y + 2.1, p.z + 2.9);
          goalLook.set(p.x, p.y + 1.2, p.z);
        } else {
          goalPos.copy(TAB_FRAMES.agents.center).add(new THREE.Vector3(0, 8, 9));
          goalLook.copy(TAB_FRAMES.agents.center);
        }
        goalFov = 44;
        break;
      }
      case "WORKSTATION_FOCUS": {
        const id = st.selectedAgentId;
        const d = id ? this.office.getDeskPosition(id) : null;
        if (d) {
          const inward = d.clone().normalize().multiplyScalar(-2.4);
          goalPos.set(d.x + inward.x, 1.7, d.z + inward.z);
          goalLook.set(d.x * 0.86, 1.45, d.z * 0.86);
        } else {
          goalPos.set(0, 6, 8);
          goalLook.set(0, 1, 0);
        }
        goalFov = 40;
        break;
      }
      case "TASK_TRACK": {
        const front = -10 + ((this.time * 1.1) % 1) * 20;
        goalPos.set(front * 0.55, 4.6, 9.5);
        goalLook.set(front, 1.8, 0);
        goalFov = 52;
        break;
      }
      case "DIRECTOR":
      case "CINEMATIC": {
        const k = this.cameraKeyAt(st.tlTime);
        goalPos.copy(k.pos);
        goalLook.copy(k.look);
        goalFov = k.fov;
        break;
      }
    }

    const lam = mode === "DIRECTOR" || mode === "CINEMATIC" ? 3.4 : 4.2;
    this.pos.x = damp(this.pos.x, goalPos.x, lam, dt);
    this.pos.y = damp(this.pos.y, goalPos.y, lam, dt);
    this.pos.z = damp(this.pos.z, goalPos.z, lam, dt);
    this.look.x = damp(this.look.x, goalLook.x, lam + 1, dt);
    this.look.y = damp(this.look.y, goalLook.y, lam + 1, dt);
    this.look.z = damp(this.look.z, goalLook.z, lam + 1, dt);
    this.fov = damp(this.fov, goalFov, 3, dt);

    this.shake = damp(this.shake, 0, 3.2, dt);
    const sh = this.shake * this.shake;
    this.camera.position.set(
      this.pos.x + (Math.random() - 0.5) * sh * 0.24,
      this.pos.y + (Math.random() - 0.5) * sh * 0.18,
      this.pos.z + (Math.random() - 0.5) * sh * 0.24
    );
    this.camera.lookAt(this.look);
    if (Math.abs(this.camera.fov - this.fov) > 0.01) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }

    /* depth-of-field — dolly focus onto workstation shots */
    if (this.bokeh) {
      const wantDof = mode === "WORKSTATION_FOCUS" && s.dof;
      this.bokeh.enabled = wantDof;
      if (wantDof) {
        const u = this.bokeh.uniforms as Record<string, { value: number }>;
        const focusDist = this.camera.position.distanceTo(this.look);
        if (u["focus"]) u["focus"].value = damp(u["focus"].value, focusDist, 6, dt);
      }
    }
  }

  /* ---------------- main loop ---------------- */

  private update(): void {
    const dt = clamp(this.clock.getDelta(), 0, 0.05);
    this.time += dt;
    this.fps.tick();

    const st = useVortex.getState();
    const settings = useCoreSettings.getState();
    const sdt = dt * clamp(settings.speed, 0.1, 5);
    this.simTime += sdt;
    this.applySettings();

    const levels = synth.getLevels();

    if (st.tab !== this.lastTab) {
      this.lastTab = st.tab;
      this.applyTab(st.tab, false);
    }
    if (st.coreState !== this.lastCoreState) {
      this.lastCoreState = st.coreState;
      this.arc.setState(st.coreState);
    }

    this.arc.update(sdt, this.simTime, levels, st.coreState);
    this.ambient.update(sdt, this.simTime, levels);
    if (this.humanoid.group.visible || this.humanoid.morphValue() > 0.01) {
      this.humanoid.update(sdt, this.simTime, levels);
    }
    if (this.office.group.visible) {
      this.office.update(dt, this.time);
    } else {
      this.office.updateSimOnly(dt);
    }
    if (this.net.group.visible) {
      this.net.update(dt, this.time);
    }

    if (this.onFrame) this.onFrame(dt);
    this.updateCamera(dt);
    this.composer.render();

    /* stats + adaptive resolution */
    this.statsAcc += dt;
    this.resAcc += dt;
    if (this.statsAcc > 0.25) {
      this.statsAcc = 0;
      const info = this.renderer.info.render;
      useVortex.getState().setStats({
        fps: this.fps.fps,
        frameMs: this.fps.frameMs,
        drawCalls: info.calls,
        triangles: info.triangles,
        points:
          AMBIENT_TOTAL +
          this.ambient.activeSparks() +
          (this.humanoid.group.visible ? HUMANOID_COUNT : 0) +
          this.net.getStats().active,
        resScale: this.resScale,
      });
    }
    if (this.resAcc > 2.2) {
      this.resAcc = 0;
      const fpsNow = this.fps.fps;
      if (fpsNow < 47 && this.resScale > 0.62) {
        this.resScale = Math.max(0.62, this.resScale - 0.14);
        this.applyPixelRatio();
      } else if (fpsNow > 105 && this.resScale < 1.5) {
        this.resScale = Math.min(1.5, this.resScale + 0.1);
        this.applyPixelRatio();
      }
    }
  }

  private applyPixelRatio(): void {
    const base = Math.min(window.devicePixelRatio || 1, 1.75);
    this.renderer.setPixelRatio(base * this.resScale);
    this.resize();
  }

  resize(): void {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.unsubscribers.forEach((u) => u());
    this.renderer.dispose();
  }
}

/* ---------------- singleton ---------------- */

let instance: VortexEngine | null = null;

export function createEngine(canvas: HTMLCanvasElement): VortexEngine | null {
  if (instance) return instance;
  try {
    instance = new VortexEngine(canvas);
    return instance;
  } catch (err) {
    console.error("[vortex] WebGL2 pipeline failed — fallback engaged.", err);
    useVortex.getState().setEngineFailed(true);
    return null;
  }
}

export function getEngine(): VortexEngine | null {
  return instance;
}

export function destroyEngine(): void {
  if (instance) {
    instance.dispose();
    instance = null;
  }
}
