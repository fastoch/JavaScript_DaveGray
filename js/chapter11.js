// Your first interactive game
let playGame = confirm('Shall we play rock, paper, scissors?');
if (playGame) {
  let playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1); // random number from 1 to 3
      let computer = computerChoice === 1? "rock" : computerChoice === 2? "paper" : "scissors";
      if (player === computer) {
        alert(`It\'s a tie!\nYour choice: ${player}\nComputer choice: ${computer}`);
      } else if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
        alert(`Computer wins!\nYour choice: ${player}\nComputer choice: ${computer}`);
      } else {
        alert(`You win!\nYour choice: ${player}\nComputer choice: ${computer}`);
      }

      let playAgain = confirm('Do you want to play again?');
      playAgain ? location.reload() : alert('Goodbye then!');

    } else {
      alert('Invalid choice. Please enter rock, paper, or scissors.');
    }
  } else {
    alert('I guess you changed your mind. Maybe next time...');
  }
} else {
  alert('Ok, maybe next time!');
}
