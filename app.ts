import express from "express";
import { urlencoded } from "body-parser";
import { PORT } from "./constants";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
