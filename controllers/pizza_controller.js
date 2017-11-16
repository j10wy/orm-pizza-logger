const express = require('express');
const router = express.Router();
const pizza_model = require('../models/pizzas');

router.get('/', function (req, res) {
	res.render('index');
});

router.get("/pizza", function pizzaRoute(request, response) {

	var results = pizza_model.selectAll(function (results) {
		console.log(results);
	});


	//console.log(request.body);
	response.json();

});

module.exports = router;