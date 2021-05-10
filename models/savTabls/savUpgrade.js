const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savUpgrade extends Model{}

savUpgrade.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        unlocks:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        compULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chipULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpuULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        boardULvl: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        robotULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        assemblerULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        fabricatorULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        printerULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

module.exports = savUpgrade;