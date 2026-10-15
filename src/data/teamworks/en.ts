import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** English translation of fr.ts. Translate, do not extend. */
export function enPage(b: LandingBits): SwitchPage {
  const migration = mail('Switching from Teamworks to STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN or Teamworks',
    meta: {
      title: 'Teamworks alternative: STRIVN, AI that reads your players',
      description: `STRIVN or Teamworks? An assistant that reads load, GPS and the medical room, a Claude and ChatGPT connector, public prices. ${b.trialPerk}.`,
      ogTitle: 'On Teamworks? Switch to STRIVN, the AI that reads your players.',
      ogDescription:
        'The STRIVN assistant reads load, wellness, GPS, the medical room and matches, and prepares the actions your staff approves.',
      twitterTitle: 'STRIVN or Teamworks: the AI that reads your players.',
      twitterDescription: `An assistant on all your data, a Claude and ChatGPT connector, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'STRIVN or Teamworks',
      titleLead: 'On Teamworks?',
      title: 'Switch to STRIVN, the AI that reads your players.',
      lede: 'Ask Teamworks answers questions asked about your documents. The STRIVN assistant reads every player’s load, wellness, GPS, medical record and matches, then prepares the actions your staff approves.',
      primaryCta: 'Create my space for free',
      secondaryCta: 'Compare with Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    showcase: {
      assistant: {
        title: "Query all your data in one question.",
        body: "Ask Teamworks reads the PDF you open. The STRIVN assistant reads load, wellness, GPS and the medical room together, cites its sources and pins every chart to your dashboards.",
      },
      readiness: {
        title: "Approve what the AI suggests before the session.",
        body: "The wake-up check-in feeds each player's readiness. STRIVN shows why a player moves to Reduce and suggests the adjusted session. You apply it or edit it, in one move.",
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN or Teamworks',
      title: "Compare what the AI does for your staff.",
      lede: "Five rows. Sources sit under the table.",
      columns: {
        criterion: 'Criterion',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "What the AI reads",
          teamworks: "The PDF you open.",
          strivn: "Load, wellness, GPS, medical room and matches, together.",
        },
        {
          criterion: "What the AI returns",
          teamworks: "A cited answer.",
          strivn: "A sourced answer, and the action ready to approve.",
        },
        {
          criterion: "Your own AI",
          teamworks: "An API to integrate Teamworks AMS.",
          strivn: "Claude and ChatGPT, plugged into your data.",
        },
        {
          criterion: "Getting started",
          teamworks: "After a sales demo.",
          strivn: `Today, online, with ${b.trialPerk}.`,
        },
        {
          criterion: "Price",
          teamworks: "On quote.",
          strivn: "Shown on the page, from €0 a month.",
        },
      ],
      note: "Sources: teamworks.com (AMS and Performance pages), Teamworks blog of 5 August 2026 on Ask Teamworks, as of 15 October 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Why STRIVN',
      title: "Equip the whole staff, from analyst to physio.",
      lede: "Six more reasons to choose STRIVN.",
      items: [
        {
          title: 'Connect Claude or ChatGPT to your data',
          body: 'The team owner turns the connector on, and your AI reads the squad, load, GPS and matches with your permissions. It never writes to players, parents or the public. You revoke access from the settings.',
        },
        {
          title: 'Prepare the opponent together',
          body: 'The analyst takes notes, films and draws under each opponent. Photograph the team sheet: the AI extracts the players, who join the opponent squad only once you confirm. The brief follows, from the scouting file to the team talk.',
        },
        {
          title: 'Manage load down to the drill',
          body: 'RPE gives internal load, the GPS export gives external load, side by side. ACWR, monotony and strain calculate themselves, the forecast projects the week, and every drill keeps its GPS measurement.',
        },
        {
          title: 'Filter call-ups through the medical room',
          body: 'The medical board brings together active injuries, players in rehab and everyone’s availability. It filters call-ups on its own, and the player follows their return-to-play programme in their app.',
        },
        {
          title: 'Dictate the match debrief',
          body: 'Speak after the match: STRIVN formats your debrief. You read it over, then you apply it.',
        },
        {
          title: 'Talk to the person who builds STRIVN',
          body: 'The “Talk to Benoit” button opens an email to the person who builds STRIVN. Describe your staff and your current tool, and we will reply.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Switch',
      title: 'Open STRIVN while your contract runs.',
      lede: `The notice period is in your Teamworks or Opteamal contract. Open STRIVN alongside it and test it for ${b.trialDays} days on your own sessions.`,
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: `Name, email, phone, password, language and country are enough. The account starts on Semi-Pro for ${b.trialDays} days, with no card.`,
        },
        {
          n: '02',
          title: 'Import your history',
          body: 'Drop in your load, RPE and wellness CSV or XLSX files, then your GPS exports. Columns are recognized, then remembered for the team.',
        },
        {
          n: '03',
          title: 'Ask your first question',
          body: 'Ask the assistant for the week’s load or the players to watch. It answers on your imported history, with its sources.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Your questions before leaving Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Does my data stay mine?',
          a: 'Yes. You read it in STRIVN or from your own AI, through the connector you turn on and revoke. You export attendance as CSV, the calendar as ICS, tactical boards and presentations as PDF. If you move back down to Free, your whole history stays available.',
        },
        {
          q: 'Can the AI act without my approval?',
          a: 'In STRIVN, every action the assistant prepares waits for your approval. Through the connector, Claude or ChatGPT act with your permissions, like a member of the staff, without ever writing to players, parents or the public, or touching call-ups.',
        },
        {
          q: 'Can I bring my Teamworks or Opteamal history?',
          a: `Yes, by file. Export load, RPE and wellness as CSV or XLSX, then drop them into STRIVN. GPS exports import ${b.gpsTiers}, so during the ${b.trialDays}-day trial. For the first column mapping, write to us at hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'I am still under contract. When can I switch?',
          a: `The notice period and renewal date are in your contract. Open STRIVN alongside it, with no club approval and no card, with ${b.trialDays} days of Semi-Pro. You cancel on the date that suits you.`,
        },
        {
          q: 'I was on Opteamal. What does the Teamworks acquisition change?',
          a: 'Teamworks acquired Opteamal on 18 December 2025 and says it is moving its clubs onto its own platform. If you change tools, change once: import your history into STRIVN while your contract runs.',
        },
        {
          q: 'How much does STRIVN cost?',
          a: `Prices are public: ${b.publicPrices}. ${b.trialSentence} Pro, on quote, sets the AI and WhatsApp volumes in the contract.`,
        },
        {
          q: 'Does STRIVN read my GPS data?',
          a: `Yes, from the session export. Drop in the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. STRIVN recognizes the columns on the first import and calculates distance and speed zones on the raw trace. Import ${b.gpsTiers}.`,
        },
        {
          q: 'Does STRIVN work in Dutch?',
          a: 'Yes. STRIVN is available in English, French, Dutch, German, Portuguese and Spanish, for the staff and for the players. Each staff member chooses their language when opening their account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Create your space and ask your first question.',
      body: `Import your history, then question it. ${b.trialSentence} Your staff joins you when they see your first reports.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Talk to Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks and Opteamal are trademarks of their respective owners. STRIVN is neither affiliated with nor endorsed by these companies. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their respective owners. Information about Teamworks and Opteamal comes from public sources as of 15 October 2026.',
  };
}
