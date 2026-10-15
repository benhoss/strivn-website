/**
 * Switch page in the six site locales: /{locale}/alternative-opteamal/
 *
 * Aimed at clubs still on Opteamal, and written to make them switch. Prices,
 * plan names and the trial come from the catalogue. STRIVN feature claims
 * follow the app audit. The only claims about the other side come from
 * Teamworks' own 18 Dec 2025 announcement (Opteamal partners move onto the
 * Teamworks platform, built for 6,500+ elite organizations) and from their
 * public pages (quote-only pricing, sales-led sign-up).
 *
 * Open item, marked TODO(validate) where the text lives: the Open Graph image
 * (the site-wide card until a dedicated one exists).
 *
 * Do not add a hosting country, at-rest encryption, a DPA, or a STRIVN
 * certification, and do not list what STRIVN lacks on those points either:
 * the page argues the switch. The old French URL redirects to the French page.
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
