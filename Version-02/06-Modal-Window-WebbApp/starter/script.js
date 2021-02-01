'use strict';

// select the elments that we need then store into a variable. Then we can use them over and over again.
// HTML file: The hidden class is the main class that we will be working with.
// Will NOT be creating the HTML for the modal window using JS. We only need to show it and to hide it, according to the clicks on the buttons.
// The overlay is the darker part around the text box when the window is open.
// We need to select the modal, the overlay, the close modal button and the show modal buttons. 
// 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.close-modal');
const btnCloseModal = document.querySelector('.close-modal');
// querySelectorAll: will give us a NodeList of all 3 of our buttons. A way of selecting multiple element within the the same class. Then do something for
// each of them, i.e. log their text content to the console.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Loop through the NodeList and do something to them. 
// No need for braces to define the code body as only have one line of code to execute.

for (let i = 0; i < btnsOpenModal.length; i++)
// 3 of the text contents for 3 of the buttons.
    console.log(btnsOpenModal[i].textContent);


