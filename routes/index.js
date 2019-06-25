var express = require("express");
var router = express.Router();
const moment = require("moment");
const jwt = require("jsonwebtoken");

console.log("alo");

/* GET home page. */
router.get("/", (req, res) => {
  console.log(req.headers);
  res.json({ teste: "respond with a resource HOME" });
});

module.exports = router;
