/**
 * Opponent scouting — sessions, the opponent file, and the report.
 *
 * The page's spine is provenance: every row says where it came from, an
 * imported team sheet is a proposal until someone commits it, and the AI
 * brief is labelled a proposal that is never applied on its own.
 */
import type { SubpageLocales } from './types';

export const scouting: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Scouting adverse | STRIVN',
      description:
        'Sessions d’observation, notes écrites ou vocales, clips tagués, effectif adverse importé d’une feuille de match et un rapport partagé aux destinataires que vous choisissez.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · ADVERSAIRE',
      title: 'Le prochain adversaire, préparé à plusieurs.',
      sub: 'L’analyste observe, le coach tranche. Les sessions s’accumulent sous chaque adversaire — notes, clips, tableaux — et le rapport se construit dessus. Ce que l’IA propose reste une proposition tant que vous ne l’avez pas validée.',
      bullets: [
        'Sessions datées sous chaque adversaire',
        'Notes écrites ou vocales, transcrites automatiquement',
        'Clips importés ou intégrés depuis YouTube, Veo, Hudl',
        'Effectif adverse extrait d’une feuille de match, à valider',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le live match', href: '/fr/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'DE L’OBSERVATION AU VESTIAIRE',
        title: 'L’analyste observe le samedi. Le coach tranche le mardi.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · OBSERVER',
            title: 'La session',
            desc: 'Une session datée sous l’adversaire. C’est la surface de capture : tout ce que vous notez au bord du terrain ou devant la vidéo s’y accroche.',
            items: [
              'Notes écrites, en texte riche',
              'Notes vocales, transcrites après coup',
              'Clips vidéo et photos',
              'Tableaux tactiques',
            ],
          },
          {
            num: '02 · ASSEMBLER',
            title: 'Le rapport',
            desc: 'Un document en sections et en blocs, pas un champ libre. Coach et analyste écrivent dans le même. Il reste en brouillon jusqu’à ce que vous le partagiez.',
            items: [
              'Sections ordonnées, blocs déplaçables',
              'L’effectif adverse et les clips à l’appui',
              'Statut brouillon tant qu’il n’est pas partagé',
            ],
          },
          {
            num: '03 · PARTAGER',
            title: 'Les destinataires',
            desc: 'Vous choisissez qui reçoit : des joueurs, des membres du staff, ou les deux. Le lien ouvre le rapport sans compte à créer en face.',
            items: [
              'Destinataires nommés, joueurs et staff',
              'Aucun compte à créer pour le lire',
              'Un joueur n’y accède jamais de lui-même',
            ],
          },
        ],
      },
      {
        kicker: 'CE QUI RENTRE DANS UNE SESSION',
        title: 'Vous notez, vous parlez, vous filmez, vous dessinez.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Note écrite',
            desc: 'Du texte riche, taggé avec le vocabulaire tactique de votre équipe — construction, pressing, ce que vous voulez.',
          },
          {
            icon: 'mic',
            title: 'Note vocale',
            desc: 'Vous parlez au bord du terrain, la transcription arrive après. Elle porte son état : prête, en cours, ou à relire quand l’audio était mauvais.',
          },
          {
            icon: 'video',
            title: 'Clip vidéo',
            desc: 'Un fichier importé, ou une URL. YouTube et Vimeo se jouent dans la page ; Veo, Hudl et les autres s’affichent en carte-lien.',
          },
          {
            icon: 'pen-tool',
            title: 'Tableau tactique',
            desc: 'La même surface de dessin que le reste du produit, rattachée à la session. Le schéma reste avec l’observation qui l’a motivé.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Une transcription ratée le dit',
          desc: 'Une note vocale enregistrée dans le vent porte l’état « à relire » plutôt qu’un texte approximatif présenté comme fidèle. Vous savez ce qu’il faut vérifier.',
        },
      },
      {
        kicker: 'LA FEUILLE DE MATCH',
        title: 'L’IA lit l’effectif. Elle ne l’écrit pas.',
        body: 'Vous photographiez la feuille de match, l’IA en extrait les joueurs, et s’arrête là. L’extraction produit une proposition ; les joueurs n’entrent dans l’effectif adverse qu’au moment où vous confirmez.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRACTION',
            title: 'Une proposition, pas un import',
            desc: 'Nom, numéro, poste. Chaque ligne arrive avec le degré de confiance de la lecture, parce qu’une feuille froissée ne se lit pas comme une feuille nette.',
          },
          {
            eyebrow: 'REVUE',
            title: 'Vous corrigez avant de valider',
            desc: 'Les lignes douteuses se corrigent dans la proposition. Rien n’est écrit tant que vous n’avez pas confirmé.',
          },
          {
            eyebrow: 'ORIGINE',
            title: 'La provenance reste visible',
            desc: 'Un joueur retenu garde sa source : observé par vous, ou extrait d’une feuille. Un effectif que personne n’a confirmé ne doit pas ressembler à un effectif confirmé.',
          },
        ],
      },
      {
        kicker: 'LE BRIEF TACTIQUE',
        title: 'Un brief à relire avant de l’envoyer.',
        body: 'À la demande, STRIVN synthétise un brief à partir de l’effectif confirmé, des notes récentes et des tableaux tactiques : forces, faiblesses, système probable, plan suggéré.',
        kind: 'compare',
        heads: ['Ce que le brief est', 'Ce qu’il n’est pas'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'STATUT',
            a: 'Une proposition, explicitement étiquetée comme générée. Elle attend votre lecture.',
            b: 'Une conclusion appliquée d’office. Rien ne part au groupe sans votre geste.',
          },
          {
            label: 'CE QU’ON EN FAIT',
            a: 'Vous l’éditez, vous en gardez ce qui tient, vous l’écartez si elle se trompe.',
            b: 'Une source de vérité. Le rapport reste le vôtre ; le brief n’est qu’une matière première.',
          },
          {
            label: 'SUR QUOI ELLE S’APPUIE',
            a: 'L’effectif confirmé, les notes de vos sessions, les titres de vos tableaux.',
            b: 'Une base de données externe d’adversaires. Elle ne sait que ce que vous avez observé.',
          },
        ],
      },
      {
        kicker: 'QUI VOIT QUOI',
        title: 'Le brouillon reste au staff.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'BROUILLON',
            title: 'Personne d’autre que vous',
            desc: 'Tant que le rapport n’est pas partagé, il vit côté staff. Les notes de travail n’en sortent jamais.',
          },
          {
            eyebrow: 'PARTAGÉ',
            title: 'À ceux que vous nommez',
            desc: 'Joueurs, membres du staff, ou les deux. Le lien s’ouvre sur n’importe quel téléphone, sans compte à créer.',
          },
          {
            eyebrow: 'JAMAIS',
            title: 'Pas de fouille libre',
            desc: 'Un joueur ne parcourt pas les rapports de scouting. Il reçoit celui qu’on lui a envoyé, et rien d’autre.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Le jour du match, la feuille adverse et les faits que vous comptez basculent dans le direct, et la revue des buts reprend ce qui a été encodé.',
            link: { label: 'Live match', href: '/fr/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Opponent scouting | STRIVN',
      description:
        'Observation sessions, written or voice notes, tagged clips, an opponent squad extracted from a team sheet, and a report shared with the recipients you choose.',
    },
    hero: {
      kicker: 'FEATURES · OPPONENT',
      title: 'The next opponent, prepared together.',
      sub: 'The analyst observes, the coach decides. Sessions stack up under each opponent — notes, clips, boards — and the report is built on them. What the AI proposes stays a proposal until you accept it.',
      bullets: [
        'Dated sessions under each opponent',
        'Written or voice notes, transcribed automatically',
        'Clips uploaded or embedded from YouTube, Veo, Hudl',
        'Opponent squad extracted from a team sheet, for you to confirm',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See live match', href: '/en/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'FROM THE TOUCHLINE TO THE CHANGING ROOM',
        title: 'The analyst watches on Saturday. The coach decides on Tuesday.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · OBSERVE',
            title: 'The session',
            desc: 'A dated session under the opponent. It is the capture surface: everything you note pitch-side or in front of the video hangs off it.',
            items: [
              'Written notes, in rich text',
              'Voice notes, transcribed afterwards',
              'Video clips and photos',
              'Tactical boards',
            ],
          },
          {
            num: '02 · ASSEMBLE',
            title: 'The report',
            desc: 'A document of ordered sections and blocks, not a free-text field. Coach and analyst write in the same one. It stays a draft until you share it.',
            items: [
              'Ordered sections, movable blocks',
              'The opponent squad and the clips behind it',
              'Draft status until it is shared',
            ],
          },
          {
            num: '03 · SHARE',
            title: 'The recipients',
            desc: 'You choose who receives it: players, staff members, or both. The link opens the report with no account to create at the other end.',
            items: [
              'Named recipients, players and staff',
              'No account to create to read it',
              'A player never reaches one on their own',
            ],
          },
        ],
      },
      {
        kicker: 'WHAT GOES INTO A SESSION',
        title: 'You write, you speak, you film, you draw.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Written note',
            desc: 'Rich text, tagged with your team’s own tactical vocabulary — build-up, pressing, whatever you use.',
          },
          {
            icon: 'mic',
            title: 'Voice note',
            desc: 'You talk at the side of the pitch, the transcription arrives after. It carries its state: ready, processing, or needs review when the audio was poor.',
          },
          {
            icon: 'video',
            title: 'Video clip',
            desc: 'An uploaded file, or a URL. YouTube and Vimeo play in the page; Veo, Hudl and the rest appear as a link card.',
          },
          {
            icon: 'pen-tool',
            title: 'Tactical board',
            desc: 'The same drawing surface as the rest of the product, attached to the session. The diagram stays with the observation that prompted it.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'A failed transcription says so',
          desc: 'A voice note recorded into the wind carries a “needs review” state rather than approximate text presented as faithful. You know what to check.',
        },
      },
      {
        kicker: 'THE TEAM SHEET',
        title: 'The AI reads the squad. It does not write it.',
        body: 'You photograph the team sheet, the AI extracts the players, and stops there. The extraction produces a proposal; players only enter the opponent squad the moment you confirm.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRACTION',
            title: 'A proposal, not an import',
            desc: 'Name, number, position. Each row arrives with how confident the read was, because a creased sheet does not read like a clean one.',
          },
          {
            eyebrow: 'REVIEW',
            title: 'You correct before you commit',
            desc: 'Doubtful rows are fixed inside the proposal. Nothing is written until you have confirmed.',
          },
          {
            eyebrow: 'PROVENANCE',
            title: 'Where a row came from stays visible',
            desc: 'A kept player keeps its source: observed by you, or extracted from a sheet. A squad nobody confirmed must not look like one that was.',
          },
        ],
      },
      {
        kicker: 'THE TACTICAL BRIEF',
        title: 'A briefing to read over before you send it.',
        body: 'On demand, STRIVN synthesises a brief from the confirmed squad, the recent notes and the tactical boards: strengths, weaknesses, likely shape, suggested plan.',
        kind: 'compare',
        heads: ['What the brief is', 'What it is not'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'STATUS',
            a: 'A proposal, explicitly labelled as generated. It waits for your read.',
            b: 'A conclusion applied on its own. Nothing reaches the squad without your move.',
          },
          {
            label: 'WHAT YOU DO WITH IT',
            a: 'You edit it, keep what holds, and dismiss it when it is wrong.',
            b: 'A source of truth. The report stays yours; the brief is only raw material.',
          },
          {
            label: 'WHAT IT DRAWS ON',
            a: 'The confirmed squad, your sessions’ notes, the titles of your boards.',
            b: 'An external database of opponents. It knows only what you observed.',
          },
        ],
      },
      {
        kicker: 'WHO SEES WHAT',
        title: 'The draft stays with the staff.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'DRAFT',
            title: 'Nobody but you',
            desc: 'Until the report is shared it lives on the staff side. Working notes never leave it.',
          },
          {
            eyebrow: 'SHARED',
            title: 'With the people you name',
            desc: 'Players, staff members, or both. The link opens on any phone, with no account to create.',
          },
          {
            eyebrow: 'NEVER',
            title: 'No browsing',
            desc: 'A player does not browse the scouting reports. They receive the one sent to them, and nothing else.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'On match day the opponent sheet and the facts you count tip into the live view, and the goal review picks up what was encoded there.',
            link: { label: 'Live match', href: '/en/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Scouting tegenstander | STRIVN',
      description:
        'Observatiesessies, geschreven of gesproken notities, getagde clips, een tegenstanderskern uit een wedstrijdblad en een rapport gedeeld met wie jij kiest.',
    },
    hero: {
      kicker: 'FUNCTIES · TEGENSTANDER',
      title: 'De volgende tegenstander, samen voorbereid.',
      sub: 'De analist observeert, de coach beslist. Sessies stapelen zich op onder elke tegenstander — notities, clips, borden — en het rapport wordt daarop gebouwd. Wat de AI voorstelt blijft een voorstel tot jij het aanvaardt.',
      bullets: [
        'Gedateerde sessies onder elke tegenstander',
        'Geschreven of gesproken notities, automatisch getranscribeerd',
        'Clips geüpload of ingesloten van YouTube, Veo, Hudl',
        'Kern van de tegenstander uit een wedstrijdblad, door jou te bevestigen',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Live wedstrijd bekijken', href: '/nl/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'VAN DE ZIJLIJN TOT DE KLEEDKAMER',
        title: 'De analist kijkt op zaterdag. De coach beslist op dinsdag.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · OBSERVEREN',
            title: 'De sessie',
            desc: 'Een gedateerde sessie onder de tegenstander. Dat is het opnamevlak: alles wat je langs het veld of voor de video noteert hangt eraan.',
            items: [
              'Geschreven notities, in rijke tekst',
              'Gesproken notities, achteraf getranscribeerd',
              'Videoclips en foto’s',
              'Tactische borden',
            ],
          },
          {
            num: '02 · SAMENSTELLEN',
            title: 'Het rapport',
            desc: 'Een document van geordende secties en blokken, geen vrij tekstveld. Coach en analist schrijven in hetzelfde. Het blijft een concept tot je het deelt.',
            items: [
              'Geordende secties, verplaatsbare blokken',
              'De kern van de tegenstander en de clips erachter',
              'Conceptstatus tot het gedeeld is',
            ],
          },
          {
            num: '03 · DELEN',
            title: 'De ontvangers',
            desc: 'Jij kiest wie het krijgt: spelers, stafleden, of beide. De link opent het rapport zonder account aan de andere kant.',
            items: [
              'Benoemde ontvangers, spelers en staf',
              'Geen account nodig om het te lezen',
              'Een speler komt er nooit uit zichzelf bij',
            ],
          },
        ],
      },
      {
        kicker: 'WAT IN EEN SESSIE GAAT',
        title: 'Je schrijft, je spreekt, je filmt, je tekent.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Geschreven notitie',
            desc: 'Rijke tekst, getagd met de tactische woordenschat van jouw ploeg — opbouw, pressing, wat je ook gebruikt.',
          },
          {
            icon: 'mic',
            title: 'Gesproken notitie',
            desc: 'Je praat langs het veld, de transcriptie komt daarna. Ze draagt haar status: klaar, bezig, of na te lezen als de audio slecht was.',
          },
          {
            icon: 'video',
            title: 'Videoclip',
            desc: 'Een geüpload bestand, of een URL. YouTube en Vimeo spelen in de pagina; Veo, Hudl en de rest verschijnen als linkkaart.',
          },
          {
            icon: 'pen-tool',
            title: 'Tactisch bord',
            desc: 'Hetzelfde tekenvlak als de rest van het product, gekoppeld aan de sessie. Het schema blijft bij de observatie die het opriep.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Een mislukte transcriptie zegt het zelf',
          desc: 'Een gesproken notitie opgenomen in de wind krijgt de status “na te lezen” in plaats van benaderende tekst die als getrouw wordt gepresenteerd. Je weet wat je moet nakijken.',
        },
      },
      {
        kicker: 'HET WEDSTRIJDBLAD',
        title: 'De AI leest de kern. Ze schrijft ze niet.',
        body: 'Je fotografeert het wedstrijdblad, de AI haalt er de spelers uit, en stopt daar. De extractie levert een voorstel; spelers komen pas in de kern van de tegenstander op het moment dat jij bevestigt.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRACTIE',
            title: 'Een voorstel, geen import',
            desc: 'Naam, nummer, positie. Elke regel komt met de zekerheid van de lezing, want een verkreukeld blad leest niet als een net blad.',
          },
          {
            eyebrow: 'NAZICHT',
            title: 'Je corrigeert voor je bevestigt',
            desc: 'Twijfelachtige regels verbeter je in het voorstel. Er wordt niets weggeschreven tot jij bevestigd hebt.',
          },
          {
            eyebrow: 'HERKOMST',
            title: 'Waar een regel vandaan komt blijft zichtbaar',
            desc: 'Een behouden speler houdt zijn bron: door jou geobserveerd, of uit een blad gehaald. Een kern die niemand bevestigd heeft mag er niet uitzien als een bevestigde.',
          },
        ],
      },
      {
        kicker: 'DE TACTISCHE BRIEFING',
        title: 'Een briefing om na te lezen voor je ze verstuurt.',
        body: 'Op aanvraag stelt STRIVN een briefing samen uit de bevestigde kern, de recente notities en de tactische borden: sterktes, zwaktes, waarschijnlijke opstelling, voorgesteld plan.',
        kind: 'compare',
        heads: ['Wat de briefing is', 'Wat ze niet is'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'STATUS',
            a: 'Een voorstel, uitdrukkelijk gelabeld als gegenereerd. Het wacht op jouw lezing.',
            b: 'Een conclusie die zichzelf toepast. Er gaat niets naar de groep zonder jouw handeling.',
          },
          {
            label: 'WAT JE ERMEE DOET',
            a: 'Je bewerkt ze, houdt wat standhoudt, en legt ze weg als ze ernaast zit.',
            b: 'Een bron van waarheid. Het rapport blijft van jou; de briefing is enkel grondstof.',
          },
          {
            label: 'WAAROP ZE STEUNT',
            a: 'De bevestigde kern, de notities van je sessies, de titels van je borden.',
            b: 'Een externe database van tegenstanders. Ze weet enkel wat jij geobserveerd hebt.',
          },
        ],
      },
      {
        kicker: 'WIE ZIET WAT',
        title: 'Het concept blijft bij de staf.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'CONCEPT',
            title: 'Niemand behalve jij',
            desc: 'Zolang het rapport niet gedeeld is leeft het aan de stafkant. Werknotities verlaten het nooit.',
          },
          {
            eyebrow: 'GEDEELD',
            title: 'Met wie jij benoemt',
            desc: 'Spelers, stafleden, of beide. De link opent op elke telefoon, zonder account aan te maken.',
          },
          {
            eyebrow: 'NOOIT',
            title: 'Geen vrij doorbladeren',
            desc: 'Een speler bladert niet door de scoutingrapporten. Hij krijgt datgene wat naar hem gestuurd is, en niets anders.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Op wedstrijddag kantelen het blad van de tegenstander en de feiten die je telt naar de live-weergave, en de doelpuntenanalyse neemt op wat daar is ingevoerd.',
            link: { label: 'Live wedstrijd', href: '/nl/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Gegner-Scouting | STRIVN',
      description:
        'Beobachtungssitzungen, geschriebene oder gesprochene Notizen, getaggte Clips, ein aus dem Spielbericht extrahierter Gegnerkader und ein Bericht, geteilt mit den Empfängern Ihrer Wahl.',
    },
    hero: {
      kicker: 'FUNKTIONEN · GEGNER',
      title: 'Der nächste Gegner, gemeinsam vorbereitet.',
      sub: 'Der Analyst beobachtet, der Trainer entscheidet. Sitzungen sammeln sich unter jedem Gegner — Notizen, Clips, Tafeln — und der Bericht baut darauf auf. Was die KI vorschlägt, bleibt ein Vorschlag, bis Sie ihn annehmen.',
      bullets: [
        'Datierte Sitzungen unter jedem Gegner',
        'Geschriebene oder gesprochene Notizen, automatisch transkribiert',
        'Clips hochgeladen oder eingebettet von YouTube, Veo, Hudl',
        'Gegnerkader aus einem Spielbericht extrahiert, von Ihnen zu bestätigen',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Live-Spiel ansehen', href: '/de/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'VOM SPIELFELDRAND IN DIE KABINE',
        title: 'Der Analyst beobachtet am Samstag. Der Coach entscheidet am Dienstag.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · BEOBACHTEN',
            title: 'Die Sitzung',
            desc: 'Eine datierte Sitzung unter dem Gegner. Sie ist die Erfassungsfläche: Alles, was Sie am Platz oder vor dem Video notieren, hängt daran.',
            items: [
              'Geschriebene Notizen, als Rich Text',
              'Gesprochene Notizen, nachträglich transkribiert',
              'Videoclips und Fotos',
              'Taktiktafeln',
            ],
          },
          {
            num: '02 · ZUSAMMENSTELLEN',
            title: 'Der Bericht',
            desc: 'Ein Dokument aus geordneten Abschnitten und Blöcken, kein freies Textfeld. Trainer und Analyst schreiben im selben. Er bleibt Entwurf, bis Sie ihn teilen.',
            items: [
              'Geordnete Abschnitte, verschiebbare Blöcke',
              'Der Gegnerkader und die Clips dahinter',
              'Entwurfsstatus, bis er geteilt ist',
            ],
          },
          {
            num: '03 · TEILEN',
            title: 'Die Empfänger',
            desc: 'Sie wählen, wer ihn bekommt: Spieler, Staff-Mitglieder oder beide. Der Link öffnet den Bericht ohne Konto auf der Gegenseite.',
            items: [
              'Benannte Empfänger, Spieler und Staff',
              'Kein Konto nötig, um ihn zu lesen',
              'Ein Spieler kommt von sich aus nie heran',
            ],
          },
        ],
      },
      {
        kicker: 'WAS IN EINE SITZUNG GEHT',
        title: 'Sie schreiben, Sie sprechen, Sie filmen, Sie zeichnen.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Geschriebene Notiz',
            desc: 'Rich Text, getaggt mit dem Taktikvokabular Ihrer Mannschaft — Spielaufbau, Pressing, was auch immer Sie verwenden.',
          },
          {
            icon: 'mic',
            title: 'Sprachnotiz',
            desc: 'Sie sprechen am Spielfeldrand, die Transkription kommt danach. Sie trägt ihren Status: fertig, in Arbeit, oder zu prüfen, wenn der Ton schlecht war.',
          },
          {
            icon: 'video',
            title: 'Videoclip',
            desc: 'Eine hochgeladene Datei oder eine URL. YouTube und Vimeo laufen in der Seite; Veo, Hudl und die übrigen erscheinen als Link-Karte.',
          },
          {
            icon: 'pen-tool',
            title: 'Taktiktafel',
            desc: 'Dieselbe Zeichenfläche wie im übrigen Produkt, an die Sitzung gehängt. Die Skizze bleibt bei der Beobachtung, die sie ausgelöst hat.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Eine misslungene Transkription sagt es',
          desc: 'Eine im Wind aufgenommene Sprachnotiz trägt den Status „zu prüfen“ statt ungefähren Text, der als getreu ausgegeben wird. Sie wissen, was zu kontrollieren ist.',
        },
      },
      {
        kicker: 'DER SPIELBERICHT',
        title: 'Die KI liest den Kader. Sie schreibt ihn nicht.',
        body: 'Sie fotografieren den Spielbericht, die KI extrahiert die Spieler, und hört dort auf. Die Extraktion erzeugt einen Vorschlag; Spieler kommen erst in dem Moment in den Gegnerkader, in dem Sie bestätigen.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRAKTION',
            title: 'Ein Vorschlag, kein Import',
            desc: 'Name, Nummer, Position. Jede Zeile kommt mit der Sicherheit der Lesung, denn ein zerknitterter Bogen liest sich nicht wie ein sauberer.',
          },
          {
            eyebrow: 'PRÜFUNG',
            title: 'Sie korrigieren vor dem Bestätigen',
            desc: 'Zweifelhafte Zeilen werden im Vorschlag korrigiert. Nichts wird geschrieben, bevor Sie bestätigt haben.',
          },
          {
            eyebrow: 'HERKUNFT',
            title: 'Woher eine Zeile stammt, bleibt sichtbar',
            desc: 'Ein übernommener Spieler behält seine Quelle: von Ihnen beobachtet oder aus einem Bogen extrahiert. Ein Kader, den niemand bestätigt hat, darf nicht aussehen wie ein bestätigter.',
          },
        ],
      },
      {
        kicker: 'DAS TAKTISCHE BRIEFING',
        title: 'Ein Briefing, das Sie vor dem Senden noch einmal lesen.',
        body: 'Auf Anforderung stellt STRIVN ein Briefing aus dem bestätigten Kader, den jüngsten Notizen und den Taktiktafeln zusammen: Stärken, Schwächen, wahrscheinliche Formation, vorgeschlagener Plan.',
        kind: 'compare',
        heads: ['Was das Briefing ist', 'Was es nicht ist'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'STATUS',
            a: 'Ein Vorschlag, ausdrücklich als generiert gekennzeichnet. Er wartet auf Ihre Lektüre.',
            b: 'Eine Schlussfolgerung, die sich selbst anwendet. Ohne Ihr Zutun geht nichts an die Mannschaft.',
          },
          {
            label: 'WAS SIE DAMIT TUN',
            a: 'Sie bearbeiten es, behalten, was trägt, und verwerfen es, wenn es danebenliegt.',
            b: 'Eine Quelle der Wahrheit. Der Bericht bleibt Ihrer; das Briefing ist nur Rohstoff.',
          },
          {
            label: 'WORAUF ES BERUHT',
            a: 'Der bestätigte Kader, die Notizen Ihrer Sitzungen, die Titel Ihrer Tafeln.',
            b: 'Eine externe Gegnerdatenbank. Es weiß nur, was Sie beobachtet haben.',
          },
        ],
      },
      {
        kicker: 'WER SIEHT WAS',
        title: 'Der Entwurf bleibt beim Staff.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'ENTWURF',
            title: 'Niemand außer Ihnen',
            desc: 'Solange der Bericht nicht geteilt ist, lebt er auf der Staff-Seite. Arbeitsnotizen verlassen ihn nie.',
          },
          {
            eyebrow: 'GETEILT',
            title: 'Mit denen, die Sie benennen',
            desc: 'Spieler, Staff-Mitglieder oder beide. Der Link öffnet auf jedem Telefon, ohne Konto anzulegen.',
          },
          {
            eyebrow: 'NIE',
            title: 'Kein freies Stöbern',
            desc: 'Ein Spieler blättert nicht durch die Scouting-Berichte. Er erhält den, der ihm geschickt wurde, und sonst nichts.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Am Spieltag kippen der Gegnerbogen und die Aktionen, die Sie zählen, in die Live-Ansicht, und die Torauswertung greift auf, was dort erfasst wurde.',
            link: { label: 'Live-Spiel', href: '/de/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Scouting do adversário | STRIVN',
      description:
        'Sessões de observação, notas escritas ou de voz, clips etiquetados, plantel adversário extraído de uma ficha de jogo e um relatório partilhado com quem escolher.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · ADVERSÁRIO',
      title: 'O próximo adversário, preparado a várias mãos.',
      sub: 'O analista observa, o treinador decide. As sessões acumulam-se sob cada adversário — notas, clips, quadros — e o relatório constrói-se sobre elas. O que a IA propõe continua uma proposta até o aceitar.',
      bullets: [
        'Sessões datadas sob cada adversário',
        'Notas escritas ou de voz, transcritas automaticamente',
        'Clips carregados ou incorporados do YouTube, Veo, Hudl',
        'Plantel adversário extraído de uma ficha de jogo, para confirmar',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o jogo em direto', href: '/pt/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'DA LINHA LATERAL AO BALNEÁRIO',
        title: 'O analista observa no sábado. O treinador decide na terça.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · OBSERVAR',
            title: 'A sessão',
            desc: 'Uma sessão datada sob o adversário. É a superfície de captura: tudo o que anota à beira do campo ou diante do vídeo fica ligado a ela.',
            items: [
              'Notas escritas, em texto rico',
              'Notas de voz, transcritas depois',
              'Clips de vídeo e fotografias',
              'Quadros táticos',
            ],
          },
          {
            num: '02 · MONTAR',
            title: 'O relatório',
            desc: 'Um documento de secções e blocos ordenados, não um campo de texto livre. Treinador e analista escrevem no mesmo. Fica em rascunho até o partilhar.',
            items: [
              'Secções ordenadas, blocos móveis',
              'O plantel adversário e os clips que o sustentam',
              'Estado rascunho enquanto não for partilhado',
            ],
          },
          {
            num: '03 · PARTILHAR',
            title: 'Os destinatários',
            desc: 'Escolhe quem o recebe: jogadores, membros do staff, ou ambos. A ligação abre o relatório sem conta a criar do outro lado.',
            items: [
              'Destinatários nomeados, jogadores e staff',
              'Nenhuma conta a criar para o ler',
              'Um jogador nunca lá chega por si',
            ],
          },
        ],
      },
      {
        kicker: 'O QUE ENTRA NUMA SESSÃO',
        title: 'Você escreve, fala, filma, desenha.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Nota escrita',
            desc: 'Texto rico, etiquetado com o vocabulário tático da sua equipa — construção, pressing, o que usar.',
          },
          {
            icon: 'mic',
            title: 'Nota de voz',
            desc: 'Fala à beira do campo, a transcrição chega depois. Traz o seu estado: pronta, em curso, ou a rever quando o áudio estava mau.',
          },
          {
            icon: 'video',
            title: 'Clip de vídeo',
            desc: 'Um ficheiro carregado, ou um URL. YouTube e Vimeo reproduzem-se na página; Veo, Hudl e os restantes aparecem como cartão-ligação.',
          },
          {
            icon: 'pen-tool',
            title: 'Quadro tático',
            desc: 'A mesma superfície de desenho do resto do produto, ligada à sessão. O esquema fica com a observação que o motivou.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Uma transcrição falhada di-lo',
          desc: 'Uma nota de voz gravada ao vento leva o estado «a rever» em vez de um texto aproximado apresentado como fiel. Sabe o que verificar.',
        },
      },
      {
        kicker: 'A FICHA DE JOGO',
        title: 'A IA lê o plantel. Não o escreve.',
        body: 'Fotografa a ficha de jogo, a IA extrai os jogadores, e para aí. A extração produz uma proposta; os jogadores só entram no plantel adversário no momento em que confirma.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRAÇÃO',
            title: 'Uma proposta, não uma importação',
            desc: 'Nome, número, posição. Cada linha chega com o grau de confiança da leitura, porque uma folha amarrotada não se lê como uma folha limpa.',
          },
          {
            eyebrow: 'REVISÃO',
            title: 'Corrige antes de confirmar',
            desc: 'As linhas duvidosas corrigem-se dentro da proposta. Nada é escrito enquanto não confirmar.',
          },
          {
            eyebrow: 'ORIGEM',
            title: 'De onde veio a linha fica visível',
            desc: 'Um jogador mantido guarda a sua origem: observado por si, ou extraído de uma ficha. Um plantel que ninguém confirmou não pode parecer confirmado.',
          },
        ],
      },
      {
        kicker: 'O BRIEFING TÁTICO',
        title: 'Um briefing para reler antes de enviar.',
        body: 'A pedido, a STRIVN sintetiza um briefing a partir do plantel confirmado, das notas recentes e dos quadros táticos: forças, fraquezas, sistema provável, plano sugerido.',
        kind: 'compare',
        heads: ['O que o briefing é', 'O que não é'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'ESTADO',
            a: 'Uma proposta, explicitamente marcada como gerada. Espera pela sua leitura.',
            b: 'Uma conclusão aplicada sozinha. Nada chega ao grupo sem um gesto seu.',
          },
          {
            label: 'O QUE SE FAZ COM ELE',
            a: 'Edita-o, guarda o que se aguenta, e descarta-o quando erra.',
            b: 'Uma fonte de verdade. O relatório continua seu; o briefing é apenas matéria-prima.',
          },
          {
            label: 'EM QUE SE APOIA',
            a: 'O plantel confirmado, as notas das suas sessões, os títulos dos seus quadros.',
            b: 'Uma base de dados externa de adversários. Só sabe o que você observou.',
          },
        ],
      },
      {
        kicker: 'QUEM VÊ O QUÊ',
        title: 'O rascunho fica no staff.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'RASCUNHO',
            title: 'Mais ninguém além de si',
            desc: 'Enquanto o relatório não for partilhado, vive do lado do staff. As notas de trabalho nunca saem dele.',
          },
          {
            eyebrow: 'PARTILHADO',
            title: 'Com quem nomear',
            desc: 'Jogadores, membros do staff, ou ambos. A ligação abre em qualquer telemóvel, sem conta a criar.',
          },
          {
            eyebrow: 'NUNCA',
            title: 'Sem folhear livremente',
            desc: 'Um jogador não folheia os relatórios de scouting. Recebe aquele que lhe foi enviado, e mais nada.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'No dia do jogo, a ficha do adversário e os factos que conta passam para o direto, e a revisão dos golos retoma o que lá foi registado.',
            link: { label: 'Jogo em direto', href: '/pt/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Scouting del rival | STRIVN',
      description:
        'Sesiones de observación, notas escritas o de voz, clips etiquetados, plantilla rival extraída de un acta y un informe compartido con quien tú elijas.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · RIVAL',
      title: 'El próximo rival, preparado entre varios.',
      sub: 'El analista observa, el entrenador decide. Las sesiones se acumulan bajo cada rival — notas, clips, pizarras — y el informe se construye sobre ellas. Lo que la IA propone sigue siendo una propuesta hasta que lo aceptas.',
      bullets: [
        'Sesiones fechadas bajo cada rival',
        'Notas escritas o de voz, transcritas automáticamente',
        'Clips subidos o incrustados de YouTube, Veo, Hudl',
        'Plantilla rival extraída de un acta, para que la confirmes',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el partido en directo', href: '/es/features/live-match/' },
      },
      visual: 'scouting-brief',
    },
    sections: [
      {
        kicker: 'DE LA BANDA AL VESTUARIO',
        title: 'El analista observa el sábado. El entrenador decide el martes.',
        kind: 'rail',
        activeIndex: 0,
        steps: [
          {
            num: '01 · OBSERVAR',
            title: 'La sesión',
            desc: 'Una sesión fechada bajo el rival. Es la superficie de captura: todo lo que anotas a pie de campo o delante del vídeo cuelga de ella.',
            items: [
              'Notas escritas, en texto enriquecido',
              'Notas de voz, transcritas después',
              'Clips de vídeo y fotos',
              'Pizarras tácticas',
            ],
          },
          {
            num: '02 · MONTAR',
            title: 'El informe',
            desc: 'Un documento de secciones y bloques ordenados, no un campo de texto libre. Entrenador y analista escriben en el mismo. Queda en borrador hasta que lo compartes.',
            items: [
              'Secciones ordenadas, bloques movibles',
              'La plantilla rival y los clips que la respaldan',
              'Estado borrador mientras no se comparta',
            ],
          },
          {
            num: '03 · COMPARTIR',
            title: 'Los destinatarios',
            desc: 'Eliges quién lo recibe: jugadores, miembros del staff, o ambos. El enlace abre el informe sin cuenta que crear enfrente.',
            items: [
              'Destinatarios nombrados, jugadores y staff',
              'Ninguna cuenta que crear para leerlo',
              'Un jugador nunca llega a él por su cuenta',
            ],
          },
        ],
      },
      {
        kicker: 'LO QUE ENTRA EN UNA SESIÓN',
        title: 'Escribes, hablas, grabas, dibujas.',
        kind: 'cards',
        per: 2,
        cards: [
          {
            icon: 'pen-line',
            title: 'Nota escrita',
            desc: 'Texto enriquecido, etiquetado con el vocabulario táctico de tu equipo — salida de balón, pressing, lo que uses.',
          },
          {
            icon: 'mic',
            title: 'Nota de voz',
            desc: 'Hablas a pie de campo, la transcripción llega después. Lleva su estado: lista, en curso, o por revisar cuando el audio era malo.',
          },
          {
            icon: 'video',
            title: 'Clip de vídeo',
            desc: 'Un archivo subido, o una URL. YouTube y Vimeo se reproducen en la página; Veo, Hudl y los demás aparecen como tarjeta-enlace.',
          },
          {
            icon: 'pen-tool',
            title: 'Pizarra táctica',
            desc: 'La misma superficie de dibujo que el resto del producto, ligada a la sesión. El esquema se queda con la observación que lo motivó.',
          },
        ],
        note: {
          icon: 'circle-alert',
          label: 'Una transcripción fallida lo dice',
          desc: 'Una nota de voz grabada con viento lleva el estado «por revisar» en vez de un texto aproximado presentado como fiel. Sabes qué comprobar.',
        },
      },
      {
        kicker: 'EL ACTA DEL PARTIDO',
        title: 'La IA lee la plantilla. No la escribe.',
        body: 'Fotografías el acta, la IA extrae los jugadores, y se para ahí. La extracción produce una propuesta; los jugadores solo entran en la plantilla rival en el momento en que confirmas.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EXTRACCIÓN',
            title: 'Una propuesta, no una importación',
            desc: 'Nombre, número, posición. Cada línea llega con el grado de confianza de la lectura, porque un acta arrugada no se lee como una limpia.',
          },
          {
            eyebrow: 'REVISIÓN',
            title: 'Corriges antes de confirmar',
            desc: 'Las líneas dudosas se corrigen dentro de la propuesta. No se escribe nada mientras no hayas confirmado.',
          },
          {
            eyebrow: 'ORIGEN',
            title: 'De dónde viene la línea sigue visible',
            desc: 'Un jugador conservado guarda su origen: observado por ti, o extraído de un acta. Una plantilla que nadie ha confirmado no debe parecerse a una confirmada.',
          },
        ],
      },
      {
        kicker: 'EL BRIEFING TÁCTICO',
        title: 'Un briefing para releer antes de enviarlo.',
        body: 'A petición, STRIVN sintetiza un briefing a partir de la plantilla confirmada, las notas recientes y las pizarras tácticas: fortalezas, debilidades, sistema probable, plan sugerido.',
        kind: 'compare',
        heads: ['Lo que el briefing es', 'Lo que no es'],
        tones: ['blue', 'plain'],
        rows: [
          {
            label: 'ESTADO',
            a: 'Una propuesta, marcada explícitamente como generada. Espera a que la leas.',
            b: 'Una conclusión que se aplica sola. Nada llega al grupo sin un gesto tuyo.',
          },
          {
            label: 'QUÉ HACES CON ÉL',
            a: 'Lo editas, te quedas con lo que se sostiene, y lo descartas cuando se equivoca.',
            b: 'Una fuente de verdad. El informe sigue siendo tuyo; el briefing es solo materia prima.',
          },
          {
            label: 'EN QUÉ SE APOYA',
            a: 'La plantilla confirmada, las notas de tus sesiones, los títulos de tus pizarras.',
            b: 'Una base de datos externa de rivales. Solo sabe lo que tú has observado.',
          },
        ],
      },
      {
        kicker: 'QUIÉN VE QUÉ',
        title: 'El borrador se queda en el staff.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'BORRADOR',
            title: 'Nadie más que tú',
            desc: 'Mientras el informe no se comparta, vive del lado del staff. Las notas de trabajo nunca salen de él.',
          },
          {
            eyebrow: 'COMPARTIDO',
            title: 'Con quien nombres',
            desc: 'Jugadores, miembros del staff, o ambos. El enlace abre en cualquier teléfono, sin cuenta que crear.',
          },
          {
            eyebrow: 'NUNCA',
            title: 'Sin hojear libremente',
            desc: 'Un jugador no hojea los informes de scouting. Recibe el que se le ha enviado, y nada más.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'El día del partido, el acta del rival y los hechos que cuentas pasan al directo, y la revisión de los goles retoma lo que allí se ha registrado.',
            link: { label: 'Partido en directo', href: '/es/features/live-match/' },
          },
        ],
      },
    ],
  },
};
