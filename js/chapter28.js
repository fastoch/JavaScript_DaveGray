// We're asking the users to enter their phone number via an html form
document.getElementById("phoneNum").addEventListener("input", (event) => {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat");
  const phone = input.value;
  const found = regex.test(phone);
  if(!found && phone.length) {
    input.classList.add("invalid");
  }
});

// a phone num starts with 3 digits that might be surrounded by parentheses
// then another group of 3 digits and finally a group of 4 digits
// these 3 groups of digits might be separated by a dash, a period or a space