# Marketing Page Review — STRIVN Landing Page

**Page** : http://localhost:4321/ (FR)
**Brand reference** : `Strivn Design System/` (brand-guide-source.md, design.md, colors_and_type.css) + `PRODUCT.md` à la racine
**Langue détectée** : Français
**Skill** : marketing-page-review · première application en condition

---

## Verdict

La page tient sa promesse de marque sur trois plans clés — atmosphère calme et élite, hiérarchie typographique respectée à la lettre, identité visuelle dense-mais-respirante — et elle se distingue franchement du paysage SaaS sport, qui est noyé sous le gym-bro et l'analytique-Bloomberg. **Le hero panel est un vrai atout** (animation 4-panes, dot field réactif, WhatsApp frame côté joueur), mais c'est aussi lui qui porte 75 % du wow effect — le reste de la page est solide mais éteint en comparaison. Trois fixes ciblés ramèneraient la suite de la page au niveau du hero.

**Top 3 strengths**

1. **Conformité design system stricte et visible.** Le H1 est à 56 px / weight 600 / tracking -0.02em pile sur la spec ; aucune ombre décorative ; le bleu→teal→green gradient n'apparaît que sur le brand mark et la bordure du bloc AI engine (budget DS respecté à la lettre). C'est rare et ça se voit.
2. **Le hero panel raconte vraiment le produit.** Les 4 sliding panes (dictée → état semaine → action proposée → message joueur + wellness) déroulent la boucle complète "coach intent → AI execution → player feedback". C'est de la démo produit, pas du screenshot habillé.
3. **La voix tient son register.** "STRIVN aide les coaches débordés à faire tourner la semaine" — factuel, modeste, professionnel, pas un mot de hype. La page entière garde ce ton jusqu'au footer. Inter, weight 600 max, zero emoji, zero exclamation : la règle 5 du design system est tenue partout.

**Top 3 risks**

1. **Le reste de la page redonne deux fois le même contenu.** Les sections *Capacités* (Planification/Suivi/Action) et *Comment ça marche* (Planifier/Suivre/Agir) parlent du même découpage avec les mêmes mots. Le lecteur a la sensation de relire — ce qui dilue le punch des moments-clés.
2. **Aucun ancrage chiffré côté preuve sociale.** "Built for ambitious coaches and clubs" sans une seule citation, logo de club, ou nombre de joueurs déjà suivis. Pour une audience qui parle ROI (clubs semi-pro, académies), c'est un vide qu'un concurrent moins on-brand peut combler.
3. **Le CTA principal "Réserver une démo" est en haut, mais le bouton équivalent en bas s'appelle "hello@strivn.ai".** La logique du dernier coup d'œil passe d'un verbe d'action ("Réserver") à une adresse mail anonyme. Le lecteur qui scrolle jusqu'en bas perd l'instruction.

---

## Dimension-by-dimension

### 1. Brand alignment — Strong

Le travail est très propre. La palette canonique — `#06152b` en `--bg`, `#2d7ff9` en `--electric`, `#27d7a1` en `--performance` — est appliquée avec discipline, et les couleurs statut (vert/jaune/rouge) ne sortent jamais de leur rôle sémantique : on les voit uniquement dans les pills d'état joueur du hero panel (pane 02) et dans le wellness chip de la pane 04. Aucun "vert décoratif" ou "rouge d'alerte hors contexte" — la règle 2 du design system ("Color is a status channel") est tenue.

Côté typographie, l'audit est nickel : H1 à 56 px / 600 / -1.12px tracking (l'équivalent rendu de `-0.02em` à 56 px), exactement la spec du token `--t-display-xl`. Pas de weight 700, pas d'all-caps en dehors des overlines. Le seul gradient marketing (`linear-gradient(180deg, soft-white → navy-200)` sur les chiffres de la métrique strip) est appliqué via `-webkit-background-clip: text` sur les nombres — c'est une utilisation légère qui respecte l'esprit "one marketing hero per page".

Le seul accroc mineur : le bord gauche du `.hero__ai-strip` utilise un `linear-gradient(180deg, electric, performance)` — c'est le gradient brand canonique, mais ça fait techniquement un deuxième usage (le premier étant l'avatar `.app__avatar` dans le chrome navigateur de la pane). La règle dit "reserved for the logo mark and one marketing hero per page" — on est à 2. Argumentable, mais à clarifier.

### 2. Tone of voice — Strong

La voix tient parfaitement les exigences du brand guide : *"smart performance coach — calm, factual, concise, professional"*. Quelques exemples concrets :

