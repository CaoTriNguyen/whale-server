const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: '111111',
    database: 'basechatapp',
});

// open the MySQL connection
connection.connect((error) => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});

module.exports = connection;
