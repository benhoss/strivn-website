# Révision du copy — 15 sous-pages features (FR)

**Date** : 15 août 2026
**Périmètre** : `src/data/subpages/*.ts`, bloc `fr`
**Contrainte de marque** : `PRODUCT.md` — factuel, calme, élite. `DESIGN.md` — No-Hype Rule : ni emoji, ni point d'exclamation, ni majuscules criardes. L'impact ne peut donc pas venir du volume : il vient de la **concrétude** et de la **conséquence**.

---

## Diagnostic

Le copy actuel n'est pas creux. Il est même l'inverse de ce qu'on attend d'un texte généré : spécifique, techniquement vrai, sans superlatif. Des lignes comme

> « 1 200 m » ne veut rien dire. « 1 200 m sur 15 min », si.
> Un chiffre faux est pire qu'une case vide.
> Ce que vous croisez le soir finit dans la séance de jeudi.

sont excellentes et doivent rester.

Le problème est **distributionnel**, pas lexical.

| Mesure | Valeur |
|---|---|
| Titres de section (H2) | 67 |
| En négation ou antithèse « X, pas Y » | 24 — **36 %** |
| Ouverts par un comptage (« Trois crans », « Un seul écran ») | 12 — **18 %** |
| Descriptions portant un tiret cadratin appositif | 61 / 204 — **30 %** |

> Un premier comptage annonçait 52 % / 31 %. Il était trop large : il classait l'article
> indéfini « Un/Une » comme numéral et le « sans » non négatif comme négation. Les chiffres
> ci-dessus viennent d'un compteur appliqué à l'identique avant et après.

Trois conséquences :

1. **Monoculture rhétorique.** Une figure — la négation corrective — porte la moitié des titres. Prise isolément elle est tranchante ; répétée 35 fois elle devient un gabarit. C'est exactement l'effet « machine » que vous ressentez.
2. **Le comptage remplace la promesse.** « Trois crans », « Quatre surfaces », « Trois moments » : le titre annonce une quantité au lieu de dire ce que le coach y gagne.
3. **Point de vue produit, pas point de vue coach.** Le texte décrit superbement le mécanisme interne. Il évoque rarement le moment vécu — le dimanche soir, le message à 23 h, le joueur qui ne répond pas. La seule page qui le fait (`exerciseLibrary` : « Depuis le canapé, aussi ») est aussi la plus vivante du lot.

**Principe de révision** : garder les meilleures négations (elles portent des vérités produit), supprimer les autres, et remplacer le comptage par le **geste**, le **moment** ou le **chiffre**.

---

## Révisions proposées

Colonne « → » vide = ligne conservée telle quelle.

### attendance.ts

| Actuel | → |
|---|---|
| *Hero* La convocation part. Les réponses reviennent seules. | *(conservé — excellent)* |
| Cinq réponses. Dont « Adapté ». | **Entre présent et absent, il manque un mot.** |
| Ce joueur est-il présent, et réactif ? | *(conservé)* |
| Des pourcentages justes, pas seulement bruts. | **Un joueur blessé en février ne finit pas la saison à 40 %.** |

### checkIn.ts

| Actuel | → |
|---|---|
| *Hero* Une minute par joueur. Toute la lecture du groupe. | *(conservé)* |
| Une seule grammaire visuelle, partout. | **Rouge veut dire la même chose sur tous les écrans.** |
| Le RPE, au moment qui vous arrange. | *(conservé)* |

> `grammaire visuelle` est du jargon de designer, pas de coach.

### exerciseLibrary.ts

| Actuel | → |
|---|---|
| *Hero* Ce que vous croisez le soir finit dans la séance de jeudi. | *(conservé — meilleure ligne du site)* |
| Une capture ne doit pas demander un formulaire. | **Un lien collé, et c'est déjà dans la bibliothèque.** |
| Rien n'atteint l'équipe avant d'être trié. | **Vous triez d'abord. L'équipe voit ensuite.** |
| « 1 200 m » ne veut rien dire. « 1 200 m sur 15 min », si. | *(conservé)* |
| Ce que la séance devrait produire — et ce qu'elle ne dit pas. | **Ce que la séance produira, et sur quelle part du temps.** |
| Sous chaque métrique, ce que le terrain a mesuré. | *(conservé)* |

