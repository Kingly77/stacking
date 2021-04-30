const home = require('express').Router();

home.get('/',(req,res)=>
{

res.render('home');

});

module.exports = home;