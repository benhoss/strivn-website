# Audit comparatif — strivn.net vs staffops.fr

**Date** : 2026-06-17
**Préparé pour** : Ben (lecture rapide, factuel)
**Fenêtre** : 3 mois avant ouverture StaffOps (septembre 2026)

---

## 1. Données brutes collectées

### A) strivn.net — état actuel
- **Titre home FR** : `STRIVN — Toute l'équipe, sous un même toit`
- **H1** : `Toute l'équipe, / sous un même toit.`
- **Sous-titre** : « WhatsApp, Excel, notes papier, mémoire : le quotidien d'un coach est éparpillé. STRIVN réunit convocations, présences, infirmerie, charge et séances dans une seule plateforme, partagée par tout le staff. »
- **CTA primaire** : « Commencer gratuitement » (→ `app.strivn.net`)
- **CTA secondaire** : « Voir la plateforme »
- **Pricing live** : Coach 0 € (forever) · Club "Bientôt" · Club Pro "Sur demande"
- **Pricing dans `copy-v2.md`** : Gratuit 0 € · Club 9 €/mois · Performance 29 €/mois · Academy 79 €/mois → **divergence interne** : le site live n'expose que Coach à 0 €, le doc `copy-v2.md` prévoit une grille 4 paliers. **Aucune page /pricing dédiée live, juste une ancre `#pricing`**.
- **Hero features mises en avant** : Convocations, Présences/RSVP, Infirmerie, Charge & RPE, Séances & tactique, Assistant IA, App joueur native iOS+Android.
- **Section "The reality"** : chips « Le groupe WhatsApp / Le fichier de présences / Les notes d'infirmerie / Le carnet de RPE / Les schémas de séance / La mémoire du coach » → resolve « Une seule plateforme. »
- **Capacités index (8)** : Présences & RSVP · Infirmerie · Charge & RPE · Tests & évaluations · Programmes individuels · Séances & tactique · Rapports · Assistant IA
- **Ton** : coach-à-coach, factuel, concret, anti-hype. Phrases types : « Le mardi à 22h47, le travail de l'ombre continue », « Récupérez vos soirées », « Le terrain d'abord. L'intendance ensuite. »
- **Social proof** : **AUCUN** logo club, AUCUN témoignage, AUCUN chiffre utilisateurs. Juste « Gratuit pour une équipe · sans validation du club · prêt en quelques minutes » et « Le premier paiement arrive quand un club veut gérer plusieurs équipes ». Pas de « +1 200 coachs », pas de badge, pas de presse.
- **CTAs** : « Commencer gratuitement » (×2 hero/final), « Voir la plateforme », « Demander une démo » (mailto), « Parler à l'équipe » (mailto), « Une question avant de démarrer ? » (mailto). Tous email = `hello@strivn.ai`.
- **Meta & SEO** :
  - `<title>` FR/EN/NL présents et uniques par locale
  - `<meta description>` présent, ~155 chars, orienté bénéfice
  - Hreflang EN/FR/NL + `x-default` corrects
  - Canonical par locale
  - Open Graph + Twitter Card présents (image = logo, **pas une image sociale dédiée**)
  - JSON-LD Organization + WebSite présents
  - `robots.txt` : `User-agent: * / Allow: /` + sitemap référencé
  - `sitemap-index.xml` → `sitemap-0.xml` listant **27 URLs** (9 FR, 9 EN, 9 NL)
  - **Pas de schema.org Product/SoftwareApplication**, pas de FAQ schema, pas de Review
