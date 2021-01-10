/* 
9. LINKING A JAVASCRIPT FILE: 
Using the <script> tag in the html file:
I am writing my JavaScript code within the below script tag but the best practice and real development is to write JavaScript in a external .js files
to separate presentation from logic.
It is good coding practice to add the semicolone at the end of a statement, and makes my code a little cleaner.
To execute the code or to show the alert in the browser, I just need to opent the html file in my Chrome browser. My JavaScript is attached to the
alert function.


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
/**
// A value is the smallest unit of infomation that we have in JS.
// The below value is: Amazing:
let js = 'Amazing';
// Different values joined together to form just one value:
console.log(40 + 8 + 23 - 10);
// Vanessa is the value:
console.log('Vanessa');
// 23 is the value:
console.log(23);
// We can store values so we can later use them over and over again. Declaring a variable and store the value of Vanessa string to that
variable:
// I have a box called: firstName, and inside I've put the value of Vanessa which is a data type of a String.
// When ever I wish to use this value, I just use this label: firstName which is the variable name.
let firstName = "Vanessa";
// Now instead of passing a value, I use the variable name. Will logout: Vanessa:
console.log(firstName);
console.log(firstName);
console.log(firstName);
 */

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

Don't start a variable name with a uppercase letter as its not the correct convention. We use uppercase letter for specific use case in
JS, which is object-oriented programming.
let Person = 'Vanessa';
Variables that are all in uppercase are reserved for constants that we know will never change:
VSCode marks this variable name in different colour as it knows aout this convention that I'm using.
let PI = 3.1415;

Make sure our variable names are descriptive for cleaner code. They should be easy to understand what value the variable is holding just
by reading the
name of the variable: this is more descriptive:
let myFirstJob = 'Programmer';
let myCurrentJob = 'Instructor';
Than this:
let job1 = 'Programmer';
let job2 = 'Teacher';
To logout the value of the variable: myFirstJob:
console.log(myFirstJob);
*/

/********************************************************* 

/***************************************************************************************************************************************

DATA TYPES:

Values can have different types, depending on the type of data we want them to hold.

All data types:

Every value is either an Object or a primitive value.
A value is only a Primitive when it's NOT an Object.
Variables store values that have a type.

PRIMITIVE DATA TYPES:

There are 7 Primitive Data Types:

Number, string, Boolean, Undefined, null, symbol and big int.

Numbers:
Always floating point numbers meaning they always have decimals, even if we don't see them or don't define them. Example. 23 is exactly
like 23.0, but both are the number data type.
Example: let age = 23;
All numbers are simple of the type numbers.

Strings:
Simply a sequence of characters. Used as text. Always put in either single or double quotes. Otherwise JS will confuse them with variable
names. Example, let firstName = 'Vanessa Tsang'

Boolean:
Boolean values is a logical type that can ONLY take one of the logical values: true or false. Use to take decision(s) with code.
Example: let fullAge = ture;

Undefined:
Declaring a variable but without assigning a value to it. Value taken by a variable that is not yet defined (empty value). Example:
let children;
console.log(b); // will logout: undefined

I can also explicitly set a variable to equal undefined:
let c undefined;
consol.log(c); // undefined

When looking up non-existent properties in an object, I'll receive undefined:
var d = {};
Console.log(d.fake); // undefined

Null:
Another falsy value, similar to Undefined as it also means a empty or non-existent value but used in different circumstances. null MUST
be assigned to use it. Other falsy values x7 are: false, 0 (zero), "" (empty string), null, undefined, NaN (Not a Number).

Symbol (introduced in ES2015):
Defines a value that is unique and cannot be changed.

BigInt (starting in ES2020):
Another data type for numbers, larger than the Number type can hold (for integers that are too large  represented by the number type).


JS has a feature called Dynamic Typing:

When you create a new variable, you do not have to manually define the data type of the value that it contains. JS auto determines the
data type of the value when it's stored into a variable. It's the value that has the type NOT the variable. So variables only store value that have a type.
Later we can assign a new value with a different data type to the same variable without a problem. Example, variable x can initially be a number and later
a string, that's not a problem. Can be useful but can be the source of difficult to find bugs - errors in my code.

NOTE:
Remember, its actually the value (on the right of the assigmnet oporator) that hold the data type and NOT the variable.
I can change the value with another type after I've defined it. 

Special Operator called TypeOf:

Like the  + and -  operator
We use this to show the type of a value. Example: console.log(typeof true);

When reload in a browser, I'll see it's a boolean.

Dynamic Typing in action:

We can easily change the data type of a value that is held by a variable at anytime.
Variables store values that have a type.

let JavaScriptIsFun = true; 
console.log(JavaScriptIsFun); // will display true
console.log(typeof true); // will display true
console.log(typeof JavaScriptIsFun); // boolean
console.log(typeof 23); // will display number
console.log(typeof 'Vanessa Tsang'); // will display string

Now I want to reasign the variable: JavaScriptIsFun (change the value of this variable)
We don't write the: let keyword again, and change from a Boolean to a String:

JavaScriptIsFun = 'YES!'
testing to see if Dynamic Typing works:

console.log(typeof JavaScriptIsFun); // will logout: string
an example of Undefined:

Means a empty value. This is perfectly legal in JS:
let year; // declared a variable without a value is an empty variable.
console.log(year); // will logout: Undefined
console.log(typeof year); // will logout: Undefined

Now reasigning the emtpy variable. Again witout the keyword: let as we not creating a new varible, just reasigning a new value to: year.
year = 1978;
console.log(typeof year); // will logout: number.

null is similar to Undefined as both the value and the type of the value are null.
The typeo null is an Object. Should really return null but there is a bug. Make sure you don't create any accidentle bugs due to this
strange behaviour.

console.log(typeof null); // will logout: object

JS says the typeof null is an object which don't make sense and this is a bug in JS was never resolved for legacy reasons. It should
return null. So keep this in minde when working with typeOf.

*****************************************************************************************************************************************/


