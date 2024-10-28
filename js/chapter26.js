// Fetch / Async / Await

/* 
Fetch API requires a discussion of:
- Callbacks
- Promises (replace Callbacks)
- Thenables
- Async/Await (replace Thenables)
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

// Promises can have 3 states: Pending, Fulfilled, and Rejected

/*
Promises deliver ASYNC code (asynchronous).
While JavaScript (JS) is usually SYNCHRONOUS, meaning doing one thing at a time.
A promise could be pending while some other JS code goes ahead and executes.
*/

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

console.log(myPromise); // Promise {<fulfilled>: "Promise resolved!"}
// The above show the state of the promise, not its value

// To get the value out of a promise, we need to use THENABLES
// Thenables attach callbacks for the resolution and/or rejection of the Promise

myPromise
// executes only if the Promise is fulfilled
.then(value => {
  console.log(value); // "Promise resolved!"
})
// executes only if the Promise is rejected 
.catch(err => {
  console.log(err); // "Promise rejected!"
})

// IMPORTANT: the Fetch API returns a Promise on its own, we don't have to create a new Promise

/*
When requesting data from another server, we need to wait for that data to arrive.
So we need to tell our code: "Wait for this data, and then do this after you get it."
Hence the need to use Promises, so part of our code can wait until required data allows it to execute.
*/

// One way to simulate how Fetch works is to use a timeout to delay the execution of some code
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("myNextPromise resolved after a 3s timeout!");
  }, 3000);
});

// calling myNextPromise first
myNextPromise.then(value => {
  console.log(value);
});

// calling myPromise for the second time (except this will execute before the call to myNextPromise)
myPromise.then(value => {
  console.log(value);
});

// The above example shows that JS really doesn't wait, it's not built into waiting.

// Now let's see an example of the third state of a Promise = pending



// ASYNC/AWAIT replace the Thenables 

