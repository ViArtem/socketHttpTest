import { Router } from "express";

const router = Router();
const array = [];
let socketReq = true;

router.post("/value", (req, res) => {
  socketReq = false;
  array.push(req.body.dataUser);
  console.log(array);

  res.sendStatus(200);
});

export { router, socketReq };
