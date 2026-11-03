/**
 * Builds the contract of the generated website (/beta): what the composer in
 * strivn-app may put on a page, derived from the site itself so the site stays
 * the only owner of its vocabulary.
 *
 *   - `schema`: JSON Schema of `Section` (src/data/subpages/types.ts), the type
 *     every feature page is written in;
 *   - `kinds`, `visuals`, `bands`: src/lib/compose/catalog.json, checked against
 *     the SubVisual registry and the band renderer;
 *   - `icons`: the names HomeIcon draws.
 *
 * Writes src/lib/compose/contract.json. `--check` fails instead of writing when
 * the committed file is stale (run in postbuild), so a change to the section
 * types can never reach production without the composer hearing of it.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createGenerator } from 'ts-json-schema-generator';

const root = new URL('..', import.meta.url).pathname;
const read = (p) => readFileSync(root + p, 'utf8');
const check = process.argv.includes('--check');
const fail = (msg) => {
  console.error(`✗ compose contract: ${msg}`);
  process.exit(1);
};

const schema = createGenerator({
  path: root + 'src/data/subpages/types.ts',
  tsconfig: root + 'tsconfig.json',
  type: 'Section',
  skipTypeCheck: true,
  expose: 'none',
  topRef: false,
}).createSchema('Section');

const catalog = JSON.parse(read('src/lib/compose/catalog.json'));

// Visuals: catalogue and registry must name the same captures.
const registry = [...read('src/components/sub/SubVisual.astro').matchAll(/^\s+'([a-z-]+)':\s*[A-Z]\w+,/gm)].map((m) => m[1]);
const described = Object.keys(catalog.visuals);
const missing = registry.filter((v) => !described.includes(v));
const unknown = described.filter((v) => !registry.includes(v));
if (missing.length) fail(`visuals without a description in catalog.json: ${missing.join(', ')}`);
if (unknown.length) fail(`catalog.json describes visuals the registry lacks: ${unknown.join(', ')}`);

// Bands: every catalogued band needs a renderer.
const renderer = read('src/lib/compose/bands.ts');
const unrendered = Object.keys(catalog.bands).filter((id) => !renderer.includes(`'${id}'`));
if (unrendered.length) fail(`bands without a renderer in src/lib/compose/bands.ts: ${unrendered.join(', ')}`);

const icons = [...read('src/components/home/HomeIcon.astro').matchAll(/^\s{2}([a-z][a-z-]*):\s*(?:'|$)/gm)].map((m) => m[1]);
if (icons.length < 10) fail('could not read the HomeIcon names');

const body = {
  kinds: catalog.kinds,
  schema,
  icons,
  visuals: catalog.visuals,
  bands: Object.fromEntries(Object.entries(catalog.bands).map(([id, b]) => [id, b])),
};
const version = createHash('sha256').update(JSON.stringify(body)).digest('hex').slice(0, 12);
const contract = JSON.stringify({ version, ...body }, null, 2) + '\n';
const target = root + 'src/lib/compose/contract.json';

if (check) {
  let current = '';
  try {
    current = readFileSync(target, 'utf8');
  } catch {
    /* missing counts as stale */
  }
  if (current !== contract) fail('src/lib/compose/contract.json is stale. Run `npm run build:compose-contract` and commit it.');
  console.log(`✓ compose contract ${version} is current`);
} else {
  writeFileSync(target, contract);
  console.log(`✓ compose contract ${version} written (${Object.keys(catalog.visuals).length} visuals, ${Object.keys(catalog.bands).length} bands, ${icons.length} icons)`);
}
