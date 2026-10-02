# HeadPress Astro Starter (headpress-starter)

High-performance Astro hybrid frontend designed for Headless WordPress with WPGraphQL. Implements on-demand edge rendering, tagged ISR cache invalidation via HMAC webhooks, and strict type safety.

## Tech Stack
- **Framework**: Astro (v5 / v7, `output: 'server'`, `@astrojs/node` standalone)
- **UI Components**: Astro components + React 19 (`@astrojs/react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with OKLCH design tokens
- **Data Layer**: WPGraphQL with `@graphql-codegen` generated TypeScript documents
- **Package Manager**: Bun (`bun.lock`)
- **Testing**: Vitest (`vitest run`)

## Commands

| Command | Description |
|---|---|
| `bun run dev` | Start Astro dev server on `http://localhost:4321` |
| `bun run build` | Build standalone production server in `dist/` |
| `bun run start` | Start built production server (`dist/server/entry.mjs`) |
| `bun run check` | Run Astro and TypeScript static type diagnostics |
| `bun run test` | Run Vitest unit tests (tagged cache & HMAC webhooks) |
| `bun run codegen` | Compile GraphQL documents against WordPress schema |

## Environment Variables

Defined in `astro.config.mjs` via `astro:env/server`:

| Variable | Access | Default | Purpose |
|---|---|---|---|
| `WP_GRAPHQL_URL` | Secret | `http://localhost:8080/graphql` | WordPress GraphQL endpoint |
| `SITE_URL` | Secret | `http://localhost:4321` | Canonical public frontend URL |
| `HEADLESS_REVALIDATE_SECRET` | Secret | Optional | Shared HMAC secret for `/api/revalidate` |

## Architecture and File Map

| Path | Role |
|---|---|
| `src/layouts/BaseLayout.astro` | Main HTML shell with sticky Header, main container, and Footer |
| `src/components/Header.astro` | Sticky navbar with HeadPress branding, navigation, and live status badge |
| `src/components/Footer.astro` | 3-column footer with endpoint status, resources, and tech stack tags |
| `src/components/PostCard.astro` | Editorial card component for articles with date and excerpt |
| `src/components/DiagnosticsCard.astro` | Clear onboarding and troubleshooting guide when WP is unreachable |
| `src/pages/index.astro` | Homepage with hero section, architecture highlights, and articles grid |
| `src/pages/[...uri].astro` | Catch-all dynamic route resolving WordPress pages and posts via `NodeByUri` |
| `src/pages/404.astro` | Clean 404 page with return actions |
| `src/pages/api/health.ts` | Edge health check endpoint reporting WordPress connectivity |
| `src/pages/api/revalidate.ts` | Webhook endpoint verifying HMAC signatures and purging tagged cache |
| `src/lib/wordpress.ts` | Central GraphQL request client and caching wrapper (`wpQuery`) |
| `src/lib/tagged-cache.ts` | Tagged in-memory cache supporting targeted purge by tag (`post:{id}`) |
| `src/lib/webhook-signature.ts` | HMAC SHA-256 signature verification utilities |
| `src/styles/theme.css` | Tailwind v4 theme tokens (OKLCH) and `.prose` typography styling |

## Code Conventions & Non-Negotiables

1. **Language Policy**:
   - Always use English for all UI copy, labels, headings, metadata, comments, and commit messages. Never write Dutch in frontend code.
2. **Design Tokens**:
   - Use semantic color tokens (`bg-background`, `text-foreground`, `bg-surface`, `border-border`, `text-primary`, `text-muted-foreground`). Never use raw hardcoded hex codes.
3. **Hash-Based CSP**:
   - A strict Content Security Policy is configured in `astro.config.mjs`. Do not write inline `<style>` or `style=""` attributes. Use Tailwind CSS classes.
4. **Tagged Caching**:
   - Always map query results to relevant cache tags in `wpQuery(doc, vars, tagsFor)`. Tags should follow `post:{id}` and `type:{post_type}` format so the WordPress webhook can purge them selectively.
5. **No Em Dashes**:
   - Do not use em dashes (U+2014) in copy, code, or documentation. Use hyphens, colons, or bullet points (`&bull;`) instead.
