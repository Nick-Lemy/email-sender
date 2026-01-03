import express from "express";
import { urlencoded } from "body-parser";
import { PORT } from "./constants";
import emailRouter from "./app.route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/email", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
