const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader.split(" ")[1];

  if (!token) res.status(403).json({ Error: "Failed access" });

  // Get payload from token
  try {
    const payload = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    req.userInfo = payload;

    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { verifyToken };
