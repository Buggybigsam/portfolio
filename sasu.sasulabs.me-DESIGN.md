---
version: alpha
name: Sasu
description: |
  Sasu Isaac Osafo's design system projects a clean, approachable aesthetic
  rooted in purposeful minimalism and vibrant accent moments. The palette
  balances a light, neutral foundation with a rich electric-blue primary
  (#3B7EFF), creating an interface that feels both professional and energetic.
  Typography is generous and hierarchical, with display-scale headings
  commanding attention while body copy remains warm and readable. Decorative
  gradients layer transparently across sections, introducing subtle depth
  without visual noise. The overall mood is forward-thinking yet
  grounded—befitting a full-stack developer and AI enthusiast who values both
  technical precision and human connection. Micro-interactions (scale, lift,
  colour shifts on hover) reward engagement, signalling that this is a product
  crafted with intention.
source:
  url: "https://sasu.sasulabs.me"
  pagesAnalyzed: 1
  extractedAt: 2026-09-19
  tokensMeasured: true
colors:
  primary: "#FFFFFF"
  link: "#3B7EFF"
  surface: "#F4F6FB"
  on-primary: "#0B0C10"
  ink: "#0B0C10"
  body: "#465063"
  muted: "#9AA4B7"
  faint: "#FFFFFF"
  hairline: "#0F172A"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: 0px
  display-lg:
    fontFamily: Inter
    fontSize: 40.32px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: 0px
  heading-xl:
    fontFamily: Poppins
    fontSize: 34.56px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 7.6px
    textTransform: uppercase
  heading-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0px
  heading-md:
    fontFamily: Inter
    fontSize: 21.6px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0px
  heading-sm:
    fontFamily: Inter
    fontSize: 19.2px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px
  heading-xs:
    fontFamily: Inter
    fontSize: 18.4px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  body-xl:
    fontFamily: Inter
    fontSize: 16.8px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 15.2px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14.72px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-xs:
    fontFamily: Inter
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 5.04px
    textTransform: uppercase
  body-xs-2:
    fontFamily: Poppins
    fontSize: 13.6px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 1.09px
    textTransform: uppercase
  button:
    fontFamily: Inter
    fontSize: 12.8px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.64px
    textTransform: uppercase
  label-sm:
    fontFamily: Inter
    fontSize: 14.4px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  label-xs:
    fontFamily: Arial
    fontSize: 13.3333px
    fontWeight: 400
    letterSpacing: 0px
  caption-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 3.6px
    textTransform: uppercase
  caption-xs:
    fontFamily: Inter
    fontSize: 11.52px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: 0.69px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 12px
  sm: 14px
  md: 24px
  lg: 32px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 40px
  band: 44px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(15, 23, 42, 0.12) 0px 20px 45px 0px"
  md: "rgba(15, 23, 42, 0.08) 0px 4px 20px 0px, rgba(15, 23, 42, 0.06) 0px 1px 3px 0px"
  lg: "rgba(59, 126, 255, 0.2) 0px 14px 30px 0px"
elevationStrategy: progressive
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#F4F6FB"
    surfaceRaised: "#EBEDF2"
    text: "#0B0C10"
    textMuted: "#465063"
    border: "#0F172A"
    accent: "#3B7EFF"
    accentFg: "#000000"
    focusRing: "#3B7EFF"
    elevation: shadow
  dark:
    bg: "#0A0D14"
    surface: "#191C22"
    surfaceRaised: "#25282E"
    text: "#F7FAFF"
    textMuted: "#9DA0A6"
    border: "#31343A"
    accent: "#3B7EFF"
    accentFg: "#0B0B0C"
    focusRing: "#3B7EFF"
    elevation: "border+surface"
gradients:
  - context: section
    kind: linear
    value: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7))"
  - context: section
    kind: linear
    value: "linear-gradient(to top, rgba(15, 23, 42, 0.68), rgba(15, 23, 42, 0.32) 55%, rgba(0, 0, 0, 0) 85%)"
  - context: section
    kind: linear
    value: "linear-gradient(135deg, rgba(59, 126, 255, 0.95), rgba(121, 87, 255, 0.9))"
  - context: section
    kind: linear
    value: "linear-gradient(160deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.45))"
  - context: section
    kind: radial
    value: "radial-gradient(circle, rgba(59, 126, 255, 0.35), rgba(0, 0, 0, 0) 65%)"
    filter: "blur(160px)"
  - context: section
    kind: radial
    value: "radial-gradient(circle, rgba(142, 64, 255, 0.25), rgba(0, 0, 0, 0) 70%)"
    filter: "blur(160px)"
