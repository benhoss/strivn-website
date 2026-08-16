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
  nav: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
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
  pricing: {
    index: string;
    kicker: string;
    title: string;
    plans: Array<{
      name: string;
      badge: string;
      price: string;
      period?: string;
      description: string;
      features: string[];
      cta: string;
      kind: 'app' | 'demo' | 'contact';
      featured?: boolean;
    }>;
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
      'Import GPS, wellness, charge et planification — avec une IA qui transforme les données du groupe en décisions. Gratuit pour une équipe, partagé par tout le staff.',
  },
  nav: {
    links: [
      { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
      { label: 'Plateforme', href: '/fr/#plateforme' },
      { label: 'Fonctionnalités', href: '/fr/features/' },
      { label: 'Solutions', href: '/fr/solutions/' },
      { label: 'Tarifs', href: '/fr/#tarifs' },
      { label: 'FAQ', href: '/fr/#faq' },
    ],
    cta: 'Commencer',
  },
  hero: {
    eyebrow: 'Conçu avec des staffs professionnels',
    titleMuted: 'Le système d’exploitation',
    titleMain: 'du staff performance.',
    sub: 'Import GPS, wellness, charge et planification — avec une couche d’intelligence artificielle qui transforme les données du groupe en décisions. Une seule lecture quotidienne, partagée par tout le staff.',
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
    title: 'Le spectre complet du quotidien d’une équipe.',
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
    note: 'Chaque module alimente les autres — les données ne se ressaisissent jamais.',
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
    title: 'Votre exigence a dépassé vos outils.',
    body: 'Chaque matin, les mêmes opérations : exporter les données GPS, consolider les RPE, relancer les questionnaires, croiser plusieurs fichiers pour établir l’état de forme du groupe.',
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
      { icon: 'satellite', label: 'Import GPS automatisé' },
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
    title: 'Mesurer. Planifier. Construire. Conduire.',
    sub: 'L’analyse n’est que la moitié du système : STRIVN planifie la charge, construit les séances et les workouts, et les conduit en direct.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORT GPS',
        title: 'Vos données GPS intégrées, sans ressaisie.',
        body: 'Un export CSV de n’importe quel système — Catapult, STATSports ou autre — suffit : la séance est rattachée au calendrier, joueur par joueur.',
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
        title: 'L’état de forme du groupe, établi avant la séance.',
        body: 'Les joueurs complètent leur questionnaire au réveil. Avant la séance, vous disposez d’une lecture précise : qui est apte, qui présente un signal, qui requiert un ajustement.',
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
        title: 'La planification s’appuie sur des données objectives.',
        body: 'Charge cible quotidienne, ACWR calculé en continu, ajustements par joueur. Le microcycle se construit sur la charge réellement absorbée par le groupe.',
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
        title: 'La séance et les workouts, construits sur la donnée.',
        body: 'Le plan de charge devient une séance réelle : blocs, exercices, charges cibles. Les workouts individuels se génèrent depuis les mêmes données — protocoles de retour compris.',
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
        title: 'Les stats montent pendant que la séance tourne.',
        body: 'Présences pointées, charge qui se cumule bloc par bloc, écarts visibles immédiatement. Vous ajustez pendant la séance — pas le lendemain.',
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
        title: 'Le head coach dispose de la même lecture que vous.',
        body: 'Le rapport hebdomadaire se génère automatiquement, le staff annote, et les disponibilités alimentent directement la convocation. Aucun document à reconstruire, aucun résumé à retranscrire.',
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
        done: 'Import terminé — relié à « Séance mardi · bloc intensité »',
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
          { name: 'L. Moreau', detail: 'Sommeil 4 h · fatigue 8/10 — readiness 58', action: 'Adapter' },
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
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / côté · mobilité hanche 8 min — généré depuis le protocole ischio, charge déduite de la séance collective.',
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
          body: 'L. Moreau à 92 % de sa cible dès le bloc 2 — l’écarter du bloc vitesse ?',
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
        comment: 'Vu pour Moreau — on adapte le bloc de jeudi comme proposé.',
        push: 'Disponibilités poussées vers la convocation de dimanche — 15 aptes, 2 à surveiller, 1 indisponible.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'CÔTÉ JOUEUR',
    title: 'La collecte ne repose pas sur votre insistance.',
    body: 'Un monitoring ne vaut que si les joueurs répondent. L’app joueur demande peu, au bon moment : wellness au réveil, RPE après la séance, workout du jour. Vingt secondes, pas un formulaire.',
    points: [
      { icon: 'moon', label: 'Questionnaire wellness au réveil, en 20 secondes' },
      { icon: 'gauge', label: 'RPE post-séance en un geste, notification incluse' },
      { icon: 'dumbbell', label: 'Workouts individuels avec vidéos et consignes' },
      { icon: 'calendar', label: 'Convocations, réponses et disponibilité' },
    ],
    note: 'L’app n’est jamais obligatoire : un joueur peut tout faire depuis un simple lien, sans compte.',
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
    title: 'Le monitoring s’inscrit dans une plateforme complète.',
    body: 'STRIVN n’est pas un outil de monitoring isolé : convocations, présences, infirmerie, séances et rapports sont réunis dans le même environnement, pour l’ensemble du staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Charge, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'Le cœur du système : import GPS, RPE, charge interne et externe, ACWR et alertes — le point d’entrée quotidien du staff performance.',
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
        body: 'Convocations diffusées, réponses consolidées, effectif à jour.',
        cta: 'En détail',
        href: '/fr/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Infirmerie',
        body: 'Blessures et retour au jeu, visibles par le staff autorisé.',
        cta: 'En détail',
        href: '/fr/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programmes individuels',
        body: 'Objectifs et exercices reliés aux données de chaque joueur.',
        cta: 'En détail',
        href: '/fr/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Séances & tactique',
        body: 'Plans de séance et tableaux connectés à l’état du groupe.',
        cta: 'En détail',
        href: '/fr/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Séance & match en direct',
        body: 'Présences, temps de jeu et événements saisis au bord du terrain.',
        cta: 'En détail',
        href: '/fr/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Rapports, IA & dashboards',
        body: 'Comptes-rendus rédigés par l’IA et dashboards composables, partagés avec le staff et la direction.',
        cta: 'En détail',
        href: '/fr/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTÉGRÉES',
    title: 'L’IA et la BI, intégrées à chaque niveau.',
    body: 'Pas un chatbot posé sur vos données : une IA qui lit charge, wellness, GPS et historique médical ensemble. Et quand une question mérite un graphique, l’IA le construit.',
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
      signalTitle: 'Signal détecté par l’IA, sans sollicitation',
      signalBody: 'Sommeil du groupe en baisse de 12 % depuis le passage à 2 matchs / semaine.',
      signalCta: 'Examiner',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Synthèse du matin',
        body: 'L’état du groupe résumé par l’IA avant la séance : readiness, alertes et ajustements proposés.',
      },
      {
        icon: 'radar',
        title: 'Détection de signaux',
        body: 'L’IA croise en continu charge × wellness × historique médical. Les dérives remontent avant la blessure.',
      },
      {
        icon: 'layout',
        title: 'Dashboards à la demande',
        body: 'Posez une question, l’IA construit la visualisation qui y répond — et l’épingle à vos dashboards en un clic.',
      },
      {
        icon: 'file-text',
        title: 'Rapports rédigés par l’IA',
        body: 'Comptes-rendus hebdomadaires et post-match rédigés par l’IA, prêts à transmettre à la direction.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Vos dashboards, construits — ou générés.',
      body: 'Une bibliothèque de widgets pour composer vos rapports : charge, GPS, wellness, tests, disponibilité. Et pour chaque question ponctuelle, une visualisation générée à la volée, prête à être épinglée.',
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
        hsr: 'HSR — match vs match',
        aiTag: 'GÉNÉRÉ PAR L’IA',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVAINCRE LE STAFF',
    title: 'Adopté par un préparateur. Déployé par tout le staff.',
    body: 'Le déploiement suit presque toujours le même schéma : un préparateur adopte la plateforme, démontre la valeur des données, et le staff le rejoint. Le dossier staff synthétise cette valeur pour un head coach ou une direction de club — transmissible en un geste.',
    steps: [
      {
        title: 'Vous adoptez la plateforme',
        body: 'Import GPS, wellness et suivi de charge sur votre équipe, sans engagement.',
      },
      {
        title: 'Vous partagez le dossier staff',
        body: 'Un lien ou un PDF qui présente la valeur pour chaque rôle.',
      },
      {
        title: 'Le staff rejoint votre espace',
        body: 'Head coach, staff médical, adjoints — une vue par rôle, les mêmes données.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIER STAFF',
      title: 'La valeur pour chaque rôle',
      roles: [
        { icon: 'users', body: 'Head coach — disponibilité réelle à la convocation' },
        { icon: 'heart-pulse', body: 'Staff médical — infirmerie et protocoles de retour partagés' },
        { icon: 'clipboard', body: 'Adjoints — séances reliées à l’état du groupe' },
        { icon: 'shield', body: 'Direction — une équipe structurée, sans investissement initial' },
      ],
      copyBtn: 'Copier le lien',
      pdfBtn: 'Télécharger le PDF',
      note: 'CONÇU POUR ÊTRE TRANSMIS EN UN GESTE',
    },
  },
  solutions: {
    index: '07',
    kicker: 'PAR FONCTION',
    title: 'Une porte d’entrée pour chaque fonction du staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Préparateurs physiques',
        body: 'L’approfondissement complet : monitoring, tests, programmes et méthodologie.',
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
      {
        icon: 'building',
        title: 'Clubs & académies',
        body: 'Plusieurs équipes, base joueurs partagée, suivi médical inter-équipes.',
        cta: 'Voir l’offre club',
        href: '/fr/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'TARIFS',
    title: 'Gratuit pour le staff. Facturé à l’échelle du club.',
    plans: [
      {
        name: 'Coach',
        badge: 'Disponible maintenant',
        price: '0€',
        period: 'pour toujours',
        description: 'Pour déployer STRIVN sur une équipe, sans solliciter de budget club.',
        features: [
          '1 équipe',
          'Joueurs illimités',
          'Staff illimité',
          'Événements, séances et matchs',
          'Présences, RSVP et communication',
          'Infirmerie, tactique, rapports et assistant IA',
        ],
        cta: 'Créer mon équipe',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Ouverture progressive',
        price: 'Bientôt',
        description: 'Pour coordonner toutes les équipes et les staffs d’un club.',
        features: [
          'Plusieurs équipes',
          'Base joueurs partagée',
          'Staff médical et coordinateurs partagés',
          'Dashboards et reporting club',
          'Suivi blessure inter-équipes',
        ],
        cta: 'Demander une démo',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'Sur demande',
        price: 'Bientôt',
        description: 'Pour les organisations qui veulent des insights avancés.',
        features: [
          'Tout le plan Club',
          'Reporting avancé',
          'Analytics avancées',
          'Accès API',
          'Insights organisationnels',
        ],
        cta: 'Parler à l’équipe',
        kind: 'contact',
      },
    ],
    note: 'La facturation intervient lorsqu’un club coordonne plusieurs équipes et staffs dans STRIVN — jamais pour débloquer les outils du staff.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Les questions que posent les staffs.',
    body: 'Le rôle des joueurs, la gouvernance de l’espace et les délais de mise en place.',
    contactTitle: 'Une autre question ?',
    contactBody: 'Écrivez-nous — l’équipe fondatrice vous répond directement.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Comment importer mes données GPS ?',
        a: 'Par export CSV, depuis n’importe quel système — Catapult, STATSports ou un autre. La correspondance des colonnes est mémorisée : les imports suivants prennent quelques secondes.',
      },
      {
        q: 'Qui garde le contrôle de l’espace d’équipe ?',
        a: 'Vous. Vous créez l’espace, invitez le staff et définissez les droits d’accès de chacun. Aucune validation du club n’est requise.',
      },
      {
        q: 'Quel est le délai de mise en place ?',
        a: 'Quelques minutes : créez l’espace, ajoutez vos joueurs, importez votre première séance. L’historique se construit au fil des semaines.',
      },
      {
        q: 'Pourquoi le plan Coach est-il gratuit ?',
        a: 'Un membre du staff ne devrait pas solliciter un budget pour structurer son travail. La facturation intervient au niveau du club, lorsque plusieurs équipes doivent être coordonnées.',
      },
      {
        q: 'Est-ce adapté au football amateur et semi-professionnel ?',
        a: 'C’est précisément le terrain de STRIVN : des staffs restreints, des moyens mesurés, et des joueurs qui n’utiliseront pas dix applications distinctes.',
      },
      {
        q: 'Préparateur : comment obtenir l’adhésion du head coach ?',
        a: 'Commencez avec vos propres données, puis transmettez le dossier staff depuis le site. Lorsque le head coach constate la disponibilité réelle dans la convocation, l’adhésion suit naturellement.',
      },
    ],
  },
  finalCta: {
    kicker: 'COMMENCEZ SEUL, GRATUITEMENT',
    title: 'Vos données et votre staff, sous un même toit.',
    body: 'Créez votre espace gratuitement — import GPS, wellness, charge et readiness inclus dès le premier jour. Votre staff vous rejoint lorsque la démonstration est faite.',
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Partager le dossier staff',
    trust: 'AUCUNE CARTE BANCAIRE · SANS VALIDATION DU CLUB · VOS DONNÉES RESTENT LES VÔTRES',
  },
  footer: {
    tagline: 'Le suivi de la performance, au standard professionnel.',
    body: 'STRIVN réunit le monitoring de la performance et l’intendance d’équipe dans un seul espace partagé par le staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUIT',
        links: [
          { label: 'Plateforme', href: '/fr/#plateforme' },
          { label: 'Fonctionnalités', href: '/fr/features/' },
          { label: 'Tarifs', href: '/fr/#tarifs' },
          { label: 'FAQ', href: '/fr/#faq' },
          { label: 'Blog', href: '/fr/blog/' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
          { label: 'Clubs', href: '/fr/clubs/' },
          { label: 'Équipes de jeunes', href: '/fr/equipes-jeunes/' },
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
    copyright: '© 2026 STRIVN · Gratuit pour les coaches, bientôt pour les clubs',
  },
};

/* ────────────────────────────── EN ────────────────────────────── */

const en: HomeContent = {
  meta: {
    title: 'STRIVN | The operating system for performance staff',
    description:
      'GPS import, wellness, load and planning — with an AI layer that turns squad data into decisions. Free for one team, shared by the whole staff.',
  },
  nav: {
    links: [
      { label: 'S&C coaches', href: '/en/sc-coaches/' },
      { label: 'Platform', href: '/en/#plateforme' },
      { label: 'Features', href: '/en/features/' },
      { label: 'Solutions', href: '/en/solutions/' },
      { label: 'Pricing', href: '/en/#tarifs' },
      { label: 'FAQ', href: '/en/#faq' },
    ],
    cta: 'Get started',
  },
  hero: {
    eyebrow: 'Built with professional staffs',
    titleMuted: 'The operating system',
    titleMain: 'for performance staff.',
    sub: 'GPS import, wellness, load and planning — with an artificial-intelligence layer that turns squad data into decisions. One daily read, shared by the whole staff.',
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
    title: 'The full spectrum of a team’s daily work.',
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
    note: 'Every module feeds the others — data is never re-entered.',
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
    title: 'Your standards have outgrown your tools.',
    body: 'Every morning, the same operations: export GPS data, consolidate RPEs, chase questionnaires, cross-reference several files just to establish the squad’s state of readiness.',
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
      { icon: 'satellite', label: 'Automated GPS import' },
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
    title: 'Measure. Plan. Build. Run.',
    sub: 'Analysis is only half the system: STRIVN plans the load, builds the sessions and workouts, and runs them live.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS IMPORT',
        title: 'Your GPS data integrated, no re-typing.',
        body: 'A CSV export from any system — Catapult, STATSports or another — is enough: the session is attached to the calendar, player by player.',
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
        title: 'The squad’s state of form, set before the session.',
        body: 'Players complete their questionnaire on waking. Before the session you have a precise read: who is fit, who shows a signal, who needs an adjustment.',
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
        title: 'Planning built on objective data.',
        body: 'Daily target load, ACWR computed continuously, per-player adjustments. The microcycle is built on the load the squad actually absorbed.',
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
        title: 'Sessions and workouts, built on the data.',
        body: 'The load plan becomes a real session: blocks, drills, target loads. Individual workouts generate from the same data — return protocols included.',
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
        title: 'The numbers climb while the session runs.',
        body: 'Attendance ticked off, load accumulating block by block, gaps visible immediately. You adjust during the session — not the day after.',
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
        title: 'The head coach reads the same picture as you.',
        body: 'The weekly report generates automatically, the staff annotates, and availability feeds straight into the call-up. No document to rebuild, no summary to retype.',
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
        done: 'Import complete — linked to “Tuesday session · intensity block”',
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
          { name: 'L. Moreau', detail: 'Sleep 4 h · fatigue 8/10 — readiness 58', action: 'Adjust' },
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
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / side · hip mobility 8 min — generated from the hamstring protocol, load deducted from the team session.',
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
          body: 'L. Moreau at 92% of his target by block 2 — pull him from the speed block?',
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
        comment: 'Seen for Moreau — we adapt Thursday’s block as proposed.',
        push: 'Availability pushed to Sunday’s call-up — 15 fit, 2 to monitor, 1 unavailable.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'PLAYER SIDE',
    title: 'The data comes in without you chasing it.',
    body: 'Monitoring is only worth it if players respond. The player app asks little, at the right moment: wellness on waking, RPE after the session, the day’s workout. Twenty seconds, not a form.',
    points: [
      { icon: 'moon', label: 'Wellness questionnaire on waking, in 20 seconds' },
      { icon: 'gauge', label: 'Post-session RPE in one tap, notification included' },
      { icon: 'dumbbell', label: 'Individual workouts with videos and instructions' },
      { icon: 'calendar', label: 'Call-ups, responses and availability' },
    ],
    note: 'The app is never mandatory: a player can do everything from a simple link, with no account.',
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
    title: 'Monitoring lives inside a complete platform.',
    body: 'STRIVN is not an isolated monitoring tool: call-ups, attendance, medical log, sessions and reports live in the same environment, for the whole staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Load, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'The core of the system: GPS import, RPE, internal and external load, ACWR and alerts — the performance staff’s daily entry point.',
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
        body: 'Call-ups sent, responses consolidated, squad list up to date.',
        cta: 'In detail',
        href: '/en/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Medical room',
        body: 'Injuries and return to play, visible to authorised staff.',
        cta: 'In detail',
        href: '/en/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individual programmes',
        body: 'Goals and drills linked to each player’s data.',
        cta: 'In detail',
        href: '/en/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sessions & tactics',
        body: 'Session plans and boards connected to the squad’s state.',
        cta: 'In detail',
        href: '/en/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Live session & match',
        body: 'Attendance, playing time and events captured pitch-side.',
        cta: 'In detail',
        href: '/en/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Reports, AI & dashboards',
        body: 'AI-written summaries and composable dashboards, shared with staff and board.',
        cta: 'In detail',
        href: '/en/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'AI & BI BUILT IN',
    title: 'AI and BI, integrated at every level.',
    body: 'Not a chatbot bolted onto your data: an AI that reads load, wellness, GPS and medical history together. And when a question deserves a chart, the AI builds it.',
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
      signalTitle: 'Signal detected by the AI, unprompted',
      signalBody: 'Squad sleep down 12% since moving to 2 matches per week.',
      signalCta: 'Examine',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Morning briefing',
        body: 'The squad’s state summarised by the AI before the session: readiness, alerts and proposed adjustments.',
      },
      {
        icon: 'radar',
        title: 'Signal detection',
        body: 'The AI continuously crosses load × wellness × medical history. Drifts surface before the injury.',
      },
      {
        icon: 'layout',
        title: 'Dashboards on demand',
        body: 'Ask a question, the AI builds the visualisation that answers it — and pins it to your dashboards in one click.',
      },
      {
        icon: 'file-text',
        title: 'AI-written reports',
        body: 'Weekly and post-match summaries written by the AI, ready to hand to the board.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Your dashboards, built — or generated.',
      body: 'A widget library to compose your reports: load, GPS, wellness, tests, availability. And for every one-off question, a visualisation generated on the fly, ready to pin.',
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
        hsr: 'HSR — match vs match',
        aiTag: 'AI-GENERATED',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'WINNING OVER THE STAFF',
    title: 'Adopted by an S&C coach. Deployed by the whole staff.',
    body: 'Deployment almost always follows the same path: an S&C coach adopts the platform, demonstrates the value of the data, and the staff joins. The staff dossier distils that value for a head coach or club board — shareable in one gesture.',
    steps: [
      {
        title: 'You adopt the platform',
        body: 'GPS import, wellness and load tracking on your team, no commitment.',
      },
      {
        title: 'You share the staff dossier',
        body: 'A link or a PDF that presents the value for each role.',
      },
      {
        title: 'The staff joins your space',
        body: 'Head coach, medical staff, assistants — one view per role, the same data.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFF DOSSIER',
      title: 'The value for each role',
      roles: [
        { icon: 'users', body: 'Head coach — real availability at call-up time' },
        { icon: 'heart-pulse', body: 'Medical staff — shared medical log and return protocols' },
        { icon: 'clipboard', body: 'Assistants — sessions linked to the squad’s state' },
        { icon: 'shield', body: 'Board — a structured team, with no upfront investment' },
      ],
      copyBtn: 'Copy the link',
      pdfBtn: 'Download the PDF',
      note: 'DESIGNED TO BE PASSED ON IN ONE GESTURE',
    },
  },
  solutions: {
    index: '07',
    kicker: 'BY ROLE',
    title: 'An entry point for every role on the staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'S&C coaches',
        body: 'The full deep-dive: monitoring, tests, programmes and methodology.',
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
      {
        icon: 'building',
        title: 'Clubs & academies',
        body: 'Several teams, shared player base, cross-team medical tracking.',
        cta: 'See the club offer',
        href: '/en/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRICING',
    title: 'Free for the staff. Billed at club scale.',
    plans: [
      {
        name: 'Coach',
        badge: 'Available now',
        price: '€0',
        period: 'forever',
        description: 'To deploy STRIVN on one team, without asking for club budget.',
        features: [
          '1 team',
          'Unlimited players',
          'Unlimited staff',
          'Events, sessions and matches',
          'Attendance, RSVP and communication',
          'Medical log, tactics, reports and AI assistant',
        ],
        cta: 'Create my team',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Progressive rollout',
        price: 'Soon',
        description: 'To coordinate all of a club’s teams and staffs.',
        features: [
          'Several teams',
          'Shared player base',
          'Shared medical staff and coordinators',
          'Club dashboards and reporting',
          'Cross-team injury tracking',
        ],
        cta: 'Request a demo',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'On request',
        price: 'Soon',
        description: 'For organisations that want advanced insights.',
        features: [
          'Everything in Club',
          'Advanced reporting',
          'Advanced analytics',
          'API access',
          'Organisational insights',
        ],
        cta: 'Talk to the team',
        kind: 'contact',
      },
    ],
    note: 'Billing starts when a club coordinates several teams and staffs in STRIVN — never to unlock the staff’s tools.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'The questions staffs ask.',
    body: 'The players’ role, space governance and time to get set up.',
    contactTitle: 'Another question?',
    contactBody: 'Write to us — the founding team replies directly.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'How do I import my GPS data?',
        a: 'Via CSV export, from any system — Catapult, STATSports or another. Column mapping is remembered: subsequent imports take a few seconds.',
      },
      {
        q: 'Who keeps control of the team space?',
        a: 'You do. You create the space, invite the staff and define each person’s access rights. No club validation is required.',
      },
      {
        q: 'How long does setup take?',
        a: 'A few minutes: create the space, add your players, import your first session. History builds up over the weeks.',
      },
      {
        q: 'Why is the Coach plan free?',
        a: 'A staff member should not have to request budget to structure their work. Billing happens at club level, when several teams need to be coordinated.',
      },
      {
        q: 'Is it suited to amateur and semi-professional football?',
        a: 'That is precisely STRIVN’s home ground: small staffs, measured means, and players who will not use ten separate apps.',
      },
      {
        q: 'S&C coach: how do I get the head coach on board?',
        a: 'Start with your own data, then share the staff dossier from the site. Once the head coach sees real availability in the call-up, buy-in follows naturally.',
      },
    ],
  },
  finalCta: {
    kicker: 'START ALONE, FOR FREE',
    title: 'Your data and your staff, under one roof.',
    body: 'Create your space for free — GPS import, wellness, load and readiness included from day one. Your staff joins once the demonstration is made.',
    primaryCta: 'Create my space for free',
    secondaryCta: 'Share the staff dossier',
    trust: 'NO CREDIT CARD · NO CLUB APPROVAL · YOUR DATA STAYS YOURS',
  },
  footer: {
    tagline: 'Performance tracking, at the professional standard.',
    body: 'STRIVN brings performance monitoring and team logistics together in one space shared by the staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/en/#plateforme' },
          { label: 'Features', href: '/en/features/' },
          { label: 'Pricing', href: '/en/#tarifs' },
          { label: 'FAQ', href: '/en/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUTIONS',
        links: [
          { label: 'S&C coaches', href: '/en/sc-coaches/' },
          { label: 'Clubs', href: '/en/clubs/' },
          { label: 'Youth teams', href: '/en/youth-teams/' },
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
    copyright: '© 2026 STRIVN · Free for coaches, soon for clubs',
  },
};

/* ────────────────────────────── NL ────────────────────────────── */

const nl: HomeContent = {
  meta: {
    title: 'STRIVN | Het besturingssysteem van de performance staff',
    description:
      'GPS-import, wellness, belasting en planning — met een AI-laag die groepsdata omzet in beslissingen. Gratis voor één team, gedeeld door de hele staf.',
  },
  nav: {
    links: [
      { label: 'Fysieke trainers', href: '/nl/sc-coaches/' },
      { label: 'Platform', href: '/nl/#plateforme' },
      { label: 'Functies', href: '/nl/features/' },
      { label: 'Oplossingen', href: '/nl/solutions/' },
      { label: 'Prijzen', href: '/nl/#tarifs' },
      { label: 'FAQ', href: '/nl/#faq' },
    ],
    cta: 'Aan de slag',
  },
  hero: {
    eyebrow: 'Gebouwd met professionele staffen',
    titleMuted: 'Het besturingssysteem',
    titleMain: 'van de performance staff.',
    sub: 'GPS-import, wellness, belasting en planning — met een laag kunstmatige intelligentie die groepsdata omzet in beslissingen. Eén dagelijkse lezing, gedeeld door de hele staf.',
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
    title: 'Het volledige spectrum van de dagelijkse teamwerking.',
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
    note: 'Elke module voedt de andere — data wordt nooit opnieuw ingevoerd.',
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
    title: 'Uw eisen zijn uw tools ontgroeid.',
    body: 'Elke ochtend dezelfde handelingen: GPS-data exporteren, RPE’s samenvoegen, vragenlijsten opvolgen, meerdere bestanden kruisen om de toestand van de groep te bepalen.',
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
      { icon: 'satellite', label: 'Geautomatiseerde GPS-import' },
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
    title: 'Meten. Plannen. Bouwen. Sturen.',
    sub: 'Analyse is maar de helft van het systeem: STRIVN plant de belasting, bouwt de trainingen en workouts, en stuurt ze live.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS-IMPORT',
        title: 'Uw GPS-data geïntegreerd, zonder herinvoer.',
        body: 'Een CSV-export uit eender welk systeem — Catapult, STATSports of een ander — volstaat: de training wordt aan de kalender gekoppeld, speler per speler.',
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
        title: 'De toestand van de groep, bepaald vóór de training.',
        body: 'Spelers vullen hun vragenlijst in bij het opstaan. Vóór de training hebt u een precieze lezing: wie fit is, wie een signaal toont, wie een aanpassing nodig heeft.',
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
        title: 'Planning op basis van objectieve data.',
        body: 'Dagelijkse doelbelasting, ACWR doorlopend berekend, aanpassingen per speler. De microcyclus wordt gebouwd op de belasting die de groep werkelijk absorbeerde.',
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
        title: 'Trainingen en workouts, gebouwd op de data.',
        body: 'Het belastingsplan wordt een echte training: blokken, oefeningen, doelbelastingen. Individuele workouts worden gegenereerd uit dezelfde data — terugkeerprotocollen inbegrepen.',
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
        title: 'De cijfers lopen op terwijl de training draait.',
        body: 'Aanwezigheid afgevinkt, belasting die blok per blok oploopt, afwijkingen meteen zichtbaar. U stuurt bij tijdens de training — niet de dag erna.',
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
        title: 'De hoofdcoach leest hetzelfde beeld als u.',
        body: 'Het weekrapport wordt automatisch gegenereerd, de staf annoteert, en de beschikbaarheid voedt rechtstreeks de selectie. Geen document om opnieuw op te bouwen, geen samenvatting om over te typen.',
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
        done: 'Import voltooid — gekoppeld aan “Training dinsdag · intensiteitsblok”',
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
          { name: 'L. Moreau', detail: 'Slaap 4 u · vermoeidheid 8/10 — readiness 58', action: 'Aanpassen' },
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
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / kant · heupmobiliteit 8 min — gegenereerd uit het hamstringprotocol, belasting afgetrokken van de groepstraining.',
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
          body: 'L. Moreau op 92% van zijn doel al in blok 2 — hem uit het snelheidsblok halen?',
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
        comment: 'Gezien voor Moreau — we passen het blok van donderdag aan zoals voorgesteld.',
        push: 'Beschikbaarheid doorgestuurd naar de selectie van zondag — 15 fit, 2 op te volgen, 1 onbeschikbaar.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'SPELERSZIJDE',
    title: 'De data komt binnen zonder dat u erachteraan moet.',
    body: 'Monitoring werkt alleen als spelers antwoorden. De spelers-app vraagt weinig, op het juiste moment: wellness bij het opstaan, RPE na de training, de workout van de dag. Twintig seconden, geen formulier.',
    points: [
      { icon: 'moon', label: 'Wellnessvragenlijst bij het opstaan, in 20 seconden' },
      { icon: 'gauge', label: 'RPE na de training in één beweging, notificatie inbegrepen' },
      { icon: 'dumbbell', label: 'Individuele workouts met video’s en instructies' },
      { icon: 'calendar', label: 'Oproepingen, antwoorden en beschikbaarheid' },
    ],
    note: 'De app is nooit verplicht: een speler kan alles doen via een simpele link, zonder account.',
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
    title: 'Monitoring zit in een volledig platform.',
    body: 'STRIVN is geen geïsoleerde monitoringtool: oproepingen, aanwezigheid, ziekenboeg, trainingen en rapporten zitten in dezelfde omgeving, voor de hele staf.',
    featured: [
      {
        icon: 'activity',
        title: 'Belasting, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'De kern van het systeem: GPS-import, RPE, interne en externe belasting, ACWR en alerts — het dagelijkse startpunt van de performance staff.',
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
        body: 'Oproepingen verstuurd, antwoorden gebundeld, selectie up-to-date.',
        cta: 'In detail',
        href: '/nl/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Ziekenboeg',
        body: 'Blessures en return to play, zichtbaar voor de bevoegde staf.',
        cta: 'In detail',
        href: '/nl/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individuele programma’s',
        body: 'Doelen en oefeningen gekoppeld aan de data van elke speler.',
        cta: 'In detail',
        href: '/nl/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Trainingen & tactiek',
        body: 'Trainingsplannen en borden verbonden met de toestand van de groep.',
        cta: 'In detail',
        href: '/nl/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Training & wedstrijd live',
        body: 'Aanwezigheid, speeltijd en events geregistreerd langs het veld.',
        cta: 'In detail',
        href: '/nl/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Rapporten, AI & dashboards',
        body: 'Door AI geschreven verslagen en samenstelbare dashboards, gedeeld met staf en bestuur.',
        cta: 'In detail',
        href: '/nl/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'AI & BI INGEBOUWD',
    title: 'AI en BI, geïntegreerd op elk niveau.',
    body: 'Geen chatbot bovenop uw data: een AI die belasting, wellness, GPS en medische historiek samen leest. En wanneer een vraag een grafiek verdient, bouwt de AI die.',
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
      signalTitle: 'Signaal gedetecteerd door de AI, ongevraagd',
      signalBody: 'Slaap van de groep 12% gedaald sinds de overgang naar 2 wedstrijden per week.',
      signalCta: 'Bekijken',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Ochtendsynthese',
        body: 'De toestand van de groep samengevat door de AI vóór de training: readiness, alerts en voorgestelde aanpassingen.',
      },
      {
        icon: 'radar',
        title: 'Signaaldetectie',
        body: 'De AI kruist doorlopend belasting × wellness × medische historiek. Afwijkingen komen boven vóór de blessure.',
      },
      {
        icon: 'layout',
        title: 'Dashboards op aanvraag',
        body: 'Stel een vraag, de AI bouwt de visualisatie die erop antwoordt — en pint ze in één klik op uw dashboards.',
      },
      {
        icon: 'file-text',
        title: 'Rapporten geschreven door de AI',
        body: 'Week- en wedstrijdverslagen geschreven door de AI, klaar om aan het bestuur te bezorgen.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Uw dashboards, gebouwd — of gegenereerd.',
      body: 'Een widgetbibliotheek om uw rapporten samen te stellen: belasting, GPS, wellness, testen, beschikbaarheid. En voor elke eenmalige vraag een visualisatie ter plekke gegenereerd, klaar om vast te pinnen.',
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
        hsr: 'HSR — wedstrijd vs wedstrijd',
        aiTag: 'GEGENEREERD DOOR AI',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'DE STAF OVERTUIGEN',
    title: 'Geadopteerd door een fysieke trainer. Uitgerold door de hele staf.',
    body: 'De uitrol volgt bijna altijd hetzelfde patroon: een fysieke trainer adopteert het platform, toont de waarde van de data, en de staf volgt. Het stafdossier vat die waarde samen voor een hoofdcoach of clubbestuur — deelbaar in één beweging.',
    steps: [
      {
        title: 'U adopteert het platform',
        body: 'GPS-import, wellness en belastingsopvolging op uw team, zonder engagement.',
      },
      {
        title: 'U deelt het stafdossier',
        body: 'Een link of pdf die de waarde per rol voorstelt.',
      },
      {
        title: 'De staf sluit aan bij uw omgeving',
        body: 'Hoofdcoach, medische staf, assistenten — één weergave per rol, dezelfde data.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFDOSSIER',
      title: 'De waarde voor elke rol',
      roles: [
        { icon: 'users', body: 'Hoofdcoach — werkelijke beschikbaarheid bij de selectie' },
        { icon: 'heart-pulse', body: 'Medische staf — gedeelde ziekenboeg en terugkeerprotocollen' },
        { icon: 'clipboard', body: 'Assistenten — trainingen gekoppeld aan de toestand van de groep' },
        { icon: 'shield', body: 'Bestuur — een gestructureerd team, zonder initiële investering' },
      ],
      copyBtn: 'Link kopiëren',
      pdfBtn: 'PDF downloaden',
      note: 'ONTWORPEN OM IN ÉÉN BEWEGING DOOR TE GEVEN',
    },
  },
  solutions: {
    index: '07',
    kicker: 'PER FUNCTIE',
    title: 'Een toegangspoort voor elke functie in de staf.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Fysieke trainers',
        body: 'De volledige verdieping: monitoring, testen, programma’s en methodologie.',
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
      {
        icon: 'building',
        title: 'Clubs & academies',
        body: 'Meerdere teams, gedeelde spelersbasis, medische opvolging over teams heen.',
        cta: 'Bekijk het clubaanbod',
        href: '/nl/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRIJZEN',
    title: 'Gratis voor de staf. Gefactureerd op clubniveau.',
    plans: [
      {
        name: 'Coach',
        badge: 'Nu beschikbaar',
        price: '€0',
        period: 'voor altijd',
        description: 'Om STRIVN op één team uit te rollen, zonder clubbudget aan te vragen.',
        features: [
          '1 team',
          'Onbeperkt aantal spelers',
          'Onbeperkte staf',
          'Events, trainingen en wedstrijden',
          'Aanwezigheid, RSVP en communicatie',
          'Ziekenboeg, tactiek, rapporten en AI-assistent',
        ],
        cta: 'Mijn team aanmaken',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Geleidelijke uitrol',
        price: 'Binnenkort',
        description: 'Om alle teams en staffen van een club te coördineren.',
        features: [
          'Meerdere teams',
          'Gedeelde spelersbasis',
          'Gedeelde medische staf en coördinatoren',
          'Clubdashboards en -rapportering',
          'Blessureopvolging over teams heen',
        ],
        cta: 'Demo aanvragen',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'Op aanvraag',
        price: 'Binnenkort',
        description: 'Voor organisaties die geavanceerde inzichten willen.',
        features: [
          'Alles uit het Club-plan',
          'Geavanceerde rapportering',
          'Geavanceerde analytics',
          'API-toegang',
          'Organisatie-inzichten',
        ],
        cta: 'Praat met het team',
        kind: 'contact',
      },
    ],
    note: 'Facturatie start wanneer een club meerdere teams en staffen in STRIVN coördineert — nooit om de tools van de staf te ontgrendelen.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'De vragen die staffen stellen.',
    body: 'De rol van de spelers, het beheer van de omgeving en de opstarttijd.',
    contactTitle: 'Nog een vraag?',
    contactBody: 'Schrijf ons — het oprichtersteam antwoordt rechtstreeks.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Hoe importeer ik mijn GPS-data?',
        a: 'Via CSV-export, uit eender welk systeem — Catapult, STATSports of een ander. De kolomtoewijzing wordt onthouden: volgende imports duren enkele seconden.',
      },
      {
        q: 'Wie houdt de controle over de teamomgeving?',
        a: 'U. U maakt de omgeving aan, nodigt de staf uit en bepaalt ieders toegangsrechten. Er is geen validatie van de club nodig.',
      },
      {
        q: 'Hoelang duurt de opstart?',
        a: 'Enkele minuten: maak de omgeving aan, voeg uw spelers toe, importeer uw eerste training. De historiek bouwt zich doorheen de weken op.',
      },
      {
        q: 'Waarom is het Coach-plan gratis?',
        a: 'Een staflid zou geen budget moeten aanvragen om zijn werk te structureren. Facturatie gebeurt op clubniveau, wanneer meerdere teams gecoördineerd moeten worden.',
      },
      {
        q: 'Is het geschikt voor amateur- en semiprofessioneel voetbal?',
        a: 'Dat is precies het terrein van STRIVN: kleine staffen, beperkte middelen, en spelers die geen tien aparte apps zullen gebruiken.',
      },
      {
        q: 'Fysieke trainer: hoe krijg ik de hoofdcoach mee?',
        a: 'Begin met uw eigen data en deel daarna het stafdossier vanaf de site. Zodra de hoofdcoach de werkelijke beschikbaarheid in de selectie ziet, volgt de adoptie vanzelf.',
      },
    ],
  },
  finalCta: {
    kicker: 'BEGIN ALLEEN, GRATIS',
    title: 'Uw data en uw staf, onder één dak.',
    body: 'Maak uw omgeving gratis aan — GPS-import, wellness, belasting en readiness inbegrepen vanaf dag één. Uw staf sluit aan zodra de demonstratie gemaakt is.',
    primaryCta: 'Mijn omgeving gratis aanmaken',
    secondaryCta: 'Het stafdossier delen',
    trust: 'GEEN KREDIETKAART · GEEN CLUBGOEDKEURING · UW DATA BLIJFT VAN U',
  },
  footer: {
    tagline: 'Prestatieopvolging, volgens professionele standaard.',
    body: 'STRIVN verenigt prestatiemonitoring en teamorganisatie in één omgeving, gedeeld door de staf.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCT',
        links: [
          { label: 'Platform', href: '/nl/#plateforme' },
          { label: 'Functies', href: '/nl/features/' },
          { label: 'Prijzen', href: '/nl/#tarifs' },
          { label: 'FAQ', href: '/nl/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'OPLOSSINGEN',
        links: [
          { label: 'Fysieke trainers', href: '/nl/sc-coaches/' },
          { label: 'Clubs', href: '/nl/clubs/' },
          { label: 'Jeugdteams', href: '/nl/youth-teams/' },
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
    copyright: '© 2026 STRIVN · Gratis voor coaches, binnenkort voor clubs',
  },
};

/* ────────────────────────────── DE ────────────────────────────── */

const de: HomeContent = {
  meta: {
    title: 'STRIVN | Das Betriebssystem für den Performance-Staff',
    description:
      'GPS-Import, Wellness, Belastung und Planung — mit einer KI-Ebene, die Teamdaten in Entscheidungen verwandelt. Kostenlos für ein Team, geteilt vom gesamten Staff.',
  },
  nav: {
    links: [
      { label: 'Athletiktrainer', href: '/de/sc-coaches/' },
      { label: 'Plattform', href: '/de/#plateforme' },
      { label: 'Funktionen', href: '/de/features/' },
      { label: 'Lösungen', href: '/de/solutions/' },
      { label: 'Preise', href: '/de/#tarifs' },
      { label: 'FAQ', href: '/de/#faq' },
    ],
    cta: 'Loslegen',
  },
  hero: {
    eyebrow: 'Entwickelt mit professionellen Staffs',
    titleMuted: 'Das Betriebssystem',
    titleMain: 'für den Performance-Staff.',
    sub: 'GPS-Import, Wellness, Belastung und Planung — mit einer KI-Ebene, die Teamdaten in Entscheidungen verwandelt. Eine tägliche Lesart, geteilt vom gesamten Staff.',
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
    title: 'Das volle Spektrum des Teamalltags.',
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
    note: 'Jedes Modul speist die anderen — Daten werden nie doppelt erfasst.',
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
    title: 'Ihr Anspruch ist Ihren Tools entwachsen.',
    body: 'Jeden Morgen dieselben Handgriffe: GPS-Daten exportieren, RPEs zusammenführen, Fragebögen nachfassen, mehrere Dateien abgleichen, um den Zustand der Gruppe zu bestimmen.',
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
      { icon: 'satellite', label: 'Automatisierter GPS-Import' },
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
    title: 'Messen. Planen. Bauen. Steuern.',
    sub: 'Analyse ist nur die halbe Miete: STRIVN plant die Belastung, baut Einheiten und Workouts und steuert sie live.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'GPS-IMPORT',
        title: 'Ihre GPS-Daten integriert, ohne Neueingabe.',
        body: 'Ein CSV-Export aus jedem System — Catapult, STATSports oder einem anderen — genügt: Die Einheit wird dem Kalender zugeordnet, Spieler für Spieler.',
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
        title: 'Der Zustand der Gruppe, bestimmt vor der Einheit.',
        body: 'Die Spieler füllen ihren Fragebogen beim Aufwachen aus. Vor der Einheit haben Sie eine präzise Lesart: wer fit ist, wer ein Signal zeigt, wer eine Anpassung braucht.',
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
        title: 'Die Planung stützt sich auf objektive Daten.',
        body: 'Tägliche Zielbelastung, laufend berechneter ACWR, Anpassungen pro Spieler. Der Mikrozyklus entsteht auf Basis der tatsächlich absorbierten Belastung der Gruppe.',
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
        title: 'Einheiten und Workouts, gebaut auf den Daten.',
        body: 'Der Belastungsplan wird zur echten Einheit: Blöcke, Übungen, Zielbelastungen. Individuelle Workouts entstehen aus denselben Daten — Rückkehrprotokolle inklusive.',
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
        title: 'Die Werte steigen, während die Einheit läuft.',
        body: 'Anwesenheit abgehakt, Belastung, die sich Block für Block aufbaut, Abweichungen sofort sichtbar. Sie steuern während der Einheit nach — nicht am Tag danach.',
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
        title: 'Der Cheftrainer liest dasselbe Bild wie Sie.',
        body: 'Der Wochenbericht wird automatisch erstellt, der Staff kommentiert, und die Verfügbarkeiten fließen direkt ins Aufgebot. Kein Dokument neu bauen, keine Zusammenfassung abtippen.',
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
        done: 'Import abgeschlossen — verknüpft mit „Einheit Dienstag · Intensitätsblock“',
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
          { name: 'L. Moreau', detail: 'Schlaf 4 h · Ermüdung 8/10 — Readiness 58', action: 'Anpassen' },
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
          body: 'Nordic Curls 3×8 · Copenhagen 3×10 / Seite · Hüftmobilität 8 min — erstellt aus dem Ischio-Protokoll, Belastung von der Teameinheit abgezogen.',
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
          body: 'L. Moreau schon in Block 2 bei 92% seines Ziels — aus dem Schnelligkeitsblock nehmen?',
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
        comment: 'Gesehen für Moreau — wir passen den Donnerstagsblock wie vorgeschlagen an.',
        push: 'Verfügbarkeiten ins Aufgebot für Sonntag übertragen — 15 fit, 2 zu beobachten, 1 nicht verfügbar.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'SPIELERSEITE',
    title: 'Die Erfassung hängt nicht an Ihrem Nachhaken.',
    body: 'Monitoring funktioniert nur, wenn die Spieler antworten. Die Spieler-App fragt wenig, im richtigen Moment: Wellness beim Aufwachen, RPE nach der Einheit, das Workout des Tages. Zwanzig Sekunden, kein Formular.',
    points: [
      { icon: 'moon', label: 'Wellness-Fragebogen beim Aufwachen, in 20 Sekunden' },
      { icon: 'gauge', label: 'RPE nach der Einheit mit einem Tipp, Benachrichtigung inklusive' },
      { icon: 'dumbbell', label: 'Individuelle Workouts mit Videos und Anleitungen' },
      { icon: 'calendar', label: 'Aufgebote, Antworten und Verfügbarkeit' },
    ],
    note: 'Die App ist nie Pflicht: Ein Spieler kann alles über einen einfachen Link erledigen, ohne Konto.',
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
    title: 'Monitoring lebt in einer vollständigen Plattform.',
    body: 'STRIVN ist kein isoliertes Monitoring-Tool: Aufgebote, Anwesenheit, Medizinbereich, Einheiten und Berichte liegen in derselben Umgebung, für den gesamten Staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Belastung, RPE & GPS',
        badge: 'MONITORING',
        badgeTone: 'blue',
        body: 'Der Kern des Systems: GPS-Import, RPE, interne und externe Belastung, ACWR und Alarme — der tägliche Einstiegspunkt des Performance-Staffs.',
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
        body: 'Aufgebote verschickt, Antworten gebündelt, Kader aktuell.',
        cta: 'Im Detail',
        href: '/de/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Medizinbereich',
        body: 'Verletzungen und Return to Play, sichtbar für den berechtigten Staff.',
        cta: 'Im Detail',
        href: '/de/features/medical/',
      },
      {
        icon: 'target',
        title: 'Individuelle Programme',
        body: 'Ziele und Übungen, verknüpft mit den Daten jedes Spielers.',
        cta: 'Im Detail',
        href: '/de/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Einheiten & Taktik',
        body: 'Trainingspläne und Boards, verbunden mit dem Zustand der Gruppe.',
        cta: 'Im Detail',
        href: '/de/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Training & Spiel live',
        body: 'Anwesenheit, Spielzeit und Ereignisse am Spielfeldrand erfasst.',
        cta: 'Im Detail',
        href: '/de/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Berichte, KI & Dashboards',
        body: 'KI-geschriebene Zusammenfassungen und modulare Dashboards, geteilt mit Staff und Vorstand.',
        cta: 'Im Detail',
        href: '/de/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'KI & BI INTEGRIERT',
    title: 'KI und BI, integriert auf jeder Ebene.',
    body: 'Kein Chatbot auf Ihren Daten: eine KI, die Belastung, Wellness, GPS und Krankengeschichte zusammen liest. Und wenn eine Frage ein Diagramm verdient, baut die KI es.',
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
      signalTitle: 'Signal von der KI erkannt, unaufgefordert',
      signalBody: 'Schlaf der Gruppe seit der Umstellung auf 2 Spiele pro Woche um 12% gesunken.',
      signalCta: 'Prüfen',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Morgen-Briefing',
        body: 'Der Zustand der Gruppe, von der KI vor der Einheit zusammengefasst: Readiness, Alarme und vorgeschlagene Anpassungen.',
      },
      {
        icon: 'radar',
        title: 'Signalerkennung',
        body: 'Die KI kreuzt laufend Belastung × Wellness × Krankengeschichte. Abweichungen tauchen vor der Verletzung auf.',
      },
      {
        icon: 'layout',
        title: 'Dashboards auf Abruf',
        body: 'Stellen Sie eine Frage — die KI baut die passende Visualisierung und pinnt sie mit einem Klick an Ihre Dashboards.',
      },
      {
        icon: 'file-text',
        title: 'KI-geschriebene Berichte',
        body: 'Wochen- und Nachspielberichte, von der KI geschrieben, bereit für den Vorstand.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Ihre Dashboards, gebaut — oder generiert.',
      body: 'Eine Widget-Bibliothek für Ihre Berichte: Belastung, GPS, Wellness, Tests, Verfügbarkeit. Und für jede Einzelfrage eine spontan generierte Visualisierung, bereit zum Anpinnen.',
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
        hsr: 'HSR — Spiel vs Spiel',
        aiTag: 'KI-GENERIERT',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'DEN STAFF ÜBERZEUGEN',
    title: 'Von einem Athletiktrainer eingeführt. Vom ganzen Staff genutzt.',
    body: 'Die Einführung folgt fast immer demselben Muster: Ein Athletiktrainer übernimmt die Plattform, zeigt den Wert der Daten, und der Staff zieht nach. Das Staff-Dossier bündelt diesen Wert für Cheftrainer oder Vereinsführung — weitergebbar mit einem Handgriff.',
    steps: [
      {
        title: 'Sie übernehmen die Plattform',
        body: 'GPS-Import, Wellness und Belastungssteuerung für Ihr Team, ohne Verpflichtung.',
      },
      {
        title: 'Sie teilen das Staff-Dossier',
        body: 'Ein Link oder PDF, das den Wert für jede Rolle zeigt.',
      },
      {
        title: 'Der Staff tritt Ihrem Bereich bei',
        body: 'Cheftrainer, medizinischer Staff, Co-Trainer — eine Ansicht pro Rolle, dieselben Daten.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'STAFF-DOSSIER',
      title: 'Der Wert für jede Rolle',
      roles: [
        { icon: 'users', body: 'Cheftrainer — reale Verfügbarkeit im Aufgebot' },
        { icon: 'heart-pulse', body: 'Medizinischer Staff — geteilter Medizinbereich und Rückkehrprotokolle' },
        { icon: 'clipboard', body: 'Co-Trainer — Einheiten, verknüpft mit dem Zustand der Gruppe' },
        { icon: 'shield', body: 'Vorstand — ein strukturiertes Team, ohne Anfangsinvestition' },
      ],
      copyBtn: 'Link kopieren',
      pdfBtn: 'PDF herunterladen',
      note: 'GEMACHT, UM MIT EINEM HANDGRIFF WEITERGEGEBEN ZU WERDEN',
    },
  },
  solutions: {
    index: '07',
    kicker: 'NACH FUNKTION',
    title: 'Ein Einstieg für jede Funktion im Staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Athletiktrainer',
        body: 'Die volle Tiefe: Monitoring, Tests, Programme und Methodik.',
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
      {
        icon: 'building',
        title: 'Vereine & Akademien',
        body: 'Mehrere Teams, geteilte Spielerbasis, teamübergreifendes medizinisches Tracking.',
        cta: 'Vereinsangebot ansehen',
        href: '/de/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PREISE',
    title: 'Kostenlos für den Staff. Abgerechnet auf Vereinsebene.',
    plans: [
      {
        name: 'Coach',
        badge: 'Jetzt verfügbar',
        price: '0 €',
        period: 'für immer',
        description: 'Um STRIVN in einem Team einzuführen, ohne Vereinsbudget zu beantragen.',
        features: [
          '1 Team',
          'Unbegrenzte Spieler',
          'Unbegrenzter Staff',
          'Termine, Einheiten und Spiele',
          'Anwesenheit, RSVP und Kommunikation',
          'Medizinbereich, Taktik, Berichte und KI-Assistent',
        ],
        cta: 'Mein Team erstellen',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Schrittweise Öffnung',
        price: 'Bald',
        description: 'Um alle Teams und Staffs eines Vereins zu koordinieren.',
        features: [
          'Mehrere Teams',
          'Geteilte Spielerbasis',
          'Geteilter medizinischer Staff und Koordinatoren',
          'Vereins-Dashboards und Reporting',
          'Teamübergreifendes Verletzungs-Tracking',
        ],
        cta: 'Demo anfragen',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'Auf Anfrage',
        price: 'Bald',
        description: 'Für Organisationen, die erweiterte Insights wollen.',
        features: [
          'Alles aus dem Club-Plan',
          'Erweitertes Reporting',
          'Erweiterte Analytics',
          'API-Zugang',
          'Organisations-Insights',
        ],
        cta: 'Mit dem Team sprechen',
        kind: 'contact',
      },
    ],
    note: 'Abgerechnet wird, wenn ein Verein mehrere Teams und Staffs in STRIVN koordiniert — nie, um die Tools des Staffs freizuschalten.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Die Fragen, die Staffs stellen.',
    body: 'Die Rolle der Spieler, die Kontrolle über den Bereich und die Einrichtungszeit.',
    contactTitle: 'Noch eine Frage?',
    contactBody: 'Schreiben Sie uns — das Gründerteam antwortet direkt.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Wie importiere ich meine GPS-Daten?',
        a: 'Per CSV-Export, aus jedem System — Catapult, STATSports oder einem anderen. Die Spaltenzuordnung wird gespeichert: Folgende Importe dauern wenige Sekunden.',
      },
      {
        q: 'Wer behält die Kontrolle über den Teambereich?',
        a: 'Sie. Sie erstellen den Bereich, laden den Staff ein und legen die Zugriffsrechte fest. Eine Freigabe des Vereins ist nicht nötig.',
      },
      {
        q: 'Wie lange dauert die Einrichtung?',
        a: 'Wenige Minuten: Bereich erstellen, Spieler hinzufügen, erste Einheit importieren. Die Historie baut sich über die Wochen auf.',
      },
      {
        q: 'Warum ist der Coach-Plan kostenlos?',
        a: 'Ein Staff-Mitglied sollte kein Budget beantragen müssen, um seine Arbeit zu strukturieren. Abgerechnet wird auf Vereinsebene, wenn mehrere Teams koordiniert werden müssen.',
      },
      {
        q: 'Passt es zu Amateur- und Halbprofifußball?',
        a: 'Genau das ist das Terrain von STRIVN: kleine Staffs, begrenzte Mittel und Spieler, die keine zehn verschiedenen Apps nutzen werden.',
      },
      {
        q: 'Athletiktrainer: Wie gewinne ich den Cheftrainer?',
        a: 'Starten Sie mit Ihren eigenen Daten und teilen Sie dann das Staff-Dossier von der Website. Sobald der Cheftrainer die reale Verfügbarkeit im Aufgebot sieht, folgt die Zustimmung von selbst.',
      },
    ],
  },
  finalCta: {
    kicker: 'ALLEIN STARTEN, KOSTENLOS',
    title: 'Ihre Daten und Ihr Staff, unter einem Dach.',
    body: 'Erstellen Sie Ihren Bereich kostenlos — GPS-Import, Wellness, Belastung und Readiness ab Tag eins inklusive. Ihr Staff kommt dazu, sobald der Beweis erbracht ist.',
    primaryCta: 'Meinen Bereich kostenlos erstellen',
    secondaryCta: 'Staff-Dossier teilen',
    trust: 'KEINE KREDITKARTE · KEINE VEREINSFREIGABE · IHRE DATEN BLEIBEN IHRE',
  },
  footer: {
    tagline: 'Leistungssteuerung auf professionellem Standard.',
    body: 'STRIVN vereint Performance-Monitoring und Teamorganisation in einem Bereich, geteilt vom Staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUKT',
        links: [
          { label: 'Plattform', href: '/de/#plateforme' },
          { label: 'Funktionen', href: '/de/features/' },
          { label: 'Preise', href: '/de/#tarifs' },
          { label: 'FAQ', href: '/de/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'LÖSUNGEN',
        links: [
          { label: 'Athletiktrainer', href: '/de/sc-coaches/' },
          { label: 'Vereine', href: '/de/clubs/' },
          { label: 'Jugendteams', href: '/de/youth-teams/' },
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
    copyright: '© 2026 STRIVN · Kostenlos für Coaches, bald für Vereine',
  },
};

/* ────────────────────────────── PT ────────────────────────────── */

const pt: HomeContent = {
  meta: {
    title: 'STRIVN | O sistema operativo do staff de performance',
    description:
      'Importação GPS, wellness, carga e planeamento — com uma camada de IA que transforma os dados do plantel em decisões. Grátis para uma equipa, partilhado por todo o staff.',
  },
  nav: {
    links: [
      { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
      { label: 'Plataforma', href: '/pt/#plateforme' },
      { label: 'Funcionalidades', href: '/pt/features/' },
      { label: 'Soluções', href: '/pt/solutions/' },
      { label: 'Preços', href: '/pt/#tarifs' },
      { label: 'FAQ', href: '/pt/#faq' },
    ],
    cta: 'Começar',
  },
  hero: {
    eyebrow: 'Construído com staffs profissionais',
    titleMuted: 'O sistema operativo',
    titleMain: 'do staff de performance.',
    sub: 'Importação GPS, wellness, carga e planeamento — com uma camada de inteligência artificial que transforma os dados do plantel em decisões. Uma única leitura diária, partilhada por todo o staff.',
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
    title: 'O espetro completo do dia a dia de uma equipa.',
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
    note: 'Cada módulo alimenta os outros — os dados nunca se voltam a introduzir.',
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
    title: 'A sua exigência ultrapassou as suas ferramentas.',
    body: 'Todas as manhãs, as mesmas operações: exportar os dados GPS, consolidar os RPE, insistir nos questionários, cruzar vários ficheiros para estabelecer o estado de forma do plantel.',
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
      { icon: 'satellite', label: 'Importação GPS automatizada' },
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
    title: 'Medir. Planear. Construir. Conduzir.',
    sub: 'A análise é só metade do sistema: o STRIVN planeia a carga, constrói as sessões e os workouts, e conduz tudo em direto.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORTAÇÃO GPS',
        title: 'Os seus dados GPS integrados, sem reintrodução.',
        body: 'Uma exportação CSV de qualquer sistema — Catapult, STATSports ou outro — chega: a sessão fica ligada ao calendário, jogador a jogador.',
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
        title: 'O estado de forma do plantel, definido antes da sessão.',
        body: 'Os jogadores preenchem o questionário ao acordar. Antes da sessão, tem uma leitura precisa: quem está apto, quem apresenta um sinal, quem precisa de um ajuste.',
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
        title: 'O planeamento apoia-se em dados objetivos.',
        body: 'Carga-alvo diária, ACWR calculado em contínuo, ajustes por jogador. O microciclo constrói-se sobre a carga realmente absorvida pelo plantel.',
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
        title: 'A sessão e os workouts, construídos sobre os dados.',
        body: 'O plano de carga torna-se uma sessão real: blocos, exercícios, cargas-alvo. Os workouts individuais geram-se a partir dos mesmos dados — protocolos de regresso incluídos.',
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
        title: 'Os números sobem enquanto a sessão decorre.',
        body: 'Presenças registadas, carga que se acumula bloco a bloco, desvios visíveis de imediato. Ajusta durante a sessão — não no dia seguinte.',
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
        title: 'O treinador principal lê o mesmo que você.',
        body: 'O relatório semanal gera-se automaticamente, o staff anota, e as disponibilidades alimentam diretamente a convocatória. Nenhum documento a reconstruir, nenhum resumo a retranscrever.',
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
        done: 'Importação concluída — ligada a «Sessão de terça · bloco de intensidade»',
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
          { name: 'L. Moreau', detail: 'Sono 4 h · fadiga 8/10 — readiness 58', action: 'Ajustar' },
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
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / lado · mobilidade da anca 8 min — gerado a partir do protocolo de isquiotibiais, carga deduzida da sessão coletiva.',
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
          body: 'L. Moreau a 92% do alvo logo no bloco 2 — retirá-lo do bloco de velocidade?',
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
        comment: 'Visto para o Moreau — adaptamos o bloco de quinta como proposto.',
        push: 'Disponibilidades enviadas para a convocatória de domingo — 15 aptos, 2 a vigiar, 1 indisponível.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'LADO DO JOGADOR',
    title: 'A recolha não depende da sua insistência.',
    body: 'A monitorização só vale se os jogadores responderem. A app do jogador pede pouco, no momento certo: wellness ao acordar, RPE depois da sessão, o workout do dia. Vinte segundos, não um formulário.',
    points: [
      { icon: 'moon', label: 'Questionário wellness ao acordar, em 20 segundos' },
      { icon: 'gauge', label: 'RPE pós-sessão num gesto, notificação incluída' },
      { icon: 'dumbbell', label: 'Workouts individuais com vídeos e instruções' },
      { icon: 'calendar', label: 'Convocatórias, respostas e disponibilidade' },
    ],
    note: 'A app nunca é obrigatória: um jogador pode fazer tudo a partir de um simples link, sem conta.',
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
    title: 'A monitorização insere-se numa plataforma completa.',
    body: 'O STRIVN não é uma ferramenta de monitorização isolada: convocatórias, presenças, enfermaria, sessões e relatórios estão reunidos no mesmo ambiente, para todo o staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Carga, RPE & GPS',
        badge: 'MONITORIZAÇÃO',
        badgeTone: 'blue',
        body: 'O coração do sistema: importação GPS, RPE, carga interna e externa, ACWR e alertas — o ponto de entrada diário do staff de performance.',
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
        body: 'Convocatórias enviadas, respostas consolidadas, plantel atualizado.',
        cta: 'Em detalhe',
        href: '/pt/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Enfermaria',
        body: 'Lesões e regresso ao jogo, visíveis para o staff autorizado.',
        cta: 'Em detalhe',
        href: '/pt/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programas individuais',
        body: 'Objetivos e exercícios ligados aos dados de cada jogador.',
        cta: 'Em detalhe',
        href: '/pt/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sessões & tática',
        body: 'Planos de sessão e quadros ligados ao estado do plantel.',
        cta: 'Em detalhe',
        href: '/pt/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Sessão & jogo em direto',
        body: 'Presenças, tempo de jogo e eventos registados à beira do campo.',
        cta: 'Em detalhe',
        href: '/pt/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Relatórios, IA & dashboards',
        body: 'Resumos redigidos pela IA e dashboards componíveis, partilhados com o staff e a direção.',
        cta: 'Em detalhe',
        href: '/pt/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTEGRADAS',
    title: 'A IA e a BI, integradas em todos os níveis.',
    body: 'Não é um chatbot pousado sobre os seus dados: é uma IA que lê carga, wellness, GPS e histórico médico em conjunto. E quando uma pergunta merece um gráfico, a IA constrói-o.',
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
      signalTitle: 'Sinal detetado pela IA, sem solicitação',
      signalBody: 'Sono do plantel a descer 12% desde a passagem a 2 jogos por semana.',
      signalCta: 'Examinar',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Síntese da manhã',
        body: 'O estado do plantel resumido pela IA antes da sessão: readiness, alertas e ajustes propostos.',
      },
      {
        icon: 'radar',
        title: 'Deteção de sinais',
        body: 'A IA cruza em contínuo carga × wellness × histórico médico. Os desvios sobem antes da lesão.',
      },
      {
        icon: 'layout',
        title: 'Dashboards a pedido',
        body: 'Faça uma pergunta, a IA constrói a visualização que responde — e fixa-a nos seus dashboards num clique.',
      },
      {
        icon: 'file-text',
        title: 'Relatórios redigidos pela IA',
        body: 'Resumos semanais e pós-jogo redigidos pela IA, prontos a entregar à direção.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Os seus dashboards, construídos — ou gerados.',
      body: 'Uma biblioteca de widgets para compor os seus relatórios: carga, GPS, wellness, testes, disponibilidade. E para cada pergunta pontual, uma visualização gerada na hora, pronta a fixar.',
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
        hsr: 'HSR — jogo vs jogo',
        aiTag: 'GERADO PELA IA',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVENCER O STAFF',
    title: 'Adotado por um preparador. Implementado por todo o staff.',
    body: 'A implementação segue quase sempre o mesmo esquema: um preparador adota a plataforma, demonstra o valor dos dados, e o staff junta-se. O dossiê de staff sintetiza esse valor para um treinador principal ou uma direção de clube — transmissível num gesto.',
    steps: [
      {
        title: 'Adota a plataforma',
        body: 'Importação GPS, wellness e controlo de carga na sua equipa, sem compromisso.',
      },
      {
        title: 'Partilha o dossiê de staff',
        body: 'Um link ou um PDF que apresenta o valor para cada função.',
      },
      {
        title: 'O staff junta-se ao seu espaço',
        body: 'Treinador principal, staff médico, adjuntos — uma vista por função, os mesmos dados.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIÊ DE STAFF',
      title: 'O valor para cada função',
      roles: [
        { icon: 'users', body: 'Treinador principal — disponibilidade real na convocatória' },
        { icon: 'heart-pulse', body: 'Staff médico — enfermaria e protocolos de regresso partilhados' },
        { icon: 'clipboard', body: 'Adjuntos — sessões ligadas ao estado do plantel' },
        { icon: 'shield', body: 'Direção — uma equipa estruturada, sem investimento inicial' },
      ],
      copyBtn: 'Copiar o link',
      pdfBtn: 'Descarregar o PDF',
      note: 'CONCEBIDO PARA SER TRANSMITIDO NUM GESTO',
    },
  },
  solutions: {
    index: '07',
    kicker: 'POR FUNÇÃO',
    title: 'Uma porta de entrada para cada função do staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Preparadores físicos',
        body: 'O aprofundamento completo: monitorização, testes, programas e metodologia.',
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
      {
        icon: 'building',
        title: 'Clubes & academias',
        body: 'Várias equipas, base de jogadores partilhada, acompanhamento médico entre equipas.',
        cta: 'Ver a oferta para clubes',
        href: '/pt/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PREÇOS',
    title: 'Grátis para o staff. Faturado à escala do clube.',
    plans: [
      {
        name: 'Coach',
        badge: 'Disponível agora',
        price: '0 €',
        period: 'para sempre',
        description: 'Para implementar o STRIVN numa equipa, sem pedir orçamento ao clube.',
        features: [
          '1 equipa',
          'Jogadores ilimitados',
          'Staff ilimitado',
          'Eventos, sessões e jogos',
          'Presenças, RSVP e comunicação',
          'Enfermaria, tática, relatórios e assistente IA',
        ],
        cta: 'Criar a minha equipa',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Abertura progressiva',
        price: 'Em breve',
        description: 'Para coordenar todas as equipas e staffs de um clube.',
        features: [
          'Várias equipas',
          'Base de jogadores partilhada',
          'Staff médico e coordenadores partilhados',
          'Dashboards e reporting de clube',
          'Acompanhamento de lesões entre equipas',
        ],
        cta: 'Pedir uma demo',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'Sob pedido',
        price: 'Em breve',
        description: 'Para organizações que querem insights avançados.',
        features: [
          'Tudo do plano Club',
          'Reporting avançado',
          'Analytics avançadas',
          'Acesso API',
          'Insights organizacionais',
        ],
        cta: 'Falar com a equipa',
        kind: 'contact',
      },
    ],
    note: 'A faturação acontece quando um clube coordena várias equipas e staffs no STRIVN — nunca para desbloquear as ferramentas do staff.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'As perguntas que os staffs fazem.',
    body: 'O papel dos jogadores, a governação do espaço e os prazos de implementação.',
    contactTitle: 'Outra pergunta?',
    contactBody: 'Escreva-nos — a equipa fundadora responde diretamente.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Como importo os meus dados GPS?',
        a: 'Por exportação CSV, a partir de qualquer sistema — Catapult, STATSports ou outro. A correspondência de colunas fica memorizada: as importações seguintes demoram segundos.',
      },
      {
        q: 'Quem mantém o controlo do espaço de equipa?',
        a: 'Você. Cria o espaço, convida o staff e define os direitos de acesso de cada um. Não é necessária nenhuma validação do clube.',
      },
      {
        q: 'Qual é o prazo de implementação?',
        a: 'Alguns minutos: crie o espaço, adicione os seus jogadores, importe a primeira sessão. O histórico constrói-se ao longo das semanas.',
      },
      {
        q: 'Porque é que o plano Coach é gratuito?',
        a: 'Um membro do staff não deveria pedir orçamento para estruturar o seu trabalho. A faturação acontece ao nível do clube, quando várias equipas têm de ser coordenadas.',
      },
      {
        q: 'Adequa-se ao futebol amador e semiprofissional?',
        a: 'É precisamente o terreno do STRIVN: staffs reduzidos, meios medidos, e jogadores que não vão usar dez aplicações distintas.',
      },
      {
        q: 'Preparador: como obter a adesão do treinador principal?',
        a: 'Comece com os seus próprios dados e depois transmita o dossiê de staff a partir do site. Quando o treinador principal constata a disponibilidade real na convocatória, a adesão segue naturalmente.',
      },
    ],
  },
  finalCta: {
    kicker: 'COMECE SOZINHO, GRATUITAMENTE',
    title: 'Os seus dados e o seu staff, sob o mesmo teto.',
    body: 'Crie o seu espaço gratuitamente — importação GPS, wellness, carga e readiness incluídos desde o primeiro dia. O seu staff junta-se quando a demonstração estiver feita.',
    primaryCta: 'Criar o meu espaço gratuitamente',
    secondaryCta: 'Partilhar o dossiê de staff',
    trust: 'SEM CARTÃO DE CRÉDITO · SEM VALIDAÇÃO DO CLUBE · OS SEUS DADOS SÃO SEUS',
  },
  footer: {
    tagline: 'O acompanhamento da performance, ao padrão profissional.',
    body: 'O STRIVN reúne a monitorização da performance e a gestão de equipa num único espaço partilhado pelo staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUTO',
        links: [
          { label: 'Plataforma', href: '/pt/#plateforme' },
          { label: 'Funcionalidades', href: '/pt/features/' },
          { label: 'Preços', href: '/pt/#tarifs' },
          { label: 'FAQ', href: '/pt/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUÇÕES',
        links: [
          { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
          { label: 'Clubes', href: '/pt/clubs/' },
          { label: 'Equipas jovens', href: '/pt/youth-teams/' },
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
    copyright: '© 2026 STRIVN · Grátis para os coaches, em breve para os clubes',
  },
};

/* ────────────────────────────── ES ────────────────────────────── */

const es: HomeContent = {
  meta: {
    title: 'STRIVN | El sistema operativo del staff de rendimiento',
    description:
      'Importación GPS, wellness, carga y planificación — con una capa de IA que convierte los datos de la plantilla en decisiones. Gratis para un equipo, compartido por todo el staff.',
  },
  nav: {
    links: [
      { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
      { label: 'Plataforma', href: '/es/#plateforme' },
      { label: 'Funcionalidades', href: '/es/features/' },
      { label: 'Soluciones', href: '/es/solutions/' },
      { label: 'Precios', href: '/es/#tarifs' },
      { label: 'FAQ', href: '/es/#faq' },
    ],
    cta: 'Empezar',
  },
  hero: {
    eyebrow: 'Construido con staffs profesionales',
    titleMuted: 'El sistema operativo',
    titleMain: 'del staff de rendimiento.',
    sub: 'Importación GPS, wellness, carga y planificación — con una capa de inteligencia artificial que convierte los datos de la plantilla en decisiones. Una sola lectura diaria, compartida por todo el staff.',
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
    title: 'El espectro completo del día a día de un equipo.',
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
    note: 'Cada módulo alimenta a los demás — los datos nunca se vuelven a introducir.',
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
    title: 'Su exigencia ha superado sus herramientas.',
    body: 'Cada mañana, las mismas operaciones: exportar los datos GPS, consolidar los RPE, insistir con los cuestionarios, cruzar varios archivos para establecer el estado de forma de la plantilla.',
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
      { icon: 'satellite', label: 'Importación GPS automatizada' },
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
    title: 'Medir. Planificar. Construir. Dirigir.',
    sub: 'El análisis es solo la mitad del sistema: STRIVN planifica la carga, construye las sesiones y los workouts, y los dirige en directo.',
    steps: [
      {
        index: '01 / 06',
        kicker: 'IMPORTACIÓN GPS',
        title: 'Sus datos GPS integrados, sin volver a teclear.',
        body: 'Una exportación CSV de cualquier sistema — Catapult, STATSports u otro — basta: la sesión queda vinculada al calendario, jugador a jugador.',
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
        title: 'El estado de forma del grupo, fijado antes de la sesión.',
        body: 'Los jugadores completan su cuestionario al despertar. Antes de la sesión dispone de una lectura precisa: quién está apto, quién presenta una señal, quién requiere un ajuste.',
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
        title: 'La planificación se apoya en datos objetivos.',
        body: 'Carga objetivo diaria, ACWR calculado en continuo, ajustes por jugador. El microciclo se construye sobre la carga realmente absorbida por el grupo.',
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
        title: 'La sesión y los workouts, construidos sobre los datos.',
        body: 'El plan de carga se convierte en una sesión real: bloques, ejercicios, cargas objetivo. Los workouts individuales se generan desde los mismos datos — protocolos de regreso incluidos.',
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
        title: 'Los números suben mientras la sesión avanza.',
        body: 'Asistencia registrada, carga que se acumula bloque a bloque, desvíos visibles al instante. Ajusta durante la sesión — no al día siguiente.',
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
        title: 'El primer entrenador lee lo mismo que usted.',
        body: 'El informe semanal se genera automáticamente, el staff anota, y las disponibilidades alimentan directamente la convocatoria. Ningún documento que reconstruir, ningún resumen que transcribir.',
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
        done: 'Importación completada — vinculada a «Sesión del martes · bloque de intensidad»',
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
          { name: 'L. Moreau', detail: 'Sueño 4 h · fatiga 8/10 — readiness 58', action: 'Ajustar' },
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
          body: 'Nordic curls 3×8 · Copenhagen 3×10 / lado · movilidad de cadera 8 min — generado desde el protocolo de isquios, carga deducida de la sesión colectiva.',
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
          body: 'L. Moreau al 92% de su objetivo ya en el bloque 2 — ¿sacarlo del bloque de velocidad?',
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
        comment: 'Visto lo de Moreau — adaptamos el bloque del jueves como se propone.',
        push: 'Disponibilidades enviadas a la convocatoria del domingo — 15 aptos, 2 a vigilar, 1 no disponible.',
      },
    },
  },
  playerApp: {
    index: '03',
    kicker: 'LADO DEL JUGADOR',
    title: 'La recogida no depende de su insistencia.',
    body: 'La monitorización solo vale si los jugadores responden. La app del jugador pide poco, en el momento adecuado: wellness al despertar, RPE después de la sesión, el workout del día. Veinte segundos, no un formulario.',
    points: [
      { icon: 'moon', label: 'Cuestionario wellness al despertar, en 20 segundos' },
      { icon: 'gauge', label: 'RPE post-sesión en un gesto, notificación incluida' },
      { icon: 'dumbbell', label: 'Workouts individuales con vídeos e instrucciones' },
      { icon: 'calendar', label: 'Convocatorias, respuestas y disponibilidad' },
    ],
    note: 'La app nunca es obligatoria: un jugador puede hacerlo todo desde un simple enlace, sin cuenta.',
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
    title: 'La monitorización se integra en una plataforma completa.',
    body: 'STRIVN no es una herramienta de monitorización aislada: convocatorias, asistencia, enfermería, sesiones e informes están reunidos en el mismo entorno, para todo el staff.',
    featured: [
      {
        icon: 'activity',
        title: 'Carga, RPE & GPS',
        badge: 'MONITORIZACIÓN',
        badgeTone: 'blue',
        body: 'El corazón del sistema: importación GPS, RPE, carga interna y externa, ACWR y alertas — el punto de entrada diario del staff de rendimiento.',
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
        body: 'Convocatorias enviadas, respuestas consolidadas, plantilla al día.',
        cta: 'En detalle',
        href: '/es/features/communication/',
      },
      {
        icon: 'heart-pulse',
        title: 'Enfermería',
        body: 'Lesiones y regreso al juego, visibles para el staff autorizado.',
        cta: 'En detalle',
        href: '/es/features/medical/',
      },
      {
        icon: 'target',
        title: 'Programas individuales',
        body: 'Objetivos y ejercicios vinculados a los datos de cada jugador.',
        cta: 'En detalle',
        href: '/es/features/programs/',
      },
      {
        icon: 'clipboard',
        title: 'Sesiones & táctica',
        body: 'Planes de sesión y pizarras conectados al estado del grupo.',
        cta: 'En detalle',
        href: '/es/features/sessions/',
      },
      {
        icon: 'radio',
        title: 'Sesión & partido en directo',
        body: 'Asistencia, tiempo de juego y eventos registrados a pie de campo.',
        cta: 'En detalle',
        href: '/es/features/live-session/',
      },
      {
        icon: 'sparkles',
        title: 'Informes, IA & dashboards',
        body: 'Resúmenes redactados por la IA y dashboards componibles, compartidos con el staff y la directiva.',
        cta: 'En detalle',
        href: '/es/features/reports/',
      },
    ],
  },
  intelligence: {
    index: '05',
    kicker: 'IA & BI INTEGRADAS',
    title: 'La IA y la BI, integradas a cada nivel.',
    body: 'No es un chatbot puesto sobre sus datos: es una IA que lee carga, wellness, GPS e historial médico en conjunto. Y cuando una pregunta merece un gráfico, la IA lo construye.',
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
      signalTitle: 'Señal detectada por la IA, sin solicitarla',
      signalBody: 'Sueño del grupo a la baja un 12% desde el paso a 2 partidos por semana.',
      signalCta: 'Examinar',
    },
    capabilities: [
      {
        icon: 'sun',
        title: 'Síntesis de la mañana',
        body: 'El estado del grupo resumido por la IA antes de la sesión: readiness, alertas y ajustes propuestos.',
      },
      {
        icon: 'radar',
        title: 'Detección de señales',
        body: 'La IA cruza en continuo carga × wellness × historial médico. Las derivas afloran antes de la lesión.',
      },
      {
        icon: 'layout',
        title: 'Dashboards bajo demanda',
        body: 'Haga una pregunta, la IA construye la visualización que la responde — y la fija a sus dashboards en un clic.',
      },
      {
        icon: 'file-text',
        title: 'Informes redactados por la IA',
        body: 'Resúmenes semanales y post-partido redactados por la IA, listos para entregar a la directiva.',
      },
    ],
    bi: {
      kicker: 'BI & DASHBOARDS',
      title: 'Sus dashboards, construidos — o generados.',
      body: 'Una biblioteca de widgets para componer sus informes: carga, GPS, wellness, tests, disponibilidad. Y para cada pregunta puntual, una visualización generada al vuelo, lista para fijar.',
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
        hsr: 'HSR — partido vs partido',
        aiTag: 'GENERADO POR LA IA',
      },
    },
  },
  convince: {
    index: '06',
    kicker: 'CONVENCER AL STAFF',
    title: 'Adoptado por un preparador. Desplegado por todo el staff.',
    body: 'El despliegue sigue casi siempre el mismo esquema: un preparador adopta la plataforma, demuestra el valor de los datos, y el staff se une. El dossier de staff sintetiza ese valor para un primer entrenador o una directiva de club — transmisible en un gesto.',
    steps: [
      {
        title: 'Usted adopta la plataforma',
        body: 'Importación GPS, wellness y seguimiento de carga en su equipo, sin compromiso.',
      },
      {
        title: 'Usted comparte el dossier de staff',
        body: 'Un enlace o un PDF que presenta el valor para cada rol.',
      },
      {
        title: 'El staff se une a su espacio',
        body: 'Primer entrenador, staff médico, ayudantes — una vista por rol, los mismos datos.',
      },
    ],
    dossier: {
      brand: 'STRIVN',
      kicker: 'DOSSIER DE STAFF',
      title: 'El valor para cada rol',
      roles: [
        { icon: 'users', body: 'Primer entrenador — disponibilidad real en la convocatoria' },
        { icon: 'heart-pulse', body: 'Staff médico — enfermería y protocolos de regreso compartidos' },
        { icon: 'clipboard', body: 'Ayudantes — sesiones vinculadas al estado del grupo' },
        { icon: 'shield', body: 'Directiva — un equipo estructurado, sin inversión inicial' },
      ],
      copyBtn: 'Copiar el enlace',
      pdfBtn: 'Descargar el PDF',
      note: 'DISEÑADO PARA TRANSMITIRSE EN UN GESTO',
    },
  },
  solutions: {
    index: '07',
    kicker: 'POR FUNCIÓN',
    title: 'Una puerta de entrada para cada función del staff.',
    cards: [
      {
        icon: 'dumbbell',
        title: 'Preparadores físicos',
        body: 'La profundización completa: monitorización, tests, programas y metodología.',
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
      {
        icon: 'building',
        title: 'Clubes & academias',
        body: 'Varios equipos, base de jugadores compartida, seguimiento médico entre equipos.',
        cta: 'Ver la oferta para clubes',
        href: '/es/clubs/',
      },
    ],
  },
  pricing: {
    index: '08',
    kicker: 'PRECIOS',
    title: 'Gratis para el staff. Facturado a escala de club.',
    plans: [
      {
        name: 'Coach',
        badge: 'Disponible ahora',
        price: '0 €',
        period: 'para siempre',
        description: 'Para desplegar STRIVN en un equipo, sin pedir presupuesto al club.',
        features: [
          '1 equipo',
          'Jugadores ilimitados',
          'Staff ilimitado',
          'Eventos, sesiones y partidos',
          'Asistencia, RSVP y comunicación',
          'Enfermería, táctica, informes y asistente IA',
        ],
        cta: 'Crear mi equipo',
        kind: 'app',
        featured: true,
      },
      {
        name: 'Club',
        badge: 'Apertura progresiva',
        price: 'Pronto',
        description: 'Para coordinar todos los equipos y staffs de un club.',
        features: [
          'Varios equipos',
          'Base de jugadores compartida',
          'Staff médico y coordinadores compartidos',
          'Dashboards y reporting de club',
          'Seguimiento de lesiones entre equipos',
        ],
        cta: 'Pedir una demo',
        kind: 'demo',
      },
      {
        name: 'Club Pro',
        badge: 'Bajo petición',
        price: 'Pronto',
        description: 'Para organizaciones que quieren insights avanzados.',
        features: [
          'Todo el plan Club',
          'Reporting avanzado',
          'Analytics avanzadas',
          'Acceso API',
          'Insights organizacionales',
        ],
        cta: 'Hablar con el equipo',
        kind: 'contact',
      },
    ],
    note: 'La facturación llega cuando un club coordina varios equipos y staffs en STRIVN — nunca para desbloquear las herramientas del staff.',
  },
  faq: {
    index: '09',
    kicker: 'FAQ',
    title: 'Las preguntas que hacen los staffs.',
    body: 'El papel de los jugadores, la gobernanza del espacio y los plazos de puesta en marcha.',
    contactTitle: '¿Otra pregunta?',
    contactBody: 'Escríbanos — el equipo fundador responde directamente.',
    email: 'hello@strivn.net',
    items: [
      {
        q: '¿Cómo importo mis datos GPS?',
        a: 'Por exportación CSV, desde cualquier sistema — Catapult, STATSports u otro. La correspondencia de columnas queda memorizada: las siguientes importaciones tardan unos segundos.',
      },
      {
        q: '¿Quién mantiene el control del espacio de equipo?',
        a: 'Usted. Crea el espacio, invita al staff y define los derechos de acceso de cada uno. No se requiere ninguna validación del club.',
      },
      {
        q: '¿Cuál es el plazo de puesta en marcha?',
        a: 'Unos minutos: cree el espacio, añada a sus jugadores, importe su primera sesión. El histórico se construye con las semanas.',
      },
      {
        q: '¿Por qué el plan Coach es gratuito?',
        a: 'Un miembro del staff no debería pedir presupuesto para estructurar su trabajo. La facturación llega a nivel de club, cuando hay que coordinar varios equipos.',
      },
      {
        q: '¿Se adapta al fútbol amateur y semiprofesional?',
        a: 'Es precisamente el terreno de STRIVN: staffs reducidos, medios medidos, y jugadores que no van a usar diez aplicaciones distintas.',
      },
      {
        q: 'Preparador: ¿cómo lograr la adhesión del primer entrenador?',
        a: 'Empiece con sus propios datos y luego transmita el dossier de staff desde el sitio. Cuando el primer entrenador constata la disponibilidad real en la convocatoria, la adhesión llega de forma natural.',
      },
    ],
  },
  finalCta: {
    kicker: 'EMPIECE SOLO, GRATIS',
    title: 'Sus datos y su staff, bajo un mismo techo.',
    body: 'Cree su espacio gratis — importación GPS, wellness, carga y readiness incluidos desde el primer día. Su staff se une cuando la demostración está hecha.',
    primaryCta: 'Crear mi espacio gratis',
    secondaryCta: 'Compartir el dossier de staff',
    trust: 'SIN TARJETA DE CRÉDITO · SIN VALIDACIÓN DEL CLUB · SUS DATOS SIGUEN SIENDO SUYOS',
  },
  footer: {
    tagline: 'El seguimiento del rendimiento, al estándar profesional.',
    body: 'STRIVN reúne la monitorización del rendimiento y la gestión de equipo en un solo espacio compartido por el staff.',
    email: 'hello@strivn.net',
    columns: [
      {
        title: 'PRODUCTO',
        links: [
          { label: 'Plataforma', href: '/es/#plateforme' },
          { label: 'Funcionalidades', href: '/es/features/' },
          { label: 'Precios', href: '/es/#tarifs' },
          { label: 'FAQ', href: '/es/#faq' },
          { label: 'Blog', href: '/fr/blog/', hreflang: 'fr' },
        ],
      },
      {
        title: 'SOLUCIONES',
        links: [
          { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
          { label: 'Clubes', href: '/es/clubs/' },
          { label: 'Equipos juveniles', href: '/es/youth-teams/' },
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
    copyright: '© 2026 STRIVN · Gratis para los coaches, pronto para los clubes',
  },
};

export const homeContent: Record<Locale, HomeContent> = { fr, en, nl, de, pt, es };
