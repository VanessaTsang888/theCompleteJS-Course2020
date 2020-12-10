// Function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

// Arrow Function: A special form of function expression that is shorter and therefore faster to write.
// Example 1:
// I want it to return the birth year.
// birthYear => 2037 - birthYear;

// I want to be able to use this function so i will store it in a variable like in the above function expression.
// We assign the value that's on the right to the variable (called calcAge3) that's on the right.
// so we don't need the braces to define the code block, dont't need the parentheses, and the return actually happens implicitly.
// So the value will be auto returned without us having to explicitly write the return keyword.
// Good for writing one line functions.
const calcAge3 = birthYear => 2037 - birthYear; // just this here is the arrow function.
// So we only have one parameter, one line of code in which we want to return something.

// Now to use this function, it works the same way as usig all the other functions.
// So we call the calcAge3 just like how we call all the other functions.
const age3 = calcAge3(1991);
// Now check it out, should be 46.
console.log(age3);

/* 
// Example 2: calculate how many years a person has left until retirement:
// First calculate the age, then calculate the retirement age minus the current age. So this time we do need the braces in order to define an code block.

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear; // calculate the age (46)
    // calculate the years until retirement:
    // The retirement age is 65, minus that with the current age. This will give us how many years we have left.
    const retirement = 65 - age;
    // We need the return keyword this time as this is NOT a one line arrow function.
    return retirement;
};
// Now run this arrow function:
// Log the value to the console directly:
// console.log(yearsUntilRetirement(1991));
// Will logout: 19 which is correct as 65 minus 46 (the age) is 19.
*/

// But what if we have multiple parameters? We need to warap the parameters into parentheses.
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // use template string to return retirement:
    return `${firstName} retires in ${retirement} years`;
}
// Now call it, twice:
// Will logout: Jonas retires in 19 years
console.log(yearsUntilRetirement(1991, 'Vanessa'));
// Will logout: Bob retires in 8 years
console.log(yearsUntilRetirement(1980, 'Riz'));

// What type of function should I use? Should I use arrow functions for everything = No.
// The fundamental difference between arrow function and traditional function.
// Arrow functions DON'T get the so-called This Keyword. 
