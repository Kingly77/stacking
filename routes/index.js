const index = require('express').Router();
const saves = require('./saving')
const load = require('./loading');
const reset = require('./reset');

index.use('/api',saves);
index.use('/api',load);
index.use('/api',reset);

index.get('/',(req, res)=>
{

res.render('home');

});

module.exports = index;