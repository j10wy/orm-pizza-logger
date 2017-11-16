const orm = require('../config/orm');

const pizza = {
	selectAll: function (callback) {
		orm.selectAll(function (resultsObject) {
			callback(resultsObject);
		});
	}
}

module.exports = pizza;