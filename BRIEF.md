# Punarjoy — Project Brief

## Overview

**Client:** Punarjoy  
**Project:** Marketing + Booking Website  
**Stack:** Vite · Vanilla HTML/CSS/JS  
**Deployment:** GitHub Pages  
**Responsive:** Mobile-first, full desktop parity (breakpoint: 768px)  
**Font:** Barlow Condensed (Google Fonts) — KH Teka substitute  
**Design System:** The1 (see DESIGN.md)

---

## Brand Assets

| Asset | File | Status |
|-------|------|--------|
| Logo | `assets/logo_p.jpeg` | ✅ Available |
| Rooms hero image | `assets/Punarjoy.jpeg` | ⏳ Pending client |
| Double Sharing | `assets/double.jpeg` | ⏳ Pending client |
| Single Sharing | `assets/single.jpeg` | ⏳ Pending client |
| Double Sharing Premium | `assets/double_premium.jpeg` | ⏳ Pending client |
| Single Sharing Premium | `assets/single_premium.jpeg` | ⏳ Pending client |
| UPI QR Code | `assets/qr.png` | ⏳ Pending client |

**Placeholders for pending room images (swap in-place when received):**
```
https://placehold.co/800x600/d9d9d9/1f1f1f?text=Double+Sharing
https://placehold.co/800x600/d9d9d9/1f1f1f?text=Single+Sharing
https://placehold.co/800x600/d9d9d9/1f1f1f?text=Double+Premium
https://placehold.co/800x600/d9d9d9/1f1f1f?text=Single+Premium
https://placehold.co/800x600/d9d9d9/1f1f1f?text=Punarjoy+Rooms
```

---

## Color → Section Mapping

| Color | Hex | Section |
|-------|-----|---------|
| The Green | `#027b49` | PG section header block |
| The Yellow | `#fbb833` | Rooms section header block |
| The Pink | `#f19ec8` | Why Punarjoy / Features strip |
| The Red | `#fa4d43` | Booking section |
| Concrete | `#d9d9d9` | Page canvas, card bottoms, form inputs |
| Iron | `#1f1f1f` | All text, borders, pill buttons, navbar |

---

## Services & Pricing

### Service A — Punarjoy PGs
> All plans are all-inclusive meal packages.

| Plan | Image | Monthly | Yearly | Balcony |
|------|-------|---------|--------|---------|
| Double Sharing | `double.jpeg` | ₹15,000 | ₹1,50,000 | ❌ |
| Single Sharing | `single.jpeg` | ₹20,000 | ₹2,00,000 | ❌ |
| Double Sharing Premium | `double_premium.jpeg` | ₹17,000 | ₹1,70,000 | ✅ |
| Single Sharing Premium | `single_premium.jpeg` | ₹22,000 | ₹2,20,000 | ✅ |

**All PG plans include:**
- AC rooms
- 4 time meals (daily)
- Free WiFi
- Room cleaning
- 100 units free electricity per month
- Transportation *(Yearly plan only)*

### Service B — Punarjoy Rooms
> Standalone rooms, no meal package.

| Plan | Image | Monthly | Yearly | Balcony |
|------|-------|---------|--------|---------|
| Normal Room | `Punarjoy.jpeg` | ₹11,000 | ₹1,00,000 | ❌ |
| Premium Room | `Punarjoy.jpeg` | ₹13,000 | ₹1,20,000 | ✅ |

---

## Pages & Sections

### Single Page (index.html) — scroll-based

1. **Navbar** — sticky, logo + nav links + enquire pill + mobile hamburger
2. **Hero** — display headline, dual CTAs, trust badges
3. **Service Tabs** — sticky anchor tabs: PGs | Rooms
4. **PG Section** — green header block + 4 plan cards (2×2 grid)
5. **Rooms Section** — yellow header block + 2 plan cards
6. **Why Punarjoy** — pink full-bleed strip, 6 USPs
7. **Booking Section** — red full-bleed, QR + form
8. **Footer** — logo, links, contact, copyright

---

## Component Specs

### Navbar
- Bg: `#d9d9d9`, bottom: `1px solid #1f1f1f`
- Left: `logo_p.jpeg` height 40px
- Right: text links — PGs · Rooms · Book Now — Barlow Condensed 15px `#1f1f1f`
- Far right: pill button "Enquire" — bg `#1f1f1f`, text `#d9d9d9`, radius 100px, padding 10px 20px
- Mobile: logo left + 48px circle hamburger `#1f1f1f` right, full-width drawer on click
- Sticky on scroll, no shadow, no blur — stays flat

### Hero
- Bg: `#d9d9d9`, full viewport height
- Headline: "YOUR HOME / AWAY FROM / HOME" — Barlow Condensed 80px desktop / 48px mobile, letter-spacing -0.06em, line-height 0.75, color `#1f1f1f`, left-aligned
- Subline: "All-inclusive PGs & Rooms" — 26px, -0.03em
- Two pill CTAs: "Explore PGs" + "Explore Rooms" — both bg `#1f1f1f`, text `#d9d9d9`, radius 100px
- Trust badges inline: "AC Rooms · 4 Meals Daily · Free WiFi · 100 Units Electricity" — 15px `#1f1f1f`
- Bottom: `1px solid #1f1f1f` hairline divider

