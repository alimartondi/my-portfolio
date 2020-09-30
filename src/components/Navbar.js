import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Brand from "../image/web-brand.png";

export default function NavBar() {
  return (
    <header className="header-area" id="header">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Brand}
              className="d-inline-block align-top"
              alt="batubara logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">Service</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
