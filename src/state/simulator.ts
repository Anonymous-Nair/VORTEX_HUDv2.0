import type { CoreState, TimelineCue } from "../types";
import { bus } from "../store/event-bus";
import { useVortex } from "../store/vortex-store";
import { synth } from "../audio/synth";
import { getEngine } from "../render/engine";
import { GpuTimer, TelemetryModel } from "../utils/perf";
import { clamp, randRange } from "../utils/math";
import { RESPONSES, TIMELINE_CUES } from "../data/defaults";
import { missionActions } from "./missions";
import { memoryProvider } from "./memory";

/* ============================================================
   DEMO SIMULATOR — cause-and-effect conductor.
   Drives the 30 s cinematic timeline, ambient event weather,
   telemetry synthesis and the operator command interpreter.
   ============================================================ */

export const telemetryModel = new TelemetryModel();
export const gpuTimer = new GpuTimer();

export const TIMELINE_DURATION = 30;

class DemoSimulator {
  private initialized = false;
  private cuePtr = 0;
  private accModel = 0;
  private accTele = 0;
  private ambTimer: ReturnType<typeof setTimeout> | null = null;
  private taskToken = 0;
  scrubbing = false;
  private simTime = 0;

  init(): void {
    if (this.initialized) return;
    this.initialized = true;

    /* ---- core state reactions: every state has audible + visual consequence ---- */
    bus.on("CORE_STATE_CHANGED", ({ next }) => {
      if (this.scrubbing) return;
      switch (next) {
        case "LISTENING":
          synth.chime(880);
          break;
        case "THINKING":
          synth.setDroneIntensity(0.7);
          break;
        case "TOOL_USE":
          synth.zap();
          getEngine()?.net.cascade();
          break;
        case "SPEAKING":
          synth.speak(1.4);
          bus.emit("AUDIO_PEAK", { level: 0.8 });
          break;
        case "SUCCESS":
          synth.thump();
          synth.setDroneIntensity(0.35);
          break;
        case "ERROR":
          synth.alarm();
          break;
        case "IDLE":
          synth.setDroneIntensity(0.3);
          break;
      }
    });

    bus.on("NETWORK_SPIKE", ({ magnitude }) => {
      getEngine()?.net.burst(Math.floor(120 * magnitude));
      getEngine()?.requestShot({ kind: "tactical-swoop" });
      useVortex.getState().pushLog("warn", "NET", `traffic spike ×${magnitude.toFixed(1)} — director swoops to tactical`);
    });

    bus.on("SYSTEM_WARNING", ({ msg }) => {
      useVortex.getState().pushLog("warn", "SYS", msg);
    });

    bus.on("MEMORY_NODE_CREATED", () => {
      /* graph self-reorganizes via force layout; log already emitted by provider */
    });

    this.scheduleAmbient();
    memoryProvider.start();
  }

  /* ---------------- ambient event weather ---------------- */

  private scheduleAmbient(): void {
    const loop = () => {
      this.ambTimer = setTimeout(() => {
        if (!document.hidden) this.ambientOnce();
        loop();
      }, randRange(3600, 7200));
    };
    loop();
  }

  private ambientOnce(): void {
    const st = useVortex.getState();
    if (st.tlPlaying) return;
    const roll = Math.random();
    if (roll < 0.3) {
      bus.emit("NETWORK_PACKET_ARRIVED", { layer: Math.floor(Math.random() * 10) });
      getEngine()?.net.burst(24);
    } else if (roll < 0.45) {
      bus.emit("MISSION_PULSE", { edgeId: "" });
      missionActions.fireRandomPulse();
    } else if (roll < 0.6) {
      bus.emit("SYSTEM_WARNING", {
        msg: "thermal envelope drift +2.1K — containment field re-tuned",
      });
    } else if (roll < 0.75) {
      getEngine()?.ambient.stir();
      st.pushLog("info", "NET", "packet convoy routed through layer 7 — latency nominal");
    } else if (roll < 0.88) {
      st.pushLog("info", "SWARM", "micro-briefing completed at the strategy table");
    } else {
      st.pushLog("sys", "ARC", "plasma conduit self-calibration — turbulence index 0.31");
    }
  }

  /* ---------------- per-frame tick (driven by engine rAF) ---------------- */

