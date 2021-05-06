const rSave = require('express').Router();
const db = require('../../models');

rSave.post('/',(req,res)=>{

    const {id, rest} = req.body


db.save.savUnits.findOrCreate({where:{
        id
    }},
    {

    }
)

})




module.exports= rSave;
