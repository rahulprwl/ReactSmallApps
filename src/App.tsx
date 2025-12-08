import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { calculatorRoutes } from "./routing/calculator-routes";

function App() {
  const router = createBrowserRouter(calculatorRoutes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
