require('dotenv').config();
const expr = require('express')
const session = require('express-session')
const {Sequelize} = require('sequelize')
const hdbar = require('express-handlebars');
const config = require('./config')
const sql = new Sequelize(config);
const app = expr();
const port = 3001 || process.env.PORT;
const def = require('./routes');

app.engine('handlebars',hdbar());
app.set('view engine','handlebars');
app.use('/',def);

//console.log(`${process.env.PASSDB} ${process.env.USERDB}`);

(async()=>{

    await sql.sync({force:false});

    app.listen(port ,()=>{
        console.log(`listening on port ${port}`)
    })


})();



