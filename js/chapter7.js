// if statements

let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

// checking if customer is banned
if (customerIsBanned) {
    reply = "Sorry, you're banned from ordering.";
// checking if soup is defined and not null
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);

// Another example of if statement

let testScore = 85;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}
console.log(`Your grade is ${grade}.`);

// now a classic exercise: chifoumi game
let playerChoice;
let computerChoice;

print("Choose rock, paper, or scissors: ");
playerChoice = input().toLowerCase();

if (playerChoice !== "rock" && playerChoice!== "paper" && playerChoice!== "scissors") {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return;
}

if (playerChoice === computerChoice) {
    console.log("It's a tie!");
} else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
}
