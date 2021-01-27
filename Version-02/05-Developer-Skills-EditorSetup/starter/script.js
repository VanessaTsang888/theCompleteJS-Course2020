// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// declare a variable.
// Prettier is an opinionated code formatter meaning that they have a strong opinion so when we use the tool we have to accept that opinion.
// I called this variable: x. Yes, not very creative but for this purpose its just an example to demonstrate a string.
const x = '23';
// This is an example of a simple, one line Arrow Function to calculate the age of someone:
const calcAge = birthYear => 2020 - birthYear;

// Once I've made a change to this file (i.e. the below argument) and saved the change, the browse will auto update as it will trigger the reload.
// Even if I change something in the .html file, this will also trigger a reload.
console.log(calcAge(1991)); // Will logout: 29. Yes, I'm trying to make myself look younger, haha...

