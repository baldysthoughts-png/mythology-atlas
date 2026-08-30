import type { DivineGroup } from './types';

export const divineGroups: DivineGroup[] = [
  {
    id: 'group-anunnaki',
    entityType: 'DivineGroup',
    canonicalName: 'Anunnaki',
    slug: 'anunnaki',
    status: 'published',
    cultures: ['Sumerian', 'Akkadian', 'Babylonian', 'Assyrian'],
    membershipVaries: true,
    membershipWarning:
      'Surviving texts do not present one single, permanent list of Anunnaki members. Which deities are counted among the Anunnaki — and what role the term describes — shifts across Sumerian, Akkadian, Babylonian, and Assyrian sources and across different periods.',
    memberDeityIds: ['deity-an', 'deity-enki', 'deity-enlil', 'deity-ninhursag'],
    contentSectionIds: [
      'cs-anunnaki-overview',
      'cs-anunnaki-etymology',
      'cs-anunnaki-earliest',
      'cs-anunnaki-sumerian-usage',
      'cs-anunnaki-akkadian-usage',
      'cs-anunnaki-babylonian-usage',
      'cs-anunnaki-assyrian-usage',
      'cs-anunnaki-assembly-context',
      'cs-anunnaki-underworld-later',
      'cs-anunnaki-membership-examples',
      'cs-anunnaki-what-sources-say',
      'cs-anunnaki-what-sources-dont-say',
      'cs-anunnaki-archaeological',
      'cs-anunnaki-scholarly',
      'cs-anunnaki-debated',
      'cs-anunnaki-modern',
      'cs-anunnaki-ancient-astronaut-origin',
      'cs-anunnaki-evidence-vs-claim',
      'cs-anunnaki-what-we-know',
      'cs-anunnaki-why-matters',
    ],
  },
];
