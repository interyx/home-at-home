import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Compass, PlusSquareFill, PencilFill, TrashFill } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table"
import Modal from "react-bootstrap/Modal"
import Form from 'react-bootstrap/Form'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Offcanvas, Accordion, Container, Collapse } from "react-bootstrap";

let containers: Array<any>;
containers = [
  {
    "id": 1,
    "name": "Living Room",
    "containers": ["TV Stand", "Cube Bookshelf", "Shoe Rack"],
    "items": [
      {
        "id": "OTTO",
        "name": "Ottoman",
        "color": "tartan"
      },
      {
        "id": "COUC",
        "name": "Couch",
        "color": "white"
      },
      {
        "id": "LVST",
        "name": "Loveseat",
        "color": "white"
      }
    ]
  },
  {
    "id": 2,
    "name": "Dining Room",
    "containers": [6, 7, 8, 9],
    "items": [4, 5, 6]
  },
  {
    "id": 3,
    "name": "Office",
    "containers": [10, 11, 12, 13, 14]

  }
]


export function Inventory() {
  const [showNav, setShowNav] = useState(false);
  const [open, setOpen] = useState(true);

  const [showAddItem, setShowAddItem] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);

  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);

  return (
    <>
      <Row
        className="justify-content-md-center text-center pt-4"
        data-bs-theme="dark"
      >
        <Row className="mx-auto pt-3 pb-5">
          <div className="tw-font-kaushan tw-text-5xl tw-text-slate-300 tw-text-shadow tw-shadow-slate-500">Living Room</div>
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
                <Row xs={2} lg={4} className="g-4 mx-auto">
                  {containers.map((container, idx) => (
                    <Col key={container.id}>
                      <Card className="shadow-lg bg-body-tertiary">
                        <Card.Img
                          variant="top"
                          src="https://placehold.co/100"
                        />
                        <Card.Body>
                          <Card.Text>{container.name}</Card.Text>
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
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Button variant={"success"} onClick={() => (setShowAddItem(true))}>
                  <PlusSquareFill />
                </Button>
                <Table responsive={"sm"}>
                  <thead>
                    <tr>
                      <th scope="col">Item Name</th>
                      <th scope="col">Code</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {containers[0].items!.map((item: { name: string, id: string }) => (
                      <tr key="idx">
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>
                          <Button size={"sm"} variant="warning" >
                            <PencilFill />
                          </Button>
                          &nbsp;
                          <Button size={"sm"} variant="danger">
                            <TrashFill />
                          </Button>
                        </td>
                      </tr>
                    ))}
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

      <Modal show={showAddItem} onHide={() => setShowAddItem(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel label="Item Name" controlId="addItem.name" className="mb-3">
              <Form.Control type="text" placeholder="Exquisite Shrubbery" />
            </FloatingLabel>
            <FloatingLabel label="">

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
      <Offcanvas show={showNav} onHide={handleClose} data-bs-theme="dark">
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
                            <a className="nav-link ms-3 my-1" key={idx}>{container.name}</a>
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
