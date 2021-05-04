const {Model, DataTypes} = require("sequelize");
const sequelize = require("./connections");

class upgrades extends Model {}

upgrades.init(
    {
        lvl: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        usage: {
            type: DataTypes.STRING,
        },
        mod: {
            type: DataTypes.INTEGER,
        }


    },
    {sequelize}
)

module.exports = upgrades;