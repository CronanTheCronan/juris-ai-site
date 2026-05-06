# Juris-AI Redesigned Landing Page

This package contains a redesigned static landing page using the generated Juris-AI logo and favicon.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `favicon.ico`
- `assets/juris-ai-logo.png`
- `assets/juris-ai-icon-192.png`

## Local preview

Open `index.html` directly in a browser.

## Before launch

1. Replace `hello@solacesignal.com` with the real launch email.
2. Connect the early-access form in `script.js` to Tally, Formspree, Basin, ConvertKit, or your own API.
3. Add a privacy policy before collecting user information.
4. Do not collect confidential case files through the public form.
5. Deploy to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host.


## Tally form

The early-access form is embedded from:

https://tally.so/r/oblj6O

The page loads Tally's official embed script from:

https://tally.so/widgets/embed.js

If the iframe does not load when opening the file directly from your computer, deploy to GitHub Pages or run a local static server.


## Readability note

The Tally iframe uses Tally's own internal styling because iframe content cannot be directly styled from this static site. The embed URL intentionally does not use `transparentBackground=1` so Tally renders on a readable light background inside the dark Juris-AI page.
