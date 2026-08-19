import { useSyncExternalStore } from "react";
import type { MissionEdge, MissionNode } from "../types";
import { MISSION_SEED_EDGES, MISSION_SEED_NODES } from "../data/defaults";
import { uid } from "../utils/math";
import { bus } from "../store/event-bus";

/* ============================================================
   LIVING MISSION MIND-MAP — graph model, automated layout,
   cycle detection, orphan detection, invalid-connection repair.
   ============================================================ */

const KEY = "vortex.missions.v1";

export interface MissionGraph {
  nodes: MissionNode[];
  edges: MissionEdge[];
}

function cloneSeed(): MissionGraph {
  return {
    nodes: MISSION_SEED_NODES.map((n) => ({ ...n })),
    edges: MISSION_SEED_EDGES.map((e) => ({ ...e })),
  };
}

/** Repair invalid connections (edges referencing missing nodes). */
function repair(g: MissionGraph): MissionGraph {
  const ids = new Set(g.nodes.map((n) => n.id));
  return { nodes: g.nodes, edges: g.edges.filter((e) => ids.has(e.from) && ids.has(e.to)) };
}

function load(): MissionGraph {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as MissionGraph;
      if (Array.isArray(parsed.nodes) && Array.isArray(parsed.edges) && parsed.nodes.length > 0) {
        return repair(parsed);
      }
    }
  } catch {
    /* corrupted payload — fall through */
  }
  return cloneSeed();
}

function save(g: MissionGraph): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(g));
  } catch {
    /* storage restricted — non-fatal */
  }
}

let graph: MissionGraph = load();
const listeners = new Set<() => void>();

function commit(next: MissionGraph, kind: "add" | "remove" | "edit" | "layout" | "link"): void {
  graph = next;
  save(graph);
  listeners.forEach((l) => l());
  bus.emit("MISSION_UPDATED", { kind });
}

