/**************************************************** 

PRACTICE ASSIGNMENT:
JavaScript Fundamentals - Part 1:

*********************************************************/

/* 

Values and Variables Assignment:

1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in millions).
2. Log their values to the console.

*/

/*

let country = 'England';
let continent = 'Europe';
let population = 67000;

console.log(country);
console.log(continent);
console.log(population);

*/


/* 

DATA TYPES ASSIGNMENT:

1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value.
Also declare a variable 'language',
but don't assign it any value yet.

2. Log the types of 'isIsland', 'population', 'country', and 'language' to the console.

*/

/*

const isIsland = true;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

// The Solution: I should of console logged out each variable on separate line rather than on same line. However, I think I have
// Answered question 01 correctly?

*/

/* 

let, const and var Assignment:

1. Set the value of 'language' to the language spoken where you live.
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these
variables to const.
3. Try to change one of the changed variables now, and observe what happens.

*/

/*
// let language = 'English';
const language = 'English';



// language = 'English';
const country = 'UK';
const continent = 'Europe';
const isIsland = true;
// isIsland = false; // error in console as per expected.


// Error Msg: Uncaught ReferenceError: Europe is not defined
// Europe is the value of a string for the variable called continent. Therefore, it is defined.
// I've changed the value of the variable: isIsland from a const to a non const which is a problem that I know of.

/* 

BASIC OPERATIORS ASSIGNMENT:

1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console.
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average country?
5. Based on the variables you created, create a new variable 'description' which contains a string with this fromat: 'Portugal is in
Europe, and it is 11 million people speak portuguese'.

*/
 /* My Code:

let population = 13; // 670000

console.log(population);
let firstHalfPopulation = (population) / 2;
console.log(population);

population++
console.log(population);

let country = 'England';
const continent = 'Europe';
// let population = 670000;
const language = 'English';

console.log(population);

console.log(population > 60000);

console.log(population < 330000);

// const description = country + ' is in  ' + continent + ' and it is ' + population + ' people speak ' + language;
// console.log(description);
*/


/*

STRINGS AND TEMPLATE LITERALS - ASSIGNMENT:
Recreate the 'description' variable from the last assignment, this time using the template literal syntax.

*/

/*
const description = `${country} is in ${continent}, and it is of ${population} million people speak ${language}`;
console.log(description);
*/

/*

TAKING DECISIONS: if / else Statements:

1. If your conuntry's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'.
Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population).

2. After checking the result, change the population temporily to 13 and then to 130. See the different results, and set the population back to original.

*/

/* Englands's population is above average.

if (population > 33) {
    console.log(`${country}'s population of ${population} million people is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million people below average`,
    );
}
*/

// Population changed to 13 million which is below the average of 33 million:
// This logs out as: England's population is 19 million below average. This means JS executes the 'else' block of the program.
// Population changed to 130 million which is above the average of 33 million:
// This logs out as: England's population is 131 million people above average.
// Basically, I've made use of both the 'if' and the 'else' block by changing the population figure. 

/* 

Practice Assignment: Type Conversion and Coercion:

1. Predict the result of these 5 operations without executing them:

'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

2. Execute the operations to check if you were correct.

*/

'9' - '5'; // 4
'19' - '13' + '17'; // 6 > '6' + '17' = '617'
'19' - '13' + 17; // 6 > 6 + 17 = 23
'123' < 57; // false (123 will be converted into a Number, and this figure is NOT less than 57. Therefore, JS will output false)
5 + 6 + '4' + 9 - 4 - 2; // 11 + 4 = 15 + 9 = 24 - 4 = 20 - 2 = 18

// 2. Execute the operations to check if you were correct:

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17) // 23
console.log('123' < 57); // false
// I think now understand why the output is 1143 and NOT 18?
// 5 + 6 = 11, convert to String to plus the '4' = 114. 9 - 4 = 5. Then 5 - 2 = 3. So, 11 + 4 + 3 = 1143. 
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


/* 

EQUALITY OPERATORS: == vs. ===

1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countreis does your country have?');

2. 



*/

