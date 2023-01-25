import express from "express";
import { createRequire } from "node:module";
import path from "path";
import { router } from "./httpServ.js";
import { routerGet } from "./getRouter.js";

import { startHttpServer } from "./startHttp.js";
import { startSocketServer } from "./startSocket.js";

const app = express();
const require = createRequire(import.meta.url);
let bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.set("view engine", "html");
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(express.static(path.resolve("public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(routerGet);
app.engine("html", require("ejs").renderFile);

//A function that starts a socket server. If it fails to start, the normal http server
(function startServer() {
  try {
    let startSocketServerLet = startSocketServer();
    if (startSocketServerLet == false) {
      startHttpServer();
    }
  } catch (e) {
    console.log(e);
  }
})();

export { app };
