let numSquares = 6;
let colours = randomColour(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.querySelector("#colourdisplay");
let messageDisplay = document.querySelector("#message");
let h1Display = document.querySelector("#h1id");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easybtn");
let hardButton = document.querySelector("#hardbtn");
let setMode;

easyButton.addEventListener("click", function () {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colours = randomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (let i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function () {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colours = randomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function () {
	colours = randomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	messageDisplay.textContent = " ";
	h1Display.style.background = "pink";
	this.textContent = "Reset Colours";
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i];
		h1Display.style.backgroundColor = "#pink";
	}
});

colourDisplay.textContent = pickedColour;

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colours[i];
	squares[i].addEventListener("click", function () {
		let clickedColour = this.style.backgroundColor;
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Nice! Correct";
			changeColour(clickedColour);
			h1Display.style.backgroundColor = clickedColour;
			resetButton.textContent = "Well Done! Play again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

const changeColour = (colour) => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	}
};

function pickColour() {
	let random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function randomColour(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(randomNum());
	}
	return arr;
}

function randomNum() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}
