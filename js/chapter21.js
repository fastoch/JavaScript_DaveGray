// DOM (Document Object Model)
/*

*/

// select an HTML element by ID
const view1 = document.getElementById("view1");

// another way to do that
const view2 = document.querySelector("#view2"); // using # to indicate that it's an ID

// A Single Page Application (SPA) is typically built with different views
// Here's how we can change the style to show or hide the different views
view1.style.display = "none";
view2.style.display = "flex";

// select multiple views
const views = document.getElementsByClassName("view"); // returns an HTMLCollection (not exactly an array)

// another way to select the views having a specific class
const sameViews = document.querySelectorAll(".view"); // returns a NodeList

// select all the divs within a specific view
const divs = view1.querySelectorAll("div");
// we could achieve the same with:
const sameDivs = view1.getElementsByTagName("div");

// select even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

// change the background color and the dimensions of all even divs
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

// changing text in the navbar
const navText = document.querySelector("nav h1"); // select the h1 element inside of the navbar
navText.textContent = "I am a navbar!";

// we can do the same by selecting the navbar and then using the innerHTML property
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;
// Note that the innerHTML value will overwrite the textContent we previously added
// the paragraph should align right because I'm using the flexbox layout + justify-content: space-between


// Now let's talk about navigating the DOM tree
/*
HTML
    >HEAD 
    >BODY
        >Section
            >Div
                >...
*/
