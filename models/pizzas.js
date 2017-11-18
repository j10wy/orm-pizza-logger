const orm = require('../config/orm');

const pizza = {
	selectAll: function (callback) {
		orm.selectAll(function (resultsObject) {
			callback(resultsObject);
		});
	},
	insertOne: function (insertObj, callback) {
		orm.insertOne(insertObj, function (resultsObject) {
			callback(resultsObject);
		});
	},
	updateOne: function (devoured, id, callback) {
		orm.updateOne(devoured, id, function (resultsObject) {
			callback(resultsObject);
		});
	}
}

module.exports = pizza;