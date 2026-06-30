# 8 — « De l'estimation à la réalité » · le calcul de la charge

Vidéo motion design (16:9, ~76 s, sans voix off — se comprend au son coupé) qui explique
**comment STRIVN calcule la charge** : d'un modèle 100 % estimé (le coach ne saisit rien,
les joueurs ne font pas de check-in) vers un modèle qui devient le reflet exact du terrain,
au fur et à mesure que les données arrivent.

Composition : `charge-16x9.html` → rendu `strivn-charge-16x9.mp4` (non versionné).

## Idée maîtresse (le visuel)

Une **courbe de charge** (microcycle hebdo : Lun→Dim, pic le jour de match) entourée d'un
**nuage d'incertitude**. La réalité (la courbe) est fixe ; c'est notre *connaissance* d'elle
qui se précise. Chaque source de données resserre le nuage et fait grimper le compteur
**« Fidélité à la réalité »** (55 % → 97 %). Métaphore : la plateforme apporte déjà de la
valeur en mode estimation, et de plus en plus à mesure que le coach va au bout.

## Découpage

| t (s) | Scène | Contenu |
|---|---|---|
| 0 – 3.8 | Intro | Logo + « De l'estimation à la réalité ». |
| 3.8 – 9.6 | Formule | `Charge = Intensité × Durée`. « Chacun peut être mesuré… ou estimé. » |
| 9.6 – 20 | **Niveau 0** | Coach passif, zéro check-in. Nuage large, ligne pointillée, **55 %**, tags `estimé`. Message : *et pourtant la charge est déjà là*. |
| 20 – 28.4 | + Débrief de séance | L'intensité réelle de la séance affine l'estimation → **66 %**, nuage resserré. |
| 28.4 – 36.8 | + Planification de charge | Zone « charge planifiée · prévu vs réalisé » → **77 %**. |
| 36.8 – 45.2 | + Temps de jeu réels | Durée par joueur → charge individuelle → **87 %**. |
| 45.2 – 54.8 | + Check-ins joueurs | Le ressenti réel verrouille la courbe : ligne pleine, points de données, tags `mesuré`, ACWR 1,12 · monotonie 0,9 → **97 %**. |
| 54.8 – 63 | Payoff | Courbe verte « fidèle à la réalité » : ACWR maîtrisé, monotonie sous contrôle, par joueur. |
| 63 – 71.2 | Double message | *Coach passif* → valeur immédiate (~55 %) **vs** *coach engagé* → pilotage précis (~97 %). |
| 71.2 – 76 | Outro | Logo · strivn.net · gratuit pour une équipe. |

Indicateurs réels mis en scène : **sRPE**, **ACWR**, **monotonie** (cf. modèle de charge STRIVN).

## Sous-titrage

Une piste de **sous-titres narratifs** (lower-third, track 5, ~19 segments) explique tout
le mécanisme de bout en bout — la vidéo se comprend entièrement texte seul, sans son.
Les cards du bas ont été compactées (icône + nom) pour libérer la bande de sous-titres ;
l'attribution coach / joueurs est portée par la narration.

## Rendu

```bash
cd launch-video
npx hyperframes render -c 8-charge-estimation/charge-16x9.html -o 8-charge-estimation/strivn-charge-16x9.mp4 -q high --quiet
```

Prérequis : `assets/logo.png` (copié depuis `public/strivn-logo-full-white-web.png`).
