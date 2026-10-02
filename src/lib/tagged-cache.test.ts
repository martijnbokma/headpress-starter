import { describe, expect, it, vi } from 'vitest';
import { TaggedCache } from './tagged-cache';

describe('TaggedCache', () => {
  it('serves a hit without calling the loader again', async () => {
    const cache = new TaggedCache();
    const load = vi.fn(async () => ({ value: 'a', tags: ['post:1'] }));

    await cache.wrap('k', load);
    expect(await cache.wrap('k', load)).toBe('a');
    expect(load).toHaveBeenCalledTimes(1);
  });

  it('drops entries by tag and leaves others', async () => {
    const cache = new TaggedCache();
    await cache.wrap('page', async () => ({ value: 1, tags: ['post:1', 'type:page'] }));
    await cache.wrap('posts', async () => ({ value: 2, tags: ['type:post'] }));

    expect(cache.invalidate(['type:page'])).toBe(1);
    expect(cache.size).toBe(1);
  });

  it('does not cache results without tags', async () => {
    const cache = new TaggedCache();
    const load = vi.fn(async () => ({ value: null, tags: [] }));

    await cache.wrap('missing', load);
    await cache.wrap('missing', load);
    expect(load).toHaveBeenCalledTimes(2);
  });

  it('expires entries after the TTL', async () => {
    let now = 0;
    const cache = new TaggedCache(1000, 10, () => now);
    const load = vi.fn(async () => ({ value: 'a', tags: ['t'] }));

    await cache.wrap('k', load);
    now = 1001;
    await cache.wrap('k', load);
    expect(load).toHaveBeenCalledTimes(2);
  });

  it('shares one load between concurrent misses', async () => {
    const cache = new TaggedCache();
    const load = vi.fn(async () => ({ value: 'a', tags: ['t'] }));

    await Promise.all([cache.wrap('k', load), cache.wrap('k', load)]);
    expect(load).toHaveBeenCalledTimes(1);
  });

  it('does not store a load that overlapped an invalidation', async () => {
    const cache = new TaggedCache();
    let release!: () => void;
    const gate = new Promise<void>((resolve) => (release = resolve));

    const inFlight = cache.wrap('k', async () => {
      await gate;
      return { value: 'stale', tags: ['post:1'] };
    });
    cache.invalidate(['post:1']);
    release();

    expect(await inFlight).toBe('stale');
    expect(cache.size).toBe(0);
  });

  it('evicts the oldest entry when full', async () => {
    const cache = new TaggedCache(60_000, 2);
    for (const key of ['a', 'b', 'c']) {
      await cache.wrap(key, async () => ({ value: key, tags: ['t'] }));
    }

    const load = vi.fn(async () => ({ value: 'a2', tags: ['t'] }));
    expect(await cache.wrap('a', load)).toBe('a2');
    expect(cache.size).toBe(2);
  });
});
