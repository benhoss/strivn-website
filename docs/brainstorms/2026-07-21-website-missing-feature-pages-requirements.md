---
date: 2026-07-21
topic: website-missing-feature-pages
---

# Website: Missing Feature & Audience Pages (Flagships + Campaigns Wave)

## Problem Frame

The marketing site (strivn.net — Astro, 4 locales fr/en/nl/de) showcases 4 feature pillars (communication, medical, training-load, sessions) plus 2 audience pages (clubs, S&C coaches). The product has outgrown the site: flagship modules shipped since — opponent scouting, live match with a public no-login viewer, live session running, the AI report builder, the player native apps — have either no page at all or a single row in the homepage capabilities grid. Meanwhile the two social campaigns currently in production (`launch-video/seance-direct/`, `launch-video/equipes-jeunes/`) point at capabilities with **no landing URL on the site** — campaign traffic has nowhere to land.

This wave adds **5 pages** aligning the site with what is already being marketed. Pricing is explicitly untouched (strategy not yet defined).

Target sitemap after this wave (NEW marks additions):

```
/<locale>/
├── features/                  (hub: 4 → 8 cards)
│   ├── communication
│   ├── medical
│   ├── training-load
│   ├── sessions
│   ├── live                   NEW — live séance + live match + public viewer
│   ├── scouting               NEW — opponent scouting
│   ├── reports                NEW — AI report builder
│   └── player-app             NEW — the player experience (native apps)
├── clubs
├── preparateurs-physiques / sc-coaches
└── equipes-jeunes / youth-…   NEW — audience page, Solutions menu
```

---

## Actors

- A1. Head coach / staff member of an amateur club: primary site visitor and sign-up decision maker; main audience of every new page.
- A2. Parent/guardian of a youth player: secondary audience reached by the équipes-jeunes campaign; follows matches via the public live viewer and responds to convocations without ever needing an account.
- A3. Player: end user of the player app; shown on the app page, but the page addresses the coach (the buyer), not the player.
- A4. Analyst / assistant staff: audience for the scouting and reports pages.

---

## Key Flows

- F1. Campaign landing
  - **Trigger:** A1 or A2 clicks a social post (séance-en-direct or équipes-de-jeunes campaign).
  - **Actors:** A1, A2
  - **Steps:** post → matching site page → capability demonstrated with real-app visuals → existing register CTA (`app.strivn.net/register?lang=…`).
  - **Outcome:** campaign traffic lands on a page about exactly what the post showed.
  - **Covered by:** R1, R3, R9, R13

- F2. Feature discovery
  - **Trigger:** A1 browses the features hub from the nav.
  - **Actors:** A1, A4
  - **Steps:** `/features/` hub → 8 cards → any of the 4 new feature pages → cross-links to related pages → CTA.
  - **Outcome:** recent flagships are discoverable next to the original 4 pillars.
  - **Covered by:** R2, R11

---

## Requirements

**Live page (séance + match)**
- R1. A single feature page presents both live capabilities: live séance (the coach runs the planned session on the pitch, the staff follows along) and live match (live scoring, lineups/compositions, paper match-sheet import).
- R2. The public no-login match viewer (shareable link for parents and absent players) is the page's headline differentiator.
- R3. The page is the landing target for the "séance en direct" campaign posts.

**Scouting page**
- R4. A feature page presents opponent scouting: scouting reports, opponent rosters, video clips with tags/notes, and shareable public reports.

**Reports page**
- R5. A feature page presents the AI report builder: freeform reports across all team data (presence, load, medical, matches/sessions), exported as PDF, shareable with committee, parents, or management.

**Player app page**
- R6. A feature page presents the player experience: native iOS/Android apps, wellness check-ins, personal programs and stats, AI coach companion, WHOOP connection — written for the coach as buyer ("what your players get").
- R7. The page shows app-store download badges/links for the published player apps.

