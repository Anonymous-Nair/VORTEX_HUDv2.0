import type {
  AgentDef,
  AgentRole,
  CameraKey,
  MemoryEdge,
  MemoryNode,
  MissionEdge,
  MissionNode,
  TimelineCue,
} from "../types";

/* ================= AGENT ROSTER (8 AUTONOMOUS UNITS) ================= */

export const AGENT_DEFS: AgentDef[] = [
  { id: "ag-strategist", name: "AURELIA", codename: "VANTAGE-1", role: "STRATEGIST", department: "COMMAND", color: "#d4af37", speed: 0.9, personality: { focus: 0.9, drive: 0.7, sociability: 0.8 }, workstation: 0 },
  { id: "ag-researcher", name: "ORION", codename: "SIFTER-2", role: "RESEARCHER", department: "KNOWLEDGE", color: "#00f0ff", speed: 1.5, personality: { focus: 0.5, drive: 0.9, sociability: 0.6 }, workstation: 1 },
  { id: "ag-coder", name: "VEGA", codename: "FORGE-3", role: "CODER", department: "ENGINEERING", color: "#00ff66", speed: 1.1, personality: { focus: 1.0, drive: 1.0, sociability: 0.25 }, workstation: 2 },
  { id: "ag-analyst", name: "LYRA", codename: "PRISM-4", role: "ANALYST", department: "INTELLIGENCE", color: "#7ad7ff", speed: 1.0, personality: { focus: 0.85, drive: 0.8, sociability: 0.5 }, workstation: 3 },
  { id: "ag-security", name: "KERBEROS", codename: "WARDEN-5", role: "SECURITY", department: "DEFENSE", color: "#ff3333", speed: 1.3, personality: { focus: 0.6, drive: 0.85, sociability: 0.35 }, workstation: 4 },
  { id: "ag-creative", name: "MUSE", codename: "LUMEN-6", role: "CREATIVE", department: "SYNTHESIS", color: "#ff7ad9", speed: 1.05, personality: { focus: 0.55, drive: 0.75, sociability: 0.9 }, workstation: 5 },
  { id: "ag-automation", name: "ATLAS", codename: "CONDUIT-7", role: "AUTOMATION", department: "OPERATIONS", color: "#ffb700", speed: 1.7, personality: { focus: 0.7, drive: 1.0, sociability: 0.45 }, workstation: 6 },
  { id: "ag-executive", name: "HELIOS", codename: "SOVEREIGN-0", role: "EXECUTIVE", department: "COMMAND", color: "#e0e6ed", speed: 0.8, personality: { focus: 0.8, drive: 0.65, sociability: 1.0 }, workstation: 7 },
];

export const TASK_POOLS: Record<AgentRole, string[]> = {
  STRATEGIST: ["Projecting Q3 objective lattice", "Weighing resource allocation vectors", "Scanning horizon for asymmetric risks", "Composing doctrine revision 7C"],
  RESEARCHER: ["Crawling 4,096 abstracts for signal", "Cross-indexing citation topology", "Distilling whitepaper corpus v12", "Verifying source provenance chain"],
  CODER: ["Refactoring plasma shader passes", "Compiling agent kernel module 9", "Patching race in event dispatcher", "Optimizing particle SIMD lanes"],
  ANALYST: ["Clustering telemetry manifolds", "Fitting Bayesian latency model", "Reducing 88-dim feature space", "Scoring anomaly hypersurface"],
  SECURITY: ["Sweeping perimeter mesh sectors", "Rotating cipher handshakes", "Auditing vault access ledger", "Tracing packet origin spoofing"],
  CREATIVE: ["Sculpting holographic asset set", "Tuning chromatic identity matrix", "Drafting narrative branch 3B", "Arranging spatial UI constellation"],
  AUTOMATION: ["Routing pipeline packet bursts", "Balancing queue throughput lanes", "Scheduling cron constellation", "Welding CI/CD junction nodes"],
  EXECUTIVE: ["Synthesizing swarm mission brief", "Aligning stakeholder vectors", "Ratifying priority stack v44", "Broadcasting command intent"],
};

export const CODENAME_POOL = ["ECHO-9", "NOVA-11", "ZEPHYR-12", "ONYX-13", "PULSE-14", "RAZOR-15", "SIGMA-16", "TALON-17"];
export const NAME_POOL = ["NADIR", "SOLACE", "KITE", "EMBER", "QUILL", "HALCYON", "RIFT", "CINDER"];

/* ================= MISSION MIND-MAP SEED ================= */

