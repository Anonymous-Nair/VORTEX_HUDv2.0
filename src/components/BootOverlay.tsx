import { useEffect, useState } from "react";
import { BOOT_LINES } from "../data/defaults";
import { useVortex } from "../store/vortex-store";

export function BootOverlay(): JSX.Element | null {
  const booted = useVortex((s) => s.booted);
  const setBooted = useVortex((s) => s.setBooted);
  const pushLog = useVortex((s) => s.pushLog);
  const [lines, setLines] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (booted) return;
    const id = setInterval(() => {
      setLines((l) => {
        if (l >= BOOT_LINES.length) {
          clearInterval(id);
          return l;
        }
        return l + 1;
      });
    }, 120);
    return () => clearInterval(id);
  }, [booted]);

  useEffect(() => {
    if (lines >= BOOT_LINES.length && !booted) {
      const id = setTimeout(() => {
        setBooted(true);
        pushLog("sys", "BOOT", "VORTEX_HUD Ω online — all systems nominal");
        pushLog("info", "DIRECTOR", "press ▶ on the timeline for the 30 s cinematic sequence");
      }, 500);
      const id2 = setTimeout(() => setGone(true), 1250);
      return () => {
        clearTimeout(id);
        clearTimeout(id2);
      };
    }
    return undefined;
  }, [lines, booted, setBooted, pushLog]);

  const skip = () => {
    if (!booted) {
      setLines(BOOT_LINES.length);
    }
  };

  if (booted && gone) return null;

  return (
    <div className={`boot-overlay ${booted ? "done" : ""}`} onClick={skip}>
      <div className="boot-brand">
        VORTEX_HUD<span>Ω</span>
      </div>
      <div className="boot-lines">
        {BOOT_LINES.slice(0, lines).map((l, i) => (
          <div key={i} className={l.cls}>
            {l.text}
          </div>
        ))}
      </div>
      <div className="boot-bar">
        <div className="boot-fill" style={{ transform: `scaleX(${lines / BOOT_LINES.length})` }} />
      </div>
      <div className="boot-hint">{lines >= BOOT_LINES.length ? "INITIALIZING…" : "CLICK TO FAST-BOOT"}</div>
    </div>
  );
}
