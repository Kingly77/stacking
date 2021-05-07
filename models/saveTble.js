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

    },
    {sequelize})

class savPerSec extends Model
{
}

savPerSec.init({

    saveID: DataTypes.STRING(15),
    chipPS: DataTypes.INTEGER,
    compPS: DataTypes.INTEGER,
    boardPS: DataTypes.INTEGER,
    cpusPS: DataTypes.INTEGER,
    chipUPSLvl: DataTypes.INTEGER,
    compUPSLvl: DataTypes.INTEGER,
    boardUPSLvl: DataTypes.INTEGER,

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
    // compsEx: DataTypes.INTEGER ,
    // chipsEx: DataTypes.INTEGER,
    // boardsEx: DataTypes.INTEGER,
    // cpusEx: DataTypes.INTEGER,


}, {sequelize})

module.exports = {savUpgrade, savUnits, savPerSec}