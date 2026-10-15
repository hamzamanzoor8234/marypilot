# Marypilot landing page

Standalone Next.js project for the public Marypilot website. It does not modify or deploy the review application's backend and does not load the parent project's secrets. It can be deployed independently on Vercel.

## Run

```powershell
cd marypilot-landing
npm install
npm run dev
```

Open http://localhost:3001. The review application can continue using port 3000.

Production: `npm run build` then `npm start`.

## Included pages and assets

- `/`: public product explanation, interactive illustrative review demo, multi-workspace description, current availability, FAQ and legal links.
- `/privacy`: Google permissions, data collection/use, configured OpenAI processing, credentials, temporary review caching, third parties, Limited Use statement, revocation and deletion.
- `/terms`: authorized use, review approval, third-party dependencies, development availability and responsibility for generated replies.
- `/contact`: public support at hamzamanzoor8234@gmail.com, operator identity and logo download.
- `/data-deletion`: account/workspace deletion request procedure and distinction from revoking Google access.
- `/brand/marypilot-logo.png`: original generated transparent PNG logo (1254 × 1254, approximately 334 KB). Use the original for download and as the brand asset.
- Open Graph PNG, page metadata, robots and sitemap routes.

The interactive preview uses local sample strings and never calls Google or the AI provider. There are no fake testimonials, customer counts, approval badges or advertised paid plans.

## Vercel

1. Import the repository into Vercel.
2. Set **Root Directory** to `marypilot-landing` and framework to **Next.js**.
3. Build command: `npm run build`. Install command: `npm ci`.
4. Set `NEXT_PUBLIC_SITE_URL` to the actual public HTTPS production URL (your Vercel subdomain or custom domain).
5. Set `NEXT_PUBLIC_APP_URL` to the separate deployed SaaS URL when ready. Without this variable, homepage calls to action lead to the contact page instead of a broken sign-in page. For a local preview only, it can be `http://localhost:3000`.
6. `NEXT_PUBLIC_SUPPORT_EMAIL` defaults to the contact provided by the owner. Override it if support moves to a dedicated mailbox.
7. Deploy and verify all public routes. These variables are public build-time configuration, not a place for Google client secrets or model keys.

No Vercel project or domain has been claimed or deployed by merely creating these files. A suggested subdomain may already be taken; use the URL Vercel actually assigns.

## Google branding review checklist

Creating this website is only one part of verification; it does not guarantee approval or grant GBP API access.

After deploying to a public HTTPS URL:

1. Verify site/domain control using Google Search Console. Add the HTML verification tag to `app/layout.tsx` metadata or add the provided verification HTML file to `public/`, as directed by Search Console. Keep the verification in place.
2. In OAuth Branding, use the actual deployed homepage, `/privacy`, and `/terms` URLs. Use the same privacy URL that the homepage links to.
3. Use the consistent application name **Marypilot** in the OAuth consent screen and the actual SaaS dashboard. The existing parent app may still display ReviewPilot until separately rebranded; this landing page does not change it.
4. Set the authorized domains as accepted by Google for the URLs you actually control. A Vercel subdomain's acceptability and ownership verification must be confirmed in Google's console; a custom domain you control may simplify it.
5. On the existing SaaS OAuth client, register its actual production callbacks: `https://YOUR-APP-HOST/api/auth/google/callback` and `https://YOUR-APP-HOST/api/google/callback`. They belong to the SaaS app, not this static landing site.
6. Keep the support/developer contact current and declare only scopes the application actually uses.
7. Review these pages against the final production setup. In particular, verify operator identity, support access, model/provider retention, backup lifetime, Google-content retention, actual deletion procedures, and any new processors. The pages describe the current development architecture; provider-side compliance cannot be configured by a marketing page.
8. Complete the applicable OAuth verification steps. Business Profile project approval and nonzero quota remain a separate requirement.

To keep legal content accurate, revisit it whenever the application's data processing changes. There is no self-service account-deletion button in the current app; the page correctly directs users to a verified support request.

## Checks

```powershell
npm run build
npm run typecheck
# While preview is running:
npm run check:site
```

Check the preview at desktop and phone widths; exercise the sample-business selector, alternate draft, preview-only approval, FAQ disclosures, navigation and public legal pages.

## Logo provenance

Created using the built-in image generation tool. The exact prompt and usage notes are saved in `brand/LOGO.md`. The PNG is copied into this project so it does not depend on the image generator's private output directory.

