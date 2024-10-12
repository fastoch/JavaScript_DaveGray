// let's import the functions we declared in chapter24.js
import playGuitar from "./chapter24.js";
import { shredding, plucking } from "./chapter24.js";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());

/* 
You can rename those functions when importing them using the 'as' keyword.
This is particularly useful for avoiding naming conflicts, 
or making imported functions more contextually relevant to your code.
*/

// you can also import all modules at once 
import * as allModules from "./chapter24.js";

// when doing so, you need to use the name you gave this global import
console.log(allModules.default()); // calls playGuitar(), which is the default export
console.log(allModules.shredding());
console.log(allModules.plucking());