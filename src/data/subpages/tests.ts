/**
 * Tests & evaluations — defining a measure, running a campaign, and placing a
 * result. The page's argument is that a raw number is not information until it
 * carries a unit, a zone and a reference group.
 */
import type { SubpageLocales } from './types';

export const tests: SubpageLocales = {
  /* ────────────────────────────── FR ────────────────────────────── */
  fr: {
    meta: {
      title: 'Tests & évaluations | STRIVN',
      description:
        'Créez vos mesures, lancez une campagne, saisissez sur le terrain. STRIVN place chaque résultat dans ses zones et sur le percentile du poste.',
    },
    hero: {
      kicker: 'FONCTIONNALITÉS · MESURES',
      title: 'Le chiffre tombe. Reste à savoir ce qu’il vaut.',
      sub: 'Créez vos mesures, lancez une campagne de tests, saisissez sur le terrain. STRIVN place chaque résultat dans ses zones et sur le percentile du poste — pour que la valeur devienne une décision.',
      bullets: [
        'Mesures sur mesure : nom, unité, sens de la progression',
        'Zones colorées, vos bornes',
        'Saisie terrain, un joueur après l’autre',
        'Percentile par poste et évolution dans le temps',
      ],
      ctas: {
        primary: 'Commencer gratuitement',
        secondary: { label: 'Voir le check-in', href: '/fr/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'LE VOCABULAIRE DE VOS TESTS',
        title: 'Sur un 10 m, le meilleur est le plus petit.',
        body: 'Un test n’est pas un champ libre. Vous définissez la mesure une fois — son nom, son unité, le sens de la progression, ses seuils — et elle reste comparable d’une campagne à l’autre.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UNITÉ',
            title: 'Le sens du meilleur',
            desc: 'Sur un 10 m, le meilleur est le plus petit. Sur un CMJ, le plus grand. STRIVN le sait mesure par mesure, donc un classement n’est jamais à l’envers.',
          },
          {
            eyebrow: 'ZONES',
            title: 'Vos seuils, pas les nôtres',
            desc: 'Quatre zones, vos bornes, vos couleurs. Un résultat tombe dans une zone et en hérite partout : liste, fiche joueur, rapport.',
          },
          {
            eyebrow: 'RÉUTILISATION',
            title: 'Définie une fois, mesurée souvent',
            desc: 'La même mesure sert en juillet, en janvier et en mai. C’est ce qui rend la courbe lisible et la comparaison honnête.',
          },
        ],
      },
      {
        kicker: 'SITUER UNE VALEUR',
        title: '« 17,4 km/h », c’est bien ou pas ?',
        body: 'Seul, ce chiffre ne dit rien. Rapporté au poste, à l’historique du joueur et au reste du groupe, il devient une décision.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'PAR POSTE',
            title: 'Un ailier n’est pas un central',
            desc: 'Le repère se construit par poste. Une valeur moyenne pour un latéral peut être un signal fort chez un gardien.',
          },
          {
            eyebrow: 'DANS LE TEMPS',
            title: 'Le delta avant le rang',
            desc: 'Chaque résultat se compare à la campagne précédente du même joueur. Progresser de 0,4 km/h compte, quel que soit le rang.',
          },
          {
            eyebrow: 'DANS LE GROUPE',
            title: 'Le percentile de l’effectif',
            desc: 'La bande situe le joueur parmi les siens. Elle change de couleur au moment où le résultat sort de la zone attendue.',
          },
        ],
        note: {
          label: 'La campagne vit dans le calendrier',
          desc: 'Une campagne de tests est un événement comme un autre : elle a une date, une liste de convoqués, un lieu. Les absents restent visibles comme non testés, jamais comme moyens.',
        },
      },
    ],
  },

  /* ────────────────────────────── EN ────────────────────────────── */
  en: {
    meta: {
      title: 'Tests & evaluations | STRIVN',
      description:
        'Define your measures, run a campaign, record on the pitch. STRIVN places every result in its zones and on the percentile for the position.',
    },
    hero: {
      kicker: 'FEATURES · MEASURES',
      title: 'The number lands. What it is worth is the other question.',
      sub: 'Define your measures, run a testing campaign, record results on the pitch. STRIVN places each one in its zones and on the percentile for the position — so the value becomes a decision.',
      bullets: [
        'Measures you define: name, unit, direction of progress',
        'Colour-coded zones, your own thresholds',
        'Pitch-side entry, one player after another',
        'Percentile by position and change over time',
      ],
      ctas: {
        primary: 'Start for free',
        secondary: { label: 'See check-in', href: '/en/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'THE VOCABULARY OF YOUR TESTS',
        title: 'On a 10 m sprint, the best score is the smallest.',
        body: 'A test is not a free-text field. You define the measure once — its name, its unit, which direction counts as progress, its thresholds — and it stays comparable from one campaign to the next.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UNIT',
            title: 'Which way is better',
            desc: 'On a 10 m sprint, lower is better. On a CMJ, higher is. STRIVN knows this measure by measure, so a ranking is never upside down.',
          },
          {
            eyebrow: 'ZONES',
            title: 'Your thresholds, not ours',
            desc: 'Four zones, your bounds, your colours. A result lands in a zone and carries it everywhere: list, player file, report.',
          },
          {
            eyebrow: 'REUSE',
            title: 'Defined once, measured often',
            desc: 'The same measure serves in July, January and May. That is what makes the curve readable and the comparison honest.',
          },
        ],
      },
      {
        kicker: 'PLACING A VALUE',
        title: 'Is “17.4 km/h” good or not?',
        body: 'On its own, that number says nothing. Against the position, the player’s own history and the rest of the squad, it becomes a decision.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'BY POSITION',
            title: 'A winger is not a centre-back',
            desc: 'The reference is built per position. An average value for a full-back can be a strong signal in a goalkeeper.',
          },
          {
            eyebrow: 'OVER TIME',
            title: 'The delta before the rank',
            desc: 'Every result is compared to the same player’s previous campaign. Gaining 0.4 km/h counts, whatever the ranking says.',
          },
          {
            eyebrow: 'IN THE SQUAD',
            title: 'The squad percentile',
            desc: 'The band places the player among their own. It changes colour the moment the result leaves the expected zone.',
          },
        ],
        note: {
          label: 'The campaign lives in the calendar',
          desc: 'A testing campaign is an event like any other: a date, a call-up list, a venue. Absentees stay visible as untested, never as average.',
        },
      },
    ],
  },

  /* ────────────────────────────── NL ────────────────────────────── */
  nl: {
    meta: {
      title: 'Tests & evaluaties | STRIVN',
      description:
        'Definieer je metingen, start een campagne, noteer op het veld. STRIVN plaatst elk resultaat in zijn zones en op het percentiel van de positie.',
    },
    hero: {
      kicker: 'FUNCTIES · METINGEN',
      title: 'Het cijfer valt. Wat het waard is, is de vraag.',
      sub: 'Definieer je metingen, start een testcampagne, noteer op het veld. STRIVN plaatst elk resultaat in zijn zones en op het percentiel van de positie — zodat de waarde een beslissing wordt.',
      bullets: [
        'Eigen metingen: naam, eenheid, richting van vooruitgang',
        'Gekleurde zones, jouw grenzen',
        'Invoer op het veld, speler na speler',
        'Percentiel per positie en evolutie in de tijd',
      ],
      ctas: {
        primary: 'Gratis beginnen',
        secondary: { label: 'Check-in bekijken', href: '/nl/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'DE WOORDENSCHAT VAN JE TESTS',
        title: 'Op een 10 m is de beste de kleinste.',
        body: 'Een test is geen vrij veld. Je definieert de meting één keer — naam, eenheid, welke richting vooruitgang is, de drempels — en ze blijft vergelijkbaar van campagne tot campagne.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EENHEID',
            title: 'Welke kant is beter',
            desc: 'Op een 10 m is de kleinste tijd de beste. Op een CMJ de grootste hoogte. STRIVN weet dat per meting, dus een ranking staat nooit op zijn kop.',
          },
          {
            eyebrow: 'ZONES',
            title: 'Jouw drempels, niet de onze',
            desc: 'Vier zones, jouw grenzen, jouw kleuren. Een resultaat valt in een zone en neemt die overal mee: lijst, spelersfiche, rapport.',
          },
          {
            eyebrow: 'HERGEBRUIK',
            title: 'Eén keer bepaald, vaak gemeten',
            desc: 'Dezelfde meting dient in juli, in januari en in mei. Dat maakt de curve leesbaar en de vergelijking eerlijk.',
          },
        ],
      },
      {
        kicker: 'EEN WAARDE PLAATSEN',
        title: 'Is “17,4 km/u” goed of niet?',
        body: 'Op zichzelf zegt dat cijfer niets. Tegenover de positie, de eigen geschiedenis van de speler en de rest van de groep wordt het een beslissing.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'PER POSITIE',
            title: 'Een flankspeler is geen centrale verdediger',
            desc: 'Het ijkpunt wordt per positie opgebouwd. Een gemiddelde waarde voor een back kan bij een keeper een sterk signaal zijn.',
          },
          {
            eyebrow: 'IN DE TIJD',
            title: 'De delta vóór de rang',
            desc: 'Elk resultaat wordt vergeleken met de vorige campagne van dezelfde speler. 0,4 km/u winnen telt, wat de rangschikking ook zegt.',
          },
          {
            eyebrow: 'IN DE GROEP',
            title: 'Het percentiel van de kern',
            desc: 'De band plaatst de speler tussen de zijnen. Ze verandert van kleur zodra het resultaat de verwachte zone verlaat.',
          },
        ],
        note: {
          label: 'De campagne leeft in de kalender',
          desc: 'Een testcampagne is een gebeurtenis zoals een andere: een datum, een lijst opgeroepenen, een locatie. Afwezigen blijven zichtbaar als niet getest, nooit als gemiddeld.',
        },
      },
    ],
  },

  /* ────────────────────────────── DE ────────────────────────────── */
  de: {
    meta: {
      title: 'Tests & Evaluationen | STRIVN',
      description:
        'Definieren Sie Ihre Messgrößen, starten Sie eine Kampagne, erfassen Sie auf dem Platz. STRIVN ordnet jedes Ergebnis seinen Zonen und dem Perzentil der Position zu.',
    },
    hero: {
      kicker: 'FUNKTIONEN · MESSGRÖSSEN',
      title: 'Die Zahl steht. Was sie wert ist, ist die andere Frage.',
      sub: 'Definieren Sie Ihre Messgrößen, starten Sie eine Testkampagne, erfassen Sie auf dem Platz. STRIVN ordnet jedes Ergebnis seinen Zonen und dem Perzentil der Position zu — damit aus dem Wert eine Entscheidung wird.',
      bullets: [
        'Eigene Messgrößen: Name, Einheit, Richtung des Fortschritts',
        'Farbige Zonen, Ihre Schwellen',
        'Erfassung am Platz, Spieler für Spieler',
        'Perzentil je Position und Entwicklung über die Zeit',
      ],
      ctas: {
        primary: 'Kostenlos starten',
        secondary: { label: 'Check-in ansehen', href: '/de/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'DAS VOKABULAR IHRER TESTS',
        title: 'Bei 10 m ist der beste Wert der kleinste.',
        body: 'Ein Test ist kein freies Textfeld. Sie definieren die Messgröße einmal — Name, Einheit, welche Richtung Fortschritt bedeutet, ihre Schwellen — und sie bleibt von Kampagne zu Kampagne vergleichbar.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'EINHEIT',
            title: 'Wohin „besser“ zeigt',
            desc: 'Beim 10-m-Sprint ist der kleinere Wert der bessere, beim CMJ der größere. STRIVN weiß das je Messgröße — eine Rangliste steht nie auf dem Kopf.',
          },
          {
            eyebrow: 'ZONEN',
            title: 'Ihre Schwellen, nicht unsere',
            desc: 'Vier Zonen, Ihre Grenzen, Ihre Farben. Ein Ergebnis fällt in eine Zone und trägt sie überall mit: Liste, Spielerakte, Bericht.',
          },
          {
            eyebrow: 'WIEDERVERWENDUNG',
            title: 'Einmal definiert, oft gemessen',
            desc: 'Dieselbe Messgröße dient im Juli, im Januar und im Mai. Das macht die Kurve lesbar und den Vergleich ehrlich.',
          },
        ],
      },
      {
        kicker: 'EINEN WERT EINORDNEN',
        title: 'Sind „17,4 km/h“ gut oder nicht?',
        body: 'Für sich genommen sagt diese Zahl nichts. Gegen die Position, die eigene Historie des Spielers und den Rest der Mannschaft wird sie zur Entscheidung.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'JE POSITION',
            title: 'Ein Flügelspieler ist kein Innenverteidiger',
            desc: 'Der Bezugspunkt entsteht je Position. Ein durchschnittlicher Wert beim Außenverteidiger kann beim Torhüter ein starkes Signal sein.',
          },
          {
            eyebrow: 'ÜBER DIE ZEIT',
            title: 'Das Delta vor dem Rang',
            desc: 'Jedes Ergebnis wird mit der vorherigen Kampagne desselben Spielers verglichen. 0,4 km/h mehr zählen, unabhängig vom Rang.',
          },
          {
            eyebrow: 'IN DER MANNSCHAFT',
            title: 'Das Perzentil des Kaders',
            desc: 'Das Band ordnet den Spieler unter seinesgleichen ein. Es wechselt die Farbe in dem Moment, in dem das Ergebnis die erwartete Zone verlässt.',
          },
        ],
        note: {
          label: 'Die Kampagne lebt im Kalender',
          desc: 'Eine Testkampagne ist ein Termin wie jeder andere: ein Datum, eine Aufgebotsliste, ein Ort. Abwesende bleiben sichtbar als nicht getestet, nie als durchschnittlich.',
        },
      },
    ],
  },

  /* ────────────────────────────── PT ────────────────────────────── */
  pt: {
    meta: {
      title: 'Testes e avaliações | STRIVN',
      description:
        'Defina as suas medidas, lance uma campanha, registe no campo. A STRIVN coloca cada resultado nas suas zonas e no percentil da posição.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · MEDIDAS',
      title: 'O número sai. Falta saber o que vale.',
      sub: 'Defina as suas medidas, lance uma campanha de testes, registe no campo. A STRIVN coloca cada resultado nas suas zonas e no percentil da posição — para que o valor se torne uma decisão.',
      bullets: [
        'Medidas à sua medida: nome, unidade, sentido do progresso',
        'Zonas coloridas, os seus limiares',
        'Registo no campo, jogador a jogador',
        'Percentil por posição e evolução ao longo do tempo',
      ],
      ctas: {
        primary: 'Começar gratuitamente',
        secondary: { label: 'Ver o check-in', href: '/pt/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'O VOCABULÁRIO DOS SEUS TESTES',
        title: 'Num 10 m, o melhor é o mais pequeno.',
        body: 'Um teste não é um campo livre. Define a medida uma vez — o nome, a unidade, o sentido do progresso, os limiares — e ela mantém-se comparável de campanha para campanha.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UNIDADE',
            title: 'Para que lado é melhor',
            desc: 'Num 10 m, o melhor é o mais baixo. Num CMJ, o mais alto. A STRIVN sabe-o medida a medida, por isso um ranking nunca fica ao contrário.',
          },
          {
            eyebrow: 'ZONAS',
            title: 'Os seus limiares, não os nossos',
            desc: 'Quatro zonas, os seus limites, as suas cores. Um resultado cai numa zona e leva-a para todo o lado: lista, ficha do jogador, relatório.',
          },
          {
            eyebrow: 'REUTILIZAÇÃO',
            title: 'Definida uma vez, medida muitas',
            desc: 'A mesma medida serve em julho, em janeiro e em maio. É isso que torna a curva legível e a comparação honesta.',
          },
        ],
      },
      {
        kicker: 'SITUAR UM VALOR',
        title: '«17,4 km/h» é bom ou não?',
        body: 'Sozinho, esse número não diz nada. Face à posição, ao histórico do próprio jogador e ao resto do grupo, torna-se uma decisão.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'POR POSIÇÃO',
            title: 'Um extremo não é um central',
            desc: 'A referência constrói-se por posição. Um valor médio para um lateral pode ser um sinal forte num guarda-redes.',
          },
          {
            eyebrow: 'AO LONGO DO TEMPO',
            title: 'O delta antes do lugar',
            desc: 'Cada resultado compara-se com a campanha anterior do mesmo jogador. Ganhar 0,4 km/h conta, diga o ranking o que disser.',
          },
          {
            eyebrow: 'NO GRUPO',
            title: 'O percentil do plantel',
            desc: 'A banda situa o jogador entre os seus. Muda de cor no momento em que o resultado sai da zona esperada.',
          },
        ],
        note: {
          label: 'A campanha vive no calendário',
          desc: 'Uma campanha de testes é um evento como outro qualquer: tem data, lista de convocados e local. Os ausentes ficam visíveis como não testados, nunca como médios.',
        },
      },
    ],
  },

  /* ────────────────────────────── ES ────────────────────────────── */
  es: {
    meta: {
      title: 'Tests y evaluaciones | STRIVN',
      description:
        'Define tus medidas, lanza una campaña, registra en el campo. STRIVN coloca cada resultado en sus zonas y en el percentil del puesto.',
    },
    hero: {
      kicker: 'FUNCIONALIDADES · MEDIDAS',
      title: 'El número cae. Queda saber lo que vale.',
      sub: 'Define tus medidas, lanza una campaña de tests, registra en el campo. STRIVN coloca cada resultado en sus zonas y en el percentil del puesto — para que el valor se convierta en una decisión.',
      bullets: [
        'Medidas a tu medida: nombre, unidad, sentido del progreso',
        'Zonas de color, tus umbrales',
        'Registro en el campo, jugador a jugador',
        'Percentil por puesto y evolución en el tiempo',
      ],
      ctas: {
        primary: 'Empezar gratis',
        secondary: { label: 'Ver el check-in', href: '/es/features/check-in/' },
      },
      visual: 'test-campaign',
    },
    sections: [
      {
        kicker: 'EL VOCABULARIO DE TUS TESTS',
        title: 'En un 10 m, el mejor es el más pequeño.',
        body: 'Un test no es un campo libre. Defines la medida una vez — su nombre, su unidad, el sentido del progreso, sus umbrales — y sigue siendo comparable de una campaña a otra.',
        visual: 'measure-editor',
        visualAside: true,
        kind: 'columns',
        cols: [
          {
            eyebrow: 'UNIDAD',
            title: 'Hacia dónde está lo mejor',
            desc: 'En un 10 m, lo mejor es lo más bajo. En un CMJ, lo más alto. STRIVN lo sabe medida a medida, así que una clasificación nunca sale del revés.',
          },
          {
            eyebrow: 'ZONAS',
            title: 'Tus umbrales, no los nuestros',
            desc: 'Cuatro zonas, tus límites, tus colores. Un resultado cae en una zona y se la lleva a todas partes: lista, ficha del jugador, informe.',
          },
          {
            eyebrow: 'REUTILIZACIÓN',
            title: 'Definida una vez, medida muchas',
            desc: 'La misma medida sirve en julio, en enero y en mayo. Eso es lo que hace la curva legible y la comparación honesta.',
          },
        ],
      },
      {
        kicker: 'SITUAR UN VALOR',
        title: '«17,4 km/h», ¿es bueno o no?',
        body: 'Solo, ese número no dice nada. Frente al puesto, al historial del propio jugador y al resto del grupo, se convierte en una decisión.',
        visual: 'percentile-scale',
        kind: 'columns',
        cols: [
          {
            eyebrow: 'POR PUESTO',
            title: 'Un extremo no es un central',
            desc: 'La referencia se construye por puesto. Un valor medio para un lateral puede ser una señal fuerte en un portero.',
          },
          {
            eyebrow: 'EN EL TIEMPO',
            title: 'El delta antes que el puesto',
            desc: 'Cada resultado se compara con la campaña anterior del mismo jugador. Ganar 0,4 km/h cuenta, diga lo que diga la clasificación.',
          },
          {
            eyebrow: 'EN EL GRUPO',
            title: 'El percentil de la plantilla',
            desc: 'La banda sitúa al jugador entre los suyos. Cambia de color en el momento en que el resultado sale de la zona esperada.',
          },
        ],
        note: {
          label: 'La campaña vive en el calendario',
          desc: 'Una campaña de tests es un evento como otro cualquiera: tiene fecha, lista de convocados y lugar. Los ausentes se ven como no testados, nunca como medios.',
        },
      },
    ],
  },
};
