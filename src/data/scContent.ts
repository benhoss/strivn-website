import type { Locale } from './landingContent';

type Slide = {
  img: string;
  /** Optional video base path (without extension); .mp4 + .webm are loaded, img is the poster. */
  video?: string;
  kind: 'desktop' | 'mobile';
  alt: string;
  caption: string;
};

type Showcase = {
  title: string;
  blurb: string;
  slides: Slide[];
};

type ScContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; cta: string };
  showcase: Showcase[];
  featuresLead: string;
  features: {
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  finalCta: { title: string; body: string; cta: string };
};

export const scContent: Record<Locale, ScContent> = {
  fr: {
    meta: {
      title: 'STRIVN pour les préparateurs physiques : charge, GPS et readiness',
      description:
        'Planification de la charge, import GPS, estimation de la readiness, suivi des blessures et retour au jeu : STRIVN donne aux préparateurs physiques une vue complète sur chaque joueur, en temps réel.',
    },
    eyebrow: 'STRIVN pour les préparateurs physiques',
    hero: {
      title: 'La charge, la forme et la santé de chaque joueur. Au même endroit.',
      lede: 'Import GPS, estimation de la fatigue, planification de la charge. Tout partagé en temps réel avec votre staff.',
      cta: 'Commencer gratuitement',
    },
    showcase: [
      {
        title: 'Planifier et suivre la charge',
        blurb: 'Planifiez la semaine, puis laissez la charge planifiée vs réelle et l’ACWR par joueur se calculer tout seuls. Formule sRPE ou GPS, sans tableur.',
        slides: [
          {
            img: '/screenshots/load-planning-fr.png',
            video: '/videos/load-planning-fr',
            kind: 'desktop',
            alt: 'Planification de charge STRIVN : charge planifiée par jour, objectif hebdomadaire et ACWR projeté',
            caption: 'Planifiez la charge de la semaine jour par jour, avec prévision d’ACWR et objectif hebdo.',
          },
          {
            img: '/screenshots/load-overview-fr.png',
            kind: 'desktop',
            alt: 'Vue charge équipe STRIVN : charge totale, RPE moyen et distribution par joueur',
            caption: 'La charge de la semaine, par joueur, avec le RPE et la distribution.',
          },
          {
            img: '/screenshots/load-formula-fr.png',
            kind: 'desktop',
            alt: 'Configuration de la formule de charge sRPE dans STRIVN',
            caption: 'Réglez votre formule de charge sRPE ou GPS en quelques secondes.',
          },
        ],
      },
      {
        title: 'Readiness et check-ins, des deux côtés',
        blurb: 'Le matin, vous voyez qui a répondu et qui est à risque. Les joueurs renseignent fatigue, sommeil, stress et humeur depuis leur téléphone.',
        slides: [
          {
            img: '/screenshots/wellness-briefing-fr.png',
            video: '/videos/readiness-fr',
            kind: 'desktop',
            alt: 'Briefing du matin STRIVN : réponses aux check-ins et niveaux de risque par joueur',
            caption: 'Le briefing du matin : qui a répondu, qui est à surveiller.',
          },
          {
            img: '/screenshots/portal-checkin-fr.png',
            kind: 'mobile',
            alt: 'Check-in wellness côté joueur : curseurs fatigue, sommeil, stress et humeur',
            caption: 'Le joueur renseigne fatigue, sommeil, stress et humeur en quelques secondes.',
          },
        ],
      },
      {
        title: 'Pensé aussi pour les joueurs',
        blurb: 'Chaque joueur a son espace : readiness, charge de la semaine, agenda des séances et matchs. Pas de compte à créer, pas de friction.',
        slides: [
          {
            img: '/screenshots/portal-fitness-fr.png',
            kind: 'mobile',
            alt: 'Espace joueur STRIVN : readiness, charge récente et tendance de la semaine',
            caption: 'Le joueur voit sa readiness et sa charge de la semaine.',
          },
          {
            img: '/screenshots/portal-agenda-fr.png',
            kind: 'mobile',
            alt: 'Agenda joueur STRIVN : séances, matchs et réunions des deux prochaines semaines',
            caption: 'Séances, matchs et réunions réunis dans un seul agenda.',
          },
        ],
      },
    ],
    featuresLead: 'Et tout le reste du quotidien d’un préparateur physique.',
    features: {
      title: 'Ce que STRIVN apporte aux préparateurs physiques',
      items: [
        {
          title: 'Planification de la charge',
          text: 'Construisez des semaines d\'entraînement avec charge planifiée vs réelle, gestion de l\'ACWR et des catégories de charge (physique, technique, match). Les dépassements ressortent d\'eux-mêmes.',
        },
        {
          title: 'Import GPS et formules de charge',
          text: 'Importez les fichiers Catapult ou Statsport, mappez vos métriques personnalisées et calculez automatiquement la charge de séance par joueur. Pas de ressaisie, pas de tableur.',
        },
        {
          title: 'Readiness et estimation de la fatigue',
          text: 'STRIVN projette la readiness de chaque joueur sur 1 à 5 jours à partir de la charge réelle et d\'un modèle de décroissance de fatigue. Anticipez les pics avant qu\'ils arrivent.',
        },
        {
          title: 'Check-ins RPE et wellness',
          text: 'Questionnaires de bien-être le matin et sRPE en fin de séance, envoyés automatiquement. Les tendances individuelles et collectives sont visibles en un coup d\'oeil.',
        },
        {
          title: 'Blessures et retour au jeu',
          text: 'Trois niveaux de disponibilité : INDISPONIBLE, ENTRAÎNEMENT PARTIEL et DISPONIBLE. Notes de suivi, pièces jointes et historique complet. Le retour au jeu reste cohérent même entre deux équipes.',
        },
        {
          title: 'Assistant IA coach',
          text: 'Interrogez l\'assistant en langage naturel : « Qui est à risque cette semaine ? », « Planifie une récupération pour demain. » L\'IA lit la charge, la readiness et les blessures pour vous répondre avec contexte.',
        },
      ],
    },
    howItWorks: {
      title: 'La journée d\'un préparateur physique avec STRIVN',
      steps: [
        {
          title: 'Le matin : vérifier la readiness',
          text: 'Les check-ins wellness arrivent automatiquement. STRIVN vous montre qui est frais, qui accumule de la fatigue et qui dépasse son seuil. Avant même que la séance commence.',
        },
        {
          title: 'Avant la séance : planifier la charge',
          text: 'Ajustez l\'intensité planifiée en fonction de la readiness du groupe. Le plan de charge hebdomadaire se met à jour en temps réel et signale les déséquilibres charge aiguë/chronique.',
        },
        {
          title: 'Pendant ou après : capturer la charge réelle',
          text: 'Importez le fichier GPS de la séance ou saisissez les RPE joueur par joueur. La charge réelle se compare automatiquement au plan et met à jour les projections de readiness pour les jours suivants.',
        },
        {
          title: 'En fin de semaine : analyser les tendances',
          text: 'Visualisez la charge cumulative, les ACWR par joueur et les alertes de surmenage. Partagez le tableau de bord avec le coach en chef et le médecin sans export manuel.',
        },
      ],
    },
    finalCta: {
      title: 'Commencez gratuitement dès aujourd\'hui.',
      body: 'STRIVN est gratuit pour une équipe, sans carte bancaire. Invitez votre staff médical et votre coach en chef. Ils voient les mêmes données en temps réel.',
      cta: 'Créer mon espace équipe',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for S&C coaches: load, GPS and readiness',
      description:
        'Load planning, GPS import, readiness estimation, injury tracking and return-to-play: STRIVN gives S&C coaches a complete picture of every player, in real time.',
    },
    eyebrow: 'STRIVN for S&C coaches',
    hero: {
      title: 'Every player\'s load, readiness and health. In one place.',
      lede: 'GPS import, fatigue estimation, load planning and return-to-play. All in one platform, shared with your full staff.',
      cta: 'Start for free',
    },
    showcase: [
      {
        title: 'Plan and track training load',
        blurb: 'Plan the week, then let planned vs actual load and per-player ACWR calculate themselves. sRPE or GPS formula, no spreadsheet required.',
        slides: [
          {
            img: '/screenshots/load-planning.png',
            video: '/videos/load-planning-en',
            kind: 'desktop',
            alt: 'STRIVN load planning: daily planned load, weekly target and projected ACWR for the week',
            caption: 'Plan the week’s load by day, with an ACWR forecast and weekly target.',
          },
          {
            img: '/screenshots/load-overview.png',
            kind: 'desktop',
            alt: 'STRIVN team load view: total load, average RPE and per-player distribution',
            caption: 'The week’s load, per player, with RPE and distribution.',
          },
          {
            img: '/screenshots/load-formula.png',
            kind: 'desktop',
            alt: 'Configuring the sRPE load formula in STRIVN',
            caption: 'Set your sRPE or GPS load formula in seconds.',
          },
        ],
      },
      {
        title: 'Readiness and check-ins, on both sides',
        blurb: 'In the morning you see who responded and who is at risk. Players log fatigue, sleep, stress and mood from their phone.',
        slides: [
          {
            img: '/screenshots/wellness-briefing.png',
            video: '/videos/readiness-en',
            kind: 'desktop',
            alt: 'STRIVN morning briefing: check-in responses and per-player risk levels',
            caption: 'The morning briefing: who responded, who to watch.',
          },
          {
            img: '/screenshots/portal-checkin.png',
            kind: 'mobile',
            alt: 'Player-side wellness check-in: fatigue, sleep, stress and mood sliders',
            caption: 'Players log fatigue, sleep, stress and mood in seconds.',
          },
        ],
      },
      {
        title: 'Built for players too',
        blurb: 'Every player gets their own space: readiness, weekly load, training and match agenda. No account to create, no friction.',
        slides: [
          {
            img: '/screenshots/portal-fitness.png',
            kind: 'mobile',
            alt: 'STRIVN player space: readiness, recent load and weekly trend',
            caption: 'Each player sees their readiness and weekly load.',
          },
          {
            img: '/screenshots/portal-agenda.png',
            kind: 'mobile',
            alt: 'STRIVN player agenda: training, matches and meetings for the next two weeks',
            caption: 'Training, matches and meetings in one agenda.',
          },
        ],
      },
    ],
    featuresLead: 'And everything else in an S&C coach’s day.',
    features: {
      title: 'What STRIVN brings to S&C coaches',
      items: [
        {
          title: 'Load planning & periodisation',
          text: 'Build training weeks with planned vs actual load, ACWR management and load categories (physical, technical, match). Overloads surface on their own, no spreadsheet hunting.',
        },
        {
          title: 'GPS import & load formulas',
          text: 'Import Catapult or Statsport files, map your custom metrics and automatically calculate session load per player. No manual re-entry, no version-controlled spreadsheets.',
        },
        {
          title: 'Readiness & fatigue estimation',
          text: 'STRIVN projects each player\'s readiness 1-5 days forward using actual load and a fatigue decay model. Anticipate peak-load risk before it becomes a problem.',
        },
        {
          title: 'RPE & wellness check-ins',
          text: 'Morning wellness questionnaires and post-session sRPE sent automatically. Individual and team trends are visible at a glance, without chasing players.',
        },
        {
          title: 'Injury tracking & return-to-play',
          text: 'Three availability states: OUT, PARTIAL TRAINING and AVAILABLE. Progress notes, attachments and full history per player. RTP stays coherent even across squads.',
        },
        {
          title: 'AI coach assistant',
          text: 'Ask in plain language: "Who\'s at risk this week?", "Plan a recovery session for tomorrow." The AI reads load, readiness and injuries to answer with full context.',
        },
      ],
    },
    howItWorks: {
      title: 'An S&C coach\'s day with STRIVN',
      steps: [
        {
          title: 'Morning: check readiness',
          text: 'Wellness check-ins arrive automatically. STRIVN shows you who\'s fresh, who\'s accumulating fatigue and who is above their threshold. Before the session even starts.',
        },
        {
          title: 'Before the session: plan load',
          text: 'Adjust planned intensity based on group readiness. The weekly load plan updates in real time and flags acute:chronic load imbalances automatically.',
        },
        {
          title: 'During or after: capture actual load',
          text: 'Import the GPS session file or enter player RPE values. Actual load is compared against the plan instantly and updates readiness projections for the next days.',
        },
        {
          title: 'End of week: review trends',
          text: 'Visualise cumulative load, per-player ACWR and overtraining alerts. Share the dashboard with the head coach and team doctor, no manual export needed.',
        },
      ],
    },
    finalCta: {
      title: 'Start free today.',
      body: 'STRIVN is free for one team, no credit card required. Invite your medical staff and head coach. They see the same data in real time.',
      cta: 'Create my team space',
    },
  },
};
