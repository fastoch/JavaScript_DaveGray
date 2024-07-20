// Ternary operator

// syntax:
// condition ? ifTrue run this : ifFalse run that;

let question = "Is it raining outside?";
let response = yes ? "Take your umbrella." : "No need for an umbrella.";
console.log(response);

// we can chain ternary operators:
let temperature = 25;
let weather = temperature > 20? "warm" : temperature < 10? "cold" : "moderate";
console.log(`The weather is ${weather}.`);
