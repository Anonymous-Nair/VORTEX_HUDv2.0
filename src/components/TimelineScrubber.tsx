import { useRef } from "react";
import { useVortex } from "../store/vortex-store";
import { simulator, TIMELINE_DURATION } from "../state/simulator";
import { TIMELINE_CUES } from "../data/defaults";
import { synth } from "../audio/synth";

const SPEEDS = [0.5, 1, 2, 4];

export function TimelineScrubber(): JSX.Element {
  const playing = useVortex((s) => s.tlPlaying);
  const t = useVortex((s) => s.tlTime);
  const speed = useVortex((s) => s.tlSpeed);
  const loop = useVortex((s) => s.tlLoop);
  const setTimeline = useVortex((s) => s.setTimeline);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrubbingRef = useRef(false);

  const posFromEvent = (clientX: number): number => {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const u = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return u * TIMELINE_DURATION;
  };

  const fmt = (v: number) => {
    const s = Math.floor(v);
    const d = Math.floor((v - s) * 10);
    return `00:${String(s).padStart(2, "0")}.${d}`;
  };

  return (
    <div className="bottom-timeline">
      <button
        className="tl-btn"
        onClick={() => {
          simulator.togglePlay();
          synth.chime(playing ? 700 : 1400);
        }}
        title={playing ? "pause cinematic" : "play 30s cinematic demo"}
      >
        {playing ? (
          <svg viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="1.5" width="3" height="9" /><rect x="7" y="1.5" width="3" height="9" /></svg>
        ) : (
          <svg viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 1.2l8 4.8-8 4.8z" /></svg>
        )}
      </button>

      <button
        className="tl-speed"
        onClick={() => {
          const idx = SPEEDS.indexOf(speed);
          const next = SPEEDS[(idx + 1) % SPEEDS.length];
          setTimeline({ speed: next });
        }}
        title="playback speed"
      >
        {speed}×
      </button>

      <button
        className={`tl-btn ${loop ? "" : ""}`}
        style={{ color: loop ? "var(--gold2)" : "var(--faint)" }}
        onClick={() => setTimeline({ loop: !loop })}
        title="loop sequence"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M17 2l4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      </button>

      <div
        className="tl-track"
        ref={trackRef}
        onPointerDown={(e) => {
          scrubbingRef.current = true;
          simulator.scrubbing = true;
          simulator.scrubTo(posFromEvent(e.clientX));
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (scrubbingRef.current) simulator.scrubTo(posFromEvent(e.clientX));
        }}
        onPointerUp={() => {
          scrubbingRef.current = false;
          simulator.scrubbing = false;
        }}
      >
        <div className="tl-rail" />
        <div className="tl-fill" style={{ width: `${(t / TIMELINE_DURATION) * 100}%` }} />
        {TIMELINE_CUES.map((c, i) => (
          <div
            key={i}
            className="tl-marker"
            data-kind={c.kind}
            style={{ left: `${(c.t / TIMELINE_DURATION) * 100}%` }}
            title={`${c.kind}: ${c.value}`}
          />
        ))}
        <div className="tl-head" style={{ left: `${(t / TIMELINE_DURATION) * 100}%` }} />
      </div>

      <div className="tl-time">
        {fmt(t)} <span style={{ color: "var(--faint)" }}>/ {fmt(TIMELINE_DURATION)}</span>
        <small>DIRECTOR TIMELINE</small>
      </div>
    </div>
  );
}
