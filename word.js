var Letter = require("./letter");

var Word = function() {
    this.letterGuessed = [];
    this.word = [];

    this.addLetter = function(char) {
        this.guessedLetter.push(char);
        this.wordUpdate(char);
    }
    this.createWord = function(newWord) {
        for (i = 0; i < newWord.length; i++) {
            this.word.push(new Letter(newWord.charAt(i)));
        }
    }

    this.wordUpdate = function(char) {
        for (i = 0; i < this.word.length; i++) {
            if (this.word[i].letter === char) {
                this.word[i].setToDisplay();
            }
        }
    }
    this.showWord = function() {
        var showWords = "";
        for (i = 0; i < this.word.length; i++) {
            showWords += this.word[i].getLetter() + " ";
        }

    }
    this.allDone = function() {
        for (i = 0; i < this.word.length; i++) {
            if (this.word[i].showLetter === false) {
                return false;
            }
        }
        return true;
    }

}

    this.correctGuess = function(char) {
        for (i = 0; i < this.word.length; i++) {
            if (this.word[i].letter === char) {
                return true;
            }
        }
        return false;
    }

    module.exports = Word;
