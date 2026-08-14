/**
 * Live session — the runner used pitch-side. The page is a before / during /
 * after rail, because that is genuinely how the screen is used, and it closes
 * on the two things the pitch imposes: no network, and fat fingers.
 */
import type { SubpageLocales } from './types';

export const liveSession: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Live séance | STRIVN',
      description:
        'Composez le déroulé, déroulez-le en plein écran au bord du terrain — chrono, présences, équipes, score — puis clôturez par le bilan. Le runner fonctionne sans réseau.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · TERRAIN',
      title: 'La séance se pilote au pouce.',
      sub: 'Vous composez le déroulé à l’avance, vous le déroulez en plein écran au bord du terrain — chrono, présences, équipes, score — puis vous clôturez par le bilan. Le runner fonctionne même sans réseau.',
      bullets: [
        'Blocs numérotés : intitulé, durée, RPE cible, format',
        'Présences pointées en un tap, puis le chrono part',
        'Équipes réparties automatiquement sur un jeu réduit',
        'Hors ligne au bord du terrain, synchronisé à la reconnexion',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le live match', href: '/fr/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'AVANT · PENDANT · APRÈS',
        title: 'Un seul écran, du déroulé au bilan.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · AVANT',
            title: 'Composer le déroulé',
            desc: 'Onglet Déroulé de la page Prochaine séance. Vous rattachez vos exercices et vos schémas tactiques, puis vous empilez les blocs.',
            items: [
              'Intitulé, durée, intensité cible (RPE) et format',
              'Blocs numérotés, réordonnés avec les flèches',
              'Charge externe estimée en distance et en sprints',
              'Chaque bloc annonce sa propre part',
            ],
          },
          {
            num: '02 · PENDANT',
            title: 'Dérouler en plein écran',
            desc: 'Démarrer la séance bascule le runner en plein écran, pensé pour être utilisé au pouce.',
            items: [
              'Présences en un tap, puis Lancer le chrono',
              'Le bloc en cours en grand : temps écoulé, progression',
              'Terminer le bloc, avec double confirmation',
              'Créer les équipes répartit les présents ; le score se tape',
            ],
          },
          {
            num: '03 · APRÈS',
            title: 'Clôturer par le bilan',
            desc: 'Terminer la séance ferme le direct et synchronise tout. Le récapitulatif prévu vs réalisé sort aussitôt, bloc par bloc, scores compris.',
            items: [
              'RPE ressenti et note générale de la séance',
              'Durée réelle, face à la durée prévue',
              'Évaluation joueur par joueur',
            ],
          },
        ],
      },
      {
        kicker: 'CE QUE LE TERRAIN IMPOSE',
        title: 'Le réseau du stade n’est pas votre problème.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'HORS LIGNE',
            title: 'Tout est enregistré sur place',
            desc: 'Le runner ne dépend pas de la connexion. Présences, chronos, scores et équipes s’écrivent en local. Terminer la séance synchronise l’ensemble dès que le réseau revient.',
          },
          {
            eyebrow: 'AU POUCE',
            title: 'La double confirmation n’est pas une lourdeur',
            desc: 'Terminer le bloc et le coup d’envoi demandent deux appuis. Au bord du terrain, avec une tablette dans une main, on tape vite — et parfois à côté.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Sur un événement de type match, le même direct passe en configuration match : score, faits attribués, chaîne de joueurs et observations dessinées.',
            link: { label: 'Live match', href: '/fr/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Live session | STRIVN',
      description:
        'Build the running order, run it full-screen pitch-side — timer, attendance, teams, score — then close with the debrief. The runner works without a network.',
    },
    hero: {
      kicker: 'FEATURES · PITCH-SIDE',
      title: 'The session runs under your thumb.',
      sub: 'You build the running order in advance, you run it full-screen at the side of the pitch — timer, attendance, teams, score — then you close with the debrief. The runner works even with no network.',
      bullets: [
        'Numbered blocks: name, duration, target RPE, format',
        'Attendance in a tap, then the clock starts',
        'Teams split automatically for a small-sided game',
        'Offline pitch-side, synced when you reconnect',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See live match', href: '/en/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'BEFORE · DURING · AFTER',
        title: 'One screen, from running order to debrief.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · BEFORE',
            title: 'Build the running order',
            desc: 'The Running order tab of the Next session page. You attach your drills and your tactical boards, then you stack the blocks.',
            items: [
              'Name, duration, target intensity (RPE) and format',
              'Numbered blocks, reordered with the arrows',
              'Estimated external load in distance and sprints',
              'Each block declares its own share',
            ],
          },
          {
            num: '02 · DURING',
            title: 'Run it full-screen',
            desc: 'Starting the session switches the runner to full screen, designed to be used with a thumb.',
            items: [
              'Attendance in a tap, then Start the clock',
              'The running block large: elapsed time, progress',
              'End the block, with a double confirmation',
              'Create teams splits those present; the score is tapped in',
            ],
          },
          {
            num: '03 · AFTER',
            title: 'Close with the debrief',
            desc: 'Ending the session closes the live view and syncs everything. The planned vs actual summary comes out immediately, block by block, scores included.',
            items: [
              'Perceived RPE and an overall rating for the session',
              'Actual duration, against the planned duration',
              'A rating player by player',
            ],
          },
        ],
      },
      {
        kicker: 'WHAT THE PITCH IMPOSES',
        title: 'The stadium’s network is not your problem.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OFFLINE',
            title: 'Everything is recorded on the spot',
            desc: 'The runner does not depend on the connection. Attendance, timers, scores and teams are written locally. Ending the session syncs the lot as soon as the network comes back.',
          },
          {
            eyebrow: 'THUMB-FIRST',
            title: 'The double confirmation is not friction',
            desc: 'Ending a block and kicking off both ask for two taps. At the side of a pitch, with a tablet in one hand, you tap fast — and sometimes wide.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'On a match event, the same live view switches to match configuration: score, attributed facts, the chain of players and drawn observations.',
            link: { label: 'Live match', href: '/en/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Live training | STRIVN',
      description:
        'Stel het verloop samen, draai het schermvullend langs het veld — chrono, aanwezigheden, ploegen, score — en sluit af met de nabespreking. De runner werkt zonder netwerk.',
    },
    hero: {
      kicker: 'FUNCTIES · LANGS HET VELD',
      title: 'De training stuur je met je duim.',
      sub: 'Je stelt het verloop vooraf samen, je draait het schermvullend langs het veld — chrono, aanwezigheden, ploegen, score — en dan sluit je af met de nabespreking. De runner werkt zelfs zonder netwerk.',
      bullets: [
        'Genummerde blokken: titel, duur, doel-RPE, vorm',
        'Aanwezigheden in één tik, dan start de klok',
        'Ploegen automatisch verdeeld voor een partijvorm',
        'Offline langs het veld, gesynchroniseerd bij herverbinding',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Live wedstrijd bekijken', href: '/nl/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'VOOR · TIJDENS · NA',
        title: 'Eén scherm, van verloop tot nabespreking.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · VOOR',
            title: 'Het verloop samenstellen',
            desc: 'Tabblad Verloop op de pagina Volgende training. Je koppelt je oefeningen en je tactische schema’s, en dan stapel je de blokken.',
            items: [
              'Titel, duur, doelintensiteit (RPE) en vorm',
              'Genummerde blokken, herschikt met de pijlen',
              'Geschatte externe belasting in afstand en sprints',
              'Elk blok kondigt zijn eigen aandeel aan',
            ],
          },
          {
            num: '02 · TIJDENS',
            title: 'Schermvullend afwerken',
            desc: 'De training starten zet de runner schermvullend, ontworpen om met de duim bediend te worden.',
            items: [
              'Aanwezigheden in één tik, dan Chrono starten',
              'Het lopende blok groot: verstreken tijd, voortgang',
              'Blok beëindigen, met dubbele bevestiging',
              'Ploegen maken verdeelt de aanwezigen; de score tik je in',
            ],
          },
          {
            num: '03 · NA',
            title: 'Afsluiten met de nabespreking',
            desc: 'De training beëindigen sluit de live-weergave en synchroniseert alles. Het overzicht gepland vs gerealiseerd komt meteen, blok per blok, scores inbegrepen.',
            items: [
              'Ervaren RPE en een algemene score voor de training',
              'Werkelijke duur, tegenover de geplande duur',
              'Beoordeling speler per speler',
            ],
          },
        ],
      },
      {
        kicker: 'WAT HET VELD OPLEGT',
        title: 'Het netwerk van het stadion is jouw probleem niet.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OFFLINE',
            title: 'Alles wordt ter plaatse opgeslagen',
            desc: 'De runner hangt niet van de verbinding af. Aanwezigheden, chrono’s, scores en ploegen worden lokaal weggeschreven. De training beëindigen synchroniseert het geheel zodra het netwerk terug is.',
          },
          {
            eyebrow: 'MET DE DUIM',
            title: 'De dubbele bevestiging is geen omslachtigheid',
            desc: 'Blok beëindigen en aftrappen vragen twee tikken. Langs het veld, met een tablet in één hand, tik je snel — en soms ernaast.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Bij een wedstrijdactiviteit schakelt dezelfde live-weergave naar wedstrijdconfiguratie: score, toegewezen feiten, spelersketen en getekende observaties.',
            link: { label: 'Live wedstrijd', href: '/nl/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Live-Einheit | STRIVN',
      description:
        'Den Ablauf zusammenstellen, ihn am Platz im Vollbild abspulen — Uhr, Anwesenheiten, Teams, Ergebnis — und mit der Nachbesprechung schließen. Der Runner läuft ohne Netz.',
    },
    hero: {
      kicker: 'FUNKTIONEN · AM PLATZ',
      title: 'Die Einheit steuert man mit dem Daumen.',
      sub: 'Sie stellen den Ablauf im Voraus zusammen, spulen ihn am Spielfeldrand im Vollbild ab — Uhr, Anwesenheiten, Teams, Ergebnis — und schließen mit der Nachbesprechung. Der Runner läuft auch ohne Netz.',
      bullets: [
        'Nummerierte Blöcke: Titel, Dauer, Ziel-RPE, Format',
        'Anwesenheiten mit einem Tippen, dann läuft die Uhr',
        'Teams automatisch für eine Spielform aufgeteilt',
        'Offline am Platz, synchronisiert bei erneuter Verbindung',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Live-Spiel ansehen', href: '/de/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'DAVOR · WÄHREND · DANACH',
        title: 'Ein Bildschirm, vom Ablauf bis zur Nachbesprechung.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · DAVOR',
            title: 'Den Ablauf zusammenstellen',
            desc: 'Reiter Ablauf auf der Seite Nächste Einheit. Sie hängen Ihre Übungen und Ihre Taktiktafeln an und stapeln dann die Blöcke.',
            items: [
              'Titel, Dauer, Zielintensität (RPE) und Format',
              'Nummerierte Blöcke, mit den Pfeilen umsortiert',
              'Geschätzte externe Belastung in Distanz und Sprints',
              'Jeder Block nennt seinen eigenen Anteil',
            ],
          },
          {
            num: '02 · WÄHREND',
            title: 'Im Vollbild abspulen',
            desc: 'Die Einheit zu starten schaltet den Runner ins Vollbild, gedacht für die Bedienung mit dem Daumen.',
            items: [
              'Anwesenheiten mit einem Tippen, dann Uhr starten',
              'Der laufende Block groß: verstrichene Zeit, Fortschritt',
              'Block beenden, mit doppelter Bestätigung',
              'Teams bilden verteilt die Anwesenden; das Ergebnis wird getippt',
            ],
          },
          {
            num: '03 · DANACH',
            title: 'Mit der Nachbesprechung schließen',
            desc: 'Die Einheit zu beenden schließt die Live-Ansicht und synchronisiert alles. Die Übersicht geplant vs. realisiert erscheint sofort, Block für Block, Ergebnisse inklusive.',
            items: [
              'Empfundener RPE und eine Gesamtnote für die Einheit',
              'Tatsächliche Dauer gegenüber der geplanten Dauer',
              'Bewertung Spieler für Spieler',
            ],
          },
        ],
      },
      {
        kicker: 'WAS DER PLATZ VORGIBT',
        title: 'Das Netz des Stadions ist nicht Ihr Problem.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OFFLINE',
            title: 'Alles wird vor Ort gespeichert',
            desc: 'Der Runner hängt nicht an der Verbindung. Anwesenheiten, Uhren, Ergebnisse und Teams werden lokal geschrieben. Die Einheit zu beenden synchronisiert alles, sobald das Netz zurück ist.',
          },
          {
            eyebrow: 'MIT DEM DAUMEN',
            title: 'Die doppelte Bestätigung ist keine Umständlichkeit',
            desc: 'Block beenden und Anpfiff verlangen zwei Tipper. Am Spielfeldrand, mit einem Tablet in einer Hand, tippt man schnell — und manchmal daneben.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Bei einem Spieltermin wechselt dieselbe Live-Ansicht in die Spielkonfiguration: Ergebnis, zugeordnete Aktionen, Spielerkette und gezeichnete Beobachtungen.',
            link: { label: 'Live-Spiel', href: '/de/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Treino em direto | STRIVN',
      description:
        'Componha o desenrolar, execute-o em ecrã cheio à beira do campo — cronómetro, presenças, equipas, resultado — e feche com o balanço. O runner funciona sem rede.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · NO CAMPO',
      title: 'O treino conduz-se com o polegar.',
      sub: 'Compõe o desenrolar antecipadamente, executa-o em ecrã cheio à beira do campo — cronómetro, presenças, equipas, resultado — e depois fecha com o balanço. O runner funciona mesmo sem rede.',
      bullets: [
        'Blocos numerados: título, duração, RPE alvo, formato',
        'Presenças marcadas num toque, depois o cronómetro arranca',
        'Equipas distribuídas automaticamente num jogo reduzido',
        'Offline à beira do campo, sincronizado ao reconectar',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o jogo em direto', href: '/pt/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'ANTES · DURANTE · DEPOIS',
        title: 'Um só ecrã, do desenrolar ao balanço.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · ANTES',
            title: 'Compor o desenrolar',
            desc: 'Separador Desenrolar da página Próximo treino. Associa os seus exercícios e os seus esquemas táticos, e depois empilha os blocos.',
            items: [
              'Título, duração, intensidade alvo (RPE) e formato',
              'Blocos numerados, reordenados com as setas',
              'Carga externa estimada em distância e em sprints',
              'Cada bloco anuncia a sua própria parte',
            ],
          },
          {
            num: '02 · DURANTE',
            title: 'Executar em ecrã cheio',
            desc: 'Iniciar o treino passa o runner para ecrã cheio, pensado para ser usado com o polegar.',
            items: [
              'Presenças num toque, depois Iniciar o cronómetro',
              'O bloco em curso em grande: tempo decorrido, progresso',
              'Terminar o bloco, com dupla confirmação',
              'Criar as equipas distribui os presentes; o resultado escreve-se',
            ],
          },
          {
            num: '03 · DEPOIS',
            title: 'Fechar com o balanço',
            desc: 'Terminar o treino fecha o direto e sincroniza tudo. O resumo previsto vs realizado sai logo, bloco a bloco, resultados incluídos.',
            items: [
              'RPE sentido e nota geral do treino',
              'Duração real, face à duração prevista',
              'Avaliação jogador a jogador',
            ],
          },
        ],
      },
      {
        kicker: 'O QUE O CAMPO IMPÕE',
        title: 'A rede do estádio não é problema seu.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'OFFLINE',
            title: 'Tudo é registado no local',
            desc: 'O runner não depende da ligação. Presenças, cronómetros, resultados e equipas escrevem-se localmente. Terminar o treino sincroniza o conjunto assim que a rede voltar.',
          },
          {
            eyebrow: 'COM O POLEGAR',
            title: 'A dupla confirmação não é um peso',
            desc: 'Terminar o bloco e o pontapé de saída pedem dois toques. À beira do campo, com um tablet numa mão, toca-se depressa — e às vezes ao lado.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'Num evento do tipo jogo, o mesmo direto passa a configuração de jogo: resultado, factos atribuídos, cadeia de jogadores e observações desenhadas.',
            link: { label: 'Jogo em direto', href: '/pt/features/live-match/' },
          },
        ],
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Sesión en directo | STRIVN',
      description:
        'Compón el desarrollo, ejecútalo a pantalla completa a pie de campo — cronómetro, asistencias, equipos, marcador — y cierra con el balance. El runner funciona sin red.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · A PIE DE CAMPO',
      title: 'La sesión se conduce con el pulgar.',
      sub: 'Compones el desarrollo por adelantado, lo ejecutas a pantalla completa a pie de campo — cronómetro, asistencias, equipos, marcador — y luego cierras con el balance. El runner funciona incluso sin red.',
      bullets: [
        'Bloques numerados: título, duración, RPE objetivo, formato',
        'Asistencias en un toque, y el cronómetro arranca',
        'Equipos repartidos automáticamente en un juego reducido',
        'Sin conexión a pie de campo, sincronizado al reconectar',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el partido en directo', href: '/es/features/live-match/' },
      },
      visual: 'live-runner',
    },
    sections: [
      {
        kicker: 'ANTES · DURANTE · DESPUÉS',
        title: 'Una sola pantalla, del desarrollo al balance.',
        kind: 'rail',
        activeIndex: 1,
        steps: [
          {
            num: '01 · ANTES',
            title: 'Componer el desarrollo',
            desc: 'Pestaña Desarrollo de la página Próxima sesión. Asocias tus ejercicios y tus esquemas tácticos, y luego apilas los bloques.',
            items: [
              'Título, duración, intensidad objetivo (RPE) y formato',
              'Bloques numerados, reordenados con las flechas',
              'Carga externa estimada en distancia y en sprints',
              'Cada bloque anuncia su propia parte',
            ],
          },
          {
            num: '02 · DURANTE',
            title: 'Ejecutar a pantalla completa',
            desc: 'Iniciar la sesión pasa el runner a pantalla completa, pensado para usarse con el pulgar.',
            items: [
              'Asistencias en un toque, y luego Lanzar el cronómetro',
              'El bloque en curso en grande: tiempo transcurrido, progreso',
              'Terminar el bloque, con doble confirmación',
              'Crear los equipos reparte a los presentes; el marcador se teclea',
            ],
          },
          {
            num: '03 · DESPUÉS',
            title: 'Cerrar con el balance',
            desc: 'Terminar la sesión cierra el directo y sincroniza todo. El resumen previsto vs realizado sale enseguida, bloque a bloque, marcadores incluidos.',
            items: [
              'RPE percibido y nota general de la sesión',
              'Duración real, frente a la duración prevista',
              'Evaluación jugador por jugador',
            ],
          },
        ],
      },
      {
        kicker: 'LO QUE IMPONE EL CAMPO',
        title: 'La red del estadio no es tu problema.',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'SIN CONEXIÓN',
            title: 'Todo se guarda en el sitio',
            desc: 'El runner no depende de la conexión. Asistencias, cronómetros, marcadores y equipos se escriben en local. Terminar la sesión sincroniza el conjunto en cuanto vuelve la red.',
          },
          {
            eyebrow: 'CON EL PULGAR',
            title: 'La doble confirmación no es una molestia',
            desc: 'Terminar el bloque y el saque inicial piden dos pulsaciones. A pie de campo, con una tableta en una mano, se pulsa rápido — y a veces al lado.',
          },
        ],
        callouts: [
          {
            icon: 'radio',
            tone: 'blue',
            text: 'En un evento de tipo partido, el mismo directo pasa a configuración de partido: marcador, hechos atribuidos, cadena de jugadores y observaciones dibujadas.',
            link: { label: 'Partido en directo', href: '/es/features/live-match/' },
          },
        ],
      },
    ],
  },
};
