# Site généré (bêta) · cadrage

Date : 2026-11-01 · Statut : **à valider par Benoit, rien n'est construit avant validation**
Dépôts : `strivn-website` (page, rendu, pages de réponse) et `P3rform` (compositeur IA, hand-off, analytique).

## 1. Objectif

Le site actuel compte 169 pages en six langues. Il est dense, et chaque visiteur arrive avec une seule question : préparateur, entraîneur, joueur, parent, recruteur, kiné, direction de club. La bêta teste un autre modèle :

1. Un **hero fixe et générique** dit ce qu'est STRIVN.
2. L'assistant demande « Que puis-je vous expliquer ? ». Le visiteur clique un raccourci (profil ou sujet) ou tape sa question.
3. La suite de la page est **composée en direct pour lui**, à partir des sections et des visuels qui existent déjà sur le site, remplis depuis la documentation.
4. En chemin, l'assistant apprend qui est le visiteur. Il l'amène à créer son compte, avec un formulaire pré-rempli et un onboarding qui part de ce qu'il a déjà dit.
5. Les questions récurrentes deviennent des **pages de réponse statiques et indexées**, après validation humaine. C'est le gain SEO.

**Critère de succès de la bêta.** On ne le mesure pas au nombre de visites. On regarde trois choses : la part des visites qui posent au moins deux questions, la part qui finit en inscription, et une première série de pages de réponse publiées à partir de vraies questions.

## 2. Décisions validées

| Sujet | Décision |
|---|---|
| Emplacement | Page séparée `/fr/beta/` et `/en/beta/`, `noindex`. Le site actuel n'est pas touché. |
| Rendu | Les **composants Astro existants**, rendus à la demande par une route serveur (adaptateur Node sur Forge). Toutes les autres pages restent statiques. Aucun nouveau composant d'interface. |
| Vocabulaire | L'IA ne dessine rien. Elle choisit et remplit des sections `SubSections`, place des visuels du registre `SubVisual`, et insère des bandeaux d'une courte liste approuvée sans toucher à leur texte. |
| Sources | Documentation (docs-site), textes du site (`src/data`), PRODUCT.md. **Jamais le code source.** |
| GPS | On s'aligne sur PRODUCT.md : import de n'importe quel export, connexion directe en Pro mise en place avec le club. Aucun connecteur présenté comme livré. PRODUCT.md reste la seule référence ; quand le connecteur sortira, on mettra ce fichier à jour et l'IA suivra. |
| Langues | FR et EN au lancement. NL, DE, ES et PT une fois le compositeur réglé. |
| Hand-off | Inscription pré-remplie, et l'entretien d'onboarding part du profil. Le compte n'est pas créé dans le chat. |
| SEO | Trois couches (§ 8). Les pages générées n'atteignent Google qu'après approbation, via une PR. |
| Validation des pages | PR sur `strivn-website` avec aperçu, mergée par Benoit. |
| Analytique | Écran super-admin dans l'app, à côté du CRM. Il porte un bouton « En faire une page de réponse » qui ouvre la PR. |
| Budget | Plafond de ~150 €/mois. Au-delà du budget du jour, la page redevient statique. |
| Code déjà écrit | Gardé comme référence, sur deux branches locales non poussées (§ 11). |

## 3. Ce qui ne change pas

- Les 169 pages, leurs URL, hreflang, JSON-LD, redirections et sitemap. `check-links` et `check-pricing` passent toujours en `postbuild`.
- PRODUCT.md : voix, mots bannis, et la section « What we may not claim yet ».
- `deploy.sh` reste un rsync de `dist/`. Seule la route serveur de la bêta s'y ajoute (§ 6).
- Les composants existants. Une correction qu'il faudrait y apporter se fait pour tout le site, jamais dans une copie propre à la bêta.

## 4. Parcours du visiteur

