/**
 * Content for the features index ("Fonctionnalités") in all six locales.
 *
 * Three of the page's product captures already exist, fully translated,
 * elsewhere: the readiness board and the reporting dashboard come from
 * `scPageContent`, the player phone from `homeContent`. This file only
 * carries what is genuinely new, and icon names — being locale-invariant —
 * live in the constants below rather than repeated inside every locale.
 */
import type { Locale } from './landingContent';
export type { Locale };

/** A module row: icon comes from the section's invariant list, by index. */
export interface ModuleText {
  name: string;
  desc: string;
}

interface SectionHead {
  kicker: string;
  title: string;
  body: string;
}

/* ── Locale-invariant fixtures ────────────────────────────────── */

export const SECTION_ICONS = {
  monitoring: ['activity', 'satellite', 'calendar', 'moon', 'gauge', 'ruler', 'dumbbell', 'target'],
  sessions: ['calendar', 'layout', 'check-circle', 'radio', 'trophy', 'clipboard', 'target'],
  team: ['users', 'plus', 'send', 'bar-chart', 'heart-pulse', 'shield', 'file-text', 'table'],
  ai: ['sun', 'message-circle', 'bar-chart', 'sparkles', 'clock', 'send', 'camera'],
  reporting: ['layout-dashboard', 'file-text', 'bar-chart', 'calendar'],
  opponent: ['radar', 'link'],
  player: ['smartphone', 'users'],
} as const;

/**
 * The sub-page each module row leads to, in `SECTION_ICONS` order. `null`
 * marks a module with no page of its own yet — the row stays plain text
 * rather than linking somewhere that only half answers it.
 */
export const SECTION_SLUGS = {
  monitoring: [
    'training-load',
    'training-load',
    'sessions',
    'check-in',
    'check-in',
    'tests',
    'programs',
    'programs',
  ],
  sessions: [
    'sessions',
    'exercise-library',
    'exercise-library',
    'live-session',
    'live-match',
    'live-session',
    'live-match',
  ],
  team: [
    'communication',
    'communication',
    'attendance',
    'attendance',
    'medical',
    'medical',
    'staff',
    null,
  ],
  ai: ['reports', 'reports', 'reports', 'reports', 'reports', 'attendance', 'live-match'],
  reporting: ['reports', 'reports', 'reports', 'sessions'],
  opponent: ['scouting', 'staff'],
  player: ['player-app', 'staff'],
} as const;

/**
 * Anchor targets for the hero jump pills — order matches `hero.jump`, and
 * each entry must be a section id the page actually renders. The last band
 * carries both the opponent and the player columns, so it gets one pill.
 */
export const JUMP_HREFS = [
  '#monitoring',
  '#seances',
  '#equipe',
  '#ia',
  '#pilotage',
  '#adversaire',
] as const;

/**
 * One pill per anchor: a locale that gains or loses a label becomes a type
 * error rather than a pill whose href resolves to `undefined` — which is how
 * the pills silently drifted a section out of step. The mapping goes through
 * a type parameter because that is the only form TypeScript treats as
 * homomorphic; mapping a concrete tuple would rewrite `length` to `string`.
 */
type SameLength<T extends readonly unknown[]> = { -readonly [K in keyof T]: string };
export type JumpLabels = SameLength<typeof JUMP_HREFS>;

/** Session builder capture: block durations and load, identical everywhere. */
export const SESSION_BLOCKS = [
  { min: '12 min', ua: '48 UA' },
  { min: '24 min', ua: '186 UA' },
  { min: '15 min', ua: '124 UA' },
  { min: '14 min', ua: '87 UA' },
];

/** Call-up responses: player names and state keys are invariant. */
export const RSVP_ROWS: Array<{ name: string; state: 'yes' | 'no' | 'maybe' | 'none' }> = [
  { name: 'A. Diallo', state: 'yes' },
  { name: 'T. Mendes', state: 'no' },
  { name: 'L. Moreau', state: 'yes' },
  { name: 'K. Nakamura', state: 'maybe' },
  { name: 'S. Petit', state: 'none' },
];

/** AI comparison chart — [previous match, current match] as % heights. */
export const AI_CHART: Array<[number, number]> = [
  [70, 76],
  [56, 66],
  [38, 52],
  [60, 68],
];

/** Where the "reads" group ends and the "acts" group begins in `ai.moments`. */
export const AI_ACTS_FROM = 3;

/* ── Content shape ────────────────────────────────────────────── */

