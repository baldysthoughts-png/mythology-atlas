import { civilizations } from './civilizations';
import { deities } from './deities';
import { divineGroups } from './divineGroups';
import { stories } from './stories';
import { texts } from './texts';
import { topics } from './topics';
import { places } from './places';
import { sources } from './sources';
import { claims as baseClaims, relationships, contentSections as baseContentSections } from './evidence';
import { expandedClaims, expandedContentSections } from './evidenceExpansion';
import { correctionClaims, correctionContentSections } from './corrections';
import type { AnyEntity, EntityType } from './types';

export const claims = [...baseClaims, ...expandedClaims, ...correctionClaims];
export const contentSections = [...baseContentSections, ...expandedContentSections, ...correctionContentSections];

// Single map of every entity, keyed by id. Every screen (Explore, Library,
// Search, Related Figures, ...) looks entities up here by id — nothing is
// ever duplicated per-route. This is the direct implementation of the
// v0.4 "one Enki record" requirement.
export const allEntities: Record<string, AnyEntity> = {};
for (const e of [...civilizations, ...deities, ...divineGroups, ...stories, ...texts, ...topics, ...places]) {
  allEntities[e.id] = e;
}

export const claimsById = Object.fromEntries(claims.map((c) => [c.id, c]));
export const sourcesById = Object.fromEntries(sources.map((s) => [s.id, s]));
export const contentSectionsById = Object.fromEntries(contentSections.map((cs) => [cs.id, cs]));

export function getEntity<T extends AnyEntity = AnyEntity>(id: string): T | undefined {
  return allEntities[id] as T | undefined;
}

export function getContentSections(ids: string[] | undefined) {
  return (ids ?? []).map((id) => contentSectionsById[id]).filter(Boolean);
}

export function getRelationshipsFor(entityId: string) {
  return relationships.filter((r) => r.fromEntityId === entityId || r.toEntityId === entityId);
}

export const entityTypeBadgeLabel: Record<EntityType, string> = {
  Civilization: 'CIVILIZATION',
  Deity: 'DEITY',
  DivineGroup: 'DIVINE GROUP',
  Story: 'STORY',
  AncientText: 'ANCIENT TEXT',
  Topic: 'TOPIC',
  Place: 'ANCIENT CITY',
  Source: 'SOURCE',
};

export const entityTypeRoute: Record<EntityType, string> = {
  Civilization: '/civilization',
  Deity: '/deity',
  DivineGroup: '/divine-group',
  Story: '/story',
  AncientText: '/text',
  Topic: '/topic',
  Place: '/place',
  Source: '/source',
};

export function entityHref(e: Pick<AnyEntity, 'entityType' | 'id'>): string {
  return `${entityTypeRoute[e.entityType]}/${e.id}`;
}

export {
  civilizations,
  deities,
  divineGroups,
  stories,
  texts,
  topics,
  places,
  sources,
  relationships,
};
