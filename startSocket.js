import { app } from "./server.js";
import { createRequire } from "node:module";
import { socketData } from "./socketServ.js";

const require = createRequire(import.meta.url);
let server;
let io;

function startSocketServer() {
  try {
    server = require("http").createServer(app);
    io = require("socket.io")(server);

    server.listen(3000, async () => {
      console.log("Started socket...");
    });
    socketData();
  } catch (error) {
    console.log(error);
    return false;
  }
}
export { io, startSocketServer };
