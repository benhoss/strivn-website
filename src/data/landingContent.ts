export type Locale = 'en' | 'fr';

type Bubble = { direction: 'in' | 'out'; text: string; time: string; unread?: boolean };

type LandingContent = {
  meta: { title: string; description: string };
  nav: {
    reality: string;
    staff: string;
    communication: string;
    medical: string;
    load: string;
    sessions: string;
    pricing: string;
  };
  ctaMini: string;

  hero: {
    title: string;
    titleAccent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    device: {
      url: string;
      step1: { label: string; quote: string; echo: string };
      step2: { label: string; pills: string[]; explain: string; list: string[] };
      step3: {
        label: string;
        badge: string;
        title: string;
        metrics: Array<{ label: string; value: string }>;
        approve: string;
        reject: string;
      };
      step4: {
        label: string;
        phoneName: string;
        phoneSub: string;
        phoneTime: string;
        phoneAvatar: string;
        bubbles: Bubble[];
        wellness: { label: string; value: string; note: string };
      };
    };
  };

  reality: {
    eyebrow: string;
    title: string;
    body: string;
    tasks: string[];
    phone: {
      title: string;
      name: string;
      sub: string;
      time: string;
      bubbles: Bubble[];
    };
    resolve: { lead: string; line: string };
  };

  staff: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Array<{ tag: string; name: string; role: string; does: string[] }>;
    beforeAfter: {
      eyebrow: string;
      beforeLabel: string;
      afterLabel: string;
      rows: Array<{ task: string; before: string; after: string }>;
    };
  };

  communication: {
    eyebrow: string;
    title: string;
    body: string;
    steps: Array<{ n: string; text: string }>;
    channels: Array<{ label: string; status: string }>;
    phone: {
      name: string;
      sub: string;
      time: string;
      bubbles: Bubble[];
      wellness: { label: string; value: string; note: string };
    };
    template: {
      eyebrow: string;
      title: string;
      lines: string[];
      action: string;
    };
    caption: string;
  };

  medical: {
    eyebrow: string;
    title: string;
    body: string;
    features: string[];
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
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    features: string[];
    /** UI labels for the load-tracking mock — kept separate so we can translate. */
    labels: {
      tableTitle: string;
      colPlayer: string;
      colMon: string;
      colWed: string;
      colFri: string;
      colLoad: string;
      colAcwr: string;
      colState: string;
      pillOk: string;
      pillWatch: string;
      pillRisk: string;
      kpiRpe: string;
      kpiLoad: string;
      kpiAcwr: string;
      kpiRecovery: string;
      tipLabel: string;
    };
    /**
     * Mock data for the load-tracking UI: a 7-day rolling view of the squad.
     */
    snapshot: {
      week: string;
      weekRpeAvg: number;
      weekLoad: number;
      acwr: number;
      recovery: number;
      players: Array<{ name: string; rpeMon: number; rpeWed: number; rpeFri: number; load: number; acwr: number; zone: 'green' | 'amber' | 'red' }>;
      tip: string;
    };
  };

  sessions: {
    eyebrow: string;
    title: string;
    body: string;
    features: string[];
    board: {
      eyebrow: string;
      title: string;
      stamp: string;
      phases: Array<{ label: string; detail: string }>;
    };
  };

  timeSaved: {
    eyebrow: string;
    title: string;
    body: string;
    stat: string;
    statLabel: string;
    breakdown: Array<{ task: string; hours: string }>;
    footer: string;
  };

  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    plans: Array<{
      name: string;
      description: string;
      price: string;
      period: string;
      badge?: string;
      availability: string;
      cta: string;
      features: string[];
    }>;
    cta: string;
    href: string;
    note: string;
  };

  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ question: string; answer: string }>;
  };

  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };

  footer: {
    brandLine: string;
    email: string;
    productLabel: string;
    product: Array<{ label: string; href: string }>;
    staffLabel: string;
    staff: string[];
    contactLabel: string;
    credit: string;
  };
};

const APP_URL = 'https://app.strivn.net';

