// Your first interactive game
let playGame = confirm('Shall we play rock, paper, scissors?');
if (playGame) {
  let playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
  if (playerChoice) {
    formattedChoice = playerChoice.trim().toLowerCase();
    formattedChoice === "rock" || formattedChoice === "paper" || formattedChoice === "scissors" ? 
    
    : alert('Invalid choice. Please enter rock, paper, or scissors.');
  } else {
    alert('I guess you changed your mind. Maybe another time...');
  }
} else {
  alert('Ok, maybe next time!');
}
