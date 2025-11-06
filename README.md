# HobbyCue Responsive Layout

A responsive React implementation of the HobbyCue landing experience, built with React, React Bootstrap, and custom SVG assets. The project closely follows a Figma reference with precise spacing, icon sizing, and adaptive behavior for desktop and small devices (Android/iOS).

## Tech Stack

- React (Create React App)
- React Bootstrap (layout utilities only)
- Plain CSS-in-JS (inline styles) for pixel-accurate overrides

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Project Structure

```
responsive-layout/
  public/
    index.html         # HTML template, favicon set to logo.svg
    manifest.json      # PWA icons (logo.svg)
  src/
    assets/            # SVG/PNG icons and illustrations
    components/
      Navbar.js        # Responsive navbar (24x24 icons, mobile hamburger)
      HeroSection.js   # Intro with sign-in card and illustration
      Features.js      # Feature cards (People/Place/Product/Program)
      CTASection.js    # Responsive CTA banner with characters
      Testimonials.js  # Desktop/mobile-optimized testimonial block
      Footer.js        # Footer with circular social icons + invite form
    index.js, index.css
```

## Key UX Details Implemented

- Consistent icon sizing (navbar icons 24x24).
- Sign-in card tabs with active underline and muted inactive state.
- Social auth buttons, password toggle, and outline/filled button states per design.
- CTA section capped at maxWidth 1440 and responsive heights via `clamp`.
- Testimonials:
  - Desktop: wide audio tracker on the left; profile (avatar, name, role) on the right.
  - Mobile: name/role shown above the audio tracker; elements scale via `clamp`.
- Footer: 30px circular social icons with muted glyph color and joined invite input/button.

## Scripts

- `npm start` – Run dev server
- `npm run build` – Production build
- `npm test` – Run tests (CRA default)

## Customization Tips

- Colors are centralized inline near their usage (e.g., `#8064A2` for purple). Search for the hex if you need to tweak the theme.
- Most sizes use `clamp(min, vw, max)` to stay responsive; adjust min/max for tighter or looser scaling.

## Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). Mobile layouts tested on Android-scale widths.

## License

This repository is for educational/demo purposes. Use assets according to their respective licenses.
