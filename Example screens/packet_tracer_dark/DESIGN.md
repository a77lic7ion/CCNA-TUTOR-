# Design System Specification: The Technical Monolith

This design system is a high-end, editorial-inspired framework crafted specifically for the CCNA AI Tutor. It moves away from the "generic dashboard" aesthetic, instead embracing a sophisticated, "Technical Monolith" philosophy. By leveraging deep tonal layering, intentional asymmetry, and a blend of high-contrast typography, we create an environment that feels like a premium, professional network operations center—not a standard e-learning template.

---

## 1. Creative North Star: The Technical Monolith
The "Technical Monolith" treats the interface as a physical, high-performance machine. It prioritizes depth through density and light rather than lines.
- **Intentional Asymmetry:** Break the grid. Use wide margins for body text contrasted by tight, dense data visualizations in the corners.
- **The "NOC" Atmosphere:** A dark, immersive environment where information "glows" against deep, matte surfaces.
- **Architectural Depth:** Elements shouldn't look like they are "on" the screen; they should look "machined" into it.

---

## 2. Color & Surface Architecture
We abandon the crutch of 1px borders. In this system, structure is defined by **Tonal Layering**.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
- **Primary:** `#ffb59e` (Used for accents and "Active" network states)
- **Primary Container:** `#d97757` (The core brand color for CTAs)
- **Background:** `#131312` (The infinite void)
- **Surface Tiers:**
  - `surface-container-low` (`#1c1c1a`): Used for main content areas.
  - `surface-container` (`#20201e`): Used for nested modules.
  - `surface-container-high` (`#2a2a28`): Used for interactive cards and hover states.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. A "Question Card" (`surface-container-high`) should sit atop a "Main Layout" (`surface-container-low`). The 4-8% difference in lightness is sufficient for the human eye to perceive separation without the visual clutter of lines.

### Signature Textures: Glass & Glow
- **Glassmorphism:** For floating modals or "Mock CLI" overlays, use `surface-container-highest` with a `0.8` opacity and a `24px` backdrop-blur. 
- **The Glow:** Main CTAs using `primary_container` should have a subtle, matching outer glow (`0px 0px 15px rgba(217, 119, 87, 0.3)`) to simulate a powered-on indicator.

---

## 3. Typography: Editorial Precision
The contrast between the geometric `Space Grotesk` and the highly readable `Inter` creates an authoritative, technical voice.

- **Display & Headlines (Space Grotesk):** Use for module titles and progress percentages. Its wide apertures and technical feel mirror high-end engineering specs.
- **Body & Labels (Inter):** Used for educational content and instructions. 
- **The "Mono" Exception:** Use a high-quality Monospace font for all CLI elements, IP addresses, and configuration snippets.

**Key Scale:**
- **Display-LG:** 3.5rem (Space Grotesk) — Reserved for "Level Up" or "Module Complete" moments.
- **Title-SM:** 1rem (Inter) — The standard for question text, prioritizing clarity.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Stacking**, never traditional drop shadows.

- **The Layering Principle:** To lift a card, do not add a shadow. Instead, move it from `surface-container-low` to `surface-container-highest`.
- **Ambient Shadows:** Only used for floating "Command Palettes." Use a 32px blur, 4% opacity, tinted with `#ffb59e` to create an "aura" rather than a shadow.
- **Ghost Border Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. It must be barely perceptible.

---

## 5. Components & Mock CLI

### The 'Mock CLI' (Signature Component)
The CLI is the soul of the CCNA Tutor. It must feel like a authentic terminal.
- **Background:** `surface_container_lowest` (#0e0e0d).
- **Text:** `tertiary` (#5edac7) for successful commands; `error` (#ffb4ab) for syntax errors.
- **Blinking Cursor:** A 2px x 1.2rem block using `primary` (#ffb59e) with a 1s "step-end" animation.
- **Container:** `0.25rem` (DEFAULT) radius with a top "Status Bar" in `surface_container_high`.

### Cards (Questions & Summaries)
- **Style:** No borders. Background: `surface_container_low`. 
- **Interaction:** On hover, transition background to `surface_container_high`.
- **Spacing:** Use 2rem (32px) internal padding to provide "Editorial" breathing room.

### Progress Indicators
- **Track:** `surface_container_highest`.
- **Indicator:** A linear gradient from `primary_container` to `primary`. 
- **Animation:** Use a "loading" pulse rather than a static fill to imply active AI processing.

### Buttons
- **Primary:** `primary_container` background, `on_primary_container` text. Square corners (`0.25rem`) to maintain the "Technical" aesthetic.
- **Tertiary:** No background. Text in `secondary`. Underline only on hover using the `primary` color at 2px thickness.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Space":** Let content breathe. Negative space is a premium asset.
- **Use Tonal Shifts:** Separate the sidebar from the main chat using `surface` vs `surface-container-low`.
- **Embrace the Mono:** Use Monospace for any technical data, even outside the CLI (e.g., Subnet masks).

### Don’t:
- **No Pure White:** Never use `#FFFFFF`. Use `foreground` (`#c3c0b6`) to prevent eye strain.
- **No Rounded Pills:** Avoid `full` roundedness for buttons. It feels too "consumer-tech." Stick to `md` or `sm` for a more "industrial" feel.
- **No Hard Borders:** If you feel the urge to draw a line, use a 16px gap or a color shift instead.