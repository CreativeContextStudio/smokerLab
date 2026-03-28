import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import HowTosPage from './pages/HowTosPage';
import ShoppingListPage from './pages/ShoppingListPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'recipes', element: <RecipesPage /> },
      { path: 'recipes/:slug', lazy: () => import('./pages/RecipeDetailPage').then(m => ({ Component: m.default })) },
      { path: 'howto', element: <HowTosPage /> },
      { path: 'howto/:slug', lazy: () => import('./pages/HowToDetailPage').then(m => ({ Component: m.default })) },
      { path: 'shopping', element: <ShoppingListPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
