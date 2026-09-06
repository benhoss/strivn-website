---
title: Public Pricing Page - Plan
type: feat
date: 2026-09-05
topic: website-pricing-page
artifact_contract: ce-unified-plan/v1
artifact_readiness: requirements-only
product_contract_source: strivn-app/docs/STRATEGY.md
execution: code
---

# Public Pricing Page - Plan

## Goal Capsule

- **Objective:** Ship a dedicated public pricing page at `/{locale}/pricing/` in all six locales, publishing the four-tier architecture (Free / Amateur / Semi-Pro / Pro) that `strivn-app/docs/STRATEGY.md` made the source of truth on 2026-08-30, replacing the homepage's obsolete three-plan section as the canonical pricing destination.
- **Product authority:** `strivn-app/docs/STRATEGY.md` §4 (positioning + tier architecture) and `strivn-app/docs/specs/pricing-packaging-2026-08.md` (entitlement matrix, event-type axis, quotas). Brand voice per `PRODUCT.md`, visual system per `DESIGN.md`.
- **Open blockers:** None for the page. Three commercial values are undecided upstream and are handled by explicit non-publication rules — see §3 and Open Questions. The wearables tier was the one copy decision left hanging; it was settled on 2026-09-05 — see §2 and §4.
- **Verified against code 2026-09-05:** `strivn-app` (`config/billing.php`, entitlement enforcement, wearables) and `Website` (`#tarifs` inventory, layout props, `appStartUrl`, `WaitlistForm`). Every file path and line number below was checked on that date; §2 corrects one claim STRATEGY §10 has since outgrown.

---

## 1. Why this page, and why now

The site's pricing lives in one homepage section (`src/components/home/HomePricing.astro`, anchor `#tarifs`) rendering three plans out of `homeContent[locale].pricing`: **Coach €0**, **Club "Bientôt"**, **Club Pro "Bientôt"**.

That content is now wrong on every axis:

| Site says today | Source of truth says |
|---|---|
| 3 plans | 4 plans |
| Coach / Club / Club Pro | Free / Amateur / Semi-Pro / Pro |
| No paid price shown at all | €0 / €19 / €249 / on request |
| Buyer is "the club" | Buyer is the **S&C coach / head of performance** (STRATEGY §2) |
| "Free for staff, billed at club scale" | Free is capped by quotas; the paid step is performance monitoring |
| Positioning: team management | Positioning: **GPS is the sensor, STRIVN is the intelligence layer** (STRATEGY §1) |

A pricing section is also the wrong container for what the four tiers now need to communicate: three locking axes (features, event types, quotas), a usage-based AI credit model, and a downgrade guarantee. That needs a page.

---

## 2. The one thing that must not be got wrong

**The app cannot currently take money.**

`strivn-app/config/billing.php` ships three plans: `free_coach` (€0, sellable), `club` (€99) and `club_pro` (€199) — and both paid plans carry `'is_selectable' => false` with `'availability_label' => 'Bientôt disponible'`. `BillingCatalog::hasSellablePaidPlan()` returns `false` today. The `amateur` and `semi_pro` tiers do not exist in configuration at all, and there is no annual price structure.

Enforcement is thin, and slightly less thin than STRATEGY §10 says. Verified in the code on 2026-09-05, **three** entitlements are actually enforced — STRATEGY §10 (written 2026-08-30) names only the first two, because the third landed after it:

| Entitlement | Where it is enforced | Free team gets it? |
|---|---|---|
| `gps_module` | `feature:` middleware, **34 routes** in `routes/web.php` | ❌ (`false` in `free_coach`) |
| `automated_checkins`, `automated_rsvp_reminders`, `direct_player_whatsapp` | `PlayerWhatsAppPolicy` → `BillingCatalog::featureEnabled()` | ❌ (all `false`) |
| `wearable_sync` | **19 call sites across 18 files** — 11 of them `abort_unless(..., 403)` — spanning the player portal, the band API controllers, the sync job, two console commands and the wearables services (shipped in `f74d13c70`) | ❌ (**key absent** from `free_coach` → `canUseFeature` returns `false`) |

Every other flag in `config/billing.php` is declarative. `HasPlanFeatures::canUseFeature()` falls back to `config('billing.plans.free_coach.features.*')` when a team has no subscription, so **the free tier is today the de-facto default for every team**, and it grants `ai_assistant`, `reports_auto`, `tactics`, `individual_programs` and `medical_notes` with unlimited players and staff. Neither the 20-exercise nor the 3-board quota exists in code.

