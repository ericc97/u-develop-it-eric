const mysql = require('mysql2');


// connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySql username,
        user: 'root',
        // your MySql password
        password: '9217Hurleycove!',
        database: 'election'
    },
    console.log('Connected to the election database')
);


module.exports = db;