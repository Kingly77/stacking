const {Sequelize} = require('sequelize');
const config = require('../config');

// require('dotenv').config();

const sql = new Sequelize({
    host:'localhost',
    database:process.env.DB_NAME,
    username:process.env.USER_DB,
    password:process.env.PASS_DB,
    dialect:'mysql',
    // storage:'../sqltest/test.sqlite'
});

module.exports = sql;