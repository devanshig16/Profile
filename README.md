# Personal Portfolio Website

A minimalist, one-page personal portfolio built with Next.js, TypeScript, and Tailwind CSS. This site prioritizes content, typography, and narrative flow over visual effects, creating a warm, thoughtful, and highly readable experience.

## Design Philosophy

This portfolio follows a **content-first, minimalist approach** inspired by modern San Francisco tech portfolios. The design emphasizes:

- **Quiet confidence** over flashy effects
- **Readability** over decoration
- **Thoughtful spacing** over dense layouts
- **Warm, human tone** over corporate language
- **Subtle refinement** over obvious design

## Design Features

### Typography & Spacing

- **Font**: Inter (clean, modern sans-serif) with system font fallbacks
- **Line-height**: Generous 1.75 for body text, 1.15 for hero headings
- **Text width**: Constrained to 42rem (~672px) for optimal reading comfort
- **Vertical rhythm**: Consistent spacing between sections (py-16 md:py-24)
- **Responsive typography**: Scales gracefully from mobile to desktop

### Color System

A minimal, monochrome-first palette with subtle accents:

- **Background**: Light neutral (`#fafafa`) with alternating section tones
- **Primary text**: Near-black (`#1a1a1a`) instead of pure black for softer appearance
- **Accent color**: Muted blue-gray (`#5b7fa8`) used sparingly for links
- **Section alternation**:
  - White sections
  - Very light warm gray (`#f7f6f4`)
  - Slightly tinted accent wash (`#f8f9fb`)

### Background Treatment

- **Subtle radial gradients**: Soft warm tones from top and bottom (barely perceptible)
- **Light noise texture**: SVG-based texture at 3% opacity for warmth
- **Full-width sections**: Each section's background extends edge-to-edge

### Micro-Interactions

Minimal, understated hover effects:

- **Link animations**: Quick 150ms transitions
- **Opacity change**: Links reduce to 85% opacity on hover
- **Animated underline**: Expands from left to right on hover
- **No scroll animations**: Motion only on user interaction

### Layout & Structure

- **Single-page scroll**: All content flows in one continuous narrative
- **Centered content**: All text and links are centered for balanced composition
- **Generous padding**: Comfortable spacing around content (3-4rem)
- **Semantic HTML**: Proper use of sections, articles, and navigation elements
- **Accessibility**: ARIA labels, proper heading hierarchy, keyboard navigation

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter via Next.js font optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles, design system, utilities
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page composition
├── components/
│   ├── Hero.tsx             # Opening statement
│   ├── Intro.tsx            # Personal introduction
│   ├── WhatIDo.tsx          # Current focus areas
│   ├── SelectedWork.tsx     # Featured projects
│   ├── ProjectCard.tsx      # Reusable project component
│   ├── HowIThink.tsx        # Philosophy section
│   ├── Background.tsx       # Professional history
│   ├── Closing.tsx          # Invitation to connect
│   └── Footer.tsx           # Contact links
├── tailwind.config.ts       # Tailwind configuration with custom colors
└── package.json
```

## Design Decisions

### Why Minimal?

The design intentionally avoids:
- Canvas animations
- Heavy backgrounds
- Parallax effects
- Decorative elements
- Marketing language

Instead, it focuses on:
- Content clarity
- Typographic hierarchy
- Comfortable reading experience
- Subtle, refined details

### Why These Colors?

- **Near-black text**: Softer than pure black, easier on the eyes
- **Light backgrounds**: Reduces eye strain, creates breathing room
- **Muted accent**: Provides subtle emphasis without distraction
- **Alternating sections**: Creates visual rhythm without being obvious

### Why This Typography?

- **Inter**: Professional, readable, modern
- **Generous line-height**: Improves readability and reduces fatigue
- **Constrained width**: Optimal line length for reading comprehension
- **Light font weights**: Creates calm, approachable feeling

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  "near-black": "#1a1a1a",
  accent: "#5b7fa8",
  "section-warm-gray": "#f7f6f4",
  "section-accent-wash": "#f8f9fb",
}
```

### Typography

Modify font sizes and spacing in component files or adjust the `.content-container` class in `globals.css`.

### Content

Update copy directly in component files. Each section is self-contained and easy to modify.

## License

Personal project - feel free to use as inspiration for your own portfolio.

