import { useState } from "react";
import { useVortex } from "../store/vortex-store";
import { simulator } from "../state/simulator";

export function LowerStream(): JSX.Element {
  const log = useVortex((s) => s.log);
  const [cmd, setCmd] = useState("");

  const items = log.slice(-16);
  const half = (prefix: string) => (
    <>
      {items.map((l) => (
        <span key={`${prefix}-${l.id}`} className="ticker-item">
          <b>[{l.tag}]</b> {l.msg}
        </span>
      ))}
    </>
  );

  const submit = () => {
    if (!cmd.trim()) return;
    simulator.handleCommand(cmd);
    setCmd("");
  };

  return (
    <div className="bottom-stream">
      <div className="ticker" aria-hidden>
        <div className="ticker-track">
          {half("a")}
          {half("b")}
        </div>
      </div>
      <div className="cmd-wrap">
        <span className="cmd-prompt">Ω&gt;</span>
        <input
          className="cmd-input"
          value={cmd}
          placeholder="command the vortex… (try: human face · spike · briefing · help)"
          onChange={(e) => setCmd(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          spellCheck={false}
        />
      </div>
    </div>
  );
}
