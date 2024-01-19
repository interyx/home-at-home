import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark">
      <Container className="tw-w-screen">
        <Navbar.Brand href="#home">Home@Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="tw-text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#inventory">
              Inventory
              </Nav.Link>
            <Nav.Link href="#kitchen">
              Kitchen
              </Nav.Link>
            <Nav.Link href="#tasks">
              Tasks
              </Nav.Link>
            <Nav.Link href="#calendar">
              Calendar
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
