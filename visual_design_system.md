# Visual Design System & UI Blueprint: Ma'ajo Lawasanjo Nathan

This document acts as your master visual specification sheet. It details the typography scales, spacing units, border radii, color additions, hover guidelines, and grid structures to ensure the user interface feels polished, premium, and unified.

---

# 1. Design Vision & Brand Personality

The styling should not feel like a personal developer template. It should represent a cohesive professional hybrid of SaaS products and documentation platforms (e.g. Vercel, Linear, Stripe, Raycast, Anthropic).

*   **Core Attributes:** Precision, engineering excellence, product maturity, technical detail, and accessibility.
*   **Emotional Goal:** Visitors should immediately think: *"This person builds serious, production-grade software."*

---

# 2. Typography & Fonts

We keep the existing font pairing (Clash Display + Satoshi) but enforce strict font scales:

*   **Display Font:** **Clash Display** (used for titles, large headers, metrics, and quotes).
*   **Body & UI Font:** **Satoshi** (used for descriptions, buttons, labels, lists, and docs).

### Fluid Font Scales:
*   `Hero XL`: `96px`
*   `Hero`: `72px`
*   `Page Title`: `56px`
*   `Section Title`: `40px`
*   `Card Title`: `28px`
*   `Subheading`: `22px`
*   `Body Large`: `18px`
*   `Body Standard`: `16px`
*   `Small Text`: `14px`
*   `Caption`: `12px`

---

# 3. Extended Spacing & Layout Grid

Adopt a strict 8-point base grid for all dimensions, gutters, padding, and margins:
```text
8px | 16px | 24px | 32px | 40px | 48px | 64px | 80px | 96px | 128px
```

*   **Border Radius Rules:**
    *   `XL Container/Cards`: `20px` to `24px`
    *   `Standard Cards`: `20px`
    *   `Buttons & Inputs`: `14px`
    *   `Badges / Mini Elements`: `8px`
*   **Responsive Grids:**
    *   `Desktop` (>1280px): 12-column grid.
    *   `Tablet` (768px - 1024px): 8-column grid.
    *   `Mobile` (<768px): 4-column grid with thumb-friendly margins.

---

# 4. Color Extensions

Maintain your core midnight blue + emerald green canvas, extending surface layers:

*   **Primary Accent (`--highlight-primary`):** `#22C55E` (Emerald Green for CTAs, active links, and status dots).
*   **Canvas Bg (`--bg-900`):** `#030917` (Deep dark space blue).
*   **Elevated Card Surface (`--bg-800`):** `#0A1122` (Dark elevated background).
*   **Secondary Surface 2 (`--bg-700`):** `#111827` (Introduced for nested list panels or inputs).
*   **Spike/Alert Accents:** Used sparingly:
    *   *AI Agents:* Purple / Indigo
    *   *Information:* Cool Blue
    *   *Errors / Warns:* Muted Red / Amber

---

# 5. Component Anatomy & Motion Rules

## Reusable Card Structure
Every showcase or info card should maintain a strict top-to-bottom layout:
```text
Icon Badge → Card Title → Secondary Description → Metadata Badges → Active Call-to-Action Link
```

## Motion Language Guidelines
*   **Integrity Rule:** Do not touch or modify existing home animations.
*   **Interaction Duration:** Easing transition timings should remain between:
    *   *Buttons / Hover Effects:* `150ms` to `250ms` (Fast feedback).
    *   *Menu open / Accordion details:* `400ms` (Smooth).
    *   *Section reveals / Page transitions:* `600ms` (Elegant).
*   **Hover Styles:** Card hover should utilize subtle elevation adjustments (lifts), border glow transitions, and scale accents instead of excessive color shifting.
