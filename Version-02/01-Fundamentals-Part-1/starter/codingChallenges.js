/**************************************************************************************************************************************** 

CODING CHALLENGES:

***************************************************************************************************************************************/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark
has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

////////////////////////////////////
/*

// 1. Store Mark's and John's mass and height in variables:

// Test Data 1:

let massMarkTD01 = 78;
let heightMarkTD01 = 1.69;
let massJohnTD01 = 92;
let heightJohnTD01 = 1.95;

// 2. Calculate both their BMIs using the formula:

let markBMI;
let johnBMI;
console.log(massMarkTD01 / heightMarkTD01, heightMarkTD01 ** 2); // 46.15384615384615  2.8560999999999996

// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John:

let markHigherBMI = 46.15;
let johnHigherBMI = 2.85;


// Mark do have a higher BMI than John:

console.log(markHigherBMI > johnHigherBMI); // true


// Doing a bit of string concatination work to show off my basic coding skills:

console.log('Mark BMI is' + ' ' + markHigherBMI + 'kg' + ', ' + 'John BMI is' + ' ' + johnHigherBMI + ' m '); // 

*/

/* 

Checking my answeres with the solution Test Data 1:

The lecture used 'const' not let but to me the these values may change in the future as people to get shorter when the get older and can
put on weight in the winter months. However, since I know that I'll NOT be changing the values throughout the program, next time I'll use
'const' next time round - for Test Data 2.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMI = massMark / heightMark ** 2;
const BMI = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); // 27.309968138370508  24.19460880993426

I've not created the separate calculations but logged straight to the console, so my solutions looks different to the lectures solution.
I'm not getting the same results as the lecture, which I think is a problem ?

Step 3: is the BMI higher than the BMI of John using the conparison operator:

const markHigherBMI = BMIMark > BMIJhon; // true
console.log(BMIMark, BMIJohn, markHigherBMI); // true

Checking my answeres with the solution Test Data 2:

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

The rest is the same. That is the advantage of using variables.

*/

/*****************************************************************************************************************************************

CODING CHELLENGE 02:

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 

My output (the figures) from my Coding Cheelenge is different to the solution. Therefore, for this Coding Chellenge 02, I am using the
solution code as a starting point.

*******************************************************************************************************************************/
/*
// Test Data 01:
// Mark's and John's mass and heigh in variables:
// Test Data 01:
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Test Data 02:
// Mark's and John's mass and heigh in variables:
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// Calulate both their BMIs using the formula:
// BMI = mass / height ** 2 or height * height
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// Check these values that they make sense:
// Logout to see if my if-else statement is working:
console.log(BMIMark, BMIJohn); // 27.309968138370508  24.19460880993426

// Part 01: Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or
// "John's BMI is higher" than Mark's!
// Write the condition directly in the 'if-statement' block.
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's." )
} else {
    console.log("John's BMI is higher than Mark's.");
}

// Part 02: Use a Template Literal rather than quotes to include the actual BMI values:
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}).`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}).`);
}
*/

/******************************************************************************************************************************** 

CODING CHALLENGE 03:

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition, and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

********************************************************************************************************************************/

// 1. Calculate the average of both teams:
// create one variable for each team. To calculate the average, I add up all the three scores then divide it by 3.
// I need the parenthises so that the plus operations calculation is executed first so that the grouping has a higher precedence. 
// Dolphins have higher average.
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas); // 97.66666666666667 96.33333333333333

// 2. Compare the average of both teams:
// Use if-else statement
// If Dolphins average score is higher than Koalas average score, then logout to console: Dolphins wins the trophy.
if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if(scoreDolphins === scoreKoalas) {
    console.log('Both wind the trophy');
}