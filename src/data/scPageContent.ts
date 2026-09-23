/**
 * Content for the S&C-coach page ("Préparateurs physiques") in all six locales.
 *
 * Locale-invariant fixtures — player names, bar values, ACWR figures, chart
 * heights — live in the constants below and are shared by every locale. Only
 * real prose is translated, which keeps the per-locale blocks readable.
 */
import type { Locale } from './landingContent';
export type { Locale };

type Tone = 'green' | 'orange' | 'coral' | 'blue' | 'plain';

/* ── Locale-invariant fixtures ────────────────────────────────── */

/** Hero readiness board: one row per player. `status` is keyed per locale.
 * `bar` is the readiness score (0 when the player is on a return protocol and
 * has no score today). The numbers match the "why" panel below. */
export const BOARD_ROWS: Array<{ name: string; bar: number; value: string; acwr: string; tone: Tone; status: 'ready' | 'reduce' | 'monitor' | 'protocol' }> = [
  { name: 'A. Diallo', bar: 91, value: '91', acwr: '1.05', tone: 'green', status: 'ready' },
  { name: 'L. Moreau', bar: 58, value: '58', acwr: '1.31', tone: 'coral', status: 'reduce' },
  { name: 'K. Nakamura', bar: 71, value: '71', acwr: '1.18', tone: 'orange', status: 'monitor' },
  { name: 'S. Petit', bar: 88, value: '88', acwr: '0.97', tone: 'green', status: 'ready' },
  { name: 'M. Lefèvre', bar: 84, value: '84', acwr: '1.02', tone: 'green', status: 'ready' },
  { name: 'T. Mendes', bar: 0, value: '·', acwr: '·', tone: 'plain', status: 'protocol' },
];

/** Evidence behind L. Moreau's "Reduce" call, in the order of `why.evidence`
 * labels. Values and tones are product strings, identical in every locale. */
export const WHY_VALUES: Array<{ value: string; tone: Tone }> = [
  { value: '1.31', tone: 'coral' },
  { value: '3', tone: 'coral' },
  { value: '4 h 05', tone: 'orange' },
  { value: '+22 %', tone: 'orange' },
  { value: '8 / 10', tone: 'plain' },
];

/** Load-planning "planned vs actual" chart — [planned, actual] as % heights. */
export const PLAN_BARS: Array<[number, number | null]> = [
  [32, 27],
  [80, 86],
  [46, 41],
  [95, 91],
  [52, 50],
  [25, 23],
  [100, null],
];

/** Weekly-load widget on the reports dashboard. */
export const WEEKLY_BARS = [38, 52, 44, 60, 50, 66];

/** HSR match-vs-match widget — [previous, current] heights. */
export const HSR_BARS: Array<[number, number]> = [
  [34, 40],
  [28, 34],
  [38, 30],
  [30, 42],
  [36, 44],
];

/** Strength block — individualised loads at 82 % of each player's 1RM. */
export const ONE_RM_ROWS = [
  { name: 'A. Diallo', max: '140 kg', load: '115 kg' },
  { name: 'L. Moreau', max: '120 kg', load: '98 kg' },
  { name: 'S. Petit', max: '155 kg', load: '127 kg' },
  { name: 'M. Lefèvre', max: '132 kg', load: '108 kg' },
];

/** Test campaign entries — `state` is keyed per locale. */
export const TEST_ROWS: Array<{ name: string; value: string; delta?: string; deltaTone?: Tone; state: 'received' | 'pending' }> = [
  { name: 'A. Diallo', value: '18.1 km/h', delta: '+0.4', deltaTone: 'green', state: 'received' },
  { name: 'S. Petit', value: '17.6 km/h', delta: '+0.2', deltaTone: 'green', state: 'received' },
  { name: 'M. Lefèvre', value: '16.9 km/h', delta: '−0.1', deltaTone: 'orange', state: 'received' },
  { name: 'K. Nakamura', value: '·', state: 'pending' },
];

/* ── Content shape ────────────────────────────────────────────── */

