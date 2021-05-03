const {Sequelize} = require('sequelize');
const config = require('../config');

// require('dotenv').config();


const stuff =
{
    host:'localhost',
    database:process.env.DB_NAME,
    username:process.env.USER_DB,
    password:process.env.PASS_DB,
    dialect:'mysql',
    // storage:'../sqltest/test.sqlite'
}

console.log(stuff);

const sql = new Sequelize(stuff);

module.exports = sql;