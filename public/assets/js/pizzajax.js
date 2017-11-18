// Create a reference to div.container
let container = document.getElementsByClassName('container')[0];
// Create a reference to div#not-devoured element
let notDevoured = document.getElementById("not-devoured");
// Create a reference to div#devoured element
let devoured = document.getElementById("devoured");
// Create references to the form and it's submit button
let submitButton = document.getElementById("submit");
let newPizzaForm = document.getElementById("newPizzaForm");

// Prevent the default behavor of the form submit
newPizzaForm.addEventListener("submit", function (event) {
	event.preventDefault();
	addPizza();
});

// Call getPizzas when page loads
getPizzas()

// Use the axios library for HTTP requests
// This will run on page load.
function getPizzas() {
	axios({
		method: 'GET',
		url: '/pizza'
	}).then(function (response) {
		// The store the respinse (an array) in the responseArray variable.
		let responseArray = response.data;

		// Clear div#not-devoured
		notDevoured.innerHTML = "";
		// Map over the items in responseArray
		responseArray.map((item) => {
			// Create a text node that holds the name of each type of pizza
			let textnode = document.createTextNode(item.pizza_name);
			// Create a button and listen for click events
			let pizzaDiv = document.createElement("div");
			pizzaDiv.addEventListener("click", function (event) {
				event.preventDefault();
				devourAnEntirePizza();
				console.log("something")
			});
			// Append the text node above to the button element
			pizzaDiv.appendChild(textnode);
			pizzaDiv.setAttribute("data-id", item.id)
			// Append the button to div#not-devoured
			notDevoured.appendChild(pizzaDiv);
		});
	});
}

function addPizza() {
	let pizzaInput = document.getElementById("newPizza");
	let thePizza = pizzaInput.value

	if (thePizza.length < 1) {
		alert("Please enter the name of a pizza!");
		throw Error("Need name of a pizza!");
		return false;
	}

	axios({
		method: 'POST',
		url: '/add-pizza',
		data: {
			pizza_name: thePizza,
			devoured: 0
		}
	});
	// Clear div#not-devoured
	notDevoured.innerHTML = "";
	getPizzas();
	pizzaInput.value = "";
};

function devourAnEntirePizza() {
	console.log("THE THIS", this);
}