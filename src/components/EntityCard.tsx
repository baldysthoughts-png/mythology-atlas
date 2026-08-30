import { Link } from 'react-router-dom';
import type { AnyEntity } from '../data/types';
import { entityHref } from '../data';
import { EntityTypeBadge } from './Badges';

export function EntityCard({ entity, subtitle }: { entity: AnyEntity; subtitle?: string }) {
  return (
    <Link
      to={entityHref(entity)}
      className="focus-ring group flex items-center justify-between gap-3 rounded-md px-4 py-3 transition-colors"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
    >
      <div className="min-w-0">
        <div className="font-display text-base leading-tight" style={{ color: 'var(--ink)' }}>
          {entity.canonicalName}
          {entity.alternativeNames && entity.alternativeNames.length > 0 && (
            <span className="ml-1.5 text-sm" style={{ color: 'var(--ink-faint)' }}>
              / {entity.alternativeNames.join(', ')}
            </span>
          )}
        </div>
        {subtitle && (
          <div className="mt-0.5 truncate text-xs" style={{ color: 'var(--ink-dim)' }}>
            {subtitle}
          </div>
        )}
      </div>
      <EntityTypeBadge type={entity.entityType} />
    </Link>
  );
}

export function EntityChip({ entity }: { entity: AnyEntity }) {
  return (
    <Link
      to={entityHref(entity)}
      className="focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm transition-colors"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
    >
      <span className="font-display">{entity.canonicalName}</span>
    </Link>
  );
}
