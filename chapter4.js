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
