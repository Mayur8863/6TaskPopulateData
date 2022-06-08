const router = require("express").Router();
const controllers = require("../controllers/userBlogController");

router.get("/",controllers.userBlogGet);
router.post("/",controllers.userBlogPost);

module.exports = router;