**Youth teams audience page**
- R8. An audience page (Solutions menu, alongside Clubs and Préparateurs physiques) targets youth-team coaches: parent/guardian flows (consent, RSVP on the player's behalf), youth mode (AI companion and fines hidden), parent communication, and the public live viewer for parents in the stands.
- R9. The page is the landing target for the "équipes de jeunes" campaign posts.

**Cross-cutting**
- R10. All 5 pages exist in the 4 locales (fr/en/nl/de) following the current per-locale pattern; French copy is written first and is the reference.
- R11. Hub and navigation are updated: features hub goes 4 → 8 cards; the Solutions dropdown gains the youth entry; homepage capability-grid/hero rows that now have a matching page link to it.
- R12. New pages reuse the existing page templates and design system (feature-page pattern for R1–R7, audience-page pattern for R8) — no new visual language. (Structural: keeps effort predictable and the site coherent.)
- R13. Every page uses the existing register CTA. No page states fixed prices, and plan-gated capabilities (WHOOP sync, GPS, WhatsApp automation) are never promised as part of the free plan.
- R14. Visuals are real-app captures produced with the existing media capture tooling (`tooling/media/`), consistent with the current pages. (Structural: brand consistency, no mockups drifting from the product.)

---

## Acceptance Examples

- AE1. **Covers R2, R8.** A parent in the stands receives the live-match link during a youth match; opening it on their phone with no account shows the live score. Both the live page and the youth page demonstrate this scenario visually.
- AE2. **Covers R13.** The player-app page mentions WHOOP sync: it may present it as part of the platform experience but must not claim it is included in the free plan nor attach a price to it.

---

## Success Criteria

- Both active campaigns (séance en direct, équipes de jeunes) have a landing URL whose content matches the post's message.
- Scouting and the AI report builder — the two largest unmarketed modules — each have a dedicated, indexable page in all 4 locales.
- A visitor browsing only the site can name ~8 core modules instead of 4.
- Handoff quality: `ce-plan` can derive the page/section/content inventory from R1–R14 without inventing product behavior.

---

## Scope Boundaries

- No pricing page and no pricing content changes anywhere — pricing strategy is not yet defined (user decision, 2026-07-21).
- No dedicated pages for: GPS/wearables, tests & mesures, programmes individuels / bibliothèque d'exercices, tableaux tactiques, amendes, compétitions, standalone AI assistant. They remain homepage-grid mentions (and may be referenced inside the new pages where natural).
- No campaign-specific one-off landing pages (the "moments" approach was considered and rejected); the feature/audience pages serve as landings.
- No localized legal/support pages for en/nl/de in this wave (separate cleanup).
- Blog remains FR-only; no blog work.
- Website only — no product/app changes.

---

## Key Decisions

- Approach C (hybrid) over full hub coverage (A) and narrative "moment" pages (B): reuse the feature-page architecture for product flagships, use an audience page for youth. Rationale: aligns the site with active campaigns without breaking the existing IA; B sacrificed the flagships' product legibility for a narrative bet. (User-validated.)
- Live séance and live match share one page: same core promise ("those not on the pitch follow anyway"), avoids two thin pages. Revisit if the two campaigns diverge.
- No Tarifs page in this wave: pricing strategy undefined. (User decision.)
- Youth is an audience, not a feature: the buyer context (parents, consent, youth mode) matters more than any single module.
- The player app gets a feature-hub page rather than a top-level nav entry; it is additionally linked from the homepage player section.

---

## Dependencies / Assumptions

- Assumption (verified in app repo scan of `config/billing.php`, re-verify at implementation): scouting, live séance/match, and the report builder are available in the free Solo plan; only WhatsApp automation/direct messaging, GPS, and wearable sync are plan-gated.
- Assumption (unverified): the player apps are published and the store URLs in the app repo's `config/mobile.php` are live — must be confirmed before R7 ships badges.
- Screenshot/video assets for scouting, live match, and the player app do not yet exist in the site's media pipeline and must be captured from the running app.
- Tone reference for the two campaign-matched pages: `launch-video/seance-direct/POST.md` and `launch-video/equipes-jeunes/POST.md`.

---

## Outstanding Questions

### Deferred to Planning

- [Affects R1, R8][Content] Final slugs per locale — follow the existing FR-localized asymmetry pattern (`preparateurs-physiques` vs `sc-coaches`)? e.g. `/fr/features/direct` vs `/en/features/live`; `/fr/equipes-jeunes` vs `/en/youth-teams`.
- [Affects R7][Needs research] Confirm both store links (iOS/Android) are live and pick badge/QR assets.
- [Affects R14][Technical] Which app views to capture per page, and whether existing capture scripts cover the scouting and live modules.
- [Affects R11][Content] Exact homepage link mapping (e.g. hero "Match" row → live page; grid "Rapports" row → reports page).

---

## Next Steps

-> `/ce-plan` for structured implementation planning.
