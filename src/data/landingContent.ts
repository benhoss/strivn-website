export type Locale = 'en' | 'fr' | 'nl' | 'de';

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
};
