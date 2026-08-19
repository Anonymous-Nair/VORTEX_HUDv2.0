import { useEffect, useRef, useState } from "react";
import { getMemory, memoryProvider, tickMemory, useMemoryGraph } from "../state/memory";
import { bus } from "../store/event-bus";
import { TAU } from "../utils/math";

/* ============================================================
   OBSIDIAN-READY LIVE MEMORY GRAPH
   force-directed constellation · live fs events from the
   MockMemoryProvider · note inspector · manual inscription
   ============================================================ */

const TYPE_COLOR: Record<string, string> = {
  note: "#00f0ff",
  folder: "#d4af37",
  tag: "#00ff66",
};

export function MemoryGraph(): JSX.Element {
  const mem = useMemoryGraph();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteCount, setNoteCount] = useState(0);
  const [draft, setDraft] = useState("");
  const viewRef = useRef({ x: 0, y: 0, k: 1.15 });
  const dragRef = useRef<{ id: string | null; sx: number; sy: number; vx: number; vy: number; moved: boolean } | null>(null);
  const hoverRef = useRef<string | null>(null);

  useEffect(() => {
    const off = bus.on("MEMORY_NODE_CREATED", () => setNoteCount((c) => c + 1));
    return off;
  }, []);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();

    const draw = () => {
      raf = requestAnimationFrame(draw);
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      tickMemory(dt);

      const W = cv.clientWidth;
      const H = cv.clientHeight;
      if (cv.width !== W * 2 || cv.height !== H * 2) {
        cv.width = W * 2;
        cv.height = H * 2;
      }
      ctx.setTransform(2, 0, 0, 2, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const v = viewRef.current;
      const wx = (x: number) => W / 2 + (x + v.x) * v.k;
      const wy = (y: number) => H / 2 + (y + v.y) * v.k;

      const { nodes, edges } = getMemory();
      const byId = new Map(nodes.map((n) => [n.id, n]));

      /* edges */
      for (const e of edges) {
        const a = byId.get(e.from);
        const b = byId.get(e.to);
        if (!a || !b) continue;
        ctx.strokeStyle =
          e.kind === "tag" ? "rgba(0,255,102,0.22)" : e.kind === "folder" ? "rgba(212,175,55,0.2)" : "rgba(0,240,255,0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(wx(a.x), wy(a.y));
        ctx.lineTo(wx(b.x), wy(b.y));
        ctx.stroke();
      }

      /* nodes */
      for (const n of nodes) {
        const x = wx(n.x);
        const y = wy(n.y);
        const col = TYPE_COLOR[n.type];
        const age = (now - n.born) / 1000;
        if (n.born > 0 && age < 1.6) {
          ctx.strokeStyle = col;
          ctx.globalAlpha = 1 - age / 1.6;
          ctx.beginPath();
          ctx.arc(x, y, 10 + age * 26, 0, TAU);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        const hovered = hoverRef.current === n.id;
        const sel = selectedId === n.id;
        ctx.lineWidth = sel ? 2 : hovered ? 1.6 : 1;
        ctx.strokeStyle = col;
        ctx.fillStyle = "rgba(10,10,15,0.92)";
        const r = n.type === "folder" ? 11 : n.type === "tag" ? 7.5 : 8.5;
        ctx.beginPath();
        if (n.type === "folder") {
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * TAU - Math.PI / 6;
            const px = x + Math.cos(a) * r;
            const py = y + Math.sin(a) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
        } else if (n.type === "tag") {
          ctx.moveTo(x, y - r);
          ctx.lineTo(x + r, y);
          ctx.lineTo(x, y + r);
          ctx.lineTo(x - r, y);
          ctx.closePath();
        } else {
          ctx.rect(x - r, y - r * 0.82, r * 2, r * 1.64);
        }
        ctx.fill();
        ctx.stroke();
        if (sel) {
          ctx.strokeStyle = "rgba(212,175,55,0.8)";
          ctx.beginPath();
          ctx.arc(x, y, r + 6, 0, TAU);
          ctx.stroke();
        }
        ctx.fillStyle = hovered || sel ? "#e0e6ed" : "rgba(125,133,149,0.95)";
        ctx.font = "9.5px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(n.title, x, y + r + 12);
      }
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [selectedId]);

  const pickNode = (clientX: number, clientY: number): string | null => {
    const cv = canvasRef.current;
    if (!cv) return null;
    const r = cv.getBoundingClientRect();
    const v = viewRef.current;
    const mx = (clientX - r.left - r.width / 2) / v.k - v.x;
    const my = (clientY - r.top - r.height / 2) / v.k - v.y;
    let best: string | null = null;
    let bd = 16 * 16;
    for (const n of getMemory().nodes) {
      const d = (n.x - mx) ** 2 + (n.y - my) ** 2;
      if (d < bd) {
        bd = d;
        best = n.id;
      }
    }
    return best;
  };

  const selected = selectedId ? mem.nodes.find((n) => n.id === selectedId) : null;

  return (
    <div className="memory-layer">
      <canvas
        ref={canvasRef}
        className="memory-canvas"
        onPointerDown={(e) => {
          const id = pickNode(e.clientX, e.clientY);
          const v = viewRef.current;
          dragRef.current = { id, sx: e.clientX, sy: e.clientY, vx: v.x, vy: v.y, moved: false };
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = dragRef.current;
          if (!d) {
            hoverRef.current = pickNode(e.clientX, e.clientY);
            return;
          }
          const dx = e.clientX - d.sx;
          const dy = e.clientY - d.sy;
          if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
          const v = viewRef.current;
          if (d.id) {
            const node = getMemory().nodes.find((n) => n.id === d.id);
            if (node) {
              node.x += dx / v.k;
              node.y += dy / v.k;
              node.vx = 0;
              node.vy = 0;
              d.sx = e.clientX;
              d.sy = e.clientY;
            }
          } else {
            v.x = d.vx + dx / v.k;
            v.y = d.vy + dy / v.k;
          }
        }}
        onPointerUp={() => {
          const d = dragRef.current;
          if (d && !d.moved) setSelectedId(d.id);
          dragRef.current = null;
        }}
        onWheel={(e) => {
          const v = viewRef.current;
          v.k = Math.min(2.6, Math.max(0.4, v.k * (1 - e.deltaY * 0.0012)));
        }}
      />

      <div className="memory-legend">
        <span><i style={{ background: TYPE_COLOR.note }} />NOTE</span>
        <span><i style={{ background: TYPE_COLOR.folder }} />FOLDER</span>
        <span><i style={{ background: TYPE_COLOR.tag }} />TAG</span>
        <span style={{ color: "var(--faint)" }}>LIVE FS EVENTS: {noteCount}</span>
      </div>

      <div className="memory-card panel">
        <div className="panel-title">
          {selected ? selected.title : "VAULT INSPECTOR"}
          <span className="aux">{selected ? selected.type.toUpperCase() : `${mem.nodes.length} NODES`}</span>
        </div>
        <div className="panel-body">
          <div className="gap6" style={{ marginBottom: 10 }}>
            <input
              className="input"
              style={{ flex: 1, padding: "5px 8px", fontSize: 10 }}
              placeholder="inscribe note…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && draft.trim()) {
                  memoryProvider.manualNote(draft.trim());
                  setDraft("");
                }
              }}
            />
            <button
              className="btn sm gold"
              onClick={() => {
                if (draft.trim()) {
                  memoryProvider.manualNote(draft.trim());
                  setDraft("");
                }
              }}
            >
              +
            </button>
          </div>
          {selected ? (
            <div className="body">{selected.body || "— empty node —"}</div>
          ) : (
            <div className="body">
              Select a node to inspect its contents.
              {"\n\n"}The <b>MockMemoryProvider</b> replays vault file-system events every few
              seconds — notes materialize, backlinks weave, the constellation reorganizes.
              {"\n\n"}<b>ObsidianBridge</b> stands ready for MCP / WebSocket attachment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
