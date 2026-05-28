export type Locale = 'en' | 'fr';

type ChatLine = {
  from: 'staff' | 'player';
  text: string;
  time: string;
  meta?: string;
};

type DashboardSurface = {
  eyebrow: string;
  url: string;
  sections: string[];
  activeSection: string;
  contextLine: string;
  insightTitle: string;
  insightBody: string;
  rosterRows: Array<{ name: string; status: string; tone: 'positive' | 'warn' | 'info' }>;
  caption: string;
};

type LandingContent = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brandTag: string;
    navLabel: string;
    nav: {
      platform: string;
      loop: string;
      ai: string;
      forWhom: string;
      confidence: string;
      faq: string;
    };
    cta: string;
    languages: {
      en: string;
      fr: string;
    };
  };
  ai: {
    eyebrow: string;
    title: string;
    body: string;
    principles: Array<{ label: string; verb: string; body: string }>;
    trace: {
      eyebrow: string;
      badge: string;
      title: string;
      evidenceLabel: string;
      evidence: string[];
      confidenceLabel: string;
      confidenceLevel: string;
      confidenceSegments: number;
      confidenceTotal: number;
      approve: string;
      adjust: string;
      caption: string;
    };
  };
  hero: {
    eyebrowChips: [string, string];
    title: string;
    titleAccent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    signals: Array<{
      label: string;
      features: Array<{ text: string; soon?: boolean }>;
    }>;
    aiStrip: {
      badge: string;
      staff: { label: string; body: string };
      team: { label: string; body: string };
    };
    panel: {
      sections: string[];
      activeSection: string;
      contextLine: string;
      urlLabel: string;
      stepVoiceLabel: string;
      stepVoiceQuote: string;
      stepVoiceEcho: string;
      stepStateLabel: string;
      stepStatePillAttendance: string;
      stepStatePillRisk: string;
      stepStatePillRsvp: string;
      stepStateExplain: string;
      stepStateInsights: string[];
      stepProposalLabel: string;
      stepProposalTitle: string;
      stepProposalBadge: string;
      stepProposalMetrics: Array<{ label: string; value: string }>;
      stepProposalApprove: string;
      stepProposalReject: string;
      player: {
        label: string;
        phoneTime: string;
        phoneName: string;
        phoneSub: string;
        phoneAvatar: string;
        bubbles: Array<{ direction: 'in' | 'out'; text: string; time: string }>;
        wellness: { label: string; value: string; note: string };
      };
    };
  };
  platformChannel: {
    eyebrow: string;
    title: string;
    body: string;
    platformSide: DashboardSurface;
    channelSide: {
      eyebrow: string;
      label: string;
      phoneName: string;
      phoneSub: string;
      phoneAvatar: string;
      phoneTime: string;
      thread: ChatLine[];
      caption: string;
    };
    bridge: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    body: string;
    moments: Array<{ phase: string; title: string; body: string; bullets: string[] }>;
    board: {
      eyebrow: string;
      title: string;
      stamp: string;
      items: Array<{ label: string; body: string }>;
    };
  };
  forWhom: {
    eyebrow: string;
    title: string;
    body: string;
    columns: { role: string; sees: string; does: string; surface: string };
    rows: Array<{
      role: string;
      initials: string;
      sees: string;
      does: string;
      surface: string;
      surfaceKind: 'platform' | 'channel';
    }>;
  };
  confidence: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    backToTop: string;
  };
  footer: {
    brandLine: string;
    contactLabel: string;
    email: string;
    backToTop: string;
  };
};