- **Visuels** : design system dark OKLCH (navy + electric blue #2d7ff9 + performance green #27d7a1), 2 blooms, typographie **Inter 600 + JetBrains Mono**. Animation hero = fragments épars (mail, sheet, SMS, carnet, note, WhatsApp) qui convergent en un panneau « État équipe » unifié. **Une seule** capture d'app joueur (`screenshots/player-app-agenda.png`). Pas de vidéo démo. Pas de mockup navigateur. Pas d'iPhone 3D. Pas de capture web/desktop du produit staff.
- **Tech stack** : Astro 5 + Tailwind 4 + GSAP + Lenis + Three.js + `@astrojs/sitemap`. Pas de Stripe visible, pas de Meta Pixel, pas de GA4 dans le HTML servi.

### B) staffops.fr — état actuel (site live juin 2026)
- **Titre** : `StaffOps — Football · La boîte à outils du staff`
- **H1** : `Tous vos outils, réunis au même endroit.`
- **Sous-titre hero** : « Adjoint IA, data, scouting, suivi GPS, vidéo IA. La boîte à outils du staff — pensée par un staff, pour le terrain. »
- **CTA primaire** : « Rejoindre la liste d'attente → »
- **CTA secondaire** : « Découvrir les outils »
- **Pricing visible** :
  - Gratuit 0 € (essai Marco + saisie live de base, **sans rapport IA complet ni export PDF**)
  - Coach 9 €/mois (tarif fondateur — accès prioritaire, Marco illimité, rapport IA, export PDF/Excel, historique illimité)
  - Club « Sur devis » (multi-équipes, multi-staff, avant-première)
- **Hero features** (8 tuiles) : Marco IA (sept), Data de match (sept), Scout IA (bientôt), Gestion effectif (bientôt), Séances (bientôt), Vidéo IA (vision), GPS (vision), Médical (vision). **Storytelling très fort sur les 2 outils lancés** (Marco + Data) avec démo conversationnelle vocale intégrée (« On joue Évreux samedi, ils pressent haut. On fait quoi ? » → réponse tactique Marco).
- **Ton** : terrain, voix, décontracté-pro. Vocabulaire 100% foot amateur FR : « un tap joueur, un tap action », « décrocher entre les centraux », « pressing », « opposition 8v8 ». Phrase signature : « pensée par un staff, pour le terrain ».
- **Social proof** : **ZÉRO**. Pas de logo, pas de témoignage, pas de chiffres. Juste « Accès prioritaire & tarif fondateur pour les premiers inscrits ». Site en pre-launch.
- **CTAs** : « Rejoindre la liste » (form email unique en bas), « Découvrir les outils », liens d'ancre Outils/Tarifs/Contact. **1 seul form** email sur tout le site.
- **Meta & SEO** :
  - `<title>` OK
  - **AUCUN `<meta name="description">`**, AUCUN OG, AUCUN Twitter Card, **AUCUN canonical**, **AUCUN hreflang**, **AUCUN JSON-LD**.
  - `robots.txt` : **404**
  - `sitemap.xml` : **404**
  - Pas de robots, pas de schema, pas de hreflang. Site **techniquement invisible** pour Google sauf autorité de domaine.
- **Visuels** : branding Bebas Neue + Anton + Archivo (Google Fonts), palette **bleu + or**. Mockup **iPhone 3D** de l'app (avec conversation Marco vocale affichée), mockup saisie de match (« SUC vs Évreux 62' » avec plan 4-3-3 positionnel + actions tap). **Beaux mockups produit** même si l'app n'existe pas encore = pari marketing assumé.
- **Tech stack visible** : `@supabase/supabase-js@2` chargé en prod (donc l'auth + DB sont déjà branchés, c'est du vrai, pas un pur teaser). Pas de Stripe visible, pas de Meta Pixel, pas d'analytics tiers.

---

## 2. Tableau comparatif côte-à-côte

