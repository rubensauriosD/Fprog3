const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'peti96_cnc',
    database: 'finalprog3',
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Connected to database');
})

module.exports = connection;