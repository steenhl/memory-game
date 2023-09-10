let names = document.querySelector("#names");
let listItems = names.querySelectorAll("li");
let liArray = [];

listItems.forEach((elm) => liArray.push(elm));

// new elm
liArray.forEach((elm) => {
	let data = elm.getAttribute("data-person");
	console.log(data);
});
