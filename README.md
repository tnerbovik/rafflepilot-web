# RafflePilot website

Static website for [rafflepilot.app](https://rafflepilot.app), hosted on GitHub Pages under the tnerbovik account.

The marketing page presents real app screenshots and features for ticket books, custom lists, bingo, Golden Draw, prizes, and winner history. It links to the released iPhone app and announces the upcoming Android version. The design is in [the design document](docs/superpowers/specs/2026-10-06-rafflepilot-website-design.md).

The site uses plain HTML and one shared stylesheet (`assets/site.css`). Images are local, and navigation works without JavaScript. `404.html`, `robots.txt`, `sitemap.xml`, and the social preview support publishing and discovery.

## Asset sources

- Official light and dark logo vectors: `assets/art-src/logo-{light,dark}.svg` in the RafflePilot app project.
- App screenshots: the app project's `docs/store/2.0.0/screenshots/ios/`, exported as optimized WebP files.
- Golden Draw: a cropped still from the developer's app recording, excluding the capture border and cursor.
- App Store badge: [Apple's official artwork](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg), used unchanged.
- App icon: the published RafflePilot App Store icon.

Video integration is deferred. The website currently uses screenshots and a Golden Draw still.

## Local preview

Run `python3 -m http.server 8765` from this directory, then open http://localhost:8765. No build step or dependencies are required.

## GitHub Pages

Publish the main branch from the repository root. Set the custom domain to `rafflepilot.app` in Settings → Pages. The CNAME file preserves that setting for branch deployments. Enable Enforce HTTPS when GitHub finishes issuing the certificate.

On 6 October 2026, DNS resolved to GitHub Pages and the placeholder/logo deployments succeeded. The custom-domain HTTPS certificate remained unavailable at the last check; do not treat successful HTTP serving as confirmation of secure browser access. The `.app` domain requires a valid certificate for normal browser use.

## DNS

The domain is registered at Dynadot. On 6 October 2026, its DNS setting was switched from Cloudflare name servers to Dynadot DNS, and the records below were saved through the domain settings page. Nameserver propagation and GitHub certificate issuance may take time.

The configured records are:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tnerbovik.github.io |

Replace conflicting website records for the apex and www; preserve unrelated email and verification records. Add the domain in GitHub Pages before changing DNS. GitHub redirects www to the configured apex domain once both records are correct.

## Earlier website concepts

The conversations “Dynadot hosting options” and “Markedsføringsstrategi for app” established a raffle-focused landing page: actual app screenshots, ticket and prize imagery, prominent offline and privacy benefits, and repeated App Store actions. The user explicitly rejected aviation imagery and metaphors. The current hosting choice is GitHub Pages.