export const landingContent: Record<Locale, LandingContent> = {
  en: {
    meta: {
      title: 'STRIVN | The AI management tool for staffs and multi-hat coaches',
      description:
        "The AI management tool for staffs and multi-hat coaches — calendar, attendance, load, daily feel, injuries. Integrated in WhatsApp, your team's channel for confirmations, daily check-ins, and session feedback.",
    },
    header: {
      brandTag: "AI team management · WhatsApp, your team's channel",
      navLabel: 'Primary',
      nav: {
        platform: 'Platform',
        loop: 'Operating loop',
        ai: 'AI inside',
        forWhom: 'Roles',
        confidence: 'Control',
        faq: 'FAQ',
      },
      cta: 'Book a walkthrough',
      languages: {
        en: 'EN',
        fr: 'FR',
      },
    },
    ai: {
      eyebrow: 'AI inside',
      title: 'The brain that drafts. The coach decides.',
      body:
        "A multi-hat coach spends a big part of the week on admin — chasing replies, cross-referencing data, re-typing messages. STRIVN's AI handles that and learns how you work along the way. You stay on the decisions that matter.",
      principles: [
        {
          label: 'Learns your team',
          verb: 'Week after week, it becomes yours',
          body: "STRIVN picks up your way of speaking, the rhythm of your weeks, each player's typical state. After a month it understands you better — your vocabulary, your reminders, your habits. The more you use it, the more it adapts to how you work.",
        },
        {
          label: 'Less admin',
          verb: 'No more Sunday night in Excel',
          body: 'You talk, STRIVN drafts the week. Players reply in their WhatsApp — attendance, daily feel, session feedback — and it all lands inside the platform. You stop re-typing everything by hand.',
        },
        {
          label: 'Squad in one read',
          verb: 'Tuesday 7:45 pm. One screen.',
          body: "Who's confirmed. Who's injured. Who hasn't replied. Who's been over the load. STRIVN shows you at a glance before the session — instead of digging through five tabs.",
        },
        {
          label: 'Whole staff',
          verb: 'One place. Many angles.',
          body: "Whatever the size of the staff, everyone works from the same platform. Physio, S&C, assistant, video analyst, team doctor — each has their own angle on the same squad, without re-entering what someone else already logged. AI augments each role, without replacing anyone.",
        },
      ],
      trace: {
        eyebrow: 'Evidence trace',
        badge: 'Pending approval',
        title: 'Send the Tuesday 20:00 convocation?',
        evidenceLabel: 'Reasoning',
        evidence: [
          '18 players concerned',
          '2 feel flags · Mendes, Ribot',
          '1 reply pending · Ribot',
          'Home match · Sunday 15:00',
        ],
        confidenceLabel: 'Confidence',
        confidenceLevel: 'High',
        confidenceSegments: 5,
        confidenceTotal: 6,
        approve: 'Approve · send',
        adjust: 'Adjust',
        caption: 'The working-out stays visible — so the coach can audit the move before it ships.',
      },
    },
    hero: {
      eyebrowChips: ['AI team management', 'In WhatsApp'],
      title: 'The AI management tool for staffs and multi-hat coaches.',
      titleAccent: "Integrated in WhatsApp, your team's channel.",
      body:
        "STRIVN gives staffs and multi-hat coaches one connected workspace for calendar, attendance, load, daily feel, injuries, and player follow-up. The team is reached where they already are — confirmations, daily check-ins, and session feedback come back through WhatsApp, no extra app to install.",
      primaryCta: 'Book a 30-min walkthrough',
      secondaryCta: 'See the loop in action',
      signals: [
        {
          label: 'Plan',
          features: [
            { text: 'Calendar, events & convocations' },
            { text: 'Session planning' },
            { text: 'Content & tactics per session', soon: true },
          ],
        },
        {
          label: 'Monitor',
          features: [
            { text: 'Attendance & player replies' },
            { text: 'Daily feel & post-session feedback' },
            { text: 'Injury tracking & physio advice' },
            { text: 'Training load & player risk' },
          ],
        },
        {
          label: 'Act',
          features: [
            { text: 'Session design adapted to load' },
            { text: 'Convocations, reminders & feedback collection' },
            { text: 'Return-to-play protocols' },
          ],
        },
      ],
      aiStrip: {
        badge: 'AI engine',
        staff: { label: 'Staff assistant', body: 'voice, chat, action approval in the platform' },
        team: { label: 'Team channel', body: 'WhatsApp: confirmations, daily feel, session feedback' },
      },
      panel: {
        sections: ['Calendar', 'Players', 'Load', 'Feel', 'Injuries'],
        activeSection: 'Calendar',
        contextLine: 'Tuesday, May 14 · Week 20',
        urlLabel: 'app.strivn.ai · Season 2025-26',
        stepVoiceLabel: 'Voice dictation',
        stepVoiceQuote: '"Plan the week. Training Tuesday, Thursday, Friday at 20:00. Home match Sunday 15:00."',
        stepVoiceEcho:
          '4 events drafted for the week — 3 team sessions and 1 home match.',
        stepStateLabel: 'Week state',
        stepStatePillAttendance: '3 sessions drafted',
        stepStatePillRisk: '1 home match',
        stepStatePillRsvp: '18 players concerned',
        stepStateExplain:
          'I drafted 4 events for the week. Should I send the convocation for Tuesday 20:00?',
        stepStateInsights: [
          'Tue 20:00 — team session',
          'Thu 20:00 — team session',
          'Fri 20:00 — team session',
          'Sun 15:00 — home match',
        ],
        stepProposalLabel: 'Proposed action',
        stepProposalTitle: 'Send the Tuesday 20:00 convocation?',
        stepProposalBadge: 'Pending',
        stepProposalMetrics: [
          { label: 'Reach', value: '18 players' },
          { label: 'Channel', value: 'WhatsApp' },
          { label: 'Timing', value: '24h ahead' },
        ],
        stepProposalApprove: 'Send convocation',
        stepProposalReject: 'Not yet',
        player: {
          label: 'Player side · WhatsApp',
          phoneTime: '14:32',
          phoneName: 'Strivn team',
          phoneSub: 'online',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Training Tuesday 14 May, 20:00. Can you make it?', time: '14:30' },
            { direction: 'out', text: "Yes, I'll be there.", time: '14:31' },
            { direction: 'in', text: 'How are you feeling today?', time: '14:31' },
            { direction: 'out', text: 'Feel 8/10. Slight right-calf tightness.', time: '14:32' },
          ],
          wellness: { label: 'Feel', value: '8/10', note: 'Right calf · to monitor' },
        },
      },
    },
    platformChannel: {
      eyebrow: 'Two surfaces · one operating loop',
      title: 'The staff has the platform. The team answers from WhatsApp.',
      body:
        'Multi-hat coaches and their team staff run the week from one connected dashboard: calendar, attendance, load, daily feel, injuries. STRIVN reaches the team in their existing WhatsApp for confirmations, daily check-ins, and post-session feedback — no app for players to install.',
      platformSide: {
        eyebrow: 'Staff platform',
        url: 'app.strivn.ai · Season 2025-26',
        sections: ['Calendar', 'Players', 'Load', 'Feel', 'Injuries'],
        activeSection: 'Players',
        contextLine: 'Tuesday, May 14 · Week 20',
        insightTitle: 'Tuesday 20:00 session · 14 of 18 confirmed',
        insightBody: '2 feel flags (Mendes, Ribot). 1 reply outstanding. Reminder ready to approve.',
        rosterRows: [
          { name: 'M. Cordeiro', status: 'OK', tone: 'positive' },
          { name: 'T. Mendes', status: 'Risk', tone: 'warn' },
          { name: 'Y. Ribot', status: 'Pending', tone: 'info' },
          { name: 'A. Dupin', status: 'OK', tone: 'positive' },
          { name: 'L. Almeida', status: 'OK', tone: 'positive' },
        ],
        caption: 'Calendar, players, load, daily feel, injuries — staff sees them in one connected view.',
      },
      channelSide: {
        eyebrow: 'Team channel',
        label: 'Player side · WhatsApp',
        phoneName: 'Strivn team',
        phoneSub: 'online',
        phoneAvatar: 'S',
        phoneTime: '14:32',
        thread: [
          { from: 'player', text: 'Training Tuesday 14 May, 20:00. Can you make it?', time: '14:30', meta: 'STRIVN → player' },
          { from: 'staff', text: "Yes, I'll be there.", time: '14:31', meta: 'Player reply' },
          { from: 'player', text: 'How are you feeling today?', time: '14:31', meta: 'STRIVN check-in' },
          { from: 'staff', text: 'Feel 8/10. Slight right-calf tightness.', time: '14:32', meta: 'Player feedback' },
        ],
        caption: 'Confirmations, daily feel, session feedback — players answer from the WhatsApp they already check.',
      },
      bridge: 'Each WhatsApp reply lands as structured signal inside the platform — daily feel, attendance, replies, injury notes — already in context.',
    },
    howItWorks: {
      eyebrow: 'The operating loop',
      title: 'Built around the real weekly rhythm of a coach.',
      body:
        'A complete operating loop: run the week from the platform, reach the team in WhatsApp, and move from recommendation to execution without losing control.',
      moments: [
        {
          phase: 'Plan',
          title: 'Run the week from one platform',
          body: 'Calendar, attendance follow-up, convocation timing, and session changes become one operating flow instead of five scattered chores.',
          bullets: [
            'Schedule or reschedule sessions in the calendar',
            'Send or remind attendance confirmations',
            'Keep the squad aligned without extra admin',
          ],
        },
        {
          phase: 'Monitor',
          title: 'Spot what needs attention before training',
          body: 'Readiness, missing replies, load shifts, and active injuries stay connected so the staff sees the real state of the group at a glance.',
          bullets: [
            'Attendance and reply gaps',
            'Workload and daily feel deltas',
            'Player risk and injury visibility',
          ],
        },
        {
          phase: 'Act',
          title: 'Approve in the platform — STRIVN handles the rest',
          body: 'The assistant drafts the write. The coach approves. STRIVN dispatches the convocation, the reminder, the daily check-in through WhatsApp — and the responses flow back as structured signal.',
          bullets: [
            'Action cards with approve / reject',
            'Visible evidence behind every recommendation',
            'WhatsApp dispatch for player-facing comms',
          ],
        },
      ],
      board: {
        eyebrow: 'Operating proof',
        title: 'What the assistant can anchor today',
        stamp: 'Current product truth',
        items: [
          {
            label: 'Inputs',
            body: 'WhatsApp replies, coach chat, voice dictation, attendance gaps, daily feel, injury notes, calendar state.',
          },
          {
            label: 'Surfaces',
            body: 'Staff platform: calendar, players, load, daily feel, injuries, attendance, reports. WhatsApp: the team channel.',
          },
          {
            label: 'Actions',
            body: 'Schedule changes, attendance reminders, convocations, return-to-play steps, guided follow-up — drafted by STRIVN, approved by the coach.',
          },
          {
            label: 'Guardrails',
            body: 'Proposal-first language, visible evidence, team scoping, human approval before any write.',
          },
        ],
      },
    },
    forWhom: {
      eyebrow: 'One product · staff and team',
      title: 'Each role · their angle · one squad.',
      body:
        "Coach, S&C, physio — each works the same player from their own lens, inside the platform. Players answer from WhatsApp. No re-entry, no separate apps.",
      columns: { role: 'Role', sees: 'What they see', does: 'What they do', surface: 'Where' },
      rows: [
        {
          role: 'Head coach',
          initials: 'HC',
          sees: 'Calendar, attendance, daily feel, risk, week state — one read.',
          does: 'Drafts the week. Approves comms. Calls the session.',
          surface: 'Platform',
          surfaceKind: 'platform',
        },
        {
          role: 'S&C coach',
          initials: 'SC',
          sees: 'Training load, post-session feel, load deltas, risk.',
          does: 'Adjusts intensity before the next session. Flags overload.',
          surface: 'Platform',
          surfaceKind: 'platform',
        },
        {
          role: 'Physio',
          initials: 'PH',
          sees: 'Injury state, return-to-play step, daily feel trend.',
          does: 'Logs notes. Sets return-to-play stages. Clears for contact.',
          surface: 'Platform',
          surfaceKind: 'platform',
        },
        {
          role: 'Player',
          initials: 'PL',
          sees: 'Convocations, daily feel asks, session feedback prompts.',
          does: 'Replies — Yes, 8/10, calf tight. Nothing else.',
          surface: 'WhatsApp',
          surfaceKind: 'channel',
        },
      ],
    },
    confidence: {
      eyebrow: 'Control · evidence · scope',
      title: 'Serious enough for staff. Light enough for a head coach on the touchline.',
      body:
        'STRIVN moves faster than a dashboard because it drafts the work — and stays trustworthy because every write needs a human tap.',
      points: [
        'Scoped to your team context. Not a free-floating chatbot.',
        'Every write action is proposed first. Nothing is applied silently.',
        'Evidence stays visible so you can see why the move is suggested.',
        'WhatsApp is the team channel. The platform is the staff workspace.',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'The questions a serious coach or club asks first.',
      body: 'Who it is for, where the work happens, and how much the assistant can actually do without you.',
      items: [
        {
          question: 'Is STRIVN built for a single coach or for the full staff?',
          answer:
            'Both. The voice is coach-first because the daily pain is sharpest there. But S&C, physio, and analysts each get their own angle in the platform with no re-entry of data.',
        },
        {
          question: 'Where does the staff actually work?',
          answer:
            'In the platform — a connected dashboard for calendar, players, load, daily feel, and injuries. Voice dictation and an in-platform assistant let staff move fast without leaving the workspace.',
        },
        {
          question: 'How do players interact?',
          answer:
            'Through the WhatsApp they already have. Attendance confirmations, daily feel check-ins, session feedback, and follow-ups land in their thread. No app to install, no password, no new habit. Every reply flows back into the platform as structured signal.',
        },
        {
          question: 'How much control does the coach keep over actions?',
          answer:
            'Full control. STRIVN can answer and draft, but every write — schedule change, convocation, reminder — is proposed first and requires an explicit tap before anything moves.',
        },
        {
          question: 'Is this just a readiness tool?',
          answer:
            'No. Readiness is one part of the picture. The broader value is running the whole week — plan, monitor, act — from one platform with the team reached in their existing channel.',
        },
      ],
    },
    contact: {
      eyebrow: 'Get started',
      title: 'See STRIVN run your week — platform for staff, WhatsApp for team.',
      body:
        'Best for ambitious coaches and clubs that want sharper weekly execution without piling another app on the squad.',
      primaryCta: 'Book a 30-min walkthrough',
      primaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20walkthrough%20request',
      secondaryCta: 'Back to top',
      backToTop: 'Back to top',
    },
    footer: {
      brandLine:
        "STRIVN is the AI management tool for staffs and multi-hat coaches — integrated in WhatsApp, your team's channel.",
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Back to top',
    },
  },
  fr: {
    meta: {
      title: "STRIVN | L'outil de gestion IA pour staffs et coaches multi-casquettes",
      description:
        "L'outil de gestion IA pour les staffs et coaches multi-casquettes — calendrier, présences, charge, ressenti, blessures. Intégré dans WhatsApp, le canal de votre équipe pour présences, ressenti et retours de séance.",
    },
    header: {
      brandTag: "L'outil de gestion IA pour staffs et coaches — dans WhatsApp",
      navLabel: 'Navigation principale',
      nav: {
        platform: 'Plateforme',
        loop: 'La semaine',
        ai: "L'IA",
        forWhom: 'Staff',
        confidence: 'Contrôle',
        faq: 'FAQ',
      },
      cta: 'Réserver une démo',
      languages: {
        en: 'EN',
        fr: 'FR',
      },
    },
    ai: {
      eyebrow: "L'IA à l'intérieur",
      title: "L'IA prépare. Vous décidez.",
      body:
        "Un coach multi-casquettes passe une grande partie de sa semaine sur l'admin : relancer les présences, retaper les mêmes messages, recroiser ce que dit le kiné avec ce que demande le prépa. STRIVN s'occupe de cette part-là. Vous gardez votre temps pour la séance, le match et les joueurs.",
      principles: [
        {
          label: 'Elle apprend votre équipe',
          verb: "Au bout d'un mois, elle parle comme vous",
          body: "STRIVN retient comment vous parlez aux joueurs, le rythme de vos semaines, l'état habituel de chaque joueur. Plus vous l'utilisez, plus elle colle à votre manière de faire. Pas une IA générique — une IA qui connaît votre groupe.",
        },
        {
          label: "Fini le dimanche devant l'Excel",
          verb: "Vous dictez. Elle prépare. Vous validez.",
          body: "Vous dites \"planifie la semaine\" — STRIVN sort le calendrier, les convocations, les relances, prêts à valider. Les joueurs répondent depuis WhatsApp ; tout se retrouve dans la plateforme. Vous arrêtez de retaper à la main.",
        },
        {
          label: "L'état du groupe en un écran",
          verb: 'Mardi 19h45 — vous savez avec qui vous allez bosser',
          body: "Qui a confirmé. Qui n'a pas répondu. Qui est blessé. Qui rentre de blessure. Qui a tiré fort le week-end. STRIVN regroupe tout sur un seul écran, juste avant la séance — au lieu de chercher dans cinq onglets et trois groupes WhatsApp.",
        },
        {
          label: 'Un seul outil pour tout le staff',
          verb: 'Kiné, prépa, adjoint, doc — même groupe, vues différentes',
          body: "Quelle que soit la taille du staff, tout le monde travaille depuis la même plateforme. Chacun voit ce qui le concerne — le kiné voit les blessures, le prépa voit la charge, l'adjoint voit les présences. Personne ne ressaisit ce que le voisin a déjà noté.",
        },
      ],
      trace: {
        eyebrow: 'Pourquoi cette proposition',
        badge: 'À valider',
        title: 'Envoyer la convocation mardi 20h ?',
        evidenceLabel: "Sur quoi STRIVN s'appuie",
        evidence: [
          '18 joueurs concernés',
          '2 alertes ressenti · Mendes, Ribot',
          '1 présence en attente · Ribot',
          'Match à domicile · dimanche 15h',
        ],
        confidenceLabel: 'Confiance',
        confidenceLevel: 'Élevée',
        confidenceSegments: 5,
        confidenceTotal: 6,
        approve: 'Valider · envoyer',
        adjust: 'Ajuster',
        caption: "Vous voyez sur quoi l'IA s'est appuyée avant de valider. Aucun message ne part sans votre OK.",
      },
    },
    hero: {
      eyebrowChips: ["Outil de gestion IA", 'Dans WhatsApp'],
      title: "L'outil de gestion IA pour les staffs et coaches multi-casquettes.",
      titleAccent: "Intégré dans WhatsApp — là où répond déjà votre équipe.",
      body:
        "Une seule plateforme pour gérer la semaine : calendrier, présences, ressenti, charge, blessures, relances. Les joueurs répondent depuis WhatsApp — pas d'app à installer, pas de mot de passe à retenir.",
      primaryCta: 'Réserver un créneau de 30 min',
      secondaryCta: 'Voir comment ça marche',
      signals: [
        {
          label: 'Planifier',
          features: [
            { text: 'Calendrier, événements & convocations' },
            { text: 'Planification de séances' },
            { text: 'Contenu & tactiques par séance', soon: true },
          ],
        },
        {
          label: 'Suivre',
          features: [
            { text: 'Présences & réponses joueurs' },
            { text: 'Ressenti du jour & post-séance' },
            { text: 'Suivi des blessures & avis kiné' },
            { text: "Charge d'entraînement & risque joueur" },
          ],
        },
        {
          label: 'Agir',
          features: [
            { text: 'Conception de séance adaptée à la charge' },
            { text: 'Convocations, relances & feedbacks' },
            { text: 'Protocoles de retour au jeu' },
          ],
        },
      ],
      aiStrip: {
        badge: "Piloté par l'IA",
        staff: { label: 'Assistant staff', body: 'voix, chat, validation des actions dans la plateforme' },
        team: { label: "Canal d'équipe", body: 'WhatsApp : présences, check-ins ressenti, retours' },
      },
      panel: {
        sections: ['Calendrier', 'Joueurs', 'Charge', 'Ressenti', 'Blessures'],
        activeSection: 'Calendrier',
        contextLine: 'Mardi 14 mai · Semaine 20',
        urlLabel: 'app.strivn.ai · Saison 2025-26',
        stepVoiceLabel: 'Dictée vocale',
        stepVoiceQuote: '"Planifie la semaine. Entraînements mardi, jeudi, vendredi à 20h. Match à domicile dimanche 15h."',
        stepVoiceEcho:
          '4 événements préparés pour la semaine — 3 séances et 1 match à domicile.',
        stepStateLabel: 'État de la semaine',
        stepStatePillAttendance: '3 séances créées',
        stepStatePillRisk: '1 match à domicile',
        stepStatePillRsvp: '18 joueurs concernés',
        stepStateExplain:
          "J'ai préparé 4 événements pour la semaine. Je lance la convocation pour mardi 20h ?",
        stepStateInsights: [
          'Mar 20:00 — séance équipe',
          'Jeu 20:00 — séance équipe',
          'Ven 20:00 — séance équipe',
          'Dim 15:00 — match à domicile',
        ],
        stepProposalLabel: 'Action proposée',
        stepProposalTitle: 'Envoyer la convocation pour mardi 20:00 ?',
        stepProposalBadge: 'En attente',
        stepProposalMetrics: [
          { label: 'Cible', value: '18 joueurs' },
          { label: 'Canal', value: 'WhatsApp' },
          { label: 'Timing', value: '24h avant' },
        ],
        stepProposalApprove: 'Envoyer',
        stepProposalReject: 'Pas maintenant',
        player: {
          label: 'Côté joueur · WhatsApp',
          phoneTime: '14:32',
          phoneName: 'Équipe Strivn',
          phoneSub: 'en ligne',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Entraînement mardi 14 mai, 20:00. Tu seras là ?', time: '14:30' },
            { direction: 'out', text: 'OK je serai là.', time: '14:31' },
            { direction: 'in', text: "Comment tu te sens aujourd'hui ?", time: '14:31' },
            { direction: 'out', text: 'Ressenti 8/10. Petite gêne au mollet droit.', time: '14:32' },
          ],
          wellness: { label: 'Ressenti', value: '8/10', note: 'Mollet droit · à surveiller' },
        },
      },
    },
    platformChannel: {
      eyebrow: "Le staff travaille ici. Les joueurs répondent là-bas.",
      title: "Moins d'admin. Plus de terrain.",
      body:
        "Côté staff : un seul dashboard pour calendrier, présences, ressenti, charge, blessures. Côté joueurs : pas d'app, pas de mot de passe — les convocations, les relances et les questions de ressenti arrivent dans le WhatsApp qu'ils ouvrent déjà vingt fois par jour.",
      platformSide: {
        eyebrow: 'Plateforme staff',
        url: 'app.strivn.ai · Saison 2025-26',
        sections: ['Calendrier', 'Joueurs', 'Charge', 'Ressenti', 'Blessures'],
        activeSection: 'Joueurs',
        contextLine: 'Mardi 14 mai · Semaine 20',
        insightTitle: 'Séance mardi 20:00 · 14 sur 18 confirmés',
        insightBody: '2 alertes ressenti (Mendes, Ribot). 1 présence en attente. Relance prête à valider.',
        rosterRows: [
          { name: 'M. Cordeiro', status: 'OK', tone: 'positive' },
          { name: 'T. Mendes', status: 'Risque', tone: 'warn' },
          { name: 'Y. Ribot', status: 'En attente', tone: 'info' },
          { name: 'A. Dupin', status: 'OK', tone: 'positive' },
          { name: 'L. Almeida', status: 'OK', tone: 'positive' },
        ],
        caption: 'Calendrier, joueurs, charge, ressenti, blessures — tout au même endroit pour le staff.',
      },
      channelSide: {
        eyebrow: "Côté joueurs · WhatsApp",
        label: 'Côté joueur · WhatsApp',
        phoneName: 'Équipe Strivn',
        phoneSub: 'en ligne',
        phoneAvatar: 'S',
        phoneTime: '14:32',
        thread: [
          { from: 'player', text: 'Entraînement mardi 14 mai, 20:00. Tu seras là ?', time: '14:30', meta: 'STRIVN → joueur' },
          { from: 'staff', text: 'OK je serai là.', time: '14:31', meta: 'Réponse joueur' },
          { from: 'player', text: "Comment tu te sens aujourd'hui ?", time: '14:31', meta: 'Question STRIVN' },
          { from: 'staff', text: 'Ressenti 8/10. Petite gêne au mollet droit.', time: '14:32', meta: 'Réponse joueur' },
        ],
        caption: "Présences, ressenti, retours de séance — les joueurs répondent dans le WhatsApp qu'ils ouvrent déjà.",
      },
      bridge: "Chaque réponse WhatsApp remonte dans la plateforme — ressenti, présences, notes blessure — déjà rattachée au bon joueur, au bon jour.",
    },
    howItWorks: {
      eyebrow: 'Le rythme de votre semaine',
      title: "Construit autour de votre vraie semaine de coach.",
      body:
        "Plan de la semaine, suivi des joueurs, communication à l'équipe — les trois moments sur lesquels vous passez déjà votre temps, réunis en un seul endroit.",
      moments: [
        {
          phase: 'Planifier',
          title: 'Toute la semaine sur une seule plateforme',
          body: "Calendrier, convocations, relances et changements de séance ne font plus cinq tâches dispersées mais un seul fil — préparé à l'avance, prêts à partir d'un clic.",
          bullets: [
            'Planifier ou changer une séance dans le calendrier',
            'Lancer une convocation ou relancer les retardataires',
            'Tenir le groupe au courant sans tout retaper',
          ],
        },
        {
          phase: 'Suivre',
          title: "Voir tôt qui demande de l'attention",
          body: "Ressenti, qui n'a pas répondu, charge qui grimpe, blessures en cours : l'état réel du groupe est devant vous, sans aller chercher.",
          bullets: [
            "Qui a confirmé, qui n'a pas répondu",
            'Charge et ressenti par joueur',
            'Blessures en cours et joueurs à risque',
          ],
        },
        {
          phase: 'Agir',
          title: 'Vous validez. STRIVN fait le reste.',
          body: "L'IA prépare le message. Vous lisez, vous validez. STRIVN envoie la convocation, la relance, la question ressenti dans WhatsApp — et les réponses reviennent dans la plateforme.",
          bullets: [
            "Chaque action proposée avec valider ou refuser",
            'Vous voyez pourquoi avant de cliquer',
            'Envoi WhatsApp pour parler aux joueurs',
          ],
        },
      ],
      board: {
        eyebrow: 'Ce que STRIVN fait déjà',
        title: "Concrètement, voilà ce que l'IA prend en charge aujourd'hui",
        stamp: "Aujourd'hui",
        items: [
          {
            label: "Ce qu'elle écoute",
            body: "Vos messages dictés ou écrits, les réponses WhatsApp des joueurs, les présences manquantes, le ressenti, les notes blessure, l'état du calendrier.",
          },
          {
            label: 'Où elle agit',
            body: 'Dans la plateforme staff (calendrier, joueurs, charge, ressenti, blessures, présences). Et dans le WhatsApp de vos joueurs pour les questions et les convocations.',
          },
          {
            label: "Ce qu'elle prépare",
            body: 'Changements de planning, relances de présence, convocations, étapes de retour de blessure. Toujours prêts à valider — jamais envoyés sans vous.',
          },
          {
            label: "Ce qu'elle ne fait jamais",
            body: "Envoyer un message sans votre OK. Toucher à un autre groupe que le vôtre. Inventer une donnée qu'elle n'a pas. Décider à votre place.",
          },
        ],
      },
    },
    forWhom: {
      eyebrow: 'Un seul outil pour tout le staff',
      title: 'Chacun voit ce qui le concerne. Tout le monde travaille le même groupe.',
      body:
        "Coach, prépa, kiné, doc, adjoint — chacun a sa vue dans la plateforme. Les joueurs répondent depuis WhatsApp. Personne ne ressaisit ce que le voisin a déjà noté.",
      columns: { role: 'Rôle', sees: "Ce qu'il voit", does: "Ce qu'il fait", surface: 'Où' },
      rows: [
        {
          role: 'Head coach',
          initials: 'HC',
          sees: 'Calendrier, présences, ressenti, blessures, état de la semaine — un seul écran.',
          does: 'Prépare la semaine. Valide les messages. Décide la séance.',
          surface: 'Plateforme',
          surfaceKind: 'platform',
        },
        {
          role: 'Prépa physique',
          initials: 'PR',
          sees: "Charge d'entraînement, ressenti après séance, joueurs surchargés.",
          does: "Ajuste l'intensité. Alerte le coach sur les surcharges.",
          surface: 'Plateforme',
          surfaceKind: 'platform',
        },
        {
          role: 'Kiné',
          initials: 'KI',
          sees: 'État des blessures, ressenti des joueurs en cours de retour.',
          does: 'Note ses avis. Pose les étapes de retour au jeu. Donne le feu vert au contact.',
          surface: 'Plateforme',
          surfaceKind: 'platform',
        },
        {
          role: 'Joueur',
          initials: 'JO',
          sees: 'Convocations, questions ressenti, retours de séance.',
          does: "Répond depuis WhatsApp — OK, 8/10, mollet tendu. Rien d'autre.",
          surface: 'WhatsApp',
          surfaceKind: 'channel',
        },
      ],
    },
    confidence: {
      eyebrow: 'Le coach garde la main',
      title: 'Assez sérieux pour un staff. Assez léger pour un coach au bord du terrain.',
      body:
        "STRIVN va plus vite qu'un dashboard parce qu'il prépare le travail à l'avance — et reste fiable parce que rien ne part sans votre validation.",
      points: [
        "Limité à votre équipe. STRIVN ne voit que vos joueurs, votre calendrier, vos données.",
        "Aucun message ne part sans votre OK. L'IA propose, vous validez ou refusez.",
        "Vous voyez toujours pourquoi STRIVN suggère quelque chose, avant de cliquer.",
        "WhatsApp pour parler aux joueurs. La plateforme pour le travail du staff. Deux outils, un seul flux.",
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: "Les questions qu'on nous pose en premier.",
      body: "Pour qui c'est, où ça se passe, et qui décide quoi.",
      items: [
        {
          question: "C'est pour un coach seul ou pour tout un staff ?",
          answer:
            "Les deux. Que vous soyez seul aux manettes ou avec un staff complet (adjoint, prépa, kiné, doc), tout le monde travaille sur la même plateforme — chacun avec sa vue. Personne ne retape ce que le voisin a déjà noté.",
        },
        {
          question: 'Concrètement, le staff travaille où ?',
          answer:
            "Dans la plateforme STRIVN — un dashboard simple avec calendrier, joueurs, charge, ressenti et blessures. Vous pouvez dicter au lieu de taper, et demander à l'assistant ce que vous voulez sans changer d'écran.",
        },
        {
          question: "Et les joueurs, comment ils interagissent ?",
          answer:
            "Par leur WhatsApp, point. Les convocations, les questions de ressenti, les retours de séance et les relances arrivent dans leur fil de discussion habituel. Pas d'app à installer, pas de mot de passe, pas de nouvelle habitude. Leurs réponses remontent toutes seules dans la plateforme.",
        },
        {
          question: "Qui décide vraiment ? L'IA ou le coach ?",
          answer:
            "Le coach. Toujours. STRIVN peut préparer une convocation, rédiger une relance, suggérer un changement de séance — mais rien ne part sans votre validation. Aucune écriture en silence.",
        },
        {
          question: "C'est juste un outil pour suivre l'état de forme ?",
          answer:
            "Non. Le suivi de l'état de forme n'est qu'une partie. STRIVN gère la semaine entière : planifier, suivre, agir. Et tout passe par la plateforme côté staff, par WhatsApp côté joueurs.",
        },
      ],
    },
    contact: {
      eyebrow: 'Commencer',
      title: "Voyez STRIVN gérer votre semaine — plateforme côté staff, WhatsApp côté joueurs.",
      body:
        "Pour les coaches et les clubs qui veulent une semaine plus carrée, sans rien imposer de nouveau aux joueurs.",
      primaryCta: 'Réserver un créneau de 30 min',
      primaryHref: 'mailto:hello@strivn.ai?subject=Demo%20STRIVN%20-%20demande%20de%20creneau',
      secondaryCta: 'Retour en haut',
      backToTop: 'Retour en haut',
    },
    footer: {
      brandLine:
        "STRIVN, l'outil de gestion IA pour les staffs et coaches multi-casquettes. Intégré dans WhatsApp — là où répond déjà votre équipe.",
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Retour en haut',
    },
  },
};
