// Web Storage API

// Not part of the DOM - refers to the 'window' API
// Available to JS via the global variable 'window'

// We dot not have to type 'window', it is implied.
window.alert("Hello!"); // explicit reference
alert("Hello!"); // implicit reference

const myObject = {
  name: "fastoch",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
}

myObject.logName(); // just testing the logName method

// Session storage = data is accessible only while logged in to the website
// Local storage = data remains accessible after closing the web browser

/* IMPORTANT! 
Both session storage and local storage only store string data
Which is why we use the JSON format to store our data within the Web storage API
*/

// in both local storage & session storage, each item is stored as a (key, value) pair

sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject)); // store myObject as a string
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage")); // make it an object again
console.log(mySessionData);

// Of course, JSON does lose the method declared within our object, like we've seen in chapter 19


// Now we can do the same but making the data persistent this time
localStorage.setItem("myLocalStorage", JSON.stringify(myObject)); 
let myLocalData = JSON.parse(localStorage.getItem("myLocalStorage")); 
console.log(myLocalData);

// now, if we close the browser and reopen it, the session storage is empty whereas the local storage data is still there
// to access both storage types, open the Chrome dev tools and select the Application tab > Storage


// Let's cover a few more methods & properties related to the Web storage API

// to remove an item via its name
localStorage.removeItem("myLocalStorage");
myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData); // null

// to clear all of the local storage
localStorage.clear();

// to select an item via its position 
const firstItem = localStorage.key(0); // the key is the name of the storage
console.log(firstItem);

// to get the number of items available in my storage
let storageLength = localStorage.length;
console.log(storageLength);
