---
name: Dynamic Syllabus
colors:
  surface: '#fef7ff'
  surface-dim: '#ded7e4'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1fe'
  surface-container: '#f3ebf8'
  surface-container-high: '#ede5f3'
  surface-container-highest: '#e7e0ed'
  on-surface: '#1d1a23'
  on-surface-variant: '#494454'
  inverse-surface: '#322f39'
  inverse-on-surface: '#f5eefb'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#855000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a76500'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffdcbb'
  tertiary-fixed-dim: '#ffb869'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#fef7ff'
  on-background: '#1d1a23'
  surface-variant: '#e7e0ed'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system embodies an "Academic Futurism" aesthetic—fusing the intellectual rigor of IITC with the high-velocity technical nature of the "DevOps Lohamim" course. The style is a hybrid of **Minimalism** and **Modern SaaS** conventions, drawing heavily from the functional density of Notion and the refined polish of Linear.

The interface prioritizes extreme clarity and utility, using expansive white space to reduce cognitive load while students navigate complex technical syllabi. The brand identity is conveyed through high-precision typography and vibrant gradient accents that symbolize the "dynamic" and evolving nature of the curriculum. The emotional goal is to provide a workspace that feels professional, elite, and technically sophisticated, yet remains inviting and easy to master.

## Colors

The palette is anchored by a sterile, "Clean White" background to maximize readability. Functional elements use a refined scale of neutral grays for structural definition and hierarchy.

- **Primary & Secondary:** A vibrant purple-to-indigo gradient serves as the "Dynamic" signature. It is used sparingly for primary actions, progress indicators, and active states to guide the eye without overwhelming the content.
- **Neutrals:** Medium grays define borders and secondary metadata, while a deep charcoal ensures high-contrast legibility for body text.
- **Semantic Colors:** Soft washes of green (Success), amber (Warning), and red (Error) are used for status indicators, always paired with high-contrast text for accessibility.

## Typography

This design system utilizes **Inter** as its primary typeface to achieve a neutral, systematic, and utilitarian feel. The hierarchy is established through significant weight shifts rather than excessive size differences.

For the "DevOps Lohamim" context, **JetBrains Mono** is introduced for technical labels, command-line snippets, and metadata to reinforce the technical nature of the course. Line heights are kept generous (1.5x - 1.6x) to ensure the educational content is digestible during long study sessions. All headlines utilize tight letter-spacing for a modern, "Framer-like" editorial look.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for the main content area (max 1280px) to maintain line-length readability, while the navigation and sidebar elements utilize fluid widths. 

- **Sidebar:** A persistent left-hand navigation (240px-280px) inspired by Notion, using subtle hover states for discovery.
- **Dashboard Grid:** A 12-column system for desktop, collapsing to a single column on mobile. 
- **Rhythm:** A 4px baseline grid ensures vertical consistency. Large margins (40px) are used between major content sections to create a "breathable" academic environment.
- **Mobile:** Margins tighten to 16px, and the sidebar transforms into a bottom-sheet or full-screen overlay to prioritize content space.

## Elevation & Depth

Visual depth is achieved through **Tonal Layering** and **Ambient Shadows** rather than heavy gradients or borders.

1.  **Level 0 (Background):** Pure `#FFFFFF` or very light gray `#F9FAFB`.
2.  **Level 1 (Cards/Containers):** White background with a 1px solid border in `#E5E7EB`. This level uses a very soft, highly diffused shadow (0 4px 6px -1px rgb(0 0 0 / 0.05)) to suggest lift.
3.  **Level 2 (Popovers/Modals):** These use a more pronounced shadow and a subtle backdrop blur (12px) to separate the element from the syllabus content.
4.  **Interactions:** Elements lift slightly on hover (Y-axis translation of -1px or -2px) to provide tactile feedback without breaking the minimalist aesthetic.

## Shapes

The shape language is "Soft-Modern," utilizing a generous **12px-16px corner radius** for primary containers and cards. This creates an approachable and contemporary feel that offsets the technical complexity of the DevOps content.

- **Small elements (Buttons/Inputs):** 8px - 10px radius.
- **Large elements (Course Cards/Modals):** 16px radius.
- **Selection states:** Subtly rounded corners (4px) for list item highlights, mimicking the Linear/Notion selection style.

## Components

- **Buttons:** Primary buttons use the `accent_gradient` with white text. Secondary buttons are "Ghost" style with a 1px border. All buttons have a transition duration of 200ms.
- **Progress Cards:** Feature large numerical typography and a thin, vibrant gradient progress bar.
- **Syllabus List:** Clean rows with 12px vertical padding, separated by subtle rules (`#F3F4F6`). Active lessons are indicated by a 2px vertical purple line on the left.
- **Inputs:** Minimalist fields with a light gray fill that clears to white on focus, highlighted by a 2px indigo ring.
- **Chips:** Small, low-contrast pills (e.g., "Lab," "Video," "Quiz") using a light purple background (`#F5F3FF`) and darker text (`#7C3AED`).
- **DevOps Timeline:** A specialized vertical component using the gradient for the "current track," with completed steps represented by subtle checkmarks and muted text.