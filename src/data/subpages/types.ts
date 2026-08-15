/**
 * Shape of a feature sub-page.
 *
 * The fifteen mockups look bespoke but share a small vocabulary: a card grid,
 * a list of definition rows, columns split by hairlines, two panels compared,
 * a timeline, a warning banner. Rather than fifteen hand-built pages, each one
 * is an array of typed sections that `SubSections.astro` renders — so a change
 * to a section's look happens once, and a new page is content only.
 *
 * Product captures stay bespoke: they name a component in the visual registry.
 */
import type { Locale } from '../landingContent';
export type { Locale };

/** Accent used for chips, dots and panel outlines. */
export type Tone = 'blue' | 'green' | 'orange' | 'red' | 'plain';

/** A banner: icon, sentence, optional trailing link. */
interface Callout {
  tone?: Tone;
  icon?: string;
  text: string;
  link?: { label: string; href: string };
}

/** A wide aside: short label on the left, explanation on the right. */
interface Note {
  label: string;
  desc: string;
  icon?: string;
}

/**
 * Every section may carry a heading block; some carry only that.
 *
 * The mockups routinely close a band with an aside, a warning or a last
 * paragraph rather than starting a new one, so those three live here as
 * trailing slots instead of forcing a section split that would double the
 * vertical padding and break the alternating backgrounds.
 */
interface Head {
  kicker?: string;
  title?: string;
  body?: string;
  /** Capture rendered between the heading and the section body. */
  visual?: string;
  /**
   * Sit the capture beside the heading rather than under it. For narrow
   * specimens — a single card, a form — which would otherwise leave the
   * right half of the band empty.
   */
  visualAside?: boolean;
  callouts?: Callout[];
  note?: Note;
  foot?: string;
  /** Force a background instead of the automatic alternation. */
  bg?: 'a' | 'b';
  /** Anchor target, for pages whose hero offers jump pills. */
  id?: string;
}

export type Section = Head &
  (
    | {
        /** Rows of equal cards: icon tile, name, description. */
        kind: 'cards';
        cards: Array<{ icon: string; title: string; desc: string; tone?: Tone }>;
        /** Cards per row at desktop width. Defaults to 3. */
        per?: 2 | 3;
      }
    | {
        /** Definition rows: a left label (with optional formula), a description,
         *  and an optional chip on the right. Used for indicators, event types,
         *  refusal states. */
        kind: 'rows';
        rows: Array<{
          name: string;
          sub?: string;
          desc: string;
          chip?: { label: string; tone?: Tone };
          tone?: Tone;
        }>;
        /** Render the label as a pill rather than a heading. */
        pill?: boolean;
      }
    | {
        /** Columns separated by vertical hairlines. */
        kind: 'columns';
        cols: Array<{ title: string; desc: string; eyebrow?: string; tone?: Tone }>;
      }
    | {
        /** Two or three panels compared side by side. */
        kind: 'panels';
        panels: Array<{
          title: string;
          eyebrow?: string;
          lead?: string;
          desc?: string;
          items?: string[];
          tone?: Tone;
        }>;
      }
    | {
        /** A row-label / column-A / column-B comparison table. */
        kind: 'compare';
        heads: [string, string];
        tones?: [Tone, Tone];
        rows: Array<{ label: string; a: string; b: string }>;
      }
    | ({ kind: 'callout' } & Callout)
    | ({ kind: 'note' } & Note)
    | {
        /** Before / during / after rail, one step highlighted. */
        kind: 'rail';
        steps: Array<{ num: string; title: string; desc: string; items?: string[] }>;
        activeIndex?: number;
      }
    | {
        /** Nested scales, each indented under the previous one. */
        kind: 'nested';
        levels: Array<{ name: string; where: string; desc: string }>;
        activeIndex?: number;
      }
    | {
        /** A row of headline figures. */
        kind: 'stats';
        stats: Array<{ value: string; label: string; tone?: Tone }>;
      }
    | {
        /** Pointer to a neighbouring page. */
        kind: 'crosslink';
        link: { label: string; href: string };
      }
    | {
        /** A bespoke capture, named in the visual registry. */
        kind: 'visual';
        name: string;
      }
  );

export interface SubpageContent {
  meta: { title: string; description: string };
  hero: {
    kicker: string;
    title: string;
    sub: string;
    /** Ticked lines under the sub-heading. */
    bullets?: string[];
    /**
     * The primary CTA always opens registration. The secondary names its own
     * destination — a label like "See the player docs" pointing at the
     * features index would promise something the page does not deliver.
     */
    ctas?: { primary: string; secondary?: { label: string; href: string } };
    /** Capture shown beside the copy; omit for a centred hero. */
    visual?: string;
    /** Badge above the title — used by the shared staff brief. */
    badge?: { icon: string; label: string };
  };
  sections: Section[];
}

/** One entry per locale, for one page. */
export type SubpageLocales = Record<Locale, SubpageContent>;
