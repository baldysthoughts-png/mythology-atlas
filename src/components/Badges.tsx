import type { ClaimEvidenceClassification, EntityType, RelationshipCertainty } from '../data/types';
import { evidenceStyles, relationshipCertaintyStyles } from '../lib/evidenceStyles';
import { entityTypeBadgeLabel } from '../data';

export function EvidenceBadge({ classification }: { classification: ClaimEvidenceClassification }) {
  const style = evidenceStyles[classification];
  return (
    <span
      className="font-mono-label inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] uppercase"
      style={{
        color: style.color,
        border: `1px ${style.border} ${style.color}`,
        background: 'color-mix(in srgb, ' + style.color + ' 10%, transparent)',
      }}
    >
      {style.label}
    </span>
  );
}

export function RelationshipCertaintyBadge({ certainty }: { certainty: RelationshipCertainty }) {
  const style = relationshipCertaintyStyles[certainty];
  return (
    <span
      className="font-mono-label inline-flex items-center gap-1.5 rounded-sm px-1.5 py-0.5 text-[9px] font-medium tracking-[0.1em] uppercase"
      style={{
        color: style.color,
        border: `1px ${style.border} ${style.color}`,
      }}
    >
      {style.label}
    </span>
  );
}

export function EntityTypeBadge({ type }: { type: EntityType }) {
  return (
    <span
      className="font-mono-label inline-block rounded-sm px-2 py-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase"
      style={{
        color: 'var(--ink-dim)',
        border: '1px solid var(--rule-strong)',
      }}
    >
      {entityTypeBadgeLabel[type]}
    </span>
  );
}
