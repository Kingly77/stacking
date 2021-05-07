const {Model, DataTypes} = require("sequelize");
const sequelize = require("./connections");

class savUpgrade extends Model
{
}

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
        robotsUp:{
            defaultValue:0,
            type:DataTypes.INTEGER
        },

    },
    {sequelize})

class savPerSec extends Model
{
}

savPerSec.init({

    saveID:  {
        type:DataTypes.STRING(15),
        allowNull:false
    },
    chipPS: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    compPS: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    boardPS: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    cpusPS: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    chipUPSLvl: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    compUPSLvl: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    boardUPSLvl: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    cpusUPSLvl: DataTypes.INTEGER

}, {sequelize})


class savUnits extends Model
{
}

savUnits.init({


    saveID: {
        type:DataTypes.STRING(15),
        allowNull:false
    },
    comps: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    robot:{
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    chips: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    boards: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    cpus: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    compsEx: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    chipsEx: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    boardsEx: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    cpusEx: {
        defaultValue:0,
        type:DataTypes.INTEGER
    }



}, {sequelize})

module.exports = {savUpgrade, savUnits, savPerSec}