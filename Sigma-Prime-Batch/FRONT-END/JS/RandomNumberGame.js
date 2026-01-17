const max = prompt("Enter the maximum number:");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number:");

while(true){
  if(guess == "quit"){
    console.log("User Quit");
    break;
  }
  if(guess == random){
    console.log("You are right! congrats!! The number was " + random);
    break;
  } else if (guess < random){
    guess = prompt("hint: your guess was too small. Try again:");
  } else {
    guess = prompt("hint: your guess was too large. Try again:");
  }
}