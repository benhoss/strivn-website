# STRIVN — vidéos marketing

Vidéos produites avec HeyGen HyperFrames (HTML/CSS/GSAP → MP4). Chaque dossier regroupe
la **composition** (code), son **storyboard** et/ou son **post** (copy réseaux), et la **vidéo
rendue** (MP4, non versionnée). Ressources partagées dans `assets/` (médias) et `scripts/` (outils).

## Organisation

| Dossier | Contenu | Vidéo(s) rendue(s) |
|---|---|---|
| `1-launch/` | Film de lancement 16:9 + 4:5 · `POST.md` | `strivn-launch-fr.mp4`, `strivn-launch-fr-4x5.mp4` |
| `2-reels-problem/` | 5 reels « problème » (V1) · `STORYBOARD.md` | `strivn-reel-1..5.mp4` |
| `3-reels-improvement/` | 5 reels « amélioration » + reel joueur (V2) · `STORYBOARD.md` | `strivn-reel-6..10.mp4`, `strivn-reel-player.mp4` |
| `4-multisport/` | Reel multi-sport · `POST.md` · `STORYBOARD.md` | `strivn-reel-multisport.mp4` |
| `5-sc-centralisation/` | Reel préparateurs physiques (centralisation) · `STORYBOARD.md` | `strivn-reel-sc.mp4` |
| `6-demo-charge/` | Démo produit (check-in joueur → charge coach) 9:16 + 16:9 · `POST.md` | `strivn-demo-charge-9x16.mp4`, `strivn-demo-charge-16x9.mp4` |
| `8-demo-convocation/` | Démo convocation : (a) animée HTML/CSS 9:16 + (b) vrais écrans app 9:16 · `POST.md` | `strivn-demo-convocation-9x16.mp4`, `strivn-demo-convocation-real-9x16.mp4` |
| `7-ai-avatar/` | Scripts pour vidéo avatar (HeyGen / Synthesia) | — (produite hors HyperFrames) |
| `brand/` | `PAGE-FACEBOOK.md` (textes de la page) | — |
| `assets/` | Médias partagés : logo, images IA, audio (non versionné) | — |
| `scripts/` | Outils : génération d'images (Nano Banana Pro), enregistreur d'onglet Chrome | — |

## Workflow

```bash
# rendre une vidéo (depuis launch-video/) — toujours avec -c <fichier> -o <sortie>
npx hyperframes render -c 6-demo-charge/demo-9x16.html -o 6-demo-charge/strivn-demo-charge-9x16.mp4 --quiet
```

Les compositions référencent les médias partagés via `../assets/` (les dossiers de campagne
sont au même niveau que l'ancien `compositions/`, donc les chemins restent valides).

Important : `hyperframes` a besoin d'un `index.html` à la **racine** du projet (`launch-video/`)
pour résoudre un projet — c'est l'**ancre** (placeholder vide, ne pas y mettre de contenu).
Sans lui, `render -c …` échoue avec « No composition found ». On rend ensuite chaque
composition de campagne explicitement avec `-c <dossier>/<fichier>.html`.

(Le `lint .` global, lui, ne découvre que l'`index.html` racine avec cette organisation ;
la validation se fait donc au rendu, ou en rétablissant temporairement un `compositions/`.)

Les MP4, images et audio ne sont pas commités (voir `.gitignore`) — seuls le code et les
markdown le sont.
