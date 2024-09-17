// JSON - JavaScript Object Notation
/*
JSON is a text format that is completely language-independent.
Therefore, JSON is used to send and receive data in many languages, not just in JavaScript.
In Web Dev, we usually send & receive data between a web browser (the client) and the server hosting the application.
*/

// An object contains properties & methods
const myObj = {
  name: "Dave",
  hobbies: ["coding", "gaming", "soccer"],  // array
  hello: function () {
    console.log("Hello!");
  }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj); 

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);  // {"name":"Dave","hobbies":["coding","gaming","soccer"]}
console.log(typeof sendJSON); // string

// JSON is an intrinsic object that provides functions to convert JS values to and from the JSON format
// stringify() converts a JS value to a JSON string

// what we notice is that JSON does not send functions