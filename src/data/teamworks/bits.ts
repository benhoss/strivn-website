/**
 * Catalogue-derived figures for the Opteamal switch page, one locale at a time.
 * Amounts come from PLAN_PRICES via formatMoney. Plan names stay
 * Free / Amateur / Semi-Pro / Pro.
 *
 * TODO(validate): dedicated Open Graph image. The site-wide card ships until then.
 */

import {
  MATRIX,
  PLAN_PRICES,
  TRIAL,
  formatMoney,
  pricingContent,
  type Cell,
  type Locale,
  type MatrixRowKey,
  type PlanCode,
  type PricingContent,
} from '../pricingContent';
import type { LandingBits } from './types';

export const ALTERNATIVE_LOCALES: Locale[] = ['fr', 'en', 'nl', 'de', 'pt', 'es'];

export function alternativePath(locale: Locale): string {
  return `/${locale}/alternative-teamworks/`;
}

/** French URL. x-default, and the target of the old slugs. */
export const ALTERNATIVE_PATH = alternativePath('fr');
/**
 * Earlier slugs of this page: the first French one, then the Opteamal page
 * in each locale. `astro.config.mjs` redirects them here and keeps them out
 * of the sitemap.
 */
export const ALTERNATIVE_LEGACY_PATH = '/fr/alternative-teamworks-opteamal/';

const PLAN_ORDER: PlanCode[] = ['free', 'amateur', 'semi_pro', 'pro'];

const YEAR: Record<Locale, string> = {
  fr: '/an',
  en: '/year',
  nl: '/jaar',
  de: '/Jahr',
  pt: '/ano',
  es: '/año',
};

export const mail = (subject: string) =>
  `mailto:hello@strivn.net?subject=${encodeURIComponent(subject)}`;

function namesWhere(locale: Locale, key: MatrixRowKey, match: (cell: Cell) => boolean): string[] {
  const catalogue = pricingContent[locale];
  const row = MATRIX.flatMap((group) => group.rows).find((item) => item.key === key);
  if (!row) return [];
  return PLAN_ORDER.filter((_, index) => match(row.cells[index])).map(
    (code) => catalogue.matrix.planNames[code],
  );
}

function joinTiers(locale: Locale, names: string[]): string {
  const [a, b] = names;
  if (!a) return '';
  const both = Boolean(b);
  const phrase: Record<Locale, string> = both
    ? {
        fr: `au ${a} et au ${b}`,
        en: `on ${a} and ${b}`,
        nl: `op ${a} en ${b}`,
        de: `bei ${a} und ${b}`,
        pt: `no ${a} e no ${b}`,
        es: `en ${a} y en ${b}`,
      }
    : {
        fr: `au ${a}`,
        en: `on ${a}`,
        nl: `op ${a}`,
        de: `bei ${a}`,
        pt: `no ${a}`,
        es: `en ${a}`,
      };
  return phrase[locale];
}

function priceClause(locale: Locale, code: PlanCode, name: string, quote?: string): string {
  const catalogue = pricingContent[locale];
  const { monthly, yearly } = PLAN_PRICES[code];
  if (monthly === null) {
    const quoted = (quote ?? catalogue.matrix.cells.onQuote).toLocaleLowerCase(locale);
    return `${name} ${quoted}`;
  }
  if (monthly === 0) return `${name} ${formatMoney(0, locale)}`;
  const perYear = yearly ? ` (${formatMoney(yearly, locale)}${YEAR[locale]})` : '';
  return `${name} ${formatMoney(monthly, locale)}${catalogue.plans.perMonth}${perYear}`;
}

const GPS_FILES: Record<Locale, (tiers: string) => string> = {
  fr: (tiers) =>
    `Import de fichiers GPS (CSV, XLSX, Catapult, STATSports, traces SPT / GameTraka), ${tiers}. Pas de connecteur en direct, pas d'API publique.`,
  en: (tiers) =>
    `GPS file import (CSV, XLSX, Catapult, STATSports, SPT / GameTraka traces), ${tiers}. No live connector, no public API.`,
  nl: (tiers) =>
    `Import van GPS-bestanden (CSV, XLSX, Catapult, STATSports, SPT- / GameTraka-traces), ${tiers}. Geen live koppeling, geen publieke API.`,
  de: (tiers) =>
    `GPS-Dateiimport (CSV, XLSX, Catapult, STATSports, SPT- / GameTraka-Traces), ${tiers}. Kein Direktanschluss, keine öffentliche API.`,
  pt: (tiers) =>
    `Importação de ficheiros GPS (CSV, XLSX, Catapult, STATSports, traços SPT / GameTraka), ${tiers}. Sem ligação direta, sem API pública.`,
  es: (tiers) =>
    `Importación de archivos GPS (CSV, XLSX, Catapult, STATSports, trazas SPT / GameTraka), ${tiers}. Sin conector directo, sin API pública.`,
};

const TRIAL_PERK: Record<Locale, (days: number, name: string) => string> = {
  fr: (days, name) => `${days} jours de ${name} offerts`,
  en: (days, name) => `${days} days of ${name}, on us`,
  nl: (days, name) => `${days} dagen ${name} gratis`,
  de: (days, name) => `${days} Tage ${name} kostenlos`,
  pt: (days, name) => `${days} dias de ${name} grátis`,
  es: (days, name) => `${days} días de ${name} gratis`,
};

