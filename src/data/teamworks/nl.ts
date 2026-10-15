import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * Flemish, u-vorm. Opteamal’s core was Belgian clubs, now moving to Teamworks,
 * so this locale is the one that has to sound like a staff room in Flanders,
 * not a translation. Translates fr.ts, does not extend it.
 */
export function nlPage(b: LandingBits): SwitchPage {
  const transfer = mail('Overdracht van mijn Teamworks-gegevens');
  const perks = [b.trialPerk, 'Teamworks-overdracht inbegrepen', 'Open voor de AI van uw keuze'];

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN of Teamworks',
    meta: {
      title: 'Teamworks-alternatief: STRIVN, de AI die uw spelers leest',
      description: `STRIVN of Teamworks? De AI die belasting, GPS en blessures leest, open voor Claude en ChatGPT. ${b.trialDays} dagen proef en gegevensoverdracht inbegrepen.`,
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
      secondaryCta: 'Plan mijn overdracht',
      secondaryHref: transfer,
      perks,
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
      open: {
        title: 'Houd STRIVN open, van de import tot uw AI.',
        body: 'STRIVN leest het bestand van elke sensor of tool, en opent zich voor de AI van uw keuze via MCP, het open protocol van AI-assistenten. Aanwezigheden gaan eruit in CSV, de kalender in ICS, tactische borden en presentaties in pdf.',
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
          criterion: 'Openheid',
          teamworks: "Een API om Teamworks AMS te integreren.",
          strivn: 'Het open protocol MCP: Claude, ChatGPT of de AI van uw keuze.',
        },
        {
          criterion: "Start",
          teamworks: "Na een commerciële demo.",
          strivn: `Vandaag, online: ${b.trialDays} dagen proef en de overdracht van uw gegevens inbegrepen.`,
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
          title: 'Koppel de AI van uw keuze aan uw gegevens',
          body: 'STRIVN spreekt MCP, het open protocol van AI-assistenten. De eigenaar van het team activeert het, en dan lezen Claude, ChatGPT of elke compatibele client de kern, de belasting, de GPS en de wedstrijden met uw rechten. Ze schrijven nooit naar spelers, ouders of het publiek, en u trekt de toegang in via de instellingen.',
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
      lede: `De opzegtermijn staat in uw Teamworks- of Opteamal-contract. Test STRIVN ${b.trialDays} dagen op uw trainingen, en wij dragen uw gegevens samen met u over, zonder kosten.`,
      steps: [
        {
          n: '01',
          title: 'Maak de omgeving aan',
          body: `Naam, e-mail, telefoon, wachtwoord, taal en land volstaan. Het account start ${b.trialDays} dagen op Semi-Pro, zonder kaart.`,
        },
        {
          n: '02',
          title: 'Breng uw Teamworks-gegevens over',
          body: 'Stuur ons uw exports uit Teamworks of Opteamal. Samen met u bereiden we de koppeling van de kolommen voor en de import van belasting, wellness en GPS.',
        },
        {
          n: '03',
          title: 'Stel uw eerste vraag',
          body: 'Vraag de assistent naar de belasting van de week of de spelers om op te volgen. Hij antwoordt op uw geïmporteerde historiek, met de bronnen erbij.',
        },
      ],
      offer: {
        tag: 'Teamworks-clubs',
        title: `${b.trialDays} dagen proef en de overdracht van uw gegevens, gratis.`,
        body: 'We nemen uw Teamworks-exports samen met u door, controleren de koppeling van de kolommen en importeren uw historiek terwijl u STRIVN op uw trainingen test.',
        cta: 'Plan mijn overdracht',
        href: transfer,
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Uw vragen voor u Teamworks verlaat.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Is STRIVN echt open?',
          a: 'Ja. Uw gegevens komen binnen via bestand, wat de sensor of de tool van herkomst ook is. Ze gaan naar de AI van uw keuze via MCP, het open protocol van AI-assistenten, en u exporteert ze in CSV, ICS of pdf, afhankelijk van het scherm. De connector activeert en trekt u in via de instellingen van het team.',
        },
        {
          q: 'Blijven mijn gegevens van mij?',
          a: 'Ja. U leest ze in STRIVN of vanuit uw eigen AI. Gaat u terug naar Free, dan blijft uw volledige historiek raadpleegbaar, en houdt u de export en de verwijdering van wat van u is.',
        },
        {
          q: 'Kan de AI handelen zonder mijn akkoord?',
          a: 'In STRIVN wacht elke actie die de assistent voorbereidt op uw goedkeuring. Via de connector handelen Claude of ChatGPT met uw rechten, zoals een staflid, zonder ooit naar spelers, ouders of het publiek te schrijven en zonder aan de oproepingen te raken.',
        },
        {
          q: 'Wie draagt mijn Teamworks- of Opteamal-gegevens over?',
          a: `Wij, samen met u, zonder kosten. Stuur ons uw exports in CSV of XLSX: we bereiden de koppeling van de kolommen voor en de import van belasting, RPE, wellness en GPS tijdens uw ${b.trialDays} dagen proef. Schrijf ons op hello@strivn.net.`,
          mailto: transfer,
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
      title: `Test STRIVN ${b.trialDays} dagen, gegevensoverdracht inbegrepen.`,
      body: `Wij dragen uw Teamworks-gegevens samen met u over, daarna bevraagt u uw historiek. ${b.trialSentence}`,
      primaryCta: 'Mijn omgeving gratis aanmaken',
      secondaryCta: 'Praat met Benoit',
      secondaryHref: transfer,
      fine: perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks en Opteamal zijn merken van hun respectieve eigenaars. STRIVN is niet verbonden aan deze bedrijven en wordt er niet door goedgekeurd. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka en WHOOP zijn merken van hun eigenaars. De informatie over Teamworks en Opteamal komt uit publieke bronnen op 15 oktober 2026.',
  };
}