export interface FeaturesIndexContent {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; sub: string; jump: JumpLabels };
  monitoring: SectionHead & { modules: ModuleText[] };
  sessions: SectionHead & {
    modules: ModuleText[];
    visual: {
      title: string;
      sub: string;
      badge: string;
      blocks: string[];
      workoutTitle: string;
      published: string;
      workoutBody: string;
    };
  };
  team: SectionHead & {
    modules: ModuleText[];
    visual: {
      to: string;
      type: string;
      body: string;
      sent: string;
      auto: string;
      responsesLabel: string;
      states: { yes: string; no: string; maybe: string; none: string };
    };
  };
  ai: SectionHead & {
    readsLabel: string;
    actsLabel: string;
    moments: ModuleText[];
    visual: {
      assistant: string;
      live: string;
      question: string;
      answer: string;
      sources: string;
      vizTitle: string;
      legendA: string;
      legendB: string;
      metrics: string[];
      insight: string;
      pin: string;
      refine: string;
      signalTitle: string;
      signalBody: string;
      examine: string;
    };
    note: string;
  };
  reporting: SectionHead & { modules: ModuleText[] };
  opponent: {
    kicker: string;
    title: string;
    modules: ModuleText[];
    visual: {
      title: string;
      meta: string;
      items: Array<{ label: string; meta: string }>;
    };
  };
  player: { kicker: string; title: string; modules: ModuleText[] };
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: FeaturesIndexContent = {
  meta: {
    title: 'Fonctionnalités STRIVN | Chaque module en détail, du monitoring au joueur',
    description:
      'Parcourez chaque module de STRIVN en détail : monitoring, séances, équipe, IA, rapports, adversaire et app joueur.',
  },
  hero: {
    kicker: 'FONCTIONNALITÉS',
    title: 'Parcourez les six familles de modules.',
    sub: 'Chaque module tient debout seul et tous partagent la même base de données. Une donnée saisie une fois sert aux six familles de modules, du lundi au match.',
    jump: ['Monitoring', 'Séances & terrain', 'Équipe', 'Intelligence', 'Pilotage', 'Adversaire & joueur'],
  },
  monitoring: {
    kicker: 'MONITORING & PERFORMANCE',
    title: 'Lisez readiness, charge et alertes sur un seul écran.',
    body: 'Vous ouvrez cet écran avant la séance : readiness par joueur, charge du jour et alertes IA. Le check-in du matin et votre export GPS alimentent les huit modules ci-dessous.',
    modules: [
      { name: 'Charge d’entraînement', desc: 'sRPE, ACWR, monotonie et contrainte en continu' },
      { name: 'GPS & blocs de vitesse', desc: 'Exports regroupés en zones nommées' },
      { name: 'Planification de charge', desc: 'Objectif hebdo, puis prévu vs réalisé' },
      { name: 'Check-in bien-être', desc: 'Sommeil, fatigue, douleur, motivation' },
      { name: 'État de forme', desc: 'Readiness vert / jaune / rouge, projeté' },
      { name: 'Tests & auto-mesure', desc: 'Campagnes saisies par le staff ou les joueurs' },
      { name: 'Musculation & 1RM', desc: 'Un pourcentage, une charge par joueur' },
      { name: 'Programmes', desc: 'Force, prévention, retour au jeu' },
    ],
  },
  sessions: {
    kicker: 'SÉANCES & TERRAIN',
    title: 'Construisez la séance, pilotez-la au bord du terrain.',
    body: 'Le constructeur estime la charge de chaque bloc avant l’entraînement, ici 445 UA pour quatre blocs. Le mode live compare ensuite cette estimation au réalisé, pendant que la séance tourne.',
    modules: [
      { name: 'Calendrier & événements', desc: 'Une semaine se duplique vers la suivante' },
      { name: 'Bibliothèque d’exercices', desc: 'Lien, vidéo, schéma ou texte, en dossiers' },
      { name: 'Métriques d’exercice', desc: 'La séance annonce sa charge estimée' },
      { name: 'Séance en direct', desc: 'Runner plein écran, même sans réseau' },
      { name: 'Match en direct', desc: 'Minutes et événements depuis le banc' },
      { name: 'Bilan de séance', desc: 'RPE et participation consolidés' },
      { name: 'Analyse des buts', desc: 'Vocabulaire de stats propre à l’équipe' },
    ],
    visual: {
      title: 'Séance jeudi · bloc intensité',
      sub: 'Charge estimée 445 UA · cible 460',
      badge: 'DANS LA CIBLE',
      blocks: [
        'Échauffement + activation',
        'Bloc pressing · 8v8',
        'Vitesse · sprints lancés',
        'Jeu réduit + retour au calme',
      ],
      workoutTitle: 'Workout individuel · L. Moreau',
      published: 'Publié vers l’app joueur',
      workoutBody:
        'Nordic curls 3×8 · Copenhagen 3×10 / côté · mobilité hanche 8 min. Généré depuis le protocole ischio, charge déduite de la séance collective.',
    },
  },
  team: {
    kicker: 'ÉQUIPE & QUOTIDIEN',
    title: 'Envoyez la convocation, les réponses reviennent seules.',
    body: 'Les joueurs répondent depuis un simple lien, et la relance part seule à l’heure que vous fixez. Sur la capture, vendredi midi, et 14 réponses sur 18, l’infirmerie déjà déduite de la disponibilité.',
    modules: [
      { name: 'Gérer l’effectif', desc: 'Actifs, blessés, inactifs, archivage RGPD' },
      { name: 'Joueurs à l’essai', desc: 'Convoqués, mais hors des moyennes' },
      { name: 'Convocations (RSVP)', desc: 'Réponses et relances automatiques' },
      { name: 'Assiduité', desc: 'Présence, programmes et check-ins sur 30 j' },
      { name: 'Suivi médical & blessures', desc: 'Protocoles de retour, accès restreint' },
      { name: 'Soins & créneaux kiné', desc: 'Les joueurs réservent leur slot' },
      { name: 'Documents', desc: 'Suivi de lecture X/Y vu par joueur' },
      { name: 'Amendes', desc: 'Catalogue importé depuis votre règlement' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 joueurs',
      type: 'MATCH',
      body: 'Dimanche 15h00 · Stade des Trois Chênes. RDV 13h30 au vestiaire. Merci de répondre avant vendredi 20h.',
      sent: 'Envoyée 22:41',
      auto: 'Relance auto vendredi 12h',
      responsesLabel: 'RÉPONSES · 14 / 18',
      states: { yes: 'Présent', no: 'Absent · infirmerie', maybe: 'Incertain', none: 'Sans réponse' },
    },
  },
  ai: {
    kicker: 'INTELLIGENCE ARTIFICIELLE',
    title: 'Déléguez à l’IA le briefing et les relances.',
    body: 'Elle restitue ce que vous saisissez, puis elle agit : un bouton applique la recommandation, une file retient les propositions. Sept moments jalonnent la journée, trois en lecture et quatre en action.',
    readsLabel: 'ELLE LIT ET RESTITUE',
    actsLabel: 'ELLE AGIT · VOUS VALIDEZ',
    moments: [
      {
        name: 'Le briefing du matin',
        desc: 'Check-in, événement du jour, et l’effectif classé Repos, Surveillance, Apte, Inconnu.',
      },
      {
        name: 'Les questions en langage naturel',
        desc: '« Qui est à risque aujourd’hui ? » S’il manque un détail, l’assistant demande au lieu de deviner.',
      },
      {
        name: 'Le canvas de réponse',
        desc: 'Une question chiffrée génère un canvas de widgets, sauvegardable en dashboard.',
      },
      {
        name: 'Les recommandations à action directe',
        desc: 'Sévérité, motif, et un bouton qui applique : surcharge, RSVP manquant, blessure à surveiller.',
      },
      {
        name: 'Les actions IA en attente',
        desc: 'Les propositions restent en file jusqu’à votre validation. Rien ne s’applique seul.',
      },
      {
        name: 'La relance en un geste',
        desc: 'Depuis le briefing, un geste relance en une fois tous les joueurs encore silencieux.',
      },
      {
        name: 'La feuille de match importée',
        desc: 'Photo ou PDF de la composition adverse : l’IA propose les joueurs, vous confirmez.',
      },
    ],
    visual: {
      assistant: 'Assistant IA',
      live: 'IA · ANALYSE CONTINUE',
      question: 'Compare les métriques de ce match avec le précédent, et construis une visualisation.',
      answer: 'Comparaison établie sur les exports GPS des matchs J14 et J13 :',
      sources: 'SOURCES · GPS MATCH J14 · GPS MATCH J13',
      vizTitle: 'Match J14 vs J13 · métriques GPS',
      legendA: 'J13',
      legendB: 'J14',
      metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'CHARGE'],
      insight:
        'HSR +9 % et sprints +21 % pour un volume quasi stable. L’intensité progresse à charge égale.',
      pin: 'Épingler au dashboard',
      refine: 'Affiner la question',
      signalTitle: 'Signal remonté par l’IA, de sa propre initiative',
      signalBody: 'Sommeil du groupe en baisse de 12 % depuis le passage à 2 matchs / semaine.',
      examine: 'Examiner',
    },
    note: '« L’assistant éclaire la décision ; vous la prenez. » Deux questions de clarification au maximum, des réponses tirées de vos données, et votre validation avant chaque action.',
  },
  reporting: {
    kicker: 'PILOTAGE & RAPPORTS',
    title: 'Composez le dashboard que la direction lit.',
    body: 'Le dashboard composable, les cinq rapports types et le générateur puisent dans la même base. Vos widgets se réutilisent d’un rapport à l’autre, semaine après semaine.',
    modules: [
      { name: 'Tableau de bord & signaux', desc: 'KPIs du jour et risques détectés par l’IA' },
      { name: 'Rapports', desc: 'Cinq rapports types plus le générateur' },
      { name: 'BI & dashboards', desc: 'Widgets composables et visualisations générées' },
      { name: 'Saison & cycles', desc: 'Blocs de périodisation hérités par semaine' },
    ],
  },
  opponent: {
    kicker: 'ADVERSAIRE',
    title: 'Préparez le prochain adversaire à plusieurs.',
    modules: [
      { name: 'Scouting des adversaires', desc: 'Notes, schémas, vidéos et photos enrichies' },
      { name: 'Rapports de scouting', desc: 'Partagés aux joueurs et staff désignés' },
    ],
    visual: {
      title: 'Session scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Schéma · sortie de balle à 3', meta: 'annoté' },
        { label: 'Clip coup de pied arrêté (0:42)', meta: 'Veo' },
        { label: 'Photo composition probable', meta: 'IA · feuille importée' },
      ],
    },
  },
  player: {
    kicker: 'CÔTÉ JOUEUR & PARENTS',
    title: 'Ouvrez un accès joueur et parent.',
    modules: [
      {
        name: 'App STRIVN Player',
        desc: 'Quatre usages : agenda, convocations, check-in et programmes, sur iOS et Android',
      },
      {
        name: 'Portail parent',
        desc: 'Sur les équipes de jeunes, tout passe par le parent, avec son consentement',
      },
    ],
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN features | Every module in detail, from monitoring to the player app',
    description:
      'Browse every STRIVN module in detail: monitoring, sessions, squad, AI, reports, opponents and the player app.',
  },
  hero: {
    kicker: 'FEATURES',
    title: 'Browse the six module families.',
    sub: 'Every module stands on its own and all of them share the same database. Data entered once serves all six families of modules, from Monday to matchday.',
    jump: ['Monitoring', 'Sessions & pitch', 'Squad', 'Intelligence', 'Reports', 'Opponent & player'],
  },
  monitoring: {
    kicker: 'MONITORING & PERFORMANCE',
    title: 'Read readiness, load and alerts on one screen.',
    body: 'You open this screen before the session: readiness per player, today’s load and AI alerts. The morning check-in and your GPS export feed the eight modules below.',
    modules: [
      { name: 'Training load', desc: 'sRPE, ACWR, monotony and strain, continuously' },
      { name: 'GPS & speed blocks', desc: 'Exports grouped into named zones' },
      { name: 'Load planning', desc: 'Weekly target, then planned vs actual' },
      { name: 'Wellness check-in', desc: 'Sleep, fatigue, soreness, motivation' },
      { name: 'Readiness', desc: 'Green / amber / red, projected' },
      { name: 'Tests & self-measurement', desc: 'Campaigns entered by staff or players' },
      { name: 'Strength & 1RM', desc: 'One percentage, one load per player' },
      { name: 'Programmes', desc: 'Strength, prevention, return to play' },
    ],
  },
  sessions: {
    kicker: 'SESSIONS & PITCH',
    title: 'Build the session, run it from the touchline.',
    body: 'The builder estimates each block’s load before training, here 445 AU across four blocks. Live mode then compares that estimate with the actual, while the session runs.',
    modules: [
      { name: 'Calendar & events', desc: 'A week duplicates onto the next' },
      { name: 'Drill library', desc: 'Link, video, diagram or text, in folders' },
      { name: 'Drill metrics', desc: 'The session announces its estimated load' },
      { name: 'Live session', desc: 'Full-screen runner, offline too' },
      { name: 'Live match', desc: 'Minutes and events from the bench' },
      { name: 'Session review', desc: 'RPE and attendance consolidated' },
      { name: 'Goal analysis', desc: 'A stats vocabulary of your own' },
    ],
    visual: {
      title: 'Thursday session · intensity block',
      sub: 'Estimated load 445 AU · target 460',
      badge: 'ON TARGET',
      blocks: ['Warm-up + activation', 'Pressing block · 8v8', 'Speed · flying sprints', 'Small-sided + cool-down'],
      workoutTitle: 'Individual workout · L. Moreau',
      published: 'Published to the player app',
      workoutBody:
        'Nordic curls 3×8 · Copenhagen 3×10 / side · hip mobility 8 min. Generated from the hamstring protocol, load derived from the team session.',
    },
  },
  team: {
    kicker: 'SQUAD & DAY-TO-DAY',
    title: 'Send the call-up, answers come back on their own.',
    body: 'Players answer from a plain link, and the reminder goes out on its own at the time you set. In the screenshot, Friday noon, and 14 answers out of 18, with the treatment room already in the availability.',
    modules: [
      { name: 'Manage the squad', desc: 'Active, injured, inactive, GDPR archiving' },
      { name: 'Trialists', desc: 'Called up, but kept out of the averages' },
      { name: 'Call-ups (RSVP)', desc: 'Answers and automatic reminders' },
      { name: 'Attendance', desc: 'Presence, programmes and check-ins over 30 d' },
      { name: 'Medical & injuries', desc: 'Return protocols, restricted access' },
      { name: 'Treatment & physio slots', desc: 'Players book their own slot' },
      { name: 'Documents', desc: 'Read tracking X/Y seen, per player' },
      { name: 'Fines', desc: 'Catalogue imported from your own rules' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 players',
      type: 'MATCH',
      body: 'Sunday 3:00 pm · Stade des Trois Chênes. Meet 1:30 pm in the changing room. Please answer before Friday 8 pm.',
      sent: 'Sent 22:41',
      auto: 'Auto reminder Friday 12:00',
      responsesLabel: 'ANSWERS · 14 / 18',
      states: { yes: 'Available', no: 'Out · treatment', maybe: 'Unsure', none: 'No answer' },
    },
  },
  ai: {
    kicker: 'ARTIFICIAL INTELLIGENCE',
    title: 'Hand the briefing and the reminders to the AI.',
    body: 'It gives back what you enter, then it acts: one button applies the recommendation, a queue holds the proposals. Seven moments cover the day, three that read and four that act.',
    readsLabel: 'IT READS AND REPORTS',
    actsLabel: 'IT ACTS · YOU APPROVE',
    moments: [
      {
        name: 'The morning briefing',
        desc: 'Check-in, the day’s event, and the squad sorted into Rest, Watch, Fit, Unknown.',
      },
      {
        name: 'Questions in plain language',
        desc: '“Who is at risk today?” If a detail is missing, the assistant asks instead of guessing.',
      },
      {
        name: 'The answer canvas',
        desc: 'A question with numbers generates a canvas of widgets, saveable as a dashboard.',
      },
      {
        name: 'Recommendations with a direct action',
        desc: 'Severity, reason, and a button that applies it: overload, missing RSVP, injury to watch.',
      },
      {
        name: 'Pending AI actions',
        desc: 'Proposals stay queued until you approve them. Nothing applies itself.',
      },
      {
        name: 'Reminders in one gesture',
        desc: 'From the briefing, one gesture chases every player still silent, in a single send.',
      },
      {
        name: 'The imported team sheet',
        desc: 'Photo or PDF of the opposition line-up: the AI proposes the players, you confirm.',
      },
    ],
    visual: {
      assistant: 'AI assistant',
      live: 'AI · CONTINUOUS ANALYSIS',
      question: 'Compare this match’s metrics with the previous one, and build a visualisation.',
      answer: 'Comparison built on the GPS exports of matches MD14 and MD13:',
      sources: 'SOURCES · GPS MATCH MD14 · GPS MATCH MD13',
      vizTitle: 'Match MD14 vs MD13 · GPS metrics',
      legendA: 'MD13',
      legendB: 'MD14',
      metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'LOAD'],
      insight: 'HSR +9 % and sprints +21 % for a near-flat volume. Intensity is rising at equal load.',
      pin: 'Pin to dashboard',
      refine: 'Refine the question',
      signalTitle: 'Signal raised by the AI, on its own initiative',
      signalBody: 'Squad sleep down 12 % since the switch to two matches a week.',
      examine: 'Examine',
    },
    note: '“The assistant informs the decision; you make it.” Two clarifying questions at most, answers drawn from your data, and your approval before every action.',
  },
  reporting: {
    kicker: 'STEERING & REPORTS',
    title: 'Compose the dashboard your board reads.',
    body: 'The composable dashboard, the five standard reports and the generator draw on the same base. Your widgets carry over from one report to the next, week after week.',
    modules: [
      { name: 'Dashboard & signals', desc: 'Today’s KPIs and risks detected by the AI' },
      { name: 'Reports', desc: 'Five standard reports plus the generator' },
      { name: 'BI & dashboards', desc: 'Composable widgets and generated visualisations' },
      { name: 'Season & cycles', desc: 'Periodisation blocks inherited by week' },
    ],
  },
  opponent: {
    kicker: 'OPPONENT',
    title: 'Prepare the next opponent together.',
    modules: [
      { name: 'Opponent scouting', desc: 'Notes, diagrams, videos and enriched photos' },
      { name: 'Scouting reports', desc: 'Shared with named players and staff' },
    ],
    visual: {
      title: 'Scouting session · RC Valbonne',
      meta: 'MD-6',
      items: [
        { label: 'Diagram · building out with three', meta: 'annotated' },
        { label: 'Set-piece clip (0:42)', meta: 'Veo' },
        { label: 'Photo of the likely line-up', meta: 'AI · imported sheet' },
      ],
    },
  },
  player: {
    kicker: 'PLAYER & PARENT SIDE',
    title: 'Give player and parent their own access.',
    modules: [
      { name: 'STRIVN Player app', desc: 'Four uses: schedule, call-ups, check-in and programmes, on iOS and Android' },
      { name: 'Parent portal', desc: 'On youth teams everything goes through the parent, with their consent' },
    ],
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN-functies | Elke module in detail, van monitoring tot spelersapp',
    description:
      'Doorloop elke module van STRIVN in detail: monitoring, trainingen, kern, AI, rapporten, tegenstander en spelersapp.',
  },
  hero: {
    kicker: 'FUNCTIES',
    title: 'Doorloop de zes modulefamilies.',
    sub: 'Elke module staat op zichzelf en ze delen allemaal dezelfde databank. Eén keer ingevoerde data bedient alle zes de families, van maandag tot de wedstrijd.',
    jump: ['Monitoring', 'Trainingen & veld', 'Kern', 'Intelligentie', 'Rapporten', 'Tegenstander & speler'],
  },
  monitoring: {
    kicker: 'MONITORING & PRESTATIE',
    title: 'Lees readiness, belasting en signalen op één scherm.',
    body: 'U opent dit scherm vóór de training: readiness per speler, belasting van de dag en AI-signalen. De check-in van de ochtend en uw gps-export voeden de acht modules hieronder.',
    modules: [
      { name: 'Trainingsbelasting', desc: 'sRPE, ACWR, monotonie en strain, doorlopend' },
      { name: 'GPS & snelheidsblokken', desc: 'Exports gegroepeerd in benoemde zones' },
      { name: 'Belastingsplanning', desc: 'Weekdoel, daarna gepland vs gerealiseerd' },
      { name: 'Wellness-check-in', desc: 'Slaap, vermoeidheid, pijn, motivatie' },
      { name: 'Readiness', desc: 'Groen / oranje / rood, geprojecteerd' },
      { name: 'Testen & zelfmeting', desc: 'Campagnes ingevuld door staf of spelers' },
      { name: 'Kracht & 1RM', desc: 'Eén percentage, één belasting per speler' },
      { name: 'Programma’s', desc: 'Kracht, preventie, terugkeer naar het veld' },
    ],
  },
  sessions: {
    kicker: 'TRAININGEN & VELD',
    title: 'Bouw de training, stuur ze langs de lijn.',
    body: 'De bouwer schat de belasting van elk blok vóór de training, hier 445 AU over vier blokken. De live-modus vergelijkt die schatting daarna met het gerealiseerde, terwijl de training loopt.',
    modules: [
      { name: 'Kalender & events', desc: 'Een week kopieert naar de volgende' },
      { name: 'Oefenbibliotheek', desc: 'Link, video, schema of tekst, in mappen' },
      { name: 'Oefenmetrieken', desc: 'De training kondigt haar geschatte belasting aan' },
      { name: 'Training live', desc: 'Runner op volledig scherm, ook zonder netwerk' },
      { name: 'Wedstrijd live', desc: 'Minuten en events vanaf de bank' },
      { name: 'Trainingsverslag', desc: 'RPE en deelname geconsolideerd' },
      { name: 'Doelpuntanalyse', desc: 'Een statistiekvocabulaire van het team zelf' },
    ],
    visual: {
      title: 'Training donderdag · intensiteitsblok',
      sub: 'Geschatte belasting 445 AU · doel 460',
      badge: 'BINNEN DOEL',
      blocks: [
        'Opwarming + activatie',
        'Pressingblok · 8v8',
        'Snelheid · vliegende sprints',
        'Klein spel + cooling-down',
      ],
      workoutTitle: 'Individuele workout · L. Moreau',
      published: 'Gepubliceerd naar de spelersapp',
      workoutBody:
        'Nordic curls 3×8 · Copenhagen 3×10 / kant · heupmobiliteit 8 min. Gegenereerd vanuit het hamstringprotocol, belasting afgeleid uit de groepstraining.',
    },
  },
  team: {
    kicker: 'KERN & DAGELIJKSE WERKING',
    title: 'Verstuur de oproep, de antwoorden komen vanzelf terug.',
    body: 'Spelers antwoorden via een simpele link, en de herinnering vertrekt vanzelf op het tijdstip dat u instelt. Op de afbeelding vrijdagmiddag, en 14 antwoorden op 18, met de ziekenboeg al verrekend in de beschikbaarheid.',
    modules: [
      { name: 'Kern beheren', desc: 'Actief, geblesseerd, inactief, AVG-archivering' },
      { name: 'Spelers op proef', desc: 'Opgeroepen, maar buiten de gemiddelden' },
      { name: 'Oproepen (RSVP)', desc: 'Antwoorden en automatische herinneringen' },
      { name: 'Aanwezigheid', desc: 'Presentie, programma’s en check-ins over 30 d' },
      { name: 'Medisch & blessures', desc: 'Terugkeerprotocollen, beperkte toegang' },
      { name: 'Verzorging & kinéslots', desc: 'Spelers boeken hun eigen slot' },
      { name: 'Documenten', desc: 'Leesopvolging X/Y gezien, per speler' },
      { name: 'Boetes', desc: 'Catalogus ingevoerd uit uw eigen reglement' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 spelers',
      type: 'WEDSTRIJD',
      body: 'Zondag 15u00 · Stade des Trois Chênes. Afspraak 13u30 in de kleedkamer. Graag antwoorden vóór vrijdag 20u.',
      sent: 'Verzonden 22:41',
      auto: 'Auto-herinnering vrijdag 12u',
      responsesLabel: 'ANTWOORDEN · 14 / 18',
      states: { yes: 'Aanwezig', no: 'Afwezig · ziekenboeg', maybe: 'Onzeker', none: 'Geen antwoord' },
    },
  },
  ai: {
    kicker: 'ARTIFICIËLE INTELLIGENTIE',
    title: 'Geef de briefing en de herinneringen aan de AI.',
    body: 'Ze geeft terug wat u invoert, daarna handelt ze: één knop past de aanbeveling toe, een wachtrij houdt de voorstellen vast. Zeven momenten dekken de dag, drie die lezen en vier die handelen.',
    readsLabel: 'ZE LEEST EN RAPPORTEERT',
    actsLabel: 'ZE HANDELT · U VALIDEERT',
    moments: [
      {
        name: 'De ochtendbriefing',
        desc: 'Check-in, het event van de dag, en de kern gesorteerd in Rust, Opvolgen, Fit, Onbekend.',
      },
      {
        name: 'Vragen in gewone taal',
        desc: '« Wie loopt vandaag risico? » Ontbreekt er een detail, dan vraagt de assistent het in plaats van te gokken.',
      },
      {
        name: 'Het antwoordcanvas',
        desc: 'Een vraag met cijfers genereert een canvas van widgets, op te slaan als dashboard.',
      },
      {
        name: 'Aanbevelingen met directe actie',
        desc: 'Ernst, reden, en een knop die het toepast: overbelasting, ontbrekende RSVP, blessure om op te volgen.',
      },
      {
        name: 'AI-acties in wacht',
        desc: 'Voorstellen blijven in de wachtrij tot u ze valideert. Niets past zichzelf toe.',
      },
      {
        name: 'De herinnering in één handeling',
        desc: 'Vanuit de briefing herinnert één handeling elke speler die nog stil blijft, in één zending.',
      },
      {
        name: 'Het geïmporteerde wedstrijdblad',
        desc: 'Foto of pdf van de tegenstander: de AI stelt de spelers voor, u bevestigt.',
      },
    ],
    visual: {
      assistant: 'AI-assistent',
      live: 'AI · DOORLOPENDE ANALYSE',
      question: 'Vergelijk de metrieken van deze wedstrijd met de vorige, en bouw een visualisatie.',
      answer: 'Vergelijking op basis van de gps-exports van wedstrijden S14 en S13:',
      sources: 'BRONNEN · GPS WEDSTRIJD S14 · GPS WEDSTRIJD S13',
      vizTitle: 'Wedstrijd S14 vs S13 · gps-metrieken',
      legendA: 'S13',
      legendB: 'S14',
      metrics: ['AFSTAND', 'HSR', 'SPRINTS', 'BELASTING'],
      insight: 'HSR +9 % en sprints +21 % bij nagenoeg gelijk volume. De intensiteit stijgt bij gelijke belasting.',
      pin: 'Vastzetten op dashboard',
      refine: 'Vraag verfijnen',
      signalTitle: 'Signaal aangebracht door de AI, op eigen initiatief',
      signalBody: 'Slaap van de groep 12 % lager sinds de overgang naar 2 wedstrijden / week.',
      examine: 'Bekijken',
    },
    note: '« De assistent verheldert de beslissing; u neemt ze. » Maximaal twee verduidelijkende vragen, antwoorden uit uw eigen data, en uw validatie vóór elke actie.',
  },
  reporting: {
    kicker: 'STURING & RAPPORTEN',
    title: 'Stel het dashboard samen dat het bestuur leest.',
    body: 'Het samenstelbare dashboard, de vijf standaardrapporten en de generator putten uit dezelfde basis. Uw widgets gaan mee van het ene rapport naar het andere, week na week.',
    modules: [
      { name: 'Dashboard & signalen', desc: 'KPI’s van de dag en risico’s gedetecteerd door de AI' },
      { name: 'Rapporten', desc: 'Vijf standaardrapporten plus de generator' },
      { name: 'BI & dashboards', desc: 'Samenstelbare widgets en gegenereerde visualisaties' },
      { name: 'Seizoen & cycli', desc: 'Periodiseringsblokken per week overgeërfd' },
    ],
  },
  opponent: {
    kicker: 'TEGENSTANDER',
    title: 'Bereid de volgende tegenstander samen voor.',
    modules: [
      { name: 'Scouting van tegenstanders', desc: 'Notities, schema’s, video’s en verrijkte foto’s' },
      { name: 'Scoutingrapporten', desc: 'Gedeeld met aangeduide spelers en staf' },
    ],
    visual: {
      title: 'Scoutingsessie · RC Valbonne',
      meta: 'W-6',
      items: [
        { label: 'Schema · opbouw met drie', meta: 'geannoteerd' },
        { label: 'Clip stilstaande fase (0:42)', meta: 'Veo' },
        { label: 'Foto vermoedelijke opstelling', meta: 'AI · geïmporteerd blad' },
      ],
    },
  },
  player: {
    kicker: 'KANT SPELER & OUDERS',
    title: 'Geef speler en ouder hun eigen toegang.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Vier toepassingen: agenda, oproepen, check-in en programma’s, op iOS en Android' },
      { name: 'Ouderportaal', desc: 'Bij jeugdteams loopt alles via de ouder, met diens toestemming' },
    ],
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN Funktionen | Jedes Modul im Detail, vom Monitoring bis zur App',
    description:
      'Gehen Sie jedes Modul von STRIVN im Detail durch: Monitoring, Einheiten, Kader, KI, Berichte, Gegner und Spieler-App.',
  },
  hero: {
    kicker: 'FUNKTIONEN',
    title: 'Alle sechs Modulfamilien durchgehen.',
    sub: 'Jedes Modul steht für sich, und alle teilen dieselbe Datenbasis. Einmal erfasste Daten bedienen alle sechs Familien, von Montag bis zum Spiel.',
    jump: ['Monitoring', 'Einheiten & Platz', 'Kader', 'Intelligenz', 'Berichte', 'Gegner & Spieler'],
  },
  monitoring: {
    kicker: 'MONITORING & LEISTUNG',
    title: 'Readiness und Belastung auf einem Bildschirm lesen.',
    body: 'Diesen Bildschirm öffnen Sie vor der Einheit: Readiness je Spieler, Belastung des Tages und KI-Warnungen. Der Check-in am Morgen und Ihr GPS-Export speisen die acht Module darunter.',
    modules: [
      { name: 'Trainingsbelastung', desc: 'sRPE, ACWR, Monotonie und Strain, fortlaufend' },
      { name: 'GPS & Geschwindigkeitsblöcke', desc: 'Exporte in benannte Zonen gebündelt' },
      { name: 'Belastungsplanung', desc: 'Wochenziel, dann Plan vs Ist' },
      { name: 'Wellness-Check-in', desc: 'Schlaf, Ermüdung, Schmerz, Motivation' },
      { name: 'Readiness', desc: 'Grün / gelb / rot, prognostiziert' },
      { name: 'Tests & Selbstmessung', desc: 'Kampagnen durch Staff oder Spieler erfasst' },
      { name: 'Kraft & 1RM', desc: 'Ein Prozentsatz, eine Last je Spieler' },
      { name: 'Programme', desc: 'Kraft, Prävention, Rückkehr ins Spiel' },
    ],
  },
  sessions: {
    kicker: 'EINHEITEN & PLATZ',
    title: 'Einheit bauen, an der Linie steuern.',
    body: 'Der Builder schätzt die Belastung jedes Blocks vor dem Training, hier 445 AU auf vier Blöcke. Der Live-Modus vergleicht diese Schätzung danach mit dem Ist, während die Einheit läuft.',
    modules: [
      { name: 'Kalender & Termine', desc: 'Eine Woche dupliziert sich auf die nächste' },
      { name: 'Übungsbibliothek', desc: 'Link, Video, Skizze oder Text, in Ordnern' },
      { name: 'Übungsmetriken', desc: 'Die Einheit nennt ihre geschätzte Belastung' },
      { name: 'Einheit live', desc: 'Vollbild-Runner, auch ohne Netz' },
      { name: 'Spiel live', desc: 'Minuten und Ereignisse von der Bank' },
      { name: 'Einheiten-Bilanz', desc: 'RPE und Teilnahme konsolidiert' },
      { name: 'Toranalyse', desc: 'Ein eigenes Statistik-Vokabular des Teams' },
    ],
    visual: {
      title: 'Einheit Donnerstag · Intensitätsblock',
      sub: 'Geschätzte Belastung 445 AU · Ziel 460',
      badge: 'IM ZIELBEREICH',
      blocks: [
        'Aufwärmen + Aktivierung',
        'Pressing-Block · 8v8',
        'Schnelligkeit · fliegende Sprints',
        'Kleinfeld + Auslaufen',
      ],
      workoutTitle: 'Individuelles Workout · L. Moreau',
      published: 'In die Spieler-App veröffentlicht',
      workoutBody:
        'Nordic Curls 3×8 · Copenhagen 3×10 / Seite · Hüftmobilität 8 min. Aus dem Ischio-Protokoll erzeugt, Last aus der Teameinheit abgeleitet.',
    },
  },
  team: {
    kicker: 'KADER & ALLTAG',
    title: 'Aufgebot senden, Antworten kommen von allein zurück.',
    body: 'Spieler antworten über einen simplen Link, und die Erinnerung geht von allein zu der Uhrzeit raus, die Sie festlegen. Auf dem Screenshot Freitagmittag, und 14 Antworten von 18, die Behandlungsliege bereits in der Verfügbarkeit verrechnet.',
    modules: [
      { name: 'Kader verwalten', desc: 'Aktiv, verletzt, inaktiv, DSGVO-Archivierung' },
      { name: 'Spieler im Probetraining', desc: 'Aufgeboten, aber außerhalb der Mittelwerte' },
      { name: 'Aufgebote (RSVP)', desc: 'Antworten und automatische Erinnerungen' },
      { name: 'Verlässlichkeit', desc: 'Anwesenheit, Programme und Check-ins über 30 T' },
      { name: 'Medizin & Verletzungen', desc: 'Rückkehrprotokolle, eingeschränkter Zugriff' },
      { name: 'Behandlung & Physio-Slots', desc: 'Spieler buchen ihren Slot selbst' },
      { name: 'Dokumente', desc: 'Leseverfolgung X/Y gesehen, je Spieler' },
      { name: 'Strafen', desc: 'Katalog aus Ihrer eigenen Ordnung importiert' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 Spieler',
      type: 'SPIEL',
      body: 'Sonntag 15:00 · Stade des Trois Chênes. Treffpunkt 13:30 in der Kabine. Bitte bis Freitag 20 Uhr antworten.',
      sent: 'Gesendet 22:41',
      auto: 'Auto-Erinnerung Freitag 12 Uhr',
      responsesLabel: 'ANTWORTEN · 14 / 18',
      states: { yes: 'Dabei', no: 'Fehlt · Behandlung', maybe: 'Unsicher', none: 'Keine Antwort' },
    },
  },
  ai: {
    kicker: 'KÜNSTLICHE INTELLIGENZ',
    title: 'Briefing und Nachfassen an die KI übergeben.',
    body: 'Sie gibt wieder, was Sie erfassen, und sie handelt: Ein Knopf wendet die Empfehlung an, eine Warteschlange hält die Vorschläge. Sieben Momente decken den Tag ab, drei lesend und vier handelnd.',
    readsLabel: 'SIE LIEST UND BERICHTET',
    actsLabel: 'SIE HANDELT · SIE GEBEN FREI',
    moments: [
      {
        name: 'Das Morgen-Briefing',
        desc: 'Check-in, Termin des Tages, und der Kader sortiert in Ruhe, Beobachten, Fit, Unbekannt.',
      },
      {
        name: 'Fragen in natürlicher Sprache',
        desc: '„Wer ist heute gefährdet?“ Fehlt ein Detail, fragt der Assistent nach, statt zu raten.',
      },
      {
        name: 'Das Antwort-Canvas',
        desc: 'Eine Frage mit Zahlen erzeugt ein Canvas aus Widgets, als Dashboard speicherbar.',
      },
      {
        name: 'Empfehlungen mit direkter Aktion',
        desc: 'Schweregrad, Grund und ein Knopf, der es anwendet: Überlastung, fehlendes RSVP, Verletzung im Blick.',
      },
      {
        name: 'Wartende KI-Aktionen',
        desc: 'Vorschläge bleiben in der Warteschlange, bis Sie freigeben. Nichts wendet sich selbst an.',
      },
      {
        name: 'Das Nachfassen in einem Handgriff',
        desc: 'Aus dem Briefing heraus erreicht ein Handgriff alle Spieler, die noch schweigen, in einem Versand.',
      },
      {
        name: 'Der importierte Spielbericht',
        desc: 'Foto oder PDF der gegnerischen Aufstellung: Die KI schlägt die Spieler vor, Sie bestätigen.',
      },
    ],
    visual: {
      assistant: 'KI-Assistent',
      live: 'KI · LAUFENDE ANALYSE',
      question: 'Vergleiche die Metriken dieses Spiels mit dem vorherigen und baue eine Visualisierung.',
      answer: 'Vergleich auf Basis der GPS-Exporte der Spiele ST14 und ST13:',
      sources: 'QUELLEN · GPS SPIEL ST14 · GPS SPIEL ST13',
      vizTitle: 'Spiel ST14 vs ST13 · GPS-Metriken',
      legendA: 'ST13',
      legendB: 'ST14',
      metrics: ['DISTANZ', 'HSR', 'SPRINTS', 'LAST'],
      insight:
        'HSR +9 % und Sprints +21 % bei nahezu gleichem Volumen. Die Intensität steigt bei gleicher Last.',
      pin: 'Ans Dashboard heften',
      refine: 'Frage verfeinern',
      signalTitle: 'Signal von der KI gemeldet, aus eigener Initiative',
      signalBody: 'Schlaf der Gruppe 12 % niedriger seit der Umstellung auf 2 Spiele / Woche.',
      examine: 'Prüfen',
    },
    note: '„Der Assistent klärt die Entscheidung; Sie treffen sie.“ Höchstens zwei Rückfragen, Antworten aus Ihren Daten, und Ihre Freigabe vor jeder Aktion.',
  },
  reporting: {
    kicker: 'STEUERUNG & BERICHTE',
    title: 'Das Dashboard bauen, das die Führung liest.',
    body: 'Das zusammenstellbare Dashboard, die fünf Standardberichte und der Generator schöpfen aus derselben Basis. Ihre Widgets wandern von einem Bericht zum nächsten, Woche für Woche.',
    modules: [
      { name: 'Dashboard & Signale', desc: 'KPIs des Tages und von der KI erkannte Risiken' },
      { name: 'Berichte', desc: 'Fünf Standardberichte plus der Generator' },
      { name: 'BI & Dashboards', desc: 'Zusammenstellbare Widgets und erzeugte Visualisierungen' },
      { name: 'Saison & Zyklen', desc: 'Periodisierungsblöcke wochenweise vererbt' },
    ],
  },
  opponent: {
    kicker: 'GEGNER',
    title: 'Den nächsten Gegner gemeinsam vorbereiten.',
    modules: [
      { name: 'Gegner-Scouting', desc: 'Notizen, Skizzen, Videos und angereicherte Fotos' },
      { name: 'Scouting-Berichte', desc: 'Mit benannten Spielern und Staff geteilt' },
    ],
    visual: {
      title: 'Scouting-Session · RC Valbonne',
      meta: 'ST-6',
      items: [
        { label: 'Skizze · Spielaufbau zu dritt', meta: 'annotiert' },
        { label: 'Clip Standardsituation (0:42)', meta: 'Veo' },
        { label: 'Foto der wahrscheinlichen Aufstellung', meta: 'KI · importierter Bericht' },
      ],
    },
  },
  player: {
    kicker: 'SEITE SPIELER & ELTERN',
    title: 'Spielern und Eltern einen Zugang geben.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Vier Anwendungen: Kalender, Aufgebote, Check-in und Programme, für iOS und Android' },
      { name: 'Elternportal', desc: 'Bei Jugendteams läuft alles über die Eltern, mit deren Einwilligung' },
    ],
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: FeaturesIndexContent = {
  meta: {
    title: 'Funcionalidades STRIVN | Cada módulo em detalhe, um a um',
    description:
      'Percorra cada módulo do STRIVN em detalhe: monitorização, sessões, plantel, IA, relatórios, adversário e app do jogador.',
  },
  hero: {
    kicker: 'FUNCIONALIDADES',
    title: 'Percorra as seis famílias de módulos.',
    sub: 'Cada módulo sustenta-se sozinho e todos partilham a mesma base de dados. Um dado introduzido uma vez serve as seis famílias, de segunda ao jogo.',
    jump: ['Monitorização', 'Sessões & campo', 'Plantel', 'Inteligência', 'Relatórios', 'Adversário & jogador'],
  },
  monitoring: {
    kicker: 'MONITORIZAÇÃO & DESEMPENHO',
    title: 'Leia readiness, carga e alertas num só ecrã.',
    body: 'Abre este ecrã antes da sessão: readiness por jogador, carga do dia e alertas de IA. O check-in da manhã e a sua exportação GPS alimentam os oito módulos abaixo.',
    modules: [
      { name: 'Carga de treino', desc: 'sRPE, ACWR, monotonia e constrangimento em contínuo' },
      { name: 'GPS & blocos de velocidade', desc: 'Exportações agrupadas em zonas nomeadas' },
      { name: 'Planeamento de carga', desc: 'Objetivo semanal, depois previsto vs realizado' },
      { name: 'Check-in de bem-estar', desc: 'Sono, fadiga, dor, motivação' },
      { name: 'Readiness', desc: 'Verde / laranja / vermelho, projetado' },
      { name: 'Testes & automedição', desc: 'Campanhas preenchidas pelo staff ou pelos jogadores' },
      { name: 'Musculação & 1RM', desc: 'Uma percentagem, uma carga por jogador' },
      { name: 'Programas', desc: 'Força, prevenção, regresso ao jogo' },
    ],
  },
  sessions: {
    kicker: 'SESSÕES & CAMPO',
    title: 'Construa a sessão, conduza-a à beira do campo.',
    body: 'O construtor estima a carga de cada bloco antes do treino, aqui 445 UA em quatro blocos. Depois o modo direto compara essa estimativa com o realizado, enquanto a sessão decorre.',
    modules: [
      { name: 'Calendário & eventos', desc: 'Uma semana duplica-se para a seguinte' },
      { name: 'Biblioteca de exercícios', desc: 'Link, vídeo, esquema ou texto, em pastas' },
      { name: 'Métricas de exercício', desc: 'A sessão anuncia a sua carga estimada' },
      { name: 'Sessão em direto', desc: 'Runner em ecrã inteiro, mesmo sem rede' },
      { name: 'Jogo em direto', desc: 'Minutos e eventos a partir do banco' },
      { name: 'Balanço de sessão', desc: 'RPE e participação consolidados' },
      { name: 'Análise dos golos', desc: 'Vocabulário de estatísticas próprio da equipa' },
    ],
    visual: {
      title: 'Sessão quinta · bloco intensidade',
      sub: 'Carga estimada 445 UA · alvo 460',
      badge: 'DENTRO DO ALVO',
      blocks: [
        'Aquecimento + ativação',
        'Bloco pressão · 8v8',
        'Velocidade · sprints lançados',
        'Jogo reduzido + retorno à calma',
      ],
      workoutTitle: 'Treino individual · L. Moreau',
      published: 'Publicado para a app do jogador',
      workoutBody:
        'Nordic curls 3×8 · Copenhagen 3×10 / lado · mobilidade da anca 8 min. Gerado a partir do protocolo isquiotibial, carga deduzida da sessão coletiva.',
    },
  },
  team: {
    kicker: 'PLANTEL & DIA A DIA',
    title: 'Envie a convocatória, as respostas voltam sozinhas.',
    body: 'Os jogadores respondem por um simples link, e o lembrete parte sozinho à hora que definir. Na captura, sexta ao meio-dia, e 14 respostas em 18, com a enfermaria já descontada da disponibilidade.',
    modules: [
      { name: 'Gerir o plantel', desc: 'Ativos, lesionados, inativos, arquivo RGPD' },
      { name: 'Jogadores à experiência', desc: 'Convocados, mas fora das médias' },
      { name: 'Convocatórias (RSVP)', desc: 'Respostas e lembretes automáticos' },
      { name: 'Assiduidade', desc: 'Presença, programas e check-ins em 30 d' },
      { name: 'Médico & lesões', desc: 'Protocolos de regresso, acesso restrito' },
      { name: 'Tratamentos & vagas de fisio', desc: 'Os jogadores reservam a sua vaga' },
      { name: 'Documentos', desc: 'Registo de leitura X/Y visto, por jogador' },
      { name: 'Multas', desc: 'Catálogo importado do seu regulamento' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 jogadores',
      type: 'JOGO',
      body: 'Domingo 15h00 · Stade des Trois Chênes. Encontro 13h30 no balneário. Responder até sexta-feira 20h.',
      sent: 'Enviada 22:41',
      auto: 'Lembrete automático sexta 12h',
      responsesLabel: 'RESPOSTAS · 14 / 18',
      states: { yes: 'Presente', no: 'Ausente · enfermaria', maybe: 'Incerto', none: 'Sem resposta' },
    },
  },
  ai: {
    kicker: 'INTELIGÊNCIA ARTIFICIAL',
    title: 'Entregue à IA o briefing e os lembretes.',
    body: 'Restitui o que introduz, e depois age: um botão aplica a recomendação, uma fila retém as propostas. Sete momentos cobrem o dia, três de leitura e quatro de ação.',
    readsLabel: 'ELA LÊ E RESTITUI',
    actsLabel: 'ELA AGE · VOCÊ VALIDA',
    moments: [
      {
        name: 'O briefing da manhã',
        desc: 'Check-in, evento do dia, e o plantel classificado em Repouso, Vigiar, Apto, Desconhecido.',
      },
      {
        name: 'As perguntas em linguagem natural',
        desc: '«Quem está em risco hoje?» Se faltar um detalhe, o assistente pergunta em vez de adivinhar.',
      },
      {
        name: 'O canvas de resposta',
        desc: 'Uma pergunta com números gera um canvas de widgets, guardável como dashboard.',
      },
      {
        name: 'As recomendações com ação direta',
        desc: 'Gravidade, motivo, e um botão que aplica: sobrecarga, RSVP em falta, lesão a vigiar.',
      },
      {
        name: 'As ações de IA em espera',
        desc: 'As propostas ficam em fila até à sua validação. Nada se aplica sozinho.',
      },
      {
        name: 'O lembrete num gesto',
        desc: 'A partir do briefing, um gesto alcança todos os jogadores ainda em silêncio, num só envio.',
      },
      {
        name: 'A ficha de jogo importada',
        desc: 'Foto ou PDF do onze adversário: a IA propõe os jogadores, você confirma.',
      },
    ],
    visual: {
      assistant: 'Assistente IA',
      live: 'IA · ANÁLISE CONTÍNUA',
      question: 'Compara as métricas deste jogo com o anterior, e constrói uma visualização.',
      answer: 'Comparação feita sobre as exportações GPS dos jogos J14 e J13:',
      sources: 'FONTES · GPS JOGO J14 · GPS JOGO J13',
      vizTitle: 'Jogo J14 vs J13 · métricas GPS',
      legendA: 'J13',
      legendB: 'J14',
      metrics: ['DISTÂNCIA', 'HSR', 'SPRINTS', 'CARGA'],
      insight: 'HSR +9 % e sprints +21 % com volume quase estável. A intensidade sobe com a mesma carga.',
      pin: 'Fixar no dashboard',
      refine: 'Afinar a pergunta',
      signalTitle: 'Sinal levantado pela IA, por iniciativa própria',
      signalBody: 'Sono do grupo em queda de 12 % desde a passagem a 2 jogos / semana.',
      examine: 'Examinar',
    },
    note: '«O assistente esclarece a decisão; você toma-a.» Duas perguntas de clarificação no máximo, respostas tiradas dos seus dados, e a sua validação antes de cada ação.',
  },
  reporting: {
    kicker: 'PILOTAGEM & RELATÓRIOS',
    title: 'Componha o dashboard que a direção lê.',
    body: 'O dashboard componível, os cinco relatórios tipo e o gerador bebem da mesma base. Os seus widgets passam de um relatório para o outro, semana após semana.',
    modules: [
      { name: 'Painel & sinais', desc: 'KPIs do dia e riscos detetados pela IA' },
      { name: 'Relatórios', desc: 'Cinco relatórios tipo mais o gerador' },
      { name: 'BI & dashboards', desc: 'Widgets componíveis e visualizações geradas' },
      { name: 'Época & ciclos', desc: 'Blocos de periodização herdados por semana' },
    ],
  },
  opponent: {
    kicker: 'ADVERSÁRIO',
    title: 'Prepare o próximo adversário em conjunto.',
    modules: [
      { name: 'Scouting dos adversários', desc: 'Notas, esquemas, vídeos e fotos enriquecidas' },
      { name: 'Relatórios de scouting', desc: 'Partilhados com jogadores e staff designados' },
    ],
    visual: {
      title: 'Sessão de scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Esquema · saída de bola a 3', meta: 'anotado' },
        { label: 'Clip bola parada (0:42)', meta: 'Veo' },
        { label: 'Foto do onze provável', meta: 'IA · ficha importada' },
      ],
    },
  },
  player: {
    kicker: 'LADO JOGADOR & PAIS',
    title: 'Equipe o jogador e o encarregado.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Quatro usos: agenda, convocatórias, check-in e programas, em iOS e Android' },
      { name: 'Portal dos pais', desc: 'Nas equipas de jovens tudo passa pelo encarregado, com o seu consentimento' },
    ],
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: FeaturesIndexContent = {
  meta: {
    title: 'Funcionalidades STRIVN | Cada módulo en detalle, uno por uno',
    description:
      'Recorra cada módulo de STRIVN en detalle: monitorización, sesiones, plantilla, IA, informes, rival y app del jugador.',
  },
  hero: {
    kicker: 'FUNCIONALIDADES',
    title: 'Recorra las seis familias de módulos.',
    sub: 'Cada módulo se sostiene solo y todos comparten la misma base de datos. Un dato introducido una vez sirve a las seis familias, del lunes al partido.',
    jump: ['Monitorización', 'Sesiones & campo', 'Plantilla', 'Inteligencia', 'Informes', 'Rival & jugador'],
  },
  monitoring: {
    kicker: 'MONITORIZACIÓN & RENDIMIENTO',
    title: 'Lea readiness, carga y alertas en una pantalla.',
    body: 'Abre esta pantalla antes de la sesión: readiness por jugador, carga del día y alertas de IA. El check-in de la mañana y su exportación GPS alimentan los ocho módulos de abajo.',
    modules: [
      { name: 'Carga de entrenamiento', desc: 'sRPE, ACWR, monotonía y strain en continuo' },
      { name: 'GPS & bloques de velocidad', desc: 'Exportaciones agrupadas en zonas nombradas' },
      { name: 'Planificación de carga', desc: 'Objetivo semanal, luego previsto vs realizado' },
      { name: 'Check-in de bienestar', desc: 'Sueño, fatiga, dolor, motivación' },
      { name: 'Readiness', desc: 'Verde / naranja / rojo, proyectado' },
      { name: 'Tests & automedición', desc: 'Campañas cumplimentadas por el staff o los jugadores' },
      { name: 'Fuerza & 1RM', desc: 'Un porcentaje, una carga por jugador' },
      { name: 'Programas', desc: 'Fuerza, prevención, vuelta a jugar' },
    ],
  },
  sessions: {
    kicker: 'SESIONES & CAMPO',
    title: 'Construya la sesión, dirígala a pie de campo.',
    body: 'El constructor estima la carga de cada bloque antes del entrenamiento, aquí 445 UA en cuatro bloques. Luego el modo en directo compara esa estimación con lo real, mientras la sesión ocurre.',
    modules: [
      { name: 'Calendario & eventos', desc: 'Una semana se duplica en la siguiente' },
      { name: 'Biblioteca de ejercicios', desc: 'Enlace, vídeo, esquema o texto, en carpetas' },
      { name: 'Métricas de ejercicio', desc: 'La sesión anuncia su carga estimada' },
      { name: 'Sesión en directo', desc: 'Runner a pantalla completa, incluso sin red' },
      { name: 'Partido en directo', desc: 'Minutos y eventos desde el banquillo' },
      { name: 'Balance de sesión', desc: 'RPE y participación consolidados' },
      { name: 'Análisis de los goles', desc: 'Vocabulario de estadísticas propio del equipo' },
    ],
    visual: {
      title: 'Sesión jueves · bloque intensidad',
      sub: 'Carga estimada 445 UA · objetivo 460',
      badge: 'EN OBJETIVO',
      blocks: [
        'Calentamiento + activación',
        'Bloque presión · 8v8',
        'Velocidad · sprints lanzados',
        'Juego reducido + vuelta a la calma',
      ],
      workoutTitle: 'Entreno individual · L. Moreau',
      published: 'Publicado a la app del jugador',
      workoutBody:
        'Nordic curls 3×8 · Copenhagen 3×10 / lado · movilidad de cadera 8 min. Generado desde el protocolo isquiotibial, carga deducida de la sesión colectiva.',
    },
  },
  team: {
    kicker: 'PLANTILLA & DÍA A DÍA',
    title: 'Envíe la convocatoria, las respuestas vuelven solas.',
    body: 'Los jugadores responden por un simple enlace, y el recordatorio sale solo a la hora que usted fije. En la captura, viernes al mediodía, y 14 respuestas de 18, con la enfermería ya descontada de la disponibilidad.',
    modules: [
      { name: 'Gestionar la plantilla', desc: 'Activos, lesionados, inactivos, archivado RGPD' },
      { name: 'Jugadores a prueba', desc: 'Convocados, pero fuera de las medias' },
      { name: 'Convocatorias (RSVP)', desc: 'Respuestas y recordatorios automáticos' },
      { name: 'Asistencia', desc: 'Presencia, programas y check-ins en 30 d' },
      { name: 'Médico & lesiones', desc: 'Protocolos de vuelta, acceso restringido' },
      { name: 'Tratamientos & huecos de fisio', desc: 'Los jugadores reservan su hueco' },
      { name: 'Documentos', desc: 'Seguimiento de lectura X/Y visto, por jugador' },
      { name: 'Multas', desc: 'Catálogo importado de su propio reglamento' },
    ],
    visual: {
      to: '→ Olympique Montverne · 18 jugadores',
      type: 'PARTIDO',
      body: 'Domingo 15h00 · Stade des Trois Chênes. Cita 13h30 en el vestuario. Responder antes del viernes 20h.',
      sent: 'Enviada 22:41',
      auto: 'Recordatorio automático viernes 12h',
      responsesLabel: 'RESPUESTAS · 14 / 18',
      states: { yes: 'Presente', no: 'Ausente · enfermería', maybe: 'Dudoso', none: 'Sin respuesta' },
    },
  },
  ai: {
    kicker: 'INTELIGENCIA ARTIFICIAL',
    title: 'Confíe a la IA el briefing y los recordatorios.',
    body: 'Devuelve lo que usted introduce, y después actúa: un botón aplica la recomendación, una cola retiene las propuestas. Siete momentos cubren el día, tres de lectura y cuatro de acción.',
    readsLabel: 'ELLA LEE Y DEVUELVE',
    actsLabel: 'ELLA ACTÚA · USTED VALIDA',
    moments: [
      {
        name: 'El briefing de la mañana',
        desc: 'Check-in, evento del día, y la plantilla clasificada en Reposo, Vigilar, Apto, Desconocido.',
      },
      {
        name: 'Las preguntas en lenguaje natural',
        desc: '«¿Quién está en riesgo hoy?» Si falta un detalle, el asistente pregunta en lugar de adivinar.',
      },
      {
        name: 'El canvas de respuesta',
        desc: 'Una pregunta con cifras genera un canvas de widgets, guardable como dashboard.',
      },
      {
        name: 'Las recomendaciones con acción directa',
        desc: 'Gravedad, motivo, y un botón que lo aplica: sobrecarga, RSVP ausente, lesión a vigilar.',
      },
      {
        name: 'Las acciones de IA en espera',
        desc: 'Las propuestas quedan en cola hasta su validación. Nada se aplica solo.',
      },
      {
        name: 'El recordatorio en un gesto',
        desc: 'Desde el briefing, un gesto alcanza a todos los jugadores aún en silencio, en un solo envío.',
      },
      {
        name: 'El acta de partido importada',
        desc: 'Foto o PDF de la alineación rival: la IA propone los jugadores, usted confirma.',
      },
    ],
    visual: {
      assistant: 'Asistente IA',
      live: 'IA · ANÁLISIS CONTINUO',
      question: 'Compara las métricas de este partido con el anterior, y construye una visualización.',
      answer: 'Comparación establecida sobre las exportaciones GPS de los partidos J14 y J13:',
      sources: 'FUENTES · GPS PARTIDO J14 · GPS PARTIDO J13',
      vizTitle: 'Partido J14 vs J13 · métricas GPS',
      legendA: 'J13',
      legendB: 'J14',
      metrics: ['DISTANCIA', 'HSR', 'SPRINTS', 'CARGA'],
      insight: 'HSR +9 % y sprints +21 % con un volumen casi estable. La intensidad sube con la misma carga.',
      pin: 'Fijar al dashboard',
      refine: 'Afinar la pregunta',
      signalTitle: 'Señal levantada por la IA, por iniciativa propia',
      signalBody: 'Sueño del grupo a la baja un 12 % desde el paso a 2 partidos / semana.',
      examine: 'Examinar',
    },
    note: '«El asistente aclara la decisión; usted la toma.» Dos preguntas de aclaración como máximo, respuestas sacadas de sus datos, y su validación antes de cada acción.',
  },
  reporting: {
    kicker: 'PILOTAJE & INFORMES',
    title: 'Componga el panel que lee la dirección.',
    body: 'El dashboard componible, los cinco informes tipo y el generador beben de la misma base. Sus widgets pasan de un informe a otro, semana tras semana.',
    modules: [
      { name: 'Panel & señales', desc: 'KPIs del día y riesgos detectados por la IA' },
      { name: 'Informes', desc: 'Cinco informes tipo más el generador' },
      { name: 'BI & dashboards', desc: 'Widgets componibles y visualizaciones generadas' },
      { name: 'Temporada & ciclos', desc: 'Bloques de periodización heredados por semana' },
    ],
  },
  opponent: {
    kicker: 'RIVAL',
    title: 'Prepare al próximo rival entre varios.',
    modules: [
      { name: 'Scouting de rivales', desc: 'Notas, esquemas, vídeos y fotos enriquecidas' },
      { name: 'Informes de scouting', desc: 'Compartidos con jugadores y staff designados' },
    ],
    visual: {
      title: 'Sesión de scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Esquema · salida de balón a 3', meta: 'anotado' },
        { label: 'Clip balón parado (0:42)', meta: 'Veo' },
        { label: 'Foto de la alineación probable', meta: 'IA · acta importada' },
      ],
    },
  },
  player: {
    kicker: 'LADO JUGADOR & PADRES',
    title: 'Dé acceso al jugador y al padre.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Cuatro usos: agenda, convocatorias, check-in y programas, en iOS y Android' },
      { name: 'Portal de padres', desc: 'En equipos de jóvenes todo pasa por el padre, con su consentimiento' },
    ],
  },
};

export const featuresIndexContent: Record<Locale, FeaturesIndexContent> = { fr, en, nl, de, pt, es };
