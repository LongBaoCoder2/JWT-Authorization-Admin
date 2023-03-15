const mongoose = require("mongoose");

const userAuth = new mongoose.Schema(
  {
    username: {
      type: "string",
      minLength: 4,
      maxLength: 30,
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      minLength: 4,
      maxLength: 30,
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      minLength: 6,
      required: true,
    },
    admin: {
      type: "boolean",
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userAuth);
