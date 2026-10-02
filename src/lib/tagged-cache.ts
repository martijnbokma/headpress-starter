interface Entry {
  value: unknown;
  tags: readonly string[];
  expiresAt: number;
}

export interface Loaded<T> {
  value: T;
  /** Tags this value depends on, e.g. `post:42`, `type:page`. Empty = don't cache. */
  tags: readonly string[];
}

/**
 * In-memory cache whose entries are dropped by tag. Concurrent misses for the
 * same key share one load, and a load that overlaps an invalidation is not
 * stored, so a webhook can never be undone by an in-flight stale response.
 */
export class TaggedCache {
  readonly #entries = new Map<string, Entry>();
  readonly #pending = new Map<string, Promise<unknown>>();
  #generation = 0;

  constructor(
    private readonly ttlMs = 10 * 60_000,
    private readonly maxEntries = 1000,
    private readonly now: () => number = Date.now,
  ) {}

  async wrap<T>(key: string, load: () => Promise<Loaded<T>>): Promise<T> {
    const hit = this.#entries.get(key);
    if (hit && hit.expiresAt > this.now()) {
      return hit.value as T;
    }

    const pending = this.#pending.get(key);
    if (pending) {
      return pending as Promise<T>;
    }

    const generation = this.#generation;
    const promise = load()
      .then(({ value, tags }) => {
        if (tags.length > 0 && generation === this.#generation) {
          this.#store(key, { value, tags, expiresAt: this.now() + this.ttlMs });
        }
        return value;
      })
      .finally(() => this.#pending.delete(key));

    this.#pending.set(key, promise);
    return promise;
  }

  /** Drops every entry carrying one of `tags`; returns how many were dropped. */
  invalidate(tags: readonly string[]): number {
    this.#generation++;
    const wanted = new Set(tags);
    let dropped = 0;
    for (const [key, entry] of this.#entries) {
      if (entry.tags.some((tag) => wanted.has(tag))) {
        this.#entries.delete(key);
        dropped++;
      }
    }
    return dropped;
  }

  get size(): number {
    return this.#entries.size;
  }

  #store(key: string, entry: Entry): void {
    // Map keeps insertion order, so the first key is the oldest.
    if (this.#entries.size >= this.maxEntries && !this.#entries.has(key)) {
      const oldest = this.#entries.keys().next().value;
      if (oldest !== undefined) this.#entries.delete(oldest);
    }
    this.#entries.set(key, entry);
  }
}