/************** 
 * let, const and var:
 * 
 * 3 different ways of declaring variables in JS.
 * let and const was intro in ES6 - modern JS. The var keyword is the old way of declaring variables - ES5.
 * 
 * How they are different and which one to use in which situation?

 * **************************/

/* 

 // 1. We use let keywords to declare variables that can change later - during the execusion of my program:
 // use let to declare JavaScript is fun, then I changed that leter from true to Yes. Another example:

 let age = 30;
 // Re-assigning a value to an existing variable - mutate the age variable:
 // now changing/assigning a new value to the variable 'age', which is perfectly fine since I'm using the 'let keyword' and its suitable since people's age do change.
 age = 31;
 // This is the perfect use-case for using the 'let' keyword. This is the case when I wish to declare an Empty Variable. Example, I had declared
 // I had declared an empty year and then later reassigned that variable to 19191. Sometimes in real life, I have to declare all variables at the
 // top of a files, but only assign actual values to them later in the program, based on some condition.

 // On the other hand, I used the 'const' keyword to declare variables that are NOT supposed to change at any point in the future - the value in
 // a const variable cannot be changed:

 const birthYear = 1978;
//  birthYear = 1990; // will logout error msg: Uncaught TypeError: Assignment to constant variable at script.js:264
 // So the 'const' keyword creates a variable that I cannot reassign, in technical terms - an immutable variable. A variable that
 // cannot be mutated. So the birth year of a person cannot be changed like the age can.
 // The fact that variables created with 'const' are immutable, also means I cannot declare empty const variables:
// This is NOT Legal:
const job; // will logout error: Uncaught SyntaxError: Missing initializer in const declaration
// That error msg means, when declaring a const variable I need to give it an initial value.

// Should I use 'let' or const to declare a new variable?
// To write clean code, use 'const' by default and let only when I'm sure my variable needs to change at some point in the future.
// Example, when I have a variable that its not suposed to change like a 'birth year' then always use 'const' not let. If I'm sure the value
// for the age variable will never change/mutate then use 'const'.
// It is BEST PRACTICE to have as little variable mutations/changes as possible as changing variables introduces a potential to create bugs.
// So always use 'const' and only use 'let' when I'm sure the value of the variable needs to change at some point in my code.
*/

/*

Declaring a variable using the 'var' keyword:
This should be avoided as its the old way (ES5) way of declaring a variable. However, need to know about it for legacy reasons as i may see this
in some older code bases or projects.
Works similar to 'let' :
var job = 'UX Designer';
job = 'Software Engineer'; // logsout without error meaning 'var' us allowed to mutate this job variable.
Although using 'var' looks same as using 'let' and 'const', beneath the surface its actually different.
'let' is block scoped and 'var' is function scoped.
It is not mandatory to declaring a variable as I can just to this:
lastName = 'Tsang';
console.log(lastName);
and JS will be happy to execute this script, even without declaring the variable. However, its a bad idea as it don't create a variable in the
current scope. Instead JS will create a property on the global object. 

*/

