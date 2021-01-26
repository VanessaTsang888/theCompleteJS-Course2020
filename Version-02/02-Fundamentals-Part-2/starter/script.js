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

/*
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

// line 67 was executed three times.

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
// console.log()
// is a built-in function that we don't need to write ourselves as we just call it like our own function., then  we pass-in a value.
// Same for the Number function that converts a string into a number.
const num = Number('23');
console.log(num); // 23
*/

/****************************************************************************************************************************************************************** 

34. FUNCTION DECLARATIONS vs. EXPRESSIONS:

There are different types of Functions and each type works in slightly different way.
The Functions from last lecture are Function Declarations as we use the Function keyword to declare a Function a bit like we declare a variable.
Functions are just values, just as a Number or a String or a Boolean value.


******************************************************************************************************************************************************************/
/* 

// Function Declaration:
// Example: calculate the age of a person using their birth year:
// Get the data to return using the calculation: today's year minus the birthYear;
// So we going to we taking the birthYear that we going to receive, then use that to calculate the age.
// This is a generic Function which will work for any birth year that we give it.

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Now call, execute, run or invoke that generic Function. This will create a value, and the value that this will create is the value that's returned from the
// calcAge Function - line 149.
// The argument is then the actual value that we use to fill in that placeholder that is the parameter.

// calcAge1(1991);
// Now save that value into a variable:
const age1 = calcAge1(1991);
// Let's quickly check that it works:
// console.log(age1);

// Function Expression:
// a Function without a name called an Anonymous Function:
// We write the Function without the Function name, i.e. calcAge1:
// Then we store all of that into a variabe, and that variable will be the Function. We can call that 'calcAge2'
// From the keyword: function to the closing braces is an Expression and Expressions produces a value. So we use that value and store it inside calcAge3.
// This will then be the Function.
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// To call this Function, we do it the same way.

const age2 = calcAge2(1991);
console.log(age1, age2);

// So the calcAge2 variable (also the Function name) will hold the Function value (the Expression). A Function is basically a value so we can store it in
// a variable.

// What is the difference between Function Declarations and Function Expressions? It may not be a good idea but The main difference is we can actually call a
// Function declarations before they are defined in the code. This don't work for an Anonymous Function as will get error msg in the console. This happens due to a
// process called Hoisting.
 
// Which of the two types of Functions should I use when I write my own functions? Most of time, its matter of personal preference. The instructor prefer to use
// Function Expressions or an Anonymous Function as this then forces me into a nice structure where I have to define all the Functions first at the top of the code
// and only then I can call them. He also like to have everything stored in variables (also the name of the Function), so both values and Functions.
// I think I prefer the Function Declaration as it's easier to understand.

*/

/****************************************************************************************************************************************************************** 
 * 
 *  35 . ARROW FUNCTIONS:
 *  This is third type of Function added in ES6. 
 * A special form of the Function Expression (anonymous function) that is shorter and faster to write. 
 * 
 ******************************************************************************************************************************************************************/


// Code taken from Function Expression above for a reference point

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// Arrow Function: one-liner Functions:
// Arrow Function in its simplist form:
// We want the birth year as we want to calculate the age again. Then the Arrow, this is the reason why this is called Arrow Function. Then we write what we want it
// to return. In this case, 2037 - birthYear.
// To finsh we want to be able to use this Function, store it in a variable, i.e. calcAge3
// We assign the value which is on the right handside of the asignment opporator to the variable that's on the left handside.
// The returned value will be stored in the variable: age3.
// Just the code on the right handside of the assignment opportor is the Function.
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// The Arrow Function is a lot easier and faster to write compare to the Function Expression as we don't need the braces to define the code block, the return happens
// implicitly (happens in the background). So the value (2037 - birthYear) will auto be returned without us writing the return keyword. Also, we don't need any
// parenthises.

// Gets more complex when we add more parameters or more code: one parameter and multiple lines of code within the body:
// Calculate how many years a person has left before retirement:
// Set the variable to a Function. Pass in the birth year. Then the arrow.
// First we need to calculate the age, then the retirement age minus the current age. This is why we do need the braces for this example to define a code block.
// To calculate the years before retirement: the variable called: retirement = 'the retirement age' - 'the current age':
// We do need to write the return keyword Explicitly as this is NOT a one liner Function.

