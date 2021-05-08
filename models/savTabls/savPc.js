const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savPerClick extends Model{}

savPerClick.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        compPc: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chipPc: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpusPc: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        boardPC: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

module.exports = savPerClick;