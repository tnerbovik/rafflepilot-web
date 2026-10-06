# RafflePilot website

Static website for [rafflepilot.app](https://rafflepilot.app), hosted on GitHub Pages under the tnerbovik account.

The initial page links to the released iPhone app and announces the upcoming Android version. The full marketing-site design is in [the design document](docs/superpowers/specs/2026-10-06-rafflepilot-website-design.md).

## Local preview

Run `python3 -m http.server 8765` from this directory, then open http://localhost:8765. No build step or dependencies are required.

## GitHub Pages

Publish the main branch from the repository root. Set the custom domain to `rafflepilot.app` in Settings → Pages. The CNAME file preserves that setting for branch deployments. Enable Enforce HTTPS when GitHub finishes issuing the certificate.

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
