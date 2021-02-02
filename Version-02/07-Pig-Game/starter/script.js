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
// Each Player has same score class but different id. So, we need to select the element using their unque id NOT its class name.
