const load = require('express').Router();
const units = require('./loadUnits');
const persec = require('./loadPerSec')
const upgrades = require('./loadUpgrade');
const db = require('../../models');

load.use('/load',units);
load.use('/load',persec);
load.use('/load',upgrades);

load.get('/load/:id',async (req,res)=>{


    console.log('DO LOAD');
    const {id: saveID} = req.params;
    const perSec = await db.save.savPerSec.findOne({where: {saveID}})
    const units = await db.save.savUnits.findOne({where: {saveID}})
    const upgrades = await db.save.savUpgrade.findOne({where: {saveID}})

    res.json(
        {
            units:{...units.toJSON()},
            persec:{...perSec.toJSON()},
            upgrade:{...upgrades.toJSON()}
        }
    )

})


module.exports = load;