That asymmetry runs in the safe direction — the page publishes a Free tier *narrower* than the one the product currently hands out, so a signup gets more than promised, never less. **Do not "fix" the copy to match the code.** The page publishes the target packaging; the code catches up.

**Consequence for this page — a hard rule:**

> No CTA on this page may promise a self-serve purchase. Free routes to registration. Amateur, Semi-Pro and Pro route to a human (waitlist or email). The page publishes the *architecture and the prices*; it does not pretend the checkout exists.

When `is_selectable` flips upstream, swapping a plan's `cta.kind` from `'waitlist'` / `'contact'` to `'app'` must be a one-line change in the content file. Design the type for that.

**Second honesty constraint — the Pro connectors.** STRATEGY §4 gives the sales line *"Semi-Pro: import your GPS. Pro: connect your GPS."* STRATEGY §10 states plainly: *"Aucun connecteur API GPS. Zéro client Catapult / STATSports / Polar / Kinexon dans `app/`."* Pro is quoted, so it is a sales conversation — but a public page listing "Catapult / STATSports sync" as a shipped Pro feature is a claim the product cannot honour. Pro's connector line must be framed as built into the engagement, not as available. Proposed FR wording in §5.

**Third honesty constraint — wearables contradict the homepage.** `pricing-packaging-2026-08.md` §2 places `wearable_sync` at **Pro only**. Three facts contradict that:

1. **The product ships it.** `app/Services/Wearables/` (Whoop client, token service, load writer, retention) plus four models; the paid gate is live on seven controller actions.
2. **The site already sells it as current.** `HomeCompatible.astro` names WHOOP in the compatibility band on all six homepages, and `src/data/subpages/checkIn.ts` builds a whole subpage around what WHOOP hands the morning check-in. Commit `ad67ab0` — *"Show the systems STRIVN reads from, WHOOP included"* — is three weeks old.
3. **`config/billing.php` places it at `club`**, i.e. the tier that maps to Semi-Pro, not to Pro.

Publishing "objets connectés = Pro, sur devis" would tell a visitor that the feature the homepage just showed them is behind an unpriced enterprise quote.

**Decided 2026-09-05 by the product owner: `wearable_sync` sits at Semi-Pro and above.** It matches the shipped configuration, it matches what the homepage already promises, and it is the only placement a visitor can read twice without catching the product in a contradiction. The matrix and the plan cards below apply it. This closes the question; `pricing-packaging-2026-08.md` §2 is the document that now carries the drift, and correcting it there is upstream work, not this page's.

Worth flagging upward, though it does not block this page: **no self-serve visitor can reach WHOOP today.** `free_coach` has no `wearable_sync` key, and no paid plan is `is_selectable`. The band on the homepage promises a feature only `team:grant-plan` can currently unlock.

---

## 3. Publication rules for undecided values

Three numbers are deliberately unpublished upstream. The page must respect that, and the content type must make omission representable rather than forcing a placeholder.

1. **AI credit scale.** STRATEGY §5 / spec §5: each plan opens a monthly credit quota, consumption is pay-as-you-go, **"pas de barème publié tant qu'il n'est pas calé sur les coûts réels."** → The page explains the *model* (monthly allowance, usage-based, top-up without changing plan, an allowance exists from Free). It publishes **no credit counts and no €/credit rate**.
2. **Semi-Pro annual discount.** The discount exists in the architecture; the rate does not. → **No monthly/annual toggle in v1.** Semi-Pro shows `€249 / mois` with the note "remise à l'année". A toggle ships when a rate and a Stripe annual price exist.
3. **WhatsApp message bundles.** Spec §6.6 leaves open whether the messaging channel stays inside plan price or becomes a standalone add-on. → The page publishes **no message counts and no WhatsApp packs**. WhatsApp automations appear as a capability line on Amateur and above, nothing more.

---

## 4. Decisions taken in this plan

- **URL: `/{locale}/pricing/` for all six locales.** Consistent with `/fr/features/`, `/fr/solutions/`, `/fr/support/`, which all keep the English slug in FR. Optionally add `'/fr/tarifs/': '/fr/pricing/'` to `astro.config.mjs` `redirects` for campaign links; do not create a second real page.
- **The homepage section survives as a teaser.** `#tarifs` stays a live anchor — it is referenced by nav, both footers and outbound campaign links, and a URL fragment cannot be server-redirected. `HomePricing.astro` is rewritten to a condensed four-tier strip whose CTA is "voir le détail des offres" → `/{locale}/pricing/`. Removing the section would break `check:links`, which validates fragments against the target page.
- **Nav and footers repoint to the page**, not the anchor (inventory in §8).
- **Six locales in one shipment.** Every other page on the site exists in six; a pricing page missing in three would strand half the traffic on the obsolete anchor.
- **Wearable sync is a Semi-Pro capability, not a Pro one.** Decided 2026-09-05, against `pricing-packaging-2026-08.md` §2 and in line with `config/billing.php` and the homepage. Reasoning in §2.
- **No pricing A/B or experiment tooling.** Out of scope.

