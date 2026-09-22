# Refonte complète du site · cadrage

Date : 2026-09-22 · Branche : `claude/website-redesign-mockup-k5vlz0`
Référence visuelle : `redesign-mockup.html` (racine du dépôt), validée par Benoit le 2026-09-22.

## 1. Objectif

Porter la direction de la maquette sur **toutes les pages, dans les six langues** (FR, EN, NL, DE, PT, ES), sans changer la stratégie (PRODUCT.md), la palette ni la voix. La refonte porte sur :

1. **La narration.** L'accueil suit la semaine du préparateur (LUN import GPS → MER readiness → MER plan → JEU séance live → joueurs → DIM après le match → LUN rapport). Les autres pages reprennent le même cadre à rail (« stamp » mono à gauche) quand leur contenu est une séquence réelle, et un cadre simple sinon.
2. **La typographie.** Archivo à chasse variable (titres à `wdth` 78–90, graisse 600 au plus) remplace Inter. JetBrains Mono garde chiffres, horodatages et libellés.
3. **La densité.** Moins de sections, plus de preuve produit. Pas de grilles de cartes interchangeables : des colonnes séparées par des filets (`st-cols`), des listes à filets (`st-facts`, `st-rules`), des surfaces produit (`st-panel`).
4. **L'état au repos.** Tout est lisible sans défiler. Aucune section à `opacity: 0` en attente d'un observer, aucun compteur remis à zéro. L'animation part d'un état complet.
5. **La discipline couleur.** Les hex hors charte des composants actuels (`#7AB8FF`, `#8CE99A`, `#FF8400`, `#FF5C33`, `#05070F`, `#070A14`…) disparaissent au profit des tokens. Vert, ambre, rouge décrivent un joueur ; électrique est la seule couleur d'action.

## 2. Ce qui ne change pas

- La stratégie, l'ICP et les tiers (PRODUCT.md, `pricingContent.ts`). Les prix viennent toujours de `PLAN_PRICES` via `planPrice()`.
- Les URL, les `alternates`/hreflang, le JSON-LD, les redirections, le sitemap. `scripts/check-links.mjs` et `scripts/check-pricing.mjs` doivent passer (ils tournent en `postbuild`).
- Les règles de voix (PRODUCT.md § Voice) : vouvoiement, verbe en tête, pas de tiret cadratin, pas d'exclamation, pas d'emoji, un chiffre par section, mots bannis, « Le système d'exploitation… » réservé au hero de l'accueil et au meta title.
- « Ce que nous ne pouvons pas encore affirmer » : pas de connecteur GPS livré, pas d'API publique, pas d'échelle de crédits IA inventée, aucun palier payant achetable en ligne.
- Les captures réelles (`public/screenshots`), vidéos et posters restent ; elles passent dans le cadre `st-shot`.

## 3. Fondations (faites, commit « Pose le système v2 »)

