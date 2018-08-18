var Word = require("./word");
var RandomWord = require("./game");
var inquirer = require("inquirer");
var guessesWrong = 0;
var pastGuesses = [];

var MyWord = new Word();
var newWord = RandomWord.getRandomWord();
MyWord.setWord(newWord);

function playGame() {
    console.log("guesses wrong: " + guessesWrong + "\n");
    if ((guessesWrong < 8) && (!MyWord.isComplete())) {
        inquirer.prompt([{
            type: "string",
            message: "Enter a letter",
            name: "letter"
        }]).then(function(answers) {
            MyWord.addLetter(answers.letter);
            if (!MyWord.isCorrectGuess(answers.letter)) {
                if (pastGuesses.indexOf(answers.letter) === -1) {
                    guessesWrong++;
                    pastGuesses.push(answers.letter);
                }
            }
            MyWord.displayWord();
            playGame();
        });
    } else {
        if (MyWord.isComplete()) {
            console.log("you win");
        } else {
            console.log("game over");
        }
        guessesWrong = 0;
    }
}

playGame();