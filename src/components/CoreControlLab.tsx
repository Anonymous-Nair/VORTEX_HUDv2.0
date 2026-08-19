import { DEFAULT_SETTINGS, SETTINGS_PRESETS, TINT_SWATCHES, useCoreSettings } from "../store/settings";
import { clamp, hexToRgb } from "../utils/math";
import { useVortex } from "../store/vortex-store";

/* ============================================================
   CORE CONTROL LAB — real-time render-tuning dock
   tint · actuator speed · bloom matrix · emissive · particles
   ============================================================ */

function rgbToHex(r: number, g: number, b: number): string {
  const c = (v: number) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  fmt?: (v: number) => string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step, fmt, onChange }: SliderProps): JSX.Element {
  return (
    <div className="cl-row">
      <span>{label}</span>
      <input
        className="range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span className="cl-val">{fmt ? fmt(value) : value.toFixed(2)}</span>
    </div>
  );
}

export function CoreControlLab(): JSX.Element {
  const s = useCoreSettings();
  const labOpen = s.labOpen;
  const toggleLab = s.toggleLab;
  const set = s.set;
  const pushLog = useVortex((st) => st.pushLog);

  const [r, g, b] = hexToRgb(s.tint);

  return (
    <div className={`core-lab panel ${labOpen ? "open" : ""}`}>
      <div className="panel-title gold">
        CORE CONTROL LAB <span className="aux">LIVE·RENDER</span>
      </div>
      <div className="panel-body">
        <div className="cl-presets">
          {SETTINGS_PRESETS.map((p) => (
            <button
              key={p.name}
              className={`btn sm ${s.tint === (p.patch.tint ?? s.tint) && s.speed === (p.patch.speed ?? s.speed) ? "active" : ""}`}
              onClick={() => {
                s.applyPreset(p);
                pushLog("sys", "LAB", `render preset engaged — ${p.name}`);
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="cl-section">
          <div className="cl-head">PLASMA TINT</div>
          <div className="cl-row">
            <span>HEX</span>
            <input
              className="input"
              style={{ padding: "3px 7px", fontSize: 10, letterSpacing: "0.1em" }}
              value={s.tint.toUpperCase()}
              spellCheck={false}
              onChange={(e) => {
                const v = e.target.value;
                if (/^#[0-9a-fA-F]{6}$/.test(v)) set({ tint: v.toLowerCase() });
                else if (/^[0-9a-fA-F]{6}$/.test(v)) set({ tint: `#${v.toLowerCase()}` });
              }}
            />
            <span className="cl-swatch" style={{ background: s.tint, boxShadow: `0 0 12px ${s.tint}` }} />
          </div>
          <div className="cl-swatches">
            {TINT_SWATCHES.map((c) => (
              <div
                key={c}
                className={`swatch ${s.tint === c ? "sel" : ""}`}
                style={{ background: c, color: c }}
                onClick={() => set({ tint: c })}
              />
            ))}
          </div>
          <Slider label="R" value={r} min={0} max={255} step={1} fmt={(v) => String(Math.round(v))} onChange={(v) => set({ tint: rgbToHex(v, g, b) })} />
          <Slider label="G" value={g} min={0} max={255} step={1} fmt={(v) => String(Math.round(v))} onChange={(v) => set({ tint: rgbToHex(r, v, b) })} />
          <Slider label="B" value={b} min={0} max={255} step={1} fmt={(v) => String(Math.round(v))} onChange={(v) => set({ tint: rgbToHex(r, g, v) })} />
        </div>

        <div className="cl-section">
          <div className="cl-head">MOTION</div>
          <Slider label="SPEED" value={s.speed} min={0.1} max={5} step={0.05} fmt={(v) => `${v.toFixed(2)}×`} onChange={(v) => set({ speed: v })} />
        </div>

        <div className="cl-section">
          <div className="cl-head">LIGHTING · BLOOM MATRIX</div>
          <Slider label="BLOOM" value={s.bloomStrength} min={0} max={2.5} step={0.01} onChange={(v) => set({ bloomStrength: v })} />
          <Slider label="THRESH" value={s.bloomThreshold} min={0} max={1} step={0.01} onChange={(v) => set({ bloomThreshold: v })} />
          <Slider label="RADIUS" value={s.bloomRadius} min={0} max={1} step={0.01} onChange={(v) => set({ bloomRadius: v })} />
          <Slider label="EXPOSE" value={s.exposure} min={0.4} max={1.8} step={0.01} onChange={(v) => set({ exposure: v })} />
          <Slider label="EMISSIVE" value={s.emissive} min={0.2} max={3} step={0.01} fmt={(v) => `${v.toFixed(2)}×`} onChange={(v) => set({ emissive: v })} />
        </div>

        <div className="cl-section">
          <div className="cl-head">PARTICLE MATRIX</div>
          <Slider label="DUST·N" value={s.dustDensity} min={0} max={1} step={0.01} fmt={(v) => `${Math.round(v * 100)}%`} onChange={(v) => set({ dustDensity: v })} />
          <Slider label="DUST·S" value={s.dustScale} min={0.2} max={3} step={0.05} fmt={(v) => `${v.toFixed(2)}×`} onChange={(v) => set({ dustScale: v })} />
          <Slider label="STREAM·N" value={s.streamDensity} min={0} max={1} step={0.01} fmt={(v) => `${Math.round(v * 100)}%`} onChange={(v) => set({ streamDensity: v })} />
          <Slider label="STREAM·S" value={s.streamScale} min={0.2} max={3} step={0.05} fmt={(v) => `${v.toFixed(2)}×`} onChange={(v) => set({ streamScale: v })} />
        </div>

        <div className="cl-section">
          <div className="cl-head">OPTICS</div>
          <div className="cl-row">
            <span>DEPTH·DOF</span>
            <button
              className={`btn sm ${s.dof ? "active" : ""}`}
              onClick={() => set({ dof: !s.dof })}
              style={{ gridColumn: "2 / 4", justifySelf: "start" }}
            >
              {s.dof ? "ENABLED" : "DISABLED"}
            </button>
          </div>
        </div>

        <button
          className="btn sm wide"
          onClick={() => {
            useCoreSettings.getState().reset();
            pushLog("sys", "LAB", `render matrix restored to defaults (${DEFAULT_SETTINGS.tint})`);
          }}
        >
          RESTORE DEFAULTS
        </button>
      </div>
    </div>
  );
}
