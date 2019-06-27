var express = require("express");
var router = express.Router();
const moment = require("moment");

const sequelize = require(process.env.PWD + "/config/connection");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ valor: "felipe" });
});

module.exports = router;
