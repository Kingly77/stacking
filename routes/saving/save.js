const rSave = require('express').Router();
const db = require('../../models');



async function savepersec(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savPerSec.findOne({where:{saveID}});

    const {chips:chipsPS,board:boardPS, cpu:cpuPS} = rest.persec;

    if(didwork === null)
    {
        await db.save.savPerSec.create({
            saveID,
            chipsPS:0,
            compsPS:0,
            boardPS:0,
            cpuPS:0,
            chipsUPSLvl:0,
            compUPSLvl:0,
            boardUPSLvl:0
        });
        console.log("testing")
        return;
        //create new data
    }


    didwork.comps = rest.units.comps;

}



async function saveupgrade(rest)
{
    const {saveID} = rest;
    console.log(rest);
    const didwork = await db.save.savUpgrade.findOne({where:{saveID }});

    const {chips, comps, boards}= rest.click;


    if(didwork === null)
    {
        await db.save.savUpgrade.create({
            saveID,
            chipULvl:0,
            compULvl:0,
            cpusULVl:0,
            boardsULvl:0,
            compPc:comps,
            chipPc:chips,
            boardsPc:boards,
            cpusPc:0,
        });
        console.log("testing")
        return;

    }


    didwork.comps = rest.units.comps;

}

rSave.post('/',(async (req,res)=>{




    const {rest} = req.body;
    const {saveID} = rest;
    if(saveID === '') return res.status(400);
    console.log(rest);
    const didWork = await db.save.savUnits.findOne({where:{saveID}});

    const {chips,comps,boards,cpus} = rest.units;

        if(didWork === null)
        {
            await db.save.savUnits.create({
                saveID,
                chips,
                comps,
                boards,
                cpus

            });

            await saveupgrade(rest);
            await savepersec(rest);
            res.status(200);
            return;
        }

        didWork.comps = rest.units.comps;
        didWork.chips = rest.units.chips;
        didWork.board = rest.units.board;

        await didWork.save();
        //change data

    await saveupgrade(rest);
    await savepersec(rest);
    res.status(200);

}));


module.exports= rSave;