// If we have multiple parameters then we need to wrap the parameters i.e. the birthYear into parenthises: highlight the word(s), shift + the open parentheses.
// Use a template string to build the String. 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

// Run the Function. We can capture the returned value into a variable.
console.log(yearsUntilRetirement(1991, 'Jonas')); // 19
// Has logout: 19 which is correct as: 65 - 46 = 19.
console.log(yearsUntilRetirement(1980, 'Bob')); // 
*/
// The conclusion is as you add more code, more parameters, it gets more complex and we lose the advantage of using an Arrow Function.
// What type of Function should I use? The other fundamental difference between the Arrow Function and the Function Declaration and Function Expression it's
// the fact that Arrow Function do NOT get a: This keyword, which is a topic for later.

/************************************************************************************************************************************************************** 

36. FUNCTIONS CALLING OTHER FUNCTIONS:
Logic:
Calling one function from inside another function. We do this all the time in JS.
Using the fruitProcessor as an example:
This fruit processor needs another machine to cut up the fruit into smaller pieces.
 ************************************************************************************************************************************************************* */
/*

// Logic: Calling one function from inside another function. We do this all the time in JS.
// Know when you write multiple functions, 1 calling another.
// Example, a function being like a fruit processor which received a certain number of apples and oranges.
// Then based on that it produced and returned juice to us.
// fruit processor can only make juice with smaller fruit pieces. So before making juice, the processor needs another machine that cuts the
// fruits that we give it and to multiple smaller pieces. Start by making that machine, which is a function that cuts a fruit into multiple
// pieces. This function will receive a fruit, and return a fruit that's been cut into 4 pieces.
const cutFruitPieces = function (fruit) {
return fruit * 4;
};
// This is the fruit processor itself:
const fruitProcessor = function (apples, oranges) {
// We receive the apples and oranges. Then use our newly created machine to cut the received apples and oranges in 2 pieces.
// We start by calling: cutFruitPieces, with the number of apples that were received. The result of that, we'll store in a variable
// called: applePieces. Now do the same with the oranges we receive. Now we've called 1 funtion inside of another function. So now we
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);
// Juice string:
const juice = `Juice with ${applePieces} Pieces of apples and ${orangePieces} pieces of oranges.`;
return juice;
};
// can call: fruitProcessor with 2 and 3. Then this will call the fruitProcessor function, then in turn will call the cutFruitPieces
// function, twice. Will logout: Juice with 8 pieces of apple and 12 pieces of orange.
console.log(fruitProcessor(2,3));
// How do the data flow between these 2 functions?
// The apples parameter will get replaced with the number 2. The oranges parameter will get replaced with the number 3.
// So we're replacing the parameter replace orders with the actual values, 2 and 3.
// The value 2 will then be used to call the cutPieces function.
// So 2 x 4 = 8, this will get stored in the applesPieces variable. From there we'll then built this juice string.
// So the applePieces variable will have the values of 8 stored in it. The orangePieces variable will have the values of 12 (3 x 4 = 12). 
// The result of call the: fruitProcessor function will be the result of the Juice String that we return from the function.
// So if we need to 10 fruits (rather than just 2) into pieces, then this covers the DRY (Dont' Repeat Yourslef) Principle which reduces
// the amount of code and bugs. So if the Fruit Cutting Machine can only cut into 3 pieces (rather than 4), then we only need to change the figure in the
// cutFruitPieces function once.

*/

/*****************************************************************************************************************************************************************  

37 REVIEWING FUNCTIONS:

Everything that's important so far to make sure you understand Functions before moving on to other topics.

**************************************************************************************************************************************************************** */

// Convert is Arrow Function into a regualar Function Expression. 
// Delete the Arrow, write the function keyword after the first assignment operator.
// Now, we can export the age functionality into another function expression, i.e. calcAge function, so we can call one Function inside of another Function.
// Within that, return 2037 - birthYear;
// Its not a problem having two functions with same parameters as they not related as they are two different parameters or variables - they are local variables to
// each function.
// To logout something, the console.log line of code must be before the return statement - short cut: option + up arrow. Now the console.log is executed
// before the value is returned.
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // Take a decision based on the retirment value. If greater than 0, then return the retirement value.
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // Jonas retires in 19 years
        return retirement; // 19
        } else {
            console.log(`${firstName} has already retired 🎉`); // Mike has already retired
            return -1; // -1 // this number has no meaning.
        }

}

