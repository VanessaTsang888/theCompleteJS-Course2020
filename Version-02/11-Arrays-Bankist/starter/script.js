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


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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
// 
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

























