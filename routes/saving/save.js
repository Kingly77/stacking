const rSave = require('express').Router();
const db = require('../../models');

async function saveperclick(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savPerSec.findOne({where:{saveID}});

    const { chip:chipPc, comp:compPc, board:boardPc, cpu:cpuPc} = rest.click;

    if(didwork === null)
    {
        await db.save.savps.create({
            saveID,
            chipPc,
            compPc,
            boardPc,
            cpuPc
        });
        console.log("testing")
        return;
        //create new data
    }
    await didwork.save(
        {
            saveID,
            chipPc,
            compPc,
            boardPc,
            cpuPc
        }
    );

}

async function savepersec(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savpc.findOne({where:{saveID}});

    const {chips:chipsPS,board:boardPS,comps:compsPS, cpu:cpuPS} = rest.persec;

    if(didwork === null)
    {
        await db.save.savps.create({
            saveID,
            chipsPS,
            compsPS,
            boardPS,
            cpuPS,

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
    });

}

async function saveupgrade(rest)
{
    const {saveID} = rest;
    console.log(rest);
    const didWork = await db.save.savUp.findOne({where:{saveID}});

    if(didWork === null)
    {
        await db.save.savUp.create({
            saveID,
            compULvl:rest.upgrade.comp,
            chipULvl:rest.upgrade.chip,
            cpusULVl:0,
            boardsULvl:0,
            robotsULvl:0,
            assemblerULvl:0,
            fabricatorULvl:0,
            printerULvl:0

        });
        return;
    }

    await didWork.save({
        chipULvl:rest.upgrade.chip,
        compULvl:rest.upgrade.comp,
        cpusULVl:0,
        boardsULvl:0,
        robotsULvl:0,
        assemblerULvl:0,
        fabricatorULvl:0,
        printerULvl:0

    });
}

rSave.post('/',(async (req,res)=>{


    const {rest} = req.body;
    const {saveID} = rest;
    if(saveID === '') return res.status(400);
    console.log(rest);
    const didWork = await db.save.savunit.findOne({where:{saveID}});

    const {chips,comps,boards,cpus,robot,assembler,fabricator} = rest.units;

        if(didWork === null)
        {
            await db.save.savunit.create({
                saveID,
                chips,
                comps,
                boards,
                robot,
                cpus,
                assembler,
                fabricator
            });

            await saveupgrade(rest);
            await savepersec(rest);
            res.status(200);
            return;
        }

        await didWork.save({
            saveID,
            chips,
            comps,
            boards,
            robot,
            cpus,
            assembler,
            fabricator
        });
        //change data
    await saveupgrade(rest);
    await saveperclick(rest);
    await savepersec(rest);
    res.status(200);

}));


module.exports= rSave;
