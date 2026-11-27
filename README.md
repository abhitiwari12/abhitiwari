# Abhi Tiwari — personal journey portfolio

A responsive React + Vite portfolio with a Hinge-inspired profile layout and a forest-green / warm-paper visual style.

## Run locally
1. Install Node.js (18+ recommended).
2. Run `npm install` in this folder.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

## Portfolio sections
- Personal profile and Hinge-style prompts
- Virat Kohli tribute
- University journey and work experience
- **Things I've made** — personal builds, university projects, mini-projects and CyberRanger in one combined section
- GEORUSH playable game
- Contact and social links

## Projects and academic work
- **CyberRanger — Red/Blue Cybersecurity Research Platform:** a local red/blue research loop around an intentionally vulnerable DVWA lab, with a blue-side detector, human triage and a mission-control dashboard. It is a research prototype; the repository README does not claim a trained detector or verified benchmark result. [Repository](https://github.com/abhitiwari12/cyberranger)
- **theScientist — Multi-Agent AI Scientist** (Agentic AI, Semester VI): multi-agent literature retrieval, knowledge graph construction, research-gap identification and hypothesis review. [Repository](https://github.com/abhitiwari12/thescientist)
- **End-to-End Mini Compiler with Compiler Phase Visualisation** (Compiler Design, Semester VII): interactive compiler-phase visualisation for a small C-like language. [Repository](https://github.com/TanishaMajmundar/mini-compiler-visualizer) · [Live demo](https://mini-compiler-visualizer-otvezg8am6edqyyrjagaml.streamlit.app/)
- **SolarTwin AI — Digital Twin for Solar PV Plants** (Software Project Management, Semester VII, individual project): Phase-1 prototype for predictive maintenance and performance optimisation.

Academic report PDFs are stored in `public/` and linked from the project cards:
- `MiniProject_Report_D&G_AgenticAI.pdf`
- `23BTAI62_TiwariAbhi_MiniProjectReport.pdf`
- `AbhiTiwari_120.pdf`

## GEORUSH game
GEORUSH v1.3 is included at `public/games/georush/` and opens at `/games/georush/index.html`. Its Leaflet library is bundled locally. India/world boundary GeoJSON is fetched from public GitHub URLs, so those boundaries require an internet connection on first load.

## Build
```bash
npm run build
```

## Before publishing
- Keep API keys and other secrets out of the repository.
- Confirm the CV at `public/Abhi-Tiwari-CV.pdf` is the version you want to publish.
- Confirm all three report PDFs are present in `public/`.
