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
  | 'wearables' | 'automations'
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
    title: 'Tarifs STRIVN | 30 jours de Semi-Pro offerts à l’inscription',
    description:
      'Comparez les quatre paliers ligne par ligne. Chaque nouveau compte démarre avec 30 jours de Semi-Pro, sans carte. Le Semi-Pro reprend le croisement GPS, RPE et wellness que vous faites à la main.',
  },
  hero: {
    kicker: 'TARIFS',
    title: 'Démarrez gratuitement, croisez le GPS.',
    sub: 'Quatre paliers. Le gratuit fait tourner une équipe toute la saison. Le Semi-Pro reprend le croisement GPS, RPE et wellness que vous faites à la main.',
  },
  trial: {
    label: 'ESSAI',
    title: 'Testez le Semi-Pro pendant 30 jours, sans carte.',
    body: 'Chaque nouveau compte démarre au Semi-Pro, sans carte bancaire et sans validation du club. À l’échéance, il repasse au gratuit tout seul et vous gardez l’accès à tout ce que vous avez produit.',
  },
  plans: {
    kicker: 'QUATRE PALIERS',
    title: 'Montez de palier, gardez tout le précédent.',
    note: 'Les paliers payants ouvrent à la vente prochainement. Créez votre compte, l’essai vous met au Semi-Pro pendant 30 jours, et nous vous prévenons à l’ouverture.',
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
        promise: 'Faites tourner une équipe',
        qualifier: 'Vous encadrez une équipe seul, sans budget à demander.',
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
        promise: 'Arrêtez de tout ressaisir chaque semaine',
        qualifier: 'Vous rejouez les mêmes séances et vous les reconstruisez à chaque fois.',
        inherits: 'Tout le plan Free, plus :',
        features: [
          'Bibliothèque d’exercices sans plafond',
          'Tableaux tactiques et modèles sans plafond',
          'Historique de matchs complet',
          'Entraînement individuel et récupération au calendrier',
          'Une seconde place de staff, pour votre préparateur',
          '400 appels à l’assistant IA par mois',
        ],
        cta: 'Créer un compte',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Le palier performance',
        promise: 'Croisez le GPS avec le reste',
        qualifier: 'Vous exportez déjà du GPS, et vous le recroisez à la main dans Excel.',
        inherits: 'Tout le plan Amateur, plus :',
        features: [
          'Import GPS par CSV, quel que soit le fournisseur',
          'Seuils par joueur, cibles et bandes, écart calculé pour vous',
          'GPS, RPE et wellness croisés sur le même créneau',
          'Musculation, tests physiques et tableau médical',
          'Synchronisation des objets connectés',
          'Relances et check-ins automatiques par WhatsApp',
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
        promise: 'Descendez au niveau de l’exercice',
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
    title: 'Comptez l’assistant en tours de conversation.',
    body:
      'Chaque palier ouvre une dotation mensuelle d’appels à l’assistant, remise à zéro chaque mois. Un appel vaut un tour de conversation, et la prise en main puise au même compteur.',
    points: [
      '60 tours par mois dès le plan gratuit, pour essayer avant de payer.',
      '400 à l’Amateur, 2 000 au Semi-Pro, sans plafond au Pro.',
      'La dotation repart à zéro chaque mois.',
    ],
    note: 'Ces dotations sont des valeurs de travail. Nous les recalerons sur l’usage réel des premiers mois.',
  },
  matrix: {
    kicker: 'COMPARATIF',
    title: 'Comparez les quatre paliers ligne par ligne.',
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
    title: 'Redescendez de palier, gardez tout votre historique.',
    body:
      'Nous verrouillons la création et laissons la lecture ouverte, sur les quatre paliers. Une équipe qui redescend garde l’accès à tout ce qu’elle a produit : créneaux de soins posés par le kiné, séances de musculation passées, imports GPS confirmés. Remonter d’un palier rouvre la création, telle quelle.',
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
    title: 'Trouvez la réponse avant de choisir votre palier.',
    body: 'Les réponses valent pour les quatre paliers, sauf mention contraire.',
    contactTitle: 'Posez votre question à l’équipe.',
    contactBody: 'Écrivez-nous. Nous répondons nous-mêmes, et nous vous disons ce qui est déjà livré.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Que se passe-t-il après les 30 jours d’essai ?',
        a: 'Le compte repasse au plan gratuit tout seul, et votre facture reste à zéro. Nous prévenons trois jours avant l’échéance, et tout ce que vous avez produit reste consultable.',
      },
      {
        q: 'Le plan gratuit est-il limité dans le temps ?',
        a: 'Le gratuit tient toute la saison, puis la suivante, sans carte bancaire. Il est limité en volume : une équipe, une place de staff, 20 exercices, 3 tableaux tactiques, les 5 derniers matchs en historique.',
      },
      {
        q: 'Pourquoi 25 € puis 249 € ?',
        a: 'Les deux paliers vendent deux métiers différents. L’Amateur couvre la logistique du staff, payée par un coach de sa poche. Il lève les plafonds et ouvre une seconde place de staff. Le Semi-Pro ouvre la performance sur un budget de club, avec l’import GPS et le croisement qui va avec.',
      },
      {
        q: 'Pourquoi le prix affiché est-il le tarif annuel ?',
        a: 'Parce que c’est le montant le plus bas auquel le palier se prend réellement. Le tarif mensuel est écrit à côté, barré, et le total annuel prélevé est écrit dessous. Payer à l’année revient à douze mois pour le prix de dix.',
      },
      {
        q: 'Qu’est-ce qui compte dans les 20 exercices ?',
        a: 'Seuls les exercices que vous créez comptent. Le catalogue de musculation central, maintenu par STRIVN, reste lisible par tout le monde en dehors de votre plafond.',
      },
      {
        q: 'Puis-je importer mon GPS sans changer de fournisseur ?',
        a: 'Oui, par CSV, quel que soit le système. STRIVN lit les en-têtes de votre fichier et retient la correspondance de vos colonnes pour les imports suivants. Les connecteurs directs vers les GPS du marché sont prévus au palier Pro, livraison à venir.',
      },
      {
        q: 'Comment se comptent les appels à l’assistant IA ?',
        a: 'Un tour de conversation vaut un appel : 60 par mois au gratuit, 400 à l’Amateur, 2 000 au Semi-Pro, sans plafond au Pro. La dotation repart à zéro chaque mois, et la prise en main puise au même compteur.',
      },
      {
        q: 'Que se passe-t-il si je redescends de palier ?',
        a: 'Vous gardez l’accès en lecture à tout ce que vous avez produit. Ce qui ferme, c’est la création : poser un créneau du palier supérieur, importer, prescrire, inviter au-delà du plafond de staff. Le staff déjà en place garde son accès.',
      },
      {
        q: 'Un club peut-il payer sur facture ?',
        a: 'Oui, bon de commande et facture, sur le Semi-Pro et le Pro. Un budget de saison se valide par la comptabilité du club, et nous travaillons avec ce circuit.',
      },
    ],
  },
  cta: {
    title: 'Commencez par votre propre saison.',
    sub: 'Créez votre compte en quelques minutes. Les 30 premiers jours sont au Semi-Pro, sans carte bancaire. Si vous exportez déjà du GPS, montrez-nous le tableur que vous recroisez à la main.',
    primary: 'Créer un compte',
    secondary: 'Montrez-nous votre Excel',
    trust: 'Sans carte bancaire. Sans engagement.',
  },
  teaserCta: 'Voir le détail des offres',
};

