// This is to Activate strict mode that make it easier for me to write secure JavaScript code:
'use strict';

/****************************************************************************************************************************************************************** 

31. SECTION INTRO:

Activate strict mode: wrting secure code.
a special mode we can activate in JavaScript makes it easy for us to write secure JavaScript code.
Write this string at the begining of the script.js file:
'use strict';
Makes it easier for developers to avoid accidental errors / bugs into our code as:
strict mode will forbids us to do certain things, and second it will actually create visible errors for us in certain situations in which without strct mode 
JavaScript will fail silently without letting us know we made an mistake.

******************************************************************************************************************************************************************/

/*******************************************************************************************************************************************************************
// Most imporant changes strict mode has: use const to declare variable unless I'm sure the value of the variable will change.

let hasDriversLicense = false; // Once the person has passed their test, then this variable will be set to: true
const passTest = true;

// The variable passTest will be set to true or false:
// // on purpose omit the 's' from the variable name, and without the 'use strict' activated, JavaScript will not know that I've created a bug.
// 

if (passTest) hasDriversLicense = true; 
// This one has the correct spelling of the variable name, but since the variable name above is missing the letter 's' from the variable name, this will NOT logout
// the below String. This is due to the mistake I created on purpose and the variable is still set to false.
// Without the 'use strict' statement activated, I would not get the error message in the console as JavaScript wouldn't know about the bug I've created.
if (hasDriversLicense) console.log('I can drive');


// Another thing that strict mode do is to introduce a short list of variable names that are reserved for features that might be added to the language a bit later.
// JavaScript has reserved the variable that it might implement in the future. This is why I get Syntax Error when I logout this line of code.

// const interface = 'Audio'; // Uncaught SyntaxError: Unexpected strict mode reserved word
// Another example:
// Again this variable will logout an Error as strict mode reserves some name for the future.
// const private = 534;

// Same logic for this one.
const if = 23; // Uncaught SyntaxError: Unexpected token 'if'

// From now on in this course, I have to have strict mode activated.

*******************************************************************************************************************************************************************/

/*************************************************************************************************************************************************************** 

33. FUNCTIONS - The fundamentals:

A function is a piece of code that we can reuse over and over again in our app. Its similar to a variable but for whole chunks of code. A variable hold a value.
A function hold one or more complete lines of code.
When using functions, I am using the Principle 'Don't Repeat Yourself' or DRY. We say that we should keep our code DRY.

A function not only can reuse a piect of code but can also receive data and return data back.

Example, fruitProcessor function to produce apple fruit or apple and orange juice.

***************************************************************************************************************************************************************/

// Logic of reusing code:
// This function is created by using the 'function' keyword. This function is called: logger, which is a function that will log something to the console.
// We need a set of empty parenthises and a pair of braces to create the function body which will get executed when I run this function later. 
// Lets say I need to execute the log many times in the app. 
function logger() {
    console.log('My name is Vanessa'); // somewhere in my app, I need to reuse this line of code multiple times. That's why I put it in a function.
} 

// Now that i've created the function, I can use it as many times as I wish:
// To use the function, I just write the function name and a set of empty parenthises.
// Using the function is known as calling / running / invoking a funtion that I predefined previously:

logger(); // My name is Vanessa
logger(); // My name is Vanessa
logger(); // My name is Vanessa

// lione 67 was executed three times.

// When we write function we pass data into a function, and a function can also return data as well for me to use for something else in the app. so,
// not only can a function reuse a piect of code but can also receive data and return data back. Functions are like machines.
// Example, fruit processor: we put fruit into the processor do something to our fruit which is the function body and then the processor returns the processed
// fruit like juice.
// In this function I specify two parameters which are like variables that are specific to this function and they will get defined when we call them later.
// The two parameters need to be separated by commas and they reprsent the input data of this function.
function fruitProcessor(apples, oranges) {
    // using the parameters just as they are normal variables
    // console.log(apples, oranges); // 5 0
    // do something with these parameters and produce some juice by creating a String. We build a string using the input data that we get in the function 
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    // we can use the return keyword and can return any value from the function. Lets return the juice that we just produced
    return juice; // this juice will become the result of executing this function.

}

// Call the fruitProcessor function now. 5 apples and 0 oranges. 
// Apples will become 5, and oranges which is the second parameter will become 0. These actual values of the parameters are called arguments.
// coming from line 90
// fruitProcessor(5, 0) // 5 0
// Will logout: 5 0
// As that is the numbers I specified when calling the fruitProcessor function.

// The result of running this function is the juice that we just returned.
// Calling the function code will be replaced by the juice string. So if we want to use the value that was returned we need to store it in a variable.

// So we call the fruitProcessor function with two arguments, 5 and 0 which are specific so the actual values of the functions parameters which are apples
// and oranges. So when the function is running now, apples (inside the console.log) will be 5, and oranges will be 0. Then we use these values to build the
// juice string. Then we return that value from the function. The result of calling the function will be the juice value that was just returned. Then we need
// to save that value somewhere, capture it by saving it into the appleJuice variable. 
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges.
// Then log that value directly to the console. Now, its executed/logout same string twice.
// console.log(fruitProcessor(5, 0));
// console.log(appleJuice);

// we can reuse the function with different input values and then get a different output.
// Lets create apple and orange juice:
// I am defining specific values which are the arguments which will get passed into the function as the parameters. Essentially, I created a generic funtion
// that works for any number of apples and oranges, then when i call the function I'm filling in the blank spaces using my arguments. 
const appleOrangeJuice = fruitProcessor(2, 4);
// Now can log the result:
console.log(appleOrangeJuice);

// Not all functions need to return something or acept parameters but unusal.








/*******************************************************************************************************************************************************************

Dynamic Typing in action 

// We can easily change the data type of a value that is held by a variable at anytime

let JavaScriptIsFun = true; 
console.log(JavaScriptIsFun); // will display true

// console.log(typeof true); // will display true
console.log(typeof JavaScriptIsFun); // boolean
// console.log(typeof 23); // will display number
// console.log(typeof 'Vanessa Tsang'); // will display string

// Now I want to reasign the variable: JavaScriptIsFun (change the value of this variable)
// We don't write the: let keyword again, and change from a Boolean to a String

JavaScriptIsFun = 'YES!'
// testing to see if Dynamic Typing works:

console.log(typeof JavaScriptIsFun); // will logout: string

// an example of Undefined:
// Means a empty value. This is perfectly legal in JS:

let year; // declared a variable without a value is an empty variable.
console.log(year); // will logout: Undefined
console.log(typeof year); // will logout: Undefined

// Now reasigning the emtpy variable. Again witout the keyword: let as we not creating a new varible, just reasigning a new value to: year.
year = 1978;
console.log(typeof year); // will logout: number.

// null is similar to Undefined as both the value and the type of the value are null.
// The typeo null is an Object. Should really return null but there is a bug. Make sure you don't create any accidentle bugs due to this strange behaviour.
console.log(typeof null);

*******************************************************************************************************************************************************************/