export function subscribeMissions(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getMissions(): MissionGraph {
  return graph;
}

export function useMissionGraph(): MissionGraph {
  return useSyncExternalStore(subscribeMissions, getMissions);
}

/* ---------------- graph algorithms ---------------- */

export function wouldCreateCycle(edges: MissionEdge[], from: string, to: string): boolean {
  // adding from→to creates a cycle iff a path to→from already exists
  const adj = new Map<string, string[]>();
  for (const e of edges) {
    const list = adj.get(e.from);
    if (list) list.push(e.to);
    else adj.set(e.from, [e.to]);
  }
  const stack = [to];
  const seen = new Set<string>();
  while (stack.length > 0) {
    const cur = stack.pop() as string;
    if (cur === from) return true;
    if (seen.has(cur)) continue;
    seen.add(cur);
    const next = adj.get(cur);
    if (next) stack.push(...next);
  }
  return false;
}

export function findOrphans(g: MissionGraph): MissionNode[] {
  const linked = new Set<string>();
  for (const e of g.edges) {
    linked.add(e.from);
    linked.add(e.to);
  }
  return g.nodes.filter((n) => !linked.has(n.id));
}

export function findRoot(g: MissionGraph): MissionNode | null {
  const targets = new Set(g.edges.map((e) => e.to));
  const sources = g.nodes.filter((n) => !targets.has(n.id));
  const prefer = sources.find((n) => n.id === "m-root");
  return prefer ?? sources[0] ?? g.nodes[0] ?? null;
}

/** Automated layered layout: BFS depth from root → columns, orphans parked below. */
export function computeLayout(g: MissionGraph): Map<string, { x: number; y: number }> {
  const out = new Map<string, { x: number; y: number }>();
  const root = findRoot(g);
  if (!root) return out;
  const adj = new Map<string, string[]>();
  for (const e of g.edges) {
    const list = adj.get(e.from);
    if (list) list.push(e.to);
    else adj.set(e.from, [e.to]);
  }
  const depth = new Map<string, number>();
  const queue: string[] = [root.id];
  depth.set(root.id, 0);
  while (queue.length > 0) {
    const cur = queue.shift() as string;
    const d = depth.get(cur) as number;
    for (const nxt of adj.get(cur) ?? []) {
      if (!depth.has(nxt)) {
        depth.set(nxt, d + 1);
        queue.push(nxt);
      }
    }
  }
  const byDepth = new Map<number, string[]>();
  for (const [id, d] of depth) {
    const list = byDepth.get(d);
    if (list) list.push(id);
    else byDepth.set(d, [id]);
  }
  for (const [d, ids] of byDepth) {
    const spread = (ids.length - 1) * 130;
    ids.forEach((id, i) => {
      out.set(id, { x: 160 + d * 235, y: 300 - spread / 2 + i * 130 });
    });
  }
  // orphans → parked row
  const orphans = g.nodes.filter((n) => !depth.has(n.id));
  orphans.forEach((n, i) => {
    out.set(n.id, { x: 160 + i * 200, y: 620 });
  });
  return out;
}

/** BFS edge ordering from root — used for energy pulse routing waves. */
export function pulseWaveOrder(g: MissionGraph): MissionEdge[] {
  const root = findRoot(g);
  if (!root) return [];
  const order: MissionEdge[] = [];
  const seenNodes = new Set<string>([root.id]);
  let frontier = [root.id];
  const edgeUsed = new Set<string>();
  while (frontier.length > 0) {
    const next: string[] = [];
    for (const e of g.edges) {
      if (edgeUsed.has(e.id)) continue;
      if (seenNodes.has(e.from) && !seenNodes.has(e.to)) {
        edgeUsed.add(e.id);
        order.push(e);
        next.push(e.to);
        seenNodes.add(e.to);
      }
    }
    frontier = next;
  }
  return order;
}

/* ---------------- actions ---------------- */

export const missionActions = {
  addNode(parentId: string | null): string {
    const id = uid("m");
    const parent = parentId ? graph.nodes.find((n) => n.id === parentId) : null;
    const node: MissionNode = {
      id,
      title: `NEW VECTOR ${graph.nodes.length + 1}`,
      status: "PENDING",
      x: parent ? parent.x + 210 + Math.random() * 40 : 480,
      y: parent ? parent.y + (Math.random() * 120 - 60) : 300,
    };
    const edges = parent
      ? [...graph.edges, { id: uid("me"), from: parent.id, to: id }]
      : graph.edges;
    commit({ nodes: [...graph.nodes, node], edges }, "add");
    return id;
  },

  removeNode(id: string): void {
    commit(
      {
        nodes: graph.nodes.filter((n) => n.id !== id),
        edges: graph.edges.filter((e) => e.from !== id && e.to !== id),
      },
      "remove"
    );
  },

  renameNode(id: string, title: string): void {
    commit(
      {
        nodes: graph.nodes.map((n) => (n.id === id ? { ...n, title } : n)),
        edges: graph.edges,
      },
      "edit"
    );
  },

  cycleStatus(id: string): void {
    const order: Record<string, MissionNode["status"]> = {
      PENDING: "ACTIVE",
      ACTIVE: "DONE",
      DONE: "BLOCKED",
      BLOCKED: "PENDING",
    };
    commit(
      {
        nodes: graph.nodes.map((n) =>
          n.id === id ? { ...n, status: order[n.status] ?? "PENDING" } : n
        ),
        edges: graph.edges,
      },
      "edit"
    );
  },

  moveNode(id: string, x: number, y: number): void {
    graph = {
      nodes: graph.nodes.map((n) => (n.id === id ? { ...n, x, y } : n)),
      edges: graph.edges,
    };
    save(graph);
    listeners.forEach((l) => l());
  },

  duplicateNode(id: string): void {
    const src = graph.nodes.find((n) => n.id === id);
    if (!src) return;
    const nid = uid("m");
    const node: MissionNode = { ...src, id: nid, title: `${src.title} COPY`, x: src.x + 60, y: src.y + 60 };
    commit({ nodes: [...graph.nodes, node], edges: graph.edges }, "add");
  },

  /** Returns false when rejected (cycle or duplicate). */
  addEdge(from: string, to: string): boolean {
    if (from === to) return false;
    if (graph.edges.some((e) => e.from === from && e.to === to)) return false;
    if (wouldCreateCycle(graph.edges, from, to)) return false;
    commit(
      { nodes: graph.nodes, edges: [...graph.edges, { id: uid("me"), from, to }] },
      "link"
    );
    return true;
  },

  removeEdge(id: string): void {
    commit({ nodes: graph.nodes, edges: graph.edges.filter((e) => e.id !== id) }, "remove");
  },

  autoLayout(): void {
    const positions = computeLayout(graph);
    commit(
      {
        nodes: graph.nodes.map((n) => {
          const p = positions.get(n.id);
          return p ? { ...n, x: p.x, y: p.y } : n;
        }),
        edges: graph.edges,
      },
      "layout"
    );
  },

  reset(): void {
    commit(cloneSeed(), "layout");
  },

  /** Emits staggered MISSION_PULSE events along a BFS wave. */
  firePulseWave(): void {
    const order = pulseWaveOrder(graph);
    order.forEach((e, i) => {
      window.setTimeout(() => bus.emit("MISSION_PULSE", { edgeId: e.id }), i * 130);
    });
  },

  fireRandomPulse(): void {
    if (graph.edges.length === 0) return;
    const e = graph.edges[Math.floor(Math.random() * graph.edges.length)];
    bus.emit("MISSION_PULSE", { edgeId: e.id });
  },
};
