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

  const fullMessage = `
  <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="margin-bottom: 12px;">New Contact Message</h2>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold; width: 140px;">
          Sender Email:
        </td>
        <td style="padding: 8px 0;">
          ${email}
        </td>
      </tr>

      <tr>
        <td style="padding: 8px 0; font-weight: bold;">
          Full Name:
        </td>
        <td style="padding: 8px 0;">
          ${fullName}
        </td>
      </tr>

      <tr>
        <td style="padding: 8px 0; font-weight: bold;">
          Subject:
        </td>
        <td style="padding: 8px 0;">
          ${subject}
        </td>
      </tr>
    </table>

    <hr style="margin: 20px 0;" />

    <h3 style="margin-bottom: 8px;">Message</h3>
    <p style="white-space: pre-line;">
      ${message}
    </p>
  </div>
`;

  console.log("full", fullMessage);

  const mailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: subject,
    html: fullMessage,
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
