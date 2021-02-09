'use strict';

/*******************************************************************************************************************************************************

103. Destructuring (unpacking) Arrays:
ES6 Feature. A way of unpacking values from an array or an object into separae variables.
To break a complex data structure down into a smaller data structure like a variable.
For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

Focus on more modern JS.
To simulate a food delivery app: Italian Restuarant:

********************************************************************************************************************************************************/

// Starter data:
// We can have a function return an array and then immediately destruct the result into different variables. This allows us to return multiple values from a funtion.

let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // want an order delivery
orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address, }) {
  console.log(`Oder received ${ this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
// Method To order pasta with 3 ingredients and logout.
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
// Rest Parameters. This pizza need to have at least 1 ingredient, the other ingredients are optional.
// Will collect the rest of the aruments into an array. Now order pizza by calling this function further down, just after the add(...x);
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Loop over our entire menu. Start by creating again the array with the entire menu by expand the restaurant starter meanu and the main menu.
// The for-of loop is simplar than the regular for-loop.
// Will log the items one by one.
// The item variable is always the current element in each iteration. We don't need a code block as we only have 1 statement to execute.
// No need to worry about counters and conditions. We can still use the continue and break keywords.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // Focaccia  Bruschetta  Garlic Bread  Caprese Salad  Pizza  Pasta  Risotto.

// To get the current index and not just the current element, its a bit of a pain when we need that index as originally the for-of loop was meant to just give
// you the element.
// results: each of the item (x7) is an array with the index in the array element itself.
for (const [i, el] of menu.entries()) {
  // console.log(item); // (2) [0, "Focaccia"]
  // Display menu. If item is an array we can just destructure it. Destructure it using 2 elements: i, el.
  console.log(`${ i + 1} : ${ el }`); // 
}

// An array in which each position contains a new array, which contains the element and the index number of that element in that original array.
// console.log([...menu.entries()]);




// 1. Destructuring:
// How Rest Pattern works in Destructing Assignments: in Arrays:
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // script.js:59 1 2 (3) [3, 4, 5]

// can use the 3 dots on both side of the array. do not include any skipped elements. Rest Pattern must be the last in the destructing assignment.
// Collect the pizza, risotto from the mainMenu and put the rest from starterMenu in an array.
// The Rest element must be the last element. Can only be only 1 Rest element in any destructuring assignment.
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,];
console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// How Rest Pattern works in Destructing Assignments: in Objects:
// Similar with arrays but the remaining elements will be collected into a new object and not a new array.
// Create Object ONLY for the x2 weekdays. Take out Saturday into its own variable, then collect the rest the properties into a New Object.
// logout: an object only containing fri and thu.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// 2. Functions: Rest Parameters:
// For the Spread Operator, the second use case was to pass multiple arguments into a function all at the same time.
// Example: ingredients: we had an array, then we expanded all of the elements of the array to pass these elements then as individual arguments of the function.
// The Rest Operator can do the opposite. Take some arguments and add them together. Any amount of arguments should work for this function.
// Instead of specifying 7 arguments, we use the Rest Pattern - in this case its called Rest Parameters.
// Use the rest syntax: ...
// We call the argument: numbers
// ...numbers
// Create a working function that can accept any number of parameters. Pack the values into an Array.
const add = function(...numbers) {
  // console.log(numbers); // 3 arrays
  // Simple logic to add all our numbers which is an Array. We want the length of that array.
  // In each iteration we add the current number to the current sum value.
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // logout sum to get some results.
  console.log(sum);
};
// This function will be called 3 times, we expect 3 results.
// logout: 3 arrays with all the arguments that we passed into the functions but they are Arrays. 
// 
// (2) [2, 3]
// (4) [5, 3, 7, 2]
// (7) [8, 2, 5, 3, 2, 1, 4]
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

// Now order our pizza from the 'orderPizza method above' by specifying as many ingredients as we like.
// logout results: mushrooms, and an array of the other ingredients that we passed in: (3) ["onlins", "olives", "spinach"]
// This is the result of the Rest Arguments.
restaurant.orderPizza('mushrooms', 'onlins', 'olives', 'spinach');
// Order pizza with only mushrooms. The remaining arguments will be put in an empty array. In this case there are non to collect, but we still get empty array that
// we can work with if we wish.
restaurant.orderPizza('mushrooms');

// The rest syntax is taking multiple numbers/values and then packs tem all into one array. It's doing the opposit to the Spread Operator.

// Another example: unpack the values.
// To take these values and call the add function with these 3 values, we use the Spread operator. So we are taking all the numbers of the array and Spreading them
const x = [23, 5, 7]; // 
// this would be same as wirting: 23, 5, 7
add( ...x ); // 



/*

// With Spread Operator:
// we can use the Spread Operator whenever we would otherwise write multiple values separate by commas: 
// Without Spread Operator: use ... to expand the array
// const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // (5) [1, 2, 7, 8, 9]
// to expand an arry: ...arr
const newArr = [1, 2, ...arr];
console.log(newArr);
// Use Spread Operator to log the individual elements of the array and when we need to pass multiple elements into a function.
console.log(...newArr); // 1 2 7 8 9

// Create an array with one more food item in the main menu array. Create new main menu.
// Need to expand the array then add your new fod items
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // (4) ["Pizza", "Pasta", "Risotto", "Gnocci"]

// Copy array: put all the elements from the mainMenu into this new mainMenuCopy variable. Create a shallow copy of the array: mainMenu
const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 or more arrays. Create an array that contains both the main menu and the starter menu.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; 
console.log(menu); // (4) ["Pizza", "Pasta", "Risotto", "Gnocci"] 
                  // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

// The spread operator works on all so-called iterable. 
// There are different iterable in JS: arrays, strings, maps or sets. So most of the built-in data structures are now iterables but except objects.
// We can use the spread operator on iterables.
const str = 'Jonas';
const letters = [ ...str, '', 'S. '];
console.log(letters); // logout each individual elements of the string Jonas, empty string, and 'S'
console.log(...str); // 

// Call the orderPasta function to order pasta:

// Real-world example:
// Function that exepects multiple arguments. Then use the Spread Operator to pass those arguments.
// Build an array with the 3 ingredients.
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")
];
console.log(ingredients); // (3) ["a", "b", "c"]
// Call the orderPasta function. Will write the 3 elements of the array. Spread the ingredients array.
restaurant.orderPasta(...ingredients); // (3) ["chese", "ham", "tomatoes"]
// The old way ES5 is: longer, not as clean.
restaurant.orderPasta(ingredients[1], ingredients[2], ingredients[3]); // the 3 element that user inputs in the prompt boxes.

// Objects are not iterables. Copy all properties from restaurant object to the newRestaurant object.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow copy on Objects using the Spread Operator.
const restaurantCopy = { ...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // istorante Roma
console.log(restaurant.name); // Classico Italiano



restaurant.orderDelivery( {
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
 

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,

} = restaurant;
console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
// destructure this object
const obj = { a: 23, b: 7, c: 14 };
// destructure this object
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects. Retrieve Friday. 
const { fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23



// Mutating variables whilst destructuring objects.

// For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.
// An array with 3 elements.
// const arr = [2, 3, 4];
// To retrieve the 3 elements without destructuring:
// const a = arr [0];
// const b = arr [1];
// const c = arr [2];

// To retrieve the 3 elements WITH destructuring.
// With destructuring we can retrieve all 3 variables at the sametime. This is the destructing assignment NOT an array.
// const [x, y, z] = arr;
// console.log(x, y, z); //2 3 4
// console.log(arr); // (3) [2, 3, 4]

// Data from restaurant: take some elements out of the categories using destructuring:
// Take the first and second element from the categories array within the restaurant object.
// const [first, second] = restaurant.categories;
// and logout to console:
// console.log(first, second); // Italian Pizzeria

// Take Italian as the frist, take vegetarian as the second. Skipped the element in the middle.
// const [first, , second] = restaurant.categories;
// console.log(first, second); // Italian Vegetarian

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// Switch them around:
// store main in temp variable. We need the temp variable in the middle to do the switch.
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

// Switching Variables: 
// Switch the 2 variables using destructing. 1. Create new array with the 2 variables inverted.
// 2. Distruct them. Reassign the values of the 2 variables.
// Now we don't need a tempporary variable in the middle. The result is the same, but this is a lot easier.
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// Write a function to order food - add an method.
// immediately destruct the result into different variables. Retreive element 2 from the starterMenu, and element 0 from the mainMenu.
// console.log(restaurant.order(2, 0)); // (2) ["Garlic Bread", "Pizza"]

// Receive 2 return values from a function:
// Now we can destructure that using the destructuring assigment. Handy way of Immediately create 2 variables out of 1 function all.
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructing an array.
// const nested = [2, 4, [5, 6]];

// We don't want the one in the middle so we just sip it using a space then a commas.
// equals to the array that they should be taken.
// if we want all the individual values we do distructuring inside of distructuring. 
// const [i, , j] = nested;
// console.log(i, j); // 2 (2) [5, 6]
// Destructuring the inner array.
// const [i, , [j, k]] = nested;
// should give us 2, 5, 6 as separte variables.
// console.log(i, j, k); //2 5 6

// We can also set default values for the variables when we are extracting them. Useful when we don't know the length of the array.
// If we have an array shorter than we think then we might try to unpack the array in positions that don't even exist.
// Default vaues. Destructuring 3 elements out of an arry:
// set default values. This is good example when we get data from API.

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
*/

/*******************************************************************************************************************************************************

104. Destructuring Objects:

Coded within the above code.

********************************************************************************************************************************************************/

/*******************************************************************************************************************************************************

105. The Spread Operator (…)

similar to Destructuring as it also helps us get elements out of arrays.
To expand an array into all its elements - unpacking all the elements at once. See above code.

Only use the Spread Operator only when building an array, when pass values into a function.

********************************************************************************************************************************************************/

/*******************************************************************************************************************************************************

106. Rest Pattern and Parameters:

Two use case of the Spread Operator: we use the Spread Operator to build new arrays, or the pass multiple values into a function - expand an array
into individual elements. The Rest Pattern uses the same syntax however, to collect multiple element and condense them into an array - the opposite
of spread opportator. Rest is to pack elements into an array.
Use Rest Pattern on the left-hand side of the assignment operator. The Rest element must be the last element.

Create another method within the restaurant Object to demo Rest Parameter. See my code above.

********************************************************************************************************************************************************/


/*******************************************************************************************************************************************************

110. Looping Arrays: The for-of Loop:

New way of looping through arrays is using the for-of loop. 

Loop over our entire menu. Start by creating again the array with the entire menu by expand the restaurant starter meanu and the main menu.
See code above.

********************************************************************************************************************************************************/

