import { app } from "./server.js";
function startHttpServer() {
  app.listen(3000, () => {
    console.log("Start...");
  });
}

export { startHttpServer };
