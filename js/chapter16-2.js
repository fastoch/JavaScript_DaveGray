// Chifoumi game refactored with functions

// Declaring the initGame function 
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time");
};

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
      break; // exit the while loop (the game loop)
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue; // restart the while loop
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);

    if (askToPlayAgain()) {
      continue; // restart the while loop
    } else {
      thanksForPlaying();
      break; // exit the game
    }
  }
};

// Other functions
const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {    // exclude "" from false values
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decideNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time...");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner = 
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "paper" && computer === "scissors"
      ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
      : player === "scissors" && computer === "rock"
      ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
      : `You: ${player}\nComputer: ${computer}\nYou win!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Do you want to play again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing!");
};

// The TDZ (temporal dead zone) is a behavior in JavaScript where variables declared with let and const
// cannot be accessed before their declaration in the code. 
// And since initGame() calls playGame() which then calls all other functions, we need to invoke initGame() 
// at the end of the program, after all functions have been declared.
initGame();
