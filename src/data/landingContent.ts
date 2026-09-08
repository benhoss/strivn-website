export type Locale = 'en' | 'fr' | 'nl' | 'de' | 'pt' | 'es';

/** One scattered fragment of the coach's daily chaos, shown in the hero stage. */
type Fragment = {
  kind: 'chat' | 'sheet' | 'note' | 'sms' | 'scrap' | 'mail';
  source: string;
  text: string;
};

/** One ordered row of the unified team-state panel the fragments converge into. */
type PanelRow = { label: string; value: string; tone: 'ok' | 'watch' | 'info' };

type LandingContent = {
  meta: { title: string; description: string };


  hero: {
    claim: string;
    title: string;
    titleAccent: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    reassurance: string;
    stage: {
      ariaLabel: string;
      fragments: Fragment[];
      panel: {
        header: string;
        status: string;
        rows: PanelRow[];
      };
    };
  };

  overview: {
    eyebrow: string;
    title: string;
    sub: string;
    /** Public path to the self-hosted MP4, localized per locale. */
    srcMp4: string;
    /** Poster frame shown before play (preload="none"). */
    poster: string;
    duration: string;
    playLabel: string;
    ariaLabel: string;
  };

  reality: {
    title: string;
    body: string;
    scattered: string[];
    resolve: string;
  };

  communication: {
    title: string;
    body: string;
    points: string[];
    proof: {
      messageLabel: string;
      message: string;
      link: string;
      repliesLabel: string;
      replies: Array<{ name: string; answer: string; tone: 'ok' | 'watch' }>;
      tally: string;
    };
  };

  medical: {
    title: string;
    body: string;
    points: string[];
    record: {
      player: string;
      injury: string;
      since: string;
      stages: Array<{ label: string; state: 'done' | 'active' | 'todo' }>;
      notes: Array<{ author: string; role: string; text: string }>;
      returnLabel: string;
      returnValue: string;
    };
  };

  load: {
    title: string;
    body: string;
    points: string[];
    table: {
      title: string;
      week: string;
      colPlayer: string;
      colMon: string;
      colWed: string;
      colFri: string;
      colAcwr: string;
      colState: string;
      pillOk: string;
      pillWatch: string;
      pillRisk: string;
      players: Array<{
        name: string;
        mon: string;
        wed: string;
        fri: string;
        acwr: string;
        zone: 'green' | 'amber' | 'red';
      }>;
      tipLabel: string;
      tip: string;
    };
  };

  sessions: {
    title: string;
    body: string;
    points: string[];
    board: {
      title: string;
      meta: string;
      stamp: string;
      phases: Array<{ label: string; detail: string }>;
    };
  };

  capabilities: {
    title: string;
    body: string;
    items: Array<{ title: string; text: string; href?: string }>;
  };

  playerApp: {
    title: string;
    body: string;
    stores: string;
    cta: string;
    imageAlt: string;
  };

  timeSaved: {
    title: string;
    body: string;
    rows: Array<{ task: string; outcome: string }>;
  };

  pricing: {
    title: string;
    body: string;
    plans: Array<{
      name: string;
      description: string;
      price: string;
      period: string;
      availability: string;
      cta: string;
      featured?: boolean;
      features: string[];
    }>;
    note: string;
  };

  faq: {
    title: string;
    body: string;
    items: Array<{ question: string; answer: string }>;
  };

  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };

  footer: {
    statement: string;
    brandLine: string;
    email: string;
    links: Array<{ label: string; href: string }>;
    /** Mobile apps row: one line per app, each with its two store links. */
    apps: { title: string; rows: Array<{ label: string; appStore: string; playStore: string }> };
    credit: string;
  };
};

/** Verified store listings — reused by the footer and the feature pages. */
export const STORE_LINKS = {
  coach: {
    appStore: 'https://apps.apple.com/be/app/strivn-coach/id6789923213',
    playStore: 'https://play.google.com/store/apps/details?id=net.strivn.coach',
  },
  player: {
    appStore: 'https://apps.apple.com/be/app/strivn-player/id6779121691',
    playStore: 'https://play.google.com/store/apps/details?id=net.strivn.player',
  },
} as const;

export const APP_URL = 'https://app.strivn.net';

