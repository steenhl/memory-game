// DOM selectors
const cardDom = document.querySelector("#cards-wrapper");
const cardsDom = cardDom.querySelectorAll(".card");
// Get the text of the first card
const cardText = cardDom.querySelector(".front").innerHTML;

const responsDom = document.querySelector("#respons");

// Add eventlistener, get DOM attribute
cardsDom.forEach((li) => {
	li.addEventListener("click", (event) => {
		respons(event.currentTarget);
	});
});

// card object data
const cardObj = { card1: {}, card2: {}, numberOfClick: 0, timeIsActive: false };
// respons function
function respons(cardDom) {
	const cardIsDone = cardDom.classList.contains("done");
	// if two card is shown: STOP
	if (cardObj.timeIsActive) return;
	// if card is done: STOP
	if (cardIsDone) return;
	//
	if (cardObj.numberOfClick === 0) {
		cardObj.card1 = cardDom;
		cardObj.numberOfClick = 1;
		cardObj.card1.classList.add("active");
		//
		showCardNumber(cardObj.card1);
	} else if (cardObj.numberOfClick === 1) {
		cardObj.card2 = cardDom;
		cardObj.numberOfClick = 0;

		// if(cardObj.card2.classList.contains("active")){
		// 	// same obj

		// }

		const sameObj = objIsEqual(cardObj.card1, cardObj.card2);

		switch (sameObj) {
			case true:
				hideCardNumber(cardObj.card1, cardObj.card2);
				// rest card obj
				resetCardsObject();
				break;
			case false:
				const cardData1 = cardObj.card1.getAttribute("data-card");
				const cardData2 = cardObj.card2.getAttribute("data-card");

				showCardNumber(cardObj.card2);

				if (isCardNumberEqual(cardData1, cardData2)) {
					cardObj.card1.classList.add("done");
					cardObj.card2.classList.add("done");
				} else {
					hideCardNumber(cardObj.card1, cardObj.card2);
				}
				// rest card obj
				resetCardsObject();
				break;
		}
	}
	responsDom.innerHTML = cardDom.getAttribute("data-card");
}

function objIsEqual(obj1, obj2) {
	return obj1 === obj2;
}

function resetCardsObject() {
	cardObj.card1 = {};
	cardObj.card2 = {};
}

function showCardNumber(card) {
	const cardNumber = card.getAttribute("data-card");
	const spanDom = card.querySelector(".front");
	spanDom.innerHTML = `${cardText} ${cardNumber}`;
}

function hideCardNumber(card1, card2) {
	cardObj.timeIsActive = true;
	setTimeout(() => {
		card1.querySelector(".front").innerHTML = cardText;
		card2.querySelector(".front").innerHTML = cardText;
		cardObj.timeIsActive = false;
	}, 1000);
}

// Compare two thisCard
function isCardNumberEqual(card1, card2) {
	return card1 === card2;
}
