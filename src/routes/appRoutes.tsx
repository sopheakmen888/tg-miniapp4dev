import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import Layout from "../pages/Layout";
import Pricing from "../pages/Pricing";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  pricing: "/Pricing",
  // discover: "/discover",
};

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.pricing, element: <Pricing /> },


      // { path: webRoutes.discover, element: <DiscoverPage /> },
    ],
  },
  {
    path: "*",
    element: <div>NotFoundPage</div>,
    errorElement: errorElement,
  },
];
const router = createBrowserRouter(appRoutes);
export default router;
