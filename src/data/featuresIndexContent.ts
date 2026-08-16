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
    title: 'Fonctionnalités STRIVN | Tout ce que la plateforme fait, module par module',
    description:
      'Monitoring, séances, équipe, IA, rapports, adversaire et app joueur : chaque module de STRIVN en détail.',
  },
  hero: {
    kicker: 'FONCTIONNALITÉS',
    title: 'Tout ce que STRIVN fait, module par module.',
    sub: 'Chaque module tient debout seul et tous partagent la même base. Rien à débloquer : le plan Coach les inclut tous, pour une équipe.',
    jump: ['Monitoring', 'Séances & terrain', 'Équipe', 'Intelligence', 'Pilotage', 'Adversaire & joueur'],
  },
  monitoring: {
    kicker: 'MONITORING & PERFORMANCE',
    title: 'La donnée du groupe, lue chaque matin.',
    body: 'La capture ci-contre est l’écran que vous ouvrez avant la séance : readiness par joueur, charge et alertes IA, alimenté par le check-in et le GPS.',
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
    title: 'Construite au bureau, pilotée au bord du terrain.',
    body: 'Le constructeur estime la charge de chaque bloc avant l’entraînement. Puis le mode live la compare au réel pendant que ça se joue.',
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
        'Nordic curls 3×8 · Copenhagen 3×10 / côté · mobilité hanche 8 min — généré depuis le protocole ischio, charge déduite de la séance collective.',
    },
  },
  team: {
    kicker: 'ÉQUIPE & QUOTIDIEN',
    title: 'L’intendance qui se tient toute seule.',
    body: 'La convocation part, les réponses reviennent d’un simple lien, les relances sont automatiques. Et la disponibilité intègre l’infirmerie.',
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
    title: 'L’IA n’est pas un module. C’est un poste dans le staff.',
    body: 'Elle restitue ce que vous saisissez, et elle agit : recommandations applicables en un bouton, propositions en attente, joueurs créés depuis une photo. Toujours sous votre validation.',
    readsLabel: 'ELLE LIT ET RESTITUE',
    actsLabel: 'ELLE AGIT — VOUS VALIDEZ',
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
        desc: 'Sévérité, motif, et un bouton qui applique — surcharge, RSVP manquant, blessure à surveiller.',
      },
      {
        name: 'Les actions IA en attente',
        desc: 'Les propositions restent en file jusqu’à votre validation. Rien ne s’applique seul.',
      },
      {
        name: 'La relance des non-répondants',
        desc: 'Depuis le briefing, un geste pour contacter ceux qui n’ont pas répondu.',
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
        'HSR +9 % et sprints +21 % pour un volume quasi stable : l’intensité progresse sans surcoût de charge.',
      pin: 'Épingler au dashboard',
      refine: 'Affiner la question',
      signalTitle: 'Signal remonté par l’IA, sans qu’on lui demande',
      signalBody: 'Sommeil du groupe en baisse de 12 % depuis le passage à 2 matchs / semaine.',
      examine: 'Examiner',
    },
    note: '« L’assistant aide à la décision, il ne la remplace pas. » Deux questions de clarification maximum, des réponses tirées de vos données, et vos validations avant toute action.',
  },
  reporting: {
    kicker: 'PILOTAGE & RAPPORTS',
    title: 'Des rapports lisibles sans être analyste.',
    body: 'Le dashboard composable partage la même base que les cinq rapports types et le générateur. La direction le lit sans formation.',
    modules: [
      { name: 'Tableau de bord & signaux', desc: 'KPIs du jour et risques détectés par l’IA' },
      { name: 'Rapports', desc: 'Cinq rapports types plus le générateur' },
      { name: 'BI & dashboards', desc: 'Widgets composables et visualisations générées' },
      { name: 'Saison & cycles', desc: 'Blocs de périodisation hérités par semaine' },
    ],
  },
  opponent: {
    kicker: 'ADVERSAIRE',
    title: 'Préparer le match d’en face.',
    modules: [
      { name: 'Scouting des adversaires', desc: 'Notes, schémas, vidéos et photos enrichies' },
      { name: 'Rapports de scouting', desc: 'Partagés aux joueurs et staff désignés' },
    ],
    visual: {
      title: 'Session scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Schéma — sortie de balle à 3', meta: 'annoté' },
        { label: 'Clip coup de pied arrêté (0:42)', meta: 'Veo' },
        { label: 'Photo composition probable', meta: 'IA · feuille importée' },
      ],
    },
  },
  player: {
    kicker: 'CÔTÉ JOUEUR & PARENTS',
    title: 'Ce que les autres voient.',
    modules: [
      {
        name: 'App STRIVN Player',
        desc: 'Agenda, convocations, check-in et programmes, sur iOS et Android',
      },
      {
        name: 'Portail parent',
        desc: 'Sur les équipes enfants, tout passe par le parent, avec consentement',
      },
    ],
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN features | Everything the platform does, module by module',
    description:
      'Monitoring, sessions, squad, AI, reports, opponents and the player app: every STRIVN module in detail.',
  },
  hero: {
    kicker: 'FEATURES',
    title: 'Everything STRIVN does, module by module.',
    sub: 'Every module stands on its own and all of them share the same base. Nothing to unlock: the Coach plan includes them all, for one team.',
    jump: ['Monitoring', 'Sessions & pitch', 'Squad', 'Intelligence', 'Reports', 'Opponent & player'],
  },
  monitoring: {
    kicker: 'MONITORING & PERFORMANCE',
    title: 'The squad’s data, read every morning.',
    body: 'The capture opposite is the screen you open before the session: readiness per player, load and AI alerts, fed by the check-in and the GPS.',
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
    title: 'Built at the desk, run from the touchline.',
    body: 'The builder estimates each block’s load before training. Then live mode compares it to the real thing while it plays out.',
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
        'Nordic curls 3×8 · Copenhagen 3×10 / side · hip mobility 8 min — generated from the hamstring protocol, load derived from the team session.',
    },
  },
  team: {
    kicker: 'SQUAD & DAY-TO-DAY',
    title: 'The admin that holds itself together.',
    body: 'The call-up goes out, answers come back from a plain link, reminders are automatic. And availability takes the treatment room into account.',
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
    title: 'The AI is not a module. It is a role on the staff.',
    body: 'It gives back what you enter, and it acts: recommendations applied with one button, proposals held in a queue, players created from a photo. Always subject to your approval.',
    readsLabel: 'IT READS AND REPORTS',
    actsLabel: 'IT ACTS — YOU APPROVE',
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
        desc: 'Severity, reason, and a button that applies it — overload, missing RSVP, injury to watch.',
      },
      {
        name: 'Pending AI actions',
        desc: 'Proposals stay queued until you approve them. Nothing applies itself.',
      },
      {
        name: 'Chasing non-responders',
        desc: 'From the briefing, one gesture to contact everyone who has not answered.',
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
      insight: 'HSR +9 % and sprints +21 % for a near-flat volume: intensity is rising without extra load.',
      pin: 'Pin to dashboard',
      refine: 'Refine the question',
      signalTitle: 'Signal raised by the AI, without being asked',
      signalBody: 'Squad sleep down 12 % since the switch to two matches a week.',
      examine: 'Examine',
    },
    note: '“The assistant supports the decision, it does not replace it.” Two clarifying questions at most, answers drawn from your data, and your approval before any action.',
  },
  reporting: {
    kicker: 'STEERING & REPORTS',
    title: 'Reports you can read without being an analyst.',
    body: 'The composable dashboard shares its base with the five standard reports and the generator. The board reads it without training.',
    modules: [
      { name: 'Dashboard & signals', desc: 'Today’s KPIs and risks detected by the AI' },
      { name: 'Reports', desc: 'Five standard reports plus the generator' },
      { name: 'BI & dashboards', desc: 'Composable widgets and generated visualisations' },
      { name: 'Season & cycles', desc: 'Periodisation blocks inherited by week' },
    ],
  },
  opponent: {
    kicker: 'OPPONENT',
    title: 'Preparing for the other side.',
    modules: [
      { name: 'Opponent scouting', desc: 'Notes, diagrams, videos and enriched photos' },
      { name: 'Scouting reports', desc: 'Shared with named players and staff' },
    ],
    visual: {
      title: 'Scouting session · RC Valbonne',
      meta: 'MD-6',
      items: [
        { label: 'Diagram — building out with three', meta: 'annotated' },
        { label: 'Set-piece clip (0:42)', meta: 'Veo' },
        { label: 'Photo of the likely line-up', meta: 'AI · imported sheet' },
      ],
    },
  },
  player: {
    kicker: 'PLAYER & PARENT SIDE',
    title: 'What everyone else sees.',
    modules: [
      { name: 'STRIVN Player app', desc: 'Schedule, call-ups, check-in and programmes, on iOS and Android' },
      { name: 'Parent portal', desc: 'On youth teams everything goes through the parent, with consent' },
    ],
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN-functies | Alles wat het platform doet, module per module',
    description:
      'Monitoring, trainingen, kern, AI, rapporten, tegenstander en spelersapp: elke module van STRIVN in detail.',
  },
  hero: {
    kicker: 'FUNCTIES',
    title: 'Alles wat STRIVN doet, module per module.',
    sub: 'Elke module staat op zichzelf en ze delen allemaal dezelfde basis. Niets te ontgrendelen: het Coach-plan bevat ze allemaal, voor één team.',
    jump: ['Monitoring', 'Trainingen & veld', 'Kern', 'Intelligentie', 'Rapporten', 'Tegenstander & speler'],
  },
  monitoring: {
    kicker: 'MONITORING & PRESTATIE',
    title: 'De data van de groep, elke ochtend gelezen.',
    body: 'Het scherm hiernaast opent u vóór de training: readiness per speler, belasting en AI-signalen, gevoed door de check-in en de gps.',
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
    title: 'Op kantoor gebouwd, langs de lijn gestuurd.',
    body: 'De bouwer schat de belasting van elk blok vóór de training. Daarna vergelijkt de live-modus die met de werkelijkheid, terwijl het gebeurt.',
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
        'Nordic curls 3×8 · Copenhagen 3×10 / kant · heupmobiliteit 8 min — gegenereerd vanuit het hamstringprotocol, belasting afgeleid uit de groepstraining.',
    },
  },
  team: {
    kicker: 'KERN & DAGELIJKSE WERKING',
    title: 'De organisatie die zichzelf draaiende houdt.',
    body: 'De oproep vertrekt, antwoorden komen terug via een simpele link, herinneringen gaan automatisch. En de beschikbaarheid houdt rekening met de ziekenboeg.',
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
    title: 'De AI is geen module. Het is een functie in de staf.',
    body: 'Ze geeft terug wat u invoert, en ze handelt: aanbevelingen met één knop toe te passen, voorstellen in wacht, spelers aangemaakt vanaf een foto. Altijd onder uw validatie.',
    readsLabel: 'ZE LEEST EN RAPPORTEERT',
    actsLabel: 'ZE HANDELT — U VALIDEERT',
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
        desc: 'Ernst, reden, en een knop die het toepast — overbelasting, ontbrekende RSVP, blessure om op te volgen.',
      },
      {
        name: 'AI-acties in wacht',
        desc: 'Voorstellen blijven in de wachtrij tot u ze valideert. Niets past zichzelf toe.',
      },
      {
        name: 'Het aanmanen van niet-antwoorders',
        desc: 'Vanuit de briefing, één handeling om iedereen te contacteren die niet antwoordde.',
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
      insight: 'HSR +9 % en sprints +21 % bij nagenoeg gelijk volume: de intensiteit stijgt zonder extra belasting.',
      pin: 'Vastzetten op dashboard',
      refine: 'Vraag verfijnen',
      signalTitle: 'Signaal aangebracht door de AI, zonder dat u het vroeg',
      signalBody: 'Slaap van de groep 12 % lager sinds de overgang naar 2 wedstrijden / week.',
      examine: 'Bekijken',
    },
    note: '« De assistent helpt bij de beslissing, hij vervangt ze niet. » Maximaal twee verduidelijkende vragen, antwoorden uit uw eigen data, en uw validatie vóór elke actie.',
  },
  reporting: {
    kicker: 'STURING & RAPPORTEN',
    title: 'Rapporten die leesbaar zijn zonder analist te zijn.',
    body: 'Het samenstelbare dashboard deelt dezelfde basis als de vijf standaardrapporten en de generator. Het bestuur leest het zonder opleiding.',
    modules: [
      { name: 'Dashboard & signalen', desc: 'KPI’s van de dag en risico’s gedetecteerd door de AI' },
      { name: 'Rapporten', desc: 'Vijf standaardrapporten plus de generator' },
      { name: 'BI & dashboards', desc: 'Samenstelbare widgets en gegenereerde visualisaties' },
      { name: 'Seizoen & cycli', desc: 'Periodiseringsblokken per week overgeërfd' },
    ],
  },
  opponent: {
    kicker: 'TEGENSTANDER',
    title: 'De wedstrijd van de overkant voorbereiden.',
    modules: [
      { name: 'Scouting van tegenstanders', desc: 'Notities, schema’s, video’s en verrijkte foto’s' },
      { name: 'Scoutingrapporten', desc: 'Gedeeld met aangeduide spelers en staf' },
    ],
    visual: {
      title: 'Scoutingsessie · RC Valbonne',
      meta: 'W-6',
      items: [
        { label: 'Schema — opbouw met drie', meta: 'geannoteerd' },
        { label: 'Clip stilstaande fase (0:42)', meta: 'Veo' },
        { label: 'Foto vermoedelijke opstelling', meta: 'AI · geïmporteerd blad' },
      ],
    },
  },
  player: {
    kicker: 'KANT SPELER & OUDERS',
    title: 'Wat de anderen zien.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Agenda, oproepen, check-in en programma’s, op iOS en Android' },
      { name: 'Ouderportaal', desc: 'Bij jeugdteams loopt alles via de ouder, met toestemming' },
    ],
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: FeaturesIndexContent = {
  meta: {
    title: 'STRIVN Funktionen | Alles, was die Plattform leistet — Modul für Modul',
    description:
      'Monitoring, Einheiten, Kader, KI, Berichte, Gegner und Spieler-App: jedes Modul von STRIVN im Detail.',
  },
  hero: {
    kicker: 'FUNKTIONEN',
    title: 'Alles, was STRIVN leistet — Modul für Modul.',
    sub: 'Jedes Modul steht für sich, und alle teilen dieselbe Basis. Nichts freizuschalten: Der Coach-Plan enthält sie alle, für ein Team.',
    jump: ['Monitoring', 'Einheiten & Platz', 'Kader', 'Intelligenz', 'Berichte', 'Gegner & Spieler'],
  },
  monitoring: {
    kicker: 'MONITORING & LEISTUNG',
    title: 'Die Daten der Gruppe, jeden Morgen gelesen.',
    body: 'Die Ansicht nebenan ist der Bildschirm, den Sie vor der Einheit öffnen: Readiness je Spieler, Belastung und KI-Warnungen, gespeist aus Check-in und GPS.',
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
    title: 'Am Schreibtisch gebaut, an der Linie gesteuert.',
    body: 'Der Builder schätzt die Belastung jedes Blocks vor dem Training. Der Live-Modus vergleicht sie dann mit der Realität, während sie läuft.',
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
        'Nordic Curls 3×8 · Copenhagen 3×10 / Seite · Hüftmobilität 8 min — aus dem Ischio-Protokoll erzeugt, Last aus der Teameinheit abgeleitet.',
    },
  },
  team: {
    kicker: 'KADER & ALLTAG',
    title: 'Die Organisation, die sich selbst trägt.',
    body: 'Das Aufgebot geht raus, Antworten kommen über einen simplen Link zurück, Erinnerungen laufen automatisch. Und die Verfügbarkeit bezieht die Behandlungsliege mit ein.',
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
    title: 'Die KI ist kein Modul. Sie ist eine Stelle im Staff.',
    body: 'Sie gibt wieder, was Sie erfassen, und sie handelt: Empfehlungen per Knopfdruck anwendbar, Vorschläge in der Warteschlange, Spieler aus einem Foto angelegt. Immer unter Ihrer Freigabe.',
    readsLabel: 'SIE LIEST UND BERICHTET',
    actsLabel: 'SIE HANDELT — SIE GEBEN FREI',
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
        desc: 'Schweregrad, Grund und ein Knopf, der es anwendet — Überlastung, fehlendes RSVP, Verletzung im Blick.',
      },
      {
        name: 'Wartende KI-Aktionen',
        desc: 'Vorschläge bleiben in der Warteschlange, bis Sie freigeben. Nichts wendet sich selbst an.',
      },
      {
        name: 'Das Nachfassen bei Nicht-Antwortenden',
        desc: 'Aus dem Briefing heraus ein Handgriff, um alle zu kontaktieren, die nicht geantwortet haben.',
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
        'HSR +9 % und Sprints +21 % bei nahezu gleichem Volumen: Die Intensität steigt ohne Mehrbelastung.',
      pin: 'Ans Dashboard heften',
      refine: 'Frage verfeinern',
      signalTitle: 'Signal von der KI gemeldet, ohne dass jemand fragt',
      signalBody: 'Schlaf der Gruppe 12 % niedriger seit der Umstellung auf 2 Spiele / Woche.',
      examine: 'Prüfen',
    },
    note: '„Der Assistent unterstützt die Entscheidung, er ersetzt sie nicht.“ Höchstens zwei Rückfragen, Antworten aus Ihren Daten, und Ihre Freigabe vor jeder Aktion.',
  },
  reporting: {
    kicker: 'STEUERUNG & BERICHTE',
    title: 'Berichte, die man ohne Analyst lesen kann.',
    body: 'Das zusammenstellbare Dashboard teilt die Basis mit den fünf Standardberichten und dem Generator. Die Führung liest es ohne Schulung.',
    modules: [
      { name: 'Dashboard & Signale', desc: 'KPIs des Tages und von der KI erkannte Risiken' },
      { name: 'Berichte', desc: 'Fünf Standardberichte plus der Generator' },
      { name: 'BI & Dashboards', desc: 'Zusammenstellbare Widgets und erzeugte Visualisierungen' },
      { name: 'Saison & Zyklen', desc: 'Periodisierungsblöcke wochenweise vererbt' },
    ],
  },
  opponent: {
    kicker: 'GEGNER',
    title: 'Das Spiel der anderen Seite vorbereiten.',
    modules: [
      { name: 'Gegner-Scouting', desc: 'Notizen, Skizzen, Videos und angereicherte Fotos' },
      { name: 'Scouting-Berichte', desc: 'Mit benannten Spielern und Staff geteilt' },
    ],
    visual: {
      title: 'Scouting-Session · RC Valbonne',
      meta: 'ST-6',
      items: [
        { label: 'Skizze — Spielaufbau zu dritt', meta: 'annotiert' },
        { label: 'Clip Standardsituation (0:42)', meta: 'Veo' },
        { label: 'Foto der wahrscheinlichen Aufstellung', meta: 'KI · importierter Bericht' },
      ],
    },
  },
  player: {
    kicker: 'SEITE SPIELER & ELTERN',
    title: 'Was die anderen sehen.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Kalender, Aufgebote, Check-in und Programme, für iOS und Android' },
      { name: 'Elternportal', desc: 'Bei Jugendteams läuft alles über die Eltern, mit Einwilligung' },
    ],
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: FeaturesIndexContent = {
  meta: {
    title: 'Funcionalidades STRIVN | Tudo o que a plataforma faz, módulo a módulo',
    description:
      'Monitorização, sessões, plantel, IA, relatórios, adversário e app do jogador: cada módulo do STRIVN em detalhe.',
  },
  hero: {
    kicker: 'FUNCIONALIDADES',
    title: 'Tudo o que o STRIVN faz, módulo a módulo.',
    sub: 'Cada módulo sustenta-se sozinho e todos partilham a mesma base. Nada a desbloquear: o plano Coach inclui-os todos, para uma equipa.',
    jump: ['Monitorização', 'Sessões & campo', 'Plantel', 'Inteligência', 'Relatórios', 'Adversário & jogador'],
  },
  monitoring: {
    kicker: 'MONITORIZAÇÃO & DESEMPENHO',
    title: 'Os dados do grupo, lidos todas as manhãs.',
    body: 'O ecrã ao lado é o que abre antes da sessão: readiness por jogador, carga e alertas de IA, alimentado pelo check-in e pelo GPS.',
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
    title: 'Construída na secretária, conduzida à beira do campo.',
    body: 'O construtor estima a carga de cada bloco antes do treino. Depois o modo direto compara-a com o real enquanto acontece.',
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
        'Nordic curls 3×8 · Copenhagen 3×10 / lado · mobilidade da anca 8 min — gerado a partir do protocolo isquiotibial, carga deduzida da sessão coletiva.',
    },
  },
  team: {
    kicker: 'PLANTEL & DIA A DIA',
    title: 'A logística que se aguenta sozinha.',
    body: 'A convocatória sai, as respostas voltam por um simples link, os lembretes são automáticos. E a disponibilidade integra a enfermaria.',
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
    title: 'A IA não é um módulo. É um lugar no staff.',
    body: 'Restitui o que introduz, e age: recomendações aplicáveis num botão, propostas em espera, jogadores criados a partir de uma foto. Sempre sob a sua validação.',
    readsLabel: 'ELA LÊ E RESTITUI',
    actsLabel: 'ELA AGE — VOCÊ VALIDA',
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
        desc: 'Gravidade, motivo, e um botão que aplica — sobrecarga, RSVP em falta, lesão a vigiar.',
      },
      {
        name: 'As ações de IA em espera',
        desc: 'As propostas ficam em fila até à sua validação. Nada se aplica sozinho.',
      },
      {
        name: 'A insistência junto de quem não respondeu',
        desc: 'A partir do briefing, um gesto para contactar quem não respondeu.',
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
      insight: 'HSR +9 % e sprints +21 % com volume quase estável: a intensidade sobe sem custo de carga.',
      pin: 'Fixar no dashboard',
      refine: 'Afinar a pergunta',
      signalTitle: 'Sinal levantado pela IA, sem ninguém pedir',
      signalBody: 'Sono do grupo em queda de 12 % desde a passagem a 2 jogos / semana.',
      examine: 'Examinar',
    },
    note: '«O assistente ajuda a decidir, não decide por si.» Duas perguntas de clarificação no máximo, respostas tiradas dos seus dados, e as suas validações antes de qualquer ação.',
  },
  reporting: {
    kicker: 'PILOTAGEM & RELATÓRIOS',
    title: 'Relatórios legíveis sem ser analista.',
    body: 'O dashboard componível partilha a mesma base dos cinco relatórios tipo e do gerador. A direção lê-o sem formação.',
    modules: [
      { name: 'Painel & sinais', desc: 'KPIs do dia e riscos detetados pela IA' },
      { name: 'Relatórios', desc: 'Cinco relatórios tipo mais o gerador' },
      { name: 'BI & dashboards', desc: 'Widgets componíveis e visualizações geradas' },
      { name: 'Época & ciclos', desc: 'Blocos de periodização herdados por semana' },
    ],
  },
  opponent: {
    kicker: 'ADVERSÁRIO',
    title: 'Preparar o jogo do outro lado.',
    modules: [
      { name: 'Scouting dos adversários', desc: 'Notas, esquemas, vídeos e fotos enriquecidas' },
      { name: 'Relatórios de scouting', desc: 'Partilhados com jogadores e staff designados' },
    ],
    visual: {
      title: 'Sessão de scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Esquema — saída de bola a 3', meta: 'anotado' },
        { label: 'Clip bola parada (0:42)', meta: 'Veo' },
        { label: 'Foto do onze provável', meta: 'IA · ficha importada' },
      ],
    },
  },
  player: {
    kicker: 'LADO JOGADOR & PAIS',
    title: 'O que os outros veem.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Agenda, convocatórias, check-in e programas, em iOS e Android' },
      { name: 'Portal dos pais', desc: 'Nas equipas de jovens tudo passa pelo pai, com consentimento' },
    ],
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: FeaturesIndexContent = {
  meta: {
    title: 'Funcionalidades STRIVN | Todo lo que hace la plataforma, módulo a módulo',
    description:
      'Monitorización, sesiones, plantilla, IA, informes, rival y app del jugador: cada módulo de STRIVN en detalle.',
  },
  hero: {
    kicker: 'FUNCIONALIDADES',
    title: 'Todo lo que hace STRIVN, módulo a módulo.',
    sub: 'Cada módulo se sostiene solo y todos comparten la misma base. Nada que desbloquear: el plan Coach los incluye todos, para un equipo.',
    jump: ['Monitorización', 'Sesiones & campo', 'Plantilla', 'Inteligencia', 'Informes', 'Rival & jugador'],
  },
  monitoring: {
    kicker: 'MONITORIZACIÓN & RENDIMIENTO',
    title: 'Los datos del grupo, leídos cada mañana.',
    body: 'La pantalla de al lado es la que abre antes de la sesión: readiness por jugador, carga y alertas de IA, alimentada por el check-in y el GPS.',
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
    title: 'Construida en el despacho, dirigida a pie de campo.',
    body: 'El constructor estima la carga de cada bloque antes del entrenamiento. Y luego el modo en directo la compara con lo real mientras ocurre.',
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
        'Nordic curls 3×8 · Copenhagen 3×10 / lado · movilidad de cadera 8 min — generado desde el protocolo isquiotibial, carga deducida de la sesión colectiva.',
    },
  },
  team: {
    kicker: 'PLANTILLA & DÍA A DÍA',
    title: 'La intendencia que se sostiene sola.',
    body: 'La convocatoria sale, las respuestas vuelven por un simple enlace, los recordatorios son automáticos. Y la disponibilidad integra la enfermería.',
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
    title: 'La IA no es un módulo. Es un puesto en el staff.',
    body: 'Devuelve lo que usted introduce, y actúa: recomendaciones aplicables con un botón, propuestas en espera, jugadores creados desde una foto. Siempre bajo su validación.',
    readsLabel: 'ELLA LEE Y DEVUELVE',
    actsLabel: 'ELLA ACTÚA — USTED VALIDA',
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
        desc: 'Gravedad, motivo, y un botón que lo aplica — sobrecarga, RSVP ausente, lesión a vigilar.',
      },
      {
        name: 'Las acciones de IA en espera',
        desc: 'Las propuestas quedan en cola hasta su validación. Nada se aplica solo.',
      },
      {
        name: 'El recordatorio a quienes no responden',
        desc: 'Desde el briefing, un gesto para contactar a los que no han respondido.',
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
      insight: 'HSR +9 % y sprints +21 % con un volumen casi estable: la intensidad sube sin sobrecoste de carga.',
      pin: 'Fijar al dashboard',
      refine: 'Afinar la pregunta',
      signalTitle: 'Señal levantada por la IA, sin que nadie la pida',
      signalBody: 'Sueño del grupo a la baja un 12 % desde el paso a 2 partidos / semana.',
      examine: 'Examinar',
    },
    note: '«El asistente ayuda a decidir, no decide por usted.» Dos preguntas de aclaración como máximo, respuestas sacadas de sus datos, y sus validaciones antes de cualquier acción.',
  },
  reporting: {
    kicker: 'PILOTAJE & INFORMES',
    title: 'Informes legibles sin ser analista.',
    body: 'El dashboard componible comparte la misma base que los cinco informes tipo y el generador. La dirección lo lee sin formación.',
    modules: [
      { name: 'Panel & señales', desc: 'KPIs del día y riesgos detectados por la IA' },
      { name: 'Informes', desc: 'Cinco informes tipo más el generador' },
      { name: 'BI & dashboards', desc: 'Widgets componibles y visualizaciones generadas' },
      { name: 'Temporada & ciclos', desc: 'Bloques de periodización heredados por semana' },
    ],
  },
  opponent: {
    kicker: 'RIVAL',
    title: 'Preparar el partido de enfrente.',
    modules: [
      { name: 'Scouting de rivales', desc: 'Notas, esquemas, vídeos y fotos enriquecidas' },
      { name: 'Informes de scouting', desc: 'Compartidos con jugadores y staff designados' },
    ],
    visual: {
      title: 'Sesión de scouting · RC Valbonne',
      meta: 'J-6',
      items: [
        { label: 'Esquema — salida de balón a 3', meta: 'anotado' },
        { label: 'Clip balón parado (0:42)', meta: 'Veo' },
        { label: 'Foto de la alineación probable', meta: 'IA · acta importada' },
      ],
    },
  },
  player: {
    kicker: 'LADO JUGADOR & PADRES',
    title: 'Lo que ven los demás.',
    modules: [
      { name: 'App STRIVN Player', desc: 'Agenda, convocatorias, check-in y programas, en iOS y Android' },
      { name: 'Portal de padres', desc: 'En equipos de niños todo pasa por el padre, con consentimiento' },
    ],
  },
};

export const featuresIndexContent: Record<Locale, FeaturesIndexContent> = { fr, en, nl, de, pt, es };
