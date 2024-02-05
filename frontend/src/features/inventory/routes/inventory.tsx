import React from "react";
import { useState } from "react";
import {
  Compass,
  PlusSquareFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Offcanvas, Accordion, Container, Collapse } from "react-bootstrap";

type item = {
  id: string;
  name: string;
};

type container = {
  id: number;
  name: string;
  containers: string[];
  items: item[];
};

const containers: container[] = [
  {
    id: 1,
    name: "Living Room",
    containers: ["TV Stand", "Cube Bookshelf", "Shoe Rack"],
    items: [
      {
        id: "OTTO",
        name: "Ottoman",
      },
      {
        id: "COUC",
        name: "Couch",
      },
      {
        id: "LVST",
        name: "Loveseat",
      },
    ],
  },
  {
    id: 2,
    name: "Dining Room",
    containers: [],
    items: [],
  },
  {
    id: 3,
    name: "Office",
    containers: [],
    items: [],
  },
];

export function Inventory() {
  const [showNav, setShowNav] = useState(false);
  const [open, setOpen] = useState(true);

  const [showAddItem, setShowAddItem] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  const [editedItem, setEditedItem] = useState<item | null>(null);

  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);
  const [data, updateData] = useState({ name: "", url: "", uid: "" });
  const getHandler = (valueName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      updateData({ ...data, [valueName]: event?.target.value })
    }
  }

  const handleEdit = (item: item) => {
    setEditedItem(item);
    setShowEditItem(true);
  }

  return (
    <>
      <Container
        className="justify-content-md-center text-center pt-4 px-0"
        fluid="md"
      >
        <Row className="mx-auto pt-3 pb-5">
          <div className="tw-font-kaushan tw-text-5xl tw-text-slate-300 tw-text-shadow tw-shadow-slate-500">
            Living Room
          </div>
        </Row>
        <Row className="my-3 mx-auto tw-border tw-border-slate-700 tw-bg-slate-900">
          <Col xs={9} lg={10} className="text-center">
            <h2 className="tw-font-kaushan tw-text-slate-300 my-2">Containers</h2>
          </Col>
          <Col className="my-auto">
            <Button variant={"success"}>
              <PlusSquareFill />
            </Button>
          </Col>
        </Row>
        <Row xs={2} lg={4} className="g-4 mx-auto">
          {containers[0].containers.map((container, idx) => (
            <Col key={idx}>
              <Card className="shadow-lg bg-body-tertiary">
                <Card.Img
                  variant="top"
                  src="https://placehold.co/100"
                />
                <Card.Body>
                  <Card.Text>{container}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-auto tw-border tw-border-slate-700 tw-bg-slate-900">
          <Col xs={9} lg={10} className="text-center">
            <h2 className="tw-font-kaushan tw-text-slate-300 my-2">
              Items
            </h2>
          </Col>
          <Col xs={3} lg={2} className="my-auto">
            <Button
              variant={"success"}
              onClick={() => setShowAddItem(true)}
            >
              <PlusSquareFill />
            </Button>
          </Col>
        </Row>
        <Table responsive={"sm"} bordered className="mt-0 pt-0">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Code</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {containers[0].items!.map(
              (item: { name: string; id: string }) => (
                <tr key="idx">
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>
                    <Button size={"sm"} variant="warning" onClick={() => handleEdit(item)}>
                      <PencilFill />
                    </Button>
                    &nbsp;
                    <Button size={"sm"} variant="danger">
                      <TrashFill />
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>

      </Container >

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

      <Modal show={showEditItem} onHide={() => setShowEditItem(false)}>
        <Modal.Header closeButton>
          <Modal.Title><span className="tw-text-slate-300">Edit Item Details</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className="tw-text-slate-300">
          {editedItem !== null && Object.keys(editedItem).map(e => (
            <p>{e}: {editedItem[e as keyof item]}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => setShowEditItem(false)}>Close</Button>
          <Button variant="primary" onClick={() => setShowEditItem(false)}>Submit</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddItem} onHide={() => setShowAddItem(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              label="Item Name"
              controlId="addItem.name"
              className="mb-2"
            >
              <Form.Control
                type="text"
                placeholder="Item Name"
                value={data.name}
                onChange={getHandler('name')}
              />
            </FloatingLabel>
            <FloatingLabel
              label="Image URL"
              controlId="addItem.image"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Item Image"
                value={data.url}
                onChange={getHandler('url')}
              />
            </FloatingLabel>
            <FloatingLabel 
            label="Unique ID (serial number, barcode etc)"
            controlId="addItem.uid"
            className="mb-2"
            >
              <Form.Control 
                type="text"
                placeholder="Unique ID"
                value={data.uid}
                onChange={getHandler('uid')}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddItem(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowAddItem(false)}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>

      {/* // navigation offcanvas section -- separate component? */}
      <Offcanvas show={showNav} onHide={handleClose}>
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
                          {containers.map((container, idx) => (
                            <a className="nav-link ms-3 my-1" key={idx}>
                              {container.name}
                            </a>
                          ))}
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
