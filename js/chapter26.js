// Promises / Fetch / Async & Await

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

// calling myPromise for the second time, except this will execute before the call to myNextPromise
myPromise.then(value => {
  console.log(value);
});

// The above example shows that JS really doesn't wait, it's not built into waiting.

// Now let's see an example of the third state of a Promise = pending
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users); // shows the Promise status = Promise {<pending>}

/* we could place the above line after the following fetch function, 
and it would still show the Promise status before showing the fetcheddata
because JavaScript does not wait until the fetch Promise resolution
it executes all the code till the end of file, except if you use setTimeout()
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log(response); // ReadableStream (not JSON yet)
    return response.json(); // convert ReadableStream to JSON data
  })
  .then(JSONdata => {
    console.log(JSONdata); // shows an array containing 10 objects (the users & all their related information)
    JSONdata.forEach(user => {
      console.log(user);
    });
  });

/* 
What we've done is:
- grab the data from the API with fetch
- then convert it to json format
- then log it to the console 
- then run a forEach loop to log each object individually
*/


// Instead of chaining Thenables like we did above, we can now use Async & Await

const myUsers = {
  userList: []
};

// just declaring an arrow function as usual but adding the "async" keyword
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

// The "await" keyword tells JS to wait for completion of the current task before executing the next instruction

myCoolFunction();

// now let's make a function that feeds myUsers with the data returned by myCoolFunction()
const anotherFunction = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunction();


// Let's see some examples to clarify the use of async & await

// Example 1: Workflow function
const getAllUserEmails = async () => {
  // request the data and wait for it to arrive
  const readableStream = await fetch("https://jsonplaceholder.typicode.com/users"); 
  // once it has arrived, convert it to JSON format
  const jsonData = await readableStream.json();
  
  // once you have json data, use map() to make an array with all user emails
  const userEmailArray = jsonData.map(user => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails(); // calling our workflow function


// Example 2: 2nd parameter of fetch() is an object
const getDadJoke = async () => {

  const data = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });

  const jsonJokeData = await data.json();

  console.log(jsonJokeData);
  console.log(jsonJokeData.joke);
}

getDadJoke();

/* 
In this second example, we pass a 2nd parameter to fetch() so we can:
- define the HTTP request method
- set the 'Accept' header to "application/json" 
This header is used to inform the server about the types of content the client can process.
It tells the server that the client prefers to receive JSON data in response.
By defining what type of data we accept from an API, it changes what this API delivers.
We could have set 'Accept' to "text/plain" and then use the .text() method instead of .json()
*/

// Now, let's post data to the API

const jokeObject = {
  id: "B5h311TS7h",
  joke: "I couldn't figure out how the seat belt worked. Then it just clicked."
}

const postDadJoke = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    Accept: "application/json"
  });

  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
}

postDadJoke();