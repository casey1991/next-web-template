var configs = require("./config");
var env = process.env.NODE_ENV || "development";
var config = configs[env];
module.exports = {
  serverRuntimeConfig: config.server,
  publicRuntimeConfig: config.public
};
