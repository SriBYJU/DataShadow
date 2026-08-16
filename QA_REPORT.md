# DataShadow 2.1 QA Report

## Overall status

- Core rendered-app suite: **19 / 19 passing**
- UI / usability / Passport / Patent suite: **18 / 18 passing**
- Total automated checks: **37 / 37 passing**
- Runtime JavaScript errors during suites: **0**

## Core functional checks (19)

1. Initial overview renders.
2. Full personal navigation renders (24 major destinations).
3. Demo portfolio is calculated rather than a single hard-coded display value.
4. Asset provenance rows render.
5. Privacy slider changes the outbound protected package.
6. Privacy Shield blocks exact identifiers.
7. Locked Location domain is denied by the Consent Firewall.
8. Protected exchange creates a saved transaction.
9. Protected exchange creates a Data Receipt.
10. SHA-256 ledger verifies after transaction execution.
11. ShadowQuery creates a zero-copy transaction.
12. ShadowQuery records `rawDataReleased: false` and returns a bounded protected answer.
13. Consent policy changes persist in profile state.
14. A policy version is saved before a consent change.
15. Shadow Assistant answers using current profile state.
16. Provenance/Audit Graph renders more than eight clickable nodes (26 in default demo state).
17. Buyer Lab switches to its dedicated buyer navigation and dashboard.
18. Mobile navigation control is visible at phone width.
19. No runtime JavaScript errors occur during the core interaction suite.

## Revision-specific checks (18)

1. SHA-256 implementation matches the standard `abc` known test vector.
2. Homepage explains the DataShadow goal.
3. Homepage explicitly separates what works now from simulated behavior.
4. Light-mode toggle applies correctly.
5. Theme preference persists in current profile state.
6. Guide Center opens from the top-right control.
7. Guide Center shows contextual current-page guidance.
8. Guide directory covers 20+ major tools (26 in current build).
9. Guide search filters tools correctly.
10. DataShadow Passport page renders.
11. Passport generation produces a 64-character SHA-256 fingerprint.
12. Passport declares raw behavioral rows excluded.
13. Passport compatibility checker enforces a locked domain.
14. Patent Navigator renders five subsystem cards.
15. Patent Navigator includes the combined Claim 15 explanation.
16. About section includes contact email.
17. About section includes expanded project motivation and positioning.
18. No runtime JavaScript errors occur during the revision suite.

## Visual QA

Reviewed in both dark and light themes:

- Overview / homepage story
- Portfolio
- Consent Firewall
- Privacy Shield
- Provenance Graph
- Technology
- DataShadow Passport
- Patent Navigator
- About

## Fixes discovered during QA

- Increased hero bottom spacing so the public-evidence strip cannot crowd the CTA row.
- Fixed a decorative Consent Firewall layer that intercepted Open / Selective / Locked clicks.
- Serialized ledger writes so fast demo transactions preserve a valid previous-hash chain.
- Added light-theme overrides for controls and transaction-flow cards instead of leaving dark-only surfaces.
- Replaced the former non-cryptographic file-context hash fallback with a standards-compatible pure-JavaScript SHA-256 implementation.

## Known prototype boundary

This is a high-fidelity local-first prototype, not a production cloud service. Local profiles use browser storage. Real organization verification, real-money settlement, cross-device cloud authentication, audited production security/privacy controls and external-buyer infrastructure remain production migration targets and are explicitly labeled as such in the UI.
