/** Every locale the site publishes. Order drives the language switcher. */
export const LOCALES = ['en', 'fr', 'nl', 'de', 'pt', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

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

  nav: {
    links: Array<
      | { label: string; href: string }
      | { label: string; children: Array<{ label: string; href: string }> }
    >;
    cta: string;
  };

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
      title: 'STRIVN — Toute l’équipe, sous un même toit',
      description:
        'Convocations, présences, infirmerie, charge, séances, communication : STRIVN réunit l’intendance complète d’une équipe dans une seule plateforme. Gratuite pour les coaches, sans validation du club.',
    },

    nav: {
      links: [
        { label: 'Plateforme', href: '/fr/#platform' },
        { label: 'Fonctionnalités', href: '/fr/features/' },
        {
          label: 'Solutions',
          children: [
            { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
            { label: 'Clubs', href: '/fr/clubs/' },
            { label: 'Équipes de jeunes', href: '/fr/equipes-jeunes/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Tarifs', href: '/fr/#pricing' },
        { label: 'FAQ', href: '/fr/#faq' },
      ],
      cta: 'Commencer',
    },

    hero: {
      claim: 'Conçu par des coachs et des joueurs — pour les staffs et les équipes',
      title: 'Toute l’équipe,',
      titleAccent: 'sous un même toit.',
      lede: 'WhatsApp, Excel, notes papier, mémoire : le quotidien d’un coach est éparpillé. STRIVN réunit convocations, présences, infirmerie, charge et séances dans une seule plateforme, partagée par tout le staff.',
      primaryCta: 'Commencer gratuitement',
      secondaryCta: 'Voir la plateforme',
      reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
      stage: {
        ariaLabel:
          'Animation : les messages, fichiers et notes éparpillés d’un coach convergent dans un panneau STRIVN unifié qui montre l’état de l’équipe.',
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
            { label: 'Infirmerie', value: 'T. Mendes — réathlétisation', tone: 'watch' },
            { label: 'Charge & RPE', value: 'ACWR 1.12 · groupe stable', tone: 'ok' },
            { label: 'Séance', value: 'Jeudi 20h · bloc pressing', tone: 'info' },
            { label: 'Match', value: 'Dimanche 15h · effectif confirmé', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'En action',
      title: 'Toute la plateforme, en deux minutes.',
      sub: 'Une visite guidée : comment STRIVN réunit convocations, présences, infirmerie et charge dans un seul espace partagé par le staff.',
      srcMp4: '/videos/overview-fr.mp4',
      poster: '/posters/overview-fr.jpg',
      duration: '2 min',
      playLabel: 'Lire la présentation du produit',
      ariaLabel: 'Vidéo de présentation du produit STRIVN',
    },

    reality: {
      title: 'Coacher n’est qu’une partie du métier.',
      body: 'Le mardi à 22h47, le travail de l’ombre continue : relancer ceux qui n’ont pas répondu, tenir l’infirmerie, ressaisir les présences, briefer le kiné. Six endroits différents, zéro vue d’ensemble.',
      scattered: [
        'Le groupe WhatsApp',
        'Le fichier de présences',
        'Les notes d’infirmerie',
        'Le carnet de RPE',
        'Les schémas de séance',
        'La mémoire du coach',
      ],
      resolve: 'Une seule plateforme.',
    },

    communication: {
      title: 'La convocation qui se gère toute seule.',
      body: 'Chaque événement génère son message et son lien de réponse. Vous le partagez sur le canal que votre groupe utilise déjà — WhatsApp, email, l’app — et STRIVN collecte les réponses pour tenir la feuille de présences à jour.',
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
      title: 'L’infirmerie que tout le staff peut lire.',
      body: 'Blessures, notes du médecin, avis du kiné, protocole de retour au jeu : tout est relié, du diagnostic au retour sur le terrain. Le coach voit où en est chaque joueur sans appeler personne.',
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
      title: 'La charge du groupe, sans relancer personne.',
      body: 'RPE, charge hebdomadaire, ACWR, récupération : les joueurs répondent depuis leur téléphone et STRIVN assemble la semaine. Vous arrivez le lundi avec les signaux faibles déjà visibles.',
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
        tip: 'L. Moreau enchaîne 3 semaines au-dessus de 1.25 — prévoir une séance allégée vendredi.',
      },
    },

    sessions: {
      title: 'La séance prête avant d’arriver au terrain.',
      body: 'Tableaux tactiques, bibliothèque d’exercices, planification de la semaine : STRIVN met la séance en forme pendant que vous pensez au jeu, et l’assistant IA tient compte de la charge réelle du groupe.',
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
      title: 'Et tout le reste du quotidien.',
      body: 'Une équipe, des joueurs et un staff illimités. Chaque module est inclus dans le plan gratuit — rien n’est verrouillé derrière un paiement.',
      items: [
        { title: 'Présences & RSVP', text: 'Les réponses des joueurs deviennent une vue coach à jour, sans recompter à la main.', href: '/fr/features/communication/' },
        { title: 'Infirmerie', text: 'Blessures, notes médicales et retour au jeu restent visibles pour le staff autorisé.', href: '/fr/features/medical/' },
        { title: 'Charge & RPE', text: 'La charge, le ressenti et les signaux faibles se relient à la semaine réelle du groupe.', href: '/fr/features/training-load/' },
        { title: 'Tests & évaluations', text: 'Les tests physiques et techniques sont suivis dans le temps pour voir la progression réelle.' },
        { title: 'Programmes individuels', text: 'Objectifs, charges adaptées et exercices spécifiques restent reliés à chaque joueur.', href: '/fr/features/player-app/' },
        { title: 'Séances & tactique', text: 'Plans de séance, tableaux tactiques et exercices restent connectés à l’état de l’équipe.', href: '/fr/features/sessions/' },
        { title: 'Rapports de match et de séance', text: 'Les retours du staff créent une boucle de feedback et gardent les temps de jeu visibles.', href: '/fr/features/reports/' },
        { title: 'Assistant IA', text: 'Les comptes-rendus et l’assistant transforment les informations d’équipe en décisions.' },
      ],
    },

    playerApp: {
      title: 'Vos joueurs ont leur propre vue.',
      body: 'Agenda, prochain événement, réponses de présence, notifications : chaque joueur suit l’équipe depuis l’app native. Et ceux qui ne l’installent pas répondent quand même par le lien.',
      stores: 'Disponible sur iOS et Android',
      cta: 'Découvrir l’app joueur',
      imageAlt: 'Capture de l’app joueur STRIVN : agenda de la semaine avec les prochains événements',
    },

    timeSaved: {
      title: 'Récupérez vos soirées.',
      body: 'L’intendance tourne en arrière-plan. Vous gardez ce qui compte : le groupe, la séance, le match.',
      rows: [
        { task: 'Convocations & relances', outcome: 'centralisées' },
        { task: 'Présences & infirmerie', outcome: 'au même endroit' },
        { task: 'Comptes-rendus de séance', outcome: 'préparés' },
        { task: 'Coordination du staff', outcome: 'visible par tous' },
      ],
    },

    pricing: {
      title: 'Gratuit pour coacher. Payant quand le club grandit.',
      body: 'Le plan Coach donne l’expérience complète pour une équipe. Les plans Club arrivent pour les structures qui veulent coordonner plusieurs équipes, staffs et flux médicaux.',
      plans: [
        {
          name: 'Coach',
          description: 'Pour lancer STRIVN sur une équipe sans demander de budget au club.',
          price: '0€',
          period: 'pour toujours',
          availability: 'Disponible maintenant',
          cta: 'Créer mon équipe',
          featured: true,
          features: [
            '1 équipe',
            'Joueurs illimités',
            'Staff illimité',
            'Événements, séances et matchs',
            'Présences, RSVP et communication',
            'Infirmerie, tactique, rapports et assistant IA',
          ],
        },
        {
          name: 'Club',
          description: 'Pour coordonner toutes les équipes et les staffs d’un club.',
          price: 'Bientôt',
          period: '',
          availability: 'Ouverture progressive',
          cta: 'Demander une démo',
          features: [
            'Plusieurs équipes',
            'Base joueurs partagée',
            'Staff médical et coordinateurs partagés',
            'Dashboards et reporting club',
            'Suivi blessure inter-équipes',
          ],
        },
        {
          name: 'Club Pro',
          description: 'Pour les organisations qui veulent des insights avancés.',
          price: 'Bientôt',
          period: '',
          availability: 'Sur demande',
          cta: 'Parler à l’équipe',
          features: [
            'Tout le plan Club',
            'Reporting avancé',
            'Analytics avancées',
            'Accès API',
            'Insights organisationnels',
          ],
        },
      ],
      note: 'Le premier paiement arrive quand un club veut gérer plusieurs équipes et staffs dans STRIVN. Pas pour débloquer les outils essentiels d’un coach.',
    },

    faq: {
      title: 'Les questions qu’on nous pose en premier.',
      body: 'Ce que vos joueurs ont à faire, qui décide, et combien de temps ça prend à installer.',
      items: [
        {
          question: 'Mes joueurs doivent-ils installer une application ?',
          answer:
            'Non. Ils peuvent répondre via un lien partagé sur le canal que vous utilisez déjà : web, mobile, WhatsApp, email. Le but est de réduire la friction, pas d’imposer une nouvelle habitude.',
        },
        {
          question: 'Est-ce que je perds le contrôle de mon équipe ?',
          answer:
            'Jamais. STRIVN prépare le travail à votre place, mais rien ne part sans votre validation. Vous gardez la main sur chaque message, chaque décision. Il prend l’intendance, vous coachez.',
        },
        {
          question: 'Combien de temps pour démarrer ?',
          answer:
            'Quelques minutes. Vous créez votre équipe, vous ajoutez vos joueurs, et vous pouvez créer vos premiers événements, messages et liens de réponse dès la première semaine.',
        },
        {
          question: 'Pourquoi le plan Coach est gratuit ?',
          answer:
            'Parce qu’un coach doit pouvoir tester et adopter STRIVN sans passer par le président, le bureau ou le trésorier. Le paiement commence quand le club veut coordonner plusieurs équipes.',
        },
        {
          question: 'Ça marche vraiment pour le football amateur ?',
          answer:
            'C’est fait pour. STRIVN est pensé pour les coaches multi-casquettes qui n’ont pas un staff complet derrière eux. Plus vous êtes seul à tout gérer, plus il vous fait gagner du temps.',
        },
        {
          question: 'Et si j’ai déjà un staff médical et un prépa ?',
          answer:
            'Encore mieux. Chacun retrouve sa vue : le kiné voit l’infirmerie, le prépa voit la charge, le coordinateur voit plusieurs équipes. Personne ne ressaisit ce que le voisin a déjà noté.',
        },
      ],
    },

    finalCta: {
      title: 'Mettez votre équipe sous un même toit.',
      body: 'Créez votre équipe gratuitement — événements, présences, infirmerie et communication au même endroit dès cette semaine.',
      primaryCta: 'Créer mon équipe gratuitement',
      secondaryCta: 'Une question avant de démarrer ?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20question%20avant%20de%20d%C3%A9marrer',
    },

    footer: {
      statement: 'Le terrain d’abord. L’intendance ensuite.',
      brandLine: 'STRIVN réunit l’intendance complète d’une équipe dans une seule plateforme, gratuite pour les coaches.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plateforme', href: '/fr/#platform' },
        { label: 'Fonctionnalités', href: '/fr/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Clubs', href: '/fr/clubs/' },
        { label: 'Préparateurs physiques', href: '/fr/preparateurs-physiques/' },
        { label: 'Équipes de jeunes', href: '/fr/equipes-jeunes/' },
        { label: 'Tarifs', href: '/fr/#pricing' },
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
      credit: '© 2026 STRIVN · Gratuit pour les coaches, bientôt pour les clubs',
    },
  },

  en: {
    meta: {
      title: 'STRIVN — Your whole team, under one roof',
      description:
        'Call-ups, attendance, medical records, training load, sessions, communication: STRIVN brings a team’s entire operations into one platform. Free for coaches, no club approval needed.',
    },

    nav: {
      links: [
        { label: 'Platform', href: '/en/#platform' },
        { label: 'Features', href: '/en/features/' },
        {
          label: 'Solutions',
          children: [
            { label: 'S&C coaches', href: '/en/sc-coaches/' },
            { label: 'Clubs', href: '/en/clubs/' },
            { label: 'Youth teams', href: '/en/youth-teams/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Pricing', href: '/en/#pricing' },
        { label: 'FAQ', href: '/en/#faq' },
      ],
      cta: 'Get started',
    },

    hero: {
      claim: 'Built by coaches and players — for staff and teams',
      title: 'Your whole team,',
      titleAccent: 'under one roof.',
      lede: 'WhatsApp, spreadsheets, paper notes, memory: a coach’s week is scattered everywhere. STRIVN brings call-ups, attendance, medical records, training load and sessions into one platform the whole staff shares.',
      primaryCta: 'Start for free',
      secondaryCta: 'See the platform',
      reassurance: 'Free for one team · no club approval needed · ready in minutes',
      stage: {
        ariaLabel:
          'Animation: a coach’s scattered messages, files and notes converge into one unified STRIVN panel showing the team’s state.',
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
            { label: 'Medical', value: 'T. Mendes — reconditioning', tone: 'watch' },
            { label: 'Load & RPE', value: 'ACWR 1.12 · squad stable', tone: 'ok' },
            { label: 'Session', value: 'Thursday 8pm · pressing block', tone: 'info' },
            { label: 'Match', value: 'Sunday 3pm · squad confirmed', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'See it in action',
      title: 'The whole platform, in two minutes.',
      sub: 'A guided tour of how STRIVN pulls call-ups, attendance, medical records and training load into one workspace the whole staff shares.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Play the product overview',
      ariaLabel: 'STRIVN product overview video',
    },

    reality: {
      title: 'Coaching is only part of the job.',
      body: 'On Tuesday at 10:47pm, the shadow work continues: chasing the players who didn’t reply, updating the medical log, re-entering attendance, briefing the physio. Six different places, zero overview.',
      scattered: [
        'The WhatsApp group',
        'The attendance spreadsheet',
        'The medical notes',
        'The RPE notebook',
        'The session diagrams',
        'The coach’s memory',
      ],
      resolve: 'One platform.',
    },

    communication: {
      title: 'The call-up that runs itself.',
      body: 'Every event generates its message and its reply link. You share it on the channel your group already uses — WhatsApp, email, the app — and STRIVN collects the replies to keep the attendance sheet up to date.',
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
      title: 'A medical log the whole staff can read.',
      body: 'Injuries, doctor’s notes, physio assessments, return-to-play protocol: everything is connected, from diagnosis back to the pitch. The coach sees where every player stands without calling anyone.',
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
      title: 'The squad’s load, without chasing anyone.',
      body: 'RPE, weekly load, ACWR, recovery: players answer from their phones and STRIVN assembles the week. You arrive on Monday with the weak signals already visible.',
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
        tip: 'L. Moreau has been above 1.25 for 3 straight weeks — plan a lighter session on Friday.',
      },
    },

    sessions: {
      title: 'The session ready before you reach the pitch.',
      body: 'Tactical boards, a drill library, week planning: STRIVN shapes the session while you think about the game, and the AI assistant accounts for the squad’s actual load.',
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
      title: 'And everything else in the weekly routine.',
      body: 'One team, unlimited players and staff. Every module is included in the free plan — nothing is locked behind a payment.',
      items: [
        { title: 'Attendance & RSVP', text: 'Player replies become an up-to-date coach view, without counting by hand.', href: '/en/features/communication/' },
        { title: 'Medical log', text: 'Injuries, medical notes and return-to-play stay visible to authorised staff.', href: '/en/features/medical/' },
        { title: 'Load & RPE', text: 'Load, perceived effort and weak signals connect to the squad’s actual week.', href: '/en/features/training-load/' },
        { title: 'Tests & assessments', text: 'Physical and technical tests are tracked over time to show real progression.' },
        { title: 'Individual programs', text: 'Goals, adapted loads and specific drills stay linked to each player.', href: '/en/features/player-app/' },
        { title: 'Sessions & tactics', text: 'Session plans, tactical boards and drills stay connected to the team’s state.', href: '/en/features/sessions/' },
        { title: 'Match & session reports', text: 'Staff feedback creates a loop and keeps playing time visible.', href: '/en/features/reports/' },
        { title: 'AI assistant', text: 'Reports and the assistant turn team information into decisions.' },
      ],
    },

    playerApp: {
      title: 'Your players get their own view.',
      body: 'Agenda, next event, attendance replies, notifications: every player follows the team from the native app. And those who don’t install it still reply through the link.',
      stores: 'Available on iOS and Android',
      cta: 'Discover the player app',
      imageAlt: 'Screenshot of the STRIVN player app: weekly agenda with upcoming events',
    },

    timeSaved: {
      title: 'Get your evenings back.',
      body: 'The operations run in the background. You keep what matters: the squad, the session, the match.',
      rows: [
        { task: 'Call-ups & reminders', outcome: 'centralised' },
        { task: 'Attendance & medical log', outcome: 'in one place' },
        { task: 'Session reports', outcome: 'prepared' },
        { task: 'Staff coordination', outcome: 'visible to everyone' },
      ],
    },

    pricing: {
      title: 'Free to coach. Paid when the club grows.',
      body: 'The Coach plan is the complete experience for one team. Club plans are coming for organisations that want to coordinate several teams, staffs and medical workflows.',
      plans: [
        {
          name: 'Coach',
          description: 'To launch STRIVN on one team without asking the club for budget.',
          price: '€0',
          period: 'forever',
          availability: 'Available now',
          cta: 'Create my team',
          featured: true,
          features: [
            '1 team',
            'Unlimited players',
            'Unlimited staff',
            'Events, sessions and matches',
            'Attendance, RSVP and communication',
            'Medical log, tactics, reports and AI assistant',
          ],
        },
        {
          name: 'Club',
          description: 'To coordinate all the teams and staffs of a club.',
          price: 'Soon',
          period: '',
          availability: 'Gradual rollout',
          cta: 'Request a demo',
          features: [
            'Multiple teams',
            'Shared player base',
            'Shared medical staff and coordinators',
            'Club dashboards and reporting',
            'Cross-team injury tracking',
          ],
        },
        {
          name: 'Club Pro',
          description: 'For organisations that want advanced insights.',
          price: 'Soon',
          period: '',
          availability: 'On request',
          cta: 'Talk to the team',
          features: [
            'Everything in Club',
            'Advanced reporting',
            'Advanced analytics',
            'API access',
            'Organisational insights',
          ],
        },
      ],
      note: 'The first payment comes when a club wants to manage several teams and staffs in STRIVN. Not to unlock a coach’s essential tools.',
    },

    faq: {
      title: 'The questions we get asked first.',
      body: 'What your players have to do, who decides, and how long it takes to set up.',
      items: [
        {
          question: 'Do my players have to install an app?',
          answer:
            'No. They can reply through a link shared on the channel you already use: web, mobile, WhatsApp, email. The goal is to reduce friction, not to impose a new habit.',
        },
        {
          question: 'Do I lose control of my team?',
          answer:
            'Never. STRIVN prepares the work for you, but nothing goes out without your approval. You keep your hand on every message, every decision. It handles the operations, you coach.',
        },
        {
          question: 'How long does it take to get started?',
          answer:
            'A few minutes. You create your team, add your players, and you can create your first events, messages and reply links in the first week.',
        },
        {
          question: 'Why is the Coach plan free?',
          answer:
            'Because a coach should be able to try and adopt STRIVN without going through the president, the board or the treasurer. Payment starts when the club wants to coordinate several teams.',
        },
        {
          question: 'Does it really work for amateur football?',
          answer:
            'It’s built for it. STRIVN is designed for coaches who wear every hat and don’t have a full staff behind them. The more you manage alone, the more time it gives back.',
        },
        {
          question: 'What if I already have medical staff and a fitness coach?',
          answer:
            'Even better. Everyone gets their view: the physio sees the medical log, the fitness coach sees the load, the coordinator sees several teams. Nobody re-enters what a colleague already noted.',
        },
      ],
    },

    finalCta: {
      title: 'Put your team under one roof.',
      body: 'Create your team for free — events, attendance, medical log and communication in one place this week.',
      primaryCta: 'Create my team for free',
      secondaryCta: 'A question before you start?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20question%20before%20starting',
    },

    footer: {
      statement: 'The pitch first. The operations second.',
      brandLine: 'STRIVN brings a team’s entire operations into one platform, free for coaches.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Platform', href: '/en/#platform' },
        { label: 'Features', href: '/en/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Clubs', href: '/en/clubs/' },
        { label: 'S&C coaches', href: '/en/sc-coaches/' },
        { label: 'Youth teams', href: '/en/youth-teams/' },
        { label: 'Pricing', href: '/en/#pricing' },
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
      credit: '© 2026 STRIVN · Free for coaches, clubs coming soon',
    },
  },

  nl: {
    meta: {
      title: 'STRIVN — Je hele team, onder één dak',
      description:
        'Oproepingen, aanwezigheid, medische dossiers, trainingsbelasting, trainingen, communicatie: STRIVN brengt de volledige teamorganisatie samen in één platform. Gratis voor coaches, zonder goedkeuring van de club.',
    },

    nav: {
      links: [
        { label: 'Platform', href: '/nl/#platform' },
        { label: 'Functies', href: '/nl/features/' },
        {
          label: 'Oplossingen',
          children: [
            { label: 'S&C-coaches', href: '/nl/sc-coaches/' },
            { label: 'Clubs', href: '/nl/clubs/' },
            { label: 'Jeugdploegen', href: '/nl/youth-teams/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Tarieven', href: '/nl/#pricing' },
        { label: 'FAQ', href: '/nl/#faq' },
      ],
      cta: 'Aan de slag',
    },

    hero: {
      claim: 'Gebouwd door coaches en spelers — voor staf en teams',
      title: 'Je hele team,',
      titleAccent: 'onder één dak.',
      lede: 'WhatsApp, spreadsheets, papieren notities, geheugen: de week van een coach is overal verspreid. STRIVN brengt oproepingen, aanwezigheid, medische dossiers, trainingsbelasting en trainingen samen in één platform dat de hele staf deelt.',
      primaryCta: 'Gratis starten',
      secondaryCta: 'Bekijk het platform',
      reassurance: 'Gratis voor één team · zonder goedkeuring van de club · klaar in enkele minuten',
      stage: {
        ariaLabel:
          'Animatie: de verspreide berichten, bestanden en notities van een coach komen samen in één verenigd STRIVN-paneel dat de staat van het team toont.',
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
            { label: 'Medisch', value: 'T. Mendes — revalidatie', tone: 'watch' },
            { label: 'Belasting & RPE', value: 'ACWR 1.12 · groep stabiel', tone: 'ok' },
            { label: 'Training', value: 'Donderdag 20u · pressingblok', tone: 'info' },
            { label: 'Wedstrijd', value: 'Zondag 15u · selectie bevestigd', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Zie het in actie',
      title: 'Het hele platform, in twee minuten.',
      sub: 'Een rondleiding langs hoe STRIVN oproepingen, aanwezigheid, medische dossiers en trainingsbelasting samenbrengt in één werkruimte die de hele staf deelt.',
      srcMp4: '/videos/overview-nl.mp4',
      poster: '/posters/overview-nl.jpg',
      duration: '2 min',
      playLabel: 'Speel het productoverzicht af',
      ariaLabel: 'STRIVN productoverzichtvideo',
    },

    reality: {
      title: 'Coachen is maar een deel van het werk.',
      body: 'Op dinsdag om 22u47 gaat het schaduwwerk verder: de spelers achtervolgen die niet antwoordden, het medisch logboek bijwerken, aanwezigheden opnieuw invoeren, de fysio briefen. Zes verschillende plekken, geen enkel overzicht.',
      scattered: [
        'De WhatsApp-groep',
        'De aanwezigheidsspreadsheet',
        'De medische notities',
        'Het RPE-notitieboek',
        'De trainingsschema’s',
        'Het geheugen van de coach',
      ],
      resolve: 'Eén platform.',
    },

    communication: {
      title: 'De oproeping die zichzelf regelt.',
      body: 'Elk evenement genereert zijn bericht en zijn antwoordlink. Je deelt die op het kanaal dat je groep al gebruikt — WhatsApp, e-mail, de app — en STRIVN verzamelt de antwoorden om de aanwezigheidslijst up-to-date te houden.',
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
      title: 'Een medisch logboek dat de hele staf kan lezen.',
      body: 'Blessures, notities van de arts, beoordelingen van de fysio, return-to-play-protocol: alles is verbonden, van diagnose tot terug op het veld. De coach ziet waar elke speler staat zonder iemand te bellen.',
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
      title: 'De belasting van de groep, zonder iemand achterna te zitten.',
      body: 'RPE, wekelijkse belasting, ACWR, herstel: spelers antwoorden vanaf hun telefoon en STRIVN stelt de week samen. Je komt maandag binnen met de zwakke signalen al zichtbaar.',
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
        tip: 'L. Moreau zit al 3 weken op rij boven 1.25 — plan een lichtere training op vrijdag.',
      },
    },

    sessions: {
      title: 'De training klaar voordat je op het veld bent.',
      body: 'Tactische borden, een oefeningenbibliotheek, weekplanning: STRIVN geeft vorm aan de training terwijl jij aan het spel denkt, en de AI-assistent houdt rekening met de werkelijke belasting van de groep.',
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
      title: 'En al de rest van de wekelijkse routine.',
      body: 'Eén team, onbeperkt spelers en staf. Elke module zit in het gratis plan — niets zit achter een betaling verborgen.',
      items: [
        { title: 'Aanwezigheid & RSVP', text: 'Antwoorden van spelers worden een up-to-date coachweergave, zonder handmatig te tellen.', href: '/nl/features/communication/' },
        { title: 'Medisch logboek', text: 'Blessures, medische notities en return-to-play blijven zichtbaar voor bevoegde staf.', href: '/nl/features/medical/' },
        { title: 'Belasting & RPE', text: 'Belasting, ervaren inspanning en zwakke signalen sluiten aan op de werkelijke week van de groep.', href: '/nl/features/training-load/' },
        { title: 'Testen & evaluaties', text: 'Fysieke en technische testen worden door de tijd heen gevolgd om echte progressie te tonen.' },
        { title: 'Individuele programma’s', text: 'Doelen, aangepaste belastingen en specifieke oefeningen blijven gekoppeld aan elke speler.', href: '/nl/features/player-app/' },
        { title: 'Trainingen & tactiek', text: 'Trainingsplannen, tactische borden en oefeningen blijven verbonden met de staat van het team.', href: '/nl/features/sessions/' },
        { title: 'Wedstrijd- & trainingsrapporten', text: 'Feedback van de staf creëert een lus en houdt speeltijd zichtbaar.', href: '/nl/features/reports/' },
        { title: 'AI-assistent', text: 'Rapporten en de assistent zetten teaminformatie om in beslissingen.' },
      ],
    },

    playerApp: {
      title: 'Je spelers krijgen hun eigen weergave.',
      body: 'Agenda, volgend evenement, aanwezigheidsantwoorden, meldingen: elke speler volgt het team vanuit de native app. En wie ze niet installeert, antwoordt toch via de link.',
      stores: 'Beschikbaar op iOS en Android',
      cta: 'Ontdek de spelersapp',
      imageAlt: 'Schermafbeelding van de STRIVN-spelersapp: weekagenda met komende evenementen',
    },

    timeSaved: {
      title: 'Krijg je avonden terug.',
      body: 'De organisatie draait op de achtergrond. Jij houdt wat telt: de groep, de training, de wedstrijd.',
      rows: [
        { task: 'Oproepingen & herinneringen', outcome: 'gecentraliseerd' },
        { task: 'Aanwezigheid & medisch logboek', outcome: 'op één plek' },
        { task: 'Trainingsrapporten', outcome: 'voorbereid' },
        { task: 'Coördinatie van de staf', outcome: 'zichtbaar voor iedereen' },
      ],
    },

    pricing: {
      title: 'Gratis om te coachen. Betalend wanneer de club groeit.',
      body: 'Het Coach-plan is de volledige ervaring voor één team. Club-plannen komen eraan voor organisaties die meerdere teams, staven en medische workflows willen coördineren.',
      plans: [
        {
          name: 'Coach',
          description: 'Om STRIVN op één team te lanceren zonder de club om budget te vragen.',
          price: '€0',
          period: 'voor altijd',
          availability: 'Nu beschikbaar',
          cta: 'Maak mijn team',
          featured: true,
          features: [
            '1 team',
            'Onbeperkt spelers',
            'Onbeperkt staf',
            'Evenementen, trainingen en wedstrijden',
            'Aanwezigheid, RSVP en communicatie',
            'Medisch logboek, tactiek, rapporten en AI-assistent',
          ],
        },
        {
          name: 'Club',
          description: 'Om alle teams en staven van een club te coördineren.',
          price: 'Binnenkort',
          period: '',
          availability: 'Geleidelijke uitrol',
          cta: 'Vraag een demo aan',
          features: [
            'Meerdere teams',
            'Gedeelde spelersbasis',
            'Gedeelde medische staf en coördinatoren',
            'Clubdashboards en rapportage',
            'Blessureopvolging over teams heen',
          ],
        },
        {
          name: 'Club Pro',
          description: 'Voor organisaties die geavanceerde inzichten willen.',
          price: 'Binnenkort',
          period: '',
          availability: 'Op aanvraag',
          cta: 'Praat met het team',
          features: [
            'Alles uit Club',
            'Geavanceerde rapportage',
            'Geavanceerde analytics',
            'API-toegang',
            'Organisatorische inzichten',
          ],
        },
      ],
      note: 'De eerste betaling komt wanneer een club meerdere teams en staven in STRIVN wil beheren. Niet om de essentiële tools van een coach te ontgrendelen.',
    },

    faq: {
      title: 'De vragen die we het eerst krijgen.',
      body: 'Wat je spelers moeten doen, wie beslist, en hoe lang het duurt om op te zetten.',
      items: [
        {
          question: 'Moeten mijn spelers een app installeren?',
          answer:
            'Nee. Ze kunnen antwoorden via een link die je deelt op het kanaal dat je al gebruikt: web, mobiel, WhatsApp, e-mail. Het doel is wrijving verminderen, niet een nieuwe gewoonte opleggen.',
        },
        {
          question: 'Verlies ik de controle over mijn team?',
          answer:
            'Nooit. STRIVN bereidt het werk voor je voor, maar er gaat niets uit zonder jouw goedkeuring. Jij houdt de hand op elk bericht, elke beslissing. Het regelt de organisatie, jij coacht.',
        },
        {
          question: 'Hoe lang duurt het om te starten?',
          answer:
            'Enkele minuten. Je maakt je team aan, voegt je spelers toe, en je kunt in de eerste week je eerste evenementen, berichten en antwoordlinks aanmaken.',
        },
        {
          question: 'Waarom is het Coach-plan gratis?',
          answer:
            'Omdat een coach STRIVN moet kunnen uitproberen en gebruiken zonder langs de voorzitter, het bestuur of de penningmeester te gaan. Betalen begint wanneer de club meerdere teams wil coördineren.',
        },
        {
          question: 'Werkt het echt voor amateurvoetbal?',
          answer:
            'Het is er net voor gemaakt. STRIVN is ontworpen voor coaches die alle petten dragen en geen volledige staf achter zich hebben. Hoe meer je alleen beheert, hoe meer tijd het teruggeeft.',
        },
        {
          question: 'En als ik al medische staf en een fysieke coach heb?',
          answer:
            'Nog beter. Iedereen krijgt zijn weergave: de fysio ziet het medisch logboek, de fysieke coach ziet de belasting, de coördinator ziet meerdere teams. Niemand voert opnieuw in wat een collega al noteerde.',
        },
      ],
    },

    finalCta: {
      title: 'Breng je team onder één dak.',
      body: 'Maak je team gratis aan — evenementen, aanwezigheid, medisch logboek en communicatie op één plek, deze week nog.',
      primaryCta: 'Maak mijn team gratis aan',
      secondaryCta: 'Een vraag voor je begint?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20vraag%20voor%20je%20begint',
    },

    footer: {
      statement: 'Het veld eerst. De organisatie daarna.',
      brandLine: 'STRIVN brengt de volledige teamorganisatie samen in één platform, gratis voor coaches.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Platform', href: '/nl/#platform' },
        { label: 'Functies', href: '/nl/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Clubs', href: '/nl/clubs/' },
        { label: 'S&C-coaches', href: '/nl/sc-coaches/' },
        { label: 'Jeugdploegen', href: '/nl/youth-teams/' },
        { label: 'Tarieven', href: '/nl/#pricing' },
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
      credit: '© 2026 STRIVN · Gratis voor coaches, clubs binnenkort',
    },
  },

  de: {
    meta: {
      title: 'STRIVN — Ihr ganzes Team, unter einem Dach',
      description:
        'Aufstellungen, Anwesenheit, medizinische Akten, Trainingsbelastung, Trainings, Kommunikation: STRIVN bringt die gesamte Organisation eines Teams in eine Plattform. Kostenlos für Coaches, ohne Freigabe des Vereins.',
    },

    nav: {
      links: [
        { label: 'Plattform', href: '/de/#platform' },
        { label: 'Funktionen', href: '/de/features/' },
        {
          label: 'Lösungen',
          children: [
            { label: 'S&C-Coaches', href: '/de/sc-coaches/' },
            { label: 'Vereine', href: '/de/clubs/' },
            { label: 'Jugendteams', href: '/de/youth-teams/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Preise', href: '/de/#pricing' },
        { label: 'FAQ', href: '/de/#faq' },
      ],
      cta: 'Loslegen',
    },

    hero: {
      claim: 'Von Coaches und Spielern gebaut — für Staff und Teams',
      title: 'Ihr ganzes Team,',
      titleAccent: 'unter einem Dach.',
      lede: 'WhatsApp, Tabellen, Zettel, Gedächtnis: die Woche eines Coaches ist überall verstreut. STRIVN bringt Aufstellungen, Anwesenheit, medizinische Akten, Trainingsbelastung und Trainings in eine Plattform, die der ganze Staff teilt.',
      primaryCta: 'Kostenlos starten',
      secondaryCta: 'Plattform ansehen',
      reassurance: 'Kostenlos für ein Team · ohne Freigabe des Vereins · in wenigen Minuten startklar',
      stage: {
        ariaLabel:
          'Animation: die verstreuten Nachrichten, Dateien und Notizen eines Coaches laufen in einem einheitlichen STRIVN-Panel zusammen, das den Zustand des Teams zeigt.',
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
            { label: 'Medizin', value: 'T. Mendes — Rehabilitation', tone: 'watch' },
            { label: 'Belastung & RPE', value: 'ACWR 1.12 · Kader stabil', tone: 'ok' },
            { label: 'Training', value: 'Donnerstag 20 Uhr · Pressing-Block', tone: 'info' },
            { label: 'Spiel', value: 'Sonntag 15 Uhr · Kader bestätigt', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'In Aktion sehen',
      title: 'Die ganze Plattform, in zwei Minuten.',
      sub: 'Eine geführte Tour, wie STRIVN Aufstellungen, Anwesenheit, medizinische Akten und Trainingsbelastung in einen Arbeitsbereich holt, den der ganze Staff teilt.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Produktüberblick abspielen',
      ariaLabel: 'STRIVN Produktüberblick-Video',
    },

    reality: {
      title: 'Coachen ist nur ein Teil des Jobs.',
      body: 'Am Dienstag um 22:47 Uhr geht die Arbeit im Hintergrund weiter: den Spielern hinterherlaufen, die nicht geantwortet haben, das medizinische Logbuch aktualisieren, Anwesenheiten neu eintragen, den Physio briefen. Sechs verschiedene Orte, kein Überblick.',
      scattered: [
        'Die WhatsApp-Gruppe',
        'Die Anwesenheitstabelle',
        'Die medizinischen Notizen',
        'Das RPE-Notizbuch',
        'Die Trainingsdiagramme',
        'Das Gedächtnis des Coaches',
      ],
      resolve: 'Eine Plattform.',
    },

    communication: {
      title: 'Die Aufstellung, die sich selbst erledigt.',
      body: 'Jeder Termin erzeugt seine Nachricht und seinen Antwortlink. Sie teilen ihn auf dem Kanal, den Ihre Gruppe ohnehin nutzt — WhatsApp, E-Mail, die App — und STRIVN sammelt die Antworten, damit die Anwesenheitsliste aktuell bleibt.',
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
      title: 'Ein medizinisches Logbuch, das der ganze Staff lesen kann.',
      body: 'Verletzungen, Notizen des Arztes, Einschätzungen des Physios, Return-to-Play-Protokoll: alles ist verbunden, von der Diagnose bis zurück auf den Platz. Der Coach sieht, wo jeder Spieler steht, ohne jemanden anzurufen.',
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
      title: 'Die Belastung des Kaders, ohne jemandem hinterherzulaufen.',
      body: 'RPE, wöchentliche Belastung, ACWR, Erholung: die Spieler antworten vom Handy aus und STRIVN setzt die Woche zusammen. Sie kommen am Montag rein, und die schwachen Signale sind schon sichtbar.',
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
        tip: 'L. Moreau liegt seit 3 Wochen in Folge über 1.25 — planen Sie am Freitag ein leichteres Training.',
      },
    },

    sessions: {
      title: 'Das Training fertig, bevor Sie am Platz sind.',
      body: 'Taktiktafeln, eine Übungsbibliothek, Wochenplanung: STRIVN bringt das Training in Form, während Sie ans Spiel denken, und der KI-Assistent berücksichtigt die tatsächliche Belastung des Kaders.',
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
      title: 'Und alles andere in der wöchentlichen Routine.',
      body: 'Ein Team, unbegrenzt Spieler und Staff. Jedes Modul ist im kostenlosen Plan enthalten — nichts ist hinter einer Zahlung verschlossen.',
      items: [
        { title: 'Anwesenheit & RSVP', text: 'Antworten der Spieler werden zu einer aktuellen Coach-Ansicht, ohne von Hand zu zählen.', href: '/de/features/communication/' },
        { title: 'Medizinisches Logbuch', text: 'Verletzungen, medizinische Notizen und Return-to-Play bleiben für befugten Staff sichtbar.', href: '/de/features/medical/' },
        { title: 'Belastung & RPE', text: 'Belastung, empfundene Anstrengung und schwache Signale verbinden sich mit der realen Woche des Kaders.', href: '/de/features/training-load/' },
        { title: 'Tests & Bewertungen', text: 'Physische und technische Tests werden über die Zeit verfolgt, um echten Fortschritt zu zeigen.' },
        { title: 'Individuelle Programme', text: 'Ziele, angepasste Belastungen und spezifische Übungen bleiben mit jedem Spieler verknüpft.', href: '/de/features/player-app/' },
        { title: 'Trainings & Taktik', text: 'Trainingspläne, Taktiktafeln und Übungen bleiben mit dem Zustand des Teams verbunden.', href: '/de/features/sessions/' },
        { title: 'Spiel- & Trainingsberichte', text: 'Feedback des Staffs schafft einen Kreislauf und hält die Spielzeit sichtbar.', href: '/de/features/reports/' },
        { title: 'KI-Assistent', text: 'Berichte und der Assistent machen aus Teaminformationen Entscheidungen.' },
      ],
    },

    playerApp: {
      title: 'Ihre Spieler bekommen ihre eigene Ansicht.',
      body: 'Kalender, nächster Termin, Anwesenheitsantworten, Benachrichtigungen: jeder Spieler folgt dem Team über die native App. Und wer sie nicht installiert, antwortet trotzdem über den Link.',
      stores: 'Verfügbar für iOS und Android',
      cta: 'Die Spieler-App entdecken',
      imageAlt: 'Screenshot der STRIVN-Spieler-App: Wochenkalender mit anstehenden Terminen',
    },

    timeSaved: {
      title: 'Holen Sie sich Ihre Abende zurück.',
      body: 'Die Organisation läuft im Hintergrund. Ihnen bleibt, was zählt: der Kader, das Training, das Spiel.',
      rows: [
        { task: 'Aufstellungen & Erinnerungen', outcome: 'zentralisiert' },
        { task: 'Anwesenheit & medizinisches Logbuch', outcome: 'an einem Ort' },
        { task: 'Trainingsberichte', outcome: 'vorbereitet' },
        { task: 'Koordination des Staffs', outcome: 'für alle sichtbar' },
      ],
    },

    pricing: {
      title: 'Kostenlos zum Coachen. Kostenpflichtig, wenn der Verein wächst.',
      body: 'Der Coach-Plan ist das komplette Erlebnis für ein Team. Club-Pläne kommen für Organisationen, die mehrere Teams, Staffs und medizinische Abläufe koordinieren wollen.',
      plans: [
        {
          name: 'Coach',
          description: 'Um STRIVN in einem Team zu starten, ohne den Verein um Budget zu bitten.',
          price: '0 €',
          period: 'für immer',
          availability: 'Jetzt verfügbar',
          cta: 'Mein Team erstellen',
          featured: true,
          features: [
            '1 Team',
            'Unbegrenzt Spieler',
            'Unbegrenzt Staff',
            'Termine, Trainings und Spiele',
            'Anwesenheit, RSVP und Kommunikation',
            'Medizinisches Logbuch, Taktik, Berichte und KI-Assistent',
          ],
        },
        {
          name: 'Club',
          description: 'Um alle Teams und Staffs eines Vereins zu koordinieren.',
          price: 'Bald',
          period: '',
          availability: 'Schrittweiser Rollout',
          cta: 'Demo anfragen',
          features: [
            'Mehrere Teams',
            'Gemeinsame Spielerbasis',
            'Gemeinsamer medizinischer Staff und Koordinatoren',
            'Vereins-Dashboards und Reporting',
            'Teamübergreifende Verletzungsverfolgung',
          ],
        },
        {
          name: 'Club Pro',
          description: 'Für Organisationen, die erweiterte Einblicke wollen.',
          price: 'Bald',
          period: '',
          availability: 'Auf Anfrage',
          cta: 'Mit dem Team sprechen',
          features: [
            'Alles aus Club',
            'Erweitertes Reporting',
            'Erweiterte Analytics',
            'API-Zugriff',
            'Organisatorische Einblicke',
          ],
        },
      ],
      note: 'Die erste Zahlung kommt, wenn ein Verein mehrere Teams und Staffs in STRIVN verwalten will. Nicht, um die essenziellen Werkzeuge eines Coaches freizuschalten.',
    },

    faq: {
      title: 'Die Fragen, die wir zuerst hören.',
      body: 'Was Ihre Spieler tun müssen, wer entscheidet und wie lange die Einrichtung dauert.',
      items: [
        {
          question: 'Müssen meine Spieler eine App installieren?',
          answer:
            'Nein. Sie können über einen Link antworten, den Sie auf dem Kanal teilen, den Sie ohnehin nutzen: Web, Mobil, WhatsApp, E-Mail. Ziel ist es, Reibung zu verringern, nicht eine neue Gewohnheit aufzuzwingen.',
        },
        {
          question: 'Verliere ich die Kontrolle über mein Team?',
          answer:
            'Niemals. STRIVN bereitet die Arbeit für Sie vor, aber nichts geht raus ohne Ihre Freigabe. Sie behalten die Hand über jede Nachricht, jede Entscheidung. Es übernimmt die Organisation, Sie coachen.',
        },
        {
          question: 'Wie lange dauert der Start?',
          answer:
            'Ein paar Minuten. Sie erstellen Ihr Team, fügen Ihre Spieler hinzu und können in der ersten Woche Ihre ersten Termine, Nachrichten und Antwortlinks anlegen.',
        },
        {
          question: 'Warum ist der Coach-Plan kostenlos?',
          answer:
            'Weil ein Coach STRIVN ausprobieren und einführen können soll, ohne über den Präsidenten, den Vorstand oder den Kassenwart zu gehen. Die Zahlung beginnt, wenn der Verein mehrere Teams koordinieren will.',
        },
        {
          question: 'Funktioniert das wirklich für den Amateurfußball?',
          answer:
            'Genau dafür ist es gebaut. STRIVN ist für Coaches gemacht, die alle Hüte tragen und keinen vollen Staff hinter sich haben. Je mehr Sie allein stemmen, desto mehr Zeit gibt es Ihnen zurück.',
        },
        {
          question: 'Und wenn ich schon medizinischen Staff und einen Athletiktrainer habe?',
          answer:
            'Umso besser. Jeder bekommt seine Ansicht: der Physio sieht das medizinische Logbuch, der Athletiktrainer sieht die Belastung, der Koordinator sieht mehrere Teams. Niemand trägt neu ein, was ein Kollege schon notiert hat.',
        },
      ],
    },

    finalCta: {
      title: 'Bringen Sie Ihr Team unter ein Dach.',
      body: 'Erstellen Sie Ihr Team kostenlos — Termine, Anwesenheit, medizinisches Logbuch und Kommunikation an einem Ort, noch diese Woche.',
      primaryCta: 'Mein Team kostenlos erstellen',
      secondaryCta: 'Noch eine Frage vor dem Start?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20Frage%20vor%20dem%20Start',
    },

    footer: {
      statement: 'Zuerst der Platz. Danach die Organisation.',
      brandLine: 'STRIVN bringt die gesamte Organisation eines Teams in eine Plattform, kostenlos für Coaches.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plattform', href: '/de/#platform' },
        { label: 'Funktionen', href: '/de/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Vereine', href: '/de/clubs/' },
        { label: 'S&C-Coaches', href: '/de/sc-coaches/' },
        { label: 'Jugendteams', href: '/de/youth-teams/' },
        { label: 'Preise', href: '/de/#pricing' },
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
      credit: '© 2026 STRIVN · Kostenlos für Coaches, Vereine bald',
    },
  },

  pt: {
    meta: {
      title: 'STRIVN — A sua equipa toda, debaixo do mesmo teto',
      description:
        'Convocatórias, presenças, processo médico, carga de treino, sessões, comunicação: STRIVN reúne toda a operação de uma equipa numa só plataforma. Gratuito para treinadores, sem precisar da aprovação do clube.',
    },

    nav: {
      links: [
        { label: 'Plataforma', href: '/pt/#platform' },
        { label: 'Funcionalidades', href: '/pt/features/' },
        {
          label: 'Soluções',
          children: [
            { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
            { label: 'Clubes', href: '/pt/clubs/' },
            { label: 'Equipas de formação', href: '/pt/youth-teams/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Preços', href: '/pt/#pricing' },
        { label: 'FAQ', href: '/pt/#faq' },
      ],
      cta: 'Começar',
    },

    hero: {
      claim: 'Criado por treinadores e jogadores — para o staff e as equipas',
      title: 'A sua equipa toda,',
      titleAccent: 'debaixo do mesmo teto.',
      lede: 'WhatsApp, folhas de cálculo, notas em papel, memória: a semana de um treinador está espalhada por todo o lado. STRIVN reúne convocatórias, presenças, processo médico, carga de treino e sessões numa só plataforma partilhada por todo o staff.',
      primaryCta: 'Começar gratuitamente',
      secondaryCta: 'Ver a plataforma',
      reassurance: 'Gratuito para uma equipa · sem aprovação do clube · pronto em minutos',
      stage: {
        ariaLabel:
          'Animação: as mensagens, ficheiros e notas dispersas de um treinador convergem num único painel STRIVN que mostra o estado da equipa.',
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
            { label: 'Médico', value: 'T. Mendes — reatletização', tone: 'watch' },
            { label: 'Carga e RPE', value: 'ACWR 1.12 · plantel estável', tone: 'ok' },
            { label: 'Sessão', value: 'Quinta-feira 20h · bloco de pressão', tone: 'info' },
            { label: 'Jogo', value: 'Domingo 15h · plantel confirmado', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Ver em ação',
      title: 'A plataforma inteira, em dois minutos.',
      sub: 'Uma visita guiada à forma como STRIVN junta convocatórias, presenças, processo médico e carga de treino num espaço de trabalho partilhado por todo o staff.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Reproduzir a apresentação do produto',
      ariaLabel: 'Vídeo de apresentação do produto STRIVN',
    },

    reality: {
      title: 'Treinar é apenas uma parte do trabalho.',
      body: 'Terça-feira, 22h47, e o trabalho invisível continua: perseguir os jogadores que não responderam, atualizar o registo médico, reintroduzir as presenças, informar o fisioterapeuta. Seis sítios diferentes, zero visão de conjunto.',
      scattered: [
        'O grupo de WhatsApp',
        'A folha de presenças',
        'As notas médicas',
        'O caderno de RPE',
        'Os esquemas da sessão',
        'A memória do treinador',
      ],
      resolve: 'Uma só plataforma.',
    },

    communication: {
      title: 'A convocatória que se trata sozinha.',
      body: 'Cada evento gera a sua mensagem e o seu link de resposta. Partilha-o no canal que o grupo já usa — WhatsApp, email, a aplicação — e STRIVN recolhe as respostas para manter a folha de presenças atualizada.',
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
      title: 'Um registo médico que todo o staff consegue ler.',
      body: 'Lesões, notas do médico, avaliações do fisioterapeuta, protocolo de regresso à competição: está tudo ligado, do diagnóstico até ao regresso ao campo. O treinador vê em que ponto está cada jogador sem ter de telefonar a ninguém.',
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
      title: 'A carga do plantel, sem andar atrás de ninguém.',
      body: 'RPE, carga semanal, ACWR, recuperação: os jogadores respondem do telemóvel e STRIVN monta a semana. Chega à segunda-feira com os sinais fracos já visíveis.',
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
        tip: 'L. Moreau está acima de 1.25 há 3 semanas seguidas — planeie uma sessão mais leve na sexta-feira.',
      },
    },

    sessions: {
      title: 'A sessão pronta antes de chegar ao campo.',
      body: 'Quadros táticos, biblioteca de exercícios, planeamento da semana: STRIVN dá forma à sessão enquanto pensa no jogo, e o assistente de IA tem em conta a carga real do plantel.',
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
      title: 'E tudo o resto da rotina semanal.',
      body: 'Uma equipa, jogadores e staff ilimitados. Todos os módulos estão incluídos no plano gratuito — nada fica bloqueado atrás de um pagamento.',
      items: [
        { title: 'Presenças e confirmações', text: 'As respostas dos jogadores tornam-se uma visão atualizada para o treinador, sem contar à mão.', href: '/pt/features/communication/' },
        { title: 'Registo médico', text: 'Lesões, notas médicas e regresso à competição ficam visíveis para o staff autorizado.', href: '/pt/features/medical/' },
        { title: 'Carga e RPE', text: 'Carga, esforço percebido e sinais fracos ligam-se à semana real do plantel.', href: '/pt/features/training-load/' },
        { title: 'Testes e avaliações', text: 'Testes físicos e técnicos são acompanhados ao longo do tempo para mostrar a progressão real.' },
        { title: 'Programas individuais', text: 'Objetivos, cargas adaptadas e exercícios específicos ficam ligados a cada jogador.', href: '/pt/features/player-app/' },
        { title: 'Sessões e tática', text: 'Planos de sessão, quadros táticos e exercícios ficam ligados ao estado da equipa.', href: '/pt/features/sessions/' },
        { title: 'Relatórios de jogo e sessão', text: 'O feedback do staff cria um ciclo e mantém o tempo de jogo visível.', href: '/pt/features/reports/' },
        { title: 'Assistente de IA', text: 'Os relatórios e o assistente transformam a informação da equipa em decisões.' },
      ],
    },

    playerApp: {
      title: 'Os seus jogadores têm a sua própria vista.',
      body: 'Agenda, próximo evento, respostas de presença, notificações: cada jogador acompanha a equipa a partir da aplicação nativa. E quem não a instalar continua a responder pelo link.',
      stores: 'Disponível para iOS e Android',
      cta: 'Descobrir a app do jogador',
      imageAlt: 'Captura de ecrã da app STRIVN Player: agenda semanal com os próximos eventos',
    },

    timeSaved: {
      title: 'Recupere os seus serões.',
      body: 'A operação corre em segundo plano. Fica com o que interessa: o plantel, a sessão, o jogo.',
      rows: [
        { task: 'Convocatórias e lembretes', outcome: 'centralizados' },
        { task: 'Presenças e registo médico', outcome: 'no mesmo sítio' },
        { task: 'Relatórios de sessão', outcome: 'preparados' },
        { task: 'Coordenação do staff', outcome: 'visível para todos' },
      ],
    },

    pricing: {
      title: 'Gratuito para treinar. Pago quando o clube cresce.',
      body: 'O plano Coach é a experiência completa para uma equipa. Os planos Clube estão a chegar para as organizações que querem coordenar várias equipas, staffs e fluxos médicos.',
      plans: [
        {
          name: 'Coach',
          description: 'Para lançar STRIVN numa equipa sem pedir orçamento ao clube.',
          price: '0 €',
          period: 'para sempre',
          availability: 'Disponível já',
          cta: 'Criar a minha equipa',
          featured: true,
          features: [
            '1 equipa',
            'Jogadores ilimitados',
            'Staff ilimitado',
            'Eventos, sessões e jogos',
            'Presenças, confirmações e comunicação',
            'Registo médico, tática, relatórios e assistente de IA',
          ],
        },
        {
          name: 'Clube',
          description: 'Para coordenar todas as equipas e staffs de um clube.',
          price: 'Em breve',
          period: '',
          availability: 'Lançamento progressivo',
          cta: 'Pedir uma demonstração',
          features: [
            'Várias equipas',
            'Base de jogadores partilhada',
            'Staff médico e coordenadores partilhados',
            'Painéis e relatórios do clube',
            'Acompanhamento de lesões entre equipas',
          ],
        },
        {
          name: 'Clube Pro',
          description: 'Para organizações que procuram análises avançadas.',
          price: 'Em breve',
          period: '',
          availability: 'Sob pedido',
          cta: 'Falar com a equipa',
          features: [
            'Tudo o que está no Clube',
            'Relatórios avançados',
            'Analítica avançada',
            'Acesso à API',
            'Indicadores para a organização',
          ],
        },
      ],
      note: 'O primeiro pagamento surge quando um clube quer gerir várias equipas e staffs em STRIVN. Não para desbloquear as ferramentas essenciais de um treinador.',
    },

    faq: {
      title: 'As perguntas que nos fazem primeiro.',
      body: 'O que os seus jogadores têm de fazer, quem decide e quanto tempo demora a preparar.',
      items: [
        {
          question: 'Os meus jogadores têm de instalar uma aplicação?',
          answer:
            'Não. Podem responder por um link partilhado no canal que já usa: web, telemóvel, WhatsApp, email. O objetivo é reduzir o atrito, não impor um hábito novo.',
        },
        {
          question: 'Perco o controlo da minha equipa?',
          answer:
            'Nunca. STRIVN prepara o trabalho por si, mas nada sai sem a sua aprovação. Mantém a mão em cada mensagem e em cada decisão. A plataforma trata da operação, o treinador treina.',
        },
        {
          question: 'Quanto tempo demora a começar?',
          answer:
            'Alguns minutos. Cria a sua equipa, adiciona os jogadores e já pode criar os primeiros eventos, mensagens e links de resposta na primeira semana.',
        },
        {
          question: 'Porque é que o plano Coach é gratuito?',
          answer:
            'Porque um treinador deve poder experimentar e adotar STRIVN sem passar pelo presidente, pela direção ou pelo tesoureiro. O pagamento começa quando o clube quer coordenar várias equipas.',
        },
        {
          question: 'Funciona mesmo para o futebol amador?',
          answer:
            'Foi feito para isso. STRIVN foi pensado para treinadores que fazem tudo e não têm um staff completo por trás. Quanto mais gere sozinho, mais tempo lhe devolve.',
        },
        {
          question: 'E se já tiver staff médico e preparador físico?',
          answer:
            'Ainda melhor. Cada um tem a sua vista: o fisioterapeuta vê o registo médico, o preparador físico vê a carga, o coordenador vê várias equipas. Ninguém volta a introduzir o que um colega já registou.',
        },
      ],
    },

    finalCta: {
      title: 'Ponha a sua equipa debaixo do mesmo teto.',
      body: 'Crie a sua equipa gratuitamente — eventos, presenças, registo médico e comunicação no mesmo sítio já esta semana.',
      primaryCta: 'Criar a minha equipa gratuitamente',
      secondaryCta: 'Alguma dúvida antes de começar?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20questao%20antes%20de%20comecar',
    },

    footer: {
      statement: 'O campo primeiro. A operação depois.',
      brandLine: 'STRIVN reúne toda a operação de uma equipa numa só plataforma, gratuita para treinadores.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plataforma', href: '/pt/#platform' },
        { label: 'Funcionalidades', href: '/pt/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Clubes', href: '/pt/clubs/' },
        { label: 'Preparadores físicos', href: '/pt/sc-coaches/' },
        { label: 'Equipas de formação', href: '/pt/youth-teams/' },
        { label: 'Preços', href: '/pt/#pricing' },
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
      credit: '© 2026 STRIVN · Gratuito para treinadores, clubes em breve',
    },
  },

  es: {
    meta: {
      title: 'STRIVN — Todo tu equipo, bajo un mismo techo',
      description:
        'Convocatorias, asistencias, historial médico, carga de entrenamiento, sesiones, comunicación: STRIVN reúne toda la operativa de un equipo en una sola plataforma. Gratis para entrenadores, sin necesidad de aprobación del club.',
    },

    nav: {
      links: [
        { label: 'Plataforma', href: '/es/#platform' },
        { label: 'Funcionalidades', href: '/es/features/' },
        {
          label: 'Soluciones',
          children: [
            { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
            { label: 'Clubes', href: '/es/clubs/' },
            { label: 'Fútbol base', href: '/es/youth-teams/' },
          ],
        },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Precios', href: '/es/#pricing' },
        { label: 'FAQ', href: '/es/#faq' },
      ],
      cta: 'Empezar',
    },

    hero: {
      claim: 'Creado por entrenadores y jugadores — para cuerpos técnicos y equipos',
      title: 'Todo tu equipo,',
      titleAccent: 'bajo un mismo techo.',
      lede: 'WhatsApp, hojas de cálculo, notas en papel, memoria: la semana de un entrenador está repartida por todas partes. STRIVN reúne convocatorias, asistencias, historial médico, carga de entrenamiento y sesiones en una sola plataforma que comparte todo el cuerpo técnico.',
      primaryCta: 'Empezar gratis',
      secondaryCta: 'Ver la plataforma',
      reassurance: 'Gratis para un equipo · sin aprobación del club · listo en minutos',
      stage: {
        ariaLabel:
          'Animación: los mensajes, archivos y notas dispersos de un entrenador convergen en un único panel STRIVN que muestra el estado del equipo.',
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
            { label: 'Médico', value: 'T. Mendes — readaptación', tone: 'watch' },
            { label: 'Carga y RPE', value: 'ACWR 1.12 · plantilla estable', tone: 'ok' },
            { label: 'Sesión', value: 'Jueves 20:00 · bloque de presión', tone: 'info' },
            { label: 'Partido', value: 'Domingo 15:00 · convocatoria cerrada', tone: 'info' },
          ],
        },
      },
    },

    overview: {
      eyebrow: 'Verlo en acción',
      title: 'Toda la plataforma, en dos minutos.',
      sub: 'Un recorrido guiado por cómo STRIVN junta convocatorias, asistencias, historial médico y carga de entrenamiento en un espacio de trabajo que comparte todo el cuerpo técnico.',
      srcMp4: '/videos/overview-en.mp4',
      poster: '/posters/overview-en.jpg',
      duration: '2 min',
      playLabel: 'Reproducir la presentación del producto',
      ariaLabel: 'Vídeo de presentación del producto STRIVN',
    },

    reality: {
      title: 'Entrenar es solo una parte del trabajo.',
      body: 'Martes, 22:47, y el trabajo invisible sigue: perseguir a los jugadores que no han contestado, actualizar el parte médico, volver a meter las asistencias, informar al fisio. Seis sitios distintos, cero visión de conjunto.',
      scattered: [
        'El grupo de WhatsApp',
        'La hoja de asistencias',
        'Las notas médicas',
        'La libreta de RPE',
        'Los esquemas de la sesión',
        'La memoria del entrenador',
      ],
      resolve: 'Una sola plataforma.',
    },

    communication: {
      title: 'La convocatoria que se gestiona sola.',
      body: 'Cada evento genera su mensaje y su enlace de respuesta. Lo compartes en el canal que tu grupo ya usa —WhatsApp, email, la app— y STRIVN recoge las respuestas para mantener la lista de asistencias al día.',
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
      title: 'Un parte médico que todo el cuerpo técnico puede leer.',
      body: 'Lesiones, notas del médico, valoraciones del fisio, protocolo de vuelta a la competición: todo está conectado, del diagnóstico al regreso al campo. El entrenador ve en qué punto está cada jugador sin llamar a nadie.',
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
      title: 'La carga de la plantilla, sin perseguir a nadie.',
      body: 'RPE, carga semanal, ACWR, recuperación: los jugadores responden desde el móvil y STRIVN monta la semana. Llegas al lunes con las señales débiles ya a la vista.',
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
        tip: 'L. Moreau lleva 3 semanas seguidas por encima de 1.25 — plantea una sesión más ligera el viernes.',
      },
    },

    sessions: {
      title: 'La sesión lista antes de llegar al campo.',
      body: 'Pizarras tácticas, biblioteca de ejercicios, planificación semanal: STRIVN da forma a la sesión mientras piensas en el partido, y el asistente de IA tiene en cuenta la carga real de la plantilla.',
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
      title: 'Y todo lo demás de la rutina semanal.',
      body: 'Un equipo, jugadores y cuerpo técnico ilimitados. Todos los módulos están incluidos en el plan gratuito — nada queda bloqueado tras un pago.',
      items: [
        { title: 'Asistencias y confirmaciones', text: 'Las respuestas de los jugadores se convierten en una vista al día para el entrenador, sin contar a mano.', href: '/es/features/communication/' },
        { title: 'Parte médico', text: 'Lesiones, notas médicas y vuelta a la competición quedan visibles para el personal autorizado.', href: '/es/features/medical/' },
        { title: 'Carga y RPE', text: 'Carga, esfuerzo percibido y señales débiles se conectan con la semana real de la plantilla.', href: '/es/features/training-load/' },
        { title: 'Tests y valoraciones', text: 'Los tests físicos y técnicos se siguen en el tiempo para mostrar la progresión real.' },
        { title: 'Programas individuales', text: 'Objetivos, cargas adaptadas y ejercicios específicos quedan ligados a cada jugador.', href: '/es/features/player-app/' },
        { title: 'Sesiones y táctica', text: 'Planes de sesión, pizarras tácticas y ejercicios quedan conectados con el estado del equipo.', href: '/es/features/sessions/' },
        { title: 'Informes de partido y sesión', text: 'El feedback del cuerpo técnico cierra el círculo y mantiene visibles los minutos de juego.', href: '/es/features/reports/' },
        { title: 'Asistente de IA', text: 'Los informes y el asistente convierten la información del equipo en decisiones.' },
      ],
    },

    playerApp: {
      title: 'Tus jugadores tienen su propia vista.',
      body: 'Agenda, próximo evento, respuestas de asistencia, notificaciones: cada jugador sigue al equipo desde la app nativa. Y quien no la instale sigue respondiendo por el enlace.',
      stores: 'Disponible en iOS y Android',
      cta: 'Descubrir la app del jugador',
      imageAlt: 'Captura de la app STRIVN Player: agenda semanal con los próximos eventos',
    },

    timeSaved: {
      title: 'Recupera tus tardes.',
      body: 'La operativa corre en segundo plano. Te quedas con lo que importa: la plantilla, la sesión, el partido.',
      rows: [
        { task: 'Convocatorias y recordatorios', outcome: 'centralizados' },
        { task: 'Asistencias y parte médico', outcome: 'en un mismo sitio' },
        { task: 'Informes de sesión', outcome: 'preparados' },
        { task: 'Coordinación del cuerpo técnico', outcome: 'visible para todos' },
      ],
    },

    pricing: {
      title: 'Gratis para entrenar. De pago cuando el club crece.',
      body: 'El plan Coach es la experiencia completa para un equipo. Los planes Club llegan para las organizaciones que quieren coordinar varios equipos, cuerpos técnicos y flujos médicos.',
      plans: [
        {
          name: 'Coach',
          description: 'Para lanzar STRIVN en un equipo sin pedirle presupuesto al club.',
          price: '0 €',
          period: 'para siempre',
          availability: 'Disponible ya',
          cta: 'Crear mi equipo',
          featured: true,
          features: [
            '1 equipo',
            'Jugadores ilimitados',
            'Cuerpo técnico ilimitado',
            'Eventos, sesiones y partidos',
            'Asistencias, confirmaciones y comunicación',
            'Parte médico, táctica, informes y asistente de IA',
          ],
        },
        {
          name: 'Club',
          description: 'Para coordinar todos los equipos y cuerpos técnicos de un club.',
          price: 'Pronto',
          period: '',
          availability: 'Despliegue progresivo',
          cta: 'Solicitar una demo',
          features: [
            'Varios equipos',
            'Base de jugadores compartida',
            'Personal médico y coordinadores compartidos',
            'Paneles e informes de club',
            'Seguimiento de lesiones entre equipos',
          ],
        },
        {
          name: 'Club Pro',
          description: 'Para organizaciones que buscan análisis avanzados.',
          price: 'Pronto',
          period: '',
          availability: 'Bajo petición',
          cta: 'Hablar con el equipo',
          features: [
            'Todo lo de Club',
            'Informes avanzados',
            'Analítica avanzada',
            'Acceso a la API',
            'Indicadores para la organización',
          ],
        },
      ],
      note: 'El primer pago llega cuando un club quiere gestionar varios equipos y cuerpos técnicos en STRIVN. No para desbloquear las herramientas esenciales de un entrenador.',
    },

    faq: {
      title: 'Las preguntas que nos hacen primero.',
      body: 'Qué tienen que hacer tus jugadores, quién decide y cuánto se tarda en ponerlo en marcha.',
      items: [
        {
          question: '¿Mis jugadores tienen que instalar una app?',
          answer:
            'No. Pueden responder desde un enlace compartido en el canal que ya usas: web, móvil, WhatsApp, email. La idea es reducir la fricción, no imponer un hábito nuevo.',
        },
        {
          question: '¿Pierdo el control de mi equipo?',
          answer:
            'Nunca. STRIVN te prepara el trabajo, pero nada sale sin tu aprobación. Mantienes la mano en cada mensaje y en cada decisión. Él se encarga de la operativa, tú entrenas.',
        },
        {
          question: '¿Cuánto se tarda en empezar?',
          answer:
            'Unos minutos. Creas tu equipo, añades a tus jugadores y ya puedes crear los primeros eventos, mensajes y enlaces de respuesta en la primera semana.',
        },
        {
          question: '¿Por qué el plan Coach es gratis?',
          answer:
            'Porque un entrenador debería poder probar y adoptar STRIVN sin pasar por el presidente, la junta directiva o el tesorero. El pago empieza cuando el club quiere coordinar varios equipos.',
        },
        {
          question: '¿Funciona de verdad para el fútbol amateur?',
          answer:
            'Está hecho para eso. STRIVN está pensado para entrenadores que lo hacen todo y no tienen un cuerpo técnico completo detrás. Cuanto más gestionas solo, más tiempo te devuelve.',
        },
        {
          question: '¿Y si ya tengo personal médico y preparador físico?',
          answer:
            'Mejor aún. Cada uno tiene su vista: el fisio ve el parte médico, el preparador físico ve la carga, el coordinador ve varios equipos. Nadie vuelve a introducir lo que un compañero ya ha anotado.',
        },
      ],
    },

    finalCta: {
      title: 'Pon a tu equipo bajo un mismo techo.',
      body: 'Crea tu equipo gratis — eventos, asistencias, parte médico y comunicación en un mismo sitio esta misma semana.',
      primaryCta: 'Crear mi equipo gratis',
      secondaryCta: '¿Alguna duda antes de empezar?',
      secondaryHref: 'mailto:hello@strivn.net?subject=STRIVN%20-%20duda%20antes%20de%20empezar',
    },

    footer: {
      statement: 'El campo primero. La operativa después.',
      brandLine: 'STRIVN reúne toda la operativa de un equipo en una sola plataforma, gratis para entrenadores.',
      email: 'hello@strivn.net',
      links: [
        { label: 'Plataforma', href: '/es/#platform' },
        { label: 'Funcionalidades', href: '/es/features/' },
        { label: 'Blog', href: '/fr/blog/' },
        { label: 'Clubes', href: '/es/clubs/' },
        { label: 'Preparadores físicos', href: '/es/sc-coaches/' },
        { label: 'Fútbol base', href: '/es/youth-teams/' },
        { label: 'Precios', href: '/es/#pricing' },
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
      credit: '© 2026 STRIVN · Gratis para entrenadores, clubes muy pronto',
    },
  },
};
