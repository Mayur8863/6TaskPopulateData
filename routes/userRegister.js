const router = require("express").Router();
const controllers = require("../controllers/userRegisterController");

router.get("/",controllers.userRegisterGet);
router.post("/",controllers.userRegisterPost);

module.exports = router;