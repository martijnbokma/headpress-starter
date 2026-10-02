import type { APIRoute } from 'astro';
import { HEADLESS_REVALIDATE_SECRET } from 'astro:env/server';
import { canReachWordPress, contentCache } from '~/lib/wordpress';
import { isFresh, isValidSignature } from '~/lib/webhook-signature';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

/**
 * Called by the WordPress kernel (RevalidationWebhook) when content changes.
 * Body: `{ event, tags: string[], timestamp }`, signed with
 * `X-Headless-Signature: sha256=<hmac>`. The setup wizard's
 * `event: 'connection.test'` gets `{ ok, graphql }` back instead of a purge.
 */
export const POST: APIRoute = async ({ request }) => {
  const secret = HEADLESS_REVALIDATE_SECRET ?? '';
  if (!secret) {
    return json({ error: 'Revalidation secret is not configured.' }, 500);
  }

  const raw = await request.text();
  if (!isValidSignature(raw, request.headers.get('x-headless-signature'), secret)) {
    return json({ error: 'Invalid signature.' }, 401);
  }

  let payload: { event?: unknown; tags?: unknown; timestamp?: unknown };
  try {
    payload = JSON.parse(raw) as typeof payload;
  } catch {
    return json({ error: 'Body must be JSON.' }, 400);
  }

  if (!isFresh(payload.timestamp)) {
    return json({ error: 'Stale or missing timestamp.' }, 401);
  }

  // Setup wizard round trip: WordPress reached us, now check we can reach it.
  if (payload.event === 'connection.test') {
    return json({ ok: true, graphql: await canReachWordPress() }, 200);
  }

  const tags = Array.isArray(payload.tags)
    ? payload.tags.filter((tag): tag is string => typeof tag === 'string')
    : [];

  return json({ ok: true, dropped: contentCache.invalidate(tags) }, 200);
};