/**************************************************************  

BASIC OPERATORS:
An operator allows us to transform values or combine multiple values, and do all kinds of work with values. There are many categories of operators:

Mathematical / arithmetic operators;
Comparison operators;
Logical operators;
Assignment operators;
And more…
 **************************************************************/

/*********
Mathematical / arithmetic operators:

Can do all arithmetic operations including multiplication, division, and more.
Using the minus operator to calculate ages based on a person's birth year.
**********/

/*

Using the minus operator to solve a simple problem - to calculate an age of a person:
My age equals this year, minus my year of birth:
const ageVanessa = 2021 - 1978;
const ageChang = 2021 - 1985;
logout my age to the console. I can also logout multiple values a the sametime - use commas to separate each value:
console.log(ageVanessa, ageChang); // 43

I can do better, lean, shorter code base - best practice as I have a repeated value - the current year 2021:
const Now = 2021;
but put this at the top with the other variables. Then I can replace the 2021 with the variable 'now'.

*/

/*
// Math Operators:
const now = 2021;
const ageVanessa = now - 1978;
const ageChang = now - 1985;
console.log(ageVanessa, ageChang); // 43, 36

// Using the multiplication operator. Can do two different calculations or operations. Creating two values. Also, use the exponentiation operator, i.e.
// 2 ** 3 menas 2 to the power of 3 = 2 * 2 * 2.
// My age times (the asterisk) 2, my age divided by 10:
console.log(ageVanessa * 2, ageVanessa / 10, 2 ** 3); // 86, 4.3, 8
// I don't understand as: 43 * 2 = 86, ageVanessa / 10 = 4.3, 2 ** 3 = 2 * 2 * 2 = 8

// I can use the addition or plus operator to join strings - to concatenate different strings:
const firstName = 'Vanessa';
const lastName = 'Tsang';
// Now, I have both first name and last name concatenated together.
console.log(firstName + lastName);
// I need a space after the first name to make this one big string more readable. Create another string which is a space or an empty string, and
// concatenated together.
console.log(firstName + ' ' + lastName);
// There is a better way of doing this kind of concatenation of strings called template strings, but for now I focus on operators.

// The typeof operator - will give us the type of the value: done this in previous lecture above.
*/

/* Assignment Operators: using the equal sign.

let x = 10 + 5; // 15
x += 10; // short hand for writing: x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x-- // 100
x-- // 99


15 + 10 = 25. Therefore, x is now 25.
I am reasigning the x value. This is why I'm using the 'let' keyword.
The x will be assigned 15 as the plus operator will be executed before the equals operator due to the operator proceedence rules.
console.log(x);
 
Comparison Operators: to produce Boolean Values:
To workout if Vanessa's age greater than Chang's age?
console.log(ageVanessa > ageChang);
If Vanessa's age is greater than Chang's age then this will logout: true, but if not, then will logout: false.
Logs out: true as my age this year is 43 and Chang's age this year is 36.
This is asking the operator: is the age of Vanessa greater than the age of Chang? The operator will reply yes (true) or no (false).
Useful when taking decision with my code based on conditions like this.
The less than: < 
The greater than: >=
The less than: <=


Test if Vanessa is of full age? This means Vanessa must be at least 18 years old, and is greater than 18 or exactly 18.
console.log(ageVanessa >= 18); // true
console.log(ageChang >= 18); // true
In real life I would store the results of the above in variables rather logout the results to the console.
We can also do the above directly in the console but we would lose the record of what I'm learniong and not easy to scroll up and down.
Create new variable to hold the boolean value:
const isFullAge = ageVanessa >= 18;
Do the comparison all in one go. I don't want to calculate the ages separately:
console.log(now - 1978 > now - 1985);
How should JS know if it should do the Math first or do the comparision first?
JS will do the left calculation first, then the right calculation, then compare them using the greater than operator in the middle.

*/

/*********************************************************************************************************************************** 

Operator Precedence: The precedence of different operators.

In Google search for:
mdn operator precedence
Then choose:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

Can see all the operators in one handy table.
Can see that Grouping has the highest Precedence of 21.
++ and typeof have a precedence of 17.
Exponentiation operator: ... ** ... is a precedence of 16.
Comparison operators: ... < ... , ... <= ... , ... > ... , ... >= ... is a precedence of 12.

Can see which operators are executed from left to right, and which from right to left (i.e. the Exponentiation operators), where most other
operators especially the Maths ones are left to right, example:

***********************************************************************************************************************************/

