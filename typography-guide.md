# Orion Industria Magna - Typography Guide

## Primary Fonts

### Headings: Orbitron
Orbitron is a geometric sans-serif typeface intended for display purposes. Its design style is futuristic and tech-oriented, making it perfect for the organization's branding.

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
```

#### Usage
- Organization name
- Page titles
- Section headings
- Navigation menu
- Call-to-action buttons

#### Weights
- Regular (400): Minor headings
- Medium (500): Navigation items
- Semi-Bold (600): Subheadings
- Bold (700): Main headings
- Extra-Bold (800): Page titles
- Black (900): Organization name, hero text

### Body Text: Exo 2
Exo 2 is a contemporary geometric sans-serif font with a technological feel that complements Orbitron while being more readable for body text.

```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
```

#### Usage
- Body text
- Paragraphs
- Lists
- Form labels
- Captions
- Secondary information

#### Weights
- Extra-Light (200): Small captions, footer text
- Light (300): Secondary information
- Regular (400): Main body text
- Medium (500): Important body text, form labels
- Semi-Bold (600): Emphasized text
- Bold (700): Important information, subheadings in body text
- Light Italic (300i): Quotes, testimonials
- Regular Italic (400i): Emphasized text within paragraphs

## Fallback Fonts
In case the primary fonts fail to load, the following fallback fonts should be used:

- For Orbitron: Arial, Helvetica, sans-serif
- For Exo 2: Verdana, Geneva, sans-serif

## Typography Scale

### Headings
- H1: 3rem (48px) / line-height: 1.2
- H2: 2.5rem (40px) / line-height: 1.2
- H3: 2rem (32px) / line-height: 1.3
- H4: 1.75rem (28px) / line-height: 1.3
- H5: 1.5rem (24px) / line-height: 1.4
- H6: 1.25rem (20px) / line-height: 1.4

### Body Text
- Large: 1.125rem (18px) / line-height: 1.6
- Regular: 1rem (16px) / line-height: 1.6
- Small: 0.875rem (14px) / line-height: 1.5
- Extra Small: 0.75rem (12px) / line-height: 1.5

### Special Text
- Hero Title: 4rem (64px) / line-height: 1.1
- Navigation: 1rem (16px) / line-height: 1
- Buttons: 1rem (16px) / line-height: 1.2
- Footer: 0.875rem (14px) / line-height: 1.5

## Letter Spacing
- Headings: -0.02em
- Body: 0
- All Caps Text: 0.05em
- Buttons: 0.03em

## Text Transforms
- Organization Name: Uppercase
- Main Navigation: Uppercase
- Buttons: Uppercase
- Headings: Normal case
- Body Text: Normal case

## CSS Implementation

```css
:root {
  --font-primary: 'Orbitron', Arial, Helvetica, sans-serif;
  --font-secondary: 'Exo 2', Verdana, Geneva, sans-serif;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.75rem;
  --font-size-4xl: 2rem;
  --font-size-5xl: 2.5rem;
  --font-size-6xl: 3rem;
  --font-size-hero: 4rem;
}

body {
  font-family: var(--font-secondary);
  font-weight: 400;
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: #E0E0E0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

h1 {
  font-size: var(--font-size-6xl);
  line-height: 1.2;
}

h2 {
  font-size: var(--font-size-5xl);
  line-height: 1.2;
}

h3 {
  font-size: var(--font-size-4xl);
  line-height: 1.3;
}

h4 {
  font-size: var(--font-size-3xl);
  line-height: 1.3;
}

h5 {
  font-size: var(--font-size-2xl);
  line-height: 1.4;
}

h6 {
  font-size: var(--font-size-xl);
  line-height: 1.4;
}

.hero-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-hero);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.nav-link {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.2;
}

.small-text {
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.caption {
  font-size: var(--font-size-xs);
  line-height: 1.5;
  font-weight: 200;
}

.footer-text {
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.all-caps {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

blockquote {
  font-style: italic;
  font-weight: 300;
}

strong {
  font-weight: 600;
}
```

## Responsive Typography

### Mobile (< 768px)
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.75rem (28px)
- H4: 1.5rem (24px)
- H5: 1.25rem (20px)
- H6: 1.125rem (18px)
- Hero Title: 3rem (48px)

### Tablet (768px - 1023px)
- H1: 2.75rem (44px)
- H2: 2.25rem (36px)
- H3: 1.875rem (30px)
- H4: 1.625rem (26px)
- H5: 1.375rem (22px)
- H6: 1.25rem (20px)
- Hero Title: 3.5rem (56px)

### Desktop (≥ 1024px)
- Use default sizes as defined in the Typography Scale section

## Typography Best Practices

1. Maintain consistent spacing between paragraphs (1.5em)
2. Use proper hierarchy to guide users through content
3. Limit line length to 60-75 characters for optimal readability
4. Use Orbitron sparingly for maximum impact
5. Ensure sufficient contrast between text and background colors
6. Use font weights to create hierarchy rather than multiple font families
7. Maintain consistent alignment (primarily left-aligned for body text)
8. Use proper typographic punctuation (smart quotes, em dashes, etc.)