| Dimension | strivn.net | staffops.fr | Gagnant |
|---|---|---|---|
| **Tagline** | « Toute l'équipe, sous un même toit » | « Tous vos outils, réunis au même endroit » | staffops (plus simple, plus concret, plus « outil ») |
| **Sous-titre** | « WhatsApp, Excel, notes papier, mémoire… STRIVN réunit… » (énumération longue, problème → solution) | « Adjoint IA, data, scouting, GPS, vidéo IA. La boîte à outils du staff. » (feature parade + claim d'autorité) | tie — staffops plus punchy, strivn plus pédagogique |
| **Cible** | Coach amateur/multi-casquettes foot BE-FR-NL (explicite : « sans validation du club ») | Coach amateur foot FR seul + staff solo (« conçu pour être utilisé seul ») | staffops (segmentation plus nette, plus émotionnelle) |
| **Pricing** | 0 € forever (live) · grille 4 paliers dans `copy-v2.md` jamais publiée | 0 € limité → 9 €/mois Coach → Sur devis Club | tie — strivn plus agressif (gratuit total), staffops plus crédible (monétise le Coach à 9 €) |
| **Hero features** | 8 modules liste plate (présences, infirmerie, charge, séances, tests, programmes, rapports, IA) | 8 tuiles avec **statut roadmap visible** (sept / bientôt / vision) | staffops (la roadmap visible rassure et crée FOMO) |
| **Ton** | Coach-à-coach, anti-hype, factuel, mature | Coach-à-coach mais plus hype, signature « pensée par un staff, pour le terrain », orienté démo | tie — strivn plus mature, staffops plus « fondateur ambitieux » |
| **Vocabulaire foot** | « convocation, RPE, ACWR, séance, pressing, bloc tactique » — dense, technique mais explicité | « un tap joueur, un tap action, décrocher entre les centraux, 4-3-3, opposition 8v8 » — **ultra-terrain** | staffops (parle VRAIMENT comme un coach amateur le soir à la buvette) |
| **Social proof** | Aucun (0 logo, 0 témoignage, 0 chiffre) | Aucun (mais statut pre-launch excuse) | tie — les deux sont à zéro |
| **CTAs** | 5 CTAs (signup ×2, demo, contact, mailto) — éparpillés | 1 CTA répété (waitlist email) — **un seul tunnel de conversion** | staffops (focus, un seul objectif : emails) |
| **SEO readiness** | 27 URLs indexées, sitemap, robots, hreflang, schema.org Org, OG, Twitter Card | **0 SEO technique** (pas de robots, pas de sitemap, pas de meta desc, pas de schema) | strivn (écrasant) |
| **Visuels** | 1 mockup app joueur, animations GSAP subtiles, design tokens OKLCH premium | 3+ mockups iPhone 3D (Marco conversation + Data match + Plan 4-3-3), Bebas Neue punchy | staffops (visuels produit plus nombreux, plus identifiables foot) |
| **Vidéo** | Aucune | Aucune | tie — aucun n'en a |
| **Tech stack réel** | Astro 5 + Tailwind + GSAP, app sur `app.strivn.net` séparé | Supabase JS client chargé en prod (auth+DB live) | staffops (signe que le produit est plus « branché ») |
| **Produit réel vs promesse** | App en ligne, multiple modules, produit qui tourne | Pre-launch, 0 utilisateur, **Marco & Data annoncés pour septembre** | strivn (live, utilisable) |

---

## 3. Top 5 forces StaffOps à connaître

1. **Marco = un nom + un persona**. Le coach amateur se souvient d'un adjoint IA, pas d'un « assistant ». StaffOps a vendu un personnage avant de vendre une feature. C'est un coup marketing énorme pour septembre.
2. **Vocabulaire 100% terrain**. « Un tap joueur, un tap action » = une promesse produit tenue en 4 mots. Aucun mot SaaS/IA/jargon dans la home. Strivn a plus de mots techniques (RPE, ACWR, monotonie).
3. **Roadmap visible avec statuts**. Tuiles avec « Septembre / Bientôt / Vision » = preuve d'ambition + gestion de l'attente + tri des prioritaires. Strivn ne montre pas ce qui arrive.
4. **Mockups produit denses et identifiables foot**. Plan 4-3-3 sur le terrain, conversation vocale Marco, joueur « Faure » au poste 9, score live. Le visiteur imagine **lui** utiliser l'app à la 62'. Strivn montre un agenda joueur générique.
5. **Un seul tunnel = un seul KPI**. Liste d'attente email = mesure claire du pré-launch. Strivn éparpille entre signup app, mailto démo, mailto contact, hello@strivn.ai. Pas de funnel unifié.

## 4. Top 5 forces strivn à pousser

1. **Produit live et utilisé**. Strivn a une vraie app qui tourne, multi-locales (FR/EN/NL), StaffOps vend du rêve qui ouvre dans 3 mois. **C'est l'argument #1 à mettre en avant.**
2. **SEO readiness 10× supérieur**. 27 URLs indexées, sitemap, robots, hreflang, schema.org, OG, Twitter Card. Si Ben tape « application coach foot amateur Belgique » aujourd'hui, **seul strivn peut ranker**. StaffOps = 404 sur robots et sitemap.
3. **Grille plus complète et plus profonde**. Strivn couvre 8 modules (convocations, présences, infirmerie, charge, tests, programmes, séances, rapports). StaffOps ouvre avec 2 (Marco + Data) en septembre, les 6 autres en « bientôt/vision ». Strivn = plateforme, StaffOps = 2 outils.
4. **Multi-locales FR/EN/NL + multi-pays**. Positionnement BE-FR-NL explicite. StaffOps est FR-only. Marché flamand = ouvert.
5. **Pricing Coach gratuit forever (pas freemium)**. Strivn gratuit total sans payer pour débloquer les outils essentiels. StaffOps à 9 €/mois bloque le rapport IA et l'export PDF derrière le paywall. **Argument massue pour le coach amateur.**

## 5. Quick wins strivn avant fin août 2026 (par priorité)

Format : **Quick win — effort / impact**

### A. SEO & indexation (3 jours · impact ÉNORME)

1. **Schema.org SoftwareApplication + FAQPage + Product** sur la home FR + `/pricing` + `/features/*` — `low effort / high impact`. StaffOps est à 0, c'est du SEO gratuit pendant 3 mois.
2. **Publier `/fr/pricing` comme page dédiée** avec la grille 4 paliers du `copy-v2.md` (Gratuit 0 € / Coach 9 € / Performance 29 € / Academy 79 €). **Pourquoi c'est dans copy-v2 et pas sur le site ?** Il y a une divergence à fermer. — `medium effort / high impact`.
3. **Pages `/clubs` et `/features` ont-elles du contenu propre ou juste des liens ?** Vérifier et ajouter 600 mots de copy par page feature (sessions, training-load, communication, medical) — déjà en grande partie là d'après le code, juste besoin d'audit de profondeur. — `low effort / medium impact`.
4. **Créer `/blog` ou `/journal-de-bord`** avec 3-4 articles SEO « comment gérer les présences en club amateur », « RPE pour les coachs solos », « ACWR sans doctorat » pour ranker sur les requêtes longue traîne foot amateur. — `medium effort / high impact` (3 mois de ramp-up SEO).
5. **Remplacer l'image OG** par une image sociale dédiée 1200×630 (mockup produit ou visuel signature), pas le logo. — `low effort / medium impact`.

### B. Copy & conversion (1 semaine · impact ÉLEVÉ)

6. **Reprendre la promesse de `copy-v2.md`** (« Planifie tes séances avec les données de ton groupe. Sans te noyer dans l'admin. ») — plus concrète et orientée coach que « Toute l'équipe sous un même toit ». Tester en A/B la headline. — `low effort / high impact`.
7. **Un seul CTA principal, partout**. Actuellement 5 CTAs dispersés. Choisir « Commencer gratuitement → app.strivn.net » comme primaire et **supprimer** les variantes mailto du hero (les garder seulement dans footer + support). Le mailto « Demander une démo » dilue. — `low effort / high impact`.
8. **Ajouter une section « Roadmap publique »** façon StaffOps (avec statuts : Disponible / Bientôt / Vision) pour montrer l'ambition et répondre à « vous allez ajouter quoi ? ». Possible sans tout révéler : « Tests physiques (Q3) », « Module GPS (Q4) », « Marque blanche clubs (2027) ». — `medium effort / medium impact`.
9. **Bandeau d'urgence réel** au-dessus du hero si pertinent (« 14 réponses sur 16, sans relancer personne → Démo 2 min ») ou transformer `s-hero__reassurance` en preuve chiffrée dès qu'on a des chiffres (même +50 coachs).

### C. Visuels & preuve sociale (2-3 semaines · impact ÉLEVÉ)

10. **Créer 3 mockups produit HTML/CSS** des écrans clés StaffOps n'a pas mais qui sont plus parlants que l'agenda joueur : (a) fiche joueur staff avec timeline médicale, (b) tableau charge hebdo RPE/ACWR, (c) écran convocation/RSVP. Le code existe déjà (`s-diptych`), il suffit de les **exporter en PNG 1600px** pour les utiliser en social, slides, OG, presse. — `low effort / high impact`.
11. **Mini vidéo démo 60-90s** en loop silencieux dans le hero. Pas de voix off. Juste un screen recording de l'app : créer équipe → envoyer convocation → 14 réponses qui tombent → panneau « État équipe » qui se met à jour. Lenis + GSAP permettent de le faire en HTML/CSS sans After Effects. — `medium effort / high impact`.
12. **Page « Utilisé par » `/temoignages`** même vide : démarrer avec 3 coachs beta belges (même gratuitement, même en échange de 30 min visio pour une citation). Captures écran WhatsApp du coach qui dit « ça m'a sauvé ma soirée de mardi ». — `medium effort / very high impact`.
13. **Logo wall** « Équipes qui utilisent STRIVN en beta » — même 5 logos de petits clubs amateurs (RWD Molenbeek, U Rixensartoise, RFC Liège, IES Mouscron, CS Verviétois…) ça compte. **L'over-match contre StaffOps sur la preuve sociale est l'écart le plus dangereux** pour septembre. — `medium effort / very high impact`.
14. **Compteur live « X coachs utilisent STRIVN cette saison »** même si c'est 47 ou 120. L'absence totale de chiffre est la plus grande faiblesse actuelle. — `low effort / high impact`.

### D. Trust signals (1 semaine · impact MOYEN)

15. **Page `/about` ou section footer « Qui sommes-nous »**. Nom des fondateurs, photo, parcours (UEFA B ? ancien joueur pro ? kiné ?). Aucune présence humaine sur le site actuellement. — `low effort / medium impact`.
16. **Page `/securite` ou bandeau footer** « Données hébergées en UE (Hetzner/OVH Frankfurt), conformes RGPD, chiffrement at rest + in transit ». — `low effort / medium impact`.
17. **Lien presse / contact RP** dédié (ex `press@strivn.ai`) — pas critique mais signal de sérieux. — `low effort / low impact`.

### E. Anti-positionnement StaffOps (continu)

18. **Page comparatif transparente** `/vs/staffops` ou bloc FAQ « Vous vs StaffOps, Ball, Smartcoach ? ». Anticiper les questions Google « strivn vs staffops » qui vont exploser en septembre. — `medium effort / high impact` à partir de sept.
19. **Argument « gratuit forever pour le coach solo »** porté en haut du pricing. StaffOps fait payer le rapport IA — Strivn l'inclut. À marteler dans les FAQ et la home.

---

## 6. Recommandation stratégique — priorité absolue

**Fermer l'écart de preuve sociale AVANT août.** C'est le seul angle mort.

StaffOps a (1) une promesse produit cristallisée (Marco = persona), (2) un vocabulaire terrain parfait, (3) un funnel email propre. Mais StaffOps a (a) zéro SEO, (b) zéro produit live, (c) zéro preuve sociale.

**Le plan en 3 phrases :**
1. **Semaine 1-2** : SEO technique (schema.org SoftwareApplication + FAQPage + page `/pricing` live avec grille 4 paliers + OG image dédiée). Effort faible, gain de position Google immédiat sur des requêtes où StaffOps ne peut PAS ranker en septembre.
2. **Semaine 3-6** : Bombe de preuve sociale — 3-5 témoignages vidéo + logo wall + compteur live. C'est **la** chose qui séparera strivn d'un « joli site » d'un « produit adopté par des coachs ».
3. **Semaine 6-10** : Vidéo démo + roadmap publique + page comparatif StaffOps en pré-lancement. Positionner strivn comme le choix rationnel (live, gratuit, multi-pays) pendant que StaffOps vend du rêve.

**Si on devait n'en faire qu'un** : témoignages + logo wall. StaffOps arrive sans rien, strivn doit arriver avec 5 vrais coachs qui disent « je l'utilise déjà » sur la home.

---

## 7. Divergences internes détectées (à arbitrer)

- `copy-v2.md` prévoit une grille 4 paliers (Gratuit / Club 9 € / Performance 29 € / Academy 79 €) mais le site live n'expose que Coach 0 €. **À aligner avec Ben** : on publie la grille ou on garde le gratuit-total comme positionnement ?
- `design.md` spécifie Geist 600 + Geist Mono ; le code HTML live sert **Inter + JetBrains Mono**. Le design tokens est mentionné (`public/tokens.css`) mais le composant `PremiumLanding.astro` utilise encore Inter. **Le design system n'est pas appliqué partout** — soit c'est intentionnel (tokens.css = futur, le site vit sur l'ancien), soit c'est un chantier ouvert.
- Le `claude-code/launch-video/` et `hero-mockup.html` (38k de HTML !) existent dans le repo mais ne sont pas intégrés à la home live. **Potentiel énorme de rafraîchissement visuel** sans toucher au copy.

---

## 8. Fichiers consultés (trail)

- `/home/benoit/.openclaw/workspace/strivn-website/src/pages/index.astro`
- `/home/benoit/.openclaw/workspace/strivn-website/src/components/PremiumLanding.astro`
- `/home/benoit/.openclaw/workspace/strivn-website/src/data/landingContent.ts`
- `/home/benoit/.openclaw/workspace/strivn-website/src/pages/fr/features/sessions.astro`
- `/home/benoit/.openclaw/workspace/strivn-website/copy-v2.md`
- `/home/benoit/.openclaw/workspace/strivn-website/design.md`
- `/home/benoit/.openclaw/workspace/strivn-website/astro.config.mjs`
- `/home/benoit/.openclaw/workspace/strivn-website/package.json`
- `/tmp/staffops.html` (scrape brut)
- `https://strivn.net/fr/`, `/`, `/fr/features/sessions` (fetch HTML statique)
- `https://strivn.net/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`
- `https://staffops.fr/robots.txt` (404), `/sitemap.xml` (404)