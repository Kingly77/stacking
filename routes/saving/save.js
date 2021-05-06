const rSave = require('express').Router();
const db = require('../../models');



async function savepersec(saveID , rest)
{


    const didwork = await db.save.savPerSec.findOne({where:{saveID}});

    const {chips:chipsPS,board:boardPS, cpu:cpuPS} = rest.persec;

    if(didwork === null)
    {
        await db.save.savPerSec.create({
            saveID,
            chipsPS,
            compsPS,
            boardPS,
            cpuPS,
            chipsUPSLvl,
            compUPSLvl,
            boardUPSLvl
        });

        return;

        //create new data
    }


    didwork.comps = rest.units.comps;

}



async function saveupgrade(saveID, rest)
{

    const didwork = await db.save.savUpgrade.findOne({where:{saveID }});

    const {chips, comps, boards}= rest.units.persec;


    if(didwork === null)
    {
        await db.save.savUpgrade.create({

            chipULvl,
            compULvl,
            cpusULVL,
            resULvl,
            comppc,
            chipPc,
            cpusPc,
            resPc
        });

        return;
        //create new data
    }


    didwork.comps = rest.units.comps;

}

rSave.post('/',(async (req,res)=>{


    const {rest} = req.body;
    const didWork = await db.save.savUnits.findOne({where:{saveID }});

    const {saveID} = rest;
    const {chips,comps,board,cpus} = rest.units;

        if(didWork === null)
        {
            await db.save.savUnits.create({
                saveID,
                chips,
                comps,
                board,
                cpus

            });

            await saveupgrade(rest);
            await savepersec(rest);

            return;
        }

        didWork.comps = rest.units.comps;
        didWork.chips = rest.units.chips;
        didWork.board = rest.units.board;

        await didWork.save();
        //change data

    await saveupgrade(saveID,rest);
    await savepersec(saveID, rest);
    res.status(200);

}));


module.exports= rSave;