export const landingContent: Record<Locale, LandingContent> = {
  fr: {
    meta: {
      title: 'Réunissez toute l’équipe sous un même toit | STRIVN',
      description:
        'Réunissez convocations, présences, infirmerie, charge et séances au même endroit, partagées par tout le staff. Chaque nouveau compte démarre avec 30 jours de Semi-Pro, sans carte.',
    },


    hero: {
      claim: 'Conçu par des coachs et des joueurs, pour les staffs et les équipes',
      title: 'Réunissez toute l’équipe',
      titleAccent: 'sous un même toit.',
      lede: 'Vous tenez le groupe sur WhatsApp, les présences sur Excel et les RPE sur un carnet. STRIVN réunit convocations, présences, infirmerie, charge et séances au même endroit. Tout le staff y lit la même semaine.',
      primaryCta: 'Commencer gratuitement',
      secondaryCta: 'Voir la démo',
      reassurance: '30 jours de Semi-Pro · sans carte bancaire · sans validation du club',
      stage: {
        ariaLabel:
          'Animation. Les messages, fichiers et notes éparpillés d’un coach convergent dans un panneau STRIVN qui montre l’état de l’équipe.',
        fragments: [
          { kind: 'mail', source: 'Email', text: 'Convocation dimanche : 9 réponses sur 16' },
          { kind: 'sheet', source: 'presences_S23_v4.xlsx', text: 'Présences : 3 onglets, 2 versions' },
          { kind: 'sms', source: 'Kiné · SMS', text: 'Genou de Mendes : pas de sprint cette semaine' },
          { kind: 'scrap', source: 'Carnet', text: 'RPE de jeudi : à ressaisir' },
          { kind: 'note', source: 'Note papier', text: 'Caler le bloc pressing pour jeudi' },
          { kind: 'chat', source: 'Équipe · WhatsApp', text: 'On joue à quelle heure dimanche ?' },
        ],
        panel: {
          header: 'État équipe',
          status: 'À jour · partagé avec le staff',
          rows: [
            { label: 'Communication', value: 'Convocation envoyée · 14 réponses', tone: 'ok' },
            { label: 'Présences', value: '14 présents · 2 incertains', tone: 'ok' },
            { label: 'Infirmerie', value: 'T. Mendes · réathlétisation', tone: 'watch' },
            { label: 'Charge & RPE', value: 'ACWR 1.12 · groupe stable', tone: 'ok' },
            { label: 'Séance', value: 'Jeudi 20h · bloc pressing', tone: 'info' },
            { label: 'Match', value: 'Dimanche 15h · effectif confirmé', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'En action',
      title: 'Faites le tour du produit en deux minutes.',
      sub: 'Vous y voyez comment convocations, présences, infirmerie et charge tiennent dans un seul espace partagé par le staff.',
      srcMp4: '/videos/overview-fr.mp4',
      poster: '/posters/overview-fr.jpg',
      duration: '2 min',
      playLabel: 'Lire la présentation du produit',
      ariaLabel: 'Vidéo de présentation du produit STRIVN',
    },

    reality: {
      title: 'Rassemblez les six endroits où vit votre semaine.',
      body: 'Le mardi à 22h47, vous relancez les silencieux, tenez l’infirmerie, ressaisissez les présences et briefez le kiné. Ces quatre gestes vivent aujourd’hui dans six endroits différents.',
      scattered: [
        'Le groupe WhatsApp',
        'Le fichier de présences',
        'Les notes d’infirmerie',
        'Le carnet de RPE',
        'Les schémas de séance',
        'La mémoire du coach',
      ],
      resolve: 'Un seul endroit.',
    },

    communication: {
      title: 'Convoquez en un lien, suivez les réponses en direct.',
      body: 'Chaque événement génère son message et son lien de réponse, prêt à partager. Vous le postez sur le canal que votre groupe utilise déjà, WhatsApp, email ou l’app. STRIVN collecte les réponses et tient la feuille de présences à jour.',
      points: [
        'Modèles de message par type d’événement',
        'Lien de réponse sans compte joueur',
        'Présences mises à jour en temps réel',
        'Relances ciblées sur les sans-réponse',
      ],
      proof: {
        messageLabel: 'Message envoyé · 18h02',
        message: 'Entraînement jeudi 20h · terrain 2. Confirme ta présence.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Réponses des joueurs',
        replies: [
          { name: 'A. Diallo', answer: 'Présent', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'Présent', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Incertain · genou', tone: 'watch' },
        ],
        tally: '14 présents · 1 incertain · mis à jour à 18h05',
      },
    },

    medical: {
      title: 'Ouvrez l’infirmerie à tout le staff autorisé.',
      body: 'Blessures, notes du médecin, avis du kiné et protocole de retour au jeu tiennent dans une même fiche. Vous lisez l’étape en cours de chaque joueur, du diagnostic à la disponibilité match, cinq étapes en tout.',
      points: [
        'Historique par joueur',
        'Notes du médecin et du kiné au même endroit',
        'Protocole de retour au jeu par étapes',
        'Visibilité coach en lecture',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Lésion ischio-jambiers · grade 1',
        since: 'Depuis le 28 avril',
        stages: [
          { label: 'Diagnostic', state: 'done' },
          { label: 'Soins', state: 'done' },
          { label: 'Réathlétisation', state: 'active' },
          { label: 'Retour collectif', state: 'todo' },
          { label: 'Disponible match', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Médecin', text: 'Reprise course en ligne autorisée. Pas de sprint avant J+7.' },
          { author: 'A. Roux', role: 'Kiné', text: 'Bonne réponse au renforcement. Ressenti joueur en hausse.' },
        ],
        returnLabel: 'Retour estimé',
        returnValue: '10 – 12 jours',
      },
    },

    load: {
      title: 'Lisez l’ACWR du groupe chaque lundi matin.',
      body: 'Les joueurs saisissent leur RPE depuis leur téléphone, et STRIVN assemble la semaine. Vous arrivez le lundi avec la charge hebdomadaire, l’ACWR et la récupération déjà calculés.',
      points: [
        'RPE par séance et par joueur',
        'Charge hebdo et monotonie',
        'ACWR par joueur',
        'Note prépa partagée au staff',
      ],
      table: {
        title: 'Charge & RPE',
        week: 'Semaine 23 · 1 – 7 juin',
        colPlayer: 'Joueur',
        colMon: 'Lun',
        colWed: 'Mer',
        colFri: 'Ven',
        colAcwr: 'ACWR',
        colState: 'État',
        pillOk: 'OK',
        pillWatch: 'À surveiller',
        pillRisk: 'Risque',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Note prépa',
        tip: 'L. Moreau enchaîne 3 semaines au-dessus de 1.25. Prévoyez une séance allégée vendredi.',
      },
    },

    sessions: {
      title: 'Préparez la séance avant d’arriver au terrain.',
      body: 'Vous posez les blocs, STRIVN met la séance en forme et l’assistant IA tient compte de la charge réelle. La capture montre quatre ateliers pour 75 minutes, du pressing haut à l’opposition.',
      points: [
        'Tableaux tactiques',
        'Bibliothèque d’exercices',
        'Planification de la semaine',
        'Création de séance assistée par IA',
      ],
      board: {
        title: 'Bloc tactique · pressing haut',
        meta: 'Séance · jeudi 20h',
        stamp: '4 ateliers · 75 min',
        phases: [
          { label: 'Échauffement', detail: 'Activation + conduite de balle · 15 min' },
          { label: 'Atelier 1', detail: 'Pressing à 3, déclenchement sur passe latérale · 20 min' },
          { label: 'Atelier 2', detail: 'Sortie de balle sous pression · 20 min' },
          { label: 'Jeu', detail: 'Opposition 8v8, contraintes pressing · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Couvrez les huit autres modules du quotidien.',
      body: 'Une donnée saisie une fois sert aux huit modules ci-dessous. Le palier gratuit fait tourner une équipe toute la saison, sur une place de staff.',
      items: [
        { title: 'Présences & RSVP', text: 'Les réponses des joueurs alimentent une vue coach à jour, comptage compris.', href: '/fr/features/attendance/' },
        { title: 'Infirmerie', text: 'Blessures, notes médicales et retour au jeu restent visibles pour le staff autorisé.', href: '/fr/features/medical/' },
        { title: 'Charge & RPE', text: 'La charge, le ressenti et les signaux faibles se relient à la semaine réelle du groupe.', href: '/fr/features/training-load/' },
        { title: 'Tests & évaluations', text: 'Les tests physiques et techniques sont suivis dans le temps pour voir la progression réelle.' },
        { title: 'Programmes individuels', text: 'Objectifs, charges adaptées et exercices spécifiques restent reliés à chaque joueur.', href: '/fr/features/programs/' },
        { title: 'Séances & tactique', text: 'Plans de séance, tableaux tactiques et exercices restent connectés à l’état de l’équipe.', href: '/fr/features/sessions/' },
        { title: 'Rapports de match et de séance', text: 'Les retours du staff bouclent la semaine et gardent les temps de jeu visibles.', href: '/fr/features/reports/' },
        { title: 'Assistant IA', text: 'L’assistant lit vos comptes-rendus et propose la décision, que vous validez.' },
      ],
    },

    playerApp: {
      title: 'Donnez à chaque joueur sa propre vue.',
      body: 'Chaque joueur suit l’agenda, le prochain événement et ses réponses de présence depuis l’app native. Le lien de réponse reste ouvert à ceux qui préfèrent leur navigateur.',
      stores: 'Disponible sur iOS et Android',
      cta: 'Découvrir l’app joueur',
      imageAlt: 'Capture de l’app joueur STRIVN : agenda de la semaine avec les prochains événements',
    },

    timeSaved: {
      title: 'Récupérez vos soirées.',
      body: 'L’intendance tourne en arrière-plan pendant que vous préparez la séance. Ces quatre tâches quittent votre mardi soir : convocations, présences, comptes-rendus, coordination.',
      rows: [
        { task: 'Convocations & relances', outcome: 'centralisées' },
        { task: 'Présences & infirmerie', outcome: 'au même endroit' },
        { task: 'Comptes-rendus de séance', outcome: 'préparés' },
        { task: 'Coordination du staff', outcome: 'visible par tous' },
      ],
    },

    pricing: {
      title: 'Démarrez au gratuit, montez quand le club suit.',
      body: 'Le palier gratuit fait tourner une équipe toute la saison, sur une place de staff. Chaque nouveau compte démarre avec 30 jours de Semi-Pro, sans carte bancaire.',
      plans: [
        {
          name: 'Free',
          description: 'Pour faire tourner une équipe toute la saison, sur votre seule décision.',
          price: '0€',
          period: 'pour toujours',
          availability: 'Disponible maintenant',
          cta: 'Créer mon équipe',
          featured: true,
          features: [
            'Une équipe, joueurs sans plafond, une place de staff',
            'Événements, séances, matchs et convocations',
            'Présences, effectif et app joueur',
            'Infirmerie, tactique, rapports et programmes individuels',
            '20 exercices, 3 tableaux tactiques, 3 modèles',
            '60 appels à l’assistant IA par mois',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'Pour croiser le GPS avec le RPE et le wellness, sur un budget de club.',
          price: 'Bientôt',
          period: '',
          availability: 'Bientôt en vente',
          cta: 'Demander une démo',
          features: [
            'Import GPS par CSV, quel que soit le fournisseur',
            'GPS, RPE et wellness croisés sur le même créneau',
            'Musculation, tests physiques et tableau médical',
            'Relances et check-ins automatiques par WhatsApp',
            '2 000 appels IA et 3 000 messages WhatsApp par mois',
          ],
        },
        {
          name: 'Pro',
          description: 'Pour les clubs qui équipent plusieurs équipes et font sortir leurs données.',
          price: 'Sur devis',
          period: '',
          availability: 'Sur demande',
          cta: 'Parler à l’équipe',
          features: [
            'Tout le plan Semi-Pro, plus :',
            'Équipes en nombre illimité',
            'Volumes WhatsApp et IA définis au contrat',
            'Périmètre et accompagnement sur mesure',
            'À venir : connecteurs GPS, API publique, signature d’exercice',
          ],
        },
      ],
      note: 'Les paliers payants ouvrent à la vente prochainement. Créez votre compte, l’essai vous met au Semi-Pro pendant 30 jours, et nous vous prévenons à l’ouverture.',
    },

    faq: {
      title: 'Les six questions qu’on nous pose en premier.',
      body: 'Ce que vos joueurs ont à faire, qui décide, et combien de temps ça prend à installer.',
      items: [
        {
          question: 'Mes joueurs doivent-ils installer une application ?',
          answer:
            'Ils répondent depuis un lien partagé sur le canal que vous utilisez déjà : web, mobile, WhatsApp, email. L’app joueur reste facultative, et ceux qui l’installent reçoivent en plus les notifications.',
        },
        {
          question: 'Qui garde la main sur les envois ?',
          answer:
            'Vous validez chaque envoi. STRIVN prépare le message, la relance et le compte-rendu, puis les met en attente de votre geste. L’intendance tourne pendant que vous coachez le groupe.',
        },
        {
          question: 'Combien de temps pour démarrer ?',
          answer:
            'Quelques minutes. Vous créez votre équipe, vous ajoutez vos joueurs, et vous pouvez créer vos premiers événements, messages et liens de réponse dès la première semaine.',
        },
        {
          question: 'Pourquoi le palier gratuit existe-t-il ?',
          answer:
            'Parce qu’un coach doit pouvoir tester STRIVN sur sa propre décision, avant d’ouvrir un budget de club. Le gratuit tient toute la saison, puis la suivante, sans carte bancaire.',
        },
        {
          question: 'STRIVN convient-il au football amateur ?',
          answer:
            'STRIVN est pensé pour les coachs multi-casquettes qui portent seuls la séance, l’infirmerie et la logistique. Plus vous cumulez de rôles, plus vous récupérez d’heures chaque semaine.',
        },
        {
          question: 'Et si j’ai déjà un staff médical et un prépa ?',
          answer:
            'Chacun retrouve sa vue : le kiné ouvre l’infirmerie, le préparateur lit la charge, le coach garde la séance. Une donnée saisie par l’un sert aux deux autres.',
        },
      ],
    },

    finalCta: {
      title: 'Mettez votre équipe sous un même toit.',
      body: 'Créez votre équipe en quelques minutes. Les 30 premiers jours sont au Semi-Pro, sans carte bancaire.',
      primaryCta: 'Créer mon équipe gratuitement',
      secondaryCta: 'Une question avant de démarrer ?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20question%20avant%20de%20d%C3%A9marrer',
    },

    footer: {
      statement: 'Réunissez toute l’équipe sous un même toit.',
      brandLine: 'STRIVN réunit convocations, présences, infirmerie, charge et séances au même endroit, pour tout le staff.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plateforme', href: '/fr/solutions/' },
        { label: 'Fonctionnalités', href: '/fr/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
        { label: 'Tarifs', href: '/fr/pricing/' },
        { label: 'FAQ', href: '/fr/#faq' },
        { label: 'Support', href: '/fr/support' },
        { label: 'Confidentialité', href: '/fr/privacy' },
      ],
      apps: {
        title: 'Applications mobiles',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Quatre paliers, 30 jours de Semi-Pro à l’inscription',
    },
  },

  en: {
    meta: {
      title: 'Bring your whole team under one roof | STRIVN',
      description:
        'Bring call-ups, attendance, medical records, training load and sessions into one place the whole staff shares. Every new account starts on 30 days of Semi-Pro, without a card.',
    },


    hero: {
      claim: 'Built by coaches and players, for staff and teams',
      title: 'Bring your whole team',
      titleAccent: 'under one roof.',
      lede: 'You hold the group on WhatsApp, attendance in a spreadsheet and RPE in a notebook. STRIVN brings call-ups, attendance, medical records, load and sessions into one place. The whole staff reads the same week.',
      primaryCta: 'Start for free',
      secondaryCta: 'See the demo',
      reassurance: '30 days of Semi-Pro · without a card · without club approval',
      stage: {
        ariaLabel:
          'Animation. A coach’s scattered messages, files and notes converge into one STRIVN panel showing the team’s state.',
        fragments: [
          { kind: 'mail', source: 'Email', text: 'Sunday call-up: 9 replies out of 16' },
          { kind: 'sheet', source: 'attendance_W23_v4.xlsx', text: 'Attendance: 3 tabs, 2 versions' },
          { kind: 'sms', source: 'Physio · SMS', text: 'Mendes’ knee: no sprinting this week' },
          { kind: 'scrap', source: 'Notebook', text: 'Thursday’s RPE: still to enter' },
          { kind: 'note', source: 'Paper note', text: 'Plan the pressing block for Thursday' },
          { kind: 'chat', source: 'Team · WhatsApp', text: 'What time is the game on Sunday?' },
        ],
        panel: {
          header: 'Team state',
          status: 'Up to date · shared with staff',
          rows: [
            { label: 'Communication', value: 'Call-up sent · 14 replies', tone: 'ok' },
            { label: 'Attendance', value: '14 in · 2 uncertain', tone: 'ok' },
            { label: 'Medical', value: 'T. Mendes · reconditioning', tone: 'watch' },
            { label: 'Load & RPE', value: 'ACWR 1.12 · squad stable', tone: 'ok' },
            { label: 'Session', value: 'Thursday 8pm · pressing block', tone: 'info' },
            { label: 'Match', value: 'Sunday 3pm · squad confirmed', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'See it in action',
      title: 'Take the two-minute product tour.',
      sub: 'You see how call-ups, attendance, medical records and training load fit into one workspace the whole staff shares.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Play the product overview',
      ariaLabel: 'STRIVN product overview video',
    },

    reality: {
      title: 'Gather the six places your week lives in.',
      body: 'On Tuesday at 10:47pm, you chase the silent players, update the medical log, re-enter attendance and brief the physio. Those four jobs live today in six different places.',
      scattered: [
        'The WhatsApp group',
        'The attendance spreadsheet',
        'The medical notes',
        'The RPE notebook',
        'The session diagrams',
        'The coach’s memory',
      ],
      resolve: 'One place.',
    },

    communication: {
      title: 'Send one link, watch the replies land.',
      body: 'Every event generates its message and its reply link, ready to share. You post it on the channel your group already uses, WhatsApp, email or the app. STRIVN collects the replies and keeps the attendance sheet up to date.',
      points: [
        'Message templates per event type',
        'Reply link with no player account',
        'Attendance updated in real time',
        'Targeted reminders for non-responders',
      ],
      proof: {
        messageLabel: 'Message sent · 6:02pm',
        message: 'Training Thursday 8pm · pitch 2. Confirm your attendance.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Player replies',
        replies: [
          { name: 'A. Diallo', answer: 'In', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'In', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Uncertain · knee', tone: 'watch' },
        ],
        tally: '14 in · 1 uncertain · updated at 6:05pm',
      },
    },

    medical: {
      title: 'Open the medical log to authorised staff.',
      body: 'Injuries, doctor’s notes, physio assessments and the return-to-play protocol sit in one record. You read the current stage for every player, from diagnosis to match availability, five stages in all.',
      points: [
        'Per-player history',
        'Doctor and physio notes in one place',
        'Staged return-to-play protocol',
        'Read-only coach visibility',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Hamstring strain · grade 1',
        since: 'Since April 28',
        stages: [
          { label: 'Diagnosis', state: 'done' },
          { label: 'Treatment', state: 'done' },
          { label: 'Reconditioning', state: 'active' },
          { label: 'Group training', state: 'todo' },
          { label: 'Match available', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Doctor', text: 'Straight-line running approved. No sprinting before day 7.' },
          { author: 'A. Roux', role: 'Physio', text: 'Good response to strengthening. Player-reported feel improving.' },
        ],
        returnLabel: 'Estimated return',
        returnValue: '10 – 12 days',
      },
    },

    load: {
      title: 'Read the squad’s ACWR every Monday morning.',
      body: 'Players enter their RPE from their phones, and STRIVN assembles the week. You arrive on Monday with weekly load, ACWR and recovery already calculated.',
      points: [
        'RPE per session, per player',
        'Weekly load and monotony',
        'ACWR per player',
        'Fitness-coach note shared with staff',
      ],
      table: {
        title: 'Load & RPE',
        week: 'Week 23 · June 1 – 7',
        colPlayer: 'Player',
        colMon: 'Mon',
        colWed: 'Wed',
        colFri: 'Fri',
        colAcwr: 'ACWR',
        colState: 'State',
        pillOk: 'OK',
        pillWatch: 'Watch',
        pillRisk: 'Risk',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Fitness note',
        tip: 'L. Moreau has been above 1.25 for 3 straight weeks. Plan a lighter session on Friday.',
      },
    },

    sessions: {
      title: 'Build the session before you reach the pitch.',
      body: 'You lay out the blocks, STRIVN shapes the session and the AI assistant accounts for the squad’s actual load. The board shows four drills over 75 minutes, from the high press to the game.',
      points: [
        'Tactical boards',
        'Drill library',
        'Week planning',
        'AI-assisted session creation',
      ],
      board: {
        title: 'Tactical block · high press',
        meta: 'Session · Thursday 8pm',
        stamp: '4 drills · 75 min',
        phases: [
          { label: 'Warm-up', detail: 'Activation + ball carrying · 15 min' },
          { label: 'Drill 1', detail: 'Press in threes, triggered on the lateral pass · 20 min' },
          { label: 'Drill 2', detail: 'Build-up under pressure · 20 min' },
          { label: 'Game', detail: '8v8 opposition, pressing constraints · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Cover the eight other modules of the week.',
      body: 'Data entered once serves the eight modules below. The free tier runs one team for a whole season, on one staff seat.',
      items: [
        { title: 'Attendance & RSVP', text: 'Player replies feed an up-to-date coach view, counting included.', href: '/en/features/attendance/' },
        { title: 'Medical log', text: 'Injuries, medical notes and return-to-play stay visible to authorised staff.', href: '/en/features/medical/' },
        { title: 'Load & RPE', text: 'Load, perceived effort and weak signals connect to the squad’s actual week.', href: '/en/features/training-load/' },
        { title: 'Tests & assessments', text: 'Physical and technical tests are tracked over time to show real progression.' },
        { title: 'Individual programs', text: 'Goals, adapted loads and specific drills stay linked to each player.', href: '/en/features/programs/' },
        { title: 'Sessions & tactics', text: 'Session plans, tactical boards and drills stay connected to the team’s state.', href: '/en/features/sessions/' },
        { title: 'Match & session reports', text: 'Staff reports close the week and keep playing time visible.', href: '/en/features/reports/' },
        { title: 'AI assistant', text: 'The assistant reads your reports and proposes the decision, which you approve.' },
      ],
    },

    playerApp: {
      title: 'Give every player their own view.',
      body: 'Every player follows the agenda, the next event and their attendance replies from the native app. The reply link stays open for those who prefer their browser.',
      stores: 'Available on iOS and Android',
      cta: 'Discover the player app',
      imageAlt: 'Screenshot of the STRIVN player app: weekly agenda with upcoming events',
    },

    timeSaved: {
      title: 'Get your evenings back.',
      body: 'The operations run in the background while you prepare the session. These four jobs leave your Tuesday evening: call-ups, attendance, reports, coordination.',
      rows: [
        { task: 'Call-ups & reminders', outcome: 'centralised' },
        { task: 'Attendance & medical log', outcome: 'in one place' },
        { task: 'Session reports', outcome: 'prepared' },
        { task: 'Staff coordination', outcome: 'visible to everyone' },
      ],
    },

    pricing: {
      title: 'Start free, move up when the club does.',
      body: 'The free tier runs one team for a whole season, on one staff seat. Every new account starts on 30 days of Semi-Pro, without a card.',
      plans: [
        {
          name: 'Free',
          description: 'To run one team for a whole season, on your own decision.',
          price: '€0',
          period: 'forever',
          availability: 'Available now',
          cta: 'Create my team',
          featured: true,
          features: [
            'One team, unlimited players, one staff seat',
            'Events, sessions, matches and call-ups',
            'Attendance, squad list and player app',
            'Injury room, tactics, reports and individual programmes',
            '20 exercises, 3 tactical boards, 3 templates',
            '60 AI assistant calls a month',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'To cross GPS with RPE and wellness, on a club budget.',
          price: 'Soon',
          period: '',
          availability: 'On sale soon',
          cta: 'Request a demo',
          features: [
            'GPS import by CSV, whichever the vendor',
            'GPS, RPE and wellness crossed on the same slot',
            'Strength, physical tests and the medical board',
            'Automatic reminders and check-ins over WhatsApp',
            '2,000 AI calls and 3,000 WhatsApp messages a month',
          ],
        },
        {
          name: 'Pro',
          description: 'For clubs running several teams and getting their data out.',
          price: 'Custom',
          period: '',
          availability: 'On request',
          cta: 'Talk to the team',
          features: [
            'Everything in Semi-Pro, plus:',
            'An unlimited number of teams',
            'WhatsApp and AI volumes set by contract',
            'Scope and support tailored to you',
            'Upcoming: GPS connectors, public API, drill signature',
          ],
        },
      ],
      note: 'Paid tiers open for sale soon. Create your account, the trial puts you on Semi-Pro for 30 days, and we tell you when the sale opens.',
    },

    faq: {
      title: 'The six questions we get asked first.',
      body: 'What your players have to do, who decides, and how long it takes to set up.',
      items: [
        {
          question: 'Do my players have to install an app?',
          answer:
            'They reply through a link shared on the channel you already use: web, mobile, WhatsApp, email. The player app stays optional, and those who install it also get notifications.',
        },
        {
          question: 'Who keeps control of what goes out?',
          answer:
            'You approve every send. STRIVN prepares the message, the reminder and the report, then holds them for your go-ahead. The operations run while you coach the squad.',
        },
        {
          question: 'How long does it take to get started?',
          answer:
            'A few minutes. You create your team, add your players, and you can create your first events, messages and reply links in the first week.',
        },
        {
          question: 'Why does the free tier exist?',
          answer:
            'Because a coach should be able to try STRIVN on their own decision, before opening a club budget. The free tier lasts the season, then the next, without a card.',
        },
        {
          question: 'Does STRIVN fit amateur football?',
          answer:
            'STRIVN is designed for coaches who carry the session, the medical log and the logistics alone. The more hats you wear, the more hours you get back each week.',
        },
        {
          question: 'What if I already have medical staff and a fitness coach?',
          answer:
            'Everyone gets their view: the physio opens the medical log, the S&C coach reads the load, the coach keeps the session. Data entered by one serves the other two.',
        },
      ],
    },

    finalCta: {
      title: 'Put your team under one roof.',
      body: 'Create your team in minutes. The first 30 days are on Semi-Pro, without a card.',
      primaryCta: 'Create my team for free',
      secondaryCta: 'A question before you start?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20question%20before%20starting',
    },

    footer: {
      statement: 'Bring your whole team under one roof.',
      brandLine: 'STRIVN brings call-ups, attendance, medical records, load and sessions into one place, for the whole staff.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Platform', href: '/en/solutions/' },
        { label: 'Features', href: '/en/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'S&C coaches', href: '/en/sc-coaches/' },
        { label: 'Pricing', href: '/en/pricing/' },
        { label: 'FAQ', href: '/en/#faq' },
        { label: 'Support', href: '/en/support' },
        { label: 'Privacy', href: '/en/privacy' },
      ],
      apps: {
        title: 'Mobile apps',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Four tiers, 30 days of Semi-Pro when you sign up',
    },
  },

  nl: {
    meta: {
      title: 'Breng je hele team onder één dak | STRIVN',
      description:
        'Breng oproepingen, aanwezigheid, medische dossiers, trainingsbelasting en trainingen samen op één plek, gedeeld door de hele staf. Elk nieuw account start met 30 dagen Semi-Pro, zonder kaart.',
    },


    hero: {
      claim: 'Gebouwd door coaches en spelers, voor staf en teams',
      title: 'Breng je hele team',
      titleAccent: 'onder één dak.',
      lede: 'Je houdt de groep op WhatsApp, de aanwezigheid in een spreadsheet en de RPE in een notitieboek. STRIVN brengt oproepingen, aanwezigheid, medische dossiers, belasting en trainingen samen op één plek. De hele staf leest dezelfde week.',
      primaryCta: 'Gratis starten',
      secondaryCta: 'Bekijk de demo',
      reassurance: '30 dagen Semi-Pro · zonder kaart · zonder goedkeuring van de club',
      stage: {
        ariaLabel:
          'Animatie. De verspreide berichten, bestanden en notities van een coach komen samen in één STRIVN-paneel dat de staat van het team toont.',
        fragments: [
          { kind: 'mail', source: 'E-mail', text: 'Oproeping zondag: 9 antwoorden op 16' },
          { kind: 'sheet', source: 'aanwezigheid_W23_v4.xlsx', text: 'Aanwezigheid: 3 tabbladen, 2 versies' },
          { kind: 'sms', source: 'Fysio · SMS', text: 'Knie van Mendes: deze week niet sprinten' },
          { kind: 'scrap', source: 'Notitieboek', text: 'RPE van donderdag: nog in te voeren' },
          { kind: 'note', source: 'Papieren notitie', text: 'Het pressingblok voor donderdag plannen' },
          { kind: 'chat', source: 'Team · WhatsApp', text: 'Hoe laat is de wedstrijd zondag?' },
        ],
        panel: {
          header: 'Teamstatus',
          status: 'Up-to-date · gedeeld met de staf',
          rows: [
            { label: 'Communicatie', value: 'Oproeping verstuurd · 14 antwoorden', tone: 'ok' },
            { label: 'Aanwezigheid', value: '14 aanwezig · 2 onzeker', tone: 'ok' },
            { label: 'Medisch', value: 'T. Mendes · revalidatie', tone: 'watch' },
            { label: 'Belasting & RPE', value: 'ACWR 1.12 · groep stabiel', tone: 'ok' },
            { label: 'Training', value: 'Donderdag 20u · pressingblok', tone: 'info' },
            { label: 'Wedstrijd', value: 'Zondag 15u · selectie bevestigd', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Zie het in actie',
      title: 'Doe de rondleiding van twee minuten.',
      sub: 'Je ziet hoe oproepingen, aanwezigheid, medische dossiers en trainingsbelasting in één werkruimte passen die de hele staf deelt.',
      srcMp4: '/videos/overview-nl.mp4',
      poster: '/posters/overview-nl.jpg',
      duration: '2 min',
      playLabel: 'Speel het productoverzicht af',
      ariaLabel: 'STRIVN productoverzichtvideo',
    },

    reality: {
      title: 'Bundel de zes plekken waar je week leeft.',
      body: 'Op dinsdag om 22u47 herinner je de stille spelers, werk je het medisch logboek bij, voer je aanwezigheden opnieuw in en brief je de fysio. Die vier taken leven vandaag op zes verschillende plekken.',
      scattered: [
        'De WhatsApp-groep',
        'De aanwezigheidsspreadsheet',
        'De medische notities',
        'Het RPE-notitieboek',
        'De trainingsschema’s',
        'Het geheugen van de coach',
      ],
      resolve: 'Eén plek.',
    },

    communication: {
      title: 'Stuur één link, zie de antwoorden binnenlopen.',
      body: 'Elk evenement genereert zijn bericht en zijn antwoordlink, klaar om te delen. Je post die op het kanaal dat je groep al gebruikt, WhatsApp, e-mail of de app. STRIVN verzamelt de antwoorden en houdt de aanwezigheidslijst up-to-date.',
      points: [
        'Berichtsjablonen per evenementtype',
        'Antwoordlink zonder spelersaccount',
        'Aanwezigheid in realtime bijgewerkt',
        'Gerichte herinneringen voor wie niet antwoordde',
      ],
      proof: {
        messageLabel: 'Bericht verstuurd · 18u02',
        message: 'Training donderdag 20u · veld 2. Bevestig je aanwezigheid.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Antwoorden van spelers',
        replies: [
          { name: 'A. Diallo', answer: 'Aanwezig', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'Aanwezig', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Onzeker · knie', tone: 'watch' },
        ],
        tally: '14 aanwezig · 1 onzeker · bijgewerkt om 18u05',
      },
    },

    medical: {
      title: 'Open het medisch logboek voor bevoegde staf.',
      body: 'Blessures, notities van de arts, beoordelingen van de fysio en het return-to-play-protocol zitten in één dossier. Je leest de huidige fase van elke speler, van diagnose tot wedstrijdklaar, vijf fases in totaal.',
      points: [
        'Geschiedenis per speler',
        'Notities van arts en fysio op één plek',
        'Gefaseerd return-to-play-protocol',
        'Alleen-lezen zichtbaarheid voor de coach',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Hamstringblessure · graad 1',
        since: 'Sinds 28 april',
        stages: [
          { label: 'Diagnose', state: 'done' },
          { label: 'Behandeling', state: 'done' },
          { label: 'Revalidatie', state: 'active' },
          { label: 'Groepstraining', state: 'todo' },
          { label: 'Beschikbaar wedstrijd', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Arts', text: 'Rechtlijnig lopen toegestaan. Niet sprinten vóór dag 7.' },
          { author: 'A. Roux', role: 'Fysio', text: 'Goede respons op krachttraining. Gevoel van de speler verbetert.' },
        ],
        returnLabel: 'Geschatte terugkeer',
        returnValue: '10 – 12 dagen',
      },
    },

    load: {
      title: 'Lees elke maandagochtend de ACWR van de groep.',
      body: 'Spelers voeren hun RPE in vanaf hun telefoon, en STRIVN stelt de week samen. Je komt maandag binnen met wekelijkse belasting, ACWR en herstel al berekend.',
      points: [
        'RPE per training, per speler',
        'Wekelijkse belasting en monotonie',
        'ACWR per speler',
        'Notitie van de fysieke coach gedeeld met de staf',
      ],
      table: {
        title: 'Belasting & RPE',
        week: 'Week 23 · 1 – 7 juni',
        colPlayer: 'Speler',
        colMon: 'Ma',
        colWed: 'Wo',
        colFri: 'Vr',
        colAcwr: 'ACWR',
        colState: 'Status',
        pillOk: 'OK',
        pillWatch: 'In de gaten',
        pillRisk: 'Risico',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Fysieke notitie',
        tip: 'L. Moreau zit al 3 weken op rij boven 1.25. Plan een lichtere training op vrijdag.',
      },
    },

    sessions: {
      title: 'Bouw de training voordat je op het veld staat.',
      body: 'Jij legt de blokken, STRIVN geeft vorm aan de training en de AI-assistent houdt rekening met de werkelijke belasting. Het bord toont vier oefeningen over 75 minuten, van hoge pressing tot partijspel.',
      points: [
        'Tactische borden',
        'Oefeningenbibliotheek',
        'Weekplanning',
        'AI-ondersteunde trainingsopbouw',
      ],
      board: {
        title: 'Tactisch blok · hoge pressing',
        meta: 'Training · donderdag 20u',
        stamp: '4 oefeningen · 75 min',
        phases: [
          { label: 'Opwarming', detail: 'Activatie + baldribbelen · 15 min' },
          { label: 'Oefening 1', detail: 'Pressing met drie, uitgelokt op de laterale pass · 20 min' },
          { label: 'Oefening 2', detail: 'Opbouw onder druk · 20 min' },
          { label: 'Spel', detail: '8v8 partij, pressingbeperkingen · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Dek de acht andere modules van de week.',
      body: 'Eén keer ingevoerde data bedient de acht modules hieronder. Het gratis niveau draagt één team een heel seizoen, op één stafplaats.',
      items: [
        { title: 'Aanwezigheid & RSVP', text: 'Antwoorden van spelers voeden een up-to-date coachweergave, tellen inbegrepen.', href: '/nl/features/attendance/' },
        { title: 'Medisch logboek', text: 'Blessures, medische notities en return-to-play blijven zichtbaar voor bevoegde staf.', href: '/nl/features/medical/' },
        { title: 'Belasting & RPE', text: 'Belasting, ervaren inspanning en zwakke signalen sluiten aan op de werkelijke week van de groep.', href: '/nl/features/training-load/' },
        { title: 'Testen & evaluaties', text: 'Fysieke en technische testen worden door de tijd heen gevolgd om echte progressie te tonen.' },
        { title: 'Individuele programma’s', text: 'Doelen, aangepaste belastingen en specifieke oefeningen blijven gekoppeld aan elke speler.', href: '/nl/features/programs/' },
        { title: 'Trainingen & tactiek', text: 'Trainingsplannen, tactische borden en oefeningen blijven verbonden met de staat van het team.', href: '/nl/features/sessions/' },
        { title: 'Wedstrijd- & trainingsrapporten', text: 'Rapporten van de staf sluiten de week en houden speeltijd zichtbaar.', href: '/nl/features/reports/' },
        { title: 'AI-assistent', text: 'De assistent leest je rapporten en stelt de beslissing voor, die jij goedkeurt.' },
      ],
    },

    playerApp: {
      title: 'Geef elke speler zijn eigen weergave.',
      body: 'Elke speler volgt de agenda, het volgende evenement en zijn aanwezigheidsantwoorden vanuit de native app. De antwoordlink blijft open voor wie zijn browser verkiest.',
      stores: 'Beschikbaar op iOS en Android',
      cta: 'Ontdek de spelersapp',
      imageAlt: 'Schermafbeelding van de STRIVN-spelersapp: weekagenda met komende evenementen',
    },

    timeSaved: {
      title: 'Krijg je avonden terug.',
      body: 'De organisatie draait op de achtergrond terwijl jij de training voorbereidt. Deze vier taken verlaten je dinsdagavond: oproepingen, aanwezigheid, rapporten, coördinatie.',
      rows: [
        { task: 'Oproepingen & herinneringen', outcome: 'gecentraliseerd' },
        { task: 'Aanwezigheid & medisch logboek', outcome: 'op één plek' },
        { task: 'Trainingsrapporten', outcome: 'voorbereid' },
        { task: 'Coördinatie van de staf', outcome: 'zichtbaar voor iedereen' },
      ],
    },

    pricing: {
      title: 'Start gratis, stijg wanneer de club volgt.',
      body: 'Het gratis niveau draagt één team een heel seizoen, op één stafplaats. Elk nieuw account start met 30 dagen Semi-Pro, zonder kaart.',
      plans: [
        {
          name: 'Free',
          description: 'Om één team een heel seizoen te dragen, op je eigen beslissing.',
          price: '€0',
          period: 'voor altijd',
          availability: 'Nu beschikbaar',
          cta: 'Maak mijn team',
          featured: true,
          features: [
            'Eén team, onbeperkt spelers, één stafplaats',
            'Evenementen, trainingen, wedstrijden en oproepingen',
            'Aanwezigheden, spelerslijst en spelersapp',
            'Ziekenboeg, tactiek, rapporten en individuele programma’s',
            '20 oefeningen, 3 tactische borden, 3 sjablonen',
            '60 oproepen naar de AI-assistent per maand',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'Om GPS te kruisen met RPE en wellness, op een clubbudget.',
          price: 'Binnenkort',
          period: '',
          availability: 'Binnenkort te koop',
          cta: 'Vraag een demo aan',
          features: [
            'GPS-import via CSV, ongeacht de leverancier',
            'GPS, RPE en wellness gekruist op hetzelfde blok',
            'Krachttraining, fysieke testen en het medisch bord',
            'Automatische herinneringen en check-ins via WhatsApp',
            '2.000 AI-oproepen en 3.000 WhatsApp-berichten per maand',
          ],
        },
        {
          name: 'Pro',
          description: 'Voor clubs met meerdere teams die hun data eruit willen halen.',
          price: 'Op maat',
          period: '',
          availability: 'Op aanvraag',
          cta: 'Praat met het team',
          features: [
            'Alles uit Semi-Pro, plus:',
            'Onbeperkt aantal teams',
            'WhatsApp- en AI-volumes vastgelegd in het contract',
            'Omvang en begeleiding op maat',
            'Binnenkort: GPS-koppelingen, publieke API, oefeningsignatuur',
          ],
        },
      ],
      note: 'Betaalde niveaus komen binnenkort te koop. Maak je account aan, de proefperiode zet je 30 dagen op Semi-Pro, en wij verwittigen je zodra de verkoop opent.',
    },

    faq: {
      title: 'De zes vragen die we het eerst krijgen.',
      body: 'Wat je spelers moeten doen, wie beslist, en hoe lang het duurt om op te zetten.',
      items: [
        {
          question: 'Moeten mijn spelers een app installeren?',
          answer:
            'Ze antwoorden via een link die je deelt op het kanaal dat je al gebruikt: web, mobiel, WhatsApp, e-mail. De spelersapp blijft optioneel, en wie ze installeert krijgt er meldingen bij.',
        },
        {
          question: 'Wie houdt de hand op wat vertrekt?',
          answer:
            'Jij keurt elke verzending goed. STRIVN bereidt het bericht, de herinnering en het verslag voor, en houdt ze klaar voor jouw akkoord. De organisatie draait terwijl jij de groep coacht.',
        },
        {
          question: 'Hoe lang duurt het om te starten?',
          answer:
            'Enkele minuten. Je maakt je team aan, voegt je spelers toe, en je kunt in de eerste week je eerste evenementen, berichten en antwoordlinks aanmaken.',
        },
        {
          question: 'Waarom bestaat het gratis niveau?',
          answer:
            'Omdat een coach STRIVN op eigen beslissing moet kunnen uitproberen, voor er een clubbudget opengaat. Het gratis niveau houdt het seizoen vol, en het volgende, zonder kaart.',
        },
        {
          question: 'Past STRIVN bij het amateurvoetbal?',
          answer:
            'STRIVN is ontworpen voor coaches die de training, het medisch logboek en de logistiek alleen dragen. Hoe meer petten je draagt, hoe meer uren je per week terugkrijgt.',
        },
        {
          question: 'En als ik al medische staf en een fysieke coach heb?',
          answer:
            'Iedereen krijgt zijn weergave: de fysio opent het medisch logboek, de fysieke coach leest de belasting, de coach houdt de training. Data die één invoert, bedient de twee anderen.',
        },
      ],
    },

    finalCta: {
      title: 'Breng je team onder één dak.',
      body: 'Maak je team in enkele minuten aan. De eerste 30 dagen staan op Semi-Pro, zonder kaart.',
      primaryCta: 'Maak mijn team gratis aan',
      secondaryCta: 'Een vraag voor je begint?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20vraag%20voor%20je%20begint',
    },

    footer: {
      statement: 'Breng je hele team onder één dak.',
      brandLine: 'STRIVN brengt oproepingen, aanwezigheid, medische dossiers, belasting en trainingen samen op één plek, voor de hele staf.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Platform', href: '/nl/solutions/' },
        { label: 'Functies', href: '/nl/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'S&C-coaches', href: '/nl/sc-coaches/' },
        { label: 'Tarieven', href: '/nl/pricing/' },
        { label: 'FAQ', href: '/nl/#faq' },
        { label: 'Support', href: '/nl/support' },
        { label: 'Privacy', href: '/nl/privacy' },
      ],
      apps: {
        title: 'Mobiele apps',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Vier niveaus, 30 dagen Semi-Pro bij inschrijving',
    },
  },

  de: {
    meta: {
      title: 'Ihr ganzes Team unter einem Dach | STRIVN',
      description:
        'Aufstellungen, Anwesenheit, medizinische Akten, Trainingsbelastung und Trainings an einem Ort, geteilt vom ganzen Staff. Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Karte.',
    },


    hero: {
      claim: 'Von Coaches und Spielern gebaut, für Staff und Teams',
      title: 'Bringen Sie Ihr ganzes Team',
      titleAccent: 'unter ein Dach.',
      lede: 'Sie halten die Gruppe auf WhatsApp, die Anwesenheit in einer Tabelle und die RPE im Notizbuch. STRIVN bringt Aufstellungen, Anwesenheit, medizinische Akten, Belastung und Trainings an einen Ort. Der ganze Staff liest dieselbe Woche.',
      primaryCta: 'Kostenlos starten',
      secondaryCta: 'Demo ansehen',
      reassurance: '30 Tage Semi-Pro · ohne Karte · ohne Freigabe des Vereins',
      stage: {
        ariaLabel:
          'Animation. Die verstreuten Nachrichten, Dateien und Notizen eines Coaches laufen in einem STRIVN-Panel zusammen, das den Zustand des Teams zeigt.',
        fragments: [
          { kind: 'mail', source: 'E-Mail', text: 'Aufstellung Sonntag: 9 von 16 Antworten' },
          { kind: 'sheet', source: 'anwesenheit_W23_v4.xlsx', text: 'Anwesenheit: 3 Tabs, 2 Versionen' },
          { kind: 'sms', source: 'Physio · SMS', text: 'Mendes’ Knie: diese Woche kein Sprinten' },
          { kind: 'scrap', source: 'Notizbuch', text: 'RPE von Donnerstag: noch einzutragen' },
          { kind: 'note', source: 'Zettel', text: 'Pressing-Block für Donnerstag planen' },
          { kind: 'chat', source: 'Team · WhatsApp', text: 'Wann ist am Sonntag das Spiel?' },
        ],
        panel: {
          header: 'Teamzustand',
          status: 'Aktuell · mit dem Staff geteilt',
          rows: [
            { label: 'Kommunikation', value: 'Aufstellung verschickt · 14 Antworten', tone: 'ok' },
            { label: 'Anwesenheit', value: '14 dabei · 2 unsicher', tone: 'ok' },
            { label: 'Medizin', value: 'T. Mendes · Rehabilitation', tone: 'watch' },
            { label: 'Belastung & RPE', value: 'ACWR 1.12 · Kader stabil', tone: 'ok' },
            { label: 'Training', value: 'Donnerstag 20 Uhr · Pressing-Block', tone: 'info' },
            { label: 'Spiel', value: 'Sonntag 15 Uhr · Kader bestätigt', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'In Aktion sehen',
      title: 'Sehen Sie das Produkt in zwei Minuten.',
      sub: 'Sie sehen, wie Aufstellungen, Anwesenheit, medizinische Akten und Trainingsbelastung in einen Arbeitsbereich passen, den der ganze Staff teilt.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Produktüberblick abspielen',
      ariaLabel: 'STRIVN Produktüberblick-Video',
    },

    reality: {
      title: 'Bündeln Sie die sechs Orte Ihrer Woche.',
      body: 'Am Dienstag um 22:47 Uhr erinnern Sie die stillen Spieler, pflegen das medizinische Logbuch, tragen Anwesenheiten nach und briefen den Physio. Diese vier Aufgaben leben heute an sechs verschiedenen Orten.',
      scattered: [
        'Die WhatsApp-Gruppe',
        'Die Anwesenheitstabelle',
        'Die medizinischen Notizen',
        'Das RPE-Notizbuch',
        'Die Trainingsdiagramme',
        'Das Gedächtnis des Coaches',
      ],
      resolve: 'Ein Ort.',
    },

    communication: {
      title: 'Einen Link schicken, die Antworten einlaufen sehen.',
      body: 'Jeder Termin erzeugt seine Nachricht und seinen Antwortlink, fertig zum Teilen. Sie posten ihn auf dem Kanal, den Ihre Gruppe ohnehin nutzt, WhatsApp, E-Mail oder die App. STRIVN sammelt die Antworten und hält die Anwesenheitsliste aktuell.',
      points: [
        'Nachrichtenvorlagen je Terminart',
        'Antwortlink ohne Spieler-Konto',
        'Anwesenheit in Echtzeit aktualisiert',
        'Gezielte Erinnerungen für die, die nicht geantwortet haben',
      ],
      proof: {
        messageLabel: 'Nachricht verschickt · 18:02 Uhr',
        message: 'Training Donnerstag 20 Uhr · Platz 2. Bestätigen Sie Ihre Anwesenheit.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Antworten der Spieler',
        replies: [
          { name: 'A. Diallo', answer: 'Dabei', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'Dabei', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Unsicher · Knie', tone: 'watch' },
        ],
        tally: '14 dabei · 1 unsicher · aktualisiert um 18:05 Uhr',
      },
    },

    medical: {
      title: 'Öffnen Sie das Logbuch für befugten Staff.',
      body: 'Verletzungen, Notizen des Arztes, Einschätzungen des Physios und das Return-to-Play-Protokoll stehen in einer Akte. Sie lesen die aktuelle Stufe jedes Spielers, von der Diagnose bis zur Spielbereitschaft, fünf Stufen insgesamt.',
      points: [
        'Verlauf je Spieler',
        'Notizen von Arzt und Physio an einem Ort',
        'Return-to-Play-Protokoll in Stufen',
        'Nur-Lese-Einblick für den Coach',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Oberschenkelzerrung · Grad 1',
        since: 'Seit 28. April',
        stages: [
          { label: 'Diagnose', state: 'done' },
          { label: 'Behandlung', state: 'done' },
          { label: 'Rehabilitation', state: 'active' },
          { label: 'Gruppentraining', state: 'todo' },
          { label: 'Spielbereit', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Arzt', text: 'Geradeauslaufen freigegeben. Kein Sprinten vor Tag 7.' },
          { author: 'A. Roux', role: 'Physio', text: 'Gute Reaktion auf Kräftigung. Empfinden des Spielers bessert sich.' },
        ],
        returnLabel: 'Voraussichtliche Rückkehr',
        returnValue: '10 – 12 Tage',
      },
    },

    load: {
      title: 'Lesen Sie den ACWR des Kaders montags.',
      body: 'Die Spieler tragen ihre RPE vom Handy aus ein, und STRIVN setzt die Woche zusammen. Sie kommen am Montag rein, Wochenbelastung, ACWR und Erholung sind bereits gerechnet.',
      points: [
        'RPE je Training, je Spieler',
        'Wöchentliche Belastung und Monotonie',
        'ACWR je Spieler',
        'Notiz des Athletiktrainers mit dem Staff geteilt',
      ],
      table: {
        title: 'Belastung & RPE',
        week: 'Woche 23 · 1. – 7. Juni',
        colPlayer: 'Spieler',
        colMon: 'Mo',
        colWed: 'Mi',
        colFri: 'Fr',
        colAcwr: 'ACWR',
        colState: 'Status',
        pillOk: 'OK',
        pillWatch: 'Beobachten',
        pillRisk: 'Risiko',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Athletik-Notiz',
        tip: 'L. Moreau liegt seit 3 Wochen in Folge über 1.25. Planen Sie am Freitag ein leichteres Training.',
      },
    },

    sessions: {
      title: 'Das Training bauen, bevor Sie am Platz sind.',
      body: 'Sie legen die Blöcke, STRIVN bringt das Training in Form und der KI-Assistent berücksichtigt die tatsächliche Belastung. Die Tafel zeigt vier Übungen über 75 Minuten, vom hohen Pressing bis zum Spiel.',
      points: [
        'Taktiktafeln',
        'Übungsbibliothek',
        'Wochenplanung',
        'KI-gestützte Trainingserstellung',
      ],
      board: {
        title: 'Taktikblock · hohes Pressing',
        meta: 'Training · Donnerstag 20 Uhr',
        stamp: '4 Übungen · 75 min',
        phases: [
          { label: 'Aufwärmen', detail: 'Aktivierung + Ballführung · 15 min' },
          { label: 'Übung 1', detail: 'Pressing zu dritt, ausgelöst auf den Querpass · 20 min' },
          { label: 'Übung 2', detail: 'Spielaufbau unter Druck · 20 min' },
          { label: 'Spiel', detail: '8-gegen-8, Pressing-Vorgaben · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Die acht weiteren Module der Woche abdecken.',
      body: 'Einmal erfasste Daten bedienen die acht Module unten. Die kostenlose Stufe trägt ein Team eine ganze Saison, auf einem Staff-Platz.',
      items: [
        { title: 'Anwesenheit & RSVP', text: 'Antworten der Spieler speisen eine aktuelle Coach-Ansicht, Zählung inbegriffen.', href: '/de/features/attendance/' },
        { title: 'Medizinisches Logbuch', text: 'Verletzungen, medizinische Notizen und Return-to-Play bleiben für befugten Staff sichtbar.', href: '/de/features/medical/' },
        { title: 'Belastung & RPE', text: 'Belastung, empfundene Anstrengung und schwache Signale verbinden sich mit der realen Woche des Kaders.', href: '/de/features/training-load/' },
        { title: 'Tests & Bewertungen', text: 'Physische und technische Tests werden über die Zeit verfolgt, um echten Fortschritt zu zeigen.' },
        { title: 'Individuelle Programme', text: 'Ziele, angepasste Belastungen und spezifische Übungen bleiben mit jedem Spieler verknüpft.', href: '/de/features/programs/' },
        { title: 'Trainings & Taktik', text: 'Trainingspläne, Taktiktafeln und Übungen bleiben mit dem Zustand des Teams verbunden.', href: '/de/features/sessions/' },
        { title: 'Spiel- & Trainingsberichte', text: 'Berichte des Staffs schließen die Woche und halten die Spielzeit sichtbar.', href: '/de/features/reports/' },
        { title: 'KI-Assistent', text: 'Der Assistent liest Ihre Berichte und schlägt die Entscheidung vor, die Sie freigeben.' },
      ],
    },

    playerApp: {
      title: 'Geben Sie jedem Spieler seine eigene Ansicht.',
      body: 'Jeder Spieler verfolgt Kalender, nächsten Termin und seine Anwesenheitsantworten über die native App. Der Antwortlink bleibt offen für alle, die ihren Browser vorziehen.',
      stores: 'Verfügbar für iOS und Android',
      cta: 'Die Spieler-App entdecken',
      imageAlt: 'Screenshot der STRIVN-Spieler-App: Wochenkalender mit anstehenden Terminen',
    },

    timeSaved: {
      title: 'Holen Sie sich Ihre Abende zurück.',
      body: 'Die Organisation läuft im Hintergrund, während Sie das Training vorbereiten. Diese vier Aufgaben verlassen Ihren Dienstagabend: Aufstellungen, Anwesenheit, Berichte, Koordination.',
      rows: [
        { task: 'Aufstellungen & Erinnerungen', outcome: 'zentralisiert' },
        { task: 'Anwesenheit & medizinisches Logbuch', outcome: 'an einem Ort' },
        { task: 'Trainingsberichte', outcome: 'vorbereitet' },
        { task: 'Koordination des Staffs', outcome: 'für alle sichtbar' },
      ],
    },

    pricing: {
      title: 'Kostenlos starten, aufsteigen, wenn der Verein mitzieht.',
      body: 'Die kostenlose Stufe trägt ein Team eine ganze Saison, auf einem Staff-Platz. Jedes neue Konto startet mit 30 Tagen Semi-Pro, ohne Karte.',
      plans: [
        {
          name: 'Free',
          description: 'Um ein Team eine ganze Saison zu tragen, auf Ihre eigene Entscheidung.',
          price: '0 €',
          period: 'für immer',
          availability: 'Jetzt verfügbar',
          cta: 'Mein Team erstellen',
          featured: true,
          features: [
            'Ein Team, unbegrenzt Spieler, ein Staff-Platz',
            'Termine, Trainings, Spiele und Aufgebote',
            'Anwesenheiten, Kader und Spieler-App',
            'Krankenzimmer, Taktik, Berichte und Einzelprogramme',
            '20 Übungen, 3 Taktiktafeln, 3 Vorlagen',
            '60 Aufrufe des KI-Assistenten pro Monat',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'Um GPS mit RPE und Wellness zu verschränken, auf Vereinsbudget.',
          price: 'Bald',
          period: '',
          availability: 'Bald im Verkauf',
          cta: 'Demo anfragen',
          features: [
            'GPS-Import per CSV, unabhängig vom Anbieter',
            'GPS, RPE und Wellness verschränkt auf demselben Block',
            'Kraft, Leistungstests und medizinisches Board',
            'Automatische Erinnerungen und Check-ins über WhatsApp',
            '2.000 KI-Aufrufe und 3.000 WhatsApp-Nachrichten pro Monat',
          ],
        },
        {
          name: 'Pro',
          description: 'Für Vereine mit mehreren Teams, die ihre Daten herausbekommen wollen.',
          price: 'Individuell',
          period: '',
          availability: 'Auf Anfrage',
          cta: 'Mit dem Team sprechen',
          features: [
            'Alles aus Semi-Pro, plus:',
            'Unbegrenzte Anzahl an Teams',
            'WhatsApp- und KI-Volumen im Vertrag festgelegt',
            'Umfang und Begleitung nach Maß',
            'In Vorbereitung: GPS-Anbindungen, öffentliche API, Übungssignatur',
          ],
        },
      ],
      note: 'Die bezahlten Stufen gehen demnächst in den Verkauf. Legen Sie Ihr Konto an, die Testphase setzt Sie 30 Tage auf Semi-Pro, und wir sagen Bescheid, sobald der Verkauf öffnet.',
    },

    faq: {
      title: 'Die sechs Fragen, die wir zuerst hören.',
      body: 'Was Ihre Spieler tun müssen, wer entscheidet und wie lange die Einrichtung dauert.',
      items: [
        {
          question: 'Müssen meine Spieler eine App installieren?',
          answer:
            'Sie antworten über einen Link, den Sie auf dem Kanal teilen, den Sie ohnehin nutzen: Web, Mobil, WhatsApp, E-Mail. Die Spieler-App bleibt freiwillig, und wer sie installiert, bekommt zusätzlich Benachrichtigungen.',
        },
        {
          question: 'Wer behält die Hand über die Sendungen?',
          answer:
            'Sie geben jede Sendung frei. STRIVN bereitet die Nachricht, die Erinnerung und den Bericht vor und hält sie für Ihr Zeichen bereit. Die Organisation läuft, während Sie den Kader coachen.',
        },
        {
          question: 'Wie lange dauert der Start?',
          answer:
            'Ein paar Minuten. Sie erstellen Ihr Team, fügen Ihre Spieler hinzu und können in der ersten Woche Ihre ersten Termine, Nachrichten und Antwortlinks anlegen.',
        },
        {
          question: 'Warum gibt es die kostenlose Stufe?',
          answer:
            'Weil ein Coach STRIVN auf eigene Entscheidung ausprobieren können soll, bevor ein Vereinsbudget aufgeht. Die kostenlose Stufe trägt die Saison, dann die nächste, ohne Karte.',
        },
        {
          question: 'Passt STRIVN zum Amateurfußball?',
          answer:
            'STRIVN ist für Coaches gemacht, die Training, medizinisches Logbuch und Logistik allein stemmen. Je mehr Hüte Sie tragen, desto mehr Stunden bekommen Sie pro Woche zurück.',
        },
        {
          question: 'Und wenn ich schon medizinischen Staff und einen Athletiktrainer habe?',
          answer:
            'Jeder bekommt seine Ansicht: der Physio öffnet das medizinische Logbuch, der Athletiktrainer liest die Belastung, der Coach behält das Training. Was einer erfasst, bedient die beiden anderen.',
        },
      ],
    },

    finalCta: {
      title: 'Bringen Sie Ihr Team unter ein Dach.',
      body: 'Erstellen Sie Ihr Team in wenigen Minuten. Die ersten 30 Tage laufen auf Semi-Pro, ohne Karte.',
      primaryCta: 'Mein Team kostenlos erstellen',
      secondaryCta: 'Noch eine Frage vor dem Start?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20Frage%20vor%20dem%20Start',
    },

    footer: {
      statement: 'Bringen Sie Ihr Team unter ein Dach.',
      brandLine: 'STRIVN bringt Aufstellungen, Anwesenheit, medizinische Akten, Belastung und Trainings an einen Ort, für den ganzen Staff.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plattform', href: '/de/solutions/' },
        { label: 'Funktionen', href: '/de/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'S&C-Coaches', href: '/de/sc-coaches/' },
        { label: 'Preise', href: '/de/pricing/' },
        { label: 'FAQ', href: '/de/#faq' },
        { label: 'Support', href: '/de/support' },
        { label: 'Datenschutz', href: '/de/privacy' },
      ],
      apps: {
        title: 'Mobile Apps',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Vier Stufen, 30 Tage Semi-Pro bei der Anmeldung',
    },
  },

  pt: {
    meta: {
      title: 'Reúna a sua equipa debaixo do mesmo teto | STRIVN',
      description:
        'Reúna convocatórias, presenças, processo médico, carga de treino e sessões no mesmo sítio, partilhados por todo o staff. Cada nova conta começa com 30 dias de Semi-Pro, sem cartão.',
    },


    hero: {
      claim: 'Criado por treinadores e jogadores, para o staff e as equipas',
      title: 'Reúna a sua equipa toda',
      titleAccent: 'debaixo do mesmo teto.',
      lede: 'Tem o grupo no WhatsApp, as presenças numa folha de cálculo e o RPE num caderno. STRIVN reúne convocatórias, presenças, processo médico, carga e sessões no mesmo sítio. Todo o staff lê a mesma semana.',
      primaryCta: 'Começar gratuitamente',
      secondaryCta: 'Ver a demo',
      reassurance: '30 dias de Semi-Pro · sem cartão · sem aprovação do clube',
      stage: {
        ariaLabel:
          'Animação. As mensagens, ficheiros e notas dispersas de um treinador convergem num painel STRIVN que mostra o estado da equipa.',
        fragments: [
          { kind: 'mail', source: 'Email', text: 'Convocatória de domingo: 9 respostas em 16' },
          { kind: 'sheet', source: 'presencas_S23_v4.xlsx', text: 'Presenças: 3 separadores, 2 versões' },
          { kind: 'sms', source: 'Fisioterapeuta · SMS', text: 'Joelho do Mendes: sem sprints esta semana' },
          { kind: 'scrap', source: 'Caderno', text: 'RPE de quinta-feira: ainda por introduzir' },
          { kind: 'note', source: 'Nota em papel', text: 'Planear o bloco de pressão para quinta-feira' },
          { kind: 'chat', source: 'Equipa · WhatsApp', text: 'A que horas é o jogo de domingo?' },
        ],
        panel: {
          header: 'Estado da equipa',
          status: 'Atualizado · partilhado com o staff',
          rows: [
            { label: 'Comunicação', value: 'Convocatória enviada · 14 respostas', tone: 'ok' },
            { label: 'Presenças', value: '14 presentes · 2 incertos', tone: 'ok' },
            { label: 'Médico', value: 'T. Mendes · reatletização', tone: 'watch' },
            { label: 'Carga e RPE', value: 'ACWR 1.12 · plantel estável', tone: 'ok' },
            { label: 'Sessão', value: 'Quinta-feira 20h · bloco de pressão', tone: 'info' },
            { label: 'Jogo', value: 'Domingo 15h · plantel confirmado', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Ver em ação',
      title: 'Faça a visita ao produto em dois minutos.',
      sub: 'Vê como convocatórias, presenças, processo médico e carga de treino cabem num só espaço partilhado por todo o staff.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Reproduzir a apresentação do produto',
      ariaLabel: 'Vídeo de apresentação do produto STRIVN',
    },

    reality: {
      title: 'Junte os seis sítios onde vive a sua semana.',
      body: 'Terça-feira, 22h47, e volta a lembrar os jogadores calados, a atualizar o registo médico, a reintroduzir presenças e a informar o fisioterapeuta. Estas quatro tarefas vivem hoje em seis sítios diferentes.',
      scattered: [
        'O grupo de WhatsApp',
        'A folha de presenças',
        'As notas médicas',
        'O caderno de RPE',
        'Os esquemas da sessão',
        'A memória do treinador',
      ],
      resolve: 'Um só sítio.',
    },

    communication: {
      title: 'Envie um link e veja as respostas chegar.',
      body: 'Cada evento gera a sua mensagem e o seu link de resposta, pronto a partilhar. Publica-o no canal que o grupo já usa, WhatsApp, email ou a aplicação. STRIVN recolhe as respostas e mantém a folha de presenças atualizada.',
      points: [
        'Modelos de mensagem por tipo de evento',
        'Link de resposta sem conta de jogador',
        'Presenças atualizadas em tempo real',
        'Lembretes dirigidos a quem não respondeu',
      ],
      proof: {
        messageLabel: 'Mensagem enviada · 18h02',
        message: 'Treino quinta-feira 20h · campo 2. Confirme a sua presença.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Respostas dos jogadores',
        replies: [
          { name: 'A. Diallo', answer: 'Presente', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'Presente', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Incerto · joelho', tone: 'watch' },
        ],
        tally: '14 presentes · 1 incerto · atualizado às 18h05',
      },
    },

    medical: {
      title: 'Abra o registo médico ao staff autorizado.',
      body: 'Lesões, notas do médico, avaliações do fisioterapeuta e o protocolo de regresso ficam numa mesma ficha. Lê a etapa atual de cada jogador, do diagnóstico à disponibilidade para jogo, cinco etapas ao todo.',
      points: [
        'Histórico por jogador',
        'Notas do médico e do fisioterapeuta no mesmo sítio',
        'Protocolo de regresso à competição por etapas',
        'Visibilidade do treinador apenas para leitura',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Lesão nos isquiotibiais · grau 1',
        since: 'Desde 28 de abril',
        stages: [
          { label: 'Diagnóstico', state: 'done' },
          { label: 'Tratamento', state: 'done' },
          { label: 'Reatletização', state: 'active' },
          { label: 'Treino com o grupo', state: 'todo' },
          { label: 'Disponível para jogo', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Médico', text: 'Corrida em linha reta autorizada. Sem sprints antes do dia 7.' },
          { author: 'A. Roux', role: 'Fisioterapeuta', text: 'Boa resposta ao trabalho de força. O jogador relata melhorias nas sensações.' },
        ],
        returnLabel: 'Regresso estimado',
        returnValue: '10 – 12 dias',
      },
    },

    load: {
      title: 'Leia o ACWR do plantel todas as segundas.',
      body: 'Os jogadores introduzem o RPE a partir do telemóvel, e STRIVN monta a semana. Chega à segunda-feira com a carga semanal, o ACWR e a recuperação já calculados.',
      points: [
        'RPE por sessão e por jogador',
        'Carga semanal e monotonia',
        'ACWR por jogador',
        'Nota do preparador físico partilhada com o staff',
      ],
      table: {
        title: 'Carga e RPE',
        week: 'Semana 23 · 1 – 7 de junho',
        colPlayer: 'Jogador',
        colMon: 'Seg',
        colWed: 'Qua',
        colFri: 'Sex',
        colAcwr: 'ACWR',
        colState: 'Estado',
        pillOk: 'OK',
        pillWatch: 'Atenção',
        pillRisk: 'Risco',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Nota de preparação física',
        tip: 'L. Moreau está acima de 1.25 há 3 semanas seguidas. Planeie uma sessão mais leve na sexta-feira.',
      },
    },

    sessions: {
      title: 'Monte a sessão antes de chegar ao campo.',
      body: 'Coloca os blocos, STRIVN dá forma à sessão e o assistente de IA tem em conta a carga real. O quadro mostra quatro exercícios em 75 minutos, da pressão alta ao jogo.',
      points: [
        'Quadros táticos',
        'Biblioteca de exercícios',
        'Planeamento da semana',
        'Criação de sessões assistida por IA',
      ],
      board: {
        title: 'Bloco tático · pressão alta',
        meta: 'Sessão · quinta-feira 20h',
        stamp: '4 exercícios · 75 min',
        phases: [
          { label: 'Aquecimento', detail: 'Ativação + condução de bola · 15 min' },
          { label: 'Exercício 1', detail: 'Pressão a três, acionada no passe lateral · 20 min' },
          { label: 'Exercício 2', detail: 'Construção sob pressão · 20 min' },
          { label: 'Jogo', detail: '8x8 com oposição, condicionantes de pressão · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Cubra os outros oito módulos da semana.',
      body: 'Um dado introduzido uma vez serve os oito módulos abaixo. O nível gratuito aguenta uma equipa uma época inteira, com um lugar de staff.',
      items: [
        { title: 'Presenças e confirmações', text: 'As respostas dos jogadores alimentam uma visão atualizada para o treinador, contagem incluída.', href: '/pt/features/attendance/' },
        { title: 'Registo médico', text: 'Lesões, notas médicas e regresso à competição ficam visíveis para o staff autorizado.', href: '/pt/features/medical/' },
        { title: 'Carga e RPE', text: 'Carga, esforço percebido e sinais fracos ligam-se à semana real do plantel.', href: '/pt/features/training-load/' },
        { title: 'Testes e avaliações', text: 'Testes físicos e técnicos são acompanhados ao longo do tempo para mostrar a progressão real.' },
        { title: 'Programas individuais', text: 'Objetivos, cargas adaptadas e exercícios específicos ficam ligados a cada jogador.', href: '/pt/features/programs/' },
        { title: 'Sessões e tática', text: 'Planos de sessão, quadros táticos e exercícios ficam ligados ao estado da equipa.', href: '/pt/features/sessions/' },
        { title: 'Relatórios de jogo e sessão', text: 'Os relatórios do staff fecham a semana e mantêm o tempo de jogo visível.', href: '/pt/features/reports/' },
        { title: 'Assistente de IA', text: 'O assistente lê os seus relatórios e propõe a decisão, que o treinador aprova.' },
      ],
    },

    playerApp: {
      title: 'Dê a cada jogador a sua própria vista.',
      body: 'Cada jogador acompanha a agenda, o próximo evento e as suas respostas de presença na aplicação nativa. O link de resposta fica aberto a quem prefere o navegador.',
      stores: 'Disponível para iOS e Android',
      cta: 'Descobrir a app do jogador',
      imageAlt: 'Captura de ecrã da app STRIVN Player: agenda semanal com os próximos eventos',
    },

    timeSaved: {
      title: 'Recupere os seus serões.',
      body: 'A operação corre em segundo plano enquanto prepara a sessão. Estas quatro tarefas saem do seu serão de terça: convocatórias, presenças, relatórios, coordenação.',
      rows: [
        { task: 'Convocatórias e lembretes', outcome: 'centralizados' },
        { task: 'Presenças e registo médico', outcome: 'no mesmo sítio' },
        { task: 'Relatórios de sessão', outcome: 'preparados' },
        { task: 'Coordenação do staff', outcome: 'visível para todos' },
      ],
    },

    pricing: {
      title: 'Comece grátis e suba quando o clube acompanhar.',
      body: 'O nível gratuito aguenta uma equipa uma época inteira, com um lugar de staff. Cada nova conta começa com 30 dias de Semi-Pro, sem cartão.',
      plans: [
        {
          name: 'Free',
          description: 'Para aguentar uma equipa uma época inteira, por decisão sua.',
          price: '0 €',
          period: 'para sempre',
          availability: 'Disponível já',
          cta: 'Criar a minha equipa',
          featured: true,
          features: [
            'Uma equipa, jogadores sem limite, um lugar de staff',
            'Eventos, sessões, jogos e convocatórias',
            'Presenças, plantel e app do jogador',
            'Enfermaria, tática, relatórios e programas individuais',
            '20 exercícios, 3 quadros táticos, 3 modelos',
            '60 chamadas ao assistente de IA por mês',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'Para cruzar o GPS com o RPE e o wellness, num orçamento de clube.',
          price: 'Em breve',
          period: '',
          availability: 'Brevemente à venda',
          cta: 'Pedir uma demonstração',
          features: [
            'Importação GPS por CSV, seja qual for o fornecedor',
            'GPS, RPE e wellness cruzados no mesmo bloco',
            'Musculação, testes físicos e quadro médico',
            'Lembretes e check-ins automáticos por WhatsApp',
            '2 000 chamadas de IA e 3 000 mensagens WhatsApp por mês',
          ],
        },
        {
          name: 'Pro',
          description: 'Para clubes com várias equipas que precisam de fazer sair os dados.',
          price: 'Sob consulta',
          period: '',
          availability: 'Sob pedido',
          cta: 'Falar com a equipa',
          features: [
            'Tudo o do plano Semi-Pro, mais:',
            'Número de equipas ilimitado',
            'Volumes de WhatsApp e IA definidos em contrato',
            'Âmbito e acompanhamento à medida',
            'Em preparação: ligações GPS, API pública, assinatura de exercício',
          ],
        },
      ],
      note: 'Os níveis pagos abrem à venda em breve. Crie a sua conta, o período de teste coloca-o em Semi-Pro durante 30 dias, e avisamos quando a venda abrir.',
    },

    faq: {
      title: 'As seis perguntas que nos fazem primeiro.',
      body: 'O que os seus jogadores têm de fazer, quem decide e quanto tempo demora a preparar.',
      items: [
        {
          question: 'Os meus jogadores têm de instalar uma aplicação?',
          answer:
            'Respondem por um link partilhado no canal que já usa: web, telemóvel, WhatsApp, email. A app do jogador continua opcional, e quem a instala recebe ainda as notificações.',
        },
        {
          question: 'Quem manda no que sai?',
          answer:
            'Aprova cada envio. STRIVN prepara a mensagem, o lembrete e o relatório, e deixa-os à espera do seu gesto. A operação corre enquanto treina o plantel.',
        },
        {
          question: 'Quanto tempo demora a começar?',
          answer:
            'Alguns minutos. Cria a sua equipa, adiciona os jogadores e já pode criar os primeiros eventos, mensagens e links de resposta na primeira semana.',
        },
        {
          question: 'Porque existe o nível gratuito?',
          answer:
            'Porque um treinador deve poder experimentar STRIVN por decisão própria, antes de abrir um orçamento de clube. O gratuito aguenta a época, e a seguinte, sem cartão.',
        },
        {
          question: 'STRIVN serve para o futebol amador?',
          answer:
            'STRIVN foi pensado para treinadores que carregam sozinhos a sessão, o registo médico e a logística. Quantos mais papéis acumula, mais horas recupera por semana.',
        },
        {
          question: 'E se já tiver staff médico e preparador físico?',
          answer:
            'Cada um tem a sua vista: o fisioterapeuta abre o registo médico, o preparador físico lê a carga, o treinador fica com a sessão. O que um introduz serve os outros dois.',
        },
      ],
    },

    finalCta: {
      title: 'Ponha a sua equipa debaixo do mesmo teto.',
      body: 'Crie a sua equipa em poucos minutos. Os primeiros 30 dias são em Semi-Pro, sem cartão.',
      primaryCta: 'Criar a minha equipa gratuitamente',
      secondaryCta: 'Alguma dúvida antes de começar?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20questao%20antes%20de%20comecar',
    },

    footer: {
      statement: 'Reúna a sua equipa debaixo do mesmo teto.',
      brandLine: 'STRIVN reúne convocatórias, presenças, processo médico, carga e sessões no mesmo sítio, para todo o staff.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plataforma', href: '/pt/solutions/' },
        { label: 'Funcionalidades', href: '/pt/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
        { label: 'Preços', href: '/pt/pricing/' },
        { label: 'FAQ', href: '/pt/#faq' },
        { label: 'Apoio', href: '/pt/support' },
        { label: 'Privacidade', href: '/pt/privacy' },
      ],
      apps: {
        title: 'Aplicações móveis',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Quatro níveis, 30 dias de Semi-Pro na inscrição',
    },
  },

  es: {
    meta: {
      title: 'Reúne todo tu equipo bajo un mismo techo | STRIVN',
      description:
        'Reúne convocatorias, asistencias, historial médico, carga de entrenamiento y sesiones en un mismo sitio, compartidos por todo el cuerpo técnico. Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta.',
    },


    hero: {
      claim: 'Creado por entrenadores y jugadores, para cuerpos técnicos y equipos',
      title: 'Reúne todo tu equipo',
      titleAccent: 'bajo un mismo techo.',
      lede: 'Llevas el grupo en WhatsApp, las asistencias en una hoja de cálculo y el RPE en una libreta. STRIVN reúne convocatorias, asistencias, historial médico, carga y sesiones en un mismo sitio. Todo el cuerpo técnico lee la misma semana.',
      primaryCta: 'Empezar gratis',
      secondaryCta: 'Ver la demo',
      reassurance: '30 días de Semi-Pro · sin tarjeta · sin aprobación del club',
      stage: {
        ariaLabel:
          'Animación. Los mensajes, archivos y notas dispersos de un entrenador convergen en un panel STRIVN que muestra el estado del equipo.',
        fragments: [
          { kind: 'mail', source: 'Email', text: 'Convocatoria del domingo: 9 respuestas de 16' },
          { kind: 'sheet', source: 'asistencias_S23_v4.xlsx', text: 'Asistencias: 3 pestañas, 2 versiones' },
          { kind: 'sms', source: 'Fisioterapeuta · SMS', text: 'Rodilla de Mendes: nada de sprints esta semana' },
          { kind: 'scrap', source: 'Libreta', text: 'RPE del jueves: aún por introducir' },
          { kind: 'note', source: 'Nota en papel', text: 'Preparar el bloque de presión para el jueves' },
          { kind: 'chat', source: 'Equipo · WhatsApp', text: '¿A qué hora es el partido del domingo?' },
        ],
        panel: {
          header: 'Estado del equipo',
          status: 'Al día · compartido con el cuerpo técnico',
          rows: [
            { label: 'Comunicación', value: 'Convocatoria enviada · 14 respuestas', tone: 'ok' },
            { label: 'Asistencias', value: '14 confirmados · 2 dudas', tone: 'ok' },
            { label: 'Médico', value: 'T. Mendes · readaptación', tone: 'watch' },
            { label: 'Carga y RPE', value: 'ACWR 1.12 · plantilla estable', tone: 'ok' },
            { label: 'Sesión', value: 'Jueves 20:00 · bloque de presión', tone: 'info' },
            { label: 'Partido', value: 'Domingo 15:00 · convocatoria cerrada', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Verlo en acción',
      title: 'Haz el recorrido del producto en dos minutos.',
      sub: 'Ves cómo convocatorias, asistencias, historial médico y carga de entrenamiento caben en un espacio que comparte todo el cuerpo técnico.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Reproducir la presentación del producto',
      ariaLabel: 'Vídeo de presentación del producto STRIVN',
    },

    reality: {
      title: 'Junta los seis sitios donde vive tu semana.',
      body: 'Martes, 22:47, y vuelves a avisar a los jugadores callados, actualizar el parte médico, meter las asistencias e informar al fisio. Estas cuatro tareas viven hoy en seis sitios distintos.',
      scattered: [
        'El grupo de WhatsApp',
        'La hoja de asistencias',
        'Las notas médicas',
        'La libreta de RPE',
        'Los esquemas de la sesión',
        'La memoria del entrenador',
      ],
      resolve: 'Un solo sitio.',
    },

    communication: {
      title: 'Manda un enlace y mira llegar las respuestas.',
      body: 'Cada evento genera su mensaje y su enlace de respuesta, listo para compartir. Lo publicas en el canal que tu grupo ya usa, WhatsApp, email o la app. STRIVN recoge las respuestas y mantiene la lista de asistencias al día.',
      points: [
        'Plantillas de mensaje por tipo de evento',
        'Enlace de respuesta sin cuenta de jugador',
        'Asistencias actualizadas en tiempo real',
        'Recordatorios dirigidos a quien no responde',
      ],
      proof: {
        messageLabel: 'Mensaje enviado · 18:02',
        message: 'Entrenamiento jueves 20:00 · campo 2. Confirma tu asistencia.',
        link: 'strivn.net/rsvp/abc123',
        repliesLabel: 'Respuestas de los jugadores',
        replies: [
          { name: 'A. Diallo', answer: 'Voy', tone: 'ok' },
          { name: 'M. Benyahia', answer: 'Voy', tone: 'ok' },
          { name: 'T. Mendes', answer: 'Duda · rodilla', tone: 'watch' },
        ],
        tally: '14 confirmados · 1 duda · actualizado a las 18:05',
      },
    },

    medical: {
      title: 'Abre el parte médico al personal autorizado.',
      body: 'Lesiones, notas del médico, valoraciones del fisio y el protocolo de vuelta caben en una misma ficha. Lees la etapa actual de cada jugador, del diagnóstico a la disponibilidad, cinco etapas en total.',
      points: [
        'Historial por jugador',
        'Notas del médico y del fisio en un mismo sitio',
        'Protocolo de vuelta a la competición por etapas',
        'Visibilidad del entrenador en solo lectura',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Lesión de isquiotibiales · grado 1',
        since: 'Desde el 28 de abril',
        stages: [
          { label: 'Diagnóstico', state: 'done' },
          { label: 'Tratamiento', state: 'done' },
          { label: 'Readaptación', state: 'active' },
          { label: 'Entrenamiento con el grupo', state: 'todo' },
          { label: 'Disponible para el partido', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Médico', text: 'Carrera en línea recta autorizada. Nada de sprints antes del día 7.' },
          { author: 'A. Roux', role: 'Fisioterapeuta', text: 'Buena respuesta al trabajo de fuerza. El jugador nota mejores sensaciones.' },
        ],
        returnLabel: 'Vuelta estimada',
        returnValue: '10 – 12 días',
      },
    },

    load: {
      title: 'Lee el ACWR de la plantilla cada lunes.',
      body: 'Los jugadores meten su RPE desde el móvil, y STRIVN monta la semana. Llegas al lunes con la carga semanal, el ACWR y la recuperación ya calculados.',
      points: [
        'RPE por sesión y por jugador',
        'Carga semanal y monotonía',
        'ACWR por jugador',
        'Nota del preparador físico compartida con el cuerpo técnico',
      ],
      table: {
        title: 'Carga y RPE',
        week: 'Semana 23 · 1 – 7 de junio',
        colPlayer: 'Jugador',
        colMon: 'Lun',
        colWed: 'Mié',
        colFri: 'Vie',
        colAcwr: 'ACWR',
        colState: 'Estado',
        pillOk: 'OK',
        pillWatch: 'Vigilar',
        pillRisk: 'Riesgo',
        players: [
          { name: 'A. Diallo', mon: '6', wed: '7', fri: '6', acwr: '1.05', zone: 'green' },
          { name: 'M. Benyahia', mon: '7', wed: '8', fri: '7', acwr: '1.18', zone: 'amber' },
          { name: 'T. Mendes', mon: '4', wed: '—', fri: '5', acwr: '0.85', zone: 'amber' },
          { name: 'L. Moreau', mon: '7', wed: '7', fri: '8', acwr: '1.32', zone: 'red' },
          { name: 'S. Cissé', mon: '5', wed: '6', fri: '5', acwr: '0.95', zone: 'green' },
        ],
        tipLabel: 'Nota de preparación física',
        tip: 'L. Moreau lleva 3 semanas seguidas por encima de 1.25. Plantea una sesión más ligera el viernes.',
      },
    },

    sessions: {
      title: 'Monta la sesión antes de llegar al campo.',
      body: 'Colocas los bloques, STRIVN da forma a la sesión y el asistente de IA tiene en cuenta la carga real. La pizarra muestra cuatro ejercicios en 75 minutos, de la presión alta al partido.',
      points: [
        'Pizarras tácticas',
        'Biblioteca de ejercicios',
        'Planificación semanal',
        'Creación de sesiones asistida por IA',
      ],
      board: {
        title: 'Bloque táctico · presión alta',
        meta: 'Sesión · jueves 20:00',
        stamp: '4 ejercicios · 75 min',
        phases: [
          { label: 'Calentamiento', detail: 'Activación + conducción de balón · 15 min' },
          { label: 'Ejercicio 1', detail: 'Presión de tres, activada en el pase lateral · 20 min' },
          { label: 'Ejercicio 2', detail: 'Salida de balón bajo presión · 20 min' },
          { label: 'Partido', detail: '8x8 con oposición, condicionantes de presión · 20 min' },
        ],
      },
    },

    capabilities: {
      title: 'Cubre los otros ocho módulos de la semana.',
      body: 'Un dato introducido una vez sirve a los ocho módulos de abajo. El nivel gratuito aguanta un equipo una temporada entera, con un puesto de staff.',
      items: [
        { title: 'Asistencias y confirmaciones', text: 'Las respuestas de los jugadores alimentan una vista al día para el entrenador, recuento incluido.', href: '/es/features/attendance/' },
        { title: 'Parte médico', text: 'Lesiones, notas médicas y vuelta a la competición quedan visibles para el personal autorizado.', href: '/es/features/medical/' },
        { title: 'Carga y RPE', text: 'Carga, esfuerzo percibido y señales débiles se conectan con la semana real de la plantilla.', href: '/es/features/training-load/' },
        { title: 'Tests y valoraciones', text: 'Los tests físicos y técnicos se siguen en el tiempo para mostrar la progresión real.' },
        { title: 'Programas individuales', text: 'Objetivos, cargas adaptadas y ejercicios específicos quedan ligados a cada jugador.', href: '/es/features/programs/' },
        { title: 'Sesiones y táctica', text: 'Planes de sesión, pizarras tácticas y ejercicios quedan conectados con el estado del equipo.', href: '/es/features/sessions/' },
        { title: 'Informes de partido y sesión', text: 'Los informes del cuerpo técnico cierran la semana y mantienen visibles los minutos de juego.', href: '/es/features/reports/' },
        { title: 'Asistente de IA', text: 'El asistente lee tus informes y propone la decisión, que tú apruebas.' },
      ],
    },

    playerApp: {
      title: 'Da a cada jugador su propia vista.',
      body: 'Cada jugador sigue la agenda, el próximo evento y sus respuestas de asistencia desde la app nativa. El enlace de respuesta sigue abierto para quien prefiere el navegador.',
      stores: 'Disponible en iOS y Android',
      cta: 'Descubrir la app del jugador',
      imageAlt: 'Captura de la app STRIVN Player: agenda semanal con los próximos eventos',
    },

    timeSaved: {
      title: 'Recupera tus tardes.',
      body: 'La operativa corre en segundo plano mientras preparas la sesión. Estas cuatro tareas salen de tu martes por la noche: convocatorias, asistencias, informes, coordinación.',
      rows: [
        { task: 'Convocatorias y recordatorios', outcome: 'centralizados' },
        { task: 'Asistencias y parte médico', outcome: 'en un mismo sitio' },
        { task: 'Informes de sesión', outcome: 'preparados' },
        { task: 'Coordinación del cuerpo técnico', outcome: 'visible para todos' },
      ],
    },

    pricing: {
      title: 'Empieza gratis y sube cuando el club acompañe.',
      body: 'El nivel gratuito aguanta un equipo una temporada entera, con un puesto de staff. Cada cuenta nueva empieza con 30 días de Semi-Pro, sin tarjeta.',
      plans: [
        {
          name: 'Free',
          description: 'Para aguantar un equipo una temporada entera, por decisión tuya.',
          price: '0 €',
          period: 'para siempre',
          availability: 'Disponible ya',
          cta: 'Crear mi equipo',
          featured: true,
          features: [
            'Un equipo, jugadores sin límite, un puesto de staff',
            'Eventos, sesiones, partidos y convocatorias',
            'Asistencias, plantilla y app del jugador',
            'Enfermería, táctica, informes y programas individuales',
            '20 ejercicios, 3 pizarras tácticas, 3 plantillas',
            '60 llamadas al asistente de IA al mes',
          ],
        },
        {
          name: 'Semi-Pro',
          description: 'Para cruzar el GPS con el RPE y el wellness, con presupuesto de club.',
          price: 'Pronto',
          period: '',
          availability: 'Pronto a la venta',
          cta: 'Solicitar una demo',
          features: [
            'Importación GPS por CSV, sea cual sea el proveedor',
            'GPS, RPE y wellness cruzados en el mismo bloque',
            'Fuerza, tests físicos y cuadro médico',
            'Recordatorios y check-ins automáticos por WhatsApp',
            '2.000 llamadas de IA y 3.000 mensajes de WhatsApp al mes',
          ],
        },
        {
          name: 'Pro',
          description: 'Para clubes con varios equipos que necesitan sacar sus datos.',
          price: 'A medida',
          period: '',
          availability: 'Bajo petición',
          cta: 'Hablar con el equipo',
          features: [
            'Todo el plan Semi-Pro, y además:',
            'Número de equipos ilimitado',
            'Volúmenes de WhatsApp e IA fijados por contrato',
            'Alcance y acompañamiento a medida',
            'En preparación: conectores GPS, API pública, firma de ejercicio',
          ],
        },
      ],
      note: 'Los niveles de pago abren a la venta pronto. Crea tu cuenta, la prueba te pone en Semi-Pro durante 30 días, y te avisamos cuando abra la venta.',
    },

    faq: {
      title: 'Las seis preguntas que nos hacen primero.',
      body: 'Qué tienen que hacer tus jugadores, quién decide y cuánto se tarda en ponerlo en marcha.',
      items: [
        {
          question: '¿Mis jugadores tienen que instalar una app?',
          answer:
            'Responden desde un enlace compartido en el canal que ya usas: web, móvil, WhatsApp, email. La app del jugador sigue siendo opcional, y quien la instala recibe además las notificaciones.',
        },
        {
          question: '¿Quién manda sobre lo que sale?',
          answer:
            'Tú apruebas cada envío. STRIVN prepara el mensaje, el recordatorio y el informe, y los deja esperando tu gesto. La operativa corre mientras entrenas a la plantilla.',
        },
        {
          question: '¿Cuánto se tarda en empezar?',
          answer:
            'Unos minutos. Creas tu equipo, añades a tus jugadores y ya puedes crear los primeros eventos, mensajes y enlaces de respuesta en la primera semana.',
        },
        {
          question: '¿Por qué existe el nivel gratuito?',
          answer:
            'Porque un entrenador debería poder probar STRIVN por decisión propia, antes de abrir un presupuesto de club. El gratuito aguanta la temporada, y la siguiente, sin tarjeta.',
        },
        {
          question: '¿STRIVN encaja en el fútbol amateur?',
          answer:
            'STRIVN está pensado para entrenadores que cargan solos con la sesión, el parte médico y la logística. Cuantos más papeles acumulas, más horas recuperas cada semana.',
        },
        {
          question: '¿Y si ya tengo personal médico y preparador físico?',
          answer:
            'Cada uno tiene su vista: el fisio abre el parte médico, el preparador físico lee la carga, el entrenador se queda con la sesión. Lo que introduce uno sirve a los otros dos.',
        },
      ],
    },

    finalCta: {
      title: 'Pon a tu equipo bajo un mismo techo.',
      body: 'Crea tu equipo en unos minutos. Los primeros 30 días son en Semi-Pro, sin tarjeta.',
      primaryCta: 'Crear mi equipo gratis',
      secondaryCta: '¿Alguna duda antes de empezar?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20duda%20antes%20de%20empezar',
    },

    footer: {
      statement: 'Reúne a tu equipo bajo un mismo techo.',
      brandLine: 'STRIVN reúne convocatorias, asistencias, historial médico, carga y sesiones en un mismo sitio, para todo el cuerpo técnico.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plataforma', href: '/es/solutions/' },
        { label: 'Funcionalidades', href: '/es/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
        { label: 'Precios', href: '/es/pricing/' },
        { label: 'FAQ', href: '/es/#faq' },
        { label: 'Soporte', href: '/es/support' },
        { label: 'Privacidad', href: '/es/privacy' },
      ],
      apps: {
        title: 'Apps móviles',
        rows: [
          { label: 'STRIVN Coach', appStore: STORE_LINKS.coach.appStore, playStore: STORE_LINKS.coach.playStore },
          { label: 'STRIVN Player', appStore: STORE_LINKS.player.appStore, playStore: STORE_LINKS.player.playStore },
        ],
      },
      credit: '© 2026 STRIVN · Cuatro niveles, 30 días de Semi-Pro al registrarte',
    },
  },
};
