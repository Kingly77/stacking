const {Sequelize} = require('sequelize');
const config = require('../config');
const sql = new Sequelize(process.env.DATABASE_URL);

module.exports = sql;