import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalHeader, ModalBody,
  useDisclosure,
  Input,
  ModalFooter,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Breadcrumbs,
  BreadcrumbItem
} from "@nextui-org/react";
import React from "react"
import { useState } from "react";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { GrInspect } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

export default function Inventory() {

  const containers: container[] = [
    {
      id: 0,
      name: "Living Room",
      parent: "Home",
      containers: ["TV Stand", "Cube Bookshelf", "Shoe Rack", "Cabinet", "Utility Closet"],
      items: [
        {
          key: 1,
          id: "OTTO",
          name: "Ottoman",
        },
        {
          key: 2,
          id: "COUC",
          name: "Couch",
        },
        {
          key: 3,
          id: "LVST",
          name: "Loveseat",
        },
      ],
    },
    {
      id: 1,
      name: "Dining Room",
      parent: "Home",
      containers: [],
      items: [],
    },
    {
      id: 2,
      name: "Office",
      parent: "Home",
      containers: [],
      items: [],
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeContainer, updateActiveContainer] = useState(containers[0]);

  type item = {
    key: number,
    id: string;
    name: string;
  };

  type container = {
    id: number;
    name: string;
    parent: string;
    containers: string[];
    items: item[];
  };


  const columns = [{
    key: "name",
    label: "Name",
  },
  {
    key: "id",
    label: "ID",
  },
  {
    key: "actions",
    label: "Actions"
  }
  ]
  return (
    <div className="h-100 min-h-dvh bg-background text-foreground mx-2 pb-6 p-0">
      <div className="flex flex-col items-center pt-5">
        <Breadcrumbs>
          <BreadcrumbItem>{activeContainer.parent}</BreadcrumbItem>
          <BreadcrumbItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="ghost" endContent={<LiaAngleDoubleDownSolid />}>{activeContainer.name}</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={containers} onAction={(key) => updateActiveContainer(containers[key as number])}>
                {(item) => (
                  <DropdownItem key={item.id}>{item.name}</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>
      {/* <h1 className="text-5xl text-center text-orange-300 font-prata mt-4">{activeContainer.name}</h1> */}
      {/* container component */}
      <h1 className="text-3xl font-prata text-center text-orange-200 mt-4">Containers</h1>
      <div className="lg:grid lg:grid-cols-3 mt-4">
        <div className="grid lg:col-start-2 grid-cols-8 mt-3">
          <Button className="col-start-6 col-span-3 lg:col-start-7 lg:col-span-2 mb-2" size="sm" startContent={<FaPlusSquare />} color="secondary">
            Add Container
          </Button>
        </div>
        <div className="grid lg:col-start-2 grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 border border-slate-600 p-3 lg:p-5">
          {activeContainer.containers.map((item, idx) => {
            return (
              <Card shadow="sm" className="border border-slate-800" key={idx} isPressable>
                <CardBody className="overflow-visible p-0">
                  <Image
                    radius="lg"
                    width="100%"
                    alt={item}
                    className="w-full h-[140px] object-cover"
                    src={"https://picsum.photos/100"}
                  />
                </CardBody>
                <CardFooter className="text-small justify-center">
                  <b>{item}</b>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        <Divider className="lg:col-start-2 my-4" />
        <h2 className="lg:col-start-2 text-center text-3xl text-orange-200 font-prata mt-4">Items</h2>
        <div className="grid lg:col-start-2 grid-cols-8 mt-3">
          <Button
            className="col-start-6 col-span-3 lg:col-start-7 lg:col-span-2 mb-2"
            startContent={<FaPlusSquare />}
            size="sm"
            onPress={onOpen}
            color="warning"
          >
            Add Item
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          classNames={{
            body: "pb-6",
            base: "bg-slate-900 text-foreground"
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="dark text-warning">Add Item</ModalHeader>
                <ModalBody>
                  <Input label="name" placeholder="Name of Item" autoFocus required />
                  <Input label="description" type="textarea" placeholder="Item Description" />
                  <Input label="uid" placeholder="Unique identifier (serial number, etc)" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="warning" variant="flat" onPress={onClose}>
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* item table component */}
        <Table aria-label="Items table" className="lg:col-start-2">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key} className="text-center">{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={activeContainer.items}>
            {(item) => (
              <TableRow key={item.id} className="text-center">
                {
                  (columnKey) => {
                    if (columnKey === "actions") {
                      return (
                        <TableCell className="text-center">
                          <ButtonGroup>
                            <Button isIconOnly color="primary">
                              <GrInspect />
                            </Button>
                            <Button isIconOnly color="warning">
                              <BsPencilFill />
                            </Button>
                            <Button isIconOnly color="danger">
                              <FaTrash />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      );
                    } else {
                      return (<TableCell>{getKeyValue(item, columnKey)}</TableCell>)
                    }
                  }
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}