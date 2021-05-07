const index = require('express').Router()
const db = require('../../models');


index.delete('/delete/:id',async(req, res)=>{

    const {id: saveID} = req.params;
     await db.save.savPerSec.destroy({where:{saveID}});
     await db.save.savUnits.destroy({where:{saveID}});
     await db.save.savUpgrade.destroy({where:{saveID}});

})

module.exports = index;