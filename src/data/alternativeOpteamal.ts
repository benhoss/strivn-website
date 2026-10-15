/**
 * French-only switch page: /fr/alternative-opteamal/
 *
 * Aimed at clubs still on Opteamal. Prices, plan names and the trial come
 * from the catalogue. Strivn feature claims follow the app audit. Opteamal
 * and Teamworks cells use only public facts: the 18 Dec 2025 acquisition,
 * quote-only pricing, enterprise sales, and Teamworks AMS (100+ integrations,
 * medical module, ISO 27001 / SOC 2). Anything else on their side is
 * "non public", not an invented gap.
 *
 * Open items, marked TODO(validate) where the text lives:
 *   - migration-help offer (published, pending a yes from the business)
 *   - Open Graph image (the site-wide card until a dedicated one exists)
 *
 * Do not add a hosting country, at-rest encryption, a DPA, or a Strivn
 * certification. The old URL redirects here.
 */

import {
  MATRIX,
  PLAN_PRICES,
  TRIAL,
  formatMoney,
  pricingContent,
  type Cell,
  type MatrixRowKey,
  type PlanCode,
  type PricingContent,
} from './pricingContent';

export const ALTERNATIVE_PATH = '/fr/alternative-opteamal/';
/** Previous slug. `astro.config.mjs` redirects it here. */
export const ALTERNATIVE_LEGACY_PATH = '/fr/alternative-teamworks-opteamal/';

const LOCALE = 'fr' as const;
const catalogue = pricingContent[LOCALE];
const PLAN_ORDER: PlanCode[] = ['free', 'amateur', 'semi_pro', 'pro'];

function namesWhere(key: MatrixRowKey, match: (cell: Cell) => boolean): string[] {
  const row = MATRIX.flatMap((group) => group.rows).find((item) => item.key === key);
  if (!row) return [];
  return PLAN_ORDER.filter((_, index) => match(row.cells[index])).map(
    (code) => catalogue.matrix.planNames[code],
  );
}

function au(names: string[]): string {
  if (names.length <= 1) return names[0] ? `au ${names[0]}` : '';
  return names.map((name) => `au ${name}`).join(' et ');
}

function priceClause(code: PlanCode, name: string, quote?: string): string {
  const { monthly, yearly } = PLAN_PRICES[code];
  if (monthly === null) {
    const quoted = (quote ?? catalogue.matrix.cells.onQuote).toLocaleLowerCase(LOCALE);
    return `${name} ${quoted}`;
  }
  if (monthly === 0) return `${name} ${formatMoney(0, LOCALE)}`;
  const perYear = yearly ? ` (${formatMoney(yearly, LOCALE)}/an)` : '';
  return `${name} ${formatMoney(monthly, LOCALE)}${catalogue.plans.perMonth}${perYear}`;
}

const publicPrices = catalogue.plans.items
  .map((plan) => priceClause(plan.code, plan.name, plan.quotePrice))
  .join(', ');

const gpsTiers = au(namesWhere('gpsImport', (cell) => cell === true));
const gpsFiles = `Import de fichiers GPS (CSV, XLSX, Catapult, STATSports, traces SPT / GameTraka), ${gpsTiers}. Pas de connecteur en direct, pas d'API publique.`;

const trialPlan = catalogue.plans.items.find((plan) => plan.code === TRIAL.plan);
const trialName = trialPlan?.name ?? TRIAL.plan;
const trialPerk = `${TRIAL.days} jours de ${trialName} offerts`;
const trialHasCsv = namesWhere('gpsImport', (cell) => cell === true).includes(trialName);
const trialSentence = trialHasCsv
  ? `Les ${TRIAL.days} premiers jours sont au ${trialName}, import de fichiers GPS compris.`
  : `Les ${TRIAL.days} premiers jours sont au ${trialName}.`;

const perks = [trialPerk, 'Sans carte', 'Sans validation du club'];
const costAnswer = `Les prix sont publics : ${publicPrices}. ${gpsFiles} ${trialSentence} Sans carte. Le Pro reste sur devis.`;

const REASON_COUNTS = [
  'Zéro',
  'Une',
  'Deux',
  'Trois',
  'Quatre',
  'Cinq',
  'Six',
  'Sept',
  'Huit',
  'Neuf',
  'Dix',
  'Onze',
  'Douze',
];

