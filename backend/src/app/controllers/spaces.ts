import { Request, Response } from "express"
import { InventorySpace } from "inventory-types"
import { Types } from "mongoose"
const asyncHandler = require("express-async-handler")

const { addSpace } = require("../services/spaces")

exports.addNewSpace = asyncHandler(async (req: Request, res: Response) => {
  try {
    if(typeof req.body.location == undefined) {
      throw new Error("Every space must belong to a location.")
    }
    const newSpace = {
      name: req.body.name,
      description: typeof req.body.description === "string" ? req.body.description : "",
      location: req.body.location,
      parent: req.body.parent
    } as InventorySpace
    const response = await addSpace(newSpace);
    return res.status(201).json(response)
  } catch(err) {
    return res.status(500).send(err);
  }
})

