const User = require("../model/User");

const usersController = {
  // Controller GET request all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Controller DELETE request user by id
  deleteUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);

      // Validate admin
      if (req.userInfo.admin) {
        return res
          .status(200)
          .json({ Message: `Delete completed ${user.username}` });
      } else {
        return res.status(405).json({ Message: "No permission to delete" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = usersController;
