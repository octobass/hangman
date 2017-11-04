// Still a lot of work to do...
var inquirer = require("inquirer");

var charArray = ["J", "u", "r", "a", "s", "s", "i", "c", "P", "a", "r", "k"];
var array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
var guesses = 15;

function game() {
inquirer.prompt([
  {
    type: "input",
    name: "action",
    message: "Guess a letter!"
  }]).then(function(user) {
    if (guesses > 0) {
      for (var i = 0; i < charArray.length; i++) {
        if (user.action === charArray[i]) {
          array[i] = charArray[i];
          guesses--;
        }
      }
      console.log(guesses + " guesses remaining!")
      console.log(array)
      game();
    }
    else {
      console.log(guesses + " guesses remaining!")
      console.log(array)
      console.log("Game over!")
    }
  });
}

game();