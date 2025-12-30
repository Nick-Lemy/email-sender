import type { Request, Response } from "express";
import { createTransport } from "nodemailer";
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "./constants";

export function sendEmailController(req: Request, res: Response) {
  const { to, subject, body } = req.body;

  // TODO: Implement email sending logic here
  // set up transporter
  const transporter = createTransport({
    service: "Gmail",
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: true,
    auth: {
      user: EMAIL_USER, // the email you used to create app password
      pass: EMAIL_PASS, // your generated app password
    },
  });

  console.log(`Sending email to: ${to}, subject: ${subject}, body: ${body}`);

  res.status(200).send({ message: "Email sent successfully" });
}
