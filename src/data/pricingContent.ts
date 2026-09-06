/**
 * Pricing page content — six locales.
 *
 * **Numbers are not authored here.** They are copied from the catalogue the app
 * publishes at `https://app.strivn.net/pricing/{locale}.json`, itself generated
 * from `strivn-app/config/billing.php`. `scripts/check-pricing.mjs` runs on
 * every build and fails it when `PLAN_PRICES` or `MATRIX` disagree with the
 * live feed — the page shipped a €19 Amateur for a day because nothing checked.
 *
 * Reference: `strivn-app/docs/specs/tarifs-strivn-2026-09.md`.
 *
 * Two rules this file exists to hold:
 *
 * 1. **No CTA promises a purchase.** No tier is `is_available` in the catalogue.
 *    Every card leads to registration, which is honest because every new account
 *    opens on a 30-day Semi-Pro trial, no card asked.
 * 2. **Pro carries no amount**, including in JSON-LD, and its three unshipped
 *    promises — vendor connectors, public API, drill signature — render as
 *    "upcoming", never among included rights.
 */

export type Locale = 'fr' | 'en' | 'nl' | 'de' | 'pt' | 'es';

export const PRICING_LOCALES: Locale[] = ['fr', 'en', 'nl', 'de', 'pt', 'es'];

export type PlanCode = 'free' | 'amateur' | 'semi_pro' | 'pro';

/** Registration for all four. See rule 1 above. */
export type PlanCtaKind = 'app' | 'contact';

/**
 * Amounts in cents, mirroring the catalogue. A tier with a yearly amount is
 * displayed at its yearly-price-per-month, which is the lowest figure the tier
 * can actually be had for; the full monthly sits struck through beside it.
 *
 * The months-free count is DERIVED (see `monthsFree`), never written down: a
 * change of scale upstream corrects every surface at once.
 */
export const PLAN_PRICES: Record<PlanCode, { monthly: number | null; yearly?: number }> = {
  free: { monthly: 0 },
  amateur: { monthly: 2500, yearly: 25000 },
  semi_pro: { monthly: 24900, yearly: 249000 },
  pro: { monthly: null },
};

/** The trial every new account opens on. `strivn-app/config/billing.php` → `trial`. */
export const TRIAL = { plan: 'semi_pro' as PlanCode, days: 30 } as const;

/** Twelve monthly payments minus one year, expressed in months. */
export function monthsFree(code: PlanCode): number {
  const p = PLAN_PRICES[code];
  if (!p.monthly || !p.yearly) return 0;
  return Math.round((p.monthly * 12 - p.yearly) / p.monthly);
}

/** The yearly price brought back to one month, in cents. */
export function monthlyFromYearly(code: PlanCode): number | null {
  const p = PLAN_PRICES[code];
  return p.yearly ? p.yearly / 12 : null;
}

const NUMBER_LOCALE: Record<Locale, string> = {
  fr: 'fr-FR', en: 'en-IE', nl: 'nl-BE', de: 'de-DE', pt: 'pt-PT', es: 'es-ES',
};

