require('dotenv').config();
const expr = require('express')
const session = require('express-session')
const hdbar = require('express-handlebars');
const sql = require('./models/connections');
const app = expr();
const port = process.env.PORT || 3001;
const def = require('./routes');
const path = require('path');

app.engine('handlebars', hdbar());
app.set('view engine', 'handlebars');

app.use(expr.urlencoded({ extended: true }))
app.use(expr.json())

app.use(expr.static(path.join(__dirname, 'public')));
app.use(expr.static(path.join(__dirname, 'public/control')));


// app.use(session({
//     resave: false,
//     saveUninitialized:false,
//     cookie:{},
//     secret:'FineHeresASecret'
//     })
// );

//Routing
app.use('/', def);

//SERVER CREATION
(async () => {
    await sql.sync({ force: false });

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})();



