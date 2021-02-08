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


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
};

// For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.
// An array with 3 elements.
const arr = [2, 3, 4];
// To retrieve the 3 elements without destructuring:
const a = arr [0];
const b = arr [1];
const c = arr [2];

// To retrieve the 3 elements WITH destructuring.
// With destructuring we can retrieve all 3 variables at the sametime. This is the destructing assignment NOT an array.
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4
console.log(arr); // (3) [2, 3, 4]

// Data from restaurant: take some elements out of the categories using destructuring:
// Take the first and second element from the categories array within the restaurant object.
// const [first, second] = restaurant.categories;
// and logout to console:
// console.log(first, second); // Italian Pizzeria

// Take Italian as the frist, take vegetarian as the second. Skipped the element in the middle.
// const [first, , second] = restaurant.categories;
// console.log(first, second); // Italian Vegetarian

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
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
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Write a function to order food - add an method.
// immediately destruct the result into different variables. Retreive element 2 from the starterMenu, and element 0 from the mainMenu.
// console.log(restaurant.order(2, 0)); // (2) ["Garlic Bread", "Pizza"]

// Receive 2 return values from a function:
// Now we can destructure that using the destructuring assigment. Handy way of Immediately create 2 variables out of 1 function all.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructing an array.
const nested = [2, 4, [5, 6]];

// We don't want the one in the middle so we just sip it using a space then a commas.
// equals to the array that they should be taken.
// if we want all the individual values we do distructuring inside of distructuring. 
// const [i, , j] = nested;
// console.log(i, j); // 2 (2) [5, 6]
// Destructuring the inner array.
const [i, , [j, k]] = nested;
// should give us 2, 5, 6 as separte variables.
console.log(i, j, k); //2 5 6

// We can also set default values for the variables when we are extracting them. Useful when we don't know the length of the array.
// If we have an array shorter than we think then we might try to unpack the array in positions that don't even exist.
// Default vaues. Destructuring 3 elements out of an arry:
// set default values. This is good example when we get data from API.

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 undefined






