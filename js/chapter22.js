// EVENT LISTENERS
/*
Before we can interact with the DOM, we need to ensure that the DOM has actually loaded into the browser.
For that, when we declare our script in the <head> of our HTML document, we need to use the keyword defer.
*/
<script defer src="js/main.js"></script>

// now the page will be loaded before our JavaScript code gets executed

// let's define a view and select some elements inside of it
const view = document.querySelector("#view");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)
// useCapture defaults to false
const doSomething = () => {
  alert("doing something");
}

h2.addEventListener("click", doSomething());

// adding an event listener using an anonymous function
h2.addEventListener("click", (event) => {
  console.log(event.target);  // the target is the h2 element
  event.target.textContent = "Clicked"; // change the content of the h2 element
});

// if the HTML document (the webpage) is loaded, log a message to the console
// and start our web application
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp(); 
  }
});

// defining the initApp function
const initApp = () => {
  console.log("Initializing the app...");
  const view = document.querySelector("#view");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
  });
  div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
  });
  h2.addEventListener("click", (event) => {
    event.target.textContent = "clicked";
  });
};