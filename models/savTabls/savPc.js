const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savPerClick extends Model{}

savPerClick.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        comp: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chip: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpus: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        board: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

module.exports = savPerClick;