$('#save').click(async () =>
{
    await $.post('/api/save', {
    rest:{
        saveID: $('#id').val(),
            units:{
            chips:thing.chips,
            boards:boardsApp.count,
            comps:compApp.count,
            cpus:cpuApp.count,
            },
        click:clickmodifier,
        persec: perSec,
        upgrade:{
            chip:chipsUpgrades.curUpgrade,
            board:boardUpgrades.curUpgrade,
            comp:resist.curUpgrade,
            cpu:robotUpgrades.robot

        },
    }
    },() =>{

    })

});

$('#load').click((async ()=>{
   const isload = await $.get(`/api/load/${$('#id').val()}`, (data)=>{
           thing.chips = data.units;

    thing.chips = data.units.chips
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
