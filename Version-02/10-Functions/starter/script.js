'use strict';

/**************************************************************************************************************************************************** 

128. HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE (the memory address of the object):

How it works to pass arguments into functions. This goes back to Primitives vs. Objects. We also call primitives types as reference types.
This is a review of the lecture but applied to Functions. We need to understand how Primitives and Functions work in the context of functions.

****************************************************************************************************************************************************/
/*

// Declare a variable named flight and assign it to a string value.
const flight = 'LH234';

// Create an Object named jonas who will be the passenger.
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 2473979284
}

// Create a check-in function. The passenger object contains info on the passenger.
// some changes the checkIn function do: the flight number has changed and the name of passenger.
// Check if passport number is correct as it contains info of the booked flight. FlightNum is a copy of flight.
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    // mannipulating passenger is same as manipulating jonas object, both are same object in memory heap.
    passenger.name = 'Mr. ' + passenger.name; // Mr. Jonas Schedtmann

    if (passenger.passport === 2473979284) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
}
// Call the check in function
// checkIn(flight, jonas);
// Log both the flight and the jonas object to the console.
console.log(flight); // 
console.log(jonas); // Mr. Jonas Schedtmann

*/

/*

// Same as doing this. Copying the reference of an object to the momeory heap, both point to the same object in memory.
// Passing a primitive type into a function is same as creating a copy like this outside of the function so the vaule is simply copied.
// const flightNum = flight;
// const passenger = jonas

// jonas changed his passport before he checkIN
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);
}
// Call the function newPassport. Two functions manipulating the same object, creating a problem. Becareful with this kind of issue.
newPassport(jonas); 
checkIn(flight, jonas); // Wrong passport!

// When dealing with functions, two terms are used, passing by value and passing by reference (the memory address of the object). JS does not have passing by
// reference, only passing by value. However, the reference itself is still a value - its a value that contains a memory address.
// We pass a reference to the function but we do not pass by reference, 

*/

/**************************************************************************************************************************************************** 

129. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS:

JS treats functions as first-class citizens.
This means functions are simply values and treated as values.
Functions ar just another type of object.

Pass Functions as Arguments to OTHER functions:
since objects are values, functions are values too, so we can do some interesting things with them:
storing them in variables or object properties. We can also pass functions as argumetns to other functions, i.e. when adding event listeners or event handlers
to DOM objects: we pass the greet function into the addEventListener function as a value. 

Return functions FROM functions:
We can also return a function from anyother function - crazy but can
be very useful. 

Call methods on functions:
as functions are objects. There are function methods which are methods that we can call on functions, i.e. the 'bind' method.

First-class functions allows us to write higher-order functions:
Higher-order function is either a function that receives another function as an argument, or a function that returns a new function or both.

A function that receives another function:
The addEventListener function is the Higher-order function as it receives another function as an input - the greet function. The function that has been
passed-in the known as the Callback Function as the Callback function will be called later by the higher-order function, the addEventListener will call
the greet callback later as soon as the click event happens.

The confusion between First-class functions and Higher-order functiions:
The are NOT the same thing, they mean different things.
First-class functions: just a feature that a language either has or does not have = it means all functions are values. No First-class functions in
practice as its just a concept.

Higher-order functiions:
There are Higher-order functiions in practice as JS supports First-class functions.


****************************************************************************************************************************************************/


