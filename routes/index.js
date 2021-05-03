const index = require('express').Router();
const upgrades = require('./upgrades')

index.get('/',(req, res)=>
{

res.render('home');

});


index.get(`/upgrade`,((req, res) => {

    res.render('home');

}));



module.exports = index;