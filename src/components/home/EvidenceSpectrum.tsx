import { EvidenceBadge } from '../Badges';
import type { ClaimEvidenceClassification } from '../../data/types';

const SPECTRUM: { classification: ClaimEvidenceClassification; note: string }[] = [
  { classification: 'AncientSource', note: 'Directly stated in a surviving ancient text' },
  { classification: 'ArchaeologicalEvidence', note: 'Attested by an artifact, inscription, or excavation' },
  { classification: 'ScholarlyConsensus', note: 'Broadly accepted among specialists' },
  { classification: 'ScholarlyInterpretation', note: 'A scholarly reading without full consensus' },
  { classification: 'ScholarlyDebate', note: 'Active, specific academic disagreement' },
  { classification: 'LaterTradition', note: 'Develops well after the ancient material itself' },
  { classification: 'ModernSpeculative', note: 'A modern claim without broad academic support' },
];

export function EvidenceSpectrum() {
  return (
    <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
      {SPECTRUM.map((item) => (
        <div key={item.classification} className="flex flex-col items-start gap-1.5">
          <EvidenceBadge classification={item.classification} />
          <p className="text-xs leading-snug" style={{ color: 'var(--ink-dim)' }}>
            {item.note}
          </p>
        </div>
      ))}
    </div>
  );
}
