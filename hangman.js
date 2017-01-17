/*### Challenge: Hangman!
  * Create a file called `hangman.js`.
  * In this file, write a program that will let the user play hangman. The program should work as follows:
    * Choose a random word from a list of words.
    * In a loop, do the following:
      * Ask the user to guess a letter
      * If the user guessed a wrong letter, then add one step to the hangman "drawing"
      * Display the current completion of the word next to a hangman ASCII "drawing". 
      You can get some inspiration from either [here](http://www.berkeleyinternet.com/perl/node30.html) 
      or [here](http://ascii.co.uk/art/hangman)
      * Keep looping until either the word is found or the hangman is hanged!
    * Display a message to the user letting them know what happened
  * Save/commit/push*/

var prompt = require('prompt');
var words = ["chocolate", "montreal", "building", "horse", "balloon", "javascript"];
var random = Math.floor(Math.random() * 6);
var randomWord = words[random].split("");
var c = 0;
var usedLetters = [];
var correctUsedLetters = [];
var lenght = randomWord.length;
for (var i = 0; i < lenght; i++) {
    correctUsedLetters.push("");
}

function getAllIndexes(arr, val) {
    var indexes = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === val) {
            indexes.push(i);
        }
    }
    return indexes;
}

function hangmanSketch(expression) {
    switch (expression) {
        case 0:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 1:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 2:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|         |    \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 3:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|         |\\  \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 4:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|        /|\\  \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 5:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|        /|\\  \n");
            console.log("|        /     \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            break;
        case 6:
            console.log(" _________     \n");
            console.log("|         |    \n");
            console.log("|         0    \n");
            console.log("|        /|\\  \n");
            console.log("|        / \\  \n");
            console.log("|              \n");
            console.log("|              \n");
            console.log("_                ");
            console.log("He died!!!");
            break;
    }

}

function hangman() {
    console.log(randomWord);
    console.log(correctUsedLetters);
    console.log(usedLetters);
    prompt.get(['letter'], function(err, result) {

        if (err) {
            console.log("Error");
        }
        else {
            if (correctUsedLetters.join("") === randomWord.join("")) {
                console.log("You saved him with your wisdom!");
                return;

            }
            if (c === 6) {
                hangmanSketch(c++);
                return;
            }
            else if (randomWord.indexOf(result.letter) === -1) {
                hangmanSketch(c++);
                console.log("Wrong letter, be careful!");
                usedLetters.push(result.letter);

                hangman();
            }
            else if (randomWord.indexOf(result.letter) >= 0) {
                hangmanSketch(c);
                console.log("good job, guess again");
                var position = getAllIndexes(randomWord, result.letter);
                console.log(position);
                position.forEach(function(element) {
                    correctUsedLetters[element] = result.letter;
                });

                hangman();
            }


        }
    });
}


hangman();