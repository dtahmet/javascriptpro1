let productNameInputElement = document.getElementById('product-name');
let remainingChars = document.getElementById('remaining-chars');


function updateRemainingCharachters(event){
    let enteredText = event.target.value;
    let enteredTextLength= enteredText.length;
    console.log(enteredText);
    console.log(enteredTextLength);
    let remainingCharacters = 60 - enteredTextLength;
    console.log(remainingCharacters)

}

productNameInputElement.addEventListener('input', updateRemainingCharachters )