$(document).ready(function() {
  var randomnumber = Math.floor(Math.random()*101);
  
  $("#submit").click(game); 
  $("#guess").keydown(function(e) {
      e.preventDefault(); 
       if (e.which == 13) {
            game();
       }
    });

  function game() {
    var x = $("#guess").val();
    if (randomnumber == x) {
      $("#feedback").text("You guessed right! Are you cheating ;)"); }
    else if (randomnumber > x) {
      $("#feedback").text("Too hot my friend!"); }
    else if (randomnumber < x) {
      $("#feedback").text("Too cold my friend!"); }
    else {
      $("#feedback").text("Please enter a number between 1 and 100."); }
  }
  
  $("#button").click(function() {
    randomnumber = Math.floor(Math.random()*101);
    var x = document.getElementById('guess').value = "";
    $("#feedback").text("");
  });
    
  
  $("#cheat").click(function() {
    $("#feedback").text(randomnumber);
  });


});




// Hey Mike, it looks like you already have a a p#feedback.  So all you would have to do is instead of doing a console.log of Too Hot, Too Cold, or Amazing! you would simply update the text of that feedback element.

// It looks like you are mixing your Javascript and jQuery, you are using jQuery to create your event bindings:

// $("#cheat").click(function() {
//     console.log(randomnumber);
// });

// But then you are using Javascript to get the value of the input:

// var x = document.getElementById("guess").value;

// You could easily use jQuery to get the value of that input with this:

// var x = $("#guess").val();

// So to circle back to changing the text of an element, checkout jQuery's .text() function.  I think you'll find that helpful.

// I have a couple of suggestions for your code, this section seems a bit clunky:

//   function getGuess() {
//     $("#submit").click(function() {
//       game();
//     });
//     $("#guess").keydown(function(e){
//       if(e.which == 13) {
//         game();
//       }
//     });
//   }

//   getGuess();

// I would do away with the function getGuess()  and the call to it as it doesn't need to be a function.  You could trim it down to:

// $("#submit").click(game); // This can take an anon function, or a function name
// $("#guess").keydown(function(e) {
//     e.preventDefault(); // Notice that I added this
//    if (e.which == 13) {
//         game();
//    }
// });

// The other suggestion I have, in your game function you have an if, elseif, elseif, else block.  It's good practice to always include your opening and closing curly brackets.  If you have a logic block that only executes a single line, it's possible to leave off the curly brackets, but it's a bad habit and can lead to some logic errors.  Take for example you had something like:

// var bankAccount = 50;
// var withdrawal= 25;

// var newAmount = bankAccount - withdrawal;

// if (newAmount < 0)
//     userMessage("You've overdrawn your account");
//     newAmount -= 10; // Overdraft fee

// This is a simple example, but first we check to see if the newAmount is less than zero.  Now, without the curly brackets.  Only the first line after the conditional will be executed if it is true, so in this case our new amount is +25 which is greater than zero so the first line after the conditional is ignored.  But the newAmount -= 10; will be executed.  So even though the user did not overdraw their account, due to the logical error they are still being charged an overdraft fee.  If you wrap both of those lines with the curly bracket, like: 

// if (newAmount < 0) {
//     userMessage("You've overdrawn your account");
//     newAmount -= 10; // Overdraft fee
// }

// Now, the user will only be charged an overdraft fee if the newAmount is less than zero.

// Let me know if you have any questions.﻿
