import type { EventKey, VortexEventMap } from "../types";

type Handler<K extends EventKey> = (payload: VortexEventMap[K]) => void;
/** Internally erased handler reference — public API remains fully typed. */
type ErasedHandler = (payload: never) => void;

/**
 * VortexEventBus — strongly typed global nervous system.
 * All subsystems (render engine, swarm, audio, telemetry, UI) communicate
 * exclusively through verifiable cause-and-effect events.
 */
class VortexEventBus {
  private handlers = new Map<EventKey, Set<ErasedHandler>>();
  private counters = new Map<EventKey, number>();
  totalEmitted = 0;
  private windowStart = performance.now();
  private windowCount = 0;
  eventsPerSec = 0;

  on<K extends EventKey>(key: K, fn: Handler<K>): () => void {
    let set = this.handlers.get(key);
    if (!set) {
      set = new Set();
      this.handlers.set(key, set);
    }
    set.add(fn as unknown as ErasedHandler);
    return () => this.off(key, fn);
  }

  off<K extends EventKey>(key: K, fn: Handler<K>): void {
    const set = this.handlers.get(key);
    if (set) set.delete(fn as unknown as ErasedHandler);
  }

  emit<K extends EventKey>(key: K, payload: VortexEventMap[K]): void {
    this.counters.set(key, (this.counters.get(key) ?? 0) + 1);
    this.totalEmitted++;
    this.windowCount++;
    const now = performance.now();
    if (now - this.windowStart >= 1000) {
      this.eventsPerSec = this.windowCount;
      this.windowCount = 0;
      this.windowStart = now;
    }
    const set = this.handlers.get(key);
    if (!set) return;
    // copy to survive handler-driven unsubscribe
    const snapshot = Array.from(set);
    for (const fn of snapshot) {
      try {
        (fn as unknown as Handler<K>)(payload);
      } catch (err) {
        console.error(`[vortex-bus] handler error on ${String(key)}`, err);
      }
    }
  }

  count(key: EventKey): number {
    return this.counters.get(key) ?? 0;
  }
}

export const bus = new VortexEventBus();
