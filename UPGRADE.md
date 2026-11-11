# Flowdesk — polish pass plan (post-submission, deadline 15 Nov 2026)

Method: Impeccable `polish` (refinement of the incumbent design, not a redesign) +
WCAG 2.2 AA audit. The submission is already in; the live URL and repo update in
place, so every improvement here reaches the evaluator unchanged.

## Mapped to the brief's rubric

- **Design 25%** — deepen the hero product visual (thread pane, reply composer,
  status pills, layered depth; still pure HTML/CSS, zero external assets);
  testimonial band (2 short quotes); consistent card elevation/hover.
- **Responsive 20%** — verify 360 / 768 / 1024 / 1440 px and 200% zoom; fix any
  overflow or crowding found.
- **Code structure 20%** — section comments stay accurate; remove dead CSS;
  README gains a file map.
- **Interactions 20%** — FAQ accordion (button + aria-expanded, keyboard native);
  scroll-reveal via IntersectionObserver with a no-JS fallback (content is never
  hidden unless JS is running) and `prefers-reduced-motion` respected; form
  success receives focus; errors wired with `aria-describedby` (verify).
- **Submission quality 15%** — README: overview, live links, rubric map, design
  decisions, accessibility notes, how to run; fresh screenshots.

## Constraints kept

- Vanilla HTML/CSS/JS only — the brief requires the candidate to explain the
  code; no framework, no build step, no external assets.
- Fictional product stays fictional (Sankar Group is a multi-vertical group;
  the brief asks for *a* SaaS landing page, not their company site).
- All previously verified behaviours must re-verify after the pass:
  anchor nav, mobile menu, pricing toggle $29→$23, form validation + success.

## Verification

Playwright: interaction suite + axe-core + screenshots at 4 widths, visually
inspected; contrast ratios computed for every text/background token pair.
