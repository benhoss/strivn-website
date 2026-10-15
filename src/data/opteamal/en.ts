import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** English translation of fr.ts. Translate, do not extend. */
export function enPage(b: LandingBits): SwitchPage {
  const migration = mail('Migration from Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Switch from Opteamal to STRIVN',
    meta: {
      title: 'Opteamal alternative: STRIVN, with your history',
      description: `Teamworks acquired Opteamal in December 2025. Switch to STRIVN: public prices, ${b.trialPerk}, in French and Dutch.`,
      ogTitle: 'On Opteamal? Switch to STRIVN with your history.',
      ogDescription: `Public prices, an account the staff opens itself, ${b.trialPerk}. Import your load and GPS files while your contract runs.`,
      twitterTitle: 'Switch from Opteamal to STRIVN',
      twitterDescription: `Public prices, ${b.trialPerk}, history imported by file.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'Opteamal is joining Teamworks',
      titleLead: 'On Opteamal?',
      title: 'Switch to STRIVN with your history.',
      lede: `Teamworks acquired Opteamal on 18 December 2025. Open a STRIVN space, import your load and GPS files, then compare on your own sessions for ${b.trialDays} days.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'See the comparison',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparison',
      title: 'Compare price, access and roadmap.',
      lede: 'Three points where Opteamal, Teamworks and STRIVN each publish their answer. Judge the rest on your own sessions.',
      columns: {
        criterion: 'Criterion',
        opteamal: 'Opteamal, at Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Price',
          opteamal: 'On quote.',
          strivn: `On the page: ${b.publicPrices}.`,
        },
        {
          criterion: 'Opening an account',
          opteamal: 'On request, through their sales team.',
          strivn: `The staff creates the account itself, without club approval. ${b.trialSentence}`,
        },
        {
          criterion: 'Roadmap',
          opteamal: 'Decided at Teamworks since the 18 December 2025 acquisition, migration included.',
          strivn:
            'Decided by STRIVN, an independent vendor. We announce every new feature to coaches by email.',
        },
      ],
      note: 'Sources: Teamworks press release of 18 December 2025 and the public pages of Teamworks and Opteamal, as of 15 October 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'Day to day',
      title: 'Keep the monitoring you already do.',
      lede: 'Six tasks your staff does every week, and how STRIVN handles each one.',
      items: [
        {
          title: 'Send the check-in by WhatsApp',
          body: 'The player gets a link by WhatsApp or email and answers without installing an app. They rate fatigue, sleep, mood and stress, then their RPE after the session. Automatic sending is on Semi-Pro and Pro. You read the answers before training.',
        },
        {
          title: 'Run the session from the touchline',
          body: 'Attendance, block timer, teams and score fit on the phone. Without a signal, the phone keeps a log and syncs it when you are back online. With no duration entered, STRIVN computes the load from the time actually played.',
        },
        {
          title: 'Plan the week in AU',
          body: 'Set the target, track planned against done and adjust player by player. STRIVN computes the ACWR over 7 and 28 days and places each player in one of three states.',
        },
        {
          title: 'Import the GPS export, whatever the sensor',
          body: `Drop the CSV or XLSX from Catapult, STATSports or another system, or the SPT / GameTraka trace. Columns are recognised on the first import, then remembered. Import ${b.gpsTiers}.`,
        },
        {
          title: 'Work in French or in Dutch',
          body: 'STRIVN comes in six languages: French, Dutch, English, German, Portuguese and Spanish. Each staff member picks theirs when opening their account.',
        },
        {
          title: 'Give each staff member their role',
          body: 'Nine roles, from head coach to physio and analyst, each with its own permissions. On Semi-Pro and Pro, staff seats are unlimited.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Switching',
      title: 'Open STRIVN while your contract runs.',
      lede: `Your notice period is in your Opteamal contract. Open STRIVN alongside it and compare on your own sessions for ${b.trialDays} days.`,
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: `Name, email, phone, password, language and country are enough. The account starts on Semi-Pro for ${b.trialDays} days, with no card.`,
        },
        {
          n: '02',
          title: 'Import the history',
          body: 'Drop your load, RPE and wellness CSV or XLSX files, then your GPS exports. Columns are recognised, then remembered for the team.',
        },
        {
          n: '03',
          title: 'Invite the staff',
          body: 'Give each person a role, with its permissions. Free has one seat, Amateur two, Semi-Pro and Pro an unlimited number.',
        },
      ],
    },
    stay: {
      id: 'rester',
      eyebrow: 'Staying',
      title: 'Stay with Teamworks in two cases.',
      lede: 'Choose the tool that covers your department. If one of these two needs is central for you, Teamworks AMS meets it today.',
      items: [
        {
          title: 'Your sensors must stream live',
          body: `Teamworks AMS announces more than 100 integrations. STRIVN imports your GPS files after the session, ${b.gpsTiers}.`,
        },
        {
          title: 'Your medical team follows protocols',
          body: 'Teamworks AMS announces a medical module. STRIVN keeps the injury log, the return-to-play plan and the rehab sessions.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Your questions before leaving Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Can I bring my Opteamal history?',
          a: `Yes, by file. Export load, RPE and wellness as CSV or XLSX, then drop them into STRIVN. GPS exports import ${b.gpsTiers}, so during the ${b.trialDays}-day trial. Columns are recognised from their headers, then remembered for the team. For the first mapping, write to us at hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'I am still under contract. When can I switch?',
          a: `The notice period and renewal date are in your Opteamal or Teamworks contract. Open STRIVN alongside it, without club approval and without a card, with ${b.trialDays} days of Semi-Pro. You cancel on the date that suits you.`,
        },
        {
          q: 'How much does STRIVN cost?',
          a: `Prices are public: ${b.publicPrices}. ${b.trialSentence} You start without a bank card.`,
        },
        {
          q: 'What changes for the players?',
          a: 'They answer the check-in through a WhatsApp or email link, without installing an app. Automatic morning and evening sending is on Semi-Pro and Pro. The STRIVN Player and STRIVN Coach apps, on iOS and Android, add notifications.',
        },
        {
          q: 'Does STRIVN work in Dutch?',
          a: 'Yes. STRIVN comes in French, Dutch, English, German, Portuguese and Spanish, for the staff and for the players. Each staff member picks their language when opening their account.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Create your space and import your history.',
      body: `${b.trialSentence} Your staff joins you when they see your first reports.`,
      primaryCta: 'Create my space for free',
      secondaryCta: 'Talk to Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks and Teamworks AMS are trademarks of their respective owners. STRIVN is neither affiliated with nor endorsed by these companies. Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their owners. Information about Opteamal and Teamworks comes from public sources as of 15 October 2026.',
  };
}
