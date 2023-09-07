// DOM selectors
const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
}

// cardArra;

function createCards(numberOfCars) {
	// for loop
	for (let i = 0; i < numberOfCars; i++) {
		insertHtml(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
		insertHtml(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
	}

	// ,,??,, _.shuffle(cardArra);
	// insertCard(shuffleCarsArray);
}

// function insertCard(cardList){???}

createCards(10);