/** Trailing ",00" is noise on a round figure and precision on 207,50 €. */
export function formatMoney(cents: number, locale: Locale): string {
  const whole = cents % 100 === 0;
  return new Intl.NumberFormat(NUMBER_LOCALE[locale], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}

export function formatCount(value: number, locale: Locale): string {
  return new Intl.NumberFormat(NUMBER_LOCALE[locale]).format(value);
}

/** Words a matrix cell may hold besides a boolean or a number. */
export type CellToken = 'unlimited' | 'several' | 'last5' | 'full' | 'onQuote' | 'upcoming';

/** A number renders localised; a token renders through the locale's lexicon. */
export type Cell = boolean | number | CellToken;

export type MatrixGroupKey = 'squad' | 'daily' | 'performance' | 'volumes' | 'upcoming';

export type MatrixRowKey =
  | 'teams' | 'players' | 'staffSeats' | 'eventsCore' | 'eventsIndividual' | 'eventsPerf'
  | 'convocations' | 'portal' | 'injuries' | 'sessionResults' | 'liveMatch' | 'reports'
  | 'messageDrafts' | 'individualPrograms' | 'matchHistory' | 'exerciseLibrary'
  | 'tacticalBoards' | 'boardTemplates'
  | 'gpsImport' | 'load' | 'crossing' | 'strength' | 'medicalBoard' | 'physicalTests'
  | 'wearables' | 'whatsappDirect' | 'automations'
  | 'aiCalls' | 'whatsappIncluded'
  | 'gpsConnectors' | 'publicApi' | 'exerciseSignature';

export interface MatrixRow {
  key: MatrixRowKey;
  /** Fixed 4-tuple in plan order: free, amateur, semi_pro, pro. */
  cells: [Cell, Cell, Cell, Cell];
}

export interface MatrixGroup {
  key: MatrixGroupKey;
  rows: MatrixRow[];
}

/**
 * Who gets what. Every row is provable against the published catalogue; rows
 * whose entitlement flag was removed upstream for having no reader
 * (`api_access`, `advanced_analytics`, `club_reporting`, `priority_support`)
 * were removed here too rather than left as decoration.
 */
export const MATRIX: MatrixGroup[] = [
  {
    key: 'squad',
    rows: [
      { key: 'teams', cells: [1, 1, 1, 'unlimited'] },
      { key: 'players', cells: ['unlimited', 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'staffSeats', cells: [1, 2, 'unlimited', 'unlimited'] },
      { key: 'eventsCore', cells: [true, true, true, true] },
      { key: 'eventsIndividual', cells: [false, true, true, true] },
      { key: 'eventsPerf', cells: [false, false, true, true] },
    ],
  },
  {
    key: 'daily',
    rows: [
      { key: 'convocations', cells: [true, true, true, true] },
      { key: 'portal', cells: [true, true, true, true] },
      { key: 'injuries', cells: [true, true, true, true] },
      { key: 'sessionResults', cells: [true, true, true, true] },
      { key: 'liveMatch', cells: [true, true, true, true] },
      { key: 'reports', cells: [true, true, true, true] },
      { key: 'messageDrafts', cells: [true, true, true, true] },
      { key: 'individualPrograms', cells: [true, true, true, true] },
      { key: 'matchHistory', cells: ['last5', 'full', 'full', 'full'] },
      { key: 'exerciseLibrary', cells: [20, 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'tacticalBoards', cells: [3, 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'boardTemplates', cells: [3, 'unlimited', 'unlimited', 'unlimited'] },
    ],
  },
  {
    key: 'performance',
    rows: [
      { key: 'gpsImport', cells: [false, false, true, true] },
      { key: 'load', cells: [false, false, true, true] },
      { key: 'crossing', cells: [false, false, true, true] },
      { key: 'strength', cells: [false, false, true, true] },
      { key: 'medicalBoard', cells: [false, false, true, true] },
      { key: 'physicalTests', cells: [false, false, true, true] },
      { key: 'wearables', cells: [false, false, true, true] },
      { key: 'whatsappDirect', cells: [false, false, true, true] },
      { key: 'automations', cells: [false, false, true, true] },
    ],
  },
  {
    key: 'volumes',
    rows: [
      { key: 'aiCalls', cells: [60, 400, 2000, 'unlimited'] },
      { key: 'whatsappIncluded', cells: [0, 0, 3000, 10000] },
    ],
  },
  {
    key: 'upcoming',
    rows: [
      { key: 'gpsConnectors', cells: [false, false, false, 'upcoming'] },
      { key: 'publicApi', cells: [false, false, false, 'upcoming'] },
      { key: 'exerciseSignature', cells: [false, false, false, 'upcoming'] },
    ],
  },
];

export interface PricingPlan {
  code: PlanCode;
  name: string;
  badge: string;
  /** Pro only: rendered where the figure sits, never an amount. */
  quotePrice?: string;
  promise: string;
  qualifier: string;
  /** "Everything in X, plus:" — absent on Free. */
  inherits?: string;
  features: string[];
  cta: string;
  kind: PlanCtaKind;
  featured?: boolean;
}

export interface PricingContent {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; sub: string };
  trial: { label: string; title: string; body: string };
  plans: {
    kicker: string;
    title: string;
    items: PricingPlan[];
    note: string;
    /** "/ month", shown beside every recurring figure. */
    perMonth: string;
    /** "Billed {total} per year" — `{total}` is substituted. */
    billedYearly: string;
    /** "{count} months free" — `{count}` is substituted, never hardcoded. */
    monthsFree: string;
    /** Screen-reader name for the struck-through full monthly price. */
    fullMonthlyLabel: string;
    freePeriod: string;
  };
  credits: { kicker: string; title: string; body: string; points: string[]; note: string };
  matrix: {
    kicker: string;
    title: string;
    caption: string;
    scrollHint: string;
    yes: string;
    no: string;
    planNames: Record<PlanCode, string>;
    groups: Record<MatrixGroupKey, string>;
    rows: Record<MatrixRowKey, string>;
    cells: Record<CellToken, string>;
  };
  downgrade: {
    kicker: string; title: string; body: string;
    closesTitle: string; closes: string[];
    staysTitle: string; stays: string[];
  };
  faq: {
    kicker: string; title: string; body: string;
    contactTitle: string; contactBody: string; email: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: { title: string; sub: string; primary: string; secondary: string; trust: string };
  teaserCta: string;
}

const fr: PricingContent = {
  meta: {
    title: 'Tarifs STRIVN | Un mois de Semi-Pro offert à l’inscription',
    description:
      'Quatre paliers comparés ligne par ligne. Tout nouveau compte démarre avec 30 jours de Semi-Pro, sans carte. Le palier performance reprend le croisement GPS, RPE et wellness que vous faites encore à la main.',
  },
  hero: {
    kicker: 'TARIFS',
    title: 'Le dernier kilomètre entre votre export GPS et votre décision.',
    sub: 'Quatre paliers. Le gratuit fait tourner une équipe toute une saison. Le palier performance reprend le croisement GPS, RPE et wellness que vous faites encore à la main.',
  },
  trial: {
    label: 'ESSAI',
    title: 'Un mois de Semi-Pro offert à l’inscription.',
    body: 'Tout nouveau compte démarre au palier performance pendant 30 jours, sans carte bancaire et sans rien à demander. À l’échéance, le compte repasse au gratuit tout seul et rien n’est prélevé.',
  },
  plans: {
    kicker: 'QUATRE PALIERS',
    title: 'Chaque palier reprend le précédent.',
    note: 'Aucun palier payant n’est encore ouvert à la vente. Créez votre compte : l’essai vous met au Semi-Pro pendant un mois, et nous vous prévenons quand la vente ouvre.',
    perMonth: '/ mois',
    billedYearly: 'Facturé {total} par an',
    monthsFree: '{count} mois offerts',
    fullMonthlyLabel: 'Au mois',
    freePeriod: 'pour toujours',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponible maintenant',
        promise: 'Faire tourner une équipe',
        qualifier: 'Vous êtes seul avec une équipe, et aucun budget à demander.',
        features: [
          'Une équipe, joueurs sans plafond, une place de staff',
          'Entraînement, match, repos, réunion, tâche, team building',
          'Convocations, présences, effectif',
          'App joueur, check-in matinal, RPE',
          'Live match, les 5 derniers matchs en historique',
          'Résultats de séance et bilan coach',
          'Infirmerie, tactique, rapports et programmes individuels',
          '20 exercices, 3 tableaux tactiques, 3 modèles',
          '60 appels à l’assistant IA par mois',
        ],
        cta: 'Créer un compte',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Bientôt en vente',
        promise: 'Arrêter de tout ressaisir chaque semaine',
        qualifier: 'Vous rejouez les mêmes séances et vous les reconstruisez à chaque fois.',
        inherits: 'Tout le plan Free, plus :',
        features: [
          'Bibliothèque d’exercices sans plafond',
          'Tableaux tactiques et modèles sans plafond',
          'Historique de matchs complet',
          'Entraînement individuel et récupération au calendrier',
          'Une seconde place de staff : votre préparateur avec vous',
          '400 appels à l’assistant IA par mois',
        ],
        cta: 'Créer un compte',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Le palier performance',
        promise: 'Croiser le GPS avec le reste',
        qualifier: 'Vous exportez déjà du GPS, et vous le recroisez à la main dans Excel.',
        inherits: 'Tout le plan Amateur, plus :',
        features: [
          'Import GPS par CSV, quel que soit le fournisseur',
          'Seuils par joueur, cibles et bandes : l’écart se voit, il ne se calcule plus.',
          'GPS, RPE et wellness sur le même créneau, sans le tableur du dimanche soir.',
          'Musculation, tests physiques et tableau médical',
          'Synchronisation des objets connectés',
          'WhatsApp direct, relances et check-ins automatiques',
          'Staff sans plafond',
          '2 000 appels IA et 3 000 messages WhatsApp par mois',
        ],
        cta: 'Créer un compte',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Sur demande',
        quotePrice: 'Sur devis',
        promise: 'Descendre au niveau de l’exercice',
        qualifier: 'Plusieurs équipes équipées, une cellule performance, des données à faire sortir.',
        inherits: 'Tout le plan Semi-Pro, plus :',
        features: [
          'Équipes en nombre illimité',
          'Volumes WhatsApp et IA définis au contrat',
          'Périmètre et accompagnement sur mesure',
          'À venir : connecteurs vers les GPS du marché, API publique, signature d’exercice',
        ],
        cta: 'Parler à l’équipe',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'ASSISTANT IA',
    title: 'L’assistant se compte en tours, pas en forfait.',
    body:
      'Chaque palier ouvre une dotation mensuelle d’appels à l’assistant, remise à zéro chaque mois. Un appel est un tour de conversation, pas une requête technique, et la prise en main puise au même compteur.',
    points: [
      '60 tours par mois dès le plan gratuit. Personne ne paie pour une fonctionnalité qu’il n’a jamais essayée.',
      '400 à l’Amateur, 2 000 au Semi-Pro, sans plafond au Pro.',
      'La dotation repart à zéro chaque mois.',
    ],
    note: 'Ces dotations sont des valeurs de travail. Nous les recalerons sur l’usage réel plutôt que de les défendre par principe.',
  },
  matrix: {
    kicker: 'COMPARATIF',
    title: 'Ce qui change vraiment d’un palier à l’autre.',
    caption: 'Comparatif des quatre paliers STRIVN, ligne par ligne.',
    scrollHint: 'Tableau défilant horizontalement.',
    yes: 'Inclus',
    no: 'Non inclus',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Équipe et calendrier',
      daily: 'Le quotidien du staff',
      performance: 'Performance',
      volumes: 'Dotations mensuelles',
      upcoming: 'À venir, au palier Pro',
    },
    rows: {
      teams: 'Équipes',
      players: 'Joueurs par équipe',
      staffSeats: 'Places de staff, propriétaire compris',
      eventsCore: 'Entraînement, match, repos, réunion, tâche, team building',
      eventsIndividual: 'Entraînement individuel, récupération',
      eventsPerf: 'Musculation, test physique, soins',
      convocations: 'Convocations, présences, effectif',
      portal: 'App joueur, check-in matinal, RPE',
      injuries: 'Infirmerie et suivi des blessures',
      sessionResults: 'Résultats de séance et bilan coach',
      liveMatch: 'Live match',
      reports: 'Rapports et rapports automatiques',
      messageDrafts: 'Messages générés à copier dans le groupe',
      individualPrograms: 'Programmes individuels',
      matchHistory: 'Historique de matchs',
      exerciseLibrary: 'Exercices dans la bibliothèque',
      tacticalBoards: 'Tableaux tactiques',
      boardTemplates: 'Modèles de tableaux',
      gpsImport: 'Import GPS par CSV, quel que soit le fournisseur',
      load: 'Charge externe, zones, seuils par joueur et cibles',
      crossing: 'Croisement GPS, RPE et wellness',
      strength: 'Musculation : catalogue, programmes et runner',
      medicalBoard: 'Tableau médical et créneaux de soins',
      physicalTests: 'Tests physiques',
      wearables: 'Synchronisation des objets connectés',
      whatsappDirect: 'Messages WhatsApp directs aux joueurs',
      automations: 'Relances de convocation et check-ins automatiques',
      aiCalls: 'Appels à l’assistant IA, par mois',
      whatsappIncluded: 'Messages WhatsApp inclus, par mois',
      gpsConnectors: 'Connecteurs vers les GPS du marché',
      publicApi: 'API publique',
      exerciseSignature: 'Signature d’exercice',
    },
    cells: {
      unlimited: 'Illimité',
      several: 'Plusieurs',
      last5: '5 derniers',
      full: 'Complet',
      onQuote: 'Sur devis',
      upcoming: 'À venir',
    },
  },
  downgrade: {
    kicker: 'RÉTROGRADATION',
    title: 'Vos données ne sont jamais prises en otage.',
    body:
      'On verrouille la création, jamais la lecture. Une équipe qui redescend garde l’accès à tout ce qu’elle a produit : le créneau de soins posé par le kiné reste au calendrier, la séance de musculation passée reste consultable, l’import GPS confirmé reste visible. Remonter d’un palier rouvre tout, tel quel.',
    closesTitle: 'Ce qui ferme',
    closes: [
      'Créer un événement du palier supérieur',
      'Importer de nouvelles données GPS',
      'Prescrire une séance de musculation',
      'Inviter une place de staff au-delà du plafond',
    ],
    staysTitle: 'Ce qui reste ouvert',
    stays: [
      'Consulter tout votre historique',
      'Exporter vos données',
      'Supprimer ce qui vous appartient',
      'Garder le staff déjà en place',
    ],
  },
  faq: {
    kicker: 'QUESTIONS',
    title: 'Ce qu’on nous demande avant de signer.',
    body: 'Les réponses valent pour les quatre paliers, sauf mention contraire.',
    contactTitle: 'Une question que cette page ne couvre pas ?',
    contactBody: 'Écrivez-nous. Nous répondons nous-mêmes, et une question précise vaut mieux qu’un formulaire.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Que se passe-t-il à la fin du mois d’essai ?',
        a: 'Le compte repasse au plan gratuit tout seul. Rien n’est prélevé, aucune carte n’a été demandée, et tout ce que vous avez produit pendant l’essai reste consultable. Nous prévenons trois jours avant l’échéance pour que la date ne surprenne personne.',
      },
      {
        q: 'Le plan gratuit est-il limité dans le temps ?',
        a: 'Non. Il est limité en volume — une équipe, une place de staff, 20 exercices, 3 tableaux tactiques, les 5 derniers matchs en historique — jamais en durée. Il n’expire pas et ne demande pas de carte bancaire.',
      },
      {
        q: 'Pourquoi 25 € puis 249 € ?',
        a: 'Parce que les deux paliers ne vendent pas la même chose. L’Amateur, c’est la logistique du staff, payée par un coach de sa poche : il lève les plafonds et ouvre une seconde place de staff, il n’ouvre aucun module. Le Semi-Pro, c’est une plateforme de performance sur un budget de club, et c’est le palier où vos GPS commencent à servir à quelque chose. Entre les deux, il n’y a pas un produit plus gros, il y a un autre métier.',
      },
      {
        q: 'Pourquoi le prix affiché est-il le tarif annuel ?',
        a: 'Parce que c’est le montant le plus bas auquel le palier se prend réellement. Le tarif mensuel est écrit à côté, barré, et le total annuel prélevé est écrit dessous. Payer à l’année revient à douze mois pour le prix de dix.',
      },
      {
        q: 'Qu’est-ce qui compte dans les 20 exercices ?',
        a: 'Les exercices que vous créez. Le catalogue de musculation central, maintenu par STRIVN et lisible par tout le monde, ne compte pas dans votre plafond.',
      },
      {
        q: 'Puis-je importer mon GPS sans changer de fournisseur ?',
        a: 'Oui, par CSV, quel que soit le système. STRIVN analyse les en-têtes de votre fichier au lieu d’attendre un format précis, et retient le mapping de vos colonnes pour les imports suivants. Les connecteurs directs vers les GPS du marché sont annoncés au palier Pro, et ne sont pas encore livrés.',
      },
      {
        q: 'Comment se comptent les appels à l’assistant IA ?',
        a: 'En tours de conversation, pas en requêtes techniques : 60 par mois au gratuit, 400 à l’Amateur, 2 000 au Semi-Pro, sans plafond au Pro. La dotation repart à zéro chaque mois, et la prise en main puise au même compteur.',
      },
      {
        q: 'Que se passe-t-il si je redescends de palier ?',
        a: 'Vous gardez l’accès en lecture à tout ce que vous avez produit. Ce qui ferme, c’est la création : poser un créneau du palier supérieur, importer, prescrire, inviter au-delà du plafond de staff. Le staff déjà en place ne bouge pas.',
      },
      {
        q: 'Et un club qui ne paie pas par carte bancaire ?',
        a: 'Bon de commande et facture, sur le Semi-Pro et le Pro. À l’échelle d’un budget de saison, la validation passe rarement par une carte, et nous en tenons compte.',
      },
    ],
  },
  cta: {
    title: 'Commencez par votre propre saison.',
    sub: 'Créez votre compte en quelques minutes : le premier mois est au palier Semi-Pro, sans carte. Si vous exportez déjà du GPS, la conversation la plus rapide commence par ce que vous recroisez encore à la main.',
    primary: 'Créer un compte',
    secondary: 'Montrez-nous votre Excel',
    trust: 'Sans carte bancaire. Sans engagement.',
  },
  teaserCta: 'Voir le détail des offres',
};

const en: PricingContent = {
  meta: {
    title: 'STRIVN pricing | One month of Semi-Pro free when you sign up',
    description:
      'Four tiers compared line by line. Every new account starts on 30 days of Semi-Pro, no card. The performance tier takes over the GPS, RPE and wellness crossing you still do by hand.',
  },
  hero: {
    kicker: 'PRICING',
    title: 'The last mile between your GPS export and your decision.',
    sub: 'Four tiers. The free one runs a team for a whole season. The performance tier takes over the GPS, RPE and wellness crossing you still do by hand.',
  },
  trial: {
    label: 'TRIAL',
    title: 'One month of Semi-Pro, free when you sign up.',
    body: 'Every new account opens on the performance tier for 30 days, with no card and nothing to ask for. At the end it returns to the free plan on its own, and nothing is charged.',
  },
  plans: {
    kicker: 'FOUR TIERS',
    title: 'Every tier carries the one below it.',
    note: 'No paid tier is open for sale yet. Create your account: the trial puts you on Semi-Pro for a month, and we tell you when the sale opens.',
    perMonth: '/ month',
    billedYearly: 'Billed {total} per year',
    monthsFree: '{count} months free',
    fullMonthlyLabel: 'Monthly',
    freePeriod: 'forever',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Available now',
        promise: 'Run a team',
        qualifier: 'You are on your own with one team, and no budget to ask for.',
        features: [
          'One team, unlimited players, one staff seat',
          'Training, match, rest, meeting, task, team building',
          'Call-ups, attendance, squad list',
          'Player app, morning check-in, RPE',
          'Live match, the last 5 matches in history',
          'Session results and coach debrief',
          'Injury room, tactics, reports and individual programmes',
          '20 exercises, 3 tactical boards, 3 templates',
          '60 AI assistant calls a month',
        ],
        cta: 'Create an account',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'On sale soon',
        promise: 'Stop rebuilding the same week twice',
        qualifier: 'You run the same sessions again and rebuild them from scratch every time.',
        inherits: 'Everything in Free, plus:',
        features: [
          'Unlimited exercise library',
          'Unlimited tactical boards and templates',
          'Full match history',
          'Individual training and recovery on the calendar',
          'A second staff seat: your S&C coach alongside you',
          '400 AI assistant calls a month',
        ],
        cta: 'Create an account',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'The performance tier',
        promise: 'Cross the GPS with everything else',
        qualifier: 'You already export GPS, and you cross it by hand in Excel.',
        inherits: 'Everything in Amateur, plus:',
        features: [
          'GPS import by CSV, whichever the vendor',
          'Per-player thresholds, targets and bands: the gap shows, it is no longer calculated.',
          'GPS, RPE and wellness on the same slot, without the Sunday-night spreadsheet.',
          'Strength, physical tests and the medical board',
          'Wearable sync',
          'Direct WhatsApp, automatic reminders and check-ins',
          'Unlimited staff seats',
          '2,000 AI calls and 3,000 WhatsApp messages a month',
        ],
        cta: 'Create an account',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'On request',
        quotePrice: 'Custom',
        promise: 'Get down to the drill',
        qualifier: 'Several teams on GPS, a performance unit, and data that has to get out.',
        inherits: 'Everything in Semi-Pro, plus:',
        features: [
          'An unlimited number of teams',
          'WhatsApp and AI volumes set by contract',
          'Scope and support tailored to you',
          'Upcoming: connectors to market GPS systems, public API, drill signature',
        ],
        cta: 'Talk to the team',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'AI ASSISTANT',
    title: 'The assistant is counted in turns, not in a bundle.',
    body:
      'Every tier opens a monthly allowance of assistant calls, reset each month. A call is a turn of conversation, not a technical request, and getting started draws on the same counter.',
    points: [
      '60 turns a month from the free plan on. Nobody pays for a feature they have never tried.',
      '400 on Amateur, 2,000 on Semi-Pro, uncapped on Pro.',
      'The allowance resets every month.',
    ],
    note: 'These allowances are working figures. We will recalibrate them on real usage rather than defend them on principle.',
  },
  matrix: {
    kicker: 'COMPARISON',
    title: 'What actually changes from one tier to the next.',
    caption: 'The four STRIVN tiers compared, line by line.',
    scrollHint: 'Table scrolls horizontally.',
    yes: 'Included',
    no: 'Not included',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Squad and calendar',
      daily: 'The staff’s daily work',
      performance: 'Performance',
      volumes: 'Monthly allowances',
      upcoming: 'Upcoming, on Pro',
    },
    rows: {
      teams: 'Teams',
      players: 'Players per team',
      staffSeats: 'Staff seats, owner included',
      eventsCore: 'Training, match, rest, meeting, task, team building',
      eventsIndividual: 'Individual training, recovery',
      eventsPerf: 'Strength, physical test, treatment',
      convocations: 'Call-ups, attendance, squad list',
      portal: 'Player app, morning check-in, RPE',
      injuries: 'Injury room and injury tracking',
      sessionResults: 'Session results and coach debrief',
      liveMatch: 'Live match',
      reports: 'Reports and automatic reports',
      messageDrafts: 'Drafted messages to paste into the group',
      individualPrograms: 'Individual programmes',
      matchHistory: 'Match history',
      exerciseLibrary: 'Exercises in the library',
      tacticalBoards: 'Tactical boards',
      boardTemplates: 'Board templates',
      gpsImport: 'GPS import by CSV, whichever the vendor',
      load: 'External load, zones, per-player thresholds and targets',
      crossing: 'GPS, RPE and wellness crossed',
      strength: 'Strength: catalogue, programmes and runner',
      medicalBoard: 'Medical board and treatment slots',
      physicalTests: 'Physical tests',
      wearables: 'Wearable sync',
      whatsappDirect: 'Direct WhatsApp messages to players',
      automations: 'Automatic call-up reminders and check-ins',
      aiCalls: 'AI assistant calls, per month',
      whatsappIncluded: 'WhatsApp messages included, per month',
      gpsConnectors: 'Connectors to market GPS systems',
      publicApi: 'Public API',
      exerciseSignature: 'Drill signature',
    },
    cells: {
      unlimited: 'Unlimited',
      several: 'Several',
      last5: 'Last 5',
      full: 'Full',
      onQuote: 'On request',
      upcoming: 'Upcoming',
    },
  },
  downgrade: {
    kicker: 'STEPPING DOWN',
    title: 'Your data is never held hostage.',
    body:
      'We lock creation, never reading. A team that steps down keeps access to everything it produced: the treatment slot the physio booked stays on the calendar, the past strength session stays readable, the confirmed GPS import stays visible. Stepping back up reopens all of it, as it was.',
    closesTitle: 'What closes',
    closes: [
      'Creating an event from the tier above',
      'Importing new GPS data',
      'Prescribing a strength session',
      'Inviting a staff seat beyond the cap',
    ],
    staysTitle: 'What stays open',
    stays: [
      'Reading your whole history',
      'Exporting your data',
      'Deleting what belongs to you',
      'Keeping the staff already in place',
    ],
  },
  faq: {
    kicker: 'QUESTIONS',
    title: 'What we get asked before signing.',
    body: 'The answers hold for all four tiers unless stated otherwise.',
    contactTitle: 'A question this page does not cover?',
    contactBody: 'Write to us. We answer ourselves, and a precise question beats a form.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'What happens at the end of the trial month?',
        a: 'The account returns to the free plan on its own. Nothing is charged, no card was ever asked for, and everything you produced during the trial stays readable. We warn you three days before the date so it surprises nobody.',
      },
      {
        q: 'Is the free plan time-limited?',
        a: 'No. It is capped by volume — one team, one staff seat, 20 exercises, 3 tactical boards, the last 5 matches in history — never by time. It does not expire and it asks for no card.',
      },
      {
        q: 'Why €25 and then €249?',
        a: 'Because the two tiers do not sell the same thing. Amateur is the staff’s logistics, paid out of a coach’s pocket: it lifts the caps and opens a second staff seat, it opens no module. Semi-Pro is a performance platform on a club budget, and it is the tier where your GPS starts being worth something. Between them there is not a bigger product, there is a different job.',
      },
      {
        q: 'Why is the price shown the annual one?',
        a: 'Because it is the lowest figure the tier can actually be had for. The monthly rate sits beside it, struck through, and the yearly total charged is written underneath. Paying yearly comes to twelve months for the price of ten.',
      },
      {
        q: 'What counts towards the 20 exercises?',
        a: 'The exercises you create. The central strength catalogue, maintained by STRIVN and readable by everyone, does not count against your cap.',
      },
      {
        q: 'Can I import my GPS without changing vendor?',
        a: 'Yes, by CSV, whichever the system. STRIVN reads your file’s headers instead of expecting one format, and remembers your column mapping for the next import. Direct connectors to market GPS systems are announced on the Pro tier and are not shipped yet.',
      },
      {
        q: 'How are AI assistant calls counted?',
        a: 'In turns of conversation, not technical requests: 60 a month on free, 400 on Amateur, 2,000 on Semi-Pro, uncapped on Pro. The allowance resets every month, and getting started draws on the same counter.',
      },
      {
        q: 'What happens if I step down a tier?',
        a: 'You keep read access to everything you produced. What closes is creation: booking a slot from the tier above, importing, prescribing, inviting beyond the staff cap. The staff already in place does not move.',
      },
      {
        q: 'What about a club that does not pay by card?',
        a: 'Purchase order and invoice, on Semi-Pro and Pro. At the scale of a season budget, approval rarely goes through a card, and we work with that.',
      },
    ],
  },
  cta: {
    title: 'Start with your own season.',
    sub: 'Create your account in minutes: the first month is on the Semi-Pro tier, with no card. If you already export GPS, the fastest conversation starts with whatever you still cross by hand.',
    primary: 'Create an account',
    secondary: 'Show us your Excel',
    trust: 'No card. No commitment.',
  },
  teaserCta: 'See the full comparison',
};

