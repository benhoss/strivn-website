export interface CompareRow {
  criterion: string;
  opteamal: string;
  strivn: string;
  /** Short scan label. Not a score. */
  verdictLead: string;
  verdict: string;
}

export interface Reason {
  title: string;
  body: string;
}

export interface SwitchPage {
  gpsNote: string;
  /** Second breadcrumb label. */
  crumb: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    /** TODO(validate): dedicated Open Graph image (1200×630). */
    ogImage: string;
    ogImageAlt: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    perks: string[];
  };
  compare: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    columns: { criterion: string; opteamal: string; strivn: string; verdict: string };
    rows: CompareRow[];
    note: string;
  };
  reasons: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    items: Reason[];
  };
  switch: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    steps: { n: string; title: string; body: string }[];
    /**
     * TODO(validate): migration-help offer. Published pending a yes from the
     * business. The three steps do not depend on this offer.
     */
    offer: { tag: string; title: string; body: string; cta: string; href: string };
  };
  stay: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    items: { title: string; body: string }[];
  };
  faq: {
    label: string;
    title: string;
    email: string;
    items: { q: string; a: string; mailto?: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    fine: string[];
  };
  disclaimer: string;
}

/** Prices and tier names derived from the catalogue for one locale. */
export interface LandingBits {
  publicPrices: string;
  /** "Semi-Pro and Pro" already joined in the locale's grammar. */
  gpsTiers: string;
  gpsFiles: string;
  trialSentence: string;
  trialPerk: string;
  perks: string[];
}
