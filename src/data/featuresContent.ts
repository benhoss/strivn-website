import type { Locale } from './landingContent';

export type FeatureSlug = 'communication' | 'medical' | 'training-load' | 'sessions';

export const FEATURE_SLUGS: FeatureSlug[] = ['communication', 'medical', 'training-load', 'sessions'];

/** Mirrors the `Slide` shape in scContent.ts — exported so a later unit can unify the two. */
export type Slide = {
  img: string;
  /** Optional video base path (without extension); .mp4 + .webm are loaded, img is the poster. */
  video?: string;
  kind: 'desktop' | 'mobile';
  alt: string;
  caption: string;
};

/** Mirrors the `Showcase` shape in scContent.ts — exported so a later unit can unify the two. */
export type Showcase = {
  title: string;
  blurb: string;
  slides: Slide[];
};

type FeatureContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; primaryCta: string; reassurance: string };
  benefits: { title: string; items: Array<{ title: string; text: string }> };
  /** Optional real-app screenshot carousels, rendered between benefits and how. */
  showcase?: Showcase[];
  how: { title: string; steps: Array<{ title: string; text: string }> };
  faq: { title: string; items: Array<{ question: string; answer: string }> };
  finalCta: { title: string; body: string; cta: string };
};

type FeaturesHubContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string };
  cards: Array<{ slug: FeatureSlug; title: string; text: string; points: string[] }>;
};

type FeaturesContent = {
  /** Breadcrumb / backlink label for the hub. */
  hubName: string;
  backToHub: string;
  moreTitle: string;
  moreLinkLabel: string;
  hub: FeaturesHubContent;
  features: Record<FeatureSlug, FeatureContent>;
};