const nl: PricingContent = {
  meta: {
    title: 'STRIVN-tarieven | Eén maand Semi-Pro gratis bij inschrijving',
    description:
      'Vier niveaus, regel voor regel vergeleken. Elk nieuw account start met 30 dagen Semi-Pro, zonder kaart. Het performance-niveau neemt de kruising van GPS, RPE en wellness over die u nog met de hand doet.',
  },
  hero: {
    kicker: 'TARIEVEN',
    title: 'De laatste kilometer tussen uw GPS-export en uw beslissing.',
    sub: 'Vier niveaus. Het gratis niveau draagt een team een heel seizoen. Het performance-niveau neemt de kruising van GPS, RPE en wellness over die u nog met de hand doet.',
  },
  trial: {
    label: 'PROEFPERIODE',
    title: 'Eén maand Semi-Pro, gratis bij inschrijving.',
    body: 'Elk nieuw account start 30 dagen op het performance-niveau, zonder kaart en zonder iets te moeten vragen. Daarna keert het vanzelf terug naar het gratis plan, en er wordt niets afgerekend.',
  },
  plans: {
    kicker: 'VIER NIVEAUS',
    title: 'Elk niveau draagt het vorige mee.',
    note: 'Geen enkel betaald niveau staat al te koop. Maak uw account aan: de proefperiode zet u een maand op Semi-Pro, en wij verwittigen u zodra de verkoop opent.',
    perMonth: '/ maand',
    billedYearly: 'Gefactureerd {total} per jaar',
    monthsFree: '{count} maanden gratis',
    fullMonthlyLabel: 'Per maand',
    freePeriod: 'voor altijd',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Nu beschikbaar',
        promise: 'Een team draaiende houden',
        qualifier: 'U staat er alleen voor met één team, en zonder budget om te vragen.',
        features: [
          'Eén team, onbeperkt spelers, één stafplaats',
          'Training, wedstrijd, rust, vergadering, taak, teambuilding',
          'Selecties, aanwezigheden, spelerslijst',
          'Spelersapp, ochtendcheck-in, RPE',
          'Live match, de laatste 5 wedstrijden in de geschiedenis',
          'Sessieresultaten en coachverslag',
          'Ziekenboeg, tactiek, rapporten en individuele programma’s',
          '20 oefeningen, 3 tactische borden, 3 sjablonen',
          '60 oproepen naar de AI-assistent per maand',
        ],
        cta: 'Account aanmaken',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Binnenkort te koop',
        promise: 'Niet elke week alles opnieuw ingeven',
        qualifier: 'U speelt dezelfde sessies opnieuw en bouwt ze telkens opnieuw op.',
        inherits: 'Alles uit Free, plus:',
        features: [
          'Onbeperkte oefeningenbibliotheek',
          'Onbeperkte tactische borden en sjablonen',
          'Volledige wedstrijdgeschiedenis',
          'Individuele training en recuperatie in de agenda',
          'Een tweede stafplaats: uw fysieke trainer naast u',
          '400 oproepen naar de AI-assistent per maand',
        ],
        cta: 'Account aanmaken',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Het performance-niveau',
        promise: 'De GPS kruisen met de rest',
        qualifier: 'U exporteert al GPS, en u kruist het met de hand in Excel.',
        inherits: 'Alles uit Amateur, plus:',
        features: [
          'GPS-import via CSV, ongeacht de leverancier',
          'Drempels per speler, doelen en banden: het verschil is zichtbaar, niet meer te berekenen.',
          'GPS, RPE en wellness op hetzelfde blok, zonder de spreadsheet van zondagavond.',
          'Krachttraining, fysieke testen en het medisch bord',
          'Synchronisatie van wearables',
          'Rechtstreeks WhatsApp, automatische herinneringen en check-ins',
          'Onbeperkt aantal stafplaatsen',
          '2.000 AI-oproepen en 3.000 WhatsApp-berichten per maand',
        ],
        cta: 'Account aanmaken',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Op aanvraag',
        quotePrice: 'Op maat',
        promise: 'Afdalen tot op oefeningniveau',
        qualifier: 'Meerdere teams met GPS, een performancecel, en data die eruit moet.',
        inherits: 'Alles uit Semi-Pro, plus:',
        features: [
          'Onbeperkt aantal teams',
          'WhatsApp- en AI-volumes vastgelegd in het contract',
          'Omvang en begeleiding op maat',
          'Binnenkort: koppelingen met GPS-systemen op de markt, publieke API, oefeningsignatuur',
        ],
        cta: 'Spreek het team',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'AI-ASSISTENT',
    title: 'De assistent telt beurten, geen abonnement.',
    body:
      'Elk niveau opent een maandelijks budget aan oproepen naar de assistent, dat elke maand opnieuw start. Een oproep is een gespreksbeurt, geen technische aanvraag, en de kennismaking put uit dezelfde teller.',
    points: [
      '60 beurten per maand vanaf het gratis plan. Niemand betaalt voor iets wat hij nooit geprobeerd heeft.',
      '400 op Amateur, 2.000 op Semi-Pro, zonder plafond op Pro.',
      'Het budget start elke maand opnieuw.',
    ],
    note: 'Deze budgetten zijn werkcijfers. We stemmen ze af op het werkelijke gebruik in plaats van ze uit principe te verdedigen.',
  },
  matrix: {
    kicker: 'VERGELIJKING',
    title: 'Wat er echt verandert van niveau tot niveau.',
    caption: 'De vier STRIVN-niveaus vergeleken, regel voor regel.',
    scrollHint: 'Tabel schuift horizontaal.',
    yes: 'Inbegrepen',
    no: 'Niet inbegrepen',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Team en agenda',
      daily: 'Het dagelijkse werk van de staf',
      performance: 'Performance',
      volumes: 'Maandelijkse budgetten',
      upcoming: 'Binnenkort, op Pro',
    },
    rows: {
      teams: 'Teams',
      players: 'Spelers per team',
      staffSeats: 'Stafplaatsen, eigenaar inbegrepen',
      eventsCore: 'Training, wedstrijd, rust, vergadering, taak, teambuilding',
      eventsIndividual: 'Individuele training, recuperatie',
      eventsPerf: 'Krachttraining, fysieke test, verzorging',
      convocations: 'Selecties, aanwezigheden, spelerslijst',
      portal: 'Spelersapp, ochtendcheck-in, RPE',
      injuries: 'Ziekenboeg en blessureopvolging',
      sessionResults: 'Sessieresultaten en coachverslag',
      liveMatch: 'Live match',
      reports: 'Rapporten en automatische rapporten',
      messageDrafts: 'Opgestelde berichten om in de groep te plakken',
      individualPrograms: 'Individuele programma’s',
      matchHistory: 'Wedstrijdgeschiedenis',
      exerciseLibrary: 'Oefeningen in de bibliotheek',
      tacticalBoards: 'Tactische borden',
      boardTemplates: 'Sjablonen voor borden',
      gpsImport: 'GPS-import via CSV, ongeacht de leverancier',
      load: 'Externe belasting, zones, drempels per speler en doelen',
      crossing: 'GPS, RPE en wellness gekruist',
      strength: 'Krachttraining: catalogus, programma’s en runner',
      medicalBoard: 'Medisch bord en verzorgingsblokken',
      physicalTests: 'Fysieke testen',
      wearables: 'Synchronisatie van wearables',
      whatsappDirect: 'Rechtstreekse WhatsApp-berichten aan spelers',
      automations: 'Automatische selectieherinneringen en check-ins',
      aiCalls: 'Oproepen naar de AI-assistent, per maand',
      whatsappIncluded: 'Inbegrepen WhatsApp-berichten, per maand',
      gpsConnectors: 'Koppelingen met GPS-systemen op de markt',
      publicApi: 'Publieke API',
      exerciseSignature: 'Oefeningsignatuur',
    },
    cells: {
      unlimited: 'Onbeperkt',
      several: 'Meerdere',
      last5: 'Laatste 5',
      full: 'Volledig',
      onQuote: 'Op aanvraag',
      upcoming: 'Binnenkort',
    },
  },
  downgrade: {
    kicker: 'TERUGSCHAKELEN',
    title: 'Uw gegevens worden nooit gegijzeld.',
    body:
      'We vergrendelen het aanmaken, nooit het lezen. Een team dat een niveau zakt, behoudt toegang tot alles wat het gemaakt heeft: het verzorgingsblok van de kine blijft in de agenda, de voorbije krachtsessie blijft raadpleegbaar, de bevestigde GPS-import blijft zichtbaar. Weer opschalen opent alles opnieuw, zoals het was.',
    closesTitle: 'Wat sluit',
    closes: [
      'Een evenement van het hogere niveau aanmaken',
      'Nieuwe GPS-gegevens importeren',
      'Een krachtsessie voorschrijven',
      'Een stafplaats uitnodigen boven het plafond',
    ],
    staysTitle: 'Wat open blijft',
    stays: [
      'Uw volledige geschiedenis raadplegen',
      'Uw gegevens exporteren',
      'Verwijderen wat van u is',
      'De staf die er al is behouden',
    ],
  },
  faq: {
    kicker: 'VRAGEN',
    title: 'Wat men ons vraagt voor de handtekening.',
    body: 'De antwoorden gelden voor alle vier de niveaus, tenzij anders vermeld.',
    contactTitle: 'Een vraag die deze pagina niet dekt?',
    contactBody: 'Schrijf ons. Wij antwoorden zelf, en een precieze vraag is beter dan een formulier.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Wat gebeurt er na de proefmaand?',
        a: 'Het account keert vanzelf terug naar het gratis plan. Er wordt niets afgerekend, er is nooit een kaart gevraagd, en alles wat u tijdens de proefperiode maakte blijft leesbaar. Drie dagen voor de vervaldag verwittigen we u, zodat de datum niemand verrast.',
      },
      {
        q: 'Is het gratis plan beperkt in de tijd?',
        a: 'Nee. Het is beperkt in volume — één team, één stafplaats, 20 oefeningen, 3 tactische borden, de laatste 5 wedstrijden in de geschiedenis — nooit in duur. Het vervalt niet en vraagt geen kaart.',
      },
      {
        q: 'Waarom 25 € en dan 249 €?',
        a: 'Omdat de twee niveaus niet hetzelfde verkopen. Amateur is de logistiek van de staf, betaald uit de zak van een coach: het licht de plafonds op en opent een tweede stafplaats, het opent geen enkele module. Semi-Pro is een performanceplatform op een clubbudget, en het is het niveau waarop uw GPS iets begint op te leveren. Tussen de twee zit geen groter product, maar een ander vak.',
      },
      {
        q: 'Waarom is de getoonde prijs het jaartarief?',
        a: 'Omdat dat het laagste bedrag is waarvoor het niveau echt te krijgen is. Het maandtarief staat ernaast, doorstreept, en het jaartotaal staat eronder. Per jaar betalen komt neer op twaalf maanden voor de prijs van tien.',
      },
      {
        q: 'Wat telt mee in die 20 oefeningen?',
        a: 'De oefeningen die u zelf aanmaakt. De centrale krachtcatalogus, onderhouden door STRIVN en leesbaar voor iedereen, telt niet mee.',
      },
      {
        q: 'Kan ik mijn GPS importeren zonder van leverancier te wisselen?',
        a: 'Ja, via CSV, ongeacht het systeem. STRIVN analyseert de hoofdingen van uw bestand in plaats van één formaat te verwachten, en onthoudt uw kolommapping voor de volgende import. Rechtstreekse koppelingen met GPS-systemen op de markt zijn aangekondigd op Pro en zijn nog niet geleverd.',
      },
      {
        q: 'Hoe worden de oproepen naar de AI-assistent geteld?',
        a: 'In gespreksbeurten, niet in technische aanvragen: 60 per maand op gratis, 400 op Amateur, 2.000 op Semi-Pro, zonder plafond op Pro. Het budget start elke maand opnieuw, en de kennismaking put uit dezelfde teller.',
      },
      {
        q: 'Wat gebeurt er als ik een niveau zak?',
        a: 'U behoudt leestoegang tot alles wat u gemaakt hebt. Wat sluit, is het aanmaken: een blok van het hogere niveau plaatsen, importeren, voorschrijven, uitnodigen boven het stafplafond. De staf die er al is beweegt niet.',
      },
      {
        q: 'En een club die niet met kaart betaalt?',
        a: 'Bestelbon en factuur, op Semi-Pro en Pro. Op de schaal van een seizoensbudget verloopt de goedkeuring zelden via een kaart, en daar houden wij rekening mee.',
      },
    ],
  },
  cta: {
    title: 'Begin met uw eigen seizoen.',
    sub: 'Maak uw account in enkele minuten aan: de eerste maand staat op Semi-Pro, zonder kaart. Exporteert u al GPS, dan begint het snelste gesprek bij wat u nog met de hand kruist.',
    primary: 'Account aanmaken',
    secondary: 'Toon ons uw Excel',
    trust: 'Geen kaart. Geen verbintenis.',
  },
  teaserCta: 'Bekijk de volledige vergelijking',
};

