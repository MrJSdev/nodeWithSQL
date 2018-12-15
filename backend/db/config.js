const Sequelize = require('sequelize')
const mysql = require('mysql2')
const sequelize = new Sequelize('nodejs', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  dialect: 'mysql',
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})
module.exports = {sequelize}
