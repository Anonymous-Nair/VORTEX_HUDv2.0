import { useEffect, useState } from "react";
import { useVortex } from "../store/vortex-store";
import { synth } from "../audio/synth";

export function TopBar(): JSX.Element {
  const coreState = useVortex((s) => s.coreState);
  const cameraMode = useVortex((s) => s.cameraMode);
  const fps = useVortex((s) => s.stats.fps);
  const audioOn = useVortex((s) => s.audioOn);
  const debugOpen = useVortex((s) => s.debugOpen);
  const setDebugOpen = useVortex((s) => s.setDebugOpen);
  const toggleAudio = useVortex((s) => s.toggleAudio);
  const pushLog = useVortex((s) => s.pushLog);

  const [utc, setUtc] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setUtc(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const onAudio = () => {
    synth.ensure();
    synth.resume();
    const next = !audioOn;
    synth.setMuted(!next);
    toggleAudio();
    if (next) synth.chime(1560);
    pushLog("sys", "AUDIO", next ? "procedural synth engine online — 30 Hz drone engaged" : "audio reactor muted");
  };

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-name">
          VORTEX<em>_</em>HUD
        </span>
        <span className="omega">Ω</span>
        <span className="brand-ver">v2.0.7 // SENTIENT-GRADE</span>
      </div>

      <div className="state-badge" data-state={coreState}>
        <span className="pip" />
        {coreState}
      </div>

      <span className="chip">
        CAM <b>{cameraMode}</b>
      </span>
      <span className="chip gold">
        UPLINK <b>SECURE·AES-Ω</b>
      </span>

      <div className="top-spacer" />

      <span className="chip">
        UTC <b>{pad(utc.getUTCHours())}:{pad(utc.getUTCMinutes())}:{pad(utc.getUTCSeconds())}</b>
      </span>
      <span className="chip">
        FPS <b>{fps.toFixed(0)}</b>
      </span>

      <button
        className={`icon-btn ${audioOn ? "on" : ""}`}
        title="toggle procedural audio engine"
        onClick={onAudio}
        aria-label="toggle audio"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
          {audioOn ? (
            <path d="M16 8c1.5 1 2.5 2.4 2.5 4S17.5 15 16 16M18.5 5.5C21 7 22.5 9.4 22.5 12s-1.5 5-4 6.5" />
          ) : (
            <path d="M16 9l5 6M21 9l-5 6" />
          )}
        </svg>
      </button>

      <button
        className={`icon-btn ${debugOpen ? "on" : ""}`}
        title="self-healing debug console [`]"
        onClick={() => setDebugOpen(!debugOpen)}
        aria-label="toggle debug console"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17l6-6-6-6M12 19h8" />
        </svg>
      </button>
    </header>
  );
}
