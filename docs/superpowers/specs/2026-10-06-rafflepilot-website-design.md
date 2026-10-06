# RafflePilot website design

## Purpose

Create an impressive static website at https://rafflepilot.app that increases awareness of RafflePilot and encourages app purchases and downloads. RafflePilot helps event organizers draw winners from tickets, ticket books, bingo numbers, and custom entries. The iPhone app is available now; the user confirms that the Android release is approaching.

The main action is opening the existing App Store listing. Android visitors should see a clear coming-soon announcement. The site must work on GitHub Pages, with the domain registered at Dynadot.

## Visual direction

The earlier conversations “Dynadot hosting options” and “Markedsføringsstrategi for app” called for a polished app landing page with prominent screenshots, ticket and prize imagery, and offline and privacy benefits. The user explicitly rejected an aviation theme. Follow that correction: no airplanes, radar visuals, flight instruments, or takeoff metaphors.

Use the existing app identity: deep forest green, emerald, warm gold, and white. Pair oversized, tightly spaced headings with readable body text and generous space. A dark green hero contrasts with light sections below. Gold ticket details and restrained decorative rays connect the website to the winner screen.

Use the real app icon and screenshots from the App Store. Show the winner screen prominently in a phone frame, with a smaller setup screenshot beside it on wide screens. Preserve screenshot proportions and make the imagery stack cleanly on phones. Use locally stored, appropriately sized assets rather than loading them from Apple on every visit.

Subtle entrance effects and hover states can add polish. Respect reduced-motion preferences and ensure content remains visible without JavaScript. Avoid constant animation that competes with the download action.

## Page content and visitor flow

1. **Navigation:** App icon and RafflePilot name, links to features and how it works, and an App Store download action. Use a compact layout that fits small screens without requiring a scripted menu.
2. **Hero:** Headline “Make the draw. Make their day.” Supporting copy explains drawing raffle and prize winners on an iPhone in seconds. Show the official App Store badge, “Available for iPhone,” and “Coming soon to Android.” The winner screenshot provides an immediate view of the product.
3. **Trust strip:** Highlight offline operation, no accounts, no ads, and no tracking, grounded in the published app description and privacy policy.
4. **How it works:** Choose the ticket format, enter the tickets or entries, and draw winners. Pair short explanations with real setup and winner imagery.
5. **Features:** Explain ticket books and color series, custom lists, bingo, prizes, multiple raffles, and winner history. Emphasize equal chances for remaining tickets and preventing duplicate winners without claiming certification.
6. **Event use cases:** Show how the app fits school fairs, fundraisers, sports clubs, community events, and office prize draws. Use concise examples rather than invented testimonials or customer statistics.
7. **Final download section:** Repeat the App Store action and Android coming-soon message. Keep Android status as informative text until a real Play Store URL is provided; no inactive download badge or simulated waitlist.
8. **Footer:** Developer credit, support email, and a link to the existing privacy policy.

Initial website copy is in English. Do not hardcode a price because App Store prices vary by country and can change. The App Store listing handles purchasing and availability.

## Architecture

Use plain HTML and CSS with minimal optional JavaScript for visual enhancement. No application framework, backend, account system, form service, or analytics dependency is needed. Use semantic landmarks, descriptive alternative text, visible focus states, adequate contrast, and responsive layouts.

Keep source files in the repository root, with local images and styling in an assets directory. Add a custom 404 page, favicon, canonical URL, page description, social preview image, robots.txt, and sitemap.xml. Keep search and social metadata consistent with the product copy.

Publish from the main branch root using GitHub Pages. A CNAME file contains rafflepilot.app, and .nojekyll allows direct serving of the static files. Use the GitHub repository tnerbovik/rafflepilot-web. The user requested publishing a quick placeholder and connecting the domain while the full marketing site is developed; this initial deployment contains the app identity, an App Store action, Android status, and existing privacy and support links.

## Domain and hosting

DNS inspection on 6 October 2026 found Cloudflare nameservers for rafflepilot.app. Dynadot is the registrar, but Cloudflare currently controls DNS. Configure GitHub Pages with rafflepilot.app before changing DNS, and retain unrelated email and verification records.

Keep the current nameservers unless the user requests a DNS migration. At the active DNS provider, point the apex domain to GitHub Pages with the four documented A records and point www to tnerbovik.github.io. Ensure HTTPS works for the custom domain and the www redirect. If account access is unavailable, provide the exact records and remaining account steps after deploying and verifying the GitHub Pages URL.

## Verification and acceptance

Verify desktop and phone layouts in a browser, including a 360-pixel-wide viewport. Check image loading, readable screenshot presentation, no horizontal overflow, keyboard focus, reduced motion, and all download and footer links. Check that core content and navigation work without JavaScript.

Serve and verify the final static files locally before publishing. Then verify the GitHub Pages deployment and, once DNS access permits, the custom domain and HTTPS redirect. Do not claim the custom domain is live until it has been checked.

The delivered site must show the real app, offer clear download actions near the top and bottom, accurately announce Android availability, and meet the static hosting requirements. The design supports awareness and conversion; proving sales growth would require separate measurement beyond this initial scope.

## Product sources

- [RafflePilot App Store listing](https://apps.apple.com/us/app/rafflepilot/id6786706971)
- [Existing RafflePilot privacy policy](https://tnerbovik.github.io/legal/rafflepilot/)
- [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Dynadot DNS documentation](https://www.dynadot.com/help/question/set-up-DNS)
