'use strict';

/**************************************************************************************************************************************************** 

128. HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE (the memory address of the object):

How it works to pass arguments into functions. This goes back to Primitives vs. Objects. We also call primitives types as reference types.
This is a review of the lecture but applied to Functions. We need to understand how Primitives and Functions work in the context of functions.

****************************************************************************************************************************************************/

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













