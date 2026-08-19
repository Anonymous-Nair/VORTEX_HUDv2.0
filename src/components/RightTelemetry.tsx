import { useEffect, useRef } from "react";
import { useVortex } from "../store/vortex-store";
import { telemetryModel } from "../state/simulator";
import { getEngine } from "../render/engine";
import { Sparkline } from "./Sparkline";

export function RightTelemetry(): JSX.Element {
  const telemetry = useVortex((s) => s.telemetry);
  const agents = useVortex((s) => s.agents);
  const selectedAgentId = useVortex((s) => s.selectedAgentId);
  const selectAgent = useVortex((s) => s.selectAgent);
  const setTab = useVortex((s) => s.setTab);
  const setCameraMode = useVortex((s) => s.setCameraMode);
  const log = useVortex((s) => s.log);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  const follow = (id: string) => {
    selectAgent(id);
    setTab("agents");
    setCameraMode("AGENT_FOLLOW");
  };

  const ws = (id: string) => {
    selectAgent(id);
    setTab("agents");
    setCameraMode("WORKSTATION_FOCUS");
  };

  return (
    <aside className="right-rail">
      <section className="panel">
        <div className="panel-title">
          CORE TELEMETRY <span className="aux">LIVE·5Hz</span>
        </div>
        <div className="panel-body spark-grid">
          <div className="spark-cell">
            <div className="spark-label">POWER DRAW</div>
            <div className="spark-val hot">
              {telemetry.power.toFixed(1)}
              <small>MW</small>
            </div>
            <Sparkline series={() => telemetryModel.power} color="#ffb700" max={110} />
          </div>
          <div className="spark-cell">
            <div className="spark-label">CORE TEMP</div>
            <div className="spark-val cold">
              {telemetry.temp.toFixed(0)}
              <small>K</small>
            </div>
            <Sparkline series={() => telemetryModel.temp} color="#00f0ff" max={430} />
          </div>
          <div className="spark-cell">
            <div className="spark-label">PKT RATE</div>
            <div className="spark-val cold">
              {telemetry.packets.toFixed(0)}
              <small>/s</small>
            </div>
            <Sparkline series={() => telemetryModel.packets} color="#00f0ff" max={1000} />
          </div>
          <div className="spark-cell">
            <div className="spark-label">NN LATENCY</div>
            <div className="spark-val hot">
              {telemetry.latency.toFixed(1)}
              <small>ms</small>
            </div>
            <Sparkline series={() => telemetryModel.latency} color="#d4af37" max={130} />
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-title">
          SWARM ROSTER <span className="aux">{agents.length} UNITS</span>
        </div>
        <div className="panel-body roster">
          {agents.map((a) => (
            <div
              key={a.id}
              className={`roster-row ${selectedAgentId === a.id ? "sel" : ""}`}
              onClick={() => follow(a.id)}
              onDoubleClick={() => ws(a.id)}
              title="click: follow · double-click: workstation focus"
            >
              <span className="dot" data-status={a.status} style={{ color: a.color }} />
              <div>
                <div className="roster-name" style={{ color: a.color }}>
                  {a.codename} <span style={{ color: "var(--faint)", fontWeight: 400 }}>· {a.role}</span>
                </div>
                <div className="roster-task">{a.task}</div>
              </div>
              <div className="roster-right">
                <div className="roster-status">{a.status}</div>
                <div className="prog">
                  <div className="prog-fill" style={{ transform: `scaleX(${a.progress / 100})` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" style={{ flex: 1, minHeight: 120, display: "flex", flexDirection: "column" }}>
        <div className="panel-title">
          EVENT STREAM <span className="aux">{getEngine() ? "BUS·LIVE" : "BUS"}</span>
        </div>
        <div className="panel-body log-list" ref={logRef}>
          {log.map((l) => (
            <div key={l.id} className="log-line" data-level={l.level}>
              <span className="t">{l.time}</span>
              <b>[{l.tag}]</b>
              {l.msg}
            </div>
          ))}
          {log.length === 0 && <div className="log-line" data-level="sys"><b>[SYS]</b>awaiting first transmission…</div>}
        </div>
      </section>
    </aside>
  );
}
