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

module.exports = { addSpace }
