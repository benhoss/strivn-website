/**
 * Whole sections of existing pages the generated website may insert, by id,
 * with their own copy (src/lib/compose/catalog.json describes them to the
 * composer). Each entry is the component and the props its own page gives it,
 * so a band renders exactly as it does where it was written.
 *
 * Left out after the 2026-11-01 audit: HomeBoard (its script would not run
 * on a band injected after load), SolCompo (« les modules ci-dessous » only
 * reads right on its own page), and every hero, pricing, FAQ and final-CTA band.
 */
import type { Locale } from '../../data/landingContent';
import { homeContent } from '../../data/homeContent';
import { scPageContent } from '../../data/scPageContent';
import { solutionsContent } from '../../data/solutionsContent';
import HomeImport from '../../components/home/HomeImport.astro';
import HomeReadiness from '../../components/home/HomeReadiness.astro';
import HomeMicrocycle from '../../components/home/HomeMicrocycle.astro';
import HomePlayers from '../../components/home/HomePlayers.astro';
import HomeAssistant from '../../components/home/HomeAssistant.astro';
import HomeLive from '../../components/home/HomeLive.astro';
import ScDaily from '../../components/sc/ScDaily.astro';
import ScMetrics from '../../components/sc/ScMetrics.astro';
import ScLoadPlanning from '../../components/sc/ScLoadPlanning.astro';
import ScLibrary from '../../components/sc/ScLibrary.astro';
import ScStrength from '../../components/sc/ScStrength.astro';
import ScTests from '../../components/sc/ScTests.astro';
import ScReports from '../../components/sc/ScReports.astro';
import SolRoles from '../../components/sol/SolRoles.astro';

type Band = { component: any; props: (locale: Locale) => Record<string, unknown> };

export const BANDS: Record<string, Band> = {
  'home-import': { component: HomeImport, props: (l) => ({ c: homeContent[l].import }) },
  'home-readiness': { component: HomeReadiness, props: (l) => ({ c: homeContent[l].readiness, status: homeContent[l].status, pct: homeContent[l].pct }) },
  'home-microcycle': { component: HomeMicrocycle, props: (l) => ({ c: homeContent[l].plan, status: homeContent[l].status, pct: homeContent[l].pct }) },
  'home-players': { component: HomePlayers, props: (l) => ({ c: homeContent[l].playerApp, pct: homeContent[l].pct }) },
  'home-assistant': { component: HomeAssistant, props: (l) => ({ c: homeContent[l].assistant, pct: homeContent[l].pct }) },
  'home-live': { component: HomeLive, props: (l) => ({ c: homeContent[l].live }) },
  'sc-daily': { component: ScDaily, props: (l) => ({ daily: scPageContent[l].daily }) },
  'sc-metrics': { component: ScMetrics, props: (l) => ({ metrics: scPageContent[l].metrics }) },
  'sc-load-planning': { component: ScLoadPlanning, props: (l) => ({ planning: scPageContent[l].planning }) },
  'sc-library': { component: ScLibrary, props: (l) => ({ library: scPageContent[l].library }) },
  'sc-strength': { component: ScStrength, props: (l) => ({ strength: scPageContent[l].strength }) },
  'sc-tests': { component: ScTests, props: (l) => ({ tests: scPageContent[l].tests }) },
  'sc-reports': { component: ScReports, props: (l) => ({ reports: scPageContent[l].reports }) },
  'sol-roles': { component: SolRoles, props: (l) => ({ locale: l, roles: solutionsContent[l].roles }) },
};
