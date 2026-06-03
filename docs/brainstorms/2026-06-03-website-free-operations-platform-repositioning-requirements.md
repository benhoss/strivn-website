---
date: 2026-06-03
topic: website-free-operations-platform-repositioning
---

# STRIVN Website Free Operations Platform Repositioning Requirements

## Summary

Rework the STRIVN website around a new product position: STRIVN is a free, complete operations platform for individual coaches that gives them time back for real coaching while centralizing team information into better insight. The paid path is organizational expansion, not feature access: Coach is free for one team, while Club and Club Pro are coming-soon plans for clubs that want multi-team coordination.

---

## Problem Frame

The current website over-centers WhatsApp and still presents pricing around included WhatsApp messages and message packs. That conflicts with the new product strategy: communication is core, WhatsApp is only one channel, and coaches should not need club approval to start using STRIVN.

The website must now reduce adoption friction for individual coaches while preserving a credible monetization path for clubs. A coach should understand that they can run one team for free with the full coach experience. A club should understand that payment begins when the organization wants to coordinate multiple teams, shared staff, shared medical workflows, and reporting across the club.

---

## Key Decisions

- **Lead with coach operations value.** The hero promise should focus on giving coaches time back and turning centralized team information into better insight, not on price alone.
- **Make free complete, not limited.** The free Coach plan is the complete one-team coach experience, including AI, events, attendance, injuries, reports, tactics, RSVP, and communication generation.
- **Treat communication as channel-agnostic.** The communication story should show one workflow that can reach players through web, mobile, WhatsApp, email, and future channels.
- **Move monetization to club coordination.** The primary paywall is multi-team club management, shared staff and medical workflows, club reporting, and organization-level administration.
- **Keep WhatsApp visible but demoted.** WhatsApp should remain concrete as a familiar channel, but the product must not appear dependent on WhatsApp or priced around WhatsApp delivery.

---

## Actors

- A1. **Individual Coach:** Starts alone, manages one team, wants less admin work and better visibility without needing club approval.
- A2. **Player:** Receives event communication through a convenient channel and responds through a low-friction RSVP flow.
- A3. **Staff Member:** Helps the coach manage medical, performance, training, or reporting work for the same team.
- A4. **Club Decision-Maker:** Considers STRIVN when multiple teams, shared staff, and club-wide reporting become valuable.
- A5. **Club Staff Operator:** Works across teams as a coordinator, medical staff member, sporting director, or administrator.

---

## Requirements

**Positioning and Narrative**

- R1. The website must position STRIVN as a free operations platform for coaches, not as a WhatsApp-first product or a premium messaging tool.
- R2. The hero must communicate two linked outcomes: coaches get time back for their real work, and centralized team information creates better insight.
- R3. The page must make the complete free Coach experience visible early enough that a coach understands they can start without club, board, president, or treasurer approval.
- R4. The page must present STRIVN as useful for ambitious individual coaches while still feeling credible for clubs, academies, and staff structures.

**Free Coach Experience**

- R5. The free Coach plan must be described as one team with unlimited players and unlimited staff members.
- R6. The free Coach plan must include events, training sessions, matches, attendance tracking, injury tracking, tactical boards, reports, AI assistant, player management, medical notes, individual programs, event communication, RSVP links, and communication templates.
- R7. The website must avoid language that implies core coach features are limited, trial-only, or locked behind payment.
- R8. The CTA language must support immediate free coach adoption, such as creating a team or starting for free.

**Communication and RSVP**

- R9. Communication must be presented as a core workflow available to free coaches.
- R10. Every event type should be described as supporting generated communication and reusable templates.
- R11. The website must explain the default free communication model: STRIVN generates the final message, then the coach copies, receives, forwards, or distributes it manually through their chosen channel.
- R12. The communication story must include unique RSVP links that let players answer present, absent, or uncertain, with optional context such as comments, injury reports, or absence reasons.
- R13. The website must communicate that STRIVN is channel-agnostic across web, mobile, WhatsApp, email, and future channels.
- R14. WhatsApp must be shown as one available channel, not as the product itself or as the basis for pricing.

**Club Upgrade Path**

- R15. The Club plan must be framed around managing an entire club, not unlocking more software features for one coach.
- R16. Club must include multiple teams, club-wide dashboards, shared player database, shared medical staff, shared coordinators, sporting director access, club reporting, cross-team injury tracking, and multi-team administration.
- R17. Club Pro must be framed as a coming-soon advanced organization plan with advanced reporting, advanced analytics, API access, and organization-level insights.
- R18. Club and Club Pro pricing must not invent fixed prices. They should be marked as coming soon and use a contact, demo, or interest-capture CTA.

**Pricing and Gating**

- R19. The website must remove WhatsApp-centric pricing, WhatsApp message allowances, and WhatsApp pack add-ons.
- R20. The pricing section must show Coach as free and complete for one team.
- R21. The pricing section must make the primary paywall multi-team club management, not AI, reports, injuries, tactics, communication generation, RSVP, or attendance.
- R22. The copy must avoid presenting WhatsApp costs as customer-facing value or customer-facing plan logic.

