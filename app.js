require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require(process.env.PWD + "/config/connection");

var app = express();

app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.hidePoweredBy({ setTo: "PHP 5.5.0" }));

const index = require(process.env.PWD + "/routes/index");
const costumer = require(process.env.PWD + "/routes/costumer");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/costumer", costumer);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    status: res.locals.error.status,
    stack: res.locals.error.stack
  });
});

module.exports = app;
