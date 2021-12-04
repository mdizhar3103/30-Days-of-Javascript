// Creating ES2015 Module

// player.js
var playerName = "";

export function logPlayer() {
  console.log("The current player is " + playerName + ".");
}

export default function setName(newName) {
  playerName = newName;
}

export function getName() {
  return playerName;
}


// ----------
// scoreboard.js

// private members
var results = [];

function addResult(newResult) {
  results.push(newResult);
}

function updateScoreboard() {
  var output = "<h2>Scoreboard</h2>";

  for (var index = 0; index < results.length; index++) {
    var result = results[index];
    output += "<h4>";
    output +=
      result.name +
      ": " +
      result.score +
      "/" +
      result.problems +
      " for factor " +
      result.factor;
    output += "</h4>";
  }

  // add the updated scoreboard to the page
  var scoresElement = document.getElementById("scores");
  scoresElement.innerHTML = output;
}

exports = { addResult, updateScoreboard };

// -----------
// game.js

import {getName as getPlayerName, logPlayer } from './player.js';
import * as scoreboard from './scoreboard.js';

// private members
var factorElement = document.getElementById("factor");
var problemsPerGame = 3; // set default value

function printGame() {
  logPlayer();

  // determine the number of problems to show
  setProblemCount(document.getElementById("problemCount").value);

  // create the html for the current game
  var gameForm = "";
  for (var i = 1; i <= problemsPerGame; i++) {
    gameForm += '<div class="form-group">';
    gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
    gameForm += factorElement.value + " x " + i + " = </label>";
    gameForm +=
      '<div class="col-sm-1"><input type="text" class="form-control" id="answer' +
      i +
      '" size="5" /></div>';
    gameForm += "</div>";
  }

  // add the new game to the page
  var gameElement = document.getElementById("game");
  gameElement.innerHTML = gameForm;

  // enable the calculate score button
  document.getElementById("calculate").removeAttribute("disabled");
}

function calculateScore() {
  var problemsInGame = getProblemCount();
  var score = 0;

  // loop through the text boxes and calculate the number that are correct
  for (var i = 1; i <= problemsInGame; i++) {
    var answer = document.getElementById("answer" + i).value;
    if (i * factorElement.value == answer) {
      score++;
    }
  }

  // create a new result object to pass to the scoreboard
  var result = {
    name: getPlayerName(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value,
  };

  // add the result and update the scoreboard
  var scoreboard = new Scoreboard();
  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  // disable the calculate score button
  document.getElementById("calculate").setAttribute("disabled", "true");
}

function setProblemCount(newProblemCount) {
  problemsPerGame = newProblemCount;
}

function getProblemCount() {
  return problemsPerGame;
}

export { printGame, calculateScore, setProblemCount, getProblemCount };


// --------------------
// app.js

import assignPlayerName from './player.js';
import { printGame, calculateScore, getProblemCount } from './game.js';

console.log("Loading with systemjs");

// add click handler to the start game button
document.getElementById("startGame").addEventListener("click", function () {
  assignPlayerName(document.getElementById("playername").value);
  printGame();
});

// add click handler to the calculate score button
document.getElementById("calculate").addEventListener("click", function () {
  calculateScore();
});

// set the default number of problems
document.getElementById("problemCount").value = getProblemCount();

