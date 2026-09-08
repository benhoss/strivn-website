# Product

Positioning, ICP and pricing below descend from **`strivn-app/docs/STRATEGY.md`** (2026-08-30), which is the source of truth and supersedes anything here that disagrees with it. This file exists so the website's copy and design work can be done without reading the whole strategy; when the two diverge, the strategy wins and this file is wrong.

## Register

brand

## Users

**Primary: the strength & conditioning coach, or head of performance.** Not the head coach. That is a deliberate move, made on what early real users showed: the strongest perceived value comes from performance staff.

The head coach has low pain, many free alternatives (Spond, SportEasy, Heja), a low cost of switching, and limited willingness to pay. The S&C coach has real pain, few and expensive alternatives, a high cost of switching, and a budget that exists.

What that person does today: export the GPS, then cross it **by hand, usually in Excel**, against RPE, wellness, the plan, the history, the tests, the injuries, minutes played and the drills actually run. **That last mile is what STRIVN takes over.** It is the sentence to write copy against.

**The coach is still a central user, no longer the commercial wedge.** They feed the loop — exercises, sessions, call-ups, match results — and the free tier is built for them. Secondary users: the rest of the staff (physio, analyst), and clubs or academies that later standardise across several teams.

## Product Purpose

**STRIVN turns GPS data into performance intelligence.**

The GPS is not the product. The GPS is the sensor. STRIVN is the intelligence layer above it, where the sensor's numbers meet everything the sensor cannot know: what the staff had planned, what the player felt, and which drill produced the load.

Commercial framing: *you have already paid for your GPS. STRIVN is what makes the data worth what you paid.*
Premium framing: *professional performance intelligence without the professional-club price tag.*

Success is not "a coach manages a team for free". Success is **a performance lead stops rebuilding their weekly cross-reference by hand**, and the free tier keeps feeding the loop that makes that possible.

## The four tiers

Prices and entitlements live in `strivn-app/docs/specs/pricing-packaging-2026-08.md`. What matters for copy is who each tier is for:

| Tier | Who it is for |
|---|---|
| **Free** | A coach on their own with one team and no budget to ask for. |
| **Amateur** | The same coach, paying out of their own pocket to stop rebuilding the same week twice. |
| **Semi-Pro** | The S&C coach who already exports GPS and crosses it by hand. Club budget. **The tier the product is aimed at.** |
| **Pro** | A performance unit with several teams on GPS and data that has to get out. Quoted, never priced publicly. |

The commercial line that separates the top two: **Semi-Pro, import your GPS. Pro, connect your GPS.**

## What we may not claim yet

The product is ahead of the thesis in places and behind it in others. These are not style preferences; publishing them would be false.

- **No GPS vendor connector exists.** Not Catapult, STATSports, Polar or Kinexon. Hardware agnosticism is real *at CSV import* — the parser reads your file's headers rather than expecting a vendor format. "Connect your GPS" is a Pro engagement built with the club, never a shipped integration.
- **No public API exists.** API access is a Pro promise, not a live endpoint.
- **No AI credit scale is published**, and none may be invented. The model — a monthly allowance per tier, consumption by use, top-up without changing tier — can be described. Numbers cannot, until they are calibrated on real costs.
- **No paid tier can be bought online.** Nothing in the app is purchasable above Free. Every paid CTA routes to a human.
- **Exercise-level GPS exists as measurement, not yet as a profile over time.** The aggregated load signature of a drill is the missing brick, and it is what justifies Pro. Do not describe it as shipped.

## Voice

STRIVN is intelligent, calm and elite. Those are outcomes of the rules below,
not instructions: an aphorism satisfies every one of those adjectives, and the
site spent a year proving it.

STRIVN writes the way a performance coach who has done the work explains, to a
peer, what they are about to gain: second person, verb first, numbers where an
adjective would go, the trade's vocabulary as is, the marketer's vocabulary
banned. Formal "vous". STRIVN says "we" when it commits to something. Benoit
says "I" in mail.

Between the two references we hold, the grammar is Stripe's and the proof
structure is Teamworks'. The lexicon is neither: no growth verbs, no capitalised
abstractions. Analysis and before/after in `docs/audits/2026-09-08-tone-of-voice.md`.

Every rule below is testable. Copy that breaks one is rewritten, not argued.

