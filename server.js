const express = require("express");
const path = require("path");
const next = require("next");
const config = require("next/config");
const configs = require("./config");
const dev = configs[process.env.NODE_ENV].server.DEV;
const app = next({ dev: dev });
const handle = app.getRequestHandler();
const serverConfig = config.default().serverRuntimeConfig;
const PORT = serverConfig.PORT;
app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
