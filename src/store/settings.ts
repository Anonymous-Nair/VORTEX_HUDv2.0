import { create } from "zustand";

/* ============================================================
   CORE CONTROL LAB — persistent render-tuning state
   tint · speed · bloom matrix · emissive · particle density/scale
   Applied by the render engine every frame at 120 Hz, edited by
   the CoreControlLab dock at UI frequency.
   ============================================================ */

export interface CoreSettings {
  /** plasma conduit + core ring tint */
  tint: string;
  /** global actuator spin / turbulence multiplier 0.1 – 5.0 */
  speed: number;
  bloomStrength: number;
  bloomThreshold: number;
  bloomRadius: number;
  /** filmic exposure — glare guard */
  exposure: number;
  /** core emissive multiplier */
  emissive: number;
  dustDensity: number;
  dustScale: number;
  streamDensity: number;
  streamScale: number;
  /** depth-of-field on workstation focus shots */
  dof: boolean;
}

export const DEFAULT_SETTINGS: CoreSettings = {
  tint: "#00f0ff",
  speed: 1,
  bloomStrength: 0.85,
  bloomThreshold: 0.3,
  bloomRadius: 0.55,
  exposure: 1.12,
  emissive: 1,
  dustDensity: 0.85,
  dustScale: 1,
  streamDensity: 1,
  streamScale: 1,
  dof: true,
};

export interface SettingsPreset {
  name: string;
  patch: Partial<CoreSettings>;
}

export const SETTINGS_PRESETS: SettingsPreset[] = [
  { name: "NOCTURNE", patch: { tint: "#00f0ff", speed: 1, bloomStrength: 0.85, exposure: 1.12, emissive: 1 } },
  { name: "SOLAR", patch: { tint: "#ffb700", bloomStrength: 1.0, exposure: 1.22, emissive: 1.15, speed: 1.2 } },
  { name: "EMERALD", patch: { tint: "#00ff66", bloomStrength: 0.9, exposure: 1.08, emissive: 1.05 } },
  { name: "CRIMSON", patch: { tint: "#ff3333", bloomStrength: 1.05, exposure: 1.15, emissive: 1.25, speed: 1.5 } },
  { name: "OVERDRIVE", patch: { tint: "#d4af37", speed: 2.6, bloomStrength: 1.3, emissive: 1.6, streamDensity: 1, dustDensity: 1 } },
];

export const TINT_SWATCHES: string[] = [
  "#00f0ff",
  "#ffb700",
  "#d4af37",
  "#00ff66",
  "#ff3333",
  "#7ad7ff",
  "#ff7ad9",
  "#9d7bff",
  "#e0e6ed",
];

const SETTINGS_KEY = "vortex.settings.v1";

function loadSettings(): CoreSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<CoreSettings>;
      return { ...DEFAULT_SETTINGS, ...parsed };
    }
  } catch {
    /* storage restricted — defaults */
  }
  return { ...DEFAULT_SETTINGS };
}

function persist(s: CoreSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    /* non-fatal */
  }
}

interface SettingsState extends CoreSettings {
  labOpen: boolean;
  set: (patch: Partial<CoreSettings>) => void;
  applyPreset: (p: SettingsPreset) => void;
  reset: () => void;
  toggleLab: () => void;
}

export const useCoreSettings = create<SettingsState>()((set, get) => ({
  ...loadSettings(),
  labOpen: false,

  set: (patch) => {
    const next = { ...get(), ...patch };
    persist(next);
    set(patch);
  },

  applyPreset: (p) => {
    const next = { ...get(), ...p.patch };
    persist(next);
    set(p.patch);
  },

  reset: () => {
    persist(DEFAULT_SETTINGS);
    set({ ...DEFAULT_SETTINGS });
  },

  toggleLab: () => set((s) => ({ labOpen: !s.labOpen })),
}));
