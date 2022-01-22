// console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";

//Add an elelmrnt
//1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "this leads to Google";

//2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent content

firstParagraph.append(newAnchorElement);

//Remove elements
//1. Select the element that should br removed

let firstH1Element = document.querySelector("h1");

//2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); //for older browser

//Move elements

firstParagraph.parentElement.append(firstParagraph);

//inner HTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi. This is <strong> important! </strong>.";