**Page Structure and Content Quality**

- R23. The page hierarchy must avoid becoming a raw feature checklist; feature breadth should support the core promise of time saved and better insight.
- R24. The communication section should remain a full section, but it must shift from “WhatsApp as OS” to “one event communication workflow across channels.”
- R25. The product demo should be updated to show event creation, communication generation, RSVP collection, and insight returning to the coach.
- R26. The design and voice should remain calm, precise, elite, and coach-centered, consistent with `DESIGN.md` and `PRODUCT.md`.

---

## Key Flows

- F1. **Coach starts free**
  - **Trigger:** A coach lands on the website while looking for a way to reduce admin and centralize team operations.
  - **Actors:** A1
  - **Steps:** The coach sees the operations promise, understands the free Coach plan is complete for one team, and follows a free signup CTA.
  - **Outcome:** The coach can start without needing budget approval.
  - **Covered by:** R1, R2, R3, R5, R8, R20

- F2. **Event communication loop**
  - **Trigger:** A coach creates or prepares an event such as a training session, match, meeting, or team activity.
  - **Actors:** A1, A2
  - **Steps:** STRIVN loads useful communication defaults, generates the message, gives the coach a shareable output, and attaches a unique RSVP link.
  - **Outcome:** Players respond through the RSVP flow and the coach gets attendance and context back in STRIVN.
  - **Covered by:** R9, R10, R11, R12, R13, R24, R25

- F3. **Club expansion**
  - **Trigger:** A club wants shared visibility and coordination across multiple teams.
  - **Actors:** A4, A5, A3
  - **Steps:** The website explains the Club path as multi-team coordination, shared staff workflows, club-wide dashboards, and reporting.
  - **Outcome:** The club sees why payment starts at organization scale rather than with individual coach features.
  - **Covered by:** R15, R16, R17, R18, R21

---

## Acceptance Examples

- AE1. **Free coach plan does not look limited**
  - **Covers:** R5, R6, R7, R20, R21
  - **Given:** A coach scans the pricing section
  - **When:** They compare Coach, Club, and Club Pro
  - **Then:** They understand Coach is free and includes the full one-team operating workflow, while Club tiers are for multi-team organizations.

- AE2. **Communication is not WhatsApp-bound**
  - **Covers:** R11, R13, R14, R19, R24
  - **Given:** A visitor reads the communication section
  - **When:** They see WhatsApp mentioned
  - **Then:** They also see web, mobile, email, RSVP links, or copy-forward distribution, so WhatsApp reads as a channel rather than the product.

- AE3. **Club value is organizational**
  - **Covers:** R15, R16, R17, R18, R21
  - **Given:** A club decision-maker reads the upgrade path
  - **When:** They evaluate why they would pay
  - **Then:** The value is managing multiple teams, shared staff, medical workflows, and reporting, not unlocking AI or basic communication.

---

## Success Criteria

- A coach can understand within the first viewport that STRIVN saves time and centralizes team operations.
- A coach can understand before reaching pricing that starting is free and does not require club approval.
- The pricing section contains no WhatsApp message allowances, WhatsApp packs, or WhatsApp-based monetization.
- The page clearly states or demonstrates that communication works across multiple channels.
- Club and Club Pro are visible as future organization plans without inventing prices.
- The final page remains focused and scannable instead of listing every feature with equal visual weight.

---

## Scope Boundaries

### Deferred for later

- Fixed Club and Club Pro prices.
- Direct WhatsApp delivery, automated reminders, automated follow-ups, wellness check-ins, and injury check-ins as premium messaging enhancements.
- Detailed mobile app product marketing beyond positioning it as a future/preferred communication channel.
- Deep technical explanation of RSVP player recognition or persistent device tokens.

### Outside this product identity

- WhatsApp as the product.
- WhatsApp message packs as the monetization model.
- Paywalling the core coach workflow.
- Presenting STRIVN as only a medical tool, only a communication tool, or only an analytics dashboard.

---

## Dependencies / Assumptions

- The website can safely describe the Coach plan as free and complete for one team.
- Club and Club Pro can be described as coming soon without committing to launch dates or prices.
- The future mobile app is strategically relevant enough to mention as part of the channel-agnostic communication story.
- Existing brand constraints in `DESIGN.md` and `PRODUCT.md` remain valid unless explicitly revised later.

---

## Sources / Research

- `PRODUCT.md` defines the current audience, product purpose, brand personality, and design principles.
- `DESIGN.md` defines the current visual and voice constraints for the website.
- `src/data/landingContent.ts` currently contains WhatsApp-centered copy and WhatsApp message-based pricing that must be refactored.
- `src/components/PremiumLanding.astro` currently renders a dedicated WhatsApp section and pricing UI that will need to reflect the new plan and communication model.
