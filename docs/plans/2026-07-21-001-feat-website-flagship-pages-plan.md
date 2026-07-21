---
title: "feat: Flagship feature pages & youth audience page"
type: feat
status: completed
date: 2026-07-21
origin: docs/brainstorms/2026-07-21-website-missing-feature-pages-requirements.md
---

# feat: Flagship feature pages & youth audience page

## Overview

Add 5 pages to the marketing site in all 4 locales (fr/en/nl/de): four feature pages — **live** (séance + match en direct), **scouting**, **reports** (rapports IA), **player-app** — extending the features hub from 4 to 8 cards, plus one audience page — **Équipes de jeunes** — added to the Solutions menu. Update nav/footer and homepage cross-links, and fill screenshot-asset gaps with the existing capture tooling. Delivery is phased: the two pages matching the in-flight social campaigns (live, jeunes) ship first.

---

## Problem Frame

The product has outgrown the site: opponent scouting, live match with a public no-login viewer, live session running, the AI report builder, and the player native apps have no page or a single homepage-grid row. Two social campaigns in production (`launch-video/seance-direct/`, `launch-video/equipes-jeunes/`) point at capabilities with no landing URL. Pricing is explicitly untouched (strategy undefined). (see origin: docs/brainstorms/2026-07-21-website-missing-feature-pages-requirements.md)

---

## Requirements Trace

- R1. Single feature page covering live séance and live match (scoring, lineups, match-sheet import) → U2
- R2. Public no-login match viewer is the live page's headline differentiator → U2
- R3. Live page is the landing target for the séance-en-direct campaign → U2, Phase 1
- R4. Scouting feature page (reports, opponent rosters, clips/tags, public sharing) → U4
- R5. Reports feature page (AI report builder, PDF, shareable) → U5
- R6. Player-app feature page addressed to the coach as buyer → U6
- R7. Store download badges/links on the player-app page → U6 (link liveness deferred check)
- R8. Youth audience page in Solutions (parents/guardians, youth mode, public viewer for parents) → U3
- R9. Youth page is the landing target for the équipes-de-jeunes campaign → U3, Phase 1
- R10. All pages in 4 locales, FR copy first → enforced by `Record<Locale, …>` typing in every unit
- R11. Hub 4→8 cards, Solutions gains youth entry, homepage rows link to new pages → U2–U6 (hub cards), U3 (nav/footer), U7 (homepage)
- R12. Reuse existing templates and design system, no new visual language → U1 reuses ScPage carousel frames; all pages use FeaturePage/ScPage patterns
- R13. Existing register CTA everywhere; no fixed prices; plan-gated capabilities (WHOOP, GPS, WhatsApp automation) never promised as free → copy constraint on U2–U6
- R14. Visuals are real-app captures via existing tooling → U1 (showcase support), U8 (asset gap-fill)

**Origin actors:** A1 (head coach, primary visitor), A2 (parent/guardian), A3 (player), A4 (analyst/assistant)
**Origin flows:** F1 (campaign landing → matching page → register CTA), F2 (feature discovery via hub)
**Origin acceptance examples:** AE1 (parent opens live link, no account, sees live score — covers R2, R8), AE2 (WHOOP mentioned without free-plan claim or price — covers R13)

---

## Scope Boundaries

- No pricing page and no pricing content changes (origin decision, 2026-07-21).
- No dedicated pages for GPS/wearables, tests & mesures, programmes/bibliothèque, tactique, amendes, compétitions, standalone AI assistant.
- No campaign-specific one-off landing pages.
- Blog stays FR-only; no blog work; no product/app changes.
- Homepage hero "stage" panel is not modified — its rows are position-coupled to the convergence animation and gain no links (see Key Technical Decisions).
- Existing 4 feature pages' copy is untouched (they only gain new sibling-grid entries automatically).

### Deferred to Follow-Up Work

- Localized privacy/support pages for en/nl/de: already spun off as an independent session (task started 2026-07-21).
- Capturing the capture/deploy institutional learnings into `docs/solutions/` via `/ce-compound` after this lands (no knowledge base exists in-repo yet).

