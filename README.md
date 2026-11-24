# Abhi Tiwari — personal journey portfolio

A responsive, one-page React + Vite portfolio inspired by the supplied forest-green, scrapbook-style reference.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open the localhost URL printed by Vite.

## Personalise before publishing
- Replace the `AT` placeholder in `src/main.jsx` with your portrait. The photo frame is in the `photo-placeholder` element.
- Update the project links and descriptions in the `projects` array.
- Add your own games and personal dumps in the Games and Dump sections.
- Update the journey details if any dates or roles need correction.
- Add `public/Abhi-Tiwari-CV.pdf` if you want the résumé download link to work.

## Build
`npm run build`


## GEORUSH game
The GEORUSH v1.3 game is included at `public/games/georush/` and opens from the Games section at `/games/georush/index.html`.
It is a static HTML game and its Leaflet library is bundled locally. India/world boundary GeoJSON is fetched from public GitHub URLs, so those map boundaries require an internet connection on first load.
