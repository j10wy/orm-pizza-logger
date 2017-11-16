let container = document.getElementsByClassName('container')[0];
let notDevoured = document.getElementById("not-devoured");
let devoured = document.getElementById("devoured");

axios.get("/pizza").then(function (response) {
	let responseArray = response.data;

	responseArray.map((item) => {
		let textnode = document.createTextNode(item.pizza_name);
		let button = document.createElement("button");
		button.appendChild(textnode);
		notDevoured.appendChild(button);
	});

});