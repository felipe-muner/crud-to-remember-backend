const express = require("express");
const router = express.Router();

const Costumer = require(process.env.PWD + "/model/costumer");

/* GET home page. */
router.get("/", Costumer, (req, res) => {
  console.log(req.felipe);

  res.json({ valor: 10 });
});

module.exports = router;
