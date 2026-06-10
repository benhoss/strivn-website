export type Locale = 'en' | 'fr';

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
    links: Array<{ label: string; href: string }>;
    cta: string;
  };

  hero: {
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
    items: Array<{ title: string; text: string }>;
  };

  playerApp: {
    title: string;
    body: string;
    stores: string;
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
    credit: string;
  };
};

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
        { label: 'Plateforme', href: '#platform' },
        { label: 'Tarifs', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Commencer',
    },

    hero: {
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
        { title: 'Présences & RSVP', text: 'Les réponses des joueurs deviennent une vue coach à jour, sans recompter à la main.' },
        { title: 'Infirmerie', text: 'Blessures, notes médicales et retour au jeu restent visibles pour le staff autorisé.' },
        { title: 'Charge & RPE', text: 'La charge, le ressenti et les signaux faibles se relient à la semaine réelle du groupe.' },
        { title: 'Tests & évaluations', text: 'Les tests physiques et techniques sont suivis dans le temps pour voir la progression réelle.' },
        { title: 'Programmes individuels', text: 'Objectifs, charges adaptées et exercices spécifiques restent reliés à chaque joueur.' },
        { title: 'Séances & tactique', text: 'Plans de séance, tableaux tactiques et exercices restent connectés à l’état de l’équipe.' },
        { title: 'Rapports de match et de séance', text: 'Les retours du staff créent une boucle de feedback et gardent les temps de jeu visibles.' },
        { title: 'Assistant IA', text: 'Les comptes-rendus et l’assistant transforment les informations d’équipe en décisions.' },
      ],
    },

    playerApp: {
      title: 'Vos joueurs ont leur propre vue.',
      body: 'Agenda, prochain événement, réponses de présence, notifications : chaque joueur suit l’équipe depuis l’app native. Et ceux qui ne l’installent pas répondent quand même par le lien.',
      stores: 'Disponible sur iOS et Android',
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
      secondaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20-%20question%20avant%20de%20d%C3%A9marrer',
    },

    footer: {
      statement: 'Le terrain d’abord. L’intendance ensuite.',
      brandLine: 'STRIVN réunit l’intendance complète d’une équipe dans une seule plateforme, gratuite pour les coaches.',
      email: 'hello@strivn.ai',
      links: [
        { label: 'Plateforme', href: '#platform' },
        { label: 'Tarifs', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
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
        { label: 'Platform', href: '#platform' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Get started',
    },

    hero: {
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
        { title: 'Attendance & RSVP', text: 'Player replies become an up-to-date coach view, without counting by hand.' },
        { title: 'Medical log', text: 'Injuries, medical notes and return-to-play stay visible to authorised staff.' },
        { title: 'Load & RPE', text: 'Load, perceived effort and weak signals connect to the squad’s actual week.' },
        { title: 'Tests & assessments', text: 'Physical and technical tests are tracked over time to show real progression.' },
        { title: 'Individual programs', text: 'Goals, adapted loads and specific drills stay linked to each player.' },
        { title: 'Sessions & tactics', text: 'Session plans, tactical boards and drills stay connected to the team’s state.' },
        { title: 'Match & session reports', text: 'Staff feedback creates a loop and keeps playing time visible.' },
        { title: 'AI assistant', text: 'Reports and the assistant turn team information into decisions.' },
      ],
    },

    playerApp: {
      title: 'Your players get their own view.',
      body: 'Agenda, next event, attendance replies, notifications: every player follows the team from the native app. And those who don’t install it still reply through the link.',
      stores: 'Available on iOS and Android',
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
      secondaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20-%20question%20before%20starting',
    },

    footer: {
      statement: 'The pitch first. The operations second.',
      brandLine: 'STRIVN brings a team’s entire operations into one platform, free for coaches.',
      email: 'hello@strivn.ai',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      credit: '© 2026 STRIVN · Free for coaches, clubs coming soon',
    },
  },
};
