---
title: "ACWR foot amateur : la méthode simple sans doctorat en stats"
description: "ACWR calcul foot : le ratio aiguë/chronique expliqué pour un coach amateur. Seuils, erreurs, et comment le calculer en 2 minutes par joueur."
pubDate: 2026-06-17
updatedDate: 2026-06-17
author: "Ben Hos"
category: "charge"
keywords: ["ACWR calcul foot", "ACWR foot amateur", "ratio aiguë chronique", "Gabbett ACWR", "ACWR seuil"]
locale: "fr"
readingTime: 7
---

Tu as entendu un collègue parler d'ACWR. Tu as cliqué sur un article scientifique. Tu as vu des formules avec des racines carrées. Tu as refermé l'onglet. Je comprends.

La bonne nouvelle : pour un coach amateur, l'ACWR tient en **une division**. Pas en une formule. Et il te suffit de 4-5 semaines de données RPE pour le calculer correctement.

## 1. ACWR en une phrase

**ACWR = charge aiguë / charge chronique**. C'est-à-dire : ce que ton joueur a encaissé cette semaine, divisé par ce qu'il a encaissé en moyenne sur les 4 dernières semaines.

- **ACWR = 1,0** : tu es sur la moyenne habituelle du joueur. Zone sûre.
- **ACWR = 1,2** : tu es 20 % au-dessus de l'habituel. Zone acceptable (sweet spot de Gabbett).
- **ACWR = 1,5** : tu es 50 % au-dessus. Risque de blessure multiplié par 2 à 4. Allège.
- **ACWR < 0,8** : sous-charge. Le joueur déshabitue. Risque de blessure aussi, par manque de stimuli.

L'ACWR n'est pas un thermomètre exact. C'est un **feu tricolore flou**. Vert foncé entre 0,9 et 1,3. Orange entre 1,3 et 1,5. Rouge au-delà.

## 2. Le calcul concret, sur papier

Tu as déjà tes charges hebdomadaires en UA (cf. [comment calculer la charge avec le RPE](/fr/blog/calculer-charge-entrainement-rpe-foot-amateur/)). Voici la formule de ton tableau Excel, ou de ta feuille A4 :

**Semaine en cours (aiguë)** = RPE × durée de la séance, additionné sur les 4-5 séances de la semaine.

**Charge chronique** = moyenne des charges hebdomadaires des 4 dernières semaines.

**ACWR = aiguë ÷ chronique**.

### Exemple : Malik, défenseur latéral, U17

| Semaine | Charge (UA) | Type |
|---------|------------:|------|
| S-4 | 1600 | entraînement |
| S-3 | 1700 | entraînement |
| S-2 | 1800 | entraînement |
| S-1 | 1750 | match + 1 séance |
| **S (cette semaine)** | **2400** | double séance jeudi |

- Charge chronique = (1600 + 1700 + 1800 + 1750) / 4 = **1712 UA**
- Aiguë = 2400 UA
- **ACWR = 2400 / 1712 = 1,40**

Feu orange. Si la semaine prochaine tu restes à 2400 UA, tu passes à 1,55 (rouge). Décision raisonnable : alléger la semaine prochaine, revenir à 1900 UA max.

## 3. Pourquoi ça marche (enfin, pourquoi ça marche *à peu près*)

Le concept a été posé par **Tim Gabbett** en 2016. L'idée : le risque de blessure n'est pas lié au volume absolu mais au **changement** de volume. Ton joueur qui passe brutalement de 1500 à 2800 UA casse. Ton joueur qui est déjà à 2400 UA depuis trois semaines encaisse.

C'est un proxy. Comme tout en coaching amateur. Pas un diagnostic médical. Si un joueur revient d'une blessure et que son ACWR est à 1,1 mais qu'il se plaint d'une gêne, écoute-le, pas le chiffre.

## 4. Les limites qu'il faut connaître

- **Il faut 4 semaines de données minimum**. Avant, ton ACWR est statistiquement du bruit. Ne tire pas de conclusion sur la première semaine.
- **Le match compte double (voire triple)**. Si tu inclus le match officiel du samedi dans la charge hebdomadaire, il pèse naturellement plus. Plusieurs études utilisent un coefficient de 2× ou 3× sur la charge du match. À toi de choisir ta convention, mais reste cohérent.
- **Tous les joueurs n'ont pas la même moyenne**. Ton gardien titulaire à 1700 UA/sem, ta recrue en reprise à 1100 UA/sem. Ne compare pas les chiffres en absolu. Compare l'**évolution individuelle**.
- **Gabbett lui-même a tempéré sa méthode en 2019**. Une ré-analyse a montré que l'ACWR n'est qu'un indicateur parmi d'autres, et qu'il vaut mieux l'utiliser comme un *avertissement*, pas une sentence.

## 5. Erreurs que je vois chez les coachs amateurs

- **Inclure la semaine en cours dans la chronique**. Non. Chronique = 4 semaines *précédentes*.
- **Changer de méthode de calcul en cours de route**. Si tu commences avec un coefficient match × 1, reste à × 1. Sinon tes comparaisons s'effondrent.
- **Chercher la précision à l'unité près**. Ton RPE est à ± 1 point près. Ton ACWR est à ± 0,1 près. Arrondis. Ne passe pas trois heures sur le calcul.
- **Penser que c'est une science exacte**. C'est un outil de décision. Comme un coup d'œil sur la mine d'un joueur le matin du match.

## 6. Routine terrain recommandée

Pour un club amateur avec 1 coach + 1 adjoint, je recommande :

1. **Chaque séance** : tu notes les RPE en 30 secondes par joueur.
2. **Chaque dimanche soir** : tu reportes les charges sur une feuille hebdo.
3. **Chaque début de semaine** : tu regardes l'ACWR des 5-6 joueurs les plus exposés (les titulaires, ceux qui jouent tous les matches).
4. **Si ACWR > 1,4 pour 2 joueurs ou plus** : tu allèges la séance du mercredi.

Le tout prend **15 minutes par semaine**. Pas 2 heures.

## Pour aller plus loin

L'ACWR sert surtout à éviter un piège bien identifié chez les jeunes footballeurs : le pic de charge en mars, quand le championnat redémarre après la trêve et que le coach veut rattraper le retard physique. On en parle dans [pourquoi tes joueurs sont crevés en mars](/fr/blog/pic-blessures-printemps-foot/). Et si tu pars de zéro, commence par mettre en place le [suivi RPE hebdomadaire](/fr/blog/calculer-charge-entrainement-rpe-foot-amateur/) avant de te lancer dans l'ACWR.

**Source** : Gabbett TJ. *The training—injury prevention paradox: should athletes be training smarter and harder?* British Journal of Sports Medicine, 2016. [doi:10.1136/bjsports-2015-095788](https://bjsm.bmj.com/content/50/5/273). Pour la ré-analyse critique : Impellizzeri FM et al., *International Journal of Sports Physiology and Performance*, 2020.
