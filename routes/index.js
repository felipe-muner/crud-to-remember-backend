var express = require("express");
var router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ valor: "felipe" });
});

module.exports = router;
