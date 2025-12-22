import { Router } from "express";
import { sendEmailController } from "./app.controller";

const emailRouter = Router();
emailRouter.post("/send", sendEmailController);
export default emailRouter;
