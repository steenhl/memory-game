const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const resetButton = document.querySelector("#reset");

let cardArra = [];
// NEW
let numberOfCards = 6;

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
	// Select the last inserted element
	let li = cardsWrapper.querySelector("li:last-of-type");
	// EventLIstner Click
	li.addEventListener("click", handleClick);
}

// Object variabels
const clickedCard = { card1: null, card2: null, numberOfclick: 0 };
//
function handleClick(event) {
	let card = event.currentTarget;

	switch (clickedCard.numberOfclick) {
		case 0:
			// NEW
			// if card1 has been clicked
			if (clickedCard.card1) {
				clickedCard.card1.classList.remove("show");
			}
			// if card2 has been clicked
			if (clickedCard.card2) {
				clickedCard.card2.classList.remove("show");
			}
			// Reset cards object variables
			clickedCard.card1 = null;
			clickedCard.card2 = null;
			// update clickedCard Object
			clickedCard.numberOfclick = 1;
			clickedCard.card1 = card;
			clickedCard.card1.classList.add("show");

			break;
		case 1:
			// Reset
			clickedCard.numberOfclick = 0;
			// update clickedCard Object
			clickedCard.card2 = card;
			clickedCard.card1.classList.add("show");
			clickedCard.card2.classList.add("show");
			let card1Data = clickedCard.card1.getAttribute("data-card");
			let card2Data = clickedCard.card2.getAttribute("data-card");

			// If two cards have identical id's and
			// the two card is not the same card
			// Then remove the click event
			if (card1Data === card2Data && clickedCard.card1 !== clickedCard.card2) {
				clickedCard.card1.removeEventListener("click", handleClick);
				clickedCard.card2.removeEventListener("click", handleClick);
				clickedCard.card1.classList.add("don");
				clickedCard.card2.classList.add("don");
				// Reset cards object variables
				clickedCard.card1 = null;
				clickedCard.card2 = null;
			}
			break;
	}
}

function createCards(numberOfCars) {
	// for loop
	for (let i = 0; i < numberOfCars; i++) {
		cardArra.push(
			`<li class="card" data-card=${i}>
				<span class="front">Card number</span>
				<span class="card-number"> ${i}</span>
			</li>`
		);
		cardArra.push(
			`<li class="card" data-card=${i}>
				<span class="front">Card number</span>
				<span class="card-number"> ${i}</span>
			</li>`
		);
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

// START THE GAME
createCards(numberOfCards);

// NEW CODE
resetButton.addEventListener("click", () => resetGame());
function resetGame() {
	// Removing all cards
	clickedCard.card1 = null;
	clickedCard.card2 = null;
	clickedCard.numberOfclick = 0;
	cardArra = [];
	cardsWrapper.innerHTML = "";
	//cardsWrapper.replaceChildren();

	createCards(numberOfCards);
}