console.log(yearsUntilRetirement(1991, 'Jonas')); // 19
console.log(yearsUntilRetirement(1950, 'Mike')); // -2 // -1
// Mike has already retired. We need to account for that:
// Return the result if above 0, else, below 0, we will return something else. Take a decision based on the retirment value.
// The return keyword will first return the value we tell it to return, i.e. the retirement value. Then exit the function, exit immediately. The function has returned.
*/

/*********************************************************************************************************************************************** 

SUMMARY: 3 different types of Functions that work in a similar way.
They all can receive input data, they transform data, then they can output data. They are optional but this is what Functions normally do.

Function Declaration:
Function that can be used before it's declared.

Function Expression:
Essentially a Function value stored in a variable.

Arrow Function:
Great for a quick one-liner functions (without the return keyword, braces). Has no 'this' keyword.

Calling a function: we do that using parentheses. We write the name of the function, then with the parenthesis we call the function.
as Without that the function is just a value, i.e.
const age = calcAge(1991, 'Jonas');
We call the function with arguments. They are the actual values of the function parameters. We use these to actually input the data into
the function - replacing the placeholders that are the parameters. Then all this expression will be replaced witht the returned value, i.e.
the age that was replaced here, which we then stores in the age variable.
We use console.log to see the result of our experiment in the console.

*************************************************************************************************************************************************/ 

/* 

39. INTRO TO ARRAYS:
Arrays is one type of Data Structure.
An arrays is like a large container into which we can throw variables, and later reference them. Very important as programming, most of the time
is all about Data.
We get data from somewhere, store it, process it. Then we give some data back, which has to be stored somewhere/some place. For that we use Data Structures
like an Array. The two most important data structures is Arrays and Objects. 

*/

/*

// To Get Data Into An Array:
// Instead of this:
const friend1 = 'Michawl';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Do this: The Literal Syntax:
// 3 Strings in an Array. There is a value inside a String.
const friends = ['Michael', 'Steven', 'Peter'];
// See what this Array looks like in the console:
console.log(friends); // (3) ["Michael", "Steven", "Peter"]

// Another way to write an Array: instead of using the square bracket, we use the Array Function which we call it using parenthesis. Also, to work, need to
// use the 'new' keyword. It's more common to use the literal syntax.
// const years = new Array(1991, 1984, 2008, 2020);

// To Get Data Out Of An Array.
// Arrays are Zero Based. Therefore, the location of the first element is 0.
// To logout Michael and Peter:
console.log(friends[0]);
console.log(friends[2]);
// Can also get the number of elements thatis in the Array using the property method (not zero based):
console.log(friends.length) // 3
// Can use the .length method to automatically get the index of the last element of the Array. This method is NOT zero based, so use the -1 at the end.
// The length is 3 but the location of the last element is 2. So we have to subtract 1 at the end.
// Inside the square brackets, We can put an Expression which is something that produces a value.
// First it will calculate: friends.lenght is 3, Then it will compute: 3 - 1 is 2, then it will get friends at position 2.
// Inside the square brackets JS expects an Express not a statement.
console.log(friends[friends.length -1]); // Peter

// Can use the square brackets to add elements to Array, i.e. replace Peter with Jay:
friends[2] = 'Jay';
console.log(friends); // (3) ["Michael", "Steven", "Jay"]
// Peter replaced by Jay.

// I declared the friends varible with const, but I was still able to change the second element to a different String
// Only primitive values are immuteable, but an Array is not a primative value so we can change it or mutate it. But we cannot replace the entire array:
// This is illegal:
// friends = ['Bob', 'Alice']; // Uncaught TypeError: Assignment to constant variable. at script.js:412

// Aarray's can hold different types at sametime, i.e. values about a person:
// The calculation will produce a value and be stored in position 2 of the new Array.
// We can replace a String with a variable:
// We can put an Array inside another Array, i.e. put friends Array inside the Jonas Array:
const firstName = 'Jonas';
const Jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// Check it out:
console.log(Jonas); // (5) ["Jonas", "Schmedtmann", 46, "teacher", Array(3)]
console.log(Jonas.length); // 5

// A small Array exercise:
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// Array of Birth Years and we want to calculate some of them:
// We cannot do opporations with Arrays, but can still use the calcAge function on individual elements of the Array.
// I want to calculate the ages for the first, the second and the last element of the 'years' Array.
// Calculate this, then store in a variable called age1. Calculate the age for the first element.
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
// Instead of counting the elements to find out the location of the last element, just use the .length method: 
const age3 = calcAge(years[years.length -1]);
// 3 values which are the 3 ages:
console.log(age1, age2, age3); // 47 70 19

// Since we started with an Array, its normally good idea to end up with new Array:
// We can put function calls in Array as they will produce an value.
// JS will calculate the 3 functions calls, then put them in an Array and store there.
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages); // (3) [47, 70, 19]

*/

