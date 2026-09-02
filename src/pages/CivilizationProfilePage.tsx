import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getEntity, getContentSections } from '../data';
import type { Civilization } from '../data/types';
import { EntityTypeBadge } from '../components/Badges';
import { RelatedEntityList, ContentSectionBlock } from '../components/ContentSectionBlock';
import { useRecentlyViewed } from '../lib/recentlyViewed';

export function CivilizationProfilePage() {
  const { id } = useParams();
  const civ = id ? getEntity<Civilization>(id) : undefined;
  const { record } = useRecentlyViewed();

  useEffect(() => {
    if (civ) record({ id: civ.id, entityType: civ.entityType, name: civ.canonicalName });
  }, [civ, record]);

  if (!civ) return <Navigate to="/explore" replace />;

  const sections = getContentSections(civ.contentSectionIds);

  const civilizationImages: Record<string, string> = {
    'civ-sumer': '/mythology-atlas/sumer-card.png',
    'civ-akkad': '/mythology-atlas/akkad-card.png',
    'civ-babylon': '/mythology-atlas/babylon-card.png',
    'civ-assyria': '/mythology-atlas/assyria-card.png',
  };

  const civilizationImage = civilizationImages[civ.id];

  return (
    <div className="space-y-8">
      <div>
        {civilizationImage && (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
            <img
              src={civilizationImage}
              alt={civ.canonicalName}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-medium uppercase tracking-wide" style={{ color: 'var(--ink)' }}>
              {civ.canonicalName}
            </h1>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
              {civ.timePeriod} · {civ.region}
            </p>
          </div>
          <EntityTypeBadge type="Civilization" />
        </div>
      </div>

      <section>
        <h2 className="font-mono-label mb-2 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Overview
        </h2>
        <p className="font-display text-[17px] leading-relaxed" style={{ color: 'var(--ink)' }}>
          {civ.overview}
        </p>
      </section>

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      <RelatedEntityList title="Major Cities" ids={civ.majorCityIds} />
      <RelatedEntityList title="Major Deities" ids={civ.majorDeityIds} />
      {civ.importantMythologicalFigureIds && civ.importantMythologicalFigureIds.length > 0 && (
        <RelatedEntityList title="Important Mythological Figures (Not Civic Cult Deities)" ids={civ.importantMythologicalFigureIds} />
      )}
      {civ.id === 'civ-sumer' ? (
        <>
          <section>
            <div className="mb-4">
              <h2
                className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em]"
                style={{ color: 'var(--ink-faint)' }}
              >
                Important Texts
              </h2>

              <p
                className="mt-2 max-w-2xl text-sm leading-6"
                style={{ color: 'var(--ink-dim)' }}
              >
                Four important Sumerian compositions for understanding creation,
                kingship, divine relationships, death, and the flood tradition.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  id: 'text-eridu-genesis',
                  title: 'Eridu Genesis',
                  description:
                    'A fragmentary Sumerian composition linking the creation of humanity, the first cities and kingship, and the flood survived by Ziusudra.',
                },
                {
                  id: 'text-descent-of-inanna',
                  title: 'Inanna’s Descent to the Underworld',
                  description:
                    'Inanna passes through the seven gates of the underworld, is stripped of her regalia, killed, and revived through Enki’s intervention. To return, she must provide a substitute, and Dumuzi ultimately becomes bound to that fate.',
                },
                {
                  id: 'text-enki-ninhursag',
                  title: 'Enki and Ninhursag',
                  description:
                    'A Sumerian myth centered largely on Dilmun, fertility, divine birth, and the consequences of Enki’s actions, culminating in Ninhursag’s curse and his healing through the birth of deities associated with his afflicted body parts.',
                },
                {
                  id: 'text-sumerian-king-list',
                  title: 'Sumerian King List',
                  description:
                    'A Sumerian king-list composition tracing kingship through successive cities and dynasties, beginning with kingship’s descent from heaven and dividing its earliest rulers from later dynasties with a primeval flood.',
                },
              ].map((item) => (
                <Link
                  key={item.id}
                  to={`/text/${item.id}`}
                  className="focus-ring group rounded-md p-5 transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--rule)',
                  }}
                >
                  <div
                    className="font-mono-label text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    Ancient Text
                  </div>

                  <h3
                    className="mt-2 font-display text-xl"
                    style={{ color: 'var(--ink)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: 'var(--ink-dim)' }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-4 text-xs"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    Read text profile →
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4">
              <h2
                className="font-mono-label text-xs font-semibold uppercase tracking-[0.14em]"
                style={{ color: 'var(--ink-faint)' }}
              >
                Topics
              </h2>

              <p
                className="mt-2 max-w-2xl text-sm leading-6"
                style={{ color: 'var(--ink-dim)' }}
              >
                Major themes that connect Sumerian mythology to the wider
                religious and literary traditions of Mesopotamia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  id: 'topic-creation',
                  title: 'Creation of Humanity',
                  description:
                    'Explore the different Sumerian and Akkadian traditions concerning humanity’s creation, including which deities create humans, how they are fashioned, and the purposes assigned to human existence.',
                },
                {
                  id: 'topic-flood-tradition',
                  title: 'Flood Tradition',
                  description:
                    'Compare the related but distinct Mesopotamian flood traditions preserved through Ziusudra, Atrahasis, and Utnapishtim, including their different survivors, divine motives, and narrative details.',
                },
                {
                  id: 'topic-divine-council',
                  title: 'Divine Council',
                  description:
                    'Examine scenes in which Mesopotamian gods deliberate and act collectively, including decisions about kingship, divine authority, judgment, and the flood.',
                },
                {
                  id: 'topic-underworld',
                  title: 'Mesopotamian Underworld',
                  description:
                    'Explore Mesopotamian conceptions of the realm of the dead, including Ereshkigal’s rule, gate imagery preserved in texts such as Inanna’s Descent, and ancient ideas about the condition and fate of the dead.',
                },
              ].map((item) => (
                <Link
                  key={item.id}
                  to={`/topic/${item.id}`}
                  className="focus-ring group rounded-md p-5 transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--rule)',
                  }}
                >
                  <div
                    className="font-mono-label text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    Topic
                  </div>

                  <h3
                    className="mt-2 font-display text-xl"
                    style={{ color: 'var(--ink)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: 'var(--ink-dim)' }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="mt-4 text-xs"
                    style={{ color: 'var(--ink-faint)' }}
                  >
                    Explore topic →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <RelatedEntityList title="Important Texts" ids={civ.majorTextIds} />
          <RelatedEntityList title="Topics" ids={civ.topicIds} />
        </>
      )}

      {civ.relatedCivilizationIds.length > 0 && (
        <section>
          <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            Related Civilizations
          </h2>
          <div className="flex flex-wrap gap-2">
            {civ.relatedCivilizationIds.map((rid) => {
              const rel = getEntity<Civilization>(rid);
              if (!rel) return null;
              return (
                <Link
                  key={rid}
                  to={`/civilization/${rid}`}
                  className="focus-ring rounded-full px-3.5 py-1.5 text-sm"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
                >
                  {rel.canonicalName}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
