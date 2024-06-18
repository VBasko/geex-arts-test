import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout-root";
import ErrorPage from "../pages/error-page";
import CompetitionsPage from "../pages/competitions-page";
import FeedPage from "../pages/feed-page";
import MarketplacePage from "../pages/marketplace-page";
import OrganisationsPage from "../pages/organisations-page";
import RatingsPage from "../pages/ratings-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FeedPage />,
      },
      {
        path: "/marketplace",
        element: <MarketplacePage />,
      },
      {
        path: "/ratings",
        element: <RatingsPage />,
      },
      {
        path: "/competitions",
        element: <CompetitionsPage />,
      },
      {
        path: "/organisations",
        element: <OrganisationsPage />,
      },
    ],
  },
]);

export default router;