/*******************************************************************************************************************************************************************
 
40. BASIC ARRAY OPERATIONS (METHODS):

Built-in Functions (uses parenthesis) that can be directly applied on Arrays called Methods to do Array operations.
Some of many useful Array methods include .push
A method is 


*******************************************************************************************************************************************************************/
/*

// Add Elements:
const friends = ['Michael', 'Steven', 'Peter'];
// the .push method adds an element at the end of the array:
// A function that we call that is attahed to the friends array.
// .push is a method which technically is a function and we call that function directly on the friends array.
// So the push function is attached to the friends array  
const newLength = friends.push('Jay');
// test the friends array in the console. 
console.log(friends); // (4) ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); // 4

// The new element is added and now 4 elements in total. This has mutated the original array.
// So we passed an argument in to the friends function which is Jay, then it can do some work which is to add this element to the end of the array.
// The value it returns is the length of the new array. Create a new variable to capture that new array, i.e. newLength

// Method that add element at the begining of Array: .unshift method
friends.unshift('John');
console.log(friends); // (5) ["John", "Michael", "Steven", "Peter", "Jay"]

// Remove Elements: removes the last element of the array:
// Don't need to pass-in any arguments as no info needed to just take out the last element.
// Jay has been removed.
// Peter has been removed.
friends.pop(); 
// pop method doesn't return the length of the new array, instead it returns the removed element and we can store that in a variable.
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); // // (3) ["John", "Michael", "Steven"]

// Remove first element from array: .shift
// No arguments needed as we are removing not adding an element.
friends.shift(); // First element
console.log(friends); // (2) ["Michael", "Steven"]

// Method that tells us in which location is a certain element is in the array. 
// pass-in the element we want to reference, i.e. Steven is in location 1. So the .indexOf function call should return the value 1.
// If we try for an element that is not there, i.e. Bob. We'll get -1.
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

// ES6 method called includes, similar to .indexOf but more useful
// So includes instead of returning the index of the element will simply return true if the element is in the array and false if it's not.
// This method uses strict equality for this check.
friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
// logout false as its strict meaning it does not do type coercion. But if I change the '23' string to 23 the Number then it will be true.
console.log(friends.includes('23')); // false

// We can use the .includes method to write conditionals

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}

*/

/******************************************************************************************************************************************************************* 

42. INTRO TO OBJECTS:

Another Data Structure in JS - Objects.

*******************************************************************************************************************************************************************/
/*
// We can have an array called jonasArray, that contains his firstName, lastName, age calculation, job, an array of his friends:
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// We can't reference them by name but only by their order number in which they appear in the array.

// We have another data structure in JS which is objects. We define key value pairs. So we can give each values a name.
// The object is inside the braces. To Define a new object. fill-up this objet with key value pairs.
// The key is the variable name, then colon and the value which can be of any type. Separate each key value pair with a comma.
// An object which contains 5 key value pairs:

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// console.log(jonas);

// There is 5 keys, and each of them as a value. So we were able to assign a name to each of the values. This is something inpossible in
// arrays.
*/

