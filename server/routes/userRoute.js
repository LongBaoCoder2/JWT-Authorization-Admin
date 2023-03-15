const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken");
const usersController = require("../controller/userController");

// Get all users
router.get("/", verifyToken, usersController.getAllUsers);

// Delete user by id
router.delete("/:id", verifyToken, usersController.deleteUserById);

module.exports = router;
