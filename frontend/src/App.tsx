import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './index.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className="tw-bg-slate-800 tw-text-slate-200 vh-100">
     <Navigation /> 
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-1">Welcome to Home@Home!</h1>
          </Col>
        </Row>
        <Row>
          <Col>An app to augment your home.</Col>
          <Col>To take things off of your plate.</Col>
          <Col>While helping you get dinner on the table.</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
