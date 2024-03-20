import { InventorySpace } from "inventory-types"
const { Location } = require("../models/location")
const { Space } = require("../models/space")
const { nanoid } = require("nanoid")


async function addSpace(spaceInfo: InventorySpace) {
  let newSpace = new Space({
    shortId: nanoid(5),
    name: spaceInfo.name,
    description: typeof spaceInfo.description === "string" ? spaceInfo.description : "",
    location: spaceInfo.location,
    parent: spaceInfo.parent
  })
  const space = await newSpace.save();
  return space;
}

async function findAllSpacesByLocation(locationId: String) {
  const spaces = await Space.find({ location: locationId })
  return spaces;
}

async function findSpaceByShortId(shortIdRequest: String) {
  const space = await Space.findOne({ shortId: shortIdRequest })
  return space;
}

async function findSpaceByLongId(longIdRequest: String) {
  const space = await Space.findById(longIdRequest);
  return space;
}

async function searchSpacesByName(nameRequest: String) {
  const spaces = await Space.find({ $text: {$search: nameRequest} }, 'name')
  return spaces;
}

module.exports = { addSpace, findAllSpacesByLocation, findSpaceByShortId, findSpaceByLongId, searchSpacesByName }
