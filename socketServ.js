import { io } from "./startSocket.js";

let connections = [];
let datas = [];
//handles socket requests
function socketData() {
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
}
export { socketData };
