class Pizza {
  crust = "original";     // public field
  #sauce = "napolitan";   // private field
  #size;                  // private field without initialization

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here's your ${this.#size} ${this.crust} crust pizza with ${this.#sauce} sauce`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();

// we can access the public field from outside the class
console.log(myPizza.crust);
// but it's better to access it via the getter 
console.log(myPizza.getCrust());

