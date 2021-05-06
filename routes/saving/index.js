const ex = require('express').Router();
const save = require('./save');

ex.use('/save',save);

module.exports = ex;
