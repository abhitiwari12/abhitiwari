# GEORUSH v1.1 — Full Round Experience

## Gameplay
- Five timed rounds, 20 seconds each.
- India, World and Mixed city-pair modes.
- Numeric distance guess and synchronized slider.
- Round progress indicator and live score.
- Optional synthesized sound feedback (no external audio files).

## Results
- Guess, actual distance and absolute error metrics.
- Actual route in solid green and estimated endpoint path in dotted amber.
- City labels and estimated endpoint shown only after locking a guess.
- Animated result reveal.

## Final dashboard
- Total score out of 5,000.
- Distance accuracy estimate and average absolute error.
- Best round score.
- Five-round history with city pairs, guesses, actual distances and points.
- Personal best saved locally in browser storage.
- Share scorecard using native share when available, otherwise clipboard fallback.

## Map
- Leaflet 1.9.4 bundled locally in `vendor/leaflet/`.
- Vector-only map: no CARTO or OpenStreetMap raster tiles.
- DataMeet India boundary overlays and Natural Earth world polygons fetched from public raw GitHub URLs.

## Run
From the project folder:
`python -m http.server 8000`
Open `http://localhost:8000`.

Boundary GeoJSON still requires internet access on first load.


## v1.2 interaction layout update
- Round result panel now replaces the question/input/slider panel in the exact same position.
- The map remains below the interaction panel.
- Clicking Next round swaps the result panel out and reveals the next city pair and guessing controls in that same position.
- The round result no longer appears as an additional panel below the map.
