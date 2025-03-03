import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import Layout from "../pages/Layout";
import Branch from "../pages/Branch";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
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
      // { path: webRoutes.discover, element: <DiscoverPage /> },
    ],
  },
  {
    path: "branch",
    element: <Branch />,
    errorElement: errorElement, 
  },
];

const router = createBrowserRouter(appRoutes);

export default router;
