/**
 * French-only landing: /fr/alternative-teamworks-opteamal/
 *
 * Copy is the approved prototype, except every price and tier claim, which is
 * derived from the catalogue (`PLAN_PRICES`, `MATRIX`, `TRIAL`, plan names).
 * The pricing band itself is `PricingPlans`, so a catalogue change moves the
 * cards, the comparison line, the FAQ and the trial sentence together.
 *
 * Open items, each marked TODO(validate) where the text lives:
 *   - migration offer (published, pending a yes from the business)
 *   - RGPD / hosting FAQ answer (the bracketed sentence is still a placeholder)
 *   - testimonials (empty on purpose — the block does not render)
 *   - Open Graph image (the site-wide card until a dedicated one exists)
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

const gpsClaim = `${catalogue.matrix.rows.gpsImport}, ${au(namesWhere('gpsImport', (cell) => cell === true))}. ${catalogue.matrix.rows.gpsConnectors} : ${catalogue.matrix.cells.upcoming.toLocaleLowerCase(LOCALE)}, ${au(namesWhere('gpsConnectors', (cell) => cell === 'upcoming'))}.`;

const trialPlan = catalogue.plans.items.find((plan) => plan.code === TRIAL.plan);
const trialName = trialPlan?.name ?? TRIAL.plan;
const trialPerk = `${TRIAL.days} jours de ${trialName} offerts`;
const trialHasCsv = namesWhere('gpsImport', (cell) => cell === true).includes(trialName);
const trialSentence = trialHasCsv
  ? `Les ${TRIAL.days} premiers jours sont au ${trialName}, import GPS compris.`
  : `Les ${TRIAL.days} premiers jours sont au ${trialName}.`;

const perks = [trialPerk, 'Sans carte', 'Sans validation du club'];
const costAnswer = `Les prix sont publics : ${publicPrices}. ${gpsClaim} ${trialSentence} Sans carte.`;

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
  meta: {
    title: 'Alternative à Teamworks AMS et Opteamal | STRIVN',
    description:
      "Opteamal a rejoint Teamworks. Si vous réévaluez votre outil, STRIVN pilote la charge, le wellness et le GPS en quelques minutes, à prix public, sans projet d'intégration ni validation du club.",
    ogTitle: "STRIVN : l'alternative à Teamworks AMS et Opteamal pour le staff performance",
    ogDescription:
      "Le pilotage de la charge sans le prix d'entrée ni le projet d'intégration. Prix public, check-in par lien, import GPS Catapult et STATSports, en français.",
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
    lede: "GPS, RPE, wellness et planification en UA sur un seul écran. Avant chaque séance, STRIVN vous dit qui est prêt, qui surveiller et qui alléger. Vous créez l'espace aujourd'hui, vous importez votre première séance dans la foulée.",
    primaryCta: 'Créer mon espace',
    secondaryCta: 'Demander une démo',
    secondaryHref: mail('Demande de démo STRIVN'),
    perks,
    panelAria: 'Exemple de lecture STRIVN avant séance',
    columns: ['Joueur', 'ACWR', 'Sommeil', 'Lecture'] as const,
    proposed: 'Proposé · L. Moreau :',
    proposal: '3e semaine au-dessus du seuil. Volume −30 % à la prochaine séance, sans sprint.',
    sources: 'Sources · GPS dernière séance · RPE · wellness 16/18 · plan S12',
    readings: { ready: 'Prêt', watch: 'Surveiller', risk: 'Alléger' } as const,
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
      body: "Teamworks AMS est une suite solide, pensée pour les grandes structures. Si elle couvre vos besoins, rester est un choix logique. Si vous cherchez un outil plus léger, à prix public et opérationnel dès cette semaine, comparez avant de vous engager.",
      questions: [
        'Quel budget annuel pour votre staff ?',
        'Qui porte la mise en place, et en combien de temps ?',
        'Vos joueurs devront-ils installer une nouvelle app ?',
      ],
    },
    /**
     * TODO(validate): migration offer. The copy below is published. Confirm
     * we will import CSV history, map columns with the staff, and that
     * players can answer by link before this offer is promoted.
     */
    offer: {
      tag: 'Pour les clubs ex-Opteamal',
      title: 'On vous aide à migrer, données comprises.',
      body: "Vous repartez avec votre historique, pas d'une page blanche.",
      points: [
        { lead: "Import de l'historique en CSV", rest: ' : charge, RPE, wellness et exports GPS passés.' },
        { lead: 'Aide à la migration', rest: ' : nous faisons la correspondance des colonnes avec vous, une fois.' },
        { lead: 'Vos joueurs répondent par lien', rest: ', sans app à installer.' },
      ],
      cta: 'Parler de ma migration',
      href: mail('Migration depuis Opteamal'),
    },
  },
  compare: {
    id: 'comparatif',
    eyebrow: 'Comparatif',
    title: 'STRIVN et Teamworks AMS, point par point.',
    lede: "Deux approches différentes. Teamworks AMS est une plateforme d'entreprise configurable ; STRIVN est l'outil du staff performance, prêt à l'emploi.",
    columns: { criterion: 'Critère', strivn: 'STRIVN', ams: 'Teamworks AMS' },
    rows: [
      { criterion: 'Mise en place', strivn: 'Quelques minutes, en libre-service', ams: "Projet d'implémentation" },
      { criterion: 'Prix', strivn: `Public : ${publicPrices}`, ams: 'Sur devis' },
      { criterion: 'Accord du club', strivn: 'Aucune validation nécessaire', ams: 'Vente accompagnée par un commercial' },
      { criterion: 'Check-in joueurs', strivn: 'Par lien, sans app, en 20 secondes, relance automatique', ams: 'Formulaires configurables' },
      {
        criterion: 'Import GPS',
        strivn: gpsClaim,
        ams: 'Plus de 100 intégrations',
      },
      { criterion: 'ACWR, monotonie, readiness', strivn: 'Natifs, fenêtre 7/28 jours recalculée chaque nuit', ams: 'Configurables via tableaux de bord' },
      { criterion: 'Planification en UA', strivn: 'Cible vs réalisé, joueur par joueur', ams: 'Configurable' },
      {
        criterion: "Éditeur d'exercices animés",
        strivn: 'Foot, hand, rugby, basket, volley ; export PNG et vidéo',
        ams: 'Non mis en avant',
        amsMuted: true,
      },
      {
        criterion: 'Bord de terrain hors ligne',
        strivn: 'Présences, chrono par bloc, synchro au retour du réseau',
        ams: 'Non mis en avant',
        amsMuted: true,
      },
      {
        criterion: 'Assistant IA',
        strivn: 'Réponses sourcées et rapport hebdomadaire automatique',
        ams: 'Non communiqué',
        amsMuted: true,
      },
      { criterion: 'Langue', strivn: 'Français natif', ams: 'Multilingue, orienté anglais' },
    ] satisfies CompareRow[],
    fair: [
      {
        tag: 'Point fort AMS',
        title: 'Médical et retour au jeu',
        body: 'Teamworks AMS propose un module médical complet. Sur STRIVN, le suivi médical reste volontairement limité.',
      },
      {
        tag: 'Point fort AMS',
        title: 'Configurabilité des grandes structures',
        body: 'Formulaires, tableaux de bord, API : AMS se paramètre pour des fédérations et des organisations multi-équipes.',
      },
      {
        tag: 'Notre choix',
        title: "Prêt à l'emploi pour le staff",
        body: "STRIVN fait le choix de calculs natifs et d'une prise en main immédiate, sans paramétrage préalable.",
      },
    ],
    note: "Comparatif établi à partir d'informations publiques au 14 octobre 2026.",
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
        a: 'Oui. Exportez vos données en CSV (charge, RPE, wellness, GPS) et importez-les dans STRIVN. Les colonnes sont reconnues au premier import puis mémorisées. Écrivez-nous à hello@strivn.net : nous faisons la première correspondance avec vous.',
        mailto: mail('Migration depuis Opteamal'),
      },
      {
        /**
         * TODO(validate): RGPD / data hosting. Replace the bracketed sentence
         * with the real hosting location, GDPR basis, DPA availability, and
         * retention. It is rendered on the page and in the FAQPage JSON-LD
         * until it is replaced.
         */
        q: 'Où sont hébergées nos données, et sont-elles conformes au RGPD ?',
        a: "[À VALIDER : localisation de l'hébergement, conformité RGPD, accord de traitement des données (DPA) disponible sur demande, export et suppression des données à tout moment.] Pour toute question : hello@strivn.net.",
        mailto: mail('Données et RGPD'),
      },
      {
        q: 'Quel est le délai de mise en place ?',
        a: "Quelques minutes : créez l'espace, ajoutez vos joueurs, importez votre première séance. Pas de projet d'intégration, pas de formation obligatoire.",
      },
      {
        q: "Faut-il l'accord du club ?",
        a: "Non. Vous créez l'espace, invitez le staff et définissez les droits de chacun, sans validation du club. Votre staff vous rejoint quand il voit vos premiers rapports.",
      },
      {
        q: 'Combien ça coûte, vraiment ?',
        a: costAnswer,
      },
      {
        q: 'Mes joueurs doivent-ils installer une application ?',
        a: 'Non. Un lien suffit pour répondre au wellness au réveil et au RPE après la séance. Vingt secondes, et la relance part seule.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Prêt cette semaine',
    title: 'Créez votre espace et importez votre première séance.',
    body: `${trialSentence} Votre staff vous rejoint quand il voit vos premiers rapports.`,
    primaryCta: 'Créer mon espace gratuitement',
    secondaryCta: 'Demander une démo',
    secondaryHref: mail('Demande de démo STRIVN'),
    fine: perks,
  },
  disclaimer:
    "Teamworks, Teamworks AMS et Opteamal sont des marques de leurs détenteurs respectifs. STRIVN n'est ni affilié à ces sociétés, ni approuvé par elles. Catapult, STATSports et WHOOP sont cités à titre de compatibilité. Les informations sur les autres solutions proviennent de sources publiques au 14 octobre 2026 et peuvent évoluer. Chiffres STRIVN au 18 septembre 2026.",
};
