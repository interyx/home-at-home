import React from "react";
import { useState } from "react";
import { Compass, PlusSquareFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"
import { Offcanvas, Accordion, Container, Collapse } from "react-bootstrap";

export function Inventory() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const containers = [
    {
      name: "TV Stand",
      id: "TVST",
      idx: 0
    },
    {
      name: "Coffee Table",
      id: "CFTB",
      idx: 1
    },
    {
      name: "Cube Shelf",
      id: "CBSH",
      idx: 2
    },
    {
      name: "Shoe Rack",
      id: "SHRK",
      idx: 3
    }
  ];

  return (
    <>
      <Row
        className="justify-content-md-center text-center pt-4"
        data-bs-theme="dark"
      >
        <Row className="mx-auto pt-3 pb-5">
          <div className="tw-font-kaushan tw-text-5xl tw-text-slate-300 tw-text-shadow tw-shadow-slate-500">
            Living Room
          </div>
        </Row>
        <Col xs lg={8}>
          <Accordion defaultActiveKey="1" alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Col xs={9} lg={11} className="text-center">
                  Containers
                </Col>
                <Col>
                  <Button variant={"success"}>
                    <PlusSquareFill />
                  </Button>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Row xs={2} lg={4} className="g-4">
                  {containers.map((container, idx) => (
                    <Col key={idx}>
                      <Card className="shadow-lg bg-body-tertiary">
                        <Card.Img
                          variant="top"
                          src="https://placehold.co/100"
                        />
                        <Card.Body>
                          <Card.Title>{container.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Col xs={9} lg={11} className="text-center">
                  Items
                </Col>
                <Col>
                  <Button variant={"success"}>
                    <PlusSquareFill />
                  </Button></Col>
              </Accordion.Header>
              <Accordion.Body>
                <Table responsive={"sm"}>
                  <thead>
                    <tr>
                      <th scope="col">Item Name</th>
                      <th scope="col">Code</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ottoman</td>
                      <td>OTTO</td>
                      <td>
                        <Button size={"sm"} variant="warning">
                          <PencilFill />
                        </Button>
                        &nbsp;
                        <Button size={"sm"} variant="danger">
                          <TrashFill />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Couch</td>
                      <td>COUC</td>
                      <td>
                        <Button size={"sm"} variant="warning">
                          <PencilFill />
                        </Button>
                        &nbsp;
                        <Button size={"sm"} variant="danger">
                          <TrashFill />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Loveseat</td>
                      <td>LVST</td>
                      <td>
                        <Button size={"sm"} variant="warning">
                          <PencilFill />
                        </Button>
                        &nbsp;
                        <Button size={"sm"} variant="danger">
                          <TrashFill />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row >

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
            hover:tw-animate-spin
            tw-duration-10"
        onClick={handleShow}
      >
        <Compass />
      </button>

      {/* // navigation offcanvas section -- separate component? */}
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