export const MISSION_SEED_NODES: MissionNode[] = [
  { id: "m-root", title: "OPERATION HELIOS", status: "ACTIVE", x: 480, y: 300 },
  { id: "m-intel", title: "INTEL SWEEP", status: "DONE", x: 250, y: 150 },
  { id: "m-ingress", title: "DATA INGRESS", status: "DONE", x: 240, y: 300 },
  { id: "m-tune", title: "MODEL TUNING", status: "ACTIVE", x: 255, y: 450 },
  { id: "m-dispatch", title: "AGENT DISPATCH", status: "ACTIVE", x: 700, y: 140 },
  { id: "m-signal", title: "SIGNAL ANALYSIS", status: "ACTIVE", x: 720, y: 300 },
  { id: "m-counter", title: "COUNTERMEASURE DRAFT", status: "PENDING", x: 700, y: 460 },
  { id: "m-qa", title: "QA GATE", status: "PENDING", x: 940, y: 220 },
  { id: "m-comms", title: "COMMS UPLINK", status: "PENDING", x: 945, y: 380 },
  { id: "m-risk", title: "RISK LEDGER", status: "BLOCKED", x: 470, y: 520 },
  { id: "m-archive", title: "ARCHIVE & REPORT", status: "PENDING", x: 1140, y: 300 },
  { id: "m-sync", title: "FINAL SYNC", status: "PENDING", x: 1140, y: 450 },
];

export const MISSION_SEED_EDGES: MissionEdge[] = [
  { id: "me-1", from: "m-root", to: "m-intel" },
  { id: "me-2", from: "m-root", to: "m-ingress" },
  { id: "me-3", from: "m-root", to: "m-tune" },
  { id: "me-4", from: "m-root", to: "m-dispatch" },
  { id: "me-5", from: "m-root", to: "m-signal" },
  { id: "me-6", from: "m-root", to: "m-counter" },
  { id: "me-7", from: "m-intel", to: "m-dispatch" },
  { id: "me-8", from: "m-ingress", to: "m-signal" },
  { id: "me-9", from: "m-tune", to: "m-counter" },
  { id: "me-10", from: "m-dispatch", to: "m-qa" },
  { id: "me-11", from: "m-signal", to: "m-qa" },
  { id: "me-12", from: "m-signal", to: "m-comms" },
  { id: "me-13", from: "m-counter", to: "m-comms" },
  { id: "me-14", from: "m-qa", to: "m-archive" },
  { id: "me-15", from: "m-comms", to: "m-archive" },
  { id: "me-16", from: "m-archive", to: "m-sync" },
  { id: "me-17", from: "m-tune", to: "m-risk" },
];

/* ================= MEMORY VAULT SEED ================= */

export const MEMORY_SEED_NODES: MemoryNode[] = [
  { id: "f-projects", title: "projects/", type: "folder", body: "Active operation folders.", x: -180, y: -120, vx: 0, vy: 0, born: 0 },
  { id: "f-research", title: "research/", type: "folder", body: "Corpus, citations, distilled briefs.", x: 180, y: -140, vx: 0, vy: 0, born: 0 },
  { id: "f-ops", title: "ops/", type: "folder", body: "Runbooks, pipelines, ledgers.", x: 0, y: 190, vx: 0, vy: 0, born: 0 },
  { id: "n-helios", title: "helios-brief.md", type: "note", body: "# Operation Helios\n\nDirective: synchronize swarm telemetry with the central arc.\n\n- [x] Uplink handshake\n- [ ] Phase-lock plasma conduits\n- [ ] Archive final report\n\n> The arc answers only when the swarm breathes as one.", x: -60, y: -40, vx: 0, vy: 0, born: 0 },
  { id: "n-swarm", title: "swarm-protocol.md", type: "note", body: "# Swarm Protocol v7\n\nAgents negotiate tasks over the waypoint lattice. Steering uses arrival damping; separation radius 0.8u.", x: 90, y: 20, vx: 0, vy: 0, born: 0 },
  { id: "n-lattice", title: "lattice-notes.md", type: "note", body: "# Waypoint Lattice\n\nRing corridor r=4.6 · 16 nodes. Spokes at 0/90/180/270. Center table triad.", x: -160, y: 70, vx: 0, vy: 0, born: 0 },
  { id: "n-obsidian", title: "obsidian-sync.md", type: "note", body: "# Obsidian Bridge\n\nMCP/WebSocket bridge spec drafted. MockMemoryProvider replays fs events until live vault attaches.", x: 150, y: 130, vx: 0, vy: 0, born: 0 },
  { id: "n-roster", title: "agent-roster.md", type: "note", body: "# Roster\n\n8 autonomous units. Sovereign-0 holds command intent; Warden-5 patrols the perimeter mesh.", x: -240, y: -20, vx: 0, vy: 0, born: 0 },
  { id: "t-ai", title: "#ai", type: "tag", body: "", x: 40, y: -190, vx: 0, vy: 0, born: 0 },
  { id: "t-ops", title: "#ops", type: "tag", body: "", x: 240, y: 20, vx: 0, vy: 0, born: 0 },
];