export const landingContent: Record<Locale, LandingContent> = {
  fr: {
    meta: {
      title: 'STRIVN | La plateforme d’intendance gratuite des coaches',
      description:
        "STRIVN centralise l'intendance d'une équipe : événements, présences, infirmerie, tactique, rapports, assistant IA, communications et RSVP. Gratuit pour les coaches.",
    },
    nav: {
      reality: 'Le quotidien',
      staff: 'La plateforme',
      communication: 'Communication',
      medical: "L'infirmerie",
      load: 'La charge',
      sessions: 'Les séances',
      pricing: 'Tarifs',
    },
    ctaMini: 'Commencer gratuitement',

    hero: {
      title: 'Récupérez vos soirées.',
      titleAccent: 'Coachez le lendemain.',
      body:
        "STRIVN reprend l'intendance de votre staff technique — convocations, présences, charge, RPE, infirmerie, communication. Coach, préparateur physique et kiné partagent la même plateforme, le même groupe, les mêmes données. Gratuit pour les coaches.",
      primaryCta: 'Commencer gratuitement',
      secondaryCta: 'Voir la plateforme',
      device: {
        url: 'app.strivn.net · Saison 2026-27',
        step1: {
          label: 'Vous créez l’événement',
          quote:
            '"Entraînement jeudi 20h. Prépare le message, le lien RSVP et garde les réponses au même endroit."',
          echo: "C'est prêt. Je reprends le dernier modèle utilisé pour un entraînement.",
        },
        step2: {
          label: 'STRIVN centralise',
          pills: ['18 joueurs', '4 canaux', '1 lien RSVP'],
          explain:
            'Le message, la présence et les infos joueur sont reliés au même événement.',
          list: [
            'Modèle entraînement chargé',
            'Lien RSVP unique créé',
            'Présences et commentaires suivis',
            'Infirmerie mise en évidence si besoin',
          ],
        },
        step3: {
          label: 'Vous partagez',
          badge: 'Gratuit',
          title: 'Copier le message ou l’envoyer via le canal de votre choix.',
          metrics: [
            { label: 'Web', value: 'lien' },
            { label: 'App', value: 'push' },
            { label: 'Groupe', value: 'WhatsApp' },
          ],
          approve: 'Copier le message',
          reject: 'Modifier',
        },
        step4: {
          label: 'Les réponses deviennent de l’insight',
          phoneName: 'STRIVN',
          phoneSub: 'Agenda & métriques',
          phoneTime: '14:32',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Entraînement jeudi 20h. Confirme ici : strivn.net/rsvp/abc123', time: '14:30' },
            { direction: 'out', text: 'Présent', time: '14:31' },
            { direction: 'out', text: 'Absent, douleur ischio depuis dimanche', time: '14:32' },
            { direction: 'in', text: 'Noté. Le coach et le kiné voient l’info.', time: '14:32' },
          ],
          wellness: { label: 'Insight', value: '16/18', note: '2 absents · 1 signal médical' },
        },
      },
    },

    reality: {
      eyebrow: 'Le quotidien du coach',
      title: "Coacher n'est qu'une partie du métier.",
      body:
        "Entre deux séances, le travail de l'ombre commence. Relancer ceux qui n'ont pas répondu, tenir l'infirmerie, briefer le staff, préparer la séance. C'est là que partent vos soirées.",
      tasks: [
        "Relancer ceux qui n'ont pas répondu",
        'Faire les présences à chaque séance',
        "Tenir l'infirmerie à jour",
        'Coordonner kiné, prépa et adjoints',
        'Préparer les comptes-rendus de séance',
        "Caler la semaine d'entraînement",
      ],
      phone: {
        title: 'Mardi, 22h47',
        name: 'Équipe · Seniors A',
        sub: '23 membres',
        time: '22:47',
        bubbles: [
          { direction: 'in', text: 'Coach je serai en retard demain 🙏', time: '22:31' },
          { direction: 'in', text: "Qqn a récupéré les plots ?", time: '22:38' },
          { direction: 'in', text: 'Ah désolé j’avais pas vu le message', time: '22:40' },
          { direction: 'in', text: 'On joue à quelle heure dimanche ?', time: '22:44', unread: true },
          { direction: 'in', text: 'Mon genou est encore chaud, je sais pas', time: '22:47', unread: true },
        ],
      },
      resolve: {
        lead: "STRIVN s'occupe de toute l'intendance.",
        line: "Tout ce qui n'est pas le terrain tourne en arrière-plan. Vous ne gardez que ce qui compte : le groupe, la séance, le match.",
      },
    },

    staff: {
      eyebrow: 'La plateforme coach',
      title: 'Tout le quotidien de l’équipe au même endroit.',
      body:
        "STRIVN réunit ce que vous gérez déjà partout ailleurs : événements, joueurs, présences, infirmerie, tactique, rapports, programmes individuels et assistant IA. Une seule surface pour gagner du temps et voir plus clair.",
      pillars: [
        {
          tag: 'Équipe',
          name: 'Gestion joueurs',
          role: 'Tout votre groupe, sans limite',
          does: [
            'Joueurs illimités',
            'Staff illimité',
            'Présences et disponibilités suivies',
          ],
        },
        {
          tag: 'Opérations',
          name: 'Événements & séances',
          role: 'La semaine préparée plus vite',
          does: [
            'Entraînements, matchs, réunions',
            'Modèles de communication',
            'Liens RSVP par événement',
          ],
        },
        {
          tag: 'Médical',
          name: 'Infirmerie & programmes',
          role: 'Les signaux importants ne se perdent plus',
          does: [
            'Notes médicales',
            'Programmes individuels',
            'Retour au jeu visible par le staff',
          ],
        },
        {
          tag: 'Insight',
          name: 'Rapports & assistant IA',
          role: 'Les informations deviennent exploitables',
          does: [
            'Comptes-rendus',
            'Tableaux tactiques',
            'Assistant IA intégré',
          ],
        },
      ],
      beforeAfter: {
        eyebrow: 'Avant / Après',
        beforeLabel: 'Sans STRIVN',
        afterLabel: 'Avec STRIVN',
        rows: [
          {
            task: 'Convocations',
            before: 'Un message à refaire à chaque fois',
            after: 'Un modèle chargé, un RSVP créé',
          },
          {
            task: 'Présences',
            before: 'Vous comptez les réponses à la main',
            after: 'Pointées et à jour en temps réel',
          },
          {
            task: "L'infirmerie",
            before: 'Éparpillée entre SMS et mémoire',
            after: 'Au même endroit, visible par le staff',
          },
          {
            task: 'Les infos',
            before: "Devant l'Excel",
            after: 'Centralisées, prêtes à analyser',
          },
        ],
      },
    },

    communication: {
      eyebrow: 'Communication',
      title: 'Un message. Tous vos canaux.',
      body:
        "Chaque événement peut générer son message, son modèle et son lien RSVP. Vous le partagez depuis la web app, l'app mobile native (iOS + Android), WhatsApp, email ou le canal que votre groupe utilise déjà. STRIVN collecte les réponses et met l'équipe à jour.",
      steps: [
        { n: '01', text: 'STRIVN charge le dernier modèle utilisé pour ce type d’événement' },
        { n: '02', text: 'Vous ajustez le message et choisissez comment le partager' },
        { n: '03', text: 'Les joueurs répondent via le lien RSVP, sans compte à créer' },
      ],
      channels: [
        { label: 'Web', status: 'copier & partager' },
        { label: 'App', status: 'iOS + Android' },
        { label: 'WhatsApp', status: 'groupe existant' },
        { label: 'Email', status: 'staff & parents' },
      ],
      phone: {
        name: 'STRIVN',
        sub: 'Communication événement',
        time: '18:05',
        bubbles: [
          { direction: 'in', text: 'Entraînement jeudi 20h au terrain 2. Confirme ta présence.', time: '18:02' },
          { direction: 'in', text: 'RSVP : strivn.net/rsvp/abc123', time: '18:02' },
          { direction: 'out', text: 'Présent', time: '18:03' },
          { direction: 'out', text: 'Incertain, genou sensible', time: '18:05' },
        ],
        wellness: { label: 'Tableau coach', value: '14 présents', note: '1 incertain · signal genou' },
      },
      template: {
        eyebrow: 'Modèle réutilisable',
        title: 'Entraînement',
        lines: [
          'Jeudi 20h · Terrain 2',
          'Merci de confirmer ta présence.',
          '{RSVP_LINK}',
        ],
        action: 'Copier le message',
      },
      caption:
        "Le canal ne définit pas le produit. STRIVN prépare la communication, relie les réponses à l'événement et garde l'information exploitable.",
    },

    medical: {
      eyebrow: "L'infirmerie",
      title: 'Un seul endroit pour tout le staff médical.',
      body:
        "L'infirmerie, les notes du doc, les avis du kiné, les protocoles de retour au jeu : tout est relié et visible, du diagnostic au retour sur le terrain. Le coach voit où en est chaque joueur, sans appeler personne.",
      features: [
        "Historique de l'infirmerie",
        'Notes du médecin',
        'Notes du kiné',
        'Protocoles de retour au jeu',
        'Visibilité côté coach',
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
        returnValue: '10 — 12 jours',
      },
    },

    load: {
      eyebrow: 'La charge',
      title: 'Charge, RPE, fatigue.',
      titleAccent: 'Mesurés sans les chercher.',
      body:
        "RPE, charge, fatigue, récupération : STRIVN assemble les données semaine par semaine. Vous arrivez le lundi avec la charge du groupe, les signaux faibles et les joueurs à surveiller, sans avoir à relancer personne.",
      labels: {
        tableTitle: 'Charge & RPE',
        colPlayer: 'Joueur',
        colMon: 'Lun',
        colWed: 'Mer',
        colFri: 'Ven',
        colLoad: 'Charge',
        colAcwr: 'ACWR',
        colState: 'État',
        pillOk: 'OK',
        pillWatch: 'À surveiller',
        pillRisk: 'Risque',
        kpiRpe: 'RPE moyen',
        kpiLoad: 'Charge',
        kpiAcwr: 'ACWR',
        kpiRecovery: 'Récup.',
        tipLabel: 'Note prépa',
      },
      features: [
        'RPE par session, par joueur',
        'Charge hebdo et monotonie',
        'ACWR (acute:chronic workload ratio)',
        'Indicateurs de récupération',
        'Snapshot prêt à partager avec le staff',
      ],
      snapshot: {
        week: 'Semaine 23 · 1 – 7 juin',
        weekRpeAvg: 6.4,
        weekLoad: 4280,
        acwr: 1.12,
        recovery: 72,
        players: [
          { name: 'A. Diallo',     rpeMon: 6, rpeWed: 7, rpeFri: 6, load: 420, acwr: 1.05, zone: 'green' },
          { name: 'M. Benyahia',   rpeMon: 7, rpeWed: 8, rpeFri: 7, load: 510, acwr: 1.18, zone: 'amber' },
          { name: 'T. Mendes',     rpeMon: 4, rpeWed: 0, rpeFri: 5, load: 180, acwr: 0.85, zone: 'amber' },
          { name: 'J. Petit',      rpeMon: 6, rpeWed: 6, rpeFri: 7, load: 395, acwr: 1.02, zone: 'green' },
          { name: 'L. Moreau',     rpeMon: 7, rpeWed: 7, rpeFri: 8, load: 485, acwr: 1.32, zone: 'red'   },
          { name: 'S. Cissé',      rpeMon: 5, rpeWed: 6, rpeFri: 5, load: 330, acwr: 0.95, zone: 'green' },
          { name: 'R. Dubois',     rpeMon: 6, rpeWed: 7, rpeFri: 6, load: 410, acwr: 1.10, zone: 'green' },
        ],
        tip: 'L. Moreau enchaîne 3 semaines au-dessus de 1.25 — prévoir une séance allégé vendredi.',
      },
    },

    sessions: {
      eyebrow: 'La prépa',
      title: 'Préparez vos séances plus vite.',
      body:
        'Vos schémas, vos exercices et votre semaine au même endroit. STRIVN met tout en forme pendant que vous pensez au jeu, et adapte la séance à la charge réelle du groupe.',
      features: [
        'Tableaux tactiques',
        'Planification des séances',
        "Bibliothèque d'exercices",
        'Création de séance assistée',
      ],
      board: {
        eyebrow: 'Séance · mardi 20h',
        title: 'Bloc tactique · pressing haut',
        stamp: '4 ateliers · 75 min',
        phases: [
          { label: 'Échauffement', detail: 'Activation + conduite de balle · 15 min' },
          { label: 'Atelier 1', detail: 'Pressing à 3, déclenchement sur passe latérale · 20 min' },
          { label: 'Atelier 2', detail: 'Sortie de balle sous pression · 20 min' },
          { label: 'Jeu', detail: 'Opposition 8v8, contraintes pressing · 20 min' },
        ],
      },
    },

    timeSaved: {
      eyebrow: 'Le temps gagné',
      title: 'Récupérez vos soirées.',
      body:
        "STRIVN reprend l'intendance qui vous mange vos soirées : convocations, présences, comptes-rendus, coordination staff. Vous gardez le terrain.",
      stat: 'Le soir',
      statLabel: 'que vous récupérez, semaine après semaine',
      breakdown: [
        { task: 'Convocations & relances', hours: 'centralisées' },
        { task: 'Présences & infirmerie', hours: 'au même endroit' },
        { task: 'Comptes-rendus de séance', hours: 'préparés' },
        { task: 'Coordination du staff', hours: 'visible' },
      ],
      footer: "Le terrain d'abord. L'intendance ensuite.",
    },

    pricing: {
      eyebrow: 'Tarifs',
      title: 'Gratuit pour coacher. Pensé pour grandir en club.',
      body:
        "Le plan Coach donne l'expérience complète pour une équipe. Les plans Club arrivent pour les structures qui veulent coordonner plusieurs équipes, staffs et flux médicaux.",
      plans: [
        {
          name: 'Coach',
          description: 'Pour lancer STRIVN sur une équipe sans demander de budget au club.',
          price: '0€',
          period: 'pour toujours',
          availability: 'Disponible maintenant',
          cta: 'Créer mon équipe',
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
      cta: 'Commencer gratuitement',
      href: APP_URL,
      note: "Le premier paiement arrive quand un club veut gérer plusieurs équipes et staffs dans STRIVN. Pas pour débloquer les outils essentiels d'un coach.",
    },

    faq: {
      eyebrow: 'FAQ',
      title: "Les questions qu'on nous pose en premier.",
      body: 'Ce que vos joueurs ont à faire, qui décide, et combien de temps ça prend à installer.',
      items: [
        {
          question: 'Mes joueurs doivent-ils installer une application ?',
          answer:
            "Non. Ils peuvent répondre via un lien RSVP partagé sur le canal que vous utilisez déjà : web, mobile, WhatsApp, email. Le but est de réduire la friction, pas d'imposer une nouvelle habitude.",
        },
        {
          question: "Est-ce que je perds le contrôle de mon équipe ?",
          answer:
            "Jamais. STRIVN prépare le travail à votre place, mais rien ne part sans votre validation. Vous gardez la main sur chaque message, chaque décision. Il prend l'intendance, vous coachez.",
        },
        {
          question: 'Combien de temps pour démarrer ?',
          answer:
            "Quelques minutes. Vous créez votre équipe, vous ajoutez vos joueurs, et vous pouvez créer vos premiers événements, messages et liens RSVP dès la première semaine.",
        },
        {
          question: 'Pourquoi le plan Coach est gratuit ?',
          answer:
            "Parce qu'un coach doit pouvoir tester et adopter STRIVN sans passer par le président, le bureau ou le trésorier. Le paiement commence quand le club veut coordonner plusieurs équipes.",
        },
        {
          question: 'Ça marche vraiment pour le football amateur ?',
          answer:
            "C'est fait pour. STRIVN est pensé pour les coaches multi-casquettes qui n'ont pas un staff complet derrière eux. Plus vous êtes seul à tout gérer, plus il vous fait gagner du temps.",
        },
        {
          question: "Et si j'ai déjà un staff médical et un prépa ?",
          answer:
            "Encore mieux. Chacun retrouve sa vue : le kiné voit l'infirmerie, le prépa voit la charge, le coordinateur voit plusieurs équipes. Personne ne ressaisit ce que le voisin a déjà noté.",
        },
      ],
    },

    finalCta: {
      eyebrow: 'Commencer',
      title: "Centralisez l'équipe. Reprenez le terrain.",
      body: "Créez votre équipe gratuitement et commencez à organiser événements, présences, communication et infos joueurs depuis une seule plateforme.",
      primaryCta: 'Créer mon équipe gratuitement',
      secondaryCta: 'Une question avant de démarrer ?',
      secondaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20-%20question%20avant%20de%20démarrer',
    },

    footer: {
      brandLine:
        "STRIVN, la plateforme d'intendance gratuite qui rend du temps aux coaches et transforme les infos d'équipe en insights utiles.",
      email: 'hello@strivn.ai',
      productLabel: 'Produit',
      product: [
        { label: 'La plateforme', href: '#v2-staff' },
        { label: 'Communication', href: '#v2-communication' },
        { label: "L'infirmerie", href: '#v2-medical' },
        { label: 'Les séances', href: '#v2-sessions' },
        { label: 'Tarifs', href: '#v2-pricing' },
      ],
      staffLabel: 'Pour qui',
      staff: ['Coaches', 'Adjoints', 'Prépas physiques', 'Kiné & staff médical', 'Clubs multi-équipes'],
      contactLabel: 'Contact',
      credit: 'Gratuit pour les coaches · bientôt pour les clubs',
    },
  },

  en: {
    meta: {
      title: 'STRIVN | The free operations platform for coaches',
      description:
        'STRIVN centralizes one-team operations: events, attendance, injuries, tactics, reports, AI assistant, communication and RSVP. Free for coaches.',
    },
    nav: {
      reality: 'The reality',
      staff: 'Platform',
      communication: 'Communication',
      medical: 'Medical',
      load: 'Load',
      sessions: 'Sessions',
      pricing: 'Pricing',
    },
    ctaMini: 'Start for free',

    hero: {
      title: 'Get your evenings back.',
      titleAccent: 'Coach the next day.',
      body:
        'STRIVN takes the admin off your technical staff — call-ups, attendance, load, RPE, medical, communication. Coach, S&C coach and physio share the same platform, the same squad, the same data. Free for coaches.',
      primaryCta: 'Start for free',
      secondaryCta: 'See the platform',
      device: {
        url: 'app.strivn.net · Season 2026-27',
        step1: {
          label: 'You create the event',
          quote:
            '"Training Thursday 8pm. Prepare the message, RSVP link and keep the answers in one place."',
          echo: 'Ready. I loaded the last template used for a training session.',
        },
        step2: {
          label: 'STRIVN centralizes',
          pills: ['18 players', '4 channels', '1 RSVP link'],
          explain:
            'The message, attendance and player context are connected to the same event.',
          list: [
            'Training template loaded',
            'Unique RSVP link created',
            'Attendance and comments tracked',
            'Medical signals highlighted',
          ],
        },
        step3: {
          label: 'You share',
          badge: 'Free',
          title: 'Copy the message or send it through the channel you choose.',
          metrics: [
            { label: 'Web', value: 'link' },
            { label: 'App', value: 'push' },
            { label: 'Group', value: 'WhatsApp' },
          ],
          approve: 'Copy message',
          reject: 'Edit',
        },
        step4: {
          label: 'Replies become insight',
          phoneName: 'STRIVN',
          phoneSub: 'Agenda & metrics',
          phoneTime: '14:32',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Training Thursday 8pm. Confirm here: strivn.net/rsvp/abc123', time: '14:30' },
            { direction: 'out', text: 'Present', time: '14:31' },
            { direction: 'out', text: 'Absent, hamstring pain since Sunday', time: '14:32' },
            { direction: 'in', text: 'Logged. Coach and physio can see it.', time: '14:32' },
          ],
          wellness: { label: 'Insight', value: '16/18', note: '2 absent · 1 medical signal' },
        },
      },
    },

    reality: {
      eyebrow: 'The reality of the job',
      title: 'Coaching is only part of the job.',
      body:
        "Between two sessions, the real marathon starts. Chasing the players who haven't replied, logging who's injured, keeping staff in the loop, prepping the session. That's where your evenings go.",
      tasks: [
        'Chasing player responses',
        'Keeping attendance up to date',
        'Tracking injuries',
        'Coordinating with staff',
        'Preparing reports',
        'Organising the training week',
      ],
      phone: {
        title: 'Tuesday, 10:47pm',
        name: 'Team · First squad',
        sub: '23 members',
        time: '22:47',
        bubbles: [
          { direction: 'in', text: 'Coach I’ll be late tomorrow 🙏', time: '22:31' },
          { direction: 'in', text: 'Anyone grabbed the cones?', time: '22:38' },
          { direction: 'in', text: 'Ah sorry, missed the message', time: '22:40' },
          { direction: 'in', text: 'What time do we play Sunday?', time: '22:44', unread: true },
          { direction: 'in', text: 'My knee is still warm, not sure', time: '22:47', unread: true },
        ],
      },
      resolve: {
        lead: 'STRIVN takes all of it off your plate.',
        line: 'The operational work runs itself in the background. You only keep the decisions that actually matter.',
      },
    },

    staff: {
      eyebrow: 'The coach platform',
      title: 'Everyday team operations in one place.',
      body:
        'STRIVN brings together the work you already manage across too many places: events, players, attendance, injuries, tactics, reports, individual programs and AI support. One surface to save time and see more clearly.',
      pillars: [
        {
          tag: 'Team',
          name: 'Player management',
          role: 'Your whole squad, with no artificial limit',
          does: [
            'Unlimited players',
            'Unlimited staff',
            'Attendance and availability tracking',
          ],
        },
        {
          tag: 'Operations',
          name: 'Events & sessions',
          role: 'Your week prepared faster',
          does: [
            'Training, matches, meetings',
            'Communication templates',
            'RSVP links per event',
          ],
        },
        {
          tag: 'Medical',
          name: 'Injuries & programs',
          role: 'Important signals stop getting lost',
          does: [
            'Medical notes',
            'Individual programs',
            'Return-to-play visible to staff',
          ],
        },
        {
          tag: 'Insight',
          name: 'Reports & AI assistant',
          role: 'Information becomes usable',
          does: [
            'Prepares reports',
            'Tactical boards',
            'Built-in AI assistant',
          ],
        },
      ],
      beforeAfter: {
        eyebrow: 'Before / After',
        beforeLabel: 'Without STRIVN',
        afterLabel: 'With STRIVN',
        rows: [
          {
            task: 'Call-ups',
            before: 'A message to rewrite every time',
            after: 'A template loaded, an RSVP created',
          },
          {
            task: 'Attendance',
            before: 'You count replies by hand',
            after: 'Counted and live in real time',
          },
          {
            task: 'Injuries',
            before: 'Scattered across texts and memory',
            after: 'In one place, visible to the staff',
          },
          {
            task: 'Team info',
            before: 'In front of a spreadsheet',
            after: 'Centralized, ready to analyze',
          },
        ],
      },
    },

    communication: {
      eyebrow: 'Communication',
      title: 'One message. Every channel.',
      body:
        'Every event can generate its message, template and RSVP link. Share it from the web app, the native mobile app (iOS + Android), WhatsApp, email or whichever channel your squad already uses. STRIVN collects the replies and updates the team view.',
      steps: [
        { n: '01', text: 'STRIVN loads the last template used for this event type' },
        { n: '02', text: 'You adjust the message and choose how to share it' },
        { n: '03', text: 'Players answer through the RSVP link, with no account to create' },
      ],
      channels: [
        { label: 'Web', status: 'copy & share' },
        { label: 'App', status: 'iOS + Android' },
        { label: 'WhatsApp', status: 'existing group' },
        { label: 'Email', status: 'staff & parents' },
      ],
      phone: {
        name: 'STRIVN',
        sub: 'Event communication',
        time: '18:05',
        bubbles: [
          { direction: 'in', text: 'Training Thursday 8pm on pitch 2. Please confirm attendance.', time: '18:02' },
          { direction: 'in', text: 'RSVP: strivn.net/rsvp/abc123', time: '18:02' },
          { direction: 'out', text: 'Present', time: '18:03' },
          { direction: 'out', text: 'Uncertain, sensitive knee', time: '18:05' },
        ],
        wellness: { label: 'Coach view', value: '14 present', note: '1 uncertain · knee signal' },
      },
      template: {
        eyebrow: 'Reusable template',
        title: 'Training session',
        lines: [
          'Thursday 8pm · Pitch 2',
          'Please confirm your attendance.',
          '{RSVP_LINK}',
        ],
        action: 'Copy message',
      },
      caption:
        'The channel is not the product. STRIVN prepares the communication, connects replies to the event and keeps the information usable.',
    },

    medical: {
      eyebrow: 'Medical',
      title: 'One place for the entire medical staff.',
      body:
        'Injuries, doctor notes, physio notes, return-to-play programs: everything connected and visible, from diagnosis to return on the pitch. The coach sees where each player stands without calling anyone.',
      features: [
        'Injury history',
        'Medical notes',
        'Physio notes',
        'Return-to-play programs',
        'Coach visibility',
      ],
      record: {
        player: 'T. Mendes',
        injury: 'Hamstring strain · grade 1',
        since: 'Since 28 April',
        stages: [
          { label: 'Diagnosis', state: 'done' },
          { label: 'Treatment', state: 'done' },
          { label: 'Reconditioning', state: 'active' },
          { label: 'Team return', state: 'todo' },
          { label: 'Match available', state: 'todo' },
        ],
        notes: [
          { author: 'Dr. Lemaire', role: 'Doctor', text: 'Cleared for straight-line running. No sprinting before D+7.' },
          { author: 'A. Roux', role: 'Physio', text: 'Good response to strength work. Player feel trending up.' },
        ],
        returnLabel: 'Estimated return',
        returnValue: '10 — 12 days',
      },
    },

    load: {
      eyebrow: 'Load',
      title: 'Load, RPE, fatigue.',
      titleAccent: 'Measured without chasing them.',
      body:
        'RPE, training load, fatigue, recovery: STRIVN assembles the data week after week. You arrive on Monday with the squad’s load, the early warning signs and the players to watch — without chasing anyone.',
      labels: {
        tableTitle: 'Load & RPE',
        colPlayer: 'Player',
        colMon: 'Mon',
        colWed: 'Wed',
        colFri: 'Fri',
        colLoad: 'Load',
        colAcwr: 'ACWR',
        colState: 'Status',
        pillOk: 'OK',
        pillWatch: 'Watch',
        pillRisk: 'Risk',
        kpiRpe: 'Avg RPE',
        kpiLoad: 'Load',
        kpiAcwr: 'ACWR',
        kpiRecovery: 'Recovery',
        tipLabel: 'S&C note',
      },
      features: [
        'RPE per session, per player',
        'Weekly load and monotony',
        'ACWR (acute:chronic workload ratio)',
        'Recovery indicators',
        'Snapshot ready to share with the staff',
      ],
      snapshot: {
        week: 'Week 23 · 1 – 7 Jun',
        weekRpeAvg: 6.4,
        weekLoad: 4280,
        acwr: 1.12,
        recovery: 72,
        players: [
          { name: 'A. Diallo',     rpeMon: 6, rpeWed: 7, rpeFri: 6, load: 420, acwr: 1.05, zone: 'green' },
          { name: 'M. Benyahia',   rpeMon: 7, rpeWed: 8, rpeFri: 7, load: 510, acwr: 1.18, zone: 'amber' },
          { name: 'T. Mendes',     rpeMon: 4, rpeWed: 0, rpeFri: 5, load: 180, acwr: 0.85, zone: 'amber' },
          { name: 'J. Petit',      rpeMon: 6, rpeWed: 6, rpeFri: 7, load: 395, acwr: 1.02, zone: 'green' },
          { name: 'L. Moreau',     rpeMon: 7, rpeWed: 7, rpeFri: 8, load: 485, acwr: 1.32, zone: 'red'   },
          { name: 'S. Cissé',      rpeMon: 5, rpeWed: 6, rpeFri: 5, load: 330, acwr: 0.95, zone: 'green' },
          { name: 'R. Dubois',     rpeMon: 6, rpeWed: 7, rpeFri: 6, load: 410, acwr: 1.10, zone: 'green' },
        ],
        tip: 'L. Moreau has been above 1.25 for 3 weeks straight — plan a lighter Friday session.',
      },
    },

    sessions: {
      eyebrow: 'Preparation',
      title: 'Prepare your sessions faster.',
      body:
        'Your boards, your drills and your week in one place. STRIVN lays everything out while you think about the game, and adapts the session to the squad’s real load.',
      features: [
        'Tactical boards',
        'Session planning',
        'Drill library',
        'Assisted session design',
      ],
      board: {
        eyebrow: 'Session · Tuesday 8pm',
        title: 'Tactical block · high press',
        stamp: '4 drills · 75 min',
        phases: [
          { label: 'Warm-up', detail: 'Activation + ball work · 15 min' },
          { label: 'Drill 1', detail: 'Press in 3s, trigger on lateral pass · 20 min' },
          { label: 'Drill 2', detail: 'Playing out under pressure · 20 min' },
          { label: 'Game', detail: '8v8 opposition, press constraints · 20 min' },
        ],
      },
    },

    timeSaved: {
      eyebrow: 'Time saved',
      title: 'Get your evenings back.',
      body:
        'STRIVN takes the admin that eats your evenings: call-ups, attendance, reports, staff coordination. You stay on the pitch.',
      stat: 'Your evening',
      statLabel: 'back, week after week',
      breakdown: [
        { task: 'Call-ups & follow-ups', hours: 'centralized' },
        { task: 'Attendance & tracking', hours: 'in one place' },
        { task: 'Reports', hours: 'prepared' },
        { task: 'Staff coordination', hours: 'visible' },
      ],
      footer: 'The pitch first. The admin after.',
    },

    pricing: {
      eyebrow: 'Pricing',
      title: 'Free for coaches. Built to grow into clubs.',
      body:
        'Coach gives you the complete STRIVN experience for one team. Club plans are coming for organizations that want to coordinate multiple teams, staffs and medical workflows.',
      plans: [
        {
          name: 'Coach',
          description: 'For starting STRIVN with one team without asking the club for budget.',
          price: '0€',
          period: 'forever',
          availability: 'Available now',
          cta: 'Create your team',
          features: [
            '1 team',
            'Unlimited players',
            'Unlimited staff',
            'Events, sessions and matches',
            'Attendance, RSVP and communication',
            'Injuries, tactics, reports and AI assistant',
          ],
        },
        {
          name: 'Club',
          description: 'For coordinating all teams and staffs inside one club.',
          price: 'Coming',
          period: 'soon',
          availability: 'Progressive rollout',
          cta: 'Request a demo',
          features: [
            'Multiple teams',
            'Shared player database',
            'Shared medical staff and coordinators',
            'Club dashboards and reporting',
            'Cross-team injury tracking',
          ],
        },
        {
          name: 'Club Pro',
          description: 'For organizations that want advanced insights.',
          price: 'Coming',
          period: 'soon',
          availability: 'On request',
          cta: 'Talk to the team',
          features: [
            'Everything in Club',
            'Advanced reporting',
            'Advanced analytics',
            'API access',
            'Organization-level insights',
          ],
        },
      ],
      cta: 'Start for free',
      href: APP_URL,
      note: 'The first payment happens when a club wants to manage multiple teams and staffs in STRIVN. Not to unlock the essential coach workflow.',
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'The questions we get asked first.',
      body: 'What your players have to do, who decides, and how long it takes to set up.',
      items: [
        {
          question: 'Do my players need to install an app?',
          answer:
            'No. They can answer through an RSVP link shared on the channel you already use: web, mobile, WhatsApp, email. The goal is less friction, not a new habit.',
        },
        {
          question: 'Do I lose control of my team?',
          answer:
            'Never. STRIVN prepares the work for you, but nothing goes out without your approval. You keep your hand on every message and every decision. It handles the organising, you coach.',
        },
        {
          question: 'How long does it take to get started?',
          answer:
            'A few minutes. Create your team, add your players, and you can create events, messages and RSVP links in the first week.',
        },
        {
          question: 'Why is the Coach plan free?',
          answer:
            'Because a coach should be able to try and adopt STRIVN without going through the president, board or treasurer. Payment starts when a club wants to coordinate multiple teams.',
        },
        {
          question: 'Does it really work for amateur football?',
          answer:
            "It's built for it. STRIVN is designed for multi-hat coaches who don't have a full staff behind them. The more you handle alone, the more time it gives you back.",
        },
        {
          question: 'What if I already have a medical staff and an S&C coach?',
          answer:
            'Even better. Each one gets their own view: the physio sees injuries, the S&C coach sees load, the coordinator sees multiple teams. Nobody re-enters what someone else already logged.',
        },
      ],
    },

    finalCta: {
      eyebrow: 'Get started',
      title: 'Centralize the team. Get back to the pitch.',
      body: 'Create your team for free and start organizing events, attendance, communication and player information from one platform.',
      primaryCta: 'Create your team for free',
      secondaryCta: 'Got a question first?',
      secondaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20-%20question%20before%20starting',
    },

    footer: {
      brandLine:
        'STRIVN, the free operations platform that gives coaches time back and turns team information into useful insight.',
      email: 'hello@strivn.ai',
      productLabel: 'Product',
      product: [
        { label: 'Platform', href: '#v2-staff' },
        { label: 'Communication', href: '#v2-communication' },
        { label: 'Medical', href: '#v2-medical' },
        { label: 'Sessions', href: '#v2-sessions' },
        { label: 'Pricing', href: '#v2-pricing' },
      ],
      staffLabel: 'For whom',
      staff: ['Coaches', 'Assistant coaches', 'S&C coaches', 'Physio & medical staff', 'Multi-team clubs'],
      contactLabel: 'Contact',
      credit: 'Free for coaches · coming soon for clubs',
    },
  },
};
