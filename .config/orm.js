var sql = require('./connection');

orm = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne
}

module.exports = orm;

function selectAll() {
	sql.query('SELECT * FROM pizzas', function (error, results) {
		if (error) throw error;
		console.log(results);
		sql.end();
	});
}

function insertOne() {
	console.log("insertOne");
}

function updateOne(){
	console.log("updateOne");
}