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

// to log all of the keys in the object
console.log(Object.keys(person)); // returns an array

// to log all of the values in the object
for (let key in person) {
  console.log(person[key]);
}

// to delete a property
console.log(person.hasOwnProperty("nestedObject")); // true
delete person.nestedObject;
console.log(person.hasOwnProperty("nestedObject")); // false

// A constructor object
const vehicle = {
  wheels: 4,
  engine: function() {
    return "Vrrooom!";
  }
};

// using the constructor to create another object
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // {doors: 2}
console.log(truck.wheels); // 4 (inherited from vehicle)
console.log(truck.engine()); // Vrrooom!

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
  return "Whoooosh!";
};
console.log(car.engine());
// we overwrote the inherited engine() method

const tesla = Object.create(car);
tesla.engine = function () {
  return "Shhhhhh...";
};
console.log(tesla.wheels);
console.log(tesla.engine());


// Destructuring objects
// The above tesla object has a property called 'doors'
// we can assign the value associated with that property to a variable
// the syntax is: const { property: variable } = object;

const { doors: myVariable } = tesla; 
console.log(myVariable); // 4
// we pulled out the value associated with a specific key (property) and put it into a variable

// we can do that for more than one value at a time
const { doors: variable1, wheels: variable2 } = truck;
console.log(`My truck has ${variable1} doors and ${variable2} wheels.`); 

// we could also name these variables after their corresponding keys (doors and wheels)
const { doors, wheels } = truck;
console.log(`My truck has ${doors} doors and ${wheels} wheels.`);

// we can use object destructuring to pass values to a function
const user = {
  name: 'Alice',
  age: 32,
  email: 'alice@gmail.com'
};

function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser(user); // Hello, Alice! You are 32 years old.