/**
 * Pricing page content — six locales.
 *
 * Source of truth for the four-tier architecture: `strivn-app/docs/STRATEGY.md`
 * §4 and `strivn-app/docs/specs/pricing-packaging-2026-08.md`. The build spec is
 * `docs/plans/2026-09-05-001-feat-website-pricing-page-plan.md`.
 *
 * Three rules this file exists to hold, and which a future edit must not undo:
 *
 * 1. **No CTA promises a self-serve purchase.** No paid plan is `is_selectable`
 *    in the app today, so Free routes to registration and every paid tier routes
 *    to a human. When that flips upstream, a plan's `kind` becomes `'app'` and
 *    nothing else moves.
 * 2. **No unpublished number appears here.** No AI credit count, no €/credit
 *    rate, no annual discount percentage, no WhatsApp message bundle. Those are
 *    undecided upstream, and a figure we would have to correct costs more than
 *    an absent one.
 * 3. **Pro carries no price**, including in JSON-LD.
 *
 * The comparison matrix is deliberately split in two: the *structure* (which
 * tier gets what) lives once in `MATRIX`, and each locale translates only row
 * labels and a closed vocabulary of cell words. Repeating 30 rows × 4 cells in
 * six locales would let a translation drift into a different commercial promise
 * without anything failing — here that is not expressible.
 */

export type Locale = 'fr' | 'en' | 'nl' | 'de' | 'pt' | 'es';

export const PRICING_LOCALES: Locale[] = ['fr', 'en', 'nl', 'de', 'pt', 'es'];

/** Local discriminants for this page only — NOT the app's plan codes. */
export type PlanCode = 'free' | 'amateur' | 'semi_pro' | 'pro';

/** `app` → registration. `waitlist` → the form. `contact` → mail. Never checkout. */
export type PlanCtaKind = 'app' | 'waitlist' | 'contact';

/** The closed vocabulary a matrix cell may hold besides yes/no. */
export type CellToken =
  | 'one'
  | 'three'
  | 'twenty'
  | 'unlimited'
  | 'several'
  | 'limited'
  | 'full'
  | 'allowance'
  | 'onQuote';

export type Cell = boolean | CellToken;

export type MatrixGroupKey = 'squad' | 'daily' | 'performance' | 'staff' | 'ai';

export type MatrixRowKey =
  | 'teams'
  | 'roster'
  | 'eventsCore'
  | 'eventsStaff'
  | 'eventsPerf'
  | 'convocations'
  | 'portal'
  | 'injuries'
  | 'sessionResults'
  | 'liveMatch'
  | 'matchHistory'
  | 'exerciseLibrary'
  | 'tacticalBoards'
  | 'sessionTemplates'
  | 'automations'
  | 'whatsapp'
  | 'gpsImport'
  | 'load'
  | 'crossing'
  | 'strength'
  | 'medicalBoard'
  | 'physicalTests'
  | 'wearables'
  | 'exerciseLevelGps'
  | 'gpsConnector'
  | 'multiStaff'
  | 'medicalAccess'
  | 'dashboards'
  | 'advancedAnalytics'
  | 'matchAnalysis'
  | 'api'
  | 'prioritySupport'
  | 'aiCredits'
  | 'aiTopup';

/** Cells are a fixed 4-tuple in plan order: free, amateur, semi_pro, pro. */
export interface MatrixRow {
  key: MatrixRowKey;
  cells: [Cell, Cell, Cell, Cell];
}

export interface MatrixGroup {
  key: MatrixGroupKey;
  rows: MatrixRow[];
}

/**
 * Who gets what. Derived from `pricing-packaging-2026-08.md` §2–§4, with one
 * documented departure: `wearables` sits at Semi-Pro, not Pro. The packaging
 * spec says Pro; `config/billing.php` says `club`; and the homepage has sold
 * WHOOP as available since `ad67ab0`. Decided 2026-09-05 — see the plan §2/§4.
 */
