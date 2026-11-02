// List every string a language needs for the given tutorials, and which are
// missing from i18n/<lang>.json.  node tutorials/i18n/check.mjs fr [--skeleton]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const lang = process.argv[2] || 'fr';
const dictPath = resolve(HERE, `${lang}.json`);
const dict = existsSync(dictPath) ? JSON.parse(readFileSync(dictPath, 'utf8')) : {};
const need = new Map(); // string -> kind
const add = (s, kind) => { if (typeof s === 'string' && s !== '' && !need.has(s)) need.set(s, kind); };
for (const s of ['Feature guide', 'Player app', 'Try it with your team', 'Free for one team. Your whole staff, one platform.', 'Start free · strivn.net', 'More guides: docs.strivn.net']) add(s, 'card');
const lit = String.raw`'((?:[^'\\]|\\.)*)'`;
for (const f of readdirSync(resolve(HERE, '../scripts')).filter((f) => /^\d.*\.mjs$/.test(f)).sort()) {
  const src = readFileSync(resolve(HERE, '../scripts', f), 'utf8');
  const tut = (await import(resolve(HERE, '../scripts', f))).default;
  for (const k of ['eyebrow', 'title', 'subtitle', 'outroTitle', 'outroSub']) add(tut[k], 'meta');
  tut.chapters.forEach((c) => add(c, 'meta'));
  add(tut.youtube.title, 'youtube'); add(tut.youtube.description, 'youtube'); add(tut.youtube.tags.join(', '), 'youtube');
  for (const sc of tut.scenes) { add(sc.title, 'meta'); add(sc.eyebrow, 'meta'); for (const st of sc.steps) { add(st.caption, 'caption'); add(st.chapter, 'meta'); } }
  // UI labels through t(), and callout labels: the 2nd argument of h.spot()/h.click()
  for (const m of src.matchAll(new RegExp(String.raw`\bt\(` + lit, 'g'))) add(m[1].replace(/\\'/g, "'"), 'ui');
  for (const m of src.matchAll(new RegExp(String.raw`\bt\(/((?:[^/\\]|\\.)+)/`, 'g'))) add(m[1], 'ui-regex');
  for (const m of src.matchAll(new RegExp(String.raw`h\.(?:spot|click)\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*?,\s*` + lit, 'g'))) add(m[1].replace(/\\'/g, "'"), 'callout');
  // Belt and braces: the regex above cannot follow every nesting, so also take
  // any capitalised literal that reads like copy (a space, no selector syntax).
  for (const m of src.matchAll(new RegExp(lit, 'g'))) { const x = m[1].replace(/\\'/g, "'"); if (/^[A-Z][a-z]+ [a-z]/.test(x) && !/[\[\]=\/{}]/.test(x)) add(x, 'callout'); }
}
const missing = [...need].filter(([s]) => dict[s] === undefined);
if (process.argv.includes('--skeleton')) {
  const out = {}; for (const [s, k] of need) out[s] = dict[s] ?? `@@${k}`;
  console.log(JSON.stringify(out, null, 1));
} else {
  console.log(`${need.size} strings, ${missing.length} missing`);
  for (const [s, k] of missing) console.log(`${k.padEnd(8)} ${JSON.stringify(s)}`);
}
