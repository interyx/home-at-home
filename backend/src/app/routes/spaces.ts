const controllers = require('../controllers/spaces');
const router = require("express").Router();

router.post("/", controllers.addNewSpace);
router.get("/", controllers.findAllSpaces);
router.get('/short', controllers.findOneSpaceByShortId);
router.get('/long', controllers.findOneSpaceByLongId)
router.get('/search', controllers.searchSpaceName)
router.put('/:id', controllers.changeSpace)

module.exports = router;