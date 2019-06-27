const express = require("express");
const router = express.Router();

const Costumer = require(process.env.PWD + "/model/costumer");

console.log(Costumer);

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ valor: "felipe" });
});

module.exports = router;
