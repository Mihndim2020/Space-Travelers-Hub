import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import '../../styles/nav.css';
import logo from '../../assets/images/planet.png';

function MainBar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-secondary border-2">
      <Navbar.Brand className="navbar-brand d-flex align-items-center" href="/">
        <img src={logo} alt="iamge" width="60" height="60" className="ms-3" />
        <h2 className="ms-3">Space Traverler&apos;s Hub</h2>
      </Navbar.Brand>
      <Navbar.Toggle className="me-3" />
      <Navbar.Collapse>
        <Nav className="ms-auto d-flex align-items-center me-3">
          <Nav.Item className="px-2">
            <Nav.Link eventKey="1" as={Link} to="/" className="fs-5 text-primary fw-bold">
              Rockets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="px-2">
            <Nav.Link eventKey="2" as={Link} to="/missions" className="fs-5 text-success fw-bold">
              Missions
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pt-2 h1 text-secondary not-in-movile-size">
            |
          </Nav.Item>
          <Nav.Item className="px-2">
            <Nav.Link eventKey="3" as={Link} to="/profile" className="fs-5 text-danger fw-bold">
              My Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainBar;
