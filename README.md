# JavaScript_DaveGray

- https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702821-web-dev-foundations/5379218-javascript
- https://youtu.be/EfAl9bwzVZk

---

# Intro

- JavaScript (JS) adds **functionality** and **interactivity** to the Web!
- JavaScript can make things happen when users interact with our web pages.
- **JavaScript** completes the "*3 Pillars of the Web*" when combined with **HTML** and **CSS**
- For the last decade, JavaScript has been the most popular programming language in the world!

I created this free 8 hour JavaScript course with **28 chapters** to help you learn **the fundamentals**.  
This is the stage where you truly begin to learn "web development".

---

# Chapter 1 

## Comments 

A JS comment starts with 2 slashes `//`

## Data Types

There are **4 basic data types**:
- string (double quotes or simple quotes)
- number
- boolean (true or false)
- undefined: a variable that has not been assigned a value is of type `undefined`

We can use `typeof` to check the data type: 
- `typeof "Dave";` will return "string"
- `typeof 42;` will return "number"
- `typeof true;` will return "boolean"

## Variables

- We can define a variable with the keyword `let`: `let myVariable;`
- since we did not assign any value to this variable, `typeof myVariable` will return "undefined"
- to assign a value to this variable: `myVariable = "Dave";`
- because we used the keyword `let` to initialize `myVariable`, we could _reassign_ its value: `myVariable = 16;`

## Mathematics

```js
let myNumber = 42;
myNumber + 2;  // 44
myNumber * 2;  // 84
myNumber / 2;  // 21
myNumber % 2;  // modulo operator => 0
myNumber = 44 * 2;  // assigns 88 to myNumber
myNumber + myVariable;  // JS automatically converts 88 to "88" and concatenates the variables => "88Dave"
```

## Comparisons

```js
myVariable === myNumber;  // returns false 
myNumber === 88;  // returns true
let myBool = myNumber === 88;  // assigns true to myBool
myNumber !== 88;  // false
myNumber >= 88;  // false
myNumber < 88;  // false
```

## Hello World

`alert("Hello World!");` generates a pop-up that says "Hello World!"

---

# Chapter 2 - Link JS to HTML

- on your machine (**localhost**), create a folder that will host your project
- Launch VS code and open that folder
- in VS code file explorer, create a new file and name it `index.html`
- in the editor, type an exclamation mark to use an *Emmet Abbreviation* that creates a minimal HTML document

>[!tip]
>Emmet Abbreviations are very useful in VS Code: https://docs.emmet.io/cheat-sheet/

- Just like you link CSS to HTML with a `<link>` tag, you can link JS to HTML with a `<script>` tag
- see file `chapter2.html`

---

# Chapter 3 - Strings

see file `chapter3.js`  

- Of course, there are many more **methods** & **properties** that can be used with strings.

>[!important]
>Methods require the use of parentheses at the end to be called into action, whereas properties don't.

---

# Chapter 4 - Numbers

see file `chapter4.js`  

- if we use the `Number()` function on data that cannot be converted to a number, it will return `NaN`, 
which is an acronym for **Not a Number**.
- The `toFixed()` method returns **string data**, not number data.

---

# Chapter 5 - Math Methods

see file `chapter5.js`  

---

# Chapter 6 - Code challenge

see file `chapter6.js`  

---

# Chapter 7 - if statements

see file `chapter7.js` 

---

# Chapter 8 - Switch statements

see file `chapter8.js` 

---

# Chapter 9 - Ternary operator

see file `chapter9.js`  

---

# Chapter 10 - User input

see file `chapter10.js` 

---

# Chapter 11 - Your first interactive game

see file `chapter11.js` 

---

# Chapter 12 - intro to Loops

see file `chapter12.js`  

- You can use the **break** keyword to get out of any loop.
- You can use the **continue** keyword to skip the current iteration.

---

# Chapter 13 - Functions

see file `chapter13.js` 

- Methods are **built-in functions** 
- When we declare a function, we make our own **reusable code blocks**.

## Anonymous functions

- if you don't provide a name for your function, it is an **anonymous function**
- you can assign an anonymous function to a variable and then call the function by using the variable
- anonymous functions are useful when you need to call functions based on **events on a webpage**, or when 
you need to **pass a function as an argument** to another function

## ARROW FUNCTIONS

- simply remove the word 'function' and put an arrow **=>** after the parentheses that contain the parameters
- **normal function** declaration: function sum(a, b) { return a + b; }
- **arrow function** declaration: (a, b) => { return a + b; }

---

# Chapter 14 - Scope

see file `chapter14.js` 

## var, let, and const

- var, let, and const are keywords we use to declare variables
- from 1995 to 2015, **var** was the only way to declare variables in JavaScript
- With the introduction of let and const, we cannot declare the same variable twice
- With **let**, you can reassign the value of a variable (let me reassign)
- With **const**, you cannot reassign the value of a variable (constant)

## Global scope

- if you define a variable **outside of any function**, it is a **global variable**.
- a global variable **can be accessed from anywhere** in your JavaScript code.

## Local scope

Local scope refers to the **visibility** and **accessibility** of variables within a specific block of code,  
typically **within a function or a code block denoted by curly braces** {}. 

- variables declared with **var** are **function-scoped**
- variables declared with **let** and **const** are **block-scoped**

---

# Chapter 15 - 




@123/475 (25%)
