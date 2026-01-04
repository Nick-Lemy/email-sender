import express from "express";
import { urlencoded } from "body-parser";
import { PORT } from "./constants";
import emailRouter from "./app.route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
       	res.setHeader('Content-Security-Policy', "upgrade-insecure-requests; default-src 'self' http: data:; script-src 'self' http: 'unsafe-inline'; style-src 'self' http: 'unsafe-inline';");
	next();
});
app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("/email", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
