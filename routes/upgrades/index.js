const index = require('express').Router();
const upgrades = require('./upgrades');



index.use('/', upgrades);


module.exports = index;