// ARRAYS
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

// remove an element from the middle of an array
myArray.splice(1,1); // start at position 1 and remove 1 element 
console.log(myArray);

// replace 2 items in the array starting at position 1
myArray.splice(1,2,"fastoch",16);
console.log(myArray);

// if we don't want to delete any value in our array
myArray.splice(1,0,true); // insert a new element at position 1 without replacing anything
console.log(myArray); 

// return a copy of a section of an array
const array0 = ["a","b","c","d","e","f","g"];
const array1 = array0.slice(0,3); // from position 1 to position 3 (exclusive)
const array2 = array0.slice(2); // from position 2 to the end 
const array3 = array0.slice(3,6); // from position 3 to position 5
console.log(array1); // [ "a", "b", "c" ]
console.log(array2); // [ "c", "d", "e", "f", "g" ]
console.log(array3); // [ "d", "e", "f" ]

// reverse an array
array0.reverse(); // does not create a new array
console.log(array0); // [ "g", "f", "e", "d", "c", "b", "a" ]

// ARRAY to STRING
// adds elements of an array into a string, separated by the specified separator
const newString = array0.join(""); // separator = empty string
console.log(newString); // gfedcba
const newString2 = array0.join(); 
console.log(newString2); // g,f,e,d,c,b,a

// STRING to ARRAY
// split a string into substrings using the specified separator and return them as an array
const array4 = newString2.split(","); 
console.log(array4); // [ "g", "f", "e", "d", "c", "b", "a" ]

// concatenate arrays using concat()
const array5 = array1.concat(array3);
console.log(array5); // [ "a", "b", "c", "d", "e", "f" ]

// concatenate arrays using the spread [...] operator
const array6 = [...array1, ...array3];
console.log(array6); // [ "a", "b", "c", "d", "e", "f" ]

// Multi-dimensional arrays
const multiArray = [[1,2,3], [4,5,6], [7,8,9]];
console.log(multiArray[1][2]); // 6
