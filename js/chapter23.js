// Web Storage API

// Not part of the DOM - refers to the 'window' API
// Available to JS via the global variable 'window'

// We dot not have to type 'window', it is implied.
window.alert("Hello!"); // explicit reference
alert("Hello!"); // implicit reference

const myObject = {
  name: "fastoch",
  logName: function() {
    console.log(this.name);
  }
}

const myArray = ['eat','sleep','code'];

myObject.logName();

// Session storage = 
// Local storage = 

sessionStorage.setItem("myStorage", myObject);