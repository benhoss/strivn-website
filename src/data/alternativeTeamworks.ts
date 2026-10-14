/**
 * French-only landing: /fr/alternative-teamworks-opteamal/
 *
 * Prices, plan names and the trial still come from the catalogue
 * (`PLAN_PRICES`, `MATRIX`, `TRIAL`). Feature claims follow the code audit
 * of the app: files-only GPS, the three readiness labels, and no unshipped
 * connector, API, hosting or certification claim.
 *
 * Open items, each marked TODO(validate) where the text lives:
 *   - migration offer (published, pending a yes from the business)
 *   - testimonials (empty on purpose — the block does not render)
 *   - Open Graph image (the site-wide card until a dedicated one exists)
 *
 * The data-protection answer stays inside what the privacy policy actually
 * says. Do not add a country, a DPA, at-rest encryption, or a certification.
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

export const ALTERNATIVE_PATH = '/fr/alternative-teamworks-opteamal/';

const LOCALE = 'fr' as const;
const catalogue = pricingContent[LOCALE];
const PLAN_ORDER: PlanCode[] = ['free', 'amateur', 'semi_pro', 'pro'];

/** Plan names whose matrix cell matches. Order is the catalogue order. */
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

/** Monthly catalogue amount, yearly total when there is one, quote when there isn't. */
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

/** GPS import tier names stay on the catalogue. The capability itself is the audit. */
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
const costAnswer = `Les prix sont publics : ${publicPrices}. ${gpsFiles} ${trialSentence} Sans carte.`;

/**
 * Catalogue cards, with the bullets the audit contradicts rewritten or dropped.
 * Prices, names and the other bullets stay on the catalogue.
 */
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

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CompareRow {
  criterion: string;
  strivn: string;
  ams: string;
  /** AMS cell is a non-claim, rendered in the muted ink. */
  amsMuted?: boolean;
}

const mail = (subject: string) =>
  `mailto:hello@strivn.net?subject=${encodeURIComponent(subject)}`;

