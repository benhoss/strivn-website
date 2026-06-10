---
title: "feat: Add STRIVN website subpages"
type: feat
status: completed
date: 2026-06-04
origin: docs/plans/2026-06-03-001-feat-website-operations-repositioning-plan.md
---

# feat: Add STRIVN website subpages

## Summary

Add focused STRIVN marketing subpages that deepen the existing landing-page story without bloating the landing page. The first wave should cover the highest-intent routes: Coaches, Clubs, and Pricing. The same reusable system should also support Communication, Medical, and Sessions so the site can expand without duplicating page structure.

The subpages should preserve the current positioning: STRIVN is a free operations platform for one-team coaches, while Club and Club Pro are future organization plans for multi-team coordination.

---

## Problem Frame

The landing page introduces the full STRIVN promise, but visitors with specific intent need deeper proof paths. Individual coaches need reassurance that they can start for free without club approval. Club decision-makers need the paid expansion path separated from the free coach workflow. Pricing needs a dedicated page so the free Coach plan and coming-soon club tiers remain unambiguous.

The implementation should create a scalable subpage architecture rather than manually building separate one-off pages. It should support French, Belgian Dutch, and English from the start, matching the existing locale model.

---

## Requirements

- R1. Create localized subpages for Coaches, Clubs, Pricing, Communication, Medical, and Sessions.
- R2. Give Coaches, Clubs, and Pricing full conversion depth in the first wave; Communication, Medical, and Sessions may use lighter feature-page depth but must still be complete, useful, and CTA-driven.
- R3. Keep all pages aligned with `PRODUCT.md`: calm, precise, coach-centered, and free-coach-first.
- R4. Use the existing language model: French, Belgian Dutch, and English.
- R5. Preserve French as the default route family while keeping explicit `/fr/`, `/nl/`, and `/en/` routes.
- R6. Do not invent Club or Club Pro prices, launch dates, backend billing rules, or app behavior not already promised on the landing page.
- R7. Each page must have localized metadata, canonical URL, and `hreflang` alternates.
- R8. Each page must build successfully and be browser-verified on desktop and mobile.

---

## Copy Strategy

- **Coaches:** Help an individual coach believe they can start alone, for free, this week. Primary CTA: “Create your team for free.” Secondary CTA: “See pricing.”
- **Clubs:** Help a club decision-maker understand why payment starts at multi-team coordination, not basic coach features. Primary CTA: “Request a club demo.” Secondary CTA: “See what coaches get for free.”
- **Pricing:** Remove plan anxiety. Make Coach feel complete and Club/Club Pro feel organizational. Primary CTA: “Create your team for free.” Secondary CTA: “Request a club demo.”
- **Communication:** Explain generated messages, channel choice, and reply links without making WhatsApp the product. Primary CTA: “Create your first event.”
- **Medical:** Build trust around injury visibility and staff handoff without making STRIVN feel like a medical portal. Primary CTA: “Start tracking your team.”
- **Sessions:** Show training preparation as connected to real team state, not a standalone drill library. Primary CTA: “Prepare your first session.”

Every subpage must answer five visitor questions in plain language:

- Who is this page for?
- What weekly pain does STRIVN remove?
- What changes after using STRIVN?
- Why is this better than WhatsApp, spreadsheets, isolated training tools, or club-first software?
- What should the visitor do next?

Use workflow proof instead of fabricated credibility. Do not invent testimonials, customer numbers, usage stats, or external logos. When a page needs proof, show concrete product examples: scattered messages becoming attendance, injury notes attached to players, event reply links updating the coach view, or club coordination across teams.

---

## Key Technical Decisions

- **Use one reusable subpage component:** Build a generic subpage renderer instead of six page components. Content variation should come from structured data.
- **Keep content data separate from landing content:** Add `src/data/subpageContent.ts` so the landing stays focused and subpages can evolve independently.
- **Use stable shared slugs across locales:** Generate `/fr/coaches/`, `/nl/coaches/`, `/en/coaches/`, and matching paths for `clubs`, `pricing`, `communication`, `medical`, and `sessions`. Also generate French default aliases at `/coaches/`, `/clubs/`, `/pricing/`, `/communication/`, `/medical/`, and `/sessions/`.
- **Share SEO helpers:** Extract or centralize locale path and alternate generation so landing and subpages do not drift.
- **Do not overload the landing topbar:** Add subpage links primarily through footer/deep-link surfaces first. If adding header links, keep them compact and avoid crowding the existing landing section navigation.

---

## High-Level Technical Design

