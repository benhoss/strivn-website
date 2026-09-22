---
name: STRIVN Website
description: Free team-management app for coaches and clubs.
colors:
  void: "#07080F"
  void-deep: "#050610"
  void-soft: "#0A0C17"
  navy-950: "#03091A"
  navy-900: "#06152B"
  navy-850: "#0B1E3A"
  navy-800: "#112849"
  navy-700: "#1A3258"
  navy-600: "#294471"
  navy-500: "#3D5A8A"
  navy-300: "#8497BD"
  navy-200: "#B5C2D7"
  soft-white: "#F8FAFC"
  electric: "#2D7FF9"
  electric-500: "#4F94FB"
  performance: "#27D7A1"
  warning: "#FFB020"
  risk: "#FF5C5C"
  paper: "#E6EAF1"
  paper-ink: "#1C2638"
typography:
  display:
    fontFamily: "Archivo (wdth 78), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(44px, 6.6vw, 96px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo (wdth 82), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(32px, 4.6vw, 58px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo (wdth 90), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo (wdth 100), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  btn: "6px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.electric}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.btn}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.btn}"
    padding: "10px 18px"
  card:
    backgroundColor: "{colors.navy-850}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.navy-200}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: STRIVN Website

## 1. Overview

**Creative North Star: "The Calm Performance Room"**

STRIVN should feel like a dark, precise operations room for a serious coach: quiet surfaces, sharp signal, and enough atmosphere to imply intelligence working in the background. The website is a brand surface, but it behaves like the product it sells: decision-first, compact, and controlled.

The system rejects loud sports marketing, generic AI decoration, consumer wellness softness, and analytics-dashboard overload. Visual ambition comes from product proof, motion sequencing, and disciplined contrast rather than decorative flourishes.

**Key Characteristics:**

- Dark-mode native with navy-tinted depth.
- Electric Blue is the only CTA color.
- Status colors only communicate readiness, monitor, and risk.
- Hairlines separate surfaces; shadows appear only on floating chrome.
- Motion is calm, short, and tied to product understanding.

## 2. Colors

The palette is a restrained dark system with one action accent and three strict status colors.

### Primary

- **Electric Command** (`electric`): the sole CTA and focus color. Use for primary buttons, links on neutral dark surfaces, and narrow interaction emphasis.

### Secondary

- **Performance Signal** (`performance`): player ready, on target, or within band. It is not a generic success color.
- **Monitor Signal** (`warning`): moderate fatigue, edge of band, or a state that needs attention.
- **Risk Signal** (`risk`): elevated injury risk or do-not-train meaning only.

### Neutral

- **Void Floor** (`void`, `void-deep`, `void-soft`): page atmosphere and recessed backgrounds.
- **Navy Surface Ramp** (`navy-950` through `navy-200`): panels, borders, muted copy, and layered UI surfaces.
- **Soft White** (`soft-white`): primary foreground on dark surfaces.

### Named Rules

**The Status-Is-Signal Rule.** Green, yellow, and red are forbidden as decoration. They must describe player state or training risk.

**The One CTA Rule.** Primary calls to action are Electric Blue. Do not introduce green save buttons, red form errors, or alternate accent CTAs.

## 3. Typography

**Display Font:** Archivo (variable width) at a narrow width, with system sans fallbacks. Since the 2026-09 redesign it replaces Inter.
**Body Font:** Archivo at normal width.
**Label/Mono Font:** JetBrains Mono for figures, timestamps, section stamps, technical labels and compact metadata.

**Character:** a scoreboard register without the shouting. The narrow display width gives headlines the density of a match sheet; the 600 ceiling keeps them calm.

### Hierarchy

- **Display** (600, wdth 78, `clamp(44px, 6.6vw, 96px)`, 0.95): one hero statement per page (`st-display`; sub-page heroes use `st-h1`).
- **Headline** (600, wdth 82, `clamp(32px, 4.6vw, 58px)`, 1.02): section heads (`st-h2`).
- **Title** (600, wdth 90, 21px, 1.2): panel and item titles (`st-h3`).
- **Body** (400, 16px, 1.6; lede 17-19px): default copy, capped around 60-65ch.
- **Label** (500, 11px mono, +0.08em, uppercase): overlines, stamps, chips, metadata.

### Named Rules

**The 600 Ceiling Rule.** STRIVN type never needs 700 or 800 weight. Importance comes from placement, scale, and contrast.

