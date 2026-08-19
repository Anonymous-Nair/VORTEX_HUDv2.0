import { useRef } from "react";
import type { HoloWindow } from "../types";
import { useVortex } from "../store/vortex-store";
import { VAULT_FILES } from "../data/defaults";
import { getGesturePipeline } from "../vision/vision";
import { clamp } from "../utils/math";

/* ============================================================
   HOLOGRAPHIC CONTROL LAB — floating glass workspace
   Window ops via the gesture pipeline:
   · GRAB   — drag the title bar to move
   · ROTATE — ALT + drag the title bar (or double-click to reset)
   · ZOOM   — mouse wheel over a window scales it in place
   · PINCH  — two-pointer pinch scales (touch rigs)
   · SWIPE  — fast flick on empty space (handled by the Viewport)
   VisionInputProvider / HandTrackingProvider run mock streams
   until a live webcam / WebSocket rig attaches.
   ============================================================ */

function TerminalBody(): JSX.Element {
  const log = useVortex((s) => s.log);
  return (
    <div>
      {log.slice(-14).map((l) => (
        <div key={l.id} className="holo-term-line">
          <b>[{l.tag}]</b> {l.msg}
        </div>
      ))}
      <div className="holo-term-line gold">
        <b>vortex@Ω</b> ~ <span className="caret" />
      </div>
    </div>
  );
}

function TelemetryBody(): JSX.Element {
  const t = useVortex((s) => s.telemetry);
  const meters: Array<[string, number, string]> = [
    ["PLASMA FLOW", t.power, "#00f0ff"],
    ["THERMAL", (t.temp / 430) * 100, "#ffb700"],
    ["THROUGHPUT", t.throughput * 10, "#00ff66"],
    ["LATENCY", (t.latency / 130) * 100, "#ff3333"],
  ];
  return (
    <div>
      <div style={{ fontFamily: "var(--disp)", fontSize: 26, fontWeight: 800, color: "var(--gold2)" }}>
        {t.power.toFixed(1)}
        <span style={{ fontSize: 11, color: "var(--dim)", marginLeft: 6 }}>MW</span>
      </div>
      {meters.map(([label, val, color]) => (
        <div className="holo-meter" key={label}>
          <span style={{ width: 84 }}>{label}</span>
          <div className="bar">
            <i style={{ transform: `scaleX(${Math.min(1, val / 100)})`, background: `linear-gradient(90deg, ${color}, #d4af37)` }} />
          </div>
          <span style={{ width: 34, textAlign: "right", color }}>{Math.min(999, Math.round(val))}</span>
        </div>
      ))}
    </div>
  );
}

function FilesBody(): JSX.Element {
  const pushLog = useVortex((s) => s.pushLog);
  return (
    <div>
      {VAULT_FILES.map((f) => (
        <div
          key={f.name}
          className="holo-file"
          onClick={() => {
            pushLog("info", "VAULT", `opened /${f.name} — holographic projection active`);
            getGesturePipeline().recognize("SWIPE", 0.7);
          }}
        >
          <span>{f.name}</span>
          <span style={{ color: "var(--faint)" }}>
            {f.size} · {f.mod}
          </span>
        </div>
      ))}
    </div>
  );
}

const TITLES: Record<HoloWindow["kind"], string> = {
  terminal: "LIVE TERMINAL // BUS STREAM",
  telemetry: "CORE TELEMETRY // HOLO",
  files: "VAULT FILES // PROJECTION",
};

interface DragState {
  id: string;
  mode: "move" | "resize" | "rotate";
  sx: number;
  sy: number;
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  cx: number;
  cy: number;
}

