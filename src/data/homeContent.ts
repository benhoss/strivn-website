/**
 * Content for the S&C-first homepage (all six locales).
 *
 * Every user-visible string lives here — including the labels inside the
 * CSS-drawn product visuals — so the whole page localises from one place.
 * Player names and file names stay identical across locales on purpose.
 */
import type { Locale } from './landingContent';
export type { Locale };

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleMuted: string;
    titleMain: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    /** CSS-drawn "OS" dashboard shot */
    shot: {
      title: string;
      stamp: string;
      kpis: Array<{ label: string; value: string; tone: 'blue' | 'green' | 'plain' | 'orange' }>;
      alertsLabel: string;
      rows: Array<{ name: string; status: string; tone: 'green' | 'coral' | 'orange' | 'plain'; bar: number; acwr: string }>;
      wellness: { title: string; rows: Array<{ label: string; value: string; tone: 'green' | 'orange' }> };
      toast: { title: string; sub: string };
      alert: { title: string; body: string };
      micro: { title: string };
      ai: { title: string; q: string; a: string; sources: string };
    };
  };
  spectre: {
    kicker: string;
    title: string;
    steps: Array<{ icon: string; label: string }>;
    note: string;
  };
  credibility: {
    stat: string;
    statSuffix: string;
    statLine: string;
    statSub: string;
    methodKicker: string;
    /** One line — the logo carries the institution's name. */
    methodTitle: string;
  };
  beforeAfter: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    beforeLabel: string;
    beforeChips: Array<{ icon: string; label: string }>;
    afterLabel: string;
    afterRows: Array<{ icon: string; label: string }>;
  };
  workflow: {
    index: string;
    kicker: string;
    title: string;
    sub: string;
    steps: [WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep, WorkflowStep];
    visuals: {
      gps: { file: string; fileSub: string; colsLabel: string; cols: Array<{ from: string; to: string }>; done: string };
      readiness: {
        title: string;
        stamp: string;
        kpis: Array<{ label: string; value: string; tone: 'green' | 'orange' }>;
        alertsLabel: string;
        alerts: Array<{ name: string; detail: string; action: string }>;
        chartLabel: string;
      };
      planning: {
        title: string;
        legendTarget: string;
        legendActual: string;
        days: string[];
        adjustments: Array<{ name: string; detail: string }>;
      };
      builder: {
        title: string;
        sub: string;
        badge: string;
        blocks: Array<{ label: string; time: string; load: string }>;
        workout: { title: string; stamp: string; body: string };
      };
      live: {
        badge: string;
        title: string;
        meta: string;
        chartLabel: string;
        players: Array<{ name: string; pct: number; tone: 'blue' | 'coral' }>;
        alert: { body: string; primary: string; secondary: string };
      };
      share: {
        title: string;
        stamp: string;
        body: string;
        avatars: string[];
        shared: string;
        commentAuthor: string;
        comment: string;
        push: string;
      };
    };
  };
  /**
   * The compatibility band. Unnumbered, like `credibility` — the brand names
   * themselves live in `partners.ts`, since they do not translate.
   */
  compatible: {
    kicker: string;
    title: string;
    body: string;
    /** Pill on the WHOOP line, for as long as the integration is the news. */
    badge: string;
    whoopTitle: string;
    /** What WHOOP hands the check-in, one line each. */
    points: [string, string, string];
    cta: string;
    href: string;
    /** Trademark attribution, under the tiles. */
    note: string;
  };
  playerApp: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    points: Array<{ icon: string; label: string }>;
    note: string;
    cta: string;
    href: string;
    stores: string;
    /** CSS-drawn player-app screen */
    phone: {
      time: string;
      greeting: string;
      team: string;
      wellness: {
        title: string;
        badge: string;
        /** `value` is the selected step on a 1–5 scale */
        rows: Array<{ label: string; value: number }>;
        submit: string;
      };
      rpe: { title: string; value: string };
      workout: { title: string; meta: string };
    };
  };
  platform: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    featured: Array<{ icon: string; title: string; badge: string; badgeTone: 'blue' | 'green'; body: string; cta: string; href: string }>;
    cards: Array<{ icon: string; title: string; body: string; cta: string; href: string }>;
  };
  intelligence: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    console: {
      title: string;
      badge: string;
      q: string;
      aIntro: string;
      sources: string;
      chartTitle: string;
      legend: [string, string];
      metrics: string[];
      insight: string;
      pin: string;
      refine: string;
      signalTitle: string;
      signalBody: string;
      signalCta: string;
    };
    capabilities: Array<{ icon: string; title: string; body: string }>;
    bi: {
      kicker: string;
      title: string;
      body: string;
      points: string[];
      cta: string;
      href: string;
      dash: {
        title: string;
        widgetBtn: string;
        aiBtn: string;
        kpis: Array<{ label: string; value: string; tone: 'plain' | 'green' | 'blue' }>;
        weekly: string;
        availability: string;
        availabilityValue: string;
        hsr: string;
        aiTag: string;
      };
    };
  };
  convince: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    steps: Array<{ title: string; body: string }>;
    dossier: {
      brand: string;
      kicker: string;
      title: string;
      roles: Array<{ icon: string; body: string }>;
      copyBtn: string;
      pdfBtn: string;
      note: string;
    };
  };
  solutions: {
    index: string;
    kicker: string;
    title: string;
    cards: Array<{ icon: string; title: string; body: string; cta: string; href: string; featured?: boolean }>;
  };
  /** Homepage teaser only. The four tiers themselves live in
   *  `pricingContent`, so the strip and `/{locale}/pricing/` can never drift. */
  pricing: {
    index: string;
    kicker: string;
    title: string;
    note: string;
  };
  faq: {
    index: string;
    kicker: string;
    title: string;
    body: string;
    contactTitle: string;
    contactBody: string;
    email: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    kicker: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
  };
  footer: {
    tagline: string;
    body: string;
    email: string;
    /**
     * `hreflang` marks a link whose destination is in another language —
     * the blog exists in French only, so the five other locales point at it
     * and browsers and crawlers should know that before following.
     */
    columns: Array<{
      title: string;
      links: Array<{ label: string; href: string; hreflang?: string }>;
    }>;
    copyright: string;
  };
}

interface WorkflowStep {
  index: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  href: string;
  accent: 'blue' | 'green' | 'orange';
}

/* ────────────────────────────── FR ────────────────────────────── */

