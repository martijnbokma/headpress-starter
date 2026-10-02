import { createHmac } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { MAX_SKEW_SECONDS, isFresh, isValidSignature } from './webhook-signature';

const secret = 'test-secret';
const body = '{"event":"content.changed","tags":["post:1"],"timestamp":1700000000}';
const sign = (payload: string, key = secret) =>
  `sha256=${createHmac('sha256', key).update(payload).digest('hex')}`;

describe('isValidSignature', () => {
  it('accepts a signature made with the shared secret', () => {
    expect(isValidSignature(body, sign(body), secret)).toBe(true);
  });

  it('rejects a tampered body, wrong secret, or malformed header', () => {
    expect(isValidSignature(`${body} `, sign(body), secret)).toBe(false);
    expect(isValidSignature(body, sign(body, 'other'), secret)).toBe(false);
    expect(isValidSignature(body, 'sha256=abc', secret)).toBe(false);
    expect(isValidSignature(body, sign(body).replace('sha256=', 'md5='), secret)).toBe(false);
    expect(isValidSignature(body, null, secret)).toBe(false);
  });

  it('rejects everything when no secret is configured', () => {
    expect(isValidSignature(body, sign(body, ''), '')).toBe(false);
  });
});

describe('isFresh', () => {
  const now = 1_700_000_000;

  it('accepts timestamps within the allowed skew', () => {
    expect(isFresh(now - MAX_SKEW_SECONDS, now)).toBe(true);
    expect(isFresh(now + 10, now)).toBe(true);
  });

  it('rejects old, missing, or non-numeric timestamps', () => {
    expect(isFresh(now - MAX_SKEW_SECONDS - 1, now)).toBe(false);
    expect(isFresh(undefined, now)).toBe(false);
    expect(isFresh(String(now), now)).toBe(false);
  });
});
