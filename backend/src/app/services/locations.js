const { Location } = require('../models/location.js')
async function allLocations() {
    const response = await Location.find()
    return response;
}