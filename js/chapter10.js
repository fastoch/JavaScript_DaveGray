// User input

// aleryt text box
alert("Simple alert message, returns nothing");

// confirm box
let myBool = confirm("OK to retrun true\nCancel to return false");
console.log(myBool); 

// prompt box
let myName = prompt("Please enter your name:");
// if the user entered something, log it, otherwise log a default message
if (myName) {   
  console.log(`Hello ${myName.trim()}!`); // trim whitespace from the input
} else {       
  console.log("You didn't enter your name.");
}
