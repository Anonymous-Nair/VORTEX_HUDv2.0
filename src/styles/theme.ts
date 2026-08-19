/* ============================================================
   VORTEX_HUD Ω — CENTRALIZED DESIGN TOKENS
   Single source of truth mirrored into CSS custom properties.
   ============================================================ */

export const THEME = {
  base: {
    bg0: "#050507",
    bg1: "#0c0c10",
    bg2: "#14141a",
    bg3: "#1b1b24",
  },
  authority: {
    gold: "#d4af37",
    goldBright: "#ffb700",
  },
  status: {
    cyan: "#00f0ff",
    green: "#00ff66",
    red: "#ff3333",
    white: "#e0e6ed",
    dim: "#7d8595",
    faint: "#4a5160",
  },
  font: {
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    display: '"Orbitron", "JetBrains Mono", ui-monospace, monospace',
  },
} as const;

/** Role accent colors used across agents, workstations and holograms. */
export const ROLE_COLORS: Record<string, string> = {
  STRATEGIST: "#d4af37",
  RESEARCHER: "#00f0ff",
  CODER: "#00ff66",
  ANALYST: "#7ad7ff",
  SECURITY: "#ff3333",
  CREATIVE: "#ff7ad9",
  AUTOMATION: "#ffb700",
  EXECUTIVE: "#e0e6ed",
};

export const AGENT_SWATCHES: string[] = [
  "#d4af37",
  "#ffb700",
  "#00f0ff",
  "#00ff66",
  "#7ad7ff",
  "#ff3333",
  "#ff7ad9",
  "#e0e6ed",
  "#9d7bff",
  "#7dffa8",
];

/** Core state → signature color. */
export const STATE_COLORS: Record<string, string> = {
  IDLE: "#7d8595",
  LISTENING: "#ffb700",
  THINKING: "#00f0ff",
  TOOL_USE: "#d4af37",
  SPEAKING: "#00ff66",
  ERROR: "#ff3333",
  SUCCESS: "#00ff66",
};
