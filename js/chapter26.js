// Fetch / Async / Await

/* 
Fetch API requires a discussion of:
- Callbacks
- Promises 
- Thenables
- Async/Await
*/


// CALLBACKS are just functions that are passed to other functions as parameters

// syntax:
function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// Callback functions allow us to call a function that in turn will call another function
// It essentially triggers a chain of events that can quickly become "callback hell"

firstFunction(param, function() {
  // do stuff
  secondFunction(param, function() {
    // do stuff
    thirdFunction(param, function() {

    });
  });
});

// The above structure makes your code hard to read and understand

/* 
PROMISES are designed to get rid of this "callback hell" issue
Nowadays, we don't use callbacks anymore, but you probably could find callbacks 
in some legacy code written before promises existed.
*/

// Promises can have 3 states: Pending, Fulfilled, Rejected
/*
Promises deliver ASYNC code (asynchronous).
While JavaScript is usually SYNCHRONOUS, meaning doing one thing at a time.


*/