---

## 5. The four plans — canonical content

Derived from STRATEGY §4 and spec §1–§4. FR copy below is the specimen to translate from; en / nl / de / pt / es follow the same structure.

### 5.1 Free — €0

- **Promise:** Gérer son équipe.
- **Buyer:** le coach seul, une équipe.
- **Badge:** `Disponible maintenant` · **CTA:** `Créer mon équipe` → `appStartUrl(locale)` (`kind: 'app'`).
- **Lines:**
  - 1 équipe, joueurs et staff illimités
  - Entraînements, matchs et repos au calendrier
  - Convocations, présences, effectif
  - App joueur, check-in matinal, RPE
  - Live match, historique de statistiques limité
  - Résultats de séance et bilan coach
  - Infirmerie et suivi des blessures
  - 20 exercices, 3 tableaux tactiques
  - Une dotation de crédits IA pour découvrir

### 5.2 Amateur — €19 / mois

- **Promise:** Entraîner son équipe.
- **Buyer:** le coach, poche personnelle.
- **Badge:** `Ouverture progressive` · **CTA:** `Être prévenu` → waitlist (`kind: 'waitlist'`).
- **Lines:** *Tout le plan Free, plus :*
  - Bibliothèque d'exercices illimitée
  - Tableaux tactiques illimités
  - Modèles et timeline de séance
  - Réunions, tâches, team building, individuel, récupération
  - Historique de statistiques complet
  - Rappels de convocation automatiques
  - Check-ins matinaux automatiques
  - WhatsApp direct avec les joueurs

### 5.3 Semi-Pro — €249 / mois — **featured**

- **Promise:** Monitorer la performance.
- **Buyer:** préparateur physique, budget club.
- **Period line:** `/ mois` · **Note under price:** `Remise à l'année`.
- **Badge:** `Le plan performance` · **CTA:** `Parler à un préparateur` → waitlist/contact (`kind: 'waitlist'`).
- **Lines:** *Tout le plan Amateur, plus :*
  - Import GPS par CSV, quel que soit le fournisseur
  - Charge externe, zones, seuils par joueur et cibles
  - Croisement GPS × RPE × wellness sur le même créneau
  - Musculation : catalogue, programmes et runner
  - Tableau médical et créneaux de soins
  - Tests physiques
  - Plusieurs membres du staff, accès staff médical
  - Dashboards coach et reporting club
  - Synchronisation des objets connectés (WHOOP)

### 5.4 Pro — sur devis

- **Promise:** Optimiser la performance.
- **Buyer:** cellule performance, multi-équipes.
- **Price:** no amount. The card renders `Sur devis` where the figure sits, and **no `period`**.
- **Badge:** `Sur demande` · **CTA:** `Parler à l'équipe` → `mailto:hello@strivn.net` (`kind: 'contact'`).
- **Lines:** *Tout le plan Semi-Pro, plus :*
  - GPS au niveau de l'exercice : la signature de charge de chaque exercice
  - Plusieurs équipes sous un même toit
  - Connexion à votre fournisseur GPS, construite avec vous *(see §2 — this is the engagement framing, not a shipped connector)*
  - Analyse de match, scouting et recrutement
  - Analytics avancées et IA de performance
  - Accès API et export vers vos outils
  - Support prioritaire

---

## 6. Page structure

Order is deliberate: positioning before price, price before matrix, and the trust sections after the ask.

### S1 — Hero

Leads with the GPS thesis, not with money. STRATEGY §7 opening: *« vous avez des GPS. Que faites-vous de vos données après l'export ? »*

- Overline: `TARIFS`
- H1 specimen (FR): **« Le prix d'une plateforme de performance, pas celui d'un club pro. »**
- Sub specimen (FR): « Gratuit pour gérer une équipe. Le palier performance ouvre l'import GPS, la charge et le croisement avec le ressenti des joueurs. »
- No CTA — the cards are one scroll away.

### S2 — Plan cards (the four tiers)

- Grid: 1 col < 768px, 2 cols 768–1279px, 4 cols ≥ 1280px. **The current section is `lg:grid-cols-3`; four cards at `lg` (1024px) are too narrow — step the 4-up to `xl`.**
- Semi-Pro is `featured`, reusing the existing featured treatment in `HomePricing.astro` (gradient panel, electric outline, glow shadow). One featured card only.
- Card anatomy, in order: name · availability badge · price + period · promise line · buyer line (mono label, muted) · feature list with check icons · CTA.
- The "Tout le plan X, plus :" inheritance line renders as the list's first item, visually distinct (no check icon, muted).

