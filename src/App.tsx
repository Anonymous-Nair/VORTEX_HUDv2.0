import { useEffect, useState } from "react";
import type { GestureKind, TabId } from "./types";
import { useVortex } from "./store/vortex-store";
import { bus } from "./store/event-bus";
import { synth } from "./audio/synth";
import { getGesturePipeline, startGesturePipeline } from "./vision/vision";
import { TopBar } from "./components/TopBar";
import { LeftRail } from "./components/LeftRail";
import { Viewport } from "./components/Viewport";
import { RightTelemetry } from "./components/RightTelemetry";
import { TimelineScrubber } from "./components/TimelineScrubber";
import { LowerStream } from "./components/LowerStream";
import { DebugConsole } from "./components/DebugConsole";
import { AgentLab } from "./components/AgentLab";
import { BootOverlay } from "./components/BootOverlay";

const TAB_ORDER: TabId[] = ["core", "agents", "intel", "missions", "network", "memory"];

/** live vision/gesture readout chip — HUD overlay, mounted at app level */
function GestureChip(): JSX.Element {
  const [last, setLast] = useState<{ gesture: GestureKind; at: number } | null>(null);
  useEffect(() => {
    const off = bus.on("GESTURE_DETECTED", ({ gesture }) => {
      setLast({ gesture, at: performance.now() });
    });
    return off;
  }, []);
  const pipeline = getGesturePipeline();
  return (
    <div className="gesture-chip">
      <span className="g-dot" />
      <span>
        VISION <b>{pipeline.vision.mode}</b>
      </span>
      <span>
        HAND <b>{pipeline.hand.mode}</b>
      </span>
      <span>
        GESTURE{" "}
        <b style={{ color: last && performance.now() - last.at < 1500 ? "var(--cyan)" : "var(--faint)" }}>
          {last ? last.gesture : "——"}
        </b>
      </span>
    </div>
  );
}

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

  /* vision & gesture pipeline — disabled for normal mouse interaction
     Gesture-based navigation removed per user request.
     Navigation is now explicit via click/keyboard only. */
  useEffect(() => {
    const pipeline = startGesturePipeline();
    // GESTURE_DETECTED events are still emitted but no longer trigger tab changes
    // This preserves the vision system for other potential uses while preventing
    // accidental tab switching during normal mouse movement
    return () => {
      pipeline.stop();
    };
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

      {/* HUD overlays — explicitly mounted at app level.
          CoreControlLab is mounted inside the Viewport frame (fixed dock);
          GestureChip + the vision/gesture pipeline live here. */}
      <GestureChip />
      <DebugConsole />
      <AgentLab />
      <BootOverlay />
    </div>
  );
}
