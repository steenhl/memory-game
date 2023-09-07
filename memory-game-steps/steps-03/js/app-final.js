const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
}

let cardArra = [];

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
// insert card
function insertCard(cardList) {
	cardList.forEach((card) => {
		insertHtml(card);
	});
}

createCards(6);
