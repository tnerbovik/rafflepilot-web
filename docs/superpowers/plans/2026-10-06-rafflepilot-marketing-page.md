# RafflePilot marketing page implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans for native execution, or superpowers:subagent-driven-development if the user chooses delegation. Steps use checkbox syntax for tracking.

**Goal:** Replace the placeholder with a complete screenshot-led marketing page that explains RafflePilot and encourages iPhone downloads.

**Architecture:** Plain semantic HTML with one shared stylesheet and local image assets. Content and navigation work without JavaScript; GitHub Pages serves the repository root directly.

**Tech stack:** HTML, CSS, SVG, optimized WebP screenshots, existing Python/Pillow runtime for asset export, and GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-10-06-rafflepilot-website-design.md`.

## Global constraints

- Keep the official ticket-and-wordmark logo, original colors, and 5:1 proportions; use the white Raffle variant on dark backgrounds.
- Use forest green, emerald, warm gold, and white; no aviation imagery or metaphors.
- English copy; no hardcoded price, invented testimonials, statistics, or certification claims.
- Android remains “Coming soon to Android” until a real Play Store URL is provided.
- No video embed in this pass, framework, backend, accounts, analytics, or external font dependency.
- Preserve `CNAME` as `rafflepilot.app` and `.nojekyll`; publish main from the repository root.
- Include semantic landmarks, descriptive alt text, explicit image dimensions, visible focus states, and reduced-motion support.

## Review focus

- At 360px width, the logo, navigation, copy, screenshots, and download actions fit without horizontal overflow.
- Screenshots remain sharp, proportional, and useful; capture borders and cursors are excluded from the Golden Draw crop.
- Visitors using a keyboard can reach navigation, download, privacy, and support links with visible focus.
- Content remains visible with JavaScript unavailable and motion reduced.
- Every published local asset resolves, including when arriving through the custom 404 page; HTTPS is reported separately if provisioning remains blocked.

## File responsibilities

- `index.html`: page structure, feature copy, accessible navigation, image references, and search/social metadata.
- `assets/site.css`: shared responsive styling for the landing page and 404 page.
- `assets/screenshots/{winner,setup,bingo,history,raffles,golden}.webp`: optimized authentic app imagery.
- `assets/rafflepilot-logo-light.svg`: unchanged original logo for light sections; retain the existing dark variant and app icon.
- `assets/app-store-badge.svg`: official English Apple download badge, obtained from Apple's marketing resources.
- `assets/social-preview.png`: 1200×630 preview using the actual logo, icon, and hero copy.
- `404.html`, `robots.txt`, `sitemap.xml`: static navigation recovery and discovery.
- `README.md`: final site structure, asset sources, preview and deployment instructions.

### Task 1: Prepare original product imagery

**Consumes:** Logo vectors and five full-resolution iOS screenshots in the app project, plus the existing Golden Draw recording still, at the paths in the spec.

**Produces:** The local assets listed above, with their exported dimensions recorded for HTML use.

- [ ] Inspect the source screenshots and Golden Draw still; identify the crop that preserves the winner and golden label while excluding borders and cursor.
- [ ] Copy the original light logo; obtain the official English App Store badge from Apple's marketing resources.
- [ ] Export screenshot WebPs at up to 780px wide, preserving aspect ratio and readability; export the Golden Draw crop separately without modifying the original recordings.
- [ ] Inspect each exported asset and verify dimensions, logo identity, legibility, and clean corners before using it.

### Task 2: Build the complete landing page

**Consumes:** Task 1 assets and the exact headings and feature copy in the spec.

**Produces:** `index.html` and `assets/site.css`, with working `#features` and `#how-it-works` anchors.

- [ ] Replace the centered placeholder with a responsive header and split hero: headline and App Store action beside the winner screen; supporting setup screen on desktop.
- [ ] Add the offline/accounts/ads/tracking strip and alternating setup, bingo, and history sections, including the Golden Draw feature and authentic still.
- [ ] Add the three setup steps, four supporting feature cards, compact event use cases, final App Store action, Android status, and official-logo footer.
- [ ] Move styling into `assets/site.css`; implement desktop columns and stacked mobile sections, preserve screenshot aspect ratios, and lazy-load below-the-fold images.
- [ ] Add focus states and reduced-motion CSS; use native anchors with no JavaScript requirement.
- [ ] Serve locally using the existing port 8765 server, or start `python3 -m http.server 8765` if it is unavailable.
- [ ] Use CUA browser verification at desktop and 360×800: inspect every section, screenshot clarity, image loading, document overflow, keyboard focus, and the App Store/privacy/support destinations. Verify that the HTML contains no script dependency and that motion is removed under the reduced-motion media rule. Save desktop and mobile screenshots.
- [ ] Run `git diff --check`, review the complete page against the spec, and commit the verified page and assets.

### Task 3: Complete static publishing and verify delivery

**Consumes:** Task 2 page and shared styles.

**Produces:** Search/social metadata, recovery page, updated documentation, and a verified Pages deployment.

- [ ] Generate and inspect the social preview using the official branding; update canonical, Open Graph, and description metadata in `index.html`.
- [ ] Create `404.html` with a home link and root-relative asset references; add `robots.txt` and `sitemap.xml` for `https://rafflepilot.app/`.
- [ ] Update README with the completed feature page, asset provenance, and verified deployment status.
- [ ] Check every local HTML asset reference exists; inspect the 404 page in the browser and confirm its home link works. Parse the sitemap as XML and run `git diff --check`.
- [ ] Commit and push the changes to main; wait for the corresponding GitHub Pages workflow to report success.
- [ ] Fetch the published page and screenshot assets to confirm the new content is served. Recheck the custom-domain certificate and www redirect; enable Enforce HTTPS only after the certificate is valid. Report any unresolved certificate limitation without claiming secure delivery.
- [ ] Show the user the published result and embed saved browser screenshots demonstrating the feature content and mobile layout.
