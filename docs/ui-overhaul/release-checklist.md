# UI Overhaul Release Checklist

## Quality Gate
- [x] `npm run lint`
- [x] `npm run test:e2e --workspace @at/marketing`
- [x] `npm run build`

## Visual QA
- [ ] Homepage desktop and mobile reviewed against baseline screenshots.
- [ ] Features, pricing, demo, and contact pages reviewed on desktop and mobile.
- [ ] 404, privacy, and terms pages checked for typography and spacing consistency.

## Motion + Accessibility
- [x] Reduced-motion flow verified on homepage and FAQ.
- [x] Keyboard navigation and focus visibility confirmed for nav, hero CTAs, and forms.
- [x] Mobile nav open/close behavior verified (backdrop, escape, route-change close).

## Conversion + Behavior Integrity
- [x] CTA hierarchy preserved: `Request Demo` primary, `Subscriber Login` secondary.
- [x] Demo and contact form validation and submission states verified.
- [x] API routes unchanged: lead/contact/waitlist/health.
- [x] Analytics event names unchanged for CTA and form events.

## Performance Targets
- [ ] Lighthouse accessibility >= 95 on homepage.
- [ ] Lighthouse performance >= 90 desktop (homepage) and >= 80 mobile (homepage).
- [ ] Core interaction pages (`/pricing`, `/demo`) reviewed for layout shift and jank.
