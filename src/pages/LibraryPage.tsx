import { NavLink, Outlet } from 'react-router-dom';

const TABS = [
  { to: '/library/deities', label: 'Deities' },
  { to: '/library/divine-groups', label: 'Divine Groups' },
  { to: '/library/stories', label: 'Stories' },
  { to: '/library/texts', label: 'Ancient Texts' },
  { to: '/library/topics', label: 'Topics' },
];

export function LibraryPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-medium" style={{ color: 'var(--ink)' }}>
          Library
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
          Browse by content type. Each category is kept separate.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className="focus-ring shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            style={({ isActive }: { isActive: boolean }) => ({
              background: isActive ? 'var(--gold)' : 'var(--bg-card)',
              color: isActive ? '#14161c' : 'var(--ink-dim)',
              border: '1px solid ' + (isActive ? 'var(--gold)' : 'var(--rule)'),
            })}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