  frameTick(dt: number): void {
    const st = useVortex.getState();
    this.simTime += dt;

    if (st.tlPlaying) {
      const prev = st.tlTime;
      let t = prev + dt * st.tlSpeed;
      if (t >= TIMELINE_DURATION) {
        if (st.tlLoop) {
          t = t % TIMELINE_DURATION;
          this.cuePtr = 0;
        } else {
          t = TIMELINE_DURATION;
          st.setTimeline({ playing: false, t });
        }
      }
      for (const cue of TIMELINE_CUES) {
        if (cue.t > prev && cue.t <= t) this.fireCue(cue);
      }
      st.setTimeline({ t });
    }

    /* telemetry synthesis */
    this.accModel += dt;
    this.accTele += dt;
    const cs = st.coreState;
    const boost =
      cs === "THINKING" ? 18 : cs === "TOOL_USE" ? 26 : cs === "SPEAKING" ? 12 : cs === "ERROR" ? -8 : 0;
    const eng = getEngine();
    const net = eng ? eng.net.getStats() : { active: 0, throughput: 1 };
    const frame = {
      t: this.simTime,
      power: clamp(62 + 16 * Math.sin(this.simTime * 0.21) + boost + Math.sin(this.simTime * 1.7) * 4, 8, 100),
      temp: clamp(312 + 14 * Math.sin(this.simTime * 0.13 + 1) + boost * 0.5 + net.active * 0.02, 280, 420),
      packets: clamp(120 + net.active * 2.4 + 60 * Math.sin(this.simTime * 0.4), 0, 999),
      latency: clamp(21 + net.active * 0.05 + 5 * Math.sin(this.simTime * 0.9), 4, 120),
      throughput: clamp(1.2 + net.throughput * 0.14 + 0.5 * Math.sin(this.simTime * 0.31), 0.1, 9.9),
    };
    if (this.accModel >= 0.05) {
      telemetryModel.push(frame);
      gpuTimer.report(st.stats.frameMs);
      this.accModel = 0;
    }
    if (this.accTele >= 0.2) {
      st.setTelemetry(frame);
      this.accTele = 0;
    }
  }

  /* ---------------- timeline cues ---------------- */

  private fireCue(cue: TimelineCue): void {
    const st = useVortex.getState();
    bus.emit("TIMELINE_CUE", { kind: cue.kind, value: cue.value });
    switch (cue.kind) {
      case "log":
        st.pushLog("sys", "DIRECTOR", cue.value);
        break;
      case "state":
        st.setCoreState(cue.value as CoreState);
        break;
      case "tab":
        st.setTab(cue.value as typeof st.tab);
        break;
      case "burst": {
        const n = parseInt(cue.value, 10) || 100;
        getEngine()?.ambient.burstAt(n, "#ffb700");
        getEngine()?.net.burst(Math.floor(n * 0.8));
        synth.zap();
        break;
      }
      case "spike":
        bus.emit("NETWORK_SPIKE", { magnitude: parseFloat(cue.value) || 0.8 });
        break;
      case "brief":
        getEngine()?.office.triggerBriefing();
        break;
      case "pulse":
        missionActions.firePulseWave();
        break;
      case "memory":
        memoryProvider.burst(3);
        break;
      case "speak":
        st.setCoreState("SPEAKING");
        st.pushLog("ok", "VORTEX", cue.value);
        break;
    }
  }

  /** Idempotent scrub: re-derive state from the last tab/state cue ≤ t. */
  scrubTo(t: number): void {
    const st = useVortex.getState();
    this.scrubbing = true;
    let lastTab: string | null = null;
    let lastState: CoreState | null = null;
    for (const cue of TIMELINE_CUES) {
      if (cue.t > t) break;
      if (cue.kind === "tab") lastTab = cue.value;
      if (cue.kind === "state") lastState = cue.value as CoreState;
    }
    st.setTimeline({ t });
    if (lastTab) st.setTab(lastTab as typeof st.tab);
    if (lastState && st.coreState !== lastState) st.setCoreState(lastState);
    this.scrubbing = false;
  }

  /* ---------------- operator actions ---------------- */

  togglePlay(): void {
    const st = useVortex.getState();
    if (!st.tlPlaying && st.tlTime >= TIMELINE_DURATION - 0.01) {
      st.setTimeline({ t: 0 });
      this.cuePtr = 0;
    }
    st.setTimeline({ playing: !st.tlPlaying });
    if (useVortex.getState().tlPlaying) {
      st.pushLog("sys", "DIRECTOR", "cinematic sequence engaged — camera authority transferred");
    } else {
      st.pushLog("sys", "DIRECTOR", "camera authority returned to operator");
    }
  }