export const MATRIX: MatrixGroup[] = [
  {
    key: 'squad',
    rows: [
      { key: 'teams', cells: ['one', 'one', 'one', 'several'] },
      { key: 'roster', cells: ['unlimited', 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'eventsCore', cells: [true, true, true, true] },
      { key: 'eventsStaff', cells: [false, true, true, true] },
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
      { key: 'matchHistory', cells: ['limited', 'full', 'full', 'full'] },
      { key: 'exerciseLibrary', cells: ['twenty', 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'tacticalBoards', cells: ['three', 'unlimited', 'unlimited', 'unlimited'] },
      { key: 'sessionTemplates', cells: [false, true, true, true] },
      { key: 'automations', cells: [false, true, true, true] },
      { key: 'whatsapp', cells: [false, true, true, true] },
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
      { key: 'exerciseLevelGps', cells: [false, false, false, true] },
      { key: 'gpsConnector', cells: [false, false, false, 'onQuote'] },
    ],
  },
  {
    key: 'staff',
    rows: [
      { key: 'multiStaff', cells: [false, false, true, true] },
      { key: 'medicalAccess', cells: [false, false, true, true] },
      { key: 'dashboards', cells: [false, false, true, true] },
      { key: 'advancedAnalytics', cells: [false, false, false, true] },
      { key: 'matchAnalysis', cells: [false, false, false, true] },
      { key: 'api', cells: [false, false, false, true] },
      { key: 'prioritySupport', cells: [false, false, false, true] },
    ],
  },
  {
    key: 'ai',
    rows: [
      { key: 'aiCredits', cells: ['allowance', 'allowance', 'allowance', 'allowance'] },
      { key: 'aiTopup', cells: [true, true, true, true] },
    ],
  },
];

export interface PricingPlan {
  code: PlanCode;
  name: string;
  badge: string;
  /** Rendered as-is. Pro carries the "on request" wording, never a figure. */
  price: string;
  /** Absent when there is no recurring amount (Pro). */
  period?: string;
  /** Semi-Pro only, for now: the annual discount exists, its rate does not. */
  priceNote?: string;
  /** The ladder rung: Gérer → Entraîner → Monitorer → Optimiser. */
  promise: string;
  /** Second person, and the whole point of a pricing page: it tells a visitor
   *  which tier is theirs before they read a single feature line. */
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
  plans: { kicker: string; title: string; items: PricingPlan[]; note: string };
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
    kicker: string;
    title: string;
    body: string;
    closesTitle: string;
    closes: string[];
    staysTitle: string;
    stays: string[];
  };
  faq: {
    kicker: string;
    title: string;
    body: string;
    contactTitle: string;
    contactBody: string;
    email: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: { title: string; sub: string; primary: string; secondary: string; trust: string };
  /** Label of the homepage teaser's link through to this page. */
  teaserCta: string;
}

const fr: PricingContent = {
  meta: {
    title: 'Tarifs STRIVN | Gratuit pour une équipe, payant au GPS',
    description:
      'Quatre paliers comparés ligne par ligne. Le gratuit fait tourner une équipe toute une saison ; le palier performance reprend le croisement GPS, RPE et wellness que vous faites encore à la main.',
  },
  hero: {
    kicker: 'TARIFS',
    title: 'Le dernier kilomètre entre votre export GPS et votre décision.',
    sub: 'Quatre paliers. Le gratuit fait tourner une équipe toute une saison. Le palier performance reprend le croisement GPS, RPE et wellness que vous faites encore à la main.',
  },
  plans: {
    kicker: 'QUATRE PALIERS',
    title: 'Chaque palier reprend le précédent.',
    note: 'Le plan gratuit s’ouvre en deux minutes, sans carte bancaire. Les paliers payants passent encore par nous, le temps d’ouvrir le paiement en ligne. Écrivez-nous, nous ouvrons l’accès.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponible maintenant',
        price: '0 €',
        period: 'pour toujours',
        promise: 'Faire tourner une équipe',
        qualifier: 'Vous êtes seul avec une équipe, et aucun budget à demander.',
        features: [
          'Une équipe, joueurs et staff illimités',
          'Entraînements, matchs et repos au calendrier',
          'Convocations, présences, effectif',
          'App joueur, check-in matinal, RPE',
          'Live match, historique de statistiques limité',
          'Résultats de séance et bilan coach',
          'Infirmerie et suivi des blessures',
          '20 exercices, 3 tableaux tactiques',
          'Une dotation de crédits IA pour découvrir',
        ],
        cta: 'Créer mon équipe',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Ouverture progressive',
        price: '19 €',
        period: '/ mois',
        promise: 'Arrêter de tout ressaisir chaque semaine',
        qualifier: 'Vous rejouez les mêmes séances et vous les reconstruisez à chaque fois.',
        inherits: 'Tout le plan Free, plus :',
        features: [
          'Bibliothèque d’exercices illimitée',
          'Tableaux tactiques illimités',
          'Modèles et timeline de séance',
          'Réunions, tâches, team building, individuel, récupération',
          'Historique de statistiques complet',
          'Rappels de convocation automatiques',
          'Check-ins matinaux automatiques',
          'WhatsApp direct avec les joueurs',
        ],
        cta: 'Être prévenu',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Le palier performance',
        price: '249 €',
        period: '/ mois',
        priceNote: 'Remise à l’année',
        promise: 'Croiser le GPS avec le reste',
        qualifier: 'Vous exportez déjà du GPS, et vous le recroisez à la main dans Excel.',
        inherits: 'Tout le plan Amateur, plus :',
        features: [
          'Import GPS par CSV, quel que soit le fournisseur',
          'Seuils par joueur, cibles et bandes : l’écart se voit, il ne se calcule plus.',
          'GPS, RPE et wellness sur le même créneau, sans le tableur du dimanche soir.',
          'Musculation : catalogue, programmes et runner',
          'Tableau médical et créneaux de soins',
          'Tests physiques',
          'Plusieurs membres du staff, accès staff médical',
          'Dashboards coach et reporting club',
          'Synchronisation des objets connectés',
        ],
        cta: 'Parler à un préparateur',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Sur demande',
        price: 'Sur devis',
        promise: 'Descendre au niveau de l’exercice',
        qualifier: 'Plusieurs équipes équipées, une cellule performance, des données à faire sortir.',
        inherits: 'Tout le plan Semi-Pro, plus :',
        features: [
          'GPS au niveau de l’exercice : la signature de charge de chaque exercice',
          'Plusieurs équipes sous un même toit',
          'Connexion à votre fournisseur GPS, construite avec vous',
          'Analyse de match, scouting et recrutement',
          'Analytics avancées et IA de performance',
          'Accès API et export vers vos outils',
          'Support prioritaire',
        ],
        cta: 'Parler à l’équipe',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'CRÉDITS IA',
    title: 'L’IA est comptée à l’usage, pas au forfait.',
    body:
      'Chaque palier ouvre une dotation mensuelle de crédits. Une analyse coûte selon ce qu’elle mobilise : relire une semaine de charge ne coûte pas ce que coûte un rapport de saison.',
    points: [
      'Une dotation existe dès le plan Free. Personne ne paie pour une fonctionnalité qu’il n’a jamais essayée.',
      'La dotation repart à zéro chaque mois.',
      'Les gros utilisateurs rechargent sans changer de palier.',
    ],
    note: 'Le barème sera publié quand il sera calé sur nos coûts réels. Annoncer aujourd’hui des chiffres que nous devrions corriger demain coûterait plus cher que de n’en annoncer aucun.',
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
      staff: 'Staff et pilotage',
      ai: 'Intelligence artificielle',
    },
    rows: {
      teams: 'Équipes',
      roster: 'Joueurs et staff',
      eventsCore: 'Entraînement, match, repos',
      eventsStaff: 'Réunion, tâche, team building, individuel, récupération',
      eventsPerf: 'Musculation, test physique, soins',
      convocations: 'Convocations, présences, effectif',
      portal: 'App joueur, check-in matinal, RPE',
      injuries: 'Infirmerie et suivi des blessures',
      sessionResults: 'Résultats de séance et bilan coach',
      liveMatch: 'Live match',
      matchHistory: 'Historique de statistiques de match',
      exerciseLibrary: 'Bibliothèque d’exercices',
      tacticalBoards: 'Tableaux tactiques',
      sessionTemplates: 'Modèles et timeline de séance',
      automations: 'Rappels de convocation et check-ins automatiques',
      whatsapp: 'WhatsApp direct avec les joueurs',
      gpsImport: 'Import GPS par CSV, quel que soit le fournisseur',
      load: 'Charge externe, zones, seuils par joueur et cibles',
      crossing: 'Croisement GPS, RPE et wellness',
      strength: 'Musculation : catalogue, programmes et runner',
      medicalBoard: 'Tableau médical et créneaux de soins',
      physicalTests: 'Tests physiques',
      wearables: 'Synchronisation des objets connectés',
      exerciseLevelGps: 'GPS au niveau de l’exercice',
      gpsConnector: 'Connexion à votre fournisseur GPS',
      multiStaff: 'Plusieurs membres du staff',
      medicalAccess: 'Accès staff médical',
      dashboards: 'Dashboards coach et reporting club',
      advancedAnalytics: 'Analytics avancées et IA de performance',
      matchAnalysis: 'Analyse de match, scouting, recrutement',
      api: 'Accès API et export vers vos outils',
      prioritySupport: 'Support prioritaire',
      aiCredits: 'Crédits IA mensuels',
      aiTopup: 'Recharge à l’usage',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Illimité',
      several: 'Plusieurs',
      limited: 'Limité',
      full: 'Complet',
      allowance: 'Dotation',
      onQuote: 'Sur devis',
    },
  },
  downgrade: {
    kicker: 'RÉTROGRADATION',
    title: 'Vos données ne sont jamais prises en otage.',
    body:
      'Une équipe qui redescend de palier garde l’accès en lecture à tout ce qu’elle a produit. Le créneau de soins posé par le kiné reste au calendrier, la séance de musculation passée reste consultable, l’import GPS confirmé reste visible.',
    closesTitle: 'Ce qui ferme',
    closes: [
      'Créer un événement du palier supérieur',
      'Importer de nouvelles données GPS',
      'Prescrire une séance de musculation',
      'Ouvrir un accès staff supplémentaire',
    ],
    staysTitle: 'Ce qui reste ouvert',
    stays: [
      'Consulter tout votre historique',
      'Exporter vos données',
      'Supprimer ce qui vous appartient',
      'Tout retrouver en remontant de palier',
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
        q: 'Le plan gratuit est-il limité dans le temps ?',
        a: 'Non. Il est limité en volume — une équipe, 20 exercices, 3 tableaux tactiques — jamais en durée. Il n’expire pas et ne demande pas de carte bancaire.',
      },
      {
        q: 'Qu’est-ce qui compte dans les 20 exercices ?',
        a: 'Les exercices que vous créez. Le catalogue de musculation central, maintenu par STRIVN et lisible par tout le monde, ne compte pas dans votre plafond.',
      },
      {
        q: 'Puis-je importer mon GPS sans changer de fournisseur ?',
        a: 'Oui, par CSV, quel que soit le système. STRIVN analyse les en-têtes de votre fichier au lieu d’attendre un format précis, et retient le mapping de vos colonnes pour les imports suivants.',
      },
      {
        q: 'Que se passe-t-il si je redescends de palier ?',
        a: 'Vous gardez l’accès en lecture à tout ce que vous avez produit. Ce qui ferme, c’est la création : poser un créneau du palier supérieur, importer, prescrire. Consulter, exporter et supprimer restent ouverts.',
      },
      {
        q: 'Comment fonctionnent les crédits IA ?',
        a: 'Chaque palier ouvre une dotation mensuelle, remise à zéro chaque mois, et la consommation se fait à l’usage. Le barème sera publié quand il sera calé sur nos coûts réels.',
      },
      {
        q: 'Le prix est par équipe ou par club ?',
        a: 'Free, Amateur et Semi-Pro se souscrivent par équipe. Le palier Pro couvre plusieurs équipes sous un même toit, et se chiffre sur devis.',
      },
      {
        q: 'Pourquoi 19 € puis 249 € ?',
        a: 'Parce que les deux paliers ne vendent pas la même chose. L’Amateur, c’est la logistique du staff, payée par un coach de sa poche. Le Semi-Pro, c’est une plateforme de performance sur un budget de club, et c’est le palier où vos GPS commencent à servir à quelque chose. Entre les deux, il n’y a pas un produit plus gros, il y a un autre métier.',
      },
      {
        q: 'Y a-t-il un engagement ?',
        a: 'Mensuel, sans engagement de durée. Le Semi-Pro ouvre une remise à l’année pour les clubs qui préfèrent raisonner en budget de saison.',
      },
      {
        q: 'Et un club qui ne paie pas par carte bancaire ?',
        a: 'Bon de commande et facture, sur le Semi-Pro et le Pro. À l’échelle d’un budget de saison, la validation passe rarement par une carte, et nous en tenons compte.',
      },
    ],
  },
  cta: {
    title: 'Commencez par votre propre saison.',
    sub: 'Créez votre équipe en quelques minutes sur le plan gratuit. Si vous exportez déjà du GPS, la conversation la plus rapide commence par ce que vous recroisez encore à la main.',
    primary: 'Créer mon équipe gratuitement',
    secondary: 'Montrez-nous votre Excel',
    trust: 'Sans carte bancaire. Sans engagement.',
  },
  teaserCta: 'Voir le détail des offres',
};

