import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getEntity, getContentSections, getRelationshipsFor, getEntity as getEntityGeneric } from '../data';
import type { Deity } from '../data/types';
import { EntityTypeBadge, RelationshipCertaintyBadge } from '../components/Badges';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ContentSectionBlock, RelatedEntityList } from '../components/ContentSectionBlock';
import { useRecentlyViewed } from '../lib/recentlyViewed';
import { Link } from 'react-router-dom';
import { entityHref } from '../data';

export function DeityProfilePage() {
  const { id } = useParams();
  const deity = id ? getEntity<Deity>(id) : undefined;
  const { record } = useRecentlyViewed();

  useEffect(() => {
    if (deity) record({ id: deity.id, entityType: deity.entityType, name: deity.canonicalName });
  }, [deity, record]);

  if (!deity) return <Navigate to="/library/deities" replace />;

  const sections = getContentSections(deity.contentSectionIds);
  const cultCenter = deity.primaryCultCenterId ? getEntityGeneric(deity.primaryCultCenterId) : undefined;
  const relationships = getRelationshipsFor(deity.id);
  const dedicatedArtwork =
    deity.id === 'deity-enki'
      ? '/mythology-atlas/enki-card.png'
      : deity.id === 'deity-an'
        ? '/mythology-atlas/an-card.png'
      : deity.id === 'deity-inanna'
        ? '/mythology-atlas/inanna-card.png'
        : deity.id === 'deity-utu'
          ? '/mythology-atlas/utu-card.png'
          : deity.id === 'deity-ninhursag'
            ? '/mythology-atlas/ninhursag-card.png'
            : deity.id === 'deity-nanna'
              ? '/mythology-atlas/nanna-card.png'
              : deity.id === 'deity-ningal'
                ? '/mythology-atlas/ningal-card.png'
                : deity.id === 'deity-enlil'
                ? '/mythology-atlas/enlil-card.png'
                : deity.id === 'deity-ereshkigal'
                  ? '/mythology-atlas/ereshkigal-card.png'
                  : deity.id === 'deity-nergal'
                    ? '/mythology-atlas/nergal-card.png'
                    : deity.id === 'deity-marduk'
                      ? '/mythology-atlas/marduk-card.png'
                      : deity.id === 'deity-tiamat'
                        ? '/mythology-atlas/tiamat-card.png'
                        : deity.id === 'deity-dumuzi'
                          ? '/mythology-atlas/dumuzi-card.png'
                          : deity.id === 'deity-ninurta'
                            ? '/mythology-atlas/ninurta-card.png'
                            : deity.id === 'deity-nabu'
                              ? '/mythology-atlas/nabu-card.png'
                              : deity.id === 'deity-ashur'
                                ? '/mythology-atlas/ashur-card.png'
                  : undefined;
  // Some deities now have a richer, prose-and-claims "Roles and Domains" / "Symbols
  // and Iconography" ContentSection from the content-depth pass. Where that exists,
  // suppress the older keyword-tag block below so the page doesn't show both a rich
  // and a legacy version of the same section.
  const sectionLabels = new Set(sections.map((s) => s.sectionLabel));
  const hasRichRoles = sectionLabels.has('Roles and Domains') || sectionLabels.has('Roles and Status');
  const hasRichSymbols = sectionLabels.has('Symbols and Iconography');
  const hasAncientSourcesSection = sectionLabels.has('Ancient Sources');

  return (
    <div className="mx-auto max-w-[72rem]">
      <div className="space-y-6">
        <div>
          {dedicatedArtwork ? (
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-md border"
              style={{ borderColor: 'var(--rule)', background: 'var(--bg-card)' }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(9,11,15,0.12) 0%, rgba(9,11,15,0.18) 100%)' }}
              />
              <img
                src={dedicatedArtwork}
                alt={`${deity.canonicalName} deity artwork`}
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          ) : (
            <ImagePlaceholder label={`${deity.canonicalName} — deity artwork`} aspect="aspect-[4/3]" />
          )}
          <div className="mt-5 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl font-medium leading-tight sm:text-4xl" style={{ color: 'var(--ink)' }}>
                {deity.canonicalName}
              </h1>
              {deity.alternativeNames && deity.alternativeNames.length > 0 && (
                <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
                  also known as {deity.alternativeNames.join(', ')}
                </p>
              )}
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
                {deity.cultures.join(' / ')}
                {cultCenter ? ` · primary cult center: ${cultCenter.canonicalName}` : ''}
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <EntityTypeBadge type="Deity" />
            </div>
          </div>
        </div>

        <div className="deity-reading-column">
          {sections.map((s) => (
            <ContentSectionBlock key={s.id} section={s} />
          ))}

          {!hasRichRoles && deity.roles.length > 0 && (
            <section>
              <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                Roles / Domains
              </h2>
              <div className="flex flex-wrap gap-2">
                {deity.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)', color: 'var(--ink-dim)' }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </section>
          )}

          {!hasRichSymbols && deity.symbols && deity.symbols.length > 0 && (
            <section>
              <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                Symbols
              </h2>
              <p className="text-sm" style={{ color: 'var(--ink-dim)' }}>
                {deity.symbols.join(' · ')}
              </p>
            </section>
          )}

          <RelatedEntityList title="Associated Places" ids={deity.associatedPlaceIds} />
          <RelatedEntityList title="Stories" ids={deity.associatedStoryIds} />
          {!hasAncientSourcesSection && <RelatedEntityList title="Ancient Sources" ids={deity.ancientTextIds} />}

          {relationships.length > 0 && (
            <section>
              <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
                Documented Relationships
              </h2>
              <div className="space-y-2">
                {relationships.map((r) => {
                  const otherId = r.fromEntityId === deity.id ? r.toEntityId : r.fromEntityId;
                  const other = getEntityGeneric(otherId);
                  if (!other) return null;
                  return (
                    <div
                      key={r.id}
                      className="flex flex-wrap items-center gap-2 rounded-md p-3"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
                    >
                      <span className="text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="font-mono-label text-[10px] uppercase" style={{ color: 'var(--ink-faint)' }}>
                          {r.relationType}
                        </span>{' '}
                        <Link to={entityHref(other)} className="underline decoration-dotted underline-offset-2">
                          {other.canonicalName}
                        </Link>
                      </span>
                      <RelationshipCertaintyBadge certainty={r.certaintyTier} />
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related Figures — the core "hop" interaction the whole navigation model is built on */}
          <RelatedEntityList title="Related Figures" ids={deity.relatedFigureIds} />
        </div>
      </div>
    </div>
  );
}
