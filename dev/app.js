const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker!");
});

app.listen(3500, () => {
  console.log("app listening to port 3500");
});
