const cardDom = document.querySelector("#card");
const responsDom = document.querySelector("#respons");

const myCardList = createCardList(3);

// Create cardlist
function createCardList(numberOfCards) {
	let list = [];

	for (let i = 0; i < numberOfCards; i++) {
		const card1 = { id: i, html: cardItem(i, `Card number ${i}`, `Back ${i}`) };
		const card2 = { id: i, html: cardItem(i, `Card number ${i}`, `Back ${i}`) };
		list.push(card1);
		list.push(card2);
	}

	return list;
}

// Create a card
function cardItem(id, cardFrontText, cardBackText) {
	const li = document.createElement("li");
	li.setAttribute("class", "card");
	li.setAttribute("data-card", `${id}`);

	const front = `<span class="front">${cardFrontText}</span>`;
	const back = `<span class="back"}"> ${cardBackText}</span>`;

	li.innerHTML = front;
	return li;
}

// object
const compareData = { id1: "", obj1: "", id2: "", obj2: "", numberOfClicks: 0 };
// Check if two card match
const isSame = (pointerEvent) => {
	// first click
	if (compareData.numberOfClicks === 0) {
		responsDom.innerHTML = "Not equal";
		compareData.id1 = pointerEvent.currentTarget.getAttribute("data-card");
		compareData.obj1 = pointerEvent.currentTarget;
		compareData.numberOfClicks++;
	} // second click
	else {
		compareData.id2 = pointerEvent.currentTarget.getAttribute("data-card");
		compareData.obj2 = pointerEvent.currentTarget;
		// Two clicked card match
		if (compareData.id1 === compareData.id2 && compareData.obj1 !== compareData.obj2) {
			console.log("Hit");
			console.log(responsDom.innerHTML);
			responsDom.innerHTML = "Card is equal";
		}
		// Reset OBJ compareData
		compareData.numberOfClicks = 0;
		compareData.id1 = "";
		compareData.id2 = "";
		compareData.obj1 = "";
		compareData.obj2 = "";
	}
};

// shuffle the list, user underscore function shuffle
// Underscore has been loaded by html script tag
const shuffleCardList = _.shuffle(myCardList);

insetCard(shuffleCardList, cardDom);

// inset card to DOM
function insetCard(cardList, appendToDom) {
	cardList.forEach((card) => {
		// Append card to DOM
		appendToDom.append(card.html);
		// Add eventlistner Click
		card.html.addEventListener("click", isSame);
	});
}
