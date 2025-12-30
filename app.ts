import express from "express";
import { urlencoded } from "body-parser";
import { PORT } from "./constants";
import { sendEmailController } from "./controller";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.post("/send-email", sendEmailController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
