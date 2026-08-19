import type { GestureKind } from "../types";
import { bus } from "../store/event-bus";

/* ============================================================
   VISION & GESTURE TRACKING ARCHITECTURE
   VisionInputProvider  — normalized spatial input stream
   HandTrackingProvider — hand telemetry (mock fallback from
                          the mouse/pointer stream until a real
                          media-pipe/WebSocket hand rig attaches)
   GestureRecognizer    — PINCH · GRAB · ZOOM · ROTATE · SWIPE
   ============================================================ */

export interface VisionFrame {
  /** normalized 0..1 */
  x: number;
  y: number;
  /** px/ms velocity */
  vx: number;
  vy: number;
  buttons: number;
  t: number;
}

export interface VisionInputProvider {
  readonly mode: string;
  start(cb: (f: VisionFrame) => void): void;
  stop(): void;
}

/** Default provider — streams the operator's pointer as a vision frame. */
export class MouseVisionProvider implements VisionInputProvider {
  readonly mode = "MOUSE-VISION-STREAM";
  private cb: ((f: VisionFrame) => void) | null = null;
  private last: { x: number; y: number; t: number } | null = null;
  private onMove = (e: PointerEvent): void => {
    if (!this.cb) return;
    const now = performance.now();
    const x = e.clientX / Math.max(1, window.innerWidth);
    const y = e.clientY / Math.max(1, window.innerHeight);
    let vx = 0;
    let vy = 0;
    if (this.last) {
      const dt = Math.max(1, now - this.last.t);
      vx = (e.clientX - this.last.x) / dt;
      vy = (e.clientY - this.last.y) / dt;
    }
    this.last = { x: e.clientX, y: e.clientY, t: now };
    this.cb({ x, y, vx, vy, buttons: e.buttons, t: now });
  };

  start(cb: (f: VisionFrame) => void): void {
    this.cb = cb;
    window.addEventListener("pointermove", this.onMove);
  }
  stop(): void {
    this.cb = null;
    window.removeEventListener("pointermove", this.onMove);
  }
}

export interface HandSample {
  x: number;
  y: number;
  /** 0..1 pinch strength */
  pinch: number;
  present: boolean;
  t: number;
}

export interface HandTrackingProvider {
  readonly mode: string;
  start(cb: (h: HandSample) => void): void;
  stop(): void;
}

/**
 * Mock hand rig — synthesizes a tracked hand from the pointer stream.
 * Pinch strength is driven by Shift-held or pointer-button pressure,
 * standing in for a webcam/MediaPipe/WebSocket hand tracker.
 */
export class MockHandProvider implements HandTrackingProvider {
  readonly mode = "MOCK-HAND-RIG";
  private cb: ((h: HandSample) => void) | null = null;
  private pinch = 0;
  private shift = false;
  private x = 0.5;
  private y = 0.5;
  private present = false;
  private lastSeen = 0;

  private onMove = (e: PointerEvent): void => {
    this.x = e.clientX / Math.max(1, window.innerWidth);
    this.y = e.clientY / Math.max(1, window.innerHeight);
    this.present = true;
    this.lastSeen = performance.now();
    if (e.buttons > 0) this.pinch = Math.min(1, this.pinch + 0.12);
  };
  private onKey = (e: KeyboardEvent): void => {
    this.shift = e.shiftKey;
  };
  private onUp = (): void => {
    this.pinch = 0;
  };

  start(cb: (h: HandSample) => void): void {
    this.cb = cb;
    window.addEventListener("pointermove", this.onMove);
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup", this.onKey);
    window.addEventListener("pointerup", this.onUp);
    this.tick();
  }
  stop(): void {
    this.cb = null;
    window.removeEventListener("pointermove", this.onMove);
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup", this.onKey);
    window.removeEventListener("pointerup", this.onUp);
  }
  private tick = (): void => {
    if (!this.cb) return;
    if (this.shift) this.pinch = Math.min(1, this.pinch + 0.08);
    else this.pinch = Math.max(0, this.pinch - 0.05);
    const stale = performance.now() - this.lastSeen > 4000;
    this.cb({ x: this.x, y: this.y, pinch: this.pinch, present: this.present && !stale, t: performance.now() });
    setTimeout(this.tick, 66);
  };
}

export interface GestureEventDetail {
  gesture: GestureKind;
  confidence: number;
  source: string;
}

export class GestureRecognizer {
  lastGesture: GestureKind | null = null;
  lastConfidence = 0;
  lastAt = 0;

  readonly vision: VisionInputProvider;
  readonly hand: HandTrackingProvider;
  private swipeWatch: ((f: VisionFrame) => void) | null = null;
  private running = false;

  constructor(vision?: VisionInputProvider, hand?: HandTrackingProvider) {
    this.vision = vision ?? new MouseVisionProvider();
    this.hand = hand ?? new MockHandProvider();
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.vision.start((f) => {
      const speed = Math.hypot(f.vx, f.vy);
      if (speed > 2.2 && f.buttons === 0) {
        const now = performance.now();
        if (now - this.lastAt > 900) this.recognize("SWIPE", Math.min(1, speed / 4));
      }
      if (this.swipeWatch) this.swipeWatch(f);
    });
    this.hand.start((h) => {
      if (h.pinch > 0.92) {
        const now = performance.now();
        if (now - this.lastAt > 1200) this.recognize("PINCH", h.pinch);
      }
    });
  }

  stop(): void {
    if (!this.running) return;
    this.running = false;
    this.vision.stop();
    this.hand.stop();
    this.swipeWatch = null;
  }

  onVisionFrame(cb: (f: VisionFrame) => void): void {
    this.swipeWatch = cb;
  }

  recognize(gesture: GestureKind, confidence = 1): void {
    this.lastGesture = gesture;
    this.lastConfidence = confidence;
    this.lastAt = performance.now();
    bus.emit("GESTURE_DETECTED", { gesture });
  }
}

/** module-level pipeline singleton */
let pipeline: GestureRecognizer | null = null;

export function getGesturePipeline(): GestureRecognizer {
  if (!pipeline) pipeline = new GestureRecognizer();
  return pipeline;
}

export function startGesturePipeline(): GestureRecognizer {
  const p = getGesturePipeline();
  p.start();
  return p;
}