1. **Arrivée sur `/fr/beta/`.** `BaseLayout` et `SiteHeader` comme partout, puis un hero `SubHero` avec un texte propre à la bêta. Juste en dessous : la question de l'assistant, le champ de saisie, les raccourcis « Je suis… » (7 profils) et « Ou partez d'une question » (5 sujets). Un lien `?q=` ouvre directement sur une question, ce qui sert aux campagnes et aux pages de réponse.
2. **Première question.** Une bande de sections se compose sous le hero et apparaît section par section. Une ligne d'état indique ce que l'assistant lit (« Lecture de la documentation : import GPS »).
3. **Chaque réponse se termine par :**
   - des liens `crosslink` vers les pages indexées du site
   - 3 ou 4 suggestions de suite
   - au plus une question sur le visiteur (rôle, sport, GPS, effectif, ce qui lui prend du temps), avec des options cliquables
4. **Après 2 à 3 échanges, si l'intérêt est net.** Une bande de hand-off apparaît, faite de composants existants (`SubClosing` ou `crosslink` + `callout`). Ce qu'elle propose dépend du profil :
   - **Préparateur ou entraîneur :** « Créer mon compte » vers `app.strivn.net/register?lang=fr&discovery={token}`.
   - **Pro, plusieurs équipes, connexion GPS :** « Parler à Benoit ».
   - **Joueur ou parent :** « Transmettre à mon coach », parce que c'est le coach qui invite.
5. **Inscription.** Le nom et l'email déjà donnés sont pré-remplis. Le compte récupère la visite, et l'onboarding commence par « Vous suivez 22 joueurs avec Catapult, c'est bien ça ? » au lieu de tout redemander.
6. **Rechargement de la page.** La visite revient, grâce au jeton gardé dans le `localStorage`.

## 5. Vocabulaire composable : uniquement l'existant

### 5.1 Sections (`src/data/subpages/types.ts` → `SubSections.astro`)
Les 15 sortes sont : `cards`, `rows`, `columns`, `panels`, `compare`, `callout`, `note`, `rail`, `nested`, `stats`, `crosslink`, `visual`, `video`, `stores`, `logos`. Toutes acceptent l'en-tête commun : `kicker`, `title`, `body`, `visual`, `callouts`, `note`, `foot`.

Exclues de la composition :
- `logos`, parce qu'aucune preuve client ne peut être générée ;
- `stores`, réservé à la page app joueur.

### 5.2 Visuels (registre `SubVisual.astro`)
Les 24 captures dessinées : `gps-blocks`, `load-board`, `checkin-signals`, `week-plan`, `player-phone`, `rtp-protocol`, `scouting-brief`… L'IA les nomme par leur identifiant, rien d'autre. Chacune reçoit une description d'une ligne dans le contrat (§ 5.4) pour que l'IA sache ce qu'elle montre.

### 5.3 Bandeaux insérables tels quels (liste à auditer en phase 0)
Les candidats sont `HomeImport`, `HomeReadiness`, `HomeMicrocycle`, `HomePlayers`, `ScLoadPlanning`, `ScDaily` et `SolRoles`. Ils reçoivent leur contenu de `homeContent[locale]`, `scPageContent[locale]` ou `solutionsContent[locale]`. L'IA les insère par identifiant, et leur texte n'est jamais réécrit.

Un bandeau entre dans la liste seulement s'il remplit trois conditions :
- il se lit hors de sa page (pas de « comme vu plus haut ») ;
- il ne contient ni prix, ni FAQ, ni CTA d'inscription ;
- ses props annexes (`pct`, `status`) ont une valeur par défaut correcte.

### 5.4 Contrat partagé
- **Un schéma JSON généré depuis `types.ts`** (`scripts/build-compose-schema.mjs`, par exemple avec `ts-json-schema-generator`) et versionné dans `strivn-website`. Il est complété par :
  - la liste des visuels et des bandeaux autorisés ;
  - leurs descriptions ;
  - la liste des URL internes valides, tirée du build et du sitemap, pour les `crosslink`.
- **L'app lit ce schéma**, une copie synchronisée comme `docs:sync`. Elle valide chaque section avant de l'envoyer : une sorte inconnue, un champ hors schéma, un visuel absent du registre ou un lien hors du site, et la section est rejetée.
- **Un contrôle en `postbuild`** échoue si le schéma versionné ne correspond plus à `types.ts`. C'est le site qui reste maître du vocabulaire.

## 6. Architecture

