'use strict';

/************************************************************************************************************************************************ 

82. Project 3: Pig Game:
This game is on a live website: pig-game-v2.netlify.app

A practice project to reinforce all skills learnt so far. 

How The Game Works?

2 Players so can play with a friend. The starting player is Player One.

First player to reach 100 points wins the game.
Each player can roll the dice as many times as they like to get as many points as possible. However, if they roll a 1, then all his current
score will go back to 0, and its the other players turn to roll the dice. Each player can choose to hold his score once he feels he has collected
enough points in his current score and don't wish to risk loosing them all by rolling a 1.
Keep going until a player reaches 100 point to win the game. Any user can reset the game by clicking on the New Game button.

The flow chart (diagrams.net):
I've create a screen shot of it and put into the project folder.
Its a representation of everything that can happen in the app.

Developing the App:
At the start we don't see the dice or any scores and both Current scores are on 0.


************************************************************************************************************************************************/


// 1. Put the scores to 0 and make the dice disappear - the starting condition.
// We need to the class names and the id's from the HTML file to identify and select the elements.
// In the HTML file, "player--0" is Player 1, and "player--1" is Player 2.
// HTML > p tags > main tag > section tag > the scores are stored in here. Each player has their own section tag.
// Each Player has same score class but different id. So, we need to select the element using their unque id (i.e. #score) NOT its class name.
// hash is the selector for the "id". There is 2 ways to select an id. They both work the same way but the getElementById works a little faster, but this
// is only relevant if I'm selecting many elements at once. The score0El is a DOM element.
// Selecting Elements:
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions:
// Now use the variable to do something on them, multiple times throughout the app. We define them once at the top of file only.
// Set the initial conditions of score 0 element, use text content, set to 0.
// We set 0 as Number but JS will auto set them to Strings.
score0El.textContent = 0;
score1El.textContent = 0;
// Create a hidden class and add it at the begining of the game.
diceEl.classList.add('hidden');

// Rolling dice functionality:
// Implement the Roll Dice functionality, we want the dice to be visible. Then remove that class from the dice.
// We want to react to clicking that roll button > select that button element and then add an event handler.
// Select all 3 buttons (new, roll, hold) - see above variables.
btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll. Not a global variable as we want to generate a new number everytime the dice is rolled. Define that variable here.
    // Generate a random number between 0-1 and multiple by 6, truc it so its a whole number, then add 1 to elevate that from 5 to 6.
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);


    // 2. Display dice (will be a number between 1 and 6) . Remove the hidden class.
    // Manipulate the scr attribute (in the HTML) from our JS to display the image according to the rolled number. Use the src property.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player.
    // keep adding the rolled dice number to the current score - if the number is NOT a 1.
    if(dice !== 1) {


// incase the rolled number is a 1.
    } else {

    }


});







