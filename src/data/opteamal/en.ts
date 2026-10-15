import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

export function enPage(b: LandingBits): SwitchPage {
  const costAnswer = `Prices are public: ${b.publicPrices}. ${b.gpsFiles} ${b.trialSentence} No card. Pro stays custom.`;

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Switch from Opteamal to STRIVN',
    meta: {
      title: 'Why switch from Opteamal to STRIVN',
      description:
        'Opteamal, a Belgian vendor, was acquired by Teamworks on 18 December 2025. A factual comparison: public STRIVN prices, an account with no club approval, check-in by link. Teamworks AMS announces integrations, a medical module and certifications.',
      ogTitle: 'Using Opteamal? Why switch to STRIVN',
      ogDescription:
        'Acquired by Teamworks on 18 December 2025. Public STRIVN prices, self-serve start, check-in by link. The comparison gives Opteamal only public facts.',
      twitterTitle: 'Why switch from Opteamal to STRIVN',
      twitterDescription: 'A factual comparison for clubs still on Opteamal, now with Teamworks.',
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, the control tower for the performance staff',
    },
    hero: {
      eyebrow: 'Opteamal is joining Teamworks',
      titleLead: 'Using Opteamal?',
      title: 'Here is why you switch to STRIVN.',
      lede: 'On 18 December 2025, Teamworks acquired Opteamal, the Belgian vendor, and is folding it into Teamworks. This page sets their public facts next to what STRIVN ships. Where an Opteamal detail is not public, we say so, instead of inventing a gap.',
      primaryCta: 'Switch to STRIVN',
      secondaryCta: 'See the comparison',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparison',
      title: 'Opteamal (now Teamworks) and STRIVN, point by point.',
      lede: 'Two columns of facts, then a reading. The edge goes to Teamworks AMS when their public announcements say so. It goes to STRIVN when the contrast is public. Otherwise the reading stays uncalled.',
      columns: {
        criterion: 'Criterion',
        opteamal: 'Opteamal (now Teamworks)',
        strivn: 'STRIVN',
        verdict: 'Verdict',
      },
      rows: [
        {
          criterion: 'Who decides what comes next',
          opteamal:
            'Opteamal, a Belgian vendor, was acquired by Teamworks on 18 December 2025 and is being folded into Teamworks. Roadmap and migration: Teamworks.',
          strivn: 'An independent vendor. The roadmap is STRIVN’s.',
          verdictLead: 'Fact',
          verdict: 'Since the acquisition, what comes next for Opteamal is decided at Teamworks.',
        },
        {
          criterion: 'Price',
          opteamal: 'On quote, not public.',
          strivn: `Public: ${b.publicPrices}.`,
          verdictLead: 'STRIVN',
          verdict: 'STRIVN prices are on the page, except Pro, which stays custom.',
        },
        {
          criterion: 'How you buy',
          opteamal: 'Enterprise sales.',
          strivn:
            'The staff creates the account: name, email, phone, password, language, country. No club or federation approval. 30 days of Semi-Pro at sign-up, no card.',
          verdictLead: 'STRIVN',
          verdict: 'Self-serve start at STRIVN. Enterprise sales on their side.',
        },
        {
          criterion: 'Integrations',
          opteamal:
            'Teamworks AMS announces more than 100 integrations. The list that still applies to an Opteamal club is not public here.',
          strivn:
            'Files only, on Semi-Pro and Pro: CSV, XLSX, Catapult, STATSports, SPT / GameTraka traces. No live GPS connector, no public API.',
          verdictLead: 'Teamworks AMS',
          verdict: 'The announced integrations are a Teamworks AMS advantage. STRIVN stops at files.',
        },
        {
          criterion: 'Medical',
          opteamal:
            'Teamworks AMS announces a medical module. The detail still specific to Opteamal is not public here.',
          strivn:
            'Injury log, return-to-play checklist and plan, rehab sessions. Medical board on Semi-Pro and Pro. No protocol library.',
          verdictLead: 'Teamworks AMS',
          verdict: 'The announced medical module is a Teamworks AMS advantage.',
        },
        {
          criterion: 'Certifications',
          opteamal: 'Teamworks AMS announces ISO 27001 and SOC 2.',
          strivn:
            'No certification claimed. HTTPS in transit. Access, correction, erasure or a copy via hello@strivn.net. No hosting country and no processing agreement named.',
          verdictLead: 'Teamworks AMS',
          verdict: 'The announced certifications are a Teamworks AMS advantage.',
        },
        {
          criterion: 'Languages',
          opteamal: 'Not public on this page.',
          strivn: 'French, English, Dutch, German, Portuguese and Spanish. French is the source text.',
          verdictLead: 'No call',
          verdict: 'STRIVN documents six languages, including French and Dutch. The Opteamal detail is not public.',
        },
        {
          criterion: 'Player check-in',
          opteamal: 'Not public on this page.',
          strivn:
            'WhatsApp or email link, no app. Automatic sends on Semi-Pro and Pro. WHOOP can prefill the check-in on those tiers.',
          verdictLead: 'No call',
          verdict: 'STRIVN documents the link with no app. The Opteamal equivalent is not public.',
        },
        {
          criterion: 'Sideline',
          opteamal: 'Not public on this page.',
          strivn:
            'Attendance, a timer per block, teams and score. An offline log on the phone, synced when you are back.',
          verdictLead: 'No call',
          verdict: 'STRIVN documents offline mode. The Opteamal equivalent is not public.',
        },
        {
          criterion: 'Load and GPS',
          opteamal: 'Not public on this page.',
          strivn:
            'The week in AU, ACWR 7 days over 28, readings Ready, Follow-up, At risk. GPS file import on Semi-Pro and Pro, including the calculation of raw SPT traces.',
          verdictLead: 'No call',
          verdict: 'STRIVN documents load and GPS files. The Opteamal detail is not public.',
        },
      ],
      note: 'Opteamal and Teamworks facts are limited to public information as of 15 October 2026: the acquisition, quote-only pricing, enterprise sales, and Teamworks AMS announcements (integrations, medical module, ISO 27001, SOC 2). The rest of their column is marked not public.',
    },
    reasons: {
      id: 'raisons',
      eyebrow: 'Why switch',
      title: 'Eleven reasons to switch',
      lede: 'What STRIVN ships, and the one new fact on the Opteamal side: since the acquisition, what comes next is decided at Teamworks.',
      items: [
        {
          title: 'The prices are on the page',
          body: `Free, Amateur, Semi-Pro and Pro: ${b.publicPrices}. The same amounts as the catalogue. Pro stays custom, as a quote, not as a hidden price on the other tiers.`,
        },
        {
          title: 'You open the account yourself',
          body: 'Name, email, phone, password, language, country. No club or federation approval. The account starts on 30 days of Semi-Pro, no card.',
        },
        {
          title: 'Players answer from a link',
          body: 'Wellness (fatigue, sleep, mood, stress) and RPE, by WhatsApp or email, no app. The automatic morning and evening send is on Semi-Pro and Pro. WHOOP can prefill the check-in on those tiers.',
        },
        {
          title: 'The sideline works offline',
          body: 'Attendance, a timer per block, teams and score. The phone keeps a log and syncs it when you are back. If duration was not entered, load uses the time actually played.',
        },
        {
          title: 'The week is planned in AU',
          body: 'Target, planned against actual, a per-player adjustment (scale, exclusion or individual work) without changing the team grid or the call-up. Load taken from GPS needs Semi-Pro.',
        },
        {
          title: 'The drill animates and shares',
          body: 'Football, handball, rugby, basketball, volleyball. Animation, PNG or WebM download, PNG shared from the phone share sheet. 3 boards and 3 templates on Free, no cap from Amateur.',
        },
        {
          title: 'French and Dutch, plus four languages',
          body: 'French, English, Dutch, German, Portuguese and Spanish, on the coach side and the player side. French is the source text. Dutch is there for Belgian staffs.',
        },
        {
          title: 'Each role has its own rights',
          body: 'Head coach, assistant, medical, physio, S&C coach, analyst, delegate, recruiter, goalkeeper coach. Free: owner only. Amateur: one extra invitation. Semi-Pro and Pro: no cap.',
        },
        {
          title: 'An absence drops the call-up',
          body: 'An absent player drops out of training and match call-ups. A player limited in training drops out of matches. Treatment, an individual programme and an explicit camp selection stay available.',
        },
        {
          title: 'The SPT trace is recalculated',
          body: `Files only, ${b.gpsTiers}: CSV or XLSX (Catapult, STATSports, or any table) and SPT / GameTraka traces (.gt). STRIVN calculates distance and speed zones on the raw trace. No live connector.`,
        },
        {
          title: 'What comes next for Opteamal is decided at Teamworks',
          body: 'Since 18 December 2025, the Opteamal roadmap and migration sit with Teamworks. That is a change of who decides, not a judgement on the product. STRIVN stays an independent vendor.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'How you switch',
      title: 'Three steps. Not an integration project.',
      lede: 'You can open a space while your Opteamal contract is still running. We do not know your notice period: it is in your contract, not here.',
      steps: [
        {
          n: '01',
          title: 'Create the space',
          body: 'Name, email, phone, password, language, country. No club approval. The account starts on 30 days of Semi-Pro, no card.',
        },
        {
          n: '02',
          title: 'Import the history',
          body: 'CSV or XLSX for load, RPE and wellness. GPS exports (Catapult, STATSports, SPT / GameTraka) come in on Semi-Pro, so during the trial. Columns are guessed, then remembered for the team.',
        },
        {
          n: '03',
          title: 'Invite the staff',
          body: 'One role per person, with its permissions. On Free, the owner only. On Amateur, one extra invitation. On Semi-Pro and Pro, no cap.',
        },
      ],
      offer: {
        tag: 'For clubs leaving Opteamal',
        title: 'We can do the first column match with you.',
        body: 'The three steps are enough to start. If you want us to match the columns with you, once, write to us. The hands-on offer is still to be confirmed.',
        cta: 'Talk about my migration',
        href: mail('Migration from Opteamal'),
      },
    },
    stay: {
      id: 'rester',
      eyebrow: 'Staying',
      title: 'When Opteamal or Teamworks remains the right choice.',
      lede: 'Switching is not the right move in these cases. We write them down so the page stays usable.',
      items: [
        {
          title: 'The enterprise medical module',
          body: 'Teamworks AMS announces a medical module. STRIVN covers the log, return to play and rehab, not a protocol library.',
        },
        {
          title: 'ISO 27001 and SOC 2',
          body: 'Teamworks AMS announces them. STRIVN claims no certification, no hosting country and no processing agreement.',
        },
        {
          title: 'Live integrations',
          body: 'Teamworks AMS announces more than 100 integrations. STRIVN imports files and has no live GPS connector and no public API.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'The questions when you leave Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Can I bring my Opteamal history?',
          a: 'By file, yes. Load, RPE and wellness: CSV or XLSX. GPS exports (CSV, XLSX, Catapult, STATSports, or an SPT / GameTraka trace) import on Semi-Pro and Pro, the tier of the 30-day trial. Column matching is guessed from known headers, then saved for the team. There is no public API to empty an Opteamal account. Write to us at hello@strivn.net if you want to do the first match with us.',
          mailto: mail('Migration from Opteamal'),
        },
        {
          q: 'I am still under contract. When can I switch?',
          a: 'Notice, renewal and the cost of leaving are in your Opteamal or Teamworks contract. We do not publish them, and this page does not tell you to break it. You can create a STRIVN space alongside it: no club approval, no card, on 30 days of Semi-Pro.',
        },
        {
          q: 'What does it actually cost?',
          a: costAnswer,
        },
        {
          q: 'What changes for the players?',
          a: 'To answer, they install nothing. A WhatsApp or email link is enough for wellness, RPE and reminders. The automatic send is on Semi-Pro and Pro. STRIVN Player and STRIVN coach (iOS and Android) exist as well: they are shells around the web app, with notifications, and a sideline timer on the coach app.',
        },
        {
          q: 'And languages, for a Belgian club?',
          a: 'STRIVN is in French, English, Dutch, German, Portuguese and Spanish, on the coach side and the player side. French is the source text. Dutch is included. The languages Opteamal still serves are not detailed here: that is not public on this page.',
        },
        {
          q: 'What do I not get back?',
          a: 'The medical module announced by Teamworks AMS, the ISO 27001 and SOC 2 certifications, and the more than 100 integrations they announce. STRIVN does not claim them. The injury log, return to play and file import are shipped.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Semi-Pro trial',
      title: 'Create the space and import your history.',
      body: `${b.trialSentence} Your Opteamal contract does not end on its own: you choose the moment.`,
      primaryCta: 'Create my space',
      secondaryCta: 'Talk about my migration',
      secondaryHref: mail('Migration from Opteamal'),
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks and Teamworks AMS are trademarks of their respective owners. STRIVN is not affiliated with these companies and is not endorsed by them. Catapult, STATSports, SPT, GameTraka and WHOOP are trademarks of their owners. GPS import is by file; WHOOP can prefill the check-in on Semi-Pro and Pro. Information on Opteamal and Teamworks comes from public sources as of 15 October 2026 and may change. STRIVN price figures: the catalogue in force.',
  };
}
