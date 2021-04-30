const index = require('express').Router();

index.get('/',(req, res)=>
{

res.render('home');

});

module.exports = index;