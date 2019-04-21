import express = require("express");
import bodyParser = require("body-parser");
import { Routes } from "./routes";
import { connect, connection } from "mongoose";

require("dotenv").config();

const app = express();
const port = process.env.PORT;
const connectionString = process.env.MONGO_URL || "";
const routes = new Routes(app);

connect(
  connectionString,
  { useNewUrlParser: true }
)
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(port, () => {
      console.log("Listening at port " + port);
    });
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...");
    process.exit();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.setRoutes();