export const MEMORY_SEED_EDGES: MemoryEdge[] = [
  { id: "fe-1", from: "n-helios", to: "f-projects", kind: "folder" },
  { id: "fe-2", from: "n-swarm", to: "f-projects", kind: "folder" },
  { id: "fe-3", from: "n-lattice", to: "f-research", kind: "folder" },
  { id: "fe-4", from: "n-obsidian", to: "f-ops", kind: "folder" },
  { id: "fe-5", from: "n-roster", to: "f-ops", kind: "folder" },
  { id: "fe-6", from: "n-helios", to: "n-swarm", kind: "link" },
  { id: "fe-7", from: "n-swarm", to: "n-lattice", kind: "link" },
  { id: "fe-8", from: "n-helios", to: "t-ai", kind: "tag" },
  { id: "fe-9", from: "n-roster", to: "t-ops", kind: "tag" },
  { id: "fe-10", from: "n-obsidian", to: "t-ops", kind: "tag" },
];

export interface NoteTemplate { title: string; body: string; tags: string[] }

export const NOTE_POOL: NoteTemplate[] = [
  { title: "quantum-cache.md", body: "# Quantum Cache\n\nEviction policy tuned; hit ratio 94.2%. Cold shards migrated to vault tier 2.", tags: ["#ai"] },
  { title: "night-log-042.md", body: "# Night Log 042\n\nPerimeter quiet. Two handshake retries from relay 9 — whitelisted after audit.", tags: ["#ops"] },
  { title: "glyph-taxonomy.md", body: "# Glyph Taxonomy\n\nHolographic glyph set mapped to 64-state semaphore. Arc shutters mirror the taxonomy.", tags: ["#ai"] },
  { title: "plasma-thermals.md", body: "# Plasma Thermals\n\nConduit envelope stable at 312K. Turbulence index correlates with THINKING depth.", tags: ["#ai", "#ops"] },
  { title: "director-shots.md", body: "# Director Shots\n\nCinematic grammar: swoop on spike, dolly on task start, slow push on success.", tags: ["#ops"] },
  { title: "backlink-atlas.md", body: "# Backlink Atlas\n\nGraph density 0.31. Orphan rate below 2% after last reorganization sweep.", tags: ["#ai"] },
  { title: "cipher-rotation.md", body: "# Cipher Rotation\n\nHandshake keys rotated every 900s. Zero drift detected across 4,000 exchanges.", tags: ["#ops"] },
  { title: "muse-assets.md", body: "# Asset Constellation\n\nLUMEN-6 sculpted 12 holographic primitives for the briefing table projection.", tags: ["#ai"] },
  { title: "throughput-lanes.md", body: "# Throughput Lanes\n\nCONDUIT-7 balanced 8 lanes; packet jitter under 3ms at peak burst.", tags: ["#ops"] },
  { title: "horizon-risks.md", body: "# Horizon Risks\n\nThree asymmetric vectors flagged; two hedged, one parked in the risk ledger.", tags: ["#ai", "#ops"] },
];

/* ================= CINEMATIC DIRECTOR — CAMERA KEYFRAMES ================= */

export const CAMERA_KEYS: CameraKey[] = [
  { t: 0, pos: [0, 3.4, 10.8], look: [0, 2.4, 0], fov: 50 },
  { t: 5, pos: [5.2, 2.3, 6.4], look: [0, 2.7, 0], fov: 44 },
  { t: 9, pos: [0.5, 9.5, 8.5], look: [0, 0.4, 0], fov: 52 },
  { t: 12, pos: [5.4, 2.5, 5.2], look: [1.6, 1.5, 0.4], fov: 42 },
  { t: 15, pos: [0, 2.0, 5.0], look: [0, 1.35, 0], fov: 40 },
  { t: 19, pos: [-6.5, 3.8, 9.5], look: [0, 1.7, 0], fov: 55 },
  { t: 23, pos: [0, 6.2, 10.4], look: [0, 1.4, 0], fov: 50 },
  { t: 27, pos: [-4.4, 2.6, 7.2], look: [0, 2.1, 0], fov: 46 },
  { t: 30, pos: [0, 3.4, 10.8], look: [0, 2.4, 0], fov: 50 },
];

/* ================= 30-SECOND DEMO TIMELINE ================= */

