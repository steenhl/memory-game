const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

let cardArra = [];

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
	// Select the last inserted element
	let li = cardsWrapper.querySelector("li:last-of-type");
	// EventListner Click

	li.addEventListener("click", handleClick);
}

// number of clicked var
let numberOfClicked = 0;
let card1Data = null;
let card2Data = null;
// Handle function
function handleClick(event) {
	let card = event.currentTarget;
	let data = event.currentTarget.getAttribute("data-card");

	numberOfClicked++;

	if (numberOfClicked === 1) {
		card1Data = data;
	}
	//console.log(numberOfClicked);
	if (numberOfClicked === 2) {
		card2Data = data;
		if (card1Data === card2Data) {
			console.log("Card is equal");
		}
		console.log("The user has Clicked twice in a row");
		numberOfClicked = 0;
	}
}

function createCards(numberOfCars) {
	// for loop
	for (let i = 0; i < numberOfCars; i++) {
		cardArra.push(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
		cardArra.push(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
	}
	// use the underscore library _
	let shuffleCarsArray = _.shuffle(cardArra);
	insertCard(shuffleCarsArray);
}
function insertCard(cardList) {
	cardList.forEach((card) => {
		insertHtml(card);
	});
}

createCards(6);
