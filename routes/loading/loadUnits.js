const ex = require('express').Router();
const db = require('../../models');


ex.get('/units/:id', (async (req, res) =>
{
    const {id: saveID} = req.params;
    const units = await db.save.savUnits.findOne({where: saveID})

    res.json(units);

}))

module.exports = ex;