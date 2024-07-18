# JavaScript_DaveGray

- https://courses.davegray.codes/view/courses/web-dev-roadmap-for-beginners/1702821-web-dev-foundations/5379218-javascript
- https://youtu.be/EfAl9bwzVZk

---

# Intro

- JavaScript (JS) adds functionality and interactivity to the web!
- JavaScript can make things happen when users interact with our web pages.
- JavaScript completes the "3 Pillars of the Web" when combined with HTML and CSS
- For the last decade, JavaScript has been the most popular programming language in the world!

I created this free 8 hour JavaScript course with 28 chapters to help you learn the fundamentals.  
This is the stage where you truly begin to learn "web development".

---

# Chapter 1 

## Comments 

A JS comment starts with 2 slashes `//`

## Data Types

There are 4 basic data types:
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

- on your machine (localhost), create a folder that will host your project
- Launch VS code and open that folder
- in VS code file explorer, create a new file and name it `index.html`
- in the editor, type an exclamation mark to use an _Emmet_ Abbreviation that creates a minimal HTML document

>[!tip]
>Emmet Abbreviations are very useful in VS Code: https://docs.emmet.io/cheat-sheet/

- Just like you link CSS to HTML with a `<style>` tag, you can link JS to HTML with a `<script>` tag:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/main.js"></script>
</head>
<body>
    
</body>
</html>
```

---

# Chapter 3 - Strings






@16/475
