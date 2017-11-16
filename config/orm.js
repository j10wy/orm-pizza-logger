var sql = require('./connection');

const orm = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne
}

module.exports = orm;

// Keeping all function declarations below module.exports. I feel this makes the file a little more readable to humans, and works fine since these functions are hoisted at run-time.

function selectAll(callback) {
	return sql.query('SELECT * FROM pizzas', function (error, results) {
		if (error) throw error;
		sql.end();
		callback(results);
	});
}

function insertOne() {
	console.log("insertOne");
}

function updateOne() {
	console.log("updateOne");
}