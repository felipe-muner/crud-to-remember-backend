var express = require("express");
var router = express.Router();
const moment = require("moment");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql"
  }
);

const Model = Sequelize.Model;
const DataTypes = Sequelize.DataTypes;

const Costumer = sequelize.define(
  "Costumer",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING,
    Birthday: DataTypes.DATE,
    Sex: DataTypes.INTEGER,
    BirthdayPlace: DataTypes.STRING,
    SiblingNumber: DataTypes.INTEGER
  },
  {
    tableName: "Costumer",
    timestamps: false
  }
);

/* GET home page. */
router.get("/", (req, res, next) => {
  Costumer.findAll()
    .then(c => {
      c.map(e => {
        e.dataValues.BirthdayFormatted = moment(e.Birthday).format(
          "DD/MM/YYYY"
        );
        e.dataValues.Age = moment().diff(e.Birthday, "years");
      });
      res.json({ Costumer: c });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
