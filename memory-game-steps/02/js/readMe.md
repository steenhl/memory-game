# Description

Compare two card for equality and user the function console.log to show the result

## Card object

> - Create a card object {}
> - The card object has tre object key
> - Key: **card1**
>   - Default Value: An empty object {}
> - Key: **card2**
>   - Default Value: An empty object {}
> - Key: **numberOfClick**
>   - Default Value: A number with the value of null

**e.g** `const cardObj = { card1: defaultValue, card2: defaultValue, numberOfClick: defaultValue };`

## ForEach loop

Inside the forEach loop change the parameter to **event.currentTarget**

`_cardsDom.forEach((li) => { li.addEventListener("click", (event) => { respons(event.currentTarget); }); });_`

## Respons function

The response function now receive a reference to the element that the user has just clicked on

`function respons(clickedElement) { }`

**Now we need to know if two card is equal**

- Inside the respons function create a condition
- Use the syntax **if(){} else{}**
- Compare if the value of **cardObj.numberOfClick** is equal to zero?

  - **If true**
    - Set the value of **cardObj.card1** equal to the parameter variable **clickedElement**
    - Set the **cardObj.numberOfClick** equal to the value of one
  - **if false**

        - Set the value of **cardObj.card1** equal to the parameter variable **clickedElement**
        - Set the **cardObj.numberOfClick** equal to the value of zero
        - Now we have to compare if **card1 data** is equal to **card2 data**

          - Create to const withe the data from the card object
            - `const card1Data = cardObj.card1.getAttribute("data-card");`
            - `const card2Data = cardObj.card2.getAttribute("data-card");`

        - Use the functin console.log() to compare the equality between **card1Data === card2Data**
        - **Or**: Create a function outside the **respons** function with the name **isCardEqual**
          - The function **isCardEqual** takes two parameter (card1Data, card2Data)
          - Inside the function compare card1Data and card2Data and return the result
          - Call the function inside the response function's else block and use console.log to see the result