/**************************************************************************************************************************************************** 

130. Functions Accepting Callback Functions:

Callback functions are the vital part of the JS language.
Learn What is Abstraction:

Create a function that accepts other functions as an input. But to start with create two generic functions that do simple string transformations.

****************************************************************************************************************************************************/
/*

// Create a function that accepts other functions as an input. But to start with create two generic functions that do simple string transformations.
// This will replaces all spaces in a word.
// To select all spaces we use the Regular Expression with the G-flag and then replace them with an empty string. Then convert to lowcase letters.
// This will work with any string and returns a new one without any spaces in it.

const oneWord = function(str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

// Another one that also takes in a string. Will transform the first word of the input string to uppercase.
// First split the string using the empty string. Then take the results and destructure it into the first word (using the destructuring assignment),
// then all the other words (using Spread Operator - the rest pattern). Then return a new array that we'll join using empty string.

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function:
// named transformer, also take-in a string, aa second arugment it will take in a function. Therefore, this is a Higher-Order function.
// It takes in a function since it takes in a function.

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`); // Original string: JavaScript is the best!
    console.log(`Transformed string: ${fn(str)}`); // Transformed string: JAVASCRIPT is the best!

    // Functions can have methods and properties inc. the name property. Read the name property from the fn function that the Higher-Order function takes-in.
    // The name property is just the name of the function - upperFirstWord
    console.log(`Transformed by: ${fn.name}`); // Transformed by: upperFirstWord
};

// Call the transformer function.
// Transfor the string (the first parameter) using the upperFirstWord function. We are only passing-in the function value itself rather calling the upperFirstWord
// function. Its the transformer function calling the upperFirstWord function.
// The upperFirstWord function calls the fn which is the second parameter above
transformer('JavaScript is the best!', upperFirstWord); 

// Will lgoout:
// Transformed by: oneWord
// The oneWord function is the callback function as we call these functions that we pass-in. The transformer function that will call these Callback functions.
transformer('JavaScript is the best!', oneWord); //  

// Built-in Functions:
// addEventListener function is the Higher-order function just like the transformer function.
const high5 = function() {
    console.log('👋');
}
// The high5 is the Callback function (just like the oneWord or upperFirstWord) that gets called by the addEventListener function.
// When click on the body of the UI, will logout this: 👋
document.body.addEventListener('click', high5); // 👋

// This concept of Callback Functions is used all the time in built-in JS functions.
// There are many other examples incl. the for-each function that we call on arrays:
// On that array we call the for-each method, pass-in a Callback function into the for-each method (use high5).
// Result: will logout x3 waves with the same hand wave, as we have 3 values in the array.
// The method say: for each of them (the values) the CallBack will be called. Therefore, we have 3 wavings.
['Jonas', 'Martha', 'Adam'].forEach(high5);

// The transformer is the Higher-order function with high level of Abstraction 
// Callback functions allow us to create Abstraction. In the first 3 functions we created, we actually create a level of Abstraction. 
// Abstraction means we hide the detail of some code implementation as we don't care that detail. This allows us to think about problems at a higher more
// abstrat level. The transformer function don't care how the string is transformed, all it wants to do is transform a string but don't care how it should
// do it. We could of take the transformer code and written it into the oneWord or upperFirstWord function as that would work just the same but instead
// we abstracted this code away into other functions - we created a new level of abstraction and by doing this our transformer function is only concerned with
// transforming the input string itself, no matter how that works. So its deligating the string transformation to the other lower level of functions, the
// oneWord and the upperFirstWord.
// The tranformer function is the Higher-order function as it operates at a higher level of abstruction, leaving the lower level details to the lower level
// functions.
// Abstraction allows us to create the Higher-order logic as above.
// My task: write my own example of Higher-order function using something I see in the real world using the same concept.
// Within the built-in functions i.e. for-each method, these Callback functions are so important as we use them to tell these function what they should
// so. The high5 is the lower level function with lowwer level of Abstraction.

*/

/**************************************************************************************************************************************************** 

131. Functions Returning Functions

Create a function that returns a new function.


****************************************************************************************************************************************************/