const en: PricingContent = {
  meta: {
    title: 'STRIVN pricing | Free to run a team, paid when the GPS arrives',
    description:
      'Four tiers compared line by line. The free one runs a team for a whole season; the performance tier takes over the GPS, RPE and wellness crossing you still do by hand.',
  },
  hero: {
    kicker: 'PRICING',
    title: 'The last mile between your GPS export and your decision.',
    sub: 'Four tiers. The free one runs a team for a whole season. The performance tier takes over the GPS, RPE and wellness crossing you still do by hand.',
  },
  plans: {
    kicker: 'FOUR TIERS',
    title: 'Every tier carries the one below it.',
    note: 'The free plan opens in two minutes, no card. The paid tiers still go through us while we open online payment. Write to us and we open the access.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Available now',
        price: '€0',
        period: 'forever',
        promise: 'Run a team',
        qualifier: 'You are on your own with one team, and no budget to ask for.',
        features: [
          'One team, unlimited players and staff',
          'Training, matches and rest days on the calendar',
          'Call-ups, attendance, squad list',
          'Player app, morning check-in, RPE',
          'Live match, limited stats history',
          'Session results and coach debrief',
          'Injury room and injury tracking',
          '20 exercises, 3 tactical boards',
          'An AI credit allowance to try it on',
        ],
        cta: 'Create my team',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Opening gradually',
        price: '€19',
        period: '/ month',
        promise: 'Stop rebuilding the same week twice',
        qualifier: 'You run the same sessions again and rebuild them from scratch every time.',
        inherits: 'Everything in Free, plus:',
        features: [
          'Unlimited exercise library',
          'Unlimited tactical boards',
          'Session templates and timeline',
          'Meetings, tasks, team building, individual, recovery',
          'Full stats history',
          'Automatic call-up reminders',
          'Automatic morning check-ins',
          'Direct WhatsApp with players',
        ],
        cta: 'Keep me posted',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'The performance tier',
        price: '€249',
        period: '/ month',
        priceNote: 'Annual discount',
        promise: 'Cross the GPS with everything else',
        qualifier: 'You already export GPS, and you cross it by hand in Excel.',
        inherits: 'Everything in Amateur, plus:',
        features: [
          'GPS import by CSV, whichever the vendor',
          'Per-player thresholds, targets and bands: the gap shows, it is no longer calculated.',
          'GPS, RPE and wellness on the same slot, without the Sunday-night spreadsheet.',
          'Strength: catalogue, programmes and runner',
          'Medical board and treatment slots',
          'Physical tests',
          'Several staff members, medical staff access',
          'Coach dashboards and club reporting',
          'Wearable sync',
        ],
        cta: 'Talk to an S&C coach',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'On request',
        price: 'Custom',
        promise: 'Get down to the drill',
        qualifier: 'Several teams on GPS, a performance unit, and data that has to get out.',
        inherits: 'Everything in Semi-Pro, plus:',
        features: [
          'GPS at exercise level: the load signature of every drill',
          'Several teams under one roof',
          'A connection to your GPS vendor, built with you',
          'Match analysis, scouting and recruitment',
          'Advanced analytics and performance AI',
          'API access and export to your own tools',
          'Priority support',
        ],
        cta: 'Talk to the team',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'AI CREDITS',
    title: 'AI is metered by use, not by plan.',
    body:
      'Every tier opens a monthly credit allowance. An analysis costs what it draws on: re-reading a week of load does not cost what a season report costs.',
    points: [
      'An allowance exists from the Free plan on. Nobody pays for a feature they have never tried.',
      'The allowance resets every month.',
      'Heavy users top up without changing tier.',
    ],
    note: 'We publish the rate once it is calibrated on our real costs. Announcing figures today that we would have to correct tomorrow would cost more than announcing none.',
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
      staff: 'Staff and steering',
      ai: 'Artificial intelligence',
    },
    rows: {
      teams: 'Teams',
      roster: 'Players and staff',
      eventsCore: 'Training, match, rest',
      eventsStaff: 'Meeting, task, team building, individual, recovery',
      eventsPerf: 'Strength, physical test, treatment',
      convocations: 'Call-ups, attendance, squad list',
      portal: 'Player app, morning check-in, RPE',
      injuries: 'Injury room and injury tracking',
      sessionResults: 'Session results and coach debrief',
      liveMatch: 'Live match',
      matchHistory: 'Match stats history',
      exerciseLibrary: 'Exercise library',
      tacticalBoards: 'Tactical boards',
      sessionTemplates: 'Session templates and timeline',
      automations: 'Automatic call-up reminders and check-ins',
      whatsapp: 'Direct WhatsApp with players',
      gpsImport: 'GPS import by CSV, whichever the vendor',
      load: 'External load, zones, per-player thresholds and targets',
      crossing: 'GPS, RPE and wellness crossed',
      strength: 'Strength: catalogue, programmes and runner',
      medicalBoard: 'Medical board and treatment slots',
      physicalTests: 'Physical tests',
      wearables: 'Wearable sync',
      exerciseLevelGps: 'GPS at exercise level',
      gpsConnector: 'Connection to your GPS vendor',
      multiStaff: 'Several staff members',
      medicalAccess: 'Medical staff access',
      dashboards: 'Coach dashboards and club reporting',
      advancedAnalytics: 'Advanced analytics and performance AI',
      matchAnalysis: 'Match analysis, scouting, recruitment',
      api: 'API access and export to your tools',
      prioritySupport: 'Priority support',
      aiCredits: 'Monthly AI credits',
      aiTopup: 'Top up as you go',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Unlimited',
      several: 'Several',
      limited: 'Limited',
      full: 'Full',
      allowance: 'Allowance',
      onQuote: 'On request',
    },
  },
  downgrade: {
    kicker: 'STEPPING DOWN',
    title: 'Your data is never held hostage.',
    body:
      'A team that steps down a tier keeps read access to everything it produced. The treatment slot the physio booked stays on the calendar, the past strength session stays readable, the confirmed GPS import stays visible.',
    closesTitle: 'What closes',
    closes: [
      'Creating an event from the tier above',
      'Importing new GPS data',
      'Prescribing a strength session',
      'Opening another staff seat',
    ],
    staysTitle: 'What stays open',
    stays: [
      'Reading your whole history',
      'Exporting your data',
      'Deleting what belongs to you',
      'Finding it all again when you step back up',
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
        q: 'Is the free plan time-limited?',
        a: 'No. It is capped by volume — one team, 20 exercises, 3 tactical boards — never by time. It does not expire and it asks for no card.',
      },
      {
        q: 'What counts towards the 20 exercises?',
        a: 'The exercises you create. The central strength catalogue, maintained by STRIVN and readable by everyone, does not count against your cap.',
      },
      {
        q: 'Can I import my GPS without changing vendor?',
        a: 'Yes, by CSV, whichever the system. STRIVN reads your file’s headers instead of expecting one format, and remembers your column mapping for the next import.',
      },
      {
        q: 'What happens if I step down a tier?',
        a: 'You keep read access to everything you produced. What closes is creation: booking a slot from the tier above, importing, prescribing. Reading, exporting and deleting stay open.',
      },
      {
        q: 'How do AI credits work?',
        a: 'Every tier opens a monthly allowance, reset each month, and consumption follows usage. We publish the rate once it is calibrated on our real costs.',
      },
      {
        q: 'Is the price per team or per club?',
        a: 'Free, Amateur and Semi-Pro are taken per team. The Pro tier covers several teams under one roof and is quoted.',
      },
      {
        q: 'Why €19 and then €249?',
        a: 'Because the two tiers do not sell the same thing. Amateur is the staff’s logistics, paid out of a coach’s pocket. Semi-Pro is a performance platform on a club budget, and it is the tier where your GPS starts being worth something. Between them there is not a bigger product, there is a different job.',
      },
      {
        q: 'Is there a commitment?',
        a: 'Monthly, with no lock-in. Semi-Pro opens an annual discount for clubs that would rather think in season budgets.',
      },
      {
        q: 'What about a club that does not pay by card?',
        a: 'Purchase order and invoice, on Semi-Pro and Pro. At the scale of a season budget, approval rarely goes through a card, and we work with that.',
      },
    ],
  },
  cta: {
    title: 'Start with your own season.',
    sub: 'Create your team in minutes on the free plan. If you already export GPS, the fastest conversation starts with whatever you still cross by hand.',
    primary: 'Create my team for free',
    secondary: 'Show us your Excel',
    trust: 'No card. No commitment.',
  },
  teaserCta: 'See the full comparison',
};