/******************************************************************************************************************************************************************* 

43. Dot vs. Bracket Notaion:


*******************************************************************************************************************************************************************/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas); // same object as the code I wrote.

// The difference is that the properties are ordered alphabetically. The order of properties does not matter as we simply get the properties
// from the object using the property name itself. There is 2 ways to do that:
// 1. Using the Dot Notation:
// to get the lastName from the Object above:
console.log(jonas.lastName); // Schmedtmann
// So using the Object name: jonas, then the Dot Nation operator which will retrive the property ('Schmedtmann') using the key/name we specified: lastName. 
// We can do the same thing but using the Bracket Notation:
// The result is the same as using the Dot Notation.
console.log(jonas['lastName']); // Schmedtmann
// The difference is that with Bracket Notation, we can write any expression we like. So don't have to explicitly write the String inside the bracket but we
// can compute it from some operation which is basically an expression (something that produces a value). Example, we have a variable in which we store the
// repeating part in firstName and lastName (key/property names) - store in variable:
const nameKey = 'Name';
// Now can use this variable to get both the first and last Name.
// We could build below String concationation with Template Literal but in this case its not necessary.
// JS will execute the Plus operator to create the String firstName. Then go to jonas Object and retrive that property ('Jonas').
console.log(jonas['first' + nameKey]); // Jonas
// JS will do the same for the lastName / the second line of code below:
console.log(jonas['last' + nameKey]); // Schmedtmann
// So in the brackets, we can put any expression here as it will return a value.
// The same thing will NOT work using the Dot Notation operator. This will NOT work and this is why we need the Brackets Notation.
// console.log(jonas.'last' + nameKey); // Unexpected string
// With Dot Notation, we have to use the Real Final Property Name (the key) and NOT a computed property name.

// An Experiment: how to retrive elements from an Object:
// In which situation do we use the Dot Notation? When do we have to use the brackets Notation?
// When we need to Compute the property name, like we did with the 'first' and 'last' name, then we have to use the Bracket Notation. In any other case,.
// use the Dot Notation which looks cleaner and easier to use.
// Example, we don't know which property or key we want to show as we'll get this info from the UI, so we can use the built-in prompt Function.
// A pop-up with an input field, store in a variable:
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and firends');
// console.log(interestedIn); // prompt window with msg for user to input one of the options, i.e. job
// That will appear in the console.
// Now we want to display the user's input into the window so we need to write some code using the Bracket Notation as then we can put any expression
// in our code, which in our case is: interestedIn
// JS will replace interestedIn with the actual value of the variable and then that's the one that will be looked up on the jonas Object.
// console.log(jonas[interestedIn]); // job
// So the: interestedIn variable will store 'job' value. So the Bracket Notation gave us the correct result.
// If user input's something that is NOT in the jonas object like location, then it will result 'undefined' in the console as this property don't exist.
// We can write some code to catch that: undefined is a fauly value. If the value/input exists then its a Truthy value. Any String that is not empty or any
// Number that is not zero, then the if block will get executed.  

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and firends');
}

// How to use both the Dot and Bracket Notation (can put any expression here) to add new properties to the object:
// Add a location and Twitter handle to the jonas object:
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas); // input: job // output: the object with the location and twitter.

// Small Challenge:
// Write a sentence in a dynamic way or without hard-coding any of the values: 
// "Jonas has 3 frineds, and his best friend is called Michael".
// Get: Jonas, 3, Michael as values from the object.
// Hint: Need to use multiple dots to get the number of friends.
// lenght is also a property that's available on all arrays that's auto available. So we have an array, then we request the .lenghth.
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); 

// mdn operator precedence:
// Dot notation is called: Member Access on this website - 21.
// Brackets notation - 20. Both have high priority and both executed from left-to-right 

*/

/**************************************************************************************************************************************************************

44. OBJECT METHODS:
In this lecture We will create our own methods on our own objects.
An array is actually an Object. That's why we can use methods on them: .push

Objects, (just like arrays) can hold different types of data. They can hold arrays and objects. We can take this even further. Functions are just another type
of value, and we can create a key value pair in which the value is a function. So we can add functions to objects.

Objects can have various types of values and can use the: .this keyword on them.

*******************************************************************************************************************************************************************/

