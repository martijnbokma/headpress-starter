import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const clientDir = path.resolve('dist/client');
const serverEntry = path.resolve('dist/server/entry.mjs');

if (fs.existsSync(serverEntry)) {
  // Create dist/_worker.js so Cloudflare Pages detects the SSR worker
  const workerContent = `export { default } from './server/entry.mjs';\n`;
  fs.writeFileSync(path.join(distDir, '_worker.js'), workerContent);

  // Copy client assets to dist root so Cloudflare Pages can serve static assets directly
  if (fs.existsSync(clientDir)) {
    fs.cpSync(clientDir, distDir, { recursive: true });
  }
  console.log('Successfully prepared dist/_worker.js and static assets for Cloudflare Pages.');
}