const de: PricingContent = {
  meta: {
    title: 'STRIVN Preise | Ein Monat Semi-Pro gratis bei der Anmeldung',
    description:
      'Vier Stufen, Zeile für Zeile verglichen. Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Karte. Die Performance-Stufe übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie noch von Hand machen.',
  },
  hero: {
    kicker: 'PREISE',
    title: 'Der letzte Kilometer zwischen Ihrem GPS-Export und Ihrer Entscheidung.',
    sub: 'Vier Stufen. Die kostenlose trägt ein Team eine ganze Saison. Die Performance-Stufe übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie noch von Hand machen.',
  },
  trial: {
    label: 'TESTPHASE',
    title: 'Ein Monat Semi-Pro, gratis bei der Anmeldung.',
    body: 'Jedes neue Konto startet 30 Tage auf der Performance-Stufe, ohne Karte und ohne etwas erfragen zu müssen. Danach kehrt es von selbst zum kostenlosen Plan zurück, und es wird nichts abgebucht.',
  },
  plans: {
    kicker: 'VIER STUFEN',
    title: 'Jede Stufe trägt die vorige mit.',
    note: 'Keine bezahlte Stufe ist bislang im Verkauf. Legen Sie Ihr Konto an: die Testphase setzt Sie einen Monat auf Semi-Pro, und wir sagen Bescheid, sobald der Verkauf öffnet.',
    perMonth: '/ Monat',
    billedYearly: 'Abgerechnet {total} pro Jahr',
    monthsFree: '{count} Monate gratis',
    fullMonthlyLabel: 'Monatlich',
    freePeriod: 'für immer',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Jetzt verfügbar',
        promise: 'Ein Team am Laufen halten',
        qualifier: 'Sie sind allein mit einem Team, und ohne Budget, das Sie erfragen könnten.',
        features: [
          'Ein Team, unbegrenzt Spieler, ein Staff-Platz',
          'Training, Spiel, Ruhe, Besprechung, Aufgabe, Teambuilding',
          'Aufgebote, Anwesenheiten, Kader',
          'Spieler-App, Morgen-Check-in, RPE',
          'Live-Spiel, die letzten 5 Spiele in der Historie',
          'Trainingsergebnisse und Coach-Fazit',
          'Krankenzimmer, Taktik, Berichte und Einzelprogramme',
          '20 Übungen, 3 Taktiktafeln, 3 Vorlagen',
          '60 Aufrufe des KI-Assistenten pro Monat',
        ],
        cta: 'Konto anlegen',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Bald im Verkauf',
        promise: 'Nicht jede Woche alles neu eingeben',
        qualifier: 'Sie spielen dieselben Einheiten erneut und bauen sie jedes Mal neu auf.',
        inherits: 'Alles aus Free, plus:',
        features: [
          'Unbegrenzte Übungsbibliothek',
          'Unbegrenzte Taktiktafeln und Vorlagen',
          'Vollständige Spielhistorie',
          'Einzeltraining und Regeneration im Kalender',
          'Ein zweiter Staff-Platz: Ihr Athletiktrainer neben Ihnen',
          '400 Aufrufe des KI-Assistenten pro Monat',
        ],
        cta: 'Konto anlegen',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Die Performance-Stufe',
        promise: 'Das GPS mit dem Rest verschränken',
        qualifier: 'Sie exportieren bereits GPS und verschränken es von Hand in Excel.',
        inherits: 'Alles aus Amateur, plus:',
        features: [
          'GPS-Import per CSV, unabhängig vom Anbieter',
          'Schwellen je Spieler, Ziele und Bänder: die Abweichung ist sichtbar, sie wird nicht mehr gerechnet.',
          'GPS, RPE und Wellness auf demselben Block, ohne die Tabelle am Sonntagabend.',
          'Kraft, Leistungstests und medizinisches Board',
          'Synchronisation von Wearables',
          'WhatsApp direkt, automatische Erinnerungen und Check-ins',
          'Unbegrenzt Staff-Plätze',
          '2.000 KI-Aufrufe und 3.000 WhatsApp-Nachrichten pro Monat',
        ],
        cta: 'Konto anlegen',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Auf Anfrage',
        quotePrice: 'Individuell',
        promise: 'Bis auf die Übung hinunter',
        qualifier: 'Mehrere Teams mit GPS, eine Performance-Abteilung, und Daten, die heraus müssen.',
        inherits: 'Alles aus Semi-Pro, plus:',
        features: [
          'Unbegrenzte Anzahl an Teams',
          'WhatsApp- und KI-Volumen im Vertrag festgelegt',
          'Umfang und Begleitung nach Maß',
          'In Vorbereitung: Anbindungen an GPS-Systeme am Markt, öffentliche API, Übungssignatur',
        ],
        cta: 'Mit dem Team sprechen',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'KI-ASSISTENT',
    title: 'Der Assistent zählt Züge, keine Pauschale.',
    body:
      'Jede Stufe öffnet ein monatliches Kontingent an Aufrufen des Assistenten, das jeden Monat neu beginnt. Ein Aufruf ist ein Gesprächszug, keine technische Anfrage, und der Einstieg schöpft aus demselben Zähler.',
    points: [
      '60 Züge pro Monat ab dem kostenlosen Plan. Niemand zahlt für eine Funktion, die er nie ausprobiert hat.',
      '400 bei Amateur, 2.000 bei Semi-Pro, ohne Deckel bei Pro.',
      'Das Kontingent beginnt jeden Monat neu.',
    ],
    note: 'Diese Kontingente sind Arbeitswerte. Wir richten sie an der tatsächlichen Nutzung aus, statt sie aus Prinzip zu verteidigen.',
  },
  matrix: {
    kicker: 'VERGLEICH',
    title: 'Was sich von Stufe zu Stufe wirklich ändert.',
    caption: 'Die vier STRIVN-Stufen im Vergleich, Zeile für Zeile.',
    scrollHint: 'Tabelle scrollt horizontal.',
    yes: 'Enthalten',
    no: 'Nicht enthalten',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Team und Kalender',
      daily: 'Der Alltag des Staffs',
      performance: 'Performance',
      volumes: 'Monatliche Kontingente',
      upcoming: 'In Vorbereitung, bei Pro',
    },
    rows: {
      teams: 'Teams',
      players: 'Spieler je Team',
      staffSeats: 'Staff-Plätze, Inhaber inbegriffen',
      eventsCore: 'Training, Spiel, Ruhe, Besprechung, Aufgabe, Teambuilding',
      eventsIndividual: 'Einzeltraining, Regeneration',
      eventsPerf: 'Kraft, Leistungstest, Behandlung',
      convocations: 'Aufgebote, Anwesenheiten, Kader',
      portal: 'Spieler-App, Morgen-Check-in, RPE',
      injuries: 'Krankenzimmer und Verletzungsverfolgung',
      sessionResults: 'Trainingsergebnisse und Coach-Fazit',
      liveMatch: 'Live-Spiel',
      reports: 'Berichte und automatische Berichte',
      messageDrafts: 'Erzeugte Nachrichten zum Einfügen in die Gruppe',
      individualPrograms: 'Einzelprogramme',
      matchHistory: 'Spielhistorie',
      exerciseLibrary: 'Übungen in der Bibliothek',
      tacticalBoards: 'Taktiktafeln',
      boardTemplates: 'Tafelvorlagen',
      gpsImport: 'GPS-Import per CSV, unabhängig vom Anbieter',
      load: 'Externe Belastung, Zonen, Schwellen je Spieler und Ziele',
      crossing: 'GPS, RPE und Wellness verschränkt',
      strength: 'Kraft: Katalog, Programme und Runner',
      medicalBoard: 'Medizinisches Board und Behandlungsblöcke',
      physicalTests: 'Leistungstests',
      wearables: 'Synchronisation von Wearables',
      whatsappDirect: 'WhatsApp-Nachrichten direkt an die Spieler',
      automations: 'Automatische Aufgebot-Erinnerungen und Check-ins',
      aiCalls: 'Aufrufe des KI-Assistenten, pro Monat',
      whatsappIncluded: 'Enthaltene WhatsApp-Nachrichten, pro Monat',
      gpsConnectors: 'Anbindungen an GPS-Systeme am Markt',
      publicApi: 'Öffentliche API',
      exerciseSignature: 'Übungssignatur',
    },
    cells: {
      unlimited: 'Unbegrenzt',
      several: 'Mehrere',
      last5: 'Letzte 5',
      full: 'Vollständig',
      onQuote: 'Auf Anfrage',
      upcoming: 'In Vorbereitung',
    },
  },
  downgrade: {
    kicker: 'HERUNTERSTUFEN',
    title: 'Ihre Daten werden nie als Geisel genommen.',
    body:
      'Wir sperren das Anlegen, nie das Lesen. Ein Team, das eine Stufe absteigt, behält den Zugang zu allem, was es erzeugt hat: der vom Physio gesetzte Behandlungsblock bleibt im Kalender, die vergangene Krafteinheit bleibt einsehbar, der bestätigte GPS-Import bleibt sichtbar. Ein Aufstieg öffnet alles wieder, so wie es war.',
    closesTitle: 'Was schließt',
    closes: [
      'Ein Ereignis der höheren Stufe anlegen',
      'Neue GPS-Daten importieren',
      'Eine Krafteinheit verordnen',
      'Einen Staff-Platz über das Limit hinaus einladen',
    ],
    staysTitle: 'Was offen bleibt',
    stays: [
      'Die gesamte Historie einsehen',
      'Ihre Daten exportieren',
      'Löschen, was Ihnen gehört',
      'Den bereits vorhandenen Staff behalten',
    ],
  },
  faq: {
    kicker: 'FRAGEN',
    title: 'Was man uns vor der Unterschrift fragt.',
    body: 'Die Antworten gelten für alle vier Stufen, sofern nicht anders vermerkt.',
    contactTitle: 'Eine Frage, die diese Seite nicht abdeckt?',
    contactBody: 'Schreiben Sie uns. Wir antworten selbst, und eine präzise Frage ist besser als ein Formular.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Was passiert am Ende des Testmonats?',
        a: 'Das Konto kehrt von selbst zum kostenlosen Plan zurück. Es wird nichts abgebucht, es wurde nie eine Karte verlangt, und alles, was Sie während der Testphase erzeugt haben, bleibt lesbar. Drei Tage vorher melden wir uns, damit das Datum niemanden überrascht.',
      },
      {
        q: 'Ist der kostenlose Plan zeitlich begrenzt?',
        a: 'Nein. Er ist im Umfang begrenzt — ein Team, ein Staff-Platz, 20 Übungen, 3 Taktiktafeln, die letzten 5 Spiele in der Historie — nie in der Dauer. Er läuft nicht ab und verlangt keine Karte.',
      },
      {
        q: 'Warum 25 € und dann 249 €?',
        a: 'Weil die beiden Stufen nicht dasselbe verkaufen. Amateur ist die Logistik des Staffs, aus der Tasche eines Coachs bezahlt: sie hebt die Limits und öffnet einen zweiten Staff-Platz, sie öffnet kein einziges Modul. Semi-Pro ist eine Performance-Plattform auf einem Klubbudget, und es ist die Stufe, ab der Ihr GPS etwas einbringt. Dazwischen liegt kein größeres Produkt, sondern ein anderer Beruf.',
      },
      {
        q: 'Warum ist der gezeigte Preis der Jahrestarif?',
        a: 'Weil es der niedrigste Betrag ist, zu dem die Stufe tatsächlich zu haben ist. Der Monatstarif steht daneben, durchgestrichen, und die abgerechnete Jahressumme darunter. Jährlich zu zahlen bedeutet zwölf Monate zum Preis von zehn.',
      },
      {
        q: 'Was zählt auf die 20 Übungen?',
        a: 'Die Übungen, die Sie selbst anlegen. Der zentrale Kraftkatalog, von STRIVN gepflegt und für alle lesbar, zählt nicht auf Ihr Limit.',
      },
      {
        q: 'Kann ich mein GPS importieren, ohne den Anbieter zu wechseln?',
        a: 'Ja, per CSV, unabhängig vom System. STRIVN wertet die Kopfzeilen Ihrer Datei aus, statt ein Format zu erwarten, und merkt sich Ihre Spaltenzuordnung für den nächsten Import. Direkte Anbindungen an GPS-Systeme am Markt sind für die Pro-Stufe angekündigt und noch nicht ausgeliefert.',
      },
      {
        q: 'Wie werden die Aufrufe des KI-Assistenten gezählt?',
        a: 'In Gesprächszügen, nicht in technischen Anfragen: 60 pro Monat kostenlos, 400 bei Amateur, 2.000 bei Semi-Pro, ohne Deckel bei Pro. Das Kontingent beginnt jeden Monat neu, und der Einstieg schöpft aus demselben Zähler.',
      },
      {
        q: 'Was passiert, wenn ich eine Stufe absteige?',
        a: 'Sie behalten den Lesezugriff auf alles, was Sie erzeugt haben. Was schließt, ist das Anlegen: einen Block der höheren Stufe setzen, importieren, verordnen, über das Staff-Limit hinaus einladen. Der bereits vorhandene Staff bleibt unberührt.',
      },
      {
        q: 'Und ein Klub, der nicht per Karte zahlt?',
        a: 'Bestellschein und Rechnung, bei Semi-Pro und Pro. Auf der Ebene eines Saisonbudgets läuft die Freigabe selten über eine Karte, und darauf stellen wir uns ein.',
      },
    ],
  },
  cta: {
    title: 'Beginnen Sie mit Ihrer eigenen Saison.',
    sub: 'Legen Sie Ihr Konto in wenigen Minuten an: der erste Monat läuft auf der Semi-Pro-Stufe, ohne Karte. Wenn Sie bereits GPS exportieren, beginnt das schnellste Gespräch bei dem, was Sie noch von Hand verschränken.',
    primary: 'Konto anlegen',
    secondary: 'Zeigen Sie uns Ihr Excel',
    trust: 'Ohne Karte. Ohne Bindung.',
  },
  teaserCta: 'Den vollständigen Vergleich ansehen',
};

