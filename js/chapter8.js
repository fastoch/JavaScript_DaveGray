// Switch statements

let customerOrder = "burger";

switch (customerOrder) {
  case "burger":
    console.log("Here's your burger.");
    break;
  case "fries":
    console.log("Here's your fries.");
    break;
  case "soda":
    console.log("Here's your soda.");
    break;
  default:
    console.log("Sorry, we don't have that item.");
}

// chifoumi with a switch statement
let player = "paper";
let computer = "rock";

switch (player) {
  case computer:
    console.log("tie game!");
    break;
  case "rock":
    if (computer === "scissors") {
      console.log("you win!");
    } else {
      console.log("computer wins!");
    } 
    break;
  case "paper":
    if (computer === "rock") {
      console.log("you win!");
    } else {
      console.log("computer wins!");
    }
    break;
  case "scissors":
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("you win!");
    }
    break;
  default:
    console.log("Invalid input. Please enter rock, paper, or scissors.");
}
