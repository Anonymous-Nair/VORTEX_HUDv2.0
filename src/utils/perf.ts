import type { TelemetryFrame } from "../types";

/** Rolling FPS / frame-time meter with history for the debug console. */
export class FpsMeter {
  private last = performance.now();
  private ema = 16.7;
  fps = 60;
  frameMs = 16.7;
  readonly history: number[] = [];
  readonly cap = 140;

  tick(): void {
    const now = performance.now();
    const dt = now - this.last;
    this.last = now;
    if (dt > 0 && dt < 500) {
      this.ema = this.ema * 0.92 + dt * 0.08;
      this.frameMs = this.ema;
      this.fps = 1000 / this.ema;
    }
    this.history.push(this.frameMs);
    if (this.history.length > this.cap) this.history.shift();
  }
}

/**
 * TelemetryModel — ring buffers feeding sparklines at UI frequency,
 * decoupled from the 120 Hz render loop.
 */
export class TelemetryModel {
  readonly cap = 90;
  power: number[] = [];
  temp: number[] = [];
  packets: number[] = [];
  latency: number[] = [];
  throughput: number[] = [];

  push(f: TelemetryFrame): void {
    const pushArr = (arr: number[], v: number) => {
      arr.push(v);
      if (arr.length > this.cap) arr.shift();
    };
    pushArr(this.power, f.power);
    pushArr(this.temp, f.temp);
    pushArr(this.packets, f.packets);
    pushArr(this.latency, f.latency);
    pushArr(this.throughput, f.throughput);
  }

  clear(): void {
    this.power.length = 0;
    this.temp.length = 0;
    this.packets.length = 0;
    this.latency.length = 0;
    this.throughput.length = 0;
  }
}

/** GpuTimer — approximated GPU frame budget accounting (CPU-side proxy). */
export class GpuTimer {
  budgetMs = 8.33; // 120 Hz target
  usage = 0;

  report(frameMs: number): void {
    this.usage = Math.min(1.5, frameMs / this.budgetMs);
  }

  headroom(): string {
    const pct = Math.max(0, Math.round((1 - this.usage) * 100));
    return `${pct}%`;
  }
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1048576) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1048576).toFixed(2)} MB`;
}

export function formatInt(n: number): string {
  return n.toLocaleString("en-US");
}
