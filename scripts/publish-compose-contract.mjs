/**
 * Post-build: publishes what the composer in strivn-app syncs
 * (`php artisan discovery:sync-site`) under /beta/ of the built site:
 *
 *   - compose-contract.json: src/lib/compose/contract.json, plus the internal
 *     pages a generated link may point to (fr, en), read from the build;
 *   - compose-corpus.json: the visible copy of those pages, cut by heading,
 *     so the composer reuses wording the site already validated.
 *
 * Only FR and EN for the beta; legal and support pages are left out.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, posix } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = existsSync(join(root, 'dist/client')) ? join(root, 'dist/client') : join(root, 'dist');
const LOCALES = ['fr', 'en'];
const SKIP = /\/(beta|privacy|support|tarifs)\/|\/alternative-opteamal\/|\/alternative-teamworks-opteamal\/|\/features\/live\/$/;

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const text = (html) =>
  decode(html.replace(/<(script|style|svg|template)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

function pages(dir, base) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...pages(join(dir, entry.name), posix.join(base, entry.name) + '/'));
    else if (entry.name === 'index.html') out.push({ href: base, file: join(dir, entry.name) });
  }
  return out;
}

const links = {};
const corpus = [];
for (const locale of LOCALES) {
  links[locale] = [];
  const dir = join(dist, locale);
  if (!existsSync(dir)) continue;
  for (const { href, file } of pages(dir, `/${locale}/`)) {
    if (SKIP.test(href)) continue;
    const html = readFileSync(file, 'utf8');
    if (/<meta[^>]+http-equiv="refresh"/i.test(html) || /name="robots" content="noindex/i.test(html)) continue;
    const title = text(/<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] ?? '').replace(/\s*\|\s*STRIVN.*$/, '');
    links[locale].push({ href, title });

    const main = /<main[\s\S]*?>([\s\S]*?)<\/main>/i.exec(html)?.[1] ?? '';
    const parts = main.split(/(?=<h2[\s>])/i);
    const sections = parts
      .map((part) => ({
        heading: text(/<h2[^>]*>([\s\S]*?)<\/h2>/i.exec(part)?.[1] ?? '') || null,
        text: text(part).slice(0, 3000),
      }))
      .filter((s) => s.text.length > 40);
    corpus.push({ locale, href, title, sections });
  }
}

const contract = JSON.parse(readFileSync(join(root, 'src/lib/compose/contract.json'), 'utf8'));
mkdirSync(join(dist, 'beta'), { recursive: true });
writeFileSync(join(dist, 'beta/compose-contract.json'), JSON.stringify({ ...contract, links }));
writeFileSync(join(dist, 'beta/compose-corpus.json'), JSON.stringify({ version: contract.version, pages: corpus }));

const count = (l) => links[l]?.length ?? 0;
console.log(`✓ compose contract ${contract.version} published: ${count('fr')} fr + ${count('en')} en pages, ${corpus.reduce((n, p) => n + p.sections.length, 0)} passages`);
