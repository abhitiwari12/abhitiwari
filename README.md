# Abhi Tiwari — personal journey portfolio

A responsive, one-page React + Vite personal portfolio with a Hinge-inspired profile layout and a forest-green / warm-paper scrapbook visual style.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open the localhost URL printed by Vite.

## Portfolio sections
- Personal profile and Hinge-style prompts
- Virat Kohli tribute
- University journey and work experience
- Personal projects
- Academic projects and mini-projects
- GEORUSH playable game
- Contact and social links

## Academic projects
- **theScientist — Multi-Agent AI Scientist** (Agentic AI, Semester VI). Abhi's documented contribution: Streamlit UI, Graphviz visualisation support, screenshots, README and documentation. [Repository](https://github.com/abhitiwari12/thescientist)
- **End-to-End Mini Compiler with Phase Visualisation** (Compiler Design, Semester VII). Abhi's documented contribution: Streamlit UI, Graphviz visualisation support, screenshots, README and project report. [Repository](https://github.com/TanishaMajmundar/mini-compiler-visualizer) · [Live demo](https://mini-compiler-visualizer-otvezg8am6edqyyrjagaml.streamlit.app/)
- **SolarTwin AI — Digital Twin for Solar PV Plants** (Software Project Management, Semester VII, individual project). Reported as a Phase-1 prototype.

Academic report PDFs are referenced by the portfolio at `public/reports/`. Add the three report files to that folder before publishing the matching report links:
- `MiniProject_Report_DG_AgenticAI.pdf`
- `Compiler_Design_Mini_Project_Report.pdf`
- `SolarTwin_AI_SPM_Report.pdf`

## GEORUSH game
The GEORUSH v1.3 game is included at `public/games/georush/` and opens from the Games section at `/games/georush/index.html`. It is a static HTML game and its Leaflet library is bundled locally. India/world boundary GeoJSON is fetched from public GitHub URLs, so those map boundaries require an internet connection on first load.

## Build
```bash
npm run build
```

## Before publishing
- Keep API keys and other secrets out of the repository.
- Check that all files under `public/reports/` are present so the report links work.
- Confirm the CV in `public/Abhi-Tiwari-CV.pdf` is the version you want to publish.
