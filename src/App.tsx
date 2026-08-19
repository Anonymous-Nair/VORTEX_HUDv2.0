import { useEffect } from "react";
import { useVortex } from "./store/vortex-store";
import { synth } from "./audio/synth";
import { TopBar } from "./components/TopBar";
import { LeftRail } from "./components/LeftRail";
import { Viewport } from "./components/Viewport";
import { RightTelemetry } from "./components/RightTelemetry";
import { TimelineScrubber } from "./components/TimelineScrubber";
import { LowerStream } from "./components/LowerStream";
import { DebugConsole } from "./components/DebugConsole";
import { AgentLab } from "./components/AgentLab";
import { BootOverlay } from "./components/BootOverlay";

export default function App(): JSX.Element {
  const setDebugOpen = useVortex((s) => s.setDebugOpen);
  const debugOpen = useVortex((s) => s.debugOpen);

  /* arm the procedural audio engine on first user gesture */
  useEffect(() => {
    const arm = () => {
      synth.ensure();
      synth.resume();
      window.removeEventListener("pointerdown", arm);
    };
    window.addEventListener("pointerdown", arm);
    return () => window.removeEventListener("pointerdown", arm);
  }, []);

  /* debug console hotkey */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
        setDebugOpen(!useVortex.getState().debugOpen);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setDebugOpen]);

  return (
    <div className="shell" data-debug={debugOpen ? "1" : "0"}>
      <TopBar />
      <LeftRail />
      <Viewport />
      <RightTelemetry />
      <TimelineScrubber />
      <LowerStream />
      <DebugConsole />
      <AgentLab />
      <BootOverlay />
    </div>
  );
}
