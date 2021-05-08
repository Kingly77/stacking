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
                //assembler:assembler.count,
                //fabricator:fabricator.count,
                //printer:   printer.count,

            },
            click: clickModifier,
            perSec: perSec,
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

    chips.curUpgrade = data.upgrade.chip
    compApp.curUpgrade = data.upgrade.comp
    robot.curUpgrade = data.upgrade.robot
    cpuApp.curUpgrade = data.upgrade.cpu
    boardsApp.curUpgrade = data.upgrade.board


   })

}));
