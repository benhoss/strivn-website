/**
 * Third-party systems STRIVN reads from, shown as the compatibility strip.
 *
 * Brand names, like the club names in `clubs.ts`, read the same in all six
 * locales and so sit outside the per-locale content — what each system feeds
 * STRIVN *is* localised, and lives with the section's copy.
 *
 * WHOOP leads because it is the one that arrives on its own: the rest hand
 * over a file the staff exports, WHOOP pushes the night's measurements into
 * the morning check-in through its developer API.
 *
 * The marks under `public/partners/on-white/` are the dark primaries, cropped
 * to their ink and matched on cap height by `scripts/normalize-partners.mjs`.
 * They sit on white tiles for the same reason the club crests do: Hudl's mark
 * is part near-black and would disappear into the page. The reverse variants
 * one directory up are the mailing's — those files are served to already-sent
 * mail, so they are never edited in place.
 *
 * STRIVN is not affiliated with any of these companies; naming a system it
 * reads from is what the strip claims, and the note under it says so.
 */
export const PARTNERS = [
  { slug: 'whoop', name: 'WHOOP' },
  { slug: 'catapult', name: 'Catapult' },
  { slug: 'hudl', name: 'Hudl' },
  { slug: 'oliver-sports', name: 'Oliver Sports' },
] as const;

export type PartnerSlug = (typeof PARTNERS)[number]['slug'];
