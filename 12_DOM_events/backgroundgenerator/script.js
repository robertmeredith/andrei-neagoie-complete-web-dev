var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById('random-button')

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


setGradient();

function createRandomColors() {
	col1 = randomColor();
	col2 = randomColor();
	col3 = randomColor();
	return rgbToHex(col1, col2, col3);
}

function randomColor() {
	return Math.floor(Math.random() * 256);
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function newRandomGradient() {
	color1.value = createRandomColors();
	color2.value = createRandomColors();
	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", newRandomGradient);