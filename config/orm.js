var sql = require('./connection');

const orm = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne
}

module.exports = orm;

// Keeping all function declarations below module.exports. I feel this makes the file a little more readable to humans, and works fine since these functions are hoisted at run-time.

function selectAll(callback) {
	sql.query('SELECT * FROM pizzas', function (error, results) {
		if (error) {
			throw error;
		}
		callback(results);
	});
}

function insertOne() {
	sql.query('SELECT * FROM pizzas', function (error, results) {
		if (error) {
			throw error;
		};
		callback(results);
	});
}

function updateOne() {
	sql.query('SELECT * FROM pizzas', function (error, results) {
		if (error) {
			throw error;
		};
		callback(results);
	});
}