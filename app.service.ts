import { createTransport } from "nodemailer";
import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "./constants";
import type { EmailData } from "./types";

const createEmailTransporter = () => {
  return createTransport({
    service: "Gmail",
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
};

export async function sendEmail(emailData: EmailData): Promise<void> {
  const { fullName, email, subject, message } = emailData;

  const fullMessage = `Sender's email: ${email}\nFullName: ${fullName}\nSubject: ${subject}\nMessage: ${message}`;

  console.log("full", fullMessage);

  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: subject,
    text: fullMessage,
  };

  const transporter = createEmailTransporter();

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve();
      }
    });
  });
}
