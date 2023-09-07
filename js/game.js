function docReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

docReady(function () {
	const memoryGame = document.querySelector(".memory-game");
	const cards = memoryGame.querySelector(".cards");
	const allCards = cards.children;
	const cardArray = [...allCards];
	const matchCardList = [];
	const reset = memoryGame.querySelector(".reset");
	const resetButton = reset.querySelector("button");
	const timeToFlipBack = 500;
	const massage = "Congratulations you did";
	// className
	const done = "done";
	const fin = "fin";
	const flipped = "flipped";

	const flip = (pointerEvent) => {
		let thisCard = pointerEvent.currentTarget;

		if (thisCard.classList.contains(flipped)) {
			thisCard.classList.remove(flipped);
		} else {
			thisCard.classList.add(flipped);
			matchCardList.push(thisCard);
			checkMatch();
		}
	};

	const checkMatch = () => {
		if (matchCardList.length > 1) {
			// check for 2 card for match
			let card1 = matchCardList[0];
			let card2 = matchCardList[1];
			// cards are identical
			if (card1.dataset.card === card2.dataset.card) {
				card1.classList.add(done);
				card2.classList.add(done);
				card1.removeEventListener("click", flip);
				card2.removeEventListener("click", flip);
				checkIsFinish();
			} else {
				flipBack();
			}
			// reset matchCardList
			matchCardList.length = 0;
		}
	};

	const flipBack = () => {
		if (matchCardList.length > 1) {
			matchCardList.forEach((c) =>
				setTimeout(function () {
					c.classList.remove(flipped);
				}, timeToFlipBack)
			);
		}
	};
	const checkIsFinish = () => {
		const numberOfCard = cardArray.length;
		let numberOfFlipped = cardArray.filter((c) => c.classList.contains(flipped)).length;
		if (numberOfCard === numberOfFlipped) {
			addElement("div", massage, fin, reset);
		}
	};
	// typeOfNode, text, className, element to appendTo
	function addElement(type, text, className, appendTo) {
		// create a new div element
		const newElm = document.createElement(type);
		// and give it some content
		const newContent = document.createTextNode(text);
		// add the text node to the newly created div
		newElm.appendChild(newContent);
		// add class
		newElm.classList = className;
		// add the newly created element and its content into the DOM
		const addToDomElement = document.querySelector(".reset");
		appendTo.appendChild(newElm, addToDomElement);
	}

	const resetGame = () => {
		// empty array
		matchCardList.length = 0;
		// remove classes
		cardArray.forEach((c) => c.classList.remove(flipped));
		cardArray.forEach((c) => c.classList.remove(done));
		// remove DOM element massage
		let finCard = document.querySelectorAll("." + fin);
		if (document.querySelectorAll("." + fin).length) {
			finCard.forEach((f) => f.remove());
		}
		startGame();
	};

	const startGame = () => {
		// shuffle card
		for (var i = cards.children.length; i >= 0; i--) {
			cards.appendChild(cards.children[(Math.random() * i) | 0]);
		}
		// append click listener
		cardArray.forEach((c) => c.addEventListener("click", flip));
	};
	startGame();
	resetButton.addEventListener("click", resetGame);
});
