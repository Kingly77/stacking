const {Sequelize} = require('sequelize');

stuff = {
    host:'localhost',
    database:process.env.DB_NAME,
    username:process.env.USER_DB,
    password:process.env.PASS_DB,
    dialect:'mysql',
    // storage:'../sqltest/test.sqlite'
}

 module.exports = stuff;