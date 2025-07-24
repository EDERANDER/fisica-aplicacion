import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">Física Aplicada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/report" className="nav-link-custom">Informe Final</Nav.Link>
            <Nav.Link as={Link} to="/assistant" className="nav-link-custom">Asistente IA</Nav.Link>
            <Nav.Link as={Link} to="/automated-irrigation" className="nav-link-custom">Riego Automatizado</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
