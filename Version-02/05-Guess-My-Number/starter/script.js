'use strict';

/**************************************************************************************************************************************** 

SECTION 7. JavaScript in the Browser: DOM and Events Fundamentals.

70. Project 1: Guess My Number!

***************************************************************************************************************************************/

// QUICK INTRO TO THE DOM AND HOW TO SELECT AN ELEMENT FROM A PAGE: Interact with the DOM.
// In JavaScript we can select elements based on it's class (see index.html file).
// Select an element in JavaScript - a class
// Select the textContent element from a page:
// executed from left to right. The .textContent is text: Start guessing...
console.log(document.querySelector('.message').textContent);

// First DOM manipulation:
// Open the live server in Terminal.
// Open the Terminal tab her, use this command: live-server
// Then hit Enter key.


/**************************************************************************************************************************************** 

71. What's the DOM and DOM Manipulation:
What and how it works and what it looks like:

Make JS interact with a webpage: doing DOM Manipulation.
In the last lecture I already selected an element from a page, which means I've interacted with the DOM. Now, I'll learn what the DOM
actually is and how it works.

What is the DOM: Document Object Model:
A structured representation of HTML documents. Allows JavaScript to access HTML elements and styles to manipulate them.

The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them. Example,
we will be able to change text, to change HTML attributes and also to change CSS styles from our JavaScript. We can say that the
DOM is basically a connection point between HTML documents and JavaScript code.

The DOM is automatically created by the browser as soon as the HTML page loads. It's stored in a tree structure, generated by browser
on HTML load. In this tree, each HTML element is one object.

DOM Structure:
Tree structure: we use the terms:
child element, parent element, sibling element and so on when we talk about the DOM tree and DOM manipulation.
There is one element node and in DOM tree and we can access and interact with each of these nodes using JavaScript.
The DOM always starts with the document object, right at the very top. Document is special object that we have access to in JS, which
serves as an entry point into the DOM: document.querySelector...
This mean the document.querySelector is available on the document object. This is why the document is the entry point to the DOM,
as we need it to start selecting elements.
The first child element of the document is usally the HTML element - the root element in all HTML documents, that usually has 2
child elements, head and body - find them in the DOM tree. Then when we go deeper into the nested HTML structure, we keep adding more and
more children to the DOM tree. The paragraph element can have a child too which is the link element.
A DOM tree has more than just element nodes. It also has nodes for all the text itself, comments and other stuff. The rule is, what ever is in
the HTML document also has to be in the DOM. So the DOM is really the complete representation of the HTML document, so that we can manipulate it in
complex ways. 

DOM !== JavaScript:

The DOM Method and Properties for DOM Manipulation is NOT part of JavaScript as JS is just a dialect of the ECMAScript specification,
and all this DOM related stuff is simply not in there. Starting form this section, we'll use JS in a browser - to manipulate web pages
that are acutally displayed and rendared in the browsers. How it works is that the DOM and DOM methods are actually part of something
called the web API's, which are like libraries that browsers implement and that we can access from our JS code.
API: Application Programming Interface.

Web API: libraries written in JS, auto available behind the scense. DOM manipulation works the same in all browsers. Apart from the DOM,
there are lots more API's such as timers, the fetch API, etc.

***************************************************************************************************************************************/



/**************************************************************************************************************************************** 
 * 
 * 72. Selecting and Manipulating Elements:
 * 
 * 
***************************************************************************************************************************************/

/*

// Do more DOM manipulation:

// textContent: Start guessing...
console.log(document.querySelector('.message').textContent);

// Besides getting the text content, we can set the conent of the element, i.e. Correct Number! that's the winning phase.
// write what we want the new content to be:
document.querySelector('.message').textContent = 'Correct Number! 🎉';

// We need the HTML to get all the class names of the elements we want to manipulate.

// Set the '?' (which in the HTML is: .number) to 13
 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Manipulate the input field. We can get data from here and set it.
// The input field has class of guess ( class="guess"). Its an input element. 

// Manipulate this element:
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // 23

// If we want a number to appear when we click the Check! button, handlng a click of a button is in next video.

*/

/******************************************************************************************************************************************************
 * 
 * 73. Handling Click Events:
 * 
 * Make our app do something when we click on the 'Check!' button.
 * This will be the first time our code will reacts to something that happends in the DOM. That we need to use a Event Listener.
 * An event is something that happens on the page, i.e. a mouse click, a keyPress etc. Then with an Event Listener we can wait for a certain event
 * to happen and then react to it. 
 * 
 * Now we start building the app.
 * In order to listen for events, first select the element where the event should happen. In this case we want to listen to the event on this the button
 * element: the 'Check!' as this where it will happen. When we click on this button, something should happen. 
******************************************************************************************************************************************************/

// select the button element. Then Will return an element. Now on that element, we can call the addEventListener method, call it using the parenthesis.
// Pass-in the type of the event: 'click'. Tell the event listener what to do, specify the reaction to the 'click' event. We do that by defining a
// function which will contain exactly the code that should be executed whenever this click event happens on this 'Check!' btn. That function will be
// event handler. The addEventListener method is a special kind of function since as a second argument, it expects this event handler function that
// we just talked about. Pass-in a function value as an argument as a function is just another type of value.
// In the function body, specify what should happen - log to console the value in the input field. 

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);
});

// Now, theUser can type a number in to the input box, click the 'Check!' button and it will appear in the console.