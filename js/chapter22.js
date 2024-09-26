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

// useCapture & event bubbling
/* 
When useCapture is set to false, which is the default, we enable event bubbling.
Event bubbling is a DOM event propagation method where an event triggered on the INNERMOST element 
automatically triggers events on all ancestor elements. This propagation keeps on until it reaches the outermost element.

In the above example, when we click the h2 element, every other event listener is triggered, in the div that contains the h2, 
and then in the view that contains the div.

When useCapture is set to true, the event listener is triggered during the capturing phase of event propagation, rather than the default bubbling phase. 
This means the event is captured and handled by the OUTERMOST element first, then propagated to the inner elements until it reaches its target.
*/

view.addEventListener("click", (event) => {
  view.style.backgroundColor = "purple";
}, true);

div.addEventListener("click", (event) => {
  div.style.backgroundColor = "blue";
}, true);

h2.addEventListener("click", (e) => {
  e.target.textContent = "clicked";
}, true);

// we can use the stopPropagation() function in the outermost element to prevent triggering inner events
view.addEventListener("click", (event) => {
  event.stopPropagation();
  view.style.backgroundColor = "purple";
}, true);  // with useCapture set to true, the propagation happens inwards (towards the innermost element)

// or we can use the stopPropagation() function in the innermost element to prevent triggering outer events
h2.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.textContent = "clicked";
});  // notice that useCapture is not passed, meaning it's set to false, so the propagation happens outwards


/*
Notice how we used event.target for changing the h2 element, but we didn't do the same for the div and the view.
When using event.target, only the actual event target gets affected, no matter which element you apply the addEventListener() to.
*/