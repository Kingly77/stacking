const {Model, DataTypes} = require("sequelize");
const sequelize = require("../connections");
class savUnits extends Model{}

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
    assembler:{
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    fabricator:{
        defaultValue:0,
        type:DataTypes.INTEGER
    },
    printer:{
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



}, {sequelize})

module.exports = savUnits;