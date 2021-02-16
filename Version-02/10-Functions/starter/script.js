'use strict';

/**************************************************************************************************************************************************** 

128. HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE (the memory address of the object):

How it works to pass arguments into functions. This goes back to Primitives vs. Objects. We also call primitives types as reference types.
This is a review of the lecture but applied to Functions. We need to understand how Primitives and Functions work in the context of functions.

****************************************************************************************************************************************************/
/*

// Declare a variable named flight and assign it to a string value.
const flight = 'LH234';

// Create an Object named jonas who will be the passenger.
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 2473979284
}

// Create a check-in function. The passenger object contains info on the passenger.
// some changes the checkIn function do: the flight number has changed and the name of passenger.
// Check if passport number is correct as it contains info of the booked flight. FlightNum is a copy of flight.
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    // mannipulating passenger is same as manipulating jonas object, both are same object in memory heap.
    passenger.name = 'Mr. ' + passenger.name; // Mr. Jonas Schedtmann

    if (passenger.passport === 2473979284) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
}
// Call the check in function
// checkIn(flight, jonas);
// Log both the flight and the jonas object to the console.
console.log(flight); // 
console.log(jonas); // Mr. Jonas Schedtmann

*/

/*

// Same as doing this. Copying the reference of an object to the momeory heap, both point to the same object in memory.
// Passing a primitive type into a function is same as creating a copy like this outside of the function so the vaule is simply copied.
// const flightNum = flight;
// const passenger = jonas

// jonas changed his passport before he checkIN
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);
}
// Call the function newPassport. Two functions manipulating the same object, creating a problem. Becareful with this kind of issue.
newPassport(jonas); 
checkIn(flight, jonas); // Wrong passport!

// When dealing with functions, two terms are used, passing by value and passing by reference (the memory address of the object). JS does not have passing by
// reference, only passing by value. However, the reference itself is still a value - its a value that contains a memory address.
// We pass a reference to the function but we do not pass by reference, 

*/

/**************************************************************************************************************************************************** 

129. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS:

JS treats functions as first-class citizens.
This means functions are simply values and treated as values.
Functions ar just another type of object.

Pass Functions as Arguments to OTHER functions:
since objects are values, functions are values too, so we can do some interesting things with them:
storing them in variables or object properties. We can also pass functions as argumetns to other functions, i.e. when adding event listeners or event handlers
to DOM objects: we pass the greet function into the addEventListener function as a value. 

Return functions FROM functions:
We can also return a function from anyother function - crazy but can
be very useful. 

Call methods on functions:
as functions are objects. There are function methods which are methods that we can call on functions, i.e. the 'bind' method.

First-class functions allows us to write higher-order functions:
Higher-order function is either a function that receives another function as an argument, or a function that returns a new function or both.

A function that receives another function:
The addEventListener function is the Higher-order function as it receives another function as an input - the greet function. The function that has been
passed-in the known as the Callback Function as the Callback function will be called later by the higher-order function, the addEventListener will call
the greet callback later as soon as the click event happens.

The confusion between First-class functions and Higher-order functiions:
The are NOT the same thing, they mean different things.
First-class functions: just a feature that a language either has or does not have = it means all functions are values. No First-class functions in
practice as its just a concept.

Higher-order functiions:
There are Higher-order functiions in practice as JS supports First-class functions.


****************************************************************************************************************************************************/


