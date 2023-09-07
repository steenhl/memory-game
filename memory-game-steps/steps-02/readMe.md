<style>
 .a{
  font-size:18px;
  max-width:700px;
  
 }
 .a blockquote{
    color:#000000
}
   
 
</style>

<div class="a">

# Description

javascript has the ability to create and insert new html. We will investigate the possibility by creating new cards

- W3 schools [https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp]
- insertAdjacentHTML[https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML]

## Create new HTML

First task insert a html `<li>` element inside the `<ul>` element

1. Select the `<ul>` element inside index.html document. User the querySelector and the id name of the ul

   > - e.g. `document.querySelector()`

2. Insert the element
   > - e.g. String `<li class="card" data-card="0"><span class="front">Card number</span></li>`
   > - `ulElemnt.insertAdjacentHTML("beforeend", htmlString)`
3. Create a function that takes one parameter the **_html string_**. Use the html string inside the function to create a
   new dom element

4. Create a function that takes one parameter the **_number of cards_**
   > - `e.g. function nameOfFunction(number_of_cards) {}`
   > - Inside the function create a for loop. The loop must run as many times as the first parameter to the function
        indicates
   > - e.g. `for(let i = 0; i < ???; i++) {}`
5. Inside the for loop use the function `insertHtml(htmlString)` to insert the html list item

6. The Template Literals string has the ability to contain variables. Use this option to dynamically change the card
   number
   > - **\<span class="front">Card number ${i}\</span>**
   > - `<li class="card" data-card="0"><span class="front">Card number</span></li>`
7. Do the same with the attribute `data-card="0"`

8. we need two identical cards, make one more card to insert
   </div>
