// Higher Order Functions

// A function that does at least one of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from "./posts.js";

// for each post in the array of objects named "posts", log it to the console
posts.forEach((post) => {
  console.log(post);
});

// notice that we didn't need to define an iterator, nor to increment it

console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 4;
});

console.log(filteredPosts);