const nl: PricingContent = {
  meta: {
    title: 'STRIVN-tarieven | Gratis voor één team, betalend zodra de GPS meekomt',
    description:
      'Vier niveaus, regel voor regel vergeleken. Het gratis niveau draagt een team een heel seizoen; het performance-niveau neemt de kruising van GPS, RPE en wellness over die u nog met de hand doet.',
  },
  hero: {
    kicker: 'TARIEVEN',
    title: 'De laatste kilometer tussen uw GPS-export en uw beslissing.',
    sub: 'Vier niveaus. Het gratis niveau draagt een team een heel seizoen. Het performance-niveau neemt de kruising van GPS, RPE en wellness over die u nog met de hand doet.',
  },
  plans: {
    kicker: 'VIER NIVEAUS',
    title: 'Elk niveau draagt het vorige mee.',
    note: 'Het gratis plan opent in twee minuten, zonder kaart. De betaalde niveaus lopen nog via ons, tot de online betaling openstaat. Schrijf ons, wij openen de toegang.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Nu beschikbaar',
        price: '€0',
        period: 'voor altijd',
        promise: 'Een team draaiende houden',
        qualifier: 'U staat er alleen voor met één team, en zonder budget om te vragen.',
        features: [
          'Eén team, onbeperkt spelers en staf',
          'Trainingen, wedstrijden en rustdagen in de agenda',
          'Selecties, aanwezigheden, spelerslijst',
          'Spelersapp, ochtendcheck-in, RPE',
          'Live match, beperkte statistiekgeschiedenis',
          'Sessieresultaten en coachverslag',
          'Ziekenboeg en blessureopvolging',
          '20 oefeningen, 3 tactische borden',
          'Een AI-krediet om te ontdekken',
        ],
        cta: 'Mijn team aanmaken',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Geleidelijke opening',
        price: '€19',
        period: '/ maand',
        promise: 'Niet elke week alles opnieuw ingeven',
        qualifier: 'U speelt dezelfde sessies opnieuw en bouwt ze telkens opnieuw op.',
        inherits: 'Alles uit Free, plus:',
        features: [
          'Onbeperkte oefeningenbibliotheek',
          'Onbeperkte tactische borden',
          'Sjablonen en tijdlijn van de sessie',
          'Vergaderingen, taken, teambuilding, individueel, recuperatie',
          'Volledige statistiekgeschiedenis',
          'Automatische selectieherinneringen',
          'Automatische ochtendcheck-ins',
          'Rechtstreeks WhatsApp met de spelers',
        ],
        cta: 'Houd mij op de hoogte',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Het performance-niveau',
        price: '€249',
        period: '/ maand',
        priceNote: 'Jaarkorting',
        promise: 'De GPS kruisen met de rest',
        qualifier: 'U exporteert al GPS, en u kruist het met de hand in Excel.',
        inherits: 'Alles uit Amateur, plus:',
        features: [
          'GPS-import via CSV, ongeacht de leverancier',
          'Drempels per speler, doelen en banden: het verschil is zichtbaar, niet meer te berekenen.',
          'GPS, RPE en wellness op hetzelfde blok, zonder de spreadsheet van zondagavond.',
          'Krachttraining: catalogus, programma’s en runner',
          'Medisch bord en verzorgingsblokken',
          'Fysieke testen',
          'Meerdere stafleden, toegang medische staf',
          'Coach-dashboards en clubrapportage',
          'Synchronisatie van wearables',
        ],
        cta: 'Spreek een fysieke trainer',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Op aanvraag',
        price: 'Op maat',
        promise: 'Afdalen tot op oefeningniveau',
        qualifier: 'Meerdere teams met GPS, een performancecel, en data die eruit moet.',
        inherits: 'Alles uit Semi-Pro, plus:',
        features: [
          'GPS op oefeningniveau: de belastingsignatuur van elke oefening',
          'Meerdere teams onder één dak',
          'Een koppeling met uw GPS-leverancier, samen gebouwd',
          'Wedstrijdanalyse, scouting en rekrutering',
          'Geavanceerde analytics en performance-AI',
          'API-toegang en export naar uw eigen tools',
          'Prioritaire ondersteuning',
        ],
        cta: 'Spreek het team',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'AI-KREDIETEN',
    title: 'AI wordt afgerekend op gebruik, niet op abonnement.',
    body:
      'Elk niveau opent een maandelijks kredietbudget. Een analyse kost wat ze aanspreekt: een week belasting herlezen kost niet wat een seizoensrapport kost.',
    points: [
      'Er is een budget vanaf het Free-plan. Niemand betaalt voor iets wat hij nooit geprobeerd heeft.',
      'Het budget start elke maand opnieuw.',
      'Intensieve gebruikers laden bij zonder van niveau te wisselen.',
    ],
    note: 'Het tarief publiceren we zodra het op onze echte kosten is afgestemd. Vandaag cijfers aankondigen die we morgen moeten corrigeren, kost meer dan er geen aankondigen.',
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
      staff: 'Staf en sturing',
      ai: 'Artificiële intelligentie',
    },
    rows: {
      teams: 'Teams',
      roster: 'Spelers en staf',
      eventsCore: 'Training, wedstrijd, rust',
      eventsStaff: 'Vergadering, taak, teambuilding, individueel, recuperatie',
      eventsPerf: 'Krachttraining, fysieke test, verzorging',
      convocations: 'Selecties, aanwezigheden, spelerslijst',
      portal: 'Spelersapp, ochtendcheck-in, RPE',
      injuries: 'Ziekenboeg en blessureopvolging',
      sessionResults: 'Sessieresultaten en coachverslag',
      liveMatch: 'Live match',
      matchHistory: 'Statistiekgeschiedenis van wedstrijden',
      exerciseLibrary: 'Oefeningenbibliotheek',
      tacticalBoards: 'Tactische borden',
      sessionTemplates: 'Sjablonen en tijdlijn van de sessie',
      automations: 'Automatische selectieherinneringen en check-ins',
      whatsapp: 'Rechtstreeks WhatsApp met de spelers',
      gpsImport: 'GPS-import via CSV, ongeacht de leverancier',
      load: 'Externe belasting, zones, drempels per speler en doelen',
      crossing: 'GPS, RPE en wellness gekruist',
      strength: 'Krachttraining: catalogus, programma’s en runner',
      medicalBoard: 'Medisch bord en verzorgingsblokken',
      physicalTests: 'Fysieke testen',
      wearables: 'Synchronisatie van wearables',
      exerciseLevelGps: 'GPS op oefeningniveau',
      gpsConnector: 'Koppeling met uw GPS-leverancier',
      multiStaff: 'Meerdere stafleden',
      medicalAccess: 'Toegang medische staf',
      dashboards: 'Coach-dashboards en clubrapportage',
      advancedAnalytics: 'Geavanceerde analytics en performance-AI',
      matchAnalysis: 'Wedstrijdanalyse, scouting, rekrutering',
      api: 'API-toegang en export naar uw tools',
      prioritySupport: 'Prioritaire ondersteuning',
      aiCredits: 'Maandelijkse AI-kredieten',
      aiTopup: 'Bijladen naar gebruik',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Onbeperkt',
      several: 'Meerdere',
      limited: 'Beperkt',
      full: 'Volledig',
      allowance: 'Budget',
      onQuote: 'Op aanvraag',
    },
  },
  downgrade: {
    kicker: 'TERUGSCHAKELEN',
    title: 'Uw gegevens worden nooit gegijzeld.',
    body:
      'Een team dat een niveau zakt, behoudt leestoegang tot alles wat het gemaakt heeft. Het verzorgingsblok van de kine blijft in de agenda staan, de voorbije krachtsessie blijft raadpleegbaar, de bevestigde GPS-import blijft zichtbaar.',
    closesTitle: 'Wat sluit',
    closes: [
      'Een evenement van het hogere niveau aanmaken',
      'Nieuwe GPS-gegevens importeren',
      'Een krachtsessie voorschrijven',
      'Een extra stafplaats openen',
    ],
    staysTitle: 'Wat open blijft',
    stays: [
      'Uw volledige geschiedenis raadplegen',
      'Uw gegevens exporteren',
      'Verwijderen wat van u is',
      'Alles terugvinden zodra u weer opschaalt',
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
        q: 'Is het gratis plan beperkt in de tijd?',
        a: 'Nee. Het is beperkt in volume — één team, 20 oefeningen, 3 tactische borden — nooit in duur. Het vervalt niet en vraagt geen kaart.',
      },
      {
        q: 'Wat telt mee in die 20 oefeningen?',
        a: 'De oefeningen die u zelf aanmaakt. De centrale krachtcatalogus, onderhouden door STRIVN en leesbaar voor iedereen, telt niet mee.',
      },
      {
        q: 'Kan ik mijn GPS importeren zonder van leverancier te wisselen?',
        a: 'Ja, via CSV, ongeacht het systeem. STRIVN analyseert de hoofdingen van uw bestand in plaats van één formaat te verwachten, en onthoudt uw kolommapping voor de volgende import.',
      },
      {
        q: 'Wat gebeurt er als ik een niveau zak?',
        a: 'U behoudt leestoegang tot alles wat u gemaakt hebt. Wat sluit, is het aanmaken: een blok van het hogere niveau plaatsen, importeren, voorschrijven. Raadplegen, exporteren en verwijderen blijven open.',
      },
      {
        q: 'Hoe werken de AI-kredieten?',
        a: 'Elk niveau opent een maandelijks budget dat elke maand opnieuw start, en het verbruik volgt het gebruik. Het tarief publiceren we zodra het op onze echte kosten is afgestemd.',
      },
      {
        q: 'Is de prijs per team of per club?',
        a: 'Free, Amateur en Semi-Pro neemt u per team. Het Pro-niveau dekt meerdere teams onder één dak en werkt op maat.',
      },
      {
        q: 'Waarom 19 € en dan 249 €?',
        a: 'Omdat de twee niveaus niet hetzelfde verkopen. Amateur is de logistiek van de staf, betaald uit de zak van een coach. Semi-Pro is een performanceplatform op een clubbudget, en het is het niveau waarop uw GPS iets begint op te leveren. Tussen de twee zit geen groter product, maar een ander vak.',
      },
      {
        q: 'Is er een verbintenis?',
        a: 'Maandelijks, zonder looptijd. Semi-Pro opent een jaarkorting voor clubs die liever in seizoensbudgetten denken.',
      },
      {
        q: 'En een club die niet met kaart betaalt?',
        a: 'Bestelbon en factuur, op Semi-Pro en Pro. Op de schaal van een seizoensbudget verloopt de goedkeuring zelden via een kaart, en daar houden wij rekening mee.',
      },
    ],
  },
  cta: {
    title: 'Begin met uw eigen seizoen.',
    sub: 'Maak uw team in enkele minuten aan op het gratis plan. Exporteert u al GPS, dan begint het snelste gesprek bij wat u nog met de hand kruist.',
    primary: 'Mijn team gratis aanmaken',
    secondary: 'Toon ons uw Excel',
    trust: 'Geen kaart. Geen verbintenis.',
  },
  teaserCta: 'Bekijk de volledige vergelijking',
};

