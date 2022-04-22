import "./App.css";
import { Collection } from "./components/collection/Collection";
import { Shop } from "./components/shop/Shop";
import { Clicker } from "./components/clicker/Clicker";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import guitars from "./data/data";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar id="navbar" bg="light" expand="lg" className="header">
          {/* <Navbar.Brand className="header__title">The guitar Shop</Navbar.Brand> */}
          <span className="header__title"> Guitar Shop</span>
          <div className="header__pages__content">
            <Nav.Link>
              <Link className="header__page" to="/">
                Main
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="header__page" to="/collection">
                Collection
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="header__page" to="/clicker">
                CLicker
              </Link>
            </Nav.Link>
          </div>
          {/* <Nav.Link>
            <Link to="/temp">Temp</Link>
          </Nav.Link> */}
        </Navbar>

        <div className="content">
          <Routes>
            <Route path="/" element={<Shop goods={guitars} />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/clicker" element={<Clicker />} />
            {/* <Route path="/temp" element={<Temp />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