export function plansForLanding(plans: PricingContent['plans']): PricingContent['plans'] {
  return {
    ...plans,
    items: plans.items.map((plan) => ({
      ...plan,
      features: plan.features.flatMap((line) => {
        if (line.startsWith('À venir')) return [];
        if (line.startsWith('Import GPS par CSV')) {
          return [
            'Import de fichiers GPS : CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Pas de connecteur en direct.',
          ];
        }
        if (line === 'Synchronisation des objets connectés') {
          return ['WHOOP peut préremplir le check-in'];
        }
        return [line];
      }),
    })),
  };
}

export interface CompareRow {
  criterion: string;
  opteamal: string;
  strivn: string;
  /** Short scan label. Not a score. */
  verdictLead: string;
  verdict: string;
}

export interface Reason {
  title: string;
  body: string;
}

const mail = (subject: string) =>
  `mailto:hello@strivn.net?subject=${encodeURIComponent(subject)}`;

const reasons: Reason[] = [
  {
    title: 'Les prix sont sur la page',
    body: `Free, Amateur, Semi-Pro et Pro : ${publicPrices}. Les mêmes montants que le catalogue. Le Pro reste sur devis, comme un devis, pas comme un prix caché des autres paliers.`,
  },
  {
    title: 'Vous ouvrez le compte vous-même',
    body: "Nom, e-mail, téléphone, mot de passe, langue, pays. Pas d'accord du club ni d'une fédération. Le compte démarre sur 30 jours de Semi-Pro, sans carte.",
  },
  {
    title: 'Les joueurs répondent par un lien',
    body: "Wellness (fatigue, sommeil, humeur, stress) et RPE, par WhatsApp ou e-mail, sans application. L'envoi automatique du matin et du soir est au Semi-Pro et au Pro. WHOOP peut préremplir le check-in à ces paliers.",
  },
  {
    title: 'Le bord de terrain marche hors ligne',
    body: "Présences, chrono par bloc, équipes et score. Le téléphone garde un journal et le synchronise au retour. Si la durée n'est pas saisie, la charge utilise le temps réellement joué.",
  },
  {
    title: 'La semaine se planifie en UA',
    body: "Cible, prévu contre réalisé, ajustement par joueur (échelle, exclusion ou travail individuel) sans modifier la grille d'équipe ni la convocation. La charge issue du GPS demande le Semi-Pro.",
  },
  {
    title: "L'exercice s'anime et se partage",
    body: "Foot, handball, rugby, basket, volley. Animation, téléchargement PNG ou WebM, partage du PNG par la feuille de partage du téléphone. 3 tableaux et 3 modèles au Free, sans plafond à partir de l'Amateur.",
  },
  {
    title: 'Français et néerlandais, plus quatre langues',
    body: "Français, anglais, néerlandais, allemand, portugais et espagnol, côté coach et côté joueur. Le français est le texte source. Le néerlandais est là pour les staffs belges.",
  },
  {
    title: 'Chaque rôle a ses droits',
    body: "Entraîneur principal, adjoint, médical, kiné, préparateur physique, analyste, délégué, recruteur, entraîneur des gardiens. Free : propriétaire seul. Amateur : une invitation en plus. Semi-Pro et Pro : sans plafond.",
  },
  {
    title: "L'absence sort de la convocation",
    body: "Un joueur absent sort des convocations à l'entraînement et au match. Un joueur limité à l'entraînement sort des matchs. Soins, programme individuel et sélection de stage explicite restent disponibles.",
  },
  {
    title: 'La trace SPT est recalculée',
    body: `Fichiers seulement, ${gpsTiers} : CSV ou XLSX (Catapult, STATSports, ou tout tableau) et traces SPT / GameTraka (.gt). STRIVN calcule distance et zones de vitesse sur la trace brute. Pas de connecteur en direct.`,
  },
  {
    title: 'La suite d\'Opteamal se décide chez Teamworks',
    body: "Depuis le 18 décembre 2025, la feuille de route et la migration d'Opteamal sont du ressort de Teamworks. C'est un changement de décideur, pas un jugement sur le produit. STRIVN reste un éditeur indépendant.",
  },
];

