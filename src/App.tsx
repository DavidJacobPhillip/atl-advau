import { Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';
import HomePage from '@/pages/HomePage';
import EventPage from '@/pages/EventPage';
import { event } from '@/data/content';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path={`/${event.slug}`} element={<EventPage />} />
      </Route>
    </Routes>
  );
}

export default App;
