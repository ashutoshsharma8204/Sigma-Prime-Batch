// Simple Project - Guess Favourite Movie

const favMovie = "GOT";
let userGuess = prompt("Guess my favourite movie:");

while((userGuess != favMovie)){
  if(userGuess == 'quit'){
    console.log("You chose to quit the game.");
    break;
  }
  userGuess = prompt("Wrong guess! Try again or type 'quit' to exit:");
}
if(userGuess == favMovie){
  console.log("Congratulations! You guessed it right.");
}  