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
    cards: Array<{ role: string; title: string; body: string; surface: string; surfaceKind: 'platform' | 'channel' }>;
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
      title: 'STRIVN | The performance OS for sports staff',
      description:
        'A platform for performance staff — calendar, attendance, load, wellness, injuries — with the team reached in WhatsApp for RSVP, wellness, and session feedback.',
    },
    header: {
      brandTag: 'Platform for staff · WhatsApp for team',
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
        "A head coach spends a big part of the week on admin — chasing replies, cross-referencing data, re-typing messages. STRIVN's AI handles that and learns how you work along the way. You stay on the decisions that matter.",
      principles: [
        {
          label: 'Learns your team',
          verb: 'Week after week, it becomes yours',
          body: "STRIVN picks up your way of speaking, the rhythm of your weeks, each player's typical state. After a month it understands you better — your vocabulary, your reminders, your habits. The more you use it, the more it adapts to how you work.",
        },
        {
          label: 'Less admin',
          verb: 'No more Sunday night in Excel',
          body: 'You talk, STRIVN drafts the week. Players reply in their WhatsApp — RSVP, wellness, session feedback — and it all lands inside the platform. You stop re-typing everything by hand.',
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
          '2 wellness flags · Mendes, Ribot',
          '1 RSVP outstanding · Ribot',
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
      eyebrowChips: ['Platform for staff', 'WhatsApp for team'],
      title: 'The performance OS for sports staff.',
      titleAccent: 'The team answers from WhatsApp.',
      body:
        "STRIVN gives performance staff one platform for calendar, attendance, load, wellness, injuries, and player follow-up. The team is reached where they already are — RSVP, wellness, and session feedback come back through WhatsApp, no extra app to install.",
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
            { text: 'Attendance & player RSVP' },
            { text: 'Wellness & post-session feedback' },
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
        team: { label: 'Team channel', body: 'WhatsApp: RSVP, check-ins, wellness, feedback' },
      },
      panel: {
        sections: ['Calendar', 'Players', 'Load', 'Wellness', 'Injuries'],
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
            { direction: 'out', text: 'Wellness 8/10. Slight right-calf tightness.', time: '14:32' },
          ],
          wellness: { label: 'Wellness', value: '8/10', note: 'Right calf · to monitor' },
        },
      },
    },
    platformChannel: {
      eyebrow: 'Two surfaces · one operating loop',
      title: 'The staff has the platform. The team answers from WhatsApp.',
      body:
        'Performance staff run the week from one connected dashboard: calendar, attendance, load, wellness, injuries. STRIVN reaches the team in their existing WhatsApp for RSVP, wellness check-ins, and post-session feedback — no app for players to install.',
      platformSide: {
        eyebrow: 'Staff platform',
        url: 'app.strivn.ai · Season 2025-26',
        sections: ['Calendar', 'Players', 'Load', 'Wellness', 'Injuries'],
        activeSection: 'Players',
        contextLine: 'Tuesday, May 14 · Week 20',
        insightTitle: 'Tuesday 20:00 session · 14 of 18 confirmed',
        insightBody: '2 wellness flags (Mendes, Ribot). 1 RSVP outstanding. Reminder ready to approve.',
        rosterRows: [
          { name: 'M. Cordeiro', status: 'OK', tone: 'positive' },
          { name: 'T. Mendes', status: 'Risk', tone: 'warn' },
          { name: 'Y. Ribot', status: 'RSVP', tone: 'info' },
          { name: 'A. Dupin', status: 'OK', tone: 'positive' },
          { name: 'L. Almeida', status: 'OK', tone: 'positive' },
        ],
        caption: 'Calendar, players, load, wellness, injuries — staff sees them in one connected view.',
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
          { from: 'staff', text: 'Wellness 8/10. Slight right-calf tightness.', time: '14:32', meta: 'Player feedback' },
        ],
        caption: 'RSVP, wellness, session feedback — players answer from the WhatsApp they already check.',
      },
      bridge: 'Each WhatsApp reply lands as structured signal inside the platform — wellness, RSVP, attendance, injury notes — already in context.',
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
          body: 'Calendar, RSVP follow-up, convocation timing, and session changes become one operating flow instead of five scattered chores.',
          bullets: [
            'Schedule or reschedule sessions in the calendar',
            'Force-send or remind RSVP responses',
            'Keep the squad aligned without extra admin',
          ],
        },
        {
          phase: 'Monitor',
          title: 'Spot what needs attention before training',
          body: 'Readiness, missing responses, load shifts, and active injuries stay connected so the staff sees the real state of the group at a glance.',
          bullets: [
            'Attendance and response gaps',
            'Workload and wellness deltas',
            'Player risk and injury visibility',
          ],
        },
        {
          phase: 'Act',
          title: 'Approve in the platform — STRIVN handles the rest',
          body: 'The assistant drafts the write. The coach approves. STRIVN dispatches the convocation, the reminder, the wellness ask through WhatsApp — and the responses flow back as structured signal.',
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
            body: 'WhatsApp replies, coach chat, voice dictation, attendance gaps, player wellness, injury notes, calendar state.',
          },
          {
            label: 'Surfaces',
            body: 'Staff platform: calendar, players, load, wellness, injuries, RSVP, reports. WhatsApp: the team channel.',
          },
          {
            label: 'Actions',
            body: 'Schedule changes, RSVP reminders, convocations, return-to-play steps, guided follow-up — drafted by STRIVN, approved by the coach.',
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
      title: 'Staff runs the platform. The team answers from WhatsApp.',
      body:
        'Coach, S&C, physio — each gets their angle on the same data inside the platform. Players keep their light experience in WhatsApp. No re-entry, no separate apps.',
      cards: [
        {
          role: 'Coach',
          surface: 'Platform · Calendar + actions',
          surfaceKind: 'platform',
          title: 'Pilot the week from the platform',
          body:
            'Calendar, sessions, convocations, player signals, action approvals — all in one view. The coach keeps the final tap on every write.',
        },
        {
          role: 'S&C coach',
          surface: 'Platform · Load + wellness',
          surfaceKind: 'platform',
          title: 'See the load without re-entering it',
          body:
            'Training load, post-session wellness, risk deltas — connected in the platform so the strength & conditioning coach can adjust intensity before the next session.',
        },
        {
          role: 'Physio',
          surface: 'Platform · Injuries + return-to-play',
          surfaceKind: 'platform',
          title: 'Track injuries and return-to-play in context',
          body:
            'Physio notes, return-to-play protocols, injury state — tied to calendar and load. The return path is planned in the platform, not improvised.',
        },
        {
          role: 'Player',
          surface: 'WhatsApp · Team channel',
          surfaceKind: 'channel',
          title: 'Answer from the chat they already check',
          body:
            'Check-ins, confirmations, wellness, follow-ups — through the WhatsApp they already use. No new app, no new password, no new habit.',
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
            'In the platform — a connected dashboard for calendar, players, load, wellness, and injuries. Voice dictation and an in-platform assistant let staff move fast without leaving the workspace.',
        },
        {
          question: 'How do players interact?',
          answer:
            'Through the WhatsApp they already have. RSVP, wellness check-ins, session feedback, and follow-ups land in their thread. No app to install, no password, no new habit. Every reply flows back into the platform as structured signal.',
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
        'STRIVN is the performance OS for sports staff — with the team reached in their existing channel.',
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Back to top',
    },
  },
  fr: {
    meta: {
      title: "STRIVN | Le systeme d'exploitation performance du staff",
      description:
        "Une plateforme pour le staff performance — calendrier, presence, charge, wellness, blessures — avec l'equipe atteinte dans WhatsApp pour RSVP, wellness et feedbacks de seance.",
    },
    header: {
      brandTag: "Plateforme pour le staff · WhatsApp pour l'equipe",
      navLabel: 'Navigation principale',
      nav: {
        platform: 'Plateforme',
        loop: 'Boucle operative',
        ai: "L'IA a l'interieur",
        forWhom: 'Roles',
        confidence: 'Controle',
        faq: 'FAQ',
      },
      cta: 'Reserver une demo',
      languages: {
        en: 'EN',
        fr: 'FR',
      },
    },
    ai: {
      eyebrow: "L'IA a l'interieur",
      title: "Le cerveau qui prepare. Le coach qui decide.",
      body:
        "Un head coach passe une grande partie de sa semaine sur l'admin — relances, recoupement de donnees, messages a retaper. L'IA de STRIVN s'en occupe et apprend votre fonctionnement au passage. Vous restez sur les decisions qui comptent.",
      principles: [
        {
          label: 'Apprend votre equipe',
          verb: 'Au fil des semaines, elle devient la votre',
          body: "STRIVN apprend votre facon de parler, le rythme de vos semaines, et l'etat habituel de chaque joueur. Au bout d'un mois, elle vous comprend mieux — votre vocabulaire, vos relances, vos habitudes. Plus vous l'utilisez, plus elle s'adapte a votre maniere de faire.",
        },
        {
          label: "Moins d'admin",
          verb: "Fini le dimanche soir devant l'Excel",
          body: "Vous lui parlez, STRIVN prepare le calendrier de la semaine. Les joueurs repondent dans leur WhatsApp — presence, wellness, ressenti seance — et tout se retrouve dans la plateforme. Vous arretez de tout retaper a la main.",
        },
        {
          label: "L'etat du groupe",
          verb: 'Mardi 19h45. Un seul ecran.',
          body: "Qui est confirme. Qui est blesse. Qui n'a pas repondu. Qui a une charge elevee. STRIVN vous le montre d'un coup d'oeil avant la seance — au lieu de chercher dans cinq onglets.",
        },
        {
          label: 'Tout le staff',
          verb: 'Un seul endroit. Plusieurs angles.',
          body: "Quelle que soit la taille du staff, tout le monde travaille depuis la meme plateforme. Kine, prepa, adjoint, analyste video, doc — chacun a son angle sur le meme groupe, sans ressaisir ce que le voisin a deja note. L'IA augmente le travail de chacun, sans le remplacer.",
        },
      ],
      trace: {
        eyebrow: 'Trace · preuves',
        badge: 'A valider',
        title: 'Envoyer la convocation mardi 20h ?',
        evidenceLabel: 'Raisonnement',
        evidence: [
          '18 joueurs concernes',
          '2 alertes wellness · Mendes, Ribot',
          '1 RSVP en attente · Ribot',
          'Match a domicile · dimanche 15h',
        ],
        confidenceLabel: 'Confiance',
        confidenceLevel: 'Elevee',
        confidenceSegments: 5,
        confidenceTotal: 6,
        approve: 'Valider · envoyer',
        adjust: 'Ajuster',
        caption: "Le raisonnement reste visible — pour que le coach audite le mouvement avant qu'il parte.",
      },
    },
    hero: {
      eyebrowChips: ['Plateforme staff', 'WhatsApp equipe'],
      title: "Le systeme d'exploitation performance du staff.",
      titleAccent: "L'equipe repond depuis WhatsApp.",
      body:
        "STRIVN donne au staff performance une seule plateforme pour calendrier, presence, charge, wellness, blessures et relances. L'equipe est atteinte la ou elle est deja — RSVP, wellness et feedbacks de seance reviennent par WhatsApp, sans nouvelle app a installer.",
      primaryCta: 'Reserver un creneau de 30 min',
      secondaryCta: 'Voir la boucle en action',
      signals: [
        {
          label: 'Planifier',
          features: [
            { text: 'Calendrier, evenements & convocations' },
            { text: 'Planification de seances' },
            { text: 'Contenu & tactiques par seance', soon: true },
          ],
        },
        {
          label: 'Suivre',
          features: [
            { text: 'Presences & RSVP joueurs' },
            { text: 'Wellness & ressenti post-seance' },
            { text: 'Suivi des blessures & avis kine' },
            { text: "Charge d'entrainement & risque joueur" },
          ],
        },
        {
          label: 'Agir',
          features: [
            { text: 'Conception de seance adaptee a la charge' },
            { text: 'Convocations, relances & feedbacks' },
            { text: 'Protocoles de retour au jeu' },
          ],
        },
      ],
      aiStrip: {
        badge: "Pilote par l'IA",
        staff: { label: 'Assistant staff', body: 'voix, chat, validation des actions dans la plateforme' },
        team: { label: "Canal d'equipe", body: 'WhatsApp : RSVP, check-ins, wellness, feedbacks' },
      },
      panel: {
        sections: ['Calendrier', 'Joueurs', 'Charge', 'Wellness', 'Blessures'],
        activeSection: 'Calendrier',
        contextLine: 'Mardi 14 mai · Semaine 20',
        urlLabel: 'app.strivn.ai · Saison 2025-26',
        stepVoiceLabel: 'Dictee vocale',
        stepVoiceQuote: '"Planifie la semaine. Entrainements mardi, jeudi, vendredi a 20h. Match a domicile dimanche 15h."',
        stepVoiceEcho:
          '4 evenements prepares pour la semaine — 3 seances et 1 match a domicile.',
        stepStateLabel: 'Etat de la semaine',
        stepStatePillAttendance: '3 seances creees',
        stepStatePillRisk: '1 match a domicile',
        stepStatePillRsvp: '18 joueurs concernes',
        stepStateExplain:
          "J'ai prepare 4 evenements pour la semaine. Je lance la convocation pour mardi 20h ?",
        stepStateInsights: [
          'Mar 20:00 — seance equipe',
          'Jeu 20:00 — seance equipe',
          'Ven 20:00 — seance equipe',
          'Dim 15:00 — match a domicile',
        ],
        stepProposalLabel: 'Action proposee',
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
          label: 'Cote joueur · WhatsApp',
          phoneTime: '14:32',
          phoneName: 'Equipe Strivn',
          phoneSub: 'en ligne',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Entrainement mardi 14 mai, 20:00. Tu seras la ?', time: '14:30' },
            { direction: 'out', text: 'OK je serai la.', time: '14:31' },
            { direction: 'in', text: 'Comment tu te sens aujourd hui ?', time: '14:31' },
            { direction: 'out', text: 'Wellness 8/10. Petite gene au mollet droit.', time: '14:32' },
          ],
          wellness: { label: 'Wellness', value: '8/10', note: 'Mollet droit · a surveiller' },
        },
      },
    },
    platformChannel: {
      eyebrow: "Deux surfaces · une boucle operative",
      title: "Le staff a la plateforme. L'equipe repond depuis WhatsApp.",
      body:
        "Le staff fait tourner la semaine depuis un meme dashboard connecte : calendrier, presence, charge, wellness, blessures. STRIVN atteint l'equipe dans son WhatsApp pour RSVP, wellness et feedbacks de seance — sans app a installer.",
      platformSide: {
        eyebrow: 'Plateforme staff',
        url: 'app.strivn.ai · Saison 2025-26',
        sections: ['Calendrier', 'Joueurs', 'Charge', 'Wellness', 'Blessures'],
        activeSection: 'Joueurs',
        contextLine: 'Mardi 14 mai · Semaine 20',
        insightTitle: 'Seance mardi 20:00 · 14 sur 18 confirmes',
        insightBody: '2 alertes wellness (Mendes, Ribot). 1 RSVP en attente. Relance prete a valider.',
        rosterRows: [
          { name: 'M. Cordeiro', status: 'OK', tone: 'positive' },
          { name: 'T. Mendes', status: 'Risque', tone: 'warn' },
          { name: 'Y. Ribot', status: 'RSVP', tone: 'info' },
          { name: 'A. Dupin', status: 'OK', tone: 'positive' },
          { name: 'L. Almeida', status: 'OK', tone: 'positive' },
        ],
        caption: 'Calendrier, joueurs, charge, wellness, blessures — le staff voit tout dans une meme vue.',
      },
      channelSide: {
        eyebrow: "Canal d'equipe",
        label: 'Cote joueur · WhatsApp',
        phoneName: 'Equipe Strivn',
        phoneSub: 'en ligne',
        phoneAvatar: 'S',
        phoneTime: '14:32',
        thread: [
          { from: 'player', text: 'Entrainement mardi 14 mai, 20:00. Tu seras la ?', time: '14:30', meta: 'STRIVN → joueur' },
          { from: 'staff', text: 'OK je serai la.', time: '14:31', meta: 'Reponse joueur' },
          { from: 'player', text: 'Comment tu te sens aujourd hui ?', time: '14:31', meta: 'Check-in STRIVN' },
          { from: 'staff', text: 'Wellness 8/10. Petite gene au mollet droit.', time: '14:32', meta: 'Feedback joueur' },
        ],
        caption: "RSVP, wellness, feedback seance — les joueurs repondent depuis le WhatsApp qu'ils ouvrent deja.",
      },
      bridge: "Chaque reponse WhatsApp revient comme signal structure dans la plateforme — wellness, RSVP, presence, notes blessure — deja en contexte.",
    },
    howItWorks: {
      eyebrow: 'La boucle operative',
      title: "Construit autour du vrai rythme hebdomadaire d'un coach.",
      body:
        "Une boucle complete : faire tourner la semaine depuis la plateforme, atteindre l'equipe dans WhatsApp, et passer de la recommandation a l'execution sans perdre le controle.",
      moments: [
        {
          phase: 'Planifier',
          title: 'Pilotez la semaine depuis une seule plateforme',
          body: 'Calendrier, relances RSVP, timing des convocations et changements de seances deviennent un seul flux operatif au lieu de cinq taches dispersees.',
          bullets: [
            'Planifier ou replanifier des seances dans le calendrier',
            'Forcer un envoi ou relancer les reponses RSVP',
            'Garder le groupe aligne sans admin supplementaire',
          ],
        },
        {
          phase: 'Suivre',
          title: "Reperez tot ce qui demande de l'attention",
          body: "Readiness, reponses manquantes, variations de charge et blessures actives restent connectees pour que le staff voie l'etat reel du groupe.",
          bullets: [
            'Ecarts de presence et de reponse',
            'Contexte charge et wellness',
            'Visibilite risque joueur et blessure',
          ],
        },
        {
          phase: 'Agir',
          title: 'Validez dans la plateforme — STRIVN orchestre le reste',
          body: "L'assistant prepare l'ecriture. Le coach valide. STRIVN diffuse la convocation, la relance, le ressenti via WhatsApp — et les reponses reviennent en signal structure.",
          bullets: [
            "Cartes d'action avec valider / refuser",
            'Preuves visibles derriere la recommandation',
            'Diffusion WhatsApp pour la communication joueur',
          ],
        },
      ],
      board: {
        eyebrow: 'Preuve operative',
        title: "Ce que l'assistant peut deja ancrer aujourd'hui",
        stamp: 'Verite produit actuelle',
        items: [
          {
            label: 'Entrees',
            body: 'Reponses WhatsApp, chat coach, dictee vocale, ecarts de presence, wellness joueur, notes blessure, etat du calendrier.',
          },
          {
            label: 'Surfaces',
            body: 'Plateforme staff : calendrier, joueurs, charge, wellness, blessures, RSVP, rapports. WhatsApp : le canal de l\'equipe.',
          },
          {
            label: 'Actions',
            body: 'Changements de planning, relances RSVP, convocations, etapes de retour au jeu, suivi guide — prepares par STRIVN, valides par le coach.',
          },
          {
            label: 'Garde-fous',
            body: 'Langage de proposition, preuves visibles, scope equipe, validation humaine avant ecriture.',
          },
        ],
      },
    },
    forWhom: {
      eyebrow: "Un produit · staff et equipe",
      title: "Le staff pilote la plateforme. L'equipe repond depuis WhatsApp.",
      body:
        "Coach, preparateur, kine — chacun retrouve son angle dans la plateforme. Les joueurs gardent leur experience legere dans WhatsApp. Pas de double saisie, pas d'app a part.",
      cards: [
        {
          role: 'Coach',
          surface: 'Plateforme · Calendrier + actions',
          surfaceKind: 'platform',
          title: 'Piloter la semaine depuis la plateforme',
          body:
            "Calendrier, seances, convocations, signaux joueurs, validation d'actions — dans une meme vue. Le coach garde le dernier tap sur chaque ecriture.",
        },
        {
          role: 'Preparateur',
          surface: 'Plateforme · Charge + wellness',
          surfaceKind: 'platform',
          title: 'Voir la charge sans la ressaisir',
          body:
            "Charge d'entrainement, wellness post-seance, variations de risque — connectes dans la plateforme pour ajuster l'intensite avant la prochaine seance.",
        },
        {
          role: 'Kine',
          surface: 'Plateforme · Blessures + retour au jeu',
          surfaceKind: 'platform',
          title: 'Suivre blessures et retour au jeu en contexte',
          body:
            'Notes kine, protocoles de revalidation, etat des blessures — relies au calendrier et a la charge. Le retour se planifie dans la plateforme.',
        },
        {
          role: 'Joueur',
          surface: "WhatsApp · Canal d'equipe",
          surfaceKind: 'channel',
          title: 'Repondre depuis le chat deja ouvert',
          body:
            "Check-ins, confirmations, wellness, relances — dans le WhatsApp deja utilise. Pas de nouvelle app, pas de mot de passe, pas d'habitude a imposer.",
        },
      ],
    },
    confidence: {
      eyebrow: 'Controle · preuve · perimetre',
      title: 'Assez serieux pour un staff. Assez leger pour un coach au bord du terrain.',
      body:
        "STRIVN va plus vite qu'un dashboard parce qu'il prepare le travail — et reste fiable parce que chaque ecriture demande un tap humain.",
      points: [
        "Borne au contexte de votre equipe. Pas un chatbot flottant.",
        "Chaque action d'ecriture est proposee d'abord. Rien n'est applique en silence.",
        'Les preuves restent visibles pour comprendre pourquoi le mouvement est suggere.',
        "WhatsApp est le canal de l'equipe. La plateforme est l'espace de travail du staff.",
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: "Les questions qu'un coach ou un club serieux pose en premier.",
      body: "Pour qui c'est, ou le travail se fait, et quel niveau d'autonomie l'assistant a vraiment.",
      items: [
        {
          question: 'STRIVN est-il pense pour un coach seul ou pour tout un staff ?',
          answer:
            "Les deux. Le ton est coach-first parce que la douleur quotidienne est la. Mais preparateur, kine et analyste ont chacun leur angle dans la plateforme sans ressaisir de donnees.",
        },
        {
          question: 'Ou le staff travaille-t-il concretement ?',
          answer:
            "Dans la plateforme — un dashboard connecte pour le calendrier, les joueurs, la charge, le wellness et les blessures. Dictee vocale et assistant en contexte pour aller vite sans quitter l'espace de travail.",
        },
        {
          question: "Comment les joueurs interagissent-ils ?",
          answer:
            "Par leur WhatsApp deja installe. RSVP, check-ins wellness, feedback de seance et relances arrivent dans leur thread. Pas d'app, pas de mot de passe, pas d'habitude a imposer. Chaque reponse revient comme signal structure dans la plateforme.",
        },
        {
          question: 'Quel controle le coach garde-t-il sur les actions ?',
          answer:
            "Total. STRIVN peut repondre et preparer, mais chaque ecriture — changement de planning, convocation, relance — est proposee et demande un tap explicite avant d'etre appliquee.",
        },
        {
          question: "Est-ce seulement un outil de readiness ?",
          answer:
            "Non. La readiness n'est qu'une partie. La valeur plus large est de faire tourner la semaine entiere — plan, suivi, action — depuis une plateforme avec l'equipe atteinte dans son canal existant.",
        },
      ],
    },
    contact: {
      eyebrow: 'Commencer',
      title: "Voyez STRIVN faire tourner votre semaine — plateforme staff, WhatsApp equipe.",
      body:
        "Ideal pour les coaches ambitieux et les clubs qui veulent une execution hebdomadaire plus nette sans ajouter un process lourd pour les joueurs.",
      primaryCta: 'Reserver un creneau de 30 min',
      primaryHref: 'mailto:hello@strivn.ai?subject=Demo%20STRIVN%20-%20demande%20de%20creneau',
      secondaryCta: 'Retour en haut',
      backToTop: 'Retour en haut',
    },
    footer: {
      brandLine:
        "STRIVN est le systeme d'exploitation performance du staff — avec l'equipe atteinte dans son canal existant.",
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Retour en haut',
    },
  },
};
