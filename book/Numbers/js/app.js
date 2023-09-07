const sides = prompt("How many sides does the dice have?");
alert("Press Enter or click close to roll the dice...");
const number = Math.ceil(sides * Math.random());
alert(`The dice landed on the number ${number}`);
