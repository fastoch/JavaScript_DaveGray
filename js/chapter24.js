// MODULES

/*
- They're used to export & import different sections of code from one file to another.
- These sections are usually functions or classes.
*/

/* IMPORTANT!!! */
/*
In your .html file, you need to set the type attribute to "module" in your <script> tag:
<script type="module" src="js/main.js"></script>

- That lets JS know we'll be using modules.
- That also automatically applies the 'defer' keyword, so we don't need to add it to the <script> tag like we did in chapter 22.
- And finally, this automatically applies the strict mode to your JS.
*/

const playGuitar = () => {
  return "Playing guitar!";
};

const shredding = () => {
  return "Shredding some licks!";
};

const plucking = () => {
  return "Plucking the strings...";
};

// we can now EXPORT these functions for use in another .js file

// to export only one of them and make it the default export for the current file:
export default playGuitar;

// to export multiple functions:
export { shredding, plucking };

// we can also export functions inline, when we create them
export function playPiano() {
  return "Playing the piano!";
};

export const touching = () => {
  return "touching the keys";
};

// now we will import these functions into chapter24-2.js