const jwt = require("jsonwebtoken");

module.exports.verifyAuthToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET );
    return payload;
  } catch (error) {
    return false;
  }
};

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: "1h" });
};
