# JMBT Carpentry - Refined Workshop Theme

## Design Concept

**"Refined Workshop"** - A distinctive aesthetic that blends natural wood craftsmanship with modern elegance. This theme captures the warmth of quality woodworking while maintaining a clean, professional appearance.

## Color Palette

### Primary Colors
- **Rich Walnut** (#5D4037) - Main brand color, represents quality hardwood
- **Honey Amber** (#D4A574) - Accent color, like freshly sanded wood catching light
- **Warm Oak** (#8D6E63) - Secondary, supporting warmth

### Neutrals
- **Cream Linen** (#FAF8F5) - Background, natural and inviting
- **Pure White** (#FFFFFF) - Cards and elevated surfaces
- **Deep Charcoal** (#2C2420) - Primary text, aged wood stain
- **Soft Taupe** (#6D5D52) - Secondary text

### Semantic
- **Destructive Red** (#C62828) - Error states
- **Muted Beige** (#F5F1ED) - Subtle backgrounds

## Typography

### Font Families
1. **Playfair Display** (Headings)
   - Weights: 400, 500, 600, 700, 800
   - Elegant serif that conveys craftsmanship and timeless quality
   - Used for: All headings (h1-h6), brand name

2. **Work Sans** (Body)
   - Weights: 300, 400, 500, 600
   - Clean, modern sans-serif for excellent readability
   - Used for: Body text, UI elements, buttons

### Type Scale
- **H1**: 3.5rem (56px) desktop, 2.5rem (40px) mobile
- **H2**: 2.5rem (40px) desktop, 2rem (32px) mobile
- **H3**: 1.875rem (30px) desktop, 1.5rem (24px) mobile
- **Body**: 1rem (16px) base, 1.125-1.25rem for larger text

## Visual Elements

### Textures
- **Wood Grain**: Subtle vertical lines (3px repeating pattern) at 50% opacity
- **Paper Texture**: Radial gradients creating organic, tactile feel
- **Shadows**: Warm-toned shadows using primary color at low opacity

### Effects
- **Hover Lift**: Cards rise 4px with enhanced shadow
- **Fade In Up**: Staggered animations for content reveal
- **Smooth Transitions**: 300ms cubic-bezier easing

### Decorative Elements
- Hand-drawn underline strokes on key phrases
- Amber dot indicators for trust badges
- Rounded corners (0.5-0.75rem) for modern softness
- Generous spacing and negative space

## Component Patterns

### Cards
- White background on cream linen
- 2px borders in subtle taupe
- Hover effect: lift + enhanced shadow
- Rounded corners (0.75rem)

### Buttons
- **Primary**: Rich walnut with cream text
- **Outline**: 2px border with hover fill
- **Large**: 48px height, generous padding
- Smooth shadow and transform transitions

### Header
- Sticky with backdrop blur
- 80px height for prominence
- Logo badge with "J" monogram
- Refined navigation spacing

## Animation Strategy

### Page Load
1. Hero content fades in upward (600ms)
2. CTA buttons follow (200ms delay)
3. Trust indicators last (300ms delay)
4. Cards stagger by column (100ms intervals)

### Interactions
- Hover states: 300ms smooth transition
- Click feedback: subtle scale
- Scroll: smooth behavior enabled globally

## Spacing System

- **Container**: Max-width 1400px, centered
- **Section padding**: 3-4rem vertical on mobile, 6-8rem on desktop
- **Element spacing**: 1.5-2rem between major elements
- **Card gaps**: 1.5rem mobile, 2-3rem desktop

## Accessibility

- High contrast ratios (4.5:1 minimum)
- Focus states clearly visible
- Smooth scroll for reduced motion
- Semantic HTML structure
- ARIA labels where needed

## Implementation Notes

### Tailwind v4
- Uses @theme directive for CSS variables
- Custom utilities for wood-grain and paper-texture
- Shadow utilities using warm-toned colors
- Animation utilities with cubic-bezier easing

### Next.js 16
- Google Fonts loaded via CSS @import
- Static export compatible
- Image optimization configured
- TypeScript for type safety

## Brand Personality

**Warm** - Natural materials, inviting tones
**Refined** - Clean layouts, elegant typography
**Trustworthy** - Professional presentation, quality focus
**Memorable** - Hand-drawn accents, unique textures
**Timeless** - Classic fonts, enduring aesthetic

---

This theme creates an unforgettable first impression while maintaining the professionalism expected of a premium carpentry service.
