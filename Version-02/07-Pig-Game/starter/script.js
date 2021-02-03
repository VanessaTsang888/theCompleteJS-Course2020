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
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Switching Players. Player 0 always starts first:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


// Starting conditions:
// Now use the variable to do something on them, multiple times throughout the app. We define them once at the top of file only.
// Set the initial conditions of score 0 element, use text content, set to 0.
// We set 0 as Number but JS will auto set them to Strings.
score0El.textContent = 0;
score1El.textContent = 0;
// Create a hidden class and add it at the begining of the game.
diceEl.classList.add('hidden');

// store total scores for both players in an array (zero based).
const scores = [0, 0];

// Persist the value of the current score, needs to keep existing outside in the main program, no inside of the btnRoll function:
let currentScore = 0;
// set to player 1 if that is the active player.
let activePlayer = 0;
// When game finishes, disable the 2 buttons so user cannot use them. Will be a Boolean value as at the begining of game, we are playing, so playing is true.
// Then at the end of game, we set playing to false.
let playing = true;

// Function to switch player:
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // set the current score to 0 for the next player.
    currentScore = 0;
    // Will remove the class if its there, if not it will add it. Toggle will ensure its only on one of the element at one time.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

/************************************************************************************************************************************************ 
 * 
83. Rolling the Dice:

Rolling dice functionality:
Implement the Roll Dice functionality, we want the dice to be visible. Then remove that class from the dice.
We want to react to clicking that roll button > select that button element and then add an event handler.
 
 ************************************************************************************************************************************************/

// Select all 3 buttons (new, roll, hold) - see above variables.
btnRoll.addEventListener('click', function() {
    // playing is already a Boolean variable so we don't need tocheck the condition here.
    if (playing) {
    // 1. Generating a random dice roll. Not a global variable as we want to generate a new number everytime the dice is rolled. Define that variable here.
    // Generate a random number between 0-1 and multiple by 6, truc it so its a whole number, then add 1 to elevate that from 5 to 6.
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. Display dice (will be a number between 1 and 6) . Remove the hidden class.
    // Manipulate the scr attribute (in the HTML) from our JS to display the image according to the rolled number. Use the src property.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player.
    // keep adding the rolled dice number to the current score - if the number is NOT a 1.
    // We need a way to save the current score somewhere in the DOM. Display the current score and store in the variable. define this variable.
    if(dice !== 1) {
    // Add current dice to current score:   
    // currentScore = currentScore + dice;
    // Display the score on the current Player.
     currentScore+= dice;
     // Select the score element dynamically based in which based on whcih is the active player at that moment.
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;   

    // incase the rolled number is a 1. Switch to the next Player. Change value from 0 to 1 or the other way round using the Ternary operator.
    // if the active player is 0 then we want the new active player to be 1, else it should be 0. So if active player is 0, then the result is 1.
    // if condition is false / the active player is 1, then the active player will become 0. So the condition allows us to switch from player 0 to player 1.
    // set the text conten back to 0.

    } else {
        switchPlayer();
    }
}
});

/************************************************************************************************************************************************ 

84. Switching the Active Player:

See above code - the else block. When ever the active Player rolls a 1, it will enter the else block. Make this work for both player 0 and player 1.
So we need to keep track of which player is the current player. track of Which player is the ative player at the moment that the dice was rolled.

See my code above.

***********************************************************************************************************************************************/


/************************************************************************************************************************************************ 

85. Holding Current Score:

To implement the functionality of holding the score, which happens when the user clicks on that button to hold the score. We want to add the current
score to the total score. Then switch player, which only happens when the score is below 100, as when the current score is at least 100, then that
current player wins.
The button we need to target is the variable named: btnHold.

***********************************************************************************************************************************************/

btnHold.addEventListener('click', function() {
    if(playing) {
    // 1. Add current score to active player's score. Define the current player score. The scores variable is the scores array which at the same time holds the score of player 0 and player 1.
    // Now we can use the activePlayer variable to get the correct score of the current player.
    // scores at the position of activePlayer will be equal that score plus the current score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    // display it:
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


// 2. Chehck if player's score is >= 100. If so, then finish the game.
    if (scores[activePlayer] >= 20) {
    // Finish the game, assign a player winner class.
    // When we using querySelector, we need to use a class which is the period or dot: .player--
    // Winner class: create a variable that holds the Winner state: when the game has finished user can no longer click any of the 2 buttons: ROLL DICE, and HOLD.
    // At the end of the game, Set the playing to false.
        playing = false;
        // add the hidden class back on:
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
    // 3. Switch to the next player.
    switchPlayer();
    }
}
});


/************************************************************************************************************************************************ 
***********************************************************************************************************************************************/
