import { useSyncExternalStore } from "react";
import type { MemoryEdge, MemoryNode } from "../types";
import { MEMORY_SEED_EDGES, MEMORY_SEED_NODES, NOTE_POOL } from "../data/defaults";
import { randRange, uid } from "../utils/math";
import { bus } from "../store/event-bus";
import { useVortex } from "../store/vortex-store";

/* ============================================================
   OBSIDIAN-READY LIVE MEMORY GRAPH
   MockMemoryProvider simulates real-time vault file-system events;
   ObsidianBridge exposes the future MCP / WebSocket attachment point.
   ============================================================ */

export interface MemoryGraphState {
  nodes: MemoryNode[];
  edges: MemoryEdge[];
}

let state: MemoryGraphState = {
  nodes: MEMORY_SEED_NODES.map((n) => ({ ...n })),
  edges: MEMORY_SEED_EDGES.map((e) => ({ ...e })),
};

const listeners = new Set<() => void>();

function commit(next: MemoryGraphState): void {
  state = next;
  listeners.forEach((l) => l());
}

export function subscribeMemory(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getMemory(): MemoryGraphState {
  return state;
}

export function useMemoryGraph(): MemoryGraphState {
  return useSyncExternalStore(subscribeMemory, getMemory);
}

/* ---------------- physics (force-directed, deterministic) ---------------- */

export function tickMemory(dt: number): void {
  const { nodes, edges } = state;
  const k = Math.min(dt, 0.05);
  const byId = new Map(nodes.map((n) => [n.id, n]));

  for (const e of edges) {
    const a = byId.get(e.from);
    const b = byId.get(e.to);
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.max(12, Math.hypot(dx, dy));
    const rest = e.kind === "folder" ? 120 : 95;
    const f = ((dist - rest) / dist) * 0.028;
    a.vx += dx * f;
    a.vy += dy * f;
    b.vx -= dx * f;
    b.vy -= dy * f;
  }

  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d2 = Math.max(400, dx * dx + dy * dy);
      const f = 26000 / d2;
      const d = Math.sqrt(d2);
      a.vx -= (dx / d) * f;
      a.vy -= (dy / d) * f;
      b.vx += (dx / d) * f;
      b.vy += (dy / d) * f;
    }
  }

  for (const n of nodes) {
    n.vx += -n.x * 0.0016;
    n.vy += -n.y * 0.0016;
    n.vx *= 0.86;
    n.vy *= 0.86;
    n.x += n.vx * k * 60;
    n.y += n.vy * k * 60;
  }
}

/* ---------------- provider + bridge ---------------- */

/** Future-ready transport contract (MCP / WebSocket live vault). */
export interface VaultTransport {
  readonly mode: "mock" | "mcp" | "websocket";
  connect(): void;
  disconnect(): void;
}

export class ObsidianBridge implements VaultTransport {
  readonly mode = "mock" as const;
  connect(): void {
    useVortex.getState().pushLog("sys", "VAULT", "ObsidianBridge attached in MOCK mode — MCP/WebSocket socket dormant");
  }
  disconnect(): void {
    /* reserved for live vault detachment */
  }
}

class MockMemoryProvider {
  private timer: ReturnType<typeof setInterval> | null = null;
  private noteIdx = 0;
  readonly bridge = new ObsidianBridge();

  start(): void {
    if (this.timer) return;
    this.bridge.connect();
    this.timer = setInterval(() => {
      if (document.hidden) return;
      this.createNext();
    }, 4200);
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  burst(count: number): void {
    for (let i = 0; i < count; i++) this.createNext(true);
  }

  private createNext(silent = false): void {
    const nodes = state.nodes;
    if (nodes.length >= 64) {
      // recycle oldest non-folder note
      const idx = nodes.findIndex((n) => n.type === "note");
      if (idx >= 0) {
        const gone = nodes[idx];
        commit({
          nodes: nodes.filter((n) => n.id !== gone.id),
          edges: state.edges.filter((e) => e.from !== gone.id && e.to !== gone.id),
        });
      }
    }
    const template = NOTE_POOL[this.noteIdx % NOTE_POOL.length];
    this.noteIdx++;
    const id = uid("mem");
    const angle = Math.random() * Math.PI * 2;
    const r = randRange(60, 160);
    const node: MemoryNode = {
      id,
      title: template.title,
      type: "note",
      body: template.body,
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
      vx: 0,
      vy: 0,
      born: performance.now(),
    };
    const edges = [...state.edges];
    // backlinks: attach to 1–2 existing nodes + tags
    const noteNodes = state.nodes.filter((n) => n.type === "note");
    const attachCount = Math.min(noteNodes.length, 1 + Math.floor(Math.random() * 2));
    const shuffled = [...noteNodes].sort(() => Math.random() - 0.5);
    for (let i = 0; i < attachCount; i++) {
      edges.push({ id: uid("me"), from: id, to: shuffled[i].id, kind: "link" });
    }
    for (const tag of template.tags) {
      const tagNode = state.nodes.find((n) => n.type === "tag" && n.title === tag);
      if (tagNode) edges.push({ id: uid("me"), from: id, to: tagNode.id, kind: "tag" });
    }
    commit({ nodes: [...state.nodes, node], edges });
    bus.emit("MEMORY_NODE_CREATED", { id, title: node.title });
    if (!silent) {
      useVortex.getState().pushLog("info", "FS", `[vault] + /${node.title} — backlinks woven (${attachCount})`);
    }
  }

  manualNote(title: string): void {
    const id = uid("mem");
    const node: MemoryNode = {
      id,
      title: title.endsWith(".md") ? title : `${title}.md`,
      type: "note",
      body: `# ${title}\n\nManually inscribed into the vault. Awaiting swarm annotation.`,
      x: randRange(-80, 80),
      y: randRange(-80, 80),
      vx: 0,
      vy: 0,
      born: performance.now(),
    };
    const root = state.nodes.find((n) => n.type === "folder");
    const edges = root
      ? [...state.edges, { id: uid("me"), from: id, to: root.id, kind: "folder" as const }]
      : state.edges;
    commit({ nodes: [...state.nodes, node], edges });
    bus.emit("MEMORY_NODE_CREATED", { id, title: node.title });
    useVortex.getState().pushLog("ok", "FS", `[vault] + /${node.title} inscribed by operator`);
  }
}

export const memoryProvider = new MockMemoryProvider();
