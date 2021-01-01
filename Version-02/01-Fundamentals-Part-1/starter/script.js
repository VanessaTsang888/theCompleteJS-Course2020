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

PRACTICE ASSIGNMENT:

1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in
  millions).
2. Log their values to the console.

let country = 'England';
let continent = 'Europe';
let population = 67000;

console.log(population);

*********************************************************/



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

// Declaring a variable using the 'var' keyword:
// This should be avoided as its the old way (ES5) way of declaring a variable. However, need to know about it for legacy reasons as i may see this
// in some older code bases or projects.
// Works similar to 'let' :
var job = 'UX Designer';
job = 'Software Engineer'; // logsout without error meaning 'var' us allowed to mutate this job variable.
// Although using 'var' looks same as using 'let' and 'const', beneath the surface its actually different.
// 'let' is block scoped and 'var' is function scoped.
// It is not mandatory to declaring a variable as I can just to this:
lastName = 'Tsang';
console.log(lastName);
// and JS will be happy to execute this script, even without declaring the variable. However, its a bad idea as it don't create a variable in the
// current scope. Instead JS will create a property on the global object. 

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

Can do all arithmetic operations. 





**********/