export const TIMELINE_CUES: TimelineCue[] = [
  { t: 0.2, kind: "log", value: "CINEMATIC SEQUENCE Ω ENGAGED — DIRECTOR AI ONLINE" },
  { t: 0.8, kind: "tab", value: "core" },
  { t: 1.2, kind: "state", value: "LISTENING" },
  { t: 2.6, kind: "state", value: "THINKING" },
  { t: 4.6, kind: "state", value: "TOOL_USE" },
  { t: 5.0, kind: "burst", value: "140" },
  { t: 7.6, kind: "spike", value: "0.8" },
  { t: 8.6, kind: "tab", value: "agents" },
  { t: 9.4, kind: "log", value: "SWARM FLOOR — 8 AUTONOMOUS UNITS ON STATION" },
  { t: 10.6, kind: "brief", value: "all" },
  { t: 14.4, kind: "tab", value: "intel" },
  { t: 14.8, kind: "speak", value: "Behold the intelligence lattice — my human face." },
  { t: 18.4, kind: "tab", value: "network" },
  { t: 18.8, kind: "burst", value: "220" },
  { t: 19.6, kind: "log", value: "10-LAYER CORTEX — TOKEN PROPAGATION LIVE" },
  { t: 22.4, kind: "tab", value: "missions" },
  { t: 22.9, kind: "pulse", value: "wave" },
  { t: 25.4, kind: "tab", value: "memory" },
  { t: 25.9, kind: "memory", value: "provider-burst" },
  { t: 27.8, kind: "state", value: "SUCCESS" },
  { t: 28.4, kind: "log", value: "SEQUENCE COMPLETE — ALL SYSTEMS NOMINAL" },
  { t: 29.4, kind: "state", value: "IDLE" },
];

/* ================= NEURAL CORTEX LAYERS ================= */

export const LAYER_NAMES: string[] = [
  "INPUT",
  "TOKENIZATION",
  "EMBEDDING",
  "CONTEXT",
  "ATTENTION",
  "REASONING",
  "MEMORY",
  "TOOL ROUTING",
  "ORCHESTRATION",
  "OUTPUT",
];

export const LAYER_COUNTS: number[] = [5, 9, 13, 11, 15, 12, 10, 8, 6, 4];

/* ================= VAULT FILES (HOLO DECK) ================= */

export interface VaultFile { name: string; size: string; mod: string }

export const VAULT_FILES: VaultFile[] = [
  { name: "helios-brief.md", size: "4.2 KB", mod: "00:02:11" },
  { name: "swarm-protocol.md", size: "7.8 KB", mod: "00:04:47" },
  { name: "plasma-thermals.md", size: "2.1 KB", mod: "00:07:03" },
  { name: "director-shots.md", size: "3.5 KB", mod: "00:09:58" },
  { name: "cipher-rotation.md", size: "1.4 KB", mod: "00:12:26" },
  { name: "backlink-atlas.md", size: "5.9 KB", mod: "00:15:40" },
  { name: "glyph-taxonomy.md", size: "2.7 KB", mod: "00:18:12" },
  { name: "horizon-risks.md", size: "3.1 KB", mod: "00:21:55" },
];

/* ================= SYNTH VOICE RESPONSES ================= */

export const RESPONSES: string[] = [
  "Directive acknowledged. Orchestration vector locked — delegating to the swarm.",
  "Analysis complete. Confidence 97.3%. Routing synthesis to your holographic deck.",
  "Task decomposed into 12 sub-vectors. Agents FORGE-3 and PRISM-4 assigned.",
  "Cross-referenced 4,096 vault entries. Signal isolated and crystallized.",
  "Perimeter verified clean. Executing with full plasma authorization.",
  "Projection lattice updated. Outcome branch 3B is now the primary timeline.",
];

/* ================= BOOT SEQUENCE ================= */

export interface BootLine { text: string; cls: "" | "ok" | "gold" }

export const BOOT_LINES: BootLine[] = [
  { text: "[0.002s] VORTEX kernel 2.0.7 — cold start initiated", cls: "" },
  { text: "[0.041s] mounting obsidian substrate ............ OK", cls: "ok" },
  { text: "[0.118s] plasma conduit mesh .................... 312K NOMINAL", cls: "ok" },
  { text: "[0.233s] GPU compute lanes ...................... 12/12 BOUND", cls: "ok" },
  { text: "[0.347s] particle populations ................... 131,072 STAGED", cls: "ok" },
  { text: "[0.452s] waypoint lattice ....................... 31 NODES LINKED", cls: "ok" },
  { text: "[0.566s] swarm handshake — 8 autonomous units ... ONLINE", cls: "gold" },
  { text: "[0.684s] neural cortex — 10 layers .............. SYNAPSED", cls: "ok" },
  { text: "[0.799s] memory vault bridge .................... MOCK → MCP READY", cls: "ok" },
  { text: "[0.871s] procedural audio engine ................ ARMED", cls: "ok" },
  { text: "[0.943s] cinematic director AI .................. AWAKE", cls: "gold" },
  { text: "[1.000s] VORTEX_HUD Ω — ALL SYSTEMS NOMINAL", cls: "gold" },
];

export const GLYPHS = "アイウカキクケコサシスセソタチツテトΩΔΣΨΛΞ01<>/*+=#";
