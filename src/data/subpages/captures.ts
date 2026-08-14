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
    ready: { green: 'Vert', amber: 'Jaune', red: 'Rouge', missing: 'Donnée manquante' },
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
    ready: { green: 'Green', amber: 'Amber', red: 'Red', missing: 'Data missing' },
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
    ready: { green: 'Groen', amber: 'Oranje', red: 'Rood', missing: 'Gegeven ontbreekt' },
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
    ready: { green: 'Grün', amber: 'Gelb', red: 'Rot', missing: 'Daten fehlen' },
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
    ready: { green: 'Verde', amber: 'Amarelo', red: 'Vermelho', missing: 'Dado em falta' },
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
    ready: { green: 'Verde', amber: 'Ámbar', red: 'Rojo', missing: 'Dato ausente' },
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
};

export const captureText: Record<Locale, CaptureText> = { fr, en, nl, de, pt, es };