  injectTask(raw: string): void {
    const st = useVortex.getState();
    const token = ++this.taskToken;
    const at = (ms: number, fn: () => void) =>
      window.setTimeout(() => {
        if (this.taskToken === token) fn();
      }, ms);

    st.pushLog("info", "CMD", `directive received: “${raw}”`);
    st.setCoreState("LISTENING");

    at(550, () => {
      st.setCoreState("THINKING");
      st.pushLog("info", "CORTEX", "reasoning across 10 layers — attention heads engaged");
    });
    at(1800, () => {
      st.setCoreState("TOOL_USE");
      const agent = st.agents[Math.floor(Math.random() * st.agents.length)];
      if (agent) {
        bus.emit("AGENT_TASK_ASSIGNED", { agentId: agent.id, task: raw });
        st.pushLog("info", "SWARM", `task delegated → ${agent.codename} (${agent.role})`);
      }
    });
    at(3100, () => {
      st.setCoreState("SPEAKING");
      const resp = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      st.pushLog("ok", "VORTEX", resp);
    });
    at(4700, () => {
      st.setCoreState("SUCCESS");
      getEngine()?.ambient.burstAt(90, "#00ff66");
    });
    at(6000, () => {
      if (useVortex.getState().coreState === "SUCCESS") {
        useVortex.getState().setCoreState("IDLE");
      }
    });
  }

  netSpike(mag = 0.9): void {
    bus.emit("NETWORK_SPIKE", { magnitude: mag });
  }

  triggerErrorDemo(): void {
    const st = useVortex.getState();
    st.setCoreState("ERROR");
    st.pushLog("err", "SYS", "simulated containment fault — magnetic field harmonics unstable");
    window.setTimeout(() => {
      if (useVortex.getState().coreState === "ERROR") {
        useVortex.getState().setCoreState("SUCCESS");
        useVortex.getState().pushLog("ok", "SYS", "fault isolated and purged — harmonics restored");
        window.setTimeout(() => {
          if (useVortex.getState().coreState === "SUCCESS")
            useVortex.getState().setCoreState("IDLE");
        }, 1400);
      }
    }, 2200);
  }

  showHumanFace(): void {
    const st = useVortex.getState();
    st.setTab("intel");
    st.pushLog("sys", "VORTEX", "manifesting intelligence lattice — particle humanoid convergence");
  }

  handleCommand(rawIn: string): void {
    const raw = rawIn.trim();
    if (!raw) return;
    const st = useVortex.getState();
    bus.emit("COMMAND_ISSUED", { raw });
    st.pushLog("sys", "OPERATOR", `> ${raw}`);
    const cmd = raw.toLowerCase();

    if (cmd === "help") {
      st.pushLog("sys", "VORTEX", "commands: status · human face · spike · briefing · agents · missions · network · memory · error · camera <mode> · clear");
      return;
    }
    if (cmd === "clear") {
      st.clearLog();
      return;
    }
    if (cmd === "status") {
      st.pushLog("info", "VORTEX", `core ${st.coreState} · ${st.agents.length} agents · ${st.stats.fps.toFixed(0)} fps · uplink SECURE`);
      return;
    }
    if (cmd.includes("face") || cmd.includes("human")) {
      this.showHumanFace();
      return;
    }
    if (cmd.includes("spike")) {
      this.netSpike();
      return;
    }
    if (cmd.includes("brief")) {
      getEngine()?.office.triggerBriefing();
      st.setTab("agents");
      st.pushLog("info", "SWARM", "all units summoned to the strategy table");
      return;
    }
    if (cmd.includes("error") || cmd.includes("fault")) {
      this.triggerErrorDemo();
      return;
    }
    if (cmd === "agents" || cmd === "office") {
      st.setTab("agents");
      return;
    }
    if (cmd === "missions") {
      st.setTab("missions");
      return;
    }
    if (cmd === "network" || cmd === "cortex") {
      st.setTab("network");
      return;
    }
    if (cmd === "memory" || cmd === "vault") {
      st.setTab("memory");
      return;
    }
    if (cmd === "pulse") {
      st.setTab("missions");
      missionActions.firePulseWave();
      return;
    }
    if (cmd.startsWith("camera ")) {
      const mode = cmd.slice(7).trim().toUpperCase().replace(" ", "_");
      const valid = ["FREE", "ORBIT", "TACTICAL", "AGENT_FOLLOW", "WORKSTATION_FOCUS", "TASK_TRACK"];
      if (valid.includes(mode)) {
        st.setCameraMode(mode as typeof st.cameraMode);
        st.pushLog("info", "DIRECTOR", `camera authority → ${mode}`);
      } else {
        st.pushLog("warn", "DIRECTOR", `unknown shot “${mode}”`);
      }
      return;
    }
    this.injectTask(raw);
  }

  dispose(): void {
    if (this.ambTimer) clearTimeout(this.ambTimer);
    memoryProvider.stop();
  }
}

export const simulator = new DemoSimulator();
