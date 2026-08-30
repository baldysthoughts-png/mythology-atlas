import type { ClaimEvidenceClassification, RelationshipCertainty } from '../data/types';

export interface EvidenceStyle {
  label: string;
  color: string; // CSS var name
  border: 'solid' | 'dashed' | 'dotted';
}

export const evidenceStyles: Record<ClaimEvidenceClassification, EvidenceStyle> = {
  AncientSource: { label: 'ANCIENT SOURCE', color: 'var(--gold)', border: 'solid' },
  ArchaeologicalEvidence: { label: 'ARCHAEOLOGICAL EVIDENCE', color: 'var(--copper)', border: 'solid' },
  ScholarlyConsensus: { label: 'SCHOLARLY CONSENSUS', color: 'var(--verdigris)', border: 'solid' },
  ScholarlyInterpretation: { label: 'SCHOLARLY INTERPRETATION', color: 'var(--slate-blue)', border: 'solid' },
  ScholarlyDebate: { label: 'SCHOLARLY DEBATE', color: 'var(--amber)', border: 'dashed' },
  LaterTradition: { label: 'LATER TRADITION', color: 'var(--violet)', border: 'solid' },
  ModernInterpretation: { label: 'MODERN INTERPRETATION', color: 'var(--teal-gray)', border: 'solid' },
  ModernSpeculative: { label: 'MODERN SPECULATIVE', color: 'var(--rust)', border: 'dashed' },
  Unattested: { label: 'UNATTESTED', color: 'var(--stone)', border: 'dotted' },
};

export const relationshipCertaintyStyles: Record<RelationshipCertainty, EvidenceStyle> = {
  Documented: { label: 'DOCUMENTED', color: 'var(--gold)', border: 'solid' },
  ArchaeologicallyAttested: { label: 'ARCHAEOLOGICALLY ATTESTED', color: 'var(--copper)', border: 'solid' },
  WellEstablished: { label: 'WELL ESTABLISHED', color: 'var(--verdigris)', border: 'solid' },
  Proposed: { label: 'PROPOSED', color: 'var(--slate-blue)', border: 'solid' },
  Disputed: { label: 'DISPUTED', color: 'var(--amber)', border: 'dashed' },
  Indirect: { label: 'INDIRECT', color: 'var(--violet)', border: 'dashed' },
  Speculative: { label: 'SPECULATIVE', color: 'var(--rust)', border: 'dashed' },
};
