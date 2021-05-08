const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savUpgrade extends Model{}

savUpgrade.init({

        saveID: {
            type:DataTypes.STRING(15),
            allowNull:false
        },
        compULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        chipULvl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        cpusULVl:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        boardsULvl: {
            defaultValue:0,
            type:DataTypes.INTEGER
        },
        robotsULvl:{
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