'use strict';
// adding and removing classes is the main way in which we change styles on websites.
// select the elments that we need then store into a variable. Then we can use them over and over again.
// HTML file: The hidden class is the main class that we will be working with.
// Will NOT be creating the HTML for the modal window using JS. We only need to show it and to hide it, according to the clicks on the buttons.
// The overlay is the darker part around the text box when the window is open.
// We need to select the modal, the overlay, the close modal button and the show modal buttons. 
// 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelectorAll: will give us a NodeList of all 3 of our buttons. A way of selecting multiple element within the the same class. Then do something for
// each of them, i.e. log their text content to the console.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// a function expression.
const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// for-loop to Loop through the NodeList and do something to them. An array holding all the buttons.
// No need for braces to define the code body as only have one line of code to execute.
for (let i = 0; i < btnsOpenModal.length; i++)
// 3 of the text contents for 3 of the buttons.
// Attached an Event Handler function to each of the 3 buttons.
// Handler function: Instead of reading the text content property, We'll call the addEventListener method. Second argument is anonymous function which is also
// a function expression.
    // console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);


// JavaScript will call this function
// Add the hidden class back-on which will hide the modal.
    btnCloseModal.addEventListener('click', closeModal);

    // Click outside of the modal, and the modal will close:
    overlay.addEventListener('click', closeModal);




