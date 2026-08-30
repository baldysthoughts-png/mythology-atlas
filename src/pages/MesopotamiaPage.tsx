import { Link } from 'react-router-dom';
import { civilizations } from '../data';
import { EntityTypeBadge } from '../components/Badges';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export function MesopotamiaPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono-label text-[10px] tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Explore
        </p>
        <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
          Mesopotamia
        </h1>
      </div>

      <ImagePlaceholder label="Map of Mesopotamia" aspect="aspect-[16/9]" />

      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
        The region between the Tigris and Euphrates rivers, home to a succession of civilizations spanning
        roughly three thousand years. Choose a civilization to begin.
      </p>

      <div className="space-y-3">
        {civilizations.map((c) => (
          <Link
            key={c.id}
            to={`/civilization/${c.id}`}
            className="focus-ring flex items-center justify-between gap-3 rounded-md p-4"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
          >
            <div>
              <div className="font-display text-lg" style={{ color: 'var(--ink)' }}>
                {c.canonicalName}
              </div>
              <div className="mt-0.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
                {c.timePeriod}
              </div>
              <div className="mt-1.5 max-w-sm text-xs" style={{ color: 'var(--ink-dim)' }}>
                {c.region}
              </div>
            </div>
            <EntityTypeBadge type="Civilization" />
          </Link>
        ))}
      </div>
    </div>
  );
}