1. **The reader is the subject.** Headlines and body in the second person. A
   headline that promises starts with the verb: « Importez l'export GPS, quel
   que soit le capteur », not « Vos données GPS intégrées, sans ressaisie ».
   The product is the subject only to describe a mechanism (« STRIVN calcule
   l'ACWR chaque nuit »).
2. **Promise before riddle.** Read alone, a headline says what the staff
   gains. If the body is needed to understand the headline, the headline is
   wrong.
3. **Assert, do not rebut.** No negation in an H1 or H2. In body copy, at most
   one rebuttal per page (« X, pas Y », « Aucun… », « Rien à… », « n'est pas
   votre problème »), kept for a product truth that cannot be said otherwise.
4. **One sentence, one idea.** Subject, verb, object. No em dashes. Colons
   only before a list or a figure. Body sentences 12 to 20 words. Headlines
   9 words or fewer.
5. **A number is worth an adjective.** Every section carries at least one
   verifiable quantity. No intensity adjectives: *puissant, ultime, incroyable,
   révolutionnaire, complet, intelligent* (as a selling point). Numbers are
   real or from the product; "What we may not claim yet" applies.
6. **Proof has a name.** Customer result: `[club or staff] + verb + figure +
   avec STRIVN`. Testimonial: quote + first and last name + role + club. Until
   the name exists, the proof is not published; « des staffs pro nous font
   confiance » is banned.
7. **"Nous" exists.** STRIVN speaks in the first person plural for what it
   commits to (support, data, delays, roadmap), never to describe itself.
8. **The trade's words, untranslated; the marketer's words, banned.** Keep:
   ACWR, RPE, UA, HSR, readiness, check-in, microcycle, wellness, séance,
   convocation, staff, préparateur, kiné, analyste. Banned: *solution,
   plateforme (unifiée, tout-en-un), écosystème, expérience, booster,
   transformer, révolutionner, accélérer* (except literal), *seamless,
   holistique, agentique, native IA, opérateur*, and English where French
   exists. Navigation labels that already say « Plateforme » are labels, not
   copy; they change with the nav, not with a page.
9. **Quiet punctuation.** Site: no exclamation marks, no emoji, no em dashes,
   no emphatic capitals. A headline that is a sentence ends with a period.
   Mail: same, with one emoji tolerated per send, never in the subject line.
10. **One spelling.** STRIVN, everywhere, mail included.
11. **The hero phrase does not spread.** « Le système d'exploitation du staff
    performance » is the positioning Benoit chose and keeps (decided
    2026-09-08); it is also Teamworks' registered H1 in translation. It stays
    in the hero and the meta title and nowhere else: no section, mail or post
    reuses « système d'exploitation » or « operating system ».
12. **Mail is the same voice, signed with a first name.** Subject: one concrete
    gain, 50 characters or fewer, never « nouveautés de la semaine ». Opening:
    the news in one sentence, no « Hello ! », no « Voici ce qui est arrivé ».
    Section headings imperative. "Je" allowed for a personal commitment
    (« je bascule votre compte »). Sign-off « Bonne journée, Benoit » stays.

Product mock-ups inside the pages (the CSS-drawn dashboards, phones and
consoles) show product strings, not copy: player names, KPIs and UI labels
stay as the product shows them. Rules 4 and 9 still apply to their sentences.

### Patterns

- **H2**: `imperative verb + object + measurable gain`.
  « Importez l'export GPS, quel que soit le capteur. »
- **Body**: one or two mechanism sentences, then a figure.
- **Proof**: « [Club] suit [N] joueurs sur STRIVN depuis [mois]. »
- **CTA pair**: self-serve and human. « Commencer gratuitement » / « Parler à Benoit ».
- **Mail**: subject ≤ 50 chars → preheader = the gesture that enables it →
  first sentence = the news → imperative H2s → one primary CTA → signature.

### Targets (to be checked by `scripts/lint-copy.mjs`)

H2 imperative or "vous"-subject ≥ 60 % · negation in H1/H2 = 0 · rebuttals per
page ≤ 1 · em dashes = 0 · exclamation = 0 · emoji site 0, mail ≤ 1 · figures
per section ≥ 1 · "nous" 0.3–0.8 per 100 words · banned words = 0 · "Strivn" = 0
· median body sentence 12–18 words.

## Anti-references

Avoid gym-bro aesthetics, hype-led sports marketing, overly medical interfaces, generic startup SaaS cream layouts, and noisy analytics dashboards that lead with charts instead of decisions. Avoid decorative AI tropes, stock future-tech visuals, consumer wellness cues, crypto aesthetics, fantasy sports energy, and template-like card grids that make the product feel interchangeable.

Four positions we do not take, from the strategy: we are not a general club-management platform, we do not race Opteamal on features, we do not sell the CSV (it is an implementation), and we do not sell dashboards. The value runs `data → context → insight → action`; a chart is only the last step's output.

Against Opteamal and Teamworks specifically, the pitch is never "cheaper". It is *keep what works, and show us what you still do in Excel.*

## Design Principles

- Lead with the decision, then justify it with the signal underneath.
- Open on the buyer's own situation, not on our capability. The strategy's opening question is *you have GPS — what do you do with the data after the export?*
- Let the free tier prove itself without a budget conversation, and let the paid tier be worth having one.
- Build trust through precision, restraint, and consistency. Say what is not yet true.
- Use motion and atmosphere to suggest intelligence in motion, not spectacle for its own sake.
- Treat the staff's time as scarce; clarity beats completeness.

## Accessibility & Inclusion

Target WCAG AA contrast and keyboard-accessible interaction patterns. Respect reduced motion preferences, keep copy concise for rapid scanning, and preserve readability across laptop and mobile screens commonly used by staff in training environments.