### Service Anchor Tabs
- Sticky below navbar
- Two pill tabs: "PGs" | "Rooms"
- Active: bg `#1f1f1f`, text `#d9d9d9`, radius 100px
- Inactive: plain text `#1f1f1f`, 18px
- Click scrolls to respective section
- Bottom: `1px solid #1f1f1f`

### PG Plan Card (×4)
- Zero border-radius
- Top 60%: room image (object-fit cover)
- Bottom 40%: bg `#d9d9d9`
  - Room name — Barlow Condensed 26px `#1f1f1f`
  - "PREMIUM" pill tag — bg `#1f1f1f`, text `#d9d9d9`, radius 100px, 12px (Premium plans only)
  - "Balcony" pill tag — border `1px solid #1f1f1f`, bg transparent, text `#1f1f1f`, radius 100px, 12px (Premium plans only)
  - Price toggle (JS): "Monthly ₹17k" / "Yearly ₹1.7L" — 18px, -0.03em
  - Service chips: AC · 4 Meals · WiFi · Cleaning · 100 Units — pill tags, border `1px #1f1f1f`, bg transparent, 12px, radius 100px
  - Footnote: "★ Yearly plan includes Transportation" — system-sans 12px
  - CTA: "Enquire Now" pill — bg `#1f1f1f`, text `#d9d9d9`, radius 100px

### Rooms Plan Card (×2)
- Same structure as PG card
- No service chips (rooms are bare)
- "Balcony" tag on Premium only
- CTA: "Enquire Now"

### Why Punarjoy Strip
- Full-bleed bg: `#f19ec8`
- Headline: "EVERYTHING INCLUDED" — 60px `#1f1f1f`, -0.03em, line-height 0.8
- 6 items in a row (desktop) / 2-col grid (mobile)
- Each item: Barlow Condensed 18px `#1f1f1f`, text-only (no icons)
- `1px solid #1f1f1f` vertical hairlines between desktop items
- Items: AC Rooms · 4 Time Meals · Free WiFi · Daily Cleaning · 100 Units Electricity · Yearly Transportation

### Booking Section
- Full-bleed bg: `#fa4d43`
- Headline: "BOOK YOUR ROOM" — 60px `#d9d9d9`, -0.03em
- Subline: "Pay ₹6,000 security deposit to confirm. Verified within 24 hours." — 18px `#1f1f1f`
- 2-col layout desktop / stacked mobile
  - Left: QR code image (`assets/qr.png`) centered + UPI ID text below — 15px `#1f1f1f`
  - Right: Form
    - Full Name (text input)
    - Email (email input)
    - Phone Number (tel input)
    - Room Type (select — 6 options: Double Sharing, Single Sharing, Double Premium, Single Premium, Normal Room, Premium Room)
    - Plan (pill toggle: Monthly | Yearly)
    - Upload Payment Screenshot (file input, accept image/*)
    - Submit: "Confirm Booking" pill — bg `#1f1f1f`, text `#d9d9d9`, radius 100px
- All inputs: `1px solid #1f1f1f` border, no border-radius, bg `#d9d9d9`
- Form action: Formspree (endpoint added before launch)

### Footer
- Bg: `#d9d9d9`, top: `1px solid #1f1f1f`
- Left: `logo_p.jpeg` 36px + "PUNARJOY" Barlow Condensed 26px `#1f1f1f`
- Center: quick links — PGs · Rooms · Book Now — 15px `#1f1f1f`
- Right: phone · email
- Bottom strip: "© 2025 Punarjoy. All rights reserved." — system-sans 12px `#1f1f1f`

---

## Booking Flow

```
User clicks "Book Now" / "Enquire Now"
  → Scrolls to / links to Booking Section
  → Sees QR code + UPI ID
  → Pays ₹6,000 security deposit via UPI
  → Takes screenshot of payment
  → Fills form (name, email, phone, room type, plan, screenshot upload)
  → Submits → Formspree sends email to client with all details + screenshot
  → Success message: "Booking received! We'll confirm within 24 hours."
```

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|-----------|-----------|
| < 768px (mobile) | 1-col cards, hamburger nav, stacked booking layout, 48px headline |
| ≥ 768px (tablet) | 2-col cards, inline nav visible |
| ≥ 1024px (desktop) | 2×2 PG grid, full nav, side-by-side booking layout |
| max 1440px | Container max-width cap |

---

## Third-Party Dependencies

| Service | Purpose | Setup |
|---------|---------|-------|
| Formspree.io | Form submissions + file upload to email | Sign up, create form, paste endpoint |
| Google Fonts | Barlow Condensed (KH Teka substitute) | Import in `index.html` |
| placehold.co | Room image placeholders until client sends assets | No setup needed |

---

## Pre-Launch Checklist

- [ ] Replace all `placehold.co` URLs with real room images
- [ ] Add `assets/qr.png` (client's UPI QR)
- [ ] Add `assets/Punarjoy.jpeg` (rooms hero)
- [ ] Paste Formspree endpoint in booking form action
- [ ] Add real phone number and email in footer + contact
- [ ] Test form submission end-to-end
- [ ] Test on mobile (iOS Safari + Android Chrome)
- [ ] Deploy to GitHub Pages
