import express from "express";
import { hostname } from "os";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World, " + hostname());
});

const server = app.listen(process.env.PORT, () => {});

export default server;

