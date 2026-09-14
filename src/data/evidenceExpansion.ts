import type { Claim, ContentSection } from './types';

// ============================================================
// EXPANDED CLAIMS — new interpretive/historical assertions
// backing the deeper prose added in this pass. Every new
// ContentSection below that makes a historical or interpretive
// claim references one of these (per Architecture v0.4,
// ContentSection -> Claim -> EvidenceLink -> Source).
// ============================================================

export const expandedClaims: Claim[] = [
  {
    id: 'claim-enki-ea-name-shift',
    statement: 'The name Ea is the standard Akkadian rendering of the Sumerian Enki; the two names refer to the same figure but belong to different languages and are not simply interchangeable labels used identically in every period.',
    aboutEntityIds: ['deity-enki'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Enki/Ea entry' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-abu-shahrayn-site',
    statement: 'Ancient Eridu is identified with the archaeological site of Abu Shahrayn in southern Iraq, where occupation extended across several millennia.',
    aboutEntityIds: ['place-eridu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-quenet-et-al-eridu-2022', evidenceRole: 'Supports', locator: 'Abu Shahrayn identified as ancient Eridu; Site 1 occupation from the sixth through second millennia BCE' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-eridu-eabzu-precinct',
    statement: 'The principal sacred precinct at Eridu was the E-abzu complex associated with Enki, within which the E-unir ziggurat remained a major monumental feature.',
    aboutEntityIds: ['place-eridu', 'deity-enki'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-quenet-et-al-eridu-2022', evidenceRole: 'Supports', locator: 'Site 1: E-abzu monumental complex, temenos wall, and E-unir ziggurat identified as the abode of Enki' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-eridu-temple-sequence',
    statement: 'Excavations beneath the later sacred architecture at Eridu revealed a sequence of eighteen architectural levels whose pottery and building remains became fundamental for establishing the archaeological periodization of the Ubaid period.',
    aboutEntityIds: ['place-eridu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-quenet-et-al-eridu-2022', evidenceRole: 'Supports', locator: 'Temple Sounding: eighteen architectural levels and their importance for Ubaid periodization' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-eridu-long-occupation',
    statement: 'Archaeological evidence at Eridu documents occupation extending from the sixth millennium BCE into the Bronze Age and later periods, showing that the site had a long history beyond its symbolic antiquity in Sumerian literature.',
    aboutEntityIds: ['place-eridu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-quenet-et-al-eridu-2022', evidenceRole: 'Supports', locator: 'Site 1 and surrounding areas: Chalcolithic and Bronze Age occupation spanning the sixth through second millennia BCE' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-eridu-modern-excavations',
    statement: 'Modern archaeological investigation at Eridu has included major twentieth-century excavations and renewed Iraqi-Italian-French fieldwork at Abu Shahrayn in the twenty-first century.',
    aboutEntityIds: ['place-eridu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-quenet-et-al-eridu-2022', evidenceRole: 'Supports', locator: 'Research history and renewed Archaeological Mission at Eridu fieldwork in 2019 and 2022' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-abzu',
    statement: 'Enki was understood to dwell in the Abzu, a subterranean body of fresh water beneath his temple at Eridu, which grounded his association with fresh water and craftsmanship in a specific cosmological location.',
    aboutEntityIds: ['deity-enki', 'place-eridu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enki-world-order', evidenceRole: 'Supports', locator: 'lines 61–85, especially 61–80' },
      { sourceId: 'src-oracc-amgg-enki', evidenceRole: 'Contextualizes', locator: 'Enki as lord of the Abzu; Eridu and E-abzu' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-role-shift-babylonian',
    statement: 'In Babylonian tradition, several of the creative and organizing functions once closely tied to Enki/Ea in Sumerian sources become more closely associated with Marduk, reflecting a broader theological reorganization rather than the disappearance of Enki/Ea from the pantheon.',
    aboutEntityIds: ['deity-enki', 'deity-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [{ sourceId: 'src-bottero-mesopotamia', evidenceRole: 'Supports', locator: 'Discussion of Marduk\u2019s theological elevation' }],
    status: 'Published',
  },
    {
    id: 'claim-sumerian-king-list-weld-blundell',
    statement: 'Several versions of the Sumerian King List survive. The four-sided Weld-Blundell Prism in the Ashmolean Museum, probably from Larsa and dated to about 1800 BCE, is the most extensive and complete surviving witness.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-ashmolean-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'AN1923.444 object description: several versions survive; prism is the most extensive and complete; probably Larsa; c. 1800 BCE',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumerian-king-list-antediluvian-reigns',
    statement: 'At the beginning of the Sumerian King List, kingship descends from heaven to Eridu and passes through five antediluvian cities. Eight kings are assigned extraordinarily long reigns totaling 241,200 years before the text states that the flood swept over.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.1.1, lines 1–39: five cities, eight kings, 241,200 years, followed by the flood',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumerian-king-list-transfer-formula',
    statement: 'Across the Sumerian King List, dynastic change is repeatedly expressed through a formula in which one city is defeated or falls and kingship is taken to another city, presenting legitimate rulership as a transferable institution associated with one political center at a time.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.1.1 throughout, including lines 95–223 and later dynastic transitions: repeated “city defeated / kingship taken to” formula',
      },
      {
        sourceId: 'src-ashmolean-sumerian-king-list',
        evidenceRole: 'Contextualizes',
        locator: 'museum interpretation: dominion determined by the gods is presented as belonging to one city at a time and for a limited period',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumerian-king-list-uruk-gilgamesh',
    statement: 'In the first Uruk dynasty of the Sumerian King List, the sequence includes Enmerkar, Lugalbanda, Dumuzi the fisherman, and Gilgamesh; Gilgamesh is identified as lord of Kulaba and is assigned a reign of 126 years.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.1.1, lines 95–133: first Uruk dynasty including Enmerkar, Lugalbanda, Dumuzi, and Gilgamesh',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumerian-king-list-kugbau-sargon',
    statement: 'Later portions of the Sumerian King List include rulers known from very different kinds of tradition and evidence: Kug-Bau is presented as a woman tavern-keeper who became king at Kish, while Sargon is presented as a former cupbearer of Ur-Zababa who became king of Agade.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.1.1, lines 224–231 for Kug-Bau and 266–296 for Sargon and the dynasty of Agade',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumerian-king-list-mixed-memory',
    statement: 'The Sumerian King List should not be read as a simple modern chronological record. The surviving tradition combines mythic and legendary material with rulers who are historically attested, and manuscript versions can disagree over reign lengths, names, ordering, and dynastic structure.',
    aboutEntityIds: ['text-sumerian-king-list'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-ashmolean-sumerian-king-list',
        evidenceRole: 'Supports',
        locator: 'museum discussion: combination of myth, legend, and historical information; several surviving versions',
      },
      {
        sourceId: 'src-primary-sumerian-king-list',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 2.1.1 critical translation records numerous manuscript variants in names, reign lengths, and sequence',
      },
    ],
    status: 'Published',
  },{
    id: 'claim-enki-eridu-oldest-city-tradition',
    statement: 'Sumerian tradition, as reflected in the Sumerian King List, names Eridu as the first city where kingship descended from heaven, reinforcing its symbolic priority as Enki\u2019s cult center.',
    aboutEntityIds: ['place-eridu', 'text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-sumerian-king-list', evidenceRole: 'Supports', locator: 'lines 1–39: kingship first descends to Eridug' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 2.1.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninhursag-birth-creation-role',
    statement: 'Ninhursag is a major Sumerian goddess associated with maternal, birth, fertility, and generative forces.',
    aboutEntityIds: ['deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Ninhursag entry' },
      { sourceId: 'src-bottero-mesopotamia', evidenceRole: 'Contextualizes', locator: 'maternal and creation traditions in Mesopotamian religion' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-old-babylonian-copies',
    statement: "Enki and Ninhursag is a Sumerian literary composition preserved in Old Babylonian-period copies from the early second millennium BCE. The surviving manuscripts provide the secure basis for dating the textual form represented in the atlas, while the composition's earlier development cannot be fixed with the same precision.",
    aboutEntityIds: ['text-enki-ninhursag'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-black-et-al-eteca',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, manuscript and textual reference for Enki and Ninhursag',
      },
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Contextualizes',
        locator: 'Enki and Ninhursag, Sumerian composition, ETCSL 1.1.1',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-manuscript-variation',
    statement: "The surviving witnesses to Enki and Ninhursag do not preserve the divine birth sequence in exactly the same form: the principal sequence proceeds from Ninhursag to Ninsar, Ninkura, and Uttu, while an additional manuscript passage inserts Ninimma before Uttu.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1: principal divine-generation sequence and manuscript variant containing Ninimma before Uttu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-uttu-warning',
    statement: "Before Enki approaches Uttu, the composition includes a warning to Uttu about Enki and gives her instructions concerning how she should respond to him.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, Uttu episode: Uttu is warned and instructed before Enki approaches her',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-uttu-plants',
    statement: "The Uttu episode leads directly into the origin of the eight plants: after Enki's encounter with Uttu, Ninhursag intervenes, and the narrative subsequently describes eight plants growing.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, Uttu and plant sequence preceding Enki eating the eight plants',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-fox-return',
    statement: "After Ninhursag curses Enki and withdraws, the composition introduces a fox who undertakes to bring Ninhursag back; the narrative then resumes with Ninhursag returning to the afflicted Enki.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, fox episode between Ninhursag withdrawing and her return to Enki',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-eight-healing-deities',
    statement: "At the healing climax, Enki identifies eight afflicted parts of his body. In response, Ninhursag brings forth eight deities associated with those afflictions, resolving the bodily crisis.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, final healing sequence: eight afflicted body parts and eight corresponding divine births',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-healing-destinies',
    statement: "The composition does not end merely with Enki's recovery: the newly brought-forth healing deities are also assigned destinies or functions before the narrative closes.",
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, closing sequence assigning destinies to the newly born deities',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-dilmun-setting',
    statement: 'At the opening of Enki and Ninhursag, Dilmun is repeatedly described as pure, virginal, and pristine; later in the same opening sequence, fresh water is provided so that its fields and city may flourish.',
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, lines 1–62: Dilmun is described as pure and pristine; fresh water later enables fields, grain, and urban prosperity',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-divine-birth-sequence',
    statement: 'Enki and Ninhursag preserves a sequence of divine births in which Ninhursag gives birth to Ninsar, Ninsar gives birth to Ninkura, and Ninkura gives birth to Uttu.',
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, lines 63–126: sequence of births leading from Ninhursag to Ninsar, Ninkura, and Uttu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enki-ninhursag-plants-curse',
    statement: 'In Enki and Ninhursag, eight plants are grown; Enki has them identified and eats them. Ninhursag then curses Enki and declares that she will not look upon him with a life-giving eye until his dying day.',
    aboutEntityIds: ['story-enki-ninhursag', 'text-enki-ninhursag', 'deity-enki', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enki-ninhursag',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.1.1, lines 190–227: eight plants are grown, Enki eats them, and Ninhursag curses him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninhursag-healing-sequence',
    statement: 'In Enki and Ninhursag, Ninhursag returns to the afflicted Enki and brings forth deities associated with his afflicted body parts, restoring him as the narrative reaches its healing climax.',
    aboutEntityIds: ['deity-ninhursag', 'deity-enki', 'text-enki-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enki-ninhursag', evidenceRole: 'Supports', locator: 'narrative sequence of healing and divine births' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL Sumerian text reference' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninhursag-creation-birth-tradition',
    statement: 'The Enki and Ninhursag narrative belongs to a wider Sumerian creation and birth tradition in which fertility, maternal power, and restoration are closely tied to the ordering of life rather than to one fixed, universal genealogy.',
    aboutEntityIds: ['deity-ninhursag', 'text-enki-ninhursag'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-bottero-mesopotamia', evidenceRole: 'Supports', locator: 'birth and creation traditions in Mesopotamian religion' },
      { sourceId: 'src-primary-enki-ninhursag', evidenceRole: 'Contextualizes', locator: 'narrative sequence of divine births and restoration' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-nintu-mami-distinction',
    statement: 'Atrahasis preserves important Mesopotamian birth and creation traditions involving Nintu/Mami, but those traditions should be treated as distinct from Ninhursag unless a specific text explicitly identifies them as the same figure.',
    aboutEntityIds: ['deity-ninhursag', 'text-atrahasis'],
    claimType: 'Comparative',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-primary-atrahasis', evidenceRole: 'Supports', locator: 'creation and divine labor context' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'discussion of creation traditions and birth/creation figures' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-ezida-nabu',
    statement: 'Borsippa was a principal cult center of Nabu, whose major sanctuary there was the temple known as Ezida.',
    aboutEntityIds: ['place-borsippa', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-shamash-shuma-ukin-4-nabu', evidenceRole: 'Supports', locator: 'Šamaš-šuma-ukin 4, obverse line 10: Nabu dwells in Ezida at Borsippa, identified as his cult center' },
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Contextualizes', locator: 'Ezida as the temple of Nabu at Borsippa' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-birs-nimrud',
    statement: 'Ancient Borsippa is identified with the archaeological site known today as Birs Nimrud.',
    aboutEntityIds: ['place-borsippa'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Supports', locator: 'Borsippa identified with Birs Nimrud' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-priest-archives',
    statement: 'The priestly archives of Borsippa preserve more than two hundred cuneiform texts connected with personnel serving the Ezida temple of Nabu.',
    aboutEntityIds: ['place-borsippa', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Supports', locator: '224 texts from the priestly archives of Borsippa associated with the Ezida temple' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-temple-workforce',
    statement: 'The surviving Ezida archives document specialized temple personnel including brewers, bakers, butchers, and oxherds who supplied food for the regular cult of Nabu.',
    aboutEntityIds: ['place-borsippa', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Supports', locator: 'Archives of brewers, bakers, butchers, and oxherds serving the temple of Nabu' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-ezida-royal-patronage',
    statement: 'Ezida received substantial royal patronage from Babylonian kings during the sixth century BCE and ranked among the most important sanctuaries of the Babylonian realm.',
    aboutEntityIds: ['place-borsippa', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Supports', locator: 'Ezida favored by sixth-century Babylonian kings and described as an especially important sanctuary' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-borsippa-archive-chronology',
    statement: 'The Borsippa priestly archive spans material from the reign of Ashurbanipal into the early fifth century BCE, providing evidence for temple life across the Neo-Babylonian and early Achaemenid periods.',
    aboutEntityIds: ['place-borsippa'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-oracc-borsippa-priest-archives', evidenceRole: 'Supports', locator: 'Archive texts dated from the reign of Ashurbanipal through the second year of Xerxes' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kutha-tell-ibrahim',
    statement: 'Ancient Kutha is identified with the archaeological site of Tell Ibrahim in central Iraq.',
    aboutEntityIds: ['place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-bm-kutha-tell-ibrahim', evidenceRole: 'Supports', locator: 'British Museum provenance identifying Tell Ibrahim as Kutha' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kutha-nergal-cult-center',
    statement: 'Kutha was the principal cult center of Nergal in Mesopotamian religious tradition.',
    aboutEntityIds: ['place-kutha', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nergal', evidenceRole: 'Supports', locator: 'Nergal entry: cult centers and temples; Kutha as principal cult center' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-032-nergal-epithet-emeslam',
    statement: 'Nebuchadnezzar II 032 calls Nergal the lord who binds the arms of the king’s enemies and records decorating the gate doors of Nergal’s temple Emeslam with shiny silver.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-032-nergal-kutha', 'deity-nergal', 'place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-nergal-kutha',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 032, column ii line 69: Nergal epithet and silver decoration of the gate doors of Emeslam',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-032-emeslam-fittings',
    statement: 'Nebuchadnezzar II 032 records fashioning thresholds, nukuššû-fittings, and lower doors for Emeslam with shiny silver as part of the king’s work on the sanctuary.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-032-nergal-kutha', 'deity-nergal', 'place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-nergal-kutha',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 032, column ii line 70-column iii line 1: thresholds, nukuššû-fittings, and lower doors fashioned with shiny silver',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-032-emeslam-walls',
    statement: 'Nebuchadnezzar II 032 records rebuilding the walls surrounding Emeslam and associated buildings in front of its forecourt in order to strengthen the temple’s protection.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-032-nergal-kutha', 'deity-nergal', 'place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-nergal-kutha',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 032, column iii lines 2-3: rebuilding the walls around Emeslam and its buildings to strengthen the sanctuary’s protection',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-032-kutha-embankment',
    statement: 'Nebuchadnezzar II 032 records work on the moat embankments of Kutha, surrounding the city on the outside with bitumen and baked brick.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-032-nergal-kutha', 'place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-nergal-kutha',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 032, column iii line 4: moat embankments of Cutha and outer construction using bitumen and baked brick',
      },
    ],
    status: 'Published',
  },  {
    id: 'claim-kutha-emeslam-temple',
    statement: 'Nergal’s major sanctuary at Kutha was the temple known as Emeslam.',
    aboutEntityIds: ['place-kutha', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-nebuchadnezzar-nergal-kutha', evidenceRole: 'Supports', locator: 'Nebuchadnezzar II 032, column ii line 69–column iii line 4: work on Emeslam and construction at Cutha' },
      { sourceId: 'src-oracc-amgg-nergal', evidenceRole: 'Contextualizes', locator: 'Nergal entry: Kutha and Emeslam' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kutha-nebuchadnezzar-building',
    statement: 'A Neo-Babylonian inscription of Nebuchadnezzar II records royal building activity at Kutha together with work on Nergal’s temple Emeslam.',
    aboutEntityIds: ['place-kutha', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-nebuchadnezzar-nergal-kutha', evidenceRole: 'Supports', locator: 'Nebuchadnezzar II 032, column ii line 69–column iii line 4' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kutha-rassam-excavation',
    statement: 'Nineteenth-century excavation at Tell Ibrahim by Hormuzd Rassam recovered cuneiform material now preserved in the British Museum.',
    aboutEntityIds: ['place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-bm-kutha-tell-ibrahim', evidenceRole: 'Supports', locator: 'British Museum tablet 42496: excavated at Tell Ibrahim by Hormuzd Rassam' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-state-god',
    statement: 'Aššur functioned as the central state deity of Assyria: Assyrian royal ideology presented kingship and military action under his authority, while the city of Ashur remained the civilization’s principal sacred center.',
    aboutEntityIds: ['civ-assyria', 'deity-ashur', 'place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-unesco-ashur-world-heritage',
        evidenceRole: 'Contextualizes',
        locator: 'Ashur as the ancient Assyrian capital and enduring religious center',
      },
      {
        sourceId: 'src-primary-ashur-dan-ii-1',
        evidenceRole: 'Supports',
        locator: 'Aššur-dān II 1: royal authority and military action presented under the command and patronage of Aššur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-assyria-cult-figures',
    statement: 'Neo-Assyrian religious evidence documents major roles for Aššur and Ištar — especially Ištar of Nineveh and Ištar of Arbela — while also attesting Ninurta at Kalhu, Nabu and Tašmetu in the Ezida complex at Kalhu, and Nergal within Assyrian royal cult.',
    aboutEntityIds: ['civ-assyria', 'deity-ashur', 'deity-inanna', 'deity-ninurta', 'deity-nabu', 'deity-tashmetu', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-inanna',
        evidenceRole: 'Supports',
        locator: 'Neo-Assyrian veneration: Ištar of Nineveh and Ištar of Arbela as major Assyrian forms of the goddess closely associated with kingship',
      },
      {
        sourceId: 'src-primary-ashurnasirpal-ii-001-ninurta',
        evidenceRole: 'Supports',
        locator: 'Ashurnasirpal II 001: Ninurta as warrior deity dwelling at Kalhu and recipient of royal cult investment',
      },
      {
        sourceId: 'src-oracc-nimrud-nabu-temple',
        evidenceRole: 'Supports',
        locator: 'Ezida at Kalhu and the developing importance of Nabu in Neo-Assyrian royal and scholarly culture',
      },
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Tašmetu and Nabu at Neo-Assyrian Kalhu',
      },
      {
        sourceId: 'src-primary-ashurbanipal-227-nergal',
        evidenceRole: 'Supports',
        locator: 'Ashurbanipal 227: Nergal as warrior, battle companion of the Assyrian king, and recipient of royal temple patronage',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-qalat-sherqat',
    statement: 'Ancient Ashur is identified with the archaeological site of Qal’at Sherqat on the Tigris in northern Iraq.',
    aboutEntityIds: ['place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Supports', locator: 'World Heritage identification of Ashur with Qal’at Sherqat' },
      { sourceId: 'src-met-assyrian-origins-ashur', evidenceRole: 'Contextualizes', locator: 'Archaeological site and excavation history of Ashur on the Tigris' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-early-capital',
    statement: 'Ashur developed into the first major political capital of Assyria and remained one of the civilization’s most important religious centers even after later kings established capitals elsewhere.',
    aboutEntityIds: ['place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Supports', locator: 'Ashur as the first capital of Assyria and continuing religious center' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-city-deity-identity',
    statement: 'The city of Ashur and the god Aššur shared the same name, and the city’s religious identity became closely connected with the political ideology of the Assyrian state.',
    aboutEntityIds: ['place-ashur', 'deity-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Contextualizes', locator: 'Ashur as the religious capital of Assyria' },
      { sourceId: 'src-primary-ashur-dan-ii-1', evidenceRole: 'Supports', locator: 'Aššur-dān II 1: divine appointment of the king and royal action by command of Aššur' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-monumental-sacred-city',
    statement: 'The archaeological remains of Ashur include major temples, ziggurats, palaces, fortifications, residences, and royal tombs, demonstrating the city’s combined religious, political, and urban functions.',
    aboutEntityIds: ['place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Supports', locator: 'Temples, three ziggurats, palaces, houses, fortifications, and royal burial structures' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-long-occupation',
    statement: 'Ashur preserves a long history of settlement extending from the third millennium BCE through Assyrian imperial history and into later periods.',
    aboutEntityIds: ['place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Supports', locator: 'Long occupation history beginning in the third millennium BCE' },
      { sourceId: 'src-met-assyrian-origins-ashur', evidenceRole: 'Contextualizes', locator: 'Archaeological sequence and material history of Ashur' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashur-modern-excavations',
    statement: 'Large-scale scientific excavation at Ashur began in 1903 under Walter Andrae and revealed much of the city’s monumental architecture, residential areas, temples, palaces, and material culture.',
    aboutEntityIds: ['place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-met-assyrian-origins-ashur', evidenceRole: 'Supports', locator: 'German excavations at Ashur beginning in 1903 under Walter Andrae' },
      { sourceId: 'src-unesco-ashur-world-heritage', evidenceRole: 'Contextualizes', locator: 'Archaeological remains and urban monuments of Ashur' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-sennacherib-capital',
    statement: 'Nineveh became the principal capital of the Neo-Assyrian Empire under Sennacherib around 700 BCE and remained the royal center of his successors until the city was destroyed in 612 BCE.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-nineveh-tentative', evidenceRole: 'Supports', locator: 'Nineveh established as the Assyrian capital by Sennacherib about 700 BCE and occupied by his successors until 612 BCE' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-walls-gates',
    statement: 'The fortified city of Nineveh was enclosed by a wall circuit extending for more than twelve kilometers, with multiple monumental gates providing access through the defenses.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-nineveh-tentative', evidenceRole: 'Supports', locator: 'City wall circumference of more than 12 km and excavated city gates' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-southwest-palace',
    statement: 'Sennacherib’s Southwest Palace at Nineveh was a major Neo-Assyrian royal complex whose rooms and courtyards were decorated with extensive carved stone reliefs.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-bm-assyria-nineveh', evidenceRole: 'Supports', locator: 'Southwest Palace of Sennacherib: rooms, courtyards, and carved stone wall panels' },
      { sourceId: 'src-unesco-nineveh-tentative', evidenceRole: 'Contextualizes', locator: 'Re-excavated throne-room suite of Sennacherib’s palace at Kuyunjik' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-ashurbanipal-library-tablets',
    statement: 'More than 30,000 cuneiform clay tablets were recovered from the ruins of Nineveh, including material associated with the scholarly collections conventionally known as Ashurbanipal’s Library.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-bm-ashurbanipal-library-project', evidenceRole: 'Supports', locator: 'More than 30,000 cuneiform clay tablets found in the ruins of Nineveh' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Introduction, on the Nineveh library and the Gilgamesh manuscript tradition' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-long-occupation',
    statement: 'The principal mound of Nineveh preserves evidence for a very long history of settlement, extending from approximately the sixth millennium BCE into the first millennium CE.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-nineveh-tentative', evidenceRole: 'Supports', locator: 'Kuyunjik occupation from approximately 6000 BCE to around 600 CE' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nineveh-destruction-612',
    statement: 'Nineveh ceased to function as the capital of the Neo-Assyrian Empire after its destruction in 612 BCE.',
    aboutEntityIds: ['place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-nineveh-tentative', evidenceRole: 'Supports', locator: 'Destruction of Nineveh in 612 BCE' },
      { sourceId: 'src-bm-ashurbanipal-library-project', evidenceRole: 'Contextualizes', locator: 'Conquest of Nineveh in 612 BCE and archaeological context of the library remains' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-neo-babylonian-capital',
    statement: 'Babylon served as the capital of the Neo-Babylonian Empire from 626 to 539 BCE and developed a monumental urban landscape of walls, gates, palaces, temples, and ceremonial architecture.',
    aboutEntityIds: ['place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Supports', locator: 'World Heritage property description: Neo-Babylonian capital, walls, gates, palaces, temples, and urbanism' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-ishtar-processional-way',
    statement: 'The Ishtar Gate and Processional Way formed major ceremonial elements of Neo-Babylonian Babylon and were decorated with distinctive glazed-brick animal imagery.',
    aboutEntityIds: ['place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Supports', locator: 'Ishtar Gate and Processional Way within the monumental Neo-Babylonian city' },
      { sourceId: 'src-smb-babylon-collection', evidenceRole: 'Supports', locator: 'Babylon collection: Ishtar Gate and Processional Way glazed-brick architectural material' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-esagila-etemenanki',
    statement: 'Babylon’s principal sacred landscape included the Esagila temple of Marduk and the Etemenanki ziggurat, monumental structures at the religious heart of the city.',
    aboutEntityIds: ['place-babylon', 'deity-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Supports', locator: 'Babylon monumental religious architecture, including Esagila and the Etemenanki ziggurat' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-nebuchadnezzar-rebuilding',
    statement: 'Much of the monumental Neo-Babylonian city visible archaeologically reflects major rebuilding and construction undertaken during the reign of Nebuchadnezzar II.',
    aboutEntityIds: ['place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Supports', locator: 'Neo-Babylonian monumental architecture and the reign of Nebuchadnezzar II' },
      { sourceId: 'src-smb-babylon-collection', evidenceRole: 'Contextualizes', locator: 'Excavated and reconstructed architectural remains from Neo-Babylonian Babylon' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-long-urban-history',
    statement: 'Babylon had a history extending back into the third millennium BCE and remained an important urban center under successive political powers long before and after its Neo-Babylonian peak.',
    aboutEntityIds: ['place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Supports', locator: 'World Heritage synthesis: Babylon dates back to the third millennium BCE and was the seat of successive empires' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-modern-excavations',
    statement: 'Systematic archaeological excavation at Babylon by the Deutsche Orient-Gesellschaft beginning in 1899 established much of the modern understanding of the city’s topography and monumental architecture.',
    aboutEntityIds: ['place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-smb-babylon-collection', evidenceRole: 'Supports', locator: 'German excavations at Babylon and the formation of the Berlin Babylon collection' },
      { sourceId: 'src-unesco-babylon-world-heritage', evidenceRole: 'Contextualizes', locator: 'Archaeological history and surviving monumental urban remains' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-large-mound-complex',
    statement: 'Ancient Kish occupied an extensive archaeological landscape made up of more than forty mounds spread across approximately twenty-four square kilometers.',
    aboutEntityIds: ['place-kish'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-kish-studies', evidenceRole: 'Supports', locator: 'Introduction: more than forty mounds distributed across a 24 km² area' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-hursagkalama-uhaimir',
    statement: 'The archaeological landscape of Kish included the eastern complex known as Hursagkalama, associated with the Ingharra mounds, and a western sector dominated by the ziggurat at Uhaimir.',
    aboutEntityIds: ['place-kish'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-kish-studies', evidenceRole: 'Supports', locator: 'Introduction: Hursagkalama/Ingharra in the east and Uhaimir ziggurat in the west' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-long-occupation',
    statement: 'Kish preserves evidence for a very long history of occupation, with remains extending from at least around 3000 BCE into the first millennium CE.',
    aboutEntityIds: ['place-kish'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-kish-studies', evidenceRole: 'Supports', locator: 'Introduction: earliest remains at least as early as 3000 BCE and latest remains into the seventh century CE' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-kingship-after-flood',
    statement: 'In the Sumerian King List tradition, Kish is presented as the first city to receive kingship after the flood.',
    aboutEntityIds: ['place-kish', 'text-sumerian-king-list'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-sumerian-king-list', evidenceRole: 'Supports', locator: 'Post-flood sequence: kingship descends to Kish' },
      { sourceId: 'src-isac-kish-studies', evidenceRole: 'Contextualizes', locator: 'Introduction: Kish and the post-flood descent of kingship' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-zababa-patron',
    statement: 'Zababa was a warrior god and the principal patron deity of Kish.',
    aboutEntityIds: ['place-kish'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-zababa', evidenceRole: 'Supports', locator: 'Zababa entry: patron deity and cult place at Kish' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kish-modern-excavations',
    statement: 'Major archaeological excavations at Kish were carried out from 1923 to 1933 by a joint expedition of the Field Museum and the University of Oxford, investigating numerous mounds across the ancient city.',
    aboutEntityIds: ['place-kish'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-kish-studies', evidenceRole: 'Supports', locator: 'Publication overview: 1923–1933 excavations and investigation of seventeen mounds' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-tell-al-hiba',
    statement: 'Ancient Lagash is identified with the archaeological site of Tell al-Hiba in southern Iraq.',
    aboutEntityIds: ['place-lagash'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-penn-lagash-project', evidenceRole: 'Supports', locator: 'Lagash Archaeological Project at Tell al-Hiba' },
      { sourceId: 'src-mcmahon-et-al-lagash-2023', evidenceRole: 'Supports', locator: 'Tell al-Hiba identified as ancient Lagash' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-third-millennium-city',
    statement: 'Lagash developed into a major urban center during the third millennium BCE and formed part of one of the most important Sumerian city-states of southern Mesopotamia.',
    aboutEntityIds: ['place-lagash'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-penn-lagash-project', evidenceRole: 'Supports', locator: 'Overview of third-millennium Lagash and its archaeological history' },
      { sourceId: 'src-mcmahon-et-al-lagash-2023', evidenceRole: 'Supports', locator: 'Third-millennium urban occupation at Lagash' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-multicentric-urbanism',
    statement: 'Archaeological and geophysical research indicates that Lagash had a complex, multi-centered urban form rather than one uniformly dense settlement, with inhabited zones separated by waterways and less densely occupied areas.',
    aboutEntityIds: ['place-lagash'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-mcmahon-et-al-lagash-2023', evidenceRole: 'Supports', locator: 'Dense urbanism, multiple settlement sectors, waterways, and economic multi-centrism' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-craft-production',
    statement: 'Excavations at Lagash provide evidence for specialized craft production and economic activity within different parts of the city.',
    aboutEntityIds: ['place-lagash'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-mcmahon-et-al-lagash-2023', evidenceRole: 'Supports', locator: 'Excavated neighborhoods and evidence for specialized production and economic activity' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-temples',
    statement: 'Excavations at Lagash have revealed major temple complexes, including the Ibgal associated with Inanna and the Bagara associated with Ningirsu.',
    aboutEntityIds: ['place-lagash', 'deity-inanna'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-penn-lagash-project', evidenceRole: 'Supports', locator: 'Excavated sacred architecture at Tell al-Hiba, including the Ibgal and Bagara temple areas' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lagash-girsu-distinction',
    statement: 'Lagash and Girsu were distinct ancient urban centers within the wider Lagash state; archaeological finds from Girsu at modern Tello should therefore not automatically be described as discoveries from the city of Lagash itself.',
    aboutEntityIds: ['place-lagash'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-penn-lagash-project', evidenceRole: 'Contextualizes', locator: 'Tell al-Hiba as Lagash within the broader Lagash city-state landscape' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nippur-ekur-enlil',
    statement: 'Nippur was the principal cult center of Enlil, whose major sanctuary there was the Ekur temple complex.',
    aboutEntityIds: ['place-nippur', 'deity-enlil'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-nippur-expedition', evidenceRole: 'Supports', locator: 'Nippur as the sacred city of Enlil and location of the Ekur sanctuary' },
      { sourceId: 'src-mccown-haines-nippur-i', evidenceRole: 'Supports', locator: 'Temple of Enlil excavations and architectural remains' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nippur-scribal-quarter',
    statement: 'Excavations at Nippur uncovered a substantial scribal quarter containing tablets that provide important evidence for education, administration, and literary culture in Mesopotamia.',
    aboutEntityIds: ['place-nippur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-mccown-haines-nippur-i', evidenceRole: 'Supports', locator: 'Scribal Quarter excavations and tablet-bearing contexts' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nippur-long-occupation',
    statement: 'Archaeological soundings at Nippur document a long sequence of occupation extending across multiple periods of Mesopotamian history.',
    aboutEntityIds: ['place-nippur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-mccown-haines-nippur-i', evidenceRole: 'Supports', locator: 'Soundings and occupational sequence at Nippur' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nippur-urban-landscape',
    statement: 'Archaeological investigation at Nippur has identified major elements of the urban landscape, including temple districts, residential areas, defensive works, and waterways.',
    aboutEntityIds: ['place-nippur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-nippur-expedition', evidenceRole: 'Supports', locator: 'Overview of excavated temple, residential, city-wall, and canal areas' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nippur-modern-excavations',
    statement: 'Nippur became one of the major sites of Mesopotamian archaeology through late nineteenth-century excavations and later long-term University of Chicago fieldwork.',
    aboutEntityIds: ['place-nippur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      { sourceId: 'src-isac-nippur-expedition', evidenceRole: 'Supports', locator: 'History of excavation at Nippur' },
      { sourceId: 'src-mccown-haines-nippur-i', evidenceRole: 'Contextualizes', locator: 'University of Chicago excavation publication' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-nippur-neutral-ground',
    statement: 'Nippur, Enlil\u2019s primary cult center, functioned as a kind of religious rather than political capital in Sumer — no single city-state\u2019s claim to kingship was considered fully legitimate without recognition at Nippur.',
    aboutEntityIds: ['deity-enlil', 'place-nippur'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-crawford-sumer-cities', evidenceRole: 'Supports', locator: 'Discussion of Nippur\u2019s religious status' }],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-old-babylonian-recension',
    statement: "The best-preserved recension of Atrahasis is Old Babylonian and is generally dated to approximately the eighteenth century BCE. This dating belongs to the surviving recension and manuscripts, not necessarily to every earlier stage of the tradition.",
    aboutEntityIds: ['text-atrahasis'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Introduction and discussion of the Old Babylonian recension and manuscript dating',
      },
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Old Babylonian recension, Tablets I-III',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-manuscript-tradition',
    statement: "Atrahasis is reconstructed from multiple tablets and fragments rather than surviving as one complete ancient copy. The Old Babylonian recension is the fullest witness, while later fragments preserve additional portions and variants; damage and gaps remain in the text.",
    aboutEntityIds: ['text-atrahasis'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Introduction, manuscript witnesses, reconstruction, and later fragments',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-three-tablet-structure',
    statement: "The standard Old Babylonian recension of Atrahasis is conventionally organized in three tablets: Tablet I centers on divine labor and human creation, Tablet II on the population and noise crisis with escalating reduction measures, and Tablet III on the flood and its aftermath.",
    aboutEntityIds: ['text-atrahasis'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Critical edition, Tablets I-III and reconstruction of the Old Babylonian recension',
      },
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Old Babylonian recension, Tablets I-III',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-divine-labor-revolt',
    statement: "At the beginning of Atrahasis, lesser gods perform exhausting labor for the senior gods, including digging and maintaining the great waterways. Their burden eventually produces a revolt and confrontation that creates the need for another labor force.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet I: labor of the lesser gods, their exhaustion, revolt, and confrontation with the senior gods',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet I, divine labor and revolt sequence',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-human-creation',
    statement: "Atrahasis presents the creation of humanity as the solution to the gods' labor crisis. The birth-goddess creates humans so that they can bear the work previously imposed on the lesser gods, using clay together with the flesh and blood of a slain god.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis', 'topic-creation'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet I: decision to create humanity to bear divine labor and the clay-and-divine-blood creation procedure',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet I, creation of humanity',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-plague-intervention',
    statement: "When human multiplication and noise become intolerable to Enlil, one of the first population-reduction measures is plague. Enki/Ea advises Atrahasis how humanity can respond, undermining the intended destruction and allowing the population to recover.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis', 'deity-enki', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablets I-II: plague episode and Enki/Ea advising Atrahasis',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'plague episode and Atrahasis response',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-drought-famine',
    statement: "After the plague fails to solve the population problem permanently, Atrahasis describes increasingly severe measures involving drought, failed harvests, and famine. Enki/Ea continues to work against the measures directed at humanity, while Enlil presses for stronger action.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis', 'deity-enki', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet II: drought, agricultural failure, famine, and continuing attempts to reduce humanity',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet II, escalating population-reduction measures',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-boat-flood-survival',
    statement: "After the gods decide on the flood, Enki/Ea communicates the danger indirectly through a reed wall and instructs Atrahasis to construct a vessel. Atrahasis follows the warning and survives the catastrophe.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet III: reed-wall warning, vessel instructions, and Atrahasis surviving the flood',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet III, flood warning and survival sequence',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-gods-hunger-sacrifice',
    statement: "During and after the flood, Atrahasis depicts the gods themselves suffering from the destruction of humanity, including hunger and distress because human offerings have ceased. After surviving, Atrahasis offers sacrifice and the gods gather around the offering.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet III: divine hunger and distress during the flood and Atrahasis offering sacrifice afterward',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet III, flood and sacrifice aftermath',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-enlil-ea-aftermath',
    statement: "After discovering that a human survived, Enlil reacts angrily. Enki/Ea defends his intervention and challenges the indiscriminate destruction caused by the flood, helping move the divine dispute toward a different solution for controlling human numbers.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis', 'deity-enki', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet III: Enlil anger at human survival and Enki/Ea response after the flood',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet III, post-flood dispute between Enlil and Enki/Ea',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-atrahasis-post-flood-population-controls',
    statement: "The post-flood settlement in Atrahasis limits future human population growth through new constraints on reproduction and survival, including women who do not bear children, infant mortality associated with the demon Pasittu, and women assigned to religious statuses that prevent childbirth.",
    aboutEntityIds: ['story-atrahasis-flood', 'text-atrahasis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Tablet III, closing population-control settlement following the flood',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Contextualizes',
        locator: 'Tablet III, post-flood controls on human reproduction and population',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-flood-instigator',
    statement: "Enlil is depicted as the primary instigator of the divine decision to send the flood in Atrahasis, motivated by humanity's noise disturbing his rest, though the assembly as a whole is described as consenting.",
    aboutEntityIds: ['deity-enlil', 'text-atrahasis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-atrahasis', evidenceRole: 'Supports', locator: 'Tablets I–II: noise crisis and successive population-reduction measures leading to the flood decision' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'critical edition and translation, Tablets I–II' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-assembly-deliberation',
    statement: 'In Atrahasis, the divine assembly as a whole is described as deliberating and consenting to the decision to send the flood, rather than presenting Enlil as acting entirely unilaterally.',
    aboutEntityIds: ['deity-enlil', 'text-atrahasis', 'topic-divine-council'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-atrahasis', evidenceRole: 'Supports', locator: 'Tablets I–II: divine assembly deliberation and consent' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'critical edition and analysis of divine assembly dynamics' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-enki-contrasting-role',
    statement: 'In Atrahasis, Enki/Ea acts to moderate or circumvent the divine decisions against humanity, protecting Atrahasis through an indirect warning via a reed wall rather than through open defiance of the assembly.',
    aboutEntityIds: ['deity-enlil', 'deity-enki', 'text-atrahasis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-atrahasis', evidenceRole: 'Supports', locator: 'Tablet III: Enki\'s warning to Atrahasis via reed wall' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'critical edition and translation, Tablet III' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-authority-negotiated',
    statement: 'Scholars generally read Enlil\'s role in Atrahasis as reflecting a broader Mesopotamian pattern in which the head of the divine assembly holds real but not absolute authority—his decisions carry weight, but other gods can and do act to soften or work around them.',
    aboutEntityIds: ['deity-enlil', 'text-atrahasis'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Supports', locator: 'discussion of Enlil\'s authority in divine decision-making and Enki\'s intervention' },
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Contextualizes', locator: 'Enlil entry: authority and negotiation in divine assembly' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enlil-an-hierarchy-variation',
    statement: 'Scholars continue to discuss whether An\'s formally higher rank in the divine hierarchy corresponds to operational authority, or whether Enlil functions as the more actively authoritative head of the assembly, with the relationship possibly varying across different texts and periods.',
    aboutEntityIds: ['deity-enlil', 'deity-an'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'An and Enlil entries; discussion of pantheon hierarchy' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'introduction and analysis of divine assembly structure' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-heaven-primeval-division',
    statement: 'In the Sumerian composition Gilgamesh, Enkidu and the Netherworld, An takes heaven for himself in the primeval division of cosmic realms, while Enlil takes the earth.',
    aboutEntityIds: ['deity-an', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-enkidu-netherworld', evidenceRole: 'Supports', locator: 'ETCSL 1.8.1.4, lines 11–12' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.8.1.4 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-inana-ebih-terrifying-status',
    statement: 'In Inana and Ebih, Inana addresses An and credits him with making her terrifying among the deities in heaven.',
    aboutEntityIds: ['deity-an'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inana-ebih', evidenceRole: 'Supports', locator: 'ETCSL 1.3.2, lines 65–69' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.3.2 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-anu-names-languages',
    statement: 'An is the Sumerian name of the deity, while Anu is the Akkadian form.',
    aboutEntityIds: ['deity-an'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-an', evidenceRole: 'Supports', locator: 'An/Anu entry: names and languages' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-sky-heaven-domain',
    statement: 'An/Anu was closely associated with the sky and heaven in Mesopotamian religious tradition.',
    aboutEntityIds: ['deity-an'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-an', evidenceRole: 'Supports', locator: 'An/Anu entry: roles and domains' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-formal-high-status',
    statement: 'An/Anu occupied a position of high formal status within Mesopotamian divine hierarchies, although the exercise of divine authority varied by text and period.',
    aboutEntityIds: ['deity-an'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-an', evidenceRole: 'Supports', locator: 'An/Anu entry: divine status and historical development' },
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Contextualizes', locator: 'An entry: pantheon hierarchy' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-enlil-authority-distinction',
    statement: 'Across Mesopotamian traditions, An/Anu could retain formal seniority while Enlil exercised more active authority in particular texts; their relative roles were not fixed identically across every period or composition.',
    aboutEntityIds: ['deity-an', 'deity-enlil'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-an', evidenceRole: 'Supports', locator: 'An/Anu entry: divine status and historical development' },
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Contextualizes', locator: 'An and Enlil entries: pantheon hierarchy' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-early-urban-center',
    statement: 'By the late fourth and early third millennia BCE, Uruk had developed into one of the oldest and largest urban centers of Mesopotamia.',
    aboutEntityIds: ['place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-dai-uruk-warka', evidenceRole: 'Supports', locator: 'Uruk project overview: urban growth in the fourth and early third millennia BCE' },
      { sourceId: 'src-adams-nissen-uruk-countryside', evidenceRole: 'Supports', locator: 'Introduction: Uruk as one of the oldest and largest Mesopotamian urban centers' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-monumental-sanctuaries',
    statement: 'Uruk contained major monumental sanctuary districts, including the Eanna complex associated especially with Inanna/Ishtar and the Anu sanctuary.',
    aboutEntityIds: ['place-uruk', 'deity-inanna', 'deity-an'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-dai-uruk-warka', evidenceRole: 'Supports', locator: 'Uruk project results: Eanna and Anu sanctuary districts' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-early-writing-administration',
    statement: 'Uruk preserves some of the earliest evidence for cuneiform writing and the complex administrative systems associated with the Late Uruk period.',
    aboutEntityIds: ['place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-dai-uruk-warka', evidenceRole: 'Supports', locator: 'Uruk project overview: early cuneiform and complex administration in the Late Uruk period' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-wall-canals',
    statement: 'By the beginning of the third millennium BCE, Uruk possessed an extensive city wall and an internal canal system that formed major elements of its urban landscape.',
    aboutEntityIds: ['place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-dai-uruk-warka', evidenceRole: 'Supports', locator: 'Uruk project overview: urban canals and approximately 9 km city wall' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-modern-archaeology',
    statement: 'German archaeological research at Uruk/Warka began in 1912 and has developed into a long-running program of excavation, architectural study, and archaeological analysis.',
    aboutEntityIds: ['place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-dai-uruk-warka', evidenceRole: 'Supports', locator: 'Uruk project history and research program, begun in 1912' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-uruk-gilgamesh-literary-tradition',
    statement: 'Mesopotamian literary tradition presents Gilgamesh as king of Uruk, making the city central to the narratives associated with him; this literary association should not be treated as proof that every episode of the Gilgamesh tradition is historical.',
    aboutEntityIds: ['place-uruk', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Supports', locator: 'Introduction and Gilgamesh tradition: Gilgamesh as king of Uruk' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-an-uruk-eanna-cult',
    statement: 'From the third millennium onward, with interruptions, An/Anu was worshipped at Uruk together with Inanna/Ishtar in the Eanna temple complex.',
    aboutEntityIds: ['deity-an', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-an', evidenceRole: 'Supports', locator: 'An/Anu entry: cult places and historical development' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-enlil-ninlil-parentage-journey',
    statement: 'In Nanna-Suen’s Journey to Nippur, Nanna-Suen identifies Enlil as his father and Ninlil as his mother as he prepares to journey to Nippur.',
    aboutEntityIds: ['deity-nanna', 'deity-enlil'],
    claimType: 'Genealogical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-nanna-journey-nippur', evidenceRole: 'Supports', locator: 'ETCSL 1.5.1, lines 9–16' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.5.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-suen-sin-names-languages',
    statement: 'Nanna is the principal Sumerian name of the deity, while Suen/Sîn are Akkadian forms; the names occur across overlapping historical traditions rather than representing one simple replacement sequence.',
    aboutEntityIds: ['deity-nanna'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: names and languages' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-lunar-domain',
    statement: 'Nanna/Suen/Sîn was a major Mesopotamian lunar deity associated with the moon.',
    aboutEntityIds: ['deity-nanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: roles and domains' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-ur-cult-center',
    statement: 'Ur was a principal cult center of Nanna/Suen/Sîn and was especially important in the deity’s Mesopotamian worship.',
    aboutEntityIds: ['deity-nanna', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: cult places' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-ekishnugal-ur',
    statement: 'At Ur, the principal sanctuary of Nanna/Suen was known as Ekišnugal.',
    aboutEntityIds: ['deity-nanna', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: Ur cult place' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-harran-cult-center',
    statement: "A cult center of Nanna/Su'en is attested at Harran from the Old Babylonian period onward, representing a historically distinct setting from the deity’s traditions at Ur.",
    aboutEntityIds: ['deity-nanna', 'place-harran'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: cult places' }],
    status: 'Published',
  },
  {
    id: 'claim-nanna-ningal-consort',
    statement: 'Ningal was the consort of Nanna/Suen and formed with him the principal divine pair associated with Ur and Ekišnugal.',
    aboutEntityIds: ['deity-nanna', 'deity-ningal', 'place-ur'],
    claimType: 'Genealogical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: family and divine relationships' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-utu-inanna-children',
    statement: 'Utu and Inanna are presented as children of Nanna and Ningal in an important Mesopotamian divine-family tradition, although individual texts and periods can preserve different genealogical arrangements.',
    aboutEntityIds: ['deity-nanna', 'deity-ningal', 'deity-utu', 'deity-inanna'],
    claimType: 'Genealogical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: family and divine relationships' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-crescent-symbol',
    statement: 'The lunar crescent was a principal symbol of Nanna/Suen/Sin, and the curved horns of a bull could also evoke the shape and power of the crescent moon.',
    aboutEntityIds: ['deity-nanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: iconography and symbolism' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanna-high-priestess-ur',
    statement: 'Royal daughters were repeatedly appointed as high priestesses of Nanna at Ur, linking the lunar cult with royal institutions and the sacred precinct of the city.',
    aboutEntityIds: ['deity-nanna', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: Ur cult and priesthood' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-nikkal-name',
    statement: 'Ningal is the Sumerian name of the goddess, while Nikkal is an Akkadian form of her name.',
    aboutEntityIds: ['deity-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-nanna', evidenceRole: 'Supports', locator: 'Nanna/Suen/Sin entry: divine genealogy and Ningal/Nikkal' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-queen-ekishnugal-ur',
    statement: 'A royal inscription from Ur addresses Ningal as queen of Ekišnugal and beloved of Ur.',
    aboutEntityIds: ['deity-ningal', 'place-ur', 'text-ashurbanipal-2005-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ningal-ur-inscription', evidenceRole: 'Supports', locator: 'Q003844, lines 1–4' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-giparu-ur',
    statement: 'A Neo-Assyrian inscription from Ur records Sîn-balāssu-iqbi rebuilding the Gipāru for Ningal and describes her as the beloved wife of Sîn.',
    aboutEntityIds: ['deity-ningal', 'deity-nanna', 'place-ur', 'text-ashurbanipal-2005-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ningal-ur-inscription', evidenceRole: 'Supports', locator: 'Q003844, lines 5–17' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-giparu-statue',
    statement: 'Q003844 records Sîn-balāssu-iqbi having a statue made as a re-creation of Ningal and installing it within the sacred complex after rebuilding the Gipāru.',
    aboutEntityIds: ['deity-ningal', 'place-ur', 'text-ashurbanipal-2005-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ningal-ur-inscription', evidenceRole: 'Supports', locator: 'Q003844, lines 10–17' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2005-sin-balassu-iqbi',
    statement: 'Although conventionally catalogued as Ashurbanipal 2005, Q003844 identifies Sîn-balāssu-iqbi, governor of Ur, as the official responsible for rebuilding the Gipāru for Ningal.',
    aboutEntityIds: ['text-ashurbanipal-2005-ningal', 'deity-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-ur-inscription',
        evidenceRole: 'Supports',
        locator: 'Q003844, lines 5-10: Sîn-balāssu-iqbi, governor of Ur, rebuilds the Gipāru',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2005-enun-residence',
    statement: 'Q003844 states that after a statue was fashioned as a re-creation of Ningal and brought into the sacred complex, the goddess took up residence in Enun, which had been built as her lordly abode.',
    aboutEntityIds: ['text-ashurbanipal-2005-ningal', 'deity-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-ur-inscription',
        evidenceRole: 'Supports',
        locator: 'Q003844, lines 11-17: Ningal statue, installation, and residence in Enun',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2005-cone-provenance',
    statement: 'Q003844 is a Sumerian Neo-Assyrian royal inscription preserved on clay-cone exemplars from Ur.',
    aboutEntityIds: ['text-ashurbanipal-2005-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-ur-inscription',
        evidenceRole: 'Supports',
        locator: 'Q003844 catalogue metadata: Sumerian Neo-Assyrian clay cones from Ur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-queen-goddesses-q003845',
    statement: 'Q003845 addresses Ningal as an exalted lady and queen of the goddesses.',
    aboutEntityIds: ['deity-ningal', 'text-ashurbanipal-2006-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ningal-well-q003845', evidenceRole: 'Supports', locator: 'Q003845, lines 1–3' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-puhilituma-well',
    statement: 'Q003845 records Sîn-balāssu-iqbi opening the site, building the well Puḫilituma for Ningal, establishing it for the future, and bringing lasting spring water into it.',
    aboutEntityIds: ['deity-ningal', 'place-ur', 'text-ashurbanipal-2006-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ningal-well-q003845', evidenceRole: 'Supports', locator: 'Q003845, lines 4–13' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2006-health-dedication',
    statement: 'Q003845 states that the construction of Puḫilituma was undertaken in order to ensure the good health of Ashurbanipal, king of Assyria.',
    aboutEntityIds: ['text-ashurbanipal-2006-ningal', 'deity-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-well-q003845',
        evidenceRole: 'Supports',
        locator: 'Q003845, lines 4-6: work undertaken for the good health of Ashurbanipal, king of Assyria',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2006-sin-balassu-iqbi',
    statement: 'Q003845 identifies Sîn-balāssu-iqbi, son of Ningal-iddin and governor of Ur, Eridu, and the Gurasimmu tribe, as the official who built Puḫilituma for Ningal.',
    aboutEntityIds: ['text-ashurbanipal-2006-ningal', 'deity-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-well-q003845',
        evidenceRole: 'Supports',
        locator: 'Q003845, lines 6-13: Sîn-balāssu-iqbi, his offices, and construction of Puḫilituma',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2006-future-ruler-blessing',
    statement: 'Q003845 closes with a blessing for any future ruler who reopens the well, asking that his days be long and his offspring numerous.',
    aboutEntityIds: ['text-ashurbanipal-2006-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-well-q003845',
        evidenceRole: 'Supports',
        locator: 'Q003845, lines 14-16: blessing for a future ruler who reopens the well',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-2006-disk-provenance',
    statement: 'Q003845 is a Neo-Assyrian royal inscription preserved on clay disks from Ur, ancient Tell Muqayyar.',
    aboutEntityIds: ['text-ashurbanipal-2006-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ningal-well-q003845',
        evidenceRole: 'Supports',
        locator: 'Q003845 catalogue metadata: disk; Neo-Assyrian; Tell Muqayyar (Ur)',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-amar-suena-lady-mother-ur',
    statement: 'Amar-Suena 11 identifies Ningal as the lady of Urim and invokes Nanna, king of Urim, together with Ningal, mother of Urim, in the inscription’s curse formula.',
    aboutEntityIds: ['deity-ningal', 'deity-nanna', 'place-ur', 'text-amar-suena-11-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-amar-suena-11-ningal', evidenceRole: 'Supports', locator: 'Amar-Suena 11, lines 14–29' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-amar-suena-11-royal-titulary-statue',
    statement: 'Amar-Suena 11 presents Amar-Suena as the king whose name was proclaimed by Enlil, steadfast supporter of Enlil’s temple, king of Urim, and king of the four quarters, and records the erection of a named statue.',
    aboutEntityIds: ['text-amar-suena-11-ningal', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-amar-suena-11-ningal',
        evidenceRole: 'Supports',
        locator: 'Amar-Suena 11, lines 1-13: royal titulary and erection of the named statue',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-amar-suena-11-gold-statue-curse',
    statement: 'Amar-Suena 11 protects a gold statue associated with Ningal by cursing anyone who transfers it from the temple to a storehouse; Nanna and Ningal are invoked to curse the offender and cut short his lineage.',
    aboutEntityIds: ['text-amar-suena-11-ningal', 'deity-ningal', 'deity-nanna', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-amar-suena-11-ningal',
        evidenceRole: 'Supports',
        locator: 'Amar-Suena 11, lines 14-29: Ningal, the gold statue, and the curse invoking Nanna and Ningal',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-amar-suena-11-later-copy',
    statement: 'The colophon of Amar-Suena 11 states that Sîn-balāssu-iqbi found a baked-brick inscription of Amar-Suena while searching for the ground plan of Ekišnugal at Ur, after which Nabû-šuma-iddin, a lamentation-priest of Sîn, read and copied it for viewing.',
    aboutEntityIds: ['text-amar-suena-11-ningal', 'deity-nanna', 'place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-amar-suena-11-ningal',
        evidenceRole: 'Supports',
        locator: 'Amar-Suena 11, colophon lines 1-10: discovery of the earlier inscription and its later scribal copying',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-lament-destruction-exile',
    statement: 'In The Lament for Urim, Ningal speaks as the queen of a destroyed Ur, mourns the loss of her city and house, and describes herself as exiled from both city and dwelling.',
    aboutEntityIds: ['deity-ningal', 'place-ur', 'text-lament-for-urim'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-lament-for-urim', evidenceRole: 'Supports', locator: 'ETCSL 2.2.2, lines 241–327, especially 286–320' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ningal-lament-restoration',
    statement: 'The closing movement of The Lament for Urim calls Mother Ningal back to her city and asks that Urim be restored to her so that she may exercise its queenship again.',
    aboutEntityIds: ['deity-ningal', 'place-ur', 'text-lament-for-urim'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-lament-for-urim', evidenceRole: 'Supports', locator: 'ETCSL 2.2.2, lines 369–386' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-ishtar-name-shift',
    statement: 'Ishtar is the Akkadian name corresponding to Sumerian Inanna, and the historical continuity between the two names is well established. This does not mean every later Ishtar tradition can simply be projected back onto every Sumerian Inanna text in exactly the same form.',
    aboutEntityIds: ['deity-inanna'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Inanna/Ishtar entry' }],
    status: 'Published',
  },
  {
    id: 'claim-inanna-ur-cult-attested',
    statement: 'Ur was among the Mesopotamian cities where Inanna/Ishtar had an attested cult presence, while Uruk remained one of her principal and most important cult centers.',
    aboutEntityIds: ['deity-inanna', 'place-ur', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-inanna', evidenceRole: 'Supports', locator: 'Inana/Ištar entry: cult places, including Uruk and Ur' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-preparation-ninshubur',
    statement: "Before entering the underworld, Inanna takes the seven divine powers and dresses in her regalia. She gives her minister Ninshubur detailed instructions to lament for her and appeal successively to Enlil, Nanna, and Enki if she does not return.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 14-72: Inanna takes her regalia and gives Ninshubur instructions for the descent and possible rescue' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-death-hook',
    statement: "After the seven gates, the seven Anuna judges render a decision against Inanna. The text describes the look of death and speech of anger directed at her, after which she becomes a corpse and her body is hung on a hook.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna', 'deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 164-172: judgment by the seven Anuna, Inanna becomes a corpse, and the corpse is hung on a hook' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-ninshubur-appeals',
    statement: "After three days and three nights, Ninshubur carries out Inanna's instructions: she laments, performs mourning acts, and appeals first to Enlil, then to Nanna, and finally to Enki. Enlil and Nanna refuse to intervene, while Enki responds to the crisis.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna', 'deity-enlil', 'deity-nanna', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 173-225: Ninshubur mourns and appeals to Enlil, Nanna, and Enki; Enki agrees to act' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-enki-rescue-beings',
    statement: "Enki creates two beings, the kur-jara and gala-tura, and gives them the life-giving plant and life-giving water. They enter the underworld, obtain Inanna's corpse from Ereshkigal, apply the plant and water, and Inanna rises again.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna', 'deity-enki', 'deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 217-281: Enki creates the kur-jara and gala-tura, gives the life-giving plant and water, and Inanna is restored' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-restoration-substitute',
    statement: "Although Inanna is restored to life, the Anuna prevent her from leaving the underworld without consequence. They declare that if she is to ascend, she must provide a substitute for herself.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 273-289: Inanna rises and the Anuna require a substitute before she may ascend' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-return-demons',
    statement: "Inanna leaves the underworld accompanied and restrained by underworld demons who demand a substitute. She refuses to surrender Ninshubur and other mourners who had shown loyalty to her before the group reaches Dumuzi at Kulaba.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 290-358: demons accompany Inanna, proposed substitutes are rejected, and the group reaches Dumuzi at Kulaba' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-dumuzi-utu-escape',
    statement: "After Dumuzi is given into the demons' hands, he appeals to Utu for help. Utu transforms Dumuzi's hands and feet so that he can escape his captors temporarily.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-dumuzi', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 368-383: Dumuzi appeals to Utu and receives a transformation that allows temporary escape' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-half-year-geshtinanna',
    statement: "The damaged closing passage of Inanna's Descent appears to assign Dumuzi and his sister alternating half-year periods, with one staying while the other is released. Because the passage is fragmentary, the exact mechanics and wording of the arrangement should be presented cautiously.",
    aboutEntityIds: ['story-descent-of-inanna', 'text-descent-of-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 404-410: damaged closing passage referring to Dumuzi and his sister in alternating half-year periods' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation and reconstruction of the damaged closing lines' },
      { sourceId: 'src-oracc-amgg-geshtinanna', evidenceRole: 'Contextualizes', locator: 'Geštinanna identified in Mesopotamian tradition as Dumuzi/Dumuzid sister' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-ereshkigal-sister',
    statement: 'In Inanna’s Descent to the Netherworld, Ereshkigal is identified as Inanna’s sister and ruler of the underworld.',
    aboutEntityIds: ['deity-inanna', 'deity-ereshkigal', 'story-descent-of-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 85–89 and 94–101: Ereshkigal is identified as Inanna’s sister and underworld ruler' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-underworld-ruler',
    statement: 'Ereškigal was a Mesopotamian goddess who ruled the underworld.',
    aboutEntityIds: ['deity-ereshkigal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-ereshkigal', evidenceRole: 'Supports', locator: 'Ereškigal entry: overview and functions' }],
    status: 'Published',
  },
  {
    id: 'claim-inanna-broad-roles',
    statement: 'Inanna/Ishtar was broadly associated with love, sexuality, warfare, fertility, and political or divine power in Mesopotamian tradition, but these associations are best understood as broad historical patterns rather than one unchanged theology across every period and text.',
    aboutEntityIds: ['deity-inanna'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Inanna/Ishtar entry; broad domains and historical usage' }],
    status: 'Published',
  },
  {
    id: 'claim-inanna-descent-seven-gates',
    statement: 'At each of the seven gates of the underworld, Inanna is required to remove one item of clothing, jewelry, or divine regalia. The sequence accompanies her progress toward Ereshkigal and is presented as a fixed structural requirement of entry to the underworld.',
    aboutEntityIds: ['deity-inanna', 'story-descent-of-inanna', 'topic-underworld'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 114–163: seven gates and removal of regalia' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inanna-dumuzi-substitute',
    statement: 'After her return, Inanna is required by underworld law to provide a substitute; Dumuzi is ultimately designated or seized as that substitute.',
    aboutEntityIds: ['deity-inanna', 'deity-dumuzi', 'story-descent-of-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 348–358 and 404–410: Dumuzi is designated/seized as substitute' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1 edition/translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-geshtinanna-sister',
    statement: 'In Sumerian mythological traditions summarized by ORACC, Geštinanna is identified as the sister of Dumuzi.',
    aboutEntityIds: ['deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Functions: Geštinanna identified as the sister of Dumuzi',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-dream-death',
    statement: 'The Sumerian composition Dumuzi’s Dream presents Dumuzi receiving an ominous dream that foretells his death, attempting to escape his pursuers, and receiving help from his sister Geštinanna before he ultimately dies.',
    aboutEntityIds: ['deity-dumuzi', 'text-dumuzi-dream'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'Functions: summary of Dumuzi’s Dream and Geštinanna’s attempt to protect Dumuzi',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-descent-shepherd-seized',
    statement: 'In Inanna’s Descent to the Netherworld, Dumuzi is found at the great apple tree in the plain of Kulaba, is identified as the shepherd, and is seized by the demons after Inanna gives him into their hands.',
    aboutEntityIds: ['deity-dumuzi', 'deity-inanna', 'story-descent-of-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Supports', locator: 'lines 348–358: Dumuzi at the great apple tree, identified as the shepherd, seized and given into the demons’ hands' },
      { sourceId: 'src-black-et-al-eteca', evidenceRole: 'Contextualizes', locator: 'ETCSL 1.4.1, lines 348–358' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-transmission',
    statement: 'Ninurta’s Exploits (Lugal-e) was one of the most frequently copied Sumerian literary compositions of the Old Babylonian period, with more than one hundred manuscripts known from that period alone, including school-tablet witnesses from Nippur; the composition also continued into later bilingual scribal transmission.',
    aboutEntityIds: ['text-ninurta-lugale'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-wagensonner-lugale-transmission',
        evidenceRole: 'Supports',
        locator: 'section 8.3.3, discussion of Lugal-e manuscript numbers, Nippur school tablets, and later transmission',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-sharur',
    statement: 'Lugal-e gives Ninurta’s weapon Šar-ur an active speaking role: it reports the rise and threat of the Asag, warns Ninurta about the danger of battle, carries messages, and later praises his victory.',
    aboutEntityIds: ['text-ninurta-lugale', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-lugale',
        evidenceRole: 'Supports',
        locator: 'lines 24–69, 119–150, 191–243, and 310–330: Šar-ur speaks, warns, carries counsel, and praises Ninurta',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-asag-devastation',
    statement: 'Before its defeat, the Asag is described as devastating the landscape: drying mountain waters, tearing vegetation, wounding the earth, burning reedbeds, and spreading terror among gods and people.',
    aboutEntityIds: ['text-ninurta-lugale', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-lugale',
        evidenceRole: 'Supports',
        locator: 'lines 168–190: the Asag dries mountain waters, damages vegetation and earth, burns reedbeds, and terrifies the divine assembly',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-ninmah-ninhursaga',
    statement: 'After Ninurta orders the mountain landscape, Ninmaḫ approaches him; Ninurta names the piled-up mountain Ḫursaĝ and declares that she shall henceforth be called Ninḫursaĝa, assigning abundance and resources to her mountain domain.',
    aboutEntityIds: ['text-ninurta-lugale', 'deity-ninurta', 'deity-ninhursag'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-lugale',
        evidenceRole: 'Supports',
        locator: 'lines 368–413: Ninmaḫ approaches Ninurta; he names the mountain Ḫursaĝ and declares her Ninḫursaĝa',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-stone-destinies',
    statement: 'A long section of Lugal-e depicts Ninurta fixing the destinies of stones after the battle, cursing stones that opposed him while assigning valued ritual, craft, royal, or practical functions to stones that did not resist or that supported him.',
    aboutEntityIds: ['text-ninurta-lugale', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-lugale',
        evidenceRole: 'Supports',
        locator: 'lines 414–644: extended sequence of blessings, curses, names, and functions assigned to stones',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-closing-nisaba',
    statement: 'Near the conclusion of Lugal-e, Ninurta returns in his ceremonial barge, receives praise and Enlil’s blessing, and entrusts the keeping of grain-piles and granaries to Nisaba before the composition closes in praise of Ninurta.',
    aboutEntityIds: ['text-ninurta-lugale', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-lugale',
        evidenceRole: 'Supports',
        locator: 'lines 645–726: return in the Ma-kar-nunta-ea, Enlil’s blessing, Nisaba and the grain stores, and the closing praise',
      },
    ],
    status: 'Published',
  },  {
    id: 'claim-ninurta-lugale-defeats-asag',
    statement: 'In Ninurta’s Exploits (Lugal-e), Ninurta confronts the Asag in the mountains, overcomes it in battle, and celebrates victory over the slain creature.',
    aboutEntityIds: ['deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ninurta-lugale', evidenceRole: 'Supports', locator: 'Lugal-e, lines 281–309: Ninurta confronts, defeats, and celebrates victory over the Asag' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-water-fields-harvest',
    statement: 'In Ninurta’s Exploits (Lugal-e), Ninurta gathers the waters of the mountains, leads them toward the Tigris, pours water over the fields, provides water for cultivated barley, and raises the harvest.',
    aboutEntityIds: ['deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ninurta-lugale', evidenceRole: 'Supports', locator: 'Lugal-e, lines 347–367: Ninurta gathers mountain waters, directs them toward the Tigris, waters cultivated fields, and raises the harvest' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-lugale-son-of-enlil',
    statement: 'In Ninurta’s Exploits (Lugal-e), Ninurta is repeatedly identified as the son of Enlil, and near the conclusion of the composition Enlil is explicitly described as his father and blesses him.',
    aboutEntityIds: ['deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-ninurta-lugale', evidenceRole: 'Supports', locator: 'Lugal-e, lines 681–697: Enlil is explicitly identified as Ninurta’s father and blesses him' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-return-nippur',
    statement: "In Ninurta's Return to Nibru (Angim), Ninurta returns toward Nippur at Enlil's command after his mountain victories, is met by Nuska, and enters Enlil's temple with trophies and plunder.",
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil', 'place-nippur'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1, lines 73-107: Ninurta approaches Nibru, is met by Nuska, and enters Enlil\u2019s temple with trophies',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-eshumesha',
    statement: "Angim calls Nibru Ninurta's beloved city and E\u0161ume\u0161a his beloved temple; the poem describes his procession to E\u0161ume\u0161a and his entry into the sanctuary.",
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'place-nippur'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1, lines 168-201: Nibru as beloved city and procession to E-\u0161u-me-\u0161a',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-anzud-tablet',
    statement: 'In Ninurta and the Turtle, the surviving fragment refers to the Tablet of Destinies returning to the abzu and praises Ninurta for capturing the Anzud bird with his weapon.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 1-24: Tablet of Destinies, Anzud, and Enki\u2019s praise of Ninurta',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-enki',
    statement: 'The same composition also presents a limit to Ninurta\u2019s heroic ambition: after he turns against Enki, Enki fashions a turtle that traps Ninurta in a pit.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 25-54: Ninurta\u2019s ambition, Enki\u2019s turtle, and Ninurta\u2019s entrapment',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kalhu-royal-capital',
    statement: 'Kalhu, the archaeological site now known as Nimrud, became the principal Assyrian royal capital under Ashurnasirpal II and served as the seat of kingship through much of the ninth and eighth centuries BCE.',
    aboutEntityIds: ['place-kalhu', 'civ-assyria'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-city',
        evidenceRole: 'Supports',
        locator: 'History of Kalhu: Ashurnasirpal II transferred the royal court to Kalhu; the city served as Assyrian royal capital during the ninth and eighth centuries BCE',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kalhu-northwest-palace',
    statement: 'Ashurnasirpal II constructed the Northwest Palace at Kalhu as a monumental royal complex containing administrative, military, ceremonial, residential, and royal burial spaces.',
    aboutEntityIds: ['place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-northwest-palace',
        evidenceRole: 'Supports',
        locator: 'Northwest Palace: approximately 28,000 square metres, organized around major courtyards with public, administrative, military, residential, and burial areas',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kalhu-ziggurat-temples',
    statement: 'Kalhu possessed a major sacred precinct dominated by a ziggurat associated with the temple of Ninurta, while Ashurnasirpal II claimed extensive construction and restoration of temples throughout his new capital.',
    aboutEntityIds: ['place-kalhu', 'deity-ninurta'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-ziggurat-temples',
        evidenceRole: 'Supports',
        locator: 'Ziggurat and temple precinct at Kalhu; Assurnasirpal II inscriptions record nine temples in the city',
      },
      {
        sourceId: 'src-primary-ashurnasirpal-ii-001-ninurta',
        evidenceRole: 'Contextualizes',
        locator: 'Q004455: royal foundation of Ninurta\'s temple at Kalhu, cult statue, festivals, and dais',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kalhu-later-history',
    statement: 'After Kalhu ceased to function as the principal royal capital at the end of the eighth century BCE, it continued as an Assyrian provincial and scholarly center until its destruction in 612 BCE, with occupation continuing into later periods.',
    aboutEntityIds: ['place-kalhu', 'civ-assyria'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-city',
        evidenceRole: 'Supports',
        locator: 'Kalhu after the eighth century BCE: provincial administration, scholarship, destruction in 612 BCE, and later occupation',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-kalhu-modern-excavation',
    statement: 'The ruins of ancient Kalhu have been investigated archaeologically since the nineteenth century, with excavations at Nimrud exposing palaces, temples, archives, sculpture, ivories, and other evidence for Assyrian royal and urban life.',
    aboutEntityIds: ['place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-modern-site',
        evidenceRole: 'Supports',
        locator: 'Modern Nimrud: archaeological investigation beginning in the nineteenth century and continuing through successive excavation campaigns',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-kalhu-warrior-titles',
    statement: 'Ashurnasirpal II 001 addresses Ninurta as a supreme warrior and king of battle whose attack is unequalled and explicitly calls him the god who dwells in Kalhu.',
    aboutEntityIds: ['text-ashurnasirpal-ii-001-ninurta', 'deity-ninurta', 'place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ashurnasirpal-ii-001-ninurta',
        evidenceRole: 'Supports',
        locator: 'Q004455, column i lines 1-8: warrior epithets, king of battle, and Ninurta dwelling in Kalhu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-kalhu-temple-statue',
    statement: 'Ashurnasirpal II 001 records founding Ninurta\u2019s temple at Kalhu, making a new cult statue of the god, appointing festivals for him, and installing his dais in the temple.',
    aboutEntityIds: ['text-ashurnasirpal-ii-001-ninurta', 'deity-ninurta', 'place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ashurnasirpal-ii-001-ninurta',
        evidenceRole: 'Supports',
        locator: 'Q004455, column ii lines 131b-135: temple foundation, cult statue, festivals, and dais for Ninurta at Kalhu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-kalhu-nudimmud-genealogy',
    statement: 'Ashurnasirpal II 001 calls Ninurta an eldest son who commands battle and describes him as offspring of Nudimmud.',
    aboutEntityIds: ['text-ashurnasirpal-ii-001-ninurta', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ashurnasirpal-ii-001-ninurta',
        evidenceRole: 'Supports',
        locator: 'Q004455, column i lines 1-3: Ninurta is called an eldest son and offspring of Nudimmud',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-utu-sun-god-name-shift',
    statement: 'Utu is the Sumerian name for the sun god, and Shamash is the corresponding Akkadian name for the same deity.',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Utu/Shamash entry' }],
    status: 'Published',
  },
  {
    id: 'claim-utu-justice-truth',
    statement: 'Utu/Shamash was closely associated with justice, truth, and the exposure of wrongdoing, and he was invoked in legal and royal contexts as a guarantor of fair judgment.',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Utu/Shamash entry: solar and judicial associations' },
      { sourceId: 'src-foster-before-muses', evidenceRole: 'Contextualizes', locator: 'Akkadian legal and royal-text contexts' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-utu-family-sumerian',
    statement: 'In Sumerian tradition, Utu is the son of Nanna/Suen and the twin brother of Inanna.',
    aboutEntityIds: ['deity-utu', 'deity-nanna', 'deity-inanna'],
    claimType: 'Genealogical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-utu', evidenceRole: 'Supports', locator: 'Family / parentage and siblings' },
      { sourceId: 'src-black-green-gods-demons', evidenceRole: 'Contextualizes', locator: 'Utu/Shamash entry' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-utu-family-akkadian',
    statement: 'In some Akkadian traditions, Šamaš can have different parentage, including Anu or Enlil, rather than one fixed genealogy across all traditions.',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Genealogical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-utu', evidenceRole: 'Supports', locator: 'Parentage / divine family discussion' }],
    status: 'Published',
  },
  {
    id: 'claim-utu-wife-aya',
    statement: 'Aya is the wife of Šamaš.',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Genealogical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-utu', evidenceRole: 'Supports', locator: 'Spouse / divine family' }],
    status: 'Published',
  },
  {
    id: 'claim-utu-cult-centers',
    statement: 'Sippar and Larsa were important cult centers for Šamaš, each with a temple dedicated to him called Ebabbar, the “White House.”',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-utu', evidenceRole: 'Supports', locator: 'Cult centers; Ebabbar at Sippar and Larsa' }],
    status: 'Published',
  },
  {
    id: 'claim-utu-textual-tradition',
    statement: 'The broader ancient textual tradition preserves Utu/Shamash in Sumerian hymns and prayers, Akkadian hymns and prayers, and later divination contexts addressed to Šamaš.',
    aboutEntityIds: ['deity-utu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-utu', evidenceRole: 'Supports', locator: 'Textual tradition / hymns and prayers' }],
    status: 'Published',
  },
  {
    id: 'claim-utu-gilgamesh-cedar-forest',
    statement: 'In the Cedar Forest episode of the Epic of Gilgamesh, Gilgamesh appeals to Shamash for help, Shamash supports him, and Shamash sends the winds against Humbaba.',
    aboutEntityIds: ['deity-utu', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-v', evidenceRole: 'Supports', locator: 'Tablet V, Cedar Forest episode' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet V / Cedar Forest episode discussion' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-utu-gilgamesh-appoint-time',
    statement: 'In the Tablet XI flood account, Shamash establishes the appointed time and tells Utnapishtim when to enter the boat.',
    aboutEntityIds: ['deity-utu', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI discussion' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sumer-language-isolate',
    statement: 'Sumerian is a language isolate: no genetic relationship to another known language family has been demonstrated.',
    aboutEntityIds: ['civ-sumer'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-crawford-sumer-cities', evidenceRole: 'Supports', locator: 'Discussion of the Sumerian language and its lack of demonstrated linguistic relatives' }],
    status: 'Published',
  },
  {
    id: 'claim-sumer-writing-origin',
    statement: 'Proto-cuneiform, one of the earliest known writing systems, developed in southern Mesopotamia in the context of administrative record-keeping and only later came to be used for literary and religious compositions.',
    aboutEntityIds: ['civ-sumer'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on the invention of writing' }],
    status: 'Published',
  },
  {
    id: 'claim-sumer-citystates-political',
    statement: 'Sumer in its earlier periods was not a single unified state but a collection of independent, often rival city-states, each with its own patron deity, ruler, and territory, only occasionally brought under wider hegemony.',
    aboutEntityIds: ['civ-sumer'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-crawford-sumer-cities', evidenceRole: 'Supports', locator: 'Overview of Early Dynastic period' }],
    status: 'Published',
  },
  {
    id: 'claim-akkad-sargon-empire',
    statement: 'The Akkadian Empire is conventionally understood to have been founded by Sargon of Akkad, who brought Sumerian city-states under a centralized administration for the first time in the region\u2019s history.',
    aboutEntityIds: ['civ-akkad'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on the Akkadian period' }],
    status: 'Published',
  },
  {
    id: 'claim-akkad-literary-adoption',
    statement: 'Akkadian scribes did not simply discard Sumerian literary tradition; they translated, adapted, and continued copying many Sumerian compositions for centuries, producing an ongoing bilingual literary culture rather than a clean break between traditions.',
    aboutEntityIds: ['civ-akkad', 'civ-sumer'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-foster-before-muses', evidenceRole: 'Supports', locator: 'Introduction, on Sumero-Akkadian bilingual tradition' }],
    status: 'Published',
  },
  {
    id: 'claim-babylon-hammurabi-code',
    statement: 'Babylon rose to political prominence under Hammurabi, whose surviving law collection is among the best-known legal texts from the ancient Near East, though scholars debate how directly it reflects day-to-day judicial practice versus royal ideology.',
    aboutEntityIds: ['civ-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyDebate',
    evidenceLinks: [
      { sourceId: 'src-van-de-mieroop-history', evidenceRole: 'Supports', locator: 'Chapter on Old Babylonian period' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-babylon-marduk-elevation',
    statement: "Marduk's rise to head of the Babylonian pantheon, dramatized in the Enuma Elish, is generally understood by scholars as reflecting Babylon's own political rise rather than a straightforward continuation of earlier Sumerian theology.",
    aboutEntityIds: ['civ-babylon', 'deity-marduk'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-marduk', evidenceRole: 'Supports', locator: 'Historical development: growth of Marduk from a relatively obscure third-millennium deity to head of the Babylonian pantheon as Babylon rose in importance' }],
    status: 'Published',
  },
  {
    id: 'claim-marduk-enuma-elish-kingship',
    statement: 'In Enūma eliš Tablet IV, after Marduk demonstrates the power of his command, the gods hail him as king and give him a sceptre, throne, and symbol of kingship.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet IV, lines 21–30' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-enuma-elish-winds',
    statement: 'In Enūma eliš Tablet IV, Marduk musters the four winds and additional destructive winds, including the storm wind and whirlwind, as weapons in his confrontation with Tiamat.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet IV, lines 39–50' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-enuma-elish-defeats-tiamat',
    statement: 'In Enūma eliš Tablet IV, Marduk traps Tiamat with his net and winds, shoots her with an arrow, defeats her, and extinguishes her life.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet IV, lines 93–104' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tiamat-enuma-elish-primordial-waters',
    statement: 'At the opening of Enūma eliš Tablet I, Tiamat appears with primordial Apsu before the later gods have come into being; Tiamat is described as she who bore them all, and their waters are said to mingle together.',
    aboutEntityIds: ['deity-tiamat'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet I, lines 1–9' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-seven-tablet-structure',
    statement: "Enūma eliš is transmitted in its standard form as a seven-tablet Babylonian Akkadian composition. The tablet sequence carries the work from primordial divine generations and conflict through Marduk's elevation, Tiamat's defeat, cosmic ordering, the creation of humanity and Babylon, and the final proclamation of Marduk's names.",
    aboutEntityIds: ['text-enuma-elish', 'story-enuma-elish'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablets I–VII: standard seven-tablet sequence of the Babylonian Creation Epic',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-marduk-birth',
    statement: "In Enūma eliš Tablet I, after Ea establishes his dwelling on Apsu, Marduk is conceived and born there to Ea and Damkina. The poem magnifies his extraordinary divine form and power from birth and connects him early with the winds.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet I, lines 79–108: Marduk is conceived and born in Apsu to Ea and Damkina, is magnified in form and power, and receives the winds',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-champion-kingship-condition',
    statement: "When Marduk agrees to act as the gods' avenger against Tiamat, he makes his championship conditional on the divine assembly proclaiming an exalted destiny for him and granting his command an authority that cannot be changed or annulled.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'deity-tiamat', 'topic-divine-council'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet II, lines 153–162: Marduk accepts the role of avenger on condition that the assembly exalt his destiny and make his command unalterable',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-command-test',
    statement: "Before sending Marduk against Tiamat, the assembled gods test the efficacy of his command by placing a constellation before him. At his word it disappears and, at a second command, reappears; the gods then acclaim Marduk as king and give him royal and martial insignia.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'topic-divine-council'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet IV, lines 19–34: the constellation disappears and reappears at Marduk’s command, after which the gods confirm his kingship and arm him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-celestial-order',
    statement: "After Tiamat's defeat, Enūma eliš Tablet V describes Marduk organizing the heavens: he establishes stations for the gods, constellations and stars, the divisions of the year, and the lunar cycle, extending cosmic creation into calendrical and celestial order.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet V, lines 1–22: Marduk establishes divine stations, constellations, the year, and the moon’s cycle',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-babylon-esagila',
    statement: "Within the epic itself, Marduk names Babylon as the place of the gods' assembly and festival, and Tablet VI presents the Anunnaki making bricks, building Babylon, and raising Esagila as the great shrine associated with Marduk's kingship and the gathered gods.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'place-babylon'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet V, lines 119–140 and Tablet VI, lines 49–77: Marduk names Babylon; the gods build Babylon and raise Esagila',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-fifty-names',
    statement: "The closing movement of Enūma eliš begins the proclamation of Marduk's names at the end of Tablet VI and continues through Tablet VII. The sequence repeatedly assigns Marduk divine powers, titles, and functions and concludes by stating that the great gods proclaimed his fifty names and made his position preeminent.",
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet VI, lines 121–166 and Tablet VII, lines 1–144: the proclamation and interpretation of Marduk’s names, concluding with the fifty-name formula',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-apsu-ea-conflict',
    statement: 'In Enūma eliš Tablet I, Apsu resolves to destroy the younger gods because their noise prevents him from resting; Ea learns of the plan, puts Apsu into a deep sleep with an incantation, and kills him.',
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet I, lines 35–70: Apsu plans to destroy the younger gods; Ea discovers the plot, puts Apsu to sleep, and kills him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tiamat-opposes-apsu-destruction',
    statement: 'In En\u016bma eli\u0161 Tablet I, Tiamat objects when Apsu proposes destroying the younger gods, asking why they should destroy what they created and urging that their disruptive behavior be endured.',
    aboutEntityIds: ['deity-tiamat', 'text-enuma-elish', 'story-enuma-elish'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'En\u016bma eli\u0161, Tablet I: Tiamat asks why they should destroy what they created and urges endurance of the younger gods',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tiamat-body-cosmic-order',
    statement: 'After Marduk defeats Tiamat in En\u016bma eli\u0161, the poem describes him dividing and arranging her body as part of cosmic ordering, including forming the sky and associating parts of her body with major geographical features.',
    aboutEntityIds: ['deity-tiamat', 'deity-marduk', 'text-enuma-elish', 'story-enuma-elish'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'En\u016bma eli\u0161, Tablets IV-V: Marduk divides Tiamat\'s body; later lines associate her body with the ordered cosmos and major geographical features',
      },
    ],
    status: 'Published',
  },  {
    id: 'claim-enuma-elish-tiamat-kingu-war-preparation',
    statement: 'In Enūma eliš Tablet I, Tiamat prepares for war against the younger gods by creating a host of monstrous beings, elevating Kingu as leader of her forces, and giving him the Tablet of Destinies.',
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-tiamat'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet I, lines 127–162: Tiamat prepares for war, creates her monstrous host, elevates Kingu, and gives him the Tablet of Destinies',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tiamat-enuma-elish-defeated-by-marduk',
    statement: 'In Enūma eliš Tablet IV, Tiamat is trapped by Marduk’s net and winds, struck by his arrow, defeated, and killed.',
    aboutEntityIds: ['deity-tiamat', 'deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet IV, lines 93–104' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-enuma-elish-creation',
    statement: 'In Enūma eliš Tablet IV, after defeating Tiamat, Marduk divides her body and uses one half to form the sky.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Supports', locator: 'Enūma eliš, Tablet IV, lines 135–140' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-creation-of-humanity',
    statement: 'In Enūma eliš Tablet VI, Marduk proposes creating humanity so that the labor of the gods can be imposed on humans and the gods may rest. Kingu is identified as responsible for the rebellion, is put to death, and Ea creates mankind from Kingu’s blood in accordance with Marduk’s plan.',
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'deity-enki', 'topic-creation'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet VI, lines 1–38: Marduk proposes creating humanity; Kingu is condemned; Ea creates mankind from Kingu’s blood and assigns humans the service of the gods',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-enuma-elish-kingu-blood-humanity',
    statement: 'In Enūma eliš Tablet VI, Kingu is identified as the one responsible for inciting the conflict, is bound and punished, and humanity is created from his blood so that human beings can assume the service of the gods.',
    aboutEntityIds: ['story-enuma-elish', 'text-enuma-elish', 'deity-marduk', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-enuma-elish',
        evidenceRole: 'Supports',
        locator: 'Enūma eliš, Tablet VI, lines 29–35: Kingu is identified and punished; mankind is created from his blood and assigned the service of the gods',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-assyria-ashurbanipal-library',
    statement: "The library assembled at Nineveh under King Ashurbanipal preserved a large number of Mesopotamian literary and scholarly texts, including the best-preserved version of the Epic of Gilgamesh, making Assyrian scribal activity central to what survives of earlier Sumerian and Babylonian literature.",
    aboutEntityIds: ['civ-assyria', 'text-gilgamesh', 'place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Supports', locator: 'Introduction, on the Nineveh library' }],
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-assembly-role',
    statement: 'Across Mesopotamian sources, Anunna/Anunnaki is a flexible collective term rather than a single fixed roster: Sumerian texts can use it for leading gods or a local pantheon, while later Akkadian usage can distinguish Anunnaki from Igigi or associate Anunnaki more strongly with the netherworld.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      { sourceId: 'src-oracc-amgg-anunna', evidenceRole: 'Supports', locator: 'Functions and changing usage by period' },
      { sourceId: 'src-primary-enki-world-order', evidenceRole: 'Contextualizes', locator: 'lines 79–85 and 391–394' },
      { sourceId: 'src-primary-inanna-descent', evidenceRole: 'Contextualizes', locator: 'line 167' },
      { sourceId: 'src-primary-enuma-elish', evidenceRole: 'Contextualizes', locator: 'Tablet VI, lines 39–44' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-etymology-debated',
    statement: 'The etymology of Anunna/Anunnaki remains debated. ORACC/AMGG summarizes leading proposals as yielding a sense like “those of princely seed”; popular glosses such as “offspring of An” should therefore be treated as proposals rather than a settled literal translation.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyDebate',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-anunna', evidenceRole: 'Supports', locator: 'Name and spellings; discussion of Falkenstein 1965 and Edzard 1965' }],
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-no-genetic-engineering-in-sources',
    statement: 'No published Sumerian, Akkadian, Babylonian, or Assyrian text identified in the standard Assyriological corpora and reference works reviewed for this atlas describes the Anunnaki as extraterrestrial beings, spacecraft, or genetic engineers of humanity.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Historical',
    evidenceClassification: 'Unattested',
    evidenceLinks: [],
    researchNote: 'Absence claim scoped to published sources reviewed for this atlas: ETCSL for Sumerian literary material, ORACC/AMGG and linked ORACC corpora for broader Mesopotamian attestations, and standard Assyriological reference works. No extraterrestrial, spacecraft, or genetic-engineering description was identified. This does not claim that every unpublished or unedited tablet has been exhaustively checked. The modern Sitchin claim is documented separately as an OriginOfClaim record.',
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-earliest-attestations',
    statement: 'The term Anunna is securely attested by the Post-Akkadian period in Gudea inscriptions and in a small number of Ur III texts; Akkadian forms Anunnaku/Anunnaki continue in later first-millennium corpora.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-anunna', evidenceRole: 'Supports', locator: 'Time Periods Attested; Anunna in Online Corpora' }],
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-uriii-offerings',
    statement: 'A small set of Ur III administrative attestations appears to record offerings to Anunna, so the evidence is not limited to literary/mythological compositions, although the cultic evidence remains sparse.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-anunna', evidenceRole: 'Supports', locator: 'Functions: three Ur III administrative attestations interpreted as offerings to Anunna' }],
    status: 'Published',
  },
  {
    id: 'claim-anunnaki-no-sanctuary-iconography',
    statement: 'No sanctuary dedicated specifically to the Anunna/Anunnaki and no securely identifiable group iconography are currently known; individual deities associated with the group had their own temples and iconography.',
    aboutEntityIds: ['group-anunnaki'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-oracc-amgg-anunna', evidenceRole: 'Supports', locator: 'Cult Places; Iconography' }],
    status: 'Published',
  },
  {
    id: 'claim-flood-gilgamesh-atrahasis-close-parallel',
    statement: "The reed-wall warning scene, in which the warning deity speaks to a wall rather than directly to the flood survivor (in order to avoid technically violating a divine oath of secrecy), appears in near-identical form in both Atrahasis and the Gilgamesh flood episode, one of the closest verbal parallels between the two compositions.",
    aboutEntityIds: ['text-atrahasis', 'text-gilgamesh'],
    claimType: 'Comparative',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-atrahasis', evidenceRole: 'Supports', locator: 'Tablet III, opening flood-warning passage' },
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, lines 20–31' },
      { sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Contextualizes', locator: 'critical edition/translation, Tablet III' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'critical edition, Tablet XI' },
    ],
    status: 'Published',
  },
  { id: 'claim-gilgamesh-tablet-vi-ishtar-anu', statement: 'In Tablet VI of the Standard Babylonian Epic of Gilgamesh, Ishtar proposes marriage to Gilgamesh; after he rejects her, she appeals to Anu for the Bull of Heaven, which Anu ultimately gives her to send against Gilgamesh.', aboutEntityIds: ['text-gilgamesh', 'deity-inanna', 'deity-an'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-gilgamesh-vi', evidenceRole: 'Supports', locator: 'Tablet VI: Ishtar’s marriage proposal, Gilgamesh’s rejection, appeal to Anu, and release of the Bull of Heaven' }, { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet VI, critical edition and translation' }], status: 'Published' },
  {
    id: 'claim-gilgamesh-standard-babylonian-textual-history',
    statement: "The Standard Babylonian Epic of Gilgamesh is a late-second-millennium BCE Akkadian recension that incorporates and reshapes older Gilgamesh traditions rather than representing the earliest form of the material. Its tablet series preserves a main narrative through Tablet XI, while Tablet XII is a supplementary text related to the older Sumerian Gilgamesh-and-the-Netherworld tradition rather than a straightforward continuation of the Tablet XI ending.",
    aboutEntityIds: ['text-gilgamesh'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-george-gilgamesh-edition',
        evidenceRole: 'Supports',
        locator: 'Introduction and discussion of the Standard Babylonian recension, earlier Gilgamesh traditions, and the status of Tablet XII',
      },
      {
        sourceId: 'src-primary-gilgamesh-enkidu-netherworld',
        evidenceRole: 'Contextualizes',
        locator: 'Sumerian Gilgamesh, Enkidu and the Netherworld tradition related to the material represented in Tablet XII',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-quest-frame',
    statement: "In Tablet XI, Gilgamesh asks Utnapishtim how he obtained life like a god. Utnapishtim answers by recounting the flood, making the deluge story part of Gilgamesh's larger search for immortality rather than an independent narrative in this recension.",
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, opening exchange between Gilgamesh and Utnapishtim before the flood account' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI, critical edition and translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-boat-design',
    statement: "Tablet XI gives Utnapishtim detailed instructions for a large vessel whose length and width are to be equal. The construction account describes multiple internal levels or decks, subdivisions within the vessel, and extensive sealing with bitumen or pitch before the flood.",
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, boat-design and construction passage after the reed-wall warning' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI, vessel specifications' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-passengers-cargo',
    statement: "Before the flood begins, Utnapishtim loads the vessel with his household and kin, craftsmen, possessions, and the living creatures or seed of living things that the narrative says are to survive with him.",
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, loading passage after construction and before the storm' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI, critical edition and translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-divine-fear',
    statement: "Tablet XI presents the flood as terrifying even to the gods: as the storm overwhelms the land, the gods recoil from the deluge, retreat upward, and lament the destruction while the storm continues for six days and seven nights.",
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, flood-storm passage before the calm on the seventh day' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI, critical edition and translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-sacrifice-gods',
    statement: "After leaving the vessel, Utnapishtim offers a sacrifice and libation on the mountain. The narrative describes the gods being drawn to the offering, making the sacrifice the immediate setting for the divine confrontation that follows when Enlil discovers a human survivor.",
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      { sourceId: 'src-primary-gilgamesh-xi', evidenceRole: 'Supports', locator: 'Tablet XI, post-flood sacrifice passage immediately before Enlil arrives' },
      { sourceId: 'src-george-gilgamesh-edition', evidenceRole: 'Contextualizes', locator: 'Tablet XI, critical edition and translation' },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-reed-wall-warning',
    statement: 'In Tablet XI of the Epic of Gilgamesh, Ea addresses a reed wall so that Utnapishtim receives the warning of the coming flood and is instructed to build a vessel.',
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-gilgamesh-xi',
        evidenceRole: 'Supports',
        locator: 'Tablet XI, lines 20–31: Ea’s reed-wall warning to Utnapishtim and instruction to build a vessel',
      },
      {
        sourceId: 'src-george-gilgamesh-edition',
        evidenceRole: 'Contextualizes',
        locator: 'critical edition and translation of Tablet XI',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-storm-landing-birds',
    statement: 'In Tablet XI of the Epic of Gilgamesh, the flood storm lasts six days and seven nights, Utnapishtim’s boat comes to rest on Mount Nimuš, and he releases a dove, a swallow, and a raven in sequence to determine whether the waters have receded.',
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-gilgamesh-xi',
        evidenceRole: 'Supports',
        locator: 'Tablet XI, lines 127–155: six-day and seven-night storm, landing on Mount Nimuš, and release of the dove, swallow, and raven',
      },
      {
        sourceId: 'src-george-gilgamesh-edition',
        evidenceRole: 'Contextualizes',
        locator: 'critical edition and translation of Tablet XI',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-sacrifice-immortality',
    statement: 'In Tablet XI of the Epic of Gilgamesh, Utnapishtim offers sacrifice after the flood; Enlil reacts angrily on discovering that a human survived, Ea rebukes Enlil’s handling of the flood, and Enlil ultimately grants Utnapishtim and his wife an immortal status like that of the gods.',
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-gilgamesh-xi',
        evidenceRole: 'Supports',
        locator: 'Tablet XI, lines 157–206: post-flood sacrifice, Enlil’s anger, Ea’s rebuke, and Utnapishtim and his wife granted immortal status',
      },
      {
        sourceId: 'src-george-gilgamesh-edition',
        evidenceRole: 'Contextualizes',
        locator: 'critical edition and translation of Tablet XI',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-gilgamesh-flood-draws-on-atrahasis',
    statement: 'Assyriologists widely hold that the flood episode in Tablet XI of the Standard Babylonian Epic of Gilgamesh draws on the earlier Atrahasis tradition, based especially on close textual parallels such as the reed-wall warning scene.',
    aboutEntityIds: ['story-gilgamesh-flood', 'text-gilgamesh', 'text-atrahasis'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-george-gilgamesh-edition',
        evidenceRole: 'Supports',
        locator: 'Introduction, discussion of sources and the relationship of Tablet XI to Atrahasis',
      },
      {
        sourceId: 'src-lambert-millard-atrahasis',
        evidenceRole: 'Supports',
        locator: 'Introduction, discussion of the relationship between Atrahasis and the Gilgamesh flood tradition',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-flood-tradition-relationship',
    statement: 'The surviving Eridu Genesis belongs to the wider Mesopotamian flood-tradition complex alongside Atrahasis and the flood episode in Gilgamesh Tablet XI, but its fragmentary Sumerian witness does not by itself establish a simple direct line of textual dependence to the later Akkadian compositions.',
    aboutEntityIds: ['text-eridu-genesis', 'text-atrahasis', 'text-gilgamesh'],
    claimType: 'Comparative',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      {
        sourceId: 'src-jacobsen-eridu-genesis',
        evidenceRole: 'Supports',
        locator: 'discussion of the Eridu Genesis and its place within Mesopotamian flood tradition',
      },
      {
        sourceId: 'src-primary-eridu-genesis',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 1.7.4, surviving flood narrative',
      },
    ],
    status: 'Published',
  },  {
    id: 'claim-eridu-genesis-fragmentary',
    statement: 'The principal surviving manuscript of the Eridu Genesis is the Old Babylonian Sumerian tablet CBS 10673 joined to CBS 10867 from Nippur, dated by the Penn Museum to about 1650 BCE. Only the lower third of the original six-column tablet survives, leaving substantial gaps in the composition.',
    aboutEntityIds: ['text-eridu-genesis'],
    claimType: 'Descriptive',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [{ sourceId: 'src-penn-cbs10673', evidenceRole: 'Supports', locator: 'CBS 10673 + CBS 10867; object description, provenience, date, and physical preservation' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-creation',
    statement: 'The surviving Sumerian text describes An, Enlil, Enki, and Ninhursag as having fashioned humanity and also describes the multiplication of animals.',
    aboutEntityIds: ['text-eridu-genesis', 'deity-an', 'deity-enlil', 'deity-enki', 'deity-ninhursag', 'topic-creation'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-eridu-genesis', evidenceRole: 'Supports', locator: 'Segment A' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-cities',
    statement: 'The text connects the descent of kingship from heaven with the establishment of five cities: Eridu, Bad-tibira, Larak, Sippar, and Shuruppak, each associated with a divine patron.',
    aboutEntityIds: ['text-eridu-genesis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-eridu-genesis', evidenceRole: 'Supports', locator: 'Segment B' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-warning',
    statement: 'Ziusudra is identified as a king and gudug priest. He receives a warning beside a wall that a flood has been decreed and that the divine assembly has decided the seed of humanity is to be destroyed.',
    aboutEntityIds: ['text-eridu-genesis'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-eridu-genesis', evidenceRole: 'Supports', locator: 'Segment C' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-seven-days',
    statement: 'The surviving text explicitly states that windstorms, waves, and the flood rocked Ziusudra\'s huge boat for seven days and seven nights before Utu appeared and illuminated heaven and earth.',
    aboutEntityIds: ['text-eridu-genesis', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-eridu-genesis', evidenceRole: 'Supports', locator: 'Segment D, lines 1-11' }],
    status: 'Published',
  },
  {
    id: 'claim-eridu-genesis-aftermath',
    statement: 'After the flood, Ziusudra opens the boat to the light of Utu and sacrifices oxen and sheep. Later, animals disembark, An and Enlil grant Ziusudra life like a god, and he is settled in Dilmun because he preserved animals and the seed of humanity.',
    aboutEntityIds: ['text-eridu-genesis', 'deity-utu', 'deity-an', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-eridu-genesis', evidenceRole: 'Supports', locator: 'Segments D-E' }],
    status: 'Published',
  },
  {
    id: 'claim-creation-humanity-labor-relief',
    statement: 'Several Mesopotamian creation accounts, including Atrahasis, describe humanity as created specifically to perform labor that had previously fallen to lesser gods, framing human existence as instrumentally tied to divine convenience rather than as an independent narrative goal.',
    aboutEntityIds: ['topic-creation', 'text-atrahasis'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-lambert-millard-atrahasis', evidenceRole: 'Supports', locator: 'Tablet I' }],
    status: 'Published',
  },
  {
    id: 'claim-divine-council-collective-decision',
    statement: 'Major cosmic decisions in Mesopotamian myth, including the flood and the elevation of Marduk in the Enuma Elish, are consistently narrated as decisions of a divine assembly rather than the unilateral act of a single deity, reflecting a broader Mesopotamian conception of divine governance as collective.',
    aboutEntityIds: ['topic-divine-council'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-bottero-mesopotamia', evidenceRole: 'Supports' }],
    status: 'Published',
  },
  {
    id: 'claim-underworld-no-moral-judgment',
    statement: "The Mesopotamian underworld, as depicted in surviving sources, was generally conceived as the destination of all the dead regardless of how they had lived, in contrast to later traditions that link the afterlife more explicitly to moral judgment.",
    aboutEntityIds: ['topic-underworld'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [{ sourceId: 'src-black-green-gods-demons', evidenceRole: 'Supports', locator: 'Underworld entry' }],
    status: 'Published',
  },

  // ============================================================
  // NABU — EVIDENCE EXPANSION
  // ============================================================
  {
    id: 'claim-nabu-name-etymology-nebo',
    statement: 'The name Nabu is derived from the Semitic root nbʾ, meaning "to name" or "to designate"; the biblical form of the name is Nebo.',
    aboutEntityIds: ['deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Name and Spellings: derivation from the Semitic root nbʾ and normalized forms including Nabu and biblical Nebo',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-writing-scribal-patronage',
    statement: 'Beyond the language of any single royal inscription, Nabu was widely understood as a god of writing and wisdom and as the patron of scribes, and he was commonly invoked in scribal colophons.',
    aboutEntityIds: ['deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Functions: Nabu as god of writing, patron of scribes, and a deity commonly invoked in textual colophons',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-akitu-tablet-destinies',
    statement: 'In the Babylonian New Year festival tradition summarized by modern scholarship, Nabu performs a major scribal function at the end of the akītu festival by recording the settled fate of the land on the Tablet of Destinies.',
    aboutEntityIds: ['deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Functions: Nabu’s scribal duty on the eleventh day of Nisannu at the end of the akītu festival and inscription of fate on the Tablet of Destinies',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-marduk-relationship-development',
    statement: 'Nabu’s relationship with Marduk developed historically: he was incorporated into Marduk’s cult as his minister and scribe, and from the Kassite period onward he was accepted as Marduk’s firstborn son.',
    aboutEntityIds: ['deity-nabu', 'deity-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Functions and Divine Genealogy: Nabu as Marduk’s minister and scribe and, from the Kassite period onward, his firstborn son',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-consorts-tashmetu-nanaya',
    statement: 'Mesopotamian traditions associate both Tašmetu and Nanaya with Nabu as consorts rather than preserving one universal pairing; Tašmetu is especially prominent as Nabu’s consort in first-millennium Assyria, while Nanaya occupies a parallel consort role in Babylonian tradition.',
    aboutEntityIds: ['deity-nabu', 'deity-tashmetu', 'deity-nanaya'],
    claimType: 'Comparative',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Syncretisms: Tašmetu and Nanaya as two consort traditions associated with Nabu',
      },
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Contextualizes',
        locator: 'Divine Genealogy and Cult Places: Tašmetu as Nabu’s consort in first-millennium Assyria and Nanaya in the parallel Babylonian tradition',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-symbol-stylus',
    statement: 'Nabu’s principal iconographic symbol is the writing wedge or stylus, which may appear alone or with a tablet or dais and is occasionally shown in association with the mušhuššu dragon.',
    aboutEntityIds: ['deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nabu',
        evidenceRole: 'Supports',
        locator: 'Iconography: the wedge or writing stylus as Nabu’s principal symbol, sometimes with a tablet, dais, or mušhuššu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-kalhu-scholarship',
    statement: 'The Ezida temple of Nabu at Kalhu was closely associated with learned activity: excavators recovered roughly 250 scholarly tablets from a room near Nabu’s shrine, including omens, incantations, rituals, hymns, lexical works, medical texts, literary works, and calendrical material.',
    aboutEntityIds: ['deity-nabu', 'place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-nabu-temple',
        evidenceRole: 'Supports',
        locator: 'Scholarly activity in the 7th century BC: approximately 250 scholarly tablets recovered from a room opposite Nabu’s shrine and description of their contents',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nabu-assyrian-royal-cult-development',
    statement: 'Nabu’s position at Kalhu changed over time: he was comparatively peripheral in the royal religious program of Ashurnasirpal II, but his Ezida temple gained importance during the eighth century BCE and became increasingly connected with Assyrian kingship and scholarship.',
    aboutEntityIds: ['deity-nabu', 'civ-assyria', 'place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-nimrud-nabu-temple',
        evidenceRole: 'Supports',
        locator: 'Temple history: Nabu peripheral under Ashurnasirpal II; Ezida gains importance in the eighth century and is remodelled under Sargon II around the relationship between deity, royalty, and scholarship',
      },
      {
        sourceId: 'src-oracc-nimrud-nabu',
        evidenceRole: 'Contextualizes',
        locator: 'Nabu at Kalhu: development of the god’s cult and increasing relationship with Assyrian elites and royal religion',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-antiochus-i-1-royal-titulary',
    statement: 'At the opening of Antiochus I 1, Antiochus identifies himself as great king, mighty king, king of the world, king of Babylon, king of the lands, provider for Esagil and Ezida, and foremost heir of Seleucus the Macedonian.',
    aboutEntityIds: ['text-antiochus-i-1', 'place-babylon', 'place-borsippa'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-antiochus-i-1', evidenceRole: 'Supports', locator: 'Antiochus I 1, lines 1–5: royal titulary, Babylonian kingship, temple patronage, and descent from Seleucus' }],
    status: 'Published',
  },
  {
    id: 'claim-antiochus-i-1-brick-ritual',
    statement: 'Antiochus I 1 states that when the king undertook the rebuilding of Esagil and Ezida, he personally molded their bricks in the land of Hatti with his pure hands using fine oil and brought them for laying the temple foundations.',
    aboutEntityIds: ['text-antiochus-i-1', 'place-babylon', 'place-borsippa'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-antiochus-i-1', evidenceRole: 'Supports', locator: 'Antiochus I 1, lines 6–13: preparation and transport of bricks for Esagil and Ezida' }],
    status: 'Published',
  },
  {
    id: 'claim-antiochus-i-1-antiochus-seleucus-prayer',
    statement: 'Antiochus I 1 asks Nabu to grant military success, just rule, a prosperous reign, happiness, and long life to the kingship of Antiochus and his son Seleucus forever.',
    aboutEntityIds: ['text-antiochus-i-1', 'deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-antiochus-i-1', evidenceRole: 'Supports', locator: 'Antiochus I 1, lines 23–32: prayer for Antiochus and Seleucus, including victory, just rule, prosperous reign, and longevity' }],
    status: 'Published',
  },
  {
    id: 'claim-antiochus-i-1-nabu-tablet-kingship',
    statement: 'In Antiochus I 1, Nabu is invoked as he enters Ezida, and Antiochus asks that his days, years, throne, and reign be secured on Nabu’s exalted tablet, described as preserving the boundary of heaven and earth.',
    aboutEntityIds: ['text-antiochus-i-1', 'deity-nabu', 'place-borsippa'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-antiochus-i-1', evidenceRole: 'Supports', locator: 'Antiochus I 1, lines 33–46: Nabu entering Ezida, royal longevity and throne, and the exalted tablet' }],
    status: 'Published',
  },
  {
    id: 'claim-antiochus-i-1-family-and-temples',
    statement: 'Near the end of Antiochus I 1, the king prays to conquer lands and bring their tribute for the completion of Esagil and Ezida, then asks Nabu to establish the good fortune of Antiochus, his son Seleucus, and his consort Stratonike.',
    aboutEntityIds: ['text-antiochus-i-1', 'deity-nabu', 'deity-marduk', 'place-babylon', 'place-borsippa'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-antiochus-i-1', evidenceRole: 'Supports', locator: 'Antiochus I 1, lines 47–59: tribute for Esagil and Ezida and prayer for Antiochus, Seleucus, and Stratonike' }],
    status: 'Published',
  },
  {
    id: 'claim-nabu-antiochus-ezida-continuity',
    statement: 'In Antiochus I 1, dated to 27 March 268 BCE, Antiochus records laying the foundations of Ezida, the temple of Nabu at Borsippa, and addresses Nabu as the wisest of the gods and firstborn son of Marduk.',
    aboutEntityIds: ['deity-nabu', 'deity-marduk', 'place-borsippa', 'text-antiochus-i-1'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-antiochus-i-1',
        evidenceRole: 'Supports',
        locator: 'Antiochus I 1, lines 13–22: foundations of Ezida at Borsippa laid on 27 March 268 BCE; Nabu addressed as wisest of the gods and firstborn son of Marduk',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-wisdom-attractiveness',
    statement: 'Tašmetu is primarily known as the consort of Nabu and is associated in first-millennium tradition with both wisdom and sexual attractiveness.',
    aboutEntityIds: ['deity-tashmetu', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Functions: Tašmetu as Nabu’s consort and a goddess associated with wisdom and sexual attractiveness',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-urash-genealogy',
    statement: 'Tašmetu is identified in the surviving tradition as a daughter of Uraš, the deity associated with the northern Babylonian city of Dilbat.',
    aboutEntityIds: ['deity-tashmetu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Syncretisms: Tašmetu as daughter of Uraš of Dilbat',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-kalhu-cult',
    statement: 'Tašmetu’s cult was established at Neo-Assyrian Kalhu alongside Nabu, and around 800 BCE Adad-nirari III constructed paired sacred spaces for Nabu and Tašmetu within the Ezida temple complex.',
    aboutEntityIds: ['deity-tashmetu', 'deity-nabu', 'place-kalhu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Cult Places: adoption of Tašmetu’s cult at Kalhu and paired Nabu-Tašmetu temples associated with Adad-nirari III around 800 BCE',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-marriage-ritual',
    statement: 'A seventh-century composition preserved in Ashurbanipal’s library celebrates the relationship of Nabu and Tašmetu and is interpreted as connected with a ritual in which their cult statues were brought together in a ceremonial marriage setting.',
    aboutEntityIds: ['deity-tashmetu', 'deity-nabu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Time Periods Attested: seventh-century composition from Ashurbanipal’s library and interpretation in relation to ceremonial marriage of the cult statues',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-original',
    statement: 'Ashurbanipal Library Colophon BAK 338/339 opens by stating that the tablet was written and checked according to its original.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse line 1: written and checked according to the original' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-titulary',
    statement: 'In BAK 338/339, Ashurbanipal identifies himself as King of the World and King of Assyria before describing his divinely granted learning.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse line 2: Ashurbanipal identifies himself as King of the World and King of Assyria' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-scribal-mastery',
    statement: 'Ashurbanipal claims in BAK 338/339 that he acquired clear vision and the secrets of scribal learning, including the wisdom of Nabu and cuneiform knowledge that none among his royal predecessors had mastered.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339', 'deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse lines 4–8: clear vision, scribal expertise, wisdom of Nabu, and knowledge beyond earlier kings' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-tablet-work',
    statement: 'Ashurbanipal states that he wrote the available cuneiform learning on tablets, checked the tablets, and collated them.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339', 'deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse lines 7–9: writing, checking, and collating tablets' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-royal-protection',
    statement: 'The colophon says Ashurbanipal assembled the tablets for his life, the protection of his person, freedom from illness, and the strengthening of the foundations of his royal throne.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339', 'deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse lines 9–11: life, protection, absence of illness, and stability of the royal throne' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-ezida-library',
    statement: 'Ashurbanipal states that he placed the tablets in the library of Ezida, the temple of Nabu-of-inner-Nineveh, establishing the colophon as evidence for a Nabu-temple scholarly collection at Nineveh.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339', 'deity-nabu', 'place-nineveh'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse lines 12–14: tablets placed in the library of Ezida, temple of Nabu-of-inner-Nineveh' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-colophon-prayer',
    statement: 'The closing prayer asks Nabu to favor Ashurbanipal’s kingship, take his hand, protect his steps when he enters the temple, and remember him favorably; Tašmetu is asked to plead continually before Nabu for the king’s life.',
    aboutEntityIds: ['text-ashurbanipal-colophon-338-339', 'deity-nabu', 'deity-tashmetu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-colophon-338-339', evidenceRole: 'Supports', locator: 'Q009339, obverse lines 15–25: prayer to Nabu for kingship and protection and appeal to Tašmetu to intercede for the king’s life' }],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-ashurbanipal-understanding',
    statement: 'An Ashurbanipal library colophon states directly that Nabu and Tašmetu granted the Assyrian king broad understanding and connects that divine gift with his mastery of scribal learning.',
    aboutEntityIds: ['deity-tashmetu', 'deity-nabu', 'text-ashurbanipal-colophon-338-339'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ashurbanipal-colophon-338-339',
        evidenceRole: 'Supports',
        locator: 'Q009339, obverse line 2: Ashurbanipal describes Nabu and Tašmetu as granting him broad understanding in connection with scribal expertise',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-attestation-range',
    statement: 'Tašmetu is comparatively late in the surviving record, appearing in fragmentary Old Babylonian god lists and later in Neo-Assyrian, Achaemenid, and Seleucid textual evidence.',
    aboutEntityIds: ['deity-tashmetu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Time Periods Attested: fragmentary Old Babylonian god lists and first-millennium Neo-Assyrian, Achaemenid, and Seleucid evidence',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-tashmetu-iconography-unknown',
    statement: 'No securely identified ancient representation of Tašmetu is presently known, so modern visualizations of the goddess should be treated as artistic reconstruction rather than recovered ancient iconography.',
    aboutEntityIds: ['deity-tashmetu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Supports',
        locator: 'Iconography: no known sources of imagery depicting Tašmetu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-love-ishtar-association',
    statement: 'Modern ORACC resources closely associate Nanaya with Inanna/Ištar, especially in the sphere of love and sexual attraction.',
    aboutEntityIds: ['deity-nanaya', 'deity-inanna'],
    claimType: 'Comparative',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-aebp-nanaya',
        evidenceRole: 'Supports',
        locator: 'People, gods & places: Nanaya described as a name or manifestation of Ištar in her aspect as goddess of love',
      },
      {
        sourceId: 'src-oracc-amgg-tashmetu',
        evidenceRole: 'Contextualizes',
        locator: 'Divine Genealogy and Syncretisms: Nanaya/Inanna/Ištar as the Babylonian parallel to Tašmetu, sharing associations with sexuality',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-attestation-range',
    statement: 'Nanaya is attested across a long chronological range beginning in the Ur III period and continuing through Old Babylonian, Middle Babylonian, Neo-Assyrian, Neo-Babylonian, and Hellenistic evidence.',
    aboutEntityIds: ['deity-nanaya'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-epsd2-nanaya',
        evidenceRole: 'Supports',
        locator: 'ePSD2 attestation table for Nanaya: Ur III, Old Babylonian, Middle Babylonian, Neo-Assyrian, Neo-Babylonian, and Hellenistic',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lipit-eshtar-10add-object-context',
    statement: 'ETCSRI identifies Lipit-Eštar 10add as an Early Old Babylonian Sumerian royal inscription preserved on a cone from Isin.',
    aboutEntityIds: ['text-lipit-eshtar-10add'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-lipit-eshtar-10add', evidenceRole: 'Supports', locator: 'Q004103 catalogue entry: cone; Early Old Babylonian; Isin; royal inscription' }],
    status: 'Published',
  },
  {
    id: 'claim-lipit-eshtar-10add-titulary-justice',
    statement: 'Lipit-Eštar 10add presents the king as humble shepherd of Nippur, true farmer of Ur, provider of Eridu, en-priest suitable for Uruk, king of Isin, and king of Sumer and Akkad, and states that he established justice in Sumer and Akkad.',
    aboutEntityIds: ['text-lipit-eshtar-10add'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-lipit-eshtar-10add', evidenceRole: 'Supports', locator: 'Q004103, column i through column ii: royal and cultic titulary and establishment of justice in Sumer and Akkad' }],
    status: 'Published',
  },
  {
    id: 'claim-lipit-eshtar-10add-inanna-favorite',
    statement: 'In Lipit-Eštar 10add, Lipit-Eštar explicitly calls himself the favorite of Inanna.',
    aboutEntityIds: ['text-lipit-eshtar-10add', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-lipit-eshtar-10add', evidenceRole: 'Supports', locator: 'Q004103, column ii lines 1–2: Lipit-Eštar identifies himself as the favorite of Inanna' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-lipit-eshtar-inanna',
    statement: 'Lipit-Eštar 10add calls Nanaya the beloved child of Inanna and records the construction of the E-me-urur for her at Isin.',
    aboutEntityIds: ['deity-nanaya', 'deity-inanna', 'text-lipit-eshtar-10add'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lipit-eshtar-10add',
        evidenceRole: 'Supports',
        locator: 'Q004103 columns i–ii: Nanaya called the beloved child of Inanna; Lipit-Eštar builds E-me-urur for her at Isin',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-genealogy-varies',
    statement: 'Ancient sources preserve differing genealogical descriptions of Nanaya: Lipit-Eštar 10add calls her the beloved child of Inanna, while the Nanaya Hymn of Sargon II calls her a daughter of Sin.',
    aboutEntityIds: ['deity-nanaya', 'deity-inanna', 'text-lipit-eshtar-10add', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Comparative',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lipit-eshtar-10add',
        evidenceRole: 'Supports',
        locator: 'Q004103: Nanaya described as beloved child of Inanna',
      },
      {
        sourceId: 'src-primary-saa03-004-nanaya',
        evidenceRole: 'Supports',
        locator: 'SAA 03 004 reverse ii 17: Nanaya addressed as daughter of Sin',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-object-context',
    statement: 'Esarhaddon 136 is a Neo-Assyrian Akkadian royal inscription preserved on a cylinder from Uruk and dating to the reign of Esarhaddon.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 catalogue and inscription context: Uruk cylinder of Esarhaddon' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-titulary',
    statement: 'Esarhaddon 136 identifies Esarhaddon as king of Assyria, governor of Babylon, and king of Sumer and Akkad.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 opening royal titulary' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-ehiliana-history',
    statement: 'The inscription places Esarhaddon’s work at Ehiliana within an earlier history of royal construction and states that the sanctuary had fallen into disrepair.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya', 'deity-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 account of earlier work at Ehiliana and its subsequent dilapidation' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-rebuilding',
    statement: 'Esarhaddon states that he rebuilt and restored Ehiliana using baked bricks prepared in a ritually pure kiln.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya', 'deity-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 rebuilding account for Ehiliana and its baked bricks' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-nanaya-reinstallation',
    statement: 'After restoring Ehiliana, Esarhaddon states that he brought Nanaya inside and established her there to dwell permanently.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya', 'deity-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 account of Nanaya entering and dwelling in restored Ehiliana' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-prayer-nabu',
    statement: 'Esarhaddon asks Nanaya to speak favorably for him before Nabu and to make his deeds pleasing to the god.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya', 'deity-nanaya', 'deity-nabu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 concluding prayer of Esarhaddon to Nanaya concerning Nabu' }],
    status: 'Published',
  },
  {
    id: 'claim-esarhaddon-136-inscription-curse',
    statement: 'The inscription closes by warning future rulers not to erase Esarhaddon’s name or alter the inscription and invokes punishment against anyone who does so.',
    aboutEntityIds: ['text-esarhaddon-136-nanaya'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-esarhaddon-136-nanaya', evidenceRole: 'Supports', locator: 'Q003365 closing preservation warning and curse' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-uruk-ehiliana',
    statement: 'Esarhaddon 136 calls Nanaya queen of Uruk and records restoration of Ehiliana, her cella within the Eanna temple complex.',
    aboutEntityIds: ['deity-nanaya', 'place-uruk', 'text-esarhaddon-136-nanaya'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-esarhaddon-136-nanaya',
        evidenceRole: 'Supports',
        locator: 'Q003365 lines 1–11: Nanaya as queen of Uruk; restoration of Ehiliana within Eanna',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-muati',
    statement: 'The Nanaya Hymn of Sargon II identifies Nanaya as the spouse of Muati and as one honored among the goddesses.',
    aboutEntityIds: ['deity-nanaya', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-saa03-004-nanaya', evidenceRole: 'Supports', locator: 'SAA 03 004 obverse ii 2–4: Nanaya as spouse of Muati and honored among the goddesses' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-praise',
    statement: 'The hymn repeatedly praises Nanaya as queen, beautiful, exalted, resonant, and powerful.',
    aboutEntityIds: ['deity-nanaya', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-saa03-004-nanaya', evidenceRole: 'Supports', locator: 'SAA 03 004 reverse i 3–6 and reverse ii 13–16: praise of queen Nanaya as beautiful, exalted, and powerful' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-sin-daughter',
    statement: 'The Nanaya Hymn of Sargon II directly addresses Nanaya as the daughter of Sin.',
    aboutEntityIds: ['deity-nanaya', 'deity-nanna', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-saa03-004-nanaya', evidenceRole: 'Supports', locator: 'SAA 03 004 reverse ii 17: Nanaya addressed as daughter of Sin' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-sargon-blessing',
    statement: 'The hymn asks Nanaya to bless Sargon with long life, firm foundations for his throne, a prolonged reign, and bodily protection from affliction and weakness.',
    aboutEntityIds: ['deity-nanaya', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-saa03-004-nanaya', evidenceRole: 'Supports', locator: 'SAA 03 004 reverse ii 18–23: blessing of Sargon, long life, secure throne, prolonged reign, and bodily protection' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-locust-protection',
    statement: 'The hymn asks that destructive locusts and grasshoppers that threaten grain, orchards, and regular divine offerings be rendered powerless by Nanaya’s command.',
    aboutEntityIds: ['deity-nanaya', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-saa03-004-nanaya', evidenceRole: 'Supports', locator: 'SAA 03 004 reverse ii 24–28: locusts, grain, orchards, regular offerings, and Nanaya’s protective command' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-sargon-hymn-warrior',
    statement: 'The Nanaya Hymn of Sargon II praises Nanaya with exalted and beautiful language while also giving her forceful martial imagery, including battle and warrior characteristics.',
    aboutEntityIds: ['deity-nanaya', 'text-nanaya-hymn-sargon-ii'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-saa03-004-nanaya',
        evidenceRole: 'Supports',
        locator: 'SAA 03 004 obverse i and reverse i–ii: battle imagery, warrioress language, praise of queen Nanaya as beautiful and powerful',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-divine-marriage-ritual',
    statement: 'A late Babylonian Uruk ritual text places the rites of divine marriage in Ehiliana, the temple of Nanaya.',
    aboutEntityIds: ['deity-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-uruk-new-year-nanaya',
        evidenceRole: 'Supports',
        locator: 'TCL 6, 39 obverse lines 4–5: divine-marriage ordinances carried out in Ehiliana, temple of Nanaya',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-object-context',
    statement: 'Ashurbanipal 154 is a Neo-Assyrian royal inscription from Kuyunjik at Nineveh, written during the reign of Ashurbanipal.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'place-nineveh'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 catalogue: Ashurbanipal 154; Neo-Assyrian; ca. 668–631 BCE; Kuyunjik (Nineveh)' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-elam-campaign',
    statement: 'Ashurbanipal 154 places the return of Nanaya within the king’s campaign against Elam, including conquest, seizure of property and divine images, and devastation of Elamite territory.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 obverse lines 1–3: Elamite campaign, seizure, and devastation' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-divine-command',
    statement: 'The inscription claims that Nanaya had lived in Elam for 1,535 years and that she nominated Ashurbanipal for kingship and entrusted him with returning her to Eanna.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'deity-nanaya'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 obverse lines 4–8: Nanaya’s 1,535-year absence, divine nomination of Ashurbanipal, and command to return her' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-reinstallation',
    statement: 'Ashurbanipal states that he grasped Nanaya’s hand, brought her into Uruk and Eanna, and established her on her eternal dais in Ehiliana.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'deity-nanaya', 'place-uruk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 obverse lines 8–10: procession to Eanna, entry into Uruk, and installation in Ehiliana' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-nusku',
    statement: 'The inscription also states that Ashurbanipal refurbished an emblem of Nusku and re-established the god in his temple.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 obverse line 11 through reverse line 1: restoration and reinstallation associated with Nusku' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-divine-prayer',
    statement: 'The prayer in Ashurbanipal 154 invokes Sîn, Ningal, Šamaš, Aya, and Nusku to look favorably upon the king.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'deity-nanna', 'deity-ningal', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 reverse lines 2–6: Sîn, Ningal, Šamaš, Aya, and Nusku in the royal prayer' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-royal-blessings',
    statement: 'Ashurbanipal asks for a firm royal throne, a prolonged reign, favorable omens, long life, abundance and plenty, and victory over his enemies.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'deity-nanna', 'deity-ningal', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 reverse lines 7–11: throne, reign, favorable omens, abundance, and victory' }],
    status: 'Published',
  },
  {
    id: 'claim-ashurbanipal-nanaya-return-future-ruler',
    statement: 'The inscription instructs a future royal descendant chosen for rule by the invoked gods to restore Ashurbanipal’s work when it becomes old and dilapidated.',
    aboutEntityIds: ['text-ashurbanipal-nanaya-return', 'deity-nanna', 'deity-ningal', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-nanaya-return', evidenceRole: 'Supports', locator: 'Q007562 reverse lines 11–13: future ruler and restoration of dilapidated royal work' }],
    status: 'Published',
  },
  {
    id: 'claim-nanaya-ashurbanipal-return',
    statement: 'Ashurbanipal claims in a royal inscription that he returned Nanaya from Elam to Uruk and restored her to Eanna and Ehiliana.',
    aboutEntityIds: ['deity-nanaya', 'place-uruk', 'text-ashurbanipal-nanaya-return'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ashurbanipal-nanaya-return',
        evidenceRole: 'Supports',
        locator: 'Q007562 lines 4–9: royal account of bringing Nanaya from Elam back to Uruk, Eanna, and Ehiliana',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-dream-direct',
    statement: 'Dumuzid’s Dream presents Dumuzi as a shepherd who receives an ominous dream, asks Geštinanna to interpret it, and learns that its signs foretell his capture and death.',
    aboutEntityIds: ['deity-dumuzi', 'text-dumuzi-dream'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 15–55: Dumuzi dreams, summons Geštinanna, and receives an interpretation foretelling capture and the destruction of his sheepfold',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-geshtinanna-direct',
    statement: 'In Dumuzid and Geštinanna, Dumuzi escapes toward his sister Geštinanna, who laments for him and refuses to reveal him to the pursuing demons before he is eventually captured at the sheepfold.',
    aboutEntityIds: ['deity-dumuzi', 'text-dumuzi-geshtinanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 33–73: Dumuzi escapes to Geštinanna, she laments and protects him, and the demons later capture him at the holy sheepfold',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-inanna-marriage',
    statement: 'Dumuzid and Geštinanna explicitly presents Inanna as the woman Dumuzi had married when Dumuzi appeals to Utu for help.',
    aboutEntityIds: ['deity-dumuzi', 'deity-inanna', 'deity-utu', 'text-dumuzi-geshtinanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 22–32: Dumuzi appeals to Utu and refers to Utu’s sister Inanna as the woman he married',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-bilulu-badtibira-lament',
    statement: 'Inana and Bilulu preserves a lament tradition for Dumuzi that explicitly names Bad-tibira and the shepherding place among locations in which lament is raised for him.',
    aboutEntityIds: ['deity-dumuzi', 'deity-inanna', 'text-inanna-bilulu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 1–5 and 155–175: lament for Dumuzi associated with Bad-tibira and the shepherding place',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-c1-pastoral-gifts',
    statement: 'A Song of Inana and Dumuzid (C1) portrays Dumuzi through pastoral produce: the shepherd carries butter and Dumuzi carries milk in the gift sequence for Inanna.',
    aboutEntityIds: ['deity-dumuzi', 'deity-inanna', 'text-dumuzi-inanna-c1'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 lines 11–32: Inanna requests gifts and Dumuzi appears carrying milk while the shepherd carries butter',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-enkimdu-courtship',
    statement: 'Dumuzid and Enkimdu frames Dumuzi as the shepherd candidate for marriage to Inanna; Utu praises the quality of his butter, milk, and shepherding work while Inanna initially resists the match.',
    aboutEntityIds: ['deity-dumuzi', 'deity-inanna', 'deity-utu', 'text-dumuzi-enkimdu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 12–34: Utu urges Inanna to marry Dumuzi and praises the shepherd’s butter, milk, and work',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzi-tammuz-name',
    statement: 'First-millennium Assyrian corpora preserve the divine name DUMU.ZI under the normalized name Dumuzi and the conventional rendering Tammuz.',
    aboutEntityIds: ['deity-dumuzi'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-aebp-dumuzi-tammuz',
        evidenceRole: 'Supports',
        locator: 'ORACC AEBP divine-name glossary entry: Dumuzi [TAMMUZ], written dDUMU.ZI and normalized Dumuzi',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-name-meaning',
    statement: 'The name Ereškigal is conventionally translated as “Lady of the Great Earth.”',
    aboutEntityIds: ['deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-ereshkigal',
        evidenceRole: 'Supports',
        locator: 'Ereškigal entry: name translated as “Lady of the Great Earth”',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-cult-temples',
    statement: 'Although Ereškigal had relatively little independently documented cult, scholarly summaries of inscriptions attest temples dedicated to her at Kutha, Assur, and Umma.',
    aboutEntityIds: ['deity-ereshkigal', 'place-kutha', 'place-ashur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-ereshkigal',
        evidenceRole: 'Supports',
        locator: 'Cult Places: temples of Ereškigal attested at Kutha, Assur, and Umma; independent cult otherwise rarely documented',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-iconography-uncertain',
    statement: 'Ereškigal has no securely identified iconography; a connection with the so-called Burney Relief or Queen of the Night has been proposed but remains uncertain.',
    aboutEntityIds: ['deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-ereshkigal',
        evidenceRole: 'Supports',
        locator: 'Iconography: Ereškigal’s iconography remains unknown; Burney Relief identification presented only as a possibility',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-ur-namma-offerings',
    statement: 'The Death of Ur-Namma presents Ur-Namma making offerings directly to Ereškigal in her palace after entering the underworld.',
    aboutEntityIds: ['deity-ereshkigal', 'text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1 lines 97–101: Ur-Namma presents offerings to Ereškigal in her palace',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-ur-namma-authority',
    statement: 'The Death of Ur-Namma depicts actions in the netherworld taking place at Ereškigal’s command after Ur-Namma has presented the underworld offerings.',
    aboutEntityIds: ['deity-ereshkigal', 'text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1 lines 132–144: actions within the underworld order occur at Ereškigal’s command',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-ninazu-mother',
    statement: 'The Death of Ur-Namma explicitly identifies Ereškigal as the mother of Ninazu.',
    aboutEntityIds: ['deity-ereshkigal', 'text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1 lines 97–101: Ereškigal is called the mother of Ninazu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-nungal-mother',
    statement: 'In Nungal A, Nungal calls Ereškigal her own mother and states that Ereškigal allotted divine powers to her.',
    aboutEntityIds: ['deity-ereshkigal', 'text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 62–74: Nungal calls Ereškigal “my own mother” and says Ereškigal allotted divine powers to her',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ereshkigal-namtar-minister',
    statement: 'Mesopotamian theological tradition identifies Namtar as Ereškigal’s minister or vizier.',
    aboutEntityIds: ['deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-ereshkigal',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Syncretisms: Namtar identified as Ereškigal’s minister',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-meslamtaea-history',
    statement: 'Modern scholarship traces Nergal’s earliest attested form at Kutha to the underworld god Meslamtaea, while the divine name Nergal itself first appears in the Ur III period.',
    aboutEntityIds: ['deity-nergal', 'place-kutha'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nergal',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Time Periods Attested: earliest form as Meslamtaea at Kutha; name Nergal first attested in the Ur III period',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-ur-namma-offerings',
    statement: 'The Death of Ur-Namma calls Nergal the “Enlil of the netherworld” and depicts Ur-Namma offering him a mace, bow, arrows, dagger, and other equipment in Nergal’s palace.',
    aboutEntityIds: ['deity-nergal', 'text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1 lines 88–91: Nergal is called the Enlil of the netherworld and receives weapons from Ur-Namma in his palace',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-warrior',
    statement: 'Nergal B praises Nergal as a terrifying warrior who batters rebel lands like a storm, wields destructive force against hostile territory, and is addressed as Lord Mešlamta-ea.',
    aboutEntityIds: ['deity-nergal', 'text-nergal-b'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 1–8 and 17–27: Nergal is praised as an awe-inspiring warrior, Lord Mešlamta-ea, who devastates hostile lands',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-enlil-son',
    statement: 'Nergal B explicitly describes Nergal as a son of Enlil and elsewhere says that he was sired by Enlil.',
    aboutEntityIds: ['deity-nergal', 'deity-enlil', 'text-nergal-b'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 1–12: Nergal is called an awe-inspiring son of Enlil and described as sired by Enlil',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-tarbisu-egallammes',
    statement: 'Sennacherib 214 records that the Assyrian king built the Egallammes temple of Nergal at Tarbisu from its foundations to its crenellations.',
    aboutEntityIds: ['deity-nergal', 'text-sennacherib-214-nergal-tarbisu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sennacherib-214-nergal-tarbisu',
        evidenceRole: 'Supports',
        locator: 'Sennacherib 214, lines 1–2: Egallammes at Tarbisu built for Nergal from foundations to crenellations',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sennacherib-214-cone-provenance',
    statement: 'Sennacherib 214 is a short Neo-Assyrian royal inscription preserved on clay-cone exemplars from Tarbisu, modern Tell Sherif Khan.',
    aboutEntityIds: ['text-sennacherib-214-nergal-tarbisu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sennacherib-214-nergal-tarbisu',
        evidenceRole: 'Supports',
        locator: 'Q004019 metadata: cone; Neo-Assyrian; Tell Sherif Khan (Tarbisu); royal inscription of Sennacherib',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sennacherib-214-royal-purposes',
    statement: 'Sennacherib 214 states that Egallammes was built for the king’s life, the well-being of his offspring, the overthrow of his enemies, the success of the harvest of Assyria, and the well-being of Assyria.',
    aboutEntityIds: ['text-sennacherib-214-nergal-tarbisu', 'deity-nergal'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sennacherib-214-nergal-tarbisu',
        evidenceRole: 'Supports',
        locator: 'Sennacherib 214, lines 1-2: stated purposes for building Egallammes include royal life and descendants, defeat of enemies, harvest success, and Assyria’s well-being',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-sennacherib-214-cone-deposit',
    statement: 'Sennacherib 214 concludes by stating that the king deposited his clay cones in the completed building.',
    aboutEntityIds: ['text-sennacherib-214-nergal-tarbisu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-sennacherib-214-nergal-tarbisu',
        evidenceRole: 'Supports',
        locator: 'Sennacherib 214, line 2: concluding statement concerning deposition of the king’s clay cones',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-iconography',
    statement: 'Nergal is represented in Mesopotamian iconographic traditions as an armed male figure, often carrying a scimitar or mace, with lion-headed weapon imagery and an association with the bull.',
    aboutEntityIds: ['deity-nergal'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nergal',
        evidenceRole: 'Supports',
        locator: 'Iconography: armed astride male figure with scimitar or mace, often with lion-headed weapon; association with the bull',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-patron-babylon',
    statement: 'Marduk was the patron god of Babylon, and his religious prominence grew together with the political and religious importance of the city.',
    aboutEntityIds: ['deity-marduk', 'place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-marduk',
        evidenceRole: 'Supports',
        locator: 'Overview, Functions, and Cult Places: Marduk as patron god of Babylon and his growing importance with the city',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-bel-title',
    statement: 'In the first millennium BCE, Marduk was frequently referred to as Bēl, the Akkadian word for Lord.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-marduk',
        evidenceRole: 'Supports',
        locator: 'Name and Spellings: Marduk frequently called Bēl in the first millennium BCE',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-asalluhi-tutu-syncretism',
    statement: 'Marduk was syncretized with Asalluhi and Tutu by the Old Babylonian period, although some Old Babylonian sources continued to distinguish Marduk and Asalluhi.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-marduk',
        evidenceRole: 'Supports',
        locator: 'Divine Genealogy and Syncretisms: Marduk, Asalluhi, and Tutu',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-nebuchadnezzar-esagil',
    statement: 'Nebuchadnezzar II 034 identifies the king as a provider for Esagil and records royal support for Esagil, Ezida, and the sanctuaries of the great gods.',
    aboutEntityIds: ['deity-marduk', 'place-babylon', 'text-nebuchadnezzar-ii-034-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-ii-034-marduk',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 034, column i lines 1–7',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-nebuchadnezzar-procession',
    statement: 'Nebuchadnezzar II 034 records work on major streets of Babylon used for processions of Marduk and Nabu and refers to the route associated with the akītu procession.',
    aboutEntityIds: ['deity-marduk', 'deity-nabu', 'place-babylon', 'text-nebuchadnezzar-ii-034-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-ii-034-marduk',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 034, column i line 8–column ii line 24',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-034-street-infill',
    statement: 'Nebuchadnezzar II 034 records repeated raising of Babylon’s major processional streets with large fills and improvement of their accessways with bitumen and baked brick for the processions of Marduk and Nabu.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-034-marduk', 'deity-marduk', 'deity-nabu', 'place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-ii-034-marduk',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 034, column i line 8-column ii line 7: successive infillings and paving of the processional streets with bitumen and baked brick',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-034-marduk-prayer',
    statement: 'Nebuchadnezzar II 034 addresses Marduk as exalted lord and wisest of the gods and asks him to look favorably on the king’s work and grant long life and very old age.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-034-marduk', 'deity-marduk'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-ii-034-marduk',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 034, column ii lines 8-16: prayer to Marduk for favorable regard, long life, and very old age',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nebuchadnezzar-ii-034-akitu-intercession',
    statement: 'Nebuchadnezzar II 034 appeals to the great gods who process with Marduk on the way to the akītu-house along Ay-ibūr-šabû to speak favorably about the king before Marduk.',
    aboutEntityIds: ['text-nebuchadnezzar-ii-034-marduk', 'deity-marduk', 'place-babylon'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nebuchadnezzar-ii-034-marduk',
        evidenceRole: 'Supports',
        locator: 'Nebuchadnezzar II 034, column ii lines 17-24: appeal to the gods processing on the akītu route to intercede before Marduk',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-marduk-iconography-spade-dragon',
    statement: 'Marduk’s established iconographic symbols include the spade and the mušḫuššu or snake-dragon; anthropomorphic representations of Marduk are comparatively rare.',
    aboutEntityIds: ['deity-marduk'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-marduk',
        evidenceRole: 'Supports',
        locator: 'Iconography: spade, mušḫuššu, and comparatively rare anthropomorphic representations',
      },
    ],
    status: 'Published',
  },  {
    id: 'claim-lament-urim-old-babylonian-nippur',
    statement: 'The Lament for Urim is catalogued as an Old Babylonian Sumerian literary composition with manuscript evidence from Nippur; the surviving textual tradition is therefore later than the Ur III collapse that the poem literary remembers.',
    aboutEntityIds: ['text-lament-for-urim'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-epsd2-lament-urim',
        evidenceRole: 'Supports',
        locator: 'Q000379 catalogue details: Old Babylonian; Nippur; Literary; composition with a historical background',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-eleven-kirugu',
    statement: 'The ETCSL edition of The Lament for Urim is formally divided into eleven kirugu sections, with recurring short refrain or response markers between major movements of the lament.',
    aboutEntityIds: ['text-lament-for-urim'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, structural markers at lines 35, 72, 133, 169, 204, 250, 328, 387, 399, 417, and 438',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-divine-abandonment',
    statement: 'The opening of The Lament for Urim depicts a broad divine abandonment of cities and shrines: Enlil, Ninlil, Inanna, Nanna, Ningal, Enki, and other deities leave their cult places, establishing loss of divine presence as the poem’s first major image of catastrophe.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-ningal', 'deity-nanna', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 1–34: deities abandon cities, temples, cow-pens, and sheepfolds; Nanna and Ningal abandon Urim and its sanctuaries',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-ningal-appeals',
    statement: 'Ningal describes repeatedly pleading before An and Enlil that Urim not be destroyed and its people not perish; she also appeals when the Anuna are seated to ratify decisions.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-ningal', 'deity-an', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 136–160: Ningal supplicates An and Enlil and appeals during the divine council',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-divine-decree',
    statement: 'The lament presents Urim’s destruction as a divine decree that Ningal cannot reverse: An does not change his command and Enlil does not alter what he has uttered.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-an', 'deity-enlil', 'deity-ningal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 144–168: Ningal’s pleas fail; destruction is decreed and the commands of An and Enlil are declared unalterable',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-storm-destruction',
    statement: 'A central movement of The Lament for Urim describes Enlil calling destructive storms and winds that overwhelm Sumer and cover Urim, after which the city is represented as breached, burned, and reduced to ruin mounds.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 172–217: Enlil calls the storm; destructive winds overwhelm the land; Urim is reduced to ruins',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-human-cost',
    statement: 'The poem gives an extended account of human suffering after the destruction of Urim, describing deaths by weapons, hunger and fire, bodies in streets and gates, families torn apart, and people carried away from their strongholds.',
    aboutEntityIds: ['text-lament-for-urim'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 207–240: corpses, battle deaths, hunger, fire, broken families, displacement, and Ningal’s departure',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-cult-economic-collapse',
    statement: 'The Lament for Urim portrays destruction as social, cultic, and economic collapse as well as military ruin: fields and orchards cease producing, watercourses and roads deteriorate, offerings terminate, priests no longer perform rites, and festivals and temple music cease.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-ningal', 'deity-nanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 265–285, 321–327, and 348–368: agricultural loss, plunder, terminated offerings, inactive priesthood, halted festivals and music',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-lament-urim-no-repeat-restoration',
    statement: 'The closing movements turn from catastrophe toward restoration: Ningal is urged to return and exercise queenship again, the destructive storm is asked never to recur, and Nanna’s restored city is envisioned as resplendent and enduring.',
    aboutEntityIds: ['text-lament-for-urim', 'deity-ningal', 'deity-nanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-lament-for-urim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.2.2, lines 369–438: Ningal’s return and restored queenship, curse against recurrence of the storm, and prayer for Nanna’s restored city',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-manuscripts',
    statement: 'The surviving Old Babylonian literary tradition of The Death of Ur-Namma includes a substantial version from Nippur and fragmentary witnesses from Susa; the ETCSL bibliography lists multiple cuneiform manuscripts from both sites.',
    aboutEntityIds: ['text-death-ur-namma'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-epsd2-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'Q000386 catalogue details: Old Babylonian, Nippur, Literary, Royal praise poetry',
      },
      {
        sourceId: 'src-etcsl-death-ur-namma-bibliography',
        evidenceRole: 'Supports',
        locator: 'Cuneiform sources list: multiple Nippur tablets and fragments, plus Susa witnesses Sb 12358+12362, Sb 12363, and Sb 14137+14083',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-opening-death',
    statement: 'The Nippur version opens with catastrophe and public mourning: evil comes upon Urim, Ur-Namma dies in his prime, deities respond with grief or withdrawal, Ninsun mourns her son, and the land is depicted as losing prosperity and order.',
    aboutEntityIds: ['text-death-ur-namma', 'deity-enlil', 'deity-nanna', 'deity-enki', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 1–51: Ur-Namma dies; gods and people mourn; agricultural and civic disorder follow',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-arali-burial',
    statement: 'The poem says Ur-Namma is brought to Arali in his prime, describes the journey to the netherworld as a desolate route, and states that his donkeys were buried with him; these are claims within the literary composition and not by themselves archaeological proof of his historical burial.',
    aboutEntityIds: ['text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 52–75: Ur-Namma brought to Arali, donkeys buried with him, and the journey to the netherworld described as desolate',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-porters-banquet',
    statement: 'On entering the netherworld, Ur-Namma gives gifts to its seven chief porters, is announced to dead kings and priests, slaughters livestock, holds a great banquet, and is described as knowing the rites of the netherworld.',
    aboutEntityIds: ['text-death-ur-namma', 'topic-underworld'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 76–87: seven porters, arrival of Ur-Namma, banquet, bitter food and brackish water, and netherworld rites',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-offering-sequence',
    statement: 'The poem presents a long sequence of offerings by Ur-Namma to underworld figures including Nergal, Gilgamesh, Ereshkigal, Dumuzid, Namtar, Hushbisag, Ningishzida, Dimpimekug, and Ninazimua, associating particular gifts with their palaces and roles.',
    aboutEntityIds: ['text-death-ur-namma', 'deity-nergal', 'deity-ereshkigal', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 88–131: extended sequence of offerings to major figures of the netherworld',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-underworld-role',
    statement: 'After the offerings, Ur-Namma is seated on a great dais and given a dwelling in the netherworld; the text associates him with Gilgamesh in rendering judgments and decisions there under Ereshkigal’s authority.',
    aboutEntityIds: ['text-death-ur-namma', 'deity-ereshkigal', 'topic-underworld'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 132–144: Ur-Namma seated on a dais, given a dwelling, and associated with Gilgamesh in netherworld judgment under Ereshkigal’s command',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-personal-lament',
    statement: 'After time in the netherworld, Ur-Namma laments what death has cut short: he cannot finish the wall of Urim, enjoy his new palace, remain with his household, embrace his wife, raise his sons, or see younger family members mature.',
    aboutEntityIds: ['text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 145–186: Ur-Namma’s lament over unfinished works, family, widowhood, and the impossibility of returning to Urim',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-inanna-lament',
    statement: 'The poem says Inanna was absent when Ur-Namma’s verdict was determined because Enlil had sent her abroad; when she returns, she confronts the situation, protests, and laments the loss of her shepherd.',
    aboutEntityIds: ['text-death-ur-namma', 'deity-inanna', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 187–216: Inanna absent at the verdict, returns to E-kur, protests, and laments Ur-Namma',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-death-ur-namma-memorial-fate',
    statement: 'Near the close of the Nippur version, a favorable fate is pronounced for Ur-Namma’s posthumous name and memory, recalling canals, agricultural works, settlements, and royal achievements even as the poem remains framed by tears and lamentation.',
    aboutEntityIds: ['text-death-ur-namma'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-death-ur-namma',
        evidenceRole: 'Supports',
        locator: 'ETCSL 2.4.1.1, Nippur version lines 217–242: posthumous fate, remembrance of Ur-Namma’s works, and closing lament',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-tablet-metadata',
    statement: 'EA 357 is a fragmented Akkadian literary clay tablet from Akhetaten (modern el-Amarna), dated by CDLI to the Middle Babylonian period (ca. 1400–1100 BCE) and now held in the Vorderasiatisches Museum in Berlin.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'CDLI P270856 metadata: provenience Akhetaten (el-Amarna); Middle Babylonian; clay literary tablet; Akkadian; fragmented; Vorderasiatisches Museum',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-scribal-context',
    statement: 'Scholarly discussion has long treated the Amarna Nergal and Ereshkigal tablet as a scribal or school text imported into Egypt, perhaps from Syria, alongside other Mesopotamian learned compositions used in the Amarna scribal environment.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyInterpretation',
    evidenceLinks: [
      {
        sourceId: 'src-gurney-nergal-ereshkigal-sultantepe',
        evidenceRole: 'Supports',
        locator: 'Article introduction: Middle Babylonian Amarna tablet apparently imported into Egypt, perhaps from Syria, together with Adapa, as a school-text for scribal training',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-banquet-separation',
    statement: 'EA 357 opens with the gods holding a banquet and sending word to Ereshkigal because the heavenly gods cannot descend to her and she cannot come up to them; she is asked to send someone to receive her portion.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 obverse lines 1–7: divine banquet, separation between the gods above and Ereshkigal below, and request that she send for her portion',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-namtar-embassy',
    statement: 'Ereshkigal sends Namtar, identified in the tablet as her sukkallu or minister, upward as her representative to the divine banquet.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 obverse lines 7–12: Ereshkigal sends Namtar, her sukkallu, and Namtar ascends to heaven',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-nergal-insult',
    statement: 'The Amarna recension centers the conflict on a breach of divine protocol: Namtar is instructed to identify the god who did not rise before him, and Nergal is the offending deity.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-nergal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 obverse lines 21–31: Namtar is told to identify and take the god who did not rise before Ereshkigal’s messenger',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-ereshkigal-death-demand',
    statement: 'After learning of the insult to her messenger, Ereshkigal demands that the offending god be sent to her and states that she will kill him.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-ereshkigal', 'deity-nergal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 obverse lines 18–24: Ereshkigal demands the god who failed to rise before her messenger and says he is to be sent to her so she may kill him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-fourteen-disease-agents',
    statement: 'Before Nergal’s descent in EA 357, Ea gives him fourteen supernatural agents whose names include personified diseases or afflictions; they accompany him toward Ereshkigal’s realm.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-nergal', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 reverse lines 1–9: Ea promises Nergal “seven and seven” companions and the tablet lists the accompanying divine/demonic agents',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-fourteen-gates',
    statement: 'Unlike later recensions that use seven gates, the Amarna recension of Nergal and Ereshkigal explicitly distributes Nergal’s accompanying agents across fourteen gates leading into the underworld complex.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-nergal', 'topic-underworld'],
    claimType: 'Descriptive',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 reverse lines 26–32: numbered sequence continues through the fourteenth gate',
      },
      {
        sourceId: 'src-novotny-nergal-fourteen-gates',
        evidenceRole: 'Contextualizes',
        locator: 'Discussion of EA 357 as the fourteen-gate recension, contrasted with the seven gates of the Neo-Assyrian and Seleucid versions',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-palace-assault',
    statement: 'With the gates controlled, Nergal pushes into the underworld palace, confronts Ereshkigal, seizes her by the hair, pulls her from the throne, and prepares to cut off her head.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-nergal', 'deity-ereshkigal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 reverse lines 32–38: Nergal opens the way, reaches Ereshkigal, seizes her by the hair, pulls her from the throne, and threatens her life',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-ending-marriage-kingship',
    statement: 'At the climax of EA 357, Ereshkigal offers to become Nergal’s wife and to place kingship of the broad netherworld in his hand; Nergal accepts her words, embraces and kisses her, and wipes away her tears.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357', 'deity-nergal', 'deity-ereshkigal', 'topic-underworld'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-ereshkigal-ea357',
        evidenceRole: 'Supports',
        locator: 'EA 357 reverse lines 38–46: Ereshkigal proposes marriage and underworld kingship; Nergal accepts, embraces and kisses her, and wipes away her tears',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ea357-later-recensions',
    statement: 'Nergal and Ereshkigal survives in distinct recensions: the short Middle Babylonian Amarna tablet EA 357 and a much later, longer Neo-Assyrian version from Sultantepe, with additional later evidence from Uruk; important narrative details, including the gate system, differ between these witnesses.',
    aboutEntityIds: ['text-nergal-ereshkigal-ea357'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-gurney-nergal-ereshkigal-sultantepe',
        evidenceRole: 'Supports',
        locator: 'Article introduction: Middle Babylonian Amarna witness and later Assyrian Sultantepe recension',
      },
      {
        sourceId: 'src-novotny-nergal-fourteen-gates',
        evidenceRole: 'Supports',
        locator: 'Discussion of Amarna, Sultantepe, and Uruk copies and the fourteen-gate versus seven-gate distinction',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-manuscripts',
    statement: 'Dumuzid and Enkimdu is preserved in multiple Sumerian literary tablets from Old Babylonian Nippur; CDLI identifies CBS 8320 as a clay literary witness dated ca. 1900–1600 BCE, and the ETCSL bibliography lists four cuneiform sources used for the composite edition.',
    aboutEntityIds: ['text-dumuzi-enkimdu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-dumuzid-enkimdu-p263161',
        evidenceRole: 'Supports',
        locator: 'CDLI P263161: Sumerian clay literary tablet from Nippur, Old Babylonian ca. 1900–1600 BCE; witness to composite Q000663',
      },
      {
        sourceId: 'src-etcsl-dumuzid-enkimdu-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL cuneiform sources: Ni 2431, CBS 8320, UM 29-16-435, and CBS 8313',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-composite-variation',
    statement: 'The ETCSL text of Dumuzid and Enkimdu is a composite reconstruction: the edition marks broken and missing lines and records manuscript variants, including alternate wording and extra lines in individual witnesses.',
    aboutEntityIds: ['text-dumuzi-enkimdu'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 composite/translation: missing material after line 26 and explicit manuscript variants at lines 14, 17A–B, and 60A–B',
      },
      {
        sourceId: 'src-etcsl-dumuzid-enkimdu-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL bibliography documents the score edition and four cuneiform sources underlying the reconstruction',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-inanna-rejects-shepherd',
    statement: 'Near the opening of Dumuzid and Enkimdu, Inanna states that she will not be the wife of a shepherd.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 7–11: Inanna rejects becoming the wife of a shepherd before Utu addresses her',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-inanna-prefers-farmer',
    statement: 'Inanna rejects the shepherd’s new wool and says that the farmer should marry her, praising the farmer who grows flax and grain.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 20–34: Inanna refuses the shepherd and states that the farmer who grows flax and grain should marry her',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-pastoral-counterboast',
    statement: 'Dumuzid answers the farmer’s advantages with a long sequence of pastoral counter-gifts, matching garments, beer, bread, and beans with sheep, milk products, butter, curds, and cheeses.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 40–64: Dumuzid repeatedly asks how the farmer is superior and counters agricultural goods with pastoral products',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-riverbank-quarrel',
    statement: 'Later in the composition, Dumuzid is pasturing sheep by the riverbank when the farmer Enkimdu approaches, and the text says that the shepherd provokes a quarrel.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 65–73: riverbank setting, Enkimdu approaches, and Dumuzid provokes the quarrel',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-enkimdu-declines',
    statement: 'Enkimdu declines the rivalry and offers practical coexistence: Dumuzid’s sheep may graze on the riverbank, stubble, and fields and drink from his canal.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 74–79: Enkimdu asks why he should compete and grants Dumuzid’s flocks access to grazing and water',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-friendship',
    statement: 'Dumuzid tells Enkimdu that when he is married, the farmer will be counted as his friend.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 80–83: Dumuzid repeatedly calls farmer Enkimdu his friend in connection with the marriage',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-gift-exchange',
    statement: 'Enkimdu closes the encounter by offering wheat, beans, barley, and whatever pleases Inanna, turning the former rivalry toward exchange rather than destruction.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 84–87: Enkimdu offers wheat, beans, two-row barley, and gifts for Inanna',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-enkimdu-dispute-balbale',
    statement: 'The closing rubric calls the composition a dispute between the shepherd and the farmer, praises Inanna, and labels the piece a balbale.',
    aboutEntityIds: ['text-dumuzi-enkimdu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-enkimdu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.33 lines 88–90: “dispute between the shepherd and the farmer,” praise of Inanna, and final balbale rubric',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-manuscript',
    statement: 'UET 6, 11 is a Sumerian literary clay tablet excavated at Ur, dated by CDLI to the Old Babylonian period ca. 1900–1600 BCE, and preserved in the British Museum.',
    aboutEntityIds: ['text-dumuzi-geshtinanna'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-dumuzid-geshtinanna-p346096',
        evidenceRole: 'Supports',
        locator: 'CDLI P346096 metadata: literary clay tablet from Ur (Tell Muqayyar), Sumerian, Old Babylonian ca. 1900–1600 BCE, British Museum; UET 6, 11 / excavation no. U 16852',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-single-witness',
    statement: 'Modern scholarship treats Dumuzi and Geštinanna as a composition preserved in a single known manuscript from Ur; the lack of a parallel manuscript makes several difficult lines especially uncertain.',
    aboutEntityIds: ['text-dumuzi-geshtinanna'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-pinter-2022-dumuzid-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'Pintér 2022, pp. 349–350: the composition is preserved in a solitary manuscript from Ur, and the absence of a parallel manuscript complicates difficult readings',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-textual-relationship',
    statement: 'Because Dumuzi and Geštinanna shares narrative material with Inanna’s Descent to the Netherworld, scholarship has debated whether it is an independent version of Dumuzi’s story or an excerpt or reformulation related to a longer composition.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'text-descent-of-inanna'],
    claimType: 'Interpretive',
    evidenceClassification: 'ScholarlyDebate',
    evidenceLinks: [
      {
        sourceId: 'src-pinter-2022-dumuzid-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'Pintér 2022, p. 350: discussion of scholarly debate over whether the composition is an independent version or an excerpt of a longer work sharing material with Inanna’s Descent',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-inanna-seized',
    statement: 'At the beginning of Dumuzid and Geštinanna, galla demons enter Uruk, seize Inanna, and direct her to descend to Ereshkigal’s underworld while removing or foregoing the regalia of queenship.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 1–11: galla demons seize Inanna at Uruk and command her descent to Ereshkigal while instructing her to remove or not wear royal ornaments and garments',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-substitute-restraints',
    statement: 'After Inanna is released, the composition states that she hands Dumuzid over in exchange for herself; the demons restrain him and raise weapons before him.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 12–21: Inanna hands Dumuzid over as her substitute and the demons bind and threaten him with weapons',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-utu-appeal',
    statement: 'Dumuzid appeals to Utu as a just judge, identifies Inanna as Utu’s sister whom he married, states that he is being given to the underworld as her substitute, and asks Utu to transform him so that he can escape.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi', 'deity-inanna', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 22–32: Dumuzid appeals to Utu, identifies Inanna as his wife and Utu’s sister, describes his substitution, and requests transformation for escape',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-transformation-escape',
    statement: 'Utu accepts Dumuzid’s tears, changes his hands and appearance, and enables him to flee across the landscape to the dwelling of his sister Geštinanna.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 33–38: Utu transforms Dumuzid, who escapes like a snake and bird and takes refuge with Geštinanna',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-lament',
    statement: 'When Geštinanna sees Dumuzid, she performs gestures of mourning and recites a lament for her brother, grieving the youth whose life, family, and companionship will remain unfulfilled.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 38–46: Geštinanna sees her brother, scratches herself in mourning, and laments his unfulfilled life, wife, children, friends, and family',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-demon-familylessness',
    statement: 'The pursuing demons describe themselves as beings without mother, father, siblings, spouse, or children and reason that Dumuzid is more likely to seek shelter with his sister than with a friend or in-law.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 47–56: the galla demons describe their lack of family ties and decide to search for Dumuzid at Geštinanna’s dwelling',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-refusal',
    statement: 'When the demons demand Dumuzid’s location, Geštinanna repeatedly refuses to answer even while they inflict humiliating and painful treatment on her; they fail to find him in her house.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 57–64: Geštinanna does not reveal her brother despite repeated abuse, and the demons do not find Dumuzid in her house',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-geshtinanna-sheepfold-capture',
    statement: 'The demons then go to the holy sheepfold, find and capture Dumuzid, destroy or attack the setting around him, and the composition closes with Geštinanna wandering through the city in grief for her brother.',
    aboutEntityIds: ['text-dumuzi-geshtinanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-geshtinanna',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.1.1 lines 65–73: the demons proceed to the holy sheepfold, capture Dumuzid, attack him and his dwelling, and Geštinanna wanders the city lamenting for her brother',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-manuscript-nippur',
    statement: 'Dumuzid’s Dream is preserved in Old Babylonian Sumerian literary tablets from Nippur; CDLI identifies P453307 as a clay witness dated ca. 1900–1600 BCE and links it to the Dumuzi’s Dream composite.',
    aboutEntityIds: ['text-dumuzi-dream'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-dumuzid-dream-p453307',
        evidenceRole: 'Supports',
        locator: "CDLI P453307 metadata: Old Babylonian ca. 1900–1600 BCE, Nippur, Sumerian literary tablet, witness to CDLI Literary 000347 / Dumuzi's Dream",
      },
      {
        sourceId: 'src-etcsl-dumuzid-dream-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 1.4.3 bibliography records the composite edition and numerous cuneiform witnesses and later-added sources',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-composite-variants',
    statement: 'The modern text of Dumuzid’s Dream is reconstructed from multiple manuscripts, and the ETCSL translation explicitly records variant readings and lines added or altered in individual witnesses.',
    aboutEntityIds: ['text-dumuzi-dream'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-etcsl-dumuzid-dream-bibliography',
        evidenceRole: 'Supports',
        locator: 'ETCSL bibliography: Alster 1972 composite text with subsequent new sources and manuscript additions',
      },
      {
        sourceId: 'src-isac-alster-dumuzid-dream',
        evidenceRole: 'Contextualizes',
        locator: "ISAC Library record for Alster 1972 and cataloged tablet fragments preserving different line ranges of Dumuzi's Dream",
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-opening-lament',
    statement: 'Dumuzid’s Dream opens with Dumuzi already weeping in the countryside and calling on the landscape, his mother Durtur, and his sister to mourn him if his death becomes known.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 1–14: Dumuzi weeps in the countryside and invokes future mourning by the landscape, his mother, and his sister',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-symbolic-dream',
    statement: 'Dumuzi’s dream contains a dense sequence of symbolic images: rising rushes, separating twin reeds, enclosing trees, extinguished coals, displaced churns and cups, a lost shepherd’s stick, predatory birds, grieving livestock, and a silent haunted sheepfold.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 25–39: Dumuzi recounts the symbolic dream culminating in his death and the haunted sheepfold',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-geshtinanna-interpretation',
    statement: 'Geštinanna interprets Dumuzi’s dream as a forecast of ambush, separation, capture, destruction of the pastoral household, binding, Dumuzi’s death, and her own mourning.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 41–69: Geštinanna interprets the dream images as the approaching capture and death of Dumuzi and the ruin of the sheepfold',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-demons-loyalty',
    statement: 'When Dumuzi’s pursuers approach, Geštinanna warns him, promises not to reveal his hiding places, and later refuses the demons’ offers of water and grain; the demons themselves assume that a sister will not betray a brother.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 83–150: Geštinanna warns Dumuzi, vows secrecy, rejects the demons’ inducements, and the demons state that a sister will not reveal her brother',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-friend-betrayal-arali',
    statement: 'Dumuzi’s friend accepts the demons’ inducements and reveals his hiding places, leading to Dumuzi’s capture in the ditches of Arali; Dumuzi contrasts his sister, who saved his life, with the friend who caused his death.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 139–164: the friend accepts water and grain, discloses hiding places, and the demons capture and bind Dumuzi in Arali',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-utu-transformation',
    statement: 'After his first capture, Dumuzi appeals to Utu as his brother-in-law, identifies himself as Inanna’s husband and benefactor of E-ana, and asks to be transformed; Utu changes his limbs into gazelle form so he can escape.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi', 'deity-utu', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 165–180: Dumuzi appeals to Utu as brother-in-law, calls himself Inanna’s husband, and is transformed into gazelle form to escape',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-repeated-flight-belili',
    statement: 'The second half of Dumuzid’s Dream repeats a pursuit-and-escape pattern: Dumuzi is caught again, appeals to Utu for another transformation, reaches the house of Old Woman Belili, receives water and flour there, and is discovered and captured again.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 181–234: repeated capture, appeal to Utu, transformation, refuge with Old Woman Belili, and renewed capture',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-final-sheepfold-death',
    statement: 'Dumuzi’s final escape leads to the holy sheepfold associated with his sister, where the demons enter in sequence and destroy the objects anticipated in the dream until Dumuzi is dead and the sheepfold is haunted.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 lines 235–260: final flight to the holy sheepfold, Geštinanna’s lament, demons entering, pastoral implements destroyed, and Dumuzi dead',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-dumuzid-dream-rubric',
    statement: 'The surviving composition closes with a rubric identifying the piece as a šir-kalkal for the dead Dumuzi.',
    aboutEntityIds: ['text-dumuzi-dream', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-dream',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.3 closing rubric after line 260: “A šir-kalkal for the dead Dumuzid”',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-nippur-witness',
    statement: 'Inana and Bilulu is preserved by a single Old Babylonian Sumerian literary witness from Nippur, identified in ETCSL as Ni 4486 and in CDLI as witness P343715 to composite Q000348.',
    aboutEntityIds: ['text-inanna-bilulu'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-inana-bilulu-p469529',
        evidenceRole: 'Supports',
        locator: 'CDLI Literary 000348 composite metadata: Old Babylonian ca. 1900–1600 BCE; one witness, P343715, from Nippur',
      },
      {
        sourceId: 'src-etcsl-inana-bilulu-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 1.4.4 bibliography: cuneiform source Ni 4486 from Nippur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-fragmentary-structure',
    statement: 'The surviving text of Inana and Bilulu is substantially fragmentary, with major missing stretches between the opening lament, Inana’s departure for the sheepfold, and the later vengeance and ritual scenes.',
    aboutEntityIds: ['text-inanna-bilulu'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 translation: large missing or fragmentary blocks after lines 1–5, around lines 31–65, and again after the fate-determination sequence',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-opening-lament-geography',
    statement: 'The composition opens by carrying lament for Dumuzi across a ritual geography that includes the desert, the house Arali, Bad-tibira, Du-šuba, the shepherding country, and Dumuzi’s sheepfold.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 1–5: lament for Dumuzi is extended to the desert, house Arali, Bad-tibira, Du-šuba, the shepherding country, and his sheepfold',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-ningal-sheepfold',
    statement: 'Inana is shown in the chamber of the mother who bore her and addresses Ningal as mother while asking permission to go to the sheepfold; the passage also invokes Suen as her father within this composition.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-ningal', 'deity-nanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 31–45: Inana prays in her mother’s chamber, addresses Mother Ningal, asks to go to the sheepfold, and refers to Suen as father',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-dead-shepherd-clue',
    statement: 'After a damaged transition, the poem places the dead or violently struck Dumuzi near the house of old woman Bilulu, while a report to Inana says that a man who was not the shepherd was returning beside Dumuzi’s sheep.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 65–73: damaged passage at Bilulu’s house describes Dumuzi with his head beaten in and reports a non-shepherd returning beside his sheep',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-inanna-song',
    statement: 'Inana composes a song for her dead young husband Dumuzi, praising the shepherd who guarded the sheep by day and night.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 74–80: Inana fashions a song for Dumuzi and praises him as the shepherd who stood guard over the sheep',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-girgire-shirru',
    statement: 'The poem introduces Bilulu’s son Ĝirĝire as filling pen and fold with captured cattle and stacking grain, while Širru of the haunted desert appears as an isolated figure described as no one’s child and no one’s friend.',
    aboutEntityIds: ['text-inanna-bilulu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 81–89: Ĝirĝire, Bilulu’s son, gathers captured cattle and grain; Širru of the haunted desert is introduced beside him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-vengeance-plan',
    statement: 'The narrator explicitly states that Inana intends to kill Bilulu and to make good the resting place of her beloved husband Dumuzi-Ama-ušumgal-ana.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 90–97: Inana plans to kill Bilulu and improve the resting place of her beloved husband Dumuzi-Ama-ušumgal-ana',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-fate-transformations',
    statement: 'After declaring Bilulu dead, Inana determines new fates: Bilulu becomes the waterskin for cold desert water, Bilulu and Ĝirĝire become desert protective divinities, and Širru becomes a desert figure connected with flour and ritual action.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 98–124: Inana determines the post-vengeance fates of Bilulu, Ĝirĝire, and Širru and the text states that the decree immediately took effect',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-libation-presence',
    statement: 'Inana’s fate decree connects desert water libation and flour sprinkling with making the vanished Dumuzi present again at the place from which he disappeared.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 98–124: water is to be libated and flour sprinkled for the wandering lad so that he may be present again in the desert place from which he vanished',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-inana-bilulu-closing-lament-ulila',
    statement: 'The final preserved portion returns to lament for Dumuzi, names Durtur and Geštinanna, repeats the lament geography, praises Inana for avenging Dumuzi and making good his resting place, and closes by identifying the composition as an ulila song of Inana.',
    aboutEntityIds: ['text-inanna-bilulu', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-inanna-bilulu',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.4.4 lines 137–177: Durtur and Geštinanna appear in the closing lament sequence; lament locations recur; Inana is praised as avenger; final rubric identifies an ulila song of Inana',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-nippur-witness',
    statement: 'A Song of Inana and Dumuzid (C1) is preserved on the Old Babylonian Sumerian tablet Ni 2377 from Nippur, cataloged by CDLI as P345166 and linked to composite Q000659.',
    aboutEntityIds: ['text-dumuzi-inanna-c1'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-dumuzi-inanna-c1-p345166',
        evidenceRole: 'Supports',
        locator: 'CDLI P345166: Old Babylonian ca. 1900–1600 BCE, Nippur, Sumerian literary tablet, witness to Q000659 / Dumuzid-Inana C1',
      },
      {
        sourceId: 'src-etcsl-dumuzi-inanna-c1-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 4.08.29 bibliography: cuneiform source Ni 2377 (SLTNi 35)',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-fragmentary-four-segments',
    statement: 'The ETCSL translation of Dumuzid-Inana C1 is arranged in four surviving segments and repeatedly marks fragmentary lines and substantial lacunae, so the poem’s complete original sequence is not recoverable.',
    aboutEntityIds: ['text-dumuzi-inanna-c1'],
    claimType: 'Historical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segments A–D: repeated fragmentary lines and missing stretches, including about four lines after Segment A and about nine lines in Segment B',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-wedding-ushers',
    statement: 'The opening of C1 addresses Ninegala/Inana and presents her wedding ushers as lords, with a fowler and fisherman among the personnel named in the damaged opening.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment A lines 1–10: Ninegala/Inana is addressed and wedding ushers, including a fowler and fisherman, are introduced',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-inanna-requests-gifts',
    statement: 'Inana announces that she will send messengers to a shepherd, farmer, fowler, and fisherman for butter and milk, agricultural produce and wine, fine birds, and fat carp.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment A lines 11–20: Inana requests gifts from shepherd, farmer, fowler, and fisherman',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-gift-procession',
    statement: 'The surviving gift scene brings together choice birds, fat carp, butter, and milk, and specifically depicts Dumuzi carrying milk and dairy containers on his shoulders as he calls for the house to be opened.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-dumuzi', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment A lines 21–32: birds, carp, butter, and milk arrive; Dumuzi carries milk and dairy containers and calls for the house to open',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-ningal-counsel',
    statement: 'In Segment B, Inana approaches her mother and Ningal speaks approvingly of Dumuzi, comparing the future relationship with familiar parental bonds.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna', 'deity-dumuzi', 'deity-ningal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment B lines 1–11: Inana approaches her mother; Ningal speaks about Dumuzi and compares him and his parents to Inana’s parents',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-inanna-preparation',
    statement: 'At her mother’s bidding, Inana bathes, anoints herself with sweet oil, puts on a grand robe, arranges lapis lazuli at her neck, and takes her cylinder seal in hand before meeting Dumuzi.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment B lines 12–23: Inana bathes, anoints, dresses, arranges lapis lazuli, and takes her cylinder seal',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-doorway-embrace',
    statement: 'When Dumuzi opens the door, Inana comes forth like a moonbeam; Dumuzi rejoices at seeing her, embraces her, and kisses her.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment B lines 12–23: Inana emerges like a moonbeam and Dumuzi embraces and kisses her',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-bride-personal-god',
    statement: 'The later surviving segment calls Inana Dumuzi’s bride and has Dumuzi invite her into the house of his personal god, where she is to sit with him in the god’s seat of honor.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment C lines 1–13: Dumuzi addresses Inana as bride and invites her to the house of his personal god and a seat of honor',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-not-slave-splendid-table',
    statement: 'Dumuzi explicitly tells Inana that he has not brought her away to be a slave girl and promises her a splendid table from which even members of his own family do not eat.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment D lines 5–13: Dumuzi says Inana is not his slave girl and promises her a privileged splendid table',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-c1-household-labor-exemptions',
    statement: 'Dumuzi tells his bride that she should not weave cloth, spin yarn, comb goat wool, or warp threads for him, presenting her as exempt from several ordinary textile tasks within the damaged closing segment.',
    aboutEntityIds: ['text-dumuzi-inanna-c1', 'deity-inanna', 'deity-dumuzi'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-dumuzi-inanna-c1',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.08.29 Segment D lines 14–27: Dumuzi tells his bride not to weave, spin, comb goat wool, or warp threads for him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-manuscript-tradition',
    statement: 'Nungal A is preserved in a broad Old Babylonian Sumerian manuscript tradition, with many witnesses from Nippur and additional copies from places including Isin and Ur; CDLI identifies P268936 as an Old Babylonian Nippur witness to composite Q000736.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-cdli-nungal-a-p268936',
        evidenceRole: 'Supports',
        locator: 'CDLI P268936: Old Babylonian ca. 1900–1600 BCE, Nippur, Sumerian literary tablet, witness to Nungal A / Q000736',
      },
      {
        sourceId: 'src-etcsl-nungal-a-bibliography',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 4.28.1 bibliography: extensive cuneiform witness list, dominated by Nippur manuscripts with additional witnesses from Isin and Ur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-prison-house',
    statement: 'The opening of Nungal A identifies the divine house as a prison and jail of the gods, a place of punishment that watches both the righteous and the wicked and is compared with a net, a trap, and the river ordeal.',
    aboutEntityIds: ['text-nungal-a', 'deity-utu'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 1–11: the house is called prison and jail of the gods, a trap and net, a river ordeal, and a place that distinguishes righteous from wicked',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-architecture',
    statement: 'Nungal A imagines the prison through terrifying architectural metaphors: dragon-like stairs, a dagger door jamb, scorpion architrave, lion pilasters and bars, eagle hinges, a python latch, and a horned-viper bolt.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 12–26: the prison architecture is described through dragon, dagger, scorpion, lion, eagle, python, and horned-viper imagery',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-judgment',
    statement: 'The hymn presents Nungal as the vigilant lady of the house and describes the prison as a place where divine judgments are made, where true and false are distinguished and evildoers cannot escape.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 27–39: Nungal occupies the lofty dais; the gods bow before the place of judgment, and the text describes supervision of judgments and the distinction between true and false',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-prisoner-isolation',
    statement: 'When an accused man enters the great house, the hymn depicts him as delivered into Nungal’s hands, restrained, taken to a house of sorrow, stripped of ordinary social identity, and isolated even from acquaintances and fellow inmates.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 40–54: the prisoner is delivered to Nungal, led to a house of sorrow, goes naked, is avoided by acquaintances, and inmates become unrecognizable to one another',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-ordeal-rebirth',
    statement: 'The hymn says that the prison produces weeping and lament, but when the proper time comes the gods attend interrogation and the divine river ordeal to separate just from evil, and a just person is given rebirth.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 55–61: lament inside the prison, divine interrogation and river ordeal, separation of just from evildoers, and rebirth of the just person',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-genealogy-powers',
    statement: 'In Nungal’s self-praise, she calls herself daughter of An, daughter-in-law of Enlil, recipient of divine powers from the gods and from her mother Ereshkigal, and a goddess who speaks with grandeur to Inanna.',
    aboutEntityIds: ['text-nungal-a', 'deity-ereshkigal', 'deity-enlil', 'deity-inanna', 'deity-an'],
    claimType: 'Genealogical',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 62–74: Nungal identifies herself as daughter of An, daughter-in-law of Enlil, daughter of Ereshkigal, holder of divine powers, and one who speaks to Inanna',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-compassion-tablet-life',
    statement: 'Nungal’s self-praise also claims mercy and compassion: she watches the people, holds the tablet of life, records the just, tempers severe punishments, cools angry hearts with water, and rescues people from destruction.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 75–82: Nungal claims mercy and compassion, the tablet of life, registration of the just, mitigation of punishment, and rescue from destruction',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-household',
    statement: 'The hymn gives Nungal a divine household: Birtum is named as her spouse, Ig-alim as chief superintendent, Ninharana as a bearer of news, and other palace personnel as guardians and attendants.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 83–94: Birtum, Ig-alim, Ninharana, a messenger, barber, and other attendants are named within Nungal’s household',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-house-of-life',
    statement: 'In the capital-offence scene, Nungal’s chief prosecutor sentences an accused man to death, yet the hymn immediately says he will not be killed: he is rescued from destruction and kept under guard in Nungal’s “house of life,” which gives birth to a just person and destroys falsehood.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 95–105: capital accusation, death sentence without execution, rescue into the house of life, guarded confinement, and the house giving birth to a just person',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nungal-a-purification-release',
    statement: 'The hymn describes successful confinement as purification: the prisoner is polished like fine silver, cleansed of dirt, returned to the favorable hands of his personal god, and expected thereafter to praise Nungal and bring offerings while she acts as his protector.',
    aboutEntityIds: ['text-nungal-a'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nungal-a',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.28.1 lines 106–116: purification like fine silver, restoration to the personal god, praise and offerings to Nungal, and her continuing protection',
      },
    ],
    status: 'Published',
  },
  { id: 'claim-ashurbanipal-227-provenance', statement: 'Ashurbanipal 227 is preserved on the large single-column clay tablet K 2631+ from Kuyunjik at Nineveh and belongs to Ashurbanipal’s Neo-Assyrian reign, ca. 668–631 BCE.', aboutEntityIds: ['text-ashurbanipal-227-nergal'], claimType: 'Historical', evidenceClassification: 'ArchaeologicalEvidence', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'RINAP 5, Ashurbanipal 227 catalogue: K 2631+ from Nineveh, Kuyunjik; Neo-Assyrian, ca. 668–631 BCE' }], status: 'Published' },
  { id: 'claim-ashurbanipal-227-nergal-emeslam', statement: 'The opening dedication calls Nergal an exalted son of Enlil, praises his martial power, and identifies him as resident in Emeslam, the holy sanctuary inside Cutha.', aboutEntityIds: ['text-ashurbanipal-227-nergal', 'deity-nergal', 'deity-enlil', 'place-kutha'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'Ashurbanipal 227, obverse lines 1–6: Nergal is son of Enlil, warrior and resident of Emeslam inside Cutha' }], status: 'Published' },
  { id: 'claim-ashurbanipal-227-nanaya-return', statement: 'In the historical report Ashurbanipal says that he recovered Nanaya and other goddesses and caused them to enter and reside again in Eanna.', aboutEntityIds: ['text-ashurbanipal-227-nergal', 'deity-nanaya', 'place-uruk'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'Ashurbanipal 227, reverse lines 12–15: return of Nanaya and other goddesses to Eanna' }], status: 'Published' },
  { id: 'claim-ashurbanipal-227-emeslam-rebuild', statement: 'Ashurbanipal reports renovating the dilapidated portions of Emeslam, removing collapsed material, realigning its foundations, and depositing precious materials when rebuilding Nergal’s temple at Cutha.', aboutEntityIds: ['text-ashurbanipal-227-nergal', 'deity-nergal', 'place-kutha'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'Ashurbanipal 227, reverse lines 18–27: renovation and rebuilding of Emeslam at Cutha' }], status: 'Published' },
  { id: 'claim-ashurbanipal-227-nergal-las-blessing', statement: 'After the building report Ashurbanipal invokes Nergal and Laṣ, the divine patrons associated with Cutha, and asks for long life and benevolent protection.', aboutEntityIds: ['text-ashurbanipal-227-nergal', 'deity-nergal', 'place-kutha'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'Ashurbanipal 227, reverse lines 28–36: Nergal and Laṣ, Emeslam, protection and length of days' }], status: 'Published' },
  { id: 'claim-ashurbanipal-227-future-ruler', statement: 'The closing passage instructs a future ruler to renovate the temple when it again becomes old and warns against erasing Ashurbanipal’s inscribed name.', aboutEntityIds: ['text-ashurbanipal-227-nergal', 'deity-nergal', 'place-kutha'], claimType: 'Descriptive', evidenceClassification: 'AncientSource', evidenceLinks: [{ sourceId: 'src-primary-ashurbanipal-227-nergal', evidenceRole: 'Supports', locator: 'Ashurbanipal 227, reverse lines 37–end: instructions to a future ruler and warning concerning the royal inscription' }], status: 'Published' },
  {
    id: 'claim-nergal-b-preservation',
    statement: 'ETCSL’s edition of Nergal B runs to 57 numbered lines and its bibliography lists AO 5391 (TCL 15 26) as the cuneiform source used for the composition; the surviving text contains substantial lacunae, including a heavily fragmentary closing passage.',
    aboutEntityIds: ['text-nergal-b'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-etcsl-nergal-b-bibliography',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 bibliography: cuneiform source AO 5391 (TCL 15 26); print edition van Dijk 1960, pp. 35–56',
      },
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 4.15.2 lines 1–57: numerous lacunae; lines 50–57 explicitly presented as a fragmentary closing unit',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-divine-powers-heaven',
    statement: 'Nergal B describes Nergal as authoritative, knowing the divine powers of the gods, traveling through heaven, and organizing everything.',
    aboutEntityIds: ['text-nergal-b', 'deity-nergal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 13–16: Nergal raises his head authoritatively, knows the divine powers of the gods, travels through heaven, and organizes everything',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-kingship-netherworld',
    statement: 'In a damaged middle passage, Nergal B associates Nergal with overwhelming divine awe, the role of supreme deity, kingship in the Land, and the netherworld, where he brings people to a partly broken destination.',
    aboutEntityIds: ['text-nergal-b', 'deity-nergal'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 28–35: Nergal’s awe covers the city; he exercises the role of supreme deity and kingship in the Land; the passage ends with Nergal bringing people to a damaged netherworld destination',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-erra-fate',
    statement: 'Nergal B preserves a speech attributed to Erra that acclaims Nergal as surpassing An, calls on him to perform stewardship for An, and says that Nergal determines fates with An in accordance with destiny.',
    aboutEntityIds: ['text-nergal-b', 'deity-nergal', 'deity-an'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 36–39: Erra welcomes his king and acclaims Nergal as surpassing An, performing stewardship for An, and determining fates with him',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-ninshubur-conquest',
    statement: 'Ninšubur, identified in Nergal B as minister of the great place, the underworld, greets Nergal as a lord whose power reaches hostile mountain lands, whose enemies do not escape, and who rises like fire in the eastern lands.',
    aboutEntityIds: ['text-nergal-b', 'deity-nergal', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 40–46: Ninšubur greets Nergal; the speech invokes mountain bandits, foreign lands, Enlil’s enemies, and Nergal rising like fire',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-nergal-b-anuna-close',
    statement: 'The Anuna gods step forward in the final preserved movement of Nergal B, after which the composition becomes heavily fragmentary and closes with references to a son of Enlil, Lugal-era, and the statement that praising the addressed deity is sweet.',
    aboutEntityIds: ['text-nergal-b', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-nergal-b',
        evidenceRole: 'Supports',
        locator: 'ETCSL 4.15.2 lines 47–57: the Anuna step forward; the final unit is heavily fragmentary and ends with son of Enlil, Lugal-era, and “Praising you is sweet”',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-preservation',
    statement: 'Ninurta and the Turtle is preserved as a fragmentary Sumerian composition: ETCSL presents a broken Segment A, a sixty-line Segment B, and an unknown number of lines missing after the surviving conclusion; its bibliography lists multiple cuneiform witnesses.',
    aboutEntityIds: ['text-ninurta-turtle'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-etcsl-ninurta-turtle-bibliography',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3 bibliography: CBS 8319 (+) CBS 15007 (+) CBS 15085, N 7337, Ni 4003, ?Ni 4089, UET 6 2 = U 16900C, UET 6 3 *484, and UET 6 3 *20',
      },
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 1.6.3: Segment A is fragmentary with unknown lines missing; Segment B survives through line 60 and is followed by an unknown number of missing lines',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-enki-honors',
    statement: 'After the Anzud chick brings Ninurta to the abzu, Enki is delighted with him and grants an elaborate blessing: Ninurta is to keep his foot on the captured bird, receive recognition from the great gods and Enlil, and enjoy continuing honor and tribute.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 10–24: the Anzud chick leads Ninurta to Enki; Enki delights in the hero and promises lasting honor, Enlil’s support, and tribute',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-ambition',
    statement: 'Despite Enki’s honors, Ninurta is secretly dissatisfied, contemplates greater deeds, becomes inwardly rebellious, and sets his sights on the whole world.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 25–30: Ninurta is secretly unhappy with the promises, contemplates great deeds, is inwardly rebellious, and sets his sights on the whole world',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-isimud',
    statement: 'Enki perceives Ninurta’s plan, stirs up a dark flood-storm in the abzu, and his minister Isimud confronts Ninurta; Ninurta refuses to leave and raises his hand against Isimud.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 31–35: Enki understands the plan, raises a dark flood-storm, Isimud opposes Ninurta, and Ninurta raises his hand against the minister',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-pit',
    statement: 'Enki fashions a turtle from the clay of the abzu, stations it in ambush, and uses it to seize Ninurta from behind; the turtle digs a pit into which both fall, leaving Ninurta unable to find a way out.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 36–46: Enki creates the turtle from abzu clay, stations it at the gate, and the ambush culminates in a pit that traps Ninurta',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-rebuke',
    statement: 'With Ninurta trapped, Enki rebukes his ambition and asks where his strength and heroism have gone, contrasting Ninurta’s earlier destruction in the mountains with his inability to escape the pit.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-ninurta', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 47–54: Enki rebukes Ninurta’s plan to attack him and asks where his strength and heroism have gone now that he cannot get out',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-turtle-ninmena-lament',
    statement: 'The surviving composition ends with Ninmena learning of Ninurta’s predicament, tearing her clothes, and lamenting angrily to Enki before the text breaks off again.',
    aboutEntityIds: ['text-ninurta-turtle', 'deity-enki'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-turtle',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.3, Segment B lines 55–60: Ninmena learns what has happened, tears her clothes, and addresses Enki in lament; an unknown number of lines are then missing',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-manuscripts',
    statement: 'Angim is preserved in a large manuscript tradition: ETCSL lists dozens of cuneiform witnesses, including many tablets and fragments from Nippur as well as additional copies from other collections, while the composite translation runs to 208 numbered lines.',
    aboutEntityIds: ['text-ninurta-angim'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-etcsl-ninurta-angim-bibliography',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 bibliography: extensive cuneiform witness list including numerous CBS, N, Ni, UET, and 3N-T manuscripts',
      },
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Contextualizes',
        locator: 'ETCSL 1.6.1 translation: composite text numbered through line 208',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-divine-powers',
    statement: 'The opening of Angim praises Ninurta as son of Enlil, born by Nintur, mightiest of the Anuna, and bearer of divine powers associated with heaven, earth, the mountains, and Eridug.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 1–15: Ninurta is son of Enlil, born by Nintur, mighty among the Anuna, and has taken up divine powers of heaven, earth, mountains, and Eridug',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-trophies',
    statement: 'Angim enumerates a spectacular group of beings and objects Ninurta brings forth as trophies of mountain warfare, including the Six-headed wild ram, Warrior dragon, Magilum boat, Bison, Mermaid, Gypsum, Strong copper, Anzud bird, and Seven-headed serpent.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 30–40: catalogue of Ninurta’s captured beings and materials, including Anzud and the Seven-headed serpent',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-chariot-display',
    statement: 'Ninurta fastens captured beings and trophies to specific parts of his battle chariot, turning the vehicle itself into a mobile display of conquest before beginning his return.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 52–69: trophies are hung on the axle, yoke, dust-guard, seat, beam, foot-board, pole fittings, front guard, and cross-beam before Ninurta mounts his chariot',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-nuska',
    statement: 'As Ninurta approaches Nibru at Enlil’s command like a deluge and storm, Nuska comes from E-kur to meet him and urges the hero not to frighten Enlil in his residence, promising paternal gifts for his heroic strength.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 73–101: Ninurta advances like a deluge; Nuska meets him before Nibru, asks him not to frighten Enlil, and Ninurta puts away whip, goad, and mace before entering E-kur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-ekur-entry',
    statement: 'Inside E-kur, Ninurta brings in captives and booty; the Anuna marvel, Enlil makes obeisance, and Ninlil praises her warrior son for striking the mountains and rebellious land.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 102–112: captives and booty enter the temple; the Anuna are amazed, Enlil bows, and Ninlil addresses Ninurta admiringly',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-weapons',
    statement: 'Ninurta’s long self-praise recounts mountain warfare, names a series of terrifying weapons and nets, and presents him as an unrivaled storm-warrior whose radiance overwhelms gods and rebellious lands.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 113–151: Ninurta boasts of mountain victories and lists named maces, axes, nets, serpent-like weapons, bow, quiver, spear, shield, and other divine arms',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-ritual-honors',
    statement: 'Ninurta asks Enlil to receive his trophies and weapons, wash and purify his heroic arms, establish a holy dais, set up his chariot, and make captured rulers bow before him; he then proclaims his divine strength and chosenness.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 152–167: requested ritual treatment of trophies, weapons, arms, dais, chariot, captives, and Ninurta’s following self-proclamation',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-nibru-blessing',
    statement: 'Ninurta blesses Nibru as his beloved sanctuary, asking that it rise as high as heaven, become pre-eminent among divine cities, serve as a freshwater well of Sumer, receive the bowing Anuna, and shelter refugees.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 168–174: Ninurta’s blessing of Nibru, its temple, territory, Anuna, birds, and refugees',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ninurta-angim-ninkarnuna-close',
    statement: 'Ninkarnuna prays that Ninurta favor Nibru and E-šumeša and make a lasting favorable pronouncement for the king; Ninurta accepts the prayer, proceeds to E-šumeša, speaks with his wife Ninnibru, and the composition closes by praising his greatness in Enlil’s sanctuary.',
    aboutEntityIds: ['text-ninurta-angim', 'deity-ninurta', 'deity-enlil'],
    claimType: 'Descriptive',
    evidenceClassification: 'AncientSource',
    evidenceLinks: [
      {
        sourceId: 'src-primary-ninurta-angim',
        evidenceRole: 'Supports',
        locator: 'ETCSL 1.6.1 lines 175–208: Ninkarnuna’s prayer, procession to E-šumeša, favorable pronouncement for the king, Ninnibru, and final praise of Ninurta',
      },
    ],
    status: 'Published',
  },

  {
    id: 'claim-ur-long-history',
    statement: 'Archaeological work at Tell el-Muqayyar documents roughly five millennia of occupation at Ur, while historical synthesis identifies the city as one of southern Mesopotamia’s major urban centers.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-penn-ur-city-moon',
        evidenceRole: 'Supports',
        locator: 'Overview: Tell el-Muqayyar and approximately 5,000 years of occupation at Ur',
      },
      {
        sourceId: 'src-crawford-sumer-cities',
        evidenceRole: 'Contextualizes',
        locator: 'Discussion of Ur and the development of southern Mesopotamian cities',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-ziggurat-ur-nammu',
    statement: 'Ur-Nammu constructed the great ziggurat at Ur around 2100 BCE as part of the city’s sacred precinct associated with Nanna/Suen; the monument formed a major element of the Ekišnugal temple complex.',
    aboutEntityIds: ['place-ur', 'deity-nanna'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-met-ur-ziggurat',
        evidenceRole: 'Supports',
        locator: 'Ur-Nammu, the ziggurat at Ur, and the 1920s archaeological investigation of the monument',
      },
      {
        sourceId: 'src-oracc-amgg-nanna',
        evidenceRole: 'Contextualizes',
        locator: 'Nanna/Suen/Sin entry: Ur, Ekišnugal, and the ziggurat of the moon god',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-third-dynasty-capital',
    statement: 'Ur-Nammu founded the Third Dynasty of Ur, and under Ur-Nammu and Shulgi the city became the capital of a territorial state governing much of southern Mesopotamia through extensive royal and administrative institutions.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-van-de-mieroop-history',
        evidenceRole: 'Supports',
        locator: 'Discussion of the Ur III state, Ur-Nammu, Shulgi, and centralized administration',
      },
      {
        sourceId: 'src-crawford-sumer-cities',
        evidenceRole: 'Contextualizes',
        locator: 'Ur III period and the political importance of Ur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-royal-cemetery',
    statement: 'Woolley’s excavations at Ur uncovered roughly 1,800 graves, including sixteen unusually elaborate tombs he designated Royal Tombs; PG 800 is associated with Puabi, whose name and title were preserved on a cylinder seal found with the burial.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-met-ur-royal-graves',
        evidenceRole: 'Supports',
        locator: 'Approximately 1,800 graves, sixteen Royal Tombs, Puabi, PG 800, and rich grave assemblages',
      },
      {
        sourceId: 'src-bm-ur-royal-cemetery-jewellery',
        evidenceRole: 'Contextualizes',
        locator: 'Royal Cemetery jewellery and Woolley excavation context',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-long-distance-trade',
    statement: 'Objects from Ur preserve evidence for long-distance exchange, including lapis lazuli originating in Badakhshan and carnelian reaching Mesopotamia from regions including western India, while Ur participated in wider Persian Gulf exchange networks.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-bm-ur-royal-cemetery-jewellery',
        evidenceRole: 'Supports',
        locator: 'Curatorial discussion of Badakhshan lapis lazuli and carnelian from the western Indian region in Ur jewellery',
      },
      {
        sourceId: 'src-crawford-sumer-cities',
        evidenceRole: 'Contextualizes',
        locator: 'Southern Mesopotamian trade and Persian Gulf exchange involving Dilmun, Magan, and Meluhha',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-old-babylonian-neighborhoods',
    statement: 'Woolley exposed more than fifty houses connected by narrow streets in area AH at Ur, forming the largest contiguous excavated expanse of Old Babylonian housing and preserving unusually detailed evidence for domestic life and under-floor burial.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-penn-ur-city-moon',
        evidenceRole: 'Supports',
        locator: 'Area AH: more than fifty houses, narrow streets, Old Babylonian domestic occupation, and burials beneath house floors',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-scribal-house',
    statement: 'More than two thousand tablets from No. 7 Quiet Street at Ur include administrative, lexical, mathematical, and literary texts and support the interpretation that scribal education could take place within a private house.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-penn-ur-texts-teaching',
        evidenceRole: 'Supports',
        locator: 'No. 7 Quiet Street: more than 2,000 texts and evidence for scribal education in a residential context',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-later-history-nabonidus',
    statement: 'Ur continued to be occupied after the Ur III period; in the first millennium BCE Nabonidus reconstructed the temple of Sin at Ur and reinstated the high-priestess office, while archaeological evidence documents later occupation before the city’s eventual abandonment.',
    aboutEntityIds: ['place-ur', 'deity-nanna'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nanna',
        evidenceRole: 'Supports',
        locator: 'Nanna/Suen/Sin entry: Nabonidus reconstructs the temple of Sin at Ur and reinstates the high-priestess office',
      },
      {
        sourceId: 'src-penn-ur-city-moon',
        evidenceRole: 'Contextualizes',
        locator: 'Long occupation sequence, later levels, and eventual abandonment of Ur',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-woolley-excavations',
    statement: 'From 1922 to 1934 the Penn Museum and British Museum jointly excavated Ur under C. Leonard Woolley, documenting the ziggurat, Royal Cemetery, and extensive domestic areas; renewed international excavation began at the site in 2015.',
    aboutEntityIds: ['place-ur'],
    claimType: 'Historical',
    evidenceClassification: 'ArchaeologicalEvidence',
    evidenceLinks: [
      {
        sourceId: 'src-penn-ur-city-moon',
        evidenceRole: 'Supports',
        locator: '1922–1934 Penn Museum/British Museum excavations and renewed fieldwork beginning in 2015',
      },
      {
        sourceId: 'src-met-ur-ziggurat',
        evidenceRole: 'Contextualizes',
        locator: 'Woolley excavation of the ziggurat beginning in the 1920s',
      },
      {
        sourceId: 'src-met-ur-royal-graves',
        evidenceRole: 'Contextualizes',
        locator: 'Woolley excavation of the Royal Cemetery',
      },
    ],
    status: 'Published',
  },
  {
    id: 'claim-ur-temple-institutional-life',
    statement: 'The cult of Nanna and Ningal at Ur was embedded in royal and institutional life through Ekišnugal, the high-priestess office, the Giparu, offerings, and temple households.',
    aboutEntityIds: ['place-ur', 'deity-nanna', 'deity-ningal'],
    claimType: 'Historical',
    evidenceClassification: 'ScholarlyConsensus',
    evidenceLinks: [
      {
        sourceId: 'src-oracc-amgg-nanna',
        evidenceRole: 'Supports',
        locator: 'Ur cult, high priesthood, offerings, and royal involvement in the cult of Nanna',
      },
      {
        sourceId: 'src-primary-ningal-ur-inscription',
        evidenceRole: 'Supports',
        locator: 'Q003844, lines 5–17: Giparu and Ningal within the sacred complex at Ur',
      },
      {
        sourceId: 'src-crawford-sumer-cities',
        evidenceRole: 'Contextualizes',
        locator: 'Temple institutions and urban religious economy in Sumerian cities',
      },
    ],
    status: 'Published',
  },
];

// ============================================================
// EXPANDED CONTENT SECTIONS
// ============================================================

const cs = (id: string, parentEntityId: string, sectionLabel: string, prose: string, claimIds: string[] = []): ContentSection => ({
  id,
  parentEntityId,
  sectionLabel,
  prose,
  claimIds,
});

export const expandedContentSections: ContentSection[] = [
  // ---------------- PREVIOUSLY MISSING SECTIONS ----------------
  // These ids were referenced from the original Phase 1 seed data
  // (stories.ts / texts.ts / topics.ts) but the ContentSection records
  // were never created, so those pages silently rendered without them.
  // Filling them in here closes that gap as part of this content pass.
  // ---------------- ENUMA ELISH STORY ----------------
  cs('cs-enuma-elish-summary-expanded', 'story-enuma-elish', 'Full Narrative Overview',
    "Enūma eliš opens before heaven and earth are established, with Apsu and Tiamat as primordial waters and the later generations of gods emerging from them. Apsu eventually resolves to destroy the noisy younger gods, although Tiamat initially objects; Ea discovers the plot, subdues Apsu, and kills him. Marduk is then born in Ea's Apsu and magnified as an extraordinary divine figure. Tiamat later organizes war, creates a host of formidable beings, elevates Kingu, and gives him the Tablet of Destinies. Marduk agrees to become the gods' champion only if his authority is made supreme. The assembly tests his command, confirms his kingship, and sends him to battle. Marduk defeats Tiamat, divides and arranges her body as part of cosmic creation, orders the stars, calendar, moon, land, and waters, and later directs the creation of humanity from Kingu's blood so humans can bear the service of the gods. The poem also incorporates Babylon and Esagila into this ordered world and closes with the extended proclamation of Marduk's fifty names.",
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-tiamat-opposes-apsu-destruction',
      'claim-enuma-elish-apsu-ea-conflict',
      'claim-enuma-elish-marduk-birth',
      'claim-enuma-elish-tiamat-kingu-war-preparation',
      'claim-enuma-elish-champion-kingship-condition',
      'claim-enuma-elish-command-test',
      'claim-marduk-enuma-elish-defeats-tiamat',
      'claim-tiamat-body-cosmic-order',
      'claim-enuma-elish-celestial-order',
      'claim-enuma-elish-creation-of-humanity',
      'claim-enuma-elish-babylon-esagila',
      'claim-enuma-elish-fifty-names',
    ]),

  cs('cs-enuma-elish-textual-witness', 'story-enuma-elish', 'Textual Witness and Seven-Tablet Structure',
    "Enūma eliš is an Akkadian Babylonian composition conventionally arranged in seven tablets. The atlas dates the composition broadly to the late second millennium BCE while distinguishing that date from the first-millennium BCE manuscripts through which much of the poem survives. The seven-tablet structure matters because the narrative moves in stages: primordial origins and conflict, the rise and authorization of Marduk, the battle and cosmic ordering, humanity and Babylon, and finally the great naming sequence that closes the work.",
    []),

  cs('cs-enuma-elish-primordial-generations', 'story-enuma-elish', 'Primordial Waters and the Divine Generations',
    "The poem begins before the later cosmos has taken shape. Apsu and Tiamat appear as primordial waters whose waters mingle, and successive divine generations emerge. Tiamat is described as the one who bore them all. This opening presents her first as a generative primordial figure rather than as an enemy, an important distinction because her role changes only as conflict develops.",
    ['claim-tiamat-enuma-elish-primordial-waters']),

  cs('cs-enuma-elish-apsu-tiamat-ea', 'story-enuma-elish', "Apsu's Plot, Tiamat's Objection, and Ea's Victory",
    "The younger gods disturb Apsu with their noise and activity. Apsu resolves to destroy them, but Tiamat initially objects and urges restraint rather than annihilation. Ea nevertheless learns of Apsu's plan, uses an incantation to overwhelm him with sleep, binds him, and kills him. The poem therefore gives the first violent escalation to Apsu's plan and Ea's counterattack; Tiamat's later war should not be collapsed backward into the opening of the epic.",
    [
      'claim-tiamat-opposes-apsu-destruction',
      'claim-enuma-elish-apsu-ea-conflict',
    ]),

  cs('cs-enuma-elish-marduk-birth', 'story-enuma-elish', 'The Birth and Magnification of Marduk',
    "After Ea establishes his dwelling on the defeated Apsu, Marduk is conceived and born there to Ea and Damkina. The poem immediately magnifies him: his form, sight, hearing, radiance, and strength are described as surpassing, and Anu further exalts him and entrusts winds to him. Marduk's later victory is therefore prepared narratively long before the divine assembly formally selects him as champion.",
    ['claim-enuma-elish-marduk-birth']),

  cs('cs-enuma-elish-tiamat-kingu-expanded', 'story-enuma-elish', 'Tiamat, Kingu, the War Host, and the Tablet of Destinies',
    "After Apsu's death, the conflict changes form. Tiamat responds to pressure from the gods aligned with her by creating a formidable war host and a set of monstrous combatants. She elevates Kingu as commander and spouse, gives him authority over her forces, and fastens the Tablet of Destinies to him. The tablet functions here within the politics of military command and legitimacy in Tiamat's coalition.",
    ['claim-enuma-elish-tiamat-kingu-war-preparation']),

  cs('cs-enuma-elish-champion-condition', 'story-enuma-elish', 'Marduk Accepts the Challenge and Demands Supreme Authority',
    "Ea and Anu prove unable to confront Tiamat successfully, and Marduk comes forward as the potential avenger. He does not accept the role without conditions. Marduk requires the gods to convene an assembly, exalt his destiny, and grant his spoken command an authority that cannot be altered. The poem thus makes supreme kingship part of the bargain by which he becomes champion.",
    ['claim-enuma-elish-champion-kingship-condition']),

  cs('cs-enuma-elish-command-test', 'story-enuma-elish', "The Divine Assembly and the Test of Marduk's Command",
    "The assembled gods feast, decree Marduk's destiny, and seat him to receive kingship. They then stage a direct test of the authority they have granted him: a constellation is placed before him, disappears at his command, and reappears at his next command. The gods celebrate the result, acclaim him as king, and equip him with royal and martial insignia before sending him against Tiamat.",
    [
      'claim-enuma-elish-command-test',
      'claim-marduk-enuma-elish-kingship',
    ]),

  cs('cs-enuma-elish-battle', 'story-enuma-elish', 'The Battle with Tiamat',
    "Marduk arms himself with bow, arrow, club, net, storm-flood, and an array of winds. In the confrontation he traps Tiamat with the net and drives the winds against her so that she cannot close herself against them. He shoots her with an arrow, defeats and kills her, and then subdues the forces that had fought beside her. The text presents this as an armed divine battle, not merely as an abstract metaphor for weather.",
    [
      'claim-marduk-enuma-elish-winds',
      'claim-marduk-enuma-elish-defeats-tiamat',
      'claim-tiamat-enuma-elish-defeated-by-marduk',
    ]),

  cs('cs-enuma-elish-cosmic-order', 'story-enuma-elish', "Tiamat's Body and the Ordering of the Cosmos",
    "Marduk's victory becomes the material basis for a new stage of creation. He divides Tiamat's body, establishes the heavens, and continues arranging her body into features of the ordered world. Later passages connect parts of her body with major waters, mountains, and the earth. Enūma eliš therefore links kingship and combat to cosmic organization: the victorious champion becomes the architect of order.",
    [
      'claim-tiamat-body-cosmic-order',
      'claim-marduk-enuma-elish-creation',
    ]),

  cs('cs-enuma-elish-celestial-babylon', 'story-enuma-elish', 'Celestial Order, Babylon, and Esagila',
    "Tablet V extends Marduk's ordering work into the heavens. He establishes divine stations and constellations, divides the year, and regulates the moon's cycle. The poem then brings sacred geography into the same ordered system: Marduk names Babylon as the place of assembly and festival, and after humanity is created the Anunnaki build Babylon and raise Esagila. The epic's Babylon is therefore part of its theological world-ordering narrative, while archaeology and later historical evidence independently attest Esagila as the central temple of Marduk in the actual city.",
    [
      'claim-enuma-elish-celestial-order',
      'claim-enuma-elish-babylon-esagila',
      'claim-babylon-esagila-etemenanki',
    ]),

  cs('cs-enuma-elish-humanity-expanded', 'story-enuma-elish', "Kingu's Blood and the Creation of Humanity",
    "In Tablet VI Marduk proposes creating human beings so that the toil and service formerly carried by the gods can be placed on humanity and the gods can rest. The assembly identifies Kingu as the instigator of the rebellion. Kingu is bound and punished, and Ea creates mankind from his blood in accordance with Marduk's plan. The text therefore distinguishes Marduk's planning and sovereign authority from Ea's direct act of creating humanity.",
    [
      'claim-enuma-elish-creation-of-humanity',
      'claim-enuma-elish-kingu-blood-humanity',
    ]),

  cs('cs-enuma-elish-fifty-names-significance', 'story-enuma-elish', 'The Fifty Names, Evidence Limits, and Historical Significance',
    "The poem does not end with the creation of humanity. The closing movement begins a long proclamation of Marduk's names at the end of Tablet VI and continues through Tablet VII, assigning him titles and functions that summarize and enlarge his supremacy. The text itself presents these as the fifty names and instructs future generations to remember and teach them. Historically, scholars connect this literary elevation of Marduk with the rise of Babylon and the developing supremacy of its patron god. That historical interpretation should remain distinct from the epic's own narrative claims: Enūma eliš is direct evidence for what this Babylonian composition says about Marduk, not proof that the same hierarchy existed unchanged in every earlier Mesopotamian period.",
    [
      'claim-enuma-elish-fifty-names',
      'claim-babylon-marduk-elevation',
      'claim-marduk-patron-babylon',
    ]),
  cs('cs-descent-summary-expanded', 'story-descent-of-inanna', 'Full Narrative Overview',
    "Inanna sets her mind on the underworld, takes her divine powers and full regalia, and instructs Ninshubur what to do if she does not return. At the underworld gates she states that she has come in connection with the funeral rites of Gugalana, Ereshkigal's husband. Neti admits her only under Ereshkigal's conditions: at seven successive gates Inanna loses her regalia. The seven Anuna judge her, she is killed, and her corpse is hung on a hook. After three days and three nights Ninshubur carries out Inanna's instructions and eventually reaches Enki, who creates the kur-jara and gala-tura. They restore Inanna with the life-giving plant and water. Her return nevertheless requires a substitute. Demons accompany her upward, she protects loyal mourners from being taken, and Dumuzi is finally given into their hands. Dumuzi appeals to Utu and briefly escapes, while the damaged ending preserves a half-year arrangement involving Dumuzi and his sister.",
    [
      'claim-inanna-descent-preparation-ninshubur',
      'claim-inanna-descent-seven-gates',
      'claim-inanna-descent-death-hook',
      'claim-inanna-descent-ninshubur-appeals',
      'claim-inanna-descent-enki-rescue-beings',
      'claim-inanna-descent-restoration-substitute',
      'claim-inanna-descent-return-demons',
      'claim-inanna-dumuzi-substitute',
      'claim-inanna-descent-dumuzi-utu-escape',
      'claim-inanna-descent-half-year-geshtinanna',
    ]),

  cs('cs-descent-textual-witness', 'story-descent-of-inanna', 'Textual Witness and Preservation',
    "Inanna's Descent to the Netherworld is a Sumerian literary composition preserved principally in Old Babylonian-period manuscript copies. The surviving story is reconstructed from multiple witnesses and fragments rather than from one completely intact original tablet. That matters especially near the end, where damaged lines make parts of the Dumuzi and sister arrangement less secure than the well-preserved seven-gate sequence.",
    []),

  cs('cs-descent-preparation-ninshubur', 'story-descent-of-inanna', "Inanna's Preparation and Instructions to Ninshubur",
    "Before the descent, Inanna takes the seven divine powers and dresses herself in a set of named regalia, including beads, the pala garment of ladyship, a golden ring, and the lapis-lazuli measuring rod and line. She then instructs her minister Ninshubur to mourn publicly and seek help from Enlil, Nanna, and finally Enki if she does not return. The rescue sequence is therefore prepared before Inanna ever crosses the first gate.",
    ['claim-inanna-descent-preparation-ninshubur']),

  cs('cs-descent-seven-gates-expanded', 'story-descent-of-inanna', 'The Seven Gates and the Loss of Regalia',
    "Ereshkigal orders Neti to bolt the seven gates and admit Inanna through them one at a time. At each gate an item of Inanna's clothing, jewelry, or divine regalia is removed. The text repeatedly tells her that a power or rite of the underworld has been fulfilled and that she must not protest. By the seventh gate, the visible signs of her status and authority have been stripped away.",
    ['claim-inanna-descent-seven-gates', 'claim-inanna-descent-power']),

  cs('cs-descent-death-hook', 'story-descent-of-inanna', "Ereshkigal, the Judges, Inanna's Death, and the Hook",
    "After the gate sequence, Inanna reaches the underworld court. The seven Anuna act as judges and render their decision against her. The composition then describes the look of death, speech of anger, and shout of guilt directed at Inanna. She becomes a corpse, and her body is hung on a hook. This is not merely symbolic loss of rank: the narrative explicitly presents her as dead before the rescue begins.",
    ['claim-inanna-ereshkigal-sister', 'claim-inanna-descent-death-hook', 'claim-anunnaki-underworld-judges-later']),

  cs('cs-descent-ninshubur-appeals', 'story-descent-of-inanna', "Ninshubur's Lament and Appeals to the Gods",
    "Three days and three nights later, Ninshubur fulfills the instructions she was given. She laments, performs acts of mourning, and appeals first to Enlil and then to Nanna. Both refuse to reverse what has happened in the underworld. Ninshubur then travels to Enki at Eridu, and Enki chooses to intervene.",
    ['claim-inanna-descent-ninshubur-appeals']),

  cs('cs-descent-enki-rescue', 'story-descent-of-inanna', "Enki's Rescue Plan: the Kur-jara and Gala-tura",
    "Enki creates two unusual beings, the kur-jara and gala-tura, from dirt taken from his fingernails. He gives one the life-giving plant and the other the life-giving water and instructs them how to pass into the underworld and respond to Ereshkigal. They obtain the corpse from the hook, apply the life-giving substances, and Inanna rises.",
    ['claim-inanna-descent-enki-rescue-beings']),

  cs('cs-descent-restoration-substitute', 'story-descent-of-inanna', 'Restoration and the Requirement of a Substitute',
    "Restoration does not erase the rules of the underworld. As Inanna prepares to ascend, the Anuna seize her and declare that no one returns from the underworld without consequence. If Inanna is to leave, she must provide someone else in her place. The substitute requirement therefore belongs directly to her release rather than being a later punishment added after she reaches the surface.",
    ['claim-inanna-descent-restoration-substitute', 'claim-inanna-dumuzi-substitute']),

  cs('cs-descent-return-demons', 'story-descent-of-inanna', 'Return from the Underworld and the Demons',
    "Inanna leaves surrounded by underworld demons who demand a substitute. When they propose Ninshubur, Inanna refuses because Ninshubur faithfully mourned and sought help for her. She likewise refuses to surrender other figures encountered in mourning clothes. The repeated refusals establish a contrast with the encounter that follows at Kulaba.",
    ['claim-inanna-descent-return-demons']),

  cs('cs-descent-dumuzi-kulaba', 'story-descent-of-inanna', 'Dumuzi at Kulaba and His Designation',
    "At the great apple tree in the plain of Kulaba, Dumuzi appears clothed magnificently and seated magnificently on a throne. The demons seize him. Inanna directs the look and speech of condemnation toward him and gives Dumuzi the shepherd into their hands. This is the decisive moment in which the substitute requirement becomes attached to Dumuzi.",
    ['claim-inanna-dumuzi-substitute', 'claim-dumuzi-descent-shepherd-seized']),

  cs('cs-descent-dumuzi-utu', 'story-descent-of-inanna', "Dumuzi's Appeal to Utu and Attempted Escape",
    "Dumuzi does not simply disappear into the underworld after his seizure. He raises his hands to Utu and appeals to him as a relative by marriage. Utu responds by transforming Dumuzi's hands and feet, enabling him to escape the demons temporarily. The surviving text then becomes increasingly fragmentary as the pursuit continues.",
    ['claim-inanna-descent-dumuzi-utu-escape']),

  cs('cs-descent-half-year', 'story-descent-of-inanna', 'Geshtinanna and the Half-Year Arrangement',
    "The final portion of the composition is damaged, so this episode requires more caution than the earlier narrative. The surviving lines refer to Dumuzi and his sister in an alternating half-year arrangement: when one is required to stay, the other can be released. Wider Mesopotamian tradition identifies Geshtinanna as Dumuzi's sister, supporting the usual identification, but the damaged wording should not be presented as though every detail of the closing arrangement were perfectly preserved.",
    ['claim-inanna-descent-half-year-geshtinanna', 'claim-dumuzi-geshtinanna-sister']),

  cs('cs-descent-evidence-significance', 'story-descent-of-inanna', 'Evidence Limits, Regalia Interpretation, and Significance',
    "The composition directly attests the descent, the seven gates, the removal of Inanna's regalia, her judgment and death, Ninshubur's rescue appeals, Enki's intervention, restoration, the substitute requirement, and Dumuzi's seizure. Modern scholarship goes further when it interprets the stripping of regalia as a structured dismantling of status and identity; that interpretation is persuasive but should remain labeled as interpretation. The damaged closing lines likewise require caution. Read on its own terms, Inanna's Descent is a major Sumerian exploration of divine authority, underworld rules, loyalty, death, restoration, and substitution rather than a simple universal story of seasonal death and rebirth.",
    ['claim-inanna-descent-seven-gates', 'claim-inanna-descent-power', 'claim-inanna-descent-half-year-geshtinanna']),
  cs('cs-atrahasis-flood-summary-expanded', 'story-atrahasis-flood', 'Full Narrative Overview',
    "Atrahasis is more than a flood story. It begins with lesser gods forced to perform exhausting labor until they revolt. Humanity is then created to assume that labor. Human numbers increase, however, and their noise disturbs Enlil. Attempts to reduce them through plague, drought, and famine repeatedly fail because Enki/Ea helps Atrahasis and humanity survive. The gods eventually decide on a flood. Enki/Ea warns Atrahasis indirectly through a reed wall and instructs him to build a vessel. Atrahasis survives, while the gods themselves suffer from the destruction and the loss of human offerings. After the flood, sacrifice, divine conflict, and negotiation lead not to human immortality but to new controls on reproduction and population growth.",
    [
      'claim-atrahasis-divine-labor-revolt',
      'claim-atrahasis-human-creation',
      'claim-enlil-flood-instigator',
      'claim-atrahasis-plague-intervention',
      'claim-atrahasis-drought-famine',
      'claim-atrahasis-boat-flood-survival',
      'claim-atrahasis-gods-hunger-sacrifice',
      'claim-atrahasis-enlil-ea-aftermath',
      'claim-atrahasis-post-flood-population-controls',
    ]),

  cs('cs-atrahasis-flood-textual-structure', 'story-atrahasis-flood', 'Textual Witness and Three-Tablet Structure',
    "The best-preserved form of Atrahasis belongs to the Old Babylonian period and is conventionally organized across three tablets. Tablet I moves from divine labor and revolt to the creation of humanity. Tablet II develops the population and noise crisis and the escalating attempts to reduce humanity. Tablet III contains the flood and its aftermath. The surviving composition is reconstructed from multiple manuscripts and fragments, so the atlas distinguishes the ancient narrative from modern editorial reconstruction.",
    [
      'claim-gilgamesh-atrahasis-distinct-recensions',
      'claim-atrahasis-divine-labor-revolt',
    ]),

  cs('cs-atrahasis-flood-divine-labor', 'story-atrahasis-flood', "The Lesser Gods' Labor and Revolt",
    "Atrahasis opens before humanity exists. Lesser gods perform exhausting work for the senior gods, including labor connected with the great waterways. Their burden becomes intolerable and they revolt, creating a crisis within the divine order. Human creation is introduced as the solution to this labor dispute.",
    [
      'claim-atrahasis-divine-labor-revolt',
      'claim-creation-humanity-labor-relief',
    ]),

  cs('cs-atrahasis-flood-human-creation', 'story-atrahasis-flood', 'Creation of Humanity to Bear the Labor',
    "The divine solution is to create humans who can carry the work previously imposed on the lesser gods. The birth-goddess is central to the procedure, while Enki/Ea provides the plan. Clay is combined with the flesh and blood of a slain god, linking human life to both earth and divine material. In this composition, humanity therefore enters the cosmic order with a defined labor function.",
    [
      'claim-atrahasis-human-creation',
      'claim-creation-humanity-labor-relief',
      'claim-atrahasis-nintu-mami-distinction',
    ]),

  cs('cs-atrahasis-flood-noise-crisis', 'story-atrahasis-flood', 'Human Multiplication and the Noise Crisis',
    "Human beings multiply after their creation. Their growing numbers and noise eventually prevent Enlil from resting. This is the specific narrative problem that drives the successive attempts to reduce the human population and ultimately leads to the flood.",
    ['claim-enlil-flood-instigator']),

  cs('cs-atrahasis-flood-plague', 'story-atrahasis-flood', "Plague and Enki's Intervention",
    "The flood is not Enlil's first response. An earlier attempt to reduce humanity takes the form of plague. Enki/Ea advises Atrahasis how people can respond to the divine measure, frustrating the intended population reduction. The population eventually recovers, and the basic conflict returns.",
    [
      'claim-atrahasis-plague-intervention',
      'claim-enlil-enki-contrasting-role',
    ]),

  cs('cs-atrahasis-flood-drought-famine', 'story-atrahasis-flood', 'Drought, Famine, and Escalation',
    "The divine response then becomes more severe. Atrahasis describes drought, agricultural failure, and famine as further attempts to reduce humanity. Enki/Ea continues to work on humanity's behalf, but Enlil responds to the failure of the earlier measures by pressing toward a final and much more destructive solution.",
    [
      'claim-atrahasis-drought-famine',
      'claim-enlil-flood-instigator',
      'claim-enlil-enki-contrasting-role',
    ]),

  cs('cs-atrahasis-flood-assembly-expanded', 'story-atrahasis-flood', 'The Divine Assembly and the Flood Decision',
    "The flood decision is made within the divine assembly rather than by Enlil acting completely alone. Enlil remains the principal force behind the destruction, but the assembly deliberates and consents. The episode therefore combines strong individual divine authority with collective decision-making.",
    [
      'claim-enlil-flood-instigator',
      'claim-enlil-assembly-deliberation',
      'claim-divine-council-collective-decision',
    ]),

  cs('cs-atrahasis-flood-reed-wall-boat', 'story-atrahasis-flood', "Enki's Reed-Wall Warning and the Boat",
    "Bound by the divine decision, Enki/Ea avoids issuing a straightforward public warning. Instead he addresses a reed wall so that Atrahasis can receive the message indirectly. Atrahasis is instructed to construct a vessel and prepare for the coming catastrophe. This indirect warning becomes one of the most distinctive scenes shared with the later Gilgamesh flood tradition.",
    [
      'claim-enlil-enki-contrasting-role',
      'claim-atrahasis-boat-flood-survival',
      'claim-flood-shared-motif',
      'claim-flood-gilgamesh-atrahasis-close-parallel',
    ]),

  cs('cs-atrahasis-flood-storm-distress', 'story-atrahasis-flood', "The Flood and the Gods' Distress",
    "Atrahasis survives inside the vessel while the flood devastates humanity outside it. The poem does not portray the gods as emotionally untouched by the result. Divine figures lament the destruction, and the disappearance of humanity also means the disappearance of the offerings on which the gods had depended. The catastrophe therefore creates a crisis for gods as well as humans.",
    [
      'claim-atrahasis-boat-flood-survival',
      'claim-atrahasis-gods-hunger-sacrifice',
    ]),

  cs('cs-atrahasis-flood-sacrifice-aftermath', 'story-atrahasis-flood', "Sacrifice, Enlil's Anger, and Enki's Rebuke",
    "After the flood, Atrahasis offers sacrifice and the gods gather around the offering. Enlil then discovers that a human has survived and reacts angrily. Enki/Ea responds by defending his intervention and challenging the indiscriminate destruction produced by the flood. The conflict is resolved through negotiation over how humanity should be controlled in the future.",
    [
      'claim-atrahasis-gods-hunger-sacrifice',
      'claim-atrahasis-enlil-ea-aftermath',
      'claim-enlil-enki-contrasting-role',
    ]),

  cs('cs-atrahasis-flood-population-controls', 'story-atrahasis-flood', 'Post-Flood Population Controls',
    "Atrahasis does not conclude by granting its survivor immortality. Instead, the gods establish new mechanisms intended to prevent unlimited human population growth. The closing settlement includes women who will not bear children, infant mortality associated with Pasittu, and women placed in religious statuses that prevent childbirth. The problem introduced by human multiplication is therefore answered with continuing demographic limits rather than another universal flood.",
    ['claim-atrahasis-post-flood-population-controls']),

  cs('cs-atrahasis-flood-gilgamesh-significance', 'story-atrahasis-flood', 'Relationship to Gilgamesh, Evidence Limits, and Significance',
    "Atrahasis is fundamental to the history of Mesopotamian flood literature because Tablet XI of the later Standard Babylonian Epic of Gilgamesh preserves exceptionally close parallels, above all the reed-wall warning and boat instructions. Scholars generally regard the Gilgamesh flood episode as drawing on the Atrahasis tradition, but literary dependence is a scholarly conclusion rather than a statement made by either ancient composition. Atrahasis remains especially important because it preserves the larger causal framework missing from the Gilgamesh retelling: divine labor, human creation, overpopulation, repeated population-reduction measures, flood, and post-flood demographic controls.",
    [
      'claim-flood-shared-motif',
      'claim-flood-gilgamesh-atrahasis-close-parallel',
      'claim-gilgamesh-flood-draws-on-atrahasis',
      'claim-gilgamesh-atrahasis-distinct-recensions',
      'claim-atrahasis-post-flood-population-controls',
    ]),
  cs('cs-gilgamesh-flood-summary-expanded', 'story-gilgamesh-flood', 'Full Narrative Overview',
    "Within the wider Epic of Gilgamesh, the flood is a story told by Utnapishtim in response to Gilgamesh's search for escape from death. Utnapishtim recounts how the great gods resolved on a flood and how Ea warned him indirectly through a reed wall. He was instructed to abandon his house and build a great vessel. The boat was constructed with equal major dimensions, multiple internal levels, compartments, and extensive bitumen sealing. Utnapishtim loaded his household and kin, craftsmen, possessions, and living creatures. Shamash announced the appointed time to enter. A violent storm overwhelmed the land for six days and seven nights and terrified even the gods. After the storm, the vessel came to rest on Mount Nimuš. Utnapishtim released a dove, a swallow, and a raven in sequence, then offered sacrifice. Enlil was furious that a human had survived; Ea rebuked the indiscriminate flood. Enlil finally granted Utnapishtim and his wife immortal status. For Gilgamesh, however, this remains an exceptional divine grant rather than a method he can reproduce.",
    ['claim-gilgamesh-flood-quest-frame','claim-gilgamesh-flood-reed-wall-warning','claim-gilgamesh-flood-boat-design','claim-gilgamesh-flood-passengers-cargo','claim-utu-gilgamesh-appoint-time','claim-gilgamesh-flood-divine-fear','claim-gilgamesh-flood-storm-landing-birds','claim-gilgamesh-flood-sacrifice-gods','claim-gilgamesh-flood-sacrifice-immortality']),

  cs('cs-gilgamesh-flood-tablet-xi-frame', 'story-gilgamesh-flood', 'Tablet XI and the Story Within the Epic',
    "The flood account is embedded inside Tablet XI of the Standard Babylonian Epic of Gilgamesh. Gilgamesh reaches Utnapishtim only after Enkidu's death has driven him into a search for a way around human mortality. The flood narrative therefore functions both as a Mesopotamian deluge tradition and as part of the epic's larger meditation on death and the rarity of immortal life.",
    []),

  cs('cs-gilgamesh-flood-quest-frame', 'story-gilgamesh-flood', "Gilgamesh's Search for Immortality and Utnapishtim's Answer",
    "Gilgamesh asks Utnapishtim how he came to obtain life among the gods. Utnapishtim's answer is the flood story itself. This framing is essential: the account explains the exceptional circumstances under which Utnapishtim escaped ordinary human mortality while preparing the lesson that Gilgamesh cannot simply repeat what happened to him.",
    ['claim-gilgamesh-flood-quest-frame']),

  cs('cs-gilgamesh-flood-reed-wall-expanded', 'story-gilgamesh-flood', "Ea's Reed-Wall Warning",
    "Utnapishtim identifies Shuruppak as the city in which the great gods resolved to send the flood. Ea addresses a reed wall so that Utnapishtim can receive the warning indirectly. The message tells him to abandon his house, build a vessel, reject possessions in favor of life, and preserve living beings. This indirect-warning device is one of the closest points of contact with the earlier Atrahasis tradition.",
    ['claim-gilgamesh-flood-reed-wall-warning','claim-flood-gilgamesh-atrahasis-close-parallel']),

  cs('cs-gilgamesh-flood-boat-design', 'story-gilgamesh-flood', 'The Boat: Design, Construction, and Sealing',
    "Tablet XI gives an elaborate construction account rather than merely saying that Utnapishtim built a generic boat. The vessel's major dimensions are made equal, its interior is divided into multiple levels and compartments, and large quantities of bitumen or pitch are used to seal it. Workers participate in the construction. These details distinguish the Tablet XI vessel from later familiar depictions of a long wooden ark.",
    ['claim-gilgamesh-flood-boat-design']),

  cs('cs-gilgamesh-flood-passengers-time', 'story-gilgamesh-flood', "Family, Craftsmen, Living Creatures, and Shamash's Appointed Time",
    "Once the vessel is ready, Utnapishtim loads his family and kin, craftsmen, possessions, and the living creatures or seed of living things intended to survive. Shamash then establishes the appointed time and gives the sign for Utnapishtim to enter the vessel. Utnapishtim boards and the entrance is secured as the threatening weather begins.",
    ['claim-gilgamesh-flood-passengers-cargo','claim-utu-gilgamesh-appoint-time']),

  cs('cs-gilgamesh-flood-storm-divine-fear', 'story-gilgamesh-flood', "The Flood Storm and the Gods' Fear",
    "The flood is described as a devastating divine storm rather than a slow rise of water. Darkness, wind, rain, and destructive forces overwhelm the land. Tablet XI emphasizes the scale of the catastrophe by portraying even the gods as frightened by what has been unleashed: they retreat from the deluge and lament the destruction. The storm continues for six days and seven nights before the sea grows calm.",
    ['claim-gilgamesh-flood-divine-fear','claim-gilgamesh-flood-storm-landing-birds']),

  cs('cs-gilgamesh-flood-mount-birds', 'story-gilgamesh-flood', 'Mount Nimuš and the Dove, Swallow, and Raven',
    "After the storm ceases, Utnapishtim's vessel grounds on Mount Nimuš. He then releases three birds in sequence. The dove returns because it finds no resting place; the swallow likewise returns; the raven finds the changed conditions suitable and does not return in the same way. The bird sequence tests whether the floodwaters have fallen sufficiently.",
    ['claim-gilgamesh-flood-storm-landing-birds']),

  cs('cs-gilgamesh-flood-sacrifice-gods', 'story-gilgamesh-flood', 'Sacrifice and the Return of the Gods',
    "After the landing and bird test, Utnapishtim leaves the vessel and offers sacrifice and libation on the mountain. The gods are drawn to the offering. This scene marks the transition from survival to divine reckoning: the storm is over, ritual exchange resumes, and the gods must confront the fact that a human being survived.",
    ['claim-gilgamesh-flood-sacrifice-gods','claim-gilgamesh-flood-sacrifice-immortality']),

  cs('cs-gilgamesh-flood-enlil-ea', 'story-gilgamesh-flood', "Enlil's Anger and Ea's Rebuke",
    "Enlil reacts with anger when he discovers that a human survived. Ea answers by criticizing the scale of the flood and arguing for more discriminating punishments rather than indiscriminate destruction. This divine dispute should not be confused with the distinct post-flood population-control settlement preserved in Atrahasis.",
    ['claim-gilgamesh-flood-sacrifice-immortality']),

  cs('cs-gilgamesh-flood-immortality', 'story-gilgamesh-flood', 'Utnapishtim and His Wife Receive Immortality',
    "The Gilgamesh version ends the flood episode in a way that must be kept distinct from Atrahasis. Enlil blesses Utnapishtim and his wife and grants them a divine-like immortal status. They are then settled far away. Utnapishtim presents this as an exceptional outcome produced by a unique divine decision, not a general technique by which Gilgamesh can become immortal.",
    ['claim-gilgamesh-flood-sacrifice-immortality']),

  cs('cs-gilgamesh-flood-atrahasis-expanded', 'story-gilgamesh-flood', 'Relationship to Atrahasis: Parallels and Differences',
    "Tablet XI preserves exceptionally close parallels with the earlier Atrahasis flood tradition, especially the reed-wall warning and boat instructions. Assyriologists therefore generally understand the Gilgamesh flood episode as drawing on Atrahasis. The two compositions nevertheless have distinct textual histories and different narrative purposes. Atrahasis embeds the flood within divine labor, human creation, population growth, repeated reduction measures, and post-flood demographic controls. Gilgamesh embeds the flood inside a hero's quest about mortality. Most importantly, the immortalization of Utnapishtim and his wife belongs to Gilgamesh, whereas Atrahasis concludes with demographic controls rather than the survivor becoming immortal.",
    ['claim-flood-shared-motif','claim-flood-gilgamesh-atrahasis-close-parallel','claim-gilgamesh-flood-draws-on-atrahasis','claim-gilgamesh-atrahasis-distinct-recensions','claim-atrahasis-post-flood-population-controls']),

  cs('cs-gilgamesh-flood-evidence-significance', 'story-gilgamesh-flood', 'Mortality, Evidence Limits, and Significance',
    "The core narrative claims in this profile come from Tablet XI itself: the reed-wall warning, construction and loading of the vessel, the appointed time, the six-day and seven-night storm, divine fear, Mount Nimuš, the three-bird sequence, sacrifice, the Enlil-Ea dispute, and the exceptional immortality of Utnapishtim and his wife. The conclusion that this episode draws literarily on Atrahasis is a scholarly judgment based on close textual parallels and should remain labeled as such. Within the Epic of Gilgamesh, Utnapishtim embodies the exception that proves the rule confronting Gilgamesh: immortal life was bestowed by a unique divine act, while ordinary human beings remain mortal.",
    ['claim-gilgamesh-flood-reed-wall-warning','claim-gilgamesh-flood-boat-design','claim-gilgamesh-flood-passengers-cargo','claim-gilgamesh-flood-divine-fear','claim-gilgamesh-flood-storm-landing-birds','claim-gilgamesh-flood-sacrifice-gods','claim-gilgamesh-flood-sacrifice-immortality','claim-gilgamesh-flood-draws-on-atrahasis']),
  cs('cs-enki-ninhursag-summary-expanded', 'story-enki-ninhursag', 'Full Narrative Overview',
    "Enki and Ninhursag unfolds in several distinct movements rather than as a simple paradise story. It begins in idealized Dilmun, where fresh water transforms the landscape. A repeated sequence of divine generation follows, eventually reaching Uttu. The Uttu episode leads into the growth of eight plants, which Enki eats. Ninhursag curses him and withdraws, Enki becomes physically afflicted, a fox intervenes in the crisis, and Ninhursag finally returns. The conclusion pairs eight bodily afflictions with eight divine births and then assigns destinies to the newly brought-forth deities.",
    [
      'claim-enki-ninhursag-dilmun-setting',
      'claim-enki-ninhursag-divine-birth-sequence',
      'claim-enki-ninhursag-manuscript-variation',
      'claim-enki-ninhursag-uttu-warning',
      'claim-enki-ninhursag-uttu-plants',
      'claim-enki-ninhursag-plants-curse',
      'claim-enki-ninhursag-fox-return',
      'claim-enki-ninhursag-eight-healing-deities',
      'claim-enki-ninhursag-healing-destinies',
    ]),

  cs('cs-enki-ninhursag-textual-witness', 'story-enki-ninhursag', 'Textual Witness and Manuscript Variation',
    "The story survives as a Sumerian literary composition known from Old Babylonian copies. Its manuscript evidence is important because not every witness preserves the divine-generation sequence identically. The atlas therefore distinguishes the principal sequence from an additional passage that inserts Ninimma before Uttu instead of flattening the witnesses into one supposedly uniform genealogy.",
    [
      'claim-enki-ninhursag-divine-birth-sequence',
      'claim-enki-ninhursag-manuscript-variation',
    ]),

  cs('cs-enki-ninhursag-dilmun-beginning', 'story-enki-ninhursag', 'Dilmun at the Beginning',
    "The composition opens by repeatedly presenting Dilmun as pure, pristine, and exceptional. This description establishes an idealized literary setting before the later conflicts involving divine generation, plants, curse, illness, and restoration.",
    ['claim-enki-ninhursag-dilmun-setting']),

  cs('cs-enki-ninhursag-fresh-water', 'story-enki-ninhursag', 'Fresh Water and the Transformation of Dilmun',
    "Dilmun is not presented merely as an already completed paradise. In the opening movement, fresh water is supplied and the landscape becomes productive: fields, grain, and urban prosperity can flourish. The transformation is therefore part of the narrative action itself.",
    ['claim-enki-ninhursag-dilmun-setting']),

  cs('cs-enki-ninhursag-first-birth', 'story-enki-ninhursag', 'Ninhursag and the First Divine Birth',
    "The generational movement begins with Ninhursag giving birth to Ninsar. This first birth establishes the repeated pattern through which later generations emerge and prepares the sequence that eventually reaches Uttu.",
    ['claim-enki-ninhursag-divine-birth-sequence']),

  cs('cs-enki-ninhursag-generational-sequence', 'story-enki-ninhursag', 'The Repeated Generational Sequence',
    "The principal sequence continues from Ninsar to Ninkura and then to Uttu. One surviving manuscript passage preserves an expanded version containing Ninimma before Uttu. Treating that difference explicitly is important because the textual witnesses themselves preserve variation.",
    [
      'claim-enki-ninhursag-divine-birth-sequence',
      'claim-enki-ninhursag-manuscript-variation',
    ]),

  cs('cs-enki-ninhursag-uttu-warning', 'story-enki-ninhursag', 'Uttu and the Warning',
    "Uttu is not introduced simply as another name in the birth sequence. Before Enki approaches her, the composition includes a warning and instructions concerning how she should respond to him. This episode creates an important transition between the generational sequence and the later plant narrative.",
    ['claim-enki-ninhursag-uttu-warning']),

  cs('cs-enki-ninhursag-uttu-plants', 'story-enki-ninhursag', 'Uttu and the Origin of the Eight Plants',
    "The encounter involving Uttu leads into the plant episode. Ninhursag intervenes after Enki's approach to Uttu, and the narrative subsequently describes eight plants growing. This connects divine generation, sexuality, vegetation, and the later transgression in one continuous literary sequence.",
    ['claim-enki-ninhursag-uttu-plants']),

  cs('cs-enki-ninhursag-plants-curse-expanded', 'story-enki-ninhursag', "Enki Eats the Plants and Ninhursag's Curse",
    "Enki has the eight plants identified and eats them. Ninhursag responds by cursing him and declaring that she will no longer look upon him with a life-giving eye. The act transforms the plant episode into the bodily crisis that drives the final movement of the composition.",
    ['claim-enki-ninhursag-plants-curse']),

  cs('cs-enki-ninhursag-fox-return', 'story-enki-ninhursag', "The Fox and Ninhursag's Return",
    "After Ninhursag withdraws, the gods are unable to resolve Enki's condition. The narrative introduces a fox who undertakes to bring her back. The surviving story then moves to Ninhursag's return and the beginning of the healing sequence, making the fox an important transitional figure rather than an incidental detail.",
    ['claim-enki-ninhursag-fox-return']),

  cs('cs-enki-ninhursag-eight-healings', 'story-enki-ninhursag', "Enki's Eight Afflictions and the Healing Deities",
    "Ninhursag asks Enki where he is suffering, and the text proceeds through eight afflicted body parts. In response to those afflictions she brings forth eight deities. The healing scene is therefore highly structured: bodily disorder is answered through a corresponding sequence of divine births.",
    [
      'claim-ninhursag-healing-sequence',
      'claim-enki-ninhursag-eight-healing-deities',
    ]),

  cs('cs-enki-ninhursag-healing-destinies', 'story-enki-ninhursag', 'The Destinies of the Eight New Deities',
    "The final births are not merely a mechanism for curing Enki. The composition assigns destinies or functions to the newly brought-forth deities before it closes. The ending therefore moves from illness to healing and then to renewed divine order.",
    ['claim-enki-ninhursag-healing-destinies']),

  cs('cs-enki-ninhursag-evidence-significance', 'story-enki-ninhursag', 'Evidence Limits and Literary Significance',
    "Enki and Ninhursag is best approached as a specific Sumerian literary composition whose surviving manuscripts preserve both a coherent narrative arc and points of textual variation. Modern labels such as paradise can be useful shorthand, but they should not replace the text's own sequence of idealized place, irrigation, divine generation, sexuality, vegetation, transgression, bodily crisis, healing, and restored order.",
    [
      'claim-enki-ninhursag-dilmun-setting',
      'claim-enki-ninhursag-manuscript-variation',
      'claim-ninhursag-creation-birth-tradition',
    ]),
  cs('cs-gilgamesh-overview', 'text-gilgamesh', 'What Is This Text?',
    "The Epic of Gilgamesh is the most extensive surviving work of Mesopotamian literature, following the legendary king Gilgamesh of Uruk through adventures with his companion Enkidu, his grief and quest for immortality after Enkidu's death, and, within that quest, his encounter with the flood survivor Utnapishtim in Tablet XI."),
  cs('cs-atrahasis-overview', 'text-atrahasis', 'What Is This Text?',
    "Atrahasis is an Akkadian composition recounting the creation of humanity to relieve the gods of labor, humanity's subsequent overpopulation, and the escalating divine responses that culminate in a great flood, survived by the text's namesake protagonist, Atrahasis, through Enki's intervention."),
  cs('cs-eridu-genesis-overview', 'text-eridu-genesis', 'What Is This Text?',
    "The Eridu Genesis is a fragmentarily preserved Sumerian composition whose principal Old Babylonian manuscript comes from Nippur. The surviving text connects the creation of humanity, the establishment of the first cities and kingship, and a great flood survived by Ziusudra. It preserves one of the earliest surviving written forms of the Mesopotamian flood tradition."),

  cs('cs-creation-overview', 'topic-creation', 'Overview',
    "Mesopotamian texts preserve several distinct accounts of human creation. The Eridu Genesis describes An, Enlil, Enki, and Ninhursag as having fashioned the black-headed people. Atrahasis makes humanity the solution to a divine labor crisis, with humans formed from clay together with the flesh and blood of a slain god. In Enūma eliš, Marduk proposes creating humanity and Ea creates mankind from Kingu's blood so humans can assume the service of the gods.",
    ['claim-eridu-genesis-creation', 'claim-atrahasis-human-creation', 'claim-enuma-elish-creation-of-humanity']),
  cs('cs-divine-council-overview', 'topic-divine-council', 'Overview',
    "Mesopotamian myth frequently depicts major divine decisions as matters for an assembly rather than the unilateral action of a single god. In Atrahasis, the gods collectively deliberate and consent to the flood decision. In Enūma eliš, the assembled gods negotiate Marduk's authority, exalt his destiny, test his command, and acclaim him king.",
    ['claim-divine-council-collective-decision', 'claim-enlil-assembly-deliberation', 'claim-enuma-elish-champion-kingship-condition', 'claim-enuma-elish-command-test']),
  // ---------------- ENKI ----------------
  cs('cs-enki-names', 'deity-enki', 'Names and Languages',
    "Enki is the Sumerian name; Ea is the standard Akkadian name for the same figure, carried forward into Babylonian and Assyrian sources. The two names are not simply interchangeable labels used identically in every text — Enki predominates in earlier Sumerian compositions, while Ea becomes standard as Akkadian supplants Sumerian as the primary literary language of Mesopotamia. A reader encountering \"Ea\" in a Babylonian text and \"Enki\" in a Sumerian one is generally reading about the same deity under his name in each respective language.",
    ['claim-enki-ea-name-shift']),
  cs('cs-enki-roles', 'deity-enki', 'Roles and Domains',
    "Enki's association with fresh water is tied to a specific cosmological location: the Abzu, a subterranean body of fresh water imagined to lie beneath his temple at Eridu. His connection to wisdom extends beyond abstract cleverness — surviving sources associate him with ritual knowledge, magical formulae, and the technical know-how (the Sumerian concept of me, or divine ordinances/attributes of civilization) that underlies craftsmanship and civilized life. In several narratives, Enki also functions as a mediator: a deity who intervenes to protect human interests even when this puts him at odds with other members of the divine assembly, as in his secret warning to Atrahasis ahead of the flood.",
    ['claim-enki-abzu']),
  cs('cs-enki-cult-centers', 'deity-enki', 'Cult Centers',
    "Eridu, in southern Mesopotamia, was Enki's primary cult center and is treated in Sumerian tradition as a place of particular antiquity. The Sumerian King List names Eridu as the first city where kingship descended from heaven — a piece of Sumerian ideology, not an independently verifiable historical claim — which reinforced Eridu's symbolic priority as the seat of the god most closely tied to civilization's foundations.",
    ['claim-enki-eridu-oldest-city-tradition']),
  cs('cs-enki-historical-development', 'deity-enki', 'Historical Development',
    "Enki's prominence is most pronounced in Sumerian sources. As Babylonian religious tradition developed and Marduk was elevated to head of the Babylonian pantheon, several of the creative and organizing functions once closely tied to Enki in Sumerian material become more closely associated with Marduk. Scholars generally read this as a theological reorganization tied to Babylon's political rise, not as Enki/Ea disappearing from the pantheon — Ea continues to appear throughout Babylonian and Assyrian sources, notably still playing the role of humanity's protector in the Gilgamesh flood episode.",
    ['claim-enki-role-shift-babylonian']),
  cs('cs-enki-family', 'deity-enki', 'Family and Divine Relationships',
    "Enki's genealogy and family relationships vary across sources rather than following one single fixed scheme. He is frequently placed among the leading deities alongside An and Enlil. In the Enki and Ninhursag narrative he is central to a chain of divine births, and his relationship with Ninhursag in that text involves both affliction and healing. Rather than treating any single genealogy as definitive, this atlas presents the specific relationships attested per source, since Mesopotamian divine genealogy was not standardized across all periods and compositions."),
  cs('cs-enki-myths', 'deity-enki', 'Major Myths',
    "In Atrahasis, Enki plays the pivotal role of secretly warning the flood's future survivor, working around — rather than directly defying — the divine assembly's decision. In the Gilgamesh flood episode (Tablet XI), Ea performs the same essential function under his Akkadian name, using nearly identical warning language to the Atrahasis scene. In Enki and Ninhursag, Enki is a central character in a Dilmun-set narrative of divine creation, transgression, and healing. Across these narratives, Enki is consistently positioned as clever, resourceful, and willing to act on humanity's behalf."),
  cs('cs-enki-texts', 'deity-enki', 'Ancient Texts',
    "Enki/Ea appears substantively in Atrahasis (as Enki, in the Old Babylonian recension), the Epic of Gilgamesh (as Ea, in Tablet XI), and Enki and Ninhursag (as Enki, in Sumerian). Each of these compositions matters for a different reason: Atrahasis for the fullest surviving account of his role in the flood tradition, Gilgamesh Tablet XI for showing the same role persisting into later Akkadian literature under his Akkadian name, and Enki and Ninhursag for showing his role in an origin/creation narrative distinct from the flood tradition."),
  cs('cs-enki-symbols', 'deity-enki', 'Symbols and Iconography',
    "Enki is associated in Mesopotamian art with the flowing vase, a symbol depicting streams of water (sometimes shown containing fish) issuing from a vessel he holds — a direct visual expression of his connection to fresh water and the Abzu. He is also associated with a goat-fish hybrid creature and, in some depictions, a turtle, both tied to his watery domain. These symbols functioned as recognizable visual shorthand on cylinder seals and reliefs, allowing viewers to identify Enki even without an accompanying inscription."),
  cs('cs-enki-worship', 'deity-enki', 'Worship and Cult',
    "Enki's temple at Eridu, known as the E-abzu ('house of the Abzu'), was a significant religious site tied directly to his cosmological association with subterranean fresh water. As with most Mesopotamian temple cults, worship of Enki would have involved regular offerings, a resident priesthood, and periodic festivals, though the surviving evidence for the specific ritual calendar and practice at Eridu is more fragmentary than for some other major cult centers, and this atlas does not currently have enough sourced detail to describe it further without overstating what is known."),
  cs('cs-enki-archaeology', 'deity-enki', 'Archaeological Evidence',
    "Archaeological excavation at the site of Eridu (modern Tell Abu Shahrain) has revealed a long sequence of temple rebuilding on the same location over many centuries, consistent with its role as a major and long-lived cult center. Cylinder seals depicting a seated god with streams of water and fish are conventionally identified by scholars as representing Enki, based on iconographic conventions cross-referenced with textual descriptions, though attribution of any individual unlabeled seal to a specific deity necessarily involves some interpretive judgment."),
  cs('cs-enki-debated', 'deity-enki', 'Debated Questions',
    "Scholars continue to discuss exactly how Enki's functions and Marduk's functions relate to one another in Babylonian theology — whether this represents a clean handover, an overlapping coexistence, or a more complex layered development that varied by city and period. The precise nature and operation of the me (the divine ordinances Enki is closely associated with) is also a subject of ongoing scholarly discussion, since the term appears in different configurations across different texts."),
  cs('cs-enki-later-reception', 'deity-enki', 'Later Reception',
    "Enki/Ea's role as a wise, protective deity willing to act on behalf of humanity is often cited by scholars as one of the conceptual antecedents informing later flood-narrative structures in the wider ancient Near East, though this atlas treats the specific nature of any such relationship as a separate, independently sourced historical-relationship question rather than an assumption — see the Flood Tradition topic page for how this is handled."),
  cs('cs-enki-why-matters', 'deity-enki', 'Why It Matters',
    "Enki matters to understanding Mesopotamian religion because his consistent role — clever, protective, willing to work around rather than against divine authority — offers a clear window into how Mesopotamian myth could depict tension and negotiation within the divine assembly rather than presenting the gods as a uniform bloc. His warning to the flood survivor is also one of the most direct, well-attested points of contact between Mesopotamian and later flood-narrative traditions discussed elsewhere in world literature, making him a natural starting point for comparative study."),

  // ---------------- ENLIL ----------------
  cs('cs-enlil-roles', 'deity-enlil', 'Roles and Domains',
    "Enlil was understood as a deity of divine authority and decision-making within the Mesopotamian pantheon. His primary domain was authority and kingship ideology rather than a simple characterization as a weather or atmospheric god. In Mesopotamian thought, authority and command were expressed through concepts related to 'wind' or 'air' (Sumerian lil), which carried connotations of effective, far-reaching power. Enlil's prominence in the divine assembly reflects this association with legitimate authority and divine order.",
    ['claim-enlil-authority']),
  cs('cs-enlil-cult-center', 'deity-enlil', 'Cult Centers',
    "Nippur, Enlil's primary cult center, held exceptional religious importance across Sumeria despite not functioning as a political capital. Modern scholarly reconstruction suggests that no single city-state's claim to legitimate kingship was considered fully secure without recognition at Nippur, even during periods when Nippur itself held limited direct political power. This gave Enlil's cult an outsized religious significance relative to the city's political weight.",
    ['claim-enlil-nippur-neutral-ground']),
  cs('cs-enlil-family', 'deity-enlil', 'Family and Divine Relationships',
    "Enlil is frequently identified alongside An and Enki among the leading deities of the pantheon, and Ninurta is associated with him in several sources. Exact family relationships vary by text and period rather than following one universally fixed scheme, reflecting the reality that Mesopotamian divine genealogy was context-dependent rather than standardized across all compositions."),
  cs('cs-enlil-myths', 'deity-enlil', 'Major Myths and Literary Roles',
    "Enlil's most prominent narrative role appears in Atrahasis, an Akkadian composition of the Old Babylonian period. In this text, human noise disturbing the gods' rest prompts Enlil to initiate divine responses—plague, drought, and famine—that escalate in severity. The divine assembly deliberates on and consents to the decision to send a flood, positioning Enlil as the primary instigator but not as an entirely unilateral actor. After the flood, Enlil is initially angered by Atrahasis's survival but is rebuked by Enki/Ea. Enki's intervention contrasts sharply with Enlil's position: while Enlil drives escalating punishments, Enki works to protect humanity through an indirect warning, illustrating a broader pattern in Mesopotamian literature of divine negotiation and tension within the assembly.",
    ['claim-enlil-flood-instigator', 'claim-enlil-assembly-deliberation', 'claim-enlil-enki-contrasting-role']),
  cs('cs-enlil-ancient-textual-tradition', 'deity-enlil', 'Ancient Textual Tradition',
    "The primary directly sourced narrative evidence for Enlil is Akkadian rather than Sumerian. Enlil appears substantively in Atrahasis, where the Akkadian text preserves his central role in the flood decision and his interaction with Enki/Ea. The Standard Babylonian Epic of Gilgamesh, Tablet XI, also preserves a flood episode in which Enlil participates, though the narrative details and Enlil's characterization in Gilgamesh differ from Atrahasis. Beyond narrative myth, Enlil is referenced in a wide range of Sumerian temple hymns and royal inscriptions tied to Nippur, but these sources remain to be fully incorporated into the structured evidence base for this profile."),
  cs('cs-enlil-ancient-sources', 'deity-enlil', 'Ancient Sources',
    "The principal ancient textual source for Enlil is Atra-ḫasīs, an Old Babylonian Akkadian composition preserving the flood narrative. Atra-ḫasīs is known through the critical edition and translation by Lambert and Millard. The Standard Babylonian Epic of Gilgamesh, Tablet XI, preserved in the critical edition by George, provides a secondary comparative source for Enlil in the flood tradition, though its presentation differs from Atrahasis. In both texts, Enlil is a central divine agent, and the ancient source material should be clearly distinguished from the modern editions and scholarly commentary used to interpret it.",
    ['claim-enlil-flood-instigator']),
  cs('cs-enlil-scholarly', 'deity-enlil', 'Scholarly Interpretation',
    "Scholars read Enlil's role in Atrahasis as illustrating a broader Mesopotamian pattern: the head of the divine assembly holds substantial but not absolute authority. His decisions carry weight and are generally followed by the assembly, yet other gods—notably Enki/Ea—can act to moderate, circumvent, or work around those decisions. This suggests that Mesopotamian divine order operated through negotiation among powerful deities rather than through strictly hierarchical command. The relationship between Enlil's authority and An's formally higher rank remains a scholarly discussion point, with some scholars emphasizing An's precedence as largely honorific while Enlil functions as the more operationally active head of the assembly, and others noting that the relationship may have varied across different texts and historical periods.",
    ['claim-enlil-authority-negotiated', 'claim-enlil-an-hierarchy-variation']),
  cs('cs-enlil-debated', 'deity-enlil', 'Debated Questions',
    "Scholars continue to discuss the precise relationship between An's formally higher rank in the divine hierarchy and Enlil's more active authority in specific narratives. Whether An's precedence was largely honorific with Enlil functioning as the more operationally authoritative head of the assembly, or whether the relationship varied more by period and text than a single clean division of labor would suggest, remains open to scholarly interpretation and analysis.",
    ['claim-enlil-an-hierarchy-variation']),
  cs('cs-enlil-what-we-know', 'deity-enlil', 'What We Actually Know',
    "Directly attested in Atra-ḫasīs: Enlil complains that human noise disturbs his rest; the gods escalate responses through plague, drought, and famine before deciding on a flood; the divine assembly deliberates and consents to the flood decision; Enlil is the primary instigator but not acting unilaterally; Enki/Ea warns Atrahasis of the coming flood via a reed wall; Enlil reacts angrily to Atrahasis's survival; Ea rebukes Enlil and the narrative concludes with post-flood measures that restrict future human population growth rather than with Atrahasis receiving immortality. Strong scholarly consensus: Enlil was a major deity of divine authority and assembly leadership in Mesopotamian religion; Nippur was his primary cult center and held exceptional religious importance in Sumer. Context-dependent: the exact characterization of Enlil's domain; the relationship between An and Enlil; whether similar patterns appear in Enlil-related Sumerian material not yet fully incorporated; the later evolution of Enlil in Babylonian and Assyrian tradition.",
    ['claim-enlil-flood-instigator', 'claim-enlil-assembly-deliberation', 'claim-enlil-enki-contrasting-role', 'claim-enlil-authority', 'claim-enlil-nippur-neutral-ground']),
  cs('cs-enlil-why-matters', 'deity-enlil', 'Why It Matters',
    "Enlil matters for understanding how Mesopotamian religion conceived of authority itself. His position as a major deity of the divine assembly, exercised through collective deliberation and subject to moderation by other powerful gods, offers insight into how Mesopotamian culture imagined legitimate power—both divine and, by extension, royal. His strong association with Nippur illuminates how religious authority could bind together independent city-states, and his role in the Atra-ḫasīs flood narrative anchors the broader Mesopotamian flood-story tradition. Moreover, the dynamics between Enlil's authority and Enki/Ea's intervention illustrate the sophistication of Mesopotamian theological thought regarding divine disagreement, cooperation, and the negotiated rather than absolutely hierarchical nature of divine order."),

  // ---------------- INANNA ----------------
  cs('cs-inanna-names', 'deity-inanna', 'Names and Languages',
    "Inanna is the Sumerian name; Ishtar is the corresponding Akkadian name. This reflects substantial historical continuity across Sumerian and Akkadian tradition, but it does not mean every later Ishtar tradition can simply be projected backward onto every Sumerian Inanna text in exactly the same form.",
    ['claim-inanna-ishtar-name-shift']),
  cs('cs-inanna-roles', 'deity-inanna', 'Roles and Domains',
    "Inanna was broadly associated with love, sexuality, warfare, fertility, and political or divine power in Mesopotamian tradition. These associations are real and important, but the exact balance and expression of each role changed by composition, place, and historical period, so they are best understood as broad historical patterns rather than one unchanged theology across every period and text.",
    ['claim-inanna-broad-roles']),
  cs('cs-inanna-cult-centers', 'deity-inanna', 'Cult Centers and Wider Worship',
    'Uruk was one of the principal and most important centers of Inanna’s worship, especially through the Eanna temple complex. Her cult, however, was not confined to Uruk. Inanna/Ishtar was worshipped in other Mesopotamian cities as well, including Ur. This wider cultic presence should not be confused with primary-cult-center status: Uruk remains the principal city associated with Inanna in this profile, while Ur represents an additional historically attested center of her worship.',
    ['claim-inanna-ur-cult-attested']),
  cs('cs-inanna-family', 'deity-inanna', 'Family and Divine Relationships',
    "In an important Mesopotamian genealogical tradition, Inanna and Utu are presented as children of Nanna and Ningal. In Inanna’s Descent to the Netherworld, Ereshkigal is presented as Inanna’s sister and ruler of the underworld, while Dumuzi becomes central to the story’s substitution sequence after Inanna’s return. These relationships should not be combined into one universal and unchanging family tree, because individual texts, cities, languages, and historical periods can preserve different genealogical arrangements.",
    ['claim-nanna-utu-inanna-children', 'claim-inanna-ereshkigal-sister', 'claim-inanna-dumuzi-substitute']),
  cs('cs-inanna-myths', 'deity-inanna', 'Major Myths and Literary Roles',
    "Inanna’s Descent to the Netherworld is one of the central Sumerian narratives for understanding the goddess. The goddess descends to the underworld, passes through seven gates, and at each gate is required to remove one item of clothing or adornment. In the story, Inanna dies in the underworld and is later restored only after a substitute is required by underworld law. Dumuzi is ultimately designated in that substitution sequence.",
    ['claim-inanna-descent-seven-gates', 'claim-inanna-dumuzi-substitute']),
  cs('cs-inanna-textual-tradition', 'deity-inanna', 'Ancient Textual Tradition',
    "The Sumerian Descent tradition provides the principal textual foundation for the material presented here. Inanna’s Descent to the Netherworld is a Sumerian composition preserved in Old Babylonian copies, with an earlier tradition behind the surviving manuscripts where the existing scholarly references support that framing. The Akkadian Descent of Ishtar remains provisional and distinct from the Sumerian text, rather than being treated as a simple equivalent version of the same narrative.",
    ['claim-inanna-descent-seven-gates', 'claim-inanna-dumuzi-substitute']),
  cs('cs-inanna-ancient-sources', 'deity-inanna', 'Ancient Sources',
    "The principal ancient source is Inanna’s Descent to the Netherworld. ETCSL is used as a modern text and reference for the Sumerian composition, but it remains separate from the ancient source itself. This preserves the distinction between the ancient Sumerian text and the modern edition or translation used to read it.",
    ['claim-inanna-ereshkigal-sister', 'claim-inanna-descent-seven-gates', 'claim-inanna-dumuzi-substitute']),
  cs('cs-inanna-scholarly', 'deity-inanna', 'Scholarly Interpretation',
    "Scholars often read the staged removal of Inanna’s regalia at the seven gates as a structured dismantling of status, authority, and identity rather than as an arbitrary narrative device. This interpretation is important for understanding the underworld journey, but it is not the same thing as stating that the ancient narrator explicitly used the modern analytical wording.",
    ['claim-inanna-descent-power']),
  cs('cs-inanna-what-we-know', 'deity-inanna', 'What We Actually Know',
    "Directly attested: Inanna descends to the underworld; she passes through seven gates; at each gate she removes a symbol of status or regalia; Ereshkigal is her sister and ruler of the underworld in this composition; Inanna dies and is restored; the restoration requires a substitute; Dumuzi is designated in that substitution sequence. Strong scholarly consensus: Inanna is the Sumerian divine name corresponding historically to Akkadian Ishtar. Context-dependent: the exact balance of love, warfare, fertility, and political power is not fixed across every period or every text, and later Ishtar traditions cannot automatically be read back onto early Sumerian Inanna theology.",
    ['claim-inanna-ishtar-name-shift', 'claim-inanna-broad-roles', 'claim-inanna-descent-seven-gates', 'claim-inanna-dumuzi-substitute', 'claim-inanna-descent-power']),
  cs('cs-inanna-why-matters', 'deity-inanna', 'Why It Matters',
    "Inanna matters because she helps illuminate how Mesopotamian religion understood divine power, sexuality and fertility, warfare and authority, death and return, and the ritualized loss of status. Her story also offers a clear example of continuity and change between Sumerian and Akkadian religious traditions: the same core figure remains recognizable across languages and periods, but the exact expression of her roles is context-dependent and not identical in every textual setting.",
    ['claim-inanna-ishtar-name-shift', 'claim-inanna-broad-roles', 'claim-inanna-descent-seven-gates', 'claim-inanna-dumuzi-substitute']),

  // ---------------- ERESHKIGAL ----------------
  cs('cs-ereshkigal-nergal', 'deity-ereshkigal', 'Ereškigal and Nergal',
    'EA 357 preserves an Akkadian literary tradition in which Ereškigal and Nergal are brought into direct conflict and ultimately marriage. The opening banquet emphasizes Ereškigal’s separation from the heavenly gods, so she sends her minister Namtar to receive her portion. After an insult to her messenger, she demands that the offending god be sent down and threatens his death. Nergal later forces his way into her palace, pulls her from the throne, and threatens to kill her. The surviving ending reverses the confrontation: Ereškigal offers marriage and places kingship of the broad netherworld in Nergal’s hand. This later tradition must be distinguished from earlier Sumerian presentations in which Ereškigal’s underworld sovereignty appears without this marital arrangement.',
    ['claim-ea357-banquet-separation', 'claim-ea357-namtar-embassy', 'claim-ea357-ereshkigal-death-demand', 'claim-ea357-palace-assault', 'claim-ea357-ending-marriage-kingship', 'claim-nergal-ea357-underworld-kingship', 'claim-nergal-ereshkigal-later-tradition']),
  cs('cs-ereshkigal-changing-traditions', 'deity-ereshkigal', 'Changing Underworld Traditions',
    'Different Mesopotamian compositions preserve different presentations of Ereškigal. In the Sumerian Inanna’s Descent to the Netherworld, she is identified as Inanna’s sister and ruler of the underworld. In the later Akkadian Nergal and Ereškigal tradition, she is presented in a marital relationship with Nergal and participates in a narrative in which underworld kingship is transferred or shared. Keeping these traditions separate shows how divine relationships could develop over time.',
    ['claim-inanna-ereshkigal-sister', 'claim-nergal-ea357-underworld-kingship', 'claim-nergal-ereshkigal-later-tradition']),
  // ---------------- DUMUZI ----------------
  cs('cs-dumuzi-names', 'deity-dumuzi', 'Names and Historical Identity',
    "The Sumerian divine name is conventionally rendered Dumuzi or Dumuzid. In first-millennium Assyrian corpora the same divine name DUMU.ZI can be represented in modern translation as Tammuz. The familiar later name should therefore be understood as part of the long transmission history of this Mesopotamian deity rather than as evidence that every Dumuzi tradition remained unchanged across time.",
    ['claim-dumuzi-tammuz-name']),

  cs('cs-dumuzi-pastoral', 'deity-dumuzi', 'The Shepherd and Pastoral Abundance',
    "Dumuzi's identity as a shepherd extends well beyond the single episode preserved in Inanna's Descent. Sumerian love and courtship texts repeatedly connect him with sheepfolds and with the characteristic products of pastoral life. In the C1 song he carries milk in a gift sequence for Inanna, while Dumuzid and Enkimdu praises the shepherd's butter, milk, and work. These texts make pastoral identity one of the strongest recurring features of Dumuzi's literary profile.",
    ['claim-dumuzi-c1-pastoral-gifts', 'claim-dumuzi-enkimdu-courtship', 'claim-dumuzi-descent-shepherd-seized']),

  cs('cs-dumuzi-inanna', 'deity-dumuzi', 'Dumuzi and Inanna',
    "Dumuzi's relationship with Inanna is preserved in more than one literary form. In Dumuzid and Geštinanna he explicitly refers to Inanna as the woman he married. Dumuzid and Enkimdu dramatizes the proposed marriage as a courtship competition, while Inanna's Descent presents the relationship in a very different narrative setting in which Dumuzi becomes the substitute demanded for Inanna's release from the underworld. These compositions should be read as distinct literary traditions rather than forced into one seamless biography.",
    ['claim-dumuzi-inanna-marriage', 'claim-dumuzi-enkimdu-courtship', 'claim-inanna-dumuzi-substitute']),

  cs('cs-dumuzi-enkimdu', 'deity-dumuzi', 'Dumuzid and Enkimdu',
    "The composition Dumuzid and Enkimdu places the shepherd Dumuzi beside the farmer Enkimdu within a courtship debate concerning Inanna. Utu urges Inanna to accept the shepherd, emphasizing Dumuzi's good butter, milk, and productive work. Inanna initially rejects the shepherd in favor of the farmer. The text is important because it embeds Dumuzi's divine identity in the economic and symbolic contrast between pastoralism and agriculture.",
    ['claim-dumuzi-enkimdu-courtship']),

  cs('cs-dumuzi-love-songs', 'deity-dumuzi', 'Love Songs and Pastoral Poetry',
    "A substantial Sumerian literary setting for Dumuzi is the poetry linking him with Inanna. A Song of Inana and Dumuzid (C1) combines courtship, gift exchange, and pastoral produce: Inanna requests offerings from several occupations, and Dumuzi appears in the shepherd's sphere carrying milk. The poetic Dumuzi of these compositions is therefore not defined only by death and the underworld; he is also a desired shepherd associated with intimacy, prosperity, livestock, butter, and milk.",
    ['claim-dumuzi-c1-pastoral-gifts', 'claim-dumuzi-inanna-marriage']),

  cs('cs-dumuzi-descent', 'deity-dumuzi', 'Inanna’s Descent and the Substitute',
    "In Inanna's Descent to the Netherworld, Dumuzi occupies one of his best-known surviving narrative roles. After Inanna returns from the underworld, her release requires a substitute. The text finds Dumuzi at the great apple tree in the plain of Kulaba, identifies him as the shepherd, and ultimately places him in the sequence of seizure by the demons. This is direct evidence for this particular composition and should not automatically define every Dumuzi tradition.",
    ['claim-dumuzi-descent-shepherd-seized', 'claim-inanna-dumuzi-substitute']),

  cs('cs-dumuzi-geshtinanna', 'deity-dumuzi', 'Geštinanna, Sister and Protector',
    "Geštinanna is repeatedly tied to Dumuzi as his sister. Dumuzid and Geštinanna makes that relationship dramatically explicit: Dumuzi escapes toward her dwelling, she laments for him, and when the demons demand his location she refuses to reveal him despite their violence. The composition therefore supplies direct literary evidence for a sibling relationship that is also recognized in modern scholarship.",
    ['claim-dumuzi-geshtinanna-sister', 'claim-dumuzi-geshtinanna-direct']),

  cs('cs-dumuzi-dream', 'deity-dumuzi', 'Dumuzi’s Dream',
    "Dumuzid's Dream opens with the shepherd already grieving before he falls asleep and receives an ominous dream. He summons Geštinanna because of her wisdom in dream interpretation. She explains the images as signs of approaching attackers, separation, capture, and the destruction of his pastoral household. The composition develops Dumuzi's death tradition through foreknowledge, pursuit, family loyalty, and the collapse of the sheepfold.",
    ['claim-dumuzi-dream-direct']),

  cs('cs-dumuzi-lament-badtibira', 'deity-dumuzi', 'Death, Lamentation, and Bad-tibira',
    "Lament is one of the clearest recurring literary responses to Dumuzi's death. Dumuzid and Geštinanna places lament in the mouth of his sister, while Inana and Bilulu preserves a wider lament tradition that explicitly names Bad-tibira and the shepherding place among locations associated with mourning for Dumuzi. Because Bad-tibira is not yet represented as a Place entity in this Atlas, it is documented here textually rather than being given an unsupported placeholder profile.",
    ['claim-dumuzi-geshtinanna-direct', 'claim-dumuzi-bilulu-badtibira-lament']),

  cs('cs-dumuzi-tammuz', 'deity-dumuzi', 'Dumuzi and the Later Name Tammuz',
    "Dumuzi's history did not end with the Sumerian literary corpus. First-millennium Assyrian textual corpora continue to preserve the divine name DUMU.ZI, conventionally represented as Dumuzi and Tammuz. That continuity of the name demonstrates later transmission, but it should not be used by itself to assume that every first-millennium belief or ritual was identical to earlier Sumerian literary traditions.",
    ['claim-dumuzi-tammuz-name']),

  cs('cs-dumuzi-evidence-limits', 'deity-dumuzi', 'Evidence and Interpretation Limits',
    "Dumuzi is often summarized in modern popular accounts with broad formulas such as fertility god, vegetation god, dying-and-rising god, or symbol of the seasons. The surviving sources are more varied. They directly attest a shepherd associated with pastoral produce, an intimate and marital relationship with Inanna in some compositions, pursuit and death traditions, underworld substitution, Geštinanna's protection and lament, and later transmission under the name Tammuz. Broader theories about vegetation cycles, ritual reenactment, or a single universal sacred-marriage system require separate scholarly argument and should not be treated as though every element were stated explicitly by the ancient texts.",
    []),

  cs('cs-dumuzi-significance', 'deity-dumuzi', 'Historical Significance',
    "Dumuzi is important precisely because no single surviving composition exhausts his identity. Across Sumerian literature he can be shepherd, lover and husband, courtship rival, bearer of pastoral abundance, pursued victim, underworld substitute, grieving brother, and subject of lament. The later survival of his name as Tammuz further demonstrates the longevity of the tradition. Reading these sources separately before synthesizing them produces a much more historically responsible portrait than reducing Dumuzi to one timeless fertility myth.",
    []),
  cs('cs-ninurta-overview-expanded', 'deity-ninurta', 'Overview',
    "Ninurta is represented across Mesopotamian sources as a heroic warrior whose identity also extends into the ordering of landscape, cultivated abundance, temple cult, and royal ideology. Lugal-e connects his victory over the Asag with mountain waters, fields, barley, and harvest. Angim presents his triumphal return to Nippur and E\u0161ume\u0161a. Ninurta and the Turtle preserves traditions involving Anzud, the Tablet of Destinies, and Enki. In the Neo-Assyrian period, Ashurnasirpal II's inscription gives Ninurta an explicitly royal and military prominence at Kalhu.",
    ['claim-ninurta-lugale-defeats-asag', 'claim-ninurta-lugale-water-fields-harvest', 'claim-ninurta-angim-return-nippur', 'claim-ninurta-kalhu-warrior-titles']),

  cs('cs-ninurta-roles', 'deity-ninurta', 'Roles and Domains',
    "Ninurta's securely attested roles vary by source. Lugal-e presents heroic combat and the productive management of mountain waters. Angim emphasizes victorious return, trophies, and temple procession. Ashurnasirpal II 001 presents him as a supreme warrior and king of battle at Kalhu. These roles overlap, but they come from different literary and historical settings and should not be flattened into one timeless description.",
    ['claim-ninurta-lugale-defeats-asag', 'claim-ninurta-lugale-water-fields-harvest', 'claim-ninurta-kalhu-warrior-titles']),

  cs('cs-ninurta-lugale-combat', 'deity-ninurta', 'Lugal-e: The Battle with the Asag',
    "In Ninurta's Exploits (Lugal-e), Ninurta confronts the Asag in the mountains and defeats it. The episode is one of the clearest direct attestations of Ninurta as a heroic combatant and provides a literary foundation for later descriptions of him as a formidable warrior.",
    ['claim-ninurta-lugale-defeats-asag']),

  cs('cs-ninurta-lugale-waters', 'deity-ninurta', 'Lugal-e: Mountain Waters, Fields, and Harvest',
    "After the battle, Lugal-e turns from combat to the ordering of the landscape. Ninurta gathers mountain waters, directs them toward the Tigris, pours water over cultivated fields, supplies barley with water, and raises the harvest. The composition therefore connects martial victory with productive control of water and agriculture.",
    ['claim-ninurta-lugale-water-fields-harvest']),

  cs('cs-ninurta-angim-return', 'deity-ninurta', 'Angim: Triumphal Return to Nippur',
    "Ninurta's Return to Nibru, commonly called Angim, portrays the god returning from his mountain victories at Enlil's command. Nuska meets him as he approaches Nippur, and Ninurta enters Enlil's temple bearing trophies and plunder. The poem presents victory not simply as battlefield action but as a public and cultic return into the sacred city.",
    ['claim-ninurta-angim-return-nippur']),

  cs('cs-ninurta-nippur-cult', 'deity-ninurta', 'Nippur and E\u0161ume\u0161a',
    "Angim calls Nibru, or Nippur, Ninurta's beloved city and E\u0161ume\u0161a his beloved temple. The poem describes his procession to the sanctuary and his entry into it. This provides direct literary evidence for Ninurta's close association with Nippur and supports treating the city as his principal cult center within this profile.",
    ['claim-ninurta-angim-eshumesha']),

  cs('cs-ninurta-genealogy', 'deity-ninurta', 'Enlil, Nudimmud, and Genealogical Variation',
    "Lugal-e repeatedly calls Ninurta the son of Enlil and explicitly identifies Enlil as his father near the composition's conclusion. A much later Neo-Assyrian inscription, however, describes Ninurta as offspring of Nudimmud. Rather than forcing these statements into one universal family tree, the evidence shows that divine genealogy could be adapted to different textual and historical contexts.",
    ['claim-ninurta-lugale-son-of-enlil', 'claim-ninurta-kalhu-nudimmud-genealogy']),

  cs('cs-ninurta-anzud-tablet', 'deity-ninurta', 'Anzud and the Tablet of Destinies',
    "Ninurta and the Turtle preserves another heroic strand. In the surviving fragment, the Tablet of Destinies is associated with a return to the abzu, and Enki praises Ninurta for capturing the Anzud bird with his weapon. This links Ninurta with the Anzud and Tablet of Destinies complex without assuming that every later version of that myth was identical.",
    ['claim-ninurta-turtle-anzud-tablet']),

  cs('cs-ninurta-turtle-enki', 'deity-ninurta', 'Ninurta and Enki in the Turtle Composition',
    "The same composition complicates the image of an undefeated hero. Ninurta turns against Enki, but Enki fashions a turtle that digs a pit and traps him. The episode provides direct evidence that Mesopotamian literature could portray Ninurta's power as formidable but not unlimited.",
    ['claim-ninurta-turtle-enki']),

  cs('cs-ninurta-kalhu', 'deity-ninurta', 'Kalhu and Neo-Assyrian Warrior Kingship',
    "By the Neo-Assyrian period, Ninurta held major importance at Kalhu. Ashurnasirpal II 001 calls him a supreme warrior, king of battle, and a deity dwelling in Kalhu. This evidence gives the Assyrian presentation of Ninurta a strongly royal and military character distinct from, though compatible with, the heroic traditions preserved in Sumerian literature.",
    ['claim-ninurta-kalhu-warrior-titles', 'claim-assyria-cult-figures']),

  cs('cs-ninurta-ashurnasirpal', 'deity-ninurta', 'Ashurnasirpal II: Temple, Statue, and Festivals',
    "Ashurnasirpal II's inscription records concrete royal investment in Ninurta's cult at Kalhu. The king states that he founded the god's temple, made a new cult statue, appointed festivals, and installed Ninurta's dais. This moves the profile beyond literary characterization into direct evidence for a functioning royal temple institution.",
    ['claim-ninurta-kalhu-temple-statue']),

  cs('cs-ninurta-evidence-limits', 'deity-ninurta', 'Evidence and Interpretation Limits',
    "The sources used here span different genres, languages, and historical settings. Lugal-e and Angim are Sumerian literary compositions; Ninurta and the Turtle survives in fragmentary form; Ashurnasirpal II 001 is a Neo-Assyrian royal inscription. Statements about combat, agriculture, genealogy, and cult therefore need to remain tied to the sources that attest them. The conflicting Enlil and Nudimmud genealogical language is especially important evidence against treating one family tree as universally fixed.",
    ['claim-ninurta-lugale-son-of-enlil', 'claim-ninurta-kalhu-nudimmud-genealogy', 'claim-ninurta-kalhu-temple-statue']),

  cs('cs-ninurta-significance', 'deity-ninurta', 'Historical Significance',
    "Ninurta's importance lies in the breadth of roles that can be documented without reducing him to a single label. He is a mountain combatant, organizer of waters and harvest, victorious son returning to Nippur, figure in Anzud and Tablet of Destinies traditions, and major royal warrior deity at Kalhu. Reading these sources in sequence reveals both long-term continuity and substantial reinterpretation across Mesopotamian history.",
    ['claim-ninurta-lugale-defeats-asag', 'claim-ninurta-lugale-water-fields-harvest', 'claim-ninurta-angim-return-nippur', 'claim-ninurta-turtle-anzud-tablet', 'claim-ninurta-kalhu-warrior-titles']),
  // ---------------- AN/ANU ----------------
  cs('cs-an-names', 'deity-an', 'Names and Languages',
    'An is the Sumerian form of the deity’s name, while Anu is the Akkadian form. The names belong to related Mesopotamian traditions, but this profile preserves differences of period, language, and theological context rather than treating every source as identical.',
    ['claim-an-anu-names-languages']),
  cs('cs-an-roles', 'deity-an', 'Roles and Domains',
    'An/Anu was strongly associated with the sky and heaven and occupied a position of high formal status in Mesopotamian religious traditions. Sumerian literary texts directly place An in heaven and depict Inana crediting him with making her terrifying among the deities in heaven. His degree of active authority, however, varies by composition and period, and high rank should not be treated as evidence of one permanently fixed divine hierarchy.',
    ['claim-an-heaven-primeval-division', 'claim-an-inana-ebih-terrifying-status', 'claim-an-sky-heaven-domain', 'claim-an-formal-high-status']),
  cs('cs-an-ancient-textual-tradition', 'deity-an', 'Ancient Textual Tradition',
    'Surviving Sumerian literature provides direct evidence for An’s association with heaven and for his place within relationships of divine authority. In Gilgamesh, Enkidu and the Netherworld, An receives heaven in the primeval division of cosmic realms. In Inana and Ebih, Inana addresses An and credits him with making her terrifying among the deities in heaven. These passages show different literary uses of An without requiring one fixed theology or hierarchy across every composition.',
    ['claim-an-heaven-primeval-division', 'claim-an-inana-ebih-terrifying-status']),
  cs('cs-an-scholarly-interpretation', 'deity-an', 'Scholarly Interpretation',
    'An/Anu’s high rank does not automatically mean he is the most active deity in every narrative. Enlil often takes a more active decision-making role in some surviving traditions, while the balance between formal rank and active authority varies by text and period. This is a scholarly interpretation of multiple traditions, not a quotation from one ancient text.',
    ['claim-an-enlil-authority-distinction']),
  cs('cs-an-cult-center', 'deity-an', 'Cult Centers',
    'Uruk was one of the principal centers of An/Anu’s cult. From the third millennium onward, although not continuously in an unchanged form, An/Anu was worshipped there in association with Inanna/Ishtar at Eanna. Later phases of Anu’s cult at Uruk developed in different historical and theological settings and should not be projected backward onto early Sumerian practice.',
    ['claim-an-uruk-eanna-cult']),
  cs('cs-an-what-we-know', 'deity-an', 'What We Actually Know',
    'The surviving evidence supports several careful conclusions about An/Anu. An is the Sumerian name and Anu the Akkadian form. Mesopotamian traditions strongly associate this deity with heaven and place him in a position of high divine status, although the practical exercise of authority varies across texts and periods. Sumerian literary passages directly place An in heaven and show Inana crediting him with making her terrifying among the deities in heaven. Uruk was an important center of his cult in association with Inanna/Ishtar. What the evidence does not support is one universal genealogy, one permanently fixed divine hierarchy, or an unchanged theology extending across all periods of Mesopotamian history.',
    ['claim-an-anu-names-languages', 'claim-an-heaven-primeval-division', 'claim-an-inana-ebih-terrifying-status', 'claim-an-sky-heaven-domain', 'claim-an-formal-high-status', 'claim-an-enlil-authority-distinction', 'claim-an-uruk-eanna-cult']),
  cs('cs-an-why-it-matters', 'deity-an', 'Why It Matters',
    'An/Anu is important because his traditions show that divine rank and narrative activity were not the same thing in Mesopotamian religion. He could occupy a position of very high formal status while other deities, especially Enlil in particular texts, played more active roles in divine decision-making and mythic action. His association with heaven, his presence in early Sumerian literature, and his long cult history at Uruk also show how a major deity could remain significant even as theological emphasis changed across languages, cities, and historical periods. Studying An/Anu therefore helps reveal Mesopotamian religion as a developing network of traditions rather than a single fixed pantheon.',
    ['claim-an-anu-names-languages', 'claim-an-heaven-primeval-division', 'claim-an-sky-heaven-domain', 'claim-an-formal-high-status', 'claim-an-enlil-authority-distinction', 'claim-an-uruk-eanna-cult']),
  cs('cs-an-historical-development', 'deity-an', 'Historical Development',
    'An/Anu remained a deity of high formal status across multiple Mesopotamian traditions, but the way that status was expressed varied by period and composition. In some surviving texts, other deities such as Enlil take more active roles in divine decision-making while An/Anu retains a position of seniority. His cult at Uruk also continued across long spans of time, although later forms should not be treated as unchanged continuations of earlier Sumerian practice. The surviving evidence therefore supports continuity of importance alongside substantial historical variation rather than one fixed hierarchy or a simple linear decline.',
    ['claim-an-formal-high-status', 'claim-an-enlil-authority-distinction', 'claim-an-uruk-eanna-cult']),

  // ---------------- NANNA/SIN ----------------
  cs('cs-nanna-names', 'deity-nanna', 'Names and Languages',
    "Nanna is the principal Sumerian name of the lunar deity, while Suen and Sîn are Akkadian forms. These names overlap across historical periods rather than forming a simple sequence in which one permanently replaced another. Later Babylonian and Assyrian evidence for Sîn belongs to its own political and cultic settings, so continuity of identity should not erase differences of language, period, and local tradition.",
    ['claim-nanna-suen-sin-names-languages']),

  cs('cs-nanna-roles', 'deity-nanna', 'Roles and Domains',
    "Nanna/Suen/Sîn is securely attested as a major Mesopotamian lunar deity. The moon remains his clearest core domain. Later royal texts also place Sîn within the language of legitimate kingship: Tiglath-pileser I invokes him among the great gods who establish royal authority, and Ashurbanipal states that Sîn nominated him for kingship. These political uses show the reach of the lunar god's authority without requiring kingship itself to be treated as an unchanging primary domain.",
    ['claim-nanna-lunar-domain', 'claim-tiglath-pileser-i-01-divine-invocation', 'claim-ashurbanipal-009-succession']),

  cs('cs-nanna-cult-center', 'deity-nanna', 'Cult Centers',
    "Ur was one of the principal centers of Nanna/Suen/Sîn's cult, and Ekišnugal was his principal sanctuary there. Harran also became a major center of the moon god in a historically distinct tradition. The evidence from Ur shows substantial continuity into the first millennium BCE: a Neo-Assyrian inscription describes Ningal as the beloved wife of Sîn within the restored Gipāru, while later Babylonian rule under Nabonidus saw renewed work on Sîn's temple and restoration of the high-priestess office.",
    ['claim-nanna-ur-cult-center', 'claim-nanna-ekishnugal-ur', 'claim-nanna-harran-cult-center', 'claim-ningal-giparu-ur', 'claim-ur-later-history-nabonidus']),

  cs('cs-nanna-what-we-know', 'deity-nanna', 'What We Actually Know',
    "The surviving evidence securely identifies Nanna/Suen/Sîn as a major lunar deity whose principal Sumerian cult center was Ur. Ekišnugal, the high-priestess institution, the Gipāru, and the divine household of Nanna and Ningal tie the moon god closely to the civic and religious identity of the city. Individual texts preserve specific relationships: Nanna-Suen's Journey to Nippur names Enlil and Ninlil as his parents, an important tradition makes Ningal his consort and Utu and Inanna their children, and a first-millennium hymn calls Nanaya the daughter of Sîn. These genealogies must remain source-sensitive rather than being forced into one universal family tree.",
    ['claim-nanna-lunar-domain', 'claim-nanna-ur-cult-center', 'claim-nanna-ekishnugal-ur', 'claim-nanna-high-priestess-ur', 'claim-ur-temple-institutional-life', 'claim-nanna-enlil-ninlil-parentage-journey', 'claim-nanna-ningal-consort', 'claim-nanna-utu-inanna-children', 'claim-nanaya-sargon-hymn-sin-daughter']),

  cs('cs-nanna-why-it-matters', 'deity-nanna', 'Why It Matters',
    "Nanna/Suen/Sîn matters because the evidence joins lunar religion to the long institutional history of Ur while also showing the god moving through changing Sumerian, Akkadian, Babylonian, and Assyrian settings. He is at once the moon god of Ekišnugal, a member of changing divine genealogies, a focus of royal priesthood, the king of Urim in Amar-Suena 11, and a divine authority invoked in later royal ideology. That continuity is substantial, but it is historical continuity rather than an unchanged theology frozen across two millennia.",
    ['claim-nanna-suen-sin-names-languages', 'claim-nanna-ur-cult-center', 'claim-nanna-high-priestess-ur', 'claim-ningal-amar-suena-lady-mother-ur', 'claim-ashurbanipal-009-succession', 'claim-ur-later-history-nabonidus']),

  cs('cs-nanna-ancient-textual-tradition', 'deity-nanna', 'Ancient Textual Tradition',
    "Nanna/Suen/Sîn appears across a wide range of surviving texts. Nanna-Suen's Journey to Nippur preserves a Sumerian genealogy naming Enlil and Ninlil as his parents. In Inanna's Descent, Nanna refuses Ninshubur's appeal to rescue Inanna, while Inana and Bilulu identifies Suen as Inanna's father. The Lament for Urim places Nanna and Ningal within the destruction and hoped-for restoration of Ur. Amar-Suena 11 calls Nanna king of Urim and invokes him with Ningal in a protective curse. First-millennium texts extend the record further: Nanaya is called daughter of Sîn, Assyrian royal prayers invoke him, SAA 20 049 gives him a distinct divine household, and Ashurbanipal presents Sîn as nominating him for kingship.",
    ['claim-nanna-enlil-ninlil-parentage-journey', 'claim-inanna-descent-ninshubur-appeals', 'claim-inana-bilulu-ningal-sheepfold', 'claim-lament-urim-divine-abandonment', 'claim-lament-urim-no-repeat-restoration', 'claim-ningal-amar-suena-lady-mother-ur', 'claim-amar-suena-11-gold-statue-curse', 'claim-nanaya-sargon-hymn-sin-daughter', 'claim-ashurbanipal-nanaya-return-divine-prayer', 'claim-saa20-049-sin-shamash', 'claim-ashurbanipal-009-succession']),

  cs('cs-nanna-family', 'deity-nanna', 'Family and Divine Relationships',
    "Nanna/Suen belongs to several overlapping divine-family traditions. Nanna-Suen's Journey to Nippur explicitly identifies Enlil as his father and Ninlil as his mother. Ningal is widely attested as his consort and forms with him the principal divine pair associated with Ur. Utu and Inanna are presented as children of Nanna and Ningal in an important Mesopotamian tradition. A separate first-millennium hymn addresses Nanaya as the daughter of Sîn. These traditions should be preserved individually rather than compressed into a single timeless genealogy.",
    ['claim-nanna-enlil-ninlil-parentage-journey', 'claim-nanna-ningal-consort', 'claim-nanna-utu-inanna-children', 'claim-nanaya-sargon-hymn-sin-daughter']),

  cs('cs-nanna-priesthood', 'deity-nanna', 'Priesthood and Royal Patronage',
    "The cult of Nanna at Ur was deeply embedded in royal and temple institutions. Royal daughters were repeatedly appointed as high priestesses of the moon god, linking dynastic authority with Ekišnugal and the sacred precinct. The institutional complex also included the Gipāru, offerings, and temple households. Amar-Suena 11 preserves another dimension of that continuity: its later colophon says an older inscription was recovered while searching for the ground plan of Ekišnugal and then read and copied by a lamentation-priest of Sîn. Under Nabonidus, the high-priestess office was again restored as part of renewed attention to the lunar cult at Ur.",
    ['claim-nanna-high-priestess-ur', 'claim-ur-temple-institutional-life', 'claim-amar-suena-11-later-copy', 'claim-ur-later-history-nabonidus']),

  cs('cs-nanna-symbols', 'deity-nanna', 'Symbols and Lunar Imagery',
    "The lunar crescent was one of the principal symbols of Nanna/Suen/Sîn. Bull imagery could overlap with this symbolism because the curved horns of the bull evoked the crescent moon while also carrying associations of strength, fertility, and divine power. The crescent therefore served not merely as an astronomical sign but as part of a broader visual language through which the moon god could be recognized.",
    ['claim-nanna-crescent-symbol']),
  // ---------------- NINGAL ----------------
  cs('cs-ningal-overview', 'deity-ningal', 'Overview',
    'Ningal was a major goddess of Ur whose identity was closely bound to the city, its lunar cult, and the divine household of Nanna/Suen/Sîn. Sumerian sources call her Ningal, while Nikkal is an Akkadian form of her name. Royal inscriptions describe her as queen of Ekišnugal, beloved of Ur, beloved wife of Sîn, and queen of the goddesses. The Lament for Urim adds a powerful literary portrait of Ningal as the grieving queen of a devastated city whose restoration is ultimately sought.',
    ['claim-ningal-nikkal-name', 'claim-ningal-queen-ekishnugal-ur', 'claim-ningal-giparu-ur', 'claim-ningal-queen-goddesses-q003845', 'claim-ningal-lament-destruction-exile']),

  cs('cs-ningal-names', 'deity-ningal', 'Names and Linguistic Traditions',
    'Ningal is the Sumerian name of the goddess, while Nikkal is an Akkadian form associated with the same divine figure. These forms belong to overlapping linguistic and historical traditions rather than to a single moment when one name simply replaced the other. Care is therefore needed when moving between Sumerian and Akkadian evidence.',
    ['claim-ningal-nikkal-name']),

  cs('cs-ningal-sacred-identity', 'deity-ningal', 'Ur and Sacred Identity',
    'The surviving evidence presents Ningal as a goddess deeply embedded in the sacred identity of Ur. Q003844 calls her queen of Ekišnugal and beloved of Ur. Amar-Suena 11 calls her lady of Urim and invokes her as mother of Urim alongside Nanna, king of Urim. The Lament for Urim likewise makes her relationship to the city central to her literary identity.',
    ['claim-ningal-queen-ekishnugal-ur', 'claim-ningal-amar-suena-lady-mother-ur', 'claim-ningal-lament-destruction-exile']),

  cs('cs-ningal-giparu', 'deity-ningal', 'Ekišnugal, the Gipāru, and Cult Residence',
    'Q003844 gives unusually concrete evidence for Ningal within the sacred complex at Ur. Sîn-balāssu-iqbi records rebuilding the Gipāru for her, describes her as the beloved wife of Sîn, and states that a statue was fashioned as a re-creation of Ningal and installed within the complex. This evidence gives Ningal a distinct cultic presence rather than treating her merely as an appendage of the moon god.',
    ['claim-ningal-giparu-ur', 'claim-ningal-giparu-statue', 'claim-ningal-queen-ekishnugal-ur']),

  cs('cs-ningal-queenship', 'deity-ningal', 'Divine Queenship and Titles',
    'Ningal’s titles reveal several overlapping forms of divine status. Q003844 calls her queen of Ekišnugal and beloved of Ur. Q003845 addresses her as an exalted lady and queen of the goddesses. Amar-Suena 11 preserves the titles lady of Urim and mother of Urim. These expressions are direct ancient attestations from different periods and should be read in their particular historical settings rather than flattened into one timeless title list.',
    ['claim-ningal-queen-ekishnugal-ur', 'claim-ningal-queen-goddesses-q003845', 'claim-ningal-amar-suena-lady-mother-ur']),

  cs('cs-ningal-nanna-household', 'deity-ningal', 'Nanna/Suen/Sîn and the Divine Household',
    "Ningal is widely attested as the consort of Nanna/Suen/Sîn and forms with him the principal divine pair associated with Ur. Q003844 provides direct local evidence by describing Ningal as the beloved wife of Sîn. First-millennium royal evidence extends that relationship beyond the local building inscription: the prayer in Ashurbanipal's Nanaya-return inscription invokes Sîn and Ningal together with Šamaš, Aya, and Nusku to look favorably upon the king. The evidence therefore shows Ningal functioning both within the divine household of Ur and within later Assyrian royal religious language.",
    ['claim-nanna-ningal-consort', 'claim-ningal-giparu-ur', 'claim-ashurbanipal-nanaya-return-divine-prayer']),
  cs('cs-ningal-children', 'deity-ningal', 'Utu, Inanna, and Genealogical Traditions',
    "In an important Mesopotamian genealogical tradition, Utu and Inanna are presented as children of Nanna and Ningal. Direct literary evidence also gives Ningal a maternal relationship to Inanna. In Inana and Bilulu, Inana addresses Ningal as her mother while the passage invokes Suen as her father. Dumuzid-Inanna C1 likewise places Ningal in an active counseling role within Inanna's story. These texts strengthen the family relationship while still requiring source-sensitive treatment because Mesopotamian genealogies could vary by composition, city, language, and period.",
    ['claim-nanna-utu-inanna-children', 'claim-inana-bilulu-ningal-sheepfold', 'claim-c1-ningal-counsel']),
  cs('cs-ningal-royal-patronage', 'deity-ningal', 'Royal Patronage and Cult Infrastructure',
    'Royal and gubernatorial building inscriptions show material investment in Ningal’s worship at Ur. Q003844 records rebuilding the Gipāru and installing a cult statue, while Q003845 records the construction and permanent establishment of the Puḫilituma well for Ningal. These inscriptions connect divine honor with architecture, water supply, cult maintenance, and elite patronage.',
    ['claim-ningal-giparu-ur', 'claim-ningal-giparu-statue', 'claim-ningal-puhilituma-well']),

  cs('cs-ningal-amar-suena', 'deity-ningal', 'Amar-Suena and Earlier Royal Evidence',
    'Ningal’s importance at Ur is not limited to first-millennium inscriptions. Amar-Suena 11, an Ur III royal inscription preserved through a later copy, refers to a statue for Ningal, calls her lady of Urim, and invokes Nanna and Ningal together as king and mother of Urim in a curse formula. The evidence shows continuity of Ningal’s civic and royal significance across a long chronological range, while the later copying history must remain part of how the inscription is evaluated.',
    ['claim-ningal-amar-suena-lady-mother-ur']),

  cs('cs-ningal-lament', 'deity-ningal', 'The Lament for Urim: Mourning and Exile',
    'The Lament for Urim gives Ningal a literary voice of extraordinary emotional force. She mourns the destruction of Ur and her house, speaks of herself as the city’s queen, and describes exile from both city and dwelling. The poem makes the suffering of the city inseparable from the suffering of its goddess, creating a literary expression of Ningal’s civic identity that differs in genre from royal inscriptions.',
    ['claim-ningal-lament-destruction-exile']),

  cs('cs-ningal-restoration', 'deity-ningal', 'Return, Restoration, and Queenship',
    'The lament does not end only with destruction. Its later movement addresses Mother Ningal and calls her back to her house and city. It asks that Urim be restored to her and that she again exercise its queenship. This restoration language reinforces the close literary connection between Ningal’s divine status and the well-being of Ur.',
    ['claim-ningal-lament-restoration']),

  cs('cs-ningal-evidence-limits', 'deity-ningal', 'Evidence and Interpretation Limits',
    'Ningal’s profile combines different kinds of evidence. Royal inscriptions directly attest particular titles, buildings, dedications, and cult relationships. The Lament for Urim directly attests a literary portrayal of Ningal as grieving and returning queen. Modern scholarship helps connect Ningal with Nikkal and reconstruct broader genealogical traditions. These categories should remain distinct: literary voice is not a building inscription, a local title is not automatically universal, and a major genealogy need not be identical in every Mesopotamian text.',
    ['claim-ningal-nikkal-name', 'claim-ningal-queen-ekishnugal-ur', 'claim-ningal-queen-goddesses-q003845', 'claim-ningal-lament-destruction-exile', 'claim-nanna-utu-inanna-children']),

  cs('cs-ningal-significance', 'deity-ningal', 'Historical Significance',
    "Ningal reveals how a Mesopotamian goddess could be simultaneously a divine spouse, queen, civic figure, mother within divine genealogy, recipient of royal patronage, and literary embodiment of a city's suffering. Ur III evidence presents her as lady and mother of Urim; Neo-Assyrian inscriptions document her titles, Gipāru, cult statue, well, and continuing place beside Sîn; literary compositions preserve her maternal relationship to Inanna and her grieving and restored queenship in the Lament for Urim. Taken together, these sources make Ningal an important witness to the religious identity of Ur across many centuries without reducing every period to one unchanged theology.",
    ['claim-ningal-amar-suena-lady-mother-ur', 'claim-ningal-giparu-ur', 'claim-ningal-puhilituma-well', 'claim-inana-bilulu-ningal-sheepfold', 'claim-ningal-lament-destruction-exile', 'claim-ningal-lament-restoration']),
  // ---------------- UTU/SHAMASH ----------------
  cs('cs-utu-names', 'deity-utu', 'Names and Languages',
    "Utu is the Sumerian name of the sun god; Šamaš, conventionally written Shamash in English, is the corresponding Akkadian name. The continuity of the deity across Sumerian and Akkadian-language traditions is strong, but individual Sumerian, Babylonian, and Assyrian texts still belong to their own historical and literary settings rather than one undifferentiated tradition.",
    ['claim-utu-sun-god-name-shift']),

  cs('cs-utu-roles', 'deity-utu', 'Roles and Domains',
    "Utu/Šamaš joins solar radiance with justice, truth, judgment, and the exposure of wrongdoing. These functions extend beyond general theology into political ideology: Tiglath-pileser I attributes his holy scepter to Šamaš, while Ashurbanipal presents Šamaš and Adad as confirming his royal destiny. The surviving evidence therefore shows the sun god operating not only as a celestial deity but also as an authority invoked in legitimate judgment and kingship.",
    ['claim-utu-justice-truth', 'claim-tiglath-pileser-i-01-royal-titulary', 'claim-ashurbanipal-009-succession']),

  cs('cs-utu-family', 'deity-utu', 'Family and Divine Relationships',
    "A major Sumerian family tradition makes Utu a child of Nanna/Suen and Ningal and closely connects him with Inanna, who is presented as his sister. Other Akkadian traditions could give Šamaš different parentage, including Anu or Enlil, so no single genealogy should be imposed on every period. Aya is the well-attested wife of Šamaš. These relationships are best kept source-sensitive rather than forced into one timeless family tree.",
    ['claim-utu-family-sumerian', 'claim-nanna-utu-inanna-children', 'claim-utu-family-akkadian', 'claim-utu-wife-aya']),

  cs('cs-utu-cult-centers', 'deity-utu', 'Cult Centers',
    "Sippar and Larsa were major cult centers of Šamaš, and both were associated with temples called Ebabbar, the 'White House.' The evidence represented here also shows Šamaš embedded in the Assyrian cultic landscape at Assur: SAA 20 049 preserves a divine household headed by Šamaš together with Aya, Kittu, Bunene, and Umu and records sacred gates and temple topography associated with the sun god. This Assyrian evidence broadens the picture without displacing Sippar and Larsa as his best-known principal centers.",
    ['claim-utu-cult-centers', 'claim-saa20-049-sin-shamash', 'claim-saa20-049-gates']),

  cs('cs-utu-myths', 'deity-utu', 'Major Myths and Literary Roles',
    "Utu/Šamaš plays several distinct literary roles. In the Epic of Gilgamesh, Šamaš supports Gilgamesh against Humbaba and later establishes the appointed time connected with Utnapishtim's entry into the flood boat. In the Sumerian Dumuzi traditions, Utu repeatedly responds to Dumuzi's appeals and transforms him so that he can temporarily escape his pursuers; in Dumuzid and Enkimdu he also participates in the courtship dispute involving Inanna. The Eridu Genesis gives another solar role when Utu appears after the seven-day flood and illuminates heaven and earth.",
    ['claim-utu-gilgamesh-cedar-forest', 'claim-utu-gilgamesh-appoint-time', 'claim-inanna-descent-dumuzi-utu-escape', 'claim-dumuzid-geshtinanna-utu-appeal', 'claim-dumuzid-geshtinanna-transformation-escape', 'claim-dumuzid-dream-utu-transformation', 'claim-dumuzi-enkimdu-courtship', 'claim-eridu-genesis-seven-days']),

  cs('cs-utu-textual-tradition', 'deity-utu', 'Ancient Textual Tradition',
    "The surviving textual profile of Utu/Šamaš is much broader than the Epic of Gilgamesh. Sumerian compositions connect Utu with the Dumuzi cycle, Inanna's underworld tradition, judgment, and the post-flood appearance of light. Akkadian literary tradition preserves Šamaš as Gilgamesh's divine supporter, while first-millennium Assyrian inscriptions invoke him in royal legitimacy, military success, prayer, and temple or cult inventories. Hymns, prayers, literary narratives, royal inscriptions, and cultic texts therefore preserve different dimensions of the same major solar god.",
    ['claim-utu-textual-tradition', 'claim-eridu-genesis-aftermath', 'claim-dumuzid-geshtinanna-utu-appeal', 'claim-utu-gilgamesh-cedar-forest', 'claim-tiglath-pileser-i-01-campaigns', 'claim-ashurbanipal-nanaya-return-divine-prayer']),

  cs('cs-utu-ancient-sources', 'deity-utu', 'Ancient Sources',
    "The direct ancient evidence represented in this record spans several genres and periods. The Eridu Genesis, Inanna's Descent, Dumuzid and Geštinanna, Dumuzid's Dream, Dumuzid and Enkimdu, and Nungal A preserve Sumerian literary settings involving Utu. The Epic of Gilgamesh preserves major Akkadian literary roles for Šamaš. Tiglath-pileser I, SAA 20 049, Ashurbanipal 009, and Ashurbanipal's Nanaya-return inscription show the god operating in Assyrian royal, cultic, and prayer contexts. These ancient witnesses should be distinguished from the modern scholarly resources used to interpret them.",
    ['claim-eridu-genesis-seven-days', 'claim-inanna-descent-dumuzi-utu-escape', 'claim-dumuzid-geshtinanna-utu-appeal', 'claim-dumuzid-dream-utu-transformation', 'claim-dumuzi-enkimdu-courtship', 'claim-nungal-a-prison-house', 'claim-utu-gilgamesh-cedar-forest', 'claim-tiglath-pileser-i-01-royal-titulary', 'claim-saa20-049-sin-shamash', 'claim-ashurbanipal-009-divine-patronage', 'claim-ashurbanipal-nanaya-return-divine-prayer']),

  cs('cs-utu-what-we-know', 'deity-utu', 'What We Actually Know',
    "Strong scholarly evidence identifies Utu/Šamaš as the Mesopotamian sun god closely associated with justice, truth, and fair judgment. Direct ancient texts show a wider range of action: he aids Gilgamesh, repeatedly rescues or transforms Dumuzi, appears as an illuminating solar presence after the Eridu flood, participates in royal prayers, authorizes or confirms kingship, and belongs to documented Assyrian divine households and sacred topography. His family relationships vary by tradition, so Nanna, Ningal, Inanna, Aya, Anu, and Enlil should be discussed according to the sources that actually connect them with him.",
    ['claim-utu-justice-truth', 'claim-utu-gilgamesh-cedar-forest', 'claim-dumuzid-geshtinanna-transformation-escape', 'claim-eridu-genesis-seven-days', 'claim-ashurbanipal-nanaya-return-divine-prayer', 'claim-tiglath-pileser-i-01-royal-titulary', 'claim-saa20-049-sin-shamash', 'claim-utu-family-akkadian']),

  cs('cs-utu-why-matters', 'deity-utu', 'Why It Matters',
    "Utu/Šamaš matters because the surviving evidence does not confine the sun god to a single abstract solar function. Light becomes a language of judgment and truth; divine aid becomes visible in the rescue of Dumuzi and the protection of Gilgamesh; and judicial authority enters royal ideology when kings invoke Šamaš for legitimate rule, victory, and confirmation of destiny. His long textual presence across Sumerian, Babylonian, and Assyrian settings makes him one of the clearest examples of both continuity and historical development within Mesopotamian religion.",
    ['claim-utu-sun-god-name-shift', 'claim-utu-justice-truth', 'claim-dumuzid-geshtinanna-utu-appeal', 'claim-utu-gilgamesh-cedar-forest', 'claim-tiglath-pileser-i-01-royal-titulary', 'claim-ashurbanipal-009-succession']),
  // ---------------- NINHURSAG ----------------
  cs('cs-ninhursag-overview', 'deity-ninhursag', 'Overview',
    "Ninhursag is a major Sumerian goddess whose surviving literary profile combines maternal and generative power, fertility, healing, human creation, and a mountain-linked domain. In Enki and Ninhursag she stands at the center of divine birth and healing. Lugal-e preserves a distinct passage in which Ninmaḫ is named Ninḫursaĝa and connected with the mountain Ḫursaĝ, while the Eridu Genesis includes Ninhursag with An, Enlil, and Enki in the fashioning of humanity.",
    ['claim-ninhursag-birth-creation-role', 'claim-ninhursag-healing-sequence', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  cs('cs-ninhursag-names', 'deity-ninhursag', 'Names and Languages',
    "Ninhursag is the name used for the goddess in the Sumerian evidence represented here. Lugal-e gives unusually direct evidence for a connection with Ninmaḫ: after Ninmaḫ approaches Ninurta, he names the mountain Ḫursaĝ and declares that she shall henceforth be called Ninḫursaĝa. That text-specific identification should not be converted into an automatic equation of every maternal goddess across every composition. Nintu, Mami, and Ki likewise require source-sensitive treatment rather than being treated as universally interchangeable names.",
    ['claim-ninurta-lugale-ninmah-ninhursaga', 'claim-atrahasis-nintu-mami-distinction']),

  cs('cs-ninhursag-roles', 'deity-ninhursag', 'Roles and Domains',
    "Ninhursag's strongest attested roles are maternal and generative, connected with birth and fertility, healing and restoration, and a mountain-linked domain. In Enki and Ninhursag she participates in a sequence of divine births and restores the afflicted Enki. In Lugal-e Ninurta names her Ninḫursaĝa and assigns abundance and resources to her mountain domain. In the Eridu Genesis she appears with An, Enlil, and Enki among the deities who fashion humanity.",
    ['claim-ninhursag-birth-creation-role', 'claim-ninhursag-healing-sequence', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  cs('cs-ninhursag-family', 'deity-ninhursag', 'Family and Divine Relationships',
    "The surviving evidence does not support one universal genealogy for Ninhursag. Enki is directly connected with her through the birth, curse, and healing sequence of Enki and Ninhursag. Lugal-e places her in a direct literary exchange with Ninurta when he names her Ninḫursaĝa and establishes her mountain association. The Eridu Genesis also places her alongside An, Enlil, and Enki in the creation of humanity. These relationships should be attributed to their particular texts rather than forced into one permanent family tree.",
    ['claim-ninhursag-healing-sequence', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  cs('cs-ninhursag-myths', 'deity-ninhursag', 'Major Myths and Literary Roles',
    "Enki and Ninhursag supplies the fullest surviving narrative centered on Ninhursag, combining divine generation, curse, bodily affliction, healing, and restoration. Lugal-e gives her a different literary role: Ninmaḫ approaches Ninurta after his ordering of the mountain landscape and is named Ninḫursaĝa in connection with Ḫursaĝ and its abundance. The Eridu Genesis preserves yet another role by including her among the deities responsible for fashioning humanity.",
    ['claim-ninhursag-healing-sequence', 'claim-ninhursag-creation-birth-tradition', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  cs('cs-ninhursag-textual-tradition', 'deity-ninhursag', 'Ancient Textual Tradition',
    "Ninhursag's profile in the surviving Sumerian corpus cannot be reduced to one composition. Enki and Ninhursag provides the most extended narrative treatment of her maternal, generative, and healing activity. Lugal-e directly preserves the Ninmaḫ-Ninḫursaĝa naming episode and a mountain association. The Eridu Genesis places Ninhursag within a collective act of human creation. Read together, these texts show both continuity and variation in how the goddess was represented.",
    ['claim-ninhursag-creation-birth-tradition', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  cs('cs-ninhursag-ancient-sources', 'deity-ninhursag', 'Ancient Sources',
    "Three Sumerian compositions provide direct evidence used in this profile. Enki and Ninhursag preserves her divine birth and healing roles. Lugal-e records the naming of Ninmaḫ as Ninḫursaĝa and associates her with the mountain Ḫursaĝ and its resources. The Eridu Genesis includes Ninhursag with An, Enlil, and Enki in fashioning humanity. Atrahasis is useful only as comparative evidence for other Mesopotamian birth and creation traditions involving Nintu or Mami and should not be used to erase distinctions among those divine identities.",
    ['claim-ninhursag-healing-sequence', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation', 'claim-atrahasis-nintu-mami-distinction']),

  cs('cs-ninhursag-scholarly', 'deity-ninhursag', 'Scholarly Interpretation',
    "Mesopotamian maternal and birth goddesses could overlap in names, functions, and theological associations without forming one unchanging identity across every period and composition. Lugal-e is especially important because it supplies direct textual evidence for a Ninmaḫ-Ninḫursaĝa connection in that particular narrative. That evidence does not justify automatically equating Ninhursag with Nintu, Mami, Ki, or every other maternal goddess encountered elsewhere.",
    ['claim-ninurta-lugale-ninmah-ninhursaga', 'claim-atrahasis-nintu-mami-distinction']),

  cs('cs-ninhursag-what-we-know', 'deity-ninhursag', 'What We Actually Know',
    "Directly attested: Ninhursag participates in divine generation and restores Enki in Enki and Ninhursag; Lugal-e connects Ninmaḫ with the name Ninḫursaĝa and a mountain domain; and the Eridu Genesis includes Ninhursag among the gods who fashion humanity. Strong scholarly evidence also places her within a broader field of maternal, birth, fertility, and generative divine power. What cannot be assumed is that Ninhursag, Ninmaḫ, Nintu, Mami, and Ki were permanently identical in every text and period.",
    ['claim-ninhursag-birth-creation-role', 'claim-ninhursag-healing-sequence', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation', 'claim-atrahasis-nintu-mami-distinction']),

  cs('cs-ninhursag-why-matters', 'deity-ninhursag', 'Why It Matters',
    "Ninhursag matters because the surviving texts preserve several dimensions of divine generative power rather than one narrow fertility role. Enki and Ninhursag links birth with bodily healing and restored order; Lugal-e connects her identity with a mountain and its abundance; and the Eridu Genesis places her within the creation of humanity itself. Together these sources show why Mesopotamian divine identities have to be reconstructed text by text instead of being flattened into a single timeless mythology.",
    ['claim-ninhursag-creation-birth-tradition', 'claim-ninurta-lugale-ninmah-ninhursaga', 'claim-eridu-genesis-creation']),

  // ---------------- MARDUK ----------------

  cs('cs-marduk-rise', 'deity-marduk', 'Historical Rise and Babylon',
    'Marduk did not begin Mesopotamian history as the universally supreme god. Modern scholarship traces his rise from a comparatively obscure third-millennium figure to the head of the Babylonian pantheon as Babylon itself gained political and religious importance. Later Babylonian theology could incorporate functions associated in earlier traditions with figures such as Enki/Ea. The historical rise of Marduk should therefore be distinguished from the supreme position assigned to him within later theological texts.',
    [
      'claim-babylon-marduk-elevation',
      'claim-marduk-nabu-later-prominence',
      'claim-enki-role-shift-babylonian',
      'claim-marduk-patron-babylon',
    ]),

  cs('cs-marduk-names-syncretisms', 'deity-marduk', 'Names, Titles, and Syncretisms',
    'Marduk accumulated titles and divine identities as his prominence developed. In the first millennium BCE he was frequently called Bēl, meaning Lord. Earlier theological development also connected him closely with Asalluhi and Tutu. These identifications were historical processes rather than proof that all of these divine names had always referred to an entirely identical figure in every earlier local tradition.',
    [
      'claim-marduk-bel-title',
      'claim-marduk-asalluhi-tutu-syncretism',
    ]),

  cs('cs-marduk-babylon-esagila', 'deity-marduk', 'Babylon, Esagila, and Etemenanki',
    'Marduk’s religious identity was inseparable from Babylon. Esagila was his principal temple, while Etemenanki formed part of the monumental sacred landscape of the city. Archaeological and historical evidence places these buildings at the religious heart of Babylon. Nebuchadnezzar II 034 adds direct royal testimony by identifying the king as a provider for Esagil and recording his support for the great sanctuaries.',
    [
      'claim-marduk-patron-babylon',
      'claim-babylon-esagila-etemenanki',
      'claim-marduk-nebuchadnezzar-esagil',
    ]),

  cs('cs-marduk-kingship', 'deity-marduk', 'Divine Kingship in Enūma eliš',
    'Tablet IV of Enūma eliš presents Marduk’s kingship as a decision of the divine assembly. After he demonstrates the power of his command, the gods acclaim him as king and grant him a throne, sceptre, and symbols of royal authority. The composition therefore connects Marduk’s elevation with collective divine authorization before his confrontation with Tiamat.',
    [
      'claim-marduk-enuma-elish-kingship',
    ]),

  cs('cs-marduk-tiamat-battle', 'deity-marduk', 'Winds and the Battle with Tiamat',
    'Marduk’s confrontation with Tiamat is described as an armed divine battle. Tablet IV describes him mustering the four winds and additional destructive winds, trapping Tiamat with his net and winds, and striking her with an arrow. These details belong specifically to the literary combat sequence of Enūma eliš and should not automatically be generalized into a timeless identity as a universal storm god.',
    [
      'claim-marduk-enuma-elish-winds',
      'claim-marduk-enuma-elish-defeats-tiamat',
    ]),

  cs('cs-marduk-cosmic-order', 'deity-marduk', 'Cosmic Ordering and Creation',
    'After defeating Tiamat, Marduk’s role shifts from divine combat to cosmic organization. Enūma eliš describes him dividing Tiamat’s body and using one half to form the sky. Within the composition, kingship, military victory, and creation are therefore tightly linked.',
    [
      'claim-marduk-enuma-elish-creation',
      'claim-marduk-enuma-elish-defeats-tiamat',
    ]),

  cs('cs-marduk-humanity', 'deity-marduk', 'Humanity, Ea, and Divine Labor',
    'Tablet VI extends Marduk’s organizing authority to humanity. Marduk proposes creating human beings so that divine labor can be transferred to them. Kingu is condemned and killed, while Ea creates humanity from Kingu’s blood in accordance with Marduk’s plan. The text therefore distinguishes Marduk’s proposal and authority from Ea’s direct role in fashioning mankind.',
    [
      'claim-enuma-elish-creation-of-humanity',
      'claim-enuma-elish-kingu-blood-humanity',
    ]),

  cs('cs-marduk-nabu', 'deity-marduk', 'Nabu and the Divine Household',
    'Marduk’s relationship with Nabu developed historically. Šamaš-šuma-ukin 4 directly identifies Nabu as the most important son of Asari, a name of Marduk. Broader historical evidence describes Nabu as Marduk’s minister and scribe and, from the Kassite period onward, as his firstborn son. Antiochus I provides a later independent witness by again addressing Nabu as Marduk’s firstborn son.',
    [
      'claim-nabu-shamash-shuma-ukin-son-of-marduk',
      'claim-nabu-marduk-relationship-development',
      'claim-nabu-antiochus-ezida-continuity',
    ]),

  cs('cs-marduk-royal-cult', 'deity-marduk', 'Royal Patronage and Processions',
    'The cult of Marduk was embedded in the ceremonial landscape of Neo-Babylonian Babylon. Nebuchadnezzar II 034 records royal provisioning of Esagil and work on major streets used for processions of Marduk and Nabu. The inscription also refers to the route associated with the akītu festival. This evidence connects Marduk’s cult directly with royal building policy, urban infrastructure, and public ritual.',
    [
      'claim-marduk-nebuchadnezzar-esagil',
      'claim-marduk-nebuchadnezzar-procession',
    ]),

  cs('cs-marduk-iconography', 'deity-marduk', 'Iconography: Spade and Mušḫuššu',
    'Marduk’s iconography is more securely recognized through symbols than through anthropomorphic portraits. The spade became one of his established divine symbols, while the mušḫuššu, or snake-dragon, became his characteristic symbol animal. Fully anthropomorphic representations of Marduk are comparatively rare.',
    [
      'claim-marduk-iconography-spade-dragon',
    ]),

  cs('cs-marduk-evidence-limits', 'deity-marduk', 'Evidence and Interpretation Limits',
    'Marduk’s evidence spans literary theology, royal inscriptions, archaeology, cult practice, and modern historical reconstruction. Enūma eliš directly attests one particular literary presentation of his kingship, battle, and cosmic authority. Royal inscriptions document Babylonian cult and patronage, while scholarship reconstructs his historical rise and syncretisms. These different forms of evidence should not be collapsed into a single timeless biography.',
    [
      'claim-babylon-marduk-elevation',
      'claim-marduk-bel-title',
      'claim-marduk-asalluhi-tutu-syncretism',
      'claim-marduk-nebuchadnezzar-esagil',
    ]),

  cs('cs-marduk-significance', 'deity-marduk', 'Historical Significance',
    'Marduk is one of the clearest examples of how political history, urban cult, literary theology, and divine genealogy interacted in ancient Mesopotamia. His rise alongside Babylon transformed a city patron into the dominant god of later Babylonian theology. Enūma eliš gave that supremacy a cosmic narrative, while Esagila, royal inscriptions, processions, Nabu’s developing sonship, and enduring divine symbols grounded his authority in Babylonian religious life.',
    []),
  // ---------------- TIAMAT ----------------
  cs('cs-tiamat-overview-expanded', 'deity-tiamat', 'Overview',
    'Tiamat is best known from the Babylonian creation epic En\u016bma eli\u0161, where her role changes substantially over the course of the narrative. She begins as a primordial watery progenitor associated with Apsu and initially resists Apsu\'s proposal to destroy the younger gods. After Apsu is killed, the conflict escalates: Tiamat creates a war host, appoints Kingu, and gives him the Tablet of Destinies. Marduk later defeats her, and the poem makes her body part of its explanation of cosmic order. This profile therefore follows the sequence of the text rather than reducing Tiamat to a timeless image of a monster or dragon.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-tiamat-opposes-apsu-destruction',
      'claim-enuma-elish-tiamat-kingu-war-preparation',
      'claim-tiamat-enuma-elish-defeated-by-marduk',
      'claim-tiamat-body-cosmic-order',
      'claim-tiamat-not-civic-deity',
    ]),
  cs('cs-tiamat-roles', 'deity-tiamat', 'Roles and Literary Functions',
    'Within En\u016bma eli\u0161, Tiamat fills several distinct literary functions rather than one fixed role. She belongs to the primordial beginning, is described as the one who bore the divine generations, becomes the leader of organized opposition after the death of Apsu, and finally becomes the defeated cosmic adversary whose body is incorporated into Marduk\'s ordering of the world. These functions belong to the narrative of this composition and should not automatically be generalized across all Mesopotamian religion.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-enuma-elish-tiamat-kingu-war-preparation',
      'claim-tiamat-enuma-elish-defeated-by-marduk',
      'claim-tiamat-body-cosmic-order',
    ]),
  cs('cs-tiamat-ancient-textual-tradition', 'deity-tiamat', 'Enuma Elish as the Principal Witness',
    'The principal ancient witness for Tiamat in this atlas is En\u016bma eli\u0161. Tablet I establishes the primordial setting, the conflict surrounding Apsu, Tiamat\'s initial objection to destroying the younger gods, and her later preparation for war. Tablet IV presents Marduk\'s battle with and defeat of Tiamat, while the transition into the following cosmic-ordering material describes the reuse of her body. Because the profile depends so heavily on one composition, claims are kept closely tied to the text and its narrative sequence.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-tiamat-opposes-apsu-destruction',
      'claim-enuma-elish-tiamat-kingu-war-preparation',
      'claim-tiamat-enuma-elish-defeated-by-marduk',
      'claim-tiamat-body-cosmic-order',
    ]),
  cs('cs-tiamat-apsu', 'deity-tiamat', 'Tiamat and Apsu at the Beginning',
    'At the opening of En\u016bma eli\u0161, Tiamat and Apsu appear before the later generations of gods have come into being. Their waters mingle, and Tiamat is described as the one who bore them all. This opening is important because it presents Tiamat first as part of the primordial generative setting, not first as Marduk\'s enemy.',
    ['claim-tiamat-enuma-elish-primordial-waters']),
  cs('cs-tiamat-initial-opposition', 'deity-tiamat', 'Tiamat Initially Opposes Apsu\'s Plan',
    'A crucial detail in Tablet I is that Tiamat does not begin by demanding the destruction of the younger gods. When Apsu proposes eliminating them because of their disruptive behavior, Tiamat objects, asking why they should destroy what they themselves created and urging endurance instead. This episode complicates later portrayals that treat her as hostile from the beginning of the epic.',
    ['claim-tiamat-opposes-apsu-destruction']),
  cs('cs-tiamat-apsu-death-escalation', 'deity-tiamat', 'Apsu\'s Death and the Escalation of Conflict',
    'The first violent turn in the epic centers on Apsu\'s plan and Ea\'s counteraction. Ea learns of the plot, subdues Apsu, and kills him. Tiamat\'s later mobilization for war occurs after this earlier conflict. Keeping these stages separate matters because the narrative does not present one continuous, unchanging hostility from Tiamat; her role develops as the crisis among the gods intensifies.',
    ['claim-enuma-elish-apsu-ea-conflict']),
  cs('cs-tiamat-kingu-war-host', 'deity-tiamat', 'Kingu and the War Host',
    'Later in Tablet I, Tiamat prepares for open conflict. She creates a formidable host of beings, appoints Kingu to command them, and places him at the center of her military opposition. This marks a major change from her earlier attempt to restrain Apsu and establishes the organized force that Marduk will eventually confront.',
    ['claim-enuma-elish-tiamat-kingu-war-preparation']),
  cs('cs-tiamat-tablet-destinies', 'deity-tiamat', 'The Tablet of Destinies',
    'Tiamat gives Kingu the Tablet of Destinies as part of his elevation to leadership of her forces. Within En\u016bma eli\u0161, the tablet is therefore embedded in the politics of command and legitimacy inside the war host. The episode should be read in this specific literary context rather than merged automatically with every Mesopotamian tradition involving a Tablet of Destinies.',
    ['claim-enuma-elish-tiamat-kingu-war-preparation']),
  cs('cs-tiamat-battle-marduk', 'deity-tiamat', 'The Battle with Marduk',
    'Tablet IV presents the decisive confrontation between Tiamat and Marduk. Marduk uses his net and winds against her, strikes her with an arrow, defeats her, and ends her life. The scene is the central combat episode of En\u016bma eli\u0161 and is closely connected to Marduk\'s elevation as champion and king within the composition.',
    ['claim-tiamat-enuma-elish-defeated-by-marduk']),
  cs('cs-tiamat-body-cosmos', 'deity-tiamat', 'Tiamat\'s Body and Cosmic Ordering',
    'Tiamat\'s role in the epic does not end simply with defeat. Marduk divides and arranges her body as part of the poem\'s account of cosmic ordering. One part becomes the sky, and later descriptions associate features of her body with rivers, mountains, and other elements of the ordered world. The narrative therefore turns the body of the defeated primordial figure into material for creation.',
    [
      'claim-tiamat-body-cosmic-order',
      'claim-marduk-enuma-elish-creation',
    ]),
  cs('cs-tiamat-cult-evidence', 'deity-tiamat', 'Cult and Worship Evidence',
    'Tiamat is a major figure in Babylonian mythology, but literary prominence is not the same thing as evidence for a civic temple cult. The evidence used in this atlas does not attest a civic temple institution dedicated to Tiamat comparable to Marduk\'s Esagila or Nabu\'s major sanctuaries. For that reason this profile leaves her without an associated cult center rather than inventing one from the setting of the myth.',
    ['claim-tiamat-not-civic-deity']),
  cs('cs-tiamat-evidence-limits', 'deity-tiamat', 'Evidence and Interpretation Limits',
    'Most of the detailed narrative information in this profile comes from En\u016bma eli\u0161, while the absence of a comparable civic cult is a conclusion drawn from broader scholarly evidence. The profile therefore distinguishes what the Babylonian poem directly says from later synthesis. It also avoids treating Tiamat\'s final role as Marduk\'s defeated opponent as though it were her only role from the beginning of the composition.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-tiamat-opposes-apsu-destruction',
      'claim-tiamat-enuma-elish-defeated-by-marduk',
      'claim-tiamat-not-civic-deity',
    ]),
  cs('cs-tiamat-significance', 'deity-tiamat', 'Historical and Literary Significance',
    'Tiamat is important because En\u016bma eli\u0161 uses one figure to connect primordial generation, divine conflict, political authority, and cosmic creation. Following her role from the opening waters, through her initial resistance to Apsu\'s violence, to the war host, defeat, and transformation into cosmic geography reveals a much more complex literary trajectory than the simplified modern image of a primordial monster. Her profile also demonstrates why mythological importance and institutional cult must be evaluated separately.',
    []),  // ---------------- NABU ----------------
  cs('cs-nabu-roles', 'deity-nabu', 'Roles and Domains',
    'Nabu’s association with writing and wisdom extends beyond the language of a single royal inscription. Šamaš-šuma-ukin 4 directly praises him as the scribe of everything, the wisest of the gods, and one who knows everything. Modern scholarly synthesis further identifies Nabu as a god of writing and wisdom, patron of scribes, and a deity commonly invoked in scribal colophons. The profile therefore distinguishes the wording of the ancient inscription from the broader historical pattern reconstructed from multiple sources.',
    ['claim-nabu-shamash-shuma-ukin-scribe-wisdom', 'claim-nabu-writing-scribal-patronage']),

  cs('cs-nabu-borsippa', 'deity-nabu', 'Borsippa and the Ezida Temple',
    'Borsippa was one of the central places of Nabu’s cult. Šamaš-šuma-ukin 4 directly places him in Ezida at Borsippa and identifies the city as his cult center. Administrative evidence preserved from Borsippa documents Ezida as a functioning temple institution with personnel and economic activity, while the much later inscription of Antiochus I demonstrates continued royal investment in the sanctuary centuries afterward. Borsippa therefore provides evidence for both cultic location and long institutional continuity.',
    ['claim-nabu-shamash-shuma-ukin-ezida-borsippa', 'claim-borsippa-ezida-nabu', 'claim-nabu-antiochus-ezida-continuity']),

  cs('cs-nabu-marduk', 'deity-nabu', 'Nabu and Marduk',
    'The relationship between Nabu and Marduk should be understood historically rather than as an unchanging genealogy. Šamaš-šuma-ukin 4 directly identifies Nabu as the most important son of Asari, a name of Marduk. Broader historical evidence indicates that Nabu was incorporated into Marduk’s cult as minister and scribe and, from the Kassite period onward, came to be accepted as Marduk’s firstborn son. The direct inscriptional evidence and the longer historical development are therefore presented separately.',
    ['claim-nabu-shamash-shuma-ukin-son-of-marduk', 'claim-nabu-marduk-relationship-development']),

  cs('cs-nabu-assyria', 'deity-nabu', 'Nabu in Neo-Assyrian Religion',
    'Nabu became an important deity in Neo-Assyrian religion as well as in Babylonia. His position at Kalhu developed over time: evidence indicates that he was comparatively peripheral in Ashurnasirpal II’s original royal religious program, while Ezida gained increasing importance during the eighth and seventh centuries BCE and became closely connected with kingship, literacy, and scholarship. Excavators recovered roughly 250 scholarly tablets from a room near Nabu’s shrine at Kalhu, providing unusually concrete archaeological evidence for the intellectual activity associated with his temple. A colophon from Ashurbanipal’s library provides complementary royal evidence, stating that Nabu and Tašmetu granted the king broad understanding in connection with his mastery of scribal learning.',
    ['claim-assyria-cult-figures', 'claim-nabu-assyrian-royal-cult-development', 'claim-nabu-kalhu-scholarship', 'claim-tashmetu-ashurbanipal-understanding']),

  cs('cs-nabu-overview-expanded', 'deity-nabu', 'Overview',
    'Nabu was a Mesopotamian god whose historical identity became strongly associated with writing, wisdom, scribal culture, Borsippa, and the divine household of Marduk. Direct royal inscriptions attest titles such as scribe of everything and wisest of the gods, while broader textual, institutional, and archaeological evidence shows that his importance developed across Babylonian and Assyrian history rather than remaining static. His cult centered especially on Ezida at Borsippa but also became prominent in Assyria, including at Kalhu. Evidence from the Seleucid period demonstrates that his sanctuary and major theological relationships continued to matter centuries after the height of the Neo-Babylonian Empire.',
    ['claim-nabu-writing-scribal-patronage', 'claim-borsippa-ezida-nabu', 'claim-marduk-nabu-later-prominence', 'claim-nabu-antiochus-ezida-continuity']),

  cs('cs-nabu-names-etymology', 'deity-nabu', 'Names and Etymology',
    'The divine name is conventionally rendered Nabu or Nabû in modern scholarship. Its etymology is connected with the Semitic root nbʾ, associated with naming or designating. The form Nebo is familiar from biblical transmission. These spellings belong to different linguistic and modern transliteration conventions and should not be treated as evidence for separate deities.',
    ['claim-nabu-name-etymology-nebo']),

  cs('cs-nabu-historical-development', 'deity-nabu', 'Historical Development',
    'Nabu’s prominence was not timeless. The evidence used in this atlas treats both the rise of Marduk and the rise of Nabu as later developments in Mesopotamian religious history rather than projecting their first-millennium importance backward into the Akkadian Empire. Nabu’s integration into Marduk’s theological household likewise developed historically, eventually establishing him as Marduk’s minister, scribe, and firstborn son in later tradition.',
    ['claim-marduk-nabu-later-prominence', 'claim-nabu-marduk-relationship-development']),

  cs('cs-nabu-akitu-destiny', 'deity-nabu', 'Akītu and the Tablet of Destinies',
    'Nabu’s scribal identity also had a ritual dimension. Scholarly reconstruction of the Babylonian New Year festival describes Nabu performing a major scribal function near the end of the akītu celebration, recording the settled fate of the land on the Tablet of Destinies. This connection links writing not merely with human scribal practice but with the divine administration and recording of destiny. Separately, Nebuchadnezzar II 034 provides direct Neo-Babylonian evidence for the public ritual setting by recording processional streets used by Marduk and Nabu and referring to the route associated with the akītu procession.',
    ['claim-nabu-akitu-tablet-destinies', 'claim-marduk-nebuchadnezzar-procession']),

  cs('cs-nabu-family-consorts', 'deity-nabu', 'Family and Consorts',
    'The surviving traditions do not preserve one universal consort relationship for Nabu. Tašmetu is especially prominent as his consort in first-millennium Assyria, while Nanaya occupies a parallel consort role in Babylonian tradition. Presenting both traditions separately avoids collapsing regional and historical variation into a single fixed divine family tree.',
    ['claim-nabu-consorts-tashmetu-nanaya']),

  cs('cs-nabu-symbols-iconography', 'deity-nabu', 'Symbols and Iconography',
    'Nabu’s principal symbol is the writing wedge or stylus, an iconographic expression of his association with writing and scribal knowledge. The stylus may appear independently or together with a tablet or dais, and some representations also associate Nabu with the mušhuššu dragon. These visual symbols provide a different category of evidence from literary descriptions of the god.',
    ['claim-nabu-symbol-stylus']),

  cs('cs-nabu-later-history', 'deity-nabu', 'Later History — Antiochus I and Ezida',
    'Nabu’s cult did not end with the fall of the Neo-Babylonian Empire. In 268 BCE, the Seleucid ruler Antiochus I recorded laying the foundations of Ezida at Borsippa. In the same inscription Nabu is addressed as the wisest of the gods and firstborn son of Marduk. This provides direct ancient evidence that both the sanctuary at Borsippa and major elements of Nabu’s theological identity continued into the Hellenistic period.',
    ['claim-nabu-antiochus-ezida-continuity']),

  cs('cs-nabu-evidence-limits', 'deity-nabu', 'Evidence and Limits',
    'Nabu’s profile is supported by different kinds of evidence that should not be collapsed into one category. Šamaš-šuma-ukin 4 provides direct seventh-century BCE royal inscriptional evidence for his wisdom, scribal identity, relationship with Marduk, and residence at Ezida. Archaeological material from Kalhu documents scholarly activity inside an Assyrian Nabu temple. Scholarly synthesis establishes broader historical patterns such as scribal patronage and changing theological relationships, while Antiochus I supplies a later independent primary witness. Claims that extend beyond these specific bodies of evidence require their own supporting sources.',
    ['claim-nabu-shamash-shuma-ukin-scribe-wisdom', 'claim-nabu-shamash-shuma-ukin-ezida-borsippa', 'claim-nabu-shamash-shuma-ukin-son-of-marduk', 'claim-nabu-kalhu-scholarship', 'claim-nabu-writing-scribal-patronage', 'claim-nabu-marduk-relationship-development', 'claim-nabu-antiochus-ezida-continuity']),

  cs('cs-nabu-significance', 'deity-nabu', 'Historical Significance',
    'Nabu is especially valuable for understanding how Mesopotamian divine identities developed across time, place, ritual, scholarship, and political power. His evidence connects the temple of Ezida at Borsippa with scribal culture, the theology of Marduk, the Babylonian New Year festival, Assyrian royal and scholarly institutions, and continued Seleucid patronage. Rather than presenting one timeless description of the god, these sources allow the atlas to trace a historically changing religious figure across more than one political and cultural setting.',
    ['claim-borsippa-ezida-nabu', 'claim-nabu-writing-scribal-patronage', 'claim-nabu-marduk-relationship-development', 'claim-nabu-akitu-tablet-destinies', 'claim-nabu-assyrian-royal-cult-development', 'claim-nabu-kalhu-scholarship', 'claim-nabu-antiochus-ezida-continuity']),

  cs('cs-tashmetu-overview', 'deity-tashmetu', 'Overview',
    "Tašmetu was a Mesopotamian goddess most prominently known in first-millennium Assyria as the consort of Nabu. Her surviving evidence connects divine partnership, wisdom, sensual attraction, temple ritual, and Assyrian scribal culture. Kalhu became a particularly important setting for her cult, where she was worshipped alongside Nabu in the Ezida complex.",
    ['claim-tashmetu-wisdom-attractiveness', 'claim-nabu-consorts-tashmetu-nanaya', 'claim-tashmetu-kalhu-cult']),

  cs('cs-tashmetu-identity', 'deity-tashmetu', 'Identity and Divine Family',
    "Tašmetu's identity is closely connected with Nabu, but the evidence preserves characteristics of her own. Scholarly synthesis associates her with both wisdom and sexual attractiveness and identifies her as a daughter of Uraš of Dilbat. These features place her within overlapping traditions of divine knowledge, attraction, and family relationships rather than reducing her simply to a secondary figure beside Nabu.",
    ['claim-tashmetu-wisdom-attractiveness', 'claim-tashmetu-urash-genealogy']),

  cs('cs-tashmetu-nabu', 'deity-tashmetu', 'Tašmetu and Nabu',
    "In first-millennium Assyria, Tašmetu was especially prominent as Nabu's consort. This pairing should not be projected uniformly across Mesopotamia: Babylonian tradition could instead place Nanaya in the consort role. The atlas therefore preserves Tašmetu and Nanaya as parallel regional traditions rather than treating either relationship as universal.",
    ['claim-nabu-consorts-tashmetu-nanaya']),

  cs('cs-tashmetu-kalhu', 'deity-tashmetu', 'Kalhu and the Ezida Temple',
    "Kalhu was one of the clearest institutional settings for Tašmetu's first-millennium cult. Her worship was established there alongside Nabu, and around 800 BCE Adad-nirari III is associated with paired sacred spaces for the two deities within the Ezida temple complex. The evidence gives Tašmetu a concrete place within Neo-Assyrian temple religion rather than leaving her known only through divine genealogy.",
    ['claim-tashmetu-kalhu-cult']),

  cs('cs-tashmetu-ritual-love-poetry', 'deity-tashmetu', 'Ritual and Love Poetry',
    "A seventh-century literary composition preserved in Ashurbanipal's library celebrates Nabu and Tašmetu speaking and rejoicing in their relationship. Modern scholarship connects the composition with ceremonial activity in which their cult statues were brought together in a divine marriage setting. Because that ritual connection is reconstructed rather than stated as a simple historical report, it is classified here as scholarly interpretation.",
    ['claim-tashmetu-marriage-ritual']),

  cs('cs-tashmetu-wisdom-scribal-learning', 'deity-tashmetu', 'Wisdom and Scribal Learning',
    "Tašmetu's association with wisdom is not limited to inference from Nabu's character. An Ashurbanipal library colophon directly names Nabu and Tašmetu together as the divine pair who granted the king broad understanding in the context of his scribal accomplishments. This provides primary textual evidence connecting Tašmetu with the learned culture surrounding the Assyrian royal library.",
    ['claim-tashmetu-ashurbanipal-understanding', 'claim-tashmetu-wisdom-attractiveness']),

  cs('cs-tashmetu-historical-attestation', 'deity-tashmetu', 'Historical Attestation',
    "Tašmetu appears comparatively late in the surviving Mesopotamian record. Fragmentary Old Babylonian god lists provide early evidence, while her documentation becomes substantially clearer in the first millennium through Neo-Assyrian material and later Achaemenid and Seleucid attestations. Her historical profile therefore depends heavily on evidence from periods in which Nabu himself had become a major deity.",
    ['claim-tashmetu-attestation-range']),

  cs('cs-tashmetu-iconography-limits', 'deity-tashmetu', 'Iconography and Evidence Limits',
    "No securely identified ancient depiction of Tašmetu is presently known. Her identity can therefore be reconstructed much more confidently from texts, cult settings, and theological relationships than from visual evidence. Any modern hero artwork used by this atlas should consequently be understood as a historically informed artistic reconstruction, not as a reproduction of an attested ancient portrait of the goddess.",
    ['claim-tashmetu-iconography-unknown']),

  cs('cs-tashmetu-significance', 'deity-tashmetu', 'Historical Significance',
    "Tašmetu provides an important example of how a Mesopotamian goddess could occupy several overlapping spheres at once: divine partnership, wisdom, attraction, ritual performance, temple cult, and scholarly ideology. Her evidence at Kalhu also shows how Babylonian deities and traditions could be incorporated and reshaped within Neo-Assyrian religious and royal culture.",
    ['claim-nabu-consorts-tashmetu-nanaya', 'claim-tashmetu-wisdom-attractiveness', 'claim-tashmetu-marriage-ritual', 'claim-tashmetu-kalhu-cult', 'claim-tashmetu-ashurbanipal-understanding']),

  cs('cs-place-kalhu-tashmetu', 'place-kalhu', 'Tašmetu at Kalhu',
    "Tašmetu was worshipped at Kalhu alongside Nabu. Around 800 BCE, Adad-nirari III is associated with paired sacred spaces for Nabu and Tašmetu within the Ezida complex, making Kalhu one of the most important documented settings for her Neo-Assyrian cult.",
    ['claim-tashmetu-kalhu-cult']),

  cs('cs-nanaya-overview', 'deity-nanaya', 'Overview',
    "Nanaya was a Mesopotamian goddess with a history extending from the Ur III period into the first millennium BCE and beyond. She was closely associated with love and sexual attraction, with Inanna/Ištar, and especially with the city of Uruk. Later Babylonian tradition could also place her beside Nabu as his consort. Her surviving evidence is broader than that single relationship, however, encompassing temple building, royal hymns, ritual, changing genealogies, and royal claims about the movement and restoration of her cult image.",
    ['claim-nanaya-love-ishtar-association', 'claim-nanaya-attestation-range', 'claim-nanaya-uruk-ehiliana']),

  cs('cs-nanaya-identity', 'deity-nanaya', 'Love, Inanna/Ištar, and Divine Identity',
    "Nanaya is closely connected in modern scholarship with Inanna/Ištar, particularly in the sphere of love and sexual attraction. Ancient tradition nevertheless does not preserve one simple, timeless genealogy. Lipit-Eštar calls Nanaya the beloved child of Inanna, whereas a much later hymn of Sargon II calls her a daughter of Sin. The profile therefore presents her relationship with Inanna/Ištar as historically close while preserving the variation found in individual sources.",
    ['claim-nanaya-love-ishtar-association', 'claim-nanaya-genealogy-varies']),

  cs('cs-nanaya-early-history', 'deity-nanaya', 'Early History and Attestation',
    "Nanaya is already well attested long before the Neo-Assyrian and Neo-Babylonian periods. ORACC lexical data records her from the Ur III period onward. In the Early Old Babylonian period, Lipit-Eštar explicitly calls her the beloved child of Inanna and records building the E-me-urur for her at Isin. Her later prominence should therefore not be mistaken for a first-millennium origin.",
    ['claim-nanaya-attestation-range', 'claim-nanaya-lipit-eshtar-inanna']),

  cs('cs-nanaya-uruk', 'deity-nanaya', 'Uruk, Eanna, and Ehiliana',
    "Uruk became one of the clearest major settings of Nanaya's cult. Esarhaddon directly addresses her as queen of Uruk and describes restoring Ehiliana, her cella inside the Eanna temple complex. This evidence places Nanaya within one of Mesopotamia's most important urban and religious institutions and provides direct architectural context for her worship.",
    ['claim-nanaya-uruk-ehiliana']),

  cs('cs-nanaya-nabu', 'deity-nanaya', 'Nanaya and Nabu',
    "In Babylonian tradition, Nanaya could occupy the role of Nabu's consort. This pairing existed alongside the first-millennium Assyrian tradition in which Tašmetu was especially prominent as Nabu's consort. Treating these as parallel regional traditions avoids turning Mesopotamian divine relationships into a single fixed family tree.",
    ['claim-nabu-consorts-tashmetu-nanaya']),

  cs('cs-nanaya-royal-hymns', 'deity-nanaya', 'Royal Hymns and Warrior Imagery',
    "The Nanaya Hymn of Sargon II demonstrates that her literary identity was not restricted to love or beauty. The hymn praises her as exalted, beautiful, powerful, and queenly while also employing battle imagery and calling her a warrioress. These combinations show how a deity's functions and literary characterization could overlap rather than fitting into one narrow modern category.",
    ['claim-nanaya-sargon-hymn-warrior']),

  cs('cs-nanaya-divine-marriage', 'deity-nanaya', 'Ritual and Divine Marriage',
    "A ritual text from Uruk places rites of divine marriage within Ehiliana, Nanaya's temple. The text demonstrates that sexuality and divine partnership were not only literary themes attached to the goddess but could also be expressed through formal cultic ritual. The surviving passage identifies the ritual setting clearly, while interpretation of every theological detail requires caution.",
    ['claim-nanaya-divine-marriage-ritual']),

  cs('cs-nanaya-return-uruk', 'deity-nanaya', 'Ashurbanipal and the Return to Uruk',
    "Ashurbanipal's inscriptions claim that Nanaya had been in Elam and that he returned her to Uruk, Eanna, and Ehiliana. The royal narrative is valuable direct evidence for the political and religious importance attached to her cult image. Its ideological chronology should not automatically be treated as neutral historical reporting, but the claimed restoration itself shows how possession and return of a divine image could be incorporated into imperial royal ideology.",
    ['claim-nanaya-ashurbanipal-return']),

  cs('cs-nanaya-evidence-limits', 'deity-nanaya', 'Evidence and Limits',
    "Nanaya's evidence spans many centuries and several genres, including lexical attestations, royal inscriptions, hymns, temple records, and ritual texts. Those sources do not always present the goddess identically. Her genealogy varies, her relationship with Inanna/Ištar can be expressed in different ways, and royal accounts of the movement of her cult image serve political as well as religious purposes. The atlas therefore separates direct ancient claims from broader historical synthesis rather than forcing all evidence into one timeless description.",
    ['claim-nanaya-attestation-range', 'claim-nanaya-genealogy-varies', 'claim-nanaya-love-ishtar-association', 'claim-nanaya-sargon-hymn-warrior', 'claim-nanaya-divine-marriage-ritual', 'claim-nanaya-ashurbanipal-return']),

  cs('cs-nanaya-significance', 'deity-nanaya', 'Historical Significance',
    "Nanaya is valuable precisely because her history cannot be reduced to one role. Across the surviving record she connects love and attraction, Inanna/Ištar traditions, Uruk and Eanna, royal hymnody, ritual marriage, the theology of Nabu, and the politics surrounding divine cult images. Her profile demonstrates how Mesopotamian divine identities could remain recognizable while changing across centuries, cities, and political settings.",
    ['claim-nanaya-love-ishtar-association', 'claim-nanaya-attestation-range', 'claim-nanaya-uruk-ehiliana', 'claim-nanaya-sargon-hymn-warrior', 'claim-nanaya-divine-marriage-ritual', 'claim-nabu-consorts-tashmetu-nanaya', 'claim-nanaya-ashurbanipal-return']),

  cs('cs-place-uruk-nanaya', 'place-uruk', 'Nanaya at Uruk',
    "Nanaya held an important place in the religious life of Uruk. Esarhaddon calls her queen of Uruk and records the restoration of Ehiliana, her cella within Eanna. Later royal inscriptions also emphasize her return to Uruk and restoration within that sacred complex.",
    ['claim-nanaya-uruk-ehiliana', 'claim-nanaya-ashurbanipal-return']),

  cs('cs-place-kalhu-history', 'place-kalhu', 'Historical Importance',
    "Kalhu, known today as the archaeological site of Nimrud, became one of the defining cities of the Neo-Assyrian Empire. Ashurnasirpal II transformed the older settlement into a monumental royal capital during the ninth century BCE. From Kalhu, Assyrian kings governed an expanding imperial state while constructing palaces, temples, administrative buildings, military facilities, and elite residences that made the city a physical expression of royal power.",
    ['claim-kalhu-royal-capital']),

  cs('cs-place-kalhu-royal-capital', 'place-kalhu', 'Ashurnasirpal II and the Royal Capital',
    "Ashurnasirpal II's rebuilding of Kalhu fundamentally changed the city's political importance. The Northwest Palace alone covered roughly 28,000 square metres and combined ceremonial reception areas, royal living quarters, administrative and military functions, and burial spaces. Its monumental architecture and decorated rooms turned the palace into one of the clearest surviving expressions of Neo-Assyrian kingship and court culture.",
    ['claim-kalhu-royal-capital', 'claim-kalhu-northwest-palace']),

  cs('cs-place-kalhu-sacred-landscape', 'place-kalhu', 'Ziggurat, Temples, and Sacred Landscape',
    "Kalhu was also a major sacred landscape. A monumental ziggurat dominated part of the citadel beside the temple precinct associated with Ninurta, while royal inscriptions attribute extensive temple construction to Ashurnasirpal II. The city's religious architecture therefore stood directly beside its royal institutions, linking kingship, divine patronage, cult practice, and monumental building within the same urban center.",
    ['claim-kalhu-ziggurat-temples', 'claim-ninurta-kalhu-temple-statue']),
  cs('cs-place-kalhu-context', 'place-kalhu', 'Nabu and Ezida at Kalhu',
    "Kalhu, the Assyrian city known today as Nimrud, became an important setting for the cult of Nabu. His temple Ezida gained prominence during the eighth and seventh centuries BCE and became increasingly connected with Assyrian kingship and learned culture.",
    ['claim-nabu-assyrian-royal-cult-development']),

  cs('cs-place-kalhu-scholarship', 'place-kalhu', 'Ezida and Scholarship',
    "The Ezida temple at Kalhu preserves unusually concrete evidence for scholarly activity associated with Nabu. Excavators recovered roughly 250 scholarly tablets near the god's shrine, including omen texts, incantations, ritual works, hymns, lexical texts, medicine, literature, and calendrical material.",
    ['claim-nabu-kalhu-scholarship']),
  cs('cs-place-kalhu-ninurta', 'place-kalhu', 'Ninurta and Royal Cult at Kalhu',
    "Ashurnasirpal II 001 provides direct evidence for Ninurta's importance at Kalhu. The inscription addresses him as a supreme warrior and king of battle and explicitly calls him the god who dwells in Kalhu. Later in the same inscription, Ashurnasirpal II records founding Ninurta's temple, making a new cult statue, appointing festivals, and installing the god's dais. Together these passages connect Ninurta's royal and military character with a concrete temple institution and cult at Kalhu.",
    ['claim-ninurta-kalhu-warrior-titles', 'claim-ninurta-kalhu-temple-statue']),
  cs('cs-place-kalhu-later-history', 'place-kalhu', 'Later History and the End of the Assyrian Empire',
    "Kalhu's political role changed after the royal court moved elsewhere near the end of the eighth century BCE, but the city did not become irrelevant. It continued to function as a provincial administrative center and as an important location for scholarship and temple life. Kalhu was destroyed during the collapse of the Assyrian Empire in 612 BCE, although occupation at the site continued into later periods.",
    ['claim-kalhu-later-history', 'claim-nabu-kalhu-scholarship']),

  cs('cs-place-kalhu-archaeology', 'place-kalhu', 'Archaeology and Rediscovery',
    "Modern archaeological investigation of Nimrud began in the nineteenth century and revealed one of the richest bodies of evidence for the Neo-Assyrian world. Excavations exposed monumental palaces, temples, sculptures, inscriptions, archives, ivories, administrative records, and scholarly tablets. These discoveries allow Kalhu to be studied not only as a royal capital described in inscriptions but as a physical city whose government, religion, scholarship, warfare, art, and domestic life survive archaeologically.",
    ['claim-kalhu-modern-excavation', 'claim-kalhu-northwest-palace', 'claim-nabu-kalhu-scholarship']),
  // ---------------- SUMER ----------------
  cs('cs-sumer-who', 'civ-sumer', 'Who They Were',
    "Sumer refers to the Sumerian-speaking civilization of southern Mesopotamia associated with some of the region's earliest large urban centers. For most of its history it was not one unified state but a landscape of politically distinct cities whose institutions, rulers, and local traditions developed alongside a wider shared cultural world.",
    ['claim-sumer-language-isolate', 'claim-sumer-citystates-political', 'claim-uruk-early-urban-center', 'claim-lagash-third-millennium-city']),

  cs('cs-sumer-language', 'civ-sumer', 'Language',
    "Sumerian is a language isolate: no demonstrated genetic relationship connects it to another known language family. Akkadian increasingly displaced Sumerian as an everyday spoken language, but Sumerian remained important in learned, literary, scribal, and religious culture long afterward, contributing to a long Sumero-Akkadian bilingual tradition.",
    ['claim-sumer-language-isolate', 'claim-akkad-literary-adoption']),

  cs('cs-sumer-political', 'civ-sumer', 'Political History — Briefly',
    "Sumer was not, for most of its history, a single unified state. It consisted of independent and often rival city-states — including Ur, Uruk, Eridu, Nippur, Lagash, and Kish — each with its own political institutions, territory, ruling traditions, and important cults, although individual rulers and cities periodically achieved wider regional hegemony.",
    ['claim-sumer-citystates-political']),

  cs('cs-sumer-religion', 'civ-sumer', 'Religion',
    "Sumerian religion combined local city cults with a broader divine world shared across southern Mesopotamia. Surviving Sumerian compositions preserve differing traditions concerning creation, kingship, flood catastrophe, divine authority, and the underworld. These texts should not be flattened into one fixed theology: the Eridu Genesis presents gods fashioning humanity, the Sumerian King List incorporates a flood into its account of kingship, and Inanna's Descent preserves one particular vision of passage into the underworld.",
    ['claim-sumer-citystates-political', 'claim-eridu-genesis-creation', 'claim-sumerian-king-list-antediluvian-reigns', 'claim-inanna-descent-seven-gates']),

  cs('cs-sumer-writing', 'civ-sumer', 'Writing and Scribal Culture',
    "Proto-cuneiform, one of the earliest known writing systems, developed in southern Mesopotamia largely in administrative contexts involving commodities, labor, institutions, and accounting. Literary and religious use came later. The surviving Sumerian literary corpus therefore belongs to a scribal tradition that developed after writing was already functioning as an administrative technology.",
    ['claim-sumer-writing-origin']),

  cs('cs-sumer-archaeology', 'civ-sumer', 'Archaeology',
    "Archaeological evidence from southern Mesopotamia demonstrates that the world labeled Sumer was not reconstructed from literature alone. Eridu preserves a long occupational and architectural sequence; Uruk became one of Mesopotamia's earliest major urban centers; Nippur preserves temple, residential, defensive, and water-management remains; and Lagash provides evidence for large-scale third-millennium urbanism. These sites provide independent material evidence for the cities, institutions, and landscapes described in the historical reconstruction of Sumer.",
    ['claim-eridu-long-occupation', 'claim-uruk-early-urban-center', 'claim-nippur-urban-landscape', 'claim-lagash-third-millennium-city']),

  cs('cs-sumer-legacy', 'civ-sumer', 'Relationships With Later Cultures',
    "Akkadian scribes did not simply discard Sumerian literary tradition after Akkadian became dominant. Sumerian compositions continued to be copied, studied, translated, adapted, and reworked within a long bilingual scribal culture. Later Babylonian and Assyrian traditions inherited substantial Sumerian material but reshaped it for new linguistic, theological, literary, and political settings rather than merely preserving an unchanged Sumerian original.",
    ['claim-akkad-literary-adoption']),

  cs('cs-sumer-why-matters', 'civ-sumer', 'Why It Matters',
    "Sumer is fundamental to the study of ancient Mesopotamia because southern Mesopotamian communities participated in the early development of cities and writing while Sumerian-language traditions preserved major early forms of Mesopotamian kingship, flood, creation, divine, and underworld literature. Their importance does not depend on claiming that every later Mesopotamian belief originated in one fixed Sumerian system: the historical record instead shows continuity, bilingual transmission, adaptation, and repeated reinterpretation.",
    ['claim-sumer-writing-origin', 'claim-sumer-citystates-political', 'claim-akkad-literary-adoption', 'claim-eridu-genesis-creation', 'claim-sumerian-king-list-antediluvian-reigns', 'claim-inanna-descent-seven-gates']),
  // ---------------- AKKAD ----------------
  cs('cs-akkad-who', 'civ-akkad', 'Who They Were',
    "The Akkadian Empire is conventionally associated with Sargon of Akkad, whose conquests brought multiple Sumerian city-states under centralized imperial rule. The empire joined populations and cities with different linguistic and local traditions within one political system and became a major turning point in Mesopotamian political history.",
    ['claim-akkad-sargon-empire']),

  cs('cs-akkad-religion', 'civ-akkad', 'Religion',
    "Akkadian imperial religion operated within an already established Mesopotamian religious landscape rather than replacing it wholesale. Royal ideology under Sargon and his immediate successors gave particular prominence to Ishtar, corresponding to Sumerian Inanna, while Enlil's cult at Nippur and An's senior status remained important sources of religious legitimacy. Marduk and Nabu had not yet attained the prominence they would hold in later Babylonian and Assyrian history. Akkadian scribes also continued to translate, adapt, and transmit Sumerian literary traditions.",
    ['claim-akkad-patron-deities', 'claim-marduk-nabu-later-prominence', 'claim-akkad-literary-adoption']),

  cs('cs-akkad-legacy', 'civ-akkad', 'Relationships With Later Cultures',
    "The Akkadian period did not create a clean break with Sumerian culture. Akkadian scribes translated, adapted, and continued copying Sumerian compositions, helping sustain a bilingual literary culture that continued long after the empire itself disappeared. Later Babylonian and Assyrian scribal traditions developed within this broader history of linguistic coexistence, preservation, and reworking rather than simply replacing everything that came before.",
    ['claim-akkad-literary-adoption']),
  // ---------------- BABYLON ----------------
  cs('cs-babylon-who', 'civ-babylon', 'Who They Were',
    "Babylon was both a city and the center of several important political formations in Mesopotamian history. It rose to major political prominence under Hammurabi in the Old Babylonian period and again became an imperial capital under the Neo-Babylonian dynasty. Its political history was therefore not one uninterrupted empire but a sequence of changing dynasties, periods of foreign rule, revival, and renewed regional power.",
    ['claim-babylon-hammurabi-code', 'claim-babylon-nebuchadnezzar-rebuilding']),

  cs('cs-babylon-political', 'civ-babylon', 'Political History — Briefly',
    "Hammurabi's reign marks one of Babylon's major early expansions, and his surviving law collection became one of the best-known legal monuments of the ancient Near East. Scholars continue to debate how directly that collection represents everyday judicial practice as opposed to royal ideology and self-presentation. Centuries later, Neo-Babylonian rulers, especially Nebuchadnezzar II, transformed the monumental landscape of the capital through extensive building and restoration.",
    ['claim-babylon-hammurabi-code', 'claim-babylon-nebuchadnezzar-rebuilding']),

  cs('cs-babylon-religion', 'civ-babylon', 'Religion',
    "Babylonian religion became increasingly centered on Marduk as Babylon itself rose in political importance. Enūma eliš dramatizes Marduk's elevation to divine kingship and connects his authority directly with Babylon and Esagila. Nabu also became a major deity in later Babylonian religious life. Tiamat occupies a different category: she is central to the mythology of Enūma eliš but is not attested with a civic temple cult comparable to Marduk or Nabu.",
    ['claim-babylon-marduk-elevation', 'claim-marduk-nabu-later-prominence', 'claim-enuma-elish-babylon-esagila', 'claim-tiamat-not-civic-deity']),

  cs('cs-babylon-texts', 'civ-babylon', 'Important Texts',
    "Babylonian literary history includes Enūma eliš, Atrahasis, and the long Gilgamesh tradition, but these works must not be treated as though they all emerged in one period or followed one shared recension history. Atrahasis is best attested through an Old Babylonian recension, while the fullest surviving Gilgamesh is the later Standard Babylonian version preserved especially at Nineveh. Enūma eliš is a distinct Babylonian composition centered on Marduk, divine kingship, creation, and Babylon itself.",
    ['claim-gilgamesh-atrahasis-distinct-recensions', 'claim-enuma-elish-babylon-esagila']),

  cs('cs-babylon-cities-temples', 'civ-babylon', 'Temples / Religious Centers',
    "Babylon's sacred landscape included Esagila, the principal temple of Marduk, and the monumental Etemenanki complex. Enūma eliš itself links the building of Babylon and Esagila with Marduk's kingship and the assembly of the gods. Neo-Babylonian evidence also connects royal ideology with the Akītu procession, showing that Babylon's monumental architecture, festival routes, divine cult, and kingship were closely intertwined.",
    ['claim-babylon-esagila-etemenanki', 'claim-enuma-elish-babylon-esagila', 'claim-nebuchadnezzar-ii-034-akitu-intercession']),

  cs('cs-babylon-writing', 'civ-babylon', 'Writing and Scribal Culture',
    "Babylonian scribal culture belonged to the longer cuneiform tradition inherited from earlier Mesopotamia. Its scholars copied, transmitted, and reworked older literary material while also preserving distinctly Babylonian compositions. The separate manuscript histories of Atrahasis and Gilgamesh demonstrate that transmission was an extended process of copying and recension rather than the preservation of one fixed textual form.",
    ['claim-akkad-literary-adoption', 'claim-gilgamesh-atrahasis-distinct-recensions']),

  cs('cs-babylon-why-matters', 'civ-babylon', 'Why It Matters',
    "Babylon became one of the most influential intellectual, political, and religious centers of ancient Mesopotamia. Its importance rests not on a claim that every Mesopotamian tradition originated there, but on the way Babylonian rulers, theologians, and scribes reshaped inherited traditions around institutions such as Marduk's cult, Esagila, and the literary world represented by Enūma eliš, Atrahasis, and Gilgamesh. Babylon therefore stands at a major intersection of political power, textual transmission, and theological reinterpretation.",
    ['claim-babylon-marduk-elevation', 'claim-babylon-esagila-etemenanki', 'claim-gilgamesh-atrahasis-distinct-recensions', 'claim-enuma-elish-babylon-esagila']),
  // ---------------- ASSYRIA ----------------
  cs('cs-assyria-who', 'civ-assyria', 'Who They Were',
    "Assyria was a northern Mesopotamian civilization whose political history extended across many centuries rather than one uninterrupted imperial phase. Its earliest major political and sacred center was Ashur on the Tigris. Over time Assyrian rulers developed increasingly powerful territorial states, culminating in the Neo-Assyrian Empire, while the city of Ashur retained exceptional religious and symbolic importance even after royal administration moved elsewhere.",
    ['claim-ashur-early-capital']),

  cs('cs-assyria-political', 'civ-assyria', 'Political Development — Old, Middle, and Neo-Assyrian Periods',
    "Assyrian history is best understood as a long sequence of political phases rather than as one static empire. Middle Assyrian rulers already articulated powerful forms of kingship and territorial authority, while later rulers rebuilt Assyrian power after periods of contraction. The inscription of Aššur-dān II provides direct evidence for this renewed expansion in the tenth century BCE: it describes the recovery of territory previously lost to Aramean groups and its reincorporation within the borders of Assyria. That resurgence preceded the much larger imperial expansion of the Neo-Assyrian period.",
    ['claim-ashur-dan-ii-territorial-restoration']),

  cs('cs-assyria-capitals', 'civ-assyria', 'Royal Capitals — Ashur, Kalhu, and Nineveh',
    "Assyrian political geography changed as royal power expanded. Ashur was the earliest major capital and remained the civilization's central sacred city. In the ninth century BCE Ashurnasirpal II transformed Kalhu, modern Nimrud, into a monumental royal capital. Around 700 BCE Sennacherib made Nineveh the principal imperial capital and reshaped it through major palace, defensive, urban, and infrastructure projects. These successive capitals show that Assyrian kingship was not tied permanently to one administrative city even though Ashur retained unique religious authority.",
    ['claim-ashur-early-capital', 'claim-kalhu-royal-capital', 'claim-nineveh-sennacherib-capital']),

  cs('cs-assyria-kingship', 'civ-assyria', 'Kingship, Warfare, and Imperial Expansion',
    "Assyrian royal inscriptions present warfare and kingship through an explicitly religious framework. Aššur-dān II describes royal authority as granted by Aššur and military campaigns as carried out under divine command, while his inscriptions record territorial recovery, conquest, booty, resettlement, and the restoration of Assyrian control. Under Ashurnasirpal II, Ninurta could be praised as a supreme warrior and king of battle dwelling at Kalhu. These sources show how military expansion, royal legitimacy, divine patronage, and monumental capitals were brought together within Assyrian imperial ideology.",
    ['claim-ashur-dan-ii-royal-appointment', 'claim-ashur-dan-ii-territorial-restoration', 'claim-ashur-dan-ii-command-campaign', 'claim-ninurta-kalhu-warrior-titles']),

  cs('cs-assyria-religion', 'civ-assyria', 'Religion and the God Aššur',
    "Assyrian religion belonged to the broader Mesopotamian religious world but developed distinctive political and regional emphases. Aššur, the god who shared his name with the ancient city of Ashur, became the central deity of Assyrian state ideology and kingship. Neo-Assyrian religious life also gave major prominence to forms of Ishtar associated with Nineveh and Arbela, to Ninurta at Kalhu, to Nabu and Tašmetu within the scholarly and royal environment of Ezida at Kalhu, and to Nergal within Assyrian royal cult. These cults show both continuity with wider Mesopotamian traditions and historically specific Assyrian developments.",
    ['claim-ashur-state-god', 'claim-assyria-cult-figures']),

  cs('cs-assyria-scholarship', 'civ-assyria', 'Temples, Scholarship, and Scribal Culture',
    "Assyrian temples were not only ritual institutions but could also be centers of learned activity. At Kalhu, the Ezida temple of Nabu became increasingly connected with kingship, literacy, and scholarship during the eighth and seventh centuries BCE. Excavators recovered roughly 250 scholarly tablets near Nabu's shrine, including omen texts, incantations, ritual works, hymns, lexical texts, medical material, literature, and calendrical works. Royal evidence associated with Ashurbanipal likewise connects Nabu and Tašmetu with the king's mastery of scribal knowledge.",
    ['claim-nabu-assyrian-royal-cult-development', 'claim-nabu-kalhu-scholarship', 'claim-tashmetu-ashurbanipal-understanding']),

  cs('cs-assyria-library', 'civ-assyria', 'Ashurbanipal’s Library and Textual Preservation',
    "The scholarly collections associated with Ashurbanipal at Nineveh are among Assyria's most important contributions to the survival of Mesopotamian literature. More than thirty thousand cuneiform tablets and fragments were recovered from the ruins of Nineveh, preserving literary, religious, lexical, medical, divinatory, historical, and scholarly compositions. Among them were important manuscripts of the Standard Babylonian Epic of Gilgamesh. The collection did not create these older traditions, but its preservation and copying activity is a major reason substantial portions of them survive today.",
    ['claim-assyria-ashurbanipal-library', 'claim-nineveh-ashurbanipal-library-tablets']),

  cs('cs-assyria-legacy', 'civ-assyria', 'Fall of the Empire and Historical Legacy',
    "The political power of the Neo-Assyrian Empire collapsed rapidly near the end of the seventh century BCE. Kalhu was destroyed during this breakdown, and Nineveh was captured and destroyed in 612 BCE, ending its role as the imperial capital. Assyria's political empire disappeared, but its archaeological remains, royal inscriptions, monumental art, temples, palaces, archives, and scholarly collections preserve unusually detailed evidence for ancient Near Eastern imperial life. The literature copied in Assyrian scholarly centers also transmitted traditions far older than the empire itself, giving Assyria an enduring place in the modern recovery of Mesopotamian history.",
    ['claim-kalhu-later-history', 'claim-nineveh-destruction-612', 'claim-assyria-ashurbanipal-library']),
  // ---------------- ANUNNAKI (extensive) ----------------
  cs('cs-anunnaki-etymology', 'group-anunnaki', 'Name / Etymology',
    "The etymology of Anunna/Anunnaki remains debated. ORACC/AMGG summarizes leading scholarly proposals as yielding a sense like \"those of princely seed.\" Popular renderings such as \"offspring of An\" should therefore be treated as proposed interpretations, not as a universally accepted literal translation.",
    ['claim-anunnaki-etymology-debated']),
  cs('cs-anunnaki-earliest', 'group-anunnaki', 'Earliest Attestations',
    "The Sumerian term Anunna is securely attested before the early-second-millennium literary manuscripts: ORACC/AMGG places its first attestations in the Post-Akkadian period, including Gudea inscriptions, and in a small number of Ur III texts. Later literary manuscripts preserve additional Sumerian uses, while Akkadian forms continue for many centuries.",
    ['claim-anunnaki-earliest-attestations']),
  cs('cs-anunnaki-sumerian-usage', 'group-anunnaki', 'Sumerian Usage',
    "In Sumerian sources, Anunna can designate leading gods collectively or even the pantheon of a particular city or city-state rather than one permanent roster. Enki and the World Order, for example, calls the Anuna \"the great gods,\" while Inana's Descent presents seven Anuna as judges in the netherworld — evidence that the term's function already varies within Sumerian material.",
    ['claim-anunnaki-assembly-role']),
  cs('cs-anunnaki-akkadian-usage', 'group-anunnaki', 'Akkadian Usage',
    "Akkadian forms such as Anunnaki/Anunnaku continue the older collective term, but their use is not static. Depending on composition and period, the term can refer broadly to great gods or participate in a contrast with Igigi; the app therefore ties each claim to a specific text or corpus rather than assuming one definition for all Akkadian material.",
    ['claim-anunnaki-membership-shifts']),
  cs('cs-anunnaki-babylonian-usage', 'group-anunnaki', 'Babylonian Usage',
    "In later Babylonian sources the relationship between Anunnaki and Igigi is text-dependent. Enūma eliš Tablet VI assigns groups of Anunnaki to duties in heaven and the netherworld, while other later texts more sharply contrast netherworld Anunnaki with heavenly Igigi. The boundary is therefore historically important but not perfectly uniform.",
    ['claim-anunnaki-underworld-judges-later']),
  cs('cs-anunnaki-assyrian-usage', 'group-anunnaki', 'Assyrian Usage',
    "Assyrian scholarly, literary, and ritual corpora continue to attest Anunnaki in forms inherited from the wider Akkadian tradition. These attestations belong to the later history of the term and should be read with the same period sensitivity used for Babylonian sources rather than projected backward onto all Sumerian usage.",
    ['claim-anunnaki-membership-shifts']),
  cs('cs-anunnaki-assembly-context', 'group-anunnaki', 'Divine Assembly Context',
    "The Anunnaki are closely tied to the concept of the divine council or assembly discussed on the Divine Council topic page — major cosmic decisions in Mesopotamian myth, including the flood, are narrated as decisions of a divine assembly, and the Anunnaki terminology appears to describe the participants in that kind of collective divine governance."),
  cs('cs-anunnaki-underworld-later', 'group-anunnaki', 'Underworld Associations and Later Development',
    "Underworld associations are not purely a late development: the Sumerian Inana's Descent already calls seven Anuna judges in the netherworld. What becomes more pronounced after the Old Babylonian period is the use of Anunnaki for netherworld gods in contrast with Igigi. The evidence therefore shows changing emphasis, not a simple one-time switch from \"sky gods\" to \"underworld gods.\"",
    ['claim-anunnaki-underworld-judges-later']),
  cs('cs-anunnaki-membership-examples', 'group-anunnaki', 'Membership Variations',
    "Surviving texts do not present one single, permanent list of Anunnaki members. In some contexts the term appears closely tied to figures such as An, Enki, Enlil, and Ninhursag; in others it functions more generally to describe the divine assembly as a whole. This atlas lists specific attested associations per source rather than presenting a single composite membership list as though it were universally agreed upon in antiquity.",
    ['claim-anunnaki-membership-shifts']),
  cs('cs-anunnaki-what-sources-say', 'group-anunnaki', 'What Ancient Sources Actually Say',
    "Ancient sources use the term Anunnaki to refer to a category or assembly of gods, with membership and specific role varying by text, period, and context — sometimes referring to the high gods of the assembly broadly, and in later material sometimes referring more specifically to underworld deities.",
    ['claim-anunnaki-assembly-role']),
  cs('cs-anunnaki-what-sources-dont-say', 'group-anunnaki', 'What Ancient Sources Do Not Say',
    "No published Sumerian, Akkadian, Babylonian, or Assyrian text identified in the standard Assyriological corpora and reference works reviewed for this atlas describes the Anunnaki as extraterrestrial beings, spacecraft, or genetic engineers of humanity. This is an explicitly scoped absence claim; the modern extraterrestrial interpretation is documented separately through its modern source trail.",
    ['claim-anunnaki-no-genetic-engineering-in-sources']),
  cs('cs-anunnaki-archaeological', 'group-anunnaki', 'Archaeological / Textual Evidence',
    "The evidence is textual but not exclusively literary: Anunna/Anunnaki occur in literary and mythological compositions, and a small set of Ur III administrative texts appears to record offerings to Anunna. At present no dedicated Anunna sanctuary and no securely identifiable group iconography are known. This distinction matters: administrative/cultic texts can attest practice even when there is no unique temple or image type that archaeologists can label \"Anunnaki.\"",
    ['claim-anunnaki-uriii-offerings', 'claim-anunnaki-no-sanctuary-iconography']),
  cs('cs-anunnaki-scholarly', 'group-anunnaki', 'Major Scholarly Interpretations',
    "Scholars generally interpret the Anunnaki as a flexible category term for the gods of the assembly rather than a bounded, named group with consistent membership — a reading that accounts for the term's varied usage across periods better than assuming a single fixed roster was always intended.",
    ['claim-anunnaki-assembly-role']),
  cs('cs-anunnaki-debated', 'group-anunnaki', 'Debated Questions',
    "Open questions include the precise etymology of the term, the exact relationship between Anunnaki and Igigi in texts that distinguish the two, and why later Akkadian usage increasingly associates Anunnaki with the netherworld even though Sumerian texts already contain both assembly-focused and underworld-judicial uses.",
    ['claim-anunnaki-etymology-debated', 'claim-anunnaki-underworld-judges-later']),
  cs('cs-anunnaki-ancient-astronaut-origin', 'group-anunnaki', 'Origin of Those Modern Claims',
    "The Anunnaki-specific extraterrestrial/Nibiru interpretation used in modern popular culture is documented here to Zecharia Sitchin's The 12th Planet (1976). Broader ancient-astronaut literature predates and surrounds Sitchin, but it should not be substituted for the specific source trail of Sitchin's Anunnaki theory. Citing the book records the origin of the modern claim; it does not validate that claim as ancient history.",
    ['claim-anunnaki-ancient-astronaut']),
  cs('cs-anunnaki-evidence-vs-claim', 'group-anunnaki', 'Ancient Evidence vs. Modern Claim',
    "It is worth stating plainly, side by side: ancient sources use \"Anunnaki\" as a term for a category of gods in the divine assembly, with varying membership across texts and periods; modern popular literature separately claims the Anunnaki were extraterrestrial visitors. These are two different kinds of claim, from two very different kinds of source, evaluated on two very different evidentiary standards — this atlas presents both, clearly labeled, without merging them into one account.",
    ['claim-anunnaki-assembly-role', 'claim-anunnaki-ancient-astronaut']),
  cs('cs-anunnaki-what-we-know', 'group-anunnaki', 'What We Actually Know',
    "Directly attested: Anunna is present by the Post-Akkadian/Ur III periods; Sumerian texts use the term flexibly, including for great gods and for seven underworld judges; later Akkadian traditions continue and reshape the term. Sparse Ur III administrative evidence appears to record offerings to Anunna. Scholarly reconstruction: the exact etymology and the relationship between Anunnaki and Igigi remain debated. Not identified in the published ancient evidence reviewed for this atlas: descriptions of Anunnaki as extraterrestrials, spacecraft users, or genetic engineers. That cluster of claims is modern and is traced separately to its modern publications.",
    ['claim-anunnaki-membership-shifts', 'claim-anunnaki-etymology-debated', 'claim-anunnaki-no-genetic-engineering-in-sources']),
  cs('cs-anunnaki-why-matters', 'group-anunnaki', 'Why It Matters',
    "The Anunnaki matter historically as a term central to understanding how Mesopotamian religion conceived of collective divine authority, and they matter in modern popular culture as one of the most searched-for and most widely misunderstood pieces of Mesopotamian religious vocabulary — making a clear, evidence-separated account of the term unusually valuable."),

  // ---------------- FLOOD TRADITION ----------------
  cs('cs-flood-tradition-earliest-evidence', 'topic-flood-tradition', 'Earliest Evidence',
    "The earliest surviving Mesopotamian flood account is generally identified with the Eridu Genesis, a fragmentarily preserved Sumerian composition whose principal Old Babylonian manuscript comes from Nippur. Only part of the original composition survives, making this early witness to the tradition substantially less complete than the later Atrahasis and Gilgamesh accounts.",
    ['claim-eridu-genesis-fragmentary']),
  cs('cs-flood-tradition-major-examples', 'topic-flood-tradition', 'Important Examples',
    "The three major surviving Mesopotamian flood accounts covered in this atlas are the Eridu Genesis (Sumerian, fragmentary), Atrahasis (Akkadian, Old Babylonian recension, the fullest surviving version), and the flood episode within Tablet XI of the Epic of Gilgamesh (Akkadian, Standard Babylonian version)."),
  cs('cs-flood-tradition-changes-over-time', 'topic-flood-tradition', 'How the Idea Changes Over Time',
    "Across the Sumerian-to-Babylonian span these texts represent, the basic flood-and-survivor structure remains stable, but supporting detail shifts. The survivor's name changes from Ziusudra in the Eridu Genesis to Atrahasis in the Atrahasis text and Utnapishtim in Gilgamesh. The Eridu Genesis itself preserves a seven-day-and-seven-night flood, while Gilgamesh Tablet XI preserves additional details absent from the surviving Sumerian manuscript, including the bird-release sequence and a named landing site."),
  cs('cs-flood-tradition-similarities', 'topic-flood-tradition', 'Similarities Across Texts',
    "All three traditions feature a single forewarned human survivor instructed to build a vessel and preserve life, a pattern scholars treat as a stable core structure across the Mesopotamian flood tradition. Atrahasis and the Gilgamesh flood episode specifically share the reed-wall warning scene in near-identical language, one of the closest verbal parallels between any two Mesopotamian literary compositions.",
    ['claim-flood-shared-motif', 'claim-flood-gilgamesh-atrahasis-close-parallel']),
  cs('cs-flood-tradition-differences', 'topic-flood-tradition', 'Differences Across Texts',
    "The stated motive for the flood is explicitly preserved only in Atrahasis among the three texts compared on this page (human noise disturbing Enlil); Eridu Genesis's fragment breaks off before any stated motive survives, and Gilgamesh Tablet XI does not narrate a motive within the flood episode itself, reporting only that the gods reached a decision."),
  cs('cs-flood-tradition-scholarly', 'topic-flood-tradition', 'Scholarly Interpretation',
    "Assyriologists widely hold that the Gilgamesh Tablet XI flood episode draws on the Atrahasis tradition specifically, based on close textual parallels including the reed-wall warning scene — a scholarly position about a documented literary relationship between two Babylonian compositions, not a claim made within either ancient text itself.",
    ['claim-flood-gilgamesh-atrahasis-close-parallel']),
  cs('cs-flood-tradition-debated', 'topic-flood-tradition', 'Debated Questions',
    "Precisely how the Eridu Genesis flood account related to the later Akkadian versions — whether as a direct textual ancestor, a related but independent branch of a wider oral tradition, or some combination — remains difficult to establish conclusively given how fragmentary the Eridu Genesis tablet is."),
  cs('cs-flood-tradition-later', 'topic-flood-tradition', 'Later Traditions',
    "Mesopotamian flood narratives are frequently discussed in comparative religious scholarship alongside flood traditions from other ancient Near Eastern cultures. This atlas treats any specific claim about the historical relationship between Mesopotamian and other regional flood traditions as its own separately sourced, separately classified historical-relationship claim, rather than assuming a connection by similarity alone."),
  cs('cs-flood-tradition-why-matters', 'topic-flood-tradition', 'Why It Matters',
    "The Mesopotamian flood tradition matters both on its own terms, as one of the best-attested and most narratively developed pieces of Mesopotamian mythology, and comparatively, as a frequently cited reference point in the broader study of flood narratives across ancient Near Eastern literature."),

  // ---------------- CREATION OF HUMANITY ----------------
  cs('cs-creation-earliest-evidence', 'topic-creation', 'Earliest Surviving Evidence',
    "The earliest surviving creation account represented on this topic page is the Sumerian Eridu Genesis, preserved in a fragmentary Old Babylonian manuscript. Its surviving creation passage names An, Enlil, Enki, and Ninhursag as the divine figures who fashioned the black-headed people. Because the tablet is badly damaged, the surviving passage should not be forced into the more fully preserved labor-crisis framework found in Atrahasis.",
    ['claim-eridu-genesis-fragmentary', 'claim-eridu-genesis-creation']),

  cs('cs-creation-eridu-genesis', 'topic-creation', 'Eridu Genesis — Humanity and the Black-Headed People',
    "The Eridu Genesis preserves a specifically Sumerian presentation of human creation. An, Enlil, Enki, and Ninhursag are described as having fashioned the black-headed people, a conventional Sumerian expression for humanity. The surviving passage also places human creation within a larger account involving animals, cities, kingship, and eventually the flood. What survives does not preserve the developed divine-labor rationale found in the later Akkadian compositions.",
    ['claim-eridu-genesis-creation', 'claim-eridu-genesis-fragmentary']),

  cs('cs-creation-atrahasis', 'topic-creation', 'Atrahasis — Humanity as the Divine Labor Force',
    "Atrahasis gives one of the clearest surviving Mesopotamian explanations for why humanity was created. Lesser gods are exhausted by compulsory labor and revolt. The divine solution is to create humans who can assume that work. The birth-goddess carries out the creation within Enki/Ea's plan, combining clay with the flesh and blood of a slain god. Human existence is therefore tied directly to the transfer of labor from gods to mortals.",
    ['claim-atrahasis-human-creation', 'claim-creation-humanity-labor-relief']),

  cs('cs-creation-enuma-elish', 'topic-creation', "Enūma eliš — Kingu's Blood and Human Service",
    "Enūma eliš preserves a different Babylonian formulation. In Tablet VI, Marduk proposes the creation of humanity so that the service and labor of the gods can be placed on humans and the gods can rest. Kingu is identified as responsible for the rebellion, is executed, and Ea creates mankind from Kingu's blood in accordance with Marduk's plan. The text therefore distinguishes Marduk's sovereign decision from Ea's direct creative act.",
    ['claim-enuma-elish-creation-of-humanity']),

  cs('cs-creation-similarities', 'topic-creation', 'Similarities Across the Traditions',
    "These creation accounts share the broad idea that humanity belongs within a divinely ordered cosmos, but the strongest specific parallel is between Atrahasis and Enūma eliš. Both explicitly connect human creation with transferring work or service from the gods to humanity, and both involve divine material in the creation process. These similarities are significant without requiring every Mesopotamian creation account to be treated as one uniform doctrine.",
    ['claim-creation-humanity-labor-relief', 'claim-atrahasis-human-creation', 'claim-enuma-elish-creation-of-humanity']),

  cs('cs-creation-differences', 'topic-creation', 'Differences Across the Traditions',
    "The surviving texts do not describe one standardized Mesopotamian creation story. Eridu Genesis names a group of gods who fashion humanity but does not preserve the same developed labor-crisis explanation. Atrahasis makes human creation the direct solution to a revolt by overworked lesser gods and combines clay with the flesh and blood of a slain deity. Enūma eliš instead places creation after Marduk's victory and kingship, with Marduk devising the plan and Ea creating humanity from Kingu's blood. The creators, materials, narrative setting, and theological purpose therefore vary by composition.",
    ['claim-eridu-genesis-creation', 'claim-atrahasis-human-creation', 'claim-enuma-elish-creation-of-humanity']),

  cs('cs-creation-scholarly', 'topic-creation', 'Scholarly Interpretation, Evidence Limits, and Why It Matters',
    "Atrahasis and Enūma eliš explicitly connect human creation with relieving the gods of labor or service, making that motive a major feature of Babylonian creation theology. It should not, however, be projected backward onto every surviving Sumerian passage. The Eridu Genesis is fragmentary and preserves a different formulation, so absence of the same explanation in the surviving text must be treated as an evidentiary limit rather than proof that no related idea ever existed in lost material. Taken together, these traditions show that Mesopotamian thought preserved multiple answers to who created humanity, how humans were made, and what place human beings occupied in the divine order.",
    ['claim-creation-humanity-labor-relief', 'claim-eridu-genesis-creation', 'claim-atrahasis-human-creation', 'claim-enuma-elish-creation-of-humanity']),
  // ---------------- DIVINE COUNCIL ----------------
  cs('cs-divine-council-definition', 'topic-divine-council', 'What the Divine Council Is',
    "Mesopotamian literature repeatedly portrays major gods acting within assemblies in which decisions are proposed, debated, approved, resisted, or formally ratified. The council should not be imagined as a modern parliament or as one permanently fixed committee. Its composition and terminology vary by text, and terms such as Anuna or Anunnaki can designate different divine groupings in different periods and contexts.",
    ['claim-divine-council-collective-decision', 'claim-anunnaki-membership-shifts']),

  cs('cs-divine-council-atrahasis', 'topic-divine-council', 'Atrahasis — Deliberation, Flood, and Negotiated Authority',
    "Atrahasis provides one of the clearest surviving examples of collective divine decision-making. Enlil is a major authority figure and drives the escalating response to humanity, but the flood is presented within an assembly context in which the gods deliberate and consent. Enki/Ea then works around the resulting decision rather than simply erasing the council's authority, showing that divine hierarchy can coexist with negotiation, resistance, and circumvention.",
    ['claim-enlil-assembly-deliberation', 'claim-enlil-enki-contrasting-role']),

  cs('cs-divine-council-enuma-elish', 'topic-divine-council', "Enūma eliš — Marduk's Conditional Kingship",
    "Enūma eliš presents divine kingship as something negotiated and formally granted within an assembly. Marduk agrees to confront Tiamat only after demanding an exalted destiny and irreversible authority. The gods subsequently test the effectiveness of his command, acclaim him as king, and equip him for battle. His supremacy is therefore not introduced as an unexplained fact; the poem dramatizes its authorization through collective divine action.",
    ['claim-enuma-elish-champion-kingship-condition', 'claim-enuma-elish-command-test']),

  cs('cs-divine-council-lament-urim', 'topic-divine-council', 'Lament for Urim — Petition and Irreversible Decree',
    "The Lament for Urim gives the divine council a different narrative function. Ningal pleads with An and Enlil for her city and repeats her appeal when the Anuna are seated in council. Her petition fails: the poem presents Urim's destruction as a divine decree that An and Enlil will not reverse. Here the assembly is not primarily selecting a champion or planning a catastrophe; it is the setting in which an already devastating divine decision is confronted, pleaded against, and ultimately ratified.",
    ['claim-lament-urim-ningal-appeals', 'claim-lament-urim-divine-decree']),

  cs('cs-divine-council-authority', 'topic-divine-council', 'Authority, Consent, and Circumvention',
    "These narratives do not present divine government as either completely democratic or absolutely controlled by one god. Rank matters: figures such as Enlil or Marduk can exercise extraordinary authority. Yet major decisions are repeatedly placed within relationships of consent, proclamation, negotiation, petition, or resistance. Enki's conduct in Atrahasis is especially revealing because he preserves the formal existence of the assembly's decision while finding a way to protect humanity from its full consequences.",
    ['claim-enlil-assembly-deliberation', 'claim-enlil-enki-contrasting-role', 'claim-enuma-elish-champion-kingship-condition', 'claim-enuma-elish-command-test']),

  cs('cs-divine-council-membership', 'topic-divine-council', 'Who Belongs to the Assembly?',
    "The surviving evidence does not support one universal roster for the Mesopotamian divine council. Anuna or Anunnaki terminology changes across periods, languages, cities, and compositions. Some texts associate the collective with major gods such as An, Enlil, Enki, and other high-ranking deities; other texts use the terminology more broadly or in specialized contexts, including the netherworld. The atlas therefore treats council membership as source-dependent rather than combining every attested divine name into one permanent list.",
    ['claim-anunnaki-membership-shifts']),

  cs('cs-divine-council-scholarly', 'topic-divine-council', 'Scholarly Interpretation, Evidence Limits, and Why It Matters',
    "The divine council is important because it shows Mesopotamian divine authority operating through hierarchy and collective institutions at the same time. Atrahasis emphasizes deliberation, consent, and circumvention; Enūma eliš dramatizes the negotiated elevation and testing of Marduk's kingship; and the Lament for Urim depicts petition before an assembly whose decree remains irreversible. These texts should not be flattened into one constitutional model. Their council scenes differ in membership, purpose, authority, and literary setting, but together they demonstrate that Mesopotamian writers repeatedly imagined major divine decisions as taking place within structured relationships among multiple gods.",
    ['claim-divine-council-collective-decision', 'claim-enlil-assembly-deliberation', 'claim-enuma-elish-champion-kingship-condition', 'claim-enuma-elish-command-test', 'claim-lament-urim-ningal-appeals', 'claim-lament-urim-divine-decree']),
  // ---------------- UNDERWORLD ----------------
  cs('cs-underworld-variation', 'topic-underworld', 'No Single Map of the Underworld',
    "Mesopotamian literature does not preserve one universally fixed geography of the realm of the dead. Inanna’s Descent describes seven gates through which Inanna passes while surrendering her regalia. The Death of Ur-Namma instead emphasizes chief porters, divine palaces, offerings, banqueting, dwellings, and judicial activity. The Amarna recension of Nergal and Ereshkigal distributes Nergal's agents across fourteen gates. These accounts overlap in presenting a structured realm below while differing substantially in architecture, personnel, and political organization.",
    ['claim-inanna-descent-seven-gates', 'claim-death-ur-namma-porters-banquet', 'claim-ea357-fourteen-gates']),

  cs('cs-underworld-inanna-descent', 'topic-underworld', 'Inanna’s Descent — Seven Gates, Judgment, and Substitution',
    "Inanna’s Descent presents the underworld as a realm governed by rules that even a major goddess cannot simply ignore. Inanna passes through seven gates and loses an item of regalia at each stage. The seven Anuna judge her, she is killed, and her corpse is hung on a hook. Although Enki later makes her restoration possible, departure from the underworld requires a substitute, ultimately drawing Dumuzi into the sequence. The composition therefore presents entry, judgment, death, restoration, and substitution as distinct parts of underworld law.",
    ['claim-inanna-descent-seven-gates', 'claim-anunnaki-underworld-judges-later', 'claim-inanna-descent-restoration-substitute', 'claim-inanna-dumuzi-substitute']),

  cs('cs-underworld-ur-namma', 'topic-underworld', 'The Death of Ur-Namma — Palaces, Offerings, and the Dead King',
    "The Death of Ur-Namma preserves a different picture of the netherworld. Ur-Namma gives gifts to chief porters and offerings to numerous underworld powers, including Nergal, Ereshkigal, Dumuzid, Namtar, and others associated with their own palaces or functions. The dead king is eventually seated on a great dais, receives a dwelling, and is associated with Gilgamesh in rendering judgments and decisions concerning the dead under Ereshkigal's authority. Death therefore removes Ur-Namma from earthly kingship without making him socially or institutionally invisible in the realm below.",
    ['claim-death-ur-namma-porters-banquet', 'claim-death-ur-namma-offering-sequence', 'claim-death-ur-namma-underworld-role', 'claim-ereshkigal-ur-namma-authority']),

  cs('cs-underworld-nergal-ereshkigal', 'topic-underworld', 'Nergal and Ereshkigal — Fourteen Gates and Underworld Kingship',
    "The Amarna recension of Nergal and Ereshkigal preserves yet another organization of the underworld. Nergal assigns accompanying agents across fourteen gates before advancing into Ereshkigal's palace. At the climax of the surviving narrative, Ereshkigal proposes marriage and offers to place kingship of the broad netherworld in Nergal's hand. This account should not be projected unchanged backward onto earlier Sumerian texts: it is one historically situated witness to developing traditions about Ereshkigal, Nergal, and rulership below.",
    ['claim-ea357-fourteen-gates', 'claim-ea357-ending-marriage-kingship', 'claim-nergal-ea357-underworld-kingship']),

  cs('cs-underworld-institutions', 'topic-underworld', 'Rulers, Judges, and Institutions Below',
    "Across the surviving texts, the underworld is repeatedly portrayed as an organized divine domain rather than an empty or shapeless place. Ereshkigal exercises governing authority, the Anuna can function as judges, individual divine figures possess palaces or specialized roles, and The Death of Ur-Namma even places the dead king within a judicial setting. At the same time, the identities and relationships of rulers and officials vary by composition and period, so these witnesses should not be combined into one timeless administrative chart.",
    ['claim-ereshkigal-underworld-ruler', 'claim-anunnaki-underworld-judges-later', 'claim-death-ur-namma-underworld-role', 'claim-ea357-ending-marriage-kingship']),

  cs('cs-underworld-fate-dead', 'topic-underworld', 'Death, Status, and the Fate of the Dead',
    "Mesopotamian sources generally do not organize the afterlife around a simple moral division in which virtuous people enter one eternal destination and wicked people another. Yet that does not mean every dead person is portrayed identically. The Death of Ur-Namma gives a deceased king offerings, a dwelling, a dais, and a judicial role, while other texts emphasize restrictive underworld law, divine judgment, or exceptional divine figures. The evidence therefore supports distinguishing the broad destination of the dead from the status, treatment, and literary role assigned to particular individuals within that realm.",
    ['claim-underworld-no-moral-judgment', 'claim-death-ur-namma-underworld-role', 'claim-anunnaki-underworld-judges-later']),

  cs('cs-underworld-scholarly', 'topic-underworld', 'Scholarly Interpretation, Evidence Limits, and Why It Matters',
    "The Mesopotamian underworld is best understood through comparison of distinct compositions rather than by flattening them into a single map or theology. Inanna’s Descent emphasizes seven gates, judgment, death, and substitution; The Death of Ur-Namma provides palaces, offerings, rites, social hierarchy, and a remarkable role for a dead king; and the Amarna Nergal and Ereshkigal tradition preserves fourteen gates and a changing model of underworld kingship. Their differences are historically important. Together they show a persistent conception of the realm below as structured and governed, while also demonstrating that its geography, institutions, rulers, and narrative rules could change across texts and periods.",
    ['claim-inanna-descent-seven-gates', 'claim-death-ur-namma-porters-banquet', 'claim-death-ur-namma-underworld-role', 'claim-ea357-fourteen-gates', 'claim-ea357-ending-marriage-kingship', 'claim-underworld-no-moral-judgment']),
  // ---------------- INANNA'S DESCENT TEXT ----------------
  cs('cs-inanna-descent-text-preparation', 'text-descent-of-inanna', 'Inanna’s Preparation and Instructions to Ninshubur',
    'Before the descent, Inanna takes the seven divine powers and dresses herself in named regalia. She then gives Ninshubur explicit instructions: if she does not return, Ninshubur is to mourn publicly and seek help from Enlil, Nanna, and finally Enki. The rescue sequence is therefore prepared before Inanna crosses the first gate.',
    ['claim-inanna-descent-preparation-ninshubur']),

  cs('cs-inanna-descent-text-death', 'text-descent-of-inanna', 'Ereškigal, the Judges, Inanna’s Death, and the Hook',
    'After the seven-gate sequence, Inanna reaches the underworld court. The seven Anuna act as judges and render their decision against her. The composition then describes Inanna as becoming a corpse and being hung on a hook. The text therefore presents an actual narrative death before the later restoration, not merely a symbolic loss of rank.',
    ['claim-inanna-descent-death-hook']),

  cs('cs-inanna-descent-text-rescue', 'text-descent-of-inanna', 'Ninshubur’s Appeals and Enki’s Rescue Plan',
    'After three days and three nights, Ninshubur carries out Inanna’s instructions. Enlil and Nanna refuse to reverse what has happened, but Enki chooses to intervene. He creates the kur-jara and gala-tura, equips them with the life-giving plant and life-giving water, and sends them into the underworld. They obtain Inanna’s corpse, apply the life-giving substances, and Inanna rises again. Her restoration does not cancel underworld law: she still must provide a substitute in order to leave.',
    ['claim-inanna-descent-ninshubur-appeals', 'claim-inanna-descent-enki-rescue-beings', 'claim-inanna-descent-restoration-substitute', 'claim-inanna-dumuzi-substitute']),

  cs('cs-inanna-descent-text-dumuzi-escape', 'text-descent-of-inanna', 'Dumuzi, Utu, and the Attempted Escape',
    'Dumuzi does not simply vanish into the underworld once he is seized. After Inanna gives him into the demons’ hands, he appeals to Utu for help. Utu transforms Dumuzi’s hands and feet, allowing him to escape his captors temporarily. The surviving narrative then becomes increasingly fragmentary as the pursuit continues.',
    ['claim-dumuzi-descent-shepherd-seized', 'claim-inanna-descent-dumuzi-utu-escape']),

  cs('cs-inanna-descent-text-closing', 'text-descent-of-inanna', 'The Damaged Closing and the Half-Year Arrangement',
    'The final portion of the composition is damaged and requires more caution than the well-preserved seven-gate sequence. The surviving lines appear to assign Dumuzi and his sister alternating half-year periods, with one remaining below while the other can be released. Wider Mesopotamian tradition identifies Geštinanna as Dumuzi’s sister, but the damaged state of the closing passage means the exact mechanics should not be presented as perfectly preserved.',
    ['claim-inanna-descent-half-year-geshtinanna', 'claim-dumuzi-geshtinanna-sister']),
  cs('cs-inanna-descent-text-overview', 'text-descent-of-inanna', 'What Is This Text?',
    'Inanna’s Descent to the Netherworld is a Sumerian literary composition centered on the goddess Inanna’s journey into the underworld. The surviving narrative presents her passage through seven gates, her confrontation with Ereškigal, her death and restoration, and the requirement that a substitute ultimately take her place in the underworld.',
    [
      'claim-inanna-ereshkigal-sister',
      'claim-inanna-descent-seven-gates',
      'claim-inanna-dumuzi-substitute',
    ]),

  cs('cs-inanna-descent-text-dating', 'text-descent-of-inanna', 'Approximate Date',
    'The composition is preserved principally in Old Babylonian-period Sumerian manuscript copies, dating to the early second millennium BCE. The literary tradition represented by those manuscripts may be older, but the surviving copies themselves provide the secure chronological basis for dating the text.'),

  cs('cs-inanna-descent-text-preservation', 'text-descent-of-inanna', 'State of Preservation',
    'Inanna’s Descent survives through multiple Sumerian manuscript witnesses rather than through one completely intact original tablet. Modern editions reconstruct the composition by comparing overlapping copies and fragments, allowing much of the narrative sequence to be recovered while still leaving individual passages subject to textual uncertainty.'),

  cs('cs-inanna-descent-text-structure', 'text-descent-of-inanna', 'Structure',
    'The narrative moves through several major stages: Inanna prepares for the journey and enters the underworld; she passes through seven gates and loses her regalia; she reaches Ereškigal and is killed; divine intervention makes her restoration possible; and her departure from the underworld requires a substitute, leading to the seizure of Dumuzi.',
    [
      'claim-inanna-descent-seven-gates',
      'claim-inanna-dumuzi-substitute',
      'claim-dumuzi-descent-shepherd-seized',
    ]),

  cs('cs-inanna-descent-text-what-it-says', 'text-descent-of-inanna', 'What the Text Actually Says',
    'The Sumerian composition explicitly identifies Ereškigal as Inanna’s sister and ruler of the underworld. It describes Inanna passing through seven gates, surrendering an item of clothing, jewelry, or divine regalia at each stage. Later in the narrative, Inanna’s release requires a substitute, and Dumuzi becomes the figure seized within that substitution sequence.',
    [
      'claim-inanna-ereshkigal-sister',
      'claim-inanna-descent-seven-gates',
      'claim-inanna-dumuzi-substitute',
      'claim-dumuzi-descent-shepherd-seized',
    ]),

  cs('cs-inanna-descent-text-relationships', 'text-descent-of-inanna', 'Inanna, Ereškigal, and Dumuzi',
    'The relationships presented in this composition are text-specific and should not automatically be treated as a universal Mesopotamian genealogy. Within Inanna’s Descent, Ereškigal is identified as Inanna’s sister and underworld ruler, while Dumuzi becomes central to the substitution required for Inanna’s return. The text identifies Dumuzi as the shepherd and depicts him being seized by the demons.',
    [
      'claim-inanna-ereshkigal-sister',
      'claim-inanna-dumuzi-substitute',
      'claim-dumuzi-descent-shepherd-seized',
    ]),

  cs('cs-inanna-descent-text-scholarly', 'text-descent-of-inanna', 'Scholarly Questions',
    'One important scholarly question concerns how the removal of Inanna’s regalia at the seven gates should be interpreted. The removal itself is directly stated by the ancient text, while interpretations that understand the sequence as a progressive dismantling of status, authority, or identity belong to modern scholarship and should remain distinct from the wording of the composition itself.',
    [
      'claim-inanna-descent-seven-gates',
      'claim-inanna-descent-power',
    ]),

  cs('cs-inanna-descent-text-why-matters', 'text-descent-of-inanna', 'Why It Matters',
    'Inanna’s Descent is one of the most important surviving Sumerian literary treatments of the underworld. It preserves a detailed seven-gate descent, a confrontation between two major goddesses, death and restoration, and the requirement of substitution for departure from the underworld. It is therefore a major source for studying Sumerian conceptions of divine authority, underworld order, and the literary traditions surrounding Inanna and Dumuzi.',
    [
      'claim-inanna-descent-seven-gates',
      'claim-inanna-ereshkigal-sister',
      'claim-inanna-dumuzi-substitute',
    ]),
  // ---------------- ENKI AND NINHURSAG TEXT ----------------
  cs('cs-enki-ninhursag-text-manuscripts', 'text-enki-ninhursag', 'Manuscript Witnesses and Textual Variation',
    "The composition survives through Old Babylonian-period Sumerian copies rather than one single complete authorial manuscript. The witnesses are important because they do not preserve every genealogical detail identically: the principal divine-generation sequence proceeds from Ninhursag to Ninsar, Ninkura, and Uttu, while an additional manuscript passage inserts Ninimma before Uttu. The atlas therefore treats manuscript variation as evidence to preserve rather than flattening all witnesses into one uniform genealogy.",
    [
      'claim-enki-ninhursag-old-babylonian-copies',
      'claim-enki-ninhursag-manuscript-variation',
    ]),

  cs('cs-enki-ninhursag-text-uttu', 'text-enki-ninhursag', 'Uttu, the Warning, and the Transition to the Plants',
    "The Uttu episode is structurally important within the composition. Before Enki approaches Uttu, she receives a warning and instructions about how to respond. The encounter then leads into the origin of the eight plants, linking the generational movement of the text with its later themes of sexuality, vegetation, transgression, and bodily consequence. Manuscript variation in the preceding genealogy makes this transition especially important for reading the composition as a transmitted text rather than as a fixed schematic family tree.",
    [
      'claim-enki-ninhursag-uttu-warning',
      'claim-enki-ninhursag-uttu-plants',
      'claim-enki-ninhursag-manuscript-variation',
    ]),

  cs('cs-enki-ninhursag-text-fox', 'text-enki-ninhursag', "The Fox and Ninhursag's Return",
    "After Ninhursag curses Enki and withdraws, the narrative introduces a fox who undertakes to bring her back. The surviving composition then resumes with Ninhursag returning to the afflicted Enki. This small but important episode bridges the curse and the healing sequence and shows that the text's restoration does not occur immediately after Enki's transgression.",
    ['claim-enki-ninhursag-fox-return']),

  cs('cs-enki-ninhursag-text-destinies', 'text-enki-ninhursag', 'Eight Afflictions, Healing Deities, and Assigned Destinies',
    "The final movement is highly structured. Enki identifies eight afflicted parts of his body, and Ninhursag responds by bringing forth eight deities associated with those afflictions. The composition then goes beyond simple recovery by assigning destinies or functions to the newly born deities. The ending therefore turns bodily disorder into healing and renewed divine order through another sequence of generation.",
    [
      'claim-ninhursag-healing-sequence',
      'claim-enki-ninhursag-eight-healing-deities',
      'claim-enki-ninhursag-healing-destinies',
    ]),

  cs('cs-enki-ninhursag-text-source', 'text-enki-ninhursag', 'Textual Reference and Evidence Limits',
    "The atlas treats Enki and Ninhursag as a specific Sumerian literary composition known through its surviving Old Babylonian witnesses and cites it through the primary-text record corresponding to ETCSL 1.1.1. Because the manuscripts preserve variation, individual details should be attributed to the witness or sequence that actually preserves them. Modern shorthand such as paradise can describe aspects of idealized Dilmun, but it should not replace the composition's own progression through fresh water, divine generation, Uttu, vegetation, curse, bodily affliction, healing, and the assignment of destinies.",
    [
      'claim-enki-ninhursag-old-babylonian-copies',
      'claim-enki-ninhursag-manuscript-variation',
      'claim-enki-ninhursag-dilmun-setting',
      'claim-ninhursag-creation-birth-tradition',
    ]),
  cs('cs-enki-ninhursag-text-overview', 'text-enki-ninhursag', 'What Is This Text?',
    'Enki and Ninhursag is a Sumerian literary composition set principally in Dilmun. The narrative combines the transformation of Dilmun, a sequence of divine births, Enki’s eating of eight plants, Ninhursag’s curse, and a final healing sequence in which the afflicted Enki is restored.',
    [
      'claim-enki-ninhursag-dilmun-setting',
      'claim-enki-ninhursag-divine-birth-sequence',
      'claim-enki-ninhursag-plants-curse',
      'claim-ninhursag-healing-sequence',
    ]),

  cs('cs-enki-ninhursag-text-dating', 'text-enki-ninhursag', 'Approximate Date',
    'The composition is preserved in Sumerian copies from the Old Babylonian period, placing the surviving manuscript tradition in the early second millennium BCE. The surviving copies provide the secure basis for dating the textual form represented in the atlas.'),

  cs('cs-enki-ninhursag-text-dilmun', 'text-enki-ninhursag', 'Dilmun',
    'The composition opens with Dilmun repeatedly described as pure, virginal, and pristine. Later in the opening sequence, fresh water is provided so that fields, grain, and the city can flourish, transforming the setting into a fertile and prosperous landscape.',
    [
      'claim-enki-ninhursag-dilmun-setting',
    ]),

  cs('cs-enki-ninhursag-text-births', 'text-enki-ninhursag', 'The Divine Birth Sequence',
    'The text preserves a succession of divine births. Ninhursag gives birth to Ninsar, Ninsar gives birth to Ninkura, and Ninkura gives birth to Uttu. This sequence forms one of the central generative structures of the composition.',
    [
      'claim-enki-ninhursag-divine-birth-sequence',
    ]),

  cs('cs-enki-ninhursag-text-plants', 'text-enki-ninhursag', 'The Eight Plants and the Curse',
    'Later in the narrative, eight plants are grown and identified. Enki eats them, after which Ninhursag curses him and declares that she will not look upon him with a life-giving eye until his dying day. This episode creates the bodily crisis that drives the final movement of the story.',
    [
      'claim-enki-ninhursag-plants-curse',
    ]),

  cs('cs-enki-ninhursag-text-healing', 'text-enki-ninhursag', 'Ninhursag Heals Enki',
    'The narrative reaches its restorative climax when Ninhursag returns to the afflicted Enki. She brings forth deities associated with the parts of his body that are suffering, and Enki is restored as the crisis is resolved.',
    [
      'claim-ninhursag-healing-sequence',
    ]),

  cs('cs-enki-ninhursag-text-scholarly', 'text-enki-ninhursag', 'Scholarly Interpretation',
    'Modern scholarship often places Enki and Ninhursag within a wider Sumerian field of creation and birth traditions in which fertility, maternal power, generation, and restoration are closely connected. That broader interpretation should remain distinct from the individual events directly narrated by the ancient composition.',
    [
      'claim-ninhursag-creation-birth-tradition',
    ]),

  cs('cs-enki-ninhursag-text-why-matters', 'text-enki-ninhursag', 'Why It Matters',
    'Enki and Ninhursag is important because it brings together ideas of sacred place, fertility, divine generation, transgression, bodily disorder, and restoration within one Sumerian composition. Its presentation of Dilmun, its sequence of births, the episode of the eight plants, and Ninhursag’s healing of Enki make it a major source for studying Sumerian literary ideas about life, creation, and restoration.',
    [
      'claim-enki-ninhursag-dilmun-setting',
      'claim-enki-ninhursag-divine-birth-sequence',
      'claim-enki-ninhursag-plants-curse',
      'claim-ninhursag-healing-sequence',
      'claim-ninhursag-creation-birth-tradition',
    ]),
  // ---------------- SUMERIAN KING LIST TEXT ----------------
  cs('cs-sumerian-king-list-manuscripts', 'text-sumerian-king-list', 'Manuscripts and the Weld-Blundell Prism',
    'The Sumerian King List survives in more than one textual version rather than in a single uniform manuscript. The best-known witness is the four-sided Weld-Blundell Prism, now in the Ashmolean Museum. Each side carries two columns of Sumerian cuneiform, and the prism preserves the most extensive and complete surviving version. Comparison among witnesses is essential because the manuscripts can disagree over numerical data and details of dynastic sequence.',
    ['claim-sumerian-king-list-weld-blundell', 'claim-sumerian-king-list-mixed-memory']),

  cs('cs-sumerian-king-list-antediluvian', 'text-sumerian-king-list', 'Before the Flood — Five Cities, Eight Kings',
    'The opening antediluvian sequence is deliberately extraordinary. Kingship first descends to Eridu and then moves through Bad-tibira, Larak, Sippar, and Šuruppak. Eight rulers are assigned reigns measured in tens of thousands of years, totaling 241,200 years in the principal numerical tradition used by the ETCSL translation. The section ends abruptly with the statement that the flood swept over, making the flood the boundary between primordial kingship and the post-flood sequence.',
    ['claim-enki-eridu-oldest-city-tradition', 'claim-sumerian-king-list-antediluvian-reigns']),

  cs('cs-sumerian-king-list-transfers', 'text-sumerian-king-list', 'Dynasties and the Transfer of Kingship',
    'After the flood, the composition repeatedly moves kingship from city to city. Dynastic blocks are commonly closed by statements that a city was defeated or fell and that kingship was taken elsewhere. This repeated formula gives the list a strong literary structure: political supremacy changes hands, but kingship itself remains a divinely grounded institution that can be transferred among centers such as Kish, Uruk, Ur, Awan, Hamazi, Mari, Agade, and others.',
    ['claim-sumerian-king-list-transfer-formula', 'claim-kish-kingship-after-flood']),

  cs('cs-sumerian-king-list-uruk', 'text-sumerian-king-list', 'Uruk — Enmerkar, Lugalbanda, Dumuzi, and Gilgamesh',
    'When kingship passes from the first dynasty of Kish to Uruk, the list enters a sequence populated by figures also prominent in Mesopotamian literary tradition. Enmerkar, Lugalbanda, Dumuzi the fisherman, and Gilgamesh all appear in the first Uruk dynasty. Gilgamesh is called lord of Kulaba and is assigned 126 years of rule. Their inclusion demonstrates how the King List places legendary and literary rulers within the same dynastic framework later used for historically documented kings.',
    ['claim-sumerian-king-list-uruk-gilgamesh', 'claim-sumerian-king-list-mixed-memory']),

  cs('cs-sumerian-king-list-kugbau-sargon', 'text-sumerian-king-list', 'Kug-Bau, Sargon, and the Changing Character of the List',
    'Farther into the post-flood sequence, the King List preserves memorable notices about individual rulers. Kug-Bau is identified as a woman tavern-keeper who established herself as king at Kish, while Sargon is introduced as the former cupbearer of Ur-Zababa who became king of Agade. As the list approaches rulers and dynasties known from independent inscriptions, reign lengths generally become more realistic, but the composition continues to frame them inside its larger scheme of transferred kingship.',
    ['claim-sumerian-king-list-kugbau-sargon', 'claim-sumerian-king-list-mixed-memory']),
  cs('cs-sumerian-king-list-overview', 'text-sumerian-king-list', 'What Is This Text?',
    'The Sumerian King List is a Sumerian literary composition that organizes kings and cities into a sequence of rulership. Its opening presents kingship as a divine institution that descends from heaven and moves from one city to another.',
    [
      'claim-enki-eridu-oldest-city-tradition',
      'claim-kish-kingship-after-flood',
    ]),

  cs('cs-sumerian-king-list-dating', 'text-sumerian-king-list', 'Approximate Date',
    'The King List is best understood as a textual tradition that was copied and revised rather than as a document created once in a single final form. Major surviving witnesses belong to the early second millennium BCE. The most complete exemplar, the Weld-Blundell Prism, is dated by the Ashmolean Museum to about 1800 BCE; its date should be distinguished from the broader history of the composition and its earlier forms.',
    ['claim-sumerian-king-list-weld-blundell']),
  cs('cs-sumerian-king-list-kingship', 'text-sumerian-king-list', 'Kingship Descends from Heaven',
    'The composition presents kingship as something bestowed from the divine realm rather than simply created by human political institutions. This literary framework gives royal authority a sacred origin and structures the movement of legitimate rule between cities.',
    [
      'claim-enki-eridu-oldest-city-tradition',
      'claim-kish-kingship-after-flood',
    ]),

  cs('cs-sumerian-king-list-eridu', 'text-sumerian-king-list', 'Eridu Comes First',
    'At the beginning of the preserved sequence, kingship descends from heaven to Eridu. The text therefore gives Eridu symbolic priority in its account of the beginnings of ordered kingship.',
    [
      'claim-enki-eridu-oldest-city-tradition',
    ]),

  cs('cs-sumerian-king-list-flood', 'text-sumerian-king-list', 'The Flood as a Dividing Point',
    'The flood functions as a major dividing point within the King List tradition. The sequence of kingship before the flood is followed by a renewed descent of kingship afterward, creating a literary boundary between two eras of rulership.',
    [
      'claim-kish-kingship-after-flood',
    ]),

  cs('cs-sumerian-king-list-kish', 'text-sumerian-king-list', 'Kish After the Flood',
    'After the flood, the text presents Kish as the first city to receive kingship. This gives Kish a special position within the post-flood sequence and helps explain the city’s later symbolic association with legitimate royal authority.',
    [
      'claim-kish-kingship-after-flood',
    ]),

  cs('cs-sumerian-king-list-how-to-read', 'text-sumerian-king-list', 'How the List Should Be Read',
    'The King List is not a straightforward modern chronology. It combines mythic beginnings, legendary figures, dynastic memories, and historically attested rulers within one literary framework, while surviving manuscripts preserve numerous differences in names, reign lengths, ordering, and dynastic arrangement. Its chronological data therefore have to be evaluated critically rather than simply added together as literal political history.',
    ['claim-sumerian-king-list-mixed-memory', 'claim-sumerian-king-list-transfer-formula']),
  cs('cs-sumerian-king-list-why-matters', 'text-sumerian-king-list', 'Why It Matters',
    'The Sumerian King List matters because it preserves an influential Mesopotamian way of imagining the relationship between divine authority, cities, kingship, and the flood. By placing Eridu first before the flood and Kish first afterward, the composition gives both cities important positions within a sacred history of legitimate rule.',
    [
      'claim-enki-eridu-oldest-city-tradition',
      'claim-kish-kingship-after-flood',
    ]),
  // ---------------- ENUMA ELISH TEXT ----------------
  cs('cs-enuma-elish-text-tablets-manuscripts', 'text-enuma-elish', 'Seven-Tablet Structure and Manuscript Transmission',
    "Enūma eliš is conventionally read as a seven-tablet Babylonian Akkadian composition. The atlas distinguishes the broad late-second-millennium BCE date assigned to the composition from the first-millennium BCE manuscripts through which much of the poem is preserved. Its tablet structure is not incidental: Tablets I–II establish primordial conflict and Marduk's emergence; Tablets III–IV authorize and display his kingship and victory; Tablet V develops cosmic order; Tablet VI creates humanity and centers Babylon; and Tablet VII completes the long proclamation of Marduk's names.",
    ['claim-enuma-elish-seven-tablet-structure']),

  cs('cs-enuma-elish-text-marduk-birth', 'text-enuma-elish', 'Tablet I — The Birth and Magnification of Marduk',
    "After Ea defeats Apsu and establishes his dwelling there, the poem introduces Marduk as the son of Ea and Damkina. His exceptional form, radiance, perception, strength, and association with the winds are emphasized from the beginning. This literary magnification matters for the shape of the whole composition because Marduk is prepared as an extraordinary figure before the divine assembly later grants him supreme authority.",
    ['claim-enuma-elish-marduk-birth']),

  cs('cs-enuma-elish-text-command-test', 'text-enuma-elish', 'Tablets II–IV — Championship, the Divine Assembly, and the Test of Command',
    "Marduk does not accept the role of champion without conditions. He requires the gods to exalt his destiny and make his command unalterable. The assembly then tests that authority by having a constellation disappear and reappear at his word, after which the gods acclaim him as king and arm him for battle. The composition therefore links Marduk's victory over Tiamat to a formal sequence of authorization, tested command, kingship, and military action.",
    [
      'claim-enuma-elish-champion-kingship-condition',
      'claim-enuma-elish-command-test',
      'claim-marduk-enuma-elish-kingship',
    ]),

  cs('cs-enuma-elish-text-babylon-esagila', 'text-enuma-elish', 'Tablets V–VI — Celestial Order, Babylon, Esagila, and Human Service',
    "The poem extends creation beyond the division of Tiamat's body. Tablet V organizes divine stations, constellations, the year, and the lunar cycle. Marduk also identifies Babylon as the gods' place of assembly and festival. In Tablet VI humanity is created so that divine labor can be transferred to human beings, and the Anunnaki build Babylon and raise Esagila. Cosmic order, human service, sacred city, and temple are thus presented as parts of one literary ordering program.",
    [
      'claim-enuma-elish-celestial-order',
      'claim-enuma-elish-creation-of-humanity',
      'claim-enuma-elish-kingu-blood-humanity',
      'claim-enuma-elish-babylon-esagila',
    ]),

  cs('cs-enuma-elish-text-fifty-names', 'text-enuma-elish', 'Tablets VI–VII — The Fifty Names and the Closing Theology of Marduk',
    "Enūma eliš does not end when humanity is created. The closing movement begins near the end of Tablet VI and continues through Tablet VII with the proclamation and interpretation of Marduk's names. These names assign him powers, titles, and functions and culminate in the statement that the great gods proclaimed his fifty names and made his position preeminent. The ending is therefore essential to the composition's theological purpose: the narrative of creation and conflict closes by articulating and teaching Marduk's supremacy.",
    ['claim-enuma-elish-fifty-names']),
  cs('cs-enuma-elish-text-overview', 'text-enuma-elish', 'What Is This Text?',
    'Enūma eliš is a Babylonian Akkadian creation epic centered on the rise of Marduk. The composition begins with primordial divine generations, develops through conflict among the gods, presents Marduk’s victory over Tiamat and ordering of the cosmos, and later describes the creation of humanity to assume the service of the gods.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
      'claim-marduk-enuma-elish-defeats-tiamat',
      'claim-marduk-enuma-elish-creation',
      'claim-enuma-elish-creation-of-humanity',
    ]),

  cs('cs-enuma-elish-text-dating', 'text-enuma-elish', 'Approximate Date',
    'Enūma eliš is generally treated as a late second-millennium BCE Babylonian composition, while the surviving manuscript evidence includes copies from the first millennium BCE. The date of the composition and the dates of the surviving manuscripts should therefore be kept distinct.'),

  cs('cs-enuma-elish-text-primordial', 'text-enuma-elish', 'Tiamat and Apsu at the Beginning',
    'At the opening of Tablet I, Tiamat and Apsu appear before the later generations of gods have come into being. Their waters are described as mingling together, and Tiamat is presented as the one who bore them all. This establishes the primordial setting from which the later divine generations emerge.',
    [
      'claim-tiamat-enuma-elish-primordial-waters',
    ]),

  cs('cs-enuma-elish-text-apsu-ea', 'text-enuma-elish', 'Apsu, Ea, and the First Conflict',
    'Tablet I presents an early crisis when Apsu decides to destroy the younger gods because their noise prevents him from resting. Ea learns of the plan, uses an incantation to place Apsu into a deep sleep, and kills him. This conflict precedes Marduk’s rise and establishes Ea as a major actor in the early narrative.',
    [
      'claim-enuma-elish-apsu-ea-conflict',
    ]),

  cs('cs-enuma-elish-text-tiamat-kingu', 'text-enuma-elish', 'Tiamat, Kingu, and the War Host',
    'Tiamat later prepares for war against the younger gods. She creates a host of monstrous beings, appoints Kingu as leader of her forces, and gives him the Tablet of Destinies. The episode transforms the divine conflict into an organized war that leads to Marduk’s emergence as champion.',
    [
      'claim-enuma-elish-tiamat-kingu-war-preparation',
    ]),

  cs('cs-enuma-elish-text-marduk', 'text-enuma-elish', 'Marduk’s Kingship and Victory',
    'Tablet IV presents the gods acclaiming Marduk as king and giving him symbols of royal authority. He prepares destructive winds for battle, confronts Tiamat, traps her with his net and winds, strikes her with an arrow, and defeats her. His military victory is therefore directly linked within the composition to his elevation as divine king.',
    [
      'claim-marduk-enuma-elish-kingship',
      'claim-marduk-enuma-elish-winds',
      'claim-marduk-enuma-elish-defeats-tiamat',
    ]),

  cs('cs-enuma-elish-text-creation', 'text-enuma-elish', 'Cosmic and Human Creation',
    'After defeating Tiamat, Marduk divides her body and uses part of it to form the sky. Tablet VI then turns to humanity: Marduk proposes creating human beings so that the labor of the gods can be transferred to them. Kingu is condemned for his role in the rebellion, and Ea creates humanity from Kingu’s blood in accordance with Marduk’s plan.',
    [
      'claim-marduk-enuma-elish-creation',
      'claim-enuma-elish-creation-of-humanity',
      'claim-enuma-elish-kingu-blood-humanity',
    ]),

  cs('cs-enuma-elish-text-why-matters', 'text-enuma-elish', 'Why It Matters',
    'Enūma eliš is important because it combines divine genealogy, conflict, kingship, cosmic ordering, and the creation of humanity within one Babylonian literary framework. It is especially significant for understanding how Marduk’s authority is expressed within Babylonian theology and how creation is presented as the outcome of divine conflict and political ordering.',
    [
      'claim-marduk-enuma-elish-kingship',
      'claim-marduk-enuma-elish-defeats-tiamat',
      'claim-marduk-enuma-elish-creation',
      'claim-enuma-elish-creation-of-humanity',
    ]),
  // ---------------- ASHUR-DAN II 1 TEXT ----------------
  cs('cs-ashur-dan-ii-1-overview', 'text-ashur-dan-ii-1', 'What Is This Text?',
    'Aššur-dān II 1 is a royal inscription of the Assyrian king Aššur-dān II, written during his reign of ca. 934–912 BCE. It combines divine appointment, military campaigning, territorial recovery, population resettlement, agriculture, royal hunting, palace rebuilding, and the preservation of royal inscriptions.',
    ['claim-ashur-dan-ii-royal-appointment', 'claim-ashur-dan-ii-accession-yausa', 'claim-ashur-dan-ii-palace-preservation']),

  cs('cs-ashur-dan-ii-1-date-context', 'text-ashur-dan-ii-1', 'Date and Historical Setting',
    'The inscription belongs to the reign of Aššur-dān II, ca. 934–912 BCE, and comes from Aššur. Its account presents the king at a period when Assyrian rulers were reasserting control over territory, populations, agriculture, military resources, and monumental institutions.',
    ['claim-ashur-dan-ii-territorial-restoration', 'claim-ashur-dan-ii-resettlement-agriculture']),

  cs('cs-ashur-dan-ii-1-appointment', 'text-ashur-dan-ii-1', 'Aššur Grants Kingship',
    'The opening presents Aššur as the source of legitimate royal authority. The god designates Aššur-dān II, places the just scepter and exalted crown in his grasp, and establishes him for kingship over Assyria.',
    ['claim-ashur-dan-ii-royal-appointment']),

  cs('cs-ashur-dan-ii-1-accession', 'text-ashur-dan-ii-1', 'Accession-Year Warfare',
    'The king recalls military action beginning in his accession year and first regnal year. With Aššur’s support he campaigns against forces from Yausa, defeats them, plunders settlements, and records valuable booty associated with the Arameans.',
    ['claim-ashur-dan-ii-accession-yausa']),

  cs('cs-ashur-dan-ii-1-restoration', 'text-ashur-dan-ii-1', 'Recovering Assyrian Territory',
    'The inscription portrays warfare as territorial recovery as well as conquest. Aššur-dān II attacks Aramean-held districts said to have been lost since an earlier reign, destroys enemy centers, uproots survivors, and incorporates territory back within the borders of Assyria.',
    ['claim-ashur-dan-ii-territorial-restoration']),

  cs('cs-ashur-dan-ii-1-campaigns', 'text-ashur-dan-ii-1', 'Katmuḫi, Muṣri, and Ḫabruri',
    'Several campaigns are explicitly connected with Aššur’s command. The inscription describes operations in Katmuḫi, against the rebellious people of Muṣri, and in Ḫabruri, with booty repeatedly carried back to Aššur and some captured divine images dedicated to the god.',
    ['claim-ashur-dan-ii-katmuhi', 'claim-ashur-dan-ii-command-campaign', 'claim-ashur-dan-ii-habruri']),

  cs('cs-ashur-dan-ii-1-resettlement', 'text-ashur-dan-ii-1', 'Resettlement, Agriculture, and Horses',
    'Aššur-dān II claims to have brought back Assyrians who had left their homes because of famine and hardship. He resettled them, restored plowing, increased grain production, built palaces in the districts, and assembled horse teams for Assyria.',
    ['claim-ashur-dan-ii-resettlement-agriculture']),

  cs('cs-ashur-dan-ii-1-hunt', 'text-ashur-dan-ii-1', 'Ninurta, Nergal, and the Royal Hunt',
    'The inscription names Ninurta and Nergal as gods who loved the king’s priesthood, supplied wild animals, and commanded him to hunt. The large totals of lions, wild bulls, and elephants then turn hunting into another arena for expressing divinely sanctioned royal prowess.',
    ['claim-ashur-dan-ii-ninurta-nergal-hunt']),

  cs('cs-ashur-dan-ii-1-palace', 'text-ashur-dan-ii-1', 'The New Palace and Royal Memory',
    'Aššur-dān II records rebuilding the dilapidated New Palace at Aššur, installing architectural elements, and depositing commemorative inscriptions. Future rulers are instructed to restore the building and preserve his inscribed name, while erasure of the inscriptions is threatened with divine punishment.',
    ['claim-ashur-dan-ii-palace-preservation']),

  cs('cs-ashur-dan-ii-1-why-matters', 'text-ashur-dan-ii-1', 'Why It Matters',
    'Aššur-dān II 1 is important because it joins divine kingship, warfare, territorial reconstruction, resettlement, agricultural recovery, military resources, royal hunting, monumental building, and inscriptional memory in one text. It also directly connects Aššur, Ninurta, and Nergal with distinct aspects of Assyrian royal ideology.',
    ['claim-ashur-dan-ii-royal-appointment', 'claim-ashur-dan-ii-resettlement-agriculture', 'claim-ashur-dan-ii-ninurta-nergal-hunt', 'claim-ashur-dan-ii-palace-preservation']),
  // ---------------- NANAYA HYMN OF SARGON II TEXT ----------------
  cs('cs-nanaya-hymn-sargon-ii-overview', 'text-nanaya-hymn-sargon-ii', 'What Is This Text?',
    'The Nanaya Hymn of Sargon II is a late eighth-century BCE Akkadian hymn praising the goddess Nanaya. It combines exalted praise, beauty and queenly imagery, martial power, divine genealogy, royal blessing for Sargon II, and protection of agriculture and cultic offerings.',
    ['claim-nanaya-sargon-hymn-praise', 'claim-nanaya-sargon-hymn-warrior', 'claim-nanaya-sargon-hymn-sargon-blessing']),

  cs('cs-nanaya-hymn-sargon-ii-royal-hymn', 'text-nanaya-hymn-sargon-ii', 'A Royal Hymn to Nanaya',
    'The composition praises Nanaya within a royal setting associated with Sargon II. Rather than presenting a narrative episode, the hymn celebrates the goddess through titles, attributes, divine relationships, and petitions for the king’s welfare.',
    ['claim-nanaya-sargon-hymn-praise', 'claim-nanaya-sargon-hymn-sargon-blessing']),

  cs('cs-nanaya-hymn-sargon-ii-praise', 'text-nanaya-hymn-sargon-ii', 'Beauty, Majesty, and Power',
    'Nanaya is praised as queen, beautiful, exalted, resonant, and powerful. The hymn presents beauty and majesty alongside authority rather than treating them as separate or opposing aspects of the goddess.',
    ['claim-nanaya-sargon-hymn-praise']),

  cs('cs-nanaya-hymn-sargon-ii-warrior', 'text-nanaya-hymn-sargon-ii', 'Nanaya as Warrioress',
    'The hymn also gives Nanaya forceful martial characteristics. Battle imagery and warrioress language demonstrate that her literary identity extends beyond love and beauty into divine power and combat.',
    ['claim-nanaya-sargon-hymn-warrior']),

  cs('cs-nanaya-hymn-sargon-ii-muati', 'text-nanaya-hymn-sargon-ii', 'Nanaya and Muati',
    'The hymn identifies Nanaya as the spouse of Muati and places her among the honored goddesses. Muati does not currently have a separate atlas entity, so the relationship is preserved here as a direct feature of the ancient text without forcing it into a modernized divine family tree.',
    ['claim-nanaya-sargon-hymn-muati']),

  cs('cs-nanaya-hymn-sargon-ii-sin', 'text-nanaya-hymn-sargon-ii', 'Daughter of Sin',
    'The hymn directly addresses Nanaya as the daughter of Sin, the Akkadian lunar god represented in the atlas by Nanna. This differs from the earlier Lipit-Eštar inscription, which calls Nanaya the beloved child of Inanna, showing that ancient sources preserve more than one genealogy for the goddess.',
    ['claim-nanaya-sargon-hymn-sin-daughter', 'claim-nanaya-genealogy-varies']),

  cs('cs-nanaya-hymn-sargon-ii-sargon', 'text-nanaya-hymn-sargon-ii', 'Blessing Sargon II',
    'The closing petitions ask Nanaya to grant Sargon long life, firm foundations for his throne, a prolonged reign, and protection of his body from affliction and weakness. The hymn therefore connects divine praise directly with royal stability and health.',
    ['claim-nanaya-sargon-hymn-sargon-blessing']),

  cs('cs-nanaya-hymn-sargon-ii-agriculture', 'text-nanaya-hymn-sargon-ii', 'Protection of Grain and Offerings',
    'The hymn also asks Nanaya to render destructive locusts and grasshoppers powerless. The threatened grain, orchards, and regular divine offerings connect agricultural security with the maintenance of temple worship.',
    ['claim-nanaya-sargon-hymn-locust-protection']),

  cs('cs-nanaya-hymn-sargon-ii-why-matters', 'text-nanaya-hymn-sargon-ii', 'Why It Matters',
    'The Nanaya Hymn of Sargon II is important because it combines beauty, queenship, warfare, divine genealogy, royal protection, agriculture, and cultic continuity within one composition. It is especially valuable for showing how flexible Nanaya’s identity remained across different periods and textual traditions.',
    ['claim-nanaya-sargon-hymn-praise', 'claim-nanaya-sargon-hymn-warrior', 'claim-nanaya-sargon-hymn-sin-daughter', 'claim-nanaya-sargon-hymn-sargon-blessing', 'claim-nanaya-sargon-hymn-locust-protection']),
  // ---------------- ASHURBANIPAL NANAYA RETURN TEXT ----------------
  cs('cs-ashurbanipal-nanaya-return-overview', 'text-ashurbanipal-nanaya-return', 'What Is This Text?',
    'Ashurbanipal 154 is a Neo-Assyrian royal inscription that combines military conquest, the return of Nanaya from Elam to Uruk, restoration of divine cult, royal prayer, and instructions for future rulers. The text presents these events through the ideological voice of Ashurbanipal.',
    ['claim-ashurbanipal-nanaya-return-object-context', 'claim-nanaya-ashurbanipal-return']),

  cs('cs-ashurbanipal-nanaya-return-elam', 'text-ashurbanipal-nanaya-return', 'The Campaign Against Elam',
    'The inscription places Nanaya’s return within Ashurbanipal’s campaign against Elam. The king describes conquest, seizure of property and divine images, and devastation of Elamite territory before turning to the restoration of Nanaya.',
    ['claim-ashurbanipal-nanaya-return-elam-campaign']),

  cs('cs-ashurbanipal-nanaya-return-command', 'text-ashurbanipal-nanaya-return', 'Nanaya and the Divine Command',
    'Ashurbanipal claims that Nanaya had remained in Elam for 1,535 years. In the royal narrative, the goddess selected him for kingship and entrusted him with the task of returning her to Eanna.',
    ['claim-ashurbanipal-nanaya-return-divine-command']),

  cs('cs-ashurbanipal-nanaya-return-uruk', 'text-ashurbanipal-nanaya-return', 'The Return to Uruk',
    'Ashurbanipal states that he grasped Nanaya’s hand, brought her into Uruk and Eanna, and restored her to Ehiliana. The movement of the cult image is presented simultaneously as religious restoration and royal achievement.',
    ['claim-nanaya-ashurbanipal-return', 'claim-ashurbanipal-nanaya-return-reinstallation']),

  cs('cs-ashurbanipal-nanaya-return-nusku', 'text-ashurbanipal-nanaya-return', 'The Restoration of Nusku',
    'The inscription also records work associated with Nusku. Ashurbanipal says that he refurbished an emblem of the god and re-established him in his temple, extending the restoration theme beyond Nanaya alone.',
    ['claim-ashurbanipal-nanaya-return-nusku']),

  cs('cs-ashurbanipal-nanaya-return-prayer', 'text-ashurbanipal-nanaya-return', 'Sîn, Ningal, Šamaš, Aya, and Nusku',
    'The royal prayer invokes Sîn, Ningal, Šamaš, Aya, and Nusku and asks them to regard Ashurbanipal favorably. Sîn, Ningal, and Šamaš are linked to their corresponding atlas deity profiles; Aya and Nusku are retained here as figures named directly by the inscription.',
    ['claim-ashurbanipal-nanaya-return-divine-prayer']),

  cs('cs-ashurbanipal-nanaya-return-blessings', 'text-ashurbanipal-nanaya-return', 'Royal Blessings and Favorable Omens',
    'Ashurbanipal asks for a secure throne, a prolonged reign, favorable omens, long life, abundance, plenty, and victory over his enemies. These petitions reveal how restoration of divine cult was tied to royal expectations of political stability and divine favor.',
    ['claim-ashurbanipal-nanaya-return-royal-blessings']),

  cs('cs-ashurbanipal-nanaya-return-future-ruler', 'text-ashurbanipal-nanaya-return', 'Instructions to a Future King',
    'The inscription addresses a future royal descendant chosen to rule and instructs him to restore Ashurbanipal’s work when it becomes old or damaged. Preservation and rebuilding are therefore presented as duties extending beyond Ashurbanipal’s own reign.',
    ['claim-ashurbanipal-nanaya-return-future-ruler']),

  cs('cs-ashurbanipal-nanaya-return-significance', 'text-ashurbanipal-nanaya-return', 'Why This Inscription Matters',
    'Ashurbanipal 154 shows how an Assyrian king could turn military conquest, the movement of divine images, temple restoration, prayer, omens, and royal succession into one ideological narrative. Its account of Nanaya’s return is direct ancient evidence, but its extraordinary chronology and royal claims should be read as elements of that royal presentation rather than as neutral historical reporting.',
    ['claim-nanaya-ashurbanipal-return', 'claim-ashurbanipal-nanaya-return-divine-command', 'claim-ashurbanipal-nanaya-return-royal-blessings', 'claim-ashurbanipal-nanaya-return-future-ruler']),
  // ---------------- ESARHADDON 136 TEXT ----------------
  cs('cs-esarhaddon-136-overview', 'text-esarhaddon-136-nanaya', 'What Is This Text?',
    'Esarhaddon 136 is a seventh-century BCE Akkadian royal inscription associated with Uruk. It records Esarhaddon’s restoration of Ehiliana within the Eanna complex, the reinstallation of Nanaya, a prayer involving Nabu, and a closing demand that the royal inscription be preserved.',
    ['claim-esarhaddon-136-object-context', 'claim-nanaya-uruk-ehiliana', 'claim-esarhaddon-136-prayer-nabu']),

  cs('cs-esarhaddon-136-royal-context', 'text-esarhaddon-136-nanaya', 'Esarhaddon and Royal Authority',
    'The inscription identifies Esarhaddon as king of Assyria, governor of Babylon, and king of Sumer and Akkad. These titles frame the restoration of Nanaya’s sanctuary within the wider political authority claimed by the Assyrian king.',
    ['claim-esarhaddon-136-titulary']),

  cs('cs-esarhaddon-136-ehiliana-history', 'text-esarhaddon-136-nanaya', 'The Earlier History of Ehiliana',
    'Esarhaddon presents his work at Ehiliana as part of a longer history of royal building activity. The sanctuary had received earlier attention but had subsequently fallen into disrepair before his restoration.',
    ['claim-esarhaddon-136-ehiliana-history']),

  cs('cs-esarhaddon-136-rebuilding', 'text-esarhaddon-136-nanaya', 'Rebuilding the Sanctuary',
    'The king states that he rebuilt Ehiliana using baked bricks prepared in a ritually pure kiln. The description presents temple construction as both an architectural and a religious act.',
    ['claim-esarhaddon-136-rebuilding']),

  cs('cs-esarhaddon-136-nanaya-uruk', 'text-esarhaddon-136-nanaya', 'Nanaya, Queen of Uruk',
    'Esarhaddon 136 calls Nanaya queen of Uruk and places Ehiliana within the Eanna temple complex. The inscription therefore provides direct evidence linking the goddess, her sanctuary, and the religious landscape of Uruk.',
    ['claim-nanaya-uruk-ehiliana']),

  cs('cs-esarhaddon-136-reinstallation', 'text-esarhaddon-136-nanaya', 'Nanaya Returns to Ehiliana',
    'After restoring the sanctuary, Esarhaddon states that he brought Nanaya inside and established her there to dwell permanently. The rebuilding culminates not simply in architecture but in the renewed presence of the goddess within her cult place.',
    ['claim-esarhaddon-136-nanaya-reinstallation']),

  cs('cs-esarhaddon-136-nabu', 'text-esarhaddon-136-nanaya', 'Nanaya and Nabu',
    'The concluding prayer asks Nanaya to speak favorably for Esarhaddon before Nabu and to make the king’s deeds pleasing to him. This passage directly connects Nanaya and Nabu within Esarhaddon’s appeal for divine favor.',
    ['claim-esarhaddon-136-prayer-nabu']),

  cs('cs-esarhaddon-136-preservation', 'text-esarhaddon-136-nanaya', 'Preserving the Royal Inscription',
    'The inscription warns future rulers not to erase Esarhaddon’s name or alter the text and invokes punishment against anyone who violates it. Esarhaddon 136 therefore combines temple restoration, divine reinstallation, royal devotion, and the preservation of royal memory.',
    ['claim-esarhaddon-136-inscription-curse', 'claim-esarhaddon-136-rebuilding', 'claim-esarhaddon-136-nanaya-reinstallation']),
  // ---------------- LIPIT-ESHTAR 10ADD TEXT ----------------
  cs('cs-lipit-eshtar-10add-overview', 'text-lipit-eshtar-10add', 'What Is This Text?',
    'Lipit-Eštar 10add is an Early Old Babylonian Sumerian royal inscription from Isin preserved on a clay cone. It combines royal titulary, claims of justice, devotion to Inanna, the identification of Nanaya as Inanna’s beloved child, and the construction of E-me-urur for Nanaya.',
    ['claim-lipit-eshtar-10add-object-context', 'claim-lipit-eshtar-10add-titulary-justice', 'claim-nanaya-lipit-eshtar-inanna']),

  cs('cs-lipit-eshtar-10add-object', 'text-lipit-eshtar-10add', 'The Inscribed Cone from Isin',
    'The surviving inscription belongs to the Early Old Babylonian period and was written in Sumerian on a cone from Isin. Its compact format preserves a royal building dedication rather than an extended narrative composition.',
    ['claim-lipit-eshtar-10add-object-context']),

  cs('cs-lipit-eshtar-10add-titulary', 'text-lipit-eshtar-10add', 'Royal and Cultic Titles',
    'Lipit-Eštar presents himself through a sequence of royal and cultic titles linking his kingship with several major Mesopotamian religious centers. He ultimately identifies himself as king of Isin and king of Sumer and Akkad.',
    ['claim-lipit-eshtar-10add-titulary-justice']),

  cs('cs-lipit-eshtar-10add-justice', 'text-lipit-eshtar-10add', 'Establishing Justice',
    'The inscription states that Lipit-Eštar established justice in Sumer and Akkad. This embeds the temple-building dedication within a broader royal claim about legitimate and orderly rule.',
    ['claim-lipit-eshtar-10add-titulary-justice']),

  cs('cs-lipit-eshtar-10add-inanna', 'text-lipit-eshtar-10add', 'The Favorite of Inanna',
    'Lipit-Eštar explicitly calls himself the favorite of Inanna. The statement connects the king personally with the goddess before the inscription turns to Nanaya and her sanctuary.',
    ['claim-lipit-eshtar-10add-inanna-favorite']),

  cs('cs-lipit-eshtar-10add-nanaya', 'text-lipit-eshtar-10add', 'Nanaya, Beloved Child of Inanna',
    'The text calls Nanaya the beloved child of Inanna and records Lipit-Eštar’s construction of E-me-urur for her at Isin. This is direct ancient evidence for one genealogy of Nanaya, although other sources preserve different parentage.',
    ['claim-nanaya-lipit-eshtar-inanna', 'claim-nanaya-genealogy-varies']),

  cs('cs-lipit-eshtar-10add-why-matters', 'text-lipit-eshtar-10add', 'Why It Matters',
    'Despite its brevity, Lipit-Eštar 10add is valuable because it connects Old Babylonian kingship, justice, temple patronage, Inanna, Nanaya, and changing divine genealogy within one securely identified royal inscription.',
    ['claim-lipit-eshtar-10add-titulary-justice', 'claim-lipit-eshtar-10add-inanna-favorite', 'claim-nanaya-lipit-eshtar-inanna']),
  // ---------------- ASHURBANIPAL LIBRARY COLOPHON BAK 338/339 TEXT ----------------
  cs('cs-ashurbanipal-colophon-338-339-overview', 'text-ashurbanipal-colophon-338-339', 'What Is This Text?',
    'Ashurbanipal Library Colophon BAK 338/339 is a seventh-century BCE Akkadian library colophon associated with the scholarly collections of Ashurbanipal. It describes copying and checking a tablet against an original, divine gifts of understanding from Nabu and Tašmetu, Ashurbanipal’s scribal expertise, the preparation and collation of tablets, their placement in the library of Ezida at Nineveh, and prayers for royal protection.',
    ['claim-ashurbanipal-colophon-original', 'claim-tashmetu-ashurbanipal-understanding', 'claim-ashurbanipal-colophon-ezida-library']),

  cs('cs-ashurbanipal-colophon-338-339-object', 'text-ashurbanipal-colophon-338-339', 'A Library Colophon',
    'The text functions as a colophon attached to scholarly tablets rather than as a continuous narrative composition. Its opening statement that the tablet was written and checked according to an original emphasizes textual transmission, comparison, and scribal control.',
    ['claim-ashurbanipal-colophon-original', 'claim-ashurbanipal-colophon-titulary']),

  cs('cs-ashurbanipal-colophon-338-339-divine-understanding', 'text-ashurbanipal-colophon-338-339', 'Nabu and Tašmetu Grant Understanding',
    'Ashurbanipal states that Nabu and Tašmetu granted him broad understanding. The claim directly connects royal intellectual ability with divine favor and provides primary evidence for both deities within the king’s presentation of his scribal learning.',
    ['claim-tashmetu-ashurbanipal-understanding']),

  cs('cs-ashurbanipal-colophon-338-339-scribal-mastery', 'text-ashurbanipal-colophon-338-339', 'Ashurbanipal as Scholar-King',
    'The king claims clear vision, mastery of scribal secrets, knowledge associated with Nabu, and learning beyond that attained by his royal predecessors. The colophon therefore presents scholarly competence as an important component of Ashurbanipal’s royal identity.',
    ['claim-ashurbanipal-colophon-scribal-mastery']),

  cs('cs-ashurbanipal-colophon-338-339-tablet-work', 'text-ashurbanipal-colophon-338-339', 'Writing, Checking, and Collating Tablets',
    'Ashurbanipal says that he wrote cuneiform learning on tablets, checked the tablets, and collated them. These actions show that the colophon is concerned not simply with owning texts but with their preparation, verification, and organization.',
    ['claim-ashurbanipal-colophon-tablet-work']),

  cs('cs-ashurbanipal-colophon-338-339-ezida-library', 'text-ashurbanipal-colophon-338-339', 'The Library of Ezida at Nineveh',
    'The tablets are said to have been placed in the library of Ezida, the temple of Nabu-of-inner-Nineveh. This directly connects the scholarly collection with Nabu, temple space, and the intellectual landscape of Nineveh.',
    ['claim-ashurbanipal-colophon-ezida-library']),

  cs('cs-ashurbanipal-colophon-338-339-royal-protection', 'text-ashurbanipal-colophon-338-339', 'Learning, Health, and the Royal Throne',
    'The collection is connected with Ashurbanipal’s life, bodily protection, freedom from illness, and the stability of his royal throne. The preservation of scholarly tablets is therefore presented as part of a broader relationship between learning, divine favor, and kingship.',
    ['claim-ashurbanipal-colophon-royal-protection']),

  cs('cs-ashurbanipal-colophon-338-339-prayer', 'text-ashurbanipal-colophon-338-339', 'Prayer to Nabu and Tašmetu',
    'The closing prayer asks Nabu to favor Ashurbanipal’s kingship, take his hand, protect his steps, and remember him favorably. Tašmetu is asked to intercede continually before Nabu for the king’s life, giving both deities active roles in the colophon’s concluding appeal.',
    ['claim-ashurbanipal-colophon-prayer']),

  cs('cs-ashurbanipal-colophon-338-339-why-matters', 'text-ashurbanipal-colophon-338-339', 'Why It Matters',
    'BAK 338/339 is important because it brings together textual copying, verification, scribal expertise, temple libraries, Nabu and Tašmetu, royal self-presentation, bodily protection, and the stability of kingship. It provides unusually direct evidence for how scholarship and royal ideology could intersect in seventh-century BCE Nineveh.',
    ['claim-ashurbanipal-colophon-original', 'claim-tashmetu-ashurbanipal-understanding', 'claim-ashurbanipal-colophon-tablet-work', 'claim-ashurbanipal-colophon-ezida-library', 'claim-ashurbanipal-colophon-prayer']),
  // ---------------- ANTIOCHUS I 1 TEXT ----------------
  cs('cs-antiochus-i-1-overview', 'text-antiochus-i-1', 'What Is This Text?',
    'Antiochus I 1 is an Akkadian Seleucid royal building inscription from Borsippa dated to 268 BCE. It records Antiochus I’s patronage of Esagil and Ezida, praises Nabu, connects Nabu with Marduk, and presents temple construction, royal legitimacy, prayer, and dynastic continuity within a Babylonian religious framework.',
    ['claim-nabu-antiochus-ezida-continuity', 'claim-antiochus-i-1-royal-titulary']),

  cs('cs-antiochus-i-1-royal-titulary', 'text-antiochus-i-1', 'Antiochus as Babylonian King',
    'The inscription opens with Antiochus adopting an extensive Babylonian royal titulary. He identifies himself as great king, mighty king, king of the world, king of Babylon, and king of the lands, while also presenting himself as provider for Esagil and Ezida and heir of Seleucus.',
    ['claim-antiochus-i-1-royal-titulary']),

  cs('cs-antiochus-i-1-bricks', 'text-antiochus-i-1', 'Preparing the Temple Bricks',
    'Antiochus describes personally preparing bricks for Esagil and Ezida with pure hands and fine oil before bringing them for the temple foundations. The passage presents royal building work not merely as administration but as an explicitly ritualized act of kingship and temple patronage.',
    ['claim-antiochus-i-1-brick-ritual']),

  cs('cs-antiochus-i-1-ezida-date', 'text-antiochus-i-1', 'Ezida at Borsippa — 27 March 268 BCE',
    'The inscription gives an unusually precise date for the laying of Ezida’s foundations at Borsippa: 27 March 268 BCE. In the same passage Nabu is praised as the wisest of the gods and identified as the firstborn son of Marduk.',
    ['claim-nabu-antiochus-ezida-continuity']),

  cs('cs-antiochus-i-1-nabu-marduk', 'text-antiochus-i-1', 'Nabu and Marduk',
    'Antiochus addresses Nabu as the firstborn son of Marduk. This Seleucid-period royal inscription therefore provides a late independent primary witness for the father-son relationship between the two gods and for the continued importance of that theology at Borsippa.',
    ['claim-nabu-antiochus-ezida-continuity']),

  cs('cs-antiochus-i-1-royal-prayer', 'text-antiochus-i-1', 'Prayer for Antiochus and Seleucus',
    'The king asks Nabu to grant military success, just rule, a prosperous reign, happiness, and long life to Antiochus and his son Seleucus. Temple building and royal continuity are therefore directly connected with divine favor in the inscription.',
    ['claim-antiochus-i-1-antiochus-seleucus-prayer']),

  cs('cs-antiochus-i-1-tablet-kingship', 'text-antiochus-i-1', 'Nabu’s Exalted Tablet and Royal Destiny',
    'As Nabu enters Ezida, Antiochus asks that his days, years, throne, and reign be secured on the god’s exalted tablet. The passage links Nabu’s scribal and cosmic authority with the preservation and legitimation of royal rule.',
    ['claim-antiochus-i-1-nabu-tablet-kingship']),

  cs('cs-antiochus-i-1-family-temples', 'text-antiochus-i-1', 'Dynasty, Tribute, and Temple Completion',
    'Near the close of the inscription Antiochus prays for the conquest of lands and the delivery of tribute needed for the completion of Esagil and Ezida. He also asks Nabu to establish the good fortune of himself, his son Seleucus, and his consort Stratonike, tying temple patronage to the fortunes of the Seleucid royal family.',
    ['claim-antiochus-i-1-family-and-temples']),

  cs('cs-antiochus-i-1-why-matters', 'text-antiochus-i-1', 'Why It Matters',
    'Antiochus I 1 is significant because it shows a Hellenistic ruler expressing kingship through an Akkadian Babylonian inscription and established Mesopotamian temple traditions. The text connects Seleucid dynastic identity with Nabu, Marduk, Ezida, Esagil, Borsippa, Babylon, ritual construction, and royal prayer centuries after the Neo-Babylonian period.',
    ['claim-antiochus-i-1-royal-titulary', 'claim-nabu-antiochus-ezida-continuity', 'claim-antiochus-i-1-family-and-temples']),
  // ---------------- SHAMASH-SHUMA-UKIN 4 TEXT ----------------
  cs('cs-shamash-shuma-ukin-4-overview', 'text-shamash-shuma-ukin-4', 'What Is This Text?',
    'Šamaš-šuma-ukin 4 is a seventh-century BCE Babylonian royal inscription centered on Nabu, Ezida at Borsippa, royal building work, and the preservation of the king’s inscription. It combines divine praise with royal titulary, temple construction, prayer, and instructions for later rulers.',
    ['claim-nabu-shamash-shuma-ukin-scribe-wisdom', 'claim-shamash-shuma-ukin-4-royal-context', 'claim-shamash-shuma-ukin-4-ezida-storehouses']),

  cs('cs-shamash-shuma-ukin-4-object-context', 'text-shamash-shuma-ukin-4', 'Date, Object, and Historical Setting',
    'The inscription belongs to the reign of Šamaš-šuma-ukīn in the seventh century BCE and is preserved as a Babylonian royal building inscription associated with Borsippa. Its surviving text places the king within the dynasty of Esarhaddon and Ashurbanipal while recording work connected with Ezida.',
    ['claim-shamash-shuma-ukin-4-royal-context']),

  cs('cs-shamash-shuma-ukin-4-nabu-wisdom', 'text-shamash-shuma-ukin-4', 'Nabu as Scribe and Wisest of the Gods',
    'The opening praise presents Nabu as the scribe of everything, the wisest of the gods, and one who knows everything. These titles provide direct inscriptional evidence for Nabu’s association with writing, knowledge, and divine wisdom in this specific royal text.',
    ['claim-nabu-shamash-shuma-ukin-scribe-wisdom']),

  cs('cs-shamash-shuma-ukin-4-nabu-marduk', 'text-shamash-shuma-ukin-4', 'Nabu and Marduk',
    'The inscription identifies Nabu as the most important son of Asari, a name of Marduk. This gives a direct seventh-century BCE witness to the father-son relationship between Marduk and Nabu without requiring that the same genealogy be projected unchanged into every period.',
    ['claim-nabu-shamash-shuma-ukin-son-of-marduk']),

  cs('cs-shamash-shuma-ukin-4-ezida-borsippa', 'text-shamash-shuma-ukin-4', 'Ezida and Borsippa',
    'Nabu is described as dwelling in Ezida at Borsippa, directly connecting the deity, sanctuary, and city within the inscription. The text therefore provides primary evidence for Borsippa as a major center of Nabu’s cult.',
    ['claim-nabu-shamash-shuma-ukin-ezida-borsippa', 'claim-borsippa-ezida-nabu']),

  cs('cs-shamash-shuma-ukin-4-royal-context', 'text-shamash-shuma-ukin-4', 'Šamaš-šuma-ukīn and the Royal Context',
    'Šamaš-šuma-ukīn identifies himself as king of Babylon and king of Sumer and Akkad, refers to his care for Babylon, Esagil, and Ezida, and identifies himself as a son of Esarhaddon and favored brother of Ashurbanipal. The inscription thus places temple patronage within a specific royal and dynastic setting.',
    ['claim-shamash-shuma-ukin-4-royal-context']),

  cs('cs-shamash-shuma-ukin-4-storehouses', 'text-shamash-shuma-ukin-4', 'Rebuilding the Storehouses of Ezida',
    'The king records rebuilding the storehouses of Ezida and raising them high. The work is presented in connection with prayers for the health, longevity, descendants, and reigns of both Šamaš-šuma-ukīn and Ashurbanipal, linking construction, royal welfare, and devotion to Nabu.',
    ['claim-shamash-shuma-ukin-4-ezida-storehouses']),

  cs('cs-shamash-shuma-ukin-4-preservation', 'text-shamash-shuma-ukin-4', 'Future Rulers, Preservation, and Curse',
    'The closing portion addresses future rulers. A later king is instructed to repair the work, preserve Šamaš-šuma-ukīn’s inscription, make offerings, and place the earlier inscription with his own. The text then threatens anyone who erases the royal names, destroys the inscription, or improperly changes its position with Nabu’s anger and the loss of name and descendants.',
    ['claim-shamash-shuma-ukin-4-future-ruler', 'claim-shamash-shuma-ukin-4-inscription-curse']),

  cs('cs-shamash-shuma-ukin-4-why-matters', 'text-shamash-shuma-ukin-4', 'Why It Matters',
    'Šamaš-šuma-ukin 4 is valuable because one compact royal inscription connects Nabu’s wisdom and scribal identity, his relationship with Marduk, Ezida and Borsippa, Babylonian kingship, royal building activity, and the deliberate preservation of royal memory. It provides unusually direct evidence for how theology, temple patronage, and inscriptional practice could operate together.',
    ['claim-nabu-shamash-shuma-ukin-scribe-wisdom', 'claim-nabu-shamash-shuma-ukin-son-of-marduk', 'claim-shamash-shuma-ukin-4-ezida-storehouses', 'claim-shamash-shuma-ukin-4-future-ruler']),
  // ---------------- NINURTA'S EXPLOITS / LUGAL-E TEXT ----------------
  cs('cs-ninurta-lugale-text-sharur', 'text-ninurta-lugale', 'Šar-ur, the Speaking Weapon',
    'Šar-ur is not merely an object carried by Ninurta. The weapon speaks repeatedly, reports the Asag’s growing power, warns Ninurta about the danger of confronting it, carries messages connected with Enlil’s counsel, and praises Ninurta after the victory. This gives the weapon an unusually active literary role in shaping the movement of the narrative.',
    ['claim-ninurta-lugale-sharur']),

  cs('cs-ninurta-lugale-text-asag-devastation', 'text-ninurta-lugale', 'The Asag’s Devastation Before Defeat',
    'The Asag is presented as a threat to more than Ninurta’s personal prestige. Its assault damages the landscape itself: mountain waters are dried, vegetation is torn away, the earth is wounded, reedbeds burn, and gods and people are thrown into fear. Ninurta’s eventual victory therefore reverses a crisis that the composition describes in environmental as well as martial terms.',
    ['claim-ninurta-lugale-asag-devastation', 'claim-ninurta-lugale-defeats-asag']),

  cs('cs-ninurta-lugale-text-ninhursaga', 'text-ninurta-lugale', 'Ninmaḫ, the Mountain, and the Name Ninḫursaĝa',
    'After the ordering of the waters, Ninmaḫ comes to Ninurta in connection with the mountain landscape and his victory. Ninurta names the piled-up mountain Ḫursaĝ and declares that she shall be its lady, Ninḫursaĝa. He then assigns fertility, vegetation, timber, metals, animals, and other forms of abundance to the mountain. The passage directly links Ninurta’s postwar ordering of the landscape with the elevation of Ninmaḫ as Ninḫursaĝa within this composition.',
    ['claim-ninurta-lugale-ninmah-ninhursaga']),

  cs('cs-ninurta-lugale-text-stones', 'text-ninurta-lugale', 'The Destinies of the Stones',
    'A major portion of Lugal-e follows the battle and water-ordering episodes with a long judgment of stones. Ninurta addresses different stones individually, cursing some for opposing him and rewarding others with valued functions in craft, ritual, royal monuments, tools, or precious objects. This extended sequence makes the composition not only a combat narrative but also an etiological account explaining properties, uses, and statuses assigned to materials.',
    ['claim-ninurta-lugale-stone-destinies']),

  cs('cs-ninurta-lugale-text-closing', 'text-ninurta-lugale', 'Return, Enlil’s Blessing, Nisaba, and Closing Praise',
    'The closing movement returns Ninurta from the conquered mountains in his ceremonial barge, surrounded by praise. Enlil blesses him and celebrates his victory and ordering work. The composition then links the abundance produced by Ninurta’s management of water and agriculture with Nisaba, to whom the keeping of grain-piles and granaries is entrusted, before ending with a formal statement that it is good to praise Ninurta.',
    ['claim-ninurta-lugale-closing-nisaba', 'claim-ninurta-lugale-son-of-enlil']),
  cs('cs-ninurta-lugale-text-overview', 'text-ninurta-lugale', 'What Is This Text?',
    'Ninurta’s Exploits, commonly known as Lugal-e, is a Sumerian literary composition centered on Ninurta. The surviving narrative presents his confrontation with the Asag in the mountains and later connects his victory with the management of mountain waters, cultivated fields, barley, and harvest.',
    [
      'claim-ninurta-lugale-defeats-asag',
      'claim-ninurta-lugale-water-fields-harvest',
    ]),

  cs('cs-ninurta-lugale-text-setting', 'text-ninurta-lugale', 'Language, Manuscripts, and Scribal Transmission',
    'Lugal-e is a Sumerian literary composition with an exceptionally substantial manuscript tradition. It was copied especially intensively in the Old Babylonian period, including in scribal-school settings at Nippur, and the work continued to be transmitted in later periods, including bilingual Sumerian-Akkadian scholarly copies. The surviving evidence therefore reflects both a literary composition and a long history of scribal preservation.',
    ['claim-ninurta-lugale-transmission']),
  cs('cs-ninurta-lugale-text-asag', 'text-ninurta-lugale', 'The Battle with the Asag',
    'The composition presents Ninurta confronting the Asag in the mountains. He overcomes the creature in battle and celebrates his victory. This episode provides direct evidence for Ninurta’s heroic combat role within Lugal-e.',
    [
      'claim-ninurta-lugale-defeats-asag',
    ]),

  cs('cs-ninurta-lugale-text-waters', 'text-ninurta-lugale', 'Mountain Waters and the Tigris',
    'After the battle, Ninurta gathers the waters of the mountains and directs them toward the Tigris. The narrative therefore moves from heroic combat to the ordering and redirection of the mountain landscape.',
    [
      'claim-ninurta-lugale-water-fields-harvest',
    ]),

  cs('cs-ninurta-lugale-text-harvest', 'text-ninurta-lugale', 'Fields, Barley, and Harvest',
    'Lugal-e describes Ninurta pouring water over cultivated fields, providing water for barley, and raising the harvest. These agricultural results are presented within the same composition that narrates his victory over the Asag.',
    [
      'claim-ninurta-lugale-water-fields-harvest',
    ]),

  cs('cs-ninurta-lugale-text-enlil', 'text-ninurta-lugale', 'Ninurta and Enlil',
    'The composition repeatedly identifies Ninurta as the son of Enlil. Near the conclusion, Enlil is explicitly described as his father and blesses him, providing a directly attested father-son relationship within this literary tradition.',
    [
      'claim-ninurta-lugale-son-of-enlil',
    ]),

  cs('cs-ninurta-lugale-text-movement', 'text-ninurta-lugale', 'From Combat to Cultivated Land',
    'One of the distinctive features of Lugal-e is the movement from Ninurta’s victory in the mountains to his management of mountain waters and their benefit to cultivated land. The composition places heroic combat and the productive ordering of the landscape within the same narrative sequence.',
    [
      'claim-ninurta-lugale-defeats-asag',
      'claim-ninurta-lugale-water-fields-harvest',
    ]),

  cs('cs-ninurta-lugale-text-why-matters', 'text-ninurta-lugale', 'Why It Matters',
    'Lugal-e is important because it preserves a specific Sumerian literary portrayal of Ninurta in which heroic victory, divine genealogy, mountain waters, cultivated fields, and harvest are closely connected. It provides direct textual evidence for these roles without requiring them to be generalized across every period of Mesopotamian religion.',
    [
      'claim-ninurta-lugale-defeats-asag',
      'claim-ninurta-lugale-water-fields-harvest',
      'claim-ninurta-lugale-son-of-enlil',
    ]),
  // ---------------- ATRAHASIS ----------------
  cs('cs-atrahasis-date-recension', 'text-atrahasis', 'Language, Date, and Old Babylonian Recension',
    "Atrahasis is an Akkadian composition best preserved in an Old Babylonian recension conventionally dated to about the eighteenth century BCE. That date should be attached to the surviving recension and manuscript tradition rather than treated as a secure date for every earlier stage of the story. The composition belongs to the long Mesopotamian scribal environment in which literary works were copied, revised, and transmitted across generations.",
    ['claim-atrahasis-old-babylonian-recension']),

  cs('cs-atrahasis-manuscripts', 'text-atrahasis', 'Manuscript Tradition and State of Preservation',
    "Atrahasis does not survive in a single intact ancient manuscript. Modern editions reconstruct the composition from multiple tablets and fragments, with the Old Babylonian witnesses providing the fullest recension and later fragments preserving additional portions and variants. Significant stretches survive, but damage and gaps remain, so the exact wording and continuity of some passages depend on editorial reconstruction rather than on one continuous tablet.",
    ['claim-atrahasis-manuscript-tradition']),

  cs('cs-atrahasis-three-tablet', 'text-atrahasis', 'The Three-Tablet Structure',
    "The standard Old Babylonian recension is conventionally arranged in three tablets. Tablet I moves from the exhausting labor of the lesser gods to revolt and the creation of humanity. Tablet II develops human multiplication, the noise crisis, and successive attempts to reduce the population through plague, drought, and famine. Tablet III contains the flood decision, Atrahasis's survival through Ea's warning, the gods' distress and sacrifice scene, the dispute after the flood, and the final demographic settlement.",
    ['claim-atrahasis-three-tablet-structure']),

  cs('cs-atrahasis-tablet-i-text', 'text-atrahasis', 'Tablet I — Divine Labor and the Creation of Humanity',
    "Tablet I gives Atrahasis a distinctive starting point: before humans exist, lesser gods perform exhausting labor for senior deities, including work connected with canals and waterways. Their burden becomes intolerable and they revolt. The divine solution is to create humanity as a replacement labor force. The birth-goddess, working within Enki/Ea's plan, combines clay with the flesh and blood of a slain god so that humans can assume the work. This makes the creation of humanity part of the composition's social and theological logic rather than a detached creation episode.",
    [
      'claim-atrahasis-divine-labor-revolt',
      'claim-atrahasis-human-creation',
      'claim-creation-humanity-labor-relief',
      'claim-atrahasis-nintu-mami-distinction',
    ]),

  cs('cs-atrahasis-tablet-ii-text', 'text-atrahasis', 'Tablet II — Noise, Plague, Drought, and Famine',
    "Tablet II develops the unintended consequence of successful human reproduction. Humanity multiplies, the resulting noise disturbs Enlil, and the gods attempt to reduce the population. Plague is followed by increasingly severe measures involving drought, agricultural failure, and famine. Atrahasis repeatedly benefits from Enki/Ea's intervention, which frustrates the intended reductions and allows humanity to recover. The tablet therefore builds the flood decision through escalation rather than introducing it without prior cause.",
    [
      'claim-enlil-flood-instigator',
      'claim-enlil-assembly-deliberation',
      'claim-atrahasis-plague-intervention',
      'claim-atrahasis-drought-famine',
      'claim-enlil-enki-contrasting-role',
    ]),

  cs('cs-atrahasis-tablet-iii-text', 'text-atrahasis', 'Tablet III — Flood, Sacrifice, and the Post-Flood Settlement',
    "Tablet III brings the crisis to the flood. Enki/Ea warns Atrahasis indirectly through a reed wall and instructs him to build a vessel, allowing him to survive. During and after the catastrophe the gods themselves suffer from the loss of human offerings, and Atrahasis's sacrifice draws them back. Enlil reacts angrily when he learns that a human survived, while Enki/Ea challenges the indiscriminate destruction. The surviving ending turns away from another universal flood and toward continuing limits on human reproduction and survival.",
    [
      'claim-atrahasis-boat-flood-survival',
      'claim-atrahasis-gods-hunger-sacrifice',
      'claim-atrahasis-enlil-ea-aftermath',
      'claim-atrahasis-post-flood-population-controls',
    ]),

  cs('cs-atrahasis-recensions', 'text-atrahasis', 'Distinct Recensions and Textual Histories',
    "Atrahasis and the Epic of Gilgamesh should not be placed on one shared recension timeline. Atrahasis is best attested through its Old Babylonian recension, whereas the fullest surviving form of Gilgamesh is the much later Standard Babylonian version, preserved especially through first-millennium manuscripts from Nineveh. The close relationship between their flood passages is therefore a question of literary transmission between distinct works, not evidence that they are different tablets of one continuously revised composition.",
    [
      'claim-gilgamesh-atrahasis-distinct-recensions',
      'claim-gilgamesh-flood-draws-on-atrahasis',
      'claim-flood-gilgamesh-atrahasis-close-parallel',
    ]),

  cs('cs-atrahasis-evidence-limits', 'text-atrahasis', 'Evidence Limits and Why Atrahasis Matters',
    "Atrahasis is unusually valuable because it preserves a connected causal sequence linking divine labor, human creation, population growth, successive reduction measures, flood, and post-flood controls. At the same time, the tablets are damaged and reconstructed from multiple witnesses, so absent details must be handled carefully. The surviving Atrahasis text does not clearly preserve the specific flood duration, named landing mountain, or dove-swallow-raven sequence known from Gilgamesh Tablet XI. Those differences describe what is presently preserved; they do not prove that every lost portion of Atrahasis lacked such material. For the history of Mesopotamian literature, the text remains a major witness to both creation and flood traditions and an important source for understanding the later Gilgamesh flood episode.",
    [
      'claim-atrahasis-manuscript-tradition',
      'claim-flood-gilgamesh-atrahasis-close-parallel',
      'claim-gilgamesh-flood-draws-on-atrahasis',
    ]),
  cs('cs-atrahasis-dating', 'text-atrahasis', 'Approximate Date',
    "The best-preserved recension of Atrahasis is the Old Babylonian version, generally dated to approximately the 18th century BCE. This is the date of that specific surviving manuscript tradition; the underlying narrative material may draw on older oral or written tradition not independently datable from the tablets themselves."),
  cs('cs-atrahasis-preservation', 'text-atrahasis', 'State of Preservation',
    "Atrahasis survives across multiple tablets and fragments spanning several recensions, most substantially the Old Babylonian version. Significant portions are preserved, though — as with most Mesopotamian literary texts — some sections, including parts of the ending, are damaged or missing."),
  cs('cs-atrahasis-structure', 'text-atrahasis', 'Structure',
    "The composition is generally organized across three tablets: the first covering the gods' labor dispute and the creation of humanity, the second covering humanity's overpopulation and the escalating divine responses, and the third covering the flood itself and its aftermath."),
  cs('cs-atrahasis-what-it-says', 'text-atrahasis', 'What the Text Actually Says',
    "The surviving text explicitly states human overpopulation and the resulting noise disturbing Enlil's rest as the reason for the flood, describes Enki's indirect warning to Atrahasis via a reed wall, and depicts a divine sacrifice and mixed reaction (grief and anger) from the gods following the flood.",
    ['claim-enlil-flood-instigator']),
  cs('cs-atrahasis-what-it-doesnt-say', 'text-atrahasis', 'What It Does Not Say',
    "The surviving Atrahasis tablets do not clearly preserve a specific stated duration for the flood, a bird-release sequence, or a named landing site for the vessel — details that are, by contrast, explicitly present in the later Gilgamesh Tablet XI flood episode. This is a difference in what survives and possibly in what was originally narrated, not necessarily evidence that Atrahasis never contained such details in a now-lost portion."),
  cs('cs-atrahasis-scholarly', 'text-atrahasis', 'Scholarly Questions',
    "Assyriologists widely hold that the later Gilgamesh Tablet XI flood episode draws on the Atrahasis tradition, based on close textual parallels including the reed-wall warning scene, though this is a scholarly position about likely literary dependence rather than a claim made within either ancient text itself.",
    ['claim-flood-gilgamesh-atrahasis-close-parallel']),
  cs('cs-atrahasis-characters', 'text-atrahasis', 'Major Characters',
    "The principal figures are Enlil, whose complaint about human noise drives the divine decision to escalate against humanity; Enki, who repeatedly intervenes on humanity's behalf, first against earlier plagues and famines and finally against the flood itself; and Atrahasis, the human protagonist whose name means roughly \"exceedingly wise,\" fitting his role as the one human deemed capable of correctly interpreting Enki's indirect warning."),
  cs('cs-atrahasis-editions', 'text-atrahasis', 'Source / Edition Information',
    "The standard modern critical edition of Atrahasis is Lambert and Millard's 1969 edition, which brings together the Old Babylonian tablets along with later fragments and remains the primary scholarly reference point for the text discussed throughout this atlas."),
  cs('cs-atrahasis-why-matters', 'text-atrahasis', 'Why It Matters',
    "Atrahasis matters for understanding flood traditions because it is the fullest surviving connected Mesopotamian flood narrative, preserving both the stated divine motive for the flood and considerable detail about its aftermath — details more fragmentary or entirely absent in the earlier Eridu Genesis."),

  // ---------------- GILGAMESH ----------------
  cs('cs-gilgamesh-version-history-text', 'text-gilgamesh', 'Standard Babylonian Version and Earlier Gilgamesh Traditions',
    "The form usually called the Epic of Gilgamesh is the Standard Babylonian Akkadian recension, conventionally placed in the late second millennium BCE. It did not arise in isolation. Earlier Sumerian poems about Gilgamesh and earlier Akkadian forms of the tradition preserve material that was inherited, rearranged, expanded, or reinterpreted in the later epic. The atlas therefore keeps the Standard Babylonian text distinct from those earlier witnesses instead of treating every Gilgamesh composition as one unchanged work.",
    ['claim-gilgamesh-standard-babylonian-textual-history']),

  cs('cs-gilgamesh-tablet-xi-frame-text', 'text-gilgamesh', 'Tablet XI Within Gilgamesh’s Quest for Immortality',
    "Tablet XI contains the great flood narrative, but in the Standard Babylonian epic that narrative is embedded inside Gilgamesh's personal confrontation with mortality. After Enkidu's death, Gilgamesh seeks Utnapishtim because he wants to know how a human obtained life like a god. Utnapishtim answers by recounting the flood and the exceptional divine decision that made him and his wife immortal. The flood account therefore functions simultaneously as an inherited Mesopotamian deluge tradition and as a literary answer to Gilgamesh's unsuccessful search for an escape from ordinary human death.",
    [
      'claim-gilgamesh-flood-quest-frame',
      'claim-gilgamesh-flood-draws-on-atrahasis',
    ]),
  cs('cs-gilgamesh-dating', 'text-gilgamesh', 'Approximate Date',
    "The Standard Babylonian version of the Epic of Gilgamesh is generally dated to roughly the late second millennium BCE, incorporating older Sumerian Gilgamesh material and earlier Akkadian recensions rather than being composed from nothing at that late date."),
  cs('cs-gilgamesh-discovery', 'text-gilgamesh', 'Where It Was Found',
    "The best-preserved tablets of the Standard Babylonian version were recovered from the library assembled at Nineveh under King Ashurbanipal, discovered during 19th-century excavations of the site.",
    ['claim-assyria-ashurbanipal-library']),
  cs('cs-gilgamesh-preservation', 'text-gilgamesh', 'State of Preservation',
    "Tablet XI, containing the flood episode, is comparatively well preserved among the twelve tablets of the Standard Babylonian version, though the epic as a whole survives through multiple overlapping manuscripts and fragments of varying completeness rather than one single intact copy."),
  cs('cs-gilgamesh-structure', 'text-gilgamesh', 'Structure',
    "The Standard Babylonian series is conventionally transmitted in twelve tablets, but its literary shape needs qualification. Tablets I–XI form the principal continuous narrative, moving from Gilgamesh and Enkidu through Enkidu's death, Gilgamesh's search for escape from mortality, and his encounter with Utnapishtim before returning attention to Uruk. Tablet XII is supplementary rather than a straightforward continuation of that ending and is related to an older Sumerian Gilgamesh-and-the-Netherworld tradition.",
    ['claim-gilgamesh-standard-babylonian-textual-history']),
  cs('cs-gilgamesh-episodes', 'text-gilgamesh', 'Important Episodes',
    "Key episodes include Gilgamesh and Enkidu's friendship and adventures, the Cedar Forest expedition, Ishtar's rejected marriage proposal and the Bull of Heaven episode in Tablet VI, Enkidu's death and Gilgamesh's resulting grief, Gilgamesh's journey to find Utnapishtim, and the flood narrative Utnapishtim recounts within Tablet XI — technically a story embedded within the larger epic rather than the epic's primary throughline.",
    ['claim-gilgamesh-tablet-vi-ishtar-anu']),
  cs('cs-gilgamesh-flood-content', 'text-gilgamesh', 'What the Text Actually Says (Flood Episode)',
    "Within Tablet XI, Ea warns Utnapishtim via a reed wall; a large cube-shaped boat with specific dimensions and multiple decks is built; Utnapishtim, his family, craftsmen, and animals survive; the storm lasts six days and seven nights per the text's own statement; a dove, then a swallow, then a raven are released to test for dry land; the boat lands on Mount Nimush; a sacrifice is offered; Enlil is initially angered a human survived but is rebuked by Ea and relents; and Utnapishtim and his wife are granted immortality."),
  cs('cs-gilgamesh-relationship-other-texts', 'text-gilgamesh', 'Relationship to Other Texts',
    "Assyriologists widely hold that the Tablet XI flood episode draws on the Atrahasis tradition, based on close parallels including the near-identical reed-wall warning scene — a scholarly position about likely literary dependence, not a claim stated within either ancient text.",
    ['claim-flood-gilgamesh-atrahasis-close-parallel']),
  cs('cs-gilgamesh-what-it-says', 'text-gilgamesh', 'What the Text Actually Says (Broader Themes)',
    "Beyond the flood episode, the epic as a whole explicitly grapples with human mortality, following Gilgamesh's unsuccessful quest for literal immortality after witnessing Enkidu's death — a theme scholars frequently identify as the epic's central concern, with the flood narrative embedded within it partly as an illustration of immortality's rarity and divine origin."),
  cs('cs-gilgamesh-scholarly', 'text-gilgamesh', 'Scholarly Questions',
    "Open scholarly questions include the precise relationship between the various earlier Sumerian Gilgamesh poems and the later unified Standard Babylonian epic, and how much the Nineveh library version reflects deliberate late editorial unification of previously more separate material."),
  cs('cs-gilgamesh-why-matters', 'text-gilgamesh', 'Why It Matters',
    "The Epic of Gilgamesh matters as one of the most complete and thematically rich surviving works of Mesopotamian literature, and its Tablet XI flood episode in particular is the single most detailed surviving Mesopotamian flood account, making it a central reference point for the flood tradition covered elsewhere in this atlas."),

  // ---------------- ERIDU GENESIS ----------------
  cs('cs-eridu-genesis-preservation', 'text-eridu-genesis', 'State of Preservation',
    "The principal surviving manuscript is the badly damaged Old Babylonian Sumerian tablet CBS 10673 joined to CBS 10867, excavated at Nippur and now held by the Penn Museum. The surviving piece represents only the lower third of what was originally a six-column tablet of roughly 260 lines, so large portions of the composition are lost.",
    ['claim-eridu-genesis-fragmentary']),

  cs('cs-eridu-genesis-manuscript', 'text-eridu-genesis', 'Manuscript and Findspot',
    "The principal manuscript comes from Nippur in southern Mesopotamia. Penn Museum catalog number CBS 10673 joins CBS 10867. Its physical condition is crucial for interpreting the composition: many apparent narrative gaps result from broken or missing portions of the tablet rather than demonstrable omissions in the ancient story.",
    ['claim-eridu-genesis-fragmentary']),

  cs('cs-eridu-genesis-date', 'text-eridu-genesis', 'Approximate Date',
    "The surviving Nippur manuscript is Old Babylonian and is dated by the Penn Museum to about 1650 BCE. That is a date for the surviving copy, not necessarily the first composition of the story. The tradition represented by the tablet may be older, but the surviving evidence does not allow a precise date for its original composition.",
    ['claim-eridu-genesis-fragmentary']),

  cs('cs-eridu-genesis-creation', 'text-eridu-genesis', 'Creation of Humanity',
    "Despite its fragmentary condition, the surviving beginning preserves a creation setting. An, Enlil, Enki, and Ninhursag are described as having fashioned the black-headed people, a conventional Sumerian expression for humanity. The text also describes animals multiplying across the land.",
    ['claim-eridu-genesis-creation']),

  cs('cs-eridu-genesis-cities', 'text-eridu-genesis', 'Kingship and the First Cities',
    "The composition links civilization with kingship descending from heaven. It names five early cities in sequence: Eridu, Bad-tibira, Larak, Sippar, and Shuruppak. Eridu is placed first and is assigned to Nudimmud, a name of Enki. The passage therefore connects divine order, kingship, cities, irrigation, and organized human society before the flood.",
    ['claim-eridu-genesis-cities']),

  cs('cs-eridu-genesis-ziusudra', 'text-eridu-genesis', 'Ziusudra',
    "The flood survivor is Ziusudra, identified in the surviving text as both a king and a gudug priest. He is characterized as humble, reverent, and attentive to divine communication. Ziusudra occupies the role later filled by Atrahasis in the Akkadian Atrahasis tradition and by Utnapishtim in the Epic of Gilgamesh, although the precise literary relationship among these traditions must be distinguished from simple similarity.",
    ['claim-eridu-genesis-warning']),

  cs('cs-eridu-genesis-warning', 'text-eridu-genesis', 'The Divine Decision and Warning',
    "The surviving passage says that An, Enlil, Enki, and Ninhursag bound the gods by oath. Ziusudra then hears a message beside a wall. The message announces that a flood will sweep over the land and that a decision has been made to destroy the seed of humanity. The verdict of the divine assembly is described as irrevocable. Because the tablet breaks shortly afterward, much of what followed the warning is lost.",
    ['claim-eridu-genesis-warning']),

  cs('cs-eridu-genesis-boat', 'text-eridu-genesis', 'What Survives of the Boat Episode',
    "The tablet does not preserve a continuous account of the vessel's construction. Roughly thirty-eight lines are missing between the warning and the point where the narrative resumes during the storm. When the readable text returns, Ziusudra is already aboard what the composition calls a huge boat. Its construction instructions, dimensions, loading procedure, and much of the preparation for the flood are therefore unknown from this manuscript.",
    ['claim-eridu-genesis-fragmentary']),

  cs('cs-eridu-genesis-flood', 'text-eridu-genesis', 'What the Text Actually Says: The Flood',
    "The readable flood passage describes windstorms and gales rising together and the flood sweeping over the land. Waves and storms rock the huge boat for seven days and seven nights. The duration is therefore explicitly preserved in the Eridu Genesis and should not be treated as one of the tablet's missing details.",
    ['claim-eridu-genesis-seven-days']),

  cs('cs-eridu-genesis-utu', 'text-eridu-genesis', 'Utu and the Return of Light',
    "After seven days and seven nights, Utu, the Sumerian sun god, appears and illuminates heaven and earth. Ziusudra opens the huge boat so that Utu's rays can enter. Ziusudra then prostrates himself before Utu, marking the return of divine light after the destructive storm.",
    ['claim-eridu-genesis-seven-days']),

  cs('cs-eridu-genesis-sacrifice', 'text-eridu-genesis', 'Sacrifice After the Flood',
    "The surviving text explicitly says that Ziusudra sacrifices oxen and offers numerous sheep after emerging from the flood. This sacrificial response belongs to the preserved Sumerian narrative itself rather than being reconstructed solely from later Mesopotamian flood traditions.",
    ['claim-eridu-genesis-aftermath']),

  cs('cs-eridu-genesis-dilmun', 'text-eridu-genesis', 'Ziusudra, Immortality, and Dilmun',
    "In the surviving aftermath, animals disembark onto the earth and Ziusudra prostrates himself before An and Enlil. The gods treat him favorably and grant him life like a god and eternal life. Because he preserved animals and the seed of humanity, Ziusudra is settled in Dilmun, described in the text as an overseas land where the sun rises.",
    ['claim-eridu-genesis-aftermath']),

  cs('cs-eridu-genesis-missing', 'text-eridu-genesis', 'What Is Missing From the Tablet',
    "The composition must be read with its physical damage constantly in view. Large gaps interrupt the creation section, the transition to kingship and cities, the events immediately preceding the flood, the period between Ziusudra's warning and the storm, and parts of the aftermath. The precise motive for sending the flood is not preserved in the readable text. Detailed boat-building instructions are also lost. By contrast, the divine decision to destroy humanity, the seven-day-and-seven-night duration, Ziusudra's sacrifice, and his final fate are genuinely preserved.",
    ['claim-eridu-genesis-fragmentary', 'claim-eridu-genesis-warning', 'claim-eridu-genesis-seven-days', 'claim-eridu-genesis-aftermath']),

  cs('cs-eridu-genesis-relationship', 'text-eridu-genesis', 'Relationship to Atrahasis and Gilgamesh',
    "The Eridu Genesis belongs to the wider Mesopotamian flood tradition alongside the Akkadian Atrahasis narrative and the flood account embedded in Tablet XI of the Epic of Gilgamesh. All preserve a divinely announced catastrophic flood and an exceptional human survivor. The survivor's name and many narrative details differ, and the damaged state of the Sumerian text makes it difficult to demonstrate a simple direct line of textual dependence from this manuscript to the later Akkadian compositions.", ['claim-eridu-genesis-flood-tradition-relationship']),

  cs('cs-eridu-genesis-scholarly', 'text-eridu-genesis', 'Scholarly Questions',
    "Important questions remain open because so much of the tablet is missing. Scholars continue to examine how the Sumerian composition relates to other flood traditions, how much older its underlying tradition may be than the surviving Old Babylonian copy, and how its creation, city-founding, kingship, and flood episodes originally fit together as a complete literary work."),

  cs('cs-eridu-genesis-editions', 'text-eridu-genesis', 'Source / Edition Information',
    "The title Eridu Genesis is a modern scholarly label prominently associated with Thorkild Jacobsen's 1981 study, The Eridu Genesis. The composition is also presented by the University of Oxford's Electronic Text Corpus of Sumerian Literature as The Flood story, catalogued as ETCSL 1.7.4. The principal archaeological witness is Penn Museum tablet CBS 10673 joined to CBS 10867."),

  cs('cs-eridu-genesis-why-matters', 'text-eridu-genesis', 'Why It Matters',
    "The Eridu Genesis is important because it preserves an early Sumerian form of a complex tradition linking humanity's creation, the establishment of cities and kingship, divine judgment through a catastrophic flood, survival through Ziusudra, sacrifice, and the granting of extraordinary life afterward. Its fragmentary condition limits what can be reconstructed, but what actually survives is substantially richer than a simple reference to an early flood story."),

  // ---------------- PLACES ----------------
  cs('cs-place-eridu-context', 'place-eridu', 'Historical Importance',
    "Eridu was one of the most ancient and symbolically important cities in Sumerian tradition. The Sumerian King List places Eridu first in the sequence of cities to receive kingship after it descended from heaven, giving the city a special place in Mesopotamian ideas about the beginnings of ordered human society. Archaeologically, the site at Abu Shahrayn preserves occupation extending across several millennia, confirming that Eridu was not only ancient in literary memory but also a long-lived settlement in southern Mesopotamia.",
    ['claim-enki-eridu-oldest-city-tradition', 'claim-eridu-abu-shahrayn-site', 'claim-eridu-long-occupation']),

  cs('cs-place-eridu-enki', 'place-eridu', 'Enki, the Abzu, and E-abzu',
    "Eridu was the principal cult center of Enki, the Mesopotamian god closely associated with fresh water, wisdom, craftsmanship, and the Abzu. Mesopotamian texts describe Enki as dwelling in the Abzu, the subterranean fresh-water realm associated with his sanctuary at Eridu. Archaeological research identifies the principal sacred precinct as the E-abzu complex, reinforcing the close connection between the city, its temple institutions, and the theology of Enki.",
    ['claim-enki-abzu', 'claim-eridu-eabzu-precinct']),

  cs('cs-place-eridu-sacred-precinct', 'place-eridu', 'Sacred Precinct and E-unir',
    "The sacred landscape of Eridu developed over a long period. The E-abzu monumental complex formed the principal cultic focus of the city, and the later E-unir ziggurat became one of the dominant architectural features of the sanctuary area. Successive rebuilding phases demonstrate that the sacred precinct remained important for many centuries, even as the surrounding settlement changed. The archaeological sequence therefore preserves evidence for a long tradition of rebuilding and maintaining Enki's sanctuary at the site.",
    ['claim-eridu-eabzu-precinct', 'claim-eridu-temple-sequence', 'claim-eridu-long-occupation']),

  cs('cs-place-eridu-ubaid', 'place-eridu', 'Ubaid Period and Early Settlement',
    "Eridu is especially important for the archaeology of the Ubaid period. Excavations beneath later sacred buildings revealed a sequence of eighteen architectural levels whose pottery and building remains became fundamental for establishing the archaeological periodization of the Ubaid era. These levels show repeated construction and rebuilding over a very long span and provide some of the clearest evidence for the development of early settled communities in southern Mesopotamia before the rise of the great cities of the Uruk period.",
    ['claim-eridu-temple-sequence', 'claim-eridu-long-occupation']),

  cs('cs-place-eridu-kingship', 'place-eridu', 'Kingship and the First City Tradition',
    "Sumerian literary tradition gives Eridu a special place at the beginning of political history. The Sumerian King List states that kingship first descended from heaven to Eridu before passing to later cities. The Eridu Genesis similarly places Eridu first among a sequence of early cities established before the flood. These texts preserve a religious and literary conception of Eridu as a foundational city, but that symbolic priority should be distinguished from a modern archaeological claim that Eridu was literally the first city ever built.",
    ['claim-enki-eridu-oldest-city-tradition', 'claim-eridu-genesis-cities']),

  cs('cs-place-eridu-long-history', 'place-eridu', 'Long Occupation and Changing City',
    "Archaeological evidence shows that Eridu remained occupied across a long span extending from the sixth millennium BCE through later prehistoric and Bronze Age periods. The site's history therefore reaches far beyond the particular moment represented by the Sumerian literary traditions that describe it as the first city of kingship. Its long sequence of occupation illustrates how sacred centers could preserve religious importance even as settlement patterns, architecture, and political conditions changed across thousands of years.",
    ['claim-eridu-long-occupation', 'claim-eridu-abu-shahrayn-site']),

  cs('cs-place-eridu-archaeology', 'place-eridu', 'Archaeology and Rediscovery',
    "Ancient Eridu is identified with Abu Shahrayn in southern Iraq. The site became a major focus of archaeological research in the twentieth century, when excavations exposed the long temple sequence and the monumental sacred precinct. More recent Iraqi-Italian-French fieldwork has returned to the site with modern archaeological methods, reexamining the E-abzu complex, the ziggurat, settlement history, and the surrounding landscape. These investigations have made Eridu central to modern discussions of early Mesopotamian religion, settlement development, and the Ubaid period.",
    ['claim-eridu-modern-excavations', 'claim-eridu-abu-shahrayn-site', 'claim-eridu-eabzu-precinct', 'claim-eridu-temple-sequence']),
  cs('cs-place-ur-context', 'place-ur', 'Historical Importance',
    "Ur was occupied for several millennia and became one of southern Mesopotamia's major urban centers by the third millennium BCE. Its location near the Euphrates and access to waterways leading toward the Persian Gulf helped support trade and urban growth. Ur was a principal cult center of the moon god Nanna/Suen, later known in Akkadian as Sin. In the late third millennium BCE, Ur-Nammu founded the Third Dynasty of Ur, and the city became the capital of a state that ruled much of Sumer and Akkad. Ur-Nammu and his successors transformed the sacred precinct, including construction of the great ziggurat that still dominates the archaeological site.",
    ['claim-ur-long-history', 'claim-ur-long-distance-trade', 'claim-nanna-ur-cult-center', 'claim-ur-third-dynasty-capital', 'claim-ur-ziggurat-ur-nammu']),

  cs('cs-place-ur-ziggurat', 'place-ur', 'Sacred Precinct and Great Ziggurat',
    "The monumental ziggurat at Ur formed part of the sacred precinct devoted to Nanna. Ur-Nammu began the great building program in the late third millennium BCE, and later rulers continued work on the complex. The sanctuary associated with Nanna was known as Ekišnugal. The ziggurat's massive mud-brick core and fired-brick facing made it the dominant architectural feature of the city and a visible expression of royal patronage, divine worship, and the political importance of Ur.",
    ['claim-ur-ziggurat-ur-nammu', 'claim-nanna-ekishnugal-ur']),
  cs('cs-place-ur-religious-life', 'place-ur', 'Nanna, Ningal, and Religious Life',
    "Religious life at Ur centered especially on the moon god Nanna/Suen and his consort Ningal. Nanna's principal sanctuary was Ekišnugal, while Ningal was honored as queen of Ekišnugal and a divine lady of Ur. From the Akkadian period into the Old Babylonian period, daughters of reigning kings could be appointed as high priestesses of Nanna at Ur. The high priestess was associated with the Giparu within the sacred precinct. Temple life also depended on regular offerings and a specialized body of priests, singers, purification personnel, cooks, brewers, and other workers who maintained the cult. The worship of Nanna and Ningal therefore shaped not only Ur's religious identity but also important parts of its royal, economic, and institutional life.",
    ['claim-nanna-ur-cult-center', 'claim-nanna-ekishnugal-ur', 'claim-nanna-ningal-consort', 'claim-nanna-high-priestess-ur', 'claim-ningal-queen-ekishnugal-ur', 'claim-ningal-giparu-ur', 'claim-ur-temple-institutional-life']),
  cs('cs-place-ur-third-dynasty', 'place-ur', 'Third Dynasty of Ur',
    "In the late third millennium BCE, Ur became the capital of the Third Dynasty of Ur, often called the Ur III period. Ur-Nammu founded the dynasty and established a territorial state that brought much of Sumer and Akkad under the authority of Ur. His son Shulgi greatly strengthened the kingdom, expanded royal administration, sponsored major building projects, and ruled for nearly half a century. He was followed by Amar-Suen, Shu-Sin, and Ibbi-Sin. The Ur III state relied on an extensive administrative system documented by enormous numbers of cuneiform tablets recording labor, livestock, land, taxation, offerings, and the movement of goods. Its rulers presented themselves not merely as kings of Ur but as rulers of Sumer and Akkad, and several adopted divine status during their reigns. The dynasty ended around 2004 BCE, after which political leadership in southern Mesopotamia shifted to other centers.",
    ['claim-ur-third-dynasty-capital']),
  cs('cs-place-ur-royal-cemetery', 'place-ur', 'Royal Cemetery of Ur',
    "The Royal Cemetery of Ur preserves some of the most spectacular evidence for elite society in Early Dynastic Sumer, especially during the mid-third millennium BCE. Excavations uncovered a large cemetery containing well over a thousand burials, of which Leonard Woolley classified sixteen as royal because of their distinctive architecture, extraordinary wealth, and the presence of accompanying retainers. Among the best known is tomb PG 800, belonging to Puabi, whose cylinder seal identifies her by name and with a title conventionally translated as queen. Her burial contained elaborate gold jewelry, lapis lazuli, carnelian, vessels, musical instruments, and other luxury objects. Other graves in the cemetery produced famous works such as the so-called Standard of Ur and richly decorated lyres. These discoveries provide evidence for social hierarchy, elite ritual, craftsmanship, music, long-distance exchange, and funerary practices in third-millennium Ur.",
    ['claim-ur-royal-cemetery', 'claim-ur-long-distance-trade']),
  cs('cs-place-ur-trade', 'place-ur', 'Trade and the Persian Gulf',
    "Ur's location within southern Mesopotamia connected the city to extensive long-distance exchange networks. Archaeological finds from Ur include lapis lazuli originating in Badakhshan and carnelian that in some cases came from western India, demonstrating the movement of valuable materials over very great distances. Mesopotamian evidence also places southern cities within maritime exchange systems involving Dilmun, Magan, and Meluhha. Ur's material culture therefore reflects participation in networks extending through the Persian Gulf and beyond.",
    ['claim-ur-long-distance-trade']),
  cs('cs-place-ur-city-life', 'place-ur', 'City Life in Ur',
    "Excavations at Ur preserve unusually detailed evidence for everyday urban life, especially in the Old Babylonian period. In area AH, Woolley exposed more than fifty houses connected by narrow streets, still the largest contiguous excavated expanse of Old Babylonian housing. Burials were commonly placed beneath house floors, and the domestic areas preserve evidence for households and economic activity. Textual finds add another dimension: No. 7 Quiet Street produced more than two thousand administrative, lexical, mathematical, and literary tablets, supporting the interpretation that scribal instruction could take place in private houses. Together, these remains show Ur as a lived city of families, merchants, priests, scribes, and other urban residents.",
    ['claim-ur-old-babylonian-neighborhoods', 'claim-ur-scribal-house']),
  cs('cs-place-ur-later-history', 'place-ur', 'Later History and Decline',
    "The fall of the Third Dynasty did not end Ur's occupation. Isin/Larsa and Old Babylonian neighborhoods continued at the site, and later levels preserve evidence for subsequent first-millennium activity. In the sixth century BCE, Nabonidus reconstructed the temple of Sin at Ur and reinstated the high-priestess office. By the later first millennium BCE occupation had declined, and the city was eventually abandoned. The surviving sequence therefore shows a long post-Ur III history rather than an abrupt end with the fall of the dynasty.",
    ['claim-ur-later-history-nabonidus', 'claim-nanna-high-priestess-ur']),
  cs('cs-place-ur-archaeology', 'place-ur', 'Archaeology and Rediscovery',
    "The ruins of ancient Ur are located at Tell al-Muqayyar in southern Iraq. Although the site attracted archaeological attention during the nineteenth and early twentieth centuries, the most extensive early excavations were carried out from 1922 to 1934 by a joint expedition of the British Museum and the University of Pennsylvania Museum under C. Leonard Woolley. Over twelve seasons, Woolley and his team investigated the great ziggurat and sacred precinct, the Royal Cemetery, city walls, temples, residential neighborhoods, workshops, and deeply buried occupation levels reaching back thousands of years. The discoveries transformed modern understanding of Sumerian civilization and produced some of the best-known objects from ancient Mesopotamia, including the treasures of Puabi, decorated lyres, and the so-called Standard of Ur. Woolley's excavation records remain an important archaeological resource, while later researchers have continued to reexamine the site, its collections, and the enormous body of evidence recovered there using modern archaeological and scientific methods.",
    ['claim-ur-woolley-excavations', 'claim-ur-ziggurat-ur-nammu', 'claim-ur-royal-cemetery', 'claim-ur-old-babylonian-neighborhoods']),
  cs('cs-place-uruk-context', 'place-uruk', 'Historical Importance',
    "Uruk was one of the most important cities of ancient Mesopotamia and played a major role in the development of early urban civilization. By the late fourth and early third millennia BCE, it had grown into one of the oldest and largest urban centers in the region. Its monumental architecture, religious institutions, administrative practices, and association with some of the earliest surviving writing make Uruk especially important for understanding the emergence of complex city life in southern Mesopotamia. In later Mesopotamian literary tradition, Uruk was also remembered as the city ruled by Gilgamesh.",
    ['claim-uruk-early-urban-center', 'claim-uruk-monumental-sanctuaries', 'claim-uruk-early-writing-administration', 'claim-uruk-gilgamesh-literary-tradition']),

  cs('cs-place-uruk-urban-growth', 'place-uruk', 'Early Urban Growth',
    "Uruk became a major urban center during the fourth millennium BCE, a period so closely associated with the city that archaeologists use the term Uruk period for an important phase of Mesopotamian cultural development. Archaeological research shows the growth of monumental architecture, specialized institutions, administration, and dense settlement on a scale that distinguished Uruk from many earlier communities. Its development provides some of the clearest evidence for the transformation of southern Mesopotamian settlements into large and institutionally complex cities.",
    ['claim-uruk-early-urban-center', 'claim-uruk-monumental-sanctuaries', 'claim-uruk-early-writing-administration']),

  cs('cs-place-uruk-sanctuaries', 'place-uruk', 'Eanna and the Sacred Precincts',
    "Religion occupied a major place in the urban landscape of Uruk. The city contained monumental sanctuary districts, especially the Eanna complex associated with Inanna/Ishtar and the sanctuary traditionally associated with An/Anu. Inanna became one of the deities most strongly identified with Uruk, while An was also worshipped in the city across long periods of Mesopotamian history. These sacred precincts were not simply isolated temples: they formed monumental institutional centers within the city and were repeatedly rebuilt as Uruk developed.",
    ['claim-uruk-monumental-sanctuaries', 'claim-an-uruk-eanna-cult', 'claim-inanna-ur-cult-attested']),

  cs('cs-place-uruk-writing', 'place-uruk', 'Writing and Administration',
    "Uruk preserves some of the earliest evidence for the development of cuneiform writing. Late fourth-millennium administrative tablets demonstrate the growing need to record commodities, labor, institutions, and economic transactions within an increasingly complex urban society. These early records were not yet literary texts in the later sense; many were administrative documents produced within institutional systems. Uruk therefore occupies a central place in the history of writing because the earliest cuneiform tradition developed alongside the administrative demands of one of Mesopotamia's first great cities.",
    ['claim-uruk-early-writing-administration']),

  cs('cs-place-uruk-urban-landscape', 'place-uruk', 'City Wall and Canal Network',
    "The physical organization of Uruk reflected its enormous scale. Archaeological research identifies an extensive city wall, traditionally associated in later literature with Gilgamesh, together with a network of waterways and canals that formed important parts of the urban landscape. By the beginning of the third millennium BCE, the wall extended for roughly nine kilometers around the settlement. Canals provided movement through and around the city and connected Uruk with the broader riverine landscape of southern Mesopotamia.",
    ['claim-uruk-wall-canals']),

  cs('cs-place-uruk-gilgamesh', 'place-uruk', 'Gilgamesh and Literary Memory',
    "Uruk became inseparable from the literary memory of Gilgamesh. Mesopotamian compositions present Gilgamesh as king of Uruk, and the city remains the political and symbolic center of the traditions surrounding him. The later Epic of Gilgamesh repeatedly identifies him with Uruk and its monumental landscape. This literary tradition is historically important evidence for how Mesopotamians remembered the city, but it should not be treated as proof that every event narrated in the Gilgamesh stories occurred as literal history.",
    ['claim-uruk-gilgamesh-literary-tradition']),

  cs('cs-place-uruk-archaeology', 'place-uruk', 'Archaeology and Rediscovery',
    "The archaeological site of ancient Uruk is located at modern Warka in southern Iraq. German archaeological work began there in 1912 and developed into one of the longest-running research programs devoted to an ancient Mesopotamian city. Excavations and architectural studies have investigated the Eanna and Anu sanctuary districts, monumental buildings, city defenses, residential and administrative areas, tablets, seals, ceramics, and other remains spanning thousands of years. Continued study of Uruk has been fundamental to modern understanding of early urbanism, monumental architecture, administration, and the beginnings of writing in Mesopotamia.",
    ['claim-uruk-modern-archaeology', 'claim-uruk-early-urban-center', 'claim-uruk-monumental-sanctuaries', 'claim-uruk-early-writing-administration', 'claim-uruk-wall-canals']),
  cs('cs-place-kish-context', 'place-kish', 'Historical Importance',
    "Kish was one of the major cities of ancient Mesopotamia and occupied an unusually extensive archaeological landscape composed of many separate mounds. Its importance extended beyond a single political period: Kish remained inhabited for thousands of years and became deeply associated in Mesopotamian tradition with kingship, religious authority, and the warrior god Zababa.",
    ['claim-kish-large-mound-complex', 'claim-kish-long-occupation', 'claim-kish-kingship-after-flood', 'claim-kish-zababa-patron']),

  cs('cs-place-kish-kingship', 'place-kish', 'Kingship and Sumerian Memory',
    "Kish held a special place in Mesopotamian traditions about legitimate rule. In the Sumerian King List, Kish is presented as the first city to receive kingship after the flood. This literary presentation does not establish a literal reconstruction of political events immediately after a historical flood, but it demonstrates the exceptional symbolic prestige attached to Kish within Mesopotamian ideas about royal authority.",
    ['claim-kish-kingship-after-flood']),

  cs('cs-place-kish-zababa', 'place-kish', 'Zababa and Religious Identity',
    "The principal patron deity of Kish was Zababa, a Mesopotamian warrior god whose cult was closely tied to the city's religious identity. Zababa's association with Kish is securely attested in Mesopotamian religious tradition. The atlas currently records this relationship historically while leaving a direct deity-profile link for later, when Zababa receives a dedicated profile of his own.",
    ['claim-kish-zababa-patron']),

  cs('cs-place-kish-landscape', 'place-kish', 'A City of Many Mounds',
    "Unlike an archaeological site represented by one compact mound, ancient Kish extended across a broad and complex landscape. More than forty mounds have been identified across an area of roughly twenty-four square kilometers. This dispersed pattern means that different neighborhoods, sacred areas, monumental structures, and occupational zones were distributed across a much larger urban complex than the modern name Kish might initially suggest.",
    ['claim-kish-large-mound-complex']),

  cs('cs-place-kish-hursagkalama', 'place-kish', 'Hursagkalama and Uhaimir',
    "Two important parts of the Kish archaeological landscape help illustrate the city's scale. In the east, the Ingharra mound complex is associated with ancient Hursagkalama. In the west, the remains at Uhaimir are dominated by a major ziggurat. These separate monumental zones demonstrate that Kish developed through multiple centers rather than around only one single sacred or administrative nucleus.",
    ['claim-kish-hursagkalama-uhaimir', 'claim-kish-large-mound-complex']),

  cs('cs-place-kish-long-history', 'place-kish', 'Long Occupation and Changing City',
    "The archaeological record of Kish spans an exceptionally long period. Remains extend from at least around 3000 BCE into the first millennium CE, showing that the site continued to be inhabited and reused under changing political, linguistic, and religious conditions. Kish therefore cannot be understood solely as an Early Dynastic Sumerian city; its archaeological history continued long after the period most closely associated with the Sumerian King List.",
    ['claim-kish-long-occupation']),

  cs('cs-place-kish-archaeology', 'place-kish', 'Archaeology and Rediscovery',
    "Modern archaeological investigation of Kish has been fundamental to reconstructing its enormous scale and long history. Major excavations between 1923 and 1933 were conducted by a joint Field Museum and University of Oxford expedition, which investigated numerous mounds across the site. Because ancient Kish consisted of many distinct archaeological areas, the excavation record provides evidence for monumental buildings, settlement zones, long occupational sequences, and the changing organization of the city across millennia.",
    ['claim-kish-modern-excavations', 'claim-kish-large-mound-complex', 'claim-kish-long-occupation', 'claim-kish-hursagkalama-uhaimir']),

  cs('cs-place-lagash-context', 'place-lagash', 'Historical Importance',
    "Lagash was one of the major Sumerian urban centers of southern Mesopotamia during the third millennium BCE. Ancient Lagash is identified with Tell al-Hiba in modern Iraq and formed part of a wider city-state that included other important settlements. Archaeological research shows that Lagash was a large and complex city whose religious institutions, neighborhoods, waterways, and productive areas developed across a broad urban landscape.",
    ['claim-lagash-tell-al-hiba', 'claim-lagash-third-millennium-city', 'claim-lagash-temples', 'claim-lagash-multicentric-urbanism', 'claim-lagash-craft-production']),

  cs('cs-place-lagash-citystate', 'place-lagash', 'Lagash and the City-State',
    "The name Lagash can refer both to the ancient city at Tell al-Hiba and, in historical discussion, to the wider Sumerian state that included several settlements. This distinction matters because political and religious activity associated with the Lagash state did not all occur within the city of Lagash itself. Understanding the city therefore requires placing Tell al-Hiba within a larger regional network rather than treating every monument, inscription, or ruler connected with the Lagash state as belonging physically to this one urban site.",
    ['claim-lagash-third-millennium-city', 'claim-lagash-girsu-distinction']),

  cs('cs-place-lagash-temples', 'place-lagash', 'Temples and Sacred Landscape',
    "Excavations at Lagash have revealed major sacred areas within the city. These include the Ibgal sanctuary associated with Inanna and the Bagara temple associated with Ningirsu. Their presence demonstrates that religious institutions formed an important part of the urban landscape. At the same time, Ningirsu's especially famous cult center at nearby Girsu should not be confused with the city of Lagash itself, even though both belonged to the wider Lagash state.",
    ['claim-lagash-temples', 'claim-lagash-girsu-distinction']),

  cs('cs-place-lagash-urbanism', 'place-lagash', 'Urban Form and Waterways',
    "Recent archaeological and geophysical research has changed how Lagash is understood as a city. Rather than forming one uniformly dense mass of buildings, the settlement appears to have contained several densely occupied sectors separated by waterways, open areas, and less intensively built zones. This multi-centered pattern suggests that canals and water channels were not peripheral features but fundamental elements in the organization of the city and movement through its landscape.",
    ['claim-lagash-multicentric-urbanism']),

  cs('cs-place-lagash-economy', 'place-lagash', 'Craft Production and Economy',
    "Archaeological excavations have identified areas of specialized production and economic activity within Lagash. Workshops and occupational zones show that different parts of the city supported manufacturing and other forms of organized labor. This evidence helps reconstruct Lagash as a functioning urban economy rather than only as a collection of temples and political monuments.",
    ['claim-lagash-craft-production', 'claim-lagash-multicentric-urbanism']),

  cs('cs-place-lagash-girsu', 'place-lagash', 'Lagash and Girsu',
    "Lagash and Girsu were separate ancient cities within the same broader political state. Lagash is identified with Tell al-Hiba, while Girsu is identified with modern Tello. This distinction is particularly important because many famous monuments and inscriptions associated with the rulers of the Lagash state were excavated at Girsu. The atlas therefore treats discoveries from Girsu as evidence for the wider Lagash state when appropriate, but does not automatically relocate them to the city of Lagash.",
    ['claim-lagash-girsu-distinction']),

  cs('cs-place-lagash-archaeology', 'place-lagash', 'Archaeology and Rediscovery',
    "Archaeological work at Tell al-Hiba has revealed the scale and complexity of ancient Lagash through excavation, surface survey, remote sensing, and geophysical research. Earlier excavations investigated major temple areas, while newer projects have examined neighborhoods, production zones, waterways, and the overall structure of the settlement. These investigations have made Lagash especially important for understanding how large Sumerian cities were organized and how urban communities interacted with the watery landscape of southern Mesopotamia.",
    ['claim-lagash-tell-al-hiba', 'claim-lagash-multicentric-urbanism', 'claim-lagash-craft-production', 'claim-lagash-temples']),

  cs('cs-place-nippur-context', 'place-nippur', 'Historical Importance',
    "Nippur was one of the most important religious centers of ancient Mesopotamia. Although it was not normally the capital of a territorial empire, its status as the principal cult center of Enlil gave the city exceptional authority within Sumerian religious and political ideology. Kings from different dynasties sponsored temples and building projects at Nippur, and recognition of Enlil's sanctuary could contribute to the religious legitimacy of rulers whose political capitals lay elsewhere.",
    ['claim-enlil-nippur-neutral-ground', 'claim-nippur-ekur-enlil']),

  cs('cs-place-nippur-ekur', 'place-nippur', 'Enlil and the Ekur',
    "The religious heart of Nippur was the Ekur, the great sanctuary of Enlil. Enlil's position as one of the leading gods of the Mesopotamian pantheon made his temple a focus of royal patronage across many periods. Archaeological excavation has revealed major portions of the temple complex and associated monumental architecture, confirming that the sacred precinct was one of the defining features of the ancient city.",
    ['claim-nippur-ekur-enlil']),


  cs('cs-place-nippur-ninurta', 'place-nippur', 'Ninurta and Ešumeša',
    "Ninurta also held an important place in Nippur's sacred landscape. In Ninurta's Return to Nibru (Angim), the god returns toward Nippur after his mountain victories, is met by Nuska, and enters Enlil's temple with trophies and plunder. Later in the composition, Nibru is called Ninurta's beloved city and Ešumeša his beloved temple, and the poem describes his procession into that sanctuary. These passages provide direct literary evidence for Ninurta's close association with Nippur and Ešumeša.",
    ['claim-ninurta-angim-return-nippur', 'claim-ninurta-angim-eshumesha']),
  cs('cs-place-nippur-kingship', 'place-nippur', 'Religious Authority and Kingship',
    "Nippur's importance was unusual because its influence often exceeded its direct political power. Modern scholarship describes the city as functioning in some periods as a kind of religious center whose recognition mattered to rulers from competing Mesopotamian states. Royal investment in Enlil's sanctuary therefore carried political as well as religious significance. This should not be understood as a single constitutional rule applying identically in every period, but as a recurring relationship between Nippur, Enlil, and claims to legitimate kingship.",
    ['claim-enlil-nippur-neutral-ground']),

  cs('cs-place-nippur-scribal', 'place-nippur', 'Scribal Culture and Tablets',
    "Nippur was also an exceptionally important center for the preservation of written culture. Excavations uncovered substantial tablet collections and a scribal quarter that provide evidence for education, administration, lexical study, mathematics, religion, and literature. Tablets recovered from Nippur preserve many Sumerian compositions that are central to modern knowledge of Mesopotamian literary tradition. The city's archaeological record therefore contributes not only to the study of temples and kingship but also to the history of scribal learning.",
    ['claim-nippur-scribal-quarter']),

  cs('cs-place-nippur-urban-landscape', 'place-nippur', 'Urban Landscape',
    "Archaeological work at Nippur has revealed a city composed of sacred precincts, residential districts, administrative areas, defensive works, and waterways. The temple district dominated the religious landscape, while excavated houses and other urban remains show that Nippur was also a lived-in community of priests, scribes, administrators, craftspeople, and families. Canals and watercourses formed important parts of the city's connection to the wider landscape of southern Mesopotamia.",
    ['claim-nippur-urban-landscape']),

  cs('cs-place-nippur-long-history', 'place-nippur', 'Long Occupation and Changing City',
    "Archaeological soundings at Nippur document occupation across many periods of Mesopotamian history. The city's political circumstances changed repeatedly, but its religious importance allowed it to remain significant under a succession of Sumerian, Akkadian, Babylonian, and later rulers. Rebuilding within the sacred precinct and continued occupation elsewhere in the city demonstrate that Nippur's history cannot be reduced to a single dynasty or historical phase.",
    ['claim-nippur-long-occupation']),

  cs('cs-place-nippur-archaeology', 'place-nippur', 'Archaeology and Rediscovery',
    "Nippur became one of the foundational sites of modern Mesopotamian archaeology. Major excavations began in the late nineteenth century with expeditions associated with the University of Pennsylvania, which recovered enormous numbers of cuneiform tablets and architectural remains. Later University of Chicago excavations investigated the Temple of Enlil, the scribal quarter, residential areas, city defenses, and deep occupational soundings. These discoveries have made Nippur one of the most important archaeological sites for reconstructing Mesopotamian religion, literature, education, and urban history.",
    ['claim-nippur-modern-excavations', 'claim-nippur-ekur-enlil', 'claim-nippur-scribal-quarter', 'claim-nippur-urban-landscape', 'claim-nippur-long-occupation']),
  cs('cs-place-babylon-context', 'place-babylon', 'Historical Importance',
    "Babylon was one of the most influential cities of ancient Mesopotamia. Its political importance rose dramatically under Hammurabi in the Old Babylonian period and again when it became the capital of the Neo-Babylonian Empire. The city also became one of Mesopotamia's most important religious centers through its close association with Marduk. Although the monumental remains most visible archaeologically belong especially to the Neo-Babylonian period, Babylon's urban history extended across many centuries before and after that imperial peak.",
    ['claim-babylon-hammurabi-code', 'claim-babylon-neo-babylonian-capital', 'claim-babylon-long-urban-history', 'claim-babylon-marduk-elevation', 'claim-marduk-patron-babylon']),

  cs('cs-place-babylon-marduk', 'place-babylon', 'Marduk, Esagila, and Etemenanki',
    "The religious heart of Babylon centered on Marduk. His principal temple, Esagila, formed part of a monumental sacred district that also included Etemenanki, the great ziggurat traditionally associated with the city. As Babylon's political importance increased, Marduk's theological status also rose, eventually making the city and its patron god inseparable within later Babylonian religious ideology.",
    ['claim-babylon-esagila-etemenanki', 'claim-babylon-marduk-elevation', 'claim-marduk-patron-babylon', 'claim-enuma-elish-babylon-esagila', 'claim-marduk-nebuchadnezzar-esagil']),

  cs('cs-place-babylon-ishtar-gate', 'place-babylon', 'Ishtar Gate and Processional Way',
    "Among the most famous elements of Neo-Babylonian Babylon were the Ishtar Gate and the Processional Way. These monumental ceremonial structures were decorated with glazed bricks bearing animal imagery and formed part of the carefully planned route through the royal and sacred city. Their architecture demonstrates how movement, ritual, royal display, and religious symbolism could be combined within Babylon's urban landscape.",
    ['claim-babylon-ishtar-processional-way']),

  cs('cs-place-babylon-nebuchadnezzar', 'place-babylon', 'Nebuchadnezzar II and the Monumental City',
    "Much of the monumental Babylon known from archaeological excavation reflects extensive construction and rebuilding under Nebuchadnezzar II. During his reign, royal palaces, fortifications, ceremonial routes, gates, and major religious buildings were restored, expanded, or rebuilt. This building program helped create the monumental urban form that later generations associated most strongly with Babylon.",
    ['claim-babylon-nebuchadnezzar-rebuilding', 'claim-babylon-neo-babylonian-capital', 'claim-babylon-ishtar-processional-way', 'claim-marduk-nebuchadnezzar-esagil', 'claim-marduk-nebuchadnezzar-procession']),

  cs('cs-place-babylon-urban-landscape', 'place-babylon', 'Walls, Palaces, and Urban Landscape',
    "Neo-Babylonian Babylon was organized around a monumental combination of defensive walls, gates, palaces, temples, streets, canals, and ceremonial spaces. The Euphrates ran through the urban area and formed part of the city's physical and economic geography. Babylon was therefore not simply a temple center or royal capital: it was a large inhabited city whose religious, administrative, residential, defensive, and commercial spaces were integrated into one complex urban landscape.",
    ['claim-babylon-neo-babylonian-capital', 'claim-babylon-ishtar-processional-way', 'claim-babylon-nebuchadnezzar-rebuilding', 'claim-marduk-nebuchadnezzar-procession']),

  cs('cs-place-babylon-long-history', 'place-babylon', 'Long Urban History',
    "Babylon's history did not begin with Nebuchadnezzar II. The city was already politically important under Hammurabi in the early second millennium BCE and had roots extending still further back. Its fortunes changed repeatedly under different dynasties and empires, but Babylon continued to retain extraordinary cultural and religious prestige. The spectacular Neo-Babylonian city therefore represents one major phase within a much longer history rather than the beginning of Babylon itself.",
    ['claim-babylon-hammurabi-code', 'claim-babylon-long-urban-history']),

  cs('cs-place-babylon-archaeology', 'place-babylon', 'Archaeology and Rediscovery',
    "Systematic excavation at Babylon beginning in 1899 transformed modern understanding of the ancient city. German excavators exposed major portions of the Ishtar Gate, Processional Way, palace complexes, temples, streets, and other monumental remains. Architectural fragments and glazed bricks from these excavations became central to museum reconstructions in Berlin, while continuing archaeological and heritage work in Iraq has focused on preserving Babylon itself as an ancient urban landscape.",
    ['claim-babylon-modern-excavations', 'claim-babylon-ishtar-processional-way', 'claim-babylon-esagila-etemenanki']),
  cs('cs-place-nineveh-context', 'place-nineveh', 'Historical Importance',
    "Nineveh was one of the great cities of northern Mesopotamia and reached its political height as the principal capital of the Neo-Assyrian Empire under Sennacherib and his successors. Its enormous fortifications, royal palaces, monumental gates, temples, and scholarly collections made it one of the most important urban centers of the ancient Near East. Although its imperial prominence belongs especially to the seventh century BCE, the site preserves a much longer history of occupation.",
    ['claim-nineveh-sennacherib-capital', 'claim-nineveh-long-occupation', 'claim-nineveh-walls-gates', 'claim-nineveh-southwest-palace', 'claim-nineveh-ashurbanipal-library-tablets', 'claim-assyria-ashurbanipal-library']),


  cs('cs-place-nineveh-ishtar', 'place-nineveh', 'Ishtar of Nineveh',
    "Nineveh was also a major cult center of Ishtar. Neo-Assyrian evidence distinguishes Ishtar of Nineveh alongside Ishtar of Arbela, showing that the goddess could be represented through prominent local cult forms tied to particular cities. In this atlas, the Nineveh cult is linked to the broader Inanna/Ishtar deity profile while retaining the historically specific designation Ishtar of Nineveh.",
    ['claim-assyria-cult-figures']),
  cs('cs-place-nineveh-sennacherib', 'place-nineveh', 'Sennacherib and the Imperial Capital',
    "Around 700 BCE, Sennacherib transformed Nineveh into the principal capital of the Neo-Assyrian Empire. The city became the center of royal administration and an enormous building program that reshaped its palaces, defenses, streets, water systems, and monumental landscape. Nineveh remained the royal center under later Assyrian kings until the destruction of the city in 612 BCE.",
    ['claim-nineveh-sennacherib-capital', 'claim-nineveh-walls-gates', 'claim-nineveh-southwest-palace', 'claim-nineveh-destruction-612']),

  cs('cs-place-nineveh-walls', 'place-nineveh', 'Walls and Monumental Gates',
    "Nineveh was protected by one of the most imposing defensive systems of the Neo-Assyrian world. Its city wall extended for more than twelve kilometers and was pierced by numerous monumental gates. These gates controlled movement into the capital while also serving as highly visible expressions of royal power and urban planning.",
    ['claim-nineveh-walls-gates']),

  cs('cs-place-nineveh-palace', 'place-nineveh', 'Sennacherib’s Southwest Palace',
    "Sennacherib’s Southwest Palace was one of the major royal complexes at Nineveh. Its rooms and courtyards were lined with carved stone reliefs depicting warfare, royal ceremonies, landscapes, tribute, construction, and other aspects of Assyrian imperial life. These reliefs provide unusually detailed visual evidence for how the Neo-Assyrian court represented kingship, conquest, and the empire it governed.",
    ['claim-nineveh-southwest-palace']),

  cs('cs-place-nineveh-library', 'place-nineveh', 'Ashurbanipal’s Library',
    "Nineveh is especially important for the preservation of Mesopotamian literature because more than thirty thousand cuneiform tablets and fragments were recovered from the ruins of the city. Many belonged to scholarly collections associated with King Ashurbanipal. These tablets preserved literary, religious, lexical, medical, divinatory, historical, and scholarly compositions, including important manuscripts of the Standard Babylonian Epic of Gilgamesh.",
    ['claim-nineveh-ashurbanipal-library-tablets', 'claim-assyria-ashurbanipal-library']),

  cs('cs-place-nineveh-long-history', 'place-nineveh', 'Long Occupation and the Fall of Nineveh',
    "Nineveh existed for thousands of years before becoming an Assyrian imperial capital. Archaeological evidence from the principal mound indicates settlement extending back approximately to the sixth millennium BCE. The city's most famous political phase ended dramatically in 612 BCE when Nineveh was captured and destroyed, bringing its role as the capital of the Neo-Assyrian Empire to an end. Occupation at the site nevertheless continued in later periods.",
    ['claim-nineveh-long-occupation', 'claim-nineveh-destruction-612']),

  cs('cs-place-nineveh-archaeology', 'place-nineveh', 'Archaeology and Rediscovery',
    "Modern excavation of Nineveh revealed royal palaces, monumental gates, fortifications, sculptures, reliefs, and enormous collections of cuneiform tablets. Excavations at Kuyunjik exposed major parts of Sennacherib’s palace and the scholarly collections associated with Ashurbanipal. These discoveries transformed modern understanding of Assyrian history while also preserving texts whose traditions originated much earlier in Sumerian and Babylonian Mesopotamia.",
    ['claim-nineveh-southwest-palace', 'claim-nineveh-walls-gates', 'claim-nineveh-ashurbanipal-library-tablets', 'claim-assyria-ashurbanipal-library']),
  cs('cs-place-borsippa-context', 'place-borsippa', 'Historical Importance',
    "Borsippa was an important Babylonian religious city closely associated with the god Nabu. Ancient textual evidence places Nabu in his sanctuary Ezida at Borsippa and identifies the city as his cult center. The archaeological site is known today as Birs Nimrud, and surviving temple archives provide unusually detailed evidence for the religious and economic life of the city.",
    ['claim-borsippa-ezida-nabu', 'claim-borsippa-birs-nimrud', 'claim-borsippa-priest-archives']),

  cs('cs-place-borsippa-nabu', 'place-borsippa', 'Nabu and the Religious Identity of Borsippa',
    "Borsippa’s religious identity centered on Nabu, the divine scribe associated with wisdom and learned knowledge. A royal inscription of Šamaš-šuma-ukin explicitly describes Nabu as dwelling in Ezida at Borsippa and identifies the city as his cult center. This direct ancient testimony makes the relationship between Nabu, Ezida, and Borsippa one of the best-attested features of the city.",
    ['claim-borsippa-ezida-nabu', 'claim-nabu-shamash-shuma-ukin-scribe-wisdom']),

  cs('cs-place-borsippa-ezida', 'place-borsippa', 'The Ezida Temple',
    "Ezida was the major sanctuary of Nabu at Borsippa. The temple stood at the center of the city’s religious importance and received substantial royal attention during the Babylonian period. Its archives preserve evidence not only for worship but also for the institutional organization required to maintain a major Mesopotamian temple.",
    ['claim-borsippa-ezida-nabu', 'claim-borsippa-ezida-royal-patronage']),

  cs('cs-place-borsippa-temple-life', 'place-borsippa', 'Temple Personnel and Daily Life',
    "The surviving archives connected with Ezida reveal the practical labor behind temple worship. They document specialized personnel including brewers, bakers, butchers, and oxherds who supplied food and resources for the regular cult of Nabu. These records show that a major Mesopotamian sanctuary depended on an extensive workforce and economic organization as well as priests and ritual specialists.",
    ['claim-borsippa-priest-archives', 'claim-borsippa-temple-workforce']),

  cs('cs-place-borsippa-royal-patronage', 'place-borsippa', 'Royal Patronage and Long-Term Continuity',
    "Ezida received substantial royal patronage across different political periods. Sixth-century BCE Babylonian kings supported the sanctuary and treated it as one of the important temples of the Babylonian realm. Centuries later, in 268 BCE, the Seleucid ruler Antiochus I recorded laying the foundations of Ezida at Borsippa. Together, these sources show that royal investment in Nabu’s sanctuary continued beyond the Neo-Babylonian period into Seleucid rule.",
    ['claim-borsippa-ezida-royal-patronage', 'claim-nabu-antiochus-ezida-continuity']),

  cs('cs-place-borsippa-archives', 'place-borsippa', 'The Priestly Archives',
    "More than two hundred cuneiform texts associated with priests and temple personnel at Borsippa provide an important documentary record of the city. The archive spans material from the period of Ashurbanipal through the Neo-Babylonian era and into the early Achaemenid period, allowing temple life at Borsippa to be studied across several generations of political change.",
    ['claim-borsippa-priest-archives', 'claim-borsippa-archive-chronology']),

  cs('cs-place-borsippa-archaeology', 'place-borsippa', 'Birs Nimrud and the Archaeological Site',
    "Ancient Borsippa is identified with Birs Nimrud in central Iraq. The surviving ruins and the extensive textual record associated with the city connect the physical archaeological site with the documented cult of Nabu and the Ezida temple. Together, archaeological identification and the priestly archives make Borsippa especially valuable for reconstructing the institutional life of a major Babylonian religious center.",
    ['claim-borsippa-birs-nimrud', 'claim-borsippa-priest-archives']),

  cs('cs-place-kutha-context', 'place-kutha', 'Historical Importance',
    "Kutha was an important religious center in central Mesopotamia and was especially associated with the god Nergal. The ancient city is identified with Tell Ibrahim. Although Kutha never achieved the political prominence of cities such as Babylon or Nineveh, its importance in Mesopotamian religion rested on its long-standing role as Nergal’s principal cult center.",
    ['claim-kutha-tell-ibrahim', 'claim-kutha-nergal-cult-center']),

  cs('cs-place-kutha-nergal', 'place-kutha', 'Nergal and the Religious Identity of Kutha',
    "Kutha was closely identified with Nergal, a major Mesopotamian deity associated with the underworld and destructive forces. Scholarly tradition identifies Kutha as his principal cult center. The close association between the city and its patron deity made Kutha an important location within the wider religious geography of Mesopotamia even when the city itself was not a major imperial capital.",
    ['claim-kutha-nergal-cult-center', 'claim-nergal-meslamtaea-history', 'claim-nergal-underworld-role', 'claim-nergal-war-plague-roles']),


  cs('cs-place-kutha-ereshkigal', 'place-kutha', 'Ereškigal at Kutha',
    "Ereškigal also had an attested cult presence at Kutha. Scholarly summaries of inscriptions report a temple dedicated to her there, although evidence for an extensive independent cult of Ereškigal is comparatively limited. Her association with Kutha is therefore supported by cult evidence, while Nergal remains the deity most strongly identified with the city and its principal sanctuary Emeslam.",
    ['claim-ereshkigal-cult-temples']),
  cs('cs-place-kutha-emeslam', 'place-kutha', 'The Emeslam Temple',
    "The principal sanctuary of Nergal at Kutha was the temple known as Emeslam. A Neo-Babylonian royal inscription of Nebuchadnezzar II directly records work on Emeslam together with construction activity at Cutha. This ancient inscription provides especially valuable evidence because it connects the named temple, the god Nergal, royal building activity, and the city itself within a single historical source.",
    ['claim-kutha-emeslam-temple', 'claim-kutha-nebuchadnezzar-building']),

  cs('cs-place-kutha-nebuchadnezzar', 'place-kutha', 'Nebuchadnezzar II and Royal Building',
    "Kutha continued to receive royal attention during the Neo-Babylonian period. Nebuchadnezzar II records construction activity at the city and work on the sanctuary of Nergal. The inscription demonstrates that Kutha’s religious institutions remained significant enough to attract direct royal patronage during the sixth century BCE.",
    ['claim-kutha-nebuchadnezzar-building']),

  cs('cs-place-kutha-religious-landscape', 'place-kutha', 'Kutha in Mesopotamian Religious Geography',
    "Kutha’s historical importance is best understood through religion rather than imperial politics. As Nergal’s principal cult center, the city occupied a distinctive place within a broader network of Mesopotamian sacred cities. Nergal’s associations with the underworld, warfare, plague, and destructive power gave the cult at Kutha a religious character different from centers dominated by deities such as Marduk, Nanna, Enlil, or Enki.",
    ['claim-kutha-nergal-cult-center', 'claim-nergal-underworld-role', 'claim-nergal-war-plague-roles']),

  cs('cs-place-kutha-tell-ibrahim', 'place-kutha', 'Tell Ibrahim and the Archaeological Site',
    "Ancient Kutha is identified with Tell Ibrahim in central Iraq. Archaeological material recovered from the site includes cuneiform tablets now held in museum collections. The identification of Tell Ibrahim with Kutha allows textual references to the ancient city and its cult of Nergal to be connected with a physical archaeological location.",
    ['claim-kutha-tell-ibrahim', 'claim-kutha-rassam-excavation']),

  cs('cs-place-kutha-archaeology', 'place-kutha', 'Archaeology and Rediscovery',
    "Nineteenth-century exploration at Tell Ibrahim included work by Hormuzd Rassam, whose excavations recovered cuneiform material later acquired by the British Museum. These finds helped establish the archaeological importance of the site and provide physical evidence for the ancient settlement identified as Kutha. Compared with some better-excavated Mesopotamian capitals, the surviving archaeological picture of Kutha remains more limited, making its textual evidence especially important.",
    ['claim-kutha-rassam-excavation', 'claim-kutha-tell-ibrahim']),

  cs('cs-place-ashur-context', 'place-ashur', 'Historical Importance',
    "Ashur was one of the foundational cities of Assyrian civilization. Located at Qal’at Sherqat on the Tigris in northern Iraq, it developed into Assyria’s earliest major political capital and remained an exceptionally important religious center even after later Assyrian kings established royal capitals elsewhere. Its long occupation, monumental temples, palaces, fortifications, residences, and royal tombs preserve evidence for both the political origins and enduring sacred identity of Assyria.",
    ['claim-ashur-qalat-sherqat', 'claim-ashur-early-capital', 'claim-ashur-long-occupation', 'claim-ashur-monumental-sacred-city']),

  cs('cs-place-ashur-city-god', 'place-ashur', 'The City and the God Aššur',
    "Ashur possessed an unusual relationship with its principal deity because the city and the god Aššur shared the same name. As Assyria developed politically, the god became increasingly central to royal ideology and state identity. This connection meant that Ashur remained more than an old political capital: it continued to function as a sacred center whose religious importance was closely tied to ideas of Assyrian kingship and legitimate rule.",
    ['claim-ashur-city-deity-identity', 'claim-ashur-state-god']),

  cs('cs-place-ashur-kingship', 'place-ashur', 'Kingship and Royal Authority',
    "Assyrian royal inscriptions demonstrate how closely political authority could be connected with the god Aššur and the city that bore his name. In the inscription of Aššur-dān II, the god is presented as granting royal authority and directing military action, while captured wealth is brought back to the city of Aššur. Such evidence shows how religion, kingship, warfare, and the sacred identity of the city could operate together within Assyrian royal ideology.",
    ['claim-ashur-city-deity-identity', 'claim-ashur-dan-ii-royal-appointment', 'claim-ashur-dan-ii-command-campaign']),

  cs('cs-place-ashur-sacred-landscape', 'place-ashur', 'Temples, Ziggurats, and Sacred Landscape',
    "The archaeological remains of Ashur preserve an extensive sacred landscape. Temples and multiple ziggurats stood alongside other monumental buildings, reflecting the city’s long role as a religious center. These structures were repeatedly maintained and rebuilt as rulers invested in the sacred institutions of the city, allowing Ashur to retain religious prestige even during periods when political administration shifted to newer Assyrian capitals.",
    ['claim-ashur-monumental-sacred-city', 'claim-ashur-early-capital', 'claim-ashur-cultic-inventory']),


  cs('cs-place-ashur-ereshkigal', 'place-ashur', 'Ereškigal at Ashur',
    "Ereškigal also had an attested cult presence at Ashur. Scholarly summaries of inscriptions report a temple dedicated to her at Assur, although her independently documented cult is otherwise relatively sparse. This evidence supports her association with the city without placing her on the same civic or ideological footing as Aššur, Ashur's principal god and the central deity of the Assyrian state.",
    ['claim-ereshkigal-cult-temples']),
  cs('cs-place-ashur-urban-landscape', 'place-ashur', 'Palaces, Fortifications, and Urban Life',
    "Ashur was not only a temple center. Archaeological investigation has revealed palaces, fortifications, houses, residential areas, burial structures, and other remains that document a functioning urban community. These different kinds of architecture show a city where royal administration, religious institutions, defense, domestic life, and burial practices occupied the same broader urban landscape.",
    ['claim-ashur-monumental-sacred-city']),

  cs('cs-place-ashur-long-history', 'place-ashur', 'Long Occupation and Changing Role',
    "Ashur’s history extended across many centuries. Settlement at the site reaches back into the third millennium BCE, long before the height of the Neo-Assyrian Empire. The city’s political role changed as Assyrian rulers established important capitals elsewhere, but Ashur continued to retain exceptional religious and symbolic importance. Its archaeological sequence therefore records both the early formation of Assyria and the continuing use of the city through later historical periods.",
    ['claim-ashur-long-occupation', 'claim-ashur-early-capital']),

  cs('cs-place-ashur-archaeology', 'place-ashur', 'Archaeology and Rediscovery',
    "Large-scale scientific excavation at Ashur began in 1903 under Walter Andrae. Archaeologists investigated temples, ziggurats, palaces, fortifications, residential areas, graves, royal burials, inscriptions, and extensive collections of objects. These excavations established much of the modern archaeological understanding of the city and made Ashur one of the most important sites for reconstructing the origins, religion, political institutions, and urban development of ancient Assyria.",
    ['claim-ashur-modern-excavations', 'claim-ashur-qalat-sherqat', 'claim-ashur-monumental-sacred-city']),

  // ---------------- THE LAMENT FOR URIM ----------------
  cs('cs-lament-urim-overview', 'text-lament-for-urim', 'What Is This Text?',
    'The Lament for Urim is a Sumerian city lament centered on the devastation of Urim (Ur), the suffering of its people, and the grief of the city’s divine household. The poem gives Ningal an especially powerful voice, but its scope is wider than one goddess: it presents abandoned shrines, an irreversible divine decree, destructive storm imagery, ruined civic and cultic life, and finally a movement toward return and restoration.',
    ['claim-lament-urim-divine-abandonment', 'claim-lament-urim-storm-destruction', 'claim-ningal-lament-destruction-exile', 'claim-lament-urim-no-repeat-restoration']),

  cs('cs-lament-urim-date-manuscripts', 'text-lament-for-urim', 'Date, Provenance, and Manuscript Tradition',
    'The surviving composition belongs to the Old Babylonian Sumerian literary tradition. ORACC’s ePSD2 catalogue records Old Babylonian manuscript evidence from Nippur and classifies the work as a literary composition with a historical background. That distinction matters: the poem reflects literary remembrance and theological interpretation of Ur’s destruction, not a contemporary eyewitness chronicle written at the moment of the Ur III collapse.',
    ['claim-lament-urim-old-babylonian-nippur']),

  cs('cs-lament-urim-structure', 'text-lament-for-urim', 'Poetic Structure — Eleven Kirugu',
    'The ETCSL edition is organized into eleven numbered kirugu sections, separated by recurring short response or refrain markers. This formal architecture gives the composition a sequence of lamenting movements: divine abandonment, Ningal’s speeches and petitions, the destructive storm, the ruined city, exile, cultic collapse, calls for return, and a final prayer for restoration.',
    ['claim-lament-urim-eleven-kirugu']),

  cs('cs-lament-urim-abandonment', 'text-lament-for-urim', 'The Gods Abandon Their Cities and Shrines',
    'The poem opens not with a battle but with absence. Deities across Sumer are said to have left their cities, houses, cow-pens, and sheepfolds. Nanna abandons Urim and Ekišnugal; Ningal abandons her sacred residence. By beginning with divine withdrawal, the lament presents civic destruction as a crisis in the relationship between gods, temples, and cities before it narrates the physical devastation itself.',
    ['claim-lament-urim-divine-abandonment']),

  cs('cs-lament-urim-nanna', 'text-lament-for-urim', 'Urim and Nanna Join the Lament',
    'Urim is repeatedly addressed as a destroyed city whose rites and powers have been altered, while Nanna is portrayed as a lord who weeps over the loss of his city and house. The poem therefore binds the fate of the urban community to the fate of its divine patrons: the city mourns, its god mourns, and the disruption of sacred institutions becomes part of the catastrophe.',
    ['claim-lament-urim-divine-abandonment', 'claim-lament-urim-cult-economic-collapse']),

  cs('cs-lament-urim-ningal-appeal', 'text-lament-for-urim', 'Ningal Pleads for Urim',
    'Ningal’s first-person lament reaches a theological crisis when she describes appealing directly to An and Enlil. She begs that Urim not be destroyed and that its people not perish. She repeats the appeal before the divine council when the Anuna are seated to ratify decisions. Her grief is therefore not passive: the poem depicts her attempting to intervene on behalf of her city.',
    ['claim-lament-urim-ningal-appeals']),

  cs('cs-lament-urim-decree', 'text-lament-for-urim', 'The Divine Decree Cannot Be Reversed',
    'Ningal’s petitions fail. The composition explicitly states that An does not change his command and Enlil does not alter what he has spoken. Urim’s destruction is thus framed inside the poem as a decreed divine decision. This is a literary-theological explanation within the lament and should not be confused with a modern historical explanation for the end of Ur III political power.',
    ['claim-lament-urim-divine-decree']),

  cs('cs-lament-urim-storm', 'text-lament-for-urim', 'The Storm and the Destruction of Urim',
    'The poem’s destruction sequence uses overwhelming storm imagery. Enlil calls destructive winds; heat, fire, dust, and a storm compared to a flood sweep across the land. Urim is covered by the storm, its defenses fail, and the city is reduced to ruin mounds. The language makes catastrophe cosmic and environmental as well as military.',
    ['claim-lament-urim-storm-destruction']),

  cs('cs-lament-urim-human-cost', 'text-lament-for-urim', 'The Human Cost',
    'The lament does not leave destruction at the level of damaged buildings. It describes bodies at gates and in streets, deaths by axe, spear, battle-mace, hunger, and fire, children torn from families, and people driven or carried away. These passages make the suffering of ordinary inhabitants central to the poem’s representation of the ruined city.',
    ['claim-lament-urim-human-cost']),

  cs('cs-lament-urim-ningal-exile', 'text-lament-for-urim', 'Ningal — Destroyed City, Exile, and Lost Queenship',
    'Ningal’s later lament fuses divine and civic loss. She cries over her destroyed city and house, says that because Urim no longer exists she is no longer its queen, and describes herself as exiled from both city and dwelling. Her literary voice makes the destruction of Ur inseparable from the collapse of her own queenship and sacred residence.',
    ['claim-ningal-lament-destruction-exile']),

  cs('cs-lament-urim-cult-collapse', 'text-lament-for-urim', 'Fields, Offerings, Priests, and Festivals Fall Silent',
    'The ruined city is portrayed as economically and ritually nonfunctional. Fields no longer yield grain, orchards are overgrown, possessions are plundered, watercourses and roads decay, food offerings stop, priests cease their rites, and festival music is no longer performed. The poem therefore imagines urban destruction as the breakdown of agriculture, exchange, cult service, and communal celebration together.',
    ['claim-lament-urim-cult-economic-collapse']),

  cs('cs-lament-urim-restoration', 'text-lament-for-urim', 'Return, Restoration, and a Storm That Must Not Recur',
    'The closing movements shift the direction of the lament. Mother Ningal is called back to her house and city and is asked to exercise its queenship again. The destructive storm is then cursed so that it will never recur, and the composition ends by imagining Nanna’s restored city as resplendent and enduring. Restoration does not erase the remembered catastrophe; it gives the lament a final horizon beyond destruction.',
    ['claim-ningal-lament-restoration', 'claim-lament-urim-no-repeat-restoration']),

  cs('cs-lament-urim-why-matters', 'text-lament-for-urim', 'Why It Matters — and What It Does Not Prove',
    'The Lament for Urim is a major source for understanding how Sumerian literary tradition transformed the destruction of a city into a theological, civic, emotional, and ritual memory. It preserves vivid images of divine withdrawal, failed intercession, human suffering, cultic collapse, exile, and hoped-for restoration. At the same time, its poetic explanations should not be treated as a literal modern reconstruction of the military and political causes of Ur’s fall; the composition is evidence for how catastrophe was remembered and interpreted in Sumerian literature.',
    ['claim-lament-urim-old-babylonian-nippur', 'claim-lament-urim-divine-decree', 'claim-lament-urim-human-cost', 'claim-lament-urim-no-repeat-restoration']),

  // ---------------- THE DEATH OF UR-NAMMA ----------------
  cs('cs-death-ur-namma-overview', 'text-death-ur-namma', 'What Is This Text?',
    'The Death of Ur-Namma is a Sumerian literary composition about the death of Ur-Namma, founder of the Ur III dynasty, and his passage into the netherworld. It combines public mourning, royal ideology, funerary imagery, offerings to underworld deities, a new role for the dead king below, and Ur-Namma’s own grief over the life and projects he can no longer complete. The poem is therefore not simply a biography of how a historical king died; it is a literary interpretation of royal death and posthumous memory.',
    ['claim-death-ur-namma-opening-death', 'claim-death-ur-namma-arali-burial', 'claim-death-ur-namma-underworld-role', 'claim-death-ur-namma-personal-lament']),

  cs('cs-death-ur-namma-date-manuscripts', 'text-death-ur-namma', 'Date, Manuscripts, and Surviving Versions',
    'The surviving textual tradition is Old Babylonian. ORACC catalogs the work as Old Babylonian royal praise poetry from Nippur, while the ETCSL apparatus lists several Nippur manuscripts together with fragmentary witnesses from Susa. The modern composite presentation therefore reconstructs a composition from more than one surviving tablet or fragment, and the Nippur and Susa material should not be treated as one perfectly uniform manuscript.',
    ['claim-death-ur-namma-manuscripts']),

  cs('cs-death-ur-namma-death-mourning', 'text-death-ur-namma', 'Ur-Namma Dies and Sumer Mourns',
    'The Nippur version begins in catastrophe. Ur-Namma, repeatedly called the trustworthy shepherd, dies in his prime. Divine figures respond with grief, withdrawal, or darkened cosmic imagery; Ninsun mourns her son; and the land itself is portrayed as losing order and abundance. Royal death is therefore presented as a crisis extending from the palace to the gods, people, canals, fields, and herds.',
    ['claim-death-ur-namma-opening-death']),

  cs('cs-death-ur-namma-arali', 'text-death-ur-namma', 'The Journey to Arali and the Netherworld',
    'Ur-Namma is brought to Arali, a name for the realm of the dead, while his soldiers mourn him. The poem describes the road to the netherworld as desolate and says that his donkeys were buried with him. Those details are important evidence for the poem’s literary picture of royal burial and descent, but the composition itself cannot establish the archaeological contents of Ur-Namma’s historical grave.',
    ['claim-death-ur-namma-arali-burial']),

  cs('cs-death-ur-namma-porters-banquet', 'text-death-ur-namma', 'Seven Porters, the Dead, and a Netherworld Banquet',
    'After his arrival, Ur-Namma presents gifts to the seven chief porters of the netherworld. Dead kings and ritual specialists announce his coming, a tumult arises among the inhabitants below, and Ur-Namma holds a large banquet. The poem stresses that the food and water of the netherworld are unpleasant, yet the king knows its rites and performs the required offerings properly.',
    ['claim-death-ur-namma-porters-banquet']),

  cs('cs-death-ur-namma-offerings', 'text-death-ur-namma', 'The Great Sequence of Underworld Offerings',
    'A long central sequence names recipients of Ur-Namma’s gifts. Nergal receives weapons; Gilgamesh receives martial equipment; Ereshkigal receives elite garments and vessels; Dumuzid receives pastoral and lordly objects; and Namtar, Hushbisag, Ningishzida, Dimpimekug, Ninazimua, and others receive gifts suited to their literary roles. This catalogue gives the composition unusual value for reconstructing one Sumerian literary map of the netherworld and its elite inhabitants.',
    ['claim-death-ur-namma-offering-sequence', 'claim-nergal-ur-namma-offerings', 'claim-ereshkigal-ur-namma-offerings']),

  cs('cs-death-ur-namma-ereshkigal-nergal', 'text-death-ur-namma', 'Ereshkigal, Nergal, and the Powers Below',
    'The poem does not present the netherworld as an undifferentiated realm. Nergal is explicitly called the Enlil of the netherworld and receives weapons in his palace. Ereshkigal receives offerings in her own palace and is called the mother of Ninazu. These descriptions preserve particular theological relationships within this composition and should not automatically be generalized into a single fixed underworld hierarchy for every Mesopotamian period.',
    ['claim-nergal-ur-namma-offerings', 'claim-ereshkigal-ur-namma-offerings', 'claim-ereshkigal-ninazu-mother']),

  cs('cs-death-ur-namma-judgment', 'text-death-ur-namma', 'Ur-Namma Receives a Place Among the Dead',
    'Once the offerings have been presented, Ur-Namma is seated on a great dais and given a dwelling place in the netherworld. The composition then associates him with Gilgamesh in issuing judgments and rendering decisions concerning the dead, while the surrounding action occurs under Ereshkigal’s authority. The dead king has therefore lost earthly kingship but is not depicted as becoming socially insignificant below.',
    ['claim-death-ur-namma-underworld-role', 'claim-ereshkigal-ur-namma-authority']),

  cs('cs-death-ur-namma-personal-lament', 'text-death-ur-namma', 'The Dead King Laments His Unfinished Life',
    'The poem then changes emotional direction. After days in the netherworld, Ur-Namma is overwhelmed by lamentation for Sumer. He grieves that he cannot finish the wall of Urim or enjoy his new palace and asks what reward his intense service to the gods has brought him. The underworld honors he has received do not erase his sense that death came too soon.',
    ['claim-death-ur-namma-personal-lament']),

  cs('cs-death-ur-namma-family', 'text-death-ur-namma', 'Wife, Children, Household, and Irreversible Loss',
    'Ur-Namma’s lament becomes strikingly personal. He mourns that he can no longer embrace his wife, raise his sons on his knees, watch younger family members grow, or return to brick-built Urim. He imagines his wife as a widow and his family and people as caught in tears and lamentation. Royal death is therefore represented not only as dynastic and cosmic loss but also as separation from household and family.',
    ['claim-death-ur-namma-personal-lament']),

  cs('cs-death-ur-namma-inanna', 'text-death-ur-namma', 'Inanna Was Absent — Then She Protests',
    'The composition explains that Inanna was not present when Ur-Namma’s fate was decided because Enlil had sent her as a messenger to foreign lands. On returning, she enters E-kur, reacts fiercely to what has happened, questions the divine situation, and laments the loss of her shepherd. Her episode reinforces the poem’s theme that even powerful divine patrons do not simply reverse the king’s death.',
    ['claim-death-ur-namma-inanna-lament']),

  cs('cs-death-ur-namma-fate-memory', 'text-death-ur-namma', 'A New Fate: Royal Memory After Death',
    'Near the close of the Nippur version, the poem turns toward Ur-Namma’s future reputation. His name is to be invoked, and his canals, agricultural works, fields, settlements, and other achievements become part of the memory attached to him. The composition thus answers irreversible death not with bodily return but with an honored place below and an enduring royal name among the living.',
    ['claim-death-ur-namma-memorial-fate']),

  cs('cs-death-ur-namma-why-matters', 'text-death-ur-namma', 'Why It Matters — and What It Does Not Prove',
    'The Death of Ur-Namma is one of the richest Sumerian literary witnesses to ideas about royal death, funerary offerings, the social organization of the netherworld, grief, divine patronage, and posthumous kingship. It also preserves an unusually human portrait of a ruler mourning unfinished work and separation from family. At the same time, the poem was transmitted in an Old Babylonian literary setting and survives through multiple manuscripts; its details about burial, divine decisions, and the underworld are literary evidence and should not be treated automatically as a literal historical report of Ur-Namma’s death or tomb.',
    ['claim-death-ur-namma-manuscripts', 'claim-death-ur-namma-arali-burial', 'claim-death-ur-namma-underworld-role', 'claim-death-ur-namma-personal-lament']),

  // ---------------- NERGAL AND ERESHKIGAL — EA 357 ----------------
  cs('cs-ea357-overview', 'text-nergal-ereshkigal-ea357', 'What Is This Text?',
    'Nergal and Ereshkigal, as represented here, is specifically the short Middle Babylonian Amarna recension preserved on tablet EA 357. The composition explains a literary transition in underworld rule: a conflict beginning with failed respect for Ereshkigal’s messenger culminates in Nergal entering the underworld, overpowering Ereshkigal, and accepting marriage and kingship there. This profile keeps the Amarna witness distinct from the much longer later recensions.',
    ['claim-ea357-tablet-metadata', 'claim-ea357-nergal-insult', 'claim-ea357-ending-marriage-kingship']),

  cs('cs-ea357-date-findspot', 'text-nergal-ereshkigal-ea357', 'Date, Findspot, and the Physical Tablet',
    'CDLI identifies EA 357 as a fragmented clay literary tablet from Akhetaten, modern el-Amarna in Egypt, written in Akkadian and dated to the Middle Babylonian period. It is now held in the Vorderasiatisches Museum in Berlin. The unusual Egyptian findspot is important: this is Mesopotamian literary material preserved inside the cosmopolitan scribal world of Amarna rather than a tablet excavated in Babylonia itself.',
    ['claim-ea357-tablet-metadata']),

  cs('cs-ea357-language-context', 'text-nergal-ereshkigal-ea357', 'Akkadian and the Amarna Scribal Context',
    'The tablet is an Akkadian literary composition. Scholarship has long interpreted EA 357 as part of the learned scribal material circulating at Amarna, perhaps imported from Syria and used in scribal training alongside other Mesopotamian compositions. That context helps explain why a myth about the Mesopotamian underworld appears in an Egyptian royal-period archive and underscores the international movement of Akkadian literary culture.',
    ['claim-ea357-scribal-context']),

  cs('cs-ea357-banquet', 'text-nergal-ereshkigal-ea357', 'The Banquet of the Gods',
    'The story begins when the gods hold a banquet. Ereshkigal cannot simply join them: the text explicitly frames a boundary between the divine world above and her underworld realm. The gods therefore send a message asking her to dispatch a representative who can receive the portion assigned to her. The opening establishes both Ereshkigal’s recognized rank and her separation from the upper divine assembly.',
    ['claim-ea357-banquet-separation']),

  cs('cs-ea357-namtar', 'text-nergal-ereshkigal-ea357', 'Namtar — Ereshkigal’s Messenger',
    'Ereshkigal sends Namtar upward as her sukkallu, her minister or vizier. He is not functioning as an independent guest: he represents the queen of the underworld and therefore carries her status into the banquet. That diplomatic role makes the response of the other gods to him a matter of respect toward Ereshkigal herself.',
    ['claim-ea357-namtar-embassy', 'claim-ereshkigal-namtar-minister']),

  cs('cs-ea357-insult', 'text-nergal-ereshkigal-ea357', 'Nergal Refuses the Expected Respect',
    'The central offense is a failure of protocol. Namtar is instructed to identify the god who did not rise before him, and the offending deity is Nergal. The myth therefore does not begin with Nergal trying to seize the underworld; it begins with a ceremonial insult to Ereshkigal’s representative. The later struggle grows out of that breach of divine hierarchy and etiquette.',
    ['claim-ea357-nergal-insult']),

  cs('cs-ea357-demand', 'text-nergal-ereshkigal-ea357', 'Ereshkigal Demands Nergal',
    'Ereshkigal’s reaction is severe. She orders that the god who failed to honor her messenger be identified and sent down to her, and the surviving wording states that she intends to kill him. The Amarna recension thus sends Nergal toward the underworld as the target of Ereshkigal’s judgment rather than as an invited consort or voluntary claimant to her throne.',
    ['claim-ea357-ereshkigal-death-demand']),

  cs('cs-ea357-disease-agents', 'text-nergal-ereshkigal-ea357', 'Ea Gives Nergal Fourteen Supernatural Agents',
    'Before the confrontation, Ea equips Nergal with “seven and seven” accompanying beings. The list includes figures whose names are associated with diseases, seizures, dizziness, affliction, and other dangerous forces. Within the narrative they function as Nergal’s supernatural force for entering and controlling the approaches to Ereshkigal’s domain.',
    ['claim-ea357-fourteen-disease-agents']),

  cs('cs-ea357-fourteen-gates', 'text-nergal-ereshkigal-ea357', 'Fourteen Gates — A Distinctive Feature of EA 357',
    'The Amarna tablet distributes these agents through a numbered sequence reaching the fourteenth gate. This is one of the clearest places where the Amarna recension must not be silently blended with later versions: the Neo-Assyrian and later traditions use a seven-gate system. The difference is evidence of real recensional variation in how the underworld’s architecture was imagined.',
    ['claim-ea357-fourteen-gates']),

  cs('cs-ea357-assault', 'text-nergal-ereshkigal-ea357', 'Nergal Breaks into Ereshkigal’s Palace',
    'After securing the gates, Nergal drives into the palace. The climax is violent: he reaches Ereshkigal, seizes her by the hair, pulls her from the throne, and prepares to kill her. This is not a romantic courtship scene in the Amarna recension. The marriage settlement that follows is presented against the immediate threat of lethal violence.',
    ['claim-ea357-palace-assault']),

  cs('cs-ea357-marriage-kingship', 'text-nergal-ereshkigal-ea357', 'Marriage and Kingship in the Netherworld',
    'Ereshkigal responds by offering Nergal a new relationship and political position: he is to become her husband, and kingship in the broad netherworld is to be placed in his hand. Nergal accepts, embraces and kisses her, and wipes away her tears. The ending supplies direct ancient-text evidence for Nergal and Ereshkigal as a married underworld pair within this recension.',
    ['claim-ea357-ending-marriage-kingship', 'claim-nergal-ea357-underworld-kingship']),

  cs('cs-ea357-later-recensions', 'text-nergal-ereshkigal-ea357', 'Do Not Merge the Amarna and Later Recensions',
    'The myth survives in more than one textual form. EA 357 is the short Middle Babylonian Amarna witness. A much longer Neo-Assyrian recension was recovered at Sultantepe, and later material is known from Uruk. These versions overlap in major characters and themes but differ in narrative development and details such as the number of gates. The Atlas therefore treats EA 357 as a specific witness rather than presenting every episode from every recension as though it occurred on this tablet.',
    ['claim-ea357-later-recensions', 'claim-nergal-ereshkigal-later-tradition']),

  cs('cs-ea357-why-matters', 'text-nergal-ereshkigal-ea357', 'Why It Matters — and What It Does Not Prove',
    'EA 357 matters for several reasons at once. It is a Middle Babylonian Akkadian literary tablet found in Egypt, evidence for the international circulation of Mesopotamian learned culture; it preserves a distinctive fourteen-gate form of the underworld; and it directly narrates Nergal’s acquisition of marriage and kingship alongside Ereshkigal. But it does not prove that this divine relationship or underworld hierarchy existed unchanged in every earlier Sumerian or later Mesopotamian tradition. The tablet is one historically situated recension with its own literary theology.',
    ['claim-ea357-tablet-metadata', 'claim-ea357-scribal-context', 'claim-ea357-fourteen-gates', 'claim-ea357-ending-marriage-kingship', 'claim-nergal-ereshkigal-later-tradition']),

  // ---------------- DUMUZID AND ENKIMDU ----------------
  cs('cs-dumuzid-enkimdu-overview', 'text-dumuzi-enkimdu', 'What Is This Text?',
    'Dumuzid and Enkimdu is a Sumerian courtship and dispute composition centered on Inanna, the shepherd Dumuzid, and the farmer Enkimdu. It begins with Inanna resisting a marriage to the shepherd, develops into a comparison between pastoral and agricultural wealth, and ends not with the destruction of a rival but with friendship, gifts, and praise of Inanna. The composition therefore belongs to the broader Dumuzi-Inanna literary world while preserving its own distinctive argument and ending.',
    ['claim-dumuzi-enkimdu-courtship', 'claim-dumuzid-enkimdu-dispute-balbale']),

  cs('cs-dumuzid-enkimdu-date-manuscripts', 'text-dumuzi-enkimdu', 'Date, Provenance, and Surviving Tablets',
    'The surviving evidence places this composition in the Old Babylonian scribal world. CDLI identifies a Nippur clay tablet, CBS 8320, as a Sumerian literary witness from about 1900–1600 BCE, while the ETCSL bibliography lists four cuneiform sources used in the modern reconstruction. The text known today is therefore not a single complete tablet but a composition rebuilt from multiple ancient witnesses.',
    ['claim-dumuzid-enkimdu-manuscripts']),

  cs('cs-dumuzid-enkimdu-composite', 'text-dumuzi-enkimdu', 'A Composite Text with Gaps and Variants',
    'The modern edition openly preserves the limits of the evidence. Lines are broken or missing, and some witnesses add or substitute wording that others do not contain. Those differences matter: the Atlas treats the translation as a scholarly composite of ancient manuscripts rather than pretending that one perfectly preserved master copy survives.',
    ['claim-dumuzid-enkimdu-composite-variation']),

  cs('cs-dumuzid-enkimdu-opening', 'text-dumuzi-enkimdu', 'Inanna Rejects the Shepherd',
    'The preserved opening quickly establishes the central tension. Inanna says that she will not become the wife of a shepherd. This is important because the poem does not begin from an assumed marriage to Dumuzid; it dramatizes resistance and persuasion. The courtship must be argued inside this composition.',
    ['claim-dumuzid-enkimdu-inanna-rejects-shepherd']),

  cs('cs-dumuzid-enkimdu-utu', 'text-dumuzi-enkimdu', 'Utu Argues for Dumuzid',
    'Inanna’s brother Utu answers her resistance by urging her to accept the shepherd. His case is economic and sensory: the shepherd’s butter is good, his milk is good, and the work of his hands is praised. Dumuzid is presented through the productive abundance of the sheepfold rather than through the death and underworld traditions that dominate some other Dumuzi texts.',
    ['claim-dumuzi-enkimdu-courtship']),

  cs('cs-dumuzid-enkimdu-farmer-choice', 'text-dumuzi-enkimdu', 'Inanna Prefers the Farmer',
    'Inanna is not immediately convinced. She rejects the shepherd’s wool and turns instead toward the farmer, the producer of flax and grain. The contrast is therefore not simply one man against another: the poem places two systems of subsistence and prestige beside one another — livestock and dairy on one side, cultivated fields and plant products on the other.',
    ['claim-dumuzid-enkimdu-inanna-prefers-farmer']),

  cs('cs-dumuzid-enkimdu-boast', 'text-dumuzi-enkimdu', 'Dumuzid’s Long Counter-Boast',
    'Dumuzid responds by asking what makes the farmer superior to him. He then matches the farmer’s goods item by item: garments are answered with sheep, beer with different forms of milk, bread and beans with curds and cheeses. The rhetoric turns courtship into a contest of productive capacity, with Dumuzid claiming that pastoral wealth can equal or surpass agricultural wealth.',
    ['claim-dumuzid-enkimdu-pastoral-counterboast']),

  cs('cs-dumuzid-enkimdu-economies', 'text-dumuzi-enkimdu', 'Shepherd and Farmer — Two Productive Economies',
    'The comparison works because both sides are valuable. Enkimdu represents cultivated land, grain, beans, flax, dykes, canals, and irrigation; Dumuzid represents flocks, wool, butter, milk, curds, and cheese. The poem can stage rivalry precisely because pastoralism and agriculture are both necessary sources of abundance. Its final reconciliation prevents the economic contrast from becoming a simple claim that one mode of life should eliminate the other.',
    ['claim-dumuzid-enkimdu-pastoral-counterboast', 'claim-dumuzid-enkimdu-enkimdu-declines', 'claim-dumuzid-enkimdu-gift-exchange']),

  cs('cs-dumuzid-enkimdu-riverbank', 'text-dumuzi-enkimdu', 'The Riverbank Quarrel',
    'The setting shifts to the riverbank, where Dumuzid is pasturing sheep and Enkimdu approaches. The shepherd provokes the quarrel. This scene brings the earlier verbal comparison into direct contact: shepherd and farmer now meet within the irrigated landscape whose grass, stubble, fields, and canals support both forms of production.',
    ['claim-dumuzid-enkimdu-riverbank-quarrel']),

  cs('cs-dumuzid-enkimdu-no-contest', 'text-dumuzi-enkimdu', 'Enkimdu Refuses the Competition',
    'Enkimdu’s answer changes the direction of the poem. Instead of escalating the contest, he asks why he should compete with the shepherd and offers access to grazing and water. Dumuzid’s sheep can feed along the riverbank and in the fields and drink from the Surungal canal. The farmer’s response turns rivalry toward coexistence.',
    ['claim-dumuzid-enkimdu-enkimdu-declines']),

  cs('cs-dumuzid-enkimdu-friend', 'text-dumuzi-enkimdu', 'Dumuzid Calls Enkimdu His Friend',
    'Dumuzid then states that when he is married, Enkimdu will be counted as his friend. This is a decisive feature of the ending. The courtship competition does not require the farmer’s death, humiliation, or expulsion; the rival is incorporated into a peaceful social relationship.',
    ['claim-dumuzid-enkimdu-friendship']),

  cs('cs-dumuzid-enkimdu-gifts-ending', 'text-dumuzi-enkimdu', 'Gifts, Praise, and the Balbale Ending',
    'Enkimdu offers wheat, beans, barley, and gifts for Inanna. The closing lines then identify the piece as a dispute between shepherd and farmer, praise Inanna, and give the rubric balbale. The ancient ending therefore preserves both the competitive frame and its resolution through exchange and praise.',
    ['claim-dumuzid-enkimdu-gift-exchange', 'claim-dumuzid-enkimdu-dispute-balbale']),

  cs('cs-dumuzid-enkimdu-why-matters', 'text-dumuzi-enkimdu', 'Why It Matters — and What It Does Not Prove',
    'Dumuzid and Enkimdu is important because it preserves a version of the Dumuzi-Inanna relationship organized around courtship, economic comparison, and reconciliation. It shows how Sumerian literature could place pastoral and agricultural abundance into a structured dispute without ending in the annihilation of one side. But this composition should not be treated as a universal biography of Inanna and Dumuzi, nor should its shepherd-versus-farmer pattern be automatically equated with later stories from other cultures. Its claims belong first to this Sumerian literary composition and its Old Babylonian manuscript tradition.',
    ['claim-dumuzid-enkimdu-manuscripts', 'claim-dumuzi-enkimdu-courtship', 'claim-dumuzid-enkimdu-dispute-balbale', 'claim-dumuzid-enkimdu-friendship']),

  // ---------------- DUMUZID AND GESTINANNA ----------------
  cs('cs-dumuzid-geshtinanna-overview', 'text-dumuzi-geshtinanna', 'What Is This Text?',
    'Dumuzid and Geštinanna is a short Old Babylonian Sumerian composition centered on Dumuzi’s substitution for Inanna, his attempt to escape the galla demons, and the loyalty and lament of his sister Geštinanna. It shares important narrative material with Inanna’s Descent to the Netherworld, but the surviving tablet has its own wording, sequence, emphases, and difficult passages. This profile therefore treats it as a specific textual witness rather than silently merging it with every other Dumuzi tradition.',
    ['claim-dumuzi-geshtinanna-direct', 'claim-dumuzi-inanna-marriage', 'claim-dumuzid-geshtinanna-textual-relationship']),

  cs('cs-dumuzid-geshtinanna-date-manuscript', 'text-dumuzi-geshtinanna', 'Date, Provenance, and the Ur Tablet',
    'The surviving manuscript is UET 6, 11, a Sumerian literary clay tablet excavated at Ur and dated to the Old Babylonian period, roughly 1900–1600 BCE. CDLI records it as P346096 and identifies its findspot at Ur, its Sumerian language, and its present association with the British Museum. Unlike compositions reconstructed from many manuscripts, this text rests on a very narrow material base.',
    ['claim-dumuzid-geshtinanna-manuscript']),

  cs('cs-dumuzid-geshtinanna-single-witness', 'text-dumuzi-geshtinanna', 'One Witness, Difficult Wording, and a Debated Relationship',
    'Modern scholarship emphasizes that Dumuzi and Geštinanna survives in a solitary manuscript. That matters because some of its unusual words, spellings, and grammatical constructions cannot be checked against parallel copies. Scholars have also debated whether the composition should be understood as an independent version of Dumuzi’s story, an excerpt, or a reformulation connected with the broader Inanna-descent tradition. The Atlas therefore keeps textual uncertainty visible instead of manufacturing a single seamless version.',
    ['claim-dumuzid-geshtinanna-single-witness', 'claim-dumuzid-geshtinanna-textual-relationship']),

  cs('cs-dumuzid-geshtinanna-inanna-descent', 'text-dumuzi-geshtinanna', 'The Demons Seize Inanna and Order Her Descent',
    'The composition opens with galla demons entering Uruk and seizing Inanna. They direct her toward the underworld and the dwelling of Ereshkigal, while the text strips away or forbids elements of her queenship and adornment. This opening places the drama immediately inside the underworld crisis rather than narrating a long prehistory before Dumuzi enters the story.',
    ['claim-dumuzid-geshtinanna-inanna-seized']),

  cs('cs-dumuzid-geshtinanna-substitute', 'text-dumuzi-geshtinanna', 'Inanna Hands Dumuzid Over as Her Substitute',
    'After Inanna is released, the poem states that she hands Dumuzid over in exchange for herself. The demons restrain him, cover his face, and raise weapons before him. The substitution is therefore not a later inference imposed on the composition: it is part of the ancient narrative logic that propels Dumuzid into flight.',
    ['claim-dumuzid-geshtinanna-substitute-restraints']),

  cs('cs-dumuzid-geshtinanna-utu', 'text-dumuzi-geshtinanna', 'Dumuzid Appeals to Utu',
    'Bound and threatened, Dumuzid raises his hands to Utu. He calls Utu a just judge, identifies Inanna as Utu’s sister and as the woman he married, and explains that he is being sent to the underworld as her substitute. He then asks for a change of hands and appearance so that the pursuing demons cannot seize him.',
    ['claim-dumuzid-geshtinanna-utu-appeal', 'claim-dumuzi-inanna-marriage']),

  cs('cs-dumuzid-geshtinanna-transformation', 'text-dumuzi-geshtinanna', 'Transformation and Escape',
    'Utu accepts Dumuzid’s tears and transforms him. The poem compares the escape to the movement of a snake across the landscape and to a bird fleeing the claws of a falcon. Dumuzid uses this temporary reprieve to reach the dwelling of Geštinanna. The episode makes bodily transformation and rapid flight central to this particular version of the pursuit.',
    ['claim-dumuzid-geshtinanna-transformation-escape']),

  cs('cs-dumuzid-geshtinanna-sister', 'text-dumuzi-geshtinanna', 'Geštinanna — Sister and Protector',
    'Geštinanna is the emotional center of the second half of the composition. Dumuzid seeks refuge with her because she is his sister, and the text immediately presents her response as one of recognition, grief, and protection. The sibling relationship is not merely a modern reconstruction: it is embedded in the action of the ancient poem and is also recognized in modern reference scholarship.',
    ['claim-dumuzi-geshtinanna-sister', 'claim-dumuzi-geshtinanna-direct', 'claim-dumuzid-geshtinanna-transformation-escape']),

  cs('cs-dumuzid-geshtinanna-lament', 'text-dumuzi-geshtinanna', 'Geštinanna’s Lament for Dumuzid',
    'When Geštinanna sees her brother, she performs physical gestures of mourning and begins a lament. Her words emphasize an unfinished life: a youth deprived of the years, spouse, children, friends, and companionship that should have belonged to him. The poem therefore turns the pursuit into a family tragedy rather than treating Dumuzid only as an abstract underworld substitute.',
    ['claim-dumuzid-geshtinanna-lament']),

  cs('cs-dumuzid-geshtinanna-demons', 'text-dumuzi-geshtinanna', 'The Demons’ Logic — Beings Without Family',
    'The galla demons explain their search strategy through a striking contrast with ordinary social life. They describe themselves as beings without parents, siblings, spouse, or children, and reason that a fugitive with real family ties is likely to seek his sister. Their lack of kinship becomes the very logic by which they identify Geštinanna’s dwelling as the next place to search.',
    ['claim-dumuzid-geshtinanna-demon-familylessness']),

  cs('cs-dumuzid-geshtinanna-refusal', 'text-dumuzi-geshtinanna', 'Geštinanna Refuses to Betray Him',
    'The demons arrive before Geštinanna has even finished her lament and demand to know where her brother is. She refuses to answer. The text repeats her silence while describing painful and humiliating abuse, yet she still does not reveal Dumuzid. The demons consequently fail to find him in her house. Her protection is therefore enacted through deliberate resistance, not merely through grief.',
    ['claim-dumuzid-geshtinanna-refusal', 'claim-dumuzi-geshtinanna-direct']),

  cs('cs-dumuzid-geshtinanna-capture', 'text-dumuzi-geshtinanna', 'The Holy Sheepfold, Capture, and the Final Search',
    'Unable to find Dumuzid in Geštinanna’s house, the demons move to the holy sheepfold. There they locate and capture him, and the violence of the pursuit reaches the shepherd’s own domain. The surviving composition closes not with a developed underworld enthronement scene but with Geštinanna wandering through the city in grief and searching for her brother.',
    ['claim-dumuzid-geshtinanna-sheepfold-capture']),

  cs('cs-dumuzid-geshtinanna-why-matters', 'text-dumuzi-geshtinanna', 'Why It Matters — and What It Does Not Prove',
    'Dumuzid and Geštinanna is valuable precisely because it preserves a compact, distinctive version of Dumuzi’s danger, substitution, escape, sibling protection, lament, and capture. Its single Ur manuscript also exposes the limits of reconstruction: difficult readings cannot always be checked against parallel copies, and its relationship to Inanna’s Descent remains a matter of scholarly interpretation. The text should therefore not be used to manufacture one universal Dumuzi biography or to assume that every later Tammuz tradition repeats this exact sequence.',
    ['claim-dumuzid-geshtinanna-manuscript', 'claim-dumuzid-geshtinanna-single-witness', 'claim-dumuzid-geshtinanna-textual-relationship', 'claim-dumuzi-geshtinanna-direct']),

  // ---------------- DUMUZID'S DREAM ----------------
  cs('cs-dumuzid-dream-overview', 'text-dumuzi-dream', 'What Is This Text?',
    "Dumuzid's Dream is a Sumerian literary composition in which the shepherd Dumuzi receives an ominous dream, asks his sister Geštinanna to interpret it, learns that the imagery foretells capture and death, and then lives through a long pursuit that progressively fulfills the dream. The composition combines lament, dream interpretation, family loyalty, betrayal, repeated supernatural escape, and the destruction of the pastoral household.",
    ['claim-dumuzi-dream-direct', 'claim-dumuzi-dream-death']),

  cs('cs-dumuzid-dream-date-manuscripts', 'text-dumuzi-dream', 'Date, Provenance, and Surviving Manuscripts',
    "The surviving textual tradition belongs to the Old Babylonian Sumerian scribal world. CDLI identifies individual clay witnesses from Nippur dated about 1900–1600 BCE and links them to the Dumuzi's Dream composite. The ETCSL bibliography records the composite edition and a substantial manuscript history, including new sources added after the major 1972 edition by Bendt Alster.",
    ['claim-dumuzid-dream-manuscript-nippur']),

  cs('cs-dumuzid-dream-composite', 'text-dumuzi-dream', 'A Composite Text with Manuscript Variants',
    "The modern translation is not the transcription of one perfectly preserved master tablet. It is reconstructed from multiple witnesses, and the edition marks places where individual manuscripts add, omit, or substitute wording. Those variants are especially visible in descriptions of the dream, the demons, the transformations, and the destruction of the sheepfold. The Atlas therefore treats the received text as a scholarly composite grounded in several ancient copies.",
    ['claim-dumuzid-dream-composite-variants']),

  cs('cs-dumuzid-dream-opening-lament', 'text-dumuzi-dream', 'Dumuzi Begins by Mourning His Own Death',
    "Before the dream itself, Dumuzi is already weeping as he walks into the countryside. He calls on the countryside, marshes, river creatures, his mother Durtur, and his sister to mourn him if his death is not otherwise known. The poem therefore establishes foreboding before the formal dream scene: death is emotionally present from the opening lines.",
    ['claim-dumuzid-dream-opening-lament']),

  cs('cs-dumuzid-dream-dream-interpreter', 'text-dumuzi-dream', 'The Dream and Geštinanna the Interpreter',
    "After waking terrified, Dumuzi urgently summons Geštinanna. He praises her as a scribe proficient in tablets, a singer skilled in songs, a perceptive woman, and someone who knows the meanings of dreams. Her role is therefore intellectual as well as familial: the narrative explicitly presents Dumuzi's sister as the person capable of decoding the threatening images.",
    ['claim-dumuzi-dream-direct', 'claim-dumuzi-geshtinanna-sister', 'claim-dumuzid-dream-symbolic-dream']),

  cs('cs-dumuzid-dream-symbols', 'text-dumuzi-dream', 'Reeds, Trees, Churns, Predators, and the Silent Sheepfold',
    "Dumuzi's dream is built from the material world of pastoral life. Reeds rise and separate, trees close in, water extinguishes sacred coals, a churn is uncovered, a drinking cup falls, the shepherd's stick disappears, predators seize smaller animals, goats and rams display mourning gestures, and the dairy equipment lies unused. The final image is explicit: Dumuzi is dead and the sheepfold is haunted.",
    ['claim-dumuzid-dream-symbolic-dream']),

  cs('cs-dumuzid-dream-interpretation', 'text-dumuzi-dream', 'Geštinanna Interprets Capture, Separation, and Death',
    "Geštinanna tells her brother that the dream is not favorable and explains its signs one by one. The rising rushes become attackers in ambush; the separated reeds become brother and sister torn apart; the enclosing trees become captors; the extinguished coals and damaged dairy vessels become the collapse of the sheepfold; the lost staff and predatory birds become the violence of the demons; and the final images become binding, death, and mourning.",
    ['claim-dumuzid-dream-geshtinanna-interpretation']),

  cs('cs-dumuzid-dream-demons-loyalty', 'text-dumuzi-dream', 'The Demons Approach — and the Sister Refuses Betrayal',
    "Once the pursuers are seen approaching, Geštinanna warns Dumuzi to hide. He asks her not to reveal the places where he may conceal himself, and she swears she will not betray him. Later, when the demons reach the sheepfold and offer her water and grain, she refuses their inducements. Even the demons recognize the social rule behind her loyalty: a sister does not hand over her brother.",
    ['claim-dumuzid-dream-demons-loyalty', 'claim-dumuzi-geshtinanna-sister']),

  cs('cs-dumuzid-dream-betrayal-arali', 'text-dumuzi-dream', 'The Friend Betrays Him in the Ditches of Arali',
    "The poem sharply contrasts Geštinanna's loyalty with the behavior of Dumuzi's friend. The friend accepts the demons' gifts and provides information about the fugitive's hiding places. The pursuers eventually seize Dumuzi in the ditches of Arali, bind his hands and arms, and surround him. Dumuzi then states the moral contrast himself: his sister saved his life, while his friend caused his death.",
    ['claim-dumuzid-dream-friend-betrayal-arali']),

  cs('cs-dumuzid-dream-utu-escape', 'text-dumuzi-dream', 'Utu Transforms Dumuzi and the Pursuit Begins Again',
    "Captured and bound, Dumuzi appeals to Utu. He identifies Utu as his brother-in-law and himself as the husband of Inanna, recalling his gifts and ritual relationship with E-ana and Unug. He asks for gazelle hands and feet so that he can evade the demons. Utu accepts his tears and grants the transformation, beginning a repeated cycle of capture, appeal, transformation, and escape.",
    ['claim-dumuzid-dream-utu-transformation']),

  cs('cs-dumuzid-dream-belili-pursuit', 'text-dumuzi-dream', 'Repeated Flight — Ku-bireš and Old Woman Belili',
    "Escape does not end the danger. The demons track Dumuzi to Ku-bireš, capture him again, and he once more appeals to Utu for bodily transformation. His next refuge is the house of Old Woman Belili, where he asks for water and flour and is briefly sheltered. The demons infer that the frightened old woman knows his location, enter the house, and capture him yet again. The repetition gives the poem a relentless pursuit structure.",
    ['claim-dumuzid-dream-repeated-flight-belili']),

  cs('cs-dumuzid-dream-sheepfold-death', 'text-dumuzi-dream', 'The Holy Sheepfold — the Dream Becomes Reality',
    "Dumuzi's final recorded escape leads to the holy sheepfold associated with his sister. Geštinanna's lament spreads across heaven and earth as the demons enter the sheepfold in sequence. They attack the bolt, shepherd's staff, churn, drinking cup, brazier, and other objects already foreshadowed in the dream. The prophecy is fulfilled materially: the dairy vessels lie overturned, Dumuzi is dead, and the sheepfold is haunted. The closing rubric calls the composition a šir-kalkal for the dead Dumuzi.",
    ['claim-dumuzid-dream-final-sheepfold-death', 'claim-dumuzid-dream-rubric']),

  cs('cs-dumuzid-dream-why-matters', 'text-dumuzi-dream', 'Why It Matters — and What It Does Not Prove',
    "Dumuzid's Dream is important because it preserves a sustained Sumerian narrative of ominous dreaming, interpretation, pursuit, family loyalty, social betrayal, divine transformation, and the collapse of a shepherd's household. Its manuscript tradition also shows how the composition circulated and varied in Old Babylonian scribal culture. But the poem should not be collapsed into Inanna's Descent, Dumuzid and Geštinanna, or later Tammuz traditions, and its death narrative does not by itself prove a universal seasonal, vegetation, or dying-and-rising theology.",
    ['claim-dumuzi-dream-death', 'claim-dumuzid-dream-manuscript-nippur', 'claim-dumuzid-dream-composite-variants', 'claim-dumuzid-dream-rubric']),

  // ---------------- INANA AND BILULU ----------------
  cs('cs-inana-bilulu-overview', 'text-inanna-bilulu', 'What Is This Text?',
    'Inana and Bilulu is a Sumerian literary composition centered on lament for Dumuzi, Inana’s response to his violent death, vengeance against the desert figure Bilulu, and the transformation of that vengeance into a ritual order involving water, flour, desert guardians, and renewed lament. The text is preserved imperfectly, so its surviving scenes must be read without pretending that every transition or causal detail is recoverable.',
    ['claim-dumuzi-bilulu-badtibira-lament', 'claim-inana-bilulu-fragmentary-structure']),

  cs('cs-inana-bilulu-date-manuscript', 'text-inanna-bilulu', 'Date, Provenance, and the Nippur Witness',
    'The composition survives in the Old Babylonian Sumerian literary tradition. ETCSL identifies the cuneiform source as Ni 4486 from Nippur, while CDLI lists a single Old Babylonian Nippur witness, P343715, under the composite Inanna and Bilulu text. This narrow manuscript base is important: much of what we know about the work depends on one damaged witness rather than a broad family of parallel copies.',
    ['claim-inana-bilulu-nippur-witness']),

  cs('cs-inana-bilulu-fragmentary', 'text-inanna-bilulu', 'A Broken Text with Missing Transitions',
    'Large portions of the surviving composition are fragmentary or missing. The opening lament is followed by a substantial gap; another damaged stretch separates Inana’s departure from the chamber of Ningal from the scene connected with Bilulu; and later lines are again lost before the final lament sequence. Because of those gaps, the broad movement of the story is visible, but some scene changes and motivations remain uncertain.',
    ['claim-inana-bilulu-fragmentary-structure']),

  cs('cs-inana-bilulu-opening-lament', 'text-inanna-bilulu', 'The Lament Travels Across Dumuzi’s Landscape',
    'The poem begins not with combat but with mourning. Lament for Dumuzi is imagined as reaching outward through a network of meaningful places: the desert, house Arali, Bad-tibira, Du-šuba, the shepherding country, and Dumuzi’s sheepfold. This geography connects the dead shepherd with both named cultic places and the wider pastoral landscape.',
    ['claim-inana-bilulu-opening-lament-geography', 'claim-dumuzi-bilulu-badtibira-lament']),

  cs('cs-inana-bilulu-ningal', 'text-inanna-bilulu', 'Inana Leaves Ningal’s Chamber for the Sheepfold',
    'After the opening lament, Inana appears pacing in the chamber of the mother who bore her. She addresses Ningal as mother, asks permission to go to the sheepfold, and the same passage invokes Suen as father. These kinship statements belong to this composition’s literary presentation and should not automatically be turned into a universal genealogy for every Inana tradition.',
    ['claim-inana-bilulu-ningal-sheepfold']),

  cs('cs-inana-bilulu-dumuzi-death', 'text-inanna-bilulu', 'A Dead Shepherd and the House of Bilulu',
    'The damaged middle of the poem preserves a disturbing cluster of clues. Near the house of old woman Bilulu, Dumuzi is described with his head beaten in, and a report to Inana says that a man who was not the shepherd was returning beside Dumuzi’s sheep. Because the surrounding lines are broken, the exact mechanics of the killing cannot be reconstructed in full, but the surviving text clearly connects violent death, lost shepherding authority, and Bilulu’s sphere.',
    ['claim-inana-bilulu-dead-shepherd-clue']),

  cs('cs-inana-bilulu-song', 'text-inanna-bilulu', 'Inana Creates a Song for Her Young Husband',
    'Inana responds by fashioning a song for Dumuzi. The lament remembers him not abstractly but through his shepherding work: he guarded the sheep by day and by night. The text therefore joins marital grief with pastoral identity, presenting the dead husband as the shepherd whose absence leaves the flock and its social world disrupted.',
    ['claim-inana-bilulu-inanna-song']),

  cs('cs-inana-bilulu-girgire-shirru', 'text-inanna-bilulu', 'Ĝirĝire, Širru, and the Haunted Desert',
    'Bilulu’s son Ĝirĝire is introduced amid captured cattle, pens, folds, grain, and the aftermath of violence. Beside him appears Širru of the haunted desert, described as no one’s child and no one’s friend. These figures create a stark counter-world to Dumuzi’s ordered shepherding economy: captured livestock, violence, isolation, and the dangerous desert replace legitimate pastoral care.',
    ['claim-inana-bilulu-girgire-shirru']),

  cs('cs-inana-bilulu-vengeance', 'text-inanna-bilulu', 'Inana Chooses Vengeance',
    'The narrator directly reveals Inana’s intention. She plans to kill old woman Bilulu and, at the same time, to make good the resting place of her beloved husband Dumuzi-Ama-ušumgal-ana. Vengeance and funerary repair are therefore presented together: the violent response to Bilulu is tied to restoring an appropriate condition for the dead shepherd.',
    ['claim-inana-bilulu-vengeance-plan']),

  cs('cs-inana-bilulu-fates', 'text-inanna-bilulu', 'Killing Bilulu — Then Determining New Fates',
    'After declaring Bilulu dead, Inana does more than destroy an enemy. She determines new functions for the defeated figures. Bilulu becomes associated with the waterskin that carries cold water in the desert; Bilulu and Ĝirĝire are assigned protective desert roles; and Širru receives a function connected with flour and desert ritual. The poem turns vengeance into an act of cosmic and ritual reclassification.',
    ['claim-inana-bilulu-fate-transformations']),

  cs('cs-inana-bilulu-ritual-presence', 'text-inanna-bilulu', 'Water, Flour, and the Presence of the Vanished Dumuzi',
    'The new order has a ritual purpose. Water is to be libated and flour sprinkled for the wandering lad, and the desert figures are told to call for those acts so that Dumuzi may become present again in the place from which he vanished. The passage is one of the most important features of the composition because it links mythic vengeance to concrete acts of offering and remembrance.',
    ['claim-inana-bilulu-libation-presence']),

  cs('cs-inana-bilulu-closing-lament', 'text-inanna-bilulu', 'Durtur, Geštinanna, and the Return to Lament',
    'After another damaged section, the poem returns to Dumuzi’s family and lament tradition. His mother Durtur and Geštinanna appear, the lament again reaches places such as Arali, Du-šuba, Bad-tibira, and the shepherding country, and Inana is praised for avenging Dumuzi and making good his resting place. The surviving composition closes with a rubric identifying the work as an ulila song of Inana.',
    ['claim-inana-bilulu-closing-lament-ulila', 'claim-dumuzi-bilulu-badtibira-lament']),

  cs('cs-inana-bilulu-why-matters', 'text-inanna-bilulu', 'Why It Matters — and What It Does Not Prove',
    'Inana and Bilulu is important because it preserves a distinctive combination of Dumuzi lament, violent death, Inana’s vengeance, fate determination, desert symbolism, funerary offerings, and ritual presence. Its single damaged Nippur witness also warns against overconfidence. The text should not be fused automatically with Dumuzid’s Dream, Dumuzid and Geštinanna, or Inana’s Descent, and its water-and-flour ritual should not by itself be expanded into a universal seasonal or resurrection theology.',
    ['claim-inana-bilulu-nippur-witness', 'claim-inana-bilulu-fragmentary-structure', 'claim-inana-bilulu-libation-presence', 'claim-inana-bilulu-closing-lament-ulila']),

  // ---------------- A SONG OF INANA AND DUMUZID (C1) ----------------
  cs('cs-c1-overview', 'text-dumuzi-inanna-c1', 'What Is This Text?',
    'A Song of Inana and Dumuzid, conventionally labeled Dumuzid-Inana C1, is a Sumerian love and wedding composition built around gift exchange, bridal preparation, affectionate reunion, and the social status of Inana as Dumuzi’s bride. Unlike the death-and-pursuit compositions surrounding Dumuzi elsewhere in the corpus, C1 presents him primarily as a prospective husband whose pastoral wealth enters a celebratory domestic setting.',
    ['claim-dumuzi-c1-pastoral-gifts', 'claim-c1-bride-personal-god']),

  cs('cs-c1-date-manuscript', 'text-dumuzi-inanna-c1', 'Date, Provenance, and the Nippur Tablet',
    'The surviving witness belongs to the Old Babylonian Sumerian scribal tradition. ETCSL identifies the cuneiform source as Ni 2377, while CDLI catalogs the corresponding Nippur tablet as P345166 and links it to the C1 composite. That material context anchors the surviving poem in the Old Babylonian school-text world rather than in an imagined timeless ritual setting.',
    ['claim-c1-nippur-witness']),

  cs('cs-c1-fragmentary', 'text-dumuzi-inanna-c1', 'Four Surviving Segments and Major Gaps',
    'The modern translation is divided into four surviving segments. Several lines are fragmentary, and sizable gaps interrupt the action after the gift scene, during Inana’s meeting with Dumuzi, and again near the end. The broad wedding sequence remains visible, but the missing material prevents a fully continuous reconstruction of the original performance.',
    ['claim-c1-fragmentary-four-segments']),

  cs('cs-c1-wedding-ushers', 'text-dumuzi-inanna-c1', 'Wedding Ushers, Fowler, and Fisherman',
    'The damaged opening already places the poem in a wedding frame. Ninegala, an epithet or form of Inana in the composition, is addressed through her wedding ushers, while a fowler and fisherman appear among the named personnel. Their presence anticipates the larger gift economy that follows and gives the scene the character of an organized celebration rather than a private encounter alone.',
    ['claim-c1-wedding-ushers']),

  cs('cs-c1-gifts', 'text-dumuzi-inanna-c1', 'Inana Calls for the Best Gifts',
    'Inana sends outward to the economic worlds surrounding the city. The shepherd is to provide the best butter and milk, the farmer agricultural produce and wine, the fowler fine birds, and the fisherman fat carp. The scene gathers pastoral, agricultural, marsh, and river resources around the bride, making abundance itself part of the wedding imagery.',
    ['claim-c1-inanna-requests-gifts']),

  cs('cs-c1-dumuzi-arrives', 'text-dumuzi-inanna-c1', 'Dumuzi Arrives with Milk',
    'The gifts then arrive in concrete form: choice birds, fat carp, butter, and milk. Dumuzi is singled out carrying milk and dairy vessels on his shoulders while calling for the house to be opened. His identity as shepherd is therefore not merely a title; the poem dramatizes it through the produce he physically brings into the courtship scene.',
    ['claim-dumuzi-c1-pastoral-gifts', 'claim-c1-gift-procession']),

  cs('cs-c1-ningal', 'text-dumuzi-inanna-c1', 'Ningal Speaks to Her Daughter',
    'In the next surviving segment, Inana approaches her mother and Ningal speaks in favor of the match. The wording is damaged, but the comparisons repeatedly place Dumuzi and his family beside the familiar relationships of father and mother. The scene gives the wedding a family dimension and makes Ningal an active voice within this particular composition.',
    ['claim-c1-ningal-counsel']),

  cs('cs-c1-inanna-prepares', 'text-dumuzi-inanna-c1', 'Bathing, Oil, Robe, Lapis, and Seal',
    'At her mother’s bidding, Inana prepares herself carefully. She bathes, anoints her body with sweet oil, puts on a grand robe, arranges lapis lazuli at her neck, and takes her cylinder seal in hand. The details combine beauty, wealth, personal identity, and status in a deliberate bridal presentation.',
    ['claim-c1-inanna-preparation']),

  cs('cs-c1-doorway', 'text-dumuzi-inanna-c1', 'Like a Moonbeam at the Door',
    'The meeting itself is one of the composition’s clearest intimate images. As Dumuzi opens the door, Inana comes out from the house like a moonbeam. He rejoices when he sees her, embraces her, and kisses her. The language is direct and affectionate, without requiring the scene to be transformed into a generalized theory about every Inana-Dumuzi ritual.',
    ['claim-c1-doorway-embrace']),

  cs('cs-c1-bride', 'text-dumuzi-inanna-c1', 'Bride, Spouse, and the House of Dumuzi’s God',
    'Later lines identify Inana as Dumuzi’s bride and preserve language of spousal intimacy. Dumuzi invites her into the house of his personal god and promises that she will sit beside him in the god’s seat of honor. The passage presents marriage as entry into a new household and cultic-social position as well as an erotic union.',
    ['claim-c1-bride-personal-god']),

  cs('cs-c1-table', 'text-dumuzi-inanna-c1', 'Not a Slave Girl — a Splendid Table',
    'Dumuzi goes out of his way to define Inana’s status. He tells her that he has not taken her away to be a slave girl and promises her a splendid table, distinguished even from the dining privileges of his own relatives. The surviving lines therefore emphasize honor, rank, and favored treatment inside the bridegroom’s household.',
    ['claim-c1-not-slave-splendid-table']),

  cs('cs-c1-household-labor', 'text-dumuzi-inanna-c1', 'A Bride Exempt from Ordinary Textile Labor',
    'The closing segment continues that privileged framing. Dumuzi tells his bride that she should not weave cloth, spin yarn, comb goat wool, or warp threads for him. Because the passage is damaged, it is safest to read these lines as a literary statement about her special status in this song rather than as evidence for the ordinary legal or economic condition of Mesopotamian brides.',
    ['claim-c1-household-labor-exemptions', 'claim-c1-fragmentary-four-segments']),

  cs('cs-c1-why-matters', 'text-dumuzi-inanna-c1', 'Why It Matters — and What It Does Not Prove',
    'C1 matters because it preserves a markedly different Dumuzi from the pursued and dying shepherd of other compositions. Here he is a milk-bearing bridegroom, Inana is a richly prepared bride, Ningal participates in the family setting, and the poem celebrates gifts, affection, household honor, and abundance. The composition belongs within the larger Inana-Dumuzi love-song tradition, but one damaged Old Babylonian witness cannot by itself establish a single universal sacred-marriage ceremony or prove that every literary wedding image directly records performed ritual.',
    ['claim-c1-nippur-witness', 'claim-c1-fragmentary-four-segments', 'claim-dumuzi-c1-pastoral-gifts', 'claim-c1-doorway-embrace']),

  // ---------------- A HYMN TO NUNGAL (NUNGAL A) ----------------
  cs('cs-nungal-a-overview', 'text-nungal-a', 'What Is This Text?',
    'A Hymn to Nungal, conventionally called Nungal A, is a Sumerian hymn centered on a divine prison and its lady. The composition does not describe confinement only as punishment. It moves from terrifying images of capture and judgment to claims about truth, compassion, purification, restoration, and renewed divine protection. That tension between severity and rehabilitation is one of the text’s most distinctive features.',
    ['claim-nungal-a-prison-house', 'claim-nungal-a-compassion-tablet-life']),

  cs('cs-nungal-a-date-manuscripts', 'text-nungal-a', 'Date, Provenance, and a Large Manuscript Tradition',
    'The surviving textual tradition belongs primarily to the Old Babylonian Sumerian scribal world. Unlike several works in this Atlas that depend on one or only a few witnesses, Nungal A survives in a comparatively broad manuscript tradition. ETCSL lists numerous tablets from Nippur and additional witnesses from places such as Isin and Ur, while CDLI records individual Old Babylonian Nippur copies such as P268936.',
    ['claim-nungal-a-manuscript-tradition']),

  cs('cs-nungal-a-prison-house', 'text-nungal-a', 'The Prison — Jail of the Gods',
    'The hymn begins by addressing the house itself. It is a furious storm, prison, jail of the gods, neck-stock, trap, net, river ordeal, and house of capital offences. The same opening insists that the building watches both just and wicked people and that it can preserve the righteous while exposing the evildoer. The prison is therefore presented as a divine institution of dangerous discrimination rather than indiscriminate destruction.',
    ['claim-nungal-a-prison-house']),

  cs('cs-nungal-a-architecture', 'text-nungal-a', 'Dragon Stairs, Lion Bars, and a Serpent Bolt',
    'The prison’s architecture is described as though every structural element were alive with danger. The stairs become an open-mouthed dragon; the door jamb is a dagger; the architrave is a scorpion; pilasters and bars are lions; the hinges become an eagle; the latch is a python; and the bolt is a horned viper. These are poetic metaphors for the inescapability and terror of the house, not a literal archaeological floor plan.',
    ['claim-nungal-a-architecture']),

  cs('cs-nungal-a-judgment', 'text-nungal-a', 'Nungal on the Dais — True and False',
    'Nungal appears as the powerful lady seated on the great dais of the house, exercising vigilance over the Land and listening to the king. The next lines emphasize the prison as a place of judgment before which even the gods bow. The text describes oversight of judgments and decisions and the separation of true from false, while its battle-net prevents evildoers from escaping.',
    ['claim-nungal-a-judgment']),

  cs('cs-nungal-a-prisoner', 'text-nungal-a', 'Entering the House of Sorrow',
    'The hymn then shifts from architecture to the experience of an accused man. He is handed into Nungal’s august grip, restrained, led to a house of sorrow, stripped of normal appearance, and cut off socially. Acquaintances avoid him, fellow prisoners lose track of time, and men become so changed that they no longer recognize one another. Confinement is portrayed as an assault on ordinary social identity.',
    ['claim-nungal-a-prisoner-isolation']),

  cs('cs-nungal-a-ordeal', 'text-nungal-a', 'Interrogation, River Ordeal, and “Rebirth”',
    'Inside the house there is weeping, lament, and fear. Yet the prison’s theological purpose is not exhausted by suffering. At the proper time, the gods attend interrogation and the divine river ordeal to distinguish the just from the evildoer. The hymn then says that a just man is given rebirth. In this context, “rebirth” belongs to the poem’s language of vindication and restoration and should not automatically be read as biological resurrection.',
    ['claim-nungal-a-ordeal-rebirth']),

  cs('cs-nungal-a-genealogy', 'text-nungal-a', 'Nungal’s Self-Praise and Divine Genealogy',
    'Beginning at line 62, Nungal speaks in the first person and places herself inside a network of divine relationships. She calls herself daughter of An and daughter-in-law of Enlil, says the gods have entrusted divine powers to her, names Ereshkigal as her own mother, and says that she speaks with grandeur to Inanna. The hymn therefore combines prison theology with a carefully constructed divine genealogy and sphere of authority.',
    ['claim-nungal-a-genealogy-powers', 'claim-ereshkigal-nungal-mother']),

  cs('cs-nungal-a-compassion', 'text-nungal-a', 'The Tablet of Life — Punishment Tempered by Compassion',
    'The hymn makes a striking turn when Nungal claims mercy and compassion as her own. She says that she holds the tablet of life and records the just, that she tempers severe punishments, cools angry hearts with water, calms the wounded, and snatches people from destruction. The prison goddess is therefore praised not only for enforcing judgment but also for limiting punishment and restoring life and social order.',
    ['claim-nungal-a-compassion-tablet-life']),

  cs('cs-nungal-a-household', 'text-nungal-a', 'Birtum and the Household of the Prison Goddess',
    'Nungal’s prison is also represented as a divine household with named personnel. Birtum is her spouse and shares the great dais. Ig-alim serves as chief superintendent; Ninharana brings news before her; and messengers, guardians, a barber, and other attendants fill out the institution. The hymn imagines justice through the language of an organized palace or household rather than through Nungal acting alone.',
    ['claim-nungal-a-household']),

  cs('cs-nungal-a-house-life', 'text-nungal-a', 'A Capital Charge — but the “House of Life”',
    'The most dramatic legal scene begins with a man accused of a capital offence. Nungal’s chief prosecutor stretches out his arm in accusation and sentences the man to death, yet the text immediately says he will not be killed. Instead he is rescued from destruction and placed under guard in Nungal’s “house of life.” The same passage says that the house gives birth to a just person while exterminating falsehood.',
    ['claim-nungal-a-house-of-life']),

  cs('cs-nungal-a-purification', 'text-nungal-a', 'Polished Like Silver and Returned to His God',
    'The closing movement describes a successful prisoner as cleansed and polished like high-quality silver. Once the heart of his personal god has been appeased, he is entrusted again to that god, praises Nungal, and brings her offerings from cattle-pen and sheepfold. Nungal promises to remain his friendly guardian and protector in the palace. Confinement thus ends, in the hymn’s idealized theology, with reintegration rather than permanent exclusion.',
    ['claim-nungal-a-purification-release']),

  cs('cs-nungal-a-why-matters', 'text-nungal-a', 'Why It Matters — and What It Does Not Prove',
    'Nungal A is unusually valuable because it preserves an extended Sumerian reflection on prison, accusation, judgment, suffering, truth, mercy, purification, and restoration. It also survives in a large Old Babylonian manuscript tradition, showing that the composition circulated widely in scribal education. But the hymn is theological and literary: its terrifying architecture should not be treated as a literal prison blueprint, and its ideal of rehabilitative justice should not be assumed to describe every Mesopotamian jail or legal procedure in practice.',
    ['claim-nungal-a-manuscript-tradition', 'claim-nungal-a-architecture', 'claim-nungal-a-compassion-tablet-life', 'claim-nungal-a-purification-release']),

  // ---------------- A HYMN TO NERGAL (NERGAL B) ----------------
  cs('cs-text-amar-suena-11-overview', 'text-amar-suena-11-ningal', 'What Is Amar-Suena 11?',
    "Amar-Suena 11 is a Sumerian royal inscription associated with the Ur III king Amar-Suena and the city of Ur. It records the erection of a royal statue, identifies Ningal as lady of Urim, invokes Nanna and Ningal in a protective curse, and survives with a later colophon explaining how an earlier Amar-Suena inscription was found and copied. The text therefore preserves both an Ur III royal message and evidence for its later transmission.",
    ['claim-amar-suena-11-royal-titulary-statue', 'claim-ningal-amar-suena-lady-mother-ur', 'claim-amar-suena-11-later-copy']),
  cs('cs-text-amar-suena-11-king-statue', 'text-amar-suena-11-ningal', 'Amar-Suena and the Royal Statue',
    "The inscription begins with Amar-Suena's royal titulary. He is described as the one whose name was proclaimed by Enlil, the steadfast supporter of Enlil's temple, the powerful king, king of Urim, and king of the four quarters. The text then records the erection of a named statue, placing royal image-making within the language of kingship and divine favor.",
    ['claim-amar-suena-11-royal-titulary-statue']),
  cs('cs-text-amar-suena-11-ningal', 'text-amar-suena-11-ningal', 'Ningal, Lady and Mother of Urim',
    "The protective portion of the inscription gives Ningal distinctly civic titles. She is called the lady of Urim and later the mother of Urim, while Nanna is identified as king of Urim. The pairing presents the two deities as divine figures deeply embedded in the identity and protection of the city.",
    ['claim-ningal-amar-suena-lady-mother-ur']),
  cs('cs-text-amar-suena-11-curse', 'text-amar-suena-11-ningal', 'The Gold Statue and Divine Curse',
    "The inscription warns against transferring the gold statue associated with Ningal from its temple setting to a storehouse. Anyone who does so is placed under the curse of Nanna, king of Urim, and Ningal, mother of Urim, with the additional threat that the offender's lineage will be cut short. The curse protects both the sacred object and its proper cultic location.",
    ['claim-amar-suena-11-gold-statue-curse', 'claim-ningal-amar-suena-lady-mother-ur']),
  cs('cs-text-amar-suena-11-copying', 'text-amar-suena-11-ningal', 'Discovery and Later Scribal Copying',
    "The colophon gives the inscription an unusually informative transmission history. It states that Sîn-balāssu-iqbi found a baked-brick inscription of Amar-Suena while searching for the ground plan of Ekišnugal at Ur. Nabû-šuma-iddin, identified as a lamentation-priest of Sîn, then read the older inscription and copied it for viewing. The surviving text must therefore be understood not only as an Ur III royal inscription but also through the circumstances of its later recovery and copying.",
    ['claim-amar-suena-11-later-copy']),
  cs('cs-text-amar-suena-11-significance', 'text-amar-suena-11-ningal', 'Why This Inscription Matters',
    "Amar-Suena 11 connects royal representation, Ningal's civic identity, Nanna's kingship over Urim, sacred-object protection, and the preservation of older inscriptions. Its curse formula gives direct evidence for Ningal as lady and mother of Urim, while its colophon shows later scholars and officials actively recovering and copying the monumental past of Ur. The inscription is therefore valuable both for Ur III religion and for the later history of Mesopotamian antiquarian scholarship.",
    ['claim-amar-suena-11-royal-titulary-statue', 'claim-ningal-amar-suena-lady-mother-ur', 'claim-amar-suena-11-gold-statue-curse', 'claim-amar-suena-11-later-copy']),
  cs('cs-text-ashurbanipal-2006-overview', 'text-ashurbanipal-2006-ningal', 'What Is Ashurbanipal 2006?',
    "Ashurbanipal 2006 is the modern catalogue designation for Q003845, an Akkadian Neo-Assyrian inscription preserved on clay disks from Ur. The text concerns the construction of a well named Puḫilituma for Ningal. Although catalogued under Ashurbanipal's reign, it identifies Sîn-balāssu-iqbi, governor of Ur, Eridu, and the Gurasimmu, as the official responsible for the work.",
    ['claim-ashurbanipal-2006-disk-provenance', 'claim-ashurbanipal-2006-sin-balassu-iqbi']),

  cs('cs-text-ashurbanipal-2006-ningal', 'text-ashurbanipal-2006-ningal', 'Ningal, Queen of the Goddesses',
    "The inscription begins with an invocation to Ningal. It calls her an exalted lady and queen of the goddesses, presenting the well project as an act carried out within her cult at Ur. This title provides direct Neo-Assyrian evidence for Ningal's elevated divine status.",
    ['claim-ningal-queen-goddesses-q003845']),

  cs('cs-text-ashurbanipal-2006-puhilituma', 'text-ashurbanipal-2006-ningal', 'The Well Puḫilituma',
    "Sîn-balāssu-iqbi states that he opened the emplacement, built the well named Puḫilituma, and established it for the future. The inscription adds that he caused enduring spring water to appear within it. The passage gives unusually concrete evidence for water infrastructure being constructed and maintained as part of royal and gubernatorial patronage of Ningal's cult.",
    ['claim-ningal-puhilituma-well', 'claim-ashurbanipal-2006-sin-balassu-iqbi']),

  cs('cs-text-ashurbanipal-2006-ashurbanipal', 'text-ashurbanipal-2006-ningal', 'Ashurbanipal and the Purpose of the Work',
    "The inscription explicitly says that the project was undertaken to ensure the good health of Ashurbanipal, king of Assyria. This distinction matters: Ashurbanipal is the royal beneficiary named in the dedication, while Sîn-balāssu-iqbi is the local official who states that he performed the construction.",
    ['claim-ashurbanipal-2006-health-dedication', 'claim-ashurbanipal-2006-sin-balassu-iqbi']),

  cs('cs-text-ashurbanipal-2006-future', 'text-ashurbanipal-2006-ningal', 'A Blessing for Future Rulers',
    "The final lines look beyond the original construction. Any future ruler who reopens the well is granted a blessing: may his days be long and his offspring extensive. The inscription therefore combines immediate construction, royal welfare, and an expectation that later rulers would continue maintaining the water installation.",
    ['claim-ashurbanipal-2006-future-ruler-blessing']),

  cs('cs-text-ashurbanipal-2006-significance', 'text-ashurbanipal-2006-ningal', 'Why This Inscription Matters',
    "Q003845 provides a compact but unusually material picture of Ningal's cult at Neo-Assyrian Ur. It records her title as queen of the goddesses, identifies the governor responsible for the project, describes the establishment of a named well supplied with spring water, links the work to Ashurbanipal's welfare, and preserves a blessing for future maintenance. It shows divine honor expressed not only through temples and statues but also through durable cult infrastructure.",
    ['claim-ningal-queen-goddesses-q003845', 'claim-ningal-puhilituma-well', 'claim-ashurbanipal-2006-health-dedication', 'claim-ashurbanipal-2006-sin-balassu-iqbi', 'claim-ashurbanipal-2006-future-ruler-blessing']),
  cs('cs-text-ashurbanipal-2005-overview', 'text-ashurbanipal-2005-ningal', 'What Is Ashurbanipal 2005?',
    "Ashurbanipal 2005 is the modern catalogue designation for Q003844, a Sumerian Neo-Assyrian inscription preserved on clay cones from Ur. The inscription itself identifies Sîn-balāssu-iqbi, governor of Ur, as the official who rebuilt the Gipāru for Ningal. Its importance lies in the unusually concrete evidence it gives for Ningal's titles, cult residence, divine marriage, statue, and architectural patronage at Ur.",
    ['claim-ashurbanipal-2005-cone-provenance', 'claim-ashurbanipal-2005-sin-balassu-iqbi', 'claim-ningal-queen-ekishnugal-ur']),

  cs('cs-text-ashurbanipal-2005-ningal-titles', 'text-ashurbanipal-2005-ningal', 'Ningal: Queen of Ekišnugal and Beloved of Ur',
    "The inscription opens by addressing Ningal as queen of Ekišnugal, divine Ninmenna or Lady-of-the-Crown, beloved of Ur, and the governor's lady. These titles place Ningal firmly within the sacred identity of Ur and present her with a royal and local status in her own right.",
    ['claim-ningal-queen-ekishnugal-ur']),

  cs('cs-text-ashurbanipal-2005-giparu', 'text-ashurbanipal-2005-ningal', 'Rebuilding the Gipāru',
    "Sîn-balāssu-iqbi states that he rebuilt the Gipāru for Ningal. The inscription describes the building as the house of the supreme goddess and calls Ningal the beloved wife of Sîn. The passage therefore connects architectural restoration with Ningal's place beside the moon god within the sacred complex of Ur.",
    ['claim-ningal-giparu-ur', 'claim-ashurbanipal-2005-sin-balassu-iqbi']),

  cs('cs-text-ashurbanipal-2005-statue-enun', 'text-ashurbanipal-2005-ningal', 'The Statue and Ningal’s Residence',
    "The inscription goes beyond rebuilding. Sîn-balāssu-iqbi says that he fashioned a statue as a re-creation of Ningal and brought it into the sacred complex. The text then says that Ningal took up residence in Enun, built as her lordly abode. Together these statements show architecture, cult image, and divine presence being treated as connected elements of sanctuary renewal.",
    ['claim-ningal-giparu-statue', 'claim-ashurbanipal-2005-enun-residence']),

  cs('cs-text-ashurbanipal-2005-significance', 'text-ashurbanipal-2005-ningal', 'Why This Inscription Matters',
    "Q003844 is especially valuable because it preserves a compact picture of Ningal's institutional cult at Ur during the Neo-Assyrian period. It names her titles and relationship to Sîn, records the rebuilding of the Gipāru, describes the creation of her statue, and places her within a named divine residence. It also illustrates why the catalogue title Ashurbanipal 2005 must be distinguished from the historical official named inside the inscription, Sîn-balāssu-iqbi.",
    ['claim-ashurbanipal-2005-sin-balassu-iqbi', 'claim-ningal-queen-ekishnugal-ur', 'claim-ningal-giparu-ur', 'claim-ningal-giparu-statue', 'claim-ashurbanipal-2005-enun-residence']),
  cs('cs-text-nebuchadnezzar-ii-034-overview', 'text-nebuchadnezzar-ii-034-marduk', 'What Is Nebuchadnezzar II 034?',
    "Nebuchadnezzar II 034 is a Neo-Babylonian royal inscription centered on the king's support of Babylon's great sanctuaries and ceremonial infrastructure. It begins with Esagil and Ezida, then turns to extensive work on major processional streets used by Marduk and Nabu, before closing with prayers addressed to Marduk and to the gods participating in the akītu procession.",
    ['claim-marduk-nebuchadnezzar-esagil', 'claim-marduk-nebuchadnezzar-procession', 'claim-nebuchadnezzar-ii-034-street-infill']),

  cs('cs-text-nebuchadnezzar-ii-034-esagil-ezida', 'text-nebuchadnezzar-ii-034-marduk', 'Esagil, Ezida, and Royal Provision',
    "Nebuchadnezzar identifies himself as the one who provides for Esagil and Ezida. He then states that he provided for Esagil, completed Ezida, and made the sanctuaries of the great gods shine like daylight. The opening therefore presents royal legitimacy through the king's care for the principal cult institutions associated with Marduk, Nabu, and the wider divine community.",
    ['claim-marduk-nebuchadnezzar-esagil']),

  cs('cs-text-nebuchadnezzar-ii-034-streets', 'text-nebuchadnezzar-ii-034-marduk', 'Processional Streets of Marduk and Nabu',
    "The largest part of the inscription concerns Babylon's ceremonial streets. Nebuchadnezzar records raising the streets associated with the Uraš Gate and Ištar Gate with massive fills because their surfaces had become too low. He says that he improved the routes with bitumen and baked brick for the processions of Marduk and Nabu, tying urban engineering directly to public cult and royal patronage.",
    ['claim-marduk-nebuchadnezzar-procession', 'claim-nebuchadnezzar-ii-034-street-infill']),

  cs('cs-text-nebuchadnezzar-ii-034-marduk-prayer', 'text-nebuchadnezzar-ii-034-marduk', 'Prayer to Marduk',
    "After describing the building work, Nebuchadnezzar turns directly to Marduk. He addresses the god as exalted lord and as the wisest and most competent among the gods, asks Marduk to look favorably upon his handiwork, and requests the gifts of long life and the attainment of very old age. The shift makes explicit the religious logic of the king's construction program: royal building is presented as service performed under divine judgment and in expectation of divine favor.",
    ['claim-nebuchadnezzar-ii-034-marduk-prayer']),

  cs('cs-text-nebuchadnezzar-ii-034-akitu', 'text-nebuchadnezzar-ii-034-marduk', 'The Akītu Route and Divine Procession',
    "The final prayer widens from Marduk to the great gods who travel with him along Ay-ibūr-šabû on the way to the akītu-house. Nebuchadnezzar asks these gods to speak good things about him in Marduk's presence. The inscription therefore connects the rebuilt streets not merely with transportation but with the ritual movement of divine images and the public ceremonial geography of Babylon's New Year festival.",
    ['claim-marduk-nebuchadnezzar-procession', 'claim-nebuchadnezzar-ii-034-akitu-intercession']),

  cs('cs-text-nebuchadnezzar-ii-034-significance', 'text-nebuchadnezzar-ii-034-marduk', 'Why This Inscription Matters',
    "Nebuchadnezzar II 034 brings temple patronage, urban engineering, royal prayer, and festival procession into a single primary source. It documents royal support for Esagil and Ezida, large-scale rebuilding of streets used by Marduk and Nabu, and prayers that place those works within the king's relationship to Marduk and the akītu festival. The inscription is therefore especially valuable for understanding how religion, monarchy, infrastructure, and ceremonial movement were integrated in Neo-Babylonian Babylon.",
    ['claim-marduk-nebuchadnezzar-esagil', 'claim-marduk-nebuchadnezzar-procession', 'claim-nebuchadnezzar-ii-034-street-infill', 'claim-nebuchadnezzar-ii-034-marduk-prayer', 'claim-nebuchadnezzar-ii-034-akitu-intercession']),
  cs('cs-text-sennacherib-214-overview', 'text-sennacherib-214-nergal-tarbisu', 'What Is Sennacherib 214?',
    "Sennacherib 214 is a very short Neo-Assyrian royal building inscription preserved on clay-cone exemplars from Tarbisu. Its two lines focus on one specific act of royal patronage: Sennacherib's construction of Egallammes, the temple of Nergal at Tarbisu. Because the inscription names the god, temple, city, king, building work, and purposes of the project together, it provides unusually compact primary evidence for Nergal's Neo-Assyrian cult.",
    ['claim-sennacherib-214-cone-provenance', 'claim-nergal-tarbisu-egallammes']),

  cs('cs-text-sennacherib-214-egallammes', 'text-sennacherib-214-nergal-tarbisu', 'Egallammes at Tarbisu',
    "The inscription is dedicated to Nergal, whom Sennacherib calls his lord. The king states that he built Egallammes in Tarbisu from its foundations to its crenellations. The wording presents the work as a complete royal construction project and gives direct evidence for an established temple of Nergal within the Assyrian religious landscape.",
    ['claim-nergal-tarbisu-egallammes']),

  cs('cs-text-sennacherib-214-purposes', 'text-sennacherib-214-nergal-tarbisu', 'Why the King Built the Temple',
    "Sennacherib does not describe the temple project as an end in itself. He says the building was undertaken for his own life, the well-being of his descendants, the overthrow of his enemies, the success of Assyria's harvest, and the well-being of Assyria. The short dedication therefore joins personal kingship, dynasty, military victory, agricultural prosperity, and the welfare of the kingdom within the king's appeal to Nergal.",
    ['claim-sennacherib-214-royal-purposes']),

  cs('cs-text-sennacherib-214-cones', 'text-sennacherib-214-nergal-tarbisu', 'The Clay Cones',
    "The inscription closes with a reference to the deposition of the king's clay cones in the building. The surviving exemplars themselves are clay cones associated with Tarbisu, so the text preserves both the royal building statement and the commemorative practice through which that statement was physically placed within the monument.",
    ['claim-sennacherib-214-cone-provenance', 'claim-sennacherib-214-cone-deposit']),

  cs('cs-text-sennacherib-214-significance', 'text-sennacherib-214-nergal-tarbisu', 'Why This Inscription Matters',
    "Sennacherib 214 is important because it directly documents royal investment in Nergal's cult outside the god's traditional Babylonian center at Kutha. At Tarbisu, Nergal possessed a named temple that an Assyrian king claims to have built completely, while linking the project to dynasty, warfare, harvest, and the welfare of Assyria. The inscription therefore provides concise but strong evidence for Nergal's institutional place within Neo-Assyrian royal religion.",
    ['claim-nergal-tarbisu-egallammes', 'claim-sennacherib-214-royal-purposes']),
  cs('cs-text-nebuchadnezzar-ii-032-overview', 'text-nebuchadnezzar-ii-032-nergal-kutha', 'What Is Nebuchadnezzar II 032?',
    "Nebuchadnezzar II 032 is a Neo-Babylonian royal inscription concerned with the king's building and restoration of sanctuaries. One especially important passage turns to Kutha and Nergal's temple Emeslam. Rather than merely naming the god or city, the inscription describes specific royal work on the sanctuary and on the urban defenses associated with Kutha.",
    ['claim-nebuchadnezzar-ii-032-nergal-epithet-emeslam', 'claim-nebuchadnezzar-ii-032-emeslam-fittings', 'claim-nebuchadnezzar-ii-032-emeslam-walls', 'claim-nebuchadnezzar-ii-032-kutha-embankment']),

  cs('cs-text-nebuchadnezzar-ii-032-emeslam', 'text-nebuchadnezzar-ii-032-nergal-kutha', 'Nergal and the Gates of Emeslam',
    "The Kutha passage begins by addressing Nergal as the lord who binds the arms of the king's enemies. Nebuchadnezzar II then records decorating the gate doors of Emeslam with shiny silver. The following lines describe thresholds, nukuššû-fittings, and lower doors fashioned with silver, giving unusually concrete detail about royal investment in Nergal's sanctuary.",
    ['claim-nebuchadnezzar-ii-032-nergal-epithet-emeslam', 'claim-nebuchadnezzar-ii-032-emeslam-fittings']),

  cs('cs-text-nebuchadnezzar-ii-032-restoration', 'text-nebuchadnezzar-ii-032-nergal-kutha', 'Rebuilding and Protecting Emeslam',
    "The inscription moves from ornament to structural restoration. Nebuchadnezzar II states that, in order to strengthen the protection of Emeslam, he rebuilt the walls surrounding the temple and its associated buildings in front of the forecourt. The passage presents the work as a renewal of an established sacred complex rather than the creation of an entirely new sanctuary.",
    ['claim-nebuchadnezzar-ii-032-emeslam-walls']),

  cs('cs-text-nebuchadnezzar-ii-032-kutha', 'text-nebuchadnezzar-ii-032-nergal-kutha', 'Building at Kutha',
    "The account extends beyond the temple itself. In column iii line 4, Nebuchadnezzar II records work on the moat embankments of Cutha, the ancient city of Kutha, and says that he surrounded the city on the outside with bitumen and baked brick. The inscription therefore links royal attention to both Nergal's sanctuary and the physical defenses of the city.",
    ['claim-nebuchadnezzar-ii-032-kutha-embankment']),

  cs('cs-text-nebuchadnezzar-ii-032-significance', 'text-nebuchadnezzar-ii-032-nergal-kutha', 'Why This Inscription Matters',
    "Nebuchadnezzar II 032 is particularly valuable for the history of Nergal's cult at Kutha because a single primary source connects the god, the named temple Emeslam, detailed sanctuary work, and construction at the city itself. It provides direct Neo-Babylonian evidence that Kutha and its principal Nergal sanctuary continued to receive substantial royal investment.",
    ['claim-nebuchadnezzar-ii-032-nergal-epithet-emeslam', 'claim-nebuchadnezzar-ii-032-emeslam-fittings', 'claim-nebuchadnezzar-ii-032-emeslam-walls', 'claim-nebuchadnezzar-ii-032-kutha-embankment']),
  cs('cs-text-ashurbanipal-227-overview', 'text-ashurbanipal-227-nergal', 'What Is Ashurbanipal 227?', 'Ashurbanipal 227 is a Neo-Assyrian royal inscription that combines praise of Nergal, royal warfare, an account involving Elam and the return of Nanaya, and Ashurbanipal’s restoration of Nergal’s temple Emeslam at Cutha. The text is therefore both a source for Nergal’s divine profile and a royal building inscription tied to a specific sanctuary.', ['claim-ashurbanipal-227-provenance', 'claim-nergal-ashurbanipal-warrior', 'claim-ashurbanipal-227-emeslam-rebuild']),
  cs('cs-text-ashurbanipal-227-provenance', 'text-ashurbanipal-227-nergal', 'Kuyunjik, Nineveh, and K 2631+', 'The surviving inscription is preserved on the large single-column clay tablet K 2631+ from Kuyunjik at Nineveh. It belongs to the reign of Ashurbanipal in the seventh century BCE. That archaeological provenance should be distinguished from the places described inside the inscription, especially Cutha and Uruk.', ['claim-ashurbanipal-227-provenance']),
  cs('cs-text-ashurbanipal-227-nergal', 'text-ashurbanipal-227-nergal', 'Nergal — Son of Enlil and Lord of Emeslam', 'The opening addresses Nergal as an exalted son of Enlil and celebrates him as a formidable warrior and king of battle. It also places him in Emeslam, his holy sanctuary inside Cutha. In a few lines the inscription therefore joins genealogy, martial identity, cult place, and temple.', ['claim-nergal-ashurbanipal-warrior', 'claim-ashurbanipal-227-nergal-emeslam']),
  cs('cs-text-ashurbanipal-227-war-plague', 'text-ashurbanipal-227-nergal', 'Battle Companion and Protector from Plague', 'Nergal is not praised only in abstract terms. The inscription presents him as marching beside the king in battle and destroying his foes, while also praising him as the god who can spare the ruler who reveres him from plague. The same destructive divine power is therefore represented as both martial force and protective power.', ['claim-nergal-ashurbanipal-warrior', 'claim-nergal-ashurbanipal-plague']),
  cs('cs-text-ashurbanipal-227-nanaya', 'text-ashurbanipal-227-nergal', 'Elam and the Return of Nanaya', 'The historical report extends beyond Nergal and Cutha. Ashurbanipal recounts events connected with Elam and says that he recovered Nanaya and other goddesses and caused them to return to Eanna at Uruk. This episode makes the inscription relevant to Nanaya’s first-millennium history as well as to Nergal.', ['claim-ashurbanipal-227-nanaya-return']),
  cs('cs-text-ashurbanipal-227-emeslam', 'text-ashurbanipal-227-nergal', 'Rebuilding Emeslam at Cutha', 'Ashurbanipal reports that parts of Emeslam had fallen into disrepair. He describes clearing collapsed material, realigning the foundations, depositing precious materials, and rebuilding the sanctuary. The inscription thus provides direct Neo-Assyrian evidence for royal investment in Nergal’s principal temple at Cutha.', ['claim-ashurbanipal-227-emeslam-rebuild']),
  cs('cs-text-ashurbanipal-227-blessing', 'text-ashurbanipal-227-nergal', 'Nergal, Las, and the Future Ruler', 'After the restoration account, the inscription invokes Nergal and Las and asks for royal well-being, long life, and divine favor. The closing then turns to a future ruler, instructing him to restore the sanctuary when it becomes old again and warning him not to erase Ashurbanipal’s inscribed name.', ['claim-ashurbanipal-227-nergal-las-blessing', 'claim-ashurbanipal-227-future-ruler']),
  cs('cs-text-ashurbanipal-227-why-matters', 'text-ashurbanipal-227-nergal', 'Why This Inscription Matters', 'Ashurbanipal 227 is unusually useful because one royal inscription connects Nergal’s warfare and plague-protection, his genealogy from Enlil, Emeslam at Cutha, the recovery of Nanaya, and a detailed temple-restoration program. It should still be read as royal ideological writing rather than as a neutral chronicle: its theological and historical claims are presented through Ashurbanipal’s own commemorative voice.', ['claim-ashurbanipal-227-provenance', 'claim-ashurbanipal-227-nergal-emeslam', 'claim-ashurbanipal-227-nanaya-return', 'claim-ashurbanipal-227-emeslam-rebuild']),
  cs('cs-nergal-b-text-overview', 'text-nergal-b', 'What Is This Text?',
    'A Hymn to Nergal, conventionally called Nergal B, is a compact Sumerian praise composition centered on Nergal’s terrifying power, martial force, divine authority, kingship, and ties to Enlil. It is not a continuous mythic narrative. Its surviving lines move through a sequence of praise images and divine acclamations, many of them damaged, so the safest reading follows what the preserved wording actually says rather than reconstructing a complete story behind the gaps.',
    ['claim-nergal-b-warrior', 'claim-nergal-b-enlil-son', 'claim-nergal-b-divine-powers-heaven']),

  cs('cs-nergal-b-text-preservation', 'text-nergal-b', 'Preservation — One Named Cuneiform Source and Many Gaps',
    'The ETCSL edition numbers the composition through line 57 and lists AO 5391, published as TCL 15 26, as its cuneiform source. The hymn is far from complete in every line: broken signs and lacunae occur throughout, and the final unit is especially fragmentary. That preservation history matters because confident interpretation must stop where the tablet stops; missing wording should not be silently supplied from other Nergal hymns or later traditions.',
    ['claim-nergal-b-preservation']),

  cs('cs-nergal-b-text-enlil-meslamtaea', 'text-nergal-b', 'Son of Enlil and Lord Mešlamta-ea',
    'The opening identifies the god through both genealogy and cultic naming. Nergal is praised as an awe-inspiring son of Enlil and is also addressed as Lord Mešlamta-ea. A few lines later the hymn again says that he was sired by Enlil. These statements make the relationship to Enlil explicit inside the ancient composition itself while preserving the important Mešlamta-ea designation already associated with Nergal’s historical identity.',
    ['claim-nergal-b-enlil-son', 'claim-nergal-b-warrior']),

  cs('cs-nergal-b-text-storm-warrior', 'text-nergal-b', 'Storm, Flood, and the Hostile Lands',
    'Nergal’s martial power dominates the opening movement. He batters like a storm, surges like a flood, inspires terrifying awe, and does not release the hostile land. Later the hymn says that he commands a storm that flattens disobedient territory and devastates its evil. The imagery is praise-language for divine warfare and overwhelming force, not a report of one identifiable historical campaign.',
    ['claim-nergal-b-warrior']),

  cs('cs-nergal-b-text-divine-powers', 'text-nergal-b', 'Knowing the Divine Powers and Organizing Heaven',
    'The hymn does not restrict Nergal to battlefield imagery. In lines 13–16 he raises his head with authority, possesses a ringing voice, knows the divine powers of the gods, travels through heaven, and organizes everything. The passage broadens his profile from destructive warrior to a deity presented as exercising ordered cosmic authority.',
    ['claim-nergal-b-divine-powers-heaven']),

  cs('cs-nergal-b-text-kingship-netherworld', 'text-nergal-b', 'Kingship in the Land and the Netherworld',
    'A damaged middle passage links Nergal’s terrifying presence with citywide awe, the role of supreme deity, and kingship in the Land. It also explicitly turns toward the netherworld: Nergal is said to bring people to a destination there, although the crucial wording around that destination is broken. The netherworld connection is therefore ancient and explicit, while the missing words should remain missing in our reconstruction.',
    ['claim-nergal-b-kingship-netherworld']),

  cs('cs-nergal-b-text-erra-fate', 'text-nergal-b', 'Erra’s Acclamation — An, Stewardship, and Fate',
    'Lines 36–39 preserve a short acclamation attributed to Erra. The speaker welcomes his king, says that Nergal surpasses An, calls on him to perform stewardship for An the king, and says that Nergal determines fates with An in accordance with destiny. Because the passage is brief, it should be reported as the hymn’s wording rather than expanded into a complete theory of the relationship among Erra, Nergal, and An.',
    ['claim-nergal-b-erra-fate']),

  cs('cs-nergal-b-text-ninshubur', 'text-nergal-b', 'Ninšubur’s Greeting — Enlil’s Enemies and Fire',
    'Ninšubur, called the minister of the great place, the underworld, then greets Nergal. The speech praises a lord whose reach extends into the mountains and hostile foreign lands, connects his victories with Enlil’s enemies, and compares Nergal’s rising power to fire in the lands where the sun rises. The surviving wording reinforces the hymn’s fusion of underworld authority and martial conquest.',
    ['claim-nergal-b-ninshubur-conquest']),

  cs('cs-nergal-b-text-anuna-close', 'text-nergal-b', 'The Anuna and a Fragmentary Doxology',
    'The Anuna gods step forward near the end of the hymn, but the following language is badly broken. ETCSL marks five lines of the final unit as fragmentary before readable traces again refer to a son of Enlil, Lugal-era, and conclude that praising the addressed deity is sweet. The ending still functions as praise, but its damaged state prevents a secure reconstruction of the missing sequence.',
    ['claim-nergal-b-anuna-close', 'claim-nergal-b-preservation']),

  cs('cs-nergal-b-text-why-matters', 'text-nergal-b', 'Why It Matters — and What the Gaps Require Us Not to Claim',
    'Nergal B is valuable because a very short hymn gathers several important aspects of Nergal into one surviving composition: sonship from Enlil, the Mešlamta-ea name, storm-like warfare, divine powers, kingship, fate, underworld language, and acclamation by other divine figures. At the same time, it is a fragmentary praise text preserved through a limited manuscript base. It should not be treated as a full biography of Nergal, merged automatically with Nergal C, or used to import the later Nergal-and-Ereshkigal narrative into places where this hymn does not say it.',
    ['claim-nergal-b-preservation', 'claim-nergal-b-warrior', 'claim-nergal-b-divine-powers-heaven', 'claim-nergal-b-kingship-netherworld']),

  // ---------------- NINURTA AND THE TURTLE ----------------
  cs('cs-ninurta-turtle-text-overview', 'text-ninurta-turtle', 'What Is This Text?',
    'Ninurta and the Turtle is a fragmentary Sumerian literary composition built around a reversal of heroic expectation. Ninurta has already defeated the Anzud bird, but the surviving episode does not simply celebrate that victory. The text moves from the return of the Tablet of Destinies and other divine powers to the abzu, through Enki’s extravagant praise of Ninurta, into the hero’s secret dissatisfaction, aggression, and humiliating defeat by a creature Enki fashions from clay.',
    ['claim-ninurta-turtle-anzud-tablet', 'claim-ninurta-turtle-enki-honors', 'claim-ninurta-turtle-ambition']),

  cs('cs-ninurta-turtle-text-preservation', 'text-ninurta-turtle', 'A Fragmentary Composition Preserved in Several Witnesses',
    'The text survives imperfectly. ETCSL presents a broken Segment A, then a more continuous Segment B of sixty numbered lines, after which an unknown number of lines are missing. Its bibliography lists several cuneiform witnesses rather than one complete tablet. That means the surviving story has a recoverable central sequence but neither its full opening nor its complete ending, and those gaps should remain visible in any reconstruction.',
    ['claim-ninurta-turtle-preservation']),

  cs('cs-ninurta-turtle-text-tablet-destinies', 'text-ninurta-turtle', 'The Anzud Chick and the Tablet of Destinies',
    'At the beginning of the better-preserved segment, the Anzud chick says that divine powers, a divine plan, and the Tablet of Destinies have returned to the abzu and that he has been stripped of those powers. The passage ties Ninurta’s earlier victory over Anzud directly to Enki’s domain: the cosmic objects do not simply become Ninurta’s permanent possessions but return to the abzu.',
    ['claim-ninurta-turtle-anzud-tablet']),

  cs('cs-ninurta-turtle-text-enki-honors', 'text-ninurta-turtle', 'Enki Welcomes and Honors the Hero',
    'The Anzud chick leads Ninurta to Enki, who initially responds with delight rather than hostility. Enki honors Ninurta for capturing the bird and imagines a lasting public memory of the victory: Ninurta will keep his foot on the bird’s neck, receive recognition from the great gods, command the favor of his father Enlil, and enjoy continuing tribute. The scene makes Ninurta’s later rebellion more striking because the conflict begins after he has already been lavishly praised.',
    ['claim-ninurta-turtle-enki-honors']),

  cs('cs-ninurta-turtle-text-unsatisfied', 'text-ninurta-turtle', 'The Reward Is Not Enough',
    'The poem then turns sharply. Ninurta is secretly unhappy with Enki’s promises. He darkens like a storm, contemplates greater deeds, and becomes inwardly rebellious. The text therefore does not present the turtle episode as an arbitrary attack by Enki on an innocent hero: the surviving lines explicitly make Ninurta’s dissatisfaction and escalating ambition part of the causal sequence.',
    ['claim-ninurta-turtle-ambition']),

  cs('cs-ninurta-turtle-text-world-ambition', 'text-ninurta-turtle', 'Ninurta Sets His Sights on the Whole World',
    'The most revealing phrase in the transition says that Ninurta sets his sights on the whole world. What exact action he intends cannot be fully reconstructed because the passage is damaged, but the direction of the episode is clear enough: his ambition has expanded beyond the honor Enki has already granted him. The poem uses that overreach to prepare a reversal in which heroic strength will no longer guarantee control.',
    ['claim-ninurta-turtle-ambition', 'claim-ninurta-turtle-preservation']),

  cs('cs-ninurta-turtle-text-isimud', 'text-ninurta-turtle', 'Enki Reads the Plan and Isimud Blocks the Way',
    'Enki intuitively understands what Ninurta is planning and stirs up a dark flood-storm in the abzu. His minister Isimud then opposes Ninurta by the house. Ninurta refuses to withdraw and raises his hand against the minister. The confrontation is brief but important: it moves the hero’s private ambition into overt defiance inside Enki’s own sphere.',
    ['claim-ninurta-turtle-isimud']),

  cs('cs-ninurta-turtle-text-turtle', 'text-ninurta-turtle', 'A Turtle Fashioned from the Clay of the Abzu',
    'Enki’s answer is deliberately disproportionate to Ninurta’s heroic self-image. Instead of meeting the warrior with a greater warrior, Enki fashions a turtle from the clay of the abzu and stations it in ambush at the gate. The turtle catches Ninurta from behind at the tendon. The scene turns a small, earthbound creature into the instrument that defeats a god famous for overpowering monstrous enemies.',
    ['claim-ninurta-turtle-enki', 'claim-ninurta-turtle-pit']),

  cs('cs-ninurta-turtle-text-pit', 'text-ninurta-turtle', 'The Pit — Heroic Strength Reversed',
    'The turtle scrapes the ground, digs an evil pit, and Ninurta falls into it with the creature. Once trapped, the hero cannot discover how to get out while the turtle continues attacking his feet. This is the composition’s central reversal: the conqueror of Anzud is not defeated in a grand cosmic battle but immobilized at ground level by a turtle and a hole.',
    ['claim-ninurta-turtle-pit', 'claim-ninurta-turtle-enki']),

  cs('cs-ninurta-turtle-text-rebuke-lament', 'text-ninurta-turtle', 'Enki’s Rebuke and Ninmena’s Lament',
    'Enki uses Ninurta’s predicament to puncture his boastfulness. He asks where the hero’s strength has gone and contrasts Ninurta’s destruction in the great mountains with his inability to escape the pit. Ninmena then learns what has happened, tears her clothes, and directs an angry lament toward Enki. The surviving text breaks off after that complaint, so we do not possess the complete resolution.',
    ['claim-ninurta-turtle-rebuke', 'claim-ninurta-turtle-ninmena-lament', 'claim-ninurta-turtle-preservation']),

  cs('cs-ninurta-turtle-text-why-matters', 'text-ninurta-turtle', 'Why It Matters — Heroism, Ambition, and Reversal',
    'Ninurta and the Turtle is important because it complicates the usual image of Ninurta as an unstoppable divine champion. The same hero who captured Anzud and received extraordinary honors can become dissatisfied, overreach, and be humbled by Enki through a deliberately unimpressive creature. Yet the fragmentary state of the composition requires restraint: we should not pretend to know the lost opening, the exact full scope of Ninurta’s plan, or the missing conclusion after Ninmena’s lament.',
    ['claim-ninurta-turtle-anzud-tablet', 'claim-ninurta-turtle-ambition', 'claim-ninurta-turtle-pit', 'claim-ninurta-turtle-preservation']),

  // ---------------- NINURTA'S RETURN TO NIBRU / ANGIM ----------------
  cs('cs-text-ninurta-angim-overview', 'text-ninurta-angim', 'What Is This Text?',
    'Ninurta’s Return to Nibru, commonly called Angim, is a Sumerian šir-gida that stages the warrior god’s triumphant homecoming after mountain warfare. Rather than retelling one battle in continuous narrative form, the composition turns victory into procession, display, ritual recognition, divine self-praise, and blessing. Ninurta returns with captured beings and materials, approaches Enlil’s E-kur in overwhelming splendor, receives praise, recounts his weapons and deeds, and finally proceeds toward his own E-šumeša sanctuary.',
    ['claim-ninurta-angim-return-nippur', 'claim-ninurta-angim-divine-powers', 'claim-ninurta-angim-trophies']),

  cs('cs-text-ninurta-angim-preservation', 'text-ninurta-angim', 'A Large Manuscript Tradition and a 208-Line Composite',
    'Angim is not known from a single complete tablet. ETCSL’s bibliography lists a large body of cuneiform witnesses, especially numerous Nippur manuscripts, from which the 208-line composite text is reconstructed. The breadth of this manuscript tradition distinguishes Angim from shorter or more sparsely preserved Ninurta compositions and shows the importance of the work within Mesopotamian scribal transmission.',
    ['claim-ninurta-angim-manuscripts']),

  cs('cs-text-ninurta-angim-identity-powers', 'text-ninurta-angim', 'Son of Enlil, Mightiest of the Anuna',
    'The opening establishes Ninurta’s status before the triumphal narrative begins. He is son of Enlil, born by Nintur, mighty among the Anuna, confident in strength, and bearer of divine powers associated with heaven, earth, the mountains, and Eridug. The composition therefore frames his martial victory within a much broader claim to divine authority rather than treating him as merely a battlefield specialist.',
    ['claim-ninurta-angim-divine-powers']),

  cs('cs-text-ninurta-angim-trophies', 'text-ninurta-angim', 'The Captured Beings of the Mountains',
    'Angim gives one of its most memorable catalogues in lines 30–40. Ninurta brings forth a Six-headed wild ram, Warrior dragon, Magilum boat, Bison, Mermaid, Gypsum, Strong copper, the Anzud bird, and a Seven-headed serpent. The list deliberately mixes monsters, creatures, materials, and objects. They function together as signs of Ninurta’s mastery over the defeated mountain world and the powers associated with it.',
    ['claim-ninurta-angim-trophies']),

  cs('cs-text-ninurta-angim-chariot', 'text-ninurta-angim', 'A Chariot Turned into a Moving Trophy Display',
    'The trophies are not merely carried home in a heap. The text assigns them to particular parts of Ninurta’s battle chariot: axle, yoke, dust-guard, seat, beam, foot-board, fittings, front guard, and cross-beam. The chariot becomes a ceremonial display of conquest, visually transforming past victories into the god’s public identity as he begins the return journey.',
    ['claim-ninurta-angim-chariot-display']),

  cs('cs-text-ninurta-angim-return', 'text-ninurta-angim', 'The Deluge Returns toward Nibru',
    'Ninurta mounts the battle chariot with divine attendants before and behind him and advances like a deluge. The poem describes him as the storm of the rebellious land, rumbling on the horizon. At Enlil’s command he heads toward E-kur and Nibru, and the scale of his radiance is so great that his return itself becomes potentially dangerous. The triumph is therefore not quiet homecoming but the controlled arrival of divine military force.',
    ['claim-ninurta-angim-return-nippur', 'claim-ninurta-angim-nuska']),

  cs('cs-text-ninurta-angim-nuska', 'text-ninurta-angim', 'Nuska Meets the Warrior before E-kur',
    'Before Ninurta reaches Nibru, Nuska, Enlil’s chancellor, comes out from E-kur to meet him. Nuska praises the warrior but also tells him not to frighten his father in the divine residence. The warning works: Ninurta puts away his whip and goad, leans his mace aside, and enters the temple. Heroic violence is not rejected, but it must be ritually moderated before the victorious son enters Enlil’s sacred space.',
    ['claim-ninurta-angim-nuska']),

  cs('cs-text-ninurta-angim-ekur', 'text-ninurta-angim', 'Booty in E-kur — Enlil and Ninlil Respond',
    'Inside E-kur, Ninurta directs captured animals into the temple and lays out the booty of plundered cities. The Anuna marvel at the display; Enlil himself makes obeisance, and Ninlil addresses Ninurta admiringly as the warrior who struck the mountains and rebellious land. The scene converts military success into divine recognition within the central sanctuary of Ninurta’s father.',
    ['claim-ninurta-angim-ekur-entry']),

  cs('cs-text-ninurta-angim-weapons', 'text-ninurta-angim', 'Ninurta Names His Weapons',
    'Ninurta’s reply expands into a long first-person catalogue of heroic power. He recalls mountain warfare and names a formidable arsenal of maces, nets, axes, serpent-like weapons, bow, quiver, spear, shield, dagger, and other divine arms. The extraordinary names of these weapons are part of the poem’s rhetoric: they turn the god’s equipment into individualized extensions of his destructive and protective power.',
    ['claim-ninurta-angim-weapons']),

  cs('cs-text-ninurta-angim-ritual', 'text-ninurta-angim', 'From Battle Trophies to Ritual Honors',
    'After boasting of his weapons, Ninurta asks that the victory be given formal cultic recognition. Enlil is to receive the trophies and weapons, bathe and purify the arms that carried them, establish a holy dais, set up the heavenly chariot, and make captive rulers bow. Ninurta then identifies himself as the strong one of the mountains and as a divinely chosen power whose kingship should be manifest to the ends of heaven and earth.',
    ['claim-ninurta-angim-ritual-honors']),

  cs('cs-text-ninurta-angim-nibru', 'text-ninurta-angim', 'Ninurta Blesses Nibru',
    'The poem then pivots from conquest to urban blessing. Ninurta asks that his beloved Nibru rise as high as heaven and become pre-eminent among the cities of the gods. He imagines its territory as a freshwater well of Sumer, the Anuna bowing there, birds nesting there, and refugees finding refreshment in its shade. Military victory is thus redirected toward the flourishing and prestige of the sacred city.',
    ['claim-ninurta-angim-nibru-blessing']),

  cs('cs-text-ninurta-angim-eshumesha', 'text-ninurta-angim', 'Procession to E-šumeša and the Royal Blessing',
    'As Ninurta leaves Enlil’s temple, Ninkarnuna prays that he favor Nibru and enter E-šumeša, his beloved temple, where he should speak with his wife Ninnibru and make an enduring favorable pronouncement for the king. Ninurta accepts the prayer, proceeds in procession, and enters E-šumeša. The text therefore ends not simply with a warrior at rest but with divine powers manifested in cult, city, marriage, and royal blessing.',
    ['claim-ninurta-angim-eshumesha', 'claim-ninurta-angim-ninkarnuna-close']),

  cs('cs-text-ninurta-angim-significance', 'text-ninurta-angim', 'Why It Matters — Victory Made Civic and Cultic',
    'Angim is especially important because it shows how Mesopotamian praise literature can transform warfare into sacred order. Monsters and trophies become processional display; dangerous radiance is moderated before E-kur; weapons become objects of ritual recognition; and the victorious god finally blesses Nibru, E-šumeša, and the king. The composition should not be reduced to a catalogue of monsters or read as a literal historical military report. Its central achievement is literary and theological: Ninurta’s conquest is converted into divine prestige, urban prosperity, and cultic legitimacy.',
    ['claim-ninurta-angim-manuscripts', 'claim-ninurta-angim-return-nippur', 'claim-ninurta-angim-nibru-blessing', 'claim-ninurta-angim-ninkarnuna-close']),

  // ---------------- ASHURNASIRPAL II 001 ----------------
  cs('cs-text-ashurnasirpal-ii-001-overview', 'text-ashurnasirpal-ii-001-ninurta', 'What Is This Text?',
    "Ashurnasirpal II 001, catalogued as RIAo Q004455, is a Neo-Assyrian royal inscription from the reign of Ashurnasirpal II. For the Ninurta profile it is especially valuable because the same inscription joins three kinds of evidence: martial titles and residence at Kalhu, genealogical language naming Ninurta as offspring of Nudimmud, and royal investment in a temple, cult statue, festivals, and dais.",
    ['claim-ninurta-kalhu-warrior-titles', 'claim-ninurta-kalhu-nudimmud-genealogy', 'claim-ninurta-kalhu-temple-statue']),

  cs('cs-text-ashurnasirpal-ii-001-warrior', 'text-ashurnasirpal-ii-001-ninurta', 'Supreme Warrior and King of Battle',
    "In column i Ninurta is addressed as a supreme warrior and king of battle, and his attack is described as unequalled. This is royal praise language, but it is still direct ancient evidence for the way Ninurta could be presented within Neo-Assyrian kingship and warfare.",
    ['claim-ninurta-kalhu-warrior-titles']),

  cs('cs-text-ashurnasirpal-ii-001-kalhu', 'text-ashurnasirpal-ii-001-ninurta', 'The God Who Dwells in Kalhu',
    "The same opening explicitly calls Ninurta the god who dwells in Kalhu. That wording anchors the martial praise in a particular cultic center rather than leaving it as a generic description of a warrior deity. The inscription therefore connects divine military power with the royal city of Kalhu.",
    ['claim-ninurta-kalhu-warrior-titles', 'claim-ninurta-kalhu-temple-statue']),

  cs('cs-text-ashurnasirpal-ii-001-genealogy', 'text-ashurnasirpal-ii-001-ninurta', 'Eldest Son and Offspring of Nudimmud',
    "Column i also calls Ninurta an eldest son who commands battle and describes him as offspring of Nudimmud. This genealogy should be reported as the wording of this inscription. Other Mesopotamian compositions can use different parentage language, so the evidence is strongest when each tradition remains tied to its own source.",
    ['claim-ninurta-kalhu-nudimmud-genealogy']),

  cs('cs-text-ashurnasirpal-ii-001-temple-cult', 'text-ashurnasirpal-ii-001-ninurta', 'Temple, Cult Statue, Festivals, and Dais',
    "In column ii Ashurnasirpal II records founding Ninurta's temple at Kalhu, making a new cult statue, appointing festivals, and installing the god's dais. These are concrete acts of royal cult sponsorship: the inscription does not merely praise Ninurta in abstract terms but links him to a temple institution, divine image, festival observance, and ceremonial furnishing.",
    ['claim-ninurta-kalhu-temple-statue']),

  cs('cs-text-ashurnasirpal-ii-001-significance', 'text-ashurnasirpal-ii-001-ninurta', 'Why It Matters - Ninurta in Neo-Assyrian Royal Cult',
    "Ashurnasirpal II 001 provides a different type of evidence from the Sumerian literary compositions elsewhere in the Atlas. Here Ninurta appears inside a Neo-Assyrian royal inscription: warrior ideology, residence at Kalhu, genealogical language, and royal cult building are brought together in one historical source. The inscription is therefore strongest as evidence for a particular royal and cultic setting rather than as a timeless summary of every tradition about Ninurta.",
    ['claim-ninurta-kalhu-warrior-titles', 'claim-ninurta-kalhu-nudimmud-genealogy', 'claim-ninurta-kalhu-temple-statue']),
];