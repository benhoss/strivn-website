import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** German of the French source text: formal Sie, as the site's DE locale. */
export function dePage(b: LandingBits): SwitchPage {
  const migration = mail('Wechsel von Teamworks zu STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN oder Teamworks',
    meta: {
      title: 'Alternative zu Teamworks: STRIVN liest Ihre Spielerdaten',
      description: `STRIVN oder Teamworks? Ein Assistent für Belastung, GPS und Medizin, ein Connector für Claude und ChatGPT, öffentliche Preise. ${b.trialPerk}.`,
      ogTitle: 'Sie arbeiten mit Teamworks? Wechseln Sie zu STRIVN, der KI für Ihre Spieler.',
      ogDescription:
        'Der STRIVN-Assistent liest Belastung, Wellness, GPS, Medizin und Spiele und bereitet die Aktionen vor, die Ihr Staff freigibt.',
      twitterTitle: 'STRIVN oder Teamworks: die KI für Ihre Spieler.',
      twitterDescription: `Ein Assistent für alle Ihre Daten, ein Connector für Claude und ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, der Kontrollturm des Performance-Staffs',
    },
    hero: {
      eyebrow: 'STRIVN oder Teamworks',
      titleLead: 'Sie arbeiten mit Teamworks?',
      title: 'Wechseln Sie zu STRIVN, der KI für Ihre Spieler.',
      lede: 'Ask Teamworks beantwortet Fragen zu Ihren Dokumenten. Der STRIVN-Assistent liest Belastung, Wellness, GPS, Medizin und Spiele jedes Spielers und bereitet dann die Aktionen vor, die Ihr Staff freigibt.',
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Mit Teamworks vergleichen',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Warum STRIVN',
      title: 'Lassen Sie die KI an all Ihren Daten arbeiten.',
      lede: 'Ein Profi-Staff wählt sein Werkzeug danach, was es aus den Daten des Klubs macht. Acht Gründe für STRIVN.',
      items: [
        {
          title: 'Fragen Sie all Ihre Daten mit einer Frage ab',
          body: 'Der Assistent liest Belastung, Wellness, GPS, Medizin und Spiele zusammen, mit mehr als 200 Werkzeugen. Jede Antwort nennt ihre Quellen. Eine gespeicherte Frage läuft mit den Zahlen des Tages erneut.',
        },
        {
          title: 'Geben Sie jede Aktion frei, die die KI vorbereitet',
          body: 'Eine Einheit für den Plan, eine Verletzung zum Aktualisieren, ein 1RM zum Erfassen: Der Assistent bereitet die Aktion in einer Karte vor. Sie gilt mit Ihrer Freigabe, und Sie haben 60 Sekunden, um sie zurückzunehmen.',
        },
        {
          title: 'Verbinden Sie Claude oder ChatGPT mit Ihren Daten',
          body: 'Der Eigentümer des Teams aktiviert den Connector, und Ihre KI liest Kader, Belastung, GPS und Spiele mit Ihren Rechten. Sie schreibt nie an Spieler, Eltern oder die Öffentlichkeit. Den Zugang widerrufen Sie in den Einstellungen.',
        },
        {
          title: 'Bereiten Sie den Gegner gemeinsam vor',
          body: 'Der Analyst notiert, filmt und zeichnet unter jedem Gegner. Fotografieren Sie den Spielbericht: Die KI extrahiert die Spieler, die erst mit Ihrer Bestätigung in den Gegnerkader kommen. Danach entsteht das Briefing, vom Scouting-Dossier bis zur Ansprache.',
        },
        {
          title: 'Steuern Sie die Belastung bis zur Übung',
          body: 'Der RPE liefert die interne Belastung, der GPS-Export die externe, Seite an Seite. ACWR, Monotonie und Strain berechnen sich selbst, die Prognose projiziert die Woche, und jede Übung behält ihre GPS-Messung.',
        },
        {
          title: 'Filtern Sie die Aufgebote über die Medizin',
          body: 'Die medizinische Übersicht bündelt aktive Verletzungen, Spieler in der Reha und die Verfügbarkeit jedes Einzelnen. Sie filtert die Aufgebote selbst, und der Spieler folgt seinem Return-to-Play-Programm in seiner App.',
        },
        {
          title: 'Diktieren Sie das Spiel-Debriefing',
          body: 'Sprechen Sie nach dem Spiel: STRIVN bringt Ihr Debriefing in Form. Sie lesen es gegen und wenden es dann an.',
        },
        {
          title: 'Sprechen Sie mit dem, der STRIVN baut',
          body: 'Der Button „Mit Benoit sprechen“ öffnet eine E-Mail an den, der STRIVN baut. Beschreiben Sie Ihren Staff und Ihr aktuelles Werkzeug, wir antworten Ihnen.',
        },
      ],
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN oder Teamworks',
      title: 'Vergleichen Sie STRIVN und Teamworks, Zeile für Zeile.',
      lede: 'Sechs Punkte, zu denen Teamworks seine Antwort veröffentlicht, neben dem, was STRIVN heute liefert.',
      columns: {
        criterion: 'Kriterium',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'KI-Assistent',
          teamworks: 'Ask Teamworks beantwortet Fragen zu einem PDF-Dokument: Regelwerk, Leitfaden, Handbuch.',
          strivn:
            'Der Assistent liest Belastung, Wellness, GPS, Medizin und Spiele, nennt seine Quellen und bereitet Aktionen vor, die der Staff freigibt.',
        },
        {
          criterion: 'Ihre Daten in Ihrer KI',
          teamworks: 'Eine API, um Teamworks AMS in Ihre technische Umgebung einzubinden.',
          strivn: 'Ein Connector für Claude und ChatGPT, vom Staff aktiviert und widerrufbar, mit Ihren Rechten.',
        },
        {
          criterion: 'Für wen',
          teamworks: 'Mehr als 6.500 Elite-Sportorganisationen.',
          strivn: 'Der Staff eines Klubs, vom Regional- bis zum Profibereich: 141 Teams, davon 14 Profiteams.',
        },
        {
          criterion: 'Preis',
          teamworks: 'Auf Angebot, nach einer Demo.',
          strivn: `Auf der Seite angegeben: ${b.publicPrices}.`,
        },
        {
          criterion: 'Start',
          teamworks: 'Demo-Anfrage bei ihrem Vertriebsteam.',
          strivn: `Der Staff erstellt das Konto selbst, ohne Freigabe des Klubs. ${b.trialSentence}`,
        },
        {
          criterion: 'Opteamal-Klubs',
          teamworks: 'Wechsel auf die Teamworks-Plattform angekündigt, seit der Übernahme am 18. Dezember 2025.',
          strivn: 'Historie per Datei importiert, während Ihr Vertrag läuft.',
        },
      ],
      note: 'Quellen: teamworks.com (Seiten AMS und Performance), Teamworks-Blog vom 5. August 2026 zu Ask Teamworks, Pressemitteilung vom 18. Dezember 2025, Stand 15. Oktober 2026. STRIVN-Zahlen Stand 18. September 2026.',
    },
    switch: {
      id: 'changer',
      eyebrow: 'Wechseln',
      title: 'Starten Sie STRIVN, während Ihr Vertrag läuft.',
      lede: `Die Kündigungsfrist steht in Ihrem Teamworks- oder Opteamal-Vertrag. Starten Sie STRIVN parallel und testen Sie es ${b.trialDays} Tage lang an Ihren eigenen Einheiten.`,
      steps: [
        {
          n: '01',
          title: 'Erstellen Sie den Bereich',
          body: `Name, E-Mail, Telefon, Passwort, Sprache und Land genügen. Das Konto startet ${b.trialDays} Tage lang auf Semi-Pro, ohne Karte.`,
        },
        {
          n: '02',
          title: 'Importieren Sie die Historie',
          body: 'Laden Sie Ihre CSV- oder XLSX-Dateien zu Belastung, RPE und Wellness hoch, dann Ihre GPS-Exporte. Die Spalten werden erkannt und dann für das Team gespeichert.',
        },
        {
          n: '03',
          title: 'Stellen Sie Ihre erste Frage',
          body: 'Fragen Sie den Assistenten nach der Belastung der Woche oder nach den Spielern, die Sie beobachten sollten. Er antwortet auf Basis Ihrer importierten Historie, mit Quellen.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Ihre Fragen, bevor Sie Teamworks verlassen.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Bleiben meine Daten meine Daten?',
          a: 'Ja. Sie lesen sie in STRIVN oder aus Ihrer eigenen KI, über den Connector, den Sie aktivieren und widerrufen. Sie exportieren Anwesenheiten als CSV, den Kalender als ICS, taktische Tafeln und Präsentationen als PDF. Wenn Sie zu Free zurückwechseln, bleibt Ihre gesamte Historie einsehbar.',
        },
        {
          q: 'Kann die KI ohne meine Zustimmung handeln?',
          a: 'In STRIVN wartet jede Aktion, die der Assistent vorbereitet, auf Ihre Freigabe. Über den Connector handeln Claude oder ChatGPT mit Ihren Rechten, wie ein Mitglied des Staffs, schreiben aber nie an Spieler, Eltern oder die Öffentlichkeit und ändern keine Aufgebote.',
        },
        {
          q: 'Kann ich meine Historie aus Teamworks oder Opteamal übernehmen?',
          a: `Ja, per Datei. Exportieren Sie Belastung, RPE und Wellness als CSV oder XLSX und laden Sie sie in STRIVN hoch. GPS-Exporte lassen sich ${b.gpsTiers} importieren, also während der ${b.trialDays}-tägigen Testphase. Für die erste Zuordnung schreiben Sie uns an hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ich bin noch unter Vertrag. Wann kann ich wechseln?',
          a: `Kündigungsfrist und Verlängerungsdatum stehen in Ihrem Vertrag. Starten Sie STRIVN parallel, ohne Freigabe des Klubs und ohne Karte, mit ${b.trialDays} Tagen Semi-Pro. Sie kündigen zu dem Datum, das Ihnen passt.`,
        },
        {
          q: 'Ich war bei Opteamal. Was ändert die Übernahme durch Teamworks?',
          a: 'Teamworks hat Opteamal am 18. Dezember 2025 übernommen und kündigt an, seine Klubs auf die eigene Plattform zu holen. Wenn Sie das Werkzeug wechseln, wechseln Sie es nur einmal: Importieren Sie Ihre Historie in STRIVN, während Ihr Vertrag läuft.',
        },
        {
          q: 'Was kostet STRIVN?',
          a: `Die Preise sind öffentlich: ${b.publicPrices}. ${b.trialSentence} Pro, auf Angebot, legt die Volumen für KI und WhatsApp im Vertrag fest.`,
        },
        {
          q: 'Liest STRIVN die Daten meines GPS?',
          a: `Ja, über den Export der Einheit. Laden Sie die CSV- oder XLSX-Datei von Catapult, STATSports oder einem anderen System hoch, oder die SPT- / GameTraka-Trace. STRIVN erkennt die Spalten beim ersten Import und berechnet Distanz und Geschwindigkeitszonen auf der Rohtrace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Funktioniert STRIVN auf Niederländisch?',
          a: 'Ja. STRIVN gibt es auf Französisch, Niederländisch, Englisch, Deutsch, Portugiesisch und Spanisch, für den Staff wie für die Spieler. Jedes Staff-Mitglied wählt seine Sprache bei der Eröffnung seines Kontos.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Erstellen Sie Ihren Bereich, stellen Sie Ihre erste Frage.',
      body: `Importieren Sie Ihre Historie und fragen Sie sie ab. ${b.trialSentence} Ihr Staff kommt dazu, sobald er Ihre ersten Berichte sieht.`,
      primaryCta: 'Meinen Bereich kostenlos erstellen',
      secondaryCta: 'Mit Benoit sprechen',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks und Opteamal sind Marken ihrer jeweiligen Inhaber. STRIVN ist mit diesen Unternehmen weder verbunden noch von ihnen anerkannt. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka und WHOOP sind Marken ihrer jeweiligen Inhaber. Die Angaben zu Teamworks und Opteamal stammen aus öffentlichen Quellen, Stand 15. Oktober 2026.',
  };
}
