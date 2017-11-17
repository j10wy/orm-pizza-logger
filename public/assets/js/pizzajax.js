// Create a reference to div.container
let container = document.getElementsByClassName('container')[0];
// Create a reference to div#not-devoured element
let notDevoured = document.getElementById("not-devoured");
// Create a reference to div#devoured element
let devoured = document.getElementById("devoured");

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
			let button = document.createElement("button");
			button.addEventListener("click", function () {
				notDevoured.innerHTML= "";
				getPizzas();
			});
			// Append the text node above to the button element
			button.appendChild(textnode);
			// Append the button to div#not-devoured
			notDevoured.appendChild(button);
		});

	});
}


getPizzas();