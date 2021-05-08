const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");

class savPerSec extends Model {}
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
    }

}, {sequelize})

module.exports = savPerSec;