### liveMatch.ts

| Actuel | → |
|---|---|
| *Hero* Le match s'encode pendant qu'il se joue. | *(conservé)* |
| Un seul bouton : il compte, et il attribue. | *(conservé)* |
| La chaîne s'ouvre d'elle-même. | *(conservé)* |
| Tous vos axes en même temps. Pas une file d'attente. | **Le but vient d'être marqué. Vous avez trente secondes.** |
| Un croquis vaut la phrase que vous n'écrirez pas. | *(conservé)* |
| « Fin du match » bascule tout vers les statistiques. | *(conservé)* |

### liveSession.ts

| Actuel | → |
|---|---|
| *Hero* La séance se pilote au pouce. | *(conservé)* |
| Un seul écran, du déroulé au bilan. | *(conservé)* |
| Le réseau du stade n'est pas votre problème. | *(conservé — négation gardée, elle porte)* |

### medical.ts

| Actuel | → |
|---|---|
| *Hero* La blessure décide qui est convocable. | *(conservé)* |
| Une blessure et un passage kiné ne sont pas la même chose. | **Une blessure dure des semaines. Un passage kiné, trente minutes.** |
| Trois crans, et rien d'autre à tenir à jour. | **Vous bougez un cran. Les convocations suivent.** |
| Le kiné arrive avec un planning déjà connu. | *(conservé)* |

### playerApp.ts

| Actuel | → |
|---|---|
| *Hero* Vos joueurs n'ont rien à installer. | *(conservé — c'est l'objection n° 1)* |
| Ce que le joueur ouvre, et rien de plus. | **Son agenda, ses convocations, son check-in.** |
| La confidentialité par défaut. | **Un joueur ne voit jamais le dossier d'un autre.** |

### programs.ts

| Actuel | → |
|---|---|
| *Hero* Le même pourcentage. Un poids par joueur. | *(conservé — excellent)* |
| Pas besoin de tester un vrai maximum. | **Cinq répétitions à 100 kg suffisent.** |
| Trois formes de bloc, quatre façons de charger. | **Du simple enchaînement au circuit complet.** |
| Il se choisit exercice par exercice. | **Le squat en % de 1RM, les pompes au poids du corps.** |
| La notation de préparateur ne sort pas du constructeur. | **Vous écrivez « 3010 ». Il lit « 3 s de descente ».** |
| « Programme » désigne deux choses. Elles ne se remplacent pas. | **Le mot « programme » recouvre deux objets.** |

### reports.ts

| Actuel | → |
|---|---|
| *Hero* Un rapport retient la question, pas la réponse. | *(conservé — idée centrale de la page)* |
| Quatre surfaces, quatre horizons. | **Avant le café, avant la séance, avant la réunion.** |
| Composez la question, pas seulement le tableau. | **Sur qui, quelles statistiques, à quoi les comparer.** |

### scouting.ts

| Actuel | → |
|---|---|
| *Hero* Le prochain adversaire, préparé à plusieurs. | *(conservé)* |
| Trois moments, un seul dossier. | **L'analyste observe le samedi. Le coach tranche le mardi.** |
| Quatre façons de capturer ce que vous voyez. | **Vous notez, vous parlez, vous filmez, vous dessinez.** |
| L'IA lit l'effectif. Elle ne l'écrit pas. | *(conservé — claim central)* |
| L'IA propose. Vous tranchez. | **Un brief à relire avant de l'envoyer.** |
| Le brouillon reste au staff. | *(conservé)* |

> Les deux lignes « L'IA … » utilisaient le même rythme à deux sections d'écart. Une seule survit.

### sessions.ts

