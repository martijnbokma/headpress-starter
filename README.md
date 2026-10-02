# HeadPress Starter

> High-performance Astro hybrid frontend for Headless WordPress.

**HeadPress Starter** connects directly to any WordPress installation powered by the HeadPress Setup Wizard (WPGraphQL + SCF/ACF). It delivers sub-second page loads, zero client-side JavaScript on content pages, React 19 interactive islands, and on-demand cache revalidation.

---

## Features

- **Astro 7 Hybrid Rendering**: Static content prerendered by default, on-demand SSR when dynamic data is needed.
- **Tailwind CSS v4**: Modern CSS-variable token system (`@theme`) with zero build-time boilerplate.
- **End-to-End Type Safety**: Compile-time TypeScript types generated directly from your WordPress WPGraphQL schema.
- **On-Demand Cache Invalidation**: Automatic webhook receiver at `/api/revalidate` with HMAC-SHA256 signature verification.
- **Round-Trip Connection Test**: Built-in `/api/revalidate` handshake responding to the HeadPress WordPress Setup Wizard.
- **Security-First**: Content Security Policy (CSP) headers enabled out of the box.

---

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/martijnbokma/headpress-starter.git frontend
cd frontend
```

### 2. Install dependencies
```bash
bun install
```
*(Or use `npm install` / `pnpm install`)*

### 3. Configure environment variables
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

Set your configuration values (or copy the generated `.env` block from the HeadPress Setup Wizard in WordPress):
```ini
# WordPress GraphQL Endpoint (Server-Side)
WP_GRAPHQL_URL=https://your-wordpress-site.test/graphql

# Public Astro URL
SITE_URL=http://localhost:4321

# Webhook Cache Invalidation Secret (from WordPress Setup Wizard)
HEADLESS_REVALIDATE_SECRET=your_secret_key_here
```

### 4. Start the development server
```bash
bun run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your Astro frontend live.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the Astro development server on port 4321 with LAN/Docker access |
| `bun run build` | Builds the production standalone server in `dist/` |
| `bun run preview` | Previews the production build locally |
| `bun run start` | Runs the production standalone Node server |
| `bun run test` | Runs the test suite (Vitest / Bun test) |
| `bun run check` | Checks TypeScript and Astro template types |
| `bun run codegen` | Regenerates TypeScript GraphQL types from WPGraphQL schema |

---

## Architecture & Revalidation

When posts, pages, or custom fields are updated in WordPress:
1. WordPress emits an HMAC-signed POST request with tags to `/api/revalidate`.
2. HeadPress validates the signature (`X-Headless-Signature`).
3. The server tagged cache purges only the updated content, keeping cached responses instant (0ms TTFB) without redeploying.

---

## License

MIT © [Martijn Bokma](https://github.com/martijnbokma)