const de: PricingContent = {
  meta: {
    title: 'STRIVN Preise | Kostenlos für ein Team, bezahlt sobald GPS dazukommt',
    description:
      'Vier Stufen, Zeile für Zeile verglichen. Die kostenlose trägt ein Team eine ganze Saison; die Performance-Stufe übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie noch von Hand machen.',
  },
  hero: {
    kicker: 'PREISE',
    title: 'Der letzte Kilometer zwischen Ihrem GPS-Export und Ihrer Entscheidung.',
    sub: 'Vier Stufen. Die kostenlose trägt ein Team eine ganze Saison. Die Performance-Stufe übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie noch von Hand machen.',
  },
  plans: {
    kicker: 'VIER STUFEN',
    title: 'Jede Stufe trägt die vorige mit.',
    note: 'Der kostenlose Plan öffnet in zwei Minuten, ohne Karte. Die bezahlten Stufen laufen noch über uns, bis die Online-Zahlung offen ist. Schreiben Sie uns, wir öffnen den Zugang.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Jetzt verfügbar',
        price: '0 €',
        period: 'für immer',
        promise: 'Ein Team am Laufen halten',
        qualifier: 'Sie sind allein mit einem Team, und ohne Budget, das Sie erfragen könnten.',
        features: [
          'Ein Team, unbegrenzt Spieler und Staff',
          'Training, Spiele und Ruhetage im Kalender',
          'Aufgebote, Anwesenheiten, Kader',
          'Spieler-App, Morgen-Check-in, RPE',
          'Live-Spiel, begrenzte Statistikhistorie',
          'Trainingsergebnisse und Coach-Fazit',
          'Krankenzimmer und Verletzungsverfolgung',
          '20 Übungen, 3 Taktiktafeln',
          'Ein KI-Guthaben zum Ausprobieren',
        ],
        cta: 'Mein Team anlegen',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Schrittweise Öffnung',
        price: '19 €',
        period: '/ Monat',
        promise: 'Nicht jede Woche alles neu eingeben',
        qualifier: 'Sie spielen dieselben Einheiten erneut und bauen sie jedes Mal neu auf.',
        inherits: 'Alles aus Free, plus:',
        features: [
          'Unbegrenzte Übungsbibliothek',
          'Unbegrenzte Taktiktafeln',
          'Vorlagen und Trainings-Timeline',
          'Besprechungen, Aufgaben, Teambuilding, Einzeltraining, Regeneration',
          'Vollständige Statistikhistorie',
          'Automatische Aufgebot-Erinnerungen',
          'Automatische Morgen-Check-ins',
          'WhatsApp direkt mit den Spielern',
        ],
        cta: 'Benachrichtigt werden',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'Die Performance-Stufe',
        price: '249 €',
        period: '/ Monat',
        priceNote: 'Jahresrabatt',
        promise: 'Das GPS mit dem Rest verschränken',
        qualifier: 'Sie exportieren bereits GPS und verschränken es von Hand in Excel.',
        inherits: 'Alles aus Amateur, plus:',
        features: [
          'GPS-Import per CSV, unabhängig vom Anbieter',
          'Schwellen je Spieler, Ziele und Bänder: die Abweichung ist sichtbar, sie wird nicht mehr gerechnet.',
          'GPS, RPE und Wellness auf demselben Block, ohne die Tabelle am Sonntagabend.',
          'Kraft: Katalog, Programme und Runner',
          'Medizinisches Board und Behandlungsblöcke',
          'Leistungstests',
          'Mehrere Staff-Mitglieder, Zugang für medizinischen Staff',
          'Coach-Dashboards und Klub-Reporting',
          'Synchronisation von Wearables',
        ],
        cta: 'Mit einem Athletiktrainer sprechen',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Auf Anfrage',
        price: 'Individuell',
        promise: 'Bis auf die Übung hinunter',
        qualifier: 'Mehrere Teams mit GPS, eine Performance-Abteilung, und Daten, die heraus müssen.',
        inherits: 'Alles aus Semi-Pro, plus:',
        features: [
          'GPS auf Übungsebene: die Belastungssignatur jeder Übung',
          'Mehrere Teams unter einem Dach',
          'Eine Anbindung an Ihren GPS-Anbieter, gemeinsam gebaut',
          'Spielanalyse, Scouting und Rekrutierung',
          'Erweiterte Analytics und Performance-KI',
          'API-Zugang und Export in Ihre eigenen Werkzeuge',
          'Priorisierter Support',
        ],
        cta: 'Mit dem Team sprechen',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'KI-GUTHABEN',
    title: 'KI wird nach Verbrauch abgerechnet, nicht pauschal.',
    body:
      'Jede Stufe öffnet ein monatliches Guthaben. Eine Analyse kostet, was sie beansprucht: eine Woche Belastung nachzulesen kostet nicht, was ein Saisonbericht kostet.',
    points: [
      'Ein Guthaben gibt es ab dem Free-Plan. Niemand zahlt für eine Funktion, die er nie ausprobiert hat.',
      'Das Guthaben beginnt jeden Monat neu.',
      'Intensive Nutzer laden nach, ohne die Stufe zu wechseln.',
    ],
    note: 'Den Tarif veröffentlichen wir, sobald er auf unseren echten Kosten beruht. Heute Zahlen anzukündigen, die wir morgen korrigieren müssten, kostet mehr, als keine anzukündigen.',
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
      staff: 'Staff und Steuerung',
      ai: 'Künstliche Intelligenz',
    },
    rows: {
      teams: 'Teams',
      roster: 'Spieler und Staff',
      eventsCore: 'Training, Spiel, Ruhe',
      eventsStaff: 'Besprechung, Aufgabe, Teambuilding, Einzeltraining, Regeneration',
      eventsPerf: 'Kraft, Leistungstest, Behandlung',
      convocations: 'Aufgebote, Anwesenheiten, Kader',
      portal: 'Spieler-App, Morgen-Check-in, RPE',
      injuries: 'Krankenzimmer und Verletzungsverfolgung',
      sessionResults: 'Trainingsergebnisse und Coach-Fazit',
      liveMatch: 'Live-Spiel',
      matchHistory: 'Statistikhistorie der Spiele',
      exerciseLibrary: 'Übungsbibliothek',
      tacticalBoards: 'Taktiktafeln',
      sessionTemplates: 'Vorlagen und Trainings-Timeline',
      automations: 'Automatische Aufgebot-Erinnerungen und Check-ins',
      whatsapp: 'WhatsApp direkt mit den Spielern',
      gpsImport: 'GPS-Import per CSV, unabhängig vom Anbieter',
      load: 'Externe Belastung, Zonen, Schwellen je Spieler und Ziele',
      crossing: 'GPS, RPE und Wellness verschränkt',
      strength: 'Kraft: Katalog, Programme und Runner',
      medicalBoard: 'Medizinisches Board und Behandlungsblöcke',
      physicalTests: 'Leistungstests',
      wearables: 'Synchronisation von Wearables',
      exerciseLevelGps: 'GPS auf Übungsebene',
      gpsConnector: 'Anbindung an Ihren GPS-Anbieter',
      multiStaff: 'Mehrere Staff-Mitglieder',
      medicalAccess: 'Zugang für medizinischen Staff',
      dashboards: 'Coach-Dashboards und Klub-Reporting',
      advancedAnalytics: 'Erweiterte Analytics und Performance-KI',
      matchAnalysis: 'Spielanalyse, Scouting, Rekrutierung',
      api: 'API-Zugang und Export in Ihre Werkzeuge',
      prioritySupport: 'Priorisierter Support',
      aiCredits: 'Monatliche KI-Guthaben',
      aiTopup: 'Nachladen nach Verbrauch',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Unbegrenzt',
      several: 'Mehrere',
      limited: 'Begrenzt',
      full: 'Vollständig',
      allowance: 'Guthaben',
      onQuote: 'Auf Anfrage',
    },
  },
  downgrade: {
    kicker: 'HERUNTERSTUFEN',
    title: 'Ihre Daten werden nie als Geisel genommen.',
    body:
      'Ein Team, das eine Stufe absteigt, behält den Lesezugriff auf alles, was es erzeugt hat. Der vom Physio gesetzte Behandlungsblock bleibt im Kalender, die vergangene Krafteinheit bleibt einsehbar, der bestätigte GPS-Import bleibt sichtbar.',
    closesTitle: 'Was schließt',
    closes: [
      'Ein Ereignis der höheren Stufe anlegen',
      'Neue GPS-Daten importieren',
      'Eine Krafteinheit verordnen',
      'Einen weiteren Staff-Zugang öffnen',
    ],
    staysTitle: 'Was offen bleibt',
    stays: [
      'Die gesamte Historie einsehen',
      'Ihre Daten exportieren',
      'Löschen, was Ihnen gehört',
      'Alles wiederfinden, sobald Sie aufsteigen',
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
        q: 'Ist der kostenlose Plan zeitlich begrenzt?',
        a: 'Nein. Er ist im Umfang begrenzt — ein Team, 20 Übungen, 3 Taktiktafeln — nie in der Dauer. Er läuft nicht ab und verlangt keine Karte.',
      },
      {
        q: 'Was zählt auf die 20 Übungen?',
        a: 'Die Übungen, die Sie selbst anlegen. Der zentrale Kraftkatalog, von STRIVN gepflegt und für alle lesbar, zählt nicht auf Ihr Limit.',
      },
      {
        q: 'Kann ich mein GPS importieren, ohne den Anbieter zu wechseln?',
        a: 'Ja, per CSV, unabhängig vom System. STRIVN wertet die Kopfzeilen Ihrer Datei aus, statt ein Format zu erwarten, und merkt sich Ihre Spaltenzuordnung für den nächsten Import.',
      },
      {
        q: 'Was passiert, wenn ich eine Stufe absteige?',
        a: 'Sie behalten den Lesezugriff auf alles, was Sie erzeugt haben. Was schließt, ist das Anlegen: einen Block der höheren Stufe setzen, importieren, verordnen. Einsehen, exportieren und löschen bleiben offen.',
      },
      {
        q: 'Wie funktionieren die KI-Guthaben?',
        a: 'Jede Stufe öffnet ein monatliches Guthaben, das jeden Monat neu beginnt, und der Verbrauch folgt der Nutzung. Den Tarif veröffentlichen wir, sobald er auf unseren echten Kosten beruht.',
      },
      {
        q: 'Gilt der Preis je Team oder je Klub?',
        a: 'Free, Amateur und Semi-Pro werden je Team abgeschlossen. Die Pro-Stufe deckt mehrere Teams unter einem Dach ab und wird individuell kalkuliert.',
      },
      {
        q: 'Warum 19 € und dann 249 €?',
        a: 'Weil die beiden Stufen nicht dasselbe verkaufen. Amateur ist die Logistik des Staffs, aus der Tasche eines Coachs bezahlt. Semi-Pro ist eine Performance-Plattform auf einem Klubbudget, und es ist die Stufe, ab der Ihr GPS etwas einbringt. Dazwischen liegt kein größeres Produkt, sondern ein anderer Beruf.',
      },
      {
        q: 'Gibt es eine Bindung?',
        a: 'Monatlich, ohne Laufzeit. Semi-Pro öffnet einen Jahresrabatt für Klubs, die lieber in Saisonbudgets denken.',
      },
      {
        q: 'Und ein Klub, der nicht per Karte zahlt?',
        a: 'Bestellschein und Rechnung, bei Semi-Pro und Pro. Auf der Ebene eines Saisonbudgets läuft die Freigabe selten über eine Karte, und darauf stellen wir uns ein.',
      },
    ],
  },
  cta: {
    title: 'Beginnen Sie mit Ihrer eigenen Saison.',
    sub: 'Legen Sie Ihr Team in wenigen Minuten im kostenlosen Plan an. Wenn Sie bereits GPS exportieren, beginnt das schnellste Gespräch bei dem, was Sie noch von Hand verschränken.',
    primary: 'Mein Team kostenlos anlegen',
    secondary: 'Zeigen Sie uns Ihr Excel',
    trust: 'Ohne Karte. Ohne Bindung.',
  },
  teaserCta: 'Den vollständigen Vergleich ansehen',
};

