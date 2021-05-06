const {Model, DataTypes} = require("sequelize");
const sequelize = require("./connections");

class savUpgrade extends Model
{
}

savUpgrade.init({

        saveID: DataTypes.STRING(15),
        compULvl: DataTypes.INTEGER,
        chipULvl: DataTypes.INTEGER,
        cpusULVL: DataTypes.INTEGER,
        resULvl: DataTypes.INTEGER,
        compPc: DataTypes.INTEGER,
        chipPc: DataTypes.INTEGER,
        cpusPc: DataTypes.INTEGER,
        resPc: DataTypes.INTEGER,

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


    saveID: DataTypes.STRING(15),
    comps: DataTypes.INTEGER,
    chips: DataTypes.INTEGER,
    boards: DataTypes.INTEGER,
    cpus: DataTypes.INTEGER,
    // compsEx: DataTypes.INTEGER ,
    // chipsEx: DataTypes.INTEGER,
    // boardsEx: DataTypes.INTEGER,
    // cpusEx: DataTypes.INTEGER,


}, {sequelize})

module.exports = {savUpgrade, savUnits, savPerSec}