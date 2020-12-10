/*** Dynamic Typing in action ***/

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