const pt: PricingContent = {
  meta: {
    title: 'Preços STRIVN | Gratuito para uma equipa, pago quando entra o GPS',
    description:
      'Quatro níveis comparados linha a linha. O gratuito aguenta uma equipa uma época inteira; o nível performance assume o cruzamento de GPS, RPE e wellness que ainda faz à mão.',
  },
  hero: {
    kicker: 'PREÇOS',
    title: 'O último quilómetro entre a sua exportação GPS e a sua decisão.',
    sub: 'Quatro níveis. O gratuito aguenta uma equipa uma época inteira. O nível performance assume o cruzamento de GPS, RPE e wellness que ainda faz à mão.',
  },
  plans: {
    kicker: 'QUATRO NÍVEIS',
    title: 'Cada nível carrega o anterior.',
    note: 'O plano gratuito abre em dois minutos, sem cartão. Os níveis pagos ainda passam por nós, enquanto abrimos o pagamento online. Escreva-nos e abrimos o acesso.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponível agora',
        price: '0 €',
        period: 'para sempre',
        promise: 'Aguentar uma equipa',
        qualifier: 'Está sozinho com uma equipa, e sem orçamento para pedir.',
        features: [
          'Uma equipa, jogadores e staff ilimitados',
          'Treinos, jogos e descanso no calendário',
          'Convocatórias, presenças, plantel',
          'App do jogador, check-in matinal, RPE',
          'Live match, histórico de estatísticas limitado',
          'Resultados de sessão e balanço do treinador',
          'Enfermaria e acompanhamento de lesões',
          '20 exercícios, 3 quadros táticos',
          'Uma dotação de créditos de IA para experimentar',
        ],
        cta: 'Criar a minha equipa',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Abertura gradual',
        price: '19 €',
        period: '/ mês',
        promise: 'Deixar de reintroduzir tudo todas as semanas',
        qualifier: 'Repete as mesmas sessões e reconstrói-as de cada vez.',
        inherits: 'Tudo o do plano Free, mais:',
        features: [
          'Biblioteca de exercícios ilimitada',
          'Quadros táticos ilimitados',
          'Modelos e cronograma de sessão',
          'Reuniões, tarefas, team building, individual, recuperação',
          'Histórico de estatísticas completo',
          'Lembretes de convocatória automáticos',
          'Check-ins matinais automáticos',
          'WhatsApp direto com os jogadores',
        ],
        cta: 'Avisem-me',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'O nível performance',
        price: '249 €',
        period: '/ mês',
        priceNote: 'Desconto anual',
        promise: 'Cruzar o GPS com o resto',
        qualifier: 'Já exporta GPS, e cruza-o à mão no Excel.',
        inherits: 'Tudo o do plano Amateur, mais:',
        features: [
          'Importação GPS por CSV, seja qual for o fornecedor',
          'Limiares por jogador, alvos e bandas: o desvio vê-se, já não se calcula.',
          'GPS, RPE e wellness no mesmo bloco, sem a folha de cálculo de domingo à noite.',
          'Musculação: catálogo, programas e runner',
          'Quadro médico e blocos de tratamento',
          'Testes físicos',
          'Vários membros do staff, acesso ao staff médico',
          'Dashboards do treinador e reporting do clube',
          'Sincronização de wearables',
        ],
        cta: 'Falar com um preparador físico',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'A pedido',
        price: 'Sob consulta',
        promise: 'Descer ao nível do exercício',
        qualifier: 'Várias equipas com GPS, uma célula de performance, e dados que têm de sair.',
        inherits: 'Tudo o do plano Semi-Pro, mais:',
        features: [
          'GPS ao nível do exercício: a assinatura de carga de cada exercício',
          'Várias equipas sob o mesmo teto',
          'Uma ligação ao seu fornecedor GPS, construída consigo',
          'Análise de jogo, scouting e recrutamento',
          'Analytics avançada e IA de performance',
          'Acesso API e exportação para as suas ferramentas',
          'Suporte prioritário',
        ],
        cta: 'Falar com a equipa',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'CRÉDITOS DE IA',
    title: 'A IA é contada ao uso, não por assinatura.',
    body:
      'Cada nível abre uma dotação mensal de créditos. Uma análise custa aquilo que mobiliza: reler uma semana de carga não custa o que custa um relatório de época.',
    points: [
      'Existe uma dotação desde o plano Free. Ninguém paga por uma funcionalidade que nunca experimentou.',
      'A dotação recomeça todos os meses.',
      'Os utilizadores intensivos recarregam sem mudar de nível.',
    ],
    note: 'Publicamos a tabela quando estiver calibrada nos nossos custos reais. Anunciar hoje números que teríamos de corrigir amanhã custa mais do que não anunciar nenhum.',
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
      staff: 'Staff e pilotagem',
      ai: 'Inteligência artificial',
    },
    rows: {
      teams: 'Equipas',
      roster: 'Jogadores e staff',
      eventsCore: 'Treino, jogo, descanso',
      eventsStaff: 'Reunião, tarefa, team building, individual, recuperação',
      eventsPerf: 'Musculação, teste físico, tratamento',
      convocations: 'Convocatórias, presenças, plantel',
      portal: 'App do jogador, check-in matinal, RPE',
      injuries: 'Enfermaria e acompanhamento de lesões',
      sessionResults: 'Resultados de sessão e balanço do treinador',
      liveMatch: 'Live match',
      matchHistory: 'Histórico de estatísticas de jogo',
      exerciseLibrary: 'Biblioteca de exercícios',
      tacticalBoards: 'Quadros táticos',
      sessionTemplates: 'Modelos e cronograma de sessão',
      automations: 'Lembretes de convocatória e check-ins automáticos',
      whatsapp: 'WhatsApp direto com os jogadores',
      gpsImport: 'Importação GPS por CSV, seja qual for o fornecedor',
      load: 'Carga externa, zonas, limiares por jogador e alvos',
      crossing: 'GPS, RPE e wellness cruzados',
      strength: 'Musculação: catálogo, programas e runner',
      medicalBoard: 'Quadro médico e blocos de tratamento',
      physicalTests: 'Testes físicos',
      wearables: 'Sincronização de wearables',
      exerciseLevelGps: 'GPS ao nível do exercício',
      gpsConnector: 'Ligação ao seu fornecedor GPS',
      multiStaff: 'Vários membros do staff',
      medicalAccess: 'Acesso ao staff médico',
      dashboards: 'Dashboards do treinador e reporting do clube',
      advancedAnalytics: 'Analytics avançada e IA de performance',
      matchAnalysis: 'Análise de jogo, scouting, recrutamento',
      api: 'Acesso API e exportação para as suas ferramentas',
      prioritySupport: 'Suporte prioritário',
      aiCredits: 'Créditos de IA mensais',
      aiTopup: 'Recarga ao uso',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Ilimitado',
      several: 'Várias',
      limited: 'Limitado',
      full: 'Completo',
      allowance: 'Dotação',
      onQuote: 'Sob consulta',
    },
  },
  downgrade: {
    kicker: 'DESCER DE NÍVEL',
    title: 'Os seus dados nunca ficam reféns.',
    body:
      'Uma equipa que desce de nível mantém o acesso de leitura a tudo o que produziu. O bloco de tratamento marcado pelo fisioterapeuta continua no calendário, a sessão de musculação passada continua consultável, a importação GPS confirmada continua visível.',
    closesTitle: 'O que fecha',
    closes: [
      'Criar um evento do nível superior',
      'Importar novos dados GPS',
      'Prescrever uma sessão de musculação',
      'Abrir mais um acesso de staff',
    ],
    staysTitle: 'O que continua aberto',
    stays: [
      'Consultar todo o seu histórico',
      'Exportar os seus dados',
      'Apagar o que lhe pertence',
      'Reencontrar tudo assim que voltar a subir',
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
        q: 'O plano gratuito é limitado no tempo?',
        a: 'Não. É limitado em volume — uma equipa, 20 exercícios, 3 quadros táticos — nunca na duração. Não expira e não pede cartão.',
      },
      {
        q: 'O que conta nos 20 exercícios?',
        a: 'Os exercícios que cria. O catálogo central de musculação, mantido pela STRIVN e legível por todos, não conta para o seu limite.',
      },
      {
        q: 'Posso importar o meu GPS sem mudar de fornecedor?',
        a: 'Sim, por CSV, seja qual for o sistema. A STRIVN analisa os cabeçalhos do seu ficheiro em vez de esperar um formato, e guarda o mapeamento das colunas para a importação seguinte.',
      },
      {
        q: 'O que acontece se descer de nível?',
        a: 'Mantém o acesso de leitura a tudo o que produziu. O que fecha é a criação: marcar um bloco do nível superior, importar, prescrever. Consultar, exportar e apagar continuam abertos.',
      },
      {
        q: 'Como funcionam os créditos de IA?',
        a: 'Cada nível abre uma dotação mensal, reposta todos os meses, e o consumo segue o uso. Publicamos a tabela quando estiver calibrada nos nossos custos reais.',
      },
      {
        q: 'O preço é por equipa ou por clube?',
        a: 'Free, Amateur e Semi-Pro subscrevem-se por equipa. O nível Pro cobre várias equipas sob o mesmo teto e é orçamentado.',
      },
      {
        q: 'Porquê 19 € e depois 249 €?',
        a: 'Porque os dois níveis não vendem a mesma coisa. O Amateur é a logística do staff, paga do bolso de um treinador. O Semi-Pro é uma plataforma de performance com orçamento de clube, e é o nível onde o seu GPS começa a valer alguma coisa. Entre os dois não há um produto maior, há outro ofício.',
      },
      {
        q: 'Existe fidelização?',
        a: 'Mensal, sem período mínimo. O Semi-Pro abre um desconto anual para clubes que preferem raciocinar em orçamento de época.',
      },
      {
        q: 'E um clube que não paga com cartão?',
        a: 'Nota de encomenda e fatura, no Semi-Pro e no Pro. À escala de um orçamento de época, a aprovação passa raramente por um cartão, e contamos com isso.',
      },
    ],
  },
  cta: {
    title: 'Comece pela sua própria época.',
    sub: 'Crie a sua equipa em minutos no plano gratuito. Se já exporta GPS, a conversa mais rápida começa por aquilo que ainda cruza à mão.',
    primary: 'Criar a minha equipa gratuitamente',
    secondary: 'Mostre-nos o seu Excel',
    trust: 'Sem cartão. Sem compromisso.',
  },
  teaserCta: 'Ver a comparação completa',
};