| Fichier | Rôle |
|---|---|
| `src/styles/system.css` | Tailwind v4 (theme + utilities, sans preflight), tokens exposés en couleurs de thème (`bg-void`, `text-ink-2`, `border-line`, `text-ready`…), primitives `st-*`, pied de page. Chargé par `BaseLayout` sur toutes les pages. |
| `src/styles/global.css` | Base historique. Polices passées à Archivo + JetBrains Mono. Sera purgée à la fin (lot 7). |
| `src/styles/home.css` | Héritage `hl-*`. Ne charge plus Tailwind. **Supprimé en fin de refonte** : aucun composant refait ne doit s'en servir. |
| `src/components/SiteHeader.astro` | Barre pleine largeur, sticky, filet dessous. Slot `sub` pour une seconde ligne (rail de la semaine sur l'accueil). |
| `src/components/home/HomeFooter.astro`, `SiteFooter.astro` | Même pied de page `st-foot`. |
| `src/components/SiteMotion.astro` | Ne cache plus rien. Seul reste `[data-st-inview]` → `.is-inview` pour démarrer une animation à l'écran. |

Primitives disponibles (voir les commentaires de `system.css`) : `st-wrap`, `st-narrow`, `st-sec`, `st-frame` + `st-stamp` (`__a` jour, `__b` heure, `__c` quoi), `st-head`, `st-display`, `st-h1`, `st-h2`, `st-h3`, `st-h4`, `st-lede`, `st-body`, `st-small`, `st-label`, `st-eyebrow`, `st-num`, `st-figure`, `st-link`, `st-btn` (`--primary`, `--ghost`, `--sm`), `st-ctas`, `st-fine`, `st-chip` (`--ready`, `--watch`, `--risk`, `--wait`), `st-tag`, `st-panel` (`__bar`, `__body`, `--float`), `st-block`, `st-shot`, `st-paper`, `st-tile`, `st-proposal`, `st-facts`, `st-rules`, `st-cols` (`--cols`), `st-split` (`--wide-left`, `--wide-right`, `--top`), `st-kpi`, `st-meter`, `st-faq`, `st-grid-bg`, `st-crumbs`, `st-live`.

L'en-tête est **sticky dans le flux** : les pages n'ont plus besoin de dégagement pour une nav fixe (supprimer les `pt-20`/`pt-24` d'autrefois).

## 4. Inventaire et lots

179 pages construites. Tout est piloté par des données par langue : refaire un gabarit refait ses six langues.

| Lot | Gabarit | Pages × langues | Fichiers possédés |
|---|---|---|---|
| 1 · Accueil | `HomeLanding` | 6 | `src/components/home/*` (sauf `HomeFooter`, `HomeIcon`), `src/data/homeContent.ts`, `src/pages/*/index.astro` |
| 2 · Fonctionnalités détaillées | `SubLanding` | 16 × 6 = 96 | `src/components/sub/**`, `src/components/shared/PartnerTiles.astro`, `src/data/subpages/*` (structure seulement) |
| 3 · Index fonctionnalités + Plateforme | `FeaturesLanding`, `SolutionsLanding` | 12 | `src/components/feat/*`, `src/components/sol/*`, `featuresIndexContent.ts`, `solutionsContent.ts` |
| 4 · Préparateurs physiques | `ScLanding` | 6 | `src/components/sc/*`, `src/components/shared/ReadinessBoard.astro`, `shared/ReportingDashboard.astro`, `scPageContent.ts` |
| 5 · Tarifs, Clubs, Jeunes | `PricingLanding`, `ClubsPage`, `YouthPage` | 18 | `src/components/pricing/*`, `ClubsPage.astro`, `YouthPage.astro`, `WaitlistForm.astro`, `PremiumLanding.astro` (mort, à supprimer), `pricingContent.ts`, `clubsContent.ts`, `youthContent.ts` |
| 6 · Blog, légal, support | `BlogLayout`, `LegalLayout`, `SubpageLayout` | ~40 | `src/layouts/*` (sauf `BaseLayout`), `BlogCard.astro`, `src/styles/blog.css`, `src/pages/**/blog/**`, `src/pages/**/privacy.astro`, `src/pages/**/support.astro`, `landingContent.ts` |
| 7 · Intégration | tout | 179 | fusion, purge de `home.css` et du code mort de `global.css`, QA croisée, DESIGN.md |

Règle de possession : un lot ne modifie que ses fichiers. `system.css`, `global.css`, `BaseLayout`, `SiteHeader`, les pieds de page, `HomeIcon`, `nav.ts` et `lib/*` sont en lecture seule pour les lots 1–5. Un besoin de primitive nouvelle se règle dans le `<style>` du composant ; le lot 7 remonte ce qui se répète.

## 5. Direction par gabarit

**Accueil (lot 1).** La maquette, section par section : hero (CSV → décisions, animé depuis l'état résolu), bande de preuve (50+ équipes, écussons, Barça Innovation Hub), LUN import (tableur papier → correspondance des colonnes, quatre chiffres), MER readiness (tableau + « Pourquoi L. Moreau »), MER microcycle (graphique SVG à l'échelle + ajustements), JEU séance live, joueurs (téléphones, faits chiffrés, WHOOP et marques compatibles), DIM assistant + rapport du lundi, tarifs en bande à quatre colonnes, FAQ, CTA final. Rail de la semaine dans le slot `sub` de l'en-tête (masqué sous 820 px). Les sections Spectre, Plateforme, Convaincre, Solutions disparaissent de l'accueil. Contenu restructuré dans `homeContent.ts` et traduit dans les six langues.

**Sous-pages fonctionnalités (lot 2).** Hero en deux colonnes (fil d'Ariane `st-crumbs`, `st-h1`, lede, points en `st-rules`, CTA pair) avec la capture ou le visuel CSS dans `st-panel`/`st-shot`. Sections en bandes `st-sec` séparées par un filet, sans alternance de fonds. Visuels CSS (`sub/visuals/*`) repeints aux tokens, puces de statut en `st-chip`. Callouts et notes en `st-block` ou `st-proposal`, jamais en bordure latérale colorée.

**Index fonctionnalités et Plateforme (lot 3).** Un sommaire lisible : modules groupés par moment de la semaine, présentés en `st-cols`/listes à filets avec lien vers chaque sous-page ; preuves produit gardées (moniteur, reporting, IA) dans le nouveau style.

**Préparateurs physiques (lot 4).** Page phare Semi-Pro : cadre à rail, la journée et la semaine du préparateur (ScDaily, charge, tests, force, bibliothèque, rapports) dans l'ordre réel de travail.

**Tarifs, clubs, jeunes (lot 5).** Tarifs : bande à quatre paliers comme l'accueil, matrice comparative en tableau à filets (`overflow-x: auto`), crédits IA, FAQ. Clubs et jeunes : même système, sans rail si le contenu n'est pas une séquence.

**Blog, légal, support (lot 6).** Lecture longue : `st-narrow`, titres Archivo, corps 17–18 px, mono pour dates et catégories, cartes de blog en liste à filets.

## 6. Critères d'acceptation (chaque lot)

1. `npm run build` passe, `postbuild` compris (liens, prix).
2. Aucune couleur hex dans le balisage des composants du lot, hors SVG de marque (logos stores) et `#fff` des tuiles de logos. Tokens Tailwind (`text-ink-2`) ou variables (`var(--color-…)`).
3. Aucune classe `hl-*`, aucun import de `home.css`, aucun `font-bold`/`font-extrabold` (plafond 600).
4. Rien de caché au repos. `prefers-reduced-motion` respecté.
5. Aucune barre de défilement horizontale à 390 px ; gouttière ≥ 16 px.
6. Captures vérifiées à 1440 px et 390 px, en FR et dans une autre langue au moins (les textes allemands sont les plus longs).
7. Voix : les nouvelles chaînes respectent PRODUCT.md, dans les six langues.

## 7. Risques

- **Longueur des textes DE/NL** dans les titres étroits : tester `/de/`.
- **Parité des six langues** dans `homeContent.ts` : le type `HomeContent` doit rester unique pour que le compilateur signale un champ manquant.
- **SEO** : garder titres, descriptions, H1 uniques, FAQ JSON-LD rendue telle quelle.
- **Poids** : Archivo variable (wdth + wght) ; un seul appel Google Fonts, via `global.css`.
