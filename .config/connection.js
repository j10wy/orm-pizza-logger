const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'pizza_db'
});

module.exports = connection;