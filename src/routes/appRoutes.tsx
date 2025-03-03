import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import Layout from "../pages/Layout";
import WorkoutPlan from "../pages/workoutPlan";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  workoutPlanPage: "/workout-plan"
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
      { path: webRoutes.workoutPlanPage, element: <WorkoutPlan /> },
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
