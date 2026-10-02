import type { APIRoute } from 'astro';
import { SITE_URL } from 'astro:env/server';

export const GET: APIRoute = ({ url }) => {
  const hostname = url.hostname.toLowerCase();
  const isStagingOrDev =
    hostname.includes('staging') ||
    hostname.includes('.pages.dev') ||
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1');

  if (isStagingOrDev) {
    return new Response(
      `# Staging / Preview Environment - Search engines blocked\nUser-agent: *\nDisallow: /\n`,
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    );
  }

  const site = (SITE_URL || `https://${hostname}`).replace(/\/+$/, '');

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  );
};
