/* 
9. LINKING A JAVASCRIPT FILE: 
Using the <script> tag in the html file:
I am writing my JavaScript code within the below script tag but the best practice and real development is to write JavaScript in a external .js files to separate presentation from logic.
It is good coding practice to add the semicolone at the end of a statement, and makes my code a little cleaner.
To execute the code or to show the alert in the browser, I just need to opent the html file in my Chrome browser. My JavaScript is attached to the alert function.


    let js = 'Amazing 驚人';
    if (js === 'Amazing 驚人') alert('JavaScript is FUN! JavaScript 有趣');
  // I have tested the above and its works. See screen shot attached.
  
  // I just click OK, and the alert box disapears. If I reload the page, I will see the alert window again.
  40 + 8 + 23 - 10
  console.log(40 + 8 + 23 - 10); // will logout: 61

// The script tag is known as an inline script as we don't need to load another files.
// I have now deleted the <script> tag from the html file and used the JS code in external JS file, tested and found it the test works.
// I have made sure that the script.js file is in the same folder/level as the index.htl file.
*/

/* 
10. VALUES AND VARIABLES:
Big advantage of using variables is that once declared, I can reuse values without passing any values. Just pass in the variable name.
Without variables, I'll have to manually change the value everywhere.
*/

// A value is the smallest unit of infomation that we have in JS.
// The below value is: Amazing:
let js = 'Amazing';
// Different values joined together to form just one value:
console.log(40 + 8 + 23 - 10);
// Vanessa is the value:
console.log('Vanessa');
// 23 is the value:
console.log(23);
// We can store values so we can later use them over and over again. Declaring a variable and store the value of Vanessa string to that variable:
// I have a box called: firstName, and inside I've put the value of Vanessa which is a data type of a String.
// When ever I wish to use this value, I just use this label: firstName which is the variable name.
let firstName = "Vanessa";
// Now instead of passing a value, I use the variable name. Will logout: Vanessa:
console.log(firstName);
console.log(firstName);
console.log(firstName);

/* 
CONVENTIONS & RULES FOR NAMING VARIABLES:
CONVENTIONS:
1. Camel Case: use for multiple words, start with lowercase, i.e. firstName, or firstNamePerson.
2. Snake Case: using under-scores : first_name_person

Hard rules how we can write variables:
Do's:
Can only contain numbers, letters, underscores or the dollar assign, i.e.


Dont's:
Illegal variable names: cannot start with a number, i.e.
let 3years = 3;
VSCode will give me a warning for this: Uncaught SyntaxError: Invalid or unexpected token.
All the errors I make will show up in the console.

let Aanessa&Andy = 'VA';
Error: Uncaught SyntaxError: Invalid or unexpected token '&'.
This symbol is Illegal in JS variable names. This would be allowed:
let Aanessa_Andy = 'VA';

It's illegal to use reserved keywords:
new is Illegal as its a reserved keyword in JS:
function is also a reserved keyword:
let new = 27;
let function = 27;
To fix this I can do this:
let _function = 27;
or do this:
let $function = 27;
name is allowed but kind of a reserved keyword, so in some cases can cause issues:
let name = 'Vanessa';
Its kind of reserve keyword but ok to use. Therefore, I should use it
like this:
let firstName = "Vanessa";

Don't start a variable name with a uppercase letter as its not the correct convention. We use uppercase letter for specific use case in JS, which is object-oriented programming.
let Person = 'Vanessa';
Variables that are all in uppercase are reserved for constants that we know will never change:
VSCode marks this variable name in different colour as it knows aout this convention that I'm using.
let PI = 3.1415;

Make sure our variable names are descriptive for cleaner code. They should be easy to understand what value the variable is holding just by reading the
name of the variable: this is more descriptive:
let myFirstJob = 'Programmer';
let myCurrentJob = 'Instructor';
Than this:
let job1 = 'Programmer';
let job2 = 'Teacher';
To logout the value of the variable: myFirstJob:
console.log(myFirstJob);
*/

/* 

PRACTICE ASSIGNMENT:
1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in millions).
2. Log their values to the console.
*/

let country = 'England';
let continent = 'Europe';
let population = 67000;

console.log(population);


