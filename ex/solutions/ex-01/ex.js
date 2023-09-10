let names = document.querySelector("#names");
console.log(names);
let listItems = names.querySelectorAll("li");
console.log(listItems);
let liArray = [];

listItems.forEach((elm) => {
	liArray.push(elm);
});

for (let i = 0; i < liArray.length; i++) {
	console.log(liArray[i]);
}
