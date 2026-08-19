import { useEffect, useRef, useState } from "react";
import type { MissionNode } from "../types";
import { findOrphans, missionActions, useMissionGraph } from "../state/missions";
import { bus } from "../store/event-bus";
import { useVortex } from "../store/vortex-store";
import { easeInOutCubic, uid } from "../utils/math";

/* ============================================================
   LIVING EDITABLE MISSION MIND-MAP
   create · delete · rename · duplicate · drag · link (cycle-safe)
   auto-layout · orphan detection · energy pulse routing
   ============================================================ */

interface Pulse {
  id: string;
  edgeId: string;
  t: number;
}

const STATUS_COLOR: Record<MissionNode["status"], string> = {
  PENDING: "#7d8595",
  ACTIVE: "#00f0ff",
  DONE: "#00ff66",
  BLOCKED: "#ff3333",
};

function nodePath(w: number, h: number, c: number): string {
  return `M ${c} 0 H ${w - c} L ${w} ${c} V ${h - c} L ${w - c} ${h} H ${c} L 0 ${h - c} V ${c} Z`;
}

export function MissionMap(): JSX.Element {
  const graph = useMissionGraph();
  const pushLog = useVortex((s) => s.pushLog);
  const [view, setView] = useState({ x: 30, y: 10, k: 0.82 });
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<string | null>(null);
  const [linkFrom, setLinkFrom] = useState<string | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [renaming, setRenaming] = useState<{ id: string; x: number; y: number; value: string } | null>(null);
  const [pulses, setPulses] = useState<Pulse[]>([]);

  const svgRef = useRef<SVGSVGElement>(null);
  const panRef = useRef<{ sx: number; sy: number; vx: number; vy: number } | null>(null);
  const dragRef = useRef<{ id: string; ox: number; oy: number } | null>(null);
  const pulsesRef = useRef<Pulse[]>([]);

  /* pulse events → visual packets along edges */
  useEffect(() => {
    const off = bus.on("MISSION_PULSE", ({ edgeId }) => {
      if (!edgeId) return;
      const p: Pulse = { id: uid("p"), edgeId, t: 0 };
      pulsesRef.current = [...pulsesRef.current, p];
      setPulses(pulsesRef.current);
    });
    let raf = 0;
    let last = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (pulsesRef.current.length === 0) return;
      let changed = false;
      const alive: Pulse[] = [];
      for (const p of pulsesRef.current) {
        p.t += dt * 1.5;
        if (p.t < 1) {
          alive.push(p);
          changed = true;
        } else {
          changed = true;
        }
      }
      if (changed) {
        pulsesRef.current = alive;
        setPulses(alive);
      }
    };
    loop();
    return () => {
      off();
      cancelAnimationFrame(raf);
    };
  }, []);

  const toWorld = (clientX: number, clientY: number) => {
    const el = svgRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    return { x: (clientX - r.left - view.x) / view.k, y: (clientY - r.top - view.y) / view.k };
  };

  const nodeById = (id: string) => graph.nodes.find((n) => n.id === id);

  const tryLink = (from: string, to: string) => {
    const ok = missionActions.addEdge(from, to);
    if (ok) {
      pushLog("ok", "MISSION", `link forged: ${nodeById(from)?.title} → ${nodeById(to)?.title}`);
    } else {
      pushLog("err", "MISSION", "link rejected — cycle detected or duplicate edge");
    }
    setLinkFrom(null);
  };

  const orphans = findOrphans(graph);

  return (
    <div className="mission-layer">
      <div className="mission-toolbar">
        <button
          className="btn sm gold"
          onClick={() => {
            const id = missionActions.addNode(selected);
            setSelected(id);
          }}
        >
          + NODE
        </button>
        <button
          className={`btn sm ${linkFrom ? "active" : ""}`}
          onClick={() => {
            setLinkFrom(null);
            pushLog("info", "MISSION", "link mode — click an output port, then a target node");
          }}
        >
          {linkFrom ? `FROM: ${nodeById(linkFrom)?.title.slice(0, 10) ?? "?"}` : "LINK MODE"}
        </button>
        <button
          className="btn sm"
          onClick={() => {
            if (!selected) return;
            missionActions.cycleStatus(selected);
          }}
        >
          CYCLE STATUS
        </button>
        <button
          className="btn sm"
          onClick={() => {
            if (selected) {
              missionActions.duplicateNode(selected);
            } else if (selectedEdge) {
              missionActions.removeEdge(selectedEdge);
              setSelectedEdge(null);
            }
          }}
        >
          {selectedEdge ? "CUT EDGE" : "DUPLICATE"}
        </button>
        <button
          className="btn sm danger"
          onClick={() => {
            if (selected) {
              missionActions.removeNode(selected);
              setSelected(null);
            }
          }}
        >
          DELETE
        </button>
        <button className="btn sm" onClick={() => missionActions.autoLayout()}>
          AUTO-LAYOUT
        </button>
        <button className="btn sm" onClick={() => missionActions.reset()}>
          RESET SEED
        </button>
        <button
          className="btn sm gold"
          onClick={() => {
            missionActions.firePulseWave();
            pushLog("sys", "MISSION", "energy pulse wave routed through the graph");
          }}
        >
          ⚡ SEND PULSE
        </button>
      </div>

      <div className="m-orphans panel">
        <div className="panel-title">
          GRAPH INTEGRITY <span className="aux">{graph.nodes.length}N·{graph.edges.length}E</span>
        </div>
        <div className="panel-body" style={{ fontSize: 9.5, lineHeight: 1.7, color: "var(--dim)" }}>
          <div>
            CYCLES <b style={{ color: "var(--green)" }}>0</b> · guard ACTIVE
          </div>
          <div>
            ORPHANS{" "}
            <b style={{ color: orphans.length ? "var(--gold2)" : "var(--green)" }}>{orphans.length}</b>
            {orphans.length > 0 && <span> — {orphans.map((o) => o.title).join(", ")}</span>}
          </div>
          <div>
            INVALID EDGES <b style={{ color: "var(--green)" }}>0</b> · auto-repaired on load
          </div>
          <div className="mt8" style={{ color: "var(--faint)", fontSize: 8.5 }}>
            drag nodes · wheel zoom · dbl-click rename · port→node links
          </div>
        </div>
      </div>

      <svg
        ref={svgRef}
        className={`mission-svg ${panRef.current ? "panning" : ""} ${linkFrom ? "linking" : ""}`}
        onPointerDown={(e) => {
          if (e.target === svgRef.current || (e.target as SVGElement).tagName === "svg") {
            panRef.current = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y };
            setSelected(null);
            setSelectedEdge(null);
          }
        }}
        onPointerMove={(e) => {
          if (panRef.current) {
            setView((v) => ({
              ...v,
              x: panRef.current!.vx + (e.clientX - panRef.current!.sx),
              y: panRef.current!.vy + (e.clientY - panRef.current!.sy),
            }));
          } else if (dragRef.current) {
            const w = toWorld(e.clientX, e.clientY);
            missionActions.moveNode(dragRef.current.id, w.x - dragRef.current.ox, w.y - dragRef.current.oy);
          }
          if (linkFrom) setCursor(toWorld(e.clientX, e.clientY));
        }}
        onPointerUp={() => {
          panRef.current = null;
          dragRef.current = null;
        }}
        onWheel={(e) => {
          const el = svgRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          const mx = e.clientX - r.left;
          const my = e.clientY - r.top;
          setView((v) => {
            const k = Math.min(2.2, Math.max(0.35, v.k * (1 - e.deltaY * 0.0012)));
            return { k, x: mx - ((mx - v.x) / v.k) * k, y: my - ((my - v.y) / v.k) * k };
          });
        }}
      >
        <g transform={`translate(${view.x},${view.y}) scale(${view.k})`}>
          {/* edges */}
          {graph.edges.map((e) => {
            const a = nodeById(e.from);
            const b = nodeById(e.to);
            if (!a || !b) return null;
            const hot = pulses.some((p) => p.edgeId === e.id);
            return (
              <line
                key={e.id}
                className={`m-edge ${hot ? "hot" : ""} ${selectedEdge === e.id ? "hot" : ""}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                onPointerDown={(ev) => {
                  ev.stopPropagation();
                  setSelectedEdge(e.id);
                  setSelected(null);
                }}
              />
            );
          })}

          {/* ghost link */}
          {linkFrom && cursor && nodeById(linkFrom) && (
            <line
              className="m-edge-ghost"
              x1={nodeById(linkFrom)!.x}
              y1={nodeById(linkFrom)!.y}
              x2={cursor.x}
              y2={cursor.y}
            />
          )}

          {/* pulses */}
          {pulses.map((p) => {
            const e = graph.edges.find((ed) => ed.id === p.edgeId);
            if (!e) return null;
            const a = nodeById(e.from);
            const b = nodeById(e.to);
            if (!a || !b) return null;
            const t = easeInOutCubic(p.t);
            return (
              <circle
                key={p.id}
                className="m-pulse"
                r={5}
                cx={a.x + (b.x - a.x) * t}
                cy={a.y + (b.y - a.y) * t}
              />
            );
          })}

          {/* nodes */}
          {graph.nodes.map((n) => {
            const W = 158;
            const H = 48;
            return (
              <g
                key={n.id}
                className={`m-node ${selected === n.id ? "sel" : ""}`}
                transform={`translate(${n.x},${n.y})`}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  setSelected(n.id);
                  setSelectedEdge(null);
                  const w = toWorld(e.clientX, e.clientY);
                  dragRef.current = { id: n.id, ox: w.x - n.x, oy: w.y - n.y };
                  if (linkFrom && linkFrom !== n.id) tryLink(linkFrom, n.id);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  setRenaming({
                    id: n.id,
                    x: n.x * view.k + view.x - 80,
                    y: n.y * view.k + view.y - 12,
                    value: n.title,
                  });
                }}
              >
                <path d={nodePath(W, H, 9)} transform={`translate(${-W / 2},${-H / 2})`} className="m-node-box" />
                <line
                  className="m-node-status"
                  x1={-W / 2 + 4}
                  y1={-H / 2 + 8}
                  x2={-W / 2 + 4}
                  y2={H / 2 - 8}
                  stroke={STATUS_COLOR[n.status]}
                />
                <text className="m-node-title" textAnchor="middle" y={-2}>
                  {n.title.length > 20 ? n.title.slice(0, 19) + "…" : n.title}
                </text>
                <text className="m-node-sub" textAnchor="middle" y={13} fill={STATUS_COLOR[n.status]}>
                  {n.status}
                </text>
                <circle
                  className="m-port"
                  cx={-W / 2}
                  cy={0}
                  r={5.5}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setSelected(n.id);
                  }}
                />
                <circle
                  className="m-port"
                  cx={W / 2}
                  cy={0}
                  r={5.5}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setLinkFrom(n.id);
                    setSelected(n.id);
                  }}
                />
              </g>
            );
          })}
        </g>
      </svg>

      {renaming && (
        <input
          className="rename-input"
          style={{ left: renaming.x, top: renaming.y, width: 170 }}
          value={renaming.value}
          autoFocus
          onFocus={(e) => e.target.select()}
          onChange={(e) => setRenaming({ ...renaming, value: e.target.value.toUpperCase() })}
          onBlur={() => {
            missionActions.renameNode(renaming.id, renaming.value.trim() || "UNNAMED");
            setRenaming(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
            if (e.key === "Escape") setRenaming(null);
          }}
        />
      )}
    </div>
  );
}
