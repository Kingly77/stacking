const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savPerSec extends Model {}
savPerSec.init({

    saveID:  {
        type:DataTypes.STRING(15),
        allowNull:false
    },
    chip: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    comp: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    board: {
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    cpus: {
        defaultValue:0,
        type:DataTypes.INTEGER
    }

}, {sequelize})

module.exports = savPerSec;