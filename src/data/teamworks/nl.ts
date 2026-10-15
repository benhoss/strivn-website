import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * Flemish, u-vorm. Opteamal’s core was Belgian clubs, now moving to Teamworks,
 * so this locale is the one that has to sound like a staff room in Flanders,
 * not a translation. Translates fr.ts, does not extend it.
 */
export function nlPage(b: LandingBits): SwitchPage {
  const migration = mail('Overstappen van Teamworks naar STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN of Teamworks',
    meta: {
      title: 'Teamworks-alternatief: STRIVN, de AI die uw spelers leest',
      description: `STRIVN of Teamworks? Een assistent die belasting, GPS en blessures leest, een connector voor Claude en ChatGPT, publieke prijzen. ${b.trialPerk}.`,
      ogTitle: 'Werkt u met Teamworks? Stap over naar STRIVN, de AI die uw spelers leest.',
      ogDescription:
        'De assistent van STRIVN leest belasting, wellness, GPS, de medische staf en de wedstrijden, en bereidt de acties voor die uw staf goedkeurt.',
      twitterTitle: 'STRIVN of Teamworks: de AI die uw spelers leest.',
      twitterDescription: `Een assistent op al uw gegevens, een connector voor Claude en ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, de controletoren van de performancestaf',
    },
    hero: {
      eyebrow: 'STRIVN of Teamworks',
      titleLead: 'Werkt u met Teamworks?',
      title: 'Stap over naar STRIVN, de AI die uw spelers leest.',
      lede: 'Ask Teamworks beantwoordt vragen over uw documenten. De assistent van STRIVN leest de belasting, de wellness, de GPS, de medische staf en de wedstrijden van elke speler, en bereidt dan de acties voor die uw staf goedkeurt.',
      primaryCta: 'Mijn omgeving gratis aanmaken',
      secondaryCta: 'Vergelijk met Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    showcase: {
      assistant: {
        title: "Bevraag al uw data in één vraag.",
        body: "Ask Teamworks leest de pdf die u opent. De assistent van STRIVN leest belasting, wellness, GPS en de medische staf samen, citeert zijn bronnen en zet elke grafiek op uw dashboards.",
      },
      readiness: {
        title: "Keur goed wat de AI voorstelt vóór de training.",
        body: "De check-in bij het ontwaken voedt de readiness van elke speler. STRIVN toont waarom een speler naar Ontlasten gaat en stelt de aangepaste training voor. U past toe of wijzigt, in één beweging.",
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN of Teamworks',
      title: "Vergelijk wat de AI voor uw staf doet.",
      lede: "Vijf regels. De bronnen staan onder de tabel.",
      columns: {
        criterion: 'Criterium',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "Wat de AI leest",
          teamworks: "De pdf die u opent.",
          strivn: "Belasting, wellness, GPS, medische staf en wedstrijden, samen.",
        },
        {
          criterion: "Wat de AI teruggeeft",
          teamworks: "Een antwoord met bronvermelding.",
          strivn: "Een antwoord met bronnen, en de actie klaar om goed te keuren.",
        },
        {
          criterion: "Uw eigen AI",
          teamworks: "Een API om Teamworks AMS te integreren.",
          strivn: "Claude en ChatGPT, gekoppeld aan uw gegevens.",
        },
        {
          criterion: "Start",
          teamworks: "Na een commerciële demo.",
          strivn: `Vandaag, online, met ${b.trialPerk}.`,
        },
        {
          criterion: "Prijs",
          teamworks: "Op offerte.",
          strivn: "Op de pagina, vanaf € 0 per maand.",
        },
      ],
      note: "Bronnen: teamworks.com (pagina's AMS en Performance), Teamworks-blog van 5 augustus 2026 over Ask Teamworks, op 15 oktober 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Waarom STRIVN',
      title: "Rust de hele staf uit, van analist tot kiné.",
      lede: "Zes redenen meer om voor STRIVN te kiezen.",
      items: [
        {
          title: 'Koppel Claude of ChatGPT aan uw gegevens',
          body: 'De eigenaar van het team activeert de connector, en uw AI leest de kern, de belasting, de GPS en de wedstrijden met uw rechten. Ze schrijft nooit naar spelers, ouders of het publiek. U trekt de toegang in via de instellingen.',
        },
        {
          title: 'Bereid de tegenstander met meerderen voor',
          body: 'De analist noteert, filmt en tekent onder elke tegenstander. Fotografeer het wedstrijdblad: de AI haalt de spelers eruit, die pas in de kern van de tegenstander komen als u bevestigt. Daarna genereert STRIVN de brief, van het scoutingdossier tot de teambespreking.',
        },
        {
          title: 'Stuur de belasting tot op de oefening',
          body: 'De RPE geeft de interne belasting, de GPS-export de externe belasting, naast elkaar. ACWR, monotonie en strain berekenen zichzelf, de prognose projecteert de week, en elke oefening houdt haar GPS-meting bij.',
        },
        {
          title: 'Filter de oproepingen via de medische staf',
          body: 'Het medische overzicht bundelt actieve blessures, spelers in revalidatie en de beschikbaarheid van elke speler. Het filtert zelf de oproepingen, en de speler volgt zijn terugkeerprogramma in zijn app.',
        },
        {
          title: 'Dicteer de debriefing van de wedstrijd',
          body: 'Spreek na de wedstrijd: STRIVN werkt uw debriefing uit. U leest ze na en past ze dan toe.',
        },
        {
          title: 'Praat met wie STRIVN bouwt',
          body: 'De knop ‘Praat met Benoit’ opent een e-mail naar wie STRIVN bouwt. Beschrijf uw staf en uw huidige tool, wij antwoorden u.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Overstappen',
      title: 'Open STRIVN terwijl uw contract loopt.',
      lede: `De opzegtermijn staat in uw Teamworks- of Opteamal-contract. Open STRIVN ernaast en test het ${b.trialDays} dagen op uw eigen trainingen.`,
      steps: [
        {
          n: '01',
          title: 'Maak de omgeving aan',
          body: `Naam, e-mail, telefoon, wachtwoord, taal en land volstaan. Het account start ${b.trialDays} dagen op Semi-Pro, zonder kaart.`,
        },
        {
          n: '02',
          title: 'Importeer de historiek',
          body: 'Zet uw CSV- of XLSX-bestanden met belasting, RPE en wellness neer, daarna uw GPS-exports. De kolommen worden herkend en daarna onthouden voor het team.',
        },
        {
          n: '03',
          title: 'Stel uw eerste vraag',
          body: 'Vraag de assistent naar de belasting van de week of de spelers om op te volgen. Hij antwoordt op uw geïmporteerde historiek, met de bronnen erbij.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Uw vragen voor u Teamworks verlaat.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Blijven mijn gegevens van mij?',
          a: 'Ja. U leest ze in STRIVN of vanuit uw eigen AI, via de connector die u activeert en intrekt. U exporteert de aanwezigheden in CSV, de kalender in ICS, de tactische borden en de presentaties in pdf. Gaat u terug naar Free, dan blijft uw volledige historiek raadpleegbaar.',
        },
        {
          q: 'Kan de AI handelen zonder mijn akkoord?',
          a: 'In STRIVN wacht elke actie die de assistent voorbereidt op uw goedkeuring. Via de connector handelen Claude of ChatGPT met uw rechten, zoals een staflid, zonder ooit naar spelers, ouders of het publiek te schrijven en zonder aan de oproepingen te raken.',
        },
        {
          q: 'Kan ik mijn Teamworks- of Opteamal-historiek meenemen?',
          a: `Ja, via bestand. Exporteer belasting, RPE en wellness in CSV of XLSX en zet ze in STRIVN. GPS-exports importeert u ${b.gpsTiers}, dus tijdens de proefperiode van ${b.trialDays} dagen. Voor de eerste koppeling schrijft u ons op hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ik zit nog onder contract. Wanneer kan ik overstappen?',
          a: `De opzegtermijn en de verlengingsdatum staan in uw contract. Open STRIVN ernaast, zonder goedkeuring van de club en zonder kaart, met ${b.trialDays} dagen Semi-Pro. U zegt op op de datum die u past.`,
        },
        {
          q: 'Ik werkte met Opteamal. Wat verandert de overname door Teamworks?',
          a: 'Teamworks heeft Opteamal op 18 december 2025 overgenomen en kondigt aan dat de clubs naar zijn eigen platform overstappen. Verandert u van tool, verander dan één keer: importeer uw historiek in STRIVN terwijl uw contract loopt.',
        },
        {
          q: 'Wat kost STRIVN?',
          a: `De prijzen zijn publiek: ${b.publicPrices}. ${b.trialSentence} Pro, op offerte, legt de volumes voor AI en WhatsApp vast in het contract.`,
        },
        {
          q: 'Leest STRIVN de gegevens van mijn GPS?',
          a: `Ja, via de export van de training. Zet de CSV of XLSX van Catapult, STATSports of een ander systeem neer, of de SPT- / GameTraka-trace. STRIVN herkent de kolommen bij de eerste import en berekent afstand en snelheidszones op de ruwe trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Werkt STRIVN in het Nederlands?',
          a: 'Ja. STRIVN bestaat in het Nederlands, Frans, Engels, Duits, Portugees en Spaans, voor de staf en voor de spelers. Elk staflid kiest zijn taal bij het openen van zijn account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Maak uw omgeving aan en stel uw eerste vraag.',
      body: `Importeer uw historiek en bevraag ze. ${b.trialSentence} Uw staf sluit aan wanneer hij uw eerste rapporten ziet.`,
      primaryCta: 'Mijn omgeving gratis aanmaken',
      secondaryCta: 'Praat met Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks en Opteamal zijn merken van hun respectieve eigenaars. STRIVN is niet verbonden aan deze bedrijven en wordt er niet door goedgekeurd. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka en WHOOP zijn merken van hun eigenaars. De informatie over Teamworks en Opteamal komt uit publieke bronnen op 15 oktober 2026.',
  };
}
