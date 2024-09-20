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


// Now let's talk about adding or removing elements to the DOM (the webpage)

// while view2 has a last child (node), remove it
while (view2.lastChild) {
    view2.lastChild.remove();
}
// this will clear out the entire webpage, except for nodes that are not part of the view2 section

// adding elements via a function
const createDivs = (parent, iterator) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iterator;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center"; // vertical alignment
    parent.append(newDiv);
}
// create 12 divs and append them to the view2 element
for (i = 1; i <= 12; i++) {
    createDivs(view2, i);
}
