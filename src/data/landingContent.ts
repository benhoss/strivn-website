export type Locale = 'en' | 'fr';

type LandingContent = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brandTag: string;
    navLabel: string;
    nav: {
      why: string;
      howItWorks: string;
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
  metrics: {
    items: Array<{ value: string; unit?: string; label: string; body: string }>;
  };
  hero: {
    eyebrow: string;
    eyebrowChips: [string, string];
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    signals: Array<{
      label: string;
      features: Array<{ text: string; soon?: boolean }>;
    }>;
    aiStrip: {
      badge: string;
      coach: { label: string; body: string };
      player: { label: string; body: string };
    };
    panel: {
      sections: string[];
      activeSection: string;
      contextLine: string;
      urlLabel: string;
      stepVoiceLabel: string;
      stepVoiceQuote: string;
      stepVoiceEcho: string;
      stepVoiceCompactLabel: string;
      stepVoiceCompactSummary: string;
      stepStateLabel: string;
      stepStatePillAttendance: string;
      stepStatePillRisk: string;
      stepStatePillRsvp: string;
      stepStateExplain: string;
      stepStateInsights: string[];
      stepStateCompactLabel: string;
      stepStateCompactSummary: string;
      stepProposalLabel: string;
      stepProposalTitle: string;
      stepProposalBadge: string;
      stepProposalMetrics: Array<{ label: string; value: string }>;
      stepProposalApprove: string;
      stepProposalReject: string;
      stepProposalCompactLabel: string;
      stepProposalCompactSummary: string;
      player: {
        label: string;
        phoneTime: string;
        phoneName: string;
        phoneSub: string;
        phoneAvatar: string;
        bubbles: Array<{ direction: 'in' | 'out'; text: string; time: string }>;
        wellness: { label: string; value: string; note: string };
        compactLabel: string;
        compactSummary: string;
      };
    };
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ label: string; title: string; body: string }>;
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
    cards: Array<{ role: string; title: string; body: string }>;
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
    metrics: {
      items: [
        { value: '1', label: 'Surface', body: 'Calendar, players, load, wellness — connected.' },
        { value: '8', label: 'Signals', body: 'Check-ins, RSVP, attendance, load, wellness, injuries, chat, voice.' },
        { value: '0', label: 'Admin tabs', body: 'No bouncing between dashboards and chat to act.' },
        { value: '100', unit: '%', label: 'Coach-approved', body: 'Every write stays a proposal until the coach confirms.' },
      ],
    },
    meta: {
      title: 'STRIVN | The AI operating layer for modern coaches',
      description:
        'Plan sessions, track player signals, and confirm the next move from one assistant built for overloaded coaches and club staff.',
    },
    header: {
      brandTag: 'The AI operating layer for coaches',
      navLabel: 'Primary',
      nav: {
        why: 'Why STRIVN',
        howItWorks: 'How it works',
        forWhom: 'For whom',
        confidence: 'Confidence',
        faq: 'FAQ',
      },
      cta: 'Book a walkthrough',
      languages: {
        en: 'EN',
        fr: 'FR',
      },
    },
    hero: {
      eyebrow: 'Coach-first. Club-ready.',
      eyebrowChips: ['Coach-first', 'Club-ready'],
      title: 'Plan, monitor, and act from one assistant.',
      body:
        "STRIVN helps overloaded coaches run the week — calendar, attendance, workload, wellness, injuries, and player follow-up — from one connected layer that links the coach's daily decisions with the players, without piling another app on the squad.",
      primaryCta: 'Request a live demo',
      secondaryCta: 'See how the assistant works',
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
          label: 'Follow',
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
        coach: { label: 'Coach assistant', body: 'voice, chat, action approval' },
        player: { label: 'Player assistant', body: 'WhatsApp, check-ins, wellness' },
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
        stepVoiceCompactLabel: 'Voice dictation',
        stepVoiceCompactSummary: 'Request received',
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
        stepStateCompactLabel: 'Week drafted',
        stepStateCompactSummary: '4 events · 18 players',
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
        stepProposalCompactLabel: 'Proposed action',
        stepProposalCompactSummary: 'Send Tuesday convocation?',
        player: {
          label: 'Player side',
          phoneTime: '14:32',
          phoneName: 'Strivn team',
          phoneSub: 'online',
          phoneAvatar: 'S',
          bubbles: [
            { direction: 'in', text: 'Training Tuesday 14 May, 20:00. Can you make it?', time: '14:30' },
            { direction: 'out', text: "Yes, I'll be there.", time: '14:31' },
            { direction: 'in', text: 'How are you feeling today?', time: '14:31' },
            { direction: 'out', text: 'Wellness 8/10. Slight calf tightness on the right.', time: '14:32' },
          ],
          wellness: { label: 'Wellness', value: '8/10', note: 'Right calf · to monitor' },
          compactLabel: 'Player side',
          compactSummary: 'Reply received · Wellness 8/10',
        },
      },
    },
    why: {
      eyebrow: 'Why STRIVN',
      title: 'Built for the operating reality of a team, not a polished demo alone.',
      body:
        'The strongest proof on the page should be product truth: the assistant sits on top of the tools, states, and actions a coach already has to manage during the week.',
      items: [
        {
          label: 'Inputs',
          title: 'Player signals already in motion',
          body: 'WhatsApp check-ins, attendance gaps, workload, wellness, injuries, and coach requests feed the same operating context.',
        },
        {
          label: 'Surfaces',
          title: 'Connected to the weekly operating stack',
          body: 'Dashboard, calendar, RSVP, workload, wellness, injuries, and reports stay part of the same product story.',
        },
        {
          label: 'Actions',
          title: 'Useful because it can help you act',
          body: 'Session moves, reminders, convocation handling, and guided follow-up can be proposed from the assistant instead of rebuilt manually.',
        },
        {
          label: 'Control',
          title: 'Premium workflow without black-box risk',
          body: 'The coach keeps control through visible evidence, scoped context, and explicit approve-or-reject moments before writes.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Built around the real weekly rhythm of a coach.',
      body:
        'A complete operating loop: run the week, understand the squad, and move from recommendation to execution without losing control.',
      moments: [
        {
          phase: 'Plan',
          title: 'Run the week from one place',
          body: 'Calendar, RSVP follow-up, convocation timing, and session changes become one operating flow instead of five scattered chores.',
          bullets: [
            'Schedule or reschedule sessions',
            'Force-send or remind RSVP responses',
            'Keep the squad aligned without extra admin',
          ],
        },
        {
          phase: 'Monitor',
          title: 'Spot what needs attention early',
          body: 'Readiness, missing responses, load shifts, and active injuries stay connected so the coach sees the real state of the group.',
          bullets: [
            'Attendance and response gaps',
            'Workload and wellness context',
            'Player risk and injury visibility',
          ],
        },
        {
          phase: 'Act',
          title: 'Move from insight to execution',
          body: 'The assistant answers, drafts a change, and proposes a write action that the coach approves before anything changes.',
          bullets: [
            'Action cards with approve / reject',
            'Visible evidence behind the recommendation',
            'Voice dictation for fast intent capture',
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
            body: 'WhatsApp responses, coach chat, voice dictation, attendance gaps, player status.',
          },
          {
            label: 'Surfaces',
            body: 'Dashboard, calendar, workload, wellness, injuries, RSVP flows, reports.',
          },
          {
            label: 'Actions',
            body: 'Schedule changes, reminders, convocation handling, and guided follow-up through confirmation cards.',
          },
          {
            label: 'Guardrails',
            body: 'Proposal-first language, visible evidence, team scoping, and human approval before writes.',
          },
        ],
      },
    },
    forWhom: {
      eyebrow: 'For whom',
      title: 'One platform, several angles.',
      body:
        'The coach steers the week. The player answers from WhatsApp. The staff sees the picture from their own lens, without re-entering anything.',
      cards: [
        {
          role: 'Coach',
          title: 'Steer the week without changing tools',
          body: "Calendar, sessions, convocations, player signals, action approval — all from one layer, with the coach keeping the final call on every write.",
        },
        {
          role: 'Player',
          title: 'Answer from where they already are',
          body: 'Check-ins, confirmations, wellness, follow-ups — through familiar WhatsApp flows. No new app, no new password, no new habit to enforce.',
        },
        {
          role: 'S&C coach',
          title: 'See the load without re-entering it',
          body: 'Training load, post-session wellness, risk signals — all connected, so the strength & conditioning coach can adjust intensity before the next session.',
        },
        {
          role: 'Physio',
          title: 'Track injuries and return-to-play in context',
          body: 'Physio notes, return-to-play protocols, injury state — tied to the calendar and load so the return path is planned, not improvised.',
        },
      ],
    },
    confidence: {
      eyebrow: 'Confidence & control',
      title: 'Serious enough for staff, simple enough for a head coach on the floor.',
      body:
        'STRIVN works because it helps coaches move faster without surrendering judgment. Not an autonomous black box.',
      points: [
        'The assistant is scoped to the team context, not a free-floating chatbot.',
        'Every write action is proposed first, never applied silently.',
        'Evidence stays visible so the coach can understand why STRIVN is suggesting a move.',
        'WhatsApp remains the player-friendly channel, but the coach runs the operation from one place.',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'The questions a serious coach or club will ask before leaning in.',
      body:
        'A good landing page resolves the obvious doubts: who it is for, how players interact, and how much autonomy the assistant actually has.',
      items: [
        {
          question: 'Is STRIVN built for a single coach or for the full staff?',
          answer:
            'Both. The voice is coach-first because that is where the daily pain is sharpest, but every connected role — S&C, physio, analyst — has their angle on the same data, without re-entering it.',
        },
        {
          question: 'What is the player experience?',
          answer:
            'Intentionally light. Check-ins, confirmations, wellness and follow-ups happen through familiar WhatsApp flows. No new app, no new password, no new habit to enforce.',
        },
        {
          question: 'How much control does the coach keep over actions?',
          answer:
            'Full control. STRIVN can answer questions and draft actions, but every write — schedule change, convocation, reminder — is proposed first and requires explicit human approval before anything moves.',
        },
        {
          question: 'What kinds of actions can the assistant help with today?',
          answer:
            'Schedule changes, RSVP reminders, convocation handling, and guided follow-up — all anchored in team context with visible evidence behind each suggestion.',
        },
        {
          question: 'Is this just a readiness tool?',
          answer:
            'No. Readiness is one part of the picture. The broader value is running the full week — planning, monitoring, and action — from one surface that the coach actually controls.',
        },
      ],
    },
    contact: {
      eyebrow: 'Get started',
      title: 'See how STRIVN can run the week with your staff, not around it.',
      body:
        'Best for ambitious coaches and clubs that need more structure without adding another heavy process for players or staff.',
      primaryCta: 'Book a 30-minute walkthrough',
      primaryHref: 'mailto:hello@strivn.ai?subject=STRIVN%20demo%20request',
      secondaryCta: 'Back to top',
      backToTop: 'Back to top',
    },
    footer: {
      brandLine:
        'STRIVN is the AI operating layer for coaches who need sharper weekly execution without heavier player workflows.',
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Back to top',
    },
  },
  fr: {
    metrics: {
      items: [
        { value: '1', label: 'Surface', body: 'Calendrier, joueurs, charge, wellness — relies.' },
        { value: '8', label: 'Signaux', body: 'Check-ins, RSVP, presence, charge, wellness, blessures, chat, voix.' },
        { value: '0', label: 'Onglet admin', body: 'Plus de va-et-vient entre dashboards et messageries pour agir.' },
        { value: '100', unit: '%', label: 'Valide par le coach', body: 'Chaque ecriture reste une proposition jusqu a confirmation.' },
      ],
    },
    meta: {
      title: 'STRIVN | La couche operative IA des coaches modernes',
      description:
        "Planifiez les seances, suivez les signaux joueurs et confirmez la prochaine action depuis un assistant concu pour les coaches et staffs debordes.",
    },
    header: {
      brandTag: 'La couche operative IA des coaches',
      navLabel: 'Navigation principale',
      nav: {
        why: 'Pourquoi STRIVN',
        howItWorks: 'Comment ca marche',
        forWhom: 'Pour qui',
        confidence: 'Confiance',
        faq: 'FAQ',
      },
      cta: 'Reserver une demo',
      languages: {
        en: 'EN',
        fr: 'FR',
      },
    },
    hero: {
      eyebrow: 'Coach-first. Club-ready.',
      eyebrowChips: ['Coach-first', 'Club-ready'],
      title: 'Planifier, suivre et agir depuis un seul assistant.',
      body:
        "STRIVN aide les coaches debordes a faire tourner la semaine — calendrier, presence, charge, wellness, blessures et relances joueurs — depuis une meme couche qui relie le quotidien du coach et celui des joueurs, sans alourdir l'experience cote joueurs.",
      primaryCta: 'Demander une demo live',
      secondaryCta: "Voir comment l'assistant fonctionne",
      signals: [
        {
          label: 'Plan',
          features: [
            { text: 'Calendrier, evenements & convocations' },
            { text: 'Planification de seances' },
            { text: 'Contenu & tactiques par seance', soon: true },
          ],
        },
        {
          label: 'Follow',
          features: [
            { text: 'Presences & RSVP joueurs' },
            { text: 'Wellness & ressenti post-seance' },
            { text: 'Suivi des blessures & avis kine' },
            { text: "Charge d'entrainement & risque joueur" },
          ],
        },
        {
          label: 'Act',
          features: [
            { text: 'Conception de seance adaptee a la charge' },
            { text: 'Convocations, relances & feedbacks' },
            { text: 'Protocoles de retour au jeu' },
          ],
        },
      ],
      aiStrip: {
        badge: "Pilote par l'IA",
        coach: { label: 'Assistant coach', body: 'voix, chat, validation des actions' },
        player: { label: 'Assistant joueur', body: 'WhatsApp, check-ins, wellness' },
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
        stepVoiceCompactLabel: 'Dictee vocale',
        stepVoiceCompactSummary: 'Demande recue',
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
        stepStateCompactLabel: 'Semaine preparee',
        stepStateCompactSummary: '4 evenements · 18 joueurs',
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
        stepProposalCompactLabel: 'Action proposee',
        stepProposalCompactSummary: 'Envoyer la convocation mardi ?',
        player: {
          label: 'Cote joueur',
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
          compactLabel: 'Cote joueur',
          compactSummary: 'Reponse recue · Wellness 8/10',
        },
      },
    },
    why: {
      eyebrow: 'Pourquoi STRIVN',
      title: "Construit pour la realite operative d'une equipe, pas seulement pour une belle demo.",
      body:
        "La preuve la plus forte de la page doit venir de la verite produit : l'assistant se pose sur les outils, les etats et les actions qu'un coach doit deja gerer pendant la semaine.",
      items: [
        {
          label: 'Entrees',
          title: 'Des signaux joueurs deja en circulation',
          body: 'Check-ins WhatsApp, ecarts de presence, charge, wellness, blessures et demandes coach alimentent un meme contexte operatif.',
        },
        {
          label: 'Surfaces',
          title: 'Connecte a la pile operative de la semaine',
          body: 'Dashboard, calendrier, RSVP, charge, wellness, blessures et rapports restent relies dans une meme histoire produit.',
        },
        {
          label: 'Actions',
          title: 'Utile parce que cela aide a agir',
          body: "Deplacements de seances, rappels, gestion des convocations et suivi guide peuvent etre proposes par l'assistant au lieu d'etre refaits a la main.",
        },
        {
          label: 'Controle',
          title: 'Un workflow premium sans risque de boite noire',
          body: 'Le coach garde la main grace aux preuves visibles, au contexte borne et aux moments explicites valider ou refuser avant toute ecriture.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Comment ca marche',
      title: "Construit autour du vrai rythme hebdomadaire d'un coach.",
      body:
        "Une boucle operative complete : faire tourner la semaine, comprendre l'etat du groupe et passer de la recommandation a l'execution sans perdre le controle.",
      moments: [
        {
          phase: 'Planifier',
          title: 'Pilotez la semaine depuis un seul endroit',
          body: 'Calendrier, relances RSVP, timing des convocations et changements de seances deviennent un seul flux operatif au lieu de cinq taches dispersees.',
          bullets: [
            'Planifier ou replanifier des seances',
            'Forcer un envoi ou relancer les reponses RSVP',
            'Garder le groupe aligne sans admin supplementaire',
          ],
        },
        {
          phase: 'Suivre',
          title: "Reperez tot ce qui demande de l'attention",
          body: "Readiness, reponses manquantes, variations de charge et blessures actives restent relies pour que le coach voie l'etat reel du groupe.",
          bullets: [
            'Ecarts de presence et de reponse',
            'Contexte charge et wellness',
            'Visibilite risque joueur et blessure',
          ],
        },
        {
          phase: 'Agir',
          title: "Passez de l'insight a l'execution",
          body: "L'assistant repond, prepare un changement et propose une action d'ecriture que le coach valide avant toute modification.",
          bullets: [
            "Cartes d'action avec valider / refuser",
            'Preuves visibles derriere la recommandation',
            "Dictee vocale pour capturer l'intention rapidement",
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
            body: 'Reponses WhatsApp, chat coach, dictee vocale, ecarts de presence et statut joueur.',
          },
          {
            label: 'Surfaces',
            body: 'Dashboard, calendrier, charge, wellness, blessures, RSVP et rapports.',
          },
          {
            label: 'Actions',
            body: 'Changements de planning, rappels, gestion des convocations et suivi guide via cartes de confirmation.',
          },
          {
            label: 'Garde-fous',
            body: 'Langage de proposition, preuves visibles, scope equipe et validation humaine avant ecriture.',
          },
        ],
      },
    },
    forWhom: {
      eyebrow: 'Pour qui',
      title: 'Une plateforme, plusieurs angles.',
      body:
        "Le coach pilote la semaine. Le joueur repond depuis WhatsApp. Le staff voit l'etat joueur dans son angle, sans ressaisir.",
      cards: [
        {
          role: 'Coach',
          title: "Piloter la semaine sans changer d'outil",
          body: "Calendrier, seances, convocations, signaux joueurs, validation d'actions — tout depuis une meme couche, en gardant la main sur chaque ecriture.",
        },
        {
          role: 'Joueur',
          title: 'Repondre la ou ils sont deja',
          body: "Check-ins, confirmations, wellness, relances — via WhatsApp. Pas de nouvelle app, pas de mot de passe, pas d'habitude a imposer.",
        },
        {
          role: 'Preparateur',
          title: 'Voir la charge sans la ressaisir',
          body: "Charge d'entrainement, wellness post-seance, signaux de risque — tout est connecte pour ajuster l'intensite avant la prochaine seance.",
        },
        {
          role: 'Kine',
          title: 'Suivre blessures et retour au jeu en contexte',
          body: 'Avis kine, protocoles de revalidation, etat des blessures — relies au calendrier et a la charge pour planifier le retour sans risque.',
        },
      ],
    },
    confidence: {
      eyebrow: 'Confiance & controle',
      title: 'Assez serieux pour un staff, assez simple pour un head coach sur le terrain.',
      body:
        "STRIVN fonctionne parce qu'il aide les coaches a aller plus vite sans abandonner leur jugement. Pas une boite noire autonome.",
      points: [
        "L'assistant reste borne au contexte de l'equipe, pas a un chatbot flottant.",
        "Chaque action d'ecriture est proposee d'abord, jamais appliquee en silence.",
        'Les preuves restent visibles pour que le coach comprenne pourquoi STRIVN suggere ce mouvement.',
        "WhatsApp reste le canal naturel pour les joueurs, mais le coach pilote l'operation depuis un seul endroit.",
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: "Les questions qu'un coach ou un club serieux va poser avant d'aller plus loin.",
      body:
        "Une bonne landing page doit lever les doutes evidents : pour qui c'est, comment les joueurs interagissent et quel niveau d'autonomie l'assistant a vraiment.",
      items: [
        {
          question: 'STRIVN est-il pense pour un coach seul ou pour tout un staff ?',
          answer:
            "Les deux. Le ton est coach-first parce que c'est la que la douleur quotidienne est la plus forte, mais chaque role connecte — preparateur, kine, analyste — a son angle sur les memes donnees, sans ressaisir.",
        },
        {
          question: "Quelle est l'experience cote joueur ?",
          answer:
            "Volontairement legere. Check-ins, confirmations, wellness et relances passent par des flux WhatsApp familiers. Pas de nouvelle app, pas de mot de passe, pas d'habitude a imposer.",
        },
        {
          question: 'Quel controle le coach garde-t-il sur les actions ?',
          answer:
            "Total. STRIVN peut repondre et preparer des actions, mais chaque ecriture — changement de planning, convocation, relance — est proposee d'abord et demande une validation humaine explicite avant toute modification.",
        },
        {
          question: "Quels types d'actions peut-il vraiment aider a faire aujourd'hui ?",
          answer:
            "Changements de planning, relances RSVP, gestion des convocations et suivi guide — toujours relies au contexte equipe et a des preuves visibles derriere chaque suggestion.",
        },
        {
          question: 'Est-ce seulement un outil de readiness ?',
          answer:
            "Non. La readiness n'est qu'une partie du tableau. La valeur plus large est de faire tourner la semaine entiere — planification, suivi, action — depuis une seule surface que le coach controle vraiment.",
        },
      ],
    },
    contact: {
      eyebrow: 'Commencer',
      title: 'Voyez comment STRIVN peut faire tourner la semaine avec votre staff, pas a cote de lui.',
      body:
        'Ideal pour les coaches ambitieux et les clubs qui ont besoin de plus de structure sans ajouter un process lourd pour les joueurs ou le staff.',
      primaryCta: 'Reserver un creneau de 30 min',
      primaryHref: 'mailto:hello@strivn.ai?subject=Demo%20STRIVN%20-%20demande%20de%20creneau',
      secondaryCta: 'Retour en haut',
      backToTop: 'Retour en haut',
    },
    footer: {
      brandLine:
        "STRIVN est la couche operative IA des coaches qui veulent une execution hebdomadaire plus nette sans alourdir l'experience joueur.",
      contactLabel: 'Contact',
      email: 'hello@strivn.ai',
      backToTop: 'Retour en haut',
    },
  },
};
