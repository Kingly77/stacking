const index = require('express').Router()
const db = require('../../models');


index.delete('/delete/:id',async(req, res)=>{

    const {id: saveID} = req.params;
    await db.save.savps.destroy({where:{saveID}});
    await db.save.savunit.destroy({where:{saveID}});
    await db.save.savUp.destroy({where:{saveID}});
    await db.save.savhid.destroy({where:{saveID}});
    await db.save.savpc.destroy({where:{saveID}});

})

module.exports = index;