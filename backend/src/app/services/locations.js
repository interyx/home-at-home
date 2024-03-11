const { Location } = require('../models/location')
async function allLocations() {
    const response = await Location.find().exec()
    return response;
}

async function locationById(id) {
    const response = await Location.findOne({shortID: id}).exec();
    return response;
}

module.exports = {allLocations, locationById}