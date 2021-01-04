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
const firstName = 'Vanessa';
const job = 'Junior Software Engineer';
const birthYear = 1978;
const year = 2021;

// ES5: a complex string written in ES5 can be a pain.
// Use those variables to build a string, to print out: I'm Vanessa a 42 year old Junior Software Engineer.
// Will use the birthYear to calculate the age.
// Will do the calculation first, then the concatination due to Type Coercion. JS will convert the number into a string, then concatenate
// them so it can join them with the rest of the strings.
const Vanessa = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Vanessa);

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
const VanessaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(VanessaNew); // I'm Vanessa, a 43 year old Junior Software Engineer!

// Template Literals is the most used ES6 features, really useful in many situations.
// Can use back ticks for any regular strings.
// For strings, always use back-ticks so I don't need to think which quote marks to use.
console.log(`Just a regular string using back ticks`);

// Another great use case to use Template Literals is to create multi-line strings.
// ES5: new line using a special character /n
// 
console.log('String with \n\
muliple \n\
lines');
// one string on each line

// ES6: Template Literals - using back ticks. Use back ticks and the return key to create new line for me:
console.log(`String
multiple
lines`);
// So when ever I need multiline string, always use Template Literal as it is a lot cleaner.

/* 

TAKING DECISIONS: if / else Statements


*/





















