/**
 * Clubs running their season on STRIVN, shown as the credibility strip.
 *
 * Proper nouns: they read the same in all six locales, so they sit outside the
 * per-locale content and cannot drift between translations.
 *
 * The crests under `public/logos/clubs/` are normalized to a common optical
 * area on a white ground by `scripts/normalize-logos.mjs` — several of these
 * marks are near-black and would vanish on the site's background, which is why
 * the strip puts them on white tiles.
 */
export const CLUBS = [
  { slug: 'royal-stockay-saint-georges', name: 'Royal Stockay Saint-Georges' },
  { slug: 'fc-ans', name: 'FC Ans' },
  { slug: 'sl16-fc', name: 'SL16 FC' },
  { slug: 'rochefort-fc', name: 'Rochefort FC' },
  { slug: 'stade-vervietois', name: 'Stade Verviétois' },
] as const;