const pt: PricingContent = {
  meta: {
    title: 'Preços STRIVN | Um mês de Semi-Pro oferecido na inscrição',
    description:
      'Quatro níveis comparados linha a linha. Cada nova conta começa com 30 dias de Semi-Pro, sem cartão. O nível performance assume o cruzamento de GPS, RPE e wellness que ainda faz à mão.',
  },
  hero: {
    kicker: 'PREÇOS',
    title: 'O último quilómetro entre a sua exportação GPS e a sua decisão.',
    sub: 'Quatro níveis. O gratuito aguenta uma equipa uma época inteira. O nível performance assume o cruzamento de GPS, RPE e wellness que ainda faz à mão.',
  },
  trial: {
    label: 'PERÍODO DE TESTE',
    title: 'Um mês de Semi-Pro, oferecido na inscrição.',
    body: 'Cada nova conta começa no nível performance durante 30 dias, sem cartão e sem nada a pedir. No fim, a conta regressa sozinha ao plano gratuito e nada é cobrado.',
  },
  plans: {
    kicker: 'QUATRO NÍVEIS',
    title: 'Cada nível carrega o anterior.',
    note: 'Nenhum nível pago está ainda à venda. Crie a sua conta: o período de teste coloca-o em Semi-Pro durante um mês, e avisamos quando a venda abrir.',
    perMonth: '/ mês',
    billedYearly: 'Faturado {total} por ano',
    monthsFree: '{count} meses oferecidos',
    fullMonthlyLabel: 'Ao mês',
    freePeriod: 'para sempre',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponível agora',
        promise: 'Aguentar uma equipa',
        qualifier: 'Está sozinho com uma equipa, e sem orçamento para pedir.',
        features: [
          'Uma equipa, jogadores sem limite, um lugar de staff',
          'Treino, jogo, descanso, reunião, tarefa, team building',
          'Convocatórias, presenças, plantel',
          'App do jogador, check-in matinal, RPE',
          'Live match, os últimos 5 jogos no histórico',
          'Resultados de sessão e balanço do treinador',
          'Enfermaria, tática, relatórios e programas individuais',
          '20 exercícios, 3 quadros táticos, 3 modelos',
          '60 chamadas ao assistente de IA por mês',
        ],
        cta: 'Criar uma conta',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Brevemente à venda',
        promise: 'Deixar de reintroduzir tudo todas as semanas',
        qualifier: 'Repete as mesmas sessões e reconstrói-as de cada vez.',
        inherits: 'Tudo o do plano Free, mais:',
        features: [
          'Biblioteca de exercícios sem limite',
          'Quadros táticos e modelos sem limite',
          'Histórico de jogos completo',
          'Treino individual e recuperação no calendário',
          'Um segundo lugar de staff: o seu preparador físico consigo',
          '400 chamadas ao assistente de IA por mês',
        ],
        cta: 'Criar uma conta',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'O nível performance',
        promise: 'Cruzar o GPS com o resto',
        qualifier: 'Já exporta GPS, e cruza-o à mão no Excel.',
        inherits: 'Tudo o do plano Amateur, mais:',
        features: [
          'Importação GPS por CSV, seja qual for o fornecedor',
          'Limiares por jogador, alvos e bandas: o desvio vê-se, já não se calcula.',
          'GPS, RPE e wellness no mesmo bloco, sem a folha de cálculo de domingo à noite.',
          'Musculação, testes físicos e quadro médico',
          'Sincronização de wearables',
          'WhatsApp direto, lembretes e check-ins automáticos',
          'Lugares de staff sem limite',
          '2 000 chamadas de IA e 3 000 mensagens WhatsApp por mês',
        ],
        cta: 'Criar uma conta',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'A pedido',
        quotePrice: 'Sob consulta',
        promise: 'Descer ao nível do exercício',
        qualifier: 'Várias equipas com GPS, uma célula de performance, e dados que têm de sair.',
        inherits: 'Tudo o do plano Semi-Pro, mais:',
        features: [
          'Número de equipas ilimitado',
          'Volumes de WhatsApp e IA definidos em contrato',
          'Âmbito e acompanhamento à medida',
          'Em preparação: ligações aos GPS do mercado, API pública, assinatura de exercício',
        ],
        cta: 'Falar com a equipa',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'ASSISTENTE DE IA',
    title: 'O assistente conta-se em turnos, não em pacote.',
    body:
      'Cada nível abre uma dotação mensal de chamadas ao assistente, reposta todos os meses. Uma chamada é um turno de conversa, não um pedido técnico, e a primeira utilização puxa do mesmo contador.',
    points: [
      '60 turnos por mês já no plano gratuito. Ninguém paga por uma funcionalidade que nunca experimentou.',
      '400 no Amateur, 2 000 no Semi-Pro, sem limite no Pro.',
      'A dotação recomeça todos os meses.',
    ],
    note: 'Estas dotações são valores de trabalho. Vamos ajustá-las ao uso real em vez de as defender por princípio.',
  },
  matrix: {
    kicker: 'COMPARATIVO',
    title: 'O que muda mesmo de um nível para o outro.',
    caption: 'Os quatro níveis STRIVN comparados, linha a linha.',
    scrollHint: 'A tabela desliza na horizontal.',
    yes: 'Incluído',
    no: 'Não incluído',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Equipa e calendário',
      daily: 'O dia a dia do staff',
      performance: 'Performance',
      volumes: 'Dotações mensais',
      upcoming: 'Em preparação, no Pro',
    },
    rows: {
      teams: 'Equipas',
      players: 'Jogadores por equipa',
      staffSeats: 'Lugares de staff, proprietário incluído',
      eventsCore: 'Treino, jogo, descanso, reunião, tarefa, team building',
      eventsIndividual: 'Treino individual, recuperação',
      eventsPerf: 'Musculação, teste físico, tratamento',
      convocations: 'Convocatórias, presenças, plantel',
      portal: 'App do jogador, check-in matinal, RPE',
      injuries: 'Enfermaria e acompanhamento de lesões',
      sessionResults: 'Resultados de sessão e balanço do treinador',
      liveMatch: 'Live match',
      reports: 'Relatórios e relatórios automáticos',
      messageDrafts: 'Mensagens geradas para colar no grupo',
      individualPrograms: 'Programas individuais',
      matchHistory: 'Histórico de jogos',
      exerciseLibrary: 'Exercícios na biblioteca',
      tacticalBoards: 'Quadros táticos',
      boardTemplates: 'Modelos de quadros',
      gpsImport: 'Importação GPS por CSV, seja qual for o fornecedor',
      load: 'Carga externa, zonas, limiares por jogador e alvos',
      crossing: 'GPS, RPE e wellness cruzados',
      strength: 'Musculação: catálogo, programas e runner',
      medicalBoard: 'Quadro médico e blocos de tratamento',
      physicalTests: 'Testes físicos',
      wearables: 'Sincronização de wearables',
      whatsappDirect: 'Mensagens WhatsApp diretas aos jogadores',
      automations: 'Lembretes de convocatória e check-ins automáticos',
      aiCalls: 'Chamadas ao assistente de IA, por mês',
      whatsappIncluded: 'Mensagens WhatsApp incluídas, por mês',
      gpsConnectors: 'Ligações aos GPS do mercado',
      publicApi: 'API pública',
      exerciseSignature: 'Assinatura de exercício',
    },
    cells: {
      unlimited: 'Ilimitado',
      several: 'Várias',
      last5: 'Últimos 5',
      full: 'Completo',
      onQuote: 'Sob consulta',
      upcoming: 'Em preparação',
    },
  },
  downgrade: {
    kicker: 'DESCER DE NÍVEL',
    title: 'Os seus dados nunca ficam reféns.',
    body:
      'Bloqueamos a criação, nunca a leitura. Uma equipa que desce de nível mantém o acesso a tudo o que produziu: o bloco de tratamento marcado pelo fisioterapeuta continua no calendário, a sessão de musculação passada continua consultável, a importação GPS confirmada continua visível. Voltar a subir reabre tudo, tal como estava.',
    closesTitle: 'O que fecha',
    closes: [
      'Criar um evento do nível superior',
      'Importar novos dados GPS',
      'Prescrever uma sessão de musculação',
      'Convidar um lugar de staff acima do limite',
    ],
    staysTitle: 'O que continua aberto',
    stays: [
      'Consultar todo o seu histórico',
      'Exportar os seus dados',
      'Apagar o que lhe pertence',
      'Manter o staff que já está no lugar',
    ],
  },
  faq: {
    kicker: 'PERGUNTAS',
    title: 'O que nos perguntam antes de assinar.',
    body: 'As respostas valem para os quatro níveis, salvo indicação em contrário.',
    contactTitle: 'Uma pergunta que esta página não cobre?',
    contactBody: 'Escreva-nos. Respondemos nós próprios, e uma pergunta precisa vale mais do que um formulário.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'O que acontece no fim do mês de teste?',
        a: 'A conta regressa sozinha ao plano gratuito. Nada é cobrado, nunca foi pedido um cartão, e tudo o que produziu durante o teste continua legível. Avisamos três dias antes para que a data não apanhe ninguém de surpresa.',
      },
      {
        q: 'O plano gratuito é limitado no tempo?',
        a: 'Não. É limitado em volume — uma equipa, um lugar de staff, 20 exercícios, 3 quadros táticos, os últimos 5 jogos no histórico — nunca na duração. Não expira e não pede cartão.',
      },
      {
        q: 'Porquê 25 € e depois 249 €?',
        a: 'Porque os dois níveis não vendem a mesma coisa. O Amateur é a logística do staff, paga do bolso de um treinador: levanta os limites e abre um segundo lugar de staff, não abre módulo nenhum. O Semi-Pro é uma plataforma de performance com orçamento de clube, e é o nível onde o seu GPS começa a valer alguma coisa. Entre os dois não há um produto maior, há outro ofício.',
      },
      {
        q: 'Porque é que o preço mostrado é o anual?',
        a: 'Porque é o valor mais baixo pelo qual o nível se consegue realmente. O preço mensal está ao lado, riscado, e o total anual cobrado está por baixo. Pagar ao ano dá doze meses pelo preço de dez.',
      },
      {
        q: 'O que conta nos 20 exercícios?',
        a: 'Os exercícios que cria. O catálogo central de musculação, mantido pela STRIVN e legível por todos, não conta para o seu limite.',
      },
      {
        q: 'Posso importar o meu GPS sem mudar de fornecedor?',
        a: 'Sim, por CSV, seja qual for o sistema. A STRIVN analisa os cabeçalhos do seu ficheiro em vez de esperar um formato, e guarda o mapeamento das colunas para a importação seguinte. As ligações diretas aos GPS do mercado estão anunciadas no nível Pro e ainda não foram entregues.',
      },
      {
        q: 'Como se contam as chamadas ao assistente de IA?',
        a: 'Em turnos de conversa, não em pedidos técnicos: 60 por mês no gratuito, 400 no Amateur, 2 000 no Semi-Pro, sem limite no Pro. A dotação recomeça todos os meses, e a primeira utilização puxa do mesmo contador.',
      },
      {
        q: 'O que acontece se descer de nível?',
        a: 'Mantém o acesso de leitura a tudo o que produziu. O que fecha é a criação: marcar um bloco do nível superior, importar, prescrever, convidar acima do limite de staff. O staff que já está no lugar não se mexe.',
      },
      {
        q: 'E um clube que não paga com cartão?',
        a: 'Nota de encomenda e fatura, no Semi-Pro e no Pro. À escala de um orçamento de época, a aprovação passa raramente por um cartão, e contamos com isso.',
      },
    ],
  },
  cta: {
    title: 'Comece pela sua própria época.',
    sub: 'Crie a sua conta em minutos: o primeiro mês é no nível Semi-Pro, sem cartão. Se já exporta GPS, a conversa mais rápida começa por aquilo que ainda cruza à mão.',
    primary: 'Criar uma conta',
    secondary: 'Mostre-nos o seu Excel',
    trust: 'Sem cartão. Sem compromisso.',
  },
  teaserCta: 'Ver a comparação completa',
};