```mermaid
flowchart TB
  A[subpageContent.ts] --> B[MarketingSubpage.astro]
  B --> C[/fr/:slug and /:slug default French aliases]
  B --> D[/nl/:slug]
  B --> E[/en/:slug]
  F[BaseLayout.astro] --> B
  G[locale SEO helper] --> B
  G --> H[PremiumLanding.astro]
```

The subpage system should treat content as the source of truth, route files as thin static-path adapters, and `BaseLayout.astro` as the shared SEO shell.

---

## Public Routes

- `/coaches/`, `/fr/coaches/`, `/nl/coaches/`, `/en/coaches/`
- `/clubs/`, `/fr/clubs/`, `/nl/clubs/`, `/en/clubs/`
- `/pricing/`, `/fr/pricing/`, `/nl/pricing/`, `/en/pricing/`
- `/communication/`, `/fr/communication/`, `/nl/communication/`, `/en/communication/`
- `/medical/`, `/fr/medical/`, `/nl/medical/`, `/en/medical/`
- `/sessions/`, `/fr/sessions/`, `/nl/sessions/`, `/en/sessions/`

Default aliases use French content and should point canonical URLs to the explicit `/fr/<slug>/` route unless the project later decides to canonicalize default French routes.

---

## Implementation Units

### U1. Define Subpage Content Model

- **Goal:** Create the structured data that drives all subpages in all locales.
- **Requirements:** R1, R3, R4, R6
- **Dependencies:** None
- **Files:**
  - `src/data/subpageContent.ts`
  - `src/data/landingContent.ts`
- **Approach:** Define `SubpageSlug`, `pageIntent`, page metadata, hero copy, workflow proof, narrative sections, feature blocks, FAQs, related links, and primary/secondary CTA fields. Add content for all six subpages in French, Belgian Dutch, and English. Reuse terms and promises from the landing page rather than creating new product claims.
- **Patterns to follow:** Mirror the locale typing style already used by `src/data/landingContent.ts`.
- **Test scenarios:**
  - Every subpage slug has content for `fr`, `nl`, and `en`.
  - Every subpage has one clear primary CTA that matches the Copy Strategy section.
  - Coach page states that the one-team workflow is free and complete.
  - Clubs page frames paid value around organization-level coordination.
  - Pricing page does not contain fixed Club or Club Pro prices.
  - Communication page treats WhatsApp as one channel among web, mobile, and email.
  - Medical and Sessions pages connect their feature areas back to the full team-operations workflow.
- **Verification:** TypeScript build catches missing locale or slug content.

### U2. Build Reusable Subpage Renderer

- **Goal:** Add one component that renders every subpage with STRIVN’s existing design language.
- **Requirements:** R1, R3, R7, R8
- **Dependencies:** U1
- **Files:**
  - `src/components/MarketingSubpage.astro`
  - `src/layouts/BaseLayout.astro`
- **Approach:** Create a page shell with compact logo/header, language switcher, hero, workflow proof section, narrative/product proof sections, FAQ, related-page links, and final CTA. Use full-width sections and restrained surfaces; avoid card-heavy landing-page clones. Pass localized title, description, canonical path, and alternates into `BaseLayout`.
- **Patterns to follow:** Match typography, dark atmosphere, CTA behavior, and motion restraint from `src/components/PremiumLanding.astro` and `DESIGN.md`.
- **Test scenarios:**
  - A subpage renders with correct localized content and active language state.
  - CTA links point to `https://app.strivn.net` for free-start actions and `mailto:hello@strivn.ai` for demo/contact actions.
  - Related links stay within the same locale.
  - Long Dutch headings wrap without overlapping product proof.
  - The page shell can render first-wave pages with deeper objection-handling sections and lighter feature pages without layout hacks.
- **Verification:** Browser-check Coaches, Clubs, and Pricing in all three locales on desktop and mobile.

### U3. Generate Localized Routes

- **Goal:** Add static Astro routes for locale-prefixed subpages and default French aliases.
- **Requirements:** R1, R4, R5, R7, R8
- **Dependencies:** U1, U2
- **Files:**
  - `src/pages/[slug].astro`
  - `src/pages/[locale]/[slug].astro`
  - `src/data/subpageContent.ts`
- **Approach:** Use `getStaticPaths` to generate only the known subpage slugs and locales. Render French content for root aliases and locale-specific content for `/fr/`, `/nl/`, and `/en/`. Ensure invalid slugs/locales are not generated.
- **Patterns to follow:** Keep route files thin like the existing locale index pages.
- **Test scenarios:**
  - `npm run build` generates every route listed in Public Routes.
  - `/nl/pricing/` renders Dutch content and has `lang="nl"`.
  - `/en/clubs/` renders English content and has `lang="en"`.
  - `/coaches/` renders French default content and points canonical/alternates consistently.