const en: PricingContent = {
  meta: {
    title: 'STRIVN pricing | 30 days of Semi-Pro free when you sign up',
    description:
      'Compare four tiers line by line. Every new account starts on 30 days of Semi-Pro, without a card. Semi-Pro takes over the GPS, RPE and wellness crossing you do by hand.',
  },
  hero: {
    kicker: 'PRICING',
    title: 'Start free, cross your GPS from the first month.',
    sub: 'Four tiers. The free one runs a team for a whole season. Semi-Pro takes over the GPS, RPE and wellness crossing you do by hand.',
  },
  trial: {
    label: 'TRIAL',
    title: 'Try Semi-Pro for 30 days, without a card.',
    body: 'Every new account starts on Semi-Pro, without a card and without club approval. At the end it returns to the free plan on its own, and you keep access to everything you produced.',
  },
  plans: {
    kicker: 'FOUR TIERS',
    title: 'Step up a tier, keep everything below it.',
    note: 'Paid tiers open for sale soon. Create your account, the trial puts you on Semi-Pro for 30 days, and we tell you when the sale opens.',
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
        qualifier: 'You run one team on your own, without a budget to ask for.',
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
          'A second staff seat for your S&C coach',
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
          'Per-player thresholds, targets and bands, with the gap calculated for you',
          'GPS, RPE and wellness crossed on the same slot',
          'Strength, physical tests and the medical board',
          'Wearable sync',
          'Automatic reminders and check-ins over WhatsApp',
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
    title: 'Count the assistant in turns of conversation.',
    body:
      'Every tier opens a monthly allowance of assistant calls, reset each month. A call is worth one turn of conversation, and getting started draws on the same counter.',
    points: [
      '60 turns a month from the free plan on, so you try before you pay.',
      '400 on Amateur, 2,000 on Semi-Pro, uncapped on Pro.',
      'The allowance resets every month.',
    ],
    note: 'These allowances are working figures. We will recalibrate them on the real usage of the first months.',
  },
  matrix: {
    kicker: 'COMPARISON',
    title: 'Compare the four tiers row by row.',
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
    title: 'Step down a tier, keep your whole history.',
    body:
      'We lock creation and leave reading open, on all four tiers. A team that steps down keeps access to everything it produced: treatment slots booked by the physio, past strength sessions, confirmed GPS imports. Stepping back up reopens creation, exactly as it was.',
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
    title: 'Find your answer before you choose a tier.',
    body: 'The answers hold for all four tiers unless stated otherwise.',
    contactTitle: 'Ask the team your question.',
    contactBody: 'Write to us. We answer ourselves, and we tell you what is already shipped.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'What happens after the 30 trial days?',
        a: 'The account returns to the free plan on its own, and your invoice stays at zero. We warn you three days before the date, and everything you produced stays readable.',
      },
      {
        q: 'Is the free plan time-limited?',
        a: 'The free plan runs a whole season, then the next one, without a card. It is capped by volume: one team, one staff seat, 20 exercises, 3 tactical boards, the last 5 matches in history.',
      },
      {
        q: 'Why €25 and then €249?',
        a: 'The two tiers sell two different jobs. Amateur covers the staff’s logistics, paid out of a coach’s pocket. It lifts the caps and opens a second staff seat. Semi-Pro opens performance on a club budget, with GPS import and the crossing that goes with it.',
      },
      {
        q: 'Why is the price shown the annual one?',
        a: 'Because it is the lowest figure the tier can actually be had for. The monthly rate sits beside it, struck through, and the yearly total charged is written underneath. Paying yearly comes to twelve months for the price of ten.',
      },
      {
        q: 'What counts towards the 20 exercises?',
        a: 'Only the exercises you create count. The central strength catalogue, maintained by STRIVN, stays readable by everyone outside your cap.',
      },
      {
        q: 'Can I import my GPS without changing vendor?',
        a: 'Yes, by CSV, whichever the system. STRIVN reads your file’s headers and remembers your column matching for the next import. Direct connectors to market GPS systems are planned on the Pro tier, delivery to come.',
      },
      {
        q: 'How are AI assistant calls counted?',
        a: 'One turn of conversation is one call: 60 a month on free, 400 on Amateur, 2,000 on Semi-Pro, uncapped on Pro. The allowance resets every month, and getting started draws on the same counter.',
      },
      {
        q: 'What happens if I step down a tier?',
        a: 'You keep read access to everything you produced. What closes is creation: booking a slot from the tier above, importing, prescribing, inviting beyond the staff cap. The staff already in place keeps its access.',
      },
      {
        q: 'Can a club pay on invoice?',
        a: 'Yes, purchase order and invoice, on Semi-Pro and Pro. A season budget is approved through the club’s accounts, and we work with that route.',
      },
    ],
  },
  cta: {
    title: 'Start with your own season.',
    sub: 'Create your account in minutes. The first 30 days are on Semi-Pro, without a card. If you already export GPS, show us the spreadsheet you cross by hand.',
    primary: 'Create an account',
    secondary: 'Show us your Excel',
    trust: 'Without a card. Without a commitment.',
  },
  teaserCta: 'See the full comparison',
};

