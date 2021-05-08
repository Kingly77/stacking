const {Sequelize} = require('sequelize');
const config = require('../config');
const sql = new Sequelize(config);//process.env.JAWSDB_URL,{dialect:"mysql"});

module.exports = sql;