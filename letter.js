function Letter(rightLetter) {
  this.rightLetter = rightLetter;
  this.guessed = false;
  this.returnLetter = function() {
    if (this.guessed == true) {
      return rightLetter;
    } else {
      return "_";
    }
  };
  this.checkGuess = function(playerGuess) {
    if (this.guessed == true) {
      this.guessed = true;
      return false;
    } else if (rightLetter == " ") {
      this.guessed = true;
      return false;
    } else if (playerGuess == rightLetter) {
      this.guessed = true;
      return true;
    } else {
      this.guessed = false;
      return false;
    }
  };
}

module.exports = Letter;
