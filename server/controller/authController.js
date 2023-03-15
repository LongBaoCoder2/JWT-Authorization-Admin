const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { generateToken } = require("./tokenHandler");
let { redisTokenStore } = require("../model/redisTokenStore");

const authController = {
  registerHandler: async (req, res) => {
    try {
      // Encrypt the password
      // Generate salt to hash password
      const salt = await bcrypt.genSalt(10);
      const passwordEncrypt = await bcrypt.hash(req.body.password, salt);

      const user = {
        username: req.body.username,
        email: req.body.email,
        password: passwordEncrypt,
      };

      // Save the user to the database
      const userRegis = new User(user);
      try {
        await userRegis.save();
        return res.status(200).json({ Message: "Login Success" });
      } catch (err) {
        return res.status(405).json({ Error: "Bad Authentication" });
      }
    } catch (err) {
      return res.status(500).json({ err });
    }
  },
  loginHandler: async (req, res) => {
    try {
      // Check username in database
      const username = req.body.username;
      const user = await User.findOne({ username });
      if (!user) {
        // Response bad authentication
        return res.status(401).json({ Error: "User not found" });
      }

      // Check password request vs password in database, bcrypt decode
      const resultComparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!resultComparePassword) {
        return res.status(401).json({ Error: "Wrong Password" });
      }

      // Handle successful login
      // Generate access token
      const payload = { id: user.id, admin: user.admin };
      const { accessToken, refreshToken } = generateToken(payload);

      // Push refresh token to redis database
      redisTokenStore.push(refreshToken);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
      });

      return res.status(200).json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken,
        },
      });
    } catch (err) {
      return res.status(500).json({ err });
    }
  },

  // Update token
  tokenHandler: (req, res) => {
    const cookieToken = req.headers.cookie;
    const token = cookieToken.split("=")[1];
    if (!token) {
      return res.status(401).json({ Error: "Invalid token" });
    }

    redisTokenStore = redisTokenStore.filter((tok) => tok !== token);
    const payload = jwt.verify(token, process.env.REFRESH_SECRET_KEY);

    // GET payload
    const { id, admin } = payload;
    const { accessToken, refreshToken } = generateToken({ id, admin });
    redisTokenStore.push(refreshToken);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      path: "/",
      sameSite: "strict",
    });

    return res.status(200).json({ accessToken, redisTokenStore });
  },
  // Logout
  logoutHandler: (req, res) => {
    const cookieToken = req.headers.cookie;
    const token = cookieToken && cookieToken.split("=")[1];
    if (!token) {
      return res.status(401).json({ Error: "Not found token" });
    }

    // Remove refreshToken in cookie
    res.clearCookie("refreshToken");

    // Remove refresh token in database
    redisTokenStore = redisTokenStore.filter((tok) => tok !== token);
    return res.status(200).json({ redisTokenStore });
  },
};

module.exports = authController;
