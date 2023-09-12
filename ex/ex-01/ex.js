const names = document.querySelector("#names");
const li = names.querySelectorAll("li");

liItem = [];

li.forEach((elm) => {
	liItem.push(elm);
	// console.log(elm);
});
console.log(li);
console.log(liItem);
liItem.forEach((elm, index) => {
	console.log(index);
	console.log(elm);
});

// for (let index = 0; index < liItem.length; index++) {
// 	console.log(liItem[index]);
// }
