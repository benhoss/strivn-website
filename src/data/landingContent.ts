export type Locale = 'en' | 'fr';

type Bubble = { direction: 'in' | 'out'; text: string; time: string; unread?: boolean };

type LandingContent = {
  meta: { title: string; description: string };
  nav: {
    reality: string;
    staff: string;
    whatsapp: string;
    medical: string;
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

  whatsapp: {
    eyebrow: string;
    title: string;
    body: string;
    steps: Array<{ n: string; text: string }>;
    phone: {
      name: string;
      sub: string;
      time: string;
      bubbles: Bubble[];
      wellness: { label: string; value: string; note: string };
    };
    noapp: string[];
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
      messages: string;
      features: string[];
    }>;
    addonsTitle: string;
    addons: Array<{ name: string; price: string; messages: string }>;
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
      title: 'STRIVN | Le membre de staff virtuel des coaches de football',
      description:
        "STRIVN prend l'intendance entre deux séances : convocations, présences, infirmerie, comptes-rendus et communication avec vos joueurs, le tout depuis WhatsApp. Vous, vous coachez. Gratuit pour les coaches.",
    },
    nav: {
      reality: 'Le quotidien',
      staff: 'Le staff virtuel',
      whatsapp: 'WhatsApp',
      medical: "L'infirmerie",
      sessions: 'Les séances',
      pricing: 'Tarifs',
    },
    ctaMini: 'Commencer gratuitement',

    hero: {
      title: 'Arrêtez de gérer.',
      titleAccent: 'Revenez coacher.',
      body:
        "STRIVN est le membre de staff qui prend l'intendance entre deux séances : il relance le groupe, tient l'infirmerie à jour, prépare vos comptes-rendus et fait tourner l'équipe depuis WhatsApp. Vous, vous coachez.",
      primaryCta: 'Commencer gratuitement',
      secondaryCta: 'Voir comment ça marche',
      device: {
        url: 'app.strivn.net · Saison 2025-26',
        step1: {
          label: 'Vous donnez la consigne · 30 secondes',
          quote:
            '"Planifie la semaine : entraînement mardi, jeudi, vendredi 20h, match à domicile dimanche 15h."',
          echo: "C'est noté. Je prépare la semaine et les convocations.",
        },
        step2: {
          label: 'STRIVN prépare',
          pills: ['3 séances', '1 match', '18 joueurs'],
          explain:
            'La semaine est prête. Je relance ceux qui ne répondent pas et je vous tiens au courant ?',
          list: [
            'Mar 20:00 — séance équipe',
            'Jeu 20:00 — séance équipe',
            'Ven 20:00 — séance équipe',
            'Dim 15:00 — match à domicile',
          ],
        },
        step3: {
          label: 'Vous validez',
          badge: 'À valider',
          title: 'Envoyer les convocations pour mardi 20h ?',
          metrics: [
            { label: 'Joueurs', value: '18' },
            { label: 'Canal', value: 'WhatsApp' },
            { label: 'Relance', value: 'auto' },
          ],
          approve: 'Valider · envoyer',
          reject: 'Pas maintenant',
        },
        step4: {
          label: 'Les joueurs répondent · WhatsApp',
          phoneName: 'STRIVN',
          phoneSub: 'en ligne',
          phoneTime: '14:32',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Entraînement mardi 14 mai, 20h. Tu seras là ?', time: '14:30' },
            { direction: 'out', text: 'Oui je serai là 👍', time: '14:31' },
            { direction: 'in', text: 'Comment tu te sens aujourd’hui ?', time: '14:31' },
            { direction: 'out', text: 'Ressenti 8/10. Petite gêne au mollet droit.', time: '14:32' },
          ],
          wellness: { label: 'Ressenti', value: '8/10', note: 'Mollet droit · à surveiller' },
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
      eyebrow: 'Votre staff virtuel',
      title: 'Un membre de staff qui ne dort jamais.',
      body:
        "Pas un logiciel de plus à apprendre. Un membre du staff qui prend l'intendance à votre place, sur quatre postes, et qui vous rend la main dès qu'une décision compte.",
      pillars: [
        {
          tag: 'Communication',
          name: "L'assistant communication",
          role: 'Tient le lien avec le groupe',
          does: [
            'Envoie les convocations',
            'Fait les présences',
            'Relance les retardataires sans que vous y pensiez',
          ],
        },
        {
          tag: 'Performance',
          name: "L'assistant performance",
          role: "Garde un œil sur l'état du groupe",
          does: [
            'Suit la charge de chaque joueur',
            'Surveille les sensations et le ressenti',
            'Repère la fatigue avant la blessure',
          ],
        },
        {
          tag: 'Médical',
          name: "L'assistant médical",
          role: 'Relie le coach, le kiné et le doc',
          does: [
            "Centralise l'infirmerie",
            'Réunit tout le staff médical au même endroit',
            'Suit le retour au jeu, étape par étape',
          ],
        },
        {
          tag: 'Coaching',
          name: "L'assistant coaching",
          role: 'Vous fait gagner du temps avant la séance',
          does: [
            'Prépare les comptes-rendus',
            "Cale la semaine d'entraînement",
            'Met au propre vos schémas tactiques',
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
            before: 'Vous écrivez à chacun, un par un',
            after: 'Préparées et envoyées, vous validez',
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
            task: 'Le dimanche soir',
            before: "Devant l'Excel",
            after: 'Avec vos proches',
          },
        ],
      },
    },

    whatsapp: {
      eyebrow: 'Là où sont déjà vos joueurs',
      title: 'Vos joueurs ne changent rien à leurs habitudes.',
      body:
        "Pas d'application à installer. Pas de compte à créer. Rien à apprendre. STRIVN parle à vos joueurs dans le WhatsApp qu'ils ouvrent déjà vingt fois par jour, et tout remonte vers vous.",
      steps: [
        { n: '01', text: 'Le joueur reçoit un message' },
        { n: '02', text: 'Il répond en deux mots' },
        { n: '03', text: 'STRIVN met le staff à jour, tout seul' },
      ],
      phone: {
        name: 'STRIVN',
        sub: 'en ligne',
        time: '18:05',
        bubbles: [
          { direction: 'in', text: 'Salut Yanis, entraînement jeudi 20h, tu es dispo ?', time: '18:02' },
          { direction: 'out', text: 'Présent 💪', time: '18:03' },
          { direction: 'in', text: 'Top. Et tes sensations après le match de dimanche ?', time: '18:03' },
          { direction: 'out', text: '7/10, un peu les ischios', time: '18:05' },
        ],
        wellness: { label: 'Remonté au staff', value: '7/10', note: 'Ischios · noté pour le kiné' },
      },
      noapp: ['Aucune application', 'Aucun compte', 'Aucune formation'],
      caption:
        'Chaque réponse remonte dans la plateforme, rattachée au bon joueur et au bon jour. Vous ne recopiez plus rien.',
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
        "Un coach amateur passe 3 à 5 heures par semaine sur l'intendance. STRIVN en reprend l'essentiel, semaine après semaine.",
      stat: '3 à 5 h',
      statLabel: 'par semaine, avant STRIVN',
      breakdown: [
        { task: 'Convocations & relances', hours: '~1 h 30' },
        { task: 'Présences & infirmerie', hours: '~1 h' },
        { task: 'Comptes-rendus de séance', hours: '~1 h' },
        { task: 'Coordination du staff', hours: '~45 min' },
      ],
      footer: 'Soit une soirée rendue chaque semaine. Sur une saison, plus de 150 heures.',
    },

    pricing: {
      eyebrow: 'Tarifs',
      title: 'Un plan pour coacher seul. Un plan pour gérer tout un club.',
      body:
        'Solo vous donne STRIVN complet pour une équipe, sans limite de joueurs. Multi-équipes ajoute la gestion club : plusieurs équipes, plusieurs staffs et une vue consolidée.',
      plans: [
        {
          name: 'Solo',
          description: 'Pour un coach qui veut tout STRIVN sur son équipe.',
          price: '0€',
          period: '/mois',
          messages: '300 messages WhatsApp inclus',
          features: [
            'Joueurs illimités',
            'Convocations & relances WhatsApp',
            'Présences, ressenti et charge',
            'Infirmerie et retours de blessure',
            'Séances, rapports et assistant IA',
          ],
        },
        {
          name: 'Multi-équipes',
          description: 'Pour les clubs et staffs qui pilotent plusieurs collectifs.',
          price: '99€',
          period: '/mois',
          badge: 'Club',
          messages: '3 000 messages WhatsApp inclus',
          features: [
            'Tout le plan Solo',
            'Équipes illimitées',
            'Plusieurs coaches et membres de staff',
            'Accès staff médical',
            'Dashboards & reporting club',
          ],
        },
      ],
      addonsTitle: 'Packs WhatsApp',
      addons: [
        { name: 'Pack S', price: '5€', messages: '+500 messages' },
        { name: 'Pack M', price: '15€', messages: '+2 000 messages' },
        { name: 'Pack L', price: '30€', messages: '+5 000 messages' },
      ],
      cta: 'Ouvrir la facturation',
      href: APP_URL,
      note: 'Les packs WhatsApp sont des achats ponctuels disponibles depuis la facturation de votre équipe.',
    },

    faq: {
      eyebrow: 'FAQ',
      title: "Les questions qu'on nous pose en premier.",
      body: 'Ce que vos joueurs ont à faire, qui décide, et combien de temps ça prend à installer.',
      items: [
        {
          question: 'Mes joueurs doivent-ils installer une application ?',
          answer:
            "Non. Vos joueurs répondent depuis le WhatsApp qu'ils ont déjà. Aucune application, aucun compte, aucun mot de passe. Ils reçoivent un message, ils répondent, c'est tout.",
        },
        {
          question: "Est-ce que je perds le contrôle de mon équipe ?",
          answer:
            "Jamais. STRIVN prépare le travail à votre place, mais rien ne part sans votre validation. Vous gardez la main sur chaque message, chaque décision. Il prend l'intendance, vous coachez.",
        },
        {
          question: 'Combien de temps pour démarrer ?',
          answer:
            "Quelques minutes. Vous créez votre équipe, vous ajoutez vos joueurs, et STRIVN commence à gérer les présences et les relances dès la première semaine. Rien à installer côté joueurs.",
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
      title: "Laissez STRIVN gérer l'intendance.",
      body: 'Concentrez-vous sur vos joueurs. Sur le jeu. Sur la gagne.',
      primaryCta: 'Créer mon équipe gratuitement',
      secondaryCta: 'Réserver une démo',
      secondaryHref: 'mailto:hello@strivn.ai?subject=Demo%20STRIVN%20-%20demande%20de%20creneau',
    },

    footer: {
      brandLine:
        'STRIVN, le membre de staff virtuel qui rend du temps aux coaches de football. Il gère l’intendance, vous gardez le terrain.',
      email: 'hello@strivn.ai',
      productLabel: 'Produit',
      product: [
        { label: 'Le staff virtuel', href: '#v2-staff' },
        { label: 'WhatsApp', href: '#v2-whatsapp' },
        { label: "L'infirmerie", href: '#v2-medical' },
        { label: 'Les séances', href: '#v2-sessions' },
        { label: 'Tarifs', href: '#v2-pricing' },
      ],
      staffLabel: 'Pour qui',
      staff: ['Head coach', 'Coach adjoint', 'Prépa physique', 'Kiné & staff médical'],
      contactLabel: 'Contact',
      credit: 'Conçu pour les coaches multi-casquettes',
    },
  },

  en: {
    meta: {
      title: 'STRIVN | The virtual staff member for football coaches',
      description:
        'STRIVN handles the admin between sessions: call-ups, attendance, injuries, reports and player communication, all from WhatsApp. You keep the decisions. Free for coaches.',
    },
    nav: {
      reality: 'The reality',
      staff: 'Virtual staff',
      whatsapp: 'WhatsApp',
      medical: 'Medical',
      sessions: 'Sessions',
      pricing: 'Pricing',
    },
    ctaMini: 'Start for free',

    hero: {
      title: 'Stop managing.',
      titleAccent: 'Start coaching.',
      body:
        'STRIVN is the staff member who handles the organising between sessions: it follows up with players, tracks injuries, prepares reports and runs your team from WhatsApp. You keep the decisions.',
      primaryCta: 'Start for free',
      secondaryCta: 'See how it works',
      device: {
        url: 'app.strivn.net · Season 2025-26',
        step1: {
          label: 'You delegate · 30 seconds',
          quote:
            '"Plan the week. Training Tuesday, Thursday, Friday at 8pm. Home match Sunday at 3pm."',
          echo: 'Got it. I’ll prepare the week and the call-ups.',
        },
        step2: {
          label: 'STRIVN prepares',
          pills: ['3 sessions', '1 match', '18 players'],
          explain:
            'The week is ready. Want me to chase the players who haven’t replied and keep you posted?',
          list: [
            'Tue 8:00pm — team session',
            'Thu 8:00pm — team session',
            'Fri 8:00pm — team session',
            'Sun 3:00pm — home match',
          ],
        },
        step3: {
          label: 'You approve',
          badge: 'To approve',
          title: 'Send the call-ups for Tuesday 8pm?',
          metrics: [
            { label: 'Players', value: '18' },
            { label: 'Channel', value: 'WhatsApp' },
            { label: 'Follow-up', value: 'auto' },
          ],
          approve: 'Approve · send',
          reject: 'Not yet',
        },
        step4: {
          label: 'Players reply · WhatsApp',
          phoneName: 'STRIVN',
          phoneSub: 'online',
          phoneTime: '14:32',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Training Tuesday 14 May, 8pm. Can you make it?', time: '14:30' },
            { direction: 'out', text: 'Yes I’ll be there 👍', time: '14:31' },
            { direction: 'in', text: 'Great. How are you feeling today?', time: '14:31' },
            { direction: 'out', text: 'Feel 8/10. Slight right-calf tightness.', time: '14:32' },
          ],
          wellness: { label: 'Feel', value: '8/10', note: 'Right calf · to monitor' },
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
      eyebrow: 'Your virtual staff',
      title: 'A staff member who never sleeps.',
      body:
        "Not another tool to learn. A colleague who takes on the operational work for you, across four roles, and hands it back the moment a decision matters.",
      pillars: [
        {
          tag: 'Communication',
          name: 'The communication assistant',
          role: 'Talks to your players for you',
          does: [
            'Sends call-ups',
            'Collects attendance',
            'Chases the ones who forget, so you don’t have to',
          ],
        },
        {
          tag: 'Performance',
          name: 'The performance assistant',
          role: 'Keeps an eye on the squad',
          does: [
            'Tracks training load',
            'Monitors player wellness',
            'Spots risks before they cost you a player',
          ],
        },
        {
          tag: 'Medical',
          name: 'The medical assistant',
          role: 'Connects coach, physio and doctor',
          does: [
            'Centralises injuries',
            'Keeps the whole medical staff in one place',
            'Tracks return-to-play, step by step',
          ],
        },
        {
          tag: 'Coaching',
          name: 'The coaching assistant',
          role: 'Saves you time before the session',
          does: [
            'Prepares reports',
            'Organises the training week',
            'Lays out your tactical boards',
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
            before: 'You message everyone, one by one',
            after: 'Prepared and sent, you just approve',
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
            task: 'Sunday night',
            before: 'In front of a spreadsheet',
            after: 'With the people you love',
          },
        ],
      },
    },

    whatsapp: {
      eyebrow: 'Where your players already are',
      title: 'Your players change nothing about their habits.',
      body:
        'No app to install. No account to create. Nothing to learn. STRIVN talks to your players in the WhatsApp they already open twenty times a day, and everything flows back to you.',
      steps: [
        { n: '01', text: 'The player gets a message' },
        { n: '02', text: 'They reply in a couple of words' },
        { n: '03', text: 'STRIVN updates the staff on its own' },
      ],
      phone: {
        name: 'STRIVN',
        sub: 'online',
        time: '18:05',
        bubbles: [
          { direction: 'in', text: 'Hi Yanis! Training Thursday 8pm, are you free?', time: '18:02' },
          { direction: 'out', text: 'In 💪', time: '18:03' },
          { direction: 'in', text: 'Nice. And how do you feel after Sunday’s match?', time: '18:03' },
          { direction: 'out', text: '7/10, hamstrings a bit', time: '18:05' },
        ],
        wellness: { label: 'Sent to staff', value: '7/10', note: 'Hamstrings · flagged for physio' },
      },
      noapp: ['No app', 'No account', 'No training'],
      caption:
        'Every reply lands in the platform, attached to the right player and the right day. You never re-type anything.',
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
        'An amateur coach spends 3 to 5 hours a week on admin. STRIVN takes most of it off your plate, week after week.',
      stat: '3 to 5 h',
      statLabel: 'per week, before STRIVN',
      breakdown: [
        { task: 'Call-ups & follow-ups', hours: '~1h 30' },
        { task: 'Attendance & tracking', hours: '~1h' },
        { task: 'Reports', hours: '~1h' },
        { task: 'Staff coordination', hours: '~45 min' },
      ],
      footer: 'That’s one evening back every week. Over a season, more than 150 hours.',
    },

    pricing: {
      eyebrow: 'Pricing',
      title: 'One plan for one team. One plan for the whole club.',
      body:
        'Solo gives you the full STRIVN product for one team, with no player limit. Multi-team adds club management: multiple teams, multiple staffs and a consolidated view.',
      plans: [
        {
          name: 'Solo',
          description: 'For a coach who wants the full STRIVN product on one team.',
          price: '0€',
          period: '/month',
          messages: '300 WhatsApp messages included',
          features: [
            'Unlimited players',
            'WhatsApp call-ups & follow-ups',
            'Attendance, wellness and load',
            'Injuries and return-to-play tracking',
            'Sessions, reports and AI assistant',
          ],
        },
        {
          name: 'Multi-team',
          description: 'For clubs and staffs managing several squads.',
          price: '99€',
          period: '/month',
          badge: 'Club',
          messages: '3,000 WhatsApp messages included',
          features: [
            'Everything in Solo',
            'Unlimited teams',
            'Multiple coaches and staff members',
            'Medical staff access',
            'Club dashboards & reporting',
          ],
        },
      ],
      addonsTitle: 'WhatsApp packs',
      addons: [
        { name: 'Pack S', price: '5€', messages: '+500 messages' },
        { name: 'Pack M', price: '15€', messages: '+2,000 messages' },
        { name: 'Pack L', price: '30€', messages: '+5,000 messages' },
      ],
      cta: 'Open billing',
      href: APP_URL,
      note: 'WhatsApp packs are one-time purchases available from your team billing screen.',
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'The questions we get asked first.',
      body: 'What your players have to do, who decides, and how long it takes to set up.',
      items: [
        {
          question: 'Do my players need to install an app?',
          answer:
            'No. Your players reply from the WhatsApp they already have. No app, no account, no password. They get a message, they reply, that’s it.',
        },
        {
          question: 'Do I lose control of my team?',
          answer:
            'Never. STRIVN prepares the work for you, but nothing goes out without your approval. You keep your hand on every message and every decision. It handles the organising, you coach.',
        },
        {
          question: 'How long does it take to get started?',
          answer:
            'A few minutes. You create your team, add your players, and STRIVN starts handling attendance and follow-ups from the first week. Nothing to install on the players’ side.',
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
      title: 'Let STRIVN handle the admin work.',
      body: 'Focus on your players. Focus on your tactics. Focus on winning.',
      primaryCta: 'Create your team for free',
      secondaryCta: 'Book a demo',
      secondaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20walkthrough%20request',
    },

    footer: {
      brandLine:
        'STRIVN, the virtual staff member that gives football coaches their time back. It handles the organising, you keep the pitch.',
      email: 'hello@strivn.ai',
      productLabel: 'Product',
      product: [
        { label: 'Virtual staff', href: '#v2-staff' },
        { label: 'WhatsApp', href: '#v2-whatsapp' },
        { label: 'Medical', href: '#v2-medical' },
        { label: 'Sessions', href: '#v2-sessions' },
        { label: 'Pricing', href: '#v2-pricing' },
      ],
      staffLabel: 'For whom',
      staff: ['Head coach', 'Assistant coach', 'S&C coach', 'Physio & medical staff'],
      contactLabel: 'Contact',
      credit: 'Built for multi-hat coaches',
    },
  },
};
