/**
 * Text and fixtures for the sub-page product captures.
 *
 * A capture is named by a string in the page content (`visual: 'load-board'`),
 * so its labels cannot travel with the section. They live here instead: one
 * file, six locales, every capture. Numbers and player names are the same
 * everywhere and stay outside the locale objects — a value that only exists
 * once cannot drift between translations.
 */
import type { Locale } from '../landingContent';

/* ── Locale-invariant fixtures ────────────────────────────────── */

/** Load feed: icon and accent per row, in order. */
export const LOAD_ROW_STYLE = [
  { icon: 'satellite', tone: 'blue' },
  { icon: 'gauge', tone: 'green' },
  { icon: 'triangle-alert', tone: 'orange' },
  { icon: 'check', tone: 'green' },
] as const;

/** Morning check-in table. `pain: null` marks a player who has not answered. */
export const CHECKIN_ROWS: Array<{
  name: string;
  sleep: string | null;
  fatigue: string | null;
  pain: boolean | null;
  ready: 'green' | 'amber' | 'red' | 'missing';
}> = [
  { name: 'A. Diallo', sleep: '8 h', fatigue: '2', pain: false, ready: 'green' },
  { name: 'L. Moreau', sleep: '4 h', fatigue: '5', pain: true, ready: 'red' },
  { name: 'K. Nakamura', sleep: '6 h', fatigue: '3', pain: false, ready: 'amber' },
  { name: 'S. Petit', sleep: '7 h', fatigue: '2', pain: false, ready: 'green' },
  { name: 'T. Mendes', sleep: null, fatigue: null, pain: null, ready: 'missing' },
];

/** Test campaign grid. `pos` and `zone` index into the locale's label lists. */
export const CAMPAIGN_ROWS: Array<{ name: string; pos: number; value: string | null; zone: number }> = [
  { name: 'A. Diallo', pos: 0, value: '18,1', zone: 0 },
  { name: 'S. Petit', pos: 1, value: '17,4', zone: 1 },
  { name: 'T. Mendes', pos: 2, value: '16,2', zone: 2 },
  { name: 'K. Nakamura', pos: 3, value: null, zone: 3 },
];

/** Zone dot colours, in `CAMPAIGN_ROWS.zone` order. */
export const CAMPAIGN_ZONE_DOTS = ['#8CE99A', '#B8E986', '#FF8400', '#68779A'] as const;

/** Results entered, out of the squad — drives the progress bar. */
export const CAMPAIGN_PROGRESS = { done: 12, total: 18 };

/** GPS export columns: which measures the device actually fills per zone. */
export const GPS_ZONES: Array<{ n: number; dist: boolean; time: boolean }> = [
  { n: 1, dist: true, time: true },
  { n: 2, dist: true, time: true },
  { n: 3, dist: true, time: true },
  { n: 4, dist: true, time: true },
  { n: 5, dist: true, time: false },
  { n: 6, dist: true, time: false },
];

/**
 * Speed blocks as sums of zones. `'all'` renders as "Zone 1 + … + Zone 6" so
 * the ellipsis stays an ellipsis rather than six spelled-out terms.
 */
export const GPS_BLOCKS: Array<{ zones: number[] | 'all' }> = [
  { zones: [1, 2, 3] },
  { zones: [4, 5] },
  { zones: [6] },
  { zones: 'all' },
];


/** Zone swatches for the measure editor, best to worst. */
export const MEASURE_ZONE_DOTS = ['#8CE99A', '#B8E986', '#FF8400', '#FF5C33'] as const;

/**
 * Percentile bands, left to right. The marker sits on index 3 — the page's
 * point is that a value only means something once it is placed on this scale.
 */
export const SCALE_BANDS = ['#FF5C332E', '#FF84002E', '#FFFFFF12', '#8CE99A38', '#8CE99A5C'] as const;
export const SCALE_MARKER_INDEX = 3;

/**
 * The planned week. `ua` is the load each day carries; Thursday is the day the
 * capture opens up, so it is the tallest bar that is not a match.
 */
export const WEEK_BARS = [
  { ua: 210, active: false },
  { ua: 480, active: false },
  { ua: 120, active: false },
  { ua: 340, active: true },
  { ua: 400, active: false },
  { ua: 90, active: false },
  { ua: 1000, active: false },
] as const;

/**
 * Thursday's load components. The two attached ones sum to the session total
 * shown in the header; the pending one counts for the week but hangs off no
 * session — which is the distinction the page is about.
 */
export const WEEK_PARTS: Array<{ rpe: number; min: number; ua: number; attached: boolean }> = [
  { rpe: 8, min: 20, ua: 160, attached: true },
  { rpe: 6, min: 30, ua: 180, attached: true },
  { rpe: 4, min: 20, ua: 60, attached: false },
];

/**
 * The session runner's block strip: one done, one running, two to come. The
 * strip is the only place the capture says where you are in the session, so
 * the states stay a fixture rather than six translated arrays.
 */
export const RUNNER_SEGMENTS = ['done', 'live', 'todo', 'todo'] as const;

/** Icons for the runner's status rows, in order. */
export const RUNNER_ROW_ICONS = ['user-check', 'shuffle', 'timer', 'cloud-off'] as const;

/** Live match: the counted facts, ours against theirs, in label order. */
export const MATCH_FACTS = [
  { a: 6, b: 3 },
  { a: 14, b: 9 },
  { a: 8, b: 11 },
] as const;

/** Match score, and the minutes the timeline rows are stamped with. */
export const MATCH_SCORE = { us: 2, them: 1, minute: 63 };
export const MATCH_EVENTS = [
  { icon: 'circle-dot', minute: 54 },
  { icon: 'arrow-left-right', minute: 58 },
  { icon: 'pen-line', minute: 61 },
  { icon: 'square', minute: 62 },
] as const;

/**
 * Program prescription: 4 × 5 @ 80 % of each player's 1RM, rounded to 2.5 kg
 * plates. L. Moreau is modulated to 60 % on return from injury, and
 * K. Nakamura has no max yet — so he is shown untested rather than loaded at
 * a guess. The weights are computed values, kept here so they stay true.
 */
export const PROGRAM_PCT = 80;
export const PROGRAM_ROWS: Array<{
  name: string;
  max: number | null;
  mod?: number;
  weight: number | null;
}> = [
  { name: 'A. Diallo', max: 140, weight: 112.5 },
  { name: 'S. Petit', max: 105, weight: 85 },
  { name: 'L. Moreau', max: 118, mod: 60, weight: 57.5 },
  { name: 'K. Nakamura', max: null, weight: null },
];

/** The library inbox queue behind the capture being sorted. */
export const LIBRARY_QUEUE_ICONS = ['image', 'pen-line'] as const;

/** Squad list: five players, their status index into the locale's labels. */
export const SQUAD_ROWS: Array<{ name: string; pos: number; status: 0 | 1 | 2 | 3 }> = [
  { name: 'A. Diallo', pos: 0, status: 0 },
  { name: 'S. Petit', pos: 1, status: 0 },
  { name: 'L. Moreau', pos: 2, status: 1 },
  { name: 'T. Mendes', pos: 0, status: 2 },
  { name: 'N. Diarra', pos: 3, status: 3 },
];
export const SQUAD_TABS = [18, 2, 1, 1] as const;

/**
 * RSVP board. The counters add up to the ten called-up players and the
 * "answered" figure in the header is the six who are not still pending — the
 * page's point is that only those two remain to chase.
 */
export const RSVP_COUNTS = [6, 0, 0, 2, 2] as const;
export const RSVP_ROWS: Array<{ name: string; pos: number; answer: 0 | 1 | 2 | 3 | 4 }> = [
  { name: 'A. Diallo', pos: 0, answer: 0 },
  { name: 'T. Mendes', pos: 1, answer: 3 },
  { name: 'K. Nakamura', pos: 2, answer: 2 },
  { name: 'S. Petit', pos: 3, answer: 4 },
];

/** Return-to-play protocol: two steps done, one running, one to come. */
export const RTP_STATES = ['done', 'done', 'live', 'todo'] as const;
export const RTP_PROGRESS = 68;

/** Report table: minutes, rating and ACWR over the last five matches. */
export const REPORT_ROWS: Array<{
  name: string;
  min: number;
  minDelta: number | null;
  rating: string | null;
  ratingDelta: string | null;
  acwr: string | null;
}> = [
  { name: 'A. Diallo', min: 450, minDelta: 12, rating: '7,4', ratingDelta: '+0,3', acwr: '1,08' },
  { name: 'S. Petit', min: 270, minDelta: -90, rating: '6,1', ratingDelta: '−0,4', acwr: '1,26' },
  { name: 'K. Nakamura', min: 180, minDelta: null, rating: '6,8', ratingDelta: null, acwr: null },
];

/**
 * The opponent file. `source` and `confidence` index into the locale's labels:
 * a row lifted from an imported team sheet says so and carries how sure the
 * extraction was, because a roster the coach never confirmed must not read
 * like one they did.
 */
export const SCOUT_ROWS: Array<{
  num: number;
  pos: 0 | 1 | 2 | 3;
  danger: boolean;
  source: 0 | 1;
  confidence: number | null;
}> = [
  { num: 9, pos: 0, danger: true, source: 0, confidence: null },
  { num: 10, pos: 1, danger: true, source: 1, confidence: 92 },
  { num: 4, pos: 2, danger: false, source: 1, confidence: 78 },
  { num: 1, pos: 3, danger: false, source: 1, confidence: 61 },
];

/** Names are invariant, like every other capture on the site. */
export const SCOUT_NAMES = ['M. Costa', 'T. Willems', 'S. Dubois', 'R. Faye'] as const;

/* Player stats tab. Figures carry no thousands separator on purpose: a
   grouped number is the one fixture that cannot be locale-invariant. */
export const PLAYER_STAT_TILES = [
  { icon: 'timer', v: '940' },
  { icon: 'target', v: '7' },
  { icon: 'share-2', v: '4' },
  { icon: 'radar', v: '11' },
  { icon: 'square', v: '2' },
  { icon: 'calendar-days', v: '12' },
] as const;

