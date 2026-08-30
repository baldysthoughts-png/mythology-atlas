import { Link } from 'react-router-dom';

const PROMPTS: { question: string; to: string }[] = [
  { question: 'Who were the Anunnaki?', to: '/divine-group/group-anunnaki' },
  { question: 'Why did Inanna descend into the underworld?', to: '/story/story-descent-of-inanna' },
  { question: 'What caused the flood in Atrahasis?', to: '/story/story-atrahasis-flood' },
  { question: 'Why was Eridu important to Enki?', to: '/place/place-eridu' },
  { question: 'What is the difference between Enki and Ea?', to: '/deity/deity-enki' },
  { question: 'How does the Gilgamesh flood compare to Atrahasis?', to: '/topic/topic-flood-tradition' },
];

export function DiscoverPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
          Discover
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
          A few questions to start with. Each leads to a full entry.
        </p>
      </div>
      <div className="space-y-2.5">
        {PROMPTS.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="focus-ring block rounded-md p-4"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--rule)' }}
          >
            <span className="font-display text-base" style={{ color: 'var(--ink)' }}>
              {p.question}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