components:
  button-primary:
    typography: "{typography.button}"
    textColor: "{colors.ink}"
    border: "1px solid rgba(15, 23, 42, 0.12)"
    height: 49.6562px
    padding: "13.6px 24.8px 13.6px 24.8px"
    boxShadow: "rgba(59, 126, 255, 0.08) 0px 0px 0px 1px inset"
    rounded: 999px
    backgroundColor: "rgba(255, 255, 255, 0.65)"
  button-text:
    typography: "{typography.button}"
    textColor: "{colors.ink}"
    height: 47.6562px
    padding: "13.6px 24.8px 13.6px 24.8px"
    boxShadow: "rgba(59, 126, 255, 0.2) 0px 14px 30px 0px"
    rounded: 999px
  card:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
    border: "1px solid rgba(15, 23, 42, 0.08)"
    padding: "20px 22.4px 20px 22.4px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.surface}"
  card-lg:
    typography: "{typography.body-xl}"
    textColor: "{colors.body}"
  badge-icon:
    textColor: "{colors.body}"
    height: 17.5938px
    fontSize: 17.6px
    fontFamily: boxicons
    fontWeight: 400
    lineHeight: 1
  navigation:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
  link:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
    boxShadow: "rgba(15, 23, 42, 0.12) 0px 20px 45px 0px"
    rounded: "{rounded.md}"
  link-sm:
    textColor: "{colors.body}"
    border: "1px solid rgba(15, 23, 42, 0.08)"
    fontSize: 17.6px
    fontFamily: Inter
    fontWeight: 400
    lineHeight: 1.6
    rounded: "50%"
    backgroundColor: "rgba(15, 23, 42, 0.04)"
states:
  link-hover:
    target: link
    state: hover
    boxShadow: "rgba(15, 23, 42, 0.2) 0px 12px 30px"
    transform: "translateY(-2px)"
  button-hover:
    target: button
    state: hover
    transform: "translateY(-2px)"
  other-hover:
    target: other
    state: hover
    boxShadow: "rgba(15, 23, 42, 0.16) 0px 14px 30px, rgba(59, 126, 255, 0.15) 0px 0px 0px 6px"
    transform: "scale(1.02)"
  input-focus:
    target: input
    state: focus
    boxShadow: "rgba(59, 126, 255, 0.15) 0px 0px 0px 4px"
    backgroundColor: "{colors.primary}"
  nav-hover:
    target: nav
    state: hover
    backgroundColor: "rgba(59, 126, 255, 0.1)"
  nav-active:
    target: nav
    state: active
    transform: "scale(0.97)"
  card-hover:
    target: card
    state: hover
    boxShadow: "rgba(59, 126, 255, 0.12) 0px 6px 24px"
    transform: "translateY(-3px)"
breakpoints:
  - width: 375
    containerWidth: 321
    gridColumns: 3
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 44
    bodyPx: 15
    sectionPaddingX: 24
  - width: 768
    containerWidth: 704
    gridColumns: 2
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1024
    containerWidth: 960
    gridColumns: 3
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 51
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1280
    containerWidth: 1104
    gridColumns: 3
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 48
  - width: 1440
    containerWidth: 1104
    gridColumns: 3
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 72
    bodyPx: 16
    sectionPaddingX: 48
coverage:
  statesFound: 21
  gradientsFound: 8
  rolesUnassigned: 0
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Sasu Isaac Osafo

## 1. Visual Theme & Atmosphere

Sasu Isaac Osafo's design system projects a clean, approachable aesthetic rooted in purposeful minimalism and vibrant accent moments. The palette balances a light, neutral foundation with a rich electric-blue primary (`{colors.link}` — `#3B7EFF`), creating an interface that feels both professional and energetic. Typography is generous and hierarchical, with display-scale headings commanding attention while body copy remains warm and readable. Decorative gradients layer transparently across sections, introducing subtle depth without visual noise. The overall mood is forward-thinking yet grounded—befitting a full-stack developer and AI enthusiast who values both technical precision and human connection. Micro-interactions (scale, lift, colour shifts on hover) reward engagement, signalling that this is a product crafted with intention.