const nl: PricingContent = {
  meta: {
    title: 'STRIVN-tarieven | 30 dagen Semi-Pro gratis bij inschrijving',
    description:
      'Vergelijk vier niveaus, regel voor regel. Elk nieuw account start met 30 dagen Semi-Pro, zonder kaart. Semi-Pro neemt de kruising van GPS, RPE en wellness over die u met de hand doet.',
  },
  hero: {
    kicker: 'TARIEVEN',
    title: 'Start gratis, kruis uw GPS vanaf de eerste maand.',
    sub: 'Vier niveaus. Het gratis niveau draagt een team een heel seizoen. Semi-Pro neemt de kruising van GPS, RPE en wellness over die u met de hand doet.',
  },
  trial: {
    label: 'PROEFPERIODE',
    title: 'Test Semi-Pro 30 dagen, zonder kaart.',
    body: 'Elk nieuw account start op Semi-Pro, zonder kaart en zonder goedkeuring van de club. Op de vervaldag keert het vanzelf terug naar het gratis plan en houdt u toegang tot alles wat u maakte.',
  },
  plans: {
    kicker: 'VIER NIVEAUS',
    title: 'Ga een niveau hoger en houd alles daaronder.',
    note: 'Betaalde niveaus komen binnenkort te koop. Maak uw account aan, de proefperiode zet u 30 dagen op Semi-Pro, en wij verwittigen u zodra de verkoop opent.',
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
        promise: 'Houd een team draaiende',
        qualifier: 'U leidt één team alleen, zonder budget om te vragen.',
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
        promise: 'Stop met elke week alles opnieuw ingeven',
        qualifier: 'U speelt dezelfde sessies opnieuw en bouwt ze telkens opnieuw op.',
        inherits: 'Alles uit Free, plus:',
        features: [
          'Onbeperkte oefeningenbibliotheek',
          'Onbeperkte tactische borden en sjablonen',
          'Volledige wedstrijdgeschiedenis',
          'Individuele training en recuperatie in de agenda',
          'Een tweede stafplaats voor uw fysieke trainer',
          '400 oproepen naar de AI-assistent per maand',
        ],
        cta: 'Account aanmaken',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Het performance-niveau',
        promise: 'Kruis de GPS met de rest',
        qualifier: 'U exporteert al GPS, en u kruist het met de hand in Excel.',
        inherits: 'Alles uit Amateur, plus:',
        features: [
          'GPS-import via CSV, ongeacht de leverancier',
          'Drempels per speler, doelen en banden, met het verschil al berekend',
          'GPS, RPE en wellness gekruist op hetzelfde blok',
          'Krachttraining, fysieke testen en het medisch bord',
          'Synchronisatie van wearables',
          'Automatische herinneringen en check-ins via WhatsApp',
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
        promise: 'Daal af tot op oefeningniveau',
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
    title: 'Tel de assistent in gespreksbeurten.',
    body:
      'Elk niveau opent een maandelijks budget aan oproepen naar de assistent, dat elke maand opnieuw start. Eén oproep staat gelijk aan één gespreksbeurt, en de kennismaking put uit dezelfde teller.',
    points: [
      '60 beurten per maand vanaf het gratis plan, zodat u eerst probeert en dan betaalt.',
      '400 op Amateur, 2.000 op Semi-Pro, zonder plafond op Pro.',
      'Het budget start elke maand opnieuw.',
    ],
    note: 'Deze budgetten zijn werkcijfers. We stemmen ze af op het werkelijke gebruik van de eerste maanden.',
  },
  matrix: {
    kicker: 'VERGELIJKING',
    title: 'Vergelijk de vier niveaus regel voor regel.',
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
    title: 'Zak een niveau en houd uw hele geschiedenis.',
    body:
      'We vergrendelen het aanmaken en houden het lezen open, op alle vier de niveaus. Een team dat een niveau zakt, behoudt toegang tot alles wat het gemaakt heeft: verzorgingsblokken van de kine, voorbije krachtsessies, bevestigde GPS-imports. Weer opschalen opent het aanmaken opnieuw, precies zoals het was.',
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
    title: 'Vind het antwoord voordat u uw niveau kiest.',
    body: 'De antwoorden gelden voor alle vier de niveaus, tenzij anders vermeld.',
    contactTitle: 'Stel uw vraag aan het team.',
    contactBody: 'Schrijf ons. Wij antwoorden zelf, en wij zeggen u wat er al geleverd is.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Wat gebeurt er na de 30 proefdagen?',
        a: 'Het account keert vanzelf terug naar het gratis plan, en uw factuur blijft op nul. Drie dagen voor de vervaldag verwittigen we u, en alles wat u maakte blijft leesbaar.',
      },
      {
        q: 'Is het gratis plan beperkt in de tijd?',
        a: 'Het gratis plan draagt een heel seizoen, en het volgende, zonder kaart. Het is beperkt in volume: één team, één stafplaats, 20 oefeningen, 3 tactische borden, de laatste 5 wedstrijden in de geschiedenis.',
      },
      {
        q: 'Waarom 25 € en dan 249 €?',
        a: 'De twee niveaus verkopen twee verschillende vakken. Amateur dekt de logistiek van de staf, betaald uit de zak van een coach. Het licht de plafonds op en opent een tweede stafplaats. Semi-Pro opent de performance op een clubbudget, met GPS-import en de kruising die erbij hoort.',
      },
      {
        q: 'Waarom is de getoonde prijs het jaartarief?',
        a: 'Omdat dat het laagste bedrag is waarvoor het niveau echt te krijgen is. Het maandtarief staat ernaast, doorstreept, en het jaartotaal staat eronder. Per jaar betalen komt neer op twaalf maanden voor de prijs van tien.',
      },
      {
        q: 'Wat telt mee in die 20 oefeningen?',
        a: 'Alleen de oefeningen die u zelf aanmaakt tellen mee. De centrale krachtcatalogus, onderhouden door STRIVN, blijft leesbaar voor iedereen buiten uw plafond.',
      },
      {
        q: 'Kan ik mijn GPS importeren zonder van leverancier te wisselen?',
        a: 'Ja, via CSV, ongeacht het systeem. STRIVN leest de hoofdingen van uw bestand en onthoudt de overeenkomst van uw kolommen voor de volgende import. Rechtstreekse koppelingen met GPS-systemen op de markt staan gepland op Pro, levering volgt.',
      },
      {
        q: 'Hoe worden de oproepen naar de AI-assistent geteld?',
        a: 'Eén gespreksbeurt telt als één oproep: 60 per maand op gratis, 400 op Amateur, 2.000 op Semi-Pro, zonder plafond op Pro. Het budget start elke maand opnieuw, en de kennismaking put uit dezelfde teller.',
      },
      {
        q: 'Wat gebeurt er als ik een niveau zak?',
        a: 'U behoudt leestoegang tot alles wat u gemaakt hebt. Wat sluit, is het aanmaken: een blok van het hogere niveau plaatsen, importeren, voorschrijven, uitnodigen boven het stafplafond. De staf die er al is houdt zijn toegang.',
      },
      {
        q: 'Kan een club op factuur betalen?',
        a: 'Ja, bestelbon en factuur, op Semi-Pro en Pro. Een seizoensbudget wordt goedgekeurd via de boekhouding van de club, en met dat circuit werken wij.',
      },
    ],
  },
  cta: {
    title: 'Begin met uw eigen seizoen.',
    sub: 'Maak uw account in enkele minuten aan. De eerste 30 dagen staan op Semi-Pro, zonder kaart. Exporteert u al GPS, toon ons dan de spreadsheet die u met de hand kruist.',
    primary: 'Account aanmaken',
    secondary: 'Toon ons uw Excel',
    trust: 'Geen kaart. Geen verbintenis.',
  },
  teaserCta: 'Bekijk de volledige vergelijking',
};

