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

## Brand Personality

STRIVN is intelligent, calm, and elite. Its voice is factual, modern, composed, and concise. It should feel like a high-performance operating system for a performance staff, not a consumer fitness app, a medical portal, or a loud sports brand. The emotional effect should be confidence, clarity, and control.

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
