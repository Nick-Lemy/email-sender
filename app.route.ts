import { Router } from "express";
import { sendEmailController } from "./app.controller";

const emailRouter = Router();
emailRouter.get("/health", (req, res) => {
  res.send("Email service is healthy");
});
emailRouter.post("/send", sendEmailController);
export default emailRouter;
