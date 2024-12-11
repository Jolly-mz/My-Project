var express = require ('express')
var ejs = require('ejs')
var mysql = require('mysql2');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

app.listen(port, () => console.log(`App is running on port ${port}!`))

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'tutors4you_app',
    database: 'tutors4you'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database')
});
global.db = db;
