import { EntityCard } from '../components/EntityCard';
import type { AnyEntity } from '../data/types';

export function EntityListPage({ title, entities, emptyText }: { title: string; entities: AnyEntity[]; emptyText?: string }) {
  return (
    <div className="space-y-3">
      <h2 className="font-mono-label text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {title} ({entities.length})
      </h2>
      {entities.length === 0 ? (
        <p className="text-sm" style={{ color: 'var(--ink-faint)' }}>
          {emptyText ?? 'No entries yet.'}
        </p>
      ) : (
        <div className="space-y-2">
          {entities.map((e) => (
            <EntityCard key={e.id} entity={e} subtitle={subtitleFor(e)} />
          ))}
        </div>
      )}
    </div>
  );
}

function subtitleFor(e: AnyEntity): string | undefined {
  switch (e.entityType) {
    case 'Deity':
      return (e as any).cultures?.join(' / ');
    case 'DivineGroup':
      return (e as any).cultures?.join(' / ');
    case 'Story':
      return (e as any).summary;
    case 'AncientText':
      return (e as any).language;
    case 'Topic':
      return (e as any).overview?.slice(0, 90) + '…';
    case 'Civilization':
      return (e as any).timePeriod;
    default:
      return undefined;
  }
}
