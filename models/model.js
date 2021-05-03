const {Model, DataTypes} = require("sequelize");
const sql = require("./connections");

class upgrades extends Model {



}

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
    {
        sql
    }
)


module.exports = upgrades;