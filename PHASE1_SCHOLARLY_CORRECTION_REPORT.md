# Mythology Atlas — Final Phase 1 Scholarly Evidence & Citation Correction Report

## Scope
Focused correction pass only. No Phase 2 features and no removal of the expanded Phase 1 content.

## Claims corrected
- Enki's top ANCIENT SOURCE card now points first to *Enki and the World Order* (ETCSL 1.1.3, lines 61–85) rather than to Black & Green (1992).
- Enki/Abzu claim now points to *Enki and the World Order* with an exact line range; ORACC/AMGG is stored separately as contextual scholarship.
- Enlil/Atrahasis flood claim now stores the ancient composition separately from Lambert & Millard's critical edition.
- Inanna seven-gates and Dumuzi-substitute claims now point to *Inana's Descent to the Netherworld* with line ranges; ETCSL is recorded as the edition/translation context.
- The Inanna–Ereškigal sibling relationship now points to the ancient composition first, with ETCSL stored as edition/translation context.
- Atrahasis/Gilgamesh flood-parallel claims now distinguish the ancient compositions from Lambert & Millard / George critical editions.
- Aššur state-god synthesis was reclassified from ANCIENT SOURCE to SCHOLARLY CONSENSUS because the claim synthesizes a corpus rather than quoting one single ancient passage.

## Anunnaki corrections
- Modern OriginOfClaim now identifies Zecharia Sitchin, *The 12th Planet* (Stein and Day, 1976), rather than vague “von Däniken-style” literature.
- Earliest attestations now state Post-Akkadian/Gudea and Ur III evidence, following ORACC/AMGG.
- Underworld development now notes the Sumerian *Inana's Descent* line 167 (seven Anuna judges) and distinguishes this from the later, stronger Anunnaki-vs-Igigi netherworld contrast.
- Etymology now presents “those of princely seed” as the leading ORACC/AMGG summary and explicitly treats popular “offspring of An” wording as a proposal rather than settled literal translation.
- ETCSL is no longer used as if it covered Akkadian/Babylonian/Assyrian corpora.
- Archaeological/Textual Evidence now distinguishes literary/mythological texts from sparse Ur III administrative/cultic attestations and separately notes the lack of a known dedicated Anunna sanctuary or group iconography.
- “What We Actually Know” was updated to reflect the corrected chronology and evidence categories.

## Ancient sources / locators added
- *Enki and the World Order* (ETCSL 1.1.3), lines 61–85; lines 79–85; lines 391–394.
- *Inana's Descent to the Netherworld* (ETCSL 1.4.1), lines 114–163; line 167 / context 164–172; lines 348–358 and 404–410.
- *The Sumerian King List* (ETCSL 2.1.1), lines 1–39.
- *Atra-ḫasīs*, Tablets I–III, with separate critical-edition references.
- *Epic of Gilgamesh*, Standard Babylonian Tablet XI, with separate George (2003) edition reference.
- *Enūma eliš*, Tablet VI, lines 39–44 for later Anunnaki distribution.

## New scholarly/context sources
- ORACC/AMGG, Nicole Brisch, “Anunna (Anunnaku, Anunnaki)” (2019).
- ORACC/AMGG, “Enki/Ea.”
- ORACC/AMGG, “Marduk” and “Nabu,” replacing the earlier vague Oshima placeholder citation.
- Tanaka (UC Berkeley, 2013), *Dress and Identity in Old Babylonian Texts*, for the scholarly interpretation of Inana’s progressive disrobing as a transformation of status/identity.
- Zecharia Sitchin, *The 12th Planet* (1976) as OriginOfClaim only.

## Evidence presentation change
The existing EvidenceLink roles are now visible in the UI as:
- Ancient source
- Edition/reference
- Scholarly source
- Origin of claim

This makes the v0.4 separation visible to readers without changing the overall page architecture.

## Priority 1 audit
Reviewed evidence-link classifications and source roles used by:
- Enki
- Enlil
- Inanna
- Sumer
- Akkad
- Babylon
- Assyria
- Atrahasis
- Epic of Gilgamesh
- Flood Tradition

The primary misclassification pattern was ANCIENT SOURCE cards backed only by modern editions/reference works. Those instances in the Priority 1 evidence layer were corrected or reclassified.

## Regression/build checks
- TypeScript/TSX syntax transpilation checks passed for the modified data and component files.
- Source, claim, and ContentSection reference-integrity checks passed with no missing or duplicate IDs (22 sources, 41 claims, 152 ContentSections in the final patch).
- ETCSL cross-language overextension search was re-run; remaining ETCSL uses are limited to Sumerian compositions/edition context.
- A full Vite build could not be completed in the packaging sandbox because npm dependencies were not available in the local cache and outbound package installation is unavailable. This is an environment limitation, not a reported source-code compiler failure. Run `npm.cmd install` and `npm.cmd run build` (or `npm.cmd run dev`) locally for the final runtime regression check.
