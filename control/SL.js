$('#save').click((async () =>
{
    await $.post('/api/save', {
    rest:{
        saveID: $('#text').val(),
            units:{
            chips:thing.chips,
            board:boardsApp.count,
            comps:compApp.count,
            cpus:0, //TODO CHANGE
            },
        click:clickmodifier,
        persec: perSec,
        upgrade:{
            chip:chipsUpgrades.curUpgrade,
            comp:resist.curUp,

        },

    }
    }
,
    () =>
    {
    }
)

}));
$('#load').click();