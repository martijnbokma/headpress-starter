import { createHmac, timingSafeEqual } from 'node:crypto';

/** Requests older (or further in the future) than this are rejected as replays. */
export const MAX_SKEW_SECONDS = 300;

/**
 * Verifies `X-Headless-Signature: sha256=<hex>` against the raw request body.
 * Mirrors `RevalidationWebhook::sign()` in the WordPress kernel.
 */
export function isValidSignature(body: string, header: string | null, secret: string): boolean {
  if (!header || !secret || !header.startsWith('sha256=')) {
    return false;
  }

  const expected = createHmac('sha256', secret).update(body).digest();
  const provided = Buffer.from(header.slice('sha256='.length), 'hex');

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function isFresh(timestamp: unknown, nowSeconds = Math.floor(Date.now() / 1000)): boolean {
  return typeof timestamp === 'number' && Math.abs(nowSeconds - timestamp) <= MAX_SKEW_SECONDS;
}
