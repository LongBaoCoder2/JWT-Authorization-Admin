const jwt = require("jsonwebtoken");

// Generate access token and refresh token
const generateToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
    expiresIn: "2h",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "3h",
  });

  return { accessToken, refreshToken };
};

module.exports = { generateToken };