export const alternativeOpteamal = {
  gpsNote: gpsFiles,
  meta: {
    title: "Pourquoi passer d'Opteamal à STRIVN",
    description:
      "Opteamal, éditeur belge, a été acquis par Teamworks le 18 décembre 2025. Comparatif factuel : prix STRIVN publics, compte sans accord du club, check-in par lien. Teamworks AMS annonce intégrations, module médical et certifications.",
    ogTitle: "Vous utilisez Opteamal ? Pourquoi passer à STRIVN",
    ogDescription:
      "Acquis par Teamworks le 18 décembre 2025. Prix STRIVN publics, démarrage en libre-service, check-in par lien. Le comparatif ne prête à Opteamal que des faits publics.",
    twitterTitle: "Pourquoi passer d'Opteamal à STRIVN",
    twitterDescription: "Comparatif factuel pour les clubs encore sur Opteamal, désormais chez Teamworks.",
    /**
     * TODO(validate): dedicated Open Graph image (1200×630). The site-wide
     * card is what ships until that visual exists.
     */
    ogImage: '/og.png',
    ogImageAlt: 'STRIVN, la tour de contrôle du staff performance',
  },
  hero: {
    eyebrow: 'Opteamal rejoint Teamworks',
    titleLead: 'Vous utilisez Opteamal ?',
    title: 'Voici pourquoi passer à STRIVN.',
    lede: "Le 18 décembre 2025, Teamworks a acquis Opteamal, éditeur belge, et l'intègre à Teamworks. Cette page met côte à côte les faits publics de leur côté et ce que STRIVN livre. Là où le détail Opteamal n'est pas public, nous l'écrivons, au lieu d'inventer un manque.",
    primaryCta: 'Passer à STRIVN',
    secondaryCta: 'Voir le comparatif',
    secondaryHref: '#comparatif',
    perks,
  },
  compare: {
    id: 'comparatif',
    eyebrow: 'Comparatif',
    title: 'Opteamal (désormais Teamworks) et STRIVN, point par point.',
    lede: "Deux colonnes de faits, puis une lecture. L'avantage va à Teamworks AMS quand leurs annonces publiques le disent. Il va à STRIVN quand le contraste est public. Sinon, la lecture reste non tranchée.",
    columns: {
      criterion: 'Critère',
      opteamal: 'Opteamal (désormais Teamworks)',
      strivn: 'STRIVN',
      verdict: 'Verdict',
    },
    rows: [
      {
        criterion: 'Qui décide de la suite',
        opteamal:
          "Opteamal, éditeur belge, a été acquis par Teamworks le 18 décembre 2025 et est en cours d'intégration à Teamworks. Feuille de route et migration : Teamworks.",
        strivn: 'Éditeur indépendant. La feuille de route est celle de STRIVN.',
        verdictLead: 'Fait',
        verdict: "Depuis l'acquisition, la suite d'Opteamal se décide chez Teamworks.",
      },
      {
        criterion: 'Prix',
        opteamal: 'Sur devis, non public.',
        strivn: `Public : ${publicPrices}.`,
        verdictLead: 'STRIVN',
        verdict: 'Les prix STRIVN sont affichés, sauf le Pro, qui reste sur devis.',
      },
      {
        criterion: 'Comment on achète',
        opteamal: 'Vente entreprise.',
        strivn:
          "Le staff crée le compte lui-même : nom, e-mail, téléphone, mot de passe, langue, pays. Pas d'accord du club ni d'une fédération. 30 jours de Semi-Pro à l'ouverture, sans carte.",
        verdictLead: 'STRIVN',
        verdict: 'Démarrage en libre-service chez STRIVN. Vente entreprise de leur côté.',
      },
      {
        criterion: 'Intégrations',
        opteamal:
          "Teamworks AMS annonce plus de 100 intégrations. La liste qui s'applique encore à un club Opteamal n'est pas publique ici.",
        strivn:
          'Fichiers seulement, au Semi-Pro et au Pro : CSV, XLSX, Catapult, STATSports, traces SPT / GameTraka. Pas de connecteur GPS en direct, pas d\'API publique.',
        verdictLead: 'Teamworks AMS',
        verdict: "Les intégrations annoncées sont un avantage Teamworks AMS. STRIVN s'arrête aux fichiers.",
      },
      {
        criterion: 'Médical',
        opteamal:
          "Teamworks AMS annonce un module médical. Le détail encore propre à Opteamal n'est pas public ici.",
        strivn:
          'Journal de blessure, checklist et plan de retour au jeu, séances de réathlétisation. Tableau médical au Semi-Pro et au Pro. Pas de bibliothèque de protocoles.',
        verdictLead: 'Teamworks AMS',
        verdict: 'Le module médical annoncé est un avantage Teamworks AMS.',
      },
      {
        criterion: 'Certifications',
        opteamal: 'Teamworks AMS annonce ISO 27001 et SOC 2.',
        strivn:
          "Aucune certification revendiquée. Transport HTTPS. Droit d'accès, de rectification, d'effacement ou de copie via hello@strivn.net. Pas de pays d'hébergement ni d'accord de traitement nommés.",
        verdictLead: 'Teamworks AMS',
        verdict: 'Les certifications annoncées sont un avantage Teamworks AMS.',
      },
      {
        criterion: 'Langues',
        opteamal: 'Non public sur cette page.',
        strivn:
          'Français, anglais, néerlandais, allemand, portugais et espagnol. Le français est le texte source.',
        verdictLead: 'Non tranché',
        verdict: 'STRIVN documente six langues, dont le français et le néerlandais. Le détail Opteamal n\'est pas public.',
      },
      {
        criterion: 'Check-in joueur',
        opteamal: 'Non public sur cette page.',
        strivn:
          'Lien WhatsApp ou e-mail, sans application. Envois automatiques au Semi-Pro et au Pro. WHOOP peut préremplir le check-in à ces paliers.',
        verdictLead: 'Non tranché',
        verdict: 'STRIVN documente le lien sans application. L\'équivalent Opteamal n\'est pas public.',
      },
      {
        criterion: 'Bord de terrain',
        opteamal: 'Non public sur cette page.',
        strivn:
          'Présences, chrono par bloc, équipes et score. Journal hors ligne sur le téléphone, synchronisé au retour.',
        verdictLead: 'Non tranché',
        verdict: 'STRIVN documente le mode hors ligne. L\'équivalent Opteamal n\'est pas public.',
      },
      {
        criterion: 'Charge et GPS',
        opteamal: 'Non public sur cette page.',
        strivn:
          'Semaine en UA, ACWR 7 jours sur 28, lectures Prêt, À suivre, À risque. Import de fichiers GPS au Semi-Pro et au Pro, y compris le calcul des traces SPT brutes.',
        verdictLead: 'Non tranché',
        verdict: 'STRIVN documente la charge et les fichiers GPS. Le détail Opteamal n\'est pas public.',
      },
    ] satisfies CompareRow[],
    note: "Faits Opteamal et Teamworks limités aux informations publiques au 15 octobre 2026 : acquisition, prix sur devis, vente entreprise, et annonces Teamworks AMS (intégrations, module médical, ISO 27001, SOC 2). Le reste de leur colonne est marqué non public.",
  },
  reasons: {
    id: 'raisons',
    eyebrow: 'Pourquoi changer',
    title: reasons.length > 1
      ? `${REASON_COUNTS[reasons.length] ?? String(reasons.length)} raisons de changer`
      : 'Une raison de changer',
    lede: "Ce que STRIVN livre, et le seul fait nouveau du côté d'Opteamal : depuis l'acquisition, la suite se décide chez Teamworks.",
    items: reasons,
  },
  switch: {
    id: 'changer',
    eyebrow: 'Comment changer',
    title: 'Trois étapes. Pas un projet d\'intégration.',
    lede: "Vous pouvez ouvrir un espace pendant que votre contrat Opteamal court encore. Nous ne connaissons pas votre préavis : il est dans votre contrat, pas ici.",
    steps: [
      {
        n: '01',
        title: 'Créez l\'espace',
        body: "Nom, e-mail, téléphone, mot de passe, langue, pays. Sans accord du club. Le compte démarre sur 30 jours de Semi-Pro, sans carte.",
      },
      {
        n: '02',
        title: 'Importez l\'historique',
        body: "CSV ou XLSX pour la charge, le RPE et le wellness. Les exports GPS (Catapult, STATSports, SPT / GameTraka) passent au Semi-Pro, donc pendant l'essai. Les colonnes sont devinées, puis mémorisées pour l'équipe.",
      },
      {
        n: '03',
        title: 'Invitez le staff',
        body: "Un rôle par personne, avec ses permissions. Au Free, seul le propriétaire. À l'Amateur, une invitation en plus. Au Semi-Pro et au Pro, pas de plafond.",
      },
    ],
    /**
     * TODO(validate): migration-help offer. Published pending a yes from the
     * business. The three steps above are the self-serve path and do not
     * depend on this offer.
     */
    offer: {
      tag: 'Pour les clubs ex-Opteamal',
      title: 'On peut faire la première correspondance avec vous.',
      body: "Les trois étapes suffisent pour démarrer. Si vous voulez qu'on fasse la correspondance des colonnes avec vous, une fois, écrivez-nous. L'offre d'accompagnement reste à confirmer.",
      cta: 'Parler de ma migration',
      href: mail('Migration depuis Opteamal'),
    },
  },
  stay: {
    id: 'rester',
    eyebrow: 'Rester',
    title: 'Quand Opteamal ou Teamworks reste le bon choix.',
    lede: "Changer n'est pas le mouvement juste dans ces cas. Nous les écrivons pour que la page reste utilisable.",
    items: [
      {
        title: 'Le module médical d\'entreprise',
        body: "Teamworks AMS annonce un module médical. STRIVN couvre le journal, le retour au jeu et la réathlétisation, pas une bibliothèque de protocoles.",
      },
      {
        title: 'ISO 27001 et SOC 2',
        body: "Teamworks AMS les annonce. STRIVN ne revendique ni certification, ni pays d'hébergement, ni accord de traitement.",
      },
      {
        title: 'Les intégrations directes',
        body: "Teamworks AMS annonce plus de 100 intégrations. STRIVN importe des fichiers et n'a pas de connecteur GPS en direct ni d'API publique.",
      },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Les questions quand on quitte Opteamal.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Puis-je reprendre mon historique Opteamal ?',
        a: "Par fichier, oui. Charge, RPE et wellness : CSV ou XLSX. Les exports GPS (CSV, XLSX, Catapult, STATSports, ou trace SPT / GameTraka) s'importent au Semi-Pro et au Pro, palier de l'essai de 30 jours. La correspondance des colonnes est devinée d'après les en-têtes connus, puis enregistrée pour l'équipe. Il n'y a pas d'API publique pour vider un compte Opteamal. Écrivez-nous à hello@strivn.net si vous voulez faire la première correspondance avec nous.",
        mailto: mail('Migration depuis Opteamal'),
      },
      {
        q: 'Je suis encore sous contrat. Quand est-ce que je peux changer ?',
        a: "Le préavis, la reconduction et le coût de sortie sont dans votre contrat Opteamal ou Teamworks. Nous ne les publions pas, et cette page ne vous dit pas de le rompre. Vous pouvez créer un espace STRIVN en parallèle : sans accord du club, sans carte, sur 30 jours de Semi-Pro.",
      },
      {
        q: 'Combien ça coûte, vraiment ?',
        a: costAnswer,
      },
      {
        q: 'Qu\'est-ce que ça change pour les joueurs ?',
        a: "Pour répondre, ils n'installent rien. Un lien WhatsApp ou e-mail suffit pour le wellness, le RPE et les rappels. L'envoi automatique est au Semi-Pro et au Pro. STRIVN Player et STRIVN coach (iOS et Android) existent en plus : ce sont des coques autour de l'application web, avec les notifications, et un chrono de bord de terrain sur l'app coach.",
      },
      {
        q: 'Et les langues, pour un club belge ?',
        a: "STRIVN est en français, anglais, néerlandais, allemand, portugais et espagnol, côté coach et côté joueur. Le français est le texte source. Le néerlandais est inclus. Les langues encore servies par Opteamal ne sont pas détaillées ici : ce n'est pas public sur cette page.",
      },
      {
        q: 'Qu\'est-ce que je ne retrouve pas ?',
        a: "Le module médical annoncé par Teamworks AMS, les certifications ISO 27001 et SOC 2, et les plus de 100 intégrations qu'ils annoncent. STRIVN ne les revendique pas. Le journal de blessure, le retour au jeu et l'import de fichiers, eux, sont livrés.",
      },
    ],
  },
  finalCta: {
    eyebrow: 'Essai Semi-Pro',
    title: 'Créez l\'espace et importez votre historique.',
    body: `${trialSentence} Votre contrat Opteamal ne se résilie pas tout seul : vous choisissez le moment.`,
    primaryCta: 'Créer mon espace',
    secondaryCta: 'Parler de ma migration',
    secondaryHref: mail('Migration depuis Opteamal'),
    fine: perks,
  },
  disclaimer:
    "Opteamal, Teamworks et Teamworks AMS sont des marques de leurs détenteurs respectifs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Catapult, STATSports, SPT, GameTraka et WHOOP sont des marques de leurs détenteurs. L'import GPS se fait par fichier ; WHOOP peut préremplir le check-in au Semi-Pro et au Pro. Les informations sur Opteamal et Teamworks proviennent de sources publiques au 15 octobre 2026 et peuvent évoluer. Chiffres de prix STRIVN : catalogue en vigueur.",
};
