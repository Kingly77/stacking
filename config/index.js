const {Sequelize} = require('sequelize')

stuff =
{
    host:'localhost',
    database:'stack',
    username:process.env.USERDB,
    password:process.env.PASSDB,
    dialect:'mysql',
}

module.exports = stuff;