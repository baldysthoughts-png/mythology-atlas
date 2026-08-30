import { useSearchParams } from 'react-router-dom';
import { searchEntities, groupResults } from '../lib/search';
import { EntityCard } from '../components/EntityCard';

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';

  const results = searchEntities(query);
  const grouped = groupResults(results);

  function onChange(v: string) {
    if (v.trim()) setParams({ q: v }, { replace: true });
    else setParams({}, { replace: true });
  }

  return (
    <div className="space-y-5">
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2.5"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--rule-strong)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: 'var(--ink-dim)', flexShrink: 0 }}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          autoFocus
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search mythology, gods, texts, places…"
          className="focus-ring w-full bg-transparent text-sm outline-none"
          style={{ color: 'var(--ink)' }}
          aria-label="Search mythology, gods, texts, places"
        />
      </div>

      {!query.trim() && (
        <p className="text-sm" style={{ color: 'var(--ink-faint)' }}>
          Try searching a name or an alias — for example, "Ea", "Ishtar", "Shamash", or "Sin".
        </p>
      )}

      {query.trim() && results.length === 0 && (
        <p className="text-sm" style={{ color: 'var(--ink-faint)' }}>
          No results for "{query}".
        </p>
      )}

      {grouped.map((group) => (
        <div key={group.type} className="space-y-2">
          <h2 className="font-mono-label text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            {group.label}
          </h2>
          <div className="space-y-2">
            {group.items.map((r) => (
              <EntityCard
                key={r.entity.id}
                entity={r.entity}
                subtitle={r.matchedOn === 'alias' ? `Matched alias "${r.matchedText}"` : undefined}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
