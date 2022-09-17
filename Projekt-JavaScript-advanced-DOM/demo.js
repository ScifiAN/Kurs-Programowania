const productNameinputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameinputElement);

const maxAllowedChars = productNameinputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharsElement === 0) {
    remainingCharsElement.classList.add("error");
    productNameinputElement.classList.add("error");
  } else if (remainingCharsElement <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameinputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameinputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameinputElement.classList.remove("warning");
  }
}

productNameinputElement.addEventListener("input", updateRemainingCharacters);