- Lede : *"STRIVN aide les coaches débordés à faire tourner la semaine — calendrier, présence, charge, wellness, blessures et relances joueurs — depuis une même surface opérative native IA, sans alourdir l'expérience côté joueurs."* — factuel, modeste, énumératif, zero hype. Très bien.
- Confidence : *"L'assistant reste borné au contexte de l'équipe, pas à un chatbot flottant."* — précis, défensif au bon endroit (rassure sur l'autonomie), parle dans le lexique du coach.
- Pas un seul point d'exclamation sur toute la page. Pas un emoji. Pas un all-caps en dehors de `.overline`. La règle 5 est gagnée.

Le **seul écart** est dans la FAQ : *"L'assistant peut-il modifier des choses tout seul ?"* (réponse : *"Non. STRIVN peut répondre et préparer des actions..."*). Le format question-réponse est neutre, mais la formulation des questions glisse subtilement dans un registre "service client" alors que le reste de la page ne s'adresse jamais au lecteur comme un demandeur. Soit on bascule plus tôt dans le ton (par exemple en posant une question dans la section Confidence pour amorcer), soit on reformule les FAQ en assertions tranchées : *"STRIVN n'est pas qu'un outil de readiness."* à la place de *"Est-ce seulement un outil de readiness ?"*. Très mineur, mais notable.

### 3. Target audience fit — Solid (avec un trou)

L'audience cible déclarée dans `brand-guide-source.md` est : *football clubs, semi-pro teams, amateur teams with ambition, academies, performance staff*. La page touche bien le persona principal (coach débordé, semi-pro, qui jongle entre 5 tabs) — le vocabulaire est juste (*RSVP, charge, wellness, blessures, retour au jeu, kiné, convocations*) et matche celui de l'app Laravel (`InjuryController`, `KineAdviceController`, `ReturnToPlayStep`).

**Mais l'audience secondaire ("performance staff, kinés, academy operators") n'est nulle part adressée explicitement.** La section *Pour qui* parle uniquement des **joueurs**, pas du **staff élargi**. Or pour un club semi-pro qui prend une décision d'achat, le préparateur physique et le kiné pèsent dans le go/no-go. Une 4e persona staff dans *Pour qui* ou une mention dans *Confidence* refermerait cette boucle.

Côté friction lexicale : *"surface opérative native IA"* dans le lede — le mot "opérative" est joli mais éloigne du registre coach concret. C'est le seul endroit où la voix glisse vers le marketing-SaaS. Substituer par "surface qui fait tourner la semaine" ou "couche qui relie le quotidien" serait plus fidèle au reste.

### 4. Wow effect — Strong sur le hero, faible sur la suite

**Le hero est le vrai moment wow.** En 3 secondes : (1) le dot field qui s'illumine sous le curseur signale "système intelligent, calme" sans bruit ; (2) le H1 large et bas en weight 600 plante une autorité "Linear/Vercel-grade" inattendue dans le sport ; (3) le panel avec son chrome navigateur app, ses 4 panes qui glissent, et la dictée vocale qui se tape lettre par lettre avec caret electric blink, c'est de la signature produit. On voit la chose qui distingue STRIVN du paysage du sport-tech immédiatement.

**Mais quand on scroll**, le wow s'éteint vite. La metrics strip est solide (gros chiffres, gradient texte, mono tabular) mais elle est juste élégante, pas mémorable. Le bloc *Comment ça marche* a ses vizs (mini-calendrier, roster, action card) — c'est bon, mais visuellement c'est répétitif avec le hero panel. Et tout le reste — *Pourquoi*, *Capacités*, *Pour qui*, *Confidence*, *FAQ* — c'est de la grille de cards à hairlines, propre mais sans signature.

La signature visuelle "dot field réactif" qu'on a posée dans le hero ne réapparaît nulle part. C'est une opportunité gâchée — un dot field plus discret derrière une section comme *Confidence* (avec les dots qui se densifient près des items) signerait visuellement que c'est la même page, la même intelligence. Aujourd'hui, le hero et la suite ressemblent à deux marques.

### 5. Information clarity — Solid (avec redondance)

**La hiérarchie est claire dans chaque section :** eyebrow, titre, body, contenu. Le scan en 10 secondes donne bien le pitch ("opérateur IA pour coaches qui veulent piloter la semaine"). La structure narrative — Pourquoi → Capacités → Comment → Pour qui → Confiance → FAQ → Contact — suit le bon ordre, du quoi vers le qui vers le rassurant.

**Mais il y a une vraie redondance entre 3 sections.** Regardez :

- *Capacités* : "Planification / Suivi / Action" → 3 cards avec mockups
- *Comment ça marche* : "Planifier / Suivre / Agir" → 3 moments avec vizs
- *Hero signals row* : "Plan / Follow / Act" → 3 colonnes avec features

C'est le même découpage Plan/Suivi/Action raconté **trois fois** avec trois traitements visuels différents. Le lecteur qui descend voit "Planification" trois fois en l'espace de 1500 px de scroll. Soit on garde l'un et on supprime les deux autres, soit on les différencie clairement : Capacités = catalogue de features, Comment ça marche = scénario d'usage, Hero signals = teaser. Mais aujourd'hui les trois disent la même chose.

Le reste tient bien : le board "Preuve opérative" à la fin de *Comment ça marche* apporte une vraie densité (4 catégories : Entrées / Surfaces / Actions / Garde-fous), le `details` de la FAQ est respiratoire, et le CTA band final centre bien l'offre. Le contact `mailto:hello@strivn.ai` en bouton primaire est honnête mais un peu pauvre — il pourrait être "Réserver un créneau" (avec un calendly ou similaire) pour matcher le CTA du topbar.

---

## Prioritized recommendations

### High impact (à faire en premier)

- **Fusionner Capacités + Comment ça marche.** Aujourd'hui ce sont deux sections qui racontent la même histoire avec deux traitements visuels. Garder *Comment ça marche* (les 3 moments avec vizs + le board) et supprimer entièrement *Capacités* — les mini-mockups (calendrier / roster / action card) peuvent migrer en haut des moments si on veut garder ce visuel teaser. Gain : page plus rapide à lire, moins de fatigue de répétition. Effort : 1-2 h.

- **Ajouter une 4e persona "Staff élargi" dans *Pour qui*.** Le persona-card actuel parle uniquement joueurs (3 cards). Ajouter une 4e card adressant préparateur physique + kiné : *"Les outils du staff suivent le coach"* avec un body type *"Kinés, préparateurs, analystes — chacun voit l'état joueur dans son angle sans ressaisir."* Permet de fermer la décision-multi-stakeholder. Effort : 30 min (texte + composant existant réutilisé).

- **Remplacer le mailto par un CTA cohérent.** Le bouton primaire du topbar dit *"Réserver une démo"*, celui du contact band dit *"hello@strivn.ai"*. Aligner : soit le mailto monte en topbar (improbable), soit le CTA contact band devient *"Réserver un créneau de 30 min"* avec une vraie destination. Effort : 30 min (texte + lien Calendly/Cal.com).

### Medium impact

- **Faire vivre le dot field au-delà du hero.** Réutiliser le canvas réactif (avec radius/opacité réduits) en arrière-plan de la section *Confidence* — ça signe visuellement la même intelligence calme et résout le problème "le hero est une marque, la suite en est une autre". Effort : 1 h.

- **Ajouter une preuve sociale concrète.** Même placeholder pour l'instant : une bande "Déjà utilisé par X clubs · Y joueurs suivis · Z séances ce mois" sous la metrics strip, en attendant des logos de clubs. Aligne avec l'audience "clubs ambitieux qui parlent ROI". Effort : 1 h (HTML + données placeholder, à remplacer plus tard).

- **Recontextualiser la lede.** Remplacer *"depuis une même surface opérative native IA"* par *"depuis une même couche qui relie le quotidien du coach et celui des joueurs"*. Plus fidèle au registre du reste de la page (qui n'utilise jamais "opérative" en marketing). Effort : 5 min.

### Low impact / nice-to-have

- **Reformuler les FAQ en assertions ou en regroupant par thème.** Soit *"STRIVN n'est pas qu'un outil de readiness"* (assertion qui devient un titre), soit grouper les 5 questions en 2 macro-thèmes (Périmètre / Contrôle). Effort : 15 min.

- **Clarifier le second usage du gradient brand.** Soit retirer le linear-gradient electric→performance de la bordure gauche du `.hero__ai-strip` (et garder seulement le brand mark), soit assumer comme "1 marketing hero gradient" et documenter dans le design system. Le but : ne pas se retrouver à 3 si on ajoute un autre élément plus tard. Effort : 5 min décision.

- **Ajouter une légende discrète sous le hero panel.** Une ligne mono `--fg-faint` en sortie de hero : *"Démo de l'assistant en boucle · 4 panes · 19s par cycle"* signale que c'est une démo animée et pas un screenshot. Effort : 10 min.

---

## Sources read

- `http://localhost:4321/` — page live rendue (via Claude in Chrome, full DOM inspection)
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Strivn Design System/brand-guide-source.md` — voix, personnalité, audience, anti-références, inspirations Linear/Stripe/Vercel/Notion/Raycast
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Strivn Design System/design.md` — 5 règles non-négociables, échelle typographique, palette canonique, motion
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Strivn Design System/colors_and_type.css` — tokens canoniques pour vérification CSS
- `/Users/benoit/Documents/Projects/P3rform/Strivn/PRODUCT.md` — purpose, principes design, accessibilité
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Website/src/components/LandingPage.astro` — structure de la page
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Website/src/data/landingContent.ts` — copy FR + EN, vocabulaire produit
- `/Users/benoit/Documents/Projects/P3rform/Strivn/Website/src/styles/global.css` — implémentation CSS (vérification tokens, motion, shadows)
- DOM live inspection via `javascript_tool` — H1 computed styles, section inventory, color values, layout dimensions