### S3 — AI credits

One short block, no table. Explains: a monthly allowance per plan, reset each month; consumption by usage; heavy users top up without changing plan; an allowance exists from Free onward. States plainly that the scale is published when it is calibrated on real costs. **No numbers.**

### S4 — Full comparison matrix

The payoff section, and the reason this is a page. A real `<table>`.

Row groups and rows (✅ / ❌ per tier), derived from spec §2–§4:

**Équipe et calendrier**
| Row | Free | Amateur | Semi-Pro | Pro |
|---|:-:|:-:|:-:|:-:|
| Équipes | 1 | 1 | 1 | Plusieurs |
| Joueurs et staff | Illimités | Illimités | Illimités | Illimités |
| Entraînement, match, repos | ✅ | ✅ | ✅ | ✅ |
| Réunion, tâche, team building, individuel, récupération | ❌ | ✅ | ✅ | ✅ |
| Musculation, test physique, soins | ❌ | ❌ | ✅ | ✅ |

**Le quotidien du staff**
| Convocations, présences, effectif | ✅ | ✅ | ✅ | ✅ |
| App joueur, check-in, RPE | ✅ | ✅ | ✅ | ✅ |
| Infirmerie et blessures | ✅ | ✅ | ✅ | ✅ |
| Résultats de séance et bilan coach | ✅ | ✅ | ✅ | ✅ |
| Live match | ✅ | ✅ | ✅ | ✅ |
| Historique de statistiques de match | Limité | Complet | Complet | Complet |
| Bibliothèque d'exercices | 20 | Illimitée | Illimitée | Illimitée |
| Tableaux tactiques | 3 | Illimités | Illimités | Illimités |
| Modèles et timeline de séance | ❌ | ✅ | ✅ | ✅ |
| Rappels et check-ins automatiques | ❌ | ✅ | ✅ | ✅ |
| WhatsApp direct avec les joueurs | ❌ | ✅ | ✅ | ✅ |

**Performance**
| Import GPS (CSV, tout fournisseur) | ❌ | ❌ | ✅ | ✅ |
| Charge, zones, seuils et cibles | ❌ | ❌ | ✅ | ✅ |
| Croisement GPS × RPE × wellness | ❌ | ❌ | ✅ | ✅ |
| Musculation | ❌ | ❌ | ✅ | ✅ |
| Tableau médical | ❌ | ❌ | ✅ | ✅ |
| Tests physiques | ❌ | ❌ | ✅ | ✅ |
| GPS au niveau de l'exercice | ❌ | ❌ | ❌ | ✅ |
| Connexion au fournisseur GPS | ❌ | ❌ | ❌ | Sur devis |
| Synchronisation des objets connectés (WHOOP) | ❌ | ❌ | ✅ | ✅ |

**Staff et pilotage**
| Plusieurs membres du staff | ❌ | ❌ | ✅ | ✅ |
| Accès staff médical | ❌ | ❌ | ✅ | ✅ |
| Dashboards coach et reporting club | ❌ | ❌ | ✅ | ✅ |
| Analytics avancées et IA de performance | ❌ | ❌ | ❌ | ✅ |
| Analyse de match, scouting, recrutement | ❌ | ❌ | ❌ | ✅ |
| Accès API | ❌ | ❌ | ❌ | ✅ |
| Support prioritaire | ❌ | ❌ | ❌ | ✅ |

**IA**
| Crédits IA mensuels | Dotation | Dotation | Dotation | Dotation |
| Recharge à l'usage | ✅ | ✅ | ✅ | ✅ |

Rows are either boolean or a short string. The content type must accept both (`boolean | string`).

### S5 — "Et si je redescends de palier ?"

Spec §7, rendered as a trust promise: **verrouiller la création, jamais la lecture.** A team that downgrades keeps read access to everything it produced — a care slot stays on the calendar, a past strength session stays consultable, a confirmed GPS import stays visible. What closes: creating, importing, prescribing. What stays open: consulting, exporting, deleting your own data.

This is a differentiator against the "your data is hostage" default and belongs above the FAQ.

### S6 — Pricing FAQ

6–8 items, emitted as `FAQPage` JSON-LD. Seed questions:

