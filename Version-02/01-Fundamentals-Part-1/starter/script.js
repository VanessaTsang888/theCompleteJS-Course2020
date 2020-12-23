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

console.log(typeof null);

*****************************************************************************************************************************************/