const de: PricingContent = {
  meta: {
    title: 'STRIVN Preise | 30 Tage Semi-Pro gratis bei der Anmeldung',
    description:
      'Vergleichen Sie vier Stufen, Zeile für Zeile. Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Karte. Semi-Pro übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie von Hand machen.',
  },
  hero: {
    kicker: 'PREISE',
    title: 'Starten Sie gratis, verschränken Sie GPS ab Monat eins.',
    sub: 'Vier Stufen. Die kostenlose trägt ein Team eine ganze Saison. Semi-Pro übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie von Hand machen.',
  },
  trial: {
    label: 'TESTPHASE',
    title: 'Testen Sie Semi-Pro 30 Tage lang, ohne Karte.',
    body: 'Jedes neue Konto startet auf Semi-Pro, ohne Karte und ohne Freigabe des Klubs. Am Ende kehrt es von selbst zum kostenlosen Plan zurück, und Sie behalten Zugang zu allem, was Sie erzeugt haben.',
  },
  plans: {
    kicker: 'VIER STUFEN',
    title: 'Steigen Sie eine Stufe höher, behalten Sie alles.',
    note: 'Die bezahlten Stufen gehen demnächst in den Verkauf. Legen Sie Ihr Konto an, die Testphase setzt Sie 30 Tage auf Semi-Pro, und wir sagen Bescheid, sobald der Verkauf öffnet.',
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
        promise: 'Halten Sie ein Team am Laufen',
        qualifier: 'Sie führen ein Team allein, ohne Budget, das Sie erfragen könnten.',
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
        promise: 'Bauen Sie jede Woche nur einmal auf',
        qualifier: 'Sie spielen dieselben Einheiten erneut und bauen sie jedes Mal neu auf.',
        inherits: 'Alles aus Free, plus:',
        features: [
          'Unbegrenzte Übungsbibliothek',
          'Unbegrenzte Taktiktafeln und Vorlagen',
          'Vollständige Spielhistorie',
          'Einzeltraining und Regeneration im Kalender',
          'Ein zweiter Staff-Platz für Ihren Athletiktrainer',
          '400 Aufrufe des KI-Assistenten pro Monat',
        ],
        cta: 'Konto anlegen',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Die Performance-Stufe',
        promise: 'Verschränken Sie GPS mit dem Rest',
        qualifier: 'Sie exportieren bereits GPS und verschränken es von Hand in Excel.',
        inherits: 'Alles aus Amateur, plus:',
        features: [
          'GPS-Import per CSV, unabhängig vom Anbieter',
          'Schwellen je Spieler, Ziele und Bänder, Abweichung bereits gerechnet',
          'GPS, RPE und Wellness verschränkt auf demselben Block',
          'Kraft, Leistungstests und medizinisches Board',
          'Synchronisation von Wearables',
          'Automatische Erinnerungen und Check-ins über WhatsApp',
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
        promise: 'Gehen Sie bis auf die Übung',
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
    title: 'Zählen Sie den Assistenten in Gesprächszügen.',
    body:
      'Jede Stufe öffnet ein monatliches Kontingent an Aufrufen des Assistenten, das jeden Monat neu beginnt. Ein Aufruf entspricht einem Gesprächszug, und der Einstieg schöpft aus demselben Zähler.',
    points: [
      '60 Züge pro Monat ab dem kostenlosen Plan, damit Sie vor dem Bezahlen ausprobieren.',
      '400 bei Amateur, 2.000 bei Semi-Pro, ohne Deckel bei Pro.',
      'Das Kontingent beginnt jeden Monat neu.',
    ],
    note: 'Diese Kontingente sind Arbeitswerte. Wir richten sie an der tatsächlichen Nutzung der ersten Monate aus.',
  },
  matrix: {
    kicker: 'VERGLEICH',
    title: 'Vergleichen Sie die vier Stufen Zeile für Zeile.',
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
    title: 'Steigen Sie ab und behalten Sie Ihre Historie.',
    body:
      'Wir sperren das Anlegen und halten das Lesen offen, auf allen vier Stufen. Ein Team, das eine Stufe absteigt, behält den Zugang zu allem, was es erzeugt hat: Behandlungsblöcke des Physios, vergangene Krafteinheiten, bestätigte GPS-Importe. Ein Aufstieg öffnet das Anlegen wieder, genau wie zuvor.',
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
    title: 'Finden Sie die Antwort, bevor Sie Ihre Stufe wählen.',
    body: 'Die Antworten gelten für alle vier Stufen, sofern nicht anders vermerkt.',
    contactTitle: 'Stellen Sie dem Team Ihre Frage.',
    contactBody: 'Schreiben Sie uns. Wir antworten selbst, und wir sagen Ihnen, was bereits ausgeliefert ist.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Was passiert nach den 30 Testtagen?',
        a: 'Das Konto kehrt von selbst zum kostenlosen Plan zurück, und Ihre Rechnung bleibt bei null. Drei Tage vorher melden wir uns, und alles, was Sie erzeugt haben, bleibt lesbar.',
      },
      {
        q: 'Ist der kostenlose Plan zeitlich begrenzt?',
        a: 'Der kostenlose Plan trägt eine ganze Saison, dann die nächste, ohne Karte. Er ist im Umfang begrenzt: ein Team, ein Staff-Platz, 20 Übungen, 3 Taktiktafeln, die letzten 5 Spiele in der Historie.',
      },
      {
        q: 'Warum 25 € und dann 249 €?',
        a: 'Die beiden Stufen verkaufen zwei verschiedene Berufe. Amateur deckt die Logistik des Staffs, aus der Tasche eines Coachs bezahlt. Sie hebt die Limits und öffnet einen zweiten Staff-Platz. Semi-Pro öffnet die Performance auf einem Klubbudget, mit GPS-Import und der Verschränkung, die dazugehört.',
      },
      {
        q: 'Warum ist der gezeigte Preis der Jahrestarif?',
        a: 'Weil es der niedrigste Betrag ist, zu dem die Stufe tatsächlich zu haben ist. Der Monatstarif steht daneben, durchgestrichen, und die abgerechnete Jahressumme darunter. Jährlich zu zahlen bedeutet zwölf Monate zum Preis von zehn.',
      },
      {
        q: 'Was zählt auf die 20 Übungen?',
        a: 'Nur die Übungen, die Sie selbst anlegen, zählen. Der zentrale Kraftkatalog, von STRIVN gepflegt, bleibt für alle lesbar und liegt außerhalb Ihres Limits.',
      },
      {
        q: 'Kann ich mein GPS importieren, ohne den Anbieter zu wechseln?',
        a: 'Ja, per CSV, unabhängig vom System. STRIVN wertet die Kopfzeilen Ihrer Datei aus und merkt sich Ihre Spaltenzuordnung für den nächsten Import. Direkte Anbindungen an GPS-Systeme am Markt sind für die Pro-Stufe geplant, Auslieferung folgt.',
      },
      {
        q: 'Wie werden die Aufrufe des KI-Assistenten gezählt?',
        a: 'Ein Gesprächszug zählt als ein Aufruf: 60 pro Monat kostenlos, 400 bei Amateur, 2.000 bei Semi-Pro, ohne Deckel bei Pro. Das Kontingent beginnt jeden Monat neu, und der Einstieg schöpft aus demselben Zähler.',
      },
      {
        q: 'Was passiert, wenn ich eine Stufe absteige?',
        a: 'Sie behalten den Lesezugriff auf alles, was Sie erzeugt haben. Was schließt, ist das Anlegen: einen Block der höheren Stufe setzen, importieren, verordnen, über das Staff-Limit hinaus einladen. Der bereits vorhandene Staff bleibt unberührt.',
      },
      {
        q: 'Kann ein Klub auf Rechnung zahlen?',
        a: 'Ja, Bestellschein und Rechnung, bei Semi-Pro und Pro. Ein Saisonbudget wird über die Buchhaltung des Klubs freigegeben, und mit diesem Weg arbeiten wir.',
      },
    ],
  },
  cta: {
    title: 'Beginnen Sie mit Ihrer eigenen Saison.',
    sub: 'Legen Sie Ihr Konto in wenigen Minuten an. Die ersten 30 Tage laufen auf Semi-Pro, ohne Karte. Wenn Sie bereits GPS exportieren, zeigen Sie uns die Tabelle, die Sie von Hand verschränken.',
    primary: 'Konto anlegen',
    secondary: 'Zeigen Sie uns Ihr Excel',
    trust: 'Ohne Karte. Ohne Bindung.',
  },
  teaserCta: 'Den vollständigen Vergleich ansehen',
};

