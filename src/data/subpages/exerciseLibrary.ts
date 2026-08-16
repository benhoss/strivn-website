/**
 * Exercise library — capture, sort, describe, estimate.
 *
 * The page's honest note is the coverage line: an estimate built from the
 * blocks you have described is always partial, and saying so is what makes
 * the number usable.
 */
import type { SubpageLocales } from './types';

export const exerciseLibrary: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Bibliothèque d’exercices | STRIVN',
      description:
        'Lien, photo, schéma ou texte : tout arrive dans la même boîte de réception, se trie une fois, et se rattache ensuite à n’importe quelle séance.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · PLANIFICATION',
      title: 'Ce que vous croisez le soir finit dans la séance de jeudi.',
      sub: 'Un lien TikTok, une photo prise au bord du terrain, un schéma dessiné sur le tableau tactique, ou simplement du texte. Tout arrive dans la même boîte de réception, se trie une fois, et se rattache ensuite à n’importe quelle séance.',
      bullets: [
        'Quatre façons de capturer : lien, photo, schéma, texte',
        'Rien n’est visible par l’équipe tant que ce n’est pas trié',
        'Dossiers, tags, filtres et aperçu rapide plein écran',
        'Métriques clés : la charge externe estimée avant la séance',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir la planification', href: '/fr/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'QUATRE ENTRÉES',
        title: 'Un lien collé, et c’est déjà dans la bibliothèque.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Lien',
            desc: 'Collez une URL. TikTok et X s’affichent directement dans la bibliothèque ; Instagram et Facebook apparaissent en carte-lien.',
          },
          {
            icon: 'image',
            title: 'Photo / Vidéo',
            desc: 'Importez un fichier depuis votre appareil — une photo prise au bord du terrain, une vidéo filmée à l’entraînement.',
          },
          {
            icon: 'pen-line',
            title: 'Schéma',
            desc: 'Dessinez sur le tableau tactique, ou reprenez un tableau existant. Un schéma publié rejoint la bibliothèque tout seul.',
          },
          {
            icon: 'type',
            title: 'Texte',
            desc: 'Rédigez directement la description : consignes, variantes, repères. Pas de média, pas de problème.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'Depuis le canapé, aussi',
          desc: 'Transférez un lien au numéro WhatsApp de STRIVN depuis votre téléphone : la capture arrive dans la même boîte de réception, exactement comme depuis le web.',
        },
      },
      {
        kicker: 'LA BOÎTE DE RÉCEPTION',
        title: 'Vous triez d’abord. L’équipe voit ensuite.',
        body: 'Chaque capture arrive d’abord dans la boîte de réception. Vous ajustez le titre, vous la classez dans un dossier — existant ou créé à la volée — et vous ajoutez des tags. Sur les liens et les vidéos, un bandeau propose un titre et des tags : reprenez-les d’un clic, ou ignorez-les.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'CLASSER',
            title: 'Pour vous seul',
            desc: 'L’exercice reste dans votre bibliothèque. Personne d’autre ne le voit.',
          },
          {
            eyebrow: 'PUBLIER',
            title: 'Pour toute l’équipe',
            desc: 'Il est partagé avec le staff et devient rattachable à une séance.',
          },
          {
            eyebrow: 'SUPPRIMER',
            title: 'Écarter la capture',
            desc: 'Ce qui ne vous intéresse pas ne reste pas là à vous encombrer.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'Puis retrouver, sans chercher',
          desc: 'Le panneau de gauche porte vos dossiers et vos tags avec leur nombre d’exercices ; la grille met le média en avant ; l’aperçu rapide ouvre le plein écran, métadonnées sur le côté, avec navigation précédent / suivant au clavier. Vous feuilletez toute la sélection sans revenir à la grille.',
        },
      },
      {
        kicker: 'MÉTRIQUES CLÉS',
        title: '« 1 200 m » ne veut rien dire. « 1 200 m sur 15 min », si.',
        body: 'Les métriques clés décrivent ce qu’un exercice produit : la distance couverte, le nombre de sprints, le RPE attendu, la surface de jeu. Vous les renseignez une fois sur la fiche, avec leur durée de référence, et cette durée devient obligatoire dès la première métrique, parce que c’est elle qui rend la valeur exploitable.',
        kind: 'compare',
        heads: ['Cumulatif', 'Intensif'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'EXEMPLES',
            a: 'Distance · Sprints · Accélérations',
            b: 'RPE attendu · Joueurs · Surface',
          },
          {
            label: 'AVEC LA DURÉE',
            a: 'Proportionnel au bloc. Le même exercice joué 20 minutes au lieu de 15 annonce 1 600 m au lieu de 1 200.',
            b: 'Inchangé : ce sont des propriétés du bloc. Un jeu à 8 joueurs sur 400 m² le reste, qu’il dure 10 ou 30 minutes.',
          },
          {
            label: 'D’OÙ ELLES VIENNENT',
            a: 'Les colonnes GPS de votre équipe. Renommez-en une dans vos réglages, tous les exercices suivent.',
            b: 'Toujours disponibles, ou libres : « + Autre métrique… », vous donnez le nom et l’unité.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'Ces valeurs sont indicatives. Elles n’entrent dans aucun calcul de charge — ni sRPE, ni ACWR, ni les signaux. Elles décrivent vos exercices, elles ne pilotent rien.',
          },
        ],
      },
      {
        kicker: 'AVANT QUE LA SÉANCE AIT LIEU',
        title: 'Ce que la séance produira, et sur quelle part du temps.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'COUVERTURE',
            title: 'Le total est toujours partiel',
            desc: 'Un déroulé contient des blocs sans exercice — échauffement, jeu libre, étirements — et des exercices que vous n’avez pas encore décrits. La ligne de couverture dit quelle part du temps de séance le chiffre décrit réellement. Sous 50 %, elle passe en orange.',
          },
          {
            eyebrow: 'LECTURE',
            title: 'Un taux bas n’est pas une erreur',
            desc: 'Il dit simplement où l’estimation reste aveugle. Et la ligne suivante nomme les blocs à compléter : c’est votre liste de travail pour enrichir la bibliothèque.',
          },
          {
            eyebrow: 'TRAÇABILITÉ',
            title: 'Le signe ~ marque l’estimation',
            desc: 'La somme des parts de chaque bloc donne toujours le total de la séance. Vous pouvez remonter d’un chiffre à l’exercice qui le produit.',
          },
        ],
      },
      {
        kicker: 'CE QUE LES SÉANCES PASSÉES RÉPONDENT',
        title: 'Sous chaque métrique, ce que le terrain a mesuré.',
        body: 'STRIVN affiche la valeur observée sur les séances où vous avez utilisé cet exercice. Elle sert de repère pour ajuster votre valeur déclarée. Elle ne la remplace jamais. Et son origine est toujours nommée, parce qu’elle ne pèse pas le même poids.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'mesuré', desc: 'Chronométré sur un bloc, en séance en direct.' },
          { name: 'planifié', desc: 'Repris de la durée que vous aviez prévue.' },
          { name: 'estimé', desc: 'Part GPS de la séance attribuée à ce bloc.' },
          { name: 'déclaré par les joueurs', desc: 'RPE ressenti, remonté par l’effectif.' },
          {
            name: 'échantillon faible',
            desc: 'Moyenne calculée sur trop peu de séances. À traiter comme une indication, pas comme une référence.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'Puis le GPS tranche',
          desc: 'Après l’import, la mention « estimé » cède la place à la valeur réellement mesurée sur le bloc. Ce que vous aviez déclaré reste visible à côté : c’est la comparaison qui fait progresser vos fiches.',
        },
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Exercise library | STRIVN',
      description:
        'A link, a photo, a diagram or plain text: everything lands in the same inbox, is sorted once, and can then be attached to any session.',
    },
    hero: {
      kicker: 'FEATURES · PLANNING',
      title: 'What you come across at night ends up in Thursday’s session.',
      sub: 'A TikTok link, a photo taken at the side of the pitch, a diagram drawn on the tactics board, or simply text. Everything lands in the same inbox, is sorted once, and can then be attached to any session.',
      bullets: [
        'Four ways to capture: link, photo, diagram, text',
        'Nothing is visible to the team until it is sorted',
        'Folders, tags, filters and a full-screen quick look',
        'Key metrics: estimated external load before the session',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See planning', href: '/en/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'FOUR WAYS IN',
        title: 'Paste a link, and it is already in the library.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Link',
            desc: 'Paste a URL. TikTok and X play inside the library; Instagram and Facebook appear as a link card.',
          },
          {
            icon: 'image',
            title: 'Photo / Video',
            desc: 'Import a file from your device — a photo taken pitch-side, a video filmed at training.',
          },
          {
            icon: 'pen-line',
            title: 'Diagram',
            desc: 'Draw on the tactics board, or pick up an existing board. A published diagram joins the library on its own.',
          },
          {
            icon: 'type',
            title: 'Text',
            desc: 'Write the description straight out: instructions, variations, cues. No media, no problem.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'From the sofa, too',
          desc: 'Forward a link to STRIVN’s WhatsApp number from your phone: the capture lands in the same inbox, exactly as it would from the web.',
        },
      },
      {
        kicker: 'THE INBOX',
        title: 'You sort first. The team sees after.',
        body: 'Every capture lands in the inbox first. You adjust the title, you file it in a folder — existing or created on the spot — and you add tags. On links and videos, a banner suggests a title and tags: take them in a click, or ignore them.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'FILE IT',
            title: 'For you alone',
            desc: 'The exercise stays in your library. Nobody else sees it.',
          },
          {
            eyebrow: 'PUBLISH',
            title: 'For the whole team',
            desc: 'It is shared with the staff and becomes attachable to a session.',
          },
          {
            eyebrow: 'DELETE',
            title: 'Drop the capture',
            desc: 'What does not interest you does not sit there getting in the way.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'Then find it again, without searching',
          desc: 'The left panel carries your folders and tags with their exercise counts; the grid puts the media first; the quick look opens full screen, metadata to the side, with previous / next on the keyboard. You flick through the whole selection without going back to the grid.',
        },
      },
      {
        kicker: 'KEY METRICS',
        title: '“1,200 m” means nothing. “1,200 m over 15 min” does.',
        body: 'Key metrics describe what an exercise produces: distance covered, number of sprints, expected RPE, playing area. You fill them in once on the card, with their reference duration, and that duration becomes mandatory from the first metric, because it is what makes the value usable.',
        kind: 'compare',
        heads: ['Cumulative', 'Intensive'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'EXAMPLES',
            a: 'Distance · Sprints · Accelerations',
            b: 'Expected RPE · Players · Area',
          },
          {
            label: 'WITH DURATION',
            a: 'Proportional to the block. The same drill run 20 minutes instead of 15 announces 1,600 m instead of 1,200.',
            b: 'Unchanged: these are properties of the block. An 8-a-side game on 400 m² stays that, whether it runs 10 or 30 minutes.',
          },
          {
            label: 'WHERE THEY COME FROM',
            a: 'Your team’s GPS columns. Rename one in your settings and every exercise follows.',
            b: 'Always available, or free: “+ Another metric…”, you give the name and the unit.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'These values are indicative. They enter no load calculation — not sRPE, not ACWR, not the signals. They describe your exercises; they drive nothing.',
          },
        ],
      },
      {
        kicker: 'BEFORE THE SESSION HAPPENS',
        title: 'What the session will produce, and over how much of its time.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'COVERAGE',
            title: 'The total is always partial',
            desc: 'A running order contains blocks with no exercise — warm-up, free play, stretching — and exercises you have not described yet. The coverage line says how much of the session’s time the figure actually describes. Below 50 %, it turns amber.',
          },
          {
            eyebrow: 'READING IT',
            title: 'A low rate is not an error',
            desc: 'It simply says where the estimate is still blind. And the next line names the blocks to complete: that is your work list for filling out the library.',
          },
          {
            eyebrow: 'TRACEABILITY',
            title: 'The ~ sign marks the estimate',
            desc: 'The sum of each block’s share always gives the session total. You can go from a figure back to the exercise that produces it.',
          },
        ],
      },
      {
        kicker: 'WHAT PAST SESSIONS ANSWER',
        title: 'Under each metric, what the pitch measured.',
        body: 'STRIVN shows the value observed in the sessions where you used this exercise. It is a reference point for adjusting your declared value. It never replaces it. And its origin is always named, because they do not carry the same weight.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'measured', desc: 'Timed on a block, in a live session.' },
          { name: 'planned', desc: 'Taken from the duration you had scheduled.' },
          { name: 'estimated', desc: 'The session’s GPS share attributed to this block.' },
          { name: 'reported by players', desc: 'Perceived RPE, returned by the squad.' },
          {
            name: 'small sample',
            desc: 'An average over too few sessions. To be treated as an indication, not a reference.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'Then the GPS settles it',
          desc: 'After the import, “estimated” gives way to the value actually measured on the block. What you had declared stays visible next to it: the comparison is what improves your cards.',
        },
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Oefeningenbibliotheek | STRIVN',
      description:
        'Een link, een foto, een schema of gewoon tekst: alles komt in hetzelfde postvak IN, wordt één keer gesorteerd, en kan daarna aan elke training worden gekoppeld.',
    },
    hero: {
      kicker: 'FUNCTIES · PLANNING',
      title: 'Wat je ’s avonds tegenkomt, belandt in de training van donderdag.',
      sub: 'Een TikTok-link, een foto genomen langs het veld, een schema getekend op het tactische bord, of gewoon tekst. Alles komt in hetzelfde postvak IN, wordt één keer gesorteerd, en kan daarna aan elke training worden gekoppeld.',
      bullets: [
        'Vier manieren om vast te leggen: link, foto, schema, tekst',
        'Niets is zichtbaar voor de ploeg zolang het niet gesorteerd is',
        'Mappen, tags, filters en een schermvullende snelweergave',
        'Kernmetrieken: de geschatte externe belasting vóór de training',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Planning bekijken', href: '/nl/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'VIER INGANGEN',
        title: 'Een link geplakt, en het staat al in de bibliotheek.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Link',
            desc: 'Plak een URL. TikTok en X spelen rechtstreeks in de bibliotheek; Instagram en Facebook verschijnen als linkkaart.',
          },
          {
            icon: 'image',
            title: 'Foto / Video',
            desc: 'Importeer een bestand van je toestel — een foto genomen langs het veld, een video gefilmd op training.',
          },
          {
            icon: 'pen-line',
            title: 'Schema',
            desc: 'Teken op het tactische bord, of neem een bestaand bord over. Een gepubliceerd schema komt vanzelf in de bibliotheek.',
          },
          {
            icon: 'type',
            title: 'Tekst',
            desc: 'Schrijf de beschrijving meteen uit: richtlijnen, varianten, aandachtspunten. Geen media, geen probleem.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'Vanuit de zetel, ook',
          desc: 'Stuur een link door naar het WhatsApp-nummer van STRIVN vanaf je telefoon: de capture komt in hetzelfde postvak IN, precies zoals vanaf het web.',
        },
      },
      {
        kicker: 'HET POSTVAK IN',
        title: 'Jij sorteert eerst. De ploeg ziet daarna.',
        body: 'Elke capture komt eerst in het postvak IN. Je past de titel aan, je bergt ze op in een map — bestaand of ter plekke gemaakt — en je voegt tags toe. Bij links en video’s stelt een balk een titel en tags voor: neem ze over met één klik, of negeer ze.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OPBERGEN',
            title: 'Voor jou alleen',
            desc: 'De oefening blijft in jouw bibliotheek. Niemand anders ziet ze.',
          },
          {
            eyebrow: 'PUBLICEREN',
            title: 'Voor de hele ploeg',
            desc: 'Ze wordt gedeeld met de staf en kan aan een training gekoppeld worden.',
          },
          {
            eyebrow: 'VERWIJDEREN',
            title: 'De capture wegleggen',
            desc: 'Wat je niet interesseert blijft niet in de weg staan.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'En dan terugvinden, zonder zoeken',
          desc: 'Het linkerpaneel draagt je mappen en tags met hun aantal oefeningen; het raster zet het medium vooraan; de snelweergave opent schermvullend, metadata opzij, met vorige / volgende op het toetsenbord. Je bladert door de hele selectie zonder naar het raster terug te keren.',
        },
      },
      {
        kicker: 'KERNMETRIEKEN',
        title: '“1 200 m” zegt niets. “1 200 m over 15 min” wel.',
        body: 'Kernmetrieken beschrijven wat een oefening voortbrengt: afgelegde afstand, aantal sprints, verwachte RPE, speeloppervlak. Je vult ze één keer in op de fiche, met hun referentieduur, en die duur wordt verplicht vanaf de eerste metriek, want zij maakt de waarde bruikbaar.',
        kind: 'compare',
        heads: ['Cumulatief', 'Intensief'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'VOORBEELDEN',
            a: 'Afstand · Sprints · Versnellingen',
            b: 'Verwachte RPE · Spelers · Oppervlak',
          },
          {
            label: 'MET DE DUUR',
            a: 'Evenredig met het blok. Dezelfde oefening 20 minuten in plaats van 15 kondigt 1 600 m aan in plaats van 1 200.',
            b: 'Ongewijzigd: dit zijn eigenschappen van het blok. Een spelvorm met 8 spelers op 400 m² blijft dat, of ze nu 10 of 30 minuten duurt.',
          },
          {
            label: 'WAAR ZE VANDAAN KOMEN',
            a: 'De GPS-kolommen van jouw ploeg. Hernoem er een in je instellingen en alle oefeningen volgen.',
            b: 'Altijd beschikbaar, of vrij: “+ Andere metriek…”, jij geeft de naam en de eenheid.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'Deze waarden zijn indicatief. Ze gaan in geen enkele belastingsberekening — niet sRPE, niet ACWR, niet de signalen. Ze beschrijven je oefeningen; ze sturen niets.',
          },
        ],
      },
      {
        kicker: 'VOOR DE TRAINING PLAATSVINDT',
        title: 'Wat de training zal opleveren, en over welk deel van de tijd.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DEKKING',
            title: 'Het totaal is altijd gedeeltelijk',
            desc: 'Een verloop bevat blokken zonder oefening — opwarming, vrij spel, stretching — en oefeningen die je nog niet beschreven hebt. De dekkingslijn zegt welk deel van de trainingstijd het cijfer werkelijk beschrijft. Onder 50 % kleurt ze oranje.',
          },
          {
            eyebrow: 'LEZEN',
            title: 'Een laag percentage is geen fout',
            desc: 'Het zegt gewoon waar de schatting blind blijft. En de volgende regel noemt de blokken die je nog moet aanvullen: dat is je werklijst om de bibliotheek te verrijken.',
          },
          {
            eyebrow: 'TRACEERBAARHEID',
            title: 'Het teken ~ markeert de schatting',
            desc: 'De som van de delen van elk blok geeft altijd het totaal van de training. Je kan van een cijfer terug naar de oefening die het voortbrengt.',
          },
        ],
      },
      {
        kicker: 'WAT VOORBIJE TRAININGEN ANTWOORDEN',
        title: 'Onder elke metriek, wat het veld gemeten heeft.',
        body: 'STRIVN toont de waarde die is waargenomen in de trainingen waar je deze oefening gebruikt hebt. Ze dient als ijkpunt om je opgegeven waarde bij te stellen. Ze vervangt die nooit. En haar oorsprong wordt altijd genoemd, want ze weegt niet even zwaar.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'gemeten', desc: 'Gechronometreerd op een blok, in een live training.' },
          { name: 'gepland', desc: 'Overgenomen van de duur die je had voorzien.' },
          { name: 'geschat', desc: 'GPS-aandeel van de training toegewezen aan dit blok.' },
          { name: 'opgegeven door de spelers', desc: 'Ervaren RPE, gemeld door de kern.' },
          {
            name: 'kleine steekproef',
            desc: 'Gemiddelde berekend over te weinig trainingen. Te behandelen als een aanwijzing, niet als een referentie.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'En dan beslist de GPS',
          desc: 'Na de import maakt “geschat” plaats voor de waarde die werkelijk op het blok gemeten is. Wat je had opgegeven blijft ernaast zichtbaar: die vergelijking is wat je fiches beter maakt.',
        },
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Übungsbibliothek | STRIVN',
      description:
        'Ein Link, ein Foto, eine Zeichnung oder einfach Text: Alles landet im selben Posteingang, wird einmal sortiert und lässt sich danach an jede Einheit hängen.',
    },
    hero: {
      kicker: 'FUNKTIONEN · PLANUNG',
      title: 'Was Ihnen abends begegnet, landet in der Einheit am Donnerstag.',
      sub: 'Ein TikTok-Link, ein am Spielfeldrand aufgenommenes Foto, eine auf der Taktiktafel gezeichnete Skizze oder schlicht Text. Alles landet im selben Posteingang, wird einmal sortiert und lässt sich danach an jede Einheit hängen.',
      bullets: [
        'Vier Wege zu erfassen: Link, Foto, Zeichnung, Text',
        'Nichts ist für die Mannschaft sichtbar, solange es nicht sortiert ist',
        'Ordner, Tags, Filter und eine Schnellansicht im Vollbild',
        'Kennzahlen: die geschätzte externe Belastung vor der Einheit',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Planung ansehen', href: '/de/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'VIER EINGÄNGE',
        title: 'Ein Link eingefügt, und er liegt schon in der Bibliothek.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Link',
            desc: 'Eine URL einfügen. TikTok und X laufen direkt in der Bibliothek; Instagram und Facebook erscheinen als Link-Karte.',
          },
          {
            icon: 'image',
            title: 'Foto / Video',
            desc: 'Eine Datei vom Gerät importieren — ein Foto vom Spielfeldrand, ein im Training gefilmtes Video.',
          },
          {
            icon: 'pen-line',
            title: 'Zeichnung',
            desc: 'Auf der Taktiktafel zeichnen oder eine bestehende Tafel aufgreifen. Eine veröffentlichte Zeichnung wandert von selbst in die Bibliothek.',
          },
          {
            icon: 'type',
            title: 'Text',
            desc: 'Die Beschreibung direkt schreiben: Anweisungen, Varianten, Merkpunkte. Kein Medium, kein Problem.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'Vom Sofa aus, auch',
          desc: 'Leiten Sie einen Link vom Handy an die WhatsApp-Nummer von STRIVN weiter: Die Aufnahme landet im selben Posteingang, genau wie aus dem Web.',
        },
      },
      {
        kicker: 'DER POSTEINGANG',
        title: 'Sie sortieren zuerst. Die Mannschaft sieht danach.',
        body: 'Jede Aufnahme landet zuerst im Posteingang. Sie passen den Titel an, legen sie in einen Ordner — bestehend oder spontan angelegt — und ergänzen Tags. Bei Links und Videos schlägt ein Band Titel und Tags vor: mit einem Klick übernehmen oder ignorieren.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ABLEGEN',
            title: 'Nur für Sie',
            desc: 'Die Übung bleibt in Ihrer Bibliothek. Niemand sonst sieht sie.',
          },
          {
            eyebrow: 'VERÖFFENTLICHEN',
            title: 'Für die ganze Mannschaft',
            desc: 'Sie wird mit dem Staff geteilt und lässt sich an eine Einheit hängen.',
          },
          {
            eyebrow: 'LÖSCHEN',
            title: 'Die Aufnahme verwerfen',
            desc: 'Was Sie nicht interessiert, bleibt nicht im Weg liegen.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'Und dann wiederfinden, ohne zu suchen',
          desc: 'Die linke Spalte trägt Ihre Ordner und Tags mit ihrer Übungszahl; das Raster stellt das Medium nach vorn; die Schnellansicht öffnet im Vollbild, Metadaten daneben, mit Vor / Zurück auf der Tastatur. Sie blättern die ganze Auswahl durch, ohne ins Raster zurückzukehren.',
        },
      },
      {
        kicker: 'KENNZAHLEN',
        title: '„1 200 m“ heißt nichts. „1 200 m auf 15 Min“ schon.',
        body: 'Kennzahlen beschreiben, was eine Übung erzeugt: zurückgelegte Distanz, Anzahl Sprints, erwarteter RPE, Spielfläche. Sie tragen sie einmal auf der Karte ein, mit ihrer Bezugsdauer, und diese Dauer wird ab der ersten Kennzahl Pflicht, weil sie den Wert erst brauchbar macht.',
        kind: 'compare',
        heads: ['Kumulativ', 'Intensiv'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'BEISPIELE',
            a: 'Distanz · Sprints · Beschleunigungen',
            b: 'Erwarteter RPE · Spieler · Fläche',
          },
          {
            label: 'MIT DER DAUER',
            a: 'Proportional zum Block. Dieselbe Übung 20 statt 15 Minuten gespielt kündigt 1 600 m statt 1 200 an.',
            b: 'Unverändert: Das sind Eigenschaften des Blocks. Eine Spielform mit 8 Spielern auf 400 m² bleibt das, ob sie 10 oder 30 Minuten dauert.',
          },
          {
            label: 'WOHER SIE KOMMEN',
            a: 'Die GPS-Spalten Ihrer Mannschaft. Benennen Sie eine in den Einstellungen um, alle Übungen ziehen mit.',
            b: 'Immer verfügbar, oder frei: „+ Andere Kennzahl…“, Sie geben Name und Einheit vor.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'Diese Werte sind Richtwerte. Sie gehen in keine Belastungsrechnung ein — weder sRPE noch ACWR noch die Signale. Sie beschreiben Ihre Übungen; sie steuern nichts.',
          },
        ],
      },
      {
        kicker: 'BEVOR DIE EINHEIT STATTFINDET',
        title: 'Was die Einheit erzeugen wird, und über welchen Anteil ihrer Zeit.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ABDECKUNG',
            title: 'Die Summe ist immer unvollständig',
            desc: 'Ein Ablauf enthält Blöcke ohne Übung — Aufwärmen, freies Spiel, Dehnen — und Übungen, die Sie noch nicht beschrieben haben. Die Abdeckungszeile sagt, welchen Anteil der Einheitszeit die Zahl wirklich beschreibt. Unter 50 % wird sie gelb.',
          },
          {
            eyebrow: 'LESEN',
            title: 'Eine niedrige Quote ist kein Fehler',
            desc: 'Sie sagt nur, wo die Schätzung blind bleibt. Und die nächste Zeile nennt die zu ergänzenden Blöcke: Das ist Ihre Arbeitsliste, um die Bibliothek zu füllen.',
          },
          {
            eyebrow: 'NACHVOLLZIEHBARKEIT',
            title: 'Das Zeichen ~ markiert die Schätzung',
            desc: 'Die Summe der Anteile jedes Blocks ergibt immer die Gesamtsumme der Einheit. Sie können von einer Zahl zurück zur Übung gehen, die sie erzeugt.',
          },
        ],
      },
      {
        kicker: 'WAS VERGANGENE EINHEITEN ANTWORTEN',
        title: 'Unter jeder Kennzahl, was der Platz gemessen hat.',
        body: 'STRIVN zeigt den Wert, der in den Einheiten beobachtet wurde, in denen Sie diese Übung eingesetzt haben. Er dient als Bezugspunkt, um Ihren angegebenen Wert zu justieren. Er ersetzt ihn nie. Und seine Herkunft wird immer genannt, denn sie wiegt nicht gleich schwer.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'gemessen', desc: 'Auf einem Block gestoppt, in einer Live-Einheit.' },
          { name: 'geplant', desc: 'Aus der Dauer übernommen, die Sie vorgesehen hatten.' },
          { name: 'geschätzt', desc: 'GPS-Anteil der Einheit, diesem Block zugeordnet.' },
          { name: 'von den Spielern gemeldet', desc: 'Empfundener RPE, vom Kader zurückgemeldet.' },
          {
            name: 'kleine Stichprobe',
            desc: 'Mittelwert über zu wenige Einheiten. Als Hinweis zu behandeln, nicht als Referenz.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'Dann entscheidet das GPS',
          desc: 'Nach dem Import weicht „geschätzt“ dem tatsächlich auf dem Block gemessenen Wert. Was Sie angegeben hatten, bleibt daneben sichtbar: Der Vergleich ist es, der Ihre Karten besser macht.',
        },
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Biblioteca de exercícios | STRIVN',
      description:
        'Uma ligação, uma foto, um esquema ou simples texto: tudo chega à mesma caixa de entrada, tria-se uma vez, e depois associa-se a qualquer treino.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PLANEAMENTO',
      title: 'O que encontra à noite acaba no treino de quinta.',
      sub: 'Uma ligação do TikTok, uma foto tirada à beira do campo, um esquema desenhado no quadro tático, ou simplesmente texto. Tudo chega à mesma caixa de entrada, tria-se uma vez, e depois associa-se a qualquer treino.',
      bullets: [
        'Quatro formas de capturar: ligação, foto, esquema, texto',
        'Nada é visível para a equipa enquanto não estiver triado',
        'Pastas, etiquetas, filtros e pré-visualização em ecrã cheio',
        'Métricas-chave: a carga externa estimada antes do treino',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o planeamento', href: '/pt/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'QUATRO ENTRADAS',
        title: 'Um link colado, e já está na biblioteca.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Ligação',
            desc: 'Cole um URL. TikTok e X reproduzem-se diretamente na biblioteca; Instagram e Facebook aparecem como cartão-ligação.',
          },
          {
            icon: 'image',
            title: 'Foto / Vídeo',
            desc: 'Importe um ficheiro do seu aparelho — uma foto tirada à beira do campo, um vídeo filmado no treino.',
          },
          {
            icon: 'pen-line',
            title: 'Esquema',
            desc: 'Desenhe no quadro tático, ou retome um quadro existente. Um esquema publicado entra sozinho na biblioteca.',
          },
          {
            icon: 'type',
            title: 'Texto',
            desc: 'Escreva a descrição diretamente: instruções, variantes, referências. Sem média, sem problema.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'Do sofá, também',
          desc: 'Reencaminhe uma ligação para o número WhatsApp da STRIVN a partir do telemóvel: a captura chega à mesma caixa de entrada, exatamente como a partir da web.',
        },
      },
      {
        kicker: 'A CAIXA DE ENTRADA',
        title: 'Você tria primeiro. A equipa vê depois.',
        body: 'Cada captura chega primeiro à caixa de entrada. Ajusta o título, arquiva-a numa pasta — existente ou criada na hora — e acrescenta etiquetas. Nas ligações e nos vídeos, uma faixa propõe um título e etiquetas: aceite-os num clique, ou ignore-os.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ARQUIVAR',
            title: 'Só para si',
            desc: 'O exercício fica na sua biblioteca. Mais ninguém o vê.',
          },
          {
            eyebrow: 'PUBLICAR',
            title: 'Para toda a equipa',
            desc: 'É partilhado com o staff e passa a poder associar-se a um treino.',
          },
          {
            eyebrow: 'ELIMINAR',
            title: 'Pôr a captura de lado',
            desc: 'O que não lhe interessa não fica ali a estorvar.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'E depois reencontrar, sem procurar',
          desc: 'O painel da esquerda leva as suas pastas e etiquetas com o número de exercícios; a grelha põe o média à frente; a pré-visualização abre em ecrã cheio, metadados ao lado, com anterior / seguinte no teclado. Folheia toda a seleção sem voltar à grelha.',
        },
      },
      {
        kicker: 'MÉTRICAS-CHAVE',
        title: '«1 200 m» não quer dizer nada. «1 200 m em 15 min», sim.',
        body: 'As métricas-chave descrevem o que um exercício produz: a distância percorrida, o número de sprints, o RPE esperado, a superfície de jogo. Preenche-as uma vez na ficha, com a sua duração de referência, e essa duração torna-se obrigatória logo na primeira métrica, porque é ela que torna o valor utilizável.',
        kind: 'compare',
        heads: ['Cumulativa', 'Intensiva'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'EXEMPLOS',
            a: 'Distância · Sprints · Acelerações',
            b: 'RPE esperado · Jogadores · Superfície',
          },
          {
            label: 'COM A DURAÇÃO',
            a: 'Proporcional ao bloco. O mesmo exercício jogado 20 minutos em vez de 15 anuncia 1 600 m em vez de 1 200.',
            b: 'Inalterada: são propriedades do bloco. Um jogo a 8 jogadores em 400 m² continua a sê-lo, dure 10 ou 30 minutos.',
          },
          {
            label: 'DE ONDE VÊM',
            a: 'As colunas GPS da sua equipa. Renomeie uma nas definições e todos os exercícios acompanham.',
            b: 'Sempre disponíveis, ou livres: «+ Outra métrica…», dá o nome e a unidade.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'Estes valores são indicativos. Não entram em nenhum cálculo de carga — nem sRPE, nem ACWR, nem os sinais. Descrevem os seus exercícios; não pilotam nada.',
          },
        ],
      },
      {
        kicker: 'ANTES DE O TREINO ACONTECER',
        title: 'O que o treino vai produzir, e sobre que parte do tempo.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'COBERTURA',
            title: 'O total é sempre parcial',
            desc: 'Um desenrolar contém blocos sem exercício — aquecimento, jogo livre, alongamentos — e exercícios que ainda não descreveu. A linha de cobertura diz que parte do tempo de treino o número descreve realmente. Abaixo de 50 %, passa a laranja.',
          },
          {
            eyebrow: 'LEITURA',
            title: 'Uma taxa baixa não é um erro',
            desc: 'Diz apenas onde a estimativa continua cega. E a linha seguinte nomeia os blocos a completar: é a sua lista de trabalho para enriquecer a biblioteca.',
          },
          {
            eyebrow: 'RASTREABILIDADE',
            title: 'O sinal ~ marca a estimativa',
            desc: 'A soma das partes de cada bloco dá sempre o total do treino. Pode voltar de um número ao exercício que o produz.',
          },
        ],
      },
      {
        kicker: 'O QUE OS TREINOS PASSADOS RESPONDEM',
        title: 'Sob cada métrica, o que o campo mediu.',
        body: 'A STRIVN mostra o valor observado nos treinos em que usou este exercício. Serve de referência para ajustar o valor que declarou. Nunca o substitui. E a sua origem é sempre nomeada, porque não pesa o mesmo.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'medido', desc: 'Cronometrado num bloco, em treino em direto.' },
          { name: 'planeado', desc: 'Retirado da duração que tinha previsto.' },
          { name: 'estimado', desc: 'Parte GPS do treino atribuída a este bloco.' },
          { name: 'declarado pelos jogadores', desc: 'RPE sentido, reportado pelo plantel.' },
          {
            name: 'amostra pequena',
            desc: 'Média calculada sobre poucos treinos. A tratar como indicação, não como referência.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'E depois o GPS decide',
          desc: 'Depois da importação, «estimado» dá lugar ao valor realmente medido no bloco. O que tinha declarado fica visível ao lado: é a comparação que faz evoluir as suas fichas.',
        },
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Biblioteca de ejercicios | STRIVN',
      description:
        'Un enlace, una foto, un esquema o simple texto: todo llega a la misma bandeja de entrada, se clasifica una vez, y luego se asocia a cualquier sesión.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · PLANIFICACIÓN',
      title: 'Lo que ves por la noche acaba en la sesión del jueves.',
      sub: 'Un enlace de TikTok, una foto tomada a pie de campo, un esquema dibujado en la pizarra táctica, o simplemente texto. Todo llega a la misma bandeja de entrada, se clasifica una vez, y luego se asocia a cualquier sesión.',
      bullets: [
        'Cuatro formas de capturar: enlace, foto, esquema, texto',
        'Nada es visible para el equipo mientras no esté clasificado',
        'Carpetas, etiquetas, filtros y vista rápida a pantalla completa',
        'Métricas clave: la carga externa estimada antes de la sesión',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la planificación', href: '/es/features/sessions/' },
      },
      visual: 'library-inbox',
    },
    sections: [
      {
        kicker: 'CUATRO ENTRADAS',
        title: 'Un enlace pegado, y ya está en la biblioteca.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'external-link',
            title: 'Enlace',
            desc: 'Pega una URL. TikTok y X se reproducen directamente en la biblioteca; Instagram y Facebook aparecen como tarjeta-enlace.',
          },
          {
            icon: 'image',
            title: 'Foto / Vídeo',
            desc: 'Importa un archivo desde tu dispositivo — una foto tomada a pie de campo, un vídeo grabado en el entrenamiento.',
          },
          {
            icon: 'pen-line',
            title: 'Esquema',
            desc: 'Dibuja en la pizarra táctica, o retoma una pizarra existente. Un esquema publicado entra solo en la biblioteca.',
          },
          {
            icon: 'type',
            title: 'Texto',
            desc: 'Escribe la descripción directamente: consignas, variantes, referencias. Sin medio, sin problema.',
          },
        ],
        note: {
          icon: 'share-2',
          label: 'Desde el sofá, también',
          desc: 'Reenvía un enlace al número de WhatsApp de STRIVN desde tu teléfono: la captura llega a la misma bandeja de entrada, exactamente como desde la web.',
        },
      },
      {
        kicker: 'LA BANDEJA DE ENTRADA',
        title: 'Tú clasificas primero. El equipo lo ve después.',
        body: 'Cada captura llega primero a la bandeja de entrada. Ajustas el título, la archivas en una carpeta — existente o creada al vuelo — y añades etiquetas. En los enlaces y los vídeos, una franja propone un título y etiquetas: acéptalos en un clic, o ignóralos.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ARCHIVAR',
            title: 'Solo para ti',
            desc: 'El ejercicio se queda en tu biblioteca. Nadie más lo ve.',
          },
          {
            eyebrow: 'PUBLICAR',
            title: 'Para todo el equipo',
            desc: 'Se comparte con el staff y pasa a poder asociarse a una sesión.',
          },
          {
            eyebrow: 'ELIMINAR',
            title: 'Descartar la captura',
            desc: 'Lo que no te interesa no se queda ahí estorbando.',
          },
        ],
        note: {
          icon: 'eye',
          label: 'Y luego reencontrarlo, sin buscar',
          desc: 'El panel izquierdo lleva tus carpetas y etiquetas con su número de ejercicios; la rejilla pone el medio por delante; la vista rápida abre a pantalla completa, metadatos al lado, con anterior / siguiente en el teclado. Hojeas toda la selección sin volver a la rejilla.',
        },
      },
      {
        kicker: 'MÉTRICAS CLAVE',
        title: '«1 200 m» no dice nada. «1 200 m en 15 min», sí.',
        body: 'Las métricas clave describen lo que produce un ejercicio: la distancia recorrida, el número de sprints, el RPE esperado, la superficie de juego. Las rellenas una vez en la ficha, con su duración de referencia, y esa duración pasa a ser obligatoria desde la primera métrica, porque es la que hace el valor utilizable.',
        kind: 'compare',
        heads: ['Acumulativa', 'Intensiva'],
        tones: ['blue', 'green'],
        rows: [
          {
            label: 'EJEMPLOS',
            a: 'Distancia · Sprints · Aceleraciones',
            b: 'RPE esperado · Jugadores · Superficie',
          },
          {
            label: 'CON LA DURACIÓN',
            a: 'Proporcional al bloque. El mismo ejercicio jugado 20 minutos en vez de 15 anuncia 1 600 m en vez de 1 200.',
            b: 'Sin cambios: son propiedades del bloque. Un juego a 8 jugadores en 400 m² lo sigue siendo, dure 10 o 30 minutos.',
          },
          {
            label: 'DE DÓNDE VIENEN',
            a: 'Las columnas GPS de tu equipo. Renombra una en tus ajustes y todos los ejercicios la siguen.',
            b: 'Siempre disponibles, o libres: «+ Otra métrica…», tú das el nombre y la unidad.',
          },
        ],
        callouts: [
          {
            icon: 'circle-alert',
            tone: 'orange',
            text: 'Estos valores son indicativos. No entran en ningún cálculo de carga — ni sRPE, ni ACWR, ni las señales. Describen tus ejercicios; no pilotan nada.',
          },
        ],
      },
      {
        kicker: 'ANTES DE QUE LA SESIÓN OCURRA',
        title: 'Lo que la sesión producirá, y sobre qué parte del tiempo.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'COBERTURA',
            title: 'El total siempre es parcial',
            desc: 'Un desarrollo contiene bloques sin ejercicio — calentamiento, juego libre, estiramientos — y ejercicios que aún no has descrito. La línea de cobertura dice qué parte del tiempo de sesión describe realmente la cifra. Por debajo del 50 %, pasa a naranja.',
          },
          {
            eyebrow: 'LECTURA',
            title: 'Una tasa baja no es un error',
            desc: 'Solo dice dónde la estimación sigue ciega. Y la línea siguiente nombra los bloques por completar: esa es tu lista de trabajo para enriquecer la biblioteca.',
          },
          {
            eyebrow: 'TRAZABILIDAD',
            title: 'El signo ~ marca la estimación',
            desc: 'La suma de las partes de cada bloque da siempre el total de la sesión. Puedes volver de una cifra al ejercicio que la produce.',
          },
        ],
      },
      {
        kicker: 'LO QUE RESPONDEN LAS SESIONES PASADAS',
        title: 'Bajo cada métrica, lo que el campo ha medido.',
        body: 'STRIVN muestra el valor observado en las sesiones donde has usado este ejercicio. Sirve de referencia para ajustar tu valor declarado. Nunca lo sustituye. Y su origen siempre se nombra, porque no pesan igual.',
        kind: 'rows',
        pill: true,
        rows: [
          { name: 'medido', desc: 'Cronometrado en un bloque, en sesión en directo.' },
          { name: 'planificado', desc: 'Tomado de la duración que habías previsto.' },
          { name: 'estimado', desc: 'Parte GPS de la sesión atribuida a este bloque.' },
          { name: 'declarado por los jugadores', desc: 'RPE percibido, reportado por la plantilla.' },
          {
            name: 'muestra pequeña',
            desc: 'Media calculada sobre demasiado pocas sesiones. A tratar como indicación, no como referencia.',
          },
        ],
        note: {
          icon: 'satellite',
          label: 'Y luego el GPS decide',
          desc: 'Tras la importación, «estimado» deja paso al valor realmente medido en el bloque. Lo que habías declarado sigue visible al lado: la comparación es lo que hace progresar tus fichas.',
        },
      },
    ],
  },
};
