// Arrays
const myArray = [];

// add elements to the array
myArray[0] = "fastoch";
myArray[1] = 82;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length); 

// last element in the array
console.log(myArray[myArray.length - 1]);

// add data to the end of an array
myArray.push("Sandro");
console.log(myArray);

// remove last element from an array
const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// remove the first element from the array
const firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

// add data to the beginning of an array
myArray.unshift(42);
console.log(myArray);