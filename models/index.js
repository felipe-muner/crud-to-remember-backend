'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const sequelize = require(process.env.PWD + '/config/connection')
let db = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    let model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if(db[modelName].associate) db[modelName].associate(db)
  if(db[modelName].setDb) db[modelName].setDb(db)
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db