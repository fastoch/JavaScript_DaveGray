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


// Return only posts where the userId is equal to 4
const filteredPosts = posts.filter((post) => {
  return post.userId === 4;
});
console.log(filteredPosts);


// for each object in filteredPosts, return the id multiplied by 10
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts); // [310, 320, 330, 340, 350, 360, 370, ...]


// return the sum of all items in mappedPosts
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);


// forEach(), filter(), map(), and reduce() are examples of Higher Order Functions
// reduce() is different because it uses something called an "accumulator"