const TRIAL_WITH_GPS: Record<Locale, (days: number, name: string) => string> = {
  fr: (days, name) => `Les ${days} premiers jours sont au ${name}, import de fichiers GPS compris.`,
  en: (days, name) => `The first ${days} days are on ${name}, GPS file import included.`,
  nl: (days, name) => `De eerste ${days} dagen zijn ${name}, met import van GPS-bestanden.`,
  de: (days, name) => `Die ersten ${days} Tage laufen auf ${name}, GPS-Dateiimport inbegriffen.`,
  pt: (days, name) => `Os primeiros ${days} dias são ${name}, com importação de ficheiros GPS.`,
  es: (days, name) => `Los primeros ${days} días son ${name}, con importación de archivos GPS.`,
};

const TRIAL_PLAIN: Record<Locale, (days: number, name: string) => string> = {
  fr: (days, name) => `Les ${days} premiers jours sont au ${name}.`,
  en: (days, name) => `The first ${days} days are on ${name}.`,
  nl: (days, name) => `De eerste ${days} dagen zijn ${name}.`,
  de: (days, name) => `Die ersten ${days} Tage laufen auf ${name}.`,
  pt: (days, name) => `Os primeiros ${days} dias são ${name}.`,
  es: (days, name) => `Los primeros ${days} días son ${name}.`,
};

const NO_CARD: Record<Locale, string> = {
  fr: 'Sans carte',
  en: 'No card',
  nl: 'Zonder kaart',
  de: 'Ohne Karte',
  pt: 'Sem cartão',
  es: 'Sin tarjeta',
};

const NO_CLUB: Record<Locale, string> = {
  fr: 'Sans validation du club',
  en: 'No club approval',
  nl: 'Zonder goedkeuring van de club',
  de: 'Ohne Freigabe des Klubs',
  pt: 'Sem aprovação do clube',
  es: 'Sin aprobación del club',
};

export function landingBits(locale: Locale): LandingBits {
  const catalogue = pricingContent[locale];
  const publicPrices = catalogue.plans.items
    .map((plan) => priceClause(locale, plan.code, plan.name, plan.quotePrice))
    .join(', ');

  const gpsNames = namesWhere(locale, 'gpsImport', (cell) => cell === true);
  const gpsTiers = joinTiers(locale, gpsNames);
  const trialPlan = catalogue.plans.items.find((plan) => plan.code === TRIAL.plan);
  const trialName = trialPlan?.name ?? TRIAL.plan;
  const trialHasCsv = gpsNames.includes(trialName);
  const trialSentence = (trialHasCsv ? TRIAL_WITH_GPS : TRIAL_PLAIN)[locale](TRIAL.days, trialName);
  const trialPerk = TRIAL_PERK[locale](TRIAL.days, trialName);

  return {
    publicPrices,
    gpsTiers,
    gpsFiles: GPS_FILES[locale](gpsTiers),
    trialDays: TRIAL.days,
    trialSentence,
    trialPerk,
    perks: [trialPerk, NO_CARD[locale], NO_CLUB[locale]],
  };
}

/** Catalogue bullets that over-claim GPS connectors or a generic wearable sync. */
const GPS_PREFIX: Record<Locale, string> = {
  fr: 'Import GPS par CSV',
  en: 'GPS import by CSV',
  nl: 'GPS-import via CSV',
  de: 'GPS-Import per CSV',
  pt: 'Importação GPS por CSV',
  es: 'Importación GPS por CSV',
};

const GPS_LINE: Record<Locale, string> = {
  fr: 'Import de fichiers GPS : CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Pas de connecteur en direct.',
  en: 'GPS file import: CSV, XLSX, Catapult, STATSports, SPT / GameTraka. No live connector.',
  nl: 'Import van GPS-bestanden: CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Geen live koppeling.',
  de: 'GPS-Dateiimport: CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Kein Direktanschluss.',
  pt: 'Importação de ficheiros GPS: CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Sem ligação direta.',
  es: 'Importación de archivos GPS: CSV, XLSX, Catapult, STATSports, SPT / GameTraka. Sin conector directo.',
};

const WEARABLE: Record<Locale, string> = {
  fr: 'Synchronisation des objets connectés',
  en: 'Wearable sync',
  nl: 'Synchronisatie van wearables',
  de: 'Synchronisation von Wearables',
  pt: 'Sincronização de wearables',
  es: 'Sincronización de wearables',
};

const WEARABLE_LINE: Record<Locale, string> = {
  fr: 'WHOOP peut préremplir le check-in',
  en: 'WHOOP can prefill the check-in',
  nl: 'WHOOP kan de check-in voorinvullen',
  de: 'WHOOP kann den Check-in vorausfüllen',
  pt: 'O WHOOP pode pré-preencher o check-in',
  es: 'WHOOP puede rellenar el check-in de antemano',
};

const UPCOMING: Record<Locale, string> = {
  fr: 'À venir',
  en: 'Upcoming',
  nl: 'Binnenkort',
  de: 'In Vorbereitung',
  pt: 'Em preparação',
  es: 'En preparación',
};

export function plansForLanding(
  plans: PricingContent['plans'],
  locale: Locale,
): PricingContent['plans'] {
  return {
    ...plans,
    items: plans.items.map((plan) => ({
      ...plan,
      features: plan.features.flatMap((line) => {
        if (line.startsWith(UPCOMING[locale])) return [];
        if (line.startsWith(GPS_PREFIX[locale])) return [GPS_LINE[locale]];
        if (line === WEARABLE[locale]) return [WEARABLE_LINE[locale]];
        return [line];
      }),
    })),
  };
}
