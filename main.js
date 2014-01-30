$(document).ready(function() {
  var randomnumber = Math.floor(Math.random()*101);
  
  $("#submit").click(game);
 

  function game() {
    var x = parseInt($("#guess").val(), 10);
    if (randomnumber == x) {
      $("#feedback").text("You guessed right! Are you cheating ;)").css("color", "red"); 
    } 
    else if (randomnumber < x) {
      $("#feedback").text("Too hot my friend!").css("color", "red"); 
    } 
    else if (randomnumber > x) {
      $("#feedback").text("Too cold my friend!").css("color", "blue"); 
    } 
    else {
      $("#feedback").text("Please enter a number between 1 and 100.").css("color", "blue"); 
    }
  }
  
  $("#button").click(function() {
    randomnumber = Math.floor(Math.random()*101);
    $("#feedback").text("");
  });
    
  
  $("#cheat").click(function() {
    $("#feedback").text(randomnumber).css("color", "blue");
  });


});

