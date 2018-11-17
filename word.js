var Letter = require("./letter.js");

function Word(word) {
  this.word = word;
  this.letterArray = word.split("");
  this.letterObjectArray = [];
  this.currentGuess = [];
  this.flag = false;
  this.makeWord = function() {
    for (var i = 0; i < this.letterArray.length; i++) {
      this.letterObjectArray[i] = new Letter(this.letterArray[i]);
    }
  };
  this.showGuess = function(playerGuess) {
    var correctGuess = false;

    for (var i = 0; i < this.letterArray.length; i++) {
      correctGuess = this.letterObjectArray[i].checkGuess(playerGuess);

      this.currentGuess[i] = this.letterObjectArray[i].returnLetter();

      if (correctGuess == true) {
        this.flag = true;
      }
    }

    if (this.flag == true) {
      console.log("CORRECT!");
      console.log("CURRENT GUESS: " + this.currentGuess.join(" ") + "\n");
      this.flag = false;
      return true;
    } else {
      console.log("INCORRECT!");
      console.log("CURRENT GUESS: " + this.currentGuess.join(" ") + "\n");
      return false;
    }
  };
}

module.exports = Word;
