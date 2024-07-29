// SCOPE

// var, let, and const are keywords we use to declare variables

// from 1995 to 2015, var was the only way to declare variables in JavaScript
var x = 10;

// With the introduction of let and const, we cannot declare the same variable twice
// With let, you can reassign the value of a variable (let me reassign)
// With const, you cannot reassign the value of a variable (constant)
let y = 20;
y = 30;

const z = 40;
z = 50; // this will throw an error

// GLOBAL SCOPE

// if you define a variable outside of any function, it is a global variable.
// a global variable can be accessed from anywhere in your JavaScript code.

// more in the README.md file