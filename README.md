# DataShadow 2.0 — Functional Prototype

DataShadow is a local-first personal data asset management prototype that demonstrates five integrated subsystems: negotiation, privacy transformation, domain consent, financial portfolio modeling, and adaptive intelligence.

## What changed in this rebuild

- Replaced hard-coded dashboard value displays with calculations derived from saved sources/assets and transparent prototype assumptions.
- Added local profiles with persistence, export/import portability, onboarding, notifications, activity history, command search, guided tour, and Judge Mode.
- Added Data Vault parsers for Spotify JSON, TikTok JSON, generic JSON, and CSV.
- Added inspectable data assets with provenance, freshness, rarity, demand, confidence, depreciation, modeled unit price, and portfolio value.
- Added Data Twin and end-to-end Provenance/Audit Graph.
- Added synthetic Buyer Lab and Marketplace with explicit SIM labels.
- Added deterministic four-signal negotiation and explainable pricing.
- Added working Consent Firewall, policy version history, Personal Data License Builder, and retention/purpose controls.
- Added working Privacy Shield with fresh-seed transformations and exact identifier blocking.
- Added Data Exposure & Risk Simulator, Scenario Lab, Algorithm Explorer, Attack Simulator, and Sandbox.
- Added ShadowQuery zero-copy exchange: return a bounded protected answer instead of raw history.
- Added protected transaction objects, Data Receipts, SHA-256 hash-chain ledger, and verification.
- Added Shadow Intelligence recommendations based on saved profile state.
- Added Data Observatory with primary-source public evidence registry and strict REAL / PUBLIC / MODEL / SIM truth labels.
- Added Technology, Trust Center, and updated About section.

## Free prototype architecture

The prototype requires no paid API key. It is static HTML/CSS/JavaScript and can be hosted on GitHub Pages. State is stored locally in the browser on the current device. This is intentional: the prototype does not pretend to provide cloud authentication or a production backend.

### Files

- `index.html` — application shell
- `styles.css` — responsive UI system
- `app.js` — local state, importers, engines, UI rendering, interactions
- `data/public-benchmarks.js` — public source registry and transparent benchmark assumptions
- `IMG_7529.png` — creator image

## Deploy on GitHub Pages

Commit these files at the root of the GitHub Pages branch/repository. No build step is required. The entry point is `index.html`.

## Important prototype truth labels

- **REAL** — calculated from a user-selected local import.
- **PUBLIC** — externally cited public benchmark.
- **MODEL** — transparent DataShadow calculation/assumption.
- **SIM** — synthetic marketplace or demo activity.

Dollar outputs are modeled prototype values, not real market quotes. The Privacy Shield is differential-privacy-informed and does not claim a formal epsilon-DP guarantee. Synthetic buyers are never represented as real companies.

## QA

See `QA_REPORT.md`. The automated rendered-app suite currently passes 19/19 functional checks with no runtime JavaScript errors.
