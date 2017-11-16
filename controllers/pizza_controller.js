const express = require('express');
const router = express.Router();
const pizza_model = require('../models/pizzas');

router.get('/', function (req, res) {
	res.render('index');
});

router.get("/pizza", function pizzaRoute(request, response) {

	pizza_model.selectAll(function (results) {
		response.json(results);
	});

});

module.exports = router;