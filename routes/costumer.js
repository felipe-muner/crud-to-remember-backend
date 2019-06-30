const express = require("express");
const router = express.Router();

const models = require(process.env.PWD + '/models/index')
const Costumer = models.Costumer


/* GET home page. */
router.get("/", Costumer.getAll, (req, res) => {
  res.json(req.costumerList)
});

module.exports = router;
