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

/*

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

*/


/* 

PRACTICE ASSIGNMENT: EQUALITY OPERATORS: == vs. ===

1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countreis does your country have?');

2. If there is only 1 neighbour, log to console 'Only 1 border!' (use loose == for now).

3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1.

4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value).

5. Test the code with different values of 'numNeighbours', including 1 and 0.

6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happends when there is exactly 1 border!
Why is this happening?

7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.

8. Reflect on why we should use the === operator and type conversion in this situation.

*/

/*

// 1 - 4:

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}
 // 5: Test the code with different values of 'numNeighbours', including 1 and 0.
 // Tested input of 1 and the console returned: only 1 border!
 // This is correct as it had executed the 'if' block which is what I expected.
 // Tested input of 0 and the console returned: No borders.
 // This is correct as its executed the 'else' block.

 // 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happends when there is
 // exactly 1 border! Why is this happening?
 // Tested with input of 1 but the console has logout: No borders
 // Unfortunately, I think this is because the Strict Equality Operator don't perform Type Coercion but just Conversion?
 // This means I need to do the conversion manually to make my code work the way I expect it to?

 // 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.
 // I just type Number and open parenthises infront of the 'prompt' keyword within the first line of code, and saved.
 // Tested with input of 1, and it works as now the console logout: Only 1 bord!
 // This is correct as it is what I expected.
 // Also tested with input 0, and it works as now the console logout: No borders
 // This is correct as it is what I expected to happen.

 // 8. Reflect on why we should use the === operator and type conversion in this situation.
 // I think the reason why I should use the Strict Equality Operator is because the Loose Equality Operator
 // the Loose Equality Operator full of strange rules and behaviours. So if I use this, it can introduce many hard to find bugs in my code.
 // For general rule for clean code, avoid this Loose Equality Operator as much as I can. Always try to use the Strict Equality Operator instead.
 // Its best practice even if I need Type Coercion. It's better to convert the value manually before the comparison than relying on the double equal operator.

*/

/**********************************************************************************************************************************************************   

ASSIGNMENT: LOGICAL OPERATORS:

1. Comment out the previous code.
2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not
an island.
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's
criteria. Take your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal'. If not, log 'Porrugal does not meet your criteria'.
5. Prbably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true
(unless you live in Canada).

**********************************************************************************************************************************************************/
 
/*

// Creating variable and assigning them a value:
// const country = England;
const population = 67;

const speaksEnglish = true; // variable A
const lessThan50millionPeople = false; // variable B
const isNotAnIsland = false; // variable C

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's
// criteria: a country that speaks English, has less than 50 million people and is not an island.

if (speaksEnglish && !lessThan50millionPeople && !isNotAnIsland) {
    console.log(`You should live in England`);
} else {
    console.log(`England does not meet your criteria`);
}

// My country don't meet all the criteria. I'm temporarily changing some variables in order to make the condition true so that the message in the 'if' block
// get executed.
// All I did was changed the varable names of variable B and C so that it uses the NOT operator: !

*/

/************************************************************************************************************************************************ 

THE SWITCH STATEMENT:

1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

************************************************************************************************************************************************/
/*

const givenLanguage = 'chinese';

switch (givenLanguage) {
    // if the given language is chinese or mandarin the this message will execute:
    case 'chinese': // language === 'chinese'
    case 'mandarin': // language === 'mandarin'
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place in number of native speakers'); 
        break;
    case 'hindi':
        console.log('4th place in number of native speakers');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too, but not on our list. Please try again.');               
}

// I've tested all the cases and if switch case works.

*/

/**********************************************************************************************************************************************************   

L28. THE CONDITIONAL (TERNARY) OPERATOR:

1. If your country's population is greater than 33million, use the ternary operator to log a string like this to the console: 'Portugal's population is
above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

**********************************************************************************************************************************************************/

// Declaring variable population and set it to value of 67 million:
const population = 130;

const England = population >= 33 ? 'England population is above average' : 'England population is below average';
// will logout: England population is above average
console.log(England); 

// Writing the conditional inside of a template literal:
// will logout: England population is above average. Is this Best Practice?
console.log(`England population is ${population >= 33 ? 'above average' : 'below average'}`);

// Changed the population to 13 and the result when logout is: England population is below average
// Changed the population to 130 and the result when logout is: England population is above average
