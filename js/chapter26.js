// Fetch / Async / Await

/* 
Fetch API requires a discussion of:
- Callbacks
- Promises 
- Thenables
- Async/Await
*/

// Callbacks are just functions that are passed to other functions as parameters

// syntax:
function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// Callback functions allow us to call a function that in turn will call another function
// It essentially triggers a chain of events that can become what we call "callback hell"

// Here's an example of why mutliplying callbacks can become a problem



// Promises are designed to get rid of this "callback hell" issue