**Key Characteristics**
- Clean, light-first layout with strategic blue accent moments
- Generous whitespace and breathing room between sections
- Layered, semi-transparent gradients for atmospheric depth
- Smooth, rewarding micro-interactions (lift, scale, colour transitions)
- Strong typographic hierarchy balancing display and body scales
- Minimal border usage; primarily flat surfaces with soft shadows
- Pill-shaped primary buttons; sharp cards and components throughout most of the UI
- Responsive navigation that collapses elegantly on mobile

## 2. Color Palette & Roles

### Primary
- **Brand Accent** (`{colors.link}` — `#3B7EFF`): Electric blue used for links, active states, and decorative gradient layers. Conveys energy, trust, and technical capability. Primary call-to-action colour across the interface.

### Neutrals & Ink
- **Surface** (`{colors.surface}` — `#F4F6FB`): Soft, cool-toned off-white for card backgrounds, panels, and subtle container fills. Creates visual separation without harshness.
- **On Primary / Headings** (`{colors.on-primary}` — `#0B0C10`): Near-black text for all primary headings, labels, and high-contrast content. Ensures legibility and visual hierarchy.
- **Body** (`{colors.body}` — `#465063`): Mid-tone grey for body copy and standard paragraph text. Balances contrast with warmth for extended reading.
- **Muted / Secondary** (`{colors.muted}` — `#9AA4B7`): Light grey for captions, secondary labels, and de-emphasized text. Guides visual attention to primary content.
- **Hairline / Borders** (`{colors.hairline}` — `#0F172A`): Very dark slate for 1px borders and dividers. Adds structure without visual weight.

### Interactive & Semantic
- **Primary CTA** (`{colors.primary}` — `#FFFFFF`): White, used as text on brand surfaces and as a neutral accent. Also serves as a faint background state for buttons and overlays.

**Semantic / Status Colors**
- No explicit error, success, warning, or informational colours were extracted from the site's markup. The interface does not declare a semantic status ramp; validation and feedback states are not visible in the measured pages.

## 3. Typography Rules

