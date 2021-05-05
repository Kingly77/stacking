const {Sequelize} = require('sequelize');
const config = require('../config');

// require('dotenv').config();

const sql = new Sequelize(config);

module.exports = sql;