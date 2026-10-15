/**
 * Switch page in the six site locales: /{locale}/alternative-teamworks/
 *
 * Aimed at clubs on Teamworks, clubs weighing Teamworks, and Opteamal clubs
 * that Teamworks is moving onto its platform. Written to make them choose
 * STRIVN. Prices, plan names and the trial come from the catalogue. STRIVN
 * feature claims follow the app audit. Claims about Teamworks come only from
 * its own pages, as of 15 Oct 2026: "The Operating System for Sports",
 * "Elite Sports Orgs", 6,500+ elite organizations, "Get a Demo" as the only
 * way in (no public pricing page), and the 18 Dec 2025 Opteamal announcement.
 * Do not compare integrations: Teamworks AMS announces 100+.
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
} from './teamworks/bits';
import { dePage } from './teamworks/de';
import { enPage } from './teamworks/en';
import { esPage } from './teamworks/es';
import { frPage } from './teamworks/fr';
import { nlPage } from './teamworks/nl';
import { ptPage } from './teamworks/pt';
import type { SwitchPage } from './teamworks/types';

export {
  ALTERNATIVE_LEGACY_PATH,
  ALTERNATIVE_LOCALES,
  ALTERNATIVE_PATH,
  alternativePath,
  plansForLanding,
};
export type { SwitchPage };

export const alternativeTeamworks: Record<Locale, SwitchPage> = {
  fr: frPage(landingBits('fr')),
  en: enPage(landingBits('en')),
  nl: nlPage(landingBits('nl')),
  de: dePage(landingBits('de')),
  pt: ptPage(landingBits('pt')),
  es: esPage(landingBits('es')),
};
