/**
 * Content for the S&C-first homepage (all six locales).
 *
 * The page follows the performance coach's week, from Monday's GPS export to
 * the next Monday's report (redesign 2026-09, `redesign-mockup.html`). Every
 * user-visible string lives here, including the labels inside the drawn
 * product panels, so the whole page localises from one place.
 *
 * The mock data itself (player names, file names, the figures in the tables
 * and the chart) does not translate and sits in the shared constants below,
 * so the six locales can never show six different squads.
 *
 * `finalCta` and `footer` also close the other landing pages of the site.
 */
import type { Locale } from './landingContent';
export type { Locale };

/** A player's state. The colour follows it; nothing else is coloured. */
export type PlayerState = 'ready' | 'watch' | 'risk' | 'wait';

export interface MoreLink {
  label: string;
  href: string;
}

/** One figure and the sentence it belongs to. */
export interface Fact {
  n: string;
  body: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  /** The percent sign as this locale sets it after a figure (" %" in French). */
  pct: string;
  /** Status chip labels, shared by every panel on the page. */
  status: Record<PlayerState, string> & { importing: string };
  hero: {
    eyebrow: string;
    /** The positioning phrase. Hero and meta title only (PRODUCT.md, voice rule 11). */
    titleMuted: string;
    titleMain: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    fine: string[];
    /** The CSV → decisions panel. */
    panel: {
      aria: string;
      cols: [string, string, string, string, string, string];
      read: string;
      busy: string;
      busyValue: string;
      proposed: string;
      /** Follows the player's name, separator included (" : " in French). */
      proposal: string;
      sources: string;
    };
  };
  proof: {
    aria: string;
    stat: string;
    line: string;
    crestsAria: string;
    method: string;
  };
  /** Monday 08:10 · the GPS import, and the spreadsheet it replaces. */
  import: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    sheet: {
      aria: string;
      edited: string;
      cols: [string, string, string, string, string, string];
    };
    mapping: {
      label: string;
      /** Target field names, in the order of `IMPORT_COLUMNS`. */
      to: [string, string, string, string];
      done: string;
    };
    facts: [Fact, Fact, Fact, Fact];
    links: MoreLink[];
  };
  /** Wednesday 07:45 · the readiness board and the evidence behind a call. */
  readiness: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    kpis: [Kpi, Kpi, Kpi, Kpi, Kpi];
    rosterAria: string;
    whyTitle: string;
    whyScore: string;
    /** Labels for the five figures in `WHY_VALUES`. */
    evidence: [string, string, string, string, string];
    proposal: string;
    apply: string;
    edit: string;
    links: MoreLink[];
  };
  /** Wednesday 10:00 · the microcycle, target against actual, to scale. */
  plan: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    chartLabel: string;
    legendTarget: string;
    legendActual: string;
    today: string;
    /** Monday to Saturday; Sunday is the match. */
    days: [string, string, string, string, string, string];
    match: string;
    chartAria: string;
    adjustLabel: string;
    /** One sentence per player in `PLAN_ADJUSTMENTS`. */
    adjustments: [string, string, string];
    links: MoreLink[];
  };
  /** Thursday 18:34 · the live session. */
  live: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    badge: string;
    session: string;
    meta: string;
    blocks: [LiveBlock, LiveBlock, LiveBlock, LiveBlock];
    rowsAria: string;
    /** Follows the player's name. */
    alert: string;
    primary: string;
    secondary: string;
    links: MoreLink[];
  };
  /** Every day 07:42 · the player app. */
  playerApp: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    facts: [Fact, Fact, Fact, Fact];
    partnersAria: string;
    partnersNote: string;
    whoop: { recovery: string; hrv: string };
    /** Morning phone: wellness, then the WHOOP reading. */
    phone: {
      time: string;
      greeting: string;
      team: string;
      wellness: {
        title: string;
        badge: string;
        /** `value` is the selected step on a 1–5 scale */
        rows: Array<{ label: string; value: number }>;
        submit: string;
      };
      rpe: { title: string; value: string };
      workout: { title: string; meta: string };
    };
    /** Evening phone: RPE after the session, then the day's workout. */
    evening: {
      time: string;
      title: string;
      sub: string;
      intensity: string;
      workoutTitle: string;
      workoutBody: string;
    };
    links: MoreLink[];
  };
  /** Sunday 21:05 · the assistant, then Monday's report. */
  assistant: {
    /** The section's topic, shown as an eyebrow above its head. */
    label: string;
    title: string;
    body: string;
    initials: string;
    question: string;
    answer: { intro: string; strong: string; outro: string };
    metrics: [string, string, string, string];
    sources: string;
    legend: [string, string];
    pin: string;
    refine: string;
    report: [ReportItem, ReportItem, ReportItem];
    links: MoreLink[];
  };
  /** The four tiers come from `pricingContent`; this is the band around them. */
  pricing: {
    label: string;
    title: string;
    body: string;
    /** The featured tier's button: the trial, not a purchase. */
    featuredCta: string;
    line: string;
    compare: string;
  };
  faq: {
    label: string;
    title: string;
    email: string;
    items: Array<{ q: string; a: string }>;
  };
  /** Closes the homepage and the other landing pages. */
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    fine: string[];
  };
  footer: {
    tagline: string;
    body: string;
    email: string;
    /**
     * `hreflang` marks a link whose destination is in another language —
     * the blog exists in French only, so the five other locales point at it
     * and browsers and crawlers should know that before following.
     */
    columns: Array<{
      title: string;
      links: Array<{ label: string; href: string; hreflang?: string }>;
    }>;
    copyright: string;
  };
}

interface Kpi {
  label: string;
  value: string;
}
interface LiveBlock {
  t: string;
  label: string;
}
interface ReportItem {
  label: string;
  body: string;
}

/* ─────────────────────── Shared mock data ─────────────────────── */

/** Where "Parler à Benoit" goes, in every locale. */
export const CONTACT_EMAIL = 'hello@strivn.net';

export const HERO_FILE = 'seance_mardi_catapult.csv';
export const HERO_TIME = '07:45';

/** The hero table. `hot` / `risk` mark the cells that explain the call. */
export const HERO_ROWS: Array<{
  name: string;
  hsr: string;
  rpe: string;
  sleep: string;
  acwr: string;
  state: Exclude<PlayerState, 'wait'>;
  hot?: Array<'hsr' | 'rpe' | 'sleep' | 'acwr'>;
  risk?: Array<'hsr' | 'rpe' | 'sleep' | 'acwr'>;
}> = [
  { name: 'A. Diallo', hsr: '612', rpe: '6', sleep: '7 h 40', acwr: '1.05', state: 'ready' },
  { name: 'L. Moreau', hsr: '884', rpe: '8', sleep: '4 h 05', acwr: '1.31', state: 'risk', hot: ['hsr', 'rpe'], risk: ['sleep', 'acwr'] },
  { name: 'K. Nakamura', hsr: '701', rpe: '7', sleep: '6 h 50', acwr: '1.18', state: 'watch', hot: ['acwr'] },
  { name: 'S. Petit', hsr: '540', rpe: '5', sleep: '8 h 10', acwr: '0.97', state: 'ready' },
  { name: 'M. Lefèvre', hsr: '598', rpe: '6', sleep: '7 h 25', acwr: '1.02', state: 'ready' },
];

/** The player every panel follows through the week. */
export const FOCUS_PLAYER = 'L. Moreau';

/** Monday's spreadsheet, the one light surface on the site. */
export const SHEET_FILE = 'croisement_S12_v4_FINAL.xlsx';
export const SHEET_TABS = ['croisement', 'export_gps', 'rpe_messagerie', 'wellness_forms', 'plan'];
export const SHEET_ROWS: Array<Array<{ v: string; tone?: 'hl' | 'err' | 'formula' }>> = [
  [{ v: 'Diallo A.' }, { v: '612' }, { v: '6' }, { v: '7,4' }, { v: '2 210' }, { v: '=F2/AVERAGE(…', tone: 'formula' }],
  [{ v: 'Moreau L.' }, { v: '884', tone: 'hl' }, { v: '8', tone: 'hl' }, { v: '4,0', tone: 'hl' }, { v: '2 870' }, { v: '#REF!', tone: 'err' }],
  [{ v: 'Nakamura K.' }, { v: '701' }, { v: '' }, { v: '6,8' }, { v: '2 460' }, { v: '=F4/AVERAGE(…', tone: 'formula' }],
  [{ v: 'Petit S.' }, { v: '540' }, { v: '5' }, { v: '' }, { v: '2 090' }, { v: '0,97' }],
  [{ v: 'Lefevre M.' }, { v: '#N/A', tone: 'hl' }, { v: '6' }, { v: '7,2' }, { v: '2 150' }, { v: '1,02' }],
];

/** Source headers of the GPS export, as the vendor writes them. */
export const IMPORT_COLUMNS = ['Total Distance (m)', 'HSR >19.8 km/h (m)', 'Sprint Count', 'Player Load'] as const;

/** Readiness board. `bar` is the readiness score out of 100. */
export const ROSTER: Array<{ name: string; bar: number; acwr: string; state: PlayerState; tone?: 'hi' | 'mid' }> = [
  { name: 'A. Diallo', bar: 91, acwr: '1.05', state: 'ready' },
  { name: 'L. Moreau', bar: 58, acwr: '1.31', state: 'risk', tone: 'hi' },
  { name: 'K. Nakamura', bar: 71, acwr: '1.18', state: 'watch', tone: 'mid' },
  { name: 'S. Petit', bar: 88, acwr: '0.97', state: 'ready' },
  { name: 'M. Lefèvre', bar: 84, acwr: '1.02', state: 'ready' },
  { name: 'T. Mendes', bar: 0, acwr: '·', state: 'wait' },
];
/** Tone of each KPI value on the board, in `readiness.kpis` order. */
export const KPI_TONES: Array<'ready' | 'watch' | undefined> = [undefined, undefined, 'ready', undefined, 'watch'];

/** The five figures behind L. Moreau's call, in `readiness.evidence` order. */
export const WHY_VALUES: Array<{ v: string; tone?: 'risk' | 'watch'; pct?: boolean }> = [
  { v: '1.31', tone: 'risk' },
  { v: '3', tone: 'risk' },
  { v: '4 h 05', tone: 'watch' },
  { v: '+22', tone: 'watch', pct: true },
  { v: '8 / 10' },
];

/**
 * Microcycle W12 in AU, Monday to the Sunday match. `actual` is null from
 * Thursday: the week is read on Wednesday. The chart is drawn from these
 * numbers, to scale; the labels under the days print them.
 */
export const PLAN_DAYS: Array<{ target: number; actual: number | null }> = [
  { target: 180, actual: 170 },
  { target: 520, actual: 548 },
  { target: 380, actual: 372 },
  { target: 460, actual: null },
  { target: 240, actual: null },
  { target: 120, actual: null },
  { target: 620, actual: null },
];
/** Index of "today" in `PLAN_DAYS` (Thursday, the session being planned). */
export const PLAN_TODAY = 3;
export const PLAN_ADJUSTMENTS: Array<{ name: string; state: PlayerState }> = [
  { name: 'L. Moreau', state: 'risk' },
  { name: 'K. Nakamura', state: 'watch' },
  { name: 'T. Mendes', state: 'wait' },
];

