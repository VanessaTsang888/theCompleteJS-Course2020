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
What and how it works.

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





***************************************************************************************************************************************/

