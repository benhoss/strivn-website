/**
 * Content for the Solutions page ("la feuille de match") in all six locales.
 *
 * The page casts the staff as a team sheet: six roles, six shirt numbers, one
 * pitch. Positions, numbers and link targets are locale-invariant and live in
 * the constants below; only the labels and copy are translated.
 */
import type { Locale } from './landingContent';
export type { Locale };

type Tone = 'plain' | 'green' | 'blue' | 'orange';

/* ── Locale-invariant fixtures ────────────────────────────────── */

/**
 * Markers on the pitch, in render order. `x`/`y` are percentages of the pitch
 * box so the whole formation scales with it — the mockup's pixel offsets would
 * break the moment the pitch is not exactly 560×700.
 */
export const PITCH_SPOTS: Array<{ num: string; x: number; y: number; tone: Tone; captain?: boolean }> = [
  /* Markers are centred on their point, so each one occupies roughly ±6% of
     the pitch height. The values below keep every block clear of the boxes and
     the centre circle — except the captain, who is framed by it on purpose. */
  { num: '9', x: 50, y: 17, tone: 'plain' },
  { num: '10', x: 26, y: 33.5, tone: 'green' },
  { num: '8', x: 74, y: 33.5, tone: 'plain' },
  { num: '6', x: 50, y: 50, tone: 'blue', captain: true },
  { num: '4', x: 50, y: 68, tone: 'plain' },
  { num: '1', x: 50, y: 84, tone: 'orange' },
];

/**
 * Roster order — deliberately not the pitch order: the S&C coach leads because
 * they are the one who brings STRIVN into the club.
 */
export const ROSTER_NUMS = ['6', '10', '8', '4', '9', '1'];

/** Where each roster row points. `sc` resolves per locale; `waitlist` is mail. */
export const ROSTER_TARGETS: Array<{ kind: 'sc' | 'feature' | 'waitlist'; slug?: string }> = [
  { kind: 'sc' },
  { kind: 'feature', slug: 'communication' },
  { kind: 'feature', slug: 'reports' },
  { kind: 'feature', slug: 'medical' },
  { kind: 'feature', slug: 'player-app' },
  { kind: 'waitlist' },
];

/** The S&C page has a translated slug in French only. */
export const SC_SLUG: Record<Locale, string> = {
  fr: 'preparateurs-physiques',
  en: 'sc-coaches',
  nl: 'sc-coaches',
  de: 'sc-coaches',
  pt: 'sc-coaches',
  es: 'sc-coaches',
};

/** Index of the row that is still in the making. */
export const SOON_INDEX = 5;

/* ── Content shape ────────────────────────────────────────────── */

