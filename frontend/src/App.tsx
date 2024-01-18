import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Home@Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#inventory">Inventory</Nav.Link>
          <Nav.Link href="#kitchen">Kitchen</Nav.Link>
          <Nav.Link href="#tasks">Tasks</Nav.Link>
          <Nav.Link href="#calendar">Calendar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
