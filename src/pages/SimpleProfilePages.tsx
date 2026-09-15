import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getEntity, getContentSections } from '../data';
import type { Story, AncientText, Topic, Place } from '../data/types';
import { EntityTypeBadge } from '../components/Badges';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ContentSectionBlock, RelatedEntityList } from '../components/ContentSectionBlock';
import { useRecentlyViewed } from '../lib/recentlyViewed';

export function StoryProfilePage() {
  const { id } = useParams();
  const story = id ? getEntity<Story>(id) : undefined;
  const { record } = useRecentlyViewed();
  useEffect(() => {
    if (story) record({ id: story.id, entityType: story.entityType, name: story.canonicalName });
  }, [story, record]);
  if (!story) return <Navigate to="/library/stories" replace />;
  const sections = getContentSections(story.contentSectionIds);
  const storyImageMap: Record<string, string> = {
    'story-atrahasis-flood': '/mythology-atlas/featured-atrahasis-flood.png',
    'story-gilgamesh-flood': '/mythology-atlas/featured-gilgamesh-flood.png',
    'story-descent-of-inanna': '/mythology-atlas/featured-descent-inanna-text.png',
    'story-enuma-elish': '/mythology-atlas/featured-enuma-elish.png',
  'story-enki-ninhursag': '/mythology-atlas/featured-enki-ninhursag-text.png',
  };
  const storyImage = storyImageMap[story.id];

  return (
    <div className="space-y-8">
      <div>
        {storyImage ? (
          <img
            src={storyImage}
            alt={story.canonicalName}
            className="aspect-[16/9] w-full rounded-md object-cover"
          />
        ) : (
          <ImagePlaceholder label={`${story.canonicalName} — story scene`} aspect="aspect-[16/9]" />
        )}
        <div className="mt-4 flex items-start justify-between gap-3">
          <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
            {story.canonicalName}
          </h1>
          <EntityTypeBadge type="Story" />
        </div>
        <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          {story.cultures.join(' / ')}
        </p>
      </div>

      <section>
        <h2 className="font-mono-label mb-2 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Quick Summary
        </h2>
        <p className="font-display text-[17px] leading-relaxed" style={{ color: 'var(--ink)' }}>
          {story.summary}
        </p>
      </section>

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      {story.themes.length > 0 && (
        <section>
          <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            Themes
          </h2>
          <div className="flex flex-wrap gap-2">
            {story.themes.map((t) => (
              <Link
                key={t}
                to={`/search?q=${encodeURIComponent(t)}`}
                className="focus-ring rounded-full px-3 py-1 text-xs transition-opacity hover:opacity-80"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)', color: 'var(--ink-dim)' }}
              >
                {t}
              </Link>
            ))}
          </div>
        </section>
      )}

      <RelatedEntityList title="Characters" ids={story.characterIds} />
      <RelatedEntityList title="Ancient Source" ids={story.textIds} />
      <RelatedEntityList title="Related Topics" ids={story.topicIds} />
    </div>
  );
}

