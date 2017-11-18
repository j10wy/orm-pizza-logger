// Create a reference to div.container
let container = document.getElementsByClassName('container')[0];
// Create a reference to div#not-devoured element
let notDevoured = document.getElementById("not-devoured");
// Create a reference to div#devoured element
let devoured = document.getElementById("devoured");

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
	event.preventDefault();
	addPizza();
});

// Use the axios library for HTTP requests
// This will run on page load.
function getPizzas() {
	axios.get("/pizza").then(function (response) {
		// The store the respinse (an array) in the responseArray variable.
		let responseArray = response.data;

		// Map over the items in responseArray
		responseArray.map((item) => {
			// Create a text node that holds the name of each type of pizza
			let textnode = document.createTextNode(item.pizza_name);
			// Create a button and listen for click events
			let pizzaDiv = document.createElement("div");
			pizzaDiv.addEventListener("click", function (event) {
				event.preventDefault();
				notDevoured.innerHTML = "";
				getPizzas();
			});
			// Append the text node above to the button element
			pizzaDiv.appendChild(textnode);
			// Append the button to div#not-devoured
			notDevoured.appendChild(pizzaDiv);
		});

	});
}

function addPizza() {
	let pizzaInput = document.getElementById("newPizza").value;
	// let textnode = document.createTextNode(item.pizza_name);
	// let pizzaDiv = document.createElement("div");
	console.log(pizzaInput)
}

//getPizzas();