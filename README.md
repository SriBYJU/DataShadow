# DataShadow

**Release status: Functional Prototype · Public Beta** 2.1 — Local-First Functional Prototype

DataShadow is a personal data asset-management prototype that combines consent, privacy-preserving release, modeled negotiation, portfolio analysis, provenance, public evidence, and adaptive recommendations in one local-first application.

## What this version can actually do now

People can create and switch local profiles, save settings and history on their current device, import supported data exports, derive inspectable assets, configure consent policies, test synthetic requests, run negotiation logic, transform approved outbound packages, use zero-copy ShadowQuery, create receipts, verify the consent ledger, explore public evidence, and export a privacy-safe DataShadow Passport.

The prototype remains deliberately honest about the boundary between a working product demonstration and a production network. Real external buyer onboarding, real-money settlement, audited privacy guarantees, server-side identity/organization verification, and cross-device cloud accounts are not represented as live.

## Core five-subsystem patent demonstration

1. **AI Negotiation Engine** — R/E/D/RA scoring, CBS, modeled price, offer evaluation and counteroffer flow.
2. **Data Poisoning / Privacy Shield** — field-level protection, fresh per-release randomness, identifier blocking and before/after inspection.
3. **Consent Firewall by Life Domain** — Open / Selective / Locked policy, floors, purposes, retention and absolute locked-domain denial.
4. **Financial Portfolio Layer** — derived asset valuation, freshness, depreciation, yield, diversification, risk and portfolio history.
5. **Adaptive Intelligence Layer** — recommendations using current portfolio, transaction and policy state.

A dedicated **Patent** page maps each claim group to the exact working screen that demonstrates it, and the combined-system flow is available through Judge Mode / Live Transaction Flow.

## Flagship systems

- **ShadowQuery** — zero-copy exchange that can return a bounded protected answer instead of raw history.
- **DataShadow Passport** — exportable SHA-256-fingerprinted consent/provenance/audit manifest that excludes raw behavioral rows and can pre-check request compatibility.
- **Personal Data License Builder** — purpose, retention, price and disclosure terms encoded into reusable policy.
- **Exposure Lab** — what-if privacy/risk comparisons before policy changes.
- **Provenance & Audit Graph** — interactive source → asset → policy → request → privacy → transaction → ledger trace.
- **Data Twin** — visual representation of portfolio domains/assets.
- **Data Observatory** — public-source evidence registry separated from DataShadow's own model assumptions.
- **Synthetic Buyer Lab / Marketplace** — clearly marked test environment for the other side of the exchange.

## UI / usability

- True **light and dark modes**, saved per local profile.
- Balanced DataShadow visual identity: green for operational/verified states and restrained violet accents for intelligence/research.
- Top-right **Guide Center** with current-page explanation, “use it when,” expected result, searchable tool directory, technical guide and guided tour.
- Homepage “why DataShadow exists,” how to use it, public evidence, and “works now vs simulated vs production path” sections.
- Local profile creation and switching, onboarding, command search, notification/activity history, contextual Shadow Assistant and Judge Mode.
- Responsive mobile navigation and accessible truth labels.
- Updated About/contact section.

## Free prototype architecture

No paid API key is required. The project is static HTML/CSS/JavaScript and can be hosted on GitHub Pages. State is stored in browser `localStorage` on the current device. Web Crypto SHA-256 is used when available, with a standards-compatible pure-JavaScript SHA-256 fallback for non-secure/file contexts.

### Files

- `index.html` — application shell
- `styles.css` — responsive light/dark visual system
- `app.js` — state, importers, engines, guide, Passport, rendering and interactions
- `data/public-benchmarks.js` — public source registry and transparent benchmark assumptions
- `IMG_7529.png` — creator image
- `FEATURE_MATRIX.md` — implementation map
- `QA_REPORT.md` — rendered-app QA summary

## Deploy on GitHub Pages

Place the files at the root of the Pages branch/repository. No build step is required. The entry point is `index.html`.

## Truth labels

- **REAL** — calculated from a user-selected local import.
- **PUBLIC** — externally cited public benchmark.
- **MODEL** — transparent DataShadow calculation/assumption.
- **SIM** — synthetic marketplace or demo activity.

Dollar outputs are modeled prototype values, not real market quotes. The Privacy Shield is differential-privacy-informed and does not claim a formal epsilon-DP guarantee. Synthetic buyers are never represented as real companies.

## QA

The original functional suite passes **19/19** and the new UI/usability/Passport/Patent suite passes **18/18**. See `QA_REPORT.md`.


## Public beta status
DataShadow is a working local-first functional prototype. Core user-facing features can be used today on-device. Buyer participation, real-money settlement, production cloud accounts, and production security/audit infrastructure remain outside this public-beta release and are clearly labeled or simulated in the product.
