import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../lib/recentlyViewed';
import { getEntity, entityHref } from '../data';
import { EntityTypeBadge } from '../components/Badges';
import { MesopotamiaHeroArt } from '../components/home/MesopotamiaHeroArt';
import { MediaFrame } from '../components/home/MediaFrame';
import { EvidenceSpectrum } from '../components/home/EvidenceSpectrum';
import { DeityIcon, DivineGroupIcon, StoryIcon, AncientTextIcon, TopicIcon } from '../components/home/LibraryIcons';
import type { AnyEntity } from '../data/types';

const FEATURED_DISCOVERIES: { title: string; dek: string; to: string; size: 'feature' | 'standard' }[] = [
  {
    title: 'Who Were the Anunnaki?',
    dek: 'The most searched — and most misunderstood — term in Mesopotamian religion, with ancient usage and modern theory kept clearly apart.',
    to: '/divine-group/group-anunnaki',
    size: 'feature',
  },
  { title: 'The Mesopotamian Flood Story', dek: 'Atrahasis, Gilgamesh Tablet XI, and the Eridu Genesis compared side by side.', to: '/topic/topic-flood-tradition', size: 'standard' },
  { title: 'Inside the Epic of Gilgamesh', dek: "The epic, its tablets, its transmission, and the flood episode of Tablet XI.", to: '/text/text-gilgamesh', size: 'standard' },
  { title: 'The Eridu Genesis', dek: 'A fragmentary Sumerian creation-and-flood composition preserved on a damaged tablet.', to: '/text/text-eridu-genesis', size: 'standard' },
];

const LIBRARY_ENTRIES: { label: string; to: string; icon: (p: { className?: string }) => React.ReactElement }[] = [
  { label: 'Deities', to: '/library/deities', icon: DeityIcon },
  { label: 'Divine Groups', to: '/library/divine-groups', icon: DivineGroupIcon },
  { label: 'Stories', to: '/library/stories', icon: StoryIcon },
  { label: 'Ancient Texts', to: '/library/texts', icon: AncientTextIcon },
  { label: 'Topics', to: '/library/topics', icon: TopicIcon },
];

const CONTINUE_LEARNING_IMAGE_MAP: Record<string, string> = {
  Enki: '/mythology-atlas/enki-card.png',
  Anunnaki: '/mythology-atlas/anunnaki-card.png',
  Ninhursag: '/mythology-atlas/ninhursag-card.png',
  Utu: '/mythology-atlas/utu-card.png',
  'Epic of Gilgamesh': '/mythology-atlas/featured-gilgamesh.png',
  'deity-enki': '/mythology-atlas/enki-card.png',
  'deity-an': '/mythology-atlas/an-card.png',
  'deity-ashur': '/mythology-atlas/ashur-card.png',
  'deity-dumuzi': '/mythology-atlas/dumuzi-card.png',
  'deity-enlil': '/mythology-atlas/enlil-card.png',
  'deity-ereshkigal': '/mythology-atlas/ereshkigal-card.png',
  'deity-inanna': '/mythology-atlas/inanna-card.png',
  'deity-marduk': '/mythology-atlas/marduk-card.png',
  'deity-nabu': '/mythology-atlas/nabu-card.png',
  'deity-nanna': '/mythology-atlas/nanna-card.png',
  'deity-nergal': '/mythology-atlas/nergal-card.png',
  'deity-ninurta': '/mythology-atlas/ninurta-card.png',
  'deity-tiamat': '/mythology-atlas/tiamat-card.png',
  'group-anunnaki': '/mythology-atlas/anunnaki-card.png',
  'deity-ninhursag': '/mythology-atlas/ninhursag-card.png',
  'deity-utu': '/mythology-atlas/utu-card.png',
  'text-gilgamesh': '/mythology-atlas/featured-gilgamesh.png',
  'story-atrahasis-flood': '/mythology-atlas/featured-flood-story.png',
  'topic-flood-tradition': '/mythology-atlas/featured-flood-story.png',
};

