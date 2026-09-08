# Ton de voix : analyse Stripe / Teamworks et proposition pour STRIVN

**Date** : 8 septembre 2026
**Périmètre** : site (6 langues, la copie FR fait référence), mails envoyés (`emails/*.html`), et les instructions qui pilotent la génération de copie (`PRODUCT.md`, `DESIGN.md`, skills `i-impeccable`).
**Références demandées** : stripe.com/fr-be, teamworks.com.

## Résumé

Le site STRIVN parle comme un essayiste, pas comme une entreprise. Les titres sont des énigmes qu'on relit (« Entre présent et absent, il manque un mot »), le produit est le sujet de la phrase et le lecteur regarde (« La blessure décide qui est convocable »), et une figure de style sur trois est une réfutation (« Vingt secondes, pas un formulaire »). Les mails, eux, parlent comme une newsletter de fondateur (« Hello ! », 83 emojis sur les mails FR, « Bonne journée, Benoit »). Deux voix, aucune des deux n'est celle de Stripe ou de Teamworks.

Stripe et Teamworks font la même chose avec des lexiques opposés : **le lecteur est le sujet, le verbe est en tête, la promesse est dans les trois premiers mots, et la preuve porte un nom et un chiffre.** Stripe le fait avec précision et sobriété, Teamworks avec des majuscules et des abstractions. La voix proposée prend la grammaire de Stripe, la structure de preuve de Teamworks, et garde ce que STRIVN fait déjà mieux qu'eux : la concrétude métier (« 1 200 m ne veut rien dire. 1 200 m sur 15 min, si. »).

La cause racine n'est pas le rédacteur, c'est l'instruction. `PRODUCT.md` décrit la marque par des adjectifs (« intelligent, calm, elite… factual, composed, concise ») qu'une aphorisme satisfait parfaitement. L'audit du 15 août avait déjà diagnostiqué la « monoculture rhétorique » et corrigé les sous-pages, mais ses règles n'ont jamais été écrites dans `PRODUCT.md` : chaque nouvelle génération repart du même brief et retombe dans la même cadence (la bande WHOOP du 4 septembre en est un exemple). La proposition ci-dessous remplace les adjectifs par des règles testables, des gabarits par surface, et une liste de mots interdits.

## Méthode

Trois corpus, un même compteur (`node`, sur le texte visible, balises retirées) :

| Corpus | Mots | Phrases impératives | « vous » /100 mots | « nous » /100 mots | Chiffres /100 mots | Tirets cadratins /100 mots | Points d'exclamation | Emojis |
|---|---|---|---|---|---|---|---|---|
| Stripe fr-be (accueil, Payments, Billing, Enterprise) | 14 142 | **12 %** | 1,80 | 0,79 | **2,73** | 0,01 | 0,01 | 0 |
| Teamworks (accueil, Performance, Operations, Pro Sports, EN) | 6 004 | 5 % | 1,23 | **1,52** | 0,55 | 0,10 | 0,07 | 0 |
| STRIVN accueil FR | 1 969 | **2 %** | 1,52 | **0,00** | 2,44 | **1,17** | 0 | 0 |
| STRIVN 15 sous-pages FR | 8 532 | 1 % | 2,18 | 0,02 | 0,84 | 0,69 | 0 | 0 |
| STRIVN mails FR (17 envois) | 5 905 | 10 % | 3,54 | 0,07 | 1,32 | 1,46 | 0,19 | **83** |

Deux compléments, du compteur de l'audit du 15 août appliqué à l'ensemble du site : **9 % des phrases** portent une négation ; **36 % des H2** des sous-pages étaient en négation ou antithèse avant révision, 30 % des descriptions portaient un tiret cadratin appositif. Les mots les plus fréquents des sous-pages, une fois les mots-outils retirés : *joueur, charge, séance, match, staff, strivn, joueurs,* puis **rien (31), reste (30), n'est (27), jamais (26), c'est (22), seul (21), déjà (20)**. Le lexique de la réfutation est dans le top 15.

