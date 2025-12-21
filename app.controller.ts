import type { Request, Response } from "express";
import { sendEmail } from "./app.service";

export async function sendEmailController(req: Request, res: Response) {
  const { fullName, email, subject, message } = req.body;

  try {
    await sendEmail({ fullName, email, subject, message });
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error sending email" });
  }
}