/*
const now = 2021;
const ageVanessa = now - 1978;
const ageChang = now - 1985;
// Why these two subtractions are executed before the greater-than operator?
// The below logs out true so it works, as JS has well-defined order of operator precedence - the order in which operators are executed.
// Take a look at the precedence table online: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
console.log(now - 1978 > now - 1985); // true
// Can see that Grouping has the highest Precedence of 21. So that is executed before the minus operators.

// Can see which operators are executed from left-to-right, and which from right-to-left (i.e. the Exponentiation operators), where most other
// operators especially the Maths ones are left-to-right, example of left-to-right operation, but assignment operation is good example of right-to-left
// execution.
// console.log(25-10-5); // 10

// Declare to empty values at the sametime, the value of undefined.
let x, y;
// Wnen JS first finds this line of code to execute, will look at all the operators, it will start with the minus operators as they have a higher precedence.
// Subtraction has 14 precedence whereas the assignment has only 3. So the subtraction will get executed first and from left-to-right.
// The assignment operators execute from right-to-left so: y = 10, and x = 10 as well as Evaluate from right-to-left. It has to be this away
// so we get what we expect to get which works and is logical, makes sense.
x = y = 25 - 10 - 5; //  x = y = 10, x = 10
console.log(x, y);

// Grouping - highest precedence: operations inside parenthesis are executed FIRST, just like in maths.
// Calculate the average age of these two people:
// const averageAge = ageVanessa + ageChang / 2;
// Calculate the avage age: add the two values together, then divide by 2. The issue is that the Division operator has a higher precedence than the addidion
// operator so I have to use the parenthesis around to make the addition operation a higher precedence and executed first.
const averageAge = (ageVanessa + ageChang) / 2;
console.log(ageVanessa, ageChang, averageAge);
*/

/* 

CODING CHALLENGE 01:

Done on separate files.

*/

/* 

STRINGS AND TEMPLATE LITERALS:

*/

// Creating some new variables about a person - me. Then concatinate them into one big string:
// New variables:

// const firstName = 'Vanessa';
// const job = 'Junior Software Engineer';
// const birthYear = 1978;
// const year = 2021;


// ES5: a complex string written in ES5 can be a pain.
// Use those variables to build a string, to print out: I'm Vanessa a 42 year old Junior Software Engineer.
// Will use the birthYear to calculate the age.
// Will do the calculation first, then the concatination due to Type Coercion. JS will convert the number into a string, then concatenate
// them so it can join them with the rest of the strings.
/*
const Vanessa = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Vanessa);
*/

/*
ES6: Template Literals allows me to write a string in a more normal way then insert the variables directly into the string, then they'll
be replaced. Templae Literal can assemble multiple pieces into one final string.
Using Back Ticks NOT quote marks.
Just one string using Template Literal syntax:
const VanessaNew = `I'm ${firstName}`;
console.log(VanessaNew); // I'm Vanessa
*/

// Continue with the same string:
// NO need for the plus operator, or thinking where I should put the spaces like in ES5 string concatination:
/*
const VanessaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(VanessaNew); // I'm Vanessa, a 43 year old Junior Software Engineer!
*/

// Template Literals is the most used ES6 features, really useful in many situations.
// Can use back ticks for any regular strings.
// For strings, always use back-ticks so I don't need to think which quote marks to use.
/*
console.log(`Just a regular string using back ticks`);
*/

// Another great use case to use Template Literals is to create multi-line strings.
// ES5: new line using a special character /n
/*
console.log('String with \n\
muliple \n\
lines');
*/
// one string on each line

// ES6: Template Literals - using back ticks. Use back ticks and the return key to create new line for me:
/*
console.log(`String
multiple
lines`);
*/
// So when ever I need multiline string, always use Template Literal as it is a lot cleaner.

/* 

TAKING DECISIONS: if / else Statements:
Taking decisions with my code. 

Develop a program which checks whether a person is is old enought to own a driver's license or not. If so, them it will print that to the
console. If not, it will print how many years are left until the person can qualify for a driver's license.

*/


// const age = 19;

// check if this age is at least 18, which is the legal required age to start a driving license in Europe.
// create a variable. The >= operator includes 18.
// Use a Boolean value to take decisions using a 'if statement'.
// const isOldEnough = age >= 18 // only if the age is below 18, it will be false.
// If the condition (a boolean value) inside the parenthises becomes true, then the code inside the braces will be executed. If false,
// it will NOT be executed. The else statement is optional.
// The isOldEnough variable will always be a Boolean value: true or false.
// If the age is 15 or less than 18, the 'if statement' code block would NOT execute, but the 'else' block will be executed.
// This 'if-else statement' is called a Controlled Structure. 

