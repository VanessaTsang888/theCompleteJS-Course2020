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

/**************************************************************************************************************  

INTRO TO ARRAYS:

1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously.
Store this array into a variable called 'populations'

2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values.
Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

*************************************************************************************************************************************/

/*
// My Answers:
// 1. Array containing 4 population values of 4 countries. Store this array into a variable called 'populations'.
const populations = [10, 83, 5, 1441];

// 2. Log to the console whether the array has 4 elements or not (true or false).
console.log(populations); // (4) [10, 83, 5, 1441]

// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values.
// Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const percentages = ['Portugal', 'Germany', 'Finland', 'China'];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
const percPortugal = percentageOfWorld1(10);
const percGermany = percentageOfWorld1(83);
const percFinland = percentageOfWorld1(5);
const percChina = percentageOfWorld1(1441);

console.log(percPortugal, percGermany, percFinland, percChina); // 0.12658227848101267 1.0506329113924051 0.06329113924050633 18.240506329113924
*/

/* The Solution:

const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages); // Uncaught ReferenceError: percentageOfWorld1 is not defined at assignmentsFundamentalsP2.js:195

// This solution dont work due to the above error.
*/

/************************************************************************************************************************************* 

42. Intro to Objects:

1. Create an object called 'myCountry' for a country of your choice, containing prooperties 'country', 'capital', 'language', 'population', and
'neigbours' (an array like we used in previous assignments).

*************************************************************************************************************************************/
/*
const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 67,
    neighbours: ['Sally', 'Garry', 'Rachel', 'Jole', 'David', 'Martin', 'Ruth']
};
*/

/************************************************************************************************************************************* 
 43. Dot vs. Bracket Notation:
 
 
1. Using the object from the previous assignment, log a string like this to the console:
'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

**************************************************************************************************************************************/

// 1. Answer:
const jonasCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbouringCountries: ['Norway', 'Russia', 'Norway']
};

console.log(`${jonasCountry.country} has ${jonasCountry.population} million ${jonasCountry.language} speaking people,
 ${jonasCountry.neighbouringCountries.length} neighbouring countries and a capital called ${jonasCountry.capital}`); 

 // 2.
 // Using Dot Notation:
 jonasCountry.population += 2;
 console.log(jonasCountry.population);
// Using Bracket Notation:
 jonasCountry['population'] -= 2;
 console.log(jonasCountry.population);