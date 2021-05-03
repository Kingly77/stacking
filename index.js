require('dotenv').config();
const expr = require('express')
const session = require('express-session')
const {Sequelize} = require('sequelize')
const hdbar = require('express-handlebars');
const config = require('./config')

const app = expr();
const port = 3001 || process.env.PORT;
const def = require('./routes');
const path = require('path');

app.engine('handlebars',hdbar());
app.set('view engine','handlebars');
// //if you want to use something else?
 app.set('view engine','pug');
// //Using body parsing
//app.use(expr.urlencoded({extended:true}))
//app.use(expr.json())

app.use(expr.static(path.join(__dirname,'control')))
// app.use(session({
//     resave: false,
//     saveUninitialized:false,
//     cookie:{},
//     secret:'fineheresaSecret'
//     })
// );


//Routing
app.use('/',def);

//console.log(`${process.env.PASSDB} ${process.env.USERDB}`);
//SERVER CREATION
(async()=>{

    await sql.sync({force:false});

    app.listen(port ,()=>{
        console.log(`listening on port ${port}`)
    })
})();



