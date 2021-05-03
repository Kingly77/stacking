const index = require('express').Router();
const upgrades = require('./upgrades');



index.use('/upgrades', upgrades);


module.exports = index;