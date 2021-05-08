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
                printer: 0,
                fabricator: 0,
                assembler: 0,
            },
            hide:{
                chip: chips.ishide,
                comp: compApp.ishide,
                board:boardsApp.ishide,
                cpu:cpuApp.ishide,
                robot: robot.ishide,
                printer: 0,
                fabricator: 0,
                assembler: 0,
            }
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
    robot.count =data.units.robot

       //printer.count =data.units.printer
       //assembler.count =data.units.assembler
       //fabricator.count =data.units.fabricator
       //TODO ADD OTHER HERE

       clickModifier.comp = data.perclick.comp
       clickModifier.chip = data.perclick.chip
       clickModifier.board = data.perclick.board
       clickModifier.cpu = data.perclick.cpu


    perSec.chip = data.persec.chip
    perSec.board = data.persec.board
    perSec.comp = data.persec.comp
    perSec.cpu = data.persec.cpu



    chips.curUpgrade = data.upgrade.chipULvl
    compApp.curUpgrade = data.upgrade.compULvl
    robot.curUpgrade = data.upgrade.robotULvl
    cpuApp.curUpgrade = data.upgrade.cpuULvl
    boardsApp.curUpgrade = data.upgrade.boardULvl

       //printer.curUpgrade =data.upgrade.printer
       //assembler.curUpgrade =data.upgrade.assembler
       //fabricator.curUpgrade =data.upgrade.fabricator

       //TODO UNCOMMENT ADD OTHER HERE

       chips.ishide = data.hide.chip
       compApp.ishide = data.hide.comp
       robot.ishide = data.hide.robot
       cpuApp.ishide = data.hide.cpu
       boardsApp.ishide = data.hide.board

   })

}));
