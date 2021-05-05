require('dotenv').config();
const connections = require("../models");
const data = require('seedData');

(async () => {

 await connections.connect.sync( {force: true});
 await connections.upgrade.bulkCreate(data, {});

//invokes function after creation

})(); 

