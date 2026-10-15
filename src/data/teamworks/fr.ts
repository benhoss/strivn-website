import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * French source text. The other locales translate this page, they do not
 * extend it. Voice: PRODUCT.md § Voice.
 *
 * The page argues STRIVN against Teamworks. What it says about Teamworks
 * comes from Teamworks' own pages (see alternativeTeamworks.ts). Everything
 * else is what STRIVN ships.
 */
export function frPage(b: LandingBits): SwitchPage {
  const migration = mail('Passer de Teamworks à STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN ou Teamworks',
    meta: {
      title: 'Alternative à Teamworks : STRIVN, pour le staff de votre club',
      description: `STRIVN ou Teamworks ? Prix publics, compte ouvert en ligne, ${b.trialPerk}, en français et en néerlandais. Clubs Opteamal bienvenus.`,
      ogTitle: 'Vous êtes sur Teamworks ? Passez à STRIVN, conçu pour votre staff.',
      ogDescription: `Teamworks équipe plus de 6 500 organisations d'élite, sur démonstration. STRIVN affiche ses prix et s'ouvre en ligne : ${b.trialPerk}.`,
      twitterTitle: 'STRIVN ou Teamworks : passez à STRIVN.',
      twitterDescription: `Prix publics, compte ouvert en ligne, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la tour de contrôle du staff performance',
    },
    hero: {
      eyebrow: 'STRIVN ou Teamworks',
      titleLead: 'Vous êtes sur Teamworks ?',
      title: 'Passez à STRIVN, conçu pour votre staff.',
      lede: `Teamworks équipe plus de 6 500 organisations sportives d'élite, sur démonstration et sur devis. STRIVN est conçu pour le staff d'un club : prix publics, compte ouvert en ligne, ${b.trialDays} jours de Semi-Pro pour comparer sur vos séances.`,
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Comparer avec Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN ou Teamworks',
      title: 'Comparez STRIVN et Teamworks, ligne par ligne.',
      lede: 'Cinq points sur lesquels Teamworks publie sa réponse, face à ce que STRIVN livre. Le reste se juge sur vos propres séances.',
      columns: {
        criterion: 'Critère',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Pour qui',
          teamworks: 'Plus de 6 500 organisations sportives d’élite.',
          strivn: 'Le staff d’un club, du régional au pro : 141 équipes, dont 14 équipes pro.',
        },
        {
          criterion: 'Prix',
          teamworks: 'Sur devis, après une démonstration.',
          strivn: `Affichés sur la page : ${b.publicPrices}.`,
        },
        {
          criterion: 'Démarrage',
          teamworks: 'Demande de démonstration à leur équipe commerciale.',
          strivn: `Le staff crée le compte lui-même, sans validation du club. ${b.trialSentence}`,
        },
        {
          criterion: 'Feuille de route',
          teamworks: 'Décidée à Durham, aux États-Unis, pour 6 500 organisations.',
          strivn:
            'Décidée par STRIVN, éditeur indépendant. Nous annonçons chaque nouveauté par e-mail aux coachs.',
        },
        {
          criterion: 'Clubs Opteamal',
          teamworks: 'Passage annoncé sur la plateforme Teamworks depuis le rachat du 18 décembre 2025.',
          strivn: 'Historique importé par fichier, pendant que votre contrat court.',
        },
      ],
      note: 'Sources : teamworks.com et communiqué de Teamworks du 18 décembre 2025, au 15 octobre 2026. Chiffres STRIVN au 18 septembre 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Pourquoi STRIVN',
      title: "Lisez l'état de chaque joueur avant la séance.",
      lede: "Teamworks couvre le recrutement, les opérations et la performance des organisations d'élite. STRIVN se concentre sur la semaine de votre staff. Sept raisons de le choisir.",
      items: [
        {
          title: 'Envoyez le check-in par WhatsApp',
          body: "Le joueur reçoit un lien par WhatsApp ou e-mail et répond sans installer d'application. Il note fatigue, sommeil, humeur et stress, puis son RPE après la séance. L'envoi automatique est au Semi-Pro et au Pro. Vous lisez les réponses avant l'entraînement.",
        },
        {
          title: 'Planifiez la semaine en UA',
          body: "Fixez la cible, suivez le prévu contre le réalisé et ajustez joueur par joueur. STRIVN calcule l'ACWR sur 7 et 28 jours et place chaque joueur dans l'un de trois états.",
        },
        {
          title: "Importez l'export GPS, quel que soit le capteur",
          body: `Déposez le CSV ou le XLSX de Catapult, de STATSports ou d'un autre système, ou la trace SPT / GameTraka. Les colonnes sont reconnues au premier import, puis mémorisées. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Pilotez la séance depuis le bord du terrain',
          body: 'Présences, chrono par bloc, équipes et score tiennent sur le téléphone. Sans réseau, le téléphone garde un journal et le synchronise au retour. Sans durée saisie, STRIVN calcule la charge sur le temps réellement joué.',
        },
        {
          title: 'Travaillez en français ou en néerlandais',
          body: "STRIVN existe en six langues : français, néerlandais, anglais, allemand, portugais et espagnol. Chaque membre du staff choisit la sienne à l'ouverture de son compte.",
        },
        {
          title: 'Donnez à chaque membre du staff son rôle',
          body: "Neuf rôles, de l'entraîneur principal au kiné et à l'analyste, chacun avec ses droits. Au Semi-Pro et au Pro, le nombre de membres du staff est illimité.",
        },
        {
          title: 'Parlez à celui qui construit STRIVN',
          body: 'Le bouton « Parler à Benoit » ouvre un e-mail à celui qui construit STRIVN. Décrivez votre staff et votre outil actuel, nous vous répondons.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Changer',
      title: 'Ouvrez STRIVN pendant que votre contrat court.',
      lede: `Le préavis figure dans votre contrat Teamworks ou Opteamal. Ouvrez STRIVN en parallèle et testez-le ${b.trialDays} jours sur vos propres séances.`,
      steps: [
        {
          n: '01',
          title: "Créez l'espace",
          body: `Nom, e-mail, téléphone, mot de passe, langue et pays suffisent. Le compte démarre au Semi-Pro pour ${b.trialDays} jours, sans carte.`,
        },
        {
          n: '02',
          title: "Importez l'historique",
          body: 'Déposez vos CSV ou XLSX de charge, de RPE et de wellness, puis vos exports GPS. Les colonnes sont reconnues, puis mémorisées pour l’équipe.',
        },
        {
          n: '03',
          title: 'Invitez le staff',
          body: "Attribuez un rôle à chaque personne, avec ses droits. Le Free compte une place, l'Amateur deux, le Semi-Pro et le Pro un nombre illimité.",
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Vos questions avant de quitter Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Puis-je reprendre mon historique Teamworks ou Opteamal ?',
          a: `Oui, par fichier. Exportez la charge, le RPE et le wellness en CSV ou XLSX, puis déposez-les dans STRIVN. Les exports GPS s'importent ${b.gpsTiers}, donc pendant l'essai de ${b.trialDays} jours. Les colonnes sont reconnues d'après leurs en-têtes, puis mémorisées pour l'équipe. Pour la première correspondance, écrivez-nous à hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Je suis encore sous contrat. Quand puis-je changer ?',
          a: `Le préavis et la date de reconduction figurent dans votre contrat. Ouvrez STRIVN en parallèle, sans validation du club et sans carte, avec ${b.trialDays} jours de Semi-Pro. Vous résiliez à la date qui vous convient.`,
        },
        {
          q: "J'étais sur Opteamal. Que change le rachat par Teamworks ?",
          a: "Teamworks a racheté Opteamal le 18 décembre 2025 et annonce faire passer ses clubs sur sa propre plateforme. Si vous changez d'outil, changez une seule fois : importez votre historique dans STRIVN pendant que votre contrat court.",
        },
        {
          q: 'Combien coûte STRIVN ?',
          a: `Les prix sont publics : ${b.publicPrices}. ${b.trialSentence} Vous démarrez sans carte bancaire.`,
        },
        {
          q: 'STRIVN lit-il les données de mon GPS ?',
          a: `Oui, par l'export de séance. Déposez le CSV ou le XLSX de Catapult, de STATSports ou d'un autre système, ou la trace SPT / GameTraka. STRIVN reconnaît les colonnes au premier import et calcule distance et zones de vitesse sur la trace brute. Import ${b.gpsTiers}.`,
        },
        {
          q: "Qu'est-ce qui change pour les joueurs ?",
          a: "Ils répondent au check-in par un lien WhatsApp ou e-mail, sans installer d'application. L'envoi automatique du matin et du soir est au Semi-Pro et au Pro. Les apps STRIVN Player et STRIVN Coach, sur iOS et Android, ajoutent les notifications.",
        },
        {
          q: 'STRIVN fonctionne-t-il en néerlandais ?',
          a: "Oui. STRIVN existe en français, néerlandais, anglais, allemand, portugais et espagnol, pour le staff comme pour les joueurs. Chaque membre du staff choisit sa langue à l'ouverture de son compte.",
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Créez votre espace et comparez sur vos séances.',
      body: `Commencez aujourd'hui, sans démonstration ni devis. ${b.trialSentence} Votre staff vous rejoint quand il voit vos premiers rapports.`,
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Parler à Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      "Teamworks, Teamworks AMS et Opteamal sont des marques de leurs détenteurs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Catapult, STATSports, SPT, GameTraka et WHOOP sont des marques de leurs détenteurs. Les informations sur Teamworks et Opteamal proviennent de sources publiques au 15 octobre 2026.",
  };
}
