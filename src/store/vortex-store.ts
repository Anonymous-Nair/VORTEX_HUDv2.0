import { create } from "zustand";
import type {
  AgentDef,
  AgentRuntime,
  CameraMode,
  CoreState,
  EngineStats,
  HoloKind,
  HoloWindow,
  LogEntry,
  LogLevel,
  TabId,
  TelemetryFrame,
} from "../types";
import { bus } from "./event-bus";
import { AGENT_DEFS } from "../data/defaults";

const AGENTS_KEY = "vortex.agents.v2";

function loadAgents(): AgentDef[] {
  try {
    const raw = localStorage.getItem(AGENTS_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as AgentDef[];
      }
    }
  } catch {
    /* storage restricted — fall through to defaults */
  }
  return AGENT_DEFS.map((a) => ({ ...a, personality: { ...a.personality } }));
}

export function persistAgents(list: AgentDef[]): void {
  try {
    localStorage.setItem(AGENTS_KEY, JSON.stringify(list));
  } catch {
    /* non-fatal */
  }
}

function initialRoster(defs: AgentDef[]): AgentRuntime[] {
  return defs.map((d) => ({
    ...d,
    personality: { ...d.personality },
    status: "WORKING" as const,
    task: "Calibrating workstation",
    progress: Math.floor(Math.random() * 60),
    load: 40 + Math.floor(Math.random() * 40),
    mood: "NOMINAL",
  }));
}

let logId = 0;

interface VortexState {
  booted: boolean;
  tab: TabId;
  coreState: CoreState;
  cameraMode: CameraMode;
  selectedAgentId: string | null;
  agents: AgentRuntime[];
  agentDefs: AgentDef[];
  audioOn: boolean;
  holoOpen: boolean;
  holoWindows: HoloWindow[];
  holoZ: number;
  labOpen: boolean;
  debugOpen: boolean;
  stats: EngineStats;
  telemetry: TelemetryFrame;
  log: LogEntry[];
  tlPlaying: boolean;
  tlTime: number;
  tlSpeed: number;
  tlLoop: boolean;
  engineFailed: boolean;

  setBooted: (v: boolean) => void;
  setTab: (t: TabId) => void;
  setCoreState: (s: CoreState) => void;
  setCameraMode: (m: CameraMode) => void;
  selectAgent: (id: string | null) => void;
  updateAgentRuntime: (id: string, patch: Partial<AgentRuntime>) => void;
  setRosterRuntime: (list: AgentRuntime[]) => void;
  setAgentDefs: (list: AgentDef[]) => void;
  toggleAudio: () => void;
  setHoloOpen: (v: boolean) => void;
  openHolo: (kind: HoloKind) => void;
  closeHolo: (id: string) => void;
  minimizeHolo: (id: string) => void;
  focusHolo: (id: string) => void;
  moveHolo: (id: string, x: number, y: number) => void;
  resizeHolo: (id: string, w: number, h: number) => void;
  rotateHolo: (id: string, rot: number) => void;
  setLabOpen: (v: boolean) => void;
  setDebugOpen: (v: boolean) => void;
  setStats: (s: EngineStats) => void;
  setTelemetry: (t: TelemetryFrame) => void;
  pushLog: (level: LogLevel, tag: string, msg: string) => void;
  clearLog: () => void;
  setTimeline: (patch: Partial<{ playing: boolean; t: number; speed: number; loop: boolean }>) => void;
  setEngineFailed: (v: boolean) => void;
}

