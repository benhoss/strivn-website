/**
 * Switch page in the six site locales: /{locale}/alternative-opteamal/
 *
 * Aimed at clubs still on Opteamal. Prices, plan names and the trial come
 * from the catalogue. Strivn feature claims follow the app audit. Opteamal
 * and Teamworks cells use only public facts: the 18 Dec 2025 acquisition,
 * quote-only pricing, enterprise sales, and Teamworks AMS (100+ integrations,
 * medical module, ISO 27001 / SOC 2). Anything else on their side is
 * "not public", not an invented gap.
 *
 * Open items, marked TODO(validate) where the text lives:
 *   - migration-help offer (published, pending a yes from the business)
 *   - Open Graph image (the site-wide card until a dedicated one exists)
 *
 * Do not add a hosting country, at-rest encryption, a DPA, or a Strivn
 * certification. The old French URL redirects to the French page.
 * Not linked from NAV or the footers.
 */

import type { Locale } from './pricingContent';
import {
  ALTERNATIVE_LEGACY_PATH,
  ALTERNATIVE_LOCALES,
  ALTERNATIVE_PATH,
  alternativePath,
  landingBits,
  plansForLanding,
} from './opteamal/bits';
import { dePage } from './opteamal/de';
import { enPage } from './opteamal/en';
import { esPage } from './opteamal/es';
import { frPage } from './opteamal/fr';
import { nlPage } from './opteamal/nl';
import { ptPage } from './opteamal/pt';
import type { SwitchPage } from './opteamal/types';

export {
  ALTERNATIVE_LEGACY_PATH,
  ALTERNATIVE_LOCALES,
  ALTERNATIVE_PATH,
  alternativePath,
  plansForLanding,
};
export type { SwitchPage };

export const alternativeOpteamal: Record<Locale, SwitchPage> = {
  fr: frPage(landingBits('fr')),
  en: enPage(landingBits('en')),
  nl: nlPage(landingBits('nl')),
  de: dePage(landingBits('de')),
  pt: ptPage(landingBits('pt')),
  es: esPage(landingBits('es')),
};
