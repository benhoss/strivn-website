import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * French source text. The other locales translate this page, they do not
 * extend it. Voice: PRODUCT.md § Voice.
 *
 * Written for pro staffs. The argument is what STRIVN does with the club's
 * data: an assistant that reads every player, actions the staff approves,
 * and a connector that lets the club's own AI read the same data. Every
 * STRIVN claim was checked against the app on 2026-10-15; what Teamworks is
 * said to do comes from its own pages (see alternativeTeamworks.ts).
 *
 * Not claimable yet, so absent: a full-account export, EU hosting, "your
 * data never trains a model", approval cards on connector writes (they act
 * at once, with the coach's rights), a club-wide view, federation sync.
 */
export function frPage(b: LandingBits): SwitchPage {
  const migration = mail('Passer de Teamworks à STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN ou Teamworks',
    meta: {
      title: "Alternative à Teamworks : STRIVN, l'IA qui lit vos joueurs",
      description: `STRIVN ou Teamworks ? Un assistant qui lit charge, GPS et infirmerie, un connecteur Claude et ChatGPT, des prix publics. ${b.trialPerk}.`,
      ogTitle: "Vous êtes sur Teamworks ? Passez à STRIVN, l'IA qui lit vos joueurs.",
      ogDescription:
        "L'assistant STRIVN lit la charge, le wellness, le GPS, l'infirmerie et les matchs, et prépare les actions que votre staff valide.",
      twitterTitle: "STRIVN ou Teamworks : l'IA qui lit vos joueurs.",
      twitterDescription: `Un assistant sur toutes vos données, un connecteur Claude et ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la tour de contrôle du staff performance',
    },
    hero: {
      eyebrow: 'STRIVN ou Teamworks',
      titleLead: 'Vous êtes sur Teamworks ?',
      title: "Passez à STRIVN, l'IA qui lit vos joueurs.",
      lede: "Ask Teamworks répond aux questions posées sur vos documents. L'assistant STRIVN lit la charge, le wellness, le GPS, l'infirmerie et les matchs de chaque joueur, puis prépare les actions que votre staff valide.",
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Comparer avec Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    showcase: {
      assistant: {
        title: 'Interrogez toutes vos données en une question.',
        body: "Ask Teamworks lit le PDF que vous ouvrez. L'assistant STRIVN lit la charge, le wellness, le GPS et l'infirmerie ensemble, cite ses sources et épingle chaque graphique à vos dashboards.",
      },
      readiness: {
        title: "Validez ce que l'IA propose avant la séance.",
        body: "Le check-in du réveil nourrit la readiness de chaque joueur. STRIVN montre pourquoi un joueur passe en Alléger et propose la séance adaptée. Vous appliquez ou vous modifiez, en un geste.",
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN ou Teamworks',
      title: "Comparez ce que l'IA fait pour votre staff.",
      lede: 'Cinq lignes. Les sources sont sous le tableau.',
      columns: {
        criterion: 'Critère',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "Ce que lit l'IA",
          teamworks: 'Le PDF que vous ouvrez.',
          strivn: 'Charge, wellness, GPS, infirmerie et matchs, ensemble.',
        },
        {
          criterion: "Ce que rend l'IA",
          teamworks: 'Une réponse citée.',
          strivn: "Une réponse sourcée, et l'action prête à valider.",
        },
        {
          criterion: 'Votre propre IA',
          teamworks: 'Une API pour intégrer Teamworks AMS.',
          strivn: 'Claude et ChatGPT, branchés sur vos données.',
        },
        {
          criterion: 'Démarrage',
          teamworks: 'Après une démonstration commerciale.',
          strivn: `Aujourd'hui, en ligne, avec ${b.trialPerk}.`,
        },
        {
          criterion: 'Prix',
          teamworks: 'Sur devis.',
          strivn: 'Affichés sur la page, dès 0 € par mois.',
        },
      ],
      note: 'Sources : teamworks.com (pages AMS et Performance), blog Teamworks du 5 août 2026 sur Ask Teamworks, au 15 octobre 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Pourquoi STRIVN',
      title: "Équipez tout le staff, de l'analyste au kiné.",
      lede: 'Six raisons de plus de choisir STRIVN.',
      items: [
        {
          title: 'Branchez Claude ou ChatGPT sur vos données',
          body: "Le propriétaire de l'équipe active le connecteur, et votre IA lit l'effectif, la charge, le GPS et les matchs avec vos droits. Elle n'écrit jamais aux joueurs, aux parents ni au public. Vous révoquez l'accès depuis les réglages.",
        },
        {
          title: "Préparez l'adversaire à plusieurs",
          body: "L'analyste note, filme et dessine sous chaque adversaire. Photographiez la feuille de match : l'IA extrait les joueurs, qui n'entrent dans l'effectif adverse qu'à votre confirmation. Le brief se génère ensuite, du dossier de scouting à la causerie.",
        },
        {
          title: "Pilotez la charge jusqu'à l'exercice",
          body: "Le RPE donne la charge interne, l'export GPS la charge externe, face à face. ACWR, monotonie et contrainte se calculent seuls, la prévision projette la semaine, et chaque exercice garde sa mesure GPS.",
        },
        {
          title: "Filtrez les convocations par l'infirmerie",
          body: 'Le tableau médical réunit les blessures actives, les joueurs en revalidation et la disponibilité de chacun. Il filtre seul les convocations, et le joueur suit son programme de retour au jeu dans son app.',
        },
        {
          title: 'Dictez le debrief du match',
          body: "Parlez après le match : STRIVN met votre debrief en forme. Vous le relisez, puis vous l'appliquez.",
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
          title: 'Posez votre première question',
          body: "Demandez à l'assistant la charge de la semaine ou les joueurs à surveiller. Il répond sur votre historique importé, sources à l'appui.",
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Vos questions avant de quitter Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Mes données restent-elles à moi ?',
          a: 'Oui. Vous les lisez dans STRIVN ou depuis votre propre IA, par le connecteur que vous activez et révoquez. Vous exportez les présences en CSV, le calendrier en ICS, les tableaux tactiques et les présentations en PDF. Si vous redescendez au Free, tout votre historique reste consultable.',
        },
        {
          q: "L'IA peut-elle agir sans mon accord ?",
          a: "Dans STRIVN, chaque action préparée par l'assistant attend votre validation. Par le connecteur, Claude ou ChatGPT agissent avec vos droits, comme un membre du staff, sans jamais écrire aux joueurs, aux parents ni au public, ni toucher aux convocations.",
        },
        {
          q: 'Puis-je reprendre mon historique Teamworks ou Opteamal ?',
          a: `Oui, par fichier. Exportez la charge, le RPE et le wellness en CSV ou XLSX, puis déposez-les dans STRIVN. Les exports GPS s'importent ${b.gpsTiers}, donc pendant l'essai de ${b.trialDays} jours. Pour la première correspondance, écrivez-nous à hello@strivn.net.`,
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
          a: `Les prix sont publics : ${b.publicPrices}. ${b.trialSentence} Le Pro, sur devis, fixe au contrat les volumes d'IA et de WhatsApp.`,
        },
        {
          q: 'STRIVN lit-il les données de mon GPS ?',
          a: `Oui, par l'export de séance. Déposez le CSV ou le XLSX de Catapult, de STATSports ou d'un autre système, ou la trace SPT / GameTraka. STRIVN reconnaît les colonnes au premier import et calcule distance et zones de vitesse sur la trace brute. Import ${b.gpsTiers}.`,
        },
        {
          q: 'STRIVN fonctionne-t-il en néerlandais ?',
          a: "Oui. STRIVN existe en français, néerlandais, anglais, allemand, portugais et espagnol, pour le staff comme pour les joueurs. Chaque membre du staff choisit sa langue à l'ouverture de son compte.",
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Créez votre espace et posez votre première question.',
      body: `Importez votre historique, puis interrogez-le. ${b.trialSentence} Votre staff vous rejoint quand il voit vos premiers rapports.`,
      primaryCta: 'Créer mon espace gratuitement',
      secondaryCta: 'Parler à Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      "Teamworks, Teamworks AMS, Ask Teamworks et Opteamal sont des marques de leurs détenteurs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka et WHOOP sont des marques de leurs détenteurs. Les informations sur Teamworks et Opteamal proviennent de sources publiques au 15 octobre 2026.",
  };
}
