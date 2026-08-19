import { create } from "zustand";

/* ============================================================
   VORTEX VISUAL CONTROL LABORATORY — persistent render state
   "SETTINGS = YOU CONTROL EVERYTHING"
   tint · speed · bloom matrix · emissive · particles · core
   geometry · network density · HQ lighting · audio response ·
   atmosphere · UI scale · holographic transparency · camera
   limits · workstation & agent behavior. Applied by the render
   engine every frame at render rate, edited at UI frequency.
   ============================================================ */

export type CoreGeometry = "ARC" | "BEAM";

export interface CoreSettings {
  /** plasma conduit / core ring tint */
  tint: string;
  /** global actuator spin / animation speed multiplier 0.1 – 5.0 */
  speed: number;
  /* ---- glow / bloom matrix ---- */
  bloomStrength: number;
  bloomThreshold: number;
  bloomRadius: number;
  /** filmic exposure — glare guard */
  exposure: number;
  /** core emissive intensity multiplier */
  emissive: number;
  /* ---- particles ---- */
  dustDensity: number;
  dustScale: number;
  streamDensity: number;
  streamScale: number;
  /* ---- core geometry ---- */
  coreGeometry: CoreGeometry;
  /** intelligence column intensity (beam mode) */
  coreIntensity: number;
  /* ---- cortex network ---- */
  networkDensity: number;
  /* ---- secret agent HQ ---- */
  hqLighting: number;
  agentDrive: number;
  /* ---- interaction & camera ---- */
  audioSensitivity: number;
  cameraLimit: number;
  dof: boolean;
  /* ---- atmosphere & chrome ---- */
  atmosphere: number;
  uiScale: number;
  holoOpacity: number;
  scanlines: boolean;
}

/* tuned so the core blooms without ever washing the frame white */
export const DEFAULT_SETTINGS: CoreSettings = {
  tint: "#00f0ff",
  speed: 1,
  bloomStrength: 0.62,
  bloomThreshold: 0.55,
  bloomRadius: 0.42,
  exposure: 1.0,
  emissive: 1,
  dustDensity: 0.85,
  dustScale: 1,
  streamDensity: 1,
  streamScale: 1,
  coreGeometry: "ARC",
  coreIntensity: 1,
  networkDensity: 1,
  hqLighting: 1,
  agentDrive: 1,
  audioSensitivity: 1,
  cameraLimit: 22,
  dof: true,
  atmosphere: 0.5,
  uiScale: 1,
  holoOpacity: 0.96,
  scanlines: true,
};

export interface SettingsPreset {
  name: string;
  patch: Partial<CoreSettings>;
  builtin?: boolean;
}

export const SETTINGS_PRESETS: SettingsPreset[] = [
  {
    name: "CINEMATIC",
    builtin: true,
    patch: {
      bloomStrength: 0.8, bloomThreshold: 0.48, bloomRadius: 0.6, exposure: 1.04,
      emissive: 1.1, speed: 0.85, atmosphere: 0.7, dof: true, streamDensity: 1, dustDensity: 0.95,
    },
  },
  {
    name: "TACTICAL",
    builtin: true,
    patch: {
      bloomStrength: 0.3, bloomThreshold: 0.72, bloomRadius: 0.25, exposure: 0.94,
      emissive: 0.85, speed: 1.1, atmosphere: 0.2, dof: false, scanlines: true,
    },
  },
  {
    name: "DEEP_SPACE",
    builtin: true,
    patch: {
      tint: "#4db8ff", bloomStrength: 0.55, bloomThreshold: 0.6, exposure: 0.86,
      atmosphere: 0.95, dustDensity: 1, streamDensity: 0.7, emissive: 0.9, speed: 0.7,
    },
  },
  {
    name: "GOD_MODE",
    builtin: true,
    patch: {
      bloomStrength: 0.95, bloomThreshold: 0.42, bloomRadius: 0.55, exposure: 1.1,
      emissive: 1.35, dustDensity: 1, dustScale: 1.25, streamDensity: 1, streamScale: 1.3,
      networkDensity: 2.4, speed: 1.6, coreIntensity: 1.5, audioSensitivity: 1.6,
    },
  },
  {
    name: "PERFORMANCE",
    builtin: true,
    patch: {
      bloomStrength: 0.35, bloomThreshold: 0.7, bloomRadius: 0.2, exposure: 0.96,
      dustDensity: 0.35, dustScale: 0.8, streamDensity: 0.5, streamScale: 0.8,
      networkDensity: 0.5, dof: false, atmosphere: 0.25, speed: 1,
    },
  },
];

export const TINT_SWATCHES: string[] = [
  "#00f0ff", "#4db8ff", "#ffb700", "#d4af37", "#00ff66",
  "#ff3333", "#ff7ad9", "#9d7bff", "#e0e6ed",
];

const SETTINGS_KEY = "vortex.settings.v3";
const USER_PRESETS_KEY = "vortex.userpresets.v1";

export interface UserPreset {
  name: string;
  settings: CoreSettings;
}

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

export function loadUserPresets(): UserPreset[] {
  try {
    const raw = localStorage.getItem(USER_PRESETS_KEY);
    if (raw) return JSON.parse(raw) as UserPreset[];
  } catch {
    /* non-fatal */
  }
  return [];
}

function persistUserPresets(list: UserPreset[]): void {
  try {
    localStorage.setItem(USER_PRESETS_KEY, JSON.stringify(list));
  } catch {
    /* non-fatal */
  }
}

interface SettingsState extends CoreSettings {
  labOpen: boolean;
  labX: number;
  labY: number;
  userPresets: UserPreset[];
  set: (patch: Partial<CoreSettings>) => void;
  applyPreset: (p: SettingsPreset) => void;
  reset: () => void;
  toggleLab: () => void;
  moveLab: (x: number, y: number) => void;
  saveUserPreset: (name: string) => void;
  loadUserPreset: (name: string) => void;
  deleteUserPreset: (name: string) => void;
}

export const useCoreSettings = create<SettingsState>()((set, get) => ({
  ...loadSettings(),
  labOpen: false,
  labX: -1,
  labY: -1,
  userPresets: loadUserPresets(),

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
  moveLab: (x, y) => set({ labX: x, labY: y }),

  saveUserPreset: (name) => {
    const snap: CoreSettings = { ...get(), labOpen: false, labX: -1, labY: -1 } as CoreSettings;
    const list = [...get().userPresets.filter((p) => p.name !== name), { name, settings: snap }];
    persistUserPresets(list);
    set({ userPresets: list });
  },

  loadUserPreset: (name) => {
    const p = get().userPresets.find((u) => u.name === name);
    if (!p) return;
    const next = { ...DEFAULT_SETTINGS, ...p.settings };
    persist(next);
    set(next);
  },

  deleteUserPreset: (name) => {
    const list = get().userPresets.filter((u) => u.name !== name);
    persistUserPresets(list);
    set({ userPresets: list });
  },
}));