export function HolographicLayer(): JSX.Element {
  const windows = useVortex((s) => s.holoWindows);
  const holoZ = useVortex((s) => s.holoZ);
  const moveHolo = useVortex((s) => s.moveHolo);
  const resizeHolo = useVortex((s) => s.resizeHolo);
  const rotateHolo = useVortex((s) => s.rotateHolo);
  const focusHolo = useVortex((s) => s.focusHolo);
  const minimizeHolo = useVortex((s) => s.minimizeHolo);
  const closeHolo = useVortex((s) => s.closeHolo);
  const dragRef = useRef<DragState | null>(null);
  const pinchRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const recognizer = getGesturePipeline();

  const startDrag = (e: React.PointerEvent, w: HoloWindow, mode: DragState["mode"]) => {
    e.stopPropagation();
    focusHolo(w.id);
    dragRef.current = {
      id: w.id,
      mode,
      sx: e.clientX,
      sy: e.clientY,
      x: w.x,
      y: w.y,
      w: w.w,
      h: w.h,
      rot: w.rot,
      cx: w.x + w.w / 2,
      cy: w.y + (w.minimized ? 14 : w.h / 2),
    };
    recognizer.recognize(mode === "rotate" ? "ROTATE" : "GRAB", 0.95);
    const onMove = (ev: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = ev.clientX - d.sx;
      const dy = ev.clientY - d.sy;
      if (d.mode === "move") {
        moveHolo(d.id, d.x + dx, d.y + dy);
      } else if (d.mode === "resize") {
        resizeHolo(d.id, Math.max(210, d.w + dx), Math.max(90, d.h + dy));
      } else {
        const a0 = Math.atan2(d.sy - d.cy, d.sx - d.cx);
        const a1 = Math.atan2(ev.clientY - d.cy, ev.clientX - d.cx);
        let deg = d.rot + ((a1 - a0) * 180) / Math.PI;
        while (deg > 180) deg -= 360;
        while (deg < -180) deg += 360;
        rotateHolo(d.id, deg);
      }
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const onWindowWheel = (e: React.WheelEvent, w: HoloWindow) => {
    e.stopPropagation();
    const factor = 1 - e.deltaY * 0.0012;
    const nw = clamp(w.w * factor, 210, 720);
    const nh = clamp(w.h * factor, 90, 560);
    resizeHolo(w.id, nw, nh);
    moveHolo(w.id, w.x - (nw - w.w) / 2, w.y - (nh - w.h) / 2);
    recognizer.recognize("ZOOM", clamp(Math.abs(e.deltaY) / 120, 0.3, 1));
  };

  const onWindowPointerDown = (e: React.PointerEvent, w: HoloWindow) => {
    focusHolo(w.id);
    pinchRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinchRef.current.size === 2) {
      const pts = [...pinchRef.current.values()];
      pinchRef.current.set(-1, { x: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y), y: 0 });
    }
  };
  const onWindowPointerMove = (e: React.PointerEvent, w: HoloWindow) => {
    if (!pinchRef.current.has(e.pointerId)) return;
    pinchRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinchRef.current.size === 3) {
      const pts = [...pinchRef.current.entries()].filter(([id]) => id !== -1).map(([, v]) => v);
      if (pts.length === 2) {
        const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const prev = pinchRef.current.get(-1);
        if (prev && prev.x > 0) {
          const factor = d / prev.x;
          const nw = clamp(w.w * factor, 210, 720);
          const nh = clamp(w.h * factor, 90, 560);
          resizeHolo(w.id, nw, nh);
          recognizer.recognize("PINCH", clamp(Math.abs(factor - 1) * 8, 0.3, 1));
        }
        pinchRef.current.set(-1, { x: d, y: 0 });
      }
    }
  };
  const onWindowPointerUp = (e: React.PointerEvent) => {
    pinchRef.current.delete(e.pointerId);
    pinchRef.current.delete(-1);
  };

  return (
    <div className="holo-layer">
      {windows.map((w) => (
        <div
          key={w.id}
          className={`holo-win ${w.z === holoZ ? "focused" : ""} ${w.minimized ? "min" : ""}`}
          style={{
            left: w.x,
            top: w.y,
            width: w.w,
            height: w.minimized ? "auto" : w.h,
            zIndex: w.z,
            transform: `rotate(${w.rot}deg)`,
          }}
          onPointerDown={(e) => onWindowPointerDown(e, w)}
          onPointerMove={(e) => onWindowPointerMove(e, w)}
          onPointerUp={onWindowPointerUp}
          onWheel={(e) => onWindowWheel(e, w)}
        >
          <div
            className="holo-bar"
            onPointerDown={(e) => startDrag(e, w, e.altKey ? "rotate" : "move")}
            onDoubleClick={() => rotateHolo(w.id, 0)}
            title="drag: move · alt+drag: rotate · double-click: reset · wheel: zoom"
          >
            <span className="holo-title">
              {TITLES[w.kind]}
              {Math.abs(w.rot) > 0.5 && (
                <span style={{ color: "var(--gold2)", marginLeft: 8 }}>∠{w.rot.toFixed(0)}°</span>
              )}
            </span>
            <span className="holo-btns">
              <button onClick={() => minimizeHolo(w.id)} title="minimize">—</button>
              <button onClick={() => closeHolo(w.id)} title="close">×</button>
            </span>
          </div>
          <div className="holo-body">
            {w.kind === "terminal" && <TerminalBody />}
            {w.kind === "telemetry" && <TelemetryBody />}
            {w.kind === "files" && <FilesBody />}
          </div>
          {!w.minimized && <div className="holo-resize" onPointerDown={(e) => startDrag(e, w, "resize")} />}
        </div>
      ))}
      {windows.length === 0 && (
        <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", pointerEvents: "none", fontSize: 9, letterSpacing: "0.3em", color: "var(--faint)" }}>
          HOLO DECK CLEAR — OPEN A WINDOW FROM THE RAIL
        </div>
      )}
    </div>
  );
}
