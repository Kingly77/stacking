const ex = require('express').Router();
const db = require('../../models');

ex.get('/perSecs/:id', (async (req, res) =>
{
    const {id: saveID} = req.params;


    const perSec = await db.save.savPerSec.findOne({where: saveID})



    res.json(perSecs);

}))

module.exports = ex;