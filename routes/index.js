const index = require('express').Router();
const upgrades = require('./upgrades')
const list = require('../Seed/seedData')

index.get('/',(req, res)=>
{

res.render('home',{list});

});


module.exports = index;