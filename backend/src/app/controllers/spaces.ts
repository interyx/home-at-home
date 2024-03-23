import { Request, Response } from "express"
import { SpaceData } from "inventory-types"
import { Types } from "mongoose"
const asyncHandler = require("express-async-handler")
const {
  addSpace,
  findAllSpacesByLocation,
  findSpaceByShortId,
  findSpaceByLongId,
  searchSpacesByName } = require("../services/spaces")
const { Location } = require("../models/location")

exports.addNewSpace = asyncHandler(async (req: Request, res: Response) => {
  try {
    if (typeof req.body.location == undefined) {
      throw new Error("Every space must belong to a location.")
    }
    const newSpace = {
      name: req.body.name,
      description: typeof req.body.description === "string" ? req.body.description : "",
      location: req.body.location,
      parent: req.body.parent
    } as SpaceData
    const response = await addSpace(newSpace);
    return res.status(201).json(response)
  } catch (err) {
    return res.status(500).send(err);
  }
})

exports.findAllSpaces = asyncHandler(async (req: Request, res: Response) => {
  try {
    if (typeof req.body.location == undefined) {
      return res.status(400).send("Location missing in request body.");
    }
    const response = await findAllSpacesByLocation(req.body.location);
    if (!response.length) {
      return res.status(404).send(`No spaces attached to that location ID ${req.body.location}`);
    }
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
})

exports.findOneSpaceByShortId = asyncHandler(async (req: Request, res: Response) => {
  try {
    const query = req.query.id;
    if (typeof query !== "string") {
      return res.status(400).send("Short ID query parameter required.");
    }
    const response = await findSpaceByShortId(query);
    if (!response) {
      return res.status(404).send(`Cannot find space with short ID ${query}.`);
    }
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
})

exports.findOneSpaceByLongId = asyncHandler(async (req: Request, res: Response) => {
  try {
    const query = req.query.id;
    if (typeof query !== "string") {
      return res.status(400).send("ID query parameter required.");
    }
    const response = await findSpaceByLongId(query);
    if (!response) {
      return res.status(404).send(`Cannot find space with long ID ${query}.`)
    }
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
})

exports.searchSpaceName = asyncHandler(async (req: Request, res: Response) => {
  try {
    const query = req.query.name;
    if (typeof query !== "string") {
      return res.status(400).send("Name query parameter required.");
    }
    const response = await searchSpacesByName(query);
    if (!response.length) {
      return res.status(404).send(`No results for ${query}`)
    }
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
})

exports.changeSpace = asyncHandler(async (req: Request, res: Response) => {
  try {
    const query = req.params.id;
    const newLocation = req.body.location;
    const newParent = req.body.parent;
    const target = await findSpaceByShortId(query);
    if (typeof newLocation === "string") {
      // TODO refactor this, it's touching the model layer in a way I don't like
      const location = await Location.exists({ shortId: newLocation })
      if (!location) {
        return res.status(400).send(`Location ID ${req.body.location} is invalid.  Update operation canceled.`)
      }
    }
    if (typeof newParent === "string") {
      const parent = await findSpaceByShortId(newParent);
      if (!parent) {
        return res.status(400).send(`Parent space with short ID ${newParent} does not exist.  Update operation cancelled.`);
      }
    }
    target.name = typeof req.body.name === "string" ? req.body.name : target.name;
    target.description = typeof req.body.description === "string" ? req.body.description : target.description;
    target.location = typeof req.body.location === "string" ? req.body.location : target.location;
    target.parent = typeof req.body.parent === "string" ? req.body.parent : target.parent;
    const response = await target.save();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
})