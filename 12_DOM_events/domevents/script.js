var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

let listItems = document.querySelectorAll("li");


for (let item of listItems) {
	item.addEventListener('click', function() {
		item.classList.toggle('done');
	})
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let div = document.createElement("div");
	div.className = "card";

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	li.addEventListener('click', function() {
		li.classList.toggle('done');
	})


	let button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener('click', function() {
		button.parentElement.remove();
	})

	div.appendChild(li);
	div.appendChild(button);
	ul.appendChild(div);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
