const jwt = require("jsonwebtoken");

module.exports.genToken = (user, expiresIn = "7d") => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: expiresIn }
  );
};

module.exports.genRefreshToken = (user, expiresIn = "365d") => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: expiresIn }
  );
};
