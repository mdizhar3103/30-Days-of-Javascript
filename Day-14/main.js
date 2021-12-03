// Using the AMD format with RequireJS
// https://requirejs.org/
// npm install requirejs --save

// defining player module
// putting empty array means it doesn't depend on other modules
define([], function () {
  var playerName = "";

  function logPlayer() {
    console.log("The current player is " + playerName + ".");
  }

  function setName(newName) {
    playerName = newName;
  }

  function getName() {
    return playerName;
  }

  // exposing to public API - add the return statement
  return {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName,
  };
});

// =============================================================
//                      Dependent modules
// =============================================================

// in game.js

// game.js depeneds on player.js and scoreboard.js
define(["./player", "./scoreboard"], function (player, scoreboard) {
  // private members
  var factorElement = document.getElementById("factor");
  var problemsPerGame = 3; // set default value

  function printGame() {
    player.logPlayer();

    // determine the number of problems to show
    setProblemCount(document.getElementById("problemCount").value);

    // create the html for the current game
    var gameForm = "";
    for (var i = 1; i <= problemsPerGame; i++) {
      gameForm += '<div class="form-group">';
      gameForm +=
        '<label for="answer' + i + '" class="col-sm-2 control-label">';
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
      name: player.getName(),
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

  // public members
  return {
    printGame: printGame,
    calculateScore: calculateScore,
    setProblemCount: setProblemCount,
    getProblemCount: getProblemCount,
  };
});

// =====================================================
//                  Using CommonJS
// =====================================================
// npm install systemjs --save

// player.js

var playerName = "";

function logPlayer() {
  console.log("The current player is " + playerName + ".");
}

function setName(newName) {
  playerName = newName;
}

function getName() {
  return playerName;
}

// exposing to public API - add the return statement

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;

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

module.exports = {
  addResult: addResult,
  updateScoreboard: updateScoreboard,
};

// ------------------------------------

// player.js

var player = require("./player.js");
var scoreboard = require("./scoreboard.js");

// private members
var factorElement = document.getElementById("factor");
var problemsPerGame = 3; // set default value

function printGame() {
  player.logPlayer();

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
    name: player.getName(),
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

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;

// --------------------
// app.js

var player = require('./player.js');
var game = require('./game.js');

console.log("Loading with systemjs");

// add click handler to the start game button
document.getElementById("startGame").addEventListener("click", function () {
  player.setName(document.getElementById("playername").value);
  game.printGame();
});

// add click handler to the calculate score button
document.getElementById("calculate").addEventListener("click", function () {
  game.calculateScore();
});

// set the default number of problems
document.getElementById("problemCount").value = game.getProblemCount();


// -------------
// index.html

<script src="node_modules/systemjs/dist/system.js"></script>
<script>
    System.config({
        meta: {
            format: 'cjs'
        }
    });
    System.import('js/app.js');
</script>   // cjs- commonjs


// run the server
// npm start
