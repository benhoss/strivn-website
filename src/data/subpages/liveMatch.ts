/**
 * Live match — encoding a game while it is being played.
 *
 * The credit chain is genuinely ordered (it runs backwards from the goal), so
 * it is the one place on these pages where numbered steps carry information
 * rather than decorate it.
 */
import type { SubpageLocales } from './types';

export const liveMatch: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Live match | STRIVN',
      description:
        'Score, temps de jeu, cartons — et vos faits, la chaîne de joueurs derrière chaque but, sa qualification, et des observations dessinées. Tout fonctionne hors ligne.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · TERRAIN',
      title: 'Le match s’encode pendant qu’il se joue.',
      sub: 'Le score, les temps de jeu et les cartons — mais aussi les faits que votre équipe compte, la chaîne de joueurs derrière chaque but, sa qualification, et des observations dessinées sur un vrai terrain. Tout fonctionne hors ligne.',
      bullets: [
        'Votre vocabulaire de match : vos faits, vos rôles, vos axes',
        'Un tap côté Nous ouvre la grille des joueurs, un second attribue',
        'La chaîne s’ouvre d’elle-même après un but que vous marquez',
        'Croquis au doigt, horodaté à la minute de jeu',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le live séance', href: '/fr/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'LA BANDE DES FAITS',
        title: 'Un seul bouton : il compte, et il attribue.',
        body: 'Les faits de votre vocabulaire forment une bande au-dessus des stats rapides. Chaque tuile porte son libellé, puis le compte « Nous » et le compte « Adv. ».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UN TAP CÔTÉ ADV.',
            title: 'Compter pour l’adversaire',
            desc: 'Le fait est enregistré sans joueur. C’est un tap, et c’est fini.',
          },
          {
            eyebrow: 'UN TAP CÔTÉ NOUS',
            title: 'Ouvrir la grille des joueurs',
            desc: 'Un second tap attribue le fait au joueur. Deux gestes pour compter et créditer.',
          },
          {
            eyebrow: 'SANS JOUEUR',
            title: 'Enregistrer au collectif',
            desc: 'Quand personne ne se détache, le fait revient à l’équipe plutôt qu’à un nom pris au hasard.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'Un fait remplace le compteur rapide du même geste : si votre vocabulaire contient « Tir cadré », la stat rapide « Tir cadré » disparaît de la bande. Un seul bouton par action.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'Le compteur affiche le total réel. Il additionne les faits attribués et les faits non attribués — le nombre que vous lisez pendant le match n’est amputé de rien.',
          },
        ],
      },
      {
        kicker: 'APRÈS UN BUT QUE VOUS MARQUEZ',
        title: 'La chaîne s’ouvre d’elle-même.',
        body: 'Dès que votre vocabulaire déclare au moins trois rôles de crédit, la feuille se déroule après le but, rôle par rôle, dans votre ordre. Vous n’avez rien à demander.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Buteur',
            desc: 'Déjà connu — vous venez de le taper. La chaîne démarre donc sur la première vraie question, pas sur une évidence.',
          },
          {
            num: '02',
            title: 'Passeur',
            desc: 'À renseigner. Le premier rôle que vous devez vraiment nommer.',
          },
          {
            num: '03',
            title: 'Avant-dernière passe',
            desc: 'À renseigner. Elle dit souvent plus sur l’action que la passe décisive.',
          },
          {
            num: '04',
            title: 'Récupération',
            desc: 'Passable. Là où le ballon a changé de camp, quand vous le savez.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '« Passer ce rôle » laisse un vide, et continue',
          desc: 'Une chaîne à trous est une chaîne valide — vous n’êtes pas obligé de tout savoir dans l’instant. Un joueur peut d’ailleurs tenir deux rôles : le garde qui refuse buteur = passeur ne vaut que pour les deux emplacements du score, jamais pour la chaîne.',
        },
      },
      {
        kicker: 'QUAND LA CHAÎNE EST FINIE',
        title: 'Le but vient d’être marqué. Vous avez trente secondes.',
        body: 'L’écran présente vos axes côte à côte, chacun avec la valeur déjà donnée. Vous en choisissez un, vous répondez, vous revenez à la liste — ou vous vous arrêtez là. La plupart des buts ne méritent qu’un ou deux axes.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Zone de finition',
            desc: 'D’où le tir est parti. La réponse tient en un tap.',
            chip: { label: 'Surface', tone: 'blue' },
          },
          {
            name: 'Type d’action',
            desc: 'Ce qui a produit l’occasion : jeu placé, transition, coup de pied arrêté.',
            chip: { label: 'Contre-attaque', tone: 'blue' },
          },
          {
            name: 'Origine',
            desc: 'Le côté ou la zone où l’action est née.',
            chip: { label: 'à renseigner' },
          },
          {
            name: 'Nombre de passes',
            desc: 'La longueur de la séquence, quand elle compte pour vous.',
            chip: { label: 'à renseigner' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'Un axe qui découpe la minute n’est jamais demandé',
          desc: 'L’application connaît déjà la minute du but : elle calcule « Timing » toute seule. Les axes de buts encaissés ne s’affichent pas non plus — la chaîne du direct porte sur un but que vous marquez, les autres se renseignent après le match, au calme.',
        },
      },
      {
        kicker: 'CE QUE VOUS VOULEZ RETENIR',
        title: 'Un croquis vaut la phrase que vous n’écrirez pas.',
        body: 'Le bouton Observation enregistre ce que vous voulez garder du match. Le schéma ouvre la même surface de dessin que le tableau tactique, sur un vrai terrain de votre sport.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Texte',
            desc: 'Ce que vous notez à chaud, en une ligne.',
          },
          {
            icon: 'image',
            title: 'Photo',
            desc: 'Prise depuis l’appareil, attachée à la minute.',
          },
          {
            icon: 'mic',
            title: 'Note vocale',
            desc: 'Les mains prises, la voix libre.',
          },
          {
            icon: 'pen-line',
            title: 'Schéma',
            desc: 'Vos joueurs à gauche, les adverses à droite : glissez-les sur le terrain, tracez flèches, zones et texte.',
          },
        ],
      },
      {
        kicker: 'À LA FIN DU MATCH',
        title: '« Fin du match » bascule tout vers les statistiques.',
        kind: 'rows',
        rows: [
          {
            name: 'Les temps de jeu',
            desc: 'Ils alimentent les Minutes de chaque joueur.',
          },
          {
            name: 'Les faits attribués',
            desc: 'Ils deviennent des statistiques joueur ; les autres, des statistiques d’équipe.',
          },
          {
            name: 'Les buts encodés',
            desc: 'Ils préparent la revue des buts, qui reprend chaîne et qualifications.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Live match | STRIVN',
      description:
        'Score, minutes, cards — plus your own facts, the chain of players behind every goal, its qualification, and drawn observations. It all works offline.',
    },
    hero: {
      kicker: 'FEATURES · PITCH-SIDE',
      title: 'The match is encoded while it is played.',
      sub: 'The score, the minutes and the cards — but also the facts your team counts, the chain of players behind every goal, its qualification, and observations drawn on a real pitch for your sport. It all works offline.',
      bullets: [
        'Your match vocabulary: your facts, your roles, your axes',
        'A tap on our side opens the player grid, a second attributes it',
        'The chain opens by itself after a goal you score',
        'Finger sketches, stamped with the minute of play',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See live session', href: '/en/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'THE FACT STRIP',
        title: 'One button: it counts, and it credits.',
        body: 'The facts in your vocabulary form a strip above the quick stats. Each tile carries its label, then the “Us” count and the “Opp.” count.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'A TAP ON THEIR SIDE',
            title: 'Count it for the opposition',
            desc: 'The fact is recorded with no player. One tap, and it is done.',
          },
          {
            eyebrow: 'A TAP ON OUR SIDE',
            title: 'Open the player grid',
            desc: 'A second tap credits the fact to the player. Two gestures to count and credit.',
          },
          {
            eyebrow: 'NO PLAYER',
            title: 'Record it to the team',
            desc: 'When nobody stands out, the fact goes to the squad rather than to a name picked at random.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'A fact replaces the quick counter for the same action: if your vocabulary contains “Shot on target”, the quick stat “Shot on target” leaves the strip. One button per action.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'The counter shows the real total. It adds credited and uncredited facts together — the number you read during the match is missing nothing.',
          },
        ],
      },
      {
        kicker: 'AFTER A GOAL YOU SCORE',
        title: 'The chain opens by itself.',
        body: 'As soon as your vocabulary declares at least three credit roles, the sheet unfolds after the goal, role by role, in your order. You do not have to ask for it.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Scorer',
            desc: 'Already known — you have just tapped them. So the chain starts on the first real question, not on the obvious one.',
          },
          {
            num: '02',
            title: 'Assist',
            desc: 'To fill in. The first role you actually have to name.',
          },
          {
            num: '03',
            title: 'Pre-assist',
            desc: 'To fill in. It often says more about the move than the assist does.',
          },
          {
            num: '04',
            title: 'Recovery',
            desc: 'Skippable. Where the ball changed hands, when you know it.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '“Skip this role” leaves a gap, and carries on',
          desc: 'A chain with gaps is a valid chain — you are not required to know everything in the moment. A player can hold two roles, too: the guard that refuses scorer = assist only applies to the two score slots, never to the chain.',
        },
      },
      {
        kicker: 'ONCE THE CHAIN IS DONE',
        title: 'The goal has just gone in. You have thirty seconds.',
        body: 'The screen lays your axes side by side, each with the value already given. You pick one, you answer, you come back to the list — or you stop there. Most goals only deserve one or two axes.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Finishing zone',
            desc: 'Where the shot came from. The answer takes one tap.',
            chip: { label: 'Box', tone: 'blue' },
          },
          {
            name: 'Type of move',
            desc: 'What produced the chance: settled play, transition, set piece.',
            chip: { label: 'Counter-attack', tone: 'blue' },
          },
          {
            name: 'Origin',
            desc: 'The side or the zone the move was born in.',
            chip: { label: 'to fill in' },
          },
          {
            name: 'Number of passes',
            desc: 'How long the sequence ran, when that matters to you.',
            chip: { label: 'to fill in' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'An axis that slices the minute is never asked for',
          desc: 'The app already knows the minute of the goal: it works out “Timing” on its own. Conceded-goal axes do not appear either — the live chain is about a goal you score, the rest is filled in after the match, calmly.',
        },
      },
      {
        kicker: 'WHAT YOU WANT TO KEEP',
        title: 'A sketch is worth the sentence you will not write.',
        body: 'The Observation button records whatever you want to keep from the match. The diagram opens the same drawing surface as the tactics board, on a real pitch for your sport.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Text',
            desc: 'What you note in the moment, in one line.',
          },
          {
            icon: 'image',
            title: 'Photo',
            desc: 'Taken from the device, attached to the minute.',
          },
          {
            icon: 'mic',
            title: 'Voice note',
            desc: 'Hands busy, voice free.',
          },
          {
            icon: 'pen-line',
            title: 'Diagram',
            desc: 'Your players on the left, theirs on the right: drag them onto the pitch, draw arrows, zones and text.',
          },
        ],
      },
      {
        kicker: 'AT FULL TIME',
        title: '“End of match” tips everything into the statistics.',
        kind: 'rows',
        rows: [
          {
            name: 'The minutes played',
            desc: 'They feed each player’s Minutes.',
          },
          {
            name: 'The credited facts',
            desc: 'They become player statistics; the rest become team statistics.',
          },
          {
            name: 'The encoded goals',
            desc: 'They set up the goal review, which picks the chain and the qualifications back up.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Live wedstrijd | STRIVN',
      description:
        'Score, speelminuten, kaarten — plus jouw eigen feiten, de spelersketen achter elk doelpunt, de kwalificatie ervan, en getekende observaties. Alles werkt offline.',
    },
    hero: {
      kicker: 'FUNCTIES · LANGS HET VELD',
      title: 'De wedstrijd wordt ingevoerd terwijl ze gespeeld wordt.',
      sub: 'De score, de speelminuten en de kaarten — maar ook de feiten die jouw ploeg telt, de spelersketen achter elk doelpunt, de kwalificatie ervan, en observaties getekend op een echt veld van jouw sport. Alles werkt offline.',
      bullets: [
        'Jouw wedstrijdwoordenschat: jouw feiten, rollen en assen',
        'Eén tik aan onze kant opent het spelersraster, een tweede wijst toe',
        'De keten opent vanzelf na een doelpunt dat jij maakt',
        'Schetsen met de vinger, gestempeld op de speelminuut',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Live training bekijken', href: '/nl/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'DE FEITENBALK',
        title: 'Eén knop: hij telt, en hij wijst toe.',
        body: 'De feiten uit jouw woordenschat vormen een balk boven de snelle statistieken. Elke tegel draagt haar label, dan de telling “Wij” en de telling “Teg.”.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EEN TIK AAN HUN KANT',
            title: 'Tellen voor de tegenstander',
            desc: 'Het feit wordt opgeslagen zonder speler. Eén tik, en klaar.',
          },
          {
            eyebrow: 'EEN TIK AAN ONZE KANT',
            title: 'Het spelersraster openen',
            desc: 'Een tweede tik wijst het feit toe aan de speler. Twee gebaren om te tellen en toe te kennen.',
          },
          {
            eyebrow: 'ZONDER SPELER',
            title: 'Aan het collectief toekennen',
            desc: 'Als niemand eruit springt, gaat het feit naar de ploeg in plaats van naar een willekeurige naam.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'Een feit vervangt de snelle teller van dezelfde actie: bevat jouw woordenschat “Schot op doel”, dan verdwijnt de snelle statistiek “Schot op doel” uit de balk. Eén knop per actie.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'De teller toont het echte totaal. Hij telt toegewezen en niet-toegewezen feiten samen — het getal dat je tijdens de wedstrijd leest mist niets.',
          },
        ],
      },
      {
        kicker: 'NA EEN DOELPUNT DAT JIJ MAAKT',
        title: 'De keten opent vanzelf.',
        body: 'Zodra jouw woordenschat minstens drie kredietrollen bevat, ontrolt het blad zich na het doelpunt, rol na rol, in jouw volgorde. Je hoeft er niets voor te vragen.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Doelpuntenmaker',
            desc: 'Al bekend — je hebt hem net aangetikt. De keten start dus op de eerste echte vraag, niet op een vanzelfsprekendheid.',
          },
          {
            num: '02',
            title: 'Assist',
            desc: 'In te vullen. De eerste rol die je echt moet benoemen.',
          },
          {
            num: '03',
            title: 'Voorlaatste pass',
            desc: 'In te vullen. Ze zegt vaak meer over de actie dan de assist.',
          },
          {
            num: '04',
            title: 'Balrecuperatie',
            desc: 'Overslaanbaar. Waar de bal van kamp wisselde, als je het weet.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '“Deze rol overslaan” laat een gat, en gaat verder',
          desc: 'Een keten met gaten is een geldige keten — je hoeft niet alles op het moment zelf te weten. Een speler kan trouwens twee rollen dragen: de regel die doelpuntenmaker = assist weigert geldt alleen voor de twee scoreplaatsen, nooit voor de keten.',
        },
      },
      {
        kicker: 'ALS DE KETEN KLAAR IS',
        title: 'Het doelpunt is net gevallen. Je hebt dertig seconden.',
        body: 'Het scherm zet je assen naast elkaar, elk met de reeds gegeven waarde. Je kiest er een, je antwoordt, je keert terug naar de lijst — of je stopt daar. De meeste doelpunten verdienen maar één of twee assen.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Afwerkingszone',
            desc: 'Waar het schot vandaan kwam. Het antwoord is één tik.',
            chip: { label: 'Zestien', tone: 'blue' },
          },
          {
            name: 'Type actie',
            desc: 'Wat de kans opleverde: positiespel, omschakeling, stilstaande fase.',
            chip: { label: 'Counter', tone: 'blue' },
          },
          {
            name: 'Oorsprong',
            desc: 'De kant of de zone waar de actie ontstond.',
            chip: { label: 'in te vullen' },
          },
          {
            name: 'Aantal passes',
            desc: 'Hoe lang de reeks liep, als dat voor jou telt.',
            chip: { label: 'in te vullen' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'Een as die de minuut opdeelt wordt nooit gevraagd',
          desc: 'De app kent de minuut van het doelpunt al: ze berekent “Timing” zelf. Assen van tegendoelpunten verschijnen evenmin — de live-keten gaat over een doelpunt dat jij maakt, de rest vul je na de wedstrijd in, in alle rust.',
        },
      },
      {
        kicker: 'WAT JE WIL ONTHOUDEN',
        title: 'Een schets is de zin waard die je niet gaat schrijven.',
        body: 'De knop Observatie bewaart wat je van de wedstrijd wil onthouden. Het schema opent hetzelfde tekenvlak als het tactische bord, op een echt veld van jouw sport.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Tekst',
            desc: 'Wat je in het moment noteert, in één regel.',
          },
          {
            icon: 'image',
            title: 'Foto',
            desc: 'Genomen met het toestel, gekoppeld aan de minuut.',
          },
          {
            icon: 'mic',
            title: 'Spraaknotitie',
            desc: 'Handen bezet, stem vrij.',
          },
          {
            icon: 'pen-line',
            title: 'Schema',
            desc: 'Jouw spelers links, die van de tegenstander rechts: sleep ze op het veld, teken pijlen, zones en tekst.',
          },
        ],
      },
      {
        kicker: 'BIJ HET EINDSIGNAAL',
        title: '“Einde wedstrijd” kantelt alles naar de statistieken.',
        kind: 'rows',
        rows: [
          {
            name: 'De speelminuten',
            desc: 'Ze voeden de Minuten van elke speler.',
          },
          {
            name: 'De toegewezen feiten',
            desc: 'Ze worden spelersstatistieken; de andere worden ploegstatistieken.',
          },
          {
            name: 'De ingevoerde doelpunten',
            desc: 'Ze bereiden de doelpuntenanalyse voor, die keten en kwalificaties weer opneemt.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Live-Spiel | STRIVN',
      description:
        'Ergebnis, Einsatzzeiten, Karten — dazu Ihre eigenen Aktionen, die Spielerkette hinter jedem Tor, dessen Einordnung und gezeichnete Beobachtungen. Alles läuft offline.',
    },
    hero: {
      kicker: 'FUNKTIONEN · AM PLATZ',
      title: 'Das Spiel wird erfasst, während es läuft.',
      sub: 'Ergebnis, Einsatzzeiten und Karten — aber auch die Aktionen, die Ihre Mannschaft zählt, die Spielerkette hinter jedem Tor, dessen Einordnung und Beobachtungen, gezeichnet auf einem echten Feld Ihrer Sportart. Alles läuft offline.',
      bullets: [
        'Ihr Spielvokabular: Ihre Aktionen, Rollen und Achsen',
        'Ein Tippen auf unserer Seite öffnet das Spielerraster, ein zweites ordnet zu',
        'Die Kette öffnet sich von selbst nach einem Tor, das Sie erzielen',
        'Skizzen mit dem Finger, auf die Spielminute gestempelt',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Live-Einheit ansehen', href: '/de/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'DIE AKTIONSLEISTE',
        title: 'Eine Taste: Sie zählt, und sie ordnet zu.',
        body: 'Die Aktionen aus Ihrem Vokabular bilden eine Leiste über den Schnellstatistiken. Jede Kachel trägt ihre Bezeichnung, dann den Zähler „Wir“ und den Zähler „Geg.“.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EIN TIPPEN AUF DEREN SEITE',
            title: 'Für den Gegner zählen',
            desc: 'Die Aktion wird ohne Spieler gespeichert. Ein Tippen, und fertig.',
          },
          {
            eyebrow: 'EIN TIPPEN AUF UNSERER SEITE',
            title: 'Das Spielerraster öffnen',
            desc: 'Ein zweites Tippen ordnet die Aktion dem Spieler zu. Zwei Gesten zum Zählen und Zuschreiben.',
          },
          {
            eyebrow: 'OHNE SPIELER',
            title: 'Der Mannschaft zuschreiben',
            desc: 'Wenn sich niemand heraushebt, geht die Aktion an die Mannschaft statt an einen zufällig gewählten Namen.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'Eine Aktion ersetzt den Schnellzähler derselben Handlung: Enthält Ihr Vokabular „Schuss aufs Tor“, verschwindet die Schnellstatistik „Schuss aufs Tor“ aus der Leiste. Eine Taste je Handlung.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'Der Zähler zeigt die echte Summe. Er addiert zugeordnete und nicht zugeordnete Aktionen — der Zahl, die Sie während des Spiels lesen, fehlt nichts.',
          },
        ],
      },
      {
        kicker: 'NACH EINEM TOR, DAS SIE ERZIELEN',
        title: 'Die Kette öffnet sich von selbst.',
        body: 'Sobald Ihr Vokabular mindestens drei Kreditrollen führt, entrollt sich das Blatt nach dem Tor, Rolle für Rolle, in Ihrer Reihenfolge. Sie müssen nichts anfordern.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Torschütze',
            desc: 'Schon bekannt — Sie haben ihn gerade getippt. Die Kette beginnt also bei der ersten echten Frage, nicht bei einer Selbstverständlichkeit.',
          },
          {
            num: '02',
            title: 'Vorlage',
            desc: 'Einzutragen. Die erste Rolle, die Sie wirklich benennen müssen.',
          },
          {
            num: '03',
            title: 'Vor-Vorlage',
            desc: 'Einzutragen. Sie sagt oft mehr über die Aktion als die Vorlage.',
          },
          {
            num: '04',
            title: 'Balleroberung',
            desc: 'Überspringbar. Wo der Ball die Seite wechselte, wenn Sie es wissen.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '„Diese Rolle überspringen“ lässt eine Lücke und macht weiter',
          desc: 'Eine Kette mit Lücken ist eine gültige Kette — Sie müssen im Moment nicht alles wissen. Ein Spieler kann übrigens zwei Rollen halten: Die Sperre, die Torschütze = Vorlage verbietet, gilt nur für die beiden Plätze des Ergebnisses, nie für die Kette.',
        },
      },
      {
        kicker: 'WENN DIE KETTE STEHT',
        title: 'Das Tor ist gerade gefallen. Sie haben dreißig Sekunden.',
        body: 'Der Bildschirm legt Ihre Achsen nebeneinander, jede mit dem bereits gegebenen Wert. Sie wählen eine, Sie antworten, Sie kehren zur Liste zurück — oder Sie hören auf. Die meisten Tore verdienen nur ein oder zwei Achsen.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Abschlusszone',
            desc: 'Woher der Schuss kam. Die Antwort ist ein Tippen.',
            chip: { label: 'Strafraum', tone: 'blue' },
          },
          {
            name: 'Art der Aktion',
            desc: 'Was die Chance erzeugt hat: Positionsspiel, Umschalten, Standard.',
            chip: { label: 'Konter', tone: 'blue' },
          },
          {
            name: 'Ursprung',
            desc: 'Die Seite oder die Zone, in der die Aktion entstand.',
            chip: { label: 'einzutragen' },
          },
          {
            name: 'Anzahl Pässe',
            desc: 'Wie lang die Sequenz lief, wenn das für Sie zählt.',
            chip: { label: 'einzutragen' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'Eine Achse, die die Minute zerteilt, wird nie abgefragt',
          desc: 'Die App kennt die Minute des Tores bereits: Sie berechnet „Timing“ selbst. Achsen für Gegentore erscheinen ebenfalls nicht — die Live-Kette betrifft ein Tor, das Sie erzielen, der Rest wird nach dem Spiel in Ruhe eingetragen.',
        },
      },
      {
        kicker: 'WAS SIE BEHALTEN WOLLEN',
        title: 'Eine Skizze ist den Satz wert, den Sie nicht schreiben werden.',
        body: 'Die Schaltfläche Beobachtung hält fest, was Sie vom Spiel behalten wollen. Die Zeichnung öffnet dieselbe Fläche wie die Taktiktafel, auf einem echten Feld Ihrer Sportart.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Text',
            desc: 'Was Sie im Moment notieren, in einer Zeile.',
          },
          {
            icon: 'image',
            title: 'Foto',
            desc: 'Vom Gerät aufgenommen, an die Minute gehängt.',
          },
          {
            icon: 'mic',
            title: 'Sprachnotiz',
            desc: 'Hände belegt, Stimme frei.',
          },
          {
            icon: 'pen-line',
            title: 'Zeichnung',
            desc: 'Ihre Spieler links, die gegnerischen rechts: Ziehen Sie sie aufs Feld, zeichnen Sie Pfeile, Zonen und Text.',
          },
        ],
      },
      {
        kicker: 'BEIM SCHLUSSPFIFF',
        title: '„Spielende“ kippt alles in die Statistiken.',
        kind: 'rows',
        rows: [
          {
            name: 'Die Einsatzzeiten',
            desc: 'Sie speisen die Minuten jedes Spielers.',
          },
          {
            name: 'Die zugeordneten Aktionen',
            desc: 'Sie werden zu Spielerstatistiken; die übrigen zu Mannschaftsstatistiken.',
          },
          {
            name: 'Die erfassten Tore',
            desc: 'Sie bereiten die Torauswertung vor, die Kette und Einordnungen wieder aufgreift.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Jogo em direto | STRIVN',
      description:
        'Resultado, minutos, cartões — e ainda os seus factos, a cadeia de jogadores atrás de cada golo, a sua qualificação, e observações desenhadas. Tudo funciona offline.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · NO CAMPO',
      title: 'O jogo regista-se enquanto se joga.',
      sub: 'O resultado, os minutos e os cartões — mas também os factos que a sua equipa conta, a cadeia de jogadores atrás de cada golo, a sua qualificação, e observações desenhadas num campo real da sua modalidade. Tudo funciona offline.',
      bullets: [
        'O seu vocabulário de jogo: os seus factos, papéis e eixos',
        'Um toque do lado Nós abre a grelha de jogadores, um segundo atribui',
        'A cadeia abre-se sozinha depois de um golo que marca',
        'Esboços com o dedo, marcados com o minuto de jogo',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o treino em direto', href: '/pt/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'A BARRA DOS FACTOS',
        title: 'Um só botão: conta, e atribui.',
        body: 'Os factos do seu vocabulário formam uma barra por cima das estatísticas rápidas. Cada bloco leva a sua etiqueta, depois a contagem «Nós» e a contagem «Adv.».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UM TOQUE DO LADO ADV.',
            title: 'Contar para o adversário',
            desc: 'O facto fica registado sem jogador. Um toque, e está feito.',
          },
          {
            eyebrow: 'UM TOQUE DO LADO NÓS',
            title: 'Abrir a grelha de jogadores',
            desc: 'Um segundo toque atribui o facto ao jogador. Dois gestos para contar e creditar.',
          },
          {
            eyebrow: 'SEM JOGADOR',
            title: 'Registar ao coletivo',
            desc: 'Quando ninguém se destaca, o facto vai para a equipa em vez de para um nome escolhido ao acaso.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'Um facto substitui o contador rápido do mesmo gesto: se o seu vocabulário contém «Remate enquadrado», a estatística rápida «Remate enquadrado» sai da barra. Um só botão por ação.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'O contador mostra o total real. Soma os factos atribuídos e os não atribuídos — ao número que lê durante o jogo não falta nada.',
          },
        ],
      },
      {
        kicker: 'DEPOIS DE UM GOLO QUE MARCA',
        title: 'A cadeia abre-se sozinha.',
        body: 'Assim que o seu vocabulário declara pelo menos três papéis de crédito, a folha desenrola-se depois do golo, papel a papel, pela sua ordem. Não tem de pedir nada.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Marcador',
            desc: 'Já conhecido — acabou de o tocar. A cadeia começa portanto na primeira pergunta a sério, não numa evidência.',
          },
          {
            num: '02',
            title: 'Assistência',
            desc: 'A preencher. O primeiro papel que tem mesmo de nomear.',
          },
          {
            num: '03',
            title: 'Penúltimo passe',
            desc: 'A preencher. Muitas vezes diz mais sobre a jogada do que a assistência.',
          },
          {
            num: '04',
            title: 'Recuperação',
            desc: 'Saltável. Onde a bola mudou de lado, quando o sabe.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '«Saltar este papel» deixa um vazio, e continua',
          desc: 'Uma cadeia com falhas é uma cadeia válida — não é obrigado a saber tudo no momento. Um jogador pode aliás ocupar dois papéis: a regra que recusa marcador = assistência só vale para os dois lugares do resultado, nunca para a cadeia.',
        },
      },
      {
        kicker: 'QUANDO A CADEIA ESTÁ FEITA',
        title: 'O golo acabou de entrar. Tem trinta segundos.',
        body: 'O ecrã apresenta os seus eixos lado a lado, cada um com o valor já dado. Escolhe um, responde, volta à lista — ou fica-se por aí. A maioria dos golos só merece um ou dois eixos.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Zona de finalização',
            desc: 'De onde partiu o remate. A resposta é um toque.',
            chip: { label: 'Área', tone: 'blue' },
          },
          {
            name: 'Tipo de jogada',
            desc: 'O que produziu a ocasião: jogo posicional, transição, bola parada.',
            chip: { label: 'Contra-ataque', tone: 'blue' },
          },
          {
            name: 'Origem',
            desc: 'O lado ou a zona onde a jogada nasceu.',
            chip: { label: 'a preencher' },
          },
          {
            name: 'Número de passes',
            desc: 'O comprimento da sequência, quando isso lhe interessa.',
            chip: { label: 'a preencher' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'Um eixo que recorta o minuto nunca é pedido',
          desc: 'A aplicação já conhece o minuto do golo: calcula «Timing» sozinha. Os eixos de golos sofridos também não aparecem — a cadeia do direto é sobre um golo que marca, os restantes preenchem-se depois do jogo, com calma.',
        },
      },
      {
        kicker: 'O QUE QUER GUARDAR',
        title: 'Um esboço vale a frase que não vai escrever.',
        body: 'O botão Observação guarda o que quiser reter do jogo. O esquema abre a mesma superfície de desenho do quadro tático, num campo real da sua modalidade.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Texto',
            desc: 'O que anota a quente, numa linha.',
          },
          {
            icon: 'image',
            title: 'Fotografia',
            desc: 'Tirada com o aparelho, ligada ao minuto.',
          },
          {
            icon: 'mic',
            title: 'Nota de voz',
            desc: 'Mãos ocupadas, voz livre.',
          },
          {
            icon: 'pen-line',
            title: 'Esquema',
            desc: 'Os seus jogadores à esquerda, os adversários à direita: arraste-os para o campo, trace setas, zonas e texto.',
          },
        ],
      },
      {
        kicker: 'NO APITO FINAL',
        title: '«Fim do jogo» faz tudo passar para as estatísticas.',
        kind: 'rows',
        rows: [
          {
            name: 'Os minutos de jogo',
            desc: 'Alimentam os Minutos de cada jogador.',
          },
          {
            name: 'Os factos atribuídos',
            desc: 'Tornam-se estatísticas de jogador; os outros, estatísticas de equipa.',
          },
          {
            name: 'Os golos registados',
            desc: 'Preparam a revisão dos golos, que retoma cadeia e qualificações.',
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Partido en directo | STRIVN',
      description:
        'Marcador, minutos, tarjetas — y también tus hechos, la cadena de jugadores detrás de cada gol, su calificación, y observaciones dibujadas. Todo funciona sin conexión.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · A PIE DE CAMPO',
      title: 'El partido se registra mientras se juega.',
      sub: 'El marcador, los minutos y las tarjetas — pero también los hechos que tu equipo cuenta, la cadena de jugadores detrás de cada gol, su calificación, y observaciones dibujadas sobre un campo real de tu deporte. Todo funciona sin conexión.',
      bullets: [
        'Tu vocabulario de partido: tus hechos, roles y ejes',
        'Un toque del lado Nosotros abre la rejilla de jugadores, un segundo atribuye',
        'La cadena se abre sola tras un gol que marcas',
        'Croquis con el dedo, marcados con el minuto de juego',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver la sesión en directo', href: '/es/features/live-session/' },
      },
      visual: 'match-live',
    },
    sections: [
      {
        kicker: 'LA BARRA DE HECHOS',
        title: 'Un solo botón: cuenta, y atribuye.',
        body: 'Los hechos de tu vocabulario forman una barra encima de las estadísticas rápidas. Cada tarjeta lleva su etiqueta, después el recuento «Nos.» y el recuento «Riv.».',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UN TOQUE DEL LADO RIV.',
            title: 'Contar para el rival',
            desc: 'El hecho queda registrado sin jugador. Un toque, y ya está.',
          },
          {
            eyebrow: 'UN TOQUE DEL LADO NOS.',
            title: 'Abrir la rejilla de jugadores',
            desc: 'Un segundo toque atribuye el hecho al jugador. Dos gestos para contar y acreditar.',
          },
          {
            eyebrow: 'SIN JUGADOR',
            title: 'Registrar al colectivo',
            desc: 'Cuando nadie destaca, el hecho va al equipo en vez de a un nombre elegido al azar.',
          },
        ],
        callouts: [
          {
            icon: 'ban',
            tone: 'orange',
            text: 'Un hecho sustituye al contador rápido del mismo gesto: si tu vocabulario contiene «Tiro a puerta», la estadística rápida «Tiro a puerta» desaparece de la barra. Un solo botón por acción.',
          },
          {
            icon: 'sigma',
            tone: 'blue',
            text: 'El contador muestra el total real. Suma los hechos atribuidos y los no atribuidos — al número que lees durante el partido no le falta nada.',
          },
        ],
      },
      {
        kicker: 'TRAS UN GOL QUE MARCAS',
        title: 'La cadena se abre sola.',
        body: 'En cuanto tu vocabulario declara al menos tres roles de crédito, la hoja se despliega tras el gol, rol a rol, en tu orden. No tienes que pedir nada.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01',
            title: 'Goleador',
            desc: 'Ya conocido — acabas de tocarlo. La cadena arranca por tanto en la primera pregunta de verdad, no en una evidencia.',
          },
          {
            num: '02',
            title: 'Asistencia',
            desc: 'Por rellenar. El primer rol que sí tienes que nombrar.',
          },
          {
            num: '03',
            title: 'Penúltimo pase',
            desc: 'Por rellenar. A menudo dice más de la jugada que la asistencia.',
          },
          {
            num: '04',
            title: 'Recuperación',
            desc: 'Se puede saltar. Donde el balón cambió de bando, cuando lo sabes.',
          },
        ],
        note: {
          icon: 'corner-down-right',
          label: '«Saltar este rol» deja un hueco, y continúa',
          desc: 'Una cadena con huecos es una cadena válida — no estás obligado a saberlo todo en el momento. Un jugador puede además ocupar dos roles: la regla que rechaza goleador = asistencia solo vale para los dos puestos del marcador, nunca para la cadena.',
        },
      },
      {
        kicker: 'CUANDO LA CADENA ESTÁ HECHA',
        title: 'El gol acaba de entrar. Tienes treinta segundos.',
        body: 'La pantalla presenta tus ejes uno al lado del otro, cada uno con el valor ya dado. Eliges uno, respondes, vuelves a la lista — o te paras ahí. La mayoría de los goles solo merecen uno o dos ejes.',
        kind: 'rows',
        pill: true,
        rows: [
          {
            name: 'Zona de finalización',
            desc: 'De dónde salió el tiro. La respuesta es un toque.',
            chip: { label: 'Área', tone: 'blue' },
          },
          {
            name: 'Tipo de acción',
            desc: 'Lo que produjo la ocasión: juego posicional, transición, balón parado.',
            chip: { label: 'Contraataque', tone: 'blue' },
          },
          {
            name: 'Origen',
            desc: 'El lado o la zona donde nació la jugada.',
            chip: { label: 'por rellenar' },
          },
          {
            name: 'Número de pases',
            desc: 'La longitud de la secuencia, cuando te importa.',
            chip: { label: 'por rellenar' },
          },
        ],
        note: {
          icon: 'clock-3',
          label: 'Un eje que recorta el minuto nunca se pide',
          desc: 'La aplicación ya conoce el minuto del gol: calcula «Timing» sola. Los ejes de goles encajados tampoco aparecen — la cadena del directo trata de un gol que marcas, el resto se rellena tras el partido, con calma.',
        },
      },
      {
        kicker: 'LO QUE QUIERES RETENER',
        title: 'Un croquis vale la frase que no vas a escribir.',
        body: 'El botón Observación guarda lo que quieras conservar del partido. El esquema abre la misma superficie de dibujo que la pizarra táctica, sobre un campo real de tu deporte.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'type',
            title: 'Texto',
            desc: 'Lo que anotas en caliente, en una línea.',
          },
          {
            icon: 'image',
            title: 'Foto',
            desc: 'Tomada desde el dispositivo, ligada al minuto.',
          },
          {
            icon: 'mic',
            title: 'Nota de voz',
            desc: 'Las manos ocupadas, la voz libre.',
          },
          {
            icon: 'pen-line',
            title: 'Esquema',
            desc: 'Tus jugadores a la izquierda, los rivales a la derecha: arrástralos al campo, traza flechas, zonas y texto.',
          },
        ],
      },
      {
        kicker: 'AL PITIDO FINAL',
        title: '«Fin del partido» vuelca todo a las estadísticas.',
        kind: 'rows',
        rows: [
          {
            name: 'Los minutos jugados',
            desc: 'Alimentan los Minutos de cada jugador.',
          },
          {
            name: 'Los hechos atribuidos',
            desc: 'Se convierten en estadísticas de jugador; los demás, en estadísticas de equipo.',
          },
          {
            name: 'Los goles registrados',
            desc: 'Preparan la revisión de los goles, que retoma cadena y calificaciones.',
          },
        ],
      },
    ],
  },
};
