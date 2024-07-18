// String methods & properties
const myVar = "Mathematics";

// The length property returns the number of characters in a string
console.log(myVar.length); // Output: 11

// The charAt() method returns the character at the specified index (0-based)
console.log(myVar.charAt(0)); // Output: M

// The indexOf() method returns the index of the first occurrence of a specified value in a string
console.log(myVar.indexOf("a")); // Output: 1
console.log(myVar.indexOf("mat")); // Output: 5
console.log(myVar.indexOf("Mat")); // Output: 0

// The lastIndexOf() method returns the index of the last occurrence of a specified value in a string
console.log(myVar.lastIndexOf("a")); // Output: 6

// The slice() method accepts a start and an optional end index and returns a new string
console.log(myVar.slice(2, 7)); // Output: thema (end index is exclusive)
console.log(myVar.slice(2)); // Output: thematics (end index is not provided, defaults to the end of the string)

// The toUpperCase() method returns the calling string value converted to uppercase
console.log(myVar.toUpperCase()); // Output: MATHEMATICS
console.log(myVar.toLowerCase()); // Output: mathematics

// The includes() method returns true if a string contains the specified value, otherwise false
console.log(myVar.includes("mat")); // Output: true

// The split() method splits a string into an array of substrings based on a specified delimiter
console.log(myVar.split("e")); // Output: ["Math", "matics"]
console.log(myVar.split("")); // Output: ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]
console.log("Patrick,Paul,Malina".split(",")); // Output: ["Patrick", "Paul", "Malina"]
console.log("just playing with the split method".split(" ")); // Output: ["just", "playing", "with", "the", "split", "method"]

