var randomnumber = Math.floor(Math.random()*11);
var x = prompt("Pick a number between 1 and 10.");
var number = function(x) {
  if (randomnumber == x)
    alert("Amazing! Are you cheating ;)"); 
  else if (randomnumber > x)
    alert("Too hot!");
  else if (randomnumber < x)
    alert("Too cold!");
  else
    alert("Please enter a number between 1 and 10.");
};

console.log(number(x));





// On page load, Javascript should pick a number at random that user will have to guess.
// The user should be prompted to enter a guess.
// The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users if they're getting "hotter" or "colder", just tell them if there previous guess was "hot" or "cold".
// For your initial version, feel free to use the built-in "prompt()" function to get user guesses, and the "alert()" function to give feedback on the user guess.
// For the final version of your project, you'll need to create an HTML-based interface for getting user inputs and giving feedback on guesses.
// Your app should ensure that users provide valid inputs. For instance, if a user submits a spaces, a blank guess, or letters, they shoudl receive feedback that they need to input a number.
// The app should feature a button that allows the user to start a new game, without making additional calls to the server
// Make sure to use version control as you're working on this project, committing early and often.