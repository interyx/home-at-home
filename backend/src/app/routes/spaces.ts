const controllers = require('../controllers/spaces');
const router = require("express").Router();

router.post("/", controllers.addNewSpace)

module.exports = router;