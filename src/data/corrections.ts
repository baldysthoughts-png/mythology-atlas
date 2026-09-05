import type { Claim, ContentSection } from './types';

// ============================================================
// CORRECTION PATCH — historical accuracy fixes to structured
// entity data (majorDeityIds relationships) that the prior
// content-depth pass narrated correctly in prose but did not
// apply to the underlying structured fields. See civilizations.ts,
// deities.ts, and places.ts for the corresponding structural edits.
// This file holds the new Claims/ContentSections that back those
// corrections and a few reworded existing sections.
// ============================================================

export const correctionClaims: Claim[] = [
  {
    id: 'claim-ashur-state-god',
    statement: "Aššur, the city's namesake deity, functioned as the head of the Assyrian pantheon and the primary source of royal legitimacy in Assyrian royal ideology — a role without a direct Sumerian or Babylonian equivalent tied to one specific city-god in the same way.",
    aboutEntityIds: ['deity-ashur', 'civ-assyria'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-assyrian-royal-inscriptions', evidenceRole: 'Contextualizes', locator: 'Representative Neo-Assyrian royal inscriptions invoking Aššur in royal titulary, dedications, and campaign ideology' },
      { sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on Assyria' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-akkad-patron-deities',
    statement: 'Akkadian Empire royal ideology, especially under Sargon and his immediate successors, gave particular prominence to Ishtar (Inanna) as patron of the city of Akkad, alongside continued religious legitimacy drawn from Enlil\u2019s cult at Nippur and An\u2019s formal seniority in the pantheon.',
    aboutEntityIds: ['civ-akkad', 'deity-inanna', 'deity-enlil', 'deity-an'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on the Akkadian period' },
      { sourceId: 'src-foster-before-muses', evidenceRole: 'Contextualizes', locator: 'Introduction, on Old Akkadian royal and religious texts' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-nabu-later-prominence',
    statement: 'Marduk\u2019s rise to head of the pantheon and Nabu\u2019s rise to major cultic prominence are both developments of later Babylonian and Assyrian religious history; neither deity held comparable prominence during the earlier Akkadian Empire period.',
    aboutEntityIds: ['deity-marduk', 'deity-nabu', 'civ-akkad'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-marduk', evidenceRole: 'Supports', locator: 'Historical development: Marduk’s major rise belongs to later Babylonian history' },
      { sourceId: 'src-oracc-amgg-nabu', evidenceRole: 'Supports', locator: 'Historical development: first securely datable attestation under Hammurabi; major cultic prominence develops later' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tiamat-not-civic-deity',
    statement: 'Tiamat functions in surviving Babylonian literature as a primordial cosmic and mythological figure within the narrative of the Enuma Elish, rather than as a deity with an attested civic temple cult comparable to Marduk or Nabu — a distinction this atlas marks structurally rather than listing her alongside civic cult deities.',
    aboutEntityIds: ['deity-tiamat', 'civ-babylon'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Tiamat entry' }],
    status: 'Published',
  },
  {
    id: 'claim-assyria-cult-figures',
    statement: 'Beyond Aššur, Neo-Assyrian religious life gave significant prominence to Ishtar (particularly the cults of Ishtar of Nineveh and Ishtar of Arbela), Ninurta (closely tied to the Assyrian capital of Kalhu/Nimrud), Nabu (with a dedicated temple at Kalhu), and Nergal (with an attested cult at Tarbisu) — pan-Mesopotamian deities also worshipped elsewhere, but with a documented, period-specific importance within Assyria.',
    aboutEntityIds: ['civ-assyria', 'deity-inanna', 'deity-ninurta', 'deity-nabu', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on the Neo-Assyrian period' }],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-atrahasis-distinct-recensions',
    statement: 'Atrahasis and the Epic of Gilgamesh have distinct textual histories rather than a shared recension timeline: Atrahasis is best attested through an Old Babylonian recension, while the fullest surviving form of Gilgamesh is the considerably later Standard Babylonian version, preserved above all through the Assyrian royal library at Nineveh rather than a Babylonian archive.',
    aboutEntityIds: ['text-atrahasis', 'text-gilgamesh'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Supports', locator: 'Introduction, on manuscript recensions' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Supports', locator: 'Introduction, on manuscript tradition and the Nineveh library' },
    ],
    status: 'Published',
  },
];

const cs = (id: string, parentEntityId: string, sectionLabel: string, prose: string, claimIds: string[] = []): ContentSection => ({
  id,
  parentEntityId,
  sectionLabel,
  prose,
  claimIds,
});

export const correctionContentSections: ContentSection[] = [
  cs('cs-ashur-overview', 'deity-ashur', 'Overview',
    'In Aššur-dān II 1, Aššur is presented as a divine authority directly connected with Assyrian kingship and royal military action. The inscription states that Aššur designated Aššur-dān II, placed the royal scepter and crown in his grasp, and established him for kingship over Assyria. It also presents a military campaign as undertaken by Aššur’s command. Modern scholarship places such evidence within Aššur’s broader role as the state god and head of the Assyrian pantheon. The ancient inscription and the broader scholarly synthesis should remain distinct kinds of evidence.',
    [
      'claim-ashur-dan-ii-royal-appointment',
      'claim-ashur-dan-ii-command-campaign',
      'claim-ashur-state-god',
    ]),
  cs('cs-ashur-roles', 'deity-ashur', 'Roles and Domains',
    'In this profile, Aššur’s directly attested roles are tied to royal appointment, kingship, and military action carried out under divine command. Aššur-dān II 1 states that Aššur designated the king, placed the scepter and crown in his grasp, established him for kingship over Assyria, and commanded a military campaign. Modern scholarship further identifies Aššur as the state god and head of the Assyrian pantheon. These ancient and scholarly claims should remain distinct rather than being collapsed into broad timeless labels.',
    [
      'claim-ashur-dan-ii-royal-appointment',
      'claim-ashur-dan-ii-command-campaign',
      'claim-ashur-state-god',
    ]),
  cs('cs-ashur-ancient-textual-tradition', 'deity-ashur', 'Ancient Textual Tradition',
    'Aššur-dān II 1 provides direct textual evidence for Aššur’s place in Neo-Assyrian royal ideology. In the inscription, Aššur is said to designate Aššur-dān II, place the royal scepter and crown in his grasp, and establish him for kingship over Assyria. The same inscription also presents a military campaign as undertaken by Aššur’s command. These claims are grounded in this specific royal inscription and should not be generalized automatically to every period or genre of Assyrian literature.',
    [
      'claim-ashur-dan-ii-royal-appointment',
      'claim-ashur-dan-ii-command-campaign',
    ]),
  cs('cs-ashur-state-identity', 'deity-ashur', 'The God Aššur and Assyrian State Identity',
    'The god Aššur and the city of Ashur shared the same name, and their identities became closely connected with the political and religious development of Assyria. Modern scholarship identifies Aššur as the state god and head of the Assyrian pantheon, while the city remained a major sacred center even after political capitals shifted elsewhere. This relationship between deity, city, and state is a distinctive feature of Assyrian religious history.',
    ['claim-ashur-state-god', 'claim-ashur-city-deity-identity']),

  cs('cs-ashur-kingship', 'deity-ashur', 'Aššur and Royal Kingship',
    'Aššur-dān II 1 presents Aššur as the divine authority who designates the king, places a just scepter and exalted crown in his grasp, and establishes him for kingship over Assyria. This inscription provides direct ancient evidence for the connection between Aššur and royal legitimacy in this particular Neo-Assyrian context.',
    ['claim-ashur-dan-ii-royal-appointment']),

  cs('cs-ashur-military-command', 'deity-ashur', 'Divine Command and Military Campaigns',
    'In Aššur-dān II 1, the king states that he mustered his troops and campaigned against Muṣri by the command of Aššur, his lord. The inscription presents military action as undertaken under divine authority and records captured booty being brought back to the city of Aššur. This provides direct evidence for the role of Aššur within Assyrian royal campaign ideology.',
    ['claim-ashur-dan-ii-command-campaign']),
  cs('cs-ashur-what-we-know', 'deity-ashur', 'What We Know',
    'Direct evidence from Aššur-dān II 1 supports two specific conclusions in this profile: Aššur is presented as the divine authority who establishes Aššur-dān II for kingship over Assyria, and a military campaign is described as undertaken by Aššur’s command. Broader claims that Aššur functioned as the state god and head of the Assyrian pantheon come from scholarly synthesis rather than from this inscription alone. The strongest reconstruction therefore keeps the inscription-specific evidence separate from wider historical interpretation.',
    [
      'claim-ashur-dan-ii-royal-appointment',
      'claim-ashur-dan-ii-command-campaign',
      'claim-ashur-state-god',
    ]),
  cs('cs-ashur-why-it-matters', 'deity-ashur', 'Why It Matters',
    'Aššur is important for understanding how religion and kingship were intertwined in the Assyrian state. Aššur-dān II 1 presents royal authority and military action as operating under Aššur’s divine authority, while modern scholarship places this evidence within Aššur’s broader position as the state god and head of the Assyrian pantheon. Keeping the inscription-specific evidence separate from the wider historical synthesis helps show both what an ancient source directly says and how scholars reconstruct Aššur’s larger political and religious significance.',
    [
      'claim-ashur-dan-ii-royal-appointment',
      'claim-ashur-dan-ii-command-campaign',
      'claim-ashur-state-god',
    ]),

  cs('cs-babylon-mythological-figures', 'civ-babylon', 'Important Mythological Figures',
    "Not every important figure in Babylonian mythology held an attested civic cult on the same footing as Marduk or Nabu. Tiamat, the primordial sea defeated by Marduk in the Enuma Elish, is a major mythological and literary figure central to Babylonian creation tradition, but surviving evidence does not attest a civic temple cult dedicated to her comparable to Marduk's Esagila or Nabu's temples — this atlas lists her separately from Babylon's major civic deities for that reason, without removing her from Babylonian mythology.",
    ['claim-tiamat-not-civic-deity']),
];

// ---- Rewordings applied to existing (already-published) sections ----
// These replace the prose of sections created in the earlier content-depth
// pass; kept here as a record of what changed and why. The actual file
// edited in place is evidenceExpansion.ts — see the correction report for
// the before/after text of cs-akkad-religion, cs-assyria-religion,
// cs-babylon-texts, and cs-babylon-religion.
