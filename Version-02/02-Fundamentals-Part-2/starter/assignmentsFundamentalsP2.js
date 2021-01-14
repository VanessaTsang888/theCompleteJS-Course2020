// This is to Activate strict mode that make it easier for me to write secure JavaScript code:
'use strict';

/******************************** Assignments - JavaScript Fundamentals Part 2  *****************************************/

/************************************************************************************************************************************************************

Assignment: 33. Functions:

1. Write a Function called 'describeCountry' which takes three parameters: 'country', 'population', 'capitalCity'. Based on this input, the Function returns
a String with this format: 'Finland has 6 million people and it's capital city is Helsinki'.

2. Call this Function 3 times, with input data for 3 different countries. Store the returned values in 3 different variales, and log them to the console.



*************************************************************************************************************************************************************/

/* My Answer:
// 1. 

const country = 'Finland';
const population = 6;
const capitalCity = 'Helsinki';

const country = 'England';
const population = 67;
const capitalCity = 'London';

const country = 'China';
const population = 1.398;
const capitalCity = 'Beijing';


function describeCountry(country, population, capitalCity) {
    const country = `Finland has ${population} million people and it's capital city is ${capitalCity}.`;
    return country;
}

// 2.

const finlandCountry = describeCountry(Finland);
console.log(finlandCountry);

const englandCountry = describeCountry(England);
console.log(englandCountry);

const chinaCountry = describeCountry(China);
console.log(chinaCountry);
*/

// The Solution:

// 1.
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capial city is ${capitalCity}.`;
}

// 2.
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);




















