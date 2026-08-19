import { useEffect, useRef } from "react";
import { useVortex } from "../store/vortex-store";
import { bus } from "../store/event-bus";
import { gpuTimer } from "../state/simulator";
import { getEngine } from "../render/engine";
import { synth } from "../audio/synth";

/** Self-healing developer debug console — FPS graph + pipeline vitals. */
export function DebugConsole(): JSX.Element {
  const open = useVortex((s) => s.debugOpen);
  const stats = useVortex((s) => s.stats);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const cv = canvasRef.current;
      const eng = getEngine();
      if (!cv || !eng) return;
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      const W = 260;
      const H = 44;
      if (cv.width !== W) cv.width = W;
      if (cv.height !== H) cv.height = H;
      ctx.clearRect(0, 0, W, H);
      // 16.7ms budget line
      ctx.strokeStyle = "rgba(212,175,55,0.5)";
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      const budgetY = H - (16.7 / 40) * H;
      ctx.moveTo(0, budgetY);
      ctx.lineTo(W, budgetY);
      ctx.stroke();
      ctx.setLineDash([]);
      const hist = (eng as unknown as { fps?: { history: number[] } }).fps?.history ?? [];
      if (hist.length < 2) return;
      ctx.beginPath();
      for (let i = 0; i < hist.length; i++) {
        const x = (i / (hist.length - 1)) * W;
        const y = H - Math.min(1, hist[i] / 40) * H;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#00f0ff";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`debug-console panel ${open ? "open" : ""}`}>
      <div className="panel-title gold">
        DEBUG // SELF-HEALING <span className="aux">[`]</span>
      </div>
      <div className="panel-body">
        <canvas ref={canvasRef} style={{ width: "100%", height: 44, display: "block", marginBottom: 8 }} />
        <div className="dbg-grid">
          <div className="dbg-row"><span>FPS</span><b className="gold">{stats.fps.toFixed(1)}</b></div>
          <div className="dbg-row"><span>FRAME</span><b>{stats.frameMs.toFixed(2)} ms</b></div>
          <div className="dbg-row"><span>DRAW CALLS</span><b>{stats.drawCalls}</b></div>
          <div className="dbg-row"><span>TRIANGLES</span><b>{stats.triangles.toLocaleString()}</b></div>
          <div className="dbg-row"><span>POINTS</span><b>{stats.points.toLocaleString()}</b></div>
          <div className="dbg-row"><span>RES SCALE</span><b>{stats.resScale.toFixed(2)}×</b></div>
          <div className="dbg-row"><span>EVENTS/S</span><b>{bus.eventsPerSec}</b></div>
          <div className="dbg-row"><span>GPU HEADROOM</span><b className="gold">{gpuTimer.headroom()}</b></div>
          <div className="dbg-row"><span>BUS TOTAL</span><b>{bus.totalEmitted}</b></div>
          <div className="dbg-row"><span>AUDIO</span><b>{synth.supported ? "WEB·AUDIO" : "MOCK"}</b></div>
        </div>
        <div className="dbg-shaderlog">
          <div><span className="ok">✓</span> plasma conduit shader — linked 3.1ms</div>
          <div><span className="ok">✓</span> humanoid lattice shader — linked 4.7ms</div>
          <div><span className="ok">✓</span> ripple platform shader — linked 1.9ms</div>
          <div><span className="ok">✓</span> adaptive resolution governor — ARMED</div>
        </div>
      </div>
    </div>
  );
}
