import { allEntities, entityTypeBadgeLabel } from '../data';
import type { AnyEntity, EntityType } from '../data/types';

export interface SearchResult {
  entity: AnyEntity;
  matchedOn: 'name' | 'alias';
  matchedText: string;
}

const GROUP_ORDER: EntityType[] = [
  'Deity',
  'DivineGroup',
  'Civilization',
  'Story',
  'AncientText',
  'Topic',
  'Place',
];

function norm(s: string) {
  return s.trim().toLowerCase();
}

export function searchEntities(query: string): SearchResult[] {
  const q = norm(query);
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const entity of Object.values(allEntities)) {
    const name = norm(entity.canonicalName);
    if (name.includes(q)) {
      results.push({ entity, matchedOn: 'name', matchedText: entity.canonicalName });
      continue;
    }
    const aliases = (entity as any).alternativeNames as string[] | undefined;
    if (aliases) {
      const hit = aliases.find((a) => norm(a).includes(q));
      if (hit) {
        results.push({ entity, matchedOn: 'alias', matchedText: hit });
        continue;
      }
    }
  }

  // Grouped, stable order: entity type group order, then alphabetical.
  results.sort((a, b) => {
    const ga = GROUP_ORDER.indexOf(a.entity.entityType);
    const gb = GROUP_ORDER.indexOf(b.entity.entityType);
    if (ga !== gb) return ga - gb;
    return a.entity.canonicalName.localeCompare(b.entity.canonicalName);
  });

  return results;
}

export function groupResults(results: SearchResult[]) {
  const groups = new Map<EntityType, SearchResult[]>();
  for (const r of results) {
    if (!groups.has(r.entity.entityType)) groups.set(r.entity.entityType, []);
    groups.get(r.entity.entityType)!.push(r);
  }
  return Array.from(groups.entries()).map(([type, items]) => ({
    type,
    label: entityTypeBadgeLabel[type],
    items,
  }));
}