const pt: PricingContent = {
  meta: {
    title: 'Preços STRIVN | 30 dias de Semi-Pro oferecidos na inscrição',
    description:
      'Compare quatro níveis linha a linha. Cada nova conta começa com 30 dias de Semi-Pro, sem cartão. O Semi-Pro assume o cruzamento de GPS, RPE e wellness que faz à mão.',
  },
  hero: {
    kicker: 'PREÇOS',
    title: 'Comece grátis e cruze o GPS no primeiro mês.',
    sub: 'Quatro níveis. O gratuito aguenta uma equipa uma época inteira. O Semi-Pro assume o cruzamento de GPS, RPE e wellness que faz à mão.',
  },
  trial: {
    label: 'PERÍODO DE TESTE',
    title: 'Teste o Semi-Pro durante 30 dias, sem cartão.',
    body: 'Cada nova conta começa em Semi-Pro, sem cartão e sem aprovação do clube. No fim regressa sozinha ao plano gratuito e mantém o acesso a tudo o que produziu.',
  },
  plans: {
    kicker: 'QUATRO NÍVEIS',
    title: 'Suba de nível e leve tudo o anterior.',
    note: 'Os níveis pagos abrem à venda em breve. Crie a sua conta, o período de teste coloca-o em Semi-Pro durante 30 dias, e avisamos quando a venda abrir.',
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
        promise: 'Aguente uma equipa',
        qualifier: 'Gere uma equipa sozinho, sem orçamento para pedir.',
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
        promise: 'Deixe de reintroduzir tudo todas as semanas',
        qualifier: 'Repete as mesmas sessões e reconstrói-as de cada vez.',
        inherits: 'Tudo o do plano Free, mais:',
        features: [
          'Biblioteca de exercícios sem limite',
          'Quadros táticos e modelos sem limite',
          'Histórico de jogos completo',
          'Treino individual e recuperação no calendário',
          'Um segundo lugar de staff para o seu preparador físico',
          '400 chamadas ao assistente de IA por mês',
        ],
        cta: 'Criar uma conta',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'O nível performance',
        promise: 'Cruze o GPS com o resto',
        qualifier: 'Já exporta GPS, e cruza-o à mão no Excel.',
        inherits: 'Tudo o do plano Amateur, mais:',
        features: [
          'Importação GPS por CSV, seja qual for o fornecedor',
          'Limiares por jogador, alvos e bandas, com o desvio já calculado',
          'GPS, RPE e wellness cruzados no mesmo bloco',
          'Musculação, testes físicos e quadro médico',
          'Sincronização de wearables',
          'Lembretes e check-ins automáticos por WhatsApp',
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
        promise: 'Desça ao nível do exercício',
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
    title: 'Conte o assistente em turnos de conversa.',
    body:
      'Cada nível abre uma dotação mensal de chamadas ao assistente, reposta todos os meses. Uma chamada vale um turno de conversa, e a primeira utilização puxa do mesmo contador.',
    points: [
      '60 turnos por mês já no plano gratuito, para experimentar antes de pagar.',
      '400 no Amateur, 2 000 no Semi-Pro, sem limite no Pro.',
      'A dotação recomeça todos os meses.',
    ],
    note: 'Estas dotações são valores de trabalho. Vamos ajustá-las ao uso real dos primeiros meses.',
  },
  matrix: {
    kicker: 'COMPARATIVO',
    title: 'Compare os quatro níveis linha a linha.',
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
    title: 'Desça de nível e mantenha todo o histórico.',
    body:
      'Bloqueamos a criação e mantemos a leitura aberta, nos quatro níveis. Uma equipa que desce de nível mantém o acesso a tudo o que produziu: blocos de tratamento marcados pelo fisioterapeuta, sessões de musculação passadas, importações GPS confirmadas. Voltar a subir reabre a criação, tal como estava.',
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
    title: 'Encontre a resposta antes de escolher.',
    body: 'As respostas valem para os quatro níveis, salvo indicação em contrário.',
    contactTitle: 'Faça a sua pergunta à equipa.',
    contactBody: 'Escreva-nos. Respondemos nós próprios, e dizemos-lhe o que já está entregue.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'O que acontece no fim dos 30 dias de teste?',
        a: 'A conta regressa sozinha ao plano gratuito, e a sua fatura fica a zero. Avisamos três dias antes do fim, e tudo o que produziu continua legível.',
      },
      {
        q: 'O plano gratuito é limitado no tempo?',
        a: 'O plano gratuito aguenta uma época inteira, e a seguinte, sem cartão. É limitado em volume: uma equipa, um lugar de staff, 20 exercícios, 3 quadros táticos, os últimos 5 jogos no histórico.',
      },
      {
        q: 'Porquê 25 € e depois 249 €?',
        a: 'Os dois níveis vendem dois ofícios diferentes. O Amateur cobre a logística do staff, paga do bolso de um treinador. Levanta os limites e abre um segundo lugar de staff. O Semi-Pro abre a performance com orçamento de clube, com importação GPS e o cruzamento que vem com ela.',
      },
      {
        q: 'Porque é que o preço mostrado é o anual?',
        a: 'Porque é o valor mais baixo pelo qual o nível se consegue realmente. O preço mensal está ao lado, riscado, e o total anual cobrado está por baixo. Pagar ao ano dá doze meses pelo preço de dez.',
      },
      {
        q: 'O que conta nos 20 exercícios?',
        a: 'Contam apenas os exercícios que cria. O catálogo central de musculação, mantido pela STRIVN, continua legível por todos e fica fora do seu limite.',
      },
      {
        q: 'Posso importar o meu GPS sem mudar de fornecedor?',
        a: 'Sim, por CSV, seja qual for o sistema. A STRIVN lê os cabeçalhos do seu ficheiro e guarda a correspondência das colunas para a importação seguinte. As ligações diretas aos GPS do mercado estão previstas no nível Pro, com entrega ainda por chegar.',
      },
      {
        q: 'Como se contam as chamadas ao assistente de IA?',
        a: 'Um turno de conversa vale uma chamada: 60 por mês no gratuito, 400 no Amateur, 2 000 no Semi-Pro, sem limite no Pro. A dotação recomeça todos os meses, e a primeira utilização puxa do mesmo contador.',
      },
      {
        q: 'O que acontece se descer de nível?',
        a: 'Mantém o acesso de leitura a tudo o que produziu. O que fecha é a criação: marcar um bloco do nível superior, importar, prescrever, convidar acima do limite de staff. O staff que já está no lugar mantém o seu acesso.',
      },
      {
        q: 'Um clube pode pagar por fatura?',
        a: 'Sim, nota de encomenda e fatura, no Semi-Pro e no Pro. Um orçamento de época é aprovado pela contabilidade do clube, e trabalhamos com esse circuito.',
      },
    ],
  },
  cta: {
    title: 'Comece pela sua própria época.',
    sub: 'Crie a sua conta em minutos. Os primeiros 30 dias são em Semi-Pro, sem cartão. Se já exporta GPS, mostre-nos a folha de cálculo que cruza à mão.',
    primary: 'Criar uma conta',
    secondary: 'Mostre-nos o seu Excel',
    trust: 'Sem cartão. Sem compromisso.',
  },
  teaserCta: 'Ver a comparação completa',
};

