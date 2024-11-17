// We're asking the users to enter their phone number via an html form

document.getElementById("phoneNum").addEventListener("input", (event) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum"); // select the input element from our html document
  const format = document.querySelector(".phoneFormat"); // select the element whose class is phoneFormat
  const phone = input.value; // get the actual input 
  const found = regex.test(phone); // test this input against our regex

  // if the user input does not match our regex but is not null (has a length)
  if(!found && phone.length) {
    input.classList.add("invalid"); // apply the "invalid" CSS class to our input element (txt color = red)
    format.classList.add("block"); // apply "block" CSS class so an informative paragraph shows up
  // if the input matches the regex, or if the user did not provide any input yet
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

// a phone num starts with 3 digits that might be surrounded by parentheses
// then another group of 3 digits and finally a group of 4 digits
// these 3 groups of digits might be separated by a dash, a period or a space

// the goal is to give some feedback to the user while he's typing

// if the user input is invalid, we change the text color to red and display an informative message
// if the input field is empty, there's no informative message to tell the user their input is invalid
// and if the input is valid, no message is diplayed and the text color turns black 

// Now we've added an event listener to the input field (inside an html form), let's add an
// event listener to the form itself
document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the page from reloading on form submit
  const input = document.getElementById("phoneNum");
});