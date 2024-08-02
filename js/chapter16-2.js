// Chifoumi game refactored with functions
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time");
}

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue; // restart the while loop 
    }
    if (!playerChoice) {
      decideNotToPlay();
      break; // exit the while loop
    }
  }
}
