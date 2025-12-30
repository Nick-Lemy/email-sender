import type { Request, Response } from "express";

export function sendEmailController(req: Request, res: Response) {
  const { to, subject, body } = req.body;

  // TODO: Implement email sending logic here

  console.log(`Sending email to: ${to}, subject: ${subject}, body: ${body}`);

  res.status(200).send({ message: "Email sent successfully" });
}
