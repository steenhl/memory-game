const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

let cardArra = [];
let liCardArray = [];

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
			// Reset
			clickedCard.card1 = null;
			clickedCard.card2 = null;
			// update clickedCard Object
			clickedCard.numberOfclick = 1;
			clickedCard.card1 = card;

			break;
		case 1:
			// Reset
			clickedCard.numberOfclick = 0;
			// update clickedCard Object
			clickedCard.card2 = card;
			let card1Data = clickedCard.card1.getAttribute("data-card");
			let card2Data = clickedCard.card2.getAttribute("data-card");

			// console.log(clickedCard.card1 !== clickedCard.card2);
			// console.log(card1Data === card2Data);

			// Two cards have identical id's and
			// The two card is not the same card
			// Then remove the click event
			if (card1Data === card2Data && clickedCard.card1 !== clickedCard.card2) {
				clickedCard.card1.removeEventListener("click", handleClick);
				clickedCard.card2.removeEventListener("click", handleClick);
				clickedCard.card1.classList.add("don");
				clickedCard.card2.classList.add("don");
				console.log("DON");
			}
			break;
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