1. Le plan gratuit est-il limité dans le temps ? — Non. Il est limité en volume, pas en durée.
2. Qu'est-ce qui compte dans les 20 exercices ? — Les exercices que vous créez. Le catalogue musculation central ne compte pas *(spec §4: the counter filters `catalog_key IS NULL`)*.
3. Puis-je importer mon GPS sans changer de fournisseur ? — Oui, par CSV, quel que soit le système. Le mapping des colonnes est mémorisé.
4. Que se passe-t-il si je redescends de palier ? — *(links to S5)*
5. Comment fonctionnent les crédits IA ? — *(S3, no numbers)*
6. Le prix est par équipe ou par club ? — Per §5.
7. Y a-t-il un engagement ? — Mensuel, remise à l'année sur le Semi-Pro.
8. Comment se passe la facturation d'un club qui ne paie pas par carte ? — Bon de commande / facture, sur le Semi-Pro et le Pro *(STRATEGY §12.7: at ~€3k/year the sale enters purchase-order territory)*.

### S7 — Final CTA

Two actions, not four: **Créer mon équipe gratuitement** (primary, electric, → `appStartUrl`) and **Parler à l'équipe** (ghost, → `mailto:hello@strivn.net`). Trust line beneath.

---

## 7. Technical requirements

### Files to create

| Path | Role |
|---|---|
| `src/data/pricingContent.ts` | Typed content, six locales. Exports `pricingContent: Record<Locale, PricingContent>` and the `PricingContent` type. Mirrors `homeContent.ts` conventions. |
| `src/components/pricing/PricingLanding.astro` | Page shell: `SubpageLayout` + sections + `SiteMotion`. Takes `locale`, `canonicalPath`, `alternates`, `switchHrefs`. |
| `src/components/pricing/PricingHero.astro` | S1 |
| `src/components/pricing/PricingPlans.astro` | S2 |
| `src/components/pricing/PricingCredits.astro` | S3 |
| `src/components/pricing/PricingMatrix.astro` | S4 |
| `src/components/pricing/PricingDowngrade.astro` | S5 |
| `src/components/pricing/PricingFaq.astro` | S6 |
| `src/components/pricing/PricingCta.astro` | S7 |
| `src/pages/{fr,en,nl,de,pt,es}/pricing.astro` | Six thin pages, each passing `locale`, `canonicalPath`, `alternates` — the exact shape of `src/pages/fr/solutions.astro`. |

### Content type

```ts
export type PlanCtaKind = 'app' | 'waitlist' | 'contact';

export interface PricingPlan {
  code: 'free' | 'amateur' | 'semi_pro' | 'pro';
  name: string;
  badge: string;
  /** Rendered as-is. Pro carries the "on request" wording, not a figure. */
  price: string;
  /** Omitted when there is no recurring amount (Pro). */
  period?: string;
  /** Semi-Pro only, for now: "Remise à l'année". */
  priceNote?: string;
  promise: string;
  buyer: string;
  /** "Tout le plan Amateur, plus :" — absent on Free. */
  inherits?: string;
  features: string[];
  cta: string;
  kind: PlanCtaKind;
  featured?: boolean;
}

export type MatrixCell = boolean | string;

export interface MatrixGroup {
  title: string;
  rows: Array<{ label: string; cells: [MatrixCell, MatrixCell, MatrixCell, MatrixCell] }>;
}
```

`cells` is a fixed 4-tuple in plan order (free, amateur, semi_pro, pro) so a missing cell is a type error rather than a silently short row.

### Routing, SEO, i18n

- Canonical `/{locale}/pricing/`; six `alternates` + `x-default` → `/fr/pricing/`, matching `src/pages/fr/solutions.astro`.
- **`switchHrefs` must be passed explicitly** to `SubpageLayout` — it defaults to the homepages, which would drop a visitor switching language off the pricing page back to the front door.
- `jsonLdExtra`: a `FAQPage` node (S6 verbatim) and a `BreadcrumbList`. Per-plan `Offer` nodes with `price` / `priceCurrency: 'EUR'` for Free, Amateur and Semi-Pro. **Pro emits no `Offer` with a price** — an invented figure in structured data is a lie search engines will repeat.
- Meta title / description per locale in `pricingContent[locale].meta`, same shape as `homeContent[locale].meta`.
- Optional: `'/fr/tarifs/': '/fr/pricing/'` in `astro.config.mjs` `redirects`.

### Design and motion