/**************************************************************************************************************************************************** 

130. Functions Accepting Callback Functions:

Callback functions are the vital part of the JS language.
Learn What is Abstraction:

Create a function that accepts other functions as an input. But to start with create two generic functions that do simple string transformations.

****************************************************************************************************************************************************/
/*

// Create a function that accepts other functions as an input. But to start with create two generic functions that do simple string transformations.
// This will replaces all spaces in a word.
// To select all spaces we use the Regular Expression with the G-flag and then replace them with an empty string. Then convert to lowcase letters.
// This will work with any string and returns a new one without any spaces in it.

const oneWord = function(str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

// Another one that also takes in a string. Will transform the first word of the input string to uppercase.
// First split the string using the empty string. Then take the results and destructure it into the first word (using the destructuring assignment),
// then all the other words (using Spread Operator - the rest pattern). Then return a new array that we'll join using empty string.

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function:
// named transformer, also take-in a string, aa second arugment it will take in a function. Therefore, this is a Higher-Order function.
// It takes in a function since it takes in a function.

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`); // Original string: JavaScript is the best!
    console.log(`Transformed string: ${fn(str)}`); // Transformed string: JAVASCRIPT is the best!

    // Functions can have methods and properties inc. the name property. Read the name property from the fn function that the Higher-Order function takes-in.
    // The name property is just the name of the function - upperFirstWord
    console.log(`Transformed by: ${fn.name}`); // Transformed by: upperFirstWord
};

// Call the transformer function.
// Transfor the string (the first parameter) using the upperFirstWord function. We are only passing-in the function value itself rather calling the upperFirstWord
// function. Its the transformer function calling the upperFirstWord function.
// The upperFirstWord function calls the fn which is the second parameter above
transformer('JavaScript is the best!', upperFirstWord); 

// Will lgoout:
// Transformed by: oneWord
// The oneWord function is the callback function as we call these functions that we pass-in. The transformer function that will call these Callback functions.
transformer('JavaScript is the best!', oneWord); //  

// Built-in Functions:
// addEventListener function is the Higher-order function just like the transformer function.
const high5 = function() {
    console.log('👋');
}
// The high5 is the Callback function (just like the oneWord or upperFirstWord) that gets called by the addEventListener function.
// When click on the body of the UI, will logout this: 👋
document.body.addEventListener('click', high5); // 👋

// This concept of Callback Functions is used all the time in built-in JS functions.
// There are many other examples incl. the for-each function that we call on arrays:
// On that array we call the for-each method, pass-in a Callback function into the for-each method (use high5).
// Result: will logout x3 waves with the same hand wave, as we have 3 values in the array.
// The method say: for each of them (the values) the CallBack will be called. Therefore, we have 3 wavings.
['Jonas', 'Martha', 'Adam'].forEach(high5);

// The transformer is the Higher-order function with high level of Abstraction 
// Callback functions allow us to create Abstraction. In the first 3 functions we created, we actually create a level of Abstraction. 
// Abstraction means we hide the detail of some code implementation as we don't care that detail. This allows us to think about problems at a higher more
// abstrat level. The transformer function don't care how the string is transformed, all it wants to do is transform a string but don't care how it should
// do it. We could of take the transformer code and written it into the oneWord or upperFirstWord function as that would work just the same but instead
// we abstracted this code away into other functions - we created a new level of abstraction and by doing this our transformer function is only concerned with
// transforming the input string itself, no matter how that works. So its deligating the string transformation to the other lower level of functions, the
// oneWord and the upperFirstWord.
// The tranformer function is the Higher-order function as it operates at a higher level of abstruction, leaving the lower level details to the lower level
// functions.
// Abstraction allows us to create the Higher-order logic as above.
// My task: write my own example of Higher-order function using something I see in the real world using the same concept.
// Within the built-in functions i.e. for-each method, these Callback functions are so important as we use them to tell these function what they should
// so. The high5 is the lower level function with lowwer level of Abstraction.

*/

/**************************************************************************************************************************************************** 

131. Functions Returning Functions

Create a function that returns a new function.


****************************************************************************************************************************************************/

// Return a new function value that has a parameter - will be able to receive arguments.
const greet = function(greeting) {
    return function(name) {
        // Will logout the greeting and the name of the person we pass into this function
        console.log(`${greeting} ${name}`);
    }
}

// Use the greeting function by passing-in a string Hey which is the greeting. The result of this function call will be the greet function.
// Store it in a variable named greeterHey which is a function now that's the function that is being returned with the template litral.
// So we can call the greeterHey function just as if it was any other function we define ourselves.
const greeterHey = greet('Hey');
// Call the greeterHey function with an argument of a name.
// The greeterHey is esstentally the return function.
// This works due to closures.
greeterHey('Jonas'); //  Hey Jonas
greeterHey('Steven'); // Hey Steven

// The first function greet returned a new function that we stored into a new variable named greeterHey which makes it a function that we can call after
// using the parenthesis syntax with an argument. We can do this all in one job which will make it a function so we can immediately call it.
greet('Hello')('Jonas'); // Hello Jonas

// Functions returning other functions will be useful if we are using programming paragdigm called functional programming.

// Rewrite the greet function using only Arrow Functions - only one line of code which returns something:
// Don't need the braces or the return statement.
// Takes greeting as an argument. Going to return a new function.
// It's simply one arrow function returning another arrow function.
// This is a shorter way of writing the greet function but more confusing than the more traditional way above.
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// Call it with a message.
greetArr('Hi 你好')('I\'m Vanessa'); // Hi 你好 I'm Vanessa








