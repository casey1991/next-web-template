var public = {
  STATIC_FOLDER: "/static",
  API_URL: "http://localhost:8888/graphql",
  SOCKET_URL: "ws://localhost:8888/graphql"
};
var server = {
  PORT: 3300,
  DEV: true
};
module.exports = {
  public,
  server
};
