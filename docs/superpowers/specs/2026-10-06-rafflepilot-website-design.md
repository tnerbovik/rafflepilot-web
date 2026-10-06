# RafflePilot website design

## Purpose

Create an impressive static website at https://rafflepilot.app that increases awareness of RafflePilot and encourages app purchases and downloads. RafflePilot helps event organizers draw winners from tickets, ticket books, bingo numbers, and custom entries. The iPhone app is available now; the user confirms that the Android release is approaching.

The main action is opening the existing App Store listing. Android visitors should see a clear coming-soon announcement. The site must work on GitHub Pages, with the domain registered at Dynadot.

## Visual direction

The earlier conversations “Dynadot hosting options” and “Markedsføringsstrategi for app” called for a polished app landing page with prominent screenshots, ticket and prize imagery, and offline and privacy benefits. The user explicitly rejected an aviation theme. Follow that correction: no airplanes, radar visuals, flight instruments, or takeoff metaphors.

Use the existing app identity: deep forest green, emerald, warm gold, and white. Pair oversized, tightly spaced headings with readable body text and generous space. A dark green hero contrasts with light sections below. Gold ticket details and restrained decorative rays connect the website to the winner screen.

Use the real app icon and screenshots from the App Store. Show the winner screen prominently in a phone frame, with a smaller setup screenshot beside it on wide screens. Below the hero, use alternating screenshot-and-copy sections rather than a long gallery of tiny screens. Preserve screenshot proportions and make the imagery stack cleanly on phones. Use locally stored, appropriately sized assets rather than loading them from Apple on every visit. Match the screen clipping to the image so rounded corners do not expose black capture edges.

Subtle entrance effects and hover states can add polish. Respect reduced-motion preferences and ensure content remains visible without JavaScript. Avoid constant animation that competes with the download action.

## Page content and visitor flow

1. **Navigation:** App icon and RafflePilot name, links to features and how it works, and an App Store download action. Use a compact layout that fits small screens without requiring a scripted menu.
2. **Hero:** Headline “Make the draw. Make their day.” Supporting copy explains drawing raffle and prize winners on an iPhone in seconds. Show the official App Store badge, “Available for iPhone,” and “Coming soon to Android.” The winner screenshot provides an immediate view of the product.
3. **Trust strip:** Highlight offline operation, no accounts, no ads, and no tracking, grounded in the published app description and privacy policy.
4. **Feature walkthrough:** Three substantial sections pair real screenshots with useful descriptions: flexible raffle setup, bingo calling, and keeping raffles and winner history organized. Include Golden Draw as a distinct gold-accented feature beside the raffle content. Details and draft copy are specified below.
5. **How it works:** Choose the ticket format, enter the tickets or entries, and draw winners. Use three short numbered steps without duplicating the screenshots from the walkthrough. Add a compact supporting feature grid covering prize order, multiple winners, unsold-ticket exclusions, undo, light/dark mode, and 16 languages. Emphasize equal chances for remaining tickets and preventing duplicate winners without claiming certification.
6. **Event use cases:** Show how the app fits school fairs, fundraisers, sports clubs, community events, and office prize draws. Use concise examples rather than invented testimonials or customer statistics.
7. **Final download section:** Repeat the App Store action and Android coming-soon message. Keep Android status as informative text until a real Play Store URL is provided; no inactive download badge or simulated waitlist.
8. **Footer:** Developer credit, support email, and a link to the existing privacy policy.

Initial website copy is in English. Do not hardcode a price because App Store prices vary by country and can change. The App Store listing handles purchasing and availability.

## Feature copy and screenshot selection

This expansion explains the actual app and encourages downloads. It does not add a browser raffle tool. Keep descriptions short enough to scan, with concrete examples of how organizers can use each feature.

