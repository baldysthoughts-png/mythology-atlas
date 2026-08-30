# Mythology Atlas — Safe Home Visual Merge

This package preserves the final scholarly Phase 1 data/evidence files and applies only the accepted Home-page/shared-shell visual changes from the later visual-polish package.

## Visual changes retained
- Redesigned HomePage layout
- Integrated desktop header navigation
- Responsive mobile bottom navigation behavior
- Mesopotamia hero artwork component
- Neutral MediaFrame image slots
- EvidenceSpectrum component
- Library category icon components
- Home-page spacing and responsive width changes
- Lapis design token

## Scholarly/evidence regressions removed
The incoming visual package unexpectedly modified these non-visual files. They were restored from the final scholarly Phase 1 build:
- src/data/corrections.ts
- src/data/evidence.ts
- src/data/evidenceExpansion.ts
- src/data/sources.ts
- src/components/ContentSectionBlock.tsx

The restored ContentSectionBlock preserves explicit labels such as Ancient source, Scholarly source, Edition/reference, and Origin of claim.

## Validation
The changed TS/TSX files passed TypeScript syntax transpilation checks. A full npm/Vite production build could not be run in this container because npm package tarballs are not available offline; run npm.cmd install and npm.cmd run dev locally.
