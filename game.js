var exports = module.exports = {};

var wordList = ["Maleficent", "Ursula", "Chernabog", "Scar", "Lady Tremaine", "Captain Hook", "Cruella de Vil", "Jafar", "Gaston", "Oogie Boogie", "Queen of Hearts", "Evil Queen", ];

module.exports.getRandomWord = function () {
	var index = parseInt(Math.random() * (wordList.length));
	return wordList[index];
}