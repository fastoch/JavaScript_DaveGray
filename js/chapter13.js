// FUNCTIONS

// Methods are built-in functions 

// When we declare a function, we make our own reusable code blocks.

// Example #1
function sum(a, b) {
  return a + b;
}

// then, we call the function to log its return value to the console
console.log(sum(2, 6)); 

// Example #2
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf('@'));
}

// then, we call (or invoke) the function 
console.log(getUserNameFromEmail('john.doe@example.com'));


// ANONYMOUS FUNCTIONS
// if you don't provide a name for your function, it is an anonymous function

// you can assign that anonymous function to a variable 
const getDomainFromEmail = function(email) {
  return email.slice(email.indexOf('@') + 1);
};

// and then call the function by using the variable
console.log(getDomainFromEmail('john.doe@example.com'));

// anonymous functions are useful when you need to call functions based on events on a webpage, 
// or when you need to pass a function as an argument to another function


// ARROW FUNCTIONS
// simply remove the word 'function' and put an arrow => after the parentheses that contain the parameters
// normal function declaration: function sum(a, b) { return a + b; }
// arrow function declaration: (a, b) => { return a + b; }

const toProperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(toProperCase('heLLo WorLd!'));