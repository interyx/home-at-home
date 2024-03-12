const { Location } = require('../models/location')
async function allLocations() {
    const response = await Location.find();
    return response;
}

async function locationById(id: String) {
    const response = await Location.findOne({shortID: id});
    return response;
}

module.exports = {allLocations, locationById}