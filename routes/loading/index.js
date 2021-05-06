const load = require('express').Router();
const units = require('./loadUnits');
const persec = require('./loadPerSec')
const upgrades = require('./loadUpgrade');


load.use('/load',units);
load.use('/load',persec);
load.use('/load',upgrades);

module.exports = load;