```
navigateur ──POST question──▶  strivn.net/beta/turn       (route Astro rendue à la demande, Node)
                                   │  appel serveur à serveur, en flux
                                   ▼
                               app.strivn.net/api/discover (Laravel : compositeur, sources, garde-fous)
                                   │  sections JSON validées, une par ligne
                                   ▼
                               route Astro : chaque section → HTML via les composants existants
navigateur ◀── fragments HTML en flux (SSE) ──┘
```

- **Le compositeur (Laravel).** Il reçoit la question, le profil et un résumé des tours précédents. Il cherche dans les sources (§ 7), puis demande au modèle des sections au format du contrat, une par ligne, pour que la page se construise au fil de l'eau. Il valide chaque section, l'enregistre et la renvoie. Les clés du modèle restent dans l'app.
- **Le rendu (Astro, Node).** Une seule route `prerender = false`. Elle relaie la question, rend chaque section reçue avec l'API Container d'Astro (`SubSections`, `SubVisual`, bandeaux) et renvoie du HTML. Le navigateur n'insère que du HTML produit par nos composants : l'IA n'écrit jamais de HTML.
- **Le CSS.** Il est le point technique principal (§ 12). La page `/beta` importe statiquement tous les composants autorisés, pour que leurs styles soient dans son bundle avant qu'un fragment arrive.
- **L'hébergement.** Le site statique reste servi par nginx sur Forge. Un démon Node supervisé (`node dist/server/entry.mjs`) sert uniquement `/fr/beta/`, `/en/beta/` et `/beta/turn`, derrière un `location` nginx. Le déploiement ajoute un redémarrage du démon.

## 7. Sources et garde-fous

| Source | Rôle | Mise à jour |
|---|---|---|
| Documentation (`doc_chunks`, déjà synchronisée par `docs:sync`) | Comment chaque fonction marche | Existante |
| Textes du site (`src/data/*`) | Formulations déjà validées, dans la voix, et les liens vers les pages | Nouvel export texte au build, ingéré par l'app comme `docs:sync` |
| PRODUCT.md | Profils, niveaux, « may not claim », voix | Fiche dérivée, relue à chaque modification de PRODUCT.md |

Les règles posées au compositeur, puis vérifiées côté serveur quand c'est possible :
- **Revendications :**
  - pas de prix (renvoi vers `/pricing/`) ;
  - pas de témoignage, de nom de club ni de logo ;
  - pas de connecteur GPS présenté comme livré ;
  - pas d'API publique ;
  - pas de barème de crédits IA ;
  - pas de date de sortie.
- **Voix :** la vérification serveur couvre les mots bannis, le tiret cadratin, le point d'exclamation, les emoji et la négation dans un titre. Une section fautive est corrigée quand c'est mécanique (tiret → point), rejetée sinon.
- **Exemples chiffrés :** une section `stats` ou un tableau d'exemple porte toujours la mention « Exemple illustratif, données fictives ».
- **Hors sujet ou injection :** si on demande à l'assistant de changer de rôle, de révéler ses consignes ou de promettre quelque chose, il répond par un retour sobre vers ce que fait STRIVN.
- **Documentation muette :** l'assistant le dit dans un `callout` et propose « Parler à Benoit ».

## 8. SEO

La couche 3, générée en direct, n'est jamais indexée. Ce sont les couches 1 et 2 qui portent le référencement.

**Couche 1 · Les pages existantes.** Elles ne changent pas et restent indexées. Chaque réponse générée se termine par des `crosslink` vers elles, ce qui renforce le maillage interne vers les pages qui comptent.

