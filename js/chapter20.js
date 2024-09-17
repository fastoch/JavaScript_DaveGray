// HANDLING ERRORS
/*
JavaScript is a little too forgiving.
*/

"use strict"; // enabling strict mode to enforce some syntaxic rules
const variable = "Dave";
console.log(variable);

const makeError = () => {
  try {
    throw new Error("This is a custom error!");
  } catch(err) {
    console.error(err.name); // Error
    console.error(err.message); // This is a custom error!
    console.error(err.stack); // both error name & error message + other details
  } finally {
    // this code will execute no matter what
  }
}
makeError();

// the catch block will only execute if there is an error during the execution of the try block
// so, if no error during the try block execution, we go straight to the finally block execution
// but if an error occurs during the try block exec, the catch block will execute, and then the finally block will execute
// and if an error occurs during the try block exec, any code that remains in the try block will not execute