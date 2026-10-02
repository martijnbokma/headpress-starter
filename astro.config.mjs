// @ts-check
import { defineConfig, envField } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Content routes render on demand and read through a tagged cache that
  // WordPress purges via /api/revalidate (see docs/SPEC.md, decision 1).
  // Pages with no CMS data can opt into `export const prerender = true`.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  server: { port: 4321, host: true },
  // No Markdown code blocks here; Shiki's inline styles would clash with the CSP.
  markdown: { syntaxHighlight: false },
  env: {
    schema: {
      // Set in .env; provides default fallback so fresh clones start without crashing before .env is set.
      WP_GRAPHQL_URL: envField.string({
        context: 'server',
        access: 'secret',
        url: true,
        optional: true,
        default: 'http://localhost:8080/graphql',
      }),
      HEADLESS_REVALIDATE_SECRET: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      // `secret` makes Astro read it at runtime; `public` values are fixed at
      // build time, which breaks one image deployed to different domains.
      SITE_URL: envField.string({
        context: 'server',
        access: 'secret',
        default: 'http://localhost:4321',
      }),
    },
  },
  // Hash-based CSP: Astro hashes every script and style it emits and sends
  // the header itself, so injected inline scripts are blocked.
  security: {
    csp: {
      directives: ["base-uri 'self'", "object-src 'none'", "frame-ancestors 'self'"],
    },
  },
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
    // Lets the DDEV web container reach the dev server (revalidate webhook).
    server: { allowedHosts: ['host.docker.internal'] },
  },
});