- **Verification:** Inspect generated `dist` output and spot-check browser routes.

### U4. Add Navigation and Cross-Linking

- **Goal:** Make the new subpages discoverable without diluting the landing page.
- **Requirements:** R2, R3, R5
- **Dependencies:** U1, U2, U3
- **Files:**
  - `src/components/PremiumLanding.astro`
  - `src/components/MarketingSubpage.astro`
  - `src/data/landingContent.ts`
  - `src/data/subpageContent.ts`
- **Approach:** Add footer or “Explore” links to Coaches, Clubs, and Pricing first. Within subpages, frame related links as next visitor questions, not generic cards: Coaches to “Need to convince the club?”; Clubs to “See what coaches get for free”; Pricing to “Starting alone?” and “Planning for the whole club?”; Communication to “See how coaches start free”; Medical and Sessions to “Manage the full team workflow.” Keep the landing topbar focused on landing sections unless implementation finds enough space for a compact secondary menu.
- **Patterns to follow:** Use existing footer column and CTA patterns from `PremiumLanding.astro`.
- **Test scenarios:**
  - Landing footer exposes Coaches, Clubs, and Pricing in all locales.
  - Language switching on a subpage stays on the same slug.
  - Related links preserve locale.
  - Related-link labels describe the visitor’s next question or decision.
  - No route sends Dutch or English users back to French unexpectedly except the explicit default alias routes.
- **Verification:** Browser-click representative links from `/nl/`, `/nl/coaches/`, and `/en/pricing/`.

### U5. Browser QA and Build Verification

- **Goal:** Prove the subpage system compiles and the most important pages are visually sound.
- **Requirements:** R2, R7, R8
- **Dependencies:** U1, U2, U3, U4
- **Files:**
  - `package.json`
  - `src/components/MarketingSubpage.astro`
  - `src/data/subpageContent.ts`
- **Approach:** Run the Astro build, then browser-check the first-wave pages: Coaches, Clubs, and Pricing across `fr`, `nl`, and `en`. Spot-check Communication, Medical, and Sessions in one locale each. Verify desktop and mobile viewports for heading fit, CTA visibility, language switching, canonical/alternate tags, and no obvious untranslated strings.
- **Patterns to follow:** Use the same browser verification standard used for the Dutch landing-page locale.
- **Test scenarios:**
  - `npm run build` completes successfully.
  - Sitemap includes the generated subpage routes.
  - Desktop and mobile layouts do not overlap or clip key text.
  - Dutch pages contain no accidental French/English UI labels except brand terms and product names.
  - Pricing page contains no WhatsApp message packs or invented paid prices.
  - Each first-wave page clearly answers: audience, pain removed, outcome, alternative comparison, and next action.
- **Verification:** Capture at least one desktop and one mobile screenshot for the Dutch first-wave pages if visual regressions are found; otherwise summarize browser findings.

---

## Scope Boundaries

### Deferred to Follow-Up Work

- Localized slug translations such as `/nl/prijzen/` or `/fr/tarifs/`.
- Blog, changelog, customer stories, help center, or legal pages.
- App-level localization, billing enforcement, plan-gating, or RSVP implementation changes.
- Automated visual regression test suite.

### Outside This Product Identity

- Positioning STRIVN as WhatsApp-first.
- Making Club or Club Pro sound required for one-team coach workflows.
- Adding fixed paid prices or launch commitments for coming-soon tiers.

---

## Risks and Dependencies

- **Content volume drift:** Six subpages across three locales can become repetitive. Mitigation: use distinct page jobs and cross-links rather than copying landing sections wholesale.
- **Generic conversion argument:** A reusable component can make the pages feel structurally identical. Mitigation: require a distinct `pageIntent`, CTA, objection set, and workflow proof for each slug.
- **Route sprawl:** Default aliases plus localized routes create many URLs. Mitigation: generate routes from one slug list and centralize canonical/alternate logic.
- **Dutch layout pressure:** Belgian Dutch strings run long. Mitigation: include mobile and desktop Dutch checks for every first-wave page.
- **Landing distraction:** Too many new links can weaken the landing conversion path. Mitigation: expose the first-wave pages in footer/deep-link surfaces first and keep the landing topbar focused.

---

## Sources and Research

- `docs/plans/2026-06-03-001-feat-website-operations-repositioning-plan.md` defines the current positioning and marketing constraints.
- `PRODUCT.md` defines audience, purpose, tone, and product boundaries.
- `DESIGN.md` defines visual rules for STRIVN’s calm, precise operations-room style.
- `src/components/PremiumLanding.astro` and `src/data/landingContent.ts` provide the current locale, SEO, CTA, and visual patterns to follow.
