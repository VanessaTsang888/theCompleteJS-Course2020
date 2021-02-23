'use strict';

/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

*/

// This is not working as I've missed out lecture 149. Computing Usernames.
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/***************************************************************************************************************************************************** 

142. Looping Arrays with the forEach method:

Working with the forEach array method.

Out of the two versions below the forEach method is cleaner, easier to write, easier to read.
forEach method uses a Higher-order anonymous function.

**************************************************************************************************************************************************** */

// Loop over this movements array in order to print a message for each movement in this bank account.
// The positive values are deposits, the negative values are withdraws.
// Print something to the console saying whether the User deposited or withdraw some money, by using a forOfLoop.
// then compare the forEach loop to this one. Log something to console according to the movement value.
// If current movement is greater than zero then log to console "You deposited {the movement}", else You withdrew {movement} use Maths function here to
// take the absolute value - removing the sign
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// What if we need access to the counter variable in the here? Just like we can access the current index off the array in the for of loop.
// To access the counter variable in the forOf Loop:
// We loop over the movements.entries and it returns an array of arrays which in the first position it contains the current index and then the value itself.

// for(const movement of movements) {
for (const [i, movement] of movements.entries()) { 
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`); // positive numbers
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // negitive numbers
  }
}
 // Use the forEach method to achieve same thing but easier way.
 // To loop over the array we use forEach method that requires a Callback function here. forEach is a Higher-order anonymous function and requires a Callback function
 // in order to tell it what to do. So its this forEach method that will call this call this Callback function. We are not calling it ourselves.
 // The forEach loops over the array and in each iteration it will execute this Callback function and pass-in the current element of the array as an argument,
 // i.e. movement  

console.log('---- HOW THE FOR EACH METHOD WORKS ------'); 

movements.forEach(function (mov, i, arr) {
  if(mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});

// Passing-in the current element of the array. so in each iteration it will call the function with:
// 0: function(200)
// 1: function(450)
// 2: function(400)
// and so on... until it reaches the end of the array.
// The we are giving the forEach function a Callback function that contains instructions that is to logout one of the two messages.

// The forEach method is cleaner, easier to write, easier to read.
// Its a lot easier to get access to the current index within a forEach function.
// The forEach calls the Callback function in each iteration. As it calls this function it also passes-in the current element of the array. It also passes-in
// the current element, the current index and the entire array that we are looping over. So we can specify them in the parameter list.
// 9:18
// The continue and break statement will not work in the forEach as it will loop over the entire array. So if you need to break out of a loop, you need to use
// the forOf loop. Other than that its personal preference.
*/

/***************************************************************************************************************************************************** 

143. forEach Method With Maps and Sets;

How do forEach works with Maps and Set? 


**************************************************************************************************************************************************** */

// Using forEach method on the Maps data structure:
// Each inner array within this currencies array is one entry of the Map, with the key and the value.
// We can call forEach method on a Map. 

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Calling forEach on a Map, with 3 arguments: the current value in the current iteration, the key, and the entire map that is being looped over.
// Argument 1. the value is the current element of the array. Argument 2. the index. Argument 3. the entire array.
// The arguments in the function are similar to the one in the forEach on an array, the previous lecture.
// Log a String show the forEach do exist in the Maps data structure.
// In the console we got the key and the value for each inner array.

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // USD: United States dollar | EUR: Euro | GBP: Pound sterling
})


// Using forEach method on the Set data structure:
// Inside the Set, pass-in an iterable, i.e. a set of strings.
// 

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// Will only logout the unique values.
console.log(currenciesUnique);

// Call forEach on this Set.
// The Callback function has the parameters of value, key and maps.
// The key is exactly the same as the value as a Set don't have keys or indexes either. So there is No Value that makes sense for the key.
// We keep the same 3 parameters in the Callback function but set the second parameter to the first parameter by replace the value with an underscore.
// In JS the underscore used like this means a throw-away variable as its just a convention.

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // USD: USD | GBP: GBP | EUR: EUR
});
*/


/***************************************************************************************************************************************************** 

147. Data Transformation: Map, Filter, Reduce:

There are 3 important array methods we use to perform Data Transformations. These are methods that we use to create new arrays based on transforming
data from other arrays.

The Tools are: Map, Filter and Reduce. These are 3 array methods.

1. Map returns a new array containing the results of applying an operation (Callback function) on all original array elements:

  current * 2

2. Filter returns a new array containing the array elements that passed a specified test condition, i.e. if the current element is greater than 2, then
this will result in true and the element will get passed into the new array that is the filtered array:

  current > 2

3. Reduce boils (reduces) all array elements down to one single value e.g. adding all elements together in that array, i.e: we have a variable named:
acc (for Accumulator), as this method loops over the array it keeps adding the current element onto the accumulator until at the end of the loop we
have the total sum of all the elements. This is like a snow ball that keeps getting bigger and bigger as it rolls down the hill:

  acc + current

We say this whole process has reduced the original array to one single value and the reduced value in our case is 13. This value gets returned from the Reduce
method in the end. So no new array in this case but only the reduced value.

**************************************************************************************************************************************************** */


/***************************************************************************************************************************************************** 

148.The Map Method:


 Using the Map data transformation method in practice.
 A way to loop over arrays but unlike forEach, the map method will give us a brand new array with the new elements that can be stored somewhere. 0:23
 

**************************************************************************************************************************************************** */
/*

// The fundamentals of how the map method works:

// Functional Programming: modern JS:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// the original array
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// the new array with the new elements of the returned results.
// console.log(movementsUSD); // (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]


// The same but using the forOf Loop:
// We loop over one array and then manually create a new one.
const movementsUSDfor = [];
for (const mov of movements) movementsUSD.push(mov * eurToUsd);
console.log(movementsUSDfor);

// Same as the map method but using Arrow Function:
// Some people say: cleaner but bad readability makes difficult to understand.
const movementsUSD = movements.map(mov => mov * eurToUsd);

// Use the map method to loop aagain over the movements array, but create a string similar to the one step we printed to the console earlier but using forEach.
// Return the string so it gets put in the new array that results from the map method.
// Store the result in a new variable named: movementsDescriptions

const movementsDescriptions = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);  

console.log(movementsDescriptions);

// With the map method we just return each of the stings from the Callback (got added into a new array). Then we logged that entire array to the console and
// not the elements one by one. We did not create a side affect in each of the iteration. We just built a new array.

*/

/***************************************************************************************************************************************************** 

150. The Filter Method:

Used to filter elements that specify a certain condition. 
We use a Callback function to specify the conditon.
There is a big push in JS for functional programming and chaning methods together.

**************************************************************************************************************************************************** */

// movements array:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// work with the current element using the filter method.
// deposits are only the movements above 0. Only the elements that pass (true) the condition will make it into the new array.
// We can chain methods togeher, one after another.
const deposits = movements.filter(function(mov) {
  return mov > 0;
})
// test out the function:
// console.log(movements);
// Array with only the positive values.
console.log(deposits); // (5) [200, 450, 3000, 70, 1300]

// Same but using forOf Loop:
// Can't do chaning methods with forLoop.
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

// Create array for the withdrawals with a condition:
const withdrawals = movements.filter(function(mov) {
  return mov < 0;
})

// test out the function:
// Only the negative numbers remain now.
console.log(withdrawals); // (3) [-400, -650, -130]


/***************************************************************************************************************************************************** 

151. The Reduce Method:
To boil-down all the elements in an array to one single value, i.e. adding up all the numbers in an array.
The reduce method is looping throught the array and there is no need to manually code the loop i.e. using a for-loop.



**************************************************************************************************************************************************** */

// Use the movements array again, add-up both the deposit and withdrawals to get a global balance of the account.
// Call the reduce method on the movements array. The result of the reduced movement array will be the global balance of the account.
// The result is named: balance which is one single value.
// Callbacks: an accumulator (curr): a snowball that keeps accumulating the value that we ultimatly want to return
// - adding all the elements/numbers togther that will be the sum.
// current element in array (curr). then the the index then the entire array.
// The Callback fn will be called in each iteration of the array.
// Add the current value to the accumulater. In each iteration the acc will be the current sum of all the previous values.
// 0 is the intial value of the first interation.

console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   console.log(cur, i, acc);
//   return acc + cur;
// }, 0);

// Same but using Arrow Function:
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// Same but using a for-loop:
// To use for-loop we always need external variable. Using the Reduce method avoids this variable.
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// Get the Maximum value of the movements array here. Can use Reduce method.
// Reduce down to the maxiumn number.
// Loop through the arry until get to the current max which is the 3000 figure. There is no value greater than 300 so we store that number.
// The acc will keep track of the current Max value.
// If the accumulater is greater than the current value then return the accumulater. We always have to reture the acc to the next iteration. We want to 
// keep the acc at the value it already is and not change it. Change it if the value is greater than the acc.
// The initial value is movements at position 0.
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else return mov;  
}, movements[0]);
console.log(max); // 3000








