import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/**
 * Flemish, u-vorm. Opteamal’s core is Belgian clubs, so this locale is the
 * one that has to sound like a staff room in Flanders, not a translation.
 */
export function nlPage(b: LandingBits): SwitchPage {
  const costAnswer = `De prijzen zijn publiek: ${b.publicPrices}. ${b.gpsFiles} ${b.trialSentence} Zonder kaart. Pro blijft op maat.`;

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Van Opteamal naar STRIVN',
    meta: {
      title: 'Waarom overstappen van Opteamal naar STRIVN',
      description:
        'Opteamal, Belgische uitgever, is op 18 december 2025 overgenomen door Teamworks. Feitelijke vergelijking: publieke prijzen van STRIVN, account zonder goedkeuring van de club, check-in via link. Teamworks AMS kondigt koppelingen, een medische module en certificeringen aan.',
      ogTitle: 'Gebruikt u Opteamal? Waarom overstappen naar STRIVN',
      ogDescription:
        'Overgenomen door Teamworks op 18 december 2025. Publieke prijzen van STRIVN, zelf starten, check-in via link. De vergelijking schrijft Opteamal alleen publieke feiten toe.',
      twitterTitle: 'Waarom overstappen van Opteamal naar STRIVN',
      twitterDescription: 'Feitelijke vergelijking voor clubs die nog op Opteamal zitten, voortaan bij Teamworks.',
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, de controletoren van de performancestaf',
    },
    hero: {
      eyebrow: 'Opteamal gaat naar Teamworks',
      titleLead: 'Gebruikt u Opteamal?',
      title: 'Dit is waarom u naar STRIVN overstapt.',
      lede: 'Op 18 december 2025 heeft Teamworks Opteamal overgenomen, de Belgische uitgever, en voegt het in bij Teamworks. Deze pagina zet de publieke feiten aan hun kant naast wat STRIVN levert. Waar een detail over Opteamal niet publiek is, schrijven we dat, in plaats van een tekort te verzinnen.',
      primaryCta: 'Overstappen naar STRIVN',
      secondaryCta: 'Bekijk de vergelijking',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Vergelijking',
      title: 'Opteamal (voortaan Teamworks) en STRIVN, punt per punt.',
      lede: 'Twee kolommen met feiten, en daarna een lezing. Het voordeel gaat naar Teamworks AMS wanneer hun publieke aankondigingen dat zeggen. Het gaat naar STRIVN wanneer het contrast publiek is. Anders blijft de lezing open.',
      columns: {
        criterion: 'Criterium',
        opteamal: 'Opteamal (voortaan Teamworks)',
        strivn: 'STRIVN',
        verdict: 'Oordeel',
      },
      rows: [
        {
          criterion: 'Wie beslist over het vervolg',
          opteamal:
            'Opteamal, Belgische uitgever, is op 18 december 2025 overgenomen door Teamworks en wordt ingevoegd bij Teamworks. Roadmap en migratie: Teamworks.',
          strivn: 'Onafhankelijke uitgever. De roadmap is die van STRIVN.',
          verdictLead: 'Feit',
          verdict: 'Sinds de overname beslist Teamworks over het vervolg van Opteamal.',
        },
        {
          criterion: 'Prijs',
          opteamal: 'Op maat, niet publiek.',
          strivn: `Publiek: ${b.publicPrices}.`,
          verdictLead: 'STRIVN',
          verdict: 'De prijzen van STRIVN staan op de pagina, behalve Pro, dat op maat blijft.',
        },
        {
          criterion: 'Hoe u koopt',
          opteamal: 'Ondernemingsverkoop.',
          strivn:
            'De staf maakt zelf het account aan: naam, e-mail, telefoon, wachtwoord, taal, land. Geen goedkeuring van de club of een bond. 30 dagen Semi-Pro bij de start, zonder kaart.',
          verdictLead: 'STRIVN',
          verdict: 'Zelf starten bij STRIVN. Ondernemingsverkoop aan hun kant.',
        },
        {
          criterion: 'Koppelingen',
          opteamal:
            'Teamworks AMS kondigt meer dan 100 koppelingen aan. Welke lijst nog geldt voor een Opteamal-club is hier niet publiek.',
          strivn:
            'Alleen bestanden, op Semi-Pro en Pro: CSV, XLSX, Catapult, STATSports, SPT- / GameTraka-traces. Geen live GPS-koppeling, geen publieke API.',
          verdictLead: 'Teamworks AMS',
          verdict: 'De aangekondigde koppelingen zijn een voordeel van Teamworks AMS. STRIVN blijft bij bestanden.',
        },
        {
          criterion: 'Medisch',
          opteamal:
            'Teamworks AMS kondigt een medische module aan. Het detail dat nog eigen is aan Opteamal is hier niet publiek.',
          strivn:
            'Blessurelogboek, checklist en terugkeerplan, revalidatiesessies. Medisch bord op Semi-Pro en Pro. Geen protocolbibliotheek.',
          verdictLead: 'Teamworks AMS',
          verdict: 'De aangekondigde medische module is een voordeel van Teamworks AMS.',
        },
        {
          criterion: 'Certificeringen',
          opteamal: 'Teamworks AMS kondigt ISO 27001 en SOC 2 aan.',
          strivn:
            'Geen certificering geclaimd. Transport via HTTPS. Recht op inzage, verbetering, wissing of een kopie via hello@strivn.net. Geen genoemd land van hosting, geen genoemd verwerkerscontract.',
          verdictLead: 'Teamworks AMS',
          verdict: 'De aangekondigde certificeringen zijn een voordeel van Teamworks AMS.',
        },
        {
          criterion: 'Talen',
          opteamal: 'Niet publiek op deze pagina.',
          strivn: 'Frans, Engels, Nederlands, Duits, Portugees en Spaans. Frans is de brontekst.',
          verdictLead: 'Open',
          verdict:
            'STRIVN documenteert zes talen, waaronder Frans en Nederlands. Het detail over Opteamal is niet publiek.',
        },
        {
          criterion: 'Check-in van de speler',
          opteamal: 'Niet publiek op deze pagina.',
          strivn:
            'Link via WhatsApp of e-mail, zonder app. Automatische verzending op Semi-Pro en Pro. WHOOP kan de check-in voorinvullen op die niveaus.',
          verdictLead: 'Open',
          verdict: 'STRIVN documenteert de link zonder app. Het equivalent bij Opteamal is niet publiek.',
        },
        {
          criterion: 'Langs de lijn',
          opteamal: 'Niet publiek op deze pagina.',
          strivn:
            'Aanwezigheden, chrono per blok, ploegen en score. Offline logboek op de telefoon, gesynchroniseerd bij terugkeer.',
          verdictLead: 'Open',
          verdict: 'STRIVN documenteert de offlinemodus. Het equivalent bij Opteamal is niet publiek.',
        },
        {
          criterion: 'Belasting en GPS',
          opteamal: 'Niet publiek op deze pagina.',
          strivn:
            'Week in AU, ACWR 7 dagen op 28, lezingen Klaar, Opvolgen, Risico. Import van GPS-bestanden op Semi-Pro en Pro, inclusief de berekening van ruwe SPT-traces.',
          verdictLead: 'Open',
          verdict: 'STRIVN documenteert de belasting en de GPS-bestanden. Het detail over Opteamal is niet publiek.',
        },
      ],
      note: 'Feiten over Opteamal en Teamworks beperkt tot publieke informatie op 15 oktober 2026: overname, prijs op maat, ondernemingsverkoop, en aankondigingen van Teamworks AMS (koppelingen, medische module, ISO 27001, SOC 2). De rest van hun kolom staat als niet publiek.',
    },
    reasons: {
      id: 'raisons',
      eyebrow: 'Waarom overstappen',
      title: 'Elf redenen om over te stappen',
      lede: 'Wat STRIVN levert, en het enige nieuwe feit aan de kant van Opteamal: sinds de overname beslist Teamworks over het vervolg.',
      items: [
        {
          title: 'De prijzen staan op de pagina',
          body: `Free, Amateur, Semi-Pro en Pro: ${b.publicPrices}. Dezelfde bedragen als de catalogus. Pro blijft op maat, als een offerte, niet als een verborgen prijs van de andere niveaus.`,
        },
        {
          title: 'U opent het account zelf',
          body: 'Naam, e-mail, telefoon, wachtwoord, taal, land. Geen goedkeuring van de club of een bond. Het account start op 30 dagen Semi-Pro, zonder kaart.',
        },
        {
          title: 'Spelers antwoorden via een link',
          body: 'Wellness (vermoeidheid, slaap, humeur, stress) en RPE, via WhatsApp of e-mail, zonder app. De automatische verzending ’s ochtends en ’s avonds is op Semi-Pro en Pro. WHOOP kan de check-in voorinvullen op die niveaus.',
        },
        {
          title: 'Langs de lijn werkt offline',
          body: 'Aanwezigheden, chrono per blok, ploegen en score. De telefoon houdt een logboek bij en synchroniseert bij terugkeer. Als de duur niet is ingevuld, gebruikt de belasting de werkelijk gespeelde tijd.',
        },
        {
          title: 'De week plant u in AU',
          body: 'Doel, gepland tegen gerealiseerd, aanpassing per speler (schaal, uitsluiting of individueel werk) zonder het teamrooster of de oproeping te wijzigen. Belasting uit GPS vraagt Semi-Pro.',
        },
        {
          title: 'De oefening beweegt, en u deelt ze',
          body: 'Voetbal, handbal, rugby, basketbal, volleybal. Animatie, download als PNG of WebM, de PNG delen via het deelmenu van de telefoon. 3 borden en 3 sjablonen op Free, geen plafond vanaf Amateur.',
        },
        {
          title: 'Frans en Nederlands, plus vier talen',
          body: 'Frans, Engels, Nederlands, Duits, Portugees en Spaans, aan de kant van de coach en van de speler. Frans is de brontekst. Nederlands is er voor Belgische staven.',
        },
        {
          title: 'Elke rol heeft zijn rechten',
          body: 'Hoofdcoach, assistent, medisch, kiné, fysieke trainer, analist, gedelegeerde, recruiter, keeperstrainer. Free: alleen de eigenaar. Amateur: één uitnodiging extra. Semi-Pro en Pro: geen plafond.',
        },
        {
          title: 'Afwezigheid haalt de speler uit de oproeping',
          body: 'Een afwezige speler verdwijnt uit de oproepingen voor training en wedstrijd. Een speler die beperkt is in training verdwijnt uit de wedstrijden. Zorg, een individueel programma en een expliciete stageselectie blijven beschikbaar.',
        },
        {
          title: 'De SPT-trace wordt herberekend',
          body: `Alleen bestanden, ${b.gpsTiers}: CSV of XLSX (Catapult, STATSports, of om het even welke tabel) en SPT- / GameTraka-traces (.gt). STRIVN berekent afstand en snelheidszones op de ruwe trace. Geen live koppeling.`,
        },
        {
          title: 'Het vervolg van Opteamal beslist Teamworks',
          body: 'Sinds 18 december 2025 liggen de roadmap en de migratie van Opteamal bij Teamworks. Dat is een wissel van beslisser, geen oordeel over het product. STRIVN blijft een onafhankelijke uitgever.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Hoe u overstapt',
      title: 'Drie stappen. Geen integratieproject.',
      lede: 'U kunt een ruimte openen terwijl uw Opteamal-contract nog loopt. Uw opzegtermijn kennen we niet: die staat in uw contract, niet hier.',
      steps: [
        {
          n: '01',
          title: 'Maak de ruimte aan',
          body: 'Naam, e-mail, telefoon, wachtwoord, taal, land. Zonder goedkeuring van de club. Het account start op 30 dagen Semi-Pro, zonder kaart.',
        },
        {
          n: '02',
          title: 'Importeer de geschiedenis',
          body: 'CSV of XLSX voor belasting, RPE en wellness. GPS-exports (Catapult, STATSports, SPT / GameTraka) gaan mee op Semi-Pro, dus tijdens de proefperiode. De kolommen worden geraden en daarna onthouden voor het team.',
        },
        {
          n: '03',
          title: 'Nodig de staf uit',
          body: 'Eén rol per persoon, met zijn rechten. Op Free alleen de eigenaar. Op Amateur één uitnodiging extra. Op Semi-Pro en Pro geen plafond.',
        },
      ],
      offer: {
        tag: 'Voor clubs die Opteamal verlaten',
        title: 'We kunnen de eerste kolomkoppeling samen doen.',
        body: 'De drie stappen volstaan om te starten. Wilt u dat we de kolommen één keer samen koppelen, schrijf ons. Het begeleidingsaanbod moet nog bevestigd worden.',
        cta: 'Over mijn migratie praten',
        href: mail('Migratie vanuit Opteamal'),
      },
    },
    stay: {
      id: 'rester',
      eyebrow: 'Blijven',
      title: 'Wanneer Opteamal of Teamworks de juiste keuze blijft.',
      lede: 'Overstappen is in deze gevallen niet de juiste beweging. We schrijven ze zodat de pagina bruikbaar blijft.',
      items: [
        {
          title: 'De medische module voor ondernemingen',
          body: 'Teamworks AMS kondigt een medische module aan. STRIVN dekt het logboek, de terugkeer en de revalidatie, geen protocolbibliotheek.',
        },
        {
          title: 'ISO 27001 en SOC 2',
          body: 'Teamworks AMS kondigt ze aan. STRIVN claimt geen certificering, geen land van hosting en geen verwerkerscontract.',
        },
        {
          title: 'De directe koppelingen',
          body: 'Teamworks AMS kondigt meer dan 100 koppelingen aan. STRIVN importeert bestanden en heeft geen live GPS-koppeling en geen publieke API.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'De vragen wanneer u Opteamal verlaat.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Kan ik mijn Opteamal-geschiedenis meenemen?',
          a: 'Via bestand, ja. Belasting, RPE en wellness: CSV of XLSX. GPS-exports (CSV, XLSX, Catapult, STATSports, of een SPT- / GameTraka-trace) importeert u op Semi-Pro en Pro, het niveau van de proefperiode van 30 dagen. De kolomkoppeling wordt geraden op basis van gekende koppen, en daarna bewaard voor het team. Er is geen publieke API om een Opteamal-account leeg te trekken. Schrijf ons op hello@strivn.net als u de eerste koppeling samen wilt doen.',
          mailto: mail('Migratie vanuit Opteamal'),
        },
        {
          q: 'Ik zit nog in een contract. Wanneer kan ik overstappen?',
          a: 'Opzegtermijn, verlenging en uitstapkost staan in uw contract met Opteamal of Teamworks. We publiceren ze niet, en deze pagina zegt u niet het contract te verbreken. U kunt parallel een STRIVN-ruimte aanmaken: zonder goedkeuring van de club, zonder kaart, op 30 dagen Semi-Pro.',
        },
        {
          q: 'Wat kost het echt?',
          a: costAnswer,
        },
        {
          q: 'Wat verandert er voor de spelers?',
          a: 'Om te antwoorden installeren ze niets. Een link via WhatsApp of e-mail volstaat voor wellness, RPE en herinneringen. Automatische verzending is op Semi-Pro en Pro. STRIVN Player en STRIVN coach (iOS en Android) bestaan daarnaast: het zijn schillen rond de webapp, met meldingen, en een chrono langs de lijn in de coach-app.',
        },
        {
          q: 'En de talen, voor een Belgische club?',
          a: 'STRIVN is in het Frans, Engels, Nederlands, Duits, Portugees en Spaans, aan de kant van de coach en van de speler. Frans is de brontekst. Nederlands zit erin. De talen die Opteamal nog bedient staan hier niet in detail: dat is niet publiek op deze pagina.',
        },
        {
          q: 'Wat vind ik niet terug?',
          a: 'De medische module die Teamworks AMS aankondigt, de certificeringen ISO 27001 en SOC 2, en de meer dan 100 koppelingen die ze aankondigen. STRIVN claimt die niet. Het blessurelogboek, de terugkeer en de bestandsimport worden wel geleverd.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Proefperiode Semi-Pro',
      title: 'Maak de ruimte aan en importeer uw geschiedenis.',
      body: `${b.trialSentence} Uw Opteamal-contract stopt niet vanzelf: u kiest het moment.`,
      primaryCta: 'Mijn ruimte aanmaken',
      secondaryCta: 'Over mijn migratie praten',
      secondaryHref: mail('Migratie vanuit Opteamal'),
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks en Teamworks AMS zijn merken van hun respectieve houders. STRIVN is niet gelieerd aan deze vennootschappen en wordt niet door hen goedgekeurd. Catapult, STATSports, SPT, GameTraka en WHOOP zijn merken van hun houders. GPS-import gebeurt via bestand; WHOOP kan de check-in voorinvullen op Semi-Pro en Pro. De informatie over Opteamal en Teamworks komt uit publieke bronnen op 15 oktober 2026 en kan wijzigen. Prijscijfers van STRIVN: de geldende catalogus.',
  };
}
