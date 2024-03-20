import { InventorySpace, SpaceModel } from "inventory-types"
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
  const spaces = await Space.find({ $text: { $search: nameRequest } }, 'name')
  return spaces;
}

async function updateSpace(space: SpaceModel) {
  const retrievedSpace = await Space.findById(space._id)
  retrievedSpace.name = space.name;
  retrievedSpace.parent = space.parent;
  retrievedSpace.location = space.location;
  const response = await retrievedSpace.save();
  return response;
}

module.exports = {
  addSpace,
  findAllSpacesByLocation,
  findSpaceByShortId,
  findSpaceByLongId,
  searchSpacesByName,
  updateSpace
}
