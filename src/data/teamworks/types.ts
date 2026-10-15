export interface CompareRow {
  criterion: string;
  teamworks: string;
  strivn: string;
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
  /** Only the rows where both sides are public. No verdict column. */
  compare: {
    id: string;
    eyebrow: string;
    title: string;
    lede: string;
    columns: { criterion: string; teamworks: string; strivn: string };
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
  trialDays: number;
  trialSentence: string;
  trialPerk: string;
  perks: string[];
}
