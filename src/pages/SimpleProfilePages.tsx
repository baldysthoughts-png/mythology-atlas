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
    'story-atrahasis-flood': '/mythology-atlas/featured-flood-story.png',
    'story-descent-of-inanna': '/mythology-atlas/featured-descent-inanna.png',
    'story-enuma-elish': '/mythology-atlas/featured-enuma-elish.png',
  'story-enki-ninhursag': '/mythology-atlas/featured-enki-ninhursag.png',
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
    'text-gilgamesh': '/mythology-atlas/featured-gilgamesh.png',
    'text-eridu-genesis': '/mythology-atlas/featured-eridu-genesis.png',
    'text-descent-of-inanna': '/mythology-atlas/featured-descent-inanna.png',
    'text-enki-ninhursag': '/mythology-atlas/featured-enki-ninhursag.png',
    'text-sumerian-king-list': '/mythology-atlas/featured-sumerian-king-list.png',
  };

  const textImage = textImageMap[text.id];

  return (
    <div className="space-y-8">
      <div>
        {textImage ? (
          <img
            src={textImage}
            alt={text.canonicalName}
            className="aspect-[16/9] w-full rounded-md object-cover"
          />
        ) : (
          <ImagePlaceholder label={`${text.canonicalName} — tablet / manuscript`} aspect="aspect-[16/9]" />
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