function getContinueLearningImage(entity: AnyEntity, viewedName?: string): string | undefined {
  return CONTINUE_LEARNING_IMAGE_MAP[entity.id] ?? CONTINUE_LEARNING_IMAGE_MAP[entity.canonicalName] ?? (viewedName ? CONTINUE_LEARNING_IMAGE_MAP[viewedName] : undefined);
}

function cardSubtitle(entity: AnyEntity): string | undefined {
  switch (entity.entityType) {
    case 'Deity':
    case 'DivineGroup':
      return (entity as any).cultures?.join(' / ');
    case 'Civilization':
      return (entity as any).timePeriod;
    case 'AncientText':
      return (entity as any).language;
    default:
      return undefined;
  }
}

export function HomePage() {
  const { items } = useRecentlyViewed();

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* ---------------- HERO ---------------- */}
      <section className="-mx-4 lg:-mx-8">
        <div className="relative h-[440px] overflow-hidden sm:h-[500px] lg:h-[600px] lg:rounded-b-lg">
          <MesopotamiaHeroArt />
          <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8" style={{ background: 'var(--gold)' }} />
                <span
                  className="font-mono-label text-[11px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: 'var(--gold)' }}
                >
                  Ancient Mesopotamia
                </span>
              </div>
              <h1
                className="font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl"
                style={{ color: 'var(--ink)' }}
              >
                Explore Ancient Mesopotamia
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed sm:text-base" style={{ color: 'var(--ink-dim)' }}>
                Sumer, Akkad, Babylon, and Assyria — the deities, texts, and myths of the world's earliest cities,
                with ancient evidence and modern interpretation kept visibly apart.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  to="/explore"
                  className="focus-ring inline-block rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02]"
                  style={{ background: 'var(--gold)', color: '#14161c' }}
                >
                  Start Exploring
                </Link>
                <Link
                  to="/library"
                  className="focus-ring text-sm font-medium underline decoration-dotted underline-offset-4"
                  style={{ color: 'var(--ink-dim)' }}
                >
                  Browse the Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTINUE LEARNING ---------------- */}
      {items.length > 0 && (
        <section>
          <SectionEyebrow>Continue Learning</SectionEyebrow>
          <div className="mt-4 flex flex-col gap-4 overflow-x-visible pb-1 sm:gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {items.map((item) => {
              const entity = getEntity(item.id);
              if (!entity) return null;

              const mappedImage = getContinueLearningImage(entity, item.name);

              return (
                <Link
                  key={item.id}
                  to={entityHref(entity)}
                  className="focus-ring group w-full shrink-0 lg:w-auto"
                >
                  {mappedImage ? (
                    <div
                      className="relative aspect-[16/10] w-full overflow-hidden rounded-md"
                      style={{
                        background:
                          'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
                        border: '1px solid var(--rule)',
                      }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--gold) 12%, transparent)' }}
                      />
                      <img
                        src={mappedImage}
                        alt={entity.canonicalName}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                      <span
                        className="font-mono-label absolute bottom-2 left-2.5 text-[9px] tracking-[0.14em] uppercase"
                        style={{ color: 'var(--ink-faint)' }}
                      >
                        {entity.canonicalName}
                      </span>
                    </div>
                  ) : (
                    <MediaFrame aspect="aspect-[16/10]" label={entity.canonicalName} />
                  )}
                  <div className="mt-2.5 flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-[15px] leading-snug sm:text-[15px]" style={{ color: 'var(--ink)' }}>
                        {entity.canonicalName}
                      </div>
                      {cardSubtitle(entity) && (
                        <div className="mt-0.5 text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>
                          {cardSubtitle(entity)}
                        </div>
                      )}
                    </div>
                    <EntityTypeBadge type={entity.entityType} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ---------------- FEATURED DISCOVERIES ---------------- */}
      <section>
        <SectionEyebrow>Featured Discoveries</SectionEyebrow>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {FEATURED_DISCOVERIES.filter((d) => d.size === 'feature').map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="focus-ring group block overflow-hidden rounded-md lg:row-span-2"
              style={{ border: '1px solid var(--rule)' }}
            >
              {d.title === 'Who Were the Anunnaki?' ? (
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-[4/3]"
                  style={{
                    background:
                      'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ boxShadow: 'inset 0 0 0 1px color-mix(in srgb, var(--gold) 12%, transparent)' }}
                  />
                  <img
                    src="/mythology-atlas/featured-anunnaki.png"
                    alt="Anunnaki divine assembly"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  <span
                    className="font-mono-label absolute bottom-2 left-2.5 text-[9px] tracking-[0.14em] uppercase"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    Featured
                  </span>
                </div>
              ) : (
                <MediaFrame aspect="aspect-[16/9] lg:aspect-[4/3]" label="Featured" accent="var(--gold)" />
              )}
              <div className="p-4" style={{ background: 'var(--bg-card)' }}>
                <h3 className="font-display text-xl leading-snug" style={{ color: 'var(--ink)' }}>
                  {d.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                  {d.dek}
                </p>
              </div>
            </Link>
          ))}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {FEATURED_DISCOVERIES.filter((d) => d.size === 'standard').map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="focus-ring flex gap-3 rounded-md p-3.5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
              >
                <div className="w-20 shrink-0 sm:w-full lg:w-20">
                  {d.title === 'The Mesopotamian Flood Story' ? (
                    <div
                      className="relative aspect-square w-full overflow-hidden rounded-md"
                      style={{
                        background:
                          'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
                        border: '1px solid var(--rule)',
                      }}
                    >
                      <img
                        src="/mythology-atlas/featured-flood-story.png"
                        alt="Flood vessel in a flood scene"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ) : d.title === 'Inside the Epic of Gilgamesh' ? (
                    <div
                      className="relative aspect-square w-full overflow-hidden rounded-md"
                      style={{
                        background:
                          'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
                        border: '1px solid var(--rule)',
                      }}
                    >
                      <img
                        src="/mythology-atlas/featured-gilgamesh.png"
                        alt="Gilgamesh and Enkidu"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ) : d.title === 'The Eridu Genesis' ? (
                    <div
                      className="relative aspect-square w-full overflow-hidden rounded-md"
                      style={{
                        background:
                          'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
                        border: '1px solid var(--rule)',
                      }}
                    >
                      <img
                        src="/mythology-atlas/featured-eridu-genesis.png"
                        alt="Damaged tablet with Eridu Genesis imagery"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ) : (
                    <MediaFrame aspect="aspect-square" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[15px] leading-snug" style={{ color: 'var(--ink)' }}>
                    {d.title}
                  </h3>
                  <p className="mt-1 hidden text-xs leading-snug sm:block" style={{ color: 'var(--ink-faint)' }}>
                    {d.dek}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXPLORE THE EVIDENCE ---------------- */}
      <section
        className="rounded-md p-6 lg:p-8"
        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--rule)' }}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8" style={{ background: 'var(--gold)' }} />
          <h2 className="font-mono-label text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--gold)' }}>
            Explore the Evidence
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
          Every claim in this atlas carries one of these labels, so you always know what kind of evidence you're
          looking at — ancient text, archaeology, scholarly reading, or modern theory.
        </p>
        <div className="mt-6">
          <EvidenceSpectrum />
        </div>
      </section>

      {/* ---------------- BROWSE THE LIBRARY ---------------- */}
      <section>
        <SectionEyebrow>Browse the Library</SectionEyebrow>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {LIBRARY_ENTRIES.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="focus-ring group flex w-full flex-col items-start gap-3 rounded-md p-4 transition-colors"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
              >
                <Icon className="h-6 w-6 transition-colors" />
                <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                  {l.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ background: 'var(--rule-strong)' }} />
      <h2 className="font-mono-label text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {children}
      </h2>
    </div>
  );
}
