const jwt = require("jsonwebtoken");
const { verifyAuthToken } = require("../utils/token");

module.exports.authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = verifyAuthToken(token);
    if (!payload) {
      return res.status(401).json({
        message: "Invalid or expired token",
        success: false,
        data: null,
      });
    }

    req.user = { id: payload.id, email: payload.email, name: payload.name };

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: error.message,
    });
  }
};
