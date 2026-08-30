import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getEntity, getContentSections } from '../data';
import type { Civilization } from '../data/types';
import { EntityTypeBadge } from '../components/Badges';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { RelatedEntityList, ContentSectionBlock } from '../components/ContentSectionBlock';
import { useRecentlyViewed } from '../lib/recentlyViewed';

export function CivilizationProfilePage() {
  const { id } = useParams();
  const civ = id ? getEntity<Civilization>(id) : undefined;
  const { record } = useRecentlyViewed();

  useEffect(() => {
    if (civ) record({ id: civ.id, entityType: civ.entityType, name: civ.canonicalName });
  }, [civ, record]);

  if (!civ) return <Navigate to="/explore" replace />;

  const sections = getContentSections(civ.contentSectionIds);

  return (
    <div className="space-y-8">
      <div>
        <ImagePlaceholder label={civ.canonicalName} aspect="aspect-[16/9]" />
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-medium uppercase tracking-wide" style={{ color: 'var(--ink)' }}>
              {civ.canonicalName}
            </h1>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
              {civ.timePeriod} · {civ.region}
            </p>
          </div>
          <EntityTypeBadge type="Civilization" />
        </div>
      </div>

      <section>
        <h2 className="font-mono-label mb-2 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Overview
        </h2>
        <p className="font-display text-[17px] leading-relaxed" style={{ color: 'var(--ink)' }}>
          {civ.overview}
        </p>
      </section>

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      <RelatedEntityList title="Major Cities" ids={civ.majorCityIds} />
      <RelatedEntityList title="Major Deities" ids={civ.majorDeityIds} />
      {civ.importantMythologicalFigureIds && civ.importantMythologicalFigureIds.length > 0 && (
        <RelatedEntityList title="Important Mythological Figures (Not Civic Cult Deities)" ids={civ.importantMythologicalFigureIds} />
      )}
      <RelatedEntityList title="Important Texts" ids={civ.majorTextIds} />
      <RelatedEntityList title="Topics" ids={civ.topicIds} />

      {civ.relatedCivilizationIds.length > 0 && (
        <section>
          <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            Related Civilizations
          </h2>
          <div className="flex flex-wrap gap-2">
            {civ.relatedCivilizationIds.map((rid) => {
              const rel = getEntity<Civilization>(rid);
              if (!rel) return null;
              return (
                <Link
                  key={rid}
                  to={`/civilization/${rid}`}
                  className="focus-ring rounded-full px-3.5 py-1.5 text-sm"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
                >
                  {rel.canonicalName}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
