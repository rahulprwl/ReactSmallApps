import { RouteObject } from "react-router-dom";
import VotingQuestionPage from "../voting-system/voting-question-page";

export const VotingRoutes: RouteObject[] = [
  {
    path: "vote",
    children: [
      {
        path: "castVote",
        element: <VotingQuestionPage />,
      },
    ],
  },
];
