import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loadable from './utils/Loadable';

const LandingPage = Loadable(lazy(() => import("./pages/LandingPage")));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <LandingPage />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;