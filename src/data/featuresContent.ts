import type { Locale } from './landingContent';

export type FeatureSlug = 'communication' | 'medical' | 'training-load' | 'sessions';

export const FEATURE_SLUGS: FeatureSlug[] = ['communication', 'medical', 'training-load', 'sessions'];

type FeatureContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  hero: { title: string; lede: string; primaryCta: string; reassurance: string };
  benefits: { title: string; items: Array<{ title: string; text: string }> };
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
          title: 'Charge & RPE',
          text: 'Les joueurs répondent depuis leur téléphone, STRIVN assemble la semaine : charge, ACWR, signaux faibles.',
          points: ['RPE par séance', 'ACWR par joueur', 'Note prépa partagée'],
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
          title: 'Suivi de charge & RPE pour coaches | STRIVN',
          description:
            'Collectez le RPE depuis le téléphone des joueurs, suivez la charge hebdomadaire et l’ACWR, et repérez les signaux de risque avant la blessure. Gratuit pour les coaches.',
        },
        eyebrow: 'Charge & RPE',
        hero: {
          title: 'La charge du groupe, sans relancer personne.',
          lede: 'RPE, charge hebdomadaire, ACWR, récupération : les joueurs répondent depuis leur téléphone et STRIVN assemble la semaine. Vous arrivez le lundi avec les signaux faibles déjà visibles.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Voyez les signaux faibles le lundi, pas à l’infirmerie.',
          items: [
            {
              title: 'Le RPE par séance, par joueur',
              text: 'Les joueurs notent l’effort depuis leur téléphone juste après la séance. Plus de fiches papier, plus de carnet à ressaisir dans un tableur.',
            },
            {
              title: 'La charge hebdo et la monotonie',
              text: 'STRIVN assemble les séances en une image hebdomadaire par joueur : les pics comme les semaines plates deviennent visibles.',
            },
            {
              title: 'L’ACWR par joueur',
              text: 'Le ratio charge aiguë / charge chronique signale qui monte trop vite — le précurseur classique des blessures musculaires.',
            },
            {
              title: 'Une note prépa partagée',
              text: 'La lecture de la semaine par le préparateur est attachée aux données, visible par tout le staff.',
            },
          ],
        },
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Les joueurs notent la séance',
              text: 'Un RPE rapide après chaque séance, répondu depuis leur téléphone en quelques secondes.',
            },
            {
              title: 'STRIVN assemble la semaine',
              text: 'Les notes de séance deviennent charge hebdo, monotonie et ACWR par joueur, automatiquement.',
            },
            {
              title: 'Les signaux remontent seuls',
              text: 'Les joueurs qui dérivent vers des ratios à risque sont signalés — vert, à surveiller, risque.',
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
                'Non. Les réglages par défaut fonctionnent pour un coach seul ; et si vous avez un prépa, il retrouve sa vue et sa note est partagée au staff.',
            },
          ],
        },
        finalCta: {
          title: 'Connaissez la semaine du groupe avant qu’elle commence.',
          body: 'Créez votre équipe gratuitement — le suivi de charge et le RPE font partie du plan gratuit.',
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
          title: 'Training load & RPE',
          text: 'Players answer from their phones, STRIVN assembles the week: load, ACWR, weak signals.',
          points: ['RPE per session', 'ACWR per player', 'Shared fitness note'],
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
          title: 'RPE & training load monitoring for coaches | STRIVN',
          description:
            'Collect RPE from your players’ phones, track weekly load and ACWR, and spot injury-risk signals before they become absences. Free for coaches.',
        },
        eyebrow: 'Training load & RPE',
        hero: {
          title: 'The squad’s load, without chasing anyone.',
          lede: 'RPE, weekly load, ACWR, recovery: players answer from their phones and STRIVN assembles the week. You arrive on Monday with the weak signals already visible.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'See the weak signals on Monday, not in the treatment room.',
          items: [
            {
              title: 'RPE per session, per player',
              text: 'Players rate the effort from their phone right after the session. No paper forms, no notebook to re-enter into a spreadsheet.',
            },
            {
              title: 'Weekly load and monotony',
              text: 'STRIVN assembles sessions into a weekly picture per player: spikes and flat weeks both become visible.',
            },
            {
              title: 'ACWR per player',
              text: 'The acute:chronic workload ratio flags who is climbing too fast — the classic precursor to muscle injuries.',
            },
            {
              title: 'A shared fitness note',
              text: 'The fitness coach’s read on the week is attached to the data, visible to the whole staff.',
            },
          ],
        },
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Players rate the session',
              text: 'A quick RPE prompt after each session, answered from their phones in seconds.',
            },
            {
              title: 'STRIVN assembles the week',
              text: 'Session ratings become weekly load, monotony and ACWR per player, automatically.',
            },
            {
              title: 'Signals surface on their own',
              text: 'Players drifting into risky ratios are flagged — green, watch, risk.',
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
                'No. The defaults work for a coach on their own; and if you do have a fitness coach, they get their own view and their note is shared with the staff.',
            },
          ],
        },
        finalCta: {
          title: 'Know the squad’s week before it starts.',
          body: 'Create your team for free — load tracking and RPE are part of the free plan.',
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
};
