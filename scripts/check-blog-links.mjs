// Crawls the built blog and fails on any internal link that does not resolve.
//
// Every page under dist/fr/blog/ is fetched over HTTP from a static server that
// resolves paths the way a production host does. For each page we assert that
// every root-relative <a href> and every <link rel="alternate"> target answers
// 200. The blog ships in French only, so the language switcher and the hreflang
// set are the two places where a translated-but-nonexistent URL creeps back in;
// this script is what catches that.
//
// Run with: node scripts/check-blog-links.mjs   (after `npm run build`)
import { createServer } from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

try {
  await stat(join(dist, 'fr', 'blog'));
} catch {
  console.error('No dist/fr/blog — run `npm run build` first.');
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

/** Resolve a URL path to a file the way a static host would. */
async function resolveFile(urlPath) {
  const rel = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const base = join(dist, rel);
  if (!base.startsWith(dist)) return null; // path traversal
  const candidates = urlPath.endsWith('/')
    ? [join(base, 'index.html')]
    : [base, `${base}.html`, join(base, 'index.html')];
  for (const candidate of candidates) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      /* next candidate */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  const urlPath = new URL(req.url, 'http://localhost').pathname;
  const file = await resolveFile(urlPath);
  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }
  const ext = file.slice(file.lastIndexOf('.'));
  res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
  res.end(await readFile(file));
});

/** Every built page under dist/fr/blog/. */
async function blogPages(dir = join(dist, 'fr', 'blog'), prefix = '/fr/blog/') {
  const out = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      out.push(...(await blogPages(join(dir, item.name), `${prefix}${item.name}/`)));
    } else if (item.name === 'index.html') {
      out.push(prefix);
    }
  }
  return out.sort();
}

const ANCHOR_HREF = /<a\b[^>]*?\bhref="([^"]+)"/gi;
const ALTERNATE_HREF = /<link\b[^>]*?\brel="alternate"[^>]*?\bhref="([^"]+)"/gi;

function extract(html, re) {
  return [...html.matchAll(re)].map((m) => m[1]);
}

const listening = new Promise((r) => server.listen(0, '127.0.0.1', r));
await listening;
const origin = `http://127.0.0.1:${server.address().port}`;

const pages = await blogPages();
const statusCache = new Map();

async function status(url) {
  if (!statusCache.has(url)) {
    statusCache.set(url, fetch(`${origin}${url}`, { redirect: 'manual' }).then((r) => r.status));
  }
  return statusCache.get(url);
}

/** Strip the fragment; hash-only links point at the current page. */
function toPath(href) {
  const hash = href.indexOf('#');
  return hash === -1 ? href : href.slice(0, hash);
}

const failures = [];
for (const page of pages) {
  const res = await fetch(`${origin}${page}`);
  if (res.status !== 200) {
    failures.push({ page, href: page, kind: 'page', status: res.status });
    continue;
  }
  const html = await res.text();
  const targets = [
    ...extract(html, ANCHOR_HREF).map((href) => ({ href, kind: 'a[href]' })),
    ...extract(html, ALTERNATE_HREF).map((href) => ({ href, kind: 'link[rel=alternate]' })),
  ];
  for (const { href, kind } of targets) {
    // hreflang alternates are absolute; anchors are root-relative.
    const path = toPath(href.startsWith('https://strivn.net') ? href.slice('https://strivn.net'.length) : href);
    if (!path.startsWith('/')) continue; // external, mailto:, tel:, in-page anchor
    const code = await status(path);
    if (code !== 200) failures.push({ page, href: path, kind, status: code });
  }
}

server.close();

const checked = statusCache.size;
if (failures.length === 0) {
  console.log(`✓ ${pages.length} blog pages crawled, ${checked} unique internal links — all 200.`);
  process.exit(0);
}

console.error(`✗ ${failures.length} broken link(s) across ${pages.length} blog pages:\n`);
for (const f of failures) {
  console.error(`  ${String(f.status).padEnd(3)}  ${f.href}\n        ${f.kind} on ${f.page}`);
}
console.error(`\n${new Set(failures.map((f) => f.href)).size} distinct broken URL(s).`);
process.exit(1);
