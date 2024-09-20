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
