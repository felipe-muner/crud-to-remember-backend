const express = require("express");
const router = express.Router();

const Costumer = require(process.env.PWD + "/model/costumer");

console.log(String.toString(Costumer));

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ valor: "" });
});

module.exports = router;
