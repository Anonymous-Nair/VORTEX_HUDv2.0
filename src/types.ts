/* ============================================================
   VORTEX_HUD Ω — GLOBAL TYPE CONTRACTS
   Strict discriminated unions + explicit interfaces. Zero `any`.
   ============================================================ */

export type CoreState =
  | "IDLE"
  | "LISTENING"
  | "THINKING"
  | "TOOL_USE"
  | "SPEAKING"
  | "ERROR"
  | "SUCCESS";

export type TabId = "core" | "agents" | "intel" | "missions" | "network" | "memory";

export type CameraMode =
  | "FREE"
  | "ORBIT"
  | "TACTICAL"
  | "AGENT_FOLLOW"
  | "WORKSTATION_FOCUS"
  | "TASK_TRACK"
  | "DIRECTOR"
  | "CINEMATIC";

export type AgentRole =
  | "STRATEGIST"
  | "RESEARCHER"
  | "CODER"
  | "ANALYST"
  | "SECURITY"
  | "CREATIVE"
  | "AUTOMATION"
  | "EXECUTIVE";

export type AgentStatus = "WORKING" | "TRANSIT" | "BRIEFING" | "SCANNING" | "STANDBY";

export interface AgentPersonality {
  /** 0..1 — dwell time / deep work tendency */
  focus: number;
  /** 0..1 — task throughput multiplier */
  drive: number;
  /** 0..1 — likelihood to join briefings / collaborations */
  sociability: number;
}

export interface AgentDef {
  id: string;
  name: string;
  codename: string;
  role: AgentRole;
  department: string;
  color: string;
  /** walk speed multiplier 0.6 .. 2.0 */
  speed: number;
  personality: AgentPersonality;
  workstation: number;
}

export interface AgentRuntime extends AgentDef {
  status: AgentStatus;
  task: string;
  progress: number;
  load: number;
  mood: string;
}

export type LogLevel = "info" | "ok" | "warn" | "err" | "sys";

export interface LogEntry {
  id: number;
  time: string;
  level: LogLevel;
  tag: string;
  msg: string;
}

export interface TelemetryFrame {
  t: number;
  power: number;
  temp: number;
  packets: number;
  latency: number;
  throughput: number;
}

export type MissionStatus = "PENDING" | "ACTIVE" | "DONE" | "BLOCKED";

export interface MissionNode {
  id: string;
  title: string;
  status: MissionStatus;
  x: number;
  y: number;
}

export interface MissionEdge {
  id: string;
  from: string;
  to: string;
}

export type TimelineCueKind =
  | "log"
  | "state"
  | "tab"
  | "burst"
  | "spike"
  | "brief"
  | "pulse"
  | "memory"
  | "speak";

export interface TimelineCue {
  t: number;
  kind: TimelineCueKind;
  value: string;
}

export interface CameraKey {
  t: number;
  pos: [number, number, number];
  look: [number, number, number];
  fov: number;
}

export type HoloKind = "terminal" | "telemetry" | "files";

export interface HoloWindow {
  id: string;
  kind: HoloKind;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  /** degrees — driven by ROTATE gestures / alt-drag */
  rot: number;
}

export type GestureKind = "PINCH" | "GRAB" | "ZOOM" | "ROTATE" | "SWIPE";

export type MemoryNodeType = "note" | "folder" | "tag";

export interface MemoryNode {
  id: string;
  title: string;
  type: MemoryNodeType;
  body: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  born: number;
}

export interface MemoryEdge {
  id: string;
  from: string;
  to: string;
  kind: "link" | "tag" | "folder";
}

/* ------------------------------------------------------------
   TYPED GLOBAL EVENT BUS CONTRACT
   Every major animation has a verifiable cause-and-effect trigger.
   ------------------------------------------------------------ */
export interface VortexEventMap {
  CORE_STATE_CHANGED: { prev: CoreState; next: CoreState };
  AGENT_TASK_ASSIGNED: { agentId: string; task: string };
  AGENT_STATUS_CHANGED: { agentId: string; status: AgentStatus };
  NETWORK_PACKET_ARRIVED: { layer: number };
  NETWORK_SPIKE: { magnitude: number };
  MISSION_UPDATED: { kind: "add" | "remove" | "edit" | "layout" | "link" };
  MISSION_PULSE: { edgeId: string };
  MEMORY_NODE_CREATED: { id: string; title: string };
  AUDIO_PEAK: { level: number };
  SYSTEM_WARNING: { msg: string };
  GESTURE_DETECTED: { gesture: GestureKind };
  CAMERA_SHOT: { mode: CameraMode };
  TIMELINE_CUE: { kind: TimelineCueKind; value: string };
  COMMAND_ISSUED: { raw: string };
}

export type EventKey = keyof VortexEventMap;

export interface EngineStats {
  fps: number;
  frameMs: number;
  drawCalls: number;
  triangles: number;
  points: number;
  resScale: number;
}

export interface AudioLevels {
  level: number;
  bass: number;
  mid: number;
  high: number;
  talk: number;
}

export type DirectorShot =
  | { kind: "tactical-swoop" }
  | { kind: "agent-focus"; agentId: string }
  | { kind: "workstation"; agentId: string }
  | { kind: "network-run" };
