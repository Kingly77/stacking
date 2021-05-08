const rSave = require('express').Router();
const db = require('../../models');

async function saveperclick(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savpc.findOne({where:{saveID}});

    const { chip, comp, board, cpu} = rest.click;

    await didwork?.destroy();

        await db.save.savpc.create({
            saveID,
            chip,
            comp,
            board,
            cpu
        });
        console.log("testing")

}

async function savepersec(rest)
{
    const {saveID} = rest;
    const didwork = await db.save.savps.findOne({where:{saveID}});

    const {chip,board,comp, cpu} = rest.persec;

    await didwork?.destroy();
        await db.save.savps.create({
            saveID,
            chip,
            comp,
            board,
            cpu,

        });
        console.log("testing")


}

async function saveupgrade(rest)
{
    const {saveID} = rest;
    console.log(rest);
    const didwork = await db.save.savUp.findOne({where:{saveID}});

    await didwork?.destroy();
        await db.save.savUp.create({
            saveID,
            compULvl:rest.upgrade.comp,
            chipULvl:rest.upgrade.chip,
            cpusULVl:rest.upgrade.cpu,
            boardsULvl:rest.upgrade.board,
            robotsULvl:rest.upgrade.robot,
            assemblerULvl:0,
            fabricatorULvl:0,
            printerULvl:0

        });


}



async function saveunit(rest){

    const {saveID} = rest;
    const didWork = await db.save.savunit.findOne({where:{saveID}});

    const {chips,comps,boards,cpus,robot,assembler,fabricator} = rest.units;

    await didWork?.destroy();

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

}

rSave.post('/',(async (req,res)=>{

    const {rest} = req.body;
    const {saveID} = rest;
    if(saveID === '') return res.status(400);
    console.log(rest);
        //change data
    await saveunit(rest);
    await saveupgrade(rest);
    await saveperclick(rest);
    await savepersec(rest);
    res.status(200);

}));


module.exports= rSave;
