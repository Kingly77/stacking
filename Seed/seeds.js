const connections = require("../models");

const list = [{
    lvl : 1,
    name: "Make Faster",
    usage: "Makes Chips faster",
    mod: 1
}];

(async () => {

 await connections.connect.sync( {force: true});
 await connections.upgrade.bulkCreate(list, {});

//invokes function after creation

})(); 

