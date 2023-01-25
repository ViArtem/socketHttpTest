import { app } from "./server.js";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
function startSocket(params) {
  //a server socket is created
  const server = require("http").createServer(app);
  let io = require("socket.io")(server);
  //
  let connections = [];
  let datas = [];
  //handles socket requests
  io.sockets.on("connection", (socket) => {
    console.log("connected");
    connections.push(socket);

    socket.on("disconnect", (data) => {
      connections.splice(connections.indexOf(socket), 1);
      console.log("Disconnect");
    });
    // Adding a user
    socket.on("send user value", async (data) => {
      datas.push(data.fullName);
      console.log(datas);
    });
  });
  server.listen(3000, async () => {
    console.log("Started socket...");
  });
}

export { startSocket };
