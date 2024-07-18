# JavaScript_DaveGray

- https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702821-web-dev-foundations/5379218-javascript
- https://youtu.be/EfAl9bwzVZk

---

## Intro

- JavaScript (JS) adds functionality and interactivity to the web!
- JavaScript can make things happen when users interact with our web pages.
- JavaScript completes the "3 Pillars of the Web" when combined with HTML and CSS
- For the last decade, JavaScript has been the most popular programming language in the world!

I created this free 8 hour JavaScript course with 28 chapters to help you learn the fundamentals.  
This is the stage where you truly begin to learn "web development".

## Chapter 1 

### Comments 

A JS comment starts with 2 slashes `//`

### Data Types

There are 4 basic data types:
- string (double quotes or simple quotes)
- number
- boolean (true or false)
- undefined: a variable that has not been assigned a value is of type `undefined`

We can use `typeof` to check the data type: 
- `typeof "Dave";` will return "string"
- `typeof 42;` will return "number"
- `typeof true;` will return "boolean"

### Variables

- We can define a variable with the keyword `let`: `let myVariable;`
- since we did not assign any value to this variable, `typeof myVariable` will return "undefined"
- to assign a value to this variable: `myVariable = "Dave";`
- because we used the keyword `let` to initialize `myVariable`, we could _reassign_ its value: `myVariable = 16;`

### Mathematics

```js
let myNumber = 42;
myNumber + 2;  // 44
myNumber * 2;  // 84
myNumber / 2;  // 21
myNumber % 2;  // modulo operator => 0
myNumber = 44 * 2;  // assigns 88 to myNumber
myNumber + myVariable;  // JS can concatenate a string and a number by automatically converting the number to a string => "88Dave"
```

### Comparisons

```js
myVariable === myNumber;  // returns false 
myNumber === 88;  // returns true 
```




@6/475
