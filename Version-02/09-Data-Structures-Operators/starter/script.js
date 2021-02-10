'use strict';

/*******************************************************************************************************************************************************

103. Destructuring (unpacking) Arrays:
ES6 Feature. A way of unpacking values from an array or an object into separae variables.
To break a complex data structure down into a smaller data structure like a variable.
For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

Focus on more modern JS.
To simulate a food delivery app: Italian Restuarant:

********************************************************************************************************************************************************/

// Enhanced Object Literal:
// An array with all the weekdays:
// take some of them out rather than write them out manually by using the square brackets syntax.
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


// First Solution:
// We have an object that is outside of this object, i.e. the openingHours object. We take this and create a separate object with it.
// We still want to have the opening hours object inside of the restaurant object.
// Before we could only compute the values but not the property names but now with Enhanced Object Literals we can do that as well.
// (7) ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Starter data:
// We can have a function return an array and then immediately destruct the result into different variables. This allows us to return multiple values from a funtion.

let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before ES6: the problem is that the property name is the same as the variale name from which we're getting this new object. With Enhanced Object Litral I don't
  // need this. Now in ES6 Enhanced Object Literal its just this:
  // result: we get a property named: hours
openingHours, 

// Second Enhancement to Object Literals is about writting methods. In ES6 we no longer have to create property then set to a function expression. We can write
// in an easier way.

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // want an order delivery
orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address, }) {
  console.log(`Oder received ${ this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

// Method To order pasta with 3 ingredients and logout.
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
// Rest Parameters. This pizza need to have at least 1 ingredient, the other ingredients are optional.
// Will collect the rest of the aruments into an array. Now order pizza by calling this function further down, just after the add(...x);
  orderPizza (mainIngredient, ...otherIngredients) {
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
// const { sat, ...weekdays } = restaurant.openingHours;
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
*/



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


/*******************************************************************************************************************************************************

111. Enhanced Object Literals:

In the code above: Our restaurant object is an Object Literal as we wrote the object literally in our code using the curly braces syntax.
ES6 introduced 3 ways to write object literals like this.

1. we have an object that is outside of this object, i.e. the openingHours object. We take this and create a separate object with it.

********************************************************************************************************************************************************/


/*******************************************************************************************************************************************************

118. SUMMARY: Which Data Structure to Use?

Now we have 4 data structures we can choose from incl. Arrays, Sets, Objects, Maps.

Sources Of Data:
1. From the program itself: Data written directly in source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in ToDo app)
3. From external sources: Data fetched for example from web API (e.g. We can use web API to get data from other apps i.e. to get current weather in any city
  or data about movies. or currency converstion rates etc. recipe objects).

The Pros & Cons of each data structure and when to choose them:
We store collection of data in Data Structures. There are 4 Data Structures in JS and we need a way to decide between them.

Collection Of Data > Data Structure > 

                      Simple List:
                      Arrays or Sets - we have a list without any description.

                      Key/Value Pairs:
                      Objects or Maps - keys allow us to describe values.

Getting data from a web API = most common source of data. This data comes in special format called JSON (JSON data format). Looks like a long string. Can be
converted to JS objects as it ueses the same formating JS Objects and Arrays. In the example, the values are described by a key to tell us what the different
values actually are. This is why here data is stored in an Object not an Array. Each of the recipe objects itself can be seen as a value and since we have many
of them it means we have a collection of data. Therefore, we need a data structure to store them. An array of Objects is perfect for this recipes data.

Other Data Structures Built in to JS:
1. WeakMap
2. WeakSet
Other Data Structures Not Built in to JS:
1. Stacks, 2. Queues, 3. Linked Lists, 4. Trees, 5. Hash Tables.

Built in to JS: Arrays vs. Sets and Objects vs. Maps: 5:52
When do we use them?

Arrays vs. Sets:
Arrays:
1. Use when you need ordered list of values (might contain duplicates).
2. Use when you need to manipulate data.

Sets:
1. Use when you need to work with unique values. Are to compliment Arrays when dealing with unique values.
2. Use when high performance is really important.
3. Use to remove duplicates from arrays.

Objects vs. Maps;
Objects:
1. More "traditional" key/value store ("abused" objects).
2. Easier to write and access values with . and []
3. Use when you need to include functions (methods)
4. Use when working with JSON data format (can convert to map)

Maps:
1. Better Performance - better for simple key-value stores as they offer.
2. Map keys can have any data type
3. Easy to iterate
4. Easy to compute size of a Map.
5. Use when you simply need to map key to values.
6. Use when you need keys that are not strings.
7. can't use the 'this' keyword in maps.

At the moment Maps is more important than Sets.

********************************************************************************************************************************************************/


/*******************************************************************************************************************************************************

120. Working with Strings P1:

Example: Airplanes & Airlines:

********************************************************************************************************************************************************/

/*
// Comparing Arrays with Strings;
// airline variable
const airline = 'TAP Air Portugal';
let plane = 'A320';
// Do something with this
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
// to logout the B from the String
console.log('b737' [0]);

// Read the length property of String
console.log(airline.length); // 16
console.log('B737'.length); // 4

// Strings also have methods and some are similar to the array methods.
// Get the position in which a cerain letter is in the String. Strings are also zero based.
// Will logout: 6 as it includes the space between the P and A within the value of the airline variable.
// indexOf : gets the first occurance
// lastIndexOf : gets the last occurance
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('l')); // 15
console.log(airline.indexOf('Portugal')); // 8

// What can we do with the index? 1 use case is to extract part of a String using the slice method - to return new string.
// slice method needs indexes as arguments. Sometimes it can be useful to first figure out the index of part of a string to then extract that.
// Start slice at position 4. The slice method starts to extract from the letter A form the above String.
// The result is called a subString as its just a part of the original string. This dont change the underlying or original string as its impossible to mutate
// strings they are Primatives. So these methods always will return new strings.
console.log(airline.slice(4)); // Air Portugal
// we also specify an end parameter.
// Location 7 is a space which is the end value and not included in the string - it stops extracting before reaching index number 7.
// The length of the extracted string will always be the end minus the begining: 7 - 4 = 3
console.log(airline.slice(4, 7)); // Air

// What if we don't know the string we will receive? 
// Extrac the first word of the same string but without knowing any of the indexes. You can't hardcode the values.
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// Extract the last word start slice at the last space. It will keep extracting everything until the end. The space at the front is included so we need to add: +1 
console.log(airline.slice(airline.lastIndexOf(' ') + 1 )); // Portugal

// Define a negative begining argument. It will Start extracting from the end
// Result: last two letters from the word Portual
console.log(airline.slice(-2)); // al
// Specify a negative end parameter. Starts position 1 and the last character is cut off.
console.log(airline.slice(-2)); // AP Air Portuga

// Write a function that receives an airplane seat and logs to the console whether its a middle seat or not.
// Check if the seat we receive contain a B or E and if so they are middle seats.
// Take the last character of the string and test whether its a B or an E.
const checkMiddleSeat = function(seat) {
  // B and E are middle seats. to extract the last character, We use -1 as the begin character. It will start extracting one from the right side.
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E')
  console.log('You got the middle seat');
  else console.log('You got lucky');
}

checkMiddleSeat('11B'); // You got the middle seat
checkMiddleSeat('23C'); // You got lucky
checkMiddleSeat('3E'); // You got the middle seat

// Calling a method on a String:
// String are just Primitives and they have methods available. When we call a method on a String, JS will auto behind the scenes convert that string primitive to
// a string object with the same content. Then its on that object where the methods are called. This process is called boxing as it takes our string and puts it
// in to a box which is the object.
// JS will call this string function. Once the opporation is done, the object is converted back to a regular String primitive.
console.log(new String('jonas')); // result: the string looks like an Object 
// this is now an Object
console.log(typeof new String('jonas')); // object

// All String methods return Primitives. The result of this is back being a String.
console.log(typeof new String('jonas').slice(1)); // string

*/

/*******************************************************************************************************************************************************

121. Working with Strings P2:

Simple String methods. Frist two are for chnaging the case of a string.
all methods are case sensitive.

********************************************************************************************************************************************************/

// Simple String methods. Frist two are for chnaging the case of a string. No arguments needed.
// Change the whole string to lower case letters only.
const airline = '';
console.log(airline.toLowerCase());
// Change the whole string to upper case letters only.
console.log(airline.toUpperCase());

// Fix capitalisation on a passenger name. This needs to be fix. First step put everything into lower case.
const passenger = 'jOnAS'; // Jonas
 // convert the whole string to lower case.
const passengerLower = passenger.toLowerCase();
// Convert character in location 0 to upper case letter, then the remaining of the string all lower case, slice from position 1.
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Comparing user emails. Compare the 2 emails to find out if they are kind of the same?
// Its just a matter of capitalisations and for Emails they are still valid.
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
// Check user input. First convert to lowercase using the toLowerCase method.
// const lowerEmail = loginEmail.toLowerCase();
// Remove all the white space, the Enter counts a white space using the trim method.
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); // hello@jonas.io

// We can do all of this in one step. This will return a new string. On strings we can call string methods. Call the trim method on the: loginEmail string.
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail); // hello@jonas.io
// will return true or false
console.log(email === normalisedEmail); // true

// Replacing part of strings. We have price for a flight. 
const priceGB = '288,97£';
// Compute the price in US using the period rather than the comma. This returns a string.
// Remove the period, do chaining again.
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288,97$

// We can replace entire words not just characters. Replace the word: door with the word: gate. Replace also creates a brand new string, it don't mutate the
// original one.
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log( announcement.replace('door', 'gate'));
// Use the ReplaceAll method to replace all 'door' words with 'gate'.
console.log( announcement.replaceAll('door', 'gate')); //  All passengers come to boarding gate 23. Boarding gate 23!
// If the replaceAll method not working, use the regular express solution - Use the 'g' flag that stands for global
// console.log( announcement.All(/door/g, 'gate')); 

// 3 simple methods that return Booleans: includes, starts with, ends with.
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
// will return true as the value of the plane variable do start with the word 'Air'. It don't have to match the entire word:
console.log(plane.startsWith('Air')); // true

// Check that the current plane is part of the New Airbus family.
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family'); // Part of the NEW Airbus Family
}

/*  Practice Exercise: using String methods on Strings:  */

// Check if a certain passenger's baggage is allowed to be checked-in.
// Check if the baggage includes a knife, a gun, COVID or Nigel . If so, that passenger is not allowed on board.

const checkBaggage = function(items) {
  const baggage = items.toLowerCase(); // first convert everything to lowercase so we don't have to check for all the variations of capitalisation. So we can easly compare with one standard.
  if(baggage.includes('knif') || baggage.includes('gun') || baggage.includes('COVID-19') || baggage.includes('Fred')) {
    console.log('You are NOT allowed on board! ⛔️')
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife'); // You are NOT allowed on board! ⛔️
checkBaggage('Socks and camera'); //Welcome aboard!
checkBaggage('Got some snacks and a gun for protection as I\'m from the US'); // You are NOT allowed on board! ⛔️
checkBaggage('I have Fred in bag as he can\'t be trusted at home on his own'); // Welcome aboard!


/*******************************************************************************************************************************************************

122. Working with Strings P3:



********************************************************************************************************************************************************/



























