// Loops

// while
let myNumber = 0;
while (myNumber < 8) {
  console.log(myNumber);
  myNumber++;
}

// do while
let increment = 8;
do {
  console.log(increment);
  increment++;
} while (increment < 16);
// the do while loop will always execute at least once

// for
for (let i = 16; i < 24; i++) {
  console.log(i);
}

// for i in
let myName = "John Doe";
for (i in myName) {
  console.log(myName.charAt(i)); // logs each character of the string
}

// using the break statement to end a loop
let someone = "Jane Birkin";
let counter = 0;
let letter;
while (true) {
  letter = someone[counter];
  console.log(letter);
  if (letter === "e") break; // end loop when 'e' is found
  counter++;
}

// using the continue statement to skip specific loop iterations
let stupidName = "Ryan Groshling";
for (i = 0; i < stupidName.length; i++){
  // skip the letters 'r' and 'h' to print out 'Ryan Gosling' vertically 
  if (i === 6 || i === 9) {
    continue;
  }
  console.log(stupidName.charAt(i));
}