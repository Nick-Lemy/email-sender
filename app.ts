import express from "express";
import { PORT } from "./constants";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