### Font Family
- **Primary**: Poppins (sans-serif fallback: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`)
- **Secondary**: Inter (sans-serif fallback: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`)
- **Input / Forms**: Arial (sans-serif fallback: `Arial, sans-serif`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| **Display XL** | Inter | 72px | 500 | 1.05 | 0px | Hero headline; maximum visual impact. Measured on h2 element. |
| **Display LG** | Inter | 40.32px | 500 | 1.1 | 0px | Large section heading; breathing room above and below. |
| **Heading XL** | Poppins | 34.56px | 600 | 1.6 | 7.6px | All-caps brand and section mark-up (text-transform uppercase). Measured on h1. |
| **Heading LG** | Inter | 32px | 700 | 1 | 0px | Major heading level. Tight line height for visual impact. |
| **Heading MD** | Inter | 21.6px | 500 | 1.6 | 0px | Medium heading; card titles and subsection marks. |
| **Heading SM** | Inter | 19.2px | 700 | 1.6 | 0px | Small heading; component labels and minor titles. |
| **Heading XS** | Inter | 18.4px | 700 | 1.25 | 0px | Extra-small heading; tight leading for compact sections. |
| **Body XL** | Inter | 16.8px | 400 | 1.6 | 0px | Large body text; featured paragraphs. |
| **Body LG** | Inter | 16px | 400 | 1.6 | 0px & 4.8px (uppercase variant) | Standard body copy; also used with text-transform uppercase and tracked spacing. |
| **Body MD** | Inter | 15.2px | 400 | 1.6 | 0px & 2.74px (uppercase variant) | Mid-body; default paragraph size. Uppercase variant with tracking. |
| **Body SM** | Inter | 14.72px | 400 | 1.65 | 0px | Small body; compact text. Slightly tighter line-height. |
| **Body XS** | Inter | 14.4px | 400 | 1.6 | 5.04px (uppercase variant) | Extra-small body; captions and metadata. Uppercase with tracking. |
| **Body XS 2** | Poppins | 13.6px | 400 | 1.6 | 1.09px | All-caps secondary text (text-transform uppercase). Measured on body element. |
| **Button** | Inter | 12.8px | 500 | 1.6 | 0.64px | CTA and interactive element labels; all-caps (text-transform uppercase). |
| **Label SM** | Inter | 14.4px | 400 | 1.6 | 0px | Form labels and input annotations. |
| **Label XS** | Arial | 13.33px | 400 | not measured | 0px | Input placeholder and form microcopy. |
| **Caption SM** | Inter | 12px | 400 | 1.6 | 3.6px | Smallest caption; all-caps (text-transform uppercase). |
| **Caption XS** | Inter | 11.52px | 600 | 1.6 | 0.69px | Extra-small caption; all-caps metadata. |

### Principles
- **Hierarchy through scale and weight**: Display sizes (72px and above) command attention; body text remains readable at 14.4–16.8px. Weight varies from 400 (body) to 700 (headings) to signal importance.
- **Tracking for emphasis**: Uppercase text uses increased letter-spacing (1.09px to 7.6px) to convey formality and visual separation—brand mark, section labels, and buttons all employ this technique.
- **Line height and rhythm**: Body text uses consistent 1.6 line-height for comfortable reading; tighter ratios (1.05–1.1) on display text create urgency and visual weight.
- **Font pairing**: Poppins (geometric, warm) handles brand identity and all-caps marks; Inter (neutral, precise) carries the bulk of content and UI labels. Arial is used only for input fields, providing a stable baseline.

## 4. Component Stylings

### Buttons

**Primary Button (Brand CTA)**
- Background: `rgba(255, 255, 255, 0.65)` (semi-transparent white)
- Text colour: `{colors.on-primary}` (`#0B0C10`)
- Font: `{typography.button}` (12.8px, 500 weight, uppercase)
- Padding: `{spacing.sm} {spacing.lg}` (12px 20px)
- Height: 49.66px
- Border radius: `{rounded.full}` (9999px, pill-shaped)
- Border: `1px solid rgba(15, 23, 42, 0.12)` (subtle hairline)
- Box shadow: `rgba(59, 126, 255, 0.08) 0px 0px 0px 1px inset` (faint inner glow)
- Hover state: `transform: translateY(-2px); box-shadow: rgba(59, 126, 255, 0.25) 0px 0px 0px 1px inset;` (slight lift, stronger inner glow)
- Focus: `outline: 2px solid {colors.link}`

**Secondary / Text Button**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text colour: `{colors.on-primary}` (`#0B0C10`)
- Font: `{typography.button}` (12.8px, 500 weight, uppercase)
- Padding: `{spacing.sm} {spacing.lg}` (12px 20px)
- Height: 47.66px
- Border radius: `{rounded.full}` (9999px, pill-shaped)
- Border: none
- Box shadow: `rgba(59, 126, 255, 0.2) 0px 14px 30px 0px` (soft blue glow)
- Hover state: `transform: translateY(-2px);`
- Focus: `outline: 2px solid {colors.link}`

### Cards & Containers

**Card Default**
- Background: `{colors.surface}` (`#F4F6FB`)
- Text colour: `{colors.on-primary}` (`#0B0C10`)
- Font: `{typography.body-lg}` (16px, 400 weight)
- Padding: `{spacing.lg}` (20px all sides)
- Border radius: `{rounded.sm}` (14px)
- Border: `1px solid rgba(15, 23, 42, 0.08)` (hairline, nearly invisible)
- Box shadow: none
- Hover state: `box-shadow: rgba(59, 126, 255, 0.12) 0px 6px 24px; transform: translateY(-3px); border-color: rgba(59, 126, 255, 0.25);` (lift, shadow, and border highlight)

**Card Large (Layout Container)**
- Background: transparent
- Text colour: `{colors.body}` (`#465063`)
- Font: `{typography.body-xl}` (16.8px, 400 weight)
- Padding: none (0px)
- Border radius: `{rounded.none}` (0px, sharp)
- Border: none
- Box shadow: none
- No hover state recorded.

### Inputs & Forms

**Input Field (Focus State)**
- Background: `rgba(255, 255, 255, 1)` (solid white on focus)
- Border: `1px solid {colors.link}` (`#3B7EFF`)
- Box shadow: `rgba(59, 126, 255, 0.15) 0px 0px 0px 4px` (soft blue glow around border)
- Border radius: `{rounded.xs}` (12px)
- Font: `{typography.label-xs}` (13.33px, 400 weight)
- Text colour: `{colors.on-primary}` (`#0B0C10`)

### Navigation

**Sidebar/Vertical Navigation**
- Background: transparent
- Text colour: `{colors.on-primary}` (`#0B0C10`)
- Font: `{typography.body-lg}` (16px, 400 weight)
- Height: flexible (measured as 428px total column)
- Border: none
- Border radius: `{rounded.none}` (0px)
- Box shadow: none
- Hover state on nav item: `color: {colors.link}; background-color: rgba(59, 126, 255, 0.1); box-shadow: rgba(59, 126, 255, 0.18) 0px 6px 24px, rgba(15, 23, 42, 0.08) 0px 2px 6px; transform: scale(1.05);` (accent text, soft background fill, shadow, and slight scale)
- Active state: `transform: scale(0.97);` (subtle press-down feedback)

### Links

**Link Default (Embedded / Card Link)**
- Text colour: `{colors.link}` (`#3B7EFF`)
- Font: `{typography.body-lg}` (16px, 400 weight)
- Border: none
- Border radius: `{rounded.md}` (24px, when measured on a link container)
- Box shadow: `rgba(15, 23, 42, 0.12) 0px 20px 45px 0px` (depth under card-like link)
- Hover state: `color: #2F6AE6; transform: translateY(-2px);` (lighter blue, lift)
- Focus: `outline: 2px solid {colors.link}`

**Link Small (Icon Link, e.g., Social)**
- Background: `rgba(15, 23, 42, 0.04)` (barely tinted)
- Text colour: `{colors.body}` (`#465063`)
- Border: `1px solid rgba(15, 23, 42, 0.08)`
- Border radius: `{rounded.full}` (50%, circular)
- Height / Width: 38px (square)
- Font: 17.6px (icon sizing)
- Hover state: `box-shadow: rgba(15, 23, 42, 0.16) 0px 14px 30px, rgba(59, 126, 255, 0.15) 0px 0px 0px 6px; transform: scale(1.02);` (shadow and subtle scale)

### Badges

**Icon Badge**
- Background: transparent
- Text colour: `{colors.body}` (`#465063`)
- Font: 17.6px (icon font from boxicons)
- Border: none
- Border radius: `{rounded.none}` (0px)
- Box shadow: none

## 5. Layout Principles

### Spacing System
The system uses a base unit of **4px** with a 1.33× scaling ratio across steps:
- `{spacing.xxs}` = 4px — Micro gutters, intra-component gaps
- `{spacing.xs}` = 8px — Tight spacing between related elements
- `{spacing.sm}` = 12px — Button padding (inline), form field gutters
- `{spacing.md}` = 16px — Standard padding for cards, section gutters
- `{spacing.lg}` = 20px — Card internal padding, comfortable breathing
- `{spacing.xl}` = 24px — Navigation and section-level spacing
- `{spacing.xxl}` = 28px — Larger component gaps
- `{spacing.xxxl}` = 32px — Major section vertical rhythm
- `{spacing.section}` = 40px — Page section vertical spacing
- `{spacing.band}` = 44px — Extra-large band / hero section spacing

**Usage Context:**
- Button padding: `{spacing.sm}` (12px) vertically, `{spacing.lg}` (20px) horizontally
- Card padding: `{spacing.lg}` (20px) all sides
- Section vertical gaps: `{spacing.section}` (40px) to `{spacing.band}` (44px)
- Form input gutters: `{spacing.md}` (16px) between fields
- Navigation padding: `{spacing.xl}` (24px) between menu items

### Grid & Container
- **Mobile (375px)**: Single-column layout, 321px content width, `{spacing.xl}` (24px) side padding
- **Tablet (768px–1024px)**: Flexible grid (2–3 columns depending on section), 704px–960px content width, `{spacing.xxxl}` (32px) side padding
- **Desktop (1280px+)**: Three-column grid, 1104px max content width, `{spacing.band}` (44px–48px) side padding, 7 visible navigation links
- **Max width**: 1104px content column; never full-bleed except on hero/band sections

**Grid strategy**: Flexbox-based, responsive column count. Cards and feature blocks stack vertically on mobile; expand to 2–3 columns on tablets and desktops. Asymmetric layouts (e.g., text + image) favour a single featured column with supporting sidebar on desktop.

### Whitespace Philosophy
Whitespace is treated as a design material, not wasted space. Sections are generously separated (`{spacing.section}` to `{spacing.band}` between vertical blocks), and internal card/component padding respects the spacing scale. Body copy uses line-height of 1.6, providing air between lines. No component is cramped; micro-interactions reward whitespace with subtle hover effects. Negative space frames the hero heading, making the message unmissable.

### Border Radius Scale
- `{rounded.none}` = 0px — Cards, badges, large containers, sharp geometric aesthetic
- `{rounded.xs}` = 12px — Input fields, moderate rounding for form components
- `{rounded.sm}` = 14px — Card corners, small panel rounding
- `{rounded.md}` = 24px — Larger cards, link containers, intermediate radius
- `{rounded.lg}` = 32px — Extra-large panels and decorative containers
- `{rounded.full}` = 9999px — Buttons, avatar circles, and pill-shaped elements

**Component mapping:**
- Buttons: `{rounded.full}` (pill)
- Cards: `{rounded.sm}` (14px, gentle curve)
- Inputs: `{rounded.xs}` (12px)
- Social/icon links: `{rounded.full}` (circular)
- Major containers: `{rounded.none}` or `{rounded.md}` depending on design intent

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| **Flat (Base)** | No shadow (`box-shadow: none`) | Default card state, most UI surfaces |
| **Micro (Sm)** | `rgba(15, 23, 42, 0.12) 0px 20px 45px 0px` | Embedded link containers, initial card lift |
| **Medium (Md)** | `rgba(15, 23, 42, 0.08) 0px 4px 20px 0px, rgba(15, 23, 42, 0.06) 0px 1px 3px 0px` (layered) | Button resting state, transitional depth |
| **Large (Lg)** | `rgba(59, 126, 255, 0.2) 0px 14px 30px 0px` (brand-tinted) | Button hover state, accent lift |

**Shadow Philosophy:**
Depth is built progressively rather than using a single shadow formula. The system stacks multiple shadow layers (e.g., Md combines a soft outer shadow with a crisp inner shadow) to create perceived elevation without a heavy look. Shadows are tied to interaction—buttons and hovered cards receive a slight lift and enhanced shadow to reward engagement. The blue-tinted shadow on button hovers reinforces the brand accent, tying motion to colour identity.

### Opacity Levels
- `0.28` (28%) — Very faint, barely-there tint (used in hover backgrounds, overlays)
- `0.60` (60%) — Moderate transparency, semi-opaque layers
- `0.70` (70%) — Strong transparency, semi-transparent text or surfaces
- `0.75` (75%) — Heavy transparency for decorative elements
- `0.96` (96%) — Nearly opaque, almost-solid surfaces (near-white buttons at `0.65` opacity sit between these)

These values are applied to gradients, button backgrounds, and hover states to create subtle depth and interactive feedback.

### Z-index / Layering
- `z-index: 1` — Base layer, default component stacking
- `z-index: 9` — Navigation sidebar, persistent UI
- `z-index: 10` — Dropdown menus, popovers above main content
- `z-index: 9998` — Modal overlays, blocking interaction with background

The stacking order is shallow and deliberate. Persistent navigation sits just above base; dropdowns rise higher; modals dominate. This prevents unexpected layering conflicts and keeps the hierarchy predictable.

## 7. Do's and Don'ts

### Do
- Use `{colors.link}` (`#3B7EFF`) as the primary call-to-action and interactive element colour. It signals action and reinforces the brand identity.
- Apply generous padding and whitespace (`{spacing.lg}` minimum) inside cards and around text blocks. Breathing room is a core design principle.
- Employ `{typography.display-xl}` (72px) or `{typography.display-lg}` (40.32px) for hero headings to command attention on landing pages.
- Use pill-shaped buttons (`{rounded.full}`) for all primary CTAs. This reinforces a cohesive, friendly aesthetic.
- Layer multiple semi-transparent gradients and shadows for atmospheric depth. The brand aesthetic relies on layered translucence.
- Apply hover states with `transform: translateY(-2px)` or `scale(1.02)` paired with shadow enhancement. Reward interaction.
- Keep card borders minimal (`1px solid rgba(15, 23, 42, 0.08)`) or absent. The surface colour carries the visual weight.
- Use `text-transform: uppercase` with letter-spacing on navigation labels and section marks for hierarchy and visual rhythm.
- Pair Poppins (brand identity, all-caps) with Inter (content, neutral) to create a distinct typographic voice.

### Don't
- Invent new button styles outside primary, secondary, and ghost variants. The system is intentionally minimal to maintain consistency.
- Use semantic status colours (error red, success green) without first establishing them in the design system. None are currently declared; if you need feedback states, extend the palette first.
- Combine multiple accent colours in a single interface section. Blue (`#3B7EFF`) is the only brand accent; use it sparingly and with intention.
- Crowd content with short line-heights or small padding. Whitespace is a design asset.
- Apply shadows without corresponding hover transforms. Depth + motion work together; static shadows feel heavy.
- Use sharp corners (`{rounded.none}`) on buttons or small interactive elements. The brand aesthetic is approachable and rounded.
- Override the typography scale for expressive reasons. Hierarchy through size and weight is disciplined; custom sizing breaks coherence.
- Nest cards within cards without a clear visual or functional reason. Surfaces should separate content, not layer unnecessarily.
- Use low-opacity text on low-contrast backgrounds. The muted colour (`#9AA4B7`) is already light; ensure sufficient contrast for accessibility.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Viewport Width | Content Width | Grid Columns | Nav Links Visible | Menu Toggle | Max Heading | Body Size | Side Padding |
|---|---|---|---|---|---|---|---|---|
| **Mobile** | 375px | 321px | 1 | 0 | Yes | 44px (`{typography.display-lg}` scaled) | 15.2px (`{typography.body-md}`) | `{spacing.xl}` (24px) |
| **Tablet Small** | 768px | 704px | 2 | 0 | Yes | 48px | 16px (`{typography.body-lg}`) | `{spacing.xxxl}` (32px) |
| **Tablet Large** | 1024px | 960px | 3 | 0 | Yes | 51px | 16px (`{typography.body-lg}`) | `{spacing.xxxl}` (32px) |
| **Desktop** | 1280px | 1104px | 3 | 7 | No | 64px | 16px (`{typography.body-lg}`) | `{spacing.band}` (48px) |
| **Desktop Large** | 1440px | 1104px | 3 | 7 | No | 72px (`{typography.display-xl}`) | 16px (`{typography.body-lg}`) | `{spacing.band}` (48px) |

**Key transitions:**
- Mobile to tablet (768px): Content width expands from 321px to 704px; grid shifts from 1 to 2 columns; padding increases to `{spacing.xxxl}` (32px).
- Tablet to desktop (1280px): Navigation menu toggle disappears, 7 nav links become visible inline; side padding expands to `{spacing.band}` (48px); heading size jumps to 64px and continues to 72px at 1440px+.
- Heading scale: Progressive growth from 44px on mobile to 72px on large desktop, reflecting available space and visual hierarchy needs.

### Touch Targets
- Minimum interactive element size: 38–49px (buttons, icon links) to ensure comfortable tap targets on mobile devices.
- Buttons: 49.66px height minimum (primary); 47.66px (secondary). Both exceed iOS/Android 44px guideline.
- Icon links: 38px × 38px squares (circular, `{rounded.full}`) are comfortable one-hand targets.
- Form inputs: 48px+ height for mobile comfort; label sits above or inside for clarity.
- Navigation items: Minimum 44px tap zone; use padding (`{spacing.lg}` to `{spacing.xl}`) to space interactive regions.

### Collapsing Strategy
- **Hero/Heading**: Text size scales down (`{typography.display-lg}` 40.32px on tablet → 72px on desktop). Line-height remains tight (1.05–1.1) to preserve visual weight.
- **Navigation**: Vertical sidebar remains visible on mobile/tablet with hamburger menu toggle; at 1280px, menu expands inline with 7 visible links and toggle disappears.
- **Grid Layout**: Single column (mobile) → 2 columns (tablet, 768px) → 3 columns (desktop, 1024px+). Cards stack naturally with flexbox; no manual breakpoint-specific CSS needed.
- **Padding**: `{spacing.xl}` (24px) on mobile, `{spacing.xxxl}` (32px) on tablet, `{spacing.band}` (48px) on desktop. Progressive expansion to maintain visual balance.
- **Body Text**: Remains 15.2–16px across all breakpoints. Reading comfort does not change; layout breathing does.
- **Button Width**: Buttons shrink on mobile (constrained to content width) and expand on desktop (flex to available space or fixed 278px primary width).

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Link blue (`{colors.link}` — `#3B7EFF`) — use for all interactive element colour and brand accent moments
- **Background / Surface**: Surface fill (`{colors.surface}` — `#F4F6FB`) — soft, cool-toned off-white for card and panel backgrounds
- **Heading Text**: On Primary (`{colors.on-primary}` — `#0B0C10`) — near-black for all h1–h6 and labels
- **Body Text**: Body (`{colors.body}` — `#465063`) — mid-tone grey for paragraphs and extended copy
- **Secondary Text**: Muted (`{colors.muted}` — `#9AA4B7`) — light grey for captions and de-emphasized content
- **Borders / Dividers**: Hairline (`{colors.hairline}` — `#0F172A`) — very dark slate for 1px rules and structural lines
- **Button Tint**: White overlay (`{colors.primary}` — `#FFFFFF`) — semi-transparent white fill for primary buttons; also neutral accent on brand surfaces

### Iteration Guide

1. **Color Consistency**: Every link, button CTA, and brand accent must be `#3B7EFF`. This single blue carries the entire visual identity; deviation creates fragmentation. Use it in hover states, focus rings, and as a tint layer in shadows.

2. **Typography Discipline**: Do not create custom font sizes. Use the hierarchy scale (`{typography.display-xl}` through `{typography.caption-xs}`). Pair Poppins for brand marks and all-caps labels; Inter for content. Maintain letter-spacing exactly as specified (e.g., 7.6px on brand headings, 0.64px on buttons).

3. **Button Treatment**: All primary CTAs are pill-shaped (`{rounded.full}`), semi-transparent white backgrounds with hairline borders. Hover state adds lift (`translateY(-2px)`) + enhanced shadow. No deviations.

4. **Whitespace Scaling**: Use the spacing scale (`{spacing.md}` through `{spacing.band}`) consistently. Never invent padding—reference the scale. Section-to-section gaps are always `{spacing.section}` or `{spacing.band}`.

5. **Depth via Motion + Shadow**: Buttons and cards only feel elevated when they move on interaction (hover: scale or lift). Static shadows are dull; pair them with `transform`. Apply shadow enhancement on hover to reinforce lift.

6. **Responsive Collapse**: At 1280px, the navigation menu becomes inline (7 links visible); hamburger toggle hides. Below 1280px, sidebar + toggle only. Content width constrains to 1104px max; padding expands as viewport grows (24px → 48px).

7. **No Semantic Colors**: The system has no error/warning/success ramp. If you need to signal validation states, propose a new colour pair and extend the palette first—do not guess or invent.

8. **Border Radius by Role**: Buttons are always `{rounded.full}` (pill). Cards and small panels are `{rounded.sm}` (14px). Inputs are `{rounded.xs}` (12px). Icon circles are `{rounded.full}` (50%). Do not mix; each role has a fixed radius.

9. **Overlay & Gradient Layering**: Decorative gradients use `linear-gradient` and `radial-gradient` with specific RGBA values (exact extraction values). Layer multiple gradients transparently for atmospheric depth. Apply `filter: blur(160px)` on radial overlays to soften edges.

10. **Focus & Accessibility**: All interactive elements (buttons, links, inputs) must have a 2px solid `{colors.link}` outline on focus-visible. Use `:focus-visible` pseudoclass; do not remove outlines. High contrast text (`#0B0C10` on light or `#FFFFFF` on blue) ensures legibility for all users.

## 10. Known Gaps

- **Interaction states beyond hover**: The extraction captured hover and focus-visible states for buttons, links, and inputs. Active/pressed states, disabled states, loading states, and error-focused input styling were not directly measured on visible UI; if your implementation requires these, follow the hover precedent (lift + shadow for active; opacity or greyed-out for disabled).

- **Semantic / Status colors**: The site does not declare error, success, warning, or info colours in its measured markup. No validation feedback palette exists. If you need to signal form errors or success messages, this design system does not provide a colour authority—propose one before implementation.

- **Dark mode / Theme variants**: Only one colour theme was extracted (light background, dark text). No dark mode or alternate theme is declared by the site. The derived token list does not represent a shipped dark variant; assume light-only for now.

- **Animation timing and easing**: Interaction states record transforms and box-shadow changes, but no `transition`, `animation`, or `cubic-bezier` values were extracted. Apply sensible defaults (e.g., `transition: all 200ms ease-out;` on button hover) or reference component libraries for standard easing curves.

- **Component states not visible on measured pages**: Dropdown open states, toast notifications, breadcrumb variants, tabs, accordion expand/collapse, and pagination styles were not captured. Only buttons (primary, secondary), cards, inputs (focus), navigation, links, and badges were directly measured.

- **Full typography coverage**: 17 distinct typography roles were measured across sizes. Unlisted roles (e.g., form error text, tooltip text, breadcrumb labels) are not explicitly defined; use the nearest scale match from the hierarchy.

- **Breakpoint-specific component adjustments**: The extracted breakpoints show general width and column changes, but component-level tweaks (e.g., button size reduction on mobile, heading reflow) were not granularly measured. Assume components scale proportionally via responsive units (rem, %) unless otherwise specified.

- **Cross-origin stylesheet access**: Some stylesheets may not have been readable due to CORS restrictions. Non-measured CSS properties (e.g., custom properties, pseudo-element styling, computed values from external libraries) are not reported here.

- **Pages behind authentication**: The extraction covered the public-facing portfolio pages (hero, about section). Any authenticated or member-only surfaces are not represented in this design system document.