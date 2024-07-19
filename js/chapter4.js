
// Numbers

const myInteger = 42;
console.log(myInteger);

const myFloat = 42.30;    // 42.3
console.log(myFloat);

console.log(32.0 === 32); // true
console.log(32.02 === 32); // false

const myString = "42";
console.log(myString === myInteger); // false because the data types are different

console.log(myString + 3); // "423"
console.log(Number(myString) + 3); // 45
console.log(Number("Dave")); // NaN (Not a Number)
console.log(Number(true)); // 1
console.log(Number(false)); // 0


// Number Methods

// The Number.isInteger() method determines whether the passed value is an integer
let myNumber = 16;
console.log(Number.isInteger(myNumber)); // true
myNumber = 16.7;
console.log(Number.isInteger(myNumber)); // false

// The Number.parseFloat() method parses a string and returns a floating-point number
console.log(Number.parseFloat("3.14")); // 3.14 
console.log(Number.parseFloat("3.14abc")); // 3.14

// The Number.parseInt() method parses a string and returns an integer
console.log(Number.parseInt("16")); // 16
console.log(Number.parseInt("16.7")); // 16
console.log(Number.parseInt("16abc")); // 16
console.log(Number.parseInt("abc16")); // NaN

// The toFixed() method formats a number with a specified number of decimal places and returns a string
console.log((1234.56789).toFixed(2)); // "1234.57" (rounded up)

// The toString() method returns a string representation of a number
console.log((1234).toString()); // "1234"
console.log((1234).toString(16)); // "4d2" (hexadecimal)
console.log((1234).toString(8)); // "2322" (octal)
console.log((1234).toString(2)); // "1111010010" (binary)

// We can get the benefits of several methods at once by chaining them together
console.log(Number.parseFloat("3.145678abc").toFixed(2)); // "3.15"
