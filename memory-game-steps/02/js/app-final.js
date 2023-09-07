// DOM selectors
const cardDom = document.querySelector("#cards-wrapper");
const cardsDom = cardDom.querySelectorAll(".card");
const responsDom = document.querySelector("#respons");
// Add eventlistener, get DOM attribute
cardsDom.forEach((li) => {
	li.addEventListener("click", (event) => {
		respons(event.currentTarget);
	});
});

// card object data
const cardObj = { card1: {}, card2: {}, numberOfClick: 0 };
// respons function
function respons(clickedElement) {
	if (cardObj.numberOfClick === 0) {
		// cardObj.card1 = responsText;
		cardObj.card1 = clickedElement;
		cardObj.numberOfClick = 1;
	}
	// if (cardObj.numberOfClick === 0) {
	else {
		// cardObj.card2 = responsText;
		cardObj.card2 = clickedElement;
		cardObj.numberOfClick = 0;
		// Get card number
		const card1Data = cardObj.card1.getAttribute("data-card");
		const card2Data = cardObj.card2.getAttribute("data-card");

		const cardIsEqual = isCardEqual(card1Data, card2Data);
		console.log(cardIsEqual);
	}
	responsDom.innerHTML = clickedElement.getAttribute("data-card");
}
// Compare two card
function isCardEqual(card1Data, card2Data) {
	return card1Data === card2Data;
}
