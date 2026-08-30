import { Link } from 'react-router-dom';
import { civilizations } from '../data';
import { EntityTypeBadge } from '../components/Badges';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export function ExplorePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
          Explore
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
          Choose a culture to explore. More traditions will be added over time.
        </p>
      </div>

      <Link
        to="/explore/mesopotamia"
        className="focus-ring block overflow-hidden rounded-md"
        style={{ border: '1px solid var(--rule)' }}
      >
        <ImagePlaceholder label="Mesopotamia" aspect="aspect-[16/9]" />
        <div className="p-4" style={{ background: 'var(--bg-card)' }}>
          <h2 className="font-display text-lg" style={{ color: 'var(--ink)' }}>
            Mesopotamia
          </h2>
          <p className="mt-1 text-xs" style={{ color: 'var(--ink-dim)' }}>
            Sumer · Akkad · Babylon · Assyria
          </p>
        </div>
      </Link>

      <div>
        <h2 className="font-mono-label mb-2 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Civilizations in Mesopotamia
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {civilizations.map((c) => (
            <Link
              key={c.id}
              to={`/civilization/${c.id}`}
              className="focus-ring rounded-md p-3.5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
            >
              <div className="font-display text-base" style={{ color: 'var(--ink)' }}>
                {c.canonicalName}
              </div>
              <div className="mt-1 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                {c.timePeriod}
              </div>
              <div className="mt-2">
                <EntityTypeBadge type="Civilization" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
