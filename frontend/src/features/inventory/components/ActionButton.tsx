import React from "react";
import {Button} from "@nextui-org/react"
import { FaPencil, FaTrash } from "react-icons/fa6";

export function EditButton({ clickHandler = () => {} }) {
  return (
    <Button isIconOnly color="warning" className="mx-0" onClick={clickHandler}><FaPencil /></Button>
  )
}

export function DeleteButton({ clickHandler = () => {}}) {
  return (
    <Button isIconOnly color="danger" className="mx-0" onClick={clickHandler}><FaTrash /></Button>
  )
}