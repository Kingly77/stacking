const index = require('express').Router();
const db = require('../../models');

index.get('/:level', (async (req, res) => {


    const {level} = req.params

    const a =await  db.upgrade.findAll({where: {lvl: level}});


    res.json(a);

}));



index.put('/save',(async (req,res)=>{




}))

module.exports = index;