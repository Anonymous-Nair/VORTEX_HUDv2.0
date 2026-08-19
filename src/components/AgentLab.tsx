import { useEffect, useState } from "react";
import type { AgentDef, AgentRole } from "../types";
import { useVortex } from "../store/vortex-store";
import { AGENT_DEFS, CODENAME_POOL, NAME_POOL, TASK_POOLS } from "../data/defaults";
import { AGENT_SWATCHES, ROLE_COLORS } from "../styles/theme";
import { uid } from "../utils/math";

/* ============================================================
   AGENT CONFIGURATION LAB — create · duplicate · edit · delete
   reset · import · export — persisted to localStorage and hot
   applied to the live swarm floor.
   ============================================================ */

const ROLES: AgentRole[] = ["STRATEGIST", "RESEARCHER", "CODER", "ANALYST", "SECURITY", "CREATIVE", "AUTOMATION", "EXECUTIVE"];

export function AgentLab(): JSX.Element | null {
  const open = useVortex((s) => s.labOpen);
  const setOpen = useVortex((s) => s.setLabOpen);
  const agentDefs = useVortex((s) => s.agentDefs);
  const setAgentDefs = useVortex((s) => s.setAgentDefs);
  const pushLog = useVortex((s) => s.pushLog);

  const [draft, setDraft] = useState<AgentDef[]>([]);
  const [selId, setSelId] = useState<string | null>(null);
  const [io, setIo] = useState("");

  useEffect(() => {
    if (open) {
      setDraft(agentDefs.map((a) => ({ ...a, personality: { ...a.personality } })));
      setSelId(agentDefs[0]?.id ?? null);
      setIo("");
    }
  }, [open, agentDefs]);

  if (!open) return null;
  const sel = draft.find((a) => a.id === selId) ?? null;

  const patch = (p: Partial<AgentDef>) => {
    if (!sel) return;
    setDraft((d) => d.map((a) => (a.id === sel.id ? { ...a, ...p } : a)));
  };
  const patchPers = (key: keyof AgentDef["personality"], v: number) => {
    if (!sel) return;
    setDraft((d) =>
      d.map((a) => (a.id === sel.id ? { ...a, personality: { ...a.personality, [key]: v } } : a))
    );
  };

  const createAgent = () => {
    const role = ROLES[draft.length % ROLES.length];
    const agent: AgentDef = {
      id: uid("ag"),
      name: NAME_POOL[draft.length % NAME_POOL.length],
      codename: CODENAME_POOL[draft.length % CODENAME_POOL.length],
      role,
      department: "RESERVE",
      color: ROLE_COLORS[role],
      speed: 1,
      personality: { focus: 0.6, drive: 0.7, sociability: 0.5 },
      workstation: draft.length % 8,
    };
    setDraft((d) => [...d, agent]);
    setSelId(agent.id);
  };

  const apply = () => {
    if (draft.length < 3) {
      pushLog("err", "LAB", "roster rejected — minimum 3 autonomous units required");
      return;
    }
    setAgentDefs(draft);
    pushLog("ok", "LAB", `roster committed — ${draft.length} units hot-swapped onto the floor`);
    setOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => setOpen(false)}>
      <div className="lab-modal panel" onClick={(e) => e.stopPropagation()}>
        <div className="lab-head">
          AGENT CONFIG LAB <span className="sub">// SWARM PERSONA ENGINE — PERSISTED TO LOCAL VAULT</span>
        </div>

        <div className="lab-list">
          {draft.map((a) => (
            <button key={a.id} className={`lab-item ${a.id === selId ? "sel" : ""}`} onClick={() => setSelId(a.id)}>
              <span className="sw" style={{ background: a.color, color: a.color }} />
              <span>
                {a.codename}
                <br />
                <span style={{ fontSize: 7.5, color: "var(--faint)", fontWeight: 400 }}>{a.role} · WS-{a.workstation}</span>
              </span>
            </button>
          ))}
          <button className="btn sm gold wide mt8" onClick={createAgent}>+ NEW UNIT</button>
        </div>

        <div className="lab-form">
          {sel ? (
            <>
              <div className="field">
                <span className="field-label">Name</span>
                <input className="input" value={sel.name} onChange={(e) => patch({ name: e.target.value.toUpperCase() })} />
              </div>
              <div className="field">
                <span className="field-label">Codename</span>
                <input className="input" value={sel.codename} onChange={(e) => patch({ codename: e.target.value.toUpperCase() })} />
              </div>
              <div className="field">
                <span className="field-label">Role</span>
                <select
                  className="input select"
                  value={sel.role}
                  onChange={(e) => patch({ role: e.target.value as AgentRole, color: ROLE_COLORS[e.target.value] ?? sel.color })}
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <span className="field-label">Department</span>
                <input className="input" value={sel.department} onChange={(e) => patch({ department: e.target.value.toUpperCase() })} />
              </div>
              <div className="field">
                <span className="field-label">Signature Color</span>
                <div className="swatches">
                  {AGENT_SWATCHES.map((c) => (
                    <div
                      key={c}
                      className={`swatch ${sel.color === c ? "sel" : ""}`}
                      style={{ background: c, color: c }}
                      onClick={() => patch({ color: c })}
                    />
                  ))}
                </div>
              </div>
              <div className="field">
                <span className="field-label">Workstation ({sel.workstation})</span>
                <input
                  className="range"
                  type="range"
                  min={0}
                  max={7}
                  step={1}
                  value={sel.workstation}
                  onChange={(e) => patch({ workstation: parseInt(e.target.value, 10) })}
                />
              </div>
              <div className="field">
                <span className="field-label">Move Speed ×{sel.speed.toFixed(2)}</span>
                <input className="range" type="range" min={0.6} max={2} step={0.05} value={sel.speed} onChange={(e) => patch({ speed: parseFloat(e.target.value) })} />
              </div>
              <div className="field">
                <span className="field-label">Focus {(sel.personality.focus * 100).toFixed(0)}%</span>
                <input className="range" type="range" min={0} max={1} step={0.05} value={sel.personality.focus} onChange={(e) => patchPers("focus", parseFloat(e.target.value))} />
              </div>
              <div className="field">
                <span className="field-label">Drive {(sel.personality.drive * 100).toFixed(0)}%</span>
                <input className="range" type="range" min={0} max={1} step={0.05} value={sel.personality.drive} onChange={(e) => patchPers("drive", parseFloat(e.target.value))} />
              </div>
              <div className="field">
                <span className="field-label">Sociability {(sel.personality.sociability * 100).toFixed(0)}%</span>
                <input className="range" type="range" min={0} max={1} step={0.05} value={sel.personality.sociability} onChange={(e) => patchPers("sociability", parseFloat(e.target.value))} />
              </div>
              <div className="field full">
                <span className="field-label">Import / Export JSON</span>
                <textarea
                  className="textarea"
                  placeholder="paste roster JSON here, then IMPORT…"
                  value={io}
                  onChange={(e) => setIo(e.target.value)}
                />
              </div>
            </>
          ) : (
            <div className="field full text-dim">select a unit to configure</div>
          )}
        </div>

        <div className="lab-foot">
          <button
            className="btn sm"
            onClick={() => {
              if (!sel) return;
              const copy: AgentDef = { ...sel, id: uid("ag"), codename: `${sel.codename}-β`, personality: { ...sel.personality } };
              setDraft((d) => [...d, copy]);
              setSelId(copy.id);
            }}
          >
            DUPLICATE
          </button>
          <button
            className="btn sm danger"
            onClick={() => {
              if (!sel || draft.length <= 3) return;
              setDraft((d) => d.filter((a) => a.id !== sel.id));
              setSelId(draft[0]?.id ?? null);
            }}
          >
            DELETE
          </button>
          <button
            className="btn sm"
            onClick={() => {
              setDraft(AGENT_DEFS.map((a) => ({ ...a, personality: { ...a.personality } })));
              pushLog("sys", "LAB", "roster reset to factory defaults");
            }}
          >
            RESET
          </button>
          <button className="btn sm" onClick={() => setIo(JSON.stringify(draft, null, 2))}>
            EXPORT
          </button>
          <button
            className="btn sm"
            onClick={() => {
              try {
                const parsed: unknown = JSON.parse(io);
                if (!Array.isArray(parsed)) throw new Error("not an array");
                const list = parsed as AgentDef[];
                for (const a of list) {
                  if (!a.id || !a.name || !a.role) throw new Error("malformed agent");
                }
                setDraft(list);
                setSelId(list[0]?.id ?? null);
                pushLog("ok", "LAB", `roster imported — ${list.length} units`);
              } catch (err) {
                pushLog("err", "LAB", `import failed — ${(err as Error).message}`);
              }
            }}
          >
            IMPORT
          </button>
          <span className="spacer" />
          <span className="lab-live">
            TASK POOLS: {TASK_POOLS[sel?.role ?? "CODER"].length} / ROLE
          </span>
          <button className="btn gold" onClick={apply}>COMMIT ROSTER</button>
          <button className="btn" onClick={() => setOpen(false)}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}
