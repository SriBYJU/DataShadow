# DataShadow 2.0 QA Report

## Automated rendered-app checks

Status: **19 / 19 passing**

1. Initial overview renders.
2. Full personal navigation renders (22 major destinations).
3. Demo portfolio is calculated, not a single hard-coded display value.
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
16. Provenance/Audit Graph renders more than eight clickable nodes (26 in the default demo state).
17. Buyer Lab switches to its dedicated buyer navigation and dashboard.
18. Mobile navigation control is visible at phone width.
19. No runtime JavaScript errors occurred during the interaction suite.

## Visual QA pages reviewed

- Overview
- Portfolio
- Consent Firewall
- Privacy Shield
- Provenance Graph
- Technology
- About

## Fixes discovered during QA

- Increased hero bottom spacing so the public-evidence strip cannot crowd the CTA row.
- Fixed a decorative Consent Firewall pseudo-element that intercepted Open / Selective / Locked clicks.
- Serialized ledger writes so multiple fast demo transactions maintain a valid previous-hash chain.

## Known prototype boundary

This is a high-fidelity static prototype, not a production service. Local profiles use browser storage; organization verification and audited production privacy/security infrastructure are documented migration targets rather than falsely represented as already deployed.
