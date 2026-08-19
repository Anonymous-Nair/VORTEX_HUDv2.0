import type { AudioLevels } from "../types";

/**
 * PROCEDURAL WEB AUDIO SYNTHESIZER — no external assets, no hardware input.
 * Generates the ~30 Hz sub-bass drone, crystalline UI chimes, packet zaps,
 * alarm stabs and syllabic voice-modulation pulses that drive core geometry,
 * particle turbulence and the humanoid's lip/body synchronization.
 *
 * Falls back to a deterministic mock envelope when Web Audio is unavailable,
 * so VORTEX never crashes under restricted environments.
 */
class SynthEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private freqData: Uint8Array<ArrayBuffer> | null = null;
  private failed = false;
  muted = false;

  /** internal envelope used for talk sync + mock fallback */
  private talkEnv = 0;
  private pulseEnv = 0;
  private t0 = performance.now();

  get supported(): boolean {
    return !this.failed;
  }

  /** Must be called from a user gesture at least once. */
  ensure(): boolean {
    if (this.ctx || this.failed) return !!this.ctx;
    try {
      const AC: typeof AudioContext | undefined =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) throw new Error("no-audio-context");
      const ctx = new AC();
      this.ctx = ctx;

      const master = ctx.createGain();
      master.gain.value = this.muted ? 0 : 0.8;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 6;
      master.connect(comp);
      comp.connect(ctx.destination);
      this.master = master;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.82;
      master.connect(analyser);
      this.analyser = analyser;
      this.freqData = new Uint8Array(analyser.frequencyBinCount);

      /* ---- sub-bass drone stack (~30 Hz) ---- */
      const droneGain = ctx.createGain();
      droneGain.gain.value = 0.16;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 240;
      lp.Q.value = 0.8;
      droneGain.connect(lp);
      lp.connect(master);
      this.droneGain = droneGain;

      const partials: Array<[number, number, OscillatorType]> = [
        [30, 0.55, "sine"],
        [57.5, 0.22, "sine"],
        [90.2, 0.1, "triangle"],
      ];
      for (const [freq, amp, type] of partials) {
        const osc = ctx.createOscillator();
        osc.type = type;
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.value = amp;
        osc.connect(g);
        g.connect(droneGain);
        osc.start();
      }

      /* slow breathing LFO on the drone */
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const lfoAmp = ctx.createGain();
      lfoAmp.gain.value = 0.05;
      lfo.connect(lfoAmp);
      lfoAmp.connect(droneGain.gain);
      lfo.start();

      /* airy noise bed */
      const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const ch = noiseBuf.getChannelData(0);
      for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;
      noise.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 2600;
      bp.Q.value = 9;
      const ng = ctx.createGain();
      ng.gain.value = 0.012;
      noise.connect(bp);
      bp.connect(ng);
      ng.connect(master);
      noise.start();

      return true;
    } catch (err) {
      console.warn("[vortex-audio] Web Audio unavailable — mock envelopes engaged.", err);
      this.failed = true;
      this.ctx = null;
      return false;
    }
  }

  resume(): void {
    if (this.ensure() && this.ctx && this.ctx.state === "suspended") {
      void this.ctx.resume();
    }
  }

  setMuted(m: boolean): void {
    this.muted = m;
    if (this.ctx && this.master) {
      const t = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(t);
      this.master.gain.linearRampToValueAtTime(m ? 0 : 0.8, t + 0.25);
    }
  }

  setDroneIntensity(v: number): void {
    if (this.ctx && this.droneGain) {
      const t = this.ctx.currentTime;
      this.droneGain.gain.linearRampToValueAtTime(0.1 + v * 0.16, t + 0.4);
    }
  }

  /** crystalline UI chime */
  chime(base = 1318): void {
    if (!this.ensure() || !this.ctx || !this.master || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(base, t);
    osc.frequency.exponentialRampToValueAtTime(base * 1.5, t + 0.09);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    const pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 0.8 - 0.4;
    osc.connect(g);
    g.connect(pan);
    pan.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.26);
    this.ping(0.35);
  }

  /** network packet zap */
  zap(): void {
    if (!this.ensure() || !this.ctx || !this.master || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(1900, t);
    osc.frequency.exponentialRampToValueAtTime(220, t + 0.11);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.05, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.15);
    this.ping(0.5);
  }

  /** success thump */
  thump(): void {
    if (!this.ensure() || !this.ctx || !this.master || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(82, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.3);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.24, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.36);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.4);
    this.ping(1);
  }

  /** error stab */
  alarm(): void {
    if (!this.ensure() || !this.ctx || !this.master || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    [233, 174].forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = f;
      const g = ctx.createGain();
      const t0 = t + i * 0.16;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.07, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.16);
      osc.connect(g);
      g.connect(this.master as GainNode);
      osc.start(t0);
      osc.stop(t0 + 0.2);
    });
    this.ping(0.8);
  }

  /** voice-modulation pulse train — drives lip/body sync via talkEnv */
  speak(durationSec: number): void {
    this.talkEnv = 1;
    if (!this.ensure() || !this.ctx || !this.master || this.muted) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const syllables = Math.max(3, Math.floor(durationSec / 0.13));
    for (let i = 0; i < syllables; i++) {
      const t0 = t + i * 0.13 + Math.random() * 0.03;
      const osc = ctx.createOscillator();
      osc.type = "square";
      const f = 130 + Math.random() * 110;
      osc.frequency.setValueAtTime(f, t0);
      osc.frequency.linearRampToValueAtTime(f * 0.7, t0 + 0.09);
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 900 + Math.random() * 1400;
      bp.Q.value = 4;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.055, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.11);
      osc.connect(bp);
      bp.connect(g);
      g.connect(this.master);
      osc.start(t0);
      osc.stop(t0 + 0.13);
    }
  }

  private ping(v: number): void {
    this.pulseEnv = Math.max(this.pulseEnv, v);
  }

  /** Smoothed audio analysis — real FFT when available, mock otherwise. */
  getLevels(): AudioLevels {
    const now = performance.now();
    const elapsed = (now - this.t0) / 1000;
    this.talkEnv = Math.max(0, this.talkEnv - 0.045);
    this.pulseEnv = Math.max(0, this.pulseEnv - 0.06);

    if (this.analyser && this.freqData) {
      this.analyser.getByteFrequencyData(this.freqData);
      const avg = (a: number, b: number) => {
        let s = 0;
        const end = Math.min(b, this.freqData ? this.freqData.length : b);
        for (let i = a; i < end; i++) s += (this.freqData as Uint8Array)[i];
        return s / Math.max(1, end - a) / 255;
      };
      const bass = avg(1, 7) * 1.6;
      const mid = avg(8, 48);
      const high = avg(49, 160) * 1.8;
      const level = Math.min(1, bass * 0.5 + mid * 0.4 + high * 0.3);
      return { level, bass: Math.min(1, bass), mid, high, talk: this.talkEnv };
    }
    /* mock envelopes — deterministic, calm */
    const bass = 0.22 + 0.1 * Math.sin(elapsed * 0.9) + this.pulseEnv * 0.3;
    const mid = 0.14 + 0.08 * Math.sin(elapsed * 1.7 + 1) + this.pulseEnv * 0.2;
    const high = 0.08 + 0.05 * Math.sin(elapsed * 2.9 + 2) + this.pulseEnv * 0.25;
    return {
      level: Math.min(1, bass + mid),
      bass: Math.min(1, bass),
      mid: Math.min(1, mid),
      high: Math.min(1, high),
      talk: this.talkEnv,
    };
  }
}

export const synth = new SynthEngine();