/*

// Return a new function value that has a parameter - will be able to receive arguments.
const greet = function(greeting) {
    return function(name) {
        // Will logout the greeting and the name of the person we pass into this function
        console.log(`${greeting} ${name}`);
    }
}

// Use the greeting function by passing-in a string Hey which is the greeting. The result of this function call will be the greet function.
// Store it in a variable named greeterHey which is a function now that's the function that is being returned with the template litral.
// So we can call the greeterHey function just as if it was any other function we define ourselves.
const greeterHey = greet('Hey');
// Call the greeterHey function with an argument of a name.
// The greeterHey is esstentally the return function.
// This works due to closures.
greeterHey('Jonas'); //  Hey Jonas
greeterHey('Steven'); // Hey Steven

// The first function greet returned a new function that we stored into a new variable named greeterHey which makes it a function that we can call after
// using the parenthesis syntax with an argument. We can do this all in one job which will make it a function so we can immediately call it.
greet('Hello')('Jonas'); // Hello Jonas

// Functions returning other functions will be useful if we are using programming paragdigm called functional programming.

// Rewrite the greet function using only Arrow Functions - only one line of code which returns something:
// Don't need the braces or the return statement.
// Takes greeting as an argument. Going to return a new function.
// It's simply one arrow function returning another arrow function.
// This is a shorter way of writing the greet function but more confusing than the more traditional way above.
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// Call it with a message.
greetArr('Hi 你好')('I\'m Vanessa'); // Hi 你好 I'm Vanessa

*/


/**************************************************************************************************************************************************** 

133. The Bind Method:

This method also allows us to manually set the 'this' keyword (a special variable) for any function call. The difference is that 'bind' do not immediately
call the function instead it returns a new function where 'this' keyword is bound. So it sets whatever value we pass into bind.

We continue to use the aireline example from previous lecture and now we need to use the book function for EuroWings all the time


****************************************************************************************************************************************************/

///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  
  // Does NOT work
  // book(23, 'Sarah Williams');
  
  // Call method
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  
  book.call(lufthansa, 239, 'Mary Cooper');
  console.log(lufthansa);
  
  const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
  };
  
  book.call(swiss, 583, 'Mary Cooper');
  
  // Apply method
  const flightData = [583, 'George Cooper'];
  book.apply(swiss, flightData);
  console.log(swiss);
  
  book.call(swiss, ...flightData);
  


// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings); //
// Creating one booking function for each of the airlines. Define the 'this' keyword once then we can use these functions.
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// This will not call the book function, instead it will return a new function  where this keyword will always be set to Eurowings.
// Now use this function: pass-in the flight number, name, 
bookEW(23, 'Steven Williams'); // this already has the 'this' keyword set

// In the call method, we can pass multiple arguments here besides the 'this' keyword (eurowings). So in the bind method we can do the same.
// then all the arguments also be set in stone. So they will be defined and the function will then always be called with these same arguments.
// Example, we could use bind for one specific airline and a specific flight number.
// The number was already preset here in the bind method.
// Specifing parts of the arguments beforehand is a common pattern called partial Application which means a part of the arguments of the original function are already
// applied / already set - the book function but with 23 already defined.
const bookEW23 = book.bind(eurowings, 23);

// Book a flight for myself. Then book a flight for my Mum.
// This allows us to set in stone certain arguments so the bookEW23 function - the resulting function becomes even simpler. So all we need to pass-in is
// the passenger name. Everything else happens automatically.
bookEW23('Vanessa Tsang'); // Vanessa Tsang booked a seat on Eurowings flight EW23
bookEW23('Mrs Tsang'); // Mrs Tsang booked a seat on Eurowings flight EW23

// We can use the bind method when we use objects togehter with event listeners.
// Add new property but only to the lufthansa object, set it to 300, this company has 300 plans.
// new method only to the lufthansa object - to buy a new plane.
// We want to add a new plane when user clicks the Buy new plane button.
// Log the 'this' keyword to the console. Attach the Event Listener to the button element. The button has the class: buy
// The addEventListener higher-order function receives a callback function.
// The function buyPlanes takes the current number of planes and increase it by one: this.planes++
// In an eventHandler function, the 'this' keyword always points to the element on which that handler is attached to. So the 'this' keyword is set dynamically.
// That element is: lufthansa.buyplane which is the Callback funtion. Bind will return a new function so we use bind with the callback function. So the 'this'
// keyword is lufthansa so that is what we define. When the button element gets clicked on, we should see the lufthansa object in the console.
lufthansa.planes = 300;
lufthansa.buyPlanes = function() {
    console.log(this); // this points to lufthansa object.

    this.planes++;
    console.log(this.planes);
};
// the lufthansa object will get logout in the console when the button element gets clicked. The number of planes will increase each time User clicks onto the
// plane button element in the UI. So the 
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa)); // will point to the lufthansa object due to the bind method used here.