export const alternativeTeamworks = {
  /** Shown under the tier cards instead of the catalogue's "connect your GPS" line. */
  gpsNote: gpsFiles,
  meta: {
    title: 'Alternative à Teamworks AMS et Opteamal | STRIVN',
    description:
      "Opteamal a rejoint Teamworks. STRIVN pilote la charge, le wellness et les fichiers GPS, à prix public, sans validation du club. Check-in par lien. Six langues : français, anglais, néerlandais, allemand, portugais, espagnol.",
    ogTitle: "STRIVN : l'alternative à Teamworks AMS et Opteamal pour le staff performance",
    ogDescription:
      "Prix public, sans projet d'intégration. Check-in par lien, sans application. Fichiers GPS (CSV, XLSX, Catapult, STATSports, SPT) au Semi-Pro. Six langues.",
    twitterTitle: "STRIVN : l'alternative à Teamworks AMS et Opteamal",
    twitterDescription: "Le pilotage de la charge sans le prix d'entrée ni le projet d'intégration.",
    /**
     * TODO(validate): dedicated Open Graph image (1200×630). The site-wide
     * card is what ships until that visual exists.
     */
    ogImage: '/og.png',
    ogImageAlt: 'STRIVN, la tour de contrôle du staff performance',
  },
  hero: {
    eyebrow: 'Alternative à Teamworks AMS et Opteamal',
    titleLead: 'Le pilotage de la charge,',
    title: "sans le prix d'entrée ni le projet d'intégration.",
    lede: "Charge, wellness, RPE et planification en UA. Avant la séance, chaque joueur est Prêt, À suivre ou À risque. Vous créez le compte vous-même : un nouvel espace démarre sur 30 jours de Semi-Pro, import de fichiers GPS compris.",
    primaryCta: 'Créer mon espace',
    secondaryCta: 'Demander une démo',
    secondaryHref: mail('Demande de démo STRIVN'),
    perks,
    panelAria: 'Exemple de lecture STRIVN avant séance',
    columns: ['Joueur', 'ACWR', 'Sommeil', 'Lecture'] as const,
    proposed: 'Proposé · L. Moreau :',
    proposal: "Réduire les sprints et les changements de direction aujourd'hui.",
    sources: 'ACWR 7/28 · sommeil · RPE. Seuils fixés par le sport, pas par le staff.',
    readings: { ready: 'Prêt', watch: 'À suivre', risk: 'À risque' } as const,
    statsAria: 'STRIVN en chiffres',
    statsCaption: 'Du régional au professionnel. Au 18 septembre 2026.',
  },
  opteamal: {
    id: 'opteamal',
    eyebrow: 'Belgique · Pays-Bas',
    title: 'Opteamal rejoint Teamworks : et maintenant ?',
    lede: "Le 18 décembre 2025, Teamworks a racheté Opteamal, la plateforme louvaniste utilisée par une large part des clubs de Pro League. Les staffs concernés vont rejoindre l'écosystème Teamworks. C'est le bon moment pour vérifier que l'outil de demain correspond à votre façon de travailler.",
    change: {
      title: 'Ce qui change pour votre staff',
      timeline: [
        { when: '18 déc. 2025', what: 'Opteamal intègre la famille Teamworks.' },
        { when: 'Ensuite', what: "Migration des clubs vers l'écosystème Teamworks." },
      ],
      body: "Teamworks AMS est une suite solide, pensée pour les grandes structures. Si elle couvre vos besoins, rester est un choix logique. Si vous cherchez un outil plus léger, à prix public, que le staff ouvre lui-même, comparez avant de vous engager.",
      questions: [
        'Quel budget annuel pour votre staff ?',
        'Qui porte la mise en place ?',
        'Vos joueurs devront-ils installer une nouvelle app ?',
      ],
    },
    /**
     * TODO(validate): migration offer. The copy below is published. Confirm
     * we will import the history with the staff, and that players can answer
     * by link, before this offer is promoted. GPS files sit on Semi-Pro,
     * which is the trial tier.
     */
    offer: {
      tag: 'Pour les clubs ex-Opteamal',
      title: 'On vous aide à migrer, données comprises.',
      body: "Vous repartez avec votre historique, pas d'une page blanche.",
      points: [
        {
          lead: "Import de l'historique en fichier",
          rest: ' : charge, RPE et wellness en CSV ou XLSX. Les exports GPS (Catapult, STATSports, SPT / GameTraka) s’importent au Semi-Pro, le palier de l’essai.',
        },
        {
          lead: 'Aide à la migration',
          rest: " : nous faisons la correspondance des colonnes avec vous, une fois. Elle est ensuite mémorisée pour l'équipe.",
        },
        {
          lead: 'Vos joueurs répondent par lien',
          rest: ', sur WhatsApp ou par e-mail, sans application à installer.',
        },
      ],
      cta: 'Parler de ma migration',
      href: mail('Migration depuis Opteamal'),
    },
  },
  compare: {
    id: 'comparatif',
    eyebrow: 'Comparatif',
    title: 'STRIVN et Teamworks AMS, point par point.',
    lede: "Deux approches différentes. Teamworks AMS est une plateforme d'entreprise configurable ; STRIVN est l'outil du staff performance, avec des calculs natifs et un périmètre livré.",
    columns: { criterion: 'Critère', strivn: 'STRIVN', ams: 'Teamworks AMS' },
    rows: [
      {
        criterion: 'Mise en place',
        strivn:
          'Compte créé par le staff : nom, e-mail, téléphone, mot de passe, langue, pays. Pas d’accord du club ni d’une fédération. 30 jours de Semi-Pro à l’ouverture.',
        ams: "Projet d'implémentation",
      },
      { criterion: 'Prix', strivn: `Public : ${publicPrices}`, ams: 'Sur devis' },
      {
        criterion: 'Accord du club',
        strivn: 'Aucune validation du club ni d’une fédération',
        ams: 'Vente accompagnée par un commercial',
      },
      {
        criterion: 'Check-in joueurs',
        strivn:
          'Lien WhatsApp ou e-mail, sans application : fatigue, sommeil, humeur, stress, et RPE. Envois automatiques au Semi-Pro et au Pro. WHOOP peut préremplir le check-in à ces paliers.',
        ams: 'Formulaires configurables',
      },
      {
        criterion: 'Import GPS',
        strivn:
          'Fichiers seulement, au Semi-Pro et au Pro : CSV ou XLSX (Catapult, STATSports, ou tout tableau) et traces SPT / GameTraka (.gt). STRIVN calcule distance et zones de vitesse sur la trace brute. Colonnes devinées, puis mémorisées. Pas de connecteur en direct.',
        ams: 'Plus de 100 intégrations',
      },
      {
        criterion: 'ACWR et readiness',
        strivn:
          'ACWR 7 jours sur la moyenne chronique de 28 jours, monotonie de Foster, recalculés chaque nuit. Lectures : Prêt, À suivre, À risque. Les écrans sont sur tous les paliers ; la charge issue du GPS demande le Semi-Pro.',
        ams: 'Configurables via tableaux de bord',
      },
      {
        criterion: 'Planification en UA',
        strivn:
          'Cible hebdomadaire, prévu contre réalisé, ajustement par joueur (échelle, exclusion ou travail individuel) sans modifier la grille d’équipe ni la convocation.',
        ams: 'Configurable',
      },
      {
        criterion: "Éditeur d'exercices animés",
        strivn:
          'Foot, handball, rugby, basket, volley. Animation, téléchargement PNG ou WebM. Partage du PNG par la feuille de partage du téléphone. 3 tableaux et 3 modèles au Free, sans plafond à partir de l’Amateur.',
        ams: 'Non mis en avant',
        amsMuted: true,
      },
      {
        criterion: 'Bord de terrain hors ligne',
        strivn:
          'Présences, chrono par bloc, équipes et score. Le téléphone garde un journal hors ligne et le synchronise au retour. Sans durée saisie, la charge utilise le temps réellement joué.',
        ams: 'Non mis en avant',
        amsMuted: true,
      },
      {
        criterion: 'Assistant et rapport',
        strivn:
          'L’assistant lit la charge, le wellness, le GPS et les blessures, et cite les chiffres affichés par l’app, avec la période. Pas de note de source sous chaque réponse. Chaque lundi à 06:00 UTC, un PDF par joueur et par équipe est généré et stocké. Il n’est pas envoyé par e-mail. Quotas mensuels de l’assistant : 60 au Free, 400 à l’Amateur, 2 000 au Semi-Pro, puis au contrat.',
        ams: 'Non communiqué',
        amsMuted: true,
      },
      {
        criterion: 'Rôles du staff',
        strivn:
          'Entraîneur principal, adjoint, médical, kiné, préparateur physique, analyste, délégué, recruteur, entraîneur des gardiens, chacun avec ses permissions. Free : propriétaire seul. Amateur : une invitation en plus. Semi-Pro et Pro : sans plafond.',
        ams: 'Rôles dans la suite',
      },
      {
        criterion: 'Disponibilité',
        strivn:
          'Un joueur absent sort des convocations à l’entraînement et au match. Un joueur limité à l’entraînement sort des matchs. Soins, programme individuel et sélection de stage explicite restent disponibles.',
        ams: 'Liée au dossier médical',
      },
      {
        criterion: 'Médical',
        strivn:
          'Journal de blessure, checklist et plan de retour au jeu, séances de réathlétisation. Tableau médical au Semi-Pro et au Pro. Pas de bibliothèque de protocoles.',
        ams: 'Module médical complet',
      },
      {
        criterion: 'Langues',
        strivn:
          'Français, anglais, néerlandais, allemand, portugais et espagnol. Le français est le texte source.',
        ams: 'Multilingue, orienté anglais',
      },
      {
        criterion: 'Export et API',
        strivn:
          'Agenda iCal, présences, et semaine GPS en CSV (l’export GPS est au Semi-Pro). Pas d’API publique, pas de paquet complet en libre-service.',
        ams: 'API et intégrations annoncées',
      },
    ] satisfies CompareRow[],
    fair: [
      {
        tag: 'Point fort AMS',
        title: 'Module médical plus large',
        body: "Teamworks AMS met en avant un module médical complet. STRIVN couvre le journal de blessure, le retour au jeu et la réathlétisation, pas une bibliothèque de protocoles cliniques.",
      },
      {
        tag: 'Point fort AMS',
        title: 'Configurabilité des grandes structures',
        body: "Formulaires, tableaux de bord et intégrations : AMS se paramètre pour des fédérations et des organisations multi-équipes. STRIVN n'a pas d'API publique.",
      },
      {
        tag: 'Notre choix',
        title: "Le périmètre livré, pour le staff",
        body: "Check-in par lien sans application, bord de terrain hors ligne, calcul des traces SPT, rôles du staff, disponibilité reprise dans les convocations, six langues. Les calculs de charge sont natifs.",
      },
    ],
    note: "Comparatif STRIVN établi sur le code du produit. Côté Teamworks AMS, informations publiques au 14 octobre 2026.",
  },
  /**
   * TODO(validate): three testimonials — quote, name, role and club — each
   * with written consent. Leave `items` empty until then. The section is
   * not rendered when the list is empty, so placeholder quotes never ship.
   */
  testimonials: {
    id: 'temoignages',
    eyebrow: 'Ils pilotent avec STRIVN',
    title: '141 équipes, 188 coachs, 17 pays.',
    lede: 'Dont 14 équipes professionnelles. Au 18 septembre 2026.',
    items: [] as Testimonial[],
  },
  faq: {
    label: 'FAQ',
    title: 'Les questions que posent les staffs.',
    email: 'hello@strivn.net',
    items: [
      {
        q: 'Je suis sur Opteamal. Puis-je récupérer mon historique ?',
        a: "Oui, par fichier. Charge, RPE et wellness : CSV ou XLSX. Les exports GPS (CSV, XLSX, Catapult, STATSports, ou trace SPT / GameTraka) s'importent au Semi-Pro et au Pro, palier inclus dans l'essai de 30 jours. La correspondance des colonnes est devinée d'après les en-têtes connus, puis enregistrée pour l'équipe. Écrivez-nous à hello@strivn.net : nous faisons la première correspondance avec vous.",
        mailto: mail('Migration depuis Opteamal'),
      },
      {
        /**
         * Limited to the in-app privacy policy (10 June 2026). Do not add a
         * hosting country, at-rest encryption, a DPA, or a certification:
         * the policy names none of them. Rendered on the page and in the
         * FAQPage JSON-LD.
         */
        q: 'Où sont hébergées nos données, et que pouvez-vous en dire ?',
        a: "La politique de confidentialité (10 juin 2026) indique un transport en HTTPS, et un droit d'accès, de rectification, d'effacement ou de copie, à demander à hello@strivn.net. Elle ne nomme ni le pays d'hébergement, ni un accord de traitement (DPA), ni une certification. La suppression du compte joueur retire l'accès ; l'effacement complet du dossier passe par l'opérateur.",
        mailto: mail('Données et confidentialité'),
      },
      {
        q: 'Quel est le délai de mise en place ?',
        a: "Vous créez le compte vous-même : nom, e-mail, téléphone, mot de passe, langue, pays. Pas d'accord du club ni d'une fédération, pas de projet d'implémentation, pas de formation obligatoire. Un nouveau compte démarre sur 30 jours de Semi-Pro.",
      },
      {
        q: "Faut-il l'accord du club ?",
        a: "Non. Vous créez le compte et invitez le staff avec un rôle (entraîneur principal, adjoint, médical, kiné, préparateur physique, analyste, délégué, recruteur, entraîneur des gardiens), sans validation du club ni d'une fédération. Au Free, seul le propriétaire ; à l'Amateur, une invitation en plus ; au Semi-Pro et au Pro, pas de plafond.",
      },
      {
        q: 'Combien ça coûte, vraiment ?',
        a: costAnswer,
      },
      {
        q: 'Mes joueurs doivent-ils installer une application ?',
        a: "Non pour répondre. Un lien WhatsApp ou e-mail suffit pour le wellness, le RPE et les rappels. L'envoi automatique du matin et du RPE du soir est au Semi-Pro et au Pro. Le produit complet est l'application web. STRIVN Player et STRIVN coach (iOS et Android) en sont des coques, avec les notifications, et un chrono de bord de terrain sur l'app coach.",
      },
    ],
  },
  finalCta: {
    eyebrow: 'Essai Semi-Pro',
    title: 'Créez votre compte. L’essai ouvre l’import de fichiers GPS.',
    body: `${trialSentence} Votre staff vous rejoint quand il voit vos premiers rapports.`,
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Demander une démo',
    secondaryHref: mail('Demande de démo STRIVN'),
    fine: perks,
  },
  disclaimer:
    "Teamworks, Teamworks AMS et Opteamal sont des marques de leurs détenteurs respectifs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Catapult, STATSports, SPT, GameTraka et WHOOP sont des marques de leurs détenteurs. L'import GPS se fait par fichier ; WHOOP peut préremplir le check-in au Semi-Pro et au Pro. Les informations sur Teamworks AMS proviennent de sources publiques au 14 octobre 2026 et peuvent évoluer. Chiffres STRIVN au 18 septembre 2026.",
};
