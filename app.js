const productNameInputElement = document.getElementById('product-name');
const remainingChars = document.getElementById('remaining-char');


function updateRemainingCharachters(event){
    const enteredText = event.target.value;
    const enteredTextLength= enteredText.length;
    console.log(enteredText);
    console.log(enteredTextLength);
    const remainingCharacters = 60 - enteredTextLength;
    console.log(remainingCharacters);
    remainingChars.textContent = remainingCharacters;

}

productNameInputElement.addEventListener('input', updateRemainingCharachters )