// An Object can hold all kinds of data types. Can add functions to objects.
// Add a function as a 'key value pair':
// The calcAge function. The key is the property. Specify the function as an expression as the expression produces the value. A function
// declaration would NOT work as it don't produce a value.
// calcAge is a key or property rather than the function name.
// ANY FUNCTION THAT IS ATTACHED TO AN OBJECT IS A METHOD.

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
   

// This is a method with a function value. The calcAge is the property or key:
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

// We already have the 1991 defined inside the jonas object, so keep our code base DRY, and to prevent accidents we should only write the birthYear in one place.
// so we need to access the birthYear directly from the jonas object rather than passing it in when we call the method. In very method we have access to a
// special variable called: .this
// So in the calcAge method we read the birthYear directly from the jonas object without having to pass it in as parameter
    

// calcAge: function() {
//     console.log(this); // the object
//     return 2037 - this.birthYear;
// }

calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
},


// Write a method called: getSummary which should return a String which summarise the data about jonas:
// Example: "Jonas is a 46 year old teacher, and he has a driver's license.". The .this keyword is refering to the jonas object above.
// a or no? Use the Ternary Operator to find out.
getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
}
};

// This is a normal function expression that is not inside an Object which looks similar to the method inside the jonas object.
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// I think of functions as values, then you can see methods is actually a property.
// We can access the calcAge property or method. CalcAge is the function value and to call it we use the parenthesis. Then pass-in the birth year,
// which should calculate our age.
// The jonas object is calling the method calcAge:
// console.log(jonas.calcAge()); // 46
// Can also get access to this method using the Brackets Notation as its just like a normal property. The function is this part: jonas['calcAge']
// The function part will the executed first and that will become the value. Then with parenthesis we call the function value and pass-in 1991.
// console.log(jonas['calcAge'](1991)); // 46
// We already have the 1991 defined inside the jonas object, so keep our code base DRY, and to prevent accidents we should only write the birthYear in one place.
// so we need to access the birthYear directly from the jonas object rather than passing it in when we call the method. In very method we have access to a
// special variable called: .this
// So in the calcAge method we read the birthYear directly from the jonas object without having to pass it in as parameter.

// We use the .this keyword instead of using the name of the object jonas as if in the future we need to change the object name then we don't need to change
// it in all the other places where we have written jonas: keep to the DRY principle. So best to reference the object rather than hardcode the name of the object

// Let's say we need to access the age multiple times throughout our program. We calculate the age once, then store it in the object and then when we need it
// we retrieve the age as a property from the object. 
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Write a method called: getSummary which should return a String which summarise the data about jonas:
// Example: "Jonas is a 46 year old teacher, and he has a driver's license."
// Call this method:
console.log(jonas.getSummary())

// Previously we used methods on arrays. This is because Arrays are special kind of objects, as they can have methods as well to manipulate them like .push etc
*/

/****************************************************************************************************************************************************************

46. Iteration: The for Loop:
There are various types of control structure and the for-loop is one of them.
Allows us to automate repetative tasks, i.e. at the gym lifting weights:
I do 10 repretition of a certain weight lifting exercise.

****************************************************************************************************************************************************************/

/*

// Violates the DRY principle: this is not best practice:
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');



// Using a for-loop statement is best practice and keeping with the DRY principle:
// for-loop has 3 parts: first the initial value of a counter, the counter is the value that will start here at number 1 and go all the way to number 10. 
// Create a variable called rep and that's our first repretition. Second part: logical condition that is evaluated before each iteration of the loop.
// for-loop keeps running while condition is TRUE. Then loop will stop. By then 10 strings would of been printed.
// Increasing the counter: update counter after each iteration.
// Make the String dynamic rather than hard coded by using template literal and the rep variable.
// Use the rep variable to increase the number in the String that we're printing out.
for (let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`); // (10) Lifting weights repetition 1
}
*/

/*************************************************************************************************************************************************** 

47. LOOPING ARRAYS, BREAKING AND CONTINUING:

The for-loop: to loop through Arrays.


***************************************************************************************************************************************************/

