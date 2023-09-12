let names = document.querySelector("#names");
let listItems = names.querySelectorAll("li");
let liArray = [];

listItems.forEach((elm) => liArray.push(elm));
// new code

liArray.forEach((elm) => {
	let data = elm.getAttribute("data-person");
});