export const useVortex = create<VortexState>()((set, get) => ({
  booted: false,
  tab: "core",
  coreState: "IDLE",
  cameraMode: "ORBIT",
  selectedAgentId: null,
  agentDefs: loadAgents(),
  agents: initialRoster(loadAgents()),
  audioOn: false,
  holoOpen: false,
  holoWindows: [],
  holoZ: 10,
  labOpen: false,
  debugOpen: false,
  stats: { fps: 60, frameMs: 16.7, drawCalls: 0, triangles: 0, points: 0, resScale: 1 },
  telemetry: { t: 0, power: 62, temp: 312, packets: 120, latency: 21, throughput: 1.2 },
  log: [],
  tlPlaying: false,
  tlTime: 0,
  tlSpeed: 1,
  tlLoop: true,
  engineFailed: false,

  setBooted: (v) => set({ booted: v }),

  setTab: (t) => {
    if (get().tab !== t) set({ tab: t });
  },

  setCoreState: (s) => {
    const prev = get().coreState;
    if (prev === s) return;
    set({ coreState: s });
    bus.emit("CORE_STATE_CHANGED", { prev, next: s });
  },

  setCameraMode: (m) => {
    set({ cameraMode: m });
    bus.emit("CAMERA_SHOT", { mode: m });
  },

  selectAgent: (id) => set({ selectedAgentId: id }),

  updateAgentRuntime: (id, patch) =>
    set((st) => ({
      agents: st.agents.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    })),

  setRosterRuntime: (list) => set({ agents: list }),

  setAgentDefs: (list) => {
    persistAgents(list);
    set((st) => ({
      agentDefs: list,
      agents: list.map((d) => {
        const prev = st.agents.find((a) => a.id === d.id);
        return {
          ...d,
          personality: { ...d.personality },
          status: prev?.status ?? "STANDBY",
          task: prev?.task ?? "Awaiting directive",
          progress: prev?.progress ?? 0,
          load: prev?.load ?? 30,
          mood: prev?.mood ?? "NOMINAL",
        };
      }),
    }));
  },

  toggleAudio: () => set((st) => ({ audioOn: !st.audioOn })),
  setHoloOpen: (v) => set({ holoOpen: v }),

  openHolo: (kind) => {
    const st = get();
    const existing = st.holoWindows.find((w) => w.kind === kind);
    const z = st.holoZ + 1;
    if (existing) {
      set({
        holoOpen: true,
        holoZ: z,
        holoWindows: st.holoWindows.map((w) =>
          w.id === existing.id ? { ...w, z, minimized: false } : w
        ),
      });
      return;
    }
    const offsets: Record<HoloKind, [number, number]> = {
      terminal: [24, 60],
      telemetry: [380, 90],
      files: [90, 300],
    };
    const sizes: Record<HoloKind, [number, number]> = {
      terminal: [330, 220],
      telemetry: [300, 240],
      files: [310, 230],
    };
    const [x, y] = offsets[kind];
    const [w, h] = sizes[kind];
    const win: HoloWindow = { id: `holo-${kind}`, kind, x, y, w, h, z, minimized: false, rot: 0 };
    set({ holoOpen: true, holoZ: z, holoWindows: [...st.holoWindows, win] });
  },

  closeHolo: (id) =>
    set((st) => ({ holoWindows: st.holoWindows.filter((w) => w.id !== id) })),

  minimizeHolo: (id) =>
    set((st) => ({
      holoWindows: st.holoWindows.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized } : w
      ),
    })),

  focusHolo: (id) =>
    set((st) => {
      const z = st.holoZ + 1;
      return {
        holoZ: z,
        holoWindows: st.holoWindows.map((w) => (w.id === id ? { ...w, z } : w)),
      };
    }),

  moveHolo: (id, x, y) =>
    set((st) => ({
      holoWindows: st.holoWindows.map((w) => (w.id === id ? { ...w, x, y } : w)),
    })),

  resizeHolo: (id, w, h) =>
    set((st) => ({
      holoWindows: st.holoWindows.map((win) => (win.id === id ? { ...win, w, h } : win)),
    })),

  rotateHolo: (id, rot) =>
    set((st) => ({
      holoWindows: st.holoWindows.map((win) => (win.id === id ? { ...win, rot } : win)),
    })),

  setLabOpen: (v) => set({ labOpen: v }),
  setDebugOpen: (v) => set({ debugOpen: v }),
  setStats: (s) => set({ stats: s }),
  setTelemetry: (t) => set({ telemetry: t }),

  pushLog: (level, tag, msg) =>
    set((st) => {
      const now = new Date();
      const time = `${String(now.getUTCHours()).padStart(2, "0")}:${String(
        now.getUTCMinutes()
      ).padStart(2, "0")}:${String(now.getUTCSeconds()).padStart(2, "0")}`;
      const entry: LogEntry = { id: ++logId, time, level, tag, msg };
      const log = [...st.log, entry];
      if (log.length > 64) log.splice(0, log.length - 64);
      return { log };
    }),

  clearLog: () => set({ log: [] }),

  setTimeline: (patch) =>
    set((st) => ({
      tlPlaying: patch.playing ?? st.tlPlaying,
      tlTime: patch.t ?? st.tlTime,
      tlSpeed: patch.speed ?? st.tlSpeed,
      tlLoop: patch.loop ?? st.tlLoop,
    })),

  setEngineFailed: (v) => set({ engineFailed: v }),
}));
