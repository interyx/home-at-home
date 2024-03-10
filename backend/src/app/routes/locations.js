const controllers = require('../controllers/location.js')
const router = require('express').Router()

module.exports = () => {
    router.get('/locations', controllers.allLocations)
}