# Flowdesk — SaaS Landing Page

A responsive landing page for **Flowdesk**, a fictional shared-inbox / helpdesk SaaS for
small customer-support teams. Built as the Sankar Group Front-End Development internship
assignment (brief: a clean, responsive SaaS landing page with working navigation and
basic interactions — no backend required).

## Live demo

Deployed on Vercel — see the repository's About link or run it locally (below).

## Run locally

No build step and no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve the folder: `npx serve .` (or `python3 -m http.server`) and visit the printed URL.

## Technologies used

- Semantic **HTML5** (header/nav, sections, form with labels and ARIA attributes)
- Hand-written **CSS3** — custom properties, flexbox/grid, sticky header, two
  breakpoints (760px, 960px), `prefers-reduced-motion` support. No CSS framework.
- Vanilla **JavaScript** (no libraries) — see `script.js`

## What's on the page

- Sticky navigation with smooth-scroll section links and a mobile hamburger menu
- Hero with a product visual built entirely in HTML/CSS (a mock support inbox)
- Features — six cards with inline SVG icons
- How it works — three steps
- Pricing — three plans with a working **monthly/annual toggle** (annual = 20% off)
- Demo-request form — client-side **validation with inline errors** and an in-page
  success message (no backend, as per the brief)
- Contact details + footer

## Design notes

One accent colour (deep teal) on a warm paper background keeps the hierarchy calm and
consistent — the point of the product itself. The hero visual is pure markup instead of
an image, so the page has zero external assets, loads instantly, and stays crisp at any
screen size. Screenshots of the desktop and mobile layouts are in `screenshots/`.
