const controllers = require('../controllers/locations')
const router = require('express').Router()

router.get('/', controllers.getAllLocations)
router.get('/:id', controllers.getLocationById)

module.exports = router