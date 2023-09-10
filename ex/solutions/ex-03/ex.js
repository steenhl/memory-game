let names = document.querySelector("#names");
let listItems = names.querySelectorAll("li");
let liArray = [];
let namesArray = [];
// Add all the li to the liArray
listItems.forEach((elm) => liArray.push(elm));
// add the names
liArray.forEach((elm) => {
	let data = elm.getAttribute("data-person");
	// new
	namesArray.push(data.toLowerCase());
});

// new
namesArray.forEach((name) => console.log(name));
namesArray.sort();
console.log("----");
namesArray.forEach((name) => console.log(name));
