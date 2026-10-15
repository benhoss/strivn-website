import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * French source text. The other locales translate this page, they do not
 * extend it. Voice: PRODUCT.md § Voice.
 *
 * The page argues the switch. Its one claim about the other side is what
 * Teamworks itself announced on 18 Dec 2025 (Durham, N.C.): Opteamal
 * partners move onto the Teamworks platform, built for 6,500+ elite
 * organizations. Everything else is what STRIVN ships.
 */
export function frPage(b: LandingBits): SwitchPage {
  const migration = mail('Migration depuis Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: "Passer d'Opteamal à STRIVN",
    meta: {
      title: 'Alternative à Opteamal : STRIVN, avec votre historique',
      description: `Teamworks annonce la migration des clubs Opteamal. Choisissez STRIVN : prix publics, ${b.trialPerk}, en français et en néerlandais.`,
      ogTitle: 'Vous êtes sur Opteamal ? Passez à STRIVN avant la migration.',
      ogDescription: `Teamworks annonce faire passer les clubs Opteamal sur sa plateforme. Changez d'outil une seule fois : prix publics, ${b.trialPerk}, historique importé.`,
      twitterTitle: 'Vous êtes sur Opteamal ? Passez à STRIVN.',
      twitterDescription: `Prix publics, ${b.trialPerk}, historique importé par fichier.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la tour de contrôle du staff performance',
    },
    hero: {
      eyebrow: 'Opteamal rejoint Teamworks',
      titleLead: 'Vous êtes sur Opteamal ?',
      title: 'Passez à STRIVN avant la migration.',
      lede: `Teamworks a racheté Opteamal et annonce faire passer ses clubs sur sa propre plateforme. Changez d'outil une seule fois : importez votre historique dans STRIVN et testez-le ${b.trialDays} jours sur vos séances.`,
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Voir ce qui change',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Ce qui change',
      title: "Comparez la suite d'Opteamal avec STRIVN.",
      lede: "Le 18 décembre 2025, Teamworks a annoncé accueillir les clubs Opteamal sur sa plateforme. Vous allez changer d'outil : comparez les deux suites avant de choisir.",
      columns: {
        criterion: 'Critère',
        opteamal: 'Opteamal, chez Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Votre prochain outil',
          opteamal: 'La plateforme Teamworks, conçue pour plus de 6 500 organisations d’élite.',
          strivn: 'STRIVN, conçu pour le staff d’un club : 141 équipes, dont 14 équipes pro.',
        },
        {
          criterion: 'Prix',
          opteamal: 'Sur devis.',
          strivn: `Affichés sur la page : ${b.publicPrices}.`,
        },
        {
          criterion: 'Accès au compte',
          opteamal: 'Sur demande, via leur équipe commerciale.',
          strivn: `Le staff crée le compte lui-même, sans validation du club. ${b.trialSentence}`,
        },
        {
          criterion: 'Feuille de route',
          opteamal: 'Décidée chez Teamworks, à Durham, aux États-Unis.',
          strivn:
            'Décidée par STRIVN, éditeur indépendant. Nous annonçons chaque nouveauté par e-mail aux coachs.',
        },
      ],
      note: 'Sources : communiqué de Teamworks du 18 décembre 2025 et pages publiques de Teamworks et d’Opteamal, au 15 octobre 2026. Chiffres STRIVN au 18 septembre 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'Ce que vous gagnez',
      title: "Lisez l'état de chaque joueur avant la séance.",
      lede: 'STRIVN croise le check-in, le RPE, la charge et le GPS de chaque joueur. Sept raisons de le choisir pour votre staff.',
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
          body: 'Le bouton « Parler à Benoit » ouvre un e-mail à celui qui construit STRIVN. Décrivez votre staff et votre migration, nous vous répondons.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Changer',
      title: 'Ouvrez STRIVN pendant que votre contrat court.',
      lede: `Le préavis figure dans votre contrat Opteamal. Ouvrez STRIVN en parallèle et testez-le ${b.trialDays} jours sur vos propres séances.`,
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
      title: 'Vos questions avant de quitter Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Puis-je reprendre mon historique Opteamal ?',
          a: `Oui, par fichier. Exportez la charge, le RPE et le wellness en CSV ou XLSX, puis déposez-les dans STRIVN. Les exports GPS s'importent ${b.gpsTiers}, donc pendant l'essai de ${b.trialDays} jours. Les colonnes sont reconnues d'après leurs en-têtes, puis mémorisées pour l'équipe. Pour la première correspondance, écrivez-nous à hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Je suis encore sous contrat. Quand puis-je changer ?',
          a: `Le préavis et la date de reconduction figurent dans votre contrat Opteamal ou Teamworks. Ouvrez STRIVN en parallèle, sans validation du club et sans carte, avec ${b.trialDays} jours de Semi-Pro. Vous résiliez à la date qui vous convient.`,
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
      title: 'Importez votre historique dans STRIVN.',
      body: `Changez d'outil une seule fois. ${b.trialSentence} Votre staff vous rejoint quand il voit vos premiers rapports.`,
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Parler à Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      "Opteamal, Teamworks et Teamworks AMS sont des marques de leurs détenteurs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Catapult, STATSports, SPT, GameTraka et WHOOP sont des marques de leurs détenteurs. Les informations sur Opteamal et Teamworks proviennent de sources publiques au 15 octobre 2026.",
  };
}
