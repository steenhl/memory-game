<style>
 .a{
  font-size:18px;
 }
 
</style>

<div class="a">

# Description

1. Create tre DOM selectores and save them in a variable
   > - Select the DOM item : `id="cards-wrapper"`
   > - select the DOM items : `class="card"`
   > - select the DOM item : `id="respons"`

## loops

### Create a forEach loop

2. Create a loop on listItem (`class="card"`)
   > - Try two types of loop: forEach and for loop
   > - `card.forEach((li) => {})`
   > - Use console.log() to see each li

### Create a for loop

3. Create a for loop
   > - `for (let i = 0; i < card.length; i++) {}`
   > - `card[i]`
   > - `Use console.log()` to see each li: `card[i]`

## Eventlisterner

4. Create eventlistner inside eash loop, on the li DOM element
   > - Use `domElements.addEventListener("click", (event) => {})`
   > - Create a variable withe the name cardText
   > - Get the text from the click event -> `event.currentTarget.getAttribute('data-,,,,')`
   > - set the walue of the variable cardText equal to result from `event.currentTarget.getAttribute`

## Function

5. Create a function and name it **"respons"**
   > - The function takes one parameter: of type text
   > - Cal the function from inside the loop and inside the eventlistener
   > - `domElements.addEventListener("click", (event) => { respons(text) })`
   > - The text parameters is the data from the attribute **data-card**

  </div>
