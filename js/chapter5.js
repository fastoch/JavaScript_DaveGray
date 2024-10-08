// Math is a built-in object that has properties and methods 
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.trunc(Math.PI)); // Output: 3
console.log(Math.round(Math.PI)); // Output: 3
console.log(Math.round(3.5)); // Output: 4
console.log(Math.ceil(3.1)); // Output: 4
console.log(Math.floor(3.8)); // Output: 3

console.log(Math.pow(2, 3)); // Output: 8 (base number, exponent)

console.log(Math.min(5, 10, 15, 20, 25)); // 5
console.log(Math.max(5, 10, 15, 20, 25)); // 25

console.log(Math.random()); // Output: a pseudo-random number between 0 (included) and 1 (excluded)
console.log(Math.ceil(Math.random() * 10)); // random integer between 1 and 10 (slim chance of getting 0)

// to avoid returning zero when using random()
console.log(Math.floor(Math.random() * 10) + 1); // random integer between 1 and 10 (no risk of getting 0)