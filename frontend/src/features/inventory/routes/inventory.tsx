import React from "react";
import { useState } from "react";
import { Compass } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Offcanvas, Accordion, Container, Collapse } from "react-bootstrap";

export function Inventory() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row
        className="justify-content-md-center text-center pt-4"
        data-bs-theme="dark"
      >
        <Col xs lg={8}>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Containers</Accordion.Header>
              <Accordion.Body>
                <Row xs={2} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card className="shadow-lg bg-body-tertiary">
                        <Card.Img
                          variant="top"
                          src="https://placehold.co/100"
                        />
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
                <nav className="h-100 flex-column align-items-stretch pe-4 border-end">
                  <nav className="nav nav-pills flex-column">
                    <button
                      className="nav"
                      onClick={() => setOpen(!open)}
                      aria-controls="collapse-tree"
                      aria-expanded={open}
                    >
                      Home
                    </button>
                    <Collapse in={open}>
                      <div id="collapse-tree">
                        <nav className="nav nav-pills flex-column">
                          <a className="nav-link ms-3 my-1">Living Room</a>
                          <a className="nav-link ms-3 my-1">Dining Room</a>
                          <a className="nav-link ms-3 my-1">Kitchen</a>
                          <a className="nav-link ms-3 my-1">Office</a>
                          <a className="nav-link ms-3 my-1">Bedroom</a>
                        </nav>
                      </div>
                    </Collapse>
                  </nav>
                </nav>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
