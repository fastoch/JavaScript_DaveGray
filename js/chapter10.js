// User input
alert("Simple alert message, returns nothing");

let myBool = confirm("OK to retrun true\nCancel to return false");
console.log(myBool); 

let myName = prompt("Please enter your name:");
// if we click the Cancel button, we get a null value
// To prevent this, we use ?? (the nullish coalescing operator)
// The nullish coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined, 
console.log(`Hello ${myName ?? "you! You didn't enter your name"}!`);
