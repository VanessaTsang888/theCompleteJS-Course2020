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

*/

/**** FUNCTION CALLING OTHER FUNCTIONS *****/

// Logic: Calling one function from inside another function. We do this all the time in JS.
// Know when you write multiple functions, 1 calling another.
// Example, a function being like a fruit processor which received a certain number of apples and organes.
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
  //  the amount of code and bugs. So if the Fruit Cutting Machine can only cut into 3 pieces, then we only need to change the figure in the
  // cutFruitPieces function once.


