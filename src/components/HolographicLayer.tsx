import { useRef } from "react";
import type { HoloWindow } from "../types";
import { useVortex } from "../store/vortex-store";
import { bus } from "../store/event-bus";
import { VAULT_FILES } from "../data/defaults";

/* ============================================================
   HOLOGRAPHIC CONTROL LAB — floating glass workspace
   move · resize · minimize · focus · close
   VisionInputProvider / HandTrackingProvider / GestureRecognizer
   abstractions emit GESTURE_DETECTED (PINCH · GRAB · ZOOM · ROTATE · SWIPE)
   ============================================================ */

export interface GestureEventDetail {
  gesture: "PINCH" | "GRAB" | "ZOOM" | "ROTATE" | "SWIPE";
  confidence: number;
}

/** Future-ready gesture pipeline contract (vision / hand-tracking). */
export class GestureRecognizer {
  recognize(gesture: GestureEventDetail["gesture"]): void {
    bus.emit("GESTURE_DETECTED", { gesture });
  }
}

const recognizer = new GestureRecognizer();

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
            recognizer.recognize("SWIPE");
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

export function HolographicLayer(): JSX.Element {
  const windows = useVortex((s) => s.holoWindows);
  const holoZ = useVortex((s) => s.holoZ);
  const moveHolo = useVortex((s) => s.moveHolo);
  const resizeHolo = useVortex((s) => s.resizeHolo);
  const focusHolo = useVortex((s) => s.focusHolo);
  const minimizeHolo = useVortex((s) => s.minimizeHolo);
  const closeHolo = useVortex((s) => s.closeHolo);
  const dragRef = useRef<{ id: string; mode: "move" | "resize"; sx: number; sy: number; x: number; y: number; w: number; h: number } | null>(null);

  const startDrag = (e: React.PointerEvent, w: HoloWindow, mode: "move" | "resize") => {
    e.stopPropagation();
    focusHolo(w.id);
    dragRef.current = { id: w.id, mode, sx: e.clientX, sy: e.clientY, x: w.x, y: w.y, w: w.w, h: w.h };
    recognizer.recognize(mode === "move" ? "GRAB" : "PINCH");
    const onMove = (ev: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = ev.clientX - d.sx;
      const dy = ev.clientY - d.sy;
      if (d.mode === "move") moveHolo(d.id, d.x + dx, d.y + dy);
      else resizeHolo(d.id, Math.max(210, d.w + dx), Math.max(90, d.h + dy));
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <div className="holo-layer">
      {windows.map((w) => (
        <div
          key={w.id}
          className={`holo-win ${w.z === holoZ ? "focused" : ""} ${w.minimized ? "min" : ""}`}
          style={{ left: w.x, top: w.y, width: w.w, height: w.minimized ? "auto" : w.h, zIndex: w.z }}
          onPointerDown={() => focusHolo(w.id)}
        >
          <div className="holo-bar" onPointerDown={(e) => startDrag(e, w, "move")}>
            <span className="holo-title">{TITLES[w.kind]}</span>
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
    </div>
  );
}
