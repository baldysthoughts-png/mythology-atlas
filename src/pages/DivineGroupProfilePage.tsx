import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getEntity, getContentSections } from '../data';
import type { DivineGroup } from '../data/types';
import { EntityTypeBadge } from '../components/Badges';

import { ContentSectionBlock, RelatedEntityList } from '../components/ContentSectionBlock';
import { useRecentlyViewed } from '../lib/recentlyViewed';

export function DivineGroupProfilePage() {
  const { id } = useParams();
  const group = id ? getEntity<DivineGroup>(id) : undefined;
  const { record } = useRecentlyViewed();

  useEffect(() => {
    if (group) record({ id: group.id, entityType: group.entityType, name: group.canonicalName });
  }, [group, record]);

  if (!group) return <Navigate to="/library/divine-groups" replace />;

  const sections = getContentSections(group.contentSectionIds);

  return (
    <div className="space-y-8">
      <div>
        <div
  className="relative aspect-[4/3] w-full overflow-hidden rounded-md"
  style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
>
  <img
    src="/mythology-atlas/featured-anunnaki.png"
    alt="Anunnaki divine assembly"
    className="h-full w-full object-cover"
    style={{ objectPosition: 'center' }}
  />
</div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <h1 className="font-display text-3xl font-medium" style={{ color: 'var(--ink)' }}>
            {group.canonicalName}
          </h1>
          <EntityTypeBadge type="DivineGroup" />
        </div>
        <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          {group.cultures.join(' / ')}
        </p>
      </div>

      {group.membershipVaries && (
        <section
          className="rounded-md p-4"
          style={{ background: 'var(--bg-elevated)', border: '1px dashed var(--amber)' }}
        >
          <h2 className="font-mono-label mb-1.5 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--amber)' }}>
            Membership Varies by Text and Period
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
            {group.membershipWarning}
          </p>
        </section>
      )}

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      <RelatedEntityList title="Members Attested in at Least One Source" ids={group.memberDeityIds} />
    </div>
  );
}