**Couche 2 · Les pages de réponse** : `/fr/questions/{slug}/` et `/en/questions/{slug}/`.
- **Format :** un fichier de données par question (`src/data/questions/{slug}.ts`), du même type `SubpageContent` que les pages de fonctionnalités. Il est rendu par `SubLanding`, donc construit en statique comme le reste.
- **Balises :** `title` et `description` propres à la page, `canonical`, hreflang `fr`/`en`/`x-default`, entrée automatique dans le sitemap (`@astrojs/sitemap`).
- **JSON-LD :** `FAQPage` (la question, et la réponse résumée en texte) et `BreadcrumbList`, via le `jsonLdExtra` déjà présent dans `BaseLayout`.
- **Navigation :** une page `/fr/questions/` liste les questions publiées, ce qui donne le maillage et une entrée de crawl. Chaque page de réponse se termine par « Posez la suite de votre question », qui ouvre `/beta/?q=…`.
- **Rédaction :** la page est composée par le même compositeur, puis figée et relue. Elle est publiée par une PR (§ 9). Rien n'est publié automatiquement, à cause de la politique de Google sur les contenus générés en masse sans valeur ajoutée.
- **Ce que la PR rend visible :** le diff, l'aperçu de la page, la liste des revendications sensibles détectées (chiffres, noms de capteurs) et les sources citées.

**Couche 3 · Les réponses en direct.**
- `/beta` est en `<meta name="robots" content="noindex, follow">`. `BaseLayout` reçoit pour cela une prop `robots`, seul changement à un composant partagé.
- Elle n'est jamais dans le sitemap. Sa `canonical` pointe vers la page d'accueil de la langue.
- La page est **rendue côté serveur avec un vrai contenu** (hero, raccourcis, liens), jamais une coquille vide, au cas où un robot la visiterait malgré tout.

**La boucle.** Les questions réelles servent de recherche de mots-clés : l'écran d'analytique les regroupe par thème et par fréquence, et ce sont elles qui deviennent des pages de réponse.

**Plus tard (hors bêta).** Si la bêta remplace un jour l'accueil, ce dernier gardera son contenu statique indexable. La composition en direct restera une couche ajoutée par-dessus, jamais un remplacement.

## 9. Analytique et publication (app)

- **Écran super-admin `/admin/discovery`**, dans le même gabarit que le CRM (`/admin/outreach`). Il montre :
  - les visites du jour, de la semaine et du mois, et le coût ;
  - la répartition des profils détectés ;
  - les questions regroupées par thème, avec leur nombre ;
  - le taux de visites à 2 questions ou plus, et la conversion en inscription (visite récupérée par un compte) ;
  - le détail d'une visite : questions, sections composées, profil.
- **Le bouton « En faire une page de réponse »** sur un thème ou une question. Il compose la page en FR et en EN, produit `src/data/questions/{slug}.ts` et la route, puis ouvre une PR sur `benhoss/strivn-website` avec un jeton GitHub restreint à ce dépôt (contenu et PR). Solution de repli si on ne veut pas de jeton : une commande `discovery:export-answer-page {id}` qui écrit les fichiers, et la PR se fait à la main.
- **Données personnelles :**
  - les questions sont conservées 12 mois, puis anonymisées ;
  - l'IP n'est jamais stockée en clair (empreinte HMAC) ;
  - l'email n'est enregistré que si le visiteur le donne ;
  - une ligne sous le champ de saisie le dit.

## 10. Budget et limites

- **Estimation, à vérifier sur les prix OpenRouter du jour avant de choisir le modèle :** un tour fait environ 8 à 10 k tokens en entrée et 1 à 2 k en sortie, soit 1 à 2 centimes avec un modèle rapide de milieu de gamme.
- **Plafond :** ~150 €/mois, soit un budget journalier d'environ 5 €. Une fois ce budget atteint, `/beta` affiche le hero, les raccourcis et des liens vers les pages statiques, sans erreur.
- **Par visite :** 15 tours.
- **Par IP :** 12 visites par heure, 6 tours par minute, 40 tours par heure. La question fait au plus 600 caractères.
- **Choix du modèle :** sur un banc d'essai de 20 questions × 7 profils (phase 0). On privilégie la qualité de composition au coût, puisque les limites tiennent le budget.
- Interrupteur `DISCOVERY_ENABLED` dans l'app ; toutes les routes répondent 404 tant qu'il est éteint.

## 11. Ce qu'on garde du code déjà écrit

Il se trouve sur deux branches locales non poussées : `feat/discovery-site` (app) et `feat/generated-site-beta` (site).