| Actuel | → |
|---|---|
| *Hero* De la saison à la séance de jeudi. | *(conservé)* |
| Chaque niveau donne son cadre au suivant. | **La saison tient le cycle, le cycle tient la semaine.** |
| Le planificateur ne crée jamais de séance. | *(conservé — frontière produit critique)* |
| Trois écrans pour cadrer la semaine. | **Fixer l'objectif, peser les catégories, garder le modèle.** |
| Tout ce qu'on peut demander à un joueur n'est pas une séance. | **Un questionnaire à rendre est aussi un événement.** |
| Le prévu ne vaut que comparé au réalisé. | **Vous aviez prévu 630. Ils ont produit 780.** |

### staffBrief.ts

| Actuel | → |
|---|---|
| Ce que STRIVN change pour votre staff. | **Votre préparateur a déjà commencé.** |
| Ce qui tourne, aujourd'hui. | *(conservé)* |
| Pas un outil de plus. Le même, pour tout le monde. | *(conservé — c'est l'objection)* |

> La page est partagée **par** le préparateur physique. Le titre doit dire au lecteur pourquoi elle arrive dans sa boîte.

### staffSharing.ts

| Actuel | → |
|---|---|
| *Hero* Tout le staff, la même lecture. | *(conservé)* |
| Qui voit quoi. | **L'adjoint lit la disponibilité. Pas le diagnostic.** |
| Des liens que vous gardez sous contrôle. | **Un lien envoyé reste un lien que vous pouvez couper.** |

### teamManagement.ts

| Actuel | → |
|---|---|
| *Hero* L'intendance de l'équipe, sans le classeur. | *(conservé)* |
| Ce que le staff pilote depuis un seul écran. | *(conservé)* |

### tests.ts

| Actuel | → |
|---|---|
| *Hero* Un chiffre ne vaut rien sans son repère. | **Le chiffre tombe. Reste à savoir ce qu'il vaut.** |
| Une mesure, son unité, et vos zones. | **Sur un 10 m, le meilleur est le plus petit.** |
| « 17,4 km/h », c'est bien ou pas ? | *(conservé — excellent)* |

### trainingLoad.ts

| Actuel | → |
|---|---|
| *Hero* Charge interne, charge externe, un seul écran. | **Le ressenti d'un côté, le GPS de l'autre. Sur le même écran.** |
| Quatre nombres, et ce qu'ils veulent dire. | **ACWR, monotonie, contrainte : ce qu'ils disent.** |
| Un export GPS ne contient pas de colonne « aérobie ». | *(conservé — excellent)* |
| Deux sélecteurs voisins, deux portées opposées. | **L'un recalcule tout. L'autre change juste l'affichage.** |
| Un chiffre faux est pire qu'une case vide. | *(conservé)* |
| Si votre staff ne raisonne pas en UA, changez d'unité. | *(conservé)* |

---

## Effet sur les compteurs

Mesuré après application, même compteur avant et après :

| Mesure | Avant | Après |
|---|---|---|
| H2 en négation / « X, pas Y » | 24 (36 %) | **12 (18 %)** |
| H2 ouverts par un comptage | 12 (18 %) | **3 (4 %)** |

Appliqué : **33 sections × 6 langues = 198 chaînes**, aucune fuite de FR dans une autre langue.

Les négations restantes sont celles qui portent une vérité produit non négociable : la frontière du planificateur, l'IA qui ne écrit pas, le GPS sans colonne « aérobie », le chiffre faux. Elles redeviennent audibles parce qu'elles sont devenues rares.

---

## Reste à décider

1. **Les sous-titres (`sub`) et descriptions (`desc`)** ne sont pas révisés ici — 204 chaînes. Le tiret cadratin appositif y est à 30 %, même tic. À traiter dans un second passage si la direction ci-dessus convient.
2. **Propagation aux 5 autres langues** (en, nl, de, pt, es). Le FR est la source ; les traductions suivent une fois la direction validée. Ne pas propager avant validation — 6 locales × 35 lignes de mauvaise direction coûtent cher à défaire.
