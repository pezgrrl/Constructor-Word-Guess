var Word = require("./word.js");

var inquirer = require("inquirer");

var alreadyGuessed = false;
var chosenWord;
var guessesLeft = 10;
var guessedLetters = ["You have guessed:"];
var rightGuess = false;
var playerGuess;
var won = false;
var wordList = [
  "maleficent",
  "ursula",
  "chernabog",
  "scar",
  "lady tremaine",
  "captain hook",
  "cruella de vil",
  "jafar",
  "gaston",
  "oogie boogie",
  "queen of hearts",
  "evil queen"
];
var wordMatches = true;

runGame();

function runGame() {
  console.log("Guess The Disney Villain");

  var word = wordList[Math.floor(Math.random() * wordList.length)];

  chosenWord = new Word(word);
  chosenWord.makeWord();

  var blankWord = [];
  for (var i = 0; i < chosenWord.letterArray.length; i++) {
    if (chosenWord.letterArray[i] == " ") {
      blankWord.push(" ");
    } else {
      blankWord.push("_");
    }
  }
  console.log(blankWord.join(" ") + "\n");

  promptUser();
}

function promptUser() {
  inquirer
    .prompt([
      {
        message: "Guess a letter!",
        name: "playerGuess"
      }
    ])
    .then(function(answer) {
      playerGuess = answer.playerGuess.toLowerCase();

      console.log("\nYou guessed: " + playerGuess);

      for (var i = 0; i < guessedLetters.length; i++) {
        if (playerGuess == guessedLetters[i]) {
          console.log("You've already guessed this letter!");
          alreadyGuessed = true;
          break;
        }
      }

      rightGuess = chosenWord.showGuess(playerGuess);

      if (alreadyGuessed == true) {
        alreadyGuessed = false;
      } else if (rightGuess == false) {
        guessesLeft--;
        guessedLetters.push(playerGuess);
      } else {
        guessedLetters.push(playerGuess);
        rightGuess = false;
      }

      guessedLetters = guessedLetters.sort();
      console.log(guessedLetters.join(" "));
      console.log("You have " + guessesLeft + " guesses remaining! \n");

      for (var i = 0; i < chosenWord.letterArray.length; i++) {
        if (chosenWord.currentGuess[i] != chosenWord.letterArray[i]) {
          wordMatches = false;
        }
      }

      if (wordMatches == true) {
        won = true;
        wordMatches = false;
      } else {
        wordMatches = true;
      }

      if (won == true) {
        won = false;
        console.log("YOU WON!");
        resetGame();
      } else if (guessesLeft > 0) {
        promptUser();
      } else {
        console.log("You are out of guesses! GAME OVER.");
        resetGame();
      }
    });
}

function resetGame() {
  alreadyGuessed = false;
  chosenWord;
  guessesLeft = 10;
  guessedLetters = ["You have guessed:"];
  rightGuess = false;
  playerGuess;
  won = false;
  wordMatches = true;

  inquirer
    .prompt([
      {
        message: "Continue?",
        type: "confirm",
        default: true,
        name: "keepgoing"
      }
    ])
    .then(function(answer) {
      if (answer.keepgoing == true) {
        runGame();
      } else {
        console.log("Thanks for playing");
      }
    });
}
