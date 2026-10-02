# Astro server for production. Build context: apps/site.
# Needs no environment at build time; WP_GRAPHQL_URL, SITE_URL and
# HEADLESS_REVALIDATE_SECRET are read when the server starts.

FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4321
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
USER node
EXPOSE 4321
HEALTHCHECK --interval=10s --timeout=5s --start-period=20s --retries=5 \
    CMD wget -qO /dev/null http://127.0.0.1:4321/api/health || exit 1
CMD ["node", "dist/server/entry.mjs"]
