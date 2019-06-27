const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql"
  }
);
