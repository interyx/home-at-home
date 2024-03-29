const controllers = require('../controllers/locations')
const router = require('express').Router()

router.get('/', controllers.getAllLocations)
router.get('/:id', controllers.getLocationById)
router.post('/', controllers.addNewLocation)
router.delete('/:id', controllers.deleteLocation)
router.put('/:id', controllers.updateLocation)

module.exports = router