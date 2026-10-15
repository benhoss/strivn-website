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
    showcase: {
      assistant: {
        title: "Befragen Sie alle Ihre Daten mit einer Frage.",
        body: "Ask Teamworks liest das PDF, das Sie öffnen. Der STRIVN-Assistent liest Belastung, Wellness, GPS und Medizin zusammen, nennt seine Quellen und heftet jede Grafik an Ihre Dashboards.",
      },
      readiness: {
        title: "Bestätigen Sie, was die KI vor der Einheit vorschlägt.",
        body: "Der Check-in nach dem Aufwachen speist die Readiness jedes Spielers. STRIVN zeigt, warum ein Spieler auf Entlasten wechselt, und schlägt die angepasste Einheit vor. Sie übernehmen oder ändern, in einem Schritt.",
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN oder Teamworks',
      title: "Vergleichen Sie, was die KI für Ihren Staff leistet.",
      lede: "Fünf Zeilen. Die Quellen stehen unter der Tabelle.",
      columns: {
        criterion: 'Kriterium',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "Was die KI liest",
          teamworks: "Das PDF, das Sie öffnen.",
          strivn: "Belastung, Wellness, GPS, Medizin und Spiele, zusammen.",
        },
        {
          criterion: "Was die KI liefert",
          teamworks: "Eine Antwort mit Zitat.",
          strivn: "Eine Antwort mit Quellen und die Aktion zur Freigabe.",
        },
        {
          criterion: "Ihre eigene KI",
          teamworks: "Eine API zur Integration von Teamworks AMS.",
          strivn: "Claude und ChatGPT, mit Ihren Daten verbunden.",
        },
        {
          criterion: "Start",
          teamworks: "Nach einer Verkaufsdemo.",
          strivn: `Heute, online. ${b.trialPerk}.`,
        },
        {
          criterion: "Preis",
          teamworks: "Auf Angebot.",
          strivn: "Auf der Seite, ab 0 € pro Monat.",
        },
      ],
      note: "Quellen: teamworks.com (Seiten AMS und Performance), Teamworks-Blog vom 5. August 2026 zu Ask Teamworks, Stand 15. Oktober 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Warum STRIVN',
      title: "Rüsten Sie den ganzen Staff aus.",
      lede: "Sechs weitere Gründe für STRIVN.",
      items: [
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
