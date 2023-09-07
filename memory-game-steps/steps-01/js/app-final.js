// DOM selectors
const cardDom = document.querySelector("#cards-wrapper");
const cardsDom = cardDom.querySelectorAll(".card");
const responsDom = document.querySelector("#respons");
// Add eventlistener, get DOM attribute
cardsDom.forEach((li) => {
	li.addEventListener("click", (event) => {
		console.log(event.currentTarget.getAttribute("data-card"));
		respons(event.currentTarget.getAttribute("data-card"));
	});
});

function respons(responsText) {
	responsDom.innerHTML = responsText;
}
