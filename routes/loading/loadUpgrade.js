const ex = require('express').Router();
const db = require('../../models');

ex.get('/upgrades/:id', (async (req, res) =>
{
    const {id: saveID} = req.params;

    const upgrades = await db.save.savUpgrade.findOne({where: saveID})



    res.json(upgrades);

}))

module.exports = ex;