Limites : Stripe fr-be est une traduction (on lit la grammaire, pas les choix lexicaux d'origine), Teamworks est en anglais, et le compteur de phrases impératives est une heuristique (verbes en *-ez* en tête de phrase). Les ordres de grandeur sont fiables, pas la décimale.

## Ce que fait Stripe

**Le lecteur agit, Stripe équipe.** Chaque H3 ou H4 est un verbe à l'impératif, un objet, un gain :

> Réduisez le churn grâce à des outils intégrés.
> Automatisez le recouvrement de revenus.
> Acceptez plus de 100 moyens de paiement et connectez-vous à n'importe quel prestataire.
> Développez-vous sur de nouveaux marchés.

Le H1 est un nom de chose plus ce qu'elle fait pour vous (« Une infrastructure financière qui booste votre croissance. »), et la ligne sous le H1 est trois impératifs (« Acceptez des paiements, proposez des services financiers et personnalisez votre modèle de revenus »). Sur 14 000 mots, 12 % des phrases commencent par un impératif ; sur le site STRIVN, 1 à 2 %.

**La preuve a un nom, un verbe et un chiffre.** Le client est sujet, Stripe est complément :

> Fox Sports a boosté ses revenus d'abonnement de 20 % et la fidélisation de ses utilisateurs de 54 % avec Stripe.
> Intercom a déployé la facturation à l'usage en seulement trois mois avec Stripe.
> URBN centralise 5 milliards de dollars de chiffre d'affaires en ligne et en magasin sur Stripe.
> En moyenne, les entreprises qui utilisent Stripe récupèrent 55 % des paiements échoués.

2,7 chiffres pour 100 mots. Les adjectifs sont rares et fonctionnels (*flexible, fiable, évolutive, intégrée, éprouvée*) ; la confiance vient des logos et des grandeurs, pas des qualificatifs.

**Une institution parle.** « Contacter notre équipe », « nos SDK », « notre serveur MCP ». Stripe dit *nous* 0,8 fois pour 100 mots. STRIVN ne dit jamais *nous* sur le site : une entreprise qui ne se nomme pas ne peut ni promettre ni s'engager.

**Ponctuation.** Zéro exclamation, zéro emoji, zéro tiret cadratin. Les titres qui sont des phrases finissent par un point (« Stripe Billing évolue avec vous. »). Les questions n'apparaissent que dans les titres de guides.

**Vocabulaire.** Le jargon du secteur est employé sans traduction ni excuse (*churn, taux d'autorisation, tokens de réseau, SCA, ARR*). Les produits sont des noms propres (Billing, Radar, Link, Adaptive Acceptance). Quinze pour cent des mots font dix lettres ou plus : c'est un texte dense, écrit pour des professionnels, qui ne simplifie pas.

**Ce qu'on ne prend pas.** La traduction française de Stripe hérite d'un vocabulaire de croissance (*booster, transformer, révolutionner, accélérer*) que `PRODUCT.md` interdit à raison. On emprunte la grammaire, pas les verbes.

## Ce que fait Teamworks

**Une catégorie revendiquée, puis trois piliers.** H1 : « The Operating System for Sports™ ». Sous-titre : « Your unified platform for data-driven talent acquisition, seamless operations, and holistic performance development. » Puis trois blocs verbe + objet : *Connect Your Team / Focus on What Matters / Empower Athletes & Staff*, chacun suivi d'une phrase de mécanisme.

**La preuve, c'est le praticien.** Citations longues, signées nom + fonction + organisation (« Travis Vlantes, Director of Applied Sports Science, University of Texas »), un mur de logos (Arsenal, Chelsea, Benfica, Ohio State), une bande d'échelle (« 7000+ Teams Worldwide · 520+ Collegiate Athletic Departments · 330 Professional Organizations »). Peu de chiffres de résultat (0,55 pour 100 mots) : Teamworks prouve par qui l'utilise, pas par ce que ça rapporte.

**Une page par public.** Professional Sports, Olympic & NGBs, Collegiate, Military ; Performance, Coaching, Operations, Personnel. Le visiteur se reconnaît avant de lire une fonctionnalité.

**Le lexique, lui, est celui que `PRODUCT.md` refuse.** Majuscules à chaque mot, verbes d'aspiration (*Unleash, Empower, Transform, Orchestrate, Maximize*), noms abstraits (*potential, excellence, advantage, greatness, success*), adjectifs empilés (*personalized, coordinated care ; seamless communication, scheduling, and file sharing*). « Teamworks is your go-to tech solution: the catalyst propelling your organization toward sustained success. » C'est le registre « hype-led sports marketing » nommé dans les anti-références.

**Ce qu'on prend.** La structure de preuve (citation signée, fonction, club), la clarté par public, la bande d'échelle. **Ce qu'on ne prend pas** : le lexique, les majuscules, et surtout le H1. Le hero actuel de STRIVN, « Le système d'exploitation du staff performance », est la traduction du H1 déposé de Teamworks. Pour un lecteur qui connaît les deux, STRIVN se présente comme un clone du concurrent que `PRODUCT.md` cite nommément. C'est à retirer indépendamment du ton.

## Ce que fait STRIVN aujourd'hui

### Site

Quatre traits, tous mesurés, tous cohérents avec l'impression « je ne suis pas fan » :

**1. Le titre est une énigme.** Il récompense la relecture ; un acheteur qui scanne veut le bénéfice dans les trois premiers mots.

> Entre présent et absent, il manque un mot.
> Votre exigence a dépassé vos outils.
> Mesurer. Planifier. Construire. Conduire.
> Une blessure dure des semaines. Un passage kiné, trente minutes.

**2. Le produit est le sujet, le lecteur regarde.** Stripe écrit « Réduisez », « Automatisez ». STRIVN écrit :

> La convocation part. Les réponses reviennent seules.
> La blessure décide qui est convocable.
> La couleur appelle une décision, pas une lecture.
> La séance se pilote au pouce.

Les phrases sans verbe conjugué, ou dont le verbe porte sur un objet plutôt que sur le lecteur, représentent 72 à 86 % des phrases selon la page.

**3. La négation est le geste par défaut.** 36 % des H2 des sous-pages avant révision ; encore 9 % de toutes les phrases du site. On définit le produit par ce qu'il n'est pas.

> Vingt secondes, pas un formulaire.
> La collecte ne repose pas sur votre insistance.
> Aucun document à reconstruire, aucun résumé à retranscrire.
> Le réseau du stade n'est pas votre problème.
> Rien avant la date d'arrivée. / Rien à faire. / Rien n'est visible par l'équipe tant que ce n'est pas trié.

Prise isolément, chacune est tranchante. Répétée, c'est une cadence, et c'est exactement celle que le skill `i-impeccable` installé dans ce dépôt nomme comme signature de texte généré : « serious statement, then punchy short negation… Specific, not aphoristic. »

**4. Le rythme « énoncé — précision : conséquence ».** Un tiret cadratin appositif pour 100 mots sur l'accueil, cent fois plus que Stripe. Les deux-points chaînent les propositions. La phrase respire par la ponctuation, pas par le verbe.

Deux absences, en plus : **aucun *nous*** (l'entreprise n'existe pas grammaticalement), et **aucune preuve nommée** (la bande de crédibilité montre des écussons sans citation ; les chiffres présents sont des données de démonstration, « ACWR 1.31 », « 445 UA · cible 460 », pas des résultats clients).

Ce que le site fait bien, et qu'il faut garder : la précision métier (ACWR, RPE, UA, HSR employés sans traduction), la concrétude (« 90 min à RPE 7 = 630 UA »), l'absence totale de superlatif, et des CTA déjà justes (« Commencer gratuitement »).

### Mails

Une autre personne parle. Dix-sept envois FR, tous ouverts par « Hello ! » (un point d'exclamation), quinze ferment par « Bonne journée, Benoit », 83 emojis au total, 👇 à la fin de presque chaque introduction, « ✅ Répondez à ce mail », « Strivn » en casse mixte alors que le site écrit « STRIVN ». Le corps des mails, lui, est souvent meilleur que le site : direct, au présent, avec le geste du coach (« dès que vous cochez une case »). Le problème des mails n'est pas le fond, c'est l'habillage : l'ouverture rituelle, la ponctuation, et l'absence de règle. `DESIGN.md` interdit emoji et exclamation sur le site ; rien ne couvre le mail, donc chaque envoi réinvente son registre.

### Pourquoi ça se reproduit

Les instructions actuelles sont des adjectifs. « Intelligent, calm, elite ; factual, modern, composed, concise » : une maxime bien tournée coche chaque case. Les règles opérationnelles existent mais sont dispersées : le principe de révision dans un audit d'août (« remplacer le comptage par le geste, le moment ou le chiffre »), l'interdiction du tiret et de la cadence aphoristique dans un skill de design, l'interdiction de l'emoji dans le guide visuel. Aucune n'est dans `PRODUCT.md`, que les skills désignent pourtant comme l'autorité sur la voix (« PRODUCT.md wins on strategic/voice decisions »).

## Proposition

### Position

Entre les deux références, plus près de Stripe. En une phrase : **le préparateur qui a fait ses preuves explique, à un pair, ce qu'il va gagner, avec des chiffres.** Vouvoiement. Verbes en tête. Chiffres à la place des adjectifs. Le jargon du métier tel quel, le jargon du marketing banni. STRIVN dit *nous* quand il s'engage. Benoit dit *je* dans les mails.

### Douze règles

Chaque règle est testable. Une copie qui en viole une est à réécrire, pas à discuter.

1. **Le lecteur est le sujet.** Titres et corps à la deuxième personne. Quand le titre est une promesse, le verbe est en tête : « Importez le GPS de la séance en une minute », pas « Vos données GPS intégrées, sans ressaisie ». Le produit n'est sujet que pour décrire un mécanisme (« STRIVN calcule l'ACWR chaque nuit »).
2. **La promesse avant l'énigme.** Lu seul, hors contexte, un titre dit ce que le staff gagne. S'il faut lire le corps pour comprendre le titre, le titre est faux.
3. **Affirmer, pas réfuter.** Aucune négation dans un H1 ou un H2. Dans le corps, au plus une réfutation par page (« X, pas Y », « Aucun… », « Rien à… », « n'est pas votre problème »), réservée à une vérité produit qu'on ne peut pas dire autrement.
4. **Une phrase, une idée.** Sujet, verbe, complément. Pas de tiret cadratin. Deux-points seulement pour introduire une liste ou un chiffre. Corps : 12 à 20 mots par phrase. Titres : 9 mots au plus.
5. **Un chiffre vaut un adjectif.** Chaque section porte au moins une grandeur vérifiable (une minute, vingt secondes, 18 joueurs, 7 jours, 630 UA). Aucun adjectif d'intensité : *puissant, ultime, incroyable, révolutionnaire, intelligent* (comme argument), *complet*. Les chiffres sont réels ou issus du produit ; les limites de `PRODUCT.md` § *What we may not claim yet* s'appliquent.
6. **La preuve a un nom.** Résultat client : `[Club ou staff] + verbe + résultat chiffré + avec STRIVN`. Témoignage : citation + prénom nom + fonction + club. Tant que le nom manque, la preuve ne se publie pas ; « des staffs pro nous font confiance » est interdit.
7. **« Nous » existe.** STRIVN parle à la première personne du pluriel pour ce qu'il s'engage à faire (support, données, délais, feuille de route) et jamais pour se qualifier. « Nous répondons dans la journée » : oui. « Nous sommes l'outil le plus complet » : non.
8. **Le vocabulaire du métier, sans traduction ; celui du marketing, banni.** Gardés tels quels : ACWR, RPE, UA, HSR, readiness, check-in, microcycle, wellness, séance, convocation, staff, préparateur, kiné, analyste. Bannis : *solution, plateforme (unifiée, tout-en-un), écosystème, expérience, booster, transformer, révolutionner, accélérer* (sauf sens physique), *seamless, holistique, agentique, native IA, opérateur, système d'exploitation*, et le franglais sans nécessité.
9. **Ponctuation sobre.** Site : ni point d'exclamation, ni emoji, ni tiret cadratin, ni majuscules d'insistance. Un titre qui est une phrase finit par un point. Mail : mêmes règles, avec une tolérance d'un emoji par envoi, jamais dans l'objet.
10. **Une seule graphie.** STRIVN, partout, mails compris.
11. **Le hero ne cite pas un concurrent.** « Système d'exploitation » est le H1 déposé de Teamworks ; il sort du site et des méta-descriptions.
12. **Le mail est la même voix, signée d'un prénom.** Objet : une promesse concrète, 50 caractères au plus, sans « nouveautés de la semaine ». Ouverture : la nouvelle en une phrase, sans « Hello ! » ni « Voici ce qui est arrivé ». Sections : titre impératif. « Je » autorisé pour un engagement personnel (« je bascule votre compte »). Signature « Bonne journée, Benoit » conservée.

### Gabarits par surface

**H1 (hero).** `[Ce que vous savez ou faites désormais] + [quand ou pour qui]`. Trois propositions, la première recommandée parce qu'elle est la phrase que `PRODUCT.md` désigne comme celle « à écrire la copie contre » :

> **A.** Le croisement GPS, RPE, wellness que vous faites à la main, calculé chaque nuit.
> *Importez n'importe quel export GPS, recevez le check-in des joueurs, et lisez l'état de forme du groupe avant la séance. Gratuit pour une équipe.*
>
> **B.** Sachez chaque matin qui est apte, qui alléger, qui surveiller.
> *STRIVN réunit l'import GPS, le wellness, la charge et la planification de votre groupe, et en tire une lecture quotidienne pour tout le staff.*
>
> **C.** Le GPS, le wellness et la charge de votre groupe, lus avant la séance.
> *Un export CSV suffit pour le GPS. Les joueurs répondent en vingt secondes. L'état de forme est calculé pour tout le staff.*

**H2 de section.** `Verbe impératif + objet + gain mesurable.` « Importez n'importe quel export GPS en une minute. » « Recevez le wellness de vos joueurs avant 9 h. » « Planifiez la charge de la semaine en UA et suivez l'écart en direct. »

**Corps de section.** Une à deux phrases de mécanisme, sujet-verbe-complément, puis un chiffre. « Les colonnes de votre fichier sont reconnues au premier import et mémorisées. Les imports suivants prennent quelques secondes. »

**Preuve.** « [Club] suit [N] joueurs sur STRIVN depuis [mois]. » ; « [Prénom Nom], [fonction], [club] : “[une phrase concrète, au présent]”. » Champs à remplir avec des faits vérifiés, sinon la section n'est pas publiée.

**Paire de CTA.** Libre-service et humain, comme Stripe : « Commencer gratuitement » / « Parler à Benoit ». Liens secondaires : « Voir le check-in », « Lire la documentation ».

**Tuile de plan (tarifs).** Une ligne, un gain : « Une saisie par donnée, pour toute la semaine. » à la place de « Arrêter de tout ressaisir chaque semaine. »

**Mail.** Objet ≤ 50 caractères, gain concret. Pré-en-tête : le geste qui l'active. Première phrase : la nouvelle. Sections : H2 impératifs. Un seul CTA principal, libellé par l'action (« Ouvrir la documentation », « Répondre à ce mail »). Signature inchangée.

### Avant / après

Lignes réelles du site et des mails, réécrites selon les douze règles.

| Où | Avant | Après |
|---|---|---|
| Hero | Le système d'exploitation du staff performance. | Le croisement GPS, RPE, wellness que vous faites à la main, calculé chaque nuit. |
| Accueil | Votre exigence a dépassé vos outils. | Consolidez le GPS, les RPE et le wellness en une lecture par matin. |
| Accueil | Vos données GPS intégrées, sans ressaisie. | Importez l'export GPS de la séance en une minute, quel que soit le capteur. |
| Accueil | La collecte ne repose pas sur votre insistance. | Vos joueurs répondent en vingt secondes, depuis leur téléphone. |
| Accueil | Vingt secondes, pas un formulaire. | Vingt secondes par joueur, chaque matin. |
| Accueil | Aucun document à reconstruire, aucun résumé à retranscrire. | Le staff reçoit le rapport de la semaine, rédigé, le lundi matin. |
| Accueil (bande WHOOP) | Ce que vos joueurs portent déjà entre dans STRIVN. | Connectez WHOOP, importez Catapult, STATSports ou tout export CSV. |
| Présences | La convocation part. Les réponses reviennent seules. | Convoquez en un clic et recevez les réponses dans la journée. |
| Présences | Entre présent et absent, il manque un mot. | Mesurez la présence et la réactivité de chaque joueur. |
| Médical | La blessure décide qui est convocable. | Déclarez la blessure une fois : les convocations s'ajustent. |
| Séance en direct | Le réseau du stade n'est pas votre problème. | Pilotez la séance hors ligne ; tout se synchronise au retour du réseau. |
| Check-in | La couleur appelle une décision, pas une lecture. | Rouge : vous décidez. Vert : rien à décider. Gris : la donnée manque. |
| Tarifs | Arrêter de tout ressaisir chaque semaine. | Une saisie par donnée, pour toute la semaine. |
| Mail, objet | Les nouveautés Strivn de la semaine | Vos joueurs voient leurs stats GPS de match |
| Mail, ouverture | Hello ! Trois nouveautés cette semaine, toutes du côté du joueur. […] Elle est en bas de ce mail 👇 | Trois nouveautés cette semaine, toutes côté joueur. La première s'active d'une case à cocher ; elle est décrite en bas de ce mail. |
| Mail, CTA | ✅ Répondez à ce mail | Répondez à ce mail : un mot suffit. |

La ligne Check-in garde une négation (« rien à décider ») : c'est la vérité produit que la règle 3 autorise une fois par page, et elle porte ici le sens de la couleur verte.

### Cibles mesurables

Pour que la voix tienne d'une génération à l'autre, elle doit se vérifier par un script, pas par une relecture. Un `scripts/lint-copy.mjs` sur les blocs FR de `src/data/**` et sur `emails/*.html`, avec ces seuils :

| Mesure | Aujourd'hui | Cible |
|---|---|---|
| H2 à l'impératif ou avec « vous » pour sujet | ≈ 2 % | ≥ 60 % |
| Négation dans un H1/H2 | 36 % (sous-pages avant révision) | 0 |
| Réfutations dans le corps, par page | non compté | ≤ 1 |
| Tirets cadratins /100 mots | 0,7 à 1,5 | 0 |
| Points d'exclamation (site / mail) | 0 / 0,19 | 0 / 0 |
| Emojis (site / par mail) | 0 / ≈ 5 | 0 / ≤ 1 |
| Chiffres par section | irrégulier | ≥ 1 |
| « nous » /100 mots (site) | 0 | 0,3 à 0,8 |
| Mots bannis (règle 8) | présents (« système d'exploitation », « solution », « native IA ») | 0 |
| Graphie « Strivn » | mails | 0 |
| Longueur médiane, corps | 6 à 9 mots | 12 à 18 mots |

### Où l'écrire

1. **`PRODUCT.md`** : remplacer la section *Brand Personality* par une section *Voice* qui contient les douze règles, le lexique et les gabarits (bloc prêt à coller ci-dessous, en anglais comme le reste du fichier, exemples en français). C'est le fichier que les skills lisent pour la voix.
2. **`DESIGN.md`** § *No-Hype Rule* : ajouter la clause mail (un emoji toléré, jamais dans l'objet) et le tiret cadratin.
3. **`scripts/lint-copy.mjs`** : le compteur des cibles ci-dessus, branché sur `postbuild` à côté de `check-links.mjs`, en avertissement d'abord.
4. **Skills `i-impeccable` / `i-yimpeccable`** (six copies dans le dépôt) : rien à changer, elles disent déjà « no em dashes » et « no aphoristic cadence » ; `PRODUCT.md` cessera de les contredire.

### Bloc pour `PRODUCT.md`

```markdown
## Voice

STRIVN writes the way a performance coach who has done the work explains, to a
peer, what they are about to gain: second person, verb first, numbers where an
adjective would go, the trade's vocabulary as is, the marketer's vocabulary
banned. Formal "vous". STRIVN says "we" when it commits to something. Benoit
says "I" in mail.

Between the two references we hold, the grammar is Stripe's and the proof
structure is Teamworks'. The lexicon is neither: no growth verbs, no capitalised
abstractions.

Every rule below is testable. Copy that breaks one is rewritten, not argued.

1. **The reader is the subject.** Headlines and body in the second person. A
   headline that promises starts with the verb: « Importez le GPS de la séance
   en une minute », not « Vos données GPS intégrées, sans ressaisie ». The
   product is the subject only to describe a mechanism (« STRIVN calcule
   l'ACWR chaque nuit »).
2. **Promise before riddle.** Read alone, a headline says what the staff
   gains. If the body is needed to understand the headline, the headline is
   wrong.
3. **Assert, do not rebut.** No negation in an H1 or H2. In body copy, at most
   one rebuttal per page (« X, pas Y », « Aucun… », « Rien à… », « n'est pas
   votre problème »), kept for a product truth that cannot be said otherwise.
4. **One sentence, one idea.** Subject, verb, object. No em dashes. Colons
   only before a list or a figure. Body sentences 12 to 20 words. Headlines
   9 words or fewer.
5. **A number is worth an adjective.** Every section carries at least one
   verifiable quantity. No intensity adjectives: *puissant, ultime, incroyable,
   révolutionnaire, complet, intelligent* (as a selling point). Numbers are
   real or from the product; "What we may not claim yet" applies.
6. **Proof has a name.** Customer result: `[club or staff] + verb + figure +
   avec STRIVN`. Testimonial: quote + first and last name + role + club. Until
   the name exists, the proof is not published; « des staffs pro nous font
   confiance » is banned.
7. **"Nous" exists.** STRIVN speaks in the first person plural for what it
   commits to (support, data, delays, roadmap), never to describe itself.
8. **The trade's words, untranslated; the marketer's words, banned.** Keep:
   ACWR, RPE, UA, HSR, readiness, check-in, microcycle, wellness, séance,
   convocation, staff, préparateur, kiné, analyste. Banned: *solution,
   plateforme (unifiée, tout-en-un), écosystème, expérience, booster,
   transformer, révolutionner, accélérer* (except literal), *seamless,
   holistique, agentique, native IA, opérateur, système d'exploitation*, and
   English where French exists.
9. **Quiet punctuation.** Site: no exclamation marks, no emoji, no em dashes,
   no emphatic capitals. A headline that is a sentence ends with a period.
   Mail: same, with one emoji tolerated per send, never in the subject line.
10. **One spelling.** STRIVN, everywhere, mail included.
11. **The hero does not quote a competitor.** "Operating system" is
    Teamworks' registered H1; it leaves the site and the meta descriptions.
12. **Mail is the same voice, signed with a first name.** Subject: one concrete
    gain, 50 characters or fewer, never « nouveautés de la semaine ». Opening:
    the news in one sentence, no « Hello ! », no « Voici ce qui est arrivé ».
    Section headings imperative. "Je" allowed for a personal commitment
    (« je bascule votre compte »). Sign-off « Bonne journée, Benoit » stays.

### Patterns

- **H1**: `[what you now know or do] + [when or for whom]`.
  « Le croisement GPS, RPE, wellness que vous faites à la main, calculé chaque nuit. »
- **H2**: `imperative verb + object + measurable gain`.
  « Importez n'importe quel export GPS en une minute. »
- **Body**: one or two mechanism sentences, then a figure.
- **Proof**: « [Club] suit [N] joueurs sur STRIVN depuis [mois]. »
- **CTA pair**: self-serve and human. « Commencer gratuitement » / « Parler à Benoit ».
- **Mail**: subject ≤ 50 chars → preheader = the gesture that enables it →
  first sentence = the news → imperative H2s → one primary CTA → signature.

### Targets (checked by `scripts/lint-copy.mjs`)

H2 imperative or "vous"-subject ≥ 60 % · negation in H1/H2 = 0 · rebuttals per
page ≤ 1 · em dashes = 0 · exclamation = 0 · emoji site 0, mail ≤ 1 · figures
per section ≥ 1 · "nous" 0.3–0.8 per 100 words · banned words = 0 · "Strivn" = 0
· median body sentence 12–18 words.
```

## Ce que la proposition ne règle pas

- **La preuve nommée n'existe pas encore.** Les règles 6 et les gabarits de preuve sont prêts, les faits ne le sont pas. Il faut cinq citations signées et trois chiffres clients vérifiés ; sans eux, la bande de crédibilité reste ce qu'elle est.
- **Les cinq autres langues.** La FR fait référence ; NL, DE, PT, ES, EN suivront la même grammaire, mais la traduction d'un impératif et le vouvoiement ne se transposent pas mécaniquement (le NL et le DE ont leurs propres conventions de vouvoiement commercial).
- **Le ton des textes produit** (l'app) n'est pas dans le périmètre. Il devra converger, sinon le site promettra dans une voix et l'app parlera dans une autre.
- **Le hero** est un choix de positionnement autant que de ton ; les trois propositions sont des points de départ, pas un vote.