/** Opponent names are invariant; the dates beside them are not. */
export const PLAYER_MATCHES: Array<{
  opp: string;
  us: number;
  them: number;
  home: boolean;
  /** Minutes, goals, assists — his own line for that match. */
  line: [string, string, string];
}> = [
  { opp: 'FC Aurore', us: 2, them: 2, home: false, line: ['90', '1', '0'] },
  { opp: 'AS Verrière', us: 2, them: 0, home: true, line: ['90', '0', '1'] },
  { opp: 'FC Rivaux', us: 1, them: 3, home: false, line: ['62', '0', '0'] },
];

/** Seven days of wellness state, oldest first. Today is the last cell. */
export const PLAYER_WEEK = ['green', 'red', 'green', 'amber', 'red', 'red', 'green'] as const;

/** Fourteen readiness readings, 0-100. The last one is the estimate. */
export const PLAYER_TREND = [72, 64, 78, 45, 70, 81, 58, 66, 74, 52, 69, 77, 61, 65] as const;

/* ── Shape ────────────────────────────────────────────────────── */

interface Row {
  text: string;
  meta: string;
}

export interface CaptureText {
  /** Charge, RPE & GPS hero. */
  load: {
    title: string;
    meta: string;
    stats: Array<{ k: string; v: string }>;
    rows: Row[];
  };
  /** Check-in & Readiness hero. */
  checkin: {
    title: string;
    meta: string;
    cols: [string, string, string, string, string];
    yes: string;
    no: string;
    ready: { green: string; amber: string; red: string; missing: string };
    alert: string;
  };
  /** Tests & évaluations hero. */
  campaign: {
    title: string;
    sub: string;
    unit: string;
    progress: string;
    positions: [string, string, string, string];
    zones: [string, string, string, string];
    note: string;
  };
  /** GPS zones mapped onto named speed blocks. */
  gps: {
    colsTitle: string;
    /** The word before a zone number, e.g. "Zone". */
    zone: string;
    dist: string;
    time: string;
    /** Shown where the device fills no value for that measure. */
    none: string;
    blocks: [string, string, string, string];
  };
  /** Load-unit conversion strip. */
  unit: {
    steps: [{ k: string; v: string }, { k: string; v: string }, { k: string; v: string }];
    fields: [{ k: string; v: string }, { k: string; v: string }];
  };
  /** Measure editor: the fields and the zones a value falls into. */
  measure: {
    title: string;
    fields: Array<{ k: string; v: string }>;
    zonesLabel: string;
    zones: Array<{ name: string; bound: string }>;
  };
  /** The planned week, and the components hanging under Thursday. */
  week: {
    title: string;
    sub: string;
    acwr: { k: string; v: string };
    shape: string;
    days: [string, string, string, string, string, string, string];
    session: string;
    sessionTotal: string;
    parts: [string, string, string];
    attached: string;
    pending: string;
    unit: string;
  };
  /** Live session runner. */
  runner: {
    title: string;
    live: string;
    block: string;
    name: string;
    chrono: string;
    pause: string;
    finish: string;
    rows: Array<{ t: string; m: string }>;
  };
  /** Live match encoder. */
  match: {
    title: string;
    sync: string;
    us: string;
    them: string;
    facts: [string, string, string];
    events: [string, string, string, string];
  };
  /** Exercise library inbox. */
  library: {
    title: string;
    count: string;
    source: string;
    via: string;
    titleKey: string;
    ai: string;
    name: string;
    folderKey: string;
    folder: string;
    tags: [string, string, string];
    file: string;
    publish: string;
    queue: Array<{ t: string; m: string }>;
  };
  /** Strength program: one prescription, a weight per player. */
  program: {
    title: string;
    meta: string;
    lift: string;
    detail: string;
    maxLabel: string;
    modLabel: string;
    untested: string;
    settings: [string, string, string];
  };
  /** Squad list with its status tabs. */
  squad: {
    title: string;
    meta: string;
    tabs: [string, string, string, string];
    positions: [string, string, string, string];
    statuses: [string, string, string, string];
    note: string;
  };
  /** Call-up board and its answers. */
  rsvp: {
    title: string;
    meta: string;
    counts: [string, string, string, string, string];
    positions: [string, string, string, string];
    answers: [string, string, string, string, string];
    nudge: string;
    send: string;
  };
  /** Return-to-play protocol for one injured player. */
  rtp: {
    who: string;
    detail: string;
    status: string;
    progressKey: string;
    steps: [string, string, string, string];
    stepStates: [string, string, string];
    availability: string;
    availabilityNote: string;
  };
  /** Player app home, on a phone. */
  phone: {
    clock: string;
    hello: string;
    team: string;
    wellness: string;
    duration: string;
    fields: [string, string, string];
    send: string;
    rpe: string;
    rpeValue: string;
    workout: string;
    workoutMeta: string;
  };
  /** Selection & form report. */
  report: {
    title: string;
    meta: string;
    cols: [string, string, string, string];
    note: string;
  };
  /** Opponent file: the scouted roster and the brief proposed from it. */
  scout: {
    title: string;
    meta: string;
    cols: [string, string];
    positions: [string, string, string, string];
    sources: [string, string];
    danger: string;
    proposal: string;
    proposalNote: string;
    accept: string;
  };
  /** Percentile scale placing one player's value against their position. */
  scale: {
    who: string;
    ref: string;
    marker: string;
    labels: [string, string, string, string, string];
    delta: string;
  };
  /** Player app, Stats tab: his season figures and his last matches. */
  playerStats: {
    title: string;
    who: string;
    /** Range filters; the third is the one shown selected. */
    periods: [string, string, string];
    /** Tile labels, in `PLAYER_STAT_TILES` order. */
    tiles: [string, string, string, string, string, string];
    matchTitle: string;
    dates: [string, string, string];
    home: string;
    away: string;
    /** Result letters, in `PLAYER_MATCHES` order. */
    results: [string, string, string];
    /** Keys for his own line: minutes, goals, assists. */
    lineKeys: [string, string, string];
    note: string;
  };
  /** Player app, Fitness tab: readiness, streak and the week behind it. */
  playerForm: {
    title: string;
    score: string;
    verdict: string;
    tiles: [{ k: string; v: string }, { k: string; v: string }];
    weekTitle: string;
    weekMeta: string;
    days: [string, string, string, string, string, string, string];
    alert: string;
    trendTitle: string;
    measured: string;
    estimated: string;
  };
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: CaptureText = {
  load: {
    title: 'Charge · semaine 12',
    meta: '18 JOUEURS',
    stats: [
      { k: 'CHARGE 7 J', v: '2 340 UA' },
      { k: 'ACWR', v: '1,08' },
      { k: 'ALERTES', v: '2' },
    ],
    rows: [
      { text: 'Séance mardi — GPS importé · 18 joueurs', meta: '30 s' },
      { text: 'RPE consolidés — moyenne 6,4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1,31, hors zone', meta: 'alerte' },
      { text: 'Charge dans la cible du microcycle', meta: '−2 %' },
    ],
  },
  checkin: {
    title: 'Signaux · mercredi 07:45',
    meta: '16 / 18 CHECK-IN REÇUS',
    cols: ['JOUEUR', 'SOMMEIL', 'FATIGUE', 'DOULEUR', 'READINESS'],
    yes: 'oui',
    no: 'non',
    ready: { green: 'Vert', amber: 'Jaune', red: 'Rouge', missing: 'Manquant' },
    alert: 'L. Moreau — rouge : 4 h de sommeil, douleur signalée. Acquitter avec une note ?',
  },
  campaign: {
    title: 'VMA · campagne du 14 avril',
    sub: 'Test VAMEVAL · rattachée à la séance de 18:00',
    unit: 'km/h',
    progress: 'RÉSULTATS SAISIS',
    positions: ['Milieu', 'Ailier', 'Défenseur', 'Attaquant'],
    zones: ['Excellent', 'Bon', 'Moyen', 'à saisir'],
    note: 'Chaque résultat garde sa note — conditions, ressenti, matériel utilisé.',
  },
  gps: {
    colsTitle: 'VOS COLONNES PAR ZONE',
    zone: 'Zone',
    dist: 'dist.',
    time: 'temps',
    none: '—',
    blocks: ['Aérobie', 'Haute intensité', 'Sprint', 'Volume total'],
  },
  unit: {
    steps: [
      { k: 'SAISIE', v: '60 min à RPE 7' },
      { k: 'EN UA', v: '420 UA' },
      { k: 'AFFICHÉ', v: '3,9 UC' },
    ],
    fields: [
      { k: 'Nom de l’unité', v: 'UC · 16 caractères max' },
      { k: 'Vaut en UA', v: '108 · entre 0,01 et 2 000' },
    ],
  },
  measure: {
    title: 'Nouvelle mesure',
    fields: [
      { k: 'NOM', v: 'Sprint 30 m' },
      { k: 'UNITÉ', v: 's' },
      { k: 'DESCRIPTION', v: 'Départ arrêté, cellules à 30 m' },
    ],
    zonesLabel: 'ZONES',
    zones: [
      { name: 'Excellent', bound: '≤ 4,10' },
      { name: 'Bon', bound: '4,10 – 4,30' },
      { name: 'Moyen', bound: '4,30 – 4,55' },
      { name: 'À travailler', bound: '> 4,55' },
    ],
  },
  week: {
    title: 'Semaine 12 · cycle Compétition 1',
    sub: 'Objectif 3 000 UA · planifié 2 640',
    acwr: { k: 'ACWR PROJETÉ', v: '1,06' },
    shape: 'LA FORME DE LA SEMAINE',
    days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    session: 'Jeudi 18:00 — Séance collective',
    sessionTotal: '340 UA',
    parts: ['VAMEVAL', 'Opposition', 'Prévention'],
    attached: 'rattachée',
    pending: 'en attente',
    unit: 'UA',
  },
  runner: {
    title: 'Séance jeudi · 18:00',
    live: 'EN DIRECT',
    block: 'BLOC 2 / 4 · JEU RÉDUIT',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pause',
    finish: 'Terminer le bloc',
    rows: [
      { t: 'Présents pointés', m: '17 / 20' },
      { t: 'Équipes créées — 2 × 8', m: 'auto' },
      { t: 'Prochain bloc — Vitesse', m: '15 min' },
      { t: 'Hors ligne — 3 actions en attente', m: 'sync' },
    ],
  },
  match: {
    title: 'J14 · vs RC Valbonne',
    sync: 'À SYNCHRONISER',
    us: 'NOUS',
    them: 'ADV.',
    facts: ['Tir cadré', 'Duel gagné', 'Perte balle'],
    events: [
      'But — A. Diallo · chaîne complétée',
      'Entrée — K. Nakamura · sortie T. Mendes',
      'Observation — croquis bloc bas',
      'Carton jaune — S. Petit',
    ],
  },
  library: {
    title: 'Boîte de réception',
    count: '3 CAPTURES À TRIER',
    source: 'tiktok.com · vidéo importée',
    via: 'via WhatsApp',
    titleKey: 'TITRE',
    ai: 'suggéré par l’IA',
    name: 'Rondo 4v2 — sortie sous pression',
    folderKey: 'DOSSIER',
    folder: 'Conservation',
    tags: ['rondo', 'pressing', 'U19'],
    file: 'Classer',
    publish: 'Publier à l’équipe',
    queue: [
      { t: 'Photo — coordination échelle', m: 'hier' },
      { t: 'Schéma — bloc médian 4-4-2', m: 'hier' },
    ],
  },
  program: {
    title: 'Bas du corps · mercredi',
    meta: 'PUBLIÉE · 18 JOUEURS',
    lift: 'Back Squat — 4 × 5 @ 80 % du 1RM',
    detail: 'tempo 3010 · repos 2 min · A1 du superset',
    maxLabel: '1RM',
    modLabel: 'modulé',
    untested: '1RM à tester',
    settings: ['Arrondi barre 2,5 kg', 'Formule Epley', 'kg'],
  },
  squad: {
    title: 'Effectif · Olympique Montverne',
    meta: '22 JOUEURS',
    tabs: ['Actifs', 'Blessés', 'Inactifs', 'À l’essai'],
    positions: ['Milieu', 'Défenseur', 'Attaquant', 'Ailier'],
    statuses: ['Présent', 'Adapté', 'Blessé', 'À l’essai'],
    note: 'Un joueur à l’essai est convoqué comme un actif, mais reste hors des moyennes d’équipe.',
  },
  rsvp: {
    title: 'Match dimanche · 15:00',
    meta: '8 / 10 ONT RÉPONDU',
    counts: ['présents', 'adaptés', 'incertains', 'absents', 'en attente'],
    positions: ['Milieu', 'Défenseur', 'Ailier', 'Gardien'],
    answers: ['Présent', 'Adapté', 'Incertain', 'Absent', 'En attente'],
    nudge: 'Relance ciblée — 2 joueurs restent en attente',
    send: 'Envoyer',
  },
  rtp: {
    who: 'T. Mendes — ischio-jambiers',
    detail: 'Aiguë · sévérité 2 / 5 · J+13',
    status: 'REVALIDATION',
    progressKey: 'PROGRESSION ESTIMÉE · RETOUR J+18',
    steps: [
      'Phase anti-inflammatoire',
      'Renforcement excentrique',
      'Course linéaire progressive',
      'Retour au collectif',
    ],
    stepStates: ['validée', 'en cours', 'à venir'],
    availability: 'Entraînement uniquement',
    availabilityNote: 'hors convocation match',
  },
  phone: {
    clock: '7:42',
    hello: 'Bonjour, Adam',
    team: 'Olympique Montverne',
    wellness: 'Wellness du matin',
    duration: '20 s',
    fields: ['Sommeil', 'Fatigue', 'Courbatures'],
    send: 'Envoyer',
    rpe: 'RPE · séance d’hier',
    rpeValue: '7',
    workout: 'Workout du jour · prévention',
    workoutMeta: '3 exercices · 12 min · vidéos incluses',
  },
  playerStats: {
    title: 'Statistiques',
    who: 'Adam · Milieu',
    periods: ['5 derniers', '10 derniers', 'Cette saison'],
    tiles: [
      'MINUTES JOUÉES',
      'BUTS',
      'PASSES DÉCISIVES',
      'TIRS CADRÉS',
      'CARTONS JAUNES',
      'MATCHS JOUÉS',
    ],
    matchTitle: 'Match par match',
    dates: ['21/06', '28/06', '05/07'],
    home: 'DOM.',
    away: 'EXT.',
    results: ['N', 'V', 'D'],
    lineKeys: ['min', 'buts', 'passes'],
    note: 'Les chiffres viennent de la feuille de match saisie par le staff.',
  },
  playerForm: {
    title: 'Forme',
    score: '65',
    verdict: 'Signal à surveiller',
    tiles: [
      { k: 'SÉRIE CHECK-IN', v: '7 j' },
      { k: 'CHARGE RÉCENTE', v: '0,70' },
    ],
    weekTitle: 'Ta semaine',
    weekMeta: '7 / 7 jours',
    days: ['ME', 'JE', 'VE', 'SA', 'DI', 'LU', 'MA'],
    alert: 'Trois jours dans le rouge. Préviens le staff si ça persiste.',
    trendTitle: 'Readiness · 14 jours',
    measured: 'Mesuré',
    estimated: 'Estimé',
  },
  report: {
    title: 'Sélection / forme · 5 derniers matchs',
    meta: '18 JOUEURS',
    cols: ['JOUEUR', 'MIN', 'NOTE', 'ACWR'],
    note: 'Rapport enregistré — rejoué sur les données du jour. « * » signale un échantillon trop court.',
  },
  scout: {
    title: 'FC Boisval · J-6',
    meta: '3 SESSIONS · 14 NOTES',
    cols: ['EFFECTIF ADVERSE', 'SOURCE'],
    positions: ['Attaquant', 'Meneur', 'Défenseur', 'Gardien'],
    sources: ['observé', 'feuille de match'],
    danger: 'à surveiller',
    proposal: 'Brief tactique — proposition IA',
    proposalNote: 'Bloc médian haut, sorties courtes. Rien n’est appliqué tant que vous n’avez pas tranché.',
    accept: 'Relire',
  },
  scale: {
    who: 'S. Petit · Ailier · VMA',
    ref: 'REPÈRES AILIER · SAISON EN COURS',
    marker: '17,4 km/h',
    labels: ['sous p25', 'p25 → médiane', 'médiane → p75', 'p75 → p90', 'au-delà de p90'],
    delta: '+ 1,2 km/h au-dessus de la médiane des ailiers.',
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: CaptureText = {
  load: {
    title: 'Load · week 12',
    meta: '18 PLAYERS',
    stats: [
      { k: '7-DAY LOAD', v: '2,340 AU' },
      { k: 'ACWR', v: '1.08' },
      { k: 'ALERTS', v: '2' },
    ],
    rows: [
      { text: 'Tuesday session — GPS imported · 18 players', meta: '30 s' },
      { text: 'RPE consolidated — average 6.4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1.31, out of range', meta: 'alert' },
      { text: 'Load on the microcycle target', meta: '−2%' },
    ],
  },
  checkin: {
    title: 'Signals · Wednesday 07:45',
    meta: '16 / 18 CHECK-INS IN',
    cols: ['PLAYER', 'SLEEP', 'FATIGUE', 'PAIN', 'READINESS'],
    yes: 'yes',
    no: 'no',
    ready: { green: 'Green', amber: 'Amber', red: 'Red', missing: 'Missing' },
    alert: 'L. Moreau — red: 4 h of sleep, pain reported. Acknowledge with a note?',
  },
  campaign: {
    title: 'MAS · campaign of 14 April',
    sub: 'VAMEVAL test · attached to the 18:00 session',
    unit: 'km/h',
    progress: 'RESULTS ENTERED',
    positions: ['Midfielder', 'Winger', 'Defender', 'Forward'],
    zones: ['Excellent', 'Good', 'Average', 'to enter'],
    note: 'Every result keeps its note — conditions, how it felt, kit used.',
  },
  gps: {
    colsTitle: 'YOUR COLUMNS BY ZONE',
    zone: 'Zone',
    dist: 'dist.',
    time: 'time',
    none: '—',
    blocks: ['Aerobic', 'High intensity', 'Sprint', 'Total volume'],
  },
  unit: {
    steps: [
      { k: 'ENTERED', v: '60 min at RPE 7' },
      { k: 'IN AU', v: '420 AU' },
      { k: 'SHOWN', v: '3.9 CU' },
    ],
    fields: [
      { k: 'Unit name', v: 'CU · 16 characters max' },
      { k: 'Worth in AU', v: '108 · between 0.01 and 2,000' },
    ],
  },
  measure: {
    title: 'New measure',
    fields: [
      { k: 'NAME', v: '30 m sprint' },
      { k: 'UNIT', v: 's' },
      { k: 'DESCRIPTION', v: 'Standing start, gates at 30 m' },
    ],
    zonesLabel: 'ZONES',
    zones: [
      { name: 'Excellent', bound: '≤ 4.10' },
      { name: 'Good', bound: '4.10 – 4.30' },
      { name: 'Average', bound: '4.30 – 4.55' },
      { name: 'To work on', bound: '> 4.55' },
    ],
  },
  week: {
    title: 'Week 12 · Competition 1 cycle',
    sub: 'Target 3,000 AU · planned 2,640',
    acwr: { k: 'PROJECTED ACWR', v: '1.06' },
    shape: 'THE SHAPE OF THE WEEK',
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    session: 'Thursday 18:00 — Squad session',
    sessionTotal: '340 AU',
    parts: ['VAMEVAL', 'Small-sided games', 'Prevention'],
    attached: 'attached',
    pending: 'pending',
    unit: 'AU',
  },
  runner: {
    title: 'Thursday session · 18:00',
    live: 'LIVE',
    block: 'BLOCK 2 / 4 · SMALL-SIDED',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pause',
    finish: 'End the block',
    rows: [
      { t: 'Attendance taken', m: '17 / 20' },
      { t: 'Teams created — 2 × 8', m: 'auto' },
      { t: 'Next block — Speed', m: '15 min' },
      { t: 'Offline — 3 actions queued', m: 'sync' },
    ],
  },
  match: {
    title: 'MD14 · vs RC Valbonne',
    sync: 'TO SYNC',
    us: 'US',
    them: 'OPP.',
    facts: ['Shot on target', 'Duel won', 'Turnover'],
    events: [
      'Goal — A. Diallo · chain completed',
      'On — K. Nakamura · off T. Mendes',
      'Observation — low block sketch',
      'Yellow card — S. Petit',
    ],
  },
  library: {
    title: 'Inbox',
    count: '3 CAPTURES TO SORT',
    source: 'tiktok.com · video imported',
    via: 'via WhatsApp',
    titleKey: 'TITLE',
    ai: 'suggested by AI',
    name: 'Rondo 4v2 — playing out under pressure',
    folderKey: 'FOLDER',
    folder: 'Possession',
    tags: ['rondo', 'pressing', 'U19'],
    file: 'File it',
    publish: 'Publish to the team',
    queue: [
      { t: 'Photo — ladder coordination', m: 'yesterday' },
      { t: 'Diagram — mid block 4-4-2', m: 'yesterday' },
    ],
  },
  program: {
    title: 'Lower body · Wednesday',
    meta: 'PUBLISHED · 18 PLAYERS',
    lift: 'Back Squat — 4 × 5 @ 80 % of 1RM',
    detail: 'tempo 3010 · rest 2 min · A1 of the superset',
    maxLabel: '1RM',
    modLabel: 'scaled',
    untested: '1RM to test',
    settings: ['Bar rounding 2.5 kg', 'Epley formula', 'kg'],
  },
  squad: {
    title: 'Squad · Olympique Montverne',
    meta: '22 PLAYERS',
    tabs: ['Active', 'Injured', 'Inactive', 'On trial'],
    positions: ['Midfielder', 'Defender', 'Striker', 'Winger'],
    statuses: ['Available', 'Adapted', 'Injured', 'On trial'],
    note: 'A trialist is called up like an active player, but stays out of the team averages.',
  },
  rsvp: {
    title: 'Match Sunday · 15:00',
    meta: '8 / 10 HAVE ANSWERED',
    counts: ['available', 'adapted', 'unsure', 'unavailable', 'pending'],
    positions: ['Midfielder', 'Defender', 'Winger', 'Goalkeeper'],
    answers: ['Available', 'Adapted', 'Unsure', 'Unavailable', 'Pending'],
    nudge: 'Targeted reminder — 2 players still pending',
    send: 'Send',
  },
  rtp: {
    who: 'T. Mendes — hamstring',
    detail: 'Acute · severity 2 / 5 · day 13',
    status: 'REHAB',
    progressKey: 'ESTIMATED PROGRESS · RETURN DAY 18',
    steps: [
      'Anti-inflammatory phase',
      'Eccentric strengthening',
      'Progressive linear running',
      'Return to the group',
    ],
    stepStates: ['done', 'in progress', 'to come'],
    availability: 'Training only',
    availabilityNote: 'not called up for matches',
  },
  phone: {
    clock: '7:42',
    hello: 'Morning, Adam',
    team: 'Olympique Montverne',
    wellness: 'Morning wellness',
    duration: '20 s',
    fields: ['Sleep', 'Fatigue', 'Soreness'],
    send: 'Send',
    rpe: 'RPE · yesterday’s session',
    rpeValue: '7',
    workout: 'Today’s workout · prevention',
    workoutMeta: '3 exercises · 12 min · videos included',
  },
  playerStats: {
    title: 'Statistics',
    who: 'Adam · Midfielder',
    periods: ['Last 5', 'Last 10', 'This season'],
    tiles: [
      'MINUTES PLAYED',
      'GOALS',
      'ASSISTS',
      'SHOTS ON TARGET',
      'YELLOW CARDS',
      'MATCHES PLAYED',
    ],
    matchTitle: 'Match by match',
    dates: ['21 Jun', '28 Jun', '5 Jul'],
    home: 'HOME',
    away: 'AWAY',
    results: ['D', 'W', 'L'],
    lineKeys: ['min', 'goals', 'assists'],
    note: 'The figures come from the match sheet the staff fills in.',
  },
  playerForm: {
    title: 'Fitness',
    score: '65',
    verdict: 'Signal to watch',
    tiles: [
      { k: 'CHECK-IN STREAK', v: '7 d' },
      { k: 'RECENT LOAD', v: '0.70' },
    ],
    weekTitle: 'Your week',
    weekMeta: '7 / 7 days',
    days: ['WE', 'TH', 'FR', 'SA', 'SU', 'MO', 'TU'],
    alert: 'Three days in the red. Tell the staff if it keeps up.',
    trendTitle: 'Readiness · 14 days',
    measured: 'Measured',
    estimated: 'Estimated',
  },
  report: {
    title: 'Selection / form · last 5 matches',
    meta: '18 PLAYERS',
    cols: ['PLAYER', 'MIN', 'RATING', 'ACWR'],
    note: 'Saved report — replayed on today’s data. “*” marks too short a sample.',
  },
  scout: {
    title: 'FC Boisval · MD-6',
    meta: '3 SESSIONS · 14 NOTES',
    cols: ['OPPONENT SQUAD', 'SOURCE'],
    positions: ['Striker', 'Playmaker', 'Defender', 'Goalkeeper'],
    sources: ['observed', 'team sheet'],
    danger: 'danger man',
    proposal: 'Tactical brief — AI proposal',
    proposalNote: 'High mid block, short build-up. Nothing is applied until you decide.',
    accept: 'Review',
  },
  scale: {
    who: 'S. Petit · Winger · MAS',
    ref: 'WINGER BENCHMARKS · CURRENT SEASON',
    marker: '17.4 km/h',
    labels: ['below p25', 'p25 → median', 'median → p75', 'p75 → p90', 'beyond p90'],
    delta: '+ 1.2 km/h above the median for wingers.',
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: CaptureText = {
  load: {
    title: 'Belasting · week 12',
    meta: '18 SPELERS',
    stats: [
      { k: 'BELASTING 7 D', v: '2.340 AE' },
      { k: 'ACWR', v: '1,08' },
      { k: 'MELDINGEN', v: '2' },
    ],
    rows: [
      { text: 'Training dinsdag — gps geïmporteerd · 18 spelers', meta: '30 s' },
      { text: 'RPE samengevoegd — gemiddeld 6,4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1,31, buiten de zone', meta: 'melding' },
      { text: 'Belasting binnen het doel van de microcyclus', meta: '−2 %' },
    ],
  },
  checkin: {
    title: 'Signalen · woensdag 07:45',
    meta: '16 / 18 CHECK-INS BINNEN',
    cols: ['SPELER', 'SLAAP', 'VERMOEIDHEID', 'PIJN', 'READINESS'],
    yes: 'ja',
    no: 'nee',
    ready: { green: 'Groen', amber: 'Oranje', red: 'Rood', missing: 'Ontbreekt' },
    alert: 'L. Moreau — rood: 4 u slaap, pijn gemeld. Bevestigen met een notitie?',
  },
  campaign: {
    title: 'MAS · campagne van 14 april',
    sub: 'VAMEVAL-test · gekoppeld aan de training van 18:00',
    unit: 'km/u',
    progress: 'INGEVOERDE RESULTATEN',
    positions: ['Middenvelder', 'Vleugelspeler', 'Verdediger', 'Aanvaller'],
    zones: ['Uitstekend', 'Goed', 'Gemiddeld', 'in te vullen'],
    note: 'Elk resultaat houdt zijn notitie — omstandigheden, gevoel, gebruikt materiaal.',
  },
  gps: {
    colsTitle: 'JOUW KOLOMMEN PER ZONE',
    zone: 'Zone',
    dist: 'afst.',
    time: 'tijd',
    none: '—',
    blocks: ['Aeroob', 'Hoge intensiteit', 'Sprint', 'Totaal volume'],
  },
  unit: {
    steps: [
      { k: 'INGEVOERD', v: '60 min op RPE 7' },
      { k: 'IN AE', v: '420 AE' },
      { k: 'GETOOND', v: '3,9 EE' },
    ],
    fields: [
      { k: 'Naam van de eenheid', v: 'EE · max. 16 tekens' },
      { k: 'Waard in AE', v: '108 · tussen 0,01 en 2.000' },
    ],
  },
  measure: {
    title: 'Nieuwe meting',
    fields: [
      { k: 'NAAM', v: 'Sprint 30 m' },
      { k: 'EENHEID', v: 's' },
      { k: 'OMSCHRIJVING', v: 'Staande start, poortjes op 30 m' },
    ],
    zonesLabel: 'ZONES',
    zones: [
      { name: 'Uitstekend', bound: '≤ 4,10' },
      { name: 'Goed', bound: '4,10 – 4,30' },
      { name: 'Gemiddeld', bound: '4,30 – 4,55' },
      { name: 'Aan te werken', bound: '> 4,55' },
    ],
  },
  week: {
    title: 'Week 12 · cyclus Competitie 1',
    sub: 'Doel 3.000 AE · gepland 2.640',
    acwr: { k: 'VERWACHTE ACWR', v: '1,06' },
    shape: 'DE VORM VAN DE WEEK',
    days: ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'],
    session: 'Donderdag 18:00 — Groepstraining',
    sessionTotal: '340 AE',
    parts: ['VAMEVAL', 'Partijvormen', 'Preventie'],
    attached: 'gekoppeld',
    pending: 'in wacht',
    unit: 'AE',
  },
  runner: {
    title: 'Training donderdag · 18:00',
    live: 'LIVE',
    block: 'BLOK 2 / 4 · PARTIJVORM',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pauze',
    finish: 'Blok beëindigen',
    rows: [
      { t: 'Aanwezigheden genoteerd', m: '17 / 20' },
      { t: 'Ploegen gemaakt — 2 × 8', m: 'auto' },
      { t: 'Volgend blok — Snelheid', m: '15 min' },
      { t: 'Offline — 3 acties in wacht', m: 'sync' },
    ],
  },
  match: {
    title: 'S14 · tegen RC Valbonne',
    sync: 'TE SYNCEN',
    us: 'WIJ',
    them: 'TEG.',
    facts: ['Schot op doel', 'Duel gewonnen', 'Balverlies'],
    events: [
      'Doelpunt — A. Diallo · keten voltooid',
      'In — K. Nakamura · uit T. Mendes',
      'Observatie — schets laag blok',
      'Gele kaart — S. Petit',
    ],
  },
  library: {
    title: 'Postvak IN',
    count: '3 CAPTURES TE SORTEREN',
    source: 'tiktok.com · video geïmporteerd',
    via: 'via WhatsApp',
    titleKey: 'TITEL',
    ai: 'voorgesteld door AI',
    name: 'Rondo 4v2 — uitvoetballen onder druk',
    folderKey: 'MAP',
    folder: 'Balbezit',
    tags: ['rondo', 'pressing', 'U19'],
    file: 'Opbergen',
    publish: 'Publiceren naar de ploeg',
    queue: [
      { t: 'Foto — coördinatie ladder', m: 'gisteren' },
      { t: 'Schema — middenblok 4-4-2', m: 'gisteren' },
    ],
  },
  program: {
    title: 'Onderlichaam · woensdag',
    meta: 'GEPUBLICEERD · 18 SPELERS',
    lift: 'Back Squat — 4 × 5 @ 80 % van 1RM',
    detail: 'tempo 3010 · rust 2 min · A1 van de superset',
    maxLabel: '1RM',
    modLabel: 'aangepast',
    untested: '1RM te testen',
    settings: ['Afronding stang 2,5 kg', 'Formule Epley', 'kg'],
  },
  squad: {
    title: 'Kern · Olympique Montverne',
    meta: '22 SPELERS',
    tabs: ['Actief', 'Geblesseerd', 'Inactief', 'Op proef'],
    positions: ['Middenvelder', 'Verdediger', 'Aanvaller', 'Flankspeler'],
    statuses: ['Beschikbaar', 'Aangepast', 'Geblesseerd', 'Op proef'],
    note: 'Een speler op proef wordt opgeroepen als een actieve speler, maar blijft buiten de ploeggemiddelden.',
  },
  rsvp: {
    title: 'Wedstrijd zondag · 15:00',
    meta: '8 / 10 HEBBEN GEANTWOORD',
    counts: ['beschikbaar', 'aangepast', 'onzeker', 'afwezig', 'in afwachting'],
    positions: ['Middenvelder', 'Verdediger', 'Flankspeler', 'Doelman'],
    answers: ['Beschikbaar', 'Aangepast', 'Onzeker', 'Afwezig', 'In afwachting'],
    nudge: 'Gerichte herinnering — 2 spelers blijven in afwachting',
    send: 'Versturen',
  },
  rtp: {
    who: 'T. Mendes — hamstring',
    detail: 'Acuut · ernst 2 / 5 · dag 13',
    status: 'REVALIDATIE',
    progressKey: 'GESCHATTE VOORTGANG · TERUGKEER DAG 18',
    steps: [
      'Ontstekingsremmende fase',
      'Excentrische versterking',
      'Progressieve lineaire loop',
      'Terugkeer naar de groep',
    ],
    stepStates: ['afgerond', 'bezig', 'te komen'],
    availability: 'Enkel training',
    availabilityNote: 'niet opgeroepen voor wedstrijden',
  },
  phone: {
    clock: '7:42',
    hello: 'Goeiemorgen, Adam',
    team: 'Olympique Montverne',
    wellness: 'Wellness van de ochtend',
    duration: '20 s',
    fields: ['Slaap', 'Vermoeidheid', 'Spierpijn'],
    send: 'Versturen',
    rpe: 'RPE · training van gisteren',
    rpeValue: '7',
    workout: 'Workout van vandaag · preventie',
    workoutMeta: '3 oefeningen · 12 min · video’s inbegrepen',
  },
  playerStats: {
    title: 'Statistieken',
    who: 'Adam · Middenvelder',
    periods: ['Laatste 5', 'Laatste 10', 'Dit seizoen'],
    tiles: [
      'GESPEELDE MINUTEN',
      'DOELPUNTEN',
      'ASSISTS',
      'SCHOTEN OP DOEL',
      'GELE KAARTEN',
      'GESPEELDE WEDSTRIJDEN',
    ],
    matchTitle: 'Wedstrijd per wedstrijd',
    dates: ['21/06', '28/06', '05/07'],
    home: 'THUIS',
    away: 'UIT',
    results: ['G', 'W', 'V'],
    lineKeys: ['min', 'goals', 'assists'],
    note: 'De cijfers komen van het wedstrijdblad dat de staf invult.',
  },
  playerForm: {
    title: 'Conditie',
    score: '65',
    verdict: 'Signaal om op te volgen',
    tiles: [
      { k: 'CHECK-INREEKS', v: '7 d' },
      { k: 'RECENTE BELASTING', v: '0,70' },
    ],
    weekTitle: 'Jouw week',
    weekMeta: '7 / 7 dagen',
    days: ['WO', 'DO', 'VR', 'ZA', 'ZO', 'MA', 'DI'],
    alert: 'Drie dagen in het rood. Verwittig de staf als dit aanhoudt.',
    trendTitle: 'Readiness · 14 dagen',
    measured: 'Gemeten',
    estimated: 'Geschat',
  },
  report: {
    title: 'Selectie / vorm · laatste 5 wedstrijden',
    meta: '18 SPELERS',
    cols: ['SPELER', 'MIN', 'SCORE', 'ACWR'],
    note: 'Bewaard rapport — opnieuw gedraaid op de data van vandaag. “*” markeert een te kleine steekproef.',
  },
  scout: {
    title: 'FC Boisval · W-6',
    meta: '3 SESSIES · 14 NOTITIES',
    cols: ['KERN TEGENSTANDER', 'BRON'],
    positions: ['Aanvaller', 'Spelmaker', 'Verdediger', 'Doelman'],
    sources: ['geobserveerd', 'wedstrijdblad'],
    danger: 'in de gaten houden',
    proposal: 'Tactische briefing — AI-voorstel',
    proposalNote: 'Hoog middenblok, korte opbouw. Er wordt niets toegepast tot jij beslist.',
    accept: 'Nalezen',
  },
  scale: {
    who: 'S. Petit · Vleugelspeler · MAS',
    ref: 'IJKPUNTEN VLEUGELSPELER · HUIDIG SEIZOEN',
    marker: '17,4 km/u',
    labels: ['onder p25', 'p25 → mediaan', 'mediaan → p75', 'p75 → p90', 'boven p90'],
    delta: '+ 1,2 km/u boven de mediaan van de vleugelspelers.',
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: CaptureText = {
  load: {
    title: 'Belastung · Woche 12',
    meta: '18 SPIELER',
    stats: [
      { k: 'BELASTUNG 7 T', v: '2.340 AE' },
      { k: 'ACWR', v: '1,08' },
      { k: 'WARNUNGEN', v: '2' },
    ],
    rows: [
      { text: 'Einheit Dienstag — GPS importiert · 18 Spieler', meta: '30 s' },
      { text: 'RPE zusammengeführt — Mittel 6,4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1,31, außerhalb der Zone', meta: 'Warnung' },
      { text: 'Belastung im Ziel des Mikrozyklus', meta: '−2 %' },
    ],
  },
  checkin: {
    title: 'Signale · Mittwoch 07:45',
    meta: '16 / 18 CHECK-INS EINGEGANGEN',
    cols: ['SPIELER', 'SCHLAF', 'ERMÜDUNG', 'SCHMERZ', 'READINESS'],
    yes: 'ja',
    no: 'nein',
    ready: { green: 'Grün', amber: 'Gelb', red: 'Rot', missing: 'Fehlt' },
    alert: 'L. Moreau — rot: 4 Std. Schlaf, Schmerz gemeldet. Mit Notiz quittieren?',
  },
  campaign: {
    title: 'MAS · Kampagne vom 14. April',
    sub: 'VAMEVAL-Test · an die Einheit um 18:00 gekoppelt',
    unit: 'km/h',
    progress: 'ERFASSTE ERGEBNISSE',
    positions: ['Mittelfeld', 'Flügel', 'Abwehr', 'Angriff'],
    zones: ['Ausgezeichnet', 'Gut', 'Mittel', 'zu erfassen'],
    note: 'Jedes Ergebnis behält seine Notiz — Bedingungen, Empfinden, verwendetes Material.',
  },
  gps: {
    colsTitle: 'IHRE SPALTEN JE ZONE',
    zone: 'Zone',
    dist: 'Dist.',
    time: 'Zeit',
    none: '—',
    blocks: ['Aerob', 'Hohe Intensität', 'Sprint', 'Gesamtvolumen'],
  },
  unit: {
    steps: [
      { k: 'EINGABE', v: '60 min bei RPE 7' },
      { k: 'IN AE', v: '420 AE' },
      { k: 'ANGEZEIGT', v: '3,9 BE' },
    ],
    fields: [
      { k: 'Name der Einheit', v: 'BE · max. 16 Zeichen' },
      { k: 'Wert in AE', v: '108 · zwischen 0,01 und 2.000' },
    ],
  },
  measure: {
    title: 'Neue Messgröße',
    fields: [
      { k: 'NAME', v: 'Sprint 30 m' },
      { k: 'EINHEIT', v: 's' },
      { k: 'BESCHREIBUNG', v: 'Stehender Start, Lichtschranken bei 30 m' },
    ],
    zonesLabel: 'ZONEN',
    zones: [
      { name: 'Ausgezeichnet', bound: '≤ 4,10' },
      { name: 'Gut', bound: '4,10 – 4,30' },
      { name: 'Mittel', bound: '4,30 – 4,55' },
      { name: 'Zu verbessern', bound: '> 4,55' },
    ],
  },
  week: {
    title: 'Woche 12 · Zyklus Wettkampf 1',
    sub: 'Ziel 3.000 AE · geplant 2.640',
    acwr: { k: 'PROGNOSE ACWR', v: '1,06' },
    shape: 'DIE FORM DER WOCHE',
    days: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    session: 'Donnerstag 18:00 — Mannschaftseinheit',
    sessionTotal: '340 AE',
    parts: ['VAMEVAL', 'Spielformen', 'Prävention'],
    attached: 'zugeordnet',
    pending: 'offen',
    unit: 'AE',
  },
  runner: {
    title: 'Einheit Donnerstag · 18:00',
    live: 'LIVE',
    block: 'BLOCK 2 / 4 · SPIELFORM',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pause',
    finish: 'Block beenden',
    rows: [
      { t: 'Anwesenheiten erfasst', m: '17 / 20' },
      { t: 'Teams gebildet — 2 × 8', m: 'auto' },
      { t: 'Nächster Block — Schnelligkeit', m: '15 Min' },
      { t: 'Offline — 3 Aktionen in Warteschlange', m: 'sync' },
    ],
  },
  match: {
    title: 'ST14 · gegen RC Valbonne',
    sync: 'ZU SYNCHRONISIEREN',
    us: 'WIR',
    them: 'GEG.',
    facts: ['Schuss aufs Tor', 'Zweikampf gewonnen', 'Ballverlust'],
    events: [
      'Tor — A. Diallo · Kette vollständig',
      'Ein — K. Nakamura · aus T. Mendes',
      'Beobachtung — Skizze tiefer Block',
      'Gelbe Karte — S. Petit',
    ],
  },
  library: {
    title: 'Posteingang',
    count: '3 AUFNAHMEN ZU SORTIEREN',
    source: 'tiktok.com · Video importiert',
    via: 'über WhatsApp',
    titleKey: 'TITEL',
    ai: 'von der KI vorgeschlagen',
    name: 'Rondo 4v2 — Spielaufbau unter Druck',
    folderKey: 'ORDNER',
    folder: 'Ballbesitz',
    tags: ['Rondo', 'Pressing', 'U19'],
    file: 'Ablegen',
    publish: 'An die Mannschaft veröffentlichen',
    queue: [
      { t: 'Foto — Koordinationsleiter', m: 'gestern' },
      { t: 'Zeichnung — Mittelfeldblock 4-4-2', m: 'gestern' },
    ],
  },
  program: {
    title: 'Unterkörper · Mittwoch',
    meta: 'VERÖFFENTLICHT · 18 SPIELER',
    lift: 'Back Squat — 4 × 5 @ 80 % des 1RM',
    detail: 'Tempo 3010 · Pause 2 Min · A1 des Supersatzes',
    maxLabel: '1RM',
    modLabel: 'angepasst',
    untested: '1RM zu testen',
    settings: ['Rundung Hantel 2,5 kg', 'Formel Epley', 'kg'],
  },
  squad: {
    title: 'Kader · Olympique Montverne',
    meta: '22 SPIELER',
    tabs: ['Aktiv', 'Verletzt', 'Inaktiv', 'Im Probetraining'],
    positions: ['Mittelfeld', 'Abwehr', 'Sturm', 'Flügel'],
    statuses: ['Verfügbar', 'Angepasst', 'Verletzt', 'Probetraining'],
    note: 'Ein Spieler im Probetraining wird wie ein aktiver aufgeboten, bleibt aber außerhalb der Mannschaftsmittel.',
  },
  rsvp: {
    title: 'Spiel Sonntag · 15:00',
    meta: '8 / 10 HABEN GEANTWORTET',
    counts: ['verfügbar', 'angepasst', 'unsicher', 'abwesend', 'ausstehend'],
    positions: ['Mittelfeld', 'Abwehr', 'Flügel', 'Torhüter'],
    answers: ['Verfügbar', 'Angepasst', 'Unsicher', 'Abwesend', 'Ausstehend'],
    nudge: 'Gezielte Erinnerung — 2 Spieler stehen noch aus',
    send: 'Senden',
  },
  rtp: {
    who: 'T. Mendes — Oberschenkelrückseite',
    detail: 'Akut · Schweregrad 2 / 5 · Tag 13',
    status: 'REHA',
    progressKey: 'GESCHÄTZTER FORTSCHRITT · RÜCKKEHR TAG 18',
    steps: [
      'Entzündungshemmende Phase',
      'Exzentrisches Krafttraining',
      'Progressiver Geradeauslauf',
      'Rückkehr in die Mannschaft',
    ],
    stepStates: ['abgeschlossen', 'laufend', 'ausstehend'],
    availability: 'Nur Training',
    availabilityNote: 'kein Spielaufgebot',
  },
  phone: {
    clock: '7:42',
    hello: 'Guten Morgen, Adam',
    team: 'Olympique Montverne',
    wellness: 'Wellness am Morgen',
    duration: '20 s',
    fields: ['Schlaf', 'Ermüdung', 'Muskelkater'],
    send: 'Senden',
    rpe: 'RPE · Einheit von gestern',
    rpeValue: '7',
    workout: 'Workout des Tages · Prävention',
    workoutMeta: '3 Übungen · 12 Min · Videos inklusive',
  },
  playerStats: {
    title: 'Statistiken',
    who: 'Adam · Mittelfeld',
    periods: ['Letzte 5', 'Letzte 10', 'Diese Saison'],
    tiles: [
      'GESPIELTE MINUTEN',
      'TORE',
      'VORLAGEN',
      'SCHÜSSE AUFS TOR',
      'GELBE KARTEN',
      'SPIELE',
    ],
    matchTitle: 'Spiel für Spiel',
    dates: ['21.06.', '28.06.', '05.07.'],
    home: 'HEIM',
    away: 'AUSW.',
    results: ['U', 'S', 'N'],
    lineKeys: ['Min', 'Tore', 'Vorl.'],
    note: 'Die Zahlen stammen aus dem Spielbericht, den das Staff einträgt.',
  },
  playerForm: {
    title: 'Form',
    score: '65',
    verdict: 'Signal im Blick behalten',
    tiles: [
      { k: 'CHECK-IN-SERIE', v: '7 T' },
      { k: 'AKTUELLE BELASTUNG', v: '0,70' },
    ],
    weekTitle: 'Deine Woche',
    weekMeta: '7 / 7 Tage',
    days: ['MI', 'DO', 'FR', 'SA', 'SO', 'MO', 'DI'],
    alert: 'Drei Tage im roten Bereich. Sag dem Staff Bescheid, wenn es anhält.',
    trendTitle: 'Readiness · 14 Tage',
    measured: 'Gemessen',
    estimated: 'Geschätzt',
  },
  report: {
    title: 'Auswahl / Form · letzte 5 Spiele',
    meta: '18 SPIELER',
    cols: ['SPIELER', 'MIN', 'NOTE', 'ACWR'],
    note: 'Gespeicherter Bericht — auf den heutigen Daten neu gerechnet. „*“ markiert eine zu kleine Stichprobe.',
  },
  scout: {
    title: 'FC Boisval · ST-6',
    meta: '3 SITZUNGEN · 14 NOTIZEN',
    cols: ['KADER DES GEGNERS', 'QUELLE'],
    positions: ['Stürmer', 'Spielmacher', 'Verteidiger', 'Torhüter'],
    sources: ['beobachtet', 'Spielbericht'],
    danger: 'im Auge behalten',
    proposal: 'Taktisches Briefing — KI-Vorschlag',
    proposalNote: 'Hoher Mittelfeldblock, kurzer Spielaufbau. Nichts wird angewandt, bevor Sie entscheiden.',
    accept: 'Prüfen',
  },
  scale: {
    who: 'S. Petit · Flügel · MAS',
    ref: 'REFERENZWERTE FLÜGEL · LAUFENDE SAISON',
    marker: '17,4 km/h',
    labels: ['unter p25', 'p25 → Median', 'Median → p75', 'p75 → p90', 'über p90'],
    delta: '+ 1,2 km/h über dem Median der Flügelspieler.',
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: CaptureText = {
  load: {
    title: 'Carga · semana 12',
    meta: '18 JOGADORES',
    stats: [
      { k: 'CARGA 7 D', v: '2 340 UA' },
      { k: 'ACWR', v: '1,08' },
      { k: 'ALERTAS', v: '2' },
    ],
    rows: [
      { text: 'Treino de terça — GPS importado · 18 jogadores', meta: '30 s' },
      { text: 'RPE consolidados — média 6,4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1,31, fora de zona', meta: 'alerta' },
      { text: 'Carga dentro do alvo do microciclo', meta: '−2 %' },
    ],
  },
  checkin: {
    title: 'Sinais · quarta-feira 07:45',
    meta: '16 / 18 CHECK-INS RECEBIDOS',
    cols: ['JOGADOR', 'SONO', 'FADIGA', 'DOR', 'READINESS'],
    yes: 'sim',
    no: 'não',
    ready: { green: 'Verde', amber: 'Amarelo', red: 'Vermelho', missing: 'Em falta' },
    alert: 'L. Moreau — vermelho: 4 h de sono, dor assinalada. Confirmar com uma nota?',
  },
  campaign: {
    title: 'VAM · campanha de 14 de abril',
    sub: 'Teste VAMEVAL · ligado ao treino das 18:00',
    unit: 'km/h',
    progress: 'RESULTADOS INSERIDOS',
    positions: ['Médio', 'Extremo', 'Defesa', 'Avançado'],
    zones: ['Excelente', 'Bom', 'Médio', 'a inserir'],
    note: 'Cada resultado guarda a sua nota — condições, sensação, material usado.',
  },
  gps: {
    colsTitle: 'AS SUAS COLUNAS POR ZONA',
    zone: 'Zona',
    dist: 'dist.',
    time: 'tempo',
    none: '—',
    blocks: ['Aeróbio', 'Alta intensidade', 'Sprint', 'Volume total'],
  },
  unit: {
    steps: [
      { k: 'INTRODUZIDO', v: '60 min a RPE 7' },
      { k: 'EM UA', v: '420 UA' },
      { k: 'MOSTRADO', v: '3,9 UC' },
    ],
    fields: [
      { k: 'Nome da unidade', v: 'UC · 16 caracteres no máx.' },
      { k: 'Vale em UA', v: '108 · entre 0,01 e 2 000' },
    ],
  },
  measure: {
    title: 'Nova medida',
    fields: [
      { k: 'NOME', v: 'Sprint 30 m' },
      { k: 'UNIDADE', v: 's' },
      { k: 'DESCRIÇÃO', v: 'Partida parada, células aos 30 m' },
    ],
    zonesLabel: 'ZONAS',
    zones: [
      { name: 'Excelente', bound: '≤ 4,10' },
      { name: 'Bom', bound: '4,10 – 4,30' },
      { name: 'Médio', bound: '4,30 – 4,55' },
      { name: 'A trabalhar', bound: '> 4,55' },
    ],
  },
  week: {
    title: 'Semana 12 · ciclo Competição 1',
    sub: 'Objetivo 3 000 UA · planeado 2 640',
    acwr: { k: 'ACWR PREVISTO', v: '1,06' },
    shape: 'A FORMA DA SEMANA',
    days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    session: 'Quinta-feira 18:00 — Treino coletivo',
    sessionTotal: '340 UA',
    parts: ['VAMEVAL', 'Jogos reduzidos', 'Prevenção'],
    attached: 'associada',
    pending: 'em espera',
    unit: 'UA',
  },
  runner: {
    title: 'Treino de quinta · 18:00',
    live: 'EM DIRETO',
    block: 'BLOCO 2 / 4 · JOGO REDUZIDO',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pausa',
    finish: 'Terminar o bloco',
    rows: [
      { t: 'Presenças marcadas', m: '17 / 20' },
      { t: 'Equipas criadas — 2 × 8', m: 'auto' },
      { t: 'Próximo bloco — Velocidade', m: '15 min' },
      { t: 'Offline — 3 ações em espera', m: 'sync' },
    ],
  },
  match: {
    title: 'J14 · vs RC Valbonne',
    sync: 'POR SINCRONIZAR',
    us: 'NÓS',
    them: 'ADV.',
    facts: ['Remate enquadrado', 'Duelo ganho', 'Perda de bola'],
    events: [
      'Golo — A. Diallo · cadeia completa',
      'Entrada — K. Nakamura · saída T. Mendes',
      'Observação — esboço bloco baixo',
      'Cartão amarelo — S. Petit',
    ],
  },
  library: {
    title: 'Caixa de entrada',
    count: '3 CAPTURAS POR TRIAR',
    source: 'tiktok.com · vídeo importado',
    via: 'via WhatsApp',
    titleKey: 'TÍTULO',
    ai: 'sugerido pela IA',
    name: 'Rondo 4v2 — saída sob pressão',
    folderKey: 'PASTA',
    folder: 'Posse de bola',
    tags: ['rondo', 'pressing', 'Sub-19'],
    file: 'Arquivar',
    publish: 'Publicar para a equipa',
    queue: [
      { t: 'Foto — coordenação escada', m: 'ontem' },
      { t: 'Esquema — bloco médio 4-4-2', m: 'ontem' },
    ],
  },
  program: {
    title: 'Membros inferiores · quarta',
    meta: 'PUBLICADA · 18 JOGADORES',
    lift: 'Back Squat — 4 × 5 @ 80 % da 1RM',
    detail: 'tempo 3010 · descanso 2 min · A1 do superset',
    maxLabel: '1RM',
    modLabel: 'modulado',
    untested: '1RM por testar',
    settings: ['Arredondamento barra 2,5 kg', 'Fórmula Epley', 'kg'],
  },
  squad: {
    title: 'Plantel · Olympique Montverne',
    meta: '22 JOGADORES',
    tabs: ['Ativos', 'Lesionados', 'Inativos', 'À experiência'],
    positions: ['Médio', 'Defesa', 'Avançado', 'Extremo'],
    statuses: ['Disponível', 'Adaptado', 'Lesionado', 'À experiência'],
    note: 'Um jogador à experiência é convocado como um ativo, mas fica fora das médias da equipa.',
  },
  rsvp: {
    title: 'Jogo domingo · 15:00',
    meta: '8 / 10 RESPONDERAM',
    counts: ['disponíveis', 'adaptados', 'incertos', 'ausentes', 'em espera'],
    positions: ['Médio', 'Defesa', 'Extremo', 'Guarda-redes'],
    answers: ['Disponível', 'Adaptado', 'Incerto', 'Ausente', 'Em espera'],
    nudge: 'Lembrete dirigido — faltam 2 jogadores',
    send: 'Enviar',
  },
  rtp: {
    who: 'T. Mendes — isquiotibiais',
    detail: 'Aguda · gravidade 2 / 5 · dia 13',
    status: 'REABILITAÇÃO',
    progressKey: 'PROGRESSO ESTIMADO · REGRESSO DIA 18',
    steps: [
      'Fase anti-inflamatória',
      'Reforço excêntrico',
      'Corrida linear progressiva',
      'Regresso ao coletivo',
    ],
    stepStates: ['validada', 'em curso', 'a seguir'],
    availability: 'Apenas treino',
    availabilityNote: 'sem convocatória para jogos',
  },
  phone: {
    clock: '7:42',
    hello: 'Bom dia, Adam',
    team: 'Olympique Montverne',
    wellness: 'Wellness da manhã',
    duration: '20 s',
    fields: ['Sono', 'Fadiga', 'Dores musculares'],
    send: 'Enviar',
    rpe: 'RPE · treino de ontem',
    rpeValue: '7',
    workout: 'Workout do dia · prevenção',
    workoutMeta: '3 exercícios · 12 min · vídeos incluídos',
  },
  playerStats: {
    title: 'Estatísticas',
    who: 'Adam · Médio',
    periods: ['Últimos 5', 'Últimos 10', 'Esta época'],
    tiles: [
      'MINUTOS JOGADOS',
      'GOLOS',
      'ASSISTÊNCIAS',
      'REMATES À BALIZA',
      'CARTÕES AMARELOS',
      'JOGOS',
    ],
    matchTitle: 'Jogo a jogo',
    dates: ['21/06', '28/06', '05/07'],
    home: 'CASA',
    away: 'FORA',
    results: ['E', 'V', 'D'],
    lineKeys: ['min', 'golos', 'assist.'],
    note: 'Os números vêm da ficha de jogo preenchida pelo staff.',
  },
  playerForm: {
    title: 'Forma',
    score: '65',
    verdict: 'Sinal a vigiar',
    tiles: [
      { k: 'SÉRIE DE CHECK-IN', v: '7 d' },
      { k: 'CARGA RECENTE', v: '0,70' },
    ],
    weekTitle: 'A tua semana',
    weekMeta: '7 / 7 dias',
    days: ['QUA', 'QUI', 'SEX', 'SÁB', 'DOM', 'SEG', 'TER'],
    alert: 'Três dias no vermelho. Avisa o staff se persistir.',
    trendTitle: 'Readiness · 14 dias',
    measured: 'Medido',
    estimated: 'Estimado',
  },
  report: {
    title: 'Seleção / forma · últimos 5 jogos',
    meta: '18 JOGADORES',
    cols: ['JOGADOR', 'MIN', 'NOTA', 'ACWR'],
    note: 'Relatório guardado — recalculado sobre os dados de hoje. «*» assinala uma amostra curta.',
  },
  scout: {
    title: 'FC Boisval · J-6',
    meta: '3 SESSÕES · 14 NOTAS',
    cols: ['PLANTEL ADVERSÁRIO', 'ORIGEM'],
    positions: ['Avançado', 'Construtor', 'Defesa', 'Guarda-redes'],
    sources: ['observado', 'ficha de jogo'],
    danger: 'a vigiar',
    proposal: 'Briefing tático — proposta da IA',
    proposalNote: 'Bloco médio alto, saídas curtas. Nada é aplicado enquanto não decidir.',
    accept: 'Rever',
  },
  scale: {
    who: 'S. Petit · Extremo · VAM',
    ref: 'REFERÊNCIAS EXTREMO · ÉPOCA ATUAL',
    marker: '17,4 km/h',
    labels: ['abaixo de p25', 'p25 → mediana', 'mediana → p75', 'p75 → p90', 'acima de p90'],
    delta: '+ 1,2 km/h acima da mediana dos extremos.',
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: CaptureText = {
  load: {
    title: 'Carga · semana 12',
    meta: '18 JUGADORES',
    stats: [
      { k: 'CARGA 7 D', v: '2 340 UA' },
      { k: 'ACWR', v: '1,08' },
      { k: 'ALERTAS', v: '2' },
    ],
    rows: [
      { text: 'Sesión del martes — GPS importado · 18 jugadores', meta: '30 s' },
      { text: 'RPE consolidados — media 6,4', meta: '20:45' },
      { text: 'L. Moreau — ACWR 1,31, fuera de zona', meta: 'alerta' },
      { text: 'Carga dentro del objetivo del microciclo', meta: '−2 %' },
    ],
  },
  checkin: {
    title: 'Señales · miércoles 07:45',
    meta: '16 / 18 CHECK-INS RECIBIDOS',
    cols: ['JUGADOR', 'SUEÑO', 'FATIGA', 'DOLOR', 'READINESS'],
    yes: 'sí',
    no: 'no',
    ready: { green: 'Verde', amber: 'Ámbar', red: 'Rojo', missing: 'Ausente' },
    alert: 'L. Moreau — rojo: 4 h de sueño, dolor señalado. ¿Marcar con una nota?',
  },
  campaign: {
    title: 'VAM · campaña del 14 de abril',
    sub: 'Test VAMEVAL · vinculado a la sesión de las 18:00',
    unit: 'km/h',
    progress: 'RESULTADOS INTRODUCIDOS',
    positions: ['Centrocampista', 'Extremo', 'Defensa', 'Delantero'],
    zones: ['Excelente', 'Bueno', 'Medio', 'por introducir'],
    note: 'Cada resultado conserva su nota — condiciones, sensación, material utilizado.',
  },
  gps: {
    colsTitle: 'TUS COLUMNAS POR ZONA',
    zone: 'Zona',
    dist: 'dist.',
    time: 'tiempo',
    none: '—',
    blocks: ['Aeróbico', 'Alta intensidad', 'Sprint', 'Volumen total'],
  },
  unit: {
    steps: [
      { k: 'INTRODUCIDO', v: '60 min a RPE 7' },
      { k: 'EN UA', v: '420 UA' },
      { k: 'MOSTRADO', v: '3,9 UC' },
    ],
    fields: [
      { k: 'Nombre de la unidad', v: 'UC · 16 caracteres máx.' },
      { k: 'Vale en UA', v: '108 · entre 0,01 y 2 000' },
    ],
  },
  measure: {
    title: 'Nueva medida',
    fields: [
      { k: 'NOMBRE', v: 'Sprint 30 m' },
      { k: 'UNIDAD', v: 's' },
      { k: 'DESCRIPCIÓN', v: 'Salida parada, células a 30 m' },
    ],
    zonesLabel: 'ZONAS',
    zones: [
      { name: 'Excelente', bound: '≤ 4,10' },
      { name: 'Bueno', bound: '4,10 – 4,30' },
      { name: 'Medio', bound: '4,30 – 4,55' },
      { name: 'A trabajar', bound: '> 4,55' },
    ],
  },
  week: {
    title: 'Semana 12 · ciclo Competición 1',
    sub: 'Objetivo 3.000 UA · planificado 2.640',
    acwr: { k: 'ACWR PREVISTO', v: '1,06' },
    shape: 'LA FORMA DE LA SEMANA',
    days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    session: 'Jueves 18:00 — Sesión colectiva',
    sessionTotal: '340 UA',
    parts: ['VAMEVAL', 'Juegos reducidos', 'Prevención'],
    attached: 'asociada',
    pending: 'en espera',
    unit: 'UA',
  },
  runner: {
    title: 'Sesión del jueves · 18:00',
    live: 'EN DIRECTO',
    block: 'BLOQUE 2 / 4 · JUEGO REDUCIDO',
    name: 'Pressing 8v8',
    chrono: '12:34',
    pause: 'Pausa',
    finish: 'Terminar el bloque',
    rows: [
      { t: 'Asistencias marcadas', m: '17 / 20' },
      { t: 'Equipos creados — 2 × 8', m: 'auto' },
      { t: 'Siguiente bloque — Velocidad', m: '15 min' },
      { t: 'Sin conexión — 3 acciones en espera', m: 'sync' },
    ],
  },
  match: {
    title: 'J14 · vs RC Valbonne',
    sync: 'POR SINCRONIZAR',
    us: 'NOS.',
    them: 'RIV.',
    facts: ['Tiro a puerta', 'Duelo ganado', 'Pérdida de balón'],
    events: [
      'Gol — A. Diallo · cadena completada',
      'Entra — K. Nakamura · sale T. Mendes',
      'Observación — croquis bloque bajo',
      'Tarjeta amarilla — S. Petit',
    ],
  },
  library: {
    title: 'Bandeja de entrada',
    count: '3 CAPTURAS POR CLASIFICAR',
    source: 'tiktok.com · vídeo importado',
    via: 'vía WhatsApp',
    titleKey: 'TÍTULO',
    ai: 'sugerido por la IA',
    name: 'Rondo 4v2 — salida bajo presión',
    folderKey: 'CARPETA',
    folder: 'Posesión',
    tags: ['rondo', 'pressing', 'Sub-19'],
    file: 'Archivar',
    publish: 'Publicar al equipo',
    queue: [
      { t: 'Foto — coordinación escalera', m: 'ayer' },
      { t: 'Esquema — bloque medio 4-4-2', m: 'ayer' },
    ],
  },
  program: {
    title: 'Tren inferior · miércoles',
    meta: 'PUBLICADA · 18 JUGADORES',
    lift: 'Back Squat — 4 × 5 @ 80 % del 1RM',
    detail: 'tempo 3010 · descanso 2 min · A1 del superset',
    maxLabel: '1RM',
    modLabel: 'modulado',
    untested: '1RM por probar',
    settings: ['Redondeo barra 2,5 kg', 'Fórmula Epley', 'kg'],
  },
  squad: {
    title: 'Plantilla · Olympique Montverne',
    meta: '22 JUGADORES',
    tabs: ['Activos', 'Lesionados', 'Inactivos', 'A prueba'],
    positions: ['Centrocampista', 'Defensa', 'Delantero', 'Extremo'],
    statuses: ['Disponible', 'Adaptado', 'Lesionado', 'A prueba'],
    note: 'Un jugador a prueba se convoca como un activo, pero queda fuera de las medias del equipo.',
  },
  rsvp: {
    title: 'Partido domingo · 15:00',
    meta: '8 / 10 HAN RESPONDIDO',
    counts: ['disponibles', 'adaptados', 'inseguros', 'ausentes', 'en espera'],
    positions: ['Centrocampista', 'Defensa', 'Extremo', 'Portero'],
    answers: ['Disponible', 'Adaptado', 'Inseguro', 'Ausente', 'En espera'],
    nudge: 'Recordatorio dirigido — quedan 2 jugadores en espera',
    send: 'Enviar',
  },
  rtp: {
    who: 'T. Mendes — isquiotibiales',
    detail: 'Aguda · gravedad 2 / 5 · día 13',
    status: 'READAPTACIÓN',
    progressKey: 'PROGRESO ESTIMADO · REGRESO DÍA 18',
    steps: [
      'Fase antiinflamatoria',
      'Refuerzo excéntrico',
      'Carrera lineal progresiva',
      'Vuelta al grupo',
    ],
    stepStates: ['validada', 'en curso', 'por venir'],
    availability: 'Solo entrenamiento',
    availabilityNote: 'sin convocatoria de partido',
  },
  phone: {
    clock: '7:42',
    hello: 'Buenos días, Adam',
    team: 'Olympique Montverne',
    wellness: 'Wellness de la mañana',
    duration: '20 s',
    fields: ['Sueño', 'Fatiga', 'Agujetas'],
    send: 'Enviar',
    rpe: 'RPE · sesión de ayer',
    rpeValue: '7',
    workout: 'Workout del día · prevención',
    workoutMeta: '3 ejercicios · 12 min · vídeos incluidos',
  },
  playerStats: {
    title: 'Estadísticas',
    who: 'Adam · Centrocampista',
    periods: ['Últimos 5', 'Últimos 10', 'Esta temporada'],
    tiles: [
      'MINUTOS JUGADOS',
      'GOLES',
      'ASISTENCIAS',
      'TIROS A PUERTA',
      'TARJETAS AMARILLAS',
      'PARTIDOS',
    ],
    matchTitle: 'Partido a partido',
    dates: ['21/06', '28/06', '05/07'],
    home: 'CASA',
    away: 'FUERA',
    results: ['E', 'V', 'D'],
    lineKeys: ['min', 'goles', 'asist.'],
    note: 'Las cifras vienen del acta del partido que rellena el staff.',
  },
  playerForm: {
    title: 'Forma',
    score: '65',
    verdict: 'Señal a vigilar',
    tiles: [
      { k: 'RACHA DE CHECK-IN', v: '7 d' },
      { k: 'CARGA RECIENTE', v: '0,70' },
    ],
    weekTitle: 'Tu semana',
    weekMeta: '7 / 7 días',
    days: ['MI', 'JU', 'VI', 'SÁ', 'DO', 'LU', 'MA'],
    alert: 'Tres días en rojo. Avisa al staff si continúa.',
    trendTitle: 'Readiness · 14 días',
    measured: 'Medido',
    estimated: 'Estimado',
  },
  report: {
    title: 'Selección / forma · últimos 5 partidos',
    meta: '18 JUGADORES',
    cols: ['JUGADOR', 'MIN', 'NOTA', 'ACWR'],
    note: 'Informe guardado — recalculado sobre los datos de hoy. «*» señala una muestra corta.',
  },
  scout: {
    title: 'FC Boisval · J-6',
    meta: '3 SESIONES · 14 NOTAS',
    cols: ['PLANTILLA RIVAL', 'ORIGEN'],
    positions: ['Delantero', 'Organizador', 'Defensa', 'Portero'],
    sources: ['observado', 'acta del partido'],
    danger: 'a vigilar',
    proposal: 'Briefing táctico — propuesta de la IA',
    proposalNote: 'Bloque medio alto, salidas cortas. No se aplica nada hasta que decidas.',
    accept: 'Revisar',
  },
  scale: {
    who: 'S. Petit · Extremo · VAM',
    ref: 'REFERENCIAS EXTREMO · TEMPORADA ACTUAL',
    marker: '17,4 km/h',
    labels: ['bajo p25', 'p25 → mediana', 'mediana → p75', 'p75 → p90', 'más allá de p90'],
    delta: '+ 1,2 km/h por encima de la mediana de los extremos.',
  },
};

export const captureText: Record<Locale, CaptureText> = { fr, en, nl, de, pt, es };
