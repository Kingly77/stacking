$('#save').click(async () =>
{
    console.log('save');
    await $.post('/api/save', {
        rest: {
            saveID: $('#id').val(),
            units: {
                chips: chips.count,
                boards: boardsApp.count,
                comps: compApp.count,
                cpus: cpuApp.count,
                robot: robot.count,
                assembler:0,
                fabricator:0,
                printer:  0

            },
            click: clickModifier,
            persec: perSec,
            upgrade: {
                chip: chips.curUpgrade,
                comp: compApp.curUpgrade,
                board:boardsApp.curUpgrade,
                cpu:cpuApp.curUpgrade,
                robot: robot.curUpgrade,
                //printer: printer.curUpgrade,
                //fabricator: fabricator.curUpgrade,
                //assembler: assembler.curUpgrade,
            },
        }
    }, () =>
    {

    })

});

$('#load').click((async ()=>{
   const isload = await $.get(`/api/load/${$('#id').val()}`, (data)=>{

       console.log(data);
    chips.count = data.units.chips
    boardsApp.count = data.units.boards
    compApp.count = data.units.comps
    cpuApp.count = data.units.cpus


       clickModifier.comp = data.perclick.comp
       clickModifier.chip = data.perclick.chip
       clickModifier.board = data.perclick.board
       clickModifier.cpu = data.perclick.cpu


    perSec.chip = data.persec.chip
    perSec.board = data.persec.board
    perSec.comp = data.persec.comp
    perSec.cpu = data.persec.cpu

       console.log(perSec.cpu,data.persec.cpu )

    chips.curUpgrade = data.upgrade.chipULvl
    compApp.curUpgrade = data.upgrade.compULvl
    robot.curUpgrade = data.upgrade.robotULvl
    cpuApp.curUpgrade = data.upgrade.cpuULvl
    boardsApp.curUpgrade = data.upgrade.boardULvl


   })

}));