export function TextProfilePage() {
  const { id } = useParams();
  const text = id ? getEntity<AncientText>(id) : undefined;
  const { record } = useRecentlyViewed();
  useEffect(() => {
    if (text) record({ id: text.id, entityType: text.entityType, name: text.canonicalName });
  }, [text, record]);
  if (!text) return <Navigate to="/library/texts" replace />;
  const sections = getContentSections(text.contentSectionIds);

  const textImageMap: Record<string, string> = {
    'text-gilgamesh': '/mythology-atlas/featured-gilgamesh-epic.png',
    'text-ninurta-angim': '/mythology-atlas/featured-ninurta-angim.png',
    'text-ashurnasirpal-ii-001-ninurta': '/mythology-atlas/featured-ashurnasirpal-ii-001.png',
    'text-atrahasis': '/mythology-atlas/featured-atrahasis.png',
    'text-eridu-genesis': '/mythology-atlas/featured-eridu-genesis.png',
    'text-descent-of-inanna': '/mythology-atlas/featured-descent-inanna.png',
    'text-enki-ninhursag': '/mythology-atlas/featured-enki-ninhursag.png',
    'text-sumerian-king-list': '/mythology-atlas/featured-sumerian-king-list.png',
    'text-enuma-elish': '/mythology-atlas/featured-enuma-elish-text.png',
    'text-ashurbanipal-colophon-338-339': '/mythology-atlas/featured-ashurbanipal-colophon-338-339.png',
    'text-ashurbanipal-009-ashur': '/mythology-atlas/featured-ashurbanipal-009-ashur.png',
    'text-saa20-049-ashur': '/mythology-atlas/featured-saa20-049-ashur.png',
    'text-tiglath-pileser-i-01': '/mythology-atlas/featured-tiglath-pileser-i-01.png',
    'text-adad-narari-i-15': '/mythology-atlas/featured-adad-narari-i-15.png',
    'text-ashurbanipal-nanaya-return': '/mythology-atlas/featured-ashurbanipal-nanaya-return.png',
    'text-esarhaddon-136-nanaya': '/mythology-atlas/featured-esarhaddon-136-nanaya.png',
    'text-nanaya-hymn-sargon-ii': '/mythology-atlas/featured-nanaya-hymn-sargon-ii.png',
    'text-lipit-eshtar-10add': '/mythology-atlas/featured-lipit-eshtar-10add.png',
    'text-ashur-dan-ii-1': '/mythology-atlas/featured-ashur-dan-ii-1.png',
    'text-antiochus-i-1': '/mythology-atlas/featured-antiochus-i-1.png',
    'text-shamash-shuma-ukin-4': '/mythology-atlas/featured-shamash-shuma-ukin-4.png',
    'text-ninurta-lugale': '/mythology-atlas/featured-ninurta-lugale-text.png',
    'text-lament-for-urim': '/mythology-atlas/featured-lament-for-urim.png',
    'text-death-ur-namma': '/mythology-atlas/featured-death-ur-namma.png',
    'text-nergal-ereshkigal-ea357': '/mythology-atlas/featured-nergal-ereshkigal-ea357.png',
    'text-dumuzi-enkimdu': '/mythology-atlas/featured-dumuzid-enkimdu.png',
    'text-dumuzi-geshtinanna': '/mythology-atlas/featured-dumuzid-geshtinanna.png',
    'text-dumuzi-dream': '/mythology-atlas/featured-dumuzids-dream.png',
    'text-inanna-bilulu': '/mythology-atlas/featured-inana-bilulu.png',
    'text-dumuzi-inanna-c1': '/mythology-atlas/featured-inana-dumuzid-c1.png',
    'text-nungal-a': '/mythology-atlas/featured-nungal-a.png',
    'text-ashurbanipal-227-nergal': '/mythology-atlas/featured-ashurbanipal-227-nergal.png',
    'text-nergal-b': '/mythology-atlas/featured-nergal-b.png',
    'text-ninurta-turtle': '/mythology-atlas/featured-ninurta-turtle.png',
    'text-nebuchadnezzar-ii-032-nergal-kutha': '/mythology-atlas/featured-nebuchadnezzar-ii-032.png',
    'text-sennacherib-214-nergal-tarbisu': '/mythology-atlas/featured-sennacherib-214.png',
    'text-nebuchadnezzar-ii-034-marduk': '/mythology-atlas/featured-nebuchadnezzar-ii-034.png',
    'text-ashurbanipal-2005-ningal': '/mythology-atlas/featured-ashurbanipal-2005.png',
    'text-ashurbanipal-2006-ningal': '/mythology-atlas/featured-ashurbanipal-2006.png',
    'text-amar-suena-11-ningal': '/mythology-atlas/featured-amar-suena-11.png',
  };

  const textImage = textImageMap[text.id];

  return (
    <div className="space-y-8">
      <div>
        {textImage ? (
          <img
            src={textImage}
            alt={text.canonicalName}
            className="aspect-[16/9] w-full rounded-md object-cover object-center"
          />
        ) : (
          <ImagePlaceholder
            label={`${text.canonicalName} — tablet / manuscript`}
            aspect="aspect-[16/9]"
          />
        )}
        <div className="mt-4 flex items-start justify-between gap-3">
          <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
            {text.canonicalName}
          </h1>
          <EntityTypeBadge type="AncientText" />
        </div>
        <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
          {text.language} · {text.compositionPeriod}
        </p>
      </div>

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      {text.themes.length > 0 && (
        <section>
          <h2 className="font-mono-label mb-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            Major Themes
          </h2>
          <div className="flex flex-wrap gap-2">
            {text.themes.map((t) => (
              <Link
                key={t}
                to={`/search?q=${encodeURIComponent(t)}`}
                className="focus-ring rounded-full px-3 py-1 text-xs transition-opacity hover:opacity-80"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)', color: 'var(--ink-dim)' }}
              >
                {t}
              </Link>
            ))}
          </div>
        </section>
      )}

      <RelatedEntityList title="Characters" ids={text.characterIds} />
      <RelatedEntityList title="Stories / Episodes Contained" ids={text.storyIds} />
    </div>
  );
}

