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








