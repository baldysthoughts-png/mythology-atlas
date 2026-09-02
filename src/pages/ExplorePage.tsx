import { Link } from 'react-router-dom';
import { civilizations } from '../data';
import { EntityTypeBadge } from '../components/Badges';

const civilizationDescriptions: Record<string, string> = {
  'civ-sumer':
    'Explore the earliest major urban tradition represented in the atlas, including its cities, deities, myths, and Sumerian-language texts.',
  'civ-akkad':
    'Follow the Akkadian world from the imperial period into the wider Semitic literary and religious traditions of Mesopotamia.',
  'civ-babylon':
    'Explore Babylonian religion, literature, kingship, creation traditions, and the major texts preserved through its scribal culture.',
  'civ-assyria':
    'Explore Assyria, its royal centers, divine traditions, and the libraries that preserved some of Mesopotamia’s most important surviving texts.',
};

const civilizationImages: Record<string, string> = {
  'civ-sumer': '/mythology-atlas/sumer-card.png',
  'civ-akkad': '/mythology-atlas/akkad-card.png',
  'civ-babylon': '/mythology-atlas/babylon-card.png',
  'civ-assyria': '/mythology-atlas/assyria-card.png',
};

export function ExplorePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1
          className="font-display text-3xl font-medium"
          style={{ color: 'var(--ink)' }}
        >
          Explore
        </h1>

        <p
          className="mt-2 max-w-2xl text-sm leading-6"
          style={{ color: 'var(--ink-dim)' }}
        >
          Explore Mesopotamia through its civilizations, texts, deities, stories,
          and evolving religious traditions. Additional cultures will be added
          to the atlas over time.
        </p>
      </div>

      <Link
        to="/explore/mesopotamia"
        className="focus-ring group block overflow-hidden rounded-md"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--rule)',
        }}
      >
        <div className="relative aspect-[16/7] overflow-hidden">
          <img
            src="/mythology-atlas/hero-mesopotamia.png"
            alt="Ancient Mesopotamian city landscape"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div
            className="absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                'linear-gradient(to top, rgba(15,16,20,0.88), rgba(15,16,20,0))',
            }}
          />

          <div className="absolute bottom-0 left-0 p-5 sm:p-6">
            <div
              className="font-mono-label text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: 'var(--ink-faint)' }}
            >
              Cultural Region
            </div>

            <h2
              className="mt-1 font-display text-2xl sm:text-3xl"
              style={{ color: 'var(--ink)' }}
            >
              Mesopotamia
            </h2>

            <p
              className="mt-1 text-sm"
              style={{ color: 'var(--ink-dim)' }}
            >
              Sumer · Akkad · Babylon · Assyria
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
          <p
            className="max-w-2xl text-sm leading-6"
            style={{ color: 'var(--ink-dim)' }}
          >
            Trace thousands of years of cultural development across southern and
            northern Mesopotamia, from early Sumerian city-states through
            Akkadian, Babylonian, and Assyrian traditions.
          </p>

          <span
            className="hidden shrink-0 text-xs sm:block"
            style={{ color: 'var(--ink-faint)' }}
          >
            Explore Mesopotamia →
          </span>
        </div>
      </Link>

      <section>
        <div className="mb-3">
          <h2
            className="font-display text-xl"
            style={{ color: 'var(--ink)' }}
          >
            Civilizations in Mesopotamia
          </h2>

          <p
            className="mt-1 text-sm"
            style={{ color: 'var(--ink-dim)' }}
          >
            Enter a civilization to explore its historical setting and related
            mythology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {civilizations.map((c) => (
            <Link
              key={c.id}
              to={`/civilization/${c.id}`}
              className="focus-ring group overflow-hidden rounded-md transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--rule)',
              }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={civilizationImages[c.id]}
                  alt={c.canonicalName}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className="font-display text-xl"
                      style={{ color: 'var(--ink)' }}
                    >
                      {c.canonicalName}
                    </h3>

                    <div
                      className="mt-1 text-[11px]"
                      style={{ color: 'var(--ink-faint)' }}
                    >
                      {c.timePeriod}
                    </div>
                  </div>

                  <EntityTypeBadge type="Civilization" />
                </div>

                <p
                  className="mt-4 text-sm leading-6"
                  style={{ color: 'var(--ink-dim)' }}
                >
                  {civilizationDescriptions[c.id]}
                </p>

                <div
                  className="mt-4 text-xs"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  Explore {c.canonicalName} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}