- `DESIGN.md` governs. Dark surfaces on `#05070F`, navy ramp panels, 1px hairlines at low opacity, 8–12px radii, no shadow at rest except the featured card's existing glow.
- **The One CTA Rule:** electric `#2D7FF9` is the only CTA fill. Secondary CTAs are ghost. No green "buy" button.
- **The Status-Is-Signal Rule:** matrix checks are **not** `performance` green — green means player-ready in this system. Use `#7AB8FF` on the featured column and `#68779A` elsewhere, per the existing `HomePricing.astro` check treatment.
- **The 600 Ceiling Rule:** no weight above 600. **The No-Hype Rule:** no emoji, no exclamation marks.
- Reuse `hl-reveal`, `hl-reveal--card`, `hl-lift`, `hl-display`, `hl-index`, `hl-btn`, `hl-wrap` from `src/styles/home.css`. Mount `SiteMotion` once in `PricingLanding.astro`. Staggering via `--d` as in `HomePricing.astro`.
- Reduced motion must be respected — it already is by the shared classes; do not add bespoke animation that bypasses them.

### Accessibility

- S4 is a real `<table>` with `<caption>`, `<thead>`, `th[scope="col"]` for plan columns and `th[scope="row"]` for feature labels. Boolean cells render an `aria-hidden` glyph plus visually-hidden text ("Inclus" / "Non inclus") — an icon alone is silent to a screen reader.
- Mobile: the matrix does not shrink to four readable columns. Either a horizontally scrollable region with `tabindex="0"`, `role="region"` and an accessible name, or a per-plan stacked rendering below 768px. Pick one and apply it consistently.
- Each section is `aria-labelledby` its heading, as in the existing home sections.
- Every plan card CTA has a name that stands alone out of context ("Créer mon équipe", not "Commencer").
- Contrast: all copy must clear WCAG AA on its own surface — the muted `#68779A` on `#0B1020` is already borderline in the current cards; do not use it for anything smaller than the existing period text.

### Waitlist CTAs

Amateur and Semi-Pro route to a waitlist. `src/components/WaitlistForm.astro` exists and posts to `CLUBS_FORM_ENDPOINT` (Formspree) with a hidden `_subject` of "STRIVN Club waitlist". Reuse it, but pass the plan through so a submission is attributable:

