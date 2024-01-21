import React from "react";
import { useState } from "react";
import { Compass } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { ListGroup, Offcanvas, Accordion, Container } from "react-bootstrap";

export function Inventory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="justify-content-md-center text-center" data-bs-theme="dark">
        <Col xs lg={8}>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Containers</Accordion.Header>
              <Accordion.Body>
                <Row xs={2} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card className="shadow-lg bg-body-tertiary">
                        <Card.Img variant="top" src="https://placehold.co/100" />
                        <Card.Body>
                          <Card.Title>Container</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Items</Accordion.Header>
            </Accordion.Item>
          </Accordion>
          
        </Col>
      </Row>

      <button
            title="Open Navigation"
            className="tw-fixed 
            tw-z-90 
            tw-bottom-10 
            tw-left-8 
            tw-bg-slate-500 
            tw-w-12 
            tw-h-12 
            tw-rounded-full 
            tw-drop-shadow-lg 
            tw-flex 
            tw-justify-center 
            tw-items-center 
            tw-text-white 
            tw-text-4xl 
            hover:tw-drop-shadow-2xl 
            hover:tw-animate-bounce 
            duration-10"
            onClick={handleShow}
          >
            <Compass />
          </button>

      <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Home</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>Living Room</ListGroup.Item>
                        <ListGroup.Item>Dining Room</ListGroup.Item>
                        <ListGroup.Item>Kitchen</ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
