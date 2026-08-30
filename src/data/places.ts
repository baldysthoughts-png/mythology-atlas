import type { Place } from './types';

export const places: Place[] = [
  { id: 'place-ur', entityType: 'Place', canonicalName: 'Ur', slug: 'ur', status: 'published', placeType: 'city', associatedDeityIds: ['deity-nanna'] , contentSectionIds: ['cs-place-ur-context'] },
  { id: 'place-uruk', entityType: 'Place', canonicalName: 'Uruk', slug: 'uruk', status: 'published', placeType: 'city', associatedDeityIds: ['deity-inanna', 'deity-an'] , contentSectionIds: ['cs-place-uruk-context'] },
  { id: 'place-eridu', entityType: 'Place', canonicalName: 'Eridu', slug: 'eridu', status: 'published', placeType: 'city', associatedDeityIds: ['deity-enki'], historicalNotes: 'Traditionally regarded in Sumerian literature as one of the oldest cities and the primary cult center of Enki.' , contentSectionIds: ['cs-place-eridu-context'] },
  { id: 'place-nippur', entityType: 'Place', canonicalName: 'Nippur', slug: 'nippur', status: 'published', placeType: 'city', associatedDeityIds: ['deity-enlil'] , contentSectionIds: ['cs-place-nippur-context'] },
  { id: 'place-lagash', entityType: 'Place', canonicalName: 'Lagash', slug: 'lagash', status: 'published', placeType: 'city', associatedDeityIds: [] },
  { id: 'place-kish', entityType: 'Place', canonicalName: 'Kish', slug: 'kish', status: 'published', placeType: 'city', associatedDeityIds: [] },
  { id: 'place-babylon', entityType: 'Place', canonicalName: 'Babylon', slug: 'babylon-city', status: 'published', placeType: 'city', associatedDeityIds: ['deity-marduk'] , contentSectionIds: ['cs-place-babylon-context'] },
  { id: 'place-nineveh', entityType: 'Place', canonicalName: 'Nineveh', slug: 'nineveh', status: 'published', placeType: 'city', associatedDeityIds: [] , contentSectionIds: ['cs-place-nineveh-context'] },
  { id: 'place-ashur', entityType: 'Place', canonicalName: 'Ashur', slug: 'ashur', status: 'published', placeType: 'city', associatedDeityIds: ['deity-ashur'] , contentSectionIds: ['cs-place-ashur-context'] },
  { id: 'place-kutha', entityType: 'Place', canonicalName: 'Kutha', slug: 'kutha', status: 'published', placeType: 'city', associatedDeityIds: ['deity-nergal'] },
  { id: 'place-borsippa', entityType: 'Place', canonicalName: 'Borsippa', slug: 'borsippa', status: 'published', placeType: 'city', associatedDeityIds: ['deity-nabu'] },
];
