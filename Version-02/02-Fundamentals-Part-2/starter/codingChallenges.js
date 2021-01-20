// Strict mode activated:
'use strict'

/*********************************************************************************************************************************************

JavaScript Fundamentals Part 2 - Coding Challenges:

***************************************************************************************************************************************************/

/****************************************************************************************************************************************************
38. Coding Challenges 1: All about Functions.

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'check Winner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs
the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

***************************************************************************************************************************************************/
/*
 // 1. Create an Arrow Function 'calcAverage' to calculate the average of 3 scores
 // A generic function that calculates averages of any 3 numbers: a, b, c
 // adding 3 numbers together, then divide by 3 within syntax of the arrow function.
 // This is resuable funtion that can be maintained effiently.
 const calcAverage = (a, b, c) => (a + b + c) / 3;
 // Testing:
 console.log(calcAverage(3, 4, 5));

 // 2. Use the function to calculate the average for both teams:
 // Test Data 1:
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
 // Logging the values into the console to check them:
 console.log(scoreDolphins, scoreKoalas); // 46 56
 // Koalas have a higher score thanb Dolphins but not double Dolphins score. Therefore, no one wins.

 // 3. Create a function 'check Winner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then
 // logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// Check who wins: A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Neither Dolphins or Koalas wins. Try again');
    }
}

// Calling the function - using checkWinner Function. Scores calculated before, use them as the arguments or parameters.
// So scoreDolphins will become avgDolphins since that's the name of the parameter.
checkWinner(scoreDolphins, scoreKoalas); // Neither Dolphins or Koalas wins. Try again
// This will make the Dolphins win:
checkWinner(888, 234); // Dolphins win (888 vs. 234)

// Test Data 2: const keyword cannot be changed or mutated.
// Reasign these values I had earlier to the values in Test Data 2.

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// testing them
console.log(scoreDolphins, scoreKoalas); // 60 28
// check the results with new values:
checkWinner(scoreDolphins, scoreKoalas); // Dolphins win (60 vs. 28)
*/

/************************************************************************************************************************************************* 
41. CODING CHALLENGE 2: ARRAYS:

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is
different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip.

Test data: 125, 555 and 44.

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function
as array values (so don't store the tip values in separate variables first, but right in the new array)

*************************************************************************************************************************************************/

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
/*
const bill = 100;
// Ternary Operator: if the value is between 50 and 300, less or equal than 300 then return the bill value * 15% otherwise : should be 20% 
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;

const calcTip = function (bill) {
    return tip;
}
*/

const bill = 100;

// These is the best solution:
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// or Arrow Function:
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// logout this String
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); // The bill was 100, the tip was 15, and the total value 115

// 2. And now let's use arrays! So create an array 'bills' containing the test data below:
// Test data: 125, 555 and 44.
const bills = [125, 555, 44];


// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

/* I tried but not getting the results that I expected:

const tips1 = calcTip(bills[0]);
const tips2 = calcTip(bills[1]);
const tips3 = calcTip(bills.length -1);
// three values which are the 3 tips:
console.log(tips1, tips2, tips1); // 15 15 15
// This was not the result I was expecting.

// I can put function calls in an Array as they will produce a value as JS will calculate the 3 function calls, then put them in an Array and store them.
*/


// My answer is the same to the solution exept that I used the .length method to get the last element.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);


/* 

I forgot to logout my 'tips array' and that is why I couldn't see it in the console and thought that my tips array not working as I expected.
Therefore, I actually did better than I thought as I just forgot to logout the tips array.

*/

// console.log(bills, tips); // (3) [125, 555, 444] > (3) [18.75, 111, 8.8]
// These are the three tips that were calculated.


/* Not working:

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip:

const total = [`The total, the bill + the tip is ${bill + tip} .`];
const total = [`${bill + tip}, ${bill + tip}, ${bill + tip}`];
console.log(total); // ["The total, the bill + the tip is 115 ."]
const calcTotal = bill + tip;
const total = [calcTotal(bill + tip[0]), calcTotal(bill + tip[1]), calcTotal(bill + tip[bills.length -1])];
console.log(total); // calcTotal is not a function - line 133.

*/

// This is the best solution: bills plus tips for position 0 to 2:

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); // (3) [125, 555, 44] > (3) [18.75, 111, 8.8] > (3) [143.75, 666, 52.8]
// So for results are for these bills: 125, 555, 44.