**The No-Hype Rule.** No emoji, no exclamation marks, no all-caps body copy, and no sports-brochure shouting.

## 4. Elevation

Depth is mostly tonal. Panels separate through navy ramp shifts and 1px hairline borders, not broad card shadows. Shadows are reserved for floating chrome such as popovers, modals, device frames, and atmospheric hero elements.

### Shadow Vocabulary

- **Floating Chrome** (`0 4px 12px rgba(3, 9, 26, 0.4), 0 2px 4px rgba(3, 9, 26, 0.2)`): compact overlays or elevated controls.
- **Large Floating Chrome** (`0 16px 48px rgba(3, 9, 26, 0.55), 0 4px 12px rgba(3, 9, 26, 0.3)`): larger floating panels and demo device surfaces.

### Named Rules

**The Hairline-First Rule.** At rest, cards and panels use a 1px border and tonal surface shift. If a surface looks like a generic shadow card, remove the shadow.

## 5. Components

### Buttons

- **Shape:** compact rectangle with a 6px radius.
- **Primary:** Electric Blue fill, Soft White text, 10px 18px padding, medium weight.
- **Hover / Focus:** hover lightens the Electric Blue; focus uses a clear Electric Blue outline or ring.
- **Secondary / Ghost:** transparent fill, hairline border or muted text, no status colors.

### Chips

- **Style:** pill shape, 11-13px label type, subtle border or status-tinted background.
- **State:** status chips use the semantic status color as text or a low-opacity tint only.

### Cards / Containers

- **Corner Style:** restrained 8-12px radius.
- **Background:** navy-tonal surfaces over Void.
- **Shadow Strategy:** no shadow at rest unless the component is floating chrome.
- **Border:** 1px white hairline at low opacity.
- **Internal Padding:** 16px for dense UI, 24px for comfortable marketing panels.

### Inputs / Fields

- **Style:** transparent dark fill, 1px border, 8px radius, 36px height when used in product-like controls.
- **Focus:** Electric Blue border or ring. Do not use red unless the error relates to player-risk semantics.
- **Error / Disabled:** neutral muted states first; reserve Risk Red for player-health meaning.

### Navigation

- **Style:** compact, logo-led, muted by default, Soft White on hover or active state.
- **Mobile:** prioritize readable labels and stable touch targets over cramming every chapter link into a single row.

### Week rail and stamps

The homepage follows the performance coach's week. A rail under the header lists the days; each section carries a mono stamp in a left column (day, time, what: `MERCREDI · 07:45 · READINESS`). Use a stamp only when it encodes a real moment or sequence; otherwise a plain section head.

### Paper

`paper` is the only light surface: the spreadsheet STRIVN replaces, drawn slightly askew with its `#REF!`. Never use it for anything else.

### At rest

Every page is legible without scrolling or JavaScript: no section waits at opacity 0, no figure counts up from zero. Motion starts from the complete state.

### Implementation

Tokens and primitives live in `src/styles/system.css` (Tailwind theme colours `bg-void`, `text-ink-2`, `border-line`, `text-ready`… and `st-*` classes). Components never write hex literals. Reference rendering: `redesign-mockup.html`.

### Signature Product Demo

The homepage hero is the primary proof component: a raw GPS export whose rows resolve, one by one, into a decision per player (Prêt, Surveiller, Alléger) with the proposal and its sources. It starts from the resolved state and replays the scan.

## 6. Do's and Don'ts

### Do:

- **Do** lead each surface with the decision or product proof before raw metrics.
- **Do** use Electric Blue for primary actions and focus states.
- **Do** keep panels dense but calm with 1px hairlines, 8-12px radii, and clear typography.
- **Do** respect reduced motion and keep choreography under control.
- **Do** make the weekly coach routine, player reply loop, and channel-agnostic communication concrete when explaining the product.

### Don't:

- **Don't** use gym-bro aesthetics, hype-led sports marketing, or fantasy sports energy.
- **Don't** make the site feel overly medical, consumer wellness, crypto, or stock future-tech.
- **Don't** use generic startup SaaS cream layouts.
- **Don't** lead with noisy analytics dashboards or charts instead of decisions.
- **Don't** use colored side-stripe borders, gradient text, glassmorphism, or repeated template card grids.
- **Don't** introduce new brand colors, heavy shadows, or rounded 32px cards.
