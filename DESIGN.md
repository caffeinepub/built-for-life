# Design Brief

**Purpose:** Premium, minimal document viewer for Built For Life 6-week training program lead magnet. Targets disciplined men 35+ with white/black/gold aesthetic, editorial authority, zero fluff.

## Aesthetic & Tone
Minimalist luxury meets editorial authority. Masculine, sharp, disciplined. Anti-generic SaaS bright. Opposite of casual fitness app energy.

## Color Palette

| Token              | OKLCH            | Usage                           |
|--------------------|------------------|---------------------------------|
| Background         | 0.99 0 0         | Page base, pristine white       |
| Foreground         | 0.1 0 0          | Body text, pure black           |
| Primary (Gold)     | 0.63 0.15 68     | Accents, CTAs, highlights       |
| Secondary (Navy)   | 0.28 0.08 256    | Structural depth, headers       |
| Muted              | 0.92 0 0         | Subtle backgrounds, dividers    |
| Border             | 0.88 0 0         | Fine lines, separation          |
| Card               | 0.98 0 0         | Elevated surfaces, slight depth |

## Typography

| Layer       | Font                 | Scale    | Usage                          |
|-------------|----------------------|----------|--------------------------------|
| Display     | Fraunces, serif      | XL–MD    | Headings, hero text, authority |
| Body        | Plus Jakarta Sans    | LG–SM    | Content, instructions, copy    |
| Mono        | System monospace     | Base     | Code (if needed)               |

## Structural Zones

| Zone      | Treatment                                      | Token Applied           |
|-----------|------------------------------------------------|-------------------------|
| Header    | Navy background, white text, minimal border-b  | bg-secondary, text-white |
| Hero      | Full-width white with gold accent button       | bg-background, text-primary |
| Content   | Generous whitespace, muted dividers            | bg-background, border-subtle |
| Section   | Alternating bg-card for depth, 1px border-top | bg-card, border-border |
| Footer    | Navy background, white text, minimal           | bg-secondary, text-white |

## Shape Language
Minimal border-radius (2px), generous padding, 2:3 whitespace ratio. No rounded corners on buttons (sharp, masculine aesthetic). Textured depth via layers and borders, not shadows. Shadow restraint: xs only for subtle elevation on cards.

## Component Patterns
- **Buttons:** Gold background, black text, 2px border-radius, hover: opacity + 1px border gold
- **Headings:** Fraunces display font, tight leading, gold color for subheadings
- **Dividers:** 1px border-subtle, full bleed or inset 2rem
- **Text blocks:** body font, 1.5 line-height, 64 char max-width for readability

## Motion & Interaction
Smooth transitions (0.3s cubic-bezier), no bouncy animations. Hover states: opacity shift only, no scale. Respects prefers-reduced-motion.

## Dark Mode
Navy-dominant header/footer, deeper blacks for contrast, gold becomes brighter (0.75 0.18 68). Body text off-white (0.97 0 0). Border becomes more visible (0.2 0 0).

## Signature Detail
Gold accent on hero CTA positioned as a visual anchor—draws the eye without shouting. Typography pairing (serif display + modern body) signals premium, editorial authority. Generous whitespace communicates confidence, not space-filling.

## Constraints
- No emojis, no fluff, no over-promising language
- Bilingual typography support (English + Marathi)
- PDF download as primary CTA, freely accessible
- Maximum 90-character line length for readability
- No gradients, no glow effects, no 3D depth tricks

## Breakpoints
- `sm`: 640px (mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (wide)
