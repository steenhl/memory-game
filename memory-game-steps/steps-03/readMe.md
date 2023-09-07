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

We now need to be able to shuffle our cards so they come in a more random order

## Shuffle cards

1. Create a empty `array let cardArra = []`;
2. Inside the createCards function and inside the for loop, comment out the two function calls to
   insertHtml(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`)
3. Now use the array.push function to insert the htmlString into the cardArray
   - `cardArra.push(li)`
4. Create a new function to handle the insertion of list items
   - `function insertCard(cardList) {}`
   - inside the insertCard function use a loop to insert the cards
   - e.g. `cardList.forEach((card) => {})`

### The cards we have now inserted is not shuffle and we need a shuffle function

5. **Shuffle function link**
   - underscore libraries [https://cdnjs.com/libraries/underscore.js]
   - underscorejs org [https://underscorejs.org/]
6. Use the "underscore.js" library link and insert the script tag into the html before any other script tag
   - `<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js"> </script>`
7. Shuffle the cards array
   - Inside the **createCards** function and after the for loop use the shuffle function
   - e.g. `_.shuffle(cardArra)`
   - The underscore sign **\_** is a call to the library and when we use the `_.shuffle(array)` The shuffle function
     from "underscore" returns a new shuffled array

> function createCards(numberOfCars) {<br>
>
> for (let i = 0;i < ???; i++) {}<br> let shuffleCarsArray = \_.shuffle(cardArra);<br> insertCard(???);<br>}

   </div>
