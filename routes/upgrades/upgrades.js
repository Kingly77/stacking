const index = require('express').Router();
const db = require('../../models');
const list = require('../../Seed/seedData')

//TODO move
index.get('/:level', (async (req, res) => {


    const {level} = req.params

    const a =await  db.upgrade.findAll({where: {lvl: level}});

    res.json(a);

}));

index.get('/', (async(req, res) => {
    res.json(list);
}))

//todo MOVE ROUTE
index.put('/save',(async (req,res)=>{


}))

module.exports = index;