/*### Number guessing game!
  * Create a file called `number-guessing-game.js`.
  * In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
  * Instead of using `prompt` and `alert`, you will have to use capabilities from NodeJS and any external module.
  **HINT**: there is an npm library called `prompt` that can help you with that :)
  * Save/commit/push
  */
  var prompt = require('prompt');
  var randomNum = Math.floor(Math.random() * 100);
  var c= 0;
  function guessNum() {
      c++;
    //   console.log(randomNum);
      console.log("Guess a number between 1 and 100");
      prompt.get(['number'],function(err, result) {
      if(err) {
          console.log("Error!");
      }
      else {
      var number = parseInt(result.number);
          if (number < randomNum ){
              console.log("Try a higher number");
               guessNum();
          }
          else if(number > randomNum) {
              console.log("Try a lower number");
               guessNum();
          }
          else if(number === randomNum) {
              console.log(`You guessed correctly in ${c} tries.`)
          }
          else {
              console.log("That is not a number");
               guessNum();
          }
      }
      
  });
}

guessNum();