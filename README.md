# Ocean City Guide Service

Static Astro website for Ocean City Guide Service, an Ocean City, Maryland inshore fishing charter business. The site is designed for GitHub Pages, uses Cal.com for booking, and has no backend, no database, no login system, and no payment processing.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Static output
- Cal.com inline booking embed
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
npm run preview
```

Astro output should be viewed through a local web server, not by double-clicking
`dist/index.html`. Browser `file://` loading can block module scripts and break
asset paths. Use `npm run dev` while editing, `npm run preview` after a build, or
GitHub Pages after deployment.

## Edit Business Details

Most launch content lives in one file:

```text
src/data/site.ts
```

Review these values before launch:

- `businessName`
- `captainName`
- `phone`
- `smsPhone`
- `email`
- `marinaName`
- `marinaAddress`
- `googleMapsUrl`
- `instagramUrl`
- `facebookUrl`
- `youtubeUrl`
- `tiktokUrl`
- `calComLink`
- trip durations, rates, included items, and target species
- FAQ policy language

Current live details in `site.ts` include:

- Business: `Ocean City Guide Service`
- Captain: `Captain Kyle Pelino`
- Phone: `856-357-3113`
- Email: `Kyle@OCGuideService.com`
- Address: `12940 Inlet Isle Lane, Ocean City, MD 21842`
- Facebook: `https://www.facebook.com/OCMDguideservice`
- Instagram: `https://www.instagram.com/17841402110744634/`

Remaining placeholders include:

- Cal.com: `your-cal-username/fishing-charter`
- YouTube/TikTok links: `#`

## Replace Photos

Image files live in:

```text
public/images/
```

Replace these placeholder files with real boat, catch, crew, inlet, marina, and sunset photos:

- `hero-boat.jpg`
- `boat-running.jpg`
- `boat-tower.jpg`
- `deck.jpg`
- `catch-1.jpg`
- `catch-2.jpg`
- `catch-3.jpg`
- `sunset.jpg`

Species photos copied from the current Ocean City Guide Service site can also be replaced later:

- `fish-bluefish.jpg`
- `fish-bowfishing.jpg`
- `fish-croaker.jpg`
- `fish-flounder.jpg`
- `fish-red-drum.jpg`
- `fish-rockfish.jpg`
- `fish-sheepshead.jpg`
- `fish-tautog.jpg`

Keep the same filenames if you want to update the images without editing code. Use optimized JPG or WebP files when possible.

## Cal.com Setup

Admin schedule management happens in Cal.com, not on the website.

1. Create a Cal.com account.
2. Connect Google Calendar or the captain's preferred calendar.
3. Create an event type called `Fishing Charter`.
4. Set availability for the dates and times the captain wants to offer.
5. Enable manual confirmation if desired.
6. Disable payments.
7. Copy the Cal.com event link, for example `your-name/fishing-charter`.
8. Paste that value into `calComLink` in `src/data/site.ts`.

The booking page embeds Cal.com inline. The site also includes fallback buttons to open the booking calendar directly or call/text the captain.

## GitHub Pages Deployment

This repo includes:

```text
.github/workflows/deploy.yml
```

To deploy:

1. Push the project to GitHub.
2. In GitHub, go to **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch or run the workflow manually.

For a repository Pages URL such as:

```text
https://username.github.io/repository-name/
```

Set repository variables in **Settings -> Secrets and variables -> Actions -> Variables**:

```text
PUBLIC_SITE_URL=https://username.github.io
PUBLIC_BASE_PATH=/repository-name
```

For a custom domain such as:

```text
https://yourdomain.com
```

Set:

```text
PUBLIC_SITE_URL=https://yourdomain.com
```

Leave `PUBLIC_BASE_PATH` empty.

## Launch Checklist

- Confirm the business name, captain name, phone number, SMS number, and email.
- Add the real Cal.com booking event link.
- Confirm Instagram, Facebook, YouTube, and TikTok links.
- Confirm the final marina, parking, and meeting-location instructions.
- Replace remaining placeholder boat photos with real boat and catch photos.
- Confirm trip rates, durations, target species, included items, fish-size estimates, cancellation language, deposit/payment wording, and license guidance with the captain.

## Notes

- The site is intentionally static.
- No payment is collected on this website.
- No database or backend service is required.
- Availability and schedule changes are handled inside Cal.com or the connected calendar.