const es: PricingContent = {
  meta: {
    title: 'Precios STRIVN | Un mes de Semi-Pro gratis al registrarse',
    description:
      'Cuatro niveles comparados línea a línea. Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta. El nivel rendimiento asume el cruce de GPS, RPE y wellness que usted todavía hace a mano.',
  },
  hero: {
    kicker: 'PRECIOS',
    title: 'El último kilómetro entre su exportación GPS y su decisión.',
    sub: 'Cuatro niveles. El gratuito aguanta un equipo una temporada entera. El nivel rendimiento asume el cruce de GPS, RPE y wellness que usted todavía hace a mano.',
  },
  trial: {
    label: 'PRUEBA',
    title: 'Un mes de Semi-Pro, gratis al registrarse.',
    body: 'Cada cuenta nueva empieza en el nivel rendimiento durante 30 días, sin tarjeta y sin nada que pedir. Al terminar, la cuenta vuelve sola al plan gratuito y no se cobra nada.',
  },
  plans: {
    kicker: 'CUATRO NIVELES',
    title: 'Cada nivel carga con el anterior.',
    note: 'Ningún nivel de pago está todavía a la venta. Cree su cuenta: la prueba le pone en Semi-Pro durante un mes, y le avisamos cuando abra la venta.',
    perMonth: '/ mes',
    billedYearly: 'Facturado {total} al año',
    monthsFree: '{count} meses gratis',
    fullMonthlyLabel: 'Al mes',
    freePeriod: 'para siempre',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponible ahora',
        promise: 'Sacar adelante un equipo',
        qualifier: 'Está solo con un equipo, y sin presupuesto que pedir.',
        features: [
          'Un equipo, jugadores sin límite, un puesto de staff',
          'Entrenamiento, partido, descanso, reunión, tarea, team building',
          'Convocatorias, asistencias, plantilla',
          'App del jugador, check-in matinal, RPE',
          'Live match, los 5 últimos partidos en el histórico',
          'Resultados de sesión y balance del entrenador',
          'Enfermería, táctica, informes y programas individuales',
          '20 ejercicios, 3 pizarras tácticas, 3 plantillas',
          '60 llamadas al asistente de IA al mes',
        ],
        cta: 'Crear una cuenta',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Pronto a la venta',
        promise: 'Dejar de reescribirlo todo cada semana',
        qualifier: 'Repite las mismas sesiones y las reconstruye cada vez.',
        inherits: 'Todo el plan Free, y además:',
        features: [
          'Biblioteca de ejercicios sin límite',
          'Pizarras tácticas y plantillas sin límite',
          'Histórico de partidos completo',
          'Entrenamiento individual y recuperación en el calendario',
          'Un segundo puesto de staff: su preparador físico con usted',
          '400 llamadas al asistente de IA al mes',
        ],
        cta: 'Crear una cuenta',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'El nivel rendimiento',
        promise: 'Cruzar el GPS con lo demás',
        qualifier: 'Ya exporta GPS, y lo cruza a mano en Excel.',
        inherits: 'Todo el plan Amateur, y además:',
        features: [
          'Importación GPS por CSV, sea cual sea el proveedor',
          'Umbrales por jugador, objetivos y bandas: la desviación se ve, ya no se calcula.',
          'GPS, RPE y wellness en el mismo bloque, sin la hoja de cálculo del domingo por la noche.',
          'Fuerza, tests físicos y cuadro médico',
          'Sincronización de wearables',
          'WhatsApp directo, recordatorios y check-ins automáticos',
          'Puestos de staff sin límite',
          '2.000 llamadas de IA y 3.000 mensajes de WhatsApp al mes',
        ],
        cta: 'Crear una cuenta',
        kind: 'app',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Bajo petición',
        quotePrice: 'A medida',
        promise: 'Bajar al nivel del ejercicio',
        qualifier: 'Varios equipos con GPS, una célula de rendimiento, y datos que tienen que salir.',
        inherits: 'Todo el plan Semi-Pro, y además:',
        features: [
          'Número de equipos ilimitado',
          'Volúmenes de WhatsApp e IA fijados por contrato',
          'Alcance y acompañamiento a medida',
          'En preparación: conectores con los GPS del mercado, API pública, firma de ejercicio',
        ],
        cta: 'Hablar con el equipo',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'ASISTENTE DE IA',
    title: 'El asistente se cuenta en turnos, no en tarifa plana.',
    body:
      'Cada nivel abre una dotación mensual de llamadas al asistente, que vuelve a empezar cada mes. Una llamada es un turno de conversación, no una petición técnica, y la puesta en marcha bebe del mismo contador.',
    points: [
      '60 turnos al mes ya en el plan gratuito. Nadie paga por una función que nunca ha probado.',
      '400 en Amateur, 2.000 en Semi-Pro, sin tope en Pro.',
      'La dotación vuelve a empezar cada mes.',
    ],
    note: 'Estas dotaciones son cifras de trabajo. Las ajustaremos al uso real en vez de defenderlas por principio.',
  },
  matrix: {
    kicker: 'COMPARATIVA',
    title: 'Lo que cambia de verdad de un nivel a otro.',
    caption: 'Los cuatro niveles STRIVN comparados, línea a línea.',
    scrollHint: 'La tabla se desplaza en horizontal.',
    yes: 'Incluido',
    no: 'No incluido',
    planNames: { free: 'Free', amateur: 'Amateur', semi_pro: 'Semi-Pro', pro: 'Pro' },
    groups: {
      squad: 'Equipo y calendario',
      daily: 'El día a día del staff',
      performance: 'Rendimiento',
      volumes: 'Dotaciones mensuales',
      upcoming: 'En preparación, en Pro',
    },
    rows: {
      teams: 'Equipos',
      players: 'Jugadores por equipo',
      staffSeats: 'Puestos de staff, propietario incluido',
      eventsCore: 'Entrenamiento, partido, descanso, reunión, tarea, team building',
      eventsIndividual: 'Entrenamiento individual, recuperación',
      eventsPerf: 'Fuerza, test físico, tratamiento',
      convocations: 'Convocatorias, asistencias, plantilla',
      portal: 'App del jugador, check-in matinal, RPE',
      injuries: 'Enfermería y seguimiento de lesiones',
      sessionResults: 'Resultados de sesión y balance del entrenador',
      liveMatch: 'Live match',
      reports: 'Informes e informes automáticos',
      messageDrafts: 'Mensajes generados para pegar en el grupo',
      individualPrograms: 'Programas individuales',
      matchHistory: 'Histórico de partidos',
      exerciseLibrary: 'Ejercicios en la biblioteca',
      tacticalBoards: 'Pizarras tácticas',
      boardTemplates: 'Plantillas de pizarra',
      gpsImport: 'Importación GPS por CSV, sea cual sea el proveedor',
      load: 'Carga externa, zonas, umbrales por jugador y objetivos',
      crossing: 'GPS, RPE y wellness cruzados',
      strength: 'Fuerza: catálogo, programas y runner',
      medicalBoard: 'Cuadro médico y bloques de tratamiento',
      physicalTests: 'Tests físicos',
      wearables: 'Sincronización de wearables',
      whatsappDirect: 'Mensajes de WhatsApp directos a los jugadores',
      automations: 'Recordatorios de convocatoria y check-ins automáticos',
      aiCalls: 'Llamadas al asistente de IA, al mes',
      whatsappIncluded: 'Mensajes de WhatsApp incluidos, al mes',
      gpsConnectors: 'Conectores con los GPS del mercado',
      publicApi: 'API pública',
      exerciseSignature: 'Firma de ejercicio',
    },
    cells: {
      unlimited: 'Ilimitado',
      several: 'Varios',
      last5: 'Últimos 5',
      full: 'Completo',
      onQuote: 'Bajo petición',
      upcoming: 'En preparación',
    },
  },
  downgrade: {
    kicker: 'BAJAR DE NIVEL',
    title: 'Sus datos nunca quedan retenidos.',
    body:
      'Bloqueamos la creación, nunca la lectura. Un equipo que baja de nivel conserva el acceso a todo lo que ha producido: el bloque de tratamiento que puso el fisio sigue en el calendario, la sesión de fuerza pasada sigue consultable, la importación GPS confirmada sigue visible. Volver a subir lo reabre todo, tal cual.',
    closesTitle: 'Lo que se cierra',
    closes: [
      'Crear un evento del nivel superior',
      'Importar nuevos datos GPS',
      'Prescribir una sesión de fuerza',
      'Invitar un puesto de staff por encima del límite',
    ],
    staysTitle: 'Lo que sigue abierto',
    stays: [
      'Consultar todo su histórico',
      'Exportar sus datos',
      'Borrar lo que le pertenece',
      'Conservar el staff que ya está',
    ],
  },
  faq: {
    kicker: 'PREGUNTAS',
    title: 'Lo que nos preguntan antes de firmar.',
    body: 'Las respuestas valen para los cuatro niveles, salvo mención contraria.',
    contactTitle: '¿Una pregunta que esta página no cubre?',
    contactBody: 'Escríbanos. Respondemos nosotros mismos, y una pregunta precisa vale más que un formulario.',
    email: 'hello@strivn.net',
    items: [
      {
        q: '¿Qué pasa al final del mes de prueba?',
        a: 'La cuenta vuelve sola al plan gratuito. No se cobra nada, nunca se pidió una tarjeta, y todo lo que produjo durante la prueba sigue siendo legible. Avisamos tres días antes para que la fecha no sorprenda a nadie.',
      },
      {
        q: '¿El plan gratuito está limitado en el tiempo?',
        a: 'No. Está limitado en volumen — un equipo, un puesto de staff, 20 ejercicios, 3 pizarras tácticas, los 5 últimos partidos en el histórico — nunca en duración. No caduca y no pide tarjeta.',
      },
      {
        q: '¿Por qué 25 € y luego 249 €?',
        a: 'Porque los dos niveles no venden lo mismo. Amateur es la logística del staff, pagada del bolsillo de un entrenador: levanta los límites y abre un segundo puesto de staff, no abre ningún módulo. Semi-Pro es una plataforma de rendimiento con presupuesto de club, y es el nivel donde su GPS empieza a servir para algo. Entre los dos no hay un producto más grande, hay otro oficio.',
      },
      {
        q: '¿Por qué el precio mostrado es el anual?',
        a: 'Porque es el importe más bajo al que el nivel se consigue de verdad. La tarifa mensual está al lado, tachada, y el total anual cobrado, debajo. Pagar al año sale a doce meses por el precio de diez.',
      },
      {
        q: '¿Qué cuenta dentro de los 20 ejercicios?',
        a: 'Los ejercicios que usted crea. El catálogo central de fuerza, mantenido por STRIVN y legible por todos, no cuenta para su límite.',
      },
      {
        q: '¿Puedo importar mi GPS sin cambiar de proveedor?',
        a: 'Sí, por CSV, sea cual sea el sistema. STRIVN analiza las cabeceras de su archivo en lugar de esperar un formato, y recuerda el mapeo de columnas para la siguiente importación. Los conectores directos con los GPS del mercado están anunciados en el nivel Pro y todavía no se han entregado.',
      },
      {
        q: '¿Cómo se cuentan las llamadas al asistente de IA?',
        a: 'En turnos de conversación, no en peticiones técnicas: 60 al mes en gratuito, 400 en Amateur, 2.000 en Semi-Pro, sin tope en Pro. La dotación vuelve a empezar cada mes, y la puesta en marcha bebe del mismo contador.',
      },
      {
        q: '¿Qué pasa si bajo de nivel?',
        a: 'Conserva el acceso de lectura a todo lo que ha producido. Lo que se cierra es la creación: poner un bloque del nivel superior, importar, prescribir, invitar por encima del límite de staff. El staff que ya está no se mueve.',
      },
      {
        q: '¿Y un club que no paga con tarjeta?',
        a: 'Pedido y factura, en Semi-Pro y Pro. A escala de un presupuesto de temporada, la aprobación pasa pocas veces por una tarjeta, y lo tenemos en cuenta.',
      },
    ],
  },
  cta: {
    title: 'Empiece por su propia temporada.',
    sub: 'Cree su cuenta en unos minutos: el primer mes es en el nivel Semi-Pro, sin tarjeta. Si ya exporta GPS, la conversación más rápida empieza por lo que todavía cruza a mano.',
    primary: 'Crear una cuenta',
    secondary: 'Muéstrenos su Excel',
    trust: 'Sin tarjeta. Sin compromiso.',
  },
  teaserCta: 'Ver la comparativa completa',
};

export const pricingContent: Record<Locale, PricingContent> = { fr, en, nl, de, pt, es };