/** Live session: share of each player's target reached, and the plan mark. */
export const LIVE_PLAN_MARK = 55;
export const LIVE_ROWS: Array<{ name: string; pct: number; over?: boolean }> = [
  { name: 'A. Diallo', pct: 64 },
  { name: 'L. Moreau', pct: 92, over: true },
  { name: 'S. Petit', pct: 58 },
  { name: 'M. Lefèvre', pct: 61 },
];

/** Match MD14 against MD13: bar lengths (share of the metric's scale) and the delta in %. */
export const COMPARE: Array<{ a: number; b: number; d: string }> = [
  { a: 94, b: 95, d: '+1' },
  { a: 72, b: 78.5, d: '+9' },
  { a: 62, b: 75, d: '+21' },
  { a: 84, b: 86, d: '+2' },
];

/** The evening phone's RPE, out of 10. */
export const EVENING_RPE = 7;
/** WHOOP recovery in %, HRV in ms. */
export const WHOOP_READING = { recovery: 74, hrv: 68 };

/* ────────────────────────────── FR ────────────────────────────── */

const fr: HomeContent = {
  meta: {
    title: 'STRIVN | Le système d’exploitation du staff performance',
    description:
      'Import GPS, wellness, charge et planification dans un seul outil. L’IA lit les données du groupe et signale qui alléger. Gratuit pour une équipe, partagé par tout le staff.',
  },
  pct: ' %',
  status: { ready: 'Prêt', watch: 'Surveiller', risk: 'Alléger', wait: 'Protocole', importing: 'Import' },
  hero: {
    eyebrow: 'Pour le préparateur physique et le head of performance',
    titleMuted: 'Le système d’exploitation',
    titleMain: 'du staff performance.',
    sub: 'Vous avez déjà payé votre GPS. Importez l’export, STRIVN le croise avec le RPE, le wellness et le plan, puis vous dit qui alléger.',
    primaryCta: 'Commencer gratuitement',
    secondaryCta: 'Parler à Benoit',
    fine: ['30 jours de Semi-Pro offerts', 'Sans carte', 'Sans validation du club'],
    panel: {
      aria: 'Exemple : l’export GPS de la veille devient la lecture du matin',
      cols: ['Joueur', 'HSR m', 'RPE', 'Sommeil', 'ACWR', 'Lecture'],
      read: 'LECTURE',
      busy: 'CROISEMENT',
      busyValue: 'EN COURS',
      proposed: 'Proposé',
      proposal: ' : 3e semaine au-dessus du seuil. Volume −30 % jeudi, sans sprint.',
      sources: 'Sources · GPS mardi · RPE · wellness 16/18 · plan S12',
    },
  },
  proof: {
    aria: 'Qui utilise STRIVN',
    stat: '50+',
    line: 'équipes font tourner leur saison sur STRIVN, du régional au professionnel.',
    crestsAria: 'Clubs qui utilisent STRIVN',
    method: 'Méthodologie',
  },
  import: {
    label: 'Import GPS',
    title: 'Importez l’export GPS, quel que soit le capteur.',
    body: 'Déposez le CSV de Catapult, STATSports ou d’un autre système. Les colonnes sont reconnues au premier import, puis mémorisées pour les suivants.',
    sheet: {
      aria: 'Avant : le tableur de croisement',
      edited: 'Modifié par 3 personnes',
      cols: ['Joueur', 'HSR', 'RPE', 'Sommeil', 'UA 7 j', 'ACWR'],
    },
    mapping: {
      label: 'Colonnes reconnues',
      to: ['Distance totale', 'Course haute intensité', 'Sprints', 'Charge externe'],
      done: '18 joueurs reconnus · relié à « Séance mardi · bloc intensité »',
    },
    facts: [
      { n: '4', body: 'sources croisées sur le même créneau : GPS, RPE, wellness et plan.' },
      { n: '18', body: 'joueurs rattachés au calendrier, un par un, dès l’import.' },
      { n: '7 / 28', body: 'jours de fenêtre pour l’ACWR, recalculé chaque nuit.' },
      { n: '1', body: 'version des données, partagée par tout le staff.' },
    ],
    links: [{ label: 'Voir l’import GPS', href: '/fr/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Sachez qui est apte avant la séance.',
    body: 'Les joueurs répondent au check-in au réveil. Chaque décision affiche les données qui la justifient, pour que le staff la valide en un geste.',
    kpis: [
      { label: 'Readiness', value: '82 %' },
      { label: 'Charge 7 j', value: '2 340 UA' },
      { label: 'ACWR groupe', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alertes', value: '3' },
    ],
    rosterAria: 'Readiness par joueur',
    whyTitle: 'Pourquoi L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 j', 'Semaines au-dessus du seuil', 'Sommeil déclaré', 'HSR mardi vs profil', 'RPE séance mardi'],
    proposal: 'Jeudi : volume −30 %, pas de bloc vitesse.',
    apply: 'Appliquer',
    edit: 'Modifier',
    links: [{ label: 'Voir le check-in', href: '/fr/features/check-in/' }],
  },
  plan: {
    label: 'Planification de charge',
    title: 'Planifiez la charge en UA, séance par séance.',
    body: 'Fixez une cible par séance. STRIVN compare au réalisé, calcule l’ACWR et la monotonie, puis signale chaque écart joueur par joueur.',
    chartLabel: 'Microcycle S12 · match dimanche',
    legendTarget: 'Cible',
    legendActual: 'Réalisée',
    today: 'AUJOURD’HUI',
    days: ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'],
    match: 'MATCH',
    chartAria: 'Charge cible et réalisée par jour, en UA. Lundi 180 et 170, mardi 520 et 548, mercredi 380 et 372, jeudi 460 en cours, vendredi 240, samedi 120, dimanche match 620.',
    adjustLabel: 'Ajustements individuels · jeudi',
    adjustments: [
      'Volume −30 %, pas de sprint. Cible ramenée de 460 à 320 UA.',
      'Courbatures élevées après mardi. Bloc vitesse limité à 4 répétitions.',
      'Réathlétisation ischio, 30 min individualisées. Retour estimé J+18.',
    ],
    links: [{ label: 'Voir la planification de charge', href: '/fr/features/training-load/' }],
  },
  live: {
    label: 'Séance live',
    title: 'Suivez la charge pendant la séance, bloc par bloc.',
    body: 'Pointez les présences au bord du terrain. La charge se cumule par bloc et l’écart au plan s’affiche pendant que vous pouvez encore agir.',
    badge: 'LIVE',
    session: 'Séance jeudi · bloc intensité',
    meta: '17 présents · estimée 445 UA · cible 460',
    blocks: [
      { t: '12 MIN · 48 UA', label: 'Échauffement + activation' },
      { t: 'EN COURS · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 UA', label: 'Vitesse, sprints lancés' },
      { t: '14 MIN · 87 UA', label: 'Jeu réduit + retour au calme' },
    ],
    rowsAria: 'Charge cumulée par joueur, en part de la cible',
    alert: ' atteint 92 % de sa cible dès le bloc 2. L’écarter du bloc vitesse ?',
    primary: 'Écarter',
    secondary: 'Maintenir',
    links: [{ label: 'Voir la séance en direct', href: '/fr/features/live-session/' }],
  },
  playerApp: {
    label: 'App joueur',
    title: 'Vos joueurs répondent en vingt secondes.',
    body: 'L’app demande trois choses au bon moment : le wellness au réveil, le RPE après la séance, le workout du jour. La relance part seule.',
    facts: [
      { n: '20 s', body: 'Questionnaire wellness au réveil, sur mobile.' },
      { n: '1 geste', body: 'RPE post-séance, notification incluse.' },
      { n: '100', body: 'joueurs peuvent connecter leur WHOOP au check-in.' },
      { n: '0 app', body: 'requise pour répondre : un lien suffit.' },
    ],
    partnersAria: 'Systèmes compatibles',
    partnersNote: 'Marques citées à titre de compatibilité.',
    whoop: { recovery: 'récupération', hrv: 'VFC' },
    phone: {
      time: '7:42',
      greeting: 'Bonjour, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness du matin',
        badge: '20 s',
        rows: [
          { label: 'Sommeil', value: 4 },
          { label: 'Fatigue', value: 3 },
          { label: 'Courbatures', value: 4 },
        ],
        submit: 'Envoyer',
      },
      rpe: { title: 'RPE · séance d’hier', value: '7' },
      workout: { title: 'Workout du jour · prévention', meta: '3 exercices · 12 min · vidéos incluses' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · séance du jour',
      sub: 'Séance jeudi · 65 min',
      intensity: 'Intensité ressentie',
      workoutTitle: 'Workout · prévention',
      workoutBody: 'Nordic curls 3×8 · Copenhagen 3×10 · 12 min · vidéos incluses',
    },
    links: [{ label: 'Voir l’app joueur', href: '/fr/features/player-app/' }],
  },
  assistant: {
    label: 'Assistant & rapports',
    title: 'Interrogez toutes vos données en une question.',
    body: 'L’assistant lit la charge, le wellness, le GPS et l’infirmerie ensemble. Chaque réponse cite ses sources, et chaque graphique s’épingle à vos dashboards.',
    initials: 'PR',
    question: 'Compare les métriques de ce match avec le précédent.',
    answer: {
      intro: 'Sur les exports GPS des matchs J14 et J13 : ',
      strong: 'HSR +9 % et sprints +21 % pour une distance quasi stable.',
      outro: ' L’intensité progresse sans surcoût de charge.',
    },
    metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'CHARGE'],
    sources: 'Sources · GPS match J14 · GPS match J13',
    legend: ['J13', 'J14'],
    pin: 'Épingler au dashboard',
    refine: 'Affiner',
    report: [
      { label: 'Rapport généré', body: 'Le rapport se génère seul : charge conforme au plan à −2 %, readiness en hausse.' },
      { label: 'Partagé avec 4 membres', body: 'Head coach, kiné et adjoints lisent les mêmes données, chacun avec ses droits.' },
      { label: 'Vers la convocation', body: 'Disponibilités poussées vers le prochain match : 15 aptes, 2 à surveiller, 1 indisponible.' },
    ],
    links: [
      { label: 'Voir les rapports', href: '/fr/features/reports/' },
      { label: 'Voir la page préparateurs physiques', href: '/fr/preparateurs-physiques/' },
    ],
  },
  pricing: {
    label: 'Tarifs',
    title: 'Démarrez gratuitement, croisez le GPS au Semi-Pro.',
    body: 'Chaque nouveau compte démarre 30 jours au Semi-Pro, sans carte. À l’échéance, il repasse au gratuit et vous gardez tout ce que vous avez produit.',
    featuredCta: 'Essayer 30 jours',
    line: 'Semi-Pro, importez votre GPS. Pro, connectez votre GPS.',
    compare: 'Comparer les quatre paliers ligne par ligne',
  },
  faq: {
    label: 'FAQ',
    title: 'Les questions que posent les staffs.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Comment importer mes données GPS ?',
        a: 'Par export CSV, depuis Catapult, STATSports ou tout autre système. La correspondance des colonnes est mémorisée au premier import, et les suivants prennent quelques secondes.',
      },
      {
        q: 'Qui garde le contrôle de l’espace d’équipe ?',
        a: 'Vous. Vous créez l’espace, invitez le staff et définissez les droits de chacun, sans validation du club.',
      },
      {
        q: 'Quel est le délai de mise en place ?',
        a: 'Quelques minutes : créez l’espace, ajoutez vos joueurs, importez votre première séance. L’historique se construit au fil des semaines.',
      },
      {
        q: 'Pourquoi le plan Free est-il gratuit ?',
        a: 'Parce qu’un coach doit pouvoir structurer son travail sans demander un budget. Free couvre une équipe et ses joueurs sans plafond, pour toujours.',
      },
      {
        q: 'Comment obtenir l’adhésion du head coach ?',
        a: 'Commencez avec vos propres données, puis envoyez le dossier staff. Le head coach lit la disponibilité réelle dans la convocation.',
      },
      {
        q: 'Une autre question ?',
        a: 'Écrivez à hello@strivn.net. Nous répondons nous-mêmes, en général dans la journée.',
      },
    ],
  },
  finalCta: {
    title: 'Créez votre espace et importez votre première séance.',
    body: 'Les 30 premiers jours sont au Semi-Pro, import GPS compris. Votre staff vous rejoint quand il voit vos premiers rapports.',
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Parler à Benoit',
    fine: ['Sans carte bancaire', 'Vos données restent les vôtres'],
  },
  footer: {
    tagline: 'Le monitoring d’un staff professionnel, sans le budget d’un club professionnel.',
    body: 'STRIVN réunit le monitoring de la performance et l’intendance d’équipe dans un seul espace partagé par le staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUIT',
        links: [
          { label: 'Plateforme', href: '/fr/solutions/' },
          { label: 'Fonctionnalités', href: '/fr/features/' },
          { label: 'Tarifs', href: '/fr/pricing/' },
          { label: 'FAQ', href: '/fr/#faq' },
          { label: 'Blog', href: '/fr/blog/' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
        ],
      },
      {
        title: 'RESSOURCES',
        links: [
          { label: 'Support', href: '/fr/support/' },
          { label: 'Confidentialité', href: '/fr/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratuit pour une équipe, toute la saison',
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: HomeContent = {
  meta: {
    title: 'STRIVN | The operating system for performance staff',
    description:
      'GPS import, wellness, load and planning in one tool. The AI reads the squad data and tells you who to hold back. Free for one team, shared by the whole staff.',
  },
  pct: '%',
  status: { ready: 'Ready', watch: 'Monitor', risk: 'Reduce', wait: 'Protocol', importing: 'Import' },
  hero: {
    eyebrow: 'For the S&C coach and the head of performance',
    titleMuted: 'The operating system',
    titleMain: 'for performance staff.',
    sub: 'You have already paid for your GPS. Import the export, and STRIVN crosses it with RPE, wellness and the plan, then tells you who to hold back.',
    primaryCta: 'Start for free',
    secondaryCta: 'Talk to Benoit',
    fine: ['30 days of Semi-Pro included', 'No card', 'No club approval'],
    panel: {
      aria: 'Example: yesterday’s GPS export becomes this morning’s read',
      cols: ['Player', 'HSR m', 'RPE', 'Sleep', 'ACWR', 'Read'],
      read: 'READ',
      busy: 'CROSSING',
      busyValue: 'IN PROGRESS',
      proposed: 'Proposed',
      proposal: ': third week above threshold. Volume −30% on Thursday, no sprints.',
      sources: 'Sources · Tuesday GPS · RPE · wellness 16/18 · plan W12',
    },
  },
  proof: {
    aria: 'Who uses STRIVN',
    stat: '50+',
    line: 'teams run their season on STRIVN, from regional to professional.',
    crestsAria: 'Clubs using STRIVN',
    method: 'Methodology',
  },
  import: {
    label: 'GPS import',
    title: 'Import the GPS export, whatever the sensor.',
    body: 'Drop the CSV from Catapult, STATSports or any other system. Columns are recognised on the first import, then remembered for the next ones.',
    sheet: {
      aria: 'Before: the cross-reference spreadsheet',
      edited: 'Edited by 3 people',
      cols: ['Player', 'HSR', 'RPE', 'Sleep', 'AU 7 d', 'ACWR'],
    },
    mapping: {
      label: 'Recognised columns',
      to: ['Total distance', 'High-speed running', 'Sprints', 'External load'],
      done: '18 players recognised · linked to “Tuesday session · intensity block”',
    },
    facts: [
      { n: '4', body: 'sources crossed on the same slot: GPS, RPE, wellness and plan.' },
      { n: '18', body: 'players attached to the calendar, one by one, from the import.' },
      { n: '7 / 28', body: 'day windows for the ACWR, recomputed every night.' },
      { n: '1', body: 'version of the data, shared by the whole staff.' },
    ],
    links: [{ label: 'See GPS import', href: '/en/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Know who is fit before the session.',
    body: 'Players answer the check-in on waking. Every decision shows the data behind it, so the staff can confirm it in one tap.',
    kpis: [
      { label: 'Readiness', value: '82%' },
      { label: '7-day load', value: '2 340 AU' },
      { label: 'Squad ACWR', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alerts', value: '3' },
    ],
    rosterAria: 'Readiness per player',
    whyTitle: 'Why L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 d', 'Weeks above threshold', 'Reported sleep', 'Tuesday HSR vs profile', 'Tuesday session RPE'],
    proposal: 'Thursday: volume −30%, no speed block.',
    apply: 'Apply',
    edit: 'Edit',
    links: [{ label: 'See the check-in', href: '/en/features/check-in/' }],
  },
  plan: {
    label: 'Load planning',
    title: 'Plan the load in AU, session by session.',
    body: 'Set a target for each session. STRIVN compares it with the actual load, computes ACWR and monotony, then flags every gap player by player.',
    chartLabel: 'Microcycle W12 · Sunday match',
    legendTarget: 'Target',
    legendActual: 'Actual',
    today: 'TODAY',
    days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    match: 'MATCH',
    chartAria: 'Target and actual load per day, in AU. Monday 180 and 170, Tuesday 520 and 548, Wednesday 380 and 372, Thursday 460 in progress, Friday 240, Saturday 120, Sunday match 620.',
    adjustLabel: 'Individual adjustments · Thursday',
    adjustments: [
      'Volume −30%, no sprints. Target cut from 460 to 320 AU.',
      'High soreness after Tuesday. Speed block capped at 4 reps.',
      'Hamstring return to play, 30 individual minutes. Estimated return in 18 days.',
    ],
    links: [{ label: 'See load planning', href: '/en/features/training-load/' }],
  },
  live: {
    label: 'Live session',
    title: 'Track the load during the session, block by block.',
    body: 'Tick attendance pitch-side. The load builds up block by block, and the gap to the plan shows while you can still act.',
    badge: 'LIVE',
    session: 'Thursday session · intensity block',
    meta: '17 present · estimated 445 AU · target 460',
    blocks: [
      { t: '12 MIN · 48 AU', label: 'Warm-up + activation' },
      { t: 'IN PROGRESS · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 AU', label: 'Speed, flying sprints' },
      { t: '14 MIN · 87 AU', label: 'Small-sided game + cool-down' },
    ],
    rowsAria: 'Cumulative load per player, as a share of target',
    alert: ' reaches 92% of his target by block 2. Pull him from the speed block?',
    primary: 'Pull out',
    secondary: 'Keep in',
    links: [{ label: 'See the live session', href: '/en/features/live-session/' }],
  },
  playerApp: {
    label: 'Player app',
    title: 'Your players answer in twenty seconds.',
    body: 'The app asks for three things at the right moment: wellness on waking, RPE after the session, the day’s workout. The reminder goes out on its own.',
    facts: [
      { n: '20 s', body: 'Wellness questionnaire on waking, on mobile.' },
      { n: '1 tap', body: 'Post-session RPE, notification included.' },
      { n: '100', body: 'players can connect their WHOOP to the check-in.' },
      { n: '0 apps', body: 'needed to answer: a link is enough.' },
    ],
    partnersAria: 'Compatible systems',
    partnersNote: 'Brands named for compatibility only.',
    whoop: { recovery: 'recovery', hrv: 'HRV' },
    phone: {
      time: '7:42',
      greeting: 'Hello, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Morning wellness',
        badge: '20 s',
        rows: [
          { label: 'Sleep', value: 4 },
          { label: 'Fatigue', value: 3 },
          { label: 'Soreness', value: 4 },
        ],
        submit: 'Send',
      },
      rpe: { title: 'RPE · yesterday’s session', value: '7' },
      workout: { title: 'Today’s workout · prevention', meta: '3 exercises · 12 min · videos included' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · today’s session',
      sub: 'Thursday session · 65 min',
      intensity: 'Perceived intensity',
      workoutTitle: 'Workout · prevention',
      workoutBody: 'Nordic curls 3×8 · Copenhagen 3×10 · 12 min · videos included',
    },
    links: [{ label: 'See the player app', href: '/en/features/player-app/' }],
  },
  assistant: {
    label: 'Assistant & reports',
    title: 'Query all your data in one question.',
    body: 'The assistant reads load, wellness, GPS and the medical room together. Every answer cites its sources, and every chart pins to your dashboards.',
    initials: 'SC',
    question: 'Compare this match’s metrics with the previous one.',
    answer: {
      intro: 'From the GPS exports of matches MD14 and MD13: ',
      strong: 'HSR +9% and sprints +21% for near-stable distance.',
      outro: ' Intensity is rising with no extra load cost.',
    },
    metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'LOAD'],
    sources: 'Sources · GPS match MD14 · GPS match MD13',
    legend: ['MD13', 'MD14'],
    pin: 'Pin to dashboard',
    refine: 'Refine',
    report: [
      { label: 'Report, built for you', body: 'The report builds itself: load 2% under plan, readiness trending up.' },
      { label: 'Shared with 4 members', body: 'Head coach, physio and assistants read the same data, each with their own rights.' },
      { label: 'Into the call-up', body: 'Availability pushed to the next match: 15 fit, 2 to monitor, 1 unavailable.' },
    ],
    links: [
      { label: 'See reports', href: '/en/features/reports/' },
      { label: 'See the S&C coaches page', href: '/en/sc-coaches/' },
    ],
  },
  pricing: {
    label: 'Pricing',
    title: 'Start for free, cross your GPS on Semi-Pro.',
    body: 'Every new account starts with 30 days on Semi-Pro, no card. When they end, it moves back to Free and you keep everything you produced.',
    featuredCta: 'Try 30 days',
    line: 'Semi-Pro, import your GPS. Pro, connect your GPS.',
    compare: 'Compare the four tiers line by line',
  },
  faq: {
    label: 'FAQ',
    title: 'The questions staffs ask.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'How do I import my GPS data?',
        a: 'Via CSV export, from Catapult, STATSports or any other system. Column mapping is remembered on the first import, and later ones take a few seconds.',
      },
      {
        q: 'Who keeps control of the team space?',
        a: 'You do. You create the space, invite the staff and define each person’s rights, with no club validation.',
      },
      {
        q: 'How long does setup take?',
        a: 'A few minutes: create the space, add your players, import your first session. History builds up over the weeks.',
      },
      {
        q: 'Why is the Free plan free?',
        a: 'Because a coach must be able to structure their work without asking for budget. Free covers one team and unlimited players, for ever.',
      },
      {
        q: 'How do I get the head coach on board?',
        a: 'Start with your own data, then send the staff dossier. The head coach reads real availability in the call-up.',
      },
      {
        q: 'Another question?',
        a: 'Write to hello@strivn.net. We answer ourselves, usually within the day.',
      },
    ],
  },
  finalCta: {
    title: 'Create your space and import your first session.',
    body: 'The first 30 days are on Semi-Pro, GPS import included. Your staff joins once they see your first reports.',
    primaryCta: 'Create my space for free',
    secondaryCta: 'Talk to Benoit',
    fine: ['No credit card', 'Your data stays yours'],
  },
  footer: {
    tagline: 'A professional staff’s monitoring, without a professional club’s budget.',
    body: 'STRIVN brings performance monitoring and team logistics together in one space shared by the staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/en/solutions/' },
          { label: 'Features', href: '/en/features/' },
          { label: 'Pricing', href: '/en/pricing/' },
          { label: 'FAQ', href: '/en/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'S&C coaches', href: '/en/sc-coaches/' },
        ],
      },
      {
        title: 'RESOURCES',
        links: [
          { label: 'Support', href: '/en/support/' },
          { label: 'Privacy', href: '/en/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Free for one team, all season',
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: HomeContent = {
  meta: {
    title: 'STRIVN | Het besturingssysteem van de performance staff',
    description:
      'GPS-import, wellness, belasting en planning in één tool. De AI leest de groepsdata en geeft aan wie u moet ontzien. Gratis voor één team, gedeeld door de hele staf.',
  },
  pct: '%',
  status: { ready: 'Klaar', watch: 'Opvolgen', risk: 'Ontlasten', wait: 'Protocol', importing: 'Import' },
  hero: {
    eyebrow: 'Voor de fysieke trainer en de head of performance',
    titleMuted: 'Het besturingssysteem',
    titleMain: 'van de performance staff.',
    sub: 'U hebt uw GPS al betaald. Importeer de export, STRIVN kruist die met RPE, wellness en het plan, en zegt u dan wie u moet ontzien.',
    primaryCta: 'Gratis beginnen',
    secondaryCta: 'Praat met Benoit',
    fine: ['30 dagen Semi-Pro inbegrepen', 'Zonder kaart', 'Zonder goedkeuring van de club'],
    panel: {
      aria: 'Voorbeeld: de GPS-export van gisteren wordt de lezing van vanochtend',
      cols: ['Speler', 'HSR m', 'RPE', 'Slaap', 'ACWR', 'Lezing'],
      read: 'LEZING',
      busy: 'KRUISING',
      busyValue: 'BEZIG',
      proposed: 'Voorgesteld',
      proposal: ': derde week boven de drempel. Volume −30% op donderdag, zonder sprints.',
      sources: 'Bronnen · GPS dinsdag · RPE · wellness 16/18 · plan W12',
    },
  },
  proof: {
    aria: 'Wie STRIVN gebruikt',
    stat: '50+',
    line: 'teams draaien hun seizoen op STRIVN, van regionaal tot professioneel.',
    crestsAria: 'Clubs die STRIVN gebruiken',
    method: 'Methodologie',
  },
  import: {
    label: 'GPS-import',
    title: 'Importeer de GPS-export, welke sensor ook.',
    body: 'Zet de CSV van Catapult, STATSports of een ander systeem neer. De kolommen worden bij de eerste import herkend en voor de volgende onthouden.',
    sheet: {
      aria: 'Vooraf: de kruistabel',
      edited: 'Bewerkt door 3 personen',
      cols: ['Speler', 'HSR', 'RPE', 'Slaap', 'AU 7 d', 'ACWR'],
    },
    mapping: {
      label: 'Herkende kolommen',
      to: ['Totale afstand', 'Hoge-intensiteitsloop', 'Sprints', 'Externe belasting'],
      done: '18 spelers herkend · gekoppeld aan “Training dinsdag · intensiteitsblok”',
    },
    facts: [
      { n: '4', body: 'bronnen gekruist op hetzelfde tijdslot: GPS, RPE, wellness en plan.' },
      { n: '18', body: 'spelers vanaf de import aan de kalender gekoppeld, één voor één.' },
      { n: '7 / 28', body: 'dagen venster voor de ACWR, elke nacht herberekend.' },
      { n: '1', body: 'versie van de data, gedeeld door de hele staf.' },
    ],
    links: [{ label: 'Bekijk de GPS-import', href: '/nl/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Weet wie fit is vóór de training.',
    body: 'Spelers beantwoorden de check-in bij het opstaan. Elke beslissing toont de data waarop ze steunt, zodat de staf ze in één beweging bevestigt.',
    kpis: [
      { label: 'Readiness', value: '82%' },
      { label: 'Belasting 7 d', value: '2 340 AU' },
      { label: 'ACWR groep', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alerts', value: '3' },
    ],
    rosterAria: 'Readiness per speler',
    whyTitle: 'Waarom L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 d', 'Weken boven de drempel', 'Opgegeven slaap', 'HSR dinsdag vs profiel', 'RPE training dinsdag'],
    proposal: 'Donderdag: volume −30%, geen snelheidsblok.',
    apply: 'Toepassen',
    edit: 'Wijzigen',
    links: [{ label: 'Bekijk de check-in', href: '/nl/features/check-in/' }],
  },
  plan: {
    label: 'Belastingsplanning',
    title: 'Plan de belasting in AU, training per training.',
    body: 'Leg voor elke training een doel vast. STRIVN vergelijkt met de werkelijke belasting, berekent ACWR en monotonie en meldt elke afwijking per speler.',
    chartLabel: 'Microcyclus W12 · wedstrijd zondag',
    legendTarget: 'Doel',
    legendActual: 'Werkelijk',
    today: 'VANDAAG',
    days: ['MA', 'DI', 'WO', 'DO', 'VR', 'ZA'],
    match: 'MATCH',
    chartAria: 'Doel- en werkelijke belasting per dag, in AU. Maandag 180 en 170, dinsdag 520 en 548, woensdag 380 en 372, donderdag 460 lopend, vrijdag 240, zaterdag 120, zondag wedstrijd 620.',
    adjustLabel: 'Individuele aanpassingen · donderdag',
    adjustments: [
      'Volume −30%, geen sprints. Doel verlaagd van 460 naar 320 AU.',
      'Veel spierpijn na dinsdag. Snelheidsblok beperkt tot 4 herhalingen.',
      'Revalidatie hamstring, 30 minuten individueel. Verwachte terugkeer over 18 dagen.',
    ],
    links: [{ label: 'Bekijk de belastingsplanning', href: '/nl/features/training-load/' }],
  },
  live: {
    label: 'Live training',
    title: 'Volg de belasting tijdens de training, blok per blok.',
    body: 'Vink de aanwezigheid af langs het veld. De belasting loopt blok per blok op, en de afwijking van het plan verschijnt terwijl u nog kunt bijsturen.',
    badge: 'LIVE',
    session: 'Training donderdag · intensiteitsblok',
    meta: '17 aanwezig · geschat 445 AU · doel 460',
    blocks: [
      { t: '12 MIN · 48 AU', label: 'Opwarming + activatie' },
      { t: 'BEZIG · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 AU', label: 'Snelheid, vliegende sprints' },
      { t: '14 MIN · 87 AU', label: 'Klein spel + cooling-down' },
    ],
    rowsAria: 'Cumulatieve belasting per speler, als deel van het doel',
    alert: ' zit al in blok 2 op 92% van zijn doel. Hem uit het snelheidsblok halen?',
    primary: 'Eruit halen',
    secondary: 'Behouden',
    links: [{ label: 'Bekijk de live training', href: '/nl/features/live-session/' }],
  },
  playerApp: {
    label: 'Spelers-app',
    title: 'Uw spelers antwoorden in twintig seconden.',
    body: 'De app vraagt drie dingen op het juiste moment: wellness bij het opstaan, RPE na de training, de workout van de dag. De herinnering vertrekt vanzelf.',
    facts: [
      { n: '20 s', body: 'Wellnessvragenlijst bij het opstaan, op mobiel.' },
      { n: '1 tik', body: 'RPE na de training, notificatie inbegrepen.' },
      { n: '100', body: 'spelers kunnen hun WHOOP aan de check-in koppelen.' },
      { n: '0 apps', body: 'nodig om te antwoorden: een link volstaat.' },
    ],
    partnersAria: 'Compatibele systemen',
    partnersNote: 'Merken enkel vermeld ter compatibiliteit.',
    whoop: { recovery: 'herstel', hrv: 'HRV' },
    phone: {
      time: '7:42',
      greeting: 'Hallo, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness van vanochtend',
        badge: '20 s',
        rows: [
          { label: 'Slaap', value: 4 },
          { label: 'Vermoeidheid', value: 3 },
          { label: 'Spierpijn', value: 4 },
        ],
        submit: 'Versturen',
      },
      rpe: { title: 'RPE · training van gisteren', value: '7' },
      workout: { title: 'Workout van vandaag · preventie', meta: '3 oefeningen · 12 min · video’s inbegrepen' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · training van vandaag',
      sub: 'Training donderdag · 65 min',
      intensity: 'Ervaren intensiteit',
      workoutTitle: 'Workout · preventie',
      workoutBody: 'Nordic curls 3×8 · Copenhagen 3×10 · 12 min · video’s inbegrepen',
    },
    links: [{ label: 'Bekijk de spelers-app', href: '/nl/features/player-app/' }],
  },
  assistant: {
    label: 'Assistent & rapporten',
    title: 'Bevraag al uw data in één vraag.',
    body: 'De assistent leest belasting, wellness, GPS en de medische ruimte samen. Elk antwoord vermeldt zijn bronnen, en elke grafiek pint u op uw dashboards.',
    initials: 'FT',
    question: 'Vergelijk de metrics van deze wedstrijd met de vorige.',
    answer: {
      intro: 'Op basis van de GPS-exports van wedstrijden S14 en S13: ',
      strong: 'HSR +9% en sprints +21% bij een quasi stabiele afstand.',
      outro: ' De intensiteit stijgt zonder extra belastingskost.',
    },
    metrics: ['AFSTAND', 'HSR', 'SPRINTS', 'BELASTING'],
    sources: 'Bronnen · GPS wedstrijd S14 · GPS wedstrijd S13',
    legend: ['S13', 'S14'],
    pin: 'Vastpinnen op dashboard',
    refine: 'Verfijnen',
    report: [
      { label: 'Rapport, vanzelf opgesteld', body: 'Het rapport maakt zichzelf aan: belasting 2% onder het plan, readiness in stijgende lijn.' },
      { label: 'Gedeeld met 4 leden', body: 'Hoofdcoach, kinesist en assistenten lezen dezelfde data, elk met eigen rechten.' },
      { label: 'Naar de selectie', body: 'Beschikbaarheid doorgestuurd naar de volgende wedstrijd: 15 fit, 2 op te volgen, 1 onbeschikbaar.' },
    ],
    links: [
      { label: 'Bekijk de rapporten', href: '/nl/features/reports/' },
      { label: 'Bekijk de pagina voor fysieke trainers', href: '/nl/sc-coaches/' },
    ],
  },
  pricing: {
    label: 'Prijzen',
    title: 'Begin gratis, kruis uw GPS met Semi-Pro.',
    body: 'Elk nieuw account start met 30 dagen Semi-Pro, zonder kaart. Daarna gaat het terug naar Free en behoudt u alles wat u hebt opgebouwd.',
    featuredCta: '30 dagen proberen',
    line: 'Semi-Pro, importeer uw GPS. Pro, verbind uw GPS.',
    compare: 'Vergelijk de vier niveaus regel per regel',
  },
  faq: {
    label: 'FAQ',
    title: 'De vragen die staffen stellen.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Hoe importeer ik mijn GPS-data?',
        a: 'Via CSV-export, uit Catapult, STATSports of eender welk ander systeem. De kolomtoewijzing wordt bij de eerste import onthouden, en de volgende duren enkele seconden.',
      },
      {
        q: 'Wie houdt de controle over de teamomgeving?',
        a: 'U. U maakt de omgeving aan, nodigt de staf uit en bepaalt ieders rechten, zonder validatie van de club.',
      },
      {
        q: 'Hoelang duurt de opstart?',
        a: 'Enkele minuten: maak de omgeving aan, voeg uw spelers toe, importeer uw eerste training. De historiek bouwt zich doorheen de weken op.',
      },
      {
        q: 'Waarom is het Free-plan gratis?',
        a: 'Omdat een coach zijn werk moet kunnen structureren zonder een budget aan te vragen. Free dekt één team en spelers zonder plafond, voor altijd.',
      },
      {
        q: 'Hoe krijg ik de hoofdcoach mee?',
        a: 'Begin met uw eigen data en stuur daarna het stafdossier. De hoofdcoach leest de werkelijke beschikbaarheid in de selectie.',
      },
      {
        q: 'Nog een vraag?',
        a: 'Schrijf naar hello@strivn.net. Wij antwoorden zelf, meestal binnen de dag.',
      },
    ],
  },
  finalCta: {
    title: 'Maak uw omgeving aan en importeer uw eerste training.',
    body: 'De eerste 30 dagen zitten op Semi-Pro, GPS-import inbegrepen. Uw staf sluit aan zodra ze uw eerste rapporten ziet.',
    primaryCta: 'Mijn omgeving gratis aanmaken',
    secondaryCta: 'Praat met Benoit',
    fine: ['Zonder kredietkaart', 'Uw data blijft van u'],
  },
  footer: {
    tagline: 'De monitoring van een professionele staf, zonder het budget van een profclub.',
    body: 'STRIVN verenigt prestatiemonitoring en teamorganisatie in één omgeving, gedeeld door de staf.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/nl/solutions/' },
          { label: 'Functies', href: '/nl/features/' },
          { label: 'Prijzen', href: '/nl/pricing/' },
          { label: 'FAQ', href: '/nl/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'OPLOSSINGEN',
        links: [
          { label: 'Fysieke trainers', href: '/nl/sc-coaches/' },
        ],
      },
      {
        title: 'HULPBRONNEN',
        links: [
          { label: 'Support', href: '/nl/support/' },
          { label: 'Privacy', href: '/nl/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratis voor één team, het hele seizoen',
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: HomeContent = {
  meta: {
    title: 'STRIVN | Das Betriebssystem für den Performance-Staff',
    description:
      'GPS-Import, Wellness, Belastung und Planung in einem Tool. Die KI liest die Teamdaten und sagt Ihnen, wen Sie schonen sollten. Kostenlos für ein Team, geteilt vom gesamten Staff.',
  },
  pct: '%',
  status: { ready: 'Bereit', watch: 'Beobachten', risk: 'Entlasten', wait: 'Protokoll', importing: 'Import' },
  hero: {
    eyebrow: 'Für Athletiktrainer und Head of Performance',
    titleMuted: 'Das Betriebssystem',
    titleMain: 'für den Performance-Staff.',
    sub: 'Ihr GPS haben Sie bereits bezahlt. Importieren Sie den Export, STRIVN gleicht ihn mit RPE, Wellness und Plan ab und sagt Ihnen dann, wen Sie entlasten sollten.',
    primaryCta: 'Kostenlos starten',
    secondaryCta: 'Mit Benoit sprechen',
    fine: ['30 Tage Semi-Pro inklusive', 'Ohne Karte', 'Ohne Vereinsfreigabe'],
    panel: {
      aria: 'Beispiel: Der GPS-Export von gestern wird zur Lesart von heute Morgen',
      cols: ['Spieler', 'HSR m', 'RPE', 'Schlaf', 'ACWR', 'Lesart'],
      read: 'LESART',
      busy: 'ABGLEICH',
      busyValue: 'LÄUFT',
      proposed: 'Vorschlag',
      proposal: ': dritte Woche über dem Schwellenwert. Volumen −30% am Donnerstag, ohne Sprints.',
      sources: 'Quellen · GPS Dienstag · RPE · Wellness 16/18 · Plan W12',
    },
  },
  proof: {
    aria: 'Wer STRIVN nutzt',
    stat: '50+',
    line: 'Teams organisieren ihre Saison mit STRIVN, von regional bis professionell.',
    crestsAria: 'Vereine, die STRIVN nutzen',
    method: 'Methodik',
  },
  import: {
    label: 'GPS-Import',
    title: 'Importieren Sie den GPS-Export, egal von welchem Sensor.',
    body: 'Legen Sie die CSV von Catapult, STATSports oder einem anderen System ab. Die Spalten werden beim ersten Import erkannt und für alle weiteren gespeichert.',
    sheet: {
      aria: 'Vorher: die Abgleichstabelle',
      edited: 'Bearbeitet von 3 Personen',
      cols: ['Spieler', 'HSR', 'RPE', 'Schlaf', 'AU 7 T', 'ACWR'],
    },
    mapping: {
      label: 'Erkannte Spalten',
      to: ['Gesamtdistanz', 'Hochintensive Läufe', 'Sprints', 'Externe Belastung'],
      done: '18 Spieler erkannt · verknüpft mit „Einheit Dienstag · Intensitätsblock“',
    },
    facts: [
      { n: '4', body: 'Quellen im selben Zeitfenster abgeglichen: GPS, RPE, Wellness und Plan.' },
      { n: '18', body: 'Spieler schon beim Import dem Kalender zugeordnet, einer nach dem anderen.' },
      { n: '7 / 28', body: 'Tage Fenster für den ACWR, jede Nacht neu berechnet.' },
      { n: '1', body: 'Version der Daten, geteilt vom gesamten Staff.' },
    ],
    links: [{ label: 'GPS-Import ansehen', href: '/de/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Wissen Sie vor der Einheit, wer fit ist.',
    body: 'Die Spieler beantworten den Check-in beim Aufwachen. Jede Entscheidung zeigt die Daten, auf denen sie beruht, damit der Staff sie mit einem Klick bestätigt.',
    kpis: [
      { label: 'Readiness', value: '82%' },
      { label: 'Last 7 T', value: '2 340 AU' },
      { label: 'ACWR Gruppe', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alarme', value: '3' },
    ],
    rosterAria: 'Readiness pro Spieler',
    whyTitle: 'Warum L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 T', 'Wochen über dem Schwellenwert', 'Angegebener Schlaf', 'HSR Dienstag vs. Profil', 'RPE Einheit Dienstag'],
    proposal: 'Donnerstag: Volumen −30%, kein Schnelligkeitsblock.',
    apply: 'Übernehmen',
    edit: 'Ändern',
    links: [{ label: 'Check-in ansehen', href: '/de/features/check-in/' }],
  },
  plan: {
    label: 'Belastungsplanung',
    title: 'Planen Sie die Belastung in AU, Einheit für Einheit.',
    body: 'Legen Sie für jede Einheit ein Ziel fest. STRIVN vergleicht es mit der Ist-Belastung, berechnet ACWR und Monotonie und meldet jede Abweichung Spieler für Spieler.',
    chartLabel: 'Mikrozyklus W12 · Spiel am Sonntag',
    legendTarget: 'Ziel',
    legendActual: 'Ist',
    today: 'HEUTE',
    days: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA'],
    match: 'SPIEL',
    chartAria: 'Ziel- und Ist-Belastung pro Tag, in AU. Montag 180 und 170, Dienstag 520 und 548, Mittwoch 380 und 372, Donnerstag 460 laufend, Freitag 240, Samstag 120, Sonntag Spiel 620.',
    adjustLabel: 'Individuelle Anpassungen · Donnerstag',
    adjustments: [
      'Volumen −30%, keine Sprints. Ziel von 460 auf 320 AU gesenkt.',
      'Starker Muskelkater nach Dienstag. Schnelligkeitsblock auf 4 Wiederholungen begrenzt.',
      'Ischio-Reha, 30 Minuten individuell. Voraussichtliche Rückkehr in 18 Tagen.',
    ],
    links: [{ label: 'Belastungsplanung ansehen', href: '/de/features/training-load/' }],
  },
  live: {
    label: 'Live-Einheit',
    title: 'Verfolgen Sie die Belastung während der Einheit, Block für Block.',
    body: 'Haken Sie die Anwesenheit am Spielfeldrand ab. Die Belastung summiert sich Block für Block, und die Abweichung zum Plan erscheint, solange Sie noch eingreifen können.',
    badge: 'LIVE',
    session: 'Einheit Donnerstag · Intensitätsblock',
    meta: '17 anwesend · geschätzt 445 AU · Ziel 460',
    blocks: [
      { t: '12 MIN · 48 AU', label: 'Aufwärmen + Aktivierung' },
      { t: 'LÄUFT · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 AU', label: 'Schnelligkeit, fliegende Sprints' },
      { t: '14 MIN · 87 AU', label: 'Kleinfeldspiel + Cool-down' },
    ],
    rowsAria: 'Kumulierte Belastung pro Spieler, als Anteil am Ziel',
    alert: ' erreicht schon in Block 2 92% seines Ziels. Aus dem Schnelligkeitsblock nehmen?',
    primary: 'Rausnehmen',
    secondary: 'Drinlassen',
    links: [{ label: 'Live-Einheit ansehen', href: '/de/features/live-session/' }],
  },
  playerApp: {
    label: 'Spieler-App',
    title: 'Ihre Spieler antworten in zwanzig Sekunden.',
    body: 'Die App fragt drei Dinge im richtigen Moment ab: Wellness beim Aufwachen, RPE nach der Einheit, das Workout des Tages. Die Erinnerung geht von selbst raus.',
    facts: [
      { n: '20 s', body: 'Wellness-Fragebogen beim Aufwachen, auf dem Handy.' },
      { n: '1 Tipp', body: 'RPE nach der Einheit, Benachrichtigung inklusive.' },
      { n: '100', body: 'Spieler können ihr WHOOP mit dem Check-in verbinden.' },
      { n: '0 Apps', body: 'nötig zum Antworten: Ein Link genügt.' },
    ],
    partnersAria: 'Kompatible Systeme',
    partnersNote: 'Marken nur zur Angabe der Kompatibilität genannt.',
    whoop: { recovery: 'Regeneration', hrv: 'HRV' },
    phone: {
      time: '7:42',
      greeting: 'Hallo, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness am Morgen',
        badge: '20 s',
        rows: [
          { label: 'Schlaf', value: 4 },
          { label: 'Ermüdung', value: 3 },
          { label: 'Muskelkater', value: 4 },
        ],
        submit: 'Senden',
      },
      rpe: { title: 'RPE · Einheit von gestern', value: '7' },
      workout: { title: 'Workout des Tages · Prävention', meta: '3 Übungen · 12 min · Videos inklusive' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · Einheit von heute',
      sub: 'Einheit Donnerstag · 65 min',
      intensity: 'Empfundene Intensität',
      workoutTitle: 'Workout · Prävention',
      workoutBody: 'Nordic Curls 3×8 · Copenhagen 3×10 · 12 min · Videos inklusive',
    },
    links: [{ label: 'Spieler-App ansehen', href: '/de/features/player-app/' }],
  },
  assistant: {
    label: 'Assistent & Berichte',
    title: 'Befragen Sie alle Ihre Daten mit einer Frage.',
    body: 'Der Assistent liest Belastung, Wellness, GPS und Medizinbereich zusammen. Jede Antwort nennt ihre Quellen, und jedes Diagramm lässt sich an Ihre Dashboards pinnen.',
    initials: 'AT',
    question: 'Vergleiche die Metriken dieses Spiels mit dem vorherigen.',
    answer: {
      intro: 'Auf Basis der GPS-Exporte der Spiele S14 und S13: ',
      strong: 'HSR +9% und Sprints +21% bei nahezu stabiler Distanz.',
      outro: ' Die Intensität steigt ohne Mehrbelastung.',
    },
    metrics: ['DISTANZ', 'HSR', 'SPRINTS', 'LAST'],
    sources: 'Quellen · GPS Spiel S14 · GPS Spiel S13',
    legend: ['S13', 'S14'],
    pin: 'Ans Dashboard pinnen',
    refine: 'Verfeinern',
    report: [
      { label: 'Bericht, automatisch erstellt', body: 'Der Bericht erstellt sich selbst: Belastung 2% unter Plan, Readiness steigend.' },
      { label: 'Geteilt mit 4 Mitgliedern', body: 'Cheftrainer, Physio und Co-Trainer lesen dieselben Daten, jeder mit eigenen Rechten.' },
      { label: 'Ins Aufgebot', body: 'Verfügbarkeiten fürs nächste Spiel übertragen: 15 fit, 2 zu beobachten, 1 nicht verfügbar.' },
    ],
    links: [
      { label: 'Berichte ansehen', href: '/de/features/reports/' },
      { label: 'Zur Seite für Athletiktrainer', href: '/de/sc-coaches/' },
    ],
  },
  pricing: {
    label: 'Preise',
    title: 'Starten Sie kostenlos, gleichen Sie Ihr GPS im Semi-Pro ab.',
    body: 'Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Karte. Danach wechselt es zurück zu Free, und Sie behalten alles, was Sie erstellt haben.',
    featuredCta: '30 Tage testen',
    line: 'Mit Semi-Pro importieren Sie Ihr GPS, mit Pro verbinden Sie es.',
    compare: 'Alle vier Stufen Zeile für Zeile vergleichen',
  },
  faq: {
    label: 'FAQ',
    title: 'Die Fragen, die Staffs stellen.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Wie importiere ich meine GPS-Daten?',
        a: 'Per CSV-Export, aus Catapult, STATSports oder jedem anderen System. Die Spaltenzuordnung wird beim ersten Import gespeichert, und die folgenden dauern wenige Sekunden.',
      },
      {
        q: 'Wer behält die Kontrolle über den Teambereich?',
        a: 'Sie. Sie erstellen den Bereich, laden den Staff ein und legen die Rechte jedes Einzelnen fest, ohne Freigabe des Vereins.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Wenige Minuten: Bereich erstellen, Spieler hinzufügen, erste Einheit importieren. Die Historie baut sich über die Wochen auf.',
      },
      {
        q: 'Warum ist der Free-Plan kostenlos?',
        a: 'Weil ein Coach seine Arbeit strukturieren können muss, ohne ein Budget zu beantragen. Free deckt ein Team und Spieler ohne Obergrenze ab, für immer.',
      },
      {
        q: 'Wie gewinne ich den Cheftrainer?',
        a: 'Starten Sie mit Ihren eigenen Daten und schicken Sie dann das Staff-Dossier. Der Cheftrainer liest die reale Verfügbarkeit im Aufgebot.',
      },
      {
        q: 'Noch eine Frage?',
        a: 'Schreiben Sie an hello@strivn.net. Wir antworten selbst, meist noch am selben Tag.',
      },
    ],
  },
  finalCta: {
    title: 'Bereich erstellen und die erste Einheit importieren.',
    body: 'Die ersten 30 Tage laufen auf Semi-Pro, GPS-Import inklusive. Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.',
    primaryCta: 'Meinen Bereich kostenlos erstellen',
    secondaryCta: 'Mit Benoit sprechen',
    fine: ['Ohne Kreditkarte', 'Ihre Daten bleiben Ihre'],
  },
  footer: {
    tagline: 'Das Monitoring eines Profi-Staffs, ohne das Budget eines Profivereins.',
    body: 'STRIVN vereint Performance-Monitoring und Teamorganisation in einem Bereich, geteilt vom Staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUKT',
        links: [
          { label: 'Plattform', href: '/de/solutions/' },
          { label: 'Funktionen', href: '/de/features/' },
          { label: 'Preise', href: '/de/pricing/' },
          { label: 'FAQ', href: '/de/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'LÖSUNGEN',
        links: [
          { label: 'Athletiktrainer', href: '/de/sc-coaches/' },
        ],
      },
      {
        title: 'RESSOURCEN',
        links: [
          { label: 'Support', href: '/de/support/' },
          { label: 'Datenschutz', href: '/de/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Kostenlos für ein Team, die ganze Saison',
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: HomeContent = {
  meta: {
    title: 'STRIVN | O sistema operativo do staff de performance',
    description:
      'Importação GPS, wellness, carga e planeamento numa só ferramenta. A IA lê os dados do plantel e diz quem aliviar. Grátis para uma equipa, partilhado por todo o staff.',
  },
  pct: '%',
  status: { ready: 'Apto', watch: 'Vigiar', risk: 'Aliviar', wait: 'Protocolo', importing: 'Importação' },
  hero: {
    eyebrow: 'Para o preparador físico e o head of performance',
    titleMuted: 'O sistema operativo',
    titleMain: 'do staff de performance.',
    sub: 'Já pagou o seu GPS. Importe a exportação, o STRIVN cruza-a com o RPE, o wellness e o plano, e depois diz-lhe quem aliviar.',
    primaryCta: 'Começar gratuitamente',
    secondaryCta: 'Falar com o Benoit',
    fine: ['30 dias de Semi-Pro oferecidos', 'Sem cartão', 'Sem validação do clube'],
    panel: {
      aria: 'Exemplo: a exportação GPS de ontem torna-se a leitura desta manhã',
      cols: ['Jogador', 'HSR m', 'RPE', 'Sono', 'ACWR', 'Leitura'],
      read: 'LEITURA',
      busy: 'CRUZAMENTO',
      busyValue: 'EM CURSO',
      proposed: 'Proposto',
      proposal: ': 3.ª semana acima do limiar. Volume −30% na quinta, sem sprints.',
      sources: 'Fontes · GPS terça · RPE · wellness 16/18 · plano S12',
    },
  },
  proof: {
    aria: 'Quem usa o STRIVN',
    stat: '50+',
    line: 'equipas gerem a sua época no STRIVN, do regional ao profissional.',
    crestsAria: 'Clubes que usam o STRIVN',
    method: 'Metodologia',
  },
  import: {
    label: 'Importação GPS',
    title: 'Importe a exportação GPS, seja qual for o sensor.',
    body: 'Carregue o CSV do Catapult, do STATSports ou de outro sistema. As colunas são reconhecidas na primeira importação e memorizadas para as seguintes.',
    sheet: {
      aria: 'Antes: a folha de cruzamento',
      edited: 'Editado por 3 pessoas',
      cols: ['Jogador', 'HSR', 'RPE', 'Sono', 'UA 7 d', 'ACWR'],
    },
    mapping: {
      label: 'Colunas reconhecidas',
      to: ['Distância total', 'Corrida de alta intensidade', 'Sprints', 'Carga externa'],
      done: '18 jogadores reconhecidos · ligado a «Sessão de terça · bloco de intensidade»',
    },
    facts: [
      { n: '4', body: 'fontes cruzadas no mesmo horário: GPS, RPE, wellness e plano.' },
      { n: '18', body: 'jogadores ligados ao calendário, um a um, logo na importação.' },
      { n: '7 / 28', body: 'dias de janela para o ACWR, recalculado todas as noites.' },
      { n: '1', body: 'versão dos dados, partilhada por todo o staff.' },
    ],
    links: [{ label: 'Ver a importação GPS', href: '/pt/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Saiba quem está apto antes da sessão.',
    body: 'Os jogadores respondem ao check-in ao acordar. Cada decisão mostra os dados que a justificam, para que o staff a valide num gesto.',
    kpis: [
      { label: 'Readiness', value: '82%' },
      { label: 'Carga 7 d', value: '2 340 UA' },
      { label: 'ACWR plantel', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alertas', value: '3' },
    ],
    rosterAria: 'Readiness por jogador',
    whyTitle: 'Porquê L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 d', 'Semanas acima do limiar', 'Sono declarado', 'HSR terça vs perfil', 'RPE sessão de terça'],
    proposal: 'Quinta: volume −30%, sem bloco de velocidade.',
    apply: 'Aplicar',
    edit: 'Alterar',
    links: [{ label: 'Ver o check-in', href: '/pt/features/check-in/' }],
  },
  plan: {
    label: 'Planeamento de carga',
    title: 'Planeie a carga em UA, sessão a sessão.',
    body: 'Fixe um alvo por sessão. O STRIVN compara-o com a carga realizada, calcula o ACWR e a monotonia e assinala cada desvio, jogador a jogador.',
    chartLabel: 'Microciclo S12 · jogo no domingo',
    legendTarget: 'Alvo',
    legendActual: 'Realizada',
    today: 'HOJE',
    days: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    match: 'JOGO',
    chartAria: 'Carga alvo e realizada por dia, em UA. Segunda 180 e 170, terça 520 e 548, quarta 380 e 372, quinta 460 em curso, sexta 240, sábado 120, domingo jogo 620.',
    adjustLabel: 'Ajustes individuais · quinta',
    adjustments: [
      'Volume −30%, sem sprints. Alvo reduzido de 460 para 320 UA.',
      'Dores musculares elevadas depois de terça. Bloco de velocidade limitado a 4 repetições.',
      'Reatletização dos isquiotibiais, 30 min individualizados. Regresso estimado em 18 dias.',
    ],
    links: [{ label: 'Ver o planeamento de carga', href: '/pt/features/training-load/' }],
  },
  live: {
    label: 'Sessão ao vivo',
    title: 'Acompanhe a carga durante a sessão, bloco a bloco.',
    body: 'Registe as presenças à beira do campo. A carga acumula-se bloco a bloco, e o desvio face ao plano aparece enquanto ainda pode agir.',
    badge: 'LIVE',
    session: 'Sessão de quinta · bloco de intensidade',
    meta: '17 presentes · estimada 445 UA · alvo 460',
    blocks: [
      { t: '12 MIN · 48 UA', label: 'Aquecimento + ativação' },
      { t: 'EM CURSO · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 UA', label: 'Velocidade, sprints lançados' },
      { t: '14 MIN · 87 UA', label: 'Jogo reduzido + retorno à calma' },
    ],
    rowsAria: 'Carga acumulada por jogador, em parte do alvo',
    alert: ' atinge 92% do alvo logo no bloco 2. Retirá-lo do bloco de velocidade?',
    primary: 'Retirar',
    secondary: 'Manter',
    links: [{ label: 'Ver a sessão em direto', href: '/pt/features/live-session/' }],
  },
  playerApp: {
    label: 'App do jogador',
    title: 'Os seus jogadores respondem em vinte segundos.',
    body: 'A app pede três coisas no momento certo: o wellness ao acordar, o RPE depois da sessão, o workout do dia. O lembrete parte sozinho.',
    facts: [
      { n: '20 s', body: 'Questionário wellness ao acordar, no telemóvel.' },
      { n: '1 gesto', body: 'RPE pós-sessão, notificação incluída.' },
      { n: '100', body: 'jogadores podem ligar o seu WHOOP ao check-in.' },
      { n: '0 apps', body: 'necessárias para responder: basta uma ligação.' },
    ],
    partnersAria: 'Sistemas compatíveis',
    partnersNote: 'Marcas citadas apenas a título de compatibilidade.',
    whoop: { recovery: 'recuperação', hrv: 'VFC' },
    phone: {
      time: '7:42',
      greeting: 'Olá, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness da manhã',
        badge: '20 s',
        rows: [
          { label: 'Sono', value: 4 },
          { label: 'Fadiga', value: 3 },
          { label: 'Dores', value: 4 },
        ],
        submit: 'Enviar',
      },
      rpe: { title: 'RPE · sessão de ontem', value: '7' },
      workout: { title: 'Workout de hoje · prevenção', meta: '3 exercícios · 12 min · vídeos incluídos' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · sessão de hoje',
      sub: 'Sessão de quinta · 65 min',
      intensity: 'Intensidade percebida',
      workoutTitle: 'Workout · prevenção',
      workoutBody: 'Nordic curls 3×8 · Copenhagen 3×10 · 12 min · vídeos incluídos',
    },
    links: [{ label: 'Ver a app do jogador', href: '/pt/features/player-app/' }],
  },
  assistant: {
    label: 'Assistente & relatórios',
    title: 'Interrogue todos os seus dados numa só pergunta.',
    body: 'O assistente lê a carga, o wellness, o GPS e o departamento médico em conjunto. Cada resposta cita as suas fontes, e cada gráfico fixa-se nos seus dashboards.',
    initials: 'PF',
    question: 'Compara as métricas deste jogo com o anterior.',
    answer: {
      intro: 'Nas exportações GPS dos jogos J14 e J13: ',
      strong: 'HSR +9% e sprints +21% para uma distância quase estável.',
      outro: ' A intensidade progride sem custo extra de carga.',
    },
    metrics: ['DISTÂNCIA', 'HSR', 'SPRINTS', 'CARGA'],
    sources: 'Fontes · GPS jogo J14 · GPS jogo J13',
    legend: ['J13', 'J14'],
    pin: 'Fixar no dashboard',
    refine: 'Afinar',
    report: [
      { label: 'Relatório gerado automaticamente', body: 'O relatório gera-se sozinho: carga 2% abaixo do plano, readiness a subir.' },
      { label: 'Partilhado com 4 membros', body: 'Treinador principal, fisioterapeuta e adjuntos leem os mesmos dados, cada um com os seus direitos.' },
      { label: 'Para a convocatória', body: 'Disponibilidades enviadas para o próximo jogo: 15 aptos, 2 a vigiar, 1 indisponível.' },
    ],
    links: [
      { label: 'Ver os relatórios', href: '/pt/features/reports/' },
      { label: 'Ver a página dos preparadores físicos', href: '/pt/sc-coaches/' },
    ],
  },
  pricing: {
    label: 'Preços',
    title: 'Comece gratuitamente, cruze o GPS no Semi-Pro.',
    body: 'Cada nova conta começa com 30 dias de Semi-Pro, sem cartão. No fim, volta ao plano gratuito e mantém tudo o que produziu.',
    featuredCta: 'Experimentar 30 dias',
    line: 'Semi-Pro, importe o seu GPS. Pro, ligue o seu GPS.',
    compare: 'Comparar os quatro níveis linha a linha',
  },
  faq: {
    label: 'FAQ',
    title: 'As perguntas que os staffs fazem.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Como importo os meus dados GPS?',
        a: 'Por exportação CSV, a partir do Catapult, do STATSports ou de qualquer outro sistema. A correspondência de colunas fica memorizada na primeira importação, e as seguintes demoram segundos.',
      },
      {
        q: 'Quem mantém o controlo do espaço de equipa?',
        a: 'Você. Cria o espaço, convida o staff e define os direitos de cada um, sem validação do clube.',
      },
      {
        q: 'Qual é o prazo de implementação?',
        a: 'Alguns minutos: crie o espaço, adicione os seus jogadores, importe a primeira sessão. O histórico constrói-se ao longo das semanas.',
      },
      {
        q: 'Porque é que o plano Free é gratuito?',
        a: 'Porque um treinador tem de poder estruturar o seu trabalho sem pedir orçamento. O Free cobre uma equipa e jogadores sem limite, para sempre.',
      },
      {
        q: 'Como obter a adesão do treinador principal?',
        a: 'Comece com os seus próprios dados e depois envie o dossiê de staff. O treinador principal lê a disponibilidade real na convocatória.',
      },
      {
        q: 'Outra pergunta?',
        a: 'Escreva para hello@strivn.net. Respondemos nós próprios, em geral no mesmo dia.',
      },
    ],
  },
  finalCta: {
    title: 'Crie o seu espaço e importe a sua primeira sessão.',
    body: 'Os primeiros 30 dias são em Semi-Pro, importação GPS incluída. O seu staff junta-se quando vir os seus primeiros relatórios.',
    primaryCta: 'Criar o meu espaço gratuitamente',
    secondaryCta: 'Falar com o Benoit',
    fine: ['Sem cartão de crédito', 'Os seus dados são seus'],
  },
  footer: {
    tagline: 'A monitorização de um staff profissional, sem o orçamento de um clube profissional.',
    body: 'O STRIVN reúne a monitorização da performance e a gestão de equipa num único espaço partilhado pelo staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUTO',
        links: [
          { label: 'Plataforma', href: '/pt/solutions/' },
          { label: 'Funcionalidades', href: '/pt/features/' },
          { label: 'Preços', href: '/pt/pricing/' },
          { label: 'FAQ', href: '/pt/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUÇÕES',
        links: [
          { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          { label: 'Suporte', href: '/pt/support/' },
          { label: 'Privacidade', href: '/pt/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Grátis para uma equipa, toda a época',
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: HomeContent = {
  meta: {
    title: 'STRIVN | El sistema operativo del staff de rendimiento',
    description:
      'Importación GPS, wellness, carga y planificación en una sola herramienta. La IA lee los datos de la plantilla y señala a quién aliviar. Gratis para un equipo, compartido por todo el staff.',
  },
  pct: '%',
  status: { ready: 'Apto', watch: 'Vigilar', risk: 'Aliviar', wait: 'Protocolo', importing: 'Importación' },
  hero: {
    eyebrow: 'Para el preparador físico y el head of performance',
    titleMuted: 'El sistema operativo',
    titleMain: 'del staff de rendimiento.',
    sub: 'Ya pagó su GPS. Importe la exportación, STRIVN la cruza con el RPE, el wellness y el plan, y luego le dice a quién aliviar.',
    primaryCta: 'Empezar gratis',
    secondaryCta: 'Hablar con Benoit',
    fine: ['30 días de Semi-Pro incluidos', 'Sin tarjeta', 'Sin validación del club'],
    panel: {
      aria: 'Ejemplo: la exportación GPS de ayer se convierte en la lectura de esta mañana',
      cols: ['Jugador', 'HSR m', 'RPE', 'Sueño', 'ACWR', 'Lectura'],
      read: 'LECTURA',
      busy: 'CRUCE',
      busyValue: 'EN CURSO',
      proposed: 'Propuesto',
      proposal: ': 3.ª semana por encima del umbral. Volumen −30% el jueves, sin sprints.',
      sources: 'Fuentes · GPS martes · RPE · wellness 16/18 · plan S12',
    },
  },
  proof: {
    aria: 'Quién usa STRIVN',
    stat: '50+',
    line: 'equipos gestionan su temporada en STRIVN, del regional al profesional.',
    crestsAria: 'Clubes que usan STRIVN',
    method: 'Metodología',
  },
  import: {
    label: 'Importación GPS',
    title: 'Importe la exportación GPS, sea cual sea el sensor.',
    body: 'Suba el CSV de Catapult, STATSports u otro sistema. Las columnas se reconocen en la primera importación y quedan memorizadas para las siguientes.',
    sheet: {
      aria: 'Antes: la hoja de cruce',
      edited: 'Modificado por 3 personas',
      cols: ['Jugador', 'HSR', 'RPE', 'Sueño', 'UA 7 d', 'ACWR'],
    },
    mapping: {
      label: 'Columnas reconocidas',
      to: ['Distancia total', 'Carrera de alta intensidad', 'Sprints', 'Carga externa'],
      done: '18 jugadores reconocidos · vinculado a «Sesión del martes · bloque de intensidad»',
    },
    facts: [
      { n: '4', body: 'fuentes cruzadas en la misma franja: GPS, RPE, wellness y plan.' },
      { n: '18', body: 'jugadores vinculados al calendario, uno a uno, desde la importación.' },
      { n: '7 / 28', body: 'días de ventana para el ACWR, recalculado cada noche.' },
      { n: '1', body: 'versión de los datos, compartida por todo el staff.' },
    ],
    links: [{ label: 'Ver la importación GPS', href: '/es/features/training-load/' }],
  },
  readiness: {
    label: 'Readiness',
    title: 'Sepa quién está apto antes de la sesión.',
    body: 'Los jugadores responden al check-in al despertar. Cada decisión muestra los datos que la justifican, para que el staff la valide en un gesto.',
    kpis: [
      { label: 'Readiness', value: '82%' },
      { label: 'Carga 7 d', value: '2 340 UA' },
      { label: 'ACWR grupo', value: '1.08' },
      { label: 'Wellness', value: '16 / 18' },
      { label: 'Alertas', value: '3' },
    ],
    rosterAria: 'Readiness por jugador',
    whyTitle: 'Por qué L. Moreau',
    whyScore: 'Readiness 58',
    evidence: ['ACWR 7 / 28 d', 'Semanas por encima del umbral', 'Sueño declarado', 'HSR martes vs perfil', 'RPE sesión del martes'],
    proposal: 'Jueves: volumen −30%, sin bloque de velocidad.',
    apply: 'Aplicar',
    edit: 'Modificar',
    links: [{ label: 'Ver el check-in', href: '/es/features/check-in/' }],
  },
  plan: {
    label: 'Planificación de carga',
    title: 'Planifique la carga en UA, sesión a sesión.',
    body: 'Fije un objetivo por sesión. STRIVN lo compara con lo realizado, calcula el ACWR y la monotonía y señala cada desvío jugador a jugador.',
    chartLabel: 'Microciclo S12 · partido el domingo',
    legendTarget: 'Objetivo',
    legendActual: 'Realizada',
    today: 'HOY',
    days: ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
    match: 'PARTIDO',
    chartAria: 'Carga objetivo y realizada por día, en UA. Lunes 180 y 170, martes 520 y 548, miércoles 380 y 372, jueves 460 en curso, viernes 240, sábado 120, domingo partido 620.',
    adjustLabel: 'Ajustes individuales · jueves',
    adjustments: [
      'Volumen −30%, sin sprints. Objetivo rebajado de 460 a 320 UA.',
      'Agujetas elevadas tras el martes. Bloque de velocidad limitado a 4 repeticiones.',
      'Readaptación de isquiotibiales, 30 min individualizados. Regreso estimado en 18 días.',
    ],
    links: [{ label: 'Ver la planificación de carga', href: '/es/features/training-load/' }],
  },
  live: {
    label: 'Sesión en directo',
    title: 'Siga la carga durante la sesión, bloque a bloque.',
    body: 'Registre la asistencia a pie de campo. La carga se acumula bloque a bloque, y el desvío respecto al plan aparece mientras todavía puede actuar.',
    badge: 'LIVE',
    session: 'Sesión del jueves · bloque de intensidad',
    meta: '17 presentes · estimada 445 UA · objetivo 460',
    blocks: [
      { t: '12 MIN · 48 UA', label: 'Calentamiento + activación' },
      { t: 'EN CURSO · 24 MIN', label: 'Pressing 8v8' },
      { t: '15 MIN · 124 UA', label: 'Velocidad, sprints lanzados' },
      { t: '14 MIN · 87 UA', label: 'Juego reducido + vuelta a la calma' },
    ],
    rowsAria: 'Carga acumulada por jugador, en parte del objetivo',
    alert: ' alcanza el 92% de su objetivo ya en el bloque 2. ¿Sacarlo del bloque de velocidad?',
    primary: 'Sacar',
    secondary: 'Mantener',
    links: [{ label: 'Ver la sesión en directo', href: '/es/features/live-session/' }],
  },
  playerApp: {
    label: 'App del jugador',
    title: 'Sus jugadores responden en veinte segundos.',
    body: 'La app pide tres cosas en el momento adecuado: el wellness al despertar, el RPE después de la sesión, el workout del día. El recordatorio sale solo.',
    facts: [
      { n: '20 s', body: 'Cuestionario wellness al despertar, en el móvil.' },
      { n: '1 gesto', body: 'RPE post-sesión, notificación incluida.' },
      { n: '100', body: 'jugadores pueden conectar su WHOOP al check-in.' },
      { n: '0 apps', body: 'necesarias para responder: basta un enlace.' },
    ],
    partnersAria: 'Sistemas compatibles',
    partnersNote: 'Marcas citadas solo a título de compatibilidad.',
    whoop: { recovery: 'recuperación', hrv: 'VFC' },
    phone: {
      time: '7:42',
      greeting: 'Hola, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness de la mañana',
        badge: '20 s',
        rows: [
          { label: 'Sueño', value: 4 },
          { label: 'Fatiga', value: 3 },
          { label: 'Agujetas', value: 4 },
        ],
        submit: 'Enviar',
      },
      rpe: { title: 'RPE · sesión de ayer', value: '7' },
      workout: { title: 'Workout de hoy · prevención', meta: '3 ejercicios · 12 min · vídeos incluidos' },
    },
    evening: {
      time: '20:12',
      title: 'RPE · sesión de hoy',
      sub: 'Sesión del jueves · 65 min',
      intensity: 'Intensidad percibida',
      workoutTitle: 'Workout · prevención',
      workoutBody: 'Nordic curls 3×8 · Copenhagen 3×10 · 12 min · vídeos incluidos',
    },
    links: [{ label: 'Ver la app del jugador', href: '/es/features/player-app/' }],
  },
  assistant: {
    label: 'Asistente e informes',
    title: 'Interrogue todos sus datos en una sola pregunta.',
    body: 'El asistente lee la carga, el wellness, el GPS y la enfermería en conjunto. Cada respuesta cita sus fuentes, y cada gráfico se fija a sus dashboards.',
    initials: 'PF',
    question: 'Compara las métricas de este partido con el anterior.',
    answer: {
      intro: 'Sobre las exportaciones GPS de los partidos J14 y J13: ',
      strong: 'HSR +9% y sprints +21% para una distancia casi estable.',
      outro: ' La intensidad progresa sin sobrecoste de carga.',
    },
    metrics: ['DISTANCIA', 'HSR', 'SPRINTS', 'CARGA'],
    sources: 'Fuentes · GPS partido J14 · GPS partido J13',
    legend: ['J13', 'J14'],
    pin: 'Fijar al dashboard',
    refine: 'Afinar',
    report: [
      { label: 'Informe generado automáticamente', body: 'El informe se genera solo: carga un 2% por debajo del plan, readiness al alza.' },
      { label: 'Compartido con 4 miembros', body: 'Primer entrenador, fisio y ayudantes leen los mismos datos, cada uno con sus derechos.' },
      { label: 'Hacia la convocatoria', body: 'Disponibilidades enviadas al próximo partido: 15 aptos, 2 a vigilar, 1 no disponible.' },
    ],
    links: [
      { label: 'Ver los informes', href: '/es/features/reports/' },
      { label: 'Ver la página de preparadores físicos', href: '/es/sc-coaches/' },
    ],
  },
  pricing: {
    label: 'Precios',
    title: 'Empiece gratis, cruce el GPS en Semi-Pro.',
    body: 'Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta. Al terminar, vuelve al plan gratuito y usted conserva todo lo que ha producido.',
    featuredCta: 'Probar 30 días',
    line: 'Semi-Pro, importe su GPS. Pro, conecte su GPS.',
    compare: 'Comparar los cuatro niveles línea a línea',
  },
  faq: {
    label: 'FAQ',
    title: 'Las preguntas que hacen los staffs.',
    email: 'hello@strivn.net',
    items: [
      {
        q: '¿Cómo importo mis datos GPS?',
        a: 'Por exportación CSV, desde Catapult, STATSports o cualquier otro sistema. La correspondencia de columnas queda memorizada en la primera importación, y las siguientes tardan unos segundos.',
      },
      {
        q: '¿Quién mantiene el control del espacio de equipo?',
        a: 'Usted. Crea el espacio, invita al staff y define los derechos de cada uno, sin validación del club.',
      },
      {
        q: '¿Cuál es el plazo de puesta en marcha?',
        a: 'Unos minutos: cree el espacio, añada a sus jugadores, importe su primera sesión. El histórico se construye con las semanas.',
      },
      {
        q: '¿Por qué el plan Free es gratuito?',
        a: 'Porque un entrenador tiene que poder estructurar su trabajo sin pedir presupuesto. Free cubre un equipo y jugadores sin límite, para siempre.',
      },
      {
        q: '¿Cómo lograr la adhesión del primer entrenador?',
        a: 'Empiece con sus propios datos y luego envíe el dossier de staff. El primer entrenador lee la disponibilidad real en la convocatoria.',
      },
      {
        q: '¿Otra pregunta?',
        a: 'Escriba a hello@strivn.net. Respondemos nosotros mismos, normalmente en el día.',
      },
    ],
  },
  finalCta: {
    title: 'Cree su espacio e importe su primera sesión.',
    body: 'Los primeros 30 días son en Semi-Pro, importación GPS incluida. Su staff se une cuando vea sus primeros informes.',
    primaryCta: 'Crear mi espacio gratis',
    secondaryCta: 'Hablar con Benoit',
    fine: ['Sin tarjeta de crédito', 'Sus datos siguen siendo suyos'],
  },
  footer: {
    tagline: 'La monitorización de un staff profesional, sin el presupuesto de un club profesional.',
    body: 'STRIVN reúne la monitorización del rendimiento y la gestión de equipo en un solo espacio compartido por el staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCTO',
        links: [
          { label: 'Plataforma', href: '/es/solutions/' },
          { label: 'Funcionalidades', href: '/es/features/' },
          { label: 'Precios', href: '/es/pricing/' },
          { label: 'FAQ', href: '/es/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUCIONES',
        links: [
          { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          { label: 'Soporte', href: '/es/support/' },
          { label: 'Privacidad', href: '/es/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratis para un equipo, toda la temporada',
  },
};

export const homeContent: Record<Locale, HomeContent> = { fr, en, nl, de, pt, es };