const es: PricingContent = {
  meta: {
    title: 'Precios STRIVN | Gratis para un equipo, de pago cuando entra el GPS',
    description:
      'Cuatro niveles comparados línea a línea. El gratuito aguanta un equipo una temporada entera; el nivel rendimiento asume el cruce de GPS, RPE y wellness que usted todavía hace a mano.',
  },
  hero: {
    kicker: 'PRECIOS',
    title: 'El último kilómetro entre su exportación GPS y su decisión.',
    sub: 'Cuatro niveles. El gratuito aguanta un equipo una temporada entera. El nivel rendimiento asume el cruce de GPS, RPE y wellness que usted todavía hace a mano.',
  },
  plans: {
    kicker: 'CUATRO NIVELES',
    title: 'Cada nivel carga con el anterior.',
    note: 'El plan gratuito se abre en dos minutos, sin tarjeta. Los niveles de pago pasan todavía por nosotros, mientras abrimos el pago en línea. Escríbanos y le abrimos el acceso.',
    items: [
      {
        code: 'free',
        name: 'Free',
        badge: 'Disponible ahora',
        price: '0 €',
        period: 'para siempre',
        promise: 'Sacar adelante un equipo',
        qualifier: 'Está solo con un equipo, y sin presupuesto que pedir.',
        features: [
          'Un equipo, jugadores y staff ilimitados',
          'Entrenamientos, partidos y descanso en el calendario',
          'Convocatorias, asistencias, plantilla',
          'App del jugador, check-in matinal, RPE',
          'Live match, histórico de estadísticas limitado',
          'Resultados de sesión y balance del entrenador',
          'Enfermería y seguimiento de lesiones',
          '20 ejercicios, 3 pizarras tácticas',
          'Una dotación de créditos de IA para descubrirlo',
        ],
        cta: 'Crear mi equipo',
        kind: 'app',
      },
      {
        code: 'amateur',
        name: 'Amateur',
        badge: 'Apertura progresiva',
        price: '19 €',
        period: '/ mes',
        promise: 'Dejar de reescribirlo todo cada semana',
        qualifier: 'Repite las mismas sesiones y las reconstruye cada vez.',
        inherits: 'Todo el plan Free, y además:',
        features: [
          'Biblioteca de ejercicios ilimitada',
          'Pizarras tácticas ilimitadas',
          'Plantillas y cronología de sesión',
          'Reuniones, tareas, team building, individual, recuperación',
          'Histórico de estadísticas completo',
          'Recordatorios de convocatoria automáticos',
          'Check-ins matinales automáticos',
          'WhatsApp directo con los jugadores',
        ],
        cta: 'Avisadme',
        kind: 'waitlist',
      },
      {
        code: 'semi_pro',
        name: 'Semi-Pro',
        badge: 'El nivel rendimiento',
        price: '249 €',
        period: '/ mes',
        priceNote: 'Descuento anual',
        promise: 'Cruzar el GPS con lo demás',
        qualifier: 'Ya exporta GPS, y lo cruza a mano en Excel.',
        inherits: 'Todo el plan Amateur, y además:',
        features: [
          'Importación GPS por CSV, sea cual sea el proveedor',
          'Umbrales por jugador, objetivos y bandas: la desviación se ve, ya no se calcula.',
          'GPS, RPE y wellness en el mismo bloque, sin la hoja de cálculo del domingo por la noche.',
          'Fuerza: catálogo, programas y runner',
          'Cuadro médico y bloques de tratamiento',
          'Tests físicos',
          'Varios miembros del staff, acceso al staff médico',
          'Dashboards del entrenador y reporting del club',
          'Sincronización de wearables',
        ],
        cta: 'Hablar con un preparador físico',
        kind: 'waitlist',
        featured: true,
      },
      {
        code: 'pro',
        name: 'Pro',
        badge: 'Bajo petición',
        price: 'A medida',
        promise: 'Bajar al nivel del ejercicio',
        qualifier: 'Varios equipos con GPS, una célula de rendimiento, y datos que tienen que salir.',
        inherits: 'Todo el plan Semi-Pro, y además:',
        features: [
          'GPS a nivel de ejercicio: la firma de carga de cada ejercicio',
          'Varios equipos bajo el mismo techo',
          'Una conexión con su proveedor GPS, construida con usted',
          'Análisis de partido, scouting y reclutamiento',
          'Analytics avanzada e IA de rendimiento',
          'Acceso API y exportación a sus herramientas',
          'Soporte prioritario',
        ],
        cta: 'Hablar con el equipo',
        kind: 'contact',
      },
    ],
  },
  credits: {
    kicker: 'CRÉDITOS DE IA',
    title: 'La IA se cobra por uso, no por suscripción.',
    body:
      'Cada nivel abre una dotación mensual de créditos. Un análisis cuesta según lo que moviliza: releer una semana de carga no cuesta lo que cuesta un informe de temporada.',
    points: [
      'Hay una dotación desde el plan Free. Nadie paga por una función que nunca ha probado.',
      'La dotación vuelve a empezar cada mes.',
      'Los usuarios intensivos recargan sin cambiar de nivel.',
    ],
    note: 'Publicaremos la tarifa cuando esté ajustada a nuestros costes reales. Anunciar hoy cifras que tendríamos que corregir mañana cuesta más que no anunciar ninguna.',
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
      staff: 'Staff y pilotaje',
      ai: 'Inteligencia artificial',
    },
    rows: {
      teams: 'Equipos',
      roster: 'Jugadores y staff',
      eventsCore: 'Entrenamiento, partido, descanso',
      eventsStaff: 'Reunión, tarea, team building, individual, recuperación',
      eventsPerf: 'Fuerza, test físico, tratamiento',
      convocations: 'Convocatorias, asistencias, plantilla',
      portal: 'App del jugador, check-in matinal, RPE',
      injuries: 'Enfermería y seguimiento de lesiones',
      sessionResults: 'Resultados de sesión y balance del entrenador',
      liveMatch: 'Live match',
      matchHistory: 'Histórico de estadísticas de partido',
      exerciseLibrary: 'Biblioteca de ejercicios',
      tacticalBoards: 'Pizarras tácticas',
      sessionTemplates: 'Plantillas y cronología de sesión',
      automations: 'Recordatorios de convocatoria y check-ins automáticos',
      whatsapp: 'WhatsApp directo con los jugadores',
      gpsImport: 'Importación GPS por CSV, sea cual sea el proveedor',
      load: 'Carga externa, zonas, umbrales por jugador y objetivos',
      crossing: 'GPS, RPE y wellness cruzados',
      strength: 'Fuerza: catálogo, programas y runner',
      medicalBoard: 'Cuadro médico y bloques de tratamiento',
      physicalTests: 'Tests físicos',
      wearables: 'Sincronización de wearables',
      exerciseLevelGps: 'GPS a nivel de ejercicio',
      gpsConnector: 'Conexión con su proveedor GPS',
      multiStaff: 'Varios miembros del staff',
      medicalAccess: 'Acceso al staff médico',
      dashboards: 'Dashboards del entrenador y reporting del club',
      advancedAnalytics: 'Analytics avanzada e IA de rendimiento',
      matchAnalysis: 'Análisis de partido, scouting, reclutamiento',
      api: 'Acceso API y exportación a sus herramientas',
      prioritySupport: 'Soporte prioritario',
      aiCredits: 'Créditos de IA mensuales',
      aiTopup: 'Recarga según el uso',
    },
    cells: {
      one: '1',
      three: '3',
      twenty: '20',
      unlimited: 'Ilimitado',
      several: 'Varios',
      limited: 'Limitado',
      full: 'Completo',
      allowance: 'Dotación',
      onQuote: 'Bajo petición',
    },
  },
  downgrade: {
    kicker: 'BAJAR DE NIVEL',
    title: 'Sus datos nunca quedan retenidos.',
    body:
      'Un equipo que baja de nivel conserva el acceso de lectura a todo lo que ha producido. El bloque de tratamiento que puso el fisio sigue en el calendario, la sesión de fuerza pasada sigue consultable, la importación GPS confirmada sigue visible.',
    closesTitle: 'Lo que se cierra',
    closes: [
      'Crear un evento del nivel superior',
      'Importar nuevos datos GPS',
      'Prescribir una sesión de fuerza',
      'Abrir un acceso de staff más',
    ],
    staysTitle: 'Lo que sigue abierto',
    stays: [
      'Consultar todo su histórico',
      'Exportar sus datos',
      'Borrar lo que le pertenece',
      'Recuperarlo todo en cuanto vuelva a subir',
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
        q: '¿El plan gratuito está limitado en el tiempo?',
        a: 'No. Está limitado en volumen — un equipo, 20 ejercicios, 3 pizarras tácticas — nunca en duración. No caduca y no pide tarjeta.',
      },
      {
        q: '¿Qué cuenta dentro de los 20 ejercicios?',
        a: 'Los ejercicios que usted crea. El catálogo central de fuerza, mantenido por STRIVN y legible por todos, no cuenta para su límite.',
      },
      {
        q: '¿Puedo importar mi GPS sin cambiar de proveedor?',
        a: 'Sí, por CSV, sea cual sea el sistema. STRIVN analiza las cabeceras de su archivo en lugar de esperar un formato, y recuerda el mapeo de columnas para la siguiente importación.',
      },
      {
        q: '¿Qué pasa si bajo de nivel?',
        a: 'Conserva el acceso de lectura a todo lo que ha producido. Lo que se cierra es la creación: poner un bloque del nivel superior, importar, prescribir. Consultar, exportar y borrar siguen abiertos.',
      },
      {
        q: '¿Cómo funcionan los créditos de IA?',
        a: 'Cada nivel abre una dotación mensual que vuelve a empezar cada mes, y el consumo sigue al uso. Publicaremos la tarifa cuando esté ajustada a nuestros costes reales.',
      },
      {
        q: '¿El precio es por equipo o por club?',
        a: 'Free, Amateur y Semi-Pro se contratan por equipo. El nivel Pro cubre varios equipos bajo el mismo techo y se presupuesta a medida.',
      },
      {
        q: '¿Por qué 19 € y luego 249 €?',
        a: 'Porque los dos niveles no venden lo mismo. Amateur es la logística del staff, pagada del bolsillo de un entrenador. Semi-Pro es una plataforma de rendimiento con presupuesto de club, y es el nivel donde su GPS empieza a servir para algo. Entre los dos no hay un producto más grande, hay otro oficio.',
      },
      {
        q: '¿Hay permanencia?',
        a: 'Mensual, sin permanencia. Semi-Pro abre un descuento anual para los clubes que prefieren razonar en presupuesto de temporada.',
      },
      {
        q: '¿Y un club que no paga con tarjeta?',
        a: 'Pedido y factura, en Semi-Pro y Pro. A escala de un presupuesto de temporada, la aprobación pasa pocas veces por una tarjeta, y lo tenemos en cuenta.',
      },
    ],
  },
  cta: {
    title: 'Empiece por su propia temporada.',
    sub: 'Cree su equipo en unos minutos en el plan gratuito. Si ya exporta GPS, la conversación más rápida empieza por lo que todavía cruza a mano.',
    primary: 'Crear mi equipo gratis',
    secondary: 'Muéstrenos su Excel',
    trust: 'Sin tarjeta. Sin compromiso.',
  },
  teaserCta: 'Ver la comparativa completa',
};

export const pricingContent: Record<Locale, PricingContent> = { fr, en, nl, de, pt, es };
