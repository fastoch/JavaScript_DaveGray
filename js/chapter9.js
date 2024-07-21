// Ternary operator

// syntax:
// condition ? ifTrue run this : ifFalse run that;

let soup = "chicken noodle soup";
let response = soup? `Here's your order of ${soup}.` : "Sorry, we're out of soup.";
console.log(response);

// we can chain ternary operators:
let temperature = 25;
let weather = temperature > 20? "warm" : temperature < 10? "cold" : "moderate";
console.log(`The weather is ${weather}.`);

// another example:
let score = 85;
let myGrade = score >= 90? "A" 
: score >= 80? "B"
: score >= 70? "C"
: score >= 60? "D"
: "F";
console.log(`Your grade is ${myGrade}.`);