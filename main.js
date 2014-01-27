$(document).ready(function() {
  var randomnumber = Math.floor(Math.random()*11);
  var x = prompt("Pick a number between 1 and 10.");
  
  function getGuess() {
    $("#submit").click(game);
    $("guess").keydown(function() {
      // some code
    })
  };

  getGuess();

  function game() {
    var number = function(x) {
      if (randomnumber == x)
        console.log("Amazing! Are you cheating ;)"); 
      else if (randomnumber > x)
        console.log("Too hot!");
      else if (randomnumber < x)
        console.log("Too cold!");
      else
        console.log("Please enter a number between 1 and 10.");
    };
  };

  function newGame() {
    // some code
  }

})





// set the variables
// get the guess
// start the game
// new game

