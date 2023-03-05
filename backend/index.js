const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute.js");
const userRoute = require("./routes/userRoute.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Use cookie to store refresh token
app.use(cookieParser());

// Mongoose configuration
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log("Connected to mongodb"));

// Route
app.use("/auth", authRouter);
app.use("/v1/users", userRoute);

// Start server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
