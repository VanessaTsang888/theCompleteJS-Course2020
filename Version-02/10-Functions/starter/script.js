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

