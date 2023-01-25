import { Router } from "express";
const routerGet = Router();
import path from "path";

routerGet.get("/", async (req, res) => {
  res.render(path.resolve("index.html"));
});

export { routerGet };
