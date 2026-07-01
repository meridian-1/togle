---
name: Luminous Data
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#53e076'
  primary: '#53e076'
  on-primary: '#003914'
  primary-container: '#1db954'
  on-primary-container: '#004118'
  inverse-primary: '#006e2d'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#6fa0ff'
  on-tertiary-container: '#003578'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72fe8f'
  primary-fixed-dim: '#53e076'
  on-primary-fixed: '#002108'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  metric-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  glass-padding: 24px
---

## Brand & Style
The design system is engineered for a high-performance Spotify analytics platform, targeting power users, artists, and data enthusiasts. The brand personality is "Electric Intelligence"—merging the raw energy of music with the precision of data science. 

The visual style is **Glassmorphism**, characterized by depth, translucency, and vibrant color spills. The UI should evoke a sense of looking through a high-tech glass console into a deep, sonic space. Large, fluid mesh gradients sit behind the UI layers to provide a sense of movement and organic life, while the functional elements remain sharp, legible, and systematically organized.

## Colors
This design system utilizes a "Deep Space" palette. The foundation is a charcoal-to-indigo gradient background.
- **Primary (Spotify Green):** Used exclusively for success states, playback controls, and key growth metrics.
- **Secondary (Vibrant Purple):** Used for "Discovery" metrics and trend analysis.
- **Tertiary (Electric Blue):** Used for "Systemic" data like streaming counts and technical metadata.
- **Surface Strategy:** Backgrounds use a solid deep indigo-charcoal. Glass components use a semi-transparent fill with a high blur radius to maintain legibility against the background mesh gradients.

## Typography
The typography system prioritizes high-contrast hierarchy. **Inter** provides a modern, neutral foundation that remains readable over complex glass backgrounds. **Geist** is introduced for labels and data points to provide a technical, monospaced feel that resonates with analytics platforms.

Key metrics should be rendered in `metric-xl` to emphasize data-first storytelling. Use `label-mono` for all metadata, category headers, and axis labels on charts.

## Layout & Spacing
This design system uses a **Fluid Grid** model with high internal breathing room within glass containers.
- **Desktop:** 12-column grid, 24px gutters, 40px side margins. 
- **Tablet:** 8-column grid, 16px gutters, 24px side margins.
- **Mobile:** 4-column grid, 16px gutters, 20px side margins.

Content is grouped into "Zones." Statistics are grouped in small modular cards, while primary visualizers (graphs/heatmaps) span at least 8 columns on desktop to ensure data density doesn't feel cluttered.

## Elevation & Depth
Depth is achieved through **Glassmorphism** rather than traditional shadows.
1.  **Level 0 (Canvas):** Dark charcoal/indigo base with rotating mesh gradients.
2.  **Level 1 (Cards):** `backdrop-filter: blur(20px)`, `background: rgba(15, 23, 42, 0.65)`, and a `0.5px` solid white border at `12%` opacity.
3.  **Level 2 (Modals/Popovers):** `backdrop-filter: blur(40px)`, `background: rgba(30, 41, 59, 0.8)`, and a subtle inner glow (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`).

Avoid drop shadows. Use the inner glow and border-stroke to define edges against the vibrant background.

## Shapes
The shape language is "Modern Rounded." While the brand is data-heavy, the 0.5rem (8px) base radius ensures the UI feels approachable and aligned with Spotify's own consumer-facing aesthetic. 
- **Small elements (buttons/chips):** 8px radius.
- **Large elements (cards/containers):** 16px (rounded-lg) to 24px (rounded-xl) radius.

## Components
- **Glassy Cards:** The primary container. Must include the 0.5px white border and 20px backdrop blur.
- **Neon Progress Bars:** Use high-saturation primary/secondary colors with a `box-shadow: 0 0 12px <color>` to simulate a light-emissive neon effect. The track should be a dark, semi-transparent grey.
- **Metric Chips:** Small capsules using `label-mono` type, with a low-opacity version of the accent color as the background.
- **Minimalist Icons:** Use 2px stroke-weight linear icons. Icons should be white or the specific accent color of the category they represent.
- **Input Fields:** Ghost-style inputs with a bottom-border focus state in Spotify Green.
- **Vibrant Mesh Gradients:** These are not static; they should be implemented as large, blurred SVG shapes behind the main content area, providing the "source light" for the glass elements.