/*
if (age >= 18) {
  console.log('Sarah can qualify to apply for her driving license 🚗 ')
}
else {
  const yearsLeft = 18 - age;
  // Will logout: Sarah can qualify to apply for her driving license and a car emoji:
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`); // 18 - what ever the age variable is assigned to.
}
*/


/* Conrolled structure allows me to have more control over the way that my code is executed:

if() {

} else {

}

JS donot execute all the code in a kubear way. I can control blocks of code that should execute abd blocks that should not execute.
This gives me more control of how my code works and that is why this is called a control structure.

*/

/*
// Another example: this time actually create a variable conditionally, not just always use console.log
const birthYear = 1978;

// Define century outside of the code block, and leave it empty. Then conditionaly reassign it.
let century;

// Create a variable called century which will contain the century in which this person was born.
if(birthYear <= 2000) {
  century = 20; // the 20th century
} else {
  century = 21; // the 21st century
}

// will logout 20 for 20th century:
console.log(century);
*/

/************************************************************************************************************************************ 

TYPE CONVERSION AND COERCION:

Need to go back to value types. Types is one of the fundamental aspects in programming and converting between types we do in every
programming language, converting a Number into a Boolean. The below is case-sensitive, i.e. the functions MUST starts with a cap-letter.

Type Conversion:
When we manually convert from one type to another.

Type Coercion:
JS convert from one type to another automatically for us. It happens implicitly, completely hidden from us. 
Happens whenever an operator is dealing with two values that have different types.

SUMMARY:
1. Converting Strings to Number:
Use the Number function. This is when we explicitly want to convert from one type to another.

2. Converting Number to String:
Use the String function.
When logged out to console, the first one has the Number type, the second has the String type, indicated in different colours.
	
3. Cannot convert String or Number into a Boolean, Undefined or to Null as to do that it wouldn't make much sense. 

**************************************************************************************************************************************/

/*
Type Conversion:
Converting Strings to Number, use the Number function.
Example, I have an input field on a webpage for the user to input their birth year. These inputs fields usually come as strings. 

*/
/*

const inputYear = '1991';
// Calculate in what year will the person will become of full age?
// When I add something to a string, it will concatinate a String. I can't expect to add 18 to the 1991 as its a String.
// will logout: 199118, which is wrong. 
console.log(inputYear + 18); // 199118
// I need to convert the String 1991 into a Number using the built-in Number function. This will return the String as a Number.
// When logged out, Number types are in a blue colour, String types are in black colour - this may change in the future? The first
// is a Number, the second is a String.
console.log(Number(inputYear), inputYear); // 1991  "1991"

// Note: The inputYear variable is still a String. Still hold the variable 1991 as a String and not as a Number. That is why the result
// of the first console.log with the + operator is still a String as the original input year variable is still a String. Using the
// Number function will simple give me a converted version. So to perform this calculation i need to use Number function.
console.log(Number(inputYear) + 18); // 2009

// What if I need to convert something into a number that is impossible to convert?
// NaN: Not a Number value. An operation that involves numbers fails to produce a new number. NaN means invalid number. it's not
// really NaN. 
console.log(Number('Vanessa')); // NaN
// I can check this by using the 'typeof':
console.log(typeof NaN); // number
// So I can see that NaN actually means an invalid Number.

// 2. Converting Number to String using the String function - case sensitive.
// The output value is black menaing its a String. The blue one has the Number type. The black one has the String type.
console.log(String(23), 23); // 23

// JS can only convert two, three types. Can convert to a Number, to a String or to a Boolean. Cannot convert something to Undefined
// or to Null since that wouldn't make much sense.
*/

// Type Coercion:
// whenever an operator is dealing with two values that have different types. JS will convert one of the values to match the other value.
// So the operation can be executed.
// Examople, I have differnt types here. Why isn't the instructor not using back-ticks here?
// The plus operator triggers the Coercion Strings. So whenever there is an operation between a String and the Number, the Number will be
// converted to a String.
/*
console.log('I am ' + 23 + ' years old'); // I am 23 years old

// Not all operators do type coercion to String.
// JS will convert Strings to Numbers. The minus operator triggers the opposit to the plus operator, so from String to Number.
console.log('23' - '10' - 3); // 10
// These values will be converted to Numbers as that is the only way the multiple operator can work.
console.log('23' * '2'); // 46
// Example using a logical operator. JS will automatically convert Strings to Numbers.
console.log('23' > '18'); // true
// Now the distintions should be clear.

// Play the game called Guess the Output:
let n = '1' + 1; // '11'
// The String 11 will be converted into a Number due to the minus operator, then 11 minus 1 is 10.
n = n - 1; // 10
console.log(n); // 10
*/
/*************************************************************************************************************************************  

Truthy and Falsely Values:

Falsy values are not false but will become false when I try to convert them a Boolean. There is 5 falsy values:
0, '', Undefined, Null, NaN
False is already false, so don't need to include it in the list above.

All above 5 values will be converted to false when we attempt to convert them to a boolean. Initially they not exactly false but will be
once converted to a Boolean. Everything else are truthy values - vaule that will be converted to true. So any Number not zero or any String
that is not an empty String will be converted to true when we attempt to convert them to a Boolean.

/*************************************************************************************************************************************/

// Just as we did with Strings and Numbers, we do the same with Booleans:
// I know this is a falsy value:
// Convert falsy values into Boolean's.
/*
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Vanessa')); // true // as its not empty String
console.log(Boolean({})); // true // an empty object.
// Empty String
console.log(Boolean('')); // false // empty String.
*/

// In practice I'm not likely to use these function. It's just to show me the concepts of truthy and falsy values.
// Conversion to Boolean is always implicit, not explicit. Always type coercion that JS does auto behind the scenes. But when do JS do type
// coercion to Booleans? First when using logical operators, second in a logical context, i.e. in the condition of 'if-else statement'.
// How do type coercion works in the 'if-else condition':

// const money = 0;
// test if the person has any money or not:
// In this condition, here JS will try to coerce any value into a Boolean using the Truthy and Falsy rules above.
// This condition, this will be converted into False, as the variable is equal to 0.
// Therefore, the 'else' block is executed: You should get a job! is logged out.
/*
if (money) {
  console.log("Don't spend it all !");
} else {
  console.log('You should get a job!');
}
*/
// If I change the value from 0 to any other value like 100, then the condition will be true, and the 'if' block will be executed.

// Another use case to check if a variable is actually defined or not (if something exists or not):
// This will execute the 'else' block as the height is declared but NO value as been assigned to it so the variable is Undefined which is a
// falsy value. Therefore, the condition will auto be converted to a Boolean, and since height is Undefined and undefined is a falsy value,
// height becomes false. Therefore, the 'else' block will be executed.
/*
let height;
if(height) {
  console.log('Yay! height is defined');
} else {
  console.log('Height is Undefined');
}
*/

// However, if I assign something to the height variable (i.e. a Number like 123), then I will get the other result - the 'if' block will
// be executed as the condition becomes true.
// But 0 is a Number but when I logout, the 'else' block gets executed. This is not what we want. This is a bug - error in my app.
// As in my app I didn't account for this but only for the account for the scenario that the height is either defined or not, but I didn't
// think the height being zero. I can fix this using logical operators. 

/*************************************************************************************************************************************   

EQUALITY OPERATORS: == vs. ===

So far we've only used comparison operators to take decisions with if-else statements. If we want to check if 2 values are equal, instead of one being greater
or less than the other. For that we have different equality operators. Example, using the age variable:

*************************************************************************************************************************************/

// Set age variable to 19.
// Use an if-statement to check if the age is exactally 18 using the tripple equal oporator or the
// Strict Equality Operator:
// Its strict as it don't perform Type Coercion (JS don't convert the values for us), it only returns 'true' to when both values are exactly the same.
// I can test this in the console and see the result.
// I don't need the braces in my if-statement if I only have one line of code:

/*
const age = 18;
// Will be 'true' so the String will get logged out:
if (age === 18) console.log('You just became an adult - Strict');

// However, if the age is NOT 18, then nothing will get logged out. I tested this and it works.

// How do the the Strict Equality Operator work?
// Just like the comparison operators, it will return a true or a false value, so a Boolean value. Only that in this case, true will only be the result of this
// operator in case that both sides are exactly the same. Don't confuse the assignment operator with the comparison operator - the triple equal operator.

// We also have the Loose Equal Operator which only uses two equal.
// Lets say, I change the age from 18 to a String '18', the String '18' gets converted into a 'Number 18', which then 18 are actually a 'Number 18'.
// Then JS will compare them to see if they are the same, which in my case, it is. 
// I have tested this in the console: '18' == 18; // true
// Will become 'true' as the String will logout as '18' a String will get converted to a 'Number 18' :
if (age == 18) console.log('You just become an adult - loose');
*/