- **Repris :**
  - la table et le modèle `discovery_sessions` ;
  - les limites d'appels par IP ;
  - le contrôleur d'API et le flux SSE du compositeur ;
  - le lecteur ligne par ligne ;
  - le pré-remplissage et la récupération de la visite à l'inscription ;
  - le profil injecté dans le prompt d'onboarding ;
  - les clés de langue ;
  - les tests correspondants.
- **Réécrit :**
  - le désinfecteur, qui validera contre le schéma du site au lieu de mon vocabulaire inventé ;
  - la fiche produit, qui dérivera de PRODUCT.md avec la règle GPS ci-dessus ;
  - le prompt, qui composera des `Section` existantes.
- **Abandonné :** le dossier `beta/` (Vite, CSS et rendus maison). Il refaisait des composants qui existent déjà.

## 12. Phases et critères d'acceptation

**Phase 0 · Levée des risques** (rien n'est publié)
1. **Prototype technique.** On rend `SubSections` et un visuel avec l'API Container d'Astro depuis une route Node. On vérifie que le CSS est présent et que le flux arrive au navigateur. Résultat attendu : une capture identique à la page de fonctionnalité correspondante.
2. **Forge.** Un démon Node supervisé et un `location` nginx sur une URL de test.
3. **Audit des bandeaux** (§ 5.3) : la liste finale.
4. **Banc d'essai.** 20 questions × 7 profils sur 2 ou 3 modèles. On note la justesse par rapport à la documentation, le respect de la voix, la variété des sections et le coût. Résultat attendu : un tableau de résultats et le choix du modèle.

**Phase 1 · Contrat et compositeur**
- Le schéma est généré depuis `types.ts`, avec son contrôle `postbuild`. L'export texte du site est ingéré par l'app.
- Le compositeur produit des `Section[]` valides.
- Critère : 100 % des sections envoyées passent le schéma ; aucune revendication interdite sur le banc d'essai.

**Phase 2 · Page `/fr/beta/` et `/en/beta/`**
- La route de rendu, la page, les raccourcis, le flux, le rechargement et `?q=`.
- Critères :
  - rendu identique aux pages existantes, sur ordinateur et à 390 px ;
  - pas de défilement horizontal ;
  - Lighthouse SEO et accessibilité au moins 95 ;
  - `noindex` présent.

**Phase 3 · Hand-off**
- Questions au visiteur, profil, bande de hand-off selon le profil, inscription pré-remplie et onboarding nourri.
- Critère : un parcours de bout en bout, de la question jusqu'à l'onboarding qui reprend le profil, testé.

**Phase 4 · Analytique et pages de réponse**
- L'écran `/admin/discovery` ; le bouton qui ouvre une PR ; le gabarit `/questions/` avec JSON-LD, hreflang et sitemap.
- Critères :
  - une première page de réponse publiée par PR ;
  - validée par le Rich Results Test ;
  - présente dans le sitemap.

**Phase 5 · Bilan après 4 semaines de trafic réel**
- Les chiffres du § 1. On décide alors de l'ouverture des autres langues, et de faire de la bêta (ou non) un lien du menu ou l'accueil.

## 13. Risques

| Risque | Parade |
|---|---|
| Les styles des composants rendus via l'API Container n'arrivent pas sur la page | Phase 0, point 1. Repli : un rendu complet de la page côté serveur à chaque tour, sans flux, plus lent mais sûr. |
| Les bandeaux dépendent du contexte de leur page (`pct`, ancres) | Liste blanche après audit ; valeurs par défaut fixées ; à défaut, le bandeau est exclu. |
| Le modèle invente une fonction ou une promesse | Sources limitées, garde-fous serveur, relecture des pages de réponse, banc d'essai avant ouverture. |
| Coût hors de contrôle (robots, abus) | Limites par IP et par visite, plafond journalier avec repli statique, `noindex`. |
| Google pénalise du contenu généré | Rien n'est indexé sans PR relue. Les réponses en direct sont en `noindex`. |
| Une deuxième pile à exploiter sur Forge (démon Node) | Elle ne sert que `/beta`. Si elle tombe, nginx renvoie vers l'accueil statique. |
| Le schéma du site et la copie de l'app divergent | Contrôle `postbuild`, et synchronisation au déploiement du site. |