const fr: HomeContent = {
  meta: {
    title: 'STRIVN | Le système d’exploitation du staff performance',
    description:
      'Import GPS, wellness, charge et planification dans un seul outil. L’IA lit les données du groupe et signale qui alléger. Gratuit pour une équipe, partagé par tout le staff.',
  },
  hero: {
    eyebrow: 'Conçu avec des staffs professionnels',
    titleMuted: 'Le système d’exploitation',
    titleMain: 'du staff performance.',
    sub: 'Import GPS, wellness, charge et planification dans un seul outil. L’IA lit les données du groupe et vous dit qui est apte, qui alléger, qui surveiller. Une seule lecture quotidienne, partagée par tout le staff.',
    primaryCta: 'Commencer gratuitement',
    secondaryCta: 'Voir le workflow monitoring',
    shot: {
      title: 'Readiness du jour · Olympique Montverne',
      stamp: 'MER 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: 'CHARGE 7 J', value: '2 340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALERTES', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'EFFECTIF · READINESS PAR JOUEUR',
      rows: [
        { name: 'A. Diallo', status: 'Prêt', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Alléger', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Surveiller', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Prêt', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Prêt', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Sommeil', value: '7.2', tone: 'green' },
          { label: 'Fatigue', value: '6.1', tone: 'orange' },
          { label: 'Humeur', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'Import GPS terminé', sub: '18 joueurs · séance mardi' },
      alert: {
        title: 'Alerte charge',
        body: 'L. Moreau — ACWR 1.31, 3e semaine au-dessus du seuil. Allègement proposé jeudi.',
      },
      micro: { title: 'Microcycle · S12' },
      ai: {
        title: 'Assistant IA',
        q: 'Qui est apte pour dimanche ?',
        a: '14 joueurs aptes. L. Moreau à surveiller (ACWR 1.31), T. Mendes en protocole — retour estimé J+18.',
        sources: 'SOURCES · PRÉSENCES, CHARGE, INFIRMERIE',
      },
    },
  },
  spectre: {
    kicker: 'UN SEUL SYSTÈME, DU LUNDI AU MATCH',
    title: 'Faites tourner toute la semaine dans un seul espace.',
    steps: [
      { icon: 'calendar', label: 'Planification' },
      { icon: 'send', label: 'Convocations' },
      { icon: 'clipboard', label: 'Construction de séance' },
      { icon: 'radio', label: 'Live séance & match' },
      { icon: 'activity', label: 'Monitoring & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Infirmerie' },
      { icon: 'bar-chart', label: 'Rapports & BI' },
    ],
    note: 'Chaque module alimente les autres. Une donnée saisie une fois sert aux sept autres.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'équipes font tourner leur quotidien sur STRIVN',
    statSub: 'CLUBS ET ACADÉMIES · DU RÉGIONAL AU PROFESSIONNEL',
    methodKicker: 'MÉTHODOLOGIE',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'LE CONSTAT',
    title: 'Réunissez GPS, RPE et wellness en une seule lecture.',
    body: 'Chaque matin, les mêmes opérations : exporter le GPS, consolider les RPE, relancer les questionnaires, croiser trois fichiers pour établir l’état de forme du groupe. STRIVN reprend cette dernière étape et la calcule pendant la nuit.',
    beforeLabel: 'AVANT · DES OUTILS FRAGMENTÉS',
    beforeChips: [
      { icon: 'table', label: 'Classeurs Excel dispersés' },
      { icon: 'satellite', label: 'Exports GPS manuels' },
      { icon: 'file-text', label: 'Questionnaires wellness papier' },
      { icon: 'message-circle', label: 'RPE collectés par messagerie' },
      { icon: 'bar-chart', label: 'Rapports reconstruits chaque semaine' },
      { icon: 'copy', label: 'Une version par membre du staff' },
    ],
    afterLabel: 'AVEC STRIVN · UN SYSTÈME UNIFIÉ',
    afterRows: [
      { icon: 'satellite', label: 'Import GPS depuis l’export CSV' },
      { icon: 'moon', label: 'Questionnaire wellness quotidien, sur mobile' },
      { icon: 'gauge', label: 'RPE recueilli à l’issue de chaque séance' },
      { icon: 'activity', label: 'Charge et ACWR calculés en continu' },
      { icon: 'bell', label: 'Alertes readiness avant l’entraînement' },
      { icon: 'users', label: 'Accessible à l’ensemble du staff, en temps réel' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'LE WORKFLOW',
    title: 'Mesurez la charge, planifiez la semaine, conduisez la séance.',
    sub: 'STRIVN lit vos données, puis planifie la charge, construit les séances et les workouts, et les conduit en direct. Six étapes, du fichier GPS au rapport du lundi.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORT GPS',
        title: 'Importez l’export GPS, quel que soit le capteur.',
        body: 'Déposez le CSV de Catapult, STATSports ou de tout autre système. Les colonnes sont reconnues au premier import et mémorisées ; la séance est rattachée au calendrier, joueur par joueur, et les imports suivants prennent quelques secondes.',
        points: [
          'Import direct d’un export CSV',
          'Correspondance des colonnes mémorisée',
          'Distance, sprints et HSR par joueur',
          'Séance reliée au calendrier d’équipe',
        ],
        cta: 'Voir l’import GPS',
        href: '/fr/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Sachez qui est apte avant la séance.',
        body: 'Les joueurs répondent au check-in au réveil, en vingt secondes. Avant la séance, vous savez qui est apte, qui envoie un signal et qui doit être allégé.',
        points: [
          'Questionnaire wellness au réveil, sur mobile',
          'Score readiness par joueur, pondérable',
          'Alertes sur franchissement de seuil',
          'Tendance individuelle et collective',
        ],
        cta: 'Voir le wellness',
        href: '/fr/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'PLANIFICATION DE CHARGE',
        title: 'Planifiez la charge de la semaine en UA.',
        body: 'Fixez une cible quotidienne ; STRIVN calcule l’ACWR sur 7 et 28 jours et signale les écarts. Le microcycle se construit sur la charge réellement absorbée par le groupe.',
        points: [
          'Charge cible et réalisée, jour par jour',
          'ACWR et monotonie calculés automatiquement',
          'Périodisation du microcycle match à match',
          'Ajustements individualisés, appliqués immédiatement',
        ],
        cta: 'Voir la planification',
        href: '/fr/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'CONSTRUCTION DE SÉANCE & WORKOUTS',
        title: 'Construisez la séance depuis le plan de charge.',
        body: 'Assemblez blocs, exercices et charges cibles ; la charge estimée s’affiche avant la séance. Les workouts individuels se génèrent depuis les mêmes données, protocoles de retour compris.',
        points: [
          'Bibliothèque d’exercices et de blocs réutilisables',
          'Charge estimée par bloc, avant la séance',
          'Workouts individuels : force, prévention, retour au jeu',
          'Publication vers l’app des joueurs en un geste',
        ],
        cta: 'Voir le constructeur de séance',
        href: '/fr/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'SÉANCE EN DIRECT',
        title: 'Suivez la charge pendant la séance, bloc par bloc.',
        body: 'Pointez les présences au bord du terrain ; la charge se cumule bloc par bloc et l’écart avec le plan s’affiche en direct. Vous ajustez pendant la séance.',
        points: [
          'Pointage et participation en bord de terrain',
          'Charge cumulée en temps réel, par joueur',
          'Écart vs charge planifiée, bloc par bloc',
        ],
        cta: 'Voir la séance en direct',
        href: '/fr/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'PARTAGE STAFF',
        title: 'Partagez la même lecture avec tout le staff.',
        body: 'Le rapport de la semaine se génère automatiquement, le staff l’annote, et les disponibilités alimentent la convocation du dimanche. Le head coach, le kiné et les adjoints lisent les mêmes données, chacun avec ses droits.',
        points: [
          'Vue readiness partagée avec l’ensemble du staff',
          'Rapport hebdomadaire généré automatiquement',
          'Commentaires et décisions centralisés',
          'Droits d’accès différenciés par rôle',
        ],
        cta: 'Voir le partage staff',
        href: '/fr/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'seance_0806_catapult.csv',
        fileSub: '18 joueurs reconnus · mapping appliqué',
        colsLabel: 'COLONNES RECONNUES',
        cols: [
          { from: 'Total Distance (m)', to: 'Distance totale' },
          { from: 'HSR >19.8 km/h (m)', to: 'Course haute intensité' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'Charge externe' },
        ],
        done: 'Import terminé · relié à « Séance mardi · bloc intensité »',
      },
      readiness: {
        title: 'Wellness du matin · 16 / 18 réponses',
        stamp: '07:45',
        kpis: [
          { label: 'SOMMEIL', value: '7.2', tone: 'green' },
          { label: 'FATIGUE', value: '6.1', tone: 'orange' },
          { label: 'COURBATURES', value: '6.8', tone: 'green' },
          { label: 'HUMEUR', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'ALERTES DU MATIN',
        alerts: [
          { name: 'L. Moreau', detail: 'Sommeil 4 h · fatigue 8/10 · readiness 58', action: 'Adapter' },
          { name: 'K. Nakamura', detail: 'Courbatures élevées après le bloc de mardi', action: 'Adapter' },
        ],
        chartLabel: 'READINESS GROUPE · 14 DERNIERS JOURS',
      },
      planning: {
        title: 'Microcycle · S12 → match dimanche',
        legendTarget: 'Cible',
        legendActual: 'Réalisée',
        days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Jeudi : volume −30 % · pas de sprint' },
          { name: 'T. Mendes', detail: 'Protocole réathlé · 30 min individualisé' },
        ],
      },
      builder: {
        title: 'Séance jeudi · bloc intensité',
        sub: 'Charge estimée 445 UA · cible 460',
        badge: 'DANS LA CIBLE',
        blocks: [
          { label: 'Échauffement + activation', time: '12 min', load: '48 UA' },
          { label: 'Bloc pressing · 8v8', time: '24 min', load: '186 UA' },
          { label: 'Vitesse · sprints lancés', time: '15 min', load: '124 UA' },
          { label: 'Jeu réduit + retour au calme', time: '14 min', load: '87 UA' },
        ],
        workout: {
          title: 'Workout individuel · L. Moreau',
          stamp: 'Publié vers l’app joueur',
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / côté · mobilité hanche 8 min. Généré depuis le protocole ischio, charge déduite de la séance collective.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Séance jeudi · bloc 2 / 4',
        meta: '20:34 · 17 PRÉSENTS',
        chartLabel: 'CHARGE CUMULÉE VS PLAN · TEMPS RÉEL',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau à 92 % de sa cible dès le bloc 2. L’écarter du bloc vitesse ?',
          primary: 'Écarter',
          secondary: 'Maintenir',
        },
      },
      share: {
        title: 'Rapport hebdo · S12',
        stamp: 'GÉNÉRÉ AUTOMATIQUEMENT',
        body: 'Charge collective conforme au plan (−2 %). Readiness en hausse. 2 joueurs en adaptation, 1 protocole de reprise en cours.',
        avatars: ['HC', 'AS', 'KI', 'PR'],
        shared: 'Partagé avec 4 membres du staff',
        commentAuthor: 'HEAD COACH · 09:12',
        comment: 'Vu pour Moreau. On adapte le bloc de jeudi comme proposé.',
        push: 'Disponibilités poussées vers la convocation de dimanche : 15 aptes, 2 à surveiller, 1 indisponible.',
      },
    },
  },
  compatible: {
    kicker: 'COMPATIBILITÉ',
    title: 'Connectez WHOOP, importez tout export GPS.',
    body: 'Les systèmes GPS sortent un CSV ; les colonnes sont reconnues au premier import, puis mémorisées. WHOOP se connecte par son API et envoie les mesures de la nuit dans le check-in du matin. Cent joueurs peuvent connecter leur bracelet.',
    badge: 'NOUVEAU',
    whoopTitle: 'WHOOP pré-remplit le check-in du matin.',
    points: [
      'Score de récupération du jour',
      'Durée et performance de sommeil',
      'VFC et fréquence cardiaque au repos',
    ],
    cta: 'Voir le check-in',
    href: '/fr/features/check-in/',
    note: 'Marques et logos cités appartiennent à leurs propriétaires respectifs. STRIVN est indépendant de ces sociétés.',
  },
  playerApp: {
    index: '03',
    kicker: 'CÔTÉ JOUEUR',
    title: 'Vos joueurs répondent en vingt secondes.',
    body: 'L’app joueur demande trois choses, au bon moment : le wellness au réveil, le RPE après la séance, le workout du jour. Chaque réponse prend vingt secondes, et la relance part seule.',
    points: [
      { icon: 'moon', label: 'Questionnaire wellness au réveil, en 20 secondes' },
      { icon: 'gauge', label: 'RPE post-séance en un geste, notification incluse' },
      { icon: 'dumbbell', label: 'Workouts individuels avec vidéos et consignes' },
      { icon: 'calendar', label: 'Convocations, réponses et disponibilité' },
    ],
    note: 'STRIVN Player se télécharge sur l’App Store et Google Play. Un joueur sans l’app répond depuis un lien.',
    cta: 'Découvrir l’app joueur',
    href: '/fr/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Bonjour, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness du matin',
        badge: '20 s',
        rows: [
          { label: 'Sommeil', value: 4 },
          { label: 'Fatigue', value: 3 },
          { label: 'Courbatures', value: 4 },
        ],
        submit: 'Envoyer',
      },
      rpe: { title: 'RPE · séance d’hier', value: '7' },
      workout: { title: 'Workout du jour · prévention', meta: '3 exercices · 12 min · vidéos incluses' },
    },
  },
  platform: {
    index: '04',
    kicker: 'TOUTE L’ÉQUIPE',
    title: 'Convoquez, soignez, planifiez et rapportez au même endroit.',
    body: 'Convocations, présences, infirmerie, séances et rapports vivent dans le même espace que le monitoring, avec un droit d’accès par rôle pour chaque membre du staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Charge, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'Import GPS, RPE, charge interne et externe, ACWR et alertes : le staff performance y commence sa journée.',
        cta: 'Charge & RPE en détail',
        href: '/fr/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Tests & évaluations',
        badge: 'MONITORING',
        badgeTone: 'green',
        body: 'Sprint, VMA, CMJ, tests techniques : les batteries se suivent dans le temps et alimentent les programmes individuels.',
        cta: 'Tests en détail',
        href: '/fr/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Convocations & RSVP',
        body: 'Convoquez en un clic ; les réponses reviennent dans la journée et l’effectif se met à jour seul.',
        cta: 'En détail',
        href: '/fr/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Infirmerie',
        body: 'Déclarez la blessure une fois ; le retour au jeu et les convocations suivent, visibles par le staff autorisé.',
        cta: 'En détail',
        href: '/fr/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programmes individuels',
        body: 'Fixez des objectifs et des exercices reliés aux données de chaque joueur.',
        cta: 'En détail',
        href: '/fr/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Séances & tactique',
        body: 'Préparez les séances et les tableaux depuis l’état de forme du groupe.',
        cta: 'En détail',
        href: '/fr/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Séance & match en direct',
        body: 'Saisissez présences, temps de jeu et événements au bord du terrain.',
        cta: 'En détail',
        href: '/fr/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Rapports, IA & dashboards',
        body: 'Recevez des comptes-rendus rédigés par l’IA et composez vos dashboards, partagés avec le staff et la direction.',
        cta: 'En détail',
        href: '/fr/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTÉGRÉES',
    title: 'Interrogez toutes vos données en une question.',
    body: 'L’IA lit la charge, le wellness, le GPS et l’historique médical ensemble, quatre sources à la fois. Quand une question mérite un graphique, elle le construit et vous l’épinglez à vos dashboards.',
    console: {
      title: 'Assistant IA',
      badge: 'IA · ANALYSE CONTINUE',
      q: 'Compare les métriques de ce match avec le précédent, et construis une visualisation.',
      aIntro: 'Comparaison établie sur les exports GPS des matchs J14 et J13 :',
      sources: 'SOURCES · GPS MATCH J14 · GPS MATCH J13',
      chartTitle: 'Match J14 vs J13 · métriques GPS',
      legend: ['J13', 'J14'],
      metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'CHARGE'],
      insight: 'HSR +9 % et sprints +21 % pour un volume quasi stable : l’intensité progresse sans surcoût de charge.',
      pin: 'Épingler au dashboard',
      refine: 'Affiner la question',
      signalTitle: 'Signal remonté par l’IA, sans qu’on lui demande',
      signalBody: 'Sommeil du groupe en baisse de 12 % depuis le passage à 2 matchs / semaine.',
      signalCta: 'Examiner',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Synthèse du matin',
        body: 'Recevez l’état du groupe résumé par l’IA avant la séance : readiness, alertes et ajustements proposés.',
      },
      {
        icon: 'radar',
        title: 'Détection de signaux',
        body: 'L’IA croise en continu charge, wellness et historique médical. Les dérives remontent avant la blessure.',
      },
      {
        icon: 'layout',
        title: 'Dashboards à la demande',
        body: 'Posez une question ; l’IA construit la visualisation qui y répond, puis vous l’épinglez à vos dashboards en un clic.',
      },
      {
        icon: 'file-text',
        title: 'Rapports rédigés par l’IA',
        body: 'Recevez les comptes-rendus hebdomadaires et post-match rédigés par l’IA, prêts à transmettre à la direction.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Composez vos dashboards, ou laissez l’IA les générer.',
      body: 'Une bibliothèque de widgets pour composer vos rapports : charge, GPS, wellness, tests, disponibilité. Pour chaque question ponctuelle, une visualisation générée à la volée, prête à être épinglée.',
      points: [
        'Widgets charge, GPS, wellness, tests et disponibilité',
        'Composition en glisser-déposer, par équipe ou par joueur',
        'Visualisations générées par l’IA, épinglables en un clic',
        'Partage en lecture à la direction et au staff élargi',
      ],
      cta: 'Voir la BI en détail',
      href: '/fr/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVAINCRE LE STAFF',
    title: 'Commencez seul, puis embarquez le staff avec le dossier.',
    body: 'Trois étapes, presque toujours les mêmes : un préparateur adopte STRIVN, montre ce que les données changent, et le staff le rejoint. Le dossier staff résume l’argument pour un head coach ou une direction de club ; vous l’envoyez en un lien ou un PDF.',
    steps: [
      {
        title: 'Vous adoptez STRIVN',
        body: 'Import GPS, wellness et suivi de charge sur votre équipe, sans engagement.',
      },
      {
        title: 'Vous partagez le dossier staff',
        body: 'Un lien ou un PDF qui présente la valeur pour chaque rôle.',
      },
      {
        title: 'Le staff rejoint votre espace',
        body: 'Head coach, staff médical, adjoints : une vue par rôle, les mêmes données.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIER STAFF',
      title: 'La valeur pour chaque rôle',
      roles: [
        { icon: 'users', body: 'Head coach : disponibilité réelle à la convocation' },
        { icon: 'heart-pulse', body: 'Staff médical : infirmerie et protocoles de retour partagés' },
        { icon: 'clipboard', body: 'Adjoints : séances reliées à l’état du groupe' },
        { icon: 'shield', body: 'Direction : une équipe structurée, sans investissement initial' },
      ],
      copyBtn: 'Copier le lien',
      pdfBtn: 'Télécharger le PDF',
      note: 'CONÇU POUR ÊTRE ENVOYÉ TEL QUEL',
    },
  },
  solutions: {
    index: '07',
    kicker: 'PAR FONCTION',
    title: 'Choisissez votre page selon votre rôle dans le staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Préparateurs physiques',
        body: 'Tout le détail : monitoring, tests, programmes et méthodologie.',
        cta: 'Consulter la page préparation physique',
        href: '/fr/preparateurs-physiques/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Head coach & staff',
        body: 'Convocations, présences, séances, tactique : l’intendance d’équipe au quotidien.',
        cta: 'Voir la gestion d’équipe',
        href: '/fr/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'TARIFS',
    title: 'Quatre paliers. Le gratuit tient toute la saison.',
    note: 'Le palier Semi-Pro reprend le croisement GPS, RPE et wellness que vous faites encore à la main. Chaque nouveau compte en dispose pendant 30 jours, sans carte.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Les questions que posent les staffs.',
    body: 'Le rôle des joueurs, la gouvernance de l’espace et les délais de mise en place.',
    contactTitle: 'Une autre question ?',
    contactBody: 'Écrivez-nous. Nous répondons nous-mêmes.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Comment importer mes données GPS ?',
        a: 'Par export CSV, depuis Catapult, STATSports ou tout autre système. La correspondance des colonnes est mémorisée au premier import ; les suivants prennent quelques secondes.',
      },
      {
        q: 'Qui garde le contrôle de l’espace d’équipe ?',
        a: 'Vous. Vous créez l’espace, invitez le staff et définissez les droits de chacun, sans validation du club.',
      },
      {
        q: 'Quel est le délai de mise en place ?',
        a: 'Quelques minutes : créez l’espace, ajoutez vos joueurs, importez votre première séance. Les 30 premiers jours sont au Semi-Pro, sans carte ; l’historique se construit au fil des semaines.',
      },
      {
        q: 'Pourquoi le plan Free est-il gratuit ?',
        a: 'Parce qu’un coach doit pouvoir structurer son travail sans demander un budget. Free couvre une équipe, ses joueurs sans plafond et une place de staff, pour toujours. Les paliers payants ouvrent la seconde place de staff, puis l’import GPS, le médical et le staff sans plafond.',
      },
      {
        q: 'Est-ce adapté au football amateur et semi-professionnel ?',
        a: 'Oui, c’est le terrain de STRIVN : des staffs de deux ou trois personnes, des moyens mesurés, et des joueurs qui répondent depuis une seule app.',
      },
      {
        q: 'Préparateur : comment obtenir l’adhésion du head coach ?',
        a: 'Commencez avec vos propres données, puis transmettez le dossier staff depuis le site. Le head coach lit la disponibilité réelle dans la convocation, et l’argument est fait.',
      },
    ],
  },
  finalCta: {
    kicker: 'COMMENCEZ SEUL, GRATUITEMENT',
    title: 'Créez votre espace et importez votre première séance.',
    body: 'Les 30 premiers jours sont au Semi-Pro, import GPS compris, sans carte. Ensuite le plan Free fait tourner l’équipe toute la saison, et votre staff vous rejoint quand il voit vos premiers rapports.',
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Partager le dossier staff',
    trust: 'SANS CARTE BANCAIRE · SANS VALIDATION DU CLUB · VOS DONNÉES RESTENT LES VÔTRES',
  },
  footer: {
    tagline: 'Le monitoring d’un staff professionnel, sans le budget d’un club professionnel.',
    body: 'STRIVN réunit le monitoring de la performance et l’intendance d’équipe dans un seul espace partagé par le staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUIT',
        links: [
          { label: 'Plateforme', href: '/fr/solutions/' },
          { label: 'Fonctionnalités', href: '/fr/features/' },
          { label: 'Tarifs', href: '/fr/pricing/' },
          { label: 'FAQ', href: '/fr/#faq' },
          { label: 'Blog', href: '/fr/blog/' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
        ],
      },
      {
        title: 'RESSOURCES',
        links: [
          { label: 'Support', href: '/fr/support/' },
          { label: 'Confidentialité', href: '/fr/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratuit pour une équipe, toute la saison',
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: HomeContent = {
  meta: {
    title: 'STRIVN | The operating system for performance staff',
    description:
      'GPS import, wellness, load and planning in one tool. The AI reads the squad data and tells you who to hold back. Free for one team, shared by the whole staff.',
  },
  hero: {
    eyebrow: 'Built with professional staffs',
    titleMuted: 'The operating system',
    titleMain: 'for performance staff.',
    sub: 'GPS import, wellness, load and planning in one tool. The AI reads the squad data and tells you who is fit, who to reduce, who to watch. One daily read, shared by the whole staff.',
    primaryCta: 'Start for free',
    secondaryCta: 'See the monitoring workflow',
    shot: {
      title: 'Today’s readiness · Olympique Montverne',
      stamp: 'WED 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: '7-DAY LOAD', value: '2,340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALERTS', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'SQUAD · READINESS PER PLAYER',
      rows: [
        { name: 'A. Diallo', status: 'Ready', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Reduce', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Monitor', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Ready', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Ready', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Sleep', value: '7.2', tone: 'green' },
          { label: 'Fatigue', value: '6.1', tone: 'orange' },
          { label: 'Mood', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'GPS import complete', sub: '18 players · Tuesday session' },
      alert: {
        title: 'Load alert',
        body: 'L. Moreau — ACWR 1.31, third week above threshold. Reduction proposed for Thursday.',
      },
      micro: { title: 'Microcycle · W12' },
      ai: {
        title: 'AI assistant',
        q: 'Who is fit for Sunday?',
        a: '14 players fit. L. Moreau to monitor (ACWR 1.31), T. Mendes in protocol — estimated return D+18.',
        sources: 'SOURCES · ATTENDANCE, LOAD, MEDICAL LOG',
      },
    },
  },
  spectre: {
    kicker: 'ONE SYSTEM, FROM MONDAY TO MATCHDAY',
    title: 'Run the whole week in one space.',
    steps: [
      { icon: 'calendar', label: 'Planning' },
      { icon: 'send', label: 'Call-ups' },
      { icon: 'clipboard', label: 'Session building' },
      { icon: 'radio', label: 'Live session & match' },
      { icon: 'activity', label: 'Monitoring & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Medical room' },
      { icon: 'bar-chart', label: 'Reports & BI' },
    ],
    note: 'Every module feeds the others. Data entered once serves the seven others.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'teams run their daily work on STRIVN',
    statSub: 'CLUBS AND ACADEMIES · FROM REGIONAL TO PROFESSIONAL',
    methodKicker: 'METHODOLOGY',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'THE REALITY',
    title: 'Bring GPS, RPE and wellness into one read.',
    body: 'Every morning, the same operations: export the GPS, consolidate the RPEs, chase the questionnaires, cross three files to establish the squad’s state of form. STRIVN takes over that last step and computes it overnight.',
    beforeLabel: 'BEFORE · FRAGMENTED TOOLS',
    beforeChips: [
      { icon: 'table', label: 'Scattered Excel workbooks' },
      { icon: 'satellite', label: 'Manual GPS exports' },
      { icon: 'file-text', label: 'Paper wellness questionnaires' },
      { icon: 'message-circle', label: 'RPEs collected over chat' },
      { icon: 'bar-chart', label: 'Reports rebuilt every week' },
      { icon: 'copy', label: 'One version per staff member' },
    ],
    afterLabel: 'WITH STRIVN · ONE UNIFIED SYSTEM',
    afterRows: [
      { icon: 'satellite', label: 'GPS import from the CSV export' },
      { icon: 'moon', label: 'Daily wellness questionnaire, on mobile' },
      { icon: 'gauge', label: 'RPE collected after every session' },
      { icon: 'activity', label: 'Load and ACWR computed continuously' },
      { icon: 'bell', label: 'Readiness alerts before training' },
      { icon: 'users', label: 'Accessible to the whole staff, in real time' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'THE WORKFLOW',
    title: 'Measure the load, plan the week, run the session.',
    sub: 'STRIVN reads your data, then plans the load, builds the sessions and workouts, and runs them live. Six steps, from the GPS file to Monday’s report.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS IMPORT',
        title: 'Import the GPS export, whatever the sensor.',
        body: 'Drop the CSV from Catapult, STATSports or any other system. Columns are recognised on the first import and remembered; the session is attached to the calendar, player by player, and later imports take a few seconds.',
        points: [
          'Direct import of a CSV export',
          'Column mapping remembered',
          'Distance, sprints and HSR per player',
          'Session linked to the team calendar',
        ],
        cta: 'See GPS import',
        href: '/en/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Know who is fit before the session.',
        body: 'Players answer the check-in on waking, in twenty seconds. Before the session you know who is fit, who is flagging and who needs holding back.',
        points: [
          'Wellness questionnaire on waking, on mobile',
          'Readiness score per player, weightable',
          'Alerts on threshold crossing',
          'Individual and collective trend',
        ],
        cta: 'See wellness',
        href: '/en/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'LOAD PLANNING',
        title: 'Plan the week’s load in AU.',
        body: 'Set a daily target; STRIVN computes the ACWR over 7 and 28 days and flags the gaps. The microcycle is built on the load the squad actually absorbed.',
        points: [
          'Target and actual load, day by day',
          'ACWR and monotony computed automatically',
          'Match-to-match microcycle periodisation',
          'Individual adjustments, applied immediately',
        ],
        cta: 'See planning',
        href: '/en/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'SESSION & WORKOUT BUILDER',
        title: 'Build the session from the load plan.',
        body: 'Assemble blocks, drills and target loads; the estimated load shows before the session. Individual workouts generate from the same data, return protocols included.',
        points: [
          'Library of reusable drills and blocks',
          'Estimated load per block, before the session',
          'Individual workouts: strength, prevention, return to play',
          'Published to the players’ app in one tap',
        ],
        cta: 'See the session builder',
        href: '/en/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'LIVE SESSION',
        title: 'Track the load during the session, block by block.',
        body: 'Tick attendance pitch-side; the load accumulates block by block and the gap to the plan shows live. You adjust during the session.',
        points: [
          'Pitch-side check-in and participation',
          'Cumulative load in real time, per player',
          'Gap vs planned load, block by block',
        ],
        cta: 'See the live session',
        href: '/en/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'STAFF SHARING',
        title: 'Share the same read with the whole staff.',
        body: 'The weekly report generates automatically, the staff annotates it, and availability feeds Sunday’s call-up. The head coach, the physio and the assistants read the same data, each with their own rights.',
        points: [
          'Readiness view shared with the whole staff',
          'Weekly report generated automatically',
          'Comments and decisions centralised',
          'Role-based access rights',
        ],
        cta: 'See staff sharing',
        href: '/en/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'session_0806_catapult.csv',
        fileSub: '18 players recognised · mapping applied',
        colsLabel: 'RECOGNISED COLUMNS',
        cols: [
          { from: 'Total Distance (m)', to: 'Total distance' },
          { from: 'HSR >19.8 km/h (m)', to: 'High-speed running' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'External load' },
        ],
        done: 'Import complete · linked to “Tuesday session · intensity block”',
      },
      readiness: {
        title: 'Morning wellness · 16 / 18 responses',
        stamp: '07:45',
        kpis: [
          { label: 'SLEEP', value: '7.2', tone: 'green' },
          { label: 'FATIGUE', value: '6.1', tone: 'orange' },
          { label: 'SORENESS', value: '6.8', tone: 'green' },
          { label: 'MOOD', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'MORNING ALERTS',
        alerts: [
          { name: 'L. Moreau', detail: 'Sleep 4 h · fatigue 8/10 · readiness 58', action: 'Adjust' },
          { name: 'K. Nakamura', detail: 'High soreness after Tuesday’s block', action: 'Adjust' },
        ],
        chartLabel: 'SQUAD READINESS · LAST 14 DAYS',
      },
      planning: {
        title: 'Microcycle · W12 → Sunday’s match',
        legendTarget: 'Target',
        legendActual: 'Actual',
        days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Thursday: volume −30% · no sprints' },
          { name: 'T. Mendes', detail: 'Return protocol · 30 min individualised' },
        ],
      },
      builder: {
        title: 'Thursday session · intensity block',
        sub: 'Estimated load 445 AU · target 460',
        badge: 'ON TARGET',
        blocks: [
          { label: 'Warm-up + activation', time: '12 min', load: '48 AU' },
          { label: 'Pressing block · 8v8', time: '24 min', load: '186 AU' },
          { label: 'Speed · flying sprints', time: '15 min', load: '124 AU' },
          { label: 'Small-sided game + cool-down', time: '14 min', load: '87 AU' },
        ],
        workout: {
          title: 'Individual workout · L. Moreau',
          stamp: 'Published to the player app',
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / side · hip mobility 8 min. Generated from the hamstring protocol, load deducted from the team session.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Thursday session · block 2 / 4',
        meta: '20:34 · 17 PRESENT',
        chartLabel: 'CUMULATIVE LOAD VS PLAN · REAL TIME',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau at 92% of his target by block 2. Pull him from the speed block?',
          primary: 'Pull out',
          secondary: 'Keep in',
        },
      },
      share: {
        title: 'Weekly report · W12',
        stamp: 'GENERATED AUTOMATICALLY',
        body: 'Collective load in line with the plan (−2%). Readiness trending up. 2 players in adaptation, 1 return protocol in progress.',
        avatars: ['HC', 'AS', 'PH', 'SC'],
        shared: 'Shared with 4 staff members',
        commentAuthor: 'HEAD COACH · 09:12',
        comment: 'Seen for Moreau. We adapt Thursday’s block as proposed.',
        push: 'Availability pushed to Sunday’s call-up: 15 fit, 2 to monitor, 1 unavailable.',
      },
    },
  },
  compatible: {
    kicker: 'COMPATIBILITY',
    title: 'Connect WHOOP, import any GPS export.',
    body: 'GPS systems export a CSV; the columns are recognised on the first import, then remembered. WHOOP connects through its API and sends the night’s measurements into the morning check-in. A hundred players can connect their strap.',
    badge: 'NEW',
    whoopTitle: 'WHOOP pre-fills the morning check-in.',
    points: [
      'The day’s recovery score',
      'Sleep duration and performance',
      'HRV and resting heart rate',
    ],
    cta: 'See the check-in',
    href: '/en/features/check-in/',
    note: 'Trademarks and logos are the property of their respective owners. STRIVN is independent of these companies.',
  },
  playerApp: {
    index: '03',
    kicker: 'PLAYER SIDE',
    title: 'Your players answer in twenty seconds.',
    body: 'The player app asks for three things, at the right moment: wellness on waking, RPE after the session, the day’s workout. Each answer takes twenty seconds, and the reminder goes out on its own.',
    points: [
      { icon: 'moon', label: 'Wellness questionnaire on waking, in 20 seconds' },
      { icon: 'gauge', label: 'Post-session RPE in one tap, notification included' },
      { icon: 'dumbbell', label: 'Individual workouts with videos and instructions' },
      { icon: 'calendar', label: 'Call-ups, responses and availability' },
    ],
    note: 'STRIVN Player downloads from the App Store and Google Play. A player without the app answers from a link.',
    cta: 'See the player app',
    href: '/en/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Hello, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Morning wellness',
        badge: '20 s',
        rows: [
          { label: 'Sleep', value: 4 },
          { label: 'Fatigue', value: 3 },
          { label: 'Soreness', value: 4 },
        ],
        submit: 'Send',
      },
      rpe: { title: 'RPE · yesterday’s session', value: '7' },
      workout: { title: 'Today’s workout · prevention', meta: '3 exercises · 12 min · videos included' },
    },
  },
  platform: {
    index: '04',
    kicker: 'THE WHOLE TEAM',
    title: 'Call up, treat, plan and report in the same place.',
    body: 'Call-ups, attendance, medical log, sessions and reports live in the same space as the monitoring, with access rights per role for every staff member.',
    featured: [
      {
        icon: 'activity',
        title: 'Load, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'GPS import, RPE, internal and external load, ACWR and alerts: the performance staff starts the day here.',
        cta: 'Load & RPE in detail',
        href: '/en/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Tests & assessments',
        badge: 'MONITORING',
        badgeTone: 'green',
        body: 'Sprint, MAS, CMJ, technical tests: batteries are tracked over time and feed the individual programmes.',
        cta: 'Tests in detail',
        href: '/en/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Call-ups & RSVP',
        body: 'Call up in one click; responses come back within the day and the squad list updates itself.',
        cta: 'In detail',
        href: '/en/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Medical room',
        body: 'Log the injury once; return to play and call-ups follow, visible to authorised staff.',
        cta: 'In detail',
        href: '/en/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individual programmes',
        body: 'Set goals and drills linked to each player’s data.',
        cta: 'In detail',
        href: '/en/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sessions & tactics',
        body: 'Prepare sessions and boards from the squad’s state of form.',
        cta: 'In detail',
        href: '/en/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Live session & match',
        body: 'Capture attendance, playing time and events pitch-side.',
        cta: 'In detail',
        href: '/en/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Reports, AI & dashboards',
        body: 'Receive AI-written summaries and compose your dashboards, shared with staff and board.',
        cta: 'In detail',
        href: '/en/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'AI & BI BUILT IN',
    title: 'Query all your data in one question.',
    body: 'The AI reads load, wellness, GPS and medical history together, four sources at once. When a question deserves a chart, it builds one and you pin it to your dashboards.',
    console: {
      title: 'AI assistant',
      badge: 'AI · CONTINUOUS ANALYSIS',
      q: 'Compare this match’s metrics with the previous one, and build a visualisation.',
      aIntro: 'Comparison based on the GPS exports of matches MD14 and MD13:',
      sources: 'SOURCES · GPS MATCH MD14 · GPS MATCH MD13',
      chartTitle: 'Match MD14 vs MD13 · GPS metrics',
      legend: ['MD13', 'MD14'],
      metrics: ['DISTANCE', 'HSR', 'SPRINTS', 'LOAD'],
      insight: 'HSR +9% and sprints +21% on near-stable volume: intensity is rising with no extra load cost.',
      pin: 'Pin to dashboard',
      refine: 'Refine the question',
      signalTitle: 'Signal raised by the AI, without being asked',
      signalBody: 'Squad sleep down 12% since moving to 2 matches per week.',
      signalCta: 'Examine',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Morning briefing',
        body: 'Receive the squad’s state summarised by the AI before the session: readiness, alerts and proposed adjustments.',
      },
      {
        icon: 'radar',
        title: 'Signal detection',
        body: 'The AI continuously crosses load, wellness and medical history. Drifts surface before the injury.',
      },
      {
        icon: 'layout',
        title: 'Dashboards on demand',
        body: 'Ask a question; the AI builds the visualisation that answers it, then you pin it to your dashboards in one click.',
      },
      {
        icon: 'file-text',
        title: 'AI-written reports',
        body: 'Receive the weekly and post-match summaries written by the AI, ready to hand to the board.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Compose your dashboards, or let the AI generate them.',
      body: 'A widget library to compose your reports: load, GPS, wellness, tests, availability. For every one-off question, a visualisation generated on the fly, ready to pin.',
      points: [
        'Load, GPS, wellness, tests and availability widgets',
        'Drag-and-drop composition, per team or per player',
        'AI-generated visualisations, pinnable in one click',
        'Read-only sharing with board and extended staff',
      ],
      cta: 'See BI in detail',
      href: '/en/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'WINNING OVER THE STAFF',
    title: 'Start alone, then bring the staff in with the dossier.',
    body: 'Three steps, almost always the same: an S&C coach adopts STRIVN, shows what the data changes, and the staff joins. The staff dossier sums up the argument for a head coach or club board; you send it as a link or a PDF.',
    steps: [
      {
        title: 'You adopt STRIVN',
        body: 'GPS import, wellness and load tracking on your team, no commitment.',
      },
      {
        title: 'You share the staff dossier',
        body: 'A link or a PDF that presents the value for each role.',
      },
      {
        title: 'The staff joins your space',
        body: 'Head coach, medical staff, assistants: one view per role, the same data.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFF DOSSIER',
      title: 'The value for each role',
      roles: [
        { icon: 'users', body: 'Head coach: real availability at call-up time' },
        { icon: 'heart-pulse', body: 'Medical staff: shared medical log and return protocols' },
        { icon: 'clipboard', body: 'Assistants: sessions linked to the squad’s state' },
        { icon: 'shield', body: 'Board: a structured team, with no upfront investment' },
      ],
      copyBtn: 'Copy the link',
      pdfBtn: 'Download the PDF',
      note: 'DESIGNED TO BE SENT AS IT IS',
    },
  },
  solutions: {
    index: '07',
    kicker: 'BY ROLE',
    title: 'Pick your page by your role on the staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'S&C coaches',
        body: 'The full detail: monitoring, tests, programmes and methodology.',
        cta: 'See the S&C page',
        href: '/en/sc-coaches/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Head coach & staff',
        body: 'Call-ups, attendance, sessions, tactics: the team’s daily logistics.',
        cta: 'See team management',
        href: '/en/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRICING',
    title: 'Four tiers. The free one runs the whole season.',
    note: 'The Semi-Pro tier takes over the GPS, RPE and wellness crossing you still do by hand. Every new account has it for 30 days, no card.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'The questions staffs ask.',
    body: 'The players’ role, space governance and time to get set up.',
    contactTitle: 'Another question?',
    contactBody: 'Write to us. We answer ourselves.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'How do I import my GPS data?',
        a: 'Via CSV export, from Catapult, STATSports or any other system. Column mapping is remembered on the first import; later ones take a few seconds.',
      },
      {
        q: 'Who keeps control of the team space?',
        a: 'You do. You create the space, invite the staff and define each person’s rights, with no club validation.',
      },
      {
        q: 'How long does setup take?',
        a: 'A few minutes: create the space, add your players, import your first session. The first 30 days are on Semi-Pro, no card; history builds up over the weeks.',
      },
      {
        q: 'Why is the Free plan free?',
        a: 'Because a coach must be able to structure their work without asking for budget. Free covers one team, unlimited players and one staff seat, for ever. The paid tiers open the second staff seat, then GPS import, the medical board and unlimited staff.',
      },
      {
        q: 'Is it suited to amateur and semi-professional football?',
        a: 'Yes, that is STRIVN’s home ground: staffs of two or three people, measured means, and players who answer from a single app.',
      },
      {
        q: 'S&C coach: how do I get the head coach on board?',
        a: 'Start with your own data, then share the staff dossier from the site. The head coach reads real availability in the call-up, and the argument is made.',
      },
    ],
  },
  finalCta: {
    kicker: 'START ALONE, FOR FREE',
    title: 'Create your space and import your first session.',
    body: 'The first 30 days are on Semi-Pro, GPS import included, no card. Then the Free plan runs the team for the whole season, and your staff joins once they see your first reports.',
    primaryCta: 'Create my space for free',
    secondaryCta: 'Share the staff dossier',
    trust: 'NO CREDIT CARD · NO CLUB APPROVAL · YOUR DATA STAYS YOURS',
  },
  footer: {
    tagline: 'A professional staff’s monitoring, without a professional club’s budget.',
    body: 'STRIVN brings performance monitoring and team logistics together in one space shared by the staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/en/solutions/' },
          { label: 'Features', href: '/en/features/' },
          { label: 'Pricing', href: '/en/pricing/' },
          { label: 'FAQ', href: '/en/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'S&C coaches', href: '/en/sc-coaches/' },
        ],
      },
      {
        title: 'RESOURCES',
        links: [
          { label: 'Support', href: '/en/support/' },
          { label: 'Privacy', href: '/en/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Free for one team, all season',
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: HomeContent = {
  meta: {
    title: 'STRIVN | Het besturingssysteem van de performance staff',
    description:
      'GPS-import, wellness, belasting en planning in één tool. De AI leest de groepsdata en geeft aan wie u moet ontzien. Gratis voor één team, gedeeld door de hele staf.',
  },
  hero: {
    eyebrow: 'Gebouwd met professionele staffen',
    titleMuted: 'Het besturingssysteem',
    titleMain: 'van de performance staff.',
    sub: 'GPS-import, wellness, belasting en planning in één tool. De AI leest de groepsdata en zegt u wie fit is, wie u moet ontzien en wie u in de gaten houdt. Eén dagelijkse lezing, gedeeld door de hele staf.',
    primaryCta: 'Gratis beginnen',
    secondaryCta: 'Bekijk de monitoring-workflow',
    shot: {
      title: 'Readiness vandaag · Olympique Montverne',
      stamp: 'WOE 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: 'BELASTING 7 D', value: '2.340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALERTS', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'SELECTIE · READINESS PER SPELER',
      rows: [
        { name: 'A. Diallo', status: 'Klaar', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Ontlasten', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Opvolgen', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Klaar', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Klaar', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Slaap', value: '7.2', tone: 'green' },
          { label: 'Vermoeidheid', value: '6.1', tone: 'orange' },
          { label: 'Stemming', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'GPS-import voltooid', sub: '18 spelers · training dinsdag' },
      alert: {
        title: 'Belastingsalert',
        body: 'L. Moreau — ACWR 1.31, derde week boven de drempel. Ontlasting voorgesteld voor donderdag.',
      },
      micro: { title: 'Microcyclus · W12' },
      ai: {
        title: 'AI-assistent',
        q: 'Wie is fit voor zondag?',
        a: '14 spelers fit. L. Moreau opvolgen (ACWR 1.31), T. Mendes in protocol — verwachte terugkeer D+18.',
        sources: 'BRONNEN · AANWEZIGHEID, BELASTING, MEDISCH DOSSIER',
      },
    },
  },
  spectre: {
    kicker: 'ÉÉN SYSTEEM, VAN MAANDAG TOT DE WEDSTRIJD',
    title: 'Laat de hele week draaien in één omgeving.',
    steps: [
      { icon: 'calendar', label: 'Planning' },
      { icon: 'send', label: 'Oproepingen' },
      { icon: 'clipboard', label: 'Trainingsopbouw' },
      { icon: 'radio', label: 'Live training & wedstrijd' },
      { icon: 'activity', label: 'Monitoring & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Ziekenboeg' },
      { icon: 'bar-chart', label: 'Rapporten & BI' },
    ],
    note: 'Elke module voedt de andere. Data die u één keer invoert, dient de zeven andere.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'teams draaien hun dagelijkse werking op STRIVN',
    statSub: 'CLUBS EN ACADEMIES · VAN REGIONAAL TOT PROFESSIONEEL',
    methodKicker: 'METHODOLOGIE',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'DE VASTSTELLING',
    title: 'Breng GPS, RPE en wellness samen in één lezing.',
    body: 'Elke ochtend dezelfde handelingen: de GPS exporteren, de RPE’s samenvoegen, de vragenlijsten opvolgen, drie bestanden kruisen om de toestand van de groep te bepalen. STRIVN neemt die laatste stap over en berekent ze ’s nachts.',
    beforeLabel: 'VOORDIEN · VERSNIPPERDE TOOLS',
    beforeChips: [
      { icon: 'table', label: 'Verspreide Excel-werkmappen' },
      { icon: 'satellite', label: 'Handmatige GPS-exports' },
      { icon: 'file-text', label: 'Wellnessvragenlijsten op papier' },
      { icon: 'message-circle', label: 'RPE’s verzameld via chat' },
      { icon: 'bar-chart', label: 'Rapporten wekelijks opnieuw opgebouwd' },
      { icon: 'copy', label: 'Eén versie per staflid' },
    ],
    afterLabel: 'MET STRIVN · ÉÉN UNIFORM SYSTEEM',
    afterRows: [
      { icon: 'satellite', label: 'GPS-import vanuit de CSV-export' },
      { icon: 'moon', label: 'Dagelijkse wellnessvragenlijst, op mobiel' },
      { icon: 'gauge', label: 'RPE verzameld na elke training' },
      { icon: 'activity', label: 'Belasting en ACWR doorlopend berekend' },
      { icon: 'bell', label: 'Readiness-alerts vóór de training' },
      { icon: 'users', label: 'Toegankelijk voor de hele staf, in realtime' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'DE WORKFLOW',
    title: 'Meet de belasting, plan de week, stuur de training.',
    sub: 'STRIVN leest uw data, plant dan de belasting, bouwt de trainingen en workouts, en stuurt ze live. Zes stappen, van het GPS-bestand tot het rapport van maandag.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS-IMPORT',
        title: 'Importeer de GPS-export, welke sensor ook.',
        body: 'Zet de CSV van Catapult, STATSports of eender welk ander systeem neer. De kolommen worden bij de eerste import herkend en onthouden; de training wordt aan de kalender gekoppeld, speler per speler, en volgende imports duren enkele seconden.',
        points: [
          'Directe import van een CSV-export',
          'Kolomtoewijzing onthouden',
          'Afstand, sprints en HSR per speler',
          'Training gekoppeld aan de teamkalender',
        ],
        cta: 'Bekijk de GPS-import',
        href: '/nl/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Weet wie fit is vóór de training.',
        body: 'Spelers beantwoorden de check-in bij het opstaan, in twintig seconden. Vóór de training weet u wie fit is, wie een signaal geeft en wie ontzien moet worden.',
        points: [
          'Wellnessvragenlijst bij het opstaan, op mobiel',
          'Readiness-score per speler, weegbaar',
          'Alerts bij overschrijding van drempels',
          'Individuele en collectieve trend',
        ],
        cta: 'Bekijk wellness',
        href: '/nl/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'BELASTINGSPLANNING',
        title: 'Plan de belasting van de week in AU.',
        body: 'Leg een dagelijks doel vast; STRIVN berekent de ACWR over 7 en 28 dagen en meldt de afwijkingen. De microcyclus wordt gebouwd op de belasting die de groep werkelijk absorbeerde.',
        points: [
          'Doel- en werkelijke belasting, dag per dag',
          'ACWR en monotonie automatisch berekend',
          'Periodisering van de microcyclus, wedstrijd na wedstrijd',
          'Individuele aanpassingen, meteen toegepast',
        ],
        cta: 'Bekijk de planning',
        href: '/nl/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'TRAININGS- & WORKOUTOPBOUW',
        title: 'Bouw de training vanuit het belastingsplan.',
        body: 'Stel blokken, oefeningen en doelbelastingen samen; de geschatte belasting verschijnt vóór de training. Individuele workouts worden gegenereerd uit dezelfde data, terugkeerprotocollen inbegrepen.',
        points: [
          'Bibliotheek van herbruikbare oefeningen en blokken',
          'Geschatte belasting per blok, vóór de training',
          'Individuele workouts: kracht, preventie, return to play',
          'In één beweging gepubliceerd naar de spelers-app',
        ],
        cta: 'Bekijk de trainingsbouwer',
        href: '/nl/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'TRAINING LIVE',
        title: 'Volg de belasting tijdens de training, blok per blok.',
        body: 'Vink de aanwezigheid af langs het veld; de belasting loopt blok per blok op en de afwijking t.o.v. het plan verschijnt live. U stuurt bij tijdens de training.',
        points: [
          'Aanwezigheid en deelname langs het veld',
          'Cumulatieve belasting in realtime, per speler',
          'Afwijking t.o.v. geplande belasting, blok per blok',
        ],
        cta: 'Bekijk de live training',
        href: '/nl/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'DELEN MET DE STAF',
        title: 'Deel dezelfde lezing met de hele staf.',
        body: 'Het weekrapport wordt automatisch gegenereerd, de staf annoteert het, en de beschikbaarheid voedt de selectie van zondag. Hoofdcoach, kinesist en assistenten lezen dezelfde data, elk met eigen rechten.',
        points: [
          'Readiness-overzicht gedeeld met de hele staf',
          'Weekrapport automatisch gegenereerd',
          'Opmerkingen en beslissingen gecentraliseerd',
          'Toegangsrechten per rol',
        ],
        cta: 'Bekijk het stafdelen',
        href: '/nl/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'training_0806_catapult.csv',
        fileSub: '18 spelers herkend · toewijzing toegepast',
        colsLabel: 'HERKENDE KOLOMMEN',
        cols: [
          { from: 'Total Distance (m)', to: 'Totale afstand' },
          { from: 'HSR >19.8 km/h (m)', to: 'Hoge-intensiteitsloop' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'Externe belasting' },
        ],
        done: 'Import voltooid · gekoppeld aan “Training dinsdag · intensiteitsblok”',
      },
      readiness: {
        title: 'Ochtendwellness · 16 / 18 antwoorden',
        stamp: '07:45',
        kpis: [
          { label: 'SLAAP', value: '7.2', tone: 'green' },
          { label: 'VERMOEIDHEID', value: '6.1', tone: 'orange' },
          { label: 'SPIERPIJN', value: '6.8', tone: 'green' },
          { label: 'STEMMING', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'OCHTENDALERTS',
        alerts: [
          { name: 'L. Moreau', detail: 'Slaap 4 u · vermoeidheid 8/10 · readiness 58', action: 'Aanpassen' },
          { name: 'K. Nakamura', detail: 'Veel spierpijn na het blok van dinsdag', action: 'Aanpassen' },
        ],
        chartLabel: 'READINESS GROEP · LAATSTE 14 DAGEN',
      },
      planning: {
        title: 'Microcyclus · W12 → wedstrijd zondag',
        legendTarget: 'Doel',
        legendActual: 'Werkelijk',
        days: ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Donderdag: volume −30% · geen sprints' },
          { name: 'T. Mendes', detail: 'Terugkeerprotocol · 30 min geïndividualiseerd' },
        ],
      },
      builder: {
        title: 'Training donderdag · intensiteitsblok',
        sub: 'Geschatte belasting 445 AU · doel 460',
        badge: 'BINNEN DOEL',
        blocks: [
          { label: 'Opwarming + activatie', time: '12 min', load: '48 AU' },
          { label: 'Pressingblok · 8v8', time: '24 min', load: '186 AU' },
          { label: 'Snelheid · vliegende sprints', time: '15 min', load: '124 AU' },
          { label: 'Klein spel + cooling-down', time: '14 min', load: '87 AU' },
        ],
        workout: {
          title: 'Individuele workout · L. Moreau',
          stamp: 'Gepubliceerd naar de spelers-app',
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / kant · heupmobiliteit 8 min. Gegenereerd uit het hamstringprotocol, belasting afgetrokken van de groepstraining.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Training donderdag · blok 2 / 4',
        meta: '20:34 · 17 AANWEZIG',
        chartLabel: 'CUMULATIEVE BELASTING VS PLAN · REALTIME',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau op 92% van zijn doel al in blok 2. Hem uit het snelheidsblok halen?',
          primary: 'Eruit halen',
          secondary: 'Behouden',
        },
      },
      share: {
        title: 'Weekrapport · W12',
        stamp: 'AUTOMATISCH GEGENEREERD',
        body: 'Collectieve belasting conform het plan (−2%). Readiness in stijgende lijn. 2 spelers in aanpassing, 1 terugkeerprotocol lopend.',
        avatars: ['HC', 'AS', 'KI', 'FT'],
        shared: 'Gedeeld met 4 stafleden',
        commentAuthor: 'HOOFDCOACH · 09:12',
        comment: 'Gezien voor Moreau. We passen het blok van donderdag aan zoals voorgesteld.',
        push: 'Beschikbaarheid doorgestuurd naar de selectie van zondag: 15 fit, 2 op te volgen, 1 onbeschikbaar.',
      },
    },
  },
  compatible: {
    kicker: 'COMPATIBILITEIT',
    title: 'Verbind WHOOP, importeer elke GPS-export.',
    body: 'GPS-systemen exporteren een CSV; de kolommen worden bij de eerste import herkend en daarna onthouden. WHOOP verbindt via zijn API en stuurt de metingen van de nacht naar de check-in van de ochtend. Honderd spelers kunnen hun band verbinden.',
    badge: 'NIEUW',
    whoopTitle: 'WHOOP vult de ochtendcheck-in vooraf in.',
    points: [
      'Herstelscore van de dag',
      'Slaapduur en slaapprestatie',
      'HRV en hartslag in rust',
    ],
    cta: 'Bekijk de check-in',
    href: '/nl/features/check-in/',
    note: 'Vermelde merken en logo’s zijn eigendom van hun respectieve eigenaars. STRIVN staat los van deze bedrijven.',
  },
  playerApp: {
    index: '03',
    kicker: 'SPELERSZIJDE',
    title: 'Uw spelers antwoorden in twintig seconden.',
    body: 'De spelers-app vraagt drie dingen, op het juiste moment: wellness bij het opstaan, RPE na de training, de workout van de dag. Elk antwoord kost twintig seconden, en de herinnering vertrekt vanzelf.',
    points: [
      { icon: 'moon', label: 'Wellnessvragenlijst bij het opstaan, in 20 seconden' },
      { icon: 'gauge', label: 'RPE na de training in één beweging, notificatie inbegrepen' },
      { icon: 'dumbbell', label: 'Individuele workouts met video’s en instructies' },
      { icon: 'calendar', label: 'Oproepingen, antwoorden en beschikbaarheid' },
    ],
    note: 'STRIVN Player download je in de App Store en op Google Play. Een speler zonder de app antwoordt via een link.',
    cta: 'Bekijk de spelers-app',
    href: '/nl/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Hallo, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness van vanochtend',
        badge: '20 s',
        rows: [
          { label: 'Slaap', value: 4 },
          { label: 'Vermoeidheid', value: 3 },
          { label: 'Spierpijn', value: 4 },
        ],
        submit: 'Versturen',
      },
      rpe: { title: 'RPE · training van gisteren', value: '7' },
      workout: { title: 'Workout van vandaag · preventie', meta: '3 oefeningen · 12 min · video’s inbegrepen' },
    },
  },
  platform: {
    index: '04',
    kicker: 'HET HELE TEAM',
    title: 'Roep op, verzorg, plan en rapporteer op één plek.',
    body: 'Oproepingen, aanwezigheid, ziekenboeg, trainingen en rapporten leven in dezelfde omgeving als de monitoring, met toegangsrechten per rol voor elk staflid.',
    featured: [
      {
        icon: 'activity',
        title: 'Belasting, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'GPS-import, RPE, interne en externe belasting, ACWR en alerts: de performance staff begint hier zijn dag.',
        cta: 'Belasting & RPE in detail',
        href: '/nl/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Testen & evaluaties',
        badge: 'MONITORING',
        badgeTone: 'green',
        body: 'Sprint, MAS, CMJ, technische testen: batterijen worden doorheen de tijd opgevolgd en voeden de individuele programma’s.',
        cta: 'Testen in detail',
        href: '/nl/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Oproepingen & RSVP',
        body: 'Roep op in één klik; de antwoorden komen dezelfde dag terug en de selectie werkt zichzelf bij.',
        cta: 'In detail',
        href: '/nl/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Ziekenboeg',
        body: 'Registreer de blessure één keer; return to play en oproepingen volgen, zichtbaar voor de bevoegde staf.',
        cta: 'In detail',
        href: '/nl/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individuele programma’s',
        body: 'Leg doelen en oefeningen vast, gekoppeld aan de data van elke speler.',
        cta: 'In detail',
        href: '/nl/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Trainingen & tactiek',
        body: 'Bereid trainingen en borden voor vanuit de toestand van de groep.',
        cta: 'In detail',
        href: '/nl/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Training & wedstrijd live',
        body: 'Registreer aanwezigheid, speeltijd en events langs het veld.',
        cta: 'In detail',
        href: '/nl/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Rapporten, AI & dashboards',
        body: 'Ontvang door AI geschreven verslagen en stel uw dashboards samen, gedeeld met staf en bestuur.',
        cta: 'In detail',
        href: '/nl/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'AI & BI INGEBOUWD',
    title: 'Bevraag al uw data in één vraag.',
    body: 'De AI leest belasting, wellness, GPS en medische historiek samen, vier bronnen tegelijk. Wanneer een vraag een grafiek verdient, bouwt ze die en pint u ze op uw dashboards.',
    console: {
      title: 'AI-assistent',
      badge: 'AI · CONTINUE ANALYSE',
      q: 'Vergelijk de metrics van deze wedstrijd met de vorige, en bouw een visualisatie.',
      aIntro: 'Vergelijking op basis van de GPS-exports van wedstrijden S14 en S13:',
      sources: 'BRONNEN · GPS WEDSTRIJD S14 · GPS WEDSTRIJD S13',
      chartTitle: 'Wedstrijd S14 vs S13 · GPS-metrics',
      legend: ['S13', 'S14'],
      metrics: ['AFSTAND', 'HSR', 'SPRINTS', 'BELASTING'],
      insight: 'HSR +9% en sprints +21% bij quasi stabiel volume: de intensiteit stijgt zonder extra belastingskost.',
      pin: 'Vastpinnen op dashboard',
      refine: 'Vraag verfijnen',
      signalTitle: 'Signaal aangebracht door de AI, zonder dat u het vroeg',
      signalBody: 'Slaap van de groep 12% gedaald sinds de overgang naar 2 wedstrijden per week.',
      signalCta: 'Bekijken',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Ochtendsynthese',
        body: 'Ontvang de toestand van de groep, samengevat door de AI vóór de training: readiness, alerts en voorgestelde aanpassingen.',
      },
      {
        icon: 'radar',
        title: 'Signaaldetectie',
        body: 'De AI kruist doorlopend belasting, wellness en medische historiek. Afwijkingen komen boven vóór de blessure.',
      },
      {
        icon: 'layout',
        title: 'Dashboards op aanvraag',
        body: 'Stel een vraag; de AI bouwt de visualisatie die erop antwoordt, en u pint ze in één klik op uw dashboards.',
      },
      {
        icon: 'file-text',
        title: 'Rapporten geschreven door de AI',
        body: 'Ontvang de week- en wedstrijdverslagen geschreven door de AI, klaar om aan het bestuur te bezorgen.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Stel uw dashboards samen, of laat de AI ze genereren.',
      body: 'Een widgetbibliotheek om uw rapporten samen te stellen: belasting, GPS, wellness, testen, beschikbaarheid. Voor elke eenmalige vraag een visualisatie ter plekke gegenereerd, klaar om vast te pinnen.',
      points: [
        'Widgets voor belasting, GPS, wellness, testen en beschikbaarheid',
        'Samenstellen met slepen-en-neerzetten, per team of per speler',
        'Door AI gegenereerde visualisaties, vastpinbaar in één klik',
        'Leesrechten voor bestuur en bredere staf',
      ],
      cta: 'Bekijk BI in detail',
      href: '/nl/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'DE STAF OVERTUIGEN',
    title: 'Begin alleen, en haal de staf erbij met het dossier.',
    body: 'Drie stappen, bijna altijd dezelfde: een fysieke trainer adopteert STRIVN, toont wat de data veranderen, en de staf volgt. Het stafdossier vat het argument samen voor een hoofdcoach of clubbestuur; u stuurt het door als link of pdf.',
    steps: [
      {
        title: 'U adopteert STRIVN',
        body: 'GPS-import, wellness en belastingsopvolging op uw team, zonder engagement.',
      },
      {
        title: 'U deelt het stafdossier',
        body: 'Een link of pdf die de waarde per rol voorstelt.',
      },
      {
        title: 'De staf sluit aan bij uw omgeving',
        body: 'Hoofdcoach, medische staf, assistenten: één weergave per rol, dezelfde data.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFDOSSIER',
      title: 'De waarde voor elke rol',
      roles: [
        { icon: 'users', body: 'Hoofdcoach: werkelijke beschikbaarheid bij de selectie' },
        { icon: 'heart-pulse', body: 'Medische staf: gedeelde ziekenboeg en terugkeerprotocollen' },
        { icon: 'clipboard', body: 'Assistenten: trainingen gekoppeld aan de toestand van de groep' },
        { icon: 'shield', body: 'Bestuur: een gestructureerd team, zonder initiële investering' },
      ],
      copyBtn: 'Link kopiëren',
      pdfBtn: 'PDF downloaden',
      note: 'GEMAAKT OM ZO DOOR TE STUREN',
    },
  },
  solutions: {
    index: '07',
    kicker: 'PER FUNCTIE',
    title: 'Kies uw pagina volgens uw rol in de staf.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Fysieke trainers',
        body: 'Alle details: monitoring, testen, programma’s en methodologie.',
        cta: 'Bekijk de pagina fysieke voorbereiding',
        href: '/nl/sc-coaches/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Hoofdcoach & staf',
        body: 'Oproepingen, aanwezigheid, trainingen, tactiek: de dagelijkse teamorganisatie.',
        cta: 'Bekijk teambeheer',
        href: '/nl/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRIJZEN',
    title: 'Vier niveaus. Het gratis niveau draagt het hele seizoen.',
    note: 'Het Semi-Pro-niveau neemt de kruising van GPS, RPE en wellness over die u nog met de hand doet. Elk nieuw account beschikt er 30 dagen over, zonder kaart.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'De vragen die staffen stellen.',
    body: 'De rol van de spelers, het beheer van de omgeving en de opstarttijd.',
    contactTitle: 'Nog een vraag?',
    contactBody: 'Schrijf ons. Wij antwoorden zelf.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Hoe importeer ik mijn GPS-data?',
        a: 'Via CSV-export, uit Catapult, STATSports of eender welk ander systeem. De kolomtoewijzing wordt bij de eerste import onthouden; de volgende duren enkele seconden.',
      },
      {
        q: 'Wie houdt de controle over de teamomgeving?',
        a: 'U. U maakt de omgeving aan, nodigt de staf uit en bepaalt ieders rechten, zonder validatie van de club.',
      },
      {
        q: 'Hoelang duurt de opstart?',
        a: 'Enkele minuten: maak de omgeving aan, voeg uw spelers toe, importeer uw eerste training. De eerste 30 dagen zitten op Semi-Pro, zonder kaart; de historiek bouwt zich doorheen de weken op.',
      },
      {
        q: 'Waarom is het Free-plan gratis?',
        a: 'Omdat een coach zijn werk moet kunnen structureren zonder een budget aan te vragen. Free dekt één team, spelers zonder plafond en één stafplaats, voor altijd. De betalende niveaus openen de tweede stafplaats, daarna GPS-import, het medisch bord en staf zonder plafond.',
      },
      {
        q: 'Is het geschikt voor amateur- en semiprofessioneel voetbal?',
        a: 'Ja, dat is het terrein van STRIVN: staffen van twee of drie mensen, beperkte middelen, en spelers die vanuit één app antwoorden.',
      },
      {
        q: 'Fysieke trainer: hoe krijg ik de hoofdcoach mee?',
        a: 'Begin met uw eigen data en deel daarna het stafdossier vanaf de site. De hoofdcoach leest de werkelijke beschikbaarheid in de selectie, en het argument is gemaakt.',
      },
    ],
  },
  finalCta: {
    kicker: 'BEGIN ALLEEN, GRATIS',
    title: 'Maak uw omgeving aan en importeer uw eerste training.',
    body: 'De eerste 30 dagen zitten op Semi-Pro, GPS-import inbegrepen, zonder kaart. Daarna draait het Free-plan het team het hele seizoen, en uw staf sluit aan zodra ze uw eerste rapporten zien.',
    primaryCta: 'Mijn omgeving gratis aanmaken',
    secondaryCta: 'Het stafdossier delen',
    trust: 'ZONDER KREDIETKAART · ZONDER CLUBGOEDKEURING · UW DATA BLIJFT VAN U',
  },
  footer: {
    tagline: 'De monitoring van een professionele staf, zonder het budget van een profclub.',
    body: 'STRIVN verenigt prestatiemonitoring en teamorganisatie in één omgeving, gedeeld door de staf.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/nl/solutions/' },
          { label: 'Functies', href: '/nl/features/' },
          { label: 'Prijzen', href: '/nl/pricing/' },
          { label: 'FAQ', href: '/nl/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'OPLOSSINGEN',
        links: [
          { label: 'Fysieke trainers', href: '/nl/sc-coaches/' },
        ],
      },
      {
        title: 'HULPBRONNEN',
        links: [
          { label: 'Support', href: '/nl/support/' },
          { label: 'Privacy', href: '/nl/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratis voor één team, het hele seizoen',
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: HomeContent = {
  meta: {
    title: 'STRIVN | Das Betriebssystem für den Performance-Staff',
    description:
      'GPS-Import, Wellness, Belastung und Planung in einem Tool. Die KI liest die Teamdaten und sagt Ihnen, wen Sie schonen sollten. Kostenlos für ein Team, geteilt vom gesamten Staff.',
  },
  hero: {
    eyebrow: 'Entwickelt mit professionellen Staffs',
    titleMuted: 'Das Betriebssystem',
    titleMain: 'für den Performance-Staff.',
    sub: 'GPS-Import, Wellness, Belastung und Planung in einem Tool. Die KI liest die Teamdaten und sagt Ihnen, wer fit ist, wen Sie schonen und wen Sie beobachten sollten. Eine tägliche Lesart, geteilt vom gesamten Staff.',
    primaryCta: 'Kostenlos starten',
    secondaryCta: 'Monitoring-Workflow ansehen',
    shot: {
      title: 'Readiness heute · Olympique Montverne',
      stamp: 'MI 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: 'LAST 7 T', value: '2.340 AU', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALARME', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'KADER · READINESS PRO SPIELER',
      rows: [
        { name: 'A. Diallo', status: 'Bereit', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Entlasten', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Beobachten', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Bereit', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Bereit', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Schlaf', value: '7.2', tone: 'green' },
          { label: 'Ermüdung', value: '6.1', tone: 'orange' },
          { label: 'Stimmung', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'GPS-Import abgeschlossen', sub: '18 Spieler · Einheit Dienstag' },
      alert: {
        title: 'Belastungsalarm',
        body: 'L. Moreau — ACWR 1.31, dritte Woche über dem Schwellenwert. Entlastung für Donnerstag vorgeschlagen.',
      },
      micro: { title: 'Mikrozyklus · W12' },
      ai: {
        title: 'KI-Assistent',
        q: 'Wer ist fit für Sonntag?',
        a: '14 Spieler fit. L. Moreau beobachten (ACWR 1.31), T. Mendes im Protokoll — Rückkehr voraussichtlich T+18.',
        sources: 'QUELLEN · ANWESENHEIT, BELASTUNG, MEDIZINISCHES PROTOKOLL',
      },
    },
  },
  spectre: {
    kicker: 'EIN SYSTEM, VON MONTAG BIS ZUM SPIELTAG',
    title: 'Lassen Sie die ganze Woche in einem Bereich laufen.',
    steps: [
      { icon: 'calendar', label: 'Planung' },
      { icon: 'send', label: 'Aufgebote' },
      { icon: 'clipboard', label: 'Einheiten-Aufbau' },
      { icon: 'radio', label: 'Training & Spiel live' },
      { icon: 'activity', label: 'Monitoring & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Medizinbereich' },
      { icon: 'bar-chart', label: 'Berichte & BI' },
    ],
    note: 'Jedes Modul speist die anderen. Einmal erfasste Daten dienen den sieben anderen.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'Teams organisieren ihren Alltag mit STRIVN',
    statSub: 'VEREINE UND AKADEMIEN · VON REGIONAL BIS PROFESSIONELL',
    methodKicker: 'METHODIK',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'DER BEFUND',
    title: 'Führen Sie GPS, RPE und Wellness in einer Lesart zusammen.',
    body: 'Jeden Morgen dieselben Handgriffe: GPS exportieren, RPEs zusammenführen, Fragebögen nachfassen, drei Dateien abgleichen, um den Zustand der Gruppe zu bestimmen. STRIVN übernimmt diesen letzten Schritt und rechnet ihn über Nacht.',
    beforeLabel: 'VORHER · FRAGMENTIERTE TOOLS',
    beforeChips: [
      { icon: 'table', label: 'Verstreute Excel-Mappen' },
      { icon: 'satellite', label: 'Manuelle GPS-Exporte' },
      { icon: 'file-text', label: 'Wellness-Fragebögen auf Papier' },
      { icon: 'message-circle', label: 'RPEs per Messenger eingesammelt' },
      { icon: 'bar-chart', label: 'Berichte jede Woche neu gebaut' },
      { icon: 'copy', label: 'Eine Version pro Staff-Mitglied' },
    ],
    afterLabel: 'MIT STRIVN · EIN EINHEITLICHES SYSTEM',
    afterRows: [
      { icon: 'satellite', label: 'GPS-Import aus dem CSV-Export' },
      { icon: 'moon', label: 'Täglicher Wellness-Fragebogen, mobil' },
      { icon: 'gauge', label: 'RPE nach jeder Einheit erfasst' },
      { icon: 'activity', label: 'Belastung und ACWR laufend berechnet' },
      { icon: 'bell', label: 'Readiness-Alarme vor dem Training' },
      { icon: 'users', label: 'Für den gesamten Staff zugänglich, in Echtzeit' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'DER WORKFLOW',
    title: 'Belastung messen, Woche planen, Einheit steuern.',
    sub: 'STRIVN liest Ihre Daten, plant dann die Belastung, baut Einheiten und Workouts und steuert sie live. Sechs Schritte, von der GPS-Datei bis zum Bericht am Montag.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS-IMPORT',
        title: 'Importieren Sie den GPS-Export, egal von welchem Sensor.',
        body: 'Legen Sie die CSV von Catapult, STATSports oder jedem anderen System ab. Die Spalten werden beim ersten Import erkannt und gespeichert; die Einheit wird dem Kalender zugeordnet, Spieler für Spieler, und die folgenden Importe dauern wenige Sekunden.',
        points: [
          'Direkter Import eines CSV-Exports',
          'Spaltenzuordnung wird gespeichert',
          'Distanz, Sprints und HSR pro Spieler',
          'Einheit mit dem Teamkalender verknüpft',
        ],
        cta: 'GPS-Import ansehen',
        href: '/de/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Wissen Sie vor der Einheit, wer fit ist.',
        body: 'Die Spieler beantworten den Check-in beim Aufwachen, in zwanzig Sekunden. Vor der Einheit wissen Sie, wer fit ist, wer ein Signal sendet und wer geschont werden muss.',
        points: [
          'Wellness-Fragebogen beim Aufwachen, mobil',
          'Readiness-Score pro Spieler, gewichtbar',
          'Alarme bei Schwellenüberschreitung',
          'Individueller und kollektiver Trend',
        ],
        cta: 'Wellness ansehen',
        href: '/de/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'BELASTUNGSPLANUNG',
        title: 'Planen Sie die Wochenbelastung in AU.',
        body: 'Legen Sie ein Tagesziel fest; STRIVN berechnet den ACWR über 7 und 28 Tage und meldet die Abweichungen. Der Mikrozyklus entsteht auf Basis der tatsächlich absorbierten Belastung der Gruppe.',
        points: [
          'Ziel- und Ist-Belastung, Tag für Tag',
          'ACWR und Monotonie automatisch berechnet',
          'Periodisierung des Mikrozyklus von Spiel zu Spiel',
          'Individuelle Anpassungen, sofort angewendet',
        ],
        cta: 'Planung ansehen',
        href: '/de/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'EINHEITEN- & WORKOUT-AUFBAU',
        title: 'Bauen Sie die Einheit aus dem Belastungsplan.',
        body: 'Stellen Sie Blöcke, Übungen und Zielbelastungen zusammen; die geschätzte Belastung erscheint vor der Einheit. Individuelle Workouts entstehen aus denselben Daten, Rückkehrprotokolle inklusive.',
        points: [
          'Bibliothek wiederverwendbarer Übungen und Blöcke',
          'Geschätzte Belastung pro Block, vor der Einheit',
          'Individuelle Workouts: Kraft, Prävention, Return to Play',
          'Mit einem Fingertipp in die Spieler-App veröffentlicht',
        ],
        cta: 'Einheiten-Builder ansehen',
        href: '/de/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'EINHEIT LIVE',
        title: 'Verfolgen Sie die Belastung während der Einheit, Block für Block.',
        body: 'Haken Sie die Anwesenheit am Spielfeldrand ab; die Belastung baut sich Block für Block auf und die Abweichung zum Plan erscheint live. Sie steuern während der Einheit nach.',
        points: [
          'Check-in und Teilnahme am Spielfeldrand',
          'Kumulierte Belastung in Echtzeit, pro Spieler',
          'Abweichung zur geplanten Belastung, Block für Block',
        ],
        cta: 'Die Einheit live ansehen',
        href: '/de/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'STAFF-SHARING',
        title: 'Teilen Sie dieselbe Lesart mit dem ganzen Staff.',
        body: 'Der Wochenbericht wird automatisch erstellt, der Staff kommentiert ihn, und die Verfügbarkeiten fließen ins Aufgebot für Sonntag. Cheftrainer, Physio und Co-Trainer lesen dieselben Daten, jeder mit eigenen Rechten.',
        points: [
          'Readiness-Ansicht mit dem gesamten Staff geteilt',
          'Wochenbericht automatisch erstellt',
          'Kommentare und Entscheidungen zentralisiert',
          'Zugriffsrechte nach Rolle',
        ],
        cta: 'Staff-Sharing ansehen',
        href: '/de/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'einheit_0806_catapult.csv',
        fileSub: '18 Spieler erkannt · Zuordnung angewendet',
        colsLabel: 'ERKANNTE SPALTEN',
        cols: [
          { from: 'Total Distance (m)', to: 'Gesamtdistanz' },
          { from: 'HSR >19.8 km/h (m)', to: 'Hochintensive Läufe' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'Externe Belastung' },
        ],
        done: 'Import abgeschlossen · verknüpft mit „Einheit Dienstag · Intensitätsblock“',
      },
      readiness: {
        title: 'Morgen-Wellness · 16 / 18 Antworten',
        stamp: '07:45',
        kpis: [
          { label: 'SCHLAF', value: '7.2', tone: 'green' },
          { label: 'ERMÜDUNG', value: '6.1', tone: 'orange' },
          { label: 'MUSKELKATER', value: '6.8', tone: 'green' },
          { label: 'STIMMUNG', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'MORGEN-ALARME',
        alerts: [
          { name: 'L. Moreau', detail: 'Schlaf 4 h · Ermüdung 8/10 · Readiness 58', action: 'Anpassen' },
          { name: 'K. Nakamura', detail: 'Starker Muskelkater nach dem Dienstagsblock', action: 'Anpassen' },
        ],
        chartLabel: 'READINESS GRUPPE · LETZTE 14 TAGE',
      },
      planning: {
        title: 'Mikrozyklus · W12 → Spiel am Sonntag',
        legendTarget: 'Ziel',
        legendActual: 'Ist',
        days: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Donnerstag: Volumen −30% · keine Sprints' },
          { name: 'T. Mendes', detail: 'Reha-Protokoll · 30 min individualisiert' },
        ],
      },
      builder: {
        title: 'Einheit Donnerstag · Intensitätsblock',
        sub: 'Geschätzte Belastung 445 AU · Ziel 460',
        badge: 'IM ZIELBEREICH',
        blocks: [
          { label: 'Aufwärmen + Aktivierung', time: '12 min', load: '48 AU' },
          { label: 'Pressing-Block · 8v8', time: '24 min', load: '186 AU' },
          { label: 'Schnelligkeit · fliegende Sprints', time: '15 min', load: '124 AU' },
          { label: 'Kleinfeldspiel + Cool-down', time: '14 min', load: '87 AU' },
        ],
        workout: {
          title: 'Individuelles Workout · L. Moreau',
          stamp: 'In die Spieler-App veröffentlicht',
          body: 'Nordic Curls 3×8 · Copenhagen 3×10 / Seite · Hüftmobilität 8 min. Erstellt aus dem Ischio-Protokoll, Belastung von der Teameinheit abgezogen.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Einheit Donnerstag · Block 2 / 4',
        meta: '20:34 · 17 ANWESEND',
        chartLabel: 'KUMULIERTE BELASTUNG VS PLAN · ECHTZEIT',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau schon in Block 2 bei 92% seines Ziels. Aus dem Schnelligkeitsblock nehmen?',
          primary: 'Rausnehmen',
          secondary: 'Drinlassen',
        },
      },
      share: {
        title: 'Wochenbericht · W12',
        stamp: 'AUTOMATISCH ERSTELLT',
        body: 'Kollektive Belastung im Plan (−2%). Readiness steigend. 2 Spieler in Anpassung, 1 laufendes Rückkehrprotokoll.',
        avatars: ['CT', 'AS', 'PH', 'AT'],
        shared: 'Geteilt mit 4 Staff-Mitgliedern',
        commentAuthor: 'CHEFTRAINER · 09:12',
        comment: 'Gesehen für Moreau. Wir passen den Donnerstagsblock wie vorgeschlagen an.',
        push: 'Verfügbarkeiten ins Aufgebot für Sonntag übertragen: 15 fit, 2 zu beobachten, 1 nicht verfügbar.',
      },
    },
  },
  compatible: {
    kicker: 'KOMPATIBILITÄT',
    title: 'Verbinden Sie WHOOP, importieren Sie jeden GPS-Export.',
    body: 'GPS-Systeme exportieren eine CSV; die Spalten werden beim ersten Import erkannt und dann gespeichert. WHOOP verbindet sich über seine API und schickt die Messwerte der Nacht in den Check-in am Morgen. Hundert Spieler können ihr Band verbinden.',
    badge: 'NEU',
    whoopTitle: 'WHOOP füllt den Check-in am Morgen vor.',
    points: [
      'Regenerationsscore des Tages',
      'Schlafdauer und Schlafperformance',
      'HRV und Ruhepuls',
    ],
    cta: 'Zum Check-in',
    href: '/de/features/check-in/',
    note: 'Genannte Marken und Logos sind Eigentum ihrer jeweiligen Inhaber. STRIVN ist von diesen Unternehmen unabhängig.',
  },
  playerApp: {
    index: '03',
    kicker: 'SPIELERSEITE',
    title: 'Ihre Spieler antworten in zwanzig Sekunden.',
    body: 'Die Spieler-App fragt drei Dinge ab, im richtigen Moment: Wellness beim Aufwachen, RPE nach der Einheit, das Workout des Tages. Jede Antwort dauert zwanzig Sekunden, und die Erinnerung geht von selbst raus.',
    points: [
      { icon: 'moon', label: 'Wellness-Fragebogen beim Aufwachen, in 20 Sekunden' },
      { icon: 'gauge', label: 'RPE nach der Einheit mit einem Tipp, Benachrichtigung inklusive' },
      { icon: 'dumbbell', label: 'Individuelle Workouts mit Videos und Anleitungen' },
      { icon: 'calendar', label: 'Aufgebote, Antworten und Verfügbarkeit' },
    ],
    note: 'STRIVN Player lädt man im App Store und bei Google Play. Ein Spieler ohne App antwortet über einen Link.',
    cta: 'Die Spieler-App ansehen',
    href: '/de/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Hallo, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness am Morgen',
        badge: '20 s',
        rows: [
          { label: 'Schlaf', value: 4 },
          { label: 'Ermüdung', value: 3 },
          { label: 'Muskelkater', value: 4 },
        ],
        submit: 'Senden',
      },
      rpe: { title: 'RPE · Einheit von gestern', value: '7' },
      workout: { title: 'Workout des Tages · Prävention', meta: '3 Übungen · 12 min · Videos inklusive' },
    },
  },
  platform: {
    index: '04',
    kicker: 'DAS GANZE TEAM',
    title: 'Aufbieten, behandeln, planen und berichten am selben Ort.',
    body: 'Aufgebote, Anwesenheit, Medizinbereich, Einheiten und Berichte liegen im selben Bereich wie das Monitoring, mit Zugriffsrechten pro Rolle für jedes Staff-Mitglied.',
    featured: [
      {
        icon: 'activity',
        title: 'Belastung, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'GPS-Import, RPE, interne und externe Belastung, ACWR und Alarme: Hier startet der Performance-Staff in den Tag.',
        cta: 'Belastung & RPE im Detail',
        href: '/de/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Tests & Diagnostik',
        badge: 'MONITORING',
        badgeTone: 'green',
        body: 'Sprint, MAS, CMJ, technische Tests: Testbatterien werden über die Zeit verfolgt und speisen die individuellen Programme.',
        cta: 'Tests im Detail',
        href: '/de/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Aufgebote & RSVP',
        body: 'Bieten Sie mit einem Klick auf; die Antworten kommen am selben Tag zurück und der Kader aktualisiert sich selbst.',
        cta: 'Im Detail',
        href: '/de/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Medizinbereich',
        body: 'Erfassen Sie die Verletzung einmal; Return to Play und Aufgebote folgen, sichtbar für den berechtigten Staff.',
        cta: 'Im Detail',
        href: '/de/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individuelle Programme',
        body: 'Legen Sie Ziele und Übungen fest, verknüpft mit den Daten jedes Spielers.',
        cta: 'Im Detail',
        href: '/de/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Einheiten & Taktik',
        body: 'Bereiten Sie Einheiten und Boards aus dem Zustand der Gruppe vor.',
        cta: 'Im Detail',
        href: '/de/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Training & Spiel live',
        body: 'Erfassen Sie Anwesenheit, Spielzeit und Ereignisse am Spielfeldrand.',
        cta: 'Im Detail',
        href: '/de/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Berichte, KI & Dashboards',
        body: 'Erhalten Sie KI-geschriebene Zusammenfassungen und stellen Sie Ihre Dashboards zusammen, geteilt mit Staff und Vorstand.',
        cta: 'Im Detail',
        href: '/de/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'KI & BI INTEGRIERT',
    title: 'Befragen Sie alle Ihre Daten mit einer Frage.',
    body: 'Die KI liest Belastung, Wellness, GPS und Krankengeschichte zusammen, vier Quellen auf einmal. Wenn eine Frage ein Diagramm verdient, baut sie eines, und Sie pinnen es an Ihre Dashboards.',
    console: {
      title: 'KI-Assistent',
      badge: 'KI · KONTINUIERLICHE ANALYSE',
      q: 'Vergleiche die Metriken dieses Spiels mit dem vorherigen und baue eine Visualisierung.',
      aIntro: 'Vergleich auf Basis der GPS-Exporte der Spiele S14 und S13:',
      sources: 'QUELLEN · GPS SPIEL S14 · GPS SPIEL S13',
      chartTitle: 'Spiel S14 vs S13 · GPS-Metriken',
      legend: ['S13', 'S14'],
      metrics: ['DISTANZ', 'HSR', 'SPRINTS', 'LAST'],
      insight: 'HSR +9% und Sprints +21% bei nahezu stabilem Volumen: Die Intensität steigt ohne Mehrbelastung.',
      pin: 'Ans Dashboard pinnen',
      refine: 'Frage verfeinern',
      signalTitle: 'Signal von der KI gemeldet, ohne dass jemand fragt',
      signalBody: 'Schlaf der Gruppe seit der Umstellung auf 2 Spiele pro Woche um 12% gesunken.',
      signalCta: 'Prüfen',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Morgen-Briefing',
        body: 'Erhalten Sie den Zustand der Gruppe, von der KI vor der Einheit zusammengefasst: Readiness, Alarme und vorgeschlagene Anpassungen.',
      },
      {
        icon: 'radar',
        title: 'Signalerkennung',
        body: 'Die KI kreuzt laufend Belastung, Wellness und Krankengeschichte. Abweichungen tauchen vor der Verletzung auf.',
      },
      {
        icon: 'layout',
        title: 'Dashboards auf Abruf',
        body: 'Stellen Sie eine Frage; die KI baut die passende Visualisierung, und Sie pinnen sie mit einem Klick an Ihre Dashboards.',
      },
      {
        icon: 'file-text',
        title: 'KI-geschriebene Berichte',
        body: 'Erhalten Sie Wochen- und Nachspielberichte, von der KI geschrieben, bereit für den Vorstand.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Dashboards bauen oder von der KI generieren lassen.',
      body: 'Eine Widget-Bibliothek für Ihre Berichte: Belastung, GPS, Wellness, Tests, Verfügbarkeit. Für jede Einzelfrage eine spontan generierte Visualisierung, bereit zum Anpinnen.',
      points: [
        'Widgets für Belastung, GPS, Wellness, Tests und Verfügbarkeit',
        'Zusammenstellung per Drag-and-drop, pro Team oder Spieler',
        'KI-generierte Visualisierungen, mit einem Klick anpinnbar',
        'Lesefreigabe für Vorstand und erweiterten Staff',
      ],
      cta: 'BI im Detail ansehen',
      href: '/de/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'DEN STAFF ÜBERZEUGEN',
    title: 'Allein starten, dann den Staff mit dem Dossier dazuholen.',
    body: 'Drei Schritte, fast immer dieselben: Ein Athletiktrainer übernimmt STRIVN, zeigt, was die Daten verändern, und der Staff zieht nach. Das Staff-Dossier fasst das Argument für Cheftrainer oder Vereinsführung zusammen; Sie schicken es als Link oder PDF.',
    steps: [
      {
        title: 'Sie übernehmen STRIVN',
        body: 'GPS-Import, Wellness und Belastungssteuerung für Ihr Team, ohne Verpflichtung.',
      },
      {
        title: 'Sie teilen das Staff-Dossier',
        body: 'Ein Link oder PDF, das den Wert für jede Rolle zeigt.',
      },
      {
        title: 'Der Staff tritt Ihrem Bereich bei',
        body: 'Cheftrainer, medizinischer Staff, Co-Trainer: eine Ansicht pro Rolle, dieselben Daten.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFF-DOSSIER',
      title: 'Der Wert für jede Rolle',
      roles: [
        { icon: 'users', body: 'Cheftrainer: reale Verfügbarkeit im Aufgebot' },
        { icon: 'heart-pulse', body: 'Medizinischer Staff: geteilter Medizinbereich und Rückkehrprotokolle' },
        { icon: 'clipboard', body: 'Co-Trainer: Einheiten, verknüpft mit dem Zustand der Gruppe' },
        { icon: 'shield', body: 'Vorstand: ein strukturiertes Team, ohne Anfangsinvestition' },
      ],
      copyBtn: 'Link kopieren',
      pdfBtn: 'PDF herunterladen',
      note: 'GEMACHT, UM SO WEITERGEGEBEN ZU WERDEN',
    },
  },
  solutions: {
    index: '07',
    kicker: 'NACH FUNKTION',
    title: 'Wählen Sie Ihre Seite nach Ihrer Rolle im Staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Athletiktrainer',
        body: 'Alle Details: Monitoring, Tests, Programme und Methodik.',
        cta: 'Zur Athletik-Seite',
        href: '/de/sc-coaches/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Cheftrainer & Staff',
        body: 'Aufgebote, Anwesenheit, Einheiten, Taktik: die tägliche Teamorganisation.',
        cta: 'Teamverwaltung ansehen',
        href: '/de/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PREISE',
    title: 'Vier Stufen. Die kostenlose trägt die ganze Saison.',
    note: 'Die Semi-Pro-Stufe übernimmt die Verschränkung von GPS, RPE und Wellness, die Sie noch von Hand machen. Jedes neue Konto hat sie 30 Tage lang, ohne Karte.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Die Fragen, die Staffs stellen.',
    body: 'Die Rolle der Spieler, die Kontrolle über den Bereich und die Einrichtungszeit.',
    contactTitle: 'Noch eine Frage?',
    contactBody: 'Schreiben Sie uns. Wir antworten selbst.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Wie importiere ich meine GPS-Daten?',
        a: 'Per CSV-Export, aus Catapult, STATSports oder jedem anderen System. Die Spaltenzuordnung wird beim ersten Import gespeichert; die folgenden dauern wenige Sekunden.',
      },
      {
        q: 'Wer behält die Kontrolle über den Teambereich?',
        a: 'Sie. Sie erstellen den Bereich, laden den Staff ein und legen die Rechte jedes Einzelnen fest, ohne Freigabe des Vereins.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Wenige Minuten: Bereich erstellen, Spieler hinzufügen, erste Einheit importieren. Die ersten 30 Tage laufen auf Semi-Pro, ohne Karte; die Historie baut sich über die Wochen auf.',
      },
      {
        q: 'Warum ist der Free-Plan kostenlos?',
        a: 'Weil ein Coach seine Arbeit strukturieren können muss, ohne ein Budget zu beantragen. Free deckt ein Team, Spieler ohne Obergrenze und einen Staff-Platz ab, für immer. Die bezahlten Stufen öffnen den zweiten Staff-Platz, dann GPS-Import, Medizinbereich und Staff ohne Obergrenze.',
      },
      {
        q: 'Passt es zu Amateur- und Halbprofifußball?',
        a: 'Ja, genau das ist das Terrain von STRIVN: Staffs aus zwei oder drei Personen, begrenzte Mittel und Spieler, die aus einer einzigen App antworten.',
      },
      {
        q: 'Athletiktrainer: Wie gewinne ich den Cheftrainer?',
        a: 'Starten Sie mit Ihren eigenen Daten und teilen Sie dann das Staff-Dossier von der Website. Der Cheftrainer liest die reale Verfügbarkeit im Aufgebot, und das Argument ist gemacht.',
      },
    ],
  },
  finalCta: {
    kicker: 'ALLEIN STARTEN, KOSTENLOS',
    title: 'Bereich erstellen und die erste Einheit importieren.',
    body: 'Die ersten 30 Tage laufen auf Semi-Pro, GPS-Import inklusive, ohne Karte. Danach trägt der Free-Plan das Team die ganze Saison, und Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.',
    primaryCta: 'Meinen Bereich kostenlos erstellen',
    secondaryCta: 'Staff-Dossier teilen',
    trust: 'OHNE KREDITKARTE · OHNE VEREINSFREIGABE · IHRE DATEN BLEIBEN IHRE',
  },
  footer: {
    tagline: 'Das Monitoring eines Profi-Staffs, ohne das Budget eines Profivereins.',
    body: 'STRIVN vereint Performance-Monitoring und Teamorganisation in einem Bereich, geteilt vom Staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUKT',
        links: [
          { label: 'Plattform', href: '/de/solutions/' },
          { label: 'Funktionen', href: '/de/features/' },
          { label: 'Preise', href: '/de/pricing/' },
          { label: 'FAQ', href: '/de/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'LÖSUNGEN',
        links: [
          { label: 'Athletiktrainer', href: '/de/sc-coaches/' },
        ],
      },
      {
        title: 'RESSOURCEN',
        links: [
          { label: 'Support', href: '/de/support/' },
          { label: 'Datenschutz', href: '/de/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Kostenlos für ein Team, die ganze Saison',
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: HomeContent = {
  meta: {
    title: 'STRIVN | O sistema operativo do staff de performance',
    description:
      'Importação GPS, wellness, carga e planeamento numa só ferramenta. A IA lê os dados do plantel e diz quem aliviar. Grátis para uma equipa, partilhado por todo o staff.',
  },
  hero: {
    eyebrow: 'Construído com staffs profissionais',
    titleMuted: 'O sistema operativo',
    titleMain: 'do staff de performance.',
    sub: 'Importação GPS, wellness, carga e planeamento numa só ferramenta. A IA lê os dados do plantel e diz-lhe quem está apto, quem aliviar e quem vigiar. Uma única leitura diária, partilhada por todo o staff.',
    primaryCta: 'Começar gratuitamente',
    secondaryCta: 'Ver o workflow de monitorização',
    shot: {
      title: 'Readiness do dia · Olympique Montverne',
      stamp: 'QUA 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: 'CARGA 7 D', value: '2 340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALERTAS', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'PLANTEL · READINESS POR JOGADOR',
      rows: [
        { name: 'A. Diallo', status: 'Apto', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Aliviar', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Vigiar', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Apto', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Apto', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Sono', value: '7.2', tone: 'green' },
          { label: 'Fadiga', value: '6.1', tone: 'orange' },
          { label: 'Humor', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'Importação GPS concluída', sub: '18 jogadores · sessão de terça' },
      alert: {
        title: 'Alerta de carga',
        body: 'L. Moreau — ACWR 1.31, terceira semana acima do limiar. Alívio proposto para quinta-feira.',
      },
      micro: { title: 'Microciclo · S12' },
      ai: {
        title: 'Assistente IA',
        q: 'Quem está apto para domingo?',
        a: '14 jogadores aptos. L. Moreau a vigiar (ACWR 1.31), T. Mendes em protocolo — regresso estimado D+18.',
        sources: 'FONTES · PRESENÇAS, CARGA, ENFERMARIA',
      },
    },
  },
  spectre: {
    kicker: 'UM SÓ SISTEMA, DE SEGUNDA AO JOGO',
    title: 'Faça girar toda a semana num único espaço.',
    steps: [
      { icon: 'calendar', label: 'Planeamento' },
      { icon: 'send', label: 'Convocatórias' },
      { icon: 'clipboard', label: 'Construção de sessão' },
      { icon: 'radio', label: 'Sessão & jogo em direto' },
      { icon: 'activity', label: 'Monitorização & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Enfermaria' },
      { icon: 'bar-chart', label: 'Relatórios & BI' },
    ],
    note: 'Cada módulo alimenta os outros. Um dado introduzido uma vez serve aos outros sete.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'equipas gerem o seu dia a dia no STRIVN',
    statSub: 'CLUBES E ACADEMIAS · DO REGIONAL AO PROFISSIONAL',
    methodKicker: 'METODOLOGIA',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'O DIAGNÓSTICO',
    title: 'Reúna GPS, RPE e wellness numa só leitura.',
    body: 'Todas as manhãs, as mesmas operações: exportar o GPS, consolidar os RPE, insistir nos questionários, cruzar três ficheiros para estabelecer o estado de forma do plantel. O STRIVN assume esta última etapa e calcula-a durante a noite.',
    beforeLabel: 'ANTES · FERRAMENTAS FRAGMENTADAS',
    beforeChips: [
      { icon: 'table', label: 'Ficheiros Excel dispersos' },
      { icon: 'satellite', label: 'Exportações GPS manuais' },
      { icon: 'file-text', label: 'Questionários wellness em papel' },
      { icon: 'message-circle', label: 'RPE recolhidos por mensagens' },
      { icon: 'bar-chart', label: 'Relatórios reconstruídos todas as semanas' },
      { icon: 'copy', label: 'Uma versão por membro do staff' },
    ],
    afterLabel: 'COM O STRIVN · UM SISTEMA UNIFICADO',
    afterRows: [
      { icon: 'satellite', label: 'Importação GPS a partir da exportação CSV' },
      { icon: 'moon', label: 'Questionário wellness diário, no telemóvel' },
      { icon: 'gauge', label: 'RPE recolhido no fim de cada sessão' },
      { icon: 'activity', label: 'Carga e ACWR calculados em contínuo' },
      { icon: 'bell', label: 'Alertas de readiness antes do treino' },
      { icon: 'users', label: 'Acessível a todo o staff, em tempo real' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'O WORKFLOW',
    title: 'Meça a carga, planeie a semana, conduza a sessão.',
    sub: 'O STRIVN lê os seus dados, depois planeia a carga, constrói as sessões e os workouts, e conduz tudo em direto. Seis etapas, do ficheiro GPS ao relatório de segunda-feira.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORTAÇÃO GPS',
        title: 'Importe a exportação GPS, seja qual for o sensor.',
        body: 'Carregue o CSV do Catapult, do STATSports ou de qualquer outro sistema. As colunas são reconhecidas na primeira importação e memorizadas; a sessão fica ligada ao calendário, jogador a jogador, e as importações seguintes demoram segundos.',
        points: [
          'Importação direta de uma exportação CSV',
          'Correspondência de colunas memorizada',
          'Distância, sprints e HSR por jogador',
          'Sessão ligada ao calendário da equipa',
        ],
        cta: 'Ver a importação GPS',
        href: '/pt/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Saiba quem está apto antes da sessão.',
        body: 'Os jogadores respondem ao check-in ao acordar, em vinte segundos. Antes da sessão sabe quem está apto, quem dá sinal e quem tem de ser aliviado.',
        points: [
          'Questionário wellness ao acordar, no telemóvel',
          'Score de readiness por jogador, ponderável',
          'Alertas ao ultrapassar limiares',
          'Tendência individual e coletiva',
        ],
        cta: 'Ver o wellness',
        href: '/pt/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'PLANEAMENTO DE CARGA',
        title: 'Planeie a carga da semana em UA.',
        body: 'Fixe um alvo diário; o STRIVN calcula o ACWR a 7 e 28 dias e assinala os desvios. O microciclo constrói-se sobre a carga realmente absorvida pelo plantel.',
        points: [
          'Carga alvo e realizada, dia a dia',
          'ACWR e monotonia calculados automaticamente',
          'Periodização do microciclo jogo a jogo',
          'Ajustes individualizados, aplicados de imediato',
        ],
        cta: 'Ver o planeamento',
        href: '/pt/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'CONSTRUÇÃO DE SESSÃO & WORKOUTS',
        title: 'Construa a sessão a partir do plano de carga.',
        body: 'Monte blocos, exercícios e cargas-alvo; a carga estimada aparece antes da sessão. Os workouts individuais geram-se a partir dos mesmos dados, protocolos de regresso incluídos.',
        points: [
          'Biblioteca de exercícios e blocos reutilizáveis',
          'Carga estimada por bloco, antes da sessão',
          'Workouts individuais: força, prevenção, regresso ao jogo',
          'Publicação para a app dos jogadores num gesto',
        ],
        cta: 'Ver o construtor de sessão',
        href: '/pt/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'SESSÃO EM DIRETO',
        title: 'Acompanhe a carga durante a sessão, bloco a bloco.',
        body: 'Registe as presenças à beira do campo; a carga acumula-se bloco a bloco e o desvio face ao plano aparece em direto. Ajusta durante a sessão.',
        points: [
          'Registo de presenças à beira do campo',
          'Carga acumulada em tempo real, por jogador',
          'Desvio vs carga planeada, bloco a bloco',
        ],
        cta: 'Ver a sessão em direto',
        href: '/pt/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'PARTILHA COM O STAFF',
        title: 'Partilhe a mesma leitura com todo o staff.',
        body: 'O relatório da semana gera-se automaticamente, o staff anota-o, e as disponibilidades alimentam a convocatória de domingo. Treinador principal, fisioterapeuta e adjuntos leem os mesmos dados, cada um com os seus direitos.',
        points: [
          'Vista de readiness partilhada com todo o staff',
          'Relatório semanal gerado automaticamente',
          'Comentários e decisões centralizados',
          'Direitos de acesso diferenciados por função',
        ],
        cta: 'Ver a partilha com o staff',
        href: '/pt/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'sessao_0806_catapult.csv',
        fileSub: '18 jogadores reconhecidos · correspondência aplicada',
        colsLabel: 'COLUNAS RECONHECIDAS',
        cols: [
          { from: 'Total Distance (m)', to: 'Distância total' },
          { from: 'HSR >19.8 km/h (m)', to: 'Corrida de alta intensidade' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'Carga externa' },
        ],
        done: 'Importação concluída · ligada a «Sessão de terça · bloco de intensidade»',
      },
      readiness: {
        title: 'Wellness da manhã · 16 / 18 respostas',
        stamp: '07:45',
        kpis: [
          { label: 'SONO', value: '7.2', tone: 'green' },
          { label: 'FADIGA', value: '6.1', tone: 'orange' },
          { label: 'DORES', value: '6.8', tone: 'green' },
          { label: 'HUMOR', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'ALERTAS DA MANHÃ',
        alerts: [
          { name: 'L. Moreau', detail: 'Sono 4 h · fadiga 8/10 · readiness 58', action: 'Ajustar' },
          { name: 'K. Nakamura', detail: 'Dores musculares elevadas após o bloco de terça', action: 'Ajustar' },
        ],
        chartLabel: 'READINESS DO PLANTEL · ÚLTIMOS 14 DIAS',
      },
      planning: {
        title: 'Microciclo · S12 → jogo de domingo',
        legendTarget: 'Alvo',
        legendActual: 'Realizada',
        days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Quinta: volume −30% · sem sprints' },
          { name: 'T. Mendes', detail: 'Protocolo de reatletização · 30 min individualizado' },
        ],
      },
      builder: {
        title: 'Sessão de quinta · bloco de intensidade',
        sub: 'Carga estimada 445 UA · alvo 460',
        badge: 'DENTRO DO ALVO',
        blocks: [
          { label: 'Aquecimento + ativação', time: '12 min', load: '48 UA' },
          { label: 'Bloco de pressing · 8v8', time: '24 min', load: '186 UA' },
          { label: 'Velocidade · sprints lançados', time: '15 min', load: '124 UA' },
          { label: 'Jogo reduzido + retorno à calma', time: '14 min', load: '87 UA' },
        ],
        workout: {
          title: 'Workout individual · L. Moreau',
          stamp: 'Publicado para a app do jogador',
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / lado · mobilidade da anca 8 min. Gerado a partir do protocolo de isquiotibiais, carga deduzida da sessão coletiva.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Sessão de quinta · bloco 2 / 4',
        meta: '20:34 · 17 PRESENTES',
        chartLabel: 'CARGA ACUMULADA VS PLANO · TEMPO REAL',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau a 92% do alvo logo no bloco 2. Retirá-lo do bloco de velocidade?',
          primary: 'Retirar',
          secondary: 'Manter',
        },
      },
      share: {
        title: 'Relatório semanal · S12',
        stamp: 'GERADO AUTOMATICAMENTE',
        body: 'Carga coletiva conforme o plano (−2%). Readiness a subir. 2 jogadores em adaptação, 1 protocolo de regresso em curso.',
        avatars: ['TP', 'AD', 'FI', 'PF'],
        shared: 'Partilhado com 4 membros do staff',
        commentAuthor: 'TREINADOR PRINCIPAL · 09:12',
        comment: 'Visto para o Moreau. Adaptamos o bloco de quinta como proposto.',
        push: 'Disponibilidades enviadas para a convocatória de domingo: 15 aptos, 2 a vigiar, 1 indisponível.',
      },
    },
  },
  compatible: {
    kicker: 'COMPATIBILIDADE',
    title: 'Ligue o WHOOP, importe qualquer exportação GPS.',
    body: 'Os sistemas GPS exportam um CSV; as colunas são reconhecidas na primeira importação e depois memorizadas. O WHOOP liga-se pela sua API e envia as medições da noite para o check-in da manhã. Cem jogadores podem ligar a sua pulseira.',
    badge: 'NOVO',
    whoopTitle: 'O WHOOP pré-preenche o check-in da manhã.',
    points: [
      'Pontuação de recuperação do dia',
      'Duração e desempenho do sono',
      'VFC e frequência cardíaca em repouso',
    ],
    cta: 'Ver o check-in',
    href: '/pt/features/check-in/',
    note: 'As marcas e logótipos citados pertencem aos respetivos proprietários. A STRIVN é independente destas empresas.',
  },
  playerApp: {
    index: '03',
    kicker: 'LADO DO JOGADOR',
    title: 'Os seus jogadores respondem em vinte segundos.',
    body: 'A app do jogador pede três coisas, no momento certo: o wellness ao acordar, o RPE depois da sessão, o workout do dia. Cada resposta demora vinte segundos, e o lembrete parte sozinho.',
    points: [
      { icon: 'moon', label: 'Questionário wellness ao acordar, em 20 segundos' },
      { icon: 'gauge', label: 'RPE pós-sessão num gesto, notificação incluída' },
      { icon: 'dumbbell', label: 'Workouts individuais com vídeos e instruções' },
      { icon: 'calendar', label: 'Convocatórias, respostas e disponibilidade' },
    ],
    note: 'A STRIVN Player transfere-se na App Store e no Google Play. Um jogador sem a app responde a partir de uma ligação.',
    cta: 'Ver a app do jogador',
    href: '/pt/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Olá, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness da manhã',
        badge: '20 s',
        rows: [
          { label: 'Sono', value: 4 },
          { label: 'Fadiga', value: 3 },
          { label: 'Dores', value: 4 },
        ],
        submit: 'Enviar',
      },
      rpe: { title: 'RPE · sessão de ontem', value: '7' },
      workout: { title: 'Workout de hoje · prevenção', meta: '3 exercícios · 12 min · vídeos incluídos' },
    },
  },
  platform: {
    index: '04',
    kicker: 'TODA A EQUIPA',
    title: 'Convoque, trate, planeie e reporte no mesmo sítio.',
    body: 'Convocatórias, presenças, enfermaria, sessões e relatórios vivem no mesmo espaço que a monitorização, com um direito de acesso por função para cada membro do staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Carga, RPE & GPS',
        badge: 'MONITORIZAÇÃO',
        badgeTone: 'blue',
        body: 'Importação GPS, RPE, carga interna e externa, ACWR e alertas: é por aqui que o staff de performance começa o dia.',
        cta: 'Carga & RPE em detalhe',
        href: '/pt/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Testes & avaliações',
        badge: 'MONITORIZAÇÃO',
        badgeTone: 'green',
        body: 'Sprint, VAM, CMJ, testes técnicos: as baterias seguem-se no tempo e alimentam os programas individuais.',
        cta: 'Testes em detalhe',
        href: '/pt/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Convocatórias & RSVP',
        body: 'Convoque num clique; as respostas voltam no próprio dia e o plantel atualiza-se sozinho.',
        cta: 'Em detalhe',
        href: '/pt/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Enfermaria',
        body: 'Declare a lesão uma vez; o regresso ao jogo e as convocatórias seguem, visíveis para o staff autorizado.',
        cta: 'Em detalhe',
        href: '/pt/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programas individuais',
        body: 'Fixe objetivos e exercícios ligados aos dados de cada jogador.',
        cta: 'Em detalhe',
        href: '/pt/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sessões & tática',
        body: 'Prepare as sessões e os quadros a partir do estado de forma do plantel.',
        cta: 'Em detalhe',
        href: '/pt/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Sessão & jogo em direto',
        body: 'Registe presenças, tempo de jogo e eventos à beira do campo.',
        cta: 'Em detalhe',
        href: '/pt/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Relatórios, IA & dashboards',
        body: 'Receba resumos redigidos pela IA e componha os seus dashboards, partilhados com o staff e a direção.',
        cta: 'Em detalhe',
        href: '/pt/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTEGRADAS',
    title: 'Interrogue todos os seus dados numa só pergunta.',
    body: 'A IA lê carga, wellness, GPS e histórico médico em conjunto, quatro fontes de uma vez. Quando uma pergunta merece um gráfico, constrói-o e você fixa-o nos seus dashboards.',
    console: {
      title: 'Assistente IA',
      badge: 'IA · ANÁLISE CONTÍNUA',
      q: 'Compara as métricas deste jogo com o anterior e constrói uma visualização.',
      aIntro: 'Comparação estabelecida sobre as exportações GPS dos jogos J14 e J13:',
      sources: 'FONTES · GPS JOGO J14 · GPS JOGO J13',
      chartTitle: 'Jogo J14 vs J13 · métricas GPS',
      legend: ['J13', 'J14'],
      metrics: ['DISTÂNCIA', 'HSR', 'SPRINTS', 'CARGA'],
      insight: 'HSR +9% e sprints +21% com volume quase estável: a intensidade progride sem custo extra de carga.',
      pin: 'Fixar no dashboard',
      refine: 'Afinar a pergunta',
      signalTitle: 'Sinal levantado pela IA, sem ninguém pedir',
      signalBody: 'Sono do plantel a descer 12% desde a passagem a 2 jogos por semana.',
      signalCta: 'Examinar',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Síntese da manhã',
        body: 'Receba o estado do plantel resumido pela IA antes da sessão: readiness, alertas e ajustes propostos.',
      },
      {
        icon: 'radar',
        title: 'Deteção de sinais',
        body: 'A IA cruza em contínuo carga, wellness e histórico médico. Os desvios sobem antes da lesão.',
      },
      {
        icon: 'layout',
        title: 'Dashboards a pedido',
        body: 'Faça uma pergunta; a IA constrói a visualização que responde, e você fixa-a nos seus dashboards num clique.',
      },
      {
        icon: 'file-text',
        title: 'Relatórios redigidos pela IA',
        body: 'Receba os resumos semanais e pós-jogo redigidos pela IA, prontos a entregar à direção.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Componha os seus dashboards, ou deixe a IA gerá-los.',
      body: 'Uma biblioteca de widgets para compor os seus relatórios: carga, GPS, wellness, testes, disponibilidade. Para cada pergunta pontual, uma visualização gerada na hora, pronta a fixar.',
      points: [
        'Widgets de carga, GPS, wellness, testes e disponibilidade',
        'Composição por arrastar e largar, por equipa ou por jogador',
        'Visualizações geradas pela IA, fixáveis num clique',
        'Partilha em leitura com a direção e o staff alargado',
      ],
      cta: 'Ver a BI em detalhe',
      href: '/pt/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVENCER O STAFF',
    title: 'Comece sozinho, depois traga o staff com o dossiê.',
    body: 'Três etapas, quase sempre as mesmas: um preparador adota o STRIVN, mostra o que os dados mudam, e o staff junta-se. O dossiê de staff resume o argumento para um treinador principal ou uma direção de clube; envia-o num link ou num PDF.',
    steps: [
      {
        title: 'Adota o STRIVN',
        body: 'Importação GPS, wellness e controlo de carga na sua equipa, sem compromisso.',
      },
      {
        title: 'Partilha o dossiê de staff',
        body: 'Um link ou um PDF que apresenta o valor para cada função.',
      },
      {
        title: 'O staff junta-se ao seu espaço',
        body: 'Treinador principal, staff médico, adjuntos: uma vista por função, os mesmos dados.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIÊ DE STAFF',
      title: 'O valor para cada função',
      roles: [
        { icon: 'users', body: 'Treinador principal: disponibilidade real na convocatória' },
        { icon: 'heart-pulse', body: 'Staff médico: enfermaria e protocolos de regresso partilhados' },
        { icon: 'clipboard', body: 'Adjuntos: sessões ligadas ao estado do plantel' },
        { icon: 'shield', body: 'Direção: uma equipa estruturada, sem investimento inicial' },
      ],
      copyBtn: 'Copiar o link',
      pdfBtn: 'Descarregar o PDF',
      note: 'CONCEBIDO PARA SER ENVIADO TAL COMO ESTÁ',
    },
  },
  solutions: {
    index: '07',
    kicker: 'POR FUNÇÃO',
    title: 'Escolha a sua página consoante a sua função no staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Preparadores físicos',
        body: 'Todo o detalhe: monitorização, testes, programas e metodologia.',
        cta: 'Consultar a página de preparação física',
        href: '/pt/sc-coaches/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Treinador principal & staff',
        body: 'Convocatórias, presenças, sessões, tática: a gestão diária da equipa.',
        cta: 'Ver a gestão de equipa',
        href: '/pt/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PREÇOS',
    title: 'Quatro níveis. O gratuito aguenta toda a época.',
    note: 'O nível Semi-Pro assume o cruzamento GPS, RPE e wellness que ainda faz à mão. Cada nova conta dispõe dele durante 30 dias, sem cartão.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'As perguntas que os staffs fazem.',
    body: 'O papel dos jogadores, a governação do espaço e os prazos de implementação.',
    contactTitle: 'Outra pergunta?',
    contactBody: 'Escreva-nos. Respondemos nós próprios.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Como importo os meus dados GPS?',
        a: 'Por exportação CSV, a partir do Catapult, do STATSports ou de qualquer outro sistema. A correspondência de colunas fica memorizada na primeira importação; as seguintes demoram segundos.',
      },
      {
        q: 'Quem mantém o controlo do espaço de equipa?',
        a: 'Você. Cria o espaço, convida o staff e define os direitos de cada um, sem validação do clube.',
      },
      {
        q: 'Qual é o prazo de implementação?',
        a: 'Alguns minutos: crie o espaço, adicione os seus jogadores, importe a primeira sessão. Os primeiros 30 dias são em Semi-Pro, sem cartão; o histórico constrói-se ao longo das semanas.',
      },
      {
        q: 'Porque é que o plano Free é gratuito?',
        a: 'Porque um treinador tem de poder estruturar o seu trabalho sem pedir orçamento. O Free cobre uma equipa, jogadores sem limite e um lugar de staff, para sempre. Os níveis pagos abrem o segundo lugar de staff, depois a importação GPS, o quadro médico e o staff sem limite.',
      },
      {
        q: 'Adequa-se ao futebol amador e semiprofissional?',
        a: 'Sim, é o terreno do STRIVN: staffs de duas ou três pessoas, meios medidos, e jogadores que respondem a partir de uma única app.',
      },
      {
        q: 'Preparador: como obter a adesão do treinador principal?',
        a: 'Comece com os seus próprios dados e depois transmita o dossiê de staff a partir do site. O treinador principal lê a disponibilidade real na convocatória, e o argumento está feito.',
      },
    ],
  },
  finalCta: {
    kicker: 'COMECE SOZINHO, GRATUITAMENTE',
    title: 'Crie o seu espaço e importe a sua primeira sessão.',
    body: 'Os primeiros 30 dias são em Semi-Pro, importação GPS incluída, sem cartão. Depois o plano Free faz girar a equipa toda a época, e o seu staff junta-se quando vir os seus primeiros relatórios.',
    primaryCta: 'Criar o meu espaço gratuitamente',
    secondaryCta: 'Partilhar o dossiê de staff',
    trust: 'SEM CARTÃO DE CRÉDITO · SEM VALIDAÇÃO DO CLUBE · OS SEUS DADOS SÃO SEUS',
  },
  footer: {
    tagline: 'A monitorização de um staff profissional, sem o orçamento de um clube profissional.',
    body: 'O STRIVN reúne a monitorização da performance e a gestão de equipa num único espaço partilhado pelo staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUTO',
        links: [
          { label: 'Plataforma', href: '/pt/solutions/' },
          { label: 'Funcionalidades', href: '/pt/features/' },
          { label: 'Preços', href: '/pt/pricing/' },
          { label: 'FAQ', href: '/pt/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUÇÕES',
        links: [
          { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          { label: 'Suporte', href: '/pt/support/' },
          { label: 'Privacidade', href: '/pt/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Grátis para uma equipa, toda a época',
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: HomeContent = {
  meta: {
    title: 'STRIVN | El sistema operativo del staff de rendimiento',
    description:
      'Importación GPS, wellness, carga y planificación en una sola herramienta. La IA lee los datos de la plantilla y señala a quién aliviar. Gratis para un equipo, compartido por todo el staff.',
  },
  hero: {
    eyebrow: 'Construido con staffs profesionales',
    titleMuted: 'El sistema operativo',
    titleMain: 'del staff de rendimiento.',
    sub: 'Importación GPS, wellness, carga y planificación en una sola herramienta. La IA lee los datos de la plantilla y le dice quién está apto, a quién aliviar y a quién vigilar. Una sola lectura diaria, compartida por todo el staff.',
    primaryCta: 'Empezar gratis',
    secondaryCta: 'Ver el workflow de monitorización',
    shot: {
      title: 'Readiness del día · Olympique Montverne',
      stamp: 'MIÉ 07:45',
      kpis: [
        { label: 'READINESS', value: '82%', tone: 'blue' },
        { label: 'CARGA 7 D', value: '2.340 UA', tone: 'plain' },
        { label: 'ACWR', value: '1.08', tone: 'green' },
        { label: 'ALERTAS', value: '3', tone: 'orange' },
      ],
      alertsLabel: 'PLANTILLA · READINESS POR JUGADOR',
      rows: [
        { name: 'A. Diallo', status: 'Apto', tone: 'green', bar: 91, acwr: '1.05' },
        { name: 'L. Moreau', status: 'Aliviar', tone: 'coral', bar: 58, acwr: '1.31' },
        { name: 'K. Nakamura', status: 'Vigilar', tone: 'orange', bar: 71, acwr: '1.18' },
        { name: 'S. Petit', status: 'Apto', tone: 'green', bar: 88, acwr: '0.97' },
        { name: 'M. Lefèvre', status: 'Apto', tone: 'green', bar: 84, acwr: '1.02' },
      ],
      wellness: {
        title: 'Wellness · 16/18',
        rows: [
          { label: 'Sueño', value: '7.2', tone: 'green' },
          { label: 'Fatiga', value: '6.1', tone: 'orange' },
          { label: 'Ánimo', value: '7.9', tone: 'green' },
        ],
      },
      toast: { title: 'Importación GPS completada', sub: '18 jugadores · sesión del martes' },
      alert: {
        title: 'Alerta de carga',
        body: 'L. Moreau — ACWR 1.31, tercera semana por encima del umbral. Alivio propuesto para el jueves.',
      },
      micro: { title: 'Microciclo · S12' },
      ai: {
        title: 'Asistente IA',
        q: '¿Quién está apto para el domingo?',
        a: '14 jugadores aptos. L. Moreau a vigilar (ACWR 1.31), T. Mendes en protocolo — regreso estimado D+18.',
        sources: 'FUENTES · ASISTENCIA, CARGA, ENFERMERÍA',
      },
    },
  },
  spectre: {
    kicker: 'UN SOLO SISTEMA, DEL LUNES AL PARTIDO',
    title: 'Haga girar toda la semana en un solo espacio.',
    steps: [
      { icon: 'calendar', label: 'Planificación' },
      { icon: 'send', label: 'Convocatorias' },
      { icon: 'clipboard', label: 'Construcción de sesión' },
      { icon: 'radio', label: 'Sesión y partido en directo' },
      { icon: 'activity', label: 'Monitorización & GPS' },
      { icon: 'moon', label: 'Wellness' },
      { icon: 'heart-pulse', label: 'Enfermería' },
      { icon: 'bar-chart', label: 'Informes & BI' },
    ],
    note: 'Cada módulo alimenta a los demás. Un dato introducido una vez sirve a los otros siete.',
  },
  credibility: {
    stat: '50',
    statSuffix: '+',
    statLine: 'equipos gestionan su día a día en STRIVN',
    statSub: 'CLUBES Y ACADEMIAS · DEL REGIONAL AL PROFESIONAL',
    methodKicker: 'METODOLOGÍA',
    methodTitle: 'Alumni Barça Innovation Hub',
  },
  beforeAfter: {
    index: '01',
    kicker: 'EL DIAGNÓSTICO',
    title: 'Reúna GPS, RPE y wellness en una sola lectura.',
    body: 'Cada mañana, las mismas operaciones: exportar el GPS, consolidar los RPE, insistir con los cuestionarios, cruzar tres archivos para establecer el estado de forma de la plantilla. STRIVN asume esa última etapa y la calcula durante la noche.',
    beforeLabel: 'ANTES · HERRAMIENTAS FRAGMENTADAS',
    beforeChips: [
      { icon: 'table', label: 'Libros de Excel dispersos' },
      { icon: 'satellite', label: 'Exportaciones GPS manuales' },
      { icon: 'file-text', label: 'Cuestionarios wellness en papel' },
      { icon: 'message-circle', label: 'RPE recogidos por mensajería' },
      { icon: 'bar-chart', label: 'Informes reconstruidos cada semana' },
      { icon: 'copy', label: 'Una versión por miembro del staff' },
    ],
    afterLabel: 'CON STRIVN · UN SISTEMA UNIFICADO',
    afterRows: [
      { icon: 'satellite', label: 'Importación GPS desde la exportación CSV' },
      { icon: 'moon', label: 'Cuestionario wellness diario, en el móvil' },
      { icon: 'gauge', label: 'RPE recogido al final de cada sesión' },
      { icon: 'activity', label: 'Carga y ACWR calculados en continuo' },
      { icon: 'bell', label: 'Alertas de readiness antes del entrenamiento' },
      { icon: 'users', label: 'Accesible para todo el staff, en tiempo real' },
    ],
  },
  workflow: {
    index: '02',
    kicker: 'EL WORKFLOW',
    title: 'Mida la carga, planifique la semana, dirija la sesión.',
    sub: 'STRIVN lee sus datos, luego planifica la carga, construye las sesiones y los workouts, y los dirige en directo. Seis etapas, del archivo GPS al informe del lunes.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORTACIÓN GPS',
        title: 'Importe la exportación GPS, sea cual sea el sensor.',
        body: 'Suba el CSV de Catapult, STATSports o cualquier otro sistema. Las columnas se reconocen en la primera importación y quedan memorizadas; la sesión queda vinculada al calendario, jugador a jugador, y las siguientes importaciones tardan unos segundos.',
        points: [
          'Importación directa de una exportación CSV',
          'Correspondencia de columnas memorizada',
          'Distancia, sprints y HSR por jugador',
          'Sesión vinculada al calendario del equipo',
        ],
        cta: 'Ver la importación GPS',
        href: '/es/features/training-load/',
        accent: 'blue',
      },
      {
        index: '02 / 06',
        kicker: 'READINESS',
        title: 'Sepa quién está apto antes de la sesión.',
        body: 'Los jugadores responden al check-in al despertar, en veinte segundos. Antes de la sesión sabe quién está apto, quién da una señal y a quién hay que aliviar.',
        points: [
          'Cuestionario wellness al despertar, en el móvil',
          'Score de readiness por jugador, ponderable',
          'Alertas al superar umbrales',
          'Tendencia individual y colectiva',
        ],
        cta: 'Ver el wellness',
        href: '/es/features/check-in/',
        accent: 'green',
      },
      {
        index: '03 / 06',
        kicker: 'PLANIFICACIÓN DE CARGA',
        title: 'Planifique la carga de la semana en UA.',
        body: 'Fije un objetivo diario; STRIVN calcula el ACWR a 7 y 28 días y señala los desvíos. El microciclo se construye sobre la carga realmente absorbida por el grupo.',
        points: [
          'Carga objetivo y realizada, día a día',
          'ACWR y monotonía calculados automáticamente',
          'Periodización del microciclo partido a partido',
          'Ajustes individualizados, aplicados de inmediato',
        ],
        cta: 'Ver la planificación',
        href: '/es/features/training-load/',
        accent: 'blue',
      },
      {
        index: '04 / 06',
        kicker: 'CONSTRUCCIÓN DE SESIÓN & WORKOUTS',
        title: 'Construya la sesión desde el plan de carga.',
        body: 'Monte bloques, ejercicios y cargas objetivo; la carga estimada aparece antes de la sesión. Los workouts individuales se generan desde los mismos datos, protocolos de regreso incluidos.',
        points: [
          'Biblioteca de ejercicios y bloques reutilizables',
          'Carga estimada por bloque, antes de la sesión',
          'Workouts individuales: fuerza, prevención, regreso al juego',
          'Publicación a la app de los jugadores en un gesto',
        ],
        cta: 'Ver el constructor de sesión',
        href: '/es/features/sessions/',
        accent: 'blue',
      },
      {
        index: '05 / 06',
        kicker: 'SESIÓN EN DIRECTO',
        title: 'Siga la carga durante la sesión, bloque a bloque.',
        body: 'Registre la asistencia a pie de campo; la carga se acumula bloque a bloque y el desvío respecto al plan aparece en directo. Ajusta durante la sesión.',
        points: [
          'Registro de asistencia a pie de campo',
          'Carga acumulada en tiempo real, por jugador',
          'Desvío vs carga planificada, bloque a bloque',
        ],
        cta: 'Ver la sesión en directo',
        href: '/es/features/live-session/',
        accent: 'green',
      },
      {
        index: '06 / 06',
        kicker: 'COMPARTIR CON EL STAFF',
        title: 'Comparta la misma lectura con todo el staff.',
        body: 'El informe de la semana se genera automáticamente, el staff lo anota, y las disponibilidades alimentan la convocatoria del domingo. Primer entrenador, fisio y ayudantes leen los mismos datos, cada uno con sus derechos.',
        points: [
          'Vista de readiness compartida con todo el staff',
          'Informe semanal generado automáticamente',
          'Comentarios y decisiones centralizados',
          'Derechos de acceso diferenciados por rol',
        ],
        cta: 'Ver el compartir con el staff',
        href: '/es/features/reports/',
        accent: 'orange',
      },
    ],
    visuals: {
      gps: {
        file: 'sesion_0806_catapult.csv',
        fileSub: '18 jugadores reconocidos · correspondencia aplicada',
        colsLabel: 'COLUMNAS RECONOCIDAS',
        cols: [
          { from: 'Total Distance (m)', to: 'Distancia total' },
          { from: 'HSR >19.8 km/h (m)', to: 'Carrera de alta intensidad' },
          { from: 'Sprint Count', to: 'Sprints' },
          { from: 'Player Load', to: 'Carga externa' },
        ],
        done: 'Importación completada · vinculada a «Sesión del martes · bloque de intensidad»',
      },
      readiness: {
        title: 'Wellness de la mañana · 16 / 18 respuestas',
        stamp: '07:45',
        kpis: [
          { label: 'SUEÑO', value: '7.2', tone: 'green' },
          { label: 'FATIGA', value: '6.1', tone: 'orange' },
          { label: 'AGUJETAS', value: '6.8', tone: 'green' },
          { label: 'ÁNIMO', value: '7.9', tone: 'green' },
        ],
        alertsLabel: 'ALERTAS DE LA MAÑANA',
        alerts: [
          { name: 'L. Moreau', detail: 'Sueño 4 h · fatiga 8/10 · readiness 58', action: 'Ajustar' },
          { name: 'K. Nakamura', detail: 'Agujetas elevadas tras el bloque del martes', action: 'Ajustar' },
        ],
        chartLabel: 'READINESS DEL GRUPO · ÚLTIMOS 14 DÍAS',
      },
      planning: {
        title: 'Microciclo · S12 → partido del domingo',
        legendTarget: 'Objetivo',
        legendActual: 'Realizada',
        days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
        adjustments: [
          { name: 'L. Moreau', detail: 'Jueves: volumen −30% · sin sprints' },
          { name: 'T. Mendes', detail: 'Protocolo de readaptación · 30 min individualizado' },
        ],
      },
      builder: {
        title: 'Sesión del jueves · bloque de intensidad',
        sub: 'Carga estimada 445 UA · objetivo 460',
        badge: 'DENTRO DEL OBJETIVO',
        blocks: [
          { label: 'Calentamiento + activación', time: '12 min', load: '48 UA' },
          { label: 'Bloque de pressing · 8v8', time: '24 min', load: '186 UA' },
          { label: 'Velocidad · sprints lanzados', time: '15 min', load: '124 UA' },
          { label: 'Juego reducido + vuelta a la calma', time: '14 min', load: '87 UA' },
        ],
        workout: {
          title: 'Workout individual · L. Moreau',
          stamp: 'Publicado a la app del jugador',
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / lado · movilidad de cadera 8 min. Generado desde el protocolo de isquios, carga deducida de la sesión colectiva.',
        },
      },
      live: {
        badge: 'LIVE',
        title: 'Sesión del jueves · bloque 2 / 4',
        meta: '20:34 · 17 PRESENTES',
        chartLabel: 'CARGA ACUMULADA VS PLAN · TIEMPO REAL',
        players: [
          { name: 'A. Diallo', pct: 64, tone: 'blue' },
          { name: 'L. Moreau', pct: 92, tone: 'coral' },
          { name: 'S. Petit', pct: 58, tone: 'blue' },
          { name: 'M. Lefèvre', pct: 71, tone: 'blue' },
        ],
        alert: {
          body: 'L. Moreau al 92% de su objetivo ya en el bloque 2. ¿Sacarlo del bloque de velocidad?',
          primary: 'Sacar',
          secondary: 'Mantener',
        },
      },
      share: {
        title: 'Informe semanal · S12',
        stamp: 'GENERADO AUTOMÁTICAMENTE',
        body: 'Carga colectiva conforme al plan (−2%). Readiness al alza. 2 jugadores en adaptación, 1 protocolo de regreso en curso.',
        avatars: ['ET', 'AY', 'FI', 'PF'],
        shared: 'Compartido con 4 miembros del staff',
        commentAuthor: 'PRIMER ENTRENADOR · 09:12',
        comment: 'Visto lo de Moreau. Adaptamos el bloque del jueves como se propone.',
        push: 'Disponibilidades enviadas a la convocatoria del domingo: 15 aptos, 2 a vigilar, 1 no disponible.',
      },
    },
  },
  compatible: {
    kicker: 'COMPATIBILIDAD',
    title: 'Conecte WHOOP, importe cualquier exportación GPS.',
    body: 'Los sistemas GPS exportan un CSV; las columnas se reconocen en la primera importación y luego quedan memorizadas. WHOOP se conecta por su API y envía las medidas de la noche al check-in de la mañana. Cien jugadores pueden conectar su pulsera.',
    badge: 'NUEVO',
    whoopTitle: 'WHOOP rellena por adelantado el check-in de la mañana.',
    points: [
      'Puntuación de recuperación del día',
      'Duración y rendimiento del sueño',
      'VFC y frecuencia cardíaca en reposo',
    ],
    cta: 'Ver el check-in',
    href: '/es/features/check-in/',
    note: 'Las marcas y logotipos citados pertenecen a sus respectivos propietarios. STRIVN es independiente de estas empresas.',
  },
  playerApp: {
    index: '03',
    kicker: 'LADO DEL JUGADOR',
    title: 'Sus jugadores responden en veinte segundos.',
    body: 'La app del jugador pide tres cosas, en el momento adecuado: el wellness al despertar, el RPE después de la sesión, el workout del día. Cada respuesta lleva veinte segundos, y el recordatorio sale solo.',
    points: [
      { icon: 'moon', label: 'Cuestionario wellness al despertar, en 20 segundos' },
      { icon: 'gauge', label: 'RPE post-sesión en un gesto, notificación incluida' },
      { icon: 'dumbbell', label: 'Workouts individuales con vídeos e instrucciones' },
      { icon: 'calendar', label: 'Convocatorias, respuestas y disponibilidad' },
    ],
    note: 'STRIVN Player se descarga en la App Store y en Google Play. Un jugador sin la app responde desde un enlace.',
    cta: 'Ver la app del jugador',
    href: '/es/features/player-app/',
    stores: 'IOS · ANDROID',
    phone: {
      time: '7:42',
      greeting: 'Hola, Adam',
      team: 'Olympique Montverne',
      wellness: {
        title: 'Wellness de la mañana',
        badge: '20 s',
        rows: [
          { label: 'Sueño', value: 4 },
          { label: 'Fatiga', value: 3 },
          { label: 'Agujetas', value: 4 },
        ],
        submit: 'Enviar',
      },
      rpe: { title: 'RPE · sesión de ayer', value: '7' },
      workout: { title: 'Workout de hoy · prevención', meta: '3 ejercicios · 12 min · vídeos incluidos' },
    },
  },
  platform: {
    index: '04',
    kicker: 'TODO EL EQUIPO',
    title: 'Convoque, trate, planifique e informe en el mismo sitio.',
    body: 'Convocatorias, asistencia, enfermería, sesiones e informes viven en el mismo espacio que la monitorización, con un derecho de acceso por rol para cada miembro del staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Carga, RPE & GPS',
        badge: 'MONITORIZACIÓN',
        badgeTone: 'blue',
        body: 'Importación GPS, RPE, carga interna y externa, ACWR y alertas: ahí empieza el día el staff de rendimiento.',
        cta: 'Carga & RPE en detalle',
        href: '/es/features/training-load/',
      },
      {
        icon: 'gauge',
        title: 'Tests & evaluaciones',
        badge: 'MONITORIZACIÓN',
        badgeTone: 'green',
        body: 'Sprint, VAM, CMJ, tests técnicos: las baterías se siguen en el tiempo y alimentan los programas individuales.',
        cta: 'Tests en detalle',
        href: '/es/features/tests/',
      },
    ],
    cards: [
      {
        icon: 'send',
        title: 'Convocatorias & RSVP',
        body: 'Convoque en un clic; las respuestas vuelven el mismo día y la plantilla se actualiza sola.',
        cta: 'En detalle',
        href: '/es/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Enfermería',
        body: 'Declare la lesión una vez; el regreso al juego y las convocatorias siguen, visibles para el staff autorizado.',
        cta: 'En detalle',
        href: '/es/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programas individuales',
        body: 'Fije objetivos y ejercicios vinculados a los datos de cada jugador.',
        cta: 'En detalle',
        href: '/es/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sesiones & táctica',
        body: 'Prepare las sesiones y las pizarras desde el estado de forma del grupo.',
        cta: 'En detalle',
        href: '/es/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Sesión & partido en directo',
        body: 'Registre asistencia, tiempo de juego y eventos a pie de campo.',
        cta: 'En detalle',
        href: '/es/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Informes, IA & dashboards',
        body: 'Reciba resúmenes redactados por la IA y componga sus dashboards, compartidos con el staff y la directiva.',
        cta: 'En detalle',
        href: '/es/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTEGRADAS',
    title: 'Interrogue todos sus datos en una sola pregunta.',
    body: 'La IA lee carga, wellness, GPS e historial médico en conjunto, cuatro fuentes a la vez. Cuando una pregunta merece un gráfico, lo construye y usted lo fija a sus dashboards.',
    console: {
      title: 'Asistente IA',
      badge: 'IA · ANÁLISIS CONTINUO',
      q: 'Compara las métricas de este partido con el anterior y construye una visualización.',
      aIntro: 'Comparación establecida sobre las exportaciones GPS de los partidos J14 y J13:',
      sources: 'FUENTES · GPS PARTIDO J14 · GPS PARTIDO J13',
      chartTitle: 'Partido J14 vs J13 · métricas GPS',
      legend: ['J13', 'J14'],
      metrics: ['DISTANCIA', 'HSR', 'SPRINTS', 'CARGA'],
      insight: 'HSR +9% y sprints +21% con un volumen casi estable: la intensidad progresa sin sobrecoste de carga.',
      pin: 'Fijar al dashboard',
      refine: 'Afinar la pregunta',
      signalTitle: 'Señal levantada por la IA, sin que nadie la pida',
      signalBody: 'Sueño del grupo a la baja un 12% desde el paso a 2 partidos por semana.',
      signalCta: 'Examinar',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Síntesis de la mañana',
        body: 'Reciba el estado del grupo resumido por la IA antes de la sesión: readiness, alertas y ajustes propuestos.',
      },
      {
        icon: 'radar',
        title: 'Detección de señales',
        body: 'La IA cruza en continuo carga, wellness e historial médico. Las derivas afloran antes de la lesión.',
      },
      {
        icon: 'layout',
        title: 'Dashboards bajo demanda',
        body: 'Haga una pregunta; la IA construye la visualización que la responde, y usted la fija a sus dashboards en un clic.',
      },
      {
        icon: 'file-text',
        title: 'Informes redactados por la IA',
        body: 'Reciba los resúmenes semanales y post-partido redactados por la IA, listos para entregar a la directiva.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Componga sus dashboards, o deje que la IA los genere.',
      body: 'Una biblioteca de widgets para componer sus informes: carga, GPS, wellness, tests, disponibilidad. Para cada pregunta puntual, una visualización generada al vuelo, lista para fijar.',
      points: [
        'Widgets de carga, GPS, wellness, tests y disponibilidad',
        'Composición con arrastrar y soltar, por equipo o por jugador',
        'Visualizaciones generadas por la IA, fijables en un clic',
        'Compartir en lectura con la directiva y el staff ampliado',
      ],
      cta: 'Ver la BI en detalle',
      href: '/es/features/reports/',
      dash: {
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
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVENCER AL STAFF',
    title: 'Empiece solo, luego sume al staff con el dossier.',
    body: 'Tres etapas, casi siempre las mismas: un preparador adopta STRIVN, muestra lo que cambian los datos, y el staff se une. El dossier de staff resume el argumento para un primer entrenador o una directiva de club; lo envía en un enlace o un PDF.',
    steps: [
      {
        title: 'Usted adopta STRIVN',
        body: 'Importación GPS, wellness y seguimiento de carga en su equipo, sin compromiso.',
      },
      {
        title: 'Usted comparte el dossier de staff',
        body: 'Un enlace o un PDF que presenta el valor para cada rol.',
      },
      {
        title: 'El staff se une a su espacio',
        body: 'Primer entrenador, staff médico, ayudantes: una vista por rol, los mismos datos.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIER DE STAFF',
      title: 'El valor para cada rol',
      roles: [
        { icon: 'users', body: 'Primer entrenador: disponibilidad real en la convocatoria' },
        { icon: 'heart-pulse', body: 'Staff médico: enfermería y protocolos de regreso compartidos' },
        { icon: 'clipboard', body: 'Ayudantes: sesiones vinculadas al estado del grupo' },
        { icon: 'shield', body: 'Directiva: un equipo estructurado, sin inversión inicial' },
      ],
      copyBtn: 'Copiar el enlace',
      pdfBtn: 'Descargar el PDF',
      note: 'DISEÑADO PARA ENVIARSE TAL CUAL',
    },
  },
  solutions: {
    index: '07',
    kicker: 'POR FUNCIÓN',
    title: 'Elija su página según su rol en el staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Preparadores físicos',
        body: 'Todo el detalle: monitorización, tests, programas y metodología.',
        cta: 'Consultar la página de preparación física',
        href: '/es/sc-coaches/',
        featured: true,
      },
      {
        icon: 'users',
        title: 'Primer entrenador & staff',
        body: 'Convocatorias, asistencia, sesiones, táctica: la gestión diaria del equipo.',
        cta: 'Ver la gestión de equipo',
        href: '/es/features/communication/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRECIOS',
    title: 'Cuatro niveles. El gratuito aguanta toda la temporada.',
    note: 'El nivel Semi-Pro asume el cruce GPS, RPE y wellness que todavía hace a mano. Cada cuenta nueva dispone de él durante 30 días, sin tarjeta.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Las preguntas que hacen los staffs.',
    body: 'El papel de los jugadores, la gobernanza del espacio y los plazos de puesta en marcha.',
    contactTitle: '¿Otra pregunta?',
    contactBody: 'Escríbanos. Respondemos nosotros mismos.',
    email: 'hello@strivn.net',
    items: [
      {
        q: '¿Cómo importo mis datos GPS?',
        a: 'Por exportación CSV, desde Catapult, STATSports o cualquier otro sistema. La correspondencia de columnas queda memorizada en la primera importación; las siguientes tardan unos segundos.',
      },
      {
        q: '¿Quién mantiene el control del espacio de equipo?',
        a: 'Usted. Crea el espacio, invita al staff y define los derechos de cada uno, sin validación del club.',
      },
      {
        q: '¿Cuál es el plazo de puesta en marcha?',
        a: 'Unos minutos: cree el espacio, añada a sus jugadores, importe su primera sesión. Los primeros 30 días son en Semi-Pro, sin tarjeta; el histórico se construye con las semanas.',
      },
      {
        q: '¿Por qué el plan Free es gratuito?',
        a: 'Porque un entrenador tiene que poder estructurar su trabajo sin pedir presupuesto. Free cubre un equipo, jugadores sin límite y una plaza de staff, para siempre. Los niveles de pago abren la segunda plaza de staff, luego la importación GPS, el cuadro médico y el staff sin límite.',
      },
      {
        q: '¿Se adapta al fútbol amateur y semiprofesional?',
        a: 'Sí, es el terreno de STRIVN: staffs de dos o tres personas, medios medidos, y jugadores que responden desde una sola app.',
      },
      {
        q: 'Preparador: ¿cómo lograr la adhesión del primer entrenador?',
        a: 'Empiece con sus propios datos y luego transmita el dossier de staff desde el sitio. El primer entrenador lee la disponibilidad real en la convocatoria, y el argumento está hecho.',
      },
    ],
  },
  finalCta: {
    kicker: 'EMPIECE SOLO, GRATIS',
    title: 'Cree su espacio e importe su primera sesión.',
    body: 'Los primeros 30 días son en Semi-Pro, importación GPS incluida, sin tarjeta. Después el plan Free hace girar al equipo toda la temporada, y su staff se une cuando vea sus primeros informes.',
    primaryCta: 'Crear mi espacio gratis',
    secondaryCta: 'Compartir el dossier de staff',
    trust: 'SIN TARJETA DE CRÉDITO · SIN VALIDACIÓN DEL CLUB · SUS DATOS SIGUEN SIENDO SUYOS',
  },
  footer: {
    tagline: 'La monitorización de un staff profesional, sin el presupuesto de un club profesional.',
    body: 'STRIVN reúne la monitorización del rendimiento y la gestión de equipo en un solo espacio compartido por el staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCTO',
        links: [
          { label: 'Plataforma', href: '/es/solutions/' },
          { label: 'Funcionalidades', href: '/es/features/' },
          { label: 'Precios', href: '/es/pricing/' },
          { label: 'FAQ', href: '/es/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUCIONES',
        links: [
          { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          { label: 'Soporte', href: '/es/support/' },
          { label: 'Privacidad', href: '/es/privacy/' },
        ],
      },
    ],
    copyright: '© 2026 STRIVN · Gratis para un equipo, toda la temporada',
  },
};

export const homeContent: Record<Locale, HomeContent> = { fr, en, nl, de, pt, es };
