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
    title: 'Solutions STRIVN | Six rôles, une seule base de données',
    description:
      'Trouvez votre poste dans le staff : préparateur physique, head coach, analyste, kiné, joueur et directeur sportif. Six rôles, une seule base de données.',
  },
  hero: {
    kicker: 'LA FEUILLE DE MATCH',
    title: 'Trouvez votre poste dans la compo du staff.',
    sub: 'Chacun a son poste sur le terrain et son écran dans STRIVN : six rôles, une seule base de données.',
  },
  platformIntro: {
    title: 'Couvrez la semaine entière, du lundi au match.',
    body: 'Convocations, présences, infirmerie, séances, monitoring et rapports vivent au même endroit. Les modules ci-dessous partagent une base de données, avec un droit d’accès par rôle.',
  },
  compo: {
    kicker: 'SIX POSTES, UN TERRAIN',
    title: 'Partagez la même base entre six rôles.',
    body: 'Chaque numéro ouvre sa page. Le brassard revient au préparateur physique, qui fait entrer STRIVN au club.',
    caption: 'LE TERRAIN · UNE SEULE BASE : GPS · WELLNESS · CHARGE · PRÉSENCES · MÉDICAL',
    captain: '(C)',
    soon: 'BIENTÔT',
    spots: ['JOUEUR', 'HEAD COACH', 'ANALYSTE', 'PRÉPA PHYSIQUE', 'KINÉ & MÉDICAL', 'DIR. SPORTIF'],
    roster: [
      {
        name: 'Préparateur physique',
        desc: 'Le cœur S&C de STRIVN : monitoring, tests, programmes et planification. Gratuit pour une équipe.',
        cta: 'Voir la page dédiée',
      },
      {
        name: 'Head coach & staff',
        desc: 'Le quotidien du groupe : présences, convocations, séances et match en direct.',
        cta: 'Voir la gestion d’équipe',
      },
      {
        name: 'Analyste & data',
        desc: 'Cinq rapports types, un générateur et des dashboards composables, lus par tout le staff.',
        cta: 'Voir rapports & IA',
      },
      {
        name: 'Kiné & médical',
        desc: 'Infirmerie, indisponibilités et protocoles de retour, reliés à la charge.',
        cta: 'Voir l’infirmerie',
      },
      {
        name: 'Joueur',
        desc: 'Check-in du matin en vingt secondes, RSVP et séances dans l’app joueur.',
        cta: 'Voir l’app joueur',
      },
      {
        name: 'Directeur sportif',
        desc: 'Multi-équipes et vue direction, en préparation. Nous vous prévenons à l’ouverture.',
        cta: 'Rejoindre la liste d’attente',
      },
    ],
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: SolutionsContent = {
  meta: {
    title: 'STRIVN solutions | Six staff roles, one single database',
    description:
      'Find your position in the staff: S&C coach, head coach, analyst, physio, player and sporting director. Six roles, one single database.',
  },
  hero: {
    kicker: 'THE TEAM SHEET',
    title: 'Find your position in the staff line-up.',
    sub: 'Everyone has a position on the pitch and a screen in STRIVN: six roles, one single database.',
  },
  platformIntro: {
    title: 'Run the whole week, from Monday to match day.',
    body: 'Call-ups, attendance, medical log, sessions, monitoring and reports live in the same place. The modules below share one database, with an access right per role.',
  },
  compo: {
    kicker: 'SIX POSITIONS, ONE PITCH',
    title: 'Share the same database across six roles.',
    body: 'Each number opens its own page. The armband goes to the S&C coach, who brings STRIVN into the club.',
    caption: 'THE PITCH · ONE SINGLE BASE: GPS · WELLNESS · LOAD · ATTENDANCE · MEDICAL',
    captain: '(C)',
    soon: 'SOON',
    spots: ['PLAYER', 'HEAD COACH', 'ANALYST', 'S&C COACH', 'PHYSIO & MEDICAL', 'SPORTING DIR.'],
    roster: [
      {
        name: 'S&C coach',
        desc: 'The S&C core of STRIVN: monitoring, tests, programmes and planning. Free for one team.',
        cta: 'See the dedicated page',
      },
      {
        name: 'Head coach & staff',
        desc: 'The squad’s day-to-day: attendance, call-ups, sessions and live match.',
        cta: 'See squad management',
      },
      {
        name: 'Analyst & data',
        desc: 'Five report types, a generator and composable dashboards, read by the whole staff.',
        cta: 'See reports & AI',
      },
      {
        name: 'Physio & medical',
        desc: 'Treatment room, unavailabilities and return protocols, tied back to load.',
        cta: 'See the treatment room',
      },
      {
        name: 'Player',
        desc: 'Morning check-in in twenty seconds, RSVP and sessions in the player app.',
        cta: 'See the player app',
      },
      {
        name: 'Sporting director',
        desc: 'Multi-team and board-level view, in the making. We tell you when it opens.',
        cta: 'Join the waiting list',
      },
    ],
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: SolutionsContent = {
  meta: {
    title: 'STRIVN-oplossingen | Zes rollen, één enkele database',
    description:
      'Vind uw positie in de staf: fysieke trainer, hoofdcoach, analist, kine, speler en sportief directeur. Zes rollen, één enkele database.',
  },
  hero: {
    kicker: 'HET WEDSTRIJDBLAD',
    title: 'Vind uw positie in de opstelling van de staf.',
    sub: 'Iedereen heeft een positie op het veld en een scherm in STRIVN: zes rollen, één enkele database.',
  },
  platformIntro: {
    title: 'Draai de hele week, van maandag tot de wedstrijd.',
    body: 'Oproepingen, aanwezigheid, ziekenboeg, trainingen, monitoring en rapporten zitten op dezelfde plek. De modules hieronder delen één database, met een toegangsrecht per rol.',
  },
  compo: {
    kicker: 'ZES POSITIES, ÉÉN VELD',
    title: 'Deel dezelfde database met zes rollen.',
    body: 'Elk nummer opent een eigen pagina. De band gaat naar de fysieke trainer, die STRIVN de club binnenbrengt.',
    caption: 'HET VELD · ÉÉN ENKELE BASIS: GPS · WELLNESS · BELASTING · AANWEZIGHEID · MEDISCH',
    captain: '(C)',
    soon: 'BINNENKORT',
    spots: ['SPELER', 'HOOFDCOACH', 'ANALIST', 'FYSIEK TRAINER', 'KINE & MEDISCH', 'SPORTIEF DIR.'],
    roster: [
      {
        name: 'Fysieke trainer',
        desc: 'De S&C-kern van STRIVN: monitoring, testen, programma’s en planning. Gratis voor één team.',
        cta: 'Bekijk de eigen pagina',
      },
      {
        name: 'Hoofdcoach & staf',
        desc: 'De dagelijkse werking: aanwezigheid, oproepen, trainingen en wedstrijd live.',
        cta: 'Bekijk teambeheer',
      },
      {
        name: 'Analist & data',
        desc: 'Vijf rapporttypes, een generator en samen te stellen dashboards, gelezen door de hele staf.',
        cta: 'Bekijk rapporten & AI',
      },
      {
        name: 'Kine & medisch',
        desc: 'Ziekenboeg, onbeschikbaarheden en terugkeerprotocollen, gekoppeld aan de belasting.',
        cta: 'Bekijk de ziekenboeg',
      },
      {
        name: 'Speler',
        desc: 'Check-in in de ochtend in twintig seconden, RSVP en trainingen in de spelersapp.',
        cta: 'Bekijk de spelersapp',
      },
      {
        name: 'Sportief directeur',
        desc: 'Multi-team en directieoverzicht, in de maak. Wij verwittigen u zodra het opent.',
        cta: 'Op de wachtlijst',
      },
    ],
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: SolutionsContent = {
  meta: {
    title: 'STRIVN Lösungen | Sechs Rollen, eine einzige Datenbasis',
    description:
      'Finden Sie Ihre Position im Staff: Athletiktrainer, Cheftrainer, Analyst, Physio, Spieler und Sportdirektor. Sechs Rollen, eine einzige Datenbasis.',
  },
  hero: {
    kicker: 'DER SPIELBERICHT',
    title: 'Finden Sie Ihre Position in der Aufstellung.',
    sub: 'Jeder hat eine Position auf dem Platz und einen Bildschirm in STRIVN: sechs Rollen, eine einzige Datenbasis.',
  },
  platformIntro: {
    title: 'Führen Sie die ganze Woche, von Montag bis Spieltag.',
    body: 'Aufgebote, Anwesenheit, Medizinbereich, Einheiten, Monitoring und Berichte liegen am selben Ort. Die Module unten teilen eine Datenbasis, mit einem Zugriffsrecht je Rolle.',
  },
  compo: {
    kicker: 'SECHS POSITIONEN, EIN PLATZ',
    title: 'Teilen Sie dieselbe Datenbasis mit sechs Rollen.',
    body: 'Jede Nummer öffnet eine eigene Seite. Die Binde trägt der Athletiktrainer, der STRIVN in den Verein holt.',
    caption: 'DER PLATZ · EINE EINZIGE BASIS: GPS · WELLNESS · BELASTUNG · ANWESENHEIT · MEDIZIN',
    captain: '(C)',
    soon: 'BALD',
    spots: ['SPIELER', 'CHEFTRAINER', 'ANALYST', 'ATHLETIKTRAINER', 'PHYSIO & MEDIZIN', 'SPORTDIREKTOR'],
    roster: [
      {
        name: 'Athletiktrainer',
        desc: 'Der S&C-Kern von STRIVN: Monitoring, Tests, Programme und Planung. Kostenlos für ein Team.',
        cta: 'Zur eigenen Seite',
      },
      {
        name: 'Cheftrainer & Staff',
        desc: 'Der Alltag der Gruppe: Anwesenheit, Aufgebote, Einheiten und Spiel live.',
        cta: 'Zur Teamverwaltung',
      },
      {
        name: 'Analyst & Daten',
        desc: 'Fünf Berichtstypen, ein Generator und frei baubare Dashboards, gelesen vom ganzen Staff.',
        cta: 'Zu Berichten & KI',
      },
      {
        name: 'Physio & Medizin',
        desc: 'Behandlungsraum, Ausfälle und Rückkehrprotokolle, an die Belastung gekoppelt.',
        cta: 'Zum Behandlungsraum',
      },
      {
        name: 'Spieler',
        desc: 'Check-in am Morgen in zwanzig Sekunden, RSVP und Einheiten in der Spieler-App.',
        cta: 'Zur Spieler-App',
      },
      {
        name: 'Sportdirektor',
        desc: 'Mehrere Teams und Führungssicht, in Vorbereitung. Wir sagen Bescheid, sobald es öffnet.',
        cta: 'Auf die Warteliste',
      },
    ],
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: SolutionsContent = {
  meta: {
    title: 'Soluções STRIVN | Seis funções, uma só base de dados',
    description:
      'Encontre a sua posição no staff: preparador físico, treinador principal, analista, fisioterapeuta, jogador e diretor desportivo. Seis funções, uma só base de dados.',
  },
  hero: {
    kicker: 'A FICHA DE JOGO',
    title: 'Encontre a sua posição no onze do staff.',
    sub: 'Cada um tem a sua posição no campo e o seu ecrã no STRIVN: seis funções, uma só base de dados.',
  },
  platformIntro: {
    title: 'Conduza a semana inteira, de segunda ao jogo.',
    body: 'Convocatórias, presenças, enfermaria, sessões, monitorização e relatórios vivem no mesmo sítio. Os módulos abaixo partilham uma base de dados, com um direito de acesso por função.',
  },
  compo: {
    kicker: 'SEIS POSIÇÕES, UM CAMPO',
    title: 'Partilhe a mesma base entre seis funções.',
    body: 'Cada número abre a sua página. A braçadeira é do preparador físico, que faz entrar o STRIVN no clube.',
    caption: 'O CAMPO · UMA SÓ BASE: GPS · BEM-ESTAR · CARGA · PRESENÇAS · MÉDICO',
    captain: '(C)',
    soon: 'EM BREVE',
    spots: ['JOGADOR', 'TREINADOR', 'ANALISTA', 'PREPARADOR FÍSICO', 'FISIO & MÉDICO', 'DIR. DESPORTIVO'],
    roster: [
      {
        name: 'Preparador físico',
        desc: 'O núcleo S&C do STRIVN: monitorização, testes, programas e planeamento. Grátis para uma equipa.',
        cta: 'Ver a página dedicada',
      },
      {
        name: 'Treinador principal & staff',
        desc: 'O dia a dia do grupo: presenças, convocatórias, sessões e jogo em direto.',
        cta: 'Ver a gestão de equipa',
      },
      {
        name: 'Analista & dados',
        desc: 'Cinco tipos de relatório, um gerador e dashboards à medida, lidos por todo o staff.',
        cta: 'Ver relatórios & IA',
      },
      {
        name: 'Fisioterapeuta & médico',
        desc: 'Enfermaria, indisponibilidades e protocolos de regresso, ligados à carga.',
        cta: 'Ver a enfermaria',
      },
      {
        name: 'Jogador',
        desc: 'Check-in da manhã em vinte segundos, RSVP e sessões na app do jogador.',
        cta: 'Ver a app do jogador',
      },
      {
        name: 'Diretor desportivo',
        desc: 'Multi-equipas e vista de direção, em preparação. Avisamos assim que abrir.',
        cta: 'Entrar na lista de espera',
      },
    ],
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: SolutionsContent = {
  meta: {
    title: 'Soluciones STRIVN | Seis funciones, una sola base de datos',
    description:
      'Encuentra tu posición en el staff: preparador físico, entrenador, analista, fisio, jugador y director deportivo. Seis funciones, una sola base de datos.',
  },
  hero: {
    kicker: 'EL ACTA DE PARTIDO',
    title: 'Encuentra tu posición en la alineación del staff.',
    sub: 'Cada uno tiene su posición en el campo y su pantalla en STRIVN: seis funciones, una sola base de datos.',
  },
  platformIntro: {
    title: 'Lleva la semana entera, del lunes al partido.',
    body: 'Convocatorias, asistencia, enfermería, sesiones, monitorización e informes viven en el mismo sitio. Los módulos de abajo comparten una base de datos, con un permiso de acceso por función.',
  },
  compo: {
    kicker: 'SEIS POSICIONES, UN CAMPO',
    title: 'Comparte la misma base entre seis funciones.',
    body: 'Cada número abre su página. El brazalete es del preparador físico, que mete STRIVN en el club.',
    caption: 'EL CAMPO · UNA SOLA BASE: GPS · BIENESTAR · CARGA · ASISTENCIA · MÉDICO',
    captain: '(C)',
    soon: 'PRONTO',
    spots: ['JUGADOR', 'ENTRENADOR', 'ANALISTA', 'PREPARADOR FÍSICO', 'FISIO & MÉDICO', 'DIR. DEPORTIVO'],
    roster: [
      {
        name: 'Preparador físico',
        desc: 'El núcleo S&C de STRIVN: monitorización, tests, programas y planificación. Gratis para un equipo.',
        cta: 'Ver la página dedicada',
      },
      {
        name: 'Entrenador & staff',
        desc: 'El día a día del grupo: asistencia, convocatorias, sesiones y partido en directo.',
        cta: 'Ver la gestión de equipo',
      },
      {
        name: 'Analista & datos',
        desc: 'Cinco tipos de informe, un generador y cuadros de mando a medida, leídos por todo el staff.',
        cta: 'Ver informes & IA',
      },
      {
        name: 'Fisio & médico',
        desc: 'Enfermería, bajas y protocolos de vuelta, ligados a la carga.',
        cta: 'Ver la enfermería',
      },
      {
        name: 'Jugador',
        desc: 'Check-in de la mañana en veinte segundos, RSVP y sesiones en la app del jugador.',
        cta: 'Ver la app del jugador',
      },
      {
        name: 'Director deportivo',
        desc: 'Multiequipo y vista de dirección, en preparación. Te avisamos en cuanto abra.',
        cta: 'Unirme a la lista de espera',
      },
    ],
  },
};

export const solutionsContent: Record<Locale, SolutionsContent> = { fr, en, nl, de, pt, es };