| Section | Heading and supporting copy | Screenshot |
| --- | --- | --- |
| Hero | **Make the draw. Make their day.** Run raffles, call bingo, and reveal prize winners from your iPhone. A simple setup. A moment everyone can enjoy. | App Store winner screen, with the setup screen as a smaller supporting image on desktop. |
| Raffle setup | **Your tickets. Your way.** Use numbered or lettered ticket books, color series, or your own list of names and entries. Leave out unsold tickets and let every remaining entry have an equal chance. Show examples such as Red, Blue, and Green 1–100 in supporting text. | App Store New Raffle screen. |
| Golden Draw | **Add a golden surprise.** Give a special winner a golden reveal, with an optional prize to match. | Small crop of the Golden Draw winner from the user's recording, used as a still beside the description. |
| Bingo | **Bring everyone into the game.** Call 30, 75, 80, or 90-ball bingo with a clear ball display and board. Record winners for stages such as a line, two lines, and full house. | App Store bingo screen, large enough to recognize the board and called ball. |
| Saved raffles and history | **Keep the winners, lose the paperwork.** Keep multiple raffles organized, revisit winners by raffle or day, and share the results with your group. | App Store history screen as the main image; My Raffles can be a smaller companion on desktop. |

Use the published App Store images as the primary screenshot source. The Golden Draw still comes from `/Users/tnerbovik/Desktop/RafflePilot-video/stills/golden-winner.png`; this is an authentic recording of the app and should be cropped to exclude capture borders and the cursor. Give every screenshot descriptive alternative text and explicit dimensions. Export appropriately sized WebP or JPEG assets with sufficient resolution for sharp phone-sized presentation, and lazy-load screenshots below the hero.

The supporting feature grid should cover:

- **Prizes in order:** Draw one winner for each prize in your list.
- **More winners, fewer taps:** Draw several winners at once, without selecting the same ticket twice.
- **Room for corrections:** Undo the last draw when you need to correct a mistake.
- **Made for the room:** A large winner display, light and dark themes, and support for 16 languages.

Use cases need only one short line each: school fairs, club fundraisers, community bingo, and office prize draws. Avoid adding repetitive feature sections merely to lengthen the page.

The user has deferred further video work. This website expansion uses screenshots and stills; the compilation is not embedded in this pass. Keep the website lightweight and reserve video integration for a later request.

## Architecture

Use plain HTML and CSS with minimal optional JavaScript for visual enhancement. No application framework, backend, account system, form service, or analytics dependency is needed. Use semantic landmarks, descriptive alternative text, visible focus states, adequate contrast, and responsive layouts.

Keep source files in the repository root, with local images and styling in an assets directory. Add a custom 404 page, favicon, canonical URL, page description, social preview image, robots.txt, and sitemap.xml. Keep search and social metadata consistent with the product copy.

Publish from the main branch root using GitHub Pages. A CNAME file contains rafflepilot.app, and .nojekyll allows direct serving of the static files. Use the GitHub repository tnerbovik/rafflepilot-web. The user requested publishing a quick placeholder and connecting the domain while the full marketing site is developed; this initial deployment contains the app identity, an App Store action, Android status, and existing privacy and support links.

## Domain and hosting

DNS inspection on 6 October 2026 initially found Cloudflare nameservers for rafflepilot.app. The user then provided the Dynadot domain settings page. The domain was switched to Dynadot DNS and the GitHub Pages records were saved there after configuring rafflepilot.app in GitHub Pages. Public queries found no apex MX, TXT, or CAA records and no DMARC record; Dynadot email settings were not configured.

Dynadot DNS now contains the four documented GitHub Pages A records and a www CNAME pointing to tnerbovik.github.io. Verify propagation, then enforce HTTPS when GitHub has issued the certificate. Verify the custom domain and www redirect before claiming the domain is live.

## Verification and acceptance

Verify desktop and phone layouts in a browser, including a 360-pixel-wide viewport. Check image loading, readable screenshot presentation, no horizontal overflow, keyboard focus, reduced motion, and all download and footer links. Check that core content and navigation work without JavaScript.

Serve and verify the final static files locally before publishing. Then verify the GitHub Pages deployment and, once DNS access permits, the custom domain and HTTPS redirect. Do not claim the custom domain is live until it has been checked.

The delivered site must show the winner, setup, bingo, and history screens, explain Golden Draw, offer clear download actions near the top and bottom, accurately announce Android availability, and meet the static hosting requirements. Screenshot text should remain useful at normal viewing size, with no stretched images or exposed black corner edges. The design supports awareness and conversion; proving sales growth would require separate measurement beyond this initial scope.

## Product sources

- [RafflePilot App Store listing](https://apps.apple.com/us/app/rafflepilot/id6786706971)
- [Existing RafflePilot privacy policy](https://tnerbovik.github.io/legal/rafflepilot/)
- [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Dynadot DNS documentation](https://www.dynadot.com/help/question/set-up-DNS)
