const rSave = require('express').Router();
const db = require('../../models');

async function savepersec(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savPerSec.findOne({where:{saveID}});

    const {chips:chipsPS,board:boardPS,comps:compsPS, cpu:cpuPS} = rest.persec;

    if(didwork === null)
    {
        await db.save.savPerSec.create({
            saveID,
            chipsPS,
            compsPS,
            boardPS,
            cpuPS,
            chipsUPSLvl:0,
            compUPSLvl:0,
            boardUPSLvl:0
        });
        console.log("testing")
        return;
        //create new data
    }
    await didwork.save({
        saveID,
        chipsPS,
        compsPS,
        boardPS,
        cpuPS,
        chipsUPSLvl:0,
        compUPSLvl:0,
        boardUPSLvl:0
    });

}

async function saveupgrade(rest)
{
    const {saveID} = rest;
    console.log(rest);
    const didWork = await db.save.savUpgrade.findOne({where:{saveID}});
    const {chips, comps, boards}= rest.click;

    if(didWork === null)
    {
        await db.save.savUpgrade.create({
            saveID,
            chipULvl:rest.upgrade.chip,
            compULvl:rest.upgrade.comp,
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

    await didWork.save({
        chipULvl:rest.upgrade.chip,
        compULvl:rest.upgrade.comp,
        cpusULVl:0,
        boardsULvl:0,
        compPc:comps,
        chipPc:chips,
        boardsPc:boards,
        cpusPc:0,
    });
}

rSave.post('/',(async (req,res)=>{


    const {rest} = req.body;
    const {saveID} = rest;
    if(saveID === '') return res.status(400);
    console.log(rest);
    const didWork = await db.save.savUnits.findOne({where:{saveID}});

    const {chips,comps,boards,cpus,robot} = rest.units;

        if(didWork === null)
        {
            await db.save.savUnits.create({
                saveID,
                chips,
                comps,
                boards,
                robot,
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
