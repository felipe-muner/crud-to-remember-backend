const express = require("express");
const router = express.Router();

const models = require(process.env.PWD + '/models/index')
const Costumer = models.Costumer


/* GET home page. */
router.get("/", Costumer.getAll, (req, res) => {
  res.json(req.costumerList)
}).post('/save', Costumer.save, (req,res) => {
  res.json('Created Successfully')
})

module.exports = router;
