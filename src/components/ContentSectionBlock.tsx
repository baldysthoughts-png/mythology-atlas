import type { ContentSection } from '../data/types';
import { claimsById, sourcesById, getEntity } from '../data';
import { EvidenceBadge } from './Badges';
import { Link } from 'react-router-dom';
import { entityHref } from '../data';

export function ContentSectionBlock({ section }: { section: ContentSection }) {
  const linkedClaims = section.claimIds.map((id) => claimsById[id]).filter(Boolean);

  return (
    <section className="mb-8 w-full">
      <h3 className="font-mono-label mb-2 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {section.sectionLabel}
      </h3>
      <p className="font-display text-[17px] leading-relaxed" style={{ color: 'var(--ink)' }}>
        {section.prose}
      </p>

      {linkedClaims.length > 0 && (
        <div className="mt-4 w-full max-w-full space-y-3 border-l pl-4" style={{ borderColor: 'var(--rule)' }}>
          {linkedClaims.map((claim) => (
            <div key={claim.id} className="flex flex-wrap items-start gap-2.5">
              <EvidenceBadge classification={claim.evidenceClassification} />
              <span className="w-full text-xs leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                {claim.statement}
                {claim.evidenceLinks.length > 0 && (
                  <>
                    {' '}
                    <span style={{ color: 'var(--ink-faint)' }}>
                      —{' '}
                      {claim.evidenceLinks
                        .map((link) => {
                          const src = sourcesById[link.sourceId];
                          if (!src) return null;
                          const label =
                            link.evidenceRole === 'OriginOfClaim'
                              ? 'Origin of claim'
                              : src.sourceCategory === 'PrimaryAncientText'
                                ? 'Ancient source'
                                : link.evidenceRole === 'Contextualizes'
                                  ? 'Edition/reference'
                                  : 'Scholarly source';
                          return `${label}: ${src.citation}${link.locator ? `, ${link.locator}` : ''}`;
                        })
                        .filter(Boolean)
                        .join('; ')}
                    </span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export function RelatedEntityList({ title, ids }: { title: string; ids: string[] | undefined }) {
  const entities = (ids ?? []).map((id) => getEntity(id)).filter(Boolean) as NonNullable<ReturnType<typeof getEntity>>[];
  if (entities.length === 0) return null;
  return (
    <section className="mb-8">
      <h3 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {entities.map((e) => (
          <Link
            key={e.id}
            to={entityHref(e)}
            className="focus-ring rounded-full px-3.5 py-1.5 text-sm transition-colors"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
          >
            {e.canonicalName}
          </Link>
        ))}
      </div>
    </section>
  );
}
