import type { ReactNode } from "react";
import type { TabId } from "../types";
import { useVortex } from "../store/vortex-store";
import { useCoreSettings } from "../store/settings";
import { simulator } from "../state/simulator";
import { synth } from "../audio/synth";

interface TabDef {
  id: TabId;
  label: string;
  icon: ReactNode;
}

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;

const TABS: TabDef[] = [
  {
    id: "core",
    label: "CORE",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M5 19a8.5 8.5 0 1 1 14 0" />
        <circle cx="12" cy="13" r="2.2" fill="currentColor" stroke="none" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    id: "agents",
    label: "AGENTS",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="8" cy="8" r="2.6" />
        <path d="M3.5 19c.6-3.2 2.3-5 4.5-5s3.9 1.8 4.5 5" />
        <circle cx="16.5" cy="7" r="2.1" />
        <path d="M13.8 18.4c.5-2.6 1.5-4 2.7-4s2.3 1.4 2.8 4" />
      </svg>
    ),
  },
  {
    id: "intel",
    label: "INTEL",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3c4 0 7 3.6 7 8s-3 8-7 8-7-3.6-7-8 3-8 7-8z" />
        <circle cx="9.5" cy="10" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="10" r="0.9" fill="currentColor" stroke="none" />
        <path d="M9 14.5c1 .9 2 1.3 3 1.3s2-.4 3-1.3" />
      </svg>
    ),
  },
  {
    id: "missions",
    label: "MISSIONS",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="4" width="6" height="4.4" />
        <rect x="15" y="4" width="6" height="4.4" />
        <rect x="9" y="15" width="6" height="4.4" />
        <path d="M6 8.4v3h12v-3M12 11.4V15" />
      </svg>
    ),
  },
  {
    id: "network",
    label: "CORTEX",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M4 7h16M4 12h16M4 17h16" opacity="0.5" />
        <circle cx="7" cy="7" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="15" cy="7" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="10" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="6" cy="17" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="13" cy="17" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "memory",
    label: "MEMORY",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M12 10V7M12 14v3M10.3 11L7 9.5M13.7 11L17 9.5" />
      </svg>
    ),
  },
];

function CoreLabButton(): JSX.Element {
  const labOpen = useCoreSettings((s) => s.labOpen);
  const toggleLab = useCoreSettings((s) => s.toggleLab);
  return (
    <button className={`btn sm wide ${labOpen ? "active" : ""}`} onClick={() => toggleLab()}>
      CORE LAB
    </button>
  );
}

export function LeftRail(): JSX.Element {
  const tab = useVortex((s) => s.tab);
  const setTab = useVortex((s) => s.setTab);
  const setHoloOpen = useVortex((s) => s.setHoloOpen);
  const openHolo = useVortex((s) => s.openHolo);
  const holoOpen = useVortex((s) => s.holoOpen);
  const setLabOpen = useVortex((s) => s.setLabOpen);
  const pushLog = useVortex((s) => s.pushLog);

  const go = (t: TabId) => {
    setTab(t);
    synth.chime(1180);
  };

  return (
    <nav className="left-rail">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={`rail-tab ${tab === t.id ? "active" : ""}`}
          onClick={() => go(t.id)}
          title={t.label}
        >
          <span className="rail-ico">{t.icon}</span>
          <span className="rail-label">{t.label}</span>
        </button>
      ))}

      <div className="rail-divider" />

      <button
        className="btn sm wide gold"
        onClick={() => {
          simulator.injectTask("priority directive Ω-77");
          synth.chime(980);
        }}
      >
        INJECT TASK
      </button>
      <button
        className="btn sm wide"
        onClick={() => {
          simulator.netSpike();
        }}
      >
        NET SPIKE
      </button>
      <button
        className={`btn sm wide ${holoOpen ? "active" : ""}`}
        onClick={() => {
          if (!holoOpen) {
            openHolo("terminal");
            pushLog("sys", "HOLO", "holographic control lab materialized");
          } else {
            setHoloOpen(false);
          }
        }}
      >
        HOLO DECK
      </button>
      <button className="btn sm wide gold" onClick={() => setLabOpen(true)}>
        AGENT LAB
      </button>
      <CoreLabButton />

      <div className="row-spacer" />
      <div style={{ textAlign: "center", fontSize: 7.5, letterSpacing: "0.2em", color: "var(--faint)" }}>
        Ω·LINK
        <br />
        STABLE
      </div>
    </nav>
  );
}
