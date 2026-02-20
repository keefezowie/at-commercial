# Asset Manifest Template (Marketing Website)

Use this file as the single source of truth for all website assets and content dependencies.

## 1) Project Info

- Project: AT Commercial Website
- Workspace: apps/marketing
- Last Updated: YYYY-MM-DD
- Owner: 
- Designers: 
- Copywriters: 
- Engineering: 

---

## 2) Delivery Rules

- Preferred formats:
  - Raster photos/screenshots: WebP (fallback PNG/JPG)
  - Logos/icons/illustrations: SVG
  - Optional animation assets: Lottie JSON or MP4/WebM
- Target quality:
  - Hero/feature visuals: 2x source resolution for retina
  - Logos/icons: vector-first
- Naming convention:
  - [section]-[purpose]-[variant]-[size].[ext]
  - Example: hero-product-main-dark-1920x1080.webp
- Storage locations:
  - Brand assets: apps/marketing/public/brand/
  - Product/media assets: apps/marketing/public/mockups/

---

## 3) Brand Core Assets

| ID | Asset | Required | Spec | Target Path | Status | Owner | Notes |
|---|---|---|---|---|---|---|---|
| B-01 | Primary logo (light bg) | Yes | SVG + PNG fallback | public/brand/logo-primary-light.svg | ☐ |  |  |
| B-02 | Primary logo (dark bg) | Yes | SVG + PNG fallback | public/brand/logo-primary-dark.svg | ☐ |  |  |
| B-03 | Mark/icon only | Yes | SVG + PNG 512x512 | public/brand/logo-mark.svg | ☐ |  |  |
| B-04 | Favicon set | Yes | 16, 32, 48, 180 + ICO | public/brand/favicon* | ☐ |  |  |
| B-05 | App icon/share icon | Yes | 512x512 PNG | public/brand/app-icon-512.png | ☐ |  |  |
| B-06 | OG default image | Yes | 1200x630 | public/brand/og-default-1200x630.webp | ☐ |  |  |

---

## 4) Code-Generated Visuals (No Image Asset Needed)

These are already component-driven and should stay code-based unless direction changes:

- Hero composition and layered motion:
  - apps/marketing/components/marketing/HeroLayered.tsx
- Interactive before/after:
  - apps/marketing/components/marketing/BeforeAfterSlider.tsx
- Workflow and step visual blocks:
  - apps/marketing/components/marketing/WorkflowStepper.tsx
  - apps/marketing/components/marketing/WorkflowPreviewStrip.tsx
- Outcome/stat cards and proof chips:
  - apps/marketing/components/marketing/OutcomeCard.tsx
  - apps/marketing/components/marketing/ProofChipRail.tsx
- Format/security/pricing matrices and panels:
  - apps/marketing/components/marketing/FormatsMatrix.tsx
  - apps/marketing/components/marketing/SecurityPanel.tsx
  - apps/marketing/components/marketing/PricingPreviewSection.tsx

If you want a Linear-style look, prioritize:
- SVG-based micro-illustrations
- CSS gradients, masks, and blur layers
- Lightweight motion transforms

---

## 5) Page-by-Page Asset Requirements