const es: PricingContent = {
  meta: {
    title: 'Precios STRIVN | 30 días de Semi-Pro gratis al registrarse',
    description:
      'Compare cuatro niveles línea a línea. Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta. El Semi-Pro asume el cruce de GPS, RPE y wellness que usted hace a mano.',
  },
  hero: {
    kicker: 'PRECIOS',
    title: 'Empiece gratis y cruce el GPS el primer mes.',
    sub: 'Cuatro niveles. El gratuito aguanta un equipo una temporada entera. El Semi-Pro asume el cruce de GPS, RPE y wellness que usted hace a mano.',
  },
  trial: {
    label: 'PRUEBA',
    title: 'Pruebe el Semi-Pro 30 días, sin tarjeta.',
    body: 'Cada cuenta nueva empieza en Semi-Pro, sin tarjeta y sin aprobación del club. Al terminar vuelve sola al plan gratuito y usted conserva el acceso a todo lo que haya creado.',
  },
  plans: {
    kicker: 'CUATRO NIVELES',
    title: 'Suba de nivel y conserve todo el anterior.',
    note: 'Los niveles de pago abren a la venta pronto. Cree su cuenta, la prueba le pone en Semi-Pro durante 30 días, y le avisamos cuando abra la venta.',
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
        promise: 'Saque adelante un equipo',
        qualifier: 'Lleva un equipo solo, sin presupuesto que pedir.',
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
        promise: 'Deje de reescribirlo todo cada semana',
        qualifier: 'Repite las mismas sesiones y las reconstruye cada vez.',
        inherits: 'Todo el plan Free, y además:',
        features: [
          'Biblioteca de ejercicios sin límite',
          'Pizarras tácticas y plantillas sin límite',
          'Histórico de partidos completo',
          'Entrenamiento individual y recuperación en el calendario',
          'Un segundo puesto de staff para su preparador físico',
          '400 llamadas al asistente de IA al mes',
        ],
        cta: 'Crear una cuenta',
        kind: 'app',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'El nivel rendimiento',
        promise: 'Cruce el GPS con lo demás',
        qualifier: 'Ya exporta GPS, y lo cruza a mano en Excel.',
        inherits: 'Todo el plan Amateur, y además:',
        features: [
          'Importación GPS por CSV, sea cual sea el proveedor',
          'Umbrales por jugador, objetivos y bandas, con la desviación ya calculada',
          'GPS, RPE y wellness cruzados en el mismo bloque',
          'Fuerza, tests físicos y cuadro médico',
          'Sincronización de wearables',
          'Recordatorios y check-ins automáticos por WhatsApp',
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
        promise: 'Baje al nivel del ejercicio',
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
    title: 'Cuente el asistente en turnos de conversación.',
    body:
      'Cada nivel abre una dotación mensual de llamadas al asistente, que vuelve a empezar cada mes. Una llamada equivale a un turno de conversación, y la puesta en marcha bebe del mismo contador.',
    points: [
      '60 turnos al mes ya en el plan gratuito, para probar antes de pagar.',
      '400 en Amateur, 2.000 en Semi-Pro, sin tope en Pro.',
      'La dotación vuelve a empezar cada mes.',
    ],
    note: 'Estas dotaciones son cifras de trabajo. Las ajustaremos al uso real de los primeros meses.',
  },
  matrix: {
    kicker: 'COMPARATIVA',
    title: 'Compare los cuatro niveles línea a línea.',
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
    title: 'Baje de nivel y conserve todo su histórico.',
    body:
      'Bloqueamos la creación y dejamos la lectura abierta, en los cuatro niveles. Un equipo que baja de nivel conserva el acceso a todo lo que ha producido: bloques de tratamiento puestos por el fisio, sesiones de fuerza pasadas, importaciones GPS confirmadas. Volver a subir reabre la creación, tal cual.',
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
    title: 'Encuentre la respuesta antes de elegir su nivel.',
    body: 'Las respuestas valen para los cuatro niveles, salvo mención contraria.',
    contactTitle: 'Haga su pregunta al equipo.',
    contactBody: 'Escríbanos. Respondemos nosotros mismos, y le decimos qué está ya entregado.',
    email: 'hello@strivn.net',
    items: [
      {
        q: '¿Qué pasa al final de los 30 días de prueba?',
        a: 'La cuenta vuelve sola al plan gratuito, y su factura se queda en cero. Avisamos tres días antes del final, y todo lo que produjo sigue siendo legible.',
      },
      {
        q: '¿El plan gratuito está limitado en el tiempo?',
        a: 'El plan gratuito aguanta una temporada entera, y la siguiente, sin tarjeta. Está limitado en volumen: un equipo, un puesto de staff, 20 ejercicios, 3 pizarras tácticas, los 5 últimos partidos en el histórico.',
      },
      {
        q: '¿Por qué 25 € y luego 249 €?',
        a: 'Los dos niveles venden dos oficios distintos. Amateur cubre la logística del staff, pagada del bolsillo de un entrenador. Levanta los límites y abre un segundo puesto de staff. Semi-Pro abre el rendimiento con presupuesto de club, con importación GPS y el cruce que viene con ella.',
      },
      {
        q: '¿Por qué el precio mostrado es el anual?',
        a: 'Porque es el importe más bajo al que el nivel se consigue de verdad. La tarifa mensual está al lado, tachada, y el total anual cobrado, debajo. Pagar al año sale a doce meses por el precio de diez.',
      },
      {
        q: '¿Qué cuenta dentro de los 20 ejercicios?',
        a: 'Cuentan solo los ejercicios que usted crea. El catálogo central de fuerza, mantenido por STRIVN, sigue legible para todos y queda fuera de su límite.',
      },
      {
        q: '¿Puedo importar mi GPS sin cambiar de proveedor?',
        a: 'Sí, por CSV, sea cual sea el sistema. STRIVN lee las cabeceras de su archivo y recuerda la correspondencia de columnas para la siguiente importación. Los conectores directos con los GPS del mercado están previstos en el nivel Pro, con la entrega aún por llegar.',
      },
      {
        q: '¿Cómo se cuentan las llamadas al asistente de IA?',
        a: 'Un turno de conversación equivale a una llamada: 60 al mes en gratuito, 400 en Amateur, 2.000 en Semi-Pro, sin tope en Pro. La dotación vuelve a empezar cada mes, y la puesta en marcha bebe del mismo contador.',
      },
      {
        q: '¿Qué pasa si bajo de nivel?',
        a: 'Conserva el acceso de lectura a todo lo que ha producido. Lo que se cierra es la creación: poner un bloque del nivel superior, importar, prescribir, invitar por encima del límite de staff. El staff que ya está conserva su acceso.',
      },
      {
        q: '¿Puede un club pagar por factura?',
        a: 'Sí, pedido y factura, en Semi-Pro y Pro. Un presupuesto de temporada lo aprueba la contabilidad del club, y trabajamos con ese circuito.',
      },
    ],
  },
  cta: {
    title: 'Empiece por su propia temporada.',
    sub: 'Cree su cuenta en unos minutos. Los primeros 30 días son en Semi-Pro, sin tarjeta. Si ya exporta GPS, muéstrenos la hoja de cálculo que cruza a mano.',
    primary: 'Crear una cuenta',
    secondary: 'Muéstrenos su Excel',
    trust: 'Sin tarjeta. Sin compromiso.',
  },
  teaserCta: 'Ver la comparativa completa',
};

export const pricingContent: Record<Locale, PricingContent> = { fr, en, nl, de, pt, es };
