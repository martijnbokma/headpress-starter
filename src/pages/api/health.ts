import type { APIRoute } from 'astro';

export const prerender = false;

/** Liveness for container health checks; deliberately independent of WordPress. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
