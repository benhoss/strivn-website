import type { Locale } from './landingContent';

type ScContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; cta: string };
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
      title: 'STRIVN pour les préparateurs physiques — charge, GPS et readiness',
      description:
        'Planification de la charge, import GPS, estimation de la readiness, suivi des blessures et retour au jeu : STRIVN donne aux préparateurs physiques une vue complète sur chaque joueur, en temps réel.',
    },
    eyebrow: 'STRIVN pour les préparateurs physiques',
    hero: {
      title: 'La charge, la forme et la santé de chaque joueur — au même endroit.',
      lede: 'Importer les fichiers GPS, croiser avec les ressentis du matin, estimer la fatigue, planifier la semaine : STRIVN réunit tous les flux d’un préparateur physique dans une seule plateforme, partagée avec le staff médical et le coach en chef.',
      cta: 'Commencer gratuitement',
    },
    features: {
      title: 'Ce que STRIVN apporte aux préparateurs physiques',
      items: [
        {
          title: 'Planification de la charge',
          text: 'Construisez des semaines d’entraînement avec charge planifiée vs réelle, gestion de l’ACWR et des catégories de charge (physique, technique, match). Les dépassements ressortent d’eux-mêmes.',
        },
        {
          title: 'Import GPS et formules de charge',
          text: 'Importez les fichiers Catapult ou Statsport, mappez vos métriques personnalisées et calculez automatiquement la charge de séance par joueur. Pas de ressaisie, pas de tableur.',
        },
        {
          title: 'Readiness et estimation de la fatigue',
          text: 'STRIVN projette la readiness de chaque joueur sur 1 à 5 jours à partir de la charge réelle et d’un modèle de décroissance de fatigue. Anticipez les pics avant qu’ils arrivent.',
        },
        {
          title: 'Check-ins RPE et wellness',
          text: 'Questionnaires de bien-être le matin et sRPE en fin de séance, envoyés automatiquement. Les tendances individuelles et collectives sont visibles en un coup d’œil.',
        },
        {
          title: 'Blessures et retour au jeu',
          text: ‘Trois niveaux de disponibilité — INDISPONIBLE, ENTRAÎNEMENT PARTIEL, DISPONIBLE — avec notes de suivi, pièces jointes et historique complet. Le retour au jeu reste cohérent même entre deux équipes.’,
        },
        {
          title: 'Assistant IA coach',
          text: 'Interrogez l’assistant en langage naturel : « Qui est à risque cette semaine ? », « Planifie une récupération pour demain. » L’IA lit la charge, la readiness et les blessures pour vous répondre avec contexte.',
        },
      ],
    },
    howItWorks: {
      title: 'La journée d’un préparateur physique avec STRIVN',
      steps: [
        {
          title: 'Le matin — vérifier la readiness',
          text: 'Les check-ins wellness arrivent automatiquement. STRIVN vous montre qui est frais, qui accumule de la fatigue et qui dépasse son seuil — avant même que la séance commence.',
        },
        {
          title: 'Avant la séance — planifier la charge',
          text: 'Ajustez l’intensité planifiée en fonction de la readiness du groupe. Le plan de charge hebdomadaire se met à jour en temps réel et signale les déséquilibres charge aiguë/chronique.',
        },
        {
          title: 'Pendant ou après — capturer la charge réelle',
          text: 'Importez le fichier GPS de la séance ou saisissez les RPE joueur par joueur. La charge réelle se compare automatiquement au plan et met à jour les projections de readiness pour les jours suivants.',
        },
        {
          title: 'En fin de semaine — analyser les tendances',
          text: 'Visualisez la charge cumulative, les ACWR par joueur et les alertes de surmenage. Partagez le tableau de bord avec le coach en chef et le médecin sans export manuel.',
        },
      ],
    },
    finalCta: {
      title: 'Commencez gratuitement dès aujourd’hui.',
      body: 'STRIVN est gratuit pour une équipe, sans carte bancaire. Invitez votre staff médical et votre coach en chef — ils voient les mêmes données en temps réel.',
      cta: 'Créer mon espace équipe',
    },
  },

  en: {
    meta: {
      title: 'STRIVN for S&C coaches — load, GPS and readiness',
      description:
        'Load planning, GPS import, readiness estimation, injury tracking and return-to-play: STRIVN gives S&C coaches a complete picture of every player, in real time.',
    },
    eyebrow: 'STRIVN for S&C coaches',
    hero: {
      title: 'Every player’s load, readiness and health — in one place.',
      lede: 'Import GPS files, cross-reference with morning wellness scores, estimate fatigue, plan the week: STRIVN brings every S&C workflow into a single platform, shared with the medical staff and head coach.',
      cta: 'Start for free',
    },
    features: {
      title: 'What STRIVN brings to S&C coaches',
      items: [
        {
          title: 'Load planning & periodisation',
          text: 'Build training weeks with planned vs actual load, ACWR management and load categories (physical, technical, match). Overloads surface on their own — no spreadsheet hunting.',
        },
        {
          title: 'GPS import & load formulas',
          text: 'Import Catapult or Statsport files, map your custom metrics and automatically calculate session load per player. No manual re-entry, no version-controlled spreadsheets.',
        },
        {
          title: 'Readiness & fatigue estimation',
          text: 'STRIVN projects each player’s readiness 1–5 days forward using actual load and a fatigue decay model. Anticipate peak-load risk before it becomes a problem.',
        },
        {
          title: 'RPE & wellness check-ins',
          text: 'Morning wellness questionnaires and post-session sRPE sent automatically. Individual and team trends are visible at a glance, without chasing players.',
        },
        {
          title: 'Injury tracking & return-to-play',
          text: 'Three availability states — OUT, PARTIAL TRAINING, AVAILABLE — with progress notes, attachments and full history. RTP stays coherent even across squads.',
        },
        {
          title: 'AI coach assistant',
          text: 'Ask in plain language: "Who’s at risk this week?", "Plan a recovery session for tomorrow." The AI reads load, readiness and injuries to answer with full context.',
        },
      ],
    },
    howItWorks: {
      title: 'An S&C coach’s day with STRIVN',
      steps: [
        {
          title: 'Morning — check readiness',
          text: 'Wellness check-ins arrive automatically. STRIVN shows you who’s fresh, who’s accumulating fatigue and who is above their threshold — before the session even starts.',
        },
        {
          title: 'Before the session — plan load',
          text: 'Adjust planned intensity based on group readiness. The weekly load plan updates in real time and flags acute:chronic load imbalances automatically.',
        },
        {
          title: 'During or after — capture actual load',
          text: 'Import the GPS session file or enter player RPE values. Actual load is compared against the plan instantly and updates readiness projections for the next days.',
        },
        {
          title: 'End of week — review trends',
          text: 'Visualise cumulative load, per-player ACWR and overtraining alerts. Share the dashboard with the head coach and team doctor — no manual export needed.',
        },
      ],
    },
    finalCta: {
      title: 'Start free today.',
      body: 'STRIVN is free for one team, no credit card required. Invite your medical staff and head coach — they see the same data in real time.',
      cta: 'Create my team space',
    },
  },
};