export const featuresContent: Record<Locale, FeaturesContent> = {
  fr: {
    hubName: 'Fonctionnalités',
    backToHub: 'Toutes les fonctionnalités',
    moreTitle: 'Explorez le reste de la plateforme',
    moreLinkLabel: 'En savoir plus',

    hub: {
      meta: {
        title: 'Fonctionnalités STRIVN — l’intendance d’équipe',
        description:
          'Convocations, présences, infirmerie, charge d’entraînement, séances : tout ce que STRIVN offre gratuitement aux coaches, dans une seule plateforme.',
      },
      eyebrow: 'Fonctionnalités',
      hero: {
        title: 'Tout ce qu’un coach gère, au même endroit.',
        lede: 'STRIVN couvre les quatre chantiers qui mangent la semaine d’un coach — la communication, l’infirmerie, la charge d’entraînement et la préparation des séances — et tout ce qui les relie. Chaque module est gratuit, et partagé avec votre staff.',
      },
      cards: [
        {
          slug: 'communication',
          title: 'Communication & convocations',
          text: 'Chaque événement génère son message et son lien de réponse. Les présences se tiennent à jour toutes seules.',
          points: ['Modèles de message', 'Réponse sans compte joueur', 'Relances ciblées'],
        },
        {
          slug: 'medical',
          title: 'Infirmerie & suivi des blessures',
          text: 'Blessures, notes du médecin et du kiné, protocole de retour au jeu : un seul dossier, lisible par tout le staff.',
          points: ['Historique par joueur', 'Notes du staff médical', 'Retour au jeu par étapes'],
        },
        {
          slug: 'training-load',
          title: 'Planification & charge',
          text: 'Planifiez la charge de la semaine jour par jour, puis le RPE des joueurs remplit le réel : planifié vs réel, ACWR, signaux faibles.',
          points: ['Planification de charge', 'RPE par séance', 'ACWR par joueur'],
        },
        {
          slug: 'sessions',
          title: 'Séances & tactique',
          text: 'Tableaux tactiques, bibliothèque d’exercices et assistant IA qui tient compte de la charge réelle du groupe.',
          points: ['Tableaux tactiques', 'Bibliothèque d’exercices', 'Création assistée par IA'],
        },
      ],
    },

    features: {
      communication: {
        meta: {
          title: 'Convocations & communication d’équipe | STRIVN',
          description:
            'Envoyez les convocations, collectez les réponses sans compte joueur et gardez les présences à jour en temps réel. Gratuit pour les coaches amateurs et semi-pros.',
        },
        eyebrow: 'Communication & convocations',
        hero: {
          title: 'La convocation qui se gère toute seule.',
          lede: 'Chaque événement génère son message et son lien de réponse. Vous le partagez sur le canal que votre groupe utilise déjà — WhatsApp, email, l’app — et STRIVN collecte les réponses pour que la feuille de présences se tienne à jour sans vous.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Arrêtez de courir après les réponses.',
          items: [
            {
              title: 'Des modèles par type d’événement',
              text: 'Entraînement, match, tournoi : chaque type d’événement a son modèle de message. La convocation est écrite avant même d’ouvrir le clavier.',
            },
            {
              title: 'Un lien de réponse, zéro compte joueur',
              text: 'Les joueurs confirment via un simple lien, sur web ou mobile — rien à installer, pas de mot de passe à réinitialiser la veille d’un match.',
            },
            {
              title: 'Des présences à jour en temps réel',
              text: 'Chaque réponse atterrit directement dans la feuille de présences. Plus rien à recompter, plus de versions de fichier à réconcilier.',
            },
            {
              title: 'Des relances ciblées',
              text: 'STRIVN sait qui n’a pas répondu et vous laisse relancer uniquement ceux-là — un geste, au lieu d’un message « confirmez svp » à tout le groupe.',
            },
          ],
        },
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Créez l’événement',
              text: 'Entraînement, match ou tournoi — STRIVN prépare le message de convocation et son lien de réponse.',
            },
            {
              title: 'Partagez-le là où vit votre groupe',
              text: 'Postez le lien dans le groupe WhatsApp, envoyez-le par email, ou laissez l’app notifier les joueurs.',
            },
            {
              title: 'Regardez les réponses arriver',
              text: 'Chaque réponse met les présences à jour instantanément, avec les incertains signalés pour suivi.',
            },
            {
              title: 'Relancez uniquement les silencieux',
              text: 'Une relance ciblée part vers les sans-réponse — le reste du groupe n’est pas spammé.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Mes joueurs doivent-ils installer une application ?',
              answer:
                'Non. Ils peuvent répondre via le lien depuis n’importe quel téléphone ou ordinateur. L’app native ajoute les notifications et l’agenda, mais elle reste optionnelle.',
            },
            {
              question: 'Est-ce que STRIVN remplace notre groupe WhatsApp ?',
              answer:
                'Non — il travaille avec. Le groupe garde la vie d’équipe ; STRIVN reprend la partie structurée : qui vient, qui ne vient pas, qui n’a rien dit.',
            },
            {
              question: 'Les parents peuvent-ils répondre pour les jeunes joueurs ?',
              answer:
                'Oui. Le lien de réponse fonctionne pour la personne qui gère la disponibilité du joueur — sans compte, un parent confirme en quelques secondes.',
            },
            {
              question: 'Que se passe-t-il quand quelqu’un répond en retard ?',
              answer:
                'La feuille de présences se met à jour à l’instant où il répond, et le changement est visible par tout le staff — aucun message à faire suivre.',
            },
          ],
        },
        finalCta: {
          title: 'Envoyez votre dernière convocation manuelle.',
          body: 'Créez votre équipe gratuitement — la prochaine convocation se gérera toute seule.',
          cta: 'Commencer gratuitement',
        },
      },

      medical: {
        meta: {
          title: 'Suivi des blessures au football | STRIVN',
          description:
            'Une infirmerie partagée pour les équipes amateurs et semi-pros : blessures, notes du médecin et du kiné, retour au jeu par étapes. Gratuit pour les coaches.',
        },
        eyebrow: 'Infirmerie',
        hero: {
          title: 'L’infirmerie que tout le staff peut lire.',
          lede: 'Blessures, notes du médecin, avis du kiné, protocole de retour au jeu : tout est relié, du diagnostic au retour sur le terrain. Vous voyez où en est chaque joueur sans appeler personne.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Une blessure, un dossier — pas cinq conversations.',
          items: [
            {
              title: 'Un historique par joueur',
              text: 'Chaque blessure, chaque soin, chaque retour vit dans le dossier du joueur. Les pépins récurrents deviennent visibles au lieu d’être à moitié oubliés.',
            },
            {
              title: 'Médecin et kiné au même endroit',
              text: 'Le feu vert du médecin et le bilan du kiné sont sur le même dossier — pas de SMS à faire suivre, pas de transmission orale qui se perd.',
            },
            {
              title: 'Un retour au jeu par étapes',
              text: 'Diagnostic, soins, réathlétisation, retour collectif, disponible match : chaque étape est explicite, et personne ne précipite un retour.',
            },
            {
              title: 'Une visibilité coach en lecture',
              text: 'Vous voyez le statut et la disponibilité d’un coup d’œil ; le détail médical reste entre les mains du staff qui en a la charge.',
            },
          ],
        },
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Ouvrez le dossier',
              text: 'Le kiné ou le coach crée la fiche : joueur, blessure, date. Trente secondes au bord du terrain.',
            },
            {
              title: 'Le staff ajoute ses notes',
              text: 'Médecin, kiné et préparateur écrivent sur le même dossier, chacun depuis sa vue.',
            },
            {
              title: 'Suivez le protocole',
              text: 'Les étapes du retour au jeu avancent avec le joueur, visibles par tout le staff autorisé.',
            },
            {
              title: 'Planifiez avec la vraie disponibilité',
              text: 'Les présences et la préparation des séances reflètent qui est réellement apte — pas de surprise le jour du match.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Qui peut voir les données médicales d’un joueur ?',
              answer:
                'Uniquement les membres du staff que vous autorisez. Le coach voit le statut et la disponibilité ; les notes détaillées restent avec le staff qui les a écrites.',
            },
            {
              question: 'Nous n’avons pas de kiné. Est-ce quand même utile ?',
              answer:
                'Oui. Beaucoup d’équipes amateurs commencent avec le coach qui note les blessures et les dates de retour. La structure aide même avec un staff d’une seule personne.',
            },
            {
              question: 'C’est quoi, un protocole de retour au jeu ?',
              answer:
                'Un chemin par étapes du diagnostic jusqu’à la disponibilité match. STRIVN rend ces étapes explicites pour qu’un joueur ne revienne pas trop tôt faute de vue d’ensemble.',
            },
            {
              question: 'Ça fonctionne pour les blessures longues ?',
              answer:
                'Oui — un dossier n’a pas de limite de durée, et le protocole par étapes est précisément fait pour les retours de plusieurs semaines, là où l’information se perd d’habitude.',
            },
          ],
        },
        finalCta: {
          title: 'Mettez l’infirmerie là où le staff peut la lire.',
          body: 'Créez votre équipe gratuitement — l’infirmerie fait partie du plan gratuit, pas d’une option payante.',
          cta: 'Commencer gratuitement',
        },
      },

      'training-load': {
        meta: {
          title: 'Planification & suivi de charge pour coaches | STRIVN',
          description:
            'Planifiez la charge de la semaine jour par jour, collectez le RPE depuis le téléphone des joueurs, comparez planifié vs réel et suivez l’ACWR pour repérer le risque avant la blessure. Gratuit pour les coaches.',
        },
        eyebrow: 'Planification & charge',
        hero: {
          title: 'Planifiez la semaine. Suivez la charge réelle.',
          lede: 'Construisez la semaine avec une charge cible et des exercices jour par jour, puis laissez le RPE des joueurs remplir le réel. STRIVN compare planifié et réel, calcule l’ACWR et signale le risque avant qu’il ne coûte.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Planifiez la charge, puis voyez le réel se remplir.',
          items: [
            {
              title: 'Planifiez la semaine',
              text: 'Fixez une charge cible hebdomadaire, posez les séances et les exercices jour par jour avec leurs catégories. La prévision d’ACWR apparaît avant même le premier entraînement.',
            },
            {
              title: 'Le RPE par séance, par joueur',
              text: 'Les joueurs notent l’effort depuis leur téléphone juste après la séance. Plus de fiches papier, plus de carnet à ressaisir dans un tableur.',
            },
            {
              title: 'Planifié contre réel',
              text: 'La charge réelle se compare automatiquement au plan : les journées en dépassement comme en sous-charge ressortent d’un coup d’œil.',
            },
            {
              title: 'L’ACWR par joueur',
              text: 'Le ratio charge aiguë / charge chronique signale qui monte trop vite — le précurseur classique des blessures musculaires.',
            },
          ],
        },
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Planifiez la semaine',
              text: 'Charge cible, séances et exercices par jour, catégories de charge (physique, technique, match). La prévision d’ACWR du groupe se met à jour au fur et à mesure.',
            },
            {
              title: 'Les joueurs notent la séance',
              text: 'Un RPE rapide après chaque séance, répondu depuis leur téléphone en quelques secondes.',
            },
            {
              title: 'STRIVN compare planifié et réel',
              text: 'Les notes de séance deviennent charge réelle, monotonie et ACWR par joueur, comparées au plan automatiquement.',
            },
            {
              title: 'Ajustez avant que ça coûte',
              text: 'Prévoyez un vendredi allégé pour le joueur à 1.32 au lieu de le perdre six semaines.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Puis-je planifier la charge à l’avance ?',
              answer:
                'Oui. La vue Planification de charge vous laisse fixer une charge cible hebdomadaire et poser les exercices jour par jour, par catégorie ; STRIVN projette l’ACWR du groupe et signale les journées à risque avant que la semaine commence.',
            },
            {
              question: 'C’est quoi, le RPE ?',
              answer:
                'Le Rating of Perceived Exertion : la note de 1 à 10 que le joueur donne lui-même à l’intensité de la séance. Multiplié par la durée, c’est la mesure de charge fiable la plus simple du sport amateur.',
            },
            {
              question: 'C’est quoi, l’ACWR, et pourquoi c’est important ?',
              answer:
                'Le ratio charge aiguë / charge chronique compare la charge de la semaine au mois écoulé. Les pics brutaux sont corrélés au risque de blessure ; STRIVN le calcule par joueur pour lisser le pic avant qu’il ne coûte.',
            },
            {
              question: 'Mes joueurs vont-ils vraiment le remplir ?',
              answer:
                'C’est quelques secondes sur leur téléphone juste après la séance, et vous voyez d’un coup d’œil qui n’a pas répondu — la même logique de relance que pour les convocations.',
            },
            {
              question: 'Faut-il un préparateur physique pour s’en servir ?',
              answer:
                'Non. Les réglages par défaut fonctionnent pour un coach seul ; et si vous avez un prépa, il retrouve sa vue de planification et sa note est partagée au staff.',
            },
          ],
        },
        finalCta: {
          title: 'Planifiez la semaine du groupe avant qu’elle commence.',
          body: 'Créez votre équipe gratuitement — la planification de charge, le suivi et le RPE font partie du plan gratuit.',
          cta: 'Commencer gratuitement',
        },
      },

      sessions: {
        meta: {
          title: 'Préparer ses séances de foot & tactique | STRIVN',
          description:
            'Planifiez vos séances, dessinez vos tableaux tactiques, construisez votre bibliothèque d’exercices — avec un assistant IA qui tient compte de la charge réelle du groupe.',
        },
        eyebrow: 'Séances & tactique',
        hero: {
          title: 'La séance prête avant d’arriver au terrain.',
          lede: 'Tableaux tactiques, bibliothèque d’exercices, planification de la semaine : STRIVN met la séance en forme pendant que vous pensez au jeu, et l’assistant IA tient compte de la charge réelle du groupe.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Pensez au jeu. STRIVN met en forme.',
          items: [
            {
              title: 'Des tableaux tactiques',
              text: 'Dessinez le bloc pressing ou la sortie de balle sur un tableau que tout le staff peut ouvrir — fini les photos de paperboard.',
            },
            {
              title: 'Une bibliothèque qui grandit avec vous',
              text: 'Gardez les exercices qui marchent, réutilisez-les en quelques secondes, et arrêtez de redessiner le même rondo chaque mois.',
            },
            {
              title: 'La planification de la semaine',
              text: 'Les séances s’inscrivent dans la semaine, à côté des matchs : le volume et l’intention s’alignent sur ce qui arrive dimanche.',
            },
            {
              title: 'La création assistée par IA',
              text: 'Décrivez l’intention — STRIVN propose la structure en tenant compte de la charge et des disponibilités réelles. Vous restez le coach ; il fait la mise en forme.',
            },
          ],
        },
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Posez l’intention',
              text: 'Pressing haut, sortie de balle sous pression, finition — nommez le thème de jeudi.',
            },
            {
              title: 'Construisez depuis la bibliothèque ou avec l’IA',
              text: 'Piochez vos exercices éprouvés ou laissez l’assistant proposer une structure qui respecte la charge de la semaine.',
            },
            {
              title: 'Partagez au staff',
              text: 'L’adjoint et le prépa voient le plan avant la séance — pas sur le parking.',
            },
            {
              title: 'Faites le bilan',
              text: 'Après la séance, le rapport boucle la boucle : ce qui était prévu, ce qui s’est passé, ce qu’il faut ajuster.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Comment fonctionne l’assistant IA ?',
              answer:
                'Vous décrivez l’intention de la séance ; l’assistant propose phases, durées et exercices en s’appuyant sur ce que STRIVN sait déjà — disponibilités et charge récente du groupe. Chaque proposition reste modifiable avant de devenir le plan.',
            },
            {
              question: 'Puis-je utiliser mes propres exercices ?',
              answer:
                'Oui. La bibliothèque est la vôtre : vos exercices, vos schémas, vos noms. L’assistant s’en sert en priorité, pas seulement de modèles génériques.',
            },
            {
              question: 'Les joueurs voient-ils le plan de séance ?',
              answer:
                'Vous choisissez ce que vous partagez. La convocation dit aux joueurs quand et où ; le détail tactique peut rester côté staff.',
            },
            {
              question: 'C’est uniquement pour le football ?',
              answer:
                'STRIVN est pensé football d’abord : les tableaux, la structure des exercices et la logique de charge parlent football. Ce focus est délibéré.',
            },
          ],
        },
        finalCta: {
          title: 'Pensez au jeu. La mise en forme est faite.',
          body: 'Créez votre équipe gratuitement — tableaux, bibliothèque et assistant inclus.',
          cta: 'Commencer gratuitement',
        },
      },
    },
  },

  en: {
    hubName: 'Features',
    backToHub: 'All features',
    moreTitle: 'Explore the rest of the platform',
    moreLinkLabel: 'Learn more',

    hub: {
      meta: {
        title: 'STRIVN features — team operations for coaches',
        description:
          'Call-ups, attendance, injury tracking, training load and session planning: everything STRIVN gives coaches for free, in one platform.',
      },
      eyebrow: 'Features',
      hero: {
        title: 'Everything a coach runs, in one place.',
        lede: 'STRIVN covers the four jobs that eat a coach’s week — communication, the medical log, training load and session planning — and everything that connects them. Every module is free, and shared with your staff.',
      },
      cards: [
        {
          slug: 'communication',
          title: 'Communication & call-ups',
          text: 'Every event generates its message and its reply link. Attendance keeps itself up to date.',
          points: ['Message templates', 'Replies without player accounts', 'Targeted reminders'],
        },
        {
          slug: 'medical',
          title: 'Medical log & injury tracking',
          text: 'Injuries, doctor and physio notes, return-to-play protocol: one record, readable by the whole staff.',
          points: ['Per-player history', 'Medical staff notes', 'Staged return-to-play'],
        },
        {
          slug: 'training-load',
          title: 'Load planning & RPE',
          text: 'Plan the week’s load day by day, then player RPE fills in the actual: planned vs actual, ACWR, weak signals.',
          points: ['Load planning', 'RPE per session', 'ACWR per player'],
        },
        {
          slug: 'sessions',
          title: 'Sessions & tactics',
          text: 'Tactical boards, a drill library and an AI assistant that accounts for the squad’s actual load.',
          points: ['Tactical boards', 'Drill library', 'AI-assisted creation'],
        },
      ],
    },

    features: {
      communication: {
        meta: {
          title: 'Match call-ups & team communication | STRIVN',
          description:
            'Send call-ups, collect replies without player accounts and keep attendance up to date in real time. Free for amateur and semi-pro coaches.',
        },
        eyebrow: 'Communication & call-ups',
        hero: {
          title: 'The call-up that runs itself.',
          lede: 'Every event generates its message and its reply link. You share it on the channel your group already uses — WhatsApp, email, the app — and STRIVN collects the replies so the attendance sheet keeps itself up to date.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'Stop chasing replies.',
          items: [
            {
              title: 'Templates per event type',
              text: 'Training, match, tournament: each event type has its own message template. The call-up is written before you even open the keyboard.',
            },
            {
              title: 'A reply link, zero player accounts',
              text: 'Players confirm through a simple link, on web or mobile — nothing to install, no password to reset the night before a match.',
            },
            {
              title: 'Attendance updated in real time',
              text: 'Every reply lands straight in the attendance sheet. Nothing to re-count, no spreadsheet versions to reconcile.',
            },
            {
              title: 'Targeted reminders',
              text: 'STRIVN knows who hasn’t answered and lets you nudge only them — one tap, instead of a “please confirm” message to the whole group.',
            },
          ],
        },
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Create the event',
              text: 'Training, match or tournament — STRIVN drafts the call-up message and its reply link.',
            },
            {
              title: 'Share it where your group lives',
              text: 'Post the link in the WhatsApp group, send it by email, or let the app notify players directly.',
            },
            {
              title: 'Watch the replies come in',
              text: 'Each answer updates attendance instantly, with uncertain players flagged for follow-up.',
            },
            {
              title: 'Remind only the silent ones',
              text: 'A targeted reminder goes to the non-responders — the rest of the group isn’t spammed.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Do my players have to install an app?',
              answer:
                'No. They can reply through the link from any phone or computer. The native app adds notifications and an agenda, but it stays optional.',
            },
            {
              question: 'Does STRIVN replace our WhatsApp group?',
              answer:
                'No — it works with it. The group keeps the team life; STRIVN takes over the structured part: who’s coming, who isn’t, who hasn’t said.',
            },
            {
              question: 'Can parents reply for younger players?',
              answer:
                'Yes. The reply link works for whoever manages the player’s availability — no account needed, so a parent confirms in seconds.',
            },
            {
              question: 'What happens when someone replies late?',
              answer:
                'The attendance sheet updates the moment they answer, and the change is visible to the whole staff — no message to forward.',
            },
          ],
        },
        finalCta: {
          title: 'Send your last manual call-up.',
          body: 'Create your team for free — the next call-up will run itself.',
          cta: 'Start for free',
        },
      },

      medical: {
        meta: {
          title: 'Injury tracking for football teams | STRIVN',
          description:
            'A shared medical log for amateur and semi-pro teams: injuries, doctor and physio notes, staged return-to-play. Free for coaches.',
        },
        eyebrow: 'Medical log',
        hero: {
          title: 'A medical log the whole staff can read.',
          lede: 'Injuries, doctor’s notes, physio assessments, return-to-play protocol: everything is connected, from diagnosis back to the pitch. You see where every player stands without calling anyone.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'One injury, one record — not five conversations.',
          items: [
            {
              title: 'A history per player',
              text: 'Every injury, every treatment, every comeback lives on the player’s record. Recurring issues become visible instead of half-remembered.',
            },
            {
              title: 'Doctor and physio in one place',
              text: 'The doctor’s clearance and the physio’s assessment sit on the same record — no SMS to forward, no verbal handoff that gets lost.',
            },
            {
              title: 'A staged return-to-play',
              text: 'Diagnosis, treatment, reconditioning, group training, match available: each stage is explicit, and nobody rushes a comeback.',
            },
            {
              title: 'Read-only coach visibility',
              text: 'You see status and availability at a glance; the medical detail stays with the staff who own it.',
            },
          ],
        },
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Open the record',
              text: 'The physio or the coach creates the entry: player, injury, date. Thirty seconds at pitch-side.',
            },
            {
              title: 'The staff add their notes',
              text: 'Doctor, physio and fitness coach write on the same record, each from their own view.',
            },
            {
              title: 'Follow the protocol',
              text: 'The return-to-play stages advance with the player, visible to every authorised staff member.',
            },
            {
              title: 'Plan with real availability',
              text: 'Attendance and session planning reflect who is actually fit — no surprises on match day.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Who can see a player’s medical data?',
              answer:
                'Only the staff members you authorise. The coach sees status and availability; the detailed notes stay with the staff who wrote them.',
            },
            {
              question: 'We don’t have a physio. Is it still useful?',
              answer:
                'Yes. Many amateur teams start with the coach logging injuries and return dates. The structure helps even with a staff of one.',
            },
            {
              question: 'What is a return-to-play protocol?',
              answer:
                'A staged path from diagnosis back to match availability. STRIVN makes the stages explicit so a player doesn’t come back too early because nobody had the full picture.',
            },
            {
              question: 'Does it work for long-term injuries?',
              answer:
                'Yes — a record has no time limit, and the staged protocol is built precisely for the multi-week comebacks where information usually gets lost.',
            },
          ],
        },
        finalCta: {
          title: 'Put the medical log where the staff can read it.',
          body: 'Create your team for free — the medical log is part of the free plan, not a paid add-on.',
          cta: 'Start for free',
        },
      },

      'training-load': {
        meta: {
          title: 'Load planning & training load monitoring for coaches | STRIVN',
          description:
            'Plan the week’s load day by day, collect RPE from your players’ phones, compare planned vs actual and track ACWR to spot injury risk before it becomes an absence. Free for coaches.',
        },
        eyebrow: 'Load planning & RPE',
        hero: {
          title: 'Plan the week. Track the actual load.',
          lede: 'Build the week with a load target and exercises day by day, then let player RPE fill in the actual. STRIVN compares planned vs actual, computes ACWR and flags the risk before it costs you.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'Plan the load, then watch the actual fill in.',
          items: [
            {
              title: 'Plan the week',
              text: 'Set a weekly load target, lay out sessions and exercises day by day with their categories. The ACWR forecast appears before the first training even starts.',
            },
            {
              title: 'RPE per session, per player',
              text: 'Players rate the effort from their phone right after the session. No paper forms, no notebook to re-enter into a spreadsheet.',
            },
            {
              title: 'Planned vs actual',
              text: 'Actual load is compared against the plan automatically: over-loaded and under-loaded days both surface at a glance.',
            },
            {
              title: 'ACWR per player',
              text: 'The acute:chronic workload ratio flags who is climbing too fast — the classic precursor to muscle injuries.',
            },
          ],
        },
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Plan the week',
              text: 'Load target, sessions and exercises per day, load categories (physical, technical, match). The squad ACWR forecast updates as you build.',
            },
            {
              title: 'Players rate the session',
              text: 'A quick RPE prompt after each session, answered from their phones in seconds.',
            },
            {
              title: 'STRIVN compares planned vs actual',
              text: 'Session ratings become actual load, monotony and ACWR per player, compared against the plan automatically.',
            },
            {
              title: 'Adjust before it costs you',
              text: 'Plan a lighter Friday for the player at 1.32 instead of losing him for six weeks.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Can I plan load ahead of time?',
              answer:
                'Yes. The Load planning view lets you set a weekly load target and lay out exercises day by day, by category; STRIVN projects the squad ACWR and flags risky days before the week begins.',
            },
            {
              question: 'What is RPE?',
              answer:
                'Rating of Perceived Exertion: the 1–10 score a player gives to how hard a session felt. Multiplied by duration, it is the simplest reliable load measure in amateur sport.',
            },
            {
              question: 'What is ACWR, and why does it matter?',
              answer:
                'The acute:chronic workload ratio compares this week’s load to the past month. Sharp spikes correlate with injury risk; STRIVN computes it per player so you can smooth the spike before it costs you.',
            },
            {
              question: 'Will my players actually fill it in?',
              answer:
                'It takes seconds on their phone right after the session, and you see at a glance who hasn’t answered — the same nudge logic as call-ups.',
            },
            {
              question: 'Do I need a fitness coach to use this?',
              answer:
                'No. The defaults work for a coach on their own; and if you do have a fitness coach, they get their own planning view and their note is shared with the staff.',
            },
          ],
        },
        finalCta: {
          title: 'Plan the squad’s week before it starts.',
          body: 'Create your team for free — load planning, tracking and RPE are part of the free plan.',
          cta: 'Start for free',
        },
      },

      sessions: {
        meta: {
          title: 'Football session planner & tactical boards | STRIVN',
          description:
            'Plan training sessions, draw tactical boards, build your drill library — with an AI assistant that accounts for the squad’s actual load.',
        },
        eyebrow: 'Sessions & tactics',
        hero: {
          title: 'The session ready before you reach the pitch.',
          lede: 'Tactical boards, a drill library, week planning: STRIVN shapes the session while you think about the game, and the AI assistant accounts for the squad’s actual load.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'Think about the game. STRIVN does the formatting.',
          items: [
            {
              title: 'Tactical boards',
              text: 'Sketch the pressing block or the build-up shape on a board the whole staff can open — no more photos of a whiteboard.',
            },
            {
              title: 'A library that grows with you',
              text: 'Keep the drills that work, reuse them in seconds, and stop redrawing the same rondo every month.',
            },
            {
              title: 'Week planning',
              text: 'Sessions sit in the week next to the matches: volume and intent line up with what’s coming on Sunday.',
            },
            {
              title: 'AI-assisted session creation',
              text: 'Describe the intent — STRIVN proposes the structure, accounting for the squad’s actual load and availability. You stay the coach; it does the formatting.',
            },
          ],
        },
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Set the intent',
              text: 'High press, build-up under pressure, finishing — name Thursday’s theme.',
            },
            {
              title: 'Build from the library or with AI',
              text: 'Pull your proven drills, or let the assistant propose a structure that respects the week’s load.',
            },
            {
              title: 'Share with the staff',
              text: 'The assistant coach and the fitness coach see the plan before the session — not in the car park.',
            },
            {
              title: 'Close the loop',
              text: 'After the session, the report ties it together: what was planned, what happened, what to adjust.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'How does the AI assistant work?',
              answer:
                'You describe the session’s intent; the assistant proposes phases, durations and drills, drawing on what STRIVN already knows — the squad’s availability and recent load. Every proposal stays editable before it becomes the plan.',
            },
            {
              question: 'Can I use my own drills?',
              answer:
                'Yes. The library is yours: your drills, your diagrams, your names. The assistant draws on it first, not just on generic templates.',
            },
            {
              question: 'Do players see the session plan?',
              answer:
                'You choose what you share. The call-up tells players when and where; the tactical detail can stay with the staff.',
            },
            {
              question: 'Is this football only?',
              answer:
                'STRIVN is designed football-first: the boards, drill structures and load logic speak football. That focus is deliberate.',
            },
          ],
        },
        finalCta: {
          title: 'Think about the game. The formatting is done.',
          body: 'Create your team for free — boards, library and assistant included.',
          cta: 'Start for free',
        },
      },
    },
  },

  nl: {
    hubName: 'Functies',
    backToHub: 'Alle functies',
    moreTitle: 'Ontdek de rest van het platform',
    moreLinkLabel: 'Meer weten',

    hub: {
      meta: {
        title: 'STRIVN-functies — teamorganisatie voor coaches',
        description:
          'Oproepingen, aanwezigheid, blessureopvolging, trainingsbelasting en trainingsplanning: alles wat STRIVN coaches gratis biedt, in één platform.',
      },
      eyebrow: 'Functies',
      hero: {
        title: 'Alles wat een coach beheert, op één plek.',
        lede: 'STRIVN dekt de vier taken die de week van een coach opslokken — communicatie, het medisch dossier, trainingsbelasting en trainingsplanning — en alles wat ze met elkaar verbindt. Elke module is gratis en gedeeld met je staf.',
      },
      cards: [
        {
          slug: 'communication',
          title: 'Communicatie & oproepingen',
          text: 'Elk evenement genereert zijn bericht en zijn antwoordlink. De aanwezigheid houdt zichzelf up-to-date.',
          points: ['Berichtsjablonen', 'Antwoorden zonder spelersaccount', 'Gerichte herinneringen'],
        },
        {
          slug: 'medical',
          title: 'Medisch dossier & blessureopvolging',
          text: 'Blessures, notities van arts en kiné, return-to-play-protocol: één dossier, leesbaar voor de hele staf.',
          points: ['Historiek per speler', 'Notities van de medische staf', 'Gefaseerde return-to-play'],
        },
        {
          slug: 'training-load',
          title: 'Belastingsplanning & RPE',
          text: 'Plan de belasting van de week dag per dag, daarna vult de RPE van de spelers het reële in: gepland vs. reëel, ACWR, zwakke signalen.',
          points: ['Belastingsplanning', 'RPE per training', 'ACWR per speler'],
        },
        {
          slug: 'sessions',
          title: 'Trainingen & tactiek',
          text: 'Tactiekborden, een oefeningenbibliotheek en een AI-assistent die rekening houdt met de reële belasting van het team.',
          points: ['Tactiekborden', 'Oefeningenbibliotheek', 'AI-ondersteunde creatie'],
        },
      ],
    },

    features: {
      communication: {
        meta: {
          title: 'Wedstrijdoproepingen & teamcommunicatie | STRIVN',
          description:
            'Stuur oproepingen, verzamel antwoorden zonder spelersaccount en houd de aanwezigheid in realtime up-to-date. Gratis voor amateur- en semiprocoaches.',
        },
        eyebrow: 'Communicatie & oproepingen',
        hero: {
          title: 'De oproeping die zichzelf beheert.',
          lede: 'Elk evenement genereert zijn bericht en zijn antwoordlink. Je deelt hem op het kanaal dat je groep al gebruikt — WhatsApp, e-mail, de app — en STRIVN verzamelt de antwoorden, zodat de aanwezigheidslijst zichzelf up-to-date houdt.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Stop met achter antwoorden aanjagen.',
          items: [
            {
              title: 'Sjablonen per evenementtype',
              text: 'Training, wedstrijd, toernooi: elk evenementtype heeft zijn eigen berichtsjabloon. De oproeping is geschreven nog voor je het toetsenbord opent.',
            },
            {
              title: 'Eén antwoordlink, geen spelersaccounts',
              text: 'Spelers bevestigen via een eenvoudige link, op web of mobiel — niets te installeren, geen wachtwoord om te resetten de avond voor een wedstrijd.',
            },
            {
              title: 'Aanwezigheid in realtime bijgewerkt',
              text: 'Elk antwoord komt rechtstreeks op de aanwezigheidslijst terecht. Niets om opnieuw te tellen, geen spreadsheetversies om samen te voegen.',
            },
            {
              title: 'Gerichte herinneringen',
              text: 'STRIVN weet wie nog niet geantwoord heeft en laat je alleen hen porren — één tik, in plaats van een “bevestig aub”-bericht naar de hele groep.',
            },
          ],
        },
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Maak het evenement aan',
              text: 'Training, wedstrijd of toernooi — STRIVN stelt het oproepingsbericht en de antwoordlink op.',
            },
            {
              title: 'Deel het waar je groep leeft',
              text: 'Post de link in de WhatsApp-groep, stuur hem per e-mail, of laat de app de spelers rechtstreeks verwittigen.',
            },
            {
              title: 'Zie de antwoorden binnenkomen',
              text: 'Elk antwoord werkt de aanwezigheid meteen bij, met onzekere spelers gemarkeerd voor opvolging.',
            },
            {
              title: 'Herinner alleen de stille spelers',
              text: 'Een gerichte herinnering gaat naar wie niet reageerde — de rest van de groep krijgt geen spam.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Moeten mijn spelers een app installeren?',
              answer:
                'Nee. Ze kunnen antwoorden via de link vanaf om het even welke telefoon of computer. De native app voegt meldingen en een agenda toe, maar blijft optioneel.',
            },
            {
              question: 'Vervangt STRIVN onze WhatsApp-groep?',
              answer:
                'Nee — het werkt ermee samen. De groep behoudt het teamleven; STRIVN neemt het gestructureerde deel over: wie komt, wie niet, wie niets zei.',
            },
            {
              question: 'Kunnen ouders antwoorden voor jongere spelers?',
              answer:
                'Ja. De antwoordlink werkt voor wie de beschikbaarheid van de speler beheert — geen account nodig, dus een ouder bevestigt in enkele seconden.',
            },
            {
              question: 'Wat gebeurt er als iemand laat antwoordt?',
              answer:
                'De aanwezigheidslijst wordt bijgewerkt op het moment dat ze antwoorden, en de wijziging is zichtbaar voor de hele staf — geen bericht om door te sturen.',
            },
          ],
        },
        finalCta: {
          title: 'Stuur je laatste manuele oproeping.',
          body: 'Maak je team gratis aan — de volgende oproeping beheert zichzelf.',
          cta: 'Gratis starten',
        },
      },

      medical: {
        meta: {
          title: 'Blessureopvolging voor voetbalteams | STRIVN',
          description:
            'Een gedeeld medisch dossier voor amateur- en semiproteams: blessures, notities van arts en kiné, gefaseerde return-to-play. Gratis voor coaches.',
        },
        eyebrow: 'Medisch dossier',
        hero: {
          title: 'Een medisch dossier dat de hele staf kan lezen.',
          lede: 'Blessures, notities van de arts, beoordelingen van de kiné, return-to-play-protocol: alles is verbonden, van diagnose tot terug op het veld. Je ziet waar elke speler staat zonder iemand te bellen.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Eén blessure, één dossier — geen vijf gesprekken.',
          items: [
            {
              title: 'Een historiek per speler',
              text: 'Elke blessure, elke behandeling, elke terugkeer leeft in het dossier van de speler. Terugkerende kwaaltjes worden zichtbaar in plaats van half vergeten.',
            },
            {
              title: 'Arts en kiné op één plek',
              text: 'Het groen licht van de arts en de beoordeling van de kiné staan in hetzelfde dossier — geen sms om door te sturen, geen mondelinge overdracht die verloren gaat.',
            },
            {
              title: 'Een gefaseerde return-to-play',
              text: 'Diagnose, behandeling, revalidatie, groepstraining, wedstrijdklaar: elke fase is expliciet, en niemand forceert een terugkeer.',
            },
            {
              title: 'Leestoegang voor de coach',
              text: 'Je ziet status en beschikbaarheid in één oogopslag; de medische details blijven bij de staf die ze beheert.',
            },
          ],
        },
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Open het dossier',
              text: 'De kiné of de coach maakt de fiche aan: speler, blessure, datum. Dertig seconden langs de zijlijn.',
            },
            {
              title: 'De staf voegt notities toe',
              text: 'Arts, kiné en fysieke trainer schrijven in hetzelfde dossier, elk vanuit hun eigen weergave.',
            },
            {
              title: 'Volg het protocol',
              text: 'De return-to-play-fases vorderen mee met de speler, zichtbaar voor elk bevoegd staflid.',
            },
            {
              title: 'Plan met de echte beschikbaarheid',
              text: 'Aanwezigheid en trainingsplanning weerspiegelen wie echt fit is — geen verrassingen op wedstrijddag.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Wie kan de medische gegevens van een speler zien?',
              answer:
                'Alleen de stafleden die je autoriseert. De coach ziet status en beschikbaarheid; de gedetailleerde notities blijven bij de staf die ze schreef.',
            },
            {
              question: 'We hebben geen kiné. Is het dan toch nuttig?',
              answer:
                'Ja. Veel amateurteams starten met de coach die blessures en terugkeerdata noteert. De structuur helpt zelfs met een staf van één persoon.',
            },
            {
              question: 'Wat is een return-to-play-protocol?',
              answer:
                'Een gefaseerd pad van diagnose tot wedstrijdbeschikbaarheid. STRIVN maakt de fases expliciet, zodat een speler niet te vroeg terugkeert doordat niemand het volledige beeld had.',
            },
            {
              question: 'Werkt het voor langdurige blessures?',
              answer:
                'Ja — een dossier heeft geen tijdslimiet, en het gefaseerde protocol is net gemaakt voor de terugkeer over meerdere weken, waar informatie doorgaans verloren gaat.',
            },
          ],
        },
        finalCta: {
          title: 'Zet het medisch dossier waar de staf het kan lezen.',
          body: 'Maak je team gratis aan — het medisch dossier hoort bij het gratis plan, niet bij een betaalde optie.',
          cta: 'Gratis starten',
        },
      },

      'training-load': {
        meta: {
          title: 'Belastingsplanning & opvolging van trainingsbelasting voor coaches | STRIVN',
          description:
            'Plan de belasting van de week dag per dag, verzamel RPE via de telefoon van je spelers, vergelijk gepland vs. reëel en volg ACWR op om blessurerisico te spotten voor het een afwezigheid wordt. Gratis voor coaches.',
        },
        eyebrow: 'Belastingsplanning & RPE',
        hero: {
          title: 'Plan de week. Volg de reële belasting.',
          lede: 'Bouw de week op met een belastingsdoel en oefeningen dag per dag, en laat de RPE van de spelers het reële invullen. STRIVN vergelijkt gepland vs. reëel, berekent ACWR en signaleert het risico voor het je iets kost.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Plan de belasting, en zie het reële zich invullen.',
          items: [
            {
              title: 'Plan de week',
              text: 'Stel een wekelijks belastingsdoel in, zet trainingen en oefeningen dag per dag uit met hun categorieën. De ACWR-prognose verschijnt nog voor de eerste training begint.',
            },
            {
              title: 'RPE per training, per speler',
              text: 'Spelers scoren de inspanning vanaf hun telefoon meteen na de training. Geen papieren formulieren meer, geen notitieboekje om over te typen in een spreadsheet.',
            },
            {
              title: 'Gepland vs. reëel',
              text: 'De reële belasting wordt automatisch met het plan vergeleken: overbelaste en onderbelaste dagen komen allebei in één oogopslag naar boven.',
            },
            {
              title: 'ACWR per speler',
              text: 'De acute:chronische belastingsratio signaleert wie te snel klimt — de klassieke voorbode van spierblessures.',
            },
          ],
        },
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Plan de week',
              text: 'Belastingsdoel, trainingen en oefeningen per dag, belastingscategorieën (fysiek, technisch, wedstrijd). De ACWR-prognose van het team werkt zich bij terwijl je bouwt.',
            },
            {
              title: 'Spelers scoren de training',
              text: 'Een snelle RPE-vraag na elke training, beantwoord vanaf hun telefoon in enkele seconden.',
            },
            {
              title: 'STRIVN vergelijkt gepland vs. reëel',
              text: 'Trainingsscores worden reële belasting, monotonie en ACWR per speler, automatisch vergeleken met het plan.',
            },
            {
              title: 'Stuur bij voor het je iets kost',
              text: 'Plan een lichtere vrijdag voor de speler op 1.32 in plaats van hem zes weken kwijt te zijn.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Kan ik de belasting op voorhand plannen?',
              answer:
                'Ja. De weergave Belastingsplanning laat je een wekelijks belastingsdoel instellen en oefeningen dag per dag uitzetten, per categorie; STRIVN projecteert de ACWR van het team en signaleert risicovolle dagen voor de week begint.',
            },
            {
              question: 'Wat is RPE?',
              answer:
                'Rating of Perceived Exertion: de score van 1 tot 10 die een speler zelf geeft aan hoe zwaar een training aanvoelde. Vermenigvuldigd met de duur is het de eenvoudigste betrouwbare belastingsmaat in de amateursport.',
            },
            {
              question: 'Wat is ACWR, en waarom is het belangrijk?',
              answer:
                'De acute:chronische belastingsratio vergelijkt de belasting van deze week met de voorbije maand. Scherpe pieken correleren met blessurerisico; STRIVN berekent het per speler zodat je de piek kunt afvlakken voor het je iets kost.',
            },
            {
              question: 'Gaan mijn spelers het echt invullen?',
              answer:
                'Het kost enkele seconden op hun telefoon meteen na de training, en je ziet in één oogopslag wie niet geantwoord heeft — dezelfde herinneringslogica als bij oproepingen.',
            },
            {
              question: 'Heb ik een fysieke trainer nodig om dit te gebruiken?',
              answer:
                'Nee. De standaardinstellingen werken voor een coach alleen; en heb je wel een fysieke trainer, dan krijgt die een eigen planningsweergave en wordt zijn notitie met de staf gedeeld.',
            },
          ],
        },
        finalCta: {
          title: 'Plan de week van het team voor die begint.',
          body: 'Maak je team gratis aan — belastingsplanning, opvolging en RPE horen bij het gratis plan.',
          cta: 'Gratis starten',
        },
      },

      sessions: {
        meta: {
          title: 'Voetbaltrainingsplanner & tactiekborden | STRIVN',
          description:
            'Plan trainingen, teken tactiekborden, bouw je oefeningenbibliotheek — met een AI-assistent die rekening houdt met de reële belasting van het team.',
        },
        eyebrow: 'Trainingen & tactiek',
        hero: {
          title: 'De training klaar voor je het veld bereikt.',
          lede: 'Tactiekborden, een oefeningenbibliotheek, weekplanning: STRIVN geeft de training vorm terwijl jij aan het spel denkt, en de AI-assistent houdt rekening met de reële belasting van het team.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Denk aan het spel. STRIVN doet de opmaak.',
          items: [
            {
              title: 'Tactiekborden',
              text: 'Schets het pressingblok of de opbouw op een bord dat de hele staf kan openen — geen foto’s van een whiteboard meer.',
            },
            {
              title: 'Een bibliotheek die met je meegroeit',
              text: 'Bewaar de oefeningen die werken, hergebruik ze in enkele seconden, en stop met dezelfde rondo elke maand opnieuw te tekenen.',
            },
            {
              title: 'Weekplanning',
              text: 'Trainingen staan in de week naast de wedstrijden: volume en intentie sluiten aan op wat er zondag aankomt.',
            },
            {
              title: 'AI-ondersteunde trainingcreatie',
              text: 'Beschrijf de intentie — STRIVN stelt de structuur voor, rekening houdend met de reële belasting en beschikbaarheid van het team. Jij blijft de coach; het doet de opmaak.',
            },
          ],
        },
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Bepaal de intentie',
              text: 'Hoge pressing, opbouw onder druk, afwerking — benoem het thema van donderdag.',
            },
            {
              title: 'Bouw vanuit de bibliotheek of met AI',
              text: 'Haal je beproefde oefeningen erbij, of laat de assistent een structuur voorstellen die de belasting van de week respecteert.',
            },
            {
              title: 'Deel met de staf',
              text: 'De assistent-coach en de fysieke trainer zien het plan voor de training — niet op de parking.',
            },
            {
              title: 'Sluit de cirkel',
              text: 'Na de training brengt het rapport het samen: wat gepland was, wat er gebeurde, wat bij te sturen.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Hoe werkt de AI-assistent?',
              answer:
                'Je beschrijft de intentie van de training; de assistent stelt fases, duur en oefeningen voor, op basis van wat STRIVN al weet — de beschikbaarheid en recente belasting van het team. Elk voorstel blijft aanpasbaar voor het het plan wordt.',
            },
            {
              question: 'Kan ik mijn eigen oefeningen gebruiken?',
              answer:
                'Ja. De bibliotheek is de jouwe: jouw oefeningen, jouw schema’s, jouw namen. De assistent gebruikt die als eerste, niet enkel generieke sjablonen.',
            },
            {
              question: 'Zien spelers het trainingsplan?',
              answer:
                'Jij kiest wat je deelt. De oproeping vertelt spelers wanneer en waar; de tactische details kunnen bij de staf blijven.',
            },
            {
              question: 'Is dit alleen voor voetbal?',
              answer:
                'STRIVN is voetbal-eerst ontworpen: de borden, de structuur van de oefeningen en de belastingslogica spreken voetbal. Die focus is bewust.',
            },
          ],
        },
        finalCta: {
          title: 'Denk aan het spel. De opmaak is gedaan.',
          body: 'Maak je team gratis aan — borden, bibliotheek en assistent inbegrepen.',
          cta: 'Gratis starten',
        },
      },
    },
  },

  de: {
    hubName: 'Funktionen',
    backToHub: 'Alle Funktionen',
    moreTitle: 'Entdecken Sie den Rest der Plattform',
    moreLinkLabel: 'Mehr erfahren',

    hub: {
      meta: {
        title: 'STRIVN-Funktionen — Teamorganisation für Coaches',
        description:
          'Aufstellungen, Anwesenheit, Verletzungs-Tracking, Trainingsbelastung und Trainingsplanung: alles, was STRIVN Coaches kostenlos bietet, in einer Plattform.',
      },
      eyebrow: 'Funktionen',
      hero: {
        title: 'Alles, was ein Coach steuert, an einem Ort.',
        lede: 'STRIVN deckt die vier Aufgaben ab, die die Woche eines Coaches auffressen — Kommunikation, das medizinische Protokoll, Trainingsbelastung und Trainingsplanung — und alles, was sie verbindet. Jedes Modul ist kostenlos und mit Ihrem Staff geteilt.',
      },
      cards: [
        {
          slug: 'communication',
          title: 'Kommunikation & Aufstellungen',
          text: 'Jedes Event erzeugt seine Nachricht und seinen Antwortlink. Die Anwesenheit hält sich selbst aktuell.',
          points: ['Nachrichtenvorlagen', 'Antworten ohne Spieler-Konto', 'Gezielte Erinnerungen'],
        },
        {
          slug: 'medical',
          title: 'Medizinisches Protokoll & Verletzungs-Tracking',
          text: 'Verletzungen, Notizen von Arzt und Physio, Return-to-Play-Protokoll: ein Dossier, lesbar für den ganzen Staff.',
          points: ['Historie pro Spieler', 'Notizen des medizinischen Staffs', 'Gestaffeltes Return-to-Play'],
        },
        {
          slug: 'training-load',
          title: 'Belastungsplanung & RPE',
          text: 'Planen Sie die Belastung der Woche Tag für Tag, dann füllt die Spieler-RPE das Reale aus: geplant vs. real, ACWR, schwache Signale.',
          points: ['Belastungsplanung', 'RPE pro Training', 'ACWR pro Spieler'],
        },
        {
          slug: 'sessions',
          title: 'Trainings & Taktik',
          text: 'Taktiktafeln, eine Übungsbibliothek und ein KI-Assistent, der die reale Belastung des Teams berücksichtigt.',
          points: ['Taktiktafeln', 'Übungsbibliothek', 'KI-gestützte Erstellung'],
        },
      ],
    },

    features: {
      communication: {
        meta: {
          title: 'Spiel-Aufstellungen & Teamkommunikation | STRIVN',
          description:
            'Verschicken Sie Aufstellungen, sammeln Sie Antworten ohne Spieler-Konto und halten Sie die Anwesenheit in Echtzeit aktuell. Kostenlos für Amateur- und Semiprofi-Coaches.',
        },
        eyebrow: 'Kommunikation & Aufstellungen',
        hero: {
          title: 'Die Aufstellung, die sich selbst steuert.',
          lede: 'Jedes Event erzeugt seine Nachricht und seinen Antwortlink. Sie teilen ihn auf dem Kanal, den Ihre Gruppe schon nutzt — WhatsApp, E-Mail, die App — und STRIVN sammelt die Antworten, sodass sich die Anwesenheitsliste selbst aktuell hält.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Hören Sie auf, Antworten hinterherzujagen.',
          items: [
            {
              title: 'Vorlagen pro Event-Typ',
              text: 'Training, Spiel, Turnier: Jeder Event-Typ hat seine eigene Nachrichtenvorlage. Die Aufstellung ist geschrieben, bevor Sie überhaupt die Tastatur öffnen.',
            },
            {
              title: 'Ein Antwortlink, null Spieler-Konten',
              text: 'Spieler bestätigen über einen einfachen Link, am Web oder mobil — nichts zu installieren, kein Passwort, das am Abend vor einem Spiel zurückgesetzt werden muss.',
            },
            {
              title: 'Anwesenheit in Echtzeit aktualisiert',
              text: 'Jede Antwort landet direkt auf der Anwesenheitsliste. Nichts neu zu zählen, keine Tabellenversionen abzugleichen.',
            },
            {
              title: 'Gezielte Erinnerungen',
              text: 'STRIVN weiß, wer noch nicht geantwortet hat, und lässt Sie nur diese anstupsen — ein Tipp, statt einer „bitte bestätigen“-Nachricht an die ganze Gruppe.',
            },
          ],
        },
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Erstellen Sie das Event',
              text: 'Training, Spiel oder Turnier — STRIVN entwirft die Aufstellungsnachricht und ihren Antwortlink.',
            },
            {
              title: 'Teilen Sie es dort, wo Ihre Gruppe lebt',
              text: 'Posten Sie den Link in der WhatsApp-Gruppe, verschicken Sie ihn per E-Mail oder lassen Sie die App die Spieler direkt benachrichtigen.',
            },
            {
              title: 'Sehen Sie den Antworten beim Eintreffen zu',
              text: 'Jede Antwort aktualisiert die Anwesenheit sofort, mit unsicheren Spielern zur Nachverfolgung markiert.',
            },
            {
              title: 'Erinnern Sie nur die Stillen',
              text: 'Eine gezielte Erinnerung geht an die Nicht-Antwortenden — der Rest der Gruppe wird nicht zugespammt.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Müssen meine Spieler eine App installieren?',
              answer:
                'Nein. Sie können über den Link von jedem Telefon oder Computer aus antworten. Die native App ergänzt Benachrichtigungen und einen Kalender, bleibt aber optional.',
            },
            {
              question: 'Ersetzt STRIVN unsere WhatsApp-Gruppe?',
              answer:
                'Nein — es arbeitet mit ihr zusammen. Die Gruppe behält das Teamleben; STRIVN übernimmt den strukturierten Teil: wer kommt, wer nicht, wer nichts gesagt hat.',
            },
            {
              question: 'Können Eltern für jüngere Spieler antworten?',
              answer:
                'Ja. Der Antwortlink funktioniert für die Person, die die Verfügbarkeit des Spielers verwaltet — kein Konto nötig, also bestätigt ein Elternteil in Sekunden.',
            },
            {
              question: 'Was passiert, wenn jemand spät antwortet?',
              answer:
                'Die Anwesenheitsliste aktualisiert sich in dem Moment, in dem sie antworten, und die Änderung ist für den ganzen Staff sichtbar — keine Nachricht weiterzuleiten.',
            },
          ],
        },
        finalCta: {
          title: 'Verschicken Sie Ihre letzte manuelle Aufstellung.',
          body: 'Erstellen Sie Ihr Team kostenlos — die nächste Aufstellung steuert sich selbst.',
          cta: 'Kostenlos starten',
        },
      },

      medical: {
        meta: {
          title: 'Verletzungs-Tracking für Fußballteams | STRIVN',
          description:
            'Ein gemeinsames medizinisches Protokoll für Amateur- und Semiprofi-Teams: Verletzungen, Notizen von Arzt und Physio, gestaffeltes Return-to-Play. Kostenlos für Coaches.',
        },
        eyebrow: 'Medizinisches Protokoll',
        hero: {
          title: 'Ein medizinisches Protokoll, das der ganze Staff lesen kann.',
          lede: 'Verletzungen, Notizen des Arztes, Einschätzungen des Physios, Return-to-Play-Protokoll: Alles ist verbunden, von der Diagnose zurück auf den Platz. Sie sehen, wo jeder Spieler steht, ohne jemanden anzurufen.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Eine Verletzung, ein Dossier — nicht fünf Gespräche.',
          items: [
            {
              title: 'Eine Historie pro Spieler',
              text: 'Jede Verletzung, jede Behandlung, jedes Comeback lebt im Dossier des Spielers. Wiederkehrende Probleme werden sichtbar, statt halb vergessen zu sein.',
            },
            {
              title: 'Arzt und Physio an einem Ort',
              text: 'Die Freigabe des Arztes und die Einschätzung des Physios stehen im selben Dossier — keine SMS weiterzuleiten, keine mündliche Übergabe, die verloren geht.',
            },
            {
              title: 'Ein gestaffeltes Return-to-Play',
              text: 'Diagnose, Behandlung, Reha, Mannschaftstraining, spielbereit: Jede Stufe ist explizit, und niemand überstürzt ein Comeback.',
            },
            {
              title: 'Lesezugriff für den Coach',
              text: 'Sie sehen Status und Verfügbarkeit auf einen Blick; die medizinischen Details bleiben beim Staff, der sie verantwortet.',
            },
          ],
        },
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Öffnen Sie das Dossier',
              text: 'Der Physio oder der Coach legt den Eintrag an: Spieler, Verletzung, Datum. Dreißig Sekunden am Spielfeldrand.',
            },
            {
              title: 'Der Staff fügt seine Notizen hinzu',
              text: 'Arzt, Physio und Athletiktrainer schreiben ins selbe Dossier, jeder aus seiner eigenen Ansicht.',
            },
            {
              title: 'Folgen Sie dem Protokoll',
              text: 'Die Return-to-Play-Stufen schreiten mit dem Spieler voran, sichtbar für jedes berechtigte Staffmitglied.',
            },
            {
              title: 'Planen Sie mit der echten Verfügbarkeit',
              text: 'Anwesenheit und Trainingsplanung spiegeln wider, wer wirklich fit ist — keine Überraschungen am Spieltag.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Wer kann die medizinischen Daten eines Spielers sehen?',
              answer:
                'Nur die Staffmitglieder, die Sie autorisieren. Der Coach sieht Status und Verfügbarkeit; die detaillierten Notizen bleiben beim Staff, der sie geschrieben hat.',
            },
            {
              question: 'Wir haben keinen Physio. Ist es trotzdem nützlich?',
              answer:
                'Ja. Viele Amateurteams beginnen damit, dass der Coach Verletzungen und Rückkehrdaten notiert. Die Struktur hilft schon bei einem Staff aus einer Person.',
            },
            {
              question: 'Was ist ein Return-to-Play-Protokoll?',
              answer:
                'Ein gestaffelter Weg von der Diagnose zurück zur Spielverfügbarkeit. STRIVN macht die Stufen explizit, damit ein Spieler nicht zu früh zurückkehrt, weil niemand das ganze Bild hatte.',
            },
            {
              question: 'Funktioniert es für langwierige Verletzungen?',
              answer:
                'Ja — ein Dossier hat kein Zeitlimit, und das gestaffelte Protokoll ist genau für die mehrwöchigen Comebacks gemacht, bei denen Informationen üblicherweise verloren gehen.',
            },
          ],
        },
        finalCta: {
          title: 'Legen Sie das medizinische Protokoll dort ab, wo der Staff es lesen kann.',
          body: 'Erstellen Sie Ihr Team kostenlos — das medizinische Protokoll gehört zum kostenlosen Plan, nicht zu einer bezahlten Option.',
          cta: 'Kostenlos starten',
        },
      },

      'training-load': {
        meta: {
          title: 'Belastungsplanung & Monitoring der Trainingsbelastung für Coaches | STRIVN',
          description:
            'Planen Sie die Belastung der Woche Tag für Tag, sammeln Sie RPE über die Telefone Ihrer Spieler, vergleichen Sie geplant vs. real und verfolgen Sie ACWR, um Verletzungsrisiko zu erkennen, bevor daraus ein Ausfall wird. Kostenlos für Coaches.',
        },
        eyebrow: 'Belastungsplanung & RPE',
        hero: {
          title: 'Planen Sie die Woche. Verfolgen Sie die reale Belastung.',
          lede: 'Bauen Sie die Woche mit einem Belastungsziel und Übungen Tag für Tag auf, dann lassen Sie die Spieler-RPE das Reale ausfüllen. STRIVN vergleicht geplant vs. real, berechnet ACWR und markiert das Risiko, bevor es Sie etwas kostet.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Planen Sie die Belastung, dann sehen Sie das Reale sich füllen.',
          items: [
            {
              title: 'Planen Sie die Woche',
              text: 'Setzen Sie ein wöchentliches Belastungsziel, legen Sie Trainings und Übungen Tag für Tag mit ihren Kategorien an. Die ACWR-Prognose erscheint, bevor das erste Training überhaupt beginnt.',
            },
            {
              title: 'RPE pro Training, pro Spieler',
              text: 'Spieler bewerten die Anstrengung von ihrem Telefon aus direkt nach dem Training. Keine Papierformulare mehr, kein Notizbuch, das in eine Tabelle übertragen werden muss.',
            },
            {
              title: 'Geplant vs. real',
              text: 'Die reale Belastung wird automatisch mit dem Plan verglichen: überbelastete und unterbelastete Tage tauchen beide auf einen Blick auf.',
            },
            {
              title: 'ACWR pro Spieler',
              text: 'Das Acute:Chronic-Workload-Ratio markiert, wer zu schnell ansteigt — der klassische Vorbote von Muskelverletzungen.',
            },
          ],
        },
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Planen Sie die Woche',
              text: 'Belastungsziel, Trainings und Übungen pro Tag, Belastungskategorien (physisch, technisch, Spiel). Die ACWR-Prognose des Teams aktualisiert sich, während Sie bauen.',
            },
            {
              title: 'Spieler bewerten das Training',
              text: 'Eine schnelle RPE-Abfrage nach jedem Training, in Sekunden von ihren Telefonen beantwortet.',
            },
            {
              title: 'STRIVN vergleicht geplant vs. real',
              text: 'Trainingsbewertungen werden zu realer Belastung, Monotonie und ACWR pro Spieler, automatisch mit dem Plan verglichen.',
            },
            {
              title: 'Justieren Sie, bevor es Sie etwas kostet',
              text: 'Planen Sie einen leichteren Freitag für den Spieler bei 1.32, statt ihn sechs Wochen zu verlieren.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Kann ich die Belastung im Voraus planen?',
              answer:
                'Ja. Die Ansicht Belastungsplanung lässt Sie ein wöchentliches Belastungsziel setzen und Übungen Tag für Tag nach Kategorie anlegen; STRIVN projiziert das ACWR des Teams und markiert riskante Tage, bevor die Woche beginnt.',
            },
            {
              question: 'Was ist RPE?',
              answer:
                'Rating of Perceived Exertion: die Bewertung von 1 bis 10, die ein Spieler selbst dafür gibt, wie hart sich ein Training angefühlt hat. Multipliziert mit der Dauer ist es das einfachste zuverlässige Belastungsmaß im Amateursport.',
            },
            {
              question: 'Was ist ACWR, und warum ist es wichtig?',
              answer:
                'Das Acute:Chronic-Workload-Ratio vergleicht die Belastung dieser Woche mit dem vergangenen Monat. Scharfe Spitzen korrelieren mit dem Verletzungsrisiko; STRIVN berechnet es pro Spieler, damit Sie die Spitze glätten können, bevor sie Sie etwas kostet.',
            },
            {
              question: 'Werden meine Spieler es wirklich ausfüllen?',
              answer:
                'Es dauert Sekunden auf ihrem Telefon direkt nach dem Training, und Sie sehen auf einen Blick, wer nicht geantwortet hat — dieselbe Erinnerungslogik wie bei Aufstellungen.',
            },
            {
              question: 'Brauche ich einen Athletiktrainer, um das zu nutzen?',
              answer:
                'Nein. Die Standardeinstellungen funktionieren für einen Coach allein; und wenn Sie einen Athletiktrainer haben, bekommt er eine eigene Planungsansicht und seine Notiz wird mit dem Staff geteilt.',
            },
          ],
        },
        finalCta: {
          title: 'Planen Sie die Woche des Teams, bevor sie beginnt.',
          body: 'Erstellen Sie Ihr Team kostenlos — Belastungsplanung, Tracking und RPE gehören zum kostenlosen Plan.',
          cta: 'Kostenlos starten',
        },
      },

      sessions: {
        meta: {
          title: 'Fußball-Trainingsplaner & Taktiktafeln | STRIVN',
          description:
            'Planen Sie Trainings, zeichnen Sie Taktiktafeln, bauen Sie Ihre Übungsbibliothek — mit einem KI-Assistenten, der die reale Belastung des Teams berücksichtigt.',
        },
        eyebrow: 'Trainings & Taktik',
        hero: {
          title: 'Das Training fertig, bevor Sie den Platz erreichen.',
          lede: 'Taktiktafeln, eine Übungsbibliothek, Wochenplanung: STRIVN formt das Training, während Sie über das Spiel nachdenken, und der KI-Assistent berücksichtigt die reale Belastung des Teams.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Denken Sie an das Spiel. STRIVN übernimmt die Aufbereitung.',
          items: [
            {
              title: 'Taktiktafeln',
              text: 'Skizzieren Sie den Pressingblock oder die Spieleröffnung auf einer Tafel, die der ganze Staff öffnen kann — keine Fotos von einem Whiteboard mehr.',
            },
            {
              title: 'Eine Bibliothek, die mit Ihnen wächst',
              text: 'Behalten Sie die Übungen, die funktionieren, verwenden Sie sie in Sekunden wieder und hören Sie auf, jeden Monat dasselbe Rondo neu zu zeichnen.',
            },
            {
              title: 'Wochenplanung',
              text: 'Trainings stehen in der Woche neben den Spielen: Umfang und Absicht richten sich nach dem, was am Sonntag kommt.',
            },
            {
              title: 'KI-gestützte Trainingserstellung',
              text: 'Beschreiben Sie die Absicht — STRIVN schlägt die Struktur vor und berücksichtigt die reale Belastung und Verfügbarkeit des Teams. Sie bleiben der Coach; es übernimmt die Aufbereitung.',
            },
          ],
        },
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Legen Sie die Absicht fest',
              text: 'Hohes Pressing, Spieleröffnung unter Druck, Abschluss — benennen Sie das Thema des Donnerstags.',
            },
            {
              title: 'Bauen Sie aus der Bibliothek oder mit KI',
              text: 'Holen Sie Ihre bewährten Übungen heran oder lassen Sie den Assistenten eine Struktur vorschlagen, die die Belastung der Woche respektiert.',
            },
            {
              title: 'Teilen Sie mit dem Staff',
              text: 'Der Co-Trainer und der Athletiktrainer sehen den Plan vor dem Training — nicht auf dem Parkplatz.',
            },
            {
              title: 'Schließen Sie den Kreis',
              text: 'Nach dem Training bringt der Bericht alles zusammen: was geplant war, was passiert ist, was anzupassen ist.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Wie funktioniert der KI-Assistent?',
              answer:
                'Sie beschreiben die Absicht des Trainings; der Assistent schlägt Phasen, Dauern und Übungen vor und stützt sich dabei auf das, was STRIVN bereits weiß — die Verfügbarkeit und die jüngste Belastung des Teams. Jeder Vorschlag bleibt bearbeitbar, bevor er zum Plan wird.',
            },
            {
              question: 'Kann ich meine eigenen Übungen verwenden?',
              answer:
                'Ja. Die Bibliothek gehört Ihnen: Ihre Übungen, Ihre Diagramme, Ihre Namen. Der Assistent stützt sich zuerst darauf, nicht nur auf generische Vorlagen.',
            },
            {
              question: 'Sehen Spieler den Trainingsplan?',
              answer:
                'Sie entscheiden, was Sie teilen. Die Aufstellung sagt den Spielern, wann und wo; die taktischen Details können beim Staff bleiben.',
            },
            {
              question: 'Ist das nur für Fußball?',
              answer:
                'STRIVN ist fußballorientiert konzipiert: Die Tafeln, die Übungsstrukturen und die Belastungslogik sprechen Fußball. Dieser Fokus ist bewusst gewählt.',
            },
          ],
        },
        finalCta: {
          title: 'Denken Sie an das Spiel. Die Aufbereitung ist erledigt.',
          body: 'Erstellen Sie Ihr Team kostenlos — Tafeln, Bibliothek und Assistent inklusive.',
          cta: 'Kostenlos starten',
        },
      },
    },
  },
};