/*
// Read values from an Array: We want to use a for-loop to loop through this an Array.
// We want to log every element of the array to the console. So write a for-loop, starting with the counter: (let i = 0; ; i++)
// An array is zero based when reading elements out of the array. Update the counter variable by 1. So we use the ++ operator.
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
// A new empty array outside of the loop
const types = [];

// log every element of the array to the console. Start with jonas element 0 until element 4. This is why we start the counter at 0, that is the
// first element we want to get. 
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

// Instead of hardcoding the 0, we use our counter variable: i
// Write the condition: the loop should run when 'i' is 0, until the last element 4. When it hits 5, then no longer run. The 'i' counter
// variable should always stay below 5. The current counter: jonas[i]
// part 1: the index starts at 0. part 2: the current index should allways stay below the length of the array that we're looping through.

for(let i = 0; i < jonas.length; i++) {
// Reading from joinas array
    console.log(jonas[i], typeof jonas[i]); // (3) ["Michael", "Peter", "Steven"]
// Filling types array
    // types[i] = typeof jonas[i];
// Another way to fill types array is using the push method which adds anther element to the end of an array. This way its a little cleaner.
types.push(typeof jonas[i]);
}

// The problem is that we've hard coded the number 5, so in the future if we add another element at the end of the array, it will not print
// as we are still telling JS that i should stay below 5, so will not print element at position number 5. The solution is to NOT hardcode
// the value but to compute this value/ to get it from JS itself: the 5 is the lenght of the array, and we replace it with a dynamically calculated
// one: jonas.length
// Add an element of 'true' to the end of the array and logout: true
// Logout the type of the jonas variable: typeof jonas[1]


// Create a new Array which contains all the types for all these elements. This will show me how to create a new Array based on the values of one
// original array.
// First create a new empty array outside of the loop. 

// Newly filled array:
console.log(types); // (6) ["string", "string", "number", "string", "object", "boolean"]

// Another example: an array of birthYears. Calculate the ages for each birthYear and store them in a new array:
// Create empty array which will then hold the ages. Loop through the birthYears then fill-up this ages array.
// Then calculate the age of the current year. The year we are currently in is 2037, then minus the birth year.
// Then we want to push it to that empty array.

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages); // (4) [30, 30, 30, 30]

// We cannot do an oporations between simple values and an array. Cannot do 2037 - the years array as that will give us NaN.
// So in the loop: ages.push(2037 - years[i]);
// we did it individually. So we did calculation one by one in each iteration of the loop we calculated 2037 minus the year in the years loop,
// then added it to the first position in the ages array. Then we do the same to the second year within the years array. Then same for the other
// years in the same years array.

// 2 important statements for loops: continue and break statements:
// continue: to exit the current iteration of the loop, and continue to the next one.
// break: used to completely terminate the whole loop.
// We only want to logout Strings to the console, and the continue statement is perfect for this.

console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
        console.log(jonas[i], typeof jonas[i]);
    }

// break statement: will terminate the whole loop:
// After a number has been found, nothing else should be printed.

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == 'number') break;
        console.log(jonas[i], typeof jonas[i]);
    }
*/

 /************************************************************************************************************************************************   

48. Looping Backwards and Loops in Loops: 12 min


*******************************************************************************************************************************************************************/

// looping backwards:
// Define the counter, the condition, the counter update

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// Staring from element 4 up to element 0:
// 4, 3, ..., 0

for (let i = jonas.length -1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// The above Will logout:
// 5 true
// 4 > (3) ["Michael", "Peter", "Steven"]
// 3 "teacher"
// 2 46
// 1 "Schmedtmann"
// 0 "Jonas"


// How to create a loop inside of a loop:
// The gym example from the first loop lecture: 10 repetitions for a certain weightlifting exercise. Now, we have 3 different exercises and we
// want to repeat each of them 5 times. That's a total of 15 repetitions 5 for each of the 3 exercises. To log all these exercises, we'll need
// a loop inside a loop. 

// Start with the 3 exercises. Start at 1 this time: 1 - 3.
// Write exercise below 4. Increase the exercise after each iteration as always.
// log to the console: template literal, Starting exercise...
// For the repetitions we need a loop inside a loop, so that in each exercise we can have the 5 repetitions that we want and the repetitions
// themselves are a loop.

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}






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