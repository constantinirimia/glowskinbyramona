# Glow Skin by Ra-Mona

Frontend-only React (Vite) site for a licensed esthetician in Northbrook, IL.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Booking form

The contact form posts to [FormSubmit](https://formsubmit.co) via AJAX (no backend). The
recipient is set by `formEndpoint` in `src/data/content.js`, and the email layout lives in
`src/data/bookingEmail.js`. The first submission to a new address triggers a one-time
activation email from FormSubmit that must be confirmed.

## Deploying

The site ships as a static single-page app in `dist/`. GitHub Pages serves the
`gh-pages` branch. A copy of `index.html` is written to `404.html` so routes
like `/about` still load.

```bash
npm run deploy   # build and publish to the gh-pages branch
```

Custom domain: `glowskinbyramona.com` (`public/CNAME`).

`public/_redirects` covers Netlify and `vercel.json` covers Vercel if you ever
switch hosts.

## Content

Prices, treatments, FAQ, and gallery photos are all in `src/data/content.js`. Studio photos
live in `public/gallery/` and `public/images/studio/`.
