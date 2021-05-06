$('#save').click((async () =>
{
    await $.post('/api/save', {
    rest:{
        saveID: $('#id').val(),
            units:{
            chips:thing.chips,
            boards:boardsApp.count,
            comps:compApp.count,
            cpus:cpuApp.count, //TODO CHANGE
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
$('#load').click((async ()=>{
    await $.get('/api/load', {
    rest:{
        saveID: $('#id').val(),
        units:{
        chips:thing.chips,
        boards:boardsApp.count,
        comps:compApp.count,
        cpus:cpuApp.count, //TODO CHANGE
        },
    click:clickmodifier,
    persec: perSec,
    upgrade:{
        chip:chipsUpgrades.curUpgrade,
        comp:resist.curUp,

    },

    }
    },
    () =>
    {

    }
    )
}));
