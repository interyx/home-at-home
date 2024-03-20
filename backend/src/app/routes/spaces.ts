const controllers = require('../controllers/spaces');
const router = require("express").Router();

router.post("/", controllers.addNewSpace);
router.get("/", controllers.findAllSpaces);

module.exports = router;