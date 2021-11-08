import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              <Nav.Link href="/">Rockets</Nav.Link>
              <Nav.Link href="/missions">Missions</Nav.Link>
              <Nav.Link href="/profile">My Profile</Nav.Link>
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
