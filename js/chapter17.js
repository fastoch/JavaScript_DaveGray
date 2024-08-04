// OBJECTS

// Syntax: key-value pairs in curly braces
const person = {
  // properties: values that can be of any type (string, number, boolean, object, array)
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["gaming", "coding"],
  nestedObject: {
    key1: "value1",
    key2: "value2"
  },
  // objects can have methods (functions that we define within the object)
  action: function() {
    return "Hello World!";
  },
  action2: function() {
    return `Time for ${this.hobbies[1]}!`; // the keyword 'this' refers to the object
  }
};
console.log(person);
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.nestedObject.key1);
console.log(person.action());
console.log(person.action2());

// A constructor object
const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vrrooom!";
  }
}

// using the constructor to create another object
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // {doors: 2}

