import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import WorkoutPlanApp from "../pages/Workout";

import CouponPage from "../pages/Coupon";
import MembershipPlans from "../pages/membershipPlan";
import Promotion from "../pages/Promotion";
import LandingPage from "../pages/Landing";
import ProfilePage from "../pages/ProfilePage";
import MobileFitnessApp from "../pages/Branch";


export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  branches: "/branches",
  workoutPage: "/workout",
  coupon: "/coupon",
  membershipPlan: "/membershipPlan",
  promotion: "/promotion",

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
      { path: webRoutes.home, element: <LandingPage /> },
      { path: webRoutes.workoutPage, element: <WorkoutPlanApp /> },
      { path: webRoutes.coupon, element: <CouponPage /> },
      { path: webRoutes.membershipPlan, element: <MembershipPlans /> },
      { path: webRoutes.home, element: <LandingPage /> },
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.branches, element: <MobileFitnessApp /> },
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