// Note: the Loose Equality Operator full of strange rules and behaviours. So if I use this, it can introduce many hard to find bugs in my code. For general rule
// for clean code, avoid this Loose Equality Operator as much as I can. Always try to use the Strict Equality Operator instead. Its best practice even if I need
// Type Coercion. It's better to convert the value manually before the comparison than relying on the double equal operator.
// I will check this out with my Mentor during my next Catch-up meeting with him!

// A way to get a value from a webpage, using the 'prompt' function with a String inside it.
// Below code will create a value, the number the user inputs:
// This outputs a prompt window in my browser for user to input something, and hit return.
// prompt("What's your favourite number");
// But need to store that value somewhere. So i need to create a variable called favorite:
// const favourite = prompt("What's your favourite number");
// Its in this variable where the value that user input into the form will be stored.
// Logs the value of 23 which is in black meaning its a String.
// console.log(favourite); // 23
// Checking the type that it is really a String:
// console.log(typeof favourite); // string

// Writing some logic to check if this is a great number:
// The user inputs 23 into the prompt box which is a String. This Loose Equality Operator (type coercion) converts that to a 'Number 23', compares
// that with the already existing 'Number 23' that's on the right side of the Loose Equality Operator. It's the same or true and will logout the String
// below.

/*
if (favourite === 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number!');
}
*/
/*
// However, if I use the Strict Equality Operator then the String will NOT get logout.
// I should always use the Strict Equality Operator and convert manually using the Number function.
// Now favourt will be a Number. Then this should be back to working.
const favourite = Number(prompt("What's your favourite number"));
console.log(favourite); // 23
console.log(typeof favourite); // string
// true, so this line of code will run:
// if user input 7, then the 'else if' block will get executed.
// If user input 9, then the second 'else if' block will get executed.
// If user input a number is neither 23 or 7, then the 'else' block will get executed.
if (favourite === 23) { // 23 == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Nuber is not 23 or 7 or 9')
}

// Now I have a way of not going immediately jnto the 'else' block once the initial condition (if block) is false, as there are now other conditions that
// can be checked one after the other. So first, it will check if the user input is 23, if not it will check if its 7, if not it will check if its 9,
// if not then the String in the final 'else' block will be executed.

// There is an Operator for Different. The opposite to the Equality Operators is: Not Equal operator:
// Loose version: !=
// Strict version: !==
// Checking if the favourite variale is different or not the same as 23. As before, alwayis use the Strict version.
// Always best to use the Strict Not Equals Operator (or Strict Different Operator).
// Say the user inputs 9, the string below will be logout (9 is different to 23). 
if (favourite !== 23)
  console.log('Why not 23?');
*/

/************************************************************************************************************************************************** 

L23. BOOLEAN LOGIC:

A branch of computer science, which uses true and false values to solve complex logical problems. To do that, it uses several logical
operators to combine true and false values. Much like we use arithmetic operators, to combine numeric values. Here I'll learn the most basic
logical operators: AND, OR, and NOT operators.

Note: Boolean logic is actually not specific to JavaScript but true for all programming.
How do these operators work, used and with an example:

***************************************************************************************************************************************************/

/*

Two Boolean Variables:
A: Sarah has a driver's license.
B: Sarah has good vision.
Both are conditions that can be either true or false as Sarah could have no driver's license and she could have no good vision?
On the other hand, she could have a driver's license AND she could have good vision.

Using the AND operator, we can combine the two variables:
A AND B:
"Sarah has a driver's license AND good vision".
The result of this operation: we use a Truth Table:
It has two possible values for each of the variables, A and B, which gives me four possible combinations of results. So all I have to do is to
plug in the values of my variables, and get a result of the AND operation from this table. According to Truth Table, only if A and B is true,
the result of the operation will be true as well. This makes sense since it's called AND operator. So the AND operator returns true only if both
A and B are true. in all other situations, if either A or B are false, then A and B will also be false. We can generalise this to more operands,
to more than two values. I could do A and B and C, and result will be true only if all of them are true. If one of them is false, then the result
is immediately false.

The OR operator:
Works in the opposite way to the AND operator.
With my current example, I can deterime whether Sarah has a driver's license OR good vision.
According to the Truth Table, the OR operator will be true if just one of the variables is true. So even if one of the variable is false,
the result will still be true. So if either A or B is true, then the OR operation becomes true as well. Thats why its called the OR operator.
Again, if I have multiple variables, its enough for one of them to be true, to make the whole operation become true as well.

The NOT operator:
This is a lot simplier as it doesn't combine multiple values. Instead, it acts on only ONE Boolean value and just INVERTS it.
So if A is true, it will become false. If its false, then NOT A will become true.

 */

 // A Practical Example:
 // Using the age variable and assign it the value of Number 16:
//  age = 16;

 // My Boolean Variables:
 // A: Age is greater or equal 20
 // B: Age is less than 30

 // Determin the value of each of the variables:
 // A must be false as age is not greater or equal to 20.
 // B must be true as age is less than 30 since 16 is obviously less than 30.
 // Conbine A and B using some logical operators. The first exercise is the NOT operator: !A
 // I already know that A is false, so the result of !A is true as all the NOT operator do is to invert the logical value of the variable.

 // Next is the AND operator:
 // I already know that A is false and B is true.
 // So, I have False and True. According to the Truth Table, I can determine that the result of this must be False.
 // It's enough for one of the operand to be False, to make the result of the operation also False.

 // Now, A OR B:
 // According to the Truth Table, and its True as its enough for one variable to be true for the whole expression to be true as well.

 // Now, check !A AND B:
 // I already know that NOT A is true and B is true.
 // This time I'm combining multiple operators. True and True will be True.
 // I don't understand this one. Will check with my Mentor next Monday morning.

 // A OR !B:
 // The NOT operator has Proceedence over the OR and AND operators. So the values are inverted first, then they are combined using AND or OR.
 // I already know that A is false and B is true. So NOT B must be false (inverted). Then False OR False is also False. This is the only way
 // that the OR operator can be false, if all of them are false.
 // In the next lecture I will use these Boolean operators.

 /************************************************************************************************************************************    
 
 LOGICAL OPERATORS:
 Now going to use Boolean variable from the last lecture 'Boolean Operators', about having a driver's license and having good vision.
 Using Boolean variable and Boolean logic to model complex situations.

 ************************************************************************************************************************************/

 // creating the variables and setting it to true initailly to test:
 const hasDriversLicense = true; // variable A
 const hasGoodVision = true; // variable B

// Using the AND and OR operators. Using && to combine 2 logical values:
// The result of true AND true should be true:
// Now change of the locial values to false and see what happens - the: hasGoodVision change to false.
// This time the result will be fasle as that is enough for the operation to be false, and it is.

console.log(hasDriversLicense && hasGoodVision); // false
// Enough for one of the variables to be true for the whole operation to become true Tested, and yes it works
console.log(hasDriversLicense || hasGoodVision); // true
// Using the NOT operator to invert one of the values: !
// This should logout: false as I've already set this variable to: true when I created it at the top:
console.log(!hasDriversLicense);

// Now I know how the Boolean Operators works, I can use these variables to take a decision.
// I wish to determin whether Sarah should drive or not? I need to create a new Boolean variable and use the others to determin that.
// My model is that Sarah should drive if she has a driver's license and at the same time has good vision 

// const shouldDrive = hasDriversLicense && hasGoodVision;
// Now use this variable to finally take the decision.
// If she should drive, then log to the console that Sarah is able to drive! If not, logout: Someone else should drive.
// create the condition in the 'if' statement.

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...');
// }

// When the variable: hasGoodVision is set to false, then the message in the 'else' block will logout, meaning the condition in the if-statement is NOT
// true. I can change that variable B to: true so the are both true, so the message in the 'if' block will get logout. Tested, and it works.

// Adding another Boolean variable.
// to use more than 2 variables with the OR operator: || 
// Will logout: true as at the moment all variables are set to: true.
const isTired = true; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired); // true
// However, If I change the operator to AND, and one variable to false then the result will be false as it's enough for one of the operands to be false
// to make the whole operation false as well.

// Improve my decision making whether Sarah should drive or not. With this third variable now, I want Sarah to be able to drive if she has a driver's
// license, if she has good vision, and if she is not tired. Translate this into a decision.
// Use the NOT operator within the condition. I want the opposite of being tired, so need to invert the third variable using the NOT operator: !

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Someone else should drive...');
}

// Only if variables A and B are set to true and variable C is set to false, then Sarah is able to drive. This is because only then all variable will
// result to: true.
// When !isTired is true, when the isTired variable is set to false. Otherwise, the 'else' block will get executed.

