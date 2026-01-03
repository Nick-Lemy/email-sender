import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT;