---

## Context & Research

### Relevant Code and Patterns

- `src/data/featuresContent.ts` — `FeatureSlug` union + `FEATURE_SLUGS` + `Record<Locale, FeaturesContent>`; hub cards come from `hub.cards`; adding a slug forces content for all 4 locales at compile time.
- `src/components/FeaturePage.astro` — generic renderer; builds symmetric alternates `/{loc}/features/<slug>/` + `x-default → fr`; JSON-LD FAQPage + BreadcrumbList; sibling grid = `FEATURE_SLUGS.filter(s => s !== slug)`.
- `src/components/FeatureVisual.astro` — CSS-drawn hero illustration per slug; `Record<FeatureSlug, …>` aria-labels and chips make new entries compile-mandatory; each slug needs a `{slug === 'x' && …}` markup block.
- `src/components/ScPage.astro` + `src/data/scContent.ts` — the audience-page pattern including the FR slug asymmetry (hardcoded `frPath`/`enPath`… consts, `switchHrefs`, alternates) and the screenshot-carousel `Showcase`/`Slide` types with `sc-frame--desktop`/`sc-frame--mobile` frames.
- `src/data/landingContent.ts` — nav (`links` with `children` for Solutions) and footer per locale; data-only edits, no component change for nav entries.
- `src/components/PremiumLanding.astro` — capabilities grid is data-driven (`c.capabilities.items: {title, text}[]`) but has **no hrefs today**; player-app section hardcodes `/screenshots/player-app-agenda.png`.
- Route stubs are 4-line wrappers: `src/pages/<loc>/features/<slug>.astro` → `<FeaturePage locale slug />`.
- `public/screenshots/` — PNG only, `<view>-fr.png` naming for FR (EN historically no suffix). **Already on disk:** `live-runner-{phone,tablet}-{board,compo,score}-fr.png`, `live-session-fr.png`, `live-session-presession-fr.png`, `scouting-module-fr.png`, `scouting-report-fr.png`, `scouting-report-phone-fr.png`, `reports-hub-fr.png`, `reports-selection-fr.png`, `player-app-agenda[-en].png`, `portal-{agenda,checkin,fitness,fitness-trends}[-fr].png`, `youth-guardians-card-fr.png`, `youth-team-setting-fr.png`.
- `tooling/media/` — capture pipeline (`run.sh`, `config.mjs`, `capture/*.mjs`); output resolves directly to `public/screenshots/`; runbook in `tooling/media/README.md` and `.claude/skills/strivn-media/SKILL.md`.
- Verification surface: `npm run build` only — no tests, no CI, no `astro check`. **A missing `public/` image path does not fail the build.**

### Institutional Learnings

- 2026-06-04 subpages plan (`docs/plans/2026-06-04-001-feat-website-subpages-plan.md`): follow its durable content bar (every page answers who / weekly pain / outcome / why better / next action; never invent testimonials, stats, prices, dates) but **not** its `[locale]/[slug]` dynamic-route design — current code uses per-locale static stubs. NL strings run long: check NL desktop + mobile on every page.
- Capture pipeline killers: `APP_URL` must match the capture port (else every route bounces to /login) and `rm public/hot` in the app or Playwright hangs; screenshot language = DB data language → `./data/setup-demo.sh <lang>` first; demo team is "AC Verel".
- Deploy: `./deploy.sh` builds from the main checkout — `git pull --ff-only origin main` there first or stale source ships. Assets referenced by campaigns must be deployed before posts link to them.
- Positioning (user feedback 2026-06-29): lead with the three pillars — centraliser / communiquer / gérer son groupe. Never frame as an admin tool; avoid the word "administratif".
- SEO audit (`docs/audits/audit-staffops-vs-strivn-2026-06-17.md`): full technical-SEO parity is a named competitive asset — every new page ships canonical, 4-locale hreflang + `x-default`, JSON-LD, OG cards via `SubpageLayout`. The audit predates the DE locale: verify DE alternates end-to-end.

