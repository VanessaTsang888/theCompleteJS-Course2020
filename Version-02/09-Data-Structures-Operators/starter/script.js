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
// To order pasta with 3 ingredients and logout.
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }



};

// With Spread Operator:
// we can use the Spread Operator whenever we would otherwise write multiple values separate by commas: 
// Without Spread Operator: use ... to expand the array
const arr = [7, 8, 9];
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
