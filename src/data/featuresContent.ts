import type { Locale } from './landingContent';

export type FeatureSlug = 'communication' | 'medical' | 'training-load' | 'sessions' | 'live' | 'scouting' | 'reports' | 'player-app';

export const FEATURE_SLUGS: FeatureSlug[] = ['communication', 'medical', 'training-load', 'sessions', 'live', 'scouting', 'reports', 'player-app'];

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
  /** Verified store links, rendered as ghost buttons next to the final CTA (player-app). */
  storeLinks?: { appStore?: string; playStore?: string };
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
        lede: 'De la convocation au rapport de fin de mois, STRIVN réunit les chantiers qui mangent la semaine d’un coach — et tout ce qui les relie. Chaque module est gratuit, et partagé avec votre staff.',
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
        {
          slug: 'live',
          title: 'Séance & match en direct',
          text: 'Menez la séance sur le terrain, scorez le match d’un geste — et ceux qui ne sont pas là suivent via un simple lien, sans compte.',
          points: ['Séance en direct', 'Score & compositions', 'Lien public sans compte'],
        },
        {
          slug: 'scouting',
          title: 'Scouting adverse',
          text: 'Préparez le prochain adversaire à plusieurs : rapport structuré, effectif adverse, clips tagués — puis partagez-le au groupe via un simple lien.',
          points: ['Rapports d’adversaire', 'Clips vidéo tagués', 'Partage via lien'],
        },
        {
          slug: 'reports',
          title: 'Rapports d’équipe',
          text: 'Le rapport que vous n’avez jamais le temps de faire : composé depuis vos données — présences, charge, médical — rédigé par l’IA et partagé en PDF.',
          points: ['Blocs présences, charge, médical', 'Première version rédigée par l’IA', 'Export PDF'],
        },
        {
          slug: 'player-app',
          title: 'L’app de vos joueurs',
          text: 'Vos joueurs reçoivent une app iOS et Android : convocations, check-ins bien-être, programme personnel et stats — la boucle que vous lancez se referme toute seule.',
          points: ['Check-ins bien-être', 'Programmes & stats perso', 'Coach IA compagnon'],
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

      live: {
        meta: {
          title: 'Séance & match en direct | STRIVN',
          description:
            'Menez la séance depuis le bord du terrain, scorez le match en direct et partagez un lien public : parents et absents suivent le score sans compte. Gratuit pour les coaches.',
        },
        eyebrow: 'Séance & match en direct',
        hero: {
          title: 'Menez la séance, scorez le match. Tout le monde suit.',
          lede: 'Votre séance se déroule bloc par bloc sur le téléphone, votre match se score d’un geste. Et grâce au lien public, ceux qui sont loin du terrain suivent quand même — en direct, sans compte, sans installation.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Vous gérez le terrain. STRIVN gère le direct.',
          items: [
            {
              title: 'La séance en direct, bloc par bloc',
              text: 'La séance préparée dans STRIVN se déroule au chrono : consignes, schémas, enchaînements — téléphone en poche ou tablette au bord du terrain, et le staff voit où vous en êtes.',
            },
            {
              title: 'Le match scoré d’un geste',
              text: 'Composition posée avant le coup d’envoi, buts comptés d’un doigt pendant le jeu. Le score et le déroulé du match s’écrivent en direct, sans feuille volante.',
            },
            {
              title: 'Un lien public, zéro compte',
              text: 'Partagez le lien du match : parents, blessés et absents suivent le score en direct depuis n’importe quel téléphone — rien à installer, rien à créer.',
            },
            {
              title: 'La feuille de match papier, importée',
              text: 'La composition de la feuille papier rejoint STRIVN sans ressaisie ligne par ligne — l’historique des matchs se centralise tout seul.',
            },
          ],
        },
        showcase: [
          {
            title: 'Le direct, des deux côtés',
            blurb: 'Côté terrain, la séance se déroule et le match se score. Côté tribune — ou salon —, un simple lien suffit pour suivre en direct.',
            slides: [
              {
                img: '/screenshots/live-viewer-phone-fr.png',
                kind: 'mobile',
                alt: 'Suivi public d’un match en direct sur téléphone : score et déroulé, sans compte.',
                caption: 'Le lien public : parents et absents suivent le score en direct, sans compte ni installation.',
              },
              {
                img: '/screenshots/live-runner-tablet-board-fr.png',
                kind: 'desktop',
                alt: 'La séance en direct sur tablette : le bloc en cours avec son schéma et ses consignes.',
                caption: 'Sur la tablette au bord du terrain : le bloc en cours, son schéma, ses consignes.',
              },
              {
                img: '/screenshots/live-session-fr.png',
                kind: 'desktop',
                alt: 'La séance en direct côté staff : déroulé des blocs et chrono en temps réel.',
                caption: 'Le staff suit la séance en temps réel : bloc actif, chrono, déroulé.',
              },
              {
                img: '/screenshots/live-session-presession-fr.png',
                kind: 'desktop',
                alt: 'L’écran d’avant-séance : le déroulé est prêt, il ne reste qu’à lancer.',
                caption: 'Avant de lancer : la séance préparée est prête à passer en direct.',
              },
            ],
          },
        ],
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Préparez comme d’habitude',
              text: 'La séance est construite dans STRIVN, la composition posée avant le match. Passer en direct ne demande rien de plus.',
            },
            {
              title: 'Lancez le direct',
              text: 'Sur le terrain, la séance déroule ses blocs au chrono ; en match, vous comptez les buts d’un geste.',
            },
            {
              title: 'Tout le monde suit',
              text: 'Le staff suit dans l’app, et le lien public affiche le score en direct à ceux qui ne sont pas au bord du terrain — sans compte.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Faut-il un compte pour suivre un match en direct ?',
              answer:
                'Non. Le lien public s’ouvre dans n’importe quel navigateur, sur n’importe quel téléphone. Un parent, un joueur blessé ou un proche suit le score en direct sans rien installer.',
            },
            {
              question: 'Que voit-on exactement via le lien public ?',
              answer:
                'Le score, le déroulé du match et la composition. Le reste — présences, dossiers, notes du staff — reste dans STRIVN, côté équipe.',
            },
            {
              question: 'Et s’il n’y a pas de réseau au bord du terrain ?',
              answer:
                'La séance en direct continue de dérouler vos blocs même sans connexion, repères sonores compris. Dès que le réseau revient, tout se synchronise pour ceux qui suivent à distance.',
            },
            {
              question: 'Le lien public est-il gratuit ?',
              answer:
                'Oui — comme le reste : la séance en direct, le match en direct et le lien public font partie du plan gratuit, pour une équipe.',
            },
          ],
        },
        finalCta: {
          title: 'Au prochain match, tout le monde est au bord du terrain.',
          body: 'Créez votre équipe gratuitement — le direct et le lien public font partie du plan gratuit.',
          cta: 'Commencer gratuitement',
        },
      },

      scouting: {
        meta: {
          title: 'Scouting adverse & rapports partagés | STRIVN',
          description:
            'Préparez le prochain adversaire à plusieurs : rapports de scouting structurés, effectifs adverses suivis dans le temps, clips vidéo tagués — et un rapport partagé au groupe via un simple lien. Gratuit pour les coaches.',
        },
        eyebrow: 'Scouting adverse',
        hero: {
          title: 'Le prochain adversaire, préparé à plusieurs.',
          lede: 'L’analyste observe, le coach tranche : le rapport de scouting se construit à plusieurs dans STRIVN — effectif adverse, observations, clips tagués. Et quand il est prêt, un simple lien le partage au groupe.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Vous observez le jeu. STRIVN structure le rapport.',
          items: [
            {
              title: 'Des rapports d’adversaire structurés',
              text: 'Fini le document qui traîne dans une messagerie : chaque adversaire a son rapport dans STRIVN, et le coach comme l’analyste écrivent dans le même — observations, forces, faiblesses, au même endroit.',
            },
            {
              title: 'L’effectif adverse, suivi dans le temps',
              text: 'Chaque adversaire garde sa fiche : ses joueurs, leurs caractéristiques, vos notes. Match après match, saison après saison, le dossier s’enrichit — vous ne repartez jamais de zéro.',
            },
            {
              title: 'Des clips vidéo tagués et annotés',
              text: 'Un clip, un tag, une note : les moments clés de l’adversaire se retrouvent en un instant et viennent appuyer le rapport — chacun voit exactement ce dont on parle.',
            },
            {
              title: 'Le rapport partagé au vestiaire',
              text: 'Quand le rapport est prêt, un lien public suffit : le groupe l’ouvre sur n’importe quel téléphone, sans compte — et arrive au match en sachant à quoi s’attendre.',
            },
          ],
        },
        showcase: [
          {
            title: 'De l’observation au vestiaire',
            blurb: 'L’adversaire s’observe dans le module scouting, le rapport se construit à plusieurs — et le groupe le reçoit via un simple lien.',
            slides: [
              {
                img: '/screenshots/scouting-module-fr.png',
                kind: 'desktop',
                alt: 'Le module scouting : les adversaires suivis, avec leurs effectifs et leurs rapports.',
                caption: 'Le module scouting : chaque adversaire a sa fiche — effectif, observations, rapports.',
              },
              {
                img: '/screenshots/scouting-report-fr.png',
                kind: 'desktop',
                alt: 'Un rapport de scouting : observations structurées et clips tagués sur le prochain adversaire.',
                caption: 'Le rapport se construit à plusieurs : coach et analyste travaillent sur le même document.',
              },
              {
                img: '/screenshots/scouting-report-phone-fr.png',
                kind: 'mobile',
                alt: 'Le rapport de scouting ouvert sur un téléphone via le lien de partage.',
                caption: 'Partagé via lien, le rapport s’ouvre sur n’importe quel téléphone.',
              },
            ],
          },
        ],
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Observez l’adversaire',
              text: 'Au bord du terrain ou devant la vidéo : notes, tags et clips s’accumulent dans la fiche de l’adversaire, à mesure que vous observez.',
            },
            {
              title: 'Construisez le rapport',
              text: 'Coach et analyste assemblent le rapport à plusieurs : observations structurées, effectif adverse, clips à l’appui.',
            },
            {
              title: 'Partagez au groupe',
              text: 'Un lien, et le rapport arrive au vestiaire : chacun l’ouvre sur son téléphone et arrive préparé le jour du match.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Qui peut voir un rapport de scouting ?',
              answer:
                'Le staff, dans STRIVN. Et quand vous décidez de le partager, le lien public l’ouvre à ceux qui le reçoivent — joueurs compris — sans compte. Tant que vous ne partagez pas, le rapport reste côté staff.',
            },
            {
              question: 'Faut-il un abonnement vidéo pour les clips ?',
              answer:
                'Non. Le scouting fonctionne sans plateforme vidéo dédiée : vous ajoutez vos clips, les taguez et les annotez directement dans STRIVN.',
            },
            {
              question: 'Les joueurs voient-ils le scouting ?',
              answer:
                'Seulement ce que vous partagez. Les notes de travail restent côté staff ; le rapport finalisé, lui, se partage au groupe via le lien, quand vous le décidez.',
            },
            {
              question: 'Le scouting est-il gratuit ?',
              answer:
                'Oui — comme le reste : les rapports, les effectifs adverses et le partage par lien font partie du plan gratuit, pour une équipe.',
            },
          ],
        },
        finalCta: {
          title: 'Au coup d’envoi, le groupe sait à quoi s’attendre.',
          body: 'Créez votre équipe gratuitement — rapports, effectifs adverses et partage par lien inclus.',
          cta: 'Commencer gratuitement',
        },
      },

      reports: {
        meta: {
          title: 'Rapports d’équipe & export PDF | STRIVN',
          description:
            'Le rapport que le staff n’a jamais le temps de faire : présences, charge, suivi médical, matchs et séances — l’IA en rédige une première version depuis les données déjà dans STRIVN, vous relisez, vous partagez en PDF. Gratuit pour les coaches.',
        },
        eyebrow: 'Rapports d’équipe',
        hero: {
          title: 'Le rapport que vous n’avez jamais le temps de faire.',
          lede: 'Présences, charge, suivi médical, matchs et séances : tout est déjà dans STRIVN. Choisissez les blocs, l’IA rédige une première version — et le comité, les parents ou la direction reçoivent un PDF propre qui montre le travail du staff.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Vous faites le travail. STRIVN le rend visible.',
          items: [
            {
              title: 'Construit depuis vos données existantes',
              text: 'Pas de collecte, pas de copier-coller : le rapport puise dans ce que STRIVN enregistre déjà au fil de la saison — présences, charge d’entraînement, suivi médical, matchs et séances.',
            },
            {
              title: 'Vous choisissez les blocs',
              text: 'Présences du mois, évolution de la charge, blessures en cours, résultats : chaque rapport se compose bloc par bloc, selon le destinataire — comité, parents ou direction sportive.',
            },
            {
              title: 'Un PDF propre, prêt à envoyer',
              text: 'Le rapport s’exporte en PDF mis en page, prêt à joindre à un email ou à poser sur la table en réunion. Pas de tableur à remettre en forme la veille.',
            },
            {
              title: 'L’IA rédige, vous gardez la main',
              text: 'L’IA propose une première version rédigée à partir de vos chiffres. Vous relisez, corrigez, reformulez — rien ne part sans votre accord.',
            },
          ],
        },
        showcase: [
          {
            title: 'Des données au PDF',
            blurb: 'Choisissez les blocs, laissez l’IA rédiger la première version — et relisez avant de partager.',
            slides: [
              {
                img: '/screenshots/reports-hub-fr.png',
                kind: 'desktop',
                alt: 'Le module rapports : les rapports d’équipe existants et le bouton pour en créer un nouveau.',
                caption: 'Le module rapports : chaque rapport garde sa place, prêt à être repris ou partagé.',
              },
              {
                img: '/screenshots/reports-selection-fr.png',
                kind: 'desktop',
                alt: 'La composition d’un rapport : les blocs présences, charge et médical sélectionnés avant la génération.',
                caption: 'Vous choisissez les blocs — présences, charge, médical — et l’IA rédige la première version.',
              },
            ],
          },
        ],
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Choisissez les blocs',
              text: 'Présences, charge, suivi médical, matchs, séances : cochez ce que le rapport doit couvrir, sur la période qui vous intéresse.',
            },
            {
              title: 'L’IA assemble',
              text: 'Une première version rédigée arrive en quelques instants, construite uniquement sur les données de votre équipe dans STRIVN.',
            },
            {
              title: 'Relisez et partagez',
              text: 'Ajustez le texte, retirez un bloc, puis exportez en PDF — pour le comité, les parents ou la direction.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'Sur quelles données le rapport se construit-il ?',
              answer:
                'Sur celles que votre équipe enregistre déjà dans STRIVN : présences et réponses aux convocations, charge d’entraînement, suivi médical, matchs et séances. Rien à ressaisir.',
            },
            {
              question: 'Le comité ou les parents doivent-ils avoir un compte ?',
              answer:
                'Non. Le rapport s’exporte en PDF : vous l’envoyez par email, vous l’imprimez pour la réunion — le destinataire n’a rien à installer.',
            },
            {
              question: 'Peut-on modifier ce que l’IA écrit ?',
              answer:
                'Oui, tout. L’IA propose une première version, mais le texte reste le vôtre : vous relisez, corrigez ou réécrivez chaque bloc avant de partager. Rien ne part sans votre accord.',
            },
            {
              question: 'Les rapports sont-ils gratuits ?',
              answer:
                'Oui — comme le reste : les rapports et l’assistant IA font partie du plan gratuit, pour une équipe.',
            },
          ],
        },
        finalCta: {
          title: 'À la prochaine réunion, le travail du staff est sur la table.',
          body: 'Créez votre équipe gratuitement — rapports, export PDF et assistant IA inclus.',
          cta: 'Commencer gratuitement',
        },
      },

      'player-app': {
        storeLinks: {
          appStore: 'https://apps.apple.com/be/app/strivn-player/id6779121691',
          playStore: 'https://play.google.com/store/apps/details?id=net.strivn.player',
        },
        meta: {
          title: 'L’app joueur iOS & Android | STRIVN',
          description:
            'Vos joueurs reçoivent une app native iOS et Android : convocations, check-ins bien-être, programme personnel, stats et coach IA compagnon. Sur l’App Store et Google Play — gratuite pour vos joueurs.',
        },
        eyebrow: 'L’app de vos joueurs',
        hero: {
          title: 'Ce que vos joueurs reçoivent.',
          lede: 'Une app native iOS et Android, gratuite pour eux : ils répondent aux convocations, remplissent leur check-in bien-être, suivent leur programme et leurs stats. La boucle que vous lancez côté staff se referme dans leur poche — sans relance.',
          primaryCta: 'Commencer gratuitement',
          reassurance: 'Gratuit pour une équipe · sans validation du club · prêt en quelques minutes',
        },
        benefits: {
          title: 'Vous lancez la boucle. L’app la referme.',
          items: [
            {
              title: 'L’app iOS et Android de vos joueurs',
              text: 'Une app native, disponible sur l’App Store et Google Play, gratuite pour vos joueurs. Convocations, agenda, messages : ce que vous envoyez arrive là où ils regardent déjà — leur téléphone.',
            },
            {
              title: 'Check-ins et forme, sans relance',
              text: 'Sommeil, fatigue, humeur, courbatures : le joueur remplit son check-in en quelques secondes le matin. Vous voyez la forme du groupe avant la séance — sans envoyer un seul message.',
            },
            {
              title: 'Programme et stats perso dans la poche',
              text: 'Chaque joueur retrouve son programme individuel, coche ce qu’il a fait et suit ses propres chiffres : présences, charge, progression. Ce que vous planifiez se suit tout seul.',
            },
            {
              title: 'Un coach IA compagnon, dans votre cadre',
              text: 'Entre deux séances, le joueur peut poser ses questions à un coach IA qui répond dans le cadre que vous fixez — vos consignes, son programme, sa charge. Jamais à votre place.',
            },
          ],
        },
        showcase: [
          {
            title: 'Dans la poche de vos joueurs',
            blurb: 'L’agenda, le check-in du matin et la forme : ce que le joueur voit, tel qu’il le voit.',
            slides: [
              {
                img: '/screenshots/portal-agenda-fr.png',
                kind: 'mobile',
                alt: 'L’agenda du joueur sur mobile : les prochains événements avec les boutons de réponse à la convocation.',
                caption: 'La convocation arrive dans l’app — le joueur répond en un geste.',
              },
              {
                img: '/screenshots/portal-checkin-fr.png',
                kind: 'mobile',
                alt: 'Le check-in bien-être du joueur sur mobile : sommeil, fatigue, humeur et courbatures à évaluer.',
                caption: 'Le check-in du matin : quelques curseurs, quelques secondes.',
              },
              {
                img: '/screenshots/portal-fitness-fr.png',
                kind: 'mobile',
                alt: 'L’écran forme du joueur sur mobile : sa charge récente et l’évolution de sa forme.',
                caption: 'Le joueur suit sa forme et sa charge — les mêmes chiffres que vous.',
              },
            ],
          },
        ],
        how: {
          title: 'Comment ça marche',
          steps: [
            {
              title: 'Invitez le joueur',
              text: 'Depuis votre effectif, chaque joueur reçoit son invitation et installe l’app en deux minutes, depuis l’App Store ou Google Play.',
            },
            {
              title: 'Il répond et remplit dans l’app',
              text: 'Convocations, check-ins, programme : le joueur fait sa part depuis son téléphone, au moment qui l’arrange.',
            },
            {
              title: 'Vous voyez tout arriver',
              text: 'Présences à jour, forme du groupe, programmes suivis : côté staff, tout se remplit en temps réel — sans relance.',
            },
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          items: [
            {
              question: 'L’app est-elle disponible sur iOS et Android ?',
              answer:
                'Oui. STRIVN Player est une app native, disponible sur l’App Store (iOS) et sur Google Play (Android). Le joueur l’installe en deux minutes depuis son invitation.',
            },
            {
              question: 'Le joueur doit-il payer quelque chose ?',
              answer:
                'Non. L’app est gratuite pour vos joueurs : ils la téléchargent et l’utilisent sans rien payer. C’est vous qui gérez l’équipe — eux n’ont qu’à répondre.',
            },
            {
              question: 'Et la montre WHOOP ?',
              answer:
                'Le joueur peut connecter sa montre WHOOP pour préremplir ses check-ins avec son sommeil et sa récupération, selon la formule de votre club. Sans montre, le check-in manuel prend quelques secondes.',
            },
            {
              question: 'Et pour les jeunes joueurs ?',
              answer:
                'Le mode jeunes adapte l’app : le coach IA et les amendes sont masqués, et les parents gardent leur place dans la boucle. Notre page équipes de jeunes détaille ce fonctionnement.',
            },
          ],
        },
        finalCta: {
          title: 'Vos joueurs font leur part. Vous la voyez arriver.',
          body: 'Créez votre équipe gratuitement et invitez vos joueurs — l’app STRIVN Player les attend sur l’App Store et Google Play.',
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
        lede: 'From the call-up to the end-of-month report, STRIVN brings together the jobs that eat a coach’s week — and everything that connects them. Every module is free, and shared with your staff.',
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
        {
          slug: 'live',
          title: 'Live session & match',
          text: 'Run the session on the pitch, score the match in one tap — and anyone who isn’t there follows through a simple link, no account.',
          points: ['Live session runner', 'Score & lineups', 'Public link, no account'],
        },
        {
          slug: 'scouting',
          title: 'Opponent scouting',
          text: 'Prepare the next opponent together: a structured report, the opposing squad, tagged clips — then share it with the group through a simple link.',
          points: ['Opponent reports', 'Tagged video clips', 'Shared via link'],
        },
        {
          slug: 'reports',
          title: 'Team reports',
          text: 'The report you never have time to write: composed from your data — attendance, load, medical — drafted by the AI and shared as a PDF.',
          points: ['Attendance, load and medical blocks', 'First draft written by the AI', 'PDF export'],
        },
        {
          slug: 'player-app',
          title: 'Your players’ app',
          text: 'Your players get an iOS and Android app: call-ups, wellness check-ins, a personal program and stats — the loop you start closes itself.',
          points: ['Wellness check-ins', 'Personal programs & stats', 'AI coach companion'],
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

      live: {
        meta: {
          title: 'Live session & live match score | STRIVN',
          description:
            'Run your session from the touchline, score the match live and share a public link: parents and absent players follow the score without an account. Free for coaches.',
        },
        eyebrow: 'Live session & match',
        hero: {
          title: 'Run the session, score the match. Everyone follows.',
          lede: 'Your session runs block by block on your phone, your match is scored in one tap. And thanks to the public link, the people far from the pitch still follow — live, no account, nothing to install.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'You run the pitch. STRIVN runs the live.',
          items: [
            {
              title: 'The session live, block by block',
              text: 'The session you prepared in STRIVN runs on the clock: instructions, diagrams, sequences — phone in your pocket or tablet at the touchline, and the staff sees where you are.',
            },
            {
              title: 'The match scored in one tap',
              text: 'Lineup set before kick-off, goals counted with a finger during play. The score and the match timeline write themselves live — no loose sheet of paper.',
            },
            {
              title: 'A public link, zero accounts',
              text: 'Share the match link: parents, injured players and anyone absent follow the live score from any phone — nothing to install, nothing to create.',
            },
            {
              title: 'The paper match sheet, imported',
              text: 'The lineup from the paper sheet lands in STRIVN without retyping it line by line — the match history centralises itself.',
            },
          ],
        },
        showcase: [
          {
            title: 'The live, from both sides',
            blurb: 'On the pitch, the session runs and the match gets scored. In the stands — or on the sofa — a simple link is all it takes to follow live.',
            slides: [
              {
                img: '/screenshots/live-viewer-phone.png',
                kind: 'mobile',
                alt: 'The public live match view on a phone: score and timeline, no account.',
                caption: 'The public link: parents and absent players follow the live score — no account, nothing to install.',
              },
              {
                img: '/screenshots/live-runner-tablet-board.png',
                kind: 'desktop',
                alt: 'The live session on a tablet: the current block with its diagram and instructions.',
                caption: 'On the tablet at the touchline: the current block, its diagram, its instructions.',
              },
              {
                img: '/screenshots/live-session.png',
                kind: 'desktop',
                alt: 'The live session on the staff side: block timeline and running clock.',
                caption: 'The staff follows the session in real time: active block, clock, timeline.',
              },
              {
                img: '/screenshots/live-session-presession.png',
                kind: 'desktop',
                alt: 'The pre-session screen: the plan is ready, one tap to start.',
                caption: 'Before it starts: the prepared session is ready to go live.',
              },
            ],
          },
        ],
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Prepare as usual',
              text: 'The session is built in STRIVN, the lineup set before the match. Going live takes nothing extra.',
            },
            {
              title: 'Start the live',
              text: 'On the pitch, the session runs its blocks on the clock; on match day, you count the goals in one tap.',
            },
            {
              title: 'Everyone follows',
              text: 'The staff follows in the app, and the public link shows the live score to the people who aren’t at the pitch — no account needed.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Do people need an account to follow a live match?',
              answer:
                'No. The public link opens in any browser, on any phone. A parent, an injured player or a relative follows the live score without installing anything.',
            },
            {
              question: 'What exactly does the public link show?',
              answer:
                'The score, the match timeline and the lineup. Everything else — attendance, records, staff notes — stays inside STRIVN, on the team side.',
            },
            {
              question: 'What if there’s no signal at the pitch?',
              answer:
                'The live session keeps running your blocks even without a connection, audio cues included. As soon as the network comes back, everything syncs for the people following remotely.',
            },
            {
              question: 'Is the public link free?',
              answer:
                'Yes — like the rest: the live session, the live match and the public link are part of the free plan, for one team.',
            },
          ],
        },
        finalCta: {
          title: 'Next match, everyone is at the touchline.',
          body: 'Create your team for free — the live modes and the public link are part of the free plan.',
          cta: 'Start for free',
        },
      },

      scouting: {
        meta: {
          title: 'Opponent scouting & shared reports | STRIVN',
          description:
            'Prepare the next opponent together: structured scouting reports, opposing squads tracked over time, tagged video clips — and a report shared with the group through a simple link. Free for coaches.',
        },
        eyebrow: 'Opponent scouting',
        hero: {
          title: 'The next opponent, prepared together.',
          lede: 'The analyst observes, the coach decides: the scouting report is built together in STRIVN — opposing squad, observations, tagged clips. And when it’s ready, a simple link shares it with the group.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'You watch the game. STRIVN structures the report.',
          items: [
            {
              title: 'Structured opponent reports',
              text: 'No more document lost in a chat thread: every opponent has its report in STRIVN, and coach and analyst write in the same one — observations, strengths, weaknesses, in one place.',
            },
            {
              title: 'The opposing squad, tracked over time',
              text: 'Every opponent keeps its file: their players, their traits, your notes. Match after match, season after season, the record grows — you never start from scratch.',
            },
            {
              title: 'Tagged, annotated video clips',
              text: 'A clip, a tag, a note: the opponent’s key moments are found in an instant and back up the report — everyone sees exactly what you mean.',
            },
            {
              title: 'The report shared with the dressing room',
              text: 'When the report is ready, a public link is all it takes: the group opens it on any phone, no account — and turns up knowing what to expect.',
            },
          ],
        },
        showcase: [
          {
            title: 'From observation to the dressing room',
            blurb: 'The opponent is studied in the scouting module, the report is built together — and the group gets it through a simple link.',
            slides: [
              {
                img: '/screenshots/scouting-module.png',
                kind: 'desktop',
                alt: 'The scouting module: tracked opponents with their squads and reports.',
                caption: 'The scouting module: every opponent has its file — squad, observations, reports.',
              },
              {
                img: '/screenshots/scouting-report.png',
                kind: 'desktop',
                alt: 'A scouting report: structured observations and tagged clips on the next opponent.',
                caption: 'The report is built together: coach and analyst work on the same document.',
              },
              {
                img: '/screenshots/scouting-report-phone.png',
                kind: 'mobile',
                alt: 'The scouting report opened on a phone through the share link.',
                caption: 'Shared through a link, the report opens on any phone.',
              },
            ],
          },
        ],
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Watch the opponent',
              text: 'From the touchline or in front of the video: notes, tags and clips build up in the opponent’s file as you observe.',
            },
            {
              title: 'Build the report',
              text: 'Coach and analyst assemble the report together: structured observations, the opposing squad, clips to back it up.',
            },
            {
              title: 'Share it with the group',
              text: 'One link and the report reaches the dressing room: everyone opens it on their phone and turns up prepared on match day.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Who can see a scouting report?',
              answer:
                'The staff, inside STRIVN. And when you decide to share it, the public link opens it for whoever receives it — players included — without an account. Until you share, the report stays on the staff side.',
            },
            {
              question: 'Do I need a video subscription for the clips?',
              answer:
                'No. Scouting works without a dedicated video platform: you add your clips, tag them and annotate them right in STRIVN.',
            },
            {
              question: 'Do players see the scouting?',
              answer:
                'Only what you share. Working notes stay on the staff side; the finished report is shared with the group through the link, when you decide.',
            },
            {
              question: 'Is scouting free?',
              answer:
                'Yes — like the rest: reports, opponent squads and link sharing are part of the free plan, for one team.',
            },
          ],
        },
        finalCta: {
          title: 'At kick-off, the group knows what’s coming.',
          body: 'Create your team for free — reports, opponent squads and link sharing included.',
          cta: 'Start for free',
        },
      },

      reports: {
        meta: {
          title: 'Team reports & PDF export | STRIVN',
          description:
            'The report the staff never has time to write: attendance, load, medical follow-up, matches and sessions — the AI drafts a first version from the data already in STRIVN, you review it, you share it as a PDF. Free for coaches.',
        },
        eyebrow: 'Team reports',
        hero: {
          title: 'The report you never have time to write.',
          lede: 'Attendance, load, medical follow-up, matches and sessions: it is all in STRIVN already. Pick the blocks, the AI drafts a first version — and the committee, the parents or the board receive a clean PDF that shows the staff’s work.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'You do the work. STRIVN makes it visible.',
          items: [
            {
              title: 'Built from your existing data',
              text: 'No collecting, no copy-paste: the report draws on what STRIVN already records through the season — attendance, training load, medical follow-up, matches and sessions.',
            },
            {
              title: 'You choose the blocks',
              text: 'Attendance for the month, load trends, ongoing injuries, results: each report is composed block by block, depending on who it is for — committee, parents or sporting management.',
            },
            {
              title: 'A clean PDF, ready to send',
              text: 'The report exports as a laid-out PDF, ready to attach to an email or put on the table in a meeting. No spreadsheet to reformat the night before.',
            },
            {
              title: 'The AI drafts, you stay in charge',
              text: 'The AI proposes a first version written from your numbers. You review, correct, rephrase — nothing goes out without your say.',
            },
          ],
        },
        showcase: [
          {
            title: 'From your data to a PDF',
            blurb: 'Pick the blocks, let the AI draft the first version — and review before you share.',
            slides: [
              {
                img: '/screenshots/reports-hub.png',
                kind: 'desktop',
                alt: 'The reports module: the team’s existing reports and the button to create a new one.',
                caption: 'The reports module: every report keeps its place, ready to be reopened or shared.',
              },
              {
                img: '/screenshots/reports-selection.png',
                kind: 'desktop',
                alt: 'Composing a report: the attendance, load and medical blocks selected before generation.',
                caption: 'You pick the blocks — attendance, load, medical — and the AI drafts the first version.',
              },
            ],
          },
        ],
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Choose the blocks',
              text: 'Attendance, load, medical follow-up, matches, sessions: tick what the report should cover, over the period you need.',
            },
            {
              title: 'The AI assembles',
              text: 'A written first version arrives in moments, built solely on your team’s data in STRIVN.',
            },
            {
              title: 'Review and share',
              text: 'Adjust the text, drop a block, then export as a PDF — for the committee, the parents or the board.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'What data does the report build on?',
              answer:
                'The data your team already records in STRIVN: attendance and call-up replies, training load, medical follow-up, matches and sessions. Nothing to re-enter.',
            },
            {
              question: 'Does the committee or a parent need an account?',
              answer:
                'No. The report exports as a PDF: you send it by email or print it for the meeting — the recipient has nothing to install.',
            },
            {
              question: 'Can I edit what the AI writes?',
              answer:
                'Yes, all of it. The AI proposes a first version, but the text stays yours: you review, correct or rewrite every block before sharing. Nothing goes out without your say.',
            },
            {
              question: 'Are reports free?',
              answer:
                'Yes — like the rest: reports and the AI assistant are part of the free plan, for one team.',
            },
          ],
        },
        finalCta: {
          title: 'At the next meeting, the staff’s work is on the table.',
          body: 'Create your team for free — reports, PDF export and the AI assistant included.',
          cta: 'Start for free',
        },
      },

      'player-app': {
        storeLinks: {
          appStore: 'https://apps.apple.com/be/app/strivn-player/id6779121691',
          playStore: 'https://play.google.com/store/apps/details?id=net.strivn.player',
        },
        meta: {
          title: 'The player app for iOS & Android | STRIVN',
          description:
            'Your players get a native iOS and Android app: call-ups, wellness check-ins, a personal program, stats and an AI coach companion. On the App Store and Google Play — free for your players.',
        },
        eyebrow: 'Your players’ app',
        hero: {
          title: 'What your players receive.',
          lede: 'A native iOS and Android app, free for them: they answer call-ups, fill in their wellness check-in, follow their program and their stats. The loop you start on the staff side closes in their pocket — no chasing.',
          primaryCta: 'Start for free',
          reassurance: 'Free for one team · no club approval needed · ready in minutes',
        },
        benefits: {
          title: 'You start the loop. The app closes it.',
          items: [
            {
              title: 'Your players’ iOS and Android app',
              text: 'A native app, available on the App Store and Google Play, free for your players. Call-ups, agenda, messages: what you send lands where they already look — their phone.',
            },
            {
              title: 'Check-ins and readiness, no chasing',
              text: 'Sleep, fatigue, mood, soreness: players fill in their check-in in seconds each morning. You see the squad’s readiness before the session — without sending a single message.',
            },
            {
              title: 'Personal program and stats in their pocket',
              text: 'Each player finds their individual program, ticks off what they did and follows their own numbers: attendance, load, progress. What you plan follows itself.',
            },
            {
              title: 'An AI coach companion, within your frame',
              text: 'Between sessions, players can ask questions to an AI coach that answers within the frame you set — your instructions, their program, their load. Never in your place.',
            },
          ],
        },
        showcase: [
          {
            title: 'In your players’ pocket',
            blurb: 'The agenda, the morning check-in and readiness: what the player sees, as they see it.',
            slides: [
              {
                img: '/screenshots/portal-agenda.png',
                kind: 'mobile',
                alt: 'The player agenda on mobile: upcoming events with call-up reply buttons.',
                caption: 'The call-up lands in the app — the player answers in one tap.',
              },
              {
                img: '/screenshots/portal-checkin.png',
                kind: 'mobile',
                alt: 'The player wellness check-in on mobile: sleep, fatigue, mood and soreness sliders.',
                caption: 'The morning check-in: a few sliders, a few seconds.',
              },
              {
                img: '/screenshots/portal-fitness.png',
                kind: 'mobile',
                alt: 'The player fitness screen on mobile: recent load and the readiness trend.',
                caption: 'Players follow their readiness and load — the same numbers you see.',
              },
            ],
          },
        ],
        how: {
          title: 'How it works',
          steps: [
            {
              title: 'Invite the player',
              text: 'From your squad list, each player gets their invitation and installs the app in two minutes, from the App Store or Google Play.',
            },
            {
              title: 'They answer and fill in, in the app',
              text: 'Call-ups, check-ins, program: players do their part from their phone, whenever it suits them.',
            },
            {
              title: 'You watch it all arrive',
              text: 'Attendance up to date, squad readiness, programs followed: on the staff side, everything fills in live — no chasing.',
            },
          ],
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'Is the app available on iOS and Android?',
              answer:
                'Yes. STRIVN Player is a native app, available on the App Store (iOS) and on Google Play (Android). Players install it in two minutes from their invitation.',
            },
            {
              question: 'Do players have to pay anything?',
              answer:
                'No. The app is free for your players: they download it and use it without paying anything. You run the team — they just answer.',
            },
            {
              question: 'What about WHOOP?',
              answer:
                'Players can connect their WHOOP to pre-fill their check-ins with sleep and recovery, depending on your club’s plan. Without a wearable, the manual check-in takes seconds.',
            },
            {
              question: 'And for youth players?',
              answer:
                'Youth mode adapts the app: the AI coach and fines are hidden, and parents keep their place in the loop. Our youth teams page covers how it works.',
            },
          ],
        },
        finalCta: {
          title: 'Your players do their part. You watch it arrive.',
          body: 'Create your team for free and invite your players — the STRIVN Player app is waiting for them on the App Store and Google Play.',
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
        lede: 'Van de oproeping tot het maandrapport: STRIVN bundelt de taken die de week van een coach opslokken — en alles wat ze met elkaar verbindt. Elke module is gratis en gedeeld met je staf.',
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
        {
          slug: 'live',
          title: 'Live training & wedstrijd',
          text: 'Leid de training op het veld, scoor de wedstrijd met één tik — en wie er niet is, volgt via een simpele link, zonder account.',
          points: ['Training in realtime', 'Score & opstellingen', 'Publieke link zonder account'],
        },
        {
          slug: 'scouting',
          title: 'Scouting van de tegenstander',
          text: 'Bereid de volgende tegenstander samen voor: rapport, kern, getagde clips — en deel het met de groep via één link.',
          points: ['Tegenstanderrapporten', 'Getagde videoclips', 'Delen via link'],
        },
        {
          slug: 'reports',
          title: 'Teamrapporten',
          text: 'Het rapport waar je nooit tijd voor hebt: opgebouwd uit je gegevens — aanwezigheid, belasting, medisch — geschreven door de AI en gedeeld als PDF.',
          points: ['Blokken aanwezigheid, belasting, medisch', 'Eerste versie door de AI', 'PDF-export'],
        },
        {
          slug: 'player-app',
          title: 'De app van je spelers',
          text: 'Je spelers krijgen een iOS- en Android-app: oproepingen, welzijnscheck-ins, een persoonlijk programma en statistieken — de lus die jij start, sluit zichzelf.',
          points: ['Welzijnscheck-ins', 'Persoonlijk programma & stats', 'AI-coach als compagnon'],
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

      live: {
        meta: {
          title: 'Live training & live wedstrijdscore | STRIVN',
          description:
            'Leid je training vanaf de zijlijn, scoor de wedstrijd live en deel een publieke link: ouders en afwezigen volgen de score zonder account. Gratis voor coaches.',
        },
        eyebrow: 'Live training & wedstrijd',
        hero: {
          title: 'Leid de training, scoor de wedstrijd. Iedereen volgt.',
          lede: 'Je training loopt blok per blok op je telefoon, je wedstrijd scoor je met één tik. En dankzij de publieke link volgt wie ver van het veld zit toch mee — live, zonder account, zonder installatie.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Jij leidt het veld. STRIVN verzorgt de live.',
          items: [
            {
              title: 'De training live, blok per blok',
              text: 'De training die je in STRIVN voorbereidde, loopt af op de chrono: instructies, schema’s, overgangen — telefoon op zak of tablet langs de zijlijn, en de staf ziet waar je zit.',
            },
            {
              title: 'De wedstrijd gescoord met één tik',
              text: 'Opstelling klaar voor de aftrap, doelpunten geteld met één vinger tijdens het spel. De score en het wedstrijdverloop schrijven zichzelf live — geen los blaadje meer.',
            },
            {
              title: 'Eén publieke link, geen accounts',
              text: 'Deel de wedstrijdlink: ouders, geblesseerden en afwezigen volgen de live score vanaf om het even welke telefoon — niets te installeren, niets aan te maken.',
            },
            {
              title: 'Het papieren wedstrijdblad, geïmporteerd',
              text: 'De opstelling van het papieren blad komt in STRIVN terecht zonder lijn per lijn over te typen — de wedstrijdhistoriek centraliseert zichzelf.',
            },
          ],
        },
        showcase: [
          {
            title: 'De live, van twee kanten',
            blurb: 'Op het veld loopt de training en wordt de wedstrijd gescoord. In de tribune — of thuis in de zetel — volstaat een simpele link om live te volgen.',
            slides: [
              {
                img: '/screenshots/live-viewer-phone.png',
                kind: 'mobile',
                alt: 'De publieke wedstrijdweergave op een telefoon: score en verloop, zonder account.',
                caption: 'De publieke link: ouders en afwezigen volgen de live score — zonder account of installatie.',
              },
              {
                img: '/screenshots/live-runner-tablet-board.png',
                kind: 'desktop',
                alt: 'De live training op een tablet: het actieve blok met schema en instructies.',
                caption: 'Op de tablet langs de zijlijn: het actieve blok, zijn schema, zijn instructies.',
              },
              {
                img: '/screenshots/live-session.png',
                kind: 'desktop',
                alt: 'De live training aan stafzijde: blokverloop en lopende chrono.',
                caption: 'De staf volgt de training in realtime: actief blok, chrono, verloop.',
              },
              {
                img: '/screenshots/live-session-presession.png',
                kind: 'desktop',
                alt: 'Het scherm voor de training: het verloop staat klaar, één tik om te starten.',
                caption: 'Voor de start: de voorbereide training staat klaar om live te gaan.',
              },
            ],
          },
        ],
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Bereid voor zoals altijd',
              text: 'De training staat in STRIVN, de opstelling klaar voor de wedstrijd. Live gaan vraagt niets extra.',
            },
            {
              title: 'Start de live',
              text: 'Op het veld loopt de training blok per blok op de chrono; op wedstrijddag tel je de doelpunten met één tik.',
            },
            {
              title: 'Iedereen volgt',
              text: 'De staf volgt in de app, en de publieke link toont de live score aan wie niet langs het veld staat — zonder account.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Heb je een account nodig om een wedstrijd live te volgen?',
              answer:
                'Nee. De publieke link opent in elke browser, op elke telefoon. Een ouder, een geblesseerde speler of een supporter volgt de live score zonder iets te installeren.',
            },
            {
              question: 'Wat toont de publieke link precies?',
              answer:
                'De score, het wedstrijdverloop en de opstelling. Al de rest — aanwezigheid, dossiers, notities van de staf — blijft in STRIVN, aan teamzijde.',
            },
            {
              question: 'En als er geen bereik is aan het veld?',
              answer:
                'De live training blijft je blokken afspelen, ook zonder verbinding — geluidssignalen inbegrepen. Zodra het netwerk terug is, synchroniseert alles voor wie op afstand volgt.',
            },
            {
              question: 'Is de publieke link gratis?',
              answer:
                'Ja — zoals de rest: de live training, de live wedstrijd en de publieke link horen bij het gratis plan, voor één team.',
            },
          ],
        },
        finalCta: {
          title: 'Volgende wedstrijd staat iedereen aan de zijlijn.',
          body: 'Maak je team gratis aan — de live modus en de publieke link horen bij het gratis plan.',
          cta: 'Gratis starten',
        },
      },

      scouting: {
        meta: {
          title: 'Scouting van de tegenstander & gedeelde rapporten | STRIVN',
          description:
            'Bereid de volgende tegenstander samen voor: gestructureerde scoutingrapporten, kernen van tegenstanders doorheen de tijd, getagde videoclips — en een rapport dat je via een link met de groep deelt. Gratis voor coaches.',
        },
        eyebrow: 'Scouting',
        hero: {
          title: 'De volgende tegenstander, samen voorbereid.',
          lede: 'De analist observeert, de coach beslist: het scoutingrapport bouw je samen in STRIVN — kern van de tegenstander, observaties, getagde clips. En als het klaar is, deelt één link het met de groep.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Jij kijkt naar het spel. STRIVN structureert het rapport.',
          items: [
            {
              title: 'Gestructureerde tegenstanderrapporten',
              text: 'Geen document meer dat rondzwerft in een chat: elke tegenstander heeft zijn rapport in STRIVN, en coach en analist schrijven in hetzelfde — observaties, sterktes, zwaktes, op één plek.',
            },
            {
              title: 'De kern van de tegenstander, doorheen de tijd',
              text: 'Elke tegenstander houdt zijn fiche bij: spelers, kenmerken, jouw notities. Wedstrijd na wedstrijd, seizoen na seizoen groeit het dossier — je begint nooit van nul.',
            },
            {
              title: 'Getagde videoclips met notities',
              text: 'Een clip, een tag, een notitie: de sleutelmomenten van de tegenstander vind je meteen terug, als bewijs bij het rapport — iedereen ziet precies wat je bedoelt.',
            },
            {
              title: 'Het rapport gedeeld met de kleedkamer',
              text: 'Is het rapport klaar, dan volstaat een publieke link: de groep opent het op om het even welke telefoon, zonder account — en weet wat er komt.',
            },
          ],
        },
        showcase: [
          {
            title: 'Van observatie tot kleedkamer',
            blurb: 'De tegenstander bestudeer je in de scoutingmodule, het rapport bouw je samen — en de groep krijgt het via een simpele link.',
            slides: [
              {
                img: '/screenshots/scouting-module.png',
                kind: 'desktop',
                alt: 'De scoutingmodule: gevolgde tegenstanders met hun kernen en rapporten.',
                caption: 'De scoutingmodule: elke tegenstander heeft zijn fiche — kern, observaties, rapporten.',
              },
              {
                img: '/screenshots/scouting-report.png',
                kind: 'desktop',
                alt: 'Een scoutingrapport: gestructureerde observaties en getagde clips over de volgende tegenstander.',
                caption: 'Het rapport bouw je samen: coach en analist werken in hetzelfde document.',
              },
              {
                img: '/screenshots/scouting-report-phone.png',
                kind: 'mobile',
                alt: 'Het scoutingrapport geopend op een telefoon via de deellink.',
                caption: 'Gedeeld via link opent het rapport op om het even welke telefoon.',
              },
            ],
          },
        ],
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Observeer de tegenstander',
              text: 'Langs het veld of voor de video: notities, tags en clips verzamelen zich in de fiche van de tegenstander terwijl je kijkt.',
            },
            {
              title: 'Bouw het rapport',
              text: 'Coach en analist stellen het rapport samen op: gestructureerde observaties, de kern van de tegenstander, clips als bewijs.',
            },
            {
              title: 'Deel het met de groep',
              text: 'Eén link en het rapport ligt in de kleedkamer: iedereen opent het op zijn telefoon en staat voorbereid aan de aftrap.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Wie kan een scoutingrapport zien?',
              answer:
                'De staf, in STRIVN. En zodra je beslist om te delen, opent de publieke link het voor wie hem krijgt — spelers inbegrepen — zonder account. Zolang je niet deelt, blijft het rapport aan stafzijde.',
            },
            {
              question: 'Heb ik een videoabonnement nodig voor de clips?',
              answer:
                'Nee. Scouting werkt zonder aparte videodienst: je voegt je clips toe, tagt ze en annoteert ze rechtstreeks in STRIVN.',
            },
            {
              question: 'Zien de spelers de scouting?',
              answer:
                'Alleen wat jij deelt. Werknotities blijven aan stafzijde; het afgewerkte rapport deel je via de link met de groep, wanneer jij dat beslist.',
            },
            {
              question: 'Is scouting gratis?',
              answer:
                'Ja — zoals de rest: rapporten, kernen van tegenstanders en delen via link horen bij het gratis plan, voor één team.',
            },
          ],
        },
        finalCta: {
          title: 'Bij de aftrap weet de groep wat er komt.',
          body: 'Maak je team gratis aan — rapporten, tegenstanderkernen en delen via link inbegrepen.',
          cta: 'Gratis starten',
        },
      },

      reports: {
        meta: {
          title: 'Teamrapporten & PDF-export | STRIVN',
          description:
            'Het rapport waar de staf nooit tijd voor heeft: aanwezigheid, belasting, medische opvolging, wedstrijden en trainingen — de AI schrijft een eerste versie op basis van de gegevens die al in STRIVN staan. Jij leest na en deelt als PDF. Gratis voor coaches.',
        },
        eyebrow: 'Teamrapporten',
        hero: {
          title: 'Het rapport waar je nooit tijd voor hebt.',
          lede: 'Aanwezigheid, belasting, medische opvolging, wedstrijden en trainingen: alles staat al in STRIVN. Kies de blokken, de AI schrijft een eerste versie — en het bestuur, de ouders of de sportieve cel krijgen een verzorgde PDF die het werk van de staf toont.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Jij doet het werk. STRIVN maakt het zichtbaar.',
          items: [
            {
              title: 'Opgebouwd uit je bestaande gegevens',
              text: 'Geen verzamelwerk, geen kopieerwerk: het rapport put uit wat STRIVN het hele seizoen al registreert — aanwezigheid, trainingsbelasting, medische opvolging, wedstrijden en trainingen.',
            },
            {
              title: 'Jij kiest de blokken',
              text: 'Aanwezigheid van de maand, evolutie van de belasting, lopende blessures, resultaten: elk rapport stel je blok per blok samen, volgens de bestemmeling — bestuur, ouders of sportieve cel.',
            },
            {
              title: 'Een verzorgde PDF, klaar om te versturen',
              text: 'Het rapport exporteert als opgemaakte PDF, klaar om te mailen of op tafel te leggen op de vergadering. Geen spreadsheet meer om de avond ervoor te herwerken.',
            },
            {
              title: 'De AI schrijft, jij beslist',
              text: 'De AI stelt een eerste versie voor op basis van jouw cijfers. Jij leest na, corrigeert, herschrijft — niets vertrekt zonder jouw akkoord.',
            },
          ],
        },
        showcase: [
          {
            title: 'Van je gegevens naar een PDF',
            blurb: 'Kies de blokken, laat de AI de eerste versie schrijven — en lees na voor je deelt.',
            slides: [
              {
                img: '/screenshots/reports-hub.png',
                kind: 'desktop',
                alt: 'De rapportenmodule: de bestaande teamrapporten en de knop om een nieuw rapport te maken.',
                caption: 'De rapportenmodule: elk rapport houdt zijn plaats, klaar om te hernemen of te delen.',
              },
              {
                img: '/screenshots/reports-selection.png',
                kind: 'desktop',
                alt: 'Een rapport samenstellen: de blokken aanwezigheid, belasting en medisch geselecteerd vóór de generatie.',
                caption: 'Jij kiest de blokken — aanwezigheid, belasting, medisch — en de AI schrijft de eerste versie.',
              },
            ],
          },
        ],
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Kies de blokken',
              text: 'Aanwezigheid, belasting, medische opvolging, wedstrijden, trainingen: vink aan wat het rapport moet dekken, voor de periode die je nodig hebt.',
            },
            {
              title: 'De AI stelt samen',
              text: 'Een geschreven eerste versie staat er in enkele ogenblikken, uitsluitend gebouwd op de gegevens van jouw team in STRIVN.',
            },
            {
              title: 'Lees na en deel',
              text: 'Pas de tekst aan, laat een blok weg en exporteer als PDF — voor het bestuur, de ouders of de sportieve cel.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Op welke gegevens bouwt het rapport?',
              answer:
                'Op wat je team al in STRIVN registreert: aanwezigheid en antwoorden op oproepingen, trainingsbelasting, medische opvolging, wedstrijden en trainingen. Niets opnieuw in te voeren.',
            },
            {
              question: 'Heeft het bestuur of een ouder een account nodig?',
              answer:
                'Nee. Het rapport exporteert als PDF: je mailt het door of drukt het af voor de vergadering — de ontvanger hoeft niets te installeren.',
            },
            {
              question: 'Kan ik aanpassen wat de AI schrijft?',
              answer:
                'Ja, alles. De AI stelt een eerste versie voor, maar de tekst blijft van jou: je leest na, corrigeert of herschrijft elk blok voor je deelt.',
            },
            {
              question: 'Zijn rapporten gratis?',
              answer:
                'Ja — zoals de rest: rapporten en de AI-assistent zitten in het gratis plan, voor één team.',
            },
          ],
        },
        finalCta: {
          title: 'Op de volgende vergadering ligt het werk van de staf op tafel.',
          body: 'Maak je team gratis aan — rapporten, PDF-export en AI-assistent inbegrepen.',
          cta: 'Gratis starten',
        },
      },

      'player-app': {
        storeLinks: {
          appStore: 'https://apps.apple.com/be/app/strivn-player/id6779121691',
          playStore: 'https://play.google.com/store/apps/details?id=net.strivn.player',
        },
        meta: {
          title: 'De spelersapp voor iOS & Android | STRIVN',
          description:
            'Je spelers krijgen een native iOS- en Android-app: oproepingen, welzijnscheck-ins, een persoonlijk programma, statistieken en een AI-coach als compagnon. In de App Store en op Google Play — gratis voor je spelers.',
        },
        eyebrow: 'De app van je spelers',
        hero: {
          title: 'Wat je spelers krijgen.',
          lede: 'Een native iOS- en Android-app, gratis voor hen: ze antwoorden op oproepingen, vullen hun welzijnscheck-in in, volgen hun programma en hun statistieken. De lus die jij aan stafzijde start, sluit zich in hun broekzak — zonder herinneringen.',
          primaryCta: 'Gratis starten',
          reassurance: 'Gratis voor één team · geen goedkeuring van de club nodig · klaar in enkele minuten',
        },
        benefits: {
          title: 'Jij start de lus. De app sluit ze.',
          items: [
            {
              title: 'De iOS- en Android-app van je spelers',
              text: 'Een native app, beschikbaar in de App Store en op Google Play, gratis voor je spelers. Oproepingen, agenda, berichten: wat jij verstuurt, komt aan waar ze al kijken — op hun telefoon.',
            },
            {
              title: 'Check-ins en vorm, zonder herinneringen',
              text: 'Slaap, vermoeidheid, humeur, spierpijn: de speler vult zijn check-in ’s ochtends in enkele seconden in. Jij ziet de vorm van de groep vóór de training — zonder één bericht te sturen.',
            },
            {
              title: 'Persoonlijk programma en stats op zak',
              text: 'Elke speler vindt zijn individueel programma terug, vinkt af wat hij deed en volgt zijn eigen cijfers: aanwezigheid, belasting, progressie. Wat jij plant, volgt zichzelf op.',
            },
            {
              title: 'Een AI-coach als compagnon, binnen jouw kader',
              text: 'Tussen twee trainingen kan de speler zijn vragen stellen aan een AI-coach die antwoordt binnen het kader dat jij bepaalt — jouw richtlijnen, zijn programma, zijn belasting. Nooit in jouw plaats.',
            },
          ],
        },
        showcase: [
          {
            title: 'In de broekzak van je spelers',
            blurb: 'De agenda, de ochtendcheck-in en de vorm: wat de speler ziet, zoals hij het ziet.',
            slides: [
              {
                img: '/screenshots/portal-agenda.png',
                kind: 'mobile',
                alt: 'De agenda van de speler op mobiel: de komende evenementen met antwoordknoppen voor de oproeping.',
                caption: 'De oproeping komt aan in de app — de speler antwoordt met één tik.',
              },
              {
                img: '/screenshots/portal-checkin.png',
                kind: 'mobile',
                alt: 'De welzijnscheck-in van de speler op mobiel: slaap, vermoeidheid, humeur en spierpijn.',
                caption: 'De ochtendcheck-in: enkele schuivers, enkele seconden.',
              },
              {
                img: '/screenshots/portal-fitness.png',
                kind: 'mobile',
                alt: 'Het vormscherm van de speler op mobiel: recente belasting en de evolutie van zijn vorm.',
                caption: 'De speler volgt zijn vorm en zijn belasting — dezelfde cijfers als jij.',
              },
            ],
          },
        ],
        how: {
          title: 'Hoe het werkt',
          steps: [
            {
              title: 'Nodig de speler uit',
              text: 'Vanuit je kern krijgt elke speler zijn uitnodiging en installeert hij de app in twee minuten, via de App Store of Google Play.',
            },
            {
              title: 'Hij antwoordt en vult in, in de app',
              text: 'Oproepingen, check-ins, programma: de speler doet zijn deel vanaf zijn telefoon, wanneer het hem past.',
            },
            {
              title: 'Jij ziet alles binnenkomen',
              text: 'Aanwezigheid up-to-date, vorm van de groep, opgevolgde programma’s: aan stafzijde vult alles zich in realtime — zonder herinneringen.',
            },
          ],
        },
        faq: {
          title: 'Veelgestelde vragen',
          items: [
            {
              question: 'Is de app beschikbaar op iOS en Android?',
              answer:
                'Ja. STRIVN Player is een native app, beschikbaar in de App Store (iOS) en op Google Play (Android). De speler installeert ze in twee minuten via zijn uitnodiging.',
            },
            {
              question: 'Moet de speler iets betalen?',
              answer:
                'Nee. De app is gratis voor je spelers: ze downloaden en gebruiken ze zonder iets te betalen. Jij beheert het team — zij hoeven alleen te antwoorden.',
            },
            {
              question: 'En de WHOOP?',
              answer:
                'De speler kan zijn WHOOP koppelen om zijn check-ins vooraf in te vullen met slaap en herstel, afhankelijk van de formule van je club. Zonder wearable duurt de manuele check-in enkele seconden.',
            },
            {
              question: 'En voor jeugdspelers?',
              answer:
                'De jeugdmodus past de app aan: de AI-coach en de boetes worden verborgen, en de ouders behouden hun plaats in de lus. Onze pagina over jeugdteams legt uit hoe dat werkt.',
            },
          ],
        },
        finalCta: {
          title: 'Je spelers doen hun deel. Jij ziet het binnenkomen.',
          body: 'Maak je team gratis aan en nodig je spelers uit — de STRIVN Player-app wacht op hen in de App Store en op Google Play.',
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
        lede: 'Von der Aufstellung bis zum Monatsbericht: STRIVN vereint die Aufgaben, die die Woche eines Coaches auffressen — und alles, was sie verbindet. Jedes Modul ist kostenlos und mit Ihrem Staff geteilt.',
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
        {
          slug: 'live',
          title: 'Training & Spiel live',
          text: 'Leiten Sie das Training auf dem Platz, erfassen Sie den Spielstand mit einem Tipp — und wer nicht da ist, folgt über einen einfachen Link, ohne Konto.',
          points: ['Training in Echtzeit', 'Spielstand & Startelf', 'Öffentlicher Link ohne Konto'],
        },
        {
          slug: 'scouting',
          title: 'Gegner-Scouting',
          text: 'Bereiten Sie den nächsten Gegner gemeinsam vor: strukturierter Bericht, gegnerischer Kader, getaggte Clips — geteilt mit der Gruppe über einen einfachen Link.',
          points: ['Gegner-Berichte', 'Getaggte Videoclips', 'Teilen per Link'],
        },
        {
          slug: 'reports',
          title: 'Team-Berichte',
          text: 'Der Bericht, für den nie Zeit ist: zusammengestellt aus Ihren Daten — Anwesenheit, Belastung, Medizinisches — von der KI vorformuliert und als PDF geteilt.',
          points: ['Blöcke Anwesenheit, Belastung, Medizinisches', 'Erster Entwurf von der KI', 'PDF-Export'],
        },
        {
          slug: 'player-app',
          title: 'Die App Ihrer Spieler',
          text: 'Ihre Spieler bekommen eine iOS- und Android-App: Aufstellungen, Wohlbefindens-Check-ins, ein persönliches Programm und Statistiken — die Schleife, die Sie starten, schließt sich von selbst.',
          points: ['Wohlbefindens-Check-ins', 'Persönliches Programm & Statistiken', 'KI-Coach als Begleiter'],
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

      live: {
        meta: {
          title: 'Training in Echtzeit & Live-Spielstand | STRIVN',
          description:
            'Leiten Sie Ihr Training von der Seitenlinie, erfassen Sie den Spielstand live und teilen Sie einen öffentlichen Link: Eltern und Abwesende folgen ohne Konto. Kostenlos für Coaches.',
        },
        eyebrow: 'Training & Spiel live',
        hero: {
          title: 'Leiten Sie das Training, erfassen Sie den Spielstand. Alle folgen.',
          lede: 'Ihr Training läuft Block für Block auf dem Telefon, Ihr Spiel wird mit einem Tipp erfasst. Und dank des öffentlichen Links folgen auch die, die weit vom Platz sind — live, ohne Konto, ohne Installation.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Sie führen den Platz. STRIVN führt das Live.',
          items: [
            {
              title: 'Das Training live, Block für Block',
              text: 'Das in STRIVN vorbereitete Training läuft auf der Uhr ab: Anweisungen, Skizzen, Abläufe — Telefon in der Tasche oder Tablet an der Seitenlinie, und der Staff sieht, wo Sie stehen.',
            },
            {
              title: 'Der Spielstand mit einem Tipp',
              text: 'Startelf vor dem Anpfiff gesetzt, Tore während des Spiels mit einem Finger gezählt. Spielstand und Spielverlauf schreiben sich live — ohne fliegenden Zettel.',
            },
            {
              title: 'Ein öffentlicher Link, null Konten',
              text: 'Teilen Sie den Spiel-Link: Eltern, Verletzte und Abwesende verfolgen den Spielstand live von jedem Telefon aus — nichts zu installieren, nichts anzulegen.',
            },
            {
              title: 'Der Papier-Spielbericht, importiert',
              text: 'Die Aufstellung vom Papierbogen landet in STRIVN, ohne sie Zeile für Zeile abzutippen — die Spielhistorie zentralisiert sich von selbst.',
            },
          ],
        },
        showcase: [
          {
            title: 'Das Live, von beiden Seiten',
            blurb: 'Auf dem Platz läuft das Training und wird das Spiel erfasst. Auf der Tribüne — oder zu Hause — genügt ein einfacher Link, um live zu folgen.',
            slides: [
              {
                img: '/screenshots/live-viewer-phone.png',
                kind: 'mobile',
                alt: 'Die öffentliche Spielansicht auf einem Telefon: Spielstand und Verlauf, ohne Konto.',
                caption: 'Der öffentliche Link: Eltern und Abwesende folgen dem Spielstand live — ohne Konto, ohne Installation.',
              },
              {
                img: '/screenshots/live-runner-tablet-board.png',
                kind: 'desktop',
                alt: 'Das Live-Training auf einem Tablet: der aktive Block mit Skizze und Anweisungen.',
                caption: 'Auf dem Tablet an der Seitenlinie: der aktive Block, seine Skizze, seine Anweisungen.',
              },
              {
                img: '/screenshots/live-session.png',
                kind: 'desktop',
                alt: 'Das Live-Training auf Staff-Seite: Blockverlauf und laufende Uhr.',
                caption: 'Der Staff folgt dem Training in Echtzeit: aktiver Block, Uhr, Verlauf.',
              },
              {
                img: '/screenshots/live-session-presession.png',
                kind: 'desktop',
                alt: 'Der Bildschirm vor dem Training: der Ablauf steht bereit, ein Tipp zum Start.',
                caption: 'Vor dem Start: das vorbereitete Training ist bereit, live zu gehen.',
              },
            ],
          },
        ],
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Bereiten Sie vor wie immer',
              text: 'Das Training steht in STRIVN, die Startelf vor dem Spiel. Live zu gehen kostet nichts extra.',
            },
            {
              title: 'Starten Sie das Live',
              text: 'Auf dem Platz läuft das Training Block für Block auf der Uhr; am Spieltag zählen Sie die Tore mit einem Tipp.',
            },
            {
              title: 'Alle folgen',
              text: 'Der Staff folgt in der App, und der öffentliche Link zeigt den Spielstand live allen, die nicht am Platz stehen — ohne Konto.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Braucht man ein Konto, um ein Spiel live zu verfolgen?',
              answer:
                'Nein. Der öffentliche Link öffnet sich in jedem Browser, auf jedem Telefon. Ein Elternteil, ein verletzter Spieler oder ein Fan verfolgt den Spielstand live, ohne etwas zu installieren.',
            },
            {
              question: 'Was zeigt der öffentliche Link genau?',
              answer:
                'Den Spielstand, den Spielverlauf und die Aufstellung. Alles andere — Anwesenheit, Dossiers, Notizen des Staffs — bleibt in STRIVN, auf Teamseite.',
            },
            {
              question: 'Und wenn es am Platz kein Netz gibt?',
              answer:
                'Das Live-Training spielt Ihre Blöcke auch ohne Verbindung weiter ab, Tonsignale inklusive. Sobald das Netz zurück ist, synchronisiert sich alles für die, die aus der Ferne folgen.',
            },
            {
              question: 'Ist der öffentliche Link kostenlos?',
              answer:
                'Ja — wie der Rest: das Live-Training, das Live-Spiel und der öffentliche Link gehören zum kostenlosen Plan, für ein Team.',
            },
          ],
        },
        finalCta: {
          title: 'Beim nächsten Spiel stehen alle an der Seitenlinie.',
          body: 'Erstellen Sie Ihr Team kostenlos — der Live-Modus und der öffentliche Link gehören zum kostenlosen Plan.',
          cta: 'Kostenlos starten',
        },
      },

      scouting: {
        meta: {
          title: 'Gegner-Scouting & geteilte Berichte | STRIVN',
          description:
            'Bereiten Sie den nächsten Gegner gemeinsam vor: strukturierte Scouting-Berichte, gegnerische Kader im Zeitverlauf, getaggte Videoclips — und ein Bericht, den ein einfacher Link mit der Gruppe teilt. Kostenlos für Coaches.',
        },
        eyebrow: 'Gegner-Scouting',
        hero: {
          title: 'Der nächste Gegner, gemeinsam vorbereitet.',
          lede: 'Der Analyst beobachtet, der Coach entscheidet: Der Scouting-Bericht entsteht gemeinsam in STRIVN — gegnerischer Kader, Beobachtungen, getaggte Clips. Und wenn er fertig ist, teilt ihn ein einfacher Link mit der Gruppe.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Sie beobachten das Spiel. STRIVN strukturiert den Bericht.',
          items: [
            {
              title: 'Strukturierte Gegner-Berichte',
              text: 'Kein Dokument mehr, das im Chat verloren geht: Jeder Gegner hat seinen Bericht in STRIVN, und Coach und Analyst schreiben im selben — Beobachtungen, Stärken, Schwächen, an einem Ort.',
            },
            {
              title: 'Der gegnerische Kader, im Zeitverlauf',
              text: 'Jeder Gegner behält seine Akte: seine Spieler, ihre Merkmale, Ihre Notizen. Spiel für Spiel, Saison für Saison wächst das Dossier — Sie fangen nie bei null an.',
            },
            {
              title: 'Getaggte Videoclips mit Notizen',
              text: 'Ein Clip, ein Tag, eine Notiz: Die Schlüsselmomente des Gegners sind sofort wiedergefunden und stützen den Bericht — alle sehen genau, was gemeint ist.',
            },
            {
              title: 'Der Bericht, geteilt mit der Kabine',
              text: 'Ist der Bericht fertig, genügt ein öffentlicher Link: Die Gruppe öffnet ihn auf jedem Telefon, ohne Konto — und weiß, was sie erwartet.',
            },
          ],
        },
        showcase: [
          {
            title: 'Von der Beobachtung in die Kabine',
            blurb: 'Der Gegner wird im Scouting-Modul studiert, der Bericht entsteht gemeinsam — und die Gruppe bekommt ihn über einen einfachen Link.',
            slides: [
              {
                img: '/screenshots/scouting-module.png',
                kind: 'desktop',
                alt: 'Das Scouting-Modul: verfolgte Gegner mit ihren Kadern und Berichten.',
                caption: 'Das Scouting-Modul: Jeder Gegner hat seine Akte — Kader, Beobachtungen, Berichte.',
              },
              {
                img: '/screenshots/scouting-report.png',
                kind: 'desktop',
                alt: 'Ein Scouting-Bericht: strukturierte Beobachtungen und getaggte Clips zum nächsten Gegner.',
                caption: 'Der Bericht entsteht gemeinsam: Coach und Analyst arbeiten am selben Dokument.',
              },
              {
                img: '/screenshots/scouting-report-phone.png',
                kind: 'mobile',
                alt: 'Der Scouting-Bericht, geöffnet auf einem Telefon über den geteilten Link.',
                caption: 'Per Link geteilt, öffnet sich der Bericht auf jedem Telefon.',
              },
            ],
          },
        ],
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Beobachten Sie den Gegner',
              text: 'An der Seitenlinie oder vor dem Video: Notizen, Tags und Clips sammeln sich in der Akte des Gegners, während Sie beobachten.',
            },
            {
              title: 'Bauen Sie den Bericht',
              text: 'Coach und Analyst stellen den Bericht gemeinsam zusammen: strukturierte Beobachtungen, der gegnerische Kader, Clips als Beleg.',
            },
            {
              title: 'Teilen Sie ihn mit der Gruppe',
              text: 'Ein Link, und der Bericht erreicht die Kabine: Alle öffnen ihn auf dem Telefon und kommen vorbereitet zum Spiel.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Wer kann einen Scouting-Bericht sehen?',
              answer:
                'Der Staff, in STRIVN. Und sobald Sie ihn teilen, öffnet der öffentliche Link ihn für alle, die ihn bekommen — Spieler inbegriffen — ohne Konto. Solange Sie nicht teilen, bleibt der Bericht auf Staff-Seite.',
            },
            {
              question: 'Brauche ich ein Video-Abo für die Clips?',
              answer:
                'Nein. Das Scouting funktioniert ohne eigene Videoplattform: Sie fügen Ihre Clips hinzu, taggen und annotieren sie direkt in STRIVN.',
            },
            {
              question: 'Sehen die Spieler das Scouting?',
              answer:
                'Nur, was Sie teilen. Arbeitsnotizen bleiben auf Staff-Seite; den fertigen Bericht teilen Sie über den Link mit der Gruppe — wann Sie es entscheiden.',
            },
            {
              question: 'Ist das Scouting kostenlos?',
              answer:
                'Ja — wie der Rest: Berichte, gegnerische Kader und das Teilen per Link gehören zum kostenlosen Plan, für ein Team.',
            },
          ],
        },
        finalCta: {
          title: 'Zum Anpfiff weiß die Gruppe, was kommt.',
          body: 'Erstellen Sie Ihr Team kostenlos — Berichte, gegnerische Kader und Teilen per Link inbegriffen.',
          cta: 'Kostenlos starten',
        },
      },

      reports: {
        meta: {
          title: 'Team-Berichte & PDF-Export | STRIVN',
          description:
            'Der Bericht, für den der Staff nie Zeit hat: Anwesenheit, Belastung, medizinische Betreuung, Spiele und Trainings — die KI entwirft eine erste Version aus den Daten, die bereits in STRIVN liegen. Sie lesen gegen und teilen als PDF. Kostenlos für Coaches.',
        },
        eyebrow: 'Team-Berichte',
        hero: {
          title: 'Der Bericht, für den Sie nie Zeit haben.',
          lede: 'Anwesenheit, Belastung, medizinische Betreuung, Spiele und Trainings: alles liegt bereits in STRIVN. Wählen Sie die Blöcke, die KI entwirft eine erste Version — und Vorstand, Eltern oder sportliche Leitung erhalten ein sauberes PDF, das die Arbeit des Staffs sichtbar macht.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Sie machen die Arbeit. STRIVN macht sie sichtbar.',
          items: [
            {
              title: 'Aufgebaut aus Ihren vorhandenen Daten',
              text: 'Kein Sammeln, kein Kopieren: der Bericht schöpft aus dem, was STRIVN über die Saison ohnehin festhält — Anwesenheit, Trainingsbelastung, medizinische Betreuung, Spiele und Trainings.',
            },
            {
              title: 'Sie wählen die Blöcke',
              text: 'Anwesenheit des Monats, Verlauf der Belastung, laufende Verletzungen, Ergebnisse: jeder Bericht entsteht Block für Block — je nachdem, an wen er geht: Vorstand, Eltern oder sportliche Leitung.',
            },
            {
              title: 'Ein sauberes PDF, bereit zum Versenden',
              text: 'Der Bericht exportiert als gestaltetes PDF — bereit für den E-Mail-Anhang oder den Tisch der nächsten Sitzung. Keine Tabelle, die am Vorabend noch in Form gebracht werden muss.',
            },
            {
              title: 'Die KI entwirft, Sie behalten die Hand',
              text: 'Die KI schlägt eine erste Version auf Basis Ihrer Zahlen vor. Sie lesen gegen, korrigieren, formulieren um — nichts geht ohne Ihre Freigabe hinaus.',
            },
          ],
        },
        showcase: [
          {
            title: 'Von Ihren Daten zum PDF',
            blurb: 'Wählen Sie die Blöcke, lassen Sie die KI die erste Version entwerfen — und lesen Sie gegen, bevor Sie teilen.',
            slides: [
              {
                img: '/screenshots/reports-hub.png',
                kind: 'desktop',
                alt: 'Das Berichte-Modul: die bestehenden Team-Berichte und der Button für einen neuen Bericht.',
                caption: 'Das Berichte-Modul: jeder Bericht behält seinen Platz — bereit zum Weiterarbeiten oder Teilen.',
              },
              {
                img: '/screenshots/reports-selection.png',
                kind: 'desktop',
                alt: 'Ein Bericht entsteht: die Blöcke Anwesenheit, Belastung und Medizinisches vor der Generierung ausgewählt.',
                caption: 'Sie wählen die Blöcke — Anwesenheit, Belastung, Medizinisches — und die KI entwirft die erste Version.',
              },
            ],
          },
        ],
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Blöcke wählen',
              text: 'Anwesenheit, Belastung, medizinische Betreuung, Spiele, Trainings: haken Sie an, was der Bericht abdecken soll — für den Zeitraum, den Sie brauchen.',
            },
            {
              title: 'Die KI stellt zusammen',
              text: 'Eine geschriebene erste Version steht in wenigen Augenblicken — aufgebaut allein auf den Daten Ihres Teams in STRIVN.',
            },
            {
              title: 'Gegenlesen und teilen',
              text: 'Passen Sie den Text an, nehmen Sie einen Block heraus, dann exportieren Sie als PDF — für Vorstand, Eltern oder sportliche Leitung.',
            },
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          items: [
            {
              question: 'Auf welchen Daten baut der Bericht auf?',
              answer:
                'Auf dem, was Ihr Team bereits in STRIVN festhält: Anwesenheit und Antworten auf Aufstellungen, Trainingsbelastung, medizinische Betreuung, Spiele und Trainings. Nichts muss neu erfasst werden.',
            },
            {
              question: 'Brauchen Vorstand oder Eltern ein Konto?',
              answer:
                'Nein. Der Bericht exportiert als PDF: Sie verschicken ihn per E-Mail oder drucken ihn für die Sitzung — der Empfänger muss nichts installieren.',
            },
            {
              question: 'Kann ich ändern, was die KI schreibt?',
              answer:
                'Ja, alles. Die KI schlägt eine erste Version vor, aber der Text bleibt Ihrer: Sie lesen gegen, korrigieren oder schreiben jeden Block um, bevor Sie teilen.',
            },
            {
              question: 'Sind die Berichte kostenlos?',
              answer:
                'Ja — wie der Rest: Berichte und der KI-Assistent gehören zum kostenlosen Plan, für ein Team.',
            },
          ],
        },
        finalCta: {
          title: 'Bei der nächsten Sitzung liegt die Arbeit des Staffs auf dem Tisch.',
          body: 'Erstellen Sie Ihr Team kostenlos — Berichte, PDF-Export und KI-Assistent inklusive.',
          cta: 'Kostenlos starten',
        },
      },

      'player-app': {
        storeLinks: {
          appStore: 'https://apps.apple.com/be/app/strivn-player/id6779121691',
          playStore: 'https://play.google.com/store/apps/details?id=net.strivn.player',
        },
        meta: {
          title: 'Die Spieler-App für iOS & Android | STRIVN',
          description:
            'Ihre Spieler bekommen eine native iOS- und Android-App: Aufstellungen, Wohlbefindens-Check-ins, ein persönliches Programm, Statistiken und einen KI-Coach als Begleiter. Im App Store und bei Google Play — kostenlos für Ihre Spieler.',
        },
        eyebrow: 'Die App Ihrer Spieler',
        hero: {
          title: 'Was Ihre Spieler bekommen.',
          lede: 'Eine native iOS- und Android-App, kostenlos für sie: Sie antworten auf Aufstellungen, füllen ihren Wohlbefindens-Check-in aus, folgen ihrem Programm und ihren Statistiken. Die Schleife, die Sie auf Staff-Seite starten, schließt sich in ihrer Hosentasche — ohne Nachfassen.',
          primaryCta: 'Kostenlos starten',
          reassurance: 'Kostenlos für ein Team · keine Freigabe des Vereins nötig · in Minuten bereit',
        },
        benefits: {
          title: 'Sie starten die Schleife. Die App schließt sie.',
          items: [
            {
              title: 'Die iOS- und Android-App Ihrer Spieler',
              text: 'Eine native App, verfügbar im App Store und bei Google Play, kostenlos für Ihre Spieler. Aufstellungen, Kalender, Nachrichten: Was Sie senden, kommt dort an, wo sie ohnehin hinschauen — auf ihrem Handy.',
            },
            {
              title: 'Check-ins und Form, ohne Nachfassen',
              text: 'Schlaf, Müdigkeit, Stimmung, Muskelkater: Der Spieler füllt seinen Check-in morgens in Sekunden aus. Sie sehen die Form der Gruppe vor dem Training — ohne eine einzige Nachricht zu schicken.',
            },
            {
              title: 'Persönliches Programm und Statistiken in der Tasche',
              text: 'Jeder Spieler findet sein individuelles Programm, hakt ab, was er gemacht hat, und verfolgt seine eigenen Zahlen: Anwesenheit, Belastung, Fortschritt. Was Sie planen, verfolgt sich von selbst.',
            },
            {
              title: 'Ein KI-Coach als Begleiter, in Ihrem Rahmen',
              text: 'Zwischen zwei Trainings kann der Spieler seine Fragen einem KI-Coach stellen, der im Rahmen antwortet, den Sie setzen — Ihre Vorgaben, sein Programm, seine Belastung. Nie an Ihrer Stelle.',
            },
          ],
        },
        showcase: [
          {
            title: 'In der Hosentasche Ihrer Spieler',
            blurb: 'Der Kalender, der Morgen-Check-in und die Form: was der Spieler sieht, so wie er es sieht.',
            slides: [
              {
                img: '/screenshots/portal-agenda.png',
                kind: 'mobile',
                alt: 'Der Kalender des Spielers auf dem Handy: die nächsten Termine mit Antwort-Buttons zur Aufstellung.',
                caption: 'Die Aufstellung kommt in der App an — der Spieler antwortet mit einem Tipp.',
              },
              {
                img: '/screenshots/portal-checkin.png',
                kind: 'mobile',
                alt: 'Der Wohlbefindens-Check-in des Spielers auf dem Handy: Schlaf, Müdigkeit, Stimmung und Muskelkater.',
                caption: 'Der Morgen-Check-in: ein paar Regler, ein paar Sekunden.',
              },
              {
                img: '/screenshots/portal-fitness.png',
                kind: 'mobile',
                alt: 'Der Form-Bildschirm des Spielers auf dem Handy: die jüngste Belastung und der Verlauf seiner Form.',
                caption: 'Der Spieler verfolgt seine Form und seine Belastung — dieselben Zahlen wie Sie.',
              },
            ],
          },
        ],
        how: {
          title: 'So funktioniert es',
          steps: [
            {
              title: 'Laden Sie den Spieler ein',
              text: 'Aus Ihrem Kader heraus bekommt jeder Spieler seine Einladung und installiert die App in zwei Minuten — über den App Store oder Google Play.',
            },
            {
              title: 'Er antwortet und füllt aus, in der App',
              text: 'Aufstellungen, Check-ins, Programm: Der Spieler erledigt seinen Teil vom Handy aus, wann es ihm passt.',
            },
            {
              title: 'Sie sehen alles ankommen',
              text: 'Anwesenheit aktuell, Form der Gruppe, verfolgte Programme: Auf Staff-Seite füllt sich alles in Echtzeit — ohne Nachfassen.',
            },
          ],
        },
        faq: {
          title: 'Häufige Fragen',
          items: [
            {
              question: 'Ist die App für iOS und Android verfügbar?',
              answer:
                'Ja. STRIVN Player ist eine native App, verfügbar im App Store (iOS) und bei Google Play (Android). Der Spieler installiert sie in zwei Minuten über seine Einladung.',
            },
            {
              question: 'Muss der Spieler etwas bezahlen?',
              answer:
                'Nein. Die App ist für Ihre Spieler kostenlos: Sie laden sie herunter und nutzen sie, ohne etwas zu bezahlen. Sie führen das Team — die Spieler müssen nur antworten.',
            },
            {
              question: 'Und die WHOOP?',
              answer:
                'Der Spieler kann seine WHOOP verbinden, um seine Check-ins mit Schlaf und Erholung vorzubefüllen — je nach Formel Ihres Vereins. Ohne Wearable dauert der manuelle Check-in ein paar Sekunden.',
            },
            {
              question: 'Und bei Jugendspielern?',
              answer:
                'Der Jugendmodus passt die App an: KI-Coach und Strafkasse werden ausgeblendet, und die Eltern behalten ihren Platz in der Schleife. Unsere Seite zu Jugendteams erklärt die Details.',
            },
          ],
        },
        finalCta: {
          title: 'Ihre Spieler machen ihren Teil. Sie sehen es ankommen.',
          body: 'Erstellen Sie Ihr Team kostenlos und laden Sie Ihre Spieler ein — die STRIVN-Player-App wartet im App Store und bei Google Play auf sie.',
          cta: 'Kostenlos starten',
        },
      },
    },
  },
};
