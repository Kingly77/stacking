const {Sequelize} = require('sequelize');
const config = require('../config');
const sql = new Sequelize(config);

module.exports = sql;