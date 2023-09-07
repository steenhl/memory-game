<style>
 .a{
  font-size:18px;
  max-width:1000px;
  
 }
 .a blockquote{
    color:#000000
}
   
 
</style>

<div class="a">

# Description

Plan

- Adding click event to each card
- Check if two cards are identical
- If the cards are identical remove click event from both cards

## Inside the `insertHtml(htmlString){}` function

### Query the last inserted card

> - after `cardsWrapper.insertAdjacentHTML("beforeend", htmlString);`
> - use the **cardsWrapper** to select the last inserted card
> - `cardsWrapper.querySelector("li:last-of-type")`
> - Create a variable "li", and apply the value of the above query

### Adding click event

> - add a click event handler to the li variable
> - element.addEventListener("???", handleClick);
> - Eventlistneren tager to parametre
> - The first parameter to addEventListener(**parameter1**, parameter2) defines the type of event to listen for
> - The second parameter addEventListener(parameter1, **parameter2**) is the name of a function to be called when the
>   card is clicked

## Handle click

> - Create a function with the name handleClick
> - The function takes one _parameter_ the click event
> - function handleClick(event) {}
> - Create a variable withe the currentTarget of the event
> - `let card = event.currentTarget`
> - use `console.log(card)` to see the result

### Check if two cards are identical

We need to keep track of how many times the user click

> - If the user has clicked twice in a row, we need to check if the two card are identical
> - One way to do this is to keep the result of the number of clicks in a variable
> - Create a variable outside the function and each time the user click a card increment the variable with one
> - e.g. `let numberOfClick`
> - **Inside the handelClick function**, user the console.log() function to see the result of the increment
> - e.g `console.log(the name of the variable)`
> - If the user has clicked twice reset the value of the variable

#### compare the value of two cards

To get the value of a card we can use the card data-attribute

> - `<li class="card" data-card="0"><span class="front">Card number 0</span></li>`
> - The html \<li> has a attribute data-card="value"
> - We can use the function currentTarget and getAttribute() to achieve this
> - `let data = event.currentTarget.getAttribute("data-card");`

##### Try to find out how how you can compare two card

> - You have to use som variables
> - And you could use the previously created condition, but you will have to extend it with some more condition

---

   </div>
