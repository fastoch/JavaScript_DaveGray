// Another refactored version of our chifoumi game with functions
let playGame = confirm('Shall we play rock, paper, scissors?');

// Start the game if player decides to play it. 
if (playGame) {
  while (playGame) {
    const playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
    
    if (playerChoice || playerChoice === "") {
      const player = playerChoice.trim().toLowerCase();
      
      if (player === "rock" || player === "paper" || player === "scissors") {
        const computerChoice = Math.floor(Math.random() * 3); // random number from 0 to 2
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        if (player === computer) {
          alert(`It\'s a tie!\nYour choice: ${player}\nComputer choice: ${computer}`);
        } else if (
          player === "rock" && computer === "paper" || 
          player === "paper" && computer === "scissors" || 
          player === "scissors" && computer === "rock"
        ) {
          alert(`Computer wins!\nYour choice: ${player}\nComputer choice: ${computer}`);
        } else {
          alert(`You win!\nYour choice: ${player}\nComputer choice: ${computer}`);
        }

        playGame = confirm('Do you want to play again?');
        if (!playGame) alert('Goodbye then!');
        continue;

      } else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        continue; // restart the while loop at line 6
      }

    } else {
      alert('I guess you changed your mind. Maybe next time...');
      break; // exit the game loop if player clicks Cancel button when prompted to enter a choice
    }
  }

} else {
  alert('Ok, maybe next time!');
}