### Home (/)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| H-01 | Hero | Product mockup (optional) | WebP/PNG | 1920x1080 | public/mockups/home-hero-main.webp | ☐ | Only if not fully code-rendered |
| H-02 | Translation gallery | Before sample set | WebP | 1600x1000 x N | public/mockups/translation-before-*.webp | ☐ | Paired with after set |
| H-03 | Translation gallery | After sample set | WebP | 1600x1000 x N | public/mockups/translation-after-*.webp | ☐ | Must match before names |
| H-04 | CAD showcase | CAD output preview | WebP/PNG | 1800x1200 | public/mockups/cad-showcase-main.webp | ☐ |  |
| H-05 | Social proof | Customer logos | SVG | variable | public/brand/customers/*.svg | ☐ | Optional if adding logo rail |

### Features (/features)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| F-01 | Feature workflow | UI screenshot strip | WebP | 1600x900 x N | public/mockups/features-strip-*.webp | ☐ | Optional, can remain code-only |
| F-02 | Capability proof | Icons/mini illustrations | SVG | 24-128px | public/brand/icons/features-*.svg | ☐ | Prefer code/SVG |

### Formats (/formats)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| FM-01 | Formats matrix | File-type icons | SVG | 24-64px | public/brand/icons/filetypes/*.svg | ☐ | Optional; matrix works without |

### CAD Translation (/cad-translation)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| C-01 | CAD hero/showcase | CAD viewport visual | WebP/PNG | 1920x1080 | public/mockups/cad-hero-main.webp | ☐ |  |
| C-02 | CAD detail | Zoomed comparison crops | WebP | 1200x900 x N | public/mockups/cad-detail-*.webp | ☐ | Optional |

### Pricing (/pricing)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| P-01 | Pricing cards | None required | - | - | - | N/A | Code-based currently |

### Demo (/demo), Contact (/contact), Security (/security)

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| DCS-01 | Side/support visual | Trust/ops illustration | SVG/WebP | 1200x800 | public/mockups/trust-ops-illustration.webp | ☐ | Optional enhancement |

### Legal + 404

| ID | Section | Asset Needed | Type | Spec | Path | Status | Notes |
|---|---|---|---|---|---|---|---|
| L-01 | Privacy/Terms/404 | None required | - | - | - | N/A | Text-first pages |

---

## 6) Content Dependencies (Non-Image Assets)

| ID | Content Item | Required | Source | Status | Owner | Notes |
|---|---|---|---|---|---|---|
| T-01 | Homepage headline/subheadline | Yes | Marketing | ☐ |  |  |
| T-02 | Feature descriptions | Yes | Product/Marketing | ☐ |  |  |
| T-03 | Pricing copy/disclaimers | Yes | Sales/Legal | ☐ |  |  |
| T-04 | Security claims (approved) | Yes | Security/Legal | ☐ |  | No unverified certifications |
| T-05 | Privacy policy final text | Yes | Legal | ☐ |  |  |
| T-06 | Terms of use final text | Yes | Legal | ☐ |  |  |
| T-07 | Form success/error copy | Yes | Product/Support | ☐ |  |  |

---

## 7) SEO + Social Metadata Assets

| ID | Asset | Spec | Path | Status | Notes |
|---|---|---|---|---|---|
| S-01 | Default OG image | 1200x630 WebP/PNG | public/brand/og-default-1200x630.webp | ☐ | Used site-wide fallback |
| S-02 | Home OG image | 1200x630 | public/mockups/og-home-1200x630.webp | ☐ | Optional per-page override |
| S-03 | Feature OG images | 1200x630 each | public/mockups/og-*.webp | ☐ | Optional per route |
| S-04 | X/Twitter image set | 1200x675 | public/mockups/twitter-*.webp | ☐ | Optional |

---

## 8) QA Acceptance Checklist

- [ ] All required files exist in public paths.
- [ ] No blurry assets on retina (2x source where needed).
- [ ] SVGs optimized and viewBox preserved.
- [ ] OG images validated with social preview tools.
- [ ] File size budget respected (hero media under agreed threshold).
- [ ] Alt text prepared for every meaningful image.
- [ ] No legal/compliance claims without approval.

---

## 9) Optional: Linear-Style Implementation Notes

If you want the same “built with code” feel:

- Prefer componentized visual primitives over baked screenshots.
- Use SVG for charts, icons, separators, and UI chrome motifs.
- Reserve raster images for:
  - product screenshots
  - team/customer photos
  - complex photoreal visuals
- Keep motion subtle and data-dense; avoid heavy decorative animation.

---

## 10) Handoff Log

| Date | Change | By | Notes |
|---|---|---|---|
| YYYY-MM-DD | Initial manifest created |  |  |
