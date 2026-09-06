/**
 * Fails the build when the prices and caps this site publishes disagree with
 * the catalogue the app publishes.
 *
 * The pricing page shipped a €19 Amateur while the app charged €25, and
 * nothing caught it: the numbers were authored twice, in two repositories,
 * and only one of them moved. This check makes that impossible to ship again.
 *
 * A network failure is a WARNING — a plane, a firewall or an app deploy must
 * not block a copy fix. A disagreement is an ERROR.
 */
import { readFileSync } from 'node:fs';

const FEED = process.env.PRICING_FEED ?? 'https://app.strivn.net/pricing/fr.json';
const SOURCE = 'src/data/pricingContent.ts';

const src = readFileSync(SOURCE, 'utf8');

/** The file is ours; the literal is plain data. */
function extractObject(name) {
  const start = src.indexOf(`export const ${name}`);
  if (start === -1) throw new Error(`${name} not found in ${SOURCE}`);
  // Past the type annotation: the value starts at the first `{` after the `=`.
  const assign = src.indexOf('=', start);
  const open = src.indexOf('{', assign);
  let depth = 0;
  for (let i = open; i < src.length; i += 1) {
    if (src[i] === '{') depth += 1;
    else if (src[i] === '}') {
      depth -= 1;
      if (depth === 0) return eval(`(${src.slice(open, i + 1)})`);
    }
  }
  throw new Error(`unbalanced literal for ${name}`);
}

/** Cells of one matrix row, in plan order. */
function rowCells(key) {
  const m = src.match(new RegExp(`\\{ key: '${key}', cells: \\[([^\\]]+)\\]`));
  if (!m) throw new Error(`matrix row "${key}" not found`);
  return m[1].split(',').map((c) => {
    const t = c.trim().replace(/^'|'$/g, '');
    if (t === 'true') return true;
    if (t === 'false') return false;
    return /^\d+$/.test(t) ? Number(t) : t;
  });
}

const prices = extractObject('PLAN_PRICES');

let feed;
try {
  const res = await fetch(FEED, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  feed = await res.json();
} catch (err) {
  console.warn(`check-pricing: could not reach ${FEED} (${err.message}) — skipped.`);
  process.exit(0);
}

const byCode = Object.fromEntries(feed.plans.map((p) => [p.code, p]));
const problems = [];

for (const [code, local] of Object.entries(prices)) {
  const remote = byCode[code];
  if (!remote) {
    problems.push(`plan "${code}" is on the site but not in the catalogue`);
    continue;
  }
  const monthly = remote.price_monthly_cents ?? null;
  if (local.monthly !== monthly) {
    problems.push(`${code} monthly: site ${local.monthly}, catalogue ${monthly}`);
  }
  const yearly = remote.price_yearly_cents ?? undefined;
  if ((local.yearly ?? undefined) !== yearly) {
    problems.push(`${code} yearly: site ${local.yearly ?? 'none'}, catalogue ${yearly ?? 'none'}`);
  }
}

/** `null` in the catalogue means unlimited; the site says so with a token. */
const asCell = (v) => (v === null || v === undefined ? 'unlimited' : v);

const LIMIT_ROWS = {
  teams: 'teams',
  exerciseLibrary: 'exercises',
  tacticalBoards: 'tactical_boards',
  boardTemplates: 'tactical_board_templates',
  staffSeats: 'max_staff_per_team',
  aiCalls: 'ai_calls',
};
const ORDER = ['free', 'amateur', 'semi_pro', 'pro'];

for (const [rowKey, limitKey] of Object.entries(LIMIT_ROWS)) {
  const cells = rowCells(rowKey);
  ORDER.forEach((code, i) => {
    const expected = asCell(byCode[code]?.limits?.[limitKey]);
    if (cells[i] !== expected) {
      problems.push(`${rowKey}/${code}: site ${JSON.stringify(cells[i])}, catalogue ${JSON.stringify(expected)}`);
    }
  });
}

const whatsapp = rowCells('whatsappIncluded');
ORDER.forEach((code, i) => {
  const expected = byCode[code]?.included_whatsapp_messages ?? 0;
  if (whatsapp[i] !== expected) {
    problems.push(`whatsappIncluded/${code}: site ${whatsapp[i]}, catalogue ${expected}`);
  }
});

if (problems.length) {
  console.error(`\ncheck-pricing: the site disagrees with ${FEED}\n`);
  problems.forEach((p) => console.error(`  ✗ ${p}`));
  console.error(`\nThe catalogue wins. Fix ${SOURCE}, or the copy that quotes these figures.\n`);
  process.exit(1);
}

console.log(`Pricing OK — prices and caps match the catalogue (generated ${feed.generated_at}).`);
