import { useEffect, useRef, useState } from "react";
import { useVortex } from "../store/vortex-store";
import { createEngine, destroyEngine, getEngine } from "../render/engine";
import { simulator } from "../state/simulator";
import { synth } from "../audio/synth";
import { MissionMap } from "./MissionMap";
import { MemoryGraph } from "./MemoryGraph";
import { HolographicLayer } from "./HolographicLayer";
import { CoreControlLab } from "./CoreControlLab";

const TAB_TITLES: Record<string, { title: string; sub: string }> = {
  core: { title: "CENTRAL CORE", sub: "monumental energy arc · plasma conduit array" },
  agents: { title: "SECRET AGENT HQ", sub: "autonomous swarm operations floor · 8 units" },
  intel: { title: "INTELLIGENCE LATTICE", sub: "65,000-particle SDF humanoid · spectrum-bound skeleton" },
  network: { title: "NEURAL CORTEX", sub: "10-layer token propagation engine" },
  missions: { title: "MISSION MIND-MAP", sub: "living operational graph · drag · link · pulse" },
  memory: { title: "MEMORY VAULT", sub: "obsidian-ready backlink constellation" },
};

export function Viewport(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const tab = useVortex((s) => s.tab);
  const holoOpen = useVortex((s) => s.holoOpen);
  const engineFailed = useVortex((s) => s.engineFailed);
  const [warp, setWarp] = useState(false);
  const [flash, setFlash] = useState(0);
  const firstTab = useRef(true);

  /* engine lifecycle */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = createEngine(canvas);
    if (engine) {
      engine.onFrame = (dt) => simulator.frameTick(dt);
      simulator.init();
      const onResize = () => engine.resize();
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        destroyEngine();
      };
    }
    simulator.init();
    return undefined;
  }, []);

  /* cinematic tab transition */
  useEffect(() => {
    if (firstTab.current) {
      firstTab.current = false;
      return;
    }
    setWarp(true);
    setFlash((f) => f + 1);
    const id = setTimeout(() => setWarp(false), 720);
    return () => clearTimeout(id);
  }, [tab]);

  const meta = TAB_TITLES[tab];
  const dim2d = tab === "missions" || tab === "memory";

  return (
    <div className={`viewport-frame ${warp ? "warp" : ""} ${dim2d ? "dim" : ""}`}>
      <div className="canvas-host" ref={hostRef}>
        <canvas ref={canvasRef} />
      </div>

      {warp && <div className="warp-grid" />}
      <div key={flash} className={`fx-flash ${flash > 0 ? "go" : ""}`} />
      <div className="fx-scan" />
      <div className="fx-vignette" />

      <span className="cb cb1" />
      <span className="cb cb2" />
      <span className="cb cb3" />
      <span className="cb cb4" />

      <div className="tab-title" key={tab}>
        <h1>{meta.title}</h1>
        <p>{meta.sub}</p>
        <div className="rule" />
      </div>

      <div className="hud-side-note l">VORTEX // SECTOR Ω-77 · OBSIDIAN SUBSTRATE</div>
      <div className="hud-side-note r">PLASMA ENVELOPE 312K · CONTAINMENT NOMINAL</div>

      {tab === "missions" && <MissionMap />}
      {tab === "memory" && <MemoryGraph />}
      {holoOpen && tab === "core" && <HolographicLayer />}
      <CoreControlLab />

      {engineFailed && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 30 }}>
          <div className="panel" style={{ padding: 26, maxWidth: 420, textAlign: "center" }}>
            <div className="panel-title gold">RENDER FALLBACK</div>
            <p style={{ color: "var(--dim)", fontSize: 11, lineHeight: 1.7 }}>
              WebGL2 pipeline unavailable in this environment. VORTEX remains operational in
              telemetry-only mode — all subsystems, graphs and the swarm continue to run.
            </p>
          </div>
        </div>
      )}
      {!getEngine() && !engineFailed && <span style={{ display: "none" }}>{synth.supported ? "" : ""}</span>}
    </div>
  );
}
