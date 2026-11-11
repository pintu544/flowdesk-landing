# Flowdesk — SaaS Landing Page

A responsive landing page for **Flowdesk**, a fictional shared-inbox / helpdesk SaaS for
small customer-support teams. Built as the Sankar Group Front-End Development internship
assignment (brief: a clean, responsive SaaS landing page with working navigation and
basic interactions — no backend required).

## Live demo

- **Live site:** https://sankar-assignment.vercel.app
- Deployed on Vercel; the page is three static files, so it loads instantly.

## Run locally

No build step and no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve the folder: `npx serve .` (or `python3 -m http.server`) and visit the printed URL.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | All content and structure — semantic sections, the form, FAQ and testimonial markup |
| `styles.css` | The whole design system — custom properties (colour/type tokens), layout, breakpoints, motion |
| `script.js` | All interactions — mobile nav, pricing toggle, form validation, FAQ accordion, scroll reveal |
| `screenshots/` | Desktop and mobile renders of the finished page |
| `UPGRADE.md` | The plan for the post-submission polish pass, mapped to the brief's marking rubric |

## Technologies used

- Semantic **HTML5** (header/nav, main, sections, figure/blockquote, form with labels)
- Hand-written **CSS3** — custom properties, flexbox/grid, sticky header, two
  breakpoints (760px, 960px), `prefers-reduced-motion` support. No CSS framework.
- Vanilla **JavaScript** (no libraries) — every interaction is explainable line by line.

## What's on the page

- Sticky navigation with smooth-scroll section links (with scroll-margin so targets
  never hide under the header) and a mobile hamburger menu
- Hero with a product visual built entirely in HTML/CSS (a mock support inbox with a
  floating response-time stat card) — zero images, zero external assets
- Features — six cards with inline SVG icons
- How it works — three steps
- Pricing — three plans with a working **monthly/annual toggle** (annual = 20% off),
  built as an accessible `role="switch"` control
- Testimonials — three short quotes from (illustrative) customer teams
- FAQ — an accessible accordion (real buttons, `aria-expanded`, keyboard friendly)
- Demo-request form — client-side **validation with inline errors** wired via
  `aria-describedby` / `aria-invalid`, focus moves to the first error, and the success
  message takes focus on submit (no backend, as per the brief)
- Contact details + footer

## Accessibility

Audited against WCAG 2.2 AA: **axe-core reports 0 violations**, and every text colour
pair was checked at ≥ 4.5:1 contrast (the audit caught one real defect — the pricing
badge's white text was being overridden by a more specific rule — since fixed).
Skip link, visible focus rings, labelled landmarks, and full keyboard paths throughout.
Scroll-reveal animations are progressive enhancement: content is visible without
JavaScript, and nothing animates for `prefers-reduced-motion` users.

## Design notes

One accent colour (deep teal `#0c6b5c`) on a warm paper background keeps the hierarchy
calm and consistent — the point of the product itself. The hero visual is pure markup
instead of an image, so the page has zero external assets, loads instantly, and stays
crisp at any screen size. Layout is verified at 360 / 768 / 1024 / 1440 px with no
horizontal overflow. Screenshots of the desktop and mobile layouts are in `screenshots/`.

*Flowdesk is a fictional product created for this assignment; testimonials and contact
details are illustrative.*
