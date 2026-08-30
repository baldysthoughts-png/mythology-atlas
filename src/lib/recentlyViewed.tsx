import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { RecentlyViewedItem } from '../data/types';

const STORAGE_KEY = 'mythology-atlas:recently-viewed';
const MAX_ITEMS = 3;

const seedHistory: RecentlyViewedItem[] = [
  { id: 'deity-enki', entityType: 'Deity', name: 'Enki', viewedAt: Date.now() - 3000 },
  { id: 'text-gilgamesh', entityType: 'AncientText', name: 'Epic of Gilgamesh', viewedAt: Date.now() - 2000 },
  { id: 'civ-sumer', entityType: 'Civilization', name: 'Sumer', viewedAt: Date.now() - 1000 },
];

function load(): RecentlyViewedItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedHistory;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return seedHistory;
  } catch {
    return seedHistory;
  }
}

interface RecentlyViewedContextValue {
  items: RecentlyViewedItem[];
  record: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(null);

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RecentlyViewedItem[]>(() => load());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore storage errors in prototype */
    }
  }, [items]);

  const record = useCallback((item: Omit<RecentlyViewedItem, 'viewedAt'>) => {
    setItems((prev) => {
      const withoutDuplicate = prev.filter((p) => p.id !== item.id);
      const next = [{ ...item, viewedAt: Date.now() }, ...withoutDuplicate];
      return next.slice(0, MAX_ITEMS);
    });
  }, []);

  return (
    <RecentlyViewedContext.Provider value={{ items, record }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error('useRecentlyViewed must be used within RecentlyViewedProvider');
  return ctx;
}
