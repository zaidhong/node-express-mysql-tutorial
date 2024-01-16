const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: dbConfig.pool
})

const db = {Sequelize, sequelize}
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
module.exports = db