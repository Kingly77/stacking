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
            comp:resist.curUpgrade,
        },
    }
    },() =>{

    })

});

$('#load').click((async ()=>{
   const isload = await $.get(`/api/load/${$('#id').val()}`, (data)=>{
           thing.chips = data.units;

   })

}));
