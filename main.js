$(document).ready(function() {
  var randomnumber = Math.floor(Math.random()*101);
  
  function getGuess() {
    $("#submit").click(function() {
      game();
    });
    $("#guess").keydown(function(e){
      if(e.which == 13) {
        game();
      }
    });
  }

  getGuess();

  function game() {
    var x = document.getElementById("guess").value;
    if (randomnumber == x)
      console.log("Amazing! Are you cheating ;)"); 
    else if (randomnumber > x)
      console.log("Too hot!");
    else if (randomnumber < x)
      console.log("Too cold!");
    else
      console.log("Please enter a number between 1 and 100.");
  }
  
  $("#button").click(function() {
    randomnumber = Math.floor(Math.random()*101);
    var x = document.getElementById('guess').value = "";
  });
    
  
  $("#cheat").click(function() {
    console.log(randomnumber);
  });


});
