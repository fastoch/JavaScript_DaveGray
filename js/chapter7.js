// if statements

let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;

// Checking if soup is defined and not null
if (soup) {
    reply = `Here's your order of ${soup}.`;
} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);