/**
 * Content for the Platform page (`/xx/solutions/`) in all six locales.
 *
 * The page shows what STRIVN connects, as the sequence it really runs:
 * data → context → reading → action. Then the six staff roles that read the
 * same base, and the six module families. Link targets, player figures and
 * step order are locale-invariant and live below; only text is translated.
 */
import type { Locale } from './landingContent';
export type { Locale };

/* ── Locale-invariant fixtures ────────────────────────────────── */

/** The sub-page each composition step opens, in step order. */
export const STEP_SLUGS = ['training-load', 'sessions', 'check-in', 'reports'] as const;

/** Readiness fragment of step 3: the same three players as the board. */
export const READING_ROWS: ReadonlyArray<{ name: string; acwr: string; state: 'ready' | 'watch' | 'risk'; pct: number }> = [
  { name: 'A. Diallo', acwr: '1.05', state: 'ready', pct: 91 },
  { name: 'K. Nakamura', acwr: '1.18', state: 'watch', pct: 71 },
  { name: 'L. Moreau', acwr: '1.31', state: 'risk', pct: 58 },
];

/** Where each role row points. `sc` resolves per locale; `waitlist` is mail. */
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

/** Index of the role that brings STRIVN into the club, and of the one still in the making. */
export const LEAD_INDEX = 0;
export const SOON_INDEX = 5;

/* ── Content shape ────────────────────────────────────────────── */

type Row = { name: string; meta: string };

export interface SolutionsContent {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; sub: string; fine: string[] };
  /** The four-step composition. Steps are in `STEP_SLUGS` order. */
  compo: {
    title: string;
    body: string;
    steps: [
      { label: string; title: string; body: string; cta: string; rows: Row[] },
      { label: string; title: string; body: string; cta: string; event: string; rows: Row[] },
      {
        label: string;
        title: string;
        body: string;
        cta: string;
        head: string;
        status: { ready: string; watch: string; risk: string };
      },
      {
        label: string;
        title: string;
        body: string;
        cta: string;
        tag: string;
        proposal: string;
        apply: string;
        edit: string;
        targets: string;
      },
    ];
  };
  roles: {
    title: string;
    body: string;
    /** Tag on the S&C row. */
    lead: string;
    soon: string;
    /** Role rows, in `ROSTER_TARGETS` order. */
    roster: Array<{ name: string; desc: string; cta: string }>;
  };
  /** Closing link to the features index, grouped by module family. */
  week: { title: string; body: string; cta: string };
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: SolutionsContent = {
  meta: {
    title: 'Solutions STRIVN | Six rôles, une seule base de données',
    description: 'Trouvez votre poste dans le staff : préparateur physique, head coach, analyste, kiné, joueur et directeur sportif. Six rôles, une seule base de données.',
  },
  hero: {
    kicker: 'COMMENT STRIVN FONCTIONNE',
    title: 'Croisez le GPS avec le plan et le wellness.',
    sub: 'Vous avez déjà payé votre GPS. STRIVN croise l’export avec le RPE, le wellness et le plan, puis propose l’ajustement que votre staff valide.',
    fine: ['4 sources croisées', '6 rôles', '1 base de données'],
  },
  compo: {
    title: 'Suivez la donnée de l’import à la décision.',
    body: 'Quatre étapes relient ce que vous mesurez à ce que vous changez. Chaque étape ouvre la page du module qui la porte.',
    steps: [
      {
        label: 'DONNÉES',
        title: 'Importez ce que vous mesurez déjà.',
        body: 'L’export GPS, le check-in du matin, le RPE et les tests arrivent dans la même base. Le parser lit les en-têtes de votre fichier, quel que soit le capteur.',
        cta: 'Voir la charge d’entraînement',
        rows: [
          { name: 'seance_mardi_catapult.csv', meta: '18 joueurs' },
          { name: 'Check-in wellness · 07:10', meta: '16 / 18' },
          { name: 'RPE séance mardi', meta: '17 / 18' },
          { name: 'Tests · CMJ S10', meta: '18 / 18' },
        ],
      },
      {
        label: 'CONTEXTE',
        title: 'Rattachez chaque chiffre à la séance qui l’a produit.',
        body: 'STRIVN relie l’import au calendrier, au plan de charge et aux exercices joués. Les 18 joueurs sont rattachés à leur créneau dès l’import.',
        cta: 'Voir les séances',
        event: 'Séance mardi · bloc intensité',
        rows: [
          { name: 'Cible plan S12', meta: '520 UA' },
          { name: 'Réalisée', meta: '548 UA' },
          { name: 'Exercices joués', meta: '4 blocs' },
          { name: 'Présents', meta: '18 / 20' },
        ],
      },
      {
        label: 'LECTURE',
        title: 'Sachez qui est apte avant la séance.',
        body: 'STRIVN recalcule l’ACWR chaque nuit sur 7 et 28 jours, puis classe l’effectif. Chaque statut affiche les données qui le justifient.',
        cta: 'Voir le check-in et la readiness',
        head: 'ACWR 7 / 28 j',
        status: { ready: 'Prêt', watch: 'Surveiller', risk: 'Alléger' },
      },
      {
        label: 'ACTION',
        title: 'Validez l’ajustement, tout le staff reçoit la même version.',
        body: 'La proposition attend votre validation avant de s’appliquer. Le plan, l’app joueur et le prochain rapport reprennent ensuite la décision.',
        cta: 'Voir les rapports',
        tag: 'PROPOSÉ',
        proposal: 'L. Moreau · jeudi : volume −30 %, sans sprint.',
        apply: 'Appliquer',
        edit: 'Modifier',
        targets: 'Plan S12 · App joueur · Rapport',
      },
    ],
  },
  roles: {
    title: 'Partagez la même base entre six rôles.',
    body: 'Le préparateur physique fait entrer STRIVN au club. Les cinq autres rôles lisent la même base, avec un droit d’accès par rôle.',
    lead: 'POINT D’ENTRÉE',
    soon: 'BIENTÔT',
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
  week: {
    title: 'Réunissez six familles de modules au même endroit.',
    body: 'Convocations, présences, infirmerie, séances, monitoring et rapports vivent au même endroit. Les modules ci-dessous partagent une base de données, avec un droit d’accès par rôle.',
    cta: 'Parcourir les fonctionnalités',
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: SolutionsContent = {
  meta: {
    title: 'STRIVN solutions | Six staff roles, one single database',
    description: 'Find your position in the staff: S&C coach, head coach, analyst, physio, player and sporting director. Six roles, one single database.',
  },
  hero: {
    kicker: 'HOW STRIVN WORKS',
    title: 'Cross your GPS with the plan and the wellness.',
    sub: 'You have already paid for your GPS. STRIVN crosses the export with RPE, wellness and the plan, then proposes the adjustment your staff approves.',
    fine: ['4 sources crossed', '6 roles', '1 database'],
  },
  compo: {
    title: 'Follow the data from import to decision.',
    body: 'Four steps connect what you measure to what you change. Each step opens the page of the module behind it.',
    steps: [
      {
        label: 'DATA',
        title: 'Import what you already measure.',
        body: 'The GPS export, the morning check-in, RPE and tests land in the same base. The parser reads your file’s headers, whatever the sensor.',
        cta: 'See training load',
        rows: [
          { name: 'tuesday_session_catapult.csv', meta: '18 players' },
          { name: 'Wellness check-in · 07:10', meta: '16 / 18' },
          { name: 'Tuesday session RPE', meta: '17 / 18' },
          { name: 'Tests · CMJ W10', meta: '18 / 18' },
        ],
      },
      {
        label: 'CONTEXT',
        title: 'Tie every figure to the session that produced it.',
        body: 'STRIVN links the import to the calendar, the load plan and the drills run. All 18 players are tied to their slot on import.',
        cta: 'See sessions',
        event: 'Tuesday session · intensity block',
        rows: [
          { name: 'W12 plan target', meta: '520 AU' },
          { name: 'Actual', meta: '548 AU' },
          { name: 'Drills run', meta: '4 blocks' },
          { name: 'Present', meta: '18 / 20' },
        ],
      },
      {
        label: 'READING',
        title: 'Know who is fit before the session.',
        body: 'STRIVN recalculates ACWR every night over 7 and 28 days, then sorts the squad. Each status shows the data behind it.',
        cta: 'See check-in and readiness',
        head: 'ACWR 7 / 28 d',
        status: { ready: 'Ready', watch: 'Monitor', risk: 'Reduce' },
      },
      {
        label: 'ACTION',
        title: 'Approve the adjustment, the whole staff gets one version.',
        body: 'The proposal waits for your approval before it applies. The plan, the player app and the next report then carry the decision.',
        cta: 'See reports',
        tag: 'PROPOSED',
        proposal: 'L. Moreau · Thursday: volume −30%, no sprints.',
        apply: 'Apply',
        edit: 'Edit',
        targets: 'W12 plan · Player app · Report',
      },
    ],
  },
  roles: {
    title: 'Share the same database across six roles.',
    body: 'The S&C coach brings STRIVN into the club. The five other roles read the same base, with an access right per role.',
    lead: 'ENTRY POINT',
    soon: 'SOON',
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
  week: {
    title: 'Bring six module families into one place.',
    body: 'Call-ups, attendance, medical log, sessions, monitoring and reports live in the same place. The modules below share one database, with an access right per role.',
    cta: 'Browse the features',
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: SolutionsContent = {
  meta: {
    title: 'STRIVN-oplossingen | Zes rollen, één enkele database',
    description: 'Vind uw positie in de staf: fysieke trainer, hoofdcoach, analist, kine, speler en sportief directeur. Zes rollen, één enkele database.',
  },
  hero: {
    kicker: 'HOE STRIVN WERKT',
    title: 'Kruis uw gps met het plan en de wellness.',
    sub: 'U hebt uw gps al betaald. STRIVN kruist de export met RPE, wellness en het plan, en stelt dan de aanpassing voor die uw staf goedkeurt.',
    fine: ['4 gekruiste bronnen', '6 rollen', '1 databank'],
  },
  compo: {
    title: 'Volg de data van import tot beslissing.',
    body: 'Vier stappen verbinden wat u meet met wat u verandert. Elke stap opent de pagina van de module erachter.',
    steps: [
      {
        label: 'DATA',
        title: 'Importeer wat u al meet.',
        body: 'De gps-export, de check-in van de ochtend, RPE en tests komen in dezelfde basis. De parser leest de kolomkoppen van uw bestand, welke sensor ook.',
        cta: 'Bekijk trainingsbelasting',
        rows: [
          { name: 'training_dinsdag_catapult.csv', meta: '18 spelers' },
          { name: 'Wellness-check-in · 07:10', meta: '16 / 18' },
          { name: 'RPE training dinsdag', meta: '17 / 18' },
          { name: 'Tests · CMJ W10', meta: '18 / 18' },
        ],
      },
      {
        label: 'CONTEXT',
        title: 'Koppel elk cijfer aan de training die het opleverde.',
        body: 'STRIVN koppelt de import aan de kalender, het belastingsplan en de gespeelde oefeningen. De 18 spelers hangen vanaf de import aan hun tijdslot.',
        cta: 'Bekijk trainingen',
        event: 'Training dinsdag · intensiteitsblok',
        rows: [
          { name: 'Doel plan W12', meta: '520 AU' },
          { name: 'Gerealiseerd', meta: '548 AU' },
          { name: 'Gespeelde oefeningen', meta: '4 blokken' },
          { name: 'Aanwezig', meta: '18 / 20' },
        ],
      },
      {
        label: 'LEZING',
        title: 'Weet wie fit is vóór de training.',
        body: 'STRIVN herberekent de ACWR elke nacht over 7 en 28 dagen en deelt de selectie in. Elke status toont de data erachter.',
        cta: 'Bekijk check-in en readiness',
        head: 'ACWR 7 / 28 d',
        status: { ready: 'Klaar', watch: 'Opvolgen', risk: 'Ontlasten' },
      },
      {
        label: 'ACTIE',
        title: 'Keur de aanpassing goed, de hele staf ziet één versie.',
        body: 'Het voorstel wacht op uw goedkeuring voordat het wordt toegepast. Het plan, de spelersapp en het volgende rapport nemen de beslissing daarna over.',
        cta: 'Bekijk rapporten',
        tag: 'VOORGESTELD',
        proposal: 'L. Moreau · donderdag: volume −30 %, zonder sprints.',
        apply: 'Toepassen',
        edit: 'Wijzigen',
        targets: 'Plan W12 · Spelersapp · Rapport',
      },
    ],
  },
  roles: {
    title: 'Deel dezelfde database met zes rollen.',
    body: 'De fysieke trainer brengt STRIVN de club binnen. De vijf andere rollen lezen dezelfde basis, met een toegangsrecht per rol.',
    lead: 'INSTAPPUNT',
    soon: 'BINNENKORT',
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
  week: {
    title: 'Breng zes modulefamilies samen op één plek.',
    body: 'Oproepingen, aanwezigheid, ziekenboeg, trainingen, monitoring en rapporten zitten op dezelfde plek. De modules hieronder delen één database, met een toegangsrecht per rol.',
    cta: 'Bekijk de functies',
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: SolutionsContent = {
  meta: {
    title: 'STRIVN Lösungen | Sechs Rollen, eine einzige Datenbasis',
    description: 'Finden Sie Ihre Position im Staff: Athletiktrainer, Cheftrainer, Analyst, Physio, Spieler und Sportdirektor. Sechs Rollen, eine einzige Datenbasis.',
  },
  hero: {
    kicker: 'SO ARBEITET STRIVN',
    title: 'GPS mit Plan und Wellness abgleichen.',
    sub: 'Ihr GPS ist bereits bezahlt. STRIVN gleicht den Export mit RPE, Wellness und Plan ab und schlägt dann die Anpassung vor, die Ihr Staff freigibt.',
    fine: ['4 abgeglichene Quellen', '6 Rollen', '1 Datenbasis'],
  },
  compo: {
    title: 'Die Daten vom Import bis zur Entscheidung verfolgen.',
    body: 'Vier Schritte verbinden, was Sie messen, mit dem, was Sie ändern. Jeder Schritt öffnet die Seite des Moduls dahinter.',
    steps: [
      {
        label: 'DATEN',
        title: 'Importieren, was Sie schon messen.',
        body: 'Der GPS-Export, der Check-in am Morgen, RPE und Tests landen in derselben Basis. Der Parser liest die Spaltenköpfe Ihrer Datei, egal welcher Sensor.',
        cta: 'Trainingsbelastung ansehen',
        rows: [
          { name: 'einheit_dienstag_catapult.csv', meta: '18 Spieler' },
          { name: 'Wellness-Check-in · 07:10', meta: '16 / 18' },
          { name: 'RPE Einheit Dienstag', meta: '17 / 18' },
          { name: 'Tests · CMJ KW10', meta: '18 / 18' },
        ],
      },
      {
        label: 'KONTEXT',
        title: 'Jede Zahl ihrer Einheit zuordnen.',
        body: 'STRIVN verknüpft den Import mit Kalender, Belastungsplan und gespielten Übungen. Alle 18 Spieler hängen ab dem Import an ihrem Termin.',
        cta: 'Einheiten ansehen',
        event: 'Einheit Dienstag · Intensitätsblock',
        rows: [
          { name: 'Ziel Plan KW12', meta: '520 AU' },
          { name: 'Ist', meta: '548 AU' },
          { name: 'Gespielte Übungen', meta: '4 Blöcke' },
          { name: 'Anwesend', meta: '18 / 20' },
        ],
      },
      {
        label: 'AUSWERTUNG',
        title: 'Vor der Einheit wissen, wer einsatzbereit ist.',
        body: 'STRIVN berechnet die ACWR jede Nacht über 7 und 28 Tage neu und ordnet den Kader. Jeder Status zeigt die Daten, die ihn begründen.',
        cta: 'Check-in und Readiness ansehen',
        head: 'ACWR 7 / 28 T',
        status: { ready: 'Bereit', watch: 'Beobachten', risk: 'Entlasten' },
      },
      {
        label: 'AKTION',
        title: 'Anpassung freigeben, der ganze Staff sieht eine Version.',
        body: 'Der Vorschlag wartet auf Ihre Freigabe, bevor er greift. Plan, Spieler-App und der nächste Bericht übernehmen danach die Entscheidung.',
        cta: 'Berichte ansehen',
        tag: 'VORGESCHLAGEN',
        proposal: 'L. Moreau · Donnerstag: Volumen −30 %, ohne Sprints.',
        apply: 'Anwenden',
        edit: 'Ändern',
        targets: 'Plan KW12 · Spieler-App · Bericht',
      },
    ],
  },
  roles: {
    title: 'Teilen Sie dieselbe Datenbasis mit sechs Rollen.',
    body: 'Der Athletiktrainer holt STRIVN in den Verein. Die fünf anderen Rollen lesen dieselbe Basis, mit einem Zugriffsrecht je Rolle.',
    lead: 'EINSTIEG',
    soon: 'BALD',
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
  week: {
    title: 'Bündeln Sie sechs Modulfamilien an einem Ort.',
    body: 'Aufgebote, Anwesenheit, Medizinbereich, Einheiten, Monitoring und Berichte liegen am selben Ort. Die Module unten teilen eine Datenbasis, mit einem Zugriffsrecht je Rolle.',
    cta: 'Funktionen durchgehen',
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: SolutionsContent = {
  meta: {
    title: 'Soluções STRIVN | Seis funções, uma só base de dados',
    description: 'Encontre a sua posição no staff: preparador físico, treinador principal, analista, fisioterapeuta, jogador e diretor desportivo. Seis funções, uma só base de dados.',
  },
  hero: {
    kicker: 'COMO FUNCIONA O STRIVN',
    title: 'Cruze o GPS com o plano e o wellness.',
    sub: 'Já pagou o seu GPS. O STRIVN cruza a exportação com o RPE, o wellness e o plano, e depois propõe o ajuste que o seu staff valida.',
    fine: ['4 fontes cruzadas', '6 funções', '1 base de dados'],
  },
  compo: {
    title: 'Siga o dado da importação à decisão.',
    body: 'Quatro etapas ligam o que mede ao que muda. Cada etapa abre a página do módulo que a sustenta.',
    steps: [
      {
        label: 'DADOS',
        title: 'Importe o que já mede.',
        body: 'A exportação GPS, o check-in da manhã, o RPE e os testes entram na mesma base. O parser lê os cabeçalhos do seu ficheiro, seja qual for o sensor.',
        cta: 'Ver a carga de treino',
        rows: [
          { name: 'sessao_terca_catapult.csv', meta: '18 jogadores' },
          { name: 'Check-in wellness · 07:10', meta: '16 / 18' },
          { name: 'RPE sessão de terça', meta: '17 / 18' },
          { name: 'Testes · CMJ S10', meta: '18 / 18' },
        ],
      },
      {
        label: 'CONTEXTO',
        title: 'Ligue cada número à sessão que o produziu.',
        body: 'O STRIVN liga a importação ao calendário, ao plano de carga e aos exercícios jogados. Os 18 jogadores ficam ligados ao seu horário desde a importação.',
        cta: 'Ver as sessões',
        event: 'Sessão de terça · bloco de intensidade',
        rows: [
          { name: 'Objetivo plano S12', meta: '520 UA' },
          { name: 'Realizada', meta: '548 UA' },
          { name: 'Exercícios jogados', meta: '4 blocos' },
          { name: 'Presentes', meta: '18 / 20' },
        ],
      },
      {
        label: 'LEITURA',
        title: 'Saiba quem está apto antes da sessão.',
        body: 'O STRIVN recalcula o ACWR todas as noites a 7 e 28 dias, e depois classifica o plantel. Cada estado mostra os dados que o justificam.',
        cta: 'Ver o check-in e a readiness',
        head: 'ACWR 7 / 28 d',
        status: { ready: 'Apto', watch: 'Vigiar', risk: 'Aliviar' },
      },
      {
        label: 'AÇÃO',
        title: 'Valide o ajuste, todo o staff recebe a mesma versão.',
        body: 'A proposta espera a sua validação antes de se aplicar. O plano, a app do jogador e o próximo relatório retomam depois a decisão.',
        cta: 'Ver os relatórios',
        tag: 'PROPOSTO',
        proposal: 'L. Moreau · quinta: volume −30 %, sem sprints.',
        apply: 'Aplicar',
        edit: 'Modificar',
        targets: 'Plano S12 · App do jogador · Relatório',
      },
    ],
  },
  roles: {
    title: 'Partilhe a mesma base entre seis funções.',
    body: 'O preparador físico faz entrar o STRIVN no clube. As outras cinco funções leem a mesma base, com um direito de acesso por função.',
    lead: 'PONTO DE ENTRADA',
    soon: 'EM BREVE',
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
  week: {
    title: 'Reúna seis famílias de módulos no mesmo sítio.',
    body: 'Convocatórias, presenças, enfermaria, sessões, monitorização e relatórios vivem no mesmo sítio. Os módulos abaixo partilham uma base de dados, com um direito de acesso por função.',
    cta: 'Percorrer as funcionalidades',
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: SolutionsContent = {
  meta: {
    title: 'Soluciones STRIVN | Seis funciones, una sola base de datos',
    description: 'Encuentra tu posición en el staff: preparador físico, entrenador, analista, fisio, jugador y director deportivo. Seis funciones, una sola base de datos.',
  },
  hero: {
    kicker: 'CÓMO FUNCIONA STRIVN',
    title: 'Cruce el GPS con el plan y el wellness.',
    sub: 'Ya pagó su GPS. STRIVN cruza la exportación con el RPE, el wellness y el plan, y después propone el ajuste que su staff valida.',
    fine: ['4 fuentes cruzadas', '6 funciones', '1 base de datos'],
  },
  compo: {
    title: 'Siga el dato de la importación a la decisión.',
    body: 'Cuatro pasos unen lo que usted mide con lo que cambia. Cada paso abre la página del módulo que lo sostiene.',
    steps: [
      {
        label: 'DATOS',
        title: 'Importe lo que ya mide.',
        body: 'La exportación GPS, el check-in de la mañana, el RPE y los tests llegan a la misma base. El parser lee las cabeceras de su archivo, sea cual sea el sensor.',
        cta: 'Ver la carga de entrenamiento',
        rows: [
          { name: 'sesion_martes_catapult.csv', meta: '18 jugadores' },
          { name: 'Check-in wellness · 07:10', meta: '16 / 18' },
          { name: 'RPE sesión del martes', meta: '17 / 18' },
          { name: 'Tests · CMJ S10', meta: '18 / 18' },
        ],
      },
      {
        label: 'CONTEXTO',
        title: 'Vincule cada cifra a la sesión que la produjo.',
        body: 'STRIVN vincula la importación al calendario, al plan de carga y a los ejercicios jugados. Los 18 jugadores quedan vinculados a su franja desde la importación.',
        cta: 'Ver las sesiones',
        event: 'Sesión del martes · bloque de intensidad',
        rows: [
          { name: 'Objetivo plan S12', meta: '520 UA' },
          { name: 'Realizada', meta: '548 UA' },
          { name: 'Ejercicios jugados', meta: '4 bloques' },
          { name: 'Presentes', meta: '18 / 20' },
        ],
      },
      {
        label: 'LECTURA',
        title: 'Sepa quién está apto antes de la sesión.',
        body: 'STRIVN recalcula el ACWR cada noche a 7 y 28 días, y después clasifica la plantilla. Cada estado muestra los datos que lo justifican.',
        cta: 'Ver el check-in y la readiness',
        head: 'ACWR 7 / 28 d',
        status: { ready: 'Apto', watch: 'Vigilar', risk: 'Aliviar' },
      },
      {
        label: 'ACCIÓN',
        title: 'Valide el ajuste, todo el staff recibe la misma versión.',
        body: 'La propuesta espera su validación antes de aplicarse. El plan, la app del jugador y el próximo informe recogen después la decisión.',
        cta: 'Ver los informes',
        tag: 'PROPUESTO',
        proposal: 'L. Moreau · jueves: volumen −30 %, sin sprints.',
        apply: 'Aplicar',
        edit: 'Modificar',
        targets: 'Plan S12 · App del jugador · Informe',
      },
    ],
  },
  roles: {
    title: 'Comparta la misma base entre seis funciones.',
    body: 'El preparador físico lleva STRIVN al club. Las otras cinco funciones leen la misma base, con un permiso de acceso por función.',
    lead: 'PUNTO DE ENTRADA',
    soon: 'PRONTO',
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
  week: {
    title: 'Reúna seis familias de módulos en un mismo lugar.',
    body: 'Convocatorias, asistencia, enfermería, sesiones, monitorización e informes viven en el mismo sitio. Los módulos de abajo comparten una base de datos, con un permiso de acceso por función.',
    cta: 'Recorrer las funcionalidades',
  },
};

export const solutionsContent: Record<Locale, SolutionsContent> = { fr, en, nl, de, pt, es };
