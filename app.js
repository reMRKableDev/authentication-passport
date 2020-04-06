require("dotenv").config();

/* APP DEPENDENCIES */
const express = require("express");
const morgan = require("morgan");
const db = require("./database/configs");
require("./auth");

/* APP CONFIGS */
const app = express();

/* ROUTE FETCHERS */
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");

/* DATABASE CONNECTOR */
db.connector
  .sync({ force: true })
  .then(() => console.log("Drop and create db"))
  .catch((error) => console.error(`sync failed: ${error}`));

/* APP MIDDLEWARE */
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* ROUTE SETTERS */
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);

/* ERROR HANDLER */
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