export interface SolutionsContent {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; sub: string };
  /**
   * Overrides for the platform section borrowed from the homepage. There it
   * sits right below the monitoring block and can lean on it as a reference;
   * here nothing has mentioned monitoring, so the heading names the span the
   * eight cards actually cover and the body lists monitoring as one module
   * among the others.
   */
  platformIntro: { title: string; body: string };
  compo: {
    kicker: string;
    title: string;
    body: string;
    caption: string;
    captain: string;
    soon: string;
    /** Short pitch labels, in `PITCH_SPOTS` order. */
    spots: string[];
    /** Roster rows, in `ROSTER_NUMS` order. */
    roster: Array<{ name: string; desc: string; cta: string }>;
  };
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: SolutionsContent = {
  meta: {
    title: 'Solutions STRIVN | La compo de votre staff performance',
    description:
      'Six fonctions, six écrans, une seule base de données : préparateur physique, head coach, analyste, kiné, joueur et direction sportive.',
  },
  hero: {
    kicker: 'SOLUTIONS · LA FEUILLE DE MATCH',
    title: 'La compo de votre staff performance.',
    sub: 'Sur le terrain, chacun a son poste. Dans STRIVN aussi : six fonctions, six écrans, et un seul terrain de jeu — la donnée. Trouvez votre numéro.',
  },
  platformIntro: {
    title: 'De la convocation au rapport d’après-match.',
    body: 'Convocations, présences, infirmerie, séances, monitoring et rapports vivent dans le même environnement, ouvert à tout le staff.',
  },
  compo: {
    kicker: 'SIX POSTES, UN TERRAIN',
    title: 'Tout le monde joue sur le même terrain : la donnée.',
    body: 'Chaque numéro renvoie à une page dédiée. Le brassard est au préparateur physique : c’est lui qui fait entrer STRIVN au club, gratuitement.',
    caption: 'LE TERRAIN — UNE SEULE BASE : GPS · WELLNESS · CHARGE · PRÉSENCES · MÉDICAL',
    captain: '(C)',
    soon: 'BIENTÔT',
    spots: ['JOUEUR', 'HEAD COACH', 'ANALYSTE', 'PRÉPA PHYSIQUE', 'KINÉ & MÉDICAL', 'DIR. SPORTIF'],
    roster: [
      {
        name: 'Préparateur physique',
        desc: 'Monitoring, tests, programmes, planification — le cœur S&C de STRIVN. Gratuit pour une équipe.',
        cta: 'Voir la page dédiée',
      },
      {
        name: 'Head coach & staff',
        desc: 'Présences, convocations, séances et live match : le quotidien du groupe.',
        cta: 'Voir la gestion d’équipe',
      },
      {
        name: 'Analyste & data',
        desc: 'Rapports, IA & BI : la restitution qui parle à tout le staff.',
        cta: 'Voir rapports & IA',
      },
      {
        name: 'Kiné & médical',
        desc: 'Infirmerie, indisponibilités et protocoles de retour, reliés à la charge.',
        cta: 'Voir l’infirmerie',
      },
      {
        name: 'Joueur',
        desc: 'Check-in du matin, RSVP et séances dans l’app joueur.',
        cta: 'Voir l’app joueur',
      },
      {
        name: 'Directeur sportif',
        desc: 'Multi-équipes et vue direction — en ouverture avec les structures pilotes.',
        cta: 'Rejoindre la liste d’attente',
      },
    ],
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: SolutionsContent = {
  meta: {
    title: 'STRIVN solutions | The team sheet of your performance staff',
    description:
      'Six roles, six screens, one single database: S&C coach, head coach, analyst, physio, player and sporting director.',
  },
  hero: {
    kicker: 'SOLUTIONS · THE TEAM SHEET',
    title: 'The line-up of your performance staff.',
    sub: 'On the pitch, everyone has a position. In STRIVN too: six roles, six screens, and one playing surface — the data. Find your number.',
  },
  platformIntro: {
    title: 'From the call-up to the post-match report.',
    body: 'Call-ups, attendance, medical log, sessions, monitoring and reports live in the same environment, open to the whole staff.',
  },
  compo: {
    kicker: 'SIX POSITIONS, ONE PITCH',
    title: 'Everyone plays on the same pitch: the data.',
    body: 'Each number leads to its own page. The armband goes to the S&C coach: they are the one who brings STRIVN into the club, for free.',
    caption: 'THE PITCH — ONE SINGLE BASE: GPS · WELLNESS · LOAD · ATTENDANCE · MEDICAL',
    captain: '(C)',
    soon: 'SOON',
    spots: ['PLAYER', 'HEAD COACH', 'ANALYST', 'S&C COACH', 'PHYSIO & MEDICAL', 'SPORTING DIR.'],
    roster: [
      {
        name: 'S&C coach',
        desc: 'Monitoring, tests, programmes, planning — the S&C core of STRIVN. Free for one team.',
        cta: 'See the dedicated page',
      },
      {
        name: 'Head coach & staff',
        desc: 'Attendance, call-ups, sessions and live match: the squad’s day-to-day.',
        cta: 'See squad management',
      },
      {
        name: 'Analyst & data',
        desc: 'Reports, AI & BI: the read-out that speaks to the whole staff.',
        cta: 'See reports & AI',
      },
      {
        name: 'Physio & medical',
        desc: 'Treatment room, unavailabilities and return protocols, tied back to load.',
        cta: 'See the treatment room',
      },
      {
        name: 'Player',
        desc: 'Morning check-in, RSVP and sessions in the player app.',
        cta: 'See the player app',
      },
      {
        name: 'Sporting director',
        desc: 'Multi-team and board-level view — opening with the pilot clubs.',
        cta: 'Join the waiting list',
      },
    ],
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: SolutionsContent = {
  meta: {
    title: 'STRIVN-oplossingen | De opstelling van uw performance-staf',
    description:
      'Zes functies, zes schermen, één enkele database: fysieke trainer, hoofdcoach, analist, kine, speler en sportief directeur.',
  },
  hero: {
    kicker: 'OPLOSSINGEN · HET WEDSTRIJDBLAD',
    title: 'De opstelling van uw performance-staf.',
    sub: 'Op het veld heeft iedereen zijn positie. In STRIVN ook: zes functies, zes schermen, en één speelveld — de data. Vind uw nummer.',
  },
  platformIntro: {
    title: 'Van de oproeping tot het wedstrijdrapport.',
    body: 'Oproepingen, aanwezigheid, ziekenboeg, trainingen, monitoring en rapporten zitten in dezelfde omgeving, open voor de hele staf.',
  },
  compo: {
    kicker: 'ZES POSITIES, ÉÉN VELD',
    title: 'Iedereen speelt op hetzelfde veld: de data.',
    body: 'Elk nummer leidt naar een eigen pagina. De band gaat naar de fysieke trainer: hij brengt STRIVN de club binnen, gratis.',
    caption: 'HET VELD — ÉÉN ENKELE BASIS: GPS · WELLNESS · BELASTING · AANWEZIGHEID · MEDISCH',
    captain: '(C)',
    soon: 'BINNENKORT',
    spots: ['SPELER', 'HOOFDCOACH', 'ANALIST', 'FYSIEK TRAINER', 'KINE & MEDISCH', 'SPORTIEF DIR.'],
    roster: [
      {
        name: 'Fysieke trainer',
        desc: 'Monitoring, testen, programma’s, planning — de S&C-kern van STRIVN. Gratis voor één team.',
        cta: 'Bekijk de eigen pagina',
      },
      {
        name: 'Hoofdcoach & staf',
        desc: 'Aanwezigheid, oproepen, trainingen en live wedstrijd: de dagelijkse werking.',
        cta: 'Bekijk teambeheer',
      },
      {
        name: 'Analist & data',
        desc: 'Rapporten, AI & BI: de weergave die de hele staf begrijpt.',
        cta: 'Bekijk rapporten & AI',
      },
      {
        name: 'Kine & medisch',
        desc: 'Ziekenboeg, onbeschikbaarheden en terugkeerprotocollen, gekoppeld aan de belasting.',
        cta: 'Bekijk de ziekenboeg',
      },
      {
        name: 'Speler',
        desc: 'Check-in in de ochtend, RSVP en trainingen in de spelersapp.',
        cta: 'Bekijk de spelersapp',
      },
      {
        name: 'Sportief directeur',
        desc: 'Multi-team en directieoverzicht — in opening met de pilootclubs.',
        cta: 'Op de wachtlijst',
      },
    ],
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: SolutionsContent = {
  meta: {
    title: 'STRIVN Lösungen | Die Aufstellung Ihres Performance-Staffs',
    description:
      'Sechs Rollen, sechs Bildschirme, eine einzige Datenbasis: Athletiktrainer, Cheftrainer, Analyst, Physio, Spieler und Sportdirektor.',
  },
  hero: {
    kicker: 'LÖSUNGEN · DER SPIELBERICHT',
    title: 'Die Aufstellung Ihres Performance-Staffs.',
    sub: 'Auf dem Platz hat jeder seine Position. In STRIVN auch: sechs Rollen, sechs Bildschirme, und ein Spielfeld — die Daten. Finden Sie Ihre Nummer.',
  },
  platformIntro: {
    title: 'Vom Aufgebot bis zum Spielbericht.',
    body: 'Aufgebote, Anwesenheit, Medizinbereich, Einheiten, Monitoring und Berichte liegen in derselben Umgebung, offen für den gesamten Staff.',
  },
  compo: {
    kicker: 'SECHS POSITIONEN, EIN PLATZ',
    title: 'Alle spielen auf demselben Platz: den Daten.',
    body: 'Jede Nummer führt zu einer eigenen Seite. Die Binde trägt der Athletiktrainer: Er holt STRIVN in den Verein, kostenlos.',
    caption: 'DER PLATZ — EINE EINZIGE BASIS: GPS · WELLNESS · BELASTUNG · ANWESENHEIT · MEDIZIN',
    captain: '(C)',
    soon: 'BALD',
    spots: ['SPIELER', 'CHEFTRAINER', 'ANALYST', 'ATHLETIKTRAINER', 'PHYSIO & MEDIZIN', 'SPORTDIREKTOR'],
    roster: [
      {
        name: 'Athletiktrainer',
        desc: 'Monitoring, Tests, Programme, Planung — der S&C-Kern von STRIVN. Kostenlos für ein Team.',
        cta: 'Zur eigenen Seite',
      },
      {
        name: 'Cheftrainer & Staff',
        desc: 'Anwesenheit, Aufgebote, Einheiten und Spiel live: der Alltag der Gruppe.',
        cta: 'Zur Teamverwaltung',
      },
      {
        name: 'Analyst & Daten',
        desc: 'Berichte, KI & BI: die Auswertung, die der ganze Staff versteht.',
        cta: 'Zu Berichten & KI',
      },
      {
        name: 'Physio & Medizin',
        desc: 'Behandlungsraum, Ausfälle und Rückkehrprotokolle, an die Belastung gekoppelt.',
        cta: 'Zum Behandlungsraum',
      },
      {
        name: 'Spieler',
        desc: 'Check-in am Morgen, RSVP und Einheiten in der Spieler-App.',
        cta: 'Zur Spieler-App',
      },
      {
        name: 'Sportdirektor',
        desc: 'Mehrere Teams und Führungssicht — in Öffnung mit den Pilotvereinen.',
        cta: 'Auf die Warteliste',
      },
    ],
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: SolutionsContent = {
  meta: {
    title: 'Soluções STRIVN | O onze do seu staff de performance',
    description:
      'Seis funções, seis ecrãs, uma única base de dados: preparador físico, treinador principal, analista, fisioterapeuta, jogador e diretor desportivo.',
  },
  hero: {
    kicker: 'SOLUÇÕES · A FICHA DE JOGO',
    title: 'O onze do seu staff de performance.',
    sub: 'No campo cada um tem a sua posição. No STRIVN também: seis funções, seis ecrãs, e um só terreno de jogo — os dados. Encontre o seu número.',
  },
  platformIntro: {
    title: 'Da convocatória ao relatório pós-jogo.',
    body: 'Convocatórias, presenças, enfermaria, sessões, monitorização e relatórios vivem no mesmo ambiente, aberto a todo o staff.',
  },
  compo: {
    kicker: 'SEIS POSIÇÕES, UM CAMPO',
    title: 'Toda a gente joga no mesmo campo: os dados.',
    body: 'Cada número leva a uma página dedicada. A braçadeira é do preparador físico: é ele que faz entrar o STRIVN no clube, gratuitamente.',
    caption: 'O CAMPO — UMA SÓ BASE: GPS · BEM-ESTAR · CARGA · PRESENÇAS · MÉDICO',
    captain: '(C)',
    soon: 'EM BREVE',
    spots: ['JOGADOR', 'TREINADOR', 'ANALISTA', 'PREPARADOR FÍSICO', 'FISIO & MÉDICO', 'DIR. DESPORTIVO'],
    roster: [
      {
        name: 'Preparador físico',
        desc: 'Monitorização, testes, programas, planeamento — o núcleo S&C do STRIVN. Grátis para uma equipa.',
        cta: 'Ver a página dedicada',
      },
      {
        name: 'Treinador principal & staff',
        desc: 'Presenças, convocatórias, sessões e jogo em direto: o dia a dia do grupo.',
        cta: 'Ver a gestão de equipa',
      },
      {
        name: 'Analista & dados',
        desc: 'Relatórios, IA & BI: a restituição que fala a todo o staff.',
        cta: 'Ver relatórios & IA',
      },
      {
        name: 'Fisioterapeuta & médico',
        desc: 'Enfermaria, indisponibilidades e protocolos de regresso, ligados à carga.',
        cta: 'Ver a enfermaria',
      },
      {
        name: 'Jogador',
        desc: 'Check-in da manhã, RSVP e sessões na app do jogador.',
        cta: 'Ver a app do jogador',
      },
      {
        name: 'Diretor desportivo',
        desc: 'Multi-equipas e vista de direção — em abertura com os clubes piloto.',
        cta: 'Entrar na lista de espera',
      },
    ],
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: SolutionsContent = {
  meta: {
    title: 'Soluciones STRIVN | La alineación de tu staff de rendimiento',
    description:
      'Seis funciones, seis pantallas, una sola base de datos: preparador físico, entrenador, analista, fisio, jugador y director deportivo.',
  },
  hero: {
    kicker: 'SOLUCIONES · EL ACTA DE PARTIDO',
    title: 'La alineación de tu staff de rendimiento.',
    sub: 'En el campo cada uno tiene su posición. En STRIVN también: seis funciones, seis pantallas, y un solo terreno de juego — los datos. Encuentra tu número.',
  },
  platformIntro: {
    title: 'De la convocatoria al informe pospartido.',
    body: 'Convocatorias, asistencia, enfermería, sesiones, monitorización e informes viven en el mismo entorno, abierto a todo el staff.',
  },
  compo: {
    kicker: 'SEIS POSICIONES, UN CAMPO',
    title: 'Todos juegan en el mismo campo: los datos.',
    body: 'Cada número lleva a una página dedicada. El brazalete es del preparador físico: es él quien mete STRIVN en el club, gratis.',
    caption: 'EL CAMPO — UNA SOLA BASE: GPS · BIENESTAR · CARGA · ASISTENCIA · MÉDICO',
    captain: '(C)',
    soon: 'PRONTO',
    spots: ['JUGADOR', 'ENTRENADOR', 'ANALISTA', 'PREPARADOR FÍSICO', 'FISIO & MÉDICO', 'DIR. DEPORTIVO'],
    roster: [
      {
        name: 'Preparador físico',
        desc: 'Monitorización, tests, programas, planificación — el núcleo S&C de STRIVN. Gratis para un equipo.',
        cta: 'Ver la página dedicada',
      },
      {
        name: 'Entrenador & staff',
        desc: 'Asistencia, convocatorias, sesiones y partido en directo: el día a día del grupo.',
        cta: 'Ver la gestión de equipo',
      },
      {
        name: 'Analista & datos',
        desc: 'Informes, IA & BI: la lectura que entiende todo el staff.',
        cta: 'Ver informes & IA',
      },
      {
        name: 'Fisio & médico',
        desc: 'Enfermería, bajas y protocolos de vuelta, ligados a la carga.',
        cta: 'Ver la enfermería',
      },
      {
        name: 'Jugador',
        desc: 'Check-in de la mañana, RSVP y sesiones en la app del jugador.',
        cta: 'Ver la app del jugador',
      },
      {
        name: 'Director deportivo',
        desc: 'Multiequipo y vista de dirección — en apertura con los clubes piloto.',
        cta: 'Unirme a la lista de espera',
      },
    ],
  },
};

export const solutionsContent: Record<Locale, SolutionsContent> = { fr, en, nl, de, pt, es };
