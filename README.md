# VELOCITY — The Art of Supercars

A premium, cinematic automotive editorial website built as a **frontend-only React + Vite project**. Based on the project brief in `PROJECT_BRIEF.md`.

## Run on Ubuntu / macOS / Windows

Requires Node.js **20.19+ or 22+** and an internet connection to install packages and load Wikimedia Commons images and Google Fonts.

```bash
cd velocity-supercars
npm install
npm run dev
```

Open **http://localhost:5173/** in your browser.

Build a deployable production folder:

```bash
npm run build
npm run preview
```

For deployment to Vercel, use framework **Vite**, build command `npm run build`, output directory `dist`, and keep the included `vercel.json` for React Router deep linking.

## Pages

- `/` — a four-model spotlight that advances every 6.5 seconds, with pause, play, and manual navigation. It starts paused when reduced motion is enabled. The homepage also features selected cars, journal stories, a V12 performance study, and the marque directory.
- `/compare` — compare published prices and nine specifications for any two models. The URL retains both selections.
- `/collection` — searchable collection with brand, category and horsepower filters and sorting.
- `/collection/:id` — immersive car pages with technical specifications, design stories, galleries and fullscreen image viewer.
- `/brands` — manufacturer directory; `/brands/:slug` — marque features and models.
- `/stories` — automotive journal with category filters; `/stories/:slug` — complete articles with reading progress.
- `/about` — mission, design philosophy and editorial approach.
- `/credits` — photographer credits, source links and Creative Commons information.

## Tech and organization

React (JavaScript/JSX), Vite, Tailwind CSS, CSS, Motion for React, Lucide React, React Router. Routes are lazy-loaded; animation respects reduced-motion preferences; car and editorial content are kept in `src/data/` for future backend integration. No backend, payment or auth system is included.

## Image licensing

Ten locally bundled WebP editorial illustrations in `public/images/` were created with image generation for this project. Documentary gallery photographs load from Wikimedia Commons at runtime. Credits and original source links are listed in `/credits` and `CREDITING.md`. Recheck individual license and attribution requirements before commercial use. Manufacturer marks remain their owners' trademarks.

A subtle fallback illustration in `public/car-outline.svg` appears if a remote image cannot load. There is no fake 3D interaction or autoplay video; 3D is intentionally left out without a genuine 3D asset.

## Notes

Specifications reflect representative published figures and may vary by variant, market, and measurement methodology. Unknown top-speed and acceleration figures are intentionally labeled undisclosed instead of invented.