### External References

- None — strong local patterns; external research skipped.

---

## Key Technical Decisions

- **English feature slugs across all locales** (`live`, `scouting`, `reports`, `player-app`): existing FR feature pages already use English slugs (`/fr/features/training-load`). Resolves the origin's slug question with the repo's own convention.
- **Youth slugs follow the ScPage asymmetry**: `/fr/equipes-jeunes/` + `/en|nl|de/youth-teams/`, with paths hardcoded as consts inside the page component exactly like `ScPage.astro` does for `preparateurs-physiques`/`sc-coaches`.
- **Optional `showcase` section added to FeaturePage** (U1): existing feature pages use only CSS-drawn `FeatureVisual` heroes and cannot display the app; origin R14 requires real-app visuals. Adding an optional `showcase?: Showcase[]` field (reusing ScPage's `Showcase`/`Slide` types and `sc-frame` carousel presentation) keeps the 4 existing pages byte-identical while letting new pages show real screenshots. This reuses existing visual language (R12) rather than inventing one.
- **Keep CSS-drawn `FeatureVisual` heroes for the 4 new slugs**: the Record types enforce it at compile time and it keeps hero consistency across all 8 feature pages; screenshots live in the showcase section instead.
- **Homepage hero stage stays untouched**: its rows are decorative and position-coupled to the convergence animation; cross-linking happens in the capabilities grid (new optional `href` per item) and the player section (links to the player-app page).
- **Prefer existing screenshots; capture only true gaps** (U8): most needed FR assets already exist on disk — the notable exception is the public match viewer, which has no capture and is a required Phase 1 item (see U8). New capture runs follow the strivn-media runbook and are a pre-deploy gate, not a blocker for writing pages.
- **Phase 1 = campaign pages**: live + jeunes (+ their assets and the showcase extension) deploy first because both campaigns are already in production and currently have no landing URL.

---

## Open Questions

### Resolved During Planning

- Feature slugs per locale: English slugs everywhere (repo convention).
- Youth slug asymmetry: `equipes-jeunes` (fr) / `youth-teams` (en, nl, de), per ScPage pattern.
- Homepage link mapping: capabilities items link only where a page exists — Présences & RSVP → communication, Infirmerie → medical, Charge & RPE → training-load, Séances & tactique → sessions, Rapports de match et de séance → reports, Programmes individuels → player-app; Tests & évaluations and Assistant IA stay unlinked (no page in scope).
- How feature pages show the real app: optional showcase section (see Key Technical Decisions), not a rework of FeatureVisual.

### Deferred to Implementation

- Store badge URLs (R7): verify against the app repo's `config/mobile.php` and the live store listings; if a store listing is not yet public, ship the page with "disponible sur iOS et Android" copy and QR/badge placeholders omitted — do not link dead URLs.
- Exact slide selection per showcase and whether any non-FR screenshot variants are needed: follow whatever ScPage currently does for en/nl/de before capturing new locale variants.
- `.fp-more__grid` sibling-grid CSS at 7 cards per page: check rendering once the first new slug exists; adjust only if it breaks.
- Final copy per locale: FR written first per unit, then en/nl/de in the same edit (typing forces simultaneous presence; quality pass on NL length at verification).
- Re-verify plan gating against the app repo's `config/billing.php` before finalizing any copy that touches free-plan claims — the gated list in R13 (WHOOP, GPS, WhatsApp automation) is a snapshot from the 2026-07-21 scan, not a constant.

### From 2026-07-21 review (resolved)

- [P1][adversarial] Non-FR showcase capture policy — **DECIDED 2026-07-21 (user): (a) EN captures per the ScPage convention** (unsuffixed `.png` for en/nl/de pages). Consequence: U8 includes the EN capture batch (~12-15 captures) plus an EN demo-DB reseed (`./data/setup-demo.sh en`), and the Phase 1 deploy gate includes EN variants of the live/youth slides, not just FR.

---

## High-Level Technical Design

> *This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce.*

Unit dependency graph:

```mermaid
flowchart LR
    U1[U1 showcase extension] --> U2[U2 live page]
    U1 --> U4[U4 scouting page]
    U1 --> U5[U5 reports page]
    U1 --> U6[U6 player-app page]
    U3[U3 youth audience page]
    U2 --> U7[U7 homepage cross-links]
    U4 --> U7
    U5 --> U7
    U6 --> U7
    U2 -.assets.-> U8[U8 asset gap-fill + pre-deploy check]
    U3 -.assets.-> U8
    U4 -.assets.-> U8
    U5 -.assets.-> U8
    U6 -.assets.-> U8

    subgraph Phase 1 — campaign pages
      U1
      U2
      U3
    end
    subgraph Phase 2 — product flagships
      U4
      U5
      U6
      U7
    end
```

U8 runs per phase: pages draft against existing assets; the gap-fill + referenced-file check gates each deploy.

---

## Implementation Units

- [x] U1. **FeaturePage showcase extension**

**Goal:** Feature pages can optionally display a real-app screenshot carousel, reusing ScPage's presentation.

**Requirements:** R12, R14

**Dependencies:** None

**Files:**
- Modify: `src/data/featuresContent.ts` (add optional `showcase` field to `FeatureContent`, reusing the `Showcase`/`Slide` shape from `src/data/scContent.ts` — consider extracting the shared types)
- Modify: `src/components/FeaturePage.astro` (render the section only when `showcase` is present, mirroring ScPage's `sc-frame--desktop`/`sc-frame--mobile` carousel markup and styles — including porting or extracting ScPage's client-side carousel script: scroll-snap index sync, prev/next, dots, `video[data-autoplay]` IntersectionObserver playback; the carousel is non-functional without it)

**Approach:**
- Optional field ⇒ the 4 existing feature pages must keep an unchanged rendered DOM (no showcase section in their output). Note: `inlineStylesheets: 'always'` means the inlined CSS/JS assets WILL change on every existing page once showcase styles/script are added to the component — byte-identity of built HTML is not achievable and is not the bar.
- Reuse, don't fork: same frame classes/CSS approach as ScPage so the visual language stays unified.

**Patterns to follow:**
- `src/components/ScPage.astro` showcase/carousel markup and frames; `src/data/scContent.ts` types.

**Test scenarios:**
- Happy path: a feature entry with a `showcase` of one desktop and one mobile slide → page renders the carousel with correct frame styles and alt text.
- Happy path: a multi-slide showcase → prev/next buttons and dots actually navigate the slides (the ported client script is wired, not just the markup).
- Edge case: feature entry without `showcase` → no showcase section in the output DOM; existing 4 pages' body markup unchanged when `<style>`/`<script>` tags are excluded from the comparison.
- Error path: none beyond TypeScript — an invalid slide shape fails `npm run build`.

**Verification:**
- `npm run build` passes; the 4 existing feature pages' rendered DOM (excluding inlined `<style>`/`<script>` assets) is unchanged, and no showcase section appears on them.

---

- [x] U2. **Live feature page (séance + match en direct)**

**Goal:** One page presents live séance (coach runs the session on the pitch) and live match (scoring, lineups, paper match-sheet import), with the public no-login viewer as headline differentiator; serves as the séance-en-direct campaign landing.

**Requirements:** R1, R2, R3, R10, R11 (hub card), R12, R13; F1; AE1

**Dependencies:** U1

**Files:**
- Modify: `src/data/featuresContent.ts` (extend `FeatureSlug` union + `FEATURE_SLUGS` with `live`; add `hub.cards` entry and `features.live` content ×4 locales, incl. showcase)
- Modify: `src/components/FeatureVisual.astro` (aria-labels + chips ×4 locales — compile-mandatory — plus a `{slug === 'live' && …}` illustration block)
- Create: `src/pages/fr/features/live.astro`, `src/pages/en/features/live.astro`, `src/pages/nl/features/live.astro`, `src/pages/de/features/live.astro`

**Approach:**
- Copy structure per `FeatureContent`: hero (promise: "ceux qui ne sont pas au bord du terrain suivent quand même"), benefits split across the two live modes, how-steps (préparer → lancer/scorer → tout le monde suit), FAQ (viewer sans compte ? quelles données visibles ? et si pas de réseau ?), finalCta.
- Showcase slides: a NEW capture of the public no-login match viewer (required Phase 1 item in U8) as the AE1 visual, plus existing `live-runner-tablet-board-fr.png`, `live-session-fr.png`, `live-session-presession-fr.png`. Caution: `live-runner-phone-score-fr.png` shows the coach's séance runner (coach-only controls: Pause, Terminer le bloc), NOT the public viewer — reuse it only captioned as the coach view.
- FeatureVisual brief: a live-match mini-panel — score line, "EN DIRECT" badge, and a spectators/viewer chip — so the hero echoes the public-viewer promise.
- Copy constraints: three-pillars positioning, no "administratif", no invented stats/dates, tone reference `launch-video/seance-direct/POST.md`.

**Patterns to follow:**
- Existing slug end-to-end (e.g., `sessions`): content block, FeatureVisual block, route stubs.

**Test scenarios:**
- Happy path: `/fr/features/live/` renders hero, showcase, FAQ; hub at `/fr/features/` shows 5 cards including live; register CTA points to `app.strivn.net/register?lang=fr`.
- Covers AE1. The public-viewer scenario (parent opens a shared link, no account, sees the live score) is explicitly shown — in copy and via the new public-viewer capture (not the coach-runner screenshot).
- Integration: language switcher on `/en/features/live/` links to all 4 locale URLs; hreflang alternates include all 4 + `x-default` → fr.
- Edge case: NL page checked on desktop + mobile widths for string overflow.

**Verification:**
- Build passes; all four locale URLs render; every referenced screenshot path exists in `public/screenshots/`; sibling grid on existing pages renders correctly with the 5th slug.

---

- [x] U3. **Youth audience page (Équipes de jeunes)**

**Goal:** Audience page for youth-team coaches: parents/guardians (consent, RSVP on behalf), youth mode (AI companion and fines hidden), parent communication, and the public live viewer for parents; serves as the équipes-de-jeunes campaign landing.

**Requirements:** R8, R9, R10, R11 (Solutions + footer), R12, R13; F1; AE1

**Dependencies:** None (parallel with U1/U2)

**Files:**
- Create: `src/components/YouthPage.astro`, `src/data/youthContent.ts`
- Create: `src/pages/fr/equipes-jeunes.astro`, `src/pages/en/youth-teams.astro`, `src/pages/nl/youth-teams.astro`, `src/pages/de/youth-teams.astro`
- Modify: `src/data/landingContent.ts` (Solutions `children` entry + footer link, ×4 locales)

**Approach:**
- Clone the ScPage structural pattern: hardcoded per-locale path consts (`frPath = '/fr/equipes-jeunes/'`, others `/…/youth-teams/'`), `canonicalPath`, `switchHrefs`, 4-locale alternates + `x-default → fr`, JSON-LD via `SubpageLayout`.
- Data module `Record<Locale, YouthContent>` modeled on `scContent.ts` (hero, showcases, features, how-it-works, finalCta).
- Content pillars: parents dans la boucle sans compte (RSVP parental, viewer de match public), consentements et mode jeunes (IA et amendes masquées), communication aux parents. **Copy caution (R13):** WhatsApp *automation* is plan-gated — present parent communication without promising automated WhatsApp in the free plan.
- Hero visual: do NOT inherit ScPage's hardcoded "squad readiness" board (S&C-specific, hardcoded in the component rather than data-driven). YouthPage's aria-hidden hero illustration depicts a parent-facing scene — a mock convocation/RSVP card with a guardian reply and a consent check — matching the page's pillars.
- Assets: `youth-guardians-card-fr.png`, `youth-team-setting-fr.png`, and the public-viewer capture from U8 (the parent-in-the-stands visual); tone reference `launch-video/equipes-jeunes/POST.md`.

**Patterns to follow:**
- `src/components/ScPage.astro` + `src/data/scContent.ts` (structure, slug asymmetry); `src/pages/fr/preparateurs-physiques.astro` (stub shape).

**Test scenarios:**
- Happy path: `/fr/equipes-jeunes/` renders; Solutions dropdown on any page shows the new entry in all 4 locales; footer link present.
- Covers AE1. The parent-in-the-stands live-viewer scenario appears with a visual.
- Integration: language switcher on `/fr/equipes-jeunes/` targets `/en/youth-teams/` (and back) — the asymmetric-slug case.
- Edge case: NL desktop + mobile overflow check.
- Error path: none — static content; TypeScript enforces locale completeness.

**Verification:**
- Build passes; all 4 URLs live; alternates correct including DE; all referenced screenshots exist.

---

- [x] U4. **Scouting feature page**

**Goal:** Feature page for opponent scouting: reports, opponent rosters, video clips with tags/notes, shareable public reports.

**Requirements:** R4, R10, R11, R12, R13; F2

**Dependencies:** U1

**Files:**
- Modify: `src/data/featuresContent.ts` (slug `scouting` + content ×4 locales), `src/components/FeatureVisual.astro`
- Create: `src/pages/{fr,en,nl,de}/features/scouting.astro` (4 stubs)

**Approach:**
- Angle: préparer le prochain adversaire à plusieurs (coach + analyste, A4) et partager le rapport au groupe via lien public.
- FeatureVisual brief: an opponent-scouting mini-panel — opponent roster rows with tag chips and a "rapport partagé" state.
- Showcase: `scouting-module-fr.png`, `scouting-report-fr.png`, `scouting-report-phone-fr.png`.

**Patterns to follow:** same end-to-end slug pattern as U2.

**Test scenarios:**
- Happy path: 4 locale URLs render with showcase; hub shows the card.
- Integration: alternates + switcher across locales.
- Edge case: NL overflow check.

**Verification:** build passes; referenced assets exist; sibling grids fine at 6 slugs.

---

- [x] U5. **Reports feature page (rapports IA)**

**Goal:** Feature page for the AI report builder: freeform reports across team data (presence, load, medical, matches/sessions), PDF export, shareable with committee/parents/management.

**Requirements:** R5, R10, R11, R12, R13; F2

**Dependencies:** U1

**Files:**
- Modify: `src/data/featuresContent.ts` (slug `reports` + content ×4 locales), `src/components/FeatureVisual.astro`
- Create: `src/pages/{fr,en,nl,de}/features/reports.astro` (4 stubs)

**Approach:**
- Angle: le rapport que le staff n'a jamais le temps de faire — généré depuis les données déjà dans Strivn, prêt à partager en PDF.
- FeatureVisual brief: a report-builder mini-panel — stacked report blocks (présences, charge, médical) with a PDF-ready badge.
- Showcase: `reports-hub-fr.png`, `reports-selection-fr.png`.

**Patterns to follow:** same end-to-end slug pattern as U2.

**Test scenarios:**
- Happy path: 4 locale URLs render; hub card present.
- Integration: alternates + switcher.
- Edge case: NL overflow check.

**Verification:** build passes; referenced assets exist.

---

- [x] U6. **Player-app feature page**

**Goal:** Feature page presenting the player experience to the coach as buyer: native iOS/Android apps, wellness check-ins, personal programs and stats, AI coach companion, WHOOP connection; store badges.

**Requirements:** R6, R7, R10, R11, R12, R13; F2; AE2

**Dependencies:** U1

**Files:**
- Modify: `src/data/featuresContent.ts` (slug `player-app` + content ×4 locales), `src/components/FeatureVisual.astro`
- Create: `src/pages/{fr,en,nl,de}/features/player-app.astro` (4 stubs)

**Approach:**
- Written to A1 (coach): "ce que vos joueurs reçoivent" — the app closes the loop the coach starts (convocations answered, check-ins filled, programs followed).
- FeatureVisual brief: a player check-in mini-card — wellness sliders, a streak chip, and a "programme du jour" row.
- Showcase (mobile frames): `portal-agenda-fr.png` leads on the FR page, plus `portal-checkin-fr.png`, `portal-fitness-fr.png`. Caution: `player-app-agenda.png` is the EN capture and no `-fr` variant exists on disk — either produce `player-app-agenda-fr.png` (likely a native/device screenshot outside the Playwright pipeline; name an owner in U8) or keep the FR page portal-only. No EN-language slide on the FR page.
- Store badges, per-platform: treat iOS and Android liveness independently — render whichever platform's badge is verified live, omit only the other, with a copy variant for the single-store state; never ship a dead link.

**Patterns to follow:** same end-to-end slug pattern as U2; phone frames per ScPage `sc-frame--mobile`.

**Test scenarios:**
- Happy path: 4 locale URLs render with mobile-frame showcase.
- Covers AE2. WHOOP appears as part of the platform experience with no free-plan claim and no price.
- Error path: only the verified platform's badge renders (per-platform independence); if neither store is verified live, the built page contains no store `<a>` hrefs (copy-only fallback with the matching copy variant).
- Edge case: NL overflow check.

**Verification:** build passes; badge links (if present) verified manually against live store listings.

---

- [x] U7. **Homepage and cross-link integration**

**Goal:** Homepage capability-grid rows link to their pages; player section links to the player-app page; hub/nav coherence across all 8 features.

**Requirements:** R11; F2

**Dependencies:** U2, U4, U5, U6

**Files:**
- Modify: `src/components/PremiumLanding.astro` (optional `href` on capability items — wrap row content in `<a>` when present; player section gains a link to the player-app page)
- Modify: `src/data/landingContent.ts` (capability item hrefs ×4 locales per the resolved mapping)

**Approach:**
- Mapping (resolved): Présences & RSVP → communication, Infirmerie → medical, Charge & RPE → training-load, Séances & tactique → sessions, Rapports → reports, Programmes individuels → player-app; Tests & évaluations and Assistant IA remain unlinked.
- Linked rows must carry a visible at-rest affordance (e.g., a trailing arrow/chevron consistent with the design system) so clickable and non-clickable rows are distinguishable before hover; exact treatment decided at implementation, but hover-only differentiation is not acceptable.
- Hero stage panel untouched (decision).

**Patterns to follow:** existing capability-grid markup; nav link shapes in `landingContent.ts`.

**Test scenarios:**
- Happy path: linked rows navigate to the right locale's page; unlinked rows render as before (no `<a>`).
- Edge case: hover/focus styling on linked rows doesn't break the grid layout at mobile width.
- Integration: all 4 locales' homepages point at their own locale's feature URLs.

**Verification:** build passes; click-through from homepage rows on the preview server reaches each new page.

---

- [x] U8. **Asset gap-fill and pre-deploy referenced-file check**

**Goal:** Every image path referenced by U2–U6 exists in `public/screenshots/`; capture only true gaps via the existing pipeline. Runs once per phase as a deploy gate.

**Requirements:** R14

**Dependencies:** draft asset lists from U2, U3 (Phase 1) and U4–U6 (Phase 2)

**Files:**
- Possibly create: one-off scripts under `tooling/media/capture/` (only if a needed view has no existing script)
- Create/verify: `public/screenshots/*.png` referenced by the new pages

**Approach:**
- Required Phase 1 capture: the public no-login match viewer (phone portrait) — no such capture exists on disk and no capture script targets that surface. Needs a new capture script plus live-match demo state (an in-progress match with a share link), which may exceed what `setup-demo.sh` seeds today — verify and extend the demo seed if needed. This capture is the AE1 visual on U2 and U3.
- Inventory referenced paths in the new content modules vs `public/screenshots/` on disk (the build does NOT fail on missing public images — this check is manual/scripted). The check also verifies the locale suffix matches the page's locale convention — a FR page must not silently embed an unsuffixed EN capture.
- For any gap, follow the strivn-media runbook: `./data/setup-demo.sh <lang>` (screenshot language = DB language), `APP_URL` matching the capture port, `rm public/hot` in the app, run via `tooling/media/run.sh`, demo team "AC Verel".

**Execution note:** Treat as a deploy gate per phase, not a blocker for writing page content against existing assets.

**Test scenarios:**
- Test expectation: none — asset production; verification below is the check.

**Verification:**
- A grep of all `img`/`video` values in the new/changed data modules resolves to existing files with locale-consistent suffixes; new captures show styled UI (not the login page) with AC Verel data; the public-viewer capture exists and is referenced by U2 and U3.

---

## System-Wide Impact

- **Interaction graph:** `FEATURE_SLUGS` drives hub cards, sibling grids, and alternates on all 8 feature pages — each new slug automatically appears on every existing feature page's "more" grid (7 cards at the end state; check `.fp-more__grid`).
- **API surface parity:** language switcher + hreflang must stay symmetric on feature pages and handle the youth slug asymmetry (ScPage-style consts). DE alternates verified end-to-end (post-audit locale).
- **State lifecycle risks:** none (static site). The real risk is silent missing images — no build-time check exists for `public/` paths (mitigated by U8).
- **Integration coverage:** sitemap grows by 20 URLs automatically via `@astrojs/sitemap`; footer/nav updates propagate to every page through `landingContent`.
- **Unchanged invariants:** existing 4 feature pages' copy and rendering (except sibling grid growth), homepage hero stage animation, pricing section (`#pricing`), blog, legal pages, `appStartUrl` CTA scheme.

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Campaigns go live before their landing pages deploy | Phase 1 contains exactly the two campaign pages; deploy Phase 1 independently and early |
| NL/DE strings overflow layouts | Explicit NL desktop+mobile check in every page unit's scenarios; DE alternates verified |
| Store links dead or apps not publicly listed (R7) | Liveness check before shipping badges; copy-only fallback without links |
| Missing screenshot paths ship silently | U8 referenced-file check as a per-phase deploy gate |
| Sibling grid degrades at 7 cards | Check at first new slug (U2); adjust CSS only if broken |
| Plan-gated features promised as free (R13/AE2) | Copy constraint carried in U2/U3/U6; explicit WhatsApp-automation caution on U3 |
| Stale source at deploy | `git pull --ff-only origin main` in the main checkout before `./deploy.sh` (known past incident) |

---

## Documentation / Operational Notes

- Deploy from the main checkout only, after pulling main; assets must be live at `https://strivn.net/screenshots/...` before any campaign post links to a page.
- Phase 1 post-deploy step (closes flow F1's final edge): update the link-in-bio targets and the CTA lines of `launch-video/seance-direct/POST.md` and `launch-video/equipes-jeunes/POST.md` to the new URLs (`/fr/features/live/`, `/fr/equipes-jeunes/`) once the pages are live — deploying alone does not change where existing campaign traffic lands.
- After landing, consider `/ce-compound` to move the capture/deploy learnings into `docs/solutions/` (none exists in-repo).
- No docs.strivn.net changes required, but FAQ answers may link to it per convention; contact remains `hello@strivn.net`.

---

## Sources & References

- **Origin document:** [docs/brainstorms/2026-07-21-website-missing-feature-pages-requirements.md](../brainstorms/2026-07-21-website-missing-feature-pages-requirements.md)
- Related code: `src/data/featuresContent.ts`, `src/components/FeaturePage.astro`, `src/components/ScPage.astro`, `src/data/landingContent.ts`, `src/components/PremiumLanding.astro`, `tooling/media/`
- Related plans: `docs/plans/2026-06-04-001-feat-website-subpages-plan.md` (superseded route design; durable content bar), `docs/plans/2026-06-03-001-feat-website-operations-repositioning-plan.md`
- Audit: `docs/audits/audit-staffops-vs-strivn-2026-06-17.md`
- Campaign tone references: `launch-video/seance-direct/POST.md`, `launch-video/equipes-jeunes/POST.md`
