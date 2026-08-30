import { Link, useLocation, useNavigate } from 'react-router-dom';
import { type ReactNode, useState } from 'react';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/library', label: 'Library' },
  { to: '/discover', label: 'Discover' },
];

export function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [query, setQuery] = useState('');

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search');
  }

  function onHomeSearchFocus() {
    // Typing or tapping the home search field opens Search, per spec.
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search');
  }

  function isActive(to: string) {
    return to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-full flex-col min-w-0 lg:max-w-5xl xl:max-w-6xl" style={{ background: 'var(--bg)' }}>
      <header
        className="sticky top-0 z-20 backdrop-blur"
        style={{ background: 'color-mix(in srgb, var(--bg) 88%, transparent)', borderBottom: '1px solid var(--rule)' }}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 lg:px-8">
          <Link
            to="/"
            className="focus-ring font-display shrink-0 text-lg font-medium tracking-tight lg:text-xl"
            style={{ color: 'var(--ink)' }}
          >
            Mythology Atlas
          </Link>

          {/* Desktop navigation, integrated into the header */}
          <nav aria-label="Primary" className="ml-8 hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="focus-ring relative px-3 py-2 text-sm font-medium transition-colors"
                  style={{ color: active ? 'var(--ink)' : 'var(--ink-dim)' }}
                >
                  {item.label}
                  <span
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full transition-opacity"
                    style={{ background: 'var(--gold)', opacity: active ? 1 : 0 }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {!isHome && (
              <Link
                to="/search"
                aria-label="Search"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ border: '1px solid var(--rule-strong)', color: 'var(--ink-dim)' }}
              >
                <SearchIcon />
              </Link>
            )}
          </div>
        </div>
      </header>

      {isHome && (
        <div className="px-4 pt-4 lg:px-8">
          <form onSubmit={submitSearch}>
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--rule-strong)' }}
            >
              <SearchIcon />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={onHomeSearchFocus}
                placeholder="Search mythology, gods, texts, places…"
                className="focus-ring w-full bg-transparent text-sm outline-none"
                style={{ color: 'var(--ink)' }}
                aria-label="Search mythology, gods, texts, places"
              />
            </div>
          </form>
        </div>
      )}

      <main className="flex-1 w-full max-w-full min-w-0 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-5 lg:px-8 md:pb-10">{children}</main>

      <nav
        aria-label="Primary"
        className="sticky bottom-0 z-20 flex w-full justify-around overflow-hidden py-2 md:hidden"
        style={{
          background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
          borderTop: '1px solid var(--rule)',
          backdropFilter: 'blur(8px)',
          paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))',
        }}
      >
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className="focus-ring flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-md px-1 py-1.5 text-xs"
              style={{ color: active ? 'var(--gold)' : 'var(--ink-dim)' }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
