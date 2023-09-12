require("dotenv").config();
const path = require("path");
const express = require("express");
const spaceRouter = require("./space-router");
const app = express();
const db = require('./db');

app.use(express.static(path.join(__dirname, "../client/build/public")));
app.use(express.json());
app.use("/quotes", spaceRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