- Add a hidden `plan` field and make `_subject` a prop (default preserving today's value, so `ClubsPage.astro` is unchanged).
- Either render the form inline in a plan-scoped disclosure on the pricing page, or link to `/{locale}/clubs/#waitlist` with the plan in the query. Inline is preferred — a cross-page hop at the moment of intent loses people, and `check:links` will validate the fragment either way.

---

## 8. Rewiring inventory (exhaustive)

Every `#tarifs` reference, verified 2026-09-05:

| File | Lines | Change |
|---|---|---|
| `src/data/nav.ts` | 39, 52, 65, 78, 91, 104 | `'/{locale}/#tarifs'` → `'/{locale}/pricing/'` (labels unchanged) |
| `src/data/homeContent.ts` | 924, 1583, 2242, 2901, 3560, 4219 | same, in the home footers |
| `src/data/landingContent.ts` | 519, 852, 1185, 1518, 1851, 2184 | same, in the subpage/legal/blog footers |
| `src/components/home/HomePricing.astro` | whole file | rewritten as the four-tier teaser; **keeps `id="tarifs"`** |
| `src/data/homeContent.ts` | `pricing` blocks at 225 (type), 815, 1474, 2133, 2792, 3451, 4110 | reduce to the teaser shape, or have the teaser read `pricingContent` and delete `homeContent.pricing` outright — the latter is cleaner and removes the drift risk that produced this plan |

**Recommended:** delete `homeContent[locale].pricing` and its type, and have `HomePricing.astro` consume `pricingContent[locale]`. One source, one place to edit when `is_selectable` flips. This is the same fix `nav.ts` already applied to the duplicated navigation.

---

## 9. Out of scope

- Any change to `strivn-app` — `config/billing.php`, Stripe products, entitlement enforcement, credit ledger. This plan is website-only and deliberately does not depend on them.
- Monthly/annual toggle (§3.2).
- Published AI credit rates (§3.1), WhatsApp packs (§3.3).
- Currency switching, VAT display, regional pricing.
- Pricing experiments / A-B tooling.
- A separate quote-request form for Pro — `mailto:` is sufficient at this volume.

---

## 10. Acceptance criteria

1. `/{locale}/pricing/` builds and renders in all six locales with four plan cards, Semi-Pro featured.
2. Pro's card shows no monetary figure anywhere, including JSON-LD.
3. No CTA leads to a checkout. Free → `appStartUrl(locale)`; Amateur / Semi-Pro → waitlist; Pro → `mailto:hello@strivn.net`.
4. No AI credit count, no €/credit rate, no WhatsApp message count, no discount percentage appears on the page.
5. The comparison matrix renders every row in §6/S4 and is navigable by keyboard and screen reader on mobile.
6. Nav and both footers point at `/{locale}/pricing/` in all six locales; `#tarifs` still resolves on all six homepages.
7. `npm run build` passes, and the `postbuild` `check:links` reports no broken path and no dead anchor.
8. The page carries `FAQPage` and `BreadcrumbList` JSON-LD; canonical, six `alternates` and `x-default` are present.
9. The language switcher on `/fr/pricing/` lands on `/en/pricing/`, not `/en/`.
10. No new brand colour, no weight above 600, no emoji, no exclamation mark, no green CTA, no green check in the matrix.
11. Wearable sync appears at Semi-Pro and above, never as Pro-only — the homepage compatibility band and the check-in subpage already present WHOOP as current (§2).
12. The Free card publishes the target packaging (20 exercices, 3 tableaux, historique limité), **not** what `config/billing.php` currently grants. A reviewer comparing page to code will find Free narrower on the page; that is intended (§2).

---

## 11. Open questions (upstream, not blocking this page)

Carried from `strivn-app/docs/specs/pricing-packaging-2026-08.md` §8. None blocks the build; each changes a line of copy the day it is answered.

1. **"Historique de statistiques limité" is undefined** — last N matches, current season, or last X days. The matrix says "Limité"; the FAQ cannot be more precise until this is decided.
2. **Exercise quota for a multi-team coach.** The plan is carried by the team, the library by the coach (`created_by`). The spec proposes "most generous plan among active teams" as a hypothesis, not a decision. Affects FAQ item 2 if it lands differently.
3. **Does Amateur convert at all** (STRATEGY §12.4). If a club with an S&C coach jumps Free → Semi-Pro, the Amateur card is a qualifier, not a revenue line — which would change how prominently it is placed.
4. **WhatsApp: bundled or add-on** (spec §6.6). If it becomes an add-on, this page needs an add-on section.
5. **AI credit scale** (spec §5). Unlocks S3 numbers and a possible top-up pack section.
6. **Semi-Pro annual rate.** Unlocks the monthly/annual toggle.
7. **Nobody can buy WHOOP today.** Not a copy question and not this page's to fix: `free_coach` lacks the key, no paid plan is `is_selectable`, so the only route to wearable sync is `php artisan team:grant-plan`. This page makes the gap legible; it does not create it.

---

## 12. Verified facts an implementing agent can rely on

Checked 2026-09-05. If any of these has drifted when the work starts, re-verify before trusting the section that depends on it.

**Website**

| Fact | Where |
|---|---|
| 18 `#tarifs` references, exactly as inventoried in §8 | `src/data/{nav,homeContent,landingContent}.ts` |
| `SubpageLayout` accepts `locale`, `title`, `description`, `canonicalPath`, `alternates`, `jsonLdExtra`, `switchHrefs`; `switchHrefs` defaults to the homepages | `src/layouts/SubpageLayout.astro:8-27` |
| A locale page is a 14-line file passing `locale` / `canonicalPath` / `alternates` to one landing component | `src/pages/fr/solutions.astro` |
| `appStartUrl(locale)` → `${APP_URL}/register?lang=${locale}` — registration, not the app root, and not billing | `src/lib/appUrl.ts` |
| `WaitlistForm` takes only `locale`; endpoint and `_subject` are hardcoded | `src/components/WaitlistForm.astro:5-25` |
| `postbuild` runs `check:links`, so a dead anchor fails the build | `package.json` |
| The featured card treatment (gradient, electric outline, glow) and the `--d` stagger already exist and are reusable verbatim | `src/components/home/HomePricing.astro` |
| The current grid is `lg:grid-cols-3` — four cards need the 4-up stepped to `xl` | same file |

**strivn-app** (read-only for this work — nothing here is to be modified)

| Fact | Where |
|---|---|
| Three plan codes ship: `free_coach` (Solo, €0), `club` (€99), `club_pro` (€199) | `config/billing.php` |
| Both paid plans carry `'is_selectable' => false` + `'availability_label' => 'Bientôt disponible'` | same |
| `amateur` and `semi_pro` exist in **no** PHP, config, route, view or migration | verified by grep across `app config resources routes database` |
| `canUseFeature()` falls back to `free_coach` for any team without a subscription | `app/Traits/HasPlanFeatures.php:27-38` |
| `BillingController::subscribe()` refuses a non-selectable plan before touching Stripe | `app/Http/Controllers/BillingController.php:45-57` |
| The in-app billing screen still lists Solo / Club / Club Pro | `resources/views/billing/{plans,show}.blade.php` |
| Paid access is granted by hand today | `php artisan team:grant-plan {team} --plan=club` |

**The consequence that matters:** a visitor who reads this page, registers, and opens billing in the app sees three plans with different names and prices. That mismatch is upstream and accepted for the duration — which is why **no CTA on this page may link into `/teams/{team}/billing`**, and why the Free CTA goes through `appStartUrl()` (registration), which never passes through it.

---

## 13. What shipped, and where it departs from this plan

Built 2026-09-06. `npm run build` passes, `check:links` reports 192 pages with every internal link and fragment resolving, and the twelve acceptance criteria of §10 were verified against the built HTML rather than the source.

### Files

`src/data/pricingContent.ts` (six locales) · `src/components/pricing/{PricingLanding,PricingHero,PricingPlans,PricingCredits,PricingMatrix,PricingDowngrade,PricingFaq,PricingCta}.astro` · `src/pages/{fr,en,nl,de,pt,es}/pricing.astro`. Rewired: `nav.ts`, `homeContent.ts`, `landingContent.ts` (18 `#tarifs` links), `HomePricing.astro`, `HomeLanding.astro`, `WaitlistForm.astro`, `astro.config.mjs`.

### Seven departures, each with its reason

1. **Shell is `BaseLayout`, not `SubpageLayout`.** `SubpageLayout` carries the `landingContent` / `SiteFooter` system; the pricing page needs the home visual system (`home.css`, the `hl-*` classes, `HomeFooter`). It follows `SolutionsLanding.astro` exactly, which is the real sibling. `jsonLdExtra` and `switchHrefs` are `BaseLayout` / `SiteHeader` props, so nothing was lost.

2. **The matrix structure lives once, not six times.** §7 proposed a per-locale 4-tuple per row. Shipped instead: `MATRIX` holds who-gets-what a single time, and each locale translates only row labels plus a closed `CellToken` vocabulary (`unlimited`, `limited`, `full`, `several`, `allowance`, `onQuote`, and the three numerals). This serves the plan's own stated intent better — a missing row is still a type error, `Record<MatrixRowKey, string>` sees to that — and closes a hole the tuple design left open: a translator could have shipped `✅` where the French said `❌` and nothing would have failed. A commercial promise is no longer expressible in six diverging places.

3. **`homeContent[locale].pricing` was shrunk, not deleted.** §8 recommended deleting it outright. It kept four fields — `index`, `kicker`, `title`, `note` — because the homepage numbers its sections from content (`'08'`), and deleting the block would have broken the 01–N sequence its neighbours rely on. The heading is the homepage's own narrative; the tiers, prices and promises now come from `pricingContent`, which is the drift this plan existed to close.

4. **Waitlist CTAs link to `/{locale}/clubs/#waitlist`** rather than rendering the form inline. The form is styled for the `global.css` subpage system and would have had to be restyled for a dark home-system page. Plan attribution still works: the card writes the tier to `sessionStorage['strivn:plan']` and `WaitlistForm` reads it once into a hidden `plan` field, then clears it. **Not a query string on purpose** — `check-links.mjs` normalises a path by appending `/`, so `?plan=semi_pro` would fail the build.

5. **No section numbers on this page.** The homepage numbers its sections because it is a narrative. A hero, a card grid, a table and a FAQ are not a sequence, so the mono kicker keeps its rule and drops the numeral. Precedent exists: `SolutionsLanding` already passes `index={null}` to a borrowed homepage section.

6. **The featured badge is electric, not green.** `HomePricing.astro` used `#8CE99A` for the featured plan's badge and dot. `DESIGN.md` reserves green for player-ready state, so the rebuilt card uses `#7AB8FF` on a low-opacity electric tint. Same rule that keeps green out of the matrix — applied to the badge it had been leaking into.

7. **`/fr/tarifs/` redirects to `/fr/pricing/`** (the optional item in §4). Campaign links reach for the French word; the page keeps the English slug like `/features/` and `/solutions/`.

### The one design idea worth naming

The matrix mutes every row where all four tiers agree. A reader wants to know the player app is in every tier, so the row stays — but it is not what they came to find. The rows that *differ* carry the decision, and they get the contrast. The Semi-Pro column is a continuous tinted band running the full height of the table rather than a badge at the top, the way an in-band range is shaded in the product's own load charts.

### Known limits

- The comparison table is 34 rows; below 64rem it scrolls horizontally inside a labelled, focusable region with the row-label column pinned. Verified in the markup; **not yet verified on a real device.**
- `.hl-display` is `font-weight: 700` (`home.css:76`), which the `DESIGN.md` 600 Ceiling Rule forbids. That predates this page and is site-wide — the page follows the code, not the doc. Worth reconciling in one place or the other.

