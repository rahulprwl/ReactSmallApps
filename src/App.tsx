import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { calculatorRoutes } from "./routing/calculator-routes";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  const router = createBrowserRouter(calculatorRoutes);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Machine Coding Practice</Navbar.Brand>
        <Navbar.Collapse className="justify-content-start">
          <Nav className="me-auto">
            <Nav.Link href="#calculator/home">Calculator</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
