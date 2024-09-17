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

## Some tips

- **avoid using var**, stick with const and let
- use **const** unless you need to reassign the value
- use **less** when you know you will reassign the value
- **global variables**, overall, are **not desirable**

---

# Chapter 15 - Arrays

see file `chapter15.js`

- Arrays are a very useful data structure that can store different types of data
- you can actually nest arrays within arrays
- `push` **appends** elements to the end of an array
- `unshift` **inserts** elements at the start of an array
- `push()` and `unshift()` return the new **length** of the array
- `pop()` **removes** the last element from an array and returns it
- `shift()` **removes** the first element from an array and returns it
- the `splice()` method is very versatile 
  - it allows us to remove an element from the middle of an array
  - it also allows us to replace one or many elements 
  - we can also insert new elements anywhere in the array
- `splice()` return a copy of a section of an array
- `reverse()` reverses the elements in an array in place (does not create a new array)
- `join()` adds all the elements of an array into a string, separated by the specified separator 
- `split()` splits a string into substrings using the specified separator and return them as an array
- `concat()` combines 2 or more arrays, and returns a new array without modifying any existing arrays

---

# Chapter 16 - Refactoring the chifoumi game 

see files `chapter16.js` and `chapter16-2.js`

- Refactored version of our chifoumi game from chapter 11 with a **while loop** and an **array**.
- another refactored version of our chifoumi game with **functions**.

The version with functions is significantly longer but it's organised very neatly into functions,  
and functions will let us make the transition to making this game part of the **DOM** in the next version.  

In order to tye our game into the **DOM** of a webpage, we need to use functions.

>[!note] 
>DOM = document object model

>[!important]
>The TDZ (temporal dead zone) is a behavior in JavaScript where variables declared with let and const
>cannot be accessed before their declaration in the code. 
>And since `initGame()` calls `playGame()` which then calls all other functions, we need to invoke `initGame()`
>at the end of the program, after all functions have been declared.

---

# Chapter 17 - Objects

see file `chapter17.js`

- **Object destructuring** is a convenient way to extract values from objects 
- we can then pass these values as arguments to a function

```js
const user = {
  name: 'Alice',
  age: 32,
  email: 'alice@gmail.com'
};

function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser(user); // Hello, Alice! You are 32 years old.
```

---

# Chapter 18 - Classes

see file `chapter18.js`

- The JavaScript Class syntax didn't come about until ES6 in 2015. 
  
To prevent our object properties from being accessed directly through the dot notation,  
we need to use **getters** and **setters**.  

>[!note]
>ECMAScript 6 was the second major revision to JavaScript.

## Child classes

- To declare a **child** class that inherits properties from its **parent** class, we use the keyword **extends**
- The syntax is:  
```js
class SportsCar extends Car {
  constructor(carType) {
    super(carType); // calling the constructor from the parent class
    this.newPorperty = someValue;
  }
}
```
- a **parent** class is also called a **superclass**

>[!important]
>the **super** keyword has to be used in the constructor BEFORE we can ever use the keyword **this**

- **super** calls the constructor of the parent class

## Naming conventions

We previously discussed about not accessing the properties nor setting their values directly, which is why  
we defined getters & setters methods.  
But since JavaScript does allow this, we need to indicate to other developers we're working with that we  
intend these properties to be private. That means they should not be modified or accessed outside of the class,  
they should only be modified within the class using getters & setters methods.  

By convention, we use the underscore notation to indicate that a property is private.  
For example:
```js
this._size = pizzaSize;
this._crust = "thin";
```

There is another way to create objects in JavaScript that solves this problem.  
Because, even though the intentions are good here, we can still access or modify these properties.

## Factory functions 

See file `chapter18-2.js`

A factory function is **another way to create an object** in JavaScript.  
We use it as a factory for object creation.  

Factory functions are a solution to the problem of not being able to create objects that have **private** properties.  
We don't want all our objects' properties to be accessible from anywhere. 

And variables created inside a factory function are not accessible outside of this function.

- Factory functions excel at creating **private variables & methods** through **closures**

>[!note]
>A **closure** is created when a function is defined within another function, allowing the inner function to access variables from the outer function's scope.
>The inner function maintains access to the outer function's scope even after the outer function has finished executing.

- Factory functions can simplify object creation by:
  - Eliminating the need for the **new** keyword
  - Reducing confusion related to the **this** keyword
  - Providing a **more straightforward syntax for object creation**

For more about Factory Functions:
- https://www.perplexity.ai/search/what-s-the-point-of-using-a-fa-sFi2XUf6RF6P6N2.lvmTMQ  
- https://dev.to/snevy1/classes-vs-factory-functions-in-javascript-4fjn  

**Factory functions** are a better way of creating objects than **Classes** because they ensure data encapsulation (privacy).  

## Public and private Class fields 

see file `chapter18-3.js`

Since ES2022, Classes now support public and private fields (properties).  
These fields must be declared **above the constructor**.  
Public fields can be accessed from outside the class, but private ones can only be accessed within the class.  

A great tool to test your website for compatibility: https://caniuse.com/

---

# Chapter 19 - JSON

- JSON stands for JavaScript Object Notation.  
- 

---

EOF

@226/475 (47%)
