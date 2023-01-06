import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

// Lazy-load pages
const Home = lazy(() => import('../../modules/home/pages/Home'));
const Notes = lazy(() => import('../../modules/notes/pages/Notes'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<CircularProgress />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="notes"
        element={
          <Suspense fallback={<CircularProgress />}>
            <Notes />
          </Suspense>
        }
      />
    </Routes>
  );
};
