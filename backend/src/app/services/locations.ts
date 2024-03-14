import { InventoryLocation } from "inventory-types";

const { Location } = require('../models/location')
const { nanoid } = require("nanoid")

async function allLocations() {
    const response = await Location.find();
    return response;
}

async function locationById(id: String) {
    const response = await Location.findOne({ shortId: id });
    return response;
}

async function addLocation(location: InventoryLocation) {
    let newLocation = new Location({
        name: location.name,
        address: location.address,
        shortId: nanoid(5)
    })
    const response = await newLocation.save();
    return response;
}

async function removeLocationById(id: String) {
    const response = await Location.deleteOne({ shortId: id })
    return response;
}

module.exports = { allLocations, locationById, addLocation, removeLocationById }