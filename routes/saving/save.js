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
     const {comp:compULvl , chip:chipULvl, cpu:cpuULvl, board:boardULvl,robot:robotULvl,assembler:assemblerULvl,fabricator:fabricatorULvl, printer:printerULvl,unlocks} =  rest.upgrade
    await didwork?.destroy();
        await db.save.savUp.create({
            saveID,
            compULvl,
            chipULvl,
            cpuULvl,
            boardULvl,
            robotULvl,
            assemblerULvl,
            fabricatorULvl,
            printerULvl,
            unlocks
        });
}



async function saveunit(rest){

    const {saveID} = rest;
    const didWork = await db.save.savunit.findOne({where:{saveID}});

    const {chips,comps,boards,cpus,robot,assembler,fabricator,printer} = rest.units;

    await didWork?.destroy();

        await db.save.savunit.create({
            saveID,
            chips,
            comps,
            boards,
            robot,
            cpus,
            printer,
            assembler,
            fabricator
        });

}


async function savehide(rest){
    const {saveID} = rest;
    const didWork = await db.save.savhid.findOne({where:{saveID}});

    const {chip,comp,board,cpu,robot,assembler:assemble,fabricator:fab,printer} = rest.hide;

    await didWork?.destroy();

    await db.save.savhid.create({
        saveID,
        chip,
        printer,
        comp,
        board,
        robot,
        cpu,
        assemble,
        fab
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
    await savehide(rest);
    res.status(200);

}));


module.exports= rSave;
