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


  // Let's write a few other event listeners that we could add to our initApp() function

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
  Notice how we used event.target for the h2 element, but we didn't do the same for the div and the view.
  When using event.target, only the actual event target gets affected, no matter which element you apply addEventListener() to.
  */

  // Let's associate our click event with removing a class and adding a new one to our view element
    // Those are prexisting classes defined in our .css file
  view.addEventListener("click", (event) => {
    view.classList.remove("darkblue");
    view.classList.add("purple");
  }, true);

  // and we could get the same result by toggling the background color when clicking the view element
    // if the class is already part of the list, it gets removed
    // and if it's not in the classList, it gets added
  view.addEventListener("click", (event) => {
    view.classList.toggle("darkblue");
    view.classList.toggle("purple");
  }, true);

  // we could also change the class for the div element
  // but we couldn't use classes for changing the text of the h2 element
  h2.addEventListener("click", (e) => {
    const myText = e.target.textContent;
    myText === "Hello!" ? myText = "clicked" : "Hello!";
  });

  // another event listener example
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });
  // to toggle between large navbar and slim navbar depending on the pointer position
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });


  // Now let's see how to handle events with forms 
  // The following event listeners would also be part of our initApp() function (hence the indentation)
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    console.log("submit event");
  });
