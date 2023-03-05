const router = require("express").Router();
const authController = require("../controller/authController");

router.post("/register", authController.registerHandler);
router.post("/login", authController.loginHandler);
router.post("/logout", authController.logoutHandler);
router.post("/token", authController.tokenHandler);

module.exports = router;
