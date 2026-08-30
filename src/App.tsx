import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { RecentlyViewedProvider } from './lib/recentlyViewed';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { MesopotamiaPage } from './pages/MesopotamiaPage';
import { CivilizationProfilePage } from './pages/CivilizationProfilePage';
import { LibraryPage } from './pages/LibraryPage';
import { EntityListPage } from './pages/EntityListPage';
import { DeityProfilePage } from './pages/DeityProfilePage';
import { DivineGroupProfilePage } from './pages/DivineGroupProfilePage';
import { StoryProfilePage, TextProfilePage, TopicProfilePage, PlaceProfilePage } from './pages/SimpleProfilePages';
import { SearchPage } from './pages/SearchPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { deities, divineGroups, stories, texts, topics } from './data';

function App() {
  return (
    <RecentlyViewedProvider>
      <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore/mesopotamia" element={<MesopotamiaPage />} />
            <Route path="/civilization/:id" element={<CivilizationProfilePage />} />

            <Route path="/library" element={<LibraryPage />}>
              <Route index element={<Navigate to="deities" replace />} />
              <Route path="deities" element={<EntityListPage title="Deities" entities={deities} />} />
              <Route path="divine-groups" element={<EntityListPage title="Divine Groups" entities={divineGroups} />} />
              <Route path="stories" element={<EntityListPage title="Stories" entities={stories} />} />
              <Route path="texts" element={<EntityListPage title="Ancient Texts" entities={texts} />} />
              <Route path="topics" element={<EntityListPage title="Topics" entities={topics} />} />
            </Route>

            <Route path="/deity/:id" element={<DeityProfilePage />} />
            <Route path="/divine-group/:id" element={<DivineGroupProfilePage />} />
            <Route path="/story/:id" element={<StoryProfilePage />} />
            <Route path="/text/:id" element={<TextProfilePage />} />
            <Route path="/topic/:id" element={<TopicProfilePage />} />
            <Route path="/place/:id" element={<PlaceProfilePage />} />

            <Route path="/search" element={<SearchPage />} />
            <Route path="/discover" element={<DiscoverPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </RecentlyViewedProvider>
  );
}

export default App;