export function TopicProfilePage() {
  const { id } = useParams();
  const topic = id ? getEntity<Topic>(id) : undefined;
  const { record } = useRecentlyViewed();
  useEffect(() => {
    if (topic) record({ id: topic.id, entityType: topic.entityType, name: topic.canonicalName });
  }, [topic, record]);
  if (!topic) return <Navigate to="/library/topics" replace />;
  const sections = getContentSections(topic.contentSectionIds);

  const topicImageMap: Record<string, string> = {
    'topic-flood-tradition': '/mythology-atlas/featured-flood-story.png',
    'topic-creation': '/mythology-atlas/featured-creation-of-humanity.png',
    'topic-divine-council': '/mythology-atlas/featured-divine-council.png',
    'topic-underworld': '/mythology-atlas/featured-mesopotamian-underworld.png',
  };

  const topicImage = topicImageMap[topic.id];

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-3">
        <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
          {topic.canonicalName}
        </h1>
        <EntityTypeBadge type="Topic" />
      </div>

      {topicImage && (
        <img
          src={topicImage}
          alt={topic.canonicalName}
          className="aspect-[16/9] w-full rounded-md object-cover"
        />
      )}

      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}

      <RelatedEntityList title="Associated Deities" ids={topic.relatedDeityIds} />
      <RelatedEntityList title="Related Stories" ids={topic.relatedStoryIds} />
      <RelatedEntityList title="Related Texts" ids={topic.relatedTextIds} />
      <RelatedEntityList title="Related Topics" ids={topic.relatedTopicIds} />
    </div>
  );
}

export function PlaceProfilePage() {
  const { id } = useParams();
  const place = id ? getEntity<Place>(id) : undefined;
  const { record } = useRecentlyViewed();
  useEffect(() => {
    if (place) record({ id: place.id, entityType: place.entityType, name: place.canonicalName });
  }, [place, record]);
  if (!place) return <Navigate to="/explore" replace />;

  const sections = getContentSections(place.contentSectionIds);

  const placeImageMap: Record<string, string> = {
    'place-ur': '/mythology-atlas/featured-ur.png',
    'place-uruk': '/mythology-atlas/featured-uruk.png',
    'place-eridu': '/mythology-atlas/featured-eridu.png',
    'place-nippur': '/mythology-atlas/featured-nippur.png',
    'place-lagash': '/mythology-atlas/featured-lagash.png',
    'place-kish': '/mythology-atlas/featured-kish.png',
    'place-babylon': '/mythology-atlas/featured-babylon.png',
    'place-nineveh': '/mythology-atlas/featured-nineveh.png',
    'place-ashur': '/mythology-atlas/featured-ashur.png',
    'place-kutha': '/mythology-atlas/featured-kutha.png',
    'place-borsippa': '/mythology-atlas/featured-borsippa.png',
    'place-kalhu': '/mythology-atlas/featured-kalhu.png',
  };

  const placeImage = placeImageMap[place.id];

  return (
    <div className="space-y-8">
      <div>
        {placeImage ? (
          <img
            src={placeImage}
            alt={place.canonicalName}
            className="aspect-[16/9] w-full rounded-md object-cover"
          />
        ) : (
          <ImagePlaceholder
            label={`${place.canonicalName} — ancient city`}
            aspect="aspect-[16/9]"
          />
        )}
        <div className="mt-4 flex items-start justify-between gap-3">
          <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
            {place.canonicalName}
          </h1>
          <EntityTypeBadge type="Place" />
        </div>
      </div>
      {place.historicalNotes && (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
          {place.historicalNotes}
        </p>
      )}
      {sections.map((s) => (
        <ContentSectionBlock key={s.id} section={s} />
      ))}
      <RelatedEntityList title="Associated Deities" ids={place.associatedDeityIds} />
    </div>
  );
}
