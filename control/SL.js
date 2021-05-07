$('#save').click(async () =>
{
    await $.post('/api/save', {
        rest: {
            saveID: $('#id').val(),
            units: {
                chips: thing.chips,
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
                chip: thing.curUpgrade,
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

$('#load').click((async () =>
{
    const isload = await $.get(`/api/load/${$('#id').val()}`, (data) =>
    {
        thing.chips = data.units;

    })

}));
