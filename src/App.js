import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import store from './redux/configureStore';
import Missions from './Missions';
import Profile from './Profile';
import Rockets from './Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Space Travelers Hub</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Rockets
              </Nav.Link>
              <Nav.Link as={NavLink} to="/missions">
                Missions
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                My Profile
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
