import React from "react";
import { useState } from "react";
import { Compass } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup, Offcanvas, Accordion, Container } from "react-bootstrap";

export const Inventory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="justify-content-md-center text-center">
        <Col xs lg={10} className="border border-black">
          Main Content
          <button
            title="Open Navigation"
            className="tw-fixed tw-z-90 tw-bottom-10 tw-left-8 tw-bg-slate-500 tw-w-12 tw-h-12 tw-rounded-full tw-drop-shadow-lg tw-flex tw-justify-center tw-items-center tw-text-white tw-text-4xl hover:tw-drop-shadow-2xl tw-animate-bounce duration-10"
            onClick={handleShow}
          >
            <Compass />
          </button>
        </Col>
      </Row>

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
};
