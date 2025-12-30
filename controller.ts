import type { Request, Response } from "express";
import { createTransport } from "nodemailer";
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "./constants";

export function sendEmailController(req: Request, res: Response) {
  const { fullName, email, subject, message } = req.body;

  const transporter = createTransport({
    service: "Gmail",
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const fullMessage = `Sender's email: ${email}\nFullName: ${fullName}\nSubject: ${subject}\nMessage: ${message}`;

  console.log("full", fullMessage);
  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: subject,
    text: fullMessage,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send({ message: "Email sent successfully" });
    }
  });
}
