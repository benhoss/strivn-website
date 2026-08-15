/**
 * Post-build link integrity check.
 *
 * Walks every page in dist/ and resolves each internal link against the built
 * output: a path must correspond to a real page, and a fragment must match an
 * `id` that exists in the page it points at. Both halves matter — the defects
 * this guards against were an anchor that resolved on six homepages and
 * nowhere else, and a footer entry pointing at a locale of the blog that was
 * never built. Neither breaks the build, and neither is visible in a diff.
 *
 * Fragments are checked against the *target* page, not the page carrying the
 * link, so a locale-prefixed `/fr/#tarifs` is verified where it lands.
 *
 * Exits non-zero on the first failure class it finds, listing every instance.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, posix } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

/** Every built HTML file, as a site-absolute URL path. */
async function pages(dir = DIST, base = '/') {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      out.push(...(await pages(join(dir, entry.name), posix.join(base, entry.name) + '/')));
    } else if (entry.name === 'index.html') {
      out.push({ url: base, file: join(dir, entry.name) });
    } else if (entry.name.endsWith('.html')) {
      out.push({ url: posix.join(base, entry.name), file: join(dir, entry.name) });
    }
  }
  return out;
}

const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const hrefs = (html) => [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1]);

const all = await pages();
const byUrl = new Map(all.map((p) => [p.url, p]));
const html = new Map();
for (const p of all) html.set(p.url, await readFile(p.file, 'utf8'));

const idCache = new Map();
const idsOf = (url) => {
  if (!idCache.has(url)) idCache.set(url, ids(html.get(url) ?? ''));
  return idCache.get(url);
};

const brokenPaths = [];
const deadAnchors = [];

for (const { url } of all) {
  for (const raw of hrefs(html.get(url))) {
    // External, mail, tel, and protocol-relative links are out of scope.
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;

    const [path, fragment] = raw.split('#');
    const target = path === '' ? url : path.endsWith('/') ? path : `${path}/`;

    if (!byUrl.has(target)) {
      brokenPaths.push(`${url} -> ${raw}`);
      continue;
    }
    if (fragment && !idsOf(target).has(fragment)) {
      deadAnchors.push(`${url} -> ${raw}`);
    }
  }
}

const report = (label, list) => {
  if (!list.length) return false;
  console.error(`\n${label} (${list.length}):`);
  for (const line of list.slice(0, 40)) console.error(`  ${line}`);
  if (list.length > 40) console.error(`  … and ${list.length - 40} more`);
  return true;
};

const failed = [
  report('Links to pages that do not exist', brokenPaths),
  report('Fragments with no matching id on the target page', deadAnchors),
].some(Boolean);

if (failed) {
  console.error(`\nChecked ${all.length} pages.`);
  process.exit(1);
}
console.log(`Links OK — ${all.length} pages, every internal link and fragment resolves.`);
