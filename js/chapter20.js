// HANDLING ERRORS
/*
JavaScript is a little too forgiving.
*/

"use strict"; // enabling strict mode to enforce some syntaxic rules
const variable = "Dave";
console.log(variable);

const makeError = () => {
  try {
    const name = "Dave";
    name = "John";
  } catch(err) {
    console.error("you cannot reassign constant variables"); 
  } 
}
makeError();