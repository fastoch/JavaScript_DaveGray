// if statements

// Example 1
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

// Example 2
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
if (player1 === computer) {
    // tie game!
} else if (player1 === "rock") {
    if (computer === "paper") {
        // computer wins!
    } else {
        // player 1 wins!
    } 
} else if (player1 === "paper") {
    if (computer === "scissors") {
        // computer wins!
    } else {
        // player 1 wins!
    } 
} else if (player1 === "scissors") {
    if (computer === "rock") {
        // computer wins!
    } else {
        // player 1 wins!
    } 
} else {
    console.log("Invalid input. Please enter rock, paper, or scissors.");
}