// Partial Application: we can preset parameters:
// Another use case for the bind method. This time not interested in the this keyword but still use bind.
// General function for adding tax. Use decimal numbers: 0.1 for 10%. This tax we use all the time so we need a function for that.
// Can use the bind function on the addTax function and Preset the rate always to 23%. So we have a function for only the VAT for whatever value we pass into it.
// We use null as we not using the this keyword and nothing will happen to it and its standard to use null. Then set the rate value, i.e. 23%
// Now its set, we can use that. Since we want to preset the rate, the order of the arguments are important.
// Using bind gives us a new function. It's as if we returnd a new specific function from the addTax function.

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// same as this:
// addVAT = value => + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge: return a new function from another function. Another way of doing the above.
// The new function is the one that takes in the value.
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


/**************************************************************************************************************************************************** 


136. Closures:

A feature that happens behind the sensces.
Brings together the concepts - the Execution Content, the Call Stack, and the Scope Chain in a magical way.
Not a feature that we explicitly use, so we don't create them manually like we create a new array or a function.
It happens automatically in certain situations, we just need to recognise those situations. We will create one of those situation and take a look
at a Closure.

****************************************************************************************************************************************************/

// The secureBooking function will create the Closure.
// The passengerCount variable cannot be accessed from the outside of this scope.
// The secureBooking function will return a new function that will update the passengerCount variable, the variable that is defined in the parent function:
// secureBooking. Then log the new passengerCount to the console.
// Call the secureBooking function, store the results in a variable named booker. So now booker become a function as well. 
// First the Global Scope contains the secureBooking. Then secureBooking is executed. A new execution context is put on top of the execution stack.
// Each execution context has a variable environment, which contains all local variables, in this case it only contains the passengerCount set to 0.
// This variable environment is also the scope of this function. passengerCount is in the local scope but has access to variables in the parent scope.
// In this case just the global scope. 

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

// A new function will be returned and stored in the booker variable. So the Global Context now also contains the booker variable. Also, now execution context
// pops off the stack and disapears. So the secureBooking function has done its job and finished exection.
const booker = secureBooking();

// Now use the booker function:
// Now we know how the booker function was created, we now call it 3 times. No need for any arguments.
// The booker function was able to increment the passengerCount to one, then two, then to three.
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// How can the booker function update the passengerCount variable that's defined in the secureBooking function that has already finished executing, no longer on
// the Stack? Still the inner function which is the booker function is still able to access the passengerCount variable that's inside of the booker function 
// that no longer exist. Closure makes this possible. The booker function exists in the Global Scope. The environment in which the function was created is no
// longer active but still the booker function still has access to the variable (passengerCount) that was present at the time that the function was created.
// A Closure makes a function  remember all the variables that existed at the function's birth place which is the secureBooking of the booker function. So
// the booker function remembers everything at its birth-place by the time it was created.
// The passengerCount variable was defined in the scope where the booker function was actually created so scope chain is actually preserved through the Closure,
// even when a scope has already been destroyed. Even when the execution context has been destroyed the variable environment keeps living Somewhere in the engine.
// Thanks to the Clourse a function does not lose connection to variables that existed at the function's birthplace.
// When executing the booker function, JS will look into the Closure to see if there is a variable there. The Clousre has priority over the scope chain.

// Take a look at the function itself in the console.
// The Closure is the variable environment of the secureBooking function that is being preserved by the Closure.
// Double brackets: its internal property that we can't access from our code.
console.dir(booker); // the arguments, the name property, Scopes internal property, Closure (secureBooking): passengerCount: 3