export interface ScPageContent {
  meta: { title: string; description: string };
  hero: {
    kicker: string;
    title: string;
    sub: string;
    primaryCta: string;
    /** Human CTA ("Parler à Benoit"), a mailto. */
    secondaryCta: string;
    secondaryHref: string;
    /** Mono fine print under the CTA pair. */
    fine: string[];
    board: {
      title: string;
      stamp: string;
      kpis: Array<{ label: string; value: string; tone: Tone }>;
      status: { ready: string; reduce: string; monitor: string; protocol: string };
      /** Evidence panel for the flagged player. Values live in WHY_VALUES. */
      why: {
        title: string;
        score: string;
        evidence: string[];
        tag: string;
        proposal: string;
        apply: string;
        edit: string;
        sources: string;
      };
    };
  };
  daily: {
    kicker: string;
    title: string;
    sub: string;
    colBefore: string;
    colAfter: string;
    rows: Array<{ before: string; after: string }>;
  };
  metrics: {
    kicker: string;
    title: string;
    body: string;
    items: Array<{ name: string; detail: string }>;
  };
  planning: {
    tag: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
    href: string;
    /** Real app capture of the load planner. */
    shot: { src: string; alt: string; caption: string };
    visual: {
      week: string;
      goal: string;
      remaining: string;
      budgetLabel: string;
      categories: Array<{ name: string; value: string; pct: number; tone: Tone }>;
      chartLabel: string;
      legendPlanned: string;
      legendActual: string;
      days: string[];
      variance: Array<{ name: string; delta: string; tone: Tone }>;
    };
  };
  library: {
    tag: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
    href: string;
    visual: {
      title: string;
      sub: string;
      badge: string;
      metricsLabel: string;
      metrics: Array<{ name: string; tag: string; tagTone: Tone; value: string }>;
      scalingTitle: string;
      scaling: Array<{ label: string; from: string; to: string; unchanged?: boolean }>;
      totalTitle: string;
      totalValue: string;
      coverageLabel: string;
      coverageValue: string;
      coveragePct: number;
    };
  };
  strength: {
    tag: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
    href: string;
    visual: {
      title: string;
      badge: string;
      exercise: string;
      prescription: string;
      modes: string[];
      tableLabel: string;
      colPlayer: string;
      colMax: string;
      colLoad: string;
      note: string;
    };
  };
  tests: {
    tag: string;
    title: string;
    body: string;
    points: string[];
    cta: string;
    href: string;
    visual: {
      title: string;
      sub: string;
      badge: string;
      progressLabel: string;
      progressValue: string;
      progressPct: number;
      entriesLabel: string;
      stateReceived: string;
      statePending: string;
      note: string;
    };
  };
  reports: {
    tag: string;
    title: string;
    body: string;
    dashboard: {
      title: string;
      widgetBtn: string;
      aiBtn: string;
      kpis: Array<{ label: string; value: string; tone: Tone }>;
      weekly: string;
      availability: string;
      availabilityValue: string;
      hsr: string;
      aiTag: string;
    };
    report: {
      title: string;
      aiBadge: string;
      body: string;
      items: Array<{ icon: string; label: string }>;
      aiStrip: string;
    };
  };
  /** Closing band. Strings follow the homepage's final CTA. */
  finalCta: {
    kicker: string;
    title: string;
    body: string;
    primaryCta: string;
    trust: string[];
  };
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: ScPageContent = {
  meta: {
    title: 'STRIVN pour les préparateurs physiques | Charge, tests, rapports',
    description:
      'Mesurez la charge, suivez l’état de forme et lancez vos campagnes de tests. STRIVN importe vos exports Catapult ou STATSports, puis calcule ACWR, monotonie et contrainte.',
  },
  hero: {
    kicker: 'POUR LES PRÉPARATEURS PHYSIQUES',
    title: 'Croisez l’export GPS avec le RPE et le plan.',
    sub: 'Vous exportez déjà le GPS, puis vous le recroisez à la main dans Excel. STRIVN ajoute le wellness, les tests et l’historique, et vous dit qui alléger avant la séance.',
    primaryCta: 'Commencer gratuitement',
    secondaryCta: 'Parler à Benoit',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20Pr%C3%A9parateur%20physique',
    fine: ['30 jours de Semi-Pro offerts', 'Sans carte', 'Import GPS par CSV'],
    board: {
      title: 'Readiness du jour · Olympique Montverne',
      stamp: 'MER 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'CHARGE 7 J', value: '2 340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALERTES', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Prêt', reduce: 'Alléger', monitor: 'Surveiller', protocol: 'Protocole' },
      why: {
        title: 'Pourquoi L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 j', 'Semaines au-dessus du seuil', 'Sommeil déclaré', 'HSR mardi vs profil', 'RPE séance mardi'],
        tag: 'Proposé',
        proposal: 'Jeudi : volume −30 %, pas de bloc vitesse.',
        apply: 'Appliquer',
        edit: 'Modifier',
        sources: 'Sources · GPS mardi · RPE · wellness · plan S12',
      },
    },
  },
  daily: {
    kicker: 'VOTRE QUOTIDIEN',
    title: 'Retrouvez vos neuf tâches, exécutées par STRIVN.',
    sub: 'Une séance par semaine ou six, un export GPS ou un simple RPE, le déroulé reste le même.',
    colBefore: 'CE QUE VOUS FAITES DÉJÀ',
    colAfter: 'COMMENT ÇA SE PASSE DANS STRIVN',
    rows: [
      {
        before: 'Savoir qui est frais avant la séance',
        after: 'État de forme calculé depuis le check-in bien-être : vert, orange, rouge',
      },
      {
        before: 'Intégrer les données GPS de la séance',
        after: 'Export Catapult ou STATSports importé, zones regroupées en blocs de vitesse',
      },
      {
        before: 'Doser la charge',
        after: 'Planification de charge : objectif hebdo en UA, réparti par catégorie',
      },
      {
        before: 'Construire les séances',
        after: 'Constructeur par blocs, charge externe estimée depuis les métriques d’exercice',
      },
      {
        before: 'Individualiser : force, prévention, retour',
        after: 'Musculation en % du 1RM, chaque joueur reçoit sa charge dans l’app',
      },
      {
        before: 'Encadrer les retours de blessure',
        after: 'Suivi médical : protocole de retour, créneaux kiné, charge de reprise',
      },
      {
        before: 'Ajuster pendant la séance',
        after: 'Séance en direct : charge cumulée et écart vs prévu, en temps réel',
      },
      {
        before: 'Dire au coach qui peut jouer le match',
        after: 'État de forme et suivi médical remontent dans la convocation',
      },
      {
        before: 'Rendre des comptes au staff et à la direction',
        after: 'Rapports rédigés par l’IA et signaux de risque, partagés au staff',
      },
    ],
  },
  metrics: {
    kicker: 'INDICATEURS',
    title: 'Lisez douze indicateurs calculés depuis vos saisies.',
    body: 'Chaque indicateur reprend une définition de la littérature et se calcule depuis ce que vous saisissez déjà. Les coefficients de match et d’entraînement restent ajustables depuis le panneau Formule.',
    items: [
      { name: 'ACWR', detail: 'charge aiguë 7 j ÷ (chronique 28 j ÷ 4) · zone 0.8–1.3' },
      { name: 'Monotonie', detail: 'moyenne quotidienne ÷ écart-type de la semaine' },
      { name: 'Contrainte', detail: 'charge hebdomadaire totale × monotonie' },
      { name: 'Charge interne (sRPE)', detail: 'RPE × durée · 90 min à RPE 7 = 630 UA' },
      { name: 'Charge externe', detail: 'distance et temps issus des blocs de vitesse GPS' },
      { name: 'Ratio externe / interne', detail: 'le découplage signale la fatigue' },
      { name: 'État de forme', detail: 'vert 100 % · orange 65 % · rouge 30 %' },
      { name: 'Ressenti', detail: 'fatigue, sommeil, motivation, douleur' },
      { name: 'Blocs de vitesse', detail: 'Aérobie, Haute intensité, Course haute vitesse, Sprint' },
      { name: 'Charge externe estimée', detail: 'somme des métriques d’exercice, ajustée aux durées' },
      { name: 'Taux de couverture', detail: 'part de la séance décrite par des métriques' },
      { name: '1RM', detail: 'saisi, ou estimé par la formule Epley ou Brzycki' },
    ],
  },
  planning: {
    tag: 'PLANIFICATION DE CHARGE',
    title: 'Fixez l’objectif hebdomadaire en UA, par catégorie.',
    body: 'Vous fixez l’objectif hebdomadaire en UA, puis le répartissez entre terrain, musculation et récupération. Chaque composant s’accroche à une séance du calendrier, ou reste en attente. « Prévu vs réalisé » confronte ensuite le plan à ce que le groupe a encaissé.',
    points: [
      'Objectif hebdomadaire en UA, budget par catégorie',
      'Charge = RPE × durée × coefficient : 90 min à RPE 7 valent 630 UA',
      'Composants rattachés à une séance, ou laissés en attente',
      'Prévu vs réalisé, par équipe et par joueur',
      'Cycles et saison pour les blocs de récupération ou de compétition',
    ],
    cta: 'Voir la planification de charge',
    href: '/fr/features/training-load/',
    shot: { src: '/screenshots/load-planning-fr.png', alt: 'Planification de charge dans STRIVN : prévision d’ACWR, objectif de la semaine en UA et charge par jour', caption: 'CAPTURE · PLANIFICATION DE CHARGE' },
    visual: {
      week: 'Semaine 12 · phase compétition',
      goal: 'Objectif hebdomadaire 3 000 UA',
      remaining: 'RESTE 300 UA',
      budgetLabel: 'BUDGET PAR CATÉGORIE',
      categories: [
        { name: 'Terrain', value: '1 800 / 2 000 UA', pct: 90, tone: 'blue' },
        { name: 'Musculation', value: '600 / 700 UA', pct: 86, tone: 'blue' },
        { name: 'Récupération', value: '300 / 300 UA', pct: 100, tone: 'green' },
      ],
      chartLabel: 'PRÉVU VS RÉALISÉ',
      legendPlanned: 'Prévu',
      legendActual: 'Réalisé',
      days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs prévu', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs prévu', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'BIBLIOTHÈQUE D’EXERCICES & MÉTRIQUES',
    title: 'Quantifiez vos exercices terrain, la charge externe se calcule.',
    body: 'Capturez un exercice depuis un lien, une vidéo, un schéma ou du texte. Attachez-lui ses métriques (sprints, distance, RPE attendu, surface) et la séance calcule sa charge externe estimée. Passer le bloc de 15 à 20 minutes met les cumuls à l’échelle, les intensités restent inchangées.',
    points: [
      'Capture par lien, photo, vidéo, schéma tactique ou texte',
      'Dossiers, tags et boîte de réception avant publication',
      'Métriques standard, colonnes GPS et métriques personnalisées',
      'Partage par lien public sans compte, révocable à tout moment',
    ],
    cta: 'Voir la bibliothèque d’exercices',
    href: '/fr/features/exercise-library/',
    visual: {
      title: 'Jeu réduit 8v8 · pressing haut',
      sub: 'Dossier « Pressing » · tags : intensité, transition',
      badge: 'SCHÉMA',
      metricsLabel: 'MÉTRIQUES ATTACHÉES · BLOC DE 15 MIN',
      metrics: [
        { name: 'Distance totale', tag: 'CUMUL', tagTone: 'blue', value: '1 200 m' },
        { name: 'Sprints', tag: 'CUMUL', tagTone: 'blue', value: '6' },
        { name: 'Accélérations', tag: 'CUMUL', tagTone: 'blue', value: '14' },
        { name: 'RPE attendu', tag: 'INTENSIF', tagTone: 'plain', value: '7 / 10' },
        { name: 'Joueurs · surface', tag: 'INTENSIF', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Touches de balle', tag: 'PERSO', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'Le bloc passe à 20 min',
      scaling: [
        { label: 'Distance', from: '1 200 m', to: '1 600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · surface', from: '7 · 400 m²', to: '· inchangés', unchanged: true },
      ],
      totalTitle: 'Charge externe estimée · séance jeudi',
      totalValue: '4 850 m · 21 sprints',
      coverageLabel: 'Taux de couverture des métriques',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'MUSCULATION & 1RM',
    title: 'Prescrivez un pourcentage, chaque joueur reçoit ses kilos.',
    body: 'Vous saisissez le 1RM, ou vous l’estimez depuis une série sous-maximale avec la formule Epley ou Brzycki. Vous prescrivez « Squat 4×5 @ 82 % » pour tout le groupe, et chacun reçoit ses kilos dans l’app.',
    points: [
      'Blocs en série simple, superset ou circuit',
      'Modes de charge : % 1RM, kg fixe, RPE ou poids de corps',
      'Répétitions, intensité, tempo et récupération par série',
      'Aperçu par joueur avant publication vers l’app',
    ],
    cta: 'Voir la musculation & 1RM',
    href: '/fr/features/programs/',
    visual: {
      title: 'Constructeur · bloc force',
      badge: 'CALCULÉ SUR 1RM',
      exercise: 'Back squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'kg fixe', 'RPE', 'PDC'],
      tableLabel: 'CHARGES INDIVIDUALISÉES',
      colPlayer: 'JOUEUR',
      colMax: '1RM TESTÉ',
      colLoad: 'CHARGE 82 %',
      note: 'Aperçu par joueur : chacun voit sa charge, pas celle du voisin.',
    },
  },
  tests: {
    tag: 'TESTS PHYSIQUES & AUTO-MESURE',
    title: 'Lancez une campagne de tests, les joueurs saisissent eux-mêmes.',
    body: 'Lancez une campagne sur ce que vous voulez mesurer : VMA, poids, ou un test que vous définissez vous-même. Le staff saisit les valeurs, ou les joueurs les renseignent depuis un lien magique. Les invitations partent par trois canaux : e-mail, WhatsApp et notification push.',
    points: [
      'Mesures personnalisées, créées par vos soins',
      'Saisie par le staff ou auto-mesure par les joueurs',
      'Invitations par e-mail, WhatsApp et notification push',
      'Suivi des saisies reçues, date limite et clôture automatique',
    ],
    cta: 'Voir les tests physiques',
    href: '/fr/features/tests/',
    visual: {
      title: 'Campagne · VMA',
      sub: 'Auto-mesure · date limite vendredi 20h',
      badge: 'LIEN MAGIQUE',
      progressLabel: 'Saisies reçues',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'SAISIES',
      stateReceived: 'reçu',
      statePending: 'en attente',
      note: 'Les valeurs rejoignent le profil du joueur et son historique de mesures.',
    },
  },
  reports: {
    tag: 'RAPPORTS & TABLEAU DE BORD',
    title: 'Livrez cinq rapports au staff, l’IA rédige la synthèse.',
    body: 'Les rapports se remplissent depuis ce que vous saisissez déjà, du check-in bien-être aux exports GPS. Cinq rapports couvrent la sélection, la charge, l’équipe et le joueur. Le générateur construit les autres, et l’IA rédige la synthèse comme les signaux de risque.',
    dashboard: {
      title: 'Dashboard · Charge & disponibilité',
      widgetBtn: 'Widget',
      aiBtn: 'Générer avec l’IA',
      kpis: [
        { label: 'CHARGE 7 J', value: '2 340 UA', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'DISPONIBLES', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Charge hebdomadaire · 6 sem.',
      availability: 'Disponibilité',
      availabilityValue: '83%',
      hsr: 'HSR · match vs match',
      aiTag: 'GÉNÉRÉ PAR L’IA',
    },
    report: {
      title: 'Rapport d’équipe · S12',
      aiBadge: 'RÉDIGÉ PAR L’IA',
      body: 'Taux de réponse au check-in 89 %. Fatigue moyenne 2.4 / 5, motivation 4.1 / 5. ACWR groupe 1.08. Deux joueurs hors zone, un protocole de reprise en cours.',
      items: [
        { icon: 'list-ordered', label: 'Sélection / forme · effectif classé sur la période' },
        { icon: 'trophy', label: 'Charge & disponibilité · sur 4 semaines' },
        { icon: 'download', label: 'Rapport par joueur · synthèse 7 jours' },
        { icon: 'users', label: 'Générateur de rapports · sujet, filtres, graphique' },
      ],
      aiStrip: 'Le briefing IA liste les signaux de risque, avec leur niveau de gravité et l’action à prendre.',
    },
  },
  finalCta: {
    kicker: 'COMMENCEZ SEUL, GRATUITEMENT',
    title: 'Créez votre espace et importez votre première séance.',
    body: 'Les 30 premiers jours sont au Semi-Pro, import GPS compris, sans carte. Ensuite le plan Free fait tourner l’équipe toute la saison, et votre staff vous rejoint quand il voit vos premiers rapports.',
    primaryCta: 'Créer mon espace gratuitement',
    trust: ['Sans carte bancaire', 'Sans validation du club', 'Vos données restent les vôtres'],
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: ScPageContent = {
  meta: {
    title: 'STRIVN for S&C coaches | Load, readiness, tests, reports',
    description:
      'Measure load, track readiness and run your test campaigns. STRIVN imports your Catapult or STATSports exports, then computes ACWR, monotony and strain.',
  },
  hero: {
    kicker: 'FOR STRENGTH & CONDITIONING COACHES',
    title: 'Cross your GPS export with RPE and the plan.',
    sub: 'You already export the GPS, then cross it by hand in Excel. STRIVN adds wellness, tests and history, and tells you who to hold back before the session.',
    primaryCta: 'Start for free',
    secondaryCta: 'Talk to Benoit',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20S%26C%20coach',
    fine: ['30 days of Semi-Pro', 'No card', 'GPS import by CSV'],
    board: {
      title: 'Today’s readiness · Olympique Montverne',
      stamp: 'WED 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: '7-DAY LOAD', value: '2,340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALERTS', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Ready', reduce: 'Reduce', monitor: 'Monitor', protocol: 'Protocol' },
      why: {
        title: 'Why L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 d', 'Weeks above threshold', 'Reported sleep', 'Tuesday HSR vs profile', 'Tuesday session RPE'],
        tag: 'Proposed',
        proposal: 'Thursday: volume −30 %, no speed block.',
        apply: 'Apply',
        edit: 'Edit',
        sources: 'Sources · Tuesday GPS · RPE · wellness · plan W12',
      },
    },
  },
  daily: {
    kicker: 'YOUR WORK',
    title: 'Find your nine tasks, run by STRIVN.',
    sub: 'One session a week or six, a GPS export or a plain RPE, the flow stays the same.',
    colBefore: 'WHAT YOU ALREADY DO',
    colAfter: 'HOW IT WORKS IN STRIVN',
    rows: [
      {
        before: 'Know who is fresh before the session',
        after: 'Readiness computed from the wellness check-in: green, amber, red',
      },
      {
        before: 'Bring in the session’s GPS data',
        after: 'Catapult or STATSports export imported, zones grouped into speed blocks',
      },
      {
        before: 'Dose the load',
        after: 'Load planning: weekly target in AU, split by category',
      },
      {
        before: 'Build the sessions',
        after: 'Block builder, external load estimated from drill metrics',
      },
      {
        before: 'Individualise: strength, prevention, return',
        after: 'Strength work as a % of 1RM, every player gets their own load in the app',
      },
      {
        before: 'Manage returns from injury',
        after: 'Medical tracking: return protocol, physio slots, ramp-up load',
      },
      {
        before: 'Adjust during the session',
        after: 'Live session: cumulative load and gap vs plan, in real time',
      },
      {
        before: 'Tell the coach who is fit for the match',
        after: 'Readiness and medical tracking feed straight into the call-up',
      },
      {
        before: 'Report to the staff and the board',
        after: 'AI-written reports and risk signals, shared with the staff',
      },
    ],
  },
  metrics: {
    kicker: 'METRICS',
    title: 'Read twelve metrics computed from what you enter.',
    body: 'Each metric follows a definition from the literature and computes from what you already enter. The match and training coefficients stay adjustable from the Formula panel.',
    items: [
      { name: 'ACWR', detail: 'acute 7 d ÷ (chronic 28 d ÷ 4) · zone 0.8–1.3' },
      { name: 'Monotony', detail: 'daily mean ÷ standard deviation of the week' },
      { name: 'Strain', detail: 'total weekly load × monotony' },
      { name: 'Internal load (sRPE)', detail: 'RPE × duration · 90 min at RPE 7 = 630 AU' },
      { name: 'External load', detail: 'distance and time from the GPS speed blocks' },
      { name: 'External / internal ratio', detail: 'decoupling flags fatigue' },
      { name: 'Readiness', detail: 'green 100 % · amber 65 % · red 30 %' },
      { name: 'Perceived state', detail: 'fatigue, sleep, motivation, soreness' },
      { name: 'Speed blocks', detail: 'Aerobic, High intensity, High-speed running, Sprint' },
      { name: 'Estimated external load', detail: 'sum of drill metrics, scaled to durations' },
      { name: 'Coverage rate', detail: 'share of the session described by metrics' },
      { name: '1RM', detail: 'entered, or estimated with the Epley or Brzycki formula' },
    ],
  },
  planning: {
    tag: 'LOAD PLANNING',
    title: 'Set a weekly AU target, split it by category.',
    body: 'You set the weekly target in AU, then split it between pitch, strength and recovery. Each component attaches to a session in the calendar, or stays pending. “Planned vs actual” then puts the plan against what the squad absorbed.',
    points: [
      'Weekly target in AU, budget per category',
      'Load = RPE × duration × coefficient: 90 min at RPE 7 is 630 AU',
      'Components attached to a session, or left pending',
      'Planned vs actual, per team and per player',
      'Cycles and season for recovery or competition blocks',
    ],
    cta: 'See load planning',
    href: '/en/features/training-load/',
    shot: { src: '/screenshots/load-planning.png', alt: 'Load planning in STRIVN: projected ACWR, weekly AU target and load per day', caption: 'CAPTURE · LOAD PLANNING' },
    visual: {
      week: 'Week 12 · competition phase',
      goal: 'Weekly target 3,000 AU',
      remaining: '300 AU LEFT',
      budgetLabel: 'BUDGET PER CATEGORY',
      categories: [
        { name: 'Pitch', value: '1,800 / 2,000 AU', pct: 90, tone: 'blue' },
        { name: 'Strength', value: '600 / 700 AU', pct: 86, tone: 'blue' },
        { name: 'Recovery', value: '300 / 300 AU', pct: 100, tone: 'green' },
      ],
      chartLabel: 'PLANNED VS ACTUAL',
      legendPlanned: 'Planned',
      legendActual: 'Actual',
      days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs plan', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs plan', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'DRILL LIBRARY & METRICS',
    title: 'Quantify your pitch drills, external load computes itself.',
    body: 'Capture a drill from a link, a video, a diagram or plain text. Attach its metrics (sprints, distance, expected RPE, pitch area) and the session computes its estimated external load. Taking the block from 15 to 20 minutes scales the cumulative metrics up in proportion.',
    points: [
      'Capture from a link, photo, video, tactical diagram or text',
      'Folders, tags and an inbox before publishing',
      'Standard metrics, GPS columns and custom metrics',
      'Public link sharing without an account, revocable at any time',
    ],
    cta: 'See the drill library',
    href: '/en/features/exercise-library/',
    visual: {
      title: 'Small-sided game 8v8 · high press',
      sub: 'Folder “Pressing” · tags: intensity, transition',
      badge: 'DIAGRAM',
      metricsLabel: 'ATTACHED METRICS · 15-MIN BLOCK',
      metrics: [
        { name: 'Total distance', tag: 'CUMULATIVE', tagTone: 'blue', value: '1,200 m' },
        { name: 'Sprints', tag: 'CUMULATIVE', tagTone: 'blue', value: '6' },
        { name: 'Accelerations', tag: 'CUMULATIVE', tagTone: 'blue', value: '14' },
        { name: 'Expected RPE', tag: 'INTENSIVE', tagTone: 'plain', value: '7 / 10' },
        { name: 'Players · area', tag: 'INTENSIVE', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Ball touches', tag: 'CUSTOM', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'The block goes to 20 min',
      scaling: [
        { label: 'Distance', from: '1,200 m', to: '1,600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · area', from: '7 · 400 m²', to: '· unchanged', unchanged: true },
      ],
      totalTitle: 'Estimated external load · Thursday session',
      totalValue: '4,850 m · 21 sprints',
      coverageLabel: 'Metric coverage rate',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'STRENGTH & 1RM',
    title: 'Prescribe one percentage, every player gets their kilos.',
    body: 'You enter the 1RM, or you estimate it from a sub-maximal set with the Epley or Brzycki formula. You prescribe “Squat 4×5 @ 82 %” for the whole group, and each player gets their kilos in the app.',
    points: [
      'Blocks as straight sets, supersets or circuits',
      'Load modes: % 1RM, fixed kg, RPE or bodyweight',
      'Reps, intensity, tempo and rest per set',
      'Per-player preview before publishing to the app',
    ],
    cta: 'See strength & 1RM',
    href: '/en/features/programs/',
    visual: {
      title: 'Builder · strength block',
      badge: 'COMPUTED ON 1RM',
      exercise: 'Back squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'fixed kg', 'RPE', 'BW'],
      tableLabel: 'INDIVIDUALISED LOADS',
      colPlayer: 'PLAYER',
      colMax: 'TESTED 1RM',
      colLoad: 'LOAD AT 82 %',
      note: 'Per-player preview: each sees their own load, not their neighbour’s.',
    },
  },
  tests: {
    tag: 'PHYSICAL TESTS & SELF-MEASUREMENT',
    title: 'Launch a test campaign, players enter the values themselves.',
    body: 'Launch a campaign on whatever you want to measure: MAS, weight, or a test you define yourself. The staff enters the values, or the players fill them in from a magic link. Invitations go out on three channels: email, WhatsApp and push notification.',
    points: [
      'Custom measures, created by you',
      'Staff entry or player self-measurement',
      'Invitations by email, WhatsApp and push notification',
      'Tracking of entries received, deadline and automatic closing',
    ],
    cta: 'See physical tests',
    href: '/en/features/tests/',
    visual: {
      title: 'Campaign · MAS',
      sub: 'Self-measurement · deadline Friday 8 pm',
      badge: 'MAGIC LINK',
      progressLabel: 'Entries received',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'ENTRIES',
      stateReceived: 'received',
      statePending: 'pending',
      note: 'Values join the player profile and their measurement history.',
    },
  },
  reports: {
    tag: 'REPORTS & DASHBOARD',
    title: 'Hand the staff five reports, AI writes the summary.',
    body: 'The reports fill themselves from what you already enter, from the wellness check-in to the GPS exports. Five reports cover selection, load, the team and the player. The generator builds the others, and the AI writes both the summary and the risk signals.',
    dashboard: {
      title: 'Dashboard · Load & availability',
      widgetBtn: 'Widget',
      aiBtn: 'Generate with AI',
      kpis: [
        { label: '7-DAY LOAD', value: '2,340 AU', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'AVAILABLE', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Weekly load · 6 wks',
      availability: 'Availability',
      availabilityValue: '83%',
      hsr: 'HSR · match vs match',
      aiTag: 'AI-GENERATED',
    },
    report: {
      title: 'Team report · W12',
      aiBadge: 'WRITTEN BY AI',
      body: 'Check-in response rate 89 %. Average fatigue 2.4 / 5, motivation 4.1 / 5. Squad ACWR 1.08. Two players out of zone, one return protocol in progress.',
      items: [
        { icon: 'list-ordered', label: 'Selection / form · squad ranked over the period' },
        { icon: 'trophy', label: 'Load & availability · over 4 weeks' },
        { icon: 'download', label: 'Per-player report · 7-day summary' },
        { icon: 'users', label: 'Report generator · subject, filters, chart' },
      ],
      aiStrip: 'The AI briefing lists the risk signals, with their severity level and the action to take.',
    },
  },
  finalCta: {
    kicker: 'START ALONE, FOR FREE',
    title: 'Create your space and import your first session.',
    body: 'The first 30 days are on Semi-Pro, GPS import included, no card. Then the Free plan runs the team for the whole season, and your staff joins once they see your first reports.',
    primaryCta: 'Create my space for free',
    trust: ['No credit card', 'No club approval', 'Your data stays yours'],
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: ScPageContent = {
  meta: {
    title: 'STRIVN voor fysieke trainers | Belasting, readiness, testen, rapporten',
    description:
      'Doseer de belasting, volg de readiness en start uw testcampagnes. STRIVN importeert uw Catapult- of STATSports-export en berekent ACWR, monotonie en strain.',
  },
  hero: {
    kicker: 'VOOR FYSIEKE TRAINERS',
    title: 'Kruis uw GPS-export met RPE en het plan.',
    sub: 'U exporteert de GPS al en kruist die daarna met de hand in Excel. STRIVN voegt wellness, testen en historiek toe, en zegt u wie u vóór de training ontlast.',
    primaryCta: 'Gratis beginnen',
    secondaryCta: 'Praat met Benoit',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20fysieke%20trainer',
    fine: ['30 dagen Semi-Pro', 'Zonder kaart', 'GPS-import via CSV'],
    board: {
      title: 'Readiness vandaag · Olympique Montverne',
      stamp: 'WOE 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'BELASTING 7 D', value: '2.340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALERTS', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Klaar', reduce: 'Ontlasten', monitor: 'Opvolgen', protocol: 'Protocol' },
      why: {
        title: 'Waarom L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 d', 'Weken boven de drempel', 'Opgegeven slaap', 'HSR dinsdag vs profiel', 'RPE training dinsdag'],
        tag: 'Voorgesteld',
        proposal: 'Donderdag: volume −30 %, geen snelheidsblok.',
        apply: 'Toepassen',
        edit: 'Aanpassen',
        sources: 'Bronnen · GPS dinsdag · RPE · wellness · plan W12',
      },
    },
  },
  daily: {
    kicker: 'UW WERK',
    title: 'Vind uw negen taken terug in STRIVN.',
    sub: 'Eén training per week of zes, een GPS-export of gewoon RPE, het verloop blijft hetzelfde.',
    colBefore: 'WAT U AL DOET',
    colAfter: 'HOE HET WERKT IN STRIVN',
    rows: [
      {
        before: 'Weten wie fris is vóór de training',
        after: 'Readiness berekend uit de wellness-check-in: groen, oranje, rood',
      },
      {
        before: 'De GPS-data van de training verwerken',
        after: 'Catapult- of STATSports-export geïmporteerd, zones gegroepeerd in snelheidsblokken',
      },
      {
        before: 'De belasting doseren',
        after: 'Belastingsplanning: weekdoel in AU, verdeeld per categorie',
      },
      {
        before: 'De trainingen opbouwen',
        after: 'Blokkenbouwer, externe belasting geschat uit oefenmetrieken',
      },
      {
        before: 'Individualiseren: kracht, preventie, terugkeer',
        after: 'Krachttraining in % van het 1RM, elke speler krijgt zijn eigen belasting in de app',
      },
      {
        before: 'Terugkeer na blessure begeleiden',
        after: 'Medische opvolging: terugkeerprotocol, kinéslots, opbouwbelasting',
      },
      {
        before: 'Bijsturen tijdens de training',
        after: 'Live training: cumulatieve belasting en afwijking t.o.v. plan, in realtime',
      },
      {
        before: 'De coach zeggen wie de wedstrijd kan spelen',
        after: 'Readiness en medische opvolging komen rechtstreeks in de selectie',
      },
      {
        before: 'Verantwoording afleggen aan staf en bestuur',
        after: 'Door AI geschreven rapporten en risicosignalen, gedeeld met de staf',
      },
    ],
  },
  metrics: {
    kicker: 'INDICATOREN',
    title: 'Lees twaalf indicatoren berekend uit uw eigen invoer.',
    body: 'Elke indicator volgt een definitie uit de literatuur en wordt berekend uit wat u al invoert. De coëfficiënten voor wedstrijd en training blijven aanpasbaar via het Formule-paneel.',
    items: [
      { name: 'ACWR', detail: 'acuut 7 d ÷ (chronisch 28 d ÷ 4) · zone 0,8–1,3' },
      { name: 'Monotonie', detail: 'daggemiddelde ÷ standaardafwijking van de week' },
      { name: 'Strain', detail: 'totale weekbelasting × monotonie' },
      { name: 'Interne belasting (sRPE)', detail: 'RPE × duur · 90 min bij RPE 7 = 630 AU' },
      { name: 'Externe belasting', detail: 'afstand en tijd uit de GPS-snelheidsblokken' },
      { name: 'Ratio extern / intern', detail: 'ontkoppeling wijst op vermoeidheid' },
      { name: 'Readiness', detail: 'groen 100 % · oranje 65 % · rood 30 %' },
      { name: 'Beleving', detail: 'vermoeidheid, slaap, motivatie, pijn' },
      { name: 'Snelheidsblokken', detail: 'Aeroob, Hoge intensiteit, Hoge-snelheidsloop, Sprint' },
      { name: 'Geschatte externe belasting', detail: 'som van de oefenmetrieken, geschaald naar de duur' },
      { name: 'Dekkingsgraad', detail: 'deel van de training beschreven door metrieken' },
      { name: '1RM', detail: 'ingevoerd, of geschat met de formule Epley of Brzycki' },
    ],
  },
  planning: {
    tag: 'BELASTINGSPLANNING',
    title: 'Bepaal het weekdoel in AU, verdeel het per categorie.',
    body: 'U bepaalt het weekdoel in AU en verdeelt het over veld, kracht en herstel. Elk onderdeel hangt aan een training in de kalender, of blijft in wacht. Daarna zet “Gepland vs gerealiseerd” het plan naast wat de groep werkelijk verwerkte.',
    points: [
      'Weekdoel in AU, budget per categorie',
      'Belasting = RPE × duur × coëfficiënt: 90 min bij RPE 7 is 630 AU',
      'Onderdelen gekoppeld aan een training, of in wacht gelaten',
      'Gepland vs gerealiseerd, per team en per speler',
      'Cycli en seizoen voor herstel- of competitieblokken',
    ],
    cta: 'Bekijk de belastingsplanning',
    href: '/nl/features/training-load/',
    shot: { src: '/screenshots/load-planning.png', alt: 'Belastingsplanning in STRIVN: verwachte ACWR, weekdoel in AU en belasting per dag', caption: 'CAPTURE · BELASTINGSPLANNING' },
    visual: {
      week: 'Week 12 · competitiefase',
      goal: 'Weekdoel 3.000 AU',
      remaining: 'NOG 300 AU',
      budgetLabel: 'BUDGET PER CATEGORIE',
      categories: [
        { name: 'Veld', value: '1.800 / 2.000 AU', pct: 90, tone: 'blue' },
        { name: 'Kracht', value: '600 / 700 AU', pct: 86, tone: 'blue' },
        { name: 'Herstel', value: '300 / 300 AU', pct: 100, tone: 'green' },
      ],
      chartLabel: 'GEPLAND VS GEREALISEERD',
      legendPlanned: 'Gepland',
      legendActual: 'Gerealiseerd',
      days: ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs plan', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs plan', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'OEFENBIBLIOTHEEK & METRIEKEN',
    title: 'Kwantificeer uw veldoefeningen, de externe belasting volgt.',
    body: 'Leg een oefening vast via een link, een video, een schema of tekst. Koppel er de metrieken aan (sprints, afstand, verwachte RPE, oppervlakte) en de training berekent haar geschatte externe belasting. Gaat het blok van 15 naar 20 minuten, dan schalen de cumulatieve metrieken evenredig mee.',
    points: [
      'Vastleggen via link, foto, video, tactisch schema of tekst',
      'Mappen, tags en een postvak vóór publicatie',
      'Standaardmetrieken, GPS-kolommen en eigen metrieken',
      'Delen via publieke link zonder account, altijd intrekbaar',
    ],
    cta: 'Bekijk de oefenbibliotheek',
    href: '/nl/features/exercise-library/',
    visual: {
      title: 'Klein spel 8v8 · hoge pressing',
      sub: 'Map “Pressing” · tags: intensiteit, omschakeling',
      badge: 'SCHEMA',
      metricsLabel: 'GEKOPPELDE METRIEKEN · BLOK VAN 15 MIN',
      metrics: [
        { name: 'Totale afstand', tag: 'CUMULATIEF', tagTone: 'blue', value: '1.200 m' },
        { name: 'Sprints', tag: 'CUMULATIEF', tagTone: 'blue', value: '6' },
        { name: 'Versnellingen', tag: 'CUMULATIEF', tagTone: 'blue', value: '14' },
        { name: 'Verwachte RPE', tag: 'INTENSIEF', tagTone: 'plain', value: '7 / 10' },
        { name: 'Spelers · oppervlakte', tag: 'INTENSIEF', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Balcontacten', tag: 'EIGEN', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'Het blok gaat naar 20 min',
      scaling: [
        { label: 'Afstand', from: '1.200 m', to: '1.600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · oppervlakte', from: '7 · 400 m²', to: '· ongewijzigd', unchanged: true },
      ],
      totalTitle: 'Geschatte externe belasting · training donderdag',
      totalValue: '4.850 m · 21 sprints',
      coverageLabel: 'Dekkingsgraad van de metrieken',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'KRACHTTRAINING & 1RM',
    title: 'Schrijf één percentage voor, elke speler krijgt zijn kilo’s.',
    body: 'U voert het 1RM rechtstreeks in, of u schat het uit een submaximale set met de formule Epley of Brzycki. U schrijft “Squat 4×5 @ 82 %” voor de hele groep voor, en elke speler krijgt zijn kilo’s in de app.',
    points: [
      'Blokken als enkele set, superset of circuit',
      'Belastingsmodi: % 1RM, vaste kg, RPE of lichaamsgewicht',
      'Herhalingen, intensiteit, tempo en rust per set',
      'Voorbeeld per speler vóór publicatie naar de app',
    ],
    cta: 'Bekijk krachttraining & 1RM',
    href: '/nl/features/programs/',
    visual: {
      title: 'Bouwer · krachtblok',
      badge: 'BEREKEND OP 1RM',
      exercise: 'Back squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'vaste kg', 'RPE', 'LG'],
      tableLabel: 'GEÏNDIVIDUALISEERDE BELASTINGEN',
      colPlayer: 'SPELER',
      colMax: 'GETEST 1RM',
      colLoad: 'BELASTING 82 %',
      note: 'Voorbeeld per speler: elk ziet zijn eigen belasting, niet die van de buur.',
    },
  },
  tests: {
    tag: 'FYSIEKE TESTEN & ZELFMETING',
    title: 'Start een testcampagne, de spelers vullen zelf in.',
    body: 'Start een campagne op wat u wilt meten: MAS, gewicht, of een test die u zelf definieert. De staf voert de waarden in, of de spelers vullen ze zelf in via een magische link. De uitnodigingen vertrekken via drie kanalen: e-mail, WhatsApp en pushnotificatie.',
    points: [
      'Eigen metingen, door uzelf aangemaakt',
      'Invoer door de staf of zelfmeting door de spelers',
      'Uitnodigingen per e-mail, WhatsApp en pushnotificatie',
      'Opvolging van ontvangen invoer, deadline en automatische afsluiting',
    ],
    cta: 'Bekijk de fysieke testen',
    href: '/nl/features/tests/',
    visual: {
      title: 'Campagne · MAS',
      sub: 'Zelfmeting · deadline vrijdag 20u',
      badge: 'MAGISCHE LINK',
      progressLabel: 'Ontvangen invoer',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'INVOER',
      stateReceived: 'ontvangen',
      statePending: 'in afwachting',
      note: 'De waarden komen bij het spelersprofiel en zijn meetgeschiedenis.',
    },
  },
  reports: {
    tag: 'RAPPORTEN & DASHBOARD',
    title: 'Lever de staf vijf rapporten, door AI samengevat.',
    body: 'De rapporten vullen zich uit wat u al invoert, van de wellness-check-in tot de GPS-exports. Vijf rapporten dekken de selectie, de belasting, het team en de speler. De generator bouwt de rest, en de AI schrijft zowel de synthese als de risicosignalen.',
    dashboard: {
      title: 'Dashboard · Belasting & beschikbaarheid',
      widgetBtn: 'Widget',
      aiBtn: 'Genereren met AI',
      kpis: [
        { label: 'BELASTING 7 D', value: '2.340 AU', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'BESCHIKBAAR', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Weekbelasting · 6 wkn',
      availability: 'Beschikbaarheid',
      availabilityValue: '83%',
      hsr: 'HSR · wedstrijd vs wedstrijd',
      aiTag: 'GEGENEREERD DOOR AI',
    },
    report: {
      title: 'Teamrapport · W12',
      aiBadge: 'GESCHREVEN DOOR AI',
      body: 'Antwoordgraad op de check-in 89 %. Gemiddelde vermoeidheid 2,4 / 5, motivatie 4,1 / 5. ACWR groep 1,08. Twee spelers buiten zone, één terugkeerprotocol lopend.',
      items: [
        { icon: 'list-ordered', label: 'Selectie / vorm · kern gerangschikt over de periode' },
        { icon: 'trophy', label: 'Belasting & beschikbaarheid · over 4 weken' },
        { icon: 'download', label: 'Rapport per speler · synthese 7 dagen' },
        { icon: 'users', label: 'Rapportgenerator · onderwerp, filters, grafiek' },
      ],
      aiStrip: 'De AI-briefing somt de risicosignalen op, met hun ernstniveau en de actie die volgt.',
    },
  },
  finalCta: {
    kicker: 'BEGIN ALLEEN, GRATIS',
    title: 'Maak uw omgeving aan en importeer uw eerste training.',
    body: 'De eerste 30 dagen zitten op Semi-Pro, GPS-import inbegrepen, zonder kaart. Daarna draait het Free-plan het team het hele seizoen, en uw staf sluit aan zodra ze uw eerste rapporten zien.',
    primaryCta: 'Mijn omgeving gratis aanmaken',
    trust: ['Zonder kredietkaart', 'Zonder clubgoedkeuring', 'Uw data blijft van u'],
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: ScPageContent = {
  meta: {
    title: 'STRIVN für Athletiktrainer | Belastung, Readiness, Tests, Berichte',
    description:
      'Belastung dosieren, Readiness verfolgen, Testkampagnen starten. STRIVN importiert Ihre Catapult- oder STATSports-Exporte und berechnet ACWR, Monotonie und Strain.',
  },
  hero: {
    kicker: 'FÜR ATHLETIKTRAINER',
    title: 'Verknüpfen Sie den GPS-Export mit RPE und Plan.',
    sub: 'Sie exportieren das GPS bereits und gleichen es danach von Hand in Excel ab. STRIVN ergänzt Wellness, Tests und Verlauf und zeigt Ihnen vor der Einheit, wen Sie entlasten.',
    primaryCta: 'Kostenlos starten',
    secondaryCta: 'Mit Benoit sprechen',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20Athletiktrainer',
    fine: ['30 Tage Semi-Pro', 'Ohne Karte', 'GPS-Import per CSV'],
    board: {
      title: 'Readiness heute · Olympique Montverne',
      stamp: 'MI 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'LAST 7 T', value: '2.340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALARME', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Bereit', reduce: 'Entlasten', monitor: 'Beobachten', protocol: 'Protokoll' },
      why: {
        title: 'Warum L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 T', 'Wochen über der Schwelle', 'Angegebener Schlaf', 'HSR Dienstag vs Profil', 'RPE Einheit Dienstag'],
        tag: 'Vorgeschlagen',
        proposal: 'Donnerstag: Volumen −30 %, kein Sprintblock.',
        apply: 'Übernehmen',
        edit: 'Ändern',
        sources: 'Quellen · GPS Dienstag · RPE · Wellness · Plan KW 12',
      },
    },
  },
  daily: {
    kicker: 'IHR ALLTAG',
    title: 'Finden Sie Ihre neun Aufgaben in STRIVN.',
    sub: 'Eine Einheit pro Woche oder sechs, ein GPS-Export oder nur RPE, der Ablauf bleibt derselbe.',
    colBefore: 'WAS SIE OHNEHIN TUN',
    colAfter: 'WIE ES IN STRIVN LÄUFT',
    rows: [
      {
        before: 'Wissen, wer vor der Einheit frisch ist',
        after: 'Readiness aus dem Wellness-Check-in berechnet: grün, orange, rot',
      },
      {
        before: 'Die GPS-Daten der Einheit einbinden',
        after: 'Catapult- oder STATSports-Export importiert, Zonen zu Geschwindigkeitsblöcken gebündelt',
      },
      {
        before: 'Die Belastung dosieren',
        after: 'Belastungsplanung: Wochenziel in AU, nach Kategorie aufgeteilt',
      },
      {
        before: 'Die Einheiten aufbauen',
        after: 'Block-Builder, externe Belastung aus Übungsmetriken geschätzt',
      },
      {
        before: 'Individualisieren: Kraft, Prävention, Rückkehr',
        after: 'Krafttraining in % des 1RM, jeder Spieler erhält seine Last in der App',
      },
      {
        before: 'Rückkehr nach Verletzungen begleiten',
        after: 'Medizinische Betreuung: Rückkehrprotokoll, Physio-Slots, Aufbaubelastung',
      },
      {
        before: 'Während der Einheit nachsteuern',
        after: 'Einheit live: kumulierte Belastung und Abweichung zum Plan, in Echtzeit',
      },
      {
        before: 'Dem Cheftrainer sagen, wer für das Spiel fit ist',
        after: 'Readiness und medizinische Daten fließen direkt ins Aufgebot',
      },
      {
        before: 'Staff und Vorstand Rechenschaft geben',
        after: 'KI-geschriebene Berichte und Risikosignale, mit dem Staff geteilt',
      },
    ],
  },
  metrics: {
    kicker: 'KENNZAHLEN',
    title: 'Zwölf Kennzahlen lesen, aus Ihren Eingaben berechnet.',
    body: 'Jede Kennzahl folgt einer Definition aus der Literatur und wird aus dem berechnet, was Sie ohnehin erfassen. Die Koeffizienten für Spiel und Training bleiben im Formel-Panel einstellbar.',
    items: [
      { name: 'ACWR', detail: 'akut 7 T ÷ (chronisch 28 T ÷ 4) · Zone 0,8–1,3' },
      { name: 'Monotonie', detail: 'Tagesmittel ÷ Standardabweichung der Woche' },
      { name: 'Strain', detail: 'Gesamte Wochenbelastung × Monotonie' },
      { name: 'Interne Belastung (sRPE)', detail: 'RPE × Dauer · 90 min bei RPE 7 = 630 AU' },
      { name: 'Externe Belastung', detail: 'Distanz und Zeit aus den GPS-Geschwindigkeitsblöcken' },
      { name: 'Verhältnis extern / intern', detail: 'Entkopplung signalisiert Ermüdung' },
      { name: 'Readiness', detail: 'grün 100 % · orange 65 % · rot 30 %' },
      { name: 'Empfinden', detail: 'Ermüdung, Schlaf, Motivation, Schmerz' },
      { name: 'Geschwindigkeitsblöcke', detail: 'Aerob, Hohe Intensität, Hochgeschwindigkeitslauf, Sprint' },
      { name: 'Geschätzte externe Belastung', detail: 'Summe der Übungsmetriken, auf die Dauer skaliert' },
      { name: 'Abdeckungsgrad', detail: 'Anteil der Einheit, der durch Metriken beschrieben ist' },
      { name: '1RM', detail: 'erfasst, oder mit der Formel Epley oder Brzycki geschätzt' },
    ],
  },
  planning: {
    tag: 'BELASTUNGSPLANUNG',
    title: 'Wochenziel in AU setzen, nach Kategorie verteilen.',
    body: 'Sie setzen das Wochenziel in AU und verteilen es auf Platz, Kraft und Regeneration. Jede Komponente hängt an einer Einheit im Kalender, oder bleibt offen. Danach stellt „Plan vs Ist“ den Plan dem gegenüber, was die Gruppe aufgenommen hat.',
    points: [
      'Wochenziel in AU, Budget je Kategorie',
      'Belastung = RPE × Dauer × Koeffizient: 90 min bei RPE 7 sind 630 AU',
      'Komponenten an eine Einheit gehängt oder offen gelassen',
      'Plan vs Ist, je Team und je Spieler',
      'Zyklen und Saison für Regenerations- oder Wettkampfblöcke',
    ],
    cta: 'Belastungsplanung ansehen',
    href: '/de/features/training-load/',
    shot: { src: '/screenshots/load-planning.png', alt: 'Belastungsplanung in STRIVN: prognostizierte ACWR, Wochenziel in AU und Belastung pro Tag', caption: 'AUFNAHME · BELASTUNGSPLANUNG' },
    visual: {
      week: 'Woche 12 · Wettkampfphase',
      goal: 'Wochenziel 3.000 AU',
      remaining: 'NOCH 300 AU',
      budgetLabel: 'BUDGET JE KATEGORIE',
      categories: [
        { name: 'Platz', value: '1.800 / 2.000 AU', pct: 90, tone: 'blue' },
        { name: 'Kraft', value: '600 / 700 AU', pct: 86, tone: 'blue' },
        { name: 'Regeneration', value: '300 / 300 AU', pct: 100, tone: 'green' },
      ],
      chartLabel: 'PLAN VS IST',
      legendPlanned: 'Plan',
      legendActual: 'Ist',
      days: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs Plan', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs Plan', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'ÜBUNGSBIBLIOTHEK & METRIKEN',
    title: 'Platzübungen quantifizieren, die externe Belastung folgt.',
    body: 'Erfassen Sie eine Übung über einen Link, ein Video, eine Skizze oder Text. Hängen Sie ihre Metriken an (Sprints, Distanz, erwarteter RPE, Fläche) und die Einheit berechnet ihre geschätzte externe Belastung. Geht der Block von 15 auf 20 Minuten, skalieren die kumulierten Metriken proportional mit.',
    points: [
      'Erfassung per Link, Foto, Video, Taktikskizze oder Text',
      'Ordner, Tags und Posteingang vor der Veröffentlichung',
      'Standardmetriken, GPS-Spalten und eigene Metriken',
      'Teilen per öffentlichem Link ohne Konto, jederzeit widerrufbar',
    ],
    cta: 'Übungsbibliothek ansehen',
    href: '/de/features/exercise-library/',
    visual: {
      title: 'Kleinfeldspiel 8v8 · hohes Pressing',
      sub: 'Ordner „Pressing“ · Tags: Intensität, Umschalten',
      badge: 'SKIZZE',
      metricsLabel: 'ANGEHÄNGTE METRIKEN · BLOCK VON 15 MIN',
      metrics: [
        { name: 'Gesamtdistanz', tag: 'KUMULIERT', tagTone: 'blue', value: '1.200 m' },
        { name: 'Sprints', tag: 'KUMULIERT', tagTone: 'blue', value: '6' },
        { name: 'Beschleunigungen', tag: 'KUMULIERT', tagTone: 'blue', value: '14' },
        { name: 'Erwarteter RPE', tag: 'INTENSIV', tagTone: 'plain', value: '7 / 10' },
        { name: 'Spieler · Fläche', tag: 'INTENSIV', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Ballkontakte', tag: 'EIGEN', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'Der Block geht auf 20 min',
      scaling: [
        { label: 'Distanz', from: '1.200 m', to: '1.600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · Fläche', from: '7 · 400 m²', to: '· unverändert', unchanged: true },
      ],
      totalTitle: 'Geschätzte externe Belastung · Einheit Donnerstag',
      totalValue: '4.850 m · 21 Sprints',
      coverageLabel: 'Abdeckungsgrad der Metriken',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'KRAFTTRAINING & 1RM',
    title: 'Einen Prozentsatz verschreiben, jeder erhält seine Kilos.',
    body: 'Sie erfassen das 1RM direkt, oder Sie schätzen es aus einem submaximalen Satz mit der Formel Epley oder Brzycki. Sie verschreiben „Squat 4×5 @ 82 %“ für die ganze Gruppe, und jeder Spieler erhält seine Kilos in der App.',
    points: [
      'Blöcke als einfacher Satz, Superset oder Zirkel',
      'Lastmodi: % 1RM, feste kg, RPE oder Körpergewicht',
      'Wiederholungen, Intensität, Tempo und Pause je Satz',
      'Vorschau je Spieler vor der Veröffentlichung in die App',
    ],
    cta: 'Krafttraining & 1RM ansehen',
    href: '/de/features/programs/',
    visual: {
      title: 'Builder · Kraftblock',
      badge: 'AUF 1RM BERECHNET',
      exercise: 'Back Squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'feste kg', 'RPE', 'KG'],
      tableLabel: 'INDIVIDUALISIERTE LASTEN',
      colPlayer: 'SPIELER',
      colMax: 'GETESTETES 1RM',
      colLoad: 'LAST 82 %',
      note: 'Vorschau je Spieler: Jeder sieht seine Last, nicht die des Nachbarn.',
    },
  },
  tests: {
    tag: 'LEISTUNGSTESTS & SELBSTMESSUNG',
    title: 'Kampagne starten, die Spieler tragen selbst ein.',
    body: 'Starten Sie eine Kampagne auf dem, was Sie messen wollen: MAS, Gewicht oder ein Test, den Sie selbst definieren. Der Staff trägt die Werte ein, oder die Spieler erfassen sie selbst über einen Magic Link. Die Einladungen gehen über drei Kanäle: E-Mail, WhatsApp und Push-Benachrichtigung.',
    points: [
      'Eigene Messgrößen, von Ihnen angelegt',
      'Eingabe durch den Staff oder Selbstmessung durch die Spieler',
      'Einladungen per E-Mail, WhatsApp und Push-Benachrichtigung',
      'Überblick über eingegangene Eingaben, Frist und automatischer Abschluss',
    ],
    cta: 'Leistungstests ansehen',
    href: '/de/features/tests/',
    visual: {
      title: 'Kampagne · MAS',
      sub: 'Selbstmessung · Frist Freitag 20 Uhr',
      badge: 'MAGIC LINK',
      progressLabel: 'Eingegangene Eingaben',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'EINGABEN',
      stateReceived: 'erhalten',
      statePending: 'ausstehend',
      note: 'Die Werte laufen ins Spielerprofil und dessen Messhistorie.',
    },
  },
  reports: {
    tag: 'BERICHTE & DASHBOARD',
    title: 'Liefern Sie dem Staff fünf Berichte, KI-Synthese inklusive.',
    body: 'Die Berichte füllen sich aus dem, was Sie ohnehin erfassen, vom Wellness-Check-in bis zu den GPS-Exporten. Fünf Berichte decken Auswahl, Belastung, Team und Spieler ab. Der Generator baut die übrigen, und die KI schreibt die Synthese wie auch die Risikosignale.',
    dashboard: {
      title: 'Dashboard · Belastung & Verfügbarkeit',
      widgetBtn: 'Widget',
      aiBtn: 'Mit KI generieren',
      kpis: [
        { label: 'LAST 7 T', value: '2.340 AU', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'VERFÜGBAR', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Wochenbelastung · 6 Wo.',
      availability: 'Verfügbarkeit',
      availabilityValue: '83%',
      hsr: 'HSR · Spiel vs Spiel',
      aiTag: 'KI-GENERIERT',
    },
    report: {
      title: 'Teambericht · W12',
      aiBadge: 'VON DER KI GESCHRIEBEN',
      body: 'Antwortquote beim Check-in 89 %. Mittlere Ermüdung 2,4 / 5, Motivation 4,1 / 5. ACWR Gruppe 1,08. Zwei Spieler außerhalb der Zone, ein Rückkehrprotokoll läuft.',
      items: [
        { icon: 'list-ordered', label: 'Auswahl / Form · Kader über den Zeitraum gereiht' },
        { icon: 'trophy', label: 'Belastung & Verfügbarkeit · über 4 Wochen' },
        { icon: 'download', label: 'Bericht je Spieler · Synthese 7 Tage' },
        { icon: 'users', label: 'Berichtsgenerator · Thema, Filter, Diagramm' },
      ],
      aiStrip: 'Das KI-Briefing listet die Risikosignale auf, mit Schweregrad und der nächsten Aktion.',
    },
  },
  finalCta: {
    kicker: 'ALLEIN STARTEN, KOSTENLOS',
    title: 'Bereich erstellen und die erste Einheit importieren.',
    body: 'Die ersten 30 Tage laufen auf Semi-Pro, GPS-Import inklusive, ohne Karte. Danach trägt der Free-Plan das Team die ganze Saison, und Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.',
    primaryCta: 'Meinen Bereich kostenlos erstellen',
    trust: ['Ohne Kreditkarte', 'Ohne Vereinsfreigabe', 'Ihre Daten bleiben Ihre'],
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: ScPageContent = {
  meta: {
    title: 'STRIVN para preparadores físicos | Carga, readiness, testes, relatórios',
    description:
      'Doseie a carga, siga o readiness e lance as suas campanhas de testes. O STRIVN importa as suas exportações Catapult ou STATSports e calcula ACWR, monotonia e constrangimento.',
  },
  hero: {
    kicker: 'PARA PREPARADORES FÍSICOS',
    title: 'Cruze a exportação GPS com o RPE e o plano.',
    sub: 'Já exporta o GPS e depois cruza-o à mão no Excel. O STRIVN junta o wellness, os testes e o histórico, e diz-lhe quem aliviar antes da sessão.',
    primaryCta: 'Começar gratuitamente',
    secondaryCta: 'Falar com o Benoit',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20preparador%20fisico',
    fine: ['30 dias de Semi-Pro', 'Sem cartão', 'Importação GPS por CSV'],
    board: {
      title: 'Readiness do dia · Olympique Montverne',
      stamp: 'QUA 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'CARGA 7 D', value: '2 340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALERTAS', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Apto', reduce: 'Aliviar', monitor: 'Vigiar', protocol: 'Protocolo' },
      why: {
        title: 'Porquê L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 d', 'Semanas acima do limiar', 'Sono declarado', 'HSR terça vs perfil', 'RPE sessão de terça'],
        tag: 'Proposto',
        proposal: 'Quinta: volume −30 %, sem bloco de velocidade.',
        apply: 'Aplicar',
        edit: 'Editar',
        sources: 'Fontes · GPS terça · RPE · wellness · plano S12',
      },
    },
  },
  daily: {
    kicker: 'O SEU TRABALHO',
    title: 'Encontre as suas nove tarefas no STRIVN.',
    sub: 'Uma sessão por semana ou seis, uma exportação GPS ou apenas RPE, o percurso mantém-se igual.',
    colBefore: 'O QUE JÁ FAZ',
    colAfter: 'COMO ACONTECE NO STRIVN',
    rows: [
      {
        before: 'Saber quem está fresco antes da sessão',
        after: 'Readiness calculado a partir do check-in de bem-estar: verde, laranja, vermelho',
      },
      {
        before: 'Integrar os dados GPS da sessão',
        after: 'Exportação Catapult ou STATSports importada, zonas agrupadas em blocos de velocidade',
      },
      {
        before: 'Dosear a carga',
        after: 'Planeamento de carga: objetivo semanal em UA, repartido por categoria',
      },
      {
        before: 'Construir as sessões',
        after: 'Construtor por blocos, carga externa estimada a partir das métricas de exercício',
      },
      {
        before: 'Individualizar: força, prevenção, regresso',
        after: 'Musculação em % do 1RM, cada jogador recebe a sua carga na app',
      },
      {
        before: 'Enquadrar os regressos de lesão',
        after: 'Acompanhamento médico: protocolo de regresso, marcações de fisio, carga de retoma',
      },
      {
        before: 'Ajustar durante a sessão',
        after: 'Sessão em direto: carga acumulada e desvio vs previsto, em tempo real',
      },
      {
        before: 'Dizer ao treinador quem está apto para o jogo',
        after: 'Readiness e acompanhamento médico entram diretamente na convocatória',
      },
      {
        before: 'Prestar contas ao staff e à direção',
        after: 'Relatórios redigidos pela IA e sinais de risco, partilhados com o staff',
      },
    ],
  },
  metrics: {
    kicker: 'INDICADORES',
    title: 'Leia doze indicadores calculados a partir do que introduz.',
    body: 'Cada indicador segue uma definição da literatura e é calculado a partir do que já introduz. Os coeficientes de jogo e de treino ficam ajustáveis no painel Fórmula.',
    items: [
      { name: 'ACWR', detail: 'carga aguda 7 d ÷ (crónica 28 d ÷ 4) · zona 0,8–1,3' },
      { name: 'Monotonia', detail: 'média diária ÷ desvio-padrão da semana' },
      { name: 'Constrangimento', detail: 'carga semanal total × monotonia' },
      { name: 'Carga interna (sRPE)', detail: 'RPE × duração · 90 min a RPE 7 = 630 UA' },
      { name: 'Carga externa', detail: 'distância e tempo vindos dos blocos de velocidade GPS' },
      { name: 'Rácio externo / interno', detail: 'o desacoplamento sinaliza a fadiga' },
      { name: 'Readiness', detail: 'verde 100 % · laranja 65 % · vermelho 30 %' },
      { name: 'Perceção', detail: 'fadiga, sono, motivação, dor' },
      { name: 'Blocos de velocidade', detail: 'Aeróbio, Alta intensidade, Corrida de alta velocidade, Sprint' },
      { name: 'Carga externa estimada', detail: 'soma das métricas de exercício, ajustada às durações' },
      { name: 'Taxa de cobertura', detail: 'parte da sessão descrita por métricas' },
      { name: '1RM', detail: 'introduzido, ou estimado pela fórmula Epley ou Brzycki' },
    ],
  },
  planning: {
    tag: 'PLANEAMENTO DE CARGA',
    title: 'Defina o objetivo semanal em UA, reparta-o por categoria.',
    body: 'Define o objetivo semanal em UA e reparte-o por campo, musculação e recuperação. Cada componente liga-se a uma sessão do calendário, ou fica em espera. Depois, «Previsto vs realizado» confronta o plano com o que o plantel absorveu.',
    points: [
      'Objetivo semanal em UA, orçamento por categoria',
      'Carga = RPE × duração × coeficiente: 90 min a RPE 7 dão 630 UA',
      'Componentes ligados a uma sessão, ou deixados em espera',
      'Previsto vs realizado, por equipa e por jogador',
      'Ciclos e época para os blocos de recuperação ou de competição',
    ],
    cta: 'Ver o planeamento de carga',
    href: '/pt/features/training-load/',
    shot: { src: '/screenshots/load-planning-pt.png', alt: 'Planeamento de carga no STRIVN: ACWR previsto, objetivo semanal em UA e carga por dia', caption: 'CAPTURA · PLANEAMENTO DE CARGA' },
    visual: {
      week: 'Semana 12 · fase competitiva',
      goal: 'Objetivo semanal 3 000 UA',
      remaining: 'RESTAM 300 UA',
      budgetLabel: 'ORÇAMENTO POR CATEGORIA',
      categories: [
        { name: 'Campo', value: '1 800 / 2 000 UA', pct: 90, tone: 'blue' },
        { name: 'Musculação', value: '600 / 700 UA', pct: 86, tone: 'blue' },
        { name: 'Recuperação', value: '300 / 300 UA', pct: 100, tone: 'green' },
      ],
      chartLabel: 'PREVISTO VS REALIZADO',
      legendPlanned: 'Previsto',
      legendActual: 'Realizado',
      days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs previsto', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs previsto', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'BIBLIOTECA DE EXERCÍCIOS & MÉTRICAS',
    title: 'Quantifique os exercícios de campo, a carga externa segue.',
    body: 'Capture um exercício a partir de um link, um vídeo, um esquema ou texto. Junte-lhe as métricas (sprints, distância, RPE esperado, área) e a sessão calcula a sua carga externa estimada. Se o bloco passa de 15 para 20 minutos, os acumulados escalam na mesma proporção.',
    points: [
      'Captura por link, foto, vídeo, esquema tático ou texto',
      'Pastas, etiquetas e caixa de entrada antes da publicação',
      'Métricas padrão, colunas GPS e métricas personalizadas',
      'Partilha por link público sem conta, revogável a qualquer momento',
    ],
    cta: 'Ver a biblioteca de exercícios',
    href: '/pt/features/exercise-library/',
    visual: {
      title: 'Jogo reduzido 8v8 · pressão alta',
      sub: 'Pasta «Pressão» · etiquetas: intensidade, transição',
      badge: 'ESQUEMA',
      metricsLabel: 'MÉTRICAS ASSOCIADAS · BLOCO DE 15 MIN',
      metrics: [
        { name: 'Distância total', tag: 'ACUMULADO', tagTone: 'blue', value: '1 200 m' },
        { name: 'Sprints', tag: 'ACUMULADO', tagTone: 'blue', value: '6' },
        { name: 'Acelerações', tag: 'ACUMULADO', tagTone: 'blue', value: '14' },
        { name: 'RPE esperado', tag: 'INTENSIVO', tagTone: 'plain', value: '7 / 10' },
        { name: 'Jogadores · área', tag: 'INTENSIVO', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Toques de bola', tag: 'PRÓPRIA', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'O bloco passa a 20 min',
      scaling: [
        { label: 'Distância', from: '1 200 m', to: '1 600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · área', from: '7 · 400 m²', to: '· inalterados', unchanged: true },
      ],
      totalTitle: 'Carga externa estimada · sessão de quinta',
      totalValue: '4 850 m · 21 sprints',
      coverageLabel: 'Taxa de cobertura das métricas',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'MUSCULAÇÃO & 1RM',
    title: 'Prescreva uma percentagem, cada um recebe os quilos.',
    body: 'Introduz o 1RM diretamente, ou estima-o a partir de uma série submáxima com a fórmula Epley ou Brzycki. Prescreve «Squat 4×5 @ 82 %» para todo o grupo, e cada jogador recebe os seus quilos na app.',
    points: [
      'Blocos em série simples, superset ou circuito',
      'Modos de carga: % 1RM, kg fixo, RPE ou peso corporal',
      'Repetições, intensidade, tempo e recuperação por série',
      'Pré-visualização por jogador antes da publicação para a app',
    ],
    cta: 'Ver a musculação & 1RM',
    href: '/pt/features/programs/',
    visual: {
      title: 'Construtor · bloco de força',
      badge: 'CALCULADO SOBRE 1RM',
      exercise: 'Back squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'kg fixo', 'RPE', 'PC'],
      tableLabel: 'CARGAS INDIVIDUALIZADAS',
      colPlayer: 'JOGADOR',
      colMax: '1RM TESTADO',
      colLoad: 'CARGA 82 %',
      note: 'Pré-visualização por jogador: cada um vê a sua carga, não a do vizinho.',
    },
  },
  tests: {
    tag: 'TESTES FÍSICOS & AUTOMEDIÇÃO',
    title: 'Lance uma campanha, os jogadores introduzem os valores.',
    body: 'Lance uma campanha sobre o que quiser medir: VAM, peso, ou um teste que defina você mesmo. O staff introduz os valores, ou os jogadores preenchem-nos a partir de um link mágico. Os convites saem por três canais: e-mail, WhatsApp e notificação push.',
    points: [
      'Medidas personalizadas, criadas por si',
      'Introdução pelo staff ou automedição pelos jogadores',
      'Convites por e-mail, WhatsApp e notificação push',
      'Acompanhamento das entradas recebidas, prazo e fecho automático',
    ],
    cta: 'Ver os testes físicos',
    href: '/pt/features/tests/',
    visual: {
      title: 'Campanha · VAM',
      sub: 'Automedição · prazo sexta-feira 20h',
      badge: 'LINK MÁGICO',
      progressLabel: 'Entradas recebidas',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'ENTRADAS',
      stateReceived: 'recebido',
      statePending: 'em espera',
      note: 'Os valores juntam-se ao perfil do jogador e ao seu histórico de medições.',
    },
  },
  reports: {
    tag: 'RELATÓRIOS & PAINEL',
    title: 'Entregue cinco relatórios ao staff, com síntese da IA.',
    body: 'Os relatórios preenchem-se a partir do que já introduz, do check-in de bem-estar às exportações GPS. Cinco relatórios cobrem a seleção, a carga, a equipa e o jogador. O gerador constrói os restantes, e a IA redige a síntese e os sinais de risco.',
    dashboard: {
      title: 'Dashboard · Carga & disponibilidade',
      widgetBtn: 'Widget',
      aiBtn: 'Gerar com IA',
      kpis: [
        { label: 'CARGA 7 D', value: '2 340 UA', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'DISPONÍVEIS', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Carga semanal · 6 sem.',
      availability: 'Disponibilidade',
      availabilityValue: '83%',
      hsr: 'HSR · jogo vs jogo',
      aiTag: 'GERADO PELA IA',
    },
    report: {
      title: 'Relatório de equipa · S12',
      aiBadge: 'REDIGIDO PELA IA',
      body: 'Taxa de resposta ao check-in 89 %. Fadiga média 2,4 / 5, motivação 4,1 / 5. ACWR do plantel 1,08. Dois jogadores fora de zona, um protocolo de retoma em curso.',
      items: [
        { icon: 'list-ordered', label: 'Seleção / forma · plantel classificado no período' },
        { icon: 'trophy', label: 'Carga & disponibilidade · em 4 semanas' },
        { icon: 'download', label: 'Relatório por jogador · síntese de 7 dias' },
        { icon: 'users', label: 'Gerador de relatórios · tema, filtros, gráfico' },
      ],
      aiStrip: 'O briefing da IA lista os sinais de risco, com o nível de gravidade e a ação a tomar.',
    },
  },
  finalCta: {
    kicker: 'COMECE SOZINHO, GRATUITAMENTE',
    title: 'Crie o seu espaço e importe a sua primeira sessão.',
    body: 'Os primeiros 30 dias são em Semi-Pro, importação GPS incluída, sem cartão. Depois o plano Free faz girar a equipa toda a época, e o seu staff junta-se quando vir os seus primeiros relatórios.',
    primaryCta: 'Criar o meu espaço gratuitamente',
    trust: ['Sem cartão de crédito', 'Sem validação do clube', 'Os seus dados são seus'],
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: ScPageContent = {
  meta: {
    title: 'STRIVN para preparadores físicos | Carga, readiness, tests, informes',
    description:
      'Dosifique la carga, siga el readiness y lance sus campañas de tests. STRIVN importa sus exportaciones Catapult o STATSports y calcula ACWR, monotonía y strain.',
  },
  hero: {
    kicker: 'PARA PREPARADORES FÍSICOS',
    title: 'Cruce la exportación GPS con el RPE y el plan.',
    sub: 'Usted ya exporta el GPS y luego lo cruza a mano en Excel. STRIVN añade el wellness, los tests y el historial, y le dice a quién aliviar antes de la sesión.',
    primaryCta: 'Empezar gratis',
    secondaryCta: 'Hablar con Benoit',
    secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20preparador%20fisico',
    fine: ['30 días de Semi-Pro', 'Sin tarjeta', 'Importación GPS por CSV'],
    board: {
      title: 'Readiness del día · Olympique Montverne',
      stamp: 'MIÉ 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'CARGA 7 D', value: '2.340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'WELLNESS', value: '16 / 18', tone: 'plain' },
        { label: 'ALERTAS', value: '3', tone: 'orange' },
      ],
      status: { ready: 'Apto', reduce: 'Aliviar', monitor: 'Vigilar', protocol: 'Protocolo' },
      why: {
        title: 'Por qué L. Moreau',
        score: 'Readiness 58',
        evidence: ['ACWR 7 / 28 d', 'Semanas por encima del umbral', 'Sueño declarado', 'HSR martes vs perfil', 'RPE sesión del martes'],
        tag: 'Propuesto',
        proposal: 'Jueves: volumen −30 %, sin bloque de velocidad.',
        apply: 'Aplicar',
        edit: 'Modificar',
        sources: 'Fuentes · GPS martes · RPE · wellness · plan S12',
      },
    },
  },
  daily: {
    kicker: 'SU TRABAJO',
    title: 'Encuentre sus nueve tareas en STRIVN.',
    sub: 'Una sesión por semana o seis, una exportación GPS o solo RPE, el recorrido sigue siendo el mismo.',
    colBefore: 'LO QUE YA HACE',
    colAfter: 'CÓMO OCURRE EN STRIVN',
    rows: [
      {
        before: 'Saber quién está fresco antes de la sesión',
        after: 'Readiness calculado a partir del check-in de bienestar: verde, naranja, rojo',
      },
      {
        before: 'Integrar los datos GPS de la sesión',
        after: 'Exportación Catapult o STATSports importada, zonas agrupadas en bloques de velocidad',
      },
      {
        before: 'Dosificar la carga',
        after: 'Planificación de carga: objetivo semanal en UA, repartido por categoría',
      },
      {
        before: 'Construir las sesiones',
        after: 'Constructor por bloques, carga externa estimada desde las métricas de ejercicio',
      },
      {
        before: 'Individualizar: fuerza, prevención, retorno',
        after: 'Fuerza en % del 1RM, cada jugador recibe su carga en la app',
      },
      {
        before: 'Encuadrar los retornos de lesión',
        after: 'Seguimiento médico: protocolo de retorno, huecos de fisio, carga de reinicio',
      },
      {
        before: 'Ajustar durante la sesión',
        after: 'Sesión en directo: carga acumulada y desvío vs previsto, en tiempo real',
      },
      {
        before: 'Decir al entrenador quién está apto para el partido',
        after: 'Readiness y seguimiento médico entran directamente en la convocatoria',
      },
      {
        before: 'Rendir cuentas al staff y a la directiva',
        after: 'Informes redactados por la IA y señales de riesgo, compartidos con el staff',
      },
    ],
  },
  metrics: {
    kicker: 'INDICADORES',
    title: 'Lea doce indicadores calculados desde lo que introduce.',
    body: 'Cada indicador sigue una definición de la literatura y se calcula desde lo que ya introduce. Los coeficientes de partido y de entrenamiento siguen siendo ajustables desde el panel Fórmula.',
    items: [
      { name: 'ACWR', detail: 'carga aguda 7 d ÷ (crónica 28 d ÷ 4) · zona 0,8–1,3' },
      { name: 'Monotonía', detail: 'media diaria ÷ desviación típica de la semana' },
      { name: 'Strain', detail: 'carga semanal total × monotonía' },
      { name: 'Carga interna (sRPE)', detail: 'RPE × duración · 90 min a RPE 7 = 630 UA' },
      { name: 'Carga externa', detail: 'distancia y tiempo de los bloques de velocidad GPS' },
      { name: 'Ratio externa / interna', detail: 'el desacoplamiento señala la fatiga' },
      { name: 'Readiness', detail: 'verde 100 % · naranja 65 % · rojo 30 %' },
      { name: 'Percepción', detail: 'fatiga, sueño, motivación, dolor' },
      { name: 'Bloques de velocidad', detail: 'Aeróbico, Alta intensidad, Carrera de alta velocidad, Sprint' },
      { name: 'Carga externa estimada', detail: 'suma de las métricas de ejercicio, ajustada a las duraciones' },
      { name: 'Tasa de cobertura', detail: 'parte de la sesión descrita por métricas' },
      { name: '1RM', detail: 'introducido, o estimado con la fórmula Epley o Brzycki' },
    ],
  },
  planning: {
    tag: 'PLANIFICACIÓN DE CARGA',
    title: 'Fije el objetivo semanal en UA, repártalo por categoría.',
    body: 'Usted fija el objetivo semanal en UA y lo reparte entre campo, fuerza y recuperación. Cada componente se engancha a una sesión del calendario, o queda en espera. Después, «Previsto vs realizado» confronta el plan con lo que el grupo ha encajado.',
    points: [
      'Objetivo semanal en UA, presupuesto por categoría',
      'Carga = RPE × duración × coeficiente: 90 min a RPE 7 son 630 UA',
      'Componentes ligados a una sesión, o dejados en espera',
      'Previsto vs realizado, por equipo y por jugador',
      'Ciclos y temporada para los bloques de recuperación o de competición',
    ],
    cta: 'Ver la planificación de carga',
    href: '/es/features/training-load/',
    shot: { src: '/screenshots/load-planning-es.png', alt: 'Planificación de carga en STRIVN: ACWR previsto, objetivo semanal en UA y carga por día', caption: 'CAPTURA · PLANIFICACIÓN DE CARGA' },
    visual: {
      week: 'Semana 12 · fase competitiva',
      goal: 'Objetivo semanal 3.000 UA',
      remaining: 'QUEDAN 300 UA',
      budgetLabel: 'PRESUPUESTO POR CATEGORÍA',
      categories: [
        { name: 'Campo', value: '1.800 / 2.000 UA', pct: 90, tone: 'blue' },
        { name: 'Fuerza', value: '600 / 700 UA', pct: 86, tone: 'blue' },
        { name: 'Recuperación', value: '300 / 300 UA', pct: 100, tone: 'green' },
      ],
      chartLabel: 'PREVISTO VS REALIZADO',
      legendPlanned: 'Previsto',
      legendActual: 'Realizado',
      days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      variance: [
        { name: 'L. Moreau', delta: '+12 % vs previsto', tone: 'orange' },
        { name: 'A. Diallo', delta: '−4 % vs previsto', tone: 'green' },
      ],
    },
  },
  library: {
    tag: 'BIBLIOTECA DE EJERCICIOS & MÉTRICAS',
    title: 'Cuantifique sus ejercicios de campo, la carga externa sigue.',
    body: 'Capture un ejercicio desde un enlace, un vídeo, un esquema o texto. Adjúntele sus métricas (sprints, distancia, RPE esperado, superficie) y la sesión calcula su carga externa estimada. Si el bloque pasa de 15 a 20 minutos, los acumulados escalan en la misma proporción.',
    points: [
      'Captura por enlace, foto, vídeo, esquema táctico o texto',
      'Carpetas, etiquetas y bandeja de entrada antes de publicar',
      'Métricas estándar, columnas GPS y métricas personalizadas',
      'Compartir por enlace público sin cuenta, revocable en cualquier momento',
    ],
    cta: 'Ver la biblioteca de ejercicios',
    href: '/es/features/exercise-library/',
    visual: {
      title: 'Juego reducido 8v8 · presión alta',
      sub: 'Carpeta «Presión» · etiquetas: intensidad, transición',
      badge: 'ESQUEMA',
      metricsLabel: 'MÉTRICAS ASOCIADAS · BLOQUE DE 15 MIN',
      metrics: [
        { name: 'Distancia total', tag: 'ACUMULADO', tagTone: 'blue', value: '1.200 m' },
        { name: 'Sprints', tag: 'ACUMULADO', tagTone: 'blue', value: '6' },
        { name: 'Aceleraciones', tag: 'ACUMULADO', tagTone: 'blue', value: '14' },
        { name: 'RPE esperado', tag: 'INTENSIVO', tagTone: 'plain', value: '7 / 10' },
        { name: 'Jugadores · superficie', tag: 'INTENSIVO', tagTone: 'plain', value: '16 · 400 m²' },
        { name: 'Toques de balón', tag: 'PROPIA', tagTone: 'orange', value: '42' },
      ],
      scalingTitle: 'El bloque pasa a 20 min',
      scaling: [
        { label: 'Distancia', from: '1.200 m', to: '1.600 m' },
        { label: 'Sprints', from: '6', to: '8' },
        { label: 'RPE · superficie', from: '7 · 400 m²', to: '· sin cambios', unchanged: true },
      ],
      totalTitle: 'Carga externa estimada · sesión del jueves',
      totalValue: '4.850 m · 21 sprints',
      coverageLabel: 'Tasa de cobertura de las métricas',
      coverageValue: '78 %',
      coveragePct: 78,
    },
  },
  strength: {
    tag: 'FUERZA & 1RM',
    title: 'Prescriba un porcentaje, cada jugador recibe sus kilos.',
    body: 'Usted introduce el 1RM directamente, o lo estima desde una serie submáxima con la fórmula Epley o Brzycki. Prescribe «Squat 4×5 @ 82 %» para todo el grupo, y cada jugador recibe sus kilos en la app.',
    points: [
      'Bloques en serie simple, superserie o circuito',
      'Modos de carga: % 1RM, kg fijo, RPE o peso corporal',
      'Repeticiones, intensidad, tempo y recuperación por serie',
      'Vista previa por jugador antes de publicar a la app',
    ],
    cta: 'Ver la fuerza & 1RM',
    href: '/es/features/programs/',
    visual: {
      title: 'Constructor · bloque de fuerza',
      badge: 'CALCULADO SOBRE 1RM',
      exercise: 'Back squat',
      prescription: '4 × 5 · 82 % 1RM',
      modes: ['% 1RM', 'kg fijo', 'RPE', 'PC'],
      tableLabel: 'CARGAS INDIVIDUALIZADAS',
      colPlayer: 'JUGADOR',
      colMax: '1RM TESTADO',
      colLoad: 'CARGA 82 %',
      note: 'Vista previa por jugador: cada uno ve su carga, no la del vecino.',
    },
  },
  tests: {
    tag: 'TESTS FÍSICOS & AUTOMEDICIÓN',
    title: 'Lance una campaña, los jugadores introducen los valores.',
    body: 'Lance una campaña sobre lo que quiera medir: VAM, peso, o un test que usted mismo defina. El staff introduce los valores, o los jugadores los rellenan desde un enlace mágico. Las invitaciones salen por tres canales: correo, WhatsApp y notificación push.',
    points: [
      'Medidas personalizadas, creadas por usted',
      'Introducción por el staff o automedición por los jugadores',
      'Invitaciones por correo, WhatsApp y notificación push',
      'Seguimiento de las entradas recibidas, fecha límite y cierre automático',
    ],
    cta: 'Ver los tests físicos',
    href: '/es/features/tests/',
    visual: {
      title: 'Campaña · VAM',
      sub: 'Automedición · fecha límite viernes 20h',
      badge: 'ENLACE MÁGICO',
      progressLabel: 'Entradas recibidas',
      progressValue: '14 / 18',
      progressPct: 78,
      entriesLabel: 'ENTRADAS',
      stateReceived: 'recibido',
      statePending: 'en espera',
      note: 'Los valores se unen al perfil del jugador y a su historial de mediciones.',
    },
  },
  reports: {
    tag: 'INFORMES & PANEL',
    title: 'Entregue cinco informes con síntesis redactada por la IA.',
    body: 'Los informes se llenan desde lo que ya introduce, del check-in de bienestar a las exportaciones GPS. Cinco informes cubren la selección, la carga, el equipo y el jugador. El generador construye los demás, y la IA redacta la síntesis y las señales de riesgo.',
    dashboard: {
      title: 'Dashboard · Carga & disponibilidad',
      widgetBtn: 'Widget',
      aiBtn: 'Generar con IA',
      kpis: [
        { label: 'CARGA 7 D', value: '2.340 UA', tone: 'plain' },
        { label: 'READINESS', value: '82%', tone: 'green' },
        { label: 'DISPONIBLES', value: '15 / 18', tone: 'blue' },
      ],
      weekly: 'Carga semanal · 6 sem.',
      availability: 'Disponibilidad',
      availabilityValue: '83%',
      hsr: 'HSR · partido vs partido',
      aiTag: 'GENERADO POR LA IA',
    },
    report: {
      title: 'Informe de equipo · S12',
      aiBadge: 'REDACTADO POR LA IA',
      body: 'Tasa de respuesta al check-in 89 %. Fatiga media 2,4 / 5, motivación 4,1 / 5. ACWR del grupo 1,08. Dos jugadores fuera de zona, un protocolo de reinicio en curso.',
      items: [
        { icon: 'list-ordered', label: 'Selección / forma · plantilla clasificada en el periodo' },
        { icon: 'trophy', label: 'Carga & disponibilidad · sobre 4 semanas' },
        { icon: 'download', label: 'Informe por jugador · síntesis de 7 días' },
        { icon: 'users', label: 'Generador de informes · tema, filtros, gráfico' },
      ],
      aiStrip: 'El briefing de la IA lista las señales de riesgo, con su nivel de gravedad y la acción a tomar.',
    },
  },
  finalCta: {
    kicker: 'EMPIECE SOLO, GRATIS',
    title: 'Cree su espacio e importe su primera sesión.',
    body: 'Los primeros 30 días son en Semi-Pro, importación GPS incluida, sin tarjeta. Después el plan Free hace girar al equipo toda la temporada, y su staff se une cuando vea sus primeros informes.',
    primaryCta: 'Crear mi espacio gratis',
    trust: ['Sin tarjeta de crédito', 'Sin validación del club', 'Sus datos siguen siendo suyos'],
  },
};

export const scPageContent: Record<Locale, ScPageContent> = { fr, en, nl, de, pt, es };
