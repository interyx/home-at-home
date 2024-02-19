import {Button} from "@nextui-org/react";
import {FaInfoCircle, FaMinusSquare, FaPlusSquare} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import React from "react";

interface Props {
    roomName: string;
    description: string;
}
export const RoomActions: React.FC<Props> = ({roomName, description}) => {
    return (
        <div className="dark bg-background text-foreground p-5">
            <h3 className="text-center text-3xl lg:text-5xl mb-5 font-prata">{roomName}</h3>
            <h3 className="text-xl mb-5">{description}</h3>
            <Button className="flex mx-auto my-1 w-60 border border-primary-200" startContent={<FaPlusSquare/>} color="primary">Add Container</Button>
            <Button className="flex mx-auto my-1 w-60 border border-secondary-200" startContent={<FaPlusSquare/>} color="secondary">Add Item</Button>
            <Button className="flex mx-auto my-1 w-60 border border-warning-200" startContent={<FaPencil/>} color="warning">Edit Room</Button>
            <Button className="flex mx-auto my-1 w-60 border border-danger-200" color="danger" startContent={<FaMinusSquare/>}>Delete Room</Button>
        </div>
    );
}