const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const databaseServerURL = "mongodb://localhost:27017/extension-database";
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
  console.log("main app");
});

mongoose
  .connect(databaseServerURL)
  .then(() => {
    console.log("database connected");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
