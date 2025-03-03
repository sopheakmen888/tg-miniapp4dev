import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import Layout from "../pages/Layout";
import Header from "../pages/Header";
import MembershipInfo from "../pages/Membership-Info";
import Details from "../pages/Membership-detail";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  header: "/header",
  MembershipInfo: "/membershipInfo",
  details: "/membershipDetail"
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
      { path: webRoutes.header, element: <Header /> },
      { path: webRoutes.MembershipInfo, element: <MembershipInfo /> },
      { path: webRoutes.details, element: <Details /> },
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
