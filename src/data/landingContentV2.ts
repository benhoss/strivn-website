export type Locale = 'en' | 'fr';

export const landingContentV2: Record<Locale, {
  meta: { title: string; description: string };
  nav: { items: Array<{ label: string; href: string }> };
  hero: {
    overline: string;
    title: string;
    titleAccent: string;
    body: string;
    cta: string;
    ctaHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  pain: {
    eyebrow: string;
    title: string;
    cards: Array<{ num: string; title: string; body: string }>;
  };
  loop: {
    eyebrow: string;
    title: string;
    steps: Array<{ phase: string; title: string; body: string }>;
  };
  proof: {
    eyebrow: string;
    stats: Array<{ value: string; label: string }>;
    quote: { text: string; author: string; role: string };
  };
  roles: {
    eyebrow: string;
    title: string;
    cards: Array<{ role: string; body: string }>;
  };
  cta: {
    title: string;
    body: string;
    button: string;
    href: string;
  };
  footer: {
    brand: string;
    tagline: string;
    links: Array<{ label: string; href: string }>;
    copyright: string;
  };
}> = {
  fr: {
    meta: {
      title: 'STRIVN — Moins d\'admin. Plus de terrain.',
      description:
        'La plateforme qui centralise calendrier, présences, charge et bien-être de ton équipe. Ton staff travaille sur un outil. Les joueurs répondent par WhatsApp.',
    },
    nav: {
      items: [
        { label: 'Problème', href: '#pain' },
        { label: 'Solution', href: '#loop' },
        { label: 'Rôles', href: '#roles' },
        { label: 'Contact', href: '#cta' },
      ],
    },
    hero: {
      overline: 'Plateforme pour le staff · WhatsApp pour l\'équipe',
      title: 'Moins d\'admin.',
      titleAccent: 'Plus de terrain.',
      body:
        'STRIVN centralise calendrier, présences, charge et bien-être de ton équipe. Ton staff travaille sur une plateforme unifiée. Les joueurs répondent par WhatsApp — pas d\'app à installer.',
      cta: 'Voir comment ça marche',
      ctaHref: '#loop',
      secondaryCta: 'Réserver une démo',
      secondaryHref: '#cta',
    },
    pain: {
      eyebrow: 'Le quotidien d\'un coach',
      title: 'Vous passez 40% de votre temps sur de l\'admin.',
      cards: [
        {
          num: '01',
          title: 'Le calendrier éclaté',
          body: 'Entraînements, matchs, réunions staff — dispersés entre Excel, WhatsApp et votre tête. Un joueur manque ? Vous le découvrez sur le parking.',
        },
        {
          num: '02',
          title: 'Les relances sans fin',
          body: 'Dimanche soir à relancer 18 joueurs un par un. "Tu viens mardi ?" "Et jeudi ?" Même réponse, 18 fois.',
        },
        {
          num: '03',
          title: 'Les données qui s\'évaporent',
          body: 'Le bien-être sur un groupe WhatsApp. La charge sur une feuille Google. Les blessures dans un carnet. Rien ne se parle.',
        },
      ],
    },
    loop: {
      eyebrow: 'Le loop',
      title: 'Planifie. Surveille. Agis.',
      steps: [
        {
          phase: 'Plan',
          title: 'Construis la semaine en 2 minutes',
          body: 'Voice, chat ou drag-and-drop. STRIVN propose les créneaux, gère les convocations et synchronise le staff.',
        },
        {
          phase: 'Monitor',
          title: 'Voix le groupe d\'un coup d\'œil',
          body: 'Présences, bien-être, charge, blessures — un seul écran avant chaque séance. Pas de tabulation. Pas de surprise.',
        },
        {
          phase: 'Act',
          title: 'Approuve. STRIVN exécute.',
          body: 'L\'IA propose, vous validez. Un clic : la convocation part, le rappel aussi, le feedback est collecté. Vous gardez le contrôle.',
        },
      ],
    },
    proof: {
      eyebrow: 'En chiffres',
      stats: [
        { value: '-40%', label: 'de temps admin' },
        { value: '18/18', label: 'réponses collectées' },
        { value: '1', label: 'écran pour tout voir' },
      ],
      quote: {
        text: 'Avant, je passais mon dimanche soir à relancer les joueurs. Maintenant, j\'ai le groupe en une minute.',
        author: 'Benoît H.',
        role: 'Coach UBH, N3 handball',
      },
    },
    roles: {
      eyebrow: 'Pour qui ?',
      title: 'Un outil. Plusieurs angles.',
      cards: [
        { role: 'Coach', body: 'Calendrier, convocations, suivi joueur — tout ce qui compte pour piloter la semaine.' },
        { role: 'S&C', body: 'Charge, bien-être post-séance, alertes risque — sans ressaisir une donnée.' },
        { role: 'Physio', body: 'Blessures, protocoles retour au jeu, historique — liés au calendrier et à la charge.' },
        { role: 'Joueur', body: 'RSVP, check-in bien-être, feedback — tout par WhatsApp. Zero app.' },
      ],
    },
    cta: {
      title: 'Prêt à gagner du temps ?',
      body: 'Réserve un créneau de 20 min. On te montre comment STRIVN s\'adapte à ton rythme de coach.',
      button: 'Réserver une démo',
      href: '#contact',
    },
    footer: {
      brand: 'STRIVN',
      tagline: 'Moins d\'admin. Plus de terrain.',
      links: [
        { label: 'Twitter', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Contact', href: 'mailto:hello@strivn.net' },
      ],
      copyright: '© 2026 STRIVN. Tous droits réservés.',
    },
  },
  en: {
    meta: {
      title: 'STRIVN — Less admin. More coaching.',
      description:
        'The platform that centralizes calendar, attendance, load and wellness for your team. Staff works on one tool. Players reply on WhatsApp.',
    },
    nav: {
      items: [
        { label: 'Problem', href: '#pain' },
        { label: 'Solution', href: '#loop' },
        { label: 'Roles', href: '#roles' },
        { label: 'Contact', href: '#cta' },
      ],
    },
    hero: {
      overline: 'Platform for staff · WhatsApp for the team',
      title: 'Less admin.',
      titleAccent: 'More coaching.',
      body:
        'STRIVN centralizes calendar, attendance, load and wellness for your team. Your staff works on a unified platform. Players reply on WhatsApp — no app to install.',
      cta: 'See how it works',
      ctaHref: '#loop',
      secondaryCta: 'Book a demo',
      secondaryHref: '#cta',
    },
    pain: {
      eyebrow: 'A coach\'s daily life',
      title: 'You spend 40% of your time on admin.',
      cards: [
        {
          num: '01',
          title: 'The scattered calendar',
          body: 'Training, matches, staff meetings — spread across Excel, WhatsApp and your head. A player missing? You find out in the parking lot.',
        },
        {
          num: '02',
          title: 'Endless follow-ups',
          body: 'Sunday night chasing 18 players one by one. "Coming Tuesday?" "And Thursday?" Same answer, 18 times.',
        },
        {
          num: '03',
          title: 'Data that evaporates',
          body: 'Wellness on a WhatsApp group. Load on a Google sheet. Injuries in a notebook. Nothing talks to each other.',
        },
      ],
    },
    loop: {
      eyebrow: 'The loop',
      title: 'Plan. Monitor. Act.',
      steps: [
        {
          phase: 'Plan',
          title: 'Build the week in 2 minutes',
          body: 'Voice, chat or drag-and-drop. STRIVN suggests slots, handles convocations and syncs staff.',
        },
        {
          phase: 'Monitor',
          title: 'See the squad at a glance',
          body: 'Attendance, wellness, load, injuries — one screen before every session. No tab switching. No surprises.',
        },
        {
          phase: 'Act',
          title: 'Approve. STRIVN executes.',
          body: 'AI proposes, you validate. One click: convocation sent, reminder too, feedback collected. You stay in control.',
        },
      ],
    },
    proof: {
      eyebrow: 'By the numbers',
      stats: [
        { value: '-40%', label: 'admin time' },
        { value: '18/18', label: 'responses collected' },
        { value: '1', label: 'screen to see it all' },
      ],
      quote: {
        text: 'Before, I spent Sunday night chasing players. Now I have the whole squad in one minute.',
        author: 'Benoît H.',
        role: 'Coach UBH, N3 handball',
      },
    },
    roles: {
      eyebrow: 'For whom?',
      title: 'One tool. Many angles.',
      cards: [
        { role: 'Coach', body: 'Calendar, convocations, player tracking — everything that matters to run the week.' },
        { role: 'S&C', body: 'Load, post-session wellness, risk alerts — without re-entering a single data point.' },
        { role: 'Physio', body: 'Injuries, return-to-play protocols, history — linked to calendar and load.' },
        { role: 'Player', body: 'RSVP, wellness check-in, feedback — all via WhatsApp. Zero apps.' },
      ],
    },
    cta: {
      title: 'Ready to save time?',
      body: 'Book a 20-min slot. We\'ll show you how STRIVN adapts to your coaching rhythm.',
      button: 'Book a demo',
      href: '#contact',
    },
    footer: {
      brand: 'STRIVN',
      tagline: 'Less admin. More coaching.',
      links: [
        { label: 'Twitter', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Contact', href: 'mailto:hello@strivn.net' },
      ],
      copyright: '© 2026 STRIVN. All rights reserved.',
    },
  },
};
