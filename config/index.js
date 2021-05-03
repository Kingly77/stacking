const {Sequelize} = require('sequelize');


stuff =
{
    host:'localhost',
    database:process.env.DB_NAME,
    username:process.env.USERDB,
    password:process.env.PASSDB,
    dialect:'mysql',
    // storage:'../sqltest/test.sqlite'
}

module.exports = stuff;