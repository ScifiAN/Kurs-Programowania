// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const buttonRemoveParagrath = document.querySelector('button');
const buttonAddBackground = document.getElementById('background');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// function firstButton(){
//     // let firstButton = buttonRemoveParagrath.click; 1 version
//     // console.dir(firstButton)
//     console.dir(buttonRemoveParagrath) 2 version
// }

// function secondButton(event){
//     // let secondButton = event.target.click; 1 version
//     // console.dir(secondButton);
//     console.dir(event.target); 2 version
// }

// buttonRemoveParagrath.addEventListener('click', firstButton);
// buttonAddBackground.addEventListener('click', secondButton);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstParagrath = document.body.children[2].children[1];
const secondParagraph = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function firstButton(){
    secondParagraph.remove();
}

function secondButton(){
    // firstParagrath.style.backgroundColor = 'blue';
    // firstParagraph.className = 'blue-bg';
    firstParagraph.classList.add('blue-bg');
}

buttonRemoveParagrath.addEventListener('click', firstButton);
buttonAddBackground.addEventListener('click', secondButton);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

