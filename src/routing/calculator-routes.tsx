import { Route, RouteObject } from "react-router-dom";
import CalculatorMainPage from "../calculator/Calculator-main-page";

export const calculatorRoutes: RouteObject[] = [
  {
    path: "calculator",
    children: [
      {
        path: "home",
        element: <CalculatorMainPage />,
      },
    ],
  },
];
