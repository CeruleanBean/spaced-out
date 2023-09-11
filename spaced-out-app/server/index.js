const path = require("path");
const express = require("express");
// const spaceRouter = require("./space-router");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build/public")));
app.use(express.json());

// app.use("/", spaceRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
