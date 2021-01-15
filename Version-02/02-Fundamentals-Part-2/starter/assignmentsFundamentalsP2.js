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

/*
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
*/

/********************************************************************************************************************************************************************

Function Declarations vs. Expressions

1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the
percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

4. Create a function expression which does the exact samething, called 'percentageOfWorld2', and also call it with 3 country populations
(can be the same populations).


**********************************************************************************************************************************************************************/

/* MY ANSWERS

// 1.
function percentageOfWorld1(population) {
    return 7900 - population;
}

// Call the Function;
const worldPopulation1 = percentageOfWorld1(1441); // China's population
// Will logout the world population that the given population represent. China has 1441 million people, so I entered that as a value into the parameter as an argument.
// console.log(worldPopulation1); // 6459

// 2. calculate the percentage of the world population that the given population represents.
console.log(worldPopulation1 / 7900 * 100); // 81.75949367088607

// 3. 
function percentageOfWorld0(populationPortugal, populationGermany, populationFinland) {
    return 7900 - populationPortugal, populationGermany, populationFinland;
}


// The population of Portugal 10.28, Germany 83.02, Finland 5.518:
const worldPopulation0 = percentageOfWorld0(1028, 8302, 5518);
console.log(worldPopulation0); // 5518

// 4.

const percentageOfWorld2 = function(population) {
    return 7900 - population;
}

const worldPopulation2 = percentageOfWorld2(1028);
console.log(worldPopulation0, worldPopulation1, worldPopulation2); // 5518 6459 6872

*/

/*

// THE SOLUTION

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the
// percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

// 4. Create a function expression which does the exact samething, called 'percentageOfWorld2', and also call it with 3 country populations
// (can be the same populations).

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

console.log(percPortugal1, percChina1, percUSA1); // 0.12658227848101267 18.240506329113924 4.2025316455696204

*/












