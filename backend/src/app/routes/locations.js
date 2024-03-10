const controllers = require('../controllers/locations.js')
const router = require('express').Router()

module.exports = () => {
    router.get('/', controllers.getAllLocations)
}