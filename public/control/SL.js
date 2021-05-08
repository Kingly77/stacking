$('#save').click(async () =>
{
    await $.post('/api/save', {
        rest: {
            saveID: $('#id').val(),
            units: {
                chips: chips.count,
                boards: boardsApp.count,
                comps: compApp.count,
                cpus: cpuApp.count,
                robot: robot.qty,
                assembler:assembler.qty,
                fabricator:fabricator.qty,
                printer:   printer.qty,

            },
            click: clickmodifier,
            persec: perSec,
            upgrade: {
                chip: chips.curUpgrade,
                comp: resist.curUpgrade,
                robotUp: robot.curUpgrade,
                printer: printer.curUpgrade,
                fabricator: fabricator.curUpgrade,
                assembler: assembler.curUpgrade,
            },
        }
    }, () =>
    {

    })

});

$('#load').click((async ()=>{
   const isload = await $.get(`/api/load/${$('#id').val()}`, (data)=>{
           chips.chips = data.units;

    chips.chips = data.units.chips
    boardsApp.count = data.units.boards
    compApp.count = data.units.comps
    cpuApp.count = data.units.cpus


    perSecChips = data.perSec.chips
    perSecBoards = data.perSec.boards
    perSecComps = data.perSec.comps
    perSecCpus = data.perSec.cpus

    chipsUpgrades.curUpgrade = data.upgrade.chip
    resist.curUpgrade = data.upgrade.comp
    robotUpgrades = data.upgrade.qty



   })

}));
