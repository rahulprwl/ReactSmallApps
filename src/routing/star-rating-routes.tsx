import { RouteObject } from "react-router-dom";
import StarRatingMainPage from "../star-rating/star-rating-main-page";

export const StarRatingRoutes: RouteObject[] = [
  {
    path: "rating",
    children: [
      {
        path: "home",
        element: <StarRatingMainPage />,
      },
    ],
  },
];
