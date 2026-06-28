# Punarjoy — Project Structure

## Stack
- **Bundler:** Vite
- **Language:** Vanilla HTML / CSS / JS (no framework)
- **Deployment:** GitHub Pages via `gh-pages` branch

---

## Folder Structure

```
punarjoy/
│
├── index.html                  # Single page — all sections
│
├── assets/
│   ├── logo_p.jpeg             # ✅ Brand logo
│   ├── Punarjoy.jpeg           # ⏳ Rooms section image (pending)
│   ├── double.jpeg             # ⏳ Double Sharing room (pending)
│   ├── single.jpeg             # ⏳ Single Sharing room (pending)
│   ├── double_premium.jpeg     # ⏳ Double Premium room (pending)
│   ├── single_premium.jpeg     # ⏳ Single Premium room (pending)
│   └── qr.png                  # ⏳ UPI QR code (pending)
│
├── css/
│   ├── tokens.css              # All CSS custom properties from DESIGN.md
│   ├── reset.css               # Box-sizing, margin/padding reset, base font
│   ├── global.css              # Body, container, hairline divider, shared utils
│   ├── navbar.css              # Sticky nav, hamburger, mobile drawer
│   ├── hero.css                # Hero section, display headline, trust badges
│   ├── tabs.css                # Sticky service anchor tabs
│   ├── cards.css               # Shared card structure (image + bottom panel)
│   ├── pg-section.css          # PG green header + card grid
│   ├── rooms-section.css       # Rooms yellow header + card grid
│   ├── features.css            # Why Punarjoy pink strip
│   ├── booking.css             # Red booking section, QR layout, form
│   └── footer.css              # Footer layout
│
├── js/
│   ├── main.js                 # Entry point — imports all modules
│   ├── navbar.js               # Hamburger toggle, sticky behavior
│   ├── tabs.js                 # Service tab scroll + active state
│   ├── price-toggle.js         # Monthly/Yearly price switcher on cards
│   └── booking.js              # Form validation, plan toggle, submit handler
│
├── DESIGN.md                   # The1 design system reference
├── BRIEF.md                    # Full project specification
├── STRUCTURE.md                # This file
├── PROMPTS.md                  # Ordered Antigravity build prompts
│
├── vite.config.js              # Vite config (base path for GitHub Pages)
├── package.json
└── .gitignore
```

---

## CSS Architecture Rules

1. **`tokens.css` is imported first** — every other file consumes only CSS custom properties, never raw hex values
2. **One CSS file per section** — Antigravity prompts target a single file at a time, no cross-contamination
3. **No CSS frameworks** — pure custom properties + flexbox/grid only
4. **Mobile-first** — base styles are mobile, `@media (min-width: 768px)` and `@media (min-width: 1024px)` layer up

---

## JS Architecture Rules

1. **`main.js` is the only script tag** in `index.html` — everything else is an ES module import
2. **Each JS file handles exactly one feature** — no monolithic files
3. **No external JS libraries** — vanilla only
4. **`price-toggle.js`** reads data attributes on cards (`data-monthly`, `data-yearly`) and swaps display text on toggle click

---

## HTML Section IDs (for anchor navigation)

```html
<section id="pgs">      <!-- PG Plans section -->
<section id="rooms">    <!-- Rooms section -->
<section id="features"> <!-- Why Punarjoy -->
<section id="booking">  <!-- Booking form -->
<footer id="footer">
```

---

## Vite Config (GitHub Pages)

```js
// vite.config.js
export default {
  base: '/punarjoy/', // replace with actual repo name
  build: {
    outDir: 'dist'
  }
}
```

---

## CSS Import Order in `global.css` or `main.js`

```css
@import './tokens.css';
@import './reset.css';
@import './global.css';
@import './navbar.css';
@import './hero.css';
@import './tabs.css';
@import './cards.css';
@import './pg-section.css';
@import './rooms-section.css';
@import './features.css';
@import './booking.css';
@import './footer.css';
```

---

## Data Attributes on Cards

Cards use `data-*` attributes so `price-toggle.js` can swap prices without hardcoding in JS:

```html
<div class="plan-card"
  data-monthly="₹17,000"
  data-yearly="₹1,70,000"
  data-plan="double-premium">
```

---

## Git Workflow

```bash
# Init
git init
git remote add origin https://github.com/YOUR_USERNAME/punarjoy.git

# Dev
npm run dev

# Build + Deploy
npm run build
npx